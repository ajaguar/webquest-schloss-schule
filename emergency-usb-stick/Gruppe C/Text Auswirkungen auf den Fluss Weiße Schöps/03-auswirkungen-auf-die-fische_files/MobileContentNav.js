// @version @PACKAGE_VERSION@

define("MobileContentNav", [], function() {


    var MobileContentNav = function(dom_element, options)
    {
        this.dom_element = $(dom_element);
        this.options = options;
        this.content_width = this.getContentWidth();
        this.initialize();
    };

    jsb.registerHandler("MobileContentNav", MobileContentNav);


    MobileContentNav.prototype = {

        initialize: function()
        {
             var that = this;

             var tpl = ['<div class="mobile_nav_container mobile_content_nav collapsed">',
                         '    <div class="event_catcher"></div>',
                         '    <div class="view">',
                         '        <div class="inner">',
                         '            <div class="header"><h2>' + (this.options.title || '') + ' <span class="btn_close ico ico_close"></span></h2></div>',
                         '            <div class="scrollbox mobile_list_view">',
                         '                <div class="scrollcontent"></div>',
                         '                <span tabindex="0"></span>',
                         '            </div>',
                         '        </div>',
                         '    </div>',
                         '</div>'];

             this.view = $(tpl.join(''));
             this.view.toggleClass('flyout', !Modernizr.touch);// always show flyout when not on touch device
             this.scrollbox = $('.scrollbox', this.view);
             this.scrollcontent = $('.scrollcontent', this.view);
             this.nav = $(' > ul', this.dom_element).clone();

             this.nav.addClass('list');
             this.nav.find('li').addClass('item');
             this.nav.find('ul').addClass('list');

             this.scrollcontent.empty();
             this.scrollcontent.append(this.nav);

             $('body').append(this.view);

             /*
              * HACK: reapply JSB on cloned dom of navi to reanable toggle behaviour
              */
             this.nav.find("[data-jsb-applied=toggle]").addClass('jsb_ jsb_toggle');
             jsb.applyBehaviour(this.nav);

             this.tablet_screen = window.matchMedia( "(max-width: 768px)" );
             this.small_screen = window.matchMedia( "(max-width: 568px)" );
             this.inititial_tabled_screen_match = this.tablet_screen.matches;

             this.setUpScroller();

             $('.event_catcher', this.view).on('click touchstart', function(e){
                 e.preventDefault();
                 that.hide();
             });

             jsb.on('ContentNav::SHOW', function(){
                 that.show();
             });

             $('.btn_close', this.view).on('click touchstart', function(e){

                 e.preventDefault();
                 e.stopPropagation();
                 that.hide();
             });

             $(window).on('resize', function(){
                that.hide();
                that.updateLayout();
             });

             // show flyout and set focus for tabbing
             $('.ico_menu', this.dom_element).on('click', function(e){
                 e.preventDefault();
                 that.show();

                 $(this).blur();

                 if (!Modernizr.touch) {
                    that.nav.find('li a').first().focus();
                 }
             });

             // hide flyout and set focus for tabbing
             this.nav.find('li a').last().on('focusout', function(){
                 $('.selected a', '#contentnav').focus();
                 that.hide();
             });

             this.nav.on('touchend', '.js_toggle', function()
             {
                 that.refreshScroller();
             });

             this.updateLayout();
        },

        getContentWidth: function()
        {
                var that = this;
                var left_margin = 72; //the first level has that language flag margin
                var content_width = 0;

                $('ul', that.dom_element).each(function(i, el){
                    var w = left_margin;

                    $('> li > a', el).each(function(i, el){
                        w = w + $(el).outerWidth(true);
                    });

                    left_margin = 0; //first level processed, get rid of margin

                    if (w > content_width)
                    {
                        content_width = w;
                    }
                });

                return content_width;
        },


        updateLayout: function()
        {
            var that = this;
            var width = this.dom_element.width();
            var parent = this.dom_element.parent().parent();

            /* solange breite der navi elemente berechnen bis auch der firefox es hinbekommt */
            if (!this.tablet_screen.matches && this.content_width > 1005)
            {
                setTimeout(function()
                {
                    parent.removeClass('collapsed');
                    that.content_width = that.getContentWidth();
                    that.updateLayout();
                }, 300);
                return;
            }

            if (Modernizr.touch)
            {
                this.view.toggleClass('flyout', !this.small_screen.matches);
            }

            if (!parent.hasClass('collapsed'))
            {
                this.dom_element.find('.placeholder').remove();
            }

            /* bei wechsel von mobile navi auf regular nav */
            if (this.inititial_tabled_screen_match && !this.tablet_screen.matches)
            {
                parent.removeClass('collapsed');
                this.content_width = this.getContentWidth();
            }

            var selected_dropdown_element = this.nav.find('.dropdown .selected');
            if (selected_dropdown_element.length > 0)
            {
                selected_dropdown_element.parent().parent().addClass('toggled');
            }

            parent.toggleClass('collapsed', (this.content_width > width || this.tablet_screen.matches));

            if (parent.hasClass('collapsed') && !this.dom_element.find(' > ul li').hasClass('selected'))
            {
                this.dom_element.find(' > ul').append('<li class="selected placeholder"><a>' + this.options.title + '</a></li>');
            }
        },

        setUpScroller: function()
        {
            if (Modernizr.touch)
            {
                this.scroller = new iScroll(this.scrollbox.get(0));
            }else{
                this.scrollbox.css({
                    'overflow-x': 'hidden',
                    'overflow-y': 'auto'
                });
            }
        },

        setViewPosition: function()
        {
            var top = this.dom_element.offset().top - 10;
            var max_height = Math.min(($(window).height() - 30), 580);

            $('.view', this.view).css({
                'top': top,
                'max-height': max_height
            });

            if (Modernizr.touch)
            {
                $('html, body').animate({ scrollTop: top - 20 });
            }
        },

        resetViewPosition: function()
        {
            $('.view', this.view).css({
                'top': '',
                'max-height': ''
            });
        },

        show: function()
        {
            if (!this.small_screen.matches || Modernizr.touch === false){
                this.setViewPosition();
            }else{
                this.resetViewPosition();
            }

            this.view.removeClass('collapsed');
            this.refreshScroller();
            /* prevent body from scrolling while open */
            if (Modernizr.touch)
            {
                $(document.body).addClass('block');
            }
        },

        hide: function()
        {
            this.view.addClass('collapsed');
            if (Modernizr.touch)
            {
                $(document.body).removeClass('block');
            }
        },

        refreshScroller: function()
        {
            if (this.scroller)
            {
                var that = this;
                setTimeout(function()
                {
                    that.scroller.refresh();
                }, 500);
            }
        }

    };
});
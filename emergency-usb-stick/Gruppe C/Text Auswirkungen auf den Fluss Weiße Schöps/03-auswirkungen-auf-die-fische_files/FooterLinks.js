// @version @PACKAGE_VERSION@

define("FooterLinks", [], function() {

    var FooterLinks = function(dom_element, options)
    {
        this.dom_element = $(dom_element);
        this.options = options;
        this.initialize();
    };

    FooterLinks.prototype = {

        initialize: function()
        {
            $('select', this.dom_element).on('change', function(e){
                window.location.href = this.options[this.selectedIndex].value;
            });
        }
    };

    jsb.registerHandler('FooterLinks', FooterLinks);


});

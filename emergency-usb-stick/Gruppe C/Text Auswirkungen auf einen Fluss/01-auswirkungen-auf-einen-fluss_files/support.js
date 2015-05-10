// Use jQuery via jQuery(...)
 jQuery.noConflict();
     
     
  
	 
// cookie functions
function getCookie(c_name)
	{
		var i,x,y,ARRcookies=document.cookie.split(";");
		for (i=0;i<ARRcookies.length;i++)
  		{
  			x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  			y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  			x=x.replace(/^\s+|\s+$/g,"");
  			if (x==c_name)
    			{
    			return unescape(y);
    			}
  		}
	}
function SetMyCookie(Bezeichner,Wert,Dauer)
   		{
      		jetzt=new Date();
      		ende=new Date(jetzt.getTime() + (Dauer * 1000 * 60 ));
      		document.cookie=Bezeichner+"="+Wert+";expires="+ende.toGMTString()+";path=/;";
			
   		}

		
jQuery(window).load(function(){
			
			// PW nur bei Hintergründen anzeigen
	    	if (  jQuery(".pathway:contains('Hintergrund')").length > 0 ) {
       			// und auch nur wenn Wall nicht gesetzt ist
				var PW = getCookie("Wall");
				if (PW == undefined)
  				{
					
				    // Slide Down
					 jQuery.fn.delay = function( time, name ) {
						return this.queue( ( name || "fx" ), function() {
							var self = this;
							setTimeout(function() {  jQuery.dequeue(self); } , time );
						});
					};
					 jQuery('#paywall').delay(2000).slideDown();
				}
			}
		
		// klick to pay functions
		// pp
		 jQuery('#PWpp').click(function(){
               window.open( 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=paypal@klimaretter.info&item_name=klimaretter.info&currency_code=EUR&return=http://www.klimaretter.info');
               SetMyCookie('Wall','pp','60');
			    jQuery('#paywall').delay(500).slideUp();
               return true;
             });
		// ev
		 jQuery('#PWev').click(function(){
               window.open( 'https://verein-klimawissen.de/');
               SetMyCookie('Wall','ev','60');
			    jQuery('#paywall').delay(500).slideUp();
               return true;
             });
		// done
		 jQuery('#PWdone').click(function(){
                jQuery('#paywall').delay(500).slideUp();
               SetMyCookie('Wall','done','1440');
               return true;
             });
		// closed
		 jQuery('#PWclose').click(function(){
               jQuery('#paywall').delay(500).slideUp();
              SetMyCookie('Wall','closed','10');
			  return true;
             });
	});
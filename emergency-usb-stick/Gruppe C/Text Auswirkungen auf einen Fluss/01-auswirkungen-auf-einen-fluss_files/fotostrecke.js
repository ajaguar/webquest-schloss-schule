// JavaScript Document Fotostrecke (.fotostrecke) �ffnet in neuem fenster

window.addEvent('domready', function()
{
	var fstlink = $$('.fotostrecke');
    fstlink.each(function(element)
		{
			fstlink.setProperty('target', '_blank');
		});  

}); 





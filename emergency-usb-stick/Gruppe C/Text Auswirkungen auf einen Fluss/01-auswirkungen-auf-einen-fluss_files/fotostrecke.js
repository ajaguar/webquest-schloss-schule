// JavaScript Document Fotostrecke (.fotostrecke) öffnet in neuem fenster

window.addEvent('domready', function()
{
	var fstlink = $$('.fotostrecke');
    fstlink.each(function(element)
		{
			fstlink.setProperty('target', '_blank');
		});  

}); 





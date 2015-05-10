function et_escape(param)
{
	return encodeURIComponent(param);
}

function et_unescape(param)
{
	return decodeURIComponent(param);
}var et_easy = 1;

function et_eC(param)
{
	et_secureId = param;
	et_gp='';
	var et_ref = et_getReferrer();

	if(et_sem=='1')
		et_gp+='&et_sem=1';
		
	et_gp += '&swidth='+et_sw+'&sheight='+et_sh+'&siwidth=' + et_iw + '&'+'siheight='+et_ih+'&scookie='+et_co+'&scolor=' +et_sc;

	if(typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown')
	{
		et_gp+='&et_pagename=' + et_escape(et_pagename.substr(0, et_maxValueLength));
		et_easy = 0;
	}
	
	if(et_easy)
		et_gp+='&et_easy=1'; 

	if(et_areas!='')
		et_gp +='&et_areas=' + et_escape(et_areas.substr(0, et_maxValueLength));
	
	if('' == et_target) 
	{
		et_target = ''; 
		et_tval = '0';
		et_tonr = '0'; 
		et_tsale = 0; 
	} 

	et_gp += '&'+'et_target=' + et_escape( et_tt.length ? et_tt : et_target ) +',' + ( et_tv ? et_tv: et_tval ) + ',' + ( et_to ? et_to : et_tonr )+ ','+(et_ts ? et_ts : et_tsale )+','+( typeof( et_cust ) == 'number' ? et_cust : 0 );
	
	if(et_lpage)
		et_gp += '&et_lpage='+et_lpage;
	
	if(et_se!='')
		et_gp +='&et_se='+et_se;
		
	if( et_trig!='' )
		et_gp+='&et_trig='+et_trig;
	
	if(et_basket!='')
		et_gp += '&et_basket=' + et_escape(et_basket); 

	if( et_url ) 
		et_gp += '&et_url=' + et_url; 
	else
	{
		var et=document.location.href.split('?'); 
		et_gp += '&et_url='+et_escape( et[0] );
	}

	et_gp+='&slang='+et_la; 

	if(et_tag!='')
		et_gp+='&et_tag='+et_tag; 
	
	if(et_organisation!= '') 
		et_gp += '&et_organisation=' + et_organisation; 
	
	if(et_demographic!='')
		et_gp+='&et_demographic='+et_demographic;

	if(et_ssid!='')
		et_gp+='&et_ssid='+et_ssid;

	if(et_ip!='')
		et_gp+='&et_ip='+et_ip;

	if(et_subid!='')
		et_gp+='&et_subid='+et_subid;
		
	if(et_ref!='')
		et_gp+='&ref='+et_ref;

	if(typeof(et_pl) != 'undefined' && typeof(et_pl) != 'unknown' && et_pl!='' ) 
		et_gp +='&p='+et_escape(et_pl);
		
	var et_dt = new Date(); 
	var et_tzOffset = et_dt.getTimezoneOffset()
		
	et_imageSrc = et_server + '/' + et_cntScript + '?v=' + et_ver + '&java=y&tc='+et_dt.getTime()+'&et_tz=' + et_tzOffset + '&et=' + et_secureId + '&et_ilevel=' + et_ilevel + et_gp + et_up + et_addFpcParams();
	et_imageSrc = et_imageSrc.substr(0, et_maxUrlLength);

	if(et_first && !(false || true || et_optInActive) && !document.getElementById('et_image'))
	{
		document.write('<p id="et_image" style="display:none;"></p>');
	}

	et_createScriptTag(et_imageSrc);
}

function et_createCntImage(imgSrc, href)
{
	if(et_first)
	{
		et_first = false;

		var et_anchor = document.createElement('a');
		et_anchor.href = href;
		et_anchor.target = '_blank';
		et_anchor.innerHTML = '<img style="border:0px;" alt="" src="'+imgSrc+'">';

		et_appendCntImage(et_anchor);
	}
	else
	{
		var et_image=new Image();
		et_image.src = et_imageSrc;
	}
}
function _et_vm_ct()
{
	var t0 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/179472/rwe/karriere/' || pn_lc == '%2fde%2f179472%2frwe%2fkarriere%2f' || pn_lc == '/de/179472/rwe/karriere/' || pn_lc == '%2fde%2f179472%2frwe%2fkarriere%2f' ) {return 1;} else {return 0;}};var t1 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/107990/rwe/karriere/stellenangebote/' || pn_lc == '%2fde%2f107990%2frwe%2fkarriere%2fstellenangebote%2f' || pn_lc == '/de/107990/rwe/karriere/stellenangebote/' || pn_lc == '%2fde%2f107990%2frwe%2fkarriere%2fstellenangebote%2f' ) {return 1;} else {return 0;}};var t2 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/1062676/rwe/karriere/ihr-profil/schueler/' || pn_lc == '%2fde%2f1062676%2frwe%2fkarriere%2fihr-profil%2fschueler%2f' || pn_lc == '/de/1062676/rwe/karriere/ihr-profil/schueler/' || pn_lc == '%2fde%2f1062676%2frwe%2fkarriere%2fihr-profil%2fschueler%2f' ) {return 1;} else {return 0;}};var t3 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/107292/rwe/karriere/ihr-profil/studierende/' || pn_lc == '%2fde%2f107292%2frwe%2fkarriere%2fihr-profil%2fstudierende%2f' || pn_lc == '/de/107292/rwe/karriere/ihr-profil/studierende/' || pn_lc == '%2fde%2f107292%2frwe%2fkarriere%2fihr-profil%2fstudierende%2f' ) {return 1;} else {return 0;}};var t4 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/108286/rwe/karriere/ihr-profil/absolventen/' || pn_lc == '%2fde%2f108286%2frwe%2fkarriere%2fihr-profil%2fabsolventen%2f' || pn_lc == '/de/108286/rwe/karriere/ihr-profil/absolventen/' || pn_lc == '%2fde%2f108286%2frwe%2fkarriere%2fihr-profil%2fabsolventen%2f' ) {return 1;} else {return 0;}};var t5 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/107432/rwe/karriere/ihr-profil/berufserfahrene/' || pn_lc == '%2fde%2f107432%2frwe%2fkarriere%2fihr-profil%2fberufserfahrene%2f' || pn_lc == '/de/107432/rwe/karriere/ihr-profil/berufserfahrene/' || pn_lc == '%2fde%2f107432%2frwe%2fkarriere%2fihr-profil%2fberufserfahrene%2f' ) {return 1;} else {return 0;}};var t6 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/1062680/rwe/karriere/ihr-profil/schueler/interessentest/' || pn_lc == '%2fde%2f1062680%2frwe%2fkarriere%2fihr-profil%2fschueler%2finteressentest%2f' || pn_lc == '/de/1062680/rwe/karriere/ihr-profil/schueler/interessentest/' || pn_lc == '%2fde%2f1062680%2frwe%2fkarriere%2fihr-profil%2fschueler%2finteressentest%2f' ) {return 1;} else {return 0;}};var t7 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/1062682/rwe/karriere/ihr-profil/schueler/ausbildungskompass/' || pn_lc == '%2fde%2f1062682%2frwe%2fkarriere%2fihr-profil%2fschueler%2fausbildungskompass%2f' || pn_lc == '/de/1062682/rwe/karriere/ihr-profil/schueler/ausbildungskompass/' || pn_lc == '%2fde%2f1062682%2frwe%2fkarriere%2fihr-profil%2fschueler%2fausbildungskompass%2f' ) {return 1;} else {return 0;}};var t8 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/1062684/rwe/karriere/ihr-profil/schueler/alle-ausbildungsberufe/' || pn_lc == '%2fde%2f1062684%2frwe%2fkarriere%2fihr-profil%2fschueler%2falle-ausbildungsberufe%2f' || pn_lc == '/de/1062684/rwe/karriere/ihr-profil/schueler/alle-ausbildungsberufe/' || pn_lc == '%2fde%2f1062684%2frwe%2fkarriere%2fihr-profil%2fschueler%2falle-ausbildungsberufe%2f' ) {return 1;} else {return 0;}};var t9 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/8/rwe/' || pn_lc == '%2fde%2f8%2frwe%2f' || pn_lc == '/de/8/rwe/' || pn_lc == '%2fde%2f8%2frwe%2f' ) {return 1;} else {return 0;}};var t10 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/179662/rwe/verantwortung/' || pn_lc == '%2fde%2f179662%2frwe%2fverantwortung%2f' || pn_lc == '/de/179662/rwe/verantwortung/' || pn_lc == '%2fde%2f179662%2frwe%2fverantwortung%2f' ) {return 1;} else {return 0;}};var t11 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/105818/rwe/investor-relations/' || pn_lc == '%2fde%2f105818%2frwe%2finvestor-relations%2f' || pn_lc == '/de/105818/rwe/investor-relations/' || pn_lc == '%2fde%2f105818%2frwe%2finvestor-relations%2f' ) {return 1;} else {return 0;}};var t12 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/86134/rwe-innogy/' || pn_lc == '%2fde%2f86134%2frwe-innogy%2f' || pn_lc == '/de/86134/rwe-innogy/' || pn_lc == '%2fde%2f86134%2frwe-innogy%2f' ) {return 1;} else {return 0;}};var t13 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/1062684/rwe/karriere/ihr-profil/schueler/alle-ausbildungsberufe/' || pn_lc == '%2fde%2f1062684%2frwe%2fkarriere%2fihr-profil%2fschueler%2falle-ausbildungsberufe%2f' || pn_lc == '/de/1062684/rwe/karriere/ihr-profil/schueler/alle-ausbildungsberufe/' || pn_lc == '%2fde%2f1062684%2frwe%2fkarriere%2fihr-profil%2fschueler%2falle-ausbildungsberufe%2f' ) {return 1;} else {return 0;}};var t14 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == '/de/108258/rwe/karriere/ihr-profil/absolventen/traineeprogramme/' || pn_lc == '%2fde%2f108258%2frwe%2fkarriere%2fihr-profil%2fabsolventen%2ftraineeprogramme%2f' || pn_lc == '/de/108258/rwe/karriere/ihr-profil/absolventen/traineeprogramme/' || pn_lc == '%2fde%2f108258%2frwe%2fkarriere%2fihr-profil%2fabsolventen%2ftraineeprogramme%2f' ) {return 1;} else {return 0;}};
	return ((t0()|t1()|t2()|t3()|t4()|t5()|t6()|t7()|t8()|t9()|t10()|t11()|t12()|t13()|t14()) == 1);
}if(typeof(et_proxy_redirect) == 'undefined' || typeof(et_proxy_redirect) == 'unknown' || et_proxy_redirect == '')
{
	var et_server = '//www.etracker.de';
	var et_vm_server = '//www.etracker.de/vm';
	var et_vv_server = '//visitorvoice.etracker.com/';
	var et_code_server = '//code.etracker.com';
}
else
{
	var et_server = et_proxy_redirect;
	var et_vm_server = et_proxy_redirect + '/vm';
	var et_vv_server = et_proxy_redirect + '/vv/';
	var et_code_server = et_proxy_redirect;
}

var et_hasOptIn = 'true';
var et_coid = '9989c5bf5ae1747d98a8c3c2913a1720';
var et_ver = '74abb4';
var et_panelLink      = et_server + '/app?et=';
var et_cntScript    = 'cnt_js.php';
var et_secureId     = 'YKgouE';
var et_maxUrlLength = 8190;
var et_deliveryHash = "C2yGENnVIKSGO9JMLItspQ==";
var et_pd_etpl, et_pd_i, et_pd_k, et_pd_s,
	et_pd_maxfl	= 15,
	et_pd_maxsh	= 15,
	et_pd_maxqt	= 15,
	et_pd_maxsl = 4,
	et_pd_v		= 1.0,
	et_pd_js	= 0,
	et_pd_ag	= navigator.userAgent.toLowerCase(),
	et_pd_z		= 0,
	et_pd_a		= [30],
	et_pd_eta	= "Adobe Acrobat ",
	et_pd_eti	= " Plug-in",
	et_pd_etm	= "Windows Media Video",
	et_pd_etp	= "PDF.PdfCtrl.",
	et_pd_etq	= "QuickTime",
	et_pd_etr	= "RealPlayer(tm)",
	et_pl	    = "Shockwave",
	et_pd_ud	= "undefined",
	et_blockPlugin  = et_blockPlugin ||false;
var et_host		= '//application.etracker.com/';
var et_cntHost	= et_server + '/';
var et_et   	= 'YKgouE';
var et_urlParamLink = [];
var et_ibrowse  = 0;
var et_ibrowsev = 99;
var et_ie6	  = 0;
var et_safari   = 0;
var et_o		= 0;
var et_ff	   = 0;



var et_location, et_top, et_sendloc;
try
{
	et_location = top.location.search;
	et_sendloc = top.location.search;
	et_top = top.location;
}
catch(e)
{
}
				
if(typeof(et_location) == 'undefined' || typeof(et_sendloc) == 'undefined')
{
	et_location = window.location.search;
    et_sendloc = window.location.search;
    et_top = window.location;
}
function et_spLink( url ) 
{
	if(!url) return '';
	url = et_removeUrlParamLink(url);
	url = url.replace(/\?.*/gi, '');
	return url; 
}
function et_spPage( url ) 
{
	return et_spLink( url ); 
}

var et_links		= 1;
var et_toppos		= 0;
var et_leftpos	  	= 0;
var et_overlay		= 0;
var et_gauged		= 0;
var et_px			= 0;
var et_py			= 0;
var et_direction	= 1;
var et_blockOverlay = false;
var et_overlayLimit = 100;

// drop this!
var et_d			= document;
var et_search		= et_spPage(window.location.search);
var et_thisHref	 	= et_spPage(window.location.pathname) + et_search;
var et_d_anchors	= document.getElementsByTagName('a');ET_Event = new etEvent("YKgouE", et_server);var cc_cntScript    = 'cntcc';
var cc_deltaTime 	= 14312727908233-(new Date().getTime()*10);
var cc_codecVersion	= 1;
var cc_apiVersion	= '1.1.2';
var cc_articleDivider = '|';
var cc_itemDivider	= ';';etVM = new ETVMRecorder('YKgouE', et_vm_server, 0, false);function _etc()
{
	var c = "";

	if(!et_blockPlugin)
		et_pd();
		et_cPQ();
		et_pEc();
		et_eC('YKgouE');
		if (typeof _etracker.setFirstPixelSent == 'function')
			_etracker.setFirstPixelSent();
		if (typeof _etracker.doWrapperCalls == 'function')
			_etracker.doWrapperCalls();
	if(!et_blockOverlay)
	{
		_etracker.addOnLoad(et_iO);
	}	et_cc('YKgouE');
	etCommerce.etCommerceLoad('YKgouE');
	etCommerce.doPreparedEvents();	window.et_vm_init_retries = 0;
	function et_vm_init()
	{
		if(document.body)
		{
			etVM.initRecorder(_et_vm_ct());
		}
		else if(et_vm_init_retries < 100)
		{
			window.setTimeout(et_vm_init, 10);
			++et_vm_init_retries;
		}
	}
	
	et_vm_init();if(c != '') {var x = document.createElement('div');x.innerHTML = c;var et_bodyInterval = window.setInterval(function(){if(document.body) {window.clearInterval(et_bodyInterval);document.body.appendChild(x);}}, 1);}	}
_etracker.setReady();
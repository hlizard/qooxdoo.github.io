(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"inspector.Application","qx.nativeScrollBars":true,"qx.theme":"inspector.theme.Theme","qx.version":"1.2.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"./script"},"inspector":{"resourceUri":"./resource","sourceUri":"./script","version":"trunk"},"qx":{"resourceUri":"./resource","sourceUri":"./script","version":"1.2.2"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:inspector.js"]],
  urisBefore : [],
  packageHashes : {"0":"6d0cb4dea7a7"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['6d0cb4dea7a7']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}},"resources":{"inspector/css/consoleview.css":"inspector","inspector/css/domview.css":"inspector","inspector/css/propertylisthtml.css":"inspector","inspector/css/sourceview.css":"inspector","inspector/html/index.html":"inspector","inspector/images/autocomplete/method_private18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/method_protected18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/method_public18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/property_private18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/property_protected18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/property_public18.gif":[18,18,"gif","inspector"],"inspector/images/close.gif":[17,13,"gif","inspector"],"inspector/images/close.png":[17,13,"png","inspector"],"inspector/images/components/atom.png":[16,16,"png","inspector"],"inspector/images/components/button.png":[16,16,"png","inspector"],"inspector/images/components/checkbox.png":[16,16,"png","inspector"],"inspector/images/components/combobox.png":[16,16,"png","inspector"],"inspector/images/components/document.png":[16,16,"png","inspector"],"inspector/images/components/groupbox.png":[16,16,"png","inspector"],"inspector/images/components/horizontallayout.png":[16,16,"png","inspector"],"inspector/images/components/image.png":[16,16,"png","inspector"],"inspector/images/components/label.png":[16,16,"png","inspector"],"inspector/images/components/layout.png":[16,16,"png","inspector"],"inspector/images/components/listview.png":[16,16,"png","inspector"],"inspector/images/components/menu.png":[16,16,"png","inspector"],"inspector/images/components/radiobutton.png":[16,16,"png","inspector"],"inspector/images/components/spinner.png":[16,16,"png","inspector"],"inspector/images/components/splitpane.png":[16,16,"png","inspector"],"inspector/images/components/table.png":[16,16,"png","inspector"],"inspector/images/components/textarea.png":[16,16,"png","inspector"],"inspector/images/components/textfield.png":[16,16,"png","inspector"],"inspector/images/components/toolbar.png":[16,16,"png","inspector"],"inspector/images/components/tree.png":[16,16,"png","inspector"],"inspector/images/components/verticallayout.png":[16,16,"png","inspector"],"inspector/images/components/window.png":[16,16,"png","inspector"],"inspector/images/icons/api.png":[22,22,"png","inspector"],"inspector/images/icons/edit-find-disabled.png":[16,16,"png","inspector"],"inspector/images/icons/edit-find.png":[16,16,"png","inspector"],"inspector/images/icons/goto.png":[22,22,"png","inspector"],"inspector/images/icons/highlight.png":[22,22,"png","inspector"],"inspector/images/icons/setinit-disabled.png":[22,22,"png","inspector"],"inspector/images/icons/setinit.png":[22,22,"png","inspector"],"inspector/images/icons/setnull-disabled.png":[22,22,"png","inspector"],"inspector/images/icons/setnull.png":[22,22,"png","inspector"],"inspector/images/null.png":[15,15,"png","inspector"],"inspector/images/open.gif":[17,13,"gif","inspector"],"inspector/images/open.png":[17,13,"png","inspector"],"inspector/images/shell/errorIcon.png":[14,14,"png","inspector"],"inspector/images/shell/infoIcon.png":[14,14,"png","inspector"],"inspector/images/shell/warningIcon.png":[14,14,"png","inspector"],"inspector/images/spacer.gif":[17,13,"gif","inspector"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-next.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/document-properties.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/list-add.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/list-remove.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-start.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-record.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/view-refresh.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/window-new.png":[22,22,"png","qx"],"qx/icon/Tango/22/categories/system.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"en":{}}};
(function(){var by="toString",bx=".",bw="default",bv="Object",bu='"',bt="Array",bs="()",br="String",bq="Function",bp=".prototype",bX="function",bW="Boolean",bV="Error",bU="constructor",bT="warn",bS="hasOwnProperty",bR="string",bQ="toLocaleString",bP="RegExp",bO='\", "',bF="info",bG="BROKEN_IE",bD="isPrototypeOf",bE="Date",bB="",bC="qx.Bootstrap",bz="]",bA="Class",bH="error",bI="[Class ",bK="valueOf",bJ="Number",bM="count",bL="debug",bN="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bI+this.classname+bz;
},createNamespace:function(name,cf){var ch=name.split(bx);
var parent=window;
var cg=ch[0];

for(var i=0,ci=ch.length-1;i<ci;i++,cg=ch[i]){if(!parent[cg]){parent=parent[cg]={};
}else{parent=parent[cg];
}}parent[cg]=cf;
return cg;
},setDisplayName:function(j,k,name){j.displayName=k+bx+name+bs;
},setDisplayNames:function(o,p){for(var name in o){var q=o[name];

if(q instanceof Function){q.displayName=p+bx+name+bs;
}}},define:function(name,V){if(!V){var V={statics:{}};
}var bb;
var Y=null;
qx.Bootstrap.setDisplayNames(V.statics,name);

if(V.members||V.extend){qx.Bootstrap.setDisplayNames(V.members,name+bp);
bb=V.construct||new Function;

if(V.extend){this.extendClass(bb,bb,V.extend,name,ba);
}var W=V.statics||{};
for(var i=0,bc=qx.Bootstrap.getKeys(W),l=bc.length;i<l;i++){var bd=bc[i];
bb[bd]=W[bd];
}Y=bb.prototype;
var X=V.members||{};
for(var i=0,bc=qx.Bootstrap.getKeys(X),l=bc.length;i<l;i++){var bd=bc[i];
Y[bd]=X[bd];
}}else{bb=V.statics||{};
}var ba=this.createNamespace(name,bb);
bb.name=bb.classname=name;
bb.basename=ba;
bb.$$type=bA;
if(!bb.hasOwnProperty(by)){bb.toString=this.genericToString;
}if(V.defer){V.defer(bb,Y);
}qx.Bootstrap.$$registry[name]=V.statics;
return bb;
}};
qx.Bootstrap.define(bC,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(G,H,I,name,J){var M=I.prototype;
var L=new Function;
L.prototype=M;
var K=new L;
G.prototype=K;
K.name=K.classname=name;
K.basename=J;
H.base=G.superclass=I;
H.self=G.constructor=K.constructor=G;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(u){return u.__count__;
},"default":function(b){var length=0;

for(var c in b){length++;
}return length;
}})[(({}).__count__==0)?bM:bw],objectMergeWith:function(N,O,P){if(P===undefined){P=true;
}
for(var Q in O){if(P||N[Q]===undefined){N[Q]=O[Q];
}}return N;
},__ho:[bD,bS,bQ,by,bK,bU],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(d){var e=[];
var g=Object.prototype.hasOwnProperty;

for(var h in d){if(g.call(d,h)){e.push(h);
}}var f=qx.Bootstrap.__ho;

for(var i=0,a=f,l=a.length;i<l;i++){if(g.call(d,a[i])){e.push(a[i]);
}}return e;
},"default":function(C){var D=[];
var E=Object.prototype.hasOwnProperty;

for(var F in C){if(E.call(C,F)){D.push(F);
}}return D;
}})[typeof (Object.keys)==
bX?bN:
(function(){for(var ce in {toString:1}){return ce;
}})()!==by?bG:bw],getKeysAsString:function(bn){var bo=qx.Bootstrap.getKeys(bn);

if(bo.length==0){return bB;
}return bu+bo.join(bO)+bu;
},__hp:{"[object String]":br,"[object Array]":bt,"[object Object]":bv,"[object RegExp]":bP,"[object Number]":bJ,"[object Boolean]":bW,"[object Date]":bE,"[object Function]":bq,"[object Error]":bV},bind:function(y,self,z){var A=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var n=Array.prototype.slice.call(arguments,0,arguments.length);
return y.apply(self,A.concat(n));
};
},firstUp:function(be){return be.charAt(0).toUpperCase()+be.substr(1);
},firstLow:function(R){return R.charAt(0).toLowerCase()+R.substr(1);
},getClass:function(s){var t=Object.prototype.toString.call(s);
return (qx.Bootstrap.__hp[t]||t.slice(8,-1));
},isString:function(m){return (m!==null&&(typeof m===bR||qx.Bootstrap.getClass(m)==br||m instanceof String||(!!m&&!!m.$$isString)));
},isArray:function(cb){return (cb!==null&&(cb instanceof Array||(cb&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(cb.constructor,qx.data.IListData))||qx.Bootstrap.getClass(cb)==bt||(!!cb&&!!cb.$$isArray)));
},isObject:function(cj){return (cj!==undefined&&cj!==null&&qx.Bootstrap.getClass(cj)==bv);
},isFunction:function(ck){return qx.Bootstrap.getClass(ck)==bq;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(U,name){while(U){if(U.$$properties&&U.$$properties[name]){return U.$$properties[name];
}U=U.superclass;
}return null;
},hasProperty:function(r,name){return !!qx.Bootstrap.getPropertyDefinition(r,name);
},getEventType:function(bh,name){var bh=bh.constructor;

while(bh.superclass){if(bh.$$events&&bh.$$events[name]!==undefined){return bh.$$events[name];
}bh=bh.superclass;
}return null;
},supportsEvent:function(B,name){return !!qx.Bootstrap.getEventType(B,name);
},getByInterface:function(v,w){var x,i,l;

while(v){if(v.$$implements){x=v.$$flatImplements;

for(i=0,l=x.length;i<l;i++){if(x[i]===w){return v;
}}}v=v.superclass;
}return null;
},hasInterface:function(bi,bj){return !!qx.Bootstrap.getByInterface(bi,bj);
},getMixins:function(bf){var bg=[];

while(bf){if(bf.$$includes){bg.push.apply(bg,bf.$$flatIncludes);
}bf=bf.superclass;
}return bg;
},$$logs:[],debug:function(cc,cd){qx.Bootstrap.$$logs.push([bL,arguments]);
},info:function(bl,bm){qx.Bootstrap.$$logs.push([bF,arguments]);
},warn:function(bY,ca){qx.Bootstrap.$$logs.push([bT,arguments]);
},error:function(S,T){qx.Bootstrap.$$logs.push([bH,arguments]);
},trace:function(bk){}}});
})();
(function(){var r="other",q="widgets",p="fonts",o="appearances",n="qx.Theme",m="]",k="[Theme ",j="colors",h="decorations",g="Theme",d="meta",f="borders",e="icons";
qx.Bootstrap.define(n,{statics:{define:function(name,b){if(!b){var b={};
}b.include=this.__qx(b.include);
b.patch=this.__qx(b.patch);
{};
var c={$$type:g,name:name,title:b.title,toString:this.genericToString};
if(b.extend){c.supertheme=b.extend;
}c.basename=qx.Bootstrap.createNamespace(name,c);
this.__qA(c,b);
this.__qy(c,b);
this.$$registry[name]=c;
for(var i=0,a=b.include,l=a.length;i<l;i++){this.include(c,a[i]);
}
for(var i=0,a=b.patch,l=a.length;i<l;i++){this.patch(c,a[i]);
}},__qx:function(v){if(!v){return [];
}
if(qx.Bootstrap.isArray(v)){return v;
}else{return [v];
}},__qy:function(s,t){var u=t.aliases||{};

if(t.extend&&t.extend.aliases){qx.Bootstrap.objectMergeWith(u,t.extend.aliases,false);
}s.aliases=u;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return k+this.name+m;
},__qz:function(I){for(var i=0,J=this.__qB,l=J.length;i<l;i++){if(I[J[i]]){return J[i];
}}},__qA:function(K,L){var O=this.__qz(L);
if(L.extend&&!O){O=L.extend.type;
}K.type=O||r;
if(!O){return;
}var Q=function(){};
if(L.extend){Q.prototype=new L.extend.$$clazz;
}var P=Q.prototype;
var N=L[O];
for(var M in N){P[M]=N[M];
if(P[M].base){{};
P[M].base=L.extend;
}}K.$$clazz=Q;
K[O]=new Q;
},$$registry:{},__qB:[j,f,h,p,e,q,o,d],__qC:null,__qD:null,__qE:function(){},patch:function(w,x){var z=this.__qz(x);

if(z!==this.__qz(w)){throw new Error("The mixins '"+w.name+"' are not compatible '"+x.name+"'!");
}var y=x[z];
var A=w.$$clazz.prototype;

for(var B in y){A[B]=y[B];
}},include:function(C,D){var F=D.type;

if(F!==C.type){throw new Error("The mixins '"+C.name+"' are not compatible '"+D.name+"'!");
}var E=D[F];
var G=C.$$clazz.prototype;

for(var H in E){if(G[H]!==undefined){continue;
}G[H]=E[H];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var a="inspector.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});
})();
(function(){var j="qx.allowUrlSettings",h="&",g="qx.core.Setting",f="qx.allowUrlVariants",e="qx.propertyDebugLevel",d="qxsetting",c=":",b=".";
qx.Bootstrap.define(g,{statics:{__eo:{},define:function(p,q){if(q===undefined){throw new Error('Default value of setting "'+p+'" must be defined!');
}
if(!this.__eo[p]){this.__eo[p]={};
}else if(this.__eo[p].defaultValue!==undefined){throw new Error('Setting "'+p+'" is already defined!');
}this.__eo[p].defaultValue=q;
},get:function(k){var l=this.__eo[k];

if(l===undefined){throw new Error('Setting "'+k+'" is not defined.');
}
if(l.value!==undefined){return l.value;
}return l.defaultValue;
},set:function(m,n){if((m.split(b)).length<2){throw new Error('Malformed settings key "'+m+'". Must be following the schema "namespace.key".');
}
if(!this.__eo[m]){this.__eo[m]={};
}this.__eo[m].value=n;
},__ep:function(){if(window.qxsettings){for(var t in window.qxsettings){this.set(t,window.qxsettings[t]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(a){}this.__eq();
}},__eq:function(){if(this.get(j)!=true){return;
}var s=document.location.search.slice(1).split(h);

for(var i=0;i<s.length;i++){var r=s[i].split(c);

if(r.length!=3||r[0]!=d){continue;
}this.set(r[1],decodeURIComponent(r[2]));
}}},defer:function(o){o.define(j,false);
o.define(f,false);
o.define(e,0);
o.__ep();
}});
})();
(function(){var p="function",o="Boolean",n="qx.Interface",m="]",k="toggle",j="Interface",h="is",g="[Interface ";
qx.Bootstrap.define(n,{statics:{define:function(name,s){if(s){if(s.extend&&!(s.extend instanceof Array)){s.extend=[s.extend];
}{};
var t=s.statics?s.statics:{};
if(s.extend){t.$$extends=s.extend;
}
if(s.properties){t.$$properties=s.properties;
}
if(s.members){t.$$members=s.members;
}
if(s.events){t.$$events=s.events;
}}else{var t={};
}t.$$type=j;
t.name=name;
t.toString=this.genericToString;
t.basename=qx.Bootstrap.createNamespace(name,t);
qx.Interface.$$registry[name]=t;
return t;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(q){if(!q){return [];
}var r=q.concat();

for(var i=0,l=q.length;i<l;i++){if(q[i].$$extends){r.push.apply(r,this.flatten(q[i].$$extends));
}}return r;
},__fy:function(B,C,D,E){var I=D.$$members;

if(I){for(var H in I){if(qx.Bootstrap.isFunction(I[H])){var G=this.__fz(C,H);
var F=G||qx.Bootstrap.isFunction(B[H]);

if(!F){throw new Error('Implementation of method "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}var J=E===true&&!G&&!qx.Bootstrap.hasInterface(C,D);

if(J){B[H]=this.__fC(D,B[H],H,I[H]);
}}else{if(typeof B[H]===undefined){if(typeof B[H]!==p){throw new Error('Implementation of member "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}}}}}},__fz:function(a,b){var f=b.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!f){return false;
}var c=qx.Bootstrap.firstLow(f[2]);
var d=qx.Bootstrap.getPropertyDefinition(a,c);

if(!d){return false;
}var e=f[0]==h||f[0]==k;

if(e){return qx.Bootstrap.getPropertyDefinition(a,c).check==o;
}return true;
},__fA:function(K,L){if(L.$$properties){for(var M in L.$$properties){if(!qx.Bootstrap.getPropertyDefinition(K,M)){throw new Error('The property "'+M+'" is not supported by Class "'+K.classname+'"!');
}}}},__fB:function(u,v){if(v.$$events){for(var w in v.$$events){if(!qx.Bootstrap.supportsEvent(u,w)){throw new Error('The event "'+w+'" is not supported by Class "'+u.classname+'"!');
}}}},assertObject:function(N,O){var Q=N.constructor;
this.__fy(N,Q,O,false);
this.__fA(Q,O);
this.__fB(Q,O);
var P=O.$$extends;

if(P){for(var i=0,l=P.length;i<l;i++){this.assertObject(N,P[i]);
}}},assert:function(x,y,z){this.__fy(x.prototype,x,y,z);
this.__fA(x,y);
this.__fB(x,y);
var A=y.$$extends;

if(A){for(var i=0,l=A.length;i<l;i++){this.assert(x,A[i],z);
}}},genericToString:function(){return g+this.name+m;
},$$registry:{},__fC:function(){},__fD:null,__fE:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,w){if(w){if(w.include&&!(w.include instanceof Array)){w.include=[w.include];
}{};
var y=w.statics?w.statics:{};
qx.Bootstrap.setDisplayNames(y,name);

for(var x in y){if(y[x] instanceof Function){y[x].$$mixin=y;
}}if(w.construct){y.$$constructor=w.construct;
qx.Bootstrap.setDisplayName(w.construct,name,e);
}
if(w.include){y.$$includes=w.include;
}
if(w.properties){y.$$properties=w.properties;
}
if(w.members){y.$$members=w.members;
qx.Bootstrap.setDisplayNames(w.members,name+f);
}
for(var x in y.$$members){if(y.$$members[x] instanceof Function){y.$$members[x].$$mixin=y;
}}
if(w.events){y.$$events=w.events;
}
if(w.destruct){y.$$destructor=w.destruct;
qx.Bootstrap.setDisplayName(w.destruct,name,b);
}}else{var y={};
}y.$$type=a;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
this.$$registry[name]=y;
return y;
},checkCompatibility:function(o){var r=this.flatten(o);
var s=r.length;

if(s<2){return true;
}var v={};
var u={};
var t={};
var q;

for(var i=0;i<s;i++){q=r[i];

for(var p in q.events){if(t[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+t[p]+'" in member "'+p+'"!');
}t[p]=q.name;
}
for(var p in q.properties){if(v[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+v[p]+'" in property "'+p+'"!');
}v[p]=q.name;
}
for(var p in q.members){if(u[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+u[p]+'" in member "'+p+'"!');
}u[p]=q.name;
}}return true;
},isCompatible:function(h,j){var k=qx.Bootstrap.getMixins(j);
k.push(h);
return qx.Mixin.checkCompatibility(k);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$includes){n.push.apply(n,this.flatten(m[i].$$includes));
}}return n;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__el:null,__em:function(){}}});
})();
(function(){var dP=';',dO='computed=this.',dN='=value;',dM='this.',dL="set",dK="setThemed",dJ="setRuntime",dI="init",dH='if(this.',dG='delete this.',cP='!==undefined)',cO='}',cN="resetThemed",cM='else if(this.',cL="string",cK='return this.',cJ="reset",cI="boolean",cH="resetRuntime",cG='!==undefined){',dW="",dX="refresh",dU='=true;',dV="this.",dS=";",dT='old=this.',dQ="();",dR='else ',dY='if(old===undefined)old=this.',ea='old=computed=this.',dp="return this.",dn="get",dr='(value);',dq="(a[",dt='if(old===computed)return value;',ds='if(old===undefined)old=null;',dv=' of an instance of ',du=' is not (yet) ready!");',dm="]);",dl='!==inherit){',bx='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',by='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bz='value !== null && value.nodeType === 9 && value.documentElement',bA='===value)return value;',bB='value !== null && value.$$type === "Mixin"',bC='return init;',bD='var init=this.',bE='value !== null && value.nodeType === 1 && value.attributes',bF="var parent = this.getLayoutParent();",bG="Error in property ",eo='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',en="property",em='.validate.call(this, value);',el='qx.core.Assert.assertInstance(value, Date, msg) || true',es='else{',er="if (!parent) return;",eq=" in method ",ep='qx.core.Assert.assertInstance(value, Error, msg) || true',eu='=computed;',et='Undefined value is not allowed!',cg='(backup);',ch="MSIE 6.0",ce='if(computed===inherit){',cf="inherit",ck='Is invalid!',cl='if(value===undefined)prop.error(this,2,"',ci='var computed, old=this.',cj='else if(computed===undefined)',cc="': ",cd=" of class ",bO='value !== null && value.nodeType !== undefined',bN='===undefined)return;',bQ='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bP="')){",bK='qx.core.Assert.assertPositiveInteger(value, msg) || true',bJ='else this.',bM='value=this.',bL='","',bI='if(init==qx.core.Property.$$inherit)init=null;',bH='value !== null && value.$$type === "Interface"',cq='var inherit=prop.$$inherit;',cr="', qx.event.type.Data, [computed, old]",cs="var value = parent.",ct="$$useinit_",cm='computed=undefined;delete this.',cn="(value);",co='Requires exactly one argument!',cp='",value);',cu='computed=value;',cv="on",bY="$$runtime_",bX=';}',bW="$$user_",bV='){',bU='qx.core.Assert.assertArray(value, msg) || true',bT='if(computed===undefined||computed===inherit){',bS='qx.core.Assert.assertPositiveNumber(value, msg) || true',bR=".prototype",cb="Boolean",ca=")}",cw='(computed, old, "',cx='return value;',cy='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cz='}else{',cA="if(reg.hasListener(this, '",cB='Does not allow any arguments!',cC=')a[i].',cD="()",cE="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cF='.$$properties.',cT='value !== null && value.$$type === "Theme"',cS="var reg=qx.event.Registration;",cR="())",cQ='return null;',cX='qx.core.Assert.assertObject(value, msg) || true',cW='");',cV='qx.core.Assert.assertString(value, msg) || true',cU='var pa=this.getLayoutParent();if(pa)computed=pa.',da="if (value===undefined) value = parent.",cY='value !== null && value.$$type === "Class"',dh='qx.core.Assert.assertFunction(value, msg) || true',di='!==undefined&&',df='var computed, old;',dg='var backup=computed;',dd=".",de="object",db="$$init_",dc="$$theme_",dj='if(computed===undefined)computed=null;',dk='qx.core.Assert.assertMap(value, msg) || true',dz="qx.aspects",dy='qx.core.Assert.assertNumber(value, msg) || true',dB='if((computed===undefined||computed===inherit)&&',dA="reg.fireEvent(this, '",dD='Null value is not allowed!',dC='qx.core.Assert.assertInteger(value, msg) || true',dF="value",dE="rv:1.8.1",dx="shorthand",dw='qx.core.Assert.assertInstance(value, RegExp, msg) || true',eh='value !== null && value.type !== undefined',ei='value !== null && value.document',ej='throw new Error("Property ',ek="(!this.",ed='qx.core.Assert.assertBoolean(value, msg) || true',ee='if(a[i].',ef="toggle",eg="$$inherit_",eb='var prop=qx.core.Property;',ec=" with incoming value '",bw="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",bv='if(computed===undefined||computed==inherit)computed=null;',bu="qx.core.Property",bt="is",bs='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(bu,{statics:{__la:{"Boolean":ed,"String":cV,"Number":dy,"Integer":dC,"PositiveNumber":bS,"PositiveInteger":bK,"Error":ep,"RegExp":dw,"Object":cX,"Array":bU,"Map":dk,"Function":dh,"Date":el,"Node":bO,"Element":bE,"Document":bz,"Window":ei,"Event":eh,"Class":cY,"Mixin":bB,"Interface":bH,"Theme":cT,"Color":bx,"Decorator":bQ,"Font":by},__lb:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:cf,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cL,dereference:cI,inheritable:cI,nullable:cI,themeable:cI,refine:cI,init:null,apply:cL,event:cL,check:null,transform:cL,deferredInit:cI,validate:null},$$allowedGroupKeys:{name:cL,group:de,mode:cL,themeable:cI},$$inheritable:{},__lc:function(f){var g=this.__ld(f);

if(!g.length){var h=qx.lang.Function.empty;
}else{h=this.__le(g);
}f.prototype.$$refreshInheritables=h;
},__ld:function(D){var F=[];

while(D){var E=D.$$properties;

if(E){for(var name in this.$$inheritable){if(E[name]&&E[name].inheritable){F.push(name);
}}}D=D.superclass;
}return F;
},__le:function(bc){var bg=this.$$store.inherit;
var bf=this.$$store.init;
var be=this.$$method.refresh;
var bd=[bF,er];

for(var i=0,l=bc.length;i<l;i++){var name=bc[i];
bd.push(cs,bg[name],dS,da,bf[name],dS,dV,be[name],cn);
}return new Function(bd.join(dW));
},attachRefreshInheritables:function(P){P.prototype.$$refreshInheritables=function(){qx.core.Property.__lc(P);
return this.$$refreshInheritables();
};
},attachMethods:function(X,name,Y){Y.group?this.__lf(X,Y,name):this.__lg(X,Y,name);
},__lf:function(eA,eB,name){var eI=qx.Bootstrap.firstUp(name);
var eH=eA.prototype;
var eJ=eB.themeable===true;
{};
var eK=[];
var eE=[];

if(eJ){var eC=[];
var eG=[];
}var eF=cE;
eK.push(eF);

if(eJ){eC.push(eF);
}
if(eB.mode==dx){var eD=bw;
eK.push(eD);

if(eJ){eC.push(eD);
}}
for(var i=0,a=eB.group,l=a.length;i<l;i++){{};
eK.push(dV,this.$$method.set[a[i]],dq,i,dm);
eE.push(dV,this.$$method.reset[a[i]],dQ);

if(eJ){{};
eC.push(dV,this.$$method.setThemed[a[i]],dq,i,dm);
eG.push(dV,this.$$method.resetThemed[a[i]],dQ);
}}this.$$method.set[name]=dL+eI;
eH[this.$$method.set[name]]=new Function(eK.join(dW));
this.$$method.reset[name]=cJ+eI;
eH[this.$$method.reset[name]]=new Function(eE.join(dW));

if(eJ){this.$$method.setThemed[name]=dK+eI;
eH[this.$$method.setThemed[name]]=new Function(eC.join(dW));
this.$$method.resetThemed[name]=cN+eI;
eH[this.$$method.resetThemed[name]]=new Function(eG.join(dW));
}},__lg:function(G,H,name){var J=qx.Bootstrap.firstUp(name);
var L=G.prototype;
{};
if(H.dereference===undefined&&typeof H.check===cL){H.dereference=this.__lh(H.check);
}var K=this.$$method;
var I=this.$$store;
I.runtime[name]=bY+name;
I.user[name]=bW+name;
I.theme[name]=dc+name;
I.init[name]=db+name;
I.inherit[name]=eg+name;
I.useinit[name]=ct+name;
K.get[name]=dn+J;
L[K.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,G,name,dn);
};
K.set[name]=dL+J;
L[K.set[name]]=function(B){return qx.core.Property.executeOptimizedSetter(this,G,name,dL,arguments);
};
K.reset[name]=cJ+J;
L[K.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,G,name,cJ);
};

if(H.inheritable||H.apply||H.event||H.deferredInit){K.init[name]=dI+J;
L[K.init[name]]=function(m){return qx.core.Property.executeOptimizedSetter(this,G,name,dI,arguments);
};
}
if(H.inheritable){K.refresh[name]=dX+J;
L[K.refresh[name]]=function(k){return qx.core.Property.executeOptimizedSetter(this,G,name,dX,arguments);
};
}K.setRuntime[name]=dJ+J;
L[K.setRuntime[name]]=function(j){return qx.core.Property.executeOptimizedSetter(this,G,name,dJ,arguments);
};
K.resetRuntime[name]=cH+J;
L[K.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,G,name,cH);
};

if(H.themeable){K.setThemed[name]=dK+J;
L[K.setThemed[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,G,name,dK,arguments);
};
K.resetThemed[name]=cN+J;
L[K.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,G,name,cN);
};
}
if(H.check===cb){L[ef+J]=new Function(dp+K.set[name]+ek+K.get[name]+cR);
L[bt+J]=new Function(dp+K.get[name]+cD);
}},__lh:function(fa){return !!this.__lb[fa];
},__li:function(C){return this.__lb[C]||qx.Bootstrap.classIsDefined(C)||(qx.Interface&&qx.Interface.isDefined(C));
},__lj:{0:bs,1:co,2:et,3:cB,4:dD,5:ck},error:function(eS,eT,eU,eV,eW){var eX=eS.constructor.classname;
var eY=bG+eU+cd+eX+eq+this.$$method[eV][eU]+ec+eW+cc;
throw new Error(eY+(this.__lj[eT]||"Unknown reason: "+eT));
},__lk:function(bk,bl,name,bm,bn,bo){var bp=this.$$method[bm][name];
{bl[bp]=new Function(dF,bn.join(dW));
};
if(qx.core.Variant.isSet(dz,cv)){bl[bp]=qx.core.Aspect.wrap(bk.classname+dd+bp,bl[bp],en);
}qx.Bootstrap.setDisplayName(bl[bp],bk.classname+bR,bp);
if(bo===undefined){return bk[bp]();
}else{return bk[bp](bo[0]);
}},executeOptimizedGetter:function(Q,R,name,S){var U=R.$$properties[name];
var W=R.prototype;
var T=[];
var V=this.$$store;
T.push(dH,V.runtime[name],cP);
T.push(cK,V.runtime[name],dP);

if(U.inheritable){T.push(cM,V.inherit[name],cP);
T.push(cK,V.inherit[name],dP);
T.push(dR);
}T.push(dH,V.user[name],cP);
T.push(cK,V.user[name],dP);

if(U.themeable){T.push(cM,V.theme[name],cP);
T.push(cK,V.theme[name],dP);
}
if(U.deferredInit&&U.init===undefined){T.push(cM,V.init[name],cP);
T.push(cK,V.init[name],dP);
}T.push(dR);

if(U.init!==undefined){if(U.inheritable){T.push(bD,V.init[name],dP);

if(U.nullable){T.push(bI);
}else if(U.init!==undefined){T.push(cK,V.init[name],dP);
}else{T.push(cy,name,dv,R.classname,du);
}T.push(bC);
}else{T.push(cK,V.init[name],dP);
}}else if(U.inheritable||U.nullable){T.push(cQ);
}else{T.push(ej,name,dv,R.classname,du);
}return this.__lk(Q,W,name,S,T);
},executeOptimizedSetter:function(o,p,name,q,r){var w=p.$$properties[name];
var v=p.prototype;
var t=[];
var s=q===dL||q===dK||q===dJ||(q===dI&&w.init===undefined);
var u=w.apply||w.event||w.inheritable;
var x=this.__ll(q,name);
this.__lm(t,w,name,q,s);

if(s){this.__ln(t,p,w,name);
}
if(u){this.__lo(t,s,x,q);
}
if(w.inheritable){t.push(cq);
}{};

if(!u){this.__lq(t,name,q,s);
}else{this.__lr(t,w,name,q,s);
}
if(w.inheritable){this.__ls(t,w,name,q);
}else if(u){this.__lt(t,w,name,q);
}
if(u){this.__lu(t,w,name);
if(w.inheritable&&v._getChildren){this.__lv(t,name);
}}if(s){t.push(cx);
}return this.__lk(o,v,name,q,t,r);
},__ll:function(bq,name){if(bq===dJ||bq===cH){var br=this.$$store.runtime[name];
}else if(bq===dK||bq===cN){br=this.$$store.theme[name];
}else if(bq===dI){br=this.$$store.init[name];
}else{br=this.$$store.user[name];
}return br;
},__lm:function(eO,eP,name,eQ,eR){{if(!eP.nullable||eP.check||eP.inheritable){eO.push(eb);
}if(eQ===dL){eO.push(cl,name,bL,eQ,cp);
}};
},__ln:function(c,d,e,name){if(e.transform){c.push(bM,e.transform,dr);
}if(e.validate){if(typeof e.validate===cL){c.push(dM,e.validate,dr);
}else if(e.validate instanceof Function){c.push(d.classname,cF,name);
c.push(em);
}}},__lo:function(ev,ew,ex,ey){var ez=(ey===cJ||ey===cN||ey===cH);

if(ew){ev.push(dH,ex,bA);
}else if(ez){ev.push(dH,ex,bN);
}},__lp:undefined,__lq:function(M,name,N,O){if(N===dJ){M.push(dM,this.$$store.runtime[name],dN);
}else if(N===cH){M.push(dH,this.$$store.runtime[name],cP);
M.push(dG,this.$$store.runtime[name],dP);
}else if(N===dL){M.push(dM,this.$$store.user[name],dN);
}else if(N===cJ){M.push(dH,this.$$store.user[name],cP);
M.push(dG,this.$$store.user[name],dP);
}else if(N===dK){M.push(dM,this.$$store.theme[name],dN);
}else if(N===cN){M.push(dH,this.$$store.theme[name],cP);
M.push(dG,this.$$store.theme[name],dP);
}else if(N===dI&&O){M.push(dM,this.$$store.init[name],dN);
}},__lr:function(fb,fc,name,fd,fe){if(fc.inheritable){fb.push(ci,this.$$store.inherit[name],dP);
}else{fb.push(df);
}fb.push(dH,this.$$store.runtime[name],cG);

if(fd===dJ){fb.push(dO,this.$$store.runtime[name],dN);
}else if(fd===cH){fb.push(dG,this.$$store.runtime[name],dP);
fb.push(dH,this.$$store.user[name],cP);
fb.push(dO,this.$$store.user[name],dP);
fb.push(cM,this.$$store.theme[name],cP);
fb.push(dO,this.$$store.theme[name],dP);
fb.push(cM,this.$$store.init[name],cG);
fb.push(dO,this.$$store.init[name],dP);
fb.push(dM,this.$$store.useinit[name],dU);
fb.push(cO);
}else{fb.push(ea,this.$$store.runtime[name],dP);
if(fd===dL){fb.push(dM,this.$$store.user[name],dN);
}else if(fd===cJ){fb.push(dG,this.$$store.user[name],dP);
}else if(fd===dK){fb.push(dM,this.$$store.theme[name],dN);
}else if(fd===cN){fb.push(dG,this.$$store.theme[name],dP);
}else if(fd===dI&&fe){fb.push(dM,this.$$store.init[name],dN);
}}fb.push(cO);
fb.push(cM,this.$$store.user[name],cG);

if(fd===dL){if(!fc.inheritable){fb.push(dT,this.$$store.user[name],dP);
}fb.push(dO,this.$$store.user[name],dN);
}else if(fd===cJ){if(!fc.inheritable){fb.push(dT,this.$$store.user[name],dP);
}fb.push(dG,this.$$store.user[name],dP);
fb.push(dH,this.$$store.runtime[name],cP);
fb.push(dO,this.$$store.runtime[name],dP);
fb.push(dH,this.$$store.theme[name],cP);
fb.push(dO,this.$$store.theme[name],dP);
fb.push(cM,this.$$store.init[name],cG);
fb.push(dO,this.$$store.init[name],dP);
fb.push(dM,this.$$store.useinit[name],dU);
fb.push(cO);
}else{if(fd===dJ){fb.push(dO,this.$$store.runtime[name],dN);
}else if(fc.inheritable){fb.push(dO,this.$$store.user[name],dP);
}else{fb.push(ea,this.$$store.user[name],dP);
}if(fd===dK){fb.push(dM,this.$$store.theme[name],dN);
}else if(fd===cN){fb.push(dG,this.$$store.theme[name],dP);
}else if(fd===dI&&fe){fb.push(dM,this.$$store.init[name],dN);
}}fb.push(cO);
if(fc.themeable){fb.push(cM,this.$$store.theme[name],cG);

if(!fc.inheritable){fb.push(dT,this.$$store.theme[name],dP);
}
if(fd===dJ){fb.push(dO,this.$$store.runtime[name],dN);
}else if(fd===dL){fb.push(dO,this.$$store.user[name],dN);
}else if(fd===dK){fb.push(dO,this.$$store.theme[name],dN);
}else if(fd===cN){fb.push(dG,this.$$store.theme[name],dP);
fb.push(dH,this.$$store.init[name],cG);
fb.push(dO,this.$$store.init[name],dP);
fb.push(dM,this.$$store.useinit[name],dU);
fb.push(cO);
}else if(fd===dI){if(fe){fb.push(dM,this.$$store.init[name],dN);
}fb.push(dO,this.$$store.theme[name],dP);
}else if(fd===dX){fb.push(dO,this.$$store.theme[name],dP);
}fb.push(cO);
}fb.push(cM,this.$$store.useinit[name],bV);

if(!fc.inheritable){fb.push(dT,this.$$store.init[name],dP);
}
if(fd===dI){if(fe){fb.push(dO,this.$$store.init[name],dN);
}else{fb.push(dO,this.$$store.init[name],dP);
}}else if(fd===dL||fd===dJ||fd===dK||fd===dX){fb.push(dG,this.$$store.useinit[name],dP);

if(fd===dJ){fb.push(dO,this.$$store.runtime[name],dN);
}else if(fd===dL){fb.push(dO,this.$$store.user[name],dN);
}else if(fd===dK){fb.push(dO,this.$$store.theme[name],dN);
}else if(fd===dX){fb.push(dO,this.$$store.init[name],dP);
}}fb.push(cO);
if(fd===dL||fd===dJ||fd===dK||fd===dI){fb.push(es);

if(fd===dJ){fb.push(dO,this.$$store.runtime[name],dN);
}else if(fd===dL){fb.push(dO,this.$$store.user[name],dN);
}else if(fd===dK){fb.push(dO,this.$$store.theme[name],dN);
}else if(fd===dI){if(fe){fb.push(dO,this.$$store.init[name],dN);
}else{fb.push(dO,this.$$store.init[name],dP);
}fb.push(dM,this.$$store.useinit[name],dU);
}fb.push(cO);
}},__ls:function(y,z,name,A){y.push(bT);

if(A===dX){y.push(cu);
}else{y.push(cU,this.$$store.inherit[name],dP);
}y.push(dB);
y.push(dM,this.$$store.init[name],di);
y.push(dM,this.$$store.init[name],dl);
y.push(dO,this.$$store.init[name],dP);
y.push(dM,this.$$store.useinit[name],dU);
y.push(cz);
y.push(dG,this.$$store.useinit[name],bX);
y.push(cO);
y.push(dt);
y.push(ce);
y.push(cm,this.$$store.inherit[name],dP);
y.push(cO);
y.push(cj);
y.push(dG,this.$$store.inherit[name],dP);
y.push(bJ,this.$$store.inherit[name],eu);
y.push(dg);
if(z.init!==undefined&&A!==dI){y.push(dY,this.$$store.init[name],dS);
}else{y.push(ds);
}y.push(bv);
},__lt:function(bh,bi,name,bj){if(bj!==dL&&bj!==dJ&&bj!==dK){bh.push(dj);
}bh.push(dt);
if(bi.init!==undefined&&bj!==dI){bh.push(dY,this.$$store.init[name],dS);
}else{bh.push(ds);
}},__lu:function(ba,bb,name){if(bb.apply){ba.push(dM,bb.apply,cw,name,cW);
}if(bb.event){ba.push(cS,cA,bb.event,bP,dA,bb.event,cr,ca);
}},__lv:function(n,name){n.push(eo);
n.push(ee,this.$$method.refresh[name],cC,this.$$method.refresh[name],cg);
n.push(cO);
}},defer:function(eL){var eN=navigator.userAgent.indexOf(ch)!=-1;
var eM=navigator.userAgent.indexOf(dE)!=-1;
if(eN||eM){eL.__lh=eL.__li;
}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(q,r){if(r==null){r=0;
}else if(r<0){r=Math.max(0,this.length+r);
}
for(var i=r;i<this.length;i++){if(this[i]===q){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(y,z){if(z==null){z=this.length-1;
}else if(z<0){z=Math.max(0,this.length+z);
}
for(var i=z;i>=0;i--){if(this[i]===y){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(s,t){var l=this.length;

for(var i=0;i<l;i++){var u=this[i];

if(u!==undefined){s.call(t||window,u,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(h,j){var k=[];
var l=this.length;

for(var i=0;i<l;i++){var m=this[i];

if(m!==undefined){if(h.call(j||window,m,i,this)){k.push(this[i]);
}}}return k;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){C[i]=A.call(B||window,D,i,this);
}}return C;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(v,w){var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){if(v.call(w||window,x,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){if(!n.call(o||window,p,i,this)){return false;
}}}return true;
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
}}[String.prototype.quote?f:g]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__en:function(){var u=d;
var y=e;
var x=window.navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){u=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){y+=q+RegExp.$3;
}}else{w=true;
y=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){u=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(n).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=m;
}}else if(window.controllers&&window.navigator.product===c){u=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=k;
y=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(y<8&&/Trident\/([^\);]+)(\)|;)/.test(x)){if(RegExp.$1===g){y=h;
}}this.MSHTML=true;
}else{var v=window.qxFail;

if(v&&typeof v===o){var u=v();

if(u.NAME&&u.FULLVERSION){u=u.NAME;
this[u.toUpperCase()]=true;
y=u.FULLVERSION;
}}else{A=true;
w=true;
y=r;
u=s;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(t){t.__en();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__ku:{},__kv:{},compilerIsSet:function(){return true;
},define:function(K,L,M){{};

if(!this.__ku[K]){this.__ku[K]={};
}else{}this.__ku[K].allowedValues=L;
this.__ku[K].defaultValue=M;
},get:function(D){var E=this.__ku[D];
{};

if(E.value!==undefined){return E.value;
}return E.defaultValue;
},__kw:function(){if(window.qxvariants){for(var B in qxvariants){{};

if(!this.__ku[B]){this.__ku[B]={};
}this.__ku[B].value=qxvariants[B];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(C){}this.__kx(this.__ku);
}},__kx:function(){if(qx.core.Setting.get(m)!=true){return;
}var O=document.location.search.slice(1).split(p);

for(var i=0;i<O.length;i++){var P=O[i].split(f);

if(P.length!=3||P[0]!=c){continue;
}var Q=P[1];

if(!this.__ku[Q]){this.__ku[Q]={};
}this.__ku[Q].value=decodeURIComponent(P[2]);
}},select:function(y,z){{};

for(var A in z){if(this.isSet(y,A)){return z[A];
}}
if(z[r]!==undefined){return z[r];
}{};
},isSet:function(F,G){var H=F+n+G;

if(this.__kv[H]!==undefined){return this.__kv[H];
}var J=false;
if(G.indexOf(s)<0){J=this.get(F)===G;
}else{var I=G.split(s);

for(var i=0,l=I.length;i<l;i++){if(this.get(F)===I[i]){J=true;
break;
}}}this.__kv[H]=J;
return J;
},__ky:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__kz:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__kA:function(w,x){for(var i=0,l=w.length;i<l;i++){if(w[i]==x){return true;
}}return false;
}},defer:function(N){N.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
N.define(k,[u,t],u);
N.define(o,[u,t],t);
N.define(j,[u,t],u);
N.__kw();
}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__kd:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__kd;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var q=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,q);
}return q;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(n,o,p,name){this.__kd.push({fcn:n,pos:o===c?-1:1,type:p,name:name});
}}});
})();
(function(){var H="qx.aspects",G="on",F=".",E="static",D="constructor",C="[Class ",B="]",A="toString",z="singleton",y="$$init_",s=".prototype",x="destructor",v="extend",r="destruct",q="Class",u="off",t="qx.Class",w="member",p="qx.event.type.Data";
qx.Bootstrap.define(t,{statics:{define:function(name,bD){if(!bD){var bD={};
}if(bD.include&&!(bD.include instanceof Array)){bD.include=[bD.include];
}if(bD.implement&&!(bD.implement instanceof Array)){bD.implement=[bD.implement];
}var bE=false;

if(!bD.hasOwnProperty(v)&&!bD.type){bD.type=E;
bE=true;
}{};
var bF=this.__cb(name,bD.type,bD.extend,bD.statics,bD.construct,bD.destruct,bD.include);
if(bD.extend){if(bD.properties){this.__cd(bF,bD.properties,true);
}if(bD.members){this.__cf(bF,bD.members,true,true,false);
}if(bD.events){this.__cc(bF,bD.events,true);
}if(bD.include){for(var i=0,l=bD.include.length;i<l;i++){this.__cj(bF,bD.include[i],false);
}}}if(bD.settings){for(var bG in bD.settings){qx.core.Setting.define(bG,bD.settings[bG]);
}}if(bD.variants){for(var bG in bD.variants){qx.core.Variant.define(bG,bD.variants[bG].allowedValues,bD.variants[bG].defaultValue);
}}if(bD.implement){for(var i=0,l=bD.implement.length;i<l;i++){this.__ch(bF,bD.implement[i]);
}}{};
if(bD.defer){bD.defer.self=bF;
bD.defer(bF,bF.prototype,{add:function(name,W){var X={};
X[name]=W;
qx.Class.__cd(bF,X,true);
}});
}return bF;
},undefine:function(name){delete this.$$registry[name];
var bA=name.split(F);
var bC=[window];

for(var i=0;i<bA.length;i++){bC.push(bC[i][bA[i]]);
}for(var i=bC.length-1;i>=1;i--){var bB=bC[i];
var parent=bC[i-1];

if(qx.Bootstrap.isFunction(bB)||qx.Bootstrap.objectGetLength(bB)===0){delete parent[bA[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(h,j){{};
qx.Class.__cj(h,j,false);
},patch:function(ck,cl){{};
qx.Class.__cj(ck,cl,true);
},isSubClassOf:function(bh,bi){if(!bh){return false;
}
if(bh==bi){return true;
}
if(bh.prototype instanceof bi){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(O){var P=[];

while(O){if(O.$$properties){P.push.apply(P,qx.Bootstrap.getKeys(O.$$properties));
}O=O.superclass;
}return P;
},getByProperty:function(bw,name){while(bw){if(bw.$$properties&&bw.$$properties[name]){return bw;
}bw=bw.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bu,bv){return bu.$$includes&&bu.$$includes.indexOf(bv)!==-1;
},getByMixin:function(cm,cn){var co,i,l;

while(cm){if(cm.$$includes){co=cm.$$flatIncludes;

for(i=0,l=co.length;i<l;i++){if(co[i]===cn){return cm;
}}}cm=cm.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bx,by){return !!this.getByMixin(bx,by);
},hasOwnInterface:function(M,N){return M.$$implements&&M.$$implements.indexOf(N)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(ce){var cf=[];

while(ce){if(ce.$$implements){cf.push.apply(cf,ce.$$flatImplements);
}ce=ce.superclass;
}return cf;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bK,bL){var bM=bK.constructor;

if(this.hasInterface(bM,bL)){return true;
}
try{qx.Interface.assertObject(bK,bL);
return true;
}catch(bz){}
try{qx.Interface.assert(bM,bL,false);
return true;
}catch(bt){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return C+this.classname+B;
},$$registry:qx.Bootstrap.$$registry,__bW:null,__bX:null,__bY:function(){},__ca:function(){},__cb:function(name,bN,bO,bP,bQ,bR,bS){var bV;

if(!bO&&qx.core.Variant.isSet(H,u)){bV=bP||{};
qx.Bootstrap.setDisplayNames(bV,name);
}else{var bV={};

if(bO){if(!bQ){bQ=this.__ck();
}
if(this.__cm(bO,bS)){bV=this.__cn(bQ,name,bN);
}else{bV=bQ;
}if(bN===z){bV.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bQ,name,D);
}if(bP){qx.Bootstrap.setDisplayNames(bP,name);
var bW;

for(var i=0,a=qx.Bootstrap.getKeys(bP),l=a.length;i<l;i++){bW=a[i];
var bT=bP[bW];

if(qx.core.Variant.isSet(H,G)){if(bT instanceof Function){bT=qx.core.Aspect.wrap(name+F+bW,bT,E);
}bV[bW]=bT;
}else{bV[bW]=bT;
}}}}var bU=qx.Bootstrap.createNamespace(name,bV);
bV.name=bV.classname=name;
bV.basename=bU;
bV.$$type=q;

if(bN){bV.$$classtype=bN;
}if(!bV.hasOwnProperty(A)){bV.toString=this.genericToString;
}
if(bO){qx.Bootstrap.extendClass(bV,bQ,bO,name,bU);
if(bR){if(qx.core.Variant.isSet(H,G)){bR=qx.core.Aspect.wrap(name,bR,x);
}bV.$$destructor=bR;
qx.Bootstrap.setDisplayName(bR,name,r);
}}this.$$registry[name]=bV;
return bV;
},__cc:function(I,J,K){var L,L;
{};

if(I.$$events){for(var L in J){I.$$events[L]=J[L];
}}else{I.$$events=J;
}},__cd:function(R,S,T){var U;

if(T===undefined){T=false;
}var V=R.prototype;

for(var name in S){U=S[name];
{};
U.name=name;
if(!U.refine){if(R.$$properties===undefined){R.$$properties={};
}R.$$properties[name]=U;
}if(U.init!==undefined){R.prototype[y+name]=U.init;
}if(U.event!==undefined){var event={};
event[U.event]=p;
this.__cc(R,event,T);
}if(U.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!V.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(R);
}}
if(!U.refine){qx.core.Property.attachMethods(R,name,U);
}}},__ce:null,__cf:function(Y,ba,bb,bc,bd){var be=Y.prototype;
var bg,bf;
qx.Bootstrap.setDisplayNames(ba,Y.classname+s);

for(var i=0,a=qx.Bootstrap.getKeys(ba),l=a.length;i<l;i++){bg=a[i];
bf=ba[bg];
{};
if(bc!==false&&bf instanceof Function&&bf.$$type==null){if(bd==true){bf=this.__cg(bf,be[bg]);
}else{if(be[bg]){bf.base=be[bg];
}bf.self=Y;
}
if(qx.core.Variant.isSet(H,G)){bf=qx.core.Aspect.wrap(Y.classname+F+bg,bf,w);
}}be[bg]=bf;
}},__cg:function(bj,bk){if(bk){return function(){var bs=bj.base;
bj.base=bk;
var br=bj.apply(this,arguments);
bj.base=bs;
return br;
};
}else{return bj;
}},__ch:function(b,c){{};
var d=qx.Interface.flatten([c]);

if(b.$$implements){b.$$implements.push(c);
b.$$flatImplements.push.apply(b.$$flatImplements,d);
}else{b.$$implements=[c];
b.$$flatImplements=d;
}},__ci:function(bl){var name=bl.classname;
var bm=this.__cn(bl,name,bl.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bl),l=a.length;i<l;i++){bn=a[i];
bm[bn]=bl[bn];
}bm.prototype=bl.prototype;
var bp=bl.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bp),l=a.length;i<l;i++){bn=a[i];
var bq=bp[bn];
if(bq&&bq.self==bl){bq.self=bm;
}}for(var bn in this.$$registry){var bo=this.$$registry[bn];

if(!bo){continue;
}
if(bo.base==bl){bo.base=bm;
}
if(bo.superclass==bl){bo.superclass=bm;
}
if(bo.$$original){if(bo.$$original.base==bl){bo.$$original.base=bm;
}
if(bo.$$original.superclass==bl){bo.$$original.superclass=bm;
}}}qx.Bootstrap.createNamespace(name,bm);
this.$$registry[name]=bm;
return bm;
},__cj:function(bX,bY,ca){{};

if(this.hasMixin(bX,bY)){return;
}var cd=bX.$$original;

if(bY.$$constructor&&!cd){bX=this.__ci(bX);
}var cc=qx.Mixin.flatten([bY]);
var cb;

for(var i=0,l=cc.length;i<l;i++){cb=cc[i];
if(cb.$$events){this.__cc(bX,cb.$$events,ca);
}if(cb.$$properties){this.__cd(bX,cb.$$properties,ca);
}if(cb.$$members){this.__cf(bX,cb.$$members,ca,ca,ca);
}}if(bX.$$includes){bX.$$includes.push(bY);
bX.$$flatIncludes.push.apply(bX.$$flatIncludes,cc);
}else{bX.$$includes=[bY];
bX.$$flatIncludes=cc;
}},__ck:function(){function Q(){Q.base.apply(this,arguments);
}return Q;
},__cl:function(){return function(){};
},__cm:function(cg,ch){{};
if(cg&&cg.$$includes){var ci=cg.$$flatIncludes;

for(var i=0,l=ci.length;i<l;i++){if(ci[i].$$constructor){return true;
}}}if(ch){var cj=qx.Mixin.flatten(ch);

for(var i=0,l=cj.length;i<l;i++){if(cj[i].$$constructor){return true;
}}}return false;
},__cn:function(k,name,m){var o=function(){var g=o;
{};
var f=g.$$original.apply(this,arguments);
if(g.$$includes){var e=g.$$flatIncludes;

for(var i=0,l=e.length;i<l;i++){if(e[i].$$constructor){e[i].$$constructor.apply(this,arguments);
}}}{};
return f;
};

if(qx.core.Variant.isSet(H,G)){var n=qx.core.Aspect.wrap(name,o,D);
o.$$original=k;
o.constructor=n;
o=n;
}o.$$original=k;
k.wrapper=o;
return o;
}},defer:function(){if(qx.core.Variant.isSet(H,G)){for(var bH in qx.Bootstrap.$$registry){var bI=qx.Bootstrap.$$registry[bH];

for(var bJ in bI){if(bI[bJ] instanceof Function){bI[bJ]=qx.core.Aspect.wrap(bH+F+bJ,bI[bJ],E);
}}}}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__hI:{},__hJ:0,__hK:[],register:function(k){var o=this.__hI;

if(!o){return;
}var n=k.$$hash;

if(n==null){var m=this.__hK;

if(m.length>0){n=m.pop();
}else{n=(this.__hJ++)+d;
}k.$$hash=n;
}{};
o[n]=k;
},unregister:function(g){var h=g.$$hash;

if(h==null){return;
}var j=this.__hI;

if(j&&j[h]){delete j[h];
this.__hK.push(h);
}try{delete g.$$hash;
}catch(f){if(g.removeAttribute){g.removeAttribute(e);
}}},toHashCode:function(r){{};
var t=r.$$hash;

if(t!=null){return t;
}var s=this.__hK;

if(s.length>0){t=s.pop();
}else{t=(this.__hJ++)+d;
}return r.$$hash=t;
},clearHashCode:function(u){{};
var v=u.$$hash;

if(v!=null){this.__hK.push(v);
try{delete u.$$hash;
}catch(p){if(u.removeAttribute){u.removeAttribute(e);
}}}},fromHashCode:function(A){return this.__hI[A]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__hI;
var z=[];

for(var y in x){z.push(y);
}z.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var w,i=0,l=z.length;

while(true){try{for(;i<l;i++){y=z[i];
w=x[y];

if(w&&w.dispose){w.dispose();
}}}catch(q){qx.Bootstrap.error(this,"Could not dispose object "+w.toString()+": "+q);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__hI;
},getRegistry:function(){return this.__hI;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(A,B,C){A.attachEvent(h+B,C);
},"default":function(x,y,z){x.addEventListener(y,z,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(j,k,l){try{j.detachEvent(h+k,l);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(D,E,F){D.removeEventListener(E,F,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===b){return e.fromElement;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(s){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(m){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(p,q){if(document.createEventObject){var r=document.createEventObject();
return p.fireEvent(h+q,r);
}else{var r=document.createEvent(a);
r.initEvent(q,true,true);
return !p.dispatchEvent(r);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(n,o){return n.hasOwnProperty(h+o);
},"default":function(t,u){var v=h+u;
var w=(v in t);

if(!w){w=typeof t[v]==g;

if(!w&&t.setAttribute){t.setAttribute(v,c);
w=typeof t[v]==g;
t.removeAttribute(v);
}}return w;
}})}});
})();
(function(){var A="|bubble",z="|capture",y="|",x="",w="_",v="unload",u="UNKNOWN_",t="__fj",s="c",r="__fi",o="DOM_",q="WIN_",p="capture",n="qx.event.Manager",m="QX_";
qx.Class.define(n,{extend:Object,construct:function(bV,bW){this.__fe=bV;
this.__ff=qx.core.ObjectRegistry.toHashCode(bV);
this.__fg=bW;
if(bV.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bV,v,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bV,v,arguments.callee);
self.dispose();
}));
}this.__fh={};
this.__fi={};
this.__fj={};
this.__fk={};
},statics:{__fl:0,getNextUniqueId:function(){return (this.__fl++)+x;
}},members:{__fg:null,__fh:null,__fj:null,__fm:null,__fi:null,__fk:null,__fe:null,__ff:null,getWindow:function(){return this.__fe;
},getWindowId:function(){return this.__ff;
},getHandler:function(bf){var bg=this.__fi[bf.classname];

if(bg){return bg;
}return this.__fi[bf.classname]=new bf(this);
},getDispatcher:function(V){var W=this.__fj[V.classname];

if(W){return W;
}return this.__fj[V.classname]=new V(this,this.__fg);
},getListeners:function(F,G,H){var I=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var K=this.__fh[I];

if(!K){return null;
}var L=G+(H?z:A);
var J=K[L];
return J?J.concat():null;
},serializeListeners:function(bL){var bS=bL.$$hash||qx.core.ObjectRegistry.toHashCode(bL);
var bU=this.__fh[bS];
var bQ=[];

if(bU){var bO,bT,bM,bP,bR;

for(var bN in bU){bO=bN.indexOf(y);
bT=bN.substring(0,bO);
bM=bN.charAt(bO+1)==s;
bP=bU[bN];

for(var i=0,l=bP.length;i<l;i++){bR=bP[i];
bQ.push({self:bR.context,handler:bR.handler,type:bT,capture:bM});
}}}return bQ;
},toggleAttachedEvents:function(M,N){var S=M.$$hash||qx.core.ObjectRegistry.toHashCode(M);
var U=this.__fh[S];

if(U){var P,T,O,Q;

for(var R in U){P=R.indexOf(y);
T=R.substring(0,P);
O=R.charCodeAt(P+1)===99;
Q=U[R];

if(N){this.__fn(M,T,O);
}else{this.__fo(M,T,O);
}}}},hasListener:function(bX,bY,ca){{};
var cb=bX.$$hash||qx.core.ObjectRegistry.toHashCode(bX);
var cd=this.__fh[cb];

if(!cd){return false;
}var ce=bY+(ca?z:A);
var cc=cd[ce];
return cc&&cc.length>0;
},importListeners:function(cf,cg){{};
var cm=cf.$$hash||qx.core.ObjectRegistry.toHashCode(cf);
var cn=this.__fh[cm]={};
var cj=qx.event.Manager;

for(var ch in cg){var ck=cg[ch];
var cl=ck.type+(ck.capture?z:A);
var ci=cn[cl];

if(!ci){ci=cn[cl]=[];
this.__fn(cf,ck.type,ck.capture);
}ci.push({handler:ck.listener,context:ck.self,unique:ck.unique||(cj.__fl++)+x});
}},addListener:function(bh,bi,bj,self,bk){var bo;
{};
var bp=bh.$$hash||qx.core.ObjectRegistry.toHashCode(bh);
var br=this.__fh[bp];

if(!br){br=this.__fh[bp]={};
}var bn=bi+(bk?z:A);
var bm=br[bn];

if(!bm){bm=br[bn]=[];
}if(bm.length===0){this.__fn(bh,bi,bk);
}var bq=(qx.event.Manager.__fl++)+x;
var bl={handler:bj,context:self,unique:bq};
bm.push(bl);
return bn+y+bq;
},findHandler:function(co,cp){var cz=false,cs=false,cA=false;
var cy;

if(co.nodeType===1){cz=true;
cy=o+co.tagName.toLowerCase()+w+cp;
}else if(co==this.__fe){cs=true;
cy=q+cp;
}else if(co.classname){cA=true;
cy=m+co.classname+w+cp;
}else{cy=u+co+w+cp;
}var cu=this.__fk;

if(cu[cy]){return cu[cy];
}var cx=this.__fg.getHandlers();
var ct=qx.event.IEventHandler;
var cv,cw,cr,cq;

for(var i=0,l=cx.length;i<l;i++){cv=cx[i];
cr=cv.SUPPORTED_TYPES;

if(cr&&!cr[cp]){continue;
}cq=cv.TARGET_CHECK;

if(cq){if(!cz&&cq===ct.TARGET_DOMNODE){continue;
}else if(!cs&&cq===ct.TARGET_WINDOW){continue;
}else if(!cA&&cq===ct.TARGET_OBJECT){continue;
}}cw=this.getHandler(cx[i]);

if(cv.IGNORE_CAN_HANDLE||cw.canHandleEvent(co,cp)){cu[cy]=cw;
return cw;
}}return null;
},__fn:function(B,C,D){var E=this.findHandler(B,C);

if(E){E.registerEvent(B,C,D);
return;
}{};
},removeListener:function(a,b,c,self,d){var h;
{};
var j=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var k=this.__fh[j];

if(!k){return false;
}var e=b+(d?z:A);
var f=k[e];

if(!f){return false;
}var g;

for(var i=0,l=f.length;i<l;i++){g=f[i];

if(g.handler===c&&g.context===self){qx.lang.Array.removeAt(f,i);

if(f.length==0){this.__fo(a,b,d);
}return true;
}}return false;
},removeListenerById:function(bs,bt){var bz;
{};
var bx=bt.split(y);
var bC=bx[0];
var bu=bx[1].charCodeAt(0)==99;
var bB=bx[2];
var bA=bs.$$hash||qx.core.ObjectRegistry.toHashCode(bs);
var bD=this.__fh[bA];

if(!bD){return false;
}var by=bC+(bu?z:A);
var bw=bD[by];

if(!bw){return false;
}var bv;

for(var i=0,l=bw.length;i<l;i++){bv=bw[i];

if(bv.unique===bB){qx.lang.Array.removeAt(bw,i);

if(bw.length==0){this.__fo(bs,bC,bu);
}return true;
}}return false;
},removeAllListeners:function(X){var bc=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var be=this.__fh[bc];

if(!be){return false;
}var ba,bd,Y;

for(var bb in be){if(be[bb].length>0){ba=bb.split(y);
bd=ba[0];
Y=ba[1]===p;
this.__fo(X,bd,Y);
}}delete this.__fh[bc];
return true;
},deleteAllListeners:function(cF){delete this.__fh[cF];
},__fo:function(cB,cC,cD){var cE=this.findHandler(cB,cC);

if(cE){cE.unregisterEvent(cB,cC,cD);
return;
}{};
},dispatchEvent:function(bE,event){var bJ;
{};
var bK=event.getType();

if(!event.getBubbles()&&!this.hasListener(bE,bK)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bE);
}var bI=this.__fg.getDispatchers();
var bH;
var bG=false;

for(var i=0,l=bI.length;i<l;i++){bH=this.getDispatcher(bI[i]);
if(bH.canDispatchEvent(bE,event,bK)){bH.dispatchEvent(bE,event,bK);
bG=true;
break;
}}
if(!bG){{};
return true;
}var bF=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bF;
},dispose:function(){this.__fg.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,r);
qx.util.DisposeUtil.disposeMap(this,t);
this.__fh=this.__fe=this.__fm=null;
this.__fg=this.__fk=null;
}}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(s){return s.nodeType===
this.DOCUMENT?s:
s.ownerDocument||s.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(p){if(p.nodeType==null){return p;
}if(p.nodeType!==this.DOCUMENT){p=p.ownerDocument;
}return p.parentWindow;
},"default":function(l){if(l.nodeType==null){return l;
}if(l.nodeType!==this.DOCUMENT){l=l.ownerDocument;
}return l.defaultView;
}}),getDocumentElement:function(o){return this.getDocument(o).documentElement;
},getBodyElement:function(q){return this.getDocument(q).body;
},isNode:function(n){return !!(n&&n.nodeType!=null);
},isElement:function(h){return !!(h&&h.nodeType===this.ELEMENT);
},isDocument:function(e){return !!(e&&e.nodeType===this.DOCUMENT);
},isText:function(m){return !!(m&&m.nodeType===this.TEXT);
},isWindow:function(r){return !!(r&&r.history&&r.location&&r.document);
},isNodeName:function(f,g){if(!g||!f||!f.nodeName){return false;
}return g.toLowerCase()==qx.dom.Node.getName(f);
},getName:function(t){if(!t||!t.nodeName){return null;
}return t.nodeName.toLowerCase();
},getText:function(j){if(!j||!j.nodeType){return null;
}
switch(j.nodeType){case 1:var i,a=[],k=j.childNodes,length=k.length;

for(i=0;i<length;i++){a[i]=this.getText(k[i]);
}return a.join(b);
case 2:return j.nodeValue;
break;
case 3:return j.nodeValue;
break;
}return null;
}}});
})();
(function(){var s="mshtml",r="qx.client",q="[object Array]",p="qx.lang.Array",o="qx",n="number",m="string";
qx.Class.define(p,{statics:{toArray:function(A,B){return this.cast(A,Array,B);
},cast:function(c,d,e){if(c.constructor===d){return c;
}
if(qx.Class.hasInterface(c,qx.data.IListData)){var c=c.toArray();
}var f=new d;
if(qx.core.Variant.isSet(r,s)){if(c.item){for(var i=e||0,l=c.length;i<l;i++){f.push(c[i]);
}return f;
}}if(Object.prototype.toString.call(c)===q&&e==null){f.push.apply(f,c);
}else{f.push.apply(f,Array.prototype.slice.call(c,e||0));
}return f;
},fromArguments:function(bh,bi){return Array.prototype.slice.call(bh,bi||0);
},fromCollection:function(K){if(qx.core.Variant.isSet(r,s)){if(K.item){var L=[];

for(var i=0,l=K.length;i<l;i++){L[i]=K[i];
}return L;
}}return Array.prototype.slice.call(K,0);
},fromShortHand:function(M){var O=M.length;
var N=qx.lang.Array.clone(M);
switch(O){case 1:N[1]=N[2]=N[3]=N[0];
break;
case 2:N[2]=N[0];
case 3:N[3]=N[1];
}return N;
},clone:function(bp){return bp.concat();
},insertAt:function(E,F,i){E.splice(i,0,F);
return E;
},insertBefore:function(bj,bk,bl){var i=bj.indexOf(bl);

if(i==-1){bj.push(bk);
}else{bj.splice(i,0,bk);
}return bj;
},insertAfter:function(H,I,J){var i=H.indexOf(J);

if(i==-1||i==(H.length-1)){H.push(I);
}else{H.splice(i+1,0,I);
}return H;
},removeAt:function(G,i){return G.splice(i,1)[0];
},removeAll:function(P){P.length=0;
return this;
},append:function(bn,bo){{};
Array.prototype.push.apply(bn,bo);
return bn;
},exclude:function(g,h){{};

for(var i=0,k=h.length,j;i<k;i++){j=g.indexOf(h[i]);

if(j!=-1){g.splice(j,1);
}}return g;
},remove:function(a,b){var i=a.indexOf(b);

if(i!=-1){a.splice(i,1);
return b;
}},contains:function(w,x){return w.indexOf(x)!==-1;
},equals:function(C,D){var length=C.length;

if(length!==D.length){return false;
}
for(var i=0;i<length;i++){if(C[i]!==D[i]){return false;
}}return true;
},sum:function(y){var z=0;

for(var i=0,l=y.length;i<l;i++){z+=y[i];
}return z;
},max:function(Q){{};
var i,S=Q.length,R=Q[0];

for(i=1;i<S;i++){if(Q[i]>R){R=Q[i];
}}return R===undefined?null:R;
},min:function(t){{};
var i,v=t.length,u=t[0];

for(i=1;i<v;i++){if(t[i]<u){u=t[i];
}}return u===undefined?null:u;
},unique:function(T){var be=[],V={},Y={},bb={};
var ba,U=0;
var bf=o+qx.lang.Date.now();
var W=false,bd=false,bg=false;
for(var i=0,bc=T.length;i<bc;i++){ba=T[i];
if(ba===null){if(!W){W=true;
be.push(ba);
}}else if(ba===undefined){}else if(ba===false){if(!bd){bd=true;
be.push(ba);
}}else if(ba===true){if(!bg){bg=true;
be.push(ba);
}}else if(typeof ba===m){if(!V[ba]){V[ba]=1;
be.push(ba);
}}else if(typeof ba===n){if(!Y[ba]){Y[ba]=1;
be.push(ba);
}}else{X=ba[bf];

if(X==null){X=ba[bf]=U++;
}
if(!bb[X]){bb[X]=ba;
be.push(ba);
}}}for(var X in bb){try{delete bb[X][bf];
}catch(bq){try{bb[X][bf]=null;
}catch(bm){throw new Error("Cannot clean-up map entry doneObjects["+X+"]["+bf+"]");
}}}return be;
}}});
})();
(function(){var B="()",A=".",z=".prototype.",y='anonymous()',x="qx.lang.Function",w=".constructor()";
qx.Class.define(x,{statics:{getCaller:function(s){return s.caller?s.caller.callee:s.callee.caller;
},getName:function(E){if(E.displayName){return E.displayName;
}
if(E.$$original||E.wrapper||E.classname){return E.classname+w;
}
if(E.$$mixin){for(var G in E.$$mixin.$$members){if(E.$$mixin.$$members[G]==E){return E.$$mixin.name+z+G+B;
}}for(var G in E.$$mixin){if(E.$$mixin[G]==E){return E.$$mixin.name+A+G+B;
}}}
if(E.self){var H=E.self.constructor;

if(H){for(var G in H.prototype){if(H.prototype[G]==E){return H.classname+z+G+B;
}}for(var G in H){if(H[G]==E){return H.classname+A+G+B;
}}}}var F=E.toString().match(/function\s*(\w*)\s*\(.*/);

if(F&&F.length>=1&&F[1]){return F[1]+B;
}return y;
},globalEval:function(d){if(window.execScript){return window.execScript(d);
}else{return eval.call(window,d);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(n,o){{};
if(!o){return n;
}if(!(o.self||o.args||o.delay!=null||o.periodical!=null||o.attempt)){return n;
}return function(event){{};
var f=qx.lang.Array.fromArguments(arguments);
if(o.args){f=o.args.concat(f);
}
if(o.delay||o.periodical){var e=qx.event.GlobalError.observeMethod(function(){return n.apply(o.self||this,f);
});

if(o.delay){return window.setTimeout(e,o.delay);
}
if(o.periodical){return window.setInterval(e,o.periodical);
}}else if(o.attempt){var g=false;

try{g=n.apply(o.self||this,f);
}catch(j){}return g;
}else{return n.apply(o.self||this,f);
}};
},bind:function(b,self,c){return this.create(b,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(h,i){return this.create(h,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(k,self,l){if(arguments.length<3){return function(event){return k.call(self||this,event||window.event);
};
}else{var m=qx.lang.Array.fromArguments(arguments,2);
return function(event){var a=[event||window.event];
a.push.apply(a,m);
k.apply(self||this,a);
};
}},attempt:function(C,self,D){return this.create(C,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(p,q,self,r){return this.create(p,{delay:q,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(t,u,self,v){return this.create(t,{periodical:u,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var g="qx.event.Registration";
qx.Class.define(g,{statics:{__eR:{},getManager:function(K){if(K==null){{};
K=window;
}else if(K.nodeType){K=qx.dom.Node.getWindow(K);
}else if(!qx.dom.Node.isWindow(K)){K=window;
}var M=K.$$hash||qx.core.ObjectRegistry.toHashCode(K);
var L=this.__eR[M];

if(!L){L=new qx.event.Manager(K,this);
this.__eR[M]=L;
}return L;
},removeManager:function(v){var w=v.getWindowId();
delete this.__eR[w];
},addListener:function(c,d,e,self,f){return this.getManager(c).addListener(c,d,e,self,f);
},removeListener:function(F,G,H,self,I){return this.getManager(F).removeListener(F,G,H,self,I);
},removeListenerById:function(z,A){return this.getManager(z).removeListenerById(z,A);
},removeAllListeners:function(l){return this.getManager(l).removeAllListeners(l);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(C,D,E){return this.getManager(C).hasListener(C,D,E);
},serializeListeners:function(s){return this.getManager(s).serializeListeners(s);
},createEvent:function(h,i,j){{};
if(i==null){i=qx.event.type.Event;
}var k=qx.event.Pool.getInstance().getObject(i);
j?k.init.apply(k,j):k.init();
if(h){k.setType(h);
}return k;
},dispatchEvent:function(B,event){return this.getManager(B).dispatchEvent(B,event);
},fireEvent:function(N,O,P,Q){var R;
{};
var S=this.createEvent(O,P||null,Q);
return this.getManager(N).dispatchEvent(N,S);
},fireNonBubblingEvent:function(m,n,o,p){{};
var q=this.getManager(m);

if(!q.hasListener(m,n,false)){return true;
}var r=this.createEvent(n,o||null,p);
return q.dispatchEvent(m,r);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__eS:[],addHandler:function(J){{};
this.__eS.push(J);
this.__eS.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__eS;
},__eT:[],addDispatcher:function(x,y){{};
this.__eT.push(x);
this.__eT.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__eT;
}}});
})();
(function(){var k=":",j="qx.client",h="anonymous",g="...",f="qx.dev.StackTrace",e="",d="\n",c="/source/class/",b=".";
qx.Class.define(f,{statics:{getStackTrace:qx.core.Variant.select(j,{"gecko":function(){try{throw new Error();
}catch(l){var O=this.getStackTraceFromError(l);
qx.lang.Array.removeAt(O,0);
var M=this.getStackTraceFromCaller(arguments);
var K=M.length>O.length?M:O;

for(var i=0;i<Math.min(M.length,O.length);i++){var L=M[i];

if(L.indexOf(h)>=0){continue;
}var S=L.split(k);

if(S.length!=2){continue;
}var Q=S[0];
var J=S[1];
var I=O[i];
var T=I.split(k);
var P=T[0];
var H=T[1];

if(qx.Class.getByName(P)){var N=P;
}else{N=Q;
}var R=N+k;

if(J){R+=J+k;
}R+=H;
K[i]=R;
}return K;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var x;

try{x.bar();
}catch(U){var y=this.getStackTraceFromError(U);
qx.lang.Array.removeAt(y,0);
return y;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(j,{"opera":function(w){return [];
},"default":function(q){var v=[];
var u=qx.lang.Function.getCaller(q);
var r={};

while(u){var s=qx.lang.Function.getName(u);
v.push(s);

try{u=u.caller;
}catch(G){break;
}
if(!u){break;
}var t=qx.core.ObjectRegistry.toHashCode(u);

if(r[t]){v.push(g);
break;
}r[t]=u;
}return v;
}}),getStackTraceFromError:qx.core.Variant.select(j,{"gecko":function(z){if(!z.stack){return [];
}var F=/@(.+):(\d+)$/gm;
var A;
var B=[];

while((A=F.exec(z.stack))!=null){var C=A[1];
var E=A[2];
var D=this.__ko(C);
B.push(D+k+E);
}return B;
},"webkit":function(a){if(a.sourceURL&&a.line){return [this.__ko(a.sourceURL)+k+a.line];
}else{return [];
}},"opera":function(V){if(V.message.indexOf("Backtrace:")<0){return [];
}var X=[];
var Y=qx.lang.String.trim(V.message.split("Backtrace:")[1]);
var ba=Y.split(d);

for(var i=0;i<ba.length;i++){var W=ba[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(W&&W.length>=2){var bc=W[1];
var bb=this.__ko(W[2]);
X.push(bb+k+bc);
}}return X;
},"default":function(){return [];
}}),__ko:function(m){var p=c;
var n=m.indexOf(p);
var o=(n==-1)?m:m.substring(n+p.length).replace(/\//g,b).replace(/\.js$/,e);
return o;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(n){this.setMaxEntries(n||50);
},members:{__hB:0,__hC:0,__hD:false,__hE:0,__hF:null,__hG:null,setMaxEntries:function(m){this.__hG=m;
this.clear();
},getMaxEntries:function(){return this.__hG;
},addEntry:function(g){this.__hF[this.__hB]=g;
this.__hB=this.__hH(this.__hB,1);
var h=this.getMaxEntries();

if(this.__hC<h){this.__hC++;
}if(this.__hD&&(this.__hE<h)){this.__hE++;
}},mark:function(){this.__hD=true;
this.__hE=0;
},clearMark:function(){this.__hD=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(b,c){if(b>this.__hC){b=this.__hC;
}if(c&&this.__hD&&(b>this.__hE)){b=this.__hE;
}
if(b>0){var e=this.__hH(this.__hB,-1);
var d=this.__hH(e,-b+1);
var f;

if(d<=e){f=this.__hF.slice(d,e+1);
}else{f=this.__hF.slice(d,this.__hC).concat(this.__hF.slice(0,e+1));
}}else{f=[];
}return f;
},clear:function(){this.__hF=new Array(this.getMaxEntries());
this.__hC=0;
this.__hE=0;
this.__hB=0;
},__hH:function(i,j){var k=this.getMaxEntries();
var l=(i+j)%k;
if(l<0){l+=k;
}return l;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(c){this.setMaxMessages(c||50);
},members:{setMaxMessages:function(b){this.setMaxEntries(b);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var bd="node",bc="error",bb="...(+",ba="array",Y=")",X="info",W="instance",V="string",U="null",T="class",bz="number",by="stringify",bx="]",bw="date",bv="unknown",bu="function",bt="boolean",bs="debug",br="map",bq="undefined",bk="qx.log.Logger",bl="[",bi="#",bj="warn",bg="document",bh="{...(",be="text[",bf="[...(",bm="\n",bn=")}",bp=")]",bo="object";
qx.Class.define(bk,{statics:{__eU:bs,setLevel:function(E){this.__eU=E;
},getLevel:function(){return this.__eU;
},setTreshold:function(bC){this.__eX.setMaxMessages(bC);
},getTreshold:function(){return this.__eX.getMaxMessages();
},__eV:{},__eW:0,register:function(bO){if(bO.$$id){return;
}var bQ=this.__eW++;
this.__eV[bQ]=bO;
bO.$$id=bQ;
var bP=this.__eY;
var bR=this.__eX.getAllLogEvents();

for(var i=0,l=bR.length;i<l;i++){if(bP[bR[i].level]>=bP[this.__eU]){bO.process(bR[i]);
}}},unregister:function(bA){var bB=bA.$$id;

if(bB==null){return;
}delete this.__eV[bB];
delete bA.$$id;
},debug:function(H,I){qx.log.Logger.__fa(bs,arguments);
},info:function(j,k){qx.log.Logger.__fa(X,arguments);
},warn:function(o,p){qx.log.Logger.__fa(bj,arguments);
},error:function(bD,bE){qx.log.Logger.__fa(bc,arguments);
},trace:function(D){qx.log.Logger.__fa(X,[D,qx.dev.StackTrace.getStackTrace().join(bm)]);
},deprecatedMethodWarning:function(M,N){var O;
{};
},deprecatedClassWarning:function(q,r){var s;
{};
},deprecatedEventWarning:function(J,event,K){var L;
{};
},deprecatedMixinWarning:function(f,g){var h;
{};
},deprecatedConstantWarning:function(P,Q,R){var self,S;
{};
},deprecateMethodOverriding:function(a,b,c,d){var e;
{};
},clear:function(){this.__eX.clearHistory();
},__eX:new qx.log.appender.RingBuffer(50),__eY:{debug:0,info:1,warn:2,error:3},__fa:function(t,u){var z=this.__eY;

if(z[t]<z[this.__eU]){return;
}var w=u.length<2?null:u[0];
var y=w?1:0;
var v=[];

for(var i=y,l=u.length;i<l;i++){v.push(this.__fc(u[i],true));
}var A=new Date;
var B={time:A,offset:A-qx.Bootstrap.LOADSTART,level:t,items:v,win:window};
if(w){if(w instanceof qx.core.Object){B.object=w.$$hash;
}else if(w.$$type){B.clazz=w;
}}this.__eX.process(B);
var C=this.__eV;

for(var x in C){C[x].process(B);
}},__fb:function(F){if(F===undefined){return bq;
}else if(F===null){return U;
}
if(F.$$type){return T;
}var G=typeof F;

if(G===bu||G==V||G===bz||G===bt){return G;
}else if(G===bo){if(F.nodeType){return bd;
}else if(F.classname){return W;
}else if(F instanceof Array){return ba;
}else if(F instanceof Error){return bc;
}else if(F instanceof Date){return bw;
}else{return br;
}}
if(F.toString){return by;
}return bv;
},__fc:function(bF,bG){var bN=this.__fb(bF);
var bJ=bv;
var bI=[];

switch(bN){case U:case bq:bJ=bN;
break;
case V:case bz:case bt:case bw:bJ=bF;
break;
case bd:if(bF.nodeType===9){bJ=bg;
}else if(bF.nodeType===3){bJ=be+bF.nodeValue+bx;
}else if(bF.nodeType===1){bJ=bF.nodeName.toLowerCase();

if(bF.id){bJ+=bi+bF.id;
}}else{bJ=bd;
}break;
case bu:bJ=qx.lang.Function.getName(bF)||bN;
break;
case W:bJ=bF.basename+bl+bF.$$hash+bx;
break;
case T:case by:bJ=bF.toString();
break;
case bc:bI=qx.dev.StackTrace.getStackTraceFromError(bF);
bJ=bF.toString();
break;
case ba:if(bG){bJ=[];

for(var i=0,l=bF.length;i<l;i++){if(bJ.length>20){bJ.push(bb+(l-i)+Y);
break;
}bJ.push(this.__fc(bF[i],false));
}}else{bJ=bf+bF.length+bp;
}break;
case br:if(bG){var bH;
var bM=[];

for(var bL in bF){bM.push(bL);
}bM.sort();
bJ=[];

for(var i=0,l=bM.length;i<l;i++){if(bJ.length>20){bJ.push(bb+(l-i)+Y);
break;
}bL=bM[i];
bH=this.__fc(bF[bL],false);
bH.key=bL;
bJ.push(bH);
}}else{var bK=0;

for(var bL in bF){bK++;
}bJ=bh+bK+bn;
}break;
}return {type:bN,text:bJ,trace:bI};
}},defer:function(m){var n=qx.Bootstrap.$$logs;

for(var i=0;i<n.length;i++){m.__fa(n[i][0],n[i][1]);
}qx.Bootstrap.debug=m.debug;
qx.Bootstrap.info=m.info;
qx.Bootstrap.warn=m.warn;
qx.Bootstrap.error=m.error;
qx.Bootstrap.trace=m.trace;
}});
})();
(function(){var bB="set",bA="get",bz="reset",by="MSIE 6.0",bx="info",bw="qx.core.Object",bv="error",bu="warn",bt="]",bs="debug",bp="[",br="$$user_",bq="rv:1.8.1",bo="Object";
qx.Class.define(bw,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bo},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bp+this.$$hash+bt;
},base:function(bE,bF){{};

if(arguments.length===1){return bE.callee.base.call(this);
}else{return bE.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bD){return bD.callee.self;
},clone:function(){var u=this.constructor;
var t=new u;
var w=qx.Class.getProperties(u);
var v=qx.core.Property.$$store.user;
var x=qx.core.Property.$$method.set;
var name;
for(var i=0,l=w.length;i<l;i++){name=w[i];

if(this.hasOwnProperty(v[name])){t[x[name]](this[v[name]]);
}}return t;
},set:function(T,U){var W=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(T)){if(!this[W[T]]){if(this[bB+qx.Bootstrap.firstUp(T)]!=undefined){this[bB+qx.Bootstrap.firstUp(T)](U);
return this;
}{};
}return this[W[T]](U);
}else{for(var V in T){if(!this[W[V]]){if(this[bB+qx.Bootstrap.firstUp(V)]!=undefined){this[bB+qx.Bootstrap.firstUp(V)](T[V]);
continue;
}{};
}this[W[V]](T[V]);
}return this;
}},get:function(g){var h=qx.core.Property.$$method.get;

if(!this[h[g]]){if(this[bA+qx.Bootstrap.firstUp(g)]!=undefined){return this[bA+qx.Bootstrap.firstUp(g)]();
}{};
}return this[h[g]]();
},reset:function(z){var A=qx.core.Property.$$method.reset;

if(!this[A[z]]){if(this[bz+qx.Bootstrap.firstUp(z)]!=undefined){this[bz+qx.Bootstrap.firstUp(z)]();
return;
}{};
}this[A[z]]();
},__kQ:qx.event.Registration,addListener:function(I,J,self,K){if(!this.$$disposed){return this.__kQ.addListener(this,I,J,self,K);
}return null;
},addListenerOnce:function(b,c,self,d){var f=function(e){this.removeListener(b,f,this,d);
c.call(self||this,e);
};
return this.addListener(b,f,this,d);
},removeListener:function(B,C,self,D){if(!this.$$disposed){return this.__kQ.removeListener(this,B,C,self,D);
}return false;
},removeListenerById:function(y){if(!this.$$disposed){return this.__kQ.removeListenerById(this,y);
}return false;
},hasListener:function(bM,bN){return this.__kQ.hasListener(this,bM,bN);
},dispatchEvent:function(j){if(!this.$$disposed){return this.__kQ.dispatchEvent(this,j);
}return true;
},fireEvent:function(E,F,G){if(!this.$$disposed){return this.__kQ.fireEvent(this,E,F,G);
}return true;
},fireNonBubblingEvent:function(L,M,N){if(!this.$$disposed){return this.__kQ.fireNonBubblingEvent(this,L,M,N);
}return true;
},fireDataEvent:function(Y,ba,bb,bc){if(!this.$$disposed){if(bb===undefined){bb=null;
}return this.__kQ.fireNonBubblingEvent(this,Y,qx.event.type.Data,[ba,bb,!!bc]);
}return true;
},__kR:null,setUserData:function(bm,bn){if(!this.__kR){this.__kR={};
}this.__kR[bm]=bn;
},getUserData:function(R){if(!this.__kR){return null;
}var S=this.__kR[R];
return S===undefined?null:S;
},__kS:qx.log.Logger,debug:function(m){this.__kT(bs,arguments);
},info:function(k){this.__kT(bx,arguments);
},warn:function(bG){this.__kT(bu,arguments);
},error:function(H){this.__kT(bv,arguments);
},trace:function(){this.__kS.trace(this);
},__kT:function(O,P){var Q=qx.lang.Array.fromArguments(P);
Q.unshift(this);
this.__kS[O].apply(this.__kS,Q);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var r,p,o,s;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var q=this.constructor;
var n;

while(q.superclass){if(q.$$destructor){q.$$destructor.call(this);
}if(q.$$includes){n=q.$$flatIncludes;

for(var i=0,l=n.length;i<l;i++){if(n[i].$$destructor){n[i].$$destructor.call(this);
}}}q=q.superclass;
}if(this.__kU){this.__kU();
}{};
},__kU:null,__kV:function(){var X=qx.Class.getProperties(this.constructor);

for(var i=0,l=X.length;i<l;i++){delete this[br+X[i]];
}},_disposeObjects:function(bH){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bd){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bC){qx.util.DisposeUtil.disposeArray(this,bC);
},_disposeMap:function(a){qx.util.DisposeUtil.disposeMap(this,a);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bI,bJ){{};
var bL=navigator.userAgent.indexOf(by)!=-1;
var bK=navigator.userAgent.indexOf(bq)!=-1;
if(bL||bK){bJ.__kU=bJ.__kV;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__kR=null;
var bg=this.constructor;
var bk;
var bl=qx.core.Property.$$store;
var bi=bl.user;
var bj=bl.theme;
var be=bl.inherit;
var bh=bl.useinit;
var bf=bl.init;

while(bg){bk=bg.$$properties;

if(bk){for(var name in bk){if(bk[name].dereference){this[bi[name]]=this[bj[name]]=this[be[name]]=this[bh[name]]=this[bf[name]]=undefined;
}}}bg=bg.superclass;
}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__ni:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__ni=null;
},getInsets:function(){if(this.__ni){return this.__ni;
}var j=this._getDefaultInsets();
return this.__ni={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__ni=null;
}},destruct:function(){this.__ni=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var o="_applyStyle",n="",m="Color",l="px",k="solid",j="dotted",i="double",h="dashed",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(p,q,r){qx.ui.decoration.Abstract.call(this);
if(p!=null){this.setWidth(p);
}
if(q!=null){this.setStyle(q);
}
if(r!=null){this.setColor(r);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[k,j,h,i],init:k,apply:o},color:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__rd:null,_getDefaultInsets:function(){var E=this.getWidth();
return {top:E,right:E,bottom:E,left:E};
},_isInitialized:function(){return !!this.__rd;
},getMarkup:function(){if(this.__rd){return this.__rd;
}var s={position:a,top:0,left:0};
var t=this.getWidth();
{};
var v=qx.theme.manager.Color.getInstance();
s.border=t+c+this.getStyle()+e+(v.resolve(this.getColor())||n);
var u=this._generateBackgroundMarkup(s);
return this.__rd=u;
},resize:function(w,x,y){var A=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(A||qx.bom.client.Feature.CONTENT_BOX){var z=this.getWidth()*2;
x-=z;
y-=z;
if(x<0){x=0;
}
if(y<0){y=0;
}}w.style.width=x+l;
w.style.height=y+l;
},tint:function(B,C){var D=qx.theme.manager.Color.getInstance();

if(C==null){C=this.getBackgroundColor();
}B.style.backgroundColor=D.resolve(C)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__rd=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(l){qx.ui.decoration.Abstract.call(this);

if(l!=null){this.setBackgroundColor(l);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__nn:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__nn;
},getMarkup:function(){if(this.__nn){return this.__nn;
}var g={position:a,top:0,left:0};
var h=this._generateBackgroundMarkup(g);
return this.__nn=h;
},resize:function(m,n,o){var p=this.getInsets();
m.style.width=(n-p.left-p.right)+f;
m.style.height=(o-p.top-p.bottom)+f;
m.style.left=p.left+f;
m.style.top=p.top+f;
},tint:function(i,j){var k=qx.theme.manager.Color.getInstance();

if(j==null){j=this.getBackgroundColor();
}i.style.backgroundColor=k.resolve(j)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__nn=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px",d="px ",c="dotted",b="_applyWidth",a="dashed",E="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleLeft",y="widthLeft",x="widthBottom",w="styleTop",v="colorBottom",q="styleBottom",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="border-top",k="border-left",l="border-right",s="qx.ui.decoration.Single",t="border-bottom",u="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(N,O,P){qx.ui.decoration.Abstract.call(this);
if(N!=null){this.setWidth(N);
}
if(O!=null){this.setStyle(O);
}
if(P!=null){this.setColor(P);
}},properties:{widthTop:{check:E,init:0,apply:b},widthRight:{check:E,init:0,apply:b},widthBottom:{check:E,init:0,apply:b},widthLeft:{check:E,init:0,apply:b},styleTop:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleRight:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,c,a,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[y,z,o]},right:{group:[r,A,p]},top:{group:[B,w,m]},bottom:{group:[x,q,v]},width:{group:[B,r,x,y],mode:C},style:{group:[w,A,q,z],mode:C},color:{group:[m,p,v,o],mode:C}},members:{__pk:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__pk;
},getMarkup:function(F){if(this.__pk){return this.__pk;
}var G=qx.theme.manager.Color.getInstance();
var H={};
var J=this.getWidthTop();

if(J>0){H[n]=J+d+this.getStyleTop()+D+(G.resolve(this.getColorTop())||g);
}var J=this.getWidthRight();

if(J>0){H[l]=J+d+this.getStyleRight()+D+(G.resolve(this.getColorRight())||g);
}var J=this.getWidthBottom();

if(J>0){H[t]=J+d+this.getStyleBottom()+D+(G.resolve(this.getColorBottom())||g);
}var J=this.getWidthLeft();

if(J>0){H[k]=J+d+this.getStyleLeft()+D+(G.resolve(this.getColorLeft())||g);
}{};
H.position=u;
H.top=0;
H.left=0;
var I=this._generateBackgroundMarkup(H);
return this.__pk=I;
},resize:function(Q,R,S){var T=this.getInsets();
R-=T.left+T.right;
S-=T.top+T.bottom;
if(R<0){R=0;
}
if(S<0){S=0;
}Q.style.width=R+e;
Q.style.height=S+e;
Q.style.left=(parseInt(Q.style.left)+T.left-this.getWidthLeft())+e;
Q.style.top=(parseInt(Q.style.top)+T.top-this.getWidthTop())+e;
},tint:function(K,L){var M=qx.theme.manager.Color.getInstance();

if(L==null){L=this.getBackgroundColor();
}K.style.backgroundColor=M.resolve(L)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__pk=null;
}});
})();
(function(){var m="Number",l="_applyInsets",k="-l",j="insetRight",i="insetTop",h="_applyBaseImage",g="insetBottom",f="set",e="shorthand",d="-t",a="insetLeft",c="String",b="qx.ui.decoration.Grid";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(A,B){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__mV=new qx.ui.decoration.css3.BorderImage();

if(A){this.__mW(A);
}}else{this.__mV=new qx.ui.decoration.GridDiv(A);
}
if(B!=null){this.__mV.setInsets(B);
}},properties:{baseImage:{check:c,nullable:true,apply:h},insetLeft:{check:m,nullable:true,apply:l},insetRight:{check:m,nullable:true,apply:l},insetBottom:{check:m,nullable:true,apply:l},insetTop:{check:m,nullable:true,apply:l},insets:{group:[i,j,g,a],mode:e}},members:{__mV:null,getMarkup:function(){return this.__mV.getMarkup();
},resize:function(E,F,G){this.__mV.resize(E,F,G);
},tint:function(H,I){},getInsets:function(){return this.__mV.getInsets();
},_applyInsets:function(x,y,name){var z=f+qx.lang.String.firstUp(name);
this.__mV[z](x);
},_applyBaseImage:function(C,D){if(this.__mV instanceof qx.ui.decoration.GridDiv){this.__mV.setBaseImage(C);
}else{this.__mW(C);
}},__mW:function(n){var p,r;
this.__mV.setBorderImage(n);
var t=qx.util.AliasManager.getInstance().resolve(n);
var u=/(.*)(\.[a-z]+)$/.exec(t);
var q=u[1];
var s=u[2];
var o=qx.util.ResourceManager.getInstance();
var v=o.getImageHeight(q+d+s);
var w=o.getImageWidth(q+k+s);
{};
this.__mV.setSlice([v,w]);
}},destruct:function(){this.__mV=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(P,Q,R){qx.ui.decoration.Abstract.call(this);
if(P!=null){this.setOuterColor(P);
}
if(Q!=null){this.setInnerColor(Q);
}
if(R!=null){this.setInnerOpacity(R);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__qL:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__qL;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__qL){return this.__qL;
}var K=qx.theme.manager.Color.getInstance();
var L=[];
var O=d+K.resolve(this.getOuterColor())+b;
var N=d+K.resolve(this.getInnerColor())+b;
L.push(k);
L.push(f);
L.push(e,O);
L.push(qx.bom.element.Opacity.compile(0.35));
L.push(i);
L.push(n);
L.push(q,O);
L.push(r,O);
L.push(qx.bom.element.Opacity.compile(1));
L.push(i);
L.push(f);
L.push(m);
L.push(p,O);
L.push(s,O);
L.push(qx.bom.element.Opacity.compile(1));
L.push(i);
var M={position:l,top:g,left:g,opacity:1};
L.push(this._generateBackgroundMarkup(M));
L.push(t);
L.push(e,N);
L.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
L.push(i);
L.push(v);
return this.__qL=L.join(c);
},resize:function(z,A,B){if(A<4){A=4;
}
if(B<4){B=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=A-2;
var outerHeight=B-2;
var H=outerWidth;
var G=outerHeight;
var innerWidth=A-4;
var innerHeight=B-4;
}else{var outerWidth=A;
var outerHeight=B;
var H=A-2;
var G=B-2;
var innerWidth=H;
var innerHeight=G;
}var J=a;
var F=z.childNodes[0].style;
F.width=outerWidth+J;
F.height=outerHeight+J;
var E=z.childNodes[1].style;
E.width=outerWidth+J;
E.height=G+J;
var D=z.childNodes[2].style;
D.width=H+J;
D.height=outerHeight+J;
var C=z.childNodes[3].style;
C.width=H+J;
C.height=G+J;
var I=z.childNodes[4].style;
I.width=innerWidth+J;
I.height=innerHeight+J;
},tint:function(w,x){var y=qx.theme.manager.Color.getInstance();

if(x==null){x=this.getBackgroundColor();
}w.childNodes[3].style.backgroundColor=y.resolve(x)||c;
}},destruct:function(){this.__qL=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bs="decoration/table/header-cell.png",br="decoration/form/input.png",bq="#f8f8f8",bp="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bo="#b6b6b6",bn="background-pane",bm="repeat-y",bl="decoration/form/input-focused.png",bk="#33508D",bj="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="black",p="decoration/form/button-c.png",q="decoration/scrollbar/scrollbar-bg-vertical.png",n="decoration/form/button.png",o="decoration/form/button-checked.png",B="decoration/tabview/tab-button-left-inactive.png",C="decoration/groupbox/groupbox.png",O="#FAFAFA",K="decoration/pane/pane.png",W="dotted",R="decoration/toolbar/toolbar-part.gif",bf="decoration/tabview/tab-button-top-inactive.png",bc="decoration/menu/bar-background.png",G="center",bi="decoration/tabview/tab-button-bottom-active.png",bh="decoration/form/button-hovered.png",bg="decoration/form/tooltip-error-arrow.png",F="decoration/window/captionbar-inactive.png",I="qx/decoration/Modern",J="decoration/menu/background.png",M="decoration/window/statusbar.png",P="border-focused",S="table-focus-indicator",Y="#F2F2F2",be="decoration/form/button-checked-c.png",v="decoration/scrollbar/scrollbar-bg-horizontal.png",w="qx.theme.modern.Decoration",H="#f4f4f4",V="decoration/shadow/shadow-small.png",U="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",bb="decoration/form/tooltip-error.png",ba="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",a="decoration/tabview/tab-button-right-active.png",bd="decoration/form/button-pressed.png",x="no-repeat",y="decoration/window/captionbar-active.png",L="decoration/tabview/tab-button-left-active.png",b="background-splitpane",c="decoration/form/button-checked-focused.png",E="#C5C5C5",z="decoration/toolbar/toolbar-gradient.png",A="decoration/tabview/tab-button-right-inactive.png",D="#b8b8b8",N="decoration/shadow/shadow.png";
qx.Theme.define(w,{aliases:{decoration:I},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bj,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bj,backgroundRepeat:l,bottom:[2,m,bk]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bk]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:C}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:W}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bg,backgroundPositionY:G,backgroundRepeat:x,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:v,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:q,backgroundRepeat:bm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bh,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:P,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:z,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:p,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:be,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:D,colorRight:H,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:R,backgroundRepeat:bm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bi}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:L}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bn,width:3,color:b,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bn,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:y}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:S,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthRight:1,colorRight:Y,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:E,widthBottom:1,colorBottom:O}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bc,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:l}}}});
})();
(function(){var d="decoration/toolbar/toolbar-gradient.png",c="border-main",b="inspector.theme.Decoration",a="scale";
qx.Theme.define(b,{extend:qx.theme.modern.Decoration,decorations:{"myToolbar":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:c,backgroundImage:d,backgroundRepeat:a}}}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__ke:function(){var p=navigator.platform;
if(p==null||p===l){p=navigator.userAgent;
}
if(p.indexOf(f)!=-1||p.indexOf(m)!=-1||p.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(p.indexOf(h)!=-1||p.indexOf(a)!=-1||p.indexOf(c)!=-1||p.indexOf(n)!=-1||p.indexOf(g)!=-1||p.indexOf(b)!=-1){this.MAC=true;
this.NAME="mac";
}else if(p.indexOf(d)!=-1||p.indexOf(j)!=-1||p.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(o){o.__ke();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__kO:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__kP:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__kO){K.push(J);
}var M=new RegExp(l+K.join(C).replace(/\./g,r)+H,u);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__kO[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__kP();
}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var a="inspector.theme.Font";
qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var gR="button-frame",gQ="atom",gP="widget",gO="main",gN="button",gM="text-selected",gL="image",gK="bold",gJ="middle",gI="background-light",fw="text-disabled",fv="groupbox",fu="decoration/arrows/down.png",ft="cell",fs="selected",fr="border-invalid",fq="input",fp="input-disabled",fo="menu-button",fn="input-focused-invalid",gY="toolbar-button",ha="spinner",gW="input-focused",gX="popup",gU="tooltip",gV="label",gS="list",gT="white",hb="tree-item",hc="treevirtual-contract",gr="scrollbar",gq="datechooser/nav-button",gt="text-hovered",gs="center",gv="treevirtual-expand",gu="textfield",gx="decoration/arrows/right.png",gw="background-application",gp="radiobutton",go="invalid",du="combobox",dv="right-top",dw="checkbox",dx="text-title",dy="qx/static/blank.gif",dz="scrollbar/button",dA="right",dB="combobox/button",dC="icon/16/places/folder.png",dD="text-label",hq="decoration/tree/closed.png",hp="scrollbar-slider-horizontal",ho="checkbox-checked",hn="decoration/arrows/left.png",hu="button-focused",ht="text-light",hs="menu-slidebar-button",hr="text-input",hw="slidebar/button-forward",hv="background-splitpane",ew=".png",ex="decoration/tree/open.png",eu="default",ev="decoration/arrows/down-small.png",eA="datechooser",eB="slidebar/button-backward",ey="selectbox",ez="treevirtual-folder",es="shadow-popup",et="icon/16/mimetypes/office-document.png",dX="background-medium",dW="table",ea="decoration/arrows/up.png",dY="decoration/form/",dT="",dS="-invalid",dV="icon/16/places/folder-open.png",dU="button-checked",dR="decoration/window/maximize-active-hovered.png",dQ="radiobutton-hovered",eH="keyboard-focus",eI="decoration/cursors/",eJ="slidebar",eK="tooltip-error-arrow",eD="table-scroller-focus-indicator",eE="move-frame",eF="nodrop",eG="decoration/table/boolean-true.png",eL="table-header-cell",eM="menu",el="app-header",ek="row-layer",ej="text-inactive",ei="move",eh="radiobutton-checked-focused",eg="decoration/window/restore-active-hovered.png",ef="shadow-window",ee="table-column-button",ep="right.png",eo="tabview-page-button-bottom-inactive",eN="tooltip-error",eO="window-statusbar",eP="button-hovered",eQ="decoration/scrollbar/scrollbar-",eR="background-tip",eS="scrollbar-slider-horizontal-disabled",eT="table-scroller-header",eU="button-pressed",eV="table-pane",eW="decoration/window/close-active.png",fE="native",fD="checkbox-hovered",fC="button-invalid-shadow",fB="decoration/window/minimize-active-hovered.png",fI="menubar",fH="icon/16/actions/dialog-cancel.png",fG="tabview-page-button-top-inactive",fF="tabview-page-button-left-inactive",fM="menu-slidebar",fL="toolbar-button-checked",gk="decoration/tree/open-selected.png",gl="radiobutton-checked",gi="decoration/window/minimize-inactive.png",gj="icon/16/apps/office-calendar.png",gg="group",gh="tabview-page-button-right-inactive",ge="decoration/window/minimize-active.png",gf="decoration/window/restore-inactive.png",gm="checkbox-checked-focused",gn="splitpane",gB="combobox/textfield",gA="button-preselected-focused",gD="decoration/window/close-active-hovered.png",gC="qx/icon/Tango/16/actions/window-close.png",gF="checkbox-pressed",gE="button-disabled",gH="selected-dragover",gG="border-separator",gz="decoration/window/maximize-inactive.png",gy="dragover",hj="scrollarea",hk="scrollbar-vertical",hl="decoration/menu/checkbox-invert.gif",hm="decoration/toolbar/toolbar-handle-knob.gif",hf="icon/22/mimetypes/office-document.png",hg="button-preselected",hh="button-checked-focused",hi="up.png",hd="best-fit",he="decoration/tree/closed-selected.png",dt="qx.theme.modern.Appearance",ds="text-active",dr="toolbar-button-hovered",dq="progressive-table-header",dp="decoration/table/select-column-order.png",dn="decoration/menu/radiobutton.gif",dm="decoration/arrows/forward.png",dl="decoration/table/descending.png",dk="window-captionbar-active",dj="checkbox-checked-hovered",dG="scrollbar-slider-vertical",dH="toolbar",dE="alias",dF="decoration/window/restore-active.png",dK="decoration/table/boolean-false.png",dL="icon/32/mimetypes/office-document.png",dI="radiobutton-checked-disabled",dJ="tabview-pane",dN="decoration/arrows/rewind.png",dO="checkbox-focused",fQ="top",fK="icon/16/actions/dialog-ok.png",fX="radiobutton-checked-hovered",fT="table-header-cell-hovered",fz="window",fx="text-gray",ec="decoration/menu/radiobutton-invert.gif",fA="text-placeholder",en="slider",em="keep-align",ff="down.png",fg="tabview-page-button-top-active",fh="icon/32/places/folder-open.png",fi="icon/22/places/folder.png",fj="decoration/window/maximize-active.png",fk="checkbox-checked-pressed",fl="decoration/window/close-inactive.png",fm="tabview-page-button-left-active",fd="toolbar-part",fe="decoration/splitpane/knob-vertical.png",fy=".gif",fW="icon/22/places/folder-open.png",fV="radiobutton-checked-pressed",fU="table-statusbar",gc="radiobutton-pressed",gb="window-captionbar-inactive",ga="copy",fY="radiobutton-focused",fS="decoration/arrows/down-invert.png",fR="decoration/menu/checkbox.gif",dM="decoration/splitpane/knob-horizontal.png",er="icon/32/places/folder.png",eq="toolbar-separator",fJ="tabview-page-button-bottom-active",eC="decoration/arrows/up-small.png",fP="decoration/table/ascending.png",fO="decoration/arrows/up-invert.png",fN="small",eb="tabview-page-button-right-active",gd="-disabled",dP="scrollbar-horizontal",ed="progressive-table-header-cell",eX="menu-separator",eY="pane",fa="decoration/arrows/right-invert.png",fb="left.png",fc="icon/16/actions/view-refresh.png";
qx.Theme.define(dt,{appearances:{"widget":{},"root":{style:function(hM){return {backgroundColor:gw,textColor:dD,font:eu};
}},"label":{style:function(cj){return {textColor:cj.disabled?fw:undefined};
}},"move-frame":{style:function(cd){return {decorator:gO};
}},"resize-frame":eE,"dragdrop-cursor":{style:function(g){var h=eF;

if(g.copy){h=ga;
}else if(g.move){h=ei;
}else if(g.alias){h=dE;
}return {source:eI+h+fy,position:dv,offset:[2,16,2,6]};
}},"image":{style:function(bA){return {opacity:!bA.replacement&&bA.disabled?0.3:1};
}},"atom":{},"atom/label":gV,"atom/icon":gL,"popup":{style:function(m){return {decorator:gO,backgroundColor:gI,shadow:es};
}},"button-frame":{alias:gQ,style:function(ck){var cm,cl;

if(ck.checked&&ck.focused&&!ck.inner){cm=hh;
cl=undefined;
}else if(ck.disabled){cm=gE;
cl=undefined;
}else if(ck.pressed){cm=eU;
cl=gt;
}else if(ck.checked){cm=dU;
cl=undefined;
}else if(ck.hovered){cm=eP;
cl=gt;
}else if(ck.preselected&&ck.focused&&!ck.inner){cm=gA;
cl=gt;
}else if(ck.preselected){cm=hg;
cl=gt;
}else if(ck.focused&&!ck.inner){cm=hu;
cl=undefined;
}else{cm=gN;
cl=undefined;
}return {decorator:cm,textColor:cl,shadow:ck.invalid&&!ck.disabled?fC:undefined};
}},"button-frame/image":{style:function(cc){return {opacity:!cc.replacement&&cc.disabled?0.5:1};
}},"button":{alias:gR,include:gR,style:function(N){return {padding:[2,8],center:true};
}},"hover-button":{alias:gQ,include:gQ,style:function(hx){return {decorator:hx.hovered?fs:undefined,textColor:hx.hovered?gM:undefined};
}},"splitbutton":{},"splitbutton/button":gN,"splitbutton/arrow":{alias:gN,include:gN,style:function(by){return {icon:fu,padding:2,marginLeft:1};
}},"checkbox":{alias:gQ,style:function(cy){var cA;
if(cy.checked){if(cy.disabled){cA=ho;
}else if(cy.focused){cA=gm;
}else if(cy.pressed){cA=fk;
}else if(cy.hovered){cA=dj;
}else{cA=ho;
}}else if(!cy.disabled){if(cy.focused){cA=dO;
}else if(cy.pressed){cA=gF;
}else if(cy.hovered){cA=fD;
}}cA=cA||dw;
var cz=cy.invalid&&!cy.disabled?dS:dT;
return {icon:dY+cA+cz+ew,gap:6};
}},"radiobutton":{alias:gQ,style:function(hD){var hF;

if(hD.checked&&hD.focused){hF=eh;
}else if(hD.checked&&hD.disabled){hF=dI;
}else if(hD.checked&&hD.pressed){hF=fV;
}else if(hD.checked&&hD.hovered){hF=fX;
}else if(hD.checked){hF=gl;
}else if(hD.focused){hF=fY;
}else if(hD.pressed){hF=gc;
}else if(hD.hovered){hF=dQ;
}else{hF=gp;
}var hE=hD.invalid&&!hD.disabled?dS:dT;
return {icon:dY+hF+hE+ew,gap:6};
}},"textfield":{style:function(bq){var bv;
var bt=!!bq.focused;
var bu=!!bq.invalid;
var br=!!bq.disabled;

if(bt&&bu&&!br){bv=fn;
}else if(bt&&!bu&&!br){bv=gW;
}else if(br){bv=fp;
}else if(!bt&&bu&&!br){bv=fr;
}else{bv=fq;
}var bs;

if(bq.disabled){bs=fw;
}else if(bq.showingPlaceholder){bs=fA;
}else{bs=hr;
}return {decorator:bv,padding:[2,4,1],textColor:bs};
}},"textarea":{include:gu,style:function(w){return {padding:4};
}},"spinner":{style:function(ce){var ci;
var cg=!!ce.focused;
var ch=!!ce.invalid;
var cf=!!ce.disabled;

if(cg&&ch&&!cf){ci=fn;
}else if(cg&&!ch&&!cf){ci=gW;
}else if(cf){ci=fp;
}else if(!cg&&ch&&!cf){ci=fr;
}else{ci=fq;
}return {decorator:ci};
}},"spinner/textfield":{style:function(cJ){return {marginRight:2,padding:[2,4,1],textColor:cJ.disabled?fw:hr};
}},"spinner/upbutton":{alias:gR,include:gR,style:function(W){return {icon:eC,padding:W.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gR,include:gR,style:function(bJ){return {icon:ev,padding:bJ.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":du,"datefield/button":{alias:dB,include:dB,style:function(ic){return {icon:gj,padding:[0,3],decorator:undefined};
}},"datefield/textfield":gB,"datefield/list":{alias:eA,include:eA,style:function(hS){return {decorator:undefined};
}},"groupbox":{style:function(T){return {legendPosition:fQ};
}},"groupbox/legend":{alias:gQ,style:function(i){return {padding:[1,0,1,4],textColor:i.invalid?go:dx,font:gK};
}},"groupbox/frame":{style:function(I){return {padding:12,decorator:gg};
}},"check-groupbox":fv,"check-groupbox/legend":{alias:dw,include:dw,style:function(cS){return {padding:[1,0,1,4],textColor:cS.invalid?go:dx,font:gK};
}},"radio-groupbox":fv,"radio-groupbox/legend":{alias:gp,include:gp,style:function(bI){return {padding:[1,0,1,4],textColor:bI.invalid?go:dx,font:gK};
}},"scrollarea":{style:function(cv){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(x){return {backgroundColor:gw};
}},"scrollarea/pane":gP,"scrollarea/scrollbar-x":gr,"scrollarea/scrollbar-y":gr,"scrollbar":{style:function(co){if(co[fE]){return {};
}return {width:co.horizontal?undefined:16,height:co.horizontal?16:undefined,decorator:co.horizontal?dP:hk,padding:1};
}},"scrollbar/slider":{alias:en,style:function(r){return {padding:r.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gR,style:function(p){var q=p.horizontal?hp:dG;

if(p.disabled){q+=gd;
}return {decorator:q,minHeight:p.horizontal?undefined:9,minWidth:p.horizontal?9:undefined};
}},"scrollbar/button":{alias:gR,include:gR,style:function(bF){var bG=eQ;

if(bF.left){bG+=fb;
}else if(bF.right){bG+=ep;
}else if(bF.up){bG+=hi;
}else{bG+=ff;
}
if(bF.left||bF.right){return {padding:[0,0,0,bF.left?3:4],icon:bG,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bG,width:14,height:15};
}}},"scrollbar/button-begin":dz,"scrollbar/button-end":dz,"slider":{style:function(bW){var cb;
var bY=!!bW.focused;
var ca=!!bW.invalid;
var bX=!!bW.disabled;

if(bY&&ca&&!bX){cb=fn;
}else if(bY&&!ca&&!bX){cb=gW;
}else if(bX){cb=fp;
}else if(!bY&&ca&&!bX){cb=fr;
}else{cb=fq;
}return {decorator:cb};
}},"slider/knob":{include:gR,style:function(cX){return {decorator:cX.disabled?eS:hp,shadow:undefined,height:14,width:14};
}},"list":{alias:hj,style:function(O){var S;
var Q=!!O.focused;
var R=!!O.invalid;
var P=!!O.disabled;

if(Q&&R&&!P){S=fn;
}else if(Q&&!R&&!P){S=gW;
}else if(P){S=fp;
}else if(!Q&&R&&!P){S=fr;
}else{S=fq;
}return {backgroundColor:gI,decorator:S};
}},"list/pane":gP,"listitem":{alias:gQ,style:function(cQ){var cR;

if(cQ.dragover){cR=cQ.selected?gH:gy;
}else{cR=cQ.selected?fs:undefined;
}return {padding:cQ.dragover?[4,4,2,4]:4,textColor:cQ.selected?gM:undefined,decorator:cR};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gR,include:gR,style:function(hT){return {padding:5,center:true,icon:hT.vertical?fu:gx};
}},"slidebar/button-backward":{alias:gR,include:gR,style:function(bE){return {padding:5,center:true,icon:bE.vertical?ea:hn};
}},"tabview":{style:function(hX){return {contentPadding:16};
}},"tabview/bar":{alias:eJ,style:function(F){var G={marginBottom:F.barTop?-1:0,marginTop:F.barBottom?-4:0,marginLeft:F.barRight?-3:0,marginRight:F.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(F.barTop||F.barBottom){G.paddingLeft=5;
G.paddingRight=7;
}else{G.paddingTop=5;
G.paddingBottom=7;
}return G;
}},"tabview/bar/button-forward":{include:hw,alias:hw,style:function(cK){if(cK.barTop||cK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:eB,alias:eB,style:function(hR){if(hR.barTop||hR.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(U){return {decorator:dJ,minHeight:100,marginBottom:U.barBottom?-1:0,marginTop:U.barTop?-1:0,marginLeft:U.barLeft?-1:0,marginRight:U.barRight?-1:0};
}},"tabview-page":gP,"tabview-page/button":{alias:gQ,style:function(bi){var bo,bk=0;
var bn=0,bj=0,bl=0,bm=0;

if(bi.checked){if(bi.barTop){bo=fg;
bk=[6,14];
bl=bi.firstTab?0:-5;
bm=bi.lastTab?0:-5;
}else if(bi.barBottom){bo=fJ;
bk=[6,14];
bl=bi.firstTab?0:-5;
bm=bi.lastTab?0:-5;
}else if(bi.barRight){bo=eb;
bk=[6,13];
bn=bi.firstTab?0:-5;
bj=bi.lastTab?0:-5;
}else{bo=fm;
bk=[6,13];
bn=bi.firstTab?0:-5;
bj=bi.lastTab?0:-5;
}}else{if(bi.barTop){bo=fG;
bk=[4,10];
bn=4;
bl=bi.firstTab?5:1;
bm=1;
}else if(bi.barBottom){bo=eo;
bk=[4,10];
bj=4;
bl=bi.firstTab?5:1;
bm=1;
}else if(bi.barRight){bo=gh;
bk=[4,10];
bm=5;
bn=bi.firstTab?5:1;
bj=1;
bl=1;
}else{bo=fF;
bk=[4,10];
bl=5;
bn=bi.firstTab?5:1;
bj=1;
bm=1;
}}return {zIndex:bi.checked?10:5,decorator:bo,padding:bk,marginTop:bn,marginBottom:bj,marginLeft:bl,marginRight:bm,textColor:bi.checked?ds:ej};
}},"tabview-page/button/label":{alias:gV,style:function(hU){return {padding:[0,1,0,1],margin:hU.focused?0:1,decorator:hU.focused?eH:undefined};
}},"tabview-page/button/close-button":{alias:gQ,style:function(cW){return {icon:gC};
}},"toolbar":{style:function(hV){return {decorator:dH,spacing:2};
}},"toolbar/part":{style:function(hO){return {decorator:fd,spacing:2};
}},"toolbar/part/container":{style:function(bN){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(D){return {source:hm,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gQ,style:function(cn){return {marginTop:2,marginBottom:2,padding:(cn.pressed||cn.checked||cn.hovered)&&!cn.disabled||(cn.disabled&&cn.checked)?3:5,decorator:cn.pressed||(cn.checked&&!cn.hovered)||(cn.checked&&cn.disabled)?fL:cn.hovered&&!cn.disabled?dr:undefined};
}},"toolbar-menubutton":{alias:gY,include:gY,style:function(hN){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:gL,include:gL,style:function(bT){return {source:ev};
}},"toolbar-splitbutton":{style:function(n){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gY,include:gY,style:function(bc){return {icon:fu,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gY,include:gY,style:function(k){if(k.pressed||k.checked||(k.hovered&&!k.disabled)){var l=1;
}else{var l=3;
}return {padding:l,icon:fu,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(hW){return {decorator:eq,margin:7};
}},"tree":gS,"tree-item":{style:function(dg){return {padding:[2,6],textColor:dg.selected?gM:undefined,decorator:dg.selected?fs:undefined};
}},"tree-item/icon":{include:gL,style:function(bV){return {paddingRight:5};
}},"tree-item/label":gV,"tree-item/open":{include:gL,style:function(cY){var da;

if(cY.selected&&cY.opened){da=gk;
}else if(cY.selected&&!cY.opened){da=he;
}else if(cY.opened){da=ex;
}else{da=hq;
}return {padding:[0,5,0,2],source:da};
}},"tree-folder":{include:hb,alias:hb,style:function(B){var C;

if(B.small){C=B.opened?dV:dC;
}else if(B.large){C=B.opened?fh:er;
}else{C=B.opened?fW:fi;
}return {icon:C};
}},"tree-file":{include:hb,alias:hb,style:function(bK){return {icon:bK.small?et:bK.large?dL:hf};
}},"treevirtual":dW,"treevirtual-folder":{style:function(cU){return {icon:cU.opened?dV:dC};
}},"treevirtual-file":{include:ez,alias:ez,style:function(df){return {icon:et};
}},"treevirtual-line":{style:function(cp){return {icon:dy};
}},"treevirtual-contract":{style:function(L){return {icon:ex,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(cs){return {icon:hq,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":hc,"treevirtual-only-expand":gv,"treevirtual-start-contract":hc,"treevirtual-start-expand":gv,"treevirtual-end-contract":hc,"treevirtual-end-expand":gv,"treevirtual-cross-contract":hc,"treevirtual-cross-expand":gv,"treevirtual-end":{style:function(cP){return {icon:dy};
}},"treevirtual-cross":{style:function(hY){return {icon:dy};
}},"tooltip":{include:gX,style:function(bL){return {backgroundColor:eR,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gQ,"tooltip-error":{include:gU,style:function(cM){return {textColor:gM,placeMethod:gP,offset:[0,0,0,14],marginTop:-2,position:dv,showTimeout:100,hideTimeout:10000,decorator:eN,shadow:eK,font:gK};
}},"tooltip-error/atom":gQ,"window":{style:function(bC){return {shadow:ef,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(f){return {decorator:fz};
}},"window/captionbar":{style:function(a){return {decorator:a.active?dk:gb,textColor:a.active?gT:fx,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(bb){return {margin:[5,0,3,6]};
}},"window/title":{style:function(ct){return {alignY:gJ,font:gK,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gQ,style:function(bw){return {icon:bw.active?bw.hovered?fB:ge:gi,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gQ,style:function(J){return {icon:J.active?J.hovered?eg:dF:gf,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gQ,style:function(dc){return {icon:dc.active?dc.hovered?dR:fj:gz,margin:[4,8,2,0]};
}},"window/close-button":{alias:gQ,style:function(be){return {icon:be.active?be.hovered?gD:eW:fl,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(dd){return {padding:[2,6],decorator:eO,minHeight:18};
}},"window/statusbar-text":{style:function(K){return {font:fN};
}},"iframe":{style:function(cG){return {decorator:gO};
}},"resizer":{style:function(cL){return {decorator:eY};
}},"splitpane":{style:function(hP){return {decorator:gn};
}},"splitpane/splitter":{style:function(o){return {width:o.horizontal?3:undefined,height:o.vertical?3:undefined,backgroundColor:hv};
}},"splitpane/splitter/knob":{style:function(bH){return {source:bH.horizontal?dM:fe};
}},"splitpane/slider":{style:function(hQ){return {width:hQ.horizontal?3:undefined,height:hQ.vertical?3:undefined,backgroundColor:hv};
}},"selectbox":{alias:gR,include:gR,style:function(id){return {padding:[2,8]};
}},"selectbox/atom":gQ,"selectbox/popup":gX,"selectbox/list":{alias:gS},"selectbox/arrow":{include:gL,style:function(hB){return {source:fu,paddingLeft:5};
}},"datechooser":{style:function(bO){var bS;
var bQ=!!bO.focused;
var bR=!!bO.invalid;
var bP=!!bO.disabled;

if(bQ&&bR&&!bP){bS=fn;
}else if(bQ&&!bR&&!bP){bS=gW;
}else if(bP){bS=fp;
}else if(!bQ&&bR&&!bP){bS=fr;
}else{bS=fq;
}return {padding:2,decorator:bS,backgroundColor:gI};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gR,alias:gR,style:function(u){var v={padding:[2,4],shadow:undefined};

if(u.lastYear){v.icon=dN;
v.marginRight=1;
}else if(u.lastMonth){v.icon=hn;
}else if(u.nextYear){v.icon=dm;
v.marginLeft=1;
}else if(u.nextMonth){v.icon=gx;
}return v;
}},"datechooser/last-year-button-tooltip":gU,"datechooser/last-month-button-tooltip":gU,"datechooser/next-year-button-tooltip":gU,"datechooser/next-month-button-tooltip":gU,"datechooser/last-year-button":gq,"datechooser/last-month-button":gq,"datechooser/next-month-button":gq,"datechooser/next-year-button":gq,"datechooser/month-year-label":{style:function(ie){return {font:gK,textAlign:gs,textColor:ie.disabled?fw:undefined};
}},"datechooser/date-pane":{style:function(hK){return {textColor:hK.disabled?fw:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(cr){return {textColor:cr.disabled?fw:cr.weekend?ht:undefined,textAlign:gs,paddingTop:2,backgroundColor:dX};
}},"datechooser/week":{style:function(j){return {textAlign:gs,padding:[2,4],backgroundColor:dX};
}},"datechooser/day":{style:function(hC){return {textAlign:gs,decorator:hC.disabled?undefined:hC.selected?fs:undefined,textColor:hC.disabled?fw:hC.selected?gM:hC.otherMonth?ht:undefined,font:hC.today?gK:undefined,padding:[2,4]};
}},"combobox":{style:function(cB){var cF;
var cD=!!cB.focused;
var cE=!!cB.invalid;
var cC=!!cB.disabled;

if(cD&&cE&&!cC){cF=fn;
}else if(cD&&!cE&&!cC){cF=gW;
}else if(cC){cF=fp;
}else if(!cD&&cE&&!cC){cF=fr;
}else{cF=fq;
}return {decorator:cF};
}},"combobox/popup":gX,"combobox/list":{alias:gS},"combobox/button":{include:gR,alias:gR,style:function(hG){var hH={icon:fu,padding:2};

if(hG.selected){hH.decorator=hu;
}return hH;
}},"combobox/textfield":{include:gu,style:function(hA){return {decorator:undefined};
}},"menu":{style:function(bf){var bg={decorator:eM,shadow:es,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:bf.submenu||bf.contextmenu?hd:em};

if(bf.submenu){bg.position=dv;
bg.offset=[-2,-3];
}return bg;
}},"menu/slidebar":fM,"menu-slidebar":gP,"menu-slidebar-button":{style:function(bz){return {decorator:bz.hovered?fs:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:hs,style:function(ba){return {icon:ba.hovered?fO:ea};
}},"menu-slidebar/button-forward":{include:hs,style:function(H){return {icon:H.hovered?fS:fu};
}},"menu-separator":{style:function(cx){return {height:0,decorator:eX,margin:[4,2]};
}},"menu-button":{alias:gQ,style:function(cH){return {decorator:cH.selected?fs:undefined,textColor:cH.selected?gM:undefined,padding:[4,6]};
}},"menu-button/icon":{include:gL,style:function(hL){return {alignY:gJ};
}},"menu-button/label":{include:gV,style:function(cN){return {alignY:gJ,padding:1};
}},"menu-button/shortcut":{include:gV,style:function(bU){return {alignY:gJ,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:gL,style:function(c){return {source:c.selected?fa:gx,alignY:gJ};
}},"menu-checkbox":{alias:fo,include:fo,style:function(bp){return {icon:!bp.checked?undefined:bp.selected?hl:fR};
}},"menu-radiobutton":{alias:fo,include:fo,style:function(bM){return {icon:!bM.checked?undefined:bM.selected?ec:dn};
}},"menubar":{style:function(M){return {decorator:fI};
}},"menubar-button":{alias:gQ,style:function(bD){return {decorator:(bD.pressed||bD.hovered)&&!bD.disabled?fs:undefined,textColor:bD.pressed||bD.hovered?gM:undefined,padding:[3,8]};
}},"colorselector":gP,"colorselector/control-bar":gP,"colorselector/control-pane":gP,"colorselector/visual-pane":fv,"colorselector/preset-grid":gP,"colorselector/colorbucket":{style:function(db){return {decorator:gO,width:16,height:16};
}},"colorselector/preset-field-set":fv,"colorselector/input-field-set":fv,"colorselector/preview-field-set":fv,"colorselector/hex-field-composite":gP,"colorselector/hex-field":gu,"colorselector/rgb-spinner-composite":gP,"colorselector/rgb-spinner-red":ha,"colorselector/rgb-spinner-green":ha,"colorselector/rgb-spinner-blue":ha,"colorselector/hsb-spinner-composite":gP,"colorselector/hsb-spinner-hue":ha,"colorselector/hsb-spinner-saturation":ha,"colorselector/hsb-spinner-brightness":ha,"colorselector/preview-content-old":{style:function(hJ){return {decorator:gO,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(cu){return {decorator:gO,backgroundColor:gI,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(E){return {decorator:gO,margin:5};
}},"colorselector/brightness-field":{style:function(bx){return {decorator:gO,margin:[5,7]};
}},"colorselector/hue-saturation-pane":gP,"colorselector/hue-saturation-handle":gP,"colorselector/brightness-pane":gP,"colorselector/brightness-handle":gP,"colorpopup":{alias:gX,include:gX,style:function(V){return {padding:5,backgroundColor:gw};
}},"colorpopup/field":{style:function(cO){return {decorator:gO,margin:2,width:14,height:14,backgroundColor:gI};
}},"colorpopup/selector-button":gN,"colorpopup/auto-button":gN,"colorpopup/preview-pane":fv,"colorpopup/current-preview":{style:function(cq){return {height:20,padding:4,marginLeft:4,decorator:gO,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(bd){return {height:20,padding:4,marginRight:4,decorator:gO,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gN,include:gN,style:function(Y){return {icon:fK};
}},"colorpopup/colorselector-cancelbutton":{alias:gN,include:gN,style:function(X){return {icon:fH};
}},"table":{alias:gP,style:function(ib){return {decorator:dW};
}},"table-header":{},"table/statusbar":{style:function(de){return {decorator:fU,padding:[0,2]};
}},"table/column-button":{alias:gR,style:function(e){return {decorator:ee,padding:3,icon:dp};
}},"table-column-reset-button":{include:fo,alias:fo,style:function(){return {icon:fc};
}},"table-scroller":gP,"table-scroller/scrollbar-x":gr,"table-scroller/scrollbar-y":gr,"table-scroller/header":{style:function(cw){return {decorator:eT};
}},"table-scroller/pane":{style:function(ia){return {backgroundColor:eV};
}},"table-scroller/focus-indicator":{style:function(b){return {decorator:eD};
}},"table-scroller/resize-line":{style:function(t){return {backgroundColor:gG,width:2};
}},"table-header-cell":{alias:gQ,style:function(dh){return {minWidth:13,minHeight:20,padding:dh.hovered?[3,4,2,4]:[3,4],decorator:dh.hovered?fT:eL,sortIcon:dh.sorted?(dh.sortedAscending?fP:dl):undefined};
}},"table-header-cell/label":{style:function(cT){return {minWidth:0,alignY:gJ,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(hy){return {alignY:gJ,alignX:dA};
}},"table-header-cell/icon":{style:function(cI){return {minWidth:0,alignY:gJ,paddingRight:5};
}},"table-editor-textfield":{include:gu,style:function(bB){return {decorator:undefined,padding:[2,2],backgroundColor:gI};
}},"table-editor-selectbox":{include:ey,alias:ey,style:function(bh){return {padding:[0,2],backgroundColor:gI};
}},"table-editor-combobox":{include:du,alias:du,style:function(y){return {decorator:undefined,backgroundColor:gI};
}},"progressive-table-header":{alias:gP,style:function(A){return {decorator:dq};
}},"progressive-table-header-cell":{alias:gQ,style:function(s){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:ed};
}},"app-header":{style:function(cV){return {font:gK,textColor:gM,padding:[8,12],decorator:el};
}},"virtual-list":gS,"virtual-list/row-layer":ek,"row-layer":{style:function(hI){return {colorEven:gT,colorOdd:gT};
}},"column-layer":gP,"cell":{style:function(d){return {textColor:d.selected?gM:dD,padding:[3,6],font:eu};
}},"cell-string":ft,"cell-number":{include:ft,style:function(z){return {textAlign:dA};
}},"cell-image":ft,"cell-boolean":{include:ft,style:function(di){return {iconTrue:eG,iconFalse:dK};
}},"cell-atom":ft,"cell-date":ft,"cell-html":ft,"htmlarea":{"include":gP,style:function(hz){return {backgroundColor:gT};
}}}});
})();
(function(){var i="textfield",h="table",g="window",f="toolbar",e="toolbar-button",d="bold",c="inspector.theme.Appearance",b="green";
qx.Theme.define(c,{extend:qx.theme.modern.Appearance,appearances:{"toolbar-button-bold":{alias:e,include:e,style:function(l){return {textColor:b,font:d};
}},"inspector-window":{alias:g,include:g,style:function(m){return {contentPadding:[0,0,0,0],showMinimize:false,showMaximize:false,width:300,height:200};
}},"objects-toolbar":{alias:f,include:f,style:function(a){return {paddingLeft:3,paddingRight:3};
}},"objects-textfield":{alias:i,include:i,style:function(k){return {marginRight:5};
}},"objects-table":{alias:h,include:h,style:function(j){return {decorator:null};
}}}});
})();
(function(){var a="inspector.theme.Theme";
qx.Theme.define(a,{meta:{color:inspector.theme.Color,decoration:inspector.theme.Decoration,font:inspector.theme.Font,icon:qx.theme.icon.Tango,appearance:inspector.theme.Appearance}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(h,i){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!h;
this._cancelable=!!i;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(g){this._type=g;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(j){this._eventPhase=j;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(l){this._target=l;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(k){this._currentTarget=k;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(c){this._relatedTarget=c;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(f){this._originalTarget=f;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(m){this._bubbles=m;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(b){this._cancelable=b;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__jm:null,__jn:null,init:function(d,e,f){qx.event.type.Event.prototype.init.call(this,false,f);
this.__jm=d;
this.__jn=e;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
c.__jm=this.__jm;
c.__jn=this.__jn;
return c;
},getData:function(){return this.__jm;
},getOldData:function(){return this.__jn;
}},destruct:function(){this.__jm=this.__jn=null;
}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="set",D="deepBinding",C="item",B="reset",A="' (",z="Boolean",y=") to the object '",x="Integer",w=" of object ",v="qx.data.SingleValueBinding",u="Binding property ",s="Binding from '",t="PositiveNumber",q="PositiveInteger",r="Binding does not exist!",o=").",p="Date",n=" not possible: No event available. ";
qx.Class.define(v,{statics:{DEBUG_ON:false,__fQ:{},bind:function(T,U,V,W,X){var bi=this.__fS(T,U,V,W,X);
var bd=U.split(d);
var ba=this.__ga(bd);
var bh=[];
var be=[];
var bf=[];
var bb=[];
var bc=T;
for(var i=0;i<bd.length;i++){if(ba[i]!==l){bb.push(g);
}else{bb.push(this.__fU(bc,bd[i]));
}bh[i]=bc;
if(i==bd.length-1){if(ba[i]!==l){var bl=ba[i]===h?bc.length-1:ba[i];
var Y=bc.getItem(bl);
this.__fY(Y,V,W,X,T);
bf[i]=this.__gb(bc,bb[i],V,W,X,ba[i]);
}else{if(bd[i]!=null&&bc[m+qx.lang.String.firstUp(bd[i])]!=null){var Y=bc[m+qx.lang.String.firstUp(bd[i])]();
this.__fY(Y,V,W,X,T);
}bf[i]=this.__gb(bc,bb[i],V,W,X);
}}else{var bj={index:i,propertyNames:bd,sources:bh,listenerIds:bf,arrayIndexValues:ba,targetObject:V,targetPropertyChain:W,options:X,listeners:be};
var bg=qx.lang.Function.bind(this.__fR,this,bj);
be.push(bg);
bf[i]=bc.addListener(bb[i],bg);
}if(bc[m+qx.lang.String.firstUp(bd[i])]==null){bc=null;
}else if(ba[i]!==l){bc=bc[m+qx.lang.String.firstUp(bd[i])](ba[i]);
}else{bc=bc[m+qx.lang.String.firstUp(bd[i])]();
}
if(!bc){break;
}}var bk={type:D,listenerIds:bf,sources:bh,targetListenerIds:bi.listenerIds,targets:bi.targets};
this.__gc(bk,T,U,V,W);
return bk;
},__fR:function(bH){if(bH.options&&bH.options.onUpdate){bH.options.onUpdate(bH.sources[bH.index],bH.targetObject);
}for(var j=bH.index+1;j<bH.propertyNames.length;j++){var bL=bH.sources[j];
bH.sources[j]=null;

if(!bL){continue;
}bL.removeListenerById(bH.listenerIds[j]);
}var bL=bH.sources[bH.index];
for(var j=bH.index+1;j<bH.propertyNames.length;j++){if(bH.arrayIndexValues[j-1]!==l){bL=bL[m+qx.lang.String.firstUp(bH.propertyNames[j-1])](bH.arrayIndexValues[j-1]);
}else{bL=bL[m+qx.lang.String.firstUp(bH.propertyNames[j-1])]();
}bH.sources[j]=bL;
if(!bL){this.__fV(bH.targetObject,bH.targetPropertyChain);
break;
}if(j==bH.propertyNames.length-1){if(qx.Class.implementsInterface(bL,qx.data.IListData)){var bM=bH.arrayIndexValues[j]===h?bL.length-1:bH.arrayIndexValues[j];
var bJ=bL.getItem(bM);
this.__fY(bJ,bH.targetObject,bH.targetPropertyChain,bH.options,bH.sources[bH.index]);
bH.listenerIds[j]=this.__gb(bL,g,bH.targetObject,bH.targetPropertyChain,bH.options,bH.arrayIndexValues[j]);
}else{if(bH.propertyNames[j]!=null&&bL[m+qx.lang.String.firstUp(bH.propertyNames[j])]!=null){var bJ=bL[m+qx.lang.String.firstUp(bH.propertyNames[j])]();
this.__fY(bJ,bH.targetObject,bH.targetPropertyChain,bH.options,bH.sources[bH.index]);
}var bK=this.__fU(bL,bH.propertyNames[j]);
bH.listenerIds[j]=this.__gb(bL,bK,bH.targetObject,bH.targetPropertyChain,bH.options);
}}else{if(bH.listeners[j]==null){var bI=qx.lang.Function.bind(this.__fR,this,bH);
bH.listeners.push(bI);
}if(qx.Class.implementsInterface(bL,qx.data.IListData)){var bK=g;
}else{var bK=this.__fU(bL,bH.propertyNames[j]);
}bH.listenerIds[j]=bL.addListener(bK,bH.listeners[j]);
}}},__fS:function(cw,cx,cy,cz,cA){var cE=cz.split(d);
var cC=this.__ga(cE);
var cJ=[];
var cI=[];
var cG=[];
var cF=[];
var cD=cy;
for(var i=0;i<cE.length-1;i++){if(cC[i]!==l){cF.push(g);
}else{try{cF.push(this.__fU(cD,cE[i]));
}catch(e){break;
}}cJ[i]=cD;
var cH=function(){for(var j=i+1;j<cE.length-1;j++){var R=cJ[j];
cJ[j]=null;

if(!R){continue;
}R.removeListenerById(cG[j]);
}var R=cJ[i];
for(var j=i+1;j<cE.length-1;j++){var P=qx.lang.String.firstUp(cE[j-1]);
if(cC[j-1]!==l){var S=cC[j-1]===h?R.getLength()-1:cC[j-1];
R=R[m+P](S);
}else{R=R[m+P]();
}cJ[j]=R;
if(cI[j]==null){cI.push(cH);
}if(qx.Class.implementsInterface(R,qx.data.IListData)){var Q=g;
}else{try{var Q=qx.data.SingleValueBinding.__fU(R,cE[j]);
}catch(e){break;
}}cG[j]=R.addListener(Q,cI[j]);
}qx.data.SingleValueBinding.__fT(cw,cx,cy,cz,cA);
};
cI.push(cH);
cG[i]=cD.addListener(cF[i],cH);
var cB=qx.lang.String.firstUp(cE[i]);
if(cD[m+cB]==null){cD=null;
}else if(cC[i]!==l){cD=cD[m+cB](cC[i]);
}else{cD=cD[m+cB]();
}
if(!cD){break;
}}return {listenerIds:cG,targets:cJ};
},__fT:function(E,F,G,H,I){var M=this.__fX(E,F);

if(M!=null){var O=F.substring(F.lastIndexOf(d)+1,F.length);
if(O.charAt(O.length-1)==f){var J=O.substring(O.lastIndexOf(k)+1,O.length-1);
var L=O.substring(0,O.lastIndexOf(k));
var N=M[m+qx.lang.String.firstUp(L)]();

if(J==h){J=N.length-1;
}
if(N!=null){var K=N.getItem(J);
}}else{var K=M[m+qx.lang.String.firstUp(O)]();
}}K=qx.data.SingleValueBinding.__gd(K,G,H,I);
this.__fW(G,H,K);
},__fU:function(bU,bV){var bW=this.__ge(bU,bV);
if(bW==null){if(qx.Class.supportsEvent(bU.constructor,bV)){bW=bV;
}else if(qx.Class.supportsEvent(bU.constructor,g+qx.lang.String.firstUp(bV))){bW=g+qx.lang.String.firstUp(bV);
}else{throw new qx.core.AssertionError(u+bV+w+bU+n);
}}return bW;
},__fV:function(cb,cc){var cd=this.__fX(cb,cc);

if(cd!=null){var ce=cc.substring(cc.lastIndexOf(d)+1,cc.length);
if(ce.charAt(ce.length-1)==f){this.__fW(cb,cc,null);
return;
}if(cd[B+qx.lang.String.firstUp(ce)]!=undefined){cd[B+qx.lang.String.firstUp(ce)]();
}else{cd[a+qx.lang.String.firstUp(ce)](null);
}}},__fW:function(cP,cQ,cR){var cV=this.__fX(cP,cQ);

if(cV!=null){var cW=cQ.substring(cQ.lastIndexOf(d)+1,cQ.length);
if(cW.charAt(cW.length-1)==f){var cS=cW.substring(cW.lastIndexOf(k)+1,cW.length-1);
var cU=cW.substring(0,cW.lastIndexOf(k));
var cT=cV[m+qx.lang.String.firstUp(cU)]();

if(cS==h){cS=cT.length-1;
}
if(cT!=null){cT.setItem(cS,cR);
}}else{cV[a+qx.lang.String.firstUp(cW)](cR);
}}},__fX:function(cq,cr){var cu=cr.split(d);
var cv=cq;
for(var i=0;i<cu.length-1;i++){try{var ct=cu[i];
if(ct.indexOf(f)==ct.length-1){var cs=ct.substring(ct.indexOf(k)+1,ct.length-1);
ct=ct.substring(0,ct.indexOf(k));
}cv=cv[m+qx.lang.String.firstUp(ct)]();

if(cs!=null){if(cs==h){cs=cv.length-1;
}cv=cv.getItem(cs);
cs=null;
}}catch(bA){return null;
}}return cv;
},__fY:function(cl,cm,cn,co,cp){cl=this.__gd(cl,cm,cn,co);
if(cl===undefined){this.__fV(cm,cn);
}if(cl!==undefined){try{this.__fW(cm,cn,cl);
if(co&&co.onUpdate){co.onUpdate(cp,cm,cl);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(co&&co.onSetFail){co.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cl+" on "+cm+". Error message: "+e);
}}}},__ga:function(bR){var bS=[];
for(var i=0;i<bR.length;i++){var name=bR[i];
if(qx.lang.String.endsWith(name,f)){var bT=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bT!==h){if(bT==l||isNaN(parseInt(bT))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){bR[i]=name.substring(0,name.indexOf(k));
bS[i]=l;
bS[i+1]=bT;
bR.splice(i+1,0,C);
i++;
}else{bS[i]=bT;
bR.splice(i,1,C);
}}else{bS[i]=l;
}}return bS;
},__gb:function(cX,cY,da,db,dc,dd){var de;
{};
var dg=function(ch,e){if(ch!==l){if(ch===h){ch=cX.length-1;
}var ck=cX.getItem(ch);
if(ck===undefined){qx.data.SingleValueBinding.__fV(da,db);
}var ci=e.getData().start;
var cj=e.getData().end;

if(ch<ci||ch>cj){return;
}}else{var ck=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cX+" by "+cY+" to "+da+" ("+db+")");
qx.log.Logger.debug("Data before conversion: "+ck);
}ck=qx.data.SingleValueBinding.__gd(ck,da,db,dc);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+ck);
}try{if(ck!==undefined){qx.data.SingleValueBinding.__fW(da,db,ck);
}else{qx.data.SingleValueBinding.__fV(da,db);
}if(dc&&dc.onUpdate){dc.onUpdate(cX,da,ck);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(dc&&dc.onSetFail){dc.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+ck+" on "+da+". Error message: "+e);
}}};
if(!dd){dd=l;
}dg=qx.lang.Function.bind(dg,cX,dd);
var df=cX.addListener(cY,dg);
return df;
},__gc:function(cK,cL,cM,cN,cO){if(this.__fQ[cL.toHashCode()]===undefined){this.__fQ[cL.toHashCode()]=[];
}this.__fQ[cL.toHashCode()].push([cK,cL,cM,cN,cO]);
},__gd:function(br,bs,bt,bu){if(bu&&bu.converter){var bw;

if(bs.getModel){bw=bs.getModel();
}return bu.converter(br,bw);
}else{var by=this.__fX(bs,bt);
var bz=bt.substring(bt.lastIndexOf(d)+1,bt.length);
if(by==null){return br;
}var bx=qx.Class.getPropertyDefinition(by.constructor,bz);
var bv=bx==null?l:bx.check;
return this.__gf(br,bv);
}},__ge:function(bX,bY){var ca=qx.Class.getPropertyDefinition(bX.constructor,bY);

if(ca==null){return null;
}return ca.event;
},__gf:function(bB,bC){var bD=qx.lang.Type.getClass(bB);
if((bD==c||bD==b)&&(bC==x||bC==q)){bB=parseInt(bB);
}if((bD==z||bD==c||bD==p)&&bC==b){bB=bB+l;
}if((bD==c||bD==b)&&(bC==c||bC==t)){bB=parseFloat(bB);
}return bB;
},removeBindingFromObject:function(bE,bF){if(bF.type==D){for(var i=0;i<bF.sources.length;i++){if(bF.sources[i]){bF.sources[i].removeListenerById(bF.listenerIds[i]);
}}for(var i=0;i<bF.targets.length;i++){if(bF.targets[i]){bF.targets[i].removeListenerById(bF.targetListenerIds[i]);
}}}else{bE.removeListenerById(bF);
}var bG=this.__fQ[bE.toHashCode()];
if(bG!=undefined){for(var i=0;i<bG.length;i++){if(bG[i][0]==bF){qx.lang.Array.remove(bG,bG[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bo){{};
var bp=this.__fQ[bo.toHashCode()];

if(bp!=undefined){for(var i=bp.length-1;i>=0;i--){this.removeBindingFromObject(bo,bp[i][0]);
}}},getAllBindingsForObject:function(bq){if(this.__fQ[bq.toHashCode()]===undefined){this.__fQ[bq.toHashCode()]=[];
}return this.__fQ[bq.toHashCode()];
},removeAllBindings:function(){for(var bn in this.__fQ){var bm=qx.core.ObjectRegistry.fromHashCode(bn);
if(bm==null){delete this.__fQ[bn];
continue;
}this.removeAllBindingsForObject(bm);
}this.__fQ={};
},getAllBindings:function(){return this.__fQ;
},showBindingInLog:function(bN,bO){var bQ;
for(var i=0;i<this.__fQ[bN.toHashCode()].length;i++){if(this.__fQ[bN.toHashCode()][i][0]==bO){bQ=this.__fQ[bN.toHashCode()][i];
break;
}}
if(bQ===undefined){var bP=r;
}else{var bP=s+bQ[1]+A+bQ[2]+y+bQ[3]+A+bQ[4]+o;
}qx.log.Logger.debug(bP);
},showAllBindingsInLog:function(){for(var cg in this.__fQ){var cf=qx.core.ObjectRegistry.fromHashCode(cg);

for(var i=0;i<this.__fQ[cg].length;i++){this.showBindingInLog(cf,this.__fQ[cg][i][0]);
}}}}});
})();
(function(){var I="",H="g",G="0",F='\\$1',E="%",D='-',C="qx.lang.String",B=' ',A='\n',z="undefined";
qx.Class.define(C,{statics:{camelCase:function(d){return d.replace(/\-([a-z])/g,function(m,n){return n.toUpperCase();
});
},hyphenate:function(e){return e.replace(/[A-Z]/g,function(O){return (D+O.charAt(0).toLowerCase());
});
},capitalize:function(b){return b.replace(/\b[a-z]/g,function(c){return c.toUpperCase();
});
},clean:function(f){return this.trim(f.replace(/\s+/g,B));
},trimLeft:function(a){return a.replace(/^\s+/,I);
},trimRight:function(j){return j.replace(/\s+$/,I);
},trim:function(k){return k.replace(/^\s+|\s+$/g,I);
},startsWith:function(J,K){return J.indexOf(K)===0;
},endsWith:function(P,Q){return P.substring(P.length-Q.length,P.length)===Q;
},repeat:function(u,v){return u.length>0?new Array(v+1).join(u):I;
},pad:function(L,length,M){var N=length-L.length;

if(N>0){if(typeof M===z){M=G;
}return this.repeat(M,N)+L;
}else{return L;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(s,t){return s.indexOf(t)!=-1;
},format:function(w,x){var y=w;

for(var i=0;i<x.length;i++){y=y.replace(new RegExp(E+(i+1),H),x[i]+I);
}return y;
},escapeRegexpChars:function(l){return l.replace(/([.*+?^${}()|[\]\/\\])/g,F);
},toArray:function(g){return g.split(/\B|\b/g);
},stripTags:function(h){return h.replace(/<\/?[^>]+>/gi,I);
},stripScripts:function(o,p){var r=I;
var q=o.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){r+=arguments[1]+A;
return I;
});

if(p===true){qx.lang.Function.globalEval(r);
}return q;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(f){},setItem:function(d,e){},splice:function(h,i,j){},contains:function(g){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var d="qx.globalErrorHandling",c="on",b="qx.event.GlobalError";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(k,l){this.__jU=k||null;
this.__jV=l||window;

if(qx.core.Setting.get(d)===c){if(k&&window.onerror){var m=qx.Bootstrap.bind(this.__jX,this);

if(this.__jW==null){this.__jW=window.onerror;
}var self=this;
window.onerror=function(e){self.__jW(e);
m(e);
};
}
if(k&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__jX,this);
}if(this.__jU==null){if(this.__jW!=null){window.onerror=this.__jW;
this.__jW=null;
}else{window.onerror=null;
}}}},__jX:function(g,h,i){if(this.__jU){this.handleError(new qx.core.WindowError(g,h,i));
return true;
}},observeMethod:function(f){if(qx.core.Setting.get(d)===c){var self=this;
return function(){if(!self.__jU){return f.apply(this,arguments);
}
try{return f.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return f;
}},handleError:function(a){if(this.__jU){this.__jU.call(this.__jV,a);
}}},defer:function(j){qx.core.Setting.define(d,c);
j.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cQ=c;
this.__cR=d||b;
this.__cS=e===undefined?-1:e;
},members:{__cQ:null,__cR:null,__cS:null,toString:function(){return this.__cQ;
},getUri:function(){return this.__cR;
},getLineNumber:function(){return this.__cS;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__kp=b+(c&&c.message?c.message:c);
Error.call(this,this.__kp);
this.__kq=d;
this.__kr=c;
},members:{__kr:null,__kq:null,__kp:null,toString:function(){return this.__kp;
},getArguments:function(){return this.__kq;
},getSourceException:function(){return this.__kr;
}},destruct:function(){this.__kr=null;
this.__kq=null;
this.__kp=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cN=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cN:null,message:null,getComment:function(){return this.__cN;
},toString:function(){return this.__cN+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__kW=qx.dev.StackTrace.getStackTrace();
},members:{__kW:null,getStackTrace:function(){return this.__kW;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(j){return this.getClass(j)==d;
},isNumber:function(g){return (g!==null&&(this.getClass(g)==b||g instanceof Number));
},isBoolean:function(h){return (h!==null&&(this.getClass(h)==a||h instanceof Boolean));
},isDate:function(k){return (k!==null&&(this.getClass(k)==c||k instanceof Date));
},isError:function(i){return (i!==null&&(this.getClass(i)==e||i instanceof Error));
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(f){qx.core.Object.call(this);
this.__fx={};

if(f!=null){this.setSize(f);
}},properties:{size:{check:a,init:Infinity}},members:{__fx:null,getObject:function(c){if(this.$$disposed){return new c;
}
if(!c){throw new Error("Class needs to be defined!");
}var d=null;
var e=this.__fx[c.classname];

if(e){d=e.pop();
}
if(d){d.$$pooled=false;
}else{d=new c;
}return d;
},poolObject:function(g){if(!this.__fx){return;
}var h=g.classname;
var j=this.__fx[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__fx[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__fx;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__fx;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(f,g,h){var name;

for(var i=0,l=g.length;i<l;i++){name=g[i];

if(f[name]==null||!f.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(f[name].dispose){if(!h&&f[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{f[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}f[name]=null;
}},disposeArray:function(q,r){var t=q[r];

if(!t){return;
}if(qx.core.ObjectRegistry.inShutDown){q[r]=null;
return;
}try{var s;

for(var i=t.length-1;i>=0;i--){s=t[i];

if(s){s.dispose();
}}}catch(b){throw new Error("The array field: "+r+" of object: "+q+" has non disposable entries: "+b);
}t.length=0;
q[r]=null;
},disposeMap:function(j,k){var n=j[k];

if(!n){return;
}if(qx.core.ObjectRegistry.inShutDown){j[k]=null;
return;
}try{var m;

for(var o in n){m=n[o];

if(n.hasOwnProperty(o)&&m){m.dispose();
}}}catch(p){throw new Error("The map field: "+k+" of object: "+j+" has non disposable entries: "+p);
}j[k]=null;
},disposeTriggeredBy:function(c,d){var e=d.dispose;
d.dispose=function(){e.call(d);
c.dispose();
};
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(e){this._manager=e;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(b,event,c){return !event.getBubbles();
},dispatchEvent:function(f,event,g){var k,h;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var m=this._manager.getListeners(f,g,false);

if(m){for(var i=0,l=m.length;i<l;i++){var j=m[i].context||f;
m[i].handler.call(j,event);
}}}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__eO:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__eP:function(K,L){return function(s){return K.prototype[L].apply(s,Array.prototype.slice.call(arguments,1));
};
},__eQ:function(){var M=qx.lang.Generics.__eO;

for(var Q in M){var O=window[Q];
var N=M[Q];

for(var i=0,l=N.length;i<l;i++){var P=N[i];

if(!O[P]){O[P]=qx.lang.Generics.__eP(O,P);
}}}}},defer:function(J){J.__eQ();
}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(e){return this._dynamic[e];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(f){if(f&&this._dynamic[f]){return this._dynamic[f];
}return f;
},_setDynamic:function(c){this._dynamic=c;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__gr={};
this.add(a,h);
},members:{__gr:null,_preprocess:function(l){var o=this._getDynamic();

if(o[l]===false){return l;
}else if(o[l]===undefined){if(l.charAt(0)===j||l.charAt(0)===b||l.indexOf(g)===0||l.indexOf(f)===i||l.indexOf(e)===0){o[l]=false;
return l;
}
if(this.__gr[l]){return this.__gr[l];
}var n=l.substring(0,l.indexOf(j));
var m=this.__gr[n];

if(m!==undefined){o[l]=m+l.substring(n.length);
}}return l;
},add:function(r,s){this.__gr[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(j))===r){u[t]=s+t.substring(r.length);
}}},remove:function(k){delete this.__gr[k];
},resolve:function(p){var q=this._getDynamic();

if(p!=null){p=this._preprocess(p);
}return q[p]||p;
}},destruct:function(){this.__gr=null;
}});
})();
(function(){var m="px",l="qx.client",k="div",j="img",i="",h="no-repeat",g="scale-x",f="mshtml",d="scale",c="scale-y",I="qx/icon",H="repeat",G=".png",F="crop",E="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",D='<div style="',C="repeat-y",B='<img src="',A="qx.bom.element.Decoration",z="', sizingMethod='",t="png",u="')",r='"></div>',s='"/>',p='" style="',q="none",n="webkit",o=" ",v="repeat-x",w="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(A,{statics:{DEBUG:false,__gN:{},__gO:qx.core.Variant.isSet(l,f),__gP:qx.core.Variant.select(l,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__gQ:{"scale-x":j,"scale-y":j,"scale":j,"repeat":k,"no-repeat":k,"repeat-x":k,"repeat-y":k},update:function(bv,bw,bx,by){var bA=this.getTagName(bx,bw);

if(bA!=bv.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bB=this.getAttributes(bw,bx,by);

if(bA===j){bv.src=bB.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(bv.style.backgroundPosition!=i&&bB.style.backgroundPosition===undefined){bB.style.backgroundPosition=null;
}if(bv.style.clip!=i&&bB.style.clip===undefined){bB.style.clip=null;
}var bz=qx.bom.element.Style;
bz.setStyles(bv,bB.style);
if(this.__gO){try{bv.filters[w].apply();
}catch(e){}}},create:function(R,S,T){var U=this.getTagName(S,R);
var W=this.getAttributes(R,S,T);
var V=qx.bom.element.Style.compile(W.style);

if(U===j){return B+W.src+p+V+s;
}else{return D+V+r;
}},getTagName:function(a,b){if(qx.core.Variant.isSet(l,f)){if(b&&this.__gO&&this.__gP[a]&&qx.lang.String.endsWith(b,G)){return k;
}}return this.__gQ[a];
},getAttributes:function(bC,bD,bE){if(!bE){bE={};
}
if(!bE.position){bE.position=x;
}
if(qx.core.Variant.isSet(l,f)){bE.fontSize=0;
bE.lineHeight=0;
}else if(qx.core.Variant.isSet(l,n)){bE.WebkitUserDrag=q;
}var bG=qx.util.ResourceManager.getInstance().getImageFormat(bC)||qx.io.ImageLoader.getFormat(bC);
{};
var bF;
if(this.__gO&&this.__gP[bD]&&bG===t){bF=this.__gT(bE,bD,bC);
}else{if(bD===d){bF=this.__gU(bE,bD,bC);
}else if(bD===g||bD===c){bF=this.__gV(bE,bD,bC);
}else{bF=this.__gY(bE,bD,bC);
}}return bF;
},__gR:function(bs,bt,bu){if(bs.width==null&&bt!=null){bs.width=bt+m;
}
if(bs.height==null&&bu!=null){bs.height=bu+m;
}return bs;
},__gS:function(bH){var bI=qx.util.ResourceManager.getInstance().getImageWidth(bH)||qx.io.ImageLoader.getWidth(bH);
var bJ=qx.util.ResourceManager.getInstance().getImageHeight(bH)||qx.io.ImageLoader.getHeight(bH);
return {width:bI,height:bJ};
},__gT:function(bK,bL,bM){var bP=this.__gS(bM);
bK=this.__gR(bK,bP.width,bP.height);
var bO=bL==h?F:d;
var bN=E+qx.util.ResourceManager.getInstance().toUri(bM)+z+bO+u;
bK.filter=bN;
bK.backgroundImage=bK.backgroundRepeat=i;
return {style:bK};
},__gU:function(bV,bW,bX){var bY=qx.util.ResourceManager.getInstance().toUri(bX);
var ca=this.__gS(bX);
bV=this.__gR(bV,ca.width,ca.height);
return {src:bY,style:bV};
},__gV:function(bc,bd,be){var bj=qx.util.ResourceManager.getInstance();
var bi=bj.isClippedImage(be);
var bk=this.__gS(be);

if(bi){var bh=bj.getData(be);
var bf=bj.toUri(bh[4]);

if(bd===g){bc=this.__gW(bc,bh,bk.height);
}else{bc=this.__gX(bc,bh,bk.width);
}return {src:bf,style:bc};
}else{{};

if(bd==g){bc.height=bk.height==null?null:bk.height+m;
}else if(bd==c){bc.width=bk.width==null?null:bk.width+m;
}var bf=bj.toUri(be);
return {src:bf,style:bc};
}},__gW:function(bR,bS,bT){var bU=qx.util.ResourceManager.getInstance().getImageHeight(bS[4]);
bR.clip={top:-bS[6],height:bT};
bR.height=bU+m;
if(bR.top!=null){bR.top=(parseInt(bR.top,10)+bS[6])+m;
}else if(bR.bottom!=null){bR.bottom=(parseInt(bR.bottom,10)+bT-bU-bS[6])+m;
}return bR;
},__gX:function(X,Y,ba){var bb=qx.util.ResourceManager.getInstance().getImageWidth(Y[4]);
X.clip={left:-Y[5],width:ba};
X.width=bb+m;
if(X.left!=null){X.left=(parseInt(X.left,10)+Y[5])+m;
}else if(X.right!=null){X.right=(parseInt(X.right,10)+ba-bb-Y[5])+m;
}return X;
},__gY:function(J,K,L){var Q=qx.util.ResourceManager.getInstance().isClippedImage(L);
var P=this.__gS(L);
if(Q&&K!==H){var O=qx.util.ResourceManager.getInstance().getData(L);
var N=qx.bom.element.Background.getStyles(O[4],K,O[5],O[6]);

for(var M in N){J[M]=N[M];
}
if(P.width!=null&&J.width==null&&(K==C||K===h)){J.width=P.width+m;
}
if(P.height!=null&&J.height==null&&(K==v||K===h)){J.height=P.height+m;
}return {style:J};
}else{{};
J=this.__gR(J,P.width,P.height);
J=this.__ha(J,L,K);
return {style:J};
}},__ha:function(bl,bm,bn){var top=null;
var br=null;

if(bl.backgroundPosition){var bo=bl.backgroundPosition.split(o);
br=parseInt(bo[0]);

if(isNaN(br)){br=bo[0];
}top=parseInt(bo[1]);

if(isNaN(top)){top=bo[1];
}}var bq=qx.bom.element.Background.getStyles(bm,bn,br,top);

for(var bp in bq){bl[bp]=bq[bp];
}if(bl.filter){bl.filter=i;
}return bl;
},__hb:function(bQ){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bQ)&&bQ.indexOf(I)==-1){if(!this.__gN[bQ]){qx.log.Logger.debug("Potential clipped image candidate: "+bQ);
this.__gN[bQ]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(l,{"mshtml":function(){return qx.bom.element.Decoration.__gO;
},"default":function(){return false;
}})}});
})();
(function(){var f="CSS1Compat",d="qx.bom.client.Feature",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",b="pointerEvents",a="label";
qx.Class.define(d,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:false,XUL:false,CSS_TEXT_OVERFLOW:("textOverflow" in document.documentElement.style||"OTextOverflow" in document.documentElement.style),HTML5_CLASSLIST:!!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__gs:function(){this.QUIRKS_MODE=this.__gt();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;

try{document.createElementNS(c,a);
this.XUL=true;
}catch(e){this.XUL=false;
}if(b in document.documentElement.style){if(qx.bom.client.Engine.OPERA){this.CSS_POINTER_EVENTS=false;
}else{this.CSS_POINTER_EVENTS=true;
}}},__gt:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==f;
}}},defer:function(g){g.__gs();
}});
})();
(function(){var i="",h="/",g="mshtml",f="qx.client",e="//",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__cr:qx.$$resources||{},__cs:{}},members:{has:function(o){return !!this.self(arguments).__cr[o];
},getData:function(j){return this.self(arguments).__cr[j]||null;
},getImageWidth:function(B){var C=this.self(arguments).__cr[B];
return C?C[0]:null;
},getImageHeight:function(t){var u=this.self(arguments).__cr[t];
return u?u[1]:null;
},getImageFormat:function(r){var s=this.self(arguments).__cr[r];
return s?s[2]:null;
},isClippedImage:function(p){var q=this.self(arguments).__cr[p];
return q&&q.length>4;
},toUri:function(k){if(k==null){return k;
}var l=this.self(arguments).__cr[k];

if(!l){return k;
}
if(typeof l===c){var n=l;
}else{var n=l[3];
if(!n){return k;
}}var m=i;

if(qx.core.Variant.isSet(f,g)&&qx.bom.client.Feature.SSL){m=this.self(arguments).__cs[n];
}return m+qx.$$libraries[n].resourceUri+h+k;
}},defer:function(v){if(qx.core.Variant.isSet(f,g)){if(qx.bom.client.Feature.SSL){for(var z in qx.$$libraries){var x;

if(qx.$$libraries[z].resourceUri){x=qx.$$libraries[z].resourceUri;
}else{v.__cs[z]=i;
continue;
}if(x.match(/^\/\//)!=null){v.__cs[z]=window.location.protocol;
}else if(x.match(/^\//)!=null){v.__cs[z]=window.location.protocol+e+window.location.host;
}else if(x.match(/^\.\//)!=null){var w=document.URL;
v.__cs[z]=w.substring(0,w.lastIndexOf(h)+1);
}else if(x.match(/^http/)!=null){v.__cs[z]=i;
}else{var A=window.location.href.indexOf(d);
var y;

if(A==-1){y=window.location.href;
}else{y=window.location.href.substring(0,A);
}v.__cs[z]=y.substring(0,y.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="clip:rect(",d="clip",c="rect(auto,auto,auto,auto)",a="rect(auto, auto, auto, auto)";
qx.Class.define(f,{statics:{compile:function(v){if(!v){return k;
}var A=v.left;
var top=v.top;
var z=v.width;
var y=v.height;
var w,x;

if(A==null){w=(z==null?n:z+m);
A=n;
}else{w=(z==null?n:A+z+m);
A=A+m;
}
if(top==null){x=(y==null?n:y+m);
top=n;
}else{x=(y==null?n:top+y+m);
top=top+m;
}return b+top+l+w+l+x+l+A+i;
},get:function(C,D){var F=qx.bom.element.Style.get(C,d,D,false);
var K,top,I,H;
var E,G;

if(typeof F===e&&F!==n&&F!==h){F=qx.lang.String.trim(F);
if(/\((.*)\)/.test(F)){var J=RegExp.$1.split(l);
top=qx.lang.String.trim(J[0]);
E=qx.lang.String.trim(J[1]);
G=qx.lang.String.trim(J[2]);
K=qx.lang.String.trim(J[3]);
if(K===n){K=null;
}
if(top===n){top=null;
}
if(E===n){E=null;
}
if(G===n){G=null;
}if(top!=null){top=parseInt(top,10);
}
if(E!=null){E=parseInt(E,10);
}
if(G!=null){G=parseInt(G,10);
}
if(K!=null){K=parseInt(K,10);
}if(E!=null&&K!=null){I=E-K;
}else if(E!=null){I=E;
}
if(G!=null&&top!=null){H=G-top;
}else if(G!=null){H=G;
}}else{throw new Error("Could not parse clip string: "+F);
}}return {left:K||null,top:top||null,width:I||null,height:H||null};
},set:function(o,p){if(!p){o.style.clip=c;
return;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?n:t+m);
u=n;
}else{q=(t==null?n:u+t+m);
u=u+m;
}
if(top==null){r=(s==null?n:s+m);
top=n;
}else{r=(s==null?n:top+s+m);
top=top+m;
}o.style.clip=j+top+l+q+l+r+l+u+g;
},reset:function(B){B.style.clip=a;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__eH:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(o){return g+(this.__eH[o]||o)+e;
},get:function(p,q){return qx.bom.element.Style.get(p,c,q,false);
},set:function(m,n){m.style.cursor=this.__eH[n]||n;
},reset:function(a){a.style.cursor=h;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="opacity:",i="opacity",h="filter",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Variant.select(l,{"mshtml":function(G){if(G>=1){G=1;
}
if(G<0.00001){G=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return j+G+k;
}else{return d+(G*100)+f;
}},"gecko":function(o){if(o>=1){o=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return b+o+k;
}else{return j+o+k;
}},"default":function(u){if(u>=1){return m;
}return j+u+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(B,C){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(C>=1){C=m;
}B.style.opacity=C;
}else{var D=qx.bom.element.Style.get(B,h,qx.bom.element.Style.COMPUTED_MODE,false);

if(C>=1){C=1;
}
if(C<0.00001){C=0;
}if(!B.currentStyle||!B.currentStyle.hasLayout){B.style.zoom=1;
}B.style.filter=D.replace(/alpha\([^\)]*\)/gi,m)+c+C*100+e;
}},"gecko":function(z,A){if(A>=1){A=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){z.style.MozOpacity=A;
}else{z.style.opacity=A;
}},"default":function(E,F){if(F>=1){F=m;
}E.style.opacity=F;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(H){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){H.style.opacity=m;
}else{var I=qx.bom.element.Style.get(H,h,qx.bom.element.Style.COMPUTED_MODE,false);
H.style.filter=I.replace(/alpha\([^\)]*\)/gi,m);
}},"gecko":function(t){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){t.style.MozOpacity=m;
}else{t.style.opacity=m;
}},"default":function(v){v.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(p,q){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var r=qx.bom.element.Style.get(p,i,q,false);

if(r!=null){return parseFloat(r);
}return 1.0;
}else{var s=qx.bom.element.Style.get(p,h,q,false);

if(s){var r=s.match(/alpha\(opacity=(.*)\)/);

if(r&&r[1]){return parseFloat(r[1])/100;
}}return 1.0;
}},"gecko":function(J,K){var L=qx.bom.element.Style.get(J,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?g:i,K,false);

if(L==0.999999){L=1.0;
}
if(L!=null){return parseFloat(L);
}return 1.0;
},"default":function(w,x){var y=qx.bom.element.Style.get(w,i,x,false);

if(y!=null){return parseFloat(y);
}return 1.0;
}})},defer:function(n){n.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__cJ:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__cK:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__cL:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cM:function(D){var E=this.__cL;
return E.tags[D.tagName.toLowerCase()]||E.types[D.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(G){{};
},"default":function(x){var z=this.__cK;
var y=p;

if(z){for(var i=0,l=z.length;i<l;i++){y+=z[i]+m+x+c;
}}return y;
}}),get:qx.core.Variant.select(q,{"mshtml":function(C){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(C))){if(!this.__cM(C)){return d;
}}return k;
},"default":function(u){var w=this.__cJ;
var v;

if(w){for(var i=0,l=w.length;i<l;i++){v=qx.bom.element.Style.get(u,w[i],null,false);

if(v!=null&&v!==p){return v;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(A,B){{};
},"default":function(r,s){var t=this.__cJ;

if(t){for(var i=0,l=t.length;i<l;i++){r.style[t[i]]=s;
}}}}),reset:function(F){this.set(F,p);
}}});
})();
(function(){var bl="",bk="qx.client",bj="hidden",bi="-moz-scrollbars-none",bh="overflow",bg=";",bf="overflowY",be=":",bd="overflowX",bc="overflow:",bx="none",bw="scroll",bv="borderLeftStyle",bu="borderRightStyle",bt="div",bs="borderRightWidth",br="overflow-y",bq="borderLeftWidth",bp="-moz-scrollbars-vertical",bo="100px",bm="qx.bom.element.Overflow",bn="overflow-x";
qx.Class.define(bm,{statics:{__ki:null,getScrollbarWidth:function(){if(this.__ki!==null){return this.__ki;
}var d=qx.bom.element.Style;
var f=function(ca,cb){return parseInt(d.get(ca,cb))||0;
};
var g=function(ba){return (d.get(ba,bu)==bx?0:f(ba,bs));
};
var e=function(L){return (d.get(L,bv)==bx?0:f(L,bq));
};
var i=qx.core.Variant.select(bk,{"mshtml":function(v){if(d.get(v,bf)==bj||v.clientWidth==0){return g(v);
}return Math.max(0,v.offsetWidth-v.clientLeft-v.clientWidth);
},"default":function(bL){if(bL.clientWidth==0){var bM=d.get(bL,bh);
var bN=(bM==bw||bM==bp?16:0);
return Math.max(0,g(bL)+bN);
}return Math.max(0,(bL.offsetWidth-bL.clientWidth-e(bL)));
}});
var h=function(Q){return i(Q)-g(Q);
};
var t=document.createElement(bt);
var s=t.style;
s.height=s.width=bo;
s.overflow=bw;
document.body.appendChild(t);
var c=h(t);
this.__ki=c?c:16;
document.body.removeChild(t);
return this.__ki;
},_compile:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bJ,bK){if(bK==bj){bK=bi;
}return bc+bK+bg;
}:
function(bU,bV){return bU+be+bV+bg;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(T,U){return bc+U+bg;
}:
function(ce,cf){return ce+be+cf+bg;
},"default":function(C,D){return C+be+D+bg;
}}),compileX:function(k){return this._compile(bn,k);
},compileY:function(bY){return this._compile(br,bY);
},getX:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bQ,bR){var bS=qx.bom.element.Style.get(bQ,bh,bR,false);

if(bS===bi){bS=bj;
}return bS;
}:
function(n,o){return qx.bom.element.Style.get(n,bd,o,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(X,Y){return qx.bom.element.Style.get(X,bh,Y,false);
}:
function(V,W){return qx.bom.element.Style.get(V,bd,W,false);
},"default":function(p,q){return qx.bom.element.Style.get(p,bd,q,false);
}}),setX:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(F,G){if(G==bj){G=bi;
}F.style.overflow=G;
}:
function(bF,bG){bF.style.overflowX=bG;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(R,S){R.style.overflow=S;
}:
function(r,u){r.style.overflowX=u;
},"default":function(cc,cd){cc.style.overflowX=cd;
}}),resetX:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(y){y.style.overflow=bl;
}:
function(j){j.style.overflowX=bl;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,N){M.style.overflow=bl;
}:
function(a,b){a.style.overflowX=bl;
},"default":function(z){z.style.overflowX=bl;
}}),getY:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bA,bB){var bC=qx.bom.element.Style.get(bA,bh,bB,false);

if(bC===bi){bC=bj;
}return bC;
}:
function(bW,bX){return qx.bom.element.Style.get(bW,bf,bX,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(A,B){return qx.bom.element.Style.get(A,bh,B,false);
}:
function(by,bz){return qx.bom.element.Style.get(by,bf,bz,false);
},"default":function(w,x){return qx.bom.element.Style.get(w,bf,x,false);
}}),setY:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(O,P){if(P===bj){P=bi;
}O.style.overflow=P;
}:
function(J,K){J.style.overflowY=K;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bH,bI){bH.style.overflow=bI;
}:
function(H,I){H.style.overflowY=I;
},"default":function(l,m){l.style.overflowY=m;
}}),resetY:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bb){bb.style.overflow=bl;
}:
function(bT){bT.style.overflowY=bl;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bO,bP){bO.style.overflow=bl;
}:
function(bD,bE){bD.style.overflowY=bl;
},"default":function(E){E.style.overflowY=bl;
}})}});
})();
(function(){var m="",k="qx.client",h="userSelect",g="style",f="MozUserModify",e="px",d="float",c="borderImage",b="styleFloat",a="appearance",F="pixelHeight",E='Ms',D=":",C="cssFloat",B="pixelTop",A="pixelLeft",z='O',y="qx.bom.element.Style",x='Khtml',w='string',t="pixelRight",u='Moz',r="pixelWidth",s="pixelBottom",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(y,{statics:{__cu:function(){var X=[a,h,q,c];
var bc={};
var Y=document.documentElement.style;
var bd=[u,o,x,z,E];

for(var i=0,l=X.length;i<l;i++){var be=X[i];
var ba=be;

if(Y[be]){bc[ba]=be;
continue;
}be=qx.lang.String.firstUp(be);

for(var j=0,bf=bd.length;j<bf;j++){var bb=bd[j]+be;

if(typeof Y[bb]==w){bc[ba]=bb;
break;
}}}this.__cv=bc;
this.__cv[n]=qx.core.Variant.select(k,{"gecko":f,"webkit":v,"default":h});
this.__cw={};

for(var ba in bc){this.__cw[ba]=this.__cA(bc[ba]);
}this.__cv[d]=qx.core.Variant.select(k,{"mshtml":b,"default":C});
},__cx:{width:r,height:F,left:A,right:t,top:B,bottom:s},__cy:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(Q){var S=[];
var U=this.__cy;
var T=this.__cw;
var name,R;

for(name in Q){R=Q[name];

if(R==null){continue;
}name=T[name]||name;
if(U[name]){S.push(U[name].compile(R));
}else{S.push(this.__cA(name),D,R,p);
}}return S.join(m);
},__cz:{},__cA:function(bo){var bp=this.__cz;
var bq=bp[bo];

if(!bq){bq=bp[bo]=qx.lang.String.hyphenate(bo);
}return bq;
},setCss:qx.core.Variant.select(k,{"mshtml":function(br,bs){br.style.cssText=bs;
},"default":function(H,I){H.setAttribute(g,I);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(J){return J.style.cssText.toLowerCase();
},"default":function(K){return K.getAttribute(g);
}}),isPropertySupported:function(G){return (this.__cy[G]||this.__cv[G]||G in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bB,name,bC,bD){{};
name=this.__cv[name]||name;
if(bD!==false&&this.__cy[name]){return this.__cy[name].set(bB,bC);
}else{bB.style[name]=bC!==null?bC:m;
}},setStyles:function(bg,bh,bi){{};
var bl=this.__cv;
var bn=this.__cy;
var bj=bg.style;

for(var bm in bh){var bk=bh[bm];
var name=bl[bm]||bm;

if(bk===undefined){if(bi!==false&&bn[name]){bn[name].reset(bg);
}else{bj[name]=m;
}}else{if(bi!==false&&bn[name]){bn[name].set(bg,bk);
}else{bj[name]=bk!==null?bk:m;
}}}},reset:function(V,name,W){name=this.__cv[name]||name;
if(W!==false&&this.__cy[name]){return this.__cy[name].reset(V);
}else{V.style[name]=m;
}},get:qx.core.Variant.select(k,{"mshtml":function(bu,name,bv,bw){name=this.__cv[name]||name;
if(bw!==false&&this.__cy[name]){return this.__cy[name].get(bu,bv);
}if(!bu.currentStyle){return bu.style[name]||m;
}switch(bv){case this.LOCAL_MODE:return bu.style[name]||m;
case this.CASCADED_MODE:return bu.currentStyle[name]||m;
default:var bA=bu.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bA)){return bA;
}var bz=this.__cx[name];

if(bz){var bx=bu.style[name];
bu.style[name]=bA||0;
var by=bu.style[bz]+e;
bu.style[name]=bx;
return by;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bA)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bA;
}},"default":function(L,name,M,N){name=this.__cv[name]||name;
if(N!==false&&this.__cy[name]){return this.__cy[name].get(L,M);
}switch(M){case this.LOCAL_MODE:return L.style[name]||m;
case this.CASCADED_MODE:if(L.currentStyle){return L.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var O=qx.dom.Node.getDocument(L);
var P=O.defaultView.getComputedStyle(L,null);
return P?P[name]:m;
}}})},defer:function(bt){bt.__cu();
}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(m){if(qx.bom.client.Engine.VERSION>=8){return (m||window).document.documentMode===5;
}else{return (m||window).document.compatMode!==f;
}},"webkit":function(j){if(document.compatMode===undefined){var k=(j||window).document.createElement(a);
k.style.cssText=e;
return k.style.width===c?true:false;
}else{return (j||window).document.compatMode!==f;
}},"default":function(n){return (n||window).document.compatMode!==f;
}}),isStandardMode:function(l){return !this.isQuirksMode(l);
},getWidth:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getWidth(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollWidth:p.body.scrollWidth;
return Math.max(scroll,q);
},getHeight:function(g){var h=(g||window).document;
var i=qx.bom.Viewport.getHeight(g);
var scroll=this.isStandardMode(g)?h.documentElement.scrollHeight:h.body.scrollHeight;
return Math.max(scroll,i);
}}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(s){if(qx.bom.client.Engine.VERSION<9.5){return (s||window).document.body.clientWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"webkit":function(q){if(qx.bom.client.Engine.VERSION<523.15){return (q||window).innerWidth;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}},"default":function(a){var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientWidth:b.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(l){if(qx.bom.client.Engine.VERSION<9.5){return (l||window).document.body.clientHeight;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}},"webkit":function(j){if(qx.bom.client.Engine.VERSION<523.15){return (j||window).innerHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientHeight:i.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(f){var g=(f||window).document;
return g.documentElement.scrollLeft||g.body.scrollLeft;
},"default":function(e){return (e||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(o){var p=(o||window).document;
return p.documentElement.scrollTop||p.body.scrollTop;
},"default":function(n){return (n||window).pageYOffset;
}})}});
})();
(function(){var j="qx.client",h="load",g="qx.io.ImageLoader";
qx.Bootstrap.define(g,{statics:{__kI:{},__kJ:{width:null,height:null},__kK:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(r){var s=this.__kI[r];
return !!(s&&s.loaded);
},isFailed:function(u){var v=this.__kI[u];
return !!(v&&v.failed);
},isLoading:function(F){var G=this.__kI[F];
return !!(G&&G.loading);
},getFormat:function(o){var p=this.__kI[o];
return p?p.format:null;
},getSize:function(D){var E=this.__kI[D];
return E?
{width:E.width,height:E.height}:this.__kJ;
},getWidth:function(w){var x=this.__kI[w];
return x?x.width:null;
},getHeight:function(k){var m=this.__kI[k];
return m?m.height:null;
},load:function(a,b,c){var d=this.__kI[a];

if(!d){d=this.__kI[a]={};
}if(b&&!c){c=window;
}if(d.loaded||d.loading||d.failed){if(b){if(d.loading){d.callbacks.push(b,c);
}else{b.call(c,a,d);
}}}else{d.loading=true;
d.callbacks=[];

if(b){d.callbacks.push(b,c);
}var f=new Image();
var e=qx.lang.Function.listener(this.__kL,this,f,a);
f.onload=e;
f.onerror=e;
f.src=a;
}},__kL:qx.event.GlobalError.observeMethod(function(event,y,z){var A=this.__kI[z];
if(event.type===h){A.loaded=true;
A.width=this.__kM(y);
A.height=this.__kN(y);
var B=this.__kK.exec(z);

if(B!=null){A.format=B[1];
}}else{A.failed=true;
}y.onload=y.onerror=null;
var C=A.callbacks;
delete A.loading;
delete A.callbacks;
for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}),__kM:qx.core.Variant.select(j,{"gecko":function(H){return H.naturalWidth;
},"default":function(n){return n.width;
}}),__kN:qx.core.Variant.select(j,{"gecko":function(q){return q.naturalHeight;
},"default":function(t){return t.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__cT:[i,null,h,b,null,j,e,null,j],__cU:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cV:function(F,top){var G=qx.bom.client.Engine;

if(G.GECKO&&G.VERSION<1.9&&F==top&&typeof F==m){top+=0.01;
}
if(F){var H=(typeof F==m)?F+k:F;
}else{H=l;
}
if(top){var I=(typeof top==m)?top+k:top;
}else{I=l;
}return H+d+I;
},compile:function(z,A,B,top){var C=this.__cV(B,top);
var D=qx.util.ResourceManager.getInstance().toUri(z);
var E=this.__cT;
E[1]=D;
E[4]=C;
E[7]=A;
return E.join(g);
},getStyles:function(t,u,v,top){if(!t){return this.__cU;
}var w=this.__cV(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y={backgroundPosition:w,backgroundImage:c+x+f};

if(u!=null){y.backgroundRepeat=u;
}return y;
},set:function(n,o,p,q,top){var r=this.getStyles(o,p,q,top);

for(var s in r){n.style[s]=r[s];
}}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(g){var h={};

if(g){var i=g.colors;
var j=qx.util.ColorUtil;
var k;

for(var l in i){k=i[l];

if(typeof k===b){if(!j.isCssString(k)){throw new Error("Could not parse color: "+k);
}}else if(k instanceof Array){k=j.rgbToRgbString(k);
}else{throw new Error("Could not parse color: "+k);
}h[l]=k;
}}this._setDynamic(h);
},resolve:function(m){var p=this._dynamic;
var n=p[m];

if(n){return n;
}var o=this.getTheme();

if(o!==null&&o.colors[m]){return p[m]=o.colors[m];
}return m;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var s=",",o="rgb(",n=")",m="qx.theme.manager.Color",l="qx.util.ColorUtil";
qx.Class.define(l,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(U){return this.NAMED[U]!==undefined;
},isSystemColor:function(S){return this.SYSTEM[S]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(m);
},isThemedColor:function(W){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(W);
},stringToRgb:function(bd){if(this.supportsThemes()&&this.isThemedColor(bd)){var bd=qx.theme.manager.Color.getInstance().resolveDynamic(bd);
}
if(this.isNamedColor(bd)){return this.NAMED[bd];
}else if(this.isSystemColor(bd)){throw new Error("Could not convert system colors to RGB: "+bd);
}else if(this.isRgbString(bd)){return this.__gn();
}else if(this.isHex3String(bd)){return this.__gp();
}else if(this.isHex6String(bd)){return this.__gq();
}throw new Error("Could not parse color: "+bd);
},cssStringToRgb:function(T){if(this.isNamedColor(T)){return this.NAMED[T];
}else if(this.isSystemColor(T)){throw new Error("Could not convert system colors to RGB: "+T);
}else if(this.isRgbString(T)){return this.__gn();
}else if(this.isRgbaString(T)){return this.__go();
}else if(this.isHex3String(T)){return this.__gp();
}else if(this.isHex6String(T)){return this.__gq();
}throw new Error("Could not parse color: "+T);
},stringToRgbString:function(X){return this.rgbToRgbString(this.stringToRgb(X));
},rgbToRgbString:function(R){return o+R[0]+s+R[1]+s+R[2]+n;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v);
},isCssString:function(w){return this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w);
},isHex3String:function(V){return this.REGEXP.hex3.test(V);
},isHex6String:function(bf){return this.REGEXP.hex6.test(bf);
},isRgbString:function(Y){return this.REGEXP.rgb.test(Y);
},isRgbaString:function(be){return this.REGEXP.rgba.test(be);
},__gn:function(){var bc=parseInt(RegExp.$1,10);
var bb=parseInt(RegExp.$2,10);
var ba=parseInt(RegExp.$3,10);
return [bc,bb,ba];
},__go:function(){var j=parseInt(RegExp.$1,10);
var h=parseInt(RegExp.$2,10);
var e=parseInt(RegExp.$3,10);
return [j,h,e];
},__gp:function(){var d=parseInt(RegExp.$1,16)*17;
var c=parseInt(RegExp.$2,16)*17;
var a=parseInt(RegExp.$3,16)*17;
return [d,c,a];
},__gq:function(){var bi=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var bh=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var bg=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bi,bh,bg];
},hex3StringToRgb:function(x){if(this.isHex3String(x)){return this.__gp(x);
}throw new Error("Invalid hex3 value: "+x);
},hex6StringToRgb:function(E){if(this.isHex6String(E)){return this.__gq(E);
}throw new Error("Invalid hex6 value: "+E);
},hexStringToRgb:function(k){if(this.isHex3String(k)){return this.__gp(k);
}
if(this.isHex6String(k)){return this.__gq(k);
}throw new Error("Invalid hex value: "+k);
},rgbToHsb:function(F){var H,I,K;
var Q=F[0];
var N=F[1];
var G=F[2];
var P=(Q>N)?Q:N;

if(G>P){P=G;
}var J=(Q<N)?Q:N;

if(G<J){J=G;
}K=P/255.0;

if(P!=0){I=(P-J)/P;
}else{I=0;
}
if(I==0){H=0;
}else{var M=(P-Q)/(P-J);
var O=(P-N)/(P-J);
var L=(P-G)/(P-J);

if(Q==P){H=L-O;
}else if(N==P){H=2.0+M-L;
}else{H=4.0+O-M;
}H=H/6.0;

if(H<0){H=H+1.0;
}}return [Math.round(H*360),Math.round(I*100),Math.round(K*100)];
},hsbToRgb:function(y){var i,f,p,q,t;
var z=y[0]/360;
var A=y[1]/100;
var B=y[2]/100;

if(z>=1.0){z%=1.0;
}
if(A>1.0){A=1.0;
}
if(B>1.0){B=1.0;
}var C=Math.floor(255*B);
var D={};

if(A==0.0){D.red=D.green=D.blue=C;
}else{z*=6.0;
i=Math.floor(z);
f=z-i;
p=Math.floor(C*(1.0-A));
q=Math.floor(C*(1.0-(A*f)));
t=Math.floor(C*(1.0-(A*(1.0-f))));

switch(i){case 0:D.red=C;
D.green=t;
D.blue=p;
break;
case 1:D.red=q;
D.green=C;
D.blue=p;
break;
case 2:D.red=p;
D.green=C;
D.blue=t;
break;
case 3:D.red=p;
D.green=q;
D.blue=C;
break;
case 4:D.red=t;
D.green=p;
D.blue=C;
break;
case 5:D.red=C;
D.green=p;
D.blue=q;
break;
}}return [D.red,D.green,D.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(B,C){qx.ui.decoration.Abstract.call(this);
if(B!=null){this.setBorderImage(B);
}
if(C!=null){this.setSlice(C);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__mR:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mR;
},getMarkup:function(){if(this.__mR){return this.__mR;
}var E=this._resolveImageUrl(this.getBorderImage());
var F=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var G=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__mR=[x,qx.bom.element.Style.compile({"borderImage":o+E+p+F.join(f)+f+G,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:F.join(b)+g}),y].join(q);
return this.__mR;
},resize:function(H,I,J){H.style.width=I+g;
H.style.height=J+g;
},tint:function(z,A){},_applyStyle:function(){{};
},_resolveImageUrl:function(D){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(D));
}},destruct:function(){this.__mR=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",x="qx.client",w="-br",v="-t",u="-tl",t="-r",s='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',r="_applyBaseImage",q="-b",p="String",o="",m="-bl",n="qx.ui.decoration.GridDiv",k="-c",l="mshtml";
qx.Class.define(n,{extend:qx.ui.decoration.Abstract,construct:function(M,N){qx.ui.decoration.Abstract.call(this);
if(M!=null){this.setBaseImage(M);
}
if(N!=null){this.setInsets(N);
}},properties:{baseImage:{check:p,nullable:true,apply:r}},members:{__mS:null,__mT:null,__mU:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mS;
},getMarkup:function(){if(this.__mS){return this.__mS;
}var H=qx.bom.element.Decoration;
var I=this.__mT;
var J=this.__mU;
var K=[];
K.push(s);
K.push(H.create(I.tl,g,{top:0,left:0}));
K.push(H.create(I.t,f,{top:0,left:J.left+j}));
K.push(H.create(I.tr,g,{top:0,right:0}));
K.push(H.create(I.bl,g,{bottom:0,left:0}));
K.push(H.create(I.b,f,{bottom:0,left:J.left+j}));
K.push(H.create(I.br,g,{bottom:0,right:0}));
K.push(H.create(I.l,e,{top:J.top+j,left:0}));
K.push(H.create(I.c,a,{top:J.top+j,left:J.left+j}));
K.push(H.create(I.r,e,{top:J.top+j,right:0}));
K.push(b);
return this.__mS=K.join(o);
},resize:function(O,P,Q){var R=this.__mU;
var innerWidth=P-R.left-R.right;
var innerHeight=Q-R.top-R.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}O.style.width=P+j;
O.style.height=Q+j;
O.childNodes[1].style.width=innerWidth+j;
O.childNodes[4].style.width=innerWidth+j;
O.childNodes[7].style.width=innerWidth+j;
O.childNodes[6].style.height=innerHeight+j;
O.childNodes[7].style.height=innerHeight+j;
O.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(x,l)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(P%2==1){O.childNodes[2].style.marginRight=h;
O.childNodes[5].style.marginRight=h;
O.childNodes[8].style.marginRight=h;
}else{O.childNodes[2].style.marginRight=i;
O.childNodes[5].style.marginRight=i;
O.childNodes[8].style.marginRight=i;
}
if(Q%2==1){O.childNodes[3].style.marginBottom=h;
O.childNodes[4].style.marginBottom=h;
O.childNodes[5].style.marginBottom=h;
}else{O.childNodes[3].style.marginBottom=i;
O.childNodes[4].style.marginBottom=i;
O.childNodes[5].style.marginBottom=i;
}}}},tint:function(y,z){},_applyBaseImage:function(A,B){{};

if(A){var F=this._resolveImageUrl(A);
var G=/(.*)(\.[a-z]+)$/.exec(F);
var E=G[1];
var D=G[2];
var C=this.__mT={tl:E+u+D,t:E+v+D,tr:E+d+D,bl:E+m+D,b:E+q+D,br:E+w+D,l:E+c+D,c:E+k+D,r:E+t+D};
this.__mU=this._computeEdgeSizes(C);
}},_resolveImageUrl:function(L){return qx.util.AliasManager.getInstance().resolve(L);
},_computeEdgeSizes:function(S){var T=qx.util.ResourceManager.getInstance();
return {top:T.getImageHeight(S.t),bottom:T.getImageHeight(S.b),left:T.getImageWidth(S.l),right:T.getImageWidth(S.r)};
}},destruct:function(){this.__mS=this.__mT=this.__mU=null;
}});
})();
(function(){var n="ready",m="qx.client",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="qx.application",f="gecko|opera|webkit",d="left",b="DOMContentLoaded",c="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this._window=a.getWindow();
this.__hu=false;
this.__hv=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var A=qx.event.handler.Application.$$instance;

if(A){A.__hy();
}}},members:{canHandleEvent:function(t,u){},registerEvent:function(x,y,z){},unregisterEvent:function(p,q,r){},__hw:null,__hu:null,__hv:null,__hx:null,__hy:function(){if(!this.__hw&&this.__hu&&qx.$$loader.scriptLoaded){try{var s=qx.core.Setting.get(g);

if(!qx.Class.getByName(s)){return;
}}catch(e){}if(qx.core.Variant.isSet(m,l)){if(qx.event.Registration.hasListener(this._window,n)){this.__hw=true;
qx.event.Registration.fireEvent(this._window,n);
}}else{this.__hw=true;
qx.event.Registration.fireEvent(this._window,n);
}}},isApplicationReady:function(){return this.__hw;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==n){this.__hu=true;
this.__hy();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(m,f)){qx.bom.Event.addNativeListener(this._window,b,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(m,l)){var self=this;
var v=function(){try{document.documentElement.doScroll(d);

if(document.body){self._onNativeLoadWrapped();
}}catch(w){window.setTimeout(v,100);
}};
v();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__hu=true;
this.__hy();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__hx){this.__hx=true;

try{qx.event.Registration.fireEvent(this._window,c);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var c="qx.event.handler.Window";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this._manager=d;
this._window=d.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(f,g,h){},unregisterEvent:function(p,q,r){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.addNativeListener(this._window,n,this._onNativeWrapper);
}},_stopWindowObserver:function(){var u=qx.event.handler.Window.SUPPORTED_TYPES;

for(var t in u){qx.bom.Event.removeNativeListener(this._window,t,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var j=this._window;

try{var m=j.document;
}catch(e){return ;
}var k=m.documentElement;
var i=e.target||e.srcElement;

if(i==null||i===j||i===m||i===k){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,j]);
qx.event.Registration.dispatchEvent(j,event);
var l=event.getReturnValue();

if(l!=null){e.returnValue=l;
return l;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__jR||null;
},ready:function(){if(this.__jR){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var k=qx.core.Setting.get(d);
var l=qx.Class.getByName(k);

if(l){this.__jR=new l;
var j=new Date;
this.__jR.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-j)+"ms");
var j=new Date;
this.__jR.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-j)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+k);
}},__jS:function(e){var g=this.__jR;

if(g){e.setReturnValue(g.close());
}},__jT:function(){var i=this.__jR;

if(i){i.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,f,h.ready,h);
qx.event.Registration.addListener(window,a,h.__jT,h);
qx.event.Registration.addListener(window,c,h.__jS,h);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(e,f,g){var h=qx.locale.Manager;

if(h){return h.trc.apply(h,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(i){var j=qx.locale.Manager;

if(j){return j.marktr.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__mQ:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__mQ;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__mQ=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__mQ=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var G="_consoleButton",F="_reloadButton",E="_inspectButton",D="index.html",C="console",B="execute",A="_objectsButton",z="_propertyButton",y="load",x="changeInspected",Y="_container",X="_seleniumButton",W="url",V="..",U="",T="_widgetsButton",S="_selectedWidgetLabel",R="_toolbar",Q="inspector.Application",P="__NP",N="_iFrame",O="_consoleWindow",L="inspector/css/propertylisthtml.css",M="inspector/css/domview.css",J="inspector/css/consoleview.css",K="hidden",H="inspector/css/sourceview.css",I="_urlTextField";
qx.Class.define(Q,{extend:qx.application.Standalone,construct:function(){qx.application.Standalone.call(this);
qx.bom.Stylesheet.includeFile(M);
qx.bom.Stylesheet.includeFile(J);
qx.bom.Stylesheet.includeFile(H);
qx.bom.Stylesheet.includeFile(L);
},members:{__NO:null,_toolbar:null,_objectsButton:null,_widgetsButton:null,_consoleButton:null,_propertyButton:null,_seleniumButton:null,_inspectButton:null,_selectedWidgetLabel:null,_urlTextField:null,_reloadButton:null,_consoleWindow:null,_container:null,_iFrame:null,_loading:null,__NP:null,_loadedWindow:null,__NQ:null,__NR:null,main:function(){qx.application.Standalone.prototype.main.call(this);
{};
this.__NQ=new inspector.components.InspectorModel(this);
this.__NQ.addListener(x,this.__NY,this);
this.__NP=new inspector.components.Selector(this.__NQ);
this.__NR=new inspector.components.State();
this.__NR.setIgnoreChanges(true);
this._container=new qx.ui.container.Composite(new qx.ui.layout.VBox());
this.getRoot().add(this._container,{edge:0});
this.__NV();
this.__NX(false);
var bb=V;
var ba=qx.bom.Cookie.get(W);

if(ba==undefined||ba==U){ba=bb;
}
if(window.qxinspector!=undefined&&qxinspector.local){this._urlTextField.setVisibility(K);
bb=D;
}else{bb=ba;
}this._loading=true;
this._iFrame=new qx.ui.embed.Iframe(bb);
this._iFrame.setDecorator(null);
this._container.add(this._iFrame,{flex:1});
this._iFrame.addListener(y,this.__NS,this);
this._urlTextField.setValue(bb);
},__NS:function(){this.__NO=0;
this.__NQ.setWindow(null);
this.__NQ.setInspected(null);
this.__NT();
var o=this._iFrame.getSource();

try{o=this._iFrame.getWindow().location.pathname;
}catch(f){}
if(window.qxinspector==undefined){this._urlTextField.setValue(o);
}qx.bom.Cookie.set("url",o,7);
},__NT:function(){this._loadedWindow=this._iFrame.getContentElement().getWindow();
this.__NX(false);
if(!this.__NU()){return;
}this.__NX(true);
this._loading=false;
this.__NQ.setWindow(this._loadedWindow);
this.__NQ.setInspected(this._loadedWindow.qx.core.Init.getApplication().getRoot());
this.__NR.setIgnoreChanges(false);
this.__NR.restoreState();
},__NU:function(){try{this.__NO++;
if(this.__NO>30){throw new Error("qooxdoo not found!");
}
try{this._loadedWindow.qx.core.Init.getApplication().getRoot();
return true;
}catch(n){qx.event.Timer.once(this.__NT,this,500);
throw new Error("qooxdoo isn't ready at the moment!");
}}catch(p){this._selectedWidgetLabel.setValue(" Can not access the javascript in the iframe!");
this.__NQ.setWindow(null);
return false;
}},__NV:function(){this._toolbar=new qx.ui.toolbar.ToolBar();
this._toolbar.setDecorator("myToolbar");
this._toolbar._getLayout().setAlignY("middle");
this._container.add(this._toolbar);
var h=new qx.ui.basic.Label("qooxdoo Inspector");
h.setPaddingLeft(10);
h.setPaddingRight(5);
var g=new qx.bom.Font(12,["Lucida Grande"]);
g.setBold(true);
g.setItalic(true);
h.setFont(g);
this._toolbar.add(h);
this._toolbar.add(new qx.ui.toolbar.Separator());
this.__NW("Objects",inspector.objects.Window,"_objectsButton");
this.__NW("Widgets",inspector.widgets.WidgetsWindow,"_widgetsButton");
this.__NW("Properties",inspector.property.PropertyWindow,"_propertyButton");
this._consoleWindow=this.__NW("Console",inspector.console.ConsoleWindow,"_consoleButton");
this.__NW("Selenium",inspector.selenium.SeleniumWindow,"_seleniumButton");
this._toolbar.add(new qx.ui.toolbar.Separator());
this._inspectButton=new qx.ui.toolbar.CheckBox("Inspect widget","inspector/images/icons/edit-find.png");
this._inspectButton.setAppearance("toolbar-button-bold");
this._toolbar.add(this._inspectButton);
this._inspectButton.addListener("changeValue",function(e){if(e.getData()){this.__NP.start();
}else{this.__NP.stop();
}},this);
this._selectedWidgetLabel=new qx.ui.basic.Label();
this._selectedWidgetLabel.setRich(true);
this._toolbar.add(this._selectedWidgetLabel);
this._toolbar.addSpacer();
this._urlTextField=new qx.ui.form.TextField();
this._urlTextField.setMarginRight(5);
this._urlTextField.setWidth(300);
this._toolbar.add(this._urlTextField);
this._urlTextField.addListener("changeValue",this._reloadIframe,this);
this._reloadButton=new qx.ui.toolbar.Button(null,"icon/16/actions/view-refresh.png");
this._toolbar.add(this._reloadButton);
this._reloadButton.addListener("execute",this._reloadIframe,this);
},_reloadIframe:function(e){this._loading=true;
var m=this._iFrame.getSource();

try{m=this._iFrame.getWindow().location.pathname;
}catch(t){}
if(m!=this._urlTextField.getValue()){this._iFrame.setSource(this._urlTextField.getValue());
}else{if(e.getType()==B){if(this._iFrame.getSource!=m){this._iFrame.setSource(m);
}else{this._iFrame.reload();
}}}},__NW:function(name,a,b){var c=new a(name,this.__NQ);
this.__NR.add(c,name.toLowerCase());
var d=this[b]=new qx.ui.toolbar.CheckBox(name);
this._toolbar.add(d);
d.addListener("changeValue",function(e){e.getData()?c.open():c.close();
},this);
d.addListener("changeEnabled",function(e){if(e.getData()==false){c.hide();
}},this);
c.addListener("open",function(e){d.setValue(true);
},this);
c.addListener("close",function(e){d.setValue(false);
},this);
return c;
},__NX:function(i){this._objectsButton.setEnabled(i);
this._widgetsButton.setEnabled(i);
this._consoleButton.setEnabled(i);
this._propertyButton.setEnabled(i);
this._seleniumButton.setEnabled(i);
this._inspectButton.setEnabled(i);
this._selectedWidgetLabel.setEnabled(i);
},__NY:function(e){this._inspectButton.setValue(false);
var l=e.getData();

if(l!=null){this._selectedWidgetLabel.setValue("<tt>"+l.classname+"["+l.toHashCode()+"]</tt>");
}},getSelectedObject:function(){return this.__NQ.getInspected();
},setWidgetByHash:function(u,v){if(v==C){v=this._consoleWindow;
this._consoleWindow.goToDefaultView();
}var w=this._loadedWindow.qx.core.ObjectRegistry.fromHashCode(u);
this.__NQ.setInspected(w);
},inspectObjectByDomSelecet:function(j,k){if(this._consoleWindow!=null){this._consoleWindow.inspectObjectByDomSelecet(j,k);
}},inspectObjectByInternalId:function(s){if(this._consoleWindow!=null){this._consoleWindow.inspectObjectByInternalId(s);
}},select:function(q,r){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
if(this._loading||!q){return;
}this.__NQ.setInspected(q);
},getIframeWindowObject:function(){return this._loadedWindow;
}},destruct:function(){this._loadedWindow=null;
this._disposeObjects(Y,R,A,T,z,G,X,E,S,I,F,N,P,O);
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){qx.event.type.Event.prototype.init.call(this,e,f);
this._target=c||qx.bom.Event.getTarget(b);
this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);

if(b.timeStamp){this._timeStamp=b.timeStamp;
}this._native=b;
this._returnValue=null;
return this;
},clone:function(j){var k=qx.event.type.Event.prototype.clone.call(this,j);
var l={};
k._native=this._cloneNativeEvent(this._native,l);
k._returnValue=this._returnValue;
return k;
},_cloneNativeEvent:function(h,i){i.preventDefault=qx.lang.Function.empty;
return i;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(g){this._returnValue=g;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(g,h){var k=null;
var n=null;
var q=null;
var r=null;
var m=null;

if(g){k=g.meta.color||null;
n=g.meta.decoration||null;
q=g.meta.font||null;
r=g.meta.icon||null;
m=g.meta.appearance||null;
}var o=qx.theme.manager.Color.getInstance();
var p=qx.theme.manager.Decoration.getInstance();
var i=qx.theme.manager.Font.getInstance();
var l=qx.theme.manager.Icon.getInstance();
var j=qx.theme.manager.Appearance.getInstance();
o.setTheme(k);
p.setTheme(n);
i.setTheme(q);
l.setTheme(r);
j.setTheme(m);
},initialize:function(){var t=qx.core.Setting;
var s,u;
s=t.get(e);

if(s){u=qx.Theme.getByName(s);

if(!u){throw new Error("The theme to use is not available: "+s);
}this.setTheme(u);
}}},settings:{"qx.theme":c}});
})();
(function(){var h="object",g="_applyTheme",f="qx.theme.manager.Decoration",e="Theme",d="__ct",c="changeTheme",b="string",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,properties:{theme:{check:e,nullable:true,apply:g,event:c}},members:{__ct:null,resolve:function(k){if(!k){return null;
}
if(typeof k===h){return k;
}var n=this.getTheme();

if(!n){return null;
}var n=this.getTheme();

if(!n){return null;
}var o=this.__ct;

if(!o){o=this.__ct={};
}var l=o[k];

if(l){return l;
}var m=n.decorations[k];

if(!m){return null;
}var p=m.decorator;

if(p==null){throw new Error("Missing definition of which decorator to use in entry: "+k+"!");
}return o[k]=(new p).set(m.style);
},isValidPropertyValue:function(u){if(typeof u===b){return this.isDynamic(u);
}else if(typeof u===h){var v=u.constructor;
return qx.Class.hasInterface(v,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(i){if(!i){return false;
}var j=this.getTheme();

if(!j){return false;
}return !!j.decorations[i];
},_applyTheme:function(q,r){var t=qx.util.AliasManager.getInstance();

if(r){for(var s in r.aliases){t.remove(s);
}}
if(q){for(var s in q.aliases){t.add(s,q.aliases[s]);
}}
if(!q){this.__ct={};
}}},destruct:function(){this._disposeMap(d);
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(u){var v=this._dynamic;
return u instanceof qx.bom.Font?u:v[u];
},resolve:function(n){var q=this._dynamic;
var o=q[n];

if(o){return o;
}var p=this.getTheme();

if(p!==null&&p.fonts[n]){return q[n]=(new qx.bom.Font).set(p.fonts[n]);
}return n;
},isDynamic:function(r){var t=this._dynamic;

if(r&&(r instanceof qx.bom.Font||t[r]!==undefined)){return true;
}var s=this.getTheme();

if(s!==null&&r&&s.fonts[r]){t[r]=(new qx.bom.Font).set(s.fonts[r]);
return true;
}return false;
},__hz:function(f,g){if(f[g].include){var h=f[f[g].include];
f[g].include=null;
delete f[g].include;
f[g]=qx.lang.Object.mergeWith(f[g],h,false);
this.__hz(f,g);
}},_applyTheme:function(i){var j=this._getDynamic();

for(var m in j){if(j[m].themed){j[m].dispose();
delete j[m];
}}
if(i){var k=i.fonts;
var l=qx.bom.Font;

for(var m in k){if(k[m].include&&k[k[m].include]){this.__hz(k,m);
}j[m]=(new l).set(k[m]);
j[m].themed=true;
}}this._setDynamic(j);
}}});
})();
(function(){var o="",n="underline",m="Boolean",k="px",j='"',h="italic",g="normal",f="bold",e="_applyItalic",d="_applyBold",A="Integer",z="_applyFamily",y="_applyLineHeight",x="Array",w="overline",v="line-through",u="qx.bom.Font",t="Number",s="_applyDecoration",r=" ",p="_applySize",q=",";
qx.Class.define(u,{extend:qx.core.Object,construct:function(J,K){qx.core.Object.call(this);

if(J!==undefined){this.setSize(J);
}
if(K!==undefined){this.setFamily(K);
}},statics:{fromString:function(L){var P=new qx.bom.Font();
var N=L.split(/\s+/);
var name=[];
var O;

for(var i=0;i<N.length;i++){switch(O=N[i]){case f:P.setBold(true);
break;
case h:P.setItalic(true);
break;
case n:P.setDecoration(n);
break;
default:var M=parseInt(O,10);

if(M==O||qx.lang.String.contains(O,k)){P.setSize(M);
}else{name.push(O);
}break;
}}
if(name.length>0){P.setFamily(name);
}return P;
},fromConfig:function(B){var C=new qx.bom.Font;
C.set(B);
return C;
},__cB:{fontFamily:o,fontSize:o,fontWeight:o,fontStyle:o,textDecoration:o,lineHeight:1.2},getDefaultStyles:function(){return this.__cB;
}},properties:{size:{check:A,nullable:true,apply:p},lineHeight:{check:t,nullable:true,apply:y},family:{check:x,nullable:true,apply:z},bold:{check:m,nullable:true,apply:d},italic:{check:m,nullable:true,apply:e},decoration:{check:[n,v,w],nullable:true,apply:s}},members:{__cC:null,__cD:null,__cE:null,__cF:null,__cG:null,__cH:null,_applySize:function(S,T){this.__cC=S===null?null:S+k;
},_applyLineHeight:function(D,E){this.__cH=D===null?null:D;
},_applyFamily:function(a,b){var c=o;

for(var i=0,l=a.length;i<l;i++){if(a[i].indexOf(r)>0){c+=j+a[i]+j;
}else{c+=a[i];
}
if(i!==l-1){c+=q;
}}this.__cD=c;
},_applyBold:function(Q,R){this.__cE=Q===null?null:Q?f:g;
},_applyItalic:function(H,I){this.__cF=H===null?null:H?h:g;
},_applyDecoration:function(F,G){this.__cG=F===null?null:F;
},getStyles:function(){return {fontFamily:this.__cD,fontSize:this.__cC,fontWeight:this.__cE,fontStyle:this.__cF,textDecoration:this.__cG,lineHeight:this.__cH};
}}});
})();
(function(){var a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(r){{};

for(var s in r){if(r.hasOwnProperty(s)){delete r[s];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(g){{};
return g.__count__===0;
}:
function(D){{};

for(var E in D){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(B,C){{};
return B.__count__>=C;
}:
function(t,u){{};

if(u<=0){return true;
}var length=0;

for(var v in t){if((++length)>=u){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(h){{};
var k=[];
var j=this.getKeys(h);

for(var i=0,l=j.length;i<l;i++){k.push(h[j[i]]);
}return k;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(F,G){{};
return qx.lang.Object.mergeWith(F,G,false);
},merge:function(w,x){{};
var y=arguments.length;

for(var i=1;i<y;i++){qx.lang.Object.mergeWith(w,arguments[i]);
}return w;
},clone:function(m){{};
var n={};

for(var o in m){n[o]=m[o];
}return n;
},invert:function(H){{};
var I={};

for(var J in H){I[H[J].toString()]=J;
}return I;
},getKeyFromValue:function(d,e){{};

for(var f in d){if(d.hasOwnProperty(f)&&d[f]===e){return f;
}}return null;
},contains:function(p,q){{};
return this.getKeyFromValue(p,q)!==null;
},select:function(b,c){{};
return c[b];
},fromArray:function(z){{};
var A={};

for(var i=0,l=z.length;i<l;i++){{};
A[z[i].toString()]=true;
}return A;
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__dF={};
this.__dG={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__dH:{},__dF:null,__dG:null,_applyTheme:function(M,N){this.__dG={};
this.__dF={};
},__dI:function(A,B,C){var H=B.appearances;
var K=H[A];

if(!K){var L=b;
var E=[];
var J=A.split(L);
var I;

while(!K&&J.length>0){E.unshift(J.pop());
var F=J.join(L);
K=H[F];

if(K){I=K.alias||K;

if(typeof I===h){var G=I+L+E.join(L);
return this.__dI(G,B,C);
}}}for(var i=0;i<E.length-1;i++){E.shift();
var F=E.join(L);
var D=this.__dI(F,B);

if(D){return D;
}}if(C!=null){return this.__dI(C,B);
}return null;
}else if(typeof K===h){return this.__dI(K,B,C);
}else if(K.include&&!K.style){return this.__dI(K.include,B,C);
}return A;
},styleFrom:function(j,k,l,m){if(!l){l=this.getTheme();
}var s=this.__dG;
var n=s[j];

if(!n){n=s[j]=this.__dI(j,l,m);
}var x=l.appearances[n];

if(!x){this.warn("Missing appearance: "+j);
return null;
}if(!x.style){return null;
}var y=n;

if(k){var z=x.$$bits;

if(!z){z=x.$$bits={};
x.$$length=0;
}var q=0;

for(var t in k){if(!k[t]){continue;
}
if(z[t]==null){z[t]=1<<x.$$length++;
}q+=z[t];
}if(q>0){y+=e+q;
}}var r=this.__dF;

if(r[y]!==undefined){return r[y];
}if(!k){k=this.__dH;
}var v;
if(x.include||x.base){var p=x.style(k);
var o;

if(x.include){o=this.styleFrom(x.include,k,l,m);
}v={};
if(x.base){var u=this.styleFrom(n,k,x.base,m);

if(x.include){for(var w in u){if(!o.hasOwnProperty(w)&&!p.hasOwnProperty(w)){v[w]=u[w];
}}}else{for(var w in u){if(!p.hasOwnProperty(w)){v[w]=u[w];
}}}}if(x.include){for(var w in o){if(!p.hasOwnProperty(w)){v[w]=o[w];
}}}for(var w in p){v[w]=p[w];
}}else{v=x.style(k);
}return r[y]=v||null;
}},destruct:function(){this.__dF=this.__dG=null;
}});
})();
(function(){var w="Boolean",v="focusout",u="interval",t="mouseover",s="mouseout",r="mousemove",q="__qk",p="widget",o="Use isShowInvalidToolTips() instead.",n="qx.ui.tooltip.ToolTip",g="Use setShowInvalidToolTips() instead.",m="Use initShowInvalidToolTips() instead.",j="Use resetShowInvalidToolTips() instead.",d="__ql",c="_applyCurrent",i="__qn",h="qx.ui.tooltip.Manager",k="tooltip-error",b="Use toggleShowInvalidToolTips() instead.",l="singleton",f="Use getShowInvalidToolTips() instead.";
qx.Class.define(h,{type:l,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,t,this.__qu,this,true);
this.__qk=new qx.event.Timer();
this.__qk.addListener(u,this.__qr,this);
this.__ql=new qx.event.Timer();
this.__ql.addListener(u,this.__qs,this);
this.__qm={left:0,top:0};
},properties:{current:{check:n,nullable:true,apply:c},showInvalidToolTips:{check:w,init:true},showToolTips:{check:w,init:true}},members:{__qm:null,__ql:null,__qk:null,__qn:null,__qo:null,__qp:function(){if(!this.__qn){this.__qn=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__qn;
},__qq:function(){if(!this.__qo){this.__qo=new qx.ui.tooltip.ToolTip().set({appearance:k});
this.__qo.syncAppearance();
}return this.__qo;
},_applyCurrent:function(K,L){if(L&&qx.ui.core.Widget.contains(L,K)){return;
}if(L){if(!L.isDisposed()){L.exclude();
}this.__qk.stop();
this.__ql.stop();
}var N=qx.event.Registration;
var M=document.body;
if(K){this.__qk.startWith(K.getShowTimeout());
N.addListener(M,s,this.__qv,this,true);
N.addListener(M,v,this.__qw,this,true);
N.addListener(M,r,this.__qt,this,true);
}else{N.removeListener(M,s,this.__qv,this,true);
N.removeListener(M,v,this.__qw,this,true);
N.removeListener(M,r,this.__qt,this,true);
}},__qr:function(e){var G=this.getCurrent();

if(G&&!G.isDisposed()){this.__ql.startWith(G.getHideTimeout());

if(G.getPlaceMethod()==p){G.placeToWidget(G.getOpener());
}else{G.placeToPoint(this.__qm);
}G.show();
}this.__qk.stop();
},__qs:function(e){var a=this.getCurrent();

if(a&&!a.isDisposed()){a.exclude();
}this.__ql.stop();
this.resetCurrent();
},__qt:function(e){var x=this.__qm;
x.left=e.getDocumentLeft();
x.top=e.getDocumentTop();
},__qu:function(e){var B=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!B){return;
}var C,D,A,z;
while(B!=null){C=B.getToolTip();
D=B.getToolTipText()||null;
A=B.getToolTipIcon()||null;

if(qx.Class.hasInterface(B.constructor,qx.ui.form.IForm)&&!B.isValid()){z=B.getInvalidMessage();
}
if(C||D||A||z){break;
}B=B.getLayoutParent();
}if(!B||
!B.getEnabled()||
B.isBlockToolTip()||
(!z&&!this.getShowToolTips())||(z&&!this.getShowInvalidToolTips())){return;
}
if(z){C=this.__qq().set({label:z});
}
if(!C){C=this.__qp().set({label:D,icon:A});
}this.setCurrent(C);
C.setOpener(B);
},__qv:function(e){var H=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!H){return;
}var I=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!I){return;
}var J=this.getCurrent();
if(J&&(I==J||qx.ui.core.Widget.contains(J,I))){return;
}if(I&&H&&qx.ui.core.Widget.contains(H,I)){return;
}if(J&&!I){this.setCurrent(null);
}else{this.resetCurrent();
}},__qw:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!E){return;
}var F=this.getCurrent();
if(F&&F==E.getToolTip()){this.setCurrent(null);
}},setShowInvalidTooltips:function(y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.setShowInvalidToolTips(y);
},getShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.getShowInvalidToolTips();
},resetShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.resetShowInvalidToolTips();
},isShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
return this.isShowInvalidToolTips();
},toggleShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return this.toggleShowInvalidToolTips();
},initShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,m);
return this.initShowInvalidToolTips();
}},destruct:function(){qx.event.Registration.removeListener(document.body,t,this.__qu,this,true);
this._disposeObjects(q,d,i);
this.__qm=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(m){qx.core.Object.call(this);
this.setEnabled(false);

if(m!=null){this.setInterval(m);
}var self=this;
this.__er=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(p,q,r){var s=new qx.event.Timer(r);
s.__es=p;
s.addListener(h,function(e){s.stop();
p.call(q,e);
s.dispose();
q=null;
},q);
s.start();
return s;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__et:null,__er:null,_applyInterval:function(i,j){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(n,o){if(o){window.clearInterval(this.__et);
this.__et=null;
}else if(n){this.__et=window.setInterval(this.__er,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(l){this.setInterval(l);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(k){this.stop();
this.startWith(k);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__et){window.clearInterval(this.__et);
}this.__et=this.__er=null;
}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(e){return this._indexOf(e);
},add:function(m,n){this._add(m,n);
},addAt:function(b,c,d){this._addAt(b,c,d);
},addBefore:function(f,g,h){this._addBefore(f,g,h);
},addAfter:function(i,j,k){this._addAfter(i,j,k);
},remove:function(p){this._remove(p);
},removeAt:function(l){return this._removeAt(l);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(o){o.getChildren=o._getChildren;
o.hasChildren=o._hasChildren;
o.indexOf=o._indexOf;
o.add=o._add;
o.addAt=o._addAt;
o.addBefore=o._addBefore;
o.addAfter=o._addAfter;
o.remove=o._remove;
o.removeAt=o._removeAt;
o.removeAll=o._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var o="Integer",n="_applyDimension",m="Boolean",l="_applyStretching",k="_applyMargin",j="shorthand",i="_applyAlign",h="allowShrinkY",g="bottom",f="baseline",C="marginBottom",B="qx.ui.core.LayoutItem",A="center",z="marginTop",y="allowGrowX",x="middle",w="marginLeft",v="allowShrinkX",u="top",t="right",r="marginRight",s="abstract",p="allowGrowY",q="left";
qx.Class.define(B,{type:s,extend:qx.core.Object,properties:{minWidth:{check:o,nullable:true,apply:n,init:null,themeable:true},width:{check:o,nullable:true,apply:n,init:null,themeable:true},maxWidth:{check:o,nullable:true,apply:n,init:null,themeable:true},minHeight:{check:o,nullable:true,apply:n,init:null,themeable:true},height:{check:o,nullable:true,apply:n,init:null,themeable:true},maxHeight:{check:o,nullable:true,apply:n,init:null,themeable:true},allowGrowX:{check:m,apply:l,init:true,themeable:true},allowShrinkX:{check:m,apply:l,init:true,themeable:true},allowGrowY:{check:m,apply:l,init:true,themeable:true},allowShrinkY:{check:m,apply:l,init:true,themeable:true},allowStretchX:{group:[y,v],mode:j,themeable:true},allowStretchY:{group:[p,h],mode:j,themeable:true},marginTop:{check:o,init:0,apply:k,themeable:true},marginRight:{check:o,init:0,apply:k,themeable:true},marginBottom:{check:o,init:0,apply:k,themeable:true},marginLeft:{check:o,init:0,apply:k,themeable:true},margin:{group:[z,r,C,w],mode:j,themeable:true},alignX:{check:[q,A,t],nullable:true,apply:i,themeable:true},alignY:{check:[u,x,g,f],nullable:true,apply:i,themeable:true}},members:{__fp:null,__fq:null,__fr:null,__fs:null,__ft:null,__fu:null,__fv:null,getBounds:function(){return this.__fu||this.__fq||null;
},clearSeparators:function(){},renderSeparator:function(a,b){},renderLayout:function(W,top,X,Y){var ba;
{};
var bb=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bb=this._getHeightForWidth(X);
}
if(bb!=null&&bb!==this.__fp){this.__fp=bb;
qx.ui.core.queue.Layout.add(this);
return null;
}var bd=this.__fq;

if(!bd){bd=this.__fq={};
}var bc={};

if(W!==bd.left||top!==bd.top){bc.position=true;
bd.left=W;
bd.top=top;
}
if(X!==bd.width||Y!==bd.height){bc.size=true;
bd.width=X;
bd.height=Y;
}if(this.__fr){bc.local=true;
delete this.__fr;
}
if(this.__ft){bc.margin=true;
delete this.__ft;
}return bc;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__fr;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__fr=true;
this.__fs=null;
},getSizeHint:function(O){var P=this.__fs;

if(P){return P;
}
if(O===false){return null;
}P=this.__fs=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__fp&&this.getHeight()==null){P.height=this.__fp;
}if(P.minWidth>P.width){P.width=P.minWidth;
}
if(P.maxWidth<P.width){P.width=P.maxWidth;
}
if(!this.getAllowGrowX()){P.maxWidth=P.width;
}
if(!this.getAllowShrinkX()){P.minWidth=P.width;
}if(P.minHeight>P.height){P.height=P.minHeight;
}
if(P.maxHeight<P.height){P.height=P.maxHeight;
}
if(!this.getAllowGrowY()){P.maxHeight=P.height;
}
if(!this.getAllowShrinkY()){P.minHeight=P.height;
}return P;
},_computeSizeHint:function(){var L=this.getMinWidth()||0;
var I=this.getMinHeight()||0;
var M=this.getWidth()||L;
var K=this.getHeight()||I;
var H=this.getMaxWidth()||Infinity;
var J=this.getMaxHeight()||Infinity;
return {minWidth:L,width:M,maxWidth:H,minHeight:I,height:K,maxHeight:J};
},_hasHeightForWidth:function(){var N=this._getLayout();

if(N){return N.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(F){var G=this._getLayout();

if(G&&G.hasHeightForWidth()){return G.getHeightForWidth(F);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__ft=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__fu;
},setUserBounds:function(c,top,d,e){this.__fu={left:c,top:top,width:d,height:e};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__fu;
qx.ui.core.queue.Layout.add(this);
},__fw:{},setLayoutProperties:function(Q){if(Q==null){return;
}var R=this.__fv;

if(!R){R=this.__fv={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(Q);
}for(var S in Q){if(Q[S]==null){delete R[S];
}else{R[S]=Q[S];
}}},getLayoutProperties:function(){return this.__fv||this.__fw;
},clearLayoutProperties:function(){delete this.__fv;
},updateLayoutProperties:function(T){var U=this._getLayout();

if(U){var V;
{};
U.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var D=qx.core.Object.prototype.clone.call(this);
var E=this.__fv;

if(E){D.__fv=qx.lang.Object.clone(E);
}return D;
}},destruct:function(){this.$$parent=this.$$subparent=this.__fv=this.__fq=this.__fu=this.__fs=null;
}});
})();
(function(){var h="qx.ui.core.DecoratorFactory",g="$$nopool$$";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cO={};
},statics:{MAX_SIZE:15,__cP:g},members:{__cO:null,getDecoratorElement:function(a){var f=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(a)){var d=a;
var c=qx.theme.manager.Decoration.getInstance().resolve(a);
}else{var d=f.__cP;
c=a;
}var e=this.__cO;

if(e[d]&&e[d].length>0){var b=e[d].pop();
}else{var b=this._createDecoratorElement(c,d);
}b.$$pooled=false;
return b;
},poolDecorator:function(n){if(!n||n.$$pooled||n.isDisposed()){return;
}var q=qx.ui.core.DecoratorFactory;
var o=n.getId();

if(o==q.__cP){n.dispose();
return;
}var p=this.__cO;

if(!p[o]){p[o]=[];
}
if(p[o].length>q.MAX_SIZE){n.dispose();
}else{n.$$pooled=true;
p[o].push(n);
}},_createDecoratorElement:function(k,l){var m=new qx.html.Decorator(k,l);
{};
return m;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var j=this.__cO;

for(var i in j){qx.util.DisposeUtil.disposeArray(j,i);
}}this.__cO=null;
}});
})();
(function(){var et="px",es="Boolean",er="qx.event.type.Drag",eq="qx.event.type.Mouse",ep="visible",eo="qx.event.type.Focus",en="on",em="Integer",ek="excluded",ej="qx.event.type.Data",dU="_applyPadding",dT="qx.event.type.Event",dS="hidden",dR="contextmenu",dQ="String",dP="tabIndex",dO="focused",dN="changeVisibility",dM="mshtml",dL="hovered",eA="qx.event.type.KeySequence",eB="qx.client",ey="absolute",ez="backgroundColor",ew="drag",ex="div",eu="disabled",ev="move",eC="dragstart",eD="qx.dynlocale",ec="dragchange",eb="dragend",ee="resize",ed="Decorator",eg="zIndex",ef="opacity",ei="default",eh="Color",ea="changeToolTipText",dY="beforeContextmenuOpen",cB="_applyNativeContextMenu",cC="__dP",cD="_applyBackgroundColor",cE="_applyFocusable",cF="changeShadow",cG="qx.event.type.KeyInput",cH="__dX",cI="createChildControl",cJ="__dQ",cK="Font",eH="_applyShadow",eG="__dT",eF="_applyEnabled",eE="_applySelectable",eL="Number",eK="_applyKeepActive",eJ="_applyVisibility",eI="repeat",eN="qxDraggable",eM="syncAppearance",dk="paddingLeft",dl="_applyDroppable",di="#",dj="qx.event.type.MouseWheel",dp="_applyCursor",dq="_applyDraggable",dm="__dL",dn="changeTextColor",dg="$$widget",dh="changeContextMenu",cS="paddingTop",cR="changeSelectable",cU="hideFocus",cT="none",cO="outline",cN="_applyAppearance",cQ="_applyOpacity",cP="url(",cM=")",cL="qx.ui.core.Widget",dv="_applyFont",dw="cursor",dx="qxDroppable",dy="changeZIndex",dr="changeEnabled",ds="changeFont",dt="__dK",du="_applyDecorator",dz="_applyZIndex",dA="_applyTextColor",dd="qx.ui.menu.Menu",dc="_applyToolTipText",db="true",da="widget",cY="__dO",cX="changeDecorator",cW="__dV",cV="_applyTabIndex",df="changeAppearance",de="shorthand",dB="/",dC="",dD="_applyContextMenu",dE="paddingBottom",dF="changeNativeContextMenu",dG="qx.ui.tooltip.ToolTip",dH="qxKeepActive",dI="_applyKeepFocus",dJ="paddingRight",dK="changeBackgroundColor",dX="changeLocale",dW="qxKeepFocus",dV="qx/static/blank.gif";
qx.Class.define(cL,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__dK=this._createContainerElement();
this.__dL=this.__dW();
this.__dK.add(this.__dL);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:dT,disappear:dT,createChildControl:ej,resize:ej,move:ej,syncAppearance:ej,mousemove:eq,mouseover:eq,mouseout:eq,mousedown:eq,mouseup:eq,click:eq,dblclick:eq,contextmenu:eq,beforeContextmenuOpen:ej,mousewheel:dj,keyup:eA,keydown:eA,keypress:eA,keyinput:cG,focus:eo,blur:eo,focusin:eo,focusout:eo,activate:eo,deactivate:eo,capture:dT,losecapture:dT,drop:er,dragleave:er,dragover:er,drag:er,dragstart:er,dragend:er,dragchange:er,droprequest:er},properties:{paddingTop:{check:em,init:0,apply:dU,themeable:true},paddingRight:{check:em,init:0,apply:dU,themeable:true},paddingBottom:{check:em,init:0,apply:dU,themeable:true},paddingLeft:{check:em,init:0,apply:dU,themeable:true},padding:{group:[cS,dJ,dE,dk],mode:de,themeable:true},zIndex:{nullable:true,init:null,apply:dz,event:dy,check:em,themeable:true},decorator:{nullable:true,init:null,apply:du,event:cX,check:ed,themeable:true},shadow:{nullable:true,init:null,apply:eH,event:cF,check:ed,themeable:true},backgroundColor:{nullable:true,check:eh,apply:cD,event:dK,themeable:true},textColor:{nullable:true,check:eh,apply:dA,event:dn,themeable:true,inheritable:true},font:{nullable:true,apply:dv,check:cK,event:ds,themeable:true,inheritable:true,dereference:true},opacity:{check:eL,apply:cQ,themeable:true,nullable:true,init:null},cursor:{check:dQ,apply:dp,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:dG,nullable:true},toolTipText:{check:dQ,nullable:true,event:ea,apply:dc},toolTipIcon:{check:dQ,nullable:true,event:ea},blockToolTip:{check:es,init:false},visibility:{check:[ep,dS,ek],init:ep,apply:eJ,event:dN},enabled:{init:true,check:es,inheritable:true,apply:eF,event:dr},anonymous:{init:false,check:es},tabIndex:{check:em,nullable:true,apply:cV},focusable:{check:es,init:false,apply:cE},keepFocus:{check:es,init:false,apply:dI},keepActive:{check:es,init:false,apply:eK},draggable:{check:es,init:false,apply:dq},droppable:{check:es,init:false,apply:dl},selectable:{check:es,init:false,event:cR,apply:eE},contextMenu:{check:dd,apply:dD,nullable:true,event:dh},nativeContextMenu:{check:es,init:false,themeable:true,event:dF,apply:cB},appearance:{check:dQ,init:da,apply:cN,event:df}},statics:{DEBUG:false,getWidgetByElement:function(bT,bU){while(bT){var bV=bT.$$widget;
if(bV!=null){var bW=qx.core.ObjectRegistry.fromHashCode(bV);
if(!bU||!bW.getAnonymous()){return bW;
}}try{bT=bT.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,gO){while(gO){if(parent==gO){return true;
}gO=gO.getLayoutParent();
}return false;
},__dM:new qx.ui.core.DecoratorFactory(),__dN:new qx.ui.core.DecoratorFactory()},members:{__dK:null,__dL:null,__dO:null,__dP:null,__dQ:null,__dR:null,__dS:null,__dT:null,_getLayout:function(){return this.__dT;
},_setLayout:function(gR){{};

if(this.__dT){this.__dT.connectToWidget(null);
}
if(gR){gR.connectToWidget(this);
}this.__dT=gR;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var co=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(co);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(co);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dU:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var L=qx.theme.manager.Decoration.getInstance();
var N=L.resolve(a).getInsets();
var M=L.resolve(b).getInsets();

if(N.top!=M.top||N.right!=M.right||N.bottom!=M.bottom||N.left!=M.left){return true;
}return false;
},renderLayout:function(fL,top,fM,fN){var fW=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,fL,top,fM,fN);
if(!fW){return null;
}var fP=this.getContainerElement();
var content=this.getContentElement();
var fT=fW.size||this._updateInsets;
var fX=et;
var fU={};
if(fW.position){fU.left=fL+fX;
fU.top=top+fX;
}if(fW.size){fU.width=fM+fX;
fU.height=fN+fX;
}
if(fW.position||fW.size){fP.setStyles(fU);
}
if(fT||fW.local||fW.margin){var fO=this.getInsets();
var innerWidth=fM-fO.left-fO.right;
var innerHeight=fN-fO.top-fO.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var fR={};

if(this._updateInsets){fR.left=fO.left+fX;
fR.top=fO.top+fX;
}
if(fT){fR.width=innerWidth+fX;
fR.height=innerHeight+fX;
}
if(fT||this._updateInsets){content.setStyles(fR);
}
if(fW.size){var fV=this.__dQ;

if(fV){fV.setStyles({width:fM+et,height:fN+et});
}}
if(fW.size||this._updateInsets){if(this.__dO){this.__dO.resize(fM,fN);
}}
if(fW.size){if(this.__dP){var fO=this.__dP.getInsets();
var fS=fM+fO.left+fO.right;
var fQ=fN+fO.top+fO.bottom;
this.__dP.resize(fS,fQ);
}}
if(fT||fW.local||fW.margin){if(this.__dT&&this.hasLayoutChildren()){this.__dT.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(fW.position&&this.hasListener(ev)){this.fireDataEvent(ev,this.getBounds());
}
if(fW.size&&this.hasListener(ee)){this.fireDataEvent(ee,this.getBounds());
}delete this._updateInsets;
return fW;
},__dV:null,clearSeparators:function(){var R=this.__dV;

if(!R){return;
}var S=qx.ui.core.Widget.__dM;
var content=this.getContentElement();
var Q;

for(var i=0,l=R.length;i<l;i++){Q=R[i];
S.poolDecorator(Q);
content.remove(Q);
}R.length=0;
},renderSeparator:function(fg,fh){var fi=qx.ui.core.Widget.__dM.getDecoratorElement(fg);
this.getContentElement().add(fi);
fi.resize(fh.width,fh.height);
fi.setStyles({left:fh.left+et,top:fh.top+et});
if(!this.__dV){this.__dV=[fi];
}else{this.__dV.push(fi);
}},_computeSizeHint:function(){var gl=this.getWidth();
var gk=this.getMinWidth();
var gg=this.getMaxWidth();
var gj=this.getHeight();
var gh=this.getMinHeight();
var gi=this.getMaxHeight();
{};
var gm=this._getContentHint();
var gf=this.getInsets();
var go=gf.left+gf.right;
var gn=gf.top+gf.bottom;

if(gl==null){gl=gm.width+go;
}
if(gj==null){gj=gm.height+gn;
}
if(gk==null){gk=go;

if(gm.minWidth!=null){gk+=gm.minWidth;
}}
if(gh==null){gh=gn;

if(gm.minHeight!=null){gh+=gm.minHeight;
}}
if(gg==null){if(gm.maxWidth==null){gg=Infinity;
}else{gg=gm.maxWidth+go;
}}
if(gi==null){if(gm.maxHeight==null){gi=Infinity;
}else{gi=gm.maxHeight+gn;
}}return {width:gl,minWidth:gk,maxWidth:gg,height:gj,minHeight:gh,maxHeight:gi};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__dT){this.__dT.invalidateLayoutCache();
}},_getContentHint:function(){var bY=this.__dT;

if(bY){if(this.hasLayoutChildren()){var bX;
var ca=bY.getSizeHint();
{};
return ca;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(bc){var bg=this.getInsets();
var bj=bg.left+bg.right;
var bi=bg.top+bg.bottom;
var bh=bc-bj;
var be=this._getLayout();

if(be&&be.hasHeightForWidth()){var bd=be.getHeightForWidth(bc);
}else{bd=this._getContentHeightForWidth(bh);
}var bf=bd+bi;
return bf;
},_getContentHeightForWidth:function(gF){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var bq=this.getPaddingRight();
var bs=this.getPaddingBottom();
var br=this.getPaddingLeft();

if(this.__dO){var bp=this.__dO.getInsets();
{};
top+=bp.top;
bq+=bp.right;
bs+=bp.bottom;
br+=bp.left;
}return {"top":top,"right":bq,"bottom":bs,"left":br};
},getInnerSize:function(){var P=this.getBounds();

if(!P){return null;
}var O=this.getInsets();
return {width:P.width-O.left-O.right,height:P.height-O.top-O.bottom};
},show:function(){this.setVisibility(ep);
},hide:function(){this.setVisibility(dS);
},exclude:function(){this.setVisibility(ek);
},isVisible:function(){return this.getVisibility()===ep;
},isHidden:function(){return this.getVisibility()!==ep;
},isExcluded:function(){return this.getVisibility()===ek;
},isSeeable:function(){var bw=this.getContainerElement().getDomElement();

if(bw){return bw.offsetWidth>0;
}var bv=this;

do{if(!bv.isVisible()){return false;
}
if(bv.isRootWidget()){return true;
}bv=bv.getLayoutParent();
}while(bv);
return false;
},_createContainerElement:function(){var eP={"$$widget":this.toHashCode()};
{};
var eO={zIndex:0,position:ey};
return new qx.html.Element(ex,eO,eP);
},__dW:function(){var fH=this._createContentElement();
{};
fH.setStyles({"position":ey,"zIndex":10});
return fH;
},_createContentElement:function(){return new qx.html.Element(ex,{overflowX:dS,overflowY:dS});
},getContainerElement:function(){return this.__dK;
},getContentElement:function(){return this.__dL;
},getDecoratorElement:function(){return this.__dO||null;
},getShadowElement:function(){return this.__dP||null;
},__dX:null,getLayoutChildren:function(){var E=this.__dX;

if(!E){return this.__dY;
}var F;

for(var i=0,l=E.length;i<l;i++){var D=E[i];

if(D.hasUserBounds()||D.isExcluded()){if(F==null){F=E.concat();
}qx.lang.Array.remove(F,D);
}}return F||E;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var gN=this.__dT;

if(gN){gN.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var gp=this.__dX;

if(!gp){return false;
}var gq;

for(var i=0,l=gp.length;i<l;i++){gq=gp[i];

if(!gq.hasUserBounds()&&!gq.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dY:[],_getChildren:function(){return this.__dX||this.__dY;
},_indexOf:function(ba){var bb=this.__dX;

if(!bb){return -1;
}return bb.indexOf(ba);
},_hasChildren:function(){var cA=this.__dX;
return cA!=null&&(!!cA[0]);
},addChildrenToQueue:function(I){var J=this.__dX;

if(!J){return;
}var K;

for(var i=0,l=J.length;i<l;i++){K=J[i];
I[K.$$hash]=K;
K.addChildrenToQueue(I);
}},_add:function(bD,bE){if(bD.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,bD);
}
if(this.__dX){this.__dX.push(bD);
}else{this.__dX=[bD];
}this.__ea(bD,bE);
},_addAt:function(gW,gX,gY){if(!this.__dX){this.__dX=[];
}if(gW.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,gW);
}var ha=this.__dX[gX];

if(ha===gW){gW.setLayoutProperties(gY);
}
if(ha){qx.lang.Array.insertBefore(this.__dX,gW,ha);
}else{this.__dX.push(gW);
}this.__ea(gW,gY);
},_addBefore:function(ch,ci,cj){{};

if(ch==ci){return;
}
if(!this.__dX){this.__dX=[];
}if(ch.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,ch);
}qx.lang.Array.insertBefore(this.__dX,ch,ci);
this.__ea(ch,cj);
},_addAfter:function(eS,eT,eU){{};

if(eS==eT){return;
}
if(!this.__dX){this.__dX=[];
}if(eS.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,eS);
}qx.lang.Array.insertAfter(this.__dX,eS,eT);
this.__ea(eS,eU);
},_remove:function(bx){if(!this.__dX){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dX,bx);
this.__eb(bx);
},_removeAt:function(gA){if(!this.__dX){throw new Error("This widget has no children!");
}var gB=this.__dX[gA];
qx.lang.Array.removeAt(this.__dX,gA);
this.__eb(gB);
return gB;
},_removeAll:function(){if(!this.__dX){return;
}var bC=this.__dX.concat();
this.__dX.length=0;

for(var i=bC.length-1;i>=0;i--){this.__eb(bC[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__ea:function(fD,fE){{};
var parent=fD.getLayoutParent();

if(parent&&parent!=this){parent._remove(fD);
}fD.setLayoutParent(this);
if(fE){fD.setLayoutProperties(fE);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(fD);
}},__eb:function(bB){{};

if(bB.getLayoutParent()!==this){throw new Error("Remove Error: "+bB+" is not a child of this widget!");
}bB.setLayoutParent(null);
if(this.__dT){this.__dT.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(bB);
}},capture:function(cx){this.getContainerElement().capture(cx);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(c,d,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dQ){return;
}var bk=this.__dQ=new qx.html.Element;
{};
bk.setStyles({position:ey,top:0,left:0,zIndex:7});
var bl=this.getBounds();

if(bl){this.__dQ.setStyles({width:bl.width+et,height:bl.height+et});
}if(qx.core.Variant.isSet(eB,dM)){bk.setStyles({backgroundImage:cP+qx.util.ResourceManager.getInstance().toUri(dV)+cM,backgroundRepeat:eI});
}this.getContainerElement().add(bk);
},_applyDecorator:function(fY,ga){{};
var gd=qx.ui.core.Widget.__dM;
var gb=this.getContainerElement();
if(!this.__dQ&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(ga){gb.remove(this.__dO);
gd.poolDecorator(this.__dO);
}if(fY){var gc=this.__dO=gd.getDecoratorElement(fY);
gc.setStyle(eg,5);
gb.add(gc);
}else{delete this.__dO;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__dU(ga,fY)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(fY){var ge=this.getBounds();

if(ge){gc.resize(ge.width,ge.height);
this.__dQ&&
this.__dQ.setStyles({width:ge.width+et,height:ge.height+et});
}}},_applyShadow:function(eW,eX){var ff=qx.ui.core.Widget.__dN;
var fa=this.getContainerElement();
if(eX){fa.remove(this.__dP);
ff.poolDecorator(this.__dP);
}if(eW){var fc=this.__dP=ff.getDecoratorElement(eW);
fa.add(fc);
var fe=fc.getInsets();
fc.setStyles({left:(-fe.left)+et,top:(-fe.top)+et});
var fd=this.getBounds();

if(fd){var fb=fd.width+fe.left+fe.right;
var eY=fd.height+fe.top+fe.bottom;
fc.resize(fb,eY);
}fc.tint(null);
}else{delete this.__dP;
}},_applyToolTipText:function(fI,fJ){if(qx.core.Variant.isSet(eD,en)){if(this.__dS){return;
}var fK=qx.locale.Manager.getInstance();
this.__dS=fK.addListener(dX,function(){var bm=this.getToolTipText();

if(bm&&bm.translate){this.setToolTipText(bm.translate());
}},this);
}},_applyTextColor:function(X,Y){},_applyZIndex:function(w,x){this.getContainerElement().setStyle(eg,w==null?0:w);
},_applyVisibility:function(bP,bQ){var bR=this.getContainerElement();

if(bP===ep){bR.show();
}else{bR.hide();
}var parent=this.$$parent;

if(parent&&(bQ==null||bP==null||bQ===ek||bP===ek)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(gC,gD){this.getContainerElement().setStyle(ef,gC==1?null:gC);
if(qx.core.Variant.isSet(eB,dM)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var gE=(gC==1||gC==null)?null:0.99;
this.getContentElement().setStyle(ef,gE);
}}},_applyCursor:function(gP,gQ){if(gP==null&&!this.isSelectable()){gP=ei;
}this.getContainerElement().setStyle(dw,gP,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(fv,fw){var fx=this.getBackgroundColor();
var fz=this.getContainerElement();

if(this.__dO){this.__dO.tint(fx);
fz.setStyle(ez,null);
}else{var fy=qx.theme.manager.Color.getInstance().resolve(fx);
fz.setStyle(ez,fy);
}},_applyFont:function(fF,fG){},__ec:null,$$stateChanges:null,_forwardStates:null,hasState:function(ft){var fu=this.__ec;
return !!fu&&!!fu[ft];
},addState:function(cp){var cq=this.__ec;

if(!cq){cq=this.__ec={};
}
if(cq[cp]){return;
}this.__ec[cp]=true;
if(cp===dL){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var ct=this.__ef;

if(forward&&forward[cp]&&ct){var cr;

for(var cs in ct){cr=ct[cs];

if(cr instanceof qx.ui.core.Widget){ct[cs].addState(cp);
}}}},removeState:function(y){var z=this.__ec;

if(!z||!z[y]){return;
}delete this.__ec[y];
if(y===dL){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var C=this.__ef;

if(forward&&forward[y]&&C){for(var B in C){var A=C[B];

if(A instanceof qx.ui.core.Widget){A.removeState(y);
}}}},replaceState:function(fl,fm){var fn=this.__ec;

if(!fn){fn=this.__ec={};
}
if(!fn[fm]){fn[fm]=true;
}
if(fn[fl]){delete fn[fl];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fq=this.__ef;

if(forward&&forward[fm]&&fq){for(var fp in fq){var fo=fq[fp];

if(fo instanceof qx.ui.core.Widget){fo.replaceState(fl,fm);
}}}},__ed:null,__ee:null,syncAppearance:function(){var bJ=this.__ec;
var bI=this.__ed;
var bK=qx.theme.manager.Appearance.getInstance();
var bG=qx.core.Property.$$method.setThemed;
var bO=qx.core.Property.$$method.resetThemed;
if(this.__ee){delete this.__ee;
if(bI){var bF=bK.styleFrom(bI,bJ,null,this.getAppearance());
if(bF){bI=null;
}}}if(!bI){var bH=this;
var bN=[];

do{bN.push(bH.$$subcontrol||bH.getAppearance());
}while(bH=bH.$$subparent);
bI=this.__ed=bN.reverse().join(dB).replace(/#[0-9]+/g,dC);
}var bL=bK.styleFrom(bI,bJ,null,this.getAppearance());

if(bL){var bM;

if(bF){for(var bM in bF){if(bL[bM]===undefined){this[bO[bM]]();
}}}{};
for(var bM in bL){bL[bM]===undefined?this[bO[bM]]():this[bG[bM]](bL[bM]);
}}else if(bF){for(var bM in bF){this[bO[bM]]();
}}this.fireDataEvent(eM,this.__ec);
},_applyAppearance:function(T,U){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dR){qx.ui.core.queue.Appearance.add(this);
this.__dR=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__ee=true;
qx.ui.core.queue.Appearance.add(this);
var gx=this.__ef;

if(gx){var gv;

for(var gw in gx){gv=gx[gw];

if(gv instanceof qx.ui.core.Widget){gv.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var hb=this;

while(hb.getAnonymous()){hb=hb.getLayoutParent();

if(!hb){return null;
}}return hb;
},getFocusTarget:function(){var fA=this;

if(!fA.getEnabled()){return null;
}
while(fA.getAnonymous()||!fA.getFocusable()){fA=fA.getLayoutParent();

if(!fA||!fA.getEnabled()){return null;
}}return fA;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(f,g){var h=this.getFocusElement();
if(f){var j=this.getTabIndex();

if(j==null){j=1;
}h.setAttribute(dP,j);
if(qx.core.Variant.isSet(eB,dM)){h.setAttribute(cU,db);
}else{h.setStyle(cO,cT);
}}else{if(h.isNativelyFocusable()){h.setAttribute(dP,-1);
}else if(g){h.setAttribute(dP,null);
}}},_applyKeepFocus:function(cm){var cn=this.getFocusElement();
cn.setAttribute(dW,cm?en:null);
},_applyKeepActive:function(by){var bz=this.getContainerElement();
bz.setAttribute(dH,by?en:null);
},_applyTabIndex:function(bA){if(bA==null){bA=1;
}else if(bA<1||bA>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&bA!=null){this.getFocusElement().setAttribute(dP,bA);
}},_applySelectable:function(V,W){if(W!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(V);
this.getContentElement().setSelectable(V);
},_applyEnabled:function(ck,cl){if(ck===false){this.addState(eu);
this.removeState(dL);
if(this.isFocusable()){this.removeState(dO);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(eu);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(u,v,name){},_applyContextMenu:function(cy,cz){if(cz){cz.removeState(dR);

if(cz.getOpener()==this){cz.resetOpener();
}
if(!cy){this.removeListener(dR,this._onContextMenuOpen);
cz.removeListener(dN,this._onBeforeContextMenuOpen,this);
}}
if(cy){cy.setOpener(this);
cy.addState(dR);

if(!cz){this.addListener(dR,this._onContextMenuOpen);
cy.addListener(dN,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==ep&&this.hasListener(dY)){this.fireDataEvent(dY,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(cv,cw){if(!this.isEnabled()&&cv===true){cv=false;
}qx.ui.core.DragDropCursor.getInstance();
if(cv){this.addListener(eC,this._onDragStart);
this.addListener(ew,this._onDrag);
this.addListener(eb,this._onDragEnd);
this.addListener(ec,this._onDragChange);
}else{this.removeListener(eC,this._onDragStart);
this.removeListener(ew,this._onDrag);
this.removeListener(eb,this._onDragEnd);
this.removeListener(ec,this._onDragChange);
}this.getContainerElement().setAttribute(eN,cv?en:null);
},_applyDroppable:function(gS,gT){if(!this.isEnabled()&&gS===true){gS=false;
}this.getContainerElement().setAttribute(dx,gS?en:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(ei);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var k=qx.ui.core.DragDropCursor.getInstance();
var m=e.getCurrentAction();
m?k.setAction(m):k.resetAction();
},visualizeFocus:function(){this.addState(dO);
},visualizeBlur:function(){this.removeState(dO);
},scrollChildIntoView:function(gJ,gK,gL,gM){this.scrollChildIntoViewX(gJ,gK,gM);
this.scrollChildIntoViewY(gJ,gL,gM);
},scrollChildIntoViewX:function(ce,cf,cg){this.getContentElement().scrollChildIntoViewX(ce.getContainerElement(),cf,cg);
},scrollChildIntoViewY:function(gG,gH,gI){this.getContentElement().scrollChildIntoViewY(gG.getContainerElement(),gH,gI);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(cu){if(!this.__ef){return false;
}return !!this.__ef[cu];
},__ef:null,_getCreatedChildControls:function(){return this.__ef;
},getChildControl:function(cb,cc){if(!this.__ef){if(cc){return null;
}this.__ef={};
}var cd=this.__ef[cb];

if(cd){return cd;
}
if(cc===true){return null;
}return this._createChildControl(cb);
},_showChildControl:function(n){var o=this.getChildControl(n);
o.show();
return o;
},_excludeChildControl:function(eQ){var eR=this.getChildControl(eQ,true);

if(eR){eR.exclude();
}},_isChildControlVisible:function(gy){var gz=this.getChildControl(gy,true);

if(gz){return gz.isVisible();
}return false;
},_createChildControl:function(p){if(!this.__ef){this.__ef={};
}else if(this.__ef[p]){throw new Error("Child control '"+p+"' already created!");
}var t=p.indexOf(di);

if(t==-1){var q=this._createChildControlImpl(p);
}else{var q=this._createChildControlImpl(p.substring(0,t));
}
if(!q){throw new Error("Unsupported control: "+p);
}q.$$subcontrol=p;
q.$$subparent=this;
var r=this.__ec;
var forward=this._forwardStates;

if(r&&forward&&q instanceof qx.ui.core.Widget){for(var s in r){if(forward[s]){q.addState(s);
}}}this.fireDataEvent(cI,q);
return this.__ef[p]=q;
},_createChildControlImpl:function(eV){return null;
},_disposeChildControls:function(){var gu=this.__ef;

if(!gu){return;
}var gs=qx.ui.core.Widget;

for(var gt in gu){var gr=gu[gt];

if(!gs.contains(this,gr)){gr.destroy();
}else{gr.dispose();
}}delete this.__ef;
},_findTopControl:function(){var bS=this;

while(bS){if(!bS.$$subparent){return bS;
}bS=bS.$$subparent;
}return null;
},getContainerLocation:function(bt){var bu=this.getContainerElement().getDomElement();
return bu?qx.bom.element.Location.get(bu,bt):null;
},getContentLocation:function(bn){var bo=this.getContentElement().getDomElement();
return bo?qx.bom.element.Location.get(bo,bn):null;
},setDomLeft:function(fB){var fC=this.getContainerElement().getDomElement();

if(fC){fC.style.left=fB+et;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(fr){var fs=this.getContainerElement().getDomElement();

if(fs){fs.style.top=fr+et;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(G,top){var H=this.getContainerElement().getDomElement();

if(H){H.style.left=G+et;
H.style.top=top+et;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fj=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var fk=this.getChildren();

for(var i=0,l=fk.length;i<l;i++){fj.add(fk[i].clone());
}}return fj;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(eD,en)){if(this.__dS){qx.locale.Manager.getInstance().removeListenerById(this.__dS);
}}this.getContainerElement().setAttribute(dg,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var gV=qx.ui.core.Widget;
var gU=this.getContainerElement();

if(this.__dO){gU.remove(this.__dO);
gV.__dM.poolDecorator(this.__dO);
}
if(this.__dP){gU.remove(this.__dP);
gV.__dN.poolDecorator(this.__dP);
}this.clearSeparators();
this.__dO=this.__dP=this.__dV=null;
}else{this._disposeArray(cW);
this._disposeObjects(cY,cC);
}this._disposeArray(cH);
this.__ec=this.__ef=null;
this._disposeObjects(eG,dt,dm,cJ);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(g){qx.ui.core.Widget.call(this);

if(g!=null){this._setLayout(g);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
},_afterRemoveChild:function(e){this.fireNonBubblingEvent(a,qx.event.type.Data,[e]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__ib:null,__ic:null,__id:null,getLayoutLocation:function(O){var R,Q,S,top;
Q=O.getBounds();
S=Q.left;
top=Q.top;
var T=Q;
O=O.getLayoutParent();

while(O&&!O.isRootWidget()){Q=O.getBounds();
S+=Q.left;
top+=Q.top;
R=O.getInsets();
S+=R.left;
top+=R.top;
O=O.getLayoutParent();
}if(O.isRootWidget()){var P=O.getContainerLocation();

if(P){S+=P.left;
top+=P.top;
}}return {left:S,top:top,right:S+T.width,bottom:top+T.height};
},moveTo:function(E,top){if(this.getDomMove()){this.setDomPosition(E,top);
}else{this.setLayoutProperties({left:E,top:top});
}},placeToWidget:function(H,I){if(I){this.__ie();
this.__ib=qx.lang.Function.bind(this.placeToWidget,this,H,false);
qx.event.Idle.getInstance().addListener(i,this.__ib);
this.__id=function(){this.__ie();
};
this.addListener(g,this.__id,this);
}var J=H.getContainerLocation()||this.getLayoutLocation(H);
this.__ig(J);
},__ie:function(){if(this.__ib){qx.event.Idle.getInstance().removeListener(i,this.__ib);
this.__ib=null;
}
if(this.__id){this.removeListener(g,this.__id,this);
this.__id=null;
}},placeToMouse:function(event){var L=event.getDocumentLeft();
var top=event.getDocumentTop();
var K={left:L,top:top,right:L,bottom:top};
this.__ig(K);
},placeToElement:function(y,z){var location=qx.bom.element.Location.get(y);
var A={left:location.left,top:location.top,right:location.left+y.offsetWidth,bottom:location.top+y.offsetHeight};
if(z){this.__ib=qx.lang.Function.bind(this.placeToElement,this,y,false);
qx.event.Idle.getInstance().addListener(i,this.__ib);
this.addListener(g,function(){if(this.__ib){qx.event.Idle.getInstance().removeListener(i,this.__ib);
this.__ib=null;
}},this);
}this.__ig(A);
},placeToPoint:function(B){var C={left:B.left,top:B.top,right:B.left,bottom:B.top};
this.__ig(C);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__if:function(F){var G=null;

if(this._computePlacementSize){var G=this._computePlacementSize();
}else if(this.isVisible()){var G=this.getBounds();
}
if(G==null){this.addListenerOnce(q,function(){this.__if(F);
},this);
}else{F.call(this,G);
}},__ig:function(D){this.__if(function(M){var N=qx.util.placement.Placement.compute(M,this.getLayoutParent().getBounds(),D,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(N.left,N.top);
});
}},destruct:function(){this.__ie();
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(x,y){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(x!=null){this.setLabel(x);
}
if(y!=null){this.setIcon(y);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(s){var t;

switch(s){case l:t=new qx.ui.basic.Atom;
this._add(t);
break;
}return t||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,s);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(m,n){var o=this.getChildControl(l);
m==null?o.resetIcon():o.setIcon(m);
},_applyLabel:function(p,q){var r=this.getChildControl(l);
p==null?r.resetLabel():r.setLabel(p);
},_applyRich:function(u,v){var w=this.getChildControl(l);
w.setRich(u);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__hq:{},remove:function(z){delete this.__hq[z.$$hash];
},add:function(A){this.__hq[A.$$hash]=A;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var p=this.__ht();
for(var i=p.length-1;i>=0;i--){var q=p[i];
if(q.hasValidLayout()){continue;
}if(q.isRootWidget()&&!q.hasUserBounds()){var s=q.getSizeHint();
q.renderLayout(0,0,s.width,s.height);
}else{var r=q.getBounds();
q.renderLayout(r.left,r.top,r.width,r.height);
}}},getNestingLevel:function(c){var d=this.__hs;
var f=0;
var parent=c;
while(true){if(d[parent.$$hash]!=null){f+=d[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
f+=1;
}var e=f;

while(c&&c!==parent){d[c.$$hash]=e--;
c=c.$$parent;
}return f;
},__hr:function(){var y=qx.ui.core.queue.Visibility;
this.__hs={};
var x=[];
var w=this.__hq;
var t,v;

for(var u in w){t=w[u];

if(y.isVisible(t)){v=this.getNestingLevel(t);
if(!x[v]){x[v]={};
}x[v][u]=t;
delete w[u];
}}return x;
},__ht:function(){var k=[];
var m=this.__hr();

for(var j=m.length-1;j>=0;j--){if(!m[j]){continue;
}
for(var h in m[j]){var g=m[j][h];
if(j==0||g.isRootWidget()||g.hasUserBounds()){k.push(g);
g.invalidateLayoutCache();
continue;
}var o=g.getSizeHint(false);

if(o){g.invalidateLayoutCache();
var l=g.getSizeHint();
var n=(!g.getBounds()||o.minWidth!==l.minWidth||o.width!==l.width||o.maxWidth!==l.maxWidth||o.minHeight!==l.minHeight||o.height!==l.height||o.maxHeight!==l.maxHeight);
}else{n=true;
}
if(n){var parent=g.getLayoutParent();

if(!m[j-1]){m[j-1]={};
}m[j-1][parent.$$hash]=parent;
}else{k.push(g);
}}}return k;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__jY=k;
this.__ka=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jY:null,__ka:null,canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},destruct:function(){this.__jY=this.__ka=null;
},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__fK={};
this.__fL=qx.lang.Function.bind(this.__fP,this);
this.__fM=false;
},members:{__fN:null,__fO:null,__fK:null,__fM:null,__fL:null,schedule:function(c){if(this.__fN==null){this.__fN=window.setTimeout(this.__fL,0);
}var d=c.toHashCode();
if(this.__fO&&this.__fO[d]){return;
}this.__fK[d]=c;
this.__fM=true;
},cancel:function(g){var h=g.toHashCode();
if(this.__fO&&this.__fO[h]){this.__fO[h]=null;
return;
}delete this.__fK[h];
if(qx.lang.Object.isEmpty(this.__fK)&&this.__fN!=null){window.clearTimeout(this.__fN);
this.__fN=null;
}},__fP:qx.event.GlobalError.observeMethod(function(){this.__fN=null;
while(this.__fM){this.__fO=qx.lang.Object.clone(this.__fK);
this.__fK={};
this.__fM=false;

for(var f in this.__fO){var e=this.__fO[f];

if(e){this.__fO[f]=null;
e.call();
}}}this.__fO=null;
})},destruct:function(){if(this.__fN!=null){window.clearTimeout(this.__fN);
}this.__fL=this.__fK=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){qx.core.Object.call(this);
this.__hl=d;
this.__hm=e||null;
this.__hn=qx.util.DeferredCallManager.getInstance();
},members:{__hl:null,__hm:null,__hn:null,cancel:function(){this.__hn.cancel(this);
},schedule:function(){this.__hn.schedule(this);
},call:function(){this.__hm?this.__hl.apply(this.__hm):this.__hl();
}},destruct:function(b,c){this.cancel();
this.__hm=this.__hl=this.__hn=null;
}});
})();
(function(){var cW="element",cV="qx.client",cU="qxSelectable",cT="off",cS="on",cR="div",cQ="",cP="mshtml",cO="none",cN="scroll",dr="text",dq="qx.html.Element",dp="|capture|",dn="activate",dm="blur",dl="deactivate",dk="capture",dj="userSelect",di="-moz-none",dh="visible",df="releaseCapture",dg="|bubble|",dd="tabIndex",de="focus",da="MozUserSelect",dc="normal",cX="__dt",cY="hidden";
qx.Class.define(dq,{extend:qx.core.Object,construct:function(bh,bi,bj){qx.core.Object.call(this);
this.__cW=bh||cR;
this.__cX=bi||null;
this.__cY=bj||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__da:{},_scheduleFlush:function(V){qx.html.Element.__dE.schedule();
},flush:function(){var p;
{};
var f=this.__db();
var d=f.getFocus();

if(d&&this.__df(d)){f.blur(d);
}var w=f.getActive();

if(w&&this.__df(w)){qx.bom.Element.deactivate(w);
}var j=this.__dd();

if(j&&this.__df(j)){qx.bom.Element.releaseCapture(j);
}var q=[];
var r=this._modified;

for(var o in r){p=r[o];
if(p.__dx()){if(p.__dg&&qx.dom.Hierarchy.isRendered(p.__dg)){q.push(p);
}else{{};
p.__dw();
}delete r[o];
}}
for(var i=0,l=q.length;i<l;i++){p=q[i];
{};
p.__dw();
}var m=this._visibility;

for(var o in m){p=m[o];
var s=p.__dg;

if(!s){delete m[o];
continue;
}{};
if(!p.$$disposed){s.style.display=p.__dj?cQ:cO;
if(qx.core.Variant.isSet(cV,cP)){if(!(document.documentMode>=8)){s.style.visibility=p.__dj?dh:cY;
}}}delete m[o];
}var scroll=this._scroll;

for(var o in scroll){p=scroll[o];
var z=p.__dg;

if(z&&z.offsetWidth){var h=true;
if(p.__dm!=null){p.__dg.scrollLeft=p.__dm;
delete p.__dm;
}if(p.__dn!=null){p.__dg.scrollTop=p.__dn;
delete p.__dn;
}var t=p.__dk;

if(t!=null){var n=t.element.getDomElement();

if(n&&n.offsetWidth){qx.bom.element.Scroll.intoViewX(n,z,t.align);
delete p.__dk;
}else{h=false;
}}var u=p.__dl;

if(u!=null){var n=u.element.getDomElement();

if(n&&n.offsetWidth){qx.bom.element.Scroll.intoViewY(n,z,u.align);
delete p.__dl;
}else{h=false;
}}if(h){delete scroll[o];
}}}var g={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var v=this._actions[i];
var s=v.element.__dg;

if(!s||!g[v.type]&&!v.element.__dx()){continue;
}var k=v.args;
k.unshift(s);
qx.bom.Element[v.type].apply(qx.bom.Element,k);
}this._actions=[];
for(var o in this.__da){var c=this.__da[o];
var z=c.element.__dg;

if(z){qx.bom.Selection.set(z,c.start,c.end);
delete this.__da[o];
}}qx.event.handler.Appear.refresh();
},__db:function(){if(!this.__dc){var bU=qx.event.Registration.getManager(window);
this.__dc=bU.getHandler(qx.event.handler.Focus);
}return this.__dc;
},__dd:function(){if(!this.__de){var dz=qx.event.Registration.getManager(window);
this.__de=dz.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__de.getCaptureElement();
},__df:function(T){var U=qx.core.ObjectRegistry.fromHashCode(T.$$element);
return U&&!U.__dx();
}},members:{__cW:null,__dg:null,__dh:false,__di:true,__dj:true,__dk:null,__dl:null,__dm:null,__dn:null,__do:null,__dp:null,__dq:null,__cX:null,__cY:null,__dr:null,__ds:null,__dt:null,__du:null,__dv:null,_scheduleChildrenUpdate:function(){if(this.__du){return;
}this.__du=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
},_createDomElement:function(){return qx.bom.Element.create(this.__cW);
},__dw:function(){{};
var a=this.__dt;

if(a){var length=a.length;
var b;

for(var i=0;i<length;i++){b=a[i];

if(b.__dj&&b.__di&&!b.__dg){b.__dw();
}}}
if(!this.__dg){this.__dg=this._createDomElement();
this.__dg.$$element=this.$$hash;
this._copyData(false);

if(a&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__du){this._syncChildren();
}}delete this.__du;
},_insertChildren:function(){var ci=this.__dt;
var length=ci.length;
var ck;

if(length>2){var cj=document.createDocumentFragment();

for(var i=0;i<length;i++){ck=ci[i];

if(ck.__dg&&ck.__di){cj.appendChild(ck.__dg);
}}this.__dg.appendChild(cj);
}else{var cj=this.__dg;

for(var i=0;i<length;i++){ck=ci[i];

if(ck.__dg&&ck.__di){cj.appendChild(ck.__dg);
}}}},_syncChildren:function(){var cw;
var cB=qx.core.ObjectRegistry;
var cs=this.__dt;
var cz=cs.length;
var ct;
var cx;
var cv=this.__dg;
var cy=cv.childNodes;
var cu=0;
var cA;
{};
for(var i=cy.length-1;i>=0;i--){cA=cy[i];
cx=cB.fromHashCode(cA.$$element);

if(!cx||!cx.__di||cx.__dv!==this){cv.removeChild(cA);
{};
}}for(var i=0;i<cz;i++){ct=cs[i];
if(ct.__di){cx=ct.__dg;
cA=cy[cu];

if(!cx){continue;
}if(cx!=cA){if(cA){cv.insertBefore(cx,cA);
}else{cv.appendChild(cx);
}{};
}cu++;
}}{};
},_copyData:function(bv){var bz=this.__dg;
var by=this.__cY;

if(by){var bw=qx.bom.element.Attribute;

for(var bA in by){bw.set(bz,bA,by[bA]);
}}var by=this.__cX;

if(by){var bx=qx.bom.element.Style;

if(bv){bx.setStyles(bz,by);
}else{bx.setCss(bz,bx.compile(by));
}}var by=this.__dr;

if(by){for(var bA in by){this._applyProperty(bA,by[bA]);
}}var by=this.__ds;

if(by){qx.event.Registration.getManager(bz).importListeners(bz,by);
delete this.__ds;
}},_syncData:function(){var bo=this.__dg;
var bn=qx.bom.element.Attribute;
var bl=qx.bom.element.Style;
var bm=this.__dp;

if(bm){var br=this.__cY;

if(br){var bp;

for(var bq in bm){bp=br[bq];

if(bp!==undefined){bn.set(bo,bq,bp);
}else{bn.reset(bo,bq);
}}}this.__dp=null;
}var bm=this.__do;

if(bm){var br=this.__cX;

if(br){var bk={};

for(var bq in bm){bk[bq]=br[bq];
}bl.setStyles(bo,bk);
}this.__do=null;
}var bm=this.__dq;

if(bm){var br=this.__dr;

if(br){var bp;

for(var bq in bm){this._applyProperty(bq,br[bq]);
}}this.__dq=null;
}},__dx:function(){var bu=this;
while(bu){if(bu.__dh){return true;
}
if(!bu.__di||!bu.__dj){return false;
}bu=bu.__dv;
}return false;
},__dy:function(bW){if(bW.__dv===this){throw new Error("Child is already in: "+bW);
}
if(bW.__dh){throw new Error("Root elements could not be inserted into other ones.");
}if(bW.__dv){bW.__dv.remove(bW);
}bW.__dv=this;
if(!this.__dt){this.__dt=[];
}if(this.__dg){this._scheduleChildrenUpdate();
}},__dz:function(cr){if(cr.__dv!==this){throw new Error("Has no child: "+cr);
}if(this.__dg){this._scheduleChildrenUpdate();
}delete cr.__dv;
},__dA:function(eb){if(eb.__dv!==this){throw new Error("Has no child: "+eb);
}if(this.__dg){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dt||null;
},getChild:function(K){var L=this.__dt;
return L&&L[K]||null;
},hasChildren:function(){var bJ=this.__dt;
return bJ&&bJ[0]!==undefined;
},indexOf:function(A){var B=this.__dt;
return B?B.indexOf(A):-1;
},hasChild:function(cb){var cc=this.__dt;
return cc&&cc.indexOf(cb)!==-1;
},add:function(bI){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dy(arguments[i]);
}this.__dt.push.apply(this.__dt,arguments);
}else{this.__dy(bI);
this.__dt.push(bI);
}return this;
},addAt:function(bO,bP){this.__dy(bO);
qx.lang.Array.insertAt(this.__dt,bO,bP);
return this;
},remove:function(bX){var bY=this.__dt;

if(!bY){return;
}
if(arguments[1]){var ca;

for(var i=0,l=arguments.length;i<l;i++){ca=arguments[i];
this.__dz(ca);
qx.lang.Array.remove(bY,ca);
}}else{this.__dz(bX);
qx.lang.Array.remove(bY,bX);
}return this;
},removeAt:function(dO){var dP=this.__dt;

if(!dP){throw new Error("Has no children!");
}var dQ=dP[dO];

if(!dQ){throw new Error("Has no child at this position!");
}this.__dz(dQ);
qx.lang.Array.removeAt(this.__dt,dO);
return this;
},removeAll:function(){var cG=this.__dt;

if(cG){for(var i=0,l=cG.length;i<l;i++){this.__dz(cG[i]);
}cG.length=0;
}return this;
},getParent:function(){return this.__dv||null;
},insertInto:function(parent,bK){parent.__dy(this);

if(bK==null){parent.__dt.push(this);
}else{qx.lang.Array.insertAt(this.__dt,this,bK);
}return this;
},insertBefore:function(be){var parent=be.__dv;
parent.__dy(this);
qx.lang.Array.insertBefore(parent.__dt,this,be);
return this;
},insertAfter:function(cM){var parent=cM.__dv;
parent.__dy(this);
qx.lang.Array.insertAfter(parent.__dt,this,cM);
return this;
},moveTo:function(bf){var parent=this.__dv;
parent.__dA(this);
var bg=parent.__dt.indexOf(this);

if(bg===bf){throw new Error("Could not move to same index!");
}else if(bg<bf){bf--;
}qx.lang.Array.removeAt(parent.__dt,bg);
qx.lang.Array.insertAt(parent.__dt,this,bf);
return this;
},moveBefore:function(dy){var parent=this.__dv;
return this.moveTo(parent.__dt.indexOf(dy));
},moveAfter:function(bQ){var parent=this.__dv;
return this.moveTo(parent.__dt.indexOf(bQ)+1);
},free:function(){var parent=this.__dv;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dt){return;
}parent.__dz(this);
qx.lang.Array.remove(parent.__dt,this);
return this;
},getDomElement:function(){return this.__dg||null;
},getNodeName:function(){return this.__cW;
},setNodeName:function(name){this.__cW=name;
},setRoot:function(cq){this.__dh=cq;
},useMarkup:function(bE){if(this.__dg){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(cV,cP)){var bF=document.createElement(cR);
}else{var bF=qx.bom.Element.getHelperElement();
}bF.innerHTML=bE;
this.useElement(bF.firstChild);
return this.__dg;
},useElement:function(bM){if(this.__dg){throw new Error("Could not overwrite existing element!");
}this.__dg=bM;
this.__dg.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var dY=this.getAttribute(dd);

if(dY>=1){return true;
}var dX=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(dY>=0&&dX[this.__cW]){return true;
}return false;
},setSelectable:qx.core.Variant.select(cV,{"webkit":function(dN){this.setAttribute(cU,dN?cS:cT);
this.setStyle(dj,dN?dc:cO);
},"gecko":function(bd){this.setAttribute(cU,bd?cS:cT);
this.setStyle(da,bd?dr:di);
},"default":function(ea){this.setAttribute(cU,ea?cS:cT);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__cW];
},include:function(){if(this.__di){return;
}delete this.__di;

if(this.__dv){this.__dv._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__di){return;
}this.__di=false;

if(this.__dv){this.__dv._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__di===true;
},show:function(){if(this.__dj){return;
}
if(this.__dg){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}if(this.__dv){this.__dv._scheduleChildrenUpdate();
}delete this.__dj;
},hide:function(){if(!this.__dj){return;
}
if(this.__dg){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}this.__dj=false;
},isVisible:function(){return this.__dj===true;
},scrollChildIntoViewX:function(X,Y,ba){var bb=this.__dg;
var bc=X.getDomElement();

if(ba!==false&&bb&&bb.offsetWidth&&bc&&bc.offsetWidth){qx.bom.element.Scroll.intoViewX(bc,bb,Y);
}else{this.__dk={element:X,align:Y};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}delete this.__dm;
},scrollChildIntoViewY:function(cl,cm,cn){var co=this.__dg;
var cp=cl.getDomElement();

if(cn!==false&&co&&co.offsetWidth&&cp&&cp.offsetWidth){qx.bom.element.Scroll.intoViewY(cp,co,cm);
}else{this.__dl={element:cl,align:cm};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}delete this.__dn;
},scrollToX:function(x,bG){var bH=this.__dg;

if(bG!==true&&bH&&bH.offsetWidth){bH.scrollLeft=x;
}else{this.__dm=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}delete this.__dk;
},getScrollX:function(){var W=this.__dg;

if(W){return W.scrollLeft;
}return this.__dm||0;
},scrollToY:function(y,bC){var bD=this.__dg;

if(bC!==true&&bD&&bD.offsetWidth){bD.scrollTop=y;
}else{this.__dn=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}delete this.__dl;
},getScrollY:function(){var C=this.__dg;

if(C){return C.scrollTop;
}return this.__dn||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(cN,this.__dC,this);
},enableScrolling:function(){this.removeListener(cN,this.__dC,this);
},__dB:null,__dC:function(e){if(!this.__dB){this.__dB=true;
this.__dg.scrollTop=0;
this.__dg.scrollLeft=0;
delete this.__dB;
}},getTextSelection:function(){var bL=this.__dg;

if(bL){return qx.bom.Selection.get(bL);
}return null;
},getTextSelectionLength:function(){var bN=this.__dg;

if(bN){return qx.bom.Selection.getLength(bN);
}return null;
},getTextSelectionStart:function(){var ds=this.__dg;

if(ds){return qx.bom.Selection.getStart(ds);
}return null;
},getTextSelectionEnd:function(){var cF=this.__dg;

if(cF){return qx.bom.Selection.getEnd(cF);
}return null;
},setTextSelection:function(dU,dV){var dW=this.__dg;

if(dW){qx.bom.Selection.set(dW,dU,dV);
return;
}qx.html.Element.__da[this.toHashCode()]={element:this,start:dU,end:dV};
qx.html.Element._scheduleFlush(cW);
},clearTextSelection:function(){var J=this.__dg;

if(J){qx.bom.Selection.clear(J);
}delete qx.html.Element.__da[this.toHashCode()];
},__dD:function(cC,cD){var cE=qx.html.Element._actions;
cE.push({type:cC,element:this,args:cD||[]});
qx.html.Element._scheduleFlush(cW);
},focus:function(){this.__dD(de);
},blur:function(){this.__dD(dm);
},activate:function(){this.__dD(dn);
},deactivate:function(){this.__dD(dl);
},capture:function(cH){this.__dD(dk,[cH!==false]);
},releaseCapture:function(){this.__dD(df);
},setStyle:function(bR,bS,bT){if(!this.__cX){this.__cX={};
}
if(this.__cX[bR]==bS){return;
}
if(bS==null){delete this.__cX[bR];
}else{this.__cX[bR]=bS;
}if(this.__dg){if(bT){qx.bom.element.Style.set(this.__dg,bR,bS);
return this;
}if(!this.__do){this.__do={};
}this.__do[bR]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}return this;
},setStyles:function(dt,du){var dv=qx.bom.element.Style;

if(!this.__cX){this.__cX={};
}
if(this.__dg){if(!this.__do){this.__do={};
}
for(var dx in dt){var dw=dt[dx];

if(this.__cX[dx]==dw){continue;
}
if(dw==null){delete this.__cX[dx];
}else{this.__cX[dx]=dw;
}if(du){dv.set(this.__dg,dx,dw);
continue;
}this.__do[dx]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}else{for(var dx in dt){var dw=dt[dx];

if(this.__cX[dx]==dw){continue;
}
if(dw==null){delete this.__cX[dx];
}else{this.__cX[dx]=dw;
}}}return this;
},removeStyle:function(dB,dC){this.setStyle(dB,null,dC);
},getStyle:function(P){return this.__cX?this.__cX[P]:null;
},getAllStyles:function(){return this.__cX||null;
},setAttribute:function(dR,dS,dT){if(!this.__cY){this.__cY={};
}
if(this.__cY[dR]==dS){return;
}
if(dS==null){delete this.__cY[dR];
}else{this.__cY[dR]=dS;
}if(this.__dg){if(dT){qx.bom.element.Attribute.set(this.__dg,dR,dS);
return this;
}if(!this.__dp){this.__dp={};
}this.__dp[dR]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}return this;
},setAttributes:function(dK,dL){for(var dM in dK){this.setAttribute(dM,dK[dM],dL);
}return this;
},removeAttribute:function(bs,bt){this.setAttribute(bs,null,bt);
},getAttribute:function(bV){return this.__cY?this.__cY[bV]:null;
},_applyProperty:function(name,dA){},_setProperty:function(Q,R,S){if(!this.__dr){this.__dr={};
}
if(this.__dr[Q]==R){return;
}
if(R==null){delete this.__dr[Q];
}else{this.__dr[Q]=R;
}if(this.__dg){if(S){this._applyProperty(Q,R);
return this;
}if(!this.__dq){this.__dq={};
}this.__dq[Q]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cW);
}return this;
},_removeProperty:function(cI,cJ){this._setProperty(cI,null,cJ);
},_getProperty:function(M){var N=this.__dr;

if(!N){return null;
}var O=N[M];
return O==null?null:O;
},addListener:function(D,E,self,F){var G;

if(this.$$disposed){return null;
}{};

if(this.__dg){return qx.event.Registration.addListener(this.__dg,D,E,self,F);
}
if(!this.__ds){this.__ds={};
}
if(F==null){F=false;
}var H=qx.event.Manager.getNextUniqueId();
var I=D+(F?dp:dg)+H;
this.__ds[I]={type:D,listener:E,self:self,capture:F,unique:H};
return I;
},removeListener:function(dD,dE,self,dF){var dG;

if(this.$$disposed){return null;
}{};

if(this.__dg){qx.event.Registration.removeListener(this.__dg,dD,dE,self,dF);
}else{var dI=this.__ds;
var dH;

if(dF==null){dF=false;
}
for(var dJ in dI){dH=dI[dJ];
if(dH.listener===dE&&dH.self===self&&dH.capture===dF&&dH.type===dD){delete dI[dJ];
break;
}}}return this;
},removeListenerById:function(cL){if(this.$$disposed){return null;
}
if(this.__dg){qx.event.Registration.removeListenerById(this.__dg,cL);
}else{delete this.__ds[cL];
}return this;
},hasListener:function(cd,ce){if(this.$$disposed){return false;
}
if(this.__dg){return qx.event.Registration.hasListener(this.__dg,cd,ce);
}var cg=this.__ds;
var cf;

if(ce==null){ce=false;
}
for(var ch in cg){cf=cg[ch];
if(cf.capture===ce&&cf.type===cd){return true;
}}return false;
}},defer:function(cK){cK.__dE=new qx.util.DeferredCall(cK.flush,cK);
},destruct:function(){var bB=this.__dg;

if(bB){qx.event.Registration.getManager(bB).removeAllListeners(bB);
bB.$$element=cQ;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dv;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(cX);
this.__cY=this.__cX=this.__ds=this.__dr=this.__dp=this.__do=this.__dq=this.__dg=this.__dv=this.__dk=this.__dl=null;
}});
})();
(function(){var c='ie',b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__kC:false,__kD:{},__kE:0,MAX_RETRIES:10,scheduleFlush:function(i){var self=qx.ui.core.queue.Manager;
self.__kD[i]=true;

if(!self.__kC){self.__kH.schedule();
self.__kC=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__kF){return;
}self.__kF=true;
self.__kH.cancel();
var d=self.__kD;
self.__kG(function(){while(d.visibility||d.widget||d.appearance||d.layout||d.element){if(d.widget){delete d.widget;
qx.ui.core.queue.Widget.flush();
}
if(d.visibility){delete d.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(d.appearance){delete d.appearance;
qx.ui.core.queue.Appearance.flush();
}if(d.widget||d.visibility||d.appearance){continue;
}
if(d.layout){delete d.layout;
qx.ui.core.queue.Layout.flush();
}if(d.widget||d.visibility||d.appearance||d.layout){continue;
}
if(d.element){delete d.element;
qx.html.Element.flush();
}}},function(){self.__kC=false;
});
self.__kG(function(){if(d.dispose){delete d.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__kF=false;
});
self.__kE=0;
},__kG:function(g,h){var self=qx.ui.core.queue.Manager;

try{g();
}catch(e){{};
self.__kC=false;
self.__kF=false;
self.__kE+=1;
if(qx.bom.client.Browser.NAME==c&&qx.bom.client.Browser.VERSION<=7){h();
}
if(self.__kE<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__kE-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{h();
}}},defer:function(f){f.__kH=new qx.util.DeferredCall(f.flush);
qx.html.Element._scheduleFlush=f.scheduleFlush;
qx.event.Registration.addListener(window,a,f.flush);
}});
})();
(function(){var t="abstract",s="qx.event.dispatch.AbstractBubbling";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:t,construct:function(w){this._manager=w;
},members:{_getParent:function(x){throw new Error("Missing implementation");
},canDispatchEvent:function(u,event,v){return event.getBubbles();
},dispatchEvent:function(a,event,b){var parent=a;
var m=this._manager;
var h,q;
var f;
var l,o;
var n;
var p=[];
h=m.getListeners(a,b,true);
q=m.getListeners(a,b,false);

if(h){p.push(h);
}
if(q){p.push(q);
}var parent=this._getParent(a);
var d=[];
var c=[];
var e=[];
var k=[];
while(parent!=null){h=m.getListeners(parent,b,true);

if(h){e.push(h);
k.push(parent);
}q=m.getListeners(parent,b,false);

if(q){d.push(q);
c.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=e.length-1;i>=0;i--){n=k[i];
event.setCurrentTarget(n);
f=e[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||n;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(a);

for(var i=0,r=p.length;i<r;i++){f=p[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||a;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,r=d.length;i<r;i++){n=c[i];
event.setCurrentTarget(n);
f=d[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||n;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(d){return d.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var D="keydown",C="qx.client",B="keypress",A="NumLock",z="keyup",y="Enter",x="0",w="9",v="-",u="PageUp",bL="+",bK="PrintScreen",bJ="gecko",bI="A",bH="Z",bG="Left",bF="F5",bE="Down",bD="Up",bC="F11",K="F6",L="useraction",I="F3",J="keyinput",G="Insert",H="F8",E="End",F="/",S="Delete",T="*",bg="cmd",bc="F1",bo="F4",bj="Home",by="F2",bt="F12",X="PageDown",bB="F7",bA="Win",bz="F9",W="F10",ba="Right",bb="text",be="Escape",bh="webkit",bk="5",bq="3",bv="Meta",M="7",N="CapsLock",Y="input",bn="Control",bm="Space",bl="Tab",bs="Shift",br="Pause",bi="Unidentified",bp="qx.event.handler.Keyboard",r="mshtml|webkit",bu="6",O="off",P="Apps",bd="4",s="Alt",t="mshtml",V="2",Q="Scroll",R="1",U="8",bf="autoComplete",bx=",",bw="Backspace";
qx.Class.define(bp,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bY){qx.core.Object.call(this);
this.__gA=bY;
this.__gB=bY.getWindow();
if(qx.core.Variant.isSet(C,bJ)){this.__gC=this.__gB;
}else{this.__gC=this.__gB.document.documentElement;
}this.__gD={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cI){if(this._identifierToKeyCodeMap[cI]){return true;
}
if(cI.length!=1){return false;
}
if(cI>=x&&cI<=w){return true;
}
if(cI>=bI&&cI<=bH){return true;
}
switch(cI){case bL:case v:case T:case F:return true;
default:return false;
}}},members:{__gE:null,__gA:null,__gB:null,__gC:null,__gD:null,__gF:null,__gG:null,__gH:null,canHandleEvent:function(ce,cf){},registerEvent:function(cJ,cK,cL){},unregisterEvent:function(bV,bW,bX){},_fireInputEvent:function(co,cp){var cq=this.__gI();
if(cq&&cq.offsetWidth!=0){var event=qx.event.Registration.createEvent(J,qx.event.type.KeyInput,[co,cq,cp]);
this.__gA.dispatchEvent(cq,event);
}if(this.__gB){qx.event.Registration.fireEvent(this.__gB,L,qx.event.type.Data,[J]);
}},_fireSequenceEvent:function(cz,cA,cB){var cC=this.__gI();
var cD=cz.keyCode;
var event=qx.event.Registration.createEvent(cA,qx.event.type.KeySequence,[cz,cC,cB]);
this.__gA.dispatchEvent(cC,event);
if(qx.core.Variant.isSet(C,r)){if(cA==D&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cD)&&!this._emulateKeyPress[cD]){this._fireSequenceEvent(cz,B,cB);
}}}if(this.__gB){qx.event.Registration.fireEvent(this.__gB,L,qx.event.type.Data,[cA]);
}},__gI:function(){var cg=this.__gA.getHandler(qx.event.handler.Focus);
var ch=cg.getActive();
if(!ch||ch.offsetWidth==0){ch=cg.getFocus();
}if(!ch||ch.offsetWidth==0){ch=this.__gA.getWindow().document.body;
}return ch;
},_initKeyObserver:function(){this.__gE=qx.lang.Function.listener(this.__gJ,this);
this.__gH=qx.lang.Function.listener(this.__gL,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gC,z,this.__gE);
Event.addNativeListener(this.__gC,D,this.__gE);
Event.addNativeListener(this.__gC,B,this.__gH);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gC,z,this.__gE);
Event.removeNativeListener(this.__gC,D,this.__gE);
Event.removeNativeListener(this.__gC,B,this.__gH);

for(var cc in (this.__gG||{})){var cb=this.__gG[cc];
Event.removeNativeListener(cb.target,B,cb.callback);
}delete (this.__gG);
},__gJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(C,{"mshtml":function(e){e=window.event||e;
var h=e.keyCode;
var f=0;
var g=e.type;
if(!(this.__gD[h]==D&&g==D)){this._idealKeyHandler(h,f,g,e);
}if(g==D){if(this._isNonPrintableKeyCode(h)||this._emulateKeyPress[h]){this._idealKeyHandler(h,f,B,e);
}}this.__gD[h]=g;
},"gecko":function(cu){var cy=this._keyCodeFix[cu.keyCode]||cu.keyCode;
var cw=0;
var cx=cu.type;
if(qx.bom.client.Platform.WIN){var cv=cy?this._keyCodeToIdentifier(cy):this._charCodeToIdentifier(cw);

if(!(this.__gD[cv]==D&&cx==D)){this._idealKeyHandler(cy,cw,cx,cu);
}this.__gD[cv]=cx;
}else{this._idealKeyHandler(cy,cw,cx,cu);
}this.__gK(cu.target,cx,cy);
},"webkit":function(bM){var bP=0;
var bN=0;
var bO=bM.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bO==z||bO==D){bP=this._charCode2KeyCode[bM.charCode]||bM.keyCode;
}else{if(this._charCode2KeyCode[bM.charCode]){bP=this._charCode2KeyCode[bM.charCode];
}else{bN=bM.charCode;
}}this._idealKeyHandler(bP,bN,bO,bM);
}else{bP=bM.keyCode;
this._idealKeyHandler(bP,bN,bO,bM);
if(bO==D){if(this._isNonPrintableKeyCode(bP)||this._emulateKeyPress[bP]){this._idealKeyHandler(bP,bN,B,bM);
}}this.__gD[bP]=bO;
}},"opera":function(cn){this.__gF=cn.keyCode;
this._idealKeyHandler(cn.keyCode,0,cn.type,cn);
}})),__gK:qx.core.Variant.select(C,{"gecko":function(ci,cj,ck){if(cj===D&&(ck==33||ck==34||ck==38||ck==40)&&ci.type==bb&&ci.tagName.toLowerCase()===Y&&ci.getAttribute(bf)!==O){if(!this.__gG){this.__gG={};
}var cm=qx.core.ObjectRegistry.toHashCode(ci);

if(this.__gG[cm]){return;
}var self=this;
this.__gG[cm]={target:ci,callback:function(cd){qx.bom.Event.stopPropagation(cd);
self.__gL(cd);
}};
var cl=qx.event.GlobalError.observeMethod(this.__gG[cm].callback);
qx.bom.Event.addNativeListener(ci,B,cl);
}},"default":null}),__gL:qx.event.GlobalError.observeMethod(qx.core.Variant.select(C,{"mshtml":function(d){d=window.event||d;

if(this._charCode2KeyCode[d.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[d.keyCode],0,d.type,d);
}else{this._idealKeyHandler(0,d.keyCode,d.type,d);
}},"gecko":function(i){var l=this._keyCodeFix[i.keyCode]||i.keyCode;
var j=i.charCode;
var k=i.type;
this._idealKeyHandler(l,j,k,i);
},"webkit":function(bQ){if(qx.bom.client.Engine.VERSION<525.13){var bT=0;
var bR=0;
var bS=bQ.type;

if(bS==z||bS==D){bT=this._charCode2KeyCode[bQ.charCode]||bQ.keyCode;
}else{if(this._charCode2KeyCode[bQ.charCode]){bT=this._charCode2KeyCode[bQ.charCode];
}else{bR=bQ.charCode;
}}this._idealKeyHandler(bT,bR,bS,bQ);
}else{if(this._charCode2KeyCode[bQ.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bQ.keyCode],0,bQ.type,bQ);
}else{this._idealKeyHandler(0,bQ.keyCode,bQ.type,bQ);
}}},"opera":function(cr){var ct=cr.keyCode;
var cs=cr.type;
if(ct!=this.__gF){this._idealKeyHandler(0,this.__gF,cs,cr);
}else{if(this._keyCodeToIdentifierMap[cr.keyCode]){this._idealKeyHandler(cr.keyCode,0,cr.type,cr);
}else{this._idealKeyHandler(0,cr.keyCode,cr.type,cr);
}}}})),_idealKeyHandler:function(m,n,o,p){var q;
if(m||(!m&&!n)){q=this._keyCodeToIdentifier(m);
this._fireSequenceEvent(p,o,q);
}else{q=this._charCodeToIdentifier(n);
this._fireSequenceEvent(p,B,q);
this._fireInputEvent(p,n);
}},_specialCharCodeMap:{8:bw,9:bl,13:y,27:be,32:bm},_emulateKeyPress:qx.core.Variant.select(C,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bs,17:bn,18:s,20:N,224:bv,37:bG,38:bD,39:ba,40:bE,33:u,34:X,35:E,36:bj,45:G,46:S,112:bc,113:by,114:I,115:bo,116:bF,117:K,118:bB,119:H,120:bz,121:W,122:bC,123:bt,144:A,44:bK,145:Q,19:br,91:qx.bom.client.Platform.MAC?bg:bA,92:bA,93:qx.bom.client.Platform.MAC?bg:P},_numpadToCharCode:{96:x.charCodeAt(0),97:R.charCodeAt(0),98:V.charCodeAt(0),99:bq.charCodeAt(0),100:bd.charCodeAt(0),101:bk.charCodeAt(0),102:bu.charCodeAt(0),103:M.charCodeAt(0),104:U.charCodeAt(0),105:w.charCodeAt(0),106:T.charCodeAt(0),107:bL.charCodeAt(0),109:v.charCodeAt(0),110:bx.charCodeAt(0),111:F.charCodeAt(0)},_charCodeA:bI.charCodeAt(0),_charCodeZ:bH.charCodeAt(0),_charCode0:x.charCodeAt(0),_charCode9:w.charCodeAt(0),_isNonPrintableKeyCode:function(a){return this._keyCodeToIdentifierMap[a]?true:false;
},_isIdentifiableKeyCode:function(cH){if(cH>=this._charCodeA&&cH<=this._charCodeZ){return true;
}if(cH>=this._charCode0&&cH<=this._charCode9){return true;
}if(this._specialCharCodeMap[cH]){return true;
}if(this._numpadToCharCode[cH]){return true;
}if(this._isNonPrintableKeyCode(cH)){return true;
}return false;
},_keyCodeToIdentifier:function(b){if(this._isIdentifiableKeyCode(b)){var c=this._numpadToCharCode[b];

if(c){return String.fromCharCode(c);
}return (this._keyCodeToIdentifierMap[b]||this._specialCharCodeMap[b]||String.fromCharCode(b));
}else{return bi;
}},_charCodeToIdentifier:function(ca){return this._specialCharCodeMap[ca]||String.fromCharCode(ca).toUpperCase();
},_identifierToKeyCode:function(bU){return qx.event.handler.Keyboard._identifierToKeyCodeMap[bU]||bU.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gF=this.__gA=this.__gB=this.__gC=this.__gD=null;
},defer:function(cE,cF){qx.event.Registration.addHandler(cE);
if(!cE._identifierToKeyCodeMap){cE._identifierToKeyCodeMap={};

for(var cG in cF._keyCodeToIdentifierMap){cE._identifierToKeyCodeMap[cF._keyCodeToIdentifierMap[cG]]=parseInt(cG,10);
}
for(var cG in cF._specialCharCodeMap){cE._identifierToKeyCodeMap[cF._specialCharCodeMap[cG]]=parseInt(cG,10);
}}
if(qx.core.Variant.isSet(C,t)){cF._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(C,bJ)){cF._keyCodeFix={12:cF._identifierToKeyCode(A)};
}else if(qx.core.Variant.isSet(C,bh)){if(qx.bom.client.Engine.VERSION<525.13){cF._charCode2KeyCode={63289:cF._identifierToKeyCode(A),63276:cF._identifierToKeyCode(u),63277:cF._identifierToKeyCode(X),63275:cF._identifierToKeyCode(E),63273:cF._identifierToKeyCode(bj),63234:cF._identifierToKeyCode(bG),63232:cF._identifierToKeyCode(bD),63235:cF._identifierToKeyCode(ba),63233:cF._identifierToKeyCode(bE),63272:cF._identifierToKeyCode(S),63302:cF._identifierToKeyCode(G),63236:cF._identifierToKeyCode(bc),63237:cF._identifierToKeyCode(by),63238:cF._identifierToKeyCode(I),63239:cF._identifierToKeyCode(bo),63240:cF._identifierToKeyCode(bF),63241:cF._identifierToKeyCode(K),63242:cF._identifierToKeyCode(bB),63243:cF._identifierToKeyCode(H),63244:cF._identifierToKeyCode(bz),63245:cF._identifierToKeyCode(W),63246:cF._identifierToKeyCode(bC),63247:cF._identifierToKeyCode(bt),63248:cF._identifierToKeyCode(bK),3:cF._identifierToKeyCode(y),12:cF._identifierToKeyCode(A),13:cF._identifierToKeyCode(y)};
}else{cF._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var v="qx.client",u="mouseup",t="click",s="mousedown",r="contextmenu",q="mousewheel",p="dblclick",o="mshtml",n="mouseover",m="mouseout",h="DOMMouseScroll",l="mousemove",k="on",g="mshtml|webkit|opera",f="useraction",j="gecko|webkit",i="qx.event.handler.Mouse";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(w){qx.core.Object.call(this);
this.__eu=w;
this.__ev=w.getWindow();
this.__ew=this.__ev.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ex:null,__ey:null,__ez:null,__eA:null,__eB:null,__eu:null,__ev:null,__ew:null,canHandleEvent:function(d,e){},registerEvent:qx.bom.client.System.IPHONE?
function(K,L,M){K[k+L]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(H,I,J){H[k+I]=undefined;
}:qx.lang.Function.returnNull,__eC:function(D,E,F){if(!F){F=D.target||D.srcElement;
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==q?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__ev,f,qx.event.type.Data,[E||D.type]);
},_initButtonObserver:function(){this.__ex=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ew,s,this.__ex);
Event.addNativeListener(this.__ew,u,this.__ex);
Event.addNativeListener(this.__ew,t,this.__ex);
Event.addNativeListener(this.__ew,p,this.__ex);
Event.addNativeListener(this.__ew,r,this.__ex);
},_initMoveObserver:function(){this.__ey=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ew,l,this.__ey);
Event.addNativeListener(this.__ew,n,this.__ey);
Event.addNativeListener(this.__ew,m,this.__ey);
},_initWheelObserver:function(){this.__ez=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var S=qx.core.Variant.isSet(v,g)?q:h;
var T=qx.core.Variant.isSet(v,o)?this.__ew:this.__ev;
Event.addNativeListener(T,S,this.__ez);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ew,s,this.__ex);
Event.removeNativeListener(this.__ew,u,this.__ex);
Event.removeNativeListener(this.__ew,t,this.__ex);
Event.removeNativeListener(this.__ew,p,this.__ex);
Event.removeNativeListener(this.__ew,r,this.__ex);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ew,l,this.__ey);
Event.removeNativeListener(this.__ew,n,this.__ey);
Event.removeNativeListener(this.__ew,m,this.__ey);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var B=qx.core.Variant.isSet(v,g)?q:h;
var C=qx.core.Variant.isSet(v,o)?this.__ew:this.__ev;
Event.removeNativeListener(C,B,this.__ez);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(N){this.__eC(N);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(a){var b=a.type;
var c=a.target||a.srcElement;
if(qx.core.Variant.isSet(v,j)){if(c&&c.nodeType==3){c=c.parentNode;
}}
if(this.__eD){this.__eD(a,b,c);
}
if(this.__eF){this.__eF(a,b,c);
}this.__eC(a,b,c);

if(this.__eE){this.__eE(a,b,c);
}
if(this.__eG){this.__eG(a,b,c);
}this.__eA=b;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(G){this.__eC(G,q);
}),__eD:qx.core.Variant.select(v,{"webkit":function(P,Q,R){if(qx.bom.client.Engine.VERSION<530){if(Q==r){this.__eC(P,u,R);
}}},"default":null}),__eE:qx.core.Variant.select(v,{"opera":function(U,V,W){if(V==u&&U.button==2){this.__eC(U,r,W);
}},"default":null}),__eF:qx.core.Variant.select(v,{"mshtml":function(X,Y,ba){if(Y==u&&this.__eA==t){this.__eC(X,s,ba);
}else if(Y==p){this.__eC(X,t,ba);
}},"default":null}),__eG:qx.core.Variant.select(v,{"mshtml":null,"default":function(x,y,z){switch(y){case s:this.__eB=z;
break;
case u:if(z!==this.__eB){var A=qx.dom.Hierarchy.getCommonParent(z,this.__eB);
this.__eC(x,t,A);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eu=this.__ev=this.__ew=this.__eB=null;
},defer:function(O){qx.event.Registration.addHandler(O);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(f,g,h){},unregisterEvent:function(b,c,d){}},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var O="alias",N="copy",M="blur",L="mouseout",K="keydown",J="Ctrl",I="Shift",H="mousemove",G="move",F="mouseover",bf="Alt",be="keyup",bd="mouseup",bc="dragend",bb="on",ba="mousedown",Y="qxDraggable",X="drag",W="drop",V="qxDroppable",T="qx.event.handler.DragDrop",U="droprequest",R="dragstart",S="dragchange",P="dragleave",Q="dragover";
qx.Class.define(T,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bm){qx.core.Object.call(this);
this.__iQ=bm;
this.__iR=bm.getWindow().document.documentElement;
this.__iQ.addListener(this.__iR,ba,this._onMouseDown,this);
this.__je();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__iQ:null,__iR:null,__iS:null,__iT:null,__iU:null,__iV:null,__iW:null,__iX:null,__iY:null,__ja:null,__jb:false,__jc:0,__jd:0,canHandleEvent:function(m,n){},registerEvent:function(j,k,l){},unregisterEvent:function(bh,bi,bj){},addType:function(a){this.__iU[a]=true;
},addAction:function(u){this.__iV[u]=true;
},supportsType:function(bk){return !!this.__iU[bk];
},supportsAction:function(v){return !!this.__iV[v];
},getData:function(s){if(!this.__jl||!this.__iS){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__iU[s]){throw new Error("Unsupported data type: "+s+"!");
}
if(!this.__iX[s]){this.__iY=s;
this.__jg(U,this.__iT,this.__iS,false);
}
if(!this.__iX[s]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__iX[s]||null;
},getCurrentAction:function(){return this.__ja;
},addData:function(h,i){this.__iX[h]=i;
},getCurrentType:function(){return this.__iY;
},isSessionActive:function(){return this.__jb;
},__je:function(){this.__iU={};
this.__iV={};
this.__iW={};
this.__iX={};
},__jf:function(){if(this.__iT==null){return;
}var f=this.__iV;
var c=this.__iW;
var d=null;

if(this.__jl){if(c.Shift&&c.Ctrl&&f.alias){d=O;
}else if(c.Shift&&c.Alt&&f.copy){d=N;
}else if(c.Shift&&f.move){d=G;
}else if(c.Alt&&f.alias){d=O;
}else if(c.Ctrl&&f.copy){d=N;
}else if(f.move){d=G;
}else if(f.copy){d=N;
}else if(f.alias){d=O;
}}
if(d!=this.__ja){this.__ja=d;
this.__jg(S,this.__iT,this.__iS,false);
}},__jg:function(w,x,y,z,A){var C=qx.event.Registration;
var B=C.createEvent(w,qx.event.type.Drag,[z,A]);

if(x!==y){B.setRelatedTarget(y);
}return C.dispatchEvent(x,B);
},__jh:function(b){while(b&&b.nodeType==1){if(b.getAttribute(Y)==bb){return b;
}b=b.parentNode;
}return null;
},__ji:function(bl){while(bl&&bl.nodeType==1){if(bl.getAttribute(V)==bb){return bl;
}bl=bl.parentNode;
}return null;
},__jj:function(){this.__iT=null;
this.__iQ.removeListener(this.__iR,H,this._onMouseMove,this,true);
this.__iQ.removeListener(this.__iR,bd,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,M,this._onWindowBlur,this);
this.__je();
},__jk:function(){if(this.__jb){this.__iQ.removeListener(this.__iR,F,this._onMouseOver,this,true);
this.__iQ.removeListener(this.__iR,L,this._onMouseOut,this,true);
this.__iQ.removeListener(this.__iR,K,this._onKeyDown,this,true);
this.__iQ.removeListener(this.__iR,be,this._onKeyUp,this,true);
this.__jg(bc,this.__iT,this.__iS,false);
this.__jb=false;
}this.__jl=false;
this.__iS=null;
this.__jj();
},__jl:false,_onWindowBlur:function(e){this.__jk();
},_onKeyDown:function(e){var g=e.getKeyIdentifier();

switch(g){case bf:case J:case I:if(!this.__iW[g]){this.__iW[g]=true;
this.__jf();
}}},_onKeyUp:function(e){var bg=e.getKeyIdentifier();

switch(bg){case bf:case J:case I:if(this.__iW[bg]){this.__iW[bg]=false;
this.__jf();
}}},_onMouseDown:function(e){if(this.__jb){return;
}var t=this.__jh(e.getTarget());

if(t){this.__jc=e.getDocumentLeft();
this.__jd=e.getDocumentTop();
this.__iT=t;
this.__iQ.addListener(this.__iR,H,this._onMouseMove,this,true);
this.__iQ.addListener(this.__iR,bd,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,M,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__jl){this.__jg(W,this.__iS,this.__iT,false,e);
}if(this.__jb){e.stopPropagation();
}this.__jk();
},_onMouseMove:function(e){if(this.__jb){if(!this.__jg(X,this.__iT,this.__iS,true,e)){this.__jk();
}}else{if(Math.abs(e.getDocumentLeft()-this.__jc)>3||Math.abs(e.getDocumentTop()-this.__jd)>3){if(this.__jg(R,this.__iT,this.__iS,true,e)){this.__jb=true;
this.__iQ.addListener(this.__iR,F,this._onMouseOver,this,true);
this.__iQ.addListener(this.__iR,L,this._onMouseOut,this,true);
this.__iQ.addListener(this.__iR,K,this._onKeyDown,this,true);
this.__iQ.addListener(this.__iR,be,this._onKeyUp,this,true);
var r=this.__iW;
r.Ctrl=e.isCtrlPressed();
r.Shift=e.isShiftPressed();
r.Alt=e.isAltPressed();
this.__jf();
}else{this.__jg(bc,this.__iT,this.__iS,false);
this.__jj();
}}}},_onMouseOver:function(e){var D=e.getTarget();
var E=this.__ji(D);

if(E&&E!=this.__iS){this.__jl=this.__jg(Q,E,this.__iT,true,e);
this.__iS=E;
this.__jf();
}},_onMouseOut:function(e){var p=this.__ji(e.getTarget());
var o=this.__ji(e.getRelatedTarget());

if(p&&p!==o&&p==this.__iS){this.__jg(P,this.__iS,o,false,e);
this.__iS=null;
this.__jl=false;
qx.event.Timer.once(this.__jf,this,0);
}}},destruct:function(){this.__iT=this.__iS=this.__iQ=this.__iR=this.__iU=this.__iV=this.__iW=this.__iX=null;
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var f="-",e="qx.event.handler.Element";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){qx.core.Object.call(this);
this._manager=g;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(n,o){},registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);
var k=m+f+i;
var l=qx.lang.Function.listener(this._onNative,this,k);
qx.bom.Event.addNativeListener(h,i,l);
this._registeredEvents[k]={element:h,type:i,listener:l};
},unregisterEvent:function(s,t,u){var x=this._registeredEvents;

if(!x){return;
}var y=qx.core.ObjectRegistry.toHashCode(s);
var v=y+f+t;
var w=this._registeredEvents[v];

if(w){qx.bom.Event.removeNativeListener(s,t,w.listener);
}delete this._registeredEvents[v];
},_onNative:qx.event.GlobalError.observeMethod(function(a,b){var d=this._registeredEvents;

if(!d){return;
}var c=d[b];
qx.event.Registration.fireNonBubblingEvent(c.element,c.type,qx.event.type.Native,[a]);
})},destruct:function(){var p;
var q=this._registeredEvents;

for(var r in q){p=q[r];
qx.bom.Event.removeNativeListener(p.element,p.type,p.listener);
}this._manager=this._registeredEvents=null;
},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var d="qx.event.handler.Appear",c="disappear",b="appear";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__co=a;
this.__cp={};
qx.event.handler.Appear.__cq[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__cq:{},refresh:function(){var j=this.__cq;

for(var k in j){j[k].refresh();
}}},members:{__co:null,__cp:null,canHandleEvent:function(l,m){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__cp;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(e,f,g){var h=qx.core.ObjectRegistry.toHashCode(e)+f;
var i=this.__cp;

if(!i){return;
}
if(i[h]){delete i[h];
}},refresh:function(){var q=this.__cp;
var r;

for(var p in q){r=q[p];
var n=r.offsetWidth>0;

if((!!r.$$displayed)!==n){r.$$displayed=n;
var o=qx.event.Registration.createEvent(n?b:c);
this.__co.dispatchEvent(r,o);
}}}},destruct:function(){this.__co=this.__cp=null;
delete qx.event.handler.Appear.__cq[this.$$hash];
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var u="mshtml",t="",s="qx.client",r=" ",q=">",p="<",o="='",n="none",m="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",k="qx.bom.Element",f="' ",h="div",g="></";
qx.Class.define(k,{statics:{__kf:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__kg:{},__kh:{},allowCreationWithMarkup:function(O){if(!O){O=window;
}var P=O.location.href;

if(qx.bom.Element.__kh[P]==undefined){try{O.document.createElement(m);
qx.bom.Element.__kh[P]=true;
}catch(e){qx.bom.Element.__kh[P]=false;
}}return qx.bom.Element.__kh[P];
},getHelperElement:function(K){if(!K){K=window;
}var M=K.location.href;

if(!qx.bom.Element.__kg[M]){var L=qx.bom.Element.__kg[M]=K.document.createElement(h);
if(qx.bom.client.Engine.WEBKIT){L.style.display=n;
K.document.body.appendChild(L);
}}return qx.bom.Element.__kg[M];
},create:function(name,be,bf){if(!bf){bf=window;
}
if(!name){throw new Error("The tag name is missing!");
}var bh=this.__kf;
var bg=t;

for(var bj in be){if(bh[bj]){bg+=bj+o+be[bj]+f;
}}var bk;
if(bg!=t){if(qx.bom.Element.allowCreationWithMarkup(bf)){bk=bf.document.createElement(p+name+r+bg+q);
}else{var bi=qx.bom.Element.getHelperElement(bf);
bi.innerHTML=p+name+r+bg+g+name+q;
bk=bi.firstChild;
}}else{bk=bf.document.createElement(name);
}
for(var bj in be){if(!bh[bj]){qx.bom.element.Attribute.set(bk,bj,be[bj]);
}}return bk;
},empty:function(bd){return bd.innerHTML=t;
},addListener:function(a,b,c,self,d){return qx.event.Registration.addListener(a,b,c,self,d);
},removeListener:function(Q,R,S,self,T){return qx.event.Registration.removeListener(Q,R,S,self,T);
},removeListenerById:function(Y,ba){return qx.event.Registration.removeListenerById(Y,ba);
},hasListener:function(U,V,W){return qx.event.Registration.hasListener(U,V,W);
},focus:function(X){qx.event.Registration.getManager(X).getHandler(qx.event.handler.Focus).focus(X);
},blur:function(I){qx.event.Registration.getManager(I).getHandler(qx.event.handler.Focus).blur(I);
},activate:function(v){qx.event.Registration.getManager(v).getHandler(qx.event.handler.Focus).activate(v);
},deactivate:function(N){qx.event.Registration.getManager(N).getHandler(qx.event.handler.Focus).deactivate(N);
},capture:function(bb,bc){qx.event.Registration.getManager(bb).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(bb,bc);
},releaseCapture:function(J){qx.event.Registration.getManager(J).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(J);
},clone:function(w,x){var A;

if(x||(qx.core.Variant.isSet(s,u)&&!qx.xml.Document.isXmlDocument(w))){var E=qx.event.Registration.getManager(w);
var y=qx.dom.Hierarchy.getDescendants(w);
y.push(w);
}if(qx.core.Variant.isSet(s,u)){for(var i=0,l=y.length;i<l;i++){E.toggleAttachedEvents(y[i],false);
}}var A=w.cloneNode(true);
if(qx.core.Variant.isSet(s,u)){for(var i=0,l=y.length;i<l;i++){E.toggleAttachedEvents(y[i],true);
}}if(x===true){var H=qx.dom.Hierarchy.getDescendants(A);
H.push(A);
var z,C,G,B;

for(var i=0,F=y.length;i<F;i++){G=y[i];
z=E.serializeListeners(G);

if(z.length>0){C=H[i];

for(var j=0,D=z.length;j<D;j++){B=z[j];
E.addListener(C,B.type,B.handler,B.self,B.capture);
}}}}return A;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Native.prototype._cloneNativeEvent.call(this,b,c);
c.shiftKey=b.shiftKey;
c.ctrlKey=b.ctrlKey;
c.altKey=b.altKey;
c.metaKey=b.metaKey;
return c;
},getModifiers:function(){var e=0;
var d=this._native;

if(d.shiftKey){e|=qx.event.type.Dom.SHIFT_MASK;
}
if(d.ctrlKey){e|=qx.event.type.Dom.CTRL_MASK;
}
if(d.altKey){e|=qx.event.type.Dom.ALT_MASK;
}
if(d.metaKey){e|=qx.event.type.Dom.META_MASK;
}return e;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var bf="qx.client",be="mousedown",bd="mouseup",bc="blur",bb="focus",ba="on",Y="DOMFocusOut",X="selectstart",W="DOMFocusIn",V="focusin",bA="focusout",bz="draggesture",by="onmousedown",bx="qx.event.handler.Focus",bw="_applyFocus",bv="deactivate",bu="textarea",bt="onfocusout",bs="_applyActive",br='character',bm="input",bn="onmouseup",bk="onfocusin",bl="qxSelectable",bi="tabIndex",bj="off",bg="activate",bh="mshtml",bo="qxKeepFocus",bp="onselectstart",bq="qxKeepActive";
qx.Class.define(bx,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){qx.core.Object.call(this);
this._manager=y;
this._window=y.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bs,nullable:true},focus:{apply:bw,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__jo:null,__jp:null,__jq:null,__jr:null,__js:null,__jt:null,__ju:null,__jv:null,__jw:null,__jx:null,canHandleEvent:function(A,B){},registerEvent:function(bF,bG,bH){},unregisterEvent:function(o,p,q){},focus:function(K){if(qx.core.Variant.isSet(bf,bh)){window.setTimeout(function(){try{K.focus();
var bK=qx.bom.Selection.get(K);

if(bK.length==0){var bL=K.createTextRange();
bL.moveStart(br,K.value.length);
bL.collapse();
bL.select();
}}catch(b){}},0);
}else{try{K.focus();
}catch(m){}}this.setFocus(K);
this.setActive(K);
},activate:function(G){this.setActive(G);
},blur:function(bO){try{bO.blur();
}catch(bQ){}
if(this.getActive()===bO){this.resetActive();
}
if(this.getFocus()===bO){this.resetFocus();
}},deactivate:function(bP){if(this.getActive()===bP){this.resetActive();
}},tryActivate:function(bD){var bE=this.__jM(bD);

if(bE){this.setActive(bE);
}},__jy:function(P,Q,R,S){var U=qx.event.Registration;
var T=U.createEvent(R,qx.event.type.Focus,[P,Q,S]);
U.dispatchEvent(P,T);
},_windowFocused:true,__jz:function(){if(this._windowFocused){this._windowFocused=false;
this.__jy(this._window,null,bc,false);
}},__jA:function(){if(!this._windowFocused){this._windowFocused=true;
this.__jy(this._window,null,bb,false);
}},_initObserver:qx.core.Variant.select(bf,{"gecko":function(){this.__jo=qx.lang.Function.listener(this.__jG,this);
this.__jp=qx.lang.Function.listener(this.__jH,this);
this.__jq=qx.lang.Function.listener(this.__jF,this);
this.__jr=qx.lang.Function.listener(this.__jE,this);
this.__js=qx.lang.Function.listener(this.__jB,this);
this._document.addEventListener(be,this.__jo,true);
this._document.addEventListener(bd,this.__jp,true);
this._window.addEventListener(bb,this.__jq,true);
this._window.addEventListener(bc,this.__jr,true);
this._window.addEventListener(bz,this.__js,true);
},"mshtml":function(){this.__jo=qx.lang.Function.listener(this.__jG,this);
this.__jp=qx.lang.Function.listener(this.__jH,this);
this.__ju=qx.lang.Function.listener(this.__jC,this);
this.__jv=qx.lang.Function.listener(this.__jD,this);
this.__jt=qx.lang.Function.listener(this.__jJ,this);
this._document.attachEvent(by,this.__jo);
this._document.attachEvent(bn,this.__jp);
this._document.attachEvent(bk,this.__ju);
this._document.attachEvent(bt,this.__jv);
this._document.attachEvent(bp,this.__jt);
},"webkit":function(){this.__jo=qx.lang.Function.listener(this.__jG,this);
this.__jp=qx.lang.Function.listener(this.__jH,this);
this.__jv=qx.lang.Function.listener(this.__jD,this);
this.__jq=qx.lang.Function.listener(this.__jF,this);
this.__jr=qx.lang.Function.listener(this.__jE,this);
this.__jt=qx.lang.Function.listener(this.__jJ,this);
this._document.addEventListener(be,this.__jo,true);
this._document.addEventListener(bd,this.__jp,true);
this._document.addEventListener(X,this.__jt,false);
this._window.addEventListener(Y,this.__jv,true);
this._window.addEventListener(bb,this.__jq,true);
this._window.addEventListener(bc,this.__jr,true);
},"opera":function(){this.__jo=qx.lang.Function.listener(this.__jG,this);
this.__jp=qx.lang.Function.listener(this.__jH,this);
this.__ju=qx.lang.Function.listener(this.__jC,this);
this.__jv=qx.lang.Function.listener(this.__jD,this);
this._document.addEventListener(be,this.__jo,true);
this._document.addEventListener(bd,this.__jp,true);
this._window.addEventListener(W,this.__ju,true);
this._window.addEventListener(Y,this.__jv,true);
}}),_stopObserver:qx.core.Variant.select(bf,{"gecko":function(){this._document.removeEventListener(be,this.__jo,true);
this._document.removeEventListener(bd,this.__jp,true);
this._window.removeEventListener(bb,this.__jq,true);
this._window.removeEventListener(bc,this.__jr,true);
this._window.removeEventListener(bz,this.__js,true);
},"mshtml":function(){var Event=qx.bom.Event;
Event.removeNativeListener(this._document,be,this.__jo);
Event.removeNativeListener(this._document,bd,this.__jp);
Event.removeNativeListener(this._document,V,this.__ju);
Event.removeNativeListener(this._document,bA,this.__jv);
Event.removeNativeListener(this._document,X,this.__jt);
},"webkit":function(){this._document.removeEventListener(be,this.__jo,true);
this._document.removeEventListener(bd,this.__jp,true);
this._document.removeEventListener(X,this.__jt,false);
this._window.removeEventListener(Y,this.__jv,true);
this._window.removeEventListener(bb,this.__jq,true);
this._window.removeEventListener(bc,this.__jr,true);
},"opera":function(){this._document.removeEventListener(be,this.__jo,true);
this._document.removeEventListener(bd,this.__jp,true);
this._window.removeEventListener(W,this.__ju,true);
this._window.removeEventListener(Y,this.__jv,true);
}}),__jB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){if(!this.__jN(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__jC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){this.__jA();
var bC=e.srcElement;
var bB=this.__jL(bC);

if(bB){this.setFocus(bB);
}this.tryActivate(bC);
},"opera":function(e){var bM=e.target;

if(bM==this._document||bM==this._window){this.__jA();

if(this.__jw){this.setFocus(this.__jw);
delete this.__jw;
}
if(this.__jx){this.setActive(this.__jx);
delete this.__jx;
}}else{this.setFocus(bM);
this.tryActivate(bM);
if(!this.__jN(bM)){bM.selectionStart=0;
bM.selectionEnd=0;
}}},"default":null})),__jD:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){if(!e.toElement){this.__jz();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var a=e.target;

if(a===this.getFocus()){this.resetFocus();
}
if(a===this.getActive()){this.resetActive();
}},"opera":function(e){var N=e.target;

if(N==this._document){this.__jz();
this.__jw=this.getFocus();
this.__jx=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(N===this.getFocus()){this.resetFocus();
}
if(N===this.getActive()){this.resetActive();
}}},"default":null})),__jE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__jz();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__jz();
this.__jw=this.getFocus();
this.__jx=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__jF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){var bN=e.target;

if(bN===this._window||bN===this._document){this.__jA();
bN=this._body;
}this.setFocus(bN);
this.tryActivate(bN);
},"webkit":function(e){var O=e.target;

if(O===this._window||O===this._document){this.__jA();

if(this.__jw){this.setFocus(this.__jw);
delete this.__jw;
}
if(this.__jx){this.setActive(this.__jx);
delete this.__jx;
}}else{this.setFocus(O);
this.tryActivate(O);
}},"default":null})),__jG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){var F=this.__jL(e.target);

if(!F){qx.bom.Event.preventDefault(e);
}else if(F===this._body){this.setFocus(F);
}},"mshtml":function(e){var bJ=e.srcElement;
var bI=this.__jL(bJ);

if(bI){if(!this.__jN(bJ)){bJ.unselectable=ba;
try{document.selection.empty();
}catch(e){}try{bI.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__jN(bJ)){bJ.unselectable=ba;
}}},"webkit":function(e){var h=e.target;
var g=this.__jL(h);

if(g){this.setFocus(g);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var E=e.target;
var C=this.__jL(E);

if(!this.__jN(E)){qx.bom.Event.preventDefault(e);
if(C){var D=this.getFocus();

if(D&&D.selectionEnd){D.selectionStart=0;
D.selectionEnd=0;
D.blur();
}if(C){this.setFocus(C);
}}}else if(C){this.setFocus(C);
}},"default":null})),__jH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){var J=e.srcElement;

if(J.unselectable){J.unselectable=bj;
}this.tryActivate(this.__jI(J));
},"gecko":function(e){var n=e.target;

while(n&&n.offsetWidth===undefined){n=n.parentNode;
}
if(n){this.tryActivate(n);
}},"webkit|opera":function(e){this.tryActivate(this.__jI(e.target));
},"default":null})),__jI:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml|webkit":function(t){var u=this.getFocus();

if(u&&t!=u&&(u.nodeName.toLowerCase()===bm||u.nodeName.toLowerCase()===bu)){t=u;
}return t;
},"default":function(i){return i;
}})),__jJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml|webkit":function(e){var x=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__jN(x)){qx.bom.Event.preventDefault(e);
}},"default":null})),__jK:function(j){var k=qx.bom.element.Attribute.get(j,bi);

if(k>=1){return true;
}var l=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(k>=0&&l[j.tagName]){return true;
}return false;
},__jL:function(z){while(z&&z.nodeType===1){if(z.getAttribute(bo)==ba){return null;
}
if(this.__jK(z)){return z;
}z=z.parentNode;
}return this._body;
},__jM:function(H){var I=H;

while(H&&H.nodeType===1){if(H.getAttribute(bq)==ba){return null;
}H=H.parentNode;
}return I;
},__jN:function(L){while(L&&L.nodeType===1){var M=L.getAttribute(bl);

if(M!=null){return M===ba;
}L=L.parentNode;
}return true;
},_applyActive:function(v,w){if(w){this.__jy(w,v,bv,true);
}
if(v){this.__jy(v,w,bg,true);
}},_applyFocus:function(r,s){if(s){this.__jy(s,r,bA,true);
}
if(r){this.__jy(r,s,V,true);
}if(s){this.__jy(s,r,bc,false);
}
if(r){this.__jy(r,s,bb,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__jO=null;
},defer:function(c){qx.event.Registration.addHandler(c);
var d=c.FOCUSABLE_ELEMENTS;

for(var f in d){d[f.toUpperCase()]=1;
}}});
})();
(function(){var q="qx.client",p="character",o="EndToEnd",n="input",m="textarea",l="StartToStart",k='character',j="qx.bom.Selection",i="button",h="#text",g="body";
qx.Class.define(j,{statics:{getSelectionObject:qx.core.Variant.select(q,{"mshtml":function(R){return R.selection;
},"default":function(br){return qx.dom.Node.getWindow(br).getSelection();
}}),get:qx.core.Variant.select(q,{"mshtml":function(bg){var bh=qx.bom.Range.get(qx.dom.Node.getDocument(bg));
return bh.text;
},"default":function(H){if(this.__kB(H)){return H.value.substring(H.selectionStart,H.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(H)).toString();
}}}),getLength:qx.core.Variant.select(q,{"mshtml":function(bw){var by=this.get(bw);
var bx=qx.util.StringSplit.split(by,/\r\n/);
return by.length-(bx.length-1);
},"opera":function(a){var f,d,b;

if(this.__kB(a)){var e=a.selectionStart;
var c=a.selectionEnd;
f=a.value.substring(e,c);
d=c-e;
}else{f=qx.bom.Selection.get(a);
d=f.length;
}b=qx.util.StringSplit.split(f,/\r\n/);
return d-(b.length-1);
},"default":function(bi){if(this.__kB(bi)){return bi.selectionEnd-bi.selectionStart;
}else{return this.get(bi).length;
}}}),getStart:qx.core.Variant.select(q,{"mshtml":function(V){if(this.__kB(V)){var bb=qx.bom.Range.get();
if(!V.contains(bb.parentElement())){return -1;
}var bc=qx.bom.Range.get(V);
var ba=V.value.length;
bc.moveToBookmark(bb.getBookmark());
bc.moveEnd(k,ba);
return ba-bc.text.length;
}else{var bc=qx.bom.Range.get(V);
var X=bc.parentElement();
var bd=qx.bom.Range.get();
bd.moveToElementText(X);
var W=qx.bom.Range.get(qx.dom.Node.getBodyElement(V));
W.setEndPoint(l,bc);
W.setEndPoint(o,bd);
if(bd.compareEndPoints(l,W)==0){return 0;
}var Y;
var be=0;

while(true){Y=W.moveStart(p,-1);
if(bd.compareEndPoints(l,W)==0){break;
}if(Y==0){break;
}else{be++;
}}return ++be;
}},"gecko|webkit":function(bt){if(this.__kB(bt)){return bt.selectionStart;
}else{var bv=qx.dom.Node.getDocument(bt);
var bu=this.getSelectionObject(bv);
if(bu.anchorOffset<bu.focusOffset){return bu.anchorOffset;
}else{return bu.focusOffset;
}}},"default":function(bq){if(this.__kB(bq)){return bq.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bq)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(q,{"mshtml":function(r){if(this.__kB(r)){var w=qx.bom.Range.get();
if(!r.contains(w.parentElement())){return -1;
}var x=qx.bom.Range.get(r);
var v=r.value.length;
x.moveToBookmark(w.getBookmark());
x.moveStart(k,-v);
return x.text.length;
}else{var x=qx.bom.Range.get(r);
var t=x.parentElement();
var y=qx.bom.Range.get();
y.moveToElementText(t);
var v=y.text.length;
var s=qx.bom.Range.get(qx.dom.Node.getBodyElement(r));
s.setEndPoint(o,x);
s.setEndPoint(l,y);
if(y.compareEndPoints(o,s)==0){return v-1;
}var u;
var z=0;

while(true){u=s.moveEnd(p,1);
if(y.compareEndPoints(o,s)==0){break;
}if(u==0){break;
}else{z++;
}}return v-(++z);
}},"gecko|webkit":function(S){if(this.__kB(S)){return S.selectionEnd;
}else{var U=qx.dom.Node.getDocument(S);
var T=this.getSelectionObject(U);
if(T.focusOffset>T.anchorOffset){return T.focusOffset;
}else{return T.anchorOffset;
}}},"default":function(bf){if(this.__kB(bf)){return bf.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bf)).focusOffset;
}}}),__kB:function(bs){return qx.dom.Node.isElement(bs)&&(bs.nodeName.toLowerCase()==n||bs.nodeName.toLowerCase()==m);
},set:qx.core.Variant.select(q,{"mshtml":function(M,N,O){var P;
if(qx.dom.Node.isDocument(M)){M=M.body;
}
if(qx.dom.Node.isElement(M)||qx.dom.Node.isText(M)){switch(M.nodeName.toLowerCase()){case n:case m:case i:if(O===undefined){O=M.value.length;
}
if(N>=0&&N<=M.value.length&&O>=0&&O<=M.value.length){P=qx.bom.Range.get(M);
P.collapse(true);
P.moveStart(p,N);
P.moveEnd(p,O-N);
P.select();
return true;
}break;
case h:if(O===undefined){O=M.nodeValue.length;
}
if(N>=0&&N<=M.nodeValue.length&&O>=0&&O<=M.nodeValue.length){P=qx.bom.Range.get(qx.dom.Node.getBodyElement(M));
P.moveToElementText(M.parentNode);
P.collapse(true);
P.moveStart(p,N);
P.moveEnd(p,O-N);
P.select();
return true;
}break;
default:if(O===undefined){O=M.childNodes.length-1;
}if(M.childNodes[N]&&M.childNodes[O]){P=qx.bom.Range.get(qx.dom.Node.getBodyElement(M));
P.moveToElementText(M.childNodes[N]);
P.collapse(true);
var Q=qx.bom.Range.get(qx.dom.Node.getBodyElement(M));
Q.moveToElementText(M.childNodes[O]);
P.setEndPoint(o,Q);
P.select();
return true;
}}}return false;
},"default":function(A,B,C){var G=A.nodeName.toLowerCase();

if(qx.dom.Node.isElement(A)&&(G==n||G==m)){if(C===undefined){C=A.value.length;
}if(B>=0&&B<=A.value.length&&C>=0&&C<=A.value.length){A.focus();
A.select();
A.setSelectionRange(B,C);
return true;
}}else{var E=false;
var F=qx.dom.Node.getWindow(A).getSelection();
var D=qx.bom.Range.get(A);
if(qx.dom.Node.isText(A)){if(C===undefined){C=A.length;
}
if(B>=0&&B<A.length&&C>=0&&C<=A.length){E=true;
}}else if(qx.dom.Node.isElement(A)){if(C===undefined){C=A.childNodes.length-1;
}
if(B>=0&&A.childNodes[B]&&C>=0&&A.childNodes[C]){E=true;
}}else if(qx.dom.Node.isDocument(A)){A=A.body;

if(C===undefined){C=A.childNodes.length-1;
}
if(B>=0&&A.childNodes[B]&&C>=0&&A.childNodes[C]){E=true;
}}
if(E){if(!F.isCollapsed){F.collapseToStart();
}D.setStart(A,B);
if(qx.dom.Node.isText(A)){D.setEnd(A,C);
}else{D.setEndAfter(A.childNodes[C]);
}if(F.rangeCount>0){F.removeAllRanges();
}F.addRange(D);
return true;
}}return false;
}}),setAll:function(bp){return qx.bom.Selection.set(bp,0);
},clear:qx.core.Variant.select(q,{"mshtml":function(I){var J=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(I));
var K=qx.bom.Range.get(I);
var parent=K.parentElement();
var L=qx.bom.Range.get(qx.dom.Node.getDocument(I));
if(parent==L.parentElement()&&parent==I){J.empty();
}},"default":function(bj){var bl=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bj));
var bn=bj.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bj)&&(bn==n||bn==m)){bj.setSelectionRange(0,0);
qx.bom.Element.blur(bj);
}else if(qx.dom.Node.isDocument(bj)||bn==g){bl.collapse(bj.body?bj.body:bj,0);
}else{var bm=qx.bom.Range.get(bj);

if(!bm.collapsed){var bo;
var bk=bm.commonAncestorContainer;
if(qx.dom.Node.isElement(bj)&&qx.dom.Node.isText(bk)){bo=bk.parentNode;
}else{bo=bk;
}
if(bo==bj){bl.collapse(bj,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case j:case i:case c:case l:case f:case h:case g:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case e:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var j="",h="m",g="g",f="^",e="qx.util.StringSplit",d="i",c="$(?!\\s)",b="[object RegExp]",a="y";
qx.Class.define(e,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==b){return String.prototype.split.call(k,l,m);
}var t=[],n=0,r=(l.ignoreCase?d:j)+(l.multiline?h:j)+(l.sticky?a:j),l=RegExp(l.source,r+g),q,u,o,p,s=/()??/.exec(j)[1]===undefined;
k=k+j;

if(!s){q=RegExp(f+l.source+c,r);
}if(m===undefined||+m<0){m=Infinity;
}else{m=Math.floor(+m);

if(!m){return [];
}}
while(u=l.exec(k)){o=u.index+u[0].length;

if(o>n){t.push(k.slice(n,u.index));
if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;
}}});
}
if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));
}p=u[0].length;
n=o;

if(t.length>=m){break;
}}
if(l.lastIndex===u.index){l.lastIndex++;
}}
if(n===k.length){if(p||!l.test(j)){t.push(j);
}}else{t.push(k.slice(n));
}return t.length>m?t.slice(0,m):t;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__gM:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(C){var D=[];
var F=this.__gM.runtime;

for(var E in C){if(!F[E]){D.push(E,t,C[E],y);
}}return D.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(K,name){var M=this.__gM;
var L;
name=M.names[name]||name;
if(M.original[name]){L=K.getAttribute(name,2);
}else if(M.property[name]){L=K[name];

if(typeof M.propertyDefault[name]!==i&&L==M.propertyDefault[name]){if(typeof M.bools[name]===i){return null;
}else{return L;
}}}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
},"default":function(z,name){var B=this.__gM;
var A;
name=B.names[name]||name;
if(B.property[name]){A=z[name];

if(typeof B.propertyDefault[name]!==i&&A==B.propertyDefault[name]){if(typeof B.bools[name]===i){return null;
}else{return A;
}}}else{A=z.getAttribute(name);
}if(B.bools[name]){return !!A;
}return A;
}}),set:function(G,name,H){var I=this.__gM;
name=I.names[name]||name;
if(I.bools[name]){H=!!H;
}if(I.property[name]&&(!(G[name]===undefined)||I.qxProperties[name])){if(H==null){if(I.removeableProperties[name]){G.removeAttribute(name);
return;
}else if(typeof I.propertyDefault[name]!==i){H=I.propertyDefault[name];
}}G[name]=H;
}else{if(H===true){G.setAttribute(name,name);
}else if(H===false||H===null){G.removeAttribute(name);
}else{G.setAttribute(name,H);
}}},reset:function(J,name){this.set(J,name,null);
}}});
})();
(function(){var h="qx.client",g="left",f="right",e="middle",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(i,j,k,l,m){qx.event.type.Dom.prototype.init.call(this,i,j,k,l,m);

if(!k){this._relatedTarget=qx.bom.Event.getRelatedTarget(i);
}return this;
},_cloneNativeEvent:function(o,p){var p=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,o,p);
p.button=o.button;
p.clientX=o.clientX;
p.clientY=o.clientY;
p.pageX=o.pageX;
p.pageY=o.pageY;
p.screenX=o.screenX;
p.screenY=o.screenY;
p.wheelDelta=o.wheelDelta;
p.detail=o.detail;
p.srcElement=o.srcElement;
return p;
},__kb:qx.core.Variant.select(h,{"mshtml":{1:g,2:f,4:e},"default":{0:g,2:f,1:e}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case b:return f;
case d:if(this.__kc){return this.__kc();
}default:return this.__kb[this._native.button]||c;
}},__kc:qx.core.Variant.select(h,{"mshtml":function(){return g;
},"default":null}),isLeftPressed:function(){return this.getButton()===g;
},isMiddlePressed:function(){return this.getButton()===e;
},isRightPressed:function(){return this.getButton()===f;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(h,{"mshtml":function(){var n=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(n);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(h,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(q);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){if(qx.bom.client.Browser.VERSION>=7){return -(this._native.wheelDelta/30);
}return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17||qx.bom.client.Engine.VERSION==533.18){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__kY:function(C){var D=navigator.userAgent;
var F=new RegExp(t+C+e);
var G=D.match(F);

if(!G){return;
}var name=G[1].toLowerCase();
var E=G[3];
if(D.match(/Version(\/| )([0-9]+\.[0-9])/)){E=RegExp.$2;
}
if(qx.core.Variant.isSet(k,n)){if(name===h){name=f;
}else if(D.indexOf(b)!==-1||D.indexOf(m)!==-1){name=x;
}}else if(qx.core.Variant.isSet(k,r)){if(name===i){name=j;
if(qx.bom.client.System.WINCE&&name===j){name=d;
E=o;
}}}else if(qx.core.Variant.isSet(k,s)){if(name===c){name=y;
}else if(name===u){name=g;
}}this.NAME=name;
this.FULLVERSION=E;
this.VERSION=parseFloat(E,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(k,{"webkit":function(B){B.__kY(p);
},"gecko":function(z){z.__kY(l);
},"mshtml":function(a){a.__kY(w);
},"opera":function(A){A.__kY(q);
}})});
})();
(function(){var L="qx.client",K="qx.dom.Hierarchy",J="previousSibling",I="*",H="nextSibling",G="parentNode";
qx.Class.define(K,{statics:{getNodeIndex:function(A){var B=0;

while(A&&(A=A.previousSibling)){B++;
}return B;
},getElementIndex:function(D){var E=0;
var F=qx.dom.Node.ELEMENT;

while(D&&(D=D.previousSibling)){if(D.nodeType==F){E++;
}}return E;
},getNextElementSibling:function(x){while(x&&(x=x.nextSibling)&&!qx.dom.Node.isElement(x)){continue;
}return x||null;
},getPreviousElementSibling:function(v){while(v&&(v=v.previousSibling)&&!qx.dom.Node.isElement(v)){continue;
}return v||null;
},contains:qx.core.Variant.select(L,{"webkit|mshtml|opera":function(k,l){if(qx.dom.Node.isDocument(k)){var m=qx.dom.Node.getDocument(l);
return k&&m==k;
}else if(qx.dom.Node.isDocument(l)){return false;
}else{return k.contains(l);
}},"gecko":function(q,r){return !!(q.compareDocumentPosition(r)&16);
},"default":function(U,V){while(V){if(U==V){return true;
}V=V.parentNode;
}return false;
}}),isRendered:function(o){if(!o.parentNode||!o.offsetParent){return false;
}var p=o.ownerDocument||o.document;
if(p.body.contains){return p.body.contains(o);
}if(p.compareDocumentPosition){return !!(p.compareDocumentPosition(o)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(i,j){return this.contains(j,i);
},getCommonParent:qx.core.Variant.select(L,{"mshtml|opera":function(Q,R){if(Q===R){return Q;
}
while(Q&&qx.dom.Node.isElement(Q)){if(Q.contains(R)){return Q;
}Q=Q.parentNode;
}return null;
},"default":function(a,b){if(a===b){return a;
}var c={};
var f=qx.core.ObjectRegistry;
var e,d;

while(a||b){if(a){e=f.toHashCode(a);

if(c[e]){return c[e];
}c[e]=a;
a=a.parentNode;
}
if(b){d=f.toHashCode(b);

if(c[d]){return c[d];
}c[d]=b;
b=b.parentNode;
}}return null;
}}),getAncestors:function(M){return this._recursivelyCollect(M,G);
},getChildElements:function(g){g=g.firstChild;

if(!g){return [];
}var h=this.getNextSiblings(g);

if(g.nodeType===1){h.unshift(g);
}return h;
},getDescendants:function(z){return qx.lang.Array.fromCollection(z.getElementsByTagName(I));
},getFirstDescendant:function(n){n=n.firstChild;

while(n&&n.nodeType!=1){n=n.nextSibling;
}return n;
},getLastDescendant:function(T){T=T.lastChild;

while(T&&T.nodeType!=1){T=T.previousSibling;
}return T;
},getPreviousSiblings:function(S){return this._recursivelyCollect(S,J);
},getNextSiblings:function(w){return this._recursivelyCollect(w,H);
},_recursivelyCollect:function(s,t){var u=[];

while(s=s[t]){if(s.nodeType==1){u.push(s);
}}return u;
},getSiblings:function(y){return this.getPreviousSiblings(y).reverse().concat(this.getNextSiblings(y));
},isEmpty:function(C){C=C.firstChild;

while(C){if(C.nodeType===qx.dom.Node.ELEMENT||C.nodeType===qx.dom.Node.TEXT){return false;
}C=C.nextSibling;
}return true;
},cleanWhitespace:function(N){var O=N.firstChild;

while(O){var P=O.nextSibling;

if(O.nodeType==3&&!/\S/.test(O.nodeValue)){N.removeChild(O);
}O=P;
}}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(j,k){qx.event.type.Event.prototype.init.call(this,true,j);

if(k){this._native=k.getNativeEvent()||null;
this._originalTarget=k.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(c){var d=qx.event.type.Event.prototype.clone.call(this,c);
d._native=this._native;
return d;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(l);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(g){this.getManager().addType(g);
},addAction:function(m){this.getManager().addAction(m);
},supportsType:function(n){return this.getManager().supportsType(n);
},supportsAction:function(f){return this.getManager().supportsAction(f);
},addData:function(h,i){this.getManager().addData(h,i);
},getData:function(e){return this.getManager().getData(e);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var j="losecapture",i="qx.client",h="blur",g="focus",f="click",e="qx.event.dispatch.MouseCapture",d="capture",c="scroll";
qx.Class.define(e,{extend:qx.event.dispatch.AbstractBubbling,construct:function(r,s){qx.event.dispatch.AbstractBubbling.call(this,r);
this.__gg=r.getWindow();
this.__gh=s;
r.addListener(this.__gg,h,this.releaseCapture,this);
r.addListener(this.__gg,g,this.releaseCapture,this);
r.addListener(this.__gg,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__gh:null,__gi:null,__gj:true,__gg:null,_getParent:function(p){return p.parentNode;
},canDispatchEvent:function(n,event,o){return (this.__gi&&this.__gk[o]);
},dispatchEvent:function(u,event,v){if(v==f){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__gj||!qx.dom.Hierarchy.contains(this.__gi,u)){u=this.__gi;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,u,event,v);
},__gk:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(a,b){var b=b!==false;

if(this.__gi===a&&this.__gj==b){return;
}
if(this.__gi){this.releaseCapture();
}this.nativeSetCapture(a,b);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(a,j,function(){qx.bom.Event.removeNativeListener(a,j,arguments.callee);
self.releaseCapture();
});
}this.__gj=b;
this.__gi=a;
this.__gh.fireEvent(a,d,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gi;
},releaseCapture:function(){var m=this.__gi;

if(!m){return;
}this.__gi=null;
this.__gh.fireEvent(m,j,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(m);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(i,{"mshtml":function(k,l){qx.event.Timer.once(function(){k.setCapture(l!==false);
},this,0);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(i,{"mshtml":function(t){qx.event.Timer.once(function(){t.releaseCapture();
},this,0);
},"default":qx.lang.Function.empty})},destruct:function(){this.__gi=this.__gg=this.__gh=null;
},defer:function(q){qx.event.Registration.addDispatcher(q);
}});
})();
(function(){var s="qx.client",r="",q="mshtml",p="'",o="SelectionLanguage",n="qx.xml.Document",m=" />",k="MSXML2.DOMDocument.3.0",j='<\?xml version="1.0" encoding="utf-8"?>\n<',h="MSXML2.XMLHTTP.3.0",d="MSXML2.XMLHTTP.6.0",g=" xmlns='",f="text/xml",c="XPath",b="MSXML2.DOMDocument.6.0",e="HTML";
qx.Class.define(n,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(a){if(a.nodeType===9){return a.documentElement.nodeName!==e;
}else if(a.ownerDocument){return this.isXmlDocument(a.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(s,{"mshtml":function(u,v){var w=new ActiveXObject(this.DOMDOC);
w.setProperty(o,c);

if(v){var x=j;
x+=v;

if(u){x+=g+u+p;
}x+=m;
w.loadXML(x);
}return w;
},"default":function(C,D){return document.implementation.createDocument(C||r,D||r,null);
}}),fromString:qx.core.Variant.select(s,{"mshtml":function(A){var B=qx.xml.Document.create();
B.loadXML(A);
return B;
},"default":function(y){var z=new DOMParser();
return z.parseFromString(y,f);
}})},defer:function(E){if(qx.core.Variant.isSet(s,q)){var F=[b,k];
var G=[d,h];

for(var i=0,l=F.length;i<l;i++){try{new ActiveXObject(F[i]);
new ActiveXObject(G[i]);
}catch(t){continue;
}E.DOMDOC=F[i];
E.XMLHTTP=G[i];
break;
}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;
var r=qx.dom.Node.getDocument(l);
var n=r.body;
var z,x,u;
var B,s,C;
var v,D,G;
var E,p,y,o;
var t,F,w;
var q=m===g;
var A=m===c;
stop=stop?stop.parentNode:r;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){x=parent.scrollLeft;
u=x+qx.bom.Viewport.getWidth();
B=qx.bom.Viewport.getWidth();
s=parent.clientWidth;
C=parent.scrollWidth;
v=0;
D=0;
G=0;
}else{z=qx.bom.element.Location.get(parent);
x=z.left;
u=z.right;
B=parent.offsetWidth;
s=parent.clientWidth;
C=parent.scrollWidth;
v=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
D=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
G=B-s-v-D;
}E=qx.bom.element.Location.get(l);
p=E.left;
y=E.right;
o=l.offsetWidth;
t=p-x-v;
F=y-u+D;
w=0;
if(q){w=t;
}else if(A){w=F+G;
}else if(t<0||o>s){w=t;
}else if(F>0){w=F+G;
}parent.scrollLeft+=w;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(K,stop,L){var parent=K.parentNode;
var R=qx.dom.Node.getDocument(K);
var M=R.body;
var ba,N,V;
var bc,Y,T;
var P,Q,O;
var be,bf,bb,U;
var X,S,bg;
var bd=L===d;
var W=L===e;
stop=stop?stop.parentNode:R;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){N=parent.scrollTop;
V=N+qx.bom.Viewport.getHeight();
bc=qx.bom.Viewport.getHeight();
Y=parent.clientHeight;
T=parent.scrollHeight;
P=0;
Q=0;
O=0;
}else{ba=qx.bom.element.Location.get(parent);
N=ba.top;
V=ba.bottom;
bc=parent.offsetHeight;
Y=parent.clientHeight;
T=parent.scrollHeight;
P=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
Q=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
O=bc-Y-P-Q;
}be=qx.bom.element.Location.get(K);
bf=be.top;
bb=be.bottom;
U=K.offsetHeight;
X=bf-N-P;
S=bb-V+Q;
bg=0;
if(bd){bg=X;
}else if(W){bg=S+O;
}else if(X<0||U>Y){bg=X;
}else if(S>0){bg=S+O;
}parent.scrollTop+=bg;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
})();
(function(){var C="borderTopWidth",B="borderLeftWidth",A="marginTop",z="marginLeft",y="scroll",x="qx.client",w="border-box",v="borderBottomWidth",u="borderRightWidth",t="auto",R="padding",Q="qx.bom.element.Location",P="paddingLeft",O="static",N="marginBottom",M="visible",L="BODY",K="paddingBottom",J="paddingTop",I="marginRight",G="position",H="margin",E="overflow",F="paddingRight",D="border";
qx.Class.define(Q,{statics:{__ih:function(ba,bb){return qx.bom.element.Style.get(ba,bb,qx.bom.element.Style.COMPUTED_MODE,false);
},__ii:function(c,d){return parseInt(qx.bom.element.Style.get(c,d,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ij:function(S){var V=0,top=0;
if(S.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var U=qx.dom.Node.getWindow(S);
V-=qx.bom.Viewport.getScrollLeft(U);
top-=qx.bom.Viewport.getScrollTop(U);
}else{var T=qx.dom.Node.getDocument(S).body;
S=S.parentNode;
while(S&&S!=T){V+=S.scrollLeft;
top+=S.scrollTop;
S=S.parentNode;
}}return {left:V,top:top};
},__ik:qx.core.Variant.select(x,{"mshtml":function(bw){var by=qx.dom.Node.getDocument(bw);
var bx=by.body;
var bz=0;
var top=0;
bz-=bx.clientLeft+by.documentElement.clientLeft;
top-=bx.clientTop+by.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bz+=this.__ii(bx,B);
top+=this.__ii(bx,C);
}return {left:bz,top:top};
},"webkit":function(p){var r=qx.dom.Node.getDocument(p);
var q=r.body;
var s=q.offsetLeft;
var top=q.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){s+=this.__ii(q,B);
top+=this.__ii(q,C);
}return {left:s,top:top};
},"gecko":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){Y+=this.__ii(X,z);
top+=this.__ii(X,A);
}if(qx.bom.element.BoxSizing.get(X)!==w){Y+=this.__ii(X,B);
top+=this.__ii(X,C);
}return {left:Y,top:top};
},"default":function(bd){var be=qx.dom.Node.getDocument(bd).body;
var bf=be.offsetLeft;
var top=be.offsetTop;
return {left:bf,top:top};
}}),__il:qx.core.Variant.select(x,{"mshtml|webkit":function(bJ){var bL=qx.dom.Node.getDocument(bJ);
if(bJ.getBoundingClientRect){var bM=bJ.getBoundingClientRect();
var bN=bM.left;
var top=bM.top;
}else{var bN=bJ.offsetLeft;
var top=bJ.offsetTop;
bJ=bJ.offsetParent;
var bK=bL.body;
while(bJ&&bJ!=bK){bN+=bJ.offsetLeft;
top+=bJ.offsetTop;
bN+=this.__ii(bJ,B);
top+=this.__ii(bJ,C);
bJ=bJ.offsetParent;
}}return {left:bN,top:top};
},"gecko":function(bl){if(bl.getBoundingClientRect){var bo=bl.getBoundingClientRect();
var bp=Math.round(bo.left);
var top=Math.round(bo.top);
}else{var bp=0;
var top=0;
var bm=qx.dom.Node.getDocument(bl).body;
var bn=qx.bom.element.BoxSizing;

if(bn.get(bl)!==w){bp-=this.__ii(bl,B);
top-=this.__ii(bl,C);
}
while(bl&&bl!==bm){bp+=bl.offsetLeft;
top+=bl.offsetTop;
if(bn.get(bl)!==w){bp+=this.__ii(bl,B);
top+=this.__ii(bl,C);
}if(bl.parentNode&&this.__ih(bl.parentNode,E)!=M){bp+=this.__ii(bl.parentNode,B);
top+=this.__ii(bl.parentNode,C);
}bl=bl.offsetParent;
}}return {left:bp,top:top};
},"default":function(bg){var bi=0;
var top=0;
var bh=qx.dom.Node.getDocument(bg).body;
while(bg&&bg!==bh){bi+=bg.offsetLeft;
top+=bg.offsetTop;
bg=bg.offsetParent;
}return {left:bi,top:top};
}}),get:function(e,f){if(e.tagName==L){var location=this.__im(e);
var m=location.left;
var top=location.top;
}else{var g=this.__ik(e);
var l=this.__il(e);
var scroll=this.__ij(e);
var m=l.left+g.left-scroll.left;
var top=l.top+g.top-scroll.top;
}var h=m+e.offsetWidth;
var i=top+e.offsetHeight;

if(f){if(f==R||f==y){var j=qx.bom.element.Overflow.getX(e);

if(j==y||j==t){h+=e.scrollWidth-e.offsetWidth+this.__ii(e,B)+this.__ii(e,u);
}var k=qx.bom.element.Overflow.getY(e);

if(k==y||k==t){i+=e.scrollHeight-e.offsetHeight+this.__ii(e,C)+this.__ii(e,v);
}}
switch(f){case R:m+=this.__ii(e,P);
top+=this.__ii(e,J);
h-=this.__ii(e,F);
i-=this.__ii(e,K);
case y:m-=e.scrollLeft;
top-=e.scrollTop;
h-=e.scrollLeft;
i-=e.scrollTop;
case D:m+=this.__ii(e,B);
top+=this.__ii(e,C);
h-=this.__ii(e,u);
i-=this.__ii(e,v);
break;
case H:m-=this.__ii(e,z);
top-=this.__ii(e,A);
h+=this.__ii(e,I);
i+=this.__ii(e,N);
break;
}}return {left:m,top:top,right:h,bottom:i};
},__im:qx.core.Variant.select(x,{"default":function(n){var top=n.offsetTop+this.__ii(n,A);
var o=n.offsetLeft+this.__ii(n,z);
return {left:o,top:top};
},"mshtml":function(bj){var top=bj.offsetTop;
var bk=bj.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__ii(bj,A);
bk+=this.__ii(bj,z);
}return {left:bk,top:top};
},"gecko":function(bO){var top=bO.offsetTop+this.__ii(bO,A)+this.__ii(bO,B);
var bP=bO.offsetLeft+this.__ii(bO,z)+this.__ii(bO,C);
return {left:bP,top:top};
}}),getLeft:function(a,b){return this.get(a,b).left;
},getTop:function(bC,bD){return this.get(bC,bD).top;
},getRight:function(bA,bB){return this.get(bA,bB).right;
},getBottom:function(bH,bI){return this.get(bH,bI).bottom;
},getRelative:function(bq,br,bs,bt){var bv=this.get(bq,bs);
var bu=this.get(br,bt);
return {left:bv.left-bu.left,top:bv.top-bu.top,right:bv.right-bu.right,bottom:bv.bottom-bu.bottom};
},getPosition:function(bc){return this.getRelative(bc,this.getOffsetParent(bc));
},getOffsetParent:function(bE){var bG=bE.offsetParent||document.body;
var bF=qx.bom.element.Style;

while(bG&&(!/^body|html$/i.test(bG.tagName)&&bF.get(bG,G)===O)){bG=bG.offsetParent;
}return bG;
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__ia:{},remove:function(f){delete this.__ia[f.$$hash];
},add:function(g){var h=this.__ia;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__ia;
var e;

for(var d in c){e=c[d];
delete c[d];
e.syncWidget();
}for(var d in c){return;
}this.__ia={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__hL:{},__hM:{},remove:function(o){var p=o.$$hash;
delete this.__hM[p];
delete this.__hL[p];
},isVisible:function(n){return this.__hM[n.$$hash]||false;
},__hN:function(e){var g=this.__hM;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__hN(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(c){var d=this.__hL;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var i=this.__hL;
var m=this.__hM;
for(var j in i){if(m[j]!=null){i[j].addChildrenToQueue(i);
}}var l={};

for(var j in i){l[j]=m[j];
m[j]=null;
}for(var j in i){var k=i[j];
delete i[j];
if(m[j]==null){this.__hN(k);
}if(m[j]&&m[j]!=l[j]){k.checkAppearanceNeeds();
}}this.__hL={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__hc:{},remove:function(j){delete this.__hc[j.$$hash];
},add:function(c){var d=this.__hc;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(e){return !!this.__hc[e.$$hash];
},flush:function(){var i=qx.ui.core.queue.Visibility;
var f=this.__hc;
var h;

for(var g in f){h=f[g];
delete f[g];
if(i.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__eN:{},add:function(c){var d=this.__eN;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__eN;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__eN={};
}}});
})();
(function(){var d="none",c="qx.html.Decorator",b="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(g,h){var i={position:b,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){i.pointerEvents=d;
}qx.html.Element.call(this,null,i);
this.__jP=g;
this.__jQ=h||g.toHashCode();
this.useMarkup(g.getMarkup());
},members:{__jQ:null,__jP:null,getId:function(){return this.__jQ;
},getDecorator:function(){return this.__jP;
},resize:function(e,f){this.__jP.resize(this.getDomElement(),e,f);
},tint:function(a){this.__jP.tint(this.getDomElement(),a);
},getInsets:function(){return this.__jP.getInsets();
}},destruct:function(){this.__jP=null;
}});
})();
(function(){var h="blur",g="focus",f="input",e="load",d="qx.ui.core.EventHandler",c="activate";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__eg=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__eg:null,__eh:{focusin:1,focusout:1,focus:1,blur:1},__ei:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(a,b){return a instanceof qx.ui.core.Widget;
},_dispatchEvent:function(o){var t=o.getTarget();
var s=qx.ui.core.Widget.getWidgetByElement(t);
var u=false;

while(s&&s.isAnonymous()){var u=true;
s=s.getLayoutParent();
}if(s&&u&&o.getType()==c){s.getContainerElement().activate();
}if(this.__eh[o.getType()]){s=s&&s.getFocusTarget();
if(!s){return;
}}if(o.getRelatedTarget){var B=o.getRelatedTarget();
var A=qx.ui.core.Widget.getWidgetByElement(B);

while(A&&A.isAnonymous()){A=A.getLayoutParent();
}
if(A){if(this.__eh[o.getType()]){A=A.getFocusTarget();
}if(A===s){return;
}}}var w=o.getCurrentTarget();
var y=qx.ui.core.Widget.getWidgetByElement(w);

if(!y||y.isAnonymous()){return;
}if(this.__eh[o.getType()]){y=y.getFocusTarget();
}var z=o.getType();

if(!y||!(y.isEnabled()||this.__ei[z])){return;
}var p=o.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var v=this.__eg.getListeners(y,z,p);

if(!v||v.length===0){return;
}var q=qx.event.Pool.getInstance().getObject(o.constructor);
o.clone(q);
q.setTarget(s);
q.setRelatedTarget(A||null);
q.setCurrentTarget(y);
var C=o.getOriginalTarget();

if(C){var r=qx.ui.core.Widget.getWidgetByElement(C);

while(r&&r.isAnonymous()){r=r.getLayoutParent();
}q.setOriginalTarget(r);
}else{q.setOriginalTarget(t);
}for(var i=0,l=v.length;i<l;i++){var x=v[i].context||y;
v[i].handler.call(x,q);
}if(q.getPropagationStopped()){o.stopPropagation();
}
if(q.getDefaultPrevented()){o.preventDefault();
}qx.event.Pool.getInstance().poolObject(q);
},registerEvent:function(j,k,m){var n;

if(k===g||k===h){n=j.getFocusElement();
}else if(k===e||k===f){n=j.getContentElement();
}else{n=j.getContainerElement();
}
if(n){n.addListener(k,this._dispatchEvent,this,m);
}},unregisterEvent:function(D,E,F){var G;

if(E===g||E===h){G=D.getFocusElement();
}else if(E===e||E===f){G=D.getContentElement();
}else{G=D.getContainerElement();
}
if(G){G.removeListener(E,this._dispatchEvent,this,F);
}}},destruct:function(){this.__eg=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__kX:function(){var d=(navigator.userLanguage||navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__kX();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(x){var x=x||t;
this.__lw=x;
this.length=x.length;
},members:{$$isString:true,length:0,__lw:null,toString:function(){return this.__lw;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(y,z){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(u,v){{};
var w=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
v.valueOf=v.toString;

if(new u(t).valueOf()==null){delete v.valueOf;
}
for(var i=0,l=w.length;i<l;i++){v[w[i]]=String.prototype[w[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__ej=c;
this.__ek=d;
},members:{__ej:null,__ek:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__ej,this.__ek);
}}});
})();
(function(){var n="_",m="",l="_applyLocale",k="changeLocale",j="C",h="qx.dynlocale",g="on",f="qx.locale.Manager",e="String",d="singleton";
qx.Class.define(f,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__in=qx.$$translations||{};
this.__io=qx.$$locales||{};
var r=qx.bom.client.Locale;
var p=r.LOCALE;
var q=r.VARIANT;

if(q!==m){p+=n+q;
}this.__ip=p;
this.setLocale(p||this.__iq);
},statics:{tr:function(a,b){var c=qx.lang.Array.fromArguments(arguments);
c.splice(0,1);
return qx.locale.Manager.getInstance().translate(a,c);
},trn:function(G,H,I,J){var K=qx.lang.Array.fromArguments(arguments);
K.splice(0,3);
if(I!=1){return qx.locale.Manager.getInstance().translate(H,K);
}else{return qx.locale.Manager.getInstance().translate(G,K);
}},trc:function(bb,bc,bd){var be=qx.lang.Array.fromArguments(arguments);
be.splice(0,2);
return qx.locale.Manager.getInstance().translate(bc,be);
},marktr:function(o){return o;
}},properties:{locale:{check:e,nullable:true,apply:l,event:k}},members:{__iq:j,__ir:null,__is:null,__in:null,__io:null,__ip:null,getLanguage:function(){return this.__is;
},getTerritory:function(){return this.getLocale().split(n)[1]||m;
},getAvailableLocales:function(){var bg=[];

for(var bf in this.__io){if(bf!=this.__iq){bg.push(bf);
}}return bg;
},__it:function(P){var R;
var Q=P.indexOf(n);

if(Q==-1){R=P;
}else{R=P.substring(0,Q);
}return R;
},_applyLocale:function(E,F){{};
this.__ir=E;
this.__is=this.__it(E);
},addTranslation:function(S,T){var U=this.__in;

if(U[S]){for(var V in T){U[S][V]=T[V];
}}else{U[S]=T;
}},addLocale:function(L,M){var N=this.__io;

if(N[L]){for(var O in M){N[L][O]=M[O];
}}else{N[L]=M;
}},translate:function(A,B,C){var D=this.__in;
return this.__iu(D,A,B,C);
},localize:function(W,X,Y){var ba=this.__io;
return this.__iu(ba,W,X,Y);
},__iu:function(s,t,u,v){var w;

if(!s){return t;
}
if(v){var y=this.__it(v);
}else{v=this.__ir;
y=this.__is;
}if(!w&&s[v]){w=s[v][t];
}if(!w&&s[y]){w=s[y][t];
}if(!w&&s[this.__iq]){w=s[this.__iq][t];
}
if(!w){w=t;
}
if(u.length>0){var x=[];

for(var i=0;i<u.length;i++){var z=u[i];

if(z&&z.translate){x[i]=z.translate();
}else{x[i]=z;
}}w=qx.lang.String.format(w,x);
}
if(qx.core.Variant.isSet(h,g)){w=new qx.locale.LocalizedString(w,t,u);
}return w;
}},destruct:function(){this.__in=this.__io=null;
}});
})();
(function(){var j="source",i="scale",h="no-repeat",g="qx.client",f="mshtml",e="webkit",d="backgroundImage",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,k){qx.html.Element.prototype._applyProperty.call(this,name,k);

if(name===j){var o=this.getDomElement();
var l=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(d)){l.backgroundPosition=null;
l.backgroundRepeat=null;
}var m=this._getProperty(j);
var n=this._getProperty(i);
var p=n?i:h;
if(m!=null){qx.bom.element.Decoration.update(o,m,p,l);
}}},_createDomElement:function(){var u=this._getProperty(i);
var v=u?i:h;

if(qx.core.Variant.isSet(g,f)){var t=this._getProperty(j);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v,t));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(r){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(q){this._setProperty(j,q);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){if(qx.core.Variant.isSet(g,e)){this._setProperty(j,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(j,true);
}return this;
},setScale:function(s){this._setProperty(i,s);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var m="nonScaled",l="scaled",k="alphaScaled",j=".png",i="qx.client",h="div",g="replacement",f="qx.event.type.Event",e="hidden",d="Boolean",B="px",A="scale",z="changeSource",y="qx.ui.basic.Image",x="loaded",w="-disabled.$1",v="loadingFailed",u="String",t="_applySource",s="img",q="image",r="__iv",o="mshtml",p="_applyScale",n="no-repeat";
qx.Class.define(y,{extend:qx.ui.core.Widget,construct:function(bm){this.__iv={};
qx.ui.core.Widget.call(this);

if(bm){this.setSource(bm);
}},properties:{source:{check:u,init:null,nullable:true,event:z,apply:t,themeable:true},scale:{check:d,init:false,themeable:true,apply:p},appearance:{refine:true,init:q},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:f,loaded:f},members:{__iw:null,__ix:null,__iy:null,__iv:null,getContentElement:function(){return this.__iC();
},_createContentElement:function(){return this.__iC();
},_getContentHint:function(){return {width:this.__iw||0,height:this.__ix||0};
},_applyEnabled:function(C,D){qx.ui.core.Widget.prototype._applyEnabled.call(this,C,D);

if(this.getSource()){this._styleSource();
}},_applySource:function(c){this._styleSource();
},_applyScale:function(O){this._styleSource();
},__iz:function(I){this.__iy=I;
},__iA:function(){if(this.__iy==null){var Q=this.getSource();
var P=false;

if(Q!=null){P=qx.lang.String.endsWith(Q,j);
}
if(this.getScale()&&P&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__iy=k;
}else if(this.getScale()){this.__iy=l;
}else{this.__iy=m;
}}return this.__iy;
},__iB:function(R){var S;
var T;

if(R==k){S=true;
T=h;
}else if(R==m){S=false;
T=h;
}else{S=true;
T=s;
}var U=new qx.html.Image(T);
U.setScale(S);
U.setStyles({"overflowX":e,"overflowY":e});
return U;
},__iC:function(){var V=this.__iA();

if(this.__iv[V]==null){this.__iv[V]=this.__iB(V);
}return this.__iv[V];
},_styleSource:function(){var bo=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!bo){this.getContentElement().resetSource();
return;
}this.__iD(bo);

if(qx.core.Variant.isSet(i,o)){var bp=this.getScale()?A:n;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(bp,bo);
}if(qx.util.ResourceManager.getInstance().has(bo)){this.__iF(this.getContentElement(),bo);
}else if(qx.io.ImageLoader.isLoaded(bo)){this.__iG(this.getContentElement(),bo);
}else{this.__iH(this.getContentElement(),bo);
}},__iD:qx.core.Variant.select(i,{"mshtml":function(J){var L=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var K=qx.lang.String.endsWith(J,j);

if(L&&K){if(this.getScale()&&this.__iA()!=k){this.__iz(k);
}else if(!this.getScale()&&this.__iA()!=m){this.__iz(m);
}}else{if(this.getScale()&&this.__iA()!=l){this.__iz(l);
}else if(!this.getScale()&&this.__iA()!=m){this.__iz(m);
}}this.__iE(this.__iC());
},"default":function(bn){if(this.getScale()&&this.__iA()!=l){this.__iz(l);
}else if(!this.getScale()&&this.__iA(m)){this.__iz(m);
}this.__iE(this.__iC());
}}),__iE:function(bc){var bf=this.getContainerElement();
var bg=bf.getChild(0);

if(bg!=bc){if(bg!=null){var bi=B;
var bd={};
var be=this.getInnerSize();

if(be!=null){bd.width=be.width+bi;
bd.height=be.height+bi;
}var bh=this.getInsets();
bd.left=bh.left+bi;
bd.top=bh.top+bi;
bd.zIndex=10;
bc.setStyles(bd,true);
bc.setSelectable(this.getSelectable());
}bf.removeAt(0);
bf.addAt(bc,0);
}},__iF:function(E,F){var H=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var G=F.replace(/\.([a-z]+)$/,w);

if(H.has(G)){F=G;
this.addState(g);
}else{this.removeState(g);
}}if(E.getSource()===F){return;
}E.setSource(F);
this.__iJ(H.getImageWidth(F),H.getImageHeight(F));
},__iG:function(W,X){var ba=qx.io.ImageLoader;
W.setSource(X);
var Y=ba.getWidth(X);
var bb=ba.getHeight(X);
this.__iJ(Y,bb);
},__iH:function(bj,bk){var self;
var bl=qx.io.ImageLoader;
{};
if(!bl.isFailed(bk)){bl.load(bk,this.__iI,this);
}else{if(bj!=null){bj.resetSource();
}}},__iI:function(M,N){if(this.$$disposed===true){return;
}if(M!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(N.failed){this.warn("Image could not be loaded: "+M);
this.fireEvent(v);
}else{this.fireEvent(x);
}this._styleSource();
},__iJ:function(a,b){if(a!==this.__iw||b!==this.__ix){this.__iw=a;
this.__ix=b;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(r);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var g="interval",f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);
var a=new qx.event.Timer(this.getTimeoutInterval());
a.addListener(g,this._onInterval,this);
a.start();
this.__kj=a;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__kj:null,_applyTimeoutInterval:function(h){this.__kj.setInterval(h);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__kj){this.__kj.stop();
}this.__kj=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b="direct",a='__hd';
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hd=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__he:null,compute:function(x,y,z,A,B,C,D){this.__he=this.__he||new qx.util.placement.Placement();
var G=B.split(f);
var F=G[0];
var E=G[1];
this.__he.set({axisX:this.__hi(C),axisY:this.__hi(D),edge:F,align:E});
return this.__he.compute(x,y,z,A);
},__hf:null,__hg:null,__hh:null,__hi:function(w){switch(w){case b:this.__hf=this.__hf||new qx.util.placement.DirectAxis();
return this.__hf;
case d:this.__hg=this.__hg||new qx.util.placement.KeepAlignAxis();
return this.__hg;
case c:this.__hh=this.__hh||new qx.util.placement.BestFitAxis();
return this.__hh;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__hd:null,compute:function(p,q,r,s){{};
var t=this.getAxisX()||this.__hd;
var v=t.computeStart(p.width,{start:r.left,end:r.right},{start:s.left,end:s.right},q.width,this.__hj());
var u=this.getAxisY()||this.__hd;
var top=u.computeStart(p.height,{start:r.top,end:r.bottom},{start:s.top,end:s.bottom},q.height,this.__hk());
return {left:v,top:top};
},__hj:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==l){return i;
}else if(I==n){return g;
}else if(H==l){return k;
}else if(H==n){return h;
}},__hk:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(m,n,o,p,q){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(i,j,k,l){switch(l){case e:return j.start-k.end-i;
case b:return j.end+k.start;
case d:return j.start+k.start;
case c:return j.end-k.end-i;
}},_isInRange:function(f,g,h){return f>=0&&f+g<=h;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var f="mousedown",d="__qM",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qM=[];
qx.event.Registration.addListener(document.documentElement,f,this.__qO,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__qM:null,add:function(k){{};
this.__qM.push(k);
this.__qN();
},remove:function(l){{};

if(this.__qM){qx.lang.Array.remove(this.__qM,l);
this.__qN();
}},hideAll:function(){if(this.__qM){for(var i=0;i<this.__qM.length;i++){this.__qM[i].exclude();
}}},__qN:function(){var m=1e7;

for(var i=0;i<this.__qM.length;i++){this.__qM[i].setZIndex(m++);
}},__qO:function(e){var h=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var j=this.__qM;

for(var i=0;i<j.length;i++){var g=j[i];

if(!g.getAutoHide()||h==g||qx.ui.core.Widget.contains(g,h)){continue;
}g.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__qO,this,true);
this._disposeArray(d);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__gl:null,_invalidChildrenCache:null,__gm:null,invalidateLayoutCache:function(){this.__gl=null;
},renderLayout:function(f,g){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__gl){return this.__gl;
}return this.__gl=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(d){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var e=this.__gm;

if(e instanceof qx.ui.core.LayoutItem){e.clearSeparators();
}},_renderSeparator:function(h,i){this.__gm.renderSeparator(h,i);
},connectToWidget:function(c){if(c&&this.__gm){throw new Error("It is not possible to manually set the connected widget.");
}this.__gm=c;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__gm;
},_applyLayoutChange:function(){if(this.__gm){this.__gm.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__gm.getLayoutChildren();
}},destruct:function(){this.__gm=this.__gl=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(m,n){var r=this._getLayoutChildren();
var q,s,p,o;
for(var i=0,l=r.length;i<l;i++){q=r[i];
s=q.getSizeHint();
p=m;

if(p<s.minWidth){p=s.minWidth;
}else if(p>s.maxWidth){p=s.maxWidth;
}o=n;

if(o<s.minHeight){o=s.minHeight;
}else if(o>s.maxHeight){o=s.maxHeight;
}q.renderLayout(0,0,p,o);
}},_computeSizeHint:function(){var h=this._getLayoutChildren();
var f,k;
var j=0,g=0;
var e=0,c=0;
var b=Infinity,d=Infinity;
for(var i=0,l=h.length;i<l;i++){f=h[i];
k=f.getSizeHint();
j=Math.max(j,k.width);
g=Math.max(g,k.height);
e=Math.max(e,k.minWidth);
c=Math.max(c,k.minHeight);
b=Math.min(b,k.maxWidth);
d=Math.min(d,k.maxHeight);
}return {width:j,height:g,minWidth:e,minHeight:c,maxWidth:b,maxHeight:d};
}}});
})();
(function(){var l="label",k="icon",j="Boolean",i="both",h="String",g="left",f="changeGap",e="changeShow",d="bottom",c="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="top",s="right",r="_applyRich",q="_applyIcon",p="_applyShow",n="_applyLabel",o="_applyGap",m="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(N,O){{};
qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(N!=null){this.setLabel(N);
}
if(O!=null){this.setIcon(O);
}},properties:{appearance:{refine:true,init:m},label:{apply:n,nullable:true,check:h,event:w},rich:{check:j,init:false,apply:r},icon:{check:h,apply:q,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:f,apply:o,themeable:true,init:4},show:{init:i,check:[i,l,k],themeable:true,inheritable:true,apply:p,event:e},iconPosition:{init:g,check:[t,s,d,g],themeable:true,apply:u},center:{init:false,check:j,themeable:true,apply:c}},members:{_createChildControlImpl:function(a){var b;

switch(a){case l:b=new qx.ui.basic.Label(this.getLabel());
b.setAnonymous(true);
b.setRich(this.getRich());
this._add(b);

if(this.getLabel()==null||this.getShow()===k){b.exclude();
}break;
case k:b=new qx.ui.basic.Image(this.getIcon());
b.setAnonymous(true);
this._addAt(b,0);

if(this.getIcon()==null||this.getShow()===l){b.exclude();
}break;
}return b||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,a);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===k){this._excludeChildControl(l);
}else{this._showChildControl(l);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===l){this._excludeChildControl(k);
}else{this._showChildControl(k);
}},_applyLabel:function(K,L){var M=this.getChildControl(l,true);

if(M){M.setValue(K);
}this._handleLabel();
},_applyRich:function(P,Q){var R=this.getChildControl(l,true);

if(R){R.setRich(P);
}},_applyIcon:function(H,I){var J=this.getChildControl(k,true);

if(J){J.setSource(H);
}this._handleIcon();
},_applyGap:function(F,G){this._getLayout().setGap(F);
},_applyShow:function(B,C){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(D,E){this._getLayout().setIconPosition(D);
},_applyCenter:function(z,A){this._getLayout().setCenter(z);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(l,m){var v=qx.ui.layout.Util;
var o=this.getIconPosition();
var r=this._getLayoutChildren();
var length=r.length;
var F,top,w,p;
var B,u;
var z=this.getGap();
var E=this.getCenter();
if(o===k||o===f){var x=length-1;
var s=-1;
var q=-1;
}else{var x=0;
var s=length;
var q=1;
}if(o==h||o==k){if(E){var A=0;

for(var i=x;i!=s;i+=q){p=r[i].getSizeHint().height;

if(p>0){A+=p;

if(i!=x){A+=z;
}}}top=Math.round((m-A)/2);
}else{top=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
w=Math.min(u.maxWidth,Math.max(l,u.minWidth));
p=u.height;
F=v.computeHorizontalAlignOffset(d,w,l);
B.renderLayout(F,top,w,p);
if(p>0){top+=p+z;
}}}else{var t=l;
var n=null;
var D=0;

for(var i=x;i!=s;i+=q){B=r[i];
w=B.getSizeHint().width;

if(w>0){if(!n&&B instanceof qx.ui.basic.Label){n=B;
}else{t-=w;
}D++;
}}
if(D>1){var C=(D-1)*z;
t-=C;
}
if(n){var u=n.getSizeHint();
var y=Math.max(u.minWidth,Math.min(t,u.maxWidth));
t-=y;
}
if(E&&t>0){F=Math.round(t/2);
}else{F=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
p=Math.min(u.maxHeight,Math.max(m,u.minHeight));

if(B===n){w=y;
}else{w=u.width;
}top=v.computeVerticalAlignOffset(e,u.height,m);
B.renderLayout(F,top,w,p);
if(w>0){F+=w+z;
}}}},_computeSizeHint:function(){var Q=this._getLayoutChildren();
var length=Q.length;
var I,O;
if(length===1){var I=Q[0].getSizeHint();
O={width:I.width,height:I.height,minWidth:I.minWidth,minHeight:I.minHeight};
}else{var M=0,N=0;
var J=0,L=0;
var K=this.getIconPosition();
var P=this.getGap();

if(K===h||K===k){var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
N=Math.max(N,I.width);
M=Math.max(M,I.minWidth);
if(I.height>0){L+=I.height;
J+=I.minHeight;
G++;
}}
if(G>1){var H=(G-1)*P;
L+=H;
J+=H;
}}else{var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
L=Math.max(L,I.height);
J=Math.max(J,I.minHeight);
if(I.width>0){N+=I.width;
M+=I.minWidth;
G++;
}}
if(G>1){var H=(G-1)*P;
N+=H;
M+=H;
}}O={minWidth:M,width:N,minHeight:J,height:L};
}return O;
}}});
})();
(function(){var g="middle",f="qx.ui.layout.Util",e="left",d="center",c="top",b="bottom",a="right";
qx.Class.define(f,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(L,M,N){var P,T,O,U;
var Q=M>N;
var V=Math.abs(M-N);
var W,R;
var S={};

for(T in L){P=L[T];
S[T]={potential:Q?P.max-P.value:P.value-P.min,flex:Q?P.flex:1/P.flex,offset:0};
}while(V!=0){U=Infinity;
O=0;

for(T in S){P=S[T];

if(P.potential>0){O+=P.flex;
U=Math.min(U,P.potential/P.flex);
}}if(O==0){break;
}U=Math.min(V,U*O)/O;
W=0;

for(T in S){P=S[T];

if(P.potential>0){R=Math.min(V,P.potential,Math.ceil(U*P.flex));
W+=R-U*P.flex;

if(W>=1){W-=1;
R-=1;
}P.potential-=R;

if(Q){P.offset+=R;
}else{P.offset-=R;
}V-=R;
}}}return S;
},computeHorizontalAlignOffset:function(F,G,H,I,J){if(I==null){I=0;
}
if(J==null){J=0;
}var K=0;

switch(F){case e:K=I;
break;
case a:K=H-G-J;
break;
case d:K=Math.round((H-G)/2);
if(K<I){K=I;
}else if(K<J){K=Math.max(I,H-G-J);
}break;
}return K;
},computeVerticalAlignOffset:function(h,j,k,m,n){if(m==null){m=0;
}
if(n==null){n=0;
}var o=0;

switch(h){case c:o=m;
break;
case b:o=k-j-n;
break;
case g:o=Math.round((k-j)/2);
if(o<m){o=m;
}else if(o<n){o=Math.max(m,k-j-n);
}break;
}return o;
},collapseMargins:function(bm){var bn=0,bp=0;

for(var i=0,l=arguments.length;i<l;i++){var bo=arguments[i];

if(bo<0){bp=Math.min(bp,bo);
}else if(bo>0){bn=Math.max(bn,bo);
}}return bn+bp;
},computeHorizontalGaps:function(B,C,D){if(C==null){C=0;
}var E=0;

if(D){E+=B[0].getMarginLeft();

for(var i=1,l=B.length;i<l;i+=1){E+=this.collapseMargins(C,B[i-1].getMarginRight(),B[i].getMarginLeft());
}E+=B[l-1].getMarginRight();
}else{for(var i=1,l=B.length;i<l;i+=1){E+=B[i].getMarginLeft()+B[i].getMarginRight();
}E+=(C*(l-1));
}return E;
},computeVerticalGaps:function(x,y,z){if(y==null){y=0;
}var A=0;

if(z){A+=x[0].getMarginTop();

for(var i=1,l=x.length;i<l;i+=1){A+=this.collapseMargins(y,x[i-1].getMarginBottom(),x[i].getMarginTop());
}A+=x[l-1].getMarginBottom();
}else{for(var i=1,l=x.length;i<l;i+=1){A+=x[i].getMarginTop()+x[i].getMarginBottom();
}A+=(y*(l-1));
}return A;
},computeHorizontalSeparatorGaps:function(p,q,r){var u=qx.theme.manager.Decoration.getInstance().resolve(r);
var t=u.getInsets();
var s=t.left+t.right;
var v=0;

for(var i=0,l=p.length;i<l;i++){var w=p[i];
v+=w.getMarginLeft()+w.getMarginRight();
}v+=(q+s+q)*(l-1);
return v;
},computeVerticalSeparatorGaps:function(X,Y,ba){var bd=qx.theme.manager.Decoration.getInstance().resolve(ba);
var bc=bd.getInsets();
var bb=bc.top+bc.bottom;
var be=0;

for(var i=0,l=X.length;i<l;i++){var bf=X[i];
be+=bf.getMarginTop()+bf.getMarginBottom();
}be+=(Y+bb+Y)*(l-1);
return be;
},arrangeIdeals:function(bg,bh,bi,bj,bk,bl){if(bh<bg||bk<bj){if(bh<bg&&bk<bj){bh=bg;
bk=bj;
}else if(bh<bg){bk-=(bg-bh);
bh=bg;
if(bk<bj){bk=bj;
}}else if(bk<bj){bh-=(bj-bk);
bk=bj;
if(bh<bg){bh=bg;
}}}
if(bh>bi||bk>bl){if(bh>bi&&bk>bl){bh=bi;
bk=bl;
}else if(bh>bi){bk+=(bh-bi);
bh=bi;
if(bk>bl){bk=bl;
}}else if(bk>bl){bh+=(bk-bl);
bk=bl;
if(bh>bi){bh=bi;
}}}return {begin:bh,end:bk};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="qx.dynlocale",j="text",i="Boolean",h="color",g="userSelect",f="changeLocale",d="enabled",c="none",b="on",a="_applyTextAlign",H="qx.ui.core.Widget",G="nowrap",F="changeTextAlign",E="_applyWrap",D="changeValue",C="qx.client",B="changeContent",A="qx.ui.basic.Label",z="A",y="whiteSpace",r="_applyValue",s="center",p="_applyBuddy",q="String",n="textAlign",o="right",l="changeRich",m="normal",t="_applyRich",u="click",w="label",v="webkit",x="left";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(I){qx.ui.core.Widget.call(this);

if(I!=null){this.setValue(I);
}
if(qx.core.Variant.isSet(k,b)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:l,apply:t},wrap:{check:i,init:true,apply:E},value:{check:q,apply:r,event:D,nullable:true},buddy:{check:H,apply:p,nullable:true,init:null,dereference:true},textAlign:{check:[x,s,o],nullable:true,themeable:true,apply:a,event:F},appearance:{refine:true,init:w},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__gu:null,__gv:null,__gw:null,__gx:null,_getContentHint:function(){if(this.__gv){this.__gy=this.__gz();
delete this.__gv;
}return {width:this.__gy.width,height:this.__gy.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(bf){if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){if(bf&&!this.isRich()){{};
return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,bf);
if(qx.core.Variant.isSet(C,v)){this.getContainerElement().setStyle(g,bf?j:c);
this.getContentElement().setStyle(g,bf?j:c);
}},_getContentHeightForWidth:function(bb){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__gz(bb).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(O,P){this.getContentElement().setStyle(n,O);
},_applyTextColor:function(S,T){if(S){this.getContentElement().setStyle(h,qx.theme.manager.Color.getInstance().resolve(S));
}else{this.getContentElement().removeStyle(h);
}},__gy:{width:0,height:0},_applyFont:function(X,Y){var ba;

if(X){this.__gu=qx.theme.manager.Font.getInstance().resolve(X);
ba=this.__gu.getStyles();
}else{this.__gu=null;
ba=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(ba);
this.__gv=true;
qx.ui.core.queue.Layout.add(this);
},__gz:function(J){var N=qx.bom.Label;
var L=this.getFont();
var K=L?this.__gu.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||z;
var M=this.getRich();
return M?N.getHtmlSize(content,K,J):N.getTextSize(content,K);
},_applyBuddy:function(Q,R){if(R!=null){R.removeBinding(this.__gw);
this.__gw=null;
this.removeListenerById(this.__gx);
this.__gx=null;
}
if(Q!=null){this.__gw=Q.bind(d,this,d);
this.__gx=this.addListener(u,function(){if(Q.isFocusable()){Q.focus.apply(Q);
}},this);
}},_applyRich:function(U){this.getContentElement().setRich(U);
this.__gv=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(bc,bd){if(bc&&!this.isRich()){{};
}
if(this.isRich()){var be=bc?m:G;
this.getContentElement().setStyle(y,be);
}},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(V,W){this.getContentElement().setValue(V);
this.__gv=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(B,V,W);
}},destruct:function(){if(qx.core.Variant.isSet(k,b)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__gw!=null){var bg=this.getBuddy();

if(bg!=null&&!bg.isDisposed()){bg.removeBinding(this.__gw);
}}this.__gu=this.__gw=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__dJ:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__dJ;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(i){var j=this.getDomElement();

if(j){throw new Error("The label mode cannot be modified after initial creation");
}i=!!i;

if(this.__dJ==i){return;
}this.__dJ=i;
return this;
},setValue:function(g){this._setProperty(b,g);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var p="div",o="inherit",n="text",m="value",l="",k="hidden",j="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",i="nowrap",h="qx.client",g="auto",F="0",E="ellipsis",D="normal",C="label",B="px",A="crop",z="gecko",y="end",x="100%",w="visible",u="qx.bom.Label",v="opera",s="block",t="none",q="-1000px",r="absolute";
qx.Class.define(u,{statics:{__iK:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__iL:function(){var L=this.__iN(false);
document.body.insertBefore(L,document.body.firstChild);
return this._textElement=L;
},__iM:function(){var bd=this.__iN(true);
document.body.insertBefore(bd,document.body.firstChild);
return this._htmlElement=bd;
},__iN:function(P){var Q=qx.bom.Element.create(p);
var R=Q.style;
R.width=R.height=g;
R.left=R.top=q;
R.visibility=k;
R.position=r;
R.overflow=w;

if(P){R.whiteSpace=D;
}else{R.whiteSpace=i;

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var S=document.createElementNS(j,C);
var R=S.style;
R.padding=F;

for(var T in this.__iK){R[T]=o;
}Q.appendChild(S);
}}return Q;
},__iO:function(J){var K={};

if(J){K.whiteSpace=D;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){K.display=s;
}else{K.overflow=k;
K.whiteSpace=i;
K.textOverflow=E;
K.userSelect=t;
if(qx.core.Variant.isSet(h,v)){K.OTextOverflow=E;
}}return K;
},create:function(content,a,b){if(!b){b=window;
}
if(a){var c=b.document.createElement(p);
c.useHtml=true;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var c=b.document.createElement(p);
var e=b.document.createElementNS(j,C);
var d=e.style;
d.cursor=o;
d.color=o;
d.overflow=k;
d.maxWidth=x;
d.padding=F;
for(var f in this.__iK){e.style[f]=o;
}e.setAttribute(A,y);
c.appendChild(e);
}else{var c=b.document.createElement(p);
qx.bom.element.Style.setStyles(c,this.__iO(a));
}
if(content){this.setValue(c,content);
}return c;
},setValue:function(M,N){N=N||l;

if(M.useHtml){M.innerHTML=N;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){M.firstChild.setAttribute(m,N);
}else{qx.bom.element.Attribute.set(M,n,N);
}},getValue:function(O){if(O.useHtml){return O.innerHTML;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){return O.firstChild.getAttribute(m)||l;
}else{return qx.bom.element.Attribute.get(O,n);
}},getHtmlSize:function(content,ba,bb){var bc=this._htmlElement||this.__iM();
bc.style.width=bb!==undefined?bb+B:g;
bc.innerHTML=content;
return this.__iP(bc,ba);
},getTextSize:function(G,H){var I=this._textElement||this.__iL();

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){I.firstChild.setAttribute(m,G);
}else{qx.bom.element.Attribute.set(I,n,G);
}return this.__iP(I,H);
},__iP:function(U,V){var W=this.__iK;

if(!V){V={};
}
for(var X in W){U.style[X]=V[X]||l;
}var Y=qx.bom.element.Dimension.getSize(U);

if(qx.core.Variant.isSet(h,z)){if(!qx.bom.client.Platform.WIN){Y.width++;
}}return Y;
}}});
})();
(function(){var h="0px",g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(i){if(i.getBoundingClientRect){var j=i.getBoundingClientRect();
return Math.round(j.right)-Math.round(j.left);
}else{return i.offsetWidth;
}},"default":function(w){return w.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(t){if(t.getBoundingClientRect){var u=t.getBoundingClientRect();
return Math.round(u.bottom)-Math.round(u.top);
}else{return t.offsetHeight;
}},"default":function(s){return s.offsetHeight;
}}),getSize:function(r){return {width:this.getWidth(r),height:this.getHeight(r)};
},__hA:{visible:true,hidden:true},getContentWidth:function(x){var z=qx.bom.element.Style;
var A=qx.bom.element.Overflow.getX(x);
var B=parseInt(z.get(x,c)||h,10);
var E=parseInt(z.get(x,d)||h,10);

if(this.__hA[A]){var D=x.clientWidth;

if(D>0){D=D-B-E;
}return D;
}else{if(x.clientWidth>=x.scrollWidth){return Math.max(x.clientWidth,x.scrollWidth)-B-E;
}else{var C=x.scrollWidth-B;
var y=qx.bom.client.Engine;

if(y.NAME===g&&y.VERSION==6){C-=E;
}return C;
}}},getContentHeight:function(k){var m=qx.bom.element.Style;
var o=qx.bom.element.Overflow.getY(k);
var p=parseInt(m.get(k,b)||h,10);
var n=parseInt(m.get(k,a)||h,10);

if(this.__hA[o]){return k.clientHeight-p-n;
}else{if(k.clientHeight>=k.scrollHeight){return Math.max(k.clientHeight,k.scrollHeight)-p-n;
}else{var q=k.scrollHeight-p;
var l=qx.bom.client.Engine;

if(l.NAME===g&&l.VERSION==6){q-=n;
}return q;
}}},getContentSize:function(v){return {width:this.getContentWidth(v),height:this.getContentHeight(v)};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(f){return arguments.length==1;
},getRequired:function(){},setValid:function(c){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(g){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(e){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__re",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__re=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__re:null,_applyBlockerColor:function(i,j){this.__re.setColor(i);
},_applyBlockerOpacity:function(g,h){this.__re.setOpacity(g);
},block:function(){this.__re.block();
},isBlocked:function(){return this.__re.isBlocked();
},unblock:function(){this.__re.unblock();
},forceUnblock:function(){this.__re.forceUnblock();
},blockContent:function(k){this.__re.blockContent(k);
},isContentBlocked:function(){return this.__re.isContentBlocked();
},unblockContent:function(){this.__re.unblockContent();
},forceUnblockContent:function(){this.__re.forceUnblockContent();
},getBlocker:function(){return this.__re;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__no",b="__np",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__no:null,__np:null,getWindowManager:function(){if(!this.__np){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__np;
},supportsMaximize:function(){return true;
},setWindowManager:function(n){if(this.__np){this.__np.setDesktop(null);
}n.setDesktop(this);
this.__np=n;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(j,k){this.getWindowManager().changeActiveWindow(j,k);
this.getWindowManager().updateStack();
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(p){if(qx.Class.isDefined(i)&&p instanceof qx.ui.window.Window){this._addWindow(p);
}},_addWindow:function(l){if(!qx.lang.Array.contains(this.getWindows(),l)){this.getWindows().push(l);
l.addListener(f,this._onChangeActive,this);
l.addListener(h,this._onChangeModal,this);
l.addListener(g,this._onChangeVisibility,this);
}
if(l.getActive()){this.setActiveWindow(l);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(f,this._onChangeActive,this);
m.removeListener(h,this._onChangeModal,this);
m.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__no){this.__no=[];
}return this.__no;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(b);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__mn:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(u,v){},"default":function(y,z){var A=qx.bom.Stylesheet;
var B=this.__mn;

if(!B){this.__mn=B=A.createElement();
}A.removeAllRules(B);

if(y){A.addRule(B,a,qx.bom.element.Cursor.compile(y).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(q,r){if(q){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(w,x){if(x===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(w===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__mn=null;
},defer:function(s,t){qx.ui.core.MChildrenHandling.remap(t);
}});
})();
(function(){var q="resize",p="position",o="0px",n="webkit",m="paddingLeft",l="$$widget",k="qx.ui.root.Application",j="hidden",i="qx.client",h="div",d="paddingTop",g="100%",f="absolute";
qx.Class.define(k,{extend:qx.ui.root.Abstract,construct:function(A){this.__rf=qx.dom.Node.getWindow(A);
this.__rg=A;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__rf,q,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__rf:null,__rg:null,_createContainerElement:function(){var v=this.__rg;
if(qx.core.Variant.isSet(i,n)){if(!v.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var z=v.documentElement.style;
var w=v.body.style;
z.overflow=w.overflow=j;
z.padding=z.margin=w.padding=w.margin=o;
z.width=z.height=w.width=w.height=g;
var y=v.createElement(h);
v.body.appendChild(y);
var x=new qx.html.Root(y);
x.setStyle(p,f);
x.setAttribute(l,this.toHashCode());
return x;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var r=qx.bom.Viewport.getWidth(this.__rf);
var s=qx.bom.Viewport.getHeight(this.__rf);
return {minWidth:r,width:r,maxWidth:r,minHeight:s,height:s,maxHeight:s};
},_applyPadding:function(t,u,name){if(t&&(name==d||name==m)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,t,u,name);
},_applyDecorator:function(a,b){qx.ui.root.Abstract.prototype._applyDecorator.call(this,a,b);

if(!a){return;
}var c=this.getDecoratorElement().getInsets();

if(c.left||c.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__rf=this.__rg=null;
}});
})();
(function(){var z="zIndex",y="px",x="keydown",w="deactivate",v="resize",u="keypress",t="keyup",s="backgroundColor",r="_applyOpacity",q="Boolean",L="opacity",K="interval",J="Tab",I="Color",H="qx.ui.root.Page",G="__oW",F="__pb",E="__oY",D="Number",C="qx.ui.core.Blocker",A="qx.ui.root.Application",B="_applyColor";
qx.Class.define(C,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this._widget=c;
this._isPageRoot=(qx.Class.isDefined(H)&&c instanceof qx.ui.root.Page);

if(this._isPageRoot){c.addListener(v,this.__pc,this);
}
if(qx.Class.isDefined(A)&&c instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__oT=[];
this.__oU=[];
this.__oV=[];
},properties:{color:{check:I,init:null,nullable:true,apply:B,themeable:true},opacity:{check:D,init:1,apply:r,themeable:true},keepBlockerActive:{check:q,init:false}},members:{__oW:null,__oX:0,__oY:null,__oV:null,__oT:null,__oU:null,__pa:null,__pb:null,_isPageRoot:false,_widget:null,__pc:function(e){var h=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:h.width,height:h.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:h.width,height:h.height});
}},_applyColor:function(Q,R){var S=qx.theme.manager.Color.getInstance().resolve(Q);
this.__pd(s,S);
},_applyOpacity:function(j,k){this.__pd(L,j);
},__pd:function(n,o){var p=[];
this.__oW&&p.push(this.__oW);
this.__oY&&p.push(this.__oY);

for(var i=0;i<p.length;i++){p[i].setStyle(n,o);
}},_backupActiveWidget:function(){var O=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__oT.push(O.getActive());
this.__oU.push(O.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var g=this.__oT.length;

if(g>0){var f=this.__oT[g-1];

if(f){qx.bom.Element.activate(f);
}this.__oT.pop();
}var d=this.__oU.length;

if(d>0){var f=this.__oU[d-1];

if(f){qx.bom.Element.focus(this.__oU[d-1]);
}this.__oU.pop();
}},__pe:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__oW){this.__oW=this.__pe();
this.__oW.setStyle(z,15);
this._widget.getContainerElement().add(this.__oW);
this.__oW.exclude();
}return this.__oW;
},block:function(){this.__oX++;

if(this.__oX<2){this._backupActiveWidget();
var N=this.getBlockerElement();
N.include();
N.activate();
N.addListener(w,this.__pj,this);
N.addListener(u,this.__pi,this);
N.addListener(x,this.__pi,this);
N.addListener(t,this.__pi,this);
}},isBlocked:function(){return this.__oX>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__oX--;

if(this.__oX<1){this.__pf();
this.__oX=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__oX=0;
this.__pf();
},__pf:function(){this._restoreActiveWidget();
var P=this.getBlockerElement();
P.removeListener(w,this.__pj,this);
P.removeListener(u,this.__pi,this);
P.removeListener(x,this.__pi,this);
P.removeListener(t,this.__pi,this);
P.exclude();
},getContentBlockerElement:function(){if(!this.__oY){this.__oY=this.__pe();
this._widget.getContentElement().add(this.__oY);
this.__oY.exclude();
}return this.__oY;
},blockContent:function(T){var U=this.getContentBlockerElement();
U.setStyle(z,T);
this.__oV.push(T);

if(this.__oV.length<2){U.include();

if(this._isPageRoot){if(!this.__pb){this.__pb=new qx.event.Timer(300);
this.__pb.addListener(K,this.__ph,this);
}this.__pb.start();
this.__ph();
}}},isContentBlocked:function(){return this.__oV.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oV.pop();
var l=this.__oV[this.__oV.length-1];
var m=this.getContentBlockerElement();
m.setStyle(z,l);

if(this.__oV.length<1){this.__pg();
this.__oV=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oV=[];
var M=this.getContentBlockerElement();
M.setStyle(z,null);
this.__pg();
},__pg:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__pb.stop();
}},__ph:function(){var a=this._widget.getContainerElement().getDomElement();
var b=qx.dom.Node.getDocument(a);
this.getContentBlockerElement().setStyles({height:b.documentElement.scrollHeight+y,width:b.documentElement.scrollWidth+y});
},__pi:function(e){if(e.getKeyIdentifier()==J){e.stop();
}},__pj:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(v,this.__pc,this);
}this._disposeObjects(E,G,F);
this.__pa=this.__oT=this.__oU=this._widget=this.__oV=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="qx.client",b="div",a="dblclick",w="mousewheel",v="qx.html.Blocker",u="mousemove",t="mouseover",s="appear",r="click",q="mshtml",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(v,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if(qx.core.Variant.isSet(c,q)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,b,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(s,this.__qi,this);
this.addListener(n,this.__qi,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__qi:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var m="keypress",k="focusout",j="__bH",h="activate",g="Tab",f="singleton",d="deactivate",c="focusin",b="qx.ui.core.FocusHandler";
qx.Class.define(b,{extend:qx.core.Object,type:f,construct:function(){qx.core.Object.call(this);
this.__bH={};
},members:{__bH:null,__bI:null,__bJ:null,__bK:null,connectTo:function(bf){bf.addListener(m,this.__bL,this);
bf.addListener(c,this._onFocusIn,this,true);
bf.addListener(k,this._onFocusOut,this,true);
bf.addListener(h,this._onActivate,this,true);
bf.addListener(d,this._onDeactivate,this,true);
},addRoot:function(G){this.__bH[G.$$hash]=G;
},removeRoot:function(a){delete this.__bH[a.$$hash];
},getActiveWidget:function(){return this.__bI;
},isActive:function(bh){return this.__bI==bh;
},getFocusedWidget:function(){return this.__bJ;
},isFocused:function(bi){return this.__bJ==bi;
},isFocusRoot:function(S){return !!this.__bH[S.$$hash];
},_onActivate:function(e){var K=e.getTarget();
this.__bI=K;
var J=this.__bM(K);

if(J!=this.__bK){this.__bK=J;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__bI==u){this.__bI=null;
}},_onFocusIn:function(e){var bg=e.getTarget();

if(bg!=this.__bJ){this.__bJ=bg;
bg.visualizeFocus();
}},_onFocusOut:function(e){var R=e.getTarget();

if(R==this.__bJ){this.__bJ=null;
R.visualizeBlur();
}},__bL:function(e){if(e.getKeyIdentifier()!=g){return;
}
if(!this.__bK){return;
}e.stopPropagation();
e.preventDefault();
var H=this.__bJ;

if(!e.isShiftPressed()){var I=H?this.__bQ(H):this.__bO();
}else{var I=H?this.__bR(H):this.__bP();
}if(I){I.tabFocus();
}},__bM:function(L){var M=this.__bH;

while(L){if(M[L.$$hash]){return L;
}L=L.getLayoutParent();
}return null;
},__bN:function(v,w){if(v===w){return 0;
}var y=v.getTabIndex()||0;
var x=w.getTabIndex()||0;

if(y!=x){return y-x;
}var D=v.getContainerElement().getDomElement();
var C=w.getContainerElement().getDomElement();
var B=qx.bom.element.Location;
var A=B.get(D);
var z=B.get(C);
if(A.top!=z.top){return A.top-z.top;
}if(A.left!=z.left){return A.left-z.left;
}var E=v.getZIndex();
var F=w.getZIndex();

if(E!=F){return E-F;
}return 0;
},__bO:function(){return this.__bU(this.__bK,null);
},__bP:function(){return this.__bV(this.__bK,null);
},__bQ:function(T){var U=this.__bK;

if(U==T){return this.__bO();
}
while(T&&T.getAnonymous()){T=T.getLayoutParent();
}
if(T==null){return [];
}var V=[];
this.__bS(U,T,V);
V.sort(this.__bN);
var W=V.length;
return W>0?V[0]:this.__bO();
},__bR:function(X){var Y=this.__bK;

if(Y==X){return this.__bP();
}
while(X&&X.getAnonymous()){X=X.getLayoutParent();
}
if(X==null){return [];
}var ba=[];
this.__bT(Y,X,ba);
ba.sort(this.__bN);
var bb=ba.length;
return bb>0?ba[bb-1]:this.__bP();
},__bS:function(parent,n,o){var p=parent.getLayoutChildren();
var q;

for(var i=0,l=p.length;i<l;i++){q=p[i];
if(!(q instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(q)&&q.isEnabled()&&q.isVisible()){if(q.isTabable()&&this.__bN(n,q)<0){o.push(q);
}this.__bS(q,n,o);
}}},__bT:function(parent,N,O){var P=parent.getLayoutChildren();
var Q;

for(var i=0,l=P.length;i<l;i++){Q=P[i];
if(!(Q instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(Q)&&Q.isEnabled()&&Q.isVisible()){if(Q.isTabable()&&this.__bN(N,Q)>0){O.push(Q);
}this.__bT(Q,N,O);
}}},__bU:function(parent,r){var s=parent.getLayoutChildren();
var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];
if(!(t instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(t)&&t.isEnabled()&&t.isVisible()){if(t.isTabable()){if(r==null||this.__bN(t,r)<0){r=t;
}}r=this.__bU(t,r);
}}return r;
},__bV:function(parent,bc){var bd=parent.getLayoutChildren();
var be;

for(var i=0,l=bd.length;i<l;i++){be=bd[i];
if(!(be instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()){if(bc==null||this.__bN(be,bc)>0){bc=be;
}}bc=this.__bV(be,bc);
}}return bc;
}},destruct:function(){this._disposeMap(j);
this.__bJ=this.__bI=this.__bK=null;
}});
})();
(function(){var o="qx.client",n="head",m="text/css",l="stylesheet",k="}",j='@import "',h="{",g='";',f="qx.bom.Stylesheet",e="link",d="style";
qx.Class.define(f,{statics:{includeFile:function(p,q){if(!q){q=document;
}var r=q.createElement(e);
r.type=m;
r.rel=l;
r.href=qx.util.ResourceManager.getInstance().toUri(p);
var s=q.getElementsByTagName(n)[0];
s.appendChild(r);
},createElement:qx.core.Variant.select(o,{"mshtml":function(x){var y=document.createStyleSheet();

if(x){y.cssText=x;
}return y;
},"default":function(z){var A=document.createElement(d);
A.type=m;

if(z){A.appendChild(document.createTextNode(z));
}document.getElementsByTagName(n)[0].appendChild(A);
return A.sheet;
}}),addRule:qx.core.Variant.select(o,{"mshtml":function(N,O,P){N.addRule(O,P);
},"default":function(F,G,H){F.insertRule(G+h+H+k,F.cssRules.length);
}}),removeRule:qx.core.Variant.select(o,{"mshtml":function(B,C){var D=B.rules;
var E=D.length;

for(var i=E-1;i>=0;--i){if(D[i].selectorText==C){B.removeRule(i);
}}},"default":function(S,T){var U=S.cssRules;
var V=U.length;

for(var i=V-1;i>=0;--i){if(U[i].selectorText==T){S.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(o,{"mshtml":function(a){var b=a.rules;
var c=b.length;

for(var i=c-1;i>=0;i--){a.removeRule(i);
}},"default":function(W){var X=W.cssRules;
var Y=X.length;

for(var i=Y-1;i>=0;i--){W.deleteRule(i);
}}}),addImport:qx.core.Variant.select(o,{"mshtml":function(I,J){I.addImport(J);
},"default":function(Q,R){Q.insertRule(j+R+g,Q.cssRules.length);
}}),removeImport:qx.core.Variant.select(o,{"mshtml":function(bd,be){var bf=bd.imports;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.removeImport(i);
}}},"default":function(t,u){var v=t.cssRules;
var w=v.length;

for(var i=w-1;i>=0;i--){if(v[i].href==u){t.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(o,{"mshtml":function(K){var L=K.imports;
var M=L.length;

for(var i=M-1;i>=0;i--){K.removeImport(i);
}},"default":function(ba){var bb=ba.cssRules;
var bc=bb.length;

for(var i=bc-1;i>=0;i--){if(bb[i].type==bb[i].IMPORT_RULE){ba.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(v,w){var H=this._getLayoutChildren();
var z,G,E;
var J,top,x,y,B,A;
var F,D,I,C;

for(var i=0,l=H.length;i<l;i++){z=H[i];
G=z.getSizeHint();
E=z.getLayoutProperties();
F=z.getMarginTop();
D=z.getMarginRight();
I=z.getMarginBottom();
C=z.getMarginLeft();
J=E.left!=null?E.left:E.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*v/100);
}x=E.right!=null?E.right:E.edge;

if(qx.lang.Type.isString(x)){x=Math.round(parseFloat(x)*v/100);
}top=E.top!=null?E.top:E.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*w/100);
}y=E.bottom!=null?E.bottom:E.edge;

if(qx.lang.Type.isString(y)){y=Math.round(parseFloat(y)*w/100);
}if(J!=null&&x!=null){B=v-J-x-C-D;
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}J+=C;
}else{B=E.width;

if(B==null){B=G.width;
}else{B=Math.round(parseFloat(B)*v/100);
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}}
if(x!=null){J=v-B-x-D-C;
}else if(J==null){J=C;
}else{J+=C;
}}if(top!=null&&y!=null){A=w-top-y-F-I;
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}top+=F;
}else{A=E.height;

if(A==null){A=G.height;
}else{A=Math.round(parseFloat(A)*w/100);
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}}
if(y!=null){top=w-A-y-I-F;
}else if(top==null){top=F;
}else{top+=F;
}}z.renderLayout(J,top,B,A);
}},_computeSizeHint:function(){var t=0,s=0;
var q=0,o=0;
var m,k;
var j,g;
var c=this._getLayoutChildren();
var f,r,e;
var u,top,d,h;

for(var i=0,l=c.length;i<l;i++){f=c[i];
r=f.getLayoutProperties();
e=f.getSizeHint();
var p=f.getMarginLeft()+f.getMarginRight();
var n=f.getMarginTop()+f.getMarginBottom();
m=e.width+p;
k=e.minWidth+p;
u=r.left!=null?r.left:r.edge;

if(u&&typeof u===b){m+=u;
k+=u;
}d=r.right!=null?r.right:r.edge;

if(d&&typeof d===b){m+=d;
k+=d;
}t=Math.max(t,m);
s=Math.max(s,k);
j=e.height+n;
g=e.minHeight+n;
top=r.top!=null?r.top:r.edge;

if(top&&typeof top===b){j+=top;
g+=top;
}h=r.bottom!=null?r.bottom:r.edge;

if(h&&typeof h===b){j+=h;
g+=h;
}q=Math.max(q,j);
o=Math.max(o,g);
}return {width:t,minWidth:s,height:q,minHeight:o};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var c="inspector.components.IInspectorModel",b="qx.event.type.Event",a="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeApplication":b,"changeInspected":a},members:{getApplication:function(){return true;
},setWindow:function(d){return arguments.length==1;
},getWindow:function(){return true;
},getRoots:function(){return true;
},addToExcludes:function(f){return arguments.length==1;
},getExcludes:function(){return true;
},getObjectRegistry:function(){return true;
},getObjects:function(){return true;
},getInspected:function(){return true;
},setInspected:function(e){return arguments.length==1;
}}});
})();
(function(){var f="changeApplication",e="qx.ui.root.Inline",d="changeInspected",c="qx.event.type.Event",b="inspector.components.InspectorModel",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,implement:[inspector.components.IInspectorModel],construct:function(){qx.core.Object.call(this);
this.__Od();
},events:{"changeApplication":c,"changeInspected":a},members:{__Oa:null,__Ob:null,__Oc:null,getApplication:function(){if(this.__Oa==null){return null;
}else{return this.__Oa.qx.core.Init.getApplication();
}},setWindow:function(q){if(this.__Oa!==q){if(q==null){this.__Od();
}this.__Oa=q;
this.fireEvent(f);
}},getWindow:function(){return this.__Oa;
},getRoots:function(){var n=[];
var j=this.getWindow();

if(j==null){return n;
}var l=this.getApplication();

if(l!=null){n.push(l.getRoot());
}var p=this.getObjectRegistry();

if(p!=null&&j.qx.Class.getByName(e)!=null){var m=p.getRegistry();

for(var o in m){var k=m[o];

if(j.qx.Class.isSubClassOf(k.constructor,j.qx.ui.root.Inline)){n.push(k);
}}}return n;
},getExcludes:function(){return this.__Oc;
},addToExcludes:function(i){if(i!=null&&!qx.lang.Array.contains(this.__Oc,i)){this.__Oc.push(i);
}},clearExcludes:function(){this.__Oc=[];
},getObjectRegistry:function(){if(this.__Oa==null){return null;
}else{return this.__Oa.qx.core.ObjectRegistry;
}},getObjects:function(){var v=[];
var w=this.getObjectRegistry();

if(w===null){return v;
}var s=w.getRegistry();
var r=this.getExcludes();

for(var u in s){var t=s[u];

if(!qx.lang.Array.contains(r,t)){v.push(t);
}}return v;
},getInspected:function(){return this.__Ob;
},setInspected:function(g){if(this.__Ob!==g){var h=this.__Ob;
this.__Ob=g;
this.fireDataEvent(d,this.__Ob,h);
}},__Od:function(){this.__Oa=null;
this.setInspected(null);
this.clearExcludes();
}},destruct:function(){this.__Oa=this.__Ob=this.__Oc=null;
}});
})();
(function(){var R="changeApplication",Q="click",P="interval",O="catchClickLayer",N="changeInspected",M="mousemove",L="__Oh",K="__Of",J="inspector.components.Selector",I="solid",H="__Og";
qx.Class.define(J,{extend:qx.core.Object,construct:function(D){qx.core.Object.call(this);
this.__Oe=D;
this.__Oe.addListener(R,this.__Oj,this);
this.__Oe.addListener(N,this.__Ok,this);
this.__Of=new qx.event.Timer(this.self(arguments).DURATION);
this.__Of.addListener(P,this.__Ol,this);
},statics:{BORDER:2,BORDER_COLOR:"red",Z_INDEX:1e6,BACKGROUND_COLOR:"black",OPACITY:0.1,DURATION:1000},members:{__Oe:null,__Og:null,__Oh:null,__Of:null,__Oi:null,start:function(){if(this.__Og!=null){this.__Og.show();
}},stop:function(){if(this.__Og!=null){this.__Og.hide();
}},__Oj:function(e){this.__Oi=this.__Oe.getWindow();

if(this.__Oi==null){this.__Og=null;
this.__Oh=null;
return;
}this.__Og=this.__On();
this.__Oh=this.__Om();
},__Ok:function(e){var C=e.getData();

if(C==null||this.__Oi==null){return;
}this.__Of.restart();
this.__Ou(C);
},__Ol:function(e){this.__Of.stop();
this.__Oh.hide();
},__Om:function(){var o=new this.__Oi.qx.ui.decoration.Single(this.self(arguments).BORDER,I,this.self(arguments).BORDER_COLOR);
this.__Oe.addToExcludes(o);
var m=new this.__Oi.qx.ui.core.Widget();
this.__Oe.addToExcludes(m);
m.setDecorator(o);
m.setZIndex(this.self(arguments).Z_INDEX-2);
m.hide();
var n=this.__Oe.getApplication().getRoot();
n.add(m);
return m;
},__On:function(){var U=new this.__Oi.qx.ui.core.Widget();
this.__Oe.addToExcludes(U);
U.setBackgroundColor(this.self(arguments).BACKGROUND_COLOR);
U.setOpacity(this.self(arguments).OPACITY);
U.setZIndex(this.self(arguments).Z_INDEX-1);
U.testId=O;
U.hide();
U.addListener(Q,this.__Op,this);
U.addListener(M,this.__Oq,this);
this.__Oo(U);
return U;
},__Oo:function(E){var F=this.__Oe.getApplication().getRoot();
var G=this.__Oi;

if(G.qx.Class.isSubClassOf(E.constructor,G.qx.ui.root.Application)){F.add(E,{edge:0});
}else{E.setHeight(qx.bom.Document.getHeight(G));
E.setWidth(qx.bom.Document.getWidth(G));
F.add(E,{left:0,top:0});
}},__Op:function(e){this.__Og.hide();
var X=e.getDocumentLeft();
var Y=e.getDocumentTop();
var ba=this.__Or(X,Y);
this.__Oh.hide();
this.__Oe.setInspected(ba);
},__Oq:function(e){var r=e.getDocumentLeft();
var s=e.getDocumentTop();
var t=this.__Or(r,s);
this.__Ou(t);
},__Or:function(bb,bc){var bd=null;
var be=this.__Oe.getRoots();

for(var i=0;i<be.length;i++){bd=this.__Os(be[i],bb,bc);

if(bd!=be[i]){break;
}}return bd;
},__Os:function(c,x,y){var k=c;
var d=this.__Oe.getExcludes();

for(var i=0;i<c._getChildren().length;i++){var f=c._getChildren()[i];

try{var h=this.__Oi;

if(qx.lang.Array.contains(d,f)||h.qx.Class.isSubClassOf(f.constructor,h.qx.ui.core.Spacer)){continue;
}}catch(l){}var g=null;

if(this.__Ow(f)){g=f.getContainerElement().getDomElement();
}else if(this.__Ox(f)){g=f.getDomElement();
}else{return f;
}var j=this.__Ot(g);

if(j!=null){if(j.right>=x&&j.left<=x&&j.bottom>=y&&j.top<=y){k=this.__Os(f,x,y);
}}}return k;
},__Ot:function(S){if(S==null){return null;
}var T={};
T.left=qx.bom.element.Location.getLeft(S);
T.right=qx.bom.element.Location.getRight(S);
T.top=qx.bom.element.Location.getTop(S);
T.bottom=qx.bom.element.Location.getBottom(S);
return T;
},__Ou:function(u){var A=null;

if(this.__Ow(u)&&!this.__Ov(u)){A=u.getContainerElement().getDomElement();
}else if(this.__Ox(u)){A=u.getDomElement();
}else{this.__Oh.hide();
return;
}if(A==null){this.__Oh.hide();
return;
}var z=this.__Ot(A);
var B=z.left-this.self(arguments).BORDER;
var v=z.right+this.self(arguments).BORDER;
var top=z.top-this.self(arguments).BORDER;
var w=z.bottom+this.self(arguments).BORDER;
this.__Oh.renderLayout(B,top,v-B,w-top);
this.__Oh.show();
},__Ov:function(p){var q=this.__Oi;
return q.qx.Class.isSubClassOf(p.constructor,q.qx.ui.root.Abstract);
},__Ow:function(a){var b=this.__Oi;
return b.qx.Class.isSubClassOf(a.constructor,b.qx.ui.core.Widget);
},__Ox:function(V){var W=this.__Oi;
return W.qx.Class.isSubClassOf(V.constructor,W.qx.html.Element);
}},destruct:function(){this.__Oe=this.__Oi=null;
this._disposeObjects(H,L,K);
}});
})();
(function(){var p="Open",o="listeners",n="cookieKey",m="resize",l="Boolean",k="Width",j="Height",h="inspector.components.State",g="move",f="open",c="Top",e="close",d="Left";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__Oy=[];
},properties:{ignoreChanges:{check:l,init:false}},members:{__Oy:null,add:function(a,b){if(!qx.lang.Array.contains(this.__Oy,a)){a.setUserData(n,b);
this.__Oy.push(a);
this.__Oz(a);
}},__Oz:function(q){var t=q.getUserData(n);
var r=[];
var s=null;
s=q.addListener(f,function(){if(!this.isIgnoreChanges()){qx.bom.Cookie.set(t+p,true,7);
}},this);
r.push(s);
s=q.addListener(e,function(){if(!this.isIgnoreChanges()){qx.bom.Cookie.set(t+p,false,7);
}},this);
r.push(s);
s=q.addListener(g,function(event){if(!this.isIgnoreChanges()){qx.bom.Cookie.set(t+d,event.getData().left,7);
qx.bom.Cookie.set(t+c,event.getData().top,7);
}},this);
r.push(s);
s=q.addListener(m,function(event){if(!this.isIgnoreChanges()){qx.bom.Cookie.set(t+k,event.getData().width,7);
qx.bom.Cookie.set(t+j,event.getData().height,7);
}},this);
r.push(s);
q.setUserData(o,r);
},restoreState:function(){for(var i=0;i<this.__Oy.length;i++){this.__OA(this.__Oy[i]);
}},__OA:function(u){var v=u.getUserData("cookieKey");
var open=qx.bom.Cookie.get(v+"Open");
var y=parseInt(qx.bom.Cookie.get(v+"Left"));
var top=parseInt(qx.bom.Cookie.get(v+"Top"));
var x=parseInt(qx.bom.Cookie.get(v+"Width"));
var w=parseInt(qx.bom.Cookie.get(v+"Height"));

if(open==="true"||open===null){u.open();
u.setSizeAndPosition({top:top,left:y,width:x,height:w});
}}},destruct:function(){for(var i=0;i<this.__Oy.length;i++){var z=this.__Oy[i];
var A=z.getUserData(o);

if(A!=null){var B=A.pop();

while(B!=null){z.removeListenerById(B);
B=A.pop();
}}}this.__Oy=null;
}});
})();
(function(){var i="=",h="",g=";path=",f=";domain=",e=";expires=Thu, 01-Jan-1970 00:00:01 GMT",d="qx.bom.Cookie",c=";expires=",b=";",a=";secure";
qx.Class.define(d,{statics:{get:function(j){var k=document.cookie.indexOf(j+i);
var m=k+j.length+1;

if((!k)&&(j!=document.cookie.substring(0,j.length))){return null;
}
if(k==-1){return null;
}var l=document.cookie.indexOf(b,m);

if(l==-1){l=document.cookie.length;
}return unescape(document.cookie.substring(m,l));
},set:function(n,o,p,q,r,s){var t=[n,i,escape(o)];

if(p){var u=new Date();
u.setTime(u.getTime());
t.push(c,new Date(u.getTime()+(p*1000*60*60*24)).toGMTString());
}
if(q){t.push(g,q);
}
if(r){t.push(f,r);
}
if(s){t.push(a);
}document.cookie=t.join(h);
},del:function(v,w,x){if(!qx.bom.Cookie.get(v)){return;
}var y=[v,i];

if(w){y.push(g,w);
}
if(x){y.push(f,x);
}y.push(e);
document.cookie=y.join(h);
}}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(bc,bd,be){qx.ui.layout.Abstract.call(this);

if(bc){this.setSpacing(bc);
}
if(bd){this.setAlignY(bd);
}
if(be){this.setSeparator(be);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__eI:null,__eJ:null,__eK:null,__eL:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__eM:function(){var bk=this._getLayoutChildren();
var length=bk.length;
var bg=false;
var bf=this.__eI&&this.__eI.length!=length&&this.__eJ&&this.__eI;
var bi;
var bh=bf?this.__eI:new Array(length);
var bj=bf?this.__eJ:new Array(length);
if(this.getReversed()){bk=bk.concat().reverse();
}for(var i=0;i<length;i++){bi=bk[i].getLayoutProperties();

if(bi.height!=null){bh[i]=parseFloat(bi.height)/100;
}
if(bi.flex!=null){bj[i]=bi.flex;
bg=true;
}else{bj[i]=0;
}}if(!bf){this.__eI=bh;
this.__eJ=bj;
}this.__eK=bg;
this.__eL=bk;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(D,E){if(this._invalidChildrenCache){this.__eM();
}var L=this.__eL;
var length=L.length;
var V=qx.ui.layout.Util;
var U=this.getSpacing();
var Y=this.getSeparator();

if(Y){var I=V.computeVerticalSeparatorGaps(L,U,Y);
}else{var I=V.computeVerticalGaps(L,U,true);
}var i,G,H,P;
var Q=[];
var W=I;

for(i=0;i<length;i+=1){P=this.__eI[i];
H=P!=null?Math.floor((E-I)*P):L[i].getSizeHint().height;
Q.push(H);
W+=H;
}if(this.__eK&&W!=E){var N={};
var T,X;

for(i=0;i<length;i+=1){T=this.__eJ[i];

if(T>0){M=L[i].getSizeHint();
N[i]={min:M.minHeight,value:Q[i],max:M.maxHeight,flex:T};
}}var J=V.computeFlexOffsets(N,E,W);

for(i in J){X=J[i].offset;
Q[i]+=X;
W+=X;
}}var top=L[0].getMarginTop();
if(W<E&&this.getAlignY()!=m){top=E-W;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var M,bb,R,H,O,S,K;
this._clearSeparators();
if(Y){var ba=qx.theme.manager.Decoration.getInstance().resolve(Y).getInsets();
var F=ba.top+ba.bottom;
}for(i=0;i<length;i+=1){G=L[i];
H=Q[i];
M=G.getSizeHint();
S=G.getMarginLeft();
K=G.getMarginRight();
R=Math.max(M.minWidth,Math.min(D-S-K,M.maxWidth));
bb=V.computeHorizontalAlignOffset(G.getAlignX()||this.getAlignX(),R,D,S,K);
if(i>0){if(Y){top+=O+U;
this._renderSeparator(Y,{top:top,left:0,height:F,width:D});
top+=F+U+G.getMarginTop();
}else{top+=V.collapseMargins(U,O,G.getMarginTop());
}}G.renderLayout(bb,top,R,H);
top+=H;
O=G.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__eM();
}var u=qx.ui.layout.Util;
var C=this.__eL;
var q=0,t=0,s=0;
var o=0,v=0;
var z,p,B;
for(var i=0,l=C.length;i<l;i+=1){z=C[i];
p=z.getSizeHint();
t+=p.height;
var y=this.__eJ[i];
var r=this.__eI[i];

if(y){q+=p.minHeight;
}else if(r){s=Math.max(s,Math.round(p.minHeight/r));
}else{q+=p.height;
}B=z.getMarginLeft()+z.getMarginRight();
if((p.width+B)>v){v=p.width+B;
}if((p.minWidth+B)>o){o=p.minWidth+B;
}}q+=s;
var x=this.getSpacing();
var A=this.getSeparator();

if(A){var w=u.computeVerticalSeparatorGaps(C,x,A);
}else{var w=u.computeVerticalGaps(C,x,true);
}return {minHeight:q+w,height:t+w,minWidth:o,width:v};
}},destruct:function(){this.__eI=this.__eJ=this.__eL=null;
}});
})();
(function(){var h="String",g="qx.ui.embed.AbstractIframe",f="name",e="",d="_applySource",c="qx.event.type.Event",b="_applyFrameName";
qx.Class.define(g,{extend:qx.ui.core.Widget,construct:function(a){qx.ui.core.Widget.call(this);

if(a){this.setSource(a);
}},events:{"load":c},properties:{source:{check:h,apply:d,nullable:true},frameName:{check:h,init:e,apply:b}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(i,j){this._getIframeElement().setSource(i);
},_applyFrameName:function(k,l){this._getIframeElement().setAttribute(f,k);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
}}});
})();
(function(){var l="Please use the 'scrollbar' property instead.",k="qx.client",j="mousedown",i="load",h="help",g="overflowY",f="mouseup",d="losecapture",c="contextmenu",b="none",K="display",J="overflowX",I="no",H="Boolean",G="px",F="url(",E=")",D="gecko",C="repeat",B="div",s="auto",t="_applyScrollbar",q="DOMNodeInserted",r="_applyNativeHelp",o="yes",p="scrolling",m="/",n="appear",u="__yI",v="mshtml",x="block",w="qx.ui.embed.Iframe",z="iframe",y="qx/static/blank.gif",A="absolute";
qx.Class.define(w,{extend:qx.ui.embed.AbstractIframe,construct:function(Y){if(Y!=null){this.__yH=Y;
}qx.ui.embed.AbstractIframe.call(this,Y);
qx.event.Registration.addListener(document.body,j,this.block,this,true);
qx.event.Registration.addListener(document.body,f,this.release,this,true);
qx.event.Registration.addListener(document.body,d,this.release,this,true);
this.__yI=this._createBlockerElement();
this.getContainerElement().add(this.__yI);

if(qx.core.Variant.isSet(k,D)){this.addListenerOnce(n,function(e){var W=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(W,q,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:z},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:H,init:false,apply:r},scrollbar:{check:[s,I,o],nullable:true,themeable:true,apply:t}},members:{__yH:null,__yI:null,renderLayout:function(bd,top,be,bf){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,bd,top,be,bf);
var bh=G;
var bg=this.getInsets();
this.__yI.setStyles({"left":bg.left+bh,"top":bg.top+bh,"width":(be-bg.left-bg.right)+bh,"height":(bf-bg.top-bg.bottom)+bh});
},_createContentElement:function(){var bc=new qx.html.Iframe(this.__yH);
bc.addListener(i,this._onIframeLoad,this);
return bc;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var X=new qx.html.Element(B);
X.setStyles({"zIndex":20,"position":A,"display":b});
if(qx.core.Variant.isSet(k,v)){X.setStyles({backgroundImage:F+qx.util.ResourceManager.getInstance().toUri(y)+E,backgroundRepeat:C});
}return X;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(i);
},block:function(){this.__yI.setStyle(K,x);
},release:function(){this.__yI.setStyle(K,b);
},_applyNativeContextMenu:function(Q,R){if(Q!==false&&R!==false){return;
}var S=this.getDocument();

if(!S){return;
}
try{var T=S.documentElement;
}catch(e){return ;
}
if(R===false){qx.event.Registration.removeListener(T,c,this._onNativeContextMenu,this,true);
}
if(Q===false){qx.event.Registration.addListener(T,c,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(k,{"mshtml":function(N,O){var document=this.getDocument();

if(!document){return;
}
try{if(O===false){qx.bom.Event.removeNativeListener(document,h,qx.lang.Function.returnFalse);
}
if(N===false){qx.bom.Event.addNativeListener(document,h,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var M=this.getContentElement().getDomElement();
var L=M.src;
if(L.charAt(L.length-1)==m){L=L.substring(0,L.length-1);
}
if(L!=this.getSource()){qx.bom.Iframe.getWindow(M).stop();
M.src=this.getSource();
}},_applyScrollbar:function(bi){this.getContentElement().setAttribute(p,bi);
},setOverflow:function(ba,bb){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);

if(arguments[0] instanceof Array){this.setOverflowX(ba[0]);
this.setOverflowY(ba[1]);
}else{this.setOverflowX(ba);
this.setOverflowY(bb);
}},resetOverflow:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.resetOverflowX();
this.resetOverflowY();
},setOverflowX:function(P){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
{};
this.getContentElement().setStyle(J,P);
},getOverflowX:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
return this.getContentElement().getStyle(J);
},initOverflowX:function(U){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.setOverflowX(U);
},resetOverflowX:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.setOverflowX(null);
},setOverflowY:function(V){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
{};
this.getContentElement().setStyle(g,V);
},getOverflowY:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
return this.getContentElement().getStyle(g);
},initOverflowY:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.setOverflowY(a);
},resetOverflowY:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.setOverflowY(null);
}},destruct:function(){this._disposeObjects(u);
qx.event.Registration.removeListener(document.body,j,this.block,this,true);
qx.event.Registration.removeListener(document.body,f,this.release,this,true);
qx.event.Registration.removeListener(document.body,d,this.release,this,true);
}});
})();
(function(){var g="source",f="name",e="qx.html.Iframe",d="qx.event.type.Event",c="iframe";
qx.Class.define(e,{extend:qx.html.Element,construct:function(m,n,o){qx.html.Element.call(this,c,n,o);
this._setProperty(g,m);
},events:{"load":d},members:{_applyProperty:function(name,a){qx.html.Element.prototype._applyProperty.call(this,name,a);

if(name==g){var b=this.getDomElement();
qx.bom.Iframe.setSource(b,a);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var l=this.getDomElement();

if(l){return qx.bom.Iframe.getWindow(l);
}else{return null;
}},getDocument:function(){var i=this.getDomElement();

if(i){return qx.bom.Iframe.getDocument(i);
}else{return null;
}},getBody:function(){var h=this.getDomElement();

if(h){return qx.bom.Iframe.getBody(h);
}else{return null;
}},setSource:function(p){this._setProperty(g,p);
return this;
},getSource:function(){return this._getProperty(g);
},setName:function(name){this.setAttribute(f,name);
return this;
},getName:function(){return this.getAttribute(f);
},reload:function(){var k=this.getDomElement();

if(k){var j=this.getSource();
this.setSource(null);
this.setSource(j);
}}}});
})();
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(d){qx.event.Registration.fireEvent(d,b);
})},members:{canHandleEvent:function(e,f){return e.tagName.toLowerCase()===a;
},registerEvent:function(g,h,i){},unregisterEvent:function(j,k,l){}},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var f="qx.client",e="webkit",d="body",c="iframe",b="qx.bom.Iframe";
qx.Class.define(b,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(y,z){var y=y?qx.lang.Object.clone(y):{};
var A=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var B in A){if(y[B]==null){y[B]=A[B];
}}return qx.bom.Element.create(c,y,z);
},getWindow:qx.core.Variant.select(f,{"mshtml|gecko":function(a){try{return a.contentWindow;
}catch(x){return null;
}},"default":function(v){try{var w=this.getDocument(v);
return w?w.defaultView:null;
}catch(C){return null;
}}}),getDocument:qx.core.Variant.select(f,{"mshtml":function(k){try{var l=this.getWindow(k);
return l?l.document:null;
}catch(m){return null;
}},"default":function(q){try{return q.contentDocument;
}catch(r){return null;
}}}),getBody:function(n){try{var o=this.getDocument(n);
return o?o.getElementsByTagName(d)[0]:null;
}catch(D){return null;
}},setSource:function(s,t){try{if(this.getWindow(s)&&qx.dom.Hierarchy.isRendered(s)){try{if(qx.core.Variant.isSet(f,e)&&qx.bom.client.Platform.MAC){var u=this.getContentWindow();

if(u){u.stop();
}}this.getWindow(s).location.replace(t);
}catch(p){s.src=t;
}}else{s.src=t;
}}catch(g){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(i){var j=this.getDocument(i);

try{if(j&&j.location){return j.location.href;
}}catch(h){}return null;
}}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__qG:false,_setAllowMenuOpenHover:function(s){this.__qG=s;
},_isAllowMenuOpenHover:function(){return this.__qG;
},_applySpacing:function(m,n){var o=this._getLayout();
m==null?o.resetSpacing():o.setSpacing(m);
},addSpacer:function(){var t=new qx.ui.core.Spacer;
this._add(t,{flex:1});
return t;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var q=this.getChildren();
var p=[];
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r instanceof qx.ui.menubar.Button){p.push(r);
}else if(r instanceof qx.ui.toolbar.Part){p.push.apply(p,r.getMenuButtons());
}}return p;
}}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(bi,bj,bk){qx.ui.layout.Abstract.call(this);

if(bi){this.setSpacing(bi);
}
if(bj){this.setAlignX(bj);
}
if(bk){this.setSeparator(bk);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__fF:null,__fG:null,__fH:null,__fI:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__fJ:function(){var t=this._getLayoutChildren();
var length=t.length;
var q=false;
var o=this.__fF&&this.__fF.length!=length&&this.__fG&&this.__fF;
var r;
var p=o?this.__fF:new Array(length);
var s=o?this.__fG:new Array(length);
if(this.getReversed()){t=t.concat().reverse();
}for(var i=0;i<length;i++){r=t[i].getLayoutProperties();

if(r.width!=null){p[i]=parseFloat(r.width)/100;
}
if(r.flex!=null){s[i]=r.flex;
q=true;
}else{s[i]=0;
}}if(!o){this.__fF=p;
this.__fG=s;
}this.__fH=q;
this.__fI=t;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(u,v){if(this._invalidChildrenCache){this.__fJ();
}var B=this.__fI;
var length=B.length;
var K=qx.ui.layout.Util;
var J=this.getSpacing();
var N=this.getSeparator();

if(N){var y=K.computeHorizontalSeparatorGaps(B,J,N);
}else{var y=K.computeHorizontalGaps(B,J,true);
}var i,w,H,G;
var M=[];
var C=y;

for(i=0;i<length;i+=1){G=this.__fF[i];
H=G!=null?Math.floor((u-y)*G):B[i].getSizeHint().width;
M.push(H);
C+=H;
}if(this.__fH&&C!=u){var E={};
var I,L;

for(i=0;i<length;i+=1){I=this.__fG[i];

if(I>0){D=B[i].getSizeHint();
E[i]={min:D.minWidth,value:M[i],max:D.maxWidth,flex:I};
}}var z=K.computeFlexOffsets(E,u,C);

for(i in z){L=z[i].offset;
M[i]+=L;
C+=L;
}}var R=B[0].getMarginLeft();
if(C<u&&this.getAlignX()!=m){R=u-C;

if(this.getAlignX()===k){R=Math.round(R/2);
}}var D,top,x,H,A,P,F;
var J=this.getSpacing();
this._clearSeparators();
if(N){var O=qx.theme.manager.Decoration.getInstance().resolve(N).getInsets();
var Q=O.left+O.right;
}for(i=0;i<length;i+=1){w=B[i];
H=M[i];
D=w.getSizeHint();
P=w.getMarginTop();
F=w.getMarginBottom();
x=Math.max(D.minHeight,Math.min(v-P-F,D.maxHeight));
top=K.computeVerticalAlignOffset(w.getAlignY()||this.getAlignY(),x,v,P,F);
if(i>0){if(N){R+=A+J;
this._renderSeparator(N,{left:R,top:0,width:Q,height:v});
R+=Q+J+w.getMarginLeft();
}else{R+=K.collapseMargins(J,A,w.getMarginLeft());
}}w.renderLayout(R,top,H,x);
R+=H;
A=w.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__fJ();
}var Y=qx.ui.layout.Util;
var bh=this.__fI;
var S=0,ba=0,W=0;
var V=0,X=0;
var be,T,bg;
for(var i=0,l=bh.length;i<l;i+=1){be=bh[i];
T=be.getSizeHint();
ba+=T.width;
var bd=this.__fG[i];
var U=this.__fF[i];

if(bd){S+=T.minWidth;
}else if(U){W=Math.max(W,Math.round(T.minWidth/U));
}else{S+=T.width;
}bg=be.getMarginTop()+be.getMarginBottom();
if((T.height+bg)>X){X=T.height+bg;
}if((T.minHeight+bg)>V){V=T.minHeight+bg;
}}S+=W;
var bc=this.getSpacing();
var bf=this.getSeparator();

if(bf){var bb=Y.computeHorizontalSeparatorGaps(bh,bc,bf);
}else{var bb=Y.computeHorizontalGaps(bh,bc,true);
}return {minWidth:S+bb,width:ba+bb,minHeight:V,height:X};
}},destruct:function(){this.__fF=this.__fG=this.__fI=null;
}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(c,d){qx.ui.core.LayoutItem.call(this);
this.setWidth(c!=null?c:0);
this.setHeight(d!=null?d:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(b){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__kk:null,__kl:false,__km:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__kl){this.__kl=false;
}else{this.__kl=true;
o.execute(this);
}}this.fireEvent(n);
},__kn:function(e){if(this.__kl){this.__kl=false;
return;
}this.__kl=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__km);
}
if(p!=null){this.__km=p.addListener(n,this.__kn,this);
}var t=this.__kk;

if(t==null){this.__kk=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__kk=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(p,q,r){qx.ui.basic.Atom.call(this,p,q);

if(r!=null){this.setCommand(r);
}this.addListener(f,this._onMouseOver);
this.addListener(b,this._onMouseOut);
this.addListener(g,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(a,this._onKeyUp);
this.addListener(j,this._onStopEvent);
},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(n)){return;
}this.addState(o);
},release:function(){if(this.hasState(o)){this.removeState(o);
}},reset:function(){this.removeState(o);
this.removeState(n);
this.removeState(m);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(n);
this.addState(o);
},_onMouseUp:function(e){this.releaseCapture();
var s=this.hasState(o);
var t=this.hasState(n);

if(s){this.removeState(o);
}
if(t){this.removeState(n);
}else{this.addState(m);

if(s){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(n);
this.addState(o);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(o)){this.removeState(n);
this.removeState(o);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var l="pressed",k="hovered",j="changeVisibility",i="qx.ui.menu.Menu",h="submenu",g="Enter",f="contextmenu",d="changeMenu",c="qx.ui.form.MenuButton",b="abandoned",a="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(u,v,w){qx.ui.form.Button.call(this,u,v);
if(w!=null){this.setMenu(w);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(m,n){if(n){n.removeListener(j,this._onMenuChange,this);
n.resetOpener();
}
if(m){m.addListener(j,this._onMenuChange,this);
m.setOpener(this);
m.removeState(h);
m.removeState(f);
}},open:function(o){var p=this.getMenu();

if(p){qx.ui.menu.Manager.getInstance().hideAll();
p.setOpener(this);
p.open();
if(o){var q=p.getSelectables()[0];

if(q){p.setSelectedButton(q);
}}}},_onMenuChange:function(e){var r=this.getMenu();

if(r.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);
var t=this.getMenu();

if(t){if(!t.isVisible()){this.open();
}else{t.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var s=this.getMenu();

if(s){if(!s.isVisible()){this.open();
}else{s.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(i,j,k){qx.ui.form.MenuButton.call(this,i,j,k);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(m){qx.ui.form.MenuButton.prototype.open.call(this,m);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var n=this.getMenu();
var menubar=this.getMenuBar();

if(n.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(n);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==n){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var l=this.getMenu();

if(l&&l.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var v="keypress",u="interval",t="keydown",s="mousedown",r="keyup",q="blur",p="Enter",o="__nw",n="__nv",m="__nu",f="Up",l="Escape",j="qx.ui.menu.Manager",d="Left",c="Down",h="Right",g="singleton",k="Space";
qx.Class.define(j,{type:g,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nu=[];
var bk=document.body;
var bl=qx.event.Registration;
bl.addListener(window.document.documentElement,s,this._onMouseDown,this,true);
bl.addListener(bk,t,this._onKeyUpDown,this,true);
bl.addListener(bk,r,this._onKeyUpDown,this,true);
bl.addListener(bk,v,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,q,this.hideAll,this);
this.__nv=new qx.event.Timer;
this.__nv.addListener(u,this._onOpenInterval,this);
this.__nw=new qx.event.Timer;
this.__nw.addListener(u,this._onCloseInterval,this);
},members:{__nx:null,__ny:null,__nv:null,__nw:null,__nu:null,_getChild:function(bn,bo,bp,bq){var br=bn.getChildren();
var length=br.length;
var bs;

for(var i=bo;i<length&&i>=0;i+=bp){bs=br[i];

if(bs.isEnabled()&&!bs.isAnonymous()){return bs;
}}
if(bq){i=i==length?0:length-1;

for(;i!=bo;i+=bp){bs=br[i];

if(bs.isEnabled()&&!bs.isAnonymous()){return bs;
}}}return null;
},_isInMenu:function(y){while(y){if(y instanceof qx.ui.menu.Menu){return true;
}y=y.getLayoutParent();
}return false;
},_getMenuButton:function(b){while(b){if(b instanceof qx.ui.menu.AbstractButton){return b;
}b=b.getLayoutParent();
}return null;
},add:function(R){{};
var S=this.__nu;
S.push(R);
R.setZIndex(1e6+S.length);
},remove:function(T){{};
var U=this.__nu;

if(U){qx.lang.Array.remove(U,T);
}},hideAll:function(){var bc=this.__nu;

if(bc){for(var i=bc.length-1;i>=0;i--){bc[i].exclude();
}}},getActiveMenu:function(){var bm=this.__nu;
return bm.length>0?bm[bm.length-1]:null;
},scheduleOpen:function(bg){this.cancelClose(bg);
if(bg.isVisible()){if(this.__nx){this.cancelOpen(this.__nx);
}}else if(this.__nx!=bg){this.__nx=bg;
this.__nv.restartWith(bg.getOpenInterval());
}},scheduleClose:function(z){this.cancelOpen(z);
if(!z.isVisible()){if(this.__ny){this.cancelClose(this.__ny);
}}else if(this.__ny!=z){this.__ny=z;
this.__nw.restartWith(z.getCloseInterval());
}},cancelOpen:function(H){if(this.__nx==H){this.__nv.stop();
this.__nx=null;
}},cancelClose:function(a){if(this.__ny==a){this.__nw.stop();
this.__ny=null;
}},_onOpenInterval:function(e){this.__nv.stop();
this.__nx.open();
this.__nx=null;
},_onCloseInterval:function(e){this.__nw.stop();
this.__ny.exclude();
this.__ny=null;
},_onMouseDown:function(e){var bb=e.getTarget();
bb=qx.ui.core.Widget.getWidgetByElement(bb,true);
if(bb==null){this.hideAll();
return;
}if(bb.getMenu&&bb.getMenu()&&bb.getMenu().isVisible()){return;
}if(this.__nu.length>0&&!this._isInMenu(bb)){this.hideAll();
}},__nz:{"Enter":1,"Space":1},__nA:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var bt=this.getActiveMenu();

if(!bt){return;
}var bu=e.getKeyIdentifier();

if(this.__nA[bu]||(this.__nz[bu]&&bt.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var bv=this.getActiveMenu();

if(!bv){return;
}var bw=e.getKeyIdentifier();
var by=this.__nA[bw];
var bx=this.__nz[bw];

if(by){switch(bw){case f:this._onKeyPressUp(bv);
break;
case c:this._onKeyPressDown(bv);
break;
case d:this._onKeyPressLeft(bv);
break;
case h:this._onKeyPressRight(bv);
break;
case l:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(bx){var bz=bv.getSelectedButton();

if(bz){switch(bw){case p:this._onKeyPressEnter(bv,bz,e);
break;
case k:this._onKeyPressSpace(bv,bz,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(V){var W=V.getSelectedButton();
var X=V.getChildren();
var ba=W?V.indexOf(W)-1:X.length-1;
var Y=this._getChild(V,ba,-1,true);
if(Y){V.setSelectedButton(Y);
}else{V.resetSelectedButton();
}},_onKeyPressDown:function(bA){var bB=bA.getSelectedButton();
var bD=bB?bA.indexOf(bB)+1:0;
var bC=this._getChild(bA,bD,1,true);
if(bC){bA.setSelectedButton(bC);
}else{bA.resetSelectedButton();
}},_onKeyPressLeft:function(A){var F=A.getOpener();

if(!F){return;
}if(F instanceof qx.ui.menu.AbstractButton){var C=F.getLayoutParent();
C.resetOpenedButton();
C.setSelectedButton(F);
}else if(F instanceof qx.ui.menubar.Button){var E=F.getMenuBar().getMenuButtons();
var B=E.indexOf(F);
if(B===-1){return;
}var G=null;
var length=E.length;

for(var i=1;i<=length;i++){var D=E[(B-i+length)%length];

if(D.isEnabled()){G=D;
break;
}}
if(G&&G!=F){G.open(true);
}}},_onKeyPressRight:function(I){var K=I.getSelectedButton();
if(K){var J=K.getMenu();

if(J){I.setOpenedButton(K);
var Q=this._getChild(J,0,1);

if(Q){J.setSelectedButton(Q);
}return;
}}else if(!I.getOpenedButton()){var Q=this._getChild(I,0,1);

if(Q){I.setSelectedButton(Q);

if(Q.getMenu()){I.setOpenedButton(Q);
}return;
}}var O=I.getOpener();
if(O instanceof qx.ui.menu.Button&&K){while(O){O=O.getLayoutParent();

if(O instanceof qx.ui.menu.Menu){O=O.getOpener();

if(O instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!O){return;
}}if(O instanceof qx.ui.menubar.Button){var N=O.getMenuBar().getMenuButtons();
var L=N.indexOf(O);
if(L===-1){return;
}var P=null;
var length=N.length;

for(var i=1;i<=length;i++){var M=N[(L+i)%length];

if(M.isEnabled()){P=M;
break;
}}
if(P&&P!=O){P.open(true);
}}},_onKeyPressEnter:function(bd,be,e){if(be.hasListener(v)){var bf=e.clone();
bf.setBubbles(false);
bf.setTarget(be);
be.dispatchEvent(bf);
}this.hideAll();
},_onKeyPressSpace:function(bh,bi,e){if(bi.hasListener(v)){var bj=e.clone();
bj.setBubbles(false);
bj.setTarget(bi);
bi.dispatchEvent(bj);
}}},destruct:function(){var x=qx.event.Registration;
var w=document.body;
x.removeListener(window.document.documentElement,s,this._onMouseDown,this,true);
x.removeListener(w,t,this._onKeyUpDown,this,true);
x.removeListener(w,r,this._onKeyUpDown,this,true);
x.removeListener(w,v,this._onKeyPress,this,true);
this._disposeObjects(n,o);
this._disposeArray(m);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__cI:function(t,u,v,w){var x=this.getChildrenContainer();

if(x===this){t=h+t;
}return (x[t])(u,v,w);
},getChildren:function(){return this.__cI(c);
},hasChildren:function(){return this.__cI(f);
},add:function(C,D){return this.__cI(j,C,D);
},remove:function(p){return this.__cI(a,p);
},removeAll:function(){return this.__cI(d);
},indexOf:function(E){return this.__cI(l,E);
},addAt:function(z,A,B){this.__cI(g,z,A,B);
},addBefore:function(m,n,o){this.__cI(i,m,n,o);
},addAfter:function(q,r,s){this.__cI(k,q,r,s);
},removeAt:function(y){this.__cI(e,y);
}}});
})();
(function(){var ba="slidebar",Y="Integer",X="resize",W="qx.ui.core.Widget",V="selected",U="visible",T="Boolean",S="mouseout",R="excluded",Q="menu",bp="_applySelectedButton",bo="_applyOpenInterval",bn="_applySpacingY",bm="_blocker",bl="_applyCloseInterval",bk="_applyBlockerColor",bj="_applyIconColumnWidth",bi="mouseover",bh="qx.ui.menu.Menu",bg="Color",be="Number",bf="_applyOpenedButton",bc="_applySpacingX",bd="_applyBlockerOpacity",bb="_applyArrowColumnWidth";
qx.Class.define(bh,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var F=this.getApplicationRoot();
F.add(this);
this.addListener(bi,this._onMouseOver);
this.addListener(S,this._onMouseOut);
this.addListener(X,this._onResize,this);
F.addListener(X,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(F);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:Q},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:R},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:Y,apply:bc,init:0,themeable:true},spacingY:{check:Y,apply:bn,init:0,themeable:true},iconColumnWidth:{check:Y,init:0,themeable:true,apply:bj},arrowColumnWidth:{check:Y,init:0,themeable:true,apply:bb},blockerColor:{check:bg,init:null,nullable:true,apply:bk,themeable:true},blockerOpacity:{check:be,init:1,apply:bd,themeable:true},selectedButton:{check:W,nullable:true,apply:bp},openedButton:{check:W,nullable:true,apply:bf},opener:{check:W,nullable:true},openInterval:{check:Y,themeable:true,init:250,apply:bo},closeInterval:{check:Y,themeable:true,init:250,apply:bl},blockBackground:{check:T,themeable:true,init:false}},members:{__mB:null,__mC:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__mE();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__mE();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(br){this.placeToPoint(br);
this.__mE();
this.show();
this._placementTarget=br;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var y=[];
var z=this.getChildren();

for(var i=0;i<z.length;i++){if(z[i].isEnabled()){y.push(z[i]);
}}return y;
},_applyIconColumnWidth:function(g,h){this._getMenuLayout().setIconColumnWidth(g);
},_applyArrowColumnWidth:function(G,H){this._getMenuLayout().setArrowColumnWidth(G);
},_applySpacingX:function(D,E){this._getMenuLayout().setColumnSpacing(D);
},_applySpacingY:function(w,x){this._getMenuLayout().setSpacing(w);
},_applyVisibility:function(j,k){qx.ui.core.Widget.prototype._applyVisibility.call(this,j,k);
var l=qx.ui.menu.Manager.getInstance();

if(j===U){l.add(this);
var m=this.getParentMenu();

if(m){m.setOpenedButton(this.getOpener());
}}else if(k===U){l.remove(this);
var m=this.getParentMenu();

if(m&&m.getOpenedButton()==this.getOpener()){m.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__mD();
},__mD:function(){if(this.isVisible()){if(this.getBlockBackground()){var C=this.getZIndex();
this._blocker.blockContent(C-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var n=this.getOpener();

if(!n||!(n instanceof qx.ui.menu.AbstractButton)){return null;
}
while(n&&!(n instanceof qx.ui.menu.Menu)){n=n.getLayoutParent();
}return n;
},_applySelectedButton:function(t,u){if(u){u.removeState(V);
}
if(t){t.addState(V);
}},_applyOpenedButton:function(M,N){if(N){N.getMenu().exclude();
}
if(M){M.getMenu().open();
}},_applyBlockerColor:function(d,f){this._blocker.setColor(d);
},_applyBlockerOpacity:function(O,P){this._blocker.setOpacity(O);
},getChildrenContainer:function(){return this.getChildControl(ba,true)||this;
},_createChildControlImpl:function(o){var p;

switch(o){case ba:var p=new qx.ui.menu.MenuSlideBar();
var r=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var q=p.getLayout();
p.setLayout(r);
q.dispose();
var s=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<s.length;i++){p.add(s[i]);
}this.removeListener(X,this._onResize,this);
p.getChildrenContainer().addListener(X,this._onResize,this);
this._add(p);
break;
}return p||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,o);
},_getMenuLayout:function(){if(this.hasChildControl(ba)){return this.getChildControl(ba).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(ba)){return this.getChildControl(ba).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__mE:function(){var b=this._getMenuBounds();

if(!b){this.addListenerOnce(X,this.__mE,this);
return;
}var a=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var c=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(b.height+top);
this.moveTo(c,0);
});
}else if(top+b.height>a){this._assertSlideBar(function(){this.setHeight(a-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bq){if(this.hasChildControl(ba)){return bq.call(this);
}this.__mC=bq;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(ba);

if(this.__mC){this.__mC.call(this);
delete this.__mC;
}},_onResize:function(){if(this.isVisible()){var v=this._placementTarget;

if(!v){return;
}else if(v instanceof qx.ui.core.Widget){this.placeToWidget(v);
}else if(v.top!==undefined){this.placeToPoint(v);
}else{throw new Error("Unknown target: "+v);
}this.__mE();
}},_onMouseOver:function(e){var J=qx.ui.menu.Manager.getInstance();
J.cancelClose(this);
var K=e.getTarget();

if(K.isEnabled()&&K instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(K);
var I=K.getMenu&&K.getMenu();

if(I){I.setOpener(K);
J.scheduleOpen(I);
this.__mB=I;
}else{var L=this.getOpenedButton();

if(L){J.scheduleClose(L.getMenu());
}
if(this.__mB){J.cancelOpen(this.__mB);
this.__mB=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var A=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var B=this.getOpenedButton();
B?this.setSelectedButton(B):this.resetSelectedButton();
if(B){A.cancelClose(B.getMenu());
}if(this.__mB){A.cancelOpen(this.__mB);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(X,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bm);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__qf:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__qf=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=q.length;i<l;i++){o=q[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=q[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}var p=qx.ui.layout.VBox.prototype._computeSizeHint.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__qf||null;
}},destruct:function(){this.__qf=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="on",l="String",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="_applyMenu",a="changeCommand";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(b,this._onMouseUp);
this.addListener(j,this._onKeyPress);
this.addListener(a,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true,dereference:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(x){var y;

switch(x){case t:y=new qx.ui.basic.Image;
y.setAnonymous(true);
this._add(y,{column:0});
break;
case s:y=new qx.ui.basic.Label;
y.setAnonymous(true);
this._add(y,{column:1});
break;
case q:y=new qx.ui.basic.Label;
y.setAnonymous(true);
this._add(y,{column:2});
break;
case r:y=new qx.ui.basic.Image;
y.setAnonymous(true);
this._add(y,{column:3});
break;
}return y||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,x);
},_forwardStates:{selected:1},getChildrenSizes:function(){var E=0,F=0,G=0,K=0;

if(this._isChildControlVisible(t)){var L=this.getChildControl(t);
E=L.getMarginLeft()+L.getSizeHint().width+L.getMarginRight();
}
if(this._isChildControlVisible(s)){var I=this.getChildControl(s);
F=I.getMarginLeft()+I.getSizeHint().width+I.getMarginRight();
}
if(this._isChildControlVisible(q)){var H=this.getChildControl(q);
G=H.getMarginLeft()+H.getSizeHint().width+H.getMarginRight();
}
if(this._isChildControlVisible(r)){var J=this.getChildControl(r);
K=J.getMarginLeft()+J.getSizeHint().width+J.getMarginRight();
}return [E,F,G,K];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var D=e.getData();

if(qx.core.Variant.isSet(o,m)){var B=e.getOldData();

if(!B){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!D){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var C=D!=null?D.toString():h;
this.getChildControl(q).setValue(C);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var w=this.getCommand();

if(w!=null){this.getChildControl(q).setValue(w.toString());
}},"off":null}),_applyIcon:function(M,N){if(M){this._showChildControl(t).setSource(M);
}else{this._excludeChildControl(t);
}},_applyLabel:function(z,A){if(z){this._showChildControl(s).setValue(z);
}else{this._excludeChildControl(s);
}},_applyMenu:function(u,v){if(v){v.resetOpener();
v.removeState(n);
}
if(u){this._showChildControl(r);
u.setOpener(this);
u.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var q=this._getLayoutChildren();
var p;
var g;
var h=[];

for(var i=0,l=q.length;i<l;i++){p=q[i];
g=p.getLayoutProperties().column;
h[g]=p;
}var o=this.__nj(q[0]);
var r=o.getColumnSizes();
var k=o.getSpacingX();
var j=qx.lang.Array.sum(r)+k*(r.length-1);

if(j<d){r[1]+=d-j;
}var s=0,top=0;
var m=qx.ui.layout.Util;

for(var i=0,l=r.length;i<l;i++){p=h[i];

if(p){var f=p.getSizeHint();
var top=m.computeVerticalAlignOffset(p.getAlignY()||c,f.height,e,0,0);
var n=m.computeHorizontalAlignOffset(p.getAlignX()||a,f.width,r[i],p.getMarginLeft(),p.getMarginRight());
p.renderLayout(s+n,top,f.width,f.height);
}s+=r[i]+k;
}},__nj:function(t){while(!(t instanceof qx.ui.menu.Menu)){t=t.getLayoutParent();
}return t;
},_computeSizeHint:function(){var w=this._getLayoutChildren();
var v=0;
var x=0;

for(var i=0,l=w.length;i<l;i++){var u=w[i].getSizeHint();
x+=u.width;
v=Math.max(v,u.height);
}return {width:x,height:v};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var q="horizontal",p="scrollpane",o="vertical",n="button-backward",m="button-forward",l="content",k="execute",j="qx.ui.container.SlideBar",i="scrollY",h="removeChildWidget",c="scrollX",g="_applyOrientation",f="mousewheel",b="Integer",a="slidebar",d="update";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(v){qx.ui.core.Widget.call(this);
var w=this.getChildControl(p);
this._add(w,{flex:1});

if(v!=null){this.setOrientation(v);
}else{this.initOrientation();
}this.addListener(f,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},orientation:{check:[q,o],init:q,apply:g},scrollStep:{check:b,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(l);
},_createChildControlImpl:function(t){var u;

switch(t){case m:u=new qx.ui.form.RepeatButton;
u.addListener(k,this._onExecuteForward,this);
u.setFocusable(false);
this._addAt(u,2);
break;
case n:u=new qx.ui.form.RepeatButton;
u.addListener(k,this._onExecuteBackward,this);
u.setFocusable(false);
this._addAt(u,0);
break;
case l:u=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){u.addListener(h,this._onRemoveChild,this);
}this.getChildControl(p).add(u);
break;
case p:u=new qx.ui.core.scroll.ScrollPane();
u.addListener(d,this._onResize,this);
u.addListener(c,this._onScroll,this);
u.addListener(i,this._onScroll,this);
break;
}return u||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,t);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(x){var y=this.getChildControl(p);

if(this.getOrientation()===q){y.scrollByX(x);
}else{y.scrollByY(x);
}},scrollTo:function(r){var s=this.getChildControl(p);

if(this.getOrientation()===q){s.scrollToX(r);
}else{s.scrollToY(r);
}},_applyOrientation:function(C,D){var G=[this.getLayout(),this._getLayout()];
var F=this.getChildControl(m);
var E=this.getChildControl(n);
if(D==o){F.removeState(o);
E.removeState(o);
F.addState(q);
E.addState(q);
}else if(D==q){F.removeState(q);
E.removeState(q);
F.addState(o);
E.addState(o);
}
if(C==q){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(G[0]){G[0].dispose();
}
if(G[1]){G[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(p).getChildren()[0];

if(!content){return;
}var z=this.getInnerSize();
var B=content.getBounds();
var A=(this.getOrientation()===q)?B.width>z.width:B.height>z.height;

if(A){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(p).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var I=this.getChildControl(p);

if(this.getOrientation()===q){var H=I.getScrollX();
var J=I.getScrollMaxX();
}else{var H=I.getScrollY();
var J=I.getScrollMaxY();
}this.getChildControl(n).setEnabled(H>0);
this.getChildControl(m).setEnabled(H<J);
},_showArrows:function(){this._showChildControl(m);
this._showChildControl(n);
},_hideArrows:function(){this._excludeChildControl(m);
this._excludeChildControl(n);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g){var h;

switch(g){case c:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteForward,this);
this._addAt(h,2);
break;
case e:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteBackward,this);
this._addAt(h,0);
break;
}return h||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__nb",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__nb=new qx.event.AcceleratingTimer();
this.__nb.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__nc:null,__nb:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__nd();
}this.removeState(m);
this.addState(n);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__nc){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__ne();
},_applyEnabled:function(q,r){qx.ui.form.Button.prototype._applyEnabled.call(this,q,r);

if(!q){this.removeState(n);
this.removeState(m);
this.__ne();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__nb.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__nb.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__nd();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__nc){this.execute();
}}this.__ne();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__nc){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__ne();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__nd();
}},_onInterval:function(e){this.__nc=true;
this.fireEvent(b);
},__nd:function(){this.fireEvent(g);
this.__nc=false;
this.__nb.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__ne:function(){this.fireEvent(d);
this.__nb.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="__qg",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qg=new qx.event.Timer(this.getInterval());
this.__qg.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__qg:null,__qh:null,start:function(){this.__qg.setInterval(this.getFirstInterval());
this.__qg.start();
},stop:function(){this.__qg.stop();
this.__qh=null;
},_onInterval:function(){this.__qg.stop();

if(this.__qh==null){this.__qh=this.getInterval();
}this.__qh=Math.max(this.getMinimum(),this.__qh-this.getDecrease());
this.__qg.setInterval(this.__qh);
this.__qg.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var p="resize",o="scrollY",n="update",m="scrollX",l="_applyScrollX",k="_applyScrollY",j="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",i="appear",h="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",g="qx.event.type.Event",d="qx.ui.core.scroll.ScrollPane",f="scroll";
qx.Class.define(d,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(p,this._onUpdate);
var G=this.getContentElement();
G.addListener(f,this._onScroll,this);
G.addListener(i,this._onAppear,this);
},events:{update:g},properties:{scrollX:{check:j,apply:l,event:m,init:0},scrollY:{check:h,apply:k,event:o,init:0}},members:{add:function(H){var I=this._getChildren()[0];

if(I){this._remove(I);
I.removeListener(p,this._onUpdate,this);
}
if(H){this._add(H);
H.addListener(p,this._onUpdate,this);
}},remove:function(F){if(F){this._remove(F);
F.removeListener(p,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(n);
},_onScroll:function(e){var D=this.getContentElement();
this.setScrollX(D.getScrollX());
this.setScrollY(D.getScrollY());
},_onAppear:function(e){var B=this.getContentElement();
var w=this.getScrollX();
var z=B.getScrollX();

if(w!=z){B.scrollToX(w);
}var C=this.getScrollY();
var A=B.getScrollY();

if(C!=A){B.scrollToY(C);
}},getItemTop:function(E){var top=0;

do{top+=E.getBounds().top;
E=E.getLayoutParent();
}while(E&&E!==this);
return top;
},getItemBottom:function(J){return this.getItemTop(J)+J.getBounds().height;
},getItemLeft:function(M){var N=0;
var parent;

do{N+=M.getBounds().left;
parent=M.getLayoutParent();

if(parent){N+=parent.getInsets().left;
}M=parent;
}while(M&&M!==this);
return N;
},getItemRight:function(s){return this.getItemLeft(s)+s.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var r=this.getInnerSize();
var q=this.getScrollSize();

if(r&&q){return Math.max(0,q.width-r.width);
}return 0;
},getScrollMaxY:function(){var b=this.getInnerSize();
var a=this.getScrollSize();

if(b&&a){return Math.max(0,a.height-b.height);
}return 0;
},scrollToX:function(K){var L=this.getScrollMaxX();

if(K<0){K=0;
}else if(K>L){K=L;
}this.setScrollX(K);
},scrollToY:function(t){var u=this.getScrollMaxY();

if(t<0){t=0;
}else if(t>u){t=u;
}this.setScrollY(t);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(c){this.getContentElement().scrollToX(c);
},_applyScrollY:function(v){this.getContentElement().scrollToY(v);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="__mF",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__mF=new qx.event.AcceleratingTimer();
this.__mF.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__mF:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__mF.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__mF.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__mF.stop();
}}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){qx.ui.menu.AbstractButton.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(n){var o;

switch(n){case k:o=new qx.ui.basic.Image();
o.setAlignY(g);
this._add(o);
break;
case m:o=new qx.ui.toolbar.PartContainer;
this._add(o);
break;
}return o||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,n);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(p,q){var r=this.getChildControl(m).getLayout();
p==null?r.resetSpacing():r.setSpacing(p);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var t=this.getChildren();
var s=[];
var u;

for(var i=0,l=t.length;i<l;i++){u=t[i];

if(u instanceof qx.ui.menubar.Button){s.push(u);
}}return s;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var l="Boolean",k="resize",j="mousedown",i="w-resize",h="sw-resize",g="n-resize",f="resizableRight",d="ne-resize",c="se-resize",b="Integer",A="e-resize",z="resizableLeft",y="mousemove",x="move",w="shorthand",v="maximized",u="nw-resize",t="mouseout",s="qx.ui.core.MResizable",r="mouseup",p="losecapture",q="resize-frame",n="resizableBottom",o="s-resize",m="resizableTop";
qx.Mixin.define(s,{construct:function(){this.addListener(j,this.__bC,this,true);
this.addListener(r,this.__bD,this);
this.addListener(y,this.__bF,this);
this.addListener(t,this.__bG,this);
this.addListener(p,this.__bE,this);
var H=this.getContainerElement().getDomElement();

if(H==null){H=window;
}this.__bq=qx.event.Registration.getManager(H).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:l,init:true},resizableRight:{check:l,init:true},resizableBottom:{check:l,init:true},resizableLeft:{check:l,init:true},resizable:{group:[m,f,n,z],mode:w},resizeSensitivity:{check:b,init:5},useResizeFrame:{check:l,init:true}},members:{__bq:null,__br:null,__bs:null,__bt:null,__bu:null,__bv:null,__bw:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__bx:function(){var a=this.__br;

if(!a){a=this.__br=new qx.ui.core.Widget();
a.setAppearance(q);
a.exclude();
qx.core.Init.getApplication().getRoot().add(a);
}return a;
},__by:function(){var ba=this.__bv;
var Y=this.__bx();
Y.setUserBounds(ba.left,ba.top,ba.width,ba.height);
Y.show();
Y.setZIndex(this.getZIndex()+1);
},__bz:function(e){var J=this.__bs;
var K=this.getSizeHint();
var N=this.__bw;
var M=this.__bv;
var I=M.width;
var L=M.height;
var P=M.left;
var top=M.top;
var O;

if((J&this.RESIZE_TOP)||(J&this.RESIZE_BOTTOM)){O=Math.max(N.top,Math.min(N.bottom,e.getDocumentTop()))-this.__bu;

if(J&this.RESIZE_TOP){L-=O;
}else{L+=O;
}
if(L<K.minHeight){L=K.minHeight;
}else if(L>K.maxHeight){L=K.maxHeight;
}
if(J&this.RESIZE_TOP){top+=M.height-L;
}}
if((J&this.RESIZE_LEFT)||(J&this.RESIZE_RIGHT)){O=Math.max(N.left,Math.min(N.right,e.getDocumentLeft()))-this.__bt;

if(J&this.RESIZE_LEFT){I-=O;
}else{I+=O;
}
if(I<K.minWidth){I=K.minWidth;
}else if(I>K.maxWidth){I=K.maxWidth;
}
if(J&this.RESIZE_LEFT){P+=M.width-I;
}}return {viewportLeft:P,viewportTop:top,parentLeft:M.bounds.left+P-M.left,parentTop:M.bounds.top+top-M.top,width:I,height:L};
},__bA:{1:g,2:o,4:i,8:A,5:u,6:h,9:d,10:c},__bB:function(e){var E=this.getContentLocation();
var C=this.getResizeSensitivity();
var G=e.getDocumentLeft();
var F=e.getDocumentTop();
var D=0;

if(this.getResizableTop()&&Math.abs(E.top-F)<C){D+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(E.bottom-F)<C){D+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(E.left-G)<C){D+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(E.right-G)<C){D+=this.RESIZE_RIGHT;
}this.__bs=D;
},__bC:function(e){if(!this.__bs){return;
}this.addState(k);
this.__bt=e.getDocumentLeft();
this.__bu=e.getDocumentTop();
var location=this.getContainerLocation();
var X=this.getBounds();
this.__bv={top:location.top,left:location.left,width:X.width,height:X.height,bounds:qx.lang.Object.clone(X)};
var parent=this.getLayoutParent();
var V=parent.getContentLocation();
var W=parent.getBounds();
this.__bw={left:V.left,top:V.top,right:V.left+W.width,bottom:V.top+W.height};
if(this.getUseResizeFrame()){this.__by();
}this.capture();
e.stop();
},__bD:function(e){if(!this.hasState(k)){return;
}if(this.getUseResizeFrame()){this.__bx().exclude();
}var B=this.__bz(e);
this.setWidth(B.width);
this.setHeight(B.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:B.parentLeft,top:B.parentTop});
}this.__bs=0;
this.removeState(k);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__bE:function(e){if(!this.__bs){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(x);
if(this.getUseResizeFrame()){this.__bx().exclude();
}},__bF:function(e){if(this.hasState(k)){var T=this.__bz(e);
if(this.getUseResizeFrame()){var R=this.__bx();
R.setUserBounds(T.viewportLeft,T.viewportTop,T.width,T.height);
}else{this.setWidth(T.width);
this.setHeight(T.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:T.parentLeft,top:T.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(v)&&!this.__bq.isSessionActive()){this.__bB(e);
var U=this.__bs;
var S=this.getApplicationRoot();

if(U){var Q=this.__bA[U];
this.setCursor(Q);
S.setGlobalCursor(Q);
}else if(this.getCursor()){this.resetCursor();
S.resetGlobalCursor();
}}},__bG:function(e){if(this.getCursor()&&!this.hasState(k)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__br!=null&&!qx.core.ObjectRegistry.inShutDown){this.__br.destroy();
this.__br=null;
}this.__bq=null;
}});
})();
(function(){var q="move",p="Boolean",o="mouseup",n="mousedown",m="losecapture",l="qx.ui.core.MMovable",k="__Y",j="__ba",i="mousemove",h="maximized",g="move-frame";
qx.Mixin.define(l,{properties:{movable:{check:p,init:true},useMoveFrame:{check:p,init:false}},members:{__Y:null,__ba:null,__bb:null,__bc:null,__bd:null,__be:null,__bf:null,__bg:false,__bh:null,__bi:0,_activateMoveHandle:function(w){if(this.__Y){throw new Error("The move handle could not be redefined!");
}this.__Y=w;
w.addListener(n,this._onMoveMouseDown,this);
w.addListener(o,this._onMoveMouseUp,this);
w.addListener(i,this._onMoveMouseMove,this);
w.addListener(m,this.__bm,this);
},__bj:function(){var z=this.__ba;

if(!z){z=this.__ba=new qx.ui.core.Widget();
z.setAppearance(g);
z.exclude();
qx.core.Init.getApplication().getRoot().add(z);
}return z;
},__bk:function(){var location=this.getContainerLocation();
var s=this.getBounds();
var r=this.__bj();
r.setUserBounds(location.left,location.top,s.width,s.height);
r.show();
r.setZIndex(this.getZIndex()+1);
},__bl:function(e){var b=this.__bb;
var f=Math.max(b.left,Math.min(b.right,e.getDocumentLeft()));
var d=Math.max(b.top,Math.min(b.bottom,e.getDocumentTop()));
var a=this.__bc+f;
var c=this.__bd+d;
return {viewportLeft:a,viewportTop:c,parentLeft:a-this.__be,parentTop:c-this.__bf};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(h)){return;
}var parent=this.getLayoutParent();
var u=parent.getContentLocation();
var v=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__bh=parent.getBlockerColor();
this.__bi=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
this.__bg=true;
}}this.__bb={left:u.left,top:u.top,right:u.left+v.width,bottom:u.top+v.height};
var t=this.getContainerLocation();
this.__be=u.left;
this.__bf=u.top;
this.__bc=t.left-e.getDocumentLeft();
this.__bd=t.top-e.getDocumentTop();
this.addState(q);
this.__Y.capture();
if(this.getUseMoveFrame()){this.__bk();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(q)){return;
}var y=this.__bl(e);

if(this.getUseMoveFrame()){this.__bj().setDomPosition(y.viewportLeft,y.viewportTop);
}else{this.setDomPosition(y.parentLeft,y.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(q)){return;
}this.removeState(q);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__bg){parent.unblockContent();
parent.setBlockerColor(this.__bh);
parent.setBlockerOpacity(this.__bi);
this.__bh=null;
this.__bi=0;
this.__bg=false;
}}this.__Y.releaseCapture();
var x=this.__bl(e);
this.setLayoutProperties({left:x.parentLeft,top:x.parentTop});
if(this.getUseMoveFrame()){this.__bj().exclude();
}e.stopPropagation();
},__bm:function(e){if(!this.hasState(q)){return;
}this.removeState(q);
if(this.getUseMoveFrame()){this.__bj().exclude();
}}},destruct:function(){this._disposeObjects(j,k);
this.__bb=null;
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__ks:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__kt:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__kt[name];
s[t]();
}else{var u=this.__ks[name];
s[u](q);
}}}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(c){this.assertInterface(c,qx.ui.window.IDesktop);
},changeActiveWindow:function(e,f){},updateStack:function(){},bringToFront:function(d){this.assertInstance(d,qx.ui.window.Window);
},sendToBack:function(b){this.assertInstance(b,qx.ui.window.Window);
}}});
})();
(function(){var b="__bp",a="qx.ui.window.Manager";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__bp:null,setDesktop:function(c){this.__bp=c;
this.updateStack();
},getDesktop:function(){return this.__bp;
},changeActiveWindow:function(r,s){if(r){this.bringToFront(r);
r.setActive(true);
}
if(s){s.resetActive();
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__bp.forceUnblockContent();
var d=this.__bp.getWindows();
var f=this._minZIndex;
var j=f+d.length*2;
var g=f+d.length*4;
var h=null;

for(var i=0,l=d.length;i<l;i++){var e=d[i];
if(!e.isVisible()){continue;
}h=h||e;
if(e.isModal()){e.setZIndex(g);
this.__bp.blockContent(g-1);
g+=2;
h=e;
}else if(e.isAlwaysOnTop()){e.setZIndex(j);
j+=2;
}else{e.setZIndex(f);
f+=2;
}if(!h.isModal()&&e.isActive()||e.getZIndex()>h.getZIndex()){h=e;
}}this.__bp.setActiveWindow(h);
},bringToFront:function(k){var m=this.__bp.getWindows();
var n=qx.lang.Array.remove(m,k);

if(n){m.push(k);
this.updateStack();
}},sendToBack:function(o){var p=this.__bp.getWindows();
var q=qx.lang.Array.remove(p,o);

if(q){p.unshift(o);
this.updateStack();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var n="Boolean",m="qx.event.type.Event",l="captionbar",k="_applyCaptionBarChange",j="maximize-button",i="restore-button",h="minimize-button",g="close-button",f="maximized",d="execute",T="pane",S="title",R="icon",Q="statusbar-text",P="statusbar",O="String",N="normal",M="active",L="beforeClose",K="beforeMinimize",u="mousedown",v="changeStatus",s="changeIcon",t="excluded",q="dblclick",r="_applyActive",o="beforeRestore",p="minimize",w="changeModal",x="changeAlwaysOnTop",C="_applyShowStatusbar",B="_applyStatus",E="qx.ui.window.Window",D="changeCaption",G="focusout",F="beforeMaximize",z="maximize",J="restore",I="window",H="close",y="changeActive",A="minimized";
qx.Class.define(E,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(bn,bo){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(l);
this._createChildControl(T);
if(bo!=null){this.setIcon(bo);
}
if(bn!=null){this.setCaption(bn);
}this._updateCaptionBar();
this.addListener(u,this._onWindowMouseDown,this,true);
this.addListener(G,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":m,"close":m,"beforeMinimize":m,"minimize":m,"beforeMaximize":m,"maximize":m,"beforeRestore":m,"restore":m},properties:{appearance:{refine:true,init:I},visibility:{refine:true,init:t},focusable:{refine:true,init:true},active:{check:n,init:false,apply:r,event:y},alwaysOnTop:{check:n,init:false,event:x},modal:{check:n,init:false,event:w},caption:{apply:k,event:D,nullable:true},icon:{check:O,nullable:true,apply:k,event:s,themeable:true},status:{check:O,nullable:true,apply:B,event:v},showClose:{check:n,init:true,apply:k,themeable:true},showMaximize:{check:n,init:true,apply:k,themeable:true},showMinimize:{check:n,init:true,apply:k,themeable:true},allowClose:{check:n,init:true,apply:k},allowMaximize:{check:n,init:true,apply:k},allowMinimize:{check:n,init:true,apply:k},showStatusbar:{check:n,init:false,apply:C}},members:{__bn:null,__bo:null,getChildrenContainer:function(){return this.getChildControl(T);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);
},_createChildControlImpl:function(bh){var bi;

switch(bh){case P:bi=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(bi);
bi.add(this.getChildControl(Q));
break;
case Q:bi=new qx.ui.basic.Label();
bi.setValue(this.getStatus());
break;
case T:bi=new qx.ui.container.Composite();
this._add(bi,{flex:1});
break;
case l:var bk=new qx.ui.layout.Grid();
bk.setRowFlex(0,1);
bk.setColumnFlex(1,1);
bi=new qx.ui.container.Composite(bk);
this._add(bi);
bi.addListener(q,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(bi);
break;
case R:bi=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(l).add(bi,{row:0,column:0});
break;
case S:bi=new qx.ui.basic.Label(this.getCaption());
bi.setWidth(0);
bi.setAllowGrowX(true);
var bj=this.getChildControl(l);
bj.add(bi,{row:0,column:1});
break;
case h:bi=new qx.ui.form.Button();
bi.setFocusable(false);
bi.addListener(d,this._onMinimizeButtonClick,this);
this.getChildControl(l).add(bi,{row:0,column:2});
break;
case i:bi=new qx.ui.form.Button();
bi.setFocusable(false);
bi.addListener(d,this._onRestoreButtonClick,this);
this.getChildControl(l).add(bi,{row:0,column:3});
break;
case j:bi=new qx.ui.form.Button();
bi.setFocusable(false);
bi.addListener(d,this._onMaximizeButtonClick,this);
this.getChildControl(l).add(bi,{row:0,column:4});
break;
case g:bi=new qx.ui.form.Button();
bi.setFocusable(false);
bi.addListener(d,this._onCloseButtonClick,this);
this.getChildControl(l).add(bi,{row:0,column:6});
break;
}return bi||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bh);
},_updateCaptionBar:function(){var Y;
var ba=this.getIcon();

if(ba){this.getChildControl(R).setSource(ba);
this._showChildControl(R);
}else{this._excludeChildControl(R);
}var X=this.getCaption();

if(X){this.getChildControl(S).setValue(X);
this._showChildControl(S);
}else{this._excludeChildControl(S);
}
if(this.getShowMinimize()){this._showChildControl(h);
Y=this.getChildControl(h);
this.getAllowMinimize()?Y.resetEnabled():Y.setEnabled(false);
}else{this._excludeChildControl(h);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(i);
this._excludeChildControl(j);
}else{this._showChildControl(j);
this._excludeChildControl(i);
}Y=this.getChildControl(j);
this.getAllowMaximize()?Y.resetEnabled():Y.setEnabled(false);
}else{this._excludeChildControl(j);
this._excludeChildControl(i);
}
if(this.getShowClose()){this._showChildControl(g);
Y=this.getChildControl(g);
this.getAllowClose()?Y.resetEnabled():Y.setEnabled(false);
}else{this._excludeChildControl(g);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(L,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(H);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var be=parent.getBounds();

if(be){var bf=this.getSizeHint();
var bd=Math.round((be.width-bf.width)/2);
var top=Math.round((be.height-bf.height)/2);

if(top<0){top=0;
}this.moveTo(bd,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(F,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var c=this.getLayoutProperties();
this.__bo=c.left===undefined?0:c.left;
this.__bn=c.top===undefined?0:c.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(f);
this._updateCaptionBar();
this.fireEvent(z);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(K,qx.event.type.Event,[false,true])){var br=this.getLayoutProperties();
this.__bo=br.left===undefined?0:br.left;
this.__bn=br.top===undefined?0:br.top;
this.removeState(f);
this.hide();
this.fireEvent(p);
}},restore:function(){if(this.getMode()===N){return;
}
if(this.fireNonBubblingEvent(o,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bb=this.__bo;
var top=this.__bn;
this.setLayoutProperties({edge:null,left:bb,top:top});
this.removeState(f);
this._updateCaptionBar();
this.fireEvent(J);
}},moveTo:function(bc,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bc,top:top});
},isMaximized:function(){return this.hasState(f);
},getMode:function(){if(!this.isVisible()){return A;
}else{if(this.isMaximized()){return f;
}else{return N;
}}},_applyActive:function(a,b){if(b){this.removeState(M);
}else{this.addState(M);
}},_getContentPaddingTarget:function(){return this.getChildControl(T);
},_applyShowStatusbar:function(bl,bm){if(bl){this._showChildControl(P);
}else{this._excludeChildControl(P);
}},_applyCaptionBarChange:function(bp,bq){this._updateCaptionBar();
},_applyStatus:function(U,V){var W=this.getChildControl(Q,true);

if(W){W.setValue(U);
}},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bg=e.getRelatedTarget();

if(bg!=null&&!qx.ui.core.Widget.contains(this,bg)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(h).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(i).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(j).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(g).reset();
}}});
})();
(function(){var e="_model",d="inspector-window",c="qx.event.type.Event",b="open",a="inspector.components.AbstractWindow";
qx.Class.define(a,{extend:qx.ui.window.Window,construct:function(name,g){qx.ui.window.Window.call(this,name);
this._model=g;
this.setLayout(new qx.ui.layout.Canvas());
this.syncAppearance();
this.setInitSizeAndPosition();
},events:{"open":c},properties:{appearance:{init:d,refine:true}},members:{_model:null,setInitSizeAndPosition:function(){throw new Error("Abstract method call (setInitSizeAndPosition) in 'AbstractWindow'!");
},setSizeAndPosition:function(f){if(!isNaN(f.left)&&!isNaN(f.top)){this.moveTo(f.left,f.top);
}
if(!isNaN(f.width)&&!isNaN(f.height)){this.setWidth(f.width);
this.setHeight(f.height);
}},open:function(){qx.ui.window.Window.prototype.open.call(this);
this.fireEvent(b);
}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var c="__OC",b="inspector.objects.Window",a="__OB";
qx.Class.define(b,{extend:inspector.components.AbstractWindow,construct:function(name,d){inspector.components.AbstractWindow.call(this,name,d);
this.__OB=new inspector.objects.Model(this._model);
this.__OC=new inspector.objects.Controller(this.__OB);
this.add(this.__OC.getView(),{edge:0});
},members:{__OB:null,__OC:null,setInitSizeAndPosition:function(){var f=parseInt(qx.bom.Viewport.getWidth()-this.getWidth());
var e=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(f,30);
this.setHeight(e);
}},destruct:function(){this._disposeObjects(c,a);
}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(c){this.assertInterface(c,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(b){this.assertInteger(b);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var cP="left",cO="top",cN="_applyLayoutChange",cM="hAlign",cL="flex",cK="vAlign",cJ="Integer",cI="minWidth",cH="width",cG="minHeight",cD="qx.ui.layout.Grid",cF="height",cE="maxHeight",cC="maxWidth";
qx.Class.define(cD,{extend:qx.ui.layout.Abstract,construct:function(cS,cT){qx.ui.layout.Abstract.call(this);
this.__hO=[];
this.__hP=[];

if(cS){this.setSpacingX(cS);
}
if(cT){this.setSpacingY(cT);
}},properties:{spacingX:{check:cJ,init:0,apply:cN},spacingY:{check:cJ,init:0,apply:cN}},members:{__hQ:null,__hO:null,__hP:null,__hR:null,__hS:null,__hT:null,__hU:null,__hV:null,__hW:null,verifyLayoutProperty:null,__hX:function(){var bv=[];
var bu=[];
var bw=[];
var bs=-1;
var br=-1;
var by=this._getLayoutChildren();

for(var i=0,l=by.length;i<l;i++){var bt=by[i];
var bx=bt.getLayoutProperties();
var bz=bx.row;
var bq=bx.column;
bx.colSpan=bx.colSpan||1;
bx.rowSpan=bx.rowSpan||1;
if(bz==null||bq==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+bt+"' must be defined!");
}
if(bv[bz]&&bv[bz][bq]){throw new Error("Cannot add widget '"+bt+"'!. "+"There is already a widget '"+bv[bz][bq]+"' in this cell ("+bz+", "+bq+")");
}
for(var x=bq;x<bq+bx.colSpan;x++){for(var y=bz;y<bz+bx.rowSpan;y++){if(bv[y]==undefined){bv[y]=[];
}bv[y][x]=bt;
br=Math.max(br,x);
bs=Math.max(bs,y);
}}
if(bx.rowSpan>1){bw.push(bt);
}
if(bx.colSpan>1){bu.push(bt);
}}for(var y=0;y<=bs;y++){if(bv[y]==undefined){bv[y]=[];
}}this.__hQ=bv;
this.__hR=bu;
this.__hS=bw;
this.__hT=bs;
this.__hU=br;
this.__hV=null;
this.__hW=null;
delete this._invalidChildrenCache;
},_setRowData:function(cd,ce,cf){var cg=this.__hO[cd];

if(!cg){this.__hO[cd]={};
this.__hO[cd][ce]=cf;
}else{cg[ce]=cf;
}},_setColumnData:function(w,z,A){var B=this.__hP[w];

if(!B){this.__hP[w]={};
this.__hP[w][z]=A;
}else{B[z]=A;
}},setSpacing:function(cl){this.setSpacingY(cl);
this.setSpacingX(cl);
return this;
},setColumnAlign:function(bn,bo,bp){{};
this._setColumnData(bn,cM,bo);
this._setColumnData(bn,cK,bp);
this._applyLayoutChange();
return this;
},getColumnAlign:function(a){var b=this.__hP[a]||{};
return {vAlign:b.vAlign||cO,hAlign:b.hAlign||cP};
},setRowAlign:function(cv,cw,cx){{};
this._setRowData(cv,cM,cw);
this._setRowData(cv,cK,cx);
this._applyLayoutChange();
return this;
},getRowAlign:function(ba){var bb=this.__hO[ba]||{};
return {vAlign:bb.vAlign||cO,hAlign:bb.hAlign||cP};
},getCellWidget:function(c,d){if(this._invalidChildrenCache){this.__hX();
}var c=this.__hQ[c]||{};
return c[d]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__hX();
}return this.__hT+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__hX();
}return this.__hU+1;
},getCellAlign:function(N,O){var U=cO;
var S=cP;
var T=this.__hO[N];
var Q=this.__hP[O];
var P=this.__hQ[N][O];

if(P){var R={vAlign:P.getAlignY(),hAlign:P.getAlignX()};
}else{R={};
}if(R.vAlign){U=R.vAlign;
}else if(T&&T.vAlign){U=T.vAlign;
}else if(Q&&Q.vAlign){U=Q.vAlign;
}if(R.hAlign){S=R.hAlign;
}else if(Q&&Q.hAlign){S=Q.hAlign;
}else if(T&&T.hAlign){S=T.hAlign;
}return {vAlign:U,hAlign:S};
},setColumnFlex:function(dF,dG){this._setColumnData(dF,cL,dG);
this._applyLayoutChange();
return this;
},getColumnFlex:function(dD){var dE=this.__hP[dD]||{};
return dE.flex!==undefined?dE.flex:0;
},setRowFlex:function(V,W){this._setRowData(V,cL,W);
this._applyLayoutChange();
return this;
},getRowFlex:function(bA){var bB=this.__hO[bA]||{};
var bC=bB.flex!==undefined?bB.flex:0;
return bC;
},setColumnMaxWidth:function(cj,ck){this._setColumnData(cj,cC,ck);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(be){var bf=this.__hP[be]||{};
return bf.maxWidth!==undefined?bf.maxWidth:Infinity;
},setColumnWidth:function(bl,bm){this._setColumnData(bl,cH,bm);
this._applyLayoutChange();
return this;
},getColumnWidth:function(cy){var cz=this.__hP[cy]||{};
return cz.width!==undefined?cz.width:null;
},setColumnMinWidth:function(bT,bU){this._setColumnData(bT,cI,bU);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(dB){var dC=this.__hP[dB]||{};
return dC.minWidth||0;
},setRowMaxHeight:function(ct,cu){this._setRowData(ct,cE,cu);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bc){var bd=this.__hO[bc]||{};
return bd.maxHeight||Infinity;
},setRowHeight:function(X,Y){this._setRowData(X,cF,Y);
this._applyLayoutChange();
return this;
},getRowHeight:function(cQ){var cR=this.__hO[cQ]||{};
return cR.height!==undefined?cR.height:null;
},setRowMinHeight:function(ch,ci){this._setRowData(ch,cG,ci);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(cA){var cB=this.__hO[cA]||{};
return cB.minHeight||0;
},__hY:function(bg){var bk=bg.getSizeHint();
var bj=bg.getMarginLeft()+bg.getMarginRight();
var bi=bg.getMarginTop()+bg.getMarginBottom();
var bh={height:bk.height+bi,width:bk.width+bj,minHeight:bk.minHeight+bi,minWidth:bk.minWidth+bj,maxHeight:bk.maxHeight+bi,maxWidth:bk.maxWidth+bj};
return bh;
},_fixHeightsRowSpan:function(bD){var bQ=this.getSpacingY();

for(var i=0,l=this.__hS.length;i<l;i++){var bG=this.__hS[i];
var bI=this.__hY(bG);
var bJ=bG.getLayoutProperties();
var bF=bJ.row;
var bO=bQ*(bJ.rowSpan-1);
var bE=bO;
var bL={};

for(var j=0;j<bJ.rowSpan;j++){var bS=bJ.row+j;
var bH=bD[bS];
var bR=this.getRowFlex(bS);

if(bR>0){bL[bS]={min:bH.minHeight,value:bH.height,max:bH.maxHeight,flex:bR};
}bO+=bH.height;
bE+=bH.minHeight;
}if(bO<bI.height){if(!qx.lang.Object.isEmpty(bL)){var bP=qx.ui.layout.Util.computeFlexOffsets(bL,bI.height,bO);

for(var k=0;k<bJ.rowSpan;k++){var bK=bP[bF+k]?bP[bF+k].offset:0;
bD[bF+k].height+=bK;
}}else{var bM=bQ*(bJ.rowSpan-1);
var bN=bI.height-bM;
var bH=Math.floor(bN/bJ.rowSpan);

for(var k=0;k<bJ.rowSpan;k++){bD[bF+k].height=bH;
}}}if(bE<bI.minHeight){var bP=qx.ui.layout.Util.computeFlexOffsets(bL,bI.minHeight,bE);

for(var j=0;j<bJ.rowSpan;j++){var bK=bP[bF+j]?bP[bF+j].offset:0;
bD[bF+j].minHeight+=bK;
}}}},_fixWidthsColSpan:function(e){var m=this.getSpacingX();

for(var i=0,l=this.__hR.length;i<l;i++){var f=this.__hR[i];
var h=this.__hY(f);
var o=f.getLayoutProperties();
var g=o.column;
var u=m*(o.colSpan-1);
var n=u;
var p={};
var r;

for(var j=0;j<o.colSpan;j++){var v=o.column+j;
var t=e[v];
var s=this.getColumnFlex(v);
if(s>0){p[v]={min:t.minWidth,value:t.width,max:t.maxWidth,flex:s};
}u+=t.width;
n+=t.minWidth;
}if(u<h.width){var q=qx.ui.layout.Util.computeFlexOffsets(p,h.width,u);

for(var j=0;j<o.colSpan;j++){r=q[g+j]?q[g+j].offset:0;
e[g+j].width+=r;
}}if(n<h.minWidth){var q=qx.ui.layout.Util.computeFlexOffsets(p,h.minWidth,n);

for(var j=0;j<o.colSpan;j++){r=q[g+j]?q[g+j].offset:0;
e[g+j].minWidth+=r;
}}}},_getRowHeights:function(){if(this.__hV!=null){return this.__hV;
}var ec=[];
var dU=this.__hT;
var dT=this.__hU;

for(var ed=0;ed<=dU;ed++){var dV=0;
var dX=0;
var dW=0;

for(var eb=0;eb<=dT;eb++){var dS=this.__hQ[ed][eb];

if(!dS){continue;
}var dY=dS.getLayoutProperties().rowSpan||0;

if(dY>1){continue;
}var ea=this.__hY(dS);

if(this.getRowFlex(ed)>0){dV=Math.max(dV,ea.minHeight);
}else{dV=Math.max(dV,ea.height);
}dX=Math.max(dX,ea.height);
}var dV=Math.max(dV,this.getRowMinHeight(ed));
var dW=this.getRowMaxHeight(ed);

if(this.getRowHeight(ed)!==null){var dX=this.getRowHeight(ed);
}else{var dX=Math.max(dV,Math.min(dX,dW));
}ec[ed]={minHeight:dV,height:dX,maxHeight:dW};
}
if(this.__hS.length>0){this._fixHeightsRowSpan(ec);
}this.__hV=ec;
return ec;
},_getColWidths:function(){if(this.__hW!=null){return this.__hW;
}var G=[];
var D=this.__hU;
var F=this.__hT;

for(var L=0;L<=D;L++){var J=0;
var I=0;
var E=Infinity;

for(var M=0;M<=F;M++){var C=this.__hQ[M][L];

if(!C){continue;
}var H=C.getLayoutProperties().colSpan||0;

if(H>1){continue;
}var K=this.__hY(C);

if(this.getColumnFlex(L)>0){I=Math.max(I,K.minWidth);
}else{I=Math.max(I,K.width);
}J=Math.max(J,K.width);
}var I=Math.max(I,this.getColumnMinWidth(L));
var E=this.getColumnMaxWidth(L);

if(this.getColumnWidth(L)!==null){var J=this.getColumnWidth(L);
}else{var J=Math.max(I,Math.min(J,E));
}G[L]={minWidth:I,width:J,maxWidth:E};
}
if(this.__hR.length>0){this._fixWidthsColSpan(G);
}this.__hW=G;
return G;
},_getColumnFlexOffsets:function(bV){var bW=this.getSizeHint();
var cb=bV-bW.width;

if(cb==0){return {};
}var bY=this._getColWidths();
var bX={};

for(var i=0,l=bY.length;i<l;i++){var cc=bY[i];
var ca=this.getColumnFlex(i);

if((ca<=0)||(cc.width==cc.maxWidth&&cb>0)||(cc.width==cc.minWidth&&cb<0)){continue;
}bX[i]={min:cc.minWidth,value:cc.width,max:cc.maxWidth,flex:ca};
}return qx.ui.layout.Util.computeFlexOffsets(bX,bV,bW.width);
},_getRowFlexOffsets:function(cm){var cn=this.getSizeHint();
var cq=cm-cn.height;

if(cq==0){return {};
}var cr=this._getRowHeights();
var co={};

for(var i=0,l=cr.length;i<l;i++){var cs=cr[i];
var cp=this.getRowFlex(i);

if((cp<=0)||(cs.height==cs.maxHeight&&cq>0)||(cs.height==cs.minHeight&&cq<0)){continue;
}co[i]={min:cs.minHeight,value:cs.height,max:cs.maxHeight,flex:cp};
}return qx.ui.layout.Util.computeFlexOffsets(co,cm,cn.height);
},renderLayout:function(cU,cV){if(this._invalidChildrenCache){this.__hX();
}var dk=qx.ui.layout.Util;
var cX=this.getSpacingX();
var de=this.getSpacingY();
var dq=this._getColWidths();
var dp=this._getColumnFlexOffsets(cU);
var cY=[];
var ds=this.__hU;
var cW=this.__hT;
var dr;

for(var dt=0;dt<=ds;dt++){dr=dp[dt]?dp[dt].offset:0;
cY[dt]=dq[dt].width+dr;
}var dh=this._getRowHeights();
var dj=this._getRowFlexOffsets(cV);
var dz=[];

for(var df=0;df<=cW;df++){dr=dj[df]?dj[df].offset:0;
dz[df]=dh[df].height+dr;
}var dA=0;

for(var dt=0;dt<=ds;dt++){var top=0;

for(var df=0;df<=cW;df++){var dm=this.__hQ[df][dt];
if(!dm){top+=dz[df]+de;
continue;
}var da=dm.getLayoutProperties();
if(da.row!==df||da.column!==dt){top+=dz[df]+de;
continue;
}var dy=cX*(da.colSpan-1);

for(var i=0;i<da.colSpan;i++){dy+=cY[dt+i];
}var dn=de*(da.rowSpan-1);

for(var i=0;i<da.rowSpan;i++){dn+=dz[df+i];
}var db=dm.getSizeHint();
var dw=dm.getMarginTop();
var dl=dm.getMarginLeft();
var di=dm.getMarginBottom();
var dd=dm.getMarginRight();
var dg=Math.max(db.minWidth,Math.min(dy-dl-dd,db.maxWidth));
var dx=Math.max(db.minHeight,Math.min(dn-dw-di,db.maxHeight));
var du=this.getCellAlign(df,dt);
var dv=dA+dk.computeHorizontalAlignOffset(du.hAlign,dg,dy,dl,dd);
var dc=top+dk.computeVerticalAlignOffset(du.vAlign,dx,dn,dw,di);
dm.renderLayout(dv,dc,dg,dx);
top+=dz[df]+de;
}dA+=cY[dt]+cX;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__hW=null;
this.__hV=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__hX();
}var dL=this._getColWidths();
var dN=0,dO=0;

for(var i=0,l=dL.length;i<l;i++){var dP=dL[i];

if(this.getColumnFlex(i)>0){dN+=dP.minWidth;
}else{dN+=dP.width;
}dO+=dP.width;
}var dQ=this._getRowHeights();
var dJ=0,dM=0;

for(var i=0,l=dQ.length;i<l;i++){var dR=dQ[i];

if(this.getRowFlex(i)>0){dJ+=dR.minHeight;
}else{dJ+=dR.height;
}dM+=dR.height;
}var dI=this.getSpacingX()*(dL.length-1);
var dH=this.getSpacingY()*(dQ.length-1);
var dK={minWidth:dN+dI,width:dO+dI,minHeight:dJ+dH,height:dM+dH};
return dK;
}},destruct:function(){this.__hQ=this.__hO=this.__hP=this.__hR=this.__hS=this.__hW=this.__hV=null;
}});
})();
(function(){var e="changeInspected",d="changeApplication",c="qx.event.type.Data",b="inspector.objects.Model",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.core.Object,construct:function(h){qx.core.Object.call(this);
this.__OD=h;
h.addListener(d,this.__OE,this);
h.addListener(e,this.__OF,this);
},events:{"changeObjects":a,"changeInspected":c},members:{__OD:null,getObjects:function(){return this.__OD.getObjects();
},getObjectFromHashCode:function(f){var g=this.__OD.getObjectRegistry();
return g.fromHashCode(f);
},getInspected:function(){return this.__OD.getInspected();
},setInspected:function(i){this.__OD.setInspected(i);
},__OE:function(event){this.fireEvent("changeObjects");
},__OF:function(event){this.fireDataEvent("changeInspected",event.getData(),event.getOldData());
}},destruct:function(){this.__OD.removeListener(d,this.__OE,this);
this.__OD.removeListener(e,this.__OF,this);
this.__OD=null;
}});
})();
(function(){var d="appear",c="changeObjects",b="changeInspected",a="inspector.objects.Controller";
qx.Class.define(a,{extend:qx.core.Object,construct:function(g){qx.core.Object.call(this);
{};
this.__OG=g;
this.__OG.addListener(b,this.__OP,this);
this.__OG.addListener(c,this.__OQ,this);
this.__OH=new inspector.objects.View(this);
this.__OI=qx.util.TimerManager.getInstance();
this.__OH.addListenerOnce(d,function(event){this.__OH.selectObject(this.__OG.getInspected());
},this);
this.__ON();
},members:{__OH:null,__OG:null,__OJ:null,__OK:null,__OI:null,__OL:null,__OM:false,getView:function(){return this.__OH;
},reload:function(){this.__OM=true;
this.__OS().reload();
this.__OR().reload();
this.__OM=false;
this.__OH.selectObject(this.__OG.getInspected());
},showByHash:function(){this.__OH.setByHashActive(true);
this.__OH.setByCountActive(false);
this.__OH.setTableModel(this.__OR());
this.__OH.setTableSelectionMode(qx.ui.table.selection.Model.SINGLE_SELECTION);
this.__OH.selectObject(this.__OG.getInspected());
},showByCount:function(){this.__OH.setByHashActive(false);
this.__OH.setByCountActive(true);
this.__OH.setTableModel(this.__OS());
this.__OH.setTableSelectionMode(qx.ui.table.selection.Model.NO_SELECTION);
this.__OH.selectObject(null);
},setFilter:function(i){this.__OM=true;
this.__OO();
this.__OL=this.__OI.start(function(){this.__OL=null;
this.__OS().filter(i);
this.__OR().filter(i);
this.__OM=false;
this.__OH.selectObject(this.__OG.getInspected());
},0,this,null,200);
},inspect:function(e){if(e==null){this.__OH.selectObject(this.__OG.getInspected());
return;
}var f=this.__OG.getObjectFromHashCode(e);

if(f!=null&&!this.__OM){this.__OG.setInspected(f);
}},__ON:function(){this.__OH.setFilter("");
this.showByHash();
},__OO:function(){if(this.__OL!=null){this.__OI.stop(this.__OL);
this.__OL=null;
}},__OP:function(event){var h=event.getData();
this.__OH.selectObject(h);
},__OQ:function(event){this.reload();
},__OR:function(){if(this.__OJ==null){this.__OJ=new inspector.objects.table.HashModel(this.__OG);
}return this.__OJ;
},__OS:function(){if(this.__OK==null){this.__OK=new inspector.objects.table.CountModel(this.__OG);
}return this.__OK;
}},destruct:function(){this.__OO();

if(this.__OJ!=null){this.__OJ.dispose();
}
if(this.__OK){this.__OK.dispose();
}this.__OH.destroy();
this.__OH=this.__OG=this.__OJ=this.__OL;
this.__OK=this.__OI=this.__OM=null;
}});
})();
(function(){var c="middle",b="objects-toolbar",a="inspector.components.AbstractView";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this.setLayout(new qx.ui.layout.VBox());
this._toolbar=new qx.ui.toolbar.ToolBar();
this._toolbar.setAppearance(b);
this._toolbar._getLayout().setAlignY(c);
this.add(this._toolbar);
},members:{_toolbar:null},destruct:function(){this._toolbar.dispose();
this._toolbar=null;
}});
})();
(function(){var k="__OU",j="20%",h="",g="__OV",f="__OW",e="count",d="inspector.objects.View",c="80%",b="hash",a="show";
qx.Class.define(d,{extend:inspector.components.AbstractView,construct:function(x){inspector.components.AbstractView.call(this);
{};
this.__OT=x;
this.__OY();
},members:{__OU:null,__OV:null,__OW:null,__OX:null,__OT:null,setByHashActive:function(l){{};
this.__OU.setValue(l);
},setByCountActive:function(u){{};
this.__OV.setValue(u);
},setTableModel:function(C){{};
this.__OW.setTableModel(C);
this.__Pa();
},setTableSelectionMode:function(q){{};
this.__OW.getSelectionModel().setSelectionMode(q);
},selectObject:function(r){var t=this.__OW.getSelectionModel();
t.resetSelection();

if(r!=null&&t.getSelectionMode()!=qx.ui.table.selection.Model.NO_SELECTION){var s=this.__OW.getTableModel().getData();

for(var i=0;i<s.length;i++){if(s[i][0]==r.toHashCode()){t.setSelectionInterval(i,i);
this.__OW.scrollCellVisible(0,i);
return;
}}}else{this.__OW.scrollCellVisible(0,0);
}},setFilter:function(p){this.__OX.setValue(p);
},__OY:function(){var toolbar=this._toolbar;
var A=new qx.ui.toolbar.Button(null,"icon/22/actions/view-refresh.png");
A.setToolTipText("Reloads the view.");
A.addListener("execute",this._onReaload,this);
toolbar.add(A);
toolbar.addSeparator();
this.__OU=new qx.ui.toolbar.RadioButton("by Hash");
this.__OU.setUserData("show","hash");
this.__OU.addListener("execute",this._onShowByChanged,this);
this.__OU.setToolTipText("Show the objects by there hash value.");
toolbar.add(this.__OU);
this.__OV=new qx.ui.toolbar.RadioButton("by Count");
this.__OV.setUserData("show","count");
this.__OV.addListener("execute",this._onShowByChanged,this);
this.__OV.setToolTipText("Show the objects by there count.");
toolbar.add(this.__OV);
toolbar.addSpacer();
this.__OX=new qx.ui.form.TextField().set({appearance:"objects-textfield",liveUpdate:true,placeholder:"Filter...",toolTipText:"Enter a case sensitive value to filter the table."});
this.__OX.addListener("changeValue",this._onFilterChanged,this);
toolbar.add(this.__OX);
var B={tableColumnModel:function(z){return new qx.ui.table.columnmodel.Resize(z);
}};
this.__OW=new qx.ui.table.Table(null,B).set({appearance:"objects-table",columnVisibilityButtonVisible:false,toolTipText:"Select a item to inspect it or sort the table."});
this.__OW.getSelectionModel().addListener("changeSelection",this._onModelChangeSelection,this);
this.__OW.getDataRowRenderer().setHighlightFocusRow(false);
this.add(this.__OW,{flex:1});
},_onReaload:function(event){this.__OT.reload();
},_onShowByChanged:function(event){var v=event.getTarget();
var w=v?v.getUserData(a):h;

switch(w){case b:this.__OT.showByHash();
break;
case e:this.__OT.showByCount();
break;
default:this.error("Method: '"+w+"' doesn't exist.");
break;
}},_onFilterChanged:function(event){this.__OT.setFilter(event.getData());
},_onModelChangeSelection:function(event){var o=this.__OW.getSelectionModel();

if(o.isSelectionEmpty()){this.__OT.inspect(null);
return;
}var m=o.getSelectedRanges()[0].minIndex;
var n=this.__OW.getTableModel().getData()[m];
this.__OT.inspect(n[0]);
},__Pa:function(){var y=this.__OW.getTableColumnModel().getBehavior();
y.setWidth(0,j);
y.setMinWidth(0,50);
y.setMaxWidth(0,100);
y.setWidth(1,c);
y.setMinWidth(1,300);
}},destruct:function(){this.__OT=null;
this._disposeObjects(k,g,f);
}});
})();
(function(){var H="]",G="..",F="changeSelection",E="_applySelectionMode",D='ie',C="qx.event.type.Event",B="Ranges:",A="qx.ui.table.selection.Model",z=" [";
qx.Class.define(A,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__va=[];
this.__vb=-1;
this.__vc=-1;
this.hasBatchModeRefCount=0;
this.__vd=false;
},events:{"changeSelection":C},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:E}},members:{__vd:null,__vb:null,__vc:null,__va:null,_applySelectionMode:function(x){this.resetSelection();
},setBatchMode:function(J){if(J){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__vd){this.__vd=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__vb;
},_setAnchorSelectionIndex:function(a){this.__vb=a;
},getLeadSelectionIndex:function(){return this.__vc;
},_setLeadSelectionIndex:function(y){this.__vc=y;
},_getSelectedRangeArr:function(){return this.__va;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__va.length==0;
},getSelectedCount:function(){var n=0;

for(var i=0;i<this.__va.length;i++){var m=this.__va[i];
n+=m.maxIndex-m.minIndex+1;
}return n;
},isSelectedIndex:function(v){for(var i=0;i<this.__va.length;i++){var w=this.__va[i];

if(v>=w.minIndex&&v<=w.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var I=[];

for(var i=0;i<this.__va.length;i++){I.push({minIndex:this.__va[i].minIndex,maxIndex:this.__va[i].maxIndex});
}return I;
},iterateSelection:function(q,r){for(var i=0;i<this.__va.length;i++){for(var j=this.__va[i].minIndex;j<=this.__va[i].maxIndex;j++){q.call(r,j);
}}},setSelectionInterval:function(R,S){var T=this.self(arguments);

switch(this.getSelectionMode()){case T.NO_SELECTION:return;
case T.SINGLE_SELECTION:if(this.isSelectedIndex(S)){return;
}R=S;
break;
case T.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=R;i<=S;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){if(qx.bom.client.Browser.NAME==D&&qx.bom.client.Browser.VERSION<=7){this.setBatchMode(false);
}throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(R,S);
this._fireChangeSelection();
},addSelectionInterval:function(s,t){var u=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case u.NO_SELECTION:return;
case u.MULTIPLE_INTERVAL_SELECTION:case u.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(s,t);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(s,t);
break;
}},removeSelectionInterval:function(b,c){this.__vb=b;
this.__vc=c;
var d=Math.min(b,c);
var g=Math.max(b,c);
for(var i=0;i<this.__va.length;i++){var k=this.__va[i];

if(k.minIndex>g){break;
}else if(k.maxIndex>=d){var l=(k.minIndex>=d)&&(k.minIndex<=g);
var h=(k.maxIndex>=d)&&(k.maxIndex<=g);

if(l&&h){this.__va.splice(i,1);
i--;
}else if(l){k.minIndex=g+1;
}else if(h){k.maxIndex=d-1;
}else{var f={minIndex:g+1,maxIndex:k.maxIndex};
this.__va.splice(i+1,0,f);
k.maxIndex=d-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__va=[];
this.__vb=-1;
this.__vc=-1;
},_addSelectionInterval:function(K,L){this.__vb=K;
this.__vc=L;
var M=Math.min(K,L);
var O=Math.max(K,L);
var N=0;

for(;N<this.__va.length;N++){var P=this.__va[N];

if(P.minIndex>M){break;
}}this.__va.splice(N,0,{minIndex:M,maxIndex:O});
var Q=this.__va[0];

for(var i=1;i<this.__va.length;i++){var P=this.__va[i];

if(Q.maxIndex+1>=P.minIndex){Q.maxIndex=Math.max(Q.maxIndex,P.maxIndex);
this.__va.splice(i,1);
i--;
}else{Q=P;
}}},_dumpRanges:function(){var o=B;

for(var i=0;i<this.__va.length;i++){var p=this.__va[i];
o+=z+p.minIndex+G+p.maxIndex+H;
}this.debug(o);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__vd=true;
}else{this.fireEvent(F);
}}},destruct:function(){this.__va=null;
}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){qx.ui.form.Button.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var s="pressed",r="abandoned",q="hovered",p="checked",o="Space",n="Enter",m="mouseup",l="mousedown",k="Boolean",j="_applyValue",c="mouseover",i="mouseout",g="qx.ui.form.ToggleButton",b="keydown",a="changeValue",f="button",d="keyup",h="execute";
qx.Class.define(g,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(t,u){qx.ui.basic.Atom.call(this,t,u);
this.addListener(c,this._onMouseOver);
this.addListener(i,this._onMouseOut);
this.addListener(l,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(b,this._onKeyDown);
this.addListener(d,this._onKeyUp);
this.addListener(h,this._onExecute,this);
},properties:{appearance:{refine:true,init:f},focusable:{refine:true,init:true},value:{check:k,nullable:true,event:a,apply:j,init:false}},members:{_applyValue:function(v,w){v?this.addState(p):this.removeState(p);
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(q);

if(this.hasState(r)){this.removeState(r);
this.addState(s);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(q);

if(this.hasState(s)){if(!this.getValue()){this.removeState(s);
}this.addState(r);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(r);
this.addState(s);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(r)){this.removeState(r);
}else if(this.hasState(s)){this.execute();
}this.removeState(s);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case n:case o:this.removeState(r);
this.addState(s);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(s)){return;
}
switch(e.getKeyIdentifier()){case n:case o:this.removeState(r);
this.execute();
this.removeState(s);
e.stopPropagation();
}}}});
})();
(function(){var e="inherit",d="toolbar-button",c="qx.ui.toolbar.CheckBox",b="keydown",a="keyup";
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(f,g){qx.ui.form.ToggleButton.call(this,f,g);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(d){},getValue:function(){},setGroup:function(c){this.assertInstance(c,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var c="qx.ui.form.RadioGroup",b="_applyGroup",a="qx.ui.toolbar.RadioButton";
qx.Class.define(a,{extend:qx.ui.toolbar.CheckBox,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel,qx.ui.form.IRadioItem],properties:{group:{check:c,apply:b,nullable:true}},members:{_applyValue:function(d,f){qx.ui.toolbar.CheckBox.prototype._applyValue.call(this,d,f);

if(d){var g=this.getGroup();

if(g){g.setSelection([this]);
}}},_applyGroup:function(i,j){if(j){j.remove(this);
}
if(i){i.add(this);
}},_onExecute:function(e){var h=this.getGroup();

if(h&&h.getAllowEmptySelection()||!h){this.toggleValue();
}else{this.setValue(true);
}}}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(e){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(c){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(d){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var g="qx.ui.core.MSingleSelectionHandling",f="changeSelection",d="changeSelected",c="__lS",b="qx.event.type.Data";
qx.Mixin.define(g,{events:{"changeSelection":b},members:{__lS:null,getSelection:function(){var a=this.__lT().getSelected();

if(a){return [a];
}else{return [];
}},setSelection:function(j){switch(j.length){case 0:this.resetSelection();
break;
case 1:this.__lT().setSelected(j[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+j.length+" items!");
}},resetSelection:function(){this.__lT().resetSelected();
},isSelected:function(l){return this.__lT().isSelected(l);
},isSelectionEmpty:function(){return this.__lT().isSelectionEmpty();
},getSelectables:function(h){return this.__lT().getSelectables(h);
},_onChangeSelected:function(e){var n=e.getData();
var m=e.getOldData();
n==null?n=[]:n=[n];
m==null?m=[]:m=[m];
this.fireDataEvent(f,n,m);
},__lT:function(){if(this.__lS==null){var i=this;
this.__lS=new qx.ui.core.SingleSelectionManager({getItems:function(){return i._getItems();
},isItemSelectable:function(k){if(i._isItemSelectable){return i._isItemSelectable(k);
}else{return k.isVisible();
}}});
this.__lS.addListener(d,this._onChangeSelected,this);
}this.__lS.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__lS;
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="change",d="__lJ",c="qx.event.type.Data",b="qx.ui.form.MModelSelection",a="changeSelection";
qx.Mixin.define(b,{construct:function(){this.__lJ=new qx.data.Array();
this.__lJ.addListener(e,this.__lM,this);
this.addListener(a,this.__lL,this);
},events:{changeModelSelection:c},members:{__lJ:null,__lK:false,__lL:function(){if(this.__lK){return;
}var q=this.getSelection();
var o=[];

for(var i=0;i<q.length;i++){var r=q[i];
var p=r.getModel?r.getModel():null;

if(p!==null){o.push(p);
}}if(o.length===q.length){this.setModelSelection(o);
}},__lM:function(){this.__lK=true;
var g=this.getSelectables(true);
var k=[];
var h=this.__lJ.toArray();

for(var i=0;i<h.length;i++){var m=h[i];

for(var j=0;j<g.length;j++){var n=g[j];
var f=n.getModel?n.getModel():null;

if(m===f){k.push(n);
break;
}}}this.setSelection(k);
this.__lK=false;
var l=this.getSelection();

if(!qx.lang.Array.equals(l,k)){this.__lL();
}},getModelSelection:function(){return this.__lJ;
},setModelSelection:function(s){if(!s){this.__lJ.removeAll();
return;
}{};
s.unshift(this.__lJ.getLength());
s.unshift(0);
var t=this.__lJ.splice.apply(this.__lJ,s);
t.dispose();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="__a",b="changeSelection",a="_applyEnabled";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(L){qx.core.Object.call(this);
this.__a=[];
this.addListener(b,this.__b,this);

if(L!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:a,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__a:null,getItems:function(){return this.__a;
},add:function(F){var G=this.__a;
var H;

for(var i=0,l=arguments.length;i<l;i++){H=arguments[i];

if(qx.lang.Array.contains(G,H)){continue;
}H.addListener(p,this._onItemChangeChecked,this);
G.push(H);
H.setGroup(this);
if(H.getValue()){this.setSelection([H]);
}}if(!this.isAllowEmptySelection()&&G.length>0&&!this.getSelection()[0]){this.setSelection([G[0]]);
}},remove:function(J){var K=this.__a;

if(qx.lang.Array.contains(K,J)){qx.lang.Array.remove(K,J);
if(J.getGroup()===this){J.resetGroup();
}J.removeListener(p,this._onItemChangeChecked,this);
if(J.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var I=e.getTarget();

if(I.getValue()){this.setSelection([I]);
}else if(this.getSelection()[0]==I){this.resetSelection();
}},_applyInvalidMessage:function(O,P){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(O);
}},_applyValid:function(s,t){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(s);
}},_applyEnabled:function(C,D){var E=this.__a;

if(C==null){for(var i=0,l=E.length;i<l;i++){E[i].resetEnabled();
}}else{for(var i=0,l=E.length;i<l;i++){E[i].setEnabled(C);
}}},_applyAllowEmptySelection:function(u,v){if(!u&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var w=this.getSelection()[0];
var y=this.__a;
var x=y.indexOf(w);

if(x==-1){return;
}var i=0;
var length=y.length;
if(this.getWrap()){x=(x+1)%length;
}else{x=Math.min(x+1,length-1);
}
while(i<length&&!y[x].getEnabled()){x=(x+1)%length;
i++;
}this.setSelection([y[x]]);
},selectPrevious:function(){var z=this.getSelection()[0];
var B=this.__a;
var A=B.indexOf(z);

if(A==-1){return;
}var i=0;
var length=B.length;
if(this.getWrap()){A=(A-1+length)%length;
}else{A=Math.max(A-1,0);
}
while(i<length&&!B[A].getEnabled()){A=(A-1+length)%length;
i++;
}this.setSelection([B[A]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__b:function(e){var N=e.getData()[0];
var M=e.getOldData()[0];

if(M){M.setValue(false);
}
if(N){N.setValue(true);
}}},destruct:function(){this._disposeArray(d);
}});
})();
(function(){var g="__lP",f="Boolean",e="qx.ui.core.SingleSelectionManager",d="__lO",c="changeSelected",b="__lN",a="qx.event.type.Data";
qx.Class.define(e,{extend:qx.core.Object,construct:function(r){qx.core.Object.call(this);
{};
this.__lN=r;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:f,init:true,apply:g}},members:{__lO:null,__lN:null,getSelected:function(){return this.__lO;
},setSelected:function(o){if(!this.__lR(o)){throw new Error("Could not select "+o+", because it is not a child element!");
}this.__lQ(o);
},resetSelected:function(){this.__lQ(null);
},isSelected:function(v){if(!this.__lR(v)){throw new Error("Could not check if "+v+" is selected,"+" because it is not a child element!");
}return this.__lO===v;
},isSelectionEmpty:function(){return this.__lO==null;
},getSelectables:function(s){var t=this.__lN.getItems();
var u=[];

for(var i=0;i<t.length;i++){if(this.__lN.isItemSelectable(t[i])){u.push(t[i]);
}}if(!s){for(var i=u.length-1;i>=0;i--){if(!u[i].getEnabled()){u.splice(i,1);
}}}return u;
},__lP:function(h,j){if(!h){this.__lQ(this.__lO);
}},__lQ:function(k){var n=this.__lO;
var m=k;

if(m!=null&&n===m){return;
}
if(!this.isAllowEmptySelection()&&m==null){var l=this.getSelectables(true)[0];

if(l){m=l;
}}this.__lO=m;
this.fireDataEvent(c,m,n);
},__lR:function(p){var q=this.__lN.getItems();

for(var i=0;i<q.length;i++){if(q[i]===p){return true;
}}return false;
}},destruct:function(){if(this.__lN.toHashCode){this._disposeObjects(b);
}else{this.__lN=null;
}this._disposeObjects(d);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(u,v,name){this.fireDataEvent(c,{value:u,name:name,old:v});
this._registerEventChaining(u,v,name);
},_registerEventChaining:function(i,j,name){if((i instanceof qx.core.Object)&&qx.Class.hasMixin(i.constructor,qx.data.marshal.MEventBubbling)){var k=qx.lang.Function.bind(this.__lU,this,name);
var l=i.addListener(c,k,this);
i.setUserData(d,l);
}if(j!=null&&j.getUserData&&j.getUserData(d)!=null){j.removeListenerById(j.getUserData(d));
}},__lU:function(name,e){var t=e.getData();
var p=t.value;
var n=t.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(t.name.indexOf){var s=t.name.indexOf(f)!=-1?t.name.indexOf(f):t.name.length;
var q=t.name.indexOf(h)!=-1?t.name.indexOf(h):t.name.length;

if(s<q){var m=t.name.substring(0,s);
var r=t.name.substring(s+1,t.name.length);

if(r[0]!=h){r=f+r;
}var o=name+h+m+g+r;
}else if(q<s){var m=t.name.substring(0,q);
var r=t.name.substring(q,t.name.length);
var o=name+h+m+g+r;
}else{var o=name+h+t.name+g;
}}else{var o=name+h+t.name+g;
}}else{var o=name+f+t.name;
}this.fireDataEvent(c,{value:p,name:o,old:n});
}}});
})();
(function(){var X="change",W="add",V="remove",U="order",T="qx.event.type.Data",S="",R="qx.data.Array",Q="?",P="changeBubble",O="number",N="changeLength";
qx.Class.define(R,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(h){qx.core.Object.call(this);
if(h==undefined){this.__lG=[];
}else if(arguments.length>1){this.__lG=[];

for(var i=0;i<arguments.length;i++){this.__lG.push(arguments[i]);
}}else if(typeof h==O){this.__lG=new Array(h);
}else if(h instanceof Array){this.__lG=qx.lang.Array.clone(h);
}else{this.__lG=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__lG.length;i++){this._applyEventPropagation(this.__lG[i],null,i);
}this.__lH();
},events:{"change":T,"changeLength":T},members:{__lG:null,concat:function(e){if(e){var f=this.__lG.concat(e);
}else{var f=this.__lG.concat();
}return new qx.data.Array(f);
},join:function(bd){return this.__lG.join(bd);
},pop:function(){var c=this.__lG.pop();
this.__lH();
this._applyEventPropagation(null,c,this.length-1);
this.fireDataEvent(X,{start:this.length-1,end:this.length-1,type:V,items:[c]},null);
return c;
},push:function(s){for(var i=0;i<arguments.length;i++){this.__lG.push(arguments[i]);
this.__lH();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(X,{start:this.length-1,end:this.length-1,type:W,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__lG.reverse();
this.fireDataEvent(X,{start:0,end:this.length-1,type:U,items:null},null);
},shift:function(){var j=this.__lG.shift();
this.__lH();
this._applyEventPropagation(null,j,this.length-1);
this.fireDataEvent(X,{start:0,end:this.length-1,type:V,items:[j]},null);
return j;
},slice:function(o,p){return new qx.data.Array(this.__lG.slice(o,p));
},splice:function(E,F,G){var M=this.__lG.length;
var J=this.__lG.splice.apply(this.__lG,arguments);
if(this.__lG.length!=M){this.__lH();
}var K=F>0;
var H=arguments.length>2;
var I=null;

if(K||H){if(this.__lG.length>M){var L=W;
}else if(this.__lG.length<M){var L=V;
I=J;
}else{var L=U;
}this.fireDataEvent(X,{start:E,end:this.length-1,type:L,items:I},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,E+i);
}this.fireDataEvent(P,{value:this,name:Q,old:J});
for(var i=0;i<J.length;i++){this._applyEventPropagation(null,J[i],i);
}return (new qx.data.Array(J));
},sort:function(bf){this.__lG.sort.apply(this.__lG,arguments);
this.fireDataEvent(X,{start:0,end:this.length-1,type:U,items:null},null);
},unshift:function(Y){for(var i=arguments.length-1;i>=0;i--){this.__lG.unshift(arguments[i]);
this.__lH();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(X,{start:0,end:this.length-1,type:W,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__lG;
},getItem:function(n){return this.__lG[n];
},setItem:function(bg,bh){var bi=this.__lG[bg];
if(bi===bh){return;
}this.__lG[bg]=bh;
this._applyEventPropagation(bh,bi,bg);
if(this.length!=this.__lG.length){this.__lH();
}this.fireDataEvent(X,{start:bg,end:bg,type:W,items:[bh]},null);
},getLength:function(){return this.length;
},indexOf:function(g){return this.__lG.indexOf(g);
},toString:function(){if(this.__lG!=null){return this.__lG.toString();
}return S;
},contains:function(D){return this.__lG.indexOf(D)!==-1;
},copy:function(){return this.concat();
},insertAt:function(B,C){this.splice(B,0,C);
},insertBefore:function(v,w){var x=this.indexOf(v);

if(x==-1){this.push(w);
}else{this.splice(x,0,w);
}},insertAfter:function(ba,bb){var bc=this.indexOf(ba);

if(bc==-1||bc==(this.length-1)){this.push(bb);
}else{this.splice(bc+1,0,bb);
}},removeAt:function(l){return this.splice(l,1).getItem(0);
},removeAll:function(){for(var i=0;i<this.__lG.length;i++){this._applyEventPropagation(null,this.__lG[i],i);
}var u=this.getLength();
var t=this.__lG.concat();
this.__lG.length=0;
this.__lH();
this.fireDataEvent(X,{start:0,end:u-1,type:V,items:t},null);
},append:function(a){if(a instanceof qx.data.Array){a=a.toArray();
}{};
for(var i=0;i<a.length;i++){this._applyEventPropagation(a[i],null,this.__lG.length+i);
}Array.prototype.push.apply(this.__lG,a);
var b=this.length;
this.__lH();
this.fireDataEvent(X,{start:b,end:this.length-1,type:W,items:a},null);
},remove:function(y){var z=this.indexOf(y);

if(z!=-1){this.splice(z,1);
return y;
}},equals:function(m){if(this.length!==m.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==m.getItem(i)){return false;
}}return true;
},sum:function(){var A=0;

for(var i=0;i<this.length;i++){A+=this.getItem(i);
}return A;
},max:function(){var k=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>k){k=this.getItem(i);
}}return k===undefined?null:k;
},min:function(){var be=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<be){be=this.getItem(i);
}}return be===undefined?null:be;
},forEach:function(q,r){for(var i=0;i<this.__lG.length;i++){q.call(r,this.__lG[i]);
}},__lH:function(){var d=this.length;
this.length=this.__lG.length;
this.fireDataEvent(N,this.length,d);
}},destruct:function(){for(var i=0;i<this.__lG.length;i++){this._applyEventPropagation(null,this.__lG[i],i);
}this.__lG=null;
}});
})();
(function(){var o="qx.dynlocale",n="Boolean",m="changeLocale",l="changeInvalidMessage",k="on",j="String",i="invalid",h="",g="qx.ui.form.MForm",f="_applyValid",c="changeRequired",d="changeValid";
qx.Mixin.define(g,{construct:function(){if(qx.core.Variant.isSet(o,k)){qx.locale.Manager.getInstance().addListener(m,this.__fd,this);
}},properties:{valid:{check:n,init:true,apply:f,event:d},required:{check:n,init:false,event:c},invalidMessage:{check:j,init:h,event:l},requiredInvalidMessage:{check:j,nullable:true,event:l}},members:{_applyValid:function(p,q){p?this.removeState(i):this.addState(i);
},__fd:qx.core.Variant.select(o,{"on":function(e){var a=this.getInvalidMessage();

if(a&&a.translate){this.setInvalidMessage(a.translate());
}var b=this.getRequiredInvalidMessage();

if(b&&b.translate){this.setRequiredInvalidMessage(b.translate());
}},"off":null})},destruct:function(){if(qx.core.Variant.isSet(o,k)){qx.locale.Manager.getInstance().removeListener(m,this.__fd,this);
}}});
})();
(function(){var Y="showingPlaceholder",X="",W="none",V="qx.dynlocale",U="Boolean",T="qx.client",S="color",R="qx.event.type.Data",Q="readonly",P="input",bL="focusin",bK="visibility",bJ="focusout",bI="changeLocale",bH="on",bG="readOnly",bF="text",bE="_applyTextAlign",bD="px",bC="RegExp",bg=")",bh="syncAppearance",be="change",bf="textAlign",bc="focused",bd="center",ba="visible",bb="disabled",bi="url(",bj="off",bq="String",bo="resize",bu="qx.ui.form.AbstractField",bs="transparent",by="spellcheck",bw="false",bl="right",bB="PositiveInteger",bA="mshtml",bz="abstract",bk="block",bm="webkit",bn="_applyReadOnly",bp="_applyPlaceholder",br="hidden",bt="left",bv="qx/static/blank.gif",bx="absolute";
qx.Class.define(bu,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:bz,construct:function(E){qx.ui.core.Widget.call(this);

if(E!=null){this.setValue(E);
}this.getContentElement().addListener(be,this._onChangeContent,this);
this.addListener(bh,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(V,bH)){qx.locale.Manager.getInstance().addListener(bI,this._onChangeLocale,this);
}},events:{"input":R,"changeValue":R},properties:{textAlign:{check:[bt,bd,bl],nullable:true,themeable:true,apply:bE},readOnly:{check:U,apply:bn,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:bB,init:Infinity},liveUpdate:{check:U,init:false},placeholder:{check:bq,nullable:true,apply:bp},filter:{check:bC,nullable:true,init:null}},members:{__J:true,__K:null,__L:null,__M:null,getFocusElement:function(){var bM=this.getContentElement();

if(bM){return bM;
}},_createInputElement:function(){return new qx.html.Input(bF);
},renderLayout:function(t,top,u,v){var w=this._updateInsets;
var A=qx.ui.core.Widget.prototype.renderLayout.call(this,t,top,u,v);
if(!A){return;
}var y=A.size||w;
var B=bD;

if(y||A.local||A.margin){var x=this.getInsets();
var innerWidth=u-x.left-x.right;
var innerHeight=v-x.top-x.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var z=this.getContentElement();

if(w){this.__P().setStyles({"left":x.left+B,"top":x.top+B});
}
if(y){this.__P().setStyles({"width":innerWidth+B,"height":innerHeight+B});
z.setStyles({"width":innerWidth+B,"height":innerHeight+B});
this._renderContentElement(innerHeight,z);
}},_renderContentElement:function(innerHeight,F){},_createContentElement:function(){var M=this._createInputElement();
M.setStyles({"border":W,"padding":0,"margin":0,"display":bk,"background":bs,"outline":W,"appearance":W,"position":bx,"autoComplete":bj});
M.setSelectable(this.getSelectable());
M.setEnabled(this.getEnabled());
M.addListener(P,this._onHtmlInput,this);
M.setAttribute(by,bw);
if(qx.core.Variant.isSet(T,bm)){M.setStyle(bo,W);
}if(qx.core.Variant.isSet(T,bA)){M.setStyles({backgroundImage:bi+qx.util.ResourceManager.getInstance().toUri(bv)+bg});
}return M;
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this.getContentElement().setEnabled(G);

if(G){this._showPlaceholder();
}else{this._removePlaceholder();
}},__N:{width:16,height:16},_getContentHint:function(){return {width:this.__N.width*10,height:this.__N.height||16};
},_applyFont:function(I,J){var K;

if(I){var L=qx.theme.manager.Font.getInstance().resolve(I);
K=L.getStyles();
}else{K=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(K);
this.__P().setStyles(K);
if(I){this.__N=qx.bom.Label.getTextSize("A",K);
}else{delete this.__N;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(c,d){if(c){this.getContentElement().setStyle(S,qx.theme.manager.Color.getInstance().resolve(c));
}else{this.getContentElement().removeStyle(S);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__N;
},_onHtmlInput:function(e){var i=e.getData();
var h=true;
this.__J=false;
if(this.getFilter()!=null){var j=X;
var f=i.search(this.getFilter());
var g=i;

while(f>=0){j=j+(g.charAt(f));
g=g.substring(f+1,g.length);
f=g.search(this.getFilter());
}
if(j!=i){h=false;
i=j;
this.getContentElement().setValue(i);
}}if(i.length>this.getMaxLength()){var h=false;
this.getContentElement().setValue(i.substr(0,this.getMaxLength()));
}if(h){this.fireDataEvent(P,i,this.__M);
this.__M=i;
if(this.getLiveUpdate()){this.__O(i);
}}},__O:function(bP){var bQ=this.__L;
this.__L=bP;

if(bQ!=bP){this.fireNonBubblingEvent("changeValue",qx.event.type.Data,[bP,bQ]);
}},setValue:function(p){if(p===null){if(this.__J){return p;
}p=X;
this.__J=true;
}else{this.__J=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(p)){var r=this.getContentElement();

if(p.length>this.getMaxLength()){p=p.substr(0,this.getMaxLength());
}
if(r.getValue()!=p){var s=r.getValue();
r.setValue(p);
var q=this.__J?null:p;
this.__L=s;
this.__O(q);
}this._showPlaceholder();
return p;
}throw new Error("Invalid value type: "+p);
},getValue:function(){var o=this.getContentElement().getValue();
return this.__J?null:o;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__J=e.getData()===null;
this.__O(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(a,b){this.getContentElement().setTextSelection(a,b);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var O=this.getValue()||X;
var N=this.getPlaceholder();

if(N!=null&&O==X&&!this.hasState(bc)&&!this.hasState(bb)){if(this.hasState(Y)){this._syncPlaceholder();
}else{this.addState(Y);
}}},_removePlaceholder:function(){if(this.hasState(Y)){this.__P().setStyle(bK,br);
this.removeState(Y);
}},_syncPlaceholder:function(){if(this.hasState(Y)){this.__P().setStyle(bK,ba);
}},__P:function(){if(this.__K==null){this.__K=new qx.html.Label();
var k=qx.theme.manager.Color.getInstance();
this.__K.setStyles({"visibility":"hidden","zIndex":6,"position":"absolute","color":k.resolve("text-placeholder")});
this.getContainerElement().add(this.__K);
}return this.__K;
},_onChangeLocale:qx.core.Variant.select(V,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bN,bO){this.__P().setValue(bN);

if(bN!=null){this.addListener(bL,this._removePlaceholder,this);
this.addListener(bJ,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bL,this._removePlaceholder,this);
this.removeListener(bJ,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(C,D){this.getContentElement().setStyle(bf,C);
},_applyReadOnly:function(l,m){var n=this.getContentElement();
n.setAttribute(bG,l);

if(l){this.addState(Q);
this.setFocusable(false);
}else{this.removeState(Q);
this.setFocusable(true);
}}},destruct:function(){this.__K=null;

if(qx.core.Variant.isSet(V,bH)){qx.locale.Manager.getInstance().removeListener(bI,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,c){}}});
})();
(function(){var r="none",q="wrap",p="value",o="qx.client",n="textarea",m="off",l="on",k="qxSelectable",j="",i="webkit",e="input",h="qx.html.Input",g="select",d="disabled",c="read-only",f="userSelect";
qx.Class.define(h,{extend:qx.html.Element,construct:function(A,B,C){if(A===g||A===n){var D=A;
}else{D=e;
}qx.html.Element.call(this,D,B,C);
this.__c=A;
},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,a){qx.html.Element.prototype._applyProperty.call(this,name,a);
var b=this.getDomElement();

if(name===p){qx.bom.Input.setValue(b,a);
}else if(name===q){qx.bom.Input.setWrap(b,a);
}},setEnabled:qx.core.Variant.select(o,{"webkit":function(y){this.__e=y;

if(!y){this.setStyles({"userModify":c,"userSelect":r});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:r});
}},"default":function(E){this.setAttribute(d,E===false);
}}),setSelectable:qx.core.Variant.select(o,{"webkit":function(v){this.__d=v;
this.setAttribute(k,v?l:m);
if(qx.core.Variant.isSet(o,i)){var w=this.__e?v?null:r:r;
this.setStyle(f,w);
}},"default":function(s){this.setAttribute(k,s?l:m);
}}),setValue:function(t){var u=this.getDomElement();

if(u){if(u.value!=t){qx.bom.Input.setValue(u,t);
}}else{this._setProperty(p,t);
}return this;
},getValue:function(){var x=this.getDomElement();

if(x){return qx.bom.Input.getValue(x);
}return this._getProperty(p)||j;
},setWrap:function(z){if(this.__c===n){this._setProperty(q,z);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===n){return this._getProperty(q);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var w="change",v="input",u="qx.client",t="text",s="password",r="checkbox",q="radio",p="textarea",n="keypress",m="opera",d="propertychange",k="blur",h="keydown",c="keyup",b="select-multiple",g="checked",f="value",j="select",a="qx.event.handler.Input";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(u,m)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__g:false,__h:null,__i:null,canHandleEvent:function(bd,be){var bf=bd.tagName.toLowerCase();

if(be===v&&(bf===v||bf===p)){return true;
}
if(be===w&&(bf===v||bf===p||bf===j)){return true;
}return false;
},registerEvent:qx.core.Variant.select(u,{"mshtml":function(A,B,C){if(!A.__j){var D=A.tagName.toLowerCase();
var E=A.type;

if(E===t||E===s||D===p||E===r||E===q){qx.bom.Event.addNativeListener(A,d,this._onPropertyWrapper);
}
if(E!==r&&E!==q){qx.bom.Event.addNativeListener(A,w,this._onChangeValueWrapper);
}
if(E===t||E===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,A);
qx.bom.Event.addNativeListener(A,n,this._onKeyPressWrapped);
}A.__j=true;
}},"default":function(W,X,Y){if(X===v){this.__k(W);
}else if(X===w){if(W.type===q||W.type===r){qx.bom.Event.addNativeListener(W,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(W,w,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(u,m)){if(W.type===t||W.type===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,W);
qx.bom.Event.addNativeListener(W,n,this._onKeyPressWrapped);
}}}}}),__k:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(bb){var bc=bb.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&bc==p){qx.bom.Event.addNativeListener(bb,n,this._onInputWrapper);
}qx.bom.Event.addNativeListener(bb,v,this._onInputWrapper);
},"opera":function(V){qx.bom.Event.addNativeListener(V,c,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(V,h,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(V,k,this._onBlurWrapper);
qx.bom.Event.addNativeListener(V,v,this._onInputWrapper);
},"default":function(K){qx.bom.Event.addNativeListener(K,v,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(u,{"mshtml":function(P,Q){if(P.__j){var R=P.tagName.toLowerCase();
var S=P.type;

if(S===t||S===s||R===p||S===r||S===q){qx.bom.Event.removeNativeListener(P,d,this._onPropertyWrapper);
}
if(S!==r&&S!==q){qx.bom.Event.removeNativeListener(P,w,this._onChangeValueWrapper);
}
if(S===t||S===s){qx.bom.Event.removeNativeListener(P,n,this._onKeyPressWrapped);
}
try{delete P.__j;
}catch(G){P.__j=null;
}}},"default":function(L,M){if(M===v){this.__k(L);
}else if(M===w){if(L.type===q||L.type===r){qx.bom.Event.removeNativeListener(L,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(L,w,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(u,m)){if(L.type===t||L.type===s){qx.bom.Event.removeNativeListener(L,n,this._onKeyPressWrapped);
}}}}),__l:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(I){var J=I.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&J==p){qx.bom.Event.removeNativeListener(I,n,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(I,v,this._onInputWrapper);
},"opera":function(ba){qx.bom.Event.removeNativeListener(ba,c,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(ba,h,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(ba,k,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(ba,v,this._onInputWrapper);
},"default":function(F){qx.bom.Event.removeNativeListener(F,v,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(u,{"mshtml|opera":function(e,N){if(e.keyCode===13){if(N.value!==this.__i){this.__i=N.value;
qx.event.Registration.fireEvent(N,w,qx.event.type.Data,[N.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__g=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__g=false;
}},"default":null}),_onBlur:qx.core.Variant.select(u,{"opera":function(e){if(this.__h){window.clearTimeout(this.__h);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var H=e.target;
if(!this.__g){if(qx.core.Variant.isSet(u,m)){this.__h=window.setTimeout(function(){qx.event.Registration.fireEvent(H,v,qx.event.type.Data,[H.value]);
},0);
}else{qx.event.Registration.fireEvent(H,v,qx.event.type.Data,[H.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var U=e.target||e.srcElement;
var T=U.value;

if(U.type===b){var T=[];

for(var i=0,o=U.options,l=o.length;i<l;i++){if(o[i].selected){T.push(o[i].value);
}}}qx.event.Registration.fireEvent(U,w,qx.event.type.Data,[T]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var O=e.target;

if(O.type===q){if(O.checked){qx.event.Registration.fireEvent(O,w,qx.event.type.Data,[O.value]);
}}else{qx.event.Registration.fireEvent(O,w,qx.event.type.Data,[O.checked]);
}}),_onProperty:qx.core.Variant.select(u,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var x=e.target||e.srcElement;
var y=e.propertyName;

if(y===f&&(x.type===t||x.type===s||x.tagName.toLowerCase()===p)){if(!x.$$inValueSet){qx.event.Registration.fireEvent(x,v,qx.event.type.Data,[x.value]);
}}else if(y===g){if(x.type===r){qx.event.Registration.fireEvent(x,w,qx.event.type.Data,[x.checked]);
}else if(x.checked){qx.event.Registration.fireEvent(x,w,qx.event.type.Data,[x.value]);
}}}),"default":function(){}})},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var z="",y="select",x="soft",w="off",v="qx.client",u="textarea",t="wrap",s="text",r="mshtml",q="number",h="checkbox",p="select-one",m="input",g="option",f="value",k="radio",j="qx.bom.Input",n="nowrap",e="auto",o="normal";
qx.Class.define(j,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(J,K,L){{};
var K=K?qx.lang.Object.clone(K):{};
var M;

if(J===u||J===y){M=J;
}else{M=m;
K.type=J;
}return qx.bom.Element.create(M,K,L);
},setValue:function(A,B){var G=A.nodeName.toLowerCase();
var D=A.type;
var Array=qx.lang.Array;
var H=qx.lang.Type;

if(typeof B===q){B+=z;
}
if((D===h||D===k)){if(H.isArray(B)){A.checked=Array.contains(B,A.value);
}else{A.checked=A.value==B;
}}else if(G===y){var C=H.isArray(B);
var I=A.options;
var E,F;

for(var i=0,l=I.length;i<l;i++){E=I[i];
F=E.getAttribute(f);

if(F==null){F=E.text;
}E.selected=C?Array.contains(B,F):B==F;
}
if(C&&B.length==0){A.selectedIndex=-1;
}}else if((D===s||D===u)&&qx.core.Variant.isSet(v,r)){A.$$inValueSet=true;
A.value=B;
A.$$inValueSet=null;
}else{A.value=B;
}},getValue:function(R){var X=R.nodeName.toLowerCase();

if(X===g){return (R.attributes.value||{}).specified?R.value:R.text;
}
if(X===y){var S=R.selectedIndex;
if(S<0){return null;
}var Y=[];
var bb=R.options;
var ba=R.type==p;
var W=qx.bom.Input;
var V;
for(var i=ba?S:0,U=ba?S+1:bb.length;i<U;i++){var T=bb[i];

if(T.selected){V=W.getValue(T);
if(ba){return V;
}Y.push(V);
}}return Y;
}else{return (R.value||z).replace(/\r/g,z);
}},setWrap:qx.core.Variant.select(v,{"mshtml":function(P,Q){P.wrap=Q?x:w;
},"gecko|webkit":function(a,b){var d=b?x:w;
var c=b?z:e;
a.setAttribute(t,d);
a.style.overflow=c;
},"default":function(N,O){N.style.whiteSpace=O?o:n;
}})}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(b){return true;
},updateHeaderCell:function(c,d){return true;
}}});
})();
(function(){var b="qx.ui.table.headerrenderer.Default",a="String";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:a,init:null,nullable:true}},members:{createHeaderCell:function(c){var d=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(c,d);
return d;
},updateHeaderCell:function(e,f){var g=qx.ui.table.headerrenderer.Default;
if(e.name&&e.name.translate){f.setLabel(e.name.translate());
}else{f.setLabel(e.name);
}var h=f.getToolTip();

if(this.getToolTip()!=null){if(h==null){h=new qx.ui.tooltip.ToolTip(this.getToolTip());
f.setToolTip(h);
qx.util.DisposeUtil.disposeTriggeredBy(h,f);
}else{h.setLabel(this.getToolTip());
}}e.sorted?f.addState(g.STATE_SORTED):f.removeState(g.STATE_SORTED);
e.sortedAscending?f.addState(g.STATE_SORTED_ASCENDING):f.removeState(g.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var k="",j="px;",i=".qooxdoo-table-cell {",h="qooxdoo-table-cell",g='" ',f="nowrap",e="default",d="qx.client",c="}",b="width:",I=".qooxdoo-table-cell-right { text-align:right } ",H="0px 6px",G='<div class="',F="0px",E="height:",D="1px solid ",C=".qooxdoo-table-cell-bold { font-weight:bold } ",B="table-row-line",A="String",z='>',r="mshtml",s='</div>',p="ellipsis",q="content-box",n='left:',o="qx.ui.table.cellrenderer.Abstract",l='" style="',m="abstract",t="none",u="hidden",w="} ",v='px;',y=".qooxdoo-table-cell-italic { font-style:italic} ",x="absolute";
qx.Class.define(o,{type:m,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var J=qx.ui.table.cellrenderer.Abstract;

if(!J.__vl){var L=qx.theme.manager.Color.getInstance();
J.__vl=this.self(arguments);
var K=i+
qx.bom.element.Style.compile({position:x,top:F,overflow:u,whiteSpace:f,borderRight:D+L.resolve(B),padding:H,cursor:e,textOverflow:p,userSelect:t})+w+I+y+C;

if(!qx.core.Variant.isSet(d,r)){K+=i+qx.bom.element.BoxSizing.compile(q)+c;
}J.__vl.stylesheet=qx.bom.Stylesheet.createElement(K);
}},properties:{defaultCellStyle:{init:null,check:A,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(O){return h;
},_getCellStyle:function(Q){return Q.style||k;
},_getCellAttributes:function(P){return k;
},_getContentHtml:function(a){return a.value||k;
},_getCellSizeStyle:function(R,S,T,U){var V=k;

if(qx.bom.client.Feature.CONTENT_BOX){R-=T;
S-=U;
}V+=b+Math.max(R,0)+j;
V+=E+Math.max(S,0)+j;
return V;
},createDataCellHtml:function(M,N){N.push(G,this._getCellClass(M),l,n,M.styleLeft,v,this._getCellSizeStyle(M.styleWidth,M.styleHeight,this._insetX,this._insetY),this._getCellStyle(M),g,this._getCellAttributes(M),z+this._getContentHtml(M),s);
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4,_numberFormat:null},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(l){if(this.getUseAutoAlign()){if(typeof l.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}return 0;
},_getCellClass:function(n){var o=qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this,n);

if(!o){return h;
}var p=this._getStyleFlags(n);

if(p&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){o+=c;
}
if(p&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){o+=d;
}
if(p&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){o+=b;
}return o;
},_getContentHtml:function(m){return qx.bom.String.escape(this._formatValue(m));
},_formatValue:function(i){var k=i.value;
var j;

if(k==null){return h;
}
if(typeof k==a){return k;
}else if(typeof k==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var j=qx.ui.table.cellrenderer.Default._numberFormat.format(k);
}else if(k instanceof Date){j=qx.util.format.DateFormat.getDateInstance().format(k);
}else{j=k;
}return j;
}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var f="",e="Function",d="abstract",c="number",b="appear",a="qx.ui.table.celleditor.AbstractField";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:d,properties:{validationFunction:{check:e,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(g){var h=this._createEditor();
h.originalValue=g.value;

if(g.value===null||g.value===undefined){g.value=f;
}h.setValue(f+g.value);
h.addListener(b,function(){h.selectAllText();
});
return h;
},getCellEditorValue:function(i){var k=i.getValue();
var j=this.getValidationFunction();

if(j){k=j(k,i.originalValue);
}
if(typeof i.originalValue==c){k=parseFloat(k);
}return k;
}}});
})();
(function(){var c="number",b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{getCellEditorValue:function(d){var f=d.getValue();
var e=this.getValidationFunction();

if(e){f=e(f,d.originalValue);
}
if(typeof d.originalValue==c){if(f!=null){f=parseFloat(f);
}}return f;
},_createEditor:function(){var g=new qx.ui.form.TextField();
g.setAppearance(a);
return g;
}}});
})();
(function(){var bb="qx.event.type.Data",ba="visibilityChanged",Y="orderChanged",X="visibilityChangedPre",W="__vr",V="widthChanged",U="qx.ui.table.columnmodel.Basic",T="__vs",S="headerCellRendererChanged",R="__vt";
qx.Class.define(U,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__vm=[];
this.__vn=[];
},events:{"widthChanged":bb,"visibilityChangedPre":bb,"visibilityChanged":bb,"orderChanged":bb,"headerCellRendererChanged":bb},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__vo:null,__vp:null,__vn:null,__vm:null,__vq:null,__vr:null,__vs:null,__vt:null,init:function(e){{};
this.__vq=[];
var h=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var j=this.__vr||(this.__vr=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var g=this.__vs||(this.__vs=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var f=this.__vt||(this.__vt=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__vm=[];
this.__vn=[];

for(var l=0;l<e;l++){this.__vq[l]={width:h,headerRenderer:j,dataRenderer:g,editorFactory:f};
this.__vm[l]=l;
this.__vn[l]=l;
}this.__vp=null;

for(var l=0;l<e;l++){var k={col:l,visible:true};
this.fireDataEvent(X,k);
this.fireDataEvent(ba,k);
}},getVisibleColumns:function(){return this.__vn!=null?this.__vn:[];
},setColumnWidth:function(bd,be){{};
var bg=this.__vq[bd].width;

if(bg!=be){this.__vq[bd].width=be;
var bf={col:bd,newWidth:be,oldWidth:bg};
this.fireDataEvent(V,bf);
}},getColumnWidth:function(a){{};
return this.__vq[a].width;
},setHeaderCellRenderer:function(b,c){{};
var d=this.__vq[b].headerRenderer;

if(d!==this.__vr){d.dispose();
}this.__vq[b].headerRenderer=c;
this.fireDataEvent(S,{col:b});
},getHeaderCellRenderer:function(w){{};
return this.__vq[w].headerRenderer;
},setDataCellRenderer:function(I,J){{};
this.__vq[I].dataRenderer=J;
var K=this.__vq[I].dataRenderer;

if(K!==this.__vs){return K;
}return null;
},getDataCellRenderer:function(C){{};
return this.__vq[C].dataRenderer;
},setCellEditorFactory:function(bh,bi){{};
var bj=this.__vq[bh].headerRenderer;

if(bj!==this.__vt){bj.dispose();
}this.__vq[bh].editorFactory=bi;
},getCellEditorFactory:function(L){{};
return this.__vq[L].editorFactory;
},_getColToXPosMap:function(){if(this.__vp==null){this.__vp={};

for(var B=0;B<this.__vm.length;B++){var A=this.__vm[B];
this.__vp[A]={overX:B};
}
for(var z=0;z<this.__vn.length;z++){var A=this.__vn[z];
this.__vp[A].visX=z;
}}return this.__vp;
},getVisibleColumnCount:function(){return this.__vn!=null?this.__vn.length:0;
},getVisibleColumnAtX:function(y){{};
return this.__vn[y];
},getVisibleX:function(bc){{};
return this._getColToXPosMap()[bc].visX;
},getOverallColumnCount:function(){return this.__vm.length;
},getOverallColumnAtX:function(bk){{};
return this.__vm[bk];
},getOverallX:function(v){{};
return this._getColToXPosMap()[v].overX;
},isColumnVisible:function(Q){{};
return (this._getColToXPosMap()[Q].visX!=null);
},setColumnVisible:function(m,n){{};

if(n!=this.isColumnVisible(m)){if(n){var t=this._getColToXPosMap();
var q=t[m].overX;

if(q==null){throw new Error("Showing column failed: "+m+". The column is not added to this TablePaneModel.");
}var r;

for(var x=q+1;x<this.__vm.length;x++){var s=this.__vm[x];
var o=t[s].visX;

if(o!=null){r=o;
break;
}}if(r==null){r=this.__vn.length;
}this.__vn.splice(r,0,m);
}else{var p=this.getVisibleX(m);
this.__vn.splice(p,1);
}this.__vp=null;
if(!this.__vo){var u={col:m,visible:n};
this.fireDataEvent(X,u);
this.fireDataEvent(ba,u);
}}},moveColumn:function(D,E){{};
this.__vo=true;
var H=this.__vm[D];
var F=this.isColumnVisible(H);

if(F){this.setColumnVisible(H,false);
}this.__vm.splice(D,1);
this.__vm.splice(E,0,H);
this.__vp=null;

if(F){this.setColumnVisible(H,true);
}this.__vo=false;
var G={col:H,fromOverXPos:D,toOverXPos:E};
this.fireDataEvent(Y,G);
},setColumnsOrder:function(M){{};

if(M.length==this.__vm.length){this.__vo=true;
var P=new Array(M.length);

for(var N=0;N<this.__vm.length;N++){var O=this.isColumnVisible(N);
P[N]=O;

if(O){this.setColumnVisible(N,false);
}}this.__vm=qx.lang.Array.clone(M);
this.__vp=null;
for(var N=0;N<this.__vm.length;N++){if(P[N]){this.setColumnVisible(N,true);
}}this.__vo=false;
this.fireDataEvent(Y);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__vm.length+", got "+M.length);
}}},destruct:function(){for(var i=0;i<this.__vq.length;i++){this.__vq[i].headerRenderer.dispose();
this.__vq[i].dataRenderer.dispose();
this.__vq[i].editorFactory.dispose();
}this.__vm=this.__vn=this.__vq=this.__vp=null;
this._disposeObjects(W,T,R);
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){qx.ui.table.columnmodel.Basic.call(this);
this.__wW=false;
this.__wX=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__wX:null,__wW:null,__wY:null,_applyBehavior:function(u,v){if(v!=null){v.dispose();
v=null;
}u._setNumColumns(this.getOverallColumnCount());
u.setTableColumnModel(this);
},init:function(p,q){qx.ui.table.columnmodel.Basic.prototype.init.call(this,p);

if(this.__wY==null){this.__wY=q;
q.addListener(n,this._onappear,this);
q.addListener(l,this._onTableWidthChanged,this);
q.addListener(k,this._onverticalscrollbarchanged,this);
q.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(p);
},getTable:function(){return this.__wY;
},_addResetColumnWidthButton:function(event){var t=event.getData();
var s=t.columnButton;
var r=t.menu;
var o;
o=s.factory(g);
r.add(o);
o=s.factory(d,{text:this.tr(e)});
r.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__wW){return ;
}this.__wW=true;
{};
this.getBehavior().onAppear(event,event.getType()!==n);
this.__wY._updateScrollerWidths();
this.__wY._updateScrollBarVisibility();
this.__wW=false;
this.__wX=true;
},_onTableWidthChanged:function(event){if(this.__wW||!this.__wX){return ;
}this.__wW=true;
{};
this.getBehavior().onTableWidthChanged(event);
this.__wW=false;
},_onverticalscrollbarchanged:function(event){if(this.__wW||!this.__wX){return ;
}this.__wW=true;
{};
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__wY&&!this.__wY.isDisposed()){this.__wY._updateScrollerWidths();
this.__wY._updateScrollBarVisibility();
}},this,0);
this.__wW=false;
},_oncolumnwidthchanged:function(event){if(this.__wW||!this.__wX){return ;
}this.__wW=true;
{};
this.getBehavior().onColumnWidthChanged(event);
this.__wW=false;
},_onvisibilitychanged:function(event){if(this.__wW||!this.__wX){return ;
}this.__wW=true;
{};
this.getBehavior().onVisibilityChanged(event);
this.__wW=false;
}},destruct:function(){this.__wY=null;
}});
})();
(function(){var k="icon",j="label",i="String",h="sort-icon",g="_applySortIcon",f="_applyIcon",e="table-header-cell",d="qx.ui.table.headerrenderer.HeaderCell",c="_applyLabel";
qx.Class.define(d,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var p=new qx.ui.layout.Grid();
p.setRowFlex(0,1);
p.setColumnFlex(1,1);
p.setColumnFlex(2,1);
this.setLayout(p);
},properties:{appearance:{refine:true,init:e},label:{check:i,init:null,nullable:true,apply:c},sortIcon:{check:i,init:null,nullable:true,apply:g,themeable:true},icon:{check:i,init:null,nullable:true,apply:f}},members:{_applyLabel:function(q,r){if(q){this._showChildControl(j).setValue(q);
}else{this._excludeChildControl(j);
}},_applySortIcon:function(a,b){if(a){this._showChildControl(h).setSource(a);
}else{this._excludeChildControl(h);
}},_applyIcon:function(l,m){if(l){this._showChildControl(k).setSource(l);
}else{this._excludeChildControl(k);
}},_createChildControlImpl:function(n){var o;

switch(n){case j:o=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(o,{row:0,column:1});
break;
case h:o=new qx.ui.basic.Image(this.getSortIcon());
o.setAnonymous(true);
this._add(o,{row:0,column:2});
break;
case k:o=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(o,{row:0,column:0});
break;
}return o||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,n);
}}});
})();
(function(){var h="",g="<br",f=" &nbsp;",e="<br>",d=" ",c="\n",b="qx.bom.String";
qx.Class.define(b,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(j){return qx.util.StringEscape.escape(j,qx.bom.String.FROM_CHARCODE);
},unescape:function(o){return qx.util.StringEscape.unescape(o,qx.bom.String.TO_CHARCODE);
},fromText:function(n){return qx.bom.String.escape(n).replace(/(  |\n)/g,function(k){var l={"  ":f,"\n":e};
return l[k]||k;
});
},toText:function(i){return qx.bom.String.unescape(i.replace(/\s+|<([^>])+>/gi,function(a){if(a.indexOf(g)===0){return c;
}else if(a.length>0&&a.replace(/^\s*/,h).replace(/\s*$/,h)==h){return d;
}else{return h;
}}));
}},defer:function(m){m.FROM_CHARCODE=qx.lang.Object.invert(m.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(h,j){var m,o=d;

for(var i=0,l=h.length;i<l;i++){var n=h.charAt(i);
var k=n.charCodeAt(0);

if(j[k]){m=f+j[k]+g;
}else{if(k>0x7F){m=b+k+g;
}else{m=n;
}}o+=m;
}return o;
},unescape:function(p,q){return p.replace(/&[#\w]+;/gi,function(r){var s=r;
var r=r.substring(1,r.length-1);
var t=q[r];

if(t){s=String.fromCharCode(t);
}else{if(r.charAt(0)==c){if(r.charAt(1).toUpperCase()==e){t=r.substring(2);
if(t.match(/^[0-9A-Fa-f]+$/gi)){s=String.fromCharCode(parseInt(t,16));
}}else{t=r.substring(1);
if(t.match(/^\d+$/gi)){s=String.fromCharCode(parseInt(t,10));
}}}}return s;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(c){},parse:function(b){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(u){qx.core.Object.call(this);
this.__qF=u;
},statics:{getIntegerInstance:function(){var v=qx.util.format.NumberFormat;

if(v._integerInstance==null){v._integerInstance=new v();
v._integerInstance.setMaximumFractionDigits(0);
}return v._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__qF:null,format:function(w){switch(w){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var A=(w<0);

if(A){w=-w;
}
if(this.getMaximumFractionDigits()!=null){var H=Math.pow(10,this.getMaximumFractionDigits());
w=Math.round(w*H)/H;
}var G=String(Math.floor(w)).length;
var x=t+w;
var D=x.substring(0,G);

while(D.length<this.getMinimumIntegerDigits()){D=q+D;
}
if(this.getMaximumIntegerDigits()!=null&&D.length>this.getMaximumIntegerDigits()){D=D.substring(D.length-this.getMaximumIntegerDigits());
}var C=x.substring(G+1);

while(C.length<this.getMinimumFractionDigits()){C+=q;
}
if(this.getMaximumFractionDigits()!=null&&C.length>this.getMaximumFractionDigits()){C=C.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var z=D;
D=t;
var F;

for(F=z.length;F>3;F-=3){D=t+qx.locale.Number.getGroupSeparator(this.__qF)+z.substring(F-3,F)+D;
}D=z.substring(0,F)+D;
}var B=this.getPrefix()?this.getPrefix():t;
var y=this.getPostfix()?this.getPostfix():t;
var E=B+(A?r:t)+D;

if(C.length>0){E+=t+qx.locale.Number.getDecimalSeparator(this.__qF)+C;
}E+=y;
return E;
},parse:function(I){var N=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__qF)+t);
var L=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__qF)+t);
var J=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+N+g+n+L+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var M=J.exec(I);

if(M==null){throw new Error("Number string '"+I+"' does not match the number format");
}var O=(M[1]==r);
var Q=M[2];
var P=M[3];
Q=Q.replace(new RegExp(N,m),t);
var K=(O?r:t)+Q;

if(P!=null&&P.length!=0){P=P.replace(new RegExp(L),t);
K+=h+P;
}return parseFloat(K);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(f){return qx.locale.Manager.getInstance().localize(d,[],f);
},getGroupSeparator:function(e){return qx.locale.Manager.getInstance().localize(a,[],e);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var cf="(\\d\\d?)",ce="format",cd="",cc="abbreviated",cb="wide",ca="(",bY=")",bX="|",bW="stand-alone",bV="wildcard",bK="default",bJ="literal",bI="'",bH="hour",bG="(\\d\\d?\\d?)",bF="ms",bE="narrow",bD="-",bC="quoted_literal",bB='a',cm="HH:mm:ss",cn="+",ck="HHmmss",cl="long",ci='z',cj="0",cg="sec",ch="day",co='Z',cp=" ",bO="min",bN="mm",bQ="(\\d+)",bP="h",bS="KK",bR='L',bU="Z",bT="(\\d\\d+)",bM="EEEE",bL="^",C=":",D='y',E="K",F="a",G="([\\+\\-]\\d\\d:?\\d\\d)",H="GMT",I="dd",J="qx.util.format.DateFormat",K="yyy",L="H",ct="YYYY",cs="y",cr="HH",cq="EE",cx='h',cw="S",cv='s',cu='A',cz="yyyyyy",cy="kk",bl="ss",bm='H',bj='S',bk="MMMM",bp='c',bq="d",bn="([a-zA-Z]+)",bo='k',bh="m",bi='Y',T='D',S="yyyyy",V='K',U="hh",P="SSS",O="MM",R="yy",Q="(\\d\\d\\d\\d\\d\\d+)",N="yyyy-MM-dd HH:mm:ss",M="(\\d\\d\\d\\d\\d+)",bv="short",bw='d',bx="unkown",by='m',br="(\\d\\d\\d\\d)",bs="(\\d\\d\\d+)",bt="k",bu='M',bz="(\\d\\d\\d\\d+)",bA="SS",be="MMM",bd="s",bc="M",bb='w',ba="EEE",Y="$",X="?",W='E',bg="z",bf="yyyy";
qx.Class.define(J,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(cJ,cK){qx.core.Object.call(this);

if(!cK){this.__vu=qx.locale.Manager.getInstance().getLocale();
}else{this.__vu=cK;
}
if(cJ!=null){this.__vv=cJ.toString();
}else{this.__vv=qx.locale.Date.getDateFormat(cl,this.__vu)+cp+qx.locale.Date.getDateTimeFormat(ck,cm,this.__vu);
}},statics:{getDateTimeInstance:function(){var cB=qx.util.format.DateFormat;
var cA=qx.locale.Date.getDateFormat(cl)+cp+qx.locale.Date.getDateTimeFormat(ck,cm);

if(cB._dateInstance==null||cB._dateInstance.__vv!=cA){cB._dateTimeInstance=new cB();
}return cB._dateTimeInstance;
},getDateInstance:function(){var ea=qx.util.format.DateFormat;
var dY=qx.locale.Date.getDateFormat(bv)+cd;

if(ea._dateInstance==null||ea._dateInstance.__vv!=dY){ea._dateInstance=new ea(dY);
}return ea._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:N,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__vu:null,__vv:null,__vw:null,__vx:null,__vy:null,__vz:function(dw,dx){var dy=cd+dw;

while(dy.length<dx){dy=cj+dy;
}return dy;
},__vA:function(dr){var ds=new Date(dr.getTime());
var dt=ds.getDate();

while(ds.getMonth()!=0){ds.setDate(-1);
dt+=ds.getDate()+1;
}return dt;
},__vB:function(cX){return new Date(cX.getTime()+(3-((cX.getDay()+6)%7))*86400000);
},__vC:function(di){var dk=this.__vB(di);
var dl=dk.getFullYear();
var dj=this.__vB(new Date(dl,0,4));
return Math.floor(1.5+(dk.getTime()-dj.getTime())/86400000/7);
},format:function(a){if(a==null){return null;
}var g=qx.util.format.DateFormat;
var h=this.__vu;
var s=a.getFullYear();
var m=a.getMonth();
var u=a.getDate();
var b=a.getDay();
var n=a.getHours();
var j=a.getMinutes();
var o=a.getSeconds();
var q=a.getMilliseconds();
var t=a.getTimezoneOffset();
var e=t>0?1:-1;
var c=Math.floor(Math.abs(t)/60);
var k=Math.abs(t)%60;
this.__vD();
var r=cd;

for(var i=0;i<this.__vy.length;i++){var p=this.__vy[i];

if(p.type==bJ){r+=p.text;
}else{var f=p.character;
var l=p.size;
var d=X;

switch(f){case D:case bi:if(l==2){d=this.__vz(s%100,2);
}else{d=s+cd;

if(l>d.length){for(var i=d.length;i<l;i++){d=cj+d;
}}}break;
case T:d=this.__vz(this.__vA(a),l);
break;
case bw:d=this.__vz(u,l);
break;
case bb:d=this.__vz(this.__vC(a),l);
break;
case W:if(l==2){d=qx.locale.Date.getDayName(bE,b,h,ce);
}else if(l==3){d=qx.locale.Date.getDayName(cc,b,h,ce);
}else if(l==4){d=qx.locale.Date.getDayName(cb,b,h,ce);
}break;
case bp:if(l==2){d=qx.locale.Date.getDayName(bE,b,h,bW);
}else if(l==3){d=qx.locale.Date.getDayName(cc,b,h,bW);
}else if(l==4){d=qx.locale.Date.getDayName(cb,b,h,bW);
}break;
case bu:if(l==1||l==2){d=this.__vz(m+1,l);
}else if(l==3){d=qx.locale.Date.getMonthName(cc,m,h,ce);
}else if(l==4){d=qx.locale.Date.getMonthName(cb,m,h,ce);
}break;
case bR:if(l==1||l==2){d=this.__vz(m+1,l);
}else if(l==3){d=qx.locale.Date.getMonthName(cc,m,h,bW);
}else if(l==4){d=qx.locale.Date.getMonthName(cb,m,h,bW);
}break;
case bB:d=(n<12)?qx.locale.Date.getAmMarker(h):qx.locale.Date.getPmMarker(h);
break;
case bm:d=this.__vz(n,l);
break;
case bo:d=this.__vz((n==0)?24:n,l);
break;
case V:d=this.__vz(n%12,l);
break;
case cx:d=this.__vz(((n%12)==0)?12:(n%12),l);
break;
case by:d=this.__vz(j,l);
break;
case cv:d=this.__vz(o,l);
break;
case bj:d=this.__vz(q,l);
break;
case ci:if(l==1){d=H+((e>0)?bD:cn)+this.__vz(Math.abs(c))+C+this.__vz(k,2);
}else if(l==2){d=g.MEDIUM_TIMEZONE_NAMES[c];
}else if(l==3){d=g.FULL_TIMEZONE_NAMES[c];
}break;
case co:d=((e>0)?bD:cn)+this.__vz(Math.abs(c),2)+this.__vz(k,2);
break;
}r+=d;
}}return r;
},parse:function(cY){this.__vE();
var df=this.__vw.regex.exec(cY);

if(df==null){throw new Error("Date string '"+cY+"' does not match the date format: "+this.__vv);
}var da={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var db=1;

for(var i=0;i<this.__vw.usedRules.length;i++){var dd=this.__vw.usedRules[i];
var dc=df[db];

if(dd.field!=null){da[dd.field]=parseInt(dc,10);
}else{dd.manipulator(da,dc);
}db+=(dd.groups==null)?1:dd.groups;
}var de=new Date(da.year,da.month,da.day,(da.ispm)?(da.hour+12):da.hour,da.min,da.sec,da.ms);

if(da.month!=de.getMonth()||da.year!=de.getFullYear()){throw new Error("Error parsing date '"+cY+"': the value for day or month is too large");
}return de;
},__vD:function(){if(this.__vy!=null){return;
}this.__vy=[];
var z;
var x=0;
var B=cd;
var v=this.__vv;
var y=bK;
var i=0;

while(i<v.length){var A=v.charAt(i);

switch(y){case bC:if(A==bI){if(i+1>=v.length){i++;
break;
}var w=v.charAt(i+1);

if(w==bI){B+=A;
i++;
}else{i++;
y=bx;
}}else{B+=A;
i++;
}break;
case bV:if(A==z){x++;
i++;
}else{this.__vy.push({type:bV,character:z,size:x});
z=null;
x=0;
y=bK;
}break;
default:if((A>=bB&&A<=ci)||(A>=cu&&A<=co)){z=A;
y=bV;
}else if(A==bI){if(i+1>=v.length){B+=A;
i++;
break;
}var w=v.charAt(i+1);

if(w==bI){B+=A;
i++;
}i++;
y=bC;
}else{y=bK;
}
if(y!=bK){if(B.length>0){this.__vy.push({type:bJ,text:B});
B=cd;
}}else{B+=A;
i++;
}break;
}}if(z!=null){this.__vy.push({type:bV,character:z,size:x});
}else if(B.length>0){this.__vy.push({type:bJ,text:B});
}},__vE:function(){if(this.__vw!=null){return ;
}var cO=this.__vv;
this.__vF();
this.__vD();
var cU=[];
var cQ=bL;

for(var cM=0;cM<this.__vy.length;cM++){var cV=this.__vy[cM];

if(cV.type==bJ){cQ+=qx.lang.String.escapeRegexpChars(cV.text);
}else{var cN=cV.character;
var cR=cV.size;
var cP;

for(var cW=0;cW<this.__vx.length;cW++){var cS=this.__vx[cW];

if(cN==cS.pattern.charAt(0)&&cR==cS.pattern.length){cP=cS;
break;
}}if(cP==null){var cT=cd;

for(var i=0;i<cR;i++){cT+=cN;
}throw new Error("Malformed date format: "+cO+". Wildcard "+cT+" is not supported");
}else{cU.push(cP);
cQ+=cP.regex;
}}}cQ+=Y;
var cL;

try{cL=new RegExp(cQ);
}catch(ef){throw new Error("Malformed date format: "+cO);
}this.__vw={regex:cL,"usedRules":cU,pattern:cQ};
},__vF:function(){var dK=qx.util.format.DateFormat;
var dN=qx.lang.String;

if(this.__vx!=null){return ;
}var dL=this.__vx=[];
var dC=qx.locale.Date.getAmMarker(this.__vu).toString()||dK.AM_MARKER;
var dS=qx.locale.Date.getPmMarker(this.__vu).toString()||dK.PM_MARKER;
var dG=function(dp,dq){dq=parseInt(dq,10);

if(dq<dK.ASSUME_YEAR_2000_THRESHOLD){dq+=2000;
}else if(dq<100){dq+=1900;
}dp.year=dq;
};
var dI=function(cH,cI){cH.month=parseInt(cI,10)-1;
};
var dE=function(cC,cD){var cE=qx.locale.Date.getPmMarker(this.__vu).toString()||dK.PM_MARKER;
cC.ispm=(cD==cE);
};
var dU=function(dg,dh){dg.hour=parseInt(dh,10)%24;
};
var dD=function(eb,ec){eb.hour=parseInt(ec,10)%12;
};
var dP=function(dz,dA){return;
};
var dV=qx.locale.Date.getMonthNames(cc,this.__vu,ce);

for(var i=0;i<dV.length;i++){dV[i]=dN.escapeRegexpChars(dV[i].toString());
}var dF=function(cF,cG){cG=dN.escapeRegexpChars(cG);
cF.month=dV.indexOf(cG);
};
var dM=qx.locale.Date.getMonthNames(cb,this.__vu,ce);

for(var i=0;i<dM.length;i++){dM[i]=dN.escapeRegexpChars(dM[i].toString());
}var dQ=function(dW,dX){dX=dN.escapeRegexpChars(dX);
dW.month=dM.indexOf(dX);
};
var dB=qx.locale.Date.getDayNames(bE,this.__vu,ce);

for(var i=0;i<dB.length;i++){dB[i]=dN.escapeRegexpChars(dB[i].toString());
}var dT=function(dm,dn){dn=dN.escapeRegexpChars(dn);
dm.month=dB.indexOf(dn);
};
var dR=qx.locale.Date.getDayNames(cc,this.__vu,ce);

for(var i=0;i<dR.length;i++){dR[i]=dN.escapeRegexpChars(dR[i].toString());
}var dH=function(du,dv){dv=dN.escapeRegexpChars(dv);
du.month=dR.indexOf(dv);
};
var dO=qx.locale.Date.getDayNames(cb,this.__vu,ce);

for(var i=0;i<dO.length;i++){dO[i]=dN.escapeRegexpChars(dO[i].toString());
}var dJ=function(ed,ee){ee=dN.escapeRegexpChars(ee);
ed.month=dO.indexOf(ee);
};
dL.push({pattern:ct,regex:br,manipulator:dG});
dL.push({pattern:cs,regex:bQ,manipulator:dG});
dL.push({pattern:R,regex:bT,manipulator:dG});
dL.push({pattern:K,regex:bs,manipulator:dG});
dL.push({pattern:bf,regex:bz,manipulator:dG});
dL.push({pattern:S,regex:M,manipulator:dG});
dL.push({pattern:cz,regex:Q,manipulator:dG});
dL.push({pattern:bc,regex:cf,manipulator:dI});
dL.push({pattern:O,regex:cf,manipulator:dI});
dL.push({pattern:be,regex:ca+dV.join(bX)+bY,manipulator:dF});
dL.push({pattern:bk,regex:ca+dM.join(bX)+bY,manipulator:dQ});
dL.push({pattern:I,regex:cf,field:ch});
dL.push({pattern:bq,regex:cf,field:ch});
dL.push({pattern:cq,regex:ca+dB.join(bX)+bY,manipulator:dT});
dL.push({pattern:ba,regex:ca+dR.join(bX)+bY,manipulator:dH});
dL.push({pattern:bM,regex:ca+dO.join(bX)+bY,manipulator:dJ});
dL.push({pattern:F,regex:ca+dC+bX+dS+bY,manipulator:dE});
dL.push({pattern:cr,regex:cf,field:bH});
dL.push({pattern:L,regex:cf,field:bH});
dL.push({pattern:cy,regex:cf,manipulator:dU});
dL.push({pattern:bt,regex:cf,manipulator:dU});
dL.push({pattern:bS,regex:cf,field:bH});
dL.push({pattern:E,regex:cf,field:bH});
dL.push({pattern:U,regex:cf,manipulator:dD});
dL.push({pattern:bP,regex:cf,manipulator:dD});
dL.push({pattern:bN,regex:cf,field:bO});
dL.push({pattern:bh,regex:cf,field:bO});
dL.push({pattern:bl,regex:cf,field:cg});
dL.push({pattern:bd,regex:cf,field:cg});
dL.push({pattern:P,regex:bG,field:bF});
dL.push({pattern:bA,regex:bG,field:bF});
dL.push({pattern:cw,regex:bG,field:bF});
dL.push({pattern:bU,regex:G,manipulator:dP});
dL.push({pattern:bg,regex:bn,manipulator:dP});
}},destruct:function(){this.__vy=this.__vw=this.__vx=null;
}});
})();
(function(){var l="_",k="format",j="thu",h="sat",g="cldr_day_",f="cldr_month_",e="wed",d="fri",c="tue",b="mon",C="sun",B="short",A="HH:mm",z="HHmmsszz",y="HHmm",x="HHmmss",w="cldr_date_format_",v="HH:mm:ss zz",u="full",t="cldr_pm",r="long",s="medium",p="cldr_am",q="qx.locale.Date",n="cldr_date_time_format_",o="cldr_time_format_",m="HH:mm:ss";
qx.Class.define(q,{statics:{__vG:qx.locale.Manager.getInstance(),getAmMarker:function(P){return this.__vG.localize(p,[],P);
},getPmMarker:function(a){return this.__vG.localize(t,[],a);
},getDayNames:function(length,D,E){var E=E?E:k;
{};
var G=[C,b,c,e,j,d,h];
var H=[];

for(var i=0;i<G.length;i++){var F=g+E+l+length+l+G[i];
H.push(this.__vG.localize(F,[],D));
}return H;
},getDayName:function(length,be,bf,bg){var bg=bg?bg:k;
{};
var bi=[C,b,c,e,j,d,h];
var bh=g+bg+l+length+l+bi[be];
return this.__vG.localize(bh,[],bf);
},getMonthNames:function(length,I,J){var J=J?J:k;
{};
var L=[];

for(var i=0;i<12;i++){var K=f+J+l+length+l+(i+1);
L.push(this.__vG.localize(K,[],I));
}return L;
},getMonthName:function(length,T,U,V){var V=V?V:k;
{};
var W=f+V+l+length+l+(T+1);
return this.__vG.localize(W,[],U);
},getDateFormat:function(bo,bp){{};
var bq=w+bo;
return this.__vG.localize(bq,[],bp);
},getDateTimeFormat:function(bj,bk,bl){var bn=n+bj;
var bm=this.__vG.localize(bn,[],bl);

if(bm==bn){bm=bk;
}return bm;
},getTimeFormat:function(ba,bb){{};
var bd=o+ba;
var bc=this.__vG.localize(bd,[],bb);

if(bc!=bd){return bc;
}
switch(ba){case B:case s:return qx.locale.Date.getDateTimeFormat(y,A);
case r:return qx.locale.Date.getDateTimeFormat(x,m);
case u:return qx.locale.Date.getDateTimeFormat(z,v);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bv){var bw={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bx=qx.locale.Date._getTerritory(bv);
return bw[bx]!=null?bw[bx]:1;
},getWeekendStart:function(M){var O={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var N=qx.locale.Date._getTerritory(M);
return O[N]!=null?O[N]:6;
},getWeekendEnd:function(Q){var R={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var S=qx.locale.Date._getTerritory(Q);
return R[S]!=null?R[S]:0;
},isWeekend:function(br,bs){var bu=qx.locale.Date.getWeekendStart(bs);
var bt=qx.locale.Date.getWeekendEnd(bs);

if(bt>bu){return ((br>=bu)&&(br<=bt));
}else{return ((br>=bu)||(br<=bt));
}},_getTerritory:function(X){if(X){var Y=X.split(l)[1]||X;
}else{Y=this.__vG.getTerritory()||this.__vG.getLanguage();
}return Y.toUpperCase();
}}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__xa:null,renderLayout:function(j,top,k,l){this.__xa=k;
},getComputedWidth:function(){return this.__xa;
},getFlex:function(){return this.getLayoutProperties().flex||0;
},setColumnWidth:function(f,g){var g=g||0;
var h=null;

if(typeof f==c){this.setWidth(f);
}else if(typeof f==d){if(f==e){g=1;
}else{var i=f.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(i){if(i[1]==b){g=parseFloat(f);
}else{h=f;
}}}}this.setLayoutProperties({flex:g,width:h});
}},settings:{"qx.tableResizeDebug":false}});
})();
(function(){var b="qx.ui.table.columnmodel.resizebehavior.Abstract",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,members:{_setNumColumns:function(c){throw new Error("_setNumColumns is abstract");
},onAppear:function(event,d){throw new Error("onAppear is abstract");
},onTableWidthChanged:function(event){throw new Error("onTableWidthChanged is abstract");
},onVerticalScrollBarChanged:function(event){throw new Error("onVerticalScrollBarChanged is abstract");
},onColumnWidthChanged:function(event){throw new Error("onColumnWidthChanged is abstract");
},onVisibilityChanged:function(event){throw new Error("onVisibilityChanged is abstract");
},_getAvailableWidth:function(){var f=this.getTableColumnModel();
var i=f.getTable();
var e=i._getPaneScrollerArr();

if(!e[0]||!e[0].getLayoutParent().getBounds()){return null;
}var h=e[0].getLayoutParent().getBounds().width;
var g=e[e.length-1];
h-=g.getPaneInsetRight();
return h;
}}});
})();
(function(){var m="Function",k="Boolean",j="minWidth",h="width",g="__xc",f="qx.ui.table.columnmodel.Resize",e="qx.ui.table.columnmodel.resizebehavior.Default",d="__xd",c="maxWidth";
qx.Class.define(e,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){qx.ui.table.columnmodel.resizebehavior.Abstract.call(this);
this.__xb=[];
this.__xc=new qx.ui.layout.HBox();
this.__xc.connectToWidget(this);
this.__xd=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:m,init:function(S){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:k,init:false},tableColumnModel:{check:f}},members:{__xc:null,__xe:null,__xb:null,__xd:null,__xf:false,setWidth:function(T,U,V){if(T>=this.__xb.length){throw new Error("Column number out of range");
}this.__xb[T].setColumnWidth(U,V);
this.__xd.schedule();
},setMinWidth:function(W,X){if(W>=this.__xb.length){throw new Error("Column number out of range");
}this.__xb[W].setMinWidth(X);
this.__xd.schedule();
},setMaxWidth:function(n,o){if(n>=this.__xb.length){throw new Error("Column number out of range");
}this.__xb[n].setMaxWidth(o);
this.__xd.schedule();
},set:function(P,Q){for(var R in Q){switch(R){case h:this.setWidth(P,Q[R]);
break;
case j:this.setMinWidth(P,Q[R]);
break;
case c:this.setMaxWidth(P,Q[R]);
break;
default:throw new Error("Unknown property: "+R);
}}},onAppear:function(event,O){if(O===true||!this.__xf||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__xf=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var y=event.getData();
if(y.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(a){var b=this.__xb;
if(a<=b.length){b.splice(a,b.length);
return;
}for(var i=b.length;i<a;i++){b[i]=this.getNewResizeBehaviorColumnData()();
b[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__xe;
},_computeColumnsFlexWidth:function(){this.__xd.cancel();
var D=this._getAvailableWidth();

if(D===null){return;
}var z=this.getTableColumnModel();
var B=z.getVisibleColumns();
var C=B.length;
var A=this.__xb;
var i,l;

if(C===0){return;
}var F=[];

for(i=0;i<C;i++){F.push(A[B[i]]);
}this.__xe=F;
this.__xg();
this.__xc.renderLayout(D,100);
for(i=0,l=F.length;i<l;i++){var E=F[i].getComputedWidth();
z.setColumnWidth(B[i],E);
}},__xg:function(){this.__xc.invalidateChildrenCache();
var p=this.__xe;

for(var i=0,l=p.length;i<l;i++){p[i].invalidateLayoutCache();
}},_extendNextColumn:function(event){var K=this.getTableColumnModel();
var N=event.getData();
var I=K.getVisibleColumns();
var H=this._getAvailableWidth();
var G=I.length;
if(N.newWidth>N.oldWidth){return ;
}var i;
var J;
var M=0;

for(i=0;i<G;i++){M+=K.getColumnWidth(I[i]);
}if(M<H){for(i=0;i<I.length;i++){if(I[i]==N.col){J=I[i+1];
break;
}}
if(J){var L=(H-(M-K.getColumnWidth(J)));
K.setColumnWidth(J,L);
}}},_extendLastColumn:function(event){var t=this.getTableColumnModel();
var x=event.getData();
if(x.visible){return;
}var s=t.getVisibleColumns();
if(s.length==0){return;
}var r=this._getAvailableWidth(t);
var q=s.length;
var i;
var v;
var w=0;

for(i=0;i<q;i++){w+=t.getColumnWidth(s[i]);
}if(w<r){v=s[s.length-1];
var u=(r-(w-t.getColumnWidth(v)));
t.setColumnWidth(v,u);
}},_getResizeColumnData:function(){return this.__xb;
}},destruct:function(){this.__xb=this.__xe=null;
this._disposeObjects(g,d);
}});
})();
(function(){var cx="Boolean",cw="column-button",cv="Function",cu="qx.event.type.Data",ct="statusbar",cs="qx.ui.table.pane.CellEvent",cr="function",cq="PageUp",cp="dataChanged",co='"',dN="changeLocale",dM="changeSelection",dL="__uY",dK="qx.dynlocale",dJ="Enter",dI="metaDataChanged",dH="on",dG="_applyStatusBarVisible",dF="columnVisibilityMenuCreateStart",dE="blur",cE="qx.ui.table.Table",cF="columnVisibilityMenuCreateEnd",cC="__uW",cD="changeVisible",cA="_applyResetSelectionOnHeaderClick",cB="_applyMetaColumnCounts",cy="focus",cz="changeDataRowRenderer",cM="changeHeaderCellHeight",cN="Escape",df="A",db="changeSelectionModel",dn="Left",di="Down",dA="Integer",du="_applyHeaderCellHeight",cU="__uX",dD="visibilityChanged",dC="qx.ui.table.ITableModel",dB="orderChanged",cS="_applySelectionModel",cW="menu-button",cY="menu",dd="_applyAdditionalStatusBarText",dg="_applyFocusCellOnMouseMove",dj="table",dq="_applyColumnVisibilityButtonVisible",dw="changeTableModel",cG="qx.event.type.Event",cH="tableWidthChanged",cV="__uO",dm="_applyHeaderCellsVisible",dl="Object",dk="_applyShowCellFocusIndicator",ds="__uP",dr="resize",dh="verticalScrollBarChanged",dp="changeScrollY",ck="_applyTableModel",dv="End",cI="_applyKeepFirstVisibleRowComplete",cJ="widthChanged",dc="one of one row",cl="Home",cn="_applyRowHeight",cR="F2",cK="appear",cL="Up",cP="%1 rows",de="qx.ui.table.selection.Model",dy="one row",dx="PageDown",cX="%1 of %2 rows",dz="keypress",cT="changeRowHeight",dt="Number",cO="header",cQ="qx.ui.table.IRowRenderer",cm="Right",da="Space";
qx.Class.define(cE,{extend:qx.ui.core.Widget,construct:function(X,Y){qx.ui.core.Widget.call(this);
if(!Y){Y={};
}
if(Y.selectionManager){this.setNewSelectionManager(Y.selectionManager);
}
if(Y.selectionModel){this.setNewSelectionModel(Y.selectionModel);
}
if(Y.tableColumnModel){this.setNewTableColumnModel(Y.tableColumnModel);
}
if(Y.tablePane){this.setNewTablePane(Y.tablePane);
}
if(Y.tablePaneHeader){this.setNewTablePaneHeader(Y.tablePaneHeader);
}
if(Y.tablePaneScroller){this.setNewTablePaneScroller(Y.tablePaneScroller);
}
if(Y.tablePaneModel){this.setNewTablePaneModel(Y.tablePaneModel);
}
if(Y.columnMenu){this.setNewColumnMenu(Y.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__uO=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__uO,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__uP=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(X||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(dz,this._onKeyPress);
this.addListener(cy,this._onFocusChanged);
this.addListener(dE,this._onFocusChanged);
var ba=new qx.ui.core.Widget().set({height:0});
this._add(ba);
ba.addListener(dr,this._onResize,this);
this.__uQ=null;
this.__uR=null;
if(qx.core.Variant.isSet(dK,dH)){qx.locale.Manager.getInstance().addListener(dN,this._onChangeLocale,this);
}this.initStatusBarVisible();
X=this.getTableModel();

if(X.init&&typeof (X.init)==cr){X.init(this);
}},events:{"columnVisibilityMenuCreateStart":cu,"columnVisibilityMenuCreateEnd":cu,"tableWidthChanged":cG,"verticalScrollBarChanged":cu,"cellClick":cs,"cellDblclick":cs,"cellContextmenu":cs,"dataEdited":cu},statics:{__uS:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:dj},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:de,apply:cS,event:db},tableModel:{check:dC,apply:ck,event:dw},rowHeight:{check:dt,init:20,apply:cn,event:cT},forceLineHeight:{check:cx,init:true},headerCellsVisible:{check:cx,init:true,apply:dm},headerCellHeight:{check:dA,init:16,apply:du,event:cM,nullable:true},statusBarVisible:{check:cx,init:true,apply:dG},additionalStatusBarText:{nullable:true,init:null,apply:dd},columnVisibilityButtonVisible:{check:cx,init:true,apply:dq},metaColumnCounts:{check:dl,apply:cB},focusCellOnMouseMove:{check:cx,init:false,apply:dg},rowFocusChangeModifiesSelection:{check:cx,init:true},showCellFocusIndicator:{check:cx,init:true,apply:dk},keepFirstVisibleRowComplete:{check:cx,init:true,apply:cI},alwaysUpdateCells:{check:cx,init:false},resetSelectionOnHeaderClick:{check:cx,init:true,apply:cA},dataRowRenderer:{check:cQ,init:null,nullable:true,event:cz},modalCellEditorPreOpenFunction:{check:cv,init:null,nullable:true},newColumnMenu:{check:cv,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:cv,init:function(eN){return new qx.ui.table.selection.Manager(eN);
}},newSelectionModel:{check:cv,init:function(bR){return new qx.ui.table.selection.Model(bR);
}},newTableColumnModel:{check:cv,init:function(bb){return new qx.ui.table.columnmodel.Basic(bb);
}},newTablePane:{check:cv,init:function(el){return new qx.ui.table.pane.Pane(el);
}},newTablePaneHeader:{check:cv,init:function(ff){return new qx.ui.table.pane.Header(ff);
}},newTablePaneScroller:{check:cv,init:function(ch){return new qx.ui.table.pane.Scroller(ch);
}},newTablePaneModel:{check:cv,init:function(eO){return new qx.ui.table.pane.Model(eO);
}}},members:{__uQ:null,__uR:null,__uO:null,__uP:null,__uT:null,__uU:null,__uV:null,__uW:null,__uX:null,__uY:null,_createChildControlImpl:function(eX){var eY;

switch(eX){case ct:eY=new qx.ui.basic.Label();
eY.set({allowGrowX:true});
this._add(eY);
break;
case cw:eY=this.getNewColumnMenu()();
eY.set({focusable:false});
var fa=eY.factory(cY,{table:this});
fa.addListener(cK,this._initColumnMenu,this);
break;
}return eY||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,eX);
},_applySelectionModel:function(eG,eH){this.__uP.setSelectionModel(eG);

if(eH!=null){eH.removeListener(dM,this._onSelectionChanged,this);
}eG.addListener(dM,this._onSelectionChanged,this);
},_applyRowHeight:function(u,v){var w=this._getPaneScrollerArr();

for(var i=0;i<w.length;i++){w[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(L,M){var N=this._getPaneScrollerArr();

for(var i=0;i<N.length;i++){N[i]._excludeChildControl(cO);
}},_applyHeaderCellHeight:function(eA,eB){var eC=this._getPaneScrollerArr();

for(var i=0;i<eC.length;i++){eC[i].getHeader().setHeight(eA);
}},getEmptyTableModel:function(){if(!this.__uY){this.__uY=new qx.ui.table.model.Simple();
this.__uY.setColumns([]);
this.__uY.setData([]);
}return this.__uY;
},_applyTableModel:function(n,o){this.getTableColumnModel().init(n.getColumnCount(),this);

if(o!=null){o.removeListener(dI,this._onTableModelMetaDataChanged,this);
o.removeListener(cp,this._onTableModelDataChanged,this);
}n.addListener(dI,this._onTableModelMetaDataChanged,this);
n.addListener(cp,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,n.getRowCount(),0,n.getColumnCount());
this._onTableModelMetaDataChanged();
if(o&&n.init&&typeof (n.init)==cr){n.init(this);
}},getTableColumnModel:function(){if(!this.__uX){var fk=this.__uX=this.getNewTableColumnModel()(this);
fk.addListener(dD,this._onColVisibilityChanged,this);
fk.addListener(cJ,this._onColWidthChanged,this);
fk.addListener(dB,this._onColOrderChanged,this);
var fj=this.getTableModel();
fk.init(fj.getColumnCount(),this);
var fi=this._getPaneScrollerArr();

for(var i=0;i<fi.length;i++){var fl=fi[i];
var fm=fl.getTablePaneModel();
fm.setTableColumnModel(fk);
}}return this.__uX;
},_applyStatusBarVisible:function(eL,eM){if(eL){this._showChildControl(ct);
}else{this._excludeChildControl(ct);
}
if(eL){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(by,bz){this.__uT=by;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(cd,ce){if(cd){this._showChildControl(cw);
}else{this._excludeChildControl(cw);
}},_applyMetaColumnCounts:function(bi,bj){var bq=bi;
var bk=this._getPaneScrollerArr();
var bo={};

if(bi>bj){var bs=qx.event.Registration.getManager(bk[0]);

for(var bt in qx.ui.table.Table.__uS){bo[bt]={};
bo[bt].capture=bs.getListeners(bk[0],bt,true);
bo[bt].bubble=bs.getListeners(bk[0],bt,false);
}}this._cleanUpMetaColumns(bq.length);
var bp=0;

for(var i=0;i<bk.length;i++){var bu=bk[i];
var br=bu.getTablePaneModel();
br.setFirstColumnX(bp);
br.setMaxColumnCount(bq[i]);
bp+=bq[i];
}if(bq.length>bk.length){var bn=this.getTableColumnModel();

for(var i=bk.length;i<bq.length;i++){var br=this.getNewTablePaneModel()(bn);
br.setFirstColumnX(bp);
br.setMaxColumnCount(bq[i]);
bp+=bq[i];
var bu=this.getNewTablePaneScroller()(this);
bu.setTablePaneModel(br);
bu.addListener(dp,this._onScrollY,this);
for(bt in qx.ui.table.Table.__uS){if(!bo[bt]){break;
}
if(bo[bt].capture&&bo[bt].capture.length>0){var bl=bo[bt].capture;

for(var i=0;i<bl.length;i++){var bm=bl[i].context;

if(!bm){bm=this;
}else if(bm==bk[0]){bm=bu;
}bu.addListener(bt,bl[i].handler,bm,true);
}}
if(bo[bt].bubble&&bo[bt].bubble.length>0){var bw=bo[bt].bubble;

for(var i=0;i<bw.length;i++){var bm=bw[i].context;

if(!bm){bm=this;
}else if(bm==bk[0]){bm=bu;
}bu.addListener(bt,bw[i].handler,bm,false);
}}}var bv=(i==bq.length-1)?1:0;
this.__uO.add(bu,{flex:bv});
bk=this._getPaneScrollerArr();
}}for(var i=0;i<bk.length;i++){var bu=bk[i];
var bx=(i==(bk.length-1));
bu.getHeader().setHeight(this.getHeaderCellHeight());
bu.setTopRightWidget(bx?this.getChildControl(cw):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(cw);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(en,eo){var ep=this._getPaneScrollerArr();

for(var i=0;i<ep.length;i++){ep[i].setFocusCellOnMouseMove(en);
}},_applyShowCellFocusIndicator:function(ef,eg){var eh=this._getPaneScrollerArr();

for(var i=0;i<eh.length;i++){eh[i].setShowCellFocusIndicator(ef);
}},_applyKeepFirstVisibleRowComplete:function(c,d){var e=this._getPaneScrollerArr();

for(var i=0;i<e.length;i++){e[i].onKeepFirstVisibleRowCompleteChanged();
}},_applyResetSelectionOnHeaderClick:function(C,D){var E=this._getPaneScrollerArr();

for(var i=0;i<E.length;i++){E[i].setResetSelectionOnHeaderClick(C);
}},getSelectionManager:function(){return this.__uP;
},_getPaneScrollerArr:function(){return this.__uO.getChildren();
},getPaneScroller:function(em){return this._getPaneScrollerArr()[em];
},_cleanUpMetaColumns:function(fd){var fe=this._getPaneScrollerArr();

if(fe!=null){for(var i=fe.length-1;i>=fd;i--){fe[i].destroy();
}}},_onChangeLocale:function(f){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(be){var bf=this._getPaneScrollerArr();

for(var i=0;i<bf.length;i++){bf[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(bS){var bT=this._getPaneScrollerArr();

for(var i=0;i<bT.length;i++){bT[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(fb){var fc=fb.getData();
this._updateTableData(fc.firstRow,fc.lastRow,fc.firstColumn,fc.lastColumn,fc.removeStart,fc.removeCount);
},_updateTableData:function(bU,bV,bW,bX,bY,ca){var cb=this._getPaneScrollerArr();
if(ca){this.getSelectionModel().removeSelectionInterval(bY,bY+ca);
if(this.__uR>=bY&&this.__uR<(bY+ca)){this.setFocusedCell();
}}
for(var i=0;i<cb.length;i++){cb[i].onTableModelDataChanged(bU,bV,bW,bX);
}var cc=this.getTableModel().getRowCount();

if(cc!=this.__uU){this.__uU=cc;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(a){if(!this.__uV){this.__uV=true;
var b=this._getPaneScrollerArr();

for(var i=0;i<b.length;i++){b[i].setScrollY(a.getData());
}this.__uV=false;
}},_onKeyPress:function(dO){if(!this.getEnabled()){return;
}var dV=this.__uR;
var dS=true;
var dW=dO.getKeyIdentifier();

if(this.isEditing()){if(dO.getModifiers()==0){switch(dW){case dJ:this.stopEditing();
var dV=this.__uR;
this.moveFocusedCell(0,1);

if(this.__uR!=dV){dS=this.startEditing();
}break;
case cN:this.cancelEditing();
this.focus();
break;
default:dS=false;
break;
}}}else{if(dO.isCtrlPressed()){dS=true;

switch(dW){case df:var dT=this.getTableModel().getRowCount();

if(dT>0){this.getSelectionModel().setSelectionInterval(0,dT-1);
}break;
default:dS=false;
break;
}}else{switch(dW){case da:this.__uP.handleSelectKeyDown(this.__uR,dO);
break;
case cR:case dJ:this.startEditing();
dS=true;
break;
case cl:this.setFocusedCell(this.__uQ,0,true);
break;
case dv:var dT=this.getTableModel().getRowCount();
this.setFocusedCell(this.__uQ,dT-1,true);
break;
case dn:this.moveFocusedCell(-1,0);
break;
case cm:this.moveFocusedCell(1,0);
break;
case cL:this.moveFocusedCell(0,-1);
break;
case di:this.moveFocusedCell(0,1);
break;
case cq:case dx:var dR=this.getPaneScroller(0);
var dU=dR.getTablePane();
var dQ=this.getRowHeight();
var dP=(dW==cq)?-1:1;
dT=dU.getVisibleRowCount()-1;
dR.setScrollY(dR.getScrollY()+dP*dT*dQ);
this.moveFocusedCell(0,dP*dT);
break;
default:dS=false;
}}}
if(dV!=this.__uR&&this.getRowFocusChangeModifiesSelection()){this.__uP.handleMoveKeyDown(this.__uR,dO);
}
if(dS){dO.preventDefault();
dO.stopPropagation();
}},_onFocusChanged:function(cf){var cg=this._getPaneScrollerArr();

for(var i=0;i<cg.length;i++){cg[i].onFocusChanged();
}},_onColVisibilityChanged:function(eq){var er=this._getPaneScrollerArr();

for(var i=0;i<er.length;i++){er[i].onColVisibilityChanged();
}var es=eq.getData();

if(this.__uW!=null&&es.col!=null&&es.visible!=null){this.__uW[es.col].setVisible(es.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(bN){var bO=this._getPaneScrollerArr();

for(var i=0;i<bO.length;i++){var bP=bN.getData();
bO[i].setColumnWidth(bP.col,bP.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(eI){var eJ=this._getPaneScrollerArr();

for(var i=0;i<eJ.length;i++){eJ[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(bc){var bd=this._getMetaColumnAtPageX(bc);
return (bd!=-1)?this.getPaneScroller(bd):null;
},setFocusedCell:function(bF,bG,bH){if(!this.isEditing()&&(bF!=this.__uQ||bG!=this.__uR)){if(bF===null){bF=0;
}this.__uQ=bF;
this.__uR=bG;
var bI=this._getPaneScrollerArr();

for(var i=0;i<bI.length;i++){bI[i].setFocusedCell(bF,bG);
}
if(bF!==null&&bH){this.scrollCellVisible(bF,bG);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__uQ;
},getFocusedRow:function(){return this.__uR;
},highlightFocusedRow:function(K){this.getDataRowRenderer().setHighlightFocusRow(K);
},clearFocusedRowHighlight:function(eD){if(eD){var eF=eD.getRelatedTarget();

if(eF instanceof qx.ui.table.pane.Pane||eF instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var eE=this._getPaneScrollerArr();

for(var i=0;i<eE.length;i++){eE[i].onFocusChanged();
}},moveFocusedCell:function(dX,dY){var ed=this.__uQ;
var ee=this.__uR;

if(ed===null||ee===null){return;
}
if(dX!=0){var ec=this.getTableColumnModel();
var x=ec.getVisibleX(ed);
var eb=ec.getVisibleColumnCount();
x=qx.lang.Number.limit(x+dX,0,eb-1);
ed=ec.getVisibleColumnAtX(x);
}
if(dY!=0){var ea=this.getTableModel();
ee=qx.lang.Number.limit(ee+dY,0,ea.getRowCount()-1);
}this.setFocusedCell(ed,ee,true);
},scrollCellVisible:function(O,P){var Q=this.getTableColumnModel();
var x=Q.getVisibleX(O);
var R=this._getMetaColumnAtColumnX(x);

if(R!=-1){this.getPaneScroller(R).scrollCellVisible(O,P);
}},isEditing:function(){if(this.__uQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__uQ);
var bQ=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(bQ).isEditing();
}return false;
},startEditing:function(){if(this.__uQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__uQ);
var fh=this._getMetaColumnAtColumnX(x);
var fg=this.getPaneScroller(fh).startEditing();
return fg;
}return false;
},stopEditing:function(){if(this.__uQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__uQ);
var m=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(m).stopEditing();
}},cancelEditing:function(){if(this.__uQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__uQ);
var ci=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ci).cancelEditing();
}},updateContent:function(){var eK=this._getPaneScrollerArr();

for(var i=0;i<eK.length;i++){eK[i].getTablePane().updateContent(true);
}},blockHeaderElements:function(){var ek=this._getPaneScrollerArr();

for(var i=0;i<ek.length;i++){ek[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(cw).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var cj=this._getPaneScrollerArr();

for(var i=0;i<cj.length;i++){cj[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(cw).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(F){var G=this._getPaneScrollerArr();

for(var i=0;i<G.length;i++){var H=G[i].getContainerLocation();

if(F>=H.left&&F<=H.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(g){var j=this.getMetaColumnCounts();
var k=0;

for(var i=0;i<j.length;i++){var h=j[i];
k+=h;

if(h==-1||g<k){return i;
}}return -1;
},_updateStatusBar:function(){var y=this.getTableModel();

if(this.getStatusBarVisible()){var z=this.getSelectionModel().getSelectedCount();
var B=y.getRowCount();
var A;

if(B>=0){if(z==0){A=this.trn(dy,cP,B,B);
}else{A=this.trn(dc,cX,B,z,B);
}}
if(this.__uT){if(A){A+=this.__uT;
}else{A=this.__uT;
}}
if(A){this.getChildControl(ct).setValue(A);
}}},_updateScrollerWidths:function(){var bJ=this._getPaneScrollerArr();

for(var i=0;i<bJ.length;i++){var bL=(i==(bJ.length-1));
var bM=bJ[i].getTablePaneModel().getTotalWidth();
bJ[i].setPaneWidth(bM);
var bK=bL?1:0;
bJ[i].setLayoutProperties({flex:bK});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var eS=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eV=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var eP=this._getPaneScrollerArr();
var eR=false;
var eU=false;

for(var i=0;i<eP.length;i++){var eW=(i==(eP.length-1));
var eQ=eP[i].getNeededScrollBars(eR,!eW);

if(eQ&eS){eR=true;
}
if(eW&&(eQ&eV)){eU=true;
}}for(var i=0;i<eP.length;i++){var eW=(i==(eP.length-1));
var eT;
eP[i].setHorizontalScrollBarVisible(eR);
if(eW){eT=eP[i].getVerticalScrollBarVisible();
}eP[i].setVerticalScrollBarVisible(eW&&eU);
if(eW&&eU!=eT){this.fireDataEvent(dh,eU);
}}},_initColumnMenu:function(){var ev=this.getTableModel();
var ew=this.getTableColumnModel();
var ex=this.getChildControl(cw);
ex.empty();
var eu=ex.getMenu();
var ey={table:this,menu:eu,columnButton:ex};
this.fireDataEvent(dF,ey);
this.__uW={};

for(var ez=0,l=ev.getColumnCount();ez<l;ez++){var et=ex.factory(cW,{text:ev.getColumnName(ez),column:ez,bVisible:ew.isColumnVisible(ez)});
qx.core.Assert.assertInterface(et,qx.ui.table.IColumnMenuItem);
et.addListener(cD,this._createColumnVisibilityCheckBoxHandler(ez),this);
this.__uW[ez]=et;
}ey={table:this,menu:eu,columnButton:ex};
this.fireDataEvent(cF,ey);
},_createColumnVisibilityCheckBoxHandler:function(bE){return function(bg){var bh=this.getTableColumnModel();
bh.setColumnVisible(bE,bg.getData());
};
},setColumnWidth:function(I,J){this.getTableColumnModel().setColumnWidth(I,J);
},_onResize:function(){this.fireEvent(cH);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(p,q,self,r){if(this.self(arguments).__uS[p]){var t=[p];

for(var i=0,s=this._getPaneScrollerArr();i<s.length;i++){t.push(s[i].addListener.apply(s[i],arguments));
}return t.join(co);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,p,q,self,r);
}},removeListener:function(bA,bB,self,bC){if(this.self(arguments).__uS[bA]){for(var i=0,bD=this._getPaneScrollerArr();i<bD.length;i++){bD[i].removeListener.apply(bD[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,bA,bB,self,bC);
}},removeListenerById:function(S){var W=S.split(co);
var V=W.shift();

if(this.self(arguments).__uS[V]){var U=true;

for(var i=0,T=this._getPaneScrollerArr();i<T.length;i++){U=T[i].removeListenerById.call(T[i],W[i])&&U;
}return U;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,S);
}},destroy:function(){this.getChildControl(cw).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(dK,dH)){qx.locale.Manager.getInstance().removeListener(dN,this._onChangeLocale,this);
}var ej=this.getSelectionModel();

if(ej){ej.dispose();
}var ei=this.getDataRowRenderer();

if(ei){ei.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(ds,cV,dL,dL,cU);
this._disposeMap(cC);
}});
})();
(function(){var b="qx.ui.table.IRowRenderer";
qx.Interface.define(b,{members:{updateDataRowElement:function(e,f){},getRowHeightStyle:function(d){},createRowStyle:function(c){},getRowClass:function(a){}}});
})();
(function(){var u="",t="table-row-background-even",s="table-row-background-selected",r="table-row",q="background-color:",p="table-row-background-focused",o=';border-bottom: 1px solid ',n=';color:',m="table-row-selected",l="table-row-background-odd",e="default",k="table-row-background-focused-selected",h="qx.ui.table.rowrenderer.Default",d="table-row-line",c="'",g="height:",f=";",i="px;",b="1px solid ",j="Boolean";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__ve=u;
this.__ve={};
this.__vf={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(e));
var v=qx.theme.manager.Color.getInstance();
this.__vf.bgcolFocusedSelected=v.resolve(k);
this.__vf.bgcolFocused=v.resolve(p);
this.__vf.bgcolSelected=v.resolve(s);
this.__vf.bgcolEven=v.resolve(t);
this.__vf.bgcolOdd=v.resolve(l);
this.__vf.colSelected=v.resolve(m);
this.__vf.colNormal=v.resolve(r);
this.__vf.horLine=v.resolve(d);
},properties:{highlightFocusRow:{check:j,init:true}},members:{__vf:null,__vg:null,__ve:null,_insetY:1,_renderFont:function(a){if(a){this.__vg=a.getStyles();
this.__ve=qx.bom.element.Style.compile(this.__vg);
this.__ve=this.__ve.replace(/"/g,c);
}else{this.__ve=u;
this.__vg=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(w,x){var z=this.__vg;
var y=x.style;
qx.bom.element.Style.setStyles(x,z);

if(w.focusedRow&&this.getHighlightFocusRow()){y.backgroundColor=w.selected?this.__vf.bgcolFocusedSelected:this.__vf.bgcolFocused;
}else{if(w.selected){y.backgroundColor=this.__vf.bgcolSelected;
}else{y.backgroundColor=(w.row%2==0)?this.__vf.bgcolEven:this.__vf.bgcolOdd;
}}y.color=w.selected?this.__vf.colSelected:this.__vf.colNormal;
y.borderBottom=b+this.__vf.horLine;
},getRowHeightStyle:function(A){if(qx.bom.client.Feature.CONTENT_BOX){A-=this._insetY;
}return g+A+i;
},createRowStyle:function(B){var C=[];
C.push(f);
C.push(this.__ve);
C.push(q);

if(B.focusedRow&&this.getHighlightFocusRow()){C.push(B.selected?this.__vf.bgcolFocusedSelected:this.__vf.bgcolFocused);
}else{if(B.selected){C.push(this.__vf.bgcolSelected);
}else{C.push((B.row%2==0)?this.__vf.bgcolEven:this.__vf.bgcolOdd);
}}C.push(n);
C.push(B.selected?this.__vf.colSelected:this.__vf.colNormal);
C.push(o,this.__vf.horLine);
return C.join(u);
},getRowClass:function(D){return u;
},getRowAttributes:function(E){return u;
}},destruct:function(){this.__vf=this.__vg=this.__ve=null;
}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__vh=new qx.ui.core.Blocker(this);
},members:{__vi:null,__vh:null,factory:function(j,k){switch(j){case a:var m=new qx.ui.menu.Menu();
this.setMenu(m);
return m;
case f:var o=new qx.ui.table.columnmenu.MenuItem(k.text);
o.setVisible(k.bVisible);
this.getMenu().add(o);
return o;
case c:var n=new qx.ui.menu.Button(k.text);
n.set({appearance:e});
return n;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+j);
}},getBlocker:function(){return this.__vh;
},empty:function(){var g=this.getMenu();
var h=g.getChildren();

for(var i=0,l=h.length;i<l;i++){h[0].destroy();
}}},destruct:function(){this.__vh.dispose();
}});
})();
(function(){var h="checked",g="menu-checkbox",f="Boolean",d="_applyValue",c="changeValue",b="qx.ui.menu.CheckBox",a="execute";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(k,l){qx.ui.menu.AbstractButton.call(this);
if(k!=null){if(k.translate){this.setLabel(k.translate());
}else{this.setLabel(k);
}}
if(l!=null){this.setMenu(l);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:f,init:false,apply:d,event:c,nullable:true}},members:{_applyValue:function(i,j){i?this.addState(h):this.removeState(h);
},_onExecute:function(e){this.toggleValue();
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__vj:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__vk:null,handleMouseDown:function(e,f){if(f.isLeftPressed()){var g=this.getSelectionModel();

if(!g.isSelectedIndex(e)){this._handleSelectEvent(e,f);
this.__vk=true;
}else{this.__vk=false;
}}else if(f.isRightPressed()&&f.getModifiers()==0){var g=this.getSelectionModel();

if(!g.isSelectedIndex(e)){g.setSelectionInterval(e,e);
}}},handleMouseUp:function(c,d){if(d.isLeftPressed()&&!this.__vk){this._handleSelectEvent(c,d);
}},handleClick:function(h,i){},handleSelectKeyDown:function(s,t){this._handleSelectEvent(s,t);
},handleMoveKeyDown:function(j,k){var m=this.getSelectionModel();

switch(k.getModifiers()){case 0:m.setSelectionInterval(j,j);
break;
case qx.event.type.Dom.SHIFT_MASK:var l=m.getAnchorSelectionIndex();

if(l==-1){m.setSelectionInterval(j,j);
}else{m.setSelectionInterval(l,j);
}break;
}},_handleSelectEvent:function(n,o){var r=this.getSelectionModel();
var p=r.getLeadSelectionIndex();
var q=r.getAnchorSelectionIndex();

if(o.isShiftPressed()){if(n!=p||r.isSelectionEmpty()){if(q==-1){q=n;
}
if(o.isCtrlOrCommandPressed()){r.addSelectionInterval(q,n);
}else{r.setSelectionInterval(q,n);
}}}else if(o.isCtrlOrCommandPressed()){if(r.isSelectedIndex(n)){r.removeSelectionInterval(n,n);
}else{r.addSelectionInterval(n,n);
}}else{r.setSelectionInterval(n,n);
}}}});
})();
(function(){var bo="",bn="Number",bm='</div>',bl='" ',bk="paneUpdated",bj='<div>',bi="</div>",bh="overflow: hidden;",bg="qx.event.type.Data",bf="paneReloadsData",bG="div",bF='style="',bE="_applyMaxCacheLines",bD="qx.ui.table.pane.Pane",bC="width: 100%;",bB="qx.event.type.Event",bA="_applyVisibleRowCount",bz='>',by="line-height: ",bx="appear",bv='class="',bw="width:100%;",bt="px;",bu='<div ',br="'>",bs="_applyFirstVisibleRow",bp="<div style='",bq=";position:relative;";
qx.Class.define(bD,{extend:qx.ui.core.Widget,construct:function(bH){qx.ui.core.Widget.call(this);
this.__vH=bH;
this.__vI=0;
this.__vJ=0;
this.__vK=[];
},events:{"paneReloadsData":bg,"paneUpdated":bB},properties:{firstVisibleRow:{check:bn,init:0,apply:bs},visibleRowCount:{check:bn,init:0,apply:bA},maxCacheLines:{check:bn,init:1000,apply:bE},allowShrinkX:{refine:true,init:false}},members:{__vJ:null,__vI:null,__vH:null,__vL:null,__vM:null,__vN:null,__vK:null,__vO:0,_applyFirstVisibleRow:function(a,b){this.updateContent(false,a-b);
},_applyVisibleRowCount:function(c,d){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__vH;
},getTable:function(){return this.__vH.getTable();
},setFocusedCell:function(O,P,Q){if(O!=this.__vN||P!=this.__vM){var R=this.__vM;
this.__vN=O;
this.__vM=P;
if(P!=R&&!Q){if(R!==null){this.updateContent(false,null,R,true);
}
if(P!==null){this.updateContent(false,null,P,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(cz,cA){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(g,h,j,k){this.__vP();
var m=this.getFirstVisibleRow();
var l=this.getVisibleRowCount();

if(h==-1||h>=m&&g<m+l){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(e,f){if(this.__vO>=e&&e!==-1){this.__vP();
}},__vP:function(){this.__vK=[];
this.__vO=0;
},__vQ:function(n,o,p){if(!o&&!p&&this.__vK[n]){return this.__vK[n];
}else{return null;
}},__vR:function(F,G,H,I){var J=this.getMaxCacheLines();

if(!H&&!I&&!this.__vK[F]&&J>0){this._applyMaxCacheLines(J);
this.__vK[F]=G;
this.__vO+=1;
}},updateContent:function(K,L,M,N){if(K){this.__vP();
}if(L&&Math.abs(L)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(L);
}else if(N&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(M);
}else{this._updateAllRows();
}},_updateRowStyles:function(T){var X=this.getContentElement().getDomElement();

if(!X||!X.firstChild){this._updateAllRows();
return;
}var bc=this.getTable();
var V=bc.getSelectionModel();
var Y=bc.getTableModel();
var bd=bc.getDataRowRenderer();
var W=X.firstChild.childNodes;
var bb={table:bc};
var be=this.getFirstVisibleRow();
var y=0;
var U=W.length;

if(T!=null){var ba=T-be;

if(ba>=0&&ba<U){be=T;
y=ba;
U=ba+1;
}else{return;
}}
for(;y<U;y++,be++){bb.row=be;
bb.selected=V.isSelectedIndex(be);
bb.focusedRow=(this.__vM==be);
bb.rowData=Y.getRowData(be);
bd.updateDataRowElement(bb,W[y]);
}},_getRowsHtml:function(bU,bV){var cc=this.getTable();
var cf=cc.getSelectionModel();
var bY=cc.getTableModel();
var ca=cc.getTableColumnModel();
var cu=this.getPaneScroller().getTablePaneModel();
var ck=cc.getDataRowRenderer();
bY.prefetchRows(bU,bU+bV-1);
var cr=cc.getRowHeight();
var ct=cu.getColumnCount();
var cb=0;
var bX=[];
for(var x=0;x<ct;x++){var cx=cu.getColumnAtX(x);
var ce=ca.getColumnWidth(cx);
bX.push({col:cx,xPos:x,editable:bY.isColumnEditable(cx),focusedCol:this.__vN==cx,styleLeft:cb,styleWidth:ce});
cb+=ce;
}var cw=[];
var cy=false;

for(var cd=bU;cd<bU+bV;cd++){var cg=cf.isSelectedIndex(cd);
var cj=(this.__vM==cd);
var co=this.__vQ(cd,cg,cj);

if(co){cw.push(co);
continue;
}var bW=[];
var cq={table:cc};
cq.styleHeight=cr;
cq.row=cd;
cq.selected=cg;
cq.focusedRow=cj;
cq.rowData=bY.getRowData(cd);

if(!cq.rowData){cy=true;
}bW.push(bu);
var cn=ck.getRowAttributes(cq);

if(cn){bW.push(cn);
}var cm=ck.getRowClass(cq);

if(cm){bW.push(bv,cm,bl);
}var cl=ck.createRowStyle(cq);
cl+=bq+ck.getRowHeightStyle(cr)+bw;

if(cl){bW.push(bF,cl,bl);
}bW.push(bz);
var cv=false;

for(x=0;x<ct&&!cv;x++){var ch=bX[x];

for(var cs in ch){cq[cs]=ch[cs];
}var cx=cq.col;
cq.value=bY.getValue(cx,cd);
var ci=ca.getDataCellRenderer(cx);
cq.style=ci.getDefaultCellStyle();
cv=ci.createDataCellHtml(cq,bW)||false;
}bW.push(bm);
var cp=bW.join(bo);
this.__vR(cd,cp,cg,cj);
cw.push(cp);
}this.fireDataEvent(bf,cy);
return cw.join(bo);
},_scrollContent:function(q){var r=this.getContentElement().getDomElement();

if(!(r&&r.firstChild)){this._updateAllRows();
return;
}var C=r.firstChild;
var s=C.childNodes;
var A=this.getVisibleRowCount();
var z=this.getFirstVisibleRow();
var v=this.getTable().getTableModel();
var D=0;
D=v.getRowCount();
if(z+A>D){this._updateAllRows();
return;
}var E=q<0?A+q:0;
var t=q<0?0:A-q;

for(i=Math.abs(q)-1;i>=0;i--){var w=s[E];

try{C.removeChild(w);
}catch(S){break;
}}if(!this.__vL){this.__vL=document.createElement(bG);
}var B=bj;
B+=this._getRowsHtml(z+t,Math.abs(q));
B+=bm;
this.__vL.innerHTML=B;
var u=this.__vL.firstChild.childNodes;
if(q>0){for(var i=u.length-1;i>=0;i--){var w=u[0];
C.appendChild(w);
}}else{for(var i=u.length-1;i>=0;i--){var w=u[u.length-1];
C.insertBefore(w,C.firstChild);
}}if(this.__vM!==null){this._updateRowStyles(this.__vM-q);
this._updateRowStyles(this.__vM);
}this.fireEvent(bk);
},_updateAllRows:function(){var bL=this.getContentElement().getDomElement();

if(!bL){this.addListenerOnce(bx,arguments.callee,this);
return;
}var bR=this.getTable();
var bO=bR.getTableModel();
var bQ=this.getPaneScroller().getTablePaneModel();
var bP=bQ.getColumnCount();
var bI=bR.getRowHeight();
var bM=this.getFirstVisibleRow();
var bJ=this.getVisibleRowCount();
var bS=bO.getRowCount();

if(bM+bJ>bS){bJ=Math.max(0,bS-bM);
}var bK=bQ.getTotalWidth();
var bN;
if(bJ>0){bN=[bp,bC,(bR.getForceLineHeight()?by+bI+bt:bo),bh,br,this._getRowsHtml(bM,bJ),bi];
}else{bN=[];
}var bT=bN.join(bo);
bL.innerHTML=bT;
this.setWidth(bK);
this.__vI=bP;
this.__vJ=bJ;
this.fireEvent(bk);
}},destruct:function(){this.__vL=this.__vH=this.__vK=null;
}});
})();
(function(){var c="hovered",b="__vT",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(J){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__vS=new qx.ui.core.Blocker(this);
this.__vT=J;
},members:{__vT:null,__vU:null,__vV:null,__vS:null,getPaneScroller:function(){return this.__vT;
},getTable:function(){return this.__vT.getTable();
},getBlocker:function(){return this.__vS;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(q,r){var s=this.getHeaderWidgetAtColumn(q);

if(s!=null){s.setWidth(r);
}},setMouseOverColumn:function(K){if(K!=this.__vV){if(this.__vV!=null){var L=this.getHeaderWidgetAtColumn(this.__vV);

if(L!=null){L.removeState(c);
}}
if(K!=null){this.getHeaderWidgetAtColumn(K).addState(c);
}this.__vV=K;
}},getHeaderWidgetAtColumn:function(H){var I=this.getPaneScroller().getTablePaneModel().getX(H);
return this._getChildren()[I];
},showColumnMoveFeedback:function(d,x){var h=this.getContainerLocation();

if(this.__vU==null){var m=this.getTable();
var e=this.getPaneScroller().getTablePaneModel().getX(d);
var g=this._getChildren()[e];
var i=m.getTableModel();
var k=m.getTableColumnModel();
var l={xPos:e,col:d,name:i.getColumnName(d),table:m};
var j=k.getHeaderCellRenderer(d);
var f=j.createHeaderCell(l);
var n=g.getBounds();
f.setWidth(n.width);
f.setHeight(n.height);
f.setZIndex(1000000);
f.setOpacity(0.8);
f.setLayoutProperties({top:h.top});
this.getApplicationRoot().add(f);
this.__vU=f;
}this.__vU.setLayoutProperties({left:h.left+x});
this.__vU.show();
},hideColumnMoveFeedback:function(){if(this.__vU!=null){this.__vU.destroy();
this.__vU=null;
}},isShowingColumnMoveFeedback:function(){return this.__vU!=null;
},_updateContent:function(t){var E=this.getTable();
var y=E.getTableModel();
var B=E.getTableColumnModel();
var D=this.getPaneScroller().getTablePaneModel();
var G=this._getChildren();
var z=D.getColumnCount();
var C=y.getSortColumnIndex();
if(t){this._cleanUpCells();
}var u={};
u.sortedAscending=y.isSortAscending();

for(var x=0;x<z;x++){var w=D.getColumnAtX(x);

if(w===undefined){continue;
}var F=B.getColumnWidth(w);
var A=B.getHeaderCellRenderer(w);
u.xPos=x;
u.col=w;
u.name=y.getColumnName(w);
u.editable=y.isColumnEditable(w);
u.sorted=(w==C);
u.table=E;
var v=G[x];
if(v==null){v=A.createHeaderCell(u);
v.set({width:F});
this._add(v);
}else{A.updateHeaderCell(u,v);
}}},_cleanUpCells:function(){var p=this._getChildren();

for(var x=p.length-1;x>=0;x--){var o=p[x];
o.destroy();
}}},destruct:function(){this.__vS.dispose();
this._disposeObjects(b);
}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var cH="Boolean",cG="resize-line",cF="mousedown",cE="qx.event.type.Data",cD="mouseup",cC="qx.ui.table.pane.CellEvent",cB="scroll",cA="focus-indicator",cz="excluded",cy="scrollbar-y",dH="table-scroller-focus-indicator",dG="visible",dF="mousemove",dE="header",dD="editing",dC="click",dB="modelChanged",dA="scrollbar-x",dz="cellClick",dy="pane",cO="__wc",cP="__we",cM="mouseout",cN="changeHorizontalScrollBarVisible",cK="__vX",cL="bottom",cI="_applyScrollTimeout",cJ="changeScrollX",cT="_applyTablePaneModel",cU="Integer",dd="dblclick",db="__vY",dl="dataEdited",dg="__wa",du="mousewheel",dr="interval",cW="qx.ui.table.pane.Scroller",dx="_applyShowCellFocusIndicator",dw="resize",dv="__wd",cV="vertical",cY="changeScrollY",da="__wb",dc="appear",de="table-scroller",dh="beforeSort",dn="cellDblclick",dt="__wf",cQ="__wg",cR="horizontal",cX="losecapture",dk="contextmenu",dj="col-resize",di="disappear",dq="_applyVerticalScrollBarVisible",dp="_applyHorizontalScrollBarVisible",df="cellContextmenu",dm="close",cx="changeTablePaneModel",ds="qx.ui.table.pane.Model",cS="changeVerticalScrollBarVisible";
qx.Class.define(cW,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(O){qx.ui.core.Widget.call(this);
this.__vW=O;
var P=new qx.ui.layout.Grid();
P.setColumnFlex(0,1);
P.setRowFlex(1,1);
this._setLayout(P);
this.__vX=this._showChildControl(dA);
this.__vY=this._showChildControl(cy);
this.__wa=this._showChildControl(dE);
this.__wb=this._showChildControl(dy);
this.__wc=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__wc,{row:0,column:0,colSpan:2});
this.__wd=new qx.ui.table.pane.Clipper();
this.__wd.add(this.__wa);
this.__wd.addListener(cX,this._onChangeCaptureHeader,this);
this.__wd.addListener(dF,this._onMousemoveHeader,this);
this.__wd.addListener(cF,this._onMousedownHeader,this);
this.__wd.addListener(cD,this._onMouseupHeader,this);
this.__wd.addListener(dC,this._onClickHeader,this);
this.__wc.add(this.__wd,{flex:1});
this.__we=new qx.ui.table.pane.Clipper();
this.__we.add(this.__wb);
this.__we.addListener(du,this._onMousewheel,this);
this.__we.addListener(dF,this._onMousemovePane,this);
this.__we.addListener(cF,this._onMousedownPane,this);
this.__we.addListener(cD,this._onMouseupPane,this);
this.__we.addListener(dC,this._onClickPane,this);
this.__we.addListener(dk,this._onContextMenu,this);
this.__we.addListener(dd,this._onDblclickPane,this);
this.__we.addListener(dw,this._onResizePane,this);
this._add(this.__we,{row:1,column:0});
this.__wf=this.getChildControl(cA);
this.initShowCellFocusIndicator();
this.getChildControl(cG).hide();
this.addListener(cM,this._onMouseout,this);
this.addListener(dc,this._onAppear,this);
this.addListener(di,this._onDisappear,this);
this.__wg=new qx.event.Timer();
this.__wg.addListener(dr,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":cE,"changeScrollX":cE,"cellClick":cC,"cellDblclick":cC,"cellContextmenu":cC,"beforeSort":cE},properties:{horizontalScrollBarVisible:{check:cH,init:true,apply:dp,event:cN},verticalScrollBarVisible:{check:cH,init:true,apply:dq,event:cS},tablePaneModel:{check:ds,apply:cT,event:cx},liveResize:{check:cH,init:false},focusCellOnMouseMove:{check:cH,init:false},selectBeforeFocus:{check:cH,init:false},showCellFocusIndicator:{check:cH,init:true,apply:dx},resetSelectionOnHeaderClick:{check:cH,init:true},scrollTimeout:{check:cU,init:100,apply:cI},appearance:{refine:true,init:de}},members:{__wh:null,__vW:null,__wi:null,__wj:null,__wk:null,__wl:null,__wm:null,__wn:null,__wo:null,__wp:null,__wq:null,__wr:null,__ws:null,__wt:null,__wu:false,__wv:null,__ww:null,__wx:null,__wy:null,__wz:null,__wA:null,__wB:null,__wC:null,__vX:null,__vY:null,__wa:null,__wd:null,__wb:null,__we:null,__wf:null,__wc:null,__wg:null,getPaneInsetRight:function(){var eO=this.getTopRightWidget();
var eP=eO&&eO.isVisible()&&eO.getBounds()?eO.getBounds().width:0;
var eN=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(eP,eN);
},setPaneWidth:function(dK){if(this.isVerticalScrollBarVisible()){dK+=this.getPaneInsetRight();
}this.setWidth(dK);
},_createChildControlImpl:function(ek){var el;

switch(ek){case dE:el=(this.getTable().getNewTablePaneHeader())(this);
break;
case dy:el=(this.getTable().getNewTablePane())(this);
break;
case cA:el=new qx.ui.table.pane.FocusIndicator(this);
el.setUserBounds(0,0,0,0);
el.setZIndex(1000);
el.addListener(cD,this._onMouseupFocusIndicator,this);
this.__we.add(el);
el.show();
el.setDecorator(null);
break;
case cG:el=new qx.ui.core.Widget();
el.setUserBounds(0,0,0,0);
el.setZIndex(1000);
this.__we.add(el);
break;
case dA:el=this._createScrollBar(cR).set({minWidth:0,alignY:cL});
el.addListener(cB,this._onScrollX,this);
this._add(el,{row:2,column:0});
break;
case cy:el=this._createScrollBar(cV);
el.addListener(cB,this._onScrollY,this);
this._add(el,{row:1,column:1});
break;
}return el||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,ek);
},_applyHorizontalScrollBarVisible:function(r,s){this.__vX.setVisibility(r?dG:cz);
},_applyVerticalScrollBarVisible:function(dI,dJ){this.__vY.setVisibility(dI?dG:cz);
},_applyTablePaneModel:function(eV,eW){if(eW!=null){eW.removeListener(dB,this._onPaneModelChanged,this);
}eV.addListener(dB,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bR,bS){if(bR){this.__wf.setDecorator(dH);
this._updateFocusIndicator();
}else{if(this.__wf){this.__wf.setDecorator(null);
}}},getScrollY:function(){return this.__vY.getPosition();
},setScrollY:function(scrollY,eQ){this.__vY.scrollTo(scrollY);

if(eQ){this._updateContent();
}},getScrollX:function(){return this.__vX.getPosition();
},setScrollX:function(scrollX){this.__vX.scrollTo(scrollX);
},getTable:function(){return this.__vW;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(ft,fu){this.__wa.setColumnWidth(ft,fu);
this.__wb.setColumnWidth(ft,fu);
var fv=this.getTablePaneModel();
var x=fv.getX(ft);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__wa.onColOrderChanged();
this.__wb.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bM,bN,bO,bP){this.__wb.onTableModelDataChanged(bM,bN,bO,bP);
var bQ=this.getTable().getTableModel().getRowCount();

if(bQ!=this.__wh){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bQ){if(bQ==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bQ-1);
}}this.__wh=bQ;
}},onSelectionChanged:function(){this.__wb.onSelectionChanged();
},onFocusChanged:function(){this.__wb.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__wa.onTableModelMetaDataChanged();
this.__wb.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__wa.onPaneModelChanged();
this.__wb.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__wa._updateContent();
this.__vW._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bb=this.__we.getInnerSize();

if(!bb){return ;
}var Y=this.getTablePaneModel().getTotalWidth();
var ba=this.__vX;

if(bb.width<Y){var X=Math.max(0,Y-bb.width);
ba.setMaximum(X);
ba.setKnobFactor(bb.width/Y);
var bc=ba.getPosition();
ba.setPosition(Math.min(bc,X));
}else{ba.setMaximum(0);
ba.setKnobFactor(1);
ba.setPosition(0);
}},updateVerScrollBarMaximum:function(){var et=this.__we.getInnerSize();

if(!et){return ;
}var er=this.getTable().getTableModel();
var en=er.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){en+=1;
}var em=this.getTable().getRowHeight();
var ep=en*em;
var es=this.__vY;

if(et.height<ep){var eo=Math.max(0,ep-et.height);
es.setMaximum(eo);
es.setKnobFactor(et.height/ep);
var eq=es.getPosition();
es.setPosition(Math.min(eq,eo));
}else{es.setMaximum(0);
es.setKnobFactor(1);
es.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var Q=e.getData();
this.fireDataEvent(cJ,Q,e.getOldData());
this.__wd.scrollToX(Q);
this.__we.scrollToX(Q);
},_onScrollY:function(e){this.fireDataEvent(cY,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var eh=this.getTable();

if(!eh.getEnabled()){return;
}var ej=qx.bom.client.Engine.GECKO?1:3;
var ei=this.__vY.getPosition()+((e.getWheelDelta()*ej)*eh.getRowHeight());
this.__vY.scrollTo(ei);
if(this.__ww&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__ww,this.__wx);
}e.stop();
},__wD:function(t){var z=this.getTable();
var A=this.__wa.getHeaderWidgetAtColumn(this.__wq);
var u=A.getSizeHint().minWidth;
var w=Math.max(u,this.__ws+t-this.__wr);

if(this.getLiveResize()){var v=z.getTableColumnModel();
v.setColumnWidth(this.__wq,w);
}else{this.__wa.setColumnWidth(this.__wq,w);
var y=this.getTablePaneModel();
this._showResizeLine(y.getColumnLeft(this.__wq)+w);
}this.__wr+=w-this.__ws;
this.__ws=w;
},__wE:function(eR){var eS=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__wa.isShowingColumnMoveFeedback()||eR>this.__wp+eS||eR<this.__wp-eS){this.__wm+=eR-this.__wp;
this.__wa.showColumnMoveFeedback(this.__wl,this.__wm);
var eT=this.__vW.getTablePaneScrollerAtPageX(eR);

if(this.__wo&&this.__wo!=eT){this.__wo.hideColumnMoveFeedback();
}
if(eT!=null){this.__wn=eT.showColumnMoveFeedback(eR);
}else{this.__wn=null;
}this.__wo=eT;
this.__wp=eR;
}},_onMousemoveHeader:function(e){var ea=this.getTable();

if(!ea.getEnabled()){return;
}var eb=false;
var dT=null;
var dX=e.getDocumentLeft();
var dY=e.getDocumentTop();
this.__ww=dX;
this.__wx=dY;

if(this.__wq!=null){this.__wD(dX);
eb=true;
e.stopPropagation();
}else if(this.__wl!=null){this.__wE(dX);
e.stopPropagation();
}else{var dU=this._getResizeColumnForPageX(dX);

if(dU!=-1){eb=true;
}else{var dW=ea.getTableModel();
var ec=this._getColumnForPageX(dX);

if(ec!=null&&dW.isColumnSortable(ec)){dT=ec;
}}}var dV=eb?dj:null;
this.getApplicationRoot().setGlobalCursor(dV);
this.setCursor(dV);
this.__wa.setMouseOverColumn(dT);
},_onMousemovePane:function(e){var ed=this.getTable();

if(!ed.getEnabled()){return;
}var ef=e.getDocumentLeft();
var eg=e.getDocumentTop();
this.__ww=ef;
this.__wx=eg;
var ee=this._getRowForPagePos(ef,eg);

if(ee!=null&&this._getColumnForPageX(ef)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(ef,eg);
}}this.__wa.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var ct=e.getDocumentLeft();
var cu=this._getResizeColumnForPageX(ct);

if(cu!=-1){this._startResizeHeader(cu,ct);
e.stop();
}else{var cs=this._getColumnForPageX(ct);

if(cs!=null){this._startMoveHeader(cs,ct);
e.stop();
}}},_startResizeHeader:function(fk,fl){var fm=this.getTable().getTableColumnModel();
this.__wq=fk;
this.__wr=fl;
this.__ws=fm.getColumnWidth(this.__wq);
this.__wd.capture();
},_startMoveHeader:function(fi,fj){this.__wl=fi;
this.__wp=fj;
this.__wm=this.getTablePaneModel().getColumnLeft(fi);
this.__wd.capture();
},_onMousedownPane:function(e){var d=this.getTable();

if(!d.getEnabled()){return;
}
if(d.isEditing()){d.stopEditing();
}var a=e.getDocumentLeft();
var c=e.getDocumentTop();
var h=this._getRowForPagePos(a,c);
var g=this._getColumnForPageX(a);

if(h!==null){this.__wt={row:h,col:g};
this.__wu=false;
var b=this.getSelectBeforeFocus();

if(b){d.getSelectionManager().handleMouseDown(h,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(a,c);
}
if(!b){d.getSelectionManager().handleMouseDown(h,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__wt&&!this.__wu&&!this.isEditing()&&this.__wf.getRow()==this.__wt.row&&this.__wf.getColumn()==this.__wt.col){this.fireEvent(dz,qx.ui.table.pane.CellEvent,[this,e,this.__wt.row,this.__wt.col],true);
this.__wu=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__wq!=null){this._stopResizeHeader();
}
if(this.__wl!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var M=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
M.setColumnWidth(this.__wq,this.__ws);
}this.__wq=null;
this.__wd.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var N=this.__wA.getBounds().height;
this.__wA.setUserBounds(0,0,this.__ws,N);
}},_stopMoveHeader:function(){var dP=this.getTable().getTableColumnModel();
var dQ=this.getTablePaneModel();
this.__wa.hideColumnMoveFeedback();

if(this.__wo){this.__wo.hideColumnMoveFeedback();
}
if(this.__wn!=null){var dS=dQ.getFirstColumnX()+dQ.getX(this.__wl);
var dO=this.__wn;

if(dO!=dS&&dO!=dS+1){var dR=dP.getVisibleColumnAtX(dS);
var dN=dP.getVisibleColumnAtX(dO);
var dM=dP.getOverallX(dR);
var dL=(dN!=null)?dP.getOverallX(dN):dP.getOverallColumnCount();

if(dL>dM){dL--;
}dP.moveColumn(dM,dL);
this._updateFocusIndicator();
}}this.__wl=null;
this.__wn=null;
this.__wd.releaseCapture();
},_onMouseupPane:function(e){var ci=this.getTable();

if(!ci.getEnabled()){return;
}var cj=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(cj!=-1&&cj!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){ci.getSelectionManager().handleMouseUp(cj,e);
}},_onMouseupHeader:function(e){var fh=this.getTable();

if(!fh.getEnabled()){return;
}
if(this.__wq!=null){this._stopResizeHeader();
this.__wv=true;
e.stop();
}else if(this.__wl!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__wv){this.__wv=false;
return;
}var bu=this.getTable();

if(!bu.getEnabled()){return;
}var bs=bu.getTableModel();
var bt=e.getDocumentLeft();
var br=this._getResizeColumnForPageX(bt);

if(br==-1){var bx=this._getColumnForPageX(bt);

if(bx!=null&&bs.isColumnSortable(bx)){var bq=bs.getSortColumnIndex();
var bv=(bx!=bq)?true:!bs.isSortAscending();
var bw={column:bx,ascending:bv,clickEvent:e};

if(this.fireDataEvent(dh,bw,null,true)){bs.sortByColumn(bx,bv);

if(this.getResetSelectionOnHeaderClick()){bu.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var R=this.getTable();

if(!R.getEnabled()){return;
}var U=e.getDocumentLeft();
var V=e.getDocumentTop();
var S=this._getRowForPagePos(U,V);
var T=this._getColumnForPageX(U);

if(S!=null&&T!=null){R.getSelectionManager().handleClick(S,e);

if(this.__wf.isHidden()||(this.__wt&&!this.__wu&&!this.isEditing()&&S==this.__wt.row&&T==this.__wt.col)){this.fireEvent(dz,qx.ui.table.pane.CellEvent,[this,e,S,T],true);
this.__wu=true;
}}},_onContextMenu:function(e){var ex=e.getDocumentLeft();
var ey=e.getDocumentTop();
var ev=this._getRowForPagePos(ex,ey);
var ew=this._getColumnForPageX(ex);

if(this.__wf.isHidden()||(this.__wt&&ev==this.__wt.row&&ew==this.__wt.col)){this.fireEvent(df,qx.ui.table.pane.CellEvent,[this,e,ev,ew],true);
var eu=this.getTable().getContextMenu();

if(eu){if(eu.getChildren().length>0){eu.openAtMouse(e);
}else{eu.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var cg=e.getDocumentLeft();
var ch=e.getDocumentTop();
this._focusCellAtPagePos(cg,ch);
this.startEditing();
var cf=this._getRowForPagePos(cg,ch);

if(cf!=-1&&cf!=null){this.fireEvent(dn,qx.ui.table.pane.CellEvent,[this,e,cf],true);
}},_onMouseout:function(e){var ck=this.getTable();

if(!ck.getEnabled()){return;
}if(this.__wq==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__wa.setMouseOverColumn(null);
},_showResizeLine:function(x){var C=this._showChildControl(cG);
var B=C.getWidth();
var D=this.__we.getBounds();
C.setUserBounds(x-Math.round(B/2),0,B,D.height);
},_hideResizeLine:function(){this._excludeChildControl(cG);
},showColumnMoveFeedback:function(bd){var bm=this.getTablePaneModel();
var bl=this.getTable().getTableColumnModel();
var bg=this.__wb.getContainerLocation().left;
var bk=bm.getColumnCount();
var bh=0;
var bf=0;
var bp=bg;

for(var be=0;be<bk;be++){var bi=bm.getColumnAtX(be);
var bn=bl.getColumnWidth(bi);

if(bd<bp+bn/2){break;
}bp+=bn;
bh=be+1;
bf=bp-bg;
}var bj=this.__we.getContainerLocation().left;
var bo=this.__we.getBounds().width;
var scrollX=bj-bg;
bf=qx.lang.Number.limit(bf,scrollX+2,scrollX+bo-1);
this._showResizeLine(bf);
return bm.getFirstColumnX()+bh;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(fp,fq){var fs=this._getRowForPagePos(fp,fq);

if(fs!=-1&&fs!=null){var fr=this._getColumnForPageX(fp);
this.__vW.setFocusedCell(fr,fs);
}},setFocusedCell:function(fw,fx){if(!this.isEditing()){this.__wb.setFocusedCell(fw,fx,this.__wj);
this.__wy=fw;
this.__wz=fx;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__wy;
},getFocusedRow:function(){return this.__wz;
},scrollCellVisible:function(by,bz){var bJ=this.getTablePaneModel();
var bA=bJ.getX(by);

if(bA!=-1){var bG=this.__we.getInnerSize();

if(!bG){return;
}var bH=this.getTable().getTableColumnModel();
var bD=bJ.getColumnLeft(by);
var bK=bH.getColumnWidth(by);
var bB=this.getTable().getRowHeight();
var bL=bz*bB;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var bI=Math.min(bD,bD+bK-bG.width);
var bF=bD;
this.setScrollX(Math.max(bI,Math.min(bF,scrollX)));
var bC=bL+bB-bG.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){bC+=bB;
}var bE=bL;
this.setScrollY(Math.max(bC,Math.min(bE,scrollY)),true);
}},isEditing:function(){return this.__wA!=null;
},startEditing:function(){var I=this.getTable();
var G=I.getTableModel();
var K=this.__wy;

if(!this.isEditing()&&(K!=null)&&G.isColumnEditable(K)){var L=this.__wz;
var E=this.getTablePaneModel().getX(K);
var F=G.getValue(K,L);
this.__wB=I.getTableColumnModel().getCellEditorFactory(K);
var H={col:K,row:L,xPos:E,value:F,table:I};
this.__wA=this.__wB.createCellEditor(H);
if(this.__wA===null){return false;
}else if(this.__wA instanceof qx.ui.window.Window){this.__wA.setModal(true);
this.__wA.setShowClose(false);
this.__wA.addListener(dm,this._onCellEditorModalWindowClose,this);
var f=I.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__wA,H);
}this.__wA.open();
}else{var J=this.__wf.getInnerSize();
this.__wA.setUserBounds(0,0,J.width,J.height);
this.__wf.addListener(cF,function(e){this.__wt={row:this.__wz,col:this.__wy};
e.stopPropagation();
},this);
this.__wf.add(this.__wA);
this.__wf.addState(dD);
this.__wf.setKeepActive(false);
this.__wf.setDecorator(dH);
this.__wA.focus();
this.__wA.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__wf.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var fo=this.__wB.getCellEditorValue(this.__wA);
var fn=this.getTable().getTableModel().getValue(this.__wy,this.__wz);
this.getTable().getTableModel().setValue(this.__wy,this.__wz,fo);
this.__vW.focus();
this.__vW.fireDataEvent(dl,{row:this.__wz,col:this.__wy,oldValue:fn,value:fo});
}},cancelEditing:function(){if(this.isEditing()&&!this.__wA.pendingDispose){if(this._cellEditorIsModalWindow){this.__wA.destroy();
this.__wA=null;
this.__wB=null;
this.__wA.pendingDispose=true;
}else{this.__wf.removeState(dD);
this.__wf.setKeepActive(true);
this.__wA.destroy();
this.__wA=null;
this.__wB=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(cl){var co=this.getTable().getTableColumnModel();
var cp=this.getTablePaneModel();
var cn=cp.getColumnCount();
var cr=this.__wa.getContainerLocation().left;

for(var x=0;x<cn;x++){var cm=cp.getColumnAtX(x);
var cq=co.getColumnWidth(cm);
cr+=cq;

if(cl<cr){return cm;
}}return null;
},_getResizeColumnForPageX:function(bT){var bX=this.getTable().getTableColumnModel();
var bY=this.getTablePaneModel();
var bW=bY.getColumnCount();
var cb=this.__wa.getContainerLocation().left;
var bU=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<bW;x++){var bV=bY.getColumnAtX(x);
var ca=bX.getColumnWidth(bV);
cb+=ca;

if(bT>=(cb-bU)&&bT<=(cb+bU)){return bV;
}}return -1;
},_getRowForPagePos:function(eX,eY){var fa=this.__wb.getContentLocation();

if(eX<fa.left||eX>fa.right){return null;
}
if(eY>=fa.top&&eY<=fa.bottom){var fb=this.getTable().getRowHeight();
var scrollY=this.__vY.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/fb)*fb;
}var fe=scrollY+eY-fa.top;
var fg=Math.floor(fe/fb);
var ff=this.getTable().getTableModel();
var fc=ff.getRowCount();
return (fg<fc)?fg:null;
}var fd=this.__wa.getContainerLocation();

if(eY>=fd.top&&eY<=fd.bottom&&eX<=fd.right){return -1;
}return null;
},setTopRightWidget:function(cc){var cd=this.__wC;

if(cd!=null){this.__wc.remove(cd);
}
if(cc!=null){this.__wc.add(cc);
}this.__wC=cc;
},getTopRightWidget:function(){return this.__wC;
},getHeader:function(){return this.__wa;
},getTablePane:function(){return this.__wb;
},getVerticalScrollBarWidth:function(){var eU=this.__vY;
return eU.isVisible()?(eU.getSizeHint().width||0):0;
},getNeededScrollBars:function(ez,eA){var eG=this.__vY.getSizeHint().width;
var eH=this.__we.getInnerSize();
var eB=eH?eH.width:0;

if(this.getVerticalScrollBarVisible()){eB+=eG;
}var eK=eH?eH.height:0;

if(this.getHorizontalScrollBarVisible()){eK+=eG;
}var eE=this.getTable().getTableModel();
var eI=eE.getRowCount();
var eL=this.getTablePaneModel().getTotalWidth();
var eJ=this.getTable().getRowHeight()*eI;
var eD=false;
var eM=false;

if(eL>eB){eD=true;

if(eJ>eK-eG){eM=true;
}}else if(eJ>eK){eM=true;

if(!eA&&(eL>eB-eG)){eD=true;
}}var eF=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eC=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((ez||eD)?eF:0)|((eA||!eM)?0:eC);
},getPaneClipper:function(){return this.__we;
},_applyScrollTimeout:function(cv,cw){this._startInterval(cv);
},_startInterval:function(W){this.__wg.setInterval(W);
this.__wg.start();
},_stopInterval:function(){this.__wg.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__wj&&!this.__wb._layoutPending){this.__wj=false;
this._updateContent();
}}),_updateContent:function(){var m=this.__we.getInnerSize();

if(!m){return;
}var p=m.height;
var scrollX=this.__vX.getPosition();
var scrollY=this.__vY.getPosition();
var j=this.getTable().getRowHeight();
var k=Math.floor(scrollY/j);
var o=this.__wb.getFirstVisibleRow();
this.__wb.setFirstVisibleRow(k);
var l=Math.ceil(p/j);
var i=0;
var n=this.getTable().getKeepFirstVisibleRowComplete();

if(!n){l++;
i=scrollY%j;
}this.__wb.setVisibleRowCount(l);

if(k!=o){this._updateFocusIndicator();
}this.__we.scrollToX(scrollX);
if(!n){this.__we.scrollToY(i);
}},_updateFocusIndicator:function(){var q=this.getTable();

if(!q.getEnabled()){return;
}this.__wf.moveToCell(this.__wy,this.__wz);
}},destruct:function(){this._stopInterval();
var ce=this.getTablePaneModel();

if(ce){ce.dispose();
}this.__wt=this.__wC=this.__vW=null;
this._disposeObjects(cK,db,dv,cP,dt,dg,da,cO,cQ);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(c){this.assertNumber(c);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="qx.client",d="0",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="__pO",u="_applyOrientation",t="appear",s="opera",r="PositiveInteger",q="mshtml",o="mouseup",p="Number",m="_applyPosition",n="scrollbar",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(Q){qx.ui.core.Widget.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if(qx.core.Variant.isSet(f,s)){this.addListener(t,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(Q!=null){this.setOrientation(Q);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[k,h],init:k,apply:u},maximum:{check:r,apply:w,init:100},position:{check:p,init:0,apply:m,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__pN:null,__pO:null,_getScrollPaneElement:function(){if(!this.__pO){this.__pO=new qx.html.Element();
}return this.__pO;
},renderLayout:function(L,top,M,N){var O=qx.ui.core.Widget.prototype.renderLayout.call(this,L,top,M,N);
this._updateScrollBar();
return O;
},_getContentHint:function(){var K=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__pN?100:K,maxWidth:this.__pN?null:K,minWidth:this.__pN?null:K,height:this.__pN?K:100,maxHeight:this.__pN?K:null,minHeight:this.__pN?K:null};
},_applyEnabled:function(A,B){qx.ui.core.Widget.prototype._applyEnabled.call(this,A,B);
this._updateScrollBar();
},_applyMaximum:function(C){this._updateScrollBar();
},_applyPosition:function(P){var content=this.getContentElement();

if(this.__pN){content.scrollToX(P);
}else{content.scrollToY(P);
}},_applyOrientation:function(U,V){var W=this.__pN=U===k;
this.set({allowGrowX:W,allowShrinkX:W,allowGrowY:!W,allowShrinkY:!W});

if(W){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:W?i:c,overflowY:W?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var G=this.__pN;
var H=this.getBounds();

if(!H){return;
}
if(this.isEnabled()){var I=G?H.width:H.height;
var F=this.getMaximum()+I;
}else{F=0;
}if(qx.core.Variant.isSet(f,q)){var H=this.getBounds();
this.getContentElement().setStyles({left:G?d:g,top:G?g:d,width:(G?H.width:H.width+1)+j,height:(G?H.height+1:H.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(G?F:1)+j,height:(G?1:F)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(R){this.setPosition(Math.max(0,Math.min(this.getMaximum(),R)));
},scrollBy:function(J){this.scrollTo(this.getPosition()+J);
},scrollBySteps:function(D){var E=this.getSingleStep();
this.scrollBy(D*E);
},_onScroll:function(e){var T=this.getContentElement();
var S=this.__pN?T.getScrollX():T.getScrollY();
this.setPosition(S);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="left",b="down",A="up",z="PositiveNumber",y="changeValue",x="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="knob",u="qx.ui.core.scroll.ScrollBar",t="resize",s="_applyOrientation",r="_applyPageStep",p="PositiveInteger",q="scroll",n="_applyPosition",o="scrollbar",m="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(H){qx.ui.core.Widget.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(t,this._onResizeSlider,this);
this._createChildControl(h);
if(H!=null){this.setOrientation(H);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[k,i],init:k,apply:s},maximum:{check:p,apply:m,init:100},position:{check:x,init:0,apply:n,event:q},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:r},knobFactor:{check:z,apply:w,nullable:true}},members:{__nm:2,_createChildControlImpl:function(I){var J;

switch(I){case l:J=new qx.ui.core.scroll.ScrollSlider();
J.setPageStep(100);
J.setFocusable(false);
J.addListener(y,this._onChangeSliderValue,this);
this._add(J,{flex:1});
break;
case j:J=new qx.ui.form.RepeatButton();
J.setFocusable(false);
J.addListener(f,this._onExecuteBegin,this);
this._add(J);
break;
case h:J=new qx.ui.form.RepeatButton();
J.setFocusable(false);
J.addListener(f,this._onExecuteEnd,this);
this._add(J);
break;
}return J||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,I);
},_applyMaximum:function(M){this.getChildControl(l).setMaximum(M);
},_applyPosition:function(F){this.getChildControl(l).setValue(F);
},_applyKnobFactor:function(B){this.getChildControl(l).setKnobFactor(B);
},_applyPageStep:function(G){this.getChildControl(l).setPageStep(G);
},_applyOrientation:function(C,D){var E=this._getLayout();

if(E){E.dispose();
}if(C===k){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(i,k);
this.getChildControl(j).replaceState(A,c);
this.getChildControl(h).replaceState(b,d);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(k,i);
this.getChildControl(j).replaceState(c,A);
this.getChildControl(h).replaceState(d,b);
}this.getChildControl(l).setOrientation(C);
},scrollTo:function(N){this.getChildControl(l).slideTo(N);
},scrollBy:function(a){this.getChildControl(l).slideBy(a);
},scrollBySteps:function(K){var L=this.getSingleStep();
this.getChildControl(l).slideBy(K*L);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var O=this.getChildControl(l).getChildControl(v);
var R=O.getSizeHint();
var P=false;
var Q=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(Q.height<R.minHeight+this.__nm){P=true;
}}else{if(Q.width<R.minWidth+this.__nm){P=true;
}}
if(P){O.exclude();
}else{O.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(c){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(e){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(b){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var x="knob",w="horizontal",v="vertical",u="Integer",t="hovered",s="left",r="top",q="mouseup",p="pressed",o="px",bj="changeValue",bi="interval",bh="mousemove",bg="resize",bf="slider",be="mousedown",bd="PageUp",bc="mouseout",bb='qx.event.type.Data',ba="Left",E="Down",F="Up",C="dblclick",D="qx.ui.form.Slider",A="PageDown",B="mousewheel",y="_applyValue",z="_applyKnobFactor",G="End",H="height",O="Right",M="width",S="_applyOrientation",Q="Home",V="mouseover",U="floor",J="_applyMinimum",Y="click",X="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",W="keypress",I="ceil",K="losecapture",L="contextmenu",N="_applyMaximum",P="Number",R="changeMaximum",T="changeMinimum";
qx.Class.define(D,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(ca){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(W,this._onKeyPress);
this.addListener(B,this._onMouseWheel);
this.addListener(be,this._onMouseDown);
this.addListener(q,this._onMouseUp);
this.addListener(K,this._onMouseUp);
this.addListener(bg,this._onUpdate);
this.addListener(L,this._onStopEvent);
this.addListener(Y,this._onStopEvent);
this.addListener(C,this._onStopEvent);
if(ca!=null){this.setOrientation(ca);
}else{this.initOrientation();
}},events:{changeValue:bb},properties:{appearance:{refine:true,init:bf},focusable:{refine:true,init:true},orientation:{check:[w,v],init:w,apply:S},value:{check:X,init:0,apply:y,nullable:true},minimum:{check:u,init:0,apply:J,event:T},maximum:{check:u,init:100,apply:N,event:R},singleStep:{check:u,init:1},pageStep:{check:u,init:10},knobFactor:{check:P,apply:z,nullable:true}},members:{__nI:null,__nJ:null,__nK:null,__nL:null,__nM:null,__nN:null,__nO:null,__nP:null,__nQ:null,__nR:null,__nS:null,__nT:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bW){var bX;

switch(bW){case x:bX=new qx.ui.core.Widget();
bX.addListener(bg,this._onUpdate,this);
bX.addListener(V,this._onMouseOver);
bX.addListener(bc,this._onMouseOut);
this._add(bX);
break;
}return bX||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bW);
},_onMouseOver:function(e){this.addState(t);
},_onMouseOut:function(e){this.removeState(t);
},_onMouseWheel:function(e){var m=e.getWheelDelta()>0?1:-1;
this.slideBy(m*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bM=this.getOrientation()===w;
var bL=bM?ba:F;
var forward=bM?O:E;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bL:this.slideBack();
break;
case A:this.slidePageForward();
break;
case bd:this.slidePageBack();
break;
case Q:this.slideToBegin();
break;
case G:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__nL){return;
}var i=this.__nV;
var g=this.getChildControl(x);
var h=i?s:r;
var k=i?e.getDocumentLeft():e.getDocumentTop();
var l=this.__nI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[h];
var j=this.__nJ=qx.bom.element.Location.get(g.getContainerElement().getDomElement())[h];

if(e.getTarget()===g){this.__nL=true;

if(!this.__nR){this.__nR=new qx.event.Timer(100);
this.__nR.addListener(bi,this._fireValue,this);
}this.__nR.start();
this.__nM=k+l-j;
g.addState(p);
}else{this.__nN=true;
this.__nO=k<=j?-1:1;
this.__nW(e);
this._onInterval();
if(!this.__nQ){this.__nQ=new qx.event.Timer(100);
this.__nQ.addListener(bi,this._onInterval,this);
}this.__nQ.start();
}this.addListener(bh,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__nL){this.releaseCapture();
delete this.__nL;
this.__nR.stop();
this._fireValue();
delete this.__nM;
this.getChildControl(x).removeState(p);
if(e.getType()===q){var bJ;
var bK;
var bI;

if(this.__nV){bJ=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__nI);
bI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[r];
bK=e.getDocumentTop()-(bI+this.getChildControl(x).getBounds().top);
}else{bJ=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__nI);
bI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[s];
bK=e.getDocumentLeft()-(bI+this.getChildControl(x).getBounds().left);
}
if(bK<0||bK>this.__nK||bJ<0||bJ>this.__nK){this.getChildControl(x).removeState(t);
}}}else if(this.__nN){this.__nQ.stop();
this.releaseCapture();
delete this.__nN;
delete this.__nO;
delete this.__nP;
}this.removeListener(bh,this._onMouseMove);
if(e.getType()===q){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__nL){var bO=this.__nV?e.getDocumentLeft():e.getDocumentTop();
var bN=bO-this.__nM;
this.slideTo(this._positionToValue(bN));
}else if(this.__nN){this.__nW(e);
}e.stopPropagation();
},_onInterval:function(e){var bU=this.getValue()+(this.__nO*this.getPageStep());
if(bU<this.getMinimum()){bU=this.getMinimum();
}else if(bU>this.getMaximum()){bU=this.getMaximum();
}var bV=this.__nO==-1;

if((bV&&bU<=this.__nP)||(!bV&&bU>=this.__nP)){bU=this.__nP;
}this.slideTo(bU);
},_onUpdate:function(e){var bQ=this.getInnerSize();
var bR=this.getChildControl(x).getBounds();
var bP=this.__nV?M:H;
this._updateKnobSize();
this.__nU=bQ[bP]-bR[bP];
this.__nK=bR[bP];
this._updateKnobPosition();
},__nV:false,__nU:0,__nW:function(e){var bk=this.__nV;
var br=bk?e.getDocumentLeft():e.getDocumentTop();
var bt=this.__nI;
var bl=this.__nJ;
var bv=this.__nK;
var bs=br-bt;

if(br>=bl){bs-=bv;
}var bp=this._positionToValue(bs);
var bm=this.getMinimum();
var bn=this.getMaximum();

if(bp<bm){bp=bm;
}else if(bp>bn){bp=bn;
}else{var bq=this.getValue();
var bo=this.getPageStep();
var bu=this.__nO<0?U:I;
bp=bq+(Math[bu]((bp-bq)/bo)*bo);
}if(this.__nP==null||(this.__nO==-1&&bp<=this.__nP)||(this.__nO==1&&bp>=this.__nP)){this.__nP=bp;
}},_positionToValue:function(by){var bz=this.__nU;
if(bz==null||bz==0){return 0;
}var bB=by/bz;

if(bB<0){bB=0;
}else if(bB>1){bB=1;
}var bA=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bA*bB);
},_valueToPosition:function(bC){var bD=this.__nU;

if(bD==null){return 0;
}var bE=this.getMaximum()-this.getMinimum();
if(bE==0){return 0;
}var bC=bC-this.getMinimum();
var bF=bC/bE;

if(bF<0){bF=0;
}else if(bF>1){bF=1;
}return Math.round(bD*bF);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bS){var bT=this.getChildControl(x).getContainerElement();

if(this.__nV){bT.setStyle(s,bS+o,true);
}else{bT.setStyle(r,bS+o,true);
}},_updateKnobSize:function(){var b=this.getKnobFactor();

if(b==null){return;
}var a=this.getInnerSize();

if(a==null){return;
}if(this.__nV){this.getChildControl(x).setWidth(Math.round(b*a.width));
}else{this.getChildControl(x).setHeight(Math.round(b*a.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(cf){this.slideTo(this.getValue()+cf);
},slideTo:function(n){if(n<this.getMinimum()){n=this.getMinimum();
}else if(n>this.getMaximum()){n=this.getMaximum();
}else{n=this.getMinimum()+Math.round((n-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(n);
},_applyOrientation:function(c,d){var f=this.getChildControl(x);
this.__nV=c===w;
if(this.__nV){this.removeState(v);
f.removeState(v);
this.addState(w);
f.addState(w);
f.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(w);
f.removeState(w);
this.addState(v);
f.addState(v);
f.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bG,bH){if(bG!=null){this._updateKnobSize();
}else{if(this.__nV){this.getChildControl(x).resetWidth();
}else{this.getChildControl(x).resetHeight();
}}},_applyValue:function(bw,bx){if(bw!=null){this._updateKnobPosition();

if(this.__nL){this.__nT=[bw,bx];
}else{this.fireEvent(bj,qx.event.type.Data,[bw,bx]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__nT){return;
}var bY=this.__nT;
this.__nT=null;
this.fireEvent(bj,qx.event.type.Data,bY);
},_applyMinimum:function(cb,cc){if(this.getValue()<cb){this.setValue(cb);
}this._updateKnobPosition();
},_applyMaximum:function(cd,ce){if(this.getValue()>cd){this.setValue(cd);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(g){qx.ui.form.Slider.call(this,g);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(e){var f=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){f.width=0;
}else{f.height=0;
}return f;
}}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(c){this.getContentElement().scrollToX(c,false);
},scrollToY:function(b){this.getContentElement().scrollToY(b,true);
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);
this.__wF=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__wF:null,_onKeyPress:function(e){var q=e.getKeyIdentifier();

if(q!==f&&q!==c){e.stopPropagation();
}},moveToCell:function(i,j){if(!this.__wF.getShowCellFocusIndicator()&&!this.__wF.getTable().getTableModel().isColumnEditable(i)){this.exclude();
return;
}else{this.show();
}
if(i==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var k=this.__wF.getTablePaneModel().getX(i);

if(k==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var p=this.__wF.getTable();
var n=p.getTableColumnModel();
var o=this.__wF.getTablePaneModel();
var m=this.__wF.getTablePane().getFirstVisibleRow();
var l=p.getRowHeight();
this.setUserBounds(o.getColumnLeft(i)-2,(j-m)*l-2,n.getColumnWidth(i)+3,l+3);
this.show();
this.setRow(j);
this.setColumn(i);
}}}},destruct:function(){this.__wF=null;
}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);

if(e!=null){this.setRow(e);
}else{this.setRow(c._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(f!=null){this.setColumn(f);
}else{this.setColumn(c._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(g){var h=qx.event.type.Mouse.prototype.clone.call(this,g);
h.set({row:this.getRow(),column:this.getColumn()});
return h;
}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(h,i,j){return h>=i&&h<=j;
},isBetweenRange:function(b,c,d){return b>c&&b<d;
},limit:function(e,f,g){if(g!=null&&e>g){return g;
}else if(f!=null&&e<f){return f;
}else{return e;
}}}});
})();
(function(){var j="headerCellRendererChanged",i="visibilityChangedPre",h="Number",g="qx.event.type.Event",f="_applyFirstColumnX",e="Integer",d="qx.ui.table.pane.Model",c="_applyMaxColumnCount";
qx.Class.define(d,{extend:qx.core.Object,construct:function(s){qx.core.Object.call(this);
this.setTableColumnModel(s);
},events:{"modelChanged":g},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:e,init:0,apply:f},maxColumnCount:{check:h,init:-1,apply:c}},members:{__wG:null,__wH:null,_applyFirstColumnX:function(y,z){this.__wG=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(a,b){this.__wG=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(F){if(this.__wH){this.__wH.removeListener(i,this._onColVisibilityChanged,this);
this.__wH.removeListener(j,this._onColVisibilityChanged,this);
}this.__wH=F;
this.__wH.addListener(i,this._onColVisibilityChanged,this);
this.__wH.addListener(j,this._onHeaderCellRendererChanged,this);
this.__wG=null;
},_onColVisibilityChanged:function(A){this.__wG=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(B){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__wG==null){var m=this.getFirstColumnX();
var o=this.getMaxColumnCount();
var n=this.__wH.getVisibleColumnCount();

if(o==-1||(m+o)>n){this.__wG=n-m;
}else{this.__wG=o;
}}return this.__wG;
},getColumnAtX:function(k){var l=this.getFirstColumnX();
return this.__wH.getVisibleColumnAtX(l+k);
},getX:function(C){var D=this.getFirstColumnX();
var E=this.getMaxColumnCount();
var x=this.__wH.getVisibleX(C)-D;

if(x>=0&&(E==-1||x<E)){return x;
}else{return -1;
}},getColumnLeft:function(t){var w=0;
var v=this.getColumnCount();

for(var x=0;x<v;x++){var u=this.getColumnAtX(x);

if(u==t){return w;
}w+=this.__wH.getColumnWidth(u);
}return -1;
},getTotalWidth:function(){var p=0;
var q=this.getColumnCount();

for(var x=0;x<q;x++){var r=this.getColumnAtX(x);
p+=this.__wH.getColumnWidth(r);
}return p;
}},destruct:function(){if(this.__wH){this.__wH.removeListener(i,this._onColVisibilityChanged,this);
this.__wH.removeListener(j,this._onColVisibilityChanged,this);
}this.__wH=null;
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.ui.table.ITableModel";
qx.Interface.define(a,{events:{"dataChanged":c,"metaDataChanged":b,"sorted":c},members:{getRowCount:function(){},getRowData:function(f){},getColumnCount:function(){},getColumnId:function(g){},getColumnIndexById:function(p){},getColumnName:function(o){},isColumnEditable:function(d){},isColumnSortable:function(e){},sortByColumn:function(s,t){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(q,r){},getValue:function(j,k){},getValueById:function(h,i){},setValue:function(l,m,n){},setValueById:function(u,v,w){}}});
})();
(function(){var y="metaDataChanged",x="qx.event.type.Data",w="qx.event.type.Event",v="abstract",u="qx.ui.table.model.Abstract";
qx.Class.define(u,{type:v,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":x,"metaDataChanged":w,"sorted":x},construct:function(){qx.core.Object.call(this);
this.__uI=[];
this.__uJ=[];
this.__uK={};
},members:{__uI:null,__uJ:null,__uK:null,__uL:null,init:function(A){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(k){return null;
},isColumnEditable:function(g){return false;
},isColumnSortable:function(m){return false;
},sortByColumn:function(F,G){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(D,E){},getValue:function(a,b){throw new Error("getValue is abstract");
},getValueById:function(B,C){return this.getValue(this.getColumnIndexById(B),C);
},setValue:function(q,r,s){throw new Error("setValue is abstract");
},setValueById:function(c,d,e){this.setValue(this.getColumnIndexById(c),d,e);
},getColumnCount:function(){return this.__uI.length;
},getColumnIndexById:function(z){return this.__uK[z];
},getColumnId:function(f){return this.__uI[f];
},getColumnName:function(l){return this.__uJ[l];
},setColumnIds:function(t){this.__uI=t;
this.__uK={};

for(var i=0;i<t.length;i++){this.__uK[t[i]]=i;
}this.__uJ=new Array(t.length);
if(!this.__uL){this.fireEvent(y);
}},setColumnNamesByIndex:function(j){if(this.__uI.length!=j.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__uI.length+" != "+j.length);
}this.__uJ=j;
this.fireEvent(y);
},setColumnNamesById:function(h){this.__uJ=new Array(this.__uI.length);

for(var i=0;i<this.__uI.length;++i){this.__uJ[i]=h[this.__uI[i]];
}},setColumns:function(n,o){var p=this.__uI.length==0||o;

if(o==null){if(this.__uI.length==0){o=n;
}else{o=this.__uI;
}}
if(o.length!=n.length){throw new Error("columnIdArr and columnNameArr have different length: "+o.length+" != "+n.length);
}
if(p){this.__uL=true;
this.setColumnIds(o);
this.__uL=false;
}this.setColumnNamesByIndex(n);
}},destruct:function(){this.__uI=this.__uJ=this.__uK=null;
}});
})();
(function(){var bF="dataChanged",bE="metaDataChanged",bD="qx.ui.table.model.Simple",bC="Boolean",bB="sorted";
qx.Class.define(bD,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__wI=[];
this.__wJ=-1;
this.__wK=[];
this.__wL=null;
},properties:{caseSensitiveSorting:{check:bC,init:true}},statics:{_defaultSortComparatorAscending:function(M,N){var O=M[arguments.callee.columnIndex];
var P=N[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(O)&&qx.lang.Type.isNumber(P)){var Q=isNaN(O)?isNaN(P)?0:1:isNaN(P)?-1:null;

if(Q!=null){return Q;
}}return (O>P)?1:((O==P)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(X,Y){var ba=(X[arguments.callee.columnIndex].toLowerCase?X[arguments.callee.columnIndex].toLowerCase():X[arguments.callee.columnIndex]);
var bb=(Y[arguments.callee.columnIndex].toLowerCase?Y[arguments.callee.columnIndex].toLowerCase():Y[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(ba)&&qx.lang.Type.isNumber(bb)){var bc=isNaN(ba)?isNaN(bb)?0:1:isNaN(bb)?-1:null;

if(bc!=null){return bc;
}}return (ba>bb)?1:((ba==bb)?0:-1);
},_defaultSortComparatorDescending:function(e,f){var g=e[arguments.callee.columnIndex];
var h=f[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(g)&&qx.lang.Type.isNumber(h)){var k=isNaN(g)?isNaN(h)?0:1:isNaN(h)?-1:null;

if(k!=null){return k;
}}return (g<h)?1:((g==h)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(bL,bM){var bN=(bL[arguments.callee.columnIndex].toLowerCase?bL[arguments.callee.columnIndex].toLowerCase():bL[arguments.callee.columnIndex]);
var bO=(bM[arguments.callee.columnIndex].toLowerCase?bM[arguments.callee.columnIndex].toLowerCase():bM[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(bN)&&qx.lang.Type.isNumber(bO)){var bP=isNaN(bN)?isNaN(bO)?0:1:isNaN(bO)?-1:null;

if(bP!=null){return bP;
}}return (bN<bO)?1:((bN==bO)?0:-1);
}},members:{__wI:null,__wL:null,__wM:null,__wK:null,__wJ:null,__wN:null,getRowData:function(C){var D=this.__wI[C];

if(D==null||D.originalData==null){return D;
}else{return D.originalData;
}},getRowDataAsMap:function(p){var r=this.__wI[p];

if(r!=null){var q={};
for(var s=0;s<this.getColumnCount();s++){q[this.getColumnId(s)]=r[s];
}
if(r.originalData!=null){for(var t in r.originalData){if(q[t]==undefined){q[t]=r.originalData[t];
}}}return q;
}return (r&&r.originalData)?r.originalData:null;
},getDataAsMapArray:function(){var be=this.getRowCount();
var bd=[];

for(var i=0;i<be;i++){bd.push(this.getRowDataAsMap(i));
}return bd;
},setEditable:function(bf){this.__wL=[];

for(var bg=0;bg<this.getColumnCount();bg++){this.__wL[bg]=bf;
}this.fireEvent(bE);
},setColumnEditable:function(bh,bi){if(bi!=this.isColumnEditable(bh)){if(this.__wL==null){this.__wL=[];
}this.__wL[bh]=bi;
this.fireEvent(bE);
}},isColumnEditable:function(bK){return this.__wL?(this.__wL[bK]==true):false;
},setColumnSortable:function(u,v){if(v!=this.isColumnSortable(u)){if(this.__wM==null){this.__wM=[];
}this.__wM[u]=v;
this.fireEvent(bE);
}},isColumnSortable:function(bn){return (this.__wM?(this.__wM[bn]!==false):true);
},sortByColumn:function(bw,bx){var bA;
var bz=this.__wK[bw];

if(bz){bA=(bx?bz.ascending:bz.descending);
}else{if(this.getCaseSensitiveSorting()){bA=(bx?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{bA=(bx?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}bA.columnIndex=bw;
this.__wI.sort(bA);
this.__wJ=bw;
this.__wN=bx;
var by={columnIndex:bw,ascending:bx};
this.fireDataEvent(bB,by);
this.fireEvent(bE);
},setSortMethods:function(G,H){var I;

if(qx.lang.Type.isFunction(H)){I={ascending:H,descending:function(E,F){return H(F,E);
}};
}else{I=H;
}this.__wK[G]=I;
},getSortMethods:function(R){return this.__wK[R];
},clearSorting:function(){if(this.__wJ!=-1){this.__wJ=-1;
this.__wN=true;
this.fireEvent(bE);
}},getSortColumnIndex:function(){return this.__wJ;
},isSortAscending:function(){return this.__wN;
},getRowCount:function(){return this.__wI.length;
},getValue:function(S,T){if(T<0||T>=this.__wI.length){throw new Error("this.__rowArr out of bounds: "+T+" (0.."+this.__wI.length+")");
}return this.__wI[T][S];
},setValue:function(bo,bp,bq){if(this.__wI[bp][bo]!=bq){this.__wI[bp][bo]=bq;
if(this.hasListener(bF)){var br={firstRow:bp,lastRow:bp,firstColumn:bo,lastColumn:bo};
this.fireDataEvent(bF,br);
}
if(bo==this.__wJ){this.clearSorting();
}}},setData:function(J,K){this.__wI=J;
if(this.hasListener(bF)){var L={firstRow:0,lastRow:J.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bF,L);
}
if(K!==false){this.clearSorting();
}},getData:function(){return this.__wI;
},setDataAsMapArray:function(U,V,W){this.setData(this._mapArray2RowArr(U,V),W);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__wI.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__wI,bs);
var bv={firstRow:bt,lastRow:this.__wI.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bF,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(l,m,n,o){this.addRows(this._mapArray2RowArr(l,n),m,o);
},setRows:function(a,b,c){if(b==null){b=0;
}a.splice(0,0,b,a.length);
Array.prototype.splice.apply(this.__wI,a);
var d={firstRow:b,lastRow:this.__wI.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bF,d);

if(c!==false){this.clearSorting();
}},setRowsAsMapArray:function(bj,bk,bl,bm){this.setRows(this._mapArray2RowArr(bj,bl),bk,bm);
},removeRows:function(bG,bH,bI){this.__wI.splice(bG,bH);
var bJ={firstRow:bG,lastRow:this.__wI.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bG,removeCount:bH};
this.fireDataEvent(bF,bJ);

if(bI!==false){this.clearSorting();
}},_mapArray2RowArr:function(w,x){var B=w.length;
var y=this.getColumnCount();
var A=new Array(B);
var z;

for(var i=0;i<B;++i){z=[];

if(x){z.originalData=w[i];
}
for(var j=0;j<y;++j){z[j]=w[i][this.getColumnId(j)];
}A[i]=z;
}return A;
}},destruct:function(){this.__wI=this.__wL=this.__wK=this.__wM=null;
}});
})();
(function(){var y="",x="!",w="'!",v="'",u="Expected '",t="' (rgb(",s=",",r=")), but found value '",q="Event (",p="Expected value to be the CSS color '",bF="' but found ",bE="The value '",bD=" != ",bC="qx.core.Object",bB="Expected value to be an array but found ",bA=") was fired.",bz="Expected value to be an integer >= 0 but found ",by="' to be not equal with '",bx="' to '",bw="qx.ui.core.Widget",F="Called assertTrue with '",G="Expected value to be a map but found ",D="The function did not raise an exception!",E="Expected value to be undefined but found ",B="Expected value to be a DOM element but found  '",C="Expected value to be a regular expression but found ",z="' to implement the interface '",A="Expected value to be null but found ",N="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",W="Expected value to be a string but found ",bj="null",be="' but found '",bs="' must must be a key of the map '",bo="The String '",S="Expected value not to be undefined but found ",bv="qx.util.ColorUtil",bu=": ",bt="The raised exception does not have the expected type! ",R=") not fired.",U="qx.core.Assert",V="Expected value to be typeof object but found ",Y="' (identical) but found '",bc="' must have any of the values defined in the array '",bf="Expected value to be a number but found ",bl="Called assertFalse with '",bq="]",H="Expected value to be a qooxdoo object but found ",I="' arguments.",T="Expected value not to be null but found ",bi="Array[",bh="' does not match the regular expression '",bg="' to be not identical with '",bn="' arguments but found '",bm="', which cannot be converted to a CSS color!",bd="Expected object '",bk="qx.core.AssertionError",m="Expected value to be a boolean but found ",bp="))!",J="Expected value to be a qooxdoo widget but found ",K="Expected value '%1' to be in the range '%2'..'%3'!",X="Expected value to be typeof '",n="Expected value to be typeof function but found ",o="Expected value to be an integer but found ",Q="Called fail().",L="The parameter 're' must be a string or a regular expression.",M="Expected value to be a number >= 0 but found ",P="Expected value to be instanceof '",ba="Wrong number of arguments given. Expected '",br="object";
qx.Class.define(U,{statics:{__sM:true,__sN:function(dz,dA){var dB=y;

for(var i=1,l=arguments.length;i<l;i++){dB=dB+this.__sO(arguments[i]);
}var dD=bb+dz+bu+dB;

if(this.__sM){qx.Bootstrap.error(dD);
}
if(qx.Class.isDefined(bk)){var dC=new qx.core.AssertionError(dz,dB);

if(this.__sM){qx.Bootstrap.error("Stack trace: \n"+dC.getStackTrace());
}throw dC;
}else{throw new Error(dD);
}},__sO:function(dd){var de;

if(dd===null){de=bj;
}else if(qx.lang.Type.isArray(dd)&&dd.length>10){de=bi+dd.length+bq;
}else if((dd instanceof Object)&&(dd.toString==null)){de=qx.lang.Json.stringify(dd,null,2);
}else{try{de=dd.toString();
}catch(e){de=y;
}}return de;
},assert:function(j,k){j==true||this.__sN(k||y,O);
},fail:function(cM){this.__sN(cM||y,Q);
},assertTrue:function(ck,cl){(ck===true)||this.__sN(cl||y,F,ck,v);
},assertFalse:function(du,dv){(du===false)||this.__sN(dv||y,bl,du,v);
},assertEquals:function(dQ,dR,dS){dQ==dR||this.__sN(dS||y,u,dQ,be,dR,w);
},assertNotEquals:function(dV,dW,dX){dV!=dW||this.__sN(dX||y,u,dV,by,dW,w);
},assertIdentical:function(dM,dN,dO){dM===dN||this.__sN(dO||y,u,dM,Y,dN,w);
},assertNotIdentical:function(cf,cg,ch){cf!==cg||this.__sN(ch||y,u,cf,bg,cg,w);
},assertNotUndefined:function(bR,bS){bR!==undefined||this.__sN(bS||y,S,bR,x);
},assertUndefined:function(db,dc){db===undefined||this.__sN(dc||y,E,db,x);
},assertNotNull:function(ds,dt){ds!==null||this.__sN(dt||y,T,ds,x);
},assertNull:function(dE,dF){dE===null||this.__sN(dF||y,A,dE,x);
},assertJsonEquals:function(dw,dx,dy){this.assertEquals(qx.lang.Json.stringify(dw),qx.lang.Json.stringify(dx),dy);
},assertMatch:function(df,dg,dh){this.assertString(df);
this.assert(qx.lang.Type.isRegExp(dg)||qx.lang.Type.isString(dg),L);
df.search(dg)>=0||this.__sN(dh||y,bo,df,bh,dg.toString(),w);
},assertArgumentsCount:function(c,d,f,g){var h=c.length;
(h>=d&&h<=f)||this.__sN(g||y,ba,d,bx,f,bn,arguments.length,I);
},assertEventFired:function(cF,event,cG,cH,cI){var cK=false;
var cJ=function(e){if(cH){cH.call(cF,e);
}cK=true;
};
var cL=cF.addListener(event,cJ,cF);
cG.call();
cK===true||this.__sN(cI||y,q,event,R);
cF.removeListenerById(cL);
},assertEventNotFired:function(cm,event,cn,co){var cq=false;
var cp=function(e){cq=true;
};
var cr=cm.addListener(event,cp,cm);
cn.call();
cq===false||this.__sN(co||y,q,event,bA);
cm.removeListenerById(cr);
},assertException:function(bX,bY,ca,cb){var bY=bY||Error;
var cc;

try{this.__sM=false;
bX();
}catch(dL){cc=dL;
}finally{this.__sM=true;
}
if(cc==null){this.__sN(cb||y,D);
}cc instanceof bY||this.__sN(cb||y,bt,bY,bD,cc);

if(ca){this.assertMatch(cc.toString(),ca,cb);
}},assertInArray:function(cv,cw,cx){cw.indexOf(cv)!==-1||this.__sN(cx||y,bE,cv,bc,cw,v);
},assertArrayEquals:function(cs,ct,cu){this.assertArray(cs,cu);
this.assertArray(ct,cu);
this.assertEquals(cs.length,ct.length,cu);

for(var i=0;i<cs.length;i++){this.assertIdentical(cs[i],ct[i],cu);
}},assertKeyInMap:function(cA,cB,cC){cB[cA]!==undefined||this.__sN(cC||y,bE,cA,bs,cB,v);
},assertFunction:function(dq,dr){qx.lang.Type.isFunction(dq)||this.__sN(dr||y,n,dq,x);
},assertString:function(cD,cE){qx.lang.Type.isString(cD)||this.__sN(cE||y,W,cD,x);
},assertBoolean:function(cP,cQ){qx.lang.Type.isBoolean(cP)||this.__sN(cQ||y,m,cP,x);
},assertNumber:function(dG,dH){(qx.lang.Type.isNumber(dG)&&isFinite(dG))||this.__sN(dH||y,bf,dG,x);
},assertPositiveNumber:function(cd,ce){(qx.lang.Type.isNumber(cd)&&isFinite(cd)&&cd>=0)||this.__sN(ce||y,M,cd,x);
},assertInteger:function(dT,dU){(qx.lang.Type.isNumber(dT)&&isFinite(dT)&&dT%1===0)||this.__sN(dU||y,o,dT,x);
},assertPositiveInteger:function(bO,bP){var bQ=(qx.lang.Type.isNumber(bO)&&isFinite(bO)&&bO%1===0&&bO>=0);
bQ||this.__sN(bP||y,bz,bO,x);
},assertInRange:function(bT,bU,bV,bW){(bT>=bU&&bT<=bV)||this.__sN(bW||y,qx.lang.String.format(K,[bT,bU,bV]));
},assertObject:function(bG,bH){var bI=bG!==null&&(qx.lang.Type.isObject(bG)||typeof bG===br);
bI||this.__sN(bH||y,V,(bG),x);
},assertArray:function(cV,cW){qx.lang.Type.isArray(cV)||this.__sN(cW||y,bB,cV,x);
},assertMap:function(ci,cj){qx.lang.Type.isObject(ci)||this.__sN(cj||y,G,ci,x);
},assertRegExp:function(bJ,bK){qx.lang.Type.isRegExp(bJ)||this.__sN(bK||y,C,bJ,x);
},assertType:function(dI,dJ,dK){this.assertString(dJ,N);
typeof (dI)===dJ||this.__sN(dK||y,X,dJ,bF,dI,x);
},assertInstance:function(cR,cS,cT){var cU=cS.classname||cS+y;
cR instanceof cS||this.__sN(cT||y,P,cU,bF,cR,x);
},assertInterface:function(bL,bM,bN){qx.Class.implementsInterface(bL,bM)||this.__sN(bN||y,bd,bL,z,bM,w);
},assertCssColor:function(di,dj,dk){var dl=qx.Class.getByName(bv);

if(!dl){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dn=dl.stringToRgb(di);

try{var dm=dl.stringToRgb(dj);
}catch(dP){this.__sN(dk||y,p,di,t,dn.join(s),r,dj,bm);
}var dp=dn[0]==dm[0]&&dn[1]==dm[1]&&dn[2]==dm[2];
dp||this.__sN(dk||y,p,dn,t,dn.join(s),r,dj,t,dm.join(s),bp);
},assertElement:function(a,b){!!(a&&a.nodeType===1)||this.__sN(b||y,B,a,w);
},assertQxObject:function(cN,cO){this.__sP(cN,bC)||this.__sN(cO||y,H,cN,x);
},assertQxWidget:function(cy,cz){this.__sP(cy,bw)||this.__sN(cz||y,J,cy,x);
},__sP:function(cX,cY){if(!cX){return false;
}var da=cX.constructor;

while(da){if(da.classname===cY){return true;
}da=da.superclass;
}return false;
}}});
})();
(function(){var s='',r='"',q=':',p=']',o='null',m=': ',l='object',h='function',g=',',f='\n',bd='\\u',bc=',\n',bb='0000',ba='string',Y="Cannot stringify a recursive object.",X='0',W='-',V='}',U='String',T='Boolean',A='\\\\',B='\\f',y='\\t',z='{\n',w='[]',x="qx.lang.JsonImpl",t='Z',u='\\n',C='Object',D='{}',K='@',I='.',N='(',M='Array',P='T',O='\\r',F='{',S='JSON.parse',R=' ',Q='[',E='Number',G=')',H='[\n',J='\\"',L='\\b';
qx.Class.define(x,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__sS:null,__sT:null,__sU:null,__sV:null,stringify:function(br,bs,bt){this.__sS=s;
this.__sT=s;
this.__sV=[];

if(qx.lang.Type.isNumber(bt)){var bt=Math.min(10,Math.floor(bt));

for(var i=0;i<bt;i+=1){this.__sT+=R;
}}else if(qx.lang.Type.isString(bt)){if(bt.length>10){bt=bt.slice(0,10);
}this.__sT=bt;
}if(bs&&(qx.lang.Type.isFunction(bs)||qx.lang.Type.isArray(bs))){this.__sU=bs;
}else{this.__sU=null;
}return this.__sW(s,{'':br});
},__sW:function(bl,bm){var bp=this.__sS,bn,bq=bm[bl];
if(bq&&qx.lang.Type.isFunction(bq.toJSON)){bq=bq.toJSON(bl);
}else if(qx.lang.Type.isDate(bq)){bq=this.dateToJSON(bq);
}if(typeof this.__sU===h){bq=this.__sU.call(bm,bl,bq);
}
if(bq===null){return o;
}
if(bq===undefined){return undefined;
}switch(qx.lang.Type.getClass(bq)){case U:return this.__sX(bq);
case E:return isFinite(bq)?String(bq):o;
case T:return String(bq);
case M:this.__sS+=this.__sT;
bn=[];

if(this.__sV.indexOf(bq)!==-1){throw new TypeError(Y);
}this.__sV.push(bq);
var length=bq.length;

for(var i=0;i<length;i+=1){bn[i]=this.__sW(i,bq)||o;
}this.__sV.pop();
if(bn.length===0){var bo=w;
}else if(this.__sS){bo=H+this.__sS+bn.join(bc+this.__sS)+f+bp+p;
}else{bo=Q+bn.join(g)+p;
}this.__sS=bp;
return bo;
case C:this.__sS+=this.__sT;
bn=[];

if(this.__sV.indexOf(bq)!==-1){throw new TypeError(Y);
}this.__sV.push(bq);
if(this.__sU&&typeof this.__sU===l){var length=this.__sU.length;

for(var i=0;i<length;i+=1){var k=this.__sU[i];

if(typeof k===ba){var v=this.__sW(k,bq);

if(v){bn.push(this.__sX(k)+(this.__sS?m:q)+v);
}}}}else{for(var k in bq){if(Object.hasOwnProperty.call(bq,k)){var v=this.__sW(k,bq);

if(v){bn.push(this.__sX(k)+(this.__sS?m:q)+v);
}}}}this.__sV.pop();
if(bn.length===0){var bo=D;
}else if(this.__sS){bo=z+this.__sS+bn.join(bc+this.__sS)+f+bp+V;
}else{bo=F+bn.join(g)+V;
}this.__sS=bp;
return bo;
}},dateToJSON:function(b){var d=function(n){return n<10?X+n:n;
};
var e=function(n){var bu=d(n);
return n<100?X+bu:bu;
};
return isFinite(b.valueOf())?b.getUTCFullYear()+W+d(b.getUTCMonth()+1)+W+d(b.getUTCDate())+P+d(b.getUTCHours())+q+d(b.getUTCMinutes())+q+d(b.getUTCSeconds())+I+e(b.getUTCMilliseconds())+t:null;
},__sX:function(be){var bf={'\b':L,'\t':y,'\n':u,'\f':B,'\r':O,'"':J,'\\':A};
var bg=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bg.lastIndex=0;

if(bg.test(be)){return r+
be.replace(bg,function(a){var c=bf[a];
return typeof c===ba?c:bd+(bb+a.charCodeAt(0).toString(16)).slice(-4);
})+r;
}else{return r+be+r;
}},parse:function(bv,bw){var bx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bx.lastIndex=0;
if(bx.test(bv)){bv=bv.replace(bx,function(a){return bd+(bb+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bv.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,K).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,p).replace(/(?:^|:|,)(?:\s*\[)+/g,s))){var j=eval(N+bv+G);
return typeof bw===h?this.__sY({'':j},s,bw):j;
}throw new SyntaxError(S);
},__sY:function(bh,bi,bj){var bk=bh[bi];

if(bk&&typeof bk===l){for(var k in bk){if(Object.hasOwnProperty.call(bk,k)){var v=this.__sY(bk,k,bj);

if(v!==undefined){bk[k]=v;
}else{delete bk[k];
}}}}return bj.call(bh,bi,bk);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var c="qx.util.TimerManager",b="interval",a="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:a,statics:{__FD:[],__FE:{},__FF:0},members:{__FG:false,start:function(d,e,f,g,h){if(!h){h=e||0;
}var j=(new Date()).getTime()+h;
this.self(arguments).__FE[++this.self(arguments).__FF]={callback:d,userData:g||null,expireAt:j,recurTime:e,context:f||this};
this.__FH(j,this.self(arguments).__FF);
return this.self(arguments).__FF;
},stop:function(q){var r=this.self(arguments).__FD;
var length=r.length;

for(var i=0;i<length;i++){if(r[i]==q){r.splice(i,1);
break;
}}delete this.self(arguments).__FE[q];
if(r.length==0&&this.__FG){qx.event.Idle.getInstance().removeListener(b,this.__FI,this);
this.__FG=false;
}},__FH:function(s,t){var v=this.self(arguments).__FD;
var u=this.self(arguments).__FE;
var length=v.length;

for(var i=0;i<length;i++){if(u[v[i]].expireAt>s){v.splice(i,0,t);
break;
}}if(v.length==length){v.push(t);
}if(!this.__FG){qx.event.Idle.getInstance().addListener("interval",this.__FI,this);
this.__FG=true;
}},__FI:function(){var n=(new Date()).getTime();
var l=this.self(arguments).__FD;
var m=this.self(arguments).__FE;
while(l.length>0&&m[l[0]].expireAt<=n){var p=l.shift();
var k=m[p];
k.callback.call(k.context,k.userData,p);
if(k.recurTime&&m[p]){var o=(new Date()).getTime();
k.expireAt=o+k.recurTime;
this.__FH(k.expireAt,p);
}else{delete m[p];
}}if(l.length==0&&this.__FG){qx.event.Idle.getInstance().removeListener("interval",this.__FI,this);
this.__FG=false;
}}}});
})();
(function(){var w='g',v="==",u=">",t="notregex",s="between",r="<",q="regex",p='gi',o="!between",n=">=",k="dataChanged",m="!=",l="<=",j="qx.ui.table.model.Filtered",h='';
qx.Class.define(j,{extend:qx.ui.table.model.Simple,construct:function(){qx.ui.table.model.Simple.call(this);
this.numericAllowed=new Array(v,m,u,r,n,l);
this.betweenAllowed=new Array(s,o);
this.__zk=false;
this.Filters=new Array();
},members:{__zl:null,__zk:null,_js_in_array:function(D,E){var F=E.toString();

if(F==h){return false;
}var H=new RegExp(D,w);
var G=H.test(E);
return G;
},addBetweenFilter:function(I,J,K,L){if(this._js_in_array(I,this.betweenAllowed)&&L!=null){if(J!=null&&K!=null){var M=new Array(I,J,K,L);
}}
if(M!=null){this.Filters.push(M);
}else{throw new Error("Filter not recognized or value1/value2 is null!");
}},addNumericFilter:function(z,A,B){var C=null;

if(this._js_in_array(z,this.numericAllowed)&&B!=null){if(A!=null){C=[z,A,B];
}}
if(C!=null){this.Filters.push(C);
}else{throw new Error("Filter not recognized: value or target is null!");
}},addRegex:function(X,Y,ba){var bc;

if(ba){bc=p;
}else{bc=w;
}
if(X!=null&&Y!=null){var bb=new Array(q,X,Y,bc);
}
if(bb!=null){this.Filters.push(bb);
}else{throw new Error("regex cannot be null!");
}},addNotRegex:function(S,T,U){var W;

if(U){W=p;
}else{W=w;
}
if(S!=null&&T!=null){var V=new Array(t,S,T,W);
}
if(V!=null){this.Filters.push(V);
}else{throw new Error("notregex cannot be null!");
}},applyFilters:function(){var i;
var e;
var a;
var d=this.getData();
var b=d.length;

for(var g=0;g<b;g++){e=false;

for(i in this.Filters){if(this._js_in_array(this.Filters[i][0],this.numericAllowed)&&e==false){a=this.getValueById(this.Filters[i][2],g);

switch(this.Filters[i][0]){case v:if(a==this.Filters[i][1]){e=true;
}break;
case m:if(a!=this.Filters[i][1]){e=true;
}break;
case u:if(a>this.Filters[i][1]){e=true;
}break;
case r:if(a<this.Filters[i][1]){e=true;
}break;
case n:if(a>=this.Filters[i][1]){e=true;
}break;
case l:if(a<=this.Filters[i][1]){e=true;
}break;
}}else if(this._js_in_array(this.Filters[i][0],this.betweenAllowed)&&e==false){a=this.getValueById(this.Filters[i][3],g);

switch(this.Filters[i][0]){case s:if(a>=this.Filters[i][1]&&a<=this.Filters[i][2]){e=true;
}break;
case o:if(a<this.Filters[i][1]&&a>this.Filters[i][2]){e=true;
}break;
}}else if(this.Filters[i][0]==q&&e==false){a=this.getValueById(this.Filters[i][2],g);
var c=new RegExp(this.Filters[i][1],this.Filters[i][3]);
e=c.test(a);
}else if(this.Filters[i][0]==t&&e==false){a=this.getValueById(this.Filters[i][2],g);
var c=new RegExp(this.Filters[i][1],this.Filters[i][3]);
e=!c.test(a);
}}if(e==true){this.hideRows(g,1,false);
g--;
b--;
}}var f={firstRow:0,lastRow:b-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(k,f);
},hideRows:function(N,O,dispatchEvent){var Q=this.getData();
dispatchEvent=(dispatchEvent!=null?dispatchEvent:true);

if(!this.__zk){this.__zl=Q.slice(0);
this.__zk=true;
}
if(O==null||O<1){O=1;
}
for(var P=N;P<(Q.length-O);P++){Q[P]=Q[P+O];
}this.removeRows(P,O);
if(dispatchEvent){var R={firstRow:0,lastRow:Q.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(k,R);
}},resetHiddenRows:function(){if(!this.__zl){return ;
}this.Filters=[];
this.setData(qx.lang.Array.clone(this.__zl));
},setData:function(x,y){this.__zl=qx.lang.Array.clone(x);
this.Filters=[];
qx.ui.table.model.Simple.prototype.setData.call(this,x,y);
}},destruct:function(){this.__zl=this.numericAllowed=this.betweenAllowed=this.Filters=null;
}});
})();
(function(){var c="",b="inspector.objects.table.AbstractModel",a="Classname";
qx.Class.define(b,{extend:qx.ui.table.model.Filtered,construct:function(d,e){qx.ui.table.model.Filtered.call(this);
this._model=d;
this.setColumns(e);
this.setData(this._getData());
},members:{__Pb:c,_model:null,_getData:function(){throw Error("Abstract Method call!");
},reload:function(){this.setData(this._getData());
this.filter(this.__Pb);
},filter:function(f){this.__Pb=f;
this.resetHiddenRows();

if(f!=c){this.addNotRegex(f,a,true);
this.applyFilters();
}}},destruct:function(){this._model=null;
}});
})();
(function(){var c="inspector.objects.table.HashModel",b="Classname",a="Hash";
qx.Class.define(c,{extend:inspector.objects.table.AbstractModel,construct:function(g){inspector.objects.table.AbstractModel.call(this,g,[a,b]);
},members:{_getData:function(){var d=this._model.getObjects();
var e=[];

for(var i=0;i<d.length;i++){var f=d[i];
e.push([parseInt(f.toHashCode()),f.classname]);
}return e;
}}});
})();
(function(){var e="Count",d="inspector.objects.table.CountModel",c="Classname";
qx.Class.define(d,{extend:inspector.objects.table.AbstractModel,construct:function(f){inspector.objects.table.AbstractModel.call(this,f,[e,c]);
},members:{_getData:function(){var j=this._model.getObjects();
var h={};

for(var i=0;i<j.length;i++){var g=j[i].classname;

if(h[g]===undefined){h[g]=0;
}h[g]++;
}var k=[];

for(var g in h){k.push([h[g],g]);
}k.sort(function(a,b){return a[0]<b[0];
});
return k;
}}});
})();
(function(){var c="changeApplication",b="inspector.widgets.WidgetsWindow",a="changeInspected";
qx.Class.define(b,{extend:inspector.components.AbstractWindow,construct:function(name,i){inspector.components.AbstractWindow.call(this,name,i);
this.__Pc=new inspector.widgets.View(this._model);
this.add(this.__Pc,{edge:0});
this.__Pd=this._model.addListener(c,function(e){this.load();
},this);
this.__Pe=this._model.addListener(a,function(e){this.select(e.getData());
},this);
},members:{__Pc:null,__Pd:null,__Pe:null,setInitSizeAndPosition:function(){var h=qx.bom.Viewport.getWidth()-this.getWidth();
var g=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(h,30+g);
this.setHeight(g);
},select:function(d){this.__Pc.select(d);
},load:function(f){this.__Pc.load(f);
}},destruct:function(){this._model.removeListenerById(this.__Pd);
this._model.removeListenerById(this.__Pe);
this.__Pc.dispose();
this.__Pc=null;
}});
})();
(function(){var p="instance",o="]",n='id',h=" [",g='instance',f="changeOpen",d="_getChildren",c="getChildren",b="click",a="_reloadButton",C="inspector.widgets.View",B="_structureToggle",A="qx.ui.root.Inline",z="qx.ui.root.Application",y="changeSelection",x="qx.ui.root.Page",v="icon/22/actions/view-refresh.png",u="Display internal widget structure.",t="Reload the window.",s="_tree",q="Root Node",r="icon/22/actions/document-properties.png";
qx.Class.define(C,{extend:inspector.components.AbstractView,construct:function(bk){inspector.components.AbstractView.call(this);
this._model=bk;
this._reloadButton=new qx.ui.toolbar.Button(null,v);
this._reloadButton.setToolTipText(t);
this._toolbar.add(this._reloadButton);
this._reloadButton.addListener(b,this._reload,this);
this._toolbar.addSpacer();
this._structureToggle=new qx.ui.toolbar.CheckBox(null,r);
this._structureToggle.setToolTipText(u);
this._structureToggle.addListener(b,this._reload,this);
this._toolbar.add(this._structureToggle);
this._structureToggle.setValue(false);
this._tree=new qx.ui.tree.Tree();
this._tree.setDecorator(null);
this._tree.setRootOpenClose(true);
this.add(this._tree,{flex:1});
this._tree.addListener(y,function(e){if(e.getData()[0]){var M=e.getData()[0].getUserData(p);
this._model.setInspected(M);
}},this);
},members:{_model:null,select:function(T){this._selectWidgetInTheTree(T,true);
},getSelection:function(){var L=this._tree.getSelection()[0];
if(L!=null){return L.getUserData(p);
}return null;
},load:function(D){if(D==undefined){this._iFrameWindow=this._model.getWindow();
}else{this._iFrameWindow=D;
}
if(this._iFrameWindow==null){return;
}var F=this._iFrameWindow.qx.core.Init.getApplication().getRoot();
if(F.classname==z){var K=new qx.ui.tree.TreeFolder(F.classname+h+F.toHashCode()+o);
K.setUserData(p,F);
this._tree.setRoot(K);
this._fillTree(F,K,2);
}else if(F.classname==x){var K=new qx.ui.tree.TreeFolder(q);
this._tree.setRoot(K);
this._tree.setHideRoot(true);
var E=new qx.ui.tree.TreeFolder(F.classname+h+F.toHashCode()+o);
E.setUserData(p,F);
E.setUserData(n,F.toHashCode());
K.add(E);
this._fillTree(F,E,2);
var I=this._iFrameWindow.qx.core.ObjectRegistry.getRegistry();

for(var J in I){var H=I[J];

if(H.classname==A){var G=new qx.ui.tree.TreeFolder(H.classname+h+H.toHashCode()+o);
G.setUserData(p,H);
G.setUserData(n,G.toHashCode());
K.add(G);
this._fillTree(H,G,2);
}}}},_reload:function(){this.load();
var bf=this._model.getInspected();

if(bf!=null){this._selectWidgetInTheTree(bf,false);
}},_fillTree:function(U,V,W){var bc=V.getItems(false,true);
var X=this._structureToggle.isValue()?d:c;
if(U[X]==undefined){if(X===c){X=d;

if(U[X]==undefined){return;
}}else{return;
}}if(U[X]().length==0){if(bc.length>1){for(var m=0;m<bc.length;m++){if(bc[m+1]==this._tree.getSelection()[0]){this._tree.resetSelection();
}V.removeAt(0);
}}}var bd=this._model.getExcludes();
var i=0;
W--;
for(var k=0;k<U[X]().length;k++){var ba=U[X]()[k];
var Y=false;

for(var j=0;j<bd.length;j++){if(ba==bd[j]){Y=true;
break;
}}if(Y){continue;
}if(bc[i]==null){var be=new qx.ui.tree.TreeFolder(ba.classname+h+ba.toHashCode()+o);
be.setIcon(inspector.widgets.Util.getIconPath(ba.classname));
V.addAt(be,i);
be.setUserData(g,ba);
be.setUserData(n,ba.toHashCode());
be.addListener(f,this._treeOpenHandler,this);
}else{if(bc[i].getLabel()==ba.classname+h+ba.toHashCode()+o){var be=bc[i];
}else{if(V.getItems()[i]!=null){if(V.getItems()[i]==this._tree.getSelection()[0]){this._tree.resetSelection();
}}V.removeAt(i);
var be=new qx.ui.tree.TreeFolder(ba.classname+h+ba.toHashCode()+o);
V.addAt(be,i);
be.setUserData(g,ba);
be.setUserData(n,ba.toHashCode());
be.addListener(f,this._treeOpenHandler,this);
}}if(W>0){this._fillTree(ba,be,W);
}if(i+1==U[X]().length){var bb=V.getItems(false,true);
if(bb.length-2!=i){for(var l=i+1;l<bb.length;l++){V.removeAt(i+1);
}}}i++;
}},_treeOpenHandler:function(e){if(e.getData()){var bj=e.getTarget().getUserData(g);
this._fillTree(bj,e.getTarget(),2);
}},_selectWidgetInTheTree:function(N,O){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
if(N==null||!(N instanceof this._iFrameWindow.qx.ui.core.Widget)){this._tree.resetSelection();
return;
}var Q=[];
var w=N;

if(this._structureToggle.isValue()){while(w.getLayoutParent()!=null){Q.push(w);
w=w.getLayoutParent();
}}else{while(w.getParent!=undefined&&w.getParent()!=null||w.getLayoutParent()!=null){if(w.getParent!=undefined&&w.getParent()!=null){Q.push(w);
w=w.getParent();
}else if(w.getLayoutParent()!=null){Q.push(w);
w=w.getLayoutParent();
}}}for(var i=Q.length-1;i>0;i--){this._openFolder(Q[i]);
}this._tree.getRoot().setOpen(true);
var S=N.toHashCode();
var P=this._tree.getItems(true,true);
var R=false;
if(this._tree.getRoot().getUserData(p)!=null&&this._tree.getRoot().getUserData(p).toHashCode()==S){this._tree.resetSelection();
this._tree.addToSelection(this._tree.getRoot());
return;
}for(var i=0;i<P.length;i++){if(P[i].getUserData(n)==S){R=true;
this._tree.resetSelection();
this._tree.addToSelection(P[i]);
break;
}}if(!R){this._tree.resetSelection();

if(O==true&&!this._structureToggle.isValue()){this._structureToggle.toggleValue();
this._reload();
}}},_openFolder:function(bg){var bi=bg.toHashCode();
var bh=this._tree.getItems(true,true);
if(this._tree.getRoot().getUserData(p)!=null&&this._tree.getRoot().getUserData(p).toHashCode()==bi){this._tree.resetSelection();
this._tree.addToSelection(this._tree.getRoot());
return ;
}for(var i=0;i<bh.length;i++){if(bh[i].getUserData(n)==bi){bh[i].setOpen(true);
break;
}}}},destruct:function(){this._model=null;
this._iFrameWindow=null;
this._disposeObjects(a,B,s);
}});
})();
(function(){var X="scrollbar-y",W="scrollbar-x",V="pane",U="auto",T="corner",S="on",R="changeVisibility",Q="scroll",P="_computeScrollbars",O="off",H="scrollY",N="qx.ui.core.scroll.AbstractScrollArea",K="abstract",F="update",E="scrollX",J="mousewheel",I="scrollbarY",L="scrollbarX",D="horizontal",M="scrollarea",G="vertical";
qx.Class.define(N,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:K,construct:function(){qx.ui.core.Widget.call(this);
var a=new qx.ui.layout.Grid();
a.setColumnFlex(0,1);
a.setRowFlex(0,1);
this._setLayout(a);
this.addListener(J,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:M},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[U,S,O],init:U,themeable:true,apply:P},scrollbarY:{check:[U,S,O],init:U,themeable:true,apply:P},scrollbar:{group:[L,I]}},members:{_createChildControlImpl:function(z){var A;

switch(z){case V:A=new qx.ui.core.scroll.ScrollPane();
A.addListener(F,this._computeScrollbars,this);
A.addListener(E,this._onScrollPaneX,this);
A.addListener(H,this._onScrollPaneY,this);
this._add(A,{row:0,column:0});
break;
case W:A=this._createScrollBar(D);
A.setMinWidth(0);
A.exclude();
A.addListener(Q,this._onScrollBarX,this);
A.addListener(R,this._onChangeScrollbarXVisibility,this);
this._add(A,{row:1,column:0});
break;
case X:A=this._createScrollBar(G);
A.setMinHeight(0);
A.exclude();
A.addListener(Q,this._onScrollBarY,this);
A.addListener(R,this._onChangeScrollbarYVisibility,this);
this._add(A,{row:0,column:1});
break;
case T:A=new qx.ui.core.Widget();
A.setWidth(0);
A.setHeight(0);
A.exclude();
this._add(A,{row:1,column:1});
break;
}return A||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,z);
},getPaneSize:function(){return this.getChildControl(V).getInnerSize();
},getItemTop:function(v){return this.getChildControl(V).getItemTop(v);
},getItemBottom:function(Y){return this.getChildControl(V).getItemBottom(Y);
},getItemLeft:function(w){return this.getChildControl(V).getItemLeft(w);
},getItemRight:function(t){return this.getChildControl(V).getItemRight(t);
},scrollToX:function(ba){qx.ui.core.queue.Manager.flush();
this.getChildControl(W).scrollTo(ba);
},scrollByX:function(x){qx.ui.core.queue.Manager.flush();
this.getChildControl(W).scrollBy(x);
},getScrollX:function(){var f=this.getChildControl(W,true);
return f?f.getPosition():0;
},scrollToY:function(y){qx.ui.core.queue.Manager.flush();
this.getChildControl(X).scrollTo(y);
},scrollByY:function(u){qx.ui.core.queue.Manager.flush();
this.getChildControl(X).scrollBy(u);
},getScrollY:function(){var g=this.getChildControl(X,true);
return g?g.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(V).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(V).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var c=this._isChildControlVisible(W);
var d=this._isChildControlVisible(X);
var b=(d)?this.getChildControl(X,true):(c?this.getChildControl(W,true):null);

if(b){b.scrollBySteps(e.getWheelDelta());
e.stop();
}},_onChangeScrollbarXVisibility:function(e){var B=this._isChildControlVisible(W);
var C=this._isChildControlVisible(X);

if(!B){this.scrollToX(0);
}B&&C?this._showChildControl(T):this._excludeChildControl(T);
},_onChangeScrollbarYVisibility:function(e){var h=this._isChildControlVisible(W);
var i=this._isChildControlVisible(X);

if(!i){this.scrollToY(0);
}h&&i?this._showChildControl(T):this._excludeChildControl(T);
},_computeScrollbars:function(){var p=this.getChildControl(V);
var content=p.getChildren()[0];

if(!content){this._excludeChildControl(W);
this._excludeChildControl(X);
return;
}var j=this.getInnerSize();
var o=p.getInnerSize();
var m=p.getScrollSize();
if(!o||!m){return;
}var q=this.getScrollbarX();
var r=this.getScrollbarY();

if(q===U&&r===U){var n=m.width>j.width;
var s=m.height>j.height;
if((n||s)&&!(n&&s)){if(n){s=m.height>o.height;
}else if(s){n=m.width>o.width;
}}}else{var n=q===S;
var s=r===S;
if(m.width>(n?o.width:j.width)&&q===U){n=true;
}
if(m.height>(n?o.height:j.height)&&r===U){s=true;
}}if(n){var l=this.getChildControl(W);
l.show();
l.setMaximum(Math.max(0,m.width-o.width));
l.setKnobFactor((m.width===0)?0:o.width/m.width);
}else{this._excludeChildControl(W);
}
if(s){var k=this.getChildControl(X);
k.show();
k.setMaximum(Math.max(0,m.height-o.height));
k.setKnobFactor((m.height===0)?0:o.height/m.height);
}else{this._excludeChildControl(X);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var I="single",H="Boolean",G="one",F="changeSelection",E="mouseup",D="mousedown",C="losecapture",B="multi",A="_applyQuickSelection",z="mouseover",s="_applySelectionMode",y="__mO",v="_applyDragSelection",r="qx.ui.core.MMultiSelectionHandling",q="removeItem",u="keypress",t="qx.event.type.Data",w="addItem",p="additive",x="mousemove";
qx.Mixin.define(r,{construct:function(){var n=this.SELECTION_MANAGER;
var m=this.__mO=new n(this);
this.addListener(D,m.handleMouseDown,m);
this.addListener(E,m.handleMouseUp,m);
this.addListener(z,m.handleMouseOver,m);
this.addListener(x,m.handleMouseMove,m);
this.addListener(C,m.handleLoseCapture,m);
this.addListener(u,m.handleKeyPress,m);
this.addListener(w,m.handleAddItem,m);
this.addListener(q,m.handleRemoveItem,m);
m.addListener(F,this._onSelectionChange,this);
},events:{"changeSelection":t},properties:{selectionMode:{check:[I,B,p,G],init:I,apply:s},dragSelection:{check:H,init:false,apply:v},quickSelection:{check:H,init:false,apply:A}},members:{__mO:null,selectAll:function(){this.__mO.selectAll();
},isSelected:function(L){if(!qx.ui.core.Widget.contains(this,L)){throw new Error("Could not test if "+L+" is selected, because it is not a child element!");
}return this.__mO.isItemSelected(L);
},addToSelection:function(o){if(!qx.ui.core.Widget.contains(this,o)){throw new Error("Could not add + "+o+" to selection, because it is not a child element!");
}this.__mO.addItem(o);
},removeFromSelection:function(h){if(!qx.ui.core.Widget.contains(this,h)){throw new Error("Could not remove "+h+" from selection, because it is not a child element!");
}this.__mO.removeItem(h);
},selectRange:function(f,g){this.__mO.selectItemRange(f,g);
},resetSelection:function(){this.__mO.clearSelection();
},setSelection:function(a){for(var i=0;i<a.length;i++){if(!qx.ui.core.Widget.contains(this,a[i])){throw new Error("Could not select "+a[i]+", because it is not a child element!");
}}
if(a.length===0){this.resetSelection();
}else{var b=this.getSelection();

if(!qx.lang.Array.equals(b,a)){this.__mO.replaceSelection(a);
}}},getSelection:function(){return this.__mO.getSelection();
},getSortedSelection:function(){return this.__mO.getSortedSelection();
},isSelectionEmpty:function(){return this.__mO.isSelectionEmpty();
},getSelectionContext:function(){return this.__mO.getSelectionContext();
},_getManager:function(){return this.__mO;
},getSelectables:function(M){return this.__mO.getSelectables(M);
},invertSelection:function(){this.__mO.invertSelection();
},_getLeadItem:function(){var l=this.__mO.getMode();

if(l===I||l===G){return this.__mO.getSelectedItem();
}else{return this.__mO.getLeadItem();
}},_applySelectionMode:function(j,k){this.__mO.setMode(j);
},_applyDragSelection:function(c,d){this.__mO.setDrag(c);
},_applyQuickSelection:function(J,K){this.__mO.setQuick(J);
},_onSelectionChange:function(e){this.fireDataEvent(F,e.getData());
}},destruct:function(){this._disposeObjects(y);
}});
})();
(function(){var E="one",D="single",C="selected",B="additive",A="multi",z="PageUp",y="under",x="Left",w="lead",v="Down",bd="Up",bc="Boolean",bb="PageDown",ba="anchor",Y="End",X="Home",W="Right",V="right",U="click",T="above",L="left",M="Escape",J="A",K="Space",H="_applyMode",I="interval",F="changeSelection",G="qx.event.type.Data",N="quick",O="key",Q="__or",P="abstract",S="drag",R="qx.ui.core.selection.Abstract";
qx.Class.define(R,{type:P,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oo={};
},events:{"changeSelection":G},properties:{mode:{check:[D,A,B,E],init:D,apply:H},drag:{check:bc,init:false},quick:{check:bc,init:false}},members:{__op:0,__oq:0,__or:null,__os:null,__ot:null,__ou:null,__ov:null,__ow:null,__ox:null,__oy:null,__oz:null,__oA:null,__oB:null,__oC:null,__oD:null,__oE:null,__oF:null,__oo:null,__oG:null,__oH:null,_userInteraction:false,__oI:null,getSelectionContext:function(){return this.__oE;
},selectAll:function(){var cU=this.getMode();

if(cU==D||cU==E){throw new Error("Can not select all items in selection mode: "+cU);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cr){this._setSelectedItem(cr);
var cs=this.getMode();

if(cs!==D&&cs!==E){this._setLeadItem(cr);
this._setAnchorItem(cr);
}this._scrollItemIntoView(cr);
this._fireChange();
},addItem:function(bB){var bC=this.getMode();

if(bC===D||bC===E){this._setSelectedItem(bB);
}else{if(!this._getAnchorItem()){this._setAnchorItem(bB);
}this._setLeadItem(bB);
this._addToSelection(bB);
}this._scrollItemIntoView(bB);
this._fireChange();
},removeItem:function(t){this._removeFromSelection(t);

if(this.getMode()===E&&this.isSelectionEmpty()){var u=this._getFirstSelectable();

if(u){this.addItem(u);
}if(u==t){return;
}}
if(this.getLeadItem()==t){this._setLeadItem(null);
}
if(this._getAnchorItem()==t){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(cv,cw){var cx=this.getMode();

if(cx==D||cx==E){throw new Error("Can not select multiple items in selection mode: "+cx);
}this._selectItemRange(cv,cw);
this._setAnchorItem(cv);
this._setLeadItem(cw);
this._scrollItemIntoView(cw);
this._fireChange();
},clearSelection:function(){if(this.getMode()==E){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bq){var br=this.getMode();

if(br==E||br===D){if(bq.length>1){throw new Error("Could not select more than one items in mode: "+br+"!");
}
if(bq.length==1){this.selectItem(bq[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bq);
}},getSelectedItem:function(){var s=this.getMode();

if(s===D||s===E){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__oo);
},getSortedSelection:function(){var cj=this.getSelectables();
var ci=qx.lang.Object.getValues(this.__oo);
ci.sort(function(a,b){return cj.indexOf(a)-cj.indexOf(b);
});
return ci;
},isItemSelected:function(bs){var bt=this._selectableToHashCode(bs);
return this.__oo[bt]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__oo);
},invertSelection:function(){var cW=this.getMode();

if(cW===D||cW===E){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var cV=this.getSelectables();

for(var i=0;i<cV.length;i++){this._toggleInSelection(cV[i]);
}this._fireChange();
},_setLeadItem:function(cS){var cT=this.__oF;

if(cT!==null){this._styleSelectable(cT,w,false);
}
if(cS!==null){this._styleSelectable(cS,w,true);
}this.__oF=cS;
},getLeadItem:function(){return this.__oF!==null?this.__oF:null;
},_setAnchorItem:function(cX){var cY=this.__oG;

if(cY){this._styleSelectable(cY,ba,false);
}
if(cX){this._styleSelectable(cX,ba,true);
}this.__oG=cX;
},_getAnchorItem:function(){return this.__oG!==null?this.__oG:null;
},_isSelectable:function(cP){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bE=event.getTarget();
if(bE&&this._isSelectable(bE)){return bE;
}return null;
},_selectableToHashCode:function(cL){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bw,bx,by){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bm){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(cR){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bS,bT){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bD){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(cQ){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bW,bX){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bU,bV){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(ck,cl){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bh,bi){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bh===E){var bj=this._getFirstSelectable();

if(bj){this._setSelectedItem(bj);
this._scrollItemIntoView(bj);
}}this._fireChange();
},handleMouseOver:function(event){if(this.__oI!=null&&this.__oI!=this._getScroll().top){this.__oI=null;
return;
}this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var cq=this.getMode();

if(cq!==E&&cq!==D){this._userInteraction=false;
return;
}var cp=this._getSelectableFromMouseEvent(event);

if(cp===null){this._userInteraction=false;
return;
}this._setSelectedItem(cp);
this._fireChange(N);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bO=this._getSelectableFromMouseEvent(event);

if(bO===null){this._userInteraction=false;
return;
}var bQ=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bN=event.isShiftPressed();
if(this.isItemSelected(bO)&&!bN&&!bQ&&!this.getDrag()){this.__oH=bO;
this._userInteraction=false;
return;
}else{this.__oH=null;
}this._scrollItemIntoView(bO);
switch(this.getMode()){case D:case E:this._setSelectedItem(bO);
break;
case B:this._setLeadItem(bO);
this._setAnchorItem(bO);
this._toggleInSelection(bO);
break;
case A:this._setLeadItem(bO);
if(bN){var bP=this._getAnchorItem();

if(bP===null){bP=this._getFirstSelectable();
this._setAnchorItem(bP);
}this._selectItemRange(bP,bO,bQ);
}else if(bQ){this._setAnchorItem(bO);
this._toggleInSelection(bO);
}else{this._setAnchorItem(bO);
this._setSelectedItem(bO);
}break;
}var bR=this.getMode();

if(this.getDrag()&&bR!==D&&bR!==E&&!bN&&!bQ){this.__ov=this._getLocation();
this.__os=this._getScroll();
this.__ow=event.getDocumentLeft()+this.__os.left;
this.__ox=event.getDocumentTop()+this.__os.top;
this.__oy=true;
this._capture();
}this._fireChange(U);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var r=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var o=event.isShiftPressed();

if(!r&&!o&&this.__oH){var p=this._getSelectableFromMouseEvent(event);

if(p===null||!this.isItemSelected(p)){this._userInteraction=false;
return;
}var q=this.getMode();

if(q===B){this._removeFromSelection(p);
}else{this._setSelectedItem(p);

if(this.getMode()===A){this._setLeadItem(p);
this._setAnchorItem(p);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__oy){return;
}this.__oz=event.getDocumentLeft();
this.__oA=event.getDocumentTop();
this._userInteraction=true;
var cu=this.__oz+this.__os.left;

if(cu>this.__ow){this.__oB=1;
}else if(cu<this.__ow){this.__oB=-1;
}else{this.__oB=0;
}var ct=this.__oA+this.__os.top;

if(ct>this.__ox){this.__oC=1;
}else if(ct<this.__ox){this.__oC=-1;
}else{this.__oC=0;
}var location=this.__ov;

if(this.__oz<location.left){this.__op=this.__oz-location.left;
}else if(this.__oz>location.right){this.__op=this.__oz-location.right;
}else{this.__op=0;
}
if(this.__oA<location.top){this.__oq=this.__oA-location.top;
}else if(this.__oA>location.bottom){this.__oq=this.__oA-location.bottom;
}else{this.__oq=0;
}if(!this.__or){this.__or=new qx.event.Timer(100);
this.__or.addListener(I,this._onInterval,this);
}this.__or.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var cK=e.getData();

if(this.getMode()===E&&this.isSelectionEmpty()){this.addItem(cK);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__oy){return;
}if(this.__oD){this._fireChange(U);
}delete this.__oy;
delete this.__ot;
delete this.__ou;
this._releaseCapture();
if(this.__or){this.__or.stop();
}},_onInterval:function(e){this._scrollBy(this.__op,this.__oq);
this.__os=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cG=this._getDimension();
var cz=Math.max(0,Math.min(this.__oz-this.__ov.left,cG.width))+this.__os.left;
var cy=Math.max(0,Math.min(this.__oA-this.__ov.top,cG.height))+this.__os.top;
if(this.__ot===cz&&this.__ou===cy){return;
}this.__ot=cz;
this.__ou=cy;
var cI=this._getAnchorItem();
var cB=cI;
var cE=this.__oB;
var cH,cA;

while(cE!==0){cH=cE>0?this._getRelatedSelectable(cB,V):this._getRelatedSelectable(cB,L);
if(cH!==null){cA=this._getSelectableLocationX(cH);
if((cE>0&&cA.left<=cz)||(cE<0&&cA.right>=cz)){cB=cH;
continue;
}}break;
}var cF=this.__oC;
var cD,cC;

while(cF!==0){cD=cF>0?this._getRelatedSelectable(cB,y):this._getRelatedSelectable(cB,T);
if(cD!==null){cC=this._getSelectableLocationY(cD);
if((cF>0&&cC.top<=cy)||(cF<0&&cC.bottom>=cy)){cB=cD;
continue;
}}break;
}var cJ=this.getMode();

if(cJ===A){this._selectItemRange(cI,cB);
}else if(cJ===B){if(this.isItemSelected(cI)){this._selectItemRange(cI,cB,true);
}else{this._deselectItemRange(cI,cB);
}this._setAnchorItem(cB);
}this._fireChange(S);
},__oJ:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var ce,cd;
var cg=event.getKeyIdentifier();
var cf=this.getMode();
var ca=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cb=event.isShiftPressed();
var cc=false;

if(cg===J&&ca){if(cf!==D&&cf!==E){this._selectAllItems();
cc=true;
}}else if(cg===M){if(cf!==D&&cf!==E){this._clearSelection();
cc=true;
}}else if(cg===K){var bY=this.getLeadItem();

if(bY&&!cb){if(ca||cf===B){this._toggleInSelection(bY);
}else{this._setSelectedItem(bY);
}cc=true;
}}else if(this.__oJ[cg]){cc=true;

if(cf===D||cf==E){ce=this._getSelectedItem();
}else{ce=this.getLeadItem();
}
if(ce!==null){switch(cg){case X:cd=this._getFirstSelectable();
break;
case Y:cd=this._getLastSelectable();
break;
case bd:cd=this._getRelatedSelectable(ce,T);
break;
case v:cd=this._getRelatedSelectable(ce,y);
break;
case x:cd=this._getRelatedSelectable(ce,L);
break;
case W:cd=this._getRelatedSelectable(ce,V);
break;
case z:cd=this._getPage(ce,true);
break;
case bb:cd=this._getPage(ce,false);
break;
}}else{switch(cg){case X:case v:case W:case bb:cd=this._getFirstSelectable();
break;
case Y:case bd:case x:case z:cd=this._getLastSelectable();
break;
}}if(cd!==null){switch(cf){case D:case E:this._setSelectedItem(cd);
break;
case B:this._setLeadItem(cd);
break;
case A:if(cb){var ch=this._getAnchorItem();

if(ch===null){this._setAnchorItem(ch=this._getFirstSelectable());
}this._setLeadItem(cd);
this._selectItemRange(ch,cd,ca);
}else{this._setAnchorItem(cd);
this._setLeadItem(cd);

if(!ca){this._setSelectedItem(cd);
}}break;
}this.__oI=this._getScroll().top;
this._scrollItemIntoView(cd);
}}
if(cc){event.stop();
this._fireChange(O);
}this._userInteraction=false;
},_selectAllItems:function(){var c=this.getSelectables();

for(var i=0,l=c.length;i<l;i++){this._addToSelection(c[i]);
}},_clearSelection:function(){var bz=this.__oo;

for(var bA in bz){this._removeFromSelection(bz[bA]);
}this.__oo={};
},_selectItemRange:function(bG,bH,bI){var bL=this._getSelectableRange(bG,bH);
if(!bI){var bK=this.__oo;
var bM=this.__oK(bL);

for(var bJ in bK){if(!bM[bJ]){this._removeFromSelection(bK[bJ]);
}}}for(var i=0,l=bL.length;i<l;i++){this._addToSelection(bL[i]);
}},_deselectItemRange:function(cM,cN){var cO=this._getSelectableRange(cM,cN);

for(var i=0,l=cO.length;i<l;i++){this._removeFromSelection(cO[i]);
}},__oK:function(cm){var co={};
var cn;

for(var i=0,l=cm.length;i<l;i++){cn=cm[i];
co[this._selectableToHashCode(cn)]=cn;
}return co;
},_getSelectedItem:function(){for(var bp in this.__oo){return this.__oo[bp];
}return null;
},_setSelectedItem:function(be){if(this._isSelectable(be)){var bf=this.__oo;
var bg=this._selectableToHashCode(be);

if(!bf[bg]||qx.lang.Object.hasMinLength(bf,2)){this._clearSelection();
this._addToSelection(be);
}}},_addToSelection:function(bn){var bo=this._selectableToHashCode(bn);

if(!this.__oo[bo]&&this._isSelectable(bn)){this.__oo[bo]=bn;
this._styleSelectable(bn,C,true);
this.__oD=true;
}},_toggleInSelection:function(bu){var bv=this._selectableToHashCode(bu);

if(!this.__oo[bv]){this.__oo[bv]=bu;
this._styleSelectable(bu,C,true);
}else{delete this.__oo[bv];
this._styleSelectable(bu,C,false);
}this.__oD=true;
},_removeFromSelection:function(bk){var bl=this._selectableToHashCode(bk);

if(this.__oo[bl]!=null){delete this.__oo[bl];
this._styleSelectable(bk,C,false);
this.__oD=true;
}},_replaceMultiSelection:function(d){var h=false;
var m,k;
var f={};

for(var i=0,l=d.length;i<l;i++){m=d[i];

if(this._isSelectable(m)){k=this._selectableToHashCode(m);
f[k]=m;
}}var n=d[0];
var g=m;
var j=this.__oo;

for(var k in j){if(f[k]){delete f[k];
}else{m=j[k];
delete j[k];
this._styleSelectable(m,C,false);
h=true;
}}for(var k in f){m=j[k]=f[k];
this._styleSelectable(m,C,true);
h=true;
}if(!h){return false;
}this._scrollItemIntoView(g);
this._setLeadItem(n);
this._setAnchorItem(n);
this.__oD=true;
this._fireChange();
},_fireChange:function(bF){if(this.__oD){this.__oE=bF||null;
this.fireDataEvent(F,this.getSelection());
delete this.__oD;
}}},destruct:function(){this._disposeObjects(Q);
this.__oo=this.__oH=this.__oG=null;
this.__oF=null;
}});
})();
(function(){var B="vertical",A="under",z="above",y="qx.ui.core.selection.Widget",x="left",w="right";
qx.Class.define(y,{extend:qx.ui.core.selection.Abstract,construct:function(P){qx.ui.core.selection.Abstract.call(this);
this.__nf=P;
},members:{__nf:null,_isSelectable:function(j){return this._isItemSelectable(j)&&j.getLayoutParent()===this.__nf;
},_selectableToHashCode:function(h){return h.$$hash;
},_styleSelectable:function(e,f,g){g?e.addState(f):e.removeState(f);
},_capture:function(){this.__nf.capture();
},_releaseCapture:function(){this.__nf.releaseCapture();
},_isItemSelectable:function(C){if(this._userInteraction){return C.isVisible()&&C.isEnabled();
}else{return C.isVisible();
}},_getWidget:function(){return this.__nf;
},_getLocation:function(){var a=this.__nf.getContentElement().getDomElement();
return a?qx.bom.element.Location.get(a):null;
},_getDimension:function(){return this.__nf.getInnerSize();
},_getSelectableLocationX:function(Q){var R=Q.getBounds();

if(R){return {left:R.left,right:R.left+R.width};
}},_getSelectableLocationY:function(u){var v=u.getBounds();

if(v){return {top:v.top,bottom:v.top+v.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(b,c){},_scrollItemIntoView:function(t){this.__nf.scrollChildIntoView(t);
},getSelectables:function(K){var L=false;

if(!K){L=this._userInteraction;
this._userInteraction=true;
}var O=this.__nf.getChildren();
var M=[];
var N;

for(var i=0,l=O.length;i<l;i++){N=O[i];

if(this._isItemSelectable(N)){M.push(N);
}}this._userInteraction=L;
return M;
},_getSelectableRange:function(D,E){if(D===E){return [D];
}var I=this.__nf.getChildren();
var F=[];
var H=false;
var G;

for(var i=0,l=I.length;i<l;i++){G=I[i];

if(G===D||G===E){if(H){F.push(G);
break;
}else{H=true;
}}
if(H&&this._isItemSelectable(G)){F.push(G);
}}return F;
},_getFirstSelectable:function(){var d=this.__nf.getChildren();

for(var i=0,l=d.length;i<l;i++){if(this._isItemSelectable(d[i])){return d[i];
}}return null;
},_getLastSelectable:function(){var J=this.__nf.getChildren();

for(var i=J.length-1;i>0;i--){if(this._isItemSelectable(J[i])){return J[i];
}}return null;
},_getRelatedSelectable:function(k,m){var p=this.__nf.getOrientation()===B;
var o=this.__nf.getChildren();
var n=o.indexOf(k);
var q;

if((p&&m===z)||(!p&&m===x)){for(var i=n-1;i>=0;i--){q=o[i];

if(this._isItemSelectable(q)){return q;
}}}else if((p&&m===A)||(!p&&m===w)){for(var i=n+1;i<o.length;i++){q=o[i];

if(this._isItemSelectable(q)){return q;
}}}return null;
},_getPage:function(r,s){if(s){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__nf=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return this._isItemSelectable(s)&&s.getLayoutParent()===this._getWidget().getChildrenContainer();
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var o=this._getWidget();
return {left:o.getScrollX(),top:o.getScrollY()};
},_scrollBy:function(p,q){var r=this._getWidget();
r.scrollByX(p);
r.scrollByY(q);
},_getPage:function(b,c){var g=this.getSelectables();
var length=g.length;
var k=g.indexOf(b);
if(k===-1){throw new Error("Invalid lead item: "+b);
}var d=this._getWidget();
var m=d.getScrollY();
var innerHeight=d.getInnerSize().height;
var top,f,l;

if(c){var j=m;
var i=k;
while(1){for(;i>=0;i--){top=d.getItemTop(g[i]);
if(top<j){l=i+1;
break;
}}if(l==null){var n=this._getFirstSelectable();
return n==b?null:n;
}if(l>=k){j-=innerHeight+m-d.getItemBottom(b);
l=null;
continue;
}return g[l];
}}else{var h=innerHeight+m;
var i=k;
while(1){for(;i<length;i++){f=d.getItemBottom(g[i]);
if(f>h){l=i-1;
break;
}}if(l==null){var e=this._getLastSelectable();
return e==b?null:e;
}if(l<=k){h+=d.getItemTop(b)-m;
l=null;
continue;
}return g[l];
}}}}});
})();
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(v){var w=v.getBounds();

if(w){var top=this._getWidget().getItemTop(v);
return {top:top,bottom:top+w.height};
}},_isSelectable:function(x){return this._isItemSelectable(x)&&x instanceof qx.ui.tree.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(l){var o=false;

if(!l){o=this._userInteraction;
this._userInteraction=true;
}var n=this._getWidget();
var p=[];

if(n.getRoot()!=null){var m=n.getRoot().getItems(true,!!l,n.getHideRoot());

for(var i=0;i<m.length;i++){if(this._isSelectable(m[i])){p.push(m[i]);
}}}this._userInteraction=o;
return p;
},_getSelectableRange:function(f,g){if(f===g){return [f];
}var h=this.getSelectables();
var j=h.indexOf(f);
var k=h.indexOf(g);

if(j<0||k<0){return [];
}
if(j<k){return h.slice(j,k+1);
}else{return h.slice(k,j+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var u=this.getSelectables();

if(u.length>0){return u[u.length-1];
}else{return null;
}},_getRelatedSelectable:function(q,r){var s=this._getWidget();
var t=null;

switch(r){case d:t=s.getPreviousNodeOf(q,false);
break;
case b:t=s.getNextNodeOf(q,false);
break;
case c:case e:break;
}
if(!t){return null;
}
if(this._isSelectable(t)){return t;
}else{return this._getRelatedSelectable(t,r);
}}}});
})();
(function(){var o="dblclick",n="click",m="Boolean",l="excluded",k="visible",j="qx.event.type.Data",h="_applyOpenMode",g="Space",f="Left",d="Enter",C="changeOpenMode",B="_applyRootOpenClose",A="changeSelection",z="qx.ui.tree.Tree",y="tree",x="_applyHideRoot",w="changeRoot",v="_applyRoot",u="__ru",t="keypress",r="none",s="pane",p="Right",q="qx.ui.tree.AbstractTreeItem";
qx.Class.define(z,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__ru=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(s).add(this.__ru);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(A,this._onChangeSelection,this);
this.addListener(t,this._onKeyPress,this);
},events:{addItem:j,removeItem:j},properties:{openMode:{check:[n,o,r],init:o,apply:h,event:C,themeable:true},root:{check:q,init:null,nullable:true,event:w,apply:v},hideRoot:{check:m,init:false,apply:x},rootOpenClose:{check:m,init:false,apply:B},appearance:{refine:true,init:y},focusable:{refine:true,init:true}},members:{__ru:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__ru;
},_applyRoot:function(a,b){var c=this.getChildrenContainer();

if(b){c.remove(b);

if(b.hasChildren()){c.remove(b.getChildrenContainer());
}}
if(a){c.add(a);

if(a.hasChildren()){c.add(a.getChildrenContainer());
}a.setVisibility(this.getHideRoot()?l:k);
a.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(bg,bh){var bi=this.getRoot();

if(!bi){return;
}bi.setVisibility(bg?l:k);
bi.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(P,Q){var R=this.getRoot();

if(!R){return;
}R.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__ru;
},getNextNodeOf:function(D,E){if((E!==false||D.isOpen())&&D.hasChildren()){return D.getChildren()[0];
}
while(D){var parent=D.getParent();

if(!parent){return null;
}var G=parent.getChildren();
var F=G.indexOf(D);

if(F>-1&&F<G.length-1){return G[F+1];
}D=parent;
}return null;
},getPreviousNodeOf:function(H,I){var parent=H.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==H){return null;
}}}else{if(H==this.getRoot()){return null;
}}var L=parent.getChildren();
var J=L.indexOf(H);

if(J>0){var K=L[J-1];

while((I!==false||K.isOpen())&&K.hasChildren()){var M=K.getChildren();
K=M[M.length-1];
}return K;
}else{return parent;
}},getNextSiblingOf:function(bd){if(bd==this.getRoot()){return null;
}var parent=bd.getParent();
var be=parent.getChildren();
var bf=be.indexOf(bd);

if(bf<be.length-1){return be[bf+1];
}return null;
},getPreviousSiblingOf:function(ba){if(ba==this.getRoot()){return null;
}var parent=ba.getParent();
var bb=parent.getChildren();
var bc=bb.indexOf(ba);

if(bc>0){return bb[bc-1];
}return null;
},getItems:function(S,T){if(this.getRoot()!=null){return this.getRoot().getItems(S,T,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(N){while(N){if(N==this){return null;
}
if(N instanceof qx.ui.tree.AbstractTreeItem){return N;
}N=N.getLayoutParent();
}return null;
},_applyOpenMode:function(V,W){if(W==n){this.removeListener(n,this._onOpen,this);
}else if(W==o){this.removeListener(o,this._onOpen,this);
}
if(V==n){this.addListener(n,this._onOpen,this);
}else if(V==o){this.addListener(o,this._onOpen,this);
}},_onOpen:function(e){var O=this.getTreeItem(e.getTarget());

if(!O||!O.isOpenable()){return;
}O.setOpen(!O.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var Y=e.getData();
for(var i=0;i<Y.length;i++){var X=Y[i];
while(X.getParent()!=null){X=X.getParent();
X.setOpen(true);
}}},_onKeyPress:function(e){var U=this._getLeadItem();

if(U!==null){switch(e.getKeyIdentifier()){case f:if(U.isOpenable()&&U.isOpen()){U.setOpen(false);
}break;
case p:if(U.isOpenable()&&!U.isOpen()){U.setOpen(true);
}break;
case d:case g:if(U.isOpenable()){U.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(u);
}});
})();
(function(){var B="open",A="auto",z="middle",y="icon",x="label",w="changeOpen",v="excluded",u="visible",t="String",s="opened",U="always",T="qx.ui.tree.AbstractTreeItem",S="addItem",R="Boolean",Q="Integer",P="_applyIndent",O="changeOpenSymbolMode",N="_applyOpenSymbolMode",M="__pt",L="resize",I="__ps",J="",G="removeItem",H="abstract",E="never",F="_applyIcon",C="_applyOpen",D="_applyLabel",K="__pw";
qx.Class.define(T,{extend:qx.ui.core.Widget,type:H,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__ps=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:R,init:false,event:w,apply:C},openSymbolMode:{check:[U,E,A],init:A,event:O,apply:N},indent:{check:Q,init:19,apply:P,themeable:true},parent:{check:T,nullable:true},icon:{check:t,apply:F,nullable:true,themeable:true},label:{check:t,apply:D,init:J}},members:{__ps:null,__pt:null,__pu:null,__pv:null,__pw:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bA){var bB;

switch(bA){case x:bB=new qx.ui.basic.Label().set({alignY:z,value:this.getLabel()});
break;
case y:bB=new qx.ui.basic.Image().set({alignY:z,source:this.getIcon()});
break;
case B:bB=new qx.ui.tree.FolderOpenButton().set({alignY:z});
bB.addListener(w,this._onChangeOpen,this);
bB.addListener(L,this._updateIndent,this);
break;
}return bB||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bA);
},getTree:function(){var bg=this;

while(bg.getParent()){bg=bg.getParent();
}var bf=bg.getLayoutParent()?bg.getLayoutParent().getLayoutParent():0;

if(bf&&bf instanceof qx.ui.core.scroll.ScrollPane){return bf.getLayoutParent();
}return null;
},addWidget:function(bH,bI){this._add(bH,bI);
},addSpacer:function(){if(!this.__pw){this.__pw=new qx.ui.core.Spacer();
}else{this._remove(this.__pw);
}this._add(this.__pw);
},addOpenButton:function(){this._add(this.getChildControl(B));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bW=this.getChildControl(y);

if(this.__pv){this._remove(bW);
}this._add(bW);
this.__pv=true;
},addLabel:function(bq){var br=this.getChildControl(x);

if(this.__pu){this._remove(br);
}
if(bq){this.setLabel(bq);
}else{br.setValue(this.getLabel());
}this._add(br);
this.__pu=true;
},addState:function(bK){qx.ui.core.Widget.prototype.addState.call(this,bK);
var bM=this._getChildren();

for(var i=0,l=bM.length;i<l;i++){var bL=bM[i];

if(bL.addState){bM[i].addState(bK);
}}},removeState:function(bE){qx.ui.core.Widget.prototype.removeState.call(this,bE);
var bG=this._getChildren();

for(var i=0,l=bG.length;i<l;i++){var bF=bG[i];

if(bF.addState){bG[i].removeState(bE);
}}},_applyIcon:function(bs,bt){var bu=this.getChildControl(y,true);

if(bu){bu.setSource(bs);
}},_applyLabel:function(m,n){var o=this.getChildControl(x,true);

if(o){o.setValue(m);
}},_applyOpen:function(bC,bD){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bC?u:v);
}var open=this.getChildControl(B,true);

if(open){open.setOpen(bC);
}bC?this.addState(s):this.removeState(s);
},isOpenable:function(){var bp=this.getOpenSymbolMode();
return (bp===U||bp===A&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(B,true);

if(!open){return false;
}var bJ=this.getTree();

if(!bJ.getRootOpenClose()){if(bJ.getHideRoot()){if(bJ.getRoot()==this.getParent()){return false;
}}else{if(bJ.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(a,b){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bi=0;
var open=this.getChildControl(B,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bh=open.getBounds();

if(bh){bi=bh.width;
}else{return;
}}else{open.exclude();
}}
if(this.__pw){this.__pw.setWidth((this.getLevel()+1)*this.getIndent()-bi);
}},_applyIndent:function(bd,be){this._updateIndent();
},getLevel:function(){var bN=this.getTree();

if(!bN){return;
}var bO=this;
var bP=-1;

while(bO){bO=bO.getParent();
bP+=1;
}if(bN.getHideRoot()){bP-=1;
}
if(!bN.getRootOpenClose()){bP-=1;
}return bP;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__pt){this.__pt=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?u:v});
}return this.__pt;
},hasChildrenContainer:function(){return this.__pt;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__ps;
},hasChildren:function(){return this.__ps?this.__ps.length>0:false;
},getItems:function(V,W,X){if(X!==false){var Y=[];
}else{var Y=[this];
}var bc=this.hasChildren()&&(W!==false||this.isOpen());

if(bc){var bb=this.getChildren();

if(V===false){Y=Y.concat(bb);
}else{for(var i=0,ba=bb.length;i<ba;i++){Y=Y.concat(bb[i].getItems(V,W,false));
}}}return Y;
},recursiveAddToWidgetQueue:function(){var d=this.getItems(true,true,false);

for(var i=0,l=d.length;i<l;i++){qx.ui.core.queue.Widget.add(d[i]);
}},__px:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bQ){var bR=this.getChildrenContainer();
var bU=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bV=arguments[i];
var bT=bV.getParent();

if(bT){bT.remove(bV);
}bV.setParent(this);
var bS=this.hasChildren();
bR.add(bV);

if(bV.hasChildren()){bR.add(bV.getChildrenContainer());
}this.__ps.push(bV);

if(!bS){this.__px();
}
if(bU){bV.recursiveAddToWidgetQueue();
bU.fireNonBubblingEvent(S,qx.event.type.Data,[bV]);
}}
if(bU){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bj,bk){{};

if(bk==this.__ps.length){this.add(bj);
return;
}var bo=bj.getParent();

if(bo){bo.remove(bj);
}var bm=this.getChildrenContainer();
bj.setParent(this);
var bn=this.hasChildren();
var bl=this.__ps[bk];
bm.addBefore(bj,bl);

if(bj.hasChildren()){bm.addAfter(bj.getChildrenContainer(),bj);
}qx.lang.Array.insertAt(this.__ps,bj,bk);

if(!bn){this.__px();
}
if(this.getTree()){bj.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bx,by){{};
var bz=bx.getParent();

if(bz){bz.remove(bx);
}this.addAt(bx,this.__ps.indexOf(by));
},addAfter:function(p,q){{};
var r=p.getParent();

if(r){r.remove(p);
}this.addAt(p,this.__ps.indexOf(q)+1);
},addAtBegin:function(c){this.addAt(c,0);
},remove:function(f){for(var i=0,l=arguments.length;i<l;i++){var k=arguments[i];

if(this.__ps.indexOf(k)==-1){this.warn("Cannot remove treeitem '"+k+"'. It is not a child of this tree item.");
return;
}var g=this.getChildrenContainer();

if(k.hasChildrenContainer()){var j=k.getChildrenContainer();

if(g.getChildren().indexOf(j)>=0){g.remove(j);
}}qx.lang.Array.remove(this.__ps,k);
k.setParent(null);
g.remove(k);
}var h=this.getTree();

if(h){h.fireNonBubblingEvent(G,qx.event.type.Data,[k]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bv){var bw=this.__ps[bv];

if(bw){this.remove(bw);
}},removeAll:function(){for(var i=this.__ps.length-1;i>=0;i--){this.remove(this.__ps[i]);
}}},destruct:function(){this._disposeArray(I);
this._disposeObjects(K,M);
}});
})();
(function(){var i="opened",h="click",g="changeOpen",f="Boolean",d="qx.ui.tree.FolderOpenButton",c="_applyOpen",b="mouseup",a="mousedown";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){qx.ui.basic.Image.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(a,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:g,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var j="inspector/images/components/image.png",i="inspector/images/components/spinner.png",h="qx.ui.layout.DockLayout",g="inspector/images/components/radiobutton.png",f="qx.ui.pageview.buttonview.Button",e="inspector/images/components/verticallayout.png",d="qx.ui.groupbox.RadioGroupBox",c="inspector/images/components/horizontallayout.png",b="qx.ui.basic.Atom",a="inspector/images/components/label.png",bd="qx.ui.form.TextField",bc="qx.ui.groupbox.CheckGroupBox",bb="qx.ui.treevirtual.TreeVirtual",ba="qx.ui.basic.Image",Y="qx.ui.basic.Label",X="qx.ui.pageview.tabview.Button",W="qx.ui.toolbar.ToolBar",V="inspector/images/components/window.png",U="inspector/images/components/button.png",T="inspector/images/components/textarea.png",q="qx.ui.form.RadioButton",r="qx.ui.window.Window",o="inspector/images/components/table.png",p="qx.ui.tree.Tree",m="qx.ui.layout.HBox",n="inspector.widgets.Util",k="inspector/images/components/textfield.png",l="inspector/images/components/groupbox.png",u="inspector/images/components/checkbox.png",v="qx.ui.form.CheckBox",D="qx.ui.toolbar.Button",B="qx.ui.splitpane.SplitPane",K="qx.ui.layout.VBox",F="qx.ui.form.ComboBox",P="inspector/images/components/atom.png",N="qx.ui.menu.Button",x="qx.ui.layout.CanvasLayout",S="qx.ui.layout.FlowLayout",R="inspector/images/components/toolbar.png",Q="qx.ui.menu.Menu",w="qx.ui.form.Button",z="qx.ui.menu.Layout",A="inspector/images/components/tree.png",C="qx.ui.layout.GridLayout",E="qx.ui.pageview.radioview.Button",G="qx.ui.groupbox.Groupbox",L="qx.ui.menubar.Button",O="inspector/images/components/menu.png",s="qx.ui.menubar.MenuBar",t="inspector/images/components/layout.png",y="inspector/images/components/combobox.png",J="qx.ui.table.Table",I="inspector/images/components/splitpane.png",H="qx.ui.form.TextArea",M="qx.ui.form.Spinner";
qx.Class.define(n,{statics:{getIconPath:function(be){switch(be){case ba:return j;
case Y:return a;
case b:return P;
case p:case bb:return A;
case Q:return O;
case w:case N:case L:case f:case E:case X:case D:return U;
case x:case h:case S:case C:case z:return t;
case K:return e;
case m:return c;
case W:case s:return R;
case r:return V;
case G:case bc:case d:return l;
case M:return i;
case F:return y;
case bd:return k;
case H:return T;
case B:return I;
case J:return o;
case v:return u;
case q:return g;
default:return null;
}}}});
})();
(function(){var b="changeInspected",a="inspector.property.PropertyWindow";
qx.Class.define(a,{extend:inspector.components.AbstractWindow,construct:function(name,c){inspector.components.AbstractWindow.call(this,name,c);
this.__Pf=new inspector.property.View();
this.add(this.__Pf,{edge:0});
this.__Pg=this._model.addListener(b,function(e){this.select(e.getData());
},this);
},members:{__Pf:null,__Pg:null,setInitSizeAndPosition:function(){var g=qx.bom.Viewport.getWidth()-this.getWidth();
var f=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(g,30+2*f);
this.setHeight(f);
},select:function(d){this.__Pf.select(d);
}},destruct:function(){this._model.removeListenerById(this.__Pg);
this.__Pf.dispose();
this.__Pf=null;
}});
})();
(function(){var a="inspector.property.IPropertyListController";
qx.Interface.define(a,{members:{getQxObject:function(){return true;
},setSelectedProperty:function(b){return true;
},getSelectedProperty:function(){return true;
},getInheritedStatus:function(){return true;
},getGroupStatus:function(){return true;
},gotoSelectedWidget:function(){return true;
},getFilter:function(){return true;
}}});
})();
(function(){var p="key",o="classname",n="execute",m="changeValue",l="set",k="_propertyList",j="Group by inheritance",i="inspector/images/icons/api.png",h="qx.ui.core.Widget",g="_filter",P="_setPropertyToDefaultButton",O="inspector/images/icons/highlight.png",N="qx.ui.core.Parent",M="qx.version",L="#",K="_highlightCurrentPropertyButton",J="View",I="get",H="_reloadButton",G="/apiviewer/",w="_setNullButton",x="inspector.property.View",u="icon/22/actions/view-refresh.png",v="inspector/images/icons/setnull.png",s="inspector/images/icons/goto.png",t="qx.ui.core.ClientDocument",q="_menu",r="Group by category",y="http://demo.qooxdoo.org/",z="Show Inherited Porperties",B="_groupButton",A="~",D="_gotoSelectedPropertyButton",C="_inheritedButton",F="current",E="inspector/images/icons/setinit.png";
qx.Class.define(x,{extend:inspector.components.AbstractView,implement:inspector.property.IPropertyListController,construct:function(){inspector.components.AbstractView.call(this);
this._filter=new inspector.property.Filter();
this._addToolbarButtons();
this._createMainElement();
},statics:{RELOAD_BUTTON_TOOLTIP_TEXT:"Reload the window.",SHOW_API_BUTTON_TOOLTIP_TEXT:"Show the API of the selected object or property.",SET_NULL_BUTTON_TOOLTIP_TEXT:"Set the currently selected property to null.",SET_DEFAULT_BUTTON_TOOLTIP_TEXT:"Set the currently selected property to its initial value.",HIGHLIGHT_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT:"Highlight the currently selected property.",GOTO_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT:"Go to the currently selected property."},members:{_propertyList:null,_propertyListFull:null,_propertyListHtmlTable:null,_reloadButton:null,_reloadToolTip:null,_apiButtonToolTip:null,_setNullButton:null,_setNullTooltip:null,_setPropertyToDefaultButton:null,_setPropertyToDefaultTooltip:null,_highlightCurrentPropertyButton:null,_highlightCurrentPropertyTooltip:null,_gotoSelectedPropertyButton:null,_gotoSelectedPropertyTooltip:null,_menu:null,_currentlySelectedProperty:null,_qxObject:null,_showInherited:false,_reloadTimer:null,_filter:null,select:function(bm){if(this._qxObject==bm){return;
}this._qxObject=bm;
var self=this;
window.setTimeout(function(){self._propertyList.build();
if(self._currentlySelectedProperty!=null){var bh=self._currentlySelectedProperty.getUserData(p);
var bg=self._currentlySelectedProperty.getUserData(o);
if(self._propertyList.containsProperty(bh,bg)){self._switchPropertyButtons();
}else{self._currentlySelectedProperty=null;
self._setNullButton.setEnabled(false);
self._setPropertyToDefaultButton.setEnabled(false);
self._highlightCurrentPropertyButton.setEnabled(false);
self._gotoSelectedPropertyButton.setEnabled(false);
}}},0);
},getSelection:function(){return this._qxObject;
},getQxObject:function(){return this._qxObject;
},setSelectedProperty:function(bl){this._currentlySelectedProperty=bl;
this._switchPropertyButtons();
},getSelectedProperty:function(){return this._currentlySelectedProperty;
},getInheritedStatus:function(){return this._showInherited;
},getGroupStatus:function(){return this._groupButton.getValue();
},gotoSelectedWidget:function(){this._gotoSelectedPropertyButtonEventListener();
},getFilter:function(){return this._filter;
},_createMainElement:function(){this._propertyList=new inspector.property.PropertyList(this);
var bn=new qx.ui.container.Scroll();
this.add(bn,{flex:1});
bn.add(this._propertyList);
},_addToolbarButtons:function(){this._createMenu();
var br=new qx.ui.toolbar.MenuButton(J,null,this._menu);
this._toolbar.add(br);
this._toolbar.addSeparator();
this._reloadButton=new qx.ui.toolbar.Button(null,u);
this._reloadButton.setToolTipText(this.self(arguments).RELOAD_BUTTON_TOOLTIP_TEXT);
this._reloadButton.addListener(n,function(){this._propertyList.build();
},this);
this._toolbar.add(this._reloadButton);
this._toolbar.addSeparator();
var bq=new qx.ui.toolbar.Button(null,i);
bq.setToolTipText(this.self(arguments).SHOW_API_BUTTON_TOOLTIP_TEXT);
bq.addListener(n,this._onOpenApiWindow,this);
this._toolbar.add(bq);
this._toolbar.addSpacer();
this._setNullButton=new qx.ui.toolbar.Button(null,v);
this._setNullButton.setToolTipText(this.self(arguments).SET_NULL_BUTTON_TOOLTIP_TEXT);
this._setNullButton.addListener(n,this._setNullButtonEventListener,this);
this._setNullButton.setEnabled(false);
this._toolbar.add(this._setNullButton);
this._setPropertyToDefaultButton=new qx.ui.toolbar.Button(null,E);
this._setPropertyToDefaultButton.setToolTipText(this.self(arguments).SET_DEFAULT_BUTTON_TOOLTIP_TEXT);
this._setPropertyToDefaultButton.addListener(n,this._setPropertyToDefaultButtonEventListener,this);
this._setPropertyToDefaultButton.setEnabled(false);
this._toolbar.add(this._setPropertyToDefaultButton);
this._highlightCurrentPropertyButton=new qx.ui.toolbar.Button(null,O);
this._highlightCurrentPropertyButton.setToolTipText(this.self(arguments).HIGHLIGHT_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT);
this._highlightCurrentPropertyButton.addListener(n,this._highlightCurrentPropertyButtonEventListener,this);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton=new qx.ui.toolbar.Button(null,s);
this._gotoSelectedPropertyButton.setToolTipText(this.self(arguments).GOTO_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT);
this._gotoSelectedPropertyButton.addListener(n,this._gotoSelectedPropertyButtonEventListener,this);
this._gotoSelectedPropertyButton.setEnabled(false);
},_createMenu:function(){this._menu=new qx.ui.menu.Menu();
this._inheritedButton=new qx.ui.menu.CheckBox(z);
this._inheritedButton.addListener(m,this._switchInheritedStatus,this);
this._inheritedButton.setValue(true);
this._menu.add(this._inheritedButton);
this._menu.addSeparator();
var Q=new qx.ui.menu.RadioButton(j);
Q.addListener(m,function(e){if(this._qxObject!=null){this._propertyList.build();
}this._inheritedButton.setEnabled(true);
},this);
Q.setValue(true);
this._menu.add(Q);
this._groupButton=new qx.ui.menu.RadioButton(r);
this._groupButton.addListener(m,function(e){if(this._qxObject!=null){this._propertyList.build();
}this._inheritedButton.setEnabled(false);
},this);
this._menu.add(this._groupButton);
new qx.ui.form.RadioGroup(Q,this._groupButton);
},_switchPropertyButtons:function(){if(this._currentlySelectedProperty==null){this._setNullButton.setEnabled(false);
this._setPropertyToDefaultButton.setEnabled(false);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
return ;
}var T=this._currentlySelectedProperty.getUserData(o);
var U=this._currentlySelectedProperty.getUserData(p);
var R=qx.core.Init.getApplication().getIframeWindowObject();
var W=R.qx.Class.getByName(T).$$properties;
var V=W[U];
if(V.nullable){this._setNullButton.setEnabled(true);
}else{this._setNullButton.setEnabled(false);
}if(V.init){this._setPropertyToDefaultButton.setEnabled(true);
}else{this._setPropertyToDefaultButton.setEnabled(false);
}if(U!=undefined){try{var X=I+qx.lang.String.firstUp(U);
if(this._qxObject[X]==undefined){this._setNullButton.setEnabled(false);
this._setPropertyToDefaultButton.setEnabled(false);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
return ;
}var S=this._qxObject[X].call(this._qxObject);
if((V.check==h||V.check==N)&&(this._qxObject.classname!=t)&&(S!=null)){this._highlightCurrentPropertyButton.setEnabled(true);
this._gotoSelectedPropertyButton.setEnabled(true);
}else{this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
}}catch(bf){alert("Error during reading the selected Property: "+bf);
this._currentlySelectedProperty.setBackgroundColor(null);
this._currentlySelectedProperty=null;
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
}}},_onOpenApiWindow:function(){if(this._qxObject!=null){if(this._currentlySelectedProperty!=null){var bo=this._currentlySelectedProperty.getUserData(o);
var bp=this._currentlySelectedProperty.getUserData(p);
this._openApiWindow(bo,bp);
}else{this._openApiWindow(this._qxObject.classname);
}}else{this._openApiWindow();
}},_openApiWindow:function(a,b){var c=qx.core.Init.getApplication()._loadedWindow.qx.core.Setting.get(M);
var d=y+(c||F)+G;

if(a!=null){d+=L+a;
if(b!=null){d+=A+b;
}}var f=window.open(d);
f.focus();
},_setNullButtonEventListener:function(){var bi=this._currentlySelectedProperty.getUserData(o);
var bk=this._currentlySelectedProperty.getUserData(p);
var bj=l+qx.lang.String.firstUp(bk);
try{this._qxObject[bj].call(this._qxObject,null);
var bi=this._currentlySelectedProperty.getUserData(o);
var bk=this._currentlySelectedProperty.getUserData(p);
this._propertyList.update(bk,bi);
this._switchPropertyButtons();
}catch(e){alert(e);
}},_setPropertyToDefaultButtonEventListener:function(){var ba=this._currentlySelectedProperty.getUserData(o);
var bb=this._currentlySelectedProperty.getUserData(p);
var Y=qx.core.Init.getApplication().getIframeWindowObject();
var be=Y.qx.Class.getByName(ba).$$properties;
var bd=be[bb];
var bc=l+qx.lang.String.firstUp(bb);
try{this._qxObject[bc].call(this._qxObject,bd.init);
var ba=this._currentlySelectedProperty.getUserData(o);
var bb=this._currentlySelectedProperty.getUserData(p);
this._propertyList.update(bb,ba);
}catch(e){alert(e);
}},_highlightCurrentPropertyButtonEventListener:function(){},_gotoSelectedPropertyButtonEventListener:function(){},_switchInheritedStatus:function(e){this._showInherited=e.getCurrentTarget().getValue();

if(this._propertyList){this._propertyList.switchInheritedStatus(this._showInherited);
}}},destruct:function(){this._qxObject=null;
this._disposeObjects(g,q,C,B,H,w,P,K,D,k);
}});
})();
(function(){var a="inspector.property.IFilter";
qx.Interface.define(a,{members:{sortIn:function(b,c,d){return true;
},getResult:function(){return true;
},empty:function(){return true;
}}});
})();
(function(){var k="Behavior",j="Content",h="Appearance",g="Dimension",f="Spacing",e="Tooltip & Context menu",d="Visibility",c="height",b="content",a="spacing",T="droppable",S="shadow",R="cursor",Q="decorator",P="opacity",O="zIndex",N="color",M="appearance",L="icon",K="inspector.property.Filter",r="value",s="font",p="keepfocus",q="focusable",n="enabled",o="allowShrink",l="keepactive",m="draggable",t="name",u="align",B="width",z="visibility",E="i",D="padding",G="selectable",F="rich",w="allowStretch",J="tabindex",I="anonymous",H="tooltip",v="label",x="margin",y="contextmenu",A="allowGrow",C="checked";
qx.Class.define(K,{extend:qx.core.Object,implement:inspector.property.IFilter,statics:{DEFAULT_CATEGORY_NAME:"Rest"},construct:function(){qx.core.Object.call(this);
this._tests=[];
this._defineTests();
this._createCategories();
},members:{_categories:null,_properties:null,_classnames:null,_tests:null,sortIn:function(W,X,Y){for(var i=0;i<this._tests.length;i++){var ba=new RegExp(this._tests[i][0],E);
if(ba.test(W)){var bb=this._categories[this._tests[i][1]];
this._properties[bb][W]=X;
this._classnames[bb][W]=Y;
return ;
}}this._properties[this._categories[this.self(arguments).DEFAULT_CATEGORY_NAME]][W]=X;
this._classnames[this._categories[this.self(arguments).DEFAULT_CATEGORY_NAME]][W]=Y;
},getResult:function(){var V=[];

for(var name in this._categories){V[this._categories[name]]=name;
}return {names:V,props:this._properties,classes:this._classnames};
},empty:function(){this.__Ph();
},_createCategories:function(){this._categories=[];
var i=1;

for(var U=0;U<this._tests.length;U++){if(this._categories[this._tests[U][1]]==undefined){this._categories[this._tests[U][1]]=i;
i++;
}}this._categories[this.self(arguments).DEFAULT_CATEGORY_NAME]=i;
this.__Ph();
},__Ph:function(){this._properties=[];
this._classnames=[];
for(var i=1;i<=this._categories[this.self(arguments).DEFAULT_CATEGORY_NAME];i++){this._properties[i]={};
this._classnames[i]=[];
}},_defineTests:function(){this._tests.push([x,f]);
this._tests.push([a,f]);
this._tests.push([D,f]);
this._tests.push([u,f]);
this._tests.push([M,h]);
this._tests.push([N,h]);
this._tests.push([Q,h]);
this._tests.push([S,h]);
this._tests.push([s,h]);
this._tests.push([P,h]);
this._tests.push([R,h]);
this._tests.push([B,g]);
this._tests.push([c,g]);
this._tests.push([A,g]);
this._tests.push([o,g]);
this._tests.push([w,g]);
this._tests.push([b,j]);
this._tests.push([F,j]);
this._tests.push([n,j]);
this._tests.push([C,j]);
this._tests.push([r,j]);
this._tests.push([t,j]);
this._tests.push([v,j]);
this._tests.push([L,j]);
this._tests.push([H,e]);
this._tests.push([y,e]);
this._tests.push([z,d]);
this._tests.push([O,d]);
this._tests.push([I,k]);
this._tests.push([J,k]);
this._tests.push([q,k]);
this._tests.push([p,k]);
this._tests.push([l,k]);
this._tests.push([m,k]);
this._tests.push([T,k]);
this._tests.push([G,k]);
}},destruct:function(){this._tests=this._categories=this._properties=this._classnames=null;
}});
})();
(function(){var c="abstract",b="qx.core.Object",a="inspector.property.AbstractPropertyList";
qx.Class.define(a,{extend:qx.ui.container.Composite,type:c,construct:function(o){qx.ui.container.Composite.call(this);
this.setLayout(new qx.ui.layout.VBox(8));
this._controller=o;
},members:{_controller:null,_filter:null,build:function(){throw new Error("Abstract method call (build) in 'PropertyList'!");
},update:function(d,e){throw new Error("Abstract method call (update) in 'PropertyList'!");
},getComponents:function(){throw new Error("Abstract method call (getComponents) in 'PropertyList'!");
},containsProperty:function(w,x){throw new Error("Abstract method call (containsProperty) in 'PropertyList'!");
},switchInheritedStatus:function(){throw new Error("Abstract method call (switchInheritedStatus) in 'PropertyList'!");
},recalculateLayout:function(){throw new Error("Abstract method call (recalculateLayout) in 'PropertyList'!");
},_getDataInherited:function(g){var m=g;
var h=qx.core.Init.getApplication().getIframeWindowObject();
var n=[];
var l=[];
var k=[];
for(var i=1;;i++){n[i]=h.qx.Class.getByName(m.classname).$$properties;
k[i]=m.classname;
l[i]=[];
for(var j in n[i]){l[i][j]=m.classname;
}if(h.qx.Class.getByName(b)==m){break;
}m=h.qx.Class.getByName(m.classname).superclass;
}return {names:k,props:n,classes:l};
},_getDataGrouped:function(p){var u=this._getDataInherited(p);
var t=u.props;
var s=this._controller.getFilter();
s.empty();
for(var q=0;q<t.length;q++){var v=u.names[q];

for(var r in t[q]){s.sortIn(r,t[q][r],v);
}}return s.getResult();
},_getData:function(f){if(this._controller.getGroupStatus()){return this._getDataGrouped(f);
}else{return this._getDataInherited(f);
}}},destruct:function(){this._controller=this._filter=null;
}});
})();
(function(){var bs=".",br="",bq="key",bp="classname",bo="inspector/images/shell/errorIcon.png",bn="click",bm="visible",bl="inherited",bk="set",bj="name",ct="row",cs="changeValue",cr="qx.ui.basic.Label",cq="qx.ui.core.Widget",cp="activate",co="excluded",cn="inspector/images/close.png",cm="Integer",cl="inspector/images/null.png",ck="middle",bz="get",bA="getActiveWindow",bx="qx.ui.container.Composite",by="qx.event.type.Focus",bv="Number",bw="NonEmptyString",bt="blur",bu="mousedown",bF="Boolean",bG="icon/16/actions/go-next.png",bP="#FFFFFF",bM="inspector.property.PropertyList",bX="qx.ui.form.TextField",bS="solid",cg="_arrow",cd="execute",bI="Enter",cj="Double",ci="inspector/images/open.png",ch="#969696",bH="<u>",bK="pointer",bL=":",bO="Label",bQ="String",bT="hidden",ca="<b>",cf="]</u>",bB="qx.ui.form.CheckBox",bC="</b>",bJ=" objects",bW="Float",bV="cursor",bU="qx.ui.form.ComboBox",cc="keypress",cb="inherit",bR="Color",bY=" [",bi="Font",ce="qx.event.type.KeySequence",bD="white",bE="left",bN="Choose Color";
qx.Class.define(bM,{extend:inspector.property.AbstractPropertyList,construct:function(C){inspector.property.AbstractPropertyList.call(this,C);
this._propertyRows={};
this._comboBoxPopups=[];
this._createColorPopup();
var D=new qx.ui.basic.Image(bG);
D.setPaddingLeft(8);
this._arrow={arrow:D,container:null,row:null};
},members:{_propertyRows:null,_comboBoxPopups:null,_colorPopup:null,_colorFields:null,_currentColorProperty:null,_arrow:null,build:function(){if(this._controller.getQxObject()!=null){this._reloadPropertyListFull();
}},update:function(be,bf){this._setPropertyValueFull(be,bf);
},switchInheritedStatus:function(){var bg=this.getChildren();

for(var i=0;i<bg.length;i++){if(bg[i].getUserData(bl)){if(this._controller.getInheritedStatus()){bg[i].setVisibility(bm);
}else{bg[i].setVisibility(co);
}}}},containsProperty:function(a,b){return this._propertyRows[b+bs+a]==null?false:true;
},_reloadPropertyListFull:function(){var cP=false;
var cS=true;
var cX=this._getData(this._controller.getQxObject());
var cQ=cX.names;
var cY=cX.props;
var cR=cX.classes;
if(!this._controller.getGroupStatus()){this._removeUnnecessaryClasses(cQ);
}for(var i=cY.length-1;i>0;i--){if(!this._controller.getGroupStatus()){var cU=this.getChildren();
if(!cP&&cU.length>0){var x=cU.length-1-2*(cY.length-i-1);
if(x>0){var db=cU[x].getUserData(bj);
if(db!=cQ[i]){var cV=cQ[i+1];
cP=true;
}}else{cP=true;
cS=false;
}}else{cP=true;
cS=false;
}}else{cP=true;
if(cS){this._clearList();
cS=false;
}}if(cP){if(cS){this._removeOld(cV);
cS=false;
}var cN=new qx.ui.basic.Atom(ca+cQ[i]+bC,cn);
cN.setUserData(bj,cQ[i]);
cN.setRich(true);
this.addAt(cN,0);
var cL=new qx.ui.container.Composite(new qx.ui.layout.Grid(6,6));
cL.getLayout().setColumnWidth(0,25);
cL.setUserData(bj,cQ[i]);
if(!this._controller.getGroupStatus()){if(i==1){cL.setUserData(bl,false);
cN.setUserData(bl,false);
}else{cL.setUserData(bl,true);
cN.setUserData(bl,true);
}}cN.addListener(bn,function(e){if(this.isVisible()){this.setVisibility(co);
e.getTarget().setIcon(ci);
}else{this.setVisibility(bm);
e.getTarget().setIcon(cn);
}},cL);
this.addAfter(cL,cN);
var cW=0;

for(var cT in cY[i]){if(cY[i][cT].group==null){var cM=new qx.ui.basic.Label(cT+bL);
cM.setUserData(bp,cR[i][cT]);
cM.setUserData(bq,cT);
cM.setUserData(ct,cW);
cL.add(cM,{row:cW,column:1});
var da=null;

try{da=this._getPropertyWidgetFull(cY[i][cT],cT,cR[i][cT]);
}catch(E){da=new qx.ui.basic.Label(br);
}da.setUserData(bp,cR[i][cT]);
da.setUserData(bq,cT);
da.setUserData(ct,cW);
cL.add(da,{row:cW,column:2});
var cO=new qx.ui.basic.Image(cl);
cO.setUserData(bp,cR[i][cT]);
cO.setUserData(bq,cT);
cO.setUserData(ct,cW);
cL.add(cO,{row:cW,column:3});
this._propertyRows[cR[i][cT]+bs+cT]={container:cL,row:cW};
cL.getLayout().setRowAlign(cW,bE,ck);
cL.getLayout().setRowMinHeight(cW,20);
cM.addListener(bn,this.__Pi,this);
da.addListener(bn,this.__Pi,this);
da.addListener(cp,this.__Pi,this);
cO.addListener(bn,this.__Pi,this);
cW++;
}}}}this.switchInheritedStatus();
this._refillPropertyListFull();
},_removeUnnecessaryClasses:function(N){for(;(N.length-1)*2<this.getChildren().length;){var Q=this.getChildren()[0];
this.removeAt(0);
Q.dispose();
var P=this.getChildren()[0].getChildren();
for(var R=0;R<P.length;R++){if(P[R].classname==cr){var O=P[R].getUserData(bp)+bs+P[R].getUserData(bq);
delete this._propertyRows[O];
}}this.removeAt(0);
}},_removeOld:function(W){if(W==null){this._clearList();
return;
}while(true){var bc=this.getChildren()[0];
var bb=bc.getUserData(bj);
if(bb==W){break;
}else{if(bc.classname==bx){var ba=bc.getChildren();
for(var X=0;X<ba.length;X++){if(ba[X].classname==cr){var Y=ba[X].getUserData(bp)+bs+ba[X].getUserData(bq);
delete this._propertyRows[Y];
}}}this.removeAt(0);
}}},_clearList:function(){for(var K in this._porpertyColumns){delete this._porpertyColumns[K];
}this.removeAll();
},_getPropertyWidgetFull:function(d,f,g){var u=bz+qx.lang.String.firstUp(f);

try{if(u===bA){throw new Error("Property activeWindow of an instance of qx.ui.root.Abstract is not (yet) ready!");
}else{var m=this._controller.getQxObject()[u]();
}}catch(dc){return new qx.ui.basic.Label();
}if(d.check!==null){if(d.check==bF){var j=new qx.ui.form.CheckBox();
var o=function(e){var T=this._controller.getQxObject()[u].call(this._controller.getQxObject());

if(e.getData()!=T){var S=bk+qx.lang.String.firstUp(f);
try{this._controller.getQxObject()[S].call(this._controller.getQxObject(),e.getData());
this._setPropertyValueFull(f,g,true);
}catch(cu){alert(cu+" ["+S+"]");
j.setValue(!T);
}}};
j.addListener(cs,o,this);
return j;
}else if(d.check instanceof Array){var h=new qx.ui.form.ComboBox();
var p=d.check;
for(var i=0;i<p.length;i++){var n=new qx.ui.form.ListItem(p[i]);
h.add(n);
}h.addListener(cs,function(e){var cJ=null;
if(e.getTarget().getValue()!=null){var cJ=e.getTarget().getValue();
}if(cJ!=m){var cI=bk+qx.lang.String.firstUp(f);
try{this._controller.getQxObject()[cI].call(this._controller.getQxObject(),cJ);
m=this._controller.getQxObject()[u].call(this._controller.getQxObject());
this._setPropertyValueFull(f,g,true);
m=this._controller.getQxObject()[u].call(this._controller.getQxObject());
}catch(bh){alert(bh);
}}},this);
return h;
}else if(d.check==cm||d.check==bQ||d.check==bw||d.check==bO||d.check==bW||d.check==cj||d.check==bv){var s=new qx.ui.form.TextField();
var q=function(e){if(e.classname==ce){if(e.getKeyIdentifier()!=bI){return;
}}else if(e.classname==by){}else{return ;
}var I=bk+qx.lang.String.firstUp(f);
try{var J=s.getValue();
m=this._controller.getQxObject()[u].call(this._controller.getQxObject());
if(e.classname==by){if(J==br&&m==null){return;
}}if(d.check==cm||d.check==bv){J=parseFloat(J);
}this._controller.getQxObject()[I].call(this._controller.getQxObject(),J);
this._setPropertyValueFull(f,g,true);
m=this._controller.getQxObject()[u].call(this._controller.getQxObject());
}catch(bd){alert(bd);
s.setValue(m+br);
}};
s.addListener(bt,q,this);
s.addListener(cc,q,this);
return s;
}else if(d.check==bR){var k=new qx.ui.container.Composite(new qx.ui.layout.HBox(6));
k.getLayout().setAlignY(ck);
var r=new qx.ui.core.Widget();
r.setDecorator(new qx.ui.decoration.Single(1,bS,ch));
r.setBackgroundColor(bD);
r.setHeight(20);
r.setWidth(20);
r.setAllowGrowX(false);
r.setAllowGrowY(false);
k.add(r);
this._colorFields[g+bs+f]=r;
var l=new qx.ui.form.Button(bN);
k.add(l);
l.addListener(bu,function(e){this._colorPopup.setValue(r.getBackgroundColor());
this._currentColorProperty=g+bs+f;
this._colorPopup.placeToMouse(e);
this._colorPopup.show();
},this);
l.addListener(cd,this.__Pi,this);
l.addListener(cp,this.__Pi,this);
return k;
}else if(d.ckeck==cq){var v=new qx.ui.basic.Label();
return v;
}else{var t=new qx.ui.basic.Label();
return t;
}}else{var t=new qx.ui.basic.Label();
return t;
}},_refillPropertyListFull:function(){for(var A in this._propertyRows){try{var B=A.substr(A.lastIndexOf(bs)+1);
var z=A.substring(0,A.lastIndexOf(bs));
this._setPropertyValueFull(B,z);
}catch(c){}}},_setPropertyValueFull:function(cv,cw,cx){var cA=qx.core.Init.getApplication().getIframeWindowObject();
var cz=this._propertyRows[cw+bs+cv].container.getLayout();
var cH=this._propertyRows[cw+bs+cv].row;

if(!cx&&cz.getCellWidget(cH,0)){this._arrow.container.remove(this._arrow.arrow);
this._arrow.container=null;
this._arrow.row=null;
}var cG=bz+qx.lang.String.firstUp(cv);

try{if(cG===bA){throw new Error("Property activeWindow of an instance of qx.ui.root.Abstract is not (yet) ready!");
}else{var cD=this._controller.getQxObject()[cG]();
}}catch(cK){cz.getCellWidget(cH,3).setVisibility(bm);
cz.getCellWidget(cH,3).setSource(bo);
var cB=cz.getCellWidget(cH,3).getToolTip();

if(!cB){cB=new qx.ui.tooltip.ToolTip(cK+br,bo);
}else{cB.setLabel(cK+br);
cB.setIcon(bo);
}cz.getCellWidget(cH,3).setToolTip(cB);
return;
}if(cD==null){cz.getCellWidget(cH,3).setVisibility(bm);
cz.getCellWidget(cH,3).setSource(cl);
cz.getCellWidget(cH,3).resetToolTip();
}else{cz.getCellWidget(cH,3).setVisibility(bT);
}
try{var parent=this._controller.getQxObject();

while(cD==cb){parent=parent.getLayoutParent();
cD=parent[cG].call(parent);
}}catch(M){cz.getCellWidget(cH,3).setVisibility(bm);
cz.getCellWidget(cH,3).setSource(bo);
var cB=cz.getCellWidget(cH,3).getToolTip();

if(!cB){cB=new qx.ui.tooltip.ToolTip(M+br,bo);
}else{cB.setLabel(M+br);
cB.setIcon(bo);
}cz.getCellWidget(cH,3).setToolTip(cB);
return;
}if(cz.getCellWidget(cH,2).classname==bB){if(cD==null){cz.getCellWidget(cH,2).setValue(false);
}else{cz.getCellWidget(cH,2).setValue(cD);
}}else if(cz.getCellWidget(cH,2).classname==cr){if(cD!=null){var cF=cA.qx.Class.getByName(cw).$$properties;
var cE=cF[cv];
if(cD instanceof Array){cz.getCellWidget(cH,2).setValue(cD.length+bJ);
}else if((cE.check==cq)&&(this._controller.getQxObject() instanceof qx.application.AbstractGui)){cz.getCellWidget(cH,2).setValue(bH+cD.classname+bY+cD.toHashCode()+cf);
cz.getCellWidget(cH,2).setStyleProperty(bV,bK);
if(cz.getCellWidget(cH,2).hasListeners(bn)===undefined){cz.getCellWidget(cH,2).addListener(bn,function(e){if(this._controller.getSelectedProperty()!=null){this._controller.getSelectedProperty().setBackgroundColor(null);
}this._controller.setSelectedProperty(cz.getCellWidget(cH,1));
this._controller.gotoSelectedWidget();
},this);
}}else if(cE.check==bi){cz.getCellWidget(cH,2).setFont(cD);
cz.getCellWidget(cH,2).setValue(cD+br);
}else{cz.getCellWidget(cH,2).setValue(cD+br);
}}else{cz.getCellWidget(cH,2).setValue(br);
}}else if(cz.getCellWidget(cH,2).classname==bX){if(cD!=null){cz.getCellWidget(cH,2).setValue(cD+br);
}else{cz.getCellWidget(cH,2).setValue(br);
}}else if(cz.getCellWidget(cH,2).classname==bU){var cy=cz.getCellWidget(cH,2);
if(cD==null){cy.resetSelection();
}else{for(var i=0;i<cy.getChildren().length;i++){if(cD==cy.getChildren()[i].getLabel()){if(cD){cy.setValue(cD);
}}}}}else if(cz.getCellWidget(cH,2).classname==bx){try{var cC=cA.qx.theme.manager.Color.getInstance().resolve(cD);
cz.getCellWidget(cH,2).getChildren()[0].setBackgroundColor(cC);
}catch(V){cz.getCellWidget(cH,2).getChildren()[0].setBackgroundColor(bP);
}}},_createColorPopup:function(){this._colorPopup=new qx.ui.control.ColorPopup();
var U=qx.core.Init.getApplication();
U.getRoot().add(this._colorPopup);
this._colorFields={};
this._colorPopup.addListener(cs,function(e){if(this._currentColorProperty!=null){var G=this._currentColorProperty.substr(this._currentColorProperty.lastIndexOf(bs)+1);
var F=this._currentColorProperty.substring(0,this._currentColorProperty.lastIndexOf(bs));
var H=bk+qx.lang.String.firstUp(G);
try{this._controller.getQxObject()[H].call(this._controller.getQxObject(),e.getData());
this._colorFields[this._currentColorProperty].setBackgroundColor(e.getData());
this._setPropertyValueFull(G,F,true);
}catch(L){alert(L);
}this._currentColorProperty=null;
}},this);
},__Pi:function(e){var w=e.getTarget();

while(w.getUserData(bq)==null){w=w.getLayoutParent();
}var y=w.getUserData(bp)+bs+w.getUserData(bq);
if(this._arrow.container!=null){this._arrow.container.remove(this._arrow.arrow);
this._arrow.container=null;
this._arrow.row=null;
}if(this._propertyRows[y]!=undefined){this._arrow.container=this._propertyRows[y].container;
this._arrow.row=w.getUserData(ct);
this._arrow.container.add(this._arrow.arrow,{row:this._arrow.row,column:0});
this._controller.setSelectedProperty(w);
}else{this._controller.setSelectedProperty(null);
}}},destruct:function(){this._propertyRows=this._comboBoxPopups=this._colorPopup=this._colorFields=this._oldPropertyListPool=null;
this._disposeObjects(cg);
}});
})();
(function(){var b="checkbox",a="qx.ui.form.CheckBox";
qx.Class.define(a,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(c){{};
qx.ui.form.ToggleButton.call(this,c);
this.setValue(false);
},properties:{appearance:{refine:true,init:b},allowGrowX:{refine:true,init:false}}});
})();
(function(){var v="popup",u="list",t="",s="mousewheel",r="resize",q="Function",p="blur",o="abstract",n="keypress",m="Number",f="qx.ui.form.AbstractSelectBox",l="changeSelection",i="PageUp",c="_applyMaxListHeight",b="PageDown",h="mouseup",g="Escape",j="changeVisibility",a="one",k="middle",d="mousedown";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:o,construct:function(){qx.ui.core.Widget.call(this);
var x=new qx.ui.layout.HBox();
this._setLayout(x);
x.setAlignY(k);
this.addListener(n,this._onKeyPress);
this.addListener(p,this._onBlur,this);
var w=qx.core.Init.getApplication().getRoot();
w.addListener(s,this._onMousewheel,this,true);
this.addListener(r,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:m,apply:c,nullable:true,init:200},format:{check:q,init:function(B){return this._defaultFormat(B);
},nullable:true}},members:{_createChildControlImpl:function(F){var G;

switch(F){case u:G=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:a,quickSelection:true});
G.addListener(l,this._onListChangeSelection,this);
G.addListener(d,this._onListMouseDown,this);
break;
case v:G=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
G.setAutoHide(false);
G.setKeepActive(true);
G.addListener(h,this.close,this);
G.add(this.getChildControl(u));
G.addListener(j,this._onPopupChangeVisibility,this);
break;
}return G||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},_applyMaxListHeight:function(H,I){this.getChildControl(u).setMaxHeight(H);
},getChildrenContainer:function(){return this.getChildControl(u);
},open:function(){var C=this.getChildControl(v);
C.placeToWidget(this,true);
C.show();
},close:function(){this.getChildControl(v).hide();
},toggle:function(){var J=this.getChildControl(v).isVisible();

if(J){this.close();
}else{this.open();
}},_defaultFormat:function(y){var z=y?y.getLabel():t;
var A=y?y.getRich():false;

if(A){z=z.replace(/<[^>]+?>/g,t);
z=qx.bom.String.unescape(z);
}return z;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var D=e.getKeyIdentifier();
var E=this.getChildControl(v);
if(E.isHidden()&&(D==b||D==i)){e.stopPropagation();
}else if(!E.isHidden()&&D==g){this.close();
e.stop();
}else{this.getChildControl(u).handleKeyPress(e);
}},_onMousewheel:function(e){var M=e.getTarget();
var L=this.getChildControl(v,true);

if(L==null){return;
}
if(qx.ui.core.Widget.contains(L,M)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(v).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var K=qx.core.Init.getApplication().getRoot();

if(K){K.removeListener(s,this._onMousewheel,this,true);
}}});
})();
(function(){var u="textfield",t="button",s="list",r="selected",q="focusout",p="inner",o="changeValue",n="popup",m="focusin",l="combobox",d="click",k="blur",h="Enter",c="quick",b="_applyPlaceholder",g="qx.ui.form.ComboBox",f="single",i="Down",a="String",j="qx.event.type.Data";
qx.Class.define(g,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IStringForm],construct:function(){qx.ui.form.AbstractSelectBox.call(this);
var E=this._createChildControl(u);
this._createChildControl(t);
this.addListener(d,this._onClick);
this.addListener(m,function(e){E.fireNonBubblingEvent(m,qx.event.type.Focus);
},this);
this.addListener(q,function(e){E.fireNonBubblingEvent(q,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:l},placeholder:{check:a,nullable:true,apply:b}},events:{"changeValue":j},members:{__zs:null,__zt:null,_applyPlaceholder:function(P,Q){this.getChildControl(u).setPlaceholder(P);
},_createChildControlImpl:function(N){var O;

switch(N){case u:O=new qx.ui.form.TextField();
O.setFocusable(false);
O.addState(p);
O.addListener(o,this._onTextFieldChangeValue,this);
O.addListener(k,this.close,this);
this._add(O,{flex:1});
break;
case t:O=new qx.ui.form.Button();
O.setFocusable(false);
O.setKeepActive(true);
O.addState(p);
this._add(O);
break;
case s:O=qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,N);
O.setSelectionMode(f);
break;
}return O||qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,N);
},_forwardStates:{focused:true},tabFocus:function(){var R=this.getChildControl(u);
R.getFocusElement().focus();
R.selectAllText();
},focus:function(){qx.ui.form.AbstractSelectBox.prototype.focus.call(this);
this.getChildControl(u).getFocusElement().focus();
},setValue:function(C){var D=this.getChildControl(u);

if(D.getValue()==C){return;
}D.setValue(C);
},getValue:function(){return this.getChildControl(u).getValue();
},resetValue:function(){this.getChildControl(u).setValue(null);
},_onKeyPress:function(e){var G=this.getChildControl(n);
var F=e.getKeyIdentifier();

if(F==i&&e.isAltPressed()){this.getChildControl(t).addState(r);
this.toggle();
e.stopPropagation();
}else if(F==h){if(G.isVisible()){this.close();
e.stop();
}}else if(G.isVisible()){qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);
}},_onClick:function(e){var v=e.getTarget();

if(v==this.getChildControl(t)){this.toggle();
}else{this.close();
}},_onListMouseDown:function(e){if(this.__zs){var S=this.__zs.getLabel();

if(this.getFormat()!=null){S=this.getFormat().call(this,this.__zs);
}if(S&&S.translate){S=S.translate();
}this.setValue(S);
this.__zs=null;
}},_onListChangeSelection:function(e){var H=e.getData();

if(H.length>0){var I=this.getChildControl(s);

if(I.getSelectionContext()==c){this.__zs=H[0];
}else{var J=H[0].getLabel();

if(this.getFormat()!=null){J=this.getFormat().call(this,H[0]);
}if(J&&J.translate){J=J.translate();
}this.setValue(J);
this.__zs=null;
}}},_onPopupChangeVisibility:function(e){var x=this.getChildControl(n);

if(x.isVisible()){var y=this.getChildControl(s);
var z=this.getValue();
var w=null;

if(z){w=y.findItem(z);
}
if(w){y.setSelection([w]);
}else{y.resetSelection();
}}else{this.tabFocus();
}this.getChildControl(t).removeState(r);
},_onTextFieldChangeValue:function(e){var M=e.getData();
var L=this.getChildControl(s);

if(M!=null){var K=L.findItem(M,false);

if(K){L.setSelection([K]);
}else{L.resetSelection();
}}else{L.resetSelection();
}this.fireDataEvent(o,M,e.getOldData());
},getTextSelection:function(){return this.getChildControl(u).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(u).getTextSelectionLength();
},setTextSelection:function(A,B){this.getChildControl(u).setTextSelection(A,B);
},clearTextSelection:function(){this.getChildControl(u).clearTextSelection();
},selectAllText:function(){this.getChildControl(u).selectAllText();
}}});
})();
(function(){var m="horizontal",k="qx.event.type.Data",j="vertical",h="",g="qx.ui.form.List",f="Boolean",d="one",c="addChildWidget",b="_applySpacing",a="Enter",y="Integer",x="action",w="keyinput",v="addItem",u="__mX",t="removeChildWidget",s="_applyOrientation",r="single",q="keypress",p="list",n="pane",o="removeItem";
qx.Class.define(g,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(C){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__mX=new qx.ui.container.Composite();
this.__mX.addListener(c,this._onAddChild,this);
this.__mX.addListener(t,this._onRemoveChild,this);
this.getChildControl(n).add(this.__mX);
if(C){this.setOrientation(m);
}else{this.initOrientation();
}this.addListener(q,this._onKeyPress);
this.addListener(w,this._onKeyInput);
this.__mY=h;
},events:{addItem:k,removeItem:k},properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true},orientation:{check:[m,j],init:j,apply:s},spacing:{check:y,init:0,apply:b,themeable:true},enableInlineFind:{check:f,init:true}},members:{__mY:null,__na:null,__mX:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__mX;
},_onAddChild:function(e){this.fireDataEvent(v,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(o,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(D,E){var F=D===m;
var G=F?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__mX;
content.setLayout(G);
content.setAllowGrowX(!F);
content.setAllowGrowY(F);
this._applySpacing(this.getSpacing());
},_applySpacing:function(P,Q){this.__mX.getLayout().setSpacing(P);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==a&&!e.isAltPressed()){var z=this.getSelection();

for(var i=0;i<z.length;i++){z[i].fireEvent(x);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var A=this.getSelectionMode();

if(!(A===r||A===d)){return;
}if(((new Date).valueOf()-this.__na)>1000){this.__mY=h;
}this.__mY+=e.getChar();
var B=this.findItemByLabelFuzzy(this.__mY);
if(B){this.setSelection([B]);
}this.__na=(new Date).valueOf();
},findItemByLabelFuzzy:function(H){H=H.toLowerCase();
var I=this.getChildren();
for(var i=0,l=I.length;i<l;i++){var J=I[i].getLabel();
if(J&&J.toLowerCase().indexOf(H)==0){return I[i];
}}return null;
},findItem:function(K,L){if(L!==false){K=K.toLowerCase();
}var M=this.getChildren();
var O;
for(var i=0,l=M.length;i<l;i++){O=M[i];
var N=O.getLabel();

if(N!=null){if(N.translate){N=N.translate();
}
if(L!==false){N=N.toLowerCase();
}
if(N.toString()==K.toString()){return O;
}}}return null;
}},destruct:function(){this._disposeObjects(u);
}});
})();
(function(){var c="listitem",b="qx.ui.form.ListItem",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(d,e,f){qx.ui.basic.Atom.call(this,d,e);

if(f!=null){this.setModel(f);
}},events:{"action":a},properties:{appearance:{refine:true,init:c}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var p="current-preview",o="execute",n="selected-preview",m="Number",l="preview-pane",k="selector-button",h="colorselector-cancelbutton",g="auto-button",f="colorselector-okbutton",d="mousedown",ba="teal",Y="maroon",X="qx.ui.control.ColorPopup",W="#666",V="changeValue",U="#333",T="#000",S="yellow",R="changeGreen",Q="colorpopup",w="_applyValue",x="__HN",u="blue",v="changeRed",s="field#",t="#CCC",q="Color Selector",r="changeVisibility",y="__HM",z="changeBlue",G="mouseover",E="Cancel",K="#FFF",I="right",M="Open ColorSelector",L="mouseout",B="#999",P="Automatic",O="Basic Colors",N="Preview (Old/New)",A="visible",C="Recent Colors",D="OK",F="field",H="green",J="red";
qx.Class.define(X,{extend:qx.ui.popup.Popup,implement:[qx.ui.form.IColorForm],construct:function(){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.VBox(5));
this._createChildControl(g);
this._createBoxes();
this._createChildControl(l);
this._createChildControl(k);
this.addListener(r,this._onChangeVisibility,this);
},properties:{appearance:{refine:true,init:Q},value:{nullable:true,apply:w,event:V},red:{check:m,init:null,nullable:true,event:v},green:{check:m,init:null,nullable:true,event:R},blue:{check:m,init:null,nullable:true,event:z}},members:{__HK:1e5,__HL:null,__HM:null,__HN:null,__HO:"recent",__HP:12,_createChildControlImpl:function(bp){var bq;

switch(bp){case F:bq=new qx.ui.core.Widget;
bq.addListener(d,this._onFieldMouseDown,this);
bq.addListener(G,this._onFieldMouseOver,this);
bq.addListener(L,this._onFieldMouseOut,this);
break;
case g:bq=new qx.ui.form.Button(this.tr(P));
bq.setAllowStretchX(true);
bq.addListener(o,this._onAutomaticBtnExecute,this);
this.add(bq);
break;
case k:bq=new qx.ui.form.Button(this.tr(M));
bq.addListener(o,this._onSelectorButtonExecute,this);
this.add(bq);
break;
case l:bq=new qx.ui.groupbox.GroupBox(this.tr(N));
bq.setLayout(new qx.ui.layout.HBox);
bq.add(this._createChildControl(n,true),{flex:1});
bq.add(this._createChildControl(p,true),{flex:1});
this.add(bq);
break;
case n:bq=new qx.ui.container.Composite(new qx.ui.layout.Basic);
break;
case p:bq=new qx.ui.container.Composite(new qx.ui.layout.Basic);
break;
case f:bq=new qx.ui.form.Button(this.tr(D));
bq.addListener(o,this._onColorSelectorOk,this);
break;
case h:bq=new qx.ui.form.Button(this.tr(E));
bq.addListener(o,this._onColorSelectorCancel,this);
break;
}return bq||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,bp);
},_createBoxes:function(){this.__HL={};
var bk=this._tables;
var bn,bj,bl;
var j=0;

for(var bm in bk){bn=bk[bm];
bj=new qx.ui.groupbox.GroupBox(bn.label);
bj.setLayout(new qx.ui.layout.HBox);
this.__HL[bm]=bj;
this.add(bj);

for(var i=0;i<this.__HP;i++){bl=this.getChildControl(s+(j++));
bl.setBackgroundColor(bn.values[i]||null);
bj.add(bl);
}}},_createColorSelector:function(){if(this.__HN){return;
}var bw=new qx.ui.window.Window(this.tr(q));
this.__HM=bw;
bw.setLayout(new qx.ui.layout.VBox(16));
bw.setResizable(false);
bw.moveTo(20,20);
this.__HN=new qx.ui.control.ColorSelector;
bw.add(this.__HN);
var bx=new qx.ui.container.Composite(new qx.ui.layout.HBox(8,I));
bw.add(bx);
var bz=this._createChildControl(h);
var by=this._createChildControl(f);
bx.add(bz);
bx.add(by);
},_applyValue:function(a,b){if(a===null){this.setRed(null);
this.setGreen(null);
this.setBlue(null);
}else{var c=qx.util.ColorUtil.stringToRgb(a);
this.setRed(c[0]);
this.setGreen(c[1]);
this.setBlue(c[2]);
}this.getChildControl(n).setBackgroundColor(a);
this._rotatePreviousColors();
},_rotatePreviousColors:function(){if(!this._tables){return;
}var bd=this._tables[this.__HO].values;
var be=this.__HL[this.__HO];

if(!bd){return;
}var bf=this.getValue();

if(!bf){return;
}var bc=bd.indexOf(bf);

if(bc!=-1){qx.lang.Array.removeAt(bd,bc);
}else if(bd.length==this.__HP){bd.shift();
}bd.push(bf);
var bb=be.getChildren();

for(var i=0;i<bb.length;i++){bb[i].setBackgroundColor(bd[i]||null);
}},_onFieldMouseDown:function(e){var bo=this.getChildControl(p).getBackgroundColor();
this.setValue(bo);

if(bo){this.hide();
}},_onFieldMouseOver:function(e){this.getChildControl(p).setBackgroundColor(e.getTarget().getBackgroundColor());
},_onFieldMouseOut:function(e){var bu=this.getRed();
var bt=this.getGreen();
var br=this.getBlue();
var bs=null;

if(bu!==null||bt!==null||br!==null){var bs=qx.util.ColorUtil.rgbToRgbString([bu,bt,br]);
}this.getChildControl(p).setBackgroundColor(bs);
},_onAutomaticBtnExecute:function(){this.setValue(null);
this.hide();
},_onSelectorButtonExecute:function(){this._createColorSelector();
this.exclude();
var bi=this.getRed();
var bh=this.getGreen();
var bg=this.getBlue();

if(bi===null||bh===null||bg===null){bi=255;
bh=255;
bg=255;
}this.__HN.setRed(bi);
this.__HN.setGreen(bh);
this.__HN.setBlue(bg);
this.__HM.open();
},_onColorSelectorOk:function(){var bv=this.__HN;
this.setValue(qx.util.ColorUtil.rgbToRgbString([bv.getRed(),bv.getGreen(),bv.getBlue()]));
this.__HM.close();
},_onColorSelectorCancel:function(){this.__HM.close();
},_onChangeVisibility:function(e){if(this.getVisibility()==A){var bD=this.getRed();
var bC=this.getGreen();
var bA=this.getBlue();
var bB=null;

if(bD!==null||bC!==null||bA!==null){var bB=qx.util.ColorUtil.rgbToRgbString([bD,bC,bA]);
}this.getChildControl(n).setBackgroundColor(bB);
this.getChildControl(p).setBackgroundColor(bB);
}},_tables:{core:{label:O,values:[T,U,W,B,t,K,J,H,u,S,ba,Y]},recent:{label:C,values:[]}}},destruct:function(){this._disposeObjects(y,x);
this._tables=this.__HL=null;
}});
})();
(function(){var l="legend",k="frame",j="middle",i="top",h="resize",g="qx.ui.groupbox.GroupBox",f="groupbox",d="_applyLegendPosition";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(p,q){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(k);
this._createChildControl(l);
if(p!=null){this.setLegend(p);
}
if(q!=null){this.setIcon(q);
}},properties:{appearance:{refine:true,init:f},legendPosition:{check:[i,j],init:j,apply:d,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(n){var o;

switch(n){case k:o=new qx.ui.container.Composite();
this._add(o,{left:0,top:6,right:0,bottom:0});
break;
case l:o=new qx.ui.basic.Atom();
o.addListener(h,this._repositionFrame,this);
this._add(o);
break;
}return o||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,n);
},_getContentPaddingTarget:function(){return this.getChildControl(k);
},_applyLegendPosition:function(e){if(this.getChildControl(l).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var b=this.getChildControl(l);
var a=this.getChildControl(k);
var c=b.getBounds().height;
if(this.getLegendPosition()==j){a.setLayoutProperties({"top":Math.round(c/2)});
}else if(this.getLegendPosition()==i){a.setLayoutProperties({"top":c});
}},getChildrenContainer:function(){return this.getChildControl(k);
},setLegend:function(r){var s=this.getChildControl(l);

if(r!==null){s.setLabel(r);
s.show();
}else{s.exclude();
}},getLegend:function(){return this.getChildControl(l).getLabel();
},setIcon:function(m){this.getChildControl(l).setIcon(m);
},getIcon:function(){this.getChildControl(l).getIcon();
}}});
})();
(function(){var a="qx.ui.layout.Basic";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(k,m){var q=this._getLayoutChildren();
var n,p,o,r,top;
for(var i=0,l=q.length;i<l;i++){n=q[i];
p=n.getSizeHint();
o=n.getLayoutProperties();
r=(o.left||0)+n.getMarginLeft();
top=(o.top||0)+n.getMarginTop();
n.renderLayout(r,top,p.width,p.height);
}},_computeSizeHint:function(){var g=this._getLayoutChildren();
var d,j,e;
var h=0,f=0;
var b,c;
for(var i=0,l=g.length;i<l;i++){d=g[i];
j=d.getSizeHint();
e=d.getLayoutProperties();
b=j.width+(e.left||0)+d.getMarginLeft()+d.getMarginRight();
c=j.height+(e.top||0)+d.getMarginTop()+d.getMarginBottom();

if(b>h){h=b;
}
if(c>f){f=c;
}}return {width:h,height:f};
}}});
})();
(function(){var co="brightness-handle",cn="hue-saturation-handle",cm="hsbSpinner",cl="rgbSpinner",ck="changeValue",cj="hexField",ci="hueSaturationField",ch="brightness-field",cg="mousedown",cf="rgb-spinner-red",bT="preview-content-old",bS="rgb-spinner-green",bR="brightnessField",bQ="hue-saturation-field",bP="hsb-spinner-brightness",bO="preview-content-new",bN="hue-saturation-pane",bM="rgb-spinner-blue",bL="hsb-spinner-hue",bK="hsb-spinner-saturation",cv="hex-field",cw="brightnessModifier",ct="blueModifier",cu="saturationModifier",cr="middle",cs="Number",cp="#",cq="redModifier",cx="greenModifier",cy="hueModifier",bX="Integer",bW="brightness-pane",ca="control-pane",bY="preset-grid",cc="mouseup",cb="preset-field-set",ce="qx.event.type.Event",cd="mousemove",bV="hex-field-composite",bU="rgb-spinner-composite",U="hsb-spinner-composite",V="control-bar",W="mousewheel",X="visual-pane",Y="input-field-set",ba="preview-field-set",bb="black",bc="_applyGreen",bd="#333",be="aqua",cC="colorbucket",cB="qx.event.type.Data",cA="Hex",cz="#BBB",cG="decoration/colorselector/brightness-handle.gif",cF="Visual",cE="_applySaturation",cD="Preview (Old/New)",cI="FFFFFF",cH="decoration/colorselector/brightness-field.png",bu="white",bv="orange",bs="_applyRed",bt="_applyBlue",by="maroon",bz="Presets",bw="_applyBrightness",bx="#999",bq="purple",br="red",bm="blue",bl="_applyHue",bo="decoration/colorselector/huesaturation-handle.gif",bn="colorselector",bi="qx.ui.control.ColorSelector",bh="lime",bk="#EEE",bj="olive",bg="RGB",bf="decoration/colorselector/huesaturation-field.jpg",bE="navy",bF="teal",bG="green",bH="yellow",bA="#666",bB="fuchsia",bC="Details",bD="",bI="colorbucket#",bJ="appear",bp="HSB";
qx.Class.define(bi,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IColorForm],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(V);
this.addListener(bJ,this._onAppear,this);
},events:{"dialogok":ce,"dialogcancel":ce,"changeValue":cB},properties:{appearance:{refine:true,init:bn},red:{check:bX,init:255,apply:bs},green:{check:bX,init:255,apply:bc},blue:{check:bX,init:255,apply:bt},hue:{check:cs,init:0,apply:bl},saturation:{check:cs,init:0,apply:cE},brightness:{check:cs,init:100,apply:bw}},members:{__yt:null,__yu:[by,br,bv,bH,bj,bq,bB,bh,bG,bE,bm,be,bF,bb,bd,bA,bx,cz,bk,bu],__yv:bD,__yw:0,__yx:0,__yy:0,__yz:true,__yA:false,_createChildControlImpl:function(x){var y;

switch(x){case V:y=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
y.add(this.getChildControl(ca));
y.add(this.getChildControl(X));
this._add(y);
break;
case X:y=new qx.ui.groupbox.GroupBox(this.tr(cF));
y.setLayout(new qx.ui.layout.HBox(10));
y.add(this.getChildControl(bN));
y.add(this.getChildControl(bW));
break;
case ca:y=new qx.ui.container.Composite(new qx.ui.layout.VBox(12));
y.add(this.getChildControl(cb));
y.add(this.getChildControl(Y));
y.add(this.getChildControl(ba),{flex:1});
break;
case bN:y=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
y.setAllowGrowY(false);
y.addListener(W,this._onHueSaturationPaneMouseWheel,this);
y.add(this.getChildControl(bQ));
y.add(this.getChildControl(cn),{left:0,top:256});
break;
case bQ:y=new qx.ui.basic.Image(bf);
y.addListener(cg,this._onHueSaturationFieldMouseDown,this);
break;
case cn:y=new qx.ui.basic.Image(bo);
y.addListener(cg,this._onHueSaturationFieldMouseDown,this);
y.addListener(cc,this._onHueSaturationHandleMouseUp,this);
y.addListener(cd,this._onHueSaturationHandleMouseMove,this);
break;
case bW:y=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
y.setAllowGrowY(false);
y.addListener(W,this._onBrightnessPaneMouseWheel,this);
y.add(this.getChildControl(ch));
y.add(this.getChildControl(co));
break;
case ch:y=new qx.ui.basic.Image(cH);
y.addListener(cg,this._onBrightnessFieldMouseDown,this);
break;
case co:y=new qx.ui.basic.Image(cG);
y.addListener(cg,this._onBrightnessHandleMouseDown,this);
y.addListener(cc,this._onBrightnessHandleMouseUp,this);
y.addListener(cd,this._onBrightnessHandleMouseMove,this);
break;
case cb:y=new qx.ui.groupbox.GroupBox(this.tr(bz));
y.setLayout(new qx.ui.layout.Grow());
y.add(this.getChildControl(bY));
break;
case cC:y=new qx.ui.core.Widget();
y.addListener(cg,this._onColorFieldClick,this);
break;
case bY:D=new qx.ui.layout.Grid(3,3);
y=new qx.ui.container.Composite(D);
var E;
var C;

for(var i=0;i<2;i++){for(var j=0;j<10;j++){C=i*10+j;
E=this.getChildControl(bI+C);
E.setBackgroundColor(this.__yu[C]);
y.add(E,{column:j,row:i});
}}break;
case Y:y=new qx.ui.groupbox.GroupBox(this.tr(bC));
var D=new qx.ui.layout.VBox();
D.setSpacing(10);
y.setLayout(D);
y.add(this.getChildControl(bV));
y.add(this.getChildControl(bU));
y.add(this.getChildControl(U));
break;
case ba:y=new qx.ui.groupbox.GroupBox(this.tr(cD));
var D=new qx.ui.layout.HBox(10);
y.setLayout(D);
y.add(this.getChildControl(bT),{flex:1});
y.add(this.getChildControl(bO),{flex:1});
break;
case bV:var B=new qx.ui.layout.HBox(4);
B.setAlignY(cr);
y=new qx.ui.container.Composite(B);
var G=new qx.ui.basic.Label(this.tr(cA));
y.add(G);
var F=new qx.ui.basic.Label(cp);
y.add(F);
y.add(this.getChildControl(cv));
break;
case cv:y=new qx.ui.form.TextField(cI);
y.setMaxLength(6);
y.setFilter(/[0-9A-Fa-f]/);
y.setWidth(55);
y.addListener(ck,this._onHexFieldChange,this);
break;
case bU:var B=new qx.ui.layout.HBox(4);
B.setAlignY(cr);
y=new qx.ui.container.Composite(B);
var z=new qx.ui.basic.Label(this.tr(bg));
z.setWidth(25);
y.add(z);
y.add(this.getChildControl(cf));
y.add(this.getChildControl(bS));
y.add(this.getChildControl(bM));
break;
case cf:y=new qx.ui.form.Spinner(0,255,255);
y.setWidth(50);
y.addListener(ck,this._setRedFromSpinner,this);
break;
case bS:y=new qx.ui.form.Spinner(0,255,255);
y.setWidth(50);
y.addListener(ck,this._setGreenFromSpinner,this);
break;
case bM:y=new qx.ui.form.Spinner(0,255,255);
y.setWidth(50);
y.addListener(ck,this._setBlueFromSpinner,this);
break;
case U:var B=new qx.ui.layout.HBox(4);
B.setAlignY(cr);
y=new qx.ui.container.Composite(B);
var A=new qx.ui.basic.Label(this.tr(bp));
A.setWidth(25);
y.add(A);
y.add(this.getChildControl(bL));
y.add(this.getChildControl(bK));
y.add(this.getChildControl(bP));
break;
case bL:y=new qx.ui.form.Spinner(0,0,360);
y.setWidth(50);
y.addListener(ck,this._setHueFromSpinner,this);
break;
case bK:y=new qx.ui.form.Spinner(0,0,100);
y.setWidth(50);
y.addListener(ck,this._setSaturationFromSpinner,this);
break;
case bP:y=new qx.ui.form.Spinner(0,100,100);
y.setWidth(50);
y.addListener(ck,this._setBrightnessFromSpinner,this);
break;
case bT:y=new qx.ui.core.Widget();
break;
case bO:y=new qx.ui.core.Widget();
break;
}return y||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,x);
},setValue:function(g){var h;

if(g==null){this.__yz=true;
h=[255,255,255];
}else{h=qx.util.ColorUtil.stringToRgb(g);
this.__yz=false;
}this.__yA=true;
this.setRed(h[0]);
this.setGreen(h[1]);
this.__yA=false;
this.setBlue(h[2]);
},getValue:function(){return this.__yz?null:cp+qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);
},resetValue:function(){this.__yz=true;
this.__yA=true;
this.setRed(255);
this.setGreen(255);
this.__yA=false;
this.setBlue(255);
},__yB:function(){if(!this.__yA){this.__yz=false;
this.fireDataEvent(ck,this.getValue());
}},_applyRed:function(d,f){if(this.__yt===null){this.__yt=cq;
}
if(this.__yt!==cl){this.getChildControl(cf).setValue(d);
}
if(this.__yt!==cj){this._setHexFromRgb();
}
switch(this.__yt){case cl:case cj:case cq:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__yB();

if(this.__yt===cq){this.__yt=null;
}},_applyGreen:function(n,o){if(this.__yt===null){this.__yt=cx;
}
if(this.__yt!==cl){this.getChildControl(bS).setValue(n);
}
if(this.__yt!==cj){this._setHexFromRgb();
}
switch(this.__yt){case cl:case cj:case cx:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__yB();

if(this.__yt===cx){this.__yt=null;
}},_applyBlue:function(cP,cQ){if(this.__yt===null){this.__yt=ct;
}
if(this.__yt!==cl){this.getChildControl(bM).setValue(cP);
}
if(this.__yt!==cj){this._setHexFromRgb();
}
switch(this.__yt){case cl:case cj:case ct:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__yB();

if(this.__yt===ct){this.__yt=null;
}},_applyHue:function(cN,cO){if(this.__yt===null){this.__yt=cy;
}
if(this.__yt!==cm){this.getChildControl(bL).setValue(cN);
}
if(this.__yt!==ci){if(this.getChildControl(cn).getBounds()){this.getChildControl(cn).setDomLeft(Math.round(cN/1.40625)+this.getChildControl(bN).getPaddingLeft());
}else{this.getChildControl(cn).setLayoutProperties({left:Math.round(cN/1.40625)});
}}
switch(this.__yt){case cm:case ci:case cy:this._setRgbFromHue();
}this._setBrightnessGradiant();

if(this.__yt===cy){this.__yt=null;
}},_applySaturation:function(cK,cL){if(this.__yt===null){this.__yt=cu;
}
if(this.__yt!==cm){this.getChildControl(bK).setValue(cK);
}
if(this.__yt!==ci){this._setBrightnessGradiant();

if(this.getChildControl(cn).getBounds()){this.getChildControl(cn).setDomTop(256-Math.round(cK*2.56)+this.getChildControl(bN).getPaddingTop());
}else{this.getChildControl(cn).setLayoutProperties({top:256-Math.round(cK*2.56)});
}}
switch(this.__yt){case cm:case ci:case cu:this._setRgbFromHue();
}
if(this.__yt===cu){this.__yt=null;
}},_applyBrightness:function(u,v){if(this.__yt===null){this.__yt=cw;
}
if(this.__yt!==cm){this.getChildControl(bP).setValue(u);
}
if(this.__yt!==bR){var w=256-Math.round(u*2.56);

if(this.getChildControl(co).getBounds()){this.getChildControl(co).setDomTop(w+this.getChildControl(bW).getPaddingTop());
}else{this.getChildControl(co).setLayoutProperties({top:w});
}}
switch(this.__yt){case cm:case bR:case cw:this._setRgbFromHue();
}
if(this.__yt===cw){this.__yt=null;
}},_onBrightnessHandleMouseDown:function(e){this.getChildControl(co).capture();
this.__yv=co;
var c=this.getChildControl(ch).getContainerLocation();
var b=this.getChildControl(co).getContainerLocation();
var a=this.getChildControl(ch).getBounds();
this.__yw=c.top+(e.getDocumentTop()-b.top)-a.top;
e.stopPropagation();
},_onBrightnessHandleMouseUp:function(e){this.getChildControl(co).releaseCapture();
this.__yv=null;
},_onBrightnessHandleMouseMove:function(e){if(this.__yv===co){this._setBrightnessOnFieldEvent(e);
e.stopPropagation();
}},_onBrightnessFieldMouseDown:function(e){var location=this.getChildControl(ch).getContainerLocation();
var I=this.getChildControl(co).getBounds();
this.__yw=location.top+(I.height/2);
this._setBrightnessOnFieldEvent(e);
this.getChildControl(co).capture();
this.__yv=co;
},_onBrightnessPaneMouseWheel:function(e){this.setBrightness(qx.lang.Number.limit(this.getBrightness()+e.getWheelDelta(),0,100));
e.stop();
},_setBrightnessOnFieldEvent:function(e){var O=qx.lang.Number.limit(e.getDocumentTop()-this.__yw,0,256);
this.__yt=bR;

if(this.getChildControl(co).getBounds()){this.getChildControl(co).setDomTop(O);
}else{this.getChildControl(co).setLayoutProperties({top:O});
}this.setBrightness(100-Math.round(O/2.56));
this.__yt=null;
},_onHueSaturationHandleMouseUp:function(e){if(this.__yv){e.stopPropagation();
this.getChildControl(cn).releaseCapture();
this.__yv=null;
}},_onHueSaturationHandleMouseMove:function(e){if(this.__yv===cn){this._setHueSaturationOnFieldEvent(e);
e.stopPropagation();
}},_onHueSaturationFieldMouseDown:function(e){var location=this.getChildControl(bQ).getContainerLocation();
var J=this.getChildControl(cn).getBounds();
var K=this.getChildControl(bQ).getBounds();
this.__yx=location.top+(J.height/2)-K.top;
this.__yy=location.left+(J.width/2)-K.left;
this._setHueSaturationOnFieldEvent(e);
this.getChildControl(cn).capture();
this.__yv=cn;
},_onHueSaturationPaneMouseWheel:function(e){this.setSaturation(qx.lang.Number.limit(this.getSaturation()+e.getWheelDelta(),0,100));
e.stop();
},_setHueSaturationOnFieldEvent:function(e){var q=qx.lang.Number.limit(e.getDocumentTop()-this.__yx,0,256);
var p=qx.lang.Number.limit(e.getDocumentLeft()-this.__yy,0,256);
this.getChildControl(cn).setDomPosition(p,q);
this.__yt=ci;
this.setSaturation(100-Math.round(q/2.56));
this.setHue(Math.round(p*1.40625));
this.__yt=null;
},_setRedFromSpinner:function(){if(this.__yt!==null){return;
}this.__yt=cl;
this.setRed(this.getChildControl(cf).getValue());
this.__yt=null;
},_setGreenFromSpinner:function(){if(this.__yt!==null){return;
}this.__yt=cl;
this.setGreen(this.getChildControl(bS).getValue());
this.__yt=null;
},_setBlueFromSpinner:function(){if(this.__yt!==null){return;
}this.__yt=cl;
this.setBlue(this.getChildControl(bM).getValue());
this.__yt=null;
},_setHueFromSpinner:function(){if(this.__yt!==null){return;
}this.__yt=cm;
this.setHue(this.getChildControl(bL).getValue());
this.__yt=null;
},_setSaturationFromSpinner:function(){if(this.__yt!==null){return;
}this.__yt=cm;
this.setSaturation(this.getChildControl(bK).getValue());
this.__yt=null;
},_setBrightnessFromSpinner:function(){if(this.__yt!==null){return;
}this.__yt=cm;
this.setBrightness(this.getChildControl(bP).getValue());
this.__yt=null;
},_onHexFieldChange:function(e){if(this.__yt!==null){return;
}
try{var s=this.getChildControl(cv);
var r=qx.util.ColorUtil.hexStringToRgb(cp+s.getValue());
}catch(P){return;
}this.__yt=cj;
this.setRed(r[0]);
this.setGreen(r[1]);
this.setBlue(r[2]);
this.__yt=null;
},_setHexFromRgb:function(){var cM=qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(cv).setValue(cM);
},_onColorFieldClick:function(e){var L=e.getTarget().getBackgroundColor();

if(!L){return this.error("Missing backgroundColor value for field: "+e.getTarget());
}var M=qx.util.ColorUtil.stringToRgb(L);
this.setRed(M[0]);
this.setGreen(M[1]);
this.setBlue(M[2]);
},_setHueFromRgb:function(){switch(this.__yt){case cm:case ci:case bR:break;
default:var N=qx.util.ColorUtil.rgbToHsb([this.getRed(),this.getGreen(),this.getBlue()]);
this.setHue(N[0]);
this.setSaturation(N[1]);
this.setBrightness(N[2]);
}},_setRgbFromHue:function(){switch(this.__yt){case cl:case cj:break;
default:var H=qx.util.ColorUtil.hsbToRgb([this.getHue(),this.getSaturation(),this.getBrightness()]);
this.setRed(H[0]);
this.setGreen(H[1]);
this.setBlue(H[2]);
}},_setPreviewFromRgb:function(){var t=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(bO).setBackgroundColor(t);
},setPreviousColor:function(Q,R,S){var T=qx.util.ColorUtil.rgbToRgbString([Q,R,S]);
this.getChildControl(bT).setBackgroundColor(T);
this.setRed(Q);
this.setGreen(R);
this.setBlue(S);
},_setBrightnessGradiant:function(){var k=qx.util.ColorUtil;
var l=k.hsbToRgb([this.getHue(),this.getSaturation(),255]);
var m=k.rgbToRgbString(l);
this.getChildControl(ch).setBackgroundColor(m);
},_onAppear:function(e){var cJ=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(bT).setBackgroundColor(cJ);
this.getChildControl(bO).setBackgroundColor(cJ);
}}});
})();
(function(){var l="textfield",k="",j="downbutton",i="upbutton",h="Number",g="inner",f="PageUp",d="Boolean",c="changeValue",b="Down",K="Up",J="execute",I="PageDown",H="changeLocale",G="qx.dynlocale",F="on",E="_applyEditable",D="_applyWrap",C="keydown",B="\-]",s="mousewheel",t="_applyValue",q="number",r="_applyMinimum",o="qx.util.format.NumberFormat",p="[0-9",m="keyup",n="spinner",u="this._checkValue(value)",v="_applyMaximum",x="changeNumberFormat",w="changeMaximum",z="changeMinimum",y="_applyNumberFormat",A="qx.ui.form.Spinner";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.INumberForm,qx.ui.form.IRange,qx.ui.form.IForm],include:[qx.ui.core.MContentPadding,qx.ui.form.MForm],construct:function(bv,bw,bx){qx.ui.core.Widget.call(this);
var by=new qx.ui.layout.Grid();
by.setColumnFlex(0,1);
by.setRowFlex(0,1);
by.setRowFlex(1,1);
this._setLayout(by);
this.addListener(C,this._onKeyDown,this);
this.addListener(m,this._onKeyUp,this);
this.addListener(s,this._onMouseWheel,this);

if(qx.core.Variant.isSet(G,F)){qx.locale.Manager.getInstance().addListener(H,this._onChangeLocale,this);
}this._createChildControl(l);
this._createChildControl(i);
this._createChildControl(j);
if(bv!=null){this.setMinimum(bv);
}
if(bx!=null){this.setMaximum(bx);
}
if(bw!==undefined){this.setValue(bw);
}else{this.initValue();
}},properties:{appearance:{refine:true,init:n},focusable:{refine:true,init:true},singleStep:{check:h,init:1},pageStep:{check:h,init:10},minimum:{check:h,apply:r,init:0,event:z},value:{check:u,nullable:true,apply:t,init:0,event:c},maximum:{check:h,apply:v,init:100,event:w},wrap:{check:d,init:false,apply:D},editable:{check:d,init:true,apply:E},numberFormat:{check:o,apply:y,nullable:true},allowShrinkY:{refine:true,init:false}},members:{__yC:null,__yD:false,__yE:false,_createChildControlImpl:function(S){var T;

switch(S){case l:T=new qx.ui.form.TextField();
T.setFilter(this._getFilterRegExp());
T.addState(g);
T.setWidth(40);
T.setFocusable(false);
T.addListener(c,this._onTextChange,this);
this._add(T,{column:0,row:0,rowSpan:2});
break;
case i:T=new qx.ui.form.RepeatButton();
T.addState(g);
T.setFocusable(false);
T.addListener(J,this._countUp,this);
this._add(T,{column:1,row:0});
break;
case j:T=new qx.ui.form.RepeatButton();
T.addState(g);
T.setFocusable(false);
T.addListener(J,this._countDown,this);
this._add(T,{column:1,row:1});
break;
}return T||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,S);
},_getFilterRegExp:function(){var bp=qx.locale.Number.getDecimalSeparator(qx.locale.Manager.getInstance().getLocale());
var bo=qx.locale.Number.getGroupSeparator(qx.locale.Manager.getInstance().getLocale());
var bn=k;
var bl=k;

if(this.getNumberFormat()!==null){bn=this.getNumberFormat().getPrefix()||k;
bl=this.getNumberFormat().getPostfix()||k;
}var bm=new RegExp(p+qx.lang.String.escapeRegexpChars(bp)+qx.lang.String.escapeRegexpChars(bo)+qx.lang.String.escapeRegexpChars(bn)+qx.lang.String.escapeRegexpChars(bl)+B);
return bm;
},_forwardStates:{focused:true,invalid:true},tabFocus:function(){var P=this.getChildControl(l);
P.getFocusElement().focus();
P.selectAllText();
},_applyMinimum:function(bb,bc){if(this.getMaximum()<bb){this.setMaximum(bb);
}
if(this.getValue()<bb){this.setValue(bb);
}else{this._updateButtons();
}},_applyMaximum:function(bd,be){if(this.getMinimum()>bd){this.setMinimum(bd);
}
if(this.getValue()>bd){this.setValue(bd);
}else{this._updateButtons();
}},_applyEnabled:function(bj,bk){qx.ui.core.Widget.prototype._applyEnabled.call(this,bj,bk);
this._updateButtons();
},_checkValue:function(bz){return typeof bz===q&&bz>=this.getMinimum()&&bz<=this.getMaximum();
},_applyValue:function(U,V){var W=this.getChildControl(l);
this._updateButtons();
this.__yC=U;
if(U!==null){if(this.getNumberFormat()){W.setValue(this.getNumberFormat().format(U));
}else{W.setValue(U+k);
}}else{W.setValue(k);
}},_applyEditable:function(bs,bt){var bu=this.getChildControl(l);

if(bu){bu.setReadOnly(!bs);
}},_applyWrap:function(Q,R){this._updateButtons();
},_applyNumberFormat:function(X,Y){var ba=this.getChildControl(l);
ba.setFilter(this._getFilterRegExp());
this.getNumberFormat().addListener(x,this._onChangeNumberFormat,this);
this._applyValue(this.__yC,undefined);
},_getContentPaddingTarget:function(){return this.getChildControl(l);
},_updateButtons:function(){var bh=this.getChildControl(i);
var bg=this.getChildControl(j);
var bi=this.getValue();

if(!this.getEnabled()){bh.setEnabled(false);
bg.setEnabled(false);
}else{if(this.getWrap()){bh.setEnabled(true);
bg.setEnabled(true);
}else{if(bi!==null&&bi<this.getMaximum()){bh.setEnabled(true);
}else{bh.setEnabled(false);
}if(bi!==null&&bi>this.getMinimum()){bg.setEnabled(true);
}else{bg.setEnabled(false);
}}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case f:this.__yD=true;
case K:this.getChildControl(i).press();
break;
case I:this.__yE=true;
case b:this.getChildControl(j).press();
break;
default:return ;
}e.stopPropagation();
e.preventDefault();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case f:this.getChildControl(i).release();
this.__yD=false;
break;
case K:this.getChildControl(i).release();
break;
case I:this.getChildControl(j).release();
this.__yE=false;
break;
case b:this.getChildControl(j).release();
break;
}},_onMouseWheel:function(e){if(e.getWheelDelta()>0){this._countDown();
}else{this._countUp();
}e.stop();
},_onTextChange:function(e){var bC=this.getChildControl(l);
var bD;
if(this.getNumberFormat()){try{bD=this.getNumberFormat().parse(bC.getValue());
}catch(a){}}if(bD===undefined){bD=parseFloat(bC.getValue(),10);
}if(!isNaN(bD)){if(bD>this.getMaximum()){bC.setValue(this.getMaximum()+k);
return;
}else if(bD<this.getMinimum()){bC.setValue(this.getMinimum()+k);
return;
}this.setValue(bD);
}else{this._applyValue(this.__yC,undefined);
}},_onChangeLocale:function(N){if(this.getNumberFormat()!==null){this.setNumberFormat(this.getNumberFormat());
var O=this.getChildControl(l);
O.setFilter(this._getFilterRegExp());
O.setValue(this.getNumberFormat().format(this.getValue()));
}},_onChangeNumberFormat:function(L){var M=this.getChildControl(l);
M.setFilter(this._getFilterRegExp());
M.setValue(this.getNumberFormat().format(this.getValue()));
},_countUp:function(){if(this.__yD){var bB=this.getValue()+this.getPageStep();
}else{var bB=this.getValue()+this.getSingleStep();
}if(this.getWrap()){if(bB>this.getMaximum()){var bA=this.getMaximum()-bB;
bB=this.getMinimum()+bA;
}}this.gotoValue(bB);
},_countDown:function(){if(this.__yE){var br=this.getValue()-this.getPageStep();
}else{var br=this.getValue()-this.getSingleStep();
}if(this.getWrap()){if(br<this.getMinimum()){var bq=this.getMinimum()+br;
br=this.getMaximum()-bq;
}}this.gotoValue(br);
},gotoValue:function(bf){return this.setValue(Math.min(this.getMaximum(),Math.max(this.getMinimum(),bf)));
}},destruct:function(){if(qx.core.Variant.isSet(G,F)){qx.locale.Manager.getInstance().removeListener(H,this._onChangeLocale,this);
}}});
})();
(function(){var b="pane",a="qx.ui.container.Scroll";
qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){qx.ui.core.scroll.AbstractScrollArea.call(this);

if(content){this.add(content);
}},members:{add:function(d){this.getChildControl(b).add(d);
},remove:function(c){this.getChildControl(b).remove(c);
},getChildren:function(){return this.getChildControl(b).getChildren();
},_getContentPaddingTarget:function(){return this.getChildControl(b);
}}});
})();
(function(){var e="arrow",d="qx.ui.toolbar.MenuButton",c="Boolean",b="_applyShowArrow",a="toolbar-menubutton";
qx.Class.define(d,{extend:qx.ui.menubar.Button,properties:{appearance:{refine:true,init:a},showArrow:{check:c,init:false,themeable:true,apply:b}},members:{_createChildControlImpl:function(h){var i;

switch(h){case e:i=new qx.ui.basic.Image();
i.setAnonymous(true);
this._addAt(i,10);
break;
}return i||qx.ui.menubar.Button.prototype._createChildControlImpl.call(this,h);
},_applyShowArrow:function(f,g){if(f){this._showChildControl(e);
}else{this._excludeChildControl(e);
}}}});
})();
(function(){var j="checked",i="qx.ui.form.RadioGroup",h="Boolean",g="menu-radiobutton",f="_applyValue",d="qx.ui.menu.RadioButton",c="changeValue",b="_applyGroup",a="execute";
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(o,p){qx.ui.menu.AbstractButton.call(this);
if(o!=null){this.setLabel(o);
}
if(p!=null){this.setMenu(p);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:h,nullable:true,event:c,apply:f,init:false},group:{check:i,nullable:true,apply:b}},members:{_applyValue:function(m,n){m?this.addState(j):this.removeState(j);
},_applyGroup:function(k,l){if(l){l.remove(this);
}
if(k){k.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var a="inspector.console.ConsoleWindow";
qx.Class.define(a,{extend:inspector.components.AbstractWindow,construct:function(name,c){inspector.components.AbstractWindow.call(this,name,c);
this.__Pj=new inspector.console.View(this._model);
this.add(this.__Pj,{edge:0});
},members:{__Pj:null,setInitSizeAndPosition:function(){var g=qx.bom.Viewport.getWidth()-300;
var h=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(0,2*h+30);
this.setWidth(g);
this.setHeight(h);
},inspectObjectByInternalId:function(b){this.__Pj.inspectObjectByInternalId(b);
},inspectObjectByDomSelecet:function(d,e){this.__Pj.inspectObjectByDomSelecet(d,e);
},inspectObject:function(f){this.__Pj.inspectObject(f);
},goToDefaultView:function(){this.__Pj.goToDefaultView();
}},destruct:function(){this.__Pj.dispose();
this.__Pj=null;
}});
})();
(function(){var m="",l="changeApplication",k="_consoleButton",j="_findField",i="&gt;",h="changeValue",g="_stack",f="execute",d="Filter...",c='"',F="'",E="&lt;",D="inspector.console.View",C="_consoleView",B="<",A="changeSelection",z="&amp;",y="&#39;",x="DOM",w="_domButton",u="&quot;",v="&",s="Console",t="?",q="Clear",r=">",n="_domView",p="_clearButton";
qx.Class.define(D,{extend:inspector.components.AbstractView,construct:function(a){inspector.components.AbstractView.call(this);
this._model=a;
this._clearButton=new qx.ui.toolbar.Button(q);
this._toolbar.add(this._clearButton);
this._clearButton.addListener(f,function(){this._stack.getSelection()[0].clear();
},this);
this._toolbar.add(new qx.ui.toolbar.Separator());
this._consoleButton=new qx.ui.toolbar.RadioButton(s);
this._toolbar.add(this._consoleButton);
this._domButton=new qx.ui.toolbar.RadioButton(x);
this._toolbar.add(this._domButton);
this._toolbar.addSpacer();
this._findField=new qx.ui.form.TextField();
this._findField.setPlaceholder(d);
this._findField.setLiveUpdate(true);
this._findField.setMarginRight(5);
this._toolbar.add(this._findField);
this._findField.addListener(h,function(e){this._stack.getSelection()[0].filter(e.getData());
},this);
this._stack=new qx.ui.container.Stack();
this.add(this._stack,{flex:1});
this._consoleView=new inspector.console.ConsoleView(this);
this._stack.add(this._consoleView,{flex:1});
this._domView=new inspector.console.DomView(this);
this._stack.add(this._domView,{flex:1});
var b=new qx.ui.form.RadioGroup(this._consoleButton,this._domButton);
b.addListener(A,function(e){this._findField.setValue(m);

if(b.getSelection()[0]==this._consoleButton){this._stack.setSelection([this._consoleView]);
}else if(b.getSelection()[0]==this._domButton){this._stack.setSelection([this._domView]);
}else{this._consoleButton.setValue(true);
}},this);
this.__Pk=this._model.addListener(l,function(e){var L=this._model.getWindow();

if(L==null){return;
}inspector.console.Appender.consoleView=this._consoleView;
L.qx.log.Logger.unregister(inspector.console.Appender);
L.qx.log.Logger.register(inspector.console.Appender);
},this);
},members:{_model:null,__Pk:null,escapeHtml:function(I){function J(G){switch(G){case B:return E;
case r:return i;
case v:return z;
case F:return y;
case c:return u;
}return t;
}return String(I).replace(/[<>&"']/g,J);
},inspectObjectByInternalId:function(H){var o=this._consoleView.getObjectById(H);
this.inspectObject(o);
},inspectObjectByDomSelecet:function(M,N){this._domView.setObjectByIndex(M,N);
this._findField.setValue(m);
},inspectObject:function(K){this._domView.setObject(K.object,K.name);
this._domButton.setValue(true);
},goToDefaultView:function(){this._consoleButton.setValue(true);
this._domView.clear();
}},destruct:function(){this._model.removeListenerById(this.__Pk);
this._model=null;
this._disposeObjects(p,k,w,j,g,C,n);
}});
})();
(function(){var g="_applyDynamic",f="changeSelection",d="Boolean",c="qx.ui.container.Stack";
qx.Class.define(c,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(f,this.__mP,this);
},properties:{dynamic:{check:d,init:false,apply:g}},members:{_applyDynamic:function(j){var m=this._getChildren();
var k=this.getSelection()[0];
var n;

for(var i=0,l=m.length;i<l;i++){n=m[i];

if(n!=k){if(j){m[i].exclude();
}else{m[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(h){return true;
},__mP:function(e){var r=e.getOldData()[0];
var s=e.getData()[0];

if(r){if(this.isDynamic()){r.exclude();
}else{r.hide();
}}
if(s){s.show();
}},add:function(o){this._add(o);
var p=this.getSelection()[0];

if(!p){this.setSelection([o]);
}else if(p!==o){if(this.isDynamic()){o.exclude();
}else{o.hide();
}}},remove:function(a){this._remove(a);

if(this.getSelection()[0]===a){var b=this._getChildren()[0];

if(b){this.setSelection([b]);
}else{this.resetSelection();
}}},indexOf:function(q){return this._indexOf(q);
},getChildren:function(){return this._getChildren();
},previous:function(){var z=this.getSelection()[0];
var x=this._indexOf(z)-1;
var A=this._getChildren();

if(x<0){x=A.length-1;
}var y=A[x];
this.setSelection([y]);
},next:function(){var u=this.getSelection()[0];
var t=this._indexOf(u)+1;
var v=this._getChildren();
var w=v[t]||v[0];
this.setSelection([w]);
}}});
})();
(function(){var r="",q=")",p="Tab",o="'>",n="qx.core.Init.getApplication().inspectObjectByInternalId(",m="Down",l="Up",k="warning",j="error",h="Control",br="info",bq="(",bp="<span class='ins_console_link' onclick='",bo="display",bn="<div class='ins_console_common'><div class='",bm="Escape",bl="Enter",bk="ins_console_warn",bj="]</span> ",bi="ins_console_return_qxobject",y="changeValue",z="qx.client",w="keydown",x="Courier New",u=", ...",v="' class='ins_console_icon'>",s="\"qx.core.Init.getApplication().setWidgetByHash('",t="<img src='",E="ins_console_return_primitive",F="ins_console_debug",N="&nbsp;",L="<span class='ins_console_dom_link' onclick='",V="input",Q="Space",be=">>>&nbsp;",bb="ins_console_text",H="middle",bh=" more",bg="<span class='ins_console_link' onclick=",bf="ins_console_error",G="inspector.console.ConsoleView",J="ins_console_info",K=" </span>",M="</div></div>",O="]",R="[",X="inspector/images/shell/",bd=", ",A="keyup",B="ins_console_return_object",I="ins_console_return_array",U="</span>",T="mshtml",S="'>inspect Object</span>",ba="keypress",Y="none",P="', 'console');\"> ",W=" [",g=">>>",bc=".",C="Icon.png",D="scroll";
qx.Class.define(G,{extend:qx.ui.core.Widget,construct:function(console){qx.ui.core.Widget.call(this);
this._console=console;
this._autoCompletePopup=new inspector.console.AutoCompletePopup(this);
this._history=[];
this._historyCounter=-1;
this._objectFolder=[];
this._objectFolderIndex=0;
this._filter=r;
this._setLayout(new qx.ui.layout.VBox());
this._content=new qx.ui.embed.Html(r);
this._content.setOverflowY(D);
this._add(this._content,{flex:1});
var bH=new qx.ui.container.Composite();
bH.setDecorator(V);
var bI=new qx.ui.layout.HBox();
bI.setAlignY(H);
bH.setLayout(bI);
this._add(bH);
var bG=new qx.ui.basic.Label(g);
var bF=new qx.bom.Font(12,[x]);
bG.setFont(bF);
bH.add(bG);
this._inputTextField=new qx.ui.form.TextField(r);
this._inputTextField.setLiveUpdate(true);
this._inputTextField.setDecorator(null);
this._inputTextField.setFont(bF);
bH.add(this._inputTextField,{flex:1});
this._inputTextField.addListener(w,this._keyDownHandler,this);
this._inputTextField.addListener(A,this._keyUpHandler,this);
this._inputTextField.addListener(ba,this._keyPressHandler,this);
this._inputTextField.addListener(y,function(e){if(this._autoCompletePopup.isOnScreen()){this._autoCompletePopup.load(e.getData());
}},this);
},members:{clear:function(){this._content.setHtml(r);
},getObjectById:function(bE){return this._objectFolder[bE];
},filter:function(bs){this._filter=bs;
try{var bu=this._content.getContentElement().getDomElement().childNodes;
var bt=new RegExp(this._filter);
for(var i=0;i<bu.length;i++){if(qx.core.Variant.isSet(z,T)){var content=bu[i].innerText;
}else{var content=bu[i].textContent;
}if(qx.dom.Node.isElement(bu[i])){if(bt.test(content)){qx.bom.element.Style.set(bu[i],bo,null);
}else{qx.bom.element.Style.set(bu[i],bo,Y);
}}}}catch(e){alert("Unable to filter: "+e);
}},chooseAutoCompleteValue:function(){var bT=this._inputTextField.getValue();
var name=this._autoCompletePopup.getCurrentSelection();
if(name){var bS=bT.substring(bT.lastIndexOf(bc)+1);
name=name.substring(bS.length,name.length);
this.appendString(name);
}this._autoCompletePopup.hide();
this._inputTextField.focus();
},appendString:function(a){if(a!=null){this._inputTextField.setValue(this._inputTextField.getValue()+a);
if(this._inputTextField.getValue().lastIndexOf(bq)!=-1){var b=this._inputTextField.getValue().lastIndexOf(bq)+1;
var c=this._inputTextField.getValue().length-1;
this._inputTextField.setTextSelection(b,c);
}}},_process:function(cb){this._printText(this._console.escapeHtml(cb));

try{var cc=inspector.console.Util.evalOnIframe(cb);

if(cc!=null){this._objectFolder[this._objectFolderIndex]={name:cb,object:cc};
this._printReturnValue(cc);
this._objectFolderIndex++;
}}catch(ca){this.error(ca);
}},_keyDownHandler:function(e){if(e.getKeyIdentifier()==bm){this._autoCompletePopup.hide();
return;
}if(e.getKeyIdentifier()==bl){if(!this._autoCompletePopup.isOnScreen()){this._history.unshift(this._inputTextField.getValue());
this._process(this._inputTextField.getValue());
this._inputTextField.setValue(r);
this._historyCounter=-1;
if(this._history.length>20){this._history.pop();
}}else{this.chooseAutoCompleteValue();
}return;
}if(e.getKeyIdentifier()==l){e.preventDefault();
if(!this._autoCompletePopup.isOnScreen()){if(this._history[this._historyCounter+1]!=undefined){this._historyCounter++;
this._inputTextField.setValue(this._history[this._historyCounter]);
}}return;
}if(e.getKeyIdentifier()==m){e.preventDefault();
if(!this._autoCompletePopup.isOnScreen()){if(this._historyCounter>0){this._historyCounter--;
this._inputTextField.setValue(this._history[this._historyCounter]);
}}return;
}if(e.getKeyIdentifier()==h){this._ctrl=true;
return;
}if(e.getKeyIdentifier()==Q||e.getKeyIdentifier()==p){if(this._ctrl||e.getKeyIdentifier()==p){e.preventDefault();
if(e.getKeyIdentifier()==p){var self=this;
window.setTimeout(function(){var length=self._inputTextField.getValue().length;
self._inputTextField.setTextSelection(length,length);
},0);
}try{var ch=qx.bom.element.Location.getLeft(this.getContainerElement().getDomElement());
var top=qx.bom.element.Location.getTop(this._inputTextField.getContentElement().getDomElement())-this._autoCompletePopup.getHeight();
this._autoCompletePopup.open(this._inputTextField.getValue(),ch,top);
var self=this;
window.setTimeout(function(){self._inputTextField.focus();
},0);
}catch(bv){this.info(bv);
}}return;
}},_keyUpHandler:function(e){if(e.getKeyIdentifier()==h){this._ctrl=false;
}},_keyPressHandler:function(e){if(this._autoCompletePopup.isOnScreen()){if(e.getKeyIdentifier()==m){this._autoCompletePopup.selectionDown();
}else if(e.getKeyIdentifier()==l){this._autoCompletePopup.selectionUp();
}}},_scrollToLastLine:function(){qx.ui.core.queue.Manager.flush();
var self=this;
window.setTimeout(function(){var bP=self._content.getContentElement();
var bO=self._content.getContentElement().getDomElement();

if(bO!=null){var bN=qx.bom.element.Dimension.getContentHeight(bO);
bP.scrollToY(bN);
}},0);
},_printReturnValue:function(bJ){var bK=qx.core.Init.getApplication().getIframeWindowObject();
if(bK&&bJ instanceof bK.qx.core.Object){this._printQxObject(bJ);
}else if(bJ instanceof bK.Array){var bL=this._printArray(bJ);
var bM=this._getLabel(bp+n+this._objectFolderIndex+q+o+bL+U,I);
this._content.setHtml(this._content.getHtml()+bM);
return;
}else if(bK&&(bJ instanceof bK.Object||bJ==bK.window||bJ==bK.document)){var bM=this._getLabel(bp+n+this._objectFolderIndex+q+o+bJ+K,B);
this._content.setHtml(this._content.getHtml()+bM);
return;
}else{var bM=this._getLabel(bJ,E);
this._content.setHtml(this._content.getHtml()+bM);
}this._scrollToLastLine();
},_printQxObject:function(bA){var bB=this._getLabel(bg+s+bA.toHashCode()+P+bA.classname+W+bA.toHashCode()+bj+L+n+this._objectFolderIndex+q+S,bi);
this._content.setHtml(this._content.getHtml()+bB);
this._scrollToLastLine();
},_printText:function(d){var f=this._getLabel(be+d,bb);
this._content.setHtml(this._content.getHtml()+f);
this._scrollToLastLine();
},_getLabel:function(bU,bV,bW){var bU=bU;
if(bW==br||bW==j||bW==k){var bY=qx.util.ResourceManager.getInstance().toUri(X+bW+C);
var bX=t+bY+v;
bU=bX+N+bU;
}bU=bn+bV+o+bU+M;
return bU;
},_printArray:function(cd){var ce=qx.core.Init.getApplication().getIframeWindowObject();

if(cd instanceof ce.Array){var cf=new qx.util.StringBuilder();
var length=cd.length;
var cg=r;

if(length>2){cg=u+(length-2)+bh;
length=2;
}
for(var i=0;i<length;i++){if(!cf.isEmpty()){cf.add(bd);
}cf.add(this._printArray(cd[i]));
}return R+cf.get()+cg+O;
}else{return cd;
}},error:function(bw){if(!this._console.isVisible()){this._console.open();
}var bx=this._getLabel(bw,bf,j);
this._content.setHtml(this._content.getHtml()+bx);
this._scrollToLastLine();
},warn:function(by){if(!this._console.isVisible()){this._console.open();
}var bz=this._getLabel(by,bk,k);
this._content.setHtml(this._content.getHtml()+bz);
this._scrollToLastLine();
},info:function(bC){if(!this._console.isVisible()){this._console.open();
}var bD=this._getLabel(bC,J,br);
this._content.setHtml(this._content.getHtml()+bD);
this._scrollToLastLine();
},debug:function(bQ){if(!this._console.isVisible()){this._console.open();
}var bR=this._getLabel(bQ,F);
this._content.setHtml(this._content.getHtml()+bR);
this._scrollToLastLine();
}}});
})();
(function(){var m="",l="18.gif",k="%",i=".",h="function",g="#FFFFFF",f="inspector/images/autocomplete/property_",d="qx.ui.table.pane.Pane",c="_table",b="inspector/images/autocomplete/method_",A="visible",z="^",y="__",x="public",w=")",v="_",u="(",t="_tableModel",s="inspector.console.AutoCompletePopup",r=", ",p="private",q="click",n="protected",o="window.";
qx.Class.define(s,{extend:qx.ui.popup.Popup,construct:function(F){qx.ui.popup.Popup.call(this);
this._controller=F;
this.setLayout(new qx.ui.layout.VBox());
this.setBackgroundColor(g);
this.setHeight(140);
this.setWidth(300);
qx.core.Init.getApplication().getRoot().add(this);
this._tableModel=new qx.ui.table.model.Simple();
this._tableModel.setColumns([m,h]);
this._table=new qx.ui.table.Table(this._tableModel);
this._table.setWidth(298);
this._table.setHeight(138);
this._table.setShowCellFocusIndicator(false);
this._table.setColumnVisibilityButtonVisible(false);
this._table.setStatusBarVisible(false);
this._table.getTableColumnModel().setColumnWidth(0,22);
this._table.getTableColumnModel().setColumnWidth(1,260);
var G=new qx.ui.table.cellrenderer.Image(18,18);
this._table.getTableColumnModel().setDataCellRenderer(0,G);
this._table.setRowHeight(20);
this.add(this._table);
this._table.addListener(q,function(e){if(e.getTarget().classname==d){this._controller.chooseAutoCompleteValue();
}},this);
},members:{selectionUp:function(){var a=this._table.getSelectionModel().getLeadSelectionIndex();
if(a>0){a--;
}else{a=this._tableModel.getData().length-1;
}this._table.getSelectionModel().addSelectionInterval(a,a);
this._table.setFocusedCell(0,a,true);
},selectionDown:function(){var I=this._table.getSelectionModel().getLeadSelectionIndex();
var J=this._tableModel.getData().length-1;
if(I!=J){I++;
}else{I=0;
}this._table.getSelectionModel().addSelectionInterval(I,I);
this._table.setFocusedCell(0,I,true);
},open:function(D,E,top){this.moveTo(E,top);
this.show();
this.load(D);
},load:function(K){var L=qx.core.Init.getApplication().getIframeWindowObject();
this._table.getSelectionModel().setSelectionInterval(0,0);
this._table.setFocusedCell(0,0,true);
this._tableModel.setData([]);
var P=K.substring(K.lastIndexOf(i)+1);
if(K==P){K=o+K;
}K=K.substring(0,K.lastIndexOf(i));
var N=null;

try{N=inspector.console.Util.evalOnIframe(K);
}catch(B){this.hide();
return;
}if(!(N instanceof L.Object)&&!N==L.window){this.hide();
return ;
}if(N instanceof L.qx.core.Object){this._tableModel.setColumnNamesByIndex([m,N.classname]);
}else{this._tableModel.setColumnNamesByIndex([m,K]);
}var Q=new RegExp(z+P);
var R=[];
for(var name in N){try{if(Q.test(name)){if(name.substring(0,2)==y){var O=p;
}else if(name.substring(0,1)==v){var O=n;
}else{var O=x;
}if(N[name] instanceof L.Function){var S=name+u;
for(var j=0;j<N[name].length;j++){if(j==N[name].length-1){S+=unescape(k+(61+j));
}else{S+=unescape(k+(61+j)+r);
}}S+=w;
var M=b+O+l;
R.push([M,S]);
}else{var M=f+O+l;
R.push([M,name]);
}}}catch(H){}}
if(R.length<1){this._table.resetSelection();
}this._tableModel.setData(R);
this._tableModel.sortByColumn(1,true);
},isOnScreen:function(){return this.getVisibility()==A;
},getCurrentSelection:function(){var C=this._table.getSelectionModel().getLeadSelectionIndex();
if(C!=-1){return this._tableModel.getData()[C][1]+m;
}return null;
}},destruct:function(){this._controller=null;
this._disposeObjects(t,c);
}});
})();
(function(){var t="px",s=".qooxdoo-table-cell-icon {",r="abstract",q="",p="qx.ui.table.cellrenderer.AbstractImage",o=" qooxdoo-table-cell-icon",n="<div></div>",m="'",l="no-repeat",k="}",e="  text-align:center;",j="inline-block",h="static",d="top",c="  padding-top:1px;",g="title='",f="string",i="-moz-inline-box";
qx.Class.define(p,{extend:qx.ui.table.cellrenderer.Abstract,type:r,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var y=this.self(arguments);

if(!y.stylesheet){y.stylesheet=qx.bom.Stylesheet.createElement(s+e+c+k);
}},members:{__FW:16,__FX:16,__FY:null,_insetY:2,_identifyImage:function(H){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(z){var A=this._identifyImage(z);
if(A==null||typeof z==f){A={url:A,tooltip:null};
}var B=null;

if(z.width&&z.height){B={width:z.imageWidth,height:z.imageHeight};
}else{B=this.__Ga(A.url);
}A.width=B.width;
A.height=B.height;
return A;
},__Ga:function(C){var F=qx.util.ResourceManager.getInstance();
var E=qx.io.ImageLoader;
var D,G;
if(F.has(C)){D=F.getImageWidth(C);
G=F.getImageHeight(C);
}else if(E.isLoaded(C)){D=E.getWidth(C);
G=E.getHeight(C);
}else{D=this.__FW;
G=this.__FX;
}return {width:D,height:G};
},createDataCellHtml:function(w,x){this.__FY=this._getImageInfos(w);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,w,x);
},_getCellClass:function(v){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+o;
},_getContentHtml:function(u){var content=n;
if(this.__FY.url){content=qx.bom.element.Decoration.create(this.__FY.url,l,{width:this.__FY.width+t,height:this.__FY.height+t,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?i:j,verticalAlign:d,position:h});
}return content;
},_getCellAttributes:function(a){var b=this.__FY.tooltip;

if(b){return g+b+m;
}else{return q;
}}},destruct:function(){this.__FY=null;
}});
})();
(function(){var b="qx.ui.table.cellrenderer.Image",a="";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(e,f){qx.ui.table.cellrenderer.AbstractImage.call(this);

if(e){this.__Gb=e;
}
if(f){this.__Gc=f;
}this.__Gd=qx.util.AliasManager.getInstance();
},members:{__Gd:null,__Gc:16,__Gb:16,_identifyImage:function(c){var d={imageWidth:this.__Gb,imageHeight:this.__Gc};

if(c.value==a){d.url=null;
}else{d.url=this.__Gd.resolve(c.value);
}d.tooltip=c.tooltip;
return d;
}},destruct:function(){this.__Gd=null;
}});
})();
(function(){var q="qx.client",p="",o="');",n="webkit",m="opera",l="mshtml",k="  } catch (ex) {",j="inspector.console.Util",i="  }",h="  try {",c="return eval('",g="};",f="window.top.inspector.$$inspector = function()",b="{",a="    return ex;",e="$2",d="return eval.call(window, '";
qx.Class.define(j,{statics:{evalOnIframe:function(r){var s=qx.core.Init.getApplication().getIframeWindowObject();
var u=null;

try{if(qx.core.Variant.isSet(q,m)&&qx.bom.client.Engine.VERSION<9.8){u=(function(w){return s.eval(w);
}).call(qx.core.Init.getApplication().getSelectedObject(),r);
}else{if(qx.core.Variant.isSet(q,l)||qx.core.Variant.isSet(q,n)){r=r.replace(/^(\s*var\s+)(.*)$/,e);
}var t=p;

if(qx.core.Variant.isSet(q,n)||qx.core.Variant.isSet(q,m)){t=c+r+o;
}else{t=d+r+o;
}s.qx.lang.Function.globalEval([f,b,h,t,k,a,i,g].join(p));
u=inspector.$$inspector.call(qx.core.Init.getApplication().getSelectedObject());
}if(u instanceof s.Error){throw u;
}}catch(v){throw v;
}return u;
}}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(j){this.getContentElement().setStyle(h,j);
},_applyOverflowY:function(k){this.getContentElement().setStyle(d,k);
}}});
})();
(function(){var o="none",n="text",m="",l="userSelect",k="color",j="String",i="0px",h="webkit",g="changeHtml",f="_applyCssClass",c="class",e="qx.ui.embed.Html",d="_applyHtml",b="qx.client",a="html";
qx.Class.define(e,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(y){qx.ui.core.Widget.call(this);

if(y!=null){this.setHtml(y);
}},properties:{html:{check:j,apply:d,event:g,nullable:true},cssClass:{check:j,init:m,apply:f},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(s,t){var u=this.getContentElement();
u.setAttribute(a,s||m);
u.setStyles({"padding":i,"border":o});
},_applyCssClass:function(z,A){this.getContentElement().setAttribute(c,z);
},_applySelectable:function(v){qx.ui.core.Widget.prototype._applySelectable.call(this,v);
if(qx.core.Variant.isSet(b,h)){this.getContainerElement().setStyle(l,v?n:o);
this.getContentElement().setStyle(l,v?n:o);
}},_applyFont:function(p,q){var r=p?qx.theme.manager.Font.getInstance().resolve(p).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(r);
},_applyTextColor:function(w,x){if(w){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(w));
}else{this.getContentElement().removeStyle(k);
}}}});
})();
(function(){var f="mshtml",e="pop.push.reverse.shift.sort.splice.unshift.join.slice",d="number",c="qx.type.BaseArray",b="qx.client",a=".";
qx.Class.define(c,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function u(n){if(qx.core.Variant.isSet(b,f)){t.prototype={length:0,$$isArray:true};
var q=e.split(a);

for(var length=q.length;length;){t.prototype[q[--length]]=Array.prototype[q[length]];
}}var r=Array.prototype.slice;
t.prototype.concat=function(){var l=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var k;

if(arguments[i] instanceof t){k=r.call(arguments[i],0);
}else if(arguments[i] instanceof Array){k=arguments[i];
}else{k=[arguments[i]];
}l.push.apply(l,k);
}return l;
};
t.prototype.toString=function(){return r.call(this,0).toString();
};
t.prototype.toLocaleString=function(){return r.call(this,0).toLocaleString();
};
t.prototype.constructor=t;
t.prototype.indexOf=qx.lang.Core.arrayIndexOf;
t.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
t.prototype.forEach=qx.lang.Core.arrayForEach;
t.prototype.some=qx.lang.Core.arraySome;
t.prototype.every=qx.lang.Core.arrayEvery;
var o=qx.lang.Core.arrayFilter;
var p=qx.lang.Core.arrayMap;
t.prototype.filter=function(){var g=new this.constructor;
g.push.apply(g,o.apply(this,arguments));
return g;
};
t.prototype.map=function(){var h=new this.constructor;
h.push.apply(h,p.apply(this,arguments));
return h;
};
t.prototype.slice=function(){var m=new this.constructor;
m.push.apply(m,Array.prototype.slice.apply(this,arguments));
return m;
};
t.prototype.splice=function(){var j=new this.constructor;
j.push.apply(j,Array.prototype.splice.apply(this,arguments));
return j;
};
t.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
t.prototype.valueOf=function(){return this.length;
};
return t;
}function t(length){if(arguments.length===1&&typeof length===d){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function s(){}s.prototype=[];
t.prototype=new s;
t.prototype.length=0;
qx.type.BaseArray=u(t);
})();
})();
(function(){var b="",a="qx.util.StringBuilder";
qx.Class.define(a,{extend:qx.type.BaseArray,members:{clear:function(){this.length=0;
},get:function(){return this.join(b);
},add:null,isEmpty:function(){return this.length===0;
},size:function(){return this.join(b).length;
}},defer:function(c,d){d.add=d.push;
d.toString=d.get;
d.valueOf=d.get;
}});
})();
(function(){var J="",I="'>",H="inspector/images/spacer.gif",G="</td></tr>",F="</td>",E="</span>",D="'><img class='ins_dom_front_image' src='",C="qx.core.Init.getApplication().inspectObjectByDomSelecet(",B="<tr><td class='",A="</div>",bL=")",bK="</span></td></tr>",bJ="string",bI="<div class='ins_dom_no_prop'>No object selected.</div>",bH="<td><span class='ins_dom_null'>",bG="\")",bF="<td class='ins_dom_object'>",bE=", \"",bD="<tr><td class='ins_dom_key'><img class='ins_dom_front_image' src='",bC=".",Q="<div class='ins_dom_func'>",R=" &raquo; <span class='ins_dom_return_path_link' onclick='",O="<div class='ins_dom_return_path_main'>",P="<td class='ins_dom_self_ref'>self reference</td></tr>",M="<table class='ins_dom_table'>",N=" more</span> ]",K="'><a onclick='",L="&quot;</span>",W="<td class='ins_dom_string'>&quot;Error occurs by reading value!&quot;</td></tr>",X="Object",bi="inspector/images/open.png",bf="', 'console');\">select Object</u>",bq="toString",bl=", ",by="<a onclick='",bv="<td class='ins_dom_string'>&quot;",bb="<td class='ins_dom_basic'>",bB="ins_dom_key_number",bA="<td class='ins_dom_func_object'>",bz="<span class='ins_dom_func_object'>function()</span>",ba=")'>",bd="</a>",be=" ]",bh="</a></td>",bj="<span class='ins_dom_basic'>",bm="<div class='ins_dom_no_prop'>There are no properties to show for this object.</div>",bs="&quot;</td></tr>",bx="_htmlEmbed",S="ins_dom_key",T="</table>",bc="</a> <a style='color: #000000;' onclick=\"qx.core.Init.getApplication().setWidgetByHash('",bp="<span class='ins_dom_object'>",bo=" &raquo; <span class='ins_dom_return_path_selected'>",bn=", ... <span class='ins_dom_array_more'>",bu="[Class ",bt="qx_srcview",bk="[ ",br="Error occurs by reading value!",x="<pre>",bw="appear",U="]</span>",V="scroll",bg="<span class='ins_dom_string'>&quot;",y="</pre>",z="inspector.console.DomView",Y="<span class='ins_dom_object'>[";
qx.Class.define(z,{extend:qx.ui.core.Widget,statics:{SEARCH_TERM:"Search..."},construct:function(console){qx.ui.core.Widget.call(this);
this._console=console;
this._filter=J;
this._setLayout(new qx.ui.layout.VBox());
this._htmlEmbed=new qx.ui.embed.Html(bI);
this._htmlEmbed.setOverflowY(V);
this._add(this._htmlEmbed,{flex:1});
this.addListenerOnce(bw,function(){this._htmlEmbed.getContentElement().getDomElement().id=bt;
},this);
this._breadCrumb=[];
},members:{clear:function(){this._htmlEmbed.setHtml(bI);
},setObject:function(bV,name){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
this._breadCrumb=[];
var bX=name.split(bC);
for(var i=0;i<bX.length-1;i++){var bY=J;
for(var j=0;j<=i;j++){bY+=bX[j];
if(j!=i){bY+=bC;
}}var bW=eval(bY);
this._breadCrumb[i]={object:bW,name:bX[i]};
}name=bX[bX.length-1];
this._htmlEmbed.setHtml(this._getHtmlToObject(bV,i,name));
},setObjectByIndex:function(bQ,bR){this._filter=J;

try{if(bR){var bT=this._breadCrumb[bQ].object[bR];
for(var i=0;i<this._breadCrumb.length;i++){if(this._breadCrumb[i].object==bT){this._htmlEmbed.setHtml(this._getHtmlToObject(bT,i,bR));
this._htmlEmbed.getContentElement().scrollToY(0);
return ;
}}this._htmlEmbed.setHtml(this._getHtmlToObject(bT,(bQ)+1,bR));
this._htmlEmbed.getContentElement().scrollToY(0);
}else{var bT=this._breadCrumb[bQ].object;
var bS=this._breadCrumb[bQ].name;
this._htmlEmbed.setHtml(this._getHtmlToObject(bT,bQ,bS));
this._htmlEmbed.getContentElement().scrollToY(0);
this._breadCrumb.splice(bQ+1,this._breadCrumb.length-bQ+1);
}}catch(e){alert("Can not select this Object: "+e);
}},filter:function(bN){this._filter=bN;
if(this._breadCrumb.length>0){var bO=this._breadCrumb.length-1;
var bP=this._breadCrumb[bO].object;
var name=this._breadCrumb[bO].name;
this._htmlEmbed.setHtml(this._getHtmlToObject(bP,bO,name));
}},getFilter:function(){if(this._filter==J){return inspector.console.DomView.SEARCH_TERM;
}else{return this._filter;
}},getCurrentSelectedClassname:function(){if(this._breadCrumb.length>0){var bU=this._breadCrumb[this._breadCrumb.length-1].object;
if(bU.classname!=undefined){if(qx.Class.isDefined(bU.classname)||qx.Interface.isDefined(bU.classname)||qx.Mixin.isDefined(bU.classname)||qx.Theme.isDefined(bU.classname)){return bU.classname;
}}}return null;
},_getHtmlToObject:function(o,l,name){var q=new qx.util.StringBuilder();
if(name==undefined){var name=X;
}this._breadCrumb[l]={object:o,name:name};
q.add(this._getReturnPath(l));
var s=true;
var u=this._sortAndFilterProperties(o);
q.add(M);
for(var i=0;i<u.length;i++){s=false;
q.add(J);
if(!isNaN(u[i].key)){var m=bB;
}else{var m=S;
}try{u[i].value instanceof this._iFrameWindow.Object;
}catch(cd){var p=qx.util.ResourceManager.getInstance().toUri(H);
q.add(B+m+D+p+I+this._console.escapeHtml(u[i].key)+F);
q.add(bH+u[i].value+bK);
continue;
}if(!(u[i].value instanceof this._iFrameWindow.Object)&&u[i].value!=this._iFrameWindow.window&&u[i].value!=this._iFrameWindow.document){var p=qx.util.ResourceManager.getInstance().toUri(H);
q.add(B+m+D+p+I+this._console.escapeHtml(u[i].key)+F);
if(u[i].value==null){q.add(bH+u[i].value+bK);
}else if(typeof u[i].value==bJ){q.add(bv+this._console.escapeHtml(u[i].value)+bs);
}else{q.add(bb+u[i].value+G);
}}else{if(u[i].value instanceof this._iFrameWindow.Function){var n=u[i].value.toString();
if(n.search(/native code/)!=-1){continue;
}}var t=null;

if(t==null){t=new qx.util.StringBuilder();
}else{t.clear();
}if(u[i].value!=o){var p=qx.util.ResourceManager.getInstance().toUri(bi);
t.add(B+m+K+C+l+bE+u[i].key+bG+D+p+I+this._console.escapeHtml(u[i].key)+bh);
}if(u[i].value==o){var p=qx.util.ResourceManager.getInstance().toUri(H);
q.add(bD+p+I+u[i].key+F);
q.add(P);
}else if(u[i].value instanceof this._iFrameWindow.Function){q.add(t.get());
if(u[i].value.toString().substr(0,7)==bu){q.add(bF+this._getObject(u[i].value,l,u[i].key)+G);
}else{q.add(bA+this._getObject(u[i].value,l,u[i].key)+G);
}}else{try{var r=this._getObject(u[i].value,l,u[i].key);
q.add(t.get());
q.add(bF+r+G);
}catch(bM){var p=qx.util.ResourceManager.getInstance().toUri(H);
q.add(bD+p+I+u[i].key+F);
q.add(W);
}}}}q.add(T);
if(s){q.add(bm);
}q.add(this._getFunctionCode(o));
return q.get();
},_getFunctionCode:function(o){if(o instanceof this._iFrameWindow.Function&&!o.hasOwnProperty(bq)){var w=o.toString();
w=x+qx.dev.Tokenizer.javaScriptToHtml(w)+y;
return Q+w+A;
}else{return J;
}},_sortAndFilterProperties:function(o){if(this._filter!=J){try{var ca=new RegExp(this._filter);
}catch(e){alert("Unable to filter: "+e);
}}var cb=[];
for(var cc in o){try{if(ca!=null){if(ca.test(cc)){cb.push({key:cc,value:o[cc]});
}}else{cb.push({key:cc,value:o[cc]});
}}catch(v){cb.push({key:cc,value:br});
}}cb.sort(function(a,b){if(isNaN(a.key)||isNaN(b.key)){return ((a.key<b.key)?-1:((a.key>b.key)?1:0));
}else{return a.key-b.key;
}});
return cb;
},_getReturnPath:function(h){var k=new qx.util.StringBuilder();
k.add(O);
for(var i=0;i<=h;i++){if(i==h){k.add(bo);
}else{k.add(R+C+i+ba);
}k.add(this._breadCrumb[i].name);
k.add(E);
}k.add(A);
return k.get();
},_getObject:function(c,d,f){var g=new qx.util.StringBuilder();
g.add(by+C+d+bE+f+bG+I);
if(c instanceof this._iFrameWindow.Function){if(c.toString().indexOf(bL)!=-1){g.add(c.toString().substring(0,c.toString().indexOf(bL)+1));
}else{g.add(c.toString());
}}else if(c instanceof this._iFrameWindow.Array){g.add(bk);
for(var j=0;j<2&&j<c.length;j++){if(c[j] instanceof this._iFrameWindow.Function){g.add(bz);
}else if(typeof c[j]==bJ){g.add(bg+c[j]+L);
}else if(c[j] instanceof this._iFrameWindow.Array){g.add(Y+c[j]+U);
}else if(c[j] instanceof this._iFrameWindow.Object){g.add(bp+c[j]+E);
}else{g.add(bj+c[j]+E);
}if(j!=1&&j!=c.length-1){g.add(bl);
}}if(c.length>2){g.add(bn+(c.length-2)+N);
}else{g.add(be);
}}else if(c instanceof this._iFrameWindow.qx.core.Object){g.add(c+bc+c.toHashCode()+bf);
}else{g.add(c);
}g.add(bd);
return g.get();
}},destruct:function(){this._console=this._breadCrumb=null;
this._disposeObjects(bx);
}});
})();
(function(){var l="</span>",k="sym",j="nl",h="qxkey",g="ws",f=">",e="qqstr",d="<",c="qstr",b="linecomment",bg="ident",bf="keyword",be="regexp",bd="&",bc="|",bb="fullcomment",ba="atom",Y="\\r\\n|\\r|\\n",X="\\s*\\)*",W="\\s",s="^",t='["][^"]*["]',q="real",r="\\s*[,\\)]",o="<span class='string'>",p="[a-zA-Z_][a-zA-Z0-9_]*\\b",m="<span class='comment'>",n="[+-]?\\d+",w="\\s*\\(*\\s*",x="&nbsp;",F="qx.dev.Tokenizer",D="\\t",M="\\s*\\)*\\s*\\)",H="\\.(?:replace)\\s*\\(\\s*\\(*\\s*",S="\\)*\\.(?:test|exec)\\s*\\(\\s*",Q="<span class='regexp'>",z="int",V="'>",U="<span class='",T="(?:\\/(?!\\*)[^\\t\\n\\r\\f\\v\\/]+?\\/[mgi]*)",y=".",B="\\s*\\)*\\s*?,?",C="[\\(,]\\s*",E="<span class='ident'>",G="g",I="[+-]?\\d+(([.]\\d+)*([eE][+-]?\\d+))?",N="\\/\\*(?:.|[\\n\\r])*?\\*\\/",R="\n",u="$",v="['][^']*[']",A="tab",L="\\/\\/.*?[\\n\\r$]",K="<br>",J=" ",P="(?::|=|\\?)\\s*\\(*\\s*",O="\\.(?:match|search|split)\\s*\\(\\s*\\(*\\s*";
qx.Class.define(F,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(bh){var bL={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var bB={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var bx={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bt=function(bT){return new RegExp(s+bT+u);
};
var bE=L;
var bu=N;
var bo=p;
var bw=n;
var br=I;
var bz=t;
var by=v;
var bm=D;
var bH=Y;
var bJ=W;
var bs=T;
var bv=[O+bs+M,H+bs+B,w+bs+S,P+bs+X,C+bs+r].join(bc);
var bF=bt(bE);
var bp=bt(bu);
var bC=bt(bo);
var bl=bt(bw);
var bI=bt(br);
var bk=bt(bz);
var bj=bt(by);
var bD=bt(bm);
var bq=bt(bH);
var bi=bt(bJ);
var bn=bt(bv);
var bA=new RegExp([bE,bu,bo,bw,br,bz,by,by,bm,bH,bJ,bv,y].join(bc),G);
var bG=[];
var a=bh.match(bA);

for(var i=0;i<a.length;i++){var bK=a[i];

if(bK.match(bF)){bG.push({type:b,value:bK});
}else if(bK.match(bp)){bG.push({type:bb,value:bK});
}else if(bK.match(bn)){bG.push({type:be,value:bK});
}else if(bK.match(bj)){bG.push({type:c,value:bK});
}else if(bK.match(bk)){bG.push({type:e,value:bK});
}else if(bL[bK]){bG.push({type:bf,value:bK});
}else if(bB[bK]){bG.push({type:ba,value:bK});
}else if(bx[bK]){bG.push({type:h,value:bK});
}else if(bK.match(bC)){bG.push({type:bg,value:bK});
}else if(bK.match(bI)){bG.push({type:q,value:bK});
}else if(bK.match(bl)){bG.push({type:z,value:bK});
}else if(bK.match(bq)){bG.push({type:j,value:bK});
}else if(bK.match(bt(bi))){bG.push({type:g,value:bK});
}else if(bK.match(bD)){bG.push({type:A,value:bK});
}else if(bK==f){bG.push({type:k,value:f});
}else if(bK==d){bG.push({type:k,value:d});
}else if(bK==bd){bG.push({type:k,value:bd});
}else{bG.push({type:k,value:bK});
}}return bG;
},javaScriptToHtml:function(bM){var bQ=qx.dev.Tokenizer.tokenizeJavaScript(bM);
var bP=new qx.util.StringBuilder();

for(var i=0;i<bQ.length;i++){var bR=bQ[i];
var bO=qx.bom.String.escape(bR.value);

switch(bR.type){case be:bP.add(Q,bO,l);
break;
case bg:bP.add(E,bO,l);
break;
case b:case bb:bP.add(m,bO,l);
break;
case c:case e:bP.add(o,bO,l);
break;
case bf:case ba:case h:bP.add(U,bR.type,V,bO,l);
break;
case j:var bN=qx.bom.client.Engine.MSHTML?K:R;
bP.add(bN);
break;
case g:var bS=qx.bom.client.Engine.MSHTML?x:J;
bP.add(bS);
break;
default:bP.add(bO);
}}return bP.get();
}}});
})();
(function(){var q=": ",p=", ",o="info",n="{ ",m="]: ",l="ms ",k=" ]",h="map",g="warn",f=" }",c="[ ",e="[",d="inspector.console.Appender",b="string",a="error";
qx.Class.define(d,{statics:{consoleView:null,process:function(s){if(this.consoleView&&!qx.core.ObjectRegistry.inShutDown){var t=this.__Pl(s);

if(s.level==o){this.consoleView.info(t);
}else if(s.level==g){this.consoleView.warn(t);
}else if(s.level==a){this.consoleView.error(t);
}else{this.consoleView.debug(t);
}}},__Pl:function(u){var x=qx.core.Init.getApplication().getIframeWindowObject();
var E=new qx.util.StringBuilder();
var B,D,w,z;
E.add(u.offset,l);

if(u.object){var v=x.qx.core.ObjectRegistry.fromHashCode(u.object);

if(v){E.add(v.classname,e,v.$$hash,m);
}}else if(u.clazz){E.add(u.clazz.classname,q);
}var y=u.items;

for(var i=0,C=y.length;i<C;i++){B=y[i];
D=B.text;

if(D instanceof x.Array){var z=[];

for(var j=0,A=D.length;j<A;j++){w=D[j];

if(typeof w===b){z.push(this.__Pm(w));
}else if(w.key){z.push(w.key+q+this.__Pm(w.text));
}else{z.push(this.__Pm(w.text));
}}
if(B.type===h){E.add(n,z.join(p),f);
}else{E.add(c,z.join(p),k);
}}else{E.add(this.__Pm(D));
}}return E.get();
},__Pm:function(r){return this.consoleView._console.escapeHtml(r);
}}});
})();
(function(){var g="changeApplication",f="coreScripts",d="userExt",c="changeInspected",b="inspector.selenium.SeleniumWindow";
qx.Class.define(b,{extend:inspector.components.AbstractWindow,construct:function(name,h){inspector.components.AbstractWindow.call(this,name,h);
this.__Pn=new inspector.selenium.View();
this.add(this.__Pn,{edge:0});
this.__Po=this._model.addListener(c,function(e){this.select(e.getData());
},this);
this._model.addListener(g,this.__Pp,this);
},members:{__Pn:null,__Po:null,setInitSizeAndPosition:function(){this.moveTo(0,35);
this.setHeight(300);
this.setWidth(400);
},select:function(a){this.__Pn.select(a);
},__Pp:function(e){var i=qx.bom.Cookie.get(f);
var j=qx.bom.Cookie.get(d);

if(i&&j){this.__Pn.setSeleniumScripts([i,j]);
}}},destruct:function(){this._model.removeListener(g,this.__Pp,this);
this._model.removeListenerById(this.__Po);
this.__Pn.dispose();
this.__Pn=null;
}});
})();
(function(){var bC="",bB="execute",bA="finished",bz="value",by="function",bx="/core/scripts/selenium-api.js",bw="Options",bv="/core/xpath/xmltoken.js",bu="/core/scripts/selenium-commandhandlers.js",bt="Run selected command(s)",cB=" ms",cA="/core/scripts/selenium-executionloop.js",cz="do",cy="/core/xpath/javascript-xpath-0.1.11.js",cx="changeValue",cw="instance",cv="icon/22/categories/system.png",cu="info",ct="/core/xpath/xpath.js",cs="qxClick",bJ="/core/scripts/selenium-browserbot.js",bK="icon/22/actions/media-record.png",bH="_speedSlider",bI="icon/22/actions/window-new.png",bF="/core/scripts/ui-element.js",bG='<div class="',bD="/core/scripts/htmlutils.js",bE="inspector.selenium.View",bO="qx.ui.root.Inline",bP="Add locator for inspected widget",bX="_logArea",bV="/core/scripts/selenium-browserdetect.js",cg="/core/lib/cssQuery/cssQuery-p.js",cb="/core/lib/prototype.js",co="_optionsButton",cl="/core/scripts/selenium-logging.js",bR="qx.ui.root.Page",cr="_applySeleniumScripts",cq="vertical",cp="/core/scripts/selenium-remoterunner.js",bQ="_recordButton",bT='">',bU="icon/22/actions/media-playback-start.png",bW="Convert the current test case to Selenese format",bY="icon/22/actions/list-remove.png",cc="Automatically add a new command for each inspected widget",ci="/core/scripts/selenium-version.js",cn="Remove selected command(s)",bL="/core/xpath/util.js",bM="/core/lib/snapsie.js",bS="icon/22/actions/list-add.png",cf="Step speed (Selenium command execution delay)",ce="_table",cd="changeSeleniumScripts",ck="_optionsWindow",cj="Selenium Options",ca="/core/xpath/dom.js",ch="/core/scripts/find_matching_child.js",bs='</div><hr/>',cm="/core/scripts/xmlextras.js",bN="/";
qx.Class.define(bE,{extend:inspector.components.AbstractView,construct:function(){inspector.components.AbstractView.call(this);
this.__Pq=[cm,cb,cg,bM,bD,bF,bV,bJ,ch,bx,bu,cA,cp,cl,ci,bL,bv,ca,ct,cy];
this.__Pr=[];
var V=this.__Pw();
V.setEnabled(false);
this._toolbar.add(V);
var W=this.__Px();
W.setEnabled(false);
this._toolbar.add(W);
this._toolbar.addSpacer();
this._toolbar.add(this.__Py());
this._optionsWindow=new inspector.selenium.OptionsWindow(cj,null,this);
var X=new qx.ui.splitpane.Pane(cq);
this.add(X,{flex:1});
this._table=this.__PB();
X.add(this._table,2);
this._logArea=this.__PC();
X.add(this._logArea,1);
},properties:{seleniumScripts:{init:null,apply:cr,event:cd}},members:{__Pr:null,__Ps:null,__Pt:null,__Pu:null,__Pq:null,__Pv:null,select:function(cJ){if(cJ==this.__Ps){return;
}this.__Ps=cJ;

if(this._recordButton.getValue()){this.__Pz();
}},getSelection:function(){var cC=this.__Ps;
if(cC!=null){return cC.getUserData(cw);
}return null;
},getSelenium:function(){if(this.__Pt){return this.__Pt;
}var u=qx.core.Init.getApplication().getIframeWindowObject();
this.__Pt=window.Selenium.createForWindow(u);
this.setLogHook();
return this.__Pt;
},__Pw:function(){var y=new qx.ui.toolbar.Part();
var x=new qx.ui.toolbar.Button(null,bS);
y.add(x);
x.addListener(bB,this.__Pz,this);
x.setToolTipText(bP);
var z=new qx.ui.toolbar.Button(null,bY);
y.add(z);
z.addListener(bB,this.__PA,this);
z.setToolTipText(cn);
return y;
},__Px:function(){var A=new qx.ui.toolbar.Part();
this._speedSlider=new qx.ui.form.Slider();
this._speedSlider.set({toolTipText:cf,minimum:2,maximum:50,singleStep:1,pageStep:10,allowGrowY:false,width:50,marginTop:10,marginLeft:5});
this._speedSlider.setValue(5);
A.add(this._speedSlider);
var B=new qx.ui.basic.Label(bC);
B.set({marginTop:10,marginLeft:4});
A.add(B);
var C={converter:function(bn){return (bn*100)+cB;
}};
this._speedSlider.bind(bz,B,bz,C);
var D=new qx.ui.toolbar.Button(null,bU);
A.add(D);
D.addListener(bB,this.runSeleniumCommands,this);
D.setToolTipText(bt);
this._recordButton=new qx.ui.toolbar.CheckBox(null,bK);
A.add(this._recordButton);
this._recordButton.setToolTipText(cc);
this._exportButton=new qx.ui.toolbar.CheckBox(null,bI);
A.add(this._exportButton);
this._exportButton.setToolTipText(bW);
this._exportButton.addListenerOnce(cx,function(cW){this.__PE();
},this);
return A;
},__Py:function(){var bk=new qx.ui.toolbar.Part();
this._optionsButton=new qx.ui.toolbar.Button(null,cv);
this._optionsButton.setToolTipText(bw);
bk.add(this._optionsButton);
this._optionsButton.addListener(bB,function(K){if(!this._optionsWindow.isVisible()){this._optionsWindow.open();
}},this);
return bk;
},__Pz:function(){var e=[bC,bC,bC];

if(this.__Ps){var b=qx.core.Init.getApplication().getIframeWindowObject();
var h=b.qx.core.Init.getApplication().getRoot();
if(h.classname==bR&&!b.qx.ui.core.Widget.contains(h,this.__Ps)){var a=b.qx.core.ObjectRegistry.getRegistry();

for(var g in a){var c=a[g];

if(c.classname==bO&&b.qx.ui.core.Widget.contains(c,this.__Ps)){h=c;
break;
}}}var d=inspector.selenium.SeleniumUtil.getQxhLocator(this.__Ps,h,b);
var f=cs;
e=[f,d,bC,this.__Pr];
}this._table.getTableModel().addRows([e]);
},__PA:function(){var bg=this._table.getTableModel();
var bf=[];
this._table.getSelectionModel().iterateSelection(function(U){bf.push(U);
this;
},this);

for(var i=0,l=bf.length;i<l;i++){var bh=bf[i];
bg.removeRows(bh-i,1);
}},__PB:function(){var Q=new qx.ui.table.model.Simple();
Q.setColumns(["Command","Target","Value","commands"]);
Q.setColumnEditable(0,true);
Q.setColumnEditable(1,true);
Q.setColumnEditable(2,true);
var P=function(E){var F=E.table;
var J=F.getTableModel();
var H=J.getRowData(E.row);
var G=H[3];
var I=new qx.ui.table.celleditor.ComboBox();
I.setListData(G);
return I;
};
var O=new qx.ui.table.celleditor.Dynamic(P);
var M={tableColumnModel:function(be){return new qx.ui.table.columnmodel.Resize(be);
}};
var S=new qx.ui.table.Table(Q,M);
S.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
var R=S.getTableColumnModel();
R.setColumnVisible(3,false);
R.setCellEditorFactory(0,O);
var N=R.getBehavior();
N.setWidth(0,"20%");
N.setWidth(1,"50%");
N.setWidth(2,"30%");
return S;
},__PC:function(){var bi=new qx.ui.embed.Html();
bi.set({padding:5,cssClass:"seleniumLog",overflowY:"auto",decorator:"main",backgroundColor:"white"});
bi.addListener("changeHtml",function(L){qx.event.Timer.once(function(){var bc=this.getContentElement().getDomElement();
var bb=bc.childNodes.length-1;

if(bb>0){var bd=bc.childNodes[bb];
qx.bom.element.Scroll.intoViewY(bd);
}},this,0);
});
var bj='.seleniumLog .debug { color: #008000 }';
bj+='.seleniumLog .info  { color: #000000 }';
bj+='.seleniumLog .warn  { color: #FFA500 }';
bj+='.seleniumLog .error { color: #E50000; font-weight: bold }';
qx.bom.Stylesheet.createElement(bj);
return bi;
},runSeleniumCommands:function(q){var r=this._table.getTableModel();
var t=this._table.getSelectionModel().getSelectedCount();

if(t>0){var s=[];
this._table.getSelectionModel().iterateSelection(function(Y){s.push(r.getRowData(Y));
});
}else{var s=[];

for(var i=0;i<r.getRowCount();i++){s.push(r.getRowData(i));
}}
if(s.length>0){this.__Pu=s;
this.__PD();
}},__PD:function(){if(this.__Pu.length==0){return;
}var j=this.__Pu.shift();
var o=j[0];
var n=j[1];
var p=j[2];
var k=this.getSelenium();
o="do"+o.replace(/^.{1}/,o.substr(0,1).toUpperCase());

try{k[o](n,p);
}catch(ba){window.LOG.error(ba.message);
}var m=this._speedSlider.getValue()*100;
qx.event.Timer.once(this.__PD,this,m);
},__PE:function(){var v=qx.core.Init.getApplication().getIframeWindowObject().location.href;
var w=qx.core.Init.getApplication().getIframeWindowObject().qx.core.Setting.get("qx.application");
this.__Pv=new inspector.selenium.SeleneseTestCase(v,w);
this.__Pv.addListenerOnce("appear",function(event){var bm={converter:function(cI){return cI?"visible":"hidden";
}};
this._exportButton.bind("value",this.__Pv,"visibility",bm);
var bl={converter:function(cE){return cE=="visible";
}};
this.__Pv.bind("visibility",this._exportButton,"value",bl);
},this);
this.__Pv.addListener("appear",function(cF){this.__Pv.reset();
var cG=this._table.getTableModel();

for(var i=0,l=cG.getRowCount();i<l;i++){var cH=cG.getRowData(i);
this.__Pv.addCommand(cH.slice(0,3));
}this.__Pv.showSelenese();
},this);
this.__Pv.open();
},getAvailableCommands:function(){var bp=[];
var bq=this.getSelenium();

for(var br in bq){if(typeof bq[br]==by&&br.indexOf(cz)==0){var bo=br.substr(2);
bo=bo.replace(/^.{1}/,bo.substr(0,1).toLowerCase());
bp.push(bo);
}}bp.sort();
return bp;
},setLogHook:function(){if(!window.Logger){this.warn("Selenium Logger not ready!");
return;
}var self=this;
window.Logger.prototype.logHook=function(cK,cL){if(!cL){return;
}var cO=cK||cu;
var cN=self._logArea.getHtml()||bC;
var cM=cN+bG+cO+bT+cL+bs;
self._logArea.setHtml(cM);
};
},_applySeleniumScripts:function(cP,cQ){if(cP==cQ){return;
}this._toolbar.getChildren()[0].setEnabled(false);
this._toolbar.getChildren()[1].setEnabled(false);

if(window.Selenium){window.Selenium=null;
}var cT=cP[0];
var cV=cP[1];
if(cT.substr(cT.length-1)==bN){cT=cT.substr(0,cT.length-1);
}var cS=new inspector.selenium.QueuedScriptLoader();
var cU=document.title;
cS.addListenerOnce(bA,function(cD){document.title=cU;

if(cD.getData().fail>0){alert("Couldn't load Selenium Core scripts, make sure the path is correct!");
return;
}cS.addListenerOnce(bA,this.__PF,this);
cS.load([cV]);
},this);
var cR=[];

for(var i=0,l=this.__Pq.length;i<l;i++){cR.push(cT+this.__Pq[i]);
}cS.load(cR);
},__PF:function(T){if(T.getData().fail>0){alert("Couldn't load qooxdoo Selenium user extensions, make sure the path is correct!");
return;
}
if(!window.Selenium){alert("Unexpected error: Selenium instance not created!");
return;
}qx.bom.Cookie.set("coreScripts",this.getSeleniumScripts()[0],365);
qx.bom.Cookie.set("userExt",this.getSeleniumScripts()[1],365);
this._toolbar.getChildren()[0].setEnabled(true);
this._toolbar.getChildren()[1].setEnabled(true);
this.__Pr=this.getAvailableCommands();
}},destruct:function(){this.__Pt=null;
window.selenium=null;
window.LOG=null;
this._disposeObjects(bQ,bH,co,ck,ce,bX);
}});
})();
(function(){var m="",l="value",k="execute",j="seleniumScripts",i="URI of a directory containing the contents of a Selenium Core Zip file (seleniumhq.org/download)",h="Cancel",g="inspector.selenium.OptionsWindow",f="URI of the qooxdoo Selenium user extensions from the Simulator contribution",e="Selenium Core",d="Script Locations",a='See the <a href="http://manual.qooxdoo.org/1.2/pages/application/inspector_selenium.html" target="_blank">manual page</a> for an explanation of these settings.',c="OK",b="qooxdoo User Extensions";
qx.Class.define(g,{extend:qx.ui.window.Window,construct:function(r,s,t){qx.ui.window.Window.call(this,r,s);
this.set({layout:new qx.ui.layout.VBox(20),modal:true,width:300});
this.moveTo(160,0);
var E=new qx.ui.container.Composite(new qx.ui.layout.Grow());
this.add(E);
var y=new qx.ui.form.Form();
y.addGroupHeader(d);
var u=new qx.ui.form.TextField();
u.setToolTipText(i);
u.setRequired(true);
y.add(u,e);
var D=new qx.ui.form.TextField();
D.setToolTipText(f);
D.setRequired(true);
y.add(D,b);
var z=new qx.ui.form.Button(c);
z.addListener(k,function(){if(y.validate()){this.setSeleniumScripts([u.getValue(),D.getValue()]);
this._optionsWindow.close();
}},t);
y.addButton(z);
var B=new qx.ui.form.Button(h);
B.addListener(k,function(){if(this.getSeleniumScripts()){u.setValue(this.getSeleniumScripts()[0]);
D.setValue(this.getSeleniumScripts()[1]);
}this._optionsWindow.close();
},t);
y.addButton(B);
var C=new qx.ui.form.renderer.Single(y);
C._getLayout().setColumnFlex(0,0);
C._getLayout().setColumnFlex(1,1);
E.add(C);
var F={converter:function(p,q){if(!p){return m;
}return p[0];
}};
t.bind(j,u,l,F);
var v={converter:function(n,o){if(!n){return m;
}return n[1];
}};
t.bind(j,D,l,v);
var A=new qx.ui.container.Composite(new qx.ui.layout.Grow());
this.add(A);
var x=a;
var w=new qx.ui.basic.Label(m);
w.setRich(true);
w.setValue(x);
A.add(w);
}});
})();
(function(){var b="qx.ui.form.Form",a="";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__U=[];
this.__V=[];
this._validationManager=new qx.ui.form.validation.Manager();
this._resetter=new qx.ui.form.Resetter();
},members:{__U:null,_validationManager:null,__W:0,__V:null,_resetter:null,add:function(c,d,e,name,f){if(this.__X()){this.__U.push({title:null,items:[],labels:[],names:[]});
}this.__U[this.__W].items.push(c);
this.__U[this.__W].labels.push(d);
if(name==null){name=d.replace(/\s+|&|-|\+|\*|\/|\||!|\.|,|:|\?|;|~|%|\{|\}|\(|\)|\[|\]|<|>|=|\^|@|\\/g,a);
}this.__U[this.__W].names.push(name);
this._validationManager.add(c,e,f);
this._resetter.add(c);
},addGroupHeader:function(g){if(!this.__X()){this.__W++;
}this.__U.push({title:g,items:[],labels:[],names:[]});
},addButton:function(h){this.__V.push(h);
},__X:function(){return this.__U.length===0;
},reset:function(){this._resetter.reset();
this._validationManager.reset();
},redefineResetter:function(){this._resetter.redefine();
},validate:function(){return this._validationManager.validate();
},getValidationManager:function(){return this._validationManager;
},getGroups:function(){return this.__U;
},getButtons:function(){return this.__V;
},getItems:function(){var k={};
for(var i=0;i<this.__U.length;i++){var l=this.__U[i];
for(var j=0;j<l.names.length;j++){var name=l.names[j];
k[name]=l.items[j];
}}return k;
}},destruct:function(){this.__U=this._buttons=this._buttonOptions=null;
}});
})();
(function(){var R="",Q="String",P="complete",O="qx.event.type.Event",N="value instanceof Function || qx.Class.isSubClassOf(value.constructor, qx.ui.form.validation.AsyncValidator)",M="qx.ui.form.validation.Manager",L="This field is required",K="qx.event.type.Data";
qx.Class.define(M,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__w=[];
this.__x={};
this.setRequiredFieldMessage(qx.locale.Manager.tr(L));
},events:{"changeValid":K,"complete":O},properties:{validator:{check:N,init:null,nullable:true},invalidMessage:{check:Q,init:R},requiredFieldMessage:{check:Q,init:R},context:{nullable:true}},members:{__w:null,__y:null,__x:null,__z:null,add:function(f,g,h){if(!this.__E(f)){throw new Error("Added widget not supported.");
}if(this.__F(f)){if(g!=null){throw new Error("Widgets supporting selection can only be validated "+"in the form validator");
}}var j={item:f,validator:g,valid:null,context:h};
this.__w.push(j);
},validate:function(){var v=true;
this.__z=true;
var s=[];
for(var i=0;i<this.__w.length;i++){var t=this.__w[i].item;
var w=this.__w[i].validator;
s.push(t);
if(w==null){var r=this.__A(t);
v=v&&r;
this.__z=r&&this.__z;
continue;
}var r=this.__B(this.__w[i],t.getValue());
v=r&&v;

if(r!=null){this.__z=r&&this.__z;
}}var u=this.__C(s);

if(qx.lang.Type.isBoolean(u)){this.__z=u&&this.__z;
}v=u&&v;
this.__H(v);

if(qx.lang.Object.isEmpty(this.__x)){this.fireEvent(P);
}return v;
},__A:function(ba){if(ba.getRequired()){if(this.__F(ba)){var bb=!!ba.getSelection()[0];
}else{var bb=!!ba.getValue();
}ba.setValid(bb);
var bd=ba.getRequiredInvalidMessage();
var bc=bd?bd:this.getRequiredFieldMessage();
ba.setInvalidMessage(bc);
return bb;
}return true;
},__B:function(z,A){var F=z.item;
var E=z.context;
var D=z.validator;
if(this.__D(D)){this.__x[F.toHashCode()]=null;
D.validate(F,F.getValue(),this,E);
return null;
}var C=null;

try{var C=D.call(E||this,A,F);

if(C===undefined){C=true;
}}catch(e){if(e instanceof qx.core.ValidationError){C=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var B=e.message;
}else{var B=e.getComment();
}F.setInvalidMessage(B);
}else{throw e;
}}F.setValid(C);
z.valid=C;
return C;
},__C:function(U){var W=this.getValidator();
var X=this.getContext()||this;

if(W==null){return true;
}this.setInvalidMessage("");

if(this.__D(W)){this.__x[this.toHashCode()]=null;
W.validateForm(U,this,X);
return null;
}
try{var Y=W.call(X,U,this);

if(Y===undefined){Y=true;
}}catch(e){if(e instanceof qx.core.ValidationError){Y=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var V=e.message;
}else{var V=e.getComment();
}this.setInvalidMessage(V);
}else{throw e;
}}return Y;
},__D:function(k){var l=false;

if(!qx.lang.Type.isFunction(k)){l=qx.Class.isSubClassOf(k.constructor,qx.ui.form.validation.AsyncValidator);
}return l;
},__E:function(I){var J=I.constructor;
return qx.Class.hasInterface(J,qx.ui.form.IForm);
},__F:function(m){var n=m.constructor;
return qx.Class.hasInterface(n,qx.ui.core.ISingleSelection);
},__G:function(S){var T=S.constructor;
return (qx.Class.hasInterface(T,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(T,qx.ui.form.IColorForm)||qx.Class.hasInterface(T,qx.ui.form.IDateForm)||qx.Class.hasInterface(T,qx.ui.form.INumberForm)||qx.Class.hasInterface(T,qx.ui.form.IStringForm));
},__H:function(o){var p=this.__y;
this.__y=o;
if(p!=o){this.fireDataEvent("changeValid",o,p);
}},getValid:function(){return this.__y;
},isValid:function(){return this.getValid();
},getInvalidMessages:function(){var x=[];
for(var i=0;i<this.__w.length;i++){var y=this.__w[i].item;

if(!y.getValid()){x.push(y.getInvalidMessage());
}}if(this.getInvalidMessage()!=R){x.push(this.getInvalidMessage());
}return x;
},reset:function(){for(var i=0;i<this.__w.length;i++){var a=this.__w[i];
a.item.setValid(true);
}this.__y=null;
},setItemValid:function(G,H){this.__x[G.toHashCode()]=H;
G.setValid(H);
this.__I();
},setFormValid:function(q){this.__x[this.toHashCode()]=q;
this.__I();
},__I:function(){var c=this.__z;
for(var d in this.__x){var b=this.__x[d];
c=b&&c;
if(b==null){return;
}}this.__H(c);
this.__x={};
this.fireEvent("complete");
}},destruct:function(){this.__w=null;
}});
})();
(function(){var a="qx.ui.form.validation.AsyncValidator";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b){qx.core.Object.call(this);
this.__Q=b;
},members:{__Q:null,__R:null,__S:null,__T:null,validate:function(e,f,g,h){this.__T=false;
this.__R=e;
this.__S=g;
this.__Q.call(h||this,this,f);
},validateForm:function(i,j,k){this.__T=true;
this.__S=j;
this.__Q.call(k,i,this);
},setValid:function(c,d){if(this.__T){if(d!==undefined){this.__S.setInvalidMessage(d);
}this.__S.setFormValid(c);
}else{if(d!==undefined){this.__R.setInvalidMessage(d);
}this.__S.setItemValid(this.__R,c);
}}},destruct:function(){this.__S=this.__R=null;
}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var d="qx.ui.form.Resetter";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__m=[];
},members:{__m:null,add:function(l){if(this.__q(l)){var m=l.getValue();
}else if(this.__p(l)){var m=l.getSelection();
}else{throw new Error("Item "+l+" not supported for reseting.");
}this.__m.push({item:l,init:m});
},reset:function(){for(var i=0;i<this.__m.length;i++){var g=this.__m[i];
this.__n(g.item,g.init);
}},resetItem:function(a){var b;

for(var i=0;i<this.__m.length;i++){var c=this.__m[i];

if(c.item===a){b=c.init;
break;
}}if(b===undefined){throw new Error("The given item has not been added.");
}this.__n(a,b);
},__n:function(e,f){if(this.__q(e)){e.setValue(f);
}else if(this.__p(e)){e.setSelection(f);
}},redefine:function(){for(var i=0;i<this.__m.length;i++){var k=this.__m[i].item;
this.__m[i].init=this.__o(k);
}},redefineItem:function(q){var r;

for(var i=0;i<this.__m.length;i++){if(this.__m[i].item===q){r=this.__m[i];
break;
}}if(r===undefined){throw new Error("The given item has not been added.");
}r.init=this.__o(r.item);
},__o:function(n){if(this.__q(n)){return n.getValue();
}else if(this.__p(n)){return n.getSelection();
}},__p:function(h){var j=h.constructor;
return qx.Class.hasInterface(j,qx.ui.core.ISingleSelection);
},__q:function(o){var p=o.constructor;
return (qx.Class.hasInterface(p,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(p,qx.ui.form.IColorForm)||qx.Class.hasInterface(p,qx.ui.form.IDateForm)||qx.Class.hasInterface(p,qx.ui.form.INumberForm)||qx.Class.hasInterface(p,qx.ui.form.IStringForm));
}},destruct:function(){this.__m=null;
}});
})();
(function(){var a="qx.ui.form.renderer.IFormRenderer";
qx.Interface.define(a,{members:{addItems:function(b,c,d){},addButton:function(e){}}});
})();
(function(){var k="qx.dynlocale",j="",h="changeLocale",g="visibility",f="on",d=" <span style='color:red'>*</span> ",c="abstract",b="qx.ui.form.renderer.AbstractRenderer",a=" :";
qx.Class.define(b,{type:c,extend:qx.ui.core.Widget,implement:qx.ui.form.renderer.IFormRenderer,construct:function(t){qx.ui.core.Widget.call(this);
this._visibilityBindingIds=[];
if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);
this._names=[];
}var w=t.getGroups();

for(var i=0;i<w.length;i++){var v=w[i];
this.addItems(v.items,v.labels,v.title);
}var u=t.getButtons();

for(var i=0;i<u.length;i++){this.addButton(u[i]);
}},members:{_names:null,_visibilityBindingIds:null,_connectVisibility:function(l,m){var n=l.bind(g,m,g);
this._visibilityBindingIds.push({id:n,item:l});
},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){for(var i=0;i<this._names.length;i++){var x=this._names[i];

if(x.name&&x.name.translate){x.name=x.name.translate();
}var y=this._createLabelText(x.name,x.item);
x.label.setValue(y);
}},"off":null}),_createLabelText:function(name,p){var q=j;

if(p.getRequired()){q=d;
}var r=name.length>0||p.getRequired()?a:j;
return name+q+r;
},addItems:function(z,A,B){throw new Error("Abstract method call");
},addButton:function(o){throw new Error("Abstract method call");
}},destruct:function(){if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}this._names=null;
for(var i=0;i<this._visibilityBindingIds.length;i++){var s=this._visibilityBindingIds[i];
s.item.removeBinding(s.id);
}}});
})();
(function(){var h="right",g="bold",f="_buttonRow",e="qx.ui.form.renderer.Single",d="left",c="qx.dynlocale",b="top",a="on";
qx.Class.define(e,{extend:qx.ui.form.renderer.AbstractRenderer,construct:function(j){var k=new qx.ui.layout.Grid();
k.setSpacing(6);
k.setColumnFlex(0,1);
k.setColumnAlign(0,h,b);
this._setLayout(k);
qx.ui.form.renderer.AbstractRenderer.call(this,j);
},members:{_row:0,_buttonRow:null,addItems:function(l,m,n){if(n!=null){this._add(this._createHeader(n),{row:this._row,column:0,colSpan:2});
this._row++;
}for(var i=0;i<l.length;i++){var p=this._createLabel(m[i],l[i]);
this._add(p,{row:this._row,column:0});
var o=l[i];
p.setBuddy(o);
this._add(o,{row:this._row,column:1});
this._row++;
this._connectVisibility(o,p);
if(qx.core.Variant.isSet(c,a)){this._names.push({name:m[i],label:p,item:l[i]});
}}},addButton:function(s){if(this._buttonRow==null){this._buttonRow=new qx.ui.container.Composite();
this._buttonRow.setMarginTop(5);
var t=new qx.ui.layout.HBox();
t.setAlignX(h);
t.setSpacing(5);
this._buttonRow.setLayout(t);
this._add(this._buttonRow,{row:this._row,column:0,colSpan:2});
this._row++;
}this._buttonRow.add(s);
},getLayout:function(){return this._getLayout();
},_createLabel:function(name,u){var v=new qx.ui.basic.Label(this._createLabelText(name,u));
v.setRich(true);
return v;
},_createHeader:function(q){var r=new qx.ui.basic.Label(q);
r.setFont(g);

if(this._row!=0){r.setMarginTop(10);
}r.setAlignX(d);
return r;
}},destruct:function(){if(this._buttonRow){this._buttonRow.removeAll();
this._disposeObjects(f);
}}});
})();
(function(){var l="splitter",k="slider",j="mousedown",i="mouseout",h="mousemove",g="mouseup",f="losecapture",d="active",c="horizontal",b="vertical",D="knob",C="Integer",B="height",A="row-resize",z="move",w="maxHeight",v="width",u="_applyOrientation",t="mouseover",s="splitpane",q="qx.ui.splitpane.Pane",r="_applyOffset",o="minHeight",p="minWidth",m="col-resize",n="maxWidth";
qx.Class.define(q,{extend:qx.ui.core.Widget,construct:function(J){qx.ui.core.Widget.call(this);
this.__mo=[];
if(J){this.setOrientation(J);
}else{this.initOrientation();
}this.addListener(j,this._onMouseDown);
this.addListener(g,this._onMouseUp);
this.addListener(h,this._onMouseMove);
this.addListener(i,this._onMouseOut);
this.addListener(f,this._onMouseUp);
},properties:{appearance:{refine:true,init:s},offset:{check:C,init:6,apply:r},orientation:{init:c,check:[c,b],apply:u}},members:{__mp:null,__mq:false,__mr:null,__ms:null,__mt:null,__mu:null,__mv:null,__mo:null,_createChildControlImpl:function(H){var I;

switch(H){case k:I=new qx.ui.splitpane.Slider(this);
I.exclude();
this._add(I,{type:H});
break;
case l:I=new qx.ui.splitpane.Splitter(this);
this._add(I,{type:H});
I.addListener(z,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){I.addListener(t,this._onSplitterMouseOver,I);
}break;
}return I||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,H);
},_applyOrientation:function(R,S){var T=this.getChildControl(k);
var W=this.getChildControl(l);
this.__mt=R===c;
var V=this._getLayout();

if(V){V.dispose();
}var U=R===b?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(U);
W.removeState(S);
W.addState(R);
W.getChildControl(D).removeState(S);
W.getChildControl(D).addState(R);
T.removeState(S);
T.addState(R);
},_applyOffset:function(X,Y){var ba=this.getChildControl(l);

if(Y===0){ba.removeListener(j,this._onMouseDown,this);
ba.removeListener(h,this._onMouseMove,this);
ba.removeListener(i,this._onMouseOut,this);
ba.removeListener(g,this._onMouseUp,this);
ba.removeListener(f,this._onMouseUp,this);
this.addListener(j,this._onMouseDown);
this.addListener(g,this._onMouseUp);
this.addListener(h,this._onMouseMove);
this.addListener(i,this._onMouseOut);
this.addListener(f,this._onMouseUp);
}
if(X===0){this.removeListener(j,this._onMouseDown);
this.removeListener(g,this._onMouseUp);
this.removeListener(h,this._onMouseMove);
this.removeListener(i,this._onMouseOut);
this.removeListener(f,this._onMouseUp);
ba.addListener(j,this._onMouseDown,this);
ba.addListener(h,this._onMouseMove,this);
ba.addListener(i,this._onMouseOut,this);
ba.addListener(g,this._onMouseUp,this);
ba.addListener(f,this._onMouseUp,this);
}},add:function(bj,bk){if(bk==null){this._add(bj);
}else{this._add(bj,{flex:bk});
}this.__mo.push(bj);
},remove:function(bb){this._remove(bb);
qx.lang.Array.remove(this.__mo,bb);
},getChildren:function(){return this.__mo;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var bx=this.getChildControl(l);
var bz=bx.getContainerLocation();
var by=this.getContentLocation();
this.__mp=this.__mt?e.getDocumentLeft()-bz.left+by.left:e.getDocumentTop()-bz.top+by.top;
var bB=this.getChildControl(k);
var bA=bx.getBounds();
bB.setUserBounds(bA.left,bA.top,bA.width,bA.height);
bB.setZIndex(bx.getZIndex()+1);
bB.show();
this.__mq=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__mq){this.__mx();
var bl=this.getChildControl(k);
var bm=this.__mu;

if(this.__mt){bl.setDomLeft(bm);
}else{bl.setDomTop(bm);
}e.stop();
}else{this.__mw();
}},_onMouseOut:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
this.__mw();
},_onMouseUp:function(e){if(!this.__mq){return;
}this._finalizeSizes();
var a=this.getChildControl(k);
a.exclude();
this.__mq=false;
this.releaseCapture();
this.__mw();
e.stop();
},_onSplitterMove:function(){this.__mw();
},_onSplitterMouseOver:function(){this.addState(d);
},_finalizeSizes:function(){var N=this.__mu;
var K=this.__mv;

if(N==null){return;
}var P=this._getChildren();
var O=P[2];
var L=P[3];
var M=O.getLayoutProperties().flex;
var Q=L.getLayoutProperties().flex;
if((M!=0)&&(Q!=0)){O.setLayoutProperties({flex:N});
L.setLayoutProperties({flex:K});
}else{if(this.__mt){O.setWidth(N);
L.setWidth(K);
}else{O.setHeight(N);
L.setHeight(K);
}}},_isNear:function(){var bc=this.getChildControl(l);
var be=bc.getBounds();
var bg=bc.getContainerLocation();
var bd=this.getOffset();
if(!bg){return false;
}var bh=this.__mr;
var bi=be.width;
var bf=bg.left;

if(bi<bd){bf-=Math.floor((bd-bi)/2);
bi=bd;
}
if(bh<bf||bh>(bf+bi)){return false;
}var bh=this.__ms;
var bi=be.height;
var bf=bg.top;

if(bi<bd){bf-=Math.floor((bd-bi)/2);
bi=bd;
}
if(bh<bf||bh>(bf+bi)){return false;
}return true;
},__mw:function(){var F=this.getChildControl(l);
var G=this.getApplicationRoot();
if(this.__mq||this._isNear()){var E=this.__mt?m:A;
this.setCursor(E);
G.setGlobalCursor(E);
F.addState(d);
}else if(F.hasState(d)){this.resetCursor();
G.resetGlobalCursor();
F.removeState(d);
}},__mx:function(){if(this.__mt){var bp=p,bw=v,bq=n,bu=this.__mr;
}else{var bp=o,bw=B,bq=w,bu=this.__ms;
}var bv=this._getChildren();
var bn=bv[2].getSizeHint();
var bs=bv[3].getSizeHint();
var bt=bv[2].getBounds()[bw]+bv[3].getBounds()[bw];
var br=bu-this.__mp;
var bo=bt-br;
if(br<bn[bp]){bo-=bn[bp]-br;
br=bn[bp];
}else if(bo<bs[bp]){br-=bs[bp]-bo;
bo=bs[bp];
}if(br>bn[bq]){bo+=br-bn[bq];
br=bn[bq];
}else if(bo>bs[bq]){br+=bo-bs[bq];
bo=bs[bq];
}this.__mu=br;
this.__mv=bo;
},_isActiveDragSession:function(){return this.__mq;
},_setLastMousePosition:function(x,y){this.__mr=x;
this.__ms=y;
}},destruct:function(){this.__mo=null;
}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
if(f.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g){var h;

switch(g){case d:h=new qx.ui.basic.Image;
this._add(h);
break;
}return h||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.VLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var r,u;
var g,f,p,h;

for(var i=0;i<length;i++){r=v[i];
u=r.getLayoutProperties().type;

if(u===b){f=r;
}else if(u===c){p=r;
}else if(!g){g=r;
}else{h=r;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var k=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(k==null){k=1;
}var w=g.getSizeHint();
var n=f.getSizeHint();
var o=h.getSizeHint();
var j=w.height;
var s=n.height;
var t=o.height;

if(x>0&&k>0){var l=x+k;
var m=e-s;
var j=Math.round((m/l)*x);
var t=m-j;
var q=qx.ui.layout.Util.arrangeIdeals(w.minHeight,j,w.maxHeight,o.minHeight,t,o.maxHeight);
j=q.begin;
t=q.end;
}else if(x>0){j=e-s-t;

if(j<w.minHeight){j=w.minHeight;
}
if(j>w.maxHeight){j=w.maxHeight;
}}else if(k>0){t=e-j-s;

if(t<o.minHeight){t=o.minHeight;
}
if(t>o.maxHeight){t=o.maxHeight;
}}g.renderLayout(0,0,d,j);
f.renderLayout(0,j,d,s);
h.renderLayout(0,j+s,d,t);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var B=0,D=0,C=0;
var E=0,F=0,y=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
B+=z.minHeight;
D+=z.height;
C+=z.maxHeight;

if(z.minWidth>E){E=z.minWidth;
}
if(z.width>F){F=z.width;
}
if(z.maxWidth>y){y=z.maxWidth;
}}return {minHeight:B,height:D,maxHeight:C,minWidth:E,width:F,maxWidth:y};
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.HLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var s,u;
var g,f,p,h;

for(var i=0;i<length;i++){s=v[i];
u=s.getLayoutProperties().type;

if(u===b){f=s;
}else if(u===c){p=s;
}else if(!g){g=s;
}else{h=s;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var j=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(j==null){j=1;
}var w=g.getSizeHint();
var m=f.getSizeHint();
var o=h.getSizeHint();
var t=w.width;
var r=m.width;
var q=o.width;

if(x>0&&j>0){var k=x+j;
var l=d-r;
var t=Math.round((l/k)*x);
var q=l-t;
var n=qx.ui.layout.Util.arrangeIdeals(w.minWidth,t,w.maxWidth,o.minWidth,q,o.maxWidth);
t=n.begin;
q=n.end;
}else if(x>0){t=d-r-q;

if(t<w.minWidth){t=w.minWidth;
}
if(t>w.maxWidth){t=w.maxWidth;
}}else if(j>0){q=d-t-r;

if(q<o.minWidth){q=o.minWidth;
}
if(q>o.maxWidth){q=o.maxWidth;
}}g.renderLayout(0,0,t,e);
f.renderLayout(t,0,r,e);
h.renderLayout(t+r,0,q,e);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var E=0,F=0,y=0;
var B=0,D=0,C=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
E+=z.minWidth;
F+=z.width;
y+=z.maxWidth;

if(z.minHeight>B){B=z.minHeight;
}
if(z.height>D){D=z.height;
}
if(z.maxHeight>C){C=z.maxHeight;
}}return {minWidth:E,width:F,maxWidth:y,minHeight:B,height:D,maxHeight:C};
}}});
})();
(function(){var n="/",m="inspector.selenium.SeleniumUtil",k="UNKNOWN_ISLE",j="qxh=",h='"]',g="qx.",f="]",e="qx.ui.root.Inline",d="child[",c="qxh=inline:",a="//",b='[@classname="';
qx.Class.define(m,{statics:{getQxhLocator:function(q,r,s){var u=s||window;

if(!r){var r=qx.core.Init.getApplication().getRoot();
}var t=[];

while(q){if(q===r){break;
}var w=inspector.selenium.SeleniumUtil.getQxhLocatorStep(q,u);
t.push(w);
q=q.getLayoutParent();
}t.reverse();

if(r.classname==e){var v=inspector.selenium.SeleniumUtil.getInlineIsleId(r);
t=c+v+a+t.join(n);
}else{t=j+t.join(n);
}return t;
},getQxhLocatorStep:function(z,A){var F=A||window;
var D=z.classname;
var E=b+D+h;

if(D.indexOf(g)==0){E=z.classname;
}var parent=z.getLayoutParent();
var C=false;
var B=null;
var H=[];

if(parent.getChildren){H=H.concat(parent.getChildren());
}
if(parent._getChildren){var G=parent._getChildren();

for(var x=0,y=G.length;x<y;x++){if(!qx.lang.Array.contains(H,G[x])){H.push(G[x]);
}}}for(var i=0,l=H.length;i<l;i++){if(H[i]==z&&B===null){B=i;
}else if(F.qx.Class.getByName(H[i].classname)&&z instanceof F.qx.Class.getByName(H[i].classname)){C=true;
}else if(F.qx.Class.getByName(z.classname)&&H[i] instanceof F.qx.Class.getByName(z.classname)){C=true;
}else if(H[i].classname==z.classname){C=true;
}}
if(C){E=d+B+f;
}return E;
},getInlineIsleId:function(o){var p=o.getContainerElement().getDomElement();

if(p.id){return p.id;
}else if(p.parentNode&&p.parentNode.id){return p.parentNode.id;
}return k;
}}});
})();
(function(){var g="",f="Function",e="qx.ui.table.celleditor.ComboBox",d="number",c="Array",b="table-editor-combobox",a="appear";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,properties:{validationFunction:{check:f,nullable:true,init:null},listData:{check:c,init:null,nullable:true}},members:{createCellEditor:function(m){var o=new qx.ui.form.ComboBox().set({appearance:b});
var p=m.value;
o.originalValue=p;
var s=m.table.getTableColumnModel().getDataCellRenderer(m.col);
var q=s._getContentHtml(m);

if(p!=q){p=q;
}if(p===null||p===undefined){p=g;
}var n=this.getListData();

if(n){var r;

for(var i=0,l=n.length;i<l;i++){var t=n[i];

if(t instanceof Array){r=new qx.ui.form.ListItem(t[0],t[1]);
}else{r=new qx.ui.form.ListItem(t,null);
}o.add(r);
}}o.setValue(g+p);
o.addListener(a,function(){o.selectAllText();
});
return o;
},getCellEditorValue:function(h){var k=h.getValue()||g;
var j=this.getValidationFunction();

if(j){k=j(k,h.originalValue);
}
if(typeof h.originalValue==d){k=parseFloat(k);
}return k;
}}});
})();
(function(){var b="Function",a="qx.ui.table.celleditor.Dynamic";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,construct:function(c){qx.core.Object.call(this);

if(c){this.setCellEditorFactoryFunction(c);
}this.__Hl={};
},properties:{cellEditorFactoryFunction:{check:b,nullable:true,init:null}},members:{__Hm:null,__Hl:null,createCellEditor:function(d){var e=this.getCellEditorFactoryFunction();
{};
this.__Hm=e(d);
var f=this.__Hm.createCellEditor(d);
this.__Hl[f.toHashCode()]=d;
return f;
},getCellEditorValue:function(g){var i=this.getCellEditorFactoryFunction();
{};
var h=this.__Hl[g.toHashCode()];
this.__Hm=i(h);
var j=this.__Hm.getCellEditorValue(g);
return j;
}},destruct:function(){this.__Hm=null;
}});
})();
(function(){var m="\n",k='  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />',h="</td>\n",g='      <tr>',f='  <title>',e='  <table cellpadding="1" cellspacing="1" border="1">',d='</title>',c='    </thead>',b='    </tbody>',a='" />',I='</td>',H='<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">',G="      </tr>\n",F='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">',E='  <link rel="selenium.base" href="',D='      </tr>',C="\n      <tr>\n",B='</head>',A='<head profile="http://selenium-ide.openqa.org/profiles/test-case">',z="Selenese Test Case",t='    <thead>',u="",r="        <td>",s='    <tbody>',p='<?xml version="1.0" encoding="UTF-8"?>',q='<body>',n='        <td rowspan="1" colspan="3">',o="inspector.selenium.SeleneseTestCase",v='  </table>',w="untitled",y='</html>',x='</body>';
qx.Class.define(o,{extend:qx.ui.window.Window,construct:function(K,L){qx.ui.window.Window.call(this,z);
this.set({layout:new qx.ui.layout.Grow(),width:500,height:450,contentPadding:5});
var scroll=new qx.ui.container.Scroll();
this.add(scroll);
this._textArea=new qx.ui.form.TextArea();
scroll.add(this._textArea,{edge:0});
var K=K||u;
var L=L||w;
this._header=[p,F,H,A,k,E+K+a,f+L+d,B,q,e,t,g,n+L+I,D,c,s];
this._footer=[b,v,x,y];
this.__PG=[];
},members:{_textArea:null,_header:null,_footer:null,__PG:null,addCommand:function(J){if(!J instanceof Array){return;
}this.__PG.push(J.slice(0,3));
},reset:function(){this.__PG=[];
},getSelenese:function(){var M=this._header.join(m);

for(var i=0,l=this.__PG.length;i<l;i++){var N=this.__PG[i];
M+=C;

for(var j=0;j<N.length;j++){M+=r+N[j]+h;
}M+=G;
}M+=this._footer.join(m);
return M;
},showSelenese:function(){this._textArea.setValue(this.getSelenese());
}}});
})();
(function(){var h="auto",g="textarea",f="Boolean",d="qx.ui.form.TextArea",c="_applyWrap",b="Integer",a="mousewheel";
qx.Class.define(d,{extend:qx.ui.form.AbstractField,construct:function(l){qx.ui.form.AbstractField.call(this,l);
this.initWrap();
this.addListener(a,this._onMousewheel,this);
},properties:{wrap:{check:f,init:true,apply:c},appearance:{refine:true,init:g},singleStep:{check:b,init:20}},members:{_onMousewheel:function(e){var m=this.getContentElement();
var scrollY=m.getScrollY();
m.scrollToY(scrollY+e.getWheelDelta()*this.getSingleStep());
var n=m.getScrollY();

if(n!=scrollY){e.stop();
}},_createInputElement:function(){return new qx.html.Input(g,{overflowX:h,overflowY:h});
},_applyWrap:function(i,j){this.getContentElement().setWrap(i);
},_getContentHint:function(){var k=qx.ui.form.AbstractField.prototype._getContentHint.call(this);
k.height=k.height*4;
k.width=this._getTextSize().width*20;
return k;
}}});
})();
(function(){var c="init",b="inspector.selenium.QueuedScriptLoader",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__PH=[];
},events:{"finished":a},members:{__PH:null,__PI:null,load:function(f){this.__PH=this.__PH.concat(f);
this.__PJ(c);
},__PJ:function(status){switch(status){case "init":this.__PI={"success":0,"fail":0};
break;
case "success":this.__PI.success++;
break;
case "fail":this.__PI.fail++;
break;
}
if(this.__PH.length==0){this.fireDataEvent("finished",this.__PI);
return;
}var d=this.__PH.shift();
var e=new qx.io.ScriptLoader();
e.load(d,this.__PJ,this);
}}});
})();
(function(){var o="success",n="complete",m="error",l="load",k="fail",j="qx.client",i="loaded",h="readystatechange",g="head",f="qx.io.ScriptLoader",b="mshtml|webkit",d="script",c="text/javascript",a="abort";
qx.Bootstrap.define(f,{construct:function(){this.__lV=qx.Bootstrap.bind(this.__mc,this);
this.__lW=document.createElement(d);
},members:{__lX:null,__lY:null,__ma:null,__mb:null,__lV:null,__lW:null,load:function(s,t,u){if(this.__lX){throw new Error("Another request is still running!");
}this.__lX=true;
this.__lY=false;
var v=document.getElementsByTagName(g)[0];
var w=this.__lW;
this.__ma=t||null;
this.__mb=u||window;
w.type=c;
w.onerror=w.onload=w.onreadystatechange=this.__lV;
w.src=s;
setTimeout(function(){v.appendChild(w);
},0);
},abort:function(){if(this.__lX){this.dispose(a);
}},dispose:function(status){if(this.__lY){return;
}this.__lY=true;
var r=this.__lW;
r.onerror=r.onload=r.onreadystatechange=null;
var q=r.parentNode;

if(q){q.removeChild(r);
}delete this.__lX;
if(this.__ma){if(qx.core.Variant.isSet(j,b)){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__ma.call(self.__mb,status);
delete self.__ma;
}),0);
}else{this.__ma.call(this.__mb,status);
delete this.__ma;
}}},__mc:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(e){var p=this.__lW.readyState;

if(p==i){this.dispose(o);
}else if(p==n){this.dispose(o);
}else{return;
}},"opera":function(e){if(qx.Bootstrap.isString(e)||e.type===m){return this.dispose(k);
}else if(e.type===l){return this.dispose(o);
}else{return;
}},"default":function(e){if(qx.Bootstrap.isString(e)||e.type===m){this.dispose(k);
}else if(e.type===l){this.dispose(o);
}else if(e.type===h&&(e.target.readyState===n||e.target.readyState===i)){this.dispose(o);
}else{return;
}}}))}});
})();


qx.$$loader.init();


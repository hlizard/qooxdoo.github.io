(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"showcase.Application","qx.revision":"28147","qx.theme":"showcase.theme.Theme","qx.version":"1.4.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"showcase.Application","qx.debug":false,"qx.revision":"28147","qx.theme":"showcase.theme.Theme","qx.version":"1.4.2"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.4.2"},"showcase":{"resourceUri":"resource","sourceUri":"script","version":"trunk"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"animation":[],"boot":[0],"data":[0,1,2,3,4,13],"dragdrop":[0,1],"form":[0,1,2,3,4,6,7,11],"htmleditor":[0,1,2,3,4,5,8,14],"i18n":[0,1,2,3,4,6,7,8],"table":[0,1,2,3,4,5,6,9],"theme":[0,1,2,5,12],"tree":[0,1,2,5,10]},
  uris : [["__out__:showcase.js"],["__out__:showcase-0.js"],["__out__:showcase-1.js"],["__out__:showcase-2.js"],["__out__:showcase-3.js"],["__out__:showcase-4.js"],["__out__:showcase-5.js"],["__out__:showcase-6.js"],["__out__:showcase-7.js"],["__out__:showcase-8.js"],["__out__:showcase-9.js"],["__out__:showcase-10.js"],["__out__:showcase-11.js"],["__out__:showcase-12.js"],["__out__:showcase-13.js"]],
  urisBefore : [],
  packageHashes : {"0":"3f2ed3668a24","1":"52282f98616a","2":"2548ba201a56","3":"9c656dde443d","4":"c48c975b37a2","5":"b08d5d1fbdff","6":"ee3b1e31869d","7":"d98f7304402f","8":"1ec3c138511a","9":"1e63c6c82dd0","10":"c8ba8b3a8edd","11":"0170e5d0f168","12":"c0edb0e0c6fc","13":"c85f1dec8382","14":"bd2767e3c287"},
  boot : "boot",
  closureParts : {"animation":true,"data":true,"dragdrop":true,"form":true,"htmleditor":true,"i18n":true,"table":true,"theme":true,"tree":true},
  bootIsInline : true,
  addNoCacheParam : false,
  
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

qx.$$loader.importPackageData = function (dataMap, callback) {
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
  if (callback){
    callback(dataMap);
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

qx.$$packageData['3f2ed3668a24']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"EEE, d.M.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan.","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb.","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr.","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Juni","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Tag","dayperiod":"Tageshälfte","era":"Epoche","hour":"Stunde","minute":"Minute","month":"Monat","quotationEnd":"“","quotationStart":"„","second":"Sekunde","week":"Woche","weekday":"Wochentag","year":"Jahr","zone":"Zone"},"de_AT":{"cldr_date_format_full":"EEEE, dd. MMMM y","cldr_date_format_long":"dd. MMMM y","cldr_month_format_abbreviated_1":"Jän","cldr_month_format_wide_1":"Jänner"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"},"en_GB":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_date_format_full":"EEEE, d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yyyy","cldr_date_time_format_MEd":"E, d/M","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_yMEd":"EEE, d/M/yyyy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyyyMM":"MM/yyyy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"’","quotationStart":"‘"},"en_US":{},"es":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"a.m.","cldr_date_format_full":"EEEE d 'de' MMMM 'de' y","cldr_date_format_long":"d 'de' MMMM 'de' y","cldr_date_format_medium":"dd/MM/yyyy","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMd":"d 'de' MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd-MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_h":"hh a","cldr_date_time_format_hm":"hh:mm a","cldr_date_time_format_hms":"hh:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE d/M/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d MMM y","cldr_date_time_format_yMMMM":"MMMM 'de' y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM-yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ 'de' yy","cldr_date_time_format_yyyyMM":"MM/yyyy","cldr_day_format_abbreviated_fri":"vie","cldr_day_format_abbreviated_mon":"lun","cldr_day_format_abbreviated_sat":"sáb","cldr_day_format_abbreviated_sun":"dom","cldr_day_format_abbreviated_thu":"jue","cldr_day_format_abbreviated_tue":"mar","cldr_day_format_abbreviated_wed":"mié","cldr_day_format_wide_fri":"viernes","cldr_day_format_wide_mon":"lunes","cldr_day_format_wide_sat":"sábado","cldr_day_format_wide_sun":"domingo","cldr_day_format_wide_thu":"jueves","cldr_day_format_wide_tue":"martes","cldr_day_format_wide_wed":"miércoles","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"ene","cldr_month_format_abbreviated_10":"oct","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dic","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"abr","cldr_month_format_abbreviated_5":"may","cldr_month_format_abbreviated_6":"jun","cldr_month_format_abbreviated_7":"jul","cldr_month_format_abbreviated_8":"ago","cldr_month_format_abbreviated_9":"sep","cldr_month_format_wide_1":"enero","cldr_month_format_wide_10":"octubre","cldr_month_format_wide_11":"noviembre","cldr_month_format_wide_12":"diciembre","cldr_month_format_wide_2":"febrero","cldr_month_format_wide_3":"marzo","cldr_month_format_wide_4":"abril","cldr_month_format_wide_5":"mayo","cldr_month_format_wide_6":"junio","cldr_month_format_wide_7":"julio","cldr_month_format_wide_8":"agosto","cldr_month_format_wide_9":"septiembre","cldr_month_stand-alone_narrow_1":"E","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"p.m.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"día","dayperiod":"periodo del día","era":"era","hour":"hora","minute":"minuto","month":"mes","quotationEnd":"’","quotationStart":"‘","second":"segundo","week":"semana","weekday":"día de la semana","year":"año","zone":"zona"},"es_ES":{},"es_MX":{"cldr_number_decimal_separator":".","cldr_number_group_separator":","},"ro":{"alternateQuotationEnd":"»","alternateQuotationStart":"«","cldr_am":"AM","cldr_date_format_full":"EEEE, d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yyyy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d MMM","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEEEd":"EEE, d MMM","cldr_date_time_format_MMMEd":"E, d MMM","cldr_date_time_format_MMMMEd":"E, d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMdd":"dd.MM","cldr_date_time_format_Md":"d.M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.yyyy","cldr_date_time_format_yMEd":"EEE, d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'trimestrul' Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyyyMM":"MM.yyyy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Vi","cldr_day_format_abbreviated_mon":"Lu","cldr_day_format_abbreviated_sat":"Sâ","cldr_day_format_abbreviated_sun":"Du","cldr_day_format_abbreviated_thu":"Jo","cldr_day_format_abbreviated_tue":"Ma","cldr_day_format_abbreviated_wed":"Mi","cldr_day_format_wide_fri":"vineri","cldr_day_format_wide_mon":"luni","cldr_day_format_wide_sat":"sâmbătă","cldr_day_format_wide_sun":"duminică","cldr_day_format_wide_thu":"joi","cldr_day_format_wide_tue":"marți","cldr_day_format_wide_wed":"miercuri","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"ian.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"dec.","cldr_month_format_abbreviated_2":"feb.","cldr_month_format_abbreviated_3":"mar.","cldr_month_format_abbreviated_4":"apr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"iun.","cldr_month_format_abbreviated_7":"iul.","cldr_month_format_abbreviated_8":"aug.","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"ianuarie","cldr_month_format_wide_10":"octombrie","cldr_month_format_wide_11":"noiembrie","cldr_month_format_wide_12":"decembrie","cldr_month_format_wide_2":"februarie","cldr_month_format_wide_3":"martie","cldr_month_format_wide_4":"aprilie","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"iunie","cldr_month_format_wide_7":"iulie","cldr_month_format_wide_8":"august","cldr_month_format_wide_9":"septembrie","cldr_month_stand-alone_narrow_1":"I","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"I","cldr_month_stand-alone_narrow_7":"I","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"zi","dayperiod":"perioada zilei","era":"eră","hour":"oră","minute":"minut","month":"lună","quotationEnd":"”","quotationStart":"„","second":"secundă","week":"săptămână","weekday":"zi a săptămânii","year":"an","zone":"zonă"},"ro_RO":{},"sv":{"alternateQuotationEnd":"’","alternateQuotationStart":"’","cldr_am":"fm","cldr_date_format_full":"EEEE'en' 'den' d:'e' MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"yyyy-MM-dd","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Hm":"HH.mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEEEd":"EEE d:'e' MMMM","cldr_date_time_format_MMMMEd":"E d:'e' MMMM","cldr_date_time_format_MMMMd":"d:'e' MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMd":"d/M","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h.mm a","cldr_date_time_format_hms":"h.mm.ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-MM","cldr_date_time_format_yMEd":"EEE, yyyy-MM-dd","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yQ":"yyyy Q","cldr_date_time_format_yQQQ":"y QQQ","cldr_date_time_format_yyMM":"yy-MM","cldr_date_time_format_yyMMM":"MMM -yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyyyMM":"yyyy-MM","cldr_date_time_format_yyyyMMM":"MMM y","cldr_date_time_format_yyyyQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"fre","cldr_day_format_abbreviated_mon":"mån","cldr_day_format_abbreviated_sat":"lör","cldr_day_format_abbreviated_sun":"sön","cldr_day_format_abbreviated_thu":"tors","cldr_day_format_abbreviated_tue":"tis","cldr_day_format_abbreviated_wed":"ons","cldr_day_format_wide_fri":"fredag","cldr_day_format_wide_mon":"måndag","cldr_day_format_wide_sat":"lördag","cldr_day_format_wide_sun":"söndag","cldr_day_format_wide_thu":"torsdag","cldr_day_format_wide_tue":"tisdag","cldr_day_format_wide_wed":"onsdag","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"L","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"O","cldr_month_format_abbreviated_1":"jan","cldr_month_format_abbreviated_10":"okt","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dec","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"apr","cldr_month_format_abbreviated_5":"maj","cldr_month_format_abbreviated_6":"jun","cldr_month_format_abbreviated_7":"jul","cldr_month_format_abbreviated_8":"aug","cldr_month_format_abbreviated_9":"sep","cldr_month_format_wide_1":"januari","cldr_month_format_wide_10":"oktober","cldr_month_format_wide_11":"november","cldr_month_format_wide_12":"december","cldr_month_format_wide_2":"februari","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"april","cldr_month_format_wide_5":"maj","cldr_month_format_wide_6":"juni","cldr_month_format_wide_7":"juli","cldr_month_format_wide_8":"augusti","cldr_month_format_wide_9":"september","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"em","cldr_time_format_full":"'kl'. HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"dag","dayperiod":"fm/em","era":"era","hour":"timme","minute":"minut","month":"månad","quotationEnd":"”","quotationStart":"”","second":"sekund","week":"vecka","weekday":"veckodag","year":"år","zone":"tidszon"},"sv_SE":{}},"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/form/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/group-item.png":[110,20,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx","showcase/animation/icon.png":[151,125,"png","showcase"],"showcase/databinding/icon.png":[151,125,"png","showcase"],"showcase/databinding/twitter_logo_outline.png":[300,78,"png","showcase"],"showcase/dragdrop/icon.png":[151,125,"png","showcase"],"showcase/form/icon.png":[151,125,"png","showcase"],"showcase/htmleditor/format-list-ordered.png":[16,16,"png","showcase"],"showcase/htmleditor/format-list-unordered.png":[16,16,"png","showcase"],"showcase/htmleditor/icon.png":[151,125,"png","showcase"],"showcase/i18n/de.png":[60,40,"png","showcase"],"showcase/i18n/en.png":[60,40,"png","showcase"],"showcase/i18n/es.png":[60,40,"png","showcase"],"showcase/i18n/icon.png":[151,125,"png","showcase"],"showcase/i18n/nl.png":[60,40,"png","showcase"],"showcase/i18n/ro.png":[60,40,"png","showcase"],"showcase/i18n/sv.png":[60,37,"png","showcase"],"showcase/images/contentbackground.gif":[300,12,"gif","showcase"],"showcase/images/headerback.png":[11,200,"png","showcase"],"showcase/images/loading66.gif":[66,66,"gif","showcase"],"showcase/images/tag-hor-c.png":[6,12,"png","showcase"],"showcase/images/tag-hor-l.png":[6,12,"png","showcase"],"showcase/images/tag-hor-r.png":[6,12,"png","showcase"],"showcase/images/tag-hor.png":[18,12,"png","showcase"],"showcase/images/tag-vert-b.png":[12,6,"png","showcase"],"showcase/images/tag-vert-c.png":[12,6,"png","showcase"],"showcase/images/tag-vert-t.png":[12,6,"png","showcase"],"showcase/images/tag-vert.png":[12,18,"png","showcase"],"showcase/images/welcome.png":[413,121,"png","showcase"],"showcase/table/icon.png":[151,125,"png","showcase"],"showcase/theme/affe.png":[160,131,"png","showcase"],"showcase/theme/button-b.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-24],"showcase/theme/button-bl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-12],"showcase/theme/button-br.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-30],"showcase/theme/button-c.png":[20,22,"png","showcase"],"showcase/theme/button-combined-lr.png":[24,22,"png","showcase"],"showcase/theme/button-combined-tb.png":[6,72,"png","showcase"],"showcase/theme/button-l.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",-18,0],"showcase/theme/button-pressed-b.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-54],"showcase/theme/button-pressed-bl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-18],"showcase/theme/button-pressed-br.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-36],"showcase/theme/button-pressed-c.png":[20,22,"png","showcase"],"showcase/theme/button-pressed-l.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",-12,0],"showcase/theme/button-pressed-r.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",0,0],"showcase/theme/button-pressed-t.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-48],"showcase/theme/button-pressed-tl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-42],"showcase/theme/button-pressed-tr.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-66],"showcase/theme/button-pressed.png":[34,34,"png","showcase"],"showcase/theme/button-r.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",-6,0],"showcase/theme/button-t.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-6],"showcase/theme/button-tl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,0],"showcase/theme/button-tr.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-60],"showcase/theme/button.png":[34,34,"png","showcase"],"showcase/theme/display-b.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,0],"showcase/theme/display-bl.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-24],"showcase/theme/display-br.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-12],"showcase/theme/display-c.png":[20,27,"png","showcase"],"showcase/theme/display-combined-lr.png":[12,27,"png","showcase"],"showcase/theme/display-combined-tb.png":[6,36,"png","showcase"],"showcase/theme/display-l.png":[6,27,"png","showcase","showcase/theme/display-combined-lr.png",0,0],"showcase/theme/display-r.png":[6,27,"png","showcase","showcase/theme/display-combined-lr.png",-6,0],"showcase/theme/display-t.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-18],"showcase/theme/display-tl.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-30],"showcase/theme/display-tr.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-6],"showcase/theme/display.png":[148,39,"png","showcase"],"showcase/theme/icon.png":[151,125,"png","showcase"],"showcase/theme/window-b.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-20],"showcase/theme/window-bl.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-40],"showcase/theme/window-br.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,0],"showcase/theme/window-c.png":[20,52,"png","showcase"],"showcase/theme/window-combined-lr.png":[20,52,"png","showcase"],"showcase/theme/window-combined-tb.png":[10,60,"png","showcase"],"showcase/theme/window-l.png":[10,52,"png","showcase","showcase/theme/window-combined-lr.png",0,0],"showcase/theme/window-r.png":[10,52,"png","showcase","showcase/theme/window-combined-lr.png",-10,0],"showcase/theme/window-t.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-50],"showcase/theme/window-tl.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-30],"showcase/theme/window-tr.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-10],"showcase/theme/window.png":[158,72,"png","showcase"],"showcase/tree/icon.png":[151,125,"png","showcase"]},"translations":{}};
(function(){var m="toString",k=".",j="default",h="Object",g='"',f="Array",e="()",d="String",c="Function",b=".prototype",L="function",K="Boolean",J="Error",I="constructor",H="warn",G="hasOwnProperty",F="string",E="toLocaleString",D="RegExp",C='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="count",z="debug",B="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,M){var O=name.split(k);
var parent=window;
var N=O[0];

for(var i=0,P=O.length-1;i<P;i++,N=O[i]){if(!parent[N]){parent=parent[N]={};
}else{parent=parent[N];
}}parent[N]=M;
return N;
},setDisplayName:function(Q,R,name){Q.displayName=R+k+name+e;
},setDisplayNames:function(S,T){for(var name in S){var U=S[name];

if(U instanceof Function){U.displayName=T+k+name+e;
}}},define:function(name,V){if(!V){var V={statics:{}};
}var bb;
var Y=null;
qx.Bootstrap.setDisplayNames(V.statics,name);

if(V.members||V.extend){qx.Bootstrap.setDisplayNames(V.members,name+b);
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
bb.$$type=o;
if(!bb.hasOwnProperty(m)){bb.toString=this.genericToString;
}if(V.defer){V.defer(bb,Y);
}qx.Bootstrap.$$registry[name]=V.statics;
return bb;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var be=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){be=false;
}
if(window.qxvariants&&window.qxvariants["qx.debug"]=="off"){be=false;
}return be;
})(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bf,bg,bh,name,bi){var bl=bh.prototype;
var bk=new Function;
bk.prototype=bl;
var bj=new bk;
bf.prototype=bj;
bj.name=bj.classname=name;
bj.basename=bi;
bg.base=bf.superclass=bh;
bg.self=bf.constructor=bj.constructor=bf;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bm){return bm.__count__;
},"default":function(bn){var length=0;

for(var bo in bn){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bp,bq,br){if(br===undefined){br=true;
}
for(var bs in bq){if(br||bp[bs]===undefined){bp[bs]=bq[bs];
}}return bp;
},__a:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bt){var bu=[];
var bw=Object.prototype.hasOwnProperty;

for(var bx in bt){if(bw.call(bt,bx)){bu.push(bx);
}}var bv=qx.Bootstrap.__a;

for(var i=0,a=bv,l=a.length;i<l;i++){if(bw.call(bt,a[i])){bu.push(a[i]);
}}return bu;
},"default":function(by){var bz=[];
var bA=Object.prototype.hasOwnProperty;

for(var bB in by){if(bA.call(by,bB)){bz.push(bB);
}}return bz;
}})[typeof (Object.keys)==
L?B:
(function(){for(var bC in {toString:1}){return bC;
}})()!==m?u:j],getKeysAsString:function(bD){var bE=qx.Bootstrap.getKeys(bD);

if(bE.length==0){return p;
}return g+bE.join(C)+g;
},__b:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bF,self,bG){var bH=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bI=Array.prototype.slice.call(arguments,0,arguments.length);
return bF.apply(self,bH.concat(bI));
};
},firstUp:function(bJ){return bJ.charAt(0).toUpperCase()+bJ.substr(1);
},firstLow:function(bK){return bK.charAt(0).toLowerCase()+bK.substr(1);
},getClass:function(bL){var bM=Object.prototype.toString.call(bL);
return (qx.Bootstrap.__b[bM]||bM.slice(8,-1));
},isString:function(bN){return (bN!==null&&(typeof bN===F||qx.Bootstrap.getClass(bN)==d||bN instanceof String||(!!bN&&!!bN.$$isString)));
},isArray:function(bO){return (bO!==null&&(bO instanceof Array||(bO&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bO.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bO)==f||(!!bO&&!!bO.$$isArray)));
},isObject:function(bP){return (bP!==undefined&&bP!==null&&qx.Bootstrap.getClass(bP)==h);
},isFunction:function(bQ){return qx.Bootstrap.getClass(bQ)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bR,name){while(bR){if(bR.$$properties&&bR.$$properties[name]){return bR.$$properties[name];
}bR=bR.superclass;
}return null;
},hasProperty:function(bS,name){return !!qx.Bootstrap.getPropertyDefinition(bS,name);
},getEventType:function(bT,name){var bT=bT.constructor;

while(bT.superclass){if(bT.$$events&&bT.$$events[name]!==undefined){return bT.$$events[name];
}bT=bT.superclass;
}return null;
},supportsEvent:function(bU,name){return !!qx.Bootstrap.getEventType(bU,name);
},getByInterface:function(bV,bW){var bX,i,l;

while(bV){if(bV.$$implements){bX=bV.$$flatImplements;

for(i=0,l=bX.length;i<l;i++){if(bX[i]===bW){return bV;
}}}bV=bV.superclass;
}return null;
},hasInterface:function(bY,ca){return !!qx.Bootstrap.getByInterface(bY,ca);
},getMixins:function(cb){var cc=[];

while(cb){if(cb.$$includes){cc.push.apply(cc,cb.$$flatIncludes);
}cb=cb.superclass;
}return cc;
},$$logs:[],debug:function(cd,ce){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(cf,cg){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ch,ci){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(cj,ck){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(cl){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,h){if(h){if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}var k=h.statics?h.statics:{};
qx.Bootstrap.setDisplayNames(k,name);

for(var j in k){if(k[j] instanceof Function){k[j].$$mixin=k;
}}if(h.construct){k.$$constructor=h.construct;
qx.Bootstrap.setDisplayName(h.construct,name,e);
}
if(h.include){k.$$includes=h.include;
}
if(h.properties){k.$$properties=h.properties;
}
if(h.members){k.$$members=h.members;
qx.Bootstrap.setDisplayNames(h.members,name+f);
}
for(var j in k.$$members){if(k.$$members[j] instanceof Function){k.$$members[j].$$mixin=k;
}}
if(h.events){k.$$events=h.events;
}
if(h.destruct){k.$$destructor=h.destruct;
qx.Bootstrap.setDisplayName(h.destruct,name,b);
}}else{var k={};
}k.$$type=a;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
this.$$registry[name]=k;
return k;
},checkCompatibility:function(m){var p=this.flatten(m);
var q=p.length;

if(q<2){return true;
}var t={};
var s={};
var r={};
var o;

for(var i=0;i<q;i++){o=p[i];

for(var n in o.events){if(r[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+r[n]+'" in member "'+n+'"!');
}r[n]=o.name;
}
for(var n in o.properties){if(t[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+t[n]+'" in property "'+n+'"!');
}t[n]=o.name;
}
for(var n in o.members){if(s[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+s[n]+'" in member "'+n+'"!');
}s[n]=o.name;
}}return true;
},isCompatible:function(u,v){var w=qx.Bootstrap.getMixins(v);
w.push(u);
return qx.Mixin.checkCompatibility(w);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__c:null,__d:function(){}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",T="10.0",S="10.4",R="2003",Q=")",P="iPhone",O="android",N="unix",M="ce",L="7",K="SymbianOS",q="MacPPC",r="iPod",o="\.",p="Win64",m="linux",n="me",k="Macintosh",l="Android",s="Windows",t="ios",A="vista",y="(",E="win",C="Linux",G="BSD",F="iPad",v="X11",J="xp",I="symbian",H="qx.bom.client.OperatingSystem",u="g",w="Win32",x="osx",z="|",B="nt4",D="MacIntel";
qx.Bootstrap.define(H,{statics:{getName:function(){var U=navigator&&navigator.platform;

if(!U){return j;
}
if(U.indexOf(s)!=-1||U.indexOf(w)!=-1||U.indexOf(p)!=-1){return E;
}else if(U.indexOf(k)!=-1||U.indexOf(q)!=-1||U.indexOf(D)!=-1){return x;
}else if(U.indexOf(r)!=-1||U.indexOf(P)!=-1||U.indexOf(F)!=-1){return t;
}else if(U.indexOf(C)!=-1){return m;
}else if(U.indexOf(v)!=-1||U.indexOf(G)!=-1){return N;
}else if(U.indexOf(l)!=-1){return O;
}else if(U.indexOf(K)!=-1){return I;
}return j;
},__e:{"Windows NT 6.1":L,"Windows NT 6.0":A,"Windows NT 5.2":R,"Windows NT 5.1":J,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":B,"Win 9x 4.90":n,"Windows CE":M,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":S,"Mac OS X 10.4":S,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":T,"Mac OS X 10.0":T},getVersion:function(){var X=[];

for(var W in qx.bom.client.OperatingSystem.__e){X.push(W);
}var Y=new RegExp(y+X.join(z).replace(/\./g,o)+Q,u);
var V=Y.exec(navigator.userAgent);

if(V&&V[1]){return qx.bom.client.OperatingSystem.__e[V[1]];
}return j;
}}});
})();
(function(){var n="-",m="",l="qx.bom.client.Locale",k="LOCALE",j="\n",h="VARIANT",g="Please check the API documentation of qx.core.Environment.",f="android",e="\nTrace:",d="' of '",a="'is deprecated: ",b="The constant '";
qx.Bootstrap.define(l,{statics:{LOCALE:"",VARIANT:"",getLocale:function(){var o=qx.bom.client.Locale.__f();
var p=o.indexOf(n);

if(p!=-1){o=o.substr(0,p);
}return o;
},getVariant:function(){var q=qx.bom.client.Locale.__f();
var s=m;
var r=q.indexOf(n);

if(r!=-1){s=q.substr(r+1);
}return s;
},__f:function(){var t=(navigator.userLanguage||navigator.language||m);
if(qx.bom.client.OperatingSystem.getName()==f){var u=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(u){t=u[0];
}}return t.toLowerCase();
}},defer:function(v){v.LOCALE=v.getLocale();
v.VARIANT=v.getVariant();
if(qx.Bootstrap.DEBUG){var w=[k,h];

for(var i=0;i<w.length;i++){if(v.__defineGetter__){var x=v[w[i]];
v.__defineGetter__(w[i],qx.Bootstrap.bind(function(y,c){var z=b+y+d+v.classname+a+g;

if(qx.dev&&qx.dev.StackTrace){z+=e+qx.dev.StackTrace.getStackTrace().join(j);
}qx.Bootstrap.warn(z);
return c;
},v,w[i],x));
}}}}});
})();
(function(){var l="",k="audio",j="video",i='video/ogg; codecs="theora, vorbis"',h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="http://www.w3.org/TR/SVG11/feature#BasicStructure",f='audio',d='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",b="audio/mpeg",z="org.w3c.dom.svg",y="DOMTokenList",x="1.1",w="audio/x-wav",u="audio/ogg",t="audio/x-aiff",s="qx.bom.client.Html",r='video',q="mshtml",p="label",n='video/webm; codecs="vp8, vorbis"',o="1.0",m="audio/basic";
qx.Bootstrap.define(s,{statics:{getWebWorker:function(){return window.Worker!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(f).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(u);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(b);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(w);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(m);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(t);
},getVideo:function(){return !!document.createElement(r).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(i);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(d);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(n);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(A){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(B){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===y);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(h,p);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(z,o)||document.implementation.hasFeature(g,x));
},getVml:function(){return qx.bom.client.Engine.getName()==q;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(C){var D=new Image();
D.onload=D.onerror=function(){window.setTimeout(function(){C.call(null,(D.width==1&&D.height==1));
},0);
};
D.src=c;
}}});
})();
(function(){var k="xhr",j="Microsoft.XMLHTTP",i="",h="file:",g="https:",f="webkit",e="gecko",d="activex",c="opera",b=".",a="qx.bom.client.Transport";
qx.Bootstrap.define(a,{statics:{getMaxConcurrentRequestCount:function(){var l;
var o=qx.bom.client.Engine.getVersion().split(b);
var m=0;
var p=0;
var n=0;
if(o[0]){m=o[0];
}if(o[1]){p=o[1];
}if(o[2]){n=o[2];
}if(window.maxConnectionsPerServer){l=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()==c){l=8;
}else if(qx.bom.client.Engine.getName()==f){l=4;
}else if(qx.bom.client.Engine.getName()==e&&((m>1)||((m==1)&&(p>9))||((m==1)&&(p==9)&&(n>=1)))){l=6;
}else{l=2;
}return l;
},getSsl:function(){return window.location.protocol===g;
},getXmlHttpRequest:function(){var q=window.ActiveXObject?
(function(){if(window.location.protocol!==h){try{new window.XMLHttpRequest();
return k;
}catch(r){}}
try{new window.ActiveXObject(j);
return d;
}catch(s){}})():
(function(){try{new window.XMLHttpRequest();
return k;
}catch(t){}})();
return q||i;
}}});
})();
(function(){var p="",o="silverlight",n="wmv",m="mshtml",l="quicktime",k="divx",j="Windows Media",h="qx.bom.client.Plugin",g="WMPlayer.OCX.7",f="Silverlight",c="QuickTimeCheckObject.QuickTimeCheck.1",e="QuickTime",d="npdivx.DivXBrowserPlugin.1",b="DivX Web Player",a="AgControl.AgControl";
qx.Bootstrap.define(h,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},__g:{quicktime:{plugin:e,control:c},wmv:{plugin:j,control:g},divx:{plugin:b,control:d},silverlight:{plugin:f,control:a}},getQuicktimeVersion:function(){var q=qx.bom.client.Plugin.__g[l];
return qx.bom.client.Plugin.__h(q.control,q.plugin);
},getWindowsMediaVersion:function(){var r=qx.bom.client.Plugin.__g[n];
return qx.bom.client.Plugin.__h(r.control,r.plugin);
},getDivXVersion:function(){var s=qx.bom.client.Plugin.__g[k];
return qx.bom.client.Plugin.__h(s.control,s.plugin);
},getSilverlightVersion:function(){var t=qx.bom.client.Plugin.__g[o];
return qx.bom.client.Plugin.__h(t.control,t.plugin);
},getQuicktime:function(){var u=qx.bom.client.Plugin.__g[l];
return qx.bom.client.Plugin.__i(u.control,u.plugin);
},getWindowsMedia:function(){var v=qx.bom.client.Plugin.__g[n];
return qx.bom.client.Plugin.__i(v.control,v.plugin);
},getDivX:function(){var w=qx.bom.client.Plugin.__g[k];
return qx.bom.client.Plugin.__i(w.control,w.plugin);
},getSilverlight:function(){var x=qx.bom.client.Plugin.__g[o];
return qx.bom.client.Plugin.__i(x.control,x.plugin);
},__h:function(y,z){var A=qx.bom.client.Plugin.__i(y,z);
if(!A){return p;
}if(qx.bom.client.Engine.getName()==m){var B=new ActiveXObject(y);

try{var E=B.versionInfo;

if(E!=undefined){return E;
}E=B.version;

if(E!=undefined){return E;
}E=B.settings.version;

if(E!=undefined){return E;
}}catch(G){return p;
}return p;
}else{var F=navigator.plugins;
var D=/([0-9]\.[0-9])/g;

for(var i=0;i<F.length;i++){var C=F[i];

if(C.name.indexOf(z)!==-1){if(D.test(C.name)||D.test(C.description)){return RegExp.$1;
}else{return p;
}return p;
}}}},__i:function(H,I){if(qx.bom.client.Engine.getName()==m){var J=window.ActiveXObject;

if(!J){return false;
}
try{new ActiveXObject(H);
}catch(L){return false;
}return true;
}else{var K=navigator.plugins;

if(!K){return false;
}var name;

for(var i=0;i<K.length;i++){name=K[i].name;

if(name.indexOf(I)!==-1){return true;
}}return false;
}}}});
})();
(function(){var l="",k=".",j="function",h="gecko",g="[object Opera]",f="[^\\.0-9]",e="4.0",d="\nTrace:",b="1.9.0.0",a="WEBKIT",J="Version/",I="9.0",H="UNKNOWN_VERSION",G="GECKO",F="8.0",E="FULLVERSION",D="Gecko",C="OPERA",B="AppleWebKit/",A="'is deprecated: ",s="NAME",t="UNKNOWN_ENGINE",q="MSHTML",r="Please check the API documentation of qx.core.Environment.",o="VERSION",p="DOCUMENT_MODE",m="' of '",n="opera",u="mshtml",v="\n",x="The constant '",w="webkit",z="5.0",y="qx.bom.client.Engine";
qx.Bootstrap.define(y,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,getVersion:function(){var N=window.navigator.userAgent;
var L=l;

if(qx.bom.client.Engine.__j()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(N)){if(N.indexOf(J)!=-1){var M=N.match(/Version\/(\d+)\.(\d+)/);
L=M[1]+k+M[2].charAt(0)+k+M[2].substring(1,M[2].length);
}else{L=RegExp.$1+k+RegExp.$2;

if(RegExp.$3!=l){L+=k+RegExp.$3;
}}}}else if(qx.bom.client.Engine.__k()){if(/AppleWebKit\/([^ ]+)/.test(N)){L=RegExp.$1;
var O=RegExp(f).exec(L);

if(O){L=L.slice(0,O.index);
}}}else if(qx.bom.client.Engine.__l()){if(/rv\:([^\);]+)(\)|;)/.test(N)){L=RegExp.$1;
}}else if(qx.bom.client.Engine.__m()){if(/MSIE\s+([^\);]+)(\)|;)/.test(N)){L=RegExp.$1;
if(L<8&&/Trident\/([^\);]+)(\)|;)/.test(N)){if(RegExp.$1==e){L=F;
}else if(RegExp.$1==z){L=I;
}}}}else{var K=window.qxFail;

if(K&&typeof K===j){L=K().FULLVERSION;
}else{L=b;
qx.Bootstrap.warn("Unsupported client: "+N+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return L;
},getName:function(){var name;

if(qx.bom.client.Engine.__j()){name=n;
}else if(qx.bom.client.Engine.__k()){name=w;
}else if(qx.bom.client.Engine.__l()){name=h;
}else if(qx.bom.client.Engine.__m()){name=u;
}else{var P=window.qxFail;

if(P&&typeof P===j){name=P().NAME;
}else{name=h;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__j:function(){return window.opera&&Object.prototype.toString.call(window.opera)==g;
},__k:function(){return window.navigator.userAgent.indexOf(B)!=-1;
},__l:function(){return window.controllers&&window.navigator.product===D;
},__m:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(Q){Q.NAME=Q.getName();
Q.FULLVERSION=Q.getVersion();

if(Q.FULLVERSION==l){Q.UNKNOWN_VERSION=true;
}
if(Q.__j()){Q.OPERA=true;

if(Q.FULLVERSION==l){Q.FULLVERSION="9.6.0";
}}else if(Q.__k()){Q.WEBKIT=true;

if(Q.FULLVERSION==l){Q.FULLVERSION="525.26";
}}else if(Q.__l()){Q.GECKO=true;

if(Q.FULLVERSION==l){Q.FULLVERSION="1.9.0.0";
}}else if(Q.__m()){Q.MSHTML=true;

if(document.documentMode){Q.DOCUMENT_MODE=document.documentMode;
}}else{var R=window.qxFail;

if(R&&typeof R===j){if(R().NAME){Q[R().NAME.toUpperCase()]=true;
}}else{Q.GECKO=true;
Q.UNKNOWN_ENGINE=true;
Q.UNKNOWN_VERSION=true;
}}Q.VERSION=parseFloat(Q.FULLVERSION);
if(qx.Bootstrap.DEBUG){var S=[s,E,o,C,a,G,q,t,H,p];

for(var i=0;i<S.length;i++){if(Q.__defineGetter__){var T=Q[S[i]];
Q.__defineGetter__(S[i],qx.Bootstrap.bind(function(U,c){var V=x+U+m+Q.classname+A+r;

if(qx.dev&&qx.dev.StackTrace){V+=d+qx.dev.StackTrace.getStackTrace().join(v);
}qx.Bootstrap.warn(V);
return c;
},Q,S[i],T));
}}}}});
})();
(function(){var l="",k="mshtml",j="msie",h=")(/| )([0-9]+\.[0-9])",g="(",f="ce",e="CSS1Compat",d="android",b="operamini",a="\nTrace:",M="'is deprecated: ",L="Please check the API documentation of qx.core.Environment.",K="mobile chrome",J="iemobile",I="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",H="FULLVERSION",G="opera mobi",F="Mobile Safari",E="UNKNOWN",D="operamobile",s="ie",t="mobile safari",q="IEMobile|Maxthon|MSIE",r="NAME",o="qx.bom.client.Browser",p="opera mini",m="VERSION",n="' of '",u="opera",v="TITLE",y="\n",x="Opera Mini|Opera Mobi|Opera",A="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",z="The constant '",C="webkit",B="5.0",w="Mobile/";
qx.Bootstrap.define(o,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",getName:function(){var Q=navigator.userAgent;
var P=new RegExp(g+qx.bom.client.Browser.__n+h);
var O=Q.match(P);

if(!O){return l;
}var name=O[1].toLowerCase();
var N=qx.bom.client.Engine.getName();

if(N===C){if(name===d){name=K;
}else if(Q.indexOf(F)!==-1||Q.indexOf(w)!==-1){name=t;
}}else if(N===k){if(name===j){name=s;
if(qx.bom.client.OperatingSystem.getVersion()===f){name=J;
}}}else if(N===u){if(name===G){name=D;
}else if(name===p){name=b;
}}return name;
},getVersion:function(){var U=navigator.userAgent;
var T=new RegExp(g+qx.bom.client.Browser.__n+h);
var S=U.match(T);

if(!S){return l;
}var name=S[1].toLowerCase();
var R=S[3];
if(U.match(/Version(\/| )([0-9]+\.[0-9])/)){R=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==k){R=qx.bom.client.Engine.getVersion();

if(name===j&&qx.bom.client.OperatingSystem.getVersion()==f){R=B;
}}return R;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==k&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==e;
}},__n:{"webkit":A,"gecko":I,"mshtml":q,"opera":x}[qx.bom.client.Engine.getName()]},defer:function(V){V.NAME=V.getName();
V.FULLVERSION=V.getVersion();
V.VERSION=parseFloat(V.FULLVERSION);
V.TITLE=V.NAME+" "+V.VERSION;

if(V.NAME!==l){V.UNKNOWN=false;
}if(qx.Bootstrap.DEBUG){var W=[H,m,r,v,E];

for(var i=0;i<W.length;i++){if(V.__defineGetter__){var X=V[W[i]];
V.__defineGetter__(W[i],qx.Bootstrap.bind(function(Y,c){var ba=z+Y+n+V.classname+M+L;

if(qx.dev&&qx.dev.StackTrace){ba+=a+qx.dev.StackTrace.getStackTrace().join(y);
}qx.Bootstrap.warn(ba);
return c;
},V,W[i],X));
}}}}});
})();
(function(){var k="background",j="linear-gradient(0deg, white 0%, red 100%)",h="placeholder",g="content",f="div",e="OTextOverflow",d="MozBorderRadius",c="qx.bom.client.Css",b='m11',a="input",z="-ms-linear-gradient(0deg, white 0%, red 100%)",y="-moz-linear-gradient(0deg, white 0%, red 100%)",x="gradient",w="-webkit-linear-gradient(left, white, black)",v="MozBoxShadow",u="-o-linear-gradient(0deg, white 0%, red 100%)",t="borderRadius",s='WebKitCSSMatrix',r="WebkitBorderRadius",q="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",o="mshtml",p="WebkitBoxShadow",m="textOverflow",n="boxShadow",l="border";
qx.Bootstrap.define(c,{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==o||!qx.bom.client.Browser.getQuirksMode();
return content?g:l;
},getTextOverflow:function(){return m in document.documentElement.style||e in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement(a);
return h in i;
},getBorderRadius:function(){return t in document.documentElement.style||d in document.documentElement.style||r in document.documentElement.style;
},getBoxShadow:function(){return n in document.documentElement.style||v in document.documentElement.style||p in document.documentElement.style;
},getTranslate3d:function(){return s in window&&b in new WebKitCSSMatrix();
},getGradients:function(){var A;

try{A=document.createElement(f);
}catch(C){A=document.createElement();
}var B=[q,w,y,u,z,j];

for(var i=0;i<B.length;i++){try{A.style[k]=B[i];

if(A.style[k].indexOf(x)!=-1){return true;
}}catch(D){}}return false;
}}});
})();
(function(){var c="notification",b="PhoneGap",a="qx.bom.client.PhoneGap";
qx.Bootstrap.define(a,{statics:{getPhoneGap:function(){return b in window;
},getNotification:function(){return c in navigator;
}}});
})();
(function(){var l=".",k="$1",j="",h="object",g="Shockwave Flash",f="undefined",e="REVISION",d="qx.bom.client.Flash",b="\nTrace:",a="ShockwaveFlash.ShockwaveFlash.7",H="STRICT_SECURITY_MODEL",G="osx",F="FULLVERSION",E="10.0.12",D="'is deprecated: ",C="win",B="ShockwaveFlash.ShockwaveFlash.6",A="VERSION",z="$version",y="' of '",s="EXPRESSINSTALL",t="6.0.65",q="mshtml",r="AVAILABLE",o="boolean",p="\n",m="always",n="Please check the API documentation of qx.core.Environment.",u="9.0.151",v="ShockwaveFlash.ShockwaveFlash",x="The constant '",w=",";
qx.Bootstrap.define(d,{statics:{AVAILABLE:false,FULLVERSION:"0.0.0",REVISION:"0",VERSION:0.0,EXPRESSINSTALL:false,STRICT_SECURITY_MODEL:false,isAvailable:function(){return parseFloat(qx.bom.client.Flash.getVersion())>0;
},getVersion:function(){if(qx.bom.client.Engine.getName()==q){if(!window.ActiveXObject){return j;
}var K=[0,0,0];
var J=false;

try{var L=new ActiveXObject(a);
}catch(N){try{var L=new ActiveXObject(B);
K=[6,0,21];
L.AllowScriptAccess=m;
}catch(O){if(K[0]==6){J=true;
}}
if(!J){try{L=new ActiveXObject(v);
}catch(P){}}}
if(!J&&typeof L==h){var I=L.GetVariable(z);

if(typeof I!=f){I=I.split(" ")[1].split(w);
K[0]=parseInt(I[0],10);
K[1]=parseInt(I[1],10);
K[2]=parseInt(I[2],10);
}}return K.join(l);
}else{if(!navigator.plugins||typeof navigator.plugins[g]!==h){return j;
}var K=[0,0,0];
var M=navigator.plugins[g].description;

if(typeof M!=f){M=M.replace(/^.*\s+(\S+\s+\S+$)/,k);
K[0]=parseInt(M.replace(/^(.*)\..*$/,k),10);
K[1]=parseInt(M.replace(/^.*\.(.*)\s.*$/,k),10);
K[2]=/r/.test(M)?parseInt(M.replace(/^.*r(.*)$/,k),10):0;
}return K.join(l);
}},getExpressInstall:function(){var R=qx.bom.client.Flash.getVersion();

if(R==j){return false;
}var Q=qx.bom.client.OperatingSystem.getName();
return (Q==C||Q==G)&&qx.bom.client.Flash.__o(t,R);
},getStrictSecurityModel:function(){var S=qx.bom.client.Flash.getVersion();

if(S==j){return false;
}var T=S.split(l);

if(T[0]<10){return qx.bom.client.Flash.__o(u,S);
}else{return qx.bom.client.Flash.__o(E,S);
}},_cachedSupportsVersion:{},supportsVersion:function(U){if(typeof this._cachedSupportsVersion[U]===o){return this._cachedSupportsVersion[U];
}else{var X=U.split(l);
var W=this.FULLVERSION.split(l);

for(var i=0;i<X.length;i++){var V=parseInt(W[i],10)-parseInt(X[i],10);

if(V>0){return (this._cachedSupportsVersion[U]=true);
}else if(V<0){return (this._cachedSupportsVersion[U]=false);
}}return (this._cachedSupportsVersion[U]=true);
}},__o:function(Y,ba){var bd=Y.split(l);
var bc=ba||qx.bom.client.Flash.getVersion();
bc=bc.split(l);

for(var i=0;i<bd.length;i++){var bb=parseInt(bc[i],10)-parseInt(bd[i],10);

if(bb>0){return true;
}else if(bb<0){return false;
}}return true;
}},defer:function(be){be.FULLVERSION=be.getVersion();
be.VERSION=parseFloat(be.FULLVERSION);
be.AVAILABLE=be.isAvailable();
var bh=be.FULLVERSION.split(l);
be.REVISION=bh[bh.length-1];
be.STRICT_SECURITY_MODEL=be.getStrictSecurityModel();
be.EXPRESSINSTALL=be.getExpressInstall();
if(qx.Bootstrap.DEBUG){var bf=[F,A,r,e,H,s];

for(var i=0;i<bf.length;i++){if(be.__defineGetter__){var bg=be[bf[i]];
be.__defineGetter__(bf[i],qx.Bootstrap.bind(function(bi,c){var bj=x+bi+y+be.classname+D+n;

if(qx.dev&&qx.dev.StackTrace){bj+=b+qx.dev.StackTrace.getStackTrace().join(p);
}qx.Bootstrap.warn(bj);
return c;
},be,bf[i],bg));
}}}}});
})();
(function(){var a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
})();
(function(){var m="ipod",l="g",k="xbox",j="pc",i="\.",h="(",g=")",f="iPhone",e="|",d="qx.bom.client.Device",a="wii",c="ipad",b="ds";
qx.Bootstrap.define(d,{statics:{__p:{"iPod":m,"iPad":c,"iPhone":f,"PSP":"psp","PLAYSTATION 3":"ps3","Nintendo Wii":a,"Nintendo DS":b,"XBOX":"xbox","Xbox":k},getName:function(){var p=[];

for(var o in this.__p){p.push(o);
}var q=new RegExp(h+p.join(e).replace(/\./g,i)+g,l);
var n=q.exec(navigator.userAgent);

if(n&&n[1]){return qx.bom.client.Device.__p[n[1]];
}return j;
}}});
})();
(function(){var e="qx.bom.client.Event",d="ontouchstart",c="mshtml",b="opera",a="pointerEvents";
qx.Bootstrap.define(e,{statics:{getTouch:function(){return (d in window);
},getPointer:function(){if(a in document.documentElement.style){var f=qx.bom.client.Engine.getName();
return f!=b&&f!=c;
}return false;
}}});
})();
(function(){var o="on",n="off",m="os.name",l="html.storage.local",k="plugin.silverlight.version",j="os.version",h="html.xul",g="plugin.windowsmedia.version",f="html.video.ogg",e="default",bF="html.xpath",bE="plugin.flash.express",bD="plugin.windowsmedia",bC="html.webworker",bB="phonegap",bA="browser.quirksmode",bz="browser.name",by="plugin.silverlight",bx="event.pointer",bw="qx.aspects",v="plugin.gears",w="io.ssl",t="css.translate3d",u="html.classlist",r="locale.variant",s="css.textoverflow",p="qx.debug",q="html.video",D="plugin.flash",E="css.boxshadow",W="event.touch",S="html.storage.session",bf="plugin.divx",ba="css.boxmodel",br="plugin.flash.version",bl="qx.allowUrlSettings",L="css.gradients",bv="browser.documentmode",bt="html.vml",bs="html.canvas",J="html.audio",O="html.audio.mp3",Q="css.borderradius",U="ecmascript.objectcount",X="locale",bb="html.audio.au",bh="html.geolocation",bn="qx.mobile.emulatetouch",x="qx.dynlocale",y="plugin.quicktime",N="engine.version",be="io.maxrequests",bd="engine.name",bc="html.audio.aif",bj="html.audio.ogg",bi="qx.mobile.nativescroll",Y="plugin.divx.version",bg="html.video.h264",a="css.placeholder",bm="plugin.quicktime.version",z="|",A="browser.version",T="io.xhr",b="html.audio.wav",d="device.name",I="phonegap.notification",B="html.svg",C="html.dataurl",G="html.video.webm",V="plugin.flash.strictsecurity",bp="qx.core.Environment",bo="qx.debug.databinding",P="true",bq="qxenv",K="qx.propertyDebugLevel",bk="qx.dynamicmousewheel",F=":",H="false",c="&",R="qx.allowUrlVariants",M="qx.bom.htmlarea.HtmlArea.debug",bu="qx.globalErrorHandling";
qx.Bootstrap.define(bp,{statics:{_checks:{},_asyncChecks:{},__q:{},get:function(bG){if(this.__q[bG]!=undefined){return this.__q[bG];
}var bH=this._checks[bG];

if(bH){var bI=bH();
this.__q[bG]=bI;
return bI;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bG+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(bJ,bK,self){var bM=this;

if(this.__q[bJ]!=undefined){window.setTimeout(function(){bK.call(self,bM.__q[bJ]);
},0);
return;
}var bL=this._asyncChecks[bJ];

if(bL){bL(function(bN){bM.__q[bJ]=bN;
bK.call(self,bN);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bJ+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(bO,bP){return this.__r(this.get(bO),bP);
},selectAsync:function(bQ,bR,self){this.getAsync(bQ,function(bS){var bT=this.__r(bQ,bR);
bT.call(self,bS);
},this);
},__r:function(bU,bV){var bX=bV[bU];

if(bV.hasOwnProperty(bU)){return bX;
}for(var bW in bV){if(bW.indexOf(z)!=-1){var bY=bW.split(z);

for(var i=0;i<bY.length;i++){if(bY[i]==bU){return bV[bW];
}}}}if(bX===true&&bV[o]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+bU+"' is a boolean value. "+"Please change your select map from 'on' to 'true'.");
qx.Bootstrap.trace(this);
}return bV[o];
}if(bX===false&&bV[n]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+bU+"' is a boolean value. "+"Please change your select map from 'off' to 'false'.");
qx.Bootstrap.trace(this);
}return bV[n];
}
if(bV[e]!==undefined){return bV[e];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+bU+'" ('+(typeof bU)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(bV)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(ca){delete this.__q[ca];
},add:function(cb,cc){if(this._checks[cb]==undefined){if(cc instanceof Function){this._checks[cb]=cc;
}else{this._checks[cb]=this.__u(cc);
}}},addAsync:function(cd,ce){if(this._checks[cd]==undefined){this._asyncChecks[cd]=ce;
}},_initDefaultQxValues:function(){this.add(bl,function(){return false;
});
this.add(R,function(){return false;
});
this.add(K,function(){return 0;
});
this.add(p,function(){return true;
});
this.add(bw,function(){return false;
});
this.add(x,function(){return true;
});
this.add(bn,function(){return false;
});
this.add(bi,function(){return false;
});
this.add(bk,function(){return true;
});
this.add(bo,function(){return false;
});
},__s:function(){if(window.qxsettings){for(var cg in window.qxsettings){var cf=window.qxsettings[cg];

if(cg==M||cg==bu){if(cf==o){cf=true;
}else if(cf==n){cf=false;
}}this._checks[cg]=this.__u(cf);
}}if(window.qxvariants){for(var cg in window.qxvariants){var cf=window.qxvariants[cg];

if(cg==bw||cg==p||cg==x||cg==bn||cg==bi){if(cf==o){cf=true;
}else if(cf==n){cf=false;
}}this._checks[cg]=this.__u(cf);
}}if(qx&&qx.$$environment){for(var cg in qx.$$environment){var cf=qx.$$environment[cg];
this._checks[cg]=this.__u(cf);
}}},__t:function(){if(window.document&&window.document.location){var ch=window.document.location.search.slice(1).split(c);

for(var i=0;i<ch.length;i++){var cj=ch[i].split(F);

if(cj.length!=3||cj[0]!=bq){continue;
}var ck=cj[1];
var ci=decodeURIComponent(cj[2]);
if(ci==P){ci=true;
}else if(ci==H){ci=false;
}else if(/^(\d|\.)+$/.test(ci)){ci=parseFloat(ci);
}this._checks[ck]=this.__u(ci);
}}},__u:function(cl){return qx.Bootstrap.bind(function(cm){return cm;
},null,cl);
},useCheck:function(cn){return true;
},_initChecksMap:function(){if(this.useCheck(N)){this._checks[N]=qx.bom.client.Engine.getVersion;
}
if(this.useCheck(bd)){this._checks[bd]=qx.bom.client.Engine.getName;
}if(this.useCheck(bz)){this._checks[bz]=qx.bom.client.Browser.getName;
}
if(this.useCheck(A)){this._checks[A]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck(bv)){this._checks[bv]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck(bA)){this._checks[bA]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck(d)){this._checks[d]=qx.bom.client.Device.getName;
}if(this.useCheck(X)){this._checks[X]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck(r)){this._checks[r]=qx.bom.client.Locale.getVariant;
}if(this.useCheck(m)){this._checks[m]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck(j)){this._checks[j]=qx.bom.client.OperatingSystem.getVersion;
}if(this.useCheck(v)){this._checks[v]=qx.bom.client.Plugin.getGears;
}
if(this.useCheck(y)){this._checks[y]=qx.bom.client.Plugin.getQuicktime;
}
if(this.useCheck(bm)){this._checks[bm]=qx.bom.client.Plugin.getQuicktimeVersion;
}
if(this.useCheck(bD)){this._checks[bD]=qx.bom.client.Plugin.getWindowsMedia;
}
if(this.useCheck(g)){this._checks[g]=qx.bom.client.Plugin.getWindowsMediaVersion;
}
if(this.useCheck(bf)){this._checks[bf]=qx.bom.client.Plugin.getDivX;
}
if(this.useCheck(Y)){this._checks[Y]=qx.bom.client.Plugin.getDivXVersion;
}
if(this.useCheck(by)){this._checks[by]=qx.bom.client.Plugin.getSilverlight;
}
if(this.useCheck(k)){this._checks[k]=qx.bom.client.Plugin.getSilverlightVersion;
}
if(this.useCheck(D)){this._checks[D]=qx.bom.client.Flash.isAvailable;
}
if(this.useCheck(br)){this._checks[br]=qx.bom.client.Flash.getVersion;
}
if(this.useCheck(bE)){this._checks[bE]=qx.bom.client.Flash.getExpressInstall;
}
if(this.useCheck(V)){this._checks[V]=qx.bom.client.Flash.getStrictSecurityModel;
}if(this.useCheck(be)){this._checks[be]=qx.bom.client.Transport.getMaxConcurrentRequestCount;
}
if(this.useCheck(w)){this._checks[w]=qx.bom.client.Transport.getSsl;
}
if(this.useCheck(T)){this._checks[T]=qx.bom.client.Transport.getXmlHttpRequest;
}if(this.useCheck(W)){this._checks[W]=qx.bom.client.Event.getTouch;
}
if(this.useCheck(bx)){this._checks[bx]=qx.bom.client.Event.getPointer;
}if(this.useCheck(U)){this._checks[U]=qx.bom.client.EcmaScript.getObjectCount;
}if(this.useCheck(bC)){this._checks[bC]=qx.bom.client.Html.getWebWorker;
}
if(this.useCheck(bh)){this._checks[bh]=qx.bom.client.Html.getGeoLocation;
}
if(this.useCheck(J)){this._checks[J]=qx.bom.client.Html.getAudio;
}
if(this.useCheck(bj)){this._checks[bj]=qx.bom.client.Html.getAudioOgg;
}
if(this.useCheck(O)){this._checks[O]=qx.bom.client.Html.getAudioMp3;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Html.getAudioWav;
}
if(this.useCheck(bb)){this._checks[bb]=qx.bom.client.Html.getAudioAu;
}
if(this.useCheck(bc)){this._checks[bc]=qx.bom.client.Html.getAudioAif;
}
if(this.useCheck(q)){this._checks[q]=qx.bom.client.Html.getVideo;
}
if(this.useCheck(f)){this._checks[f]=qx.bom.client.Html.getVideoOgg;
}
if(this.useCheck(bg)){this._checks[bg]=qx.bom.client.Html.getVideoH264;
}
if(this.useCheck(G)){this._checks[G]=qx.bom.client.Html.getVideoWebm;
}
if(this.useCheck(l)){this._checks[l]=qx.bom.client.Html.getLocalStorage;
}
if(this.useCheck(S)){this._checks[S]=qx.bom.client.Html.getSessionStorage;
}
if(this.useCheck(u)){this._checks[u]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(bF)){this._checks[bF]=qx.bom.client.Html.getXPath;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.Html.getXul;
}
if(this.useCheck(bs)){this._checks[bs]=qx.bom.client.Html.getCanvas;
}
if(this.useCheck(B)){this._checks[B]=qx.bom.client.Html.getSvg;
}
if(this.useCheck(bt)){this._checks[bt]=qx.bom.client.Html.getVml;
}
if(this.useCheck(C)){this._asyncChecks[C]=qx.bom.client.Html.getDataUrl;
}if(this.useCheck(s)){this._checks[s]=qx.bom.client.Css.getTextOverflow;
}
if(this.useCheck(a)){this._checks[a]=qx.bom.client.Css.getPlaceholder;
}
if(this.useCheck(Q)){this._checks[Q]=qx.bom.client.Css.getBorderRadius;
}
if(this.useCheck(E)){this._checks[E]=qx.bom.client.Css.getBoxShadow;
}
if(this.useCheck(L)){this._checks[L]=qx.bom.client.Css.getGradients;
}
if(this.useCheck(ba)){this._checks[ba]=qx.bom.client.Css.getBoxModel;
}
if(this.useCheck(t)){this._checks[t]=qx.bom.client.Css.getTranslate3d;
}if(this.useCheck(bB)){this._checks[bB]=qx.bom.client.PhoneGap.getPhoneGap;
}
if(this.useCheck(I)){this._checks[I]=qx.bom.client.PhoneGap.getNotification;
}}},defer:function(co){co._initDefaultQxValues();
co._initChecksMap();
co.__s();
if(co.get(bl)===true){co.__t();
}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__v:{},define:function(j,k){this.defineDeprecated(j,k);
},defineDeprecated:function(l,m){if(m===undefined){throw new Error('Default value of setting "'+l+'" must be defined!');
}
if(!this.__v[l]){this.__v[l]={};
}else if(this.__v[l].defaultValue!==undefined){throw new Error('Setting "'+l+'" is already defined!');
}this.__v[l].defaultValue=m;
},get:function(n){var o=this.__v[n];

if(o===undefined){throw new Error('Setting "'+n+'" is not defined.');
}
if(o.value!==undefined){return o.value;
}return o.defaultValue;
},set:function(p,q){this.setDeprecated(p,q);
},setDeprecated:function(r,s){if((r.split(a)).length<2){throw new Error('Malformed settings key "'+r+'". Must be following the schema "namespace.key".');
}
if(!this.__v[r]){this.__v[r]={};
}this.__v[r].value=s;
},__w:function(){if(window.qxsettings){for(var t in window.qxsettings){this.setDeprecated(t,window.qxsettings[t]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(u){}this.__x();
}},__x:function(){if(qx.core.Environment.get(h)!=true){return;
}var w=document.location.search.slice(1).split(g);

for(var i=0;i<w.length;i++){var v=w[i].split(b);

if(v.length!=3||v[0]!=c){continue;
}this.set(v[1],decodeURIComponent(v[2]));
}}},defer:function(x){x.defineDeprecated(h,false);
x.defineDeprecated(e,false);
x.defineDeprecated(d,0);
x.__w();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,j){if(j){if(j.extend&&!(j.extend instanceof Array)){j.extend=[j.extend];
}var k=j.statics?j.statics:{};
if(j.extend){k.$$extends=j.extend;
}
if(j.properties){k.$$properties=j.properties;
}
if(j.members){k.$$members=j.members;
}
if(j.events){k.$$events=j.events;
}}else{var k={};
}k.$$type=c;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
qx.Interface.$$registry[name]=k;
return k;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$extends){n.push.apply(n,this.flatten(m[i].$$extends));
}}return n;
},__y:function(o,p,q,r){var v=q.$$members;

if(v){for(var u in v){if(qx.Bootstrap.isFunction(v[u])){var t=this.__z(p,u);
var s=t||qx.Bootstrap.isFunction(o[u]);

if(!s){throw new Error('Implementation of method "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}var w=r===true&&!t&&!qx.Bootstrap.hasInterface(p,q);

if(w){o[u]=this.__C(q,o[u],u,v[u]);
}}else{if(typeof o[u]===undefined){if(typeof o[u]!==h){throw new Error('Implementation of member "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}}}}}},__z:function(x,y){var C=y.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!C){return false;
}var z=qx.Bootstrap.firstLow(C[2]);
var A=qx.Bootstrap.getPropertyDefinition(x,z);

if(!A){return false;
}var B=C[0]==b||C[0]==d;

if(B){return qx.Bootstrap.getPropertyDefinition(x,z).check==g;
}return true;
},__A:function(D,E){if(E.$$properties){for(var F in E.$$properties){if(!qx.Bootstrap.getPropertyDefinition(D,F)){throw new Error('The property "'+F+'" is not supported by Class "'+D.classname+'"!');
}}}},__B:function(G,H){if(H.$$events){for(var I in H.$$events){if(!qx.Bootstrap.supportsEvent(G,I)){throw new Error('The event "'+I+'" is not supported by Class "'+G.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__y(J,M,K,false);
this.__A(M,K);
this.__B(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__y(N.prototype,N,O,P);
this.__A(N,O);
this.__B(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__C:function(){},__D:null,__E:function(){}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__uj:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__uj;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var n=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,n);
}return n;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(o,p,q,name){this.__uj.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i<this.length;i++){if(this[i]===h){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(k,m){if(m==null){m=this.length-1;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i>=0;i--){if(this[i]===k){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){if(q.call(r||window,t,i,this)){s.push(this[i]);
}}}return s;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(y.call(z||window,A,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
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
(function(){var m=';',k='return this.',j="boolean",h="string",g='!==undefined)',f='else if(this.',e='if(this.',d='else ',c=' of an instance of ',b=' is not (yet) ready!");',W="init",V="': ",U=" of class ",T='(computed, old, "',S='return value;',R='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',Q='return init;',P='var init=this.',O="')){",N="if(reg.hasListener(this, '",t="Error in property ",u='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',r='if(init==qx.core.Property.$$inherit)init=null;',s="rv:1.8.1",p="set",q='if(a[i].',n="var reg=qx.event.Registration;",o=" in method ",v='throw new Error("Property ',w='(backup);',D='var inherit=prop.$$inherit;',B='return null;',H='this.',F=")}",J="setRuntime",I=')a[i].',y='");',M="setThemed",L="inherit",K="MSIE 6.0",x=" with incoming value '",z="', qx.event.type.Data, [computed, old]",A="object",C='}',E="reg.fireEvent(this, '",G="qx.core.Property";
qx.Bootstrap.define(G,{statics:{__F:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__G:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:L,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:h,dereference:j,inheritable:j,nullable:j,themeable:j,refine:j,init:null,apply:h,event:h,check:null,transform:h,deferredInit:j,validate:null},$$allowedGroupKeys:{name:h,group:A,mode:h,themeable:j},$$inheritable:{},__H:function(X){var Y=this.__I(X);

if(!Y.length){var ba=function(){};
}else{ba=this.__J(Y);
}X.prototype.$$refreshInheritables=ba;
},__I:function(bb){var bd=[];

while(bb){var bc=bb.$$properties;

if(bc){for(var name in this.$$inheritable){if(bc[name]&&bc[name].inheritable){bd.push(name);
}}}bb=bb.superclass;
}return bd;
},__J:function(be){var bi=this.$$store.inherit;
var bh=this.$$store.init;
var bg=this.$$method.refresh;
var bf=["var parent = this.getLayoutParent();","if (!parent) return;"];

for(var i=0,l=be.length;i<l;i++){var name=be[i];
bf.push("var value = parent.",bi[name],";","if (value===undefined) value = parent.",bh[name],";","this.",bg[name],"(value);");
}return new Function(bf.join(""));
},attachRefreshInheritables:function(bj){bj.prototype.$$refreshInheritables=function(){qx.core.Property.__H(bj);
return this.$$refreshInheritables();
};
},attachMethods:function(bk,name,bl){bl.group?this.__K(bk,bl,name):this.__L(bk,bl,name);
},__K:function(bm,bn,name){var bu=qx.Bootstrap.firstUp(name);
var bt=bm.prototype;
var bv=bn.themeable===true;
var bw=[];
var bq=[];

if(bv){var bo=[];
var bs=[];
}var br="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
bw.push(br);

if(bv){bo.push(br);
}
if(bn.mode=="shorthand"){var bp="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
bw.push(bp);

if(bv){bo.push(bp);
}}
for(var i=0,a=bn.group,l=a.length;i<l;i++){bw.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
bq.push("this.",this.$$method.reset[a[i]],"();");

if(bv){bo.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
bs.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+bu;
bt[this.$$method.set[name]]=new Function(bw.join(""));
this.$$method.reset[name]="reset"+bu;
bt[this.$$method.reset[name]]=new Function(bq.join(""));

if(bv){this.$$method.setThemed[name]="setThemed"+bu;
bt[this.$$method.setThemed[name]]=new Function(bo.join(""));
this.$$method.resetThemed[name]="resetThemed"+bu;
bt[this.$$method.resetThemed[name]]=new Function(bs.join(""));
}},__L:function(bx,by,name){var bA=qx.Bootstrap.firstUp(name);
var bC=bx.prototype;
if(by.dereference===undefined&&typeof by.check==="string"){by.dereference=this.__M(by.check);
}var bB=this.$$method;
var bz=this.$$store;
bz.runtime[name]="$$runtime_"+name;
bz.user[name]="$$user_"+name;
bz.theme[name]="$$theme_"+name;
bz.init[name]="$$init_"+name;
bz.inherit[name]="$$inherit_"+name;
bz.useinit[name]="$$useinit_"+name;
bB.get[name]="get"+bA;
bC[bB.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bx,name,"get");
};
bB.set[name]="set"+bA;
bC[bB.set[name]]=function(bD){return qx.core.Property.executeOptimizedSetter(this,bx,name,"set",arguments);
};
bB.reset[name]="reset"+bA;
bC[bB.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bx,name,"reset");
};

if(by.inheritable||by.apply||by.event||by.deferredInit){bB.init[name]="init"+bA;
bC[bB.init[name]]=function(bE){return qx.core.Property.executeOptimizedSetter(this,bx,name,"init",arguments);
};
}
if(by.inheritable){bB.refresh[name]="refresh"+bA;
bC[bB.refresh[name]]=function(bF){return qx.core.Property.executeOptimizedSetter(this,bx,name,"refresh",arguments);
};
}bB.setRuntime[name]="setRuntime"+bA;
bC[bB.setRuntime[name]]=function(bG){return qx.core.Property.executeOptimizedSetter(this,bx,name,"setRuntime",arguments);
};
bB.resetRuntime[name]="resetRuntime"+bA;
bC[bB.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bx,name,"resetRuntime");
};

if(by.themeable){bB.setThemed[name]="setThemed"+bA;
bC[bB.setThemed[name]]=function(bH){return qx.core.Property.executeOptimizedSetter(this,bx,name,"setThemed",arguments);
};
bB.resetThemed[name]="resetThemed"+bA;
bC[bB.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bx,name,"resetThemed");
};
}
if(by.check==="Boolean"){bC["toggle"+bA]=new Function("return this."+bB.set[name]+"(!this."+bB.get[name]+"())");
bC["is"+bA]=new Function("return this."+bB.get[name]+"()");
}},__M:function(bI){return !!this.__G[bI];
},__N:function(bJ){return this.__G[bJ]||qx.Bootstrap.classIsDefined(bJ)||(qx.Interface&&qx.Interface.isDefined(bJ));
},__O:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bK,bL,bM,bN,bO){var bP=bK.constructor.classname;
var bQ=t+bM+U+bP+o+this.$$method[bN][bM]+x+bO+V;
throw new Error(bQ+(this.__O[bL]||"Unknown reason: "+bL));
},__P:function(bR,bS,name,bT,bU,bV){var bW=this.$$method[bT][name];
{bS[bW]=new Function("value",bU.join(""));
};
if(qx.core.Environment.get("qx.aspects")){bS[bW]=qx.core.Aspect.wrap(bR.classname+"."+bW,bS[bW],"property");
}qx.Bootstrap.setDisplayName(bS[bW],bR.classname+".prototype",bW);
if(bV===undefined){return bR[bW]();
}else{return bR[bW](bV[0]);
}},executeOptimizedGetter:function(bX,bY,name,ca){var cc=bY.$$properties[name];
var ce=bY.prototype;
var cb=[];
var cd=this.$$store;
cb.push(e,cd.runtime[name],g);
cb.push(k,cd.runtime[name],m);

if(cc.inheritable){cb.push(f,cd.inherit[name],g);
cb.push(k,cd.inherit[name],m);
cb.push(d);
}cb.push(e,cd.user[name],g);
cb.push(k,cd.user[name],m);

if(cc.themeable){cb.push(f,cd.theme[name],g);
cb.push(k,cd.theme[name],m);
}
if(cc.deferredInit&&cc.init===undefined){cb.push(f,cd.init[name],g);
cb.push(k,cd.init[name],m);
}cb.push(d);

if(cc.init!==undefined){if(cc.inheritable){cb.push(P,cd.init[name],m);

if(cc.nullable){cb.push(r);
}else if(cc.init!==undefined){cb.push(k,cd.init[name],m);
}else{cb.push(R,name,c,bY.classname,b);
}cb.push(Q);
}else{cb.push(k,cd.init[name],m);
}}else if(cc.inheritable||cc.nullable){cb.push(B);
}else{cb.push(v,name,c,bY.classname,b);
}return this.__P(bX,ce,name,ca,cb);
},executeOptimizedSetter:function(cf,cg,name,ch,ci){var cn=cg.$$properties[name];
var cm=cg.prototype;
var ck=[];
var cj=ch===p||ch===M||ch===J||(ch===W&&cn.init===undefined);
var cl=cn.apply||cn.event||cn.inheritable;
var co=this.__Q(ch,name);
this.__R(ck,cn,name,ch,cj);

if(cj){this.__S(ck,cg,cn,name);
}
if(cl){this.__T(ck,cj,co,ch);
}
if(cn.inheritable){ck.push(D);
}
if(!cl){this.__V(ck,name,ch,cj);
}else{this.__W(ck,cn,name,ch,cj);
}
if(cn.inheritable){this.__X(ck,cn,name,ch);
}else if(cl){this.__Y(ck,cn,name,ch);
}
if(cl){this.__ba(ck,cn,name);
if(cn.inheritable&&cm._getChildren){this.__bb(ck,name);
}}if(cj){ck.push(S);
}return this.__P(cf,cm,name,ch,ck,ci);
},__Q:function(cp,name){if(cp==="setRuntime"||cp==="resetRuntime"){var cq=this.$$store.runtime[name];
}else if(cp==="setThemed"||cp==="resetThemed"){cq=this.$$store.theme[name];
}else if(cp==="init"){cq=this.$$store.init[name];
}else{cq=this.$$store.user[name];
}return cq;
},__R:function(cr,cs,name,ct,cu){{if(!cs.nullable||cs.check||cs.inheritable){cr.push('var prop=qx.core.Property;');
}if(ct==="set"){cr.push('if(value===undefined)prop.error(this,2,"',name,'","',ct,'",value);');
}};
},__S:function(cv,cw,cx,name){if(cx.transform){cv.push('value=this.',cx.transform,'(value);');
}if(cx.validate){if(typeof cx.validate==="string"){cv.push('this.',cx.validate,'(value);');
}else if(cx.validate instanceof Function){cv.push(cw.classname,'.$$properties.',name);
cv.push('.validate.call(this, value);');
}}},__T:function(cy,cz,cA,cB){var cC=(cB==="reset"||cB==="resetThemed"||cB==="resetRuntime");

if(cz){cy.push('if(this.',cA,'===value)return value;');
}else if(cC){cy.push('if(this.',cA,'===undefined)return;');
}},__U:undefined,__V:function(cD,name,cE,cF){if(cE==="setRuntime"){cD.push('this.',this.$$store.runtime[name],'=value;');
}else if(cE==="resetRuntime"){cD.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cD.push('delete this.',this.$$store.runtime[name],';');
}else if(cE==="set"){cD.push('this.',this.$$store.user[name],'=value;');
}else if(cE==="reset"){cD.push('if(this.',this.$$store.user[name],'!==undefined)');
cD.push('delete this.',this.$$store.user[name],';');
}else if(cE==="setThemed"){cD.push('this.',this.$$store.theme[name],'=value;');
}else if(cE==="resetThemed"){cD.push('if(this.',this.$$store.theme[name],'!==undefined)');
cD.push('delete this.',this.$$store.theme[name],';');
}else if(cE==="init"&&cF){cD.push('this.',this.$$store.init[name],'=value;');
}},__W:function(cG,cH,name,cI,cJ){if(cH.inheritable){cG.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cG.push('var computed, old;');
}cG.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="resetRuntime"){cG.push('delete this.',this.$$store.runtime[name],';');
cG.push('if(this.',this.$$store.user[name],'!==undefined)');
cG.push('computed=this.',this.$$store.user[name],';');
cG.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cG.push('computed=this.',this.$$store.theme[name],';');
cG.push('else if(this.',this.$$store.init[name],'!==undefined){');
cG.push('computed=this.',this.$$store.init[name],';');
cG.push('this.',this.$$store.useinit[name],'=true;');
cG.push('}');
}else{cG.push('old=computed=this.',this.$$store.runtime[name],';');
if(cI==="set"){cG.push('this.',this.$$store.user[name],'=value;');
}else if(cI==="reset"){cG.push('delete this.',this.$$store.user[name],';');
}else if(cI==="setThemed"){cG.push('this.',this.$$store.theme[name],'=value;');
}else if(cI==="resetThemed"){cG.push('delete this.',this.$$store.theme[name],';');
}else if(cI==="init"&&cJ){cG.push('this.',this.$$store.init[name],'=value;');
}}cG.push('}');
cG.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(cI==="set"){if(!cH.inheritable){cG.push('old=this.',this.$$store.user[name],';');
}cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="reset"){if(!cH.inheritable){cG.push('old=this.',this.$$store.user[name],';');
}cG.push('delete this.',this.$$store.user[name],';');
cG.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cG.push('computed=this.',this.$$store.runtime[name],';');
cG.push('if(this.',this.$$store.theme[name],'!==undefined)');
cG.push('computed=this.',this.$$store.theme[name],';');
cG.push('else if(this.',this.$$store.init[name],'!==undefined){');
cG.push('computed=this.',this.$$store.init[name],';');
cG.push('this.',this.$$store.useinit[name],'=true;');
cG.push('}');
}else{if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cH.inheritable){cG.push('computed=this.',this.$$store.user[name],';');
}else{cG.push('old=computed=this.',this.$$store.user[name],';');
}if(cI==="setThemed"){cG.push('this.',this.$$store.theme[name],'=value;');
}else if(cI==="resetThemed"){cG.push('delete this.',this.$$store.theme[name],';');
}else if(cI==="init"&&cJ){cG.push('this.',this.$$store.init[name],'=value;');
}}cG.push('}');
if(cH.themeable){cG.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cH.inheritable){cG.push('old=this.',this.$$store.theme[name],';');
}
if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="set"){cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="setThemed"){cG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cI==="resetThemed"){cG.push('delete this.',this.$$store.theme[name],';');
cG.push('if(this.',this.$$store.init[name],'!==undefined){');
cG.push('computed=this.',this.$$store.init[name],';');
cG.push('this.',this.$$store.useinit[name],'=true;');
cG.push('}');
}else if(cI==="init"){if(cJ){cG.push('this.',this.$$store.init[name],'=value;');
}cG.push('computed=this.',this.$$store.theme[name],';');
}else if(cI==="refresh"){cG.push('computed=this.',this.$$store.theme[name],';');
}cG.push('}');
}cG.push('else if(this.',this.$$store.useinit[name],'){');

if(!cH.inheritable){cG.push('old=this.',this.$$store.init[name],';');
}
if(cI==="init"){if(cJ){cG.push('computed=this.',this.$$store.init[name],'=value;');
}else{cG.push('computed=this.',this.$$store.init[name],';');
}}else if(cI==="set"||cI==="setRuntime"||cI==="setThemed"||cI==="refresh"){cG.push('delete this.',this.$$store.useinit[name],';');

if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="set"){cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="setThemed"){cG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cI==="refresh"){cG.push('computed=this.',this.$$store.init[name],';');
}}cG.push('}');
if(cI==="set"||cI==="setRuntime"||cI==="setThemed"||cI==="init"){cG.push('else{');

if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="set"){cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="setThemed"){cG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cI==="init"){if(cJ){cG.push('computed=this.',this.$$store.init[name],'=value;');
}else{cG.push('computed=this.',this.$$store.init[name],';');
}cG.push('this.',this.$$store.useinit[name],'=true;');
}cG.push('}');
}},__X:function(cK,cL,name,cM){cK.push('if(computed===undefined||computed===inherit){');

if(cM==="refresh"){cK.push('computed=value;');
}else{cK.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}cK.push('if((computed===undefined||computed===inherit)&&');
cK.push('this.',this.$$store.init[name],'!==undefined&&');
cK.push('this.',this.$$store.init[name],'!==inherit){');
cK.push('computed=this.',this.$$store.init[name],';');
cK.push('this.',this.$$store.useinit[name],'=true;');
cK.push('}else{');
cK.push('delete this.',this.$$store.useinit[name],';}');
cK.push('}');
cK.push('if(old===computed)return value;');
cK.push('if(computed===inherit){');
cK.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
cK.push('}');
cK.push('else if(computed===undefined)');
cK.push('delete this.',this.$$store.inherit[name],';');
cK.push('else this.',this.$$store.inherit[name],'=computed;');
cK.push('var backup=computed;');
if(cL.init!==undefined&&cM!=="init"){cK.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cK.push('if(old===undefined)old=null;');
}cK.push('if(computed===undefined||computed==inherit)computed=null;');
},__Y:function(cN,cO,name,cP){if(cP!=="set"&&cP!=="setRuntime"&&cP!=="setThemed"){cN.push('if(computed===undefined)computed=null;');
}cN.push('if(old===computed)return value;');
if(cO.init!==undefined&&cP!=="init"){cN.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cN.push('if(old===undefined)old=null;');
}},__ba:function(cQ,cR,name){if(cR.apply){cQ.push(H,cR.apply,T,name,y);
}if(cR.event){cQ.push(n,N,cR.event,O,E,cR.event,z,F);
}},__bb:function(cS,name){cS.push(u);
cS.push(q,this.$$method.refresh[name],I,this.$$method.refresh[name],w);
cS.push(C);
}},defer:function(cT){var cV=navigator.userAgent.indexOf(K)!=-1;
var cU=navigator.userAgent.indexOf(s)!=-1;
if(cV||cU){cT.__M=cT.__N;
}}});
})();
(function(){var t="qx.aspects",s=".",r="static",q="constructor",p="[Class ",o="]",n="toString",m="singleton",k="$$init_",j=".prototype",d="destructor",h="extend",g="Class",c="destruct",b="qx.Class",f="member",e="qx.event.type.Data";
qx.Bootstrap.define(b,{statics:{define:function(name,u){if(!u){var u={};
}if(u.include&&!(u.include instanceof Array)){u.include=[u.include];
}if(u.implement&&!(u.implement instanceof Array)){u.implement=[u.implement];
}var v=false;

if(!u.hasOwnProperty(h)&&!u.type){u.type=r;
v=true;
}var w=this.__bg(name,u.type,u.extend,u.statics,u.construct,u.destruct,u.include);
if(u.extend){if(u.properties){this.__bi(w,u.properties,true);
}if(u.members){this.__bk(w,u.members,true,true,false);
}if(u.events){this.__bh(w,u.events,true);
}if(u.include){for(var i=0,l=u.include.length;i<l;i++){this.__bo(w,u.include[i],false);
}}}if(u.environment){for(var x in u.environment){qx.core.Environment.add(x,u.environment[x]);
}for(var x in u.environment){qx.core.Setting.defineDeprecated(x,u.environment[x]);
}}if(u.settings){for(var x in u.settings){qx.core.Setting.define(x,u.settings[x]);
}}if(u.variants){for(var x in u.variants){qx.core.Variant.define(x,u.variants[x].allowedValues,u.variants[x].defaultValue);
}}if(u.implement){for(var i=0,l=u.implement.length;i<l;i++){this.__bm(w,u.implement[i]);
}}if(u.defer){u.defer.self=w;
u.defer(w,w.prototype,{add:function(name,y){var z={};
z[name]=y;
qx.Class.__bi(w,z,true);
}});
}return w;
},undefine:function(name){delete this.$$registry[name];
var A=name.split(s);
var C=[window];

for(var i=0;i<A.length;i++){C.push(C[i][A[i]]);
}for(var i=C.length-1;i>=1;i--){var B=C[i];
var parent=C[i-1];

if(qx.Bootstrap.isFunction(B)||qx.Bootstrap.objectGetLength(B)===0){delete parent[A[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(D,E){qx.Class.__bo(D,E,false);
},patch:function(F,G){qx.Class.__bo(F,G,true);
},isSubClassOf:function(H,I){if(!H){return false;
}
if(H==I){return true;
}
if(H.prototype instanceof I){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(J){var K=[];

while(J){if(J.$$properties){K.push.apply(K,qx.Bootstrap.getKeys(J.$$properties));
}J=J.superclass;
}return K;
},getByProperty:function(L,name){while(L){if(L.$$properties&&L.$$properties[name]){return L;
}L=L.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(M,N){return M.$$includes&&M.$$includes.indexOf(N)!==-1;
},getByMixin:function(O,P){var Q,i,l;

while(O){if(O.$$includes){Q=O.$$flatIncludes;

for(i=0,l=Q.length;i<l;i++){if(Q[i]===P){return O;
}}}O=O.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(R,S){return !!this.getByMixin(R,S);
},hasOwnInterface:function(T,U){return T.$$implements&&T.$$implements.indexOf(U)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(V){var W=[];

while(V){if(V.$$implements){W.push.apply(W,V.$$flatImplements);
}V=V.superclass;
}return W;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(X,Y){var ba=X.constructor;

if(this.hasInterface(ba,Y)){return true;
}
try{qx.Interface.assertObject(X,Y);
return true;
}catch(bb){}
try{qx.Interface.assert(ba,Y,false);
return true;
}catch(bc){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return p+this.classname+o;
},$$registry:qx.Bootstrap.$$registry,__bc:null,__bd:null,__be:function(){},__bf:function(){},__bg:function(name,bd,be,bf,bg,bh,bi){var bl;

if(!be&&qx.core.Environment.get(t)==false){bl=bf||{};
qx.Bootstrap.setDisplayNames(bl,name);
}else{var bl={};

if(be){if(!bg){bg=this.__bp();
}
if(this.__br(be,bi)){bl=this.__bs(bg,name,bd);
}else{bl=bg;
}if(bd===m){bl.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bg,name,q);
}if(bf){qx.Bootstrap.setDisplayNames(bf,name);
var bm;

for(var i=0,a=qx.Bootstrap.getKeys(bf),l=a.length;i<l;i++){bm=a[i];
var bj=bf[bm];

if(qx.core.Environment.get(t)){if(bj instanceof Function){bj=qx.core.Aspect.wrap(name+s+bm,bj,r);
}bl[bm]=bj;
}else{bl[bm]=bj;
}}}}var bk=qx.Bootstrap.createNamespace(name,bl);
bl.name=bl.classname=name;
bl.basename=bk;
bl.$$type=g;

if(bd){bl.$$classtype=bd;
}if(!bl.hasOwnProperty(n)){bl.toString=this.genericToString;
}
if(be){qx.Bootstrap.extendClass(bl,bg,be,name,bk);
if(bh){if(qx.core.Environment.get(t)){bh=qx.core.Aspect.wrap(name,bh,d);
}bl.$$destructor=bh;
qx.Bootstrap.setDisplayName(bh,name,c);
}}this.$$registry[name]=bl;
return bl;
},__bh:function(bn,bo,bp){var bq,bq;

if(bn.$$events){for(var bq in bo){bn.$$events[bq]=bo[bq];
}}else{bn.$$events=bo;
}},__bi:function(br,bs,bt){var bu;

if(bt===undefined){bt=false;
}var bv=br.prototype;

for(var name in bs){bu=bs[name];
bu.name=name;
if(!bu.refine){if(br.$$properties===undefined){br.$$properties={};
}br.$$properties[name]=bu;
}if(bu.init!==undefined){br.prototype[k+name]=bu.init;
}if(bu.event!==undefined){var event={};
event[bu.event]=e;
this.__bh(br,event,bt);
}if(bu.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bv.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(br);
}}
if(!bu.refine){qx.core.Property.attachMethods(br,name,bu);
}}},__bj:null,__bk:function(bw,bx,by,bz,bA){var bB=bw.prototype;
var bD,bC;
qx.Bootstrap.setDisplayNames(bx,bw.classname+j);

for(var i=0,a=qx.Bootstrap.getKeys(bx),l=a.length;i<l;i++){bD=a[i];
bC=bx[bD];
if(bz!==false&&bC instanceof Function&&bC.$$type==null){if(bA==true){bC=this.__bl(bC,bB[bD]);
}else{if(bB[bD]){bC.base=bB[bD];
}bC.self=bw;
}
if(qx.core.Environment.get(t)){bC=qx.core.Aspect.wrap(bw.classname+s+bD,bC,f);
}}bB[bD]=bC;
}},__bl:function(bE,bF){if(bF){return function(){var bH=bE.base;
bE.base=bF;
var bG=bE.apply(this,arguments);
bE.base=bH;
return bG;
};
}else{return bE;
}},__bm:function(bI,bJ){var bK=qx.Interface.flatten([bJ]);

if(bI.$$implements){bI.$$implements.push(bJ);
bI.$$flatImplements.push.apply(bI.$$flatImplements,bK);
}else{bI.$$implements=[bJ];
bI.$$flatImplements=bK;
}},__bn:function(bL){var name=bL.classname;
var bM=this.__bs(bL,name,bL.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bL),l=a.length;i<l;i++){bN=a[i];
bM[bN]=bL[bN];
}bM.prototype=bL.prototype;
var bP=bL.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bP),l=a.length;i<l;i++){bN=a[i];
var bQ=bP[bN];
if(bQ&&bQ.self==bL){bQ.self=bM;
}}for(var bN in this.$$registry){var bO=this.$$registry[bN];

if(!bO){continue;
}
if(bO.base==bL){bO.base=bM;
}
if(bO.superclass==bL){bO.superclass=bM;
}
if(bO.$$original){if(bO.$$original.base==bL){bO.$$original.base=bM;
}
if(bO.$$original.superclass==bL){bO.$$original.superclass=bM;
}}}qx.Bootstrap.createNamespace(name,bM);
this.$$registry[name]=bM;
return bM;
},__bo:function(bR,bS,bT){if(this.hasMixin(bR,bS)){return;
}var bW=bR.$$original;

if(bS.$$constructor&&!bW){bR=this.__bn(bR);
}var bV=qx.Mixin.flatten([bS]);
var bU;

for(var i=0,l=bV.length;i<l;i++){bU=bV[i];
if(bU.$$events){this.__bh(bR,bU.$$events,bT);
}if(bU.$$properties){this.__bi(bR,bU.$$properties,bT);
}if(bU.$$members){this.__bk(bR,bU.$$members,bT,bT,bT);
}}if(bR.$$includes){bR.$$includes.push(bS);
bR.$$flatIncludes.push.apply(bR.$$flatIncludes,bV);
}else{bR.$$includes=[bS];
bR.$$flatIncludes=bV;
}},__bp:function(){function bX(){bX.base.apply(this,arguments);
}return bX;
},__bq:function(){return function(){};
},__br:function(bY,ca){if(bY&&bY.$$includes){var cb=bY.$$flatIncludes;

for(var i=0,l=cb.length;i<l;i++){if(cb[i].$$constructor){return true;
}}}if(ca){var cc=qx.Mixin.flatten(ca);

for(var i=0,l=cc.length;i<l;i++){if(cc[i].$$constructor){return true;
}}}return false;
},__bs:function(cd,name,ce){var cg=function(){var cj=cg;
var ci=cj.$$original.apply(this,arguments);
if(cj.$$includes){var ch=cj.$$flatIncludes;

for(var i=0,l=ch.length;i<l;i++){if(ch[i].$$constructor){ch[i].$$constructor.apply(this,arguments);
}}}return ci;
};

if(qx.core.Environment.get(t)){var cf=qx.core.Aspect.wrap(name,cg,q);
cg.$$original=cd;
cg.constructor=cf;
cg=cf;
}cg.$$original=cd;
cd.wrapper=cg;
return cg;
}},defer:function(){if(qx.core.Environment.get(t)){for(var ck in qx.Bootstrap.$$registry){var cl=qx.Bootstrap.$$registry[ck];

for(var cm in cl){if(cl[cm] instanceof Function){cl[cm]=qx.core.Aspect.wrap(ck+s+cm,cl[cm],r);
}}}}}});
})();
(function(){var x="off",w="on",u="|",t="default",s="object",r="&",q="qx.aspects",p="qx.mobile.nativescroll",o="qx.mobile.emulatetouch",n="$",e="qx.allowUrlVariants",m="qx.debug",h="qx.client",c="qx.dynlocale",b="webkit",g="qxvariant",f="opera",j=":",a="qx.core.Variant",k="mshtml",d="gecko";
qx.Bootstrap.define(a,{statics:{__bt:{},__bu:{},compilerIsSet:function(){return true;
},define:function(y,z,A){this.defineDeprecated(y,z,A);
},defineDeprecated:function(B,C,D){if(!this.__bt[B]){this.__bt[B]={};
}else{}this.__bt[B].allowedValues=C;
this.__bt[B].defaultValue=D;
},get:function(E){var F=this.__bt[E];

if(F.value!==undefined){return F.value;
}return F.defaultValue;
},__bv:function(){if(window.qxvariants){for(var G in qxvariants){if(!this.__bt[G]){this.__bt[G]={};
}this.__bt[G].value=qxvariants[G];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(H){}this.__bw(this.__bt);
}},__bw:function(){if(qx.core.Environment.get(e)!=true){return;
}var I=document.location.search.slice(1).split(r);

for(var i=0;i<I.length;i++){var J=I[i].split(j);

if(J.length!=3||J[0]!=g){continue;
}var K=J[1];

if(!this.__bt[K]){this.__bt[K]={};
}this.__bt[K].value=decodeURIComponent(J[2]);
}},select:function(L,M){for(var N in M){if(this.isSet(L,N)){return M[N];
}}
if(M[t]!==undefined){return M[t];
}},isSet:function(O,P){var Q=O+n+P;

if(this.__bu[Q]!==undefined){return this.__bu[Q];
}var S=false;
if(P.indexOf(u)<0){S=this.get(O)===P;
}else{var R=P.split(u);

for(var i=0,l=R.length;i<l;i++){if(this.get(O)===R[i]){S=true;
break;
}}}this.__bu[Q]=S;
return S;
},__bx:function(v){return typeof v===s&&v!==null&&v instanceof Array;
},__by:function(v){return typeof v===s&&v!==null&&!(v instanceof Array);
},__bz:function(T,U){for(var i=0,l=T.length;i<l;i++){if(T[i]==U){return true;
}}return false;
}},defer:function(V){V.defineDeprecated(h,[d,k,f,b],qx.bom.client.Engine.getName());
V.defineDeprecated(m,[w,x],w);
V.defineDeprecated(q,[w,x],x);
V.defineDeprecated(c,[w,x],w);
V.defineDeprecated(o,[w,x],x);
V.defineDeprecated(p,[w,x],x);
V.__bv();
}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__ch:{},__ci:0,__cj:[],register:function(f){var j=this.__ch;

if(!j){return;
}var h=f.$$hash;

if(h==null){var g=this.__cj;

if(g.length>0){h=g.pop();
}else{h=(this.__ci++)+d;
}f.$$hash=h;
}j[h]=f;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__ch;

if(n&&n[m]){delete n[m];
this.__cj.push(m);
}try{delete k.$$hash;
}catch(o){if(k.removeAttribute){k.removeAttribute(e);
}}},toHashCode:function(p){var r=p.$$hash;

if(r!=null){return r;
}var q=this.__cj;

if(q.length>0){r=q.pop();
}else{r=(this.__ci++)+d;
}return p.$$hash=r;
},clearHashCode:function(s){var t=s.$$hash;

if(t!=null){this.__cj.push(t);
try{delete s.$$hash;
}catch(u){if(s.removeAttribute){s.removeAttribute(e);
}}}},fromHashCode:function(v){return this.__ch[v]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__ch;
var z=[];

for(var y in x){z.push(y);
}z.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var w,i=0,l=z.length;

while(true){try{for(;i<l;i++){y=z[i];
w=x[y];

if(w&&w.dispose){w.dispose();
}}}catch(A){qx.Bootstrap.error(this,"Could not dispose object "+w.toString()+": "+A);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__ch;
},getRegistry:function(){return this.__ch;
}}});
})();
(function(){var d="qx.dom.Node",c="engine.name",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===
this.DOCUMENT?e:
e.ownerDocument||e.document;
},getWindow:qx.core.Environment.select(c,{"mshtml":function(f){if(f.nodeType==null){return f;
}if(f.nodeType!==this.DOCUMENT){f=f.ownerDocument;
}return f.parentWindow;
},"default":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.defaultView;
}}),getDocumentElement:function(h){return this.getDocument(h).documentElement;
},getBodyElement:function(j){return this.getDocument(j).body;
},isNode:function(k){return !!(k&&k.nodeType!=null);
},isElement:function(l){return !!(l&&l.nodeType===this.ELEMENT);
},isDocument:function(m){return !!(m&&m.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(o){return !!(o&&o.history&&o.location&&o.document);
},isNodeName:function(p,q){if(!q||!p||!p.nodeName){return false;
}return q.toLowerCase()==qx.dom.Node.getName(p);
},getName:function(r){if(!r||!r.nodeName){return null;
}return r.nodeName.toLowerCase();
},getText:function(s){if(!s||!s.nodeType){return null;
}
switch(s.nodeType){case 1:var i,a=[],t=s.childNodes,length=t.length;

for(i=0;i<length;i++){a[i]=this.getText(t[i]);
}return a.join(b);
case 2:case 3:case 4:return s.nodeValue;
}return null;
},isBlockNode:function(u){if(!qx.dom.Node.isElement(u)){return false;
}u=qx.dom.Node.getName(u);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(u);
}}});
})();
(function(){var g="mshtml",f="engine.name",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Class.define(d,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(k,m,n){if(k.constructor===m){return k;
}
if(qx.Class.hasInterface(k,qx.data.IListData)){var k=k.toArray();
}var o=new m;
if((qx.core.Environment.get(f)==g)){if(k.item){for(var i=n||0,l=k.length;i<l;i++){o.push(k[i]);
}return o;
}}if(Object.prototype.toString.call(k)===e&&n==null){o.push.apply(o,k);
}else{o.push.apply(o,Array.prototype.slice.call(k,n||0));
}return o;
},fromArguments:function(p,q){return Array.prototype.slice.call(p,q||0);
},fromCollection:function(r){if((qx.core.Environment.get(f)==g)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(t){var v=t.length;
var u=qx.lang.Array.clone(t);
switch(v){case 1:u[1]=u[2]=u[3]=u[0];
break;
case 2:u[2]=u[0];
case 3:u[3]=u[1];
}return u;
},clone:function(w){return w.concat();
},insertAt:function(x,y,i){x.splice(i,0,y);
return x;
},insertBefore:function(z,A,B){var i=z.indexOf(B);

if(i==-1){z.push(A);
}else{z.splice(i,0,A);
}return z;
},insertAfter:function(C,D,E){var i=C.indexOf(E);

if(i==-1||i==(C.length-1)){C.push(D);
}else{C.splice(i+1,0,D);
}return C;
},removeAt:function(F,i){return F.splice(i,1)[0];
},removeAll:function(G){G.length=0;
return this;
},append:function(H,I){Array.prototype.push.apply(H,I);
return H;
},exclude:function(J,K){for(var i=0,M=K.length,L;i<M;i++){L=J.indexOf(K[i]);

if(L!=-1){J.splice(L,1);
}}return J;
},remove:function(N,O){var i=N.indexOf(O);

if(i!=-1){N.splice(i,1);
return O;
}},contains:function(P,Q){return P.indexOf(Q)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(T){var U=0;

for(var i=0,l=T.length;i<l;i++){U+=T[i];
}return U;
},max:function(V){var i,X=V.length,W=V[0];

for(i=1;i<X;i++){if(V[i]>W){W=V[i];
}}return W===undefined?null:W;
},min:function(Y){var i,bb=Y.length,ba=Y[0];

for(i=1;i<bb;i++){if(Y[i]<ba){ba=Y[i];
}}return ba===undefined?null:ba;
},unique:function(bc){var bm=[],be={},bh={},bj={};
var bi,bd=0;
var bn=c+qx.lang.Date.now();
var bf=false,bl=false,bo=false;
for(var i=0,bk=bc.length;i<bk;i++){bi=bc[i];
if(bi===null){if(!bf){bf=true;
bm.push(bi);
}}else if(bi===undefined){}else if(bi===false){if(!bl){bl=true;
bm.push(bi);
}}else if(bi===true){if(!bo){bo=true;
bm.push(bi);
}}else if(typeof bi===a){if(!be[bi]){be[bi]=1;
bm.push(bi);
}}else if(typeof bi===b){if(!bh[bi]){bh[bi]=1;
bm.push(bi);
}}else{bg=bi[bn];

if(bg==null){bg=bi[bn]=bd++;
}
if(!bj[bg]){bj[bg]=bi;
bm.push(bi);
}}}for(var bg in bj){try{delete bj[bg][bn];
}catch(bp){try{bj[bg][bn]=null;
}catch(bq){throw new Error("Cannot clean-up map entry doneObjects["+bg+"]["+bn+"]");
}}}return bm;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},getName:function(h){if(h.displayName){return h.displayName;
}
if(h.$$original||h.wrapper||h.classname){return h.classname+a;
}
if(h.$$mixin){for(var j in h.$$mixin.$$members){if(h.$$mixin.$$members[j]==h){return h.$$mixin.name+d+j+f;
}}for(var j in h.$$mixin){if(h.$$mixin[j]==h){return h.$$mixin.name+e+j+f;
}}}
if(h.self){var k=h.self.constructor;

if(k){for(var j in k.prototype){if(k.prototype[j]==h){return k.classname+d+j+f;
}}for(var j in k){if(k[j]==h){return k.classname+e+j+f;
}}}}var i=h.toString().match(/function\s*(\w*)\s*\(.*/);

if(i&&i.length>=1&&i[1]){return i[1]+f;
}return c;
},globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,l);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(m,n){if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(event){var p=qx.lang.Array.fromArguments(arguments);
if(n.args){p=n.args.concat(p);
}
if(n.delay||n.periodical){var o=qx.event.GlobalError.observeMethod(function(){return m.apply(n.self||this,p);
});

if(n.delay){return window.setTimeout(o,n.delay);
}
if(n.periodical){return window.setInterval(o,n.periodical);
}}else if(n.attempt){var q=false;

try{q=m.apply(n.self||this,p);
}catch(r){}return q;
}else{return m.apply(n.self||this,p);
}};
},bind:function(s,self,t){return this.create(s,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(u,v){return this.create(u,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(w,self,x){if(arguments.length<3){return function(event){return w.call(self||this,event||window.event);
};
}else{var y=qx.lang.Array.fromArguments(arguments,2);
return function(event){var z=[event||window.event];
z.push.apply(z,y);
w.apply(self||this,z);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(F,G,self,H){return this.create(F,{periodical:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var l="on",k="engine.name",j="gecko",i="engine.version",h="function",g="undefined",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:function(m,n,o,p){if(m.addEventListener){m.addEventListener(n,o,!!p);
}else if(m.attachEvent){m.attachEvent(l+n,o);
}else if(typeof m[l+n]!=g){m[l+n]=o;
}else{}},removeNativeListener:function(q,r,s,t){if(q.removeEventListener){q.removeEventListener(r,s,!!t);
}else if(q.detachEvent){try{q.detachEvent(l+r,s);
}catch(e){if(e.number!==-2146828218){throw e;
}}}else if(typeof q[l+r]!=g){q[l+r]=null;
}else{}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(k)==j)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===b){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(k)==j)&&parseFloat(qx.core.Environment.get(i))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(k)==j)&&parseFloat(qx.core.Environment.get(i))<1.9){try{e.keyCode=0;
}catch(u){}}}else{try{e.keyCode=0;
}catch(v){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(w,x){if(document.createEvent){var y=document.createEvent(a);
y.initEvent(x,true,true);
return !w.dispatchEvent(y);
}else{var y=document.createEventObject();
return w.fireEvent(l+x,y);
}},supportsEvent:qx.core.Environment.select(k,{"webkit":function(z,A){return z.hasOwnProperty(l+A);
},"default":function(B,C){var D=l+C;
var E=(D in B);

if(!E){E=typeof B[D]==h;

if(!E&&B.setAttribute){B.setAttribute(D,c);
E=typeof B[D]==h;
B.removeAttribute(D);
}}return E;
}})}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="UNKNOWN_",j="c",h="__bF",g="DOM_",c="__bE",f="WIN_",e="QX_",b="qx.event.Manager",a="capture",d="DOCUMENT_";
qx.Class.define(b,{extend:Object,construct:function(s,t){this.__bA=s;
this.__bB=qx.core.ObjectRegistry.toHashCode(s);
this.__bC=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__bD={};
this.__bE={};
this.__bF={};
this.__bG={};
},statics:{__bH:0,getNextUniqueId:function(){return (this.__bH++)+o;
}},members:{__bC:null,__bD:null,__bF:null,__bI:null,__bE:null,__bG:null,__bA:null,__bB:null,getWindow:function(){return this.__bA;
},getWindowId:function(){return this.__bB;
},getHandler:function(u){var v=this.__bE[u.classname];

if(v){return v;
}return this.__bE[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__bF[w.classname];

if(x){return x;
}return this.__bF[w.classname]=new w(this,this.__bC);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__bD[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__bD[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==j;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__bD[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__bJ(P,W,R);
}else{this.__bK(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__bD[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__bD[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__bJ(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__bH++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__bD[bx];

if(!bz){bz=this.__bD[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__bJ(bp,bq,bs);
}var by=(qx.event.Manager.__bH++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__bA){bF=true;
bL=f+bB;
}else if(bA.classname){bO=true;
bL=e+bA.classname+n+bB;
}else{bL=k+bA+n+bB;
}var bH=this.__bG;

if(bH[bL]){return bH[bL];
}var bK=this.__bC.getHandlers();
var bG=qx.event.IEventHandler;
var bI,bJ,bE,bD;

for(var i=0,l=bK.length;i<l;i++){bI=bK[i];
bE=bI.SUPPORTED_TYPES;

if(bE&&!bE[bB]){continue;
}bD=bI.TARGET_CHECK;

if(bD){var bM=false;

if(bN&&((bD&bG.TARGET_DOMNODE)!=0)){bM=true;
}else if(bF&&((bD&bG.TARGET_WINDOW)!=0)){bM=true;
}else if(bO&&((bD&bG.TARGET_OBJECT)!=0)){bM=true;
}else if(bC&&((bD&bG.TARGET_DOCUMENT)!=0)){bM=true;
}
if(!bM){continue;
}}bJ=this.getHandler(bK[i]);

if(bI.IGNORE_CAN_HANDLE||bJ.canHandleEvent(bA,bB)){bH[bL]=bJ;
return bJ;
}}return null;
},__bJ:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__bD[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__bK(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__bD[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__bK(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__bD[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===a;
this.__bK(cq,cv,cr);
}}delete this.__bD[cu];
return true;
},deleteAllListeners:function(cx){delete this.__bD[cx];
},__bK:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__bC.getDispatchers();
var cF;
var cE=false;

for(var i=0,l=cG.length;i<l;i++){cF=this.getDispatcher(cG[i]);
if(cF.canDispatchEvent(cC,event,cI)){cF.dispatchEvent(cC,event,cI);
cE=true;
break;
}}
if(!cE){return true;
}var cD=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cD;
},dispose:function(){this.__bC.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,c);
qx.util.DisposeUtil.disposeMap(this,h);
this.__bD=this.__bA=this.__bI=null;
this.__bC=this.__bG=null;
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__bL:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__bL[f];

if(!e){e=new qx.event.Manager(d,this);
this.__bL[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__bL[h];
},addListener:function(i,j,k,self,l){return this.getManager(i).addListener(i,j,k,self,l);
},removeListener:function(m,n,o,self,p){return this.getManager(m).removeListener(m,n,o,self,p);
},removeListenerById:function(q,r){return this.getManager(q).removeListenerById(q,r);
},removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(v,w,x){return this.getManager(v).hasListener(v,w,x);
},serializeListeners:function(y){return this.getManager(y).serializeListeners(y);
},createEvent:function(z,A,B){if(A==null){A=qx.event.type.Event;
}var C=qx.event.Pool.getInstance().getObject(A);
B?C.init.apply(C,B):C.init();
if(z){C.setType(z);
}return C;
},dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);
},fireEvent:function(E,F,G,H){var I;
var J=this.createEvent(F,G||null,H);
return this.getManager(E).dispatchEvent(E,J);
},fireNonBubblingEvent:function(K,L,M,N){var O=this.getManager(K);

if(!O.hasListener(K,L,false)){return true;
}var P=this.createEvent(L,M||null,N);
return O.dispatchEvent(K,P);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bM:[],addHandler:function(Q){this.__bM.push(Q);
this.__bM.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bM;
},__bN:[],addDispatcher:function(R,S){this.__bN.push(R);
this.__bN.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bN;
}}});
})();
(function(){var m=":",l="engine.name",k="Error created at",j="...",h="qx.dev.StackTrace",g="",f="\n",e="?",d="/source/class/",c="anonymous",a="of linked script",b=".";
qx.Bootstrap.define(h,{statics:{getStackTrace:qx.core.Environment.select(l,{"gecko":function(){try{throw new Error();
}catch(A){var u=this.getStackTraceFromError(A);
qx.lang.Array.removeAt(u,0);
var s=this.getStackTraceFromCaller(arguments);
var q=s.length>u.length?s:u;

for(var i=0;i<Math.min(s.length,u.length);i++){var r=s[i];

if(r.indexOf(c)>=0){continue;
}var y=r.split(m);

if(y.length!=2){continue;
}var w=y[0];
var p=y[1];
var o=u[i];
var z=o.split(m);
var v=z[0];
var n=z[1];

if(qx.Class.getByName(v)){var t=v;
}else{t=w;
}var x=t+m;

if(p){x+=p+m;
}x+=n;
q[i]=x;
}return q;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var B;

try{B.bar();
}catch(D){var C=this.getStackTraceFromError(D);
qx.lang.Array.removeAt(C,0);
return C;
}return [];
}}),getStackTraceFromCaller:qx.core.Environment.select(l,{"opera":function(E){return [];
},"default":function(F){var K=[];
var J=qx.lang.Function.getCaller(F);
var G={};

while(J){var H=qx.lang.Function.getName(J);
K.push(H);

try{J=J.caller;
}catch(L){break;
}
if(!J){break;
}var I=qx.core.ObjectRegistry.toHashCode(J);

if(G[I]){K.push(j);
break;
}G[I]=J;
}return K;
}}),getStackTraceFromError:qx.core.Environment.select(l,{"gecko":function(M){if(!M.stack){return [];
}var S=/@(.+):(\d+)$/gm;
var N;
var O=[];

while((N=S.exec(M.stack))!=null){var P=N[1];
var R=N[2];
var Q=this.__bO(P);
O.push(Q+m+R);
}return O;
},"webkit":function(T){if(T.stack){var bb=/at (.*)/gm;
var ba=/\((.*?)(:[^\/].*)\)/;
var X=/(.*?)(:[^\/].*)/;
var U;
var V=[];

while((U=bb.exec(T.stack))!=null){var W=ba.exec(U[1]);

if(!W){W=X.exec(U[1]);
}
if(W){var Y=this.__bO(W[1]);
V.push(Y+W[2]);
}else{V.push(U[1]);
}}return V;
}else if(T.sourceURL&&T.line){return [this.__bO(T.sourceURL)+m+T.line];
}else{return [];
}},"opera":function(bc){if(bc.stacktrace){var be=bc.stacktrace;

if(be.indexOf(k)>=0){be=be.split(k)[0];
}if(be.indexOf(a)>=0){var bo=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bi=bf[2];
var bm=this.__bO(bi);
bg.push(bm+m+bn);
}}else{var bo=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bh=bf[2];
var bi=bf[3];
var bm=this.__bO(bi);
bg.push(bm+m+bn+m+bh);
}}return bg;
}else if(bc.message&&bc.message.indexOf("Backtrace:")>=0){var bg=[];
var bj=qx.lang.String.trim(bc.message.split("Backtrace:")[1]);
var bk=bj.split(f);

for(var i=0;i<bk.length;i++){var bd=bk[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(bd&&bd.length>=2){var bn=bd[1];
var bl=this.__bO(bd[2]);
bg.push(bl+m+bn);
}}return bg;
}else{return [];
}},"default":function(){return [];
}}),__bO:function(bp){var bt=d;
var bq=bp.indexOf(bt);
var bs=bp.indexOf(e);

if(bs>=0){bp=bp.substring(0,bs);
}var br=(bq==-1)?bp:bp.substring(bq+bt.length).replace(/\//g,b).replace(/\.js$/,g);
return br;
}}});
})();
(function(){var p="",o='\\u',n="g",m="]",l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Class.define(g,{statics:{__bP:j,__bQ:null,camelCase:function(q){return q.replace(/\-([a-z])/g,function(r,s){return s.toUpperCase();
});
},hyphenate:function(t){return t.replace(/[A-Z]/g,function(u){return (h+u.charAt(0).toLowerCase());
});
},capitalize:function(v){if(this.__bQ===null){this.__bQ=new RegExp(f+
this.__bP.replace(/[0-9A-F]{4}/g,function(w){return o+w;
})+
a+
this.__bP.replace(/[0-9A-F]{4}/g,function(x){return o+x;
})+m,n);
}return v.replace(this.__bQ,function(y){return y.toUpperCase();
});
},clean:function(z){return this.trim(z.replace(/\s+/g,d));
},trimLeft:function(A){return A.replace(/^\s+/,p);
},trimRight:function(B){return B.replace(/\s+$/,p);
},trim:function(C){return C.replace(/^\s+|\s+$/g,p);
},startsWith:function(D,E){return D.indexOf(E)===0;
},endsWith:function(F,G){return F.substring(F.length-G.length,F.length)===G;
},repeat:function(H,I){return H.length>0?new Array(I+1).join(H):p;
},pad:function(J,length,K){var L=length-J.length;

if(L>0){if(typeof K===l){K=c;
}return this.repeat(K,L)+J;
}else{return J;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(M,N){return M.indexOf(N)!=-1;
},format:function(O,P){var Q=O;
var i=P.length;

while(i--){Q=Q.replace(new RegExp(e+(i+1),n),P[i]+p);
}return Q;
},escapeRegexpChars:function(R){return R.replace(/([.*+?^${}()|[\]\/\\])/g,k);
},toArray:function(S){return S.split(/\B|\b/g);
},stripTags:function(T){return T.replace(/<\/?[^>]+>/gi,p);
},stripScripts:function(U,V){var X=p;
var W=U.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){X+=arguments[1]+b;
return p;
});

if(V===true){qx.lang.Function.globalEval(X);
}return W;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__bR:0,__bS:0,__bT:false,__bU:0,__bV:null,__bW:null,setMaxEntries:function(c){this.__bW=c;
this.clear();
},getMaxEntries:function(){return this.__bW;
},addEntry:function(d){this.__bV[this.__bR]=d;
this.__bR=this.__bX(this.__bR,1);
var e=this.getMaxEntries();

if(this.__bS<e){this.__bS++;
}if(this.__bT&&(this.__bU<e)){this.__bU++;
}},mark:function(){this.__bT=true;
this.__bU=0;
},clearMark:function(){this.__bT=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__bS){f=this.__bS;
}if(g&&this.__bT&&(f>this.__bU)){f=this.__bU;
}
if(f>0){var i=this.__bX(this.__bR,-1);
var h=this.__bX(i,-f+1);
var j;

if(h<=i){j=this.__bV.slice(h,i+1);
}else{j=this.__bV.slice(h,this.__bS).concat(this.__bV.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__bV=new Array(this.getMaxEntries());
this.__bS=0;
this.__bU=0;
this.__bR=0;
},__bX:function(k,l){var m=this.getMaxEntries();
var n=(k+l)%m;
if(n<0){n+=m;
}return n;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(b){this.setMaxMessages(b||50);
},members:{setMaxMessages:function(c){this.setMaxEntries(c);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__bY:A,setLevel:function(I){this.__bY=I;
},getLevel:function(){return this.__bY;
},setTreshold:function(J){this.__cc.setMaxMessages(J);
},getTreshold:function(){return this.__cc.getMaxMessages();
},__ca:{},__cb:0,register:function(K){if(K.$$id){return;
}var M=this.__cb++;
this.__ca[M]=K;
K.$$id=M;
var L=this.__cd;
var N=this.__cc.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__bY]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__ca[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__ce(A,arguments);
},info:function(S,T){qx.log.Logger.__ce(e,arguments);
},warn:function(U,V){qx.log.Logger.__ce(r,arguments);
},error:function(W,X){qx.log.Logger.__ce(j,arguments);
},trace:function(Y){qx.log.Logger.__ce(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__cc.clearHistory();
},__cc:new qx.log.appender.RingBuffer(50),__cd:{debug:0,info:1,warn:2,error:3},__ce:function(bv,bw){var bB=this.__cd;

if(bB[bv]<bB[this.__bY]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__cg(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__cc.process(bD);
var bE=this.__ca;

for(var bz in bE){bE[bz].process(bD);
}},__cf:function(bF){if(bF===undefined){return y;
}else if(bF===null){return b;
}
if(bF.$$type){return a;
}var bG=typeof bF;

if(bG===C||bG==c||bG===H||bG===B){return bG;
}else if(bG===w){if(bF.nodeType){return k;
}else if(bF.classname){return d;
}else if(bF instanceof Array){return g;
}else if(bF instanceof Error){return j;
}else if(bF instanceof Date){return E;
}else{return z;
}}
if(bF.toString){return G;
}return D;
},__cg:function(bH,bI){var bP=this.__cf(bH);
var bL=D;
var bK=[];

switch(bP){case b:case y:bL=bP;
break;
case c:case H:case B:case E:bL=bH;
break;
case k:if(bH.nodeType===9){bL=o;
}else if(bH.nodeType===3){bL=m+bH.nodeValue+F;
}else if(bH.nodeType===1){bL=bH.nodeName.toLowerCase();

if(bH.id){bL+=q+bH.id;
}}else{bL=k;
}break;
case C:bL=qx.lang.Function.getName(bH)||bP;
break;
case d:bL=bH.basename+t+bH.$$hash+F;
break;
case a:case G:bL=bH.toString();
break;
case j:bK=qx.dev.StackTrace.getStackTraceFromError(bH);
bL=bH.toString();
break;
case g:if(bI){bL=[];

for(var i=0,l=bH.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bL.push(this.__cg(bH[i],false));
}}else{bL=n+bH.length+x;
}break;
case z:if(bI){var bJ;
var bO=[];

for(var bN in bH){bO.push(bN);
}bO.sort();
bL=[];

for(var i=0,l=bO.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bN=bO[i];
bJ=this.__cg(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__ce(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var q="set",p="get",o="reset",n="MSIE 6.0",m="info",k="qx.core.Object",j="error",h="warn",g="]",f="debug",b="[",d="$$user_",c="rv:1.8.1",a="Object";
qx.Class.define(k,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:a},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+b+this.$$hash+g;
},base:function(r,s){if(arguments.length===1){return r.callee.base.call(this);
}else{return r.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(t){return t.callee.self;
},clone:function(){var v=this.constructor;
var u=new v;
var x=qx.Class.getProperties(v);
var w=qx.core.Property.$$store.user;
var y=qx.core.Property.$$method.set;
var name;
for(var i=0,l=x.length;i<l;i++){name=x[i];

if(this.hasOwnProperty(w[name])){u[y[name]](this[w[name]]);
}}return u;
},set:function(z,A){var C=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(z)){if(!this[C[z]]){if(this[q+qx.Bootstrap.firstUp(z)]!=undefined){this[q+qx.Bootstrap.firstUp(z)](A);
return this;
}}return this[C[z]](A);
}else{for(var B in z){if(!this[C[B]]){if(this[q+qx.Bootstrap.firstUp(B)]!=undefined){this[q+qx.Bootstrap.firstUp(B)](z[B]);
continue;
}}this[C[B]](z[B]);
}return this;
}},get:function(D){var E=qx.core.Property.$$method.get;

if(!this[E[D]]){if(this[p+qx.Bootstrap.firstUp(D)]!=undefined){return this[p+qx.Bootstrap.firstUp(D)]();
}}return this[E[D]]();
},reset:function(F){var G=qx.core.Property.$$method.reset;

if(!this[G[F]]){if(this[o+qx.Bootstrap.firstUp(F)]!=undefined){this[o+qx.Bootstrap.firstUp(F)]();
return;
}}this[G[F]]();
},__co:qx.event.Registration,addListener:function(H,I,self,J){if(!this.$$disposed){return this.__co.addListener(this,H,I,self,J);
}return null;
},addListenerOnce:function(K,L,self,M){var N=function(e){this.removeListener(K,N,this,M);
L.call(self||this,e);
};
return this.addListener(K,N,this,M);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__co.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(R){if(!this.$$disposed){return this.__co.removeListenerById(this,R);
}return false;
},hasListener:function(S,T){return this.__co.hasListener(this,S,T);
},dispatchEvent:function(U){if(!this.$$disposed){return this.__co.dispatchEvent(this,U);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__co.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__co.fireNonBubblingEvent(this,Y,ba,bb);
}return true;
},fireDataEvent:function(bc,bd,be,bf){if(!this.$$disposed){if(be===undefined){be=null;
}return this.__co.fireNonBubblingEvent(this,bc,qx.event.type.Data,[bd,be,!!bf]);
}return true;
},__cp:null,setUserData:function(bg,bh){if(!this.__cp){this.__cp={};
}this.__cp[bg]=bh;
},getUserData:function(bi){if(!this.__cp){return null;
}var bj=this.__cp[bi];
return bj===undefined?null:bj;
},__cq:qx.log.Logger,debug:function(bk){this.__cr(f,arguments);
},info:function(bl){this.__cr(m,arguments);
},warn:function(bm){this.__cr(h,arguments);
},error:function(bn){this.__cr(j,arguments);
},trace:function(){this.__cq.trace(this);
},__cr:function(bo,bp){var bq=qx.lang.Array.fromArguments(bp);
bq.unshift(this);
this.__cq[bo].apply(this.__cq,bq);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bv,bt,bs,bw;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
var bu=this.constructor;
var br;

while(bu.superclass){if(bu.$$destructor){bu.$$destructor.call(this);
}if(bu.$$includes){br=bu.$$flatIncludes;

for(var i=0,l=br.length;i<l;i++){if(br[i].$$destructor){br[i].$$destructor.call(this);
}}}bu=bu.superclass;
}if(this.__cs){this.__cs();
}},__cs:null,__ct:function(){var bx=qx.Class.getProperties(this.constructor);

for(var i=0,l=bx.length;i<l;i++){delete this[d+bx[i]];
}},_disposeObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(bB){qx.util.DisposeUtil.disposeMap(this,bB);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bC,bD){var bF=navigator.userAgent.indexOf(n)!=-1;
var bE=navigator.userAgent.indexOf(c)!=-1;
if(bF||bE){bD.__cs=bD.__ct;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__cp=null;
var bI=this.constructor;
var bM;
var bN=qx.core.Property.$$store;
var bK=bN.user;
var bL=bN.theme;
var bG=bN.inherit;
var bJ=bN.useinit;
var bH=bN.init;

while(bI){bM=bI.$$properties;

if(bM){for(var name in bM){if(bM[name].dereference){this[bK[name]]=this[bL[name]]=this[bG[name]]=this[bJ[name]]=this[bH[name]]=undefined;
}}}bI=bI.superclass;
}}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__iq:null,_invalidChildrenCache:null,__ir:null,invalidateLayoutCache:function(){this.__iq=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__iq){return this.__iq;
}return this.__iq=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var f=this.__ir;

if(f instanceof qx.ui.core.LayoutItem){f.clearSeparators();
}},_renderSeparator:function(g,h){this.__ir.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__ir){throw new Error("It is not possible to manually set the connected widget.");
}this.__ir=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__ir;
},_applyLayoutChange:function(){if(this.__ir){this.__ir.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__ir.getLayoutChildren();
}},destruct:function(){this.__ir=this.__iq=null;
}});
})();
(function(){var m="bottom",l="top",k="_applyLayoutChange",j="top-left",h="bottom-left",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",a="Integer",b="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:k},iconPosition:{check:[g,l,f,m,j,h],init:g,apply:k},center:{check:b,init:false,apply:k}},members:{verifyLayoutProperty:null,renderLayout:function(n,o){var x=qx.ui.layout.Util;
var q=this.getIconPosition();
var t=this._getLayoutChildren();
var length=t.length;
var I,top,y,r;
var D,w;
var B=this.getGap();
var G=this.getCenter();
if(q===m||q===f){var z=length-1;
var u=-1;
var s=-1;
}else{var z=0;
var u=length;
var s=1;
}if(q==l||q==m){if(G){var C=0;

for(var i=z;i!=u;i+=s){r=t[i].getSizeHint().height;

if(r>0){C+=r;

if(i!=z){C+=B;
}}}top=Math.round((o-C)/2);
}else{top=0;
}
for(var i=z;i!=u;i+=s){D=t[i];
w=D.getSizeHint();
y=Math.min(w.maxWidth,Math.max(n,w.minWidth));
r=w.height;
I=x.computeHorizontalAlignOffset(d,y,n);
D.renderLayout(I,top,y,r);
if(r>0){top+=r+B;
}}}else{var v=n;
var p=null;
var F=0;

for(var i=z;i!=u;i+=s){D=t[i];
y=D.getSizeHint().width;

if(y>0){if(!p&&D instanceof qx.ui.basic.Label){p=D;
}else{v-=y;
}F++;
}}
if(F>1){var E=(F-1)*B;
v-=E;
}
if(p){var w=p.getSizeHint();
var A=Math.max(w.minWidth,Math.min(v,w.maxWidth));
v-=A;
}
if(G&&v>0){I=Math.round(v/2);
}else{I=0;
}
for(var i=z;i!=u;i+=s){D=t[i];
w=D.getSizeHint();
r=Math.min(w.maxHeight,Math.max(o,w.minHeight));

if(D===p){y=A;
}else{y=w.width;
}var H=e;

if(q==j){H=l;
}else if(q==h){H=m;
}top=x.computeVerticalAlignOffset(H,w.height,o);
D.renderLayout(I,top,y,r);
if(y>0){I+=y+B;
}}}},_computeSizeHint:function(){var T=this._getLayoutChildren();
var length=T.length;
var L,R;
if(length===1){var L=T[0].getSizeHint();
R={width:L.width,height:L.height,minWidth:L.minWidth,minHeight:L.minHeight};
}else{var P=0,Q=0;
var M=0,O=0;
var N=this.getIconPosition();
var S=this.getGap();

if(N===l||N===m){var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
Q=Math.max(Q,L.width);
P=Math.max(P,L.minWidth);
if(L.height>0){O+=L.height;
M+=L.minHeight;
J++;
}}
if(J>1){var K=(J-1)*S;
O+=K;
M+=K;
}}else{var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
O=Math.max(O,L.height);
M=Math.max(M,L.minHeight);
if(L.width>0){Q+=L.width;
P+=L.minWidth;
J++;
}}
if(J>1){var K=(J-1)*S;
Q+=K;
P+=K;
}}R={minWidth:P,width:Q,minHeight:M,height:O};
}return R;
}}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__dA=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__dA:null,message:null,getComment:function(){return this.__dA;
},toString:function(){return this.__dA+(this.message?b+this.message:c);
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
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
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){this.__dJ=b+(c&&c.message?c.message:c);
Error.call(this,this.__dJ);
this.__dK=d;
this.__dL=c;
},members:{__dL:null,__dK:null,__dJ:null,toString:function(){return this.__dJ;
},getArguments:function(){return this.__dK;
},getSourceException:function(){return this.__dL;
}},destruct:function(){this.__dL=null;
this.__dK=null;
this.__dJ=null;
}});
})();
(function(){var c="qx.globalErrorHandling",b="qx.event.GlobalError",a="on";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(d,e){this.__dM=d||null;
this.__dN=e||window;

if(qx.core.Environment.get(c)){if(d&&window.onerror){var f=qx.Bootstrap.bind(this.__dP,this);

if(this.__dO==null){this.__dO=window.onerror;
}var self=this;
window.onerror=function(g,h,i){self.__dO(g,h,i);
f(g,h,i);
};
}
if(d&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__dP,this);
}if(this.__dM==null){if(this.__dO!=null){window.onerror=this.__dO;
this.__dO=null;
}else{window.onerror=null;
}}}},__dP:function(j,k,l){if(this.__dM){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(m){if(qx.core.Environment.get(c)){var self=this;
return function(){if(!self.__dM){return m.apply(this,arguments);
}
try{return m.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return m;
}},handleError:function(o){if(this.__dM){this.__dM.call(this.__dN,o);
}}},defer:function(p){qx.core.Environment.add(c,true);
p.setErrorHandler(null,null);
qx.core.Setting.defineDeprecated(c,a);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__eo={};
this.__ep=qx.lang.Function.bind(this.__et,this);
this.__eq=false;
},members:{__er:null,__es:null,__eo:null,__eq:null,__ep:null,schedule:function(c){if(this.__er==null){this.__er=window.setTimeout(this.__ep,0);
}var d=c.toHashCode();
if(this.__es&&this.__es[d]){return;
}this.__eo[d]=c;
this.__eq=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__es&&this.__es[f]){this.__es[f]=null;
return;
}delete this.__eo[f];
if(qx.lang.Object.isEmpty(this.__eo)&&this.__er!=null){window.clearTimeout(this.__er);
this.__er=null;
}},__et:qx.event.GlobalError.observeMethod(function(){this.__er=null;
while(this.__eq){this.__es=qx.lang.Object.clone(this.__eo);
this.__eo={};
this.__eq=false;

for(var h in this.__es){var g=this.__es[h];

if(g){this.__es[h]=null;
g.call();
}}}this.__es=null;
})},destruct:function(){if(this.__er!=null){window.clearTimeout(this.__er);
}this.__ep=this.__eo=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){qx.core.Object.call(this);
this.__eu=b;
this.__ev=c||null;
this.__ew=qx.util.DeferredCallManager.getInstance();
},members:{__eu:null,__ev:null,__ew:null,cancel:function(){this.__ew.cancel(this);
},schedule:function(){this.__ew.schedule(this);
},call:function(){var d;
this.__ev?this.__eu.apply(this.__ev):this.__eu();
}},destruct:function(){this.cancel();
this.__ev=this.__eu=this.__ew=null;
}});
})();
(function(){var m="element",k="qxSelectable",j="off",h="engine.name",g="on",f="text",d="div",c="",b="mshtml",a="none",F="scroll",E="qx.html.Element",D="|capture|",C="activate",B="blur",A="__eT",z="deactivate",w="capture",v="userSelect",u="-moz-none",s="visible",t="releaseCapture",q="|bubble|",r="tabIndex",o="focus",p="MozUserSelect",n="hidden";
qx.Class.define(E,{extend:qx.core.Object,construct:function(G,H,I){qx.core.Object.call(this);
this.__ex=G||d;
this.__ey=H||null;
this.__ez=I||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__eA:{},_scheduleFlush:function(J){qx.html.Element.__ff.schedule();
},flush:function(){var U;
var M=this.__eB();
var L=M.getFocus();

if(L&&this.__eF(L)){M.blur(L);
}var bc=M.getActive();

if(bc&&this.__eF(bc)){qx.bom.Element.deactivate(bc);
}var P=this.__eD();

if(P&&this.__eF(P)){qx.bom.Element.releaseCapture(P);
}var V=[];
var W=this._modified;

for(var T in W){U=W[T];
if(U.__eX()){if(U.__eG&&qx.dom.Hierarchy.isRendered(U.__eG)){V.push(U);
}else{U.__eW();
}delete W[T];
}}
for(var i=0,l=V.length;i<l;i++){U=V[i];
U.__eW();
}var R=this._visibility;

for(var T in R){U=R[T];
var X=U.__eG;

if(!X){delete R[T];
continue;
}if(!U.$$disposed){X.style.display=U.__eJ?c:a;
if((qx.core.Environment.get(h)==b)){if(!(document.documentMode>=8)){X.style.visibility=U.__eJ?s:n;
}}}delete R[T];
}var scroll=this._scroll;

for(var T in scroll){U=scroll[T];
var bd=U.__eG;

if(bd&&bd.offsetWidth){var O=true;
if(U.__eM!=null){U.__eG.scrollLeft=U.__eM;
delete U.__eM;
}if(U.__eN!=null){U.__eG.scrollTop=U.__eN;
delete U.__eN;
}var Y=U.__eK;

if(Y!=null){var S=Y.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewX(S,bd,Y.align);
delete U.__eK;
}else{O=false;
}}var ba=U.__eL;

if(ba!=null){var S=ba.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewY(S,bd,ba.align);
delete U.__eL;
}else{O=false;
}}if(O){delete scroll[T];
}}}var N={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bb=this._actions[i];
var X=bb.element.__eG;

if(!X||!N[bb.type]&&!bb.element.__eX()){continue;
}var Q=bb.args;
Q.unshift(X);
qx.bom.Element[bb.type].apply(qx.bom.Element,Q);
}this._actions=[];
for(var T in this.__eA){var K=this.__eA[T];
var bd=K.element.__eG;

if(bd){qx.bom.Selection.set(bd,K.start,K.end);
delete this.__eA[T];
}}qx.event.handler.Appear.refresh();
},__eB:function(){if(!this.__eC){var be=qx.event.Registration.getManager(window);
this.__eC=be.getHandler(qx.event.handler.Focus);
}return this.__eC;
},__eD:function(){if(!this.__eE){var bf=qx.event.Registration.getManager(window);
this.__eE=bf.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__eE.getCaptureElement();
},__eF:function(bg){var bh=qx.core.ObjectRegistry.fromHashCode(bg.$$element);
return bh&&!bh.__eX();
}},members:{__ex:null,__eG:null,__eH:false,__eI:true,__eJ:true,__eK:null,__eL:null,__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,__ey:null,__ez:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,_scheduleChildrenUpdate:function(){if(this.__eU){return;
}this.__eU=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__ex);
},__eW:function(){var length;
var bi=this.__eT;

if(bi){length=bi.length;
var bj;

for(var i=0;i<length;i++){bj=bi[i];

if(bj.__eJ&&bj.__eI&&!bj.__eG){bj.__eW();
}}}
if(!this.__eG){this.__eG=this._createDomElement();
this.__eG.$$element=this.$$hash;
this._copyData(false);

if(bi&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__eU){this._syncChildren();
}}delete this.__eU;
},_insertChildren:function(){var bk=this.__eT;
var length=bk.length;
var bm;

if(length>2){var bl=document.createDocumentFragment();

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__eG&&bm.__eI){bl.appendChild(bm.__eG);
}}this.__eG.appendChild(bl);
}else{var bl=this.__eG;

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__eG&&bm.__eI){bl.appendChild(bm.__eG);
}}}},_syncChildren:function(){var br;
var bw=qx.core.ObjectRegistry;
var bn=this.__eT;
var bu=bn.length;
var bo;
var bs;
var bq=this.__eG;
var bt=bq.childNodes;
var bp=0;
var bv;
for(var i=bt.length-1;i>=0;i--){bv=bt[i];
bs=bw.fromHashCode(bv.$$element);

if(!bs||!bs.__eI||bs.__eV!==this){bq.removeChild(bv);
}}for(var i=0;i<bu;i++){bo=bn[i];
if(bo.__eI){bs=bo.__eG;
bv=bt[bp];

if(!bs){continue;
}if(bs!=bv){if(bv){bq.insertBefore(bs,bv);
}else{bq.appendChild(bs);
}}bp++;
}}},_copyData:function(bx){var bB=this.__eG;
var bA=this.__ez;

if(bA){var by=qx.bom.element.Attribute;

for(var bC in bA){by.set(bB,bC,bA[bC]);
}}var bA=this.__ey;

if(bA){var bz=qx.bom.element.Style;

if(bx){bz.setStyles(bB,bA);
}else{bz.setCss(bB,bz.compile(bA));
}}var bA=this.__eR;

if(bA){for(var bC in bA){this._applyProperty(bC,bA[bC]);
}}var bA=this.__eS;

if(bA){qx.event.Registration.getManager(bB).importListeners(bB,bA);
delete this.__eS;
}},_syncData:function(){var bH=this.__eG;
var bG=qx.bom.element.Attribute;
var bE=qx.bom.element.Style;
var bF=this.__eP;

if(bF){var bK=this.__ez;

if(bK){var bI;

for(var bJ in bF){bI=bK[bJ];

if(bI!==undefined){bG.set(bH,bJ,bI);
}else{bG.reset(bH,bJ);
}}}this.__eP=null;
}var bF=this.__eO;

if(bF){var bK=this.__ey;

if(bK){var bD={};

for(var bJ in bF){bD[bJ]=bK[bJ];
}bE.setStyles(bH,bD);
}this.__eO=null;
}var bF=this.__eQ;

if(bF){var bK=this.__eR;

if(bK){var bI;

for(var bJ in bF){this._applyProperty(bJ,bK[bJ]);
}}this.__eQ=null;
}},__eX:function(){var bL=this;
while(bL){if(bL.__eH){return true;
}
if(!bL.__eI||!bL.__eJ){return false;
}bL=bL.__eV;
}return false;
},__eY:function(bM){if(bM.__eV===this){throw new Error("Child is already in: "+bM);
}
if(bM.__eH){throw new Error("Root elements could not be inserted into other ones.");
}if(bM.__eV){bM.__eV.remove(bM);
}bM.__eV=this;
if(!this.__eT){this.__eT=[];
}if(this.__eG){this._scheduleChildrenUpdate();
}},__fa:function(bN){if(bN.__eV!==this){throw new Error("Has no child: "+bN);
}if(this.__eG){this._scheduleChildrenUpdate();
}delete bN.__eV;
},__fb:function(bO){if(bO.__eV!==this){throw new Error("Has no child: "+bO);
}if(this.__eG){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__eT||null;
},getChild:function(bP){var bQ=this.__eT;
return bQ&&bQ[bP]||null;
},hasChildren:function(){var bR=this.__eT;
return bR&&bR[0]!==undefined;
},indexOf:function(bS){var bT=this.__eT;
return bT?bT.indexOf(bS):-1;
},hasChild:function(bU){var bV=this.__eT;
return bV&&bV.indexOf(bU)!==-1;
},add:function(bW){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__eY(arguments[i]);
}this.__eT.push.apply(this.__eT,arguments);
}else{this.__eY(bW);
this.__eT.push(bW);
}return this;
},addAt:function(bX,bY){this.__eY(bX);
qx.lang.Array.insertAt(this.__eT,bX,bY);
return this;
},remove:function(ca){var cb=this.__eT;

if(!cb){return;
}
if(arguments[1]){var cc;

for(var i=0,l=arguments.length;i<l;i++){cc=arguments[i];
this.__fa(cc);
qx.lang.Array.remove(cb,cc);
}}else{this.__fa(ca);
qx.lang.Array.remove(cb,ca);
}return this;
},removeAt:function(cd){var ce=this.__eT;

if(!ce){throw new Error("Has no children!");
}var cf=ce[cd];

if(!cf){throw new Error("Has no child at this position!");
}this.__fa(cf);
qx.lang.Array.removeAt(this.__eT,cd);
return this;
},removeAll:function(){var cg=this.__eT;

if(cg){for(var i=0,l=cg.length;i<l;i++){this.__fa(cg[i]);
}cg.length=0;
}return this;
},getParent:function(){return this.__eV||null;
},insertInto:function(parent,ch){parent.__eY(this);

if(ch==null){parent.__eT.push(this);
}else{qx.lang.Array.insertAt(this.__eT,this,ch);
}return this;
},insertBefore:function(ci){var parent=ci.__eV;
parent.__eY(this);
qx.lang.Array.insertBefore(parent.__eT,this,ci);
return this;
},insertAfter:function(cj){var parent=cj.__eV;
parent.__eY(this);
qx.lang.Array.insertAfter(parent.__eT,this,cj);
return this;
},moveTo:function(ck){var parent=this.__eV;
parent.__fb(this);
var cl=parent.__eT.indexOf(this);

if(cl===ck){throw new Error("Could not move to same index!");
}else if(cl<ck){ck--;
}qx.lang.Array.removeAt(parent.__eT,cl);
qx.lang.Array.insertAt(parent.__eT,this,ck);
return this;
},moveBefore:function(cm){var parent=this.__eV;
return this.moveTo(parent.__eT.indexOf(cm));
},moveAfter:function(cn){var parent=this.__eV;
return this.moveTo(parent.__eT.indexOf(cn)+1);
},free:function(){var parent=this.__eV;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__eT){return;
}parent.__fa(this);
qx.lang.Array.remove(parent.__eT,this);
return this;
},getDomElement:function(){return this.__eG||null;
},getNodeName:function(){return this.__ex;
},setNodeName:function(name){this.__ex=name;
},setRoot:function(co){this.__eH=co;
},useMarkup:function(cp){if(this.__eG){throw new Error("Could not overwrite existing element!");
}if((qx.core.Environment.get(h)==b)){var cq=document.createElement(d);
}else{var cq=qx.bom.Element.getHelperElement();
}cq.innerHTML=cp;
this.useElement(cq.firstChild);
return this.__eG;
},useElement:function(cr){if(this.__eG){throw new Error("Could not overwrite existing element!");
}this.__eG=cr;
this.__eG.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ct=this.getAttribute(r);

if(ct>=1){return true;
}var cs=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ct>=0&&cs[this.__ex]){return true;
}return false;
},setSelectable:qx.core.Environment.select(h,{"webkit":function(cu){this.setAttribute(k,cu?g:j);
this.setStyle(v,cu?f:a);
},"gecko":function(cv){this.setAttribute(k,cv?g:j);
this.setStyle(p,cv?f:u);
},"default":function(cw){this.setAttribute(k,cw?g:j);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__ex];
},include:function(){if(this.__eI){return;
}delete this.__eI;

if(this.__eV){this.__eV._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__eI){return;
}this.__eI=false;

if(this.__eV){this.__eV._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__eI===true;
},show:function(){if(this.__eJ){return;
}
if(this.__eG){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__eV){this.__eV._scheduleChildrenUpdate();
}delete this.__eJ;
},hide:function(){if(!this.__eJ){return;
}
if(this.__eG){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__eJ=false;
},isVisible:function(){return this.__eJ===true;
},scrollChildIntoViewX:function(cx,cy,cz){var cA=this.__eG;
var cB=cx.getDomElement();

if(cz!==false&&cA&&cA.offsetWidth&&cB&&cB.offsetWidth){qx.bom.element.Scroll.intoViewX(cB,cA,cy);
}else{this.__eK={element:cx,align:cy};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eM;
},scrollChildIntoViewY:function(cC,cD,cE){var cF=this.__eG;
var cG=cC.getDomElement();

if(cE!==false&&cF&&cF.offsetWidth&&cG&&cG.offsetWidth){qx.bom.element.Scroll.intoViewY(cG,cF,cD);
}else{this.__eL={element:cC,align:cD};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eN;
},scrollToX:function(x,cH){var cI=this.__eG;

if(cH!==true&&cI&&cI.offsetWidth){cI.scrollLeft=x;
delete this.__eM;
}else{this.__eM=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eK;
},getScrollX:function(){var cJ=this.__eG;

if(cJ){return cJ.scrollLeft;
}return this.__eM||0;
},scrollToY:function(y,cK){var cL=this.__eG;

if(cK!==true&&cL&&cL.offsetWidth){cL.scrollTop=y;
delete this.__eN;
}else{this.__eN=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eL;
},getScrollY:function(){var cM=this.__eG;

if(cM){return cM.scrollTop;
}return this.__eN||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(F,this.__fd,this);
},enableScrolling:function(){this.removeListener(F,this.__fd,this);
},__fc:null,__fd:function(e){if(!this.__fc){this.__fc=true;
this.__eG.scrollTop=0;
this.__eG.scrollLeft=0;
delete this.__fc;
}},getTextSelection:function(){var cN=this.__eG;

if(cN){return qx.bom.Selection.get(cN);
}return null;
},getTextSelectionLength:function(){var cO=this.__eG;

if(cO){return qx.bom.Selection.getLength(cO);
}return null;
},getTextSelectionStart:function(){var cP=this.__eG;

if(cP){return qx.bom.Selection.getStart(cP);
}return null;
},getTextSelectionEnd:function(){var cQ=this.__eG;

if(cQ){return qx.bom.Selection.getEnd(cQ);
}return null;
},setTextSelection:function(cR,cS){var cT=this.__eG;

if(cT){qx.bom.Selection.set(cT,cR,cS);
return;
}qx.html.Element.__eA[this.toHashCode()]={element:this,start:cR,end:cS};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var cU=this.__eG;

if(cU){qx.bom.Selection.clear(cU);
}delete qx.html.Element.__eA[this.toHashCode()];
},__fe:function(cV,cW){var cX=qx.html.Element._actions;
cX.push({type:cV,element:this,args:cW||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__fe(o);
},blur:function(){this.__fe(B);
},activate:function(){this.__fe(C);
},deactivate:function(){this.__fe(z);
},capture:function(cY){this.__fe(w,[cY!==false]);
},releaseCapture:function(){this.__fe(t);
},setStyle:function(da,dc,dd){if(!this.__ey){this.__ey={};
}
if(this.__ey[da]==dc){return;
}
if(dc==null){delete this.__ey[da];
}else{this.__ey[da]=dc;
}if(this.__eG){if(dd){qx.bom.element.Style.set(this.__eG,da,dc);
return this;
}if(!this.__eO){this.__eO={};
}this.__eO[da]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(de,df){var dg=qx.bom.element.Style;

if(!this.__ey){this.__ey={};
}
if(this.__eG){if(!this.__eO){this.__eO={};
}
for(var di in de){var dh=de[di];

if(this.__ey[di]==dh){continue;
}
if(dh==null){delete this.__ey[di];
}else{this.__ey[di]=dh;
}if(df){dg.set(this.__eG,di,dh);
continue;
}this.__eO[di]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var di in de){var dh=de[di];

if(this.__ey[di]==dh){continue;
}
if(dh==null){delete this.__ey[di];
}else{this.__ey[di]=dh;
}}}return this;
},removeStyle:function(dj,dk){this.setStyle(dj,null,dk);
},getStyle:function(dl){return this.__ey?this.__ey[dl]:null;
},getAllStyles:function(){return this.__ey||null;
},setAttribute:function(dm,dn,dp){if(!this.__ez){this.__ez={};
}
if(this.__ez[dm]==dn){return;
}
if(dn==null){delete this.__ez[dm];
}else{this.__ez[dm]=dn;
}if(this.__eG){if(dp){qx.bom.element.Attribute.set(this.__eG,dm,dn);
return this;
}if(!this.__eP){this.__eP={};
}this.__eP[dm]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dq,dr){for(var ds in dq){this.setAttribute(ds,dq[ds],dr);
}return this;
},removeAttribute:function(dt,du){this.setAttribute(dt,null,du);
},getAttribute:function(dv){return this.__ez?this.__ez[dv]:null;
},_applyProperty:function(name,dw){},_setProperty:function(dx,dy,dz){if(!this.__eR){this.__eR={};
}
if(this.__eR[dx]==dy){return;
}
if(dy==null){delete this.__eR[dx];
}else{this.__eR[dx]=dy;
}if(this.__eG){if(dz){this._applyProperty(dx,dy);
return this;
}if(!this.__eQ){this.__eQ={};
}this.__eQ[dx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dA,dB){this._setProperty(dA,null,dB);
},_getProperty:function(dC){var dD=this.__eR;

if(!dD){return null;
}var dE=dD[dC];
return dE==null?null:dE;
},addListener:function(dF,dG,self,dH){var dI;

if(this.$$disposed){return null;
}
if(this.__eG){return qx.event.Registration.addListener(this.__eG,dF,dG,self,dH);
}
if(!this.__eS){this.__eS={};
}
if(dH==null){dH=false;
}var dJ=qx.event.Manager.getNextUniqueId();
var dK=dF+(dH?D:q)+dJ;
this.__eS[dK]={type:dF,listener:dG,self:self,capture:dH,unique:dJ};
return dK;
},removeListener:function(dL,dM,self,dN){var dO;

if(this.$$disposed){return null;
}
if(this.__eG){qx.event.Registration.removeListener(this.__eG,dL,dM,self,dN);
}else{var dQ=this.__eS;
var dP;

if(dN==null){dN=false;
}
for(var dR in dQ){dP=dQ[dR];
if(dP.listener===dM&&dP.self===self&&dP.capture===dN&&dP.type===dL){delete dQ[dR];
break;
}}}return this;
},removeListenerById:function(dS){if(this.$$disposed){return null;
}
if(this.__eG){qx.event.Registration.removeListenerById(this.__eG,dS);
}else{delete this.__eS[dS];
}return this;
},hasListener:function(dT,dU){if(this.$$disposed){return false;
}
if(this.__eG){return qx.event.Registration.hasListener(this.__eG,dT,dU);
}var dW=this.__eS;
var dV;

if(dU==null){dU=false;
}
for(var dX in dW){dV=dW[dX];
if(dV.capture===dU&&dV.type===dT){return true;
}}return false;
}},defer:function(dY){dY.__ff=new qx.util.DeferredCall(dY.flush,dY);
},destruct:function(){var ea=this.__eG;

if(ea){qx.event.Registration.getManager(ea).removeAllListeners(ea);
ea.$$element=c;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__eV;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(A);
this.__ez=this.__ey=this.__eS=this.__eR=this.__eP=this.__eO=this.__eQ=this.__eG=this.__eV=this.__eK=this.__eL=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__lg:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__lg;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__lg==h){return;
}this.__lg=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(b,c){this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!b;
this._cancelable=!!c;
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
}},stopPropagation:function(){this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(g){this._eventPhase=g;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(h){this._target=h;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(k){this._originalTarget=k;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
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
},clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);
var i={};
h._native=this._cloneNativeEvent(this._native,i);
h._returnValue=this._returnValue;
return h;
},_cloneNativeEvent:function(j,k){k.preventDefault=qx.lang.Function.empty;
return k;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var c="os.name",b="qx.event.type.Dom",a="osx";
qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var g=0;
var f=this._native;

if(f.shiftKey){g|=qx.event.type.Dom.SHIFT_MASK;
}
if(f.ctrlKey){g|=qx.event.type.Dom.CTRL_MASK;
}
if(f.altKey){g|=qx.event.type.Dom.ALT_MASK;
}
if(f.metaKey){g|=qx.event.type.Dom.META_MASK;
}return g;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(c)==a){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var j="left",i="right",h="middle",g="none",f="click",e="contextmenu",d="qx.event.type.Mouse",c="browser.documentmode",b="browser.name",a="ie";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);
l.button=k.button;
l.clientX=k.clientX;
l.clientY=k.clientY;
l.pageX=k.pageX;
l.pageY=k.pageY;
l.screenX=k.screenX;
l.screenY=k.screenY;
l.wheelDelta=k.wheelDelta;
l.detail=k.detail;
l.srcElement=k.srcElement;
l.target=k.target;
return l;
},__gQ:{0:j,2:i,1:h},__gR:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__gQ[this._native.button]||g;
}else{return this.__gR[this._native.button]||g;
}}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;
}else{var m=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(m);
}},getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;
}else{var n=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(n);
}},getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var i="engine.version",h="os.name",g="osx",f="win",e="engine.name",d="chrome",c="qx.dynamicmousewheel",b="qx.event.type.MouseWheel",a="browser.name";
qx.Class.define(b,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__gS:function(j){var k=Math.abs(j);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>k){qx.event.type.MouseWheel.MINSCROLL=k;
this.__gT();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<k){qx.event.type.MouseWheel.MAXSCROLL=k;
this.__gT();
}if(qx.event.type.MouseWheel.MAXSCROLL===k&&qx.event.type.MouseWheel.MINSCROLL===k){return 2*(j/k);
}var l=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var m=(j/l)*Math.log(l)*qx.event.type.MouseWheel.FACTOR;
return m<0?Math.min(m,-1):Math.max(m,1);
},__gT:function(){var n=qx.event.type.MouseWheel.MAXSCROLL||0;
var q=qx.event.type.MouseWheel.MINSCROLL||n;

if(n<=q){return;
}var o=n-q;
var p=(n/o)*Math.log(o);

if(p==0){p=1;
}qx.event.type.MouseWheel.FACTOR=6/p;
},getWheelDelta:function(){if(qx.core.Environment.get(c)){if(this._native.detail){return this.__gS(this._native.detail);
}return this.__gS(-this._native.wheelDelta);
}else{var r=qx.core.Environment.select(e,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.core.Environment.get(a)==d){if(qx.core.Environment.get(h)==g){return -(this._native.wheelDelta/60);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.core.Environment.get(h)==f){var s=120;
if(parseFloat(qx.core.Environment.get(i))==533.16){s=1200;
}}else{s=40;
if(parseFloat(qx.core.Environment.get(i))==533.16||parseFloat(qx.core.Environment.get(i))==533.17||parseFloat(qx.core.Environment.get(i))==533.18){s=1200;
}}return -(this._native.wheelDelta/s);
}}});
return r.call(this);
}}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(e,f,g,h){var i=qx.locale.Manager;

if(i){return i.trn.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(j,k,l){var m=qx.locale.Manager;

if(m){return m.trc.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(k,l,m,n){switch(n){case e:return l.start-m.end-k;
case b:return l.end+m.start;
case d:return l.start+m.start;
case c:return l.end-m.end-k;
}},_isInRange:function(o,p,q){return o>=0&&o+p<=q;
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
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__in=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__in:null,__io:{focusin:1,focusout:1,focus:1,blur:1},__ip:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__io[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__io[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__io[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__ip[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__in.getListeners(u,v,k);

if(!r||r.length===0){return;
}var m=qx.event.Pool.getInstance().getObject(j.constructor);
j.clone(m);
m.setTarget(o);
m.setRelatedTarget(w||null);
m.setCurrentTarget(u);
var y=j.getOriginalTarget();

if(y){var n=qx.ui.core.Widget.getWidgetByElement(y);

while(n&&n.isAnonymous()){n=n.getLayoutParent();
}m.setOriginalTarget(n);
}else{m.setOriginalTarget(p);
}for(var i=0,l=r.length;i<l;i++){var t=r[i].context||u;
r[i].handler.call(t,m);
}if(m.getPropagationStopped()){j.stopPropagation();
}
if(m.getDefaultPrevented()){j.preventDefault();
}qx.event.Pool.getInstance().poolObject(m);
},registerEvent:function(z,A,B){var C;

if(A===e||A===f){C=z.getFocusElement();
}else if(A===c||A===d){C=z.getContentElement();
}else{C=z.getContainerElement();
}
if(C){C.addListener(A,this._dispatchEvent,this,B);
}},unregisterEvent:function(D,E,F){var G;

if(E===e||E===f){G=D.getFocusElement();
}else if(E===c||E===d){G=D.getContentElement();
}else{G=D.getContainerElement();
}
if(G){G.removeListener(E,this._dispatchEvent,this,F);
}}},destruct:function(){this.__in=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(b,c,d){var name;

for(var i=0,l=c.length;i<l;i++){name=c[i];

if(b[name]==null||!b.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[name].dispose){if(!d&&b[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{b[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}b[name]=null;
}},disposeArray:function(e,f){var h=e[f];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{var g;

for(var i=h.length-1;i>=0;i--){g=h[i];

if(g){g.dispose();
}}}catch(j){throw new Error("The array field: "+f+" of object: "+e+" has non disposable entries: "+j);
}h.length=0;
e[f]=null;
},disposeMap:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var p in o){n=o[p];

if(o.hasOwnProperty(p)&&n){n.dispose();
}}}catch(q){throw new Error("The map field: "+m+" of object: "+k+" has non disposable entries: "+q);
}k[m]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__dQ=c;
this.__dR=d||b;
this.__dS=e===undefined?-1:e;
},members:{__dQ:null,__dR:null,__dS:null,toString:function(){return this.__dQ;
},getUri:function(){return this.__dR;
},getLineNumber:function(){return this.__dS;
}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__en={};
this.add(a,h);
},members:{__en:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__en[k]){return this.__en[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__en[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__en[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__en[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__en){v[w]=this.__en[w];
}return v;
}},destruct:function(){this.__en=null;
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__fi=f;
this.__fj=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fi:null,__fj:null,__fk:null,__fl:null,__fm:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__fm=qx.lang.Function.listener(this._onNative,this);
this.__fk=qx.bom.Event.supportsEvent(this.__fj,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__fj,this.__fk,this.__fm);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fj,this.__fk,this.__fm);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__fl!=p){this.__fl=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__fj,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__fi=this.__fj=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__fn=b;
this.__fo=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fn:null,__fo:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__fn=this.__fo=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__fp=u;
this.__fq=u.getWindow();
this.__fr=this.__fq.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__fs:null,__ft:null,__fp:null,__fq:null,__fr:null,__fu:null,__fv:null,__fw:null,__fx:null,__fy:false,__fz:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__fA:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__fB:function(F,G,H,I){if(!H){H=this.__fA(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__fq,h,qx.event.type.Data,[G]);
},__fC:function(J,K,L){if(!L){L=this.__fA(J);
}var K=K||J.type;

if(K==r){this.__fD(J,L);
}else if(K==q){this.__fE(J,L);
}else if(K==s){this.__fF(J,L);
}},__fD:function(M,N){var O=M.changedTouches[0];
this.__fu=O.screenX;
this.__fv=O.screenY;
this.__fw=new Date().getTime();
this.__fx=M.changedTouches.length===1;
},__fE:function(P,Q){if(this.__fx&&P.changedTouches.length>1){this.__fx=false;
}},__fF:function(R,S){if(this.__fx){var T=R.changedTouches[0];
var V={x:T.screenX-this.__fu,y:T.screenY-this.__fv};
var W=qx.event.handler.Touch;

if(this.__fz==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__fB(R,f,S,qx.event.type.Tap);
}else{var U=this.__fG(R,S,V);

if(U){R.swipe=U;
this.__fB(R,c,S,qx.event.type.Swipe);
}}}},__fG:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__fw;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__fw,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__fH:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__fI(bi)){this.__fy=true;
}else if(bj==s){this.__fy=false;
}var bm=this.__fJ(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__fI:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__fJ:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__fA(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__fs=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fr,r,this.__fs);
Event.addNativeListener(this.__fr,q,this.__fs);
Event.addNativeListener(this.__fr,s,this.__fs);
Event.addNativeListener(this.__fr,m,this.__fs);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__ft=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fr,k,this.__ft);
Event.addNativeListener(this.__fr,o,this.__ft);
Event.addNativeListener(this.__fr,l,this.__ft);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fr,r,this.__fs);
Event.removeNativeListener(this.__fr,q,this.__fs);
Event.removeNativeListener(this.__fr,s,this.__fs);
Event.removeNativeListener(this.__fr,m,this.__fs);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fr,k,this.__ft);
Event.removeNativeListener(this.__fr,o,this.__ft);
Event.removeNativeListener(this.__fr,l,this.__ft);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__fy){return;
}var bt=this.__fH(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__fz=this.__fA(bu);
}this.__fB(bu,bv);
this.__fC(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__fp=this.__fq=this.__fr=this.__fz=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
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
qx.event.Registration.fireNonBubblingEvent(parent,j);
}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(H,stop,I){var parent=H.parentNode;
var O=qx.dom.Node.getDocument(H);
var J=O.body;
var W,K,S;
var Y,V,Q;
var M,N,L;
var bb,bc,X,R;
var U,P,bd;
var ba=I===d;
var T=I===e;
stop=stop?stop.parentNode:O;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===J||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===J){K=parent.scrollTop;
S=K+qx.bom.Viewport.getHeight();
Y=qx.bom.Viewport.getHeight();
V=parent.clientHeight;
Q=parent.scrollHeight;
M=0;
N=0;
L=0;
}else{W=qx.bom.element.Location.get(parent);
K=W.top;
S=W.bottom;
Y=parent.offsetHeight;
V=parent.clientHeight;
Q=parent.scrollHeight;
M=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
N=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
L=Y-V-M-N;
}bb=qx.bom.element.Location.get(H);
bc=bb.top;
X=bb.bottom;
R=H.offsetHeight;
U=bc-K-M;
P=X-S+N;
bd=0;
if(ba){bd=U;
}else if(T){bd=P+L;
}else if(U<0||R>V){bd=U;
}else if(P>0){bd=P+L;
}parent.scrollTop+=bd;
qx.event.Registration.fireNonBubblingEvent(parent,j);
}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var o="auto",n="px",m=",",l="clip:auto;",k="rect(",j=");",i="",h=")",g="qx.bom.element.Clip",f="string",c="clip:rect(",e=" ",d="clip",b="rect(auto,auto,auto,auto)",a="rect(auto, auto, auto, auto)";
qx.Class.define(g,{statics:{compile:function(p){if(!p){return l;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?o:t+n);
u=o;
}else{q=(t==null?o:u+t+n);
u=u+n;
}
if(top==null){r=(s==null?o:s+n);
top=o;
}else{r=(s==null?o:top+s+n);
top=top+n;
}return c+top+m+q+m+r+m+u+j;
},get:function(v,w){var y=qx.bom.element.Style.get(v,d,w,false);
var E,top,C,B;
var x,z;

if(typeof y===f&&y!==o&&y!==i){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var D=RegExp.$1;
if(/,/.test(D)){var A=D.split(m);
}else{var A=D.split(e);
}top=qx.lang.String.trim(A[0]);
x=qx.lang.String.trim(A[1]);
z=qx.lang.String.trim(A[2]);
E=qx.lang.String.trim(A[3]);
if(E===o){E=null;
}
if(top===o){top=null;
}
if(x===o){x=null;
}
if(z===o){z=null;
}if(top!=null){top=parseInt(top,10);
}
if(x!=null){x=parseInt(x,10);
}
if(z!=null){z=parseInt(z,10);
}
if(E!=null){E=parseInt(E,10);
}if(x!=null&&E!=null){C=x-E;
}else if(x!=null){C=x;
}
if(z!=null&&top!=null){B=z-top;
}else if(z!=null){B=z;
}}else{throw new Error("Could not parse clip string: "+y);
}}return {left:E||null,top:top||null,width:C||null,height:B||null};
},set:function(F,G){if(!G){F.style.clip=b;
return;
}var L=G.left;
var top=G.top;
var K=G.width;
var J=G.height;
var H,I;

if(L==null){H=(K==null?o:K+n);
L=o;
}else{H=(K==null?o:L+K+n);
L=L+n;
}
if(top==null){I=(J==null?o:J+n);
top=o;
}else{I=(J==null?o:top+J+n);
top=top+n;
}F.style.clip=k+top+m+H+m+I+m+L+h;
},reset:function(M){M.style.clip=a;
}}});
})();
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__if=false;
this.__ig=false;
this.__ih=false;
this.__ii=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__ij();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__ih:null,__if:null,__ig:null,__ii:null,__ij:function(){if(!this.__ih&&this.__if&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__ih=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__ih=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__ih;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__if=true;
this.__ij();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Environment.get(n)==f||qx.core.Environment.get(n)==d||qx.core.Environment.get(n)==g){qx.bom.Event.addNativeListener(this._window,c,this._onNativeLoadWrapped);
}else if((qx.core.Environment.get(n)==l)){var self=this;
var y=function(){try{document.documentElement.doScroll(a);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__if=true;
this.__ij();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__ii){this.__ii=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(c){this._manager=c;
},members:{_getParent:function(d){throw new Error("Missing implementation");
},canDispatchEvent:function(e,event,f){return event.getBubbles();
},dispatchEvent:function(g,event,h){var parent=g;
var s=this._manager;
var p,w;
var n;
var r,u;
var t;
var v=[];
p=s.getListeners(g,h,true);
w=s.getListeners(g,h,false);

if(p){v.push(p);
}
if(w){v.push(w);
}var parent=this._getParent(g);
var l=[];
var k=[];
var m=[];
var q=[];
while(parent!=null){p=s.getListeners(parent,h,true);

if(p){m.push(p);
q.push(parent);
}w=s.getListeners(parent,h,false);

if(w){l.push(w);
k.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=m.length-1;i>=0;i--){t=q[i];
event.setCurrentTarget(t);
n=m[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(g);

for(var i=0,x=v.length;i<x;i++){n=v[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||g;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,x=l.length;i<x;i++){t=k[i];
event.setCurrentTarget(t);
n=l[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__hB=j.getWindow();
this.__hC=k;
j.addListener(this.__hB,f,this.releaseCapture,this);
j.addListener(this.__hB,e,this.releaseCapture,this);
j.addListener(this.__hB,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__hC:null,__hD:null,__hE:true,__hB:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__hD&&this.__hF[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hE||!qx.dom.Hierarchy.contains(this.__hD,o)){o=this.__hD;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__hF:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__hD===q&&this.__hE==r){return;
}
if(this.__hD){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__hE=r;
this.__hD=q;
this.__hC.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hD;
},releaseCapture:function(){var s=this.__hD;

if(!s){return;
}this.__hD=null;
this.__hC.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hD=this.__hB=this.__hC=null;
},defer:function(w){qx.event.Registration.addDispatcher(w);
}});
})();
(function(){var r="engine.name",q="",p="MSXML2.DOMDocument.3.0",o="mshtml",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="'",h="MSXML2.XMLHTTP.3.0",g="MSXML2.XMLHTTP.6.0",c=" xmlns='",f='<\?xml version="1.0" encoding="utf-8"?>\n<',e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(s){if(s.nodeType===9){return s.documentElement.nodeName!==d;
}else if(s.ownerDocument){return this.isXmlDocument(s.ownerDocument);
}else{return false;
}},create:qx.core.Environment.select(r,{"mshtml":function(t,u){var v=new ActiveXObject(this.DOMDOC);
if(this.DOMDOC==p){v.setProperty(n,b);
}
if(u){var w=f;
w+=u;

if(t){w+=c+t+j;
}w+=k;
v.loadXML(w);
}return v;
},"default":function(x,y){return document.implementation.createDocument(x||q,y||q,null);
}}),fromString:qx.core.Environment.select(r,{"mshtml":function(z){var A=qx.xml.Document.create();
A.loadXML(z);
return A;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,e);
}})},defer:function(D){if((qx.core.Environment.get(r)==o)){var E=[a,p];
var F=[g,h];

for(var i=0,l=E.length;i<l;i++){try{new ActiveXObject(E[i]);
new ActiveXObject(F[i]);
}catch(G){continue;
}D.DOMDOC=E[i];
D.XMLHTTP=F[i];
break;
}}}});
})();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);
e.pageX=d.pageX;
e.pageY=d.pageY;
e.layerX=d.layerX;
e.layerY=d.layerY;
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(var i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(var i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__gP().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__gO(f).pageX;
},getDocumentTop:function(g){return this.__gO(g).pageY;
},getScreenLeft:function(h){return this.__gO(h).screenX;
},getScreenTop:function(j){return this.__gO(j).screenY;
},getViewportLeft:function(k){return this.__gO(k).clientX;
},getViewportTop:function(l){return this.__gO(l).clientY;
},getIdentifier:function(m){return this.__gO(m).identifier;
},__gO:function(n){n=n==null?0:n;
return this.__gP()[n];
},__gP:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
return o;
},_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);
}}});
})();
(function(){var a="qx.event.type.Swipe";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Touch.prototype._cloneNativeEvent.call(this,b,c);
c.swipe=b.swipe;
return c;
},_isTouchEnd:function(){return true;
},getStartTime:function(){return this._native.swipe.startTime;
},getDuration:function(){return this._native.swipe.duration;
},getAxis:function(){return this._native.swipe.axis;
},getDirection:function(){return this._native.swipe.direction;
},getVelocity:function(){return this._native.swipe.velocity;
},getDistance:function(){return this._native.swipe.distance;
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__ia:[],__ib:{},remove:function(c){delete this.__ib[c.$$hash];
qx.lang.Array.remove(this.__ia,c);
},isVisible:function(d){return this.__ib[d.$$hash]||false;
},__ic:function(e){var g=this.__ib;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__ic(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(j){var k=this.__ia;

if(qx.lang.Array.contains(k,j)){return;
}k.unshift(j);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var o=this.__ia;
var p=this.__ib;
for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;

if(p[n]!=null){o[i].addChildrenToQueue(o);
}}var l={};

for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;
l[n]=p[n];
p[n]=null;
}for(var i=o.length-1;i>=0;i--){var m=o[i];
var n=m.$$hash;
o.splice(i,1);
if(p[n]==null){this.__ic(m);
}if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();
}}this.__ia=[];
}}});
})();
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};

if(qx.core.Environment.get(d)){g.pointerEvents=c;
}qx.html.Element.call(this,null,g);
this.__fg=e;
this.__fh=f||e.toHashCode();
this.useMarkup(e.getMarkup());
},members:{__fh:null,__fg:null,getId:function(){return this.__fh;
},getDecorator:function(){return this.__fg;
},resize:function(h,i){this.__fg.resize(this.getDomElement(),h,i);
},tint:function(j){this.__fg.tint(this.getDomElement(),j);
},getInsets:function(){return this.__fg.getInsets();
}},destruct:function(){this.__fg=null;
}});
})();
(function(){var k="engine.version",j="",i="engine.name",h="hidden",g="-moz-scrollbars-none",f="overflow",e=";",d="overflowY",b=":",a="overflowX",z="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",m="100px",n="qx.bom.element.Overflow",l="overflow-x";
qx.Class.define(n,{statics:{__ea:null,getScrollbarWidth:function(){if(this.__ea!==null){return this.__ea;
}var A=qx.bom.element.Style;
var C=function(G,H){return parseInt(A.get(G,H),10)||0;
};
var D=function(I){return (A.get(I,v)==y?0:C(I,r));
};
var B=function(J){return (A.get(J,w)==y?0:C(J,p));
};
var F=qx.core.Environment.select(i,{"mshtml":function(K){if(A.get(K,d)==h||K.clientWidth==0){return D(K);
}return Math.max(0,K.offsetWidth-K.clientLeft-K.clientWidth);
},"default":function(L){if(L.clientWidth==0){var M=A.get(L,f);
var N=(M==x||M==o?16:0);
return Math.max(0,D(L)+N);
}return Math.max(0,(L.offsetWidth-L.clientWidth-B(L)));
}});
var E=function(O){return F(O)-D(O);
};
var t=document.createElement(u);
var s=t.style;
s.height=s.width=m;
s.overflow=x;
document.body.appendChild(t);
var c=E(t);
this.__ea=c?c:16;
document.body.removeChild(t);
return this.__ea;
},_compile:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(P,Q){if(Q==h){Q=g;
}return z+Q+e;
}:
function(R,S){return R+b+S+e;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(T,U){return z+U+e;
}:
function(V,W){return V+b+W+e;
},"default":function(X,Y){return X+b+Y+e;
}}),compileX:function(ba){return this._compile(l,ba);
},compileY:function(bb){return this._compile(q,bb);
},getX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bc,bd){var be=qx.bom.element.Style.get(bc,f,bd,false);

if(be===g){be=h;
}return be;
}:
function(bf,bg){return qx.bom.element.Style.get(bf,a,bg,false);
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bh,bi){return qx.bom.element.Style.get(bh,f,bi,false);
}:
function(bj,bk){return qx.bom.element.Style.get(bj,a,bk,false);
},"default":function(bl,bm){return qx.bom.element.Style.get(bl,a,bm,false);
}}),setX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bn,bo){if(bo==h){bo=g;
}bn.style.overflow=bo;
}:
function(bp,bq){bp.style.overflowX=bq;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(br,bs){br.style.overflow=bs;
}:
function(bt,bu){bt.style.overflowX=bu;
},"default":function(bv,bw){bv.style.overflowX=bw;
}}),resetX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bx){bx.style.overflow=j;
}:
function(by){by.style.overflowX=j;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bz,bA){bz.style.overflow=j;
}:
function(bB,bC){bB.style.overflowX=j;
},"default":function(bD){bD.style.overflowX=j;
}}),getY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bE,bF){var bG=qx.bom.element.Style.get(bE,f,bF,false);

if(bG===g){bG=h;
}return bG;
}:
function(bH,bI){return qx.bom.element.Style.get(bH,d,bI,false);
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bJ,bK){return qx.bom.element.Style.get(bJ,f,bK,false);
}:
function(bL,bM){return qx.bom.element.Style.get(bL,d,bM,false);
},"default":function(bN,bO){return qx.bom.element.Style.get(bN,d,bO,false);
}}),setY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bP,bQ){if(bQ===h){bQ=g;
}bP.style.overflow=bQ;
}:
function(bR,bS){bR.style.overflowY=bS;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bT,bU){bT.style.overflow=bU;
}:
function(bV,bW){bV.style.overflowY=bW;
},"default":function(bX,bY){bX.style.overflowY=bY;
}}),resetY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(ca){ca.style.overflow=j;
}:
function(cb){cb.style.overflowY=j;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(cc,cd){cc.style.overflow=j;
}:
function(ce,cf){ce.style.overflowY=j;
},"default":function(cg){cg.style.overflowY=j;
}})}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__dB=qx.dev.StackTrace.getStackTrace();
},members:{__dB:null,getStackTrace:function(){return this.__dB;
}}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__iu=u;
this.length=u.length;
},members:{$$isString:true,length:0,__iu:null,toString:function(){return this.__iu;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__ob:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__ob(c);
},hasChildren:function(){return this.__ob(f);
},add:function(r,s){return this.__ob(j,r,s);
},remove:function(t){return this.__ob(a,t);
},removeAll:function(){return this.__ob(d);
},indexOf:function(u){return this.__ob(l,u);
},addAt:function(v,w,x){this.__ob(g,v,w,x);
},addBefore:function(y,z,A){this.__ob(i,y,z,A);
},addAfter:function(B,C,D){this.__ob(k,B,C,D);
},removeAt:function(E){return this.__ob(e,E);
}}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b='__jK',a="direct";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jK=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__jL:null,compute:function(p,q,r,s,t,u,v){this.__jL=this.__jL||new qx.util.placement.Placement();
var y=t.split(f);
var x=y[0];
var w=y[1];
this.__jL.set({axisX:this.__jP(u),axisY:this.__jP(v),edge:x,align:w});
return this.__jL.compute(p,q,r,s);
},__jM:null,__jN:null,__jO:null,__jP:function(z){switch(z){case a:this.__jM=this.__jM||new qx.util.placement.DirectAxis();
return this.__jM;
case d:this.__jN=this.__jN||new qx.util.placement.KeepAlignAxis();
return this.__jN;
case c:this.__jO=this.__jO||new qx.util.placement.BestFitAxis();
return this.__jO;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__jK:null,compute:function(A,B,C,D){var E=this.getAxisX()||this.__jK;
var G=E.computeStart(A.width,{start:C.left,end:C.right},{start:D.left,end:D.right},B.width,this.__jQ());
var F=this.getAxisY()||this.__jK;
var top=F.computeStart(A.height,{start:C.top,end:C.bottom},{start:D.top,end:D.bottom},B.height,this.__jR());
return {left:G,top:top};
},__jQ:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==l){return i;
}else if(I==n){return g;
}else if(H==l){return k;
}else if(H==n){return h;
}},__jR:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="engine.name",h="password",g="file",f="submit",e="reset",d="textarea",c="input",a="hidden",b="body";
qx.Class.define(k,{statics:{get:qx.core.Environment.select(i,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case c:switch(m.type){case j:case h:case a:case l:case e:case g:case f:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case d:case b:case l:return m.createTextRange();
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
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__lx:null,__ly:false,__lz:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__ly){this.__ly=false;
}else{this.__ly=true;
o.execute(this);
}}this.fireEvent(n);
},__lA:function(e){if(this.__ly){this.__ly=false;
return;
}this.__ly=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__lz);
}
if(p!=null){this.__lz=p.addListener(n,this.__lA,this);
}var t=this.__lx;

if(t==null){this.__lx=t={};
}var u;

for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&!q.isDisposed()&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){u=this.get(s);
}else{u=null;
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this._applyCommand(null,this.getCommand());
this.__lx=null;
}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cu={};
},statics:{MAX_SIZE:15,__cv:a},members:{__cu:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__cv;
e=c;
}var g=this.__cu;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled||i.isDisposed()){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__cv){i.dispose();
return;
}var k=this.__cu;

if(!k[j]){k[j]=[];
}
if(k[j].length>l.MAX_SIZE){i.dispose();
}else{i.$$pooled=true;
k[j].push(i);
}},_createDecoratorElement:function(m,n){var o=new qx.html.Decorator(m,n);
return o;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__cu;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__cu=null;
}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="allowShrinkY",b="bottom",a="baseline",x="marginBottom",w="qx.ui.core.LayoutItem",v="center",u="marginTop",t="allowGrowX",s="middle",r="marginLeft",q="allowShrinkX",p="top",o="right",m="marginRight",n="abstract",k="allowGrowY",l="left";
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__cw:null,__cx:null,__cy:null,__cz:null,__cA:null,__cB:null,__cC:null,getBounds:function(){return this.__cB||this.__cx||null;
},clearSeparators:function(){},renderSeparator:function(y,z){},renderLayout:function(A,top,B,C){var D;
var E=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var E=this._getHeightForWidth(B);
}
if(E!=null&&E!==this.__cw){this.__cw=E;
qx.ui.core.queue.Layout.add(this);
return null;
}var G=this.__cx;

if(!G){G=this.__cx={};
}var F={};

if(A!==G.left||top!==G.top){F.position=true;
G.left=A;
G.top=top;
}
if(B!==G.width||C!==G.height){F.size=true;
G.width=B;
G.height=C;
}if(this.__cy){F.local=true;
delete this.__cy;
}
if(this.__cA){F.margin=true;
delete this.__cA;
}return F;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__cy;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__cy=true;
this.__cz=null;
},getSizeHint:function(H){var I=this.__cz;

if(I){return I;
}
if(H===false){return null;
}I=this.__cz=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__cw&&this.getHeight()==null){I.height=this.__cw;
}if(I.minWidth>I.width){I.width=I.minWidth;
}
if(I.maxWidth<I.width){I.width=I.maxWidth;
}
if(!this.getAllowGrowX()){I.maxWidth=I.width;
}
if(!this.getAllowShrinkX()){I.minWidth=I.width;
}if(I.minHeight>I.height){I.height=I.minHeight;
}
if(I.maxHeight<I.height){I.height=I.maxHeight;
}
if(!this.getAllowGrowY()){I.maxHeight=I.height;
}
if(!this.getAllowShrinkY()){I.minHeight=I.height;
}return I;
},_computeSizeHint:function(){var N=this.getMinWidth()||0;
var K=this.getMinHeight()||0;
var O=this.getWidth()||N;
var M=this.getHeight()||K;
var J=this.getMaxWidth()||Infinity;
var L=this.getMaxHeight()||Infinity;
return {minWidth:N,width:O,maxWidth:J,minHeight:K,height:M,maxHeight:L};
},_hasHeightForWidth:function(){var P=this._getLayout();

if(P){return P.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(Q){var R=this._getLayout();

if(R&&R.hasHeightForWidth()){return R.getHeightForWidth(Q);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__cA=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__cB;
},setUserBounds:function(S,top,T,U){this.__cB={left:S,top:top,width:T,height:U};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__cB;
qx.ui.core.queue.Layout.add(this);
},__cD:{},setLayoutProperties:function(V){if(V==null){return;
}var W=this.__cC;

if(!W){W=this.__cC={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(V);
}for(var X in V){if(V[X]==null){delete W[X];
}else{W[X]=V[X];
}}},getLayoutProperties:function(){return this.__cC||this.__cD;
},clearLayoutProperties:function(){delete this.__cC;
},updateLayoutProperties:function(Y){var ba=this._getLayout();

if(ba){var bb;
ba.invalidateChildrenCache();
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
},clone:function(){var bc=qx.core.Object.prototype.clone.call(this);
var bd=this.__cC;

if(bd){bc.__cC=qx.lang.Object.clone(bd);
}return bc;
}},destruct:function(){this.$$parent=this.$$subparent=this.__cC=this.__cx=this.__cB=this.__cz=null;
}});
})();
(function(){var bY="px",bX="Boolean",bW="qx.event.type.Drag",bV="qx.event.type.Mouse",bU="visible",bT="qx.event.type.Focus",bS="Integer",bR="qx.event.type.Touch",bQ="qx.event.type.Data",bP="excluded",bx="_applyPadding",bw="qx.event.type.Event",bv="on",bu="hidden",bt="engine.name",bs="contextmenu",br="String",bq="tabIndex",bp="focused",bo="changeVisibility",cg="mshtml",ch="hovered",ce="qx.event.type.KeySequence",cf="absolute",cc="backgroundColor",cd="drag",ca="div",cb="disabled",ci="move",cj="dragstart",bI="qx.dynlocale",bH="dragchange",bK="dragend",bJ="resize",bM="Decorator",bL="zIndex",bO="opacity",bN="default",bG="Color",bF="changeToolTipText",c="beforeContextmenuOpen",d="_applyNativeContextMenu",f="_applyBackgroundColor",g="event.pointer",h="__cP",j="_applyFocusable",k="changeShadow",m="qx.event.type.KeyInput",n="createChildControl",o="__cK",cn="Font",cm="_applyShadow",cl="_applyEnabled",ck="_applySelectable",cr="Number",cq="_applyKeepActive",cp="__cN",co="_applyVisibility",ct="__cJ",cs="repeat",N="qxDraggable",O="syncAppearance",L="paddingLeft",M="_applyDroppable",R="__cR",S="#",P="qx.event.type.MouseWheel",Q="_applyCursor",J="_applyDraggable",K="__cE",w="changeTextColor",v="$$widget",y="changeContextMenu",x="paddingTop",s="changeSelectable",r="hideFocus",u="none",t="outline",q="_applyAppearance",p="_applyOpacity",X="url(",Y=")",ba="qx.ui.core.Widget",bb="_applyFont",T="cursor",U="qxDroppable",V="changeZIndex",W="changeEnabled",bc="changeFont",bd="_applyDecorator",G="_applyZIndex",F="_applyTextColor",E="qx.ui.menu.Menu",D="_applyToolTipText",C="true",B="widget",A="changeDecorator",z="__cF",I="_applyTabIndex",H="changeAppearance",be="shorthand",bf="/",bg="",bh="_applyContextMenu",bi="paddingBottom",bj="changeNativeContextMenu",bk="undefined",bl="qx.ui.tooltip.ToolTip",bm="qxKeepActive",bn="_applyKeepFocus",bB="paddingRight",bA="changeBackgroundColor",bz="changeLocale",by="qxKeepFocus",bE="__cI",bD="opera",bC="qx/static/blank.gif";
qx.Class.define(ba,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__cE=this._createContainerElement();
this.__cF=this.__cQ();
this.__cE.add(this.__cF);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bw,disappear:bw,createChildControl:bQ,resize:bQ,move:bQ,syncAppearance:bQ,mousemove:bV,mouseover:bV,mouseout:bV,mousedown:bV,mouseup:bV,click:bV,dblclick:bV,contextmenu:bV,beforeContextmenuOpen:bQ,mousewheel:P,touchstart:bR,touchend:bR,touchmove:bR,touchcancel:bR,tap:bR,swipe:bR,keyup:ce,keydown:ce,keypress:ce,keyinput:m,focus:bT,blur:bT,focusin:bT,focusout:bT,activate:bT,deactivate:bT,capture:bw,losecapture:bw,drop:bW,dragleave:bW,dragover:bW,drag:bW,dragstart:bW,dragend:bW,dragchange:bW,droprequest:bW},properties:{paddingTop:{check:bS,init:0,apply:bx,themeable:true},paddingRight:{check:bS,init:0,apply:bx,themeable:true},paddingBottom:{check:bS,init:0,apply:bx,themeable:true},paddingLeft:{check:bS,init:0,apply:bx,themeable:true},padding:{group:[x,bB,bi,L],mode:be,themeable:true},zIndex:{nullable:true,init:null,apply:G,event:V,check:bS,themeable:true},decorator:{nullable:true,init:null,apply:bd,event:A,check:bM,themeable:true},shadow:{nullable:true,init:null,apply:cm,event:k,check:bM,themeable:true},backgroundColor:{nullable:true,check:bG,apply:f,event:bA,themeable:true},textColor:{nullable:true,check:bG,apply:F,event:w,themeable:true,inheritable:true},font:{nullable:true,apply:bb,check:cn,event:bc,themeable:true,inheritable:true,dereference:true},opacity:{check:cr,apply:p,themeable:true,nullable:true,init:null},cursor:{check:br,apply:Q,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bl,nullable:true},toolTipText:{check:br,nullable:true,event:bF,apply:D},toolTipIcon:{check:br,nullable:true,event:bF},blockToolTip:{check:bX,init:false},visibility:{check:[bU,bu,bP],init:bU,apply:co,event:bo},enabled:{init:true,check:bX,inheritable:true,apply:cl,event:W},anonymous:{init:false,check:bX},tabIndex:{check:bS,nullable:true,apply:I},focusable:{check:bX,init:false,apply:j},keepFocus:{check:bX,init:false,apply:bn},keepActive:{check:bX,init:false,apply:cq},draggable:{check:bX,init:false,apply:J},droppable:{check:bX,init:false,apply:M},selectable:{check:bX,init:false,event:s,apply:ck},contextMenu:{check:E,apply:bh,nullable:true,event:y},nativeContextMenu:{check:bX,init:false,themeable:true,event:bj,apply:d},appearance:{check:br,init:B,apply:q,event:H}},statics:{DEBUG:false,getWidgetByElement:function(cu,cv){while(cu){var cw=cu.$$widget;
if(cw!=null){var cx=qx.core.ObjectRegistry.fromHashCode(cw);
if(!cv||!cx.getAnonymous()){return cx;
}}try{cu=cu.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cy){while(cy){if(parent==cy){return true;
}cy=cy.getLayoutParent();
}return false;
},__cG:new qx.ui.core.DecoratorFactory(),__cH:new qx.ui.core.DecoratorFactory()},members:{__cE:null,__cF:null,__cI:null,__cJ:null,__cK:null,__cL:null,__cM:null,__cN:null,_getLayout:function(){return this.__cN;
},_setLayout:function(cz){if(this.__cN){this.__cN.connectToWidget(null);
}
if(cz){cz.connectToWidget(this);
}this.__cN=cz;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cA=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cA);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cA);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__cO:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cB=qx.theme.manager.Decoration.getInstance();
var cD=cB.resolve(a).getInsets();
var cC=cB.resolve(b).getInsets();

if(cD.top!=cC.top||cD.right!=cC.right||cD.bottom!=cC.bottom||cD.left!=cC.left){return true;
}return false;
},renderLayout:function(cE,top,cF,cG){var cP=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,cE,top,cF,cG);
if(!cP){return null;
}var cI=this.getContainerElement();
var content=this.getContentElement();
var cM=cP.size||this._updateInsets;
var cQ=bY;
var cN={};
if(cP.position){cN.left=cE+cQ;
cN.top=top+cQ;
}if(cP.size){cN.width=cF+cQ;
cN.height=cG+cQ;
}
if(cP.position||cP.size){cI.setStyles(cN);
}
if(cM||cP.local||cP.margin){var cH=this.getInsets();
var innerWidth=cF-cH.left-cH.right;
var innerHeight=cG-cH.top-cH.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var cK={};

if(this._updateInsets){cK.left=cH.left+cQ;
cK.top=cH.top+cQ;
}
if(cM){cK.width=innerWidth+cQ;
cK.height=innerHeight+cQ;
}
if(cM||this._updateInsets){content.setStyles(cK);
}
if(cP.size){var cO=this.__cK;

if(cO){cO.setStyles({width:cF+bY,height:cG+bY});
}}
if(cP.size||this._updateInsets){if(this.__cI){this.__cI.resize(cF,cG);
}}
if(cP.size){if(this.__cJ){var cH=this.__cJ.getInsets();
var cL=cF+cH.left+cH.right;
var cJ=cG+cH.top+cH.bottom;
this.__cJ.resize(cL,cJ);
}}
if(cM||cP.local||cP.margin){if(this.__cN&&this.hasLayoutChildren()){this.__cN.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cP.position&&this.hasListener(ci)){this.fireDataEvent(ci,this.getBounds());
}
if(cP.size&&this.hasListener(bJ)){this.fireDataEvent(bJ,this.getBounds());
}delete this._updateInsets;
return cP;
},__cP:null,clearSeparators:function(){var cS=this.__cP;

if(!cS){return;
}var cT=qx.ui.core.Widget.__cG;
var content=this.getContentElement();
var cR;

for(var i=0,l=cS.length;i<l;i++){cR=cS[i];
cT.poolDecorator(cR);
content.remove(cR);
}cS.length=0;
},renderSeparator:function(cU,cV){var cW=qx.ui.core.Widget.__cG.getDecoratorElement(cU);
this.getContentElement().add(cW);
cW.resize(cV.width,cV.height);
cW.setStyles({left:cV.left+bY,top:cV.top+bY});
if(!this.__cP){this.__cP=[cW];
}else{this.__cP.push(cW);
}},_computeSizeHint:function(){var de=this.getWidth();
var dd=this.getMinWidth();
var cY=this.getMaxWidth();
var dc=this.getHeight();
var da=this.getMinHeight();
var db=this.getMaxHeight();
var df=this._getContentHint();
var cX=this.getInsets();
var dh=cX.left+cX.right;
var dg=cX.top+cX.bottom;

if(de==null){de=df.width+dh;
}
if(dc==null){dc=df.height+dg;
}
if(dd==null){dd=dh;

if(df.minWidth!=null){dd+=df.minWidth;
if(dd>cY&&cY!=null){dd=cY;
}}}
if(da==null){da=dg;

if(df.minHeight!=null){da+=df.minHeight;
if(da>db&&db!=null){da=db;
}}}
if(cY==null){if(df.maxWidth==null){cY=Infinity;
}else{cY=df.maxWidth+dh;
if(cY<dd&&dd!=null){cY=dd;
}}}
if(db==null){if(df.maxHeight==null){db=Infinity;
}else{db=df.maxHeight+dg;
if(db<da&&da!=null){db=da;
}}}return {width:de,minWidth:dd,maxWidth:cY,height:dc,minHeight:da,maxHeight:db};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__cN){this.__cN.invalidateLayoutCache();
}},_getContentHint:function(){var dj=this.__cN;

if(dj){if(this.hasLayoutChildren()){var di;
var dk=dj.getSizeHint();
return dk;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dl){var dq=this.getInsets();
var dt=dq.left+dq.right;
var ds=dq.top+dq.bottom;
var dr=dl-dt;
var dn=this._getLayout();

if(dn&&dn.hasHeightForWidth()){var dm=dn.getHeightForWidth(dl);
}else{dm=this._getContentHeightForWidth(dr);
}var dp=dm+ds;
return dp;
},_getContentHeightForWidth:function(du){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dw=this.getPaddingRight();
var dy=this.getPaddingBottom();
var dx=this.getPaddingLeft();

if(this.__cI){var dv=this.__cI.getInsets();
top+=dv.top;
dw+=dv.right;
dy+=dv.bottom;
dx+=dv.left;
}return {"top":top,"right":dw,"bottom":dy,"left":dx};
},getInnerSize:function(){var dA=this.getBounds();

if(!dA){return null;
}var dz=this.getInsets();
return {width:dA.width-dz.left-dz.right,height:dA.height-dz.top-dz.bottom};
},show:function(){this.setVisibility(bU);
},hide:function(){this.setVisibility(bu);
},exclude:function(){this.setVisibility(bP);
},isVisible:function(){return this.getVisibility()===bU;
},isHidden:function(){return this.getVisibility()!==bU;
},isExcluded:function(){return this.getVisibility()===bP;
},isSeeable:function(){var dC=this.getContainerElement().getDomElement();

if(dC){return dC.offsetWidth>0;
}var dB=this;

do{if(!dB.isVisible()){return false;
}
if(dB.isRootWidget()){return true;
}dB=dB.getLayoutParent();
}while(dB);
return false;
},_createContainerElement:function(){var dE={"$$widget":this.toHashCode()};
var dD={zIndex:0,position:cf};
return new qx.html.Element(ca,dD,dE);
},__cQ:function(){var dF=this._createContentElement();
dF.setStyles({"position":cf,"zIndex":10});
return dF;
},_createContentElement:function(){return new qx.html.Element(ca,{overflowX:bu,overflowY:bu});
},getContainerElement:function(){return this.__cE;
},getContentElement:function(){return this.__cF;
},getDecoratorElement:function(){return this.__cI||null;
},getShadowElement:function(){return this.__cJ||null;
},__cR:null,getLayoutChildren:function(){var dH=this.__cR;

if(!dH){return this.__cS;
}var dI;

for(var i=0,l=dH.length;i<l;i++){var dG=dH[i];

if(dG.hasUserBounds()||dG.isExcluded()){if(dI==null){dI=dH.concat();
}qx.lang.Array.remove(dI,dG);
}}return dI||dH;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var dJ=this.__cN;

if(dJ){dJ.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var dK=this.__cR;

if(!dK){return false;
}var dL;

for(var i=0,l=dK.length;i<l;i++){dL=dK[i];

if(!dL.hasUserBounds()&&!dL.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__cS:[],_getChildren:function(){return this.__cR||this.__cS;
},_indexOf:function(dM){var dN=this.__cR;

if(!dN){return -1;
}return dN.indexOf(dM);
},_hasChildren:function(){var dO=this.__cR;
return dO!=null&&(!!dO[0]);
},addChildrenToQueue:function(dP){var dQ=this.__cR;

if(!dQ){return;
}var dR;

for(var i=0,l=dQ.length;i<l;i++){dR=dQ[i];
dP.push(dR);
dR.addChildrenToQueue(dP);
}},_add:function(dS,dT){if(dS.getLayoutParent()==this){qx.lang.Array.remove(this.__cR,dS);
}
if(this.__cR){this.__cR.push(dS);
}else{this.__cR=[dS];
}this.__cT(dS,dT);
},_addAt:function(dU,dV,dW){if(!this.__cR){this.__cR=[];
}if(dU.getLayoutParent()==this){qx.lang.Array.remove(this.__cR,dU);
}var dX=this.__cR[dV];

if(dX===dU){dU.setLayoutProperties(dW);
}
if(dX){qx.lang.Array.insertBefore(this.__cR,dU,dX);
}else{this.__cR.push(dU);
}this.__cT(dU,dW);
},_addBefore:function(dY,ea,eb){if(dY==ea){return;
}
if(!this.__cR){this.__cR=[];
}if(dY.getLayoutParent()==this){qx.lang.Array.remove(this.__cR,dY);
}qx.lang.Array.insertBefore(this.__cR,dY,ea);
this.__cT(dY,eb);
},_addAfter:function(ec,ed,ee){if(ec==ed){return;
}
if(!this.__cR){this.__cR=[];
}if(ec.getLayoutParent()==this){qx.lang.Array.remove(this.__cR,ec);
}qx.lang.Array.insertAfter(this.__cR,ec,ed);
this.__cT(ec,ee);
},_remove:function(ef){if(!this.__cR){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__cR,ef);
this.__cU(ef);
},_removeAt:function(eg){if(!this.__cR){throw new Error("This widget has no children!");
}var eh=this.__cR[eg];
qx.lang.Array.removeAt(this.__cR,eg);
this.__cU(eh);
return eh;
},_removeAll:function(){if(!this.__cR){return [];
}var ei=this.__cR.concat();
this.__cR.length=0;

for(var i=ei.length-1;i>=0;i--){this.__cU(ei[i]);
}qx.ui.core.queue.Layout.add(this);
return ei;
},_afterAddChild:null,_afterRemoveChild:null,__cT:function(ej,ek){var parent=ej.getLayoutParent();

if(parent&&parent!=this){parent._remove(ej);
}ej.setLayoutParent(this);
if(ek){ej.setLayoutProperties(ek);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(ej);
}},__cU:function(em){if(em.getLayoutParent()!==this){throw new Error("Remove Error: "+em+" is not a child of this widget!");
}em.setLayoutParent(null);
if(this.__cN){this.__cN.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(em);
}},capture:function(en){this.getContainerElement().capture(en);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eo,ep,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__cK){return;
}var eq=this.__cK=new qx.html.Element;
eq.setStyles({position:cf,top:0,left:0,zIndex:7});
var er=this.getBounds();

if(er){this.__cK.setStyles({width:er.width+bY,height:er.height+bY});
}if((qx.core.Environment.get(bt)==cg)){eq.setStyles({backgroundImage:X+qx.util.ResourceManager.getInstance().toUri(bC)+Y,backgroundRepeat:cs});
}this.getContainerElement().add(eq);
},_applyDecorator:function(es,et){var ew=qx.ui.core.Widget.__cG;
var eu=this.getContainerElement();
if(!this.__cK&&!qx.core.Environment.get(g)){this._createProtectorElement();
}if(et){eu.remove(this.__cI);
ew.poolDecorator(this.__cI);
}if(es){var ev=this.__cI=ew.getDecoratorElement(es);
ev.setStyle(bL,5);
eu.add(ev);
}else{delete this.__cI;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__cO(et,es)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(es){var ex=this.getBounds();

if(ex){ev.resize(ex.width,ex.height);
this.__cK&&
this.__cK.setStyles({width:ex.width+bY,height:ex.height+bY});
}}},_applyShadow:function(ey,ez){var eG=qx.ui.core.Widget.__cH;
var eB=this.getContainerElement();
if(ez){eB.remove(this.__cJ);
eG.poolDecorator(this.__cJ);
}if(ey){var eD=this.__cJ=eG.getDecoratorElement(ey);
eB.add(eD);
var eF=eD.getInsets();
eD.setStyles({left:(-eF.left)+bY,top:(-eF.top)+bY});
var eE=this.getBounds();

if(eE){var eC=eE.width+eF.left+eF.right;
var eA=eE.height+eF.top+eF.bottom;
eD.resize(eC,eA);
}eD.tint(null);
}else{delete this.__cJ;
}},_applyToolTipText:function(eH,eI){if(qx.core.Environment.get(bI)){if(this.__cM){return;
}var eJ=qx.locale.Manager.getInstance();
this.__cM=eJ.addListener(bz,function(){var eK=this.getToolTipText();

if(eK&&eK.translate){this.setToolTipText(eK.translate());
}},this);
}},_applyTextColor:function(eL,eM){},_applyZIndex:function(eN,eO){this.getContainerElement().setStyle(bL,eN==null?0:eN);
},_applyVisibility:function(eP,eQ){var eR=this.getContainerElement();

if(eP===bU){eR.show();
}else{eR.hide();
}var parent=this.$$parent;

if(parent&&(eQ==null||eP==null||eQ===bP||eP===bP)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(eS,eT){this.getContainerElement().setStyle(bO,eS==1?null:eS);
if((qx.core.Environment.get(bt)==cg)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var eU=(eS==1||eS==null)?null:0.99;
this.getContentElement().setStyle(bO,eU);
}}},_applyCursor:function(eV,eW){if(eV==null&&!this.isSelectable()){eV=bN;
}this.getContainerElement().setStyle(T,eV,qx.core.Environment.get(bt)==bD);
},_applyBackgroundColor:function(eX,eY){var fa=this.getBackgroundColor();
var fc=this.getContainerElement();

if(this.__cI){this.__cI.tint(fa);
fc.setStyle(cc,null);
}else{var fb=qx.theme.manager.Color.getInstance().resolve(fa);
fc.setStyle(cc,fb);
}},_applyFont:function(fd,fe){},__cV:null,$$stateChanges:null,_forwardStates:null,hasState:function(ff){var fg=this.__cV;
return !!fg&&!!fg[ff];
},addState:function(fh){var fi=this.__cV;

if(!fi){fi=this.__cV={};
}
if(fi[fh]){return;
}this.__cV[fh]=true;
if(fh===ch){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fl=this.__cY;

if(forward&&forward[fh]&&fl){var fj;

for(var fk in fl){fj=fl[fk];

if(fj instanceof qx.ui.core.Widget){fl[fk].addState(fh);
}}}},removeState:function(fm){var fn=this.__cV;

if(!fn||!fn[fm]){return;
}delete this.__cV[fm];
if(fm===ch){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fq=this.__cY;

if(forward&&forward[fm]&&fq){for(var fp in fq){var fo=fq[fp];

if(fo instanceof qx.ui.core.Widget){fo.removeState(fm);
}}}},replaceState:function(fr,fs){var ft=this.__cV;

if(!ft){ft=this.__cV={};
}
if(!ft[fs]){ft[fs]=true;
}
if(ft[fr]){delete ft[fr];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fw=this.__cY;

if(forward&&forward[fs]&&fw){for(var fv in fw){var fu=fw[fv];

if(fu instanceof qx.ui.core.Widget){fu.replaceState(fr,fs);
}}}},__cW:null,__cX:null,syncAppearance:function(){var fB=this.__cV;
var fA=this.__cW;
var fC=qx.theme.manager.Appearance.getInstance();
var fy=qx.core.Property.$$method.setThemed;
var fG=qx.core.Property.$$method.resetThemed;
if(this.__cX){delete this.__cX;
if(fA){var fx=fC.styleFrom(fA,fB,null,this.getAppearance());
fA=null;
}}if(!fA){var fz=this;
var fF=[];

do{fF.push(fz.$$subcontrol||fz.getAppearance());
}while(fz=fz.$$subparent);
fA=fF.reverse().join(bf).replace(/#[0-9]+/g,bg);
this.__cW=fA;
}var fD=fC.styleFrom(fA,fB,null,this.getAppearance());

if(fD){var fE;

if(fx){for(var fE in fx){if(fD[fE]===undefined){this[fG[fE]]();
}}}for(var fE in fD){fD[fE]===undefined?this[fG[fE]]():this[fy[fE]](fD[fE]);
}}else if(fx){for(var fE in fx){this[fG[fE]]();
}}this.fireDataEvent(O,this.__cV);
},_applyAppearance:function(fH,fI){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__cL){qx.ui.core.queue.Appearance.add(this);
this.__cL=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__cX=true;
qx.ui.core.queue.Appearance.add(this);
var fL=this.__cY;

if(fL){var fJ;

for(var fK in fL){fJ=fL[fK];

if(fJ instanceof qx.ui.core.Widget){fJ.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fM=this;

while(fM.getAnonymous()){fM=fM.getLayoutParent();

if(!fM){return null;
}}return fM;
},getFocusTarget:function(){var fN=this;

if(!fN.getEnabled()){return null;
}
while(fN.getAnonymous()||!fN.getFocusable()){fN=fN.getLayoutParent();

if(!fN||!fN.getEnabled()){return null;
}}return fN;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(fO,fP){var fQ=this.getFocusElement();
if(fO){var fR=this.getTabIndex();

if(fR==null){fR=1;
}fQ.setAttribute(bq,fR);
if((qx.core.Environment.get(bt)==cg)){fQ.setAttribute(r,C);
}else{fQ.setStyle(t,u);
}}else{if(fQ.isNativelyFocusable()){fQ.setAttribute(bq,-1);
}else if(fP){fQ.setAttribute(bq,null);
}}},_applyKeepFocus:function(fS){var fT=this.getFocusElement();
fT.setAttribute(by,fS?bv:null);
},_applyKeepActive:function(fU){var fV=this.getContainerElement();
fV.setAttribute(bm,fU?bv:null);
},_applyTabIndex:function(fW){if(fW==null){fW=1;
}else if(fW<1||fW>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&fW!=null){this.getFocusElement().setAttribute(bq,fW);
}},_applySelectable:function(fX,fY){if(fY!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(fX);
},_applyEnabled:function(ga,gb){if(ga===false){this.addState(cb);
this.removeState(ch);
if(this.isFocusable()){this.removeState(bp);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(cb);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gc,gd,name){},_applyContextMenu:function(ge,gf){if(gf){gf.removeState(bs);

if(gf.getOpener()==this){gf.resetOpener();
}
if(!ge){this.removeListener(bs,this._onContextMenuOpen);
gf.removeListener(bo,this._onBeforeContextMenuOpen,this);
}}
if(ge){ge.setOpener(this);
ge.addState(bs);

if(!gf){this.addListener(bs,this._onContextMenuOpen);
ge.addListener(bo,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==bU&&this.hasListener(c)){this.fireDataEvent(c,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gg,gh){if(!this.isEnabled()&&gg===true){gg=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gg){this.addListener(cj,this._onDragStart);
this.addListener(cd,this._onDrag);
this.addListener(bK,this._onDragEnd);
this.addListener(bH,this._onDragChange);
}else{this.removeListener(cj,this._onDragStart);
this.removeListener(cd,this._onDrag);
this.removeListener(bK,this._onDragEnd);
this.removeListener(bH,this._onDragChange);
}this.getContainerElement().setAttribute(N,gg?bv:null);
},_applyDroppable:function(gi,gj){if(!this.isEnabled()&&gi===true){gi=false;
}this.getContainerElement().setAttribute(U,gi?bv:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bN);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gk=qx.ui.core.DragDropCursor.getInstance();
var gl=e.getCurrentAction();
gl?gk.setAction(gl):gk.resetAction();
},visualizeFocus:function(){this.addState(bp);
},visualizeBlur:function(){this.removeState(bp);
},scrollChildIntoView:function(gm,gn,go,gp){gp=typeof gp==bk?true:gp;
var gq=qx.ui.core.queue.Layout;
var parent;
if(gp){gp=!gq.isScheduled(gm);
parent=gm.getLayoutParent();
if(gp&&parent){gp=!gq.isScheduled(parent);
if(gp){parent.getChildren().forEach(function(gr){gp=gp&&!gq.isScheduled(gr);
});
}}}this.scrollChildIntoViewX(gm,gn,gp);
this.scrollChildIntoViewY(gm,go,gp);
},scrollChildIntoViewX:function(gs,gt,gu){this.getContentElement().scrollChildIntoViewX(gs.getContainerElement(),gt,gu);
},scrollChildIntoViewY:function(gv,gw,gx){this.getContentElement().scrollChildIntoViewY(gv.getContainerElement(),gw,gx);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gy){if(!this.__cY){return false;
}return !!this.__cY[gy];
},__cY:null,_getCreatedChildControls:function(){return this.__cY;
},getChildControl:function(gz,gA){if(!this.__cY){if(gA){return null;
}this.__cY={};
}var gB=this.__cY[gz];

if(gB){return gB;
}
if(gA===true){return null;
}return this._createChildControl(gz);
},_showChildControl:function(gC){var gD=this.getChildControl(gC);
gD.show();
return gD;
},_excludeChildControl:function(gE){var gF=this.getChildControl(gE,true);

if(gF){gF.exclude();
}},_isChildControlVisible:function(gG){var gH=this.getChildControl(gG,true);

if(gH){return gH.isVisible();
}return false;
},_createChildControl:function(gI){if(!this.__cY){this.__cY={};
}else if(this.__cY[gI]){throw new Error("Child control '"+gI+"' already created!");
}var gM=gI.indexOf(S);

if(gM==-1){var gJ=this._createChildControlImpl(gI);
}else{var gJ=this._createChildControlImpl(gI.substring(0,gM),gI.substring(gM+1,gI.length));
}
if(!gJ){throw new Error("Unsupported control: "+gI);
}gJ.$$subcontrol=gI;
gJ.$$subparent=this;
var gK=this.__cV;
var forward=this._forwardStates;

if(gK&&forward&&gJ instanceof qx.ui.core.Widget){for(var gL in gK){if(forward[gL]){gJ.addState(gL);
}}}this.fireDataEvent(n,gJ);
return this.__cY[gI]=gJ;
},_createChildControlImpl:function(gN,gO){return null;
},_disposeChildControls:function(){var gS=this.__cY;

if(!gS){return;
}var gQ=qx.ui.core.Widget;

for(var gR in gS){var gP=gS[gR];

if(!gQ.contains(this,gP)){gP.destroy();
}else{gP.dispose();
}}delete this.__cY;
},_findTopControl:function(){var gT=this;

while(gT){if(!gT.$$subparent){return gT;
}gT=gT.$$subparent;
}return null;
},getContainerLocation:function(gU){var gV=this.getContainerElement().getDomElement();
return gV?qx.bom.element.Location.get(gV,gU):null;
},getContentLocation:function(gW){var gX=this.getContentElement().getDomElement();
return gX?qx.bom.element.Location.get(gX,gW):null;
},setDomLeft:function(gY){var ha=this.getContainerElement().getDomElement();

if(ha){ha.style.left=gY+bY;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hb){var hc=this.getContainerElement().getDomElement();

if(hc){hc.style.top=hb+bY;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(hd,top){var he=this.getContainerElement().getDomElement();

if(he){he.style.left=hd+bY;
he.style.top=top+bY;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hf=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hg=this.getChildren();

for(var i=0,l=hg.length;i<l;i++){hf.add(hg[i].clone());
}}return hf;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bI)){if(this.__cM){qx.locale.Manager.getInstance().removeListenerById(this.__cM);
}}this.getContainerElement().setAttribute(v,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var hi=qx.ui.core.Widget;
var hh=this.getContainerElement();

if(this.__cI){hh.remove(this.__cI);
hi.__cG.poolDecorator(this.__cI);
}
if(this.__cJ){hh.remove(this.__cJ);
hi.__cH.poolDecorator(this.__cJ);
}this.clearSeparators();
this.__cI=this.__cJ=this.__cP=null;
}else{this._disposeArray(h);
this._disposeObjects(bE,ct);
}this._disposeArray(R);
this.__cV=this.__cY=null;
this._disposeObjects(cp,K,z,o);
}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="bottom-left",s="top-left",r="top",q="right",p="_applyRich",n="_applyIcon",o="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(z,A){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(z!=null){this.setLabel(z);
}
if(A!=null){this.setIcon(A);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:p},icon:{check:f,apply:n,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:o,event:c},iconPosition:{init:e,check:[r,q,b,e,s,t],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(B,C){var D;

switch(B){case j:D=new qx.ui.basic.Label(this.getLabel());
D.setAnonymous(true);
D.setRich(this.getRich());
this._add(D);

if(this.getLabel()==null||this.getShow()===i){D.exclude();
}break;
case i:D=new qx.ui.basic.Image(this.getIcon());
D.setAnonymous(true);
this._addAt(D,0);

if(this.getIcon()==null||this.getShow()===j){D.exclude();
}break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(E,F){var G=this.getChildControl(j,true);

if(G){G.setValue(E);
}this._handleLabel();
},_applyRich:function(H,I){var J=this.getChildControl(j,true);

if(J){J.setRich(H);
}},_applyIcon:function(K,L){var M=this.getChildControl(i,true);

if(M){M.setSource(K);
}this._handleIcon();
},_applyGap:function(N,O){this._getLayout().setGap(N);
},_applyShow:function(P,Q){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(R,S){this._getLayout().setIconPosition(R);
},_applyCenter:function(T,U){this._getLayout().setCenter(T);
},_applySelectable:function(V,W){qx.ui.core.Widget.prototype._applySelectable.call(this,V,W);
var X=this.getChildControl(j,true);

if(X){this.getChildControl(j).setSelectable(V);
}}}});
})();
(function(){var g="middle",f="qx.ui.layout.Util",e="left",d="center",c="top",b="bottom",a="right";
qx.Class.define(f,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(h,j,k){var n,r,m,s;
var o=j>k;
var t=Math.abs(j-k);
var u,p;
var q={};

for(r in h){n=h[r];
q[r]={potential:o?n.max-n.value:n.value-n.min,flex:o?n.flex:1/n.flex,offset:0};
}while(t!=0){s=Infinity;
m=0;

for(r in q){n=q[r];

if(n.potential>0){m+=n.flex;
s=Math.min(s,n.potential/n.flex);
}}if(m==0){break;
}s=Math.min(t,s*m)/m;
u=0;

for(r in q){n=q[r];

if(n.potential>0){p=Math.min(t,n.potential,Math.ceil(s*n.flex));
u+=p-s*n.flex;

if(u>=1){u-=1;
p-=1;
}n.potential-=p;

if(o){n.offset+=p;
}else{n.offset-=p;
}t-=p;
}}}return q;
},computeHorizontalAlignOffset:function(v,w,x,y,z){if(y==null){y=0;
}
if(z==null){z=0;
}var A=0;

switch(v){case e:A=y;
break;
case a:A=x-w-z;
break;
case d:A=Math.round((x-w)/2);
if(A<y){A=y;
}else if(A<z){A=Math.max(y,x-w-z);
}break;
}return A;
},computeVerticalAlignOffset:function(B,C,D,E,F){if(E==null){E=0;
}
if(F==null){F=0;
}var G=0;

switch(B){case c:G=E;
break;
case b:G=D-C-F;
break;
case g:G=Math.round((D-C)/2);
if(G<E){G=E;
}else if(G<F){G=Math.max(E,D-C-F);
}break;
}return G;
},collapseMargins:function(H){var I=0,K=0;

for(var i=0,l=arguments.length;i<l;i++){var J=arguments[i];

if(J<0){K=Math.min(K,J);
}else if(J>0){I=Math.max(I,J);
}}return I+K;
},computeHorizontalGaps:function(L,M,N){if(M==null){M=0;
}var O=0;

if(N){O+=L[0].getMarginLeft();

for(var i=1,l=L.length;i<l;i+=1){O+=this.collapseMargins(M,L[i-1].getMarginRight(),L[i].getMarginLeft());
}O+=L[l-1].getMarginRight();
}else{for(var i=1,l=L.length;i<l;i+=1){O+=L[i].getMarginLeft()+L[i].getMarginRight();
}O+=(M*(l-1));
}return O;
},computeVerticalGaps:function(P,Q,R){if(Q==null){Q=0;
}var S=0;

if(R){S+=P[0].getMarginTop();

for(var i=1,l=P.length;i<l;i+=1){S+=this.collapseMargins(Q,P[i-1].getMarginBottom(),P[i].getMarginTop());
}S+=P[l-1].getMarginBottom();
}else{for(var i=1,l=P.length;i<l;i+=1){S+=P[i].getMarginTop()+P[i].getMarginBottom();
}S+=(Q*(l-1));
}return S;
},computeHorizontalSeparatorGaps:function(T,U,V){var Y=qx.theme.manager.Decoration.getInstance().resolve(V);
var X=Y.getInsets();
var W=X.left+X.right;
var ba=0;

for(var i=0,l=T.length;i<l;i++){var bb=T[i];
ba+=bb.getMarginLeft()+bb.getMarginRight();
}ba+=(U+W+U)*(l-1);
return ba;
},computeVerticalSeparatorGaps:function(bc,bd,be){var bh=qx.theme.manager.Decoration.getInstance().resolve(be);
var bg=bh.getInsets();
var bf=bg.top+bg.bottom;
var bi=0;

for(var i=0,l=bc.length;i<l;i++){var bj=bc[i];
bi+=bj.getMarginTop()+bj.getMarginBottom();
}bi+=(bd+bf+bd)*(l-1);
return bi;
},arrangeIdeals:function(bk,bl,bm,bn,bo,bp){if(bl<bk||bo<bn){if(bl<bk&&bo<bn){bl=bk;
bo=bn;
}else if(bl<bk){bo-=(bk-bl);
bl=bk;
if(bo<bn){bo=bn;
}}else if(bo<bn){bl-=(bn-bo);
bo=bn;
if(bl<bk){bl=bk;
}}}
if(bl>bm||bo>bp){if(bl>bm&&bo>bp){bl=bm;
bo=bp;
}else if(bl>bm){bo+=(bl-bm);
bl=bm;
if(bo>bp){bo=bp;
}}else if(bo>bp){bl+=(bo-bp);
bo=bp;
if(bl>bm){bl=bm;
}}}return {begin:bl,end:bo};
}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__gM:null,__gN:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__gM=d;
this.__gN=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__gM=this.__gM;
g.__gN=this.__gN;
return g;
},getOrientation:function(){return this.__gM;
},isLandscape:function(){return this.__gN==c;
},isPortrait:function(){return this.__gN==a;
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__hy=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__hz=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__hA:null,__hy:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__hA);
this.__hA=null;
}else if(p){this.__hA=window.setInterval(this.__hy,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(r){this.setInterval(r);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__hA){window.clearInterval(this.__hA);
}this.__hA=this.__hy=null;
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__fN=u;
this.__fO=u.getWindow();
this.__fP=this.__fO.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fQ:null,__fR:null,__fS:null,__fT:null,__fU:null,__fN:null,__fO:null,__fP:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===
d?
function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===
d?
function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__fV:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__fO,b,qx.event.type.Data,[E||D.type]);
},__fW:function(){var H=[this.__fO,this.__fP,this.__fP.body];
var I=this.__fO;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__fQ=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fP,q,this.__fQ);
Event.addNativeListener(this.__fP,t,this.__fQ);
Event.addNativeListener(this.__fP,r,this.__fQ);
Event.addNativeListener(this.__fP,n,this.__fQ);
Event.addNativeListener(this.__fP,p,this.__fQ);
},_initMoveObserver:function(){this.__fR=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fP,j,this.__fR);
Event.addNativeListener(this.__fP,l,this.__fR);
Event.addNativeListener(this.__fP,k,this.__fR);
},_initWheelObserver:function(){this.__fS=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__fW();
qx.bom.Event.addNativeListener(J.target,J.type,this.__fS);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fP,q,this.__fQ);
Event.removeNativeListener(this.__fP,t,this.__fQ);
Event.removeNativeListener(this.__fP,r,this.__fQ);
Event.removeNativeListener(this.__fP,n,this.__fQ);
Event.removeNativeListener(this.__fP,p,this.__fQ);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fP,j,this.__fR);
Event.removeNativeListener(this.__fP,l,this.__fR);
Event.removeNativeListener(this.__fP,k,this.__fR);
},_stopWheelObserver:function(){var K=this.__fW();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__fS);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__fV(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__fX){this.__fX(M,N,O);
}
if(this.__ga){this.__ga(M,N,O);
}this.__fV(M,N,O);

if(this.__fY){this.__fY(M,N,O);
}
if(this.__gb){this.__gb(M,N,O);
}this.__fT=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__fV(P,o);
}),__fX:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__fV(Q,t,S);
}}},"default":null}),__fY:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__fV(T,p,V);
}},"default":null}),__ga:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__fT==r){this.__fV(W,q,Y);
}else if(X==n){this.__fV(W,r,Y);
}},"default":null}),__gb:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__fU=bc;
break;
case t:if(bc!==this.__fU){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__fU);
this.__fV(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__fN=this.__fO=this.__fP=this.__fU=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var c="engine.version",b="engine.name",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Environment.select(b,{"opera":function(d){if(parseFloat(qx.core.Environment.get(c))<9.5){return (d||window).document.body.clientWidth;
}else{var e=(d||window).document;
return qx.bom.Document.isStandardMode(d)?e.documentElement.clientWidth:e.body.clientWidth;
}},"webkit":function(f){if(parseFloat(qx.core.Environment.get(c))<523.15){return (f||window).innerWidth;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientWidth:g.body.clientWidth;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientWidth:i.body.clientWidth;
}}),getHeight:qx.core.Environment.select(b,{"opera":function(j){if(parseFloat(qx.core.Environment.get(c))<9.5){return (j||window).document.body.clientHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"webkit":function(l){if(parseFloat(qx.core.Environment.get(c))<523.15){return (l||window).innerHeight;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}}),getScrollLeft:qx.core.Environment.select(b,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Environment.select(b,{"mshtml":function(s){var t=(s||window).document;
return t.documentElement.scrollTop||t.body.scrollTop;
},"default":function(u){return (u||window).pageYOffset;
}}),getOrientation:function(v){var w=(v||window).orientation;

if(w==null){w=this.getWidth(v)>this.getHeight(v)?90:0;
}return w;
},isLandscape:function(x){return Math.abs(this.getOrientation(x))==90;
},isPortrait:function(y){var z=this.getOrientation(y);
return (z==0||z==180);
}}});
})();
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__hx:{names:{"class":b,"for":x,html:q,text:(qx.core.Environment.get(h)==l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__hx.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Environment.select(h,{"mshtml":function(D,name){var F=this.__hx;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__hx;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__hx;
name=L.names[name]||name;
if(L.bools[name]){K=!!K;
}if(L.property[name]&&(!(J[name]===undefined)||L.qxProperties[name])){if(K==null){if(L.removeableProperties[name]){J.removeAttribute(name);
return;
}else if(typeof L.propertyDefault[name]!==i){K=L.propertyDefault[name];
}}J[name]=K;
}else{if(K===true){J.setAttribute(name,name);
}else if(K===false||K===null){J.removeAttribute(name);
}else{J.setAttribute(name,K);
}}},reset:function(M,name){this.set(M,name,null);
}}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(b){return this._indexOf(b);
},add:function(c,d){this._add(c,d);
},addAt:function(e,f,g){this._addAt(e,f,g);
},addBefore:function(h,i,j){this._addBefore(h,i,j);
},addAfter:function(k,l,m){this._addAfter(k,l,m);
},remove:function(n){this._remove(n);
},removeAt:function(o){return this._removeAt(o);
},removeAll:function(){return this._removeAll();
}},statics:{remap:function(p){p.getChildren=p._getChildren;
p.hasChildren=p._hasChildren;
p.indexOf=p._indexOf;
p.add=p._add;
p.addAt=p._addAt;
p.addBefore=p._addBefore;
p.addAfter=p._addAfter;
p.remove=p._remove;
p.removeAt=p._removeAt;
p.removeAll=p._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);

if(e!=null){this._setLayout(e);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
},_afterRemoveChild:function(g){this.fireNonBubblingEvent(a,qx.event.type.Data,[g]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__id:[],remove:function(c){qx.lang.Array.remove(this.__id,c);
},add:function(d){var e=this.__id;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return qx.lang.Array.contains(this.__id,f);
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__id;
var h;

for(var i=g.length-1;i>=0;i--){h=g[i];
g.splice(i,1);
if(j.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var c="qx.bom.Selector";
qx.Class.define(c,{statics:{query:null,matches:null}});
(function(){var o=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,v=0,x=Object.prototype.toString,p=false,z=true,t=/\\/g,g=/\W/;
[0,0].sort(function(){z=false;
return 0;
});
var s=function(B,C,D,E){D=D||[];
C=C||document;
var N=C;

if(C.nodeType!==1&&C.nodeType!==9){return [];
}
if(!B||typeof B!=="string"){return D;
}var m,H,F,J,L,I,O,i,P=true,G=s.isXML(C),K=[],M=B;
do{o.exec("");
m=o.exec(M);

if(m){M=m[3];
K.push(m[1]);

if(m[2]){J=m[3];
break;
}}}while(m);

if(K.length>1&&q.exec(B)){if(K.length===2&&k.relative[K[0]]){H=h(K[0]+K[1],C);
}else{H=k.relative[K[0]]?[C]:s(K.shift(),C);

while(K.length){B=K.shift();

if(k.relative[B]){B+=K.shift();
}H=h(B,H);
}}}else{if(!E&&K.length>1&&C.nodeType===9&&!G&&k.match.ID.test(K[0])&&!k.match.ID.test(K[K.length-1])){L=s.find(K.shift(),C,G);
C=L.expr?s.filter(L.expr,L.set)[0]:L.set[0];
}
if(C){L=E?
{expr:K.pop(),set:f(E)}:s.find(K.pop(),K.length===1&&(K[0]==="~"||K[0]==="+")&&C.parentNode?C.parentNode:C,G);
H=L.expr?s.filter(L.expr,L.set):L.set;

if(K.length>0){F=f(H);
}else{P=false;
}
while(K.length){I=K.pop();
O=I;

if(!k.relative[I]){I="";
}else{O=K.pop();
}
if(O==null){O=C;
}k.relative[I](F,O,G);
}}else{F=K=[];
}}
if(!F){F=H;
}
if(!F){s.error(I||B);
}
if(x.call(F)==="[object Array]"){if(!P){D.push.apply(D,F);
}else if(C&&C.nodeType===1){for(i=0;F[i]!=null;i++){if(F[i]&&(F[i]===true||F[i].nodeType===1&&s.contains(C,F[i]))){D.push(H[i]);
}}}else{for(i=0;F[i]!=null;i++){if(F[i]&&F[i].nodeType===1){D.push(H[i]);
}}}}else{f(F,D);
}
if(J){s(J,N,D,E);
s.uniqueSort(D);
}return D;
};
s.uniqueSort=function(Q){if(u){p=z;
Q.sort(u);

if(p){for(var i=1;i<Q.length;i++){if(Q[i]===Q[i-1]){Q.splice(i--,1);
}}}}return Q;
};
s.matches=function(R,S){return s(R,null,null,S);
};
s.matchesSelector=function(T,U){return s(U,null,null,[T]).length>0;
};
s.find=function(V,W,X){var Y;

if(!V){return [];
}
for(var i=0,l=k.order.length;i<l;i++){var bb,ba=k.order[i];

if((bb=k.leftMatch[ba].exec(V))){var bc=bb[1];
bb.splice(1,1);

if(bc.substr(bc.length-1)!=="\\"){bb[1]=(bb[1]||"").replace(t,"");
Y=k.find[ba](bb,W,X);

if(Y!=null){V=V.replace(k.match[ba],"");
break;
}}}}
if(!Y){Y=typeof W.getElementsByTagName!=="undefined"?W.getElementsByTagName("*"):[];
}return {set:Y,expr:V};
};
s.filter=function(bd,be,bf,bg){var bt,bs,bh=bd,bn=[],bi=be,bj=be&&be[0]&&s.isXML(be[0]);

while(bd&&be.length){for(var br in k.filter){if((bt=k.leftMatch[br].exec(bd))!=null&&bt[2]){var bq,bm,bk=k.filter[br],bu=bt[1];
bs=false;
bt.splice(1,1);

if(bu.substr(bu.length-1)==="\\"){continue;
}
if(bi===bn){bn=[];
}
if(k.preFilter[br]){bt=k.preFilter[br](bt,bi,bf,bn,bg,bj);

if(!bt){bs=bq=true;
}else if(bt===true){continue;
}}
if(bt){for(var i=0;(bm=bi[i])!=null;i++){if(bm){bq=bk(bm,bt,i,bi);
var bo=bg^!!bq;

if(bf&&bq!=null){if(bo){bs=true;
}else{bi[i]=false;
}}else if(bo){bn.push(bm);
bs=true;
}}}}
if(bq!==undefined){if(!bf){bi=bn;
}bd=bd.replace(k.match[br],"");

if(!bs){return [];
}break;
}}}if(bd===bh){if(bs==null){s.error(bd);
}else{break;
}}bh=bd;
}return bi;
};
s.error=function(bv){throw "Syntax error, unrecognized expression: "+bv;
};
var k=s.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bw){return bw.getAttribute("href");
},type:function(bx){return bx.getAttribute("type");
}},relative:{"+":function(by,bz){var bA=typeof bz==="string",bC=bA&&!g.test(bz),bD=bA&&!bC;

if(bC){bz=bz.toLowerCase();
}
for(var i=0,l=by.length,bB;i<l;i++){if((bB=by[i])){while((bB=bB.previousSibling)&&bB.nodeType!==1){}by[i]=bD||bB&&bB.nodeName.toLowerCase()===bz?bB||false:bB===bz;
}}
if(bD){s.filter(bz,by,true);
}},">":function(bE,bF){var bH,bG=typeof bF==="string",i=0,l=bE.length;

if(bG&&!g.test(bF)){bF=bF.toLowerCase();

for(;i<l;i++){bH=bE[i];

if(bH){var parent=bH.parentNode;
bE[i]=parent.nodeName.toLowerCase()===bF?parent:false;
}}}else{for(;i<l;i++){bH=bE[i];

if(bH){bE[i]=bG?bH.parentNode:bH.parentNode===bF;
}}
if(bG){s.filter(bF,bE,true);
}}},"":function(bI,bJ,bK){var bN,bL=v++,bM=y;

if(typeof bJ==="string"&&!g.test(bJ)){bJ=bJ.toLowerCase();
bN=bJ;
bM=A;
}bM("parentNode",bJ,bL,bI,bN,bK);
},"~":function(bO,bP,bQ){var bT,bR=v++,bS=y;

if(typeof bP==="string"&&!g.test(bP)){bP=bP.toLowerCase();
bT=bP;
bS=A;
}bS("previousSibling",bP,bR,bO,bT,bQ);
}},find:{ID:function(bU,bV,bW){if(typeof bV.getElementById!=="undefined"&&!bW){var m=bV.getElementById(bU[1]);
return m&&m.parentNode?[m]:[];
}},NAME:function(bX,bY){if(typeof bY.getElementsByName!=="undefined"){var cb=[],ca=bY.getElementsByName(bX[1]);

for(var i=0,l=ca.length;i<l;i++){if(ca[i].getAttribute("name")===bX[1]){cb.push(ca[i]);
}}return cb.length===0?null:cb;
}},TAG:function(cc,cd){if(typeof cd.getElementsByTagName!=="undefined"){return cd.getElementsByTagName(cc[1]);
}}},preFilter:{CLASS:function(ce,cf,cg,ch,ci,cj){ce=" "+ce[1].replace(t,"")+" ";

if(cj){return ce;
}
for(var i=0,ck;(ck=cf[i])!=null;i++){if(ck){if(ci^(ck.className&&(" "+ck.className+" ").replace(/[\t\n\r]/g," ").indexOf(ce)>=0)){if(!cg){ch.push(ck);
}}else if(cg){cf[i]=false;
}}}return false;
},ID:function(cl){return cl[1].replace(t,"");
},TAG:function(cm,cn){return cm[1].replace(t,"").toLowerCase();
},CHILD:function(co){if(co[1]==="nth"){if(!co[2]){s.error(co[0]);
}co[2]=co[2].replace(/^\+|\s*/g,'');
var cp=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(co[2]==="even"&&"2n"||co[2]==="odd"&&"2n+1"||!/\D/.test(co[2])&&"0n+"+co[2]||co[2]);
co[2]=(cp[1]+(cp[2]||1))-0;
co[3]=cp[3]-0;
}else if(co[2]){s.error(co[0]);
}co[0]=v++;
return co;
},ATTR:function(cq,cr,cs,ct,cu,cv){var name=cq[1]=cq[1].replace(t,"");

if(!cv&&k.attrMap[name]){cq[1]=k.attrMap[name];
}cq[4]=(cq[4]||cq[5]||"").replace(t,"");

if(cq[2]==="~="){cq[4]=" "+cq[4]+" ";
}return cq;
},PSEUDO:function(cw,cx,cy,cz,cA){if(cw[1]==="not"){if((o.exec(cw[3])||"").length>1||/^\w/.test(cw[3])){cw[3]=s(cw[3],null,null,cx);
}else{var cB=s.filter(cw[3],cx,cy,true^cA);

if(!cy){cz.push.apply(cz,cB);
}return false;
}}else if(k.match.POS.test(cw[0])||k.match.CHILD.test(cw[0])){return true;
}return cw;
},POS:function(cC){cC.unshift(true);
return cC;
}},filters:{enabled:function(cD){return cD.disabled===false&&cD.type!=="hidden";
},disabled:function(cE){return cE.disabled===true;
},checked:function(cF){return cF.checked===true;
},selected:function(cG){if(cG.parentNode){cG.parentNode.selectedIndex;
}return cG.selected===true;
},parent:function(cH){return !!cH.firstChild;
},empty:function(cI){return !cI.firstChild;
},has:function(cJ,i,cK){return !!s(cK[3],cJ).length;
},header:function(cL){return (/h\d/i).test(cL.nodeName);
},text:function(cM){return "text"===cM.getAttribute('type');
},radio:function(cN){return "radio"===cN.type;
},checkbox:function(cO){return "checkbox"===cO.type;
},file:function(cP){return "file"===cP.type;
},password:function(cQ){return "password"===cQ.type;
},submit:function(cR){return "submit"===cR.type;
},image:function(cS){return "image"===cS.type;
},reset:function(cT){return "reset"===cT.type;
},button:function(cU){return "button"===cU.type||cU.nodeName.toLowerCase()==="button";
},input:function(cV){return (/input|select|textarea|button/i).test(cV.nodeName);
}},setFilters:{first:function(cW,i){return i===0;
},last:function(cX,i,cY,da){return i===da.length-1;
},even:function(db,i){return i%2===0;
},odd:function(dc,i){return i%2===1;
},lt:function(dd,i,de){return i<de[3]-0;
},gt:function(df,i,dg){return i>dg[3]-0;
},nth:function(dh,i,di){return di[3]-0===i;
},eq:function(dj,i,dk){return dk[3]-0===i;
}},filter:{PSEUDO:function(dl,dm,i,dn){var name=dm[1],dp=k.filters[name];

if(dp){return dp(dl,i,dm,dn);
}else if(name==="contains"){return (dl.textContent||dl.innerText||s.getText([dl])||"").indexOf(dm[3])>=0;
}else if(name==="not"){var dq=dm[3];

for(var j=0,l=dq.length;j<l;j++){if(dq[j]===dl){return false;
}}return true;
}else{s.error(name);
}},CHILD:function(dr,ds){var dy=ds[1],dt=dr;

switch(dy){case "only":case "first":while((dt=dt.previousSibling)){if(dt.nodeType===1){return false;
}}
if(dy==="first"){return true;
}dt=dr;
case "last":while((dt=dt.nextSibling)){if(dt.nodeType===1){return false;
}}return true;
case "nth":var dz=ds[2],dv=ds[3];

if(dz===1&&dv===0){return true;
}var dx=ds[0],parent=dr.parentNode;

if(parent&&(parent.sizcache!==dx||!dr.nodeIndex)){var du=0;

for(dt=parent.firstChild;dt;dt=dt.nextSibling){if(dt.nodeType===1){dt.nodeIndex=++du;
}}parent.sizcache=dx;
}var dw=dr.nodeIndex-dv;

if(dz===0){return dw===0;
}else{return (dw%dz===0&&dw/dz>=0);
}}},ID:function(dA,dB){return dA.nodeType===1&&dA.getAttribute("id")===dB;
},TAG:function(dC,dD){return (dD==="*"&&dC.nodeType===1)||dC.nodeName.toLowerCase()===dD;
},CLASS:function(dE,dF){return (" "+(dE.className||dE.getAttribute("class"))+" ").indexOf(dF)>-1;
},ATTR:function(dG,dH){var name=dH[1],dL=k.attrHandle[name]?k.attrHandle[name](dG):dG[name]!=null?dG[name]:dG.getAttribute(name),dK=dL+"",dJ=dH[2],dI=dH[4];
return dL==null?dJ==="!=":dJ==="="?dK===dI:dJ==="*="?dK.indexOf(dI)>=0:dJ==="~="?(" "+dK+" ").indexOf(dI)>=0:!dI?dK&&dL!==false:dJ==="!="?dK!==dI:dJ==="^="?dK.indexOf(dI)===0:dJ==="$="?dK.substr(dK.length-dI.length)===dI:dJ==="|="?dK===dI||dK.substr(0,dI.length+1)===dI+"-":false;
},POS:function(dM,dN,i,dO){var name=dN[2],dP=k.setFilters[name];

if(dP){return dP(dM,i,dN,dO);
}}}};
var q=k.match.POS,d=function(dQ,dR){return "\\"+(dR-0+1);
};

for(var w in k.match){k.match[w]=new RegExp(k.match[w].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
k.leftMatch[w]=new RegExp(/(^(?:.|\r|\n)*?)/.source+k.match[w].source.replace(/\\(\d+)/g,d));
}var f=function(dS,dT){dS=Array.prototype.slice.call(dS,0);

if(dT){dT.push.apply(dT,dS);
return dT;
}return dS;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){f=function(dU,dV){var i=0,dW=dV||[];

if(x.call(dU)==="[object Array]"){Array.prototype.push.apply(dW,dU);
}else{if(typeof dU.length==="number"){for(var l=dU.length;i<l;i++){dW.push(dU[i]);
}}else{for(;dU[i];i++){dW.push(dU[i]);
}}}return dW;
};
}var u,n;

if(document.documentElement.compareDocumentPosition){u=function(a,b){if(a===b){p=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;
}return a.compareDocumentPosition(b)&4?-1:1;
};
}else{u=function(a,b){var ec,ea,ed=[],ee=[],dY=a.parentNode,eb=b.parentNode,dX=dY;
if(a===b){p=true;
return 0;
}else if(dY===eb){return n(a,b);
}else if(!dY){return -1;
}else if(!eb){return 1;
}while(dX){ed.unshift(dX);
dX=dX.parentNode;
}dX=eb;

while(dX){ee.unshift(dX);
dX=dX.parentNode;
}ec=ed.length;
ea=ee.length;
for(var i=0;i<ec&&i<ea;i++){if(ed[i]!==ee[i]){return n(ed[i],ee[i]);
}}return i===ec?n(a,ee[i],-1):n(ed[i],b,1);
};
n=function(a,b,ef){if(a===b){return ef;
}var eg=a.nextSibling;

while(eg){if(eg===b){return -1;
}eg=eg.nextSibling;
}return 1;
};
}s.getText=function(eh){var ej="",ei;

for(var i=0;eh[i];i++){ei=eh[i];
if(ei.nodeType===3||ei.nodeType===4){ej+=ei.nodeValue;
}else if(ei.nodeType!==8){ej+=s.getText(ei.childNodes);
}}return ej;
};
(function(){var em=document.createElement("div"),el="script"+(new Date()).getTime(),ek=document.documentElement;
em.innerHTML="<a name='"+el+"'/>";
ek.insertBefore(em,ek.firstChild);
if(document.getElementById(el)){k.find.ID=function(en,eo,ep){if(typeof eo.getElementById!=="undefined"&&!ep){var m=eo.getElementById(en[1]);
return m?m.id===en[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===en[1]?[m]:undefined:[];
}};
k.filter.ID=function(eq,er){var es=typeof eq.getAttributeNode!=="undefined"&&eq.getAttributeNode("id");
return eq.nodeType===1&&es&&es.nodeValue===er;
};
}ek.removeChild(em);
ek=em=null;
})();
(function(){var et=document.createElement("div");
et.appendChild(document.createComment(""));
if(et.getElementsByTagName("*").length>0){k.find.TAG=function(eu,ev){var ex=ev.getElementsByTagName(eu[1]);
if(eu[1]==="*"){var ew=[];

for(var i=0;ex[i];i++){if(ex[i].nodeType===1){ew.push(ex[i]);
}}ex=ew;
}return ex;
};
}et.innerHTML="<a href='#'></a>";

if(et.firstChild&&typeof et.firstChild.getAttribute!=="undefined"&&et.firstChild.getAttribute("href")!=="#"){k.attrHandle.href=function(ey){return ey.getAttribute("href",2);
};
}et=null;
})();

if(document.querySelectorAll){(function(){var eA=s,ez=document.createElement("div"),eB="__sizzle__";
ez.innerHTML="<p class='TEST'></p>";
if(ez.querySelectorAll&&ez.querySelectorAll(".TEST").length===0){return;
}s=function(eD,eE,eF,eG){eE=eE||document;
if(!eG&&!s.isXML(eE)){var eL=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(eD);

if(eL&&(eE.nodeType===1||eE.nodeType===9)){if(eL[1]){return f(eE.getElementsByTagName(eD),eF);
}else if(eL[2]&&k.find.CLASS&&eE.getElementsByClassName){return f(eE.getElementsByClassName(eL[2]),eF);
}}
if(eE.nodeType===9){if(eD==="body"&&eE.body){return f([eE.body],eF);
}else if(eL&&eL[3]){var eJ=eE.getElementById(eL[3]);
if(eJ&&eJ.parentNode){if(eJ.id===eL[3]){return f([eJ],eF);
}}else{return f([],eF);
}}
try{return f(eE.querySelectorAll(eD),eF);
}catch(eO){}}else if(eE.nodeType===1&&eE.nodeName.toLowerCase()!=="object"){var eN=eE,eI=eE.getAttribute("id"),eK=eI||eB,eH=eE.parentNode,eM=/^\s*[+~]/.test(eD);

if(!eI){eE.setAttribute("id",eK);
}else{eK=eK.replace(/'/g,"\\$&");
}
if(eM&&eH){eE=eE.parentNode;
}
try{if(!eM||eH){return f(eE.querySelectorAll("[id='"+eK+"'] "+eD),eF);
}}catch(eP){}finally{if(!eI){eN.removeAttribute("id");
}}}}return eA(eD,eE,eF,eG);
};

for(var eC in eA){s[eC]=eA[eC];
}ez=null;
})();
}(function(){var eS=document.documentElement,eQ=eS.matchesSelector||eS.mozMatchesSelector||eS.webkitMatchesSelector||eS.msMatchesSelector,eR=false;

try{eQ.call(document.documentElement,"[test!='']:sizzle");
}catch(eT){eR=true;
}
if(eQ){s.matchesSelector=function(eU,eV){eV=eV.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");

if(!s.isXML(eU)){try{if(eR||!k.match.PSEUDO.test(eV)&&!/!=/.test(eV)){return eQ.call(eU,eV);
}}catch(e){}}return s(eV,null,null,[eU]).length>0;
};
}})();
(function(){var eW=document.createElement("div");
eW.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!eW.getElementsByClassName||eW.getElementsByClassName("e").length===0){return;
}eW.lastChild.className="e";

if(eW.getElementsByClassName("e").length===1){return;
}k.order.splice(1,0,"CLASS");
k.find.CLASS=function(eX,eY,fa){if(typeof eY.getElementsByClassName!=="undefined"&&!fa){return eY.getElementsByClassName(eX[1]);
}};
eW=null;
})();
function A(fb,fc,fd,fe,ff,fg){for(var i=0,l=fe.length;i<l;i++){var fi=fe[i];

if(fi){var fh=false;
fi=fi[fb];

while(fi){if(fi.sizcache===fd){fh=fe[fi.sizset];
break;
}
if(fi.nodeType===1&&!fg){fi.sizcache=fd;
fi.sizset=i;
}
if(fi.nodeName.toLowerCase()===fc){fh=fi;
break;
}fi=fi[fb];
}fe[i]=fh;
}}}function y(fj,fk,fl,fm,fn,fo){for(var i=0,l=fm.length;i<l;i++){var fq=fm[i];

if(fq){var fp=false;
fq=fq[fj];

while(fq){if(fq.sizcache===fl){fp=fm[fq.sizset];
break;
}
if(fq.nodeType===1){if(!fo){fq.sizcache=fl;
fq.sizset=i;
}
if(typeof fk!=="string"){if(fq===fk){fp=true;
break;
}}else if(s.filter(fk,[fq]).length>0){fp=fq;
break;
}}fq=fq[fj];
}fm[i]=fp;
}}}
if(document.documentElement.contains){s.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
}else if(document.documentElement.compareDocumentPosition){s.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);
};
}else{s.contains=function(){return false;
};
}s.isXML=function(fr){var fs=(fr?fr.ownerDocument||fr:0).documentElement;
return fs?fs.nodeName!=="HTML":false;
};
var h=function(ft,fu){var fy,fw=[],fv="",fx=fu.nodeType?[fu]:fu;
while((fy=k.match.PSEUDO.exec(ft))){fv+=fy[0];
ft=ft.replace(k.match.PSEUDO,"");
}ft=k.relative[ft]?ft+"*":ft;

for(var i=0,l=fx.length;i<l;i++){s(ft,fx[i],fw);
}return s.filter(fv,fw);
};
var r=qx.bom.Selector;
r.query=function(fz,fA){return s(fz,fA);
};
r.matches=function(fB,fC){return s(fB,null,null,fC);
};
})();
})();
(function(){var h="useraction",g="touchend",f='ie',d="browser.version",c="event.touch",b="qx.ui.core.queue.Manager",a="browser.name";
qx.Class.define(b,{statics:{__hQ:false,__hR:{},__hS:0,MAX_RETRIES:10,scheduleFlush:function(i){var self=qx.ui.core.queue.Manager;
self.__hR[i]=true;

if(!self.__hQ){self.__hX.schedule();
self.__hQ=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__hT){return;
}self.__hT=true;
self.__hX.cancel();
var j=self.__hR;
self.__hU(function(){while(j.visibility||j.widget||j.appearance||j.layout||j.element){if(j.widget){delete j.widget;
qx.ui.core.queue.Widget.flush();
}
if(j.visibility){delete j.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(j.appearance){delete j.appearance;
qx.ui.core.queue.Appearance.flush();
}if(j.widget||j.visibility||j.appearance){continue;
}
if(j.layout){delete j.layout;
qx.ui.core.queue.Layout.flush();
}if(j.widget||j.visibility||j.appearance||j.layout){continue;
}
if(j.element){delete j.element;
qx.html.Element.flush();
}}},function(){self.__hQ=false;
});
self.__hU(function(){if(j.dispose){delete j.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__hT=false;
});
self.__hS=0;
},__hU:function(k,l){var self=qx.ui.core.queue.Manager;

try{k();
}catch(e){self.__hQ=false;
self.__hT=false;
self.__hS+=1;
if(qx.core.Environment.get(a)==f&&qx.core.Environment.get(d)<=7){l();
}
if(self.__hS<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__hS-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{l();
}},__hV:function(e){var m=qx.ui.core.queue.Manager;
if(e.getData()==g){m.PAUSE=true;

if(m.__hW){window.clearTimeout(m.__hW);
}m.__hW=window.setTimeout(function(){m.PAUSE=false;
m.__hW=null;
m.flush();
},500);
}else{m.flush();
}}},defer:function(n){n.__hX=new qx.util.DeferredCall(n.flush);
qx.html.Element._scheduleFlush=n.scheduleFlush;
qx.event.Registration.addListener(window,h,qx.core.Environment.get(c)?n.__hV:n.flush);
}});
})();
(function(){var j="css.textoverflow",i="html.xul",h="div",g="auto",f="0",e="inherit",d="text",c="value",b="",a="engine.name",C="hidden",B="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",A="nowrap",z="ellipsis",y="normal",x="block",w="label",v="px",u="crop",t="gecko",q="end",r="100%",o="visible",p="qx.bom.Label",m="opera",n="engine.version",k="mshtml",l="-1000px",s="absolute";
qx.Class.define(p,{statics:{__lh:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__li:function(){var D=this.__lk(false);
document.body.insertBefore(D,document.body.firstChild);
return this._textElement=D;
},__lj:function(){var E=this.__lk(true);
document.body.insertBefore(E,document.body.firstChild);
return this._htmlElement=E;
},__lk:function(F){var G=qx.bom.Element.create(h);
var H=G.style;
H.width=H.height=g;
H.left=H.top=l;
H.visibility=C;
H.position=s;
H.overflow=o;
H.display=x;

if(F){H.whiteSpace=y;
}else{H.whiteSpace=A;

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var I=document.createElementNS(B,w);
var H=I.style;
H.padding=f;
H.margin=f;
H.width=g;

for(var J in this.__lh){H[J]=e;
}G.appendChild(I);
}}return G;
},__ll:function(K){var L={};

if(K){L.whiteSpace=y;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){L.display=x;
}else{L.overflow=C;
L.whiteSpace=A;
L.textOverflow=z;
if((qx.core.Environment.get(a)==m)){L.OTextOverflow=z;
}}return L;
},create:function(content,M,N){if(!N){N=window;
}
if(M){var O=N.document.createElement(h);
O.useHtml=true;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var O=N.document.createElement(h);
var Q=N.document.createElementNS(B,w);
var P=Q.style;
P.cursor=e;
P.color=e;
P.overflow=C;
P.maxWidth=r;
P.padding=f;
P.margin=f;
P.width=g;
for(var R in this.__lh){Q.style[R]=e;
}Q.setAttribute(u,q);
O.appendChild(Q);
}else{var O=N.document.createElement(h);
qx.bom.element.Style.setStyles(O,this.__ll(M));
}
if(content){this.setValue(O,content);
}return O;
},setValue:function(S,T){T=T||b;

if(S.useHtml){S.innerHTML=T;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){S.firstChild.setAttribute(c,T);
}else{qx.bom.element.Attribute.set(S,d,T);
}},getValue:function(U){if(U.useHtml){return U.innerHTML;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){return U.firstChild.getAttribute(c)||b;
}else{return qx.bom.element.Attribute.get(U,d);
}},getHtmlSize:function(content,V,W){var X=this._htmlElement||this.__lj();
X.style.width=W!=undefined?W+v:g;
X.innerHTML=content;
return this.__lm(X,V);
},getTextSize:function(Y,ba){var bb=this._textElement||this.__li();

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){bb.firstChild.setAttribute(c,Y);
}else{qx.bom.element.Attribute.set(bb,d,Y);
}return this.__lm(bb,ba);
},__lm:function(bc,bd){var be=this.__lh;

if(!bd){bd={};
}
for(var bf in be){bc.style[bf]=bd[bf]||b;
}var bg=qx.bom.element.Dimension.getSize(bc);
if((qx.core.Environment.get(a)==t)){bg.width++;
}if((qx.core.Environment.get(a)==k)&&parseFloat(qx.core.Environment.get(n))>=9){bg.width++;
}return bg;
}}});
})();
(function(){var j="engine.name",i="mousedown",h="mouseup",g="blur",f="focus",e="on",d="selectstart",c="DOMFocusOut",b="focusin",a="focusout",z="DOMFocusIn",y="draggesture",x="qx.event.handler.Focus",w="_applyFocus",v="deactivate",u="textarea",t="_applyActive",s='character',r="input",q="qxSelectable",o="tabIndex",p="off",m="activate",n="mshtml",k="qxKeepFocus",l="qxKeepActive";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);
this._manager=A;
this._window=A.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gU:null,__gV:null,__gW:null,__gX:null,__gY:null,__ha:null,__hb:null,__hc:null,__hd:null,__he:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
var K=qx.bom.Selection.get(J);

if(K.length==0){var L=J.createTextRange();
L.moveStart(s,J.value.length);
L.collapse();
L.select();
}}catch(M){}},0);
}else{try{J.focus();
}catch(N){}}this.setFocus(J);
this.setActive(J);
},activate:function(O){this.setActive(O);
},blur:function(P){try{P.blur();
}catch(Q){}
if(this.getActive()===P){this.resetActive();
}
if(this.getFocus()===P){this.resetFocus();
}},deactivate:function(R){if(this.getActive()===R){this.resetActive();
}},tryActivate:function(S){var T=this.__ht(S);

if(T){this.setActive(T);
}},__hf:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__hg:function(){if(this._windowFocused){this._windowFocused=false;
this.__hf(this._window,null,g,false);
}},__hh:function(){if(!this._windowFocused){this._windowFocused=true;
this.__hf(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__ho,this);
this.__gW=qx.lang.Function.listener(this.__hm,this);
this.__gX=qx.lang.Function.listener(this.__hl,this);
this.__gY=qx.lang.Function.listener(this.__hi,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gU,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gV,true);
qx.bom.Event.addNativeListener(this._window,f,this.__gW,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gX,true);
qx.bom.Event.addNativeListener(this._window,y,this.__gY,true);
},"mshtml":function(){this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__ho,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
this.__hc=qx.lang.Function.listener(this.__hk,this);
this.__ha=qx.lang.Function.listener(this.__hq,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gU);
qx.bom.Event.addNativeListener(this._document,h,this.__gV);
qx.bom.Event.addNativeListener(this._document,b,this.__hb);
qx.bom.Event.addNativeListener(this._document,a,this.__hc);
qx.bom.Event.addNativeListener(this._document,d,this.__ha);
},"webkit":function(){this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__ho,this);
this.__hc=qx.lang.Function.listener(this.__hk,this);
this.__gW=qx.lang.Function.listener(this.__hm,this);
this.__gX=qx.lang.Function.listener(this.__hl,this);
this.__ha=qx.lang.Function.listener(this.__hq,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gU,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gV,true);
qx.bom.Event.addNativeListener(this._document,d,this.__ha,false);
qx.bom.Event.addNativeListener(this._window,c,this.__hc,true);
qx.bom.Event.addNativeListener(this._window,f,this.__gW,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gX,true);
},"opera":function(){this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__ho,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
this.__hc=qx.lang.Function.listener(this.__hk,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gU,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gV,true);
qx.bom.Event.addNativeListener(this._window,z,this.__hb,true);
qx.bom.Event.addNativeListener(this._window,c,this.__hc,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gU,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gV,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__gW,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gX,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__gY,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gU);
qx.bom.Event.removeNativeListener(this._document,h,this.__gV);
qx.bom.Event.removeNativeListener(this._document,b,this.__hb);
qx.bom.Event.removeNativeListener(this._document,a,this.__hc);
qx.bom.Event.removeNativeListener(this._document,d,this.__ha);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gU,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gV,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__ha,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__hc,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__gW,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gX,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gU,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gV,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__hb,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__hc,true);
}}),__hi:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__hu(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__hj:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__hh();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__hs(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__hh();

if(this.__hd){this.setFocus(this.__hd);
delete this.__hd;
}
if(this.__he){this.setActive(this.__he);
delete this.__he;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__hu(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__hk:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__hg();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__hg();
this.__hd=this.getFocus();
this.__he=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__hl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__hg();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__hg();
this.__hd=this.getFocus();
this.__he=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__hm:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__hh();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__hh();

if(this.__hd){this.setFocus(this.__hd);
delete this.__hd;
}
if(this.__he){this.setActive(this.__he);
delete this.__he;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__hn:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__hs(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__hs(bB);

if(bA){if(!this.__hu(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__hu(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__hs(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__hs(bK);

if(!this.__hu(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__ho:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__hp(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__hp(bQ));
},"default":null})),__hp:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__hq:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__hu(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__hr:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__hs:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__hr(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__ht:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__hu:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__hf(cg,cf,v,true);
}
if(cf){this.__hf(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__hf(ci,ch,a,true);
}
if(ch){this.__hf(ch,ci,b,true);
}if(ci){this.__hf(ci,ch,g,false);
}
if(ch){this.__hf(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__hv=null;
},defer:function(cj){qx.event.Registration.addHandler(cj);
var ck=cj.FOCUSABLE_ELEMENTS;

for(var cl in ck){ck[cl.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__dT={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__dT:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__dT[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__dT){return;
}var h=g.classname;
var j=this.__dT[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__dT[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__dT;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__dT;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this._manager=b;
this._window=b.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){},registerEvent:function(f,g,h){},unregisterEvent:function(i,j,k){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var q=this._window;

try{var t=q.document;
}catch(e){return ;
}var r=t.documentElement;
var p=qx.bom.Event.getTarget(e);

if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);
qx.event.Registration.dispatchEvent(q,event);
var s=event.getReturnValue();

if(s!=null){e.returnValue=s;
return s;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var j="",i="ready",h="shutdown",g="engine.name",f="qx.application",d="beforeunload",c="qx.core.Init",b="os.name",a="engine.version";
qx.Class.define(c,{statics:{getApplication:function(){return this.__ik||null;
},ready:function(){if(this.__ik){return;
}
if(qx.core.Environment.get(g)==j){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==j){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==j){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var l=qx.core.Environment.get(f);
var m=qx.Class.getByName(l);

if(m){this.__ik=new m;
var k=new Date;
this.__ik.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-k)+"ms");
var k=new Date;
this.__ik.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-k)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+l);
}},__il:function(e){var n=this.__ik;

if(n){e.setReturnValue(n.close());
}},__im:function(){var o=this.__ik;

if(o){o.terminate();
}}},defer:function(p){qx.event.Registration.addListener(window,i,p.ready,p);
qx.event.Registration.addListener(window,h,p.__im,p);
qx.event.Registration.addListener(window,d,p.__il,p);
}});
})();
(function(){var k="engine.name",j="character",i="EndToEnd",h="input",g="StartToStart",f="textarea",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Environment.select(k,{"mshtml":function(l){return l.selection;
},"default":function(m){return qx.dom.Node.getWindow(m).getSelection();
}}),get:qx.core.Environment.select(k,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));
return o.text;
},"default":function(p){if(this.__hw(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__hw(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__hw(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__hw(A)){var F=qx.bom.Range.get();
if(!A.contains(F.parentElement())){return -1;
}var G=qx.bom.Range.get(A);
var E=A.value.length;
G.moveToBookmark(F.getBookmark());
G.moveEnd(e,E);
return E-G.text.length;
}else{var G=qx.bom.Range.get(A);
var C=G.parentElement();
var H=qx.bom.Range.get();

try{H.moveToElementText(C);
}catch(J){return 0;
}var B=qx.bom.Range.get(qx.dom.Node.getBodyElement(A));
B.setEndPoint(g,G);
B.setEndPoint(i,H);
if(H.compareEndPoints(g,B)==0){return 0;
}var D;
var I=0;

while(true){D=B.moveStart(j,-1);
if(H.compareEndPoints(g,B)==0){break;
}if(D==0){break;
}else{I++;
}}return ++I;
}},"gecko|webkit":function(K){if(this.__hw(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__hw(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__hw(O)){var T=qx.bom.Range.get();
if(!O.contains(T.parentElement())){return -1;
}var U=qx.bom.Range.get(O);
var S=O.value.length;
U.moveToBookmark(T.getBookmark());
U.moveStart(e,-S);
return U.text.length;
}else{var U=qx.bom.Range.get(O);
var Q=U.parentElement();
var V=qx.bom.Range.get();

try{V.moveToElementText(Q);
}catch(X){return 0;
}var S=V.text.length;
var P=qx.bom.Range.get(qx.dom.Node.getBodyElement(O));
P.setEndPoint(i,U);
P.setEndPoint(g,V);
if(V.compareEndPoints(i,P)==0){return S-1;
}var R;
var W=0;

while(true){R=P.moveEnd(j,1);
if(V.compareEndPoints(i,P)==0){break;
}if(R==0){break;
}else{W++;
}}return S-(++W);
}},"gecko|webkit":function(Y){if(this.__hw(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__hw(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__hw:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
},set:qx.core.Environment.select(k,{"mshtml":function(be,bf,bg){var bh;
if(qx.dom.Node.isDocument(be)){be=be.body;
}
if(qx.dom.Node.isElement(be)||qx.dom.Node.isText(be)){switch(be.nodeName.toLowerCase()){case h:case f:case c:if(bg===undefined){bg=be.value.length;
}
if(bf>=0&&bf<=be.value.length&&bg>=0&&bg<=be.value.length){bh=qx.bom.Range.get(be);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
case b:if(bg===undefined){bg=be.nodeValue.length;
}
if(bf>=0&&bf<=be.nodeValue.length&&bg>=0&&bg<=be.nodeValue.length){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.parentNode);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
default:if(bg===undefined){bg=be.childNodes.length-1;
}if(be.childNodes[bf]&&be.childNodes[bg]){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.childNodes[bf]);
bh.collapse(true);
var bi=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bi.moveToElementText(be.childNodes[bg]);
bh.setEndPoint(i,bi);
bh.select();
return true;
}}}return false;
},"default":function(bj,bk,bl){var bp=bj.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bj)&&(bp==h||bp==f)){if(bl===undefined){bl=bj.value.length;
}if(bk>=0&&bk<=bj.value.length&&bl>=0&&bl<=bj.value.length){bj.focus();
bj.select();
bj.setSelectionRange(bk,bl);
return true;
}}else{var bn=false;
var bo=qx.dom.Node.getWindow(bj).getSelection();
var bm=qx.bom.Range.get(bj);
if(qx.dom.Node.isText(bj)){if(bl===undefined){bl=bj.length;
}
if(bk>=0&&bk<bj.length&&bl>=0&&bl<=bj.length){bn=true;
}}else if(qx.dom.Node.isElement(bj)){if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}else if(qx.dom.Node.isDocument(bj)){bj=bj.body;

if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}
if(bn){if(!bo.isCollapsed){bo.collapseToStart();
}bm.setStart(bj,bk);
if(qx.dom.Node.isText(bj)){bm.setEnd(bj,bl);
}else{bm.setEndAfter(bj.childNodes[bl]);
}if(bo.rangeCount>0){bo.removeAllRanges();
}bo.addRange(bm);
return true;
}}return false;
}}),setAll:function(bq){return qx.bom.Selection.set(bq,0);
},clear:qx.core.Environment.select(k,{"mshtml":function(br){var bs=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(br));
var bt=qx.bom.Range.get(br);
var parent=bt.parentElement();
var bu=qx.bom.Range.get(qx.dom.Node.getDocument(br));
if(parent==bu.parentElement()&&parent==br){bs.empty();
}},"default":function(bv){var bx=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bv));
var bz=bv.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bv)&&(bz==h||bz==f)){bv.setSelectionRange(0,0);
qx.bom.Element.blur(bv);
}else if(qx.dom.Node.isDocument(bv)||bz==a){bx.collapse(bv.body?bv.body:bv,0);
}else{var by=qx.bom.Range.get(bv);

if(!by.collapsed){var bA;
var bw=by.commonAncestorContainer;
if(qx.dom.Node.isElement(bv)&&qx.dom.Node.isText(bw)){bA=bw.parentNode;
}else{bA=bw;
}
if(bA==bv){bx.collapse(bv,0);
}}}}})}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__fK=d;
this.__fL={};
qx.event.handler.Appear.__fM[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fM:{},refresh:function(){var e=this.__fM;

for(var f in e){e[f].refresh();
}}},members:{__fK:null,__fL:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__fL;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__fL;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__fL;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__fK.dispatchEvent(w,t);
}}}},destruct:function(){this.__fK=this.__fL=null;
delete qx.event.handler.Appear.__fM[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="line-through",u="overline",t="Color",s="qx.bom.Font",r="Number",q="_applyDecoration",o=" ",p="_applySize",m=",",n="_applyColor";
qx.Class.define(s,{extend:qx.core.Object,construct:function(A,B){qx.core.Object.call(this);

if(A!==undefined){this.setSize(A);
}
if(B!==undefined){this.setFamily(B);
}},statics:{fromString:function(C){var G=new qx.bom.Font();
var E=C.split(/\s+/);
var name=[];
var F;

for(var i=0;i<E.length;i++){switch(F=E[i]){case c:G.setBold(true);
break;
case e:G.setItalic(true);
break;
case j:G.setDecoration(j);
break;
default:var D=parseInt(F,10);

if(D==F||qx.lang.String.contains(F,g)){G.setSize(D);
}else{name.push(F);
}break;
}}
if(name.length>0){G.setFamily(name);
}return G;
},fromConfig:function(H){var I=new qx.bom.Font;
I.set(H);
return I;
},__lp:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2,textColor:k},getDefaultStyles:function(){return this.__lp;
}},properties:{size:{check:z,nullable:true,apply:p},lineHeight:{check:r,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,v,u],nullable:true,apply:q},color:{check:t,nullable:true,apply:n}},members:{__lq:null,__lr:null,__ls:null,__lt:null,__lu:null,__lv:null,__lw:null,_applySize:function(J,K){this.__lq=J===null?null:J+g;
},_applyLineHeight:function(L,M){this.__lv=L===null?null:L;
},_applyFamily:function(N,O){var P=k;

for(var i=0,l=N.length;i<l;i++){if(N[i].indexOf(o)>0){P+=f+N[i]+f;
}else{P+=N[i];
}
if(i!==l-1){P+=m;
}}this.__lr=P;
},_applyBold:function(Q,R){this.__ls=Q===null?null:Q?c:d;
},_applyItalic:function(S,T){this.__lt=S===null?null:S?e:d;
},_applyDecoration:function(U,V){this.__lu=U===null?null:U;
},_applyColor:function(W,X){this.__lw=W===null?null:W;
},getStyles:function(){return {fontFamily:this.__lr,fontSize:this.__lq,fontWeight:this.__ls,fontStyle:this.__lt,textDecoration:this.__lu,lineHeight:this.__lv,textColor:this.__lw};
}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ji={};
this.__jj={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__jk:{},__ji:null,__jj:null,_applyTheme:function(j,k){this.__jj={};
this.__ji={};
},__jl:function(l,m,n){var s=m.appearances;
var v=s[l];

if(!v){var w=b;
var p=[];
var u=l.split(w);
var t;

while(!v&&u.length>0){p.unshift(u.pop());
var q=u.join(w);
v=s[q];

if(v){t=v.alias||v;

if(typeof t===h){var r=t+w+p.join(w);
return this.__jl(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__jl(q,m);

if(o){return o;
}}if(n!=null){return this.__jl(n,m);
}return null;
}else if(typeof v===h){return this.__jl(v,m,n);
}else if(v.include&&!v.style){return this.__jl(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var F=this.__jj;
var B=F[x];

if(!B){B=F[x]=this.__jl(x,z,A);
}var L=z.appearances[B];

if(!L){this.warn("Missing appearance: "+x);
return null;
}if(!L.style){return null;
}var M=B;

if(y){var N=L.$$bits;

if(!N){N=L.$$bits={};
L.$$length=0;
}var D=0;

for(var H in y){if(!y[H]){continue;
}
if(N[H]==null){N[H]=1<<L.$$length++;
}D+=N[H];
}if(D>0){M+=e+D;
}}var E=this.__ji;

if(E[M]!==undefined){return E[M];
}if(!y){y=this.__jk;
}var J;
if(L.include||L.base){var C;

if(L.include){C=this.styleFrom(L.include,y,z,A);
}var G=L.style(y,C);
J={};
if(L.base){var I=this.styleFrom(B,y,L.base,A);

if(L.include){for(var K in I){if(!C.hasOwnProperty(K)&&!G.hasOwnProperty(K)){J[K]=I[K];
}}}else{for(var K in I){if(!G.hasOwnProperty(K)){J[K]=I[K];
}}}}if(L.include){for(var K in C){if(!G.hasOwnProperty(K)){J[K]=C[K];
}}}for(var K in G){J[K]=G[K];
}}else{J=L.style(y);
}return E[M]=J||null;
}},destruct:function(){this.__ji=this.__jj=null;
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__iv=c;
this.__iw=d;
},members:{__iv:null,__iw:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__iv,this.__iw);
}}});
})();
(function(){var e="=",d="ecmascript.objectcount",c="+",b="qx.lang.Object",a="&";
qx.Class.define(b,{statics:{empty:function(f){for(var g in f){if(f.hasOwnProperty(g)){delete f[g];
}}},isEmpty:(qx.core.Environment.get(d))?
function(h){return h.__count__===0;
}:
function(j){for(var k in j){return false;
}return true;
},hasMinLength:(qx.core.Environment.get(d))?
function(m,n){return m.__count__>=n;
}:
function(o,p){if(p<=0){return true;
}var length=0;

for(var q in o){if((++length)>=p){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(r){var t=[];
var s=this.getKeys(r);

for(var i=0,l=s.length;i<l;i++){t.push(r[s[i]]);
}return t;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(u,v){return qx.lang.Object.mergeWith(u,v,false);
},merge:function(w,x){var y=arguments.length;

for(var i=1;i<y;i++){qx.lang.Object.mergeWith(w,arguments[i]);
}return w;
},clone:function(z){var A={};

for(var B in z){A[B]=z[B];
}return A;
},invert:function(C){var D={};

for(var E in C){D[C[E].toString()]=E;
}return D;
},getKeyFromValue:function(F,G){for(var H in F){if(F.hasOwnProperty(H)&&F[H]===G){return H;
}}return null;
},contains:function(I,J){return this.getKeyFromValue(I,J)!==null;
},select:function(K,L){return L[K];
},fromArray:function(M){var N={};

for(var i=0,l=M.length;i<l;i++){N[M[i].toString()]=true;
}return N;
},toUriParameter:function(O,P){var S,R=[],Q=window.encodeURIComponent;

for(S in O){if(O.hasOwnProperty(S)){if(P){R.push(Q(S).replace(/%20/g,c)+e+Q(O[S]).replace(/%20/g,c));
}else{R.push(Q(S)+e+Q(O[S]));
}}}return R.join(a);
}}});
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
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{statics:{__jm:null,setVisibleElement:function(y){this.__jm=y;
},getVisibleElement:function(){return this.__jm;
}},properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__jn:null,__jo:null,__jp:null,getLayoutLocation:function(z){var C,B,D,top;
B=z.getBounds();
D=B.left;
top=B.top;
var E=B;
z=z.getLayoutParent();

while(z&&!z.isRootWidget()){B=z.getBounds();
D+=B.left;
top+=B.top;
C=z.getInsets();
D+=C.left;
top+=C.top;
z=z.getLayoutParent();
}if(z.isRootWidget()){var A=z.getContainerLocation();

if(A){D+=A.left;
top+=A.top;
}}return {left:D,top:top,right:D+E.width,bottom:top+E.height};
},moveTo:function(F,top){var H=qx.ui.core.MPlacement.getVisibleElement();
if(H){var J=this.getBounds();
var G=H.getContentLocation();
if(J&&G){var K=top+J.height;
var I=F+J.width;
if((I>G.left&&F<G.right)&&(K>G.top&&top<G.bottom)){F=Math.max(G.left-J.width,0);
}}}
if(this.getDomMove()){this.setDomPosition(F,top);
}else{this.setLayoutProperties({left:F,top:top});
}},placeToWidget:function(L,M){if(M){this.__jq();
this.__jn=qx.lang.Function.bind(this.placeToWidget,this,L,false);
qx.event.Idle.getInstance().addListener(i,this.__jn);
this.__jp=function(){this.__jq();
};
this.addListener(g,this.__jp,this);
}var N=L.getContainerLocation()||this.getLayoutLocation(L);
this.__js(N);
},__jq:function(){if(this.__jn){qx.event.Idle.getInstance().removeListener(i,this.__jn);
this.__jn=null;
}
if(this.__jp){this.removeListener(g,this.__jp,this);
this.__jp=null;
}},placeToMouse:function(event){var P=event.getDocumentLeft();
var top=event.getDocumentTop();
var O={left:P,top:top,right:P,bottom:top};
this.__js(O);
},placeToElement:function(Q,R){var location=qx.bom.element.Location.get(Q);
var S={left:location.left,top:location.top,right:location.left+Q.offsetWidth,bottom:location.top+Q.offsetHeight};
if(R){this.__jn=qx.lang.Function.bind(this.placeToElement,this,Q,false);
qx.event.Idle.getInstance().addListener(i,this.__jn);
this.addListener(g,function(){if(this.__jn){qx.event.Idle.getInstance().removeListener(i,this.__jn);
this.__jn=null;
}},this);
}this.__js(S);
},placeToPoint:function(T){var U={left:T.left,top:T.top,right:T.left,bottom:T.top};
this.__js(U);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__jr:function(V){var W=null;

if(this._computePlacementSize){var W=this._computePlacementSize();
}else if(this.isVisible()){var W=this.getBounds();
}
if(W==null){this.addListenerOnce(q,function(){this.__jr(V);
},this);
}else{V.call(this,W);
}},__js:function(X){this.__jr(function(Y){var ba=qx.util.placement.Placement.compute(Y,this.getLayoutParent().getBounds(),X,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(ba.left,ba.top);
});
}},destruct:function(){this.__jq();
}});
})();
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="div",e="replacement",d="qx.event.type.Event",c="engine.name",b="hidden",a="Boolean",y="px",x="scale",w="changeSource",v="qx.ui.basic.Image",u="loaded",t="-disabled.$1",s="loadingFailed",r="String",q="_applySource",p="img",n="image",o="mshtml",l="__jt",m="_applyScale",k="no-repeat";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(z){this.__jt={};
qx.ui.core.Widget.call(this);

if(z){this.setSource(z);
}},properties:{source:{check:r,init:null,nullable:true,event:w,apply:q,themeable:true},scale:{check:a,init:false,themeable:true,apply:m},appearance:{refine:true,init:n},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:d,loaded:d},members:{__ju:null,__jv:null,__jw:null,__jt:null,getContentElement:function(){return this.__jA();
},_createContentElement:function(){return this.__jA();
},_getContentHint:function(){return {width:this.__ju||0,height:this.__jv||0};
},_applyEnabled:function(A,B){qx.ui.core.Widget.prototype._applyEnabled.call(this,A,B);

if(this.getSource()){this._styleSource();
}},_applySource:function(C){this._styleSource();
},_applyScale:function(D){this._styleSource();
},__jx:function(E){this.__jw=E;
},__jy:function(){if(this.__jw==null){var G=this.getSource();
var F=false;

if(G!=null){F=qx.lang.String.endsWith(G,g);
}
if(this.getScale()&&F&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__jw=h;
}else if(this.getScale()){this.__jw=i;
}else{this.__jw=j;
}}return this.__jw;
},__jz:function(H){var I;
var J;

if(H==h){I=true;
J=f;
}else if(H==j){I=false;
J=f;
}else{I=true;
J=p;
}var K=new qx.html.Image(J);
K.setScale(I);
K.setStyles({"overflowX":b,"overflowY":b});
return K;
},__jA:function(){var L=this.__jy();

if(this.__jt[L]==null){this.__jt[L]=this.__jz(L);
}return this.__jt[L];
},_styleSource:function(){var M=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!M){this.getContentElement().resetSource();
return;
}this.__jB(M);

if((qx.core.Environment.get(c)==o)){var N=this.getScale()?x:k;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(N,M);
}if(qx.util.ResourceManager.getInstance().has(M)){this.__jD(this.getContentElement(),M);
}else if(qx.io.ImageLoader.isLoaded(M)){this.__jE(this.getContentElement(),M);
}else{this.__jF(this.getContentElement(),M);
}},__jB:qx.core.Environment.select(c,{"mshtml":function(O){var Q=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var P=qx.lang.String.endsWith(O,g);

if(Q&&P){if(this.getScale()&&this.__jy()!=h){this.__jx(h);
}else if(!this.getScale()&&this.__jy()!=j){this.__jx(j);
}}else{if(this.getScale()&&this.__jy()!=i){this.__jx(i);
}else if(!this.getScale()&&this.__jy()!=j){this.__jx(j);
}}this.__jC(this.__jA());
},"default":function(R){if(this.getScale()&&this.__jy()!=i){this.__jx(i);
}else if(!this.getScale()&&this.__jy(j)){this.__jx(j);
}this.__jC(this.__jA());
}}),__jC:function(S){var V=this.getContainerElement();
var W=V.getChild(0);

if(W!=S){if(W!=null){var Y=y;
var T={};
var U=this.getInnerSize();

if(U!=null){T.width=U.width+Y;
T.height=U.height+Y;
}var X=this.getInsets();
T.left=X.left+Y;
T.top=X.top+Y;
T.zIndex=10;
S.setStyles(T,true);
S.setSelectable(this.getSelectable());
}V.removeAt(0);
V.addAt(S,0);
}},__jD:function(ba,bb){var bd=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bc=bb.replace(/\.([a-z]+)$/,t);

if(bd.has(bc)){bb=bc;
this.addState(e);
}else{this.removeState(e);
}}if(ba.getSource()===bb){return;
}ba.setSource(bb);
this.__jI(bd.getImageWidth(bb),bd.getImageHeight(bb));
},__jE:function(be,bf){var bh=qx.io.ImageLoader;
be.setSource(bf);
var bg=bh.getWidth(bf);
var bi=bh.getHeight(bf);
this.__jI(bg,bi);
},__jF:function(bj,bk){var self;
var bl=qx.io.ImageLoader;
if(!bl.isFailed(bk)){bl.load(bk,this.__jH,this);
}else{if(bj!=null){bj.resetSource();
}}},__jH:function(bm,bn){if(this.$$disposed===true){return;
}if(bm!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bn.failed){this.warn("Image could not be loaded: "+bm);
this.fireEvent(s);
}else if(bn.aborted){return ;
}else{this.fireEvent(u);
}this._styleSource();
},__jI:function(bo,bp){if(bo!==this.__ju||bp!==this.__jv){this.__ju=bo;
this.__jv=bp;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(l);
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
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__dU:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__dV:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__dW:function(){var L=qx.lang.Generics.__dU;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__dV(N,O);
}}}}},defer:function(Q){Q.__dW();
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__hY:[],remove:function(c){qx.lang.Array.remove(this.__hY,c);
},add:function(d){var e=this.__hY;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__hY;
var g;

for(var i=f.length-1;i>=0;i--){g=f[i];
f.splice(i,1);
g.syncWidget();
}if(f.length!=0){return;
}this.__hY=[];
}}});
})();
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;
}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Font",d="_dynamic",c="Theme",b="changeTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:c,nullable:true,apply:f,event:b}},members:{resolveDynamic:function(g){var h=this._dynamic;
return g instanceof qx.bom.Font?g:h[g];
},resolve:function(i){var l=this._dynamic;
var j=l[i];

if(j){return j;
}var k=this.getTheme();

if(k!==null&&k.fonts[i]){return l[i]=(new qx.bom.Font).set(k.fonts[i]);
}return i;
},isDynamic:function(m){var o=this._dynamic;

if(m&&(m instanceof qx.bom.Font||o[m]!==undefined)){return true;
}var n=this.getTheme();

if(n!==null&&m&&n.fonts[m]){o[m]=(new qx.bom.Font).set(n.fonts[m]);
return true;
}return false;
},__lo:function(p,q){if(p[q].include){var r=p[p[q].include];
p[q].include=null;
delete p[q].include;
p[q]=qx.lang.Object.mergeWith(p[q],r,false);
this.__lo(p,q);
}},_applyTheme:function(s){var t=this._getDynamic();

for(var w in t){if(t[w].themed){t[w].dispose();
delete t[w];
}}
if(s){var u=s.fonts;
var v=qx.bom.Font;

for(var w in u){if(u[w].include&&u[u[w].include]){this.__lo(u,w);
}t[w]=(new v).set(u[w]);
t[w].themed=true;
}}this._setDynamic(t);
}},destruct:function(){this._disposeMap(d);
}});
})();
(function(){var k="source",j="scale",i="engine.name",h="no-repeat",g="",f="mshtml",e="backgroundImage",d="webkit",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,l){qx.html.Element.prototype._applyProperty.call(this,name,l);

if(name===k){var p=this.getDomElement();
var m=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(e)){m.backgroundPosition=null;
m.backgroundRepeat=null;
}var n=this._getProperty(k);
var o=this._getProperty(j);
var q=o?j:h;
if(n!=null){n=n||null;
qx.bom.element.Decoration.update(p,n,q,m);
}}},_removeProperty:function(r,s){if(r==k){this._setProperty(r,g,s);
}else{this._setProperty(r,null,s);
}},_createDomElement:function(){var u=this._getProperty(j);
var v=u?j:h;

if((qx.core.Environment.get(i)==f)){var t=this._getProperty(k);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v,t));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(w){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(x){this._setProperty(k,x);
return this;
},getSource:function(){return this._getProperty(k);
},resetSource:function(){if((qx.core.Environment.get(i)==d)){this._setProperty(k,a);
}else{this._removeProperty(k,true);
}return this;
},setScale:function(y){this._setProperty(j,y);
return this;
},getScale:function(){return this._getProperty(j);
}}});
})();
(function(){var r="left",q="top",p="_applyLayoutChange",o="hAlign",n="flex",m="vAlign",h="Integer",g="minWidth",f="width",e="minHeight",b="qx.ui.layout.Grid",d="height",c="maxHeight",a="maxWidth";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(s,t){qx.ui.layout.Abstract.call(this);
this.__lG=[];
this.__lH=[];

if(s){this.setSpacingX(s);
}
if(t){this.setSpacingY(t);
}},properties:{spacingX:{check:h,init:0,apply:p},spacingY:{check:h,init:0,apply:p}},members:{__lI:null,__lG:null,__lH:null,__lJ:null,__lK:null,__lL:null,__lM:null,__lN:null,__lO:null,verifyLayoutProperty:null,__lP:function(){var B=[];
var A=[];
var C=[];
var w=-1;
var v=-1;
var E=this._getLayoutChildren();

for(var i=0,l=E.length;i<l;i++){var z=E[i];
var D=z.getLayoutProperties();
var F=D.row;
var u=D.column;
D.colSpan=D.colSpan||1;
D.rowSpan=D.rowSpan||1;
if(F==null||u==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+z+"' must be defined!");
}
if(B[F]&&B[F][u]){throw new Error("Cannot add widget '"+z+"'!. "+"There is already a widget '"+B[F][u]+"' in this cell ("+F+", "+u+")");
}
for(var x=u;x<u+D.colSpan;x++){for(var y=F;y<F+D.rowSpan;y++){if(B[y]==undefined){B[y]=[];
}B[y][x]=z;
v=Math.max(v,x);
w=Math.max(w,y);
}}
if(D.rowSpan>1){C.push(z);
}
if(D.colSpan>1){A.push(z);
}}for(var y=0;y<=w;y++){if(B[y]==undefined){B[y]=[];
}}this.__lI=B;
this.__lJ=A;
this.__lK=C;
this.__lL=w;
this.__lM=v;
this.__lN=null;
this.__lO=null;
delete this._invalidChildrenCache;
},_setRowData:function(G,H,I){var J=this.__lG[G];

if(!J){this.__lG[G]={};
this.__lG[G][H]=I;
}else{J[H]=I;
}},_setColumnData:function(K,L,M){var N=this.__lH[K];

if(!N){this.__lH[K]={};
this.__lH[K][L]=M;
}else{N[L]=M;
}},setSpacing:function(O){this.setSpacingY(O);
this.setSpacingX(O);
return this;
},setColumnAlign:function(P,Q,R){this._setColumnData(P,o,Q);
this._setColumnData(P,m,R);
this._applyLayoutChange();
return this;
},getColumnAlign:function(S){var T=this.__lH[S]||{};
return {vAlign:T.vAlign||q,hAlign:T.hAlign||r};
},setRowAlign:function(U,V,W){this._setRowData(U,o,V);
this._setRowData(U,m,W);
this._applyLayoutChange();
return this;
},getRowAlign:function(X){var Y=this.__lG[X]||{};
return {vAlign:Y.vAlign||q,hAlign:Y.hAlign||r};
},getCellWidget:function(ba,bb){if(this._invalidChildrenCache){this.__lP();
}var ba=this.__lI[ba]||{};
return ba[bb]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__lP();
}return this.__lL+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__lP();
}return this.__lM+1;
},getCellAlign:function(bc,bd){var bj=q;
var bh=r;
var bi=this.__lG[bc];
var bf=this.__lH[bd];
var be=this.__lI[bc][bd];

if(be){var bg={vAlign:be.getAlignY(),hAlign:be.getAlignX()};
}else{bg={};
}if(bg.vAlign){bj=bg.vAlign;
}else if(bi&&bi.vAlign){bj=bi.vAlign;
}else if(bf&&bf.vAlign){bj=bf.vAlign;
}if(bg.hAlign){bh=bg.hAlign;
}else if(bf&&bf.hAlign){bh=bf.hAlign;
}else if(bi&&bi.hAlign){bh=bi.hAlign;
}return {vAlign:bj,hAlign:bh};
},setColumnFlex:function(bk,bl){this._setColumnData(bk,n,bl);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bm){var bn=this.__lH[bm]||{};
return bn.flex!==undefined?bn.flex:0;
},setRowFlex:function(bo,bp){this._setRowData(bo,n,bp);
this._applyLayoutChange();
return this;
},getRowFlex:function(bq){var br=this.__lG[bq]||{};
var bs=br.flex!==undefined?br.flex:0;
return bs;
},setColumnMaxWidth:function(bt,bu){this._setColumnData(bt,a,bu);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bv){var bw=this.__lH[bv]||{};
return bw.maxWidth!==undefined?bw.maxWidth:Infinity;
},setColumnWidth:function(bx,by){this._setColumnData(bx,f,by);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bz){var bA=this.__lH[bz]||{};
return bA.width!==undefined?bA.width:null;
},setColumnMinWidth:function(bB,bC){this._setColumnData(bB,g,bC);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bD){var bE=this.__lH[bD]||{};
return bE.minWidth||0;
},setRowMaxHeight:function(bF,bG){this._setRowData(bF,c,bG);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bH){var bI=this.__lG[bH]||{};
return bI.maxHeight||Infinity;
},setRowHeight:function(bJ,bK){this._setRowData(bJ,d,bK);
this._applyLayoutChange();
return this;
},getRowHeight:function(bL){var bM=this.__lG[bL]||{};
return bM.height!==undefined?bM.height:null;
},setRowMinHeight:function(bN,bO){this._setRowData(bN,e,bO);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bP){var bQ=this.__lG[bP]||{};
return bQ.minHeight||0;
},__lQ:function(bR){var bV=bR.getSizeHint();
var bU=bR.getMarginLeft()+bR.getMarginRight();
var bT=bR.getMarginTop()+bR.getMarginBottom();
var bS={height:bV.height+bT,width:bV.width+bU,minHeight:bV.minHeight+bT,minWidth:bV.minWidth+bU,maxHeight:bV.maxHeight+bT,maxWidth:bV.maxWidth+bU};
return bS;
},_fixHeightsRowSpan:function(bW){var ce=this.getSpacingY();

for(var i=0,l=this.__lK.length;i<l;i++){var cl=this.__lK[i];
var ch=this.__lQ(cl);
var ca=cl.getLayoutProperties();
var cg=ca.row;
var cq=ce*(ca.rowSpan-1);
var bX=cq;
var cb={};

for(var j=0;j<ca.rowSpan;j++){var cf=ca.row+j;
var cp=bW[cf];
var cr=this.getRowFlex(cf);

if(cr>0){cb[cf]={min:cp.minHeight,value:cp.height,max:cp.maxHeight,flex:cr};
}cq+=cp.height;
bX+=cp.minHeight;
}if(cq<ch.height){if(!qx.lang.Object.isEmpty(cb)){var cc=qx.ui.layout.Util.computeFlexOffsets(cb,ch.height,cq);

for(var k=0;k<ca.rowSpan;k++){var cn=cc[cg+k]?cc[cg+k].offset:0;
bW[cg+k].height+=cn;
}}else{var ck=ce*(ca.rowSpan-1);
var ci=ch.height-ck;
var co=Math.floor(ci/ca.rowSpan);
var cm=0;
var bY=0;

for(var k=0;k<ca.rowSpan;k++){var cd=bW[cg+k].height;
cm+=cd;

if(cd<co){bY++;
}}var cj=Math.floor((ci-cm)/bY);
for(var k=0;k<ca.rowSpan;k++){if(bW[cg+k].height<co){bW[cg+k].height+=cj;
}}}}if(bX<ch.minHeight){var cc=qx.ui.layout.Util.computeFlexOffsets(cb,ch.minHeight,bX);

for(var j=0;j<ca.rowSpan;j++){var cn=cc[cg+j]?cc[cg+j].offset:0;
bW[cg+j].minHeight+=cn;
}}}},_fixWidthsColSpan:function(cs){var cw=this.getSpacingX();

for(var i=0,l=this.__lJ.length;i<l;i++){var ct=this.__lJ[i];
var cv=this.__lQ(ct);
var cy=ct.getLayoutProperties();
var cu=cy.column;
var cE=cw*(cy.colSpan-1);
var cx=cE;
var cz={};
var cB;

for(var j=0;j<cy.colSpan;j++){var cF=cy.column+j;
var cD=cs[cF];
var cC=this.getColumnFlex(cF);
if(cC>0){cz[cF]={min:cD.minWidth,value:cD.width,max:cD.maxWidth,flex:cC};
}cE+=cD.width;
cx+=cD.minWidth;
}if(cE<cv.width){var cA=qx.ui.layout.Util.computeFlexOffsets(cz,cv.width,cE);

for(var j=0;j<cy.colSpan;j++){cB=cA[cu+j]?cA[cu+j].offset:0;
cs[cu+j].width+=cB;
}}if(cx<cv.minWidth){var cA=qx.ui.layout.Util.computeFlexOffsets(cz,cv.minWidth,cx);

for(var j=0;j<cy.colSpan;j++){cB=cA[cu+j]?cA[cu+j].offset:0;
cs[cu+j].minWidth+=cB;
}}}},_getRowHeights:function(){if(this.__lN!=null){return this.__lN;
}var cP=[];
var cI=this.__lL;
var cH=this.__lM;

for(var cQ=0;cQ<=cI;cQ++){var cJ=0;
var cL=0;
var cK=0;

for(var cO=0;cO<=cH;cO++){var cG=this.__lI[cQ][cO];

if(!cG){continue;
}var cM=cG.getLayoutProperties().rowSpan||0;

if(cM>1){continue;
}var cN=this.__lQ(cG);

if(this.getRowFlex(cQ)>0){cJ=Math.max(cJ,cN.minHeight);
}else{cJ=Math.max(cJ,cN.height);
}cL=Math.max(cL,cN.height);
}var cJ=Math.max(cJ,this.getRowMinHeight(cQ));
var cK=this.getRowMaxHeight(cQ);

if(this.getRowHeight(cQ)!==null){var cL=this.getRowHeight(cQ);
}else{var cL=Math.max(cJ,Math.min(cL,cK));
}cP[cQ]={minHeight:cJ,height:cL,maxHeight:cK};
}
if(this.__lK.length>0){this._fixHeightsRowSpan(cP);
}this.__lN=cP;
return cP;
},_getColWidths:function(){if(this.__lO!=null){return this.__lO;
}var cV=[];
var cS=this.__lM;
var cU=this.__lL;

for(var db=0;db<=cS;db++){var cY=0;
var cX=0;
var cT=Infinity;

for(var dc=0;dc<=cU;dc++){var cR=this.__lI[dc][db];

if(!cR){continue;
}var cW=cR.getLayoutProperties().colSpan||0;

if(cW>1){continue;
}var da=this.__lQ(cR);

if(this.getColumnFlex(db)>0){cX=Math.max(cX,da.minWidth);
}else{cX=Math.max(cX,da.width);
}cY=Math.max(cY,da.width);
}var cX=Math.max(cX,this.getColumnMinWidth(db));
var cT=this.getColumnMaxWidth(db);

if(this.getColumnWidth(db)!==null){var cY=this.getColumnWidth(db);
}else{var cY=Math.max(cX,Math.min(cY,cT));
}cV[db]={minWidth:cX,width:cY,maxWidth:cT};
}
if(this.__lJ.length>0){this._fixWidthsColSpan(cV);
}this.__lO=cV;
return cV;
},_getColumnFlexOffsets:function(dd){var de=this.getSizeHint();
var di=dd-de.width;

if(di==0){return {};
}var dg=this._getColWidths();
var df={};

for(var i=0,l=dg.length;i<l;i++){var dj=dg[i];
var dh=this.getColumnFlex(i);

if((dh<=0)||(dj.width==dj.maxWidth&&di>0)||(dj.width==dj.minWidth&&di<0)){continue;
}df[i]={min:dj.minWidth,value:dj.width,max:dj.maxWidth,flex:dh};
}return qx.ui.layout.Util.computeFlexOffsets(df,dd,de.width);
},_getRowFlexOffsets:function(dk){var dl=this.getSizeHint();
var dp=dk-dl.height;

if(dp==0){return {};
}var dq=this._getRowHeights();
var dm={};

for(var i=0,l=dq.length;i<l;i++){var dr=dq[i];
var dn=this.getRowFlex(i);

if((dn<=0)||(dr.height==dr.maxHeight&&dp>0)||(dr.height==dr.minHeight&&dp<0)){continue;
}dm[i]={min:dr.minHeight,value:dr.height,max:dr.maxHeight,flex:dn};
}return qx.ui.layout.Util.computeFlexOffsets(dm,dk,dl.height);
},renderLayout:function(ds,dt){if(this._invalidChildrenCache){this.__lP();
}var dH=qx.ui.layout.Util;
var dv=this.getSpacingX();
var dB=this.getSpacingY();
var dM=this._getColWidths();
var dL=this._getColumnFlexOffsets(ds);
var dw=[];
var dO=this.__lM;
var du=this.__lL;
var dN;

for(var dP=0;dP<=dO;dP++){dN=dL[dP]?dL[dP].offset:0;
dw[dP]=dM[dP].width+dN;
}var dE=this._getRowHeights();
var dG=this._getRowFlexOffsets(dt);
var dV=[];

for(var dC=0;dC<=du;dC++){dN=dG[dC]?dG[dC].offset:0;
dV[dC]=dE[dC].height+dN;
}var dW=0;

for(var dP=0;dP<=dO;dP++){var top=0;

for(var dC=0;dC<=du;dC++){var dJ=this.__lI[dC][dP];
if(!dJ){top+=dV[dC]+dB;
continue;
}var dx=dJ.getLayoutProperties();
if(dx.row!==dC||dx.column!==dP){top+=dV[dC]+dB;
continue;
}var dU=dv*(dx.colSpan-1);

for(var i=0;i<dx.colSpan;i++){dU+=dw[dP+i];
}var dK=dB*(dx.rowSpan-1);

for(var i=0;i<dx.rowSpan;i++){dK+=dV[dC+i];
}var dy=dJ.getSizeHint();
var dS=dJ.getMarginTop();
var dI=dJ.getMarginLeft();
var dF=dJ.getMarginBottom();
var dA=dJ.getMarginRight();
var dD=Math.max(dy.minWidth,Math.min(dU-dI-dA,dy.maxWidth));
var dT=Math.max(dy.minHeight,Math.min(dK-dS-dF,dy.maxHeight));
var dQ=this.getCellAlign(dC,dP);
var dR=dW+dH.computeHorizontalAlignOffset(dQ.hAlign,dD,dU,dI,dA);
var dz=top+dH.computeVerticalAlignOffset(dQ.vAlign,dT,dK,dS,dF);
dJ.renderLayout(dR,dz,dD,dT);
top+=dV[dC]+dB;
}dW+=dw[dP]+dv;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__lO=null;
this.__lN=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lP();
}var ec=this._getColWidths();
var ee=0,ef=0;

for(var i=0,l=ec.length;i<l;i++){var eg=ec[i];

if(this.getColumnFlex(i)>0){ee+=eg.minWidth;
}else{ee+=eg.width;
}ef+=eg.width;
}var eh=this._getRowHeights();
var ea=0,ed=0;

for(var i=0,l=eh.length;i<l;i++){var ei=eh[i];

if(this.getRowFlex(i)>0){ea+=ei.minHeight;
}else{ea+=ei.height;
}ed+=ei.height;
}var dY=this.getSpacingX()*(ec.length-1);
var dX=this.getSpacingY()*(eh.length-1);
var eb={minWidth:ee+dY,width:ef+dY,minHeight:ea+dX,height:ed+dX};
return eb;
}},destruct:function(){this.__lI=this.__lG=this.__lH=this.__lJ=this.__lK=this.__lO=this.__lN=null;
}});
})();
(function(){var l="_",k="",j="locale",h="_applyLocale",g="changeLocale",f="C",e="locale.variant",d="qx.dynlocale",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ix=qx.$$translations||{};
this.__iy=qx.$$locales||{};
var m=qx.core.Environment.get(j);
var n=qx.core.Environment.get(e);

if(n!==k){m+=l+n;
}this.__iz=m;
this.setLocale(m||this.__iA);
},statics:{tr:function(o,p){var q=qx.lang.Array.fromArguments(arguments);
q.splice(0,1);
return qx.locale.Manager.getInstance().translate(o,q);
},trn:function(r,s,t,u){var v=qx.lang.Array.fromArguments(arguments);
v.splice(0,3);
if(t!=1){return qx.locale.Manager.getInstance().translate(s,v);
}else{return qx.locale.Manager.getInstance().translate(r,v);
}},trc:function(w,x,y){var z=qx.lang.Array.fromArguments(arguments);
z.splice(0,2);
return qx.locale.Manager.getInstance().translate(x,z);
},marktr:function(A){return A;
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__iA:f,__iB:null,__iC:null,__ix:null,__iy:null,__iz:null,getLanguage:function(){return this.__iC;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(){var C=[];

for(var B in this.__iy){if(B!=this.__iA){C.push(B);
}}return C;
},__iD:function(D){var F;

if(D==null){return null;
}var E=D.indexOf(l);

if(E==-1){F=D;
}else{F=D.substring(0,E);
}return F;
},_applyLocale:function(G,H){this.__iB=G;
this.__iC=this.__iD(G);
},addTranslation:function(I,J){var K=this.__ix;

if(K[I]){for(var L in J){K[I][L]=J[L];
}}else{K[I]=J;
}},addLocale:function(M,N){var O=this.__iy;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(Q,R,S){var T=this.__ix;
return this.__iE(T,Q,R,S);
},localize:function(U,V,W){var X=this.__iy;
return this.__iE(X,U,V,W);
},__iE:function(Y,ba,bb,bc){var bd;

if(!Y){return ba;
}
if(bc){var bf=this.__iD(bc);
}else{bc=this.__iB;
bf=this.__iC;
}if(!bd&&Y[bc]){bd=Y[bc][ba];
}if(!bd&&Y[bf]){bd=Y[bf][ba];
}if(!bd&&Y[this.__iA]){bd=Y[this.__iA][ba];
}
if(!bd){bd=ba;
}
if(bb.length>0){var be=[];

for(var i=0;i<bb.length;i++){var bg=bb[i];

if(bg&&bg.translate){be[i]=bg.translate();
}else{be[i]=bg;
}}bd=qx.lang.String.format(bd,be);
}
if(qx.core.Environment.get(d)){bd=new qx.locale.LocalizedString(bd,ba,bb);
}return bd;
}},destruct:function(){this.__ix=this.__iy=null;
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__gc=by;
this.__gd=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__ge=this.__gd;
}else{this.__ge=this.__gd.document.documentElement;
}this.__gf={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bz){if(this._identifierToKeyCodeMap[bz]){return true;
}
if(bz.length!=1){return false;
}
if(bz>=f&&bz<=d){return true;
}
if(bz>=bs&&bz<=bg){return true;
}
switch(bz){case bw:case bx:case M:case C:return true;
default:return false;
}},isPrintableKeyIdentifier:function(bA){if(bA===br){return true;
}else{return this._identifierToKeyCodeMap[bA]?false:true;
}}},members:{__gg:null,__gc:null,__gd:null,__ge:null,__gf:null,__gh:null,__gi:null,__gj:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__gk();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__gc.dispatchEvent(bL,event);
}if(this.__gd){qx.event.Registration.fireEvent(this.__gd,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__gk();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__gc.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__gd){qx.event.Registration.fireEvent(this.__gd,s,qx.event.type.Data,[bN]);
}},__gk:function(){var bR=this.__gc.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__gc.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__gg=qx.lang.Function.listener(this.__gl,this);
this.__gj=qx.lang.Function.listener(this.__gn,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ge,i,this.__gg);
Event.addNativeListener(this.__ge,m,this.__gg);
Event.addNativeListener(this.__ge,k,this.__gj);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ge,i,this.__gg);
Event.removeNativeListener(this.__ge,m,this.__gg);
Event.removeNativeListener(this.__ge,k,this.__gj);

for(var bU in (this.__gi||{})){var bT=this.__gi[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__gi);
},__gl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__gf[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__gf[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__gf[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__gf[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__gm(ca.target,cd,ce);
},"webkit":function(cf){var ci=0;
var cg=0;
var ch=cf.type;
if(parseFloat(qx.core.Environment.get(e))<525.13){if(ch==i||ch==m){ci=this._charCode2KeyCode[cf.charCode]||cf.keyCode;
}else{if(this._charCode2KeyCode[cf.charCode]){ci=this._charCode2KeyCode[cf.charCode];
}else{cg=cf.charCode;
}}this._idealKeyHandler(ci,cg,ch,cf);
}else{ci=cf.keyCode;
this._idealKeyHandler(ci,cg,ch,cf);
if(ch==m){if(this._isNonPrintableKeyCode(ci)||this._emulateKeyPress[ci]){this._idealKeyHandler(ci,cg,k,cf);
}}this.__gf[ci]=ch;
}},"opera":function(cj){this.__gh=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__gm:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__gi){this.__gi={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__gi[co]){return;
}var self=this;
this.__gi[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__gn(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__gi[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__gn:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

if(this._charCode2KeyCode[cq.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cq.keyCode],0,cq.type,cq);
}else{this._idealKeyHandler(0,cq.keyCode,cq.type,cq);
}},"gecko":function(cr){var cu=this._keyCodeFix[cr.keyCode]||cr.keyCode;
var cs=cr.charCode;
var ct=cr.type;
this._idealKeyHandler(cu,cs,ct,cr);
},"webkit":function(cv){if(parseFloat(qx.core.Environment.get(e))<525.13){var cy=0;
var cw=0;
var cx=cv.type;

if(cx==i||cx==m){cy=this._charCode2KeyCode[cv.charCode]||cv.keyCode;
}else{if(this._charCode2KeyCode[cv.charCode]){cy=this._charCode2KeyCode[cv.charCode];
}else{cw=cv.charCode;
}}this._idealKeyHandler(cy,cw,cx,cv);
}else{if(this._charCode2KeyCode[cv.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cv.keyCode],0,cv.type,cv);
}else{this._idealKeyHandler(0,cv.keyCode,cv.type,cv);
}}},"opera":function(cz){var cB=cz.keyCode;
var cA=cz.type;
if(cB!=this.__gh){this._idealKeyHandler(0,this.__gh,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(cC,cD,cE,cF){var cG;
if(cC||(!cC&&!cD)){cG=this._keyCodeToIdentifier(cC);
this._fireSequenceEvent(cF,cE,cG);
}else{cG=this._charCodeToIdentifier(cD);
this._fireSequenceEvent(cF,k,cG);
this._fireInputEvent(cF,cD);
}},_specialCharCodeMap:{8:K,9:a,13:g,27:w,32:br},_emulateKeyPress:qx.core.Environment.select(l,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bf,17:ba,18:P,20:bc,224:W,37:bq,38:t,39:bb,40:bo,33:bu,34:bn,35:B,36:bk,45:n,46:Q,112:Y,113:be,114:p,115:T,116:bp,117:r,118:bl,119:o,120:L,121:U,122:u,123:H,144:j,44:bv,145:bd,19:x,91:qx.core.Environment.get(h)==J?R:F,92:F,93:qx.core.Environment.get(h)==J?R:E},_numpadToCharCode:{96:f.charCodeAt(0),97:c.charCodeAt(0),98:bi.charCodeAt(0),99:X.charCodeAt(0),100:D.charCodeAt(0),101:I.charCodeAt(0),102:z.charCodeAt(0),103:V.charCodeAt(0),104:bh.charCodeAt(0),105:d.charCodeAt(0),106:M.charCodeAt(0),107:bw.charCodeAt(0),109:bx.charCodeAt(0),110:G.charCodeAt(0),111:C.charCodeAt(0)},_charCodeA:bs.charCodeAt(0),_charCodeZ:bg.charCodeAt(0),_charCode0:f.charCodeAt(0),_charCode9:d.charCodeAt(0),_isNonPrintableKeyCode:function(cH){return this._keyCodeToIdentifierMap[cH]?true:false;
},_isIdentifiableKeyCode:function(cI){if(cI>=this._charCodeA&&cI<=this._charCodeZ){return true;
}if(cI>=this._charCode0&&cI<=this._charCode9){return true;
}if(this._specialCharCodeMap[cI]){return true;
}if(this._numpadToCharCode[cI]){return true;
}if(this._isNonPrintableKeyCode(cI)){return true;
}return false;
},_keyCodeToIdentifier:function(cJ){if(this._isIdentifiableKeyCode(cJ)){var cK=this._numpadToCharCode[cJ];

if(cK){return String.fromCharCode(cK);
}return (this._keyCodeToIdentifierMap[cJ]||this._specialCharCodeMap[cJ]||String.fromCharCode(cJ));
}else{return y;
}},_charCodeToIdentifier:function(cL){return this._specialCharCodeMap[cL]||String.fromCharCode(cL).toUpperCase();
},_identifierToKeyCode:function(cM){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cM]||cM.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gh=this.__gc=this.__gd=this.__ge=this.__gf=null;
},defer:function(cN,cO){qx.event.Registration.addHandler(cN);
if(!cN._identifierToKeyCodeMap){cN._identifierToKeyCodeMap={};

for(var cP in cO._keyCodeToIdentifierMap){cN._identifierToKeyCodeMap[cO._keyCodeToIdentifierMap[cP]]=parseInt(cP,10);
}
for(var cP in cO._specialCharCodeMap){cN._identifierToKeyCodeMap[cO._specialCharCodeMap[cP]]=parseInt(cP,10);
}}
if((qx.core.Environment.get(l)==bm)){cO._charCode2KeyCode={13:13,27:27};
}else if((qx.core.Environment.get(l)==bt)){cO._keyCodeFix={12:cO._identifierToKeyCode(j)};
}else if((qx.core.Environment.get(l)==O)){if(parseFloat(qx.core.Environment.get(e))<525.13){cO._charCode2KeyCode={63289:cO._identifierToKeyCode(j),63276:cO._identifierToKeyCode(bu),63277:cO._identifierToKeyCode(bn),63275:cO._identifierToKeyCode(B),63273:cO._identifierToKeyCode(bk),63234:cO._identifierToKeyCode(bq),63232:cO._identifierToKeyCode(t),63235:cO._identifierToKeyCode(bb),63233:cO._identifierToKeyCode(bo),63272:cO._identifierToKeyCode(Q),63302:cO._identifierToKeyCode(n),63236:cO._identifierToKeyCode(Y),63237:cO._identifierToKeyCode(be),63238:cO._identifierToKeyCode(p),63239:cO._identifierToKeyCode(T),63240:cO._identifierToKeyCode(bp),63241:cO._identifierToKeyCode(r),63242:cO._identifierToKeyCode(bl),63243:cO._identifierToKeyCode(o),63244:cO._identifierToKeyCode(L),63245:cO._identifierToKeyCode(U),63246:cO._identifierToKeyCode(u),63247:cO._identifierToKeyCode(H),63248:cO._identifierToKeyCode(bv),3:cO._identifierToKeyCode(g),12:cO._identifierToKeyCode(j),13:cO._identifierToKeyCode(g)};
}else{cO._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Control",d="Shift",c="mousemove",b="move",a="mouseover",A="Alt",z="keyup",y="mouseup",x="dragend",w="on",v="mousedown",u="qxDraggable",t="drag",s="drop",r="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(B){qx.core.Object.call(this);
this.__go=B;
this.__gp=B.getWindow().document.documentElement;
this.__go.addListener(this.__gp,v,this._onMouseDown,this);
this.__gB();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,__gu:null,__gv:null,__gw:null,__gx:null,__gy:false,__gz:0,__gA:0,canHandleEvent:function(C,D){},registerEvent:function(E,F,G){},unregisterEvent:function(H,I,J){},addType:function(K){this.__gs[K]=true;
},addAction:function(L){this.__gt[L]=true;
},supportsType:function(M){return !!this.__gs[M];
},supportsAction:function(N){return !!this.__gt[N];
},getData:function(O){if(!this.__gI||!this.__gq){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gs[O]){throw new Error("Unsupported data type: "+O+"!");
}
if(!this.__gv[O]){this.__gw=O;
this.__gD(q,this.__gr,this.__gq,false);
}
if(!this.__gv[O]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gv[O]||null;
},getCurrentAction:function(){return this.__gx;
},addData:function(P,Q){this.__gv[P]=Q;
},getCurrentType:function(){return this.__gw;
},isSessionActive:function(){return this.__gy;
},__gB:function(){this.__gs={};
this.__gt={};
this.__gu={};
this.__gv={};
},__gC:function(){if(this.__gr==null){return;
}var T=this.__gt;
var R=this.__gu;
var S=null;

if(this.__gI){if(R.Shift&&R.Control&&T.alias){S=k;
}else if(R.Shift&&R.Alt&&T.copy){S=j;
}else if(R.Shift&&T.move){S=b;
}else if(R.Alt&&T.alias){S=k;
}else if(R.Control&&T.copy){S=j;
}else if(T.move){S=b;
}else if(T.copy){S=j;
}else if(T.alias){S=k;
}}
if(S!=this.__gx){this.__gx=S;
this.__gD(o,this.__gr,this.__gq,false);
}},__gD:function(U,V,W,X,Y){var bb=qx.event.Registration;
var ba=bb.createEvent(U,qx.event.type.Drag,[X,Y]);

if(V!==W){ba.setRelatedTarget(W);
}return bb.dispatchEvent(V,ba);
},__gE:function(bc){while(bc&&bc.nodeType==1){if(bc.getAttribute(u)==w){return bc;
}bc=bc.parentNode;
}return null;
},__gF:function(bd){while(bd&&bd.nodeType==1){if(bd.getAttribute(r)==w){return bd;
}bd=bd.parentNode;
}return null;
},__gG:function(){this.__gr=null;
this.__go.removeListener(this.__gp,c,this._onMouseMove,this,true);
this.__go.removeListener(this.__gp,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__gB();
},__gH:function(){if(this.__gy){this.__go.removeListener(this.__gp,a,this._onMouseOver,this,true);
this.__go.removeListener(this.__gp,h,this._onMouseOut,this,true);
this.__go.removeListener(this.__gp,g,this._onKeyDown,this,true);
this.__go.removeListener(this.__gp,z,this._onKeyUp,this,true);
this.__gD(x,this.__gr,this.__gq,false);
this.__gy=false;
}this.__gI=false;
this.__gq=null;
this.__gG();
},__gI:false,_onWindowBlur:function(e){this.__gH();
},_onKeyDown:function(e){var be=e.getKeyIdentifier();

switch(be){case A:case f:case d:if(!this.__gu[be]){this.__gu[be]=true;
this.__gC();
}}},_onKeyUp:function(e){var bf=e.getKeyIdentifier();

switch(bf){case A:case f:case d:if(this.__gu[bf]){this.__gu[bf]=false;
this.__gC();
}}},_onMouseDown:function(e){if(this.__gy){return;
}var bg=this.__gE(e.getTarget());

if(bg){this.__gz=e.getDocumentLeft();
this.__gA=e.getDocumentTop();
this.__gr=bg;
this.__go.addListener(this.__gp,c,this._onMouseMove,this,true);
this.__go.addListener(this.__gp,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__gI){this.__gD(s,this.__gq,this.__gr,false,e);
}if(this.__gy){e.stopPropagation();
}this.__gH();
},_onMouseMove:function(e){if(this.__gy){if(!this.__gD(t,this.__gr,this.__gq,true,e)){this.__gH();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gz)>3||Math.abs(e.getDocumentTop()-this.__gA)>3){if(this.__gD(n,this.__gr,this.__gq,true,e)){this.__gy=true;
this.__go.addListener(this.__gp,a,this._onMouseOver,this,true);
this.__go.addListener(this.__gp,h,this._onMouseOut,this,true);
this.__go.addListener(this.__gp,g,this._onKeyDown,this,true);
this.__go.addListener(this.__gp,z,this._onKeyUp,this,true);
var bh=this.__gu;
bh.Control=e.isCtrlPressed();
bh.Shift=e.isShiftPressed();
bh.Alt=e.isAltPressed();
this.__gC();
}else{this.__gD(x,this.__gr,this.__gq,false);
this.__gG();
}}}},_onMouseOver:function(e){var bi=e.getTarget();
var bj=this.__gF(bi);

if(bj&&bj!=this.__gq){this.__gI=this.__gD(m,bj,this.__gr,true,e);
this.__gq=bj;
this.__gC();
}},_onMouseOut:function(e){var bl=this.__gF(e.getTarget());
var bk=this.__gF(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__gq){this.__gD(l,this.__gq,bk,false,e);
this.__gq=null;
this.__gI=false;
qx.event.Timer.once(this.__gC,this,0);
}}},destruct:function(){this.__gr=this.__gq=this.__go=this.__gp=this.__gs=this.__gt=this.__gu=this.__gv=null;
},defer:function(bm){qx.event.Registration.addHandler(bm);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__dk:null,__dl:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__dk=b;
this.__dl=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__dk=this.__dk;
f.__dl=this.__dl;
return f;
},getData:function(){return this.__dk;
},getOldData:function(){return this.__dl;
}},destruct:function(){this.__dk=this.__dl=null;
}});
})();
(function(){var j="engine.name",i="0px",h="mshtml",g="engine.version",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="opera",b="paddingBottom",a="paddingTop";
qx.Class.define(f,{statics:{getWidth:qx.core.Environment.select(j,{"gecko":function(k){if(k.getBoundingClientRect){var l=k.getBoundingClientRect();
return Math.round(l.right)-Math.round(l.left);
}else{return k.offsetWidth;
}},"default":function(m){return m.offsetWidth;
}}),getHeight:qx.core.Environment.select(j,{"gecko":function(n){if(n.getBoundingClientRect){var o=n.getBoundingClientRect();
return Math.round(o.bottom)-Math.round(o.top);
}else{return n.offsetHeight;
}},"default":function(p){return p.offsetHeight;
}}),getSize:function(q){return {width:this.getWidth(q),height:this.getHeight(q)};
},__ln:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__ln[t]){var w=r.clientWidth;

if((qx.core.Environment.get(j)==c)){w=w-u-x;
}else{if(qx.dom.Node.isBlockNode(r)){w=w-u-x;
}}return w;
}else{if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-u-x;
}else{var v=r.scrollWidth-u;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)>=6){v-=x;
}return v;
}}},getContentHeight:function(y){var z=qx.bom.element.Style;
var C=qx.bom.element.Overflow.getY(y);
var B=parseInt(z.get(y,a)||i,10);
var A=parseInt(z.get(y,b)||i,10);

if(this.__ln[C]){return y.clientHeight-B-A;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;
}else{var D=y.scrollHeight-B;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)==6){D-=A;
}return D;
}}},getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};
}}});
})();
(function(){var c="engine.name",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__iT:{},__iU:{width:null,height:null},__iV:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__iT[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__iT[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__iT[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__iT[k];
return m?m.format:null;
},getSize:function(n){var o=this.__iT[n];
return o?
{width:o.width,height:o.height}:this.__iU;
},getWidth:function(p){var q=this.__iT[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__iT[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__iT[t];

if(!w){w=this.__iT[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__iW,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__iT[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__iT[z]=null;
},__iW:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__iT[E];
if(event.type===b){F.loaded=true;
F.width=this.__iX(D);
F.height=this.__iY(D);
var G=this.__iV.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__iX:qx.core.Environment.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__iY:qx.core.Environment.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c){qx.event.type.Event.prototype.init.call(this,true,b);

if(c){this._native=c.getNativeEvent()||null;
this._originalTarget=c.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e._native=this._native;
return e;
},getDocumentLeft:function(){if(this._native==null){return 0;
}
if(this._native.pageX!==undefined){return this._native.pageX;
}else{var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
}},getDocumentTop:function(){if(this._native==null){return 0;
}
if(this._native.pageY!==undefined){return this._native.pageY;
}else{var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
}},getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(h){this.getManager().addType(h);
},addAction:function(i){this.getManager().addAction(i);
},supportsType:function(j){return this.getManager().supportsType(j);
},supportsAction:function(k){return this.getManager().supportsAction(k);
},addData:function(l,m){this.getManager().addData(l,m);
},getData:function(n){return this.getManager().getData(n);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h=",",e="rgb(",d=")",c="qx.theme.manager.Color",a="qx.util.ColorUtil";
qx.Class.define(a,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(j){return this.NAMED[j]!==undefined;
},isSystemColor:function(k){return this.SYSTEM[k]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(c);
},isThemedColor:function(l){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(l);
},stringToRgb:function(m){if(this.supportsThemes()&&this.isThemedColor(m)){var m=qx.theme.manager.Color.getInstance().resolveDynamic(m);
}
if(this.isNamedColor(m)){return this.NAMED[m];
}else if(this.isSystemColor(m)){throw new Error("Could not convert system colors to RGB: "+m);
}else if(this.isRgbString(m)){return this.__je();
}else if(this.isHex3String(m)){return this.__jg();
}else if(this.isHex6String(m)){return this.__jh();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__je();
}else if(this.isRgbaString(n)){return this.__jf();
}else if(this.isHex3String(n)){return this.__jg();
}else if(this.isHex6String(n)){return this.__jh();
}throw new Error("Could not parse color: "+n);
},stringToRgbString:function(o){return this.rgbToRgbString(this.stringToRgb(o));
},rgbToRgbString:function(s){return e+s[0]+h+s[1]+h+s[2]+d;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v);
},isCssString:function(w){return this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w);
},isHex3String:function(x){return this.REGEXP.hex3.test(x);
},isHex6String:function(y){return this.REGEXP.hex6.test(y);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(A){return this.REGEXP.rgba.test(A);
},__je:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__jf:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__jg:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__jh:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__jg(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__jh(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__jg(P);
}
if(this.isHex6String(P)){return this.__jh(P);
}throw new Error("Invalid hex value: "+P);
},rgbToHsb:function(Q){var S,T,V;
var bc=Q[0];
var Y=Q[1];
var R=Q[2];
var bb=(bc>Y)?bc:Y;

if(R>bb){bb=R;
}var U=(bc<Y)?bc:Y;

if(R<U){U=R;
}V=bb/255.0;

if(bb!=0){T=(bb-U)/bb;
}else{T=0;
}
if(T==0){S=0;
}else{var X=(bb-bc)/(bb-U);
var ba=(bb-Y)/(bb-U);
var W=(bb-R)/(bb-U);

if(bc==bb){S=W-ba;
}else if(Y==bb){S=2.0+X-W;
}else{S=4.0+ba-X;
}S=S/6.0;

if(S<0){S=S+1.0;
}}return [Math.round(S*360),Math.round(T*100),Math.round(V*100)];
},hsbToRgb:function(bd){var i,f,p,q,t;
var be=bd[0]/360;
var bf=bd[1]/100;
var bg=bd[2]/100;

if(be>=1.0){be%=1.0;
}
if(bf>1.0){bf=1.0;
}
if(bg>1.0){bg=1.0;
}var bh=Math.floor(255*bg);
var bi={};

if(bf==0.0){bi.red=bi.green=bi.blue=bh;
}else{be*=6.0;
i=Math.floor(be);
f=be-i;
p=Math.floor(bh*(1.0-bf));
q=Math.floor(bh*(1.0-(bf*f)));
t=Math.floor(bh*(1.0-(bf*(1.0-f))));

switch(i){case 0:bi.red=bh;
bi.green=t;
bi.blue=p;
break;
case 1:bi.red=q;
bi.green=bh;
bi.blue=p;
break;
case 2:bi.red=p;
bi.green=bh;
bi.blue=t;
break;
case 3:bi.red=p;
bi.green=q;
bi.blue=bh;
break;
case 4:bi.red=t;
bi.green=p;
bi.blue=bh;
break;
case 5:bi.red=bh;
bi.green=p;
bi.blue=q;
break;
}}return [bi.red,bi.green,bi.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var q="",p="string",o="/",n="mshtml",m="engine.name",l="io.ssl",k="//",j="?",i="data",h="isClippedImage has been superseded by getCombinedFormat",c="type",g="data:image/",f=";",b="encoding",a="qx.util.ResourceManager",e="singleton",d=",";
qx.Class.define(a,{extend:qx.core.Object,type:e,construct:function(){qx.core.Object.call(this);
},statics:{__is:qx.$$resources||{},__it:{}},members:{has:function(r){return !!this.self(arguments).__is[r];
},getData:function(s){return this.self(arguments).__is[s]||null;
},getImageWidth:function(t){var u=this.self(arguments).__is[t];
return u?u[0]:null;
},getImageHeight:function(v){var w=this.self(arguments).__is[v];
return w?w[1]:null;
},getImageFormat:function(x){var y=this.self(arguments).__is[x];
return y?y[2]:null;
},isClippedImage:function(z){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
var A=this.self(arguments).__is[z];
return A&&A.length>4&&typeof (A[4])==p&&this.constructor.__is[A[4]];
},getCombinedFormat:function(B){var E=q;
var D=this.self(arguments).__is[B];
var C=D&&D.length>4&&typeof (D[4])==p&&this.constructor.__is[D[4]];

if(C){var G=D[4];
var F=this.constructor.__is[G];
E=F[2];
}return E;
},toUri:function(H){if(H==null){return H;
}var I=this.self(arguments).__is[H];

if(!I){return H;
}
if(typeof I===p){var K=I;
}else{var K=I[3];
if(!K){return H;
}}var J=q;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){J=this.self(arguments).__it[K];
}return J+qx.$$libraries[K].resourceUri+o+H;
},toDataUri:function(L){var N=this.constructor.__is[L];
var O=this.constructor.__is[N[4]];
var P;

if(O){var M=O[4][L];
P=g+M[c]+f+M[b]+d+M[i];
}else{this.debug("ResourceManager.toDataUri: falling back for",L);
P=this.toUri(L);
}return P;
}},defer:function(Q){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var U in qx.$$libraries){var S;

if(qx.$$libraries[U].resourceUri){S=qx.$$libraries[U].resourceUri;
}else{Q.__it[U]=q;
continue;
}if(S.match(/^\/\//)!=null){Q.__it[U]=window.location.protocol;
}else if(S.match(/^\//)!=null){Q.__it[U]=window.location.protocol+k+window.location.host;
}else if(S.match(/^\.\//)!=null){var R=document.URL;
Q.__it[U]=R.substring(0,R.lastIndexOf(o)+1);
}else if(S.match(/^http/)!=null){Q.__it[U]=q;
}else{var V=window.location.href.indexOf(j);
var T;

if(V==-1){T=window.location.href;
}else{T=window.location.href.substring(0,V);
}Q.__it[U]=T.substring(0,T.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var m="object",l="_applyTheme",k="",j="_",h="__dX",g="qx.ui.decoration.",f="qx.theme.manager.Decoration",e=".",d="Theme",c="changeTheme",a="string",b="singleton";
qx.Class.define(f,{type:b,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:l,event:c}},members:{__dX:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var s=this.getTheme();

if(!s){return null;
}var p=this.__dX;

if(!p){p=this.__dX={};
}var o=p[n];

if(o){return o;
}var v=s.decorations[n];

if(!v){return null;
}if(!v.style){v.style={};
}var q=v;

while(q.include){q=s.decorations[q.include];
if(!v.decorator&&q.decorator){v.decorator=q.decorator;
}if(q.style){for(var u in q.style){if(v.style[u]==undefined){v.style[u]=q.style[u];
}}}}var r=v.decorator;

if(r==null){throw new Error("Missing definition of which decorator to use in entry: "+n+"!");
}if(r instanceof Array){var t=r.concat([]);

for(var i=0;i<t.length;i++){t[i]=t[i].basename.replace(e,k);
}var name=g+t.join(j);

if(!qx.Class.getByName(name)){qx.Class.define(name,{extend:qx.ui.decoration.DynamicDecorator,include:r});
}r=qx.Class.getByName(name);
}return p[n]=(new r).set(v.style);
},isValidPropertyValue:function(w){if(typeof w===a){return this.isDynamic(w);
}else if(typeof w===m){var x=w.constructor;
return qx.Class.hasInterface(x,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(y){if(!y){return false;
}var z=this.getTheme();

if(!z){return false;
}return !!z.decorations[y];
},_applyTheme:function(A,B){var D=qx.util.AliasManager.getInstance();

if(B){for(var C in B.aliases){D.remove(C);
}}
if(A){for(var C in A.aliases){D.add(C,A.aliases[C]);
}}
if(!A){this.__dX={};
}}},destruct:function(){this._disposeMap(h);
}});
})();
(function(){var q="engine.name",p="",o="boxSizing",n="box-sizing",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="border-box",h="-moz-box-sizing",g="WebkitBoxSizing",f=":",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(m,{statics:{__ec:qx.core.Environment.select(q,{"mshtml":null,"webkit":[o,k,g],"gecko":[a],"opera":[o]}),__ed:qx.core.Environment.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[h],"opera":[n]}),__ee:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__ef:function(r){var s=this.__ee;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Environment.select(q,{"mshtml":function(t){},"default":function(u){var w=this.__ed;
var v=p;

if(w){for(var i=0,l=w.length;i<l;i++){v+=w[i]+f+u+c;
}}return v;
}}),get:qx.core.Environment.select(q,{"mshtml":function(x){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(x))){if(!this.__ef(x)){return d;
}}return j;
},"default":function(y){var A=this.__ec;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==p){return z;
}}}return p;
}}),set:qx.core.Environment.select(q,{"mshtml":function(B,C){},"default":function(D,E){var F=this.__ec;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(G){this.set(G,p);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._keyCode=b.keyCode;
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._keyCode=this._keyCode;
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
},getKeyCode:function(){return this._keyCode;
},isPrintable:function(){return qx.event.handler.Keyboard.isPrintableKeyIdentifier(this._identifier);
}}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__ja:[n,null,m,i,null,r,k,null,r],__jb:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__jc:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__jd:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__jc(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__jd(G)){G=q+G+q;
}var H=this.__ja;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__jb;
}var L=this.__jc(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__jd(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
})();
(function(){var d="-",c="qx.event.handler.Element",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){qx.core.Object.call(this);
this._manager=e;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){if(g===b){return f.tagName.toLowerCase()!==a;
}else{return true;
}},registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);
var k=m+d+i;
var l=qx.lang.Function.listener(this._onNative,this,k);
qx.bom.Event.addNativeListener(h,i,l);
this._registeredEvents[k]={element:h,type:i,listener:l};
},unregisterEvent:function(n,o,p){var s=this._registeredEvents;

if(!s){return;
}var t=qx.core.ObjectRegistry.toHashCode(n);
var q=t+d+o;
var r=this._registeredEvents[q];

if(r){qx.bom.Event.removeNativeListener(n,o,r.listener);
}delete this._registeredEvents[q];
},_onNative:qx.event.GlobalError.observeMethod(function(u,v){var x=this._registeredEvents;

if(!x){return;
}var w=x[v];
var y=this.constructor.CANCELABLE[w.type];
qx.event.Registration.fireNonBubblingEvent(w.element,w.type,qx.event.type.Native,[u,undefined,undefined,undefined,y]);
})},destruct:function(){var z;
var A=this._registeredEvents;

for(var B in A){z=A[B];
qx.bom.Event.removeNativeListener(z.element,z.type,z.listener);
}this._manager=this._registeredEvents=null;
},defer:function(C){qx.event.Registration.addHandler(C);
}});
})();
(function(){var g="CSS1Compat",f="engine.name",e="position:absolute;width:0;height:0;width:1",d="engine.version",c="qx.bom.Document",b="1px",a="div";
qx.Class.define(c,{statics:{isQuirksMode:qx.core.Environment.select(f,{"mshtml":function(h){if(qx.core.Environment.get(d)>=8){return (h||window).document.documentMode===5;
}else{return (h||window).document.compatMode!==g;
}},"webkit":function(i){if(document.compatMode===undefined){var j=(i||window).document.createElement(a);
j.style.cssText=e;
return j.style.width===b?true:false;
}else{return (i||window).document.compatMode!==g;
}},"default":function(k){return (k||window).document.compatMode!==g;
}}),isStandardMode:function(l){return !this.isQuirksMode(l);
},getWidth:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getWidth(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;
return Math.max(scroll,o);
},getHeight:function(p){var q=(p||window).document;
var r=qx.bom.Viewport.getHeight(p);
var scroll=this.isStandardMode(p)?q.documentElement.scrollHeight:q.body.scrollHeight;
return Math.max(scroll,r);
}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__dY:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__dY=null;
},getInsets:function(){if(this.__dY){return this.__dY;
}var j=this._getDefaultInsets();
return this.__dY={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){this.__dY=null;
}},destruct:function(){this.__dY=null;
}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__eb:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__eb[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__eb[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__jS:null,__jT:null,__jU:null,__jV:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jW:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__jS&&this.__jS.length!=length&&this.__jT&&this.__jS;
var u;
var t=r?this.__jS:new Array(length);
var v=r?this.__jT:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__jS=t;
this.__jT=v;
}this.__jU=s;
this.__jV=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__jW();
}var F=this.__jV;
var length=F.length;
var P=qx.ui.layout.Util;
var O=this.getSpacing();
var S=this.getSeparator();

if(S){var C=P.computeVerticalSeparatorGaps(F,O,S);
}else{var C=P.computeVerticalGaps(F,O,true);
}var i,A,B,J;
var K=[];
var Q=C;

for(i=0;i<length;i+=1){J=this.__jS[i];
B=J!=null?Math.floor((y-C)*J):F[i].getSizeHint().height;
K.push(B);
Q+=B;
}if(this.__jU&&Q!=y){var H={};
var N,R;

for(i=0;i<length;i+=1){N=this.__jT[i];

if(N>0){G=F[i].getSizeHint();
H[i]={min:G.minHeight,value:K[i],max:G.maxHeight,flex:N};
}}var D=P.computeFlexOffsets(H,y,Q);

for(i in D){R=D[i].offset;
K[i]+=R;
Q+=R;
}}var top=F[0].getMarginTop();
if(Q<y&&this.getAlignY()!=m){top=y-Q;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var G,U,L,B,I,M,E;
this._clearSeparators();
if(S){var T=qx.theme.manager.Decoration.getInstance().resolve(S).getInsets();
var z=T.top+T.bottom;
}for(i=0;i<length;i+=1){A=F[i];
B=K[i];
G=A.getSizeHint();
M=A.getMarginLeft();
E=A.getMarginRight();
L=Math.max(G.minWidth,Math.min(x-M-E,G.maxWidth));
U=P.computeHorizontalAlignOffset(A.getAlignX()||this.getAlignX(),L,x,M,E);
if(i>0){if(S){top+=I+O;
this._renderSeparator(S,{top:top,left:0,height:z,width:x});
top+=z+O+A.getMarginTop();
}else{top+=P.collapseMargins(O,I,A.getMarginTop());
}}A.renderLayout(U,top,L,B);
top+=B;
I=A.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jW();
}var bc=qx.ui.layout.Util;
var bk=this.__jV;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__jT[i];
var Y=this.__jS[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__jS=this.__jT=this.__jV=null;
}});
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
(function(){var o="px",n="top",m="_tint",l="abstract",k='<div style="',j="",h="_getDefaultInsetsFor",g="bottom",f="qx.ui.decoration.DynamicDecorator",e="left",b="right",d="_resize",c="_style",a='"></div>';
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,type:l,members:{getMarkup:function(){if(this._markup){return this._markup;
}var p={};

for(var name in this){if(name.indexOf(c)==0&&this[name] instanceof Function){this[name](p);
}}if(!this._generateMarkup){var q=[k];
q.push(qx.bom.element.Style.compile(p));
q.push(a);
q=q.join(j);
}else{var q=this._generateMarkup(p);
}return this._markup=q;
},resize:function(r,s,t){var v={};

for(var name in this){if(name.indexOf(d)==0&&this[name] instanceof Function){var u=this[name](r,s,t);

if(v.left==undefined){v.left=u.left;
v.top=u.top;
}
if(v.width==undefined){v.width=u.width;
v.height=u.height;
}
if(u.elementToApplyDimensions){v.elementToApplyDimensions=u.elementToApplyDimensions;
}v.left=u.left<v.left?u.left:v.left;
v.top=u.top<v.top?u.top:v.top;
v.width=u.width>v.width?u.width:v.width;
v.height=u.height>v.height?u.height:v.height;
}}if(v.left!=undefined){r.style.left=v.left+o;
r.style.top=v.top+o;
}if(v.width!=undefined){if(v.width<0){v.width=0;
}
if(v.height<0){v.height=0;
}
if(v.elementToApplyDimensions){r=v.elementToApplyDimensions;
}r.style.width=v.width+o;
r.style.height=v.height+o;
}},tint:function(w,x){for(var name in this){if(name.indexOf(m)==0&&this[name] instanceof Function){this[name](w,x,w.style);
}}},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){var B=[n,b,g,e];
var z={};

for(var name in this){if(name.indexOf(h)==0&&this[name] instanceof Function){var A=this[name]();

for(var i=0;i<B.length;i++){var y=B[i];
if(z[y]==undefined){z[y]=A[y];
}if(A[y]<z[y]){z[y]=A[y];
}}}}if(z[n]!=undefined){return z;
}return {top:0,right:0,bottom:0,left:0};
}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__ie:[],add:function(c){var d=this.__ie;

if(qx.lang.Array.contains(d,c)){return;
}d.unshift(c);
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__ie;

for(var i=e.length-1;i>=0;i--){var f=e[i];
e.splice(i,1);
f.dispose();
}if(e.length!=0){return;
}this.__ie=[];
}}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(c,d){var q=this._getLayoutChildren();
var g,p,n;
var s,top,e,f,j,h;
var o,m,r,k;

for(var i=0,l=q.length;i<l;i++){g=q[i];
p=g.getSizeHint();
n=g.getLayoutProperties();
o=g.getMarginTop();
m=g.getMarginRight();
r=g.getMarginBottom();
k=g.getMarginLeft();
s=n.left!=null?n.left:n.edge;

if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*c/100);
}e=n.right!=null?n.right:n.edge;

if(qx.lang.Type.isString(e)){e=Math.round(parseFloat(e)*c/100);
}top=n.top!=null?n.top:n.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*d/100);
}f=n.bottom!=null?n.bottom:n.edge;

if(qx.lang.Type.isString(f)){f=Math.round(parseFloat(f)*d/100);
}if(s!=null&&e!=null){j=c-s-e-k-m;
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}s+=k;
}else{j=n.width;

if(j==null){j=p.width;
}else{j=Math.round(parseFloat(j)*c/100);
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}}
if(e!=null){s=c-j-e-m-k;
}else if(s==null){s=k;
}else{s+=k;
}}if(top!=null&&f!=null){h=d-top-f-o-r;
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}top+=o;
}else{h=n.height;

if(h==null){h=p.height;
}else{h=Math.round(parseFloat(h)*d/100);
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}}
if(f!=null){top=d-h-f-r-o;
}else if(top==null){top=o;
}else{top+=o;
}}g.renderLayout(s,top,j,h);
}},_computeSizeHint:function(){var I=0,H=0;
var F=0,D=0;
var B,A;
var z,x;
var t=this._getLayoutChildren();
var w,G,v;
var J,top,u,y;

for(var i=0,l=t.length;i<l;i++){w=t[i];
G=w.getLayoutProperties();
v=w.getSizeHint();
var E=w.getMarginLeft()+w.getMarginRight();
var C=w.getMarginTop()+w.getMarginBottom();
B=v.width+E;
A=v.minWidth+E;
J=G.left!=null?G.left:G.edge;

if(J&&typeof J===b){B+=J;
A+=J;
}u=G.right!=null?G.right:G.edge;

if(u&&typeof u===b){B+=u;
A+=u;
}I=Math.max(I,B);
H=Math.max(H,A);
z=v.height+C;
x=v.minHeight+C;
top=G.top!=null?G.top:G.edge;

if(top&&typeof top===b){z+=top;
x+=top;
}y=G.bottom!=null?G.bottom:G.edge;

if(y&&typeof y===b){z+=y;
x+=y;
}F=Math.max(F,z);
D=Math.max(D,x);
}return {width:I,minWidth:H,height:F,minHeight:D};
}}});
})();
(function(){var m="",l="engine.name",k=";",j="opacity:",i="opacity",h="filter",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select(l,{"mshtml":function(n){if(n>=1){n=1;
}
if(n<0.00001){n=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return j+n+k;
}else{return d+(n*100)+f;
}},"gecko":function(o){if(o>=1){o=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return b+o+k;
}else{return j+o+k;
}},"default":function(p){if(p>=1){return m;
}return j+p+k;
}}),set:qx.core.Environment.select(l,{"mshtml":function(q,r){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(r>=1){r=m;
}q.style.opacity=r;
}else{var s=qx.bom.element.Style.get(q,h,qx.bom.element.Style.COMPUTED_MODE,false);

if(r>=1){r=1;
}
if(r<0.00001){r=0;
}if(!q.currentStyle||!q.currentStyle.hasLayout){q.style.zoom=1;
}q.style.filter=s.replace(/alpha\([^\)]*\)/gi,m)+c+r*100+e;
}},"gecko":function(t,u){if(u>=1){u=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){t.style.MozOpacity=u;
}else{t.style.opacity=u;
}},"default":function(v,w){if(w>=1){w=m;
}v.style.opacity=w;
}}),reset:qx.core.Environment.select(l,{"mshtml":function(x){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){x.style.opacity=m;
}else{var y=qx.bom.element.Style.get(x,h,qx.bom.element.Style.COMPUTED_MODE,false);
x.style.filter=y.replace(/alpha\([^\)]*\)/gi,m);
}},"gecko":function(z){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){z.style.MozOpacity=m;
}else{z.style.opacity=m;
}},"default":function(A){A.style.opacity=m;
}}),get:qx.core.Environment.select(l,{"mshtml":function(B,C){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var D=qx.bom.element.Style.get(B,i,C,false);

if(D!=null){return parseFloat(D);
}return 1.0;
}else{var E=qx.bom.element.Style.get(B,h,C,false);

if(E){var D=E.match(/alpha\(opacity=(.*)\)/);

if(D&&D[1]){return parseFloat(D[1])/100;
}}return 1.0;
}},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?g:i,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(I,J){var K=qx.bom.element.Style.get(I,i,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}})},defer:function(L){L.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="qx.debug.databinding",G="set",F="deepBinding",E="item",D="reset",C="qx.data.SingleValueBinding",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",u="Binding property ",v="DEBUG_ON",s="Binding from '",t="PositiveNumber",q="PositiveInteger",r="Binding does not exist!",n=").",p="Date",w=" not possible: No event available. ";
qx.Class.define(C,{statics:{DEBUG_ON:false,__dm:{},bind:function(H,I,J,K,L){var W=this.__do(H,I,J,K,L);
var R=I.split(d);
var N=this.__du(R);
var V=[];
var S=[];
var T=[];
var P=[];
var Q=H;
try{for(var i=0;i<R.length;i++){if(N[i]!==l){P.push(g);
}else{P.push(this.__dp(Q,R[i]));
}V[i]=Q;
if(i==R.length-1){if(N[i]!==l){var bb=N[i]===h?Q.length-1:N[i];
var M=Q.getItem(bb);
this.__dt(M,J,K,L,H);
T[i]=this.__dv(Q,P[i],J,K,L,N[i]);
}else{if(R[i]!=null&&Q[m+qx.lang.String.firstUp(R[i])]!=null){var M=Q[m+qx.lang.String.firstUp(R[i])]();
this.__dt(M,J,K,L,H);
}T[i]=this.__dv(Q,P[i],J,K,L);
}}else{var X={index:i,propertyNames:R,sources:V,listenerIds:T,arrayIndexValues:N,targetObject:J,targetPropertyChain:K,options:L,listeners:S};
var U=qx.lang.Function.bind(this.__dn,this,X);
S.push(U);
T[i]=Q.addListener(P[i],U);
}if(Q[m+qx.lang.String.firstUp(R[i])]==null){Q=null;
}else if(N[i]!==l){Q=Q[m+qx.lang.String.firstUp(R[i])](N[i]);
}else{Q=Q[m+qx.lang.String.firstUp(R[i])]();
}
if(!Q){break;
}}}catch(bc){for(var i=0;i<V.length;i++){if(V[i]&&T[i]){V[i].removeListenerById(T[i]);
}}var ba=W.targets;
var O=W.listenerIds[i];
for(var i=0;i<ba.length;i++){if(ba[i]&&O[i]){ba[i].removeListenerById(O[i]);
}}throw bc;
}var Y={type:F,listenerIds:T,sources:V,targetListenerIds:W.listenerIds,targets:W.targets};
this.__dw(Y,H,I,J,K);
return Y;
},__dn:function(bd){if(bd.options&&bd.options.onUpdate){bd.options.onUpdate(bd.sources[bd.index],bd.targetObject);
}for(var j=bd.index+1;j<bd.propertyNames.length;j++){var bh=bd.sources[j];
bd.sources[j]=null;

if(!bh){continue;
}bh.removeListenerById(bd.listenerIds[j]);
}var bh=bd.sources[bd.index];
for(var j=bd.index+1;j<bd.propertyNames.length;j++){if(bd.arrayIndexValues[j-1]!==l){bh=bh[m+qx.lang.String.firstUp(bd.propertyNames[j-1])](bd.arrayIndexValues[j-1]);
}else{bh=bh[m+qx.lang.String.firstUp(bd.propertyNames[j-1])]();
}bd.sources[j]=bh;
if(!bh){this.__dq(bd.targetObject,bd.targetPropertyChain);
break;
}if(j==bd.propertyNames.length-1){if(qx.Class.implementsInterface(bh,qx.data.IListData)){var bi=bd.arrayIndexValues[j]===h?bh.length-1:bd.arrayIndexValues[j];
var bf=bh.getItem(bi);
this.__dt(bf,bd.targetObject,bd.targetPropertyChain,bd.options,bd.sources[bd.index]);
bd.listenerIds[j]=this.__dv(bh,g,bd.targetObject,bd.targetPropertyChain,bd.options,bd.arrayIndexValues[j]);
}else{if(bd.propertyNames[j]!=null&&bh[m+qx.lang.String.firstUp(bd.propertyNames[j])]!=null){var bf=bh[m+qx.lang.String.firstUp(bd.propertyNames[j])]();
this.__dt(bf,bd.targetObject,bd.targetPropertyChain,bd.options,bd.sources[bd.index]);
}var bg=this.__dp(bh,bd.propertyNames[j]);
bd.listenerIds[j]=this.__dv(bh,bg,bd.targetObject,bd.targetPropertyChain,bd.options);
}}else{if(bd.listeners[j]==null){var be=qx.lang.Function.bind(this.__dn,this,bd);
bd.listeners.push(be);
}if(qx.Class.implementsInterface(bh,qx.data.IListData)){var bg=g;
}else{var bg=this.__dp(bh,bd.propertyNames[j]);
}bd.listenerIds[j]=bh.addListener(bg,bd.listeners[j]);
}}},__do:function(bj,bk,bl,bm,bn){var br=bm.split(d);
var bp=this.__du(br);
var bw=[];
var bv=[];
var bt=[];
var bs=[];
var bq=bl;
for(var i=0;i<br.length-1;i++){if(bp[i]!==l){bs.push(g);
}else{try{bs.push(this.__dp(bq,br[i]));
}catch(e){break;
}}bw[i]=bq;
var bu=function(){for(var j=i+1;j<br.length-1;j++){var bz=bw[j];
bw[j]=null;

if(!bz){continue;
}bz.removeListenerById(bt[j]);
}var bz=bw[i];
for(var j=i+1;j<br.length-1;j++){var bx=qx.lang.String.firstUp(br[j-1]);
if(bp[j-1]!==l){var bA=bp[j-1]===h?bz.getLength()-1:bp[j-1];
bz=bz[m+bx](bA);
}else{bz=bz[m+bx]();
}bw[j]=bz;
if(bv[j]==null){bv.push(bu);
}if(qx.Class.implementsInterface(bz,qx.data.IListData)){var by=g;
}else{try{var by=qx.data.SingleValueBinding.__dp(bz,br[j]);
}catch(e){break;
}}bt[j]=bz.addListener(by,bv[j]);
}qx.data.SingleValueBinding.updateTarget(bj,bk,bl,bm,bn);
};
bv.push(bu);
bt[i]=bq.addListener(bs[i],bu);
var bo=qx.lang.String.firstUp(br[i]);
if(bq[m+bo]==null){bq=null;
}else if(bp[i]!==l){bq=bq[m+bo](bp[i]);
}else{bq=bq[m+bo]();
}
if(!bq){break;
}}return {listenerIds:bt,targets:bw};
},updateTarget:function(bB,bC,bD,bE,bF){var bG=this.getValueFromObject(bB,bC);
bG=qx.data.SingleValueBinding.__dx(bG,bD,bE,bF,bB);
this.__dr(bD,bE,bG);
},getValueFromObject:function(o,bH){var bL=this.__ds(o,bH);
var bJ;

if(bL!=null){var bN=bH.substring(bH.lastIndexOf(d)+1,bH.length);
if(bN.charAt(bN.length-1)==f){var bI=bN.substring(bN.lastIndexOf(k)+1,bN.length-1);
var bK=bN.substring(0,bN.lastIndexOf(k));
var bM=bL[m+qx.lang.String.firstUp(bK)]();

if(bI==h){bI=bM.length-1;
}
if(bM!=null){bJ=bM.getItem(bI);
}}else{bJ=bL[m+qx.lang.String.firstUp(bN)]();
}}return bJ;
},__dp:function(bO,bP){var bQ=this.__dy(bO,bP);
if(bQ==null){if(qx.Class.supportsEvent(bO.constructor,bP)){bQ=bP;
}else if(qx.Class.supportsEvent(bO.constructor,g+qx.lang.String.firstUp(bP))){bQ=g+qx.lang.String.firstUp(bP);
}else{throw new qx.core.AssertionError(u+bP+x+bO+w);
}}return bQ;
},__dq:function(bR,bS){var bT=this.__ds(bR,bS);

if(bT!=null){var bU=bS.substring(bS.lastIndexOf(d)+1,bS.length);
if(bU.charAt(bU.length-1)==f){this.__dr(bR,bS,null);
return;
}if(bT[D+qx.lang.String.firstUp(bU)]!=undefined){bT[D+qx.lang.String.firstUp(bU)]();
}else{bT[G+qx.lang.String.firstUp(bU)](null);
}}},__dr:function(bV,bW,bX){var cc=this.__ds(bV,bW);

if(cc!=null){var cd=bW.substring(bW.lastIndexOf(d)+1,bW.length);
if(cd.charAt(cd.length-1)==f){var bY=cd.substring(cd.lastIndexOf(k)+1,cd.length-1);
var cb=cd.substring(0,cd.lastIndexOf(k));
var ca=bV;

if(!qx.Class.implementsInterface(ca,qx.data.IListData)){ca=cc[m+qx.lang.String.firstUp(cb)]();
}
if(bY==h){bY=ca.length-1;
}
if(ca!=null){ca.setItem(bY,bX);
}}else{cc[G+qx.lang.String.firstUp(cd)](bX);
}}},__ds:function(ce,cf){var ci=cf.split(d);
var cj=ce;
for(var i=0;i<ci.length-1;i++){try{var ch=ci[i];
if(ch.indexOf(f)==ch.length-1){var cg=ch.substring(ch.indexOf(k)+1,ch.length-1);
ch=ch.substring(0,ch.indexOf(k));
}if(ch!=l){cj=cj[m+qx.lang.String.firstUp(ch)]();
}if(cg!=null){if(cg==h){cg=cj.length-1;
}cj=cj.getItem(cg);
cg=null;
}}catch(ck){return null;
}}return cj;
},__dt:function(cl,cm,cn,co,cp){cl=this.__dx(cl,cm,cn,co,cp);
if(cl===undefined){this.__dq(cm,cn);
}if(cl!==undefined){try{this.__dr(cm,cn,cl);
if(co&&co.onUpdate){co.onUpdate(cp,cm,cl);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(co&&co.onSetFail){co.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cl+" on "+cm+". Error message: "+e);
}}}},__du:function(cq){var cr=[];
for(var i=0;i<cq.length;i++){var name=cq[i];
if(qx.lang.String.endsWith(name,f)){var cs=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cs!==h){if(cs==l||isNaN(parseInt(cs,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cq[i]=name.substring(0,name.indexOf(k));
cr[i]=l;
cr[i+1]=cs;
cq.splice(i+1,0,E);
i++;
}else{cr[i]=cs;
cq.splice(i,1,E);
}}else{cr[i]=l;
}}return cr;
},__dv:function(ct,cu,cv,cw,cx,cy){var cz;
var cB=function(cC,e){if(cC!==l){if(cC===h){cC=ct.length-1;
}var cF=ct.getItem(cC);
if(cF===undefined){qx.data.SingleValueBinding.__dq(cv,cw);
}var cD=e.getData().start;
var cE=e.getData().end;

if(cC<cD||cC>cE){return;
}}else{var cF=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+ct+" by "+cu+" to "+cv+" ("+cw+")");
qx.log.Logger.debug("Data before conversion: "+cF);
}cF=qx.data.SingleValueBinding.__dx(cF,cv,cw,cx,ct);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cF);
}try{if(cF!==undefined){qx.data.SingleValueBinding.__dr(cv,cw,cF);
}else{qx.data.SingleValueBinding.__dq(cv,cw);
}if(cx&&cx.onUpdate){cx.onUpdate(ct,cv,cF);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cx&&cx.onSetFail){cx.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cF+" on "+cv+". Error message: "+e);
}}};
if(!cy){cy=l;
}cB=qx.lang.Function.bind(cB,ct,cy);
var cA=ct.addListener(cu,cB);
return cA;
},__dw:function(cG,cH,cI,cJ,cK){if(this.__dm[cH.toHashCode()]===undefined){this.__dm[cH.toHashCode()]=[];
}this.__dm[cH.toHashCode()].push([cG,cH,cI,cJ,cK]);
},__dx:function(cL,cM,cN,cO,cP){if(cO&&cO.converter){var cR;

if(cM.getModel){cR=cM.getModel();
}return cO.converter(cL,cR,cP,cM);
}else{var cT=this.__ds(cM,cN);
var cU=cN.substring(cN.lastIndexOf(d)+1,cN.length);
if(cT==null){return cL;
}var cS=qx.Class.getPropertyDefinition(cT.constructor,cU);
var cQ=cS==null?l:cS.check;
return this.__dz(cL,cQ);
}},__dy:function(cV,cW){var cX=qx.Class.getPropertyDefinition(cV.constructor,cW);

if(cX==null){return null;
}return cX.event;
},__dz:function(cY,da){var db=qx.lang.Type.getClass(cY);
if((db==c||db==b)&&(da==y||da==q)){cY=parseInt(cY,10);
}if((db==A||db==c||db==p)&&da==b){cY=cY+l;
}if((db==c||db==b)&&(da==c||da==t)){cY=parseFloat(cY);
}return cY;
},removeBindingFromObject:function(dc,dd){if(dd.type==F){for(var i=0;i<dd.sources.length;i++){if(dd.sources[i]){dd.sources[i].removeListenerById(dd.listenerIds[i]);
}}for(var i=0;i<dd.targets.length;i++){if(dd.targets[i]){dd.targets[i].removeListenerById(dd.targetListenerIds[i]);
}}}else{dc.removeListenerById(dd);
}var de=this.__dm[dc.toHashCode()];
if(de!=undefined){for(var i=0;i<de.length;i++){if(de[i][0]==dd){qx.lang.Array.remove(de,de[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(df){var dg=this.__dm[df.toHashCode()];

if(dg!=undefined){for(var i=dg.length-1;i>=0;i--){this.removeBindingFromObject(df,dg[i][0]);
}}},getAllBindingsForObject:function(dh){if(this.__dm[dh.toHashCode()]===undefined){this.__dm[dh.toHashCode()]=[];
}return this.__dm[dh.toHashCode()];
},removeAllBindings:function(){for(var dj in this.__dm){var di=qx.core.ObjectRegistry.fromHashCode(dj);
if(di==null){delete this.__dm[dj];
continue;
}this.removeAllBindingsForObject(di);
}this.__dm={};
},getAllBindings:function(){return this.__dm;
},showBindingInLog:function(dk,dl){var dn;
for(var i=0;i<this.__dm[dk.toHashCode()].length;i++){if(this.__dm[dk.toHashCode()][i][0]==dl){dn=this.__dm[dk.toHashCode()][i];
break;
}}
if(dn===undefined){var dm=r;
}else{var dm=s+dn[1]+B+dn[2]+z+dn[3]+B+dn[4]+n;
}qx.log.Logger.debug(dm);
},showAllBindingsInLog:function(){for(var dq in this.__dm){var dp=qx.core.ObjectRegistry.fromHashCode(dq);

for(var i=0;i<this.__dm[dq].length;i++){this.showBindingInLog(dp,this.__dm[dq][i][0]);
}}}}});
qx.log.Logger.deprecatedConstantWarning(C,v);
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
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__jJ=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__jJ:null,_applyTimeoutInterval:function(h){this.__jJ.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__jJ){this.__jJ.stop();
}this.__jJ=null;
}});
})();
(function(){var k="qx.dynlocale",j="Boolean",i="color",h="enabled",g="changeLocale",f="_applyTextAlign",d="qx.ui.core.Widget",c="nowrap",b="changeTextAlign",a="_applyWrap",C="changeValue",B="qx.ui.basic.Label",A="whiteSpace",z="css.textoverflow",y="html.xul",x="_applyValue",w="center",v="_applyBuddy",u="String",t="textAlign",r="right",s="changeRich",p="normal",q="_applyRich",n="click",o="label",l="left",m="A";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(D){qx.ui.core.Widget.call(this);

if(D!=null){this.setValue(D);
}
if(qx.core.Environment.get(k)){qx.locale.Manager.getInstance().addListener(g,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:s,apply:q},wrap:{check:j,init:true,apply:a},value:{check:u,apply:x,event:C,nullable:true},buddy:{check:d,apply:v,nullable:true,init:null,dereference:true},textAlign:{check:[l,w,r],nullable:true,themeable:true,apply:f,event:b},appearance:{refine:true,init:o},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__la:null,__lb:null,__lc:null,__ld:null,_getContentHint:function(){if(this.__lb){this.__le=this.__lf();
delete this.__lb;
}return {width:this.__le.width,height:this.__le.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(E){if(!qx.core.Environment.get(z)&&qx.core.Environment.get(y)){if(E&&!this.isRich()){return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,E);
},_getContentHeightForWidth:function(F){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__lf(F).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(G,H){this.getContentElement().setStyle(t,G);
},_applyTextColor:function(I,J){if(I){this.getContentElement().setStyle(i,qx.theme.manager.Color.getInstance().resolve(I));
}else{this.getContentElement().removeStyle(i);
}},__le:{width:0,height:0},_applyFont:function(K,L){var M;

if(K){this.__la=qx.theme.manager.Font.getInstance().resolve(K);
M=this.__la.getStyles();
}else{this.__la=null;
M=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(M);
this.__lb=true;
qx.ui.core.queue.Layout.add(this);
},__lf:function(N){var R=qx.bom.Label;
var P=this.getFont();
var O=P?this.__la.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||m;
var Q=this.getRich();
return Q?R.getHtmlSize(content,O,N):R.getTextSize(content,O);
},_applyBuddy:function(S,T){if(T!=null){T.removeBinding(this.__lc);
this.__lc=null;
this.removeListenerById(this.__ld);
this.__ld=null;
}
if(S!=null){this.__lc=S.bind(h,this,h);
this.__ld=this.addListener(n,function(){if(S.isFocusable()){S.focus.apply(S);
}},this);
}},_applyRich:function(U){this.getContentElement().setRich(U);
this.__lb=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(V,W){if(V&&!this.isRich()){}
if(this.isRich()){var X=V?p:c;
this.getContentElement().setStyle(A,X);
}},_onChangeLocale:qx.core.Environment.select(k,{"true":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"false":null}),_applyValue:function(Y,ba){this.getContentElement().setValue(Y);
this.__lb=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Environment.get(k)){qx.locale.Manager.getInstance().removeListener(g,this._onChangeLocale,this);
}if(this.__lc!=null){var bb=this.getBuddy();

if(bb!=null&&!bb.isDisposed()){bb.removeBinding(this.__lc);
}}this.__la=this.__lc=null;
}});
})();
(function(){var f="engine.name",e="qx.dom.Hierarchy",d="previousSibling",c="*",b="nextSibling",a="parentNode";
qx.Class.define(e,{statics:{getNodeIndex:function(g){var h=0;

while(g&&(g=g.previousSibling)){h++;
}return h;
},getElementIndex:function(i){var j=0;
var k=qx.dom.Node.ELEMENT;

while(i&&(i=i.previousSibling)){if(i.nodeType==k){j++;
}}return j;
},getNextElementSibling:function(l){while(l&&(l=l.nextSibling)&&!qx.dom.Node.isElement(l)){continue;
}return l||null;
},getPreviousElementSibling:function(m){while(m&&(m=m.previousSibling)&&!qx.dom.Node.isElement(m)){continue;
}return m||null;
},contains:qx.core.Environment.select(f,{"webkit|mshtml|opera":function(n,o){if(qx.dom.Node.isDocument(n)){var p=qx.dom.Node.getDocument(o);
return n&&p==n;
}else if(qx.dom.Node.isDocument(o)){return false;
}else{return n.contains(o);
}},"gecko":function(q,r){return !!(q.compareDocumentPosition(r)&16);
},"default":function(s,t){while(t){if(s==t){return true;
}t=t.parentNode;
}return false;
}}),isRendered:qx.core.Environment.select(f,{"mshtml":function(u){if(!u.parentNode||!u.offsetParent){return false;
}var v=u.ownerDocument||u.document;
return v.body.contains(u);
},"gecko":function(w){var x=w.ownerDocument||w.document;
return !!(x.compareDocumentPosition(w)&16);
},"default":function(y){if(!y.parentNode||!y.offsetParent){return false;
}var z=y.ownerDocument||y.document;
return z.body.contains(y);
}}),isDescendantOf:function(A,B){return this.contains(B,A);
},getCommonParent:qx.core.Environment.select(f,{"mshtml|opera":function(C,D){if(C===D){return C;
}
while(C&&qx.dom.Node.isElement(C)){if(C.contains(D)){return C;
}C=C.parentNode;
}return null;
},"default":function(E,F){if(E===F){return E;
}var G={};
var J=qx.core.ObjectRegistry;
var I,H;

while(E||F){if(E){I=J.toHashCode(E);

if(G[I]){return G[I];
}G[I]=E;
E=E.parentNode;
}
if(F){H=J.toHashCode(F);

if(G[H]){return G[H];
}G[H]=F;
F=F.parentNode;
}}return null;
}}),getAncestors:function(K){return this._recursivelyCollect(K,a);
},getChildElements:function(L){L=L.firstChild;

if(!L){return [];
}var M=this.getNextSiblings(L);

if(L.nodeType===1){M.unshift(L);
}return M;
},getDescendants:function(N){return qx.lang.Array.fromCollection(N.getElementsByTagName(c));
},getFirstDescendant:function(O){O=O.firstChild;

while(O&&O.nodeType!=1){O=O.nextSibling;
}return O;
},getLastDescendant:function(P){P=P.lastChild;

while(P&&P.nodeType!=1){P=P.previousSibling;
}return P;
},getPreviousSiblings:function(Q){return this._recursivelyCollect(Q,d);
},getNextSiblings:function(R){return this._recursivelyCollect(R,b);
},_recursivelyCollect:function(S,T){var U=[];

while(S=S[T]){if(S.nodeType==1){U.push(S);
}}return U;
},getSiblings:function(V){return this.getPreviousSiblings(V).reverse().concat(this.getNextSiblings(V));
},isEmpty:function(W){W=W.firstChild;

while(W){if(W.nodeType===qx.dom.Node.ELEMENT||W.nodeType===qx.dom.Node.TEXT){return false;
}W=W.nextSibling;
}return true;
},cleanWhitespace:function(X){var Y=X.firstChild;

while(Y){var ba=Y.nextSibling;

if(Y.nodeType==3&&!/\S/.test(Y.nodeValue)){X.removeChild(Y);
}Y=ba;
}}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__hM:{},remove:function(c){delete this.__hM[c.$$hash];
},add:function(d){this.__hM[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},isScheduled:function(e){return !!this.__hM[e.$$hash];
},flush:function(){var f=this.__hP();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(k){var l=this.__hO;
var n=0;
var parent=k;
while(true){if(l[parent.$$hash]!=null){n+=l[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
n+=1;
}var m=n;

while(k&&k!==parent){l[k.$$hash]=m--;
k=k.$$parent;
}return n;
},__hN:function(){var t=qx.ui.core.queue.Visibility;
this.__hO={};
var s=[];
var r=this.__hM;
var o,q;

for(var p in r){o=r[p];

if(t.isVisible(o)){q=this.getNestingLevel(o);
if(!s[q]){s[q]={};
}s[q][p]=o;
delete r[p];
}}return s;
},__hP:function(){var x=[];
var z=this.__hN();

for(var w=z.length-1;w>=0;w--){if(!z[w]){continue;
}
for(var v in z[w]){var u=z[w][v];
if(w==0||u.isRootWidget()||u.hasUserBounds()){x.push(u);
u.invalidateLayoutCache();
continue;
}var B=u.getSizeHint(false);

if(B){u.invalidateLayoutCache();
var y=u.getSizeHint();
var A=(!u.getBounds()||B.minWidth!==y.minWidth||B.width!==y.width||B.maxWidth!==y.maxWidth||B.minHeight!==y.minHeight||B.height!==y.height||B.maxHeight!==y.maxHeight);
}else{A=true;
}
if(A){var parent=u.getLayoutParent();

if(!z[w-1]){z[w-1]={};
}z[w-1][parent.$$hash]=parent;
}else{x.push(u);
}}}return x;
}}});
})();
(function(){var m="",k="engine.name",h="userSelect",g="style",f="MozUserModify",e="px",d="pixelBottom",c="float",b="borderImage",a="styleFloat",F="appearance",E="pixelHeight",D='Ms',C=":",B="cssFloat",A="pixelTop",z="pixelLeft",y='O',x="qx.bom.element.Style",w='Khtml',t='string',u="pixelRight",r='Moz',s="pixelWidth",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(x,{statics:{__eg:function(){var G=[F,h,q,b];
var K={};
var H=document.documentElement.style;
var L=[r,o,w,y,D];

for(var i=0,l=G.length;i<l;i++){var M=G[i];
var I=M;

if(H[M]){K[I]=M;
continue;
}M=qx.lang.String.firstUp(M);

for(var j=0,N=L.length;j<N;j++){var J=L[j]+M;

if(typeof H[J]==t){K[I]=J;
break;
}}}this.__eh=K;
this.__eh[n]=qx.core.Environment.select(k,{"gecko":f,"webkit":v,"default":h});
this.__ei={};

for(var I in K){this.__ei[I]=this.__em(K[I]);
}this.__eh[c]=qx.core.Environment.select(k,{"mshtml":a,"default":B});
},__ej:{width:s,height:E,left:z,right:u,top:A,bottom:d},__ek:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(O){var Q=[];
var S=this.__ek;
var R=this.__ei;
var name,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=R[name]||name;
if(S[name]){Q.push(S[name].compile(P));
}else{Q.push(this.__em(name),C,P,p);
}}return Q.join(m);
},__el:{},__em:function(T){var U=this.__el;
var V=U[T];

if(!V){V=U[T]=qx.lang.String.hyphenate(T);
}return V;
},setCss:qx.core.Environment.select(k,{"mshtml":function(W,X){W.style.cssText=X;
},"default":function(Y,ba){Y.setAttribute(g,ba);
}}),getCss:qx.core.Environment.select(k,{"mshtml":function(bb){return bb.style.cssText.toLowerCase();
},"default":function(bc){return bc.getAttribute(g);
}}),isPropertySupported:function(bd){return (this.__ek[bd]||this.__eh[bd]||bd in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(be,name,bf,bg){name=this.__eh[name]||name;
if(bg!==false&&this.__ek[name]){return this.__ek[name].set(be,bf);
}else{be.style[name]=bf!==null?bf:m;
}},setStyles:function(bh,bi,bj){var bm=this.__eh;
var bo=this.__ek;
var bk=bh.style;

for(var bn in bi){var bl=bi[bn];
var name=bm[bn]||bn;

if(bl===undefined){if(bj!==false&&bo[name]){bo[name].reset(bh);
}else{bk[name]=m;
}}else{if(bj!==false&&bo[name]){bo[name].set(bh,bl);
}else{bk[name]=bl!==null?bl:m;
}}}},reset:function(bp,name,bq){name=this.__eh[name]||name;
if(bq!==false&&this.__ek[name]){return this.__ek[name].reset(bp);
}else{bp.style[name]=m;
}},get:qx.core.Environment.select(k,{"mshtml":function(br,name,bs,bt){name=this.__eh[name]||name;
if(bt!==false&&this.__ek[name]){return this.__ek[name].get(br,bs);
}if(!br.currentStyle){return br.style[name]||m;
}switch(bs){case this.LOCAL_MODE:return br.style[name]||m;
case this.CASCADED_MODE:return br.currentStyle[name]||m;
default:var bx=br.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bx)){return bx;
}var bw=this.__ej[name];

if(bw){var bu=br.style[name];
br.style[name]=bx||0;
var bv=br.style[bw]+e;
br.style[name]=bu;
return bv;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bx)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bx;
}},"default":function(by,name,bz,bA){name=this.__eh[name]||name;
if(bA!==false&&this.__ek[name]){return this.__ek[name].get(by,bz);
}switch(bz){case this.LOCAL_MODE:return by.style[name]||m;
case this.CASCADED_MODE:if(by.currentStyle){return by.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bB=qx.dom.Node.getDocument(by);
var bC=bB.defaultView.getComputedStyle(by,null);
return bC?bC[name]:m;
}}})},defer:function(bD){bD.__eg();
}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="marginTop",g="marginLeft",f="engine.name",e="scroll",d="engine.version",c="border-box",b="borderBottomWidth",a="borderRightWidth",C="auto",B="padding",A="browser.quirksmode",z="qx.bom.element.Location",y="paddingLeft",x="static",w="marginBottom",v="visible",u="BODY",t="opera",q="paddingBottom",r="paddingTop",o="marginRight",p="position",m="margin",n="overflow",k="paddingRight",l="browser.documentmode",s="border";
qx.Class.define(z,{statics:{__hG:function(D,E){return qx.bom.element.Style.get(D,E,qx.bom.element.Style.COMPUTED_MODE,false);
},__hH:function(F,G){return parseInt(qx.bom.element.Style.get(F,G,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hI:function(H){var K=0,top=0;
if(H.getBoundingClientRect&&qx.core.Environment.get(f)!=t){var J=qx.dom.Node.getWindow(H);
K-=qx.bom.Viewport.getScrollLeft(J);
top-=qx.bom.Viewport.getScrollTop(J);
}else{var I=qx.dom.Node.getDocument(H).body;
H=H.parentNode;
while(H&&H!=I){K+=H.scrollLeft;
top+=H.scrollTop;
H=H.parentNode;
}}return {left:K,top:top};
},__hJ:qx.core.Environment.select(f,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=0;
var top=0;
O-=M.clientLeft+N.documentElement.clientLeft;
top-=M.clientTop+N.documentElement.clientTop;

if(!qx.core.Environment.get(A)){O+=this.__hH(M,i);
top+=this.__hH(M,j);
}return {left:O,top:top};
},"webkit":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=Q.offsetLeft;
var top=Q.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<530.17){S+=this.__hH(Q,i);
top+=this.__hH(Q,j);
}return {left:S,top:top};
},"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;
var V=U.offsetLeft;
var top=U.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<1.9){V+=this.__hH(U,g);
top+=this.__hH(U,h);
}if(qx.bom.element.BoxSizing.get(U)!==c){V+=this.__hH(U,i);
top+=this.__hH(U,j);
}return {left:V,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__hK:qx.core.Environment.select(f,{"mshtml|webkit":function(ba){var bc=qx.dom.Node.getDocument(ba);
if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();
var be=bd.left;
var top=bd.top;
}else{var be=ba.offsetLeft;
var top=ba.offsetTop;
ba=ba.offsetParent;
var bb=bc.body;
while(ba&&ba!=bb){be+=ba.offsetLeft;
top+=ba.offsetTop;
be+=this.__hH(ba,i);
top+=this.__hH(ba,j);
ba=ba.offsetParent;
}}return {left:be,top:top};
},"gecko":function(bf){if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();
var bj=Math.round(bi.left);
var top=Math.round(bi.top);
}else{var bj=0;
var top=0;
var bg=qx.dom.Node.getDocument(bf).body;
var bh=qx.bom.element.BoxSizing;

if(bh.get(bf)!==c){bj-=this.__hH(bf,i);
top-=this.__hH(bf,j);
}
while(bf&&bf!==bg){bj+=bf.offsetLeft;
top+=bf.offsetTop;
if(bh.get(bf)!==c){bj+=this.__hH(bf,i);
top+=this.__hH(bf,j);
}if(bf.parentNode&&this.__hG(bf.parentNode,n)!=v){bj+=this.__hH(bf.parentNode,i);
top+=this.__hH(bf.parentNode,j);
}bf=bf.offsetParent;
}}return {left:bj,top:top};
},"default":function(bk){var bm=0;
var top=0;
var bl=qx.dom.Node.getDocument(bk).body;
while(bk&&bk!==bl){bm+=bk.offsetLeft;
top+=bk.offsetTop;
bk=bk.offsetParent;
}return {left:bm,top:top};
}}),get:function(bn,bo){if(bn.tagName==u){var location=this.__hL(bn);
var bv=location.left;
var top=location.top;
}else{var bp=this.__hJ(bn);
var bu=this.__hK(bn);
var scroll=this.__hI(bn);
var bv=bu.left+bp.left-scroll.left;
var top=bu.top+bp.top-scroll.top;
}var bq=bv+bn.offsetWidth;
var br=top+bn.offsetHeight;

if(bo){if(bo==B||bo==e){var bs=qx.bom.element.Overflow.getX(bn);

if(bs==e||bs==C){bq+=bn.scrollWidth-bn.offsetWidth+this.__hH(bn,i)+this.__hH(bn,a);
}var bt=qx.bom.element.Overflow.getY(bn);

if(bt==e||bt==C){br+=bn.scrollHeight-bn.offsetHeight+this.__hH(bn,j)+this.__hH(bn,b);
}}
switch(bo){case B:bv+=this.__hH(bn,y);
top+=this.__hH(bn,r);
bq-=this.__hH(bn,k);
br-=this.__hH(bn,q);
case e:bv-=bn.scrollLeft;
top-=bn.scrollTop;
bq-=bn.scrollLeft;
br-=bn.scrollTop;
case s:bv+=this.__hH(bn,i);
top+=this.__hH(bn,j);
bq-=this.__hH(bn,a);
br-=this.__hH(bn,b);
break;
case m:bv-=this.__hH(bn,g);
top-=this.__hH(bn,h);
bq+=this.__hH(bn,o);
br+=this.__hH(bn,w);
break;
}}return {left:bv,top:top,right:bq,bottom:br};
},__hL:qx.core.Environment.select(f,{"default":function(bw){var top=bw.offsetTop+this.__hH(bw,h);
var bx=bw.offsetLeft+this.__hH(bw,g);
return {left:bx,top:top};
},"mshtml":function(by){var top=by.offsetTop;
var bz=by.offsetLeft;

if(!((parseFloat(qx.core.Environment.get(d))<8||qx.core.Environment.get(l)<8)&&!qx.core.Environment.get(A))){top+=this.__hH(by,h);
bz+=this.__hH(by,g);
}return {left:bz,top:top};
},"gecko":function(bA){var top=bA.offsetTop+this.__hH(bA,h)+this.__hH(bA,i);
var bB=bA.offsetLeft+this.__hH(bA,g)+this.__hH(bA,j);
return {left:bB,top:top};
}}),getLeft:function(bC,bD){return this.get(bC,bD).left;
},getTop:function(bE,bF){return this.get(bE,bF).top;
},getRight:function(bG,bH){return this.get(bG,bH).right;
},getBottom:function(bI,bJ){return this.get(bI,bJ).bottom;
},getRelative:function(bK,bL,bM,bN){var bP=this.get(bK,bM);
var bO=this.get(bL,bN);
return {left:bP.left-bO.left,top:bP.top-bO.top,right:bP.right-bO.right,bottom:bP.bottom-bO.bottom};
},getPosition:function(bQ){return this.getRelative(bQ,this.getOffsetParent(bQ));
},getOffsetParent:function(bR){var bT=bR.offsetParent||document.body;
var bS=qx.bom.element.Style;

while(bT&&(!/^body|html$/i.test(bT.tagName)&&bS.get(bT,p)===x)){bT=bT.offsetParent;
}return bT;
}}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__gJ:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__gK:{},__gL:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__gL[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__gL[t]=true;
}catch(e){qx.bom.Element.__gL[t]=false;
}}return qx.bom.Element.__gL[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__gK[w]){var v=qx.bom.Element.__gK[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__gK[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__gJ;
var z=p;

for(var C in x){if(A[C]){z+=C+k+x[C]+d;
}}var D;
if(z!=p){if(qx.bom.Element.allowCreationWithMarkup(y)){D=y.document.createElement(m+name+o+z+n);
}else{var B=qx.bom.Element.getHelperElement(y);
B.innerHTML=m+name+o+z+a+name+n;
D=B.firstChild;
}}else{D=y.document.createElement(name);
}
for(var C in x){if(!A[C]){qx.bom.element.Attribute.set(D,C,x[C]);
}}return D;
},empty:function(E){return E.innerHTML=p;
},addListener:function(F,G,H,self,I){return qx.event.Registration.addListener(F,G,H,self,I);
},removeListener:function(J,K,L,self,M){return qx.event.Registration.removeListener(J,K,L,self,M);
},removeListenerById:function(N,O){return qx.event.Registration.removeListenerById(N,O);
},hasListener:function(P,Q,R){return qx.event.Registration.hasListener(P,Q,R);
},focus:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).focus(S);
},blur:function(T){qx.event.Registration.getManager(T).getHandler(qx.event.handler.Focus).blur(T);
},activate:function(U){qx.event.Registration.getManager(U).getHandler(qx.event.handler.Focus).activate(U);
},deactivate:function(V){qx.event.Registration.getManager(V).getHandler(qx.event.handler.Focus).deactivate(V);
},capture:function(W,X){qx.event.Registration.getManager(W).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(W,X);
},releaseCapture:function(Y){qx.event.Registration.getManager(Y).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(Y);
},matchesSelector:function(ba,bb){if(bb){return qx.bom.Selector.query(bb,ba.parentNode).length>0;
}else{return false;
}},clone:function(bc,bd){var bg;

if(bd||((qx.core.Environment.get(r)==q)&&!qx.xml.Document.isXmlDocument(bc))){var bk=qx.event.Registration.getManager(bc);
var be=qx.dom.Hierarchy.getDescendants(bc);
be.push(bc);
}if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],false);
}}var bg=bc.cloneNode(true);
if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],true);
}}if(bd===true){var bn=qx.dom.Hierarchy.getDescendants(bg);
bn.push(bg);
var bf,bi,bm,bh;

for(var i=0,bl=be.length;i<bl;i++){bm=be[i];
bf=bk.serializeListeners(bm);

if(bf.length>0){bi=bn[i];

for(var j=0,bj=bf.length;j<bj;j++){bh=bf[j];
bk.addListener(bi,bh.type,bh.handler,bh.self,bh.capture);
}}}}return bg;
}}});
})();
(function(){var k="px",j="engine.name",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="b64",I="scale-y",H="qx/icon",G="repeat",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',r="qx.bom.element.Decoration",s="', sizingMethod='",p='"/>',q="png",n="')",o='"></div>',l='" style="',m="none",t="webkit",u=" ",w="repeat-x",v="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(r,{statics:{DEBUG:false,__iF:{},__iG:(qx.core.Environment.get(j)==c)&&qx.core.Environment.get(D)<9,__iH:qx.core.Environment.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iI:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(J,K,L,M){var O=this.getTagName(L,K);

if(O!=J.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var P=this.getAttributes(K,L,M);

if(O===h){J.src=P.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(J.style.backgroundPosition!=g&&P.style.backgroundPosition===undefined){P.style.backgroundPosition=null;
}if(J.style.clip!=g&&P.style.clip===undefined){P.style.clip=null;
}var N=qx.bom.element.Style;
N.setStyles(J,P.style);
if(this.__iG){try{J.filters[v].apply();
}catch(e){}}},create:function(Q,R,S){var T=this.getTagName(R,Q);
var V=this.getAttributes(Q,R,S);
var U=qx.bom.element.Style.compile(V.style);

if(T===h){return z+V.src+l+U+p;
}else{return B+U+o;
}},getTagName:function(W,X){if((qx.core.Environment.get(j)==c)){if(X&&this.__iG&&this.__iH[W]&&qx.lang.String.endsWith(X,F)){return i;
}}return this.__iI[W];
},getAttributes:function(Y,ba,bb){if(!bb){bb={};
}
if(!bb.position){bb.position=x;
}
if((qx.core.Environment.get(j)==c)){bb.fontSize=0;
bb.lineHeight=0;
}else if((qx.core.Environment.get(j)==t)){bb.WebkitUserDrag=m;
}var bd=qx.util.ResourceManager.getInstance().getImageFormat(Y)||qx.io.ImageLoader.getFormat(Y);
var bc;
if(this.__iG&&this.__iH[ba]&&bd===q){bc=this.__iL(bb,ba,Y);
}else{if(ba===b){bc=this.__iM(bb,ba,Y);
}else if(ba===d||ba===I){bc=this.__iN(bb,ba,Y);
}else{bc=this.__iQ(bb,ba,Y);
}}return bc;
},__iJ:function(be,bf,bh){if(be.width==null&&bf!=null){be.width=bf+k;
}
if(be.height==null&&bh!=null){be.height=bh+k;
}return be;
},__iK:function(bi){var bj=qx.util.ResourceManager.getInstance().getImageWidth(bi)||qx.io.ImageLoader.getWidth(bi);
var bk=qx.util.ResourceManager.getInstance().getImageHeight(bi)||qx.io.ImageLoader.getHeight(bi);
return {width:bj,height:bk};
},__iL:function(bl,bm,bn){var bq=this.__iK(bn);
bl=this.__iJ(bl,bq.width,bq.height);
var bp=bm==f?E:b;
var bo=C+qx.util.ResourceManager.getInstance().toUri(bn)+s+bp+n;
bl.filter=bo;
bl.backgroundImage=bl.backgroundRepeat=g;
return {style:bl};
},__iM:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().toUri(bt);
var bv=this.__iK(bt);
br=this.__iJ(br,bv.width,bv.height);
return {src:bu,style:br};
},__iN:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance();
var bC=bz.getCombinedFormat(by);
var bE=this.__iK(by);
var bA;

if(bC){var bD=bz.getData(by);
var bB=bD[4];

if(bC==a){bA=bz.toDataUri(by);
}else{bA=bz.toUri(bB);
}
if(bx===d){bw=this.__iO(bw,bD,bE.height);
}else{bw=this.__iP(bw,bD,bE.width);
}return {src:bA,style:bw};
}else{if(bx==d){bw.height=bE.height==null?null:bE.height+k;
}else if(bx==I){bw.width=bE.width==null?null:bE.width+k;
}bA=bz.toUri(by);
return {src:bA,style:bw};
}},__iO:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+k;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+k;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+k;
}return bF;
},__iP:function(bJ,bK,bL){var bM=qx.util.ResourceManager.getInstance().getImageWidth(bK[4]);
bJ.clip={left:-bK[5],width:bL};
bJ.width=bM+k;
if(bJ.left!=null){bJ.left=(parseInt(bJ.left,10)+bK[5])+k;
}else if(bJ.right!=null){bJ.right=(parseInt(bJ.right,10)+bL-bM-bK[5])+k;
}return bJ;
},__iQ:function(bN,bO,bP){var bS=qx.util.ResourceManager.getInstance();
var bX=bS.getCombinedFormat(bP);
var ca=this.__iK(bP);
if(bX&&bO!==G){var bY=bS.getData(bP);
var bW=bY[4];

if(bX==a){var bV=bS.toDataUri(bP);
var bU=bT=0;
}else{var bV=bS.toUri(bW);
var bU=bY[5];
var bT=bY[6];
}var bQ=qx.bom.element.Background.getStyles(bV,bO,bU,bT);

for(var bR in bQ){bN[bR]=bQ[bR];
}
if(ca.width!=null&&bN.width==null&&(bO==A||bO===f)){bN.width=ca.width+k;
}
if(ca.height!=null&&bN.height==null&&(bO==w||bO===f)){bN.height=ca.height+k;
}return {style:bN};
}else{bN=this.__iJ(bN,ca.width,ca.height);
bN=this.__iR(bN,bP,bO);
return {style:bN};
}},__iR:function(cb,cc,cd){var top=null;
var ch=null;

if(cb.backgroundPosition){var ce=cb.backgroundPosition.split(u);
ch=parseInt(ce[0],10);

if(isNaN(ch)){ch=ce[0];
}top=parseInt(ce[1],10);

if(isNaN(top)){top=ce[1];
}}var cg=qx.bom.element.Background.getStyles(cc,cd,ch,top);

for(var cf in cg){cb[cf]=cg[cf];
}if(cb.filter){cb.filter=g;
}return cb;
},__iS:function(ci){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ci)&&ci.indexOf(H)==-1){if(!this.__iF[ci]){qx.log.Logger.debug("Potential clipped image candidate: "+ci);
this.__iF[ci]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Environment.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__iG;
},"default":function(){return false;
}})}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__kU:null,__kV:null,__kW:null,__kX:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kY:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__kU&&this.__kU.length!=length&&this.__kV&&this.__kU;
var u;
var s=r?this.__kU:new Array(length);
var v=r?this.__kV:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__kU=s;
this.__kV=v;
}this.__kW=t;
this.__kX=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__kY();
}var E=this.__kX;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__kU[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__kW&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__kV[i];

if(L>0){G=E[i].getSizeHint();
H[i]={min:G.minWidth,value:P[i],max:G.maxWidth,flex:L};
}}var C=N.computeFlexOffsets(H,x,F);

for(i in C){O=C[i].offset;
P[i]+=O;
F+=O;
}}var U=E[0].getMarginLeft();
if(F<x&&this.getAlignX()!=m){U=x-F;

if(this.getAlignX()===k){U=Math.round(U/2);
}}var G,top,A,K,D,S,I;
var M=this.getSpacing();
this._clearSeparators();
if(Q){var R=qx.theme.manager.Decoration.getInstance().resolve(Q).getInsets();
var T=R.left+R.right;
}for(i=0;i<length;i+=1){z=E[i];
K=P[i];
G=z.getSizeHint();
S=z.getMarginTop();
I=z.getMarginBottom();
A=Math.max(G.minHeight,Math.min(y-S-I,G.maxHeight));
top=N.computeVerticalAlignOffset(z.getAlignY()||this.getAlignY(),A,y,S,I);
if(i>0){if(Q){U+=D+M;
this._renderSeparator(Q,{left:U,top:0,width:T,height:y});
U+=T+M+z.getMarginLeft();
}else{U+=N.collapseMargins(M,D,z.getMarginLeft());
}}z.renderLayout(U,top,K,A);
U+=K;
D=z.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kY();
}var bc=qx.ui.layout.Util;
var bk=this.__kX;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__kV[i];
var X=this.__kU[i];

if(bg){V+=W.minWidth;
}else if(X){ba=Math.max(ba,Math.round(W.minWidth/X));
}else{V+=W.width;
}bj=bh.getMarginTop()+bh.getMarginBottom();
if((W.height+bj)>bb){bb=W.height+bj;
}if((W.minHeight+bj)>Y){Y=W.minHeight+bj;
}}V+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeHorizontalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeHorizontalGaps(bk,bf,true);
}return {minWidth:V+be,width:bd+be,minHeight:Y,height:bb};
}},destruct:function(){this.__kU=this.__kV=this.__kX=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="div",b="dblclick",a="mousewheel",w="qx.html.Blocker",v="mousemove",u="mouseover",t="appear",s="click",r="mshtml",q="engine.name",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(w,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if((qx.core.Environment.get(q)==r)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,c,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(s,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(v,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(t,this.__oT,this);
this.addListener(n,this.__oT,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__oT:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__ox",b="qx.ui.window.MDesktop",a="__oy";
qx.Mixin.define(b,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__ox:null,__oy:null,getWindowManager:function(){if(!this.__oy){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__oy;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__oy){this.__oy.setDesktop(null);
}j.setDesktop(this);
this.__oy=j;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(k,l){this.getWindowManager().changeActiveWindow(k,l);
this.getWindowManager().updateStack();
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(m){if(qx.Class.isDefined(i)&&m instanceof qx.ui.window.Window){this._addWindow(m);
}},_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);
n.addListener(f,this._onChangeActive,this);
n.addListener(h,this._onChangeModal,this);
n.addListener(g,this._onChangeVisibility,this);
}
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);
p.removeListener(f,this._onChangeActive,this);
p.removeListener(h,this._onChangeModal,this);
p.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ox){this.__ox=[];
}return this.__ox;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(a);
}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__oz",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__oz=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__oz:null,_applyBlockerColor:function(g,h){this.__oz.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__oz.setOpacity(i);
},block:function(){this.__oz.block();
},isBlocked:function(){return this.__oz.isBlocked();
},unblock:function(){this.__oz.unblock();
},forceUnblock:function(){this.__oz.forceUnblock();
},blockContent:function(k){this.__oz.blockContent(k);
},isContentBlocked:function(){return this.__oz.isContentBlocked();
},unblockContent:function(){this.__oz.unblockContent();
},forceUnblockContent:function(){this.__oz.forceUnblockContent();
},getBlocker:function(){return this.__oz;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var t="engine.name",s="help",r="contextmenu",q="changeGlobalCursor",p="keypress",o="Boolean",n="root",m="",l=" !important",k="input",d="_applyGlobalCursor",j="Space",h="_applyNativeHelp",c=";",b="qx.ui.root.Abstract",g="abstract",f="textarea",i="String",a="*";
qx.Class.define(b,{type:g,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.addListener(p,this.__oB,this);
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:i,nullable:true,themeable:true,apply:d,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__oA:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Environment.select(t,{"mshtml":function(u,v){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__oA;

if(!z){this.__oA=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,a,qx.bom.element.Cursor.compile(w).replace(c,m)+l);
}}}),_applyNativeContextMenu:function(A,B){if(A){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},__oB:function(e){if(e.getKeyIdentifier()!==j){return;
}var D=e.getTarget();
var C=qx.ui.core.FocusHandler.getInstance();

if(!C.isFocused(D)){return;
}var E=D.getContentElement().getNodeName();

if(E===k||E===f){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Environment.select(t,{"mshtml":function(F,G){if(G===false){qx.bom.Event.removeNativeListener(document,s,qx.lang.Function.returnFalse);
}
if(F===false){qx.bom.Event.addNativeListener(document,s,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__oA=null;
},defer:function(H,I){qx.ui.core.MChildrenHandling.remap(I);
}});
})();
(function(){var n="resize",m="engine.name",l="position",k="0px",j="webkit",i="paddingLeft",h="$$widget",g="qx.ui.root.Application",f="hidden",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(g,{extend:qx.ui.root.Abstract,construct:function(o){this.__oC=qx.dom.Node.getWindow(o);
this.__oD=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__oC,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__oC:null,__oD:null,_createContainerElement:function(){var p=this.__oD;
if((qx.core.Environment.get(m)==j)){if(!p.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var t=p.documentElement.style;
var q=p.body.style;
t.overflow=q.overflow=f;
t.padding=t.margin=q.padding=q.margin=k;
t.width=t.height=q.width=q.height=c;
var s=p.createElement(d);
p.body.appendChild(s);
var r=new qx.html.Root(s);
r.setStyle(l,b);
r.setAttribute(h,this.toHashCode());
return r;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__oC);
var v=qx.bom.Viewport.getHeight(this.__oC);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==i)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__oC=this.__oD=null;
}});
})();
(function(){var k="keypress",j="focusout",h="activate",g="__oE",f="Tab",d="singleton",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:d,construct:function(){qx.core.Object.call(this);
this.__oE={};
},members:{__oE:null,__oF:null,__oG:null,__oH:null,connectTo:function(m){m.addListener(k,this.__oI,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(j,this._onFocusOut,this,true);
m.addListener(h,this._onActivate,this,true);
m.addListener(c,this._onDeactivate,this,true);
},addRoot:function(n){this.__oE[n.$$hash]=n;
},removeRoot:function(o){delete this.__oE[o.$$hash];
},getActiveWidget:function(){return this.__oF;
},isActive:function(p){return this.__oF==p;
},getFocusedWidget:function(){return this.__oG;
},isFocused:function(q){return this.__oG==q;
},isFocusRoot:function(r){return !!this.__oE[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__oF=t;
var s=this.__oJ(t);

if(s!=this.__oH){this.__oH=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__oF==u){this.__oF=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__oG){this.__oG=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__oG){this.__oG=null;
w.visualizeBlur();
}},__oI:function(e){if(e.getKeyIdentifier()!=f){return;
}
if(!this.__oH){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__oG;

if(!e.isShiftPressed()){var y=x?this.__oN(x):this.__oL();
}else{var y=x?this.__oO(x):this.__oM();
}if(y){y.tabFocus();
}},__oJ:function(z){var A=this.__oE;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__oK:function(B,C){if(B===C){return 0;
}var E=B.getTabIndex()||0;
var D=C.getTabIndex()||0;

if(E!=D){return E-D;
}var J=B.getContainerElement().getDomElement();
var I=C.getContainerElement().getDomElement();
var H=qx.bom.element.Location;
var G=H.get(J);
var F=H.get(I);
if(G.top!=F.top){return G.top-F.top;
}if(G.left!=F.left){return G.left-F.left;
}var K=B.getZIndex();
var L=C.getZIndex();

if(K!=L){return K-L;
}return 0;
},__oL:function(){return this.__oR(this.__oH,null);
},__oM:function(){return this.__oS(this.__oH,null);
},__oN:function(M){var N=this.__oH;

if(N==M){return this.__oL();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__oP(N,M,O);
O.sort(this.__oK);
var P=O.length;
return P>0?O[0]:this.__oL();
},__oO:function(Q){var R=this.__oH;

if(R==Q){return this.__oM();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__oQ(R,Q,S);
S.sort(this.__oK);
var T=S.length;
return T>0?S[T-1]:this.__oM();
},__oP:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__oK(U,X)<0){V.push(X);
}this.__oP(X,U,V);
}}},__oQ:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__oK(Y,bc)>0){ba.push(bc);
}this.__oQ(bc,Y,ba);
}}},__oR:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__oK(bf,bd)<0){bd=bf;
}}bd=this.__oR(bf,bd);
}}return bd;
},__oS:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__oK(bi,bg)>0){bg=bi;
}}bg=this.__oS(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(g);
this.__oG=this.__oF=this.__oH=null;
}});
})();
(function(){var l="engine.name",k="head",j="text/css",h="stylesheet",g="}",f='@import "',e="{",d='";',c="qx.bom.Stylesheet",b="link",a="style";
qx.Class.define(c,{statics:{includeFile:function(m,n){if(!n){n=document;
}var o=n.createElement(b);
o.type=j;
o.rel=h;
o.href=qx.util.ResourceManager.getInstance().toUri(m);
var p=n.getElementsByTagName(k)[0];
p.appendChild(o);
},createElement:qx.core.Environment.select(l,{"mshtml":function(q){var r=document.createStyleSheet();

if(q){r.cssText=q;
}return r;
},"default":function(s){var t=document.createElement(a);
t.type=j;

if(s){t.appendChild(document.createTextNode(s));
}document.getElementsByTagName(k)[0].appendChild(t);
return t.sheet;
}}),addRule:qx.core.Environment.select(l,{"mshtml":function(u,v,w){u.addRule(v,w);
},"default":function(x,y,z){x.insertRule(y+e+z+g,x.cssRules.length);
}}),removeRule:qx.core.Environment.select(l,{"mshtml":function(A,B){var C=A.rules;
var D=C.length;

for(var i=D-1;i>=0;--i){if(C[i].selectorText==B){A.removeRule(i);
}}},"default":function(E,F){var G=E.cssRules;
var H=G.length;

for(var i=H-1;i>=0;--i){if(G[i].selectorText==F){E.deleteRule(i);
}}}}),removeAllRules:qx.core.Environment.select(l,{"mshtml":function(I){var J=I.rules;
var K=J.length;

for(var i=K-1;i>=0;i--){I.removeRule(i);
}},"default":function(L){var M=L.cssRules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.deleteRule(i);
}}}),addImport:qx.core.Environment.select(l,{"mshtml":function(O,P){O.addImport(P);
},"default":function(Q,R){Q.insertRule(f+R+d,Q.cssRules.length);
}}),removeImport:qx.core.Environment.select(l,{"mshtml":function(S,T){var U=S.imports;
var V=U.length;

for(var i=V-1;i>=0;i--){if(U[i].href==T){S.removeImport(i);
}}},"default":function(W,X){var Y=W.cssRules;
var ba=Y.length;

for(var i=ba-1;i>=0;i--){if(Y[i].href==X){W.deleteRule(i);
}}}}),removeAllImports:qx.core.Environment.select(l,{"mshtml":function(bb){var bc=bb.imports;
var bd=bc.length;

for(var i=bd-1;i>=0;i--){bb.removeImport(i);
}},"default":function(be){var bf=be.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].type==bf[i].IMPORT_RULE){be.deleteRule(i);
}}}})}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="backgroundColor",b="_applyOpacity",a="Boolean",x="opacity",w="interval",v="Tab",u="Color",t="qx.ui.root.Page",s="__oo",r="Number",q="qx.ui.core.Blocker",p="__ok",o="qx.ui.root.Application",m="__om",n="_applyColor";
qx.Class.define(q,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(t)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__op,this);
}
if(qx.Class.isDefined(o)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__oh=[];
this.__oi=[];
this.__oj=[];
},properties:{color:{check:u,init:null,nullable:true,apply:n,themeable:true},opacity:{check:r,init:1,apply:b,themeable:true},keepBlockerActive:{check:a,init:false}},members:{__ok:null,__ol:0,__om:null,__oj:null,__oh:null,__oi:null,__on:null,__oo:null,_isPageRoot:false,_widget:null,__op:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__oq(c,C);
},_applyOpacity:function(D,E){this.__oq(x,D);
},__oq:function(F,G){var H=[];
this.__ok&&H.push(this.__ok);
this.__om&&H.push(this.__om);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__oh.push(I.getActive());
this.__oi.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__oh.length;

if(L>0){var K=this.__oh[L-1];

if(K){qx.bom.Element.activate(K);
}this.__oh.pop();
}var J=this.__oi.length;

if(J>0){var K=this.__oi[J-1];

if(K){qx.bom.Element.focus(this.__oi[J-1]);
}this.__oi.pop();
}},__or:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__ok){this.__ok=this.__or();
this.__ok.setStyle(l,15);
this._widget.getContainerElement().add(this.__ok);
this.__ok.exclude();
}return this.__ok;
},block:function(){this.__ol++;

if(this.__ol<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__ow,this);
M.addListener(d,this.__ov,this);
M.addListener(j,this.__ov,this);
M.addListener(f,this.__ov,this);
}},isBlocked:function(){return this.__ol>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__ol--;

if(this.__ol<1){this.__os();
this.__ol=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__ol=0;
this.__os();
},__os:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__ow,this);
N.removeListener(d,this.__ov,this);
N.removeListener(j,this.__ov,this);
N.removeListener(f,this.__ov,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__om){this.__om=this.__or();
this._widget.getContentElement().add(this.__om);
this.__om.exclude();
}return this.__om;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__oj.push(O);

if(this.__oj.length<2){P.include();

if(this._isPageRoot){if(!this.__oo){this.__oo=new qx.event.Timer(300);
this.__oo.addListener(w,this.__ou,this);
}this.__oo.start();
this.__ou();
}}},isContentBlocked:function(){return this.__oj.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oj.pop();
var Q=this.__oj[this.__oj.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__oj.length<1){this.__ot();
this.__oj=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oj=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__ot();
},__ot:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__oo.stop();
}},__ou:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__ov:function(e){if(e.getKeyIdentifier()==v){e.stop();
}},__ow:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__op,this);
}this._disposeObjects(m,p,s);
this.__on=this.__oh=this.__oi=this._widget=this.__oj=null;
}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="__oV",c="interval",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__oV=new qx.event.AcceleratingTimer();
this.__oV.addListener(c,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__oW:null,__oV:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__oX();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__oW){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__oY();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__oY();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__oV.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__oV.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__oX();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__oW){this.execute();
}}this.__oY();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__oW){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__oY();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__oX();
}},_onInterval:function(e){this.__oW=true;
this.fireEvent(b);
},__oX:function(){this.fireEvent(g);
this.__oW=false;
this.__oV.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__oY:function(){this.fireEvent(d);
this.__oV.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var f,h,e,d;
for(var i=0,l=g.length;i<l;i++){f=g[i];
h=f.getSizeHint();
e=b;

if(e<h.minWidth){e=h.minWidth;
}else if(e>h.maxWidth){e=h.maxWidth;
}d=c;

if(d<h.minHeight){d=h.minHeight;
}else if(d>h.maxHeight){d=h.maxHeight;
}f.renderLayout(0,0,e,d);
}},_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,s;
var r=0,p=0;
var n=0,k=0;
var j=Infinity,m=Infinity;
for(var i=0,l=q.length;i<l;i++){o=q[i];
s=o.getSizeHint();
r=Math.max(r,s.width);
p=Math.max(p,s.height);
n=Math.max(n,s.minWidth);
k=Math.max(k,s.minHeight);
j=Math.min(j,s.maxWidth);
m=Math.min(m,s.maxHeight);
}return {width:r,height:p,minWidth:n,minHeight:k,maxWidth:j,maxHeight:m};
}}});
})();
(function(){var l="qx.dynlocale",k="Boolean",j="changeLocale",i="changeInvalidMessage",h="String",g="invalid",f="",d="qx.ui.form.MForm",c="_applyValid",b="changeRequired",a="changeValid";
qx.Mixin.define(d,{construct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().addListener(j,this.__kE,this);
}},properties:{valid:{check:k,init:true,apply:c,event:a},required:{check:k,init:false,event:b},invalidMessage:{check:h,init:f,event:i},requiredInvalidMessage:{check:h,nullable:true,event:i}},members:{_applyValid:function(m,n){m?this.removeState(g):this.addState(g);
},__kE:qx.core.Environment.select(l,{"true":function(e){var o=this.getInvalidMessage();

if(o&&o.translate){this.setInvalidMessage(o.translate());
}var p=this.getRequiredInvalidMessage();

if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());
}},"false":null})},destruct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().removeListener(j,this.__kE,this);
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(g){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(c){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var k="knob",j="horizontal",i="vertical",h="Integer",g="hovered",f="left",d="top",c="mouseup",b="pressed",a="px",V="changeValue",U="interval",T="mousemove",S="resize",R="slider",Q="mousedown",P="PageUp",O="mouseout",N='qx.event.type.Data',M="Left",r="Down",s="Up",p="dblclick",q="qx.ui.form.Slider",n="PageDown",o="mousewheel",l="_applyValue",m="_applyKnobFactor",t="End",u="height",B="Right",z="width",F="_applyOrientation",D="Home",I="mouseover",H="floor",w="_applyMinimum",L="click",K="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",J="keypress",v="ceil",x="losecapture",y="contextmenu",A="_applyMaximum",C="Number",E="changeMaximum",G="changeMinimum";
qx.Class.define(q,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(W){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(J,this._onKeyPress);
this.addListener(o,this._onMouseWheel);
this.addListener(Q,this._onMouseDown);
this.addListener(c,this._onMouseUp);
this.addListener(x,this._onMouseUp);
this.addListener(S,this._onUpdate);
this.addListener(y,this._onStopEvent);
this.addListener(L,this._onStopEvent);
this.addListener(p,this._onStopEvent);
if(W!=null){this.setOrientation(W);
}else{this.initOrientation();
}},events:{changeValue:N},properties:{appearance:{refine:true,init:R},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:F},value:{check:K,init:0,apply:l,nullable:true},minimum:{check:h,init:0,apply:w,event:G},maximum:{check:h,init:100,apply:A,event:E},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:C,apply:m,nullable:true}},members:{__uk:null,__ul:null,__um:null,__un:null,__uo:null,__up:null,__uq:null,__ur:null,__us:null,__ut:null,__uu:null,__uv:null,_forwardStates:{invalid:true},_createChildControlImpl:function(X,Y){var ba;

switch(X){case k:ba=new qx.ui.core.Widget();
ba.addListener(S,this._onUpdate,this);
ba.addListener(I,this._onMouseOver);
ba.addListener(O,this._onMouseOut);
this._add(ba);
break;
}return ba||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,X);
},_onMouseOver:function(e){this.addState(g);
},_onMouseOut:function(e){this.removeState(g);
},_onMouseWheel:function(e){var bb=e.getWheelDelta()>0?1:-1;
this.slideBy(bb*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bd=this.getOrientation()===j;
var bc=bd?M:s;
var forward=bd?B:r;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bc:this.slideBack();
break;
case n:this.slidePageForward();
break;
case P:this.slidePageBack();
break;
case D:this.slideToBegin();
break;
case t:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__un){return;
}var bg=this.__ux;
var be=this.getChildControl(k);
var bf=bg?f:d;
var bi=bg?e.getDocumentLeft():e.getDocumentTop();
var bj=this.__uk=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bf];
var bh=this.__ul=qx.bom.element.Location.get(be.getContainerElement().getDomElement())[bf];

if(e.getTarget()===be){this.__un=true;

if(!this.__ut){this.__ut=new qx.event.Timer(100);
this.__ut.addListener(U,this._fireValue,this);
}this.__ut.start();
this.__uo=bi+bj-bh;
be.addState(b);
}else{this.__up=true;
this.__uq=bi<=bh?-1:1;
this.__uy(e);
this._onInterval();
if(!this.__us){this.__us=new qx.event.Timer(100);
this.__us.addListener(U,this._onInterval,this);
}this.__us.start();
}this.addListener(T,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__un){this.releaseCapture();
delete this.__un;
this.__ut.stop();
this._fireValue();
delete this.__uo;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bl;
var bm;
var bk;

if(this.__ux){bl=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__uk);
bk=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bm=e.getDocumentTop()-(bk+this.getChildControl(k).getBounds().top);
}else{bl=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__uk);
bk=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bm=e.getDocumentLeft()-(bk+this.getChildControl(k).getBounds().left);
}
if(bm<0||bm>this.__um||bl<0||bl>this.__um){this.getChildControl(k).removeState(g);
}}}else if(this.__up){this.__us.stop();
this.releaseCapture();
delete this.__up;
delete this.__uq;
delete this.__ur;
}this.removeListener(T,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__un){var bo=this.__ux?e.getDocumentLeft():e.getDocumentTop();
var bn=bo-this.__uo;
this.slideTo(this._positionToValue(bn));
}else if(this.__up){this.__uy(e);
}e.stopPropagation();
},_onInterval:function(e){var bp=this.getValue()+(this.__uq*this.getPageStep());
if(bp<this.getMinimum()){bp=this.getMinimum();
}else if(bp>this.getMaximum()){bp=this.getMaximum();
}var bq=this.__uq==-1;

if((bq&&bp<=this.__ur)||(!bq&&bp>=this.__ur)){bp=this.__ur;
}this.slideTo(bp);
},_onUpdate:function(e){var bs=this.getInnerSize();
var bt=this.getChildControl(k).getBounds();
var br=this.__ux?z:u;
this._updateKnobSize();
this.__uw=bs[br]-bt[br];
this.__um=bt[br];
this._updateKnobPosition();
},__ux:false,__uw:0,__uy:function(e){var bu=this.__ux;
var bB=bu?e.getDocumentLeft():e.getDocumentTop();
var bD=this.__uk;
var bv=this.__ul;
var bF=this.__um;
var bC=bB-bD;

if(bB>=bv){bC-=bF;
}var bz=this._positionToValue(bC);
var bw=this.getMinimum();
var bx=this.getMaximum();

if(bz<bw){bz=bw;
}else if(bz>bx){bz=bx;
}else{var bA=this.getValue();
var by=this.getPageStep();
var bE=this.__uq<0?H:v;
bz=bA+(Math[bE]((bz-bA)/by)*by);
}if(this.__ur==null||(this.__uq==-1&&bz<=this.__ur)||(this.__uq==1&&bz>=this.__ur)){this.__ur=bz;
}},_positionToValue:function(bG){var bH=this.__uw;
if(bH==null||bH==0){return 0;
}var bJ=bG/bH;

if(bJ<0){bJ=0;
}else if(bJ>1){bJ=1;
}var bI=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bI*bJ);
},_valueToPosition:function(bK){var bL=this.__uw;

if(bL==null){return 0;
}var bM=this.getMaximum()-this.getMinimum();
if(bM==0){return 0;
}var bK=bK-this.getMinimum();
var bN=bK/bM;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}return Math.round(bL*bN);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bO){var bP=this.getChildControl(k).getContainerElement();

if(this.__ux){bP.setStyle(f,bO+a,true);
}else{bP.setStyle(d,bO+a,true);
}},_updateKnobSize:function(){var bR=this.getKnobFactor();

if(bR==null){return;
}var bQ=this.getInnerSize();

if(bQ==null){return;
}if(this.__ux){this.getChildControl(k).setWidth(Math.round(bR*bQ.width));
}else{this.getChildControl(k).setHeight(Math.round(bR*bQ.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bS){this.slideTo(this.getValue()+bS);
},slideTo:function(bT){if(bT<this.getMinimum()){bT=this.getMinimum();
}else if(bT>this.getMaximum()){bT=this.getMaximum();
}else{bT=this.getMinimum()+Math.round((bT-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bT);
},_applyOrientation:function(bU,bV){var bW=this.getChildControl(k);
this.__ux=bU===j;
if(this.__ux){this.removeState(i);
bW.removeState(i);
this.addState(j);
bW.addState(j);
bW.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(j);
bW.removeState(j);
this.addState(i);
bW.addState(i);
bW.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bX,bY){if(bX!=null){this._updateKnobSize();
}else{if(this.__ux){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(ca,cb){if(ca!=null){this._updateKnobPosition();

if(this.__un){this.__uv=[ca,cb];
}else{this.fireEvent(V,qx.event.type.Data,[ca,cb]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__uv){return;
}var cc=this.__uv;
this.__uv=null;
this.fireEvent(V,qx.event.type.Data,cc);
},_applyMinimum:function(cd,ce){if(this.getValue()<cd){this.setValue(cd);
}this._updateKnobPosition();
},_applyMaximum:function(cf,cg){if(this.getValue()>cf){this.setValue(cf);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){g.width=0;
}else{g.height=0;
}return g;
}}});
})();
(function(){var e="Integer",d="interval",c="qx.event.type.Event",b="qx.event.AcceleratingTimer",a="__pa";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__pa=new qx.event.Timer(this.getInterval());
this.__pa.addListener(d,this._onInterval,this);
},events:{"interval":c},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__pa:null,__pb:null,start:function(){this.__pa.setInterval(this.getFirstInterval());
this.__pa.start();
},stop:function(){this.__pa.stop();
this.__pb=null;
},_onInterval:function(){this.__pa.stop();

if(this.__pb==null){this.__pb=this.getInterval();
}this.__pb=Math.max(this.getMinimum(),this.__pb-this.getDecrease());
this.__pa.setInterval(this.__pb);
this.__pa.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var m="resize",l="scrollY",k="update",j="scrollX",i="_applyScrollX",h="_applyScrollY",g="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",f="appear",d="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",c="qx.event.type.Event",a="qx.ui.core.scroll.ScrollPane",b="scroll";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(m,this._onUpdate);
var n=this.getContentElement();
n.addListener(b,this._onScroll,this);
n.addListener(f,this._onAppear,this);
},events:{update:c},properties:{scrollX:{check:g,apply:i,event:j,init:0},scrollY:{check:d,apply:h,event:l,init:0}},members:{add:function(o){var p=this._getChildren()[0];

if(p){this._remove(p);
p.removeListener(m,this._onUpdate,this);
}
if(o){this._add(o);
o.addListener(m,this._onUpdate,this);
}},remove:function(q){if(q){this._remove(q);
q.removeListener(m,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(k);
},_onScroll:function(e){var r=this.getContentElement();
this.setScrollX(r.getScrollX());
this.setScrollY(r.getScrollY());
},_onAppear:function(e){var v=this.getContentElement();
var s=this.getScrollX();
var t=v.getScrollX();

if(s!=t){v.scrollToX(s);
}var w=this.getScrollY();
var u=v.getScrollY();

if(w!=u){v.scrollToY(w);
}},getItemTop:function(z){var top=0;

do{top+=z.getBounds().top;
z=z.getLayoutParent();
}while(z&&z!==this);
return top;
},getItemBottom:function(A){return this.getItemTop(A)+A.getBounds().height;
},getItemLeft:function(B){var C=0;
var parent;

do{C+=B.getBounds().left;
parent=B.getLayoutParent();

if(parent){C+=parent.getInsets().left;
}B=parent;
}while(B&&B!==this);
return C;
},getItemRight:function(D){return this.getItemLeft(D)+D.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var F=this.getInnerSize();
var E=this.getScrollSize();

if(F&&E){return Math.max(0,E.width-F.width);
}return 0;
},getScrollMaxY:function(){var H=this.getInnerSize();
var G=this.getScrollSize();

if(H&&G){return Math.max(0,G.height-H.height);
}return 0;
},scrollToX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}this.setScrollX(I);
},scrollToY:function(K){var L=this.getScrollMaxY();

if(K<0){K=0;
}else if(K>L){K=L;
}this.setScrollY(K);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(M){this.getContentElement().scrollToX(M);
},_applyScrollY:function(N){this.getContentElement().scrollToY(N);
}}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="0",d="engine.name",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="_applyOrientation",u="appear",t="opera",s="PositiveInteger",r="mshtml",q="mouseup",o="__lF",p="Number",m="_applyPosition",n="scrollbar",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(q,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if((qx.core.Environment.get(d)==t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[k,h],init:k,apply:v},maximum:{check:s,apply:w,init:100},position:{check:p,init:0,apply:m,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__lE:null,__lF:null,_getScrollPaneElement:function(){if(!this.__lF){this.__lF=new qx.html.Element();
}return this.__lF;
},renderLayout:function(B,top,C,D){var E=qx.ui.core.Widget.prototype.renderLayout.call(this,B,top,C,D);
this._updateScrollBar();
return E;
},_getContentHint:function(){var F=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__lE?100:F,maxWidth:this.__lE?null:F,minWidth:this.__lE?null:F,height:this.__lE?F:100,maxHeight:this.__lE?F:null,minHeight:this.__lE?F:null};
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this._updateScrollBar();
},_applyMaximum:function(I){this._updateScrollBar();
},_applyPosition:function(J){var content=this.getContentElement();

if(this.__lE){content.scrollToX(J);
}else{content.scrollToY(J);
}},_applyOrientation:function(K,L){var M=this.__lE=K===k;
this.set({allowGrowX:M,allowShrinkX:M,allowGrowY:!M,allowShrinkY:!M});

if(M){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:M?i:c,overflowY:M?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var O=this.__lE;
var P=this.getBounds();

if(!P){return;
}
if(this.isEnabled()){var Q=O?P.width:P.height;
var N=this.getMaximum()+Q;
}else{N=0;
}if((qx.core.Environment.get(d)==r)){var P=this.getBounds();
this.getContentElement().setStyles({left:O?f:g,top:O?g:f,width:(O?P.width:P.width+1)+j,height:(O?P.height+1:P.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(O?N:1)+j,height:(O?1:N)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(R){this.setPosition(Math.max(0,Math.min(this.getMaximum(),R)));
},scrollBy:function(S){this.scrollTo(this.getPosition()+S);
},scrollBySteps:function(T){var U=this.getSingleStep();
this.scrollBy(T*U);
},_onScroll:function(e){var W=this.getContentElement();
var V=this.__lE?W.getScrollX():W.getScrollY();
this.setPosition(V);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(o);
}});
})();
(function(){var k="slider",j="horizontal",i="button-begin",h="vertical",g="button-end",f="Integer",d="execute",c="right",b="left",a="down",z="up",y="PositiveNumber",x="changeValue",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",v="_applyKnobFactor",u="knob",t="qx.ui.core.scroll.ScrollBar",s="resize",r="_applyOrientation",q="_applyPageStep",o="PositiveInteger",p="scroll",m="_applyPosition",n="scrollbar",l="_applyMaximum";
qx.Class.define(t,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this._createChildControl(i);
this._createChildControl(k).addListener(s,this._onResizeSlider,this);
this._createChildControl(g);
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,h],init:j,apply:r},maximum:{check:o,apply:l,init:100},position:{check:w,init:0,apply:m,event:p},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:y,apply:v,nullable:true}},members:{__uz:2,_createChildControlImpl:function(B,C){var D;

switch(B){case k:D=new qx.ui.core.scroll.ScrollSlider();
D.setPageStep(100);
D.setFocusable(false);
D.addListener(x,this._onChangeSliderValue,this);
this._add(D,{flex:1});
break;
case i:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteBegin,this);
this._add(D);
break;
case g:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteEnd,this);
this._add(D);
break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_applyMaximum:function(E){this.getChildControl(k).setMaximum(E);
},_applyPosition:function(F){this.getChildControl(k).setValue(F);
},_applyKnobFactor:function(G){this.getChildControl(k).setKnobFactor(G);
},_applyPageStep:function(H){this.getChildControl(k).setPageStep(H);
},_applyOrientation:function(I,J){var K=this._getLayout();

if(K){K.dispose();
}if(I===j){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(h,j);
this.getChildControl(i).replaceState(z,b);
this.getChildControl(g).replaceState(a,c);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(j,h);
this.getChildControl(i).replaceState(b,z);
this.getChildControl(g).replaceState(c,a);
}this.getChildControl(k).setOrientation(I);
},scrollTo:function(L){this.getChildControl(k).slideTo(L);
},scrollBy:function(M){this.getChildControl(k).slideBy(M);
},scrollBySteps:function(N){var O=this.getSingleStep();
this.getChildControl(k).slideBy(N*O);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var P=this.getChildControl(k).getChildControl(u);
var S=P.getSizeHint();
var Q=false;
var R=this.getChildControl(k).getInnerSize();

if(this.getOrientation()==h){if(R.height<S.minHeight+this.__uz){Q=true;
}}else{if(R.width<S.minWidth+this.__uz){Q=true;
}}
if(Q){P.exclude();
}else{P.show();
}}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Environment.add(b,false);
qx.core.Setting.defineDeprecated(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Environment.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__ck:true,__cl:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__cm(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(this.__ck){qx.Bootstrap.error(bD);
}
if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__ck){qx.Bootstrap.error("Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{throw new Error(bD);
}},__cm:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__cl(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__cl(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__cl(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__cl(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__cl(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__cl(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__cl(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__cl(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__cl(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__cl(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__cl(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__cl(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__cl(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__cl(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__cl(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__cl(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__ck=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__ck=true;
}
if(cQ==null){this.__cl(cP||p,s);
}cQ instanceof cN||this.__cl(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__cl(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__cl(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__cl(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__cl(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__cl(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__cl(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__cl(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__cl(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__cl(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__cl(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__cl(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__cl(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__cl(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__cl(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__cl(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__cl(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__cl(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__cl(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__cl(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__cl(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__cn(ea,bu)||this.__cl(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__cn(ec,z)||this.__cl(ed||p,b,ec,o);
},__cn:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
}return false;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__dC:null,__dD:null,__dE:null,__dF:null,stringify:function(bb,bc,bd){this.__dC=p;
this.__dD=p;
this.__dF=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__dD+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__dD=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__dE=bc;
}else{this.__dE=null;
}return this.__dG(p,{'':bb});
},__dG:function(be,bf){var bi=this.__dC,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__dE===e){bj=this.__dE.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__dH(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__dC+=this.__dD;
bg=[];

if(this.__dF.indexOf(bj)!==-1){throw new TypeError(V);
}this.__dF.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__dG(i,bj)||h;
}this.__dF.pop();
if(bg.length===0){var bh=s;
}else if(this.__dC){bh=E+this.__dC+bg.join(Y+this.__dC)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__dC=bi;
return bh;
case z:this.__dC+=this.__dD;
bg=[];

if(this.__dF.indexOf(bj)!==-1){throw new TypeError(V);
}this.__dF.push(bj);
if(this.__dE&&typeof this.__dE===f){var length=this.__dE.length;

for(var i=0;i<length;i+=1){var k=this.__dE[i];

if(typeof k===W){var v=this.__dG(k,bj);

if(v){bg.push(this.__dH(k)+(this.__dC?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__dG(k,bj);

if(v){bg.push(this.__dH(k)+(this.__dC?g:m)+v);
}}}}this.__dF.pop();
if(bg.length===0){var bh=A;
}else if(this.__dC){bh=w+this.__dC+bg.join(Y+this.__dC)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__dC=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__dH:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;

if(bq.test(bo)){return o+
bo.replace(bq,function(a){var c=bp[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bo+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__dI({'':j},p,bs):j;
}throw new SyntaxError(P);
},__dI:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__dI(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var d="qx.event.handler.Iframe",c="load",b="iframe",a="navigate";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1,navigate:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(e){var f=qx.bom.Iframe.queryCurrentUrl(e);

if(f!==e.$$url){qx.event.Registration.fireEvent(e,a,qx.event.type.Data,[f]);
e.$$url=f;
}qx.event.Registration.fireEvent(e,c);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===b;
},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){}},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var i="engine.name",h="load",g="",f="qx.bom.Iframe",e="osx",d="os.name",c="webkit",b="iframe",a="body";
qx.Class.define(f,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(j,k){var j=j?qx.lang.Object.clone(j):{};
var l=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var m in l){if(j[m]==null){j[m]=l[m];
}}return qx.bom.Element.create(b,j,k);
},getWindow:function(n){try{return n.contentWindow;
}catch(o){return null;
}},getDocument:qx.core.Environment.select(i,{"mshtml":function(p){try{var q=this.getWindow(p);
return q?q.document:null;
}catch(r){return null;
}},"default":function(s){try{return s.contentDocument;
}catch(t){return null;
}}}),getBody:function(u){try{var v=this.getDocument(u);
return v?v.getElementsByTagName(a)[0]:null;
}catch(w){return null;
}},setSource:function(x,y){try{if(this.getWindow(x)&&qx.dom.Hierarchy.isRendered(x)){try{if((qx.core.Environment.get(i)==c)&&qx.core.Environment.get(d)==e){var z=this.getWindow(x);

if(z){z.stop();
}}this.getWindow(x).location.replace(y);
}catch(A){x.src=y;
}}else{x.src=y;
}this.__sh(x);
}catch(B){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(C){var D=this.getDocument(C);

try{if(D&&D.location){return D.location.href;
}}catch(E){}return g;
},__sh:function(F){var G=function(){qx.bom.Event.removeNativeListener(F,h,G);
F.$$url=qx.bom.Iframe.queryCurrentUrl(F);
};
qx.bom.Event.addNativeListener(F,h,G);
}}});
})();
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleBottom",y="widthBottom",x="widthLeft",w="styleTop",v="colorBottom",u="styleLeft",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="border-top",n="border-left",k="border-right",l="qx.ui.decoration.MSingleBorder",s="border-bottom",t="absolute";
qx.Mixin.define(l,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[x,u,r]},right:{group:[q,A,o]},top:{group:[B,w,p]},bottom:{group:[y,z,v]},width:{group:[B,q,y,x],mode:C},style:{group:[w,A,z,u],mode:C},color:{group:[p,o,v,r],mode:C}},members:{_styleBorder:function(E){var F=qx.theme.manager.Color.getInstance();
var G=this.getWidthTop();

if(G>0){E[m]=G+g+this.getStyleTop()+D+(F.resolve(this.getColorTop())||c);
}var G=this.getWidthRight();

if(G>0){E[k]=G+g+this.getStyleRight()+D+(F.resolve(this.getColorRight())||c);
}var G=this.getWidthBottom();

if(G>0){E[s]=G+g+this.getStyleBottom()+D+(F.resolve(this.getColorBottom())||c);
}var G=this.getWidthLeft();

if(G>0){E[n]=G+g+this.getStyleLeft()+D+(F.resolve(this.getColorLeft())||c);
}E.position=t;
E.top=0;
E.left=0;
},_resizeBorder:function(H,I,J){var K=this.getInsets();
I-=K.left+K.right;
J-=K.top+K.bottom;
if(I<0){I=0;
}
if(J<0){J=0;
}return {left:K.left-this.getWidthLeft(),top:K.top-this.getWidthTop(),width:I,height:J};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){}}});
})();
(function(){var d="qx.ui.decoration.MBackgroundColor",c="Color",b="_applyBackgroundColor",a="";
qx.Mixin.define(d,{properties:{backgroundColor:{check:c,nullable:true,apply:b}},members:{_tintBackgroundColor:function(e,f,g){var h=qx.theme.manager.Color.getInstance();

if(f==null){f=this.getBackgroundColor();
}g.backgroundColor=h.resolve(f)||a;
},_resizeBackgroundColor:function(i,j,k){var l=this.getInsets();
j-=l.left+l.right;
k-=l.top+l.bottom;
return {left:l.left,top:l.top,width:j,height:k};
},_applyBackgroundColor:function(){}}});
})();
(function(){var t="_applyBackgroundImage",s="repeat",r="",q="mshtml",p="engine.name",o="backgroundPositionX",n='<div style="',m="backgroundPositionY",l='</div>',k="no-repeat",d="engine.version",j="scale",g='">',c=" ",b="repeat-x",f="repeat-y",e="hidden",h="qx.ui.decoration.MBackgroundImage",a="String",i="browser.quirksmode";
qx.Mixin.define(h,{properties:{backgroundImage:{check:a,nullable:true,apply:t},backgroundRepeat:{check:[s,b,f,k,j],init:s,apply:t},backgroundPositionX:{nullable:true,apply:t},backgroundPositionY:{nullable:true,apply:t},backgroundPosition:{group:[m,o]}},members:{_generateMarkup:this._generateBackgroundMarkup,_generateBackgroundMarkup:function(u,content){var y=r;
var x=this.getBackgroundImage();
var w=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var z=this.getBackgroundPositionX();

if(z==null){z=0;
}u.backgroundPosition=z+c+top;
if(x){var v=qx.util.AliasManager.getInstance().resolve(x);
y=qx.bom.element.Decoration.create(v,w,u);
}else{if((qx.core.Environment.get(p)==q)){if(parseFloat(qx.core.Environment.get(d))<7||qx.core.Environment.get(i)){u.overflow=e;
}}
if(!content){content=r;
}y=n+qx.bom.element.Style.compile(u)+g+content+l;
}return y;
},_applyBackgroundImage:function(){}}});
})();
(function(){var b="px",a="qx.ui.decoration.Single";
qx.Class.define(a,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);
if(c!=null){this.setWidth(c);
}
if(d!=null){this.setStyle(d);
}
if(e!=null){this.setColor(e);
}},members:{_markup:null,getMarkup:function(f){if(this._markup){return this._markup;
}var g={};
this._styleBorder(g,f);
var h=this._generateBackgroundMarkup(g);
return this._markup=h;
},resize:function(i,j,k){var l=this._resizeBorder(i,j,k);
i.style.width=l.width+b;
i.style.height=l.height+b;
i.style.left=parseInt(i.style.left)+l.left+b;
i.style.top=parseInt(i.style.top)+l.top+b;
},tint:function(m,n){this._tintBackgroundColor(m,n,m.style);
},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
}},destruct:function(){this._markup=null;
}});
})();
(function(){var k="String",j="loading",i="complete",h="initialized",g="changeState",f="changeDescription",e="changeName",d="showcase.Page",c="showcase.AbstractContent",b="changeIcon",a="changePart";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){this.initReadyState();
},properties:{name:{check:k,event:e},icon:{check:k,event:b},part:{check:k,event:a},description:{check:k,event:f},contentClass:{},controlClass:{nullable:true},content:{check:c},readyState:{check:[h,j,i],init:h,event:g}},members:{load:function(l,m){var l=l||qx.lang.Function.empty;
var m=m||this;
var n=this.getReadyState();

if(n==i){l.call(m,this);
return;
}else if(n==j){return this.addListenerOnce(g,function(){l.call(m,this);
});
}else{this.setReadyState(j);
qx.io.PartLoader.require(this.getPart(),function(){this._initializeContent();
this.setReadyState(i);
l.call(m,this);
},this);
}},_initializeContent:function(){var o=qx.Class.getByName(this.getContentClass());
this.setContent(new o(this));
}}});
})();
(function(){var j="Theming",i="and UI code and differ only in their theme.",h="Widgets can have states like \"selected\" or ",g="browser issues and allows styling of any widget property. It is ",f="showcase.page.theme.Content",e="showcase/theme/icon.png",d="Custom themes",c="<p> The two calculators on this page share exactly the same application ",b="widget independent of its content. Qooxdoo comes with a rich set of ",a="application code.",v="qooxdoo provides a powerful theming system built on a custom JSON-like ",u="This demo shows all available decorators.",t="possible to create entirely different themes without touching the ",s="Appearance",r="showcase.page.theme.Page",q="syntax. Unlike CSS this syntax doesn't have any cross ",p="\"hovered\", which can be used by the theme to style the widgets.",o="theme",n="pre-defined decorators.",m="Decorators",k="Any HTML code can be used to style the background of a ",l="Theme Package";
qx.Class.define(r,{extend:showcase.Page,construct:function(){showcase.Page.call(this);
this.set({name:j,part:o,icon:e,contentClass:f,description:showcase.page.DescriptionBuilder.build(j,this.__uA,null,this.__uB,this.__uC,this.__uD,this.__uE)});
},members:{__uA:v+q+g+t+a+c+i,__uB:{"States":h+p,"Decorators":k+b+n},__uC:{"pages/gui_toolkit/ui_theming.html":j,"pages/gui_toolkit/ui_appearance.html":s,"pages/gui_toolkit/ui_custom_themes.html":d,"pages/gui_toolkit/ui_decorators.html":m},__uD:{"#ui~Decoration.html":u},__uE:{"#qx.theme":l}}});
})();
(function(){var e="complete",d="loading",c="error",b="initialized",a="qx.io.part.Part";
qx.Bootstrap.define(a,{construct:function(name,f,g){this.__uF=name;
this._readyState=e;
this._packages=f;
this._loader=g;

for(var i=0;i<f.length;i++){if(f[i].getReadyState()!==e){this._readyState=b;
break;
}}},members:{_readyState:null,_loader:null,_packages:null,__uF:null,getReadyState:function(){return this._readyState;
},getName:function(){return this.__uF;
},getPackages:function(){return this._packages;
},preload:function(h,self){if(h){window.setTimeout(function(){h.call(self,this);
},0);
}},load:function(j,self){if(this._checkCompleteLoading(j,self)){return;
}this._readyState=d;

if(j){this._appendPartListener(j,self,this);
}var l=this;
var k=function(){l.load();
};

for(var i=0;i<this._packages.length;i++){var m=this._packages[i];

switch(m.getReadyState()){case b:this._loader.addPackageListener(m,k);
m.load(this._loader.notifyPackageResult,this._loader);
return;
case d:this._loader.addPackageListener(m,k);
return;
case e:break;
case c:this._markAsCompleted(c);
return;
default:throw new Error("Invalid case! "+m.getReadyState());
}}this._markAsCompleted(e);
},_appendPartListener:function(n,self,o){var p=this;
this._loader.addPartListener(this,function(){p._signalStartup();
n.call(self,o._readyState);
});
},_markAsCompleted:function(q){this._readyState=q;
this._loader.notifyPartResult(this);
},_signalStartup:function(){if(!qx.$$loader.applicationHandlerReady){qx.$$loader.signalStartup();
}},_checkCompleteLoading:function(r,self){var s=this._readyState;

if(s==e||s==c){if(r){var t=this;
setTimeout(function(){t._signalStartup();
r.call(self,s);
},0);
}return true;
}else if(s==d&&r){this._appendPartListener(r,self,this);
return true;
}}}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(z,A){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setBorderImage(z);
}
if(A!=null){this.setSlice(A);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__uf:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__uf;
},getMarkup:function(){if(this.__uf){return this.__uf;
}var B=this._resolveImageUrl(this.getBorderImage());
var C=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var D=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__uf=[x,qx.bom.element.Style.compile({"borderImage":o+B+p+C.join(f)+f+D,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:C.join(b)+g}),y].join(q);
return this.__uf;
},resize:function(E,F,G){E.style.width=F+g;
E.style.height=G+g;
},tint:function(H,I){},_applyStyle:function(){},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__uf=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="engine.version",e="scale-x",d="scale-y",c="-tr",b="-l",a='</div>',z="scale",y="-br",x="-t",w="browser.quirksmode",v="-tl",u="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="qx.ui.decoration.GridDiv",n="-c",k="mshtml",l="engine.name";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBaseImage(A);
}
if(B!=null){this.setInsets(B);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{__ug:null,__uh:null,__ui:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ug;
},getMarkup:function(){if(this.__ug){return this.__ug;
}var C=qx.bom.element.Decoration;
var D=this.__uh;
var E=this.__ui;
var F=[];
F.push(t);
F.push(C.create(D.tl,g,{top:0,left:0}));
F.push(C.create(D.t,e,{top:0,left:E.left+j}));
F.push(C.create(D.tr,g,{top:0,right:0}));
F.push(C.create(D.bl,g,{bottom:0,left:0}));
F.push(C.create(D.b,e,{bottom:0,left:E.left+j}));
F.push(C.create(D.br,g,{bottom:0,right:0}));
F.push(C.create(D.l,d,{top:E.top+j,left:0}));
F.push(C.create(D.c,z,{top:E.top+j,left:E.left+j}));
F.push(C.create(D.r,d,{top:E.top+j,right:0}));
F.push(a);
return this.__ug=F.join(o);
},resize:function(G,H,I){var J=this.__ui;
var innerWidth=H-J.left-J.right;
var innerHeight=I-J.top-J.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}G.style.width=H+j;
G.style.height=I+j;
G.childNodes[1].style.width=innerWidth+j;
G.childNodes[4].style.width=innerWidth+j;
G.childNodes[7].style.width=innerWidth+j;
G.childNodes[6].style.height=innerHeight+j;
G.childNodes[7].style.height=innerHeight+j;
G.childNodes[8].style.height=innerHeight+j;

if((qx.core.Environment.get(l)==k)){if(parseFloat(qx.core.Environment.get(f))<7||(qx.core.Environment.get(w)&&parseFloat(qx.core.Environment.get(f))<8)){if(H%2==1){G.childNodes[2].style.marginRight=h;
G.childNodes[5].style.marginRight=h;
G.childNodes[8].style.marginRight=h;
}else{G.childNodes[2].style.marginRight=i;
G.childNodes[5].style.marginRight=i;
G.childNodes[8].style.marginRight=i;
}
if(I%2==1){G.childNodes[3].style.marginBottom=h;
G.childNodes[4].style.marginBottom=h;
G.childNodes[5].style.marginBottom=h;
}else{G.childNodes[3].style.marginBottom=i;
G.childNodes[4].style.marginBottom=i;
G.childNodes[5].style.marginBottom=i;
}}}},tint:function(K,L){},_applyBaseImage:function(M,N){if(M){var R=this._resolveImageUrl(M);
var S=/(.*)(\.[a-z]+)$/.exec(R);
var Q=S[1];
var P=S[2];
var O=this.__uh={tl:Q+v+P,t:Q+x+P,tr:Q+c+P,bl:Q+p+P,b:Q+r+P,br:Q+y+P,l:Q+b+P,c:Q+n+P,r:Q+u+P};
this.__ui=this._computeEdgeSizes(O);
}},_resolveImageUrl:function(T){return qx.util.AliasManager.getInstance().resolve(T);
},_computeEdgeSizes:function(U){var V=qx.util.ResourceManager.getInstance();
return {top:V.getImageHeight(U.t),bottom:V.getImageHeight(U.b),left:V.getImageWidth(U.l),right:V.getImageWidth(U.r)};
}},destruct:function(){this.__ug=this.__uh=this.__ui=null;
}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,q){if(!q){var q={};
}q.include=this.__sM(q.include);
q.patch=this.__sM(q.patch);
var r={$$type:e,name:name,title:q.title,toString:this.genericToString};
if(q.extend){r.supertheme=q.extend;
}r.basename=qx.Bootstrap.createNamespace(name,r);
this.__sP(r,q);
this.__sN(r,q);
this.$$registry[name]=r;
for(var i=0,a=q.include,l=a.length;i<l;i++){this.include(r,a[i]);
}
for(var i=0,a=q.patch,l=a.length;i<l;i++){this.patch(r,a[i]);
}},__sM:function(s){if(!s){return [];
}
if(qx.Bootstrap.isArray(s)){return s;
}else{return [s];
}},__sN:function(t,u){var v=u.aliases||{};

if(u.extend&&u.extend.aliases){qx.Bootstrap.objectMergeWith(v,u.extend.aliases,false);
}t.aliases=v;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__sO:function(w){for(var i=0,x=this.__sQ,l=x.length;i<l;i++){if(w[x[i]]){return x[i];
}}},__sP:function(y,z){var C=this.__sO(z);
if(z.extend&&!C){C=z.extend.type;
}y.type=C||p;
if(!C){return;
}var E=function(){};
if(z.extend){E.prototype=new z.extend.$$clazz;
}var D=E.prototype;
var B=z[C];
for(var A in B){D[A]=B[A];
if(D[A].base){D[A].base=z.extend;
}}y.$$clazz=E;
y[C]=new E;
},$$registry:{},__sQ:[g,d,f,n,c,o,m,b],__sR:null,__sS:null,__sT:function(){},patch:function(F,G){var I=this.__sO(G);

if(I!==this.__sO(F)){throw new Error("The mixins '"+F.name+"' are not compatible '"+G.name+"'!");
}var H=G[I];
var J=F.$$clazz.prototype;

for(var K in H){J[K]=H[K];
}},include:function(L,M){var O=M.type;

if(O!==L.type){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L.$$clazz.prototype;

for(var Q in N){if(P[Q]!==undefined){continue;
}P[Q]=N[Q];
}}}});
})();
(function(){var o="Number",n="_applyInsets",m="-l",l="insetRight",k="insetTop",j="_applyBaseImage",i="insetBottom",h="-b",g="set",f="shorthand",c="-t",e="insetLeft",d="String",b="qx.ui.decoration.Grid",a="-r";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(p,q){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__ud=new qx.ui.decoration.css3.BorderImage();

if(p){this.__ue(p);
}}else{this.__ud=new qx.ui.decoration.GridDiv(p);
}
if(q!=null){this.__ud.setInsets(q);
}},properties:{baseImage:{check:d,nullable:true,apply:j},insetLeft:{check:o,nullable:true,apply:n},insetRight:{check:o,nullable:true,apply:n},insetBottom:{check:o,nullable:true,apply:n},insetTop:{check:o,nullable:true,apply:n},insets:{group:[k,l,i,e],mode:f}},members:{__ud:null,getMarkup:function(){return this.__ud.getMarkup();
},resize:function(r,s,t){this.__ud.resize(r,s,t);
},tint:function(u,v){},getInsets:function(){return this.__ud.getInsets();
},_applyInsets:function(w,x,name){var y=g+qx.lang.String.firstUp(name);
this.__ud[y](w);
},_applyBaseImage:function(z,A){if(this.__ud instanceof qx.ui.decoration.GridDiv){this.__ud.setBaseImage(z);
}else{this.__ue(z);
}},__ue:function(B){var G,H,J,I;
this.__ud.setBorderImage(B);
var L=qx.util.AliasManager.getInstance().resolve(B);
var M=/(.*)(\.[a-z]+)$/.exec(L);
var K=M[1];
var C=M[2];
var F=qx.util.ResourceManager.getInstance();
var N=F.getImageHeight(K+c+C);
var D=F.getImageWidth(K+a+C);
var E=F.getImageHeight(K+h+C);
var O=F.getImageWidth(K+m+C);
this.__ud.setSlice([N,D,E,O]);
}},destruct:function(){this.__ud=null;
}});
})();
(function(){var e="showcase/theme/window.png",d="showcase/theme/display.png",c="showcase/theme/button.png",b="showcase.page.theme.calc.theme.Decoration",a="showcase/theme/button-pressed.png";
qx.Theme.define(b,{decorations:{"calc-button":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:[3,3,5,3]}},"calc-button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:a,insets:[3,3,5,3]}},"calc-display":{decorator:qx.ui.decoration.Grid,style:{baseImage:d,insets:[5,5,5,4]}},"calc-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:e,insets:2}}}});
})();
(function(){var i="error",h="initialized",g="loading",f="complete",e="engine.name",d="webkit",c="success",b="qx.io.part.Package",a="cached";
qx.Bootstrap.define(b,{construct:function(j,k,l){this.__uG=l?f:h;
this.__uH=j;
this.__uI=k;
},members:{__uG:null,__uH:null,__uI:null,__uJ:null,__uK:null,__uL:null,__uM:null,getId:function(){return this.__uI;
},getReadyState:function(){return this.__uG;
},getUrls:function(){return this.__uH;
},saveClosure:function(m){if(this.__uG==i){return;
}this.__uJ=m;

if(!this.__uK){this.execute();
}else{clearTimeout(this.__uL);
this.__uG=a;
this.__uM(this);
}},execute:function(){if(this.__uJ){this.__uJ();
delete this.__uJ;
}
if(qx.$$packageData[this.__uI]){this.__uO(qx.$$packageData[this.__uI]);
delete qx.$$packageData[this.__uI];
}this.__uG=f;
},loadClosure:function(n,self){if(this.__uG!==h){return;
}this.__uK=true;
this.__uG=g;
this.__uM=qx.Bootstrap.bind(n,self);
this.__uN(this.__uH,function(){},function(){this.__uG=i;
n.call(self,this);
},this);
var o=this;
this.__uL=setTimeout(function(){o.__uG=i;
n.call(self,o);
},qx.Part.TIMEOUT);
},load:function(p,self){if(this.__uG!==h){return;
}this.__uK=false;
this.__uG=g;
this.__uN(this.__uH,function(){this.__uG=f;
this.execute();
p.call(self,this);
},function(){this.__uG=i;
p.call(self,this);
},this);
},__uN:function(q,r,s,self){if(q.length==0){r.call(self);
return;
}var u=0;
var self=this;
var t=function(v){if(u>=q.length){r.call(self);
return;
}var w=new qx.io.ScriptLoader();
w.load(v.shift(),function(status){u+=1;
w.dispose();

if(status!==c){if(self.__uG==g){clearTimeout(self.__uL);
return s.call(self);
}}
if((qx.core.Environment.get(e)==d)){setTimeout(function(){t.call(self,v,r,self);
},0);
}else{t.call(self,v,r,self);
}},self);
};
t(q.concat());
},__uO:qx.$$loader.importPackageData}});
})();
(function(){var t="Number",s="qx.event.type.Event",r="update",q="linear",p="reverse",o="Boolean",n="setup",m="none",l="qx.fx.Base",k="sinodial",d="flicker",j="pulse",g="_applyDuration",c="easeOutQuad",b="spring",f="easeInQuad",e="full",h="wobble",a="finish",i="Object";
qx.Class.define(l,{extend:qx.core.Object,construct:function(u){qx.core.Object.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__uP=qx.fx.Base.EffectState.IDLE;
this.__uQ=u;
},events:{"setup":s,"update":s,"finish":s},properties:{duration:{init:0.5,check:t,apply:g},fps:{init:100,check:t},sync:{init:false,check:o},from:{init:0,check:t},to:{init:1,check:t},delay:{init:0.0,check:t},queue:{check:i,dereference:true},transition:{init:q,check:[q,f,c,k,p,d,h,j,b,m,e]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',RUNNING:'running'}},members:{__uP:null,__uR:null,__uS:null,__uT:null,__uU:null,__uV:null,__uW:null,__uX:null,__uQ:null,_getElement:function(){return this.__uQ;
},_setElement:function(v){this.__uQ=v;
},_applyDuration:function(w,x){},init:function(){this.__uP=qx.fx.Base.EffectState.PREPARING;
this.__uR=0;
this.__uS=this.getDelay()*1000+(new Date().getTime());
this.__uT=this.__uS+(this.getDuration()*1000);
this.__uU=this.getTo()-this.getFrom();
this.__uV=this.__uT-this.__uS;
this.__uW=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(n);
},update:function(y){},finish:function(){this.fireEvent(a);
},start:function(){if(this.__uP!=qx.fx.Base.EffectState.IDLE){return false;
}this.init();
this.beforeStartInternal();
this.beforeStart();

if(!this.getSync()){this.getQueue().add(this);
}return true;
},end:function(){this.render(1.0);
this.cancel();
this.beforeFinishInternal();
this.beforeFinish();
this.finish();
this.afterFinishInternal();
this.afterFinish();
},render:function(z){if(this.__uP==qx.fx.Base.EffectState.PREPARING){this.__uP=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__uP==qx.fx.Base.EffectState.RUNNING){this.__uX=qx.fx.Transition.get(this.getTransition())(z)*this.__uU+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__uX);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(r)){this.fireEvent(r);
}}},loop:function(A){if(A>=this.__uS){if(A>=this.__uT){this.end();
}var C=(A-this.__uS)/this.__uV;
var B=Math.round(C*this.__uW);
if(B>this.__uR){this.render(C);
this.__uR=B;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__uP=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__uP=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this.__uQ=this.__uP=null;
}});
})();
(function(){var g="display",f="mshtml",e="engine.name",d="Boolean",c="block",b="none",a="qx.fx.effect.core.Fade";
qx.Class.define(a,{extend:qx.fx.Base,properties:{modifyDisplay:{init:true,check:d},from:{init:1.0,refine:true},to:{init:0.0,refine:true}},members:{update:function(h){qx.fx.Base.prototype.update.call(this);

if(qx.core.Environment.get(e)==f&&h==1){qx.bom.element.Opacity.reset(this._getElement());
}else{qx.bom.element.Opacity.set(this._getElement(),h);
}},beforeSetup:function(){qx.fx.Base.prototype.beforeSetup.call(this);
var i=this._getElement();

if((this.getModifyDisplay())&&(this.getTo()>0)){qx.bom.element.Style.set(i,g,c);
}qx.bom.element.Opacity.set(i,this.getFrom());
},afterFinishInternal:function(){if((this.getModifyDisplay())&&(this.getTo()==0)){qx.bom.element.Style.set(this._getElement(),g,b);
}}}});
})();
(function(){var bz="white",by="#EEEEEE",bx="#E4E4E4",bw="#F3F3F3",bv="#F0F0F0",bu="#E8E8E8",bt="#CCCCCC",bs="#EFEFEF",br="#1a1a1a",bq="#00204D",bf="gray",be="#F4F4F4",bd="#fffefe",bc="#AFAFAF",bb="#084FAB",ba="#FCFCFC",Y="#CCC",X="#F2F2F2",W="black",V="#ffffdd",bG="#b6b6b6",bH="#004DAD",bE="#BABABA",bF="#005BC3",bC="#334866",bD="#CECECE",bA="#D9D9D9",bB="#D8D8D8",bI="#99C3FE",bJ="#001533",bj="#B3B3B3",bi="#D5D5D5",bl="#C3C3C3",bk="#DDDDDD",bn="#FF9999",bm="#E8E8E9",bp="#084FAA",bo="#C5C5C5",bh="#DBDBDB",bg="#4a4a4a",a="#83BAEA",b="#D7E7F4",c="#07125A",d="#FAF2F2",e="#87AFE7",f="#F7EAEA",g="#777D8D",h="#FBFBFB",i="#CACACA",j="#909090",bN="#9B9B9B",bM="#F0F9FE",bL="#314a6e",bK="#B4B4B4",bR="#787878",bQ="qx.theme.modern.Color",bP="#000000",bO="#26364D",bT="#A7A7A7",bS="#D1E4FF",F="#5CB0FD",G="#EAEAEA",D="#003B91",E="#80B4EF",J="#FF6B78",K="#949494",H="#808080",I="#930000",B="#7B7B7B",C="#C82C2C",r="#DFDFDF",q="#B6B6B6",t="#0880EF",s="#4d4d4d",n="#f4f4f4",m="#7B7A7E",p="#D0D0D0",o="#f8f8f8",l="#404955",k="#959595",P="#AAAAAA",Q="#F7E9E9",R="#314A6E",S="#C72B2B",L="#FAFAFA",M="#FBFCFB",N="#B2D2FF",O="#666666",T="#CBC8CD",U="#999999",A="#8EB8D6",z="#b8b8b8",y="#727272",x="#33508D",w="#F1F1F1",v="#990000",u="#00368A";
qx.Theme.define(bQ,{colors:{"background-application":r,"background-pane":bw,"background-light":ba,"background-medium":by,"background-splitpane":bc,"background-tip":V,"background-tip-error":S,"background-odd":bx,"htmlarea-background":bz,"progressbar-background":bz,"text-light":j,"text-gray":bg,"text-label":br,"text-title":bL,"text-input":bP,"text-hovered":bJ,"text-disabled":m,"text-selected":bd,"text-active":bO,"text-inactive":l,"text-placeholder":T,"border-inner-scrollbar":bz,"border-main":s,"menu-separator-top":bo,"menu-separator-bottom":L,"border-separator":H,"border-toolbar-button-outer":bG,"border-toolbar-border-inner":o,"border-toolbar-separator-right":n,"border-toolbar-separator-left":z,"border-input":bC,"border-inner-input":bz,"border-disabled":q,"border-pane":bq,"border-button":O,"border-column":bt,"border-focused":bI,"invalid":v,"border-focused-invalid":bn,"border-dragover":x,"keyboard-focus":W,"table-pane":bw,"table-focus-indicator":t,"table-row-background-focused-selected":bb,"table-row-background-focused":E,"table-row-background-selected":bb,"table-row-background-even":bw,"table-row-background-odd":bx,"table-row-selected":bd,"table-row":br,"table-row-line":Y,"table-column-line":Y,"table-header-hovered":bz,"progressive-table-header":P,"progressive-table-header-border-right":X,"progressive-table-row-background-even":be,"progressive-table-row-background-odd":bx,"progressive-progressbar-background":bf,"progressive-progressbar-indicator-done":bt,"progressive-progressbar-indicator-undone":bz,"progressive-progressbar-percent-background":bf,"progressive-progressbar-percent-text":bz,"selected-start":bH,"selected-end":u,"tabview-background":c,"shadow":U,"pane-start":h,"pane-end":bv,"group-background":bu,"group-border":bK,"radiobutton-background":bs,"checkbox-border":R,"checkbox-focus":e,"checkbox-hovered":N,"checkbox-hovered-inner":bS,"checkbox-inner":by,"checkbox-start":bx,"checkbox-end":bw,"checkbox-disabled-border":bR,"checkbox-disabled-inner":i,"checkbox-disabled-start":p,"checkbox-disabled-end":bB,"checkbox-hovered-inner-invalid":d,"checkbox-hovered-invalid":Q,"radiobutton-checked":bF,"radiobutton-disabled":bi,"radiobutton-checked-disabled":B,"radiobutton-hovered-invalid":f,"tooltip-error":C,"scrollbar-start":bt,"scrollbar-end":w,"scrollbar-slider-start":by,"scrollbar-slider-end":bl,"button-border-disabeld":k,"button-start":bv,"button-end":bc,"button-disabled-start":be,"button-disabled-end":bE,"button-hovered-start":bM,"button-hovered-end":A,"button-focused":a,"border-invalid":I,"input-start":bv,"input-end":M,"input-focused-start":b,"input-focused-end":F,"input-focused-inner-invalid":J,"input-border-disabled":bN,"input-border-inner":bz,"toolbar-start":bs,"toolbar-end":bk,"window-border":bq,"window-border-caption":y,"window-caption-active-text":bz,"window-caption-active-start":bp,"window-caption-active-end":D,"window-caption-inactive-start":X,"window-caption-inactive-end":bh,"window-statusbar-background":bs,"tabview-start":ba,"tabview-end":by,"tabview-inactive":g,"tabview-inactive-start":G,"tabview-inactive-end":bD,"table-header-start":bu,"table-header-end":bj,"menu-start":bm,"menu-end":bA,"menubar-start":bu,"groupitem-start":bT,"groupitem-end":K,"groupitem-text":bz,"virtual-row-layer-background-even":bz,"virtual-row-layer-background-odd":bz}});
})();
(function(){var e="showcase.page.theme.calc.theme.Color",d="#969696",c="#AAA",b="#DDD",a="white";
qx.Theme.define(e,{colors:{"black-window-bg":d,"black-window-caption":b,"black-button-text":a,"black-button-text-pressed":c}});
})();
(function(){var a="showcase.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,include:[showcase.page.theme.calc.theme.Color],colors:{}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var p="bold",o="widget",n="black-window-bg",m="black-button-text-pressed",l="black-button-text",k="button",j="calc-button-pressed",i="black-window-caption",h="calc-display",g="calc-button",c="center",f="middle",e="calc-window",b="shadow-window",a="showcase.page.theme.calc.theme.appearance.Black",d="display";
qx.Theme.define(a,{appearances:{"calculator":{style:function(q){return {backgroundColor:n,decorator:e,shadow:b,contentPadding:[6,8,8,8]};
}},"calculator/pane":o,"calculator/captionbar":o,"calculator/title":{style:function(r){return {alignY:f,textAlign:c,font:p,textColor:i};
}},"calculator/icon":{style:function(s){return {margin:[3,8,0,8]};
}},"display":{style:function(t){return {decorator:h,marginBottom:8,height:51,padding:[0,20]};
}},"display/label":{style:function(u){return {font:p,marginLeft:5};
}},"display/memory":{style:function(v){return {marginLeft:5};
}},"display/operation":{style:function(w){return {marginLeft:50};
}},"calculator/display":d,"calculator-button":{alias:k,style:function(x){return {textColor:x.pressed?m:l,decorator:x.pressed?j:g,center:true,padding:x.pressed?[1,8,3,8]:[2,8]};
}}}});
})();
(function(){var f="resize",d="__vb",c="interval",b="body",a="qx.event.handler.ElementResize";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){qx.core.Object.call(this);
this.__uY=g;
this.__va={};
this.__vb=new qx.event.Timer(200);
this.__vb.addListener(c,this._onInterval,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{resize:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__va:null,__uY:null,__vb:null,canHandleEvent:function(h,i){return h.tagName.toLowerCase()!==b;
},registerEvent:function(j,k,l){var n=qx.core.ObjectRegistry.toHashCode(j);
var m=this.__va;

if(!m[n]){m[n]={element:j,width:qx.bom.element.Dimension.getWidth(j),height:qx.bom.element.Dimension.getHeight(j)};
this.__vb.start();
}},unregisterEvent:function(o,p,q){var s=qx.core.ObjectRegistry.toHashCode(o);
var r=this.__va;

if(r[s]){delete r[s];

if(qx.lang.Object.isEmpty(r)){this.__vb.stop();
}}},_onInterval:function(e){var u=this.__va;

for(var x in u){var y=u[x];
var t=y.element;
var w=qx.bom.element.Dimension.getWidth(t);
var v=qx.bom.element.Dimension.getHeight(t);

if(y.height!==v||y.width!==w){qx.event.Registration.fireNonBubblingEvent(t,f,qx.event.type.Data,[{width:w,oldWidth:y.width,height:v,oldHeight:y.height}]);
y.width=w;
y.height=v;
}}}},destruct:function(){this.__uY=this.__va=null;
this._disposeObjects(d);
},defer:function(z){qx.event.Registration.addHandler(z);
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
},initialize:function(){var u=qx.core.Environment;
var s,t;
s=u.get(e);

if(s){t=qx.Theme.getByName(s);

if(!t){throw new Error("The theme to use is not available: "+s);
}this.setTheme(t);
}}},environment:{"qx.theme":c}});
})();
(function(){var k="_applyBoxShadow",j="px ",i="Integer",h="shadowHorizontalLength",g="box-shadow",f="-webkit-box-shadow",e="shadowVerticalLength",d="-moz-box-shadow",c="shorthand",b="qx.ui.decoration.MBoxShadow",a="Color";
qx.Mixin.define(b,{properties:{shadowHorizontalLength:{nullable:true,check:i,apply:k},shadowVerticalLength:{nullable:true,check:i,apply:k},shadowBlurRadius:{nullable:true,check:i,apply:k},shadowColor:{nullable:true,check:a,apply:k},shadowLength:{group:[h,e],mode:c}},members:{_styleBoxShadow:function(l){var m=qx.theme.manager.Color.getInstance();
var p=m.resolve(this.getShadowColor());

if(p!=null){var q=this.getShadowVerticalLength()||0;
var n=this.getShadowHorizontalLength()||0;
var blur=this.getShadowBlurRadius()||0;
var o=n+j+q+j+blur+j+p;
l[d]=o;
l[f]=o;
l[g]=o;
}},_applyBoxShadow:function(){}}});
})();
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="engine.name",f="horizontal",e=",",d=" 0",c="px",b="browser.name",a="0",K="shorthand",J="Color",I="vertical",H="",G="Number",F="webkit",E="%",D="),to(",C="from(",B="background-image",q="engine.version",r="-moz-",o="-webkit-gradient(linear,",p="startColorPosition",m="-o-",n="deg, ",k="startColor",l="ie",s="qx.ui.decoration.MLinearBackgroundGradient",t="endColorPosition",w="opera",v="linear-gradient(",y="endColor",x="-ms-",A="gecko",z="background",u="-webkit-";
qx.Mixin.define(s,{properties:{startColor:{check:J,nullable:true,apply:j},endColor:{check:J,nullable:true,apply:j},orientation:{check:[f,I],init:I,apply:j},startColorPosition:{check:G,init:0,apply:j},endColorPosition:{check:G,init:100,apply:j},colorPositionUnit:{check:[c,E],init:E,apply:j},gradientStart:{group:[k,p],mode:K},gradientEnd:{group:[y,t],mode:K}},members:{_styleLinearBackgroundGradient:function(L){var O=qx.theme.manager.Color.getInstance();
var U=this.getColorPositionUnit();
if(qx.core.Environment.get(g)==F&&parseFloat(qx.core.Environment.get(q))<534.16){U=U===c?H:U;

if(this.getOrientation()==f){var T=this.getStartColorPosition()+U+d+U;
var S=this.getEndColorPosition()+U+d+U;
}else{var T=a+U+i+this.getStartColorPosition()+U;
var S=a+U+i+this.getEndColorPosition()+U;
}var Q=C+O.resolve(this.getStartColor())+D+O.resolve(this.getEndColor())+h;
var P=o+T+e+S+e+Q+h;
L[z]=P;
}else{var V=this.getOrientation()==f?0:270;
var N=O.resolve(this.getStartColor())+i+this.getStartColorPosition()+U;
var M=O.resolve(this.getEndColor())+i+this.getEndColorPosition()+U;
var R=H;

if(qx.core.Environment.get(g)==A){R=r;
}else if(qx.core.Environment.get(b)==w){R=m;
}else if(qx.core.Environment.get(b)==l){R=x;
}else if(qx.core.Environment.get(g)==F){R=u;
}L[B]=R+v+V+n+N+e+M+h;
}},_resizeLinearBackgroundGradient:function(W,X,Y){var ba=this.getInsets();
X-=ba.left+ba.right;
Y-=ba.top+ba.bottom;
return {left:ba.left,top:ba.top,width:X,height:Y};
},_applyLinearBackgroundGradient:function(){}}});
})();
(function(){var j="px ",i=" ",h='',g="Color",f="Number",e="border-top",d="border-left",c="border-bottom",b="border-right",a="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",t="relative",q="browser.documentmode",r="innerColorLeft",o="qx.ui.decoration.MDoubleBorder",p="left",m="engine.version",n="innerWidthBottom",k="innerWidthLeft",l="position",s="absolute";
qx.Mixin.define(o,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__ua;
this._resizeBorder=this.__tY;
this._styleBorder=this.__tW;
this._generateMarkup=this.__tX;
},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[w,z,n,k],mode:a},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[u,v,x,r],mode:a}},members:{__tV:null,__tW:function(D){var E=qx.theme.manager.Color.getInstance();
D.position=t;
var F=this.getInnerWidthTop();

if(F>0){D[e]=F+j+this.getStyleTop()+i+E.resolve(this.getInnerColorTop());
}var F=this.getInnerWidthRight();

if(F>0){D[b]=F+j+this.getStyleRight()+i+E.resolve(this.getInnerColorRight());
}var F=this.getInnerWidthBottom();

if(F>0){D[c]=F+j+this.getStyleBottom()+i+E.resolve(this.getInnerColorBottom());
}var F=this.getInnerWidthLeft();

if(F>0){D[d]=F+j+this.getStyleLeft()+i+E.resolve(this.getInnerColorLeft());
}},__tX:function(G){var J=this._generateBackgroundMarkup(G);
var H=qx.theme.manager.Color.getInstance();
G[e]=h;
G[b]=h;
G[c]=h;
G[d]=h;
G[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(m))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(q)<8)){G[C]=h;
}var I=this.getWidthTop();

if(I>0){G[e]=I+j+this.getStyleTop()+i+H.resolve(this.getColorTop());
}var I=this.getWidthRight();

if(I>0){G[b]=I+j+this.getStyleRight()+i+H.resolve(this.getColorRight());
}var I=this.getWidthBottom();

if(I>0){G[c]=I+j+this.getStyleBottom()+i+H.resolve(this.getColorBottom());
}var I=this.getWidthLeft();

if(I>0){G[d]=I+j+this.getStyleLeft()+i+H.resolve(this.getColorLeft());
}G[l]=s;
G[y]=0;
G[p]=0;
return this.__tV=this._generateBackgroundMarkup(G,J);
},__tY:function(K,L,M){var N=this.getInsets();
L-=N.left+N.right;
M-=N.top+N.bottom;
var O=N.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=N.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:O,top:top,width:L,height:M,elementToApplyDimensions:K.firstChild};
},__ua:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var c="px",b="qx.ui.decoration.Background",a="absolute";
qx.Class.define(b,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(d){qx.ui.decoration.Abstract.call(this);

if(d!=null){this.setBackgroundColor(d);
}},members:{__ub:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ub;
},getMarkup:function(e){if(this.__ub){return this.__ub;
}var f={position:a,top:0,left:0};
var g=this._generateBackgroundMarkup(f);
return this.__ub=g;
},resize:function(h,i,j){var k=this.getInsets();
h.style.width=(i-k.left-k.right)+c;
h.style.height=(j-k.top-k.bottom)+c;
h.style.left=-k.left+c;
h.style.top=-k.top+c;
},tint:function(l,m){this._tintBackgroundColor(l,m,l.style);
}},destruct:function(){this.__ub=null;
}});
})();
(function(){var j='"></div>',i="_applyStyle",h="1px",g='<div style="',f='border:',e="1px solid ",d="Color",c=";",b="px",a='</div>',x="qx.ui.decoration.Beveled",w="css.boxmodel",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="",r="content",q='border-left:',p='border-top:',o="Number",m='<div style="position:absolute;top:1px;left:0px;',n='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(y,z,A){qx.ui.decoration.Abstract.call(this);
if(y!=null){this.setOuterColor(y);
}
if(z!=null){this.setInnerColor(z);
}
if(A!=null){this.setInnerOpacity(A);
}},properties:{innerColor:{check:d,nullable:true,apply:i},innerOpacity:{check:o,init:1,apply:i},outerColor:{check:d,nullable:true,apply:i}},members:{__uc:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__uc;
},_applyStyle:function(){},getMarkup:function(){if(this.__uc){return this.__uc;
}var B=qx.theme.manager.Color.getInstance();
var C=[];
var F=e+B.resolve(this.getOuterColor())+c;
var E=e+B.resolve(this.getInnerColor())+c;
C.push(k);
C.push(g);
C.push(f,F);
C.push(qx.bom.element.Opacity.compile(0.35));
C.push(j);
C.push(m);
C.push(q,F);
C.push(t,F);
C.push(qx.bom.element.Opacity.compile(1));
C.push(j);
C.push(g);
C.push(n);
C.push(p,F);
C.push(u,F);
C.push(qx.bom.element.Opacity.compile(1));
C.push(j);
var D={position:l,top:h,left:h,opacity:1};
C.push(this._generateBackgroundMarkup(D));
C.push(v);
C.push(f,E);
C.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
C.push(j);
C.push(a);
return this.__uc=C.join(s);
},resize:function(G,H,I){if(H<4){H=4;
}
if(I<4){I=4;
}if(qx.core.Environment.get(w)==r){var outerWidth=H-2;
var outerHeight=I-2;
var O=outerWidth;
var N=outerHeight;
var innerWidth=H-4;
var innerHeight=I-4;
}else{var outerWidth=H;
var outerHeight=I;
var O=H-2;
var N=I-2;
var innerWidth=O;
var innerHeight=N;
}var Q=b;
var M=G.childNodes[0].style;
M.width=outerWidth+Q;
M.height=outerHeight+Q;
var L=G.childNodes[1].style;
L.width=outerWidth+Q;
L.height=N+Q;
var K=G.childNodes[2].style;
K.width=O+Q;
K.height=outerHeight+Q;
var J=G.childNodes[3].style;
J.width=O+Q;
J.height=N+Q;
var P=G.childNodes[4].style;
P.width=innerWidth+Q;
P.height=innerHeight+Q;
},tint:function(R,S){this._tintBackgroundColor(R,S,R.childNodes[3].style);
}},destruct:function(){this.__uc=null;
}});
})();
(function(){var a="qx.ui.decoration.Uniform";
qx.Class.define(a,{extend:qx.ui.decoration.Single,construct:function(b,c,d){qx.ui.decoration.Single.call(this);
if(b!=null){this.setWidth(b);
}
if(c!=null){this.setStyle(c);
}
if(d!=null){this.setColor(d);
}}});
})();
(function(){var j="px",i="Integer",h="_applyBorderRadius",g="radiusTopRight",f="radiusTopLeft",e="-webkit-border-bottom-left-radius",d="-webkit-background-clip",c="radiusBottomRight",b="-webkit-border-bottom-right-radius",a="border-top-left-radius",w="border-top-right-radius",v="border-bottom-left-radius",u="radiusBottomLeft",t="-webkit-border-top-left-radius",s="shorthand",r="-moz-border-radius-bottomright",q="padding-box",p="border-bottom-right-radius",o="qx.ui.decoration.MBorderRadius",n="-moz-border-radius-topright",l="-webkit-border-top-right-radius",m="-moz-border-radius-topleft",k="-moz-border-radius-bottomleft";
qx.Mixin.define(o,{properties:{radiusTopLeft:{nullable:true,check:i,apply:h},radiusTopRight:{nullable:true,check:i,apply:h},radiusBottomLeft:{nullable:true,check:i,apply:h},radiusBottomRight:{nullable:true,check:i,apply:h},radius:{group:[f,g,c,u],mode:s}},members:{_styleBorderRadius:function(x){x[d]=q;
var y=this.getRadiusTopLeft();

if(y>0){x[m]=y+j;
x[t]=y+j;
x[a]=y+j;
}y=this.getRadiusTopRight();

if(y>0){x[n]=y+j;
x[l]=y+j;
x[w]=y+j;
}y=this.getRadiusBottomLeft();

if(y>0){x[k]=y+j;
x[e]=y+j;
x[v]=y+j;
}y=this.getRadiusBottomRight();

if(y>0){x[r]=y+j;
x[b]=y+j;
x[p]=y+j;
}},_applyBorderRadius:function(){}}});
})();
(function(){var cI="solid",cH="invalid",cG="scale",cF="border-main",cE="border-invalid",cD="shadow",cC="border-separator",cB="checkbox-hovered",cA="button-start",cz="button-end",bJ="background-light",bI="tabview-background",bH="repeat-x",bG="radiobutton",bF="button-css",bE="border-input",bD="border-inner-input",bC="border-inner-scrollbar",bB="radiobutton-checked",bA="tabview-inactive",cP="checkbox",cQ="window-border",cN="radiobutton-disabled",cO="radiobutton-hovered-invalid",cL="tabview-page-button-top-active-css",cM="button-border-disabeld",cJ="tabview-page-button-top-inactive-css",cK="decoration/form/input.png",cR="border-toolbar-border-inner",cS="input-css",ci="border-toolbar-button-outer",ch="border-disabled",ck="background-pane",cj="checkbox-disabled-border",cm="button-hovered-end",cl="repeat-y",co="border-dragover",cn="button-hovered-start",cg="progressive-table-header-border-right",cf="decoration/scrollbar/scrollbar-button-bg-vertical.png",k="radiobutton-background",l="checkbox-focus",m="scrollbar-slider-horizontal-css",n="menu-end",o="decoration/selection.png",p="horizontal",q="table-header-start",r="decoration/scrollbar/scrollbar-button-bg-horizontal.png",s="decoration/form/input-focused.png",t="checkbox-hovered-invalid",dh="decoration/table/header-cell.png",dg="tabview-inactive-start",df="table-header-end",de="border-button",dl="border-focused-invalid",dk="button-focused-css",dj="checkbox-border",di="tabview-start",dn="checkbox-start",dm="decoration/tabview/tab-button-top-active.png",ba="group-background",bb="decoration/form/button-c.png",X="keyboard-focus",Y="button-disabled-start",be="selected-end",bf="table-header-hovered",bc="decoration/groupbox/groupbox.png",bd="decoration/pane/pane.png",V="decoration/menu/background.png",W="tooltip-error",I="decoration/toolbar/toolbar-part.gif",H="input-focused-css",K="decoration/menu/bar-background.png",J="window-border-caption",E="radiobutton-hovered",D="decoration/tabview/tab-button-bottom-active.png",G="radiobutton-checked-focused",F="groupitem-end",C="button-disabled-css",B="group-border",bk="scrollbar-slider-vertical-css",bl="decoration/form/button-checked.png",bm="window-css",bn="selected-start",bg="tabview-end",bh="window-statusbar-background",bi="decoration/scrollbar/scrollbar-bg-vertical.png",bj="button-pressed-css",bo="toolbar-button-hovered-css",bp="window-caption-active-end",S="dotted",R="checkbox-disabled-end",Q="window-caption-active-start",P="button-focused",O="menu-start",N="decoration/form/tooltip-error.png",M="window-captionbar-active-css",L="qx/decoration/Modern",U="border-toolbar-separator-left",T="decoration/scrollbar/scrollbar-bg-horizontal.png",bq="decoration/tabview/tab-button-left-active.png",br="decoration/tabview/tab-button-right-inactive.png",bs="decoration/tabview/tab-button-bottom-inactive.png",bt="decoration/form/button-disabled.png",bu="decoration/form/button-pressed.png",bv="background-splitpane",bw="decoration/form/button-checked-focused.png",bx="px",by="decoration/window/statusbar.png",bz="input-border-disabled",bN="checkbox-inner",bM="scrollbar-horizontal-css",bL="button-disabled-end",bK="center",bR="toolbar-end",bQ="groupitem-start",bP="decoration/form/button-hovered.png",bO="checkbox-hovered-inner",bT="input-focused-start",bS="scrollbar-start",cb="scrollbar-slider-start",cc="radiobutton-checked-disabled",bY="checkbox-focused",ca="qx.theme.modern.Decoration",bW="decoration/form/button.png",bX="decoration/app-header.png",bU="decoration/form/button-focused.png",bV="radiobutton-checked-hovered",cd="button-hovered-css",ce="checkbox-disabled-inner",cs="border-toolbar-separator-right",cr="border-focused",cu="decoration/shadow/shadow.png",ct="scrollbar-end",cw="decoration/group-item.png",cv="window-caption-inactive-end",cy="checkbox-end",cx="tabview-inactive-end",cq="input-end",cp="no-repeat",da="decoration/tabview/tab-button-left-inactive.png",db="input-focused-inner-invalid",dc="menu-separator-top",dd="window-caption-inactive-start",cV="scrollbar-slider-end",cW="decoration/window/captionbar-inactive.png",cX="decoration/tabview/tab-button-top-inactive.png",cY="pane-end",cT="input-focused-end",cU="decoration/form/tooltip-error-arrow.png",j="menubar-start",i="toolbar-start",h="checkbox-disabled-start",g="radiobutton-focused",f="pane-start",e="table-focus-indicator",d="button-checked-css",c="decoration/form/button-checked-c.png",b="menu-separator-bottom",a="decoration/shadow/shadow-small.png",w="input-start",x="decoration/tabview/tabview-pane.png",u="decoration/window/captionbar-active.png",v="decoration/tabview/tab-button-right-active.png",z="button-checked-focused-css",A="decoration/toolbar/toolbar-gradient.png",y="checkbox-hovered-inner-invalid";
qx.Theme.define(ca,{aliases:{decoration:L},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:cF}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:o,backgroundRepeat:cG}},"selected-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bn,endColor:be}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:o,backgroundRepeat:cG,bottom:[2,cI,co]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,cI,co]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:[0,2,3,0]}},"pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:bI,radius:3,shadowColor:cD,shadowBlurRadius:2,shadowLength:0,gradientStart:[f,0],gradientEnd:[cY,100]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"group-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{backgroundColor:ba,radius:4,color:B,width:1}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cH,innerColor:bD,innerOpacity:0.5,backgroundImage:cK,backgroundRepeat:bH,backgroundColor:bJ}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:X,style:S}},"radiobutton":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:k,radius:5,width:1,innerWidth:2,color:dj,innerColor:k,shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:5}},"radiobutton-checked":{include:bG,style:{backgroundColor:bB}},"radiobutton-checked-focused":{include:bB,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:bB,style:{innerColor:cB}},"radiobutton-focused":{include:bG,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:bG,style:{backgroundColor:cB,innerColor:cB}},"radiobutton-disabled":{include:bG,style:{innerColor:cN,backgroundColor:cN,color:cj}},"radiobutton-checked-disabled":{include:cN,style:{backgroundColor:cc}},"radiobutton-invalid":{include:bG,style:{color:cH}},"radiobutton-checked-invalid":{include:bB,style:{color:cH}},"radiobutton-checked-focused-invalid":{include:G,style:{color:cH,shadowColor:cH}},"radiobutton-checked-hovered-invalid":{include:bV,style:{color:cH,innerColor:cO}},"radiobutton-focused-invalid":{include:g,style:{color:cH,shadowColor:cH}},"radiobutton-hovered-invalid":{include:E,style:{color:cH,innerColor:cO,backgroundColor:cO}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:cC}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cC}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[2,5,5,2]}},"tooltip-error-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:W,radius:4,shadowColor:cD,shadowBlurRadius:2,shadowLength:1}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cU,backgroundPositionY:bK,backgroundRepeat:cp,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:cu,insets:[4,8,8,4]}},"shadow-window-css":{decorator:[qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{shadowColor:cD,shadowBlurRadius:2,shadowLength:1}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:a,insets:[0,3,3,0]}},"popup-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:cF,shadowColor:cD,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:T,backgroundRepeat:bH}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bi,backgroundRepeat:cl}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cG,outerColor:cF,innerColor:bC,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cG,outerColor:ch,innerColor:bC,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cf,backgroundRepeat:cG,outerColor:cF,innerColor:bC,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cf,backgroundRepeat:cG,outerColor:ch,innerColor:bC,innerOpacity:0.3}},"scrollbar-horizontal-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[bS,0],gradientEnd:[ct,100]}},"scrollbar-vertical-css":{include:bM,style:{orientation:p}},"scrollbar-slider-horizontal-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[cb,0],gradientEnd:[cV,100],color:cF,width:1}},"scrollbar-slider-vertical-css":{include:m,style:{orientation:p}},"scrollbar-slider-horizontal-disabled-css":{include:m,style:{color:cM}},"scrollbar-slider-vertical-disabled-css":{include:bk,style:{color:cM}},"button-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:de,width:1,startColor:cA,endColor:cz,startColorPosition:35,endColorPosition:100}},"button-disabled-css":{include:bF,style:{color:cM,startColor:Y,endColor:bL}},"button-hovered-css":{include:bF,style:{startColor:cn,endColor:cm}},"button-checked-css":{include:bF,style:{endColor:cA,startColor:cz}},"button-pressed-css":{include:bF,style:{endColor:cn,startColor:cm}},"button-focused-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:de,width:1,innerColor:P,innerWidth:2,startColor:cA,endColor:cz,startColorPosition:30,endColorPosition:100}},"button-checked-focused-css":{include:dk,style:{endColor:cA,startColor:cz}},"button-invalid-css":{include:bF,style:{color:cE}},"button-disabled-invalid-css":{include:C,style:{color:cE}},"button-hovered-invalid-css":{include:cd,style:{color:cE}},"button-checked-invalid-css":{include:d,style:{color:cE}},"button-pressed-invalid-css":{include:bj,style:{color:cE}},"button-focused-invalid-css":{include:dk,style:{color:cE}},"button-checked-focused-invalid-css":{include:z,style:{color:cE}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:bW,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:bt,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:bU,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bP,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bu,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:bl,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:bw,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Single,style:{color:cH,width:1}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cH,innerColor:dl,insets:[0]}},"checkbox":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow],style:{width:1,color:dj,innerWidth:1,innerColor:bN,gradientStart:[dn,0],gradientEnd:[cy,100],shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:4}},"checkbox-hovered":{include:cP,style:{innerColor:bO,gradientStart:[cB,0],gradientEnd:[cB,100]}},"checkbox-focused":{include:cP,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:cP,style:{color:cj,innerColor:ce,gradientStart:[h,0],gradientEnd:[R,100]}},"checkbox-invalid":{include:cP,style:{color:cH}},"checkbox-hovered-invalid":{include:cB,style:{color:cH,innerColor:y,gradientStart:[t,0],gradientEnd:[t,100]}},"checkbox-focused-invalid":{include:bY,style:{color:cH,shadowColor:cH}},"input-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBackgroundColor],style:{color:bE,innerColor:bD,innerWidth:1,width:1,backgroundColor:bJ,startColor:w,endColor:cq,startColorPosition:0,endColorPosition:12,colorPositionUnit:bx}},"border-invalid-css":{include:cS,style:{color:cE}},"input-focused-css":{include:cS,style:{startColor:bT,innerColor:cT,endColorPosition:4}},"input-focused-invalid-css":{include:H,style:{innerColor:db,color:cE}},"input-disabled-css":{include:cS,style:{color:bz}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bE,innerColor:bD,innerOpacity:0.5,backgroundImage:cK,backgroundRepeat:bH,backgroundColor:bJ}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bE,innerColor:cr,backgroundImage:s,backgroundRepeat:bH,backgroundColor:bJ}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cH,innerColor:dl,backgroundImage:s,backgroundRepeat:bH,backgroundColor:bJ,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:ch,innerColor:bD,innerOpacity:0.5,backgroundImage:cK,backgroundRepeat:bH,backgroundColor:bJ}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:A,backgroundRepeat:cG}},"toolbar-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:40,endColorPosition:60,startColor:i,endColor:bR}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:ci,innerColor:cR,backgroundImage:bb,backgroundRepeat:cG}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:ci,innerColor:cR,backgroundImage:c,backgroundRepeat:cG}},"toolbar-button-hovered-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{color:ci,width:1,innerWidth:1,innerColor:cR,radius:2,gradientStart:[cA,30],gradientEnd:[cz,100]}},"toolbar-button-checked-css":{include:bo,style:{gradientStart:[cz,30],gradientEnd:[cA,100]}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:U,colorRight:cs,styleLeft:cI,styleRight:cI}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:I,backgroundRepeat:cl}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:x,insets:[4,6,7,4]}},"tabview-pane-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MSingleBorder],style:{width:1,color:cQ,radius:3,gradientStart:[di,90],gradientEnd:[bg,100]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:dm}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:cX}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bs}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bq}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:da}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:v}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:br}},"tabview-page-button-top-active-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{radius:[3,3,0,0],width:[1,1,0,1],color:bI,backgroundColor:di,shadowLength:1,shadowColor:cD,shadowBlurRadius:2}},"tabview-page-button-top-inactive-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{radius:[3,3,0,0],color:bA,colorBottom:bI,width:1,gradientStart:[dg,0],gradientEnd:[cx,100]}},"tabview-page-button-bottom-active-css":{include:cL,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:dg}},"tabview-page-button-bottom-inactive-css":{include:cJ,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:bA,colorTop:bI}},"tabview-page-button-left-active-css":{include:cL,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive-css":{include:cJ,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:bA,colorRight:bI}},"tabview-page-button-right-active-css":{include:cL,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive-css":{include:cJ,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:bA,colorLeft:bI}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:ck,width:3,color:bv,style:cI}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:ck,width:1,color:cF,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:u}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:cW}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:by}},"window-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:cD}},"window-incl-statusbar-css":{include:bm,style:{radius:[5,5,5,5]}},"window-captionbar-active-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:cQ,colorBottom:J,radius:[5,5,0,0],gradientStart:[Q,30],gradientEnd:[bp,70]}},"window-captionbar-inactive-css":{include:M,style:{gradientStart:[dd,30],gradientEnd:[cv,70]}},"window-statusbar-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius],style:{backgroundColor:bh,width:[0,1,1,1],color:cQ,radius:[0,0,5,5]}},"window-pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{backgroundColor:ck,width:1,color:cQ,widthTop:0}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:cF,style:cI}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cF,style:cI}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:dh,backgroundRepeat:cG,widthBottom:1,colorBottom:cF,style:cI}},"table-scroller-header-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[df,90],widthBottom:1,colorBottom:cF}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cC,styleRight:cI}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cC,styleRight:cI,widthBottom:1,colorBottom:bf,styleBottom:cI}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:e,style:cI}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:cF,style:cI}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:dh,backgroundRepeat:cG,widthRight:1,colorRight:cg,style:cI}},"progressive-table-header-cell-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[df,90],widthRight:1,colorRight:cg}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:V,backgroundRepeat:cG,width:1,color:cF,style:cI}},"menu-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{gradientStart:[O,0],gradientEnd:[n,100],shadowColor:cD,shadowBlurRadius:2,shadowLength:1,width:1,color:cF}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:dc,widthBottom:1,colorBottom:b}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:K,backgroundRepeat:cG,width:1,color:cC,style:cI}},"menubar-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[j,0],gradientEnd:[n,100],width:1,color:cC}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bX,backgroundRepeat:cG}},"progressbar":{decorator:qx.ui.decoration.Single,style:{width:1,color:bE}},"group-item":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cw,backgroundRepeat:cG}},"group-item-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bQ,endColor:F}}}});
})();
(function(){var j="px",i="no-repeat",h="engine.version",g="0",f="-1px",e="-l",d='</div>',c="-t",b="browser.quirksmode",a="-r",v='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',u="_applyBaseImage",t="-b",s="repeat-y",r="String",q="",p="qx.ui.decoration.BoxDiv",o="-c",n="mshtml",m="engine.name",k="horizontal",l="repeat-x";
qx.Class.define(p,{extend:qx.ui.decoration.Abstract,construct:function(w,x,y){qx.ui.decoration.Abstract.call(this);
this._setOrientation(y);
if(w!=null){this.setBaseImage(w);
}
if(x!=null){this.setInsets(x);
}},properties:{baseImage:{check:r,nullable:true,apply:u}},members:{__vc:null,__vd:null,__ve:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__vc;
},_setOrientation:function(z){this._isHorizontal=z==k;
},getMarkup:function(){if(this.__vc){return this.__vc;
}var A=qx.bom.element.Decoration;
var B=this.__vd;
var C=this.__ve;
var D=[];
D.push(v);

if(this._isHorizontal){D.push(A.create(B.l,i,{top:0,left:0}));
D.push(A.create(B.c,l,{top:0,left:C.left+j}));
D.push(A.create(B.r,i,{top:0,right:0}));
}else{D.push(A.create(B.t,i,{top:0,left:0}));
D.push(A.create(B.c,s,{top:C.top+j,left:C.left+j}));
D.push(A.create(B.b,i,{bottom:0,left:0}));
}D.push(d);
return this.__vc=D.join(q);
},resize:function(E,F,G){E.style.width=F+j;
E.style.height=G+j;
var H=this.__ve;

if(this._isHorizontal){var innerWidth=F-H.left-H.right;
innerWidth=innerWidth<0?0:innerWidth;
E.childNodes[1].style.width=innerWidth+j;
}else{var innerHeight=G-H.top-H.bottom;
innerHeight=innerHeight<0?0:innerHeight;
E.childNodes[1].style.height=innerHeight+j;
}
if((qx.core.Environment.get(m)==n)){if(parseFloat(qx.core.Environment.get(h))<7||(qx.core.Environment.get(b)&&parseFloat(qx.core.Environment.get(h))<8)){if(this._isHorizontal){E.childNodes[2].style.marginRight=(F%2==1)?f:g;
}else{E.childNodes[2].style.marginBottom=(G%2==1)?f:g;
}}}},tint:function(I,J){},_applyBaseImage:function(K,L){var M=qx.util.ResourceManager.getInstance();

if(K){var O=qx.util.AliasManager.getInstance();
var Q=O.resolve(K);
var R=/(.*)(\.[a-z]+)$/.exec(Q);
var P=R[1];
var N=R[2];
var S=this.__vd={t:P+c+N,b:P+t+N,c:P+o+N,l:P+e+N,r:P+a+N};
this.__ve={top:M.getImageHeight(S.t),bottom:M.getImageHeight(S.b),left:M.getImageWidth(S.l),right:M.getImageWidth(S.r)};
}}},destruct:function(){this.__vc=this.__vd=this.__ve=null;
}});
})();
(function(){var m="",l='#',k="String",j="request",i="mshtml",h="engine.name",g="changeTitle",f="abstract",e="_applyState",d="changeState",a="qx.bom.History",c="_applyTitle",b="qx.event.type.Data";
qx.Class.define(a,{extend:qx.core.Object,type:f,construct:function(){qx.core.Object.call(this);
this._baseUrl=window.location.href.split(l)[0]+l;
this.__tG={};
this._setInitialState();
},events:{"request":b},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.core.Environment.get("engine.name")=="mshtml"&&document.documentMode>=8)||(!(qx.core.Environment.get("engine.name")=="mshtml")&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if((qx.core.Environment.get(h)==i)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:k,event:g,nullable:true,apply:c},state:{check:k,event:d,nullable:true,apply:e}},members:{__tG:null,_applyState:function(n,o){this._writeState(n);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(p){if(qx.lang.Type.isString(p)){return encodeURIComponent(p);
}return m;
},_decode:function(q){if(qx.lang.Type.isString(q)){return decodeURIComponent(q);
}return m;
},_applyTitle:function(r){if(r!=null){document.title=r||m;
}},addToHistory:function(s,t){if(!qx.lang.Type.isString(s)){s=s+m;
}
if(qx.lang.Type.isString(t)){this.setTitle(t);
this.__tG[s]=t;
}
if(this.getState()!==s){this._writeState(s);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(u){this.setState(u);
this.fireDataEvent(j,u);

if(this.__tG[u]!=null){this.setTitle(this.__tG[u]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(v){var w=this._baseUrl+(v||m);
var x=window.location;

if(w!=x.href){x.href=w;
}},_getHash:function(){var y=/#(.*)$/.exec(window.location.href);
return y&&y[1]?y[1]:m;
}},destruct:function(){this.__tG=null;
}});
})();
(function(){var d="hashchange",c="interval",b="qx.bom.NativeHistory",a="engine.name";
qx.Class.define(b,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__tI();
},members:{__tH:null,__tI:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__tH=qx.lang.Function.bind(this.__tK,this);
qx.bom.Event.addNativeListener(window,d,this.__tH);
}else{qx.event.Idle.getInstance().addListener(c,this.__tK,this);
}},__tJ:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,d,this.__tH);
}else{qx.event.Idle.getInstance().removeListener(c,this.__tK,this);
}},__tK:function(){var e=this._readState();

if(qx.lang.Type.isString(e)&&e!=this.getState()){this._onHistoryLoad(e);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Environment.select(a,{"opera":function(f){qx.event.Timer.once(function(){this._setHash(this._encode(f));
},this,0);
},"default":function(g){this._setHash(this._encode(g));
}})},destruct:function(){this.__tJ();
}});
})();
(function(){var j="HTML Editor",i="Format some text with underline, bold, italic, ...",h="Insert a numbered or bullet point list.",g="supplement. The UI controls of the toolbar can be used to interact ",f="The Html Editor, embedded here in a window with menu bar and toolbar, provides basic",e="Editor widget",d="showcase.page.htmleditor.Content",c="showcase/htmleditor/icon.png",b="Low-Level editor",a="htmleditor",v="Align the text on the right side.",u="Menu",t="Overview HTML Editing",s=" cross-browser HTML editing capabilities and is available both as a low-level component",r="MenuBar",q="HTML Area",p="You can insert HTML tables, images, hyperlinks, ...",o="with the HTML editing component.",n="showcase.page.htmleditor.Page",m="Try reverting your changes by using the undo button.",k=" and as a qooxdoo widget. It offers events, allowing easy implementation of a toolbar ",l="Toolbar";
qx.Class.define(n,{extend:showcase.Page,construct:function(){showcase.Page.call(this);
this.set({name:j,part:a,icon:c,contentClass:d,description:showcase.page.DescriptionBuilder.build(j,this.__vf,this.__vg,this.__vh,this.__vi,this.__vj,this.__vk)});
},members:{__vf:f+s+k+g+o,__vg:{"Text Formatting":i,"Alignment":v,"Lists":h,"Redo/Undo":m},__vh:{"Inserting":p},__vi:{"pages/ui_html_editing.html":t},__vj:{"#bom~HtmlArea.html":b,"#widget~HtmlArea.html":e},__vk:{"#qx.bom.htmlarea":q,"#qx.ui.toolbar":l,"#qx.ui.menubar":r,"#qx.ui.menu":u}}});
})();
(function(){var j="Form",i="Click the \"MenuButton\" to open the menu.",h="Form Controller for Binding",g="Form showcase",f="Data bound form",e="widgets. The widgets are grouped by type.",d="Open the select box to see the list of selectables.",c="Double column form renderer",b="Multi page form",a="showcase.page.form.Content",z="Custom form renderer",y="Form Renderer",x="Form validation",w="form",v="This form demo shows the complete set of form ",u="showcase/form/icon.png",t="Data binding form controller",s="showcase.page.form.Page",r="Default form renderer",q="The placeholder disappears once you start to type in a text field.",o="Form handling",p="Complete set of form widgets.",m="Hold the repeat button to see the value increase.",n="Try cycling through the widgets by pressing the tab key.",k="Form renderer using placeholders",l="Form Package";
qx.Class.define(s,{extend:showcase.Page,construct:function(){showcase.Page.call(this);
this.set({name:j,part:w,icon:u,contentClass:a,description:showcase.page.DescriptionBuilder.build(j,this.__vl,this.__vm,this.__vn,this.__vo,this.__vp,this.__vq)});
},members:{__vl:v+e,__vm:{"Selection":d,"Text":q,"Buttons":m,"MenuButton":i},__vn:{"Widgets":p,"Keyboard Navigation":n},__vo:{"pages/gui_toolkit/ui_form_handling.html":o},__vp:{"#ui~FormRenderer.html":r,"#ui~FormRendererCustom.html":z,"#ui~FormRendererDouble.html":c,"#ui~FormRendererPlaceholder.html":k,"#ui~FormValidator.html":x,"#ui~MultiPageForm.html":b,"#showcase~Form.html":g,"#data~FormController.html":t,"#data~Form.html":f},__vq:{"#qx.ui.form":l,"#qx.ui.form.renderer":y,"#qx.data.controller.Form":h}}});
})();
(function(){var ep="css.gradients",eo="widget",en="atom",em="-css",el="button-frame",ek="css.borderradius",ej="css.boxshadow",ei="main",eh="button",eg="bold",cB="text-selected",cA="image",cz="text-disabled",cy="middle",cx="selected",cw="background-light",cv="label",cu="groupbox",ct="decoration/arrows/down.png",cs="popup",ew="cell",ex="border-invalid",eu="input",ev="input-disabled",es="menu-button",et="input-focused-invalid",eq="toolbar-button",er="spinner",ey="input-focused",ez="list",dH="tooltip",dG="qx/static/blank.gif",dJ="radiobutton",dI="tree-item",dL="combobox",dK="treevirtual-contract",dN="scrollbar",dM="datechooser/nav-button",dE="center",dD="checkbox",u="treevirtual-expand",v="",w="textfield",x="-invalid",y="decoration/arrows/right.png",z="background-application",A="invalid",B="right-top",C="selectbox",D="text-title",eN="icon/16/places/folder-open.png",eM="radiobutton-hovered",eL="group-item",eK="scrollbar/button",eR="right",eQ="combobox/button",eP="virtual-list",eO="icon/16/places/folder.png",eT="radiobutton-checked-focused",eS="text-label",by="decoration/tree/closed.png",bz="table-scroller-header",bw="scrollbar-slider-horizontal",bx="checkbox-hovered",bC="checkbox-checked",bD="decoration/arrows/left.png",bA="radiobutton-checked",bB="button-focused",bu="text-light",bv="menu-slidebar-button",ba="checkbox-undetermined",Y="table-scroller-header-css",bc="text-input",bb="slidebar/button-forward",V="background-splitpane",U="text-hovered",X=".png",W="decoration/tree/open.png",T="default",S="decoration/arrows/down-small.png",bJ="datechooser",bK="slidebar/button-backward",bL="radiobutton-checked-disabled",bM="checkbox-focused",bF="radiobutton-checked-hovered",bG="treevirtual-folder",bH="shadow-popup",bI="icon/16/mimetypes/office-document.png",bN="background-medium",bO="icon/32/places/folder-open.png",bn="icon/22/places/folder-open.png",bm="table",bl="decoration/arrows/up.png",bk="decoration/form/",bj="radiobutton-focused",bi="button-checked",bh="decoration/window/maximize-active-hovered.png",bg="keyboard-focus",br="menu-css",bq="decoration/cursors/",bP="slidebar",bQ="tooltip-error-arrow",bR="table-scroller-focus-indicator",bS="popup-css",bT="move-frame",bU="nodrop",bV="decoration/table/boolean-true.png",bW="-invalid-css",bX="menu",bY="app-header",cJ="row-layer",cI="text-inactive",cH="move",cG="decoration/window/restore-active-hovered.png",cN="border-separator",cM="shadow-window",cL="tree-folder",cK="window-pane-css",cR="right.png",cQ="checkbox-undetermined-hovered",dr="window-incl-statusbar-css",ds="tabview-page-button-bottom-inactive",dp="tooltip-error",dq="window-css",dm="window-statusbar",dn="button-hovered",dk="decoration/scrollbar/scrollbar-",dl="background-tip",dz="menubar-css",dA="scrollbar-slider-horizontal-disabled",dS="radiobutton-disabled",dR="button-pressed",dU="table-pane",dT="decoration/window/close-active.png",dW="native",dV="button-invalid-shadow",dY="decoration/window/minimize-active-hovered.png",dX="menubar",dP="icon/16/actions/dialog-cancel.png",dO="tabview-page-button-top-inactive",eG="tabview-page-button-left-inactive",eH="menu-slidebar",eI="toolbar-button-checked",eJ="decoration/tree/open-selected.png",eC="decoration/window/minimize-inactive.png",eD="icon/16/apps/office-calendar.png",eE="group-item-css",eF="group",eA="tabview-page-button-right-inactive",eB="decoration/window/minimize-active.png",k="decoration/window/restore-inactive.png",j="checkbox-checked-focused",i="splitpane",h="combobox/textfield",g="decoration/window/close-active-hovered.png",f="qx/icon/Tango/16/actions/window-close.png",e="checkbox-pressed",d="button-disabled",c="selected-dragover",b="tooltip-error-css",I="decoration/window/maximize-inactive.png",J="dragover",G="scrollarea",H="scrollbar-vertical",M="decoration/menu/checkbox-invert.gif",N="decoration/toolbar/toolbar-handle-knob.gif",K="icon/22/mimetypes/office-document.png",L="table-header-cell",P="button-checked-focused",Q="up.png",cV="best-fit",cP="pane-css",dd="decoration/tree/closed-selected.png",cY="qx.theme.modern.Appearance",cE="text-active",cC="checkbox-disabled",be="toolbar-button-hovered",cF="decoration/form/checked.png",bp="progressive-table-header",bo="decoration/table/select-column-order.png",cj="decoration/menu/radiobutton.gif",ck="decoration/arrows/forward.png",cl="decoration/table/descending.png",cm="decoration/form/undetermined.png",cn="tree-file",co="window-captionbar-active",cp="checkbox-checked-hovered",cq="scrollbar-slider-vertical",cg="toolbar",ch="alias",cD="decoration/window/restore-active.png",dc="decoration/table/boolean-false.png",db="icon/32/mimetypes/office-document.png",da="tabview-pane",dh="decoration/arrows/rewind.png",dg="top",df="icon/16/actions/dialog-ok.png",de="progressbar-background",cX="table-header-cell-hovered",cW="window-statusbar-css",O="window",bt="text-gray",bs="decoration/menu/radiobutton-invert.gif",cO="text-placeholder",bE="slider",cU="toolbar-css",cT="keep-align",cS="down.png",bd="groupitem-text",dj="tabview-page-button-top-active",R="icon/22/places/folder.png",bf="decoration/window/maximize-active.png",ca="checkbox-checked-pressed",cb="decoration/window/close-inactive.png",cc="tabview-page-button-left-active",cd="toolbar-part",ce="decoration/splitpane/knob-vertical.png",cf=".gif",dC="virtual-row-layer-background-odd",ci="table-statusbar",eb="progressive-table-header-cell-css",ea="window-captionbar-inactive",ed="copy",ec="decoration/arrows/down-invert.png",ef="decoration/menu/checkbox.gif",ee="window-caption-active-text",cr="decoration/splitpane/knob-horizontal.png",dQ="group-css",di="icon/32/places/folder.png",dF="virtual-row-layer-background-even",E="toolbar-separator",F="tabview-page-button-bottom-active",dx="decoration/arrows/up-small.png",dy="decoration/table/ascending.png",dv="decoration/arrows/up-invert.png",dw="small",dt="tabview-page-button-right-active",du="-disabled",a="scrollbar-horizontal",dB="progressbar",s="checkbox-undetermined-focused",r="progressive-table-header-cell",q="menu-separator",p="tabview-pane-css",o="pane",n="htmlarea-background",m="decoration/arrows/right-invert.png",l="left.png",t="icon/16/actions/view-refresh.png";
qx.Theme.define(cY,{appearances:{"widget":{},"root":{style:function(eU){return {backgroundColor:z,textColor:eS,font:T};
}},"label":{style:function(eV){return {textColor:eV.disabled?cz:undefined};
}},"move-frame":{style:function(eW){return {decorator:ei};
}},"resize-frame":bT,"dragdrop-cursor":{style:function(eX){var eY=bU;

if(eX.copy){eY=ed;
}else if(eX.move){eY=cH;
}else if(eX.alias){eY=ch;
}return {source:bq+eY+cf,position:B,offset:[2,16,2,6]};
}},"image":{style:function(fa){return {opacity:!fa.replacement&&fa.disabled?0.3:1};
}},"atom":{},"atom/label":cv,"atom/icon":cA,"popup":{style:function(fb){var fc=qx.core.Environment.get(ej);
return {decorator:fc?bS:ei,backgroundColor:cw,shadow:fc?undefined:bH};
}},"button-frame":{alias:en,style:function(fd){var fh,fg;
var fe=[3,9];

if(fd.checked&&fd.focused&&!fd.inner){fh=P;
fg=undefined;
fe=[1,7];
}else if(fd.disabled){fh=d;
fg=undefined;
}else if(fd.pressed){fh=dR;
fg=U;
}else if(fd.checked){fh=bi;
fg=undefined;
}else if(fd.hovered){fh=dn;
fg=U;
}else if(fd.focused&&!fd.inner){fh=bB;
fg=undefined;
fe=[1,7];
}else{fh=eh;
fg=undefined;
}var ff;
if(qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)){if(fd.invalid&&!fd.disabled){fh+=bW;
}else{fh+=em;
}}else{ff=fd.invalid&&!fd.disabled?dV:undefined;
fe=[2,8];
}return {decorator:fh,textColor:fg,shadow:ff,padding:fe,margin:[1,0]};
}},"button-frame/image":{style:function(fi){return {opacity:!fi.replacement&&fi.disabled?0.5:1};
}},"button":{alias:el,include:el,style:function(fj){return {center:true};
}},"hover-button":{alias:en,include:en,style:function(fk){var fl=fk.hovered?cx:undefined;

if(fl&&qx.core.Environment.get(ep)){fl+=em;
}return {decorator:fl,textColor:fk.hovered?cB:undefined};
}},"splitbutton":{},"splitbutton/button":eh,"splitbutton/arrow":{alias:eh,include:eh,style:function(fm,fn){return {icon:ct,padding:[fn.padding[0],fn.padding[1]-6],marginLeft:1};
}},"checkbox":{alias:en,style:function(fo){var fp=qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
var fr;

if(fp){if(fo.checked){fr=cF;
}else if(fo.undetermined){fr=cm;
}else{fr=dG;
}}else{if(fo.checked){if(fo.disabled){fr=bC;
}else if(fo.focused){fr=j;
}else if(fo.pressed){fr=ca;
}else if(fo.hovered){fr=cp;
}else{fr=bC;
}}else if(fo.undetermined){if(fo.disabled){fr=ba;
}else if(fo.focused){fr=s;
}else if(fo.hovered){fr=cQ;
}else{fr=ba;
}}else if(!fo.disabled){if(fo.focused){fr=bM;
}else if(fo.pressed){fr=e;
}else if(fo.hovered){fr=bx;
}}fr=fr||dD;
var fq=fo.invalid&&!fo.disabled?x:v;
fr=bk+fr+fq+X;
}return {icon:fr,minWidth:fp?14:undefined,gap:fp?8:6};
}},"checkbox/icon":{style:function(fs){var fu=qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);

if(!fu){return {opacity:!fs.replacement&&fs.disabled?0.3:1};
}var fv;

if(fs.disabled){fv=cC;
}else if(fs.focused){fv=bM;
}else if(fs.hovered){fv=bx;
}else{fv=dD;
}fv+=fs.invalid&&!fs.disabled?x:v;
var ft;
if(fs.undetermined){ft=[2,0];
}return {decorator:fv,padding:ft,width:12,height:10};
}},"radiobutton":{alias:en,style:function(fw){var fx=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej);
var fz;

if(fx){fz=dG;
}else{if(fw.checked&&fw.focused){fz=eT;
}else if(fw.checked&&fw.disabled){fz=bL;
}else if(fw.checked&&fw.hovered){fz=bF;
}else if(fw.checked){fz=bA;
}else if(fw.focused){fz=bj;
}else if(fw.hovered){fz=eM;
}else{fz=dJ;
}var fy=fw.invalid&&!fw.disabled?x:v;
fz=bk+fz+fy+X;
}return {icon:fz,gap:fx?8:6};
}},"radiobutton/icon":{style:function(fA){var fB=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej);

if(!fB){return {opacity:!fA.replacement&&fA.disabled?0.3:1};
}var fC;

if(fA.disabled&&!fA.checked){fC=dS;
}else if(fA.checked&&fA.focused){fC=eT;
}else if(fA.checked&&fA.disabled){fC=bL;
}else if(fA.checked&&fA.hovered){fC=bF;
}else if(fA.checked){fC=bA;
}else if(fA.focused){fC=bj;
}else if(fA.hovered){fC=eM;
}else{fC=dJ;
}fC+=fA.invalid&&!fA.disabled?x:v;
return {decorator:fC,width:12,height:10};
}},"textfield":{style:function(fD){var fI;
var fG=!!fD.focused;
var fH=!!fD.invalid;
var fE=!!fD.disabled;

if(fG&&fH&&!fE){fI=et;
}else if(fG&&!fH&&!fE){fI=ey;
}else if(fE){fI=ev;
}else if(!fG&&fH&&!fE){fI=ex;
}else{fI=eu;
}
if(qx.core.Environment.get(ep)){fI+=em;
}var fF;

if(fD.disabled){fF=cz;
}else if(fD.showingPlaceholder){fF=cO;
}else{fF=bc;
}return {decorator:fI,padding:[2,4,1],textColor:fF};
}},"textarea":{include:w,style:function(fJ){return {padding:4};
}},"spinner":{style:function(fK){var fO;
var fM=!!fK.focused;
var fN=!!fK.invalid;
var fL=!!fK.disabled;

if(fM&&fN&&!fL){fO=et;
}else if(fM&&!fN&&!fL){fO=ey;
}else if(fL){fO=ev;
}else if(!fM&&fN&&!fL){fO=ex;
}else{fO=eu;
}
if(qx.core.Environment.get(ep)){fO+=em;
}return {decorator:fO};
}},"spinner/textfield":{style:function(fP){return {marginRight:2,padding:[2,4,1],textColor:fP.disabled?cz:bc};
}},"spinner/upbutton":{alias:el,include:el,style:function(fQ,fR){return {icon:dx,padding:[fR.padding[0]-1,fR.padding[1]-5],shadow:undefined,margin:0};
}},"spinner/downbutton":{alias:el,include:el,style:function(fS,fT){return {icon:S,padding:[fT.padding[0]-1,fT.padding[1]-5],shadow:undefined,margin:0};
}},"datefield":dL,"datefield/button":{alias:eQ,include:eQ,style:function(fU){return {icon:eD,padding:[0,3],decorator:undefined};
}},"datefield/textfield":h,"datefield/list":{alias:bJ,include:bJ,style:function(fV){return {decorator:undefined};
}},"groupbox":{style:function(fW){return {legendPosition:dg};
}},"groupbox/legend":{alias:en,style:function(fX){return {padding:[1,0,1,4],textColor:fX.invalid?A:D,font:eg};
}},"groupbox/frame":{style:function(fY){var ga=qx.core.Environment.get(ek);
return {padding:ga?10:12,margin:ga?1:undefined,decorator:ga?dQ:eF};
}},"check-groupbox":cu,"check-groupbox/legend":{alias:dD,include:dD,style:function(gb){return {padding:[1,0,1,4],textColor:gb.invalid?A:D,font:eg};
}},"radio-groupbox":cu,"radio-groupbox/legend":{alias:dJ,include:dJ,style:function(gc){return {padding:[1,0,1,4],textColor:gc.invalid?A:D,font:eg};
}},"scrollarea":{style:function(gd){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(ge){return {backgroundColor:z};
}},"scrollarea/pane":eo,"scrollarea/scrollbar-x":dN,"scrollarea/scrollbar-y":dN,"scrollbar":{style:function(gf){if(gf[dW]){return {};
}var gg=qx.core.Environment.get(ep);
var gh=gf.horizontal?a:H;

if(gg){gh+=em;
}return {width:gf.horizontal?undefined:16,height:gf.horizontal?16:undefined,decorator:gh,padding:1};
}},"scrollbar/slider":{alias:bE,style:function(gi){return {padding:gi.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:el,style:function(gj){var gk=qx.core.Environment.get(ep);
var gl=gj.horizontal?bw:cq;

if(gj.disabled){gl+=du;
}
if(gk){gl+=em;
}return {decorator:gl,minHeight:gj.horizontal?undefined:9,minWidth:gj.horizontal?9:undefined,padding:undefined,margin:0};
}},"scrollbar/button":{alias:el,include:el,style:function(gm){var gp=dk;

if(gm.left){gp+=l;
}else if(gm.right){gp+=cR;
}else if(gm.up){gp+=Q;
}else{gp+=cS;
}var go=qx.core.Environment.get(ep);

if(gm.left||gm.right){var gn=gm.left?3:4;
return {padding:go?[3,0,3,gn]:[2,0,2,gn],icon:gp,width:15,height:14,margin:0};
}else{return {padding:go?3:[3,2],icon:gp,width:14,height:15,margin:0};
}}},"scrollbar/button-begin":eK,"scrollbar/button-end":eK,"slider":{style:function(gq){var gu;
var gs=!!gq.focused;
var gt=!!gq.invalid;
var gr=!!gq.disabled;

if(gs&&gt&&!gr){gu=et;
}else if(gs&&!gt&&!gr){gu=ey;
}else if(gr){gu=ev;
}else if(!gs&&gt&&!gr){gu=ex;
}else{gu=eu;
}
if(qx.core.Environment.get(ep)){gu+=em;
}return {decorator:gu};
}},"slider/knob":{include:el,style:function(gv){return {decorator:gv.disabled?dA:bw,shadow:undefined,height:14,width:14,padding:0};
}},"list":{alias:G,style:function(gw){var gA;
var gy=!!gw.focused;
var gz=!!gw.invalid;
var gx=!!gw.disabled;

if(gy&&gz&&!gx){gA=et;
}else if(gy&&!gz&&!gx){gA=ey;
}else if(gx){gA=ev;
}else if(!gy&&gz&&!gx){gA=ex;
}else{gA=eu;
}
if(qx.core.Environment.get(ep)){gA+=em;
}return {backgroundColor:cw,decorator:gA};
}},"list/pane":eo,"listitem":{alias:en,style:function(gB){var gC;

if(gB.dragover){gC=gB.selected?c:J;
}else{gC=gB.selected?cx:undefined;

if(gC&&qx.core.Environment.get(ep)){gC+=em;
}}return {padding:gB.dragover?[4,4,2,4]:4,textColor:gB.selected?cB:undefined,decorator:gC};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:el,include:el,style:function(gD){return {padding:5,center:true,icon:gD.vertical?ct:y};
}},"slidebar/button-backward":{alias:el,include:el,style:function(gE){return {padding:5,center:true,icon:gE.vertical?bl:bD};
}},"tabview":{style:function(gF){return {contentPadding:16};
}},"tabview/bar":{alias:bP,style:function(gG){var gH=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej)&&qx.core.Environment.get(ep);
var gI={marginBottom:gG.barTop?-1:0,marginTop:gG.barBottom?gH?-4:-7:0,marginLeft:gG.barRight?gH?-3:-5:0,marginRight:gG.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gG.barTop||gG.barBottom){gI.paddingLeft=5;
gI.paddingRight=7;
}else{gI.paddingTop=5;
gI.paddingBottom=7;
}return gI;
}},"tabview/bar/button-forward":{include:bb,alias:bb,style:function(gJ){if(gJ.barTop||gJ.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bK,alias:bK,style:function(gK){if(gK.barTop||gK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gL){var gM=qx.core.Environment.get(ep)&&qx.core.Environment.get(ek);
return {decorator:gM?p:da,minHeight:100,marginBottom:gL.barBottom?-1:0,marginTop:gL.barTop?-1:0,marginLeft:gL.barLeft?-1:0,marginRight:gL.barRight?-1:0};
}},"tabview-page":{alias:eo,include:eo,style:function(gN){var gO=qx.core.Environment.get(ep)&&qx.core.Environment.get(ek);
return {padding:gO?[4,3]:undefined};
}},"tabview-page/button":{alias:en,style:function(gP){var gW,gS=0;
var gV=0,gQ=0,gT=0,gU=0;
var gR=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej)&&qx.core.Environment.get(ep);

if(gP.checked){if(gP.barTop){gW=dj;
gS=gR?[5,11]:[6,14];
gT=gP.firstTab?0:-5;
gU=gP.lastTab?0:-5;
}else if(gP.barBottom){gW=F;
gS=gR?[5,11]:[6,14];
gT=gP.firstTab?0:-5;
gU=gP.lastTab?0:-5;
gV=3;
}else if(gP.barRight){gW=dt;
gS=gR?[5,10]:[6,13];
gV=gP.firstTab?0:-5;
gQ=gP.lastTab?0:-5;
gT=2;
}else{gW=cc;
gS=gR?[5,10]:[6,13];
gV=gP.firstTab?0:-5;
gQ=gP.lastTab?0:-5;
}}else{if(gP.barTop){gW=dO;
gS=gR?[3,9]:[4,10];
gV=4;
gT=gP.firstTab?5:1;
gU=1;
}else if(gP.barBottom){gW=ds;
gS=gR?[3,9]:[4,10];
gQ=4;
gT=gP.firstTab?5:1;
gU=1;
gV=3;
}else if(gP.barRight){gW=eA;
gS=gR?[3,9]:[4,10];
gU=5;
gV=gP.firstTab?5:1;
gQ=1;
gT=3;
}else{gW=eG;
gS=gR?[3,9]:[4,10];
gT=5;
gV=gP.firstTab?5:1;
gQ=1;
gU=1;
}}
if(gW&&gR){gW+=em;
}return {zIndex:gP.checked?10:5,decorator:gW,padding:gS,marginTop:gV,marginBottom:gQ,marginLeft:gT,marginRight:gU,textColor:gP.disabled?cz:gP.checked?cE:cI};
}},"tabview-page/button/label":{alias:cv,style:function(gX){return {padding:[0,1,0,1],margin:gX.focused?0:1,decorator:gX.focused?bg:undefined};
}},"tabview-page/button/close-button":{alias:en,style:function(gY){return {icon:f};
}},"toolbar":{style:function(ha){var hb=qx.core.Environment.get(ep);
return {decorator:hb?cU:cg,spacing:2};
}},"toolbar/part":{style:function(hc){return {decorator:cd,spacing:2};
}},"toolbar/part/container":{style:function(hd){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(he){return {source:N,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:en,style:function(hf){var hh;

if(hf.pressed||(hf.checked&&!hf.hovered)||(hf.checked&&hf.disabled)){hh=eI;
}else if(hf.hovered&&!hf.disabled){hh=be;
}var hg=qx.core.Environment.get(ep)&&qx.core.Environment.get(ek);

if(hg&&hh){hh+=em;
}return {marginTop:2,marginBottom:2,padding:(hf.pressed||hf.checked||hf.hovered)&&!hf.disabled||(hf.disabled&&hf.checked)?3:5,decorator:hh};
}},"toolbar-menubutton":{alias:eq,include:eq,style:function(hi){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:cA,include:cA,style:function(hj){return {source:S};
}},"toolbar-splitbutton":{style:function(hk){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eq,include:eq,style:function(hl){return {icon:ct,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eq,include:eq,style:function(hm){if(hm.pressed||hm.checked||(hm.hovered&&!hm.disabled)){var hn=1;
}else{var hn=3;
}return {padding:hn,icon:ct,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(ho){return {decorator:E,margin:7};
}},"tree":ez,"tree-item":{style:function(hp){var hq=hp.selected?cx:undefined;

if(hq&&qx.core.Environment.get(ep)){hq+=em;
}return {padding:[2,6],textColor:hp.selected?cB:undefined,decorator:hq};
}},"tree-item/icon":{include:cA,style:function(hr){return {paddingRight:5};
}},"tree-item/label":cv,"tree-item/open":{include:cA,style:function(hs){var ht;

if(hs.selected&&hs.opened){ht=eJ;
}else if(hs.selected&&!hs.opened){ht=dd;
}else if(hs.opened){ht=W;
}else{ht=by;
}return {padding:[0,5,0,2],source:ht};
}},"tree-folder":{include:dI,alias:dI,style:function(hu){var hw,hv;

if(hu.small){hw=hu.opened?eN:eO;
hv=eN;
}else if(hu.large){hw=hu.opened?bO:di;
hv=bO;
}else{hw=hu.opened?bn:R;
hv=bn;
}return {icon:hw,iconOpened:hv};
}},"tree-file":{include:dI,alias:dI,style:function(hx){return {icon:hx.small?bI:hx.large?db:K};
}},"treevirtual":bm,"treevirtual-folder":{style:function(hy){return {icon:hy.opened?eN:eO};
}},"treevirtual-file":{include:bG,alias:bG,style:function(hz){return {icon:bI};
}},"treevirtual-line":{style:function(hA){return {icon:dG};
}},"treevirtual-contract":{style:function(hB){return {icon:W,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(hC){return {icon:by,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":dK,"treevirtual-only-expand":u,"treevirtual-start-contract":dK,"treevirtual-start-expand":u,"treevirtual-end-contract":dK,"treevirtual-end-expand":u,"treevirtual-cross-contract":dK,"treevirtual-cross-expand":u,"treevirtual-end":{style:function(hD){return {icon:dG};
}},"treevirtual-cross":{style:function(hE){return {icon:dG};
}},"tooltip":{include:cs,style:function(hF){return {backgroundColor:dl,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":en,"tooltip-error":{include:dH,style:function(hG){var hH=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej);
return {textColor:cB,backgroundColor:undefined,placeMethod:eo,offset:[0,0,0,14],marginTop:-2,position:B,showTimeout:100,hideTimeout:10000,decorator:hH?b:dp,shadow:bQ,font:eg,padding:hH?3:undefined};
}},"tooltip-error/atom":en,"window":{style:function(hI){var hK=qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
var hL;
var hJ;

if(hK){if(hI.showStatusbar){hL=dr;
}else{hL=dq;
}}else{hJ=cM;
}return {decorator:hL,shadow:hJ,contentPadding:[10,10,10,10],margin:[0,5,5,0]};
}},"window/pane":{style:function(hM){var hN=qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
return {decorator:hN?cK:O};
}},"window/captionbar":{style:function(hO){var hP=qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
var hQ=hO.active?co:ea;

if(hP){hQ+=em;
}return {decorator:hQ,textColor:hO.active?ee:bt,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hR){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hS){return {alignY:cy,font:eg,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:en,style:function(hT){return {icon:hT.active?hT.hovered?dY:eB:eC,margin:[4,8,2,0]};
}},"window/restore-button":{alias:en,style:function(hU){return {icon:hU.active?hU.hovered?cG:cD:k,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:en,style:function(hV){return {icon:hV.active?hV.hovered?bh:bf:I,margin:[4,8,2,0]};
}},"window/close-button":{alias:en,style:function(hW){return {icon:hW.active?hW.hovered?g:dT:cb,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(hX){var hY=qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
return {padding:[2,6],decorator:hY?cW:dm,minHeight:18};
}},"window/statusbar-text":{style:function(ia){return {font:dw};
}},"iframe":{style:function(ib){return {decorator:ei};
}},"resizer":{style:function(ic){var id=qx.core.Environment.get(ej)&&qx.core.Environment.get(ek)&&qx.core.Environment.get(ep);
return {decorator:id?cP:o};
}},"splitpane":{style:function(ie){return {decorator:i};
}},"splitpane/splitter":{style:function(ig){return {width:ig.horizontal?3:undefined,height:ig.vertical?3:undefined,backgroundColor:V};
}},"splitpane/splitter/knob":{style:function(ih){return {source:ih.horizontal?cr:ce};
}},"splitpane/slider":{style:function(ii){return {width:ii.horizontal?3:undefined,height:ii.vertical?3:undefined,backgroundColor:V};
}},"selectbox":el,"selectbox/atom":en,"selectbox/popup":cs,"selectbox/list":{alias:ez},"selectbox/arrow":{include:cA,style:function(ij){return {source:ct,paddingLeft:5};
}},"datechooser":{style:function(ik){var ip;
var im=!!ik.focused;
var io=!!ik.invalid;
var il=!!ik.disabled;

if(im&&io&&!il){ip=et;
}else if(im&&!io&&!il){ip=ey;
}else if(il){ip=ev;
}else if(!im&&io&&!il){ip=ex;
}else{ip=eu;
}
if(qx.core.Environment.get(ep)){ip+=em;
}return {padding:2,decorator:ip,backgroundColor:cw};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:el,alias:el,style:function(iq){var ir={padding:[2,4],shadow:undefined};

if(iq.lastYear){ir.icon=dh;
ir.marginRight=1;
}else if(iq.lastMonth){ir.icon=bD;
}else if(iq.nextYear){ir.icon=ck;
ir.marginLeft=1;
}else if(iq.nextMonth){ir.icon=y;
}return ir;
}},"datechooser/last-year-button-tooltip":dH,"datechooser/last-month-button-tooltip":dH,"datechooser/next-year-button-tooltip":dH,"datechooser/next-month-button-tooltip":dH,"datechooser/last-year-button":dM,"datechooser/last-month-button":dM,"datechooser/next-month-button":dM,"datechooser/next-year-button":dM,"datechooser/month-year-label":{style:function(is){return {font:eg,textAlign:dE,textColor:is.disabled?cz:undefined};
}},"datechooser/date-pane":{style:function(it){return {textColor:it.disabled?cz:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(iu){return {textColor:iu.disabled?cz:iu.weekend?bu:undefined,textAlign:dE,paddingTop:2,backgroundColor:bN};
}},"datechooser/week":{style:function(iv){return {textAlign:dE,padding:[2,4],backgroundColor:bN};
}},"datechooser/day":{style:function(iw){var ix=iw.disabled?undefined:iw.selected?cx:undefined;

if(ix&&qx.core.Environment.get(ep)){ix+=em;
}return {textAlign:dE,decorator:ix,textColor:iw.disabled?cz:iw.selected?cB:iw.otherMonth?bu:undefined,font:iw.today?eg:undefined,padding:[2,4]};
}},"combobox":{style:function(iy){var iC;
var iA=!!iy.focused;
var iB=!!iy.invalid;
var iz=!!iy.disabled;

if(iA&&iB&&!iz){iC=et;
}else if(iA&&!iB&&!iz){iC=ey;
}else if(iz){iC=ev;
}else if(!iA&&iB&&!iz){iC=ex;
}else{iC=eu;
}
if(qx.core.Environment.get(ep)){iC+=em;
}return {decorator:iC};
}},"combobox/popup":cs,"combobox/list":{alias:ez},"combobox/button":{include:el,alias:el,style:function(iD,iE){var iF={icon:ct,padding:[iE.padding[0],iE.padding[1]-6],shadow:undefined,margin:undefined};

if(iD.selected){iF.decorator=bB;
}return iF;
}},"combobox/textfield":{include:w,style:function(iG){return {decorator:undefined};
}},"menu":{style:function(iH){var iI=qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
var iJ={decorator:iI?br:bX,shadow:iI?undefined:bH,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:iH.submenu||iH.contextmenu?cV:cT};

if(iH.submenu){iJ.position=B;
iJ.offset=[-2,-3];
}return iJ;
}},"menu/slidebar":eH,"menu-slidebar":eo,"menu-slidebar-button":{style:function(iK){var iL=iK.hovered?cx:undefined;

if(iL&&qx.core.Environment.get(ep)){iL+=em;
}return {decorator:iL,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:bv,style:function(iM){return {icon:iM.hovered?dv:bl};
}},"menu-slidebar/button-forward":{include:bv,style:function(iN){return {icon:iN.hovered?ec:ct};
}},"menu-separator":{style:function(iO){return {height:0,decorator:q,margin:[4,2]};
}},"menu-button":{alias:en,style:function(iP){var iQ=iP.selected?cx:undefined;

if(iQ&&qx.core.Environment.get(ep)){iQ+=em;
}return {decorator:iQ,textColor:iP.selected?cB:undefined,padding:[4,6]};
}},"menu-button/icon":{include:cA,style:function(iR){return {alignY:cy};
}},"menu-button/label":{include:cv,style:function(iS){return {alignY:cy,padding:1};
}},"menu-button/shortcut":{include:cv,style:function(iT){return {alignY:cy,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:cA,style:function(iU){return {source:iU.selected?m:y,alignY:cy};
}},"menu-checkbox":{alias:es,include:es,style:function(iV){return {icon:!iV.checked?undefined:iV.selected?M:ef};
}},"menu-radiobutton":{alias:es,include:es,style:function(iW){return {icon:!iW.checked?undefined:iW.selected?bs:cj};
}},"menubar":{style:function(iX){var iY=qx.core.Environment.get(ep);
return {decorator:iY?dz:dX};
}},"menubar-button":{alias:en,style:function(ja){var jb=(ja.pressed||ja.hovered)&&!ja.disabled?cx:undefined;

if(jb&&qx.core.Environment.get(ep)){jb+=em;
}return {decorator:jb,textColor:ja.pressed||ja.hovered?cB:undefined,padding:[3,8]};
}},"colorselector":eo,"colorselector/control-bar":eo,"colorselector/control-pane":eo,"colorselector/visual-pane":cu,"colorselector/preset-grid":eo,"colorselector/colorbucket":{style:function(jc){return {decorator:ei,width:16,height:16};
}},"colorselector/preset-field-set":cu,"colorselector/input-field-set":cu,"colorselector/preview-field-set":cu,"colorselector/hex-field-composite":eo,"colorselector/hex-field":w,"colorselector/rgb-spinner-composite":eo,"colorselector/rgb-spinner-red":er,"colorselector/rgb-spinner-green":er,"colorselector/rgb-spinner-blue":er,"colorselector/hsb-spinner-composite":eo,"colorselector/hsb-spinner-hue":er,"colorselector/hsb-spinner-saturation":er,"colorselector/hsb-spinner-brightness":er,"colorselector/preview-content-old":{style:function(jd){return {decorator:ei,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(je){return {decorator:ei,backgroundColor:cw,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(jf){return {decorator:ei,margin:5};
}},"colorselector/brightness-field":{style:function(jg){return {decorator:ei,margin:[5,7]};
}},"colorselector/hue-saturation-pane":eo,"colorselector/hue-saturation-handle":eo,"colorselector/brightness-pane":eo,"colorselector/brightness-handle":eo,"colorpopup":{alias:cs,include:cs,style:function(jh){return {padding:5,backgroundColor:z};
}},"colorpopup/field":{style:function(ji){return {decorator:ei,margin:2,width:14,height:14,backgroundColor:cw};
}},"colorpopup/selector-button":eh,"colorpopup/auto-button":eh,"colorpopup/preview-pane":cu,"colorpopup/current-preview":{style:function(jj){return {height:20,padding:4,marginLeft:4,decorator:ei,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(jk){return {height:20,padding:4,marginRight:4,decorator:ei,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:eh,include:eh,style:function(jl){return {icon:df};
}},"colorpopup/colorselector-cancelbutton":{alias:eh,include:eh,style:function(jm){return {icon:dP};
}},"table":{alias:eo,style:function(jn){return {decorator:bm};
}},"table/statusbar":{style:function(jo){return {decorator:ci,padding:[0,2]};
}},"table/column-button":{alias:el,style:function(jp){var jq=qx.core.Environment.get(ep);
return {decorator:jq?Y:bz,padding:3,icon:bo};
}},"table-column-reset-button":{include:es,alias:es,style:function(){return {icon:t};
}},"table-scroller":eo,"table-scroller/scrollbar-x":dN,"table-scroller/scrollbar-y":dN,"table-scroller/header":{style:function(jr){var js=qx.core.Environment.get(ep);
return {decorator:js?Y:bz};
}},"table-scroller/pane":{style:function(jt){return {backgroundColor:dU};
}},"table-scroller/focus-indicator":{style:function(ju){return {decorator:bR};
}},"table-scroller/resize-line":{style:function(jv){return {backgroundColor:cN,width:2};
}},"table-header-cell":{alias:en,style:function(jw){return {minWidth:13,minHeight:20,padding:jw.hovered?[3,4,2,4]:[3,4],decorator:jw.hovered?cX:L,sortIcon:jw.sorted?(jw.sortedAscending?dy:cl):undefined};
}},"table-header-cell/label":{style:function(jx){return {minWidth:0,alignY:cy,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(jy){return {alignY:cy,alignX:eR};
}},"table-header-cell/icon":{style:function(jz){return {minWidth:0,alignY:cy,paddingRight:5};
}},"table-editor-textfield":{include:w,style:function(jA){return {decorator:undefined,padding:[2,2],backgroundColor:cw};
}},"table-editor-selectbox":{include:C,alias:C,style:function(jB){return {padding:[0,2],backgroundColor:cw};
}},"table-editor-combobox":{include:dL,alias:dL,style:function(jC){return {decorator:undefined,backgroundColor:cw};
}},"progressive-table-header":{alias:eo,style:function(jD){return {decorator:bp};
}},"progressive-table-header-cell":{alias:en,style:function(jE){var jF=qx.core.Environment.get(ep);
return {minWidth:40,minHeight:25,paddingLeft:6,decorator:jF?eb:r};
}},"app-header":{style:function(jG){return {font:eg,textColor:cB,padding:[8,12],decorator:bY};
}},"app-header-label":cv,"virtual-list":ez,"virtual-list/row-layer":cJ,"row-layer":{style:function(jH){return {colorEven:dF,colorOdd:dC};
}},"group-item":{include:cv,alias:cv,style:function(jI){return {padding:4,decorator:qx.core.Environment.get(ep)?eE:eL,textColor:bd,font:eg};
}},"virtual-selectbox":C,"virtual-selectbox/dropdown":cs,"virtual-selectbox/dropdown/list":{alias:eP},"virtual-combobox":dL,"virtual-combobox/dropdown":cs,"virtual-combobox/dropdown/list":{alias:eP},"virtual-tree":ez,"virtual-tree-folder":cL,"virtual-tree-file":cn,"column-layer":eo,"cell":{style:function(jJ){return {textColor:jJ.selected?cB:eS,padding:[3,6],font:T};
}},"cell-string":ew,"cell-number":{include:ew,style:function(jK){return {textAlign:eR};
}},"cell-image":ew,"cell-boolean":{include:ew,style:function(jL){return {iconTrue:bV,iconFalse:dc};
}},"cell-atom":ew,"cell-date":ew,"cell-html":ew,"htmlarea":{"include":eo,style:function(jM){return {backgroundColor:n};
}},"progressbar":{style:function(jN){return {decorator:dB,padding:[1],backgroundColor:de};
}},"progressbar/progress":{style:function(jO){var jP=jO.disabled?eL:cx;

if(qx.core.Environment.get(ep)){jP+=em;
}return {decorator:jP};
}}}});
})();
(function(){var s="engine.name",r="relative",q="resize",p="mshtml",o="height",n="",m="px",l="position",k="engine.version",h="qx.ui.root.Inline",c="$$widget",g="opera",f="div",b="left",a="hidden",d="appear";
qx.Class.define(h,{extend:qx.ui.root.Abstract,include:[qx.ui.core.MLayoutHandling],construct:function(t,u,v){this.__vr=t;
t.style.overflow=a;
t.style.textAlign=b;
this.__vs=u||false;
this.__vt=v||false;
this.__vu();
qx.ui.root.Abstract.call(this);
this._setLayout(new qx.ui.layout.Basic());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
if((qx.core.Environment.get(s)==g)){this.setSelectable(true);
}if((qx.core.Environment.get(s)==p)){this.setKeepFocus(true);
}},members:{__vs:false,__vt:false,__vr:null,__vu:function(){if(this.__vs||this.__vt){var w=qx.bom.element.Dimension.getSize(this.__vr);

if(this.__vs&&w.width<1){throw new Error("The root element "+this.__vr+" of "+this+" needs a width when its width size should be used!");
}
if(this.__vt){if(w.height<1){throw new Error("The root element "+this.__vr+" of "+this+" needs a height when its height size should be used!");
}if(w.height>=1&&qx.bom.element.Style.get(this.__vr,o,3)==n){qx.bom.element.Style.set(this.__vr,o,w.height+m);
}}qx.event.Registration.addListener(this.__vr,q,this._onResize,this);
}},_createContainerElement:function(){var x=this.__vr;

if(this.__vs||this.__vt){var B=document.createElement(f);
x.appendChild(B);
if((qx.core.Environment.get(s)==p)&&qx.core.Environment.get(k)==6){var A=qx.dom.Node.getBodyElement(x);
var z;
var D;
var C=false;
var y=qx.dom.Hierarchy.getAncestors(x);

for(var i=0,j=y.length;i<j;i++){z=y[i];

if(z!=A){D=qx.bom.element.Style.get(z,l);

if(D==r){C=true;
break;
}}else{break;
}}
if(C){x.style.position=r;
}}}else{B=x;
}var E=new qx.html.Root(B);
B.style.position=r;
E.setAttribute(c,this.toHashCode());
qx.event.Timer.once(function(e){this.fireEvent(d);
},this,0);
return E;
},_onResize:function(e){var F=e.getData();

if((F.oldWidth!==F.width)&&this.__vs||(F.oldHeight!==F.height)&&this.__vt){qx.ui.core.queue.Layout.add(this);
}},_computeSizeHint:function(){var K=this.__vs;
var H=this.__vt;

if(!K||!H){var G=qx.ui.root.Abstract.prototype._computeSizeHint.call(this);
}else{G={};
}var L=qx.bom.element.Dimension;

if(K){var J=L.getContentWidth(this.__vr);
G.width=J;
G.minWidth=J;
G.maxWidth=J;
}
if(H){var I=L.getContentHeight(this.__vr);
G.height=I;
G.minHeight=I;
G.maxHeight=I;
}return G;
}},defer:function(M,N){qx.ui.core.MLayoutHandling.remap(N);
},destruct:function(){qx.event.Registration.removeListener(this.__vr,q,this._onResize,this);
this.__vr=null;
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__sW:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__sW;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__sW=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__sW=null;
}});
})();
(function(){var a="qx.application.Inline";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Page(document);
}}});
})();
(function(){var m="engine.name",l="div",k="resize",j="qx.ui.root.Page",i="mshtml",h="gecko",g="paddingLeft",f="$$widget",d="left",c="paddingTop",a="qxIsRootPage",b="absolute";
qx.Class.define(j,{extend:qx.ui.root.Abstract,construct:function(n){this.__vv=n;
qx.ui.root.Abstract.call(this);
this._setLayout(new qx.ui.layout.Basic());
this.setZIndex(10000);
qx.ui.core.queue.Layout.add(this);
this.addListener(k,this.__vx,this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
if((qx.core.Environment.get(m)==i)){this.setKeepFocus(true);
}},members:{__vw:null,__vv:null,_createContainerElement:function(){var p=this.__vv.createElement(l);
this.__vv.body.appendChild(p);
var o=new qx.html.Root(p);
o.setStyles({position:b,textAlign:d});
o.setAttribute(f,this.toHashCode());
if((qx.core.Environment.get(m)==h)){o.setAttribute(a,1);
}return o;
},_createContentElement:function(){return new qx.html.Element(l);
},_computeSizeHint:function(){var q=qx.bom.Document.getWidth(this._window);
var r=qx.bom.Document.getHeight(this._window);
return {minWidth:q,width:q,maxWidth:q,minHeight:r,height:r,maxHeight:r};
},__vx:function(e){this.getContainerElement().setStyles({width:0,height:0});
this.getContentElement().setStyles({width:0,height:0});
},supportsMaximize:function(){return false;
},_applyPadding:function(s,t,name){if(s&&(name==c||name==g)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,s,t,name);
},_applyDecorator:function(u,v){qx.ui.root.Abstract.prototype._applyDecorator.call(this,u,v);

if(!u){return;
}var w=this.getDecoratorElement().getInsets();

if(w.left||w.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__vv=null;
}});
})();
(function(){var f="modern-display",e="bold",d="window",c="showcase.page.theme.calc.theme.appearance.Modern",b="main",a="button";
qx.Theme.define(c,{appearances:{"modern-calculator":d,"modern-calculator-button":a,"modern-display":{style:function(g){return {decorator:b,height:40,padding:3,marginBottom:10};
}},"modern-display/label":{style:function(h){return {font:e,marginLeft:5};
}},"modern-display/memory":{style:function(i){return {marginLeft:5};
}},"modern-display/operation":{style:function(j){return {marginLeft:50};
}},"modern-calculator/display":f}});
})();
(function(){var j="solid",i="white",h="listitem",g="black",f="widget",e="preview-list/scrollbar-x/button",d="shadow-window",c="text-title",b="#F3FFD1",a="showcase/images/headerback.png",G="sans-serif",F="scale",E="showcase/images/contentbackground.gif",D="Trebuchet MS",C="#444444",B="#134275",A="pointer",z="legend",y="repeat-y",x="group",q="event.pointer",r="mshtml",o="text-label",p="Lucida Grande",m="engine.name",n="showcase/images/tag-hor.png",k="top",l="invalid",s="default",t="Verdana",v="label",u="showcase.theme.Appearance",w="atom";
qx.Theme.define(u,{extend:qx.theme.modern.Appearance,include:[showcase.page.theme.calc.theme.appearance.Black,showcase.page.theme.calc.theme.appearance.Modern],appearances:{"root":{style:function(H){return {backgroundColor:i,textColor:o,font:s};
}},"page-preview":{alias:h,include:h,style:function(I){return {iconPosition:k,padding:[-10,-6,8,-6],gap:-20,decorator:null,cursor:A};
}},"page-preview/label":{include:v,style:function(J){return {textColor:J.selected?C:b,padding:[6,15],height:35,decorator:J.selected?x:null,font:qx.bom.Font.fromConfig({size:20,family:[D,p,t,G]}),zIndex:50};
}},"preview-list":{style:function(K){return {backgroundColor:B,decorator:new qx.ui.decoration.Single().set({bottom:[1,j,g],backgroundImage:a,backgroundRepeat:F}),shadow:d,zIndex:111,padding:5};
}},"preview-list/scrollbar-x/slider":f,"preview-list/scrollbar-x":f,"preview-list/scrollbar-x/button":{style:function(L){return {width:0,height:0};
}},"preview-list/scrollbar-x/button-begin":e,"preview-list/scrollbar-x/button-end":e,"preview-list/scrollbar-x/slider/knob":{style:function(M){return {decorator:new qx.ui.decoration.HBox(n),opacity:qx.core.Environment.get(m)==r?1:(M.hovered?1:0.6),height:12};
}},"separator":{style:function(N){return {backgroundColor:g,decorator:new qx.ui.decoration.Single().set({top:[1,j,i],bottom:[1,j,i]}),height:7};
}},"stack":{style:function(O){return {marginTop:qx.core.Environment.get(q)?0:8};
}},"content-container":{style:function(P){return {padding:0};
}},"description":{style:function(Q){return {width:300,zIndex:122,shadow:d,padding:7,decorator:new qx.ui.decoration.Background().set({backgroundImage:E,backgroundRepeat:y})};
}},"groupbox/legend":{alias:w,style:function(R){return {padding:[1,0,1,4],textColor:R.invalid?l:c,font:z};
}}}});
})();
(function(){var a="qx.ui.layout.Basic";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var d,f,e,h,top;
for(var i=0,l=g.length;i<l;i++){d=g[i];
f=d.getSizeHint();
e=d.getLayoutProperties();
h=(e.left||0)+d.getMarginLeft();
top=(e.top||0)+d.getMarginTop();
d.renderLayout(h,top,f.width,f.height);
}},_computeSizeHint:function(){var p=this._getLayoutChildren();
var m,r,n;
var q=0,o=0;
var j,k;
for(var i=0,l=p.length;i<l;i++){m=p[i];
r=m.getSizeHint();
n=m.getLayoutProperties();
j=r.width+(n.left||0)+m.getMarginLeft()+m.getMarginRight();
k=r.height+(n.top||0)+m.getMarginTop()+m.getMarginBottom();

if(j>q){q=j;
}
if(k>o){o=k;
}}return {width:q,height:o};
}}});
})();
(function(){var j="Table",i="Column auto sizing",h="Table with 10000 rows and 50 columns",g="Filtered Table Model",f="in that the table data can be of any length (e.g. hundreds of thousands",e="The table is a very powerful widget. It is “virtual” ",d="Custom cell renderers like the boolean cell renderer can be configured.",c="Click on the column header to sort the column.",b="Table with a fixed first column",a="Windowed cell editor",D="Table selection modes",C="table",B="showcase.page.table.Page",A="Cell editors",z="Remote table model",y="Custom header renderers as shown in the “Explicit” column can be used.",x="Drag the column header to reorder.",w=" rendered. The data you currently see is fetched from a ",v="Conditional cell renderer",u="<a href='http://developer.yahoo.com/yql/' target='_blank'>YQL</a> ",q="Basic table",r=" of rows or more) yet only the rows which are actually being viewed are",o="Use the column drop-down menu in the upper right corner.",p="Drag the column header separator to resize the columns.",m="showcase/table/icon.png",n="service so it's always up to date.",k="Table events",l="Column context menus",s="showcase.page.table.Content",t="Resize the window to see the table resize.";
qx.Class.define(B,{extend:showcase.Page,construct:function(){showcase.Page.call(this);
this.set({name:j,part:C,icon:m,contentClass:s,description:showcase.page.DescriptionBuilder.build(j,this.__vy,this.__vz,this.__vA,this.__vB,this.__vC,this.__vD)});
},members:{__vy:e+f+r+w+u+n,__vz:{"Sorting":c,"Reordering":x,"Column Resizing":p,"Hide Columns":o,"Table Resize":t},__vA:{"Cell Renderer":d,"Header Renderer":y},__vB:{"pages/widget/table_remote_model.html":z},__vC:{"#table~Table.html":q,"#table~Table_Cell_Editor.html":A,"#table~Table_Conditional.html":v,"#table~Table_Context_Menu.html":l,"#table~Table_Events.html":k,"#table~Table_Filtered_Model.html":g,"#table~Table_Huge.html":h,"#table~Table_Meta_Columns.html":b,"#table~Table_Resize_Columns.html":i,"#table~Table_Selection.html":D,"#table~Table_Window_Editor.html":a},__vD:{"#qx.ui.table.Table":j}}});
})();
(function(){var p="Drag &amp; Drop",o="showcase.page.dragdrop.Page",n="You can also move items back to the shop.",m="right displays the shopping cart. The main idea of this demo is to ",l="Drag &amp; Drop with lists",k="showcase/dragdrop/icon.png",j="You can reorder both lists.",i="Drag&amp;Drop Cursor",h="Widget Drag Event",g="Drag & Drop",c="dragdrop",f="showcase.page.dragdrop.Content",e="illustrate the drag & drop feature.",b="The list on the left contains all available items while the list on the ",a="Try moving an item to the cart.",d="These two list widgets simulate a shopping system. ";
qx.Class.define(o,{extend:showcase.Page,construct:function(){showcase.Page.call(this);
this.set({name:g,part:c,icon:k,contentClass:f,description:showcase.page.DescriptionBuilder.build(p,this.__vE,this.__vF,this.__vG,this.__vH,this.__vI,this.__vJ)});
},members:{__vE:d+b+m+e,__vF:{"Drag":a,"Reorder":j,"Move":n},__vG:null,__vH:{"pages/gui_toolkit/ui_dragdrop.html":p},__vI:{"#ui~DragDrop.html":l},__vJ:{"#qx.ui.core.Widget~drag":h,"#qx.ui.core.DragDropCursor":i}}});
})();
(function(){var f="qx.event.type.Data",e="partLoadingError",d="qx.io.PartLoader",c="complete",b="partLoaded",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var g=this._loader=qx.Part.getInstance();
var self=this;
g.onpart=function(h){if(h.getReadyState()==c){self.fireDataEvent(b,h);
}else{self.fireDataEvent(e,h.getName());
}};
},events:{"partLoaded":f,"partLoadingError":f},statics:{require:function(i,j,self){this.getInstance().require(i,j,self);
}},members:{require:function(k,l,self){return this._loader.require(k,l,self);
},getPart:function(name){return this.getParts()[name];
},hasPart:function(name){return this.getPart(name)!==undefined;
},getParts:function(){return this._loader.getParts();
}}});
})();
(function(){var e="error",d="initialized",c="loading",b="qx.io.part.ClosurePart",a="complete";
qx.Bootstrap.define(b,{extend:qx.io.part.Part,construct:function(name,f,g){qx.io.part.Part.call(this,name,f,g);
},members:{__vK:0,preload:function(h,self){var j=0;
var l=this;

for(var i=0;i<this._packages.length;i++){var k=this._packages[i];

if(k.getReadyState()==d){k.loadClosure(function(m){j++;
l._loader.notifyPackageResult(m);
if(j>=l._packages.length&&h){h.call(self);
}},this._loader);
}}},load:function(n,self){if(this._checkCompleteLoading(n,self)){return;
}this._readyState=c;

if(n){this._appendPartListener(n,self,this);
}this.__vK=this._packages.length;

for(var i=0;i<this._packages.length;i++){var p=this._packages[i];
var o=p.getReadyState();
if(o==d){p.loadClosure(this._loader.notifyPackageResult,this._loader);
}if(o==d||o==c){this._loader.addPackageListener(p,qx.Bootstrap.bind(this._onPackageLoad,this,p));
}else if(o==e){this._markAsCompleted(e);
return;
}else{this.__vK--;
}}if(this.__vK<=0){this.__vL();
}},__vL:function(){for(var i=0;i<this._packages.length;i++){this._packages[i].execute();
}this._markAsCompleted(a);
},_onPackageLoad:function(q){if(this._readyState==e){return;
}if(q.getReadyState()==e){this._markAsCompleted(e);
return;
}this.__vK--;

if(this.__vK<=0){this.__vL();
}}}});
})();
(function(){var j="Internationalization",i="files, as defined by GNU <em>gettext</em> tools. Many ",h="showcase/i18n/icon.png",g="showcase.page.i18n.Page",f="i18n",e="Localization demo",d="the language. All labels on the page will be translated, including ",c=" locales in its user interface. qooxdoo has full translation support ",b="Locale Package",a="labels in standard qooxdoo widgets like the calendar.",z="keyboard shortcuts are localized.",y="open source tools can process those translation files.",x="Languages",w="changing the country code from <em>United States</em> to ",v='Internationalization (or \"I18N\" for short) is all about making',u="The first select box on the left lets you change the country code. ",t="showcase.page.i18n.Content",s="The command menu button in the lower left opens a popup menu. Even the ",r="and comprises locale information of virtually every country in the world.",q="<em>Great Britain</em>. You will see that e.g. the start of the week ",o="changes from Sunday to Monday.",p="Translation data is extracted into standard <em>.po</em> ",m="The country code defines things like date or number formats. Try ",n=" a system support different natural languages and",k="All widgets are designed in a way that allows for locale switching in the running application.",l="Hit one of the flag buttons on the top to change ";
qx.Class.define(g,{extend:showcase.Page,construct:function(){showcase.Page.call(this);
this.set({name:x,part:f,icon:h,contentClass:t,description:showcase.page.DescriptionBuilder.build(j,this.__vM,this.__vN,this.__vO,this.__vP,this.__vQ,this.__vR)});
},members:{__vM:v+n+c+r,__vN:{"Change the language":l+d+a,"Change the country":u+m+w+q+o,"Open the command menu":s+z},__vO:{"Standards based translation":p+i+y,"CLDR":"Localisation data like date and time formats are taken from the "+"<a href='http://cldr.unicode.org/'>Unicode Common Locale Data Repository</a> (CLDR). This "+"guarantees that qooxdoo uses the standardized data for even the smallest "+"countries.","Live locale switching":k},__vP:{"pages/development/internationalization.html":j},__vQ:{"#showcase~Localization.html":e},__vR:{"#qx.locale":b}}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(e){return arguments.length==1;
}}});
})();
(function(){var f="qx.ui.core.MSingleSelectionHandling",d="changeSelection",c="changeSelected",b="__ms",a="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":a},members:{__ms:null,getSelection:function(){var g=this.__mt().getSelected();

if(g){return [g];
}else{return [];
}},setSelection:function(h){switch(h.length){case 0:this.resetSelection();
break;
case 1:this.__mt().setSelected(h[0]);
break;
default:throw new Error("Could only select one item, but the selection"+" array contains "+h.length+" items!");
}},resetSelection:function(){this.__mt().resetSelected();
},isSelected:function(i){return this.__mt().isSelected(i);
},isSelectionEmpty:function(){return this.__mt().isSelectionEmpty();
},getSelectables:function(j){return this.__mt().getSelectables(j);
},_onChangeSelected:function(e){var l=e.getData();
var k=e.getOldData();
l==null?l=[]:l=[l];
k==null?k=[]:k=[k];
this.fireDataEvent(d,l,k);
},__mt:function(){if(this.__ms==null){var m=this;
this.__ms=new qx.ui.core.SingleSelectionManager({getItems:function(){return m._getItems();
},isItemSelectable:function(n){if(m._isItemSelectable){return m._isItemSelectable(n);
}else{return n.isVisible();
}}});
this.__ms.addListener(c,this._onChangeSelected,this);
}this.__ms.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__ms;
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var d="_applyDynamic",c="changeSelection",b="Boolean",a="qx.ui.container.Stack";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:[qx.ui.core.MSingleSelectionHandling,qx.ui.core.MChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(c,this.__sp,this);
},properties:{dynamic:{check:b,init:false,apply:d}},members:{_applyDynamic:function(f){var h=this._getChildren();
var g=this.getSelection()[0];
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];

if(j!=g){if(f){h[i].exclude();
}else{h[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(k){return true;
},__sp:function(e){var m=e.getOldData()[0];
var n=e.getData()[0];

if(m){if(this.isDynamic()){m.exclude();
}else{m.hide();
}}
if(n){n.show();
}},_afterAddChild:function(o){var p=this.getSelection()[0];

if(!p){this.setSelection([o]);
}else if(p!==o){if(this.isDynamic()){o.exclude();
}else{o.hide();
}}},_afterRemoveChild:function(q){if(this.getSelection()[0]===q){var r=this._getChildren()[0];

if(r){this.setSelection([r]);
}else{this.resetSelection();
}}},previous:function(){var u=this.getSelection()[0];
var s=this._indexOf(u)-1;
var v=this._getChildren();

if(s<0){s=v.length-1;
}var t=v[s];
this.setSelection([t]);
},next:function(){var x=this.getSelection()[0];
var w=this._indexOf(x)+1;
var y=this._getChildren();
var z=y[w]||y[0];
this.setSelection([z]);
}}});
})();
(function(){var i="-l",h="horizontal",g="qx.ui.decoration.AbstractBox",f="set",e="_applyBaseImage",d="-b",c="-t",b="String",a="-r";
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,implement:[qx.ui.decoration.IDecorator],construct:function(j,k,l){qx.ui.decoration.Abstract.call(this);
this._setOrientation(l);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__vS=new qx.ui.decoration.css3.BorderImage();

if(j){this.__vT(j,l);
}if(k!=null){this.__vS.setInsets(k);
}}else{this.__vS=new qx.ui.decoration.BoxDiv(j,k,l);
}},properties:{baseImage:{check:b,nullable:true,apply:e}},members:{__vS:null,_isHorizontal:null,_setOrientation:function(m){this._isHorizontal=m==h;
},getMarkup:function(){return this.__vS.getMarkup();
},resize:function(n,o,p){this.__vS.resize(n,o,p);
},tint:function(q,r){},getInsets:function(){return this.__vS.getInsets();
},_applyInsets:function(s,t,name){var u=f+qx.lang.String.firstUp(name);
this.__vS[u](s);
},_applyBaseImage:function(v,w){if(this.__vS instanceof qx.ui.decoration.BoxDiv){this.__vS.setBaseImage(v);
}else{this.__vT(v);
}},__vT:function(x){this.__vS.setBorderImage(x);
var D=qx.util.AliasManager.getInstance().resolve(x);
var E=/(.*)(\.[a-z]+)$/.exec(D);
var B=E[1];
var C=E[2];
var A=qx.util.ResourceManager.getInstance();

if(this._isHorizontal){var G=A.getImageWidth(B+i+C);
var y=A.getImageWidth(B+a+C);
this.__vS.setSlice([0,y,0,G]);
}else{var z=A.getImageHeight(B+d+C);
var F=A.getImageHeight(B+c+C);
this.__vS.setSlice([F,0,z,0]);
}}},destruct:function(){this.__vU=this.__vV=this.__vW=null;
}});
})();
(function(){var b="horizontal",a="qx.ui.decoration.HBox";
qx.Class.define(a,{extend:qx.ui.decoration.AbstractBox,construct:function(c,d){qx.ui.decoration.AbstractBox.call(this,c,d,b);
}});
})();
(function(){var t="os.version",s="os.name",r="win",q="7",p="vista",o="osx",n="Liberation Sans",m="Tahoma",l="sans-serif",k="Arial",d="Lucida Grande",j="Candara",g="Segoe UI",c="Consolas",b="monospace",f="Courier New",e="Lucida Console",h="Monaco",a="qx.theme.modern.Font",i="DejaVu Sans Mono";
qx.Theme.define(a,{fonts:{"default":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"bold":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l],bold:true},"small":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?11:10,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"monospace":{size:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[e,h]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[c]:[c,i,f,b]}}});
})();
(function(){var b="qx.fx.queue.Queue",a="Number";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__vX=[];
},properties:{limit:{init:Infinity,check:a}},members:{__vY:null,__vX:null,add:function(c){var d=new Date().getTime();
c._startOn+=d;
c._finishOn+=d;

if(this.__vX.length<this.getLimit()){this.__vX.push(c);
}else{c.resetState();
}
if(!this.__vY){this.__vY=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(e){qx.lang.Array.remove(this.__vX,e);

if(this.__vX.length==0){window.clearInterval(this.__vY);
delete this.__vY;
}},loop:function(){var f=new Date().getTime();

for(var i=0,g=this.__vX.length;i<g;i++){this.__vX[i]&&this.__vX[i].loop(f);
}}},destruct:function(){this.__vX=null;
}});
})();
(function(){var e="__default",d="qx.fx.queue.Manager",c="__wa",b="singleton",a="object";
qx.Class.define(d,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);
this.__wa={};
},members:{__wa:null,getQueue:function(f){if(typeof (this.__wa[f])==a){return this.__wa[f];
}else{return this.__wa[f]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(e);
}},destruct:function(){this._disposeMap(c);
}});
})();
(function(){var q="success",p="engine.name",o="fail",n="complete",m="error",l="load",k="loaded",j="mshtml",i="head",h="readystatechange",c="webkit",g="script",f="opera",b="qx.io.ScriptLoader",a="text/javascript",d="abort";
qx.Bootstrap.define(b,{construct:function(){this.__wb=qx.Bootstrap.bind(this.__wi,this);
this.__wc=document.createElement(g);
this.__wd=15;
},members:{__we:null,__wf:null,__wg:null,__wh:null,__wd:0,__wb:null,__wc:null,load:function(r,s,t){if(this.__we){throw new Error("Another request is still running!");
}this.__we=true;
this.__wf=false;
var u=document.getElementsByTagName(i)[0];
var v=this.__wc;
this.__wg=s||null;
this.__wh=t||window;
v.type=a;
v.onerror=v.onload=v.onreadystatechange=this.__wb;
var self=this;

if(qx.core.Environment.get(p)===f&&this.getTimeout()>0){setTimeout(function(){self.dispose(o);
},this.getTimeout()*1000);
}v.src=r;
setTimeout(function(){u.appendChild(v);
},0);
},abort:function(){if(this.__we){this.dispose(d);
}},dispose:function(status){if(this.__wf){return;
}this.__wf=true;
var x=this.__wc;
x.onerror=x.onload=x.onreadystatechange=null;
var w=x.parentNode;

if(w){w.removeChild(x);
}delete this.__we;
if(this.__wg){if(qx.core.Environment.get(p)==j||qx.core.Environment.get(p)==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__wg.call(self.__wh,status);
delete self.__wg;
}),0);
}else{this.__wg.call(this.__wh,status);
delete this.__wg;
}}},setTimeout:function(y){this.__wd=y;
},getTimeout:function(){return this.__wd;
},__wi:qx.event.GlobalError.observeMethod(qx.core.Environment.select(p,{"mshtml":function(e){var z=this.__wc.readyState;

if(z==k){this.dispose(q);
}else if(z==n){this.dispose(q);
}else{return;
}},"opera":function(e){if(qx.Bootstrap.isString(e)||e.type===m){return this.dispose(o);
}else if(e.type===l){return this.dispose(q);
}else{return;
}},"default":function(e){if(qx.Bootstrap.isString(e)||e.type===m){this.dispose(o);
}else if(e.type===l){this.dispose(q);
}else if(e.type===h&&(e.target.readyState===n||e.target.readyState===k)){this.dispose(q);
}else{return;
}}}))}});
})();
(function(){var c="function",b="qx.Part",a="complete";
qx.Bootstrap.define(b,{construct:function(d){var m=d.parts[d.boot][0];
this.__wj=d;
this.__wk={};
this.__wl={};
this.__wm={};
this.__wn=[];
var n=this.__wp();

for(var i=0;i<n.length;i++){var e=d.packageHashes[i];
var j=new qx.io.part.Package(n[i],e,i==m);
this.__wn.push(j);
}this.__wo={};
var h=d.parts;
var f=d.closureParts||{};

for(var name in h){var g=h[name];
var l=[];

for(var i=0;i<g.length;i++){l.push(this.__wn[g[i]]);
}if(f[name]){var k=new qx.io.part.ClosurePart(name,l,this);
}else{var k=new qx.io.part.Part(name,l,this);
}this.__wo[name]=k;
}},statics:{TIMEOUT:7500,getInstance:function(){if(!this.$$instance){this.$$instance=new this(qx.$$loader);
}return this.$$instance;
},require:function(o,p,self){this.getInstance().require(o,p,self);
},preload:function(q){this.getInstance().preload(q);
},$$notifyLoad:function(r,s){this.getInstance().saveClosure(r,s);
}},members:{__wj:null,__wn:null,__wo:null,__wm:null,addToPackage:function(t){this.__wn.push(t);
},addClosurePackageListener:function(u,v){var w=u.getId();

if(!this.__wm[w]){this.__wm[w]=[];
}this.__wm[w].push(v);
},saveClosure:function(x,y){var A;

for(var i=0;i<this.__wn.length;i++){if(this.__wn[i].getId()==x){A=this.__wn[i];
break;
}}if(!A){throw new Error("Package not available: "+x);
}A.saveClosure(y);
var z=this.__wm[x];

if(!z){return;
}
for(var i=0;i<z.length;i++){z[i](a,x);
}this.__wm[x]=[];
},getParts:function(){return this.__wo;
},require:function(B,C,self){var C=C||function(){};
var self=self||window;

if(qx.Bootstrap.isString(B)){B=[B];
}var F=[];

for(var i=0;i<B.length;i++){F.push(this.__wo[B[i]]);
}var E=0;
var D=function(){E+=1;
if(E>=F.length){var G=[];

for(var i=0;i<F.length;i++){G.push(F[i].getReadyState());
}C.call(self,G);
}};

for(var i=0;i<F.length;i++){F[i].load(D,this);
}},preload:function(H,I,self){if(qx.Bootstrap.isString(H)){H=[H];
}var J=0;

for(var i=0;i<H.length;i++){this.__wo[H[i]].preload(function(){J++;

if(J>=H.length){var K=[];

for(var i=0;i<H.length;i++){K.push(this.__wo[H[i]].getReadyState());
}
if(I){I.call(self,K);
}}},this);
}},__wp:function(){var L=this.__wj.uris;
var M=[];

for(var i=0;i<L.length;i++){M.push(this.__wq(L[i]));
}return M;
},__wq:qx.$$loader.decodeUris,__wk:null,addPartListener:function(N,O){var P=N.getName();

if(!this.__wk[P]){this.__wk[P]=[];
}this.__wk[P].push(O);
},onpart:null,notifyPartResult:function(Q){var S=Q.getName();
var R=this.__wk[S];

if(R){for(var i=0;i<R.length;i++){R[i](Q.getReadyState());
}this.__wk[S]=[];
}
if(typeof this.onpart==c){this.onpart(Q);
}},__wl:null,addPackageListener:function(T,U){var V=T.getId();

if(!this.__wl[V]){this.__wl[V]=[];
}this.__wl[V].push(U);
},notifyPackageResult:function(W){var Y=W.getId();
var X=this.__wl[Y];

if(!X){return;
}
for(var i=0;i<X.length;i++){X[i](W.getReadyState());
}this.__wl[Y]=[];
}}});
})();
(function(){var c="Number",b="static",a="qx.fx.Transition";
qx.Class.define(a,{type:b,statics:{get:function(d){return qx.fx.Transition[d]||false;
},linear:function(e){return e;
},easeInQuad:function(f){return Math.pow(2,10*(f-1));
},easeOutQuad:function(g){return (-Math.pow(2,-10*g)+1);
},sinodial:function(h){return (-Math.cos(h*Math.PI)/2)+0.5;
},reverse:function(i){return 1-i;
},flicker:function(j){var j=((-Math.cos(j*Math.PI)/4)+0.75)+Math.random()/4;
return j>1?1:j;
},wobble:function(k){return (-Math.cos(k*Math.PI*(9*k))/2)+0.5;
},pulse:function(l,m){m=(typeof (m)==c)?m:5;
return (Math.round((l%(1/m))*m)==0?Math.floor((l*m*2)-(l*m*2)):1-Math.floor((l*m*2)-(l*m*2)));
},spring:function(n){return 1-(Math.cos(n*4.5*Math.PI)*Math.exp(-n*6));
},none:function(o){return 0;
},full:function(p){return 1;
}}});
})();
(function(){var j="Data Binding",i="Form Binding Demo",h="The data is loaded from twitter in real time via JSONP.",g="binding. The demo fetches the data and binds the result to the list. ",f="JSONP Data Store",e="showcase/databinding/icon.png",d="Single Value Binding Demo",c="Data Binding Package",b="Clicking a tweet in the list shows the details.",a="showcase.page.databinding.Content",A="Enter your twitter username in the text field and press \"Show\" to see your recent tweets.",z="showcase.page.databinding.Page",y="Flickr Foto Search",x="Controller",w="Twitter offers a REST / JSONP API, making it a perfect match for data ",v="Data Stores",u="data",t="The twitter demo illustrates the use of data binding. ",s="Tree Binding Demo",r="Data Binding Concepts",p="Object Controller",q="A binding connects the model to the list view.",n="List Binding Demo",o="List Controller",l="Clicking on a tweet will invoke a second binding which displays the ",m="selected tweet in the detail view right beside the list.",k="Fundamental Layer";
qx.Class.define(z,{extend:showcase.Page,construct:function(){showcase.Page.call(this);
this.set({name:j,part:u,icon:e,contentClass:a,description:showcase.page.DescriptionBuilder.build(j,this.__wr,this.__ws,this.__wt,this.__wu,this.__wv,this.__ww)});
},members:{__wr:t+w+g+l+m,__ws:{"Detail View":b,"Change Tweet":A},__wt:{"Loading Data":h,"Binding":q},__wu:{"pages/data_binding/data_binding.html":r,"pages/data_binding/single_value_binding.html":k,"pages/data_binding/controller.html":x,"pages/data_binding/stores.html":v},__wv:{"#data~SingleValueBinding.html":d,"#data~ListControllerWith3Widgets.html":n,"#data~TreeController.html":s,"#data~FormController.html":i,"#data~Flickr.html":y},__ww:{"#qx.data":c,"#qx.data.store.Jsonp":f,"#qx.data.controller.List":o,"#qx.data.controller.Object":p}}});
})();
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="widget",i="__sX",h="qx.ui.tooltip.ToolTip",g="__tb",c="_applyCurrent",f="qx.ui.tooltip.Manager",d="__sY",b="tooltip-error",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__ti,this,true);
this.__sX=new qx.event.Timer();
this.__sX.addListener(n,this.__tf,this);
this.__sY=new qx.event.Timer();
this.__sY.addListener(n,this.__tg,this);
this.__ta={left:0,top:0};
},properties:{current:{check:h,nullable:true,apply:c},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__ta:null,__sY:null,__sX:null,__tb:null,__tc:null,__td:function(){if(!this.__tb){this.__tb=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__tb;
},__te:function(){if(!this.__tc){this.__tc=new qx.ui.tooltip.ToolTip().set({appearance:b});
this.__tc.syncAppearance();
}return this.__tc;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__sX.stop();
this.__sY.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__sX.startWith(q.getShowTimeout());
t.addListener(s,l,this.__tj,this,true);
t.addListener(s,o,this.__tk,this,true);
t.addListener(s,k,this.__th,this,true);
}else{t.removeListener(s,l,this.__tj,this,true);
t.removeListener(s,o,this.__tk,this,true);
t.removeListener(s,k,this.__th,this,true);
}},__tf:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__sY.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==j){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__ta);
}u.show();
}this.__sX.stop();
},__tg:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__sY.stop();
this.resetCurrent();
},__th:function(e){var w=this.__ta;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__ti:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!z){return;
}var A,B,y,x;
while(z!=null){A=z.getToolTip();
B=z.getToolTipText()||null;
y=z.getToolTipIcon()||null;

if(qx.Class.hasInterface(z.constructor,qx.ui.form.IForm)&&!z.isValid()){x=z.getInvalidMessage();
}
if(A||B||y||x){break;
}z=z.getLayoutParent();
}if(!z||
!z.getEnabled()||
z.isBlockToolTip()||
(!x&&!this.getShowToolTips())||(x&&!this.getShowInvalidToolTips())){return;
}
if(x){A=this.__te().set({label:x});
}
if(!A){A=this.__td().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__tj:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__tk:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__ti,this,true);
this._disposeObjects(i,d,g);
this.__ta=null;
}});
})();
(function(){var u="Tree",t="Tree folders can display additional information in separate columns.",s="Configurable Tree",r="The two tree views display some hierarchical data ",q="Each tree item has a configurable label and icon.",p="showcase.page.tree.Page",o="Select multiple items, e.g. by holding the Shift key.",n="Tree filled with Data from a JSON file.",m="including folders, icons and labels. The tree in the right window has ",l="Tree using Data Binding",e="Try expanding some folders by using the arrow icon or double clicking.",k="Resize the window to make the tree scrollbars appear.",h="Tree using Data Binding with configuration",c="Tree displays scrollbars if necessary.",b="some additional infomation attached to each item.",g="showcase.page.tree.Content",f="showcase/tree/icon.png",i="Tree Package",a="The Tree Widget",j="Multi Column Tree",d="tree";
qx.Class.define(p,{extend:showcase.Page,construct:function(){showcase.Page.call(this);
this.set({name:u,part:d,icon:f,contentClass:g,description:showcase.page.DescriptionBuilder.build(u,this.__wx,this.__wy,this.__wz,this.__wA,this.__wB,this.__wC)});
},members:{__wx:r+m+b,__wy:{"Expand":e,"Resize":k,"Selection":o},__wz:{"Configurable":q,"Scrolling":c,"Multi Columns":t},__wA:{"pages/widget/tree.html":a},__wB:{"#widget~Tree.html":s,"#widget~Tree_Columns.html":j,"#data~TreeController.html":l,"#data~JsonToTree.html":n,"#data~ExtendedTree.html":h},__wC:{"#qx.ui.tree":i}}});
})();
(function(){var j="qx.version",i="",h="http://demo.qooxdoo.org/",g="<ul>",f="</ul>",e="<h1>",d="</div>",c="<h2>Features</h2>",b="<li><a href='",a="</h1>",A="</strong>: ",z="</a></li>",y="<h2>Try This</h2>",x="<h2>Api</h2>",w="<h2>Documentation</h2>",v="http://manual.qooxdoo.org/",u="/",t="<h2>Demos</h2>",s="showcase.page.DescriptionBuilder",r="/demobrowser/",p="' target='_blank'>",q="<div id='description'>",n="/apiviewer/",o="<p>",l="</p>",m="</li>",k="<li><strong>";
qx.Class.define(s,{statics:{_demoPrefix:h+qx.core.Environment.get(j)+r,_apiPrefix:h+qx.core.Environment.get(j)+n,_manualPrefix:v+qx.core.Environment.get(j)+u,build:function(B,C,D,E,F,G,H){var I=[];
I.push(q,e,B,a,o,C,l);

if(D){I.push(y,this.__wE(D));
}
if(E){I.push(c,this.__wE(E));
}
if(F){I.push(w,this.__wD(this._manualPrefix,F));
}
if(G){I.push(t,this.__wD(this._demoPrefix,G));
}
if(H){I.push(x,this.__wD(this._apiPrefix,H));
}I.push(d);
return I.join(i);
},__wD:function(J,K){var L=[g];

for(var M in K){L.push(b,J,M,p,K[M],z);
}L.push(f);
return L.join(i);
},__wE:function(N){var O=[g];

for(var P in N){O.push(k,P,A,N[P],m);
}O.push(f);
return O.join(i);
}}});
})();
(function(){var m="os.version",l="os.name",k="win",j="7",i="vista",h="Liberation Sans",g="Tahoma",f="Lucida Grande",e="osx",d="Candara",a="Segoe UI",c="showcase.theme.Font",b="Arial";
qx.Theme.define(c,{extend:qx.theme.modern.Font,fonts:{"legend":{size:(qx.core.Environment.get(l)==k&&(qx.core.Environment.get(m)==j||qx.core.Environment.get(m)==i))?15:14,lineHeight:1.4,family:qx.core.Environment.get(l)==e?[f]:(qx.core.Environment.get(l)==k&&(qx.core.Environment.get(m)==j||qx.core.Environment.get(m)==i))?[a,d]:[g,h,b],bold:true}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var a="showcase.theme.Decoration";
qx.Theme.define(a,{extend:qx.theme.modern.Decoration,include:[showcase.page.theme.calc.theme.Decoration],decorations:{}});
})();
(function(){var a="showcase.theme.Theme";
qx.Theme.define(a,{meta:{color:showcase.theme.Color,decoration:showcase.theme.Decoration,font:showcase.theme.Font,icon:qx.theme.icon.Tango,appearance:showcase.theme.Appearance}});
})();
(function(){var o="one",n="single",m="selected",k="additive",j="multi",h="os.name",g="osx",f="under",d="PageUp",c="Left",O="lead",N="Down",M="Up",L="Boolean",K="PageDown",J="anchor",I="End",H="Home",G="Right",F="right",v="click",w="above",t="left",u="Escape",r="A",s="Space",p="_applyMode",q="interval",x="__kb",y="changeSelection",A="qx.event.type.Data",z="quick",C="key",B="abstract",E="drag",D="qx.ui.core.selection.Abstract";
qx.Class.define(D,{type:B,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jX={};
},events:{"changeSelection":A},properties:{mode:{check:[n,j,k,o],init:n,apply:p},drag:{check:L,init:false},quick:{check:L,init:false}},members:{__jY:0,__ka:0,__kb:null,__kc:null,__kd:null,__ke:null,__kf:null,__kg:null,__kh:null,__ki:null,__kj:null,__kk:null,__kl:null,__km:null,__kn:null,__ko:null,__kp:null,__jX:null,__kq:null,__kr:null,_userInteraction:false,__ks:null,getSelectionContext:function(){return this.__ko;
},selectAll:function(){var P=this.getMode();

if(P==n||P==o){throw new Error("Can not select all items in selection mode: "+P);
}this._selectAllItems();
this._fireChange();
},selectItem:function(Q){this._setSelectedItem(Q);
var R=this.getMode();

if(R!==n&&R!==o){this._setLeadItem(Q);
this._setAnchorItem(Q);
}this._scrollItemIntoView(Q);
this._fireChange();
},addItem:function(S){var T=this.getMode();

if(T===n||T===o){this._setSelectedItem(S);
}else{if(this._getAnchorItem()==null){this._setAnchorItem(S);
}this._setLeadItem(S);
this._addToSelection(S);
}this._scrollItemIntoView(S);
this._fireChange();
},removeItem:function(U){this._removeFromSelection(U);

if(this.getMode()===o&&this.isSelectionEmpty()){var V=this._getFirstSelectable();

if(V){this.addItem(V);
}if(V==U){return;
}}
if(this.getLeadItem()==U){this._setLeadItem(null);
}
if(this._getAnchorItem()==U){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(W,X){var Y=this.getMode();

if(Y==n||Y==o){throw new Error("Can not select multiple items in selection mode: "+Y);
}this._selectItemRange(W,X);
this._setAnchorItem(W);
this._setLeadItem(X);
this._scrollItemIntoView(X);
this._fireChange();
},clearSelection:function(){if(this.getMode()==o){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(ba){var bb=this.getMode();

if(bb==o||bb===n){if(ba.length>1){throw new Error("Could not select more than one items in mode: "+bb+"!");
}
if(ba.length==1){this.selectItem(ba[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(ba);
}},getSelectedItem:function(){var bc=this.getMode();

if(bc===n||bc===o){var bd=this._getSelectedItem();
return bd!=undefined?bd:null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__jX);
},getSortedSelection:function(){var bf=this.getSelectables();
var be=qx.lang.Object.getValues(this.__jX);
be.sort(function(a,b){return bf.indexOf(a)-bf.indexOf(b);
});
return be;
},isItemSelected:function(bg){var bh=this._selectableToHashCode(bg);
return this.__jX[bh]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__jX);
},invertSelection:function(){var bj=this.getMode();

if(bj===n||bj===o){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bi=this.getSelectables();

for(var i=0;i<bi.length;i++){this._toggleInSelection(bi[i]);
}this._fireChange();
},_setLeadItem:function(bk){var bl=this.__kp;

if(bl!==null){this._styleSelectable(bl,O,false);
}
if(bk!==null){this._styleSelectable(bk,O,true);
}this.__kp=bk;
},getLeadItem:function(){return this.__kp!==null?this.__kp:null;
},_setAnchorItem:function(bm){var bn=this.__kq;

if(bn!=null){this._styleSelectable(bn,J,false);
}
if(bm!=null){this._styleSelectable(bm,J,true);
}this.__kq=bm;
},_getAnchorItem:function(){return this.__kq!==null?this.__kq:null;
},_isSelectable:function(bo){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bp=event.getTarget();
if(bp&&this._isSelectable(bp)){return bp;
}return null;
},_selectableToHashCode:function(bq){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(br,bs,bt){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bu){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bv){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bw,bx){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(by){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(bz){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bA,bB){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bC,bD){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bE,bF){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bG,bH){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bG===o){var bI=this._getFirstSelectable();

if(bI!=null){this._setSelectedItem(bI);
this._scrollItemIntoView(bI);
}}this._fireChange();
},handleMouseOver:function(event){if(this.__ks!=null&&this.__ks!=this._getScroll().top){this.__ks=null;
return;
}this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var bK=this.getMode();

if(bK!==o&&bK!==n){this._userInteraction=false;
return;
}var bJ=this._getSelectableFromMouseEvent(event);

if(bJ===null){this._userInteraction=false;
return;
}this._setSelectedItem(bJ);
this._fireChange(z);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bM=this._getSelectableFromMouseEvent(event);

if(bM===null){this._userInteraction=false;
return;
}var bO=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bL=event.isShiftPressed();
if(this.isItemSelected(bM)&&!bL&&!bO&&!this.getDrag()){this.__kr=bM;
this._userInteraction=false;
return;
}else{this.__kr=null;
}this._scrollItemIntoView(bM);
switch(this.getMode()){case n:case o:this._setSelectedItem(bM);
break;
case k:this._setLeadItem(bM);
this._setAnchorItem(bM);
this._toggleInSelection(bM);
break;
case j:this._setLeadItem(bM);
if(bL){var bN=this._getAnchorItem();

if(bN===null){bN=this._getFirstSelectable();
this._setAnchorItem(bN);
}this._selectItemRange(bN,bM,bO);
}else if(bO){this._setAnchorItem(bM);
this._toggleInSelection(bM);
}else{this._setAnchorItem(bM);
this._setSelectedItem(bM);
}break;
}var bP=this.getMode();

if(this.getDrag()&&bP!==n&&bP!==o&&!bL&&!bO){this.__kf=this._getLocation();
this.__kc=this._getScroll();
this.__kg=event.getDocumentLeft()+this.__kc.left;
this.__kh=event.getDocumentTop()+this.__kc.top;
this.__ki=true;
this._capture();
}this._fireChange(v);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var bT=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bQ=event.isShiftPressed();

if(!bT&&!bQ&&this.__kr!=null){var bR=this._getSelectableFromMouseEvent(event);

if(bR===null||!this.isItemSelected(bR)){this._userInteraction=false;
return;
}var bS=this.getMode();

if(bS===k){this._removeFromSelection(bR);
}else{this._setSelectedItem(bR);

if(this.getMode()===j){this._setLeadItem(bR);
this._setAnchorItem(bR);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__ki){return;
}this.__kj=event.getDocumentLeft();
this.__kk=event.getDocumentTop();
this._userInteraction=true;
var bV=this.__kj+this.__kc.left;

if(bV>this.__kg){this.__kl=1;
}else if(bV<this.__kg){this.__kl=-1;
}else{this.__kl=0;
}var bU=this.__kk+this.__kc.top;

if(bU>this.__kh){this.__km=1;
}else if(bU<this.__kh){this.__km=-1;
}else{this.__km=0;
}var location=this.__kf;

if(this.__kj<location.left){this.__jY=this.__kj-location.left;
}else if(this.__kj>location.right){this.__jY=this.__kj-location.right;
}else{this.__jY=0;
}
if(this.__kk<location.top){this.__ka=this.__kk-location.top;
}else if(this.__kk>location.bottom){this.__ka=this.__kk-location.bottom;
}else{this.__ka=0;
}if(!this.__kb){this.__kb=new qx.event.Timer(100);
this.__kb.addListener(q,this._onInterval,this);
}this.__kb.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var bW=e.getData();

if(this.getMode()===o&&this.isSelectionEmpty()){this.addItem(bW);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__ki){return;
}if(this.__kn){this._fireChange(v);
}delete this.__ki;
delete this.__kd;
delete this.__ke;
this._releaseCapture();
if(this.__kb){this.__kb.stop();
}},_onInterval:function(e){this._scrollBy(this.__jY,this.__ka);
this.__kc=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cg=this._getDimension();
var bY=Math.max(0,Math.min(this.__kj-this.__kf.left,cg.width))+this.__kc.left;
var bX=Math.max(0,Math.min(this.__kk-this.__kf.top,cg.height))+this.__kc.top;
if(this.__kd===bY&&this.__ke===bX){return;
}this.__kd=bY;
this.__ke=bX;
var ci=this._getAnchorItem();
var cb=ci;
var ce=this.__kl;
var ch,ca;

while(ce!==0){ch=ce>0?this._getRelatedSelectable(cb,F):this._getRelatedSelectable(cb,t);
if(ch!==null){ca=this._getSelectableLocationX(ch);
if((ce>0&&ca.left<=bY)||(ce<0&&ca.right>=bY)){cb=ch;
continue;
}}break;
}var cf=this.__km;
var cd,cc;

while(cf!==0){cd=cf>0?this._getRelatedSelectable(cb,f):this._getRelatedSelectable(cb,w);
if(cd!==null){cc=this._getSelectableLocationY(cd);
if((cf>0&&cc.top<=bX)||(cf<0&&cc.bottom>=bX)){cb=cd;
continue;
}}break;
}var cj=this.getMode();

if(cj===j){this._selectItemRange(ci,cb);
}else if(cj===k){if(this.isItemSelected(ci)){this._selectItemRange(ci,cb,true);
}else{this._deselectItemRange(ci,cb);
}this._setAnchorItem(cb);
}this._fireChange(E);
},__kt:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var cp,co;
var cr=event.getKeyIdentifier();
var cq=this.getMode();
var cl=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var cm=event.isShiftPressed();
var cn=false;

if(cr===r&&cl){if(cq!==n&&cq!==o){this._selectAllItems();
cn=true;
}}else if(cr===u){if(cq!==n&&cq!==o){this._clearSelection();
cn=true;
}}else if(cr===s){var ck=this.getLeadItem();

if(ck!=null&&!cm){if(cl||cq===k){this._toggleInSelection(ck);
}else{this._setSelectedItem(ck);
}cn=true;
}}else if(this.__kt[cr]){cn=true;

if(cq===n||cq==o){cp=this._getSelectedItem();
}else{cp=this.getLeadItem();
}
if(cp!==null){switch(cr){case H:co=this._getFirstSelectable();
break;
case I:co=this._getLastSelectable();
break;
case M:co=this._getRelatedSelectable(cp,w);
break;
case N:co=this._getRelatedSelectable(cp,f);
break;
case c:co=this._getRelatedSelectable(cp,t);
break;
case G:co=this._getRelatedSelectable(cp,F);
break;
case d:co=this._getPage(cp,true);
break;
case K:co=this._getPage(cp,false);
break;
}}else{switch(cr){case H:case N:case G:case K:co=this._getFirstSelectable();
break;
case I:case M:case c:case d:co=this._getLastSelectable();
break;
}}if(co!==null){switch(cq){case n:case o:this._setSelectedItem(co);
break;
case k:this._setLeadItem(co);
break;
case j:if(cm){var cs=this._getAnchorItem();

if(cs===null){this._setAnchorItem(cs=this._getFirstSelectable());
}this._setLeadItem(co);
this._selectItemRange(cs,co,cl);
}else{this._setAnchorItem(co);
this._setLeadItem(co);

if(!cl){this._setSelectedItem(co);
}}break;
}this.__ks=this._getScroll().top;
this._scrollItemIntoView(co);
}}
if(cn){event.stop();
this._fireChange(C);
}this._userInteraction=false;
},_selectAllItems:function(){var ct=this.getSelectables();

for(var i=0,l=ct.length;i<l;i++){this._addToSelection(ct[i]);
}},_clearSelection:function(){var cu=this.__jX;

for(var cv in cu){this._removeFromSelection(cu[cv]);
}this.__jX={};
},_selectItemRange:function(cw,cx,cy){var cB=this._getSelectableRange(cw,cx);
if(!cy){var cA=this.__jX;
var cC=this.__ku(cB);

for(var cz in cA){if(!cC[cz]){this._removeFromSelection(cA[cz]);
}}}for(var i=0,l=cB.length;i<l;i++){this._addToSelection(cB[i]);
}},_deselectItemRange:function(cD,cE){var cF=this._getSelectableRange(cD,cE);

for(var i=0,l=cF.length;i<l;i++){this._removeFromSelection(cF[i]);
}},__ku:function(cG){var cI={};
var cH;

for(var i=0,l=cG.length;i<l;i++){cH=cG[i];
cI[this._selectableToHashCode(cH)]=cH;
}return cI;
},_getSelectedItem:function(){for(var cJ in this.__jX){return this.__jX[cJ];
}return null;
},_setSelectedItem:function(cK){if(this._isSelectable(cK)){var cL=this.__jX;
var cM=this._selectableToHashCode(cK);

if(!cL[cM]||qx.lang.Object.hasMinLength(cL,2)){this._clearSelection();
this._addToSelection(cK);
}}},_addToSelection:function(cN){var cO=this._selectableToHashCode(cN);

if(this.__jX[cO]==null&&this._isSelectable(cN)){this.__jX[cO]=cN;
this._styleSelectable(cN,m,true);
this.__kn=true;
}},_toggleInSelection:function(cP){var cQ=this._selectableToHashCode(cP);

if(this.__jX[cQ]==null){this.__jX[cQ]=cP;
this._styleSelectable(cP,m,true);
}else{delete this.__jX[cQ];
this._styleSelectable(cP,m,false);
}this.__kn=true;
},_removeFromSelection:function(cR){var cS=this._selectableToHashCode(cR);

if(this.__jX[cS]!=null){delete this.__jX[cS];
this._styleSelectable(cR,m,false);
this.__kn=true;
}},_replaceMultiSelection:function(cT){var cW=false;
var da,cY;
var cU={};

for(var i=0,l=cT.length;i<l;i++){da=cT[i];

if(this._isSelectable(da)){cY=this._selectableToHashCode(da);
cU[cY]=da;
}}var db=cT[0];
var cV=da;
var cX=this.__jX;

for(var cY in cX){if(cU[cY]){delete cU[cY];
}else{da=cX[cY];
delete cX[cY];
this._styleSelectable(da,m,false);
cW=true;
}}for(var cY in cU){da=cX[cY]=cU[cY];
this._styleSelectable(da,m,true);
cW=true;
}if(!cW){return false;
}this._scrollItemIntoView(cV);
this._setLeadItem(db);
this._setAnchorItem(db);
this.__kn=true;
this._fireChange();
},_fireChange:function(dc){if(this.__kn){this.__ko=dc||null;
this.fireDataEvent(y,this.getSelection());
delete this.__kn;
}}},destruct:function(){this._disposeObjects(x);
this.__jX=this.__kr=this.__kq=null;
this.__kp=null;
}});
})();
(function(){var f="vertical",e="under",d="above",c="qx.ui.core.selection.Widget",b="left",a="right";
qx.Class.define(c,{extend:qx.ui.core.selection.Abstract,construct:function(g){qx.ui.core.selection.Abstract.call(this);
this.__kv=g;
},members:{__kv:null,_isSelectable:function(h){return this._isItemSelectable(h)&&h.getLayoutParent()===this.__kv;
},_selectableToHashCode:function(j){return j.$$hash;
},_styleSelectable:function(k,m,n){n?k.addState(m):k.removeState(m);
},_capture:function(){this.__kv.capture();
},_releaseCapture:function(){this.__kv.releaseCapture();
},_isItemSelectable:function(o){if(this._userInteraction){return o.isVisible()&&o.isEnabled();
}else{return o.isVisible();
}},_getWidget:function(){return this.__kv;
},_getLocation:function(){var p=this.__kv.getContentElement().getDomElement();
return p?qx.bom.element.Location.get(p):null;
},_getDimension:function(){return this.__kv.getInnerSize();
},_getSelectableLocationX:function(q){var r=q.getBounds();

if(r){return {left:r.left,right:r.left+r.width};
}},_getSelectableLocationY:function(s){var t=s.getBounds();

if(t){return {top:t.top,bottom:t.top+t.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(u,v){},_scrollItemIntoView:function(w){this.__kv.scrollChildIntoView(w);
},getSelectables:function(x){var y=false;

if(!x){y=this._userInteraction;
this._userInteraction=true;
}var B=this.__kv.getChildren();
var z=[];
var A;

for(var i=0,l=B.length;i<l;i++){A=B[i];

if(this._isItemSelectable(A)){z.push(A);
}}this._userInteraction=y;
return z;
},_getSelectableRange:function(C,D){if(C===D){return [C];
}var H=this.__kv.getChildren();
var E=[];
var G=false;
var F;

for(var i=0,l=H.length;i<l;i++){F=H[i];

if(F===C||F===D){if(G){E.push(F);
break;
}else{G=true;
}}
if(G&&this._isItemSelectable(F)){E.push(F);
}}return E;
},_getFirstSelectable:function(){var I=this.__kv.getChildren();

for(var i=0,l=I.length;i<l;i++){if(this._isItemSelectable(I[i])){return I[i];
}}return null;
},_getLastSelectable:function(){var J=this.__kv.getChildren();

for(var i=J.length-1;i>0;i--){if(this._isItemSelectable(J[i])){return J[i];
}}return null;
},_getRelatedSelectable:function(K,L){var O=this.__kv.getOrientation()===f;
var N=this.__kv.getChildren();
var M=N.indexOf(K);
var P;

if((O&&L===d)||(!O&&L===b)){for(var i=M-1;i>=0;i--){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}else if((O&&L===e)||(!O&&L===a)){for(var i=M+1;i<N.length;i++){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}return null;
},_getPage:function(Q,R){if(R){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__kv=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(b){return this._isItemSelectable(b)&&b.getLayoutParent()===this._getWidget().getChildrenContainer();
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var c=this._getWidget();
return {left:c.getScrollX(),top:c.getScrollY()};
},_scrollBy:function(d,e){var f=this._getWidget();
f.scrollByX(d);
f.scrollByY(e);
},_getPage:function(g,h){var m=this.getSelectables();
var length=m.length;
var p=m.indexOf(g);
if(p===-1){throw new Error("Invalid lead item: "+g);
}var j=this._getWidget();
var r=j.getScrollY();
var innerHeight=j.getInnerSize().height;
var top,l,q;

if(h){var o=r;
var i=p;
while(1){for(;i>=0;i--){top=j.getItemTop(m[i]);
if(top<o){q=i+1;
break;
}}if(q==null){var s=this._getFirstSelectable();
return s==g?null:s;
}if(q>=p){o-=innerHeight+r-j.getItemBottom(g);
q=null;
continue;
}return m[q];
}}else{var n=innerHeight+r;
var i=p;
while(1){for(;i<length;i++){l=j.getItemBottom(m[i]);
if(l>n){q=i-1;
break;
}}if(q==null){var k=this._getLastSelectable();
return k==g?null:k;
}if(q<=p){n+=j.getItemTop(g)-r;
q=null;
continue;
}return m[q];
}}}}});
})();
(function(){var v="single",u="Boolean",t="one",s="changeSelection",r="__kA",q="mouseup",p="mousedown",o="losecapture",n="multi",m="_applyQuickSelection",d="mouseover",l="_applySelectionMode",h="_applyDragSelection",c="qx.ui.core.MMultiSelectionHandling",b="removeItem",g="keypress",f="qx.event.type.Data",j="addItem",a="additive",k="mousemove";
qx.Mixin.define(c,{construct:function(){var x=this.SELECTION_MANAGER;
var w=this.__kA=new x(this);
this.addListener(p,w.handleMouseDown,w);
this.addListener(q,w.handleMouseUp,w);
this.addListener(d,w.handleMouseOver,w);
this.addListener(k,w.handleMouseMove,w);
this.addListener(o,w.handleLoseCapture,w);
this.addListener(g,w.handleKeyPress,w);
this.addListener(j,w.handleAddItem,w);
this.addListener(b,w.handleRemoveItem,w);
w.addListener(s,this._onSelectionChange,this);
},events:{"changeSelection":f},properties:{selectionMode:{check:[v,n,a,t],init:v,apply:l},dragSelection:{check:u,init:false,apply:h},quickSelection:{check:u,init:false,apply:m}},members:{__kA:null,selectAll:function(){this.__kA.selectAll();
},isSelected:function(y){if(!qx.ui.core.Widget.contains(this,y)){throw new Error("Could not test if "+y+" is selected, because it is not a child element!");
}return this.__kA.isItemSelected(y);
},addToSelection:function(z){if(!qx.ui.core.Widget.contains(this,z)){throw new Error("Could not add + "+z+" to selection, because it is not a child element!");
}this.__kA.addItem(z);
},removeFromSelection:function(A){if(!qx.ui.core.Widget.contains(this,A)){throw new Error("Could not remove "+A+" from selection, because it is not a child element!");
}this.__kA.removeItem(A);
},selectRange:function(B,C){this.__kA.selectItemRange(B,C);
},resetSelection:function(){this.__kA.clearSelection();
},setSelection:function(D){for(var i=0;i<D.length;i++){if(!qx.ui.core.Widget.contains(this,D[i])){throw new Error("Could not select "+D[i]+", because it is not a child element!");
}}
if(D.length===0){this.resetSelection();
}else{var E=this.getSelection();

if(!qx.lang.Array.equals(E,D)){this.__kA.replaceSelection(D);
}}},getSelection:function(){return this.__kA.getSelection();
},getSortedSelection:function(){return this.__kA.getSortedSelection();
},isSelectionEmpty:function(){return this.__kA.isSelectionEmpty();
},getSelectionContext:function(){return this.__kA.getSelectionContext();
},_getManager:function(){return this.__kA;
},getSelectables:function(F){return this.__kA.getSelectables(F);
},invertSelection:function(){this.__kA.invertSelection();
},_getLeadItem:function(){var G=this.__kA.getMode();

if(G===v||G===t){return this.__kA.getSelectedItem();
}else{return this.__kA.getLeadItem();
}},_applySelectionMode:function(H,I){this.__kA.setMode(H);
},_applyDragSelection:function(J,K){this.__kA.setDrag(J);
},_applyQuickSelection:function(L,M){this.__kA.setQuick(L);
},_onSelectionChange:function(e){this.fireDataEvent(s,e.getData());
}},destruct:function(){this._disposeObjects(r);
}});
})();
(function(){var f="change",d="__kw",c="qx.event.type.Data",b="qx.ui.form.MModelSelection",a="changeSelection";
qx.Mixin.define(b,{construct:function(){this.__kw=new qx.data.Array();
this.__kw.addListener(f,this.__kz,this);
this.addListener(a,this.__ky,this);
},events:{changeModelSelection:c},members:{__kw:null,__kx:false,__ky:function(){if(this.__kx){return;
}var k=this.getSelection();
var g=[];

for(var i=0;i<k.length;i++){var l=k[i];
var h=l.getModel?l.getModel():null;

if(h!==null){g.push(h);
}}if(g.length===k.length){try{this.setModelSelection(g);
}catch(e){throw new Error("Could not set the model selection. Maybe your models are not unique?");
}}},__kz:function(){this.__kx=true;
var n=this.getSelectables(true);
var p=[];
var o=this.__kw.toArray();

for(var i=0;i<o.length;i++){var r=o[i];

for(var j=0;j<n.length;j++){var s=n[j];
var m=s.getModel?s.getModel():null;

if(r===m){p.push(s);
break;
}}}this.setSelection(p);
this.__kx=false;
var q=this.getSelection();

if(!qx.lang.Array.equals(q,p)){this.__ky();
}},getModelSelection:function(){return this.__kw;
},setModelSelection:function(t){if(!t){this.__kw.removeAll();
return;
}t.unshift(this.__kw.getLength());
t.unshift(0);
var u=this.__kw.splice.apply(this.__kw,t);
u.dispose();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var k="scrollbar-y",j="scrollbar-x",i="pane",h="auto",g="corner",f="scrollbar-",d="on",c="_computeScrollbars",b="getDocument",a="changeVisibility",E="off",D="x",C="scroll",B="touchmove",A="scrollY",z="Left",y="mousewheel",x="scrollbarX",w="event.touch",v="scrollarea",r="y",s="vertical",p="scrollX",q="touchstart",n="horizontal",o="qx.ui.core.scroll.AbstractScrollArea",l="abstract",m="update",t="scrollbarY",u="Top";
qx.Class.define(o,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:l,construct:function(){qx.ui.core.Widget.call(this);
var F=new qx.ui.layout.Grid();
F.setColumnFlex(0,1);
F.setRowFlex(0,1);
this._setLayout(F);
this.addListener(y,this._onMouseWheel,this);
if(qx.core.Environment.get(w)){this.addListener(B,this._onTouchMove,this);
this.addListener(q,function(){this.__kB={"x":0,"y":0};
},this);
this.__kB={};
this.__kC={};
}},properties:{appearance:{refine:true,init:v},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,d,E],init:h,themeable:true,apply:c},scrollbarY:{check:[h,d,E],init:h,themeable:true,apply:c},scrollbar:{group:[x,t]}},members:{__kB:null,__kC:null,_createChildControlImpl:function(G,H){var I;

switch(G){case i:I=new qx.ui.core.scroll.ScrollPane();
I.addListener(m,this._computeScrollbars,this);
I.addListener(p,this._onScrollPaneX,this);
I.addListener(A,this._onScrollPaneY,this);
this._add(I,{row:0,column:0});
break;
case j:I=this._createScrollBar(n);
I.setMinWidth(0);
I.exclude();
I.addListener(C,this._onScrollBarX,this);
I.addListener(a,this._onChangeScrollbarXVisibility,this);
this._add(I,{row:1,column:0});
break;
case k:I=this._createScrollBar(s);
I.setMinHeight(0);
I.exclude();
I.addListener(C,this._onScrollBarY,this);
I.addListener(a,this._onChangeScrollbarYVisibility,this);
this._add(I,{row:0,column:1});
break;
case g:I=new qx.ui.core.Widget();
I.setWidth(0);
I.setHeight(0);
I.exclude();
this._add(I,{row:1,column:1});
break;
}return I||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,G);
},getPaneSize:function(){return this.getChildControl(i).getInnerSize();
},getItemTop:function(J){return this.getChildControl(i).getItemTop(J);
},getItemBottom:function(K){return this.getChildControl(i).getItemBottom(K);
},getItemLeft:function(L){return this.getChildControl(i).getItemLeft(L);
},getItemRight:function(M){return this.getChildControl(i).getItemRight(M);
},scrollToX:function(N){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollTo(N);
},scrollByX:function(O){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollBy(O);
},getScrollX:function(){var P=this.getChildControl(j,true);
return P?P.getPosition():0;
},scrollToY:function(Q){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollTo(Q);
},scrollByY:function(R){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollBy(R);
},getScrollY:function(){var S=this.getChildControl(k,true);
return S?S.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(i).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(i).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var V=this._isChildControlVisible(j);
var W=this._isChildControlVisible(k);
var U=(W)?this.getChildControl(k,true):(V?this.getChildControl(j,true):null);

if(U){var X=parseInt(e.getWheelDelta());
U.scrollBySteps(X);
var Y=U.getPosition();
var T=U.getMaximum();
if(X<0&&Y<=0||X>0&&Y>=T){return ;
}e.stop();
}},_onTouchMove:function(e){this._onTouchMoveDirectional(D,e);
this._onTouchMoveDirectional(r,e);
e.stop();
},_onTouchMoveDirectional:function(ba,e){var bb=(ba==D?z:u);
var bd=this.getChildControl(f+ba,true);
var be=this._isChildControlVisible(f+ba);

if(be&&bd){if(this.__kB[ba]==0){var bc=0;
}else{var bc=-(e[b+bb]()-this.__kB[ba]);
}this.__kB[ba]=e[b+bb]();
bd.scrollBy(bc);
if(this.__kC[ba]){clearTimeout(this.__kC[ba]);
this.__kC[ba]=null;
}this.__kC[ba]=setTimeout(qx.lang.Function.bind(function(bf){this.__kD(bf,ba);
},this,bc),100);
}},__kD:function(bg,bh){this.__kC[bh]=null;
var bj=this._isChildControlVisible(f+bh);

if(bg==0||!bj){return;
}if(bg>0){bg=Math.max(0,bg-3);
}else{bg=Math.min(0,bg+3);
}this.__kC[bh]=setTimeout(qx.lang.Function.bind(function(bk,bl){this.__kD(bk,bl);
},this,bg,bh),20);
var bi=this.getChildControl(f+bh,true);
bi.scrollBy(bg);
},_onChangeScrollbarXVisibility:function(e){var bm=this._isChildControlVisible(j);
var bn=this._isChildControlVisible(k);

if(!bm){this.scrollToX(0);
}bm&&bn?this._showChildControl(g):this._excludeChildControl(g);
},_onChangeScrollbarYVisibility:function(e){var bo=this._isChildControlVisible(j);
var bp=this._isChildControlVisible(k);

if(!bp){this.scrollToY(0);
}bo&&bp?this._showChildControl(g):this._excludeChildControl(g);
},_computeScrollbars:function(){var bw=this.getChildControl(i);
var content=bw.getChildren()[0];

if(!content){this._excludeChildControl(j);
this._excludeChildControl(k);
return;
}var bq=this.getInnerSize();
var bv=bw.getInnerSize();
var bt=bw.getScrollSize();
if(!bv||!bt){return;
}var bx=this.getScrollbarX();
var by=this.getScrollbarY();

if(bx===h&&by===h){var bu=bt.width>bq.width;
var bz=bt.height>bq.height;
if((bu||bz)&&!(bu&&bz)){if(bu){bz=bt.height>bv.height;
}else if(bz){bu=bt.width>bv.width;
}}}else{var bu=bx===d;
var bz=by===d;
if(bt.width>(bu?bv.width:bq.width)&&bx===h){bu=true;
}
if(bt.height>(bu?bv.height:bq.height)&&by===h){bz=true;
}}if(bu){var bs=this.getChildControl(j);
bs.show();
bs.setMaximum(Math.max(0,bt.width-bv.width));
bs.setKnobFactor((bt.width===0)?0:bv.width/bt.width);
}else{this._excludeChildControl(j);
}
if(bz){var br=this.getChildControl(k);
br.show();
br.setMaximum(Math.max(0,bt.height-bv.height));
br.setKnobFactor((bt.height===0)?0:bv.height/bt.height);
}else{this._excludeChildControl(k);
}}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var m="horizontal",k="qx.event.type.Data",j="vertical",h="",g="qx.ui.form.List",f="text",d="Boolean",c="one",b="addChildWidget",a="_applySpacing",A="Enter",z="Integer",y="action",x="keyinput",w="__wF",v="addItem",u="removeChildWidget",t="_applyOrientation",s="single",r="keypress",p="list",q="label",n="pane",o="removeItem";
qx.Class.define(g,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(B){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__wF=this._createListItemContainer();
this.__wF.addListener(b,this._onAddChild,this);
this.__wF.addListener(u,this._onRemoveChild,this);
this.getChildControl(n).add(this.__wF);
if(B){this.setOrientation(m);
}else{this.initOrientation();
}this.addListener(r,this._onKeyPress);
this.addListener(x,this._onKeyInput);
this.__wG=h;
},events:{addItem:k,removeItem:k},properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true},orientation:{check:[m,j],init:j,apply:t},spacing:{check:z,init:0,apply:a,themeable:true},enableInlineFind:{check:d,init:true}},members:{__wG:null,__wH:null,__wF:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__wF;
},_onAddChild:function(e){this.fireDataEvent(v,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(o,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_createListItemContainer:function(){return new qx.ui.container.Composite;
},_applyOrientation:function(C,D){var E=C===m;
var F=E?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__wF;
content.setLayout(F);
content.setAllowGrowX(!E);
content.setAllowGrowY(E);
this._applySpacing(this.getSpacing());
},_applySpacing:function(G,H){this.__wF.getLayout().setSpacing(G);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==A&&!e.isAltPressed()){var I=this.getSelection();

for(var i=0;i<I.length;i++){I[i].fireEvent(y);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var J=this.getSelectionMode();

if(!(J===s||J===c)){return;
}if(((new Date).valueOf()-this.__wH)>1000){this.__wG=h;
}this.__wG+=e.getChar();
var K=this.findItemByLabelFuzzy(this.__wG);
if(K){this.setSelection([K]);
}this.__wH=(new Date).valueOf();
},findItemByLabelFuzzy:function(L){L=L.toLowerCase();
var M=this.getChildren();
for(var i=0,l=M.length;i<l;i++){var N=M[i].getLabel();
if(N&&N.toLowerCase().indexOf(L)==0){return M[i];
}}return null;
},findItem:function(O,P){if(P!==false){O=O.toLowerCase();
}var S=this.getChildren();
var U;
for(var i=0,l=S.length;i<l;i++){U=S[i];
var T;

if(U.isRich()){var Q=U.getChildControl(q,true);

if(Q){var R=Q.getContentElement().getDomElement();

if(R){T=qx.bom.element.Attribute.get(R,f);
}}}else{T=U.getLabel();
}
if(T!=null){if(T.translate){T=T.translate();
}
if(P!==false){T=T.toLowerCase();
}
if(T.toString()==O.toString()){return U;
}}}return null;
}},destruct:function(){this._disposeObjects(w);
}});
})();
(function(){var j="hovered",i="slider",h="losecapture",g="preview-list",f="mouseover",e="mouseout",d="_knob",c="showcase.ui.PreviewList",b="scrollbar-x",a="knob";
qx.Class.define(c,{extend:qx.ui.form.List,construct:function(){qx.ui.form.List.call(this,true);
var k=this.getChildControl(b).getChildControl(i);
this._knob=k.getChildControl(a);
this._knob.addListener(f,function(){this._knob.addState(j);
},this);
this._knob.addListener(e,this._onMouseOut,this);
k.addListener(h,this._onMouseOut,this);
},properties:{appearance:{refine:true,init:g},height:{refine:true,init:null}},members:{_onMouseOut:function(){this._knob.removeState(j);
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var k="complete",j="display",h="_applySelectedPage",g="__wL",f="Boolean",e="showcase/images/welcome.png",d="__wN",c="showcase.Application",b="stack",a="showcase/images/loading66.gif",I="selection[0]",H="selection[0].readyState",G="none",F="value",E="selection[0].description",D="showcase",C="__wM",B="name",A="icon",z="selectedPage",r="showcase.Page",s="state",p="_applyShowLoadIndicator",q="en_US",n="page-preview",o="50%",l="mshtml",m="engine.name",t="update",u="block",w="selection[0].part",v="showLoadIndicator",y="__wK",x="__wI";
qx.Class.define(c,{extend:qx.application.Inline,properties:{selectedPage:{check:r,apply:h,nullable:true},showLoadIndicator:{check:f,init:false,apply:p}},members:{__wI:null,__wJ:null,__wK:null,__wL:null,__wM:null,__wN:null,main:function(){qx.application.Inline.prototype.main.call(this);
qx.locale.Manager.getInstance().setLocale(q);
var P=new qx.ui.layout.Grid();
P.setColumnFlex(0,1);
P.setRowFlex(1,1);
var T=0;
var O=document.getElementById(D);
var J=new qx.ui.root.Inline(O,false,false);
J.set({layout:P,width:900,minHeight:650,allowGrowX:false,height:null});
var K=new showcase.ui.PreviewList();
J.add(K,{row:T++,column:0,colSpan:2});
this.__wI=new qx.ui.container.Stack();
this.__wI.set({appearance:b,maxWidth:600,allowGrowX:false});
J.add(this.__wI,{row:T,column:0});
var N=new qx.ui.basic.Image(e).set({allowGrowX:true,allowGrowY:true,allowShrinkX:true,padding:[5,0,0,180]});
this.__wI.add(N);
this.__wK=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var Q=new qx.ui.basic.Image(a).set({marginLeft:-33});
this.__wK.add(Q,{left:o,top:200});
this.__wI.add(this.__wK);
this.__wL=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
this.__wI.add(this.__wL);
this.__wN=new showcase.ui.Description();
J.add(this.__wN,{row:T++,column:1});
this.__wN.exclude();
var R=new qx.data.Array();
R.push(new showcase.page.table.Page(),new showcase.page.form.Page(),new showcase.page.tree.Page(),new showcase.page.databinding.Page(),new showcase.page.theme.Page(),new showcase.page.i18n.Page(),new showcase.page.dragdrop.Page(),new showcase.page.htmleditor.Page());
var S=new qx.data.controller.List(R,K,B);
S.setIconPath(A);
S.bind(I,this,z);
S.bind(E,this.__wN,F);
S.bind(H,this,v,{converter:function(U){return U!==k;
}});
S.setDelegate({configureItem:function(V){V.set({appearance:n});
}});
var history=qx.bom.History.getInstance();
S.bind(w,history,s);
var M=history.getState();

if(M){var L;

for(var i=0;i<R.getLength();i++){if(R.getItem(i).getPart()===M){L=R.getItem(i);
break;
}}
if(L){qx.ui.core.queue.Manager.flush();
S.getSelection().push(L);
}}},_applyShowLoadIndicator:function(W){if(W){this.__wI.setSelection([this.__wK]);
}else{this.__wI.setSelection([this.__wL]);
}},_applySelectedPage:function(X,Y){if(Y){this._hidePage(Y);
}this._showPage(X);
},_hidePage:function(ba){if(this.getSelectedPage()!==ba){if(ba.getReadyState()==k){ba.getContent().getView().hide();
this.__wO();
}}},_showPage:function(bb){this.__wN.show();
bb.load(function(bc){if(this.getSelectedPage()==bc){var bd=bc.getContent().getView();
this.__wL.add(bd,{edge:0});
bd.show();
this.__wP(bd);
}},this);
},__wO:function(){if(this.__wM){this.__wM.cancel();
this.__wM.dispose();
this.__wM=null;
}},__wP:function(be){if(qx.core.Environment.get(m)==l){return;
}be.getContentElement().setStyle(j,G,true);
this.__wO();
qx.event.Timer.once(function(){var bf=be.getContentElement().getDomElement();
this.__wM=new qx.fx.effect.core.Fade(bf);
this.__wM.set({from:0,to:1});
this.__wM.addListenerOnce(t,function(){be.getContentElement().setStyle(j,u);
},this);
this.__wM.start();
},this,0);
}},destruct:function(){this._disposeObjects(x,y,g,d,C);
}});
})();
(function(){var j="}",i="  color: #444444;",h="  font-weight: bold;",g="  line-height: 130%;",f="  font-size: 15px;",e="  font-size: 24px;",d="#description h1 {",c="#i18n td {",b="  color: rgb(131, 179, 0);",a="  text-decoration: underline;",C="  font-size: 12px;",B="  color: #83B300;",A="#description {",z="  padding-left: 10px;",y="#description h2 {",x="#description ul {",w="  font-size: 10px;",v="  padding: 10px 0px 5px 0px;",u="  line-height: 140%;",t='  font-family: Verdana,"Bitstream Vera Sans","Lucida Grande",Tahoma,"Lucida Sans Unicode",Arial,sans-serif;',q="  margin: 10px 0 4px 0;",r="showcase.ui.Description",o="\n",p="#description li {",m="  padding-left: 20px;",n="#description a {",k="description",l="  color: rgb(16, 66, 117);",s="#description a:hover, #description a:active {";
qx.Class.define(r,{extend:qx.ui.basic.Label,construct:function(){qx.ui.basic.Label.call(this);
this.__wQ();
this.setRich(true);
this.setSelectable(true);
},properties:{appearance:{refine:true,init:k},allowGrowX:{refine:true,init:false},nativeContextMenu:{init:true,refine:true},allowGrowY:{refine:true,init:true}},members:{__wQ:function(){var D=[A,t,i,C,u,z,j,n,a,i,j,s,B,j,y,b,v,f,h,j,d,e,g,q,l,h,j,x,m,j,p,i,j,c,w,j];
qx.bom.Stylesheet.createElement(D.join(o));
}}});
})();
(function(){var n="interval",m="-1000px",l="mshtml",k="engine.name",j="",i="qx.bom.IframeHistory",h="qx/static/blank.html",g="state",f='<html><body><div id="state">',d='</div></body></html>',a="hidden",c="undefined",b="absolute";
if((qx.core.Environment.get(k)==l)){qx.Class.define(i,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__tO();
},members:{__tL:null,__tM:false,__tN:null,_setInitialState:function(){qx.bom.History.prototype._setInitialState.call(this);
this.__tN=this._getHash();
},_setHash:function(o){qx.bom.History.prototype._setHash.call(this,o);
this.__tN=this._encode(o);
},_readState:function(){if(!this.__tM){return this._decode(this._getHash());
}var p=this.__tL.contentWindow.document;
var q=p.getElementById(g);
return q?this._decode(q.innerText):j;
},_writeState:function(r){var r=this._encode(r);
this._setHash(r);
this.__tN=r;

try{var s=this.__tL.contentWindow.document;
s.open();
s.write(f+r+d);
s.close();
}catch(t){}},__tO:function(){this.__tS(function(){qx.event.Idle.getInstance().addListener(n,this.__tP,this);
});
},__tP:function(e){var v=null;
var u=this._getHash();

if(!this.__tR(u)){v=this.__tQ(u);
}else{v=this._readState();
}
if(qx.lang.Type.isString(v)&&v!=this.getState()){this._onHistoryLoad(v);
}},__tQ:function(w){w=this._decode(w);
this._writeState(w);
return w;
},__tR:function(x){return qx.lang.Type.isString(x)&&x==this.__tN;
},__tS:function(y){this.__tL=this.__tT();
document.body.appendChild(this.__tL);
this.__tU(function(){this._writeState(this.getState());

if(y){y.call(this);
}},this);
},__tT:function(){var z=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(h)});
z.style.visibility=a;
z.style.position=b;
z.style.left=m;
z.style.top=m;
return z;
},__tU:function(A,B,C){if(typeof C===c){C=0;
}
if(!this.__tL.contentWindow||!this.__tL.contentWindow.document){if(C>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__tU(A,B,++C);
},this,10);
return;
}this.__tM=true;
A.call(B||window);
}},destruct:function(){this.__tL=null;
qx.event.Idle.getInstance().addListener(n,this.__tP,this);
}});
}})();
(function(){var f="mousedown",d="__ns",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ns=[];
qx.event.Registration.addListener(document.documentElement,f,this.__nu,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__ns:null,add:function(g){this.__ns.push(g);
this.__nt();
},remove:function(h){if(this.__ns){qx.lang.Array.remove(this.__ns,h);
this.__nt();
}},hideAll:function(){var j;
var k=this.__ns;

if(k){for(var i=0,l=k.length;i<l;i++){var j=k[i];
j.getAutoHide()&&j.exclude();
}}},__nt:function(){var m=1e7;

for(var i=0;i<this.__ns.length;i++){this.__ns[i].setZIndex(m++);
}},__nu:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__ns;

for(var i=0;i<p.length;i++){var n=p[i];

if(!n.getAutoHide()||o==n||qx.ui.core.Widget.contains(n,o)){continue;
}n.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__nu,this,true);
this._disposeArray(d);
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{show:function(){if(this.getLayoutParent()==null){qx.core.Init.getApplication().getRoot().add(this);
}qx.ui.container.Composite.prototype.show.call(this);
},_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var g="__mx",f="Boolean",e="qx.ui.core.SingleSelectionManager",d="__mw",c="changeSelected",b="__my",a="qx.event.type.Data";
qx.Class.define(e,{extend:qx.core.Object,construct:function(h){qx.core.Object.call(this);
this.__mw=h;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:f,init:true,apply:b}},members:{__mx:null,__mw:null,getSelected:function(){return this.__mx;
},setSelected:function(j){if(!this.__mA(j)){throw new Error("Could not select "+j+", because it is not a child element!");
}this.__mz(j);
},resetSelected:function(){this.__mz(null);
},isSelected:function(k){if(!this.__mA(k)){throw new Error("Could not check if "+k+" is selected,"+" because it is not a child element!");
}return this.__mx===k;
},isSelectionEmpty:function(){return this.__mx==null;
},getSelectables:function(l){var m=this.__mw.getItems();
var n=[];

for(var i=0;i<m.length;i++){if(this.__mw.isItemSelectable(m[i])){n.push(m[i]);
}}if(!l){for(var i=n.length-1;i>=0;i--){if(!n[i].getEnabled()){n.splice(i,1);
}}}return n;
},__my:function(o,p){if(!o){this.__mz(this.__mx);
}},__mz:function(q){var t=this.__mx;
var s=q;

if(s!=null&&t===s){return;
}
if(!this.isAllowEmptySelection()&&s==null){var r=this.getSelectables(true)[0];

if(r){s=r;
}}this.__mx=s;
this.fireDataEvent(c,s,t);
},__mA:function(u){var v=this.__mw.getItems();

for(var i=0;i<v.length;i++){if(v[i]===u){return true;
}}return false;
}},destruct:function(){if(this.__mw.toHashCode){this._disposeObjects(d);
}else{this.__mw=null;
}this._disposeObjects(g);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(m,n){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(o,p){var q;

switch(o){case l:q=new qx.ui.basic.Atom;
this._add(q);
break;
}return q||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,o);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(r,s){var t=this.getChildControl(l);
r==null?t.resetIcon():t.setIcon(r);
},_applyLabel:function(u,v){var w=this.getChildControl(l);
u==null?w.resetLabel():w.setLabel(u);
},_applyRich:function(x,y){var z=this.getChildControl(l);
z.setRich(x);
}}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__lB,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__lB:function(name,e){var v=e.getData();
var r=v.value;
var p=v.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(v.name.indexOf){var u=v.name.indexOf(f)!=-1?v.name.indexOf(f):v.name.length;
var s=v.name.indexOf(h)!=-1?v.name.indexOf(h):v.name.length;

if(u<s){var o=v.name.substring(0,u);
var t=v.name.substring(u+1,v.name.length);

if(t[0]!=h){t=f+t;
}var q=name+h+o+g+t;
}else if(s<u){var o=v.name.substring(0,s);
var t=v.name.substring(s,v.name.length);
var q=name+h+o+g+t;
}else{var q=name+h+v.name+g;
}}else{var q=name+h+v.name+g;
}}else{var q=name+f+v.name;
}this.fireDataEvent(c,{value:r,name:q,old:p});
}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var o="change",n="changeBubble",m="add",l="remove",k="0-",j="order",h="-",g="0",f="qx.event.type.Data",e="Boolean",b="",d="qx.data.Array",c="number",a="changeLength";
qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(p){qx.core.Object.call(this);
if(p==undefined){this.__lC=[];
}else if(arguments.length>1){this.__lC=[];

for(var i=0;i<arguments.length;i++){this.__lC.push(arguments[i]);
}}else if(typeof p==c){this.__lC=new Array(p);
}else if(p instanceof Array){this.__lC=qx.lang.Array.clone(p);
}else{this.__lC=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__lC.length;i++){this._applyEventPropagation(this.__lC[i],null,i);
}this.__lD();
},properties:{autoDisposeItems:{check:e,init:false}},events:{"change":f,"changeLength":f},members:{__lC:null,concat:function(q){if(q){var r=this.__lC.concat(q);
}else{var r=this.__lC.concat();
}return new qx.data.Array(r);
},join:function(s){return this.__lC.join(s);
},pop:function(){var t=this.__lC.pop();
this.__lD();
this._registerEventChaining(null,t,this.length-1);
this.fireDataEvent(n,{value:[],name:this.length,old:[t]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:l,items:[t]},null);
return t;
},push:function(u){for(var i=0;i<arguments.length;i++){this.__lC.push(arguments[i]);
this.__lD();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(n,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var v=this.__lC.concat();
this.__lC.reverse();
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__lC,name:k+(this.__lC.length-1),old:v});
},shift:function(){if(this.length==0){return;
}var w=this.__lC.shift();
this.__lD();
this._registerEventChaining(null,w,this.length-1);
this.fireDataEvent(n,{value:[],name:g,old:[w]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:l,items:[w]},null);
return w;
},slice:function(x,y){return new qx.data.Array(this.__lC.slice(x,y));
},splice:function(z,A,B){var J=this.__lC.length;
var F=this.__lC.splice.apply(this.__lC,arguments);
if(this.__lC.length!=J){this.__lD();
}var H=A>0;
var D=arguments.length>2;
var E=null;

if(H||D){if(this.__lC.length>J){var I=m;
}else if(this.__lC.length<J){var I=l;
E=F;
}else{var I=j;
}this.fireDataEvent(o,{start:z,end:this.length-1,type:I,items:E},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,z+i);
}var G=[];

for(var i=2;i<arguments.length;i++){G[i-2]=arguments[i];
}var C=(z+Math.max(arguments.length-3,A-1));
var name=z==C?C:z+h+C;
this.fireDataEvent(n,{value:G,name:name,old:F});
for(var i=0;i<F.length;i++){this._registerEventChaining(null,F[i],i);
}return (new qx.data.Array(F));
},sort:function(K){if(this.length==0){return;
}var L=this.__lC.concat();
this.__lC.sort.apply(this.__lC,arguments);
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__lC,name:k+(this.length-1),old:L});
},unshift:function(M){for(var i=arguments.length-1;i>=0;i--){this.__lC.unshift(arguments[i]);
this.__lD();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(n,{value:[this.__lC[0]],name:g,old:[this.__lC[1]]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__lC;
},getItem:function(N){return this.__lC[N];
},setItem:function(O,P){var Q=this.__lC[O];
if(Q===P){return;
}this.__lC[O]=P;
this._registerEventChaining(P,Q,O);
if(this.length!=this.__lC.length){this.__lD();
}this.fireDataEvent(n,{value:[P],name:O,old:[Q]});
this.fireDataEvent(o,{start:O,end:O,type:m,items:[P]},null);
},getLength:function(){return this.length;
},indexOf:function(R){return this.__lC.indexOf(R);
},toString:function(){if(this.__lC!=null){return this.__lC.toString();
}return b;
},contains:function(S){return this.__lC.indexOf(S)!==-1;
},copy:function(){return this.concat();
},insertAt:function(T,U){this.splice(T,0,U);
},insertBefore:function(V,W){var X=this.indexOf(V);

if(X==-1){this.push(W);
}else{this.splice(X,0,W);
}},insertAfter:function(Y,ba){var bb=this.indexOf(Y);

if(bb==-1||bb==(this.length-1)){this.push(ba);
}else{this.splice(bb+1,0,ba);
}},removeAt:function(bc){var be=this.splice(bc,1);
var bd=be.getItem(0);
be.dispose();
return bd;
},removeAll:function(){for(var i=0;i<this.__lC.length;i++){this._registerEventChaining(null,this.__lC[i],i);
}if(this.getLength()==0){return;
}var bg=this.getLength();
var bf=this.__lC.concat();
this.__lC.length=0;
this.__lD();
this.fireDataEvent(n,{value:[],name:k+(bg-1),old:bf});
this.fireDataEvent(o,{start:0,end:bg-1,type:l,items:bf},null);
return bf;
},append:function(bh){if(bh instanceof qx.data.Array){bh=bh.toArray();
}Array.prototype.push.apply(this.__lC,bh);
for(var i=0;i<bh.length;i++){this._registerEventChaining(bh[i],null,this.__lC.length+i);
}var bi=this.length;
this.__lD();
this.fireDataEvent(n,{value:bh,name:bi==(this.length-1)?bi:bi+h+(this.length-1),old:[]});
this.fireDataEvent(o,{start:bi,end:this.length-1,type:m,items:bh},null);
},remove:function(bj){var bk=this.indexOf(bj);

if(bk!=-1){this.splice(bk,1);
return bj;
}},equals:function(bl){if(this.length!==bl.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bl.getItem(i)){return false;
}}return true;
},sum:function(){var bm=0;

for(var i=0;i<this.length;i++){bm+=this.getItem(i);
}return bm;
},max:function(){var bn=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bn){bn=this.getItem(i);
}}return bn===undefined?null:bn;
},min:function(){var bo=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bo){bo=this.getItem(i);
}}return bo===undefined?null:bo;
},forEach:function(bp,bq){for(var i=0;i<this.__lC.length;i++){bp.call(bq,this.__lC[i]);
}},__lD:function(){var br=this.length;
this.length=this.__lC.length;
this.fireDataEvent(a,this.length,br);
}},destruct:function(){for(var i=0;i<this.__lC.length;i++){var bs=this.__lC[i];
this._applyEventPropagation(null,bs,i);
if(this.isAutoDisposeItems()&&bs&&bs instanceof qx.core.Object){bs.dispose();
}}this.__lC=null;
}});
})();
(function(){var f="hovered",e="mouseover",d="mouseout",c="listitem",b="qx.ui.form.ListItem",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(g,h,i){qx.ui.basic.Atom.call(this,g,h);

if(i!=null){this.setModel(i);
}this.addListener(e,this._onMouseOver,this);
this.addListener(d,this._onMouseOut,this);
},events:{"action":a},properties:{appearance:{refine:true,init:c}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true},_onMouseOver:function(){this.addState(f);
},_onMouseOut:function(){this.removeState(f);
}},destruct:function(){this.removeListener(e,this._onMouseOver,this);
this.removeListener(d,this._onMouseOut,this);
}});
})();
(function(){var f="changeSelection",e="change",d="qx.data.Array",c="qx.data.controller.MSelection",b="_applySelection",a="target";
qx.Mixin.define(c,{construct:function(){if(!qx.Class.hasProperty(this.constructor,a)){throw new Error("Target property is needed.");
}if(this.getSelection()==null){this.__wR=new qx.data.Array();
this.setSelection(this.__wR);
}},properties:{selection:{check:d,event:f,apply:b,init:null}},members:{_modifingSelection:0,__wS:null,__wT:null,__wR:null,_applySelection:function(g,h){if(this.__wT!=undefined&&h!=undefined){h.removeListenerById(this.__wT);
}this.__wT=g.addListener(e,this.__wU,this);
this._updateSelection();
},__wU:function(){this._updateSelection();
},_changeTargetSelection:function(){if(this.getTarget()==null){return;
}if(!this.__wV()&&!this.__wW()){return;
}if(this._inSelectionModification()){return;
}var k=this.getTarget().getSelection();
var j=this.getSelection();

if(j==null){j=new qx.data.Array();
this.__wR=j;
this.setSelection(j);
}var l=[0,j.getLength()];

for(var i=0;i<k.length;i++){l.push(k[i].getModel());
}j.splice.apply(j,l).dispose();
this.fireDataEvent(f,this.getSelection());
},_addChangeTargetListener:function(m,n){if(this.__wS!=undefined&&n!=undefined){n.removeListenerById(this.__wS);
}
if(m!=null){if(this.__wV()||this.__wW()){this.__wS=m.addListener(f,this._changeTargetSelection,this);
}}},_updateSelection:function(){if(!this.getTarget()){return;
}this._startSelectionModification();
if(this.__wV()){var q=[];
for(var i=0;i<this.getSelection().length;i++){var r=this.getSelection().getItem(i);
var s=this.__wY(r);

if(s!=null){q.push(s);
}}this.getTarget().setSelection(q);
q=this.getTarget().getSelection();
var o=[];

for(var i=0;i<q.length;i++){o[i]=q[i].getModel();
}for(var i=this.getSelection().length-1;i>=0;i--){if(!qx.lang.Array.contains(o,this.getSelection().getItem(i))){this.getSelection().splice(i,1).dispose();
}}}else if(this.__wW()){var p=this.getSelection().getItem(this.getSelection().length-1);

if(p){this.__wX(p);
this.getSelection().splice(0,this.getSelection().getLength()-1).dispose();
}else{this.getTarget().resetSelection();
}}this._endSelectionModification();
},__wV:function(){var t=this.getTarget().constructor;
return qx.Class.implementsInterface(t,qx.ui.core.IMultiSelection);
},__wW:function(){var u=this.getTarget().constructor;
return qx.Class.implementsInterface(u,qx.ui.core.ISingleSelection);
},__wX:function(v){var w=this.__wY(v);
if(w==null){return;
}if(this.__wV()){this.getTarget().addToSelection(w);
}else if(this.__wW()){this.getTarget().setSelection([w]);
}},__wY:function(x){var y=this.getTarget().getSelectables(true);
for(var i=0;i<y.length;i++){if(y[i].getModel()==x){return y[i];
}}return null;
},_startSelectionModification:function(){this._modifingSelection++;
},_endSelectionModification:function(){this._modifingSelection>0?this._modifingSelection--:null;
},_inSelectionModification:function(){return this._modifingSelection>0;
}},destruct:function(){if(this.__wR){this.__wR.dispose();
}}});
})();
(function(){var m="",k="change",h="ReverseBindingId",g="BindingId",f="]",e="model[",d="String",c=".",b="changeModel",a="_applyLabelOptions",z="_applyLabelPath",y="changeTarget",x="_applyModel",w="icon",v="qx.data.controller.List",u="_applyIconPath",t="_applyDelegate",s="changeDelegate",r="_applyTarget",q="qx.data.IListData",o="model",p="label",n="_applyIconOptions";
qx.Class.define(v,{extend:qx.core.Object,include:qx.data.controller.MSelection,construct:function(A,B,C){qx.core.Object.call(this);
this.__xa=[];
this.__xb=[];
this.__xc=[];
this.__xd={};

if(C!=null){this.setLabelPath(C);
}
if(A!=null){this.setModel(A);
}
if(B!=null){this.setTarget(B);
}},properties:{model:{check:q,apply:x,event:b,nullable:true,dereference:true},target:{apply:r,event:y,nullable:true,init:null,dereference:true},labelPath:{check:d,apply:z,nullable:true},iconPath:{check:d,apply:u,nullable:true},labelOptions:{apply:a,nullable:true},iconOptions:{apply:n,nullable:true},delegate:{apply:t,event:s,init:null,nullable:true}},members:{__xe:null,__xa:null,__xd:null,__xb:null,__xc:null,__xf:null,__xg:null,update:function(){this.__xi();
this.__xm();
this._updateSelection();
},_applyDelegate:function(D,E){this._setConfigureItem(D,E);
this._setFilter(D,E);
this._setCreateItem(D,E);
this._setBindItem(D,E);
},_applyIconOptions:function(F,G){this.__xm();
},_applyLabelOptions:function(H,I){this.__xm();
},_applyIconPath:function(J,K){this.__xm();
},_applyLabelPath:function(L,M){this.__xm();
},_applyModel:function(N,O){if(O!=undefined){if(this.__xe!=undefined){O.removeListenerById(this.__xe);
}}if(this.getSelection()!=undefined&&this.getSelection().length>0){this.getSelection().splice(0,this.getSelection().length).dispose();
}if(N!=null){this.__xe=N.addListener(k,this.__xh,this);
this.__xo();
this.__xi();
if(O==null){this._changeTargetSelection();
}else{this.__xf=true;
qx.ui.core.queue.Widget.add(this);
}}else{var P=this.getTarget();
if(P!=null){var length=P.getChildren().length;

for(var i=0;i<length;i++){this.__xl();
}}}},_applyTarget:function(Q,R){this._addChangeTargetListener(Q,R);
if(R!=undefined){var S=R.removeAll();

for(var i=0;i<S.length;i++){S[i].destroy();
}this.removeAllBindings();
}
if(Q!=null){if(this.getModel()!=null){for(var i=0;i<this.__xa.length;i++){this.__xk(this.__xp(i));
}}}},__xh:function(){this.__xg=true;
qx.ui.core.queue.Widget.add(this);
if(this.__xa.length!=this.getModel().getLength()){this.update();
}},syncWidget:function(){if(this.__xf){this._changeTargetSelection();
}
if(this.__xg){this._updateSelection();
}this.__xg=this.__xf=null;
},__xi:function(){if(this.getTarget()==null){return;
}this.__xo();
var U=this.__xa.length;
var T=this.getTarget().getChildren().length;
if(U>T){for(var j=T;j<U;j++){this.__xk(this.__xp(j));
}}else if(U<T){for(var j=T;j>U;j--){this.__xl();
}}this.__xf=true;
qx.ui.core.queue.Widget.add(this);
},__xj:function(){var V=this.getModel();
if(V!=null){V.removeListenerById(this.__xe);
this.__xe=V.addListener(k,this.__xh,this);
}},_createItem:function(){var X=this.getDelegate();
if(X!=null&&X.createItem!=null){var W=X.createItem();
}else{var W=new qx.ui.form.ListItem();
}if(X!=null&&X.configureItem!=null){X.configureItem(W);
}return W;
},__xk:function(Y){var ba=this._createItem();
this._bindListItem(ba,Y);
this.getTarget().add(ba);
},__xl:function(){this._startSelectionModification();
var bc=this.getTarget().getChildren();
var bb=bc.length-1;
var bd=bc[bb];
this._removeBindingsFrom(bd);
this.getTarget().removeAt(bb);
bd.destroy();
this._endSelectionModification();
},getVisibleModels:function(){var be=[];
var bf=this.getTarget();

if(bf!=null){var bg=bf.getChildren();

for(var i=0;i<bg.length;i++){be.push(bg[i].getModel());
}}return new qx.data.Array(be);
},_bindListItem:function(bh,bi){var bj=this.getDelegate();
if(bj!=null&&bj.bindItem!=null){bj.bindItem(this,bh,bi);
}else{this.bindDefaultProperties(bh,bi);
}},bindDefaultProperties:function(bk,bl){this.bindProperty(m,o,null,bk,bl);
this.bindProperty(this.getLabelPath(),p,this.getLabelOptions(),bk,bl);
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),w,this.getIconOptions(),bk,bl);
}},bindProperty:function(bm,bn,bo,bp,bq){if(bo!=null){var bo=qx.lang.Object.clone(bo);
this.__xd[bn]=bo.onUpdate;
delete bo.onUpdate;
}else{bo={};
this.__xd[bn]=null;
}bo.onUpdate=qx.lang.Function.bind(this._onBindingSet,this,bq);
var br=e+bq+f;

if(bm!=null&&bm!=m){br+=c+bm;
}var bs=this.bind(br,bp,bn,bo);
bp.setUserData(bn+g,bs);
if(!qx.lang.Array.contains(this.__xb,bn)){this.__xb.push(bn);
}},bindPropertyReverse:function(bt,bu,bv,bw,bx){var by=e+bx+f;

if(bt!=null&&bt!=m){by+=c+bt;
}var bz=bw.bind(bu,this,by,bv);
bw.setUserData(bt+h,bz);
if(!qx.lang.Array.contains(this.__xc,bt)){this.__xc.push(bt);
}},_onBindingSet:function(bA,bB,bC){if(this.getModel()==null||this._inSelectionModification()){return;
}for(var i=0;i<this.__xb.length;i++){if(this.__xd[this.__xb[i]]!=null){this.__xd[this.__xb[i]]();
}}},_removeBindingsFrom:function(bD){for(var i=0;i<this.__xb.length;i++){var bE=bD.getUserData(this.__xb[i]+g);

if(bE!=null){this.removeBinding(bE);
}}for(var i=0;i<this.__xc.length;i++){var bE=bD.getUserData(this.__xc[i]+h);

if(bE!=null){bD.removeBinding(bE);
}}},__xm:function(){if(this.getTarget()==null||this.getModel()==null){return;
}var bF=this.getTarget().getChildren();
for(var i=0;i<bF.length;i++){this._removeBindingsFrom(bF[i]);
this._bindListItem(bF[i],this.__xp(i));
}this.__xj();
},_setConfigureItem:function(bG,bH){if(bG!=null&&bG.configureItem!=null&&this.getTarget()!=null){var bI=this.getTarget().getChildren();

for(var i=0;i<bI.length;i++){bG.configureItem(bI[i]);
}}},_setBindItem:function(bJ,bK){if(bJ!=null&&bJ.bindItem!=null){if(bK!=null&&bK.bindItem!=null&&bJ.bindItem==bK.bindItem){return;
}this.__xm();
}},_setCreateItem:function(bL,bM){if(this.getTarget()==null||this.getModel()==null||bL==null||bL.createItem==null){return;
}this._startSelectionModification();
var bO=this.getTarget().getChildren();

for(var i=0,l=bO.length;i<l;i++){this._removeBindingsFrom(bO[i]);
}var bN=this.getTarget().removeAll();

for(var i=0;i<bN.length;i++){bN[i].destroy();
}this.update();
this._endSelectionModification();
this._updateSelection();
},_setFilter:function(bP,bQ){if((bP==null||bP.filter==null)&&(bQ!=null&&bQ.filter!=null)){this.__xn();
}if(this.getTarget()==null||this.getModel()==null||bP==null||bP.filter==null){return;
}this._startSelectionModification();
var bU=this.getTarget().getChildren();

for(var i=0,l=bU.length;i<l;i++){this._removeBindingsFrom(bU[i]);
}var bS=this.__xa;
this.__xo();
if(bS.length>this.__xa.length){for(var j=bS.length;j>this.__xa.length;j--){this.getTarget().removeAt(j-1).destroy();
}}else if(bS.length<this.__xa.length){for(var j=bS.length;j<this.__xa.length;j++){var bT=this._createItem();
this.getTarget().add(bT);
}}var bR=this.getTarget().getChildren();

for(var i=0;i<bR.length;i++){this._bindListItem(bR[i],this.__xp(i));
}this.__xj();
this._endSelectionModification();
this._updateSelection();
},__xn:function(){this.__xo();
this.__xi();
this.__xm();
this.__xg=true;
qx.ui.core.queue.Widget.add(this);
},__xo:function(){var bW=this.getModel();

if(bW==null){return;
}var bX=this.getDelegate();

if(bX!=null){var bV=bX.filter;
}this.__xa=[];

for(var i=0;i<bW.getLength();i++){if(bV==null||bV(bW.getItem(i))){this.__xa.push(i);
}}},__xp:function(bY){return this.__xa[bY];
}},destruct:function(){this.__xa=this.__xd=this.__xb=null;
this.__xc=null;
qx.ui.core.queue.Widget.remove(this);
}});
})();


qx.$$loader.init();


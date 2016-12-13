(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"locale":"en","locale.variant":"US","qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.ui.FiniteStateMachine","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.whitespace":true,"qx.theme":"qx.theme.Indigo"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","sourceViewUri":"https://github.com/qooxdoo/qooxdoo/blob/%{qxGitBranch}/framework/source/class/%{classFilePath}#L%{lineNumber}"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"de":null,"de_DE":null,"en":null,"en_US":null,"fr":null,"fr_FR":null};
qx.$$locales = {"C":null,"de":null,"de_DE":null,"en":null,"en_US":null,"fr":null,"fr_FR":null};
qx.$$packageData = {};
qx.$$g = {}

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:demobrowser.demo.ui.FiniteStateMachine.7a29591d6d84.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : true,
  delayDefer: false,

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

var readyStateValue = {"complete" : true};
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue["loaded"] = true;
}

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || readyStateValue[this.readyState]) {
      elem.onreadystatechange = elem.onload = null;
      if (typeof callback === "function") {
        callback();
      }
    }
  };

  if (isLoadParallel) {
    elem.async = null;
  }

  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);
var isLoadParallel = 'async' in document.createElement('script');

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }

  var item;

  if (isLoadParallel) {
    while (list.length) {
      item = list.shift();
      if (list.length) {
        loadScript(item);
      } else {
        loadScript(item, callback);
      }
    }
  } else {
    item = list.shift();
    loadScript(item,  function() {
      if (isWebkit) {
        // force async, else Safari fails with a "maximum recursion depth exceeded"
        window.setTimeout(function() {
          loadScriptList(list, callback);
        }, 0);
      } else {
        loadScriptList(list, callback);
      }
    });
  }
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
  qx.Bootstrap.executePendingDefers();
  qx.$$loader.delayDefer = false;
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true;
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

// Load all stuff
qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {
    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  }
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_E":"ccc","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, MMM d, y G","cldr_date_time_format_GyMMMd":"MMM d, y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_Hmsv":"HH:mm:ss v","cldr_date_time_format_Hmv":"HH:mm v","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMW":"'week' W 'of' MMMM","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_hmsv":"h:mm:ss a v","cldr_date_time_format_hmv":"h:mm a v","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_date_time_format_yw":"'week' w 'of' y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_short_fri":"Fr","cldr_day_format_short_mon":"Mo","cldr_day_format_short_sat":"Sa","cldr_day_format_short_sun":"Su","cldr_day_format_short_thu":"Th","cldr_day_format_short_tue":"Tu","cldr_day_format_short_wed":"We","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.y","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_E":"ccc","cldr_date_time_format_EHm":"E, HH:mm","cldr_date_time_format_EHms":"E, HH:mm:ss","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E, h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, d. MMM y G","cldr_date_time_format_GyMMMd":"d. MMM y G","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_Hmsv":"HH:mm:ss v","cldr_date_time_format_Hmv":"HH:mm v","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMW":"'Woche' W 'im' MMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h 'Uhr' a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_hmsv":"h:mm:ss a v","cldr_date_time_format_hmv":"h:mm a v","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"E, d.M.y","cldr_date_time_format_yMM":"MM.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"d. MMM y","cldr_date_time_format_yMMdd":"dd.MM.y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_date_time_format_yw":"'Woche' w 'des' 'Jahres' y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_short_fri":"Fr.","cldr_day_format_short_mon":"Mo.","cldr_day_format_short_sat":"Sa.","cldr_day_format_short_sun":"So.","cldr_day_format_short_thu":"Do.","cldr_day_format_short_tue":"Di.","cldr_day_format_short_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_short_fri":"Fr.","cldr_day_stand-alone_short_mon":"Mo.","cldr_day_stand-alone_short_sat":"Sa.","cldr_day_stand-alone_short_sun":"So.","cldr_day_stand-alone_short_thu":"Do.","cldr_day_stand-alone_short_tue":"Di.","cldr_day_stand-alone_short_wed":"Mi.","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan.","cldr_month_format_abbreviated_10":"Okt.","cldr_month_format_abbreviated_11":"Nov.","cldr_month_format_abbreviated_12":"Dez.","cldr_month_format_abbreviated_2":"Feb.","cldr_month_format_abbreviated_3":"März","cldr_month_format_abbreviated_4":"Apr.","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Juni","cldr_month_format_abbreviated_7":"Juli","cldr_month_format_abbreviated_8":"Aug.","cldr_month_format_abbreviated_9":"Sep.","cldr_month_format_narrow_1":"J","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"J","cldr_month_format_narrow_7":"J","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Jun","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"Januar","cldr_month_stand-alone_wide_10":"Oktober","cldr_month_stand-alone_wide_11":"November","cldr_month_stand-alone_wide_12":"Dezember","cldr_month_stand-alone_wide_2":"Februar","cldr_month_stand-alone_wide_3":"März","cldr_month_stand-alone_wide_4":"April","cldr_month_stand-alone_wide_5":"Mai","cldr_month_stand-alone_wide_6":"Juni","cldr_month_stand-alone_wide_7":"Juli","cldr_month_stand-alone_wide_8":"August","cldr_month_stand-alone_wide_9":"September","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_E":"ccc","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, MMM d, y G","cldr_date_time_format_GyMMMd":"MMM d, y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_Hmsv":"HH:mm:ss v","cldr_date_time_format_Hmv":"HH:mm v","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMW":"'week' W 'of' MMMM","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_hmsv":"h:mm:ss a v","cldr_date_time_format_hmv":"h:mm a v","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_date_time_format_yw":"'week' w 'of' y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_short_fri":"Fr","cldr_day_format_short_mon":"Mo","cldr_day_format_short_sat":"Sa","cldr_day_format_short_sun":"Su","cldr_day_format_short_thu":"Th","cldr_day_format_short_tue":"Tu","cldr_day_format_short_wed":"We","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"»","alternateQuotationStart":"«","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/y","cldr_date_time_format_E":"E","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E d MMM y G","cldr_date_time_format_GyMMMd":"d MMM y G","cldr_date_time_format_H":"HH 'h'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_Hmsv":"HH:mm:ss v","cldr_date_time_format_Hmv":"HH:mm v","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E dd/MM","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMW":"'semaine' W 'de' MMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_Md":"dd/MM","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_hmsv":"h:mm:ss a v","cldr_date_time_format_hmv":"h:mm a v","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"MM/y","cldr_date_time_format_yMEd":"E dd/MM/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"dd/MM/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_date_time_format_yw":"'semaine' w 'de' y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_short_fri":"ve","cldr_day_format_short_mon":"lu","cldr_day_format_short_sat":"sa","cldr_day_format_short_sun":"di","cldr_day_format_short_thu":"je","cldr_day_format_short_tue":"ma","cldr_day_format_short_wed":"me","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_short_fri":"ve","cldr_day_stand-alone_short_mon":"lu","cldr_day_stand-alone_short_sat":"sa","cldr_day_stand-alone_short_sun":"di","cldr_day_stand-alone_short_thu":"je","cldr_day_stand-alone_short_tue":"ma","cldr_day_stand-alone_short_wed":"me","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_narrow_1":"J","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"J","cldr_month_format_narrow_7":"J","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_abbreviated_1":"janv.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"déc.","cldr_month_stand-alone_abbreviated_2":"févr.","cldr_month_stand-alone_abbreviated_3":"mars","cldr_month_stand-alone_abbreviated_4":"avr.","cldr_month_stand-alone_abbreviated_5":"mai","cldr_month_stand-alone_abbreviated_6":"juin","cldr_month_stand-alone_abbreviated_7":"juil.","cldr_month_stand-alone_abbreviated_8":"août","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"janvier","cldr_month_stand-alone_wide_10":"octobre","cldr_month_stand-alone_wide_11":"novembre","cldr_month_stand-alone_wide_12":"décembre","cldr_month_stand-alone_wide_2":"février","cldr_month_stand-alone_wide_3":"mars","cldr_month_stand-alone_wide_4":"avril","cldr_month_stand-alone_wide_5":"mai","cldr_month_stand-alone_wide_6":"juin","cldr_month_stand-alone_wide_7":"juillet","cldr_month_stand-alone_wide_8":"août","cldr_month_stand-alone_wide_9":"septembre","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser.demo"],"demobrowser/demo/ui/FsmMiceMaze.png":[962,600,"png","demobrowser.demo"],"demobrowser/demo/ui/mouse-east.gif":[50,50,"gif","demobrowser.demo"],"demobrowser/demo/ui/mouse-north.gif":[50,50,"gif","demobrowser.demo"],"demobrowser/demo/ui/mouse-south.gif":[50,50,"gif","demobrowser.demo"],"demobrowser/demo/ui/mouse-west.gif":[50,50,"gif","demobrowser.demo"],"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/decoration/Indigo/font/JosefinSlab-SemiBold.ttf":"qx","qx/decoration/Indigo/font/JosefinSlab-SemiBold.woff":"qx","qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/tooltip-error-arrow-right.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close-white.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore-white.gif":[8,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.png":[1,1,"png","qx"]},"translations":{"C":{},"de":{},"de_DE":{},"en":{},"en_US":{},"fr":{},"fr_FR":{}}};
(function(){var b=".prototype",c="function",d="Boolean",e="Error",f="Object.keys requires an object as argument.",g="constructor",h="warn",j="default",k="Null",m="hasOwnProperty",n="Undefined",o="string",p='undefined',q="toLocaleString",r="error",s="toString",t="Blob",u="qx.debug",v="()",w="RegExp",x="dynamic",y="Object",z="String",A="info",B="BROKEN_IE",C="isPrototypeOf",D="Date",E="",F="qx.Bootstrap",G="Function",H="]",I="Cannot call super class. Method is not derived: ",J="Array",K="[Class ",L="valueOf",M="Number",N="FormData",O="Class",P="debug",Q="ES5",R=".",S="ArrayBuffer",T="propertyIsEnumerable",U="object";if(!window.qx){window.qx={};}
;qx.Bootstrap={genericToString:function(){return K+this.classname+H;}
,createNamespace:function(name,V){var Y=name.split(R);var X=Y[0];var parent=qx.$$namespaceRoot&&qx.$$namespaceRoot[X]?qx.$$namespaceRoot:window;for(var i=0,W=Y.length-1;i<W;i++ ,X=Y[i]){if(!parent[X]){parent=parent[X]={};}
else {parent=parent[X];}
;}
;parent[X]=V;return X;}
,setDisplayName:function(bb,ba,name){bb.displayName=ba+R+name+v;}
,setDisplayNames:function(bd,bc){for(var name in bd){var be=bd[name];if(be instanceof Function){be.displayName=bc+R+name+v;}
;}
;}
,base:function(bf,bg){if(qx.Bootstrap.DEBUG){if(!qx.Bootstrap.isFunction(bf.callee.base)){throw new Error(I+bf.callee.displayName);}
;}
;if(arguments.length===1){return bf.callee.base.call(this);}
else {return bf.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,define:function(name,bs){var bp=function(){return (typeof this==p);}
;if(!bs){bs={statics:{}};}
;var bn;var bj=null;qx.Bootstrap.setDisplayNames(bs.statics,name);if(bs.members||bs.extend){qx.Bootstrap.setDisplayNames(bs.members,name+b);bn=bs.construct||new Function;if(bs.extend){this.extendClass(bn,bn,bs.extend,name,bl);}
;var bi=bs.statics||{};for(var i=0,bk=qx.Bootstrap.keys(bi),l=bk.length;i<l;i++ ){var bh=bk[i];bn[bh]=bi[bh];}
;bj=bn.prototype;bj.base=qx.Bootstrap.base;bj.name=bj.classname=name;var bq=bs.members||{};var bh,bo;for(var i=0,bk=qx.Bootstrap.keys(bq),l=bk.length;i<l;i++ ){bh=bk[i];bo=bq[bh];if(bo instanceof Function&&bj[bh]){bo.base=bj[bh];}
;bj[bh]=bo;}
;}
else {bn=bs.statics||{};if(qx.Bootstrap.$$registry&&qx.Bootstrap.$$registry[name]){var br=qx.Bootstrap.$$registry[name];if(this.keys(bn).length!==0){if(bs.defer){bs.defer(bn,bj);}
;for(var bm in bn){br[bm]=bn[bm];}
;return br;}
;}
;}
;bn.$$type=O;if(!bn.hasOwnProperty(s)){bn.toString=this.genericToString;}
;var bl=name?this.createNamespace(name,bn):E;bn.classname=name;if(!bp()){try{bn.name=name;}
catch(bt){}
;}
;bn.basename=bl;bn.$$events=bs.events;if(bs.defer){this.addPendingDefer(bn,function(){bs.defer(bn,bj);}
);}
;if(name!=null){qx.Bootstrap.$$registry[name]=bn;}
;return bn;}
};qx.Bootstrap.define(F,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var bu=true;if(qx.$$environment&&qx.$$environment[u]===false){bu=false;}
;return bu;}
)(),getEnvironmentSetting:function(bv){if(qx.$$environment){return qx.$$environment[bv];}
;}
,setEnvironmentSetting:function(bw,bx){if(!qx.$$environment){qx.$$environment={};}
;if(qx.$$environment[bw]===undefined){qx.$$environment[bw]=bx;}
;}
,createNamespace:qx.Bootstrap.createNamespace,setRoot:function(by){qx.$$namespaceRoot=by;}
,base:qx.Bootstrap.base,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(clazz,construct,superClass,name,basename){var superproto=superClass.prototype;var helper=new Function();helper.prototype=superproto;var proto=new helper();clazz.prototype=proto;proto.name=proto.classname=name;proto.basename=basename;construct.base=superClass;clazz.superclass=superClass;construct.self=clazz.constructor=proto.constructor=clazz;}
,__a:[],addPendingDefer:function(bA,bz){if(qx.$$loader&&qx.$$loader.delayDefer){this.__a.push(bA);bA.$$pendingDefer=bz;}
else {bz.call(bA);}
;}
,executePendingDefers:function(bG){var bE=function(bK){if(bK.environment){var bI=bK.environment.required;if(bI){for(var bL in bI){var bH=bI[bL];if(bH.load&&bH.className){bC(bH.className);}
;}
;}
;}
;for(var bL in bK.dependsOn){var bJ=bK.dependsOn[bL];if(bJ.require||bJ.load===x){bC(bL);}
;}
;}
;var bC=function(bM){var bO=bD(bM);if(bO.$$deferComplete){return;}
;var bN=bO.$$dbClassInfo;if(bN){bE(bN);}
;bB(bO);}
;var bB=function(bQ){var bP=bQ.$$pendingDefer;if(bP){delete bQ.$$pendingDefer;bQ.$$deferComplete=true;bP.call(bQ);}
;}
;var bD=function(name){var bU=qx.Bootstrap.getByName(name);if(!bU){var bS=name.split(R);var bV=bS[0];var bW=qx.$$namespaceRoot&&qx.$$namespaceRoot[bV]?qx.$$namespaceRoot:window;var bR=bW;for(var i=0,bT=bS.length-1;bR&&i<bT;i++ ,bV=bS[i]){bR=bR[bV];}
;if(bR!=bW){bU=bR;}
;}
;return bU;}
;if(!bG){var bF=this.__a;this.__a=[];bF.forEach(bB);return;}
;bE(bG);}
,getByName:function(name){return qx.Bootstrap.$$registry[name];}
,$$registry:{},objectGetLength:function(bX){return qx.Bootstrap.keys(bX).length;}
,objectMergeWith:function(ca,bY,cd){if(cd===undefined){cd=true;}
;for(var cc in bY){if(cd||ca[cc]===undefined){ca[cc]=bY[cc];}
;}
;return ca;}
,__b:[C,m,q,s,L,T,g],keys:({"ES5":Object.keys,"BROKEN_IE":function(ce){if(ce===null||(typeof ce!==U&&typeof ce!==c)){throw new TypeError(f);}
;var cf=[];var ch=Object.prototype.hasOwnProperty;for(var ci in ce){if(ch.call(ce,ci)){cf.push(ci);}
;}
;var cg=qx.Bootstrap.__b;for(var i=0,a=cg,l=a.length;i<l;i++ ){if(ch.call(ce,a[i])){cf.push(a[i]);}
;}
;return cf;}
,"default":function(cj){if(cj===null||(typeof cj!==U&&typeof cj!==c)){throw new TypeError(f);}
;var ck=[];var cl=Object.prototype.hasOwnProperty;for(var cm in cj){if(cl.call(cj,cm)){ck.push(cm);}
;}
;return ck;}
})[typeof (Object.keys)===c?Q:(function(){for(var cn in {toString:1}){return cn;}
;}
)()!==s?B:j],__c:{"[object String]":z,"[object Array]":J,"[object Object]":y,"[object RegExp]":w,"[object Number]":M,"[object Boolean]":d,"[object Date]":D,"[object Function]":G,"[object Error]":e,"[object Blob]":t,"[object ArrayBuffer]":S,"[object FormData]":N},bind:function(cp,self,cq){var co=Array.prototype.slice.call(arguments,2,arguments.length);return function(){var cr=Array.prototype.slice.call(arguments,0,arguments.length);return cp.apply(self,co.concat(cr));}
;}
,firstUp:function(cs){return cs.charAt(0).toUpperCase()+cs.substr(1);}
,firstLow:function(ct){return ct.charAt(0).toLowerCase()+ct.substr(1);}
,getClass:function(cv){if(cv===undefined){return n;}
else if(cv===null){return k;}
;var cu=Object.prototype.toString.call(cv);return (qx.Bootstrap.__c[cu]||cu.slice(8,-1));}
,isString:function(cw){return (cw!==null&&(typeof cw===o||qx.Bootstrap.getClass(cw)===z||cw instanceof String||(!!cw&&!!cw.$$isString)));}
,isArray:function(cx){return (cx!==null&&(cx instanceof Array||(cx&&qx.data&&qx.data.IListData&&qx.util.OOUtil.hasInterface(cx.constructor,qx.data.IListData))||qx.Bootstrap.getClass(cx)===J||(!!cx&&!!cx.$$isArray)));}
,isObject:function(cy){return (cy!==undefined&&cy!==null&&qx.Bootstrap.getClass(cy)===y);}
,isFunction:function(cz){return qx.Bootstrap.getClass(cz)===G;}
,$$logs:[],debug:function(cB,cA){qx.Bootstrap.$$logs.push([P,arguments]);}
,info:function(cD,cC){qx.Bootstrap.$$logs.push([A,arguments]);}
,warn:function(cF,cE){qx.Bootstrap.$$logs.push([h,arguments]);}
,error:function(cH,cG){qx.Bootstrap.$$logs.push([r,arguments]);}
,trace:function(cI){}
}});}
)();
(function(){var a="qx.util.OOUtil";qx.Bootstrap.define(a,{statics:{classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;}
,getPropertyDefinition:function(b,name){while(b){if(b.$$properties&&b.$$properties[name]){return b.$$properties[name];}
;b=b.superclass;}
;return null;}
,hasProperty:function(c,name){return !!qx.util.OOUtil.getPropertyDefinition(c,name);}
,getEventType:function(d,name){var d=d.constructor;while(d.superclass){if(d.$$events&&d.$$events[name]!==undefined){return d.$$events[name];}
;d=d.superclass;}
;return null;}
,supportsEvent:function(e,name){return !!qx.util.OOUtil.getEventType(e,name);}
,getByInterface:function(h,f){var g,i,l;while(h){if(h.$$implements){g=h.$$flatImplements;for(i=0,l=g.length;i<l;i++ ){if(g[i]===f){return h;}
;}
;}
;h=h.superclass;}
;return null;}
,hasInterface:function(k,j){return !!qx.util.OOUtil.getByInterface(k,j);}
,getMixins:function(n){var m=[];while(n){if(n.$$includes){m.push.apply(m,n.$$flatIncludes);}
;n=n.superclass;}
;return m;}
}});}
)();
(function(){var a="qx.core.Environment",b="default",c=' type)',d="&",e="qx/static/blank.html",f="true",g="|",h="qx.core.Environment for a list of predefined keys.",j="false",k='] found, and no default ("default") given',l=":",m='" (',n=' in variants [',o=".",p="qx.allowUrlSettings",q='No match for variant "',r=" is not a valid key. Please see the API-doc of ",s="qxenv";qx.Bootstrap.define(a,{statics:{_checks:{},_asyncChecks:{},__d:{},_checksMap:{},_defaults:{"true":true,"qx.allowUrlSettings":false,"qx.allowUrlVariants":false,"qx.debug.property.level":0,"qx.debug":true,"qx.debug.ui.queue":true,"qx.aspects":false,"qx.dynlocale":true,"qx.dyntheme":true,"qx.blankpage":e,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.optimization.basecalls":false,"qx.optimization.comments":false,"qx.optimization.privates":false,"qx.optimization.strings":false,"qx.optimization.variables":false,"qx.optimization.variants":false,"module.databinding":true,"module.logger":true,"module.property":true,"module.events":true,"qx.nativeScrollBars":false,"qx.automaticMemoryManagement":true},get:function(w){if(this.__d[w]!=undefined){return this.__d[w];}
;var y=this._checks[w];if(y){var u=y();this.__d[w]=u;return u;}
;var t=this._getClassNameFromEnvKey(w);if(t[0]!=undefined){var x=t[0];var v=t[1];var u=x[v]();this.__d[w]=u;return u;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(w+r+h);qx.Bootstrap.trace(this);}
;}
,_getClassNameFromEnvKey:function(D){var F=this._checksMap;if(F[D]!=undefined){var A=F[D];var E=A.lastIndexOf(o);if(E>-1){var C=A.slice(0,E);var z=A.slice(E+1);var B=qx.Bootstrap.getByName(C);if(B!=undefined){return [B,z];}
;}
;}
;return [undefined,undefined];}
,getAsync:function(H,K,self){var L=this;if(this.__d[H]!=undefined){window.setTimeout(function(){K.call(self,L.__d[H]);}
,0);return;}
;var I=this._asyncChecks[H];if(I){I(function(N){L.__d[H]=N;K.call(self,N);}
);return;}
;var G=this._getClassNameFromEnvKey(H);if(G[0]!=undefined){var J=G[0];var M=G[1];J[M](function(O){L.__d[H]=O;K.call(self,O);}
);return;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(H+r+h);qx.Bootstrap.trace(this);}
;}
,select:function(Q,P){return this.__e(this.get(Q),P);}
,selectAsync:function(S,R,self){this.getAsync(S,function(T){var U=this.__e(S,R);U.call(self,T);}
,this);}
,__e:function(Y,X){var W=X[Y];if(X.hasOwnProperty(Y)){return W;}
;for(var ba in X){if(ba.indexOf(g)!=-1){var V=ba.split(g);for(var i=0;i<V.length;i++ ){if(V[i]==Y){return X[ba];}
;}
;}
;}
;if(X[b]!==undefined){return X[b];}
;if(qx.Bootstrap.DEBUG){throw new Error(q+Y+m+(typeof Y)+c+n+qx.Bootstrap.keys(X)+k);}
;}
,filter:function(bb){var bd=[];for(var bc in bb){if(this.get(bc)){bd.push(bb[bc]);}
;}
;return bd;}
,invalidateCacheKey:function(be){delete this.__d[be];}
,add:function(bg,bf){if(this._checks[bg]==undefined){if(bf instanceof Function){if(!this._checksMap[bg]&&bf.displayName){this._checksMap[bg]=bf.displayName.substr(0,bf.displayName.length-2);}
;this._checks[bg]=bf;}
else {this._checks[bg]=this.__h(bf);}
;}
;}
,addAsync:function(bi,bh){if(this._checks[bi]==undefined){this._asyncChecks[bi]=bh;}
;}
,getChecks:function(){return this._checks;}
,getAsyncChecks:function(){return this._asyncChecks;}
,_initDefaultQxValues:function(){var bj=function(bl){return function(){return bl;}
;}
;for(var bk in this._defaults){this.add(bk,bj(this._defaults[bk]));}
;}
,__f:function(){if(qx&&qx.$$environment){for(var bm in qx.$$environment){var bn=qx.$$environment[bm];this._checks[bm]=this.__h(bn);}
;}
;}
,__g:function(){if(window.document&&window.document.location){var bo=window.document.location.search.slice(1).split(d);for(var i=0;i<bo.length;i++ ){var br=bo[i].split(l);if(br.length!=3||br[0]!=s){continue;}
;var bp=br[1];var bq=decodeURIComponent(br[2]);if(bq==f){bq=true;}
else if(bq==j){bq=false;}
else if(/^(\d|\.)+$/.test(bq)){bq=parseFloat(bq);}
;this._checks[bp]=this.__h(bq);}
;}
;}
,__h:function(bs){return qx.Bootstrap.bind(function(bt){return bt;}
,null,bs);}
},defer:function(bu){bu._initDefaultQxValues();bu.__f();if(bu.get(p)===true){bu.__g();}
;}
});}
)();
(function(){var a="ecmascript.string.startsWith",b="function",c="ecmascript.array.indexof",d="qx.bom.client.EcmaScript",f="ecmascript.array.foreach",g="ecmascript.array.findIndex",h="ecmascript.array.reduceright",i="stack",j="ecmascript.array.map",k="2001-02-03T04:05:06.007Z",l="[object Error]",m="ecmascript.object.keys",n="ecmascript.string.trim",o="ecmascript.array.reduce",p="ecmascript.array.every",q="ecmascript.array.filter",r="ecmascript.date.parse",s="ecmascript.string.endsWith",t="2001-02-03T04:05:06.007",u="ecmascript.array.some",v="stacktrace",w="ecmascript.error.toString",x="ecmascript.function.bind",y="ecmascript.array.lastindexof",z="ecmascript.array.find",A="e",B="ecmascript.error.stacktrace",C="ecmascript.date.now";qx.Bootstrap.define(d,{statics:{getStackTrace:function(){var D;var e=new Error(A);D=e.stack?i:e.stacktrace?v:null;if(!D){try{throw e;}
catch(E){e=E;}
;}
;return e.stacktrace?v:e.stack?i:null;}
,getArrayIndexOf:function(){return !!Array.prototype.indexOf;}
,getArrayLastIndexOf:function(){return !!Array.prototype.lastIndexOf;}
,getArrayForEach:function(){return !!Array.prototype.forEach;}
,getArrayFilter:function(){return !!Array.prototype.filter;}
,getArrayMap:function(){return !!Array.prototype.map;}
,getArraySome:function(){return !!Array.prototype.some;}
,getArrayFind:function(){return !!Array.prototype.find;}
,getArrayFindIndex:function(){return !!Array.prototype.findIndex;}
,getArrayEvery:function(){return !!Array.prototype.every;}
,getArrayReduce:function(){return !!Array.prototype.reduce;}
,getArrayReduceRight:function(){return !!Array.prototype.reduceRight;}
,getErrorToString:function(){return typeof Error.prototype.toString==b&&Error.prototype.toString()!==l;}
,getFunctionBind:function(){return typeof Function.prototype.bind===b;}
,getObjectKeys:function(){return !!Object.keys;}
,getDateNow:function(){return !!Date.now;}
,getDateParse:function(){return typeof Date.parse===b&&(Date.parse(t)!=Date.parse(k));}
,getStringStartsWith:function(){return typeof String.prototype.startsWith===b;}
,getStringEndsWith:function(){return typeof String.prototype.endsWith===b;}
,getStringTrim:function(){return typeof String.prototype.trim===b;}
},defer:function(F){qx.core.Environment.add(c,F.getArrayIndexOf);qx.core.Environment.add(y,F.getArrayLastIndexOf);qx.core.Environment.add(f,F.getArrayForEach);qx.core.Environment.add(q,F.getArrayFilter);qx.core.Environment.add(j,F.getArrayMap);qx.core.Environment.add(u,F.getArraySome);qx.core.Environment.add(z,F.getArrayFind);qx.core.Environment.add(g,F.getArrayFindIndex);qx.core.Environment.add(p,F.getArrayEvery);qx.core.Environment.add(o,F.getArrayReduce);qx.core.Environment.add(h,F.getArrayReduceRight);qx.core.Environment.add(C,F.getDateNow);qx.core.Environment.add(r,F.getDateParse);qx.core.Environment.add(w,F.getErrorToString);qx.core.Environment.add(B,F.getStackTrace);qx.core.Environment.add(x,F.getFunctionBind);qx.core.Environment.add(m,F.getObjectKeys);qx.core.Environment.add(a,F.getStringStartsWith);qx.core.Environment.add(s,F.getStringEndsWith);qx.core.Environment.add(n,F.getStringTrim);}
});}
)();
(function(){var a="qx.lang.normalize.Function",b="ecmascript.function.bind",c="function",d="Function.prototype.bind called on incompatible ";qx.Bootstrap.define(a,{statics:{bind:function(i){var e=Array.prototype.slice;var h=this;if(typeof h!=c){throw new TypeError(d+h);}
;var f=e.call(arguments,1);var g=function(){if(this instanceof g){var F=function(){}
;F.prototype=h.prototype;var self=new F;var j=h.apply(self,f.concat(e.call(arguments)));if(Object(j)===j){return j;}
;return self;}
else {return h.apply(i,f.concat(e.call(arguments)));}
;}
;return g;}
},defer:function(k){if(!qx.core.Environment.get(b)){Function.prototype.bind=k.bind;}
;}
});}
)();
(function(){var a="function",b="Length is 0 and no second argument given",c="qx.lang.normalize.Array",d="ecmascript.array.indexof",e="ecmascript.array.foreach",f="ecmascript.array.findIndex",g="filter",h="ecmascript.array.reduceright",j="indexOf",k="ecmascript.array.map",m="reduceRight",n="qx.debug",o="lastIndexOf",p="some",q="find",r="ecmascript.array.reduce",s="ecmascript.array.every",t="ecmascript.array.filter",u="findIndex",v="ecmascript.array.some",w="First argument is not callable",x="every",y="ecmascript.array.lastindexof",z="ecmascript.array.find",A="reduce",B="forEach",C="map";qx.Bootstrap.define(c,{statics:{indexOf:function(D,E){if(E==null){E=0;}
else if(E<0){E=Math.max(0,this.length+E);}
;for(var i=E;i<this.length;i++ ){if(this[i]===D){return i;}
;}
;return -1;}
,lastIndexOf:function(F,G){if(G==null){G=this.length-1;}
else if(G<0){G=Math.max(0,this.length+G);}
;for(var i=G;i>=0;i-- ){if(this[i]===F){return i;}
;}
;return -1;}
,forEach:function(H,I){var l=this.length;for(var i=0;i<l;i++ ){var J=this[i];if(J!==undefined){H.call(I||window,J,i,this);}
;}
;}
,filter:function(N,K){var L=[];var l=this.length;for(var i=0;i<l;i++ ){var M=this[i];if(M!==undefined){if(N.call(K||window,M,i,this)){L.push(this[i]);}
;}
;}
;return L;}
,map:function(R,O){var P=[];var l=this.length;for(var i=0;i<l;i++ ){var Q=this[i];if(Q!==undefined){P[i]=R.call(O||window,Q,i,this);}
;}
;return P;}
,some:function(S,T){var l=this.length;for(var i=0;i<l;i++ ){var U=this[i];if(U!==undefined){if(S.call(T||window,U,i,this)){return true;}
;}
;}
;return false;}
,every:function(V,W){var l=this.length;for(var i=0;i<l;i++ ){var X=this[i];if(X!==undefined){if(!V.call(W||window,X,i,this)){return false;}
;}
;}
;return true;}
,find:function(Y,ba){if(qx.core.Environment.get(n)){qx.core.Assert.assertFunction(Y);}
;var l=this.length;for(var i=0;i<l;i++ ){var bb=this[i];if(Y.call(ba||window,bb,i,this)){return bb;}
;}
;return undefined;}
,findIndex:function(bc,bd){if(qx.core.Environment.get(n)){qx.core.Assert.assertFunction(bc);}
;var l=this.length;for(var i=0;i<l;i++ ){var be=this[i];if(bc.call(bd||window,be,i,this)){return i;}
;}
;return -1;}
,reduce:function(bf,bg){if(typeof bf!==a){throw new TypeError(w);}
;if(bg===undefined&&this.length===0){throw new TypeError(b);}
;var bh=bg===undefined?this[0]:bg;for(var i=bg===undefined?1:0;i<this.length;i++ ){if(i in this){bh=bf.call(undefined,bh,this[i],i,this);}
;}
;return bh;}
,reduceRight:function(bi,bj){if(typeof bi!==a){throw new TypeError(w);}
;if(bj===undefined&&this.length===0){throw new TypeError(b);}
;var bk=bj===undefined?this[this.length-1]:bj;for(var i=bj===undefined?this.length-2:this.length-1;i>=0;i-- ){if(i in this){bk=bi.call(undefined,bk,this[i],i,this);}
;}
;return bk;}
},defer:function(bl){var bm=function(bn,name){if(!qx.core.Environment.get(bn)){Object.defineProperty(Array.prototype,name,{enumerable:false,value:bl[name]});}
;}
;bm(d,j);bm(y,o);bm(e,B);bm(t,g);bm(k,C);bm(v,p);bm(z,q);bm(f,u);bm(s,x);bm(r,A);bm(h,m);}
});}
)();
(function(){var a="qx.lang.Type",b="Error",c="RegExp",d="Date",e="Number",f="Boolean";qx.Bootstrap.define(a,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)===c;}
,isNumber:function(h){return (h!==null&&(this.getClass(h)===e||h instanceof Number));}
,isBoolean:function(i){return (i!==null&&(this.getClass(i)===f||i instanceof Boolean));}
,isDate:function(j){return (j!==null&&(this.getClass(j)===d||j instanceof Date));}
,isError:function(k){return (k!==null&&(this.getClass(k)===b||k instanceof Error));}
}});}
)();
(function(){var a=" != ",b="qx.core.Object",c="Expected value to be an array but found ",d="' (rgb(",f=") was fired.",g="Expected value to be an integer >= 0 but found ",h="' to be not equal with '",j="' to '",k="Expected object '",m="Called assertTrue with '",n="Expected value to be a map but found ",o="The function did not raise an exception!",p="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",s="' to implement the interface '",t="Expected value to be null but found ",u="Invalid argument 'type'",v="Called assert with 'false'",w="Assertion error! ",x="'",y="null",z="' but found '",A="'undefined'",B=",",C="' must must be a key of the map '",D="Expected '",E="The String '",F="Expected value to be a string but found ",G="Event (",H="Expected value to be the CSS color '",I="!",J="Expected value not to be undefined but found undefined!",K="qx.util.ColorUtil",L="The value '%1' must not have any of the values defined in the array '%2'",M=": ",N="The raised exception does not have the expected type! ",O=") not fired.",P="'!",Q="qx.core.Assert",R="",S="Expected value to be typeof object but found ",T="' but found ",U="' (identical) but found '",V="' must have any of the values defined in the array '",W="Expected value to be a number but found ",X="Called assertFalse with '",Y="qx.ui.core.Widget",bL="]",bM="Expected value to be a qooxdoo object but found ",bN="' arguments.",bH="Expected value '%1' to be in the range '%2'..'%3'!",bI="Array[",bJ="' does not match the regular expression '",bK="' to be not identical with '",bR="Expected [",bS="' arguments but found '",bT="', which cannot be converted to a CSS color!",ci=", ",bO="qx.core.AssertionError",bP="Expected value to be a boolean but found ",bQ="Expected value not to be null but found null!",bE="))!",bW="Expected value to be a qooxdoo widget but found ",bG="The value '",bX="Expected value to be typeof '",bY="\n Stack trace: \n",cd="Expected value to be typeof function but found ",bU="Expected value to be an integer but found ",ch="Called fail().",bV="The parameter 're' must be a string or a regular expression.",ca=")), but found value '",cb="qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'",cc="Expected value to be a number >= 0 but found ",ce="Expected value to be instanceof '",cf="], but found [",cg="Wrong number of arguments given. Expected '",bF="object";qx.Bootstrap.define(Q,{statics:{__i:true,__j:function(cj,ck){var co=R;for(var i=1,l=arguments.length;i<l;i++ ){co=co+this.__k(arguments[i]===undefined?A:arguments[i]);}
;var cn=R;if(co){cn=cj+M+co;}
else {cn=cj;}
;var cm=w+cn;if(qx.Class&&qx.Class.isDefined(bO)){var cl=new qx.core.AssertionError(cj,co);if(this.__i){qx.Bootstrap.error(cm+bY+cl.getStackTrace());}
;throw cl;}
else {if(this.__i){qx.Bootstrap.error(cm);}
;throw new Error(cm);}
;}
,__k:function(cq){var cp;if(cq===null){cp=y;}
else if(qx.lang.Type.isArray(cq)&&cq.length>10){cp=bI+cq.length+bL;}
else if((cq instanceof Object)&&(cq.toString==null)){cp=qx.lang.Json.stringify(cq,null,2);}
else {try{cp=cq.toString();}
catch(e){cp=R;}
;}
;return cp;}
,assert:function(cs,cr){cs==true||this.__j(cr||R,v);}
,fail:function(ct,cu){var cv=cu?R:ch;this.__j(ct||R,cv);}
,assertTrue:function(cx,cw){(cx===true)||this.__j(cw||R,m,cx,x);}
,assertFalse:function(cz,cy){(cz===false)||this.__j(cy||R,X,cz,x);}
,assertEquals:function(cA,cB,cC){cA==cB||this.__j(cC||R,D,cA,z,cB,P);}
,assertNotEquals:function(cD,cE,cF){cD!=cE||this.__j(cF||R,D,cD,h,cE,P);}
,assertIdentical:function(cG,cH,cI){cG===cH||this.__j(cI||R,D,cG,U,cH,P);}
,assertNotIdentical:function(cJ,cK,cL){cJ!==cK||this.__j(cL||R,D,cJ,bK,cK,P);}
,assertNotUndefined:function(cN,cM){cN!==undefined||this.__j(cM||R,J);}
,assertUndefined:function(cP,cO){cP===undefined||this.__j(cO||R,p,cP,I);}
,assertNotNull:function(cR,cQ){cR!==null||this.__j(cQ||R,bQ);}
,assertNull:function(cT,cS){cT===null||this.__j(cS||R,t,cT,I);}
,assertJsonEquals:function(cU,cV,cW){this.assertEquals(qx.lang.Json.stringify(cU),qx.lang.Json.stringify(cV),cW);}
,assertMatch:function(da,cY,cX){this.assertString(da);this.assert(qx.lang.Type.isRegExp(cY)||qx.lang.Type.isString(cY),bV);da.search(cY)>=0||this.__j(cX||R,E,da,bJ,cY.toString(),P);}
,assertArgumentsCount:function(dd,de,df,db){var dc=dd.length;(dc>=de&&dc<=df)||this.__j(db||R,cg,de,j,df,bS,dc,bN);}
,assertEventFired:function(dg,event,dj,dk,dl){var dh=false;var di=function(e){if(dk){dk.call(dg,e);}
;dh=true;}
;var dm;try{dm=dg.addListener(event,di,dg);dj.call(dg);}
catch(dn){throw dn;}
finally{try{dg.removeListenerById(dm);}
catch(dp){}
;}
;dh===true||this.__j(dl||R,G,event,O);}
,assertEventNotFired:function(dq,event,dt,du){var dr=false;var ds=function(e){dr=true;}
;var dv=dq.addListener(event,ds,dq);dt.call();dr===false||this.__j(du||R,G,event,f);dq.removeListenerById(dv);}
,assertException:function(dz,dy,dx,dw){var dy=dy||Error;var dA;try{this.__i=false;dz();}
catch(dB){dA=dB;}
finally{this.__i=true;}
;if(dA==null){this.__j(dw||R,o);}
;dA instanceof dy||this.__j(dw||R,N,dy,a,dA);if(dx){this.assertMatch(dA.toString(),dx,dw);}
;}
,assertInArray:function(dE,dD,dC){dD.indexOf(dE)!==-1||this.__j(dC||R,bG,dE,V,dD,x);}
,assertNotInArray:function(dH,dG,dF){dG.indexOf(dH)===-1||this.__j(dF||R,qx.lang.String.format(L,[dH,dG]));}
,assertArrayEquals:function(dI,dJ,dK){this.assertArray(dI,dK);this.assertArray(dJ,dK);dK=dK||bR+dI.join(ci)+cf+dJ.join(ci)+bL;if(dI.length!==dJ.length){this.fail(dK,true);}
;for(var i=0;i<dI.length;i++ ){if(dI[i]!==dJ[i]){this.fail(dK,true);}
;}
;}
,assertKeyInMap:function(dN,dM,dL){dM[dN]!==undefined||this.__j(dL||R,bG,dN,C,dM,x);}
,assertFunction:function(dP,dO){qx.lang.Type.isFunction(dP)||this.__j(dO||R,cd,dP,I);}
,assertString:function(dR,dQ){qx.lang.Type.isString(dR)||this.__j(dQ||R,F,dR,I);}
,assertBoolean:function(dT,dS){qx.lang.Type.isBoolean(dT)||this.__j(dS||R,bP,dT,I);}
,assertNumber:function(dV,dU){(qx.lang.Type.isNumber(dV)&&isFinite(dV))||this.__j(dU||R,W,dV,I);}
,assertPositiveNumber:function(dX,dW){(qx.lang.Type.isNumber(dX)&&isFinite(dX)&&dX>=0)||this.__j(dW||R,cc,dX,I);}
,assertInteger:function(ea,dY){(qx.lang.Type.isNumber(ea)&&isFinite(ea)&&ea%1===0)||this.__j(dY||R,bU,ea,I);}
,assertPositiveInteger:function(ed,eb){var ec=(qx.lang.Type.isNumber(ed)&&isFinite(ed)&&ed%1===0&&ed>=0);ec||this.__j(eb||R,g,ed,I);}
,assertInRange:function(eg,eh,ef,ee){(eg>=eh&&eg<=ef)||this.__j(ee||R,qx.lang.String.format(bH,[eg,eh,ef]));}
,assertObject:function(ej,ei){var ek=ej!==null&&(qx.lang.Type.isObject(ej)||typeof ej===bF);ek||this.__j(ei||R,S,(ej),I);}
,assertArray:function(em,el){qx.lang.Type.isArray(em)||this.__j(el||R,c,em,I);}
,assertMap:function(eo,en){qx.lang.Type.isObject(eo)||this.__j(en||R,n,eo,I);}
,assertRegExp:function(eq,ep){qx.lang.Type.isRegExp(eq)||this.__j(ep||R,r,eq,I);}
,assertType:function(et,es,er){this.assertString(es,u);typeof (et)===es||this.__j(er||R,bX,es,T,et,I);}
,assertInstance:function(ew,ey,eu){var ev=ey.classname||ey+R;ew instanceof ey||this.__j(eu||R,ce,ev,T,ew,I);}
,assertInterface:function(eB,eA,ez){qx.Class&&qx.Class.implementsInterface(eB,eA)||this.__j(ez||R,k,eB,s,eA,P);}
,assertCssColor:function(eH,eE,eG){var eC=qx.Class?qx.Class.getByName(K):null;if(!eC){throw new Error(cb);}
;var eD=eC.stringToRgb(eH);try{var eF=eC.stringToRgb(eE);}
catch(eJ){this.__j(eG||R,H,eH,d,eD.join(B),ca,eE,bT);}
;var eI=eD[0]==eF[0]&&eD[1]==eF[1]&&eD[2]==eF[2];eI||this.__j(eG||R,H,eD,d,eD.join(B),ca,eE,d,eF.join(B),bE);}
,assertElement:function(eL,eK){!!(eL&&eL.nodeType===1)||this.__j(eK||R,q,eL,P);}
,assertQxObject:function(eN,eM){this.__l(eN,b)||this.__j(eM||R,bM,eN,I);}
,assertQxWidget:function(eP,eO){this.__l(eP,Y)||this.__j(eO||R,bW,eP,I);}
,__l:function(eR,eQ){if(!eR){return false;}
;var eS=eR.constructor;while(eS){if(eS.classname===eQ){return true;}
;eS=eS.superclass;}
;return false;}
}});}
)();
(function(){var a=": ",b="qx.type.BaseError",c="",d="error";qx.Bootstrap.define(b,{extend:Error,construct:function(e,f){var g=Error.call(this,f);if(g.stack){this.stack=g.stack;}
;if(g.stacktrace){this.stacktrace=g.stacktrace;}
;this.__m=e||c;this.message=f||qx.type.BaseError.DEFAULTMESSAGE;}
,statics:{DEFAULTMESSAGE:d},members:{__n:null,__m:null,message:null,getComment:function(){return this.__m;}
,toString:function(){return this.__m+(this.message?a+this.message:c);}
}});}
)();
(function(){var a="qx.core.AssertionError";qx.Bootstrap.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);this.__o=qx.dev.StackTrace.getStackTrace();}
,members:{__o:null,getStackTrace:function(){return this.__o;}
}});}
)();
(function(){var a="ecmascript.string.startsWith",b="ecmascript.string.endsWith",c="qx.lang.normalize.String",d='number',e='',f="ecmascript.string.trim";qx.Bootstrap.define(c,{statics:{trim:function(){return this.replace(/^\s+|\s+$/g,e);}
,startsWith:function(h,g){g=g||0;return this.substr(g,h.length)===h;}
,endsWith:function(j,i){var l=this.toString();if(typeof i!==d||!isFinite(i)||Math.floor(i)!==i||i>l.length){i=l.length;}
;i-=j.length;var k=l.indexOf(j,i);return k!==-1&&k===i;}
},defer:function(m){if(!qx.core.Environment.get(f)){String.prototype.trim=m.trim;}
;if(!qx.core.Environment.get(a)){String.prototype.startsWith=m.startsWith;}
;if(!qx.core.Environment.get(b)){String.prototype.endsWith=m.endsWith;}
;}
});}
)();
(function(){var a="?",b="anonymous",c="...",d="qx.dev.StackTrace",e="",f="\n",g="stacktrace",h="/source/class/",j="Error created at",k="FILENAME_TO_CLASSNAME must return a string!",l="qx.debug",m="ecmascript.error.stacktrace",n="Backtrace:",o="stack",p="FORMAT_STACKTRACE must return an array of strings!",q=":",r=".",s="function",t="prototype",u='undefined';qx.Bootstrap.define(d,{statics:{FILENAME_TO_CLASSNAME:null,FORMAT_STACKTRACE:null,getStackTrace:function(){var x=[];try{throw new Error();}
catch(K){if(qx.dev.StackTrace.hasEnvironmentCheck&&qx.core.Environment.get(m)){var C=qx.dev.StackTrace.getStackTraceFromError(K);var F=qx.dev.StackTrace.getStackTraceFromCaller(arguments);qx.lang.Array.removeAt(C,0);x=F.length>C.length?F:C;for(var i=0;i<Math.min(F.length,C.length);i++ ){var A=F[i];if(A.indexOf(b)>=0){continue;}
;var w=null;var G=A.split(r);var z=/(.*?)\(/.exec(G[G.length-1]);if(z&&z.length==2){w=z[1];G.pop();}
;if(G[G.length-1]==t){G.pop();}
;var I=G.join(r);var y=C[i];var J=y.split(q);var E=J[0];var D=J[1];var v;if(J[2]){v=J[2];}
;var B=null;if(qx.Class&&qx.Class.getByName(E)){B=E;}
else {B=I;}
;var H=B;if(w){H+=r+w;}
;H+=q+D;if(v){H+=q+v;}
;x[i]=H;}
;}
else {x=this.getStackTraceFromCaller(arguments);}
;}
;return x;}
,getStackTraceFromCaller:function(O){var P=function(){return (typeof this==u);}
;var N=[];var R=null;if(!P()){try{R=qx.lang.Function.getCaller(O);}
catch(S){}
;}
;var L={};while(R){var Q=qx.lang.Function.getName(R);N.push(Q);try{R=R.caller;}
catch(T){break;}
;if(!R){break;}
;var M=qx.core.ObjectRegistry.toHashCode(R);if(L[M]){N.push(c);break;}
;L[M]=R;}
;return N;}
,getStackTraceFromError:function(bj){var ba=[];var X,Y,bg,W,V,bl,bh;var bi=qx.dev.StackTrace.hasEnvironmentCheck?qx.core.Environment.get(m):null;if(bi===o){if(!bj.stack){return ba;}
;X=/@(.+):(\d+)$/gm;while((Y=X.exec(bj.stack))!=null){bh=Y[1];W=Y[2];bg=this.__p(bh);ba.push(bg+q+W);}
;if(ba.length>0){return this.__r(ba);}
;X=/at (.*)/gm;var bk=/\((.*?)(:[\d:]+)\)/;var bf=/(.*?)(:[\d:]+$)/;while((Y=X.exec(bj.stack))!=null){var be=bk.exec(Y[1]);if(!be){be=bf.exec(Y[1]);}
;if(be){bg=this.__p(be[1]);ba.push(bg+be[2]);}
else {ba.push(Y[1]);}
;}
;}
else if(bi===g){var bb=bj.stacktrace;if(!bb){return ba;}
;if(bb.indexOf(j)>=0){bb=bb.split(j)[0];}
;X=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;while((Y=X.exec(bb))!=null){W=Y[1];V=Y[2];bh=Y[3];bg=this.__p(bh);ba.push(bg+q+W+q+V);}
;if(ba.length>0){return this.__r(ba);}
;X=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;while((Y=X.exec(bb))!=null){W=Y[1];bh=Y[2];bg=this.__p(bh);ba.push(bg+q+W);}
;}
else if(bj.message&&bj.message.indexOf(n)>=0){var bd=bj.message.split(n)[1].trim();var bc=bd.split(f);for(var i=0;i<bc.length;i++ ){var U=bc[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);if(U&&U.length>=2){W=U[1];bl=this.__p(U[2]);ba.push(bl+q+W);}
;}
;}
else if(bj.sourceURL&&bj.line){ba.push(this.__p(bj.sourceURL)+q+bj.line);}
;return this.__r(ba);}
,__p:function(bn){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==s){var bm=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bn);if(qx.core.Environment.get(l)&&!qx.lang.Type.isString(bm)){throw new Error(k);}
;return bm;}
;return qx.dev.StackTrace.__q(bn);}
,__q:function(bq){var br=h;var bo=bq.indexOf(br);var bs=bq.indexOf(a);if(bs>=0){bq=bq.substring(0,bs);}
;var bp=(bo==-1)?bq:bq.substring(bo+br.length).replace(/\//g,r).replace(/\.js$/,e);return bp;}
,__r:function(bt){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==s){bt=qx.dev.StackTrace.FORMAT_STACKTRACE(bt);if(qx.core.Environment.get(l)&&!qx.lang.Type.isArray(bt)){throw new Error(p);}
;}
;return bt;}
},defer:function(bu){bu.hasEnvironmentCheck=qx.bom&&qx.bom.client&&qx.bom.client.EcmaScript&&qx.bom.client.EcmaScript.getStackTrace;}
});}
)();
(function(){var a="qx.lang.normalize.Date",b="ecmascript.date.now",c="Z",d="+",e="ecmascript.date.parse";qx.Bootstrap.define(a,{statics:{now:function(){return +new Date();}
,parse:function(h){var f=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(h);if(!f){return Date.originalParse(h);}
;var g=[4,5,6,7].every(function(i){return f[i]===undefined;}
);[1,4,5,6,7,10,11].forEach(function(i){f[i]=+f[i]||0;}
);f[2]=(+f[2]||1)-1;f[3]=+f[3]||1;if(f[8]!==c&&f[9]===undefined&&!g){return new Date(f[1],f[2],f[3],f[4],f[5],f[6],f[7]).getTime();}
;var j=0;if(f[8]!==c){j=f[10]*60+f[11];if(f[9]===d){j=-j;}
;}
;return Date.UTC(f[1],f[2],f[3],f[4],f[5]+j,f[6],f[7]);}
},defer:function(k){if(!qx.core.Environment.get(b)){Date.now=k.now;}
;if(!qx.core.Environment.get(e)){Date.originalParse=Date.parse||function(l){return NaN;}
;Date.parse=k.parse;}
;}
});}
)();
(function(){var a="The second parameter must be an array.",b="mshtml",c="engine.name",d="[object Array]",e="qx.lang.Array",f="qx.debug",g="The first parameter must be an array.",h="Parameter must be an array.",j="]",k="qx",m="number",n="][",o="string",p="Cannot clean-up map entry doneObjects[";qx.Bootstrap.define(e,{statics:{cast:function(q,s,t){if(q.constructor===s){return q;}
;if(qx.data&&qx.data.IListData){if(qx.Class&&qx.Class.hasInterface(q,qx.data.IListData)){var q=q.toArray();}
;}
;var r=new s;if((qx.core.Environment.get(c)==b)){if(q.item){for(var i=t||0,l=q.length;i<l;i++ ){r.push(q[i]);}
;return r;}
;}
;if(Object.prototype.toString.call(q)===d&&t==null){r.push.apply(r,q);}
else {r.push.apply(r,Array.prototype.slice.call(q,t||0));}
;return r;}
,fromArguments:function(u,v){return Array.prototype.slice.call(u,v||0);}
,fromCollection:function(x){if((qx.core.Environment.get(c)==b)){if(x.item){var w=[];for(var i=0,l=x.length;i<l;i++ ){w[i]=x[i];}
;return w;}
;}
;return Array.prototype.slice.call(x,0);}
,fromShortHand:function(y){var A=y.length;var z=qx.lang.Array.clone(y);switch(A){case 1:z[1]=z[2]=z[3]=z[0];break;case 2:z[2]=z[0];case 3:z[3]=z[1];};return z;}
,clone:function(B){return B.concat();}
,insertAt:function(C,D,i){C.splice(i,0,D);return C;}
,insertBefore:function(E,G,F){var i=E.indexOf(F);if(i==-1){E.push(G);}
else {E.splice(i,0,G);}
;return E;}
,insertAfter:function(H,J,I){var i=H.indexOf(I);if(i==-1||i==(H.length-1)){H.push(J);}
else {H.splice(i+1,0,J);}
;return H;}
,removeAt:function(K,i){return K.splice(i,1)[0];}
,removeAll:function(L){L.length=0;return this;}
,append:function(N,M){if(N instanceof qx.data.Array){return N.append(M);}
;if(M instanceof qx.data.Array){M=M.toArray();}
;if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(N,g);qx.core.Assert&&qx.core.Assert.assertArray(M,a);}
;Array.prototype.push.apply(N,M);return N;}
,exclude:function(P,O){if(P instanceof qx.data.Array){return P.exclude(O);}
;if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(P,g);qx.core.Assert&&qx.core.Assert.assertArray(O,a);}
;O.forEach(function(Q){var R=P.indexOf(Q);if(R!=-1){P.splice(R,1);}
;}
);return P;}
,remove:function(S,T){if(S instanceof qx.data.Array){return S.remove(T);}
;var i=S.indexOf(T);if(i!=-1){S.splice(i,1);return T;}
;}
,contains:function(U,V){return U.indexOf(V)!==-1;}
,equals:function(X,W){if(X instanceof qx.data.Array){return X.equals(W);}
;W=qx.lang.Array.toNativeArray(W);var length=X.length;if(length!==W.length){return false;}
;for(var i=0;i<length;i++ ){if(X[i]!==W[i]){return false;}
;}
;return true;}
,sum:function(Y){var ba=0;for(var i=0,l=Y.length;i<l;i++ ){if(Y[i]!=undefined){ba+=Y[i];}
;}
;return ba;}
,max:function(bb){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(bb,h);}
;var i,bd=bb.length,bc=bb[0];for(i=1;i<bd;i++ ){if(bb[i]>bc){bc=bb[i];}
;}
;return bc===undefined?null:bc;}
,min:function(be){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(be,h);}
;var i,bg=be.length,bf=be[0];for(i=1;i<bg;i++ ){if(be[i]<bf){bf=be[i];}
;}
;return bf===undefined?null:bf;}
,unique:function(bj){var bt=[],bi={},bm={},bo={};var bn,bh=0;var br=k+Date.now();var bk=false,bp=false,bs=false;for(var i=0,bq=bj.length;i<bq;i++ ){bn=bj[i];if(bn===null){if(!bk){bk=true;bt.push(bn);}
;}
else if(bn===undefined){}
else if(bn===false){if(!bp){bp=true;bt.push(bn);}
;}
else if(bn===true){if(!bs){bs=true;bt.push(bn);}
;}
else if(typeof bn===o){if(!bi[bn]){bi[bn]=1;bt.push(bn);}
;}
else if(typeof bn===m){if(!bm[bn]){bm[bn]=1;bt.push(bn);}
;}
else {var bl=bn[br];if(bl==null){bl=bn[br]=bh++ ;}
;if(!bo[bl]){bo[bl]=bn;bt.push(bn);}
;}
;}
;for(var bl in bo){try{delete bo[bl][br];}
catch(bu){try{bo[bl][br]=null;}
catch(bv){throw new Error(p+bl+n+br+j);}
;}
;}
;return bt;}
,range:function(by,stop,bz){if(arguments.length<=1){stop=by||0;by=0;}
;bz=arguments[2]||1;var length=Math.max(Math.ceil((stop-by)/bz),0);var bw=0;var bx=Array(length);while(bw<length){bx[bw++ ]=by;by+=bz;}
;return bx;}
,replace:function(bA,bB){if(bA instanceof qx.data.Array){return bA.replace(bB);}
;if(bB===null){if(bA===null){return null;}
else {return [];}
;}
;bB=qx.lang.Array.toNativeArray(bB);if(bA===null){bA=bB.slice(0);}
else {var bC=[0,bA.length];bB.forEach(function(bD){bC.push(bD);}
);bA.splice.apply(bA,bC);}
;return bA;}
,toNativeArray:function(bE,bF){if(bE===undefined||bE===null){return bE;}
;if(bE instanceof qx.data.Array){if(bF){return bE.toArray().slice(0);}
;return bE.toArray();}
;if(qx.lang.Type.isArray(bE)){if(bF){return bE.slice(0);}
;return bE;}
;return [bE];}
}});}
)();
(function(){var b=".prototype",c='Conflict between mixin "',d="function",e="'is undefined/null!",f="constructor",g="' in mixin '",h='The configuration key "',j='" and "',k='" is not allowed!',m='" in member "',n='"! The type of the key must be "',o="Array",p="RegExp",q="members",r='" in property "',s="properties",t="statics",u="qx.Mixin",v="events",w="'is not a mixin!",x='Invalid type of key "',y='"!',z="]",A='"! The value needs to be a map!',B="Mixin",C="[Mixin ",D='" in mixin "',E="Includes of mixins must be mixins. The include number '",F="destruct",G='Invalid key "',H="Date",I='"! The value is undefined/null!',J="qx.debug",K="object";qx.Bootstrap.define(u,{statics:{define:function(name,M){if(M){if(M.include&&!(qx.Bootstrap.getClass(M.include)===o)){M.include=[M.include];}
;if(qx.core.Environment.get(J)){this.__t(name,M);}
;var L=M.statics?M.statics:{};qx.Bootstrap.setDisplayNames(L,name);for(var N in L){if(L[N] instanceof Function){L[N].$$mixin=L;}
;}
;if(M.construct){L.$$constructor=M.construct;qx.Bootstrap.setDisplayName(M.construct,name,f);}
;if(M.include){L.$$includes=M.include;}
;if(M.properties){L.$$properties=M.properties;}
;if(M.members){L.$$members=M.members;qx.Bootstrap.setDisplayNames(M.members,name+b);}
;for(var N in L.$$members){if(L.$$members[N] instanceof Function){L.$$members[N].$$mixin=L;}
;}
;if(M.events){L.$$events=M.events;}
;if(M.destruct){L.$$destructor=M.destruct;qx.Bootstrap.setDisplayName(M.destruct,name,F);}
;}
else {var L={};}
;L.$$type=B;L.name=name;L.toString=this.genericToString;L.basename=qx.Bootstrap.createNamespace(name,L);this.$$registry[name]=L;return L;}
,checkCompatibility:function(P){var Q=this.flatten(P);var R=Q.length;if(R<2){return true;}
;var S={};var T={};var V={};var U;for(var i=0;i<R;i++ ){U=Q[i];for(var O in U.events){if(V[O]){throw new Error(c+U.name+j+V[O]+m+O+y);}
;V[O]=U.name;}
;for(var O in U.properties){if(S[O]){throw new Error(c+U.name+j+S[O]+r+O+y);}
;S[O]=U.name;}
;for(var O in U.members){if(T[O]){throw new Error(c+U.name+j+T[O]+m+O+y);}
;T[O]=U.name;}
;}
;return true;}
,isCompatible:function(X,Y){var W=qx.util.OOUtil.getMixins(Y);W.push(X);return qx.Mixin.checkCompatibility(W);}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,flatten:function(ba){if(!ba){return [];}
;var bb=ba.concat();for(var i=0,l=ba.length;i<l;i++ ){if(ba[i].$$includes){bb.push.apply(bb,this.flatten(ba[i].$$includes));}
;}
;return bb;}
,genericToString:function(){return C+this.name+z;}
,$$registry:{},__s:qx.core.Environment.select(J,{"true":{"include":K,"statics":K,"members":K,"properties":K,"events":K,"destruct":d,"construct":d},"default":null}),__t:qx.core.Environment.select(J,{"true":function(name,bf){var be=this.__s;for(var bd in bf){if(!be[bd]){throw new Error(h+bd+D+name+k);}
;if(bf[bd]==null){throw new Error(G+bd+D+name+I);}
;if(be[bd]!==null&&typeof bf[bd]!==be[bd]){throw new Error(x+bd+D+name+n+be[bd]+y);}
;}
;var bc=[t,q,s,v];for(var i=0,l=bc.length;i<l;i++ ){var bd=bc[i];if(bf[bd]!==undefined&&([o,p,H].indexOf(qx.Bootstrap.getClass(bf[bd]))!=-1||bf[bd].classname!==undefined)){throw new Error(G+bd+D+name+A);}
;}
;if(bf.include){for(var i=0,a=bf.include,l=a.length;i<l;i++ ){if(a[i]==null){throw new Error(E+(i+1)+g+name+e);}
;if(a[i].$$type!==B){throw new Error(E+(i+1)+g+name+w);}
;}
;this.checkCompatibility(bf.include);}
;}
,"default":function(name,bg){}
})}});}
)();
(function(){var a="qx.core.Aspect",b="before",c="*",d="static";qx.Bootstrap.define(a,{statics:{__u:[],wrap:function(h,l,j){var m=[];var e=[];var k=this.__u;var g;for(var i=0;i<k.length;i++ ){g=k[i];if((g.type==null||j==g.type||g.type==c)&&(g.name==null||h.match(g.name))){g.pos==-1?m.push(g.fcn):e.push(g.fcn);}
;}
;if(m.length===0&&e.length===0){return l;}
;var f=function(){for(var i=0;i<m.length;i++ ){m[i].call(this,h,l,j,arguments);}
;var n=l.apply(this,arguments);for(var i=0;i<e.length;i++ ){e[i].call(this,h,l,j,arguments,n);}
;return n;}
;if(j!==d){f.self=l.self;f.base=l.base;}
;l.wrapper=f;f.original=l;return f;}
,addAdvice:function(q,o,p,name){this.__u.push({fcn:q,pos:o===b?-1:1,type:p,name:name});}
}});}
)();
(function(){var a="ecmascript.object.keys",b="qx.lang.normalize.Object";qx.Bootstrap.define(b,{statics:{keys:qx.Bootstrap.keys},defer:function(c){if(!qx.core.Environment.get(a)){Object.keys=c.keys;}
;}
});}
)();
(function(){var b="function",c="Boolean",d="'! The value is undefined/null!",e="RegExp",f='The configuration key "',g='The property "',h='" is not allowed!',j="string",k='Implementation of method "',m='"',n="Array",o='" is missing in class "',p="' in interface '",q="members",r="number",s="properties",t="statics",u="qx.debug",v="Invalid key '",w='The event "',x="events",y='Invalid type of key "',z='"!',A="]",B='" in class "',C="Interface",D='"! The value needs to be a map!',E='" in interface "',F="' is undefined/null!",G='"! The type of the key must be "',H='Implementation of member "',I="Extends of interfaces must be interfaces. The extend number '",J='" is not supported by Class "',K="' is not an interface!",L="qx.Interface",M='" required by interface "',N='Invalid key "',O="Date",P='"! Static constants must be all uppercase.',Q="toggle",R="boolean",S="is",T="[Interface ",U='"! Static constants must be all of a primitive type.',V="object";qx.Bootstrap.define(L,{statics:{define:function(name,X){if(X){if(X.extend&&!(qx.Bootstrap.getClass(X.extend)===n)){X.extend=[X.extend];}
;if(qx.core.Environment.get(u)){this.__t(name,X);}
;var W=X.statics?X.statics:{};if(X.extend){W.$$extends=X.extend;}
;if(X.properties){W.$$properties=X.properties;}
;if(X.members){W.$$members=X.members;}
;if(X.events){W.$$events=X.events;}
;}
else {var W={};}
;W.$$type=C;W.name=name;W.toString=this.genericToString;W.basename=qx.Bootstrap.createNamespace(name,W);qx.Interface.$$registry[name]=W;return W;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,flatten:function(ba){if(!ba){return [];}
;var Y=ba.concat();for(var i=0,l=ba.length;i<l;i++ ){if(ba[i].$$extends){Y.push.apply(Y,this.flatten(ba[i].$$extends));}
;}
;return Y;}
,__v:function(be,bf,bb,bi,bg){var bc=bb.$$members;if(bc){for(var bh in bc){if(qx.Bootstrap.isFunction(bc[bh])){var bk=this.__w(bf,bh);var bd=bk||qx.Bootstrap.isFunction(be[bh]);if(!bd){if(bg){throw new Error(k+bh+o+bf.classname+M+bb.name+m);}
else {return false;}
;}
;var bj=bi===true&&!bk&&!qx.util.OOUtil.hasInterface(bf,bb);if(bj){be[bh]=this.__z(bb,be[bh],bh,bc[bh]);}
;}
else {if(typeof be[bh]===undefined){if(typeof be[bh]!==b){if(bg){throw new Error(H+bh+o+bf.classname+M+bb.name+m);}
else {return false;}
;}
;}
;}
;}
;}
;if(!bg){return true;}
;}
,__w:function(bo,bl){var bq=bl.match(/^(is|toggle|get|set|reset)(.*)$/);if(!bq){return false;}
;var bn=qx.Bootstrap.firstLow(bq[2]);var bp=qx.util.OOUtil.getPropertyDefinition(bo,bn);if(!bp){return false;}
;var bm=bq[0]===S||bq[0]===Q;if(bm){return qx.util.OOUtil.getPropertyDefinition(bo,bn).check===c;}
;return true;}
,__x:function(bu,br,bs){if(br.$$properties){for(var bt in br.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(bu,bt)){if(bs){throw new Error(g+bt+J+bu.classname+z);}
else {return false;}
;}
;}
;}
;if(!bs){return true;}
;}
,__y:function(by,bv,bw){if(bv.$$events){for(var bx in bv.$$events){if(!qx.util.OOUtil.supportsEvent(by,bx)){if(bw){throw new Error(w+bx+J+by.classname+z);}
else {return false;}
;}
;}
;}
;if(!bw){return true;}
;}
,assertObject:function(bB,bz){var bC=bB.constructor;this.__v(bB,bC,bz,false,true);this.__x(bC,bz,true);this.__y(bC,bz,true);var bA=bz.$$extends;if(bA){for(var i=0,l=bA.length;i<l;i++ ){this.assertObject(bB,bA[i]);}
;}
;}
,assert:function(bF,bD,bG){this.__v(bF.prototype,bF,bD,bG,true);this.__x(bF,bD,true);this.__y(bF,bD,true);var bE=bD.$$extends;if(bE){for(var i=0,l=bE.length;i<l;i++ ){this.assert(bF,bE[i],bG);}
;}
;}
,objectImplements:function(bJ,bH){var bK=bJ.constructor;if(!this.__v(bJ,bK,bH)||!this.__x(bK,bH)||!this.__y(bK,bH)){return false;}
;var bI=bH.$$extends;if(bI){for(var i=0,l=bI.length;i<l;i++ ){if(!this.objectImplements(bJ,bI[i])){return false;}
;}
;}
;return true;}
,classImplements:function(bN,bL){if(!this.__v(bN.prototype,bN,bL)||!this.__x(bN,bL)||!this.__y(bN,bL)){return false;}
;var bM=bL.$$extends;if(bM){for(var i=0,l=bM.length;i<l;i++ ){if(!this.has(bN,bM[i])){return false;}
;}
;}
;return true;}
,genericToString:function(){return T+this.name+A;}
,$$registry:{},__z:qx.core.Environment.select(u,{"true":function(bR,bP,bS,bO){function bQ(){bO.apply(this,arguments);return bP.apply(this,arguments);}
;bP.wrapper=bQ;return bQ;}
,"default":function(bV,bU,bW,bT){}
}),__s:qx.core.Environment.select(u,{"true":{"extend":V,"statics":V,"members":V,"properties":V,"events":V},"default":null}),__t:qx.core.Environment.select(u,{"true":function(name,cb){if(qx.core.Environment.get(u)){var ca=this.__s;for(var bY in cb){if(ca[bY]===undefined){throw new Error(f+bY+B+name+h);}
;if(cb[bY]==null){throw new Error(v+bY+p+name+d);}
;if(ca[bY]!==null&&typeof cb[bY]!==ca[bY]){throw new Error(y+bY+E+name+G+ca[bY]+z);}
;}
;var bX=[t,q,s,x];for(var i=0,l=bX.length;i<l;i++ ){var bY=bX[i];if(cb[bY]!==undefined&&([n,e,O].indexOf(qx.Bootstrap.getClass(cb[bY]))!=-1||cb[bY].classname!==undefined)){throw new Error(N+bY+E+name+D);}
;}
;if(cb.extend){for(var i=0,a=cb.extend,l=a.length;i<l;i++ ){if(a[i]==null){throw new Error(I+i+1+p+name+F);}
;if(a[i].$$type!==C){throw new Error(I+i+1+p+name+K);}
;}
;}
;if(cb.statics){for(var bY in cb.statics){if(bY.toUpperCase()!==bY){throw new Error(N+bY+E+name+P);}
;switch(typeof cb.statics[bY]){case R:case j:case r:break;default:throw new Error(N+bY+E+name+U);};}
;}
;}
;}
,"default":function(name,cc){}
})}});}
)();
(function(){var a="ecmascript.error.toString",b="qx.lang.normalize.Error",c=": ",d="Error",e="";qx.Bootstrap.define(b,{statics:{toString:function(){var name=this.name||d;var f=this.message||e;if(name===e&&f===e){return d;}
;if(name===e){return f;}
;if(f===e){return name;}
;return name+c+f;}
},defer:function(g){if(!qx.core.Environment.get(a)){Error.prototype.toString=g.toString;}
;}
});}
)();
(function(){var b="of property '",c='var msg = "Invalid incoming value for property \'',d='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',e='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',f="set",g="function",h=';',j="resetThemed",k='value !== null && value.nodeType === 9 && value.documentElement',m='value !== null && value.$$type === "Mixin"',n='return init;',o='var init=this.',p='(value, old);',q='value !== null && value.nodeType === 1 && value.attributes',r="var parent = this.getLayoutParent();",s="Error in property ",t='var old;',u="property",v='.check.call(this, value)',w='if((computed===undefined||computed===inherit)&&',x="();",y='.validate.call(this, value);',z='qx.core.Assert.assertInstance(value, Date, msg) || true',A='else{',B="Cannot add the non themable property '",C="if (!parent) return;",D=" in method ",E='qx.core.Assert.assertInstance(value, Error, msg) || true',F='=computed;',G='Undefined value is not allowed!',H='(backup);',I='if(',J="Invalid type for 'isEqual' attribute ",K='else ',L='=true;',M="' to the themable property group '",N='if(old===undefined)old=this.',O='if(computed===inherit){',P="]: ",Q=',value))return value;',R="inherit",S='if(this.',T='return this.',U='else if(this.',V='!==inherit){',W='Is invalid!',X='if(value===undefined)prop.error(this,2,"',Y='", "',ba='if(a[i].',bb='else if(computed===undefined)',bc="Malformed generated code to unwrap method: ",bd='delete this.',be="resetRuntime",bf="': ",bg=" of class ",bh='value !== null && value.nodeType !== undefined',bi='===undefined)return;',bj='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bk="Could not add check to property ",bl='function(a,b){return !!(',bm='function(a,b){return !!',bn="reset",bo="string",bp="')){",bq="module.events",br="return this.",bs='qx.core.Assert.assertPositiveInteger(value, msg) || true',bt="Code[",bu='value=this.',bv="Cannot create property group '",bw='","',bx='if(init==qx.core.Property.$$inherit)init=null;',by='qx.core.Assert.assertInArray(value, ',bz="get",bA='value !== null && value.$$type === "Interface"',bB='var inherit=prop.$$inherit;',bC=')prop.error(this,5,"',bD="var value = parent.",bE="$$useinit_",bF='computed=undefined;delete this.',bG='(value);',bH="' in class '",bI="(value);",bJ=');};',bK='this.',bL='Requires exactly one argument!',bM='",value);',bN='computed=value;',bO='}else{',bP="$$runtime_",bQ="setThemed",bR='if(this.$$initialized)prop.error(this,0,"',bS='qx.core.Assert.assertInstance(value, qx.Class.getByName("',bT='var equ=',bU="$$user_",bV='if(value===null)prop.error(this,4,"',bW='!==undefined)',bX='){',bY='!',ca='qx.core.Assert.assertArray(value, msg) || true',cb='if(computed===undefined||computed===inherit){',cc=";",cd='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',ce='qx.core.Assert.assertPositiveNumber(value, msg) || true',cf=".prototype",cg="' including non-existing property '",ch="Boolean",ci='.isEqual.call(this,a,b);};',cj=")}",ck="(a[",cl='(computed, old, "',cm="setRuntime",cn='return value;',co="this.",cp='.check, msg)',cq="if(reg.hasListener(this, '",cr='Does not allow any arguments!',cs='\'";',ct=')a[i].',cu="()",cv=';}',cw="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cx='.$$properties.',cy='value !== null && value.$$type === "Theme"',cz='if(value!==null)',cA="'!",cB="var reg=qx.event.Registration;",cC="())",cD='=value;',cE='function(a,b){return a===b;};',cF='return null;',cG='!==undefined){',cH='qx.core.Assert.assertObject(value, msg) || true',cI='");',cJ='var old=this.',cK='qx.core.Assert.assertString(value, msg) || true',cL='!==undefined&&',cM="\n",cN='var pa=this.getLayoutParent();if(pa)computed=pa.',cO="if (value===undefined) value = parent.",cP='value !== null && value.$$type === "Class"',cQ='qx.core.Assert.assertFunction(value, msg) || true',cR='old=this.',cS="', qx.event.type.Data, [computed, old]",cT='var backup=computed;',cU=".",cV='}',cW='"), msg)',cX="object",cY="$$init_",da='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',db="$$theme_",dc="qx.debug.property.level",dd='if(computed===undefined)computed=null;',de='\' of class \'',df="Unknown reason: ",dg='if(arguments.length!==1)prop.error(this,1,"',dh="init",di='qx.core.Assert.assertMap(value, msg) || true',dj='!(',dk="Generating property wrappers: ",dl="'",dm='qx.core.Assert.assertNumber(value, msg) || true',dn="qx.debug",dp="reg.fireEvent(this, '",dq='Null value is not allowed!',dr='if(value!==inherit)',ds='qx.core.Assert.assertInteger(value, msg) || true',dt="value",du='var computed;',dv="shorthand",dw='computed=this.',dx="Generating property group: ",dy='qx.core.Assert.assertInstance(value, RegExp, msg) || true',dz='value !== null && value.type !== undefined',dA='value !== null && value.document',dB="",dC='throw new Error("Property ',dD="(!this.",dE='qx.core.Assert.assertBoolean(value, msg) || true',dF='if(equ.call(this,this.',dG="qx.aspects",dH=' of an instance of ',dI="toggle",dJ="refresh",dK="$$inherit_",dL='var prop=qx.core.Property;',dM='else this.',dN='if(old===undefined)old=null;',dO="undefined",dP="boolean",dQ='if(equ.call(this,old,computed))return value;',dR=" with incoming value '",dS=')',dT='if(arguments.length!==0)prop.error(this,3,"',dU="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",dV='if(computed===undefined||computed==inherit)computed=null;',dW="qx.core.Property",dX="is",dY=' is not (yet) ready!");',ea="]);",eb='Could not change or apply init value after constructing phase!';qx.Bootstrap.define(dW,{statics:{__A:function(){if(qx.core.Environment.get(bq)){qx.event.type.Data;qx.event.dispatch.Direct;}
;}
,__B:{"Boolean":dE,"String":cK,"Number":dm,"Integer":ds,"PositiveNumber":ce,"PositiveInteger":bs,"Error":E,"RegExp":dy,"Object":cH,"Array":ca,"Map":di,"Function":cQ,"Date":z,"Node":bh,"Element":q,"Document":k,"Window":dA,"Event":dz,"Class":cP,"Mixin":m,"Interface":bA,"Theme":cy,"Color":d,"Decorator":bj,"Font":e},__C:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:R,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{"@":cX,name:bo,dereference:dP,inheritable:dP,nullable:dP,themeable:dP,refine:dP,init:null,apply:bo,event:bo,check:null,transform:bo,deferredInit:dP,validate:null,isEqual:null},$$allowedGroupKeys:{"@":cX,name:bo,group:cX,mode:bo,themeable:dP},$$inheritable:{},__D:function(ee){var ec=this.__E(ee);if(!ec.length){var ed=function(){}
;}
else {ed=this.__F(ec);}
;ee.prototype.$$refreshInheritables=ed;}
,__E:function(ef){var eg=[];while(ef){var eh=ef.$$properties;if(eh){for(var name in this.$$inheritable){if(eh[name]&&eh[name].inheritable){eg.push(name);}
;}
;}
;ef=ef.superclass;}
;return eg;}
,__F:function(inheritables){var inherit=this.$$store.inherit;var init=this.$$store.init;var refresh=this.$$method.refresh;var code=[r,C];for(var i=0,l=inheritables.length;i<l;i++ ){var name=inheritables[i];code.push(bD,inherit[name],cc,cO,init[name],cc,co,refresh[name],bI);}
;return new Function(code.join(dB));}
,attachRefreshInheritables:function(ei){ei.prototype.$$refreshInheritables=function(){qx.core.Property.__D(ei);return this.$$refreshInheritables();}
;}
,attachMethods:function(ek,name,ej){ej.group?this.__G(ek,ej,name):this.__H(ek,ej,name);}
,__G:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);var members=clazz.prototype;var themeable=config.themeable===true;if(qx.core.Environment.get(dn)){if(qx.core.Environment.get(dc)>1){qx.Bootstrap.debug(dx+name);}
;}
;var setter=[];var resetter=[];if(themeable){var styler=[];var unstyler=[];}
;var argHandler=cw;setter.push(argHandler);if(themeable){styler.push(argHandler);}
;if(config.mode==dv){var shorthand=dU;setter.push(shorthand);if(themeable){styler.push(shorthand);}
;}
;for(var i=0,a=config.group,l=a.length;i<l;i++ ){if(qx.core.Environment.get(dn)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error(bv+name+cg+a[i]+cA);}
;}
;setter.push(co,this.$$method.set[a[i]],ck,i,ea);resetter.push(co,this.$$method.reset[a[i]],x);if(themeable){if(qx.core.Environment.get(dn)){if(!this.$$method.setThemed[a[i]]){throw new Error(B+a[i]+M+name+dl);}
;}
;styler.push(co,this.$$method.setThemed[a[i]],ck,i,ea);unstyler.push(co,this.$$method.resetThemed[a[i]],x);}
;}
;this.$$method.set[name]=f+upname;members[this.$$method.set[name]]=new Function(setter.join(dB));this.$$method.reset[name]=bn+upname;members[this.$$method.reset[name]]=new Function(resetter.join(dB));if(themeable){this.$$method.setThemed[name]=bQ+upname;members[this.$$method.setThemed[name]]=new Function(styler.join(dB));this.$$method.resetThemed[name]=j+upname;members[this.$$method.resetThemed[name]]=new Function(unstyler.join(dB));}
;}
,__H:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);var members=clazz.prototype;if(qx.core.Environment.get(dn)){if(qx.core.Environment.get(dc)>1){qx.Bootstrap.debug(dk+name);}
;}
;if(config.dereference===undefined&&typeof config.check===bo){config.dereference=this.__I(config.check);}
;var method=this.$$method;var store=this.$$store;store.runtime[name]=bP+name;store.user[name]=bU+name;store.theme[name]=db+name;store.init[name]=cY+name;store.inherit[name]=dK+name;store.useinit[name]=bE+name;method.get[name]=bz+upname;members[method.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bz);}
;members[method.get[name]].$$install=function(el){qx.core.Property.installOptimizedGetter(this,clazz,name,bz,arguments);}
;method.set[name]=f+upname;members[method.set[name]]=function(em){return qx.core.Property.executeOptimizedSetter(this,clazz,name,f,arguments);}
;members[method.set[name]].$$install=function(en){qx.core.Property.installOptimizedSetter(this,clazz,name,f,arguments);}
;method.reset[name]=bn+upname;members[method.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bn);}
;members[method.reset[name]].$$install=function(){qx.core.Property.installOptimizedSetter(this,clazz,name,bn);}
;if(config.inheritable||config.apply||config.event||config.deferredInit){method.init[name]=dh+upname;members[method.init[name]]=function(eo){return qx.core.Property.executeOptimizedSetter(this,clazz,name,dh,arguments);}
;if(qx.core.Environment.get(dn)){members[method.init[name]].$$propertyMethod=true;}
;}
;if(config.inheritable){method.refresh[name]=dJ+upname;members[method.refresh[name]]=function(ep){return qx.core.Property.executeOptimizedSetter(this,clazz,name,dJ,arguments);}
;if(qx.core.Environment.get(dn)){members[method.refresh[name]].$$propertyMethod=true;}
;}
;method.setRuntime[name]=cm+upname;members[method.setRuntime[name]]=function(eq){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cm,arguments);}
;method.resetRuntime[name]=be+upname;members[method.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,be);}
;if(config.themeable){method.setThemed[name]=bQ+upname;members[method.setThemed[name]]=function(er){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bQ,arguments);}
;method.resetThemed[name]=j+upname;members[method.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,j);}
;if(qx.core.Environment.get(dn)){members[method.setThemed[name]].$$propertyMethod=true;members[method.resetThemed[name]].$$propertyMethod=true;}
;}
;if(config.check===ch){members[dI+upname]=new Function(br+method.set[name]+dD+method.get[name]+cC);members[dX+upname]=new Function(br+method.get[name]+cu);if(qx.core.Environment.get(dn)){members[dI+upname].$$propertyMethod=true;members[dX+upname].$$propertyMethod=true;}
;}
;if(qx.core.Environment.get(dn)){members[method.get[name]].$$propertyMethod=true;members[method.set[name]].$$propertyMethod=true;members[method.reset[name]].$$propertyMethod=true;members[method.setRuntime[name]].$$propertyMethod=true;members[method.resetRuntime[name]].$$propertyMethod=true;}
;}
,__I:function(es){return !!this.__C[es];}
,__J:{'0':eb,'1':bL,'2':G,'3':cr,'4':dq,'5':W},error:function(et,eA,ez,eu,ev){var ew=et.constructor.classname;var ey=s+ez+bg+ew+D+this.$$method[eu][ez]+dR+ev+bf;throw new Error(ey+(this.__J[eA]||df+eA));}
,__K:function(eE,eF,name,eD,eB,eC){var eG=this.__L(eE,eF,name,eD,eB,eC);if(eC===undefined){return eG.call(eE);}
else if(qx.core.Environment.get(dn)){return eG.apply(eE,eC);}
else {return eG.call(eE,eC[0]);}
;}
,__L:function(instance,members,name,variant,code,args){var store=this.$$method[variant][name];if(qx.core.Environment.get(dn)){if(qx.core.Environment.get(dc)>1){qx.Bootstrap.debug(bt+this.$$method[variant][name]+P+code.join(dB));}
;try{members[store]=new Function(dt,code.join(dB));}
catch(eH){throw new Error(bc+this.$$method[variant][name]+cM+code.join(dB));}
;}
else {members[store]=new Function(dt,code.join(dB));}
;if(qx.core.Environment.get(dG)){members[store]=qx.core.Aspect.wrap(instance.classname+cU+store,members[store],u);}
;qx.Bootstrap.setDisplayName(members[store],instance.classname+cf,store);return instance[store];}
,executeOptimizedGetter:function(eL,eK,name,eJ){var eI=this.__M(eL,eK,name,eJ);var eM=eK.prototype;return this.__K(eL,eM,name,eJ,eI);}
,installOptimizedGetter:function(eQ,eP,name,eO){var eN=this.__M(eQ,eP,name,eO);var eR=eP.prototype;this.__L(eQ,eR,name,eO,eN);}
,__M:function(eV,eU,name,eT){var eW=eU.$$properties[name];var eS=[];var eX=this.$$store;eS.push(S,eX.runtime[name],bW);eS.push(T,eX.runtime[name],h);if(eW.inheritable){eS.push(U,eX.inherit[name],bW);eS.push(T,eX.inherit[name],h);eS.push(K);}
;eS.push(S,eX.user[name],bW);eS.push(T,eX.user[name],h);if(eW.themeable){eS.push(U,eX.theme[name],bW);eS.push(T,eX.theme[name],h);}
;if(eW.deferredInit&&eW.init===undefined){eS.push(U,eX.init[name],bW);eS.push(T,eX.init[name],h);}
;eS.push(K);if(eW.init!==undefined){if(eW.inheritable){eS.push(o,eX.init[name],h);if(eW.nullable){eS.push(bx);}
;eS.push(n);}
else {eS.push(T,eX.init[name],h);}
;}
else if(eW.inheritable||eW.nullable){eS.push(cF);}
else {eS.push(dC,name,dH,eU.classname,dY);}
;return eS;}
,executeOptimizedSetter:function(fd,fc,name,fb,fa){var eY=this.__N(fd,fc,name,fb,fa);var fe=fc.prototype;return this.__K(fd,fe,name,fb,eY,fa);}
,installOptimizedSetter:function(fj,fi,name,fh,fg){var ff=this.__N(fj,fi,name,fh,fg);var fk=fi.prototype;return this.__L(fj,fk,name,fh,ff,fg);}
,__N:function(fs,fr,name,fq,fp){var fu=fr.$$properties[name];var ft=fr.prototype;var fm=[];var fl=fq===f||fq===bQ||fq===cm||(fq===dh&&fu.init===undefined);var fo=fu.apply||fu.event||fu.inheritable;var fv=this.__O(fq,name);this.__P(fm,fr,fu,name);this.__Q(fm,fu,name,fq,fl);if(fl||fo){this.__W(fm,fu,name);}
;if(fl){this.__R(fm,fr,fu,name);}
;if(fo){this.__S(fm,fl,fv,fq);}
;if(fu.inheritable){fm.push(bB);}
;if(qx.core.Environment.get(dn)){if(fl){this.__T(fm,fu,fr,name,fq);}
;}
;if(!fo){this.__U(fm,name,fq,fl);}
else {this.__V(fm,fu,name,fq,fl);}
;if(fu.inheritable){this.__X(fm,fu,name,fq);}
else if(fo){this.__Y(fm,fu,name,fq);}
;if(fo){this.__ba(fm,fu,name,fq);if(fu.inheritable&&ft._getChildren){this.__bb(fm,name);}
;}
;if(fl){fm.push(cn);}
;return fm;}
,__O:function(fw,name){if(fw===cm||fw===be){var fx=this.$$store.runtime[name];}
else if(fw===bQ||fw===j){fx=this.$$store.theme[name];}
else if(fw===dh){fx=this.$$store.init[name];}
else {fx=this.$$store.user[name];}
;return fx;}
,__P:function(fy,fB,fz,name){fy.push(bT);if(typeof fz.isEqual===g){fy.push(bm,fB.classname,cx,name,ci);}
else if(typeof fz.isEqual===bo){var fA=fB.prototype;if(fA[fz.isEqual]!==undefined){fy.push(bK,fz.isEqual,h);}
else {fy.push(bl,fz.isEqual,bJ);}
;}
else if(typeof fz.isEqual===dO){fy.push(cE);}
else {throw new Error(J+b+name+bH+fB.classname+dl);}
;}
,__Q:function(fE,fC,name,fF,fD){if(qx.core.Environment.get(dn)){fE.push(dL);if(fF===dh){fE.push(bR,name,bw,fF,bM);}
;if(fF===dJ){}
else if(fD){fE.push(dg,name,bw,fF,bM);fE.push(X,name,bw,fF,bM);}
else {fE.push(dT,name,bw,fF,bM);}
;}
else {if(!fC.nullable||fC.check||fC.inheritable){fE.push(dL);}
;if(fF===f){fE.push(X,name,bw,fF,bM);}
;}
;}
,__R:function(fG,fI,fH,name){if(fH.transform){fG.push(bu,fH.transform,p);}
;if(fH.validate){if(typeof fH.validate===bo){fG.push(bK,fH.validate,bG);}
else if(fH.validate instanceof Function){fG.push(fI.classname,cx,name);fG.push(y);}
;}
;}
,__S:function(fK,fJ,fM,fL){var fN=(fL===bn||fL===j||fL===be);if(fJ){fK.push(dF,fM,Q);}
else if(fN){fK.push(S,fM,bi);}
;}
,__T:qx.core.Environment.select(dn,{"true":function(fP,fO,fR,name,fQ){if(!fO.nullable){fP.push(bV,name,bw,fQ,bM);}
;if(fO.check!==undefined){fP.push(c+name+de+fR.classname+cs);if(fO.nullable){fP.push(cz);}
;if(fO.inheritable){fP.push(dr);}
;fP.push(I);if(this.__B[fO.check]!==undefined){fP.push(dj,this.__B[fO.check],dS);}
else if(qx.Class.isDefined(fO.check)){fP.push(bS,fO.check,cW);}
else if(qx.Interface&&qx.Interface.isDefined(fO.check)){fP.push(da,fO.check,cW);}
else if(typeof fO.check===g){fP.push(bY,fR.classname,cx,name);fP.push(v);}
else if(typeof fO.check===bo){fP.push(dj,fO.check,dS);}
else if(fO.check instanceof Array){fP.push(by,fR.classname,cx,name,cp);}
else {throw new Error(bk+name+bg+fR.classname);}
;fP.push(bC,name,bw,fQ,bM);}
;}
,"false":undefined}),__U:function(fT,name,fU,fS){if(fU===cm){fT.push(bK,this.$$store.runtime[name],cD);}
else if(fU===be){fT.push(S,this.$$store.runtime[name],bW);fT.push(bd,this.$$store.runtime[name],h);}
else if(fU===f){fT.push(bK,this.$$store.user[name],cD);}
else if(fU===bn){fT.push(S,this.$$store.user[name],bW);fT.push(bd,this.$$store.user[name],h);}
else if(fU===bQ){fT.push(bK,this.$$store.theme[name],cD);}
else if(fU===j){fT.push(S,this.$$store.theme[name],bW);fT.push(bd,this.$$store.theme[name],h);}
else if(fU===dh&&fS){fT.push(bK,this.$$store.init[name],cD);}
;}
,__V:function(fX,fV,name,fY,fW){fX.push(du);fX.push(S,this.$$store.runtime[name],cG);if(fY===cm){fX.push(dw,this.$$store.runtime[name],cD);}
else if(fY===be){fX.push(bd,this.$$store.runtime[name],h);fX.push(S,this.$$store.user[name],bW);fX.push(dw,this.$$store.user[name],h);fX.push(U,this.$$store.theme[name],bW);fX.push(dw,this.$$store.theme[name],h);fX.push(U,this.$$store.init[name],cG);fX.push(dw,this.$$store.init[name],h);fX.push(bK,this.$$store.useinit[name],L);fX.push(cV);}
else {fX.push(dw,this.$$store.runtime[name],h);if(fY===f){fX.push(bK,this.$$store.user[name],cD);}
else if(fY===bn){fX.push(bd,this.$$store.user[name],h);}
else if(fY===bQ){fX.push(bK,this.$$store.theme[name],cD);}
else if(fY===j){fX.push(bd,this.$$store.theme[name],h);}
else if(fY===dh&&fW){fX.push(bK,this.$$store.init[name],cD);}
;}
;fX.push(cV);fX.push(U,this.$$store.user[name],cG);if(fY===f){fX.push(dw,this.$$store.user[name],cD);}
else if(fY===bn){fX.push(bd,this.$$store.user[name],h);fX.push(S,this.$$store.runtime[name],bW);fX.push(dw,this.$$store.runtime[name],h);fX.push(S,this.$$store.theme[name],bW);fX.push(dw,this.$$store.theme[name],h);fX.push(U,this.$$store.init[name],cG);fX.push(dw,this.$$store.init[name],h);fX.push(bK,this.$$store.useinit[name],L);fX.push(cV);}
else {if(fY===cm){fX.push(dw,this.$$store.runtime[name],cD);}
else if(fV.inheritable){fX.push(dw,this.$$store.user[name],h);}
else {fX.push(dw,this.$$store.user[name],h);}
;if(fY===bQ){fX.push(bK,this.$$store.theme[name],cD);}
else if(fY===j){fX.push(bd,this.$$store.theme[name],h);}
else if(fY===dh&&fW){fX.push(bK,this.$$store.init[name],cD);}
;}
;fX.push(cV);if(fV.themeable){fX.push(U,this.$$store.theme[name],cG);if(fY===cm){fX.push(dw,this.$$store.runtime[name],cD);}
else if(fY===f){fX.push(dw,this.$$store.user[name],cD);}
else if(fY===bQ){fX.push(dw,this.$$store.theme[name],cD);}
else if(fY===j){fX.push(bd,this.$$store.theme[name],h);fX.push(S,this.$$store.init[name],cG);fX.push(dw,this.$$store.init[name],h);fX.push(bK,this.$$store.useinit[name],L);fX.push(cV);}
else if(fY===dh){if(fW){fX.push(bK,this.$$store.init[name],cD);}
;fX.push(dw,this.$$store.theme[name],h);}
else if(fY===dJ){fX.push(dw,this.$$store.theme[name],h);}
;fX.push(cV);}
;fX.push(U,this.$$store.useinit[name],bX);if(fY===dh){if(fW){fX.push(dw,this.$$store.init[name],cD);}
else {fX.push(dw,this.$$store.init[name],h);}
;}
else if(fY===f||fY===cm||fY===bQ||fY===dJ){fX.push(bd,this.$$store.useinit[name],h);if(fY===cm){fX.push(dw,this.$$store.runtime[name],cD);}
else if(fY===f){fX.push(dw,this.$$store.user[name],cD);}
else if(fY===bQ){fX.push(dw,this.$$store.theme[name],cD);}
else if(fY===dJ){fX.push(dw,this.$$store.init[name],h);}
;}
;fX.push(cV);if(fY===f||fY===cm||fY===bQ||fY===dh){fX.push(A);if(fY===cm){fX.push(dw,this.$$store.runtime[name],cD);}
else if(fY===f){fX.push(dw,this.$$store.user[name],cD);}
else if(fY===bQ){fX.push(dw,this.$$store.theme[name],cD);}
else if(fY===dh){if(fW){fX.push(dw,this.$$store.init[name],cD);}
else {fX.push(dw,this.$$store.init[name],h);}
;fX.push(bK,this.$$store.useinit[name],L);}
;fX.push(cV);}
;}
,__W:function(ga,gb,name){if(gb.inheritable){ga.push(cJ,this.$$store.inherit[name],h);}
else {ga.push(t);}
;ga.push(S,this.$$store.runtime[name],cG);ga.push(cR,this.$$store.runtime[name],h);ga.push(cV);if(!gb.inheritable){ga.push(U,this.$$store.user[name],cG);ga.push(cR,this.$$store.user[name],h);ga.push(cV);if(gb.themeable){ga.push(U,this.$$store.theme[name],cG);ga.push(cR,this.$$store.theme[name],h);ga.push(cV);}
;ga.push(U,this.$$store.useinit[name],bX);ga.push(cR,this.$$store.init[name],h);ga.push(cV);}
;}
,__X:function(gd,gc,name,ge){gd.push(cb);if(ge===dJ){gd.push(bN);}
else {gd.push(cN,this.$$store.inherit[name],h);}
;gd.push(w);gd.push(bK,this.$$store.init[name],cL);gd.push(bK,this.$$store.init[name],V);gd.push(dw,this.$$store.init[name],h);gd.push(bK,this.$$store.useinit[name],L);gd.push(bO);gd.push(bd,this.$$store.useinit[name],cv);gd.push(cV);gd.push(dQ);gd.push(O);gd.push(bF,this.$$store.inherit[name],h);gd.push(cV);gd.push(bb);gd.push(bd,this.$$store.inherit[name],h);gd.push(dM,this.$$store.inherit[name],F);gd.push(cT);if(gc.init!==undefined&&ge!==dh){gd.push(N,this.$$store.init[name],cc);}
else {gd.push(dN);}
;gd.push(dV);}
,__Y:function(gg,gf,name,gh){if(gh!==f&&gh!==cm&&gh!==bQ){gg.push(dd);}
;gg.push(dQ);if(gf.init!==undefined&&gh!==dh){gg.push(N,this.$$store.init[name],cc);}
else {gg.push(dN);}
;}
,__ba:function(gj,gi,name,gk){if(gi.apply){gj.push(bK,gi.apply,cl,name,Y,gk,cI);}
;if(gi.event){gj.push(cB,cq,gi.event,bp,dp,gi.event,cS,cj);}
;}
,__bb:function(gl,name){gl.push(cd);gl.push(ba,this.$$method.refresh[name],ct,this.$$method.refresh[name],H);gl.push(cV);}
}});}
)();
(function(){var b=': ',c="The mixin to include into class '",d="constructor",e="' is abstract! It is not possible to instantiate it.",f="environment",g='"! The value is undefined: ',h="Property module disabled.",j='Invalid check definition of property "',k="singleton",m="qx.event.type.Data",n='Forbidden environment setting "',o='". It is forbidden to define a default setting for an external namespace!',p=": the event value needs to be a string with the class name of the event object which will be fired.",q='Invalid include definition in class "',r=" could not refine property: ",s='Invalid config in class "',t="toString",u="! Key: ",v="events",w='Invalid type of key "',x='Invalid transform definition of property "',y="@",z="Interface",A='Annonation for static "',B="Please initialize '",C='Assumed static class because no "extend" key was found. ',D="'.",E="' objects using the new keyword!",F=": the event value/type cannot be changed from ",G="destructor",H="destruct",I='"! The value is undefined/null!',J='" of Class "',K='" contains an invalid mixin at position ',L='Annonation for "',M="Could not refine an init value if there was previously no init value defined. Property '",N='" of property "',O='Interface "',P="extend",Q="module.property",R='Error in include definition of class "',S="string",T='Overwriting member "',U="module.events",V='Cannot annotate private member "',W='" definition for class "',X="@destruct",Y="members",cH='". It is forbidden to define a ',cI="' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.",cJ=" already has a property: ",cD="Events module not enabled.",cE="The mixin to patch class '",cF="' of class: '",cG='"!',cO='"extend" parameter is null or undefined',cP='.',cV="' is undefined/null!",cQ=" could not be refined!",cK="Could not refine non-existent property: '",cL=".prototype",cM="function",cN='The configuration key "',cU='" is not allowed!',dy=": the events must be defined as map!",eh="static",cW='undefined',cR='"! The type of the key must be "',cS='extend',ed='Cannot annotate private static "',cT="refine",cX="!",cY='@',da="properties",df="'!",dg='"! ',dh="_",db="The class '",dc="Class",dd='"! The value needs to be a map!',de='Forbidden variant "',dl='"! Needs to be a String.',dm='"! Only interfaces and arrays of interfaces are allowed!',dn='The include definition in class "',dp='" found in "',di=".",dj='". It is forbidden to define a variant for an external namespace!',ee="object",dk="$$init_",dt='"! Only mixins and arrays of mixins are allowed!',du='!',eg='"! Needs to be a String, Array or Function.',dv='"! Every non-static class has to extend at least the "qx.core.Object" class.',dq="init",dr='" without a "refine" flag in the property definition! This class: ',ef="qx.aspects",ds="Incomplete parameters!",dw="@construct",dx='" does not exist!',dJ="Class ",dI="Array",dH="variants",dN='The implement definition in class "',dM='" is already used by Class "',dL='Overwriting private member "',dK='Invalid type "',dC="/",dB="statics",dA='Invalid key "',dz=" to ",dG="' of class '",dF="",dE="]",dD="member",dU=', original class: ',dT='" contains an invalid interface at position ',dS="qx.Class",dR='Could not refine property "',dY="Mixin",dX="settings",dW="[Class ",dV="abstract",dQ='environment setting for an external namespace!',dP='" in class "',dO="The class ',",ec='Invalid implement definition in class "',eb="qx.debug",ea='Forbidden setting "';qx.Bootstrap.define(dS,{statics:{__bc:qx.core.Environment.get(Q)?qx.core.Property:null,define:function(name,el){if(!el){el={};}
;if(el.include&&!(qx.Bootstrap.getClass(el.include)===dI)){el.include=[el.include];}
;if(el.implement&&!(qx.Bootstrap.getClass(el.implement)===dI)){el.implement=[el.implement];}
;var ei=false;if(!el.hasOwnProperty(P)&&!el.type){el.type=eh;ei=true;}
;if(qx.core.Environment.get(eb)){try{this.__t(name,el);}
catch(em){if(ei){em.message=C+em.message;}
;throw em;}
;}
;var ej=this.__bg(name,el.type,el.extend,el.statics,el.construct,el.destruct,el.include);[y,dw,X].forEach(function(en){this.__bf(ej,en,null,el[en]);}
,this);if(el.extend){if(el.properties){this.__bi(ej,el.properties,true);}
;if(el.members){this.__bk(ej,el.members,true,true,false);}
;if(el.events){this.__bh(ej,el.events,true);}
;if(el.include){for(var i=0,l=el.include.length;i<l;i++ ){this.__bo(ej,el.include[i],false);}
;}
;}
else if(el.hasOwnProperty(cS)&&qx.core.Environment.get(eb)){throw new Error(cO);}
;if(el.environment){for(var ek in el.environment){qx.core.Environment.add(ek,el.environment[ek]);}
;}
;if(el.implement){for(var i=0,l=el.implement.length;i<l;i++ ){this.__bm(ej,el.implement[i]);}
;}
;if(qx.core.Environment.get(eb)){this.__be(ej);}
;if(el.defer){el.defer.self=ej;qx.Bootstrap.addPendingDefer(ej,function(){el.defer(ej,ej.prototype,{add:function(name,eo){var ep={};ep[name]=eo;qx.Class.__bi(ej,ep,true);}
});}
);}
;return ej;}
,undefine:function(name){delete this.$$registry[name];var es=name.split(di);var er=[window];for(var i=0;i<es.length;i++ ){er.push(er[i][es[i]]);}
;for(var i=er.length-1;i>=1;i-- ){var eq=er[i];var parent=er[i-1];if(qx.Bootstrap.isFunction(eq)||qx.Bootstrap.objectGetLength(eq)===0){delete parent[es[i-1]];}
else {break;}
;}
;}
,isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,getByName:qx.Bootstrap.getByName,include:function(eu,et){if(qx.core.Environment.get(eb)){if(!et){throw new Error(c+eu.classname+cV);}
;qx.Mixin.isCompatible(et,eu);}
;qx.Class.__bo(eu,et,false);}
,patch:function(ew,ev){if(qx.core.Environment.get(eb)){if(!ev){throw new Error(cE+ew.classname+cV);}
;qx.Mixin.isCompatible(ev,ew);}
;qx.Class.__bo(ew,ev,true);}
,isSubClassOf:function(ez,ey){if(!ez){return false;}
;if(ez==ey){return true;}
;if(ez.prototype instanceof ey){return true;}
;return false;}
,getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(eB){var eA=[];while(eB){if(eB.$$properties){eA.push.apply(eA,Object.keys(eB.$$properties));}
;eB=eB.superclass;}
;return eA;}
,getByProperty:function(eC,name){while(eC){if(eC.$$properties&&eC.$$properties[name]){return eC;}
;eC=eC.superclass;}
;return null;}
,hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(eE,eD){return eE.$$includes&&eE.$$includes.indexOf(eD)!==-1;}
,getByMixin:function(eH,eG){var eF,i,l;while(eH){if(eH.$$includes){eF=eH.$$flatIncludes;for(i=0,l=eF.length;i<l;i++ ){if(eF[i]===eG){return eH;}
;}
;}
;eH=eH.superclass;}
;return null;}
,getMixins:qx.util.OOUtil.getMixins,hasMixin:function(eJ,eI){return !!this.getByMixin(eJ,eI);}
,hasOwnInterface:function(eL,eK){return eL.$$implements&&eL.$$implements.indexOf(eK)!==-1;}
,getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(eN){var eM=[];while(eN){if(eN.$$implements){eM.push.apply(eM,eN.$$flatImplements);}
;eN=eN.superclass;}
;return eM;}
,hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(eP,eO){var eQ=eP.constructor;if(this.hasInterface(eQ,eO)){return true;}
;if(qx.Interface.objectImplements(eP,eO)){return true;}
;if(qx.Interface.classImplements(eQ,eO)){return true;}
;return false;}
,getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;this.$$instance=new this();delete this.$$allowconstruct;}
;return this.$$instance;}
,getSubclasses:function(eR){if(!eR){return null;}
;var eS={};var eT=qx.Class.$$registry;for(var name in eT){if(eT[name].superclass&&eT[name].superclass==eR){eS[name]=eT[name];}
;}
;return eS;}
,genericToString:function(){return dW+this.classname+dE;}
,$$registry:qx.Bootstrap.$$registry,__s:qx.core.Environment.select(eb,{"true":{"@":ee,"@construct":ee,"@destruct":ee,"type":S,"extend":cM,"implement":ee,"include":ee,"construct":cM,"statics":ee,"properties":ee,"members":ee,"environment":ee,"events":ee,"defer":cM,"destruct":cM},"default":null}),__bd:qx.core.Environment.select(eb,{"true":{"@":ee,"type":S,"statics":ee,"environment":ee,"defer":cM},"default":null}),__t:qx.core.Environment.select(eb,{"true":function(name,eX){if(eX.type&&!(eX.type===eh||eX.type===dV||eX.type===k)){throw new Error(dK+eX.type+W+name+cG);}
;if(eX.type&&eX.type!==eh&&!eX.extend){throw new Error(s+name+dv);}
;var eW=eX.type===eh?this.__bd:this.__s;for(var eV in eX){if(!eW[eV]){throw new Error(cN+eV+dP+name+cU);}
;if(eX[eV]==null){throw new Error(dA+eV+dP+name+I);}
;if(typeof eX[eV]!==eW[eV]){throw new Error(w+eV+dP+name+cR+eW[eV]+cG);}
;}
;var eU=[dB,da,Y,f,dX,dH,v];for(var i=0,l=eU.length;i<l;i++ ){var eV=eU[i];if(eX[eV]!==undefined&&(eX[eV].$$hash!==undefined||!qx.Bootstrap.isObject(eX[eV]))){throw new Error(dA+eV+dP+name+dd);}
;}
;if(eX.include){if(qx.Bootstrap.getClass(eX.include)===dI){for(var i=0,a=eX.include,l=a.length;i<l;i++ ){if(a[i]==null||a[i].$$type!==dY){throw new Error(dn+name+K+i+b+a[i]);}
;}
;}
else {throw new Error(q+name+dt);}
;}
;if(eX.implement){if(qx.Bootstrap.getClass(eX.implement)===dI){for(var i=0,a=eX.implement,l=a.length;i<l;i++ ){if(a[i]==null||a[i].$$type!==z){throw new Error(dN+name+dT+i+b+a[i]);}
;}
;}
else {throw new Error(ec+name+dm);}
;}
;if(eX.include){try{qx.Mixin.checkCompatibility(eX.include);}
catch(eY){throw new Error(R+name+dg+eY.message);}
;}
;if(eX.environment){for(var eV in eX.environment){if(eV.substr(0,eV.indexOf(di))!=name.substr(0,name.indexOf(di))){throw new Error(n+eV+dp+name+cH+dQ);}
;}
;}
;if(eX.settings){for(var eV in eX.settings){if(eV.substr(0,eV.indexOf(di))!=name.substr(0,name.indexOf(di))){throw new Error(ea+eV+dp+name+o);}
;}
;}
;if(eX.variants){for(var eV in eX.variants){if(eV.substr(0,eV.indexOf(di))!=name.substr(0,name.indexOf(di))){throw new Error(de+eV+dp+name+dj);}
;}
;}
;}
,"default":function(name,fa){}
}),__be:qx.core.Environment.select(eb,{"true":function(fd){var fc=fd.superclass;while(fc){if(fc.$$classtype!==dV){break;}
;var fb=fc.$$implements;if(fb){for(var i=0;i<fb.length;i++ ){qx.Interface.assert(fd,fb[i],true);}
;}
;fc=fc.superclass;}
;}
,"default":function(fe){}
}),__bf:function(fi,fg,fh,ff){if(ff!==undefined){if(fi.$$annotations===undefined){fi.$$annotations={};fi.$$annotations[fg]={};}
else if(fi.$$annotations[fg]===undefined){fi.$$annotations[fg]={};}
;if(!qx.lang.Type.isArray(ff)){ff=[ff];}
;if(fh){fi.$$annotations[fg][fh]=ff;}
else {fi.$$annotations[fg]=ff;}
;}
;}
,__bg:function(name,ft,fs,fj,fq,fn,fm){var fp=function(){return (typeof this==cW);}
;var fo;if(!fs&&qx.core.Environment.get(ef)==false){fo=fj||{};qx.Bootstrap.setDisplayNames(fo,name);}
else {fo={};if(fs){if(!fq){fq=this.__bp();}
;if(this.__bq(fs,fm)){fo=this.__br(fq,name,ft);}
else {fo=fq;}
;if(ft===k){fo.getInstance=this.getInstance;}
;qx.Bootstrap.setDisplayName(fq,name,d);}
;if(fj){qx.Bootstrap.setDisplayNames(fj,name);var fr;for(var i=0,a=Object.keys(fj),l=a.length;i<l;i++ ){fr=a[i];var fk=fj[fr];if(qx.core.Environment.get(eb)){if(fr.charAt(0)===cY){if(fj[fr.substring(1)]===undefined){throw new Error(A+fr.substring(1)+J+fo.classname+dx);}
;if(fr.charAt(1)===dh&&fr.charAt(2)===dh){throw new Error(ed+fr.substring(1)+J+fo.classname);}
;}
;}
;if(fr.charAt(0)===cY){continue;}
;if(qx.core.Environment.get(ef)){if(fk instanceof Function){fk=qx.core.Aspect.wrap(name+di+fr,fk,eh);}
;fo[fr]=fk;}
else {fo[fr]=fk;}
;this.__bf(fo,dB,fr,fj[y+fr]);}
;}
;}
;var fl=name?qx.Bootstrap.createNamespace(name,fo):dF;fo.classname=name;if(!fp()){try{fo.name=name;}
catch(fu){}
;}
;fo.basename=fl;fo.$$type=dc;if(ft){fo.$$classtype=ft;}
;if(!fo.hasOwnProperty(t)){fo.toString=this.genericToString;}
;if(fs){qx.Bootstrap.extendClass(fo,fq,fs,name,fl);if(fn){if(qx.core.Environment.get(ef)){fn=qx.core.Aspect.wrap(name,fn,G);}
;fo.$$destructor=fn;qx.Bootstrap.setDisplayName(fn,name,H);}
;}
;this.$$registry[name]=fo;return fo;}
,__bh:function(fv,fw,fy){if(qx.core.Environment.get(eb)){if(typeof fw!==ee||qx.Bootstrap.getClass(fw)===dI){throw new Error(fv.classname+dy);}
;for(var fx in fw){if(typeof fw[fx]!==S){throw new Error(fv.classname+dC+fx+p);}
;}
;if(fv.$$events&&fy!==true){for(var fx in fw){if(fv.$$events[fx]!==undefined&&fv.$$events[fx]!==fw[fx]){throw new Error(fv.classname+dC+fx+F+fv.$$events[fx]+dz+fw[fx]);}
;}
;}
;}
;if(fv.$$events){for(var fx in fw){fv.$$events[fx]=fw[fx];}
;}
else {fv.$$events=fw;}
;}
,__bi:function(fA,fD,fB){if(!qx.core.Environment.get(Q)){throw new Error(h);}
;var fC;if(fB===undefined){fB=false;}
;var fz=fA.prototype;for(var name in fD){fC=fD[name];if(qx.core.Environment.get(eb)){this.__bj(fA,name,fC,fB);}
;fC.name=name;if(!fC.refine){if(fA.$$properties===undefined){fA.$$properties={};}
;fA.$$properties[name]=fC;}
;if(fC.init!==undefined){fA.prototype[dk+name]=fC.init;}
;if(fC.event!==undefined){if(!qx.core.Environment.get(U)){throw new Error(cD);}
;var event={};event[fC.event]=m;this.__bh(fA,event,fB);}
;if(fC.inheritable){this.__bc.$$inheritable[name]=true;if(!fz.$$refreshInheritables){this.__bc.attachRefreshInheritables(fA);}
;}
;if(!fC.refine){this.__bc.attachMethods(fA,name,fC);}
;this.__bf(fA,da,name,fC[y]);}
;}
,__bj:qx.core.Environment.select(eb,{"true":function(fE,name,fK,fG){if(!qx.core.Environment.get(Q)){throw new Error(h);}
;var fJ=this.hasProperty(fE,name);if(fJ){var fF=this.getPropertyDefinition(fE,name);if(fK.refine&&fF.init===undefined){throw new Error(M+name+dG+fE.classname+D);}
;}
;if(!fJ&&fK.refine){throw new Error(cK+name+cF+fE.classname+df);}
;if(fJ&&!fG){throw new Error(dJ+fE.classname+cJ+name+cX);}
;if(fJ&&fG){if(!fK.refine){throw new Error(dR+name+dr+fE.classname+dU+this.getByProperty(fE,name).classname+cP);}
;for(var fH in fK){if(fH!==dq&&fH!==cT&&fH!==y){throw new Error(dJ+fE.classname+r+name+u+fH+cQ);}
;}
;}
;var fI=fK.group?this.__bc.$$allowedGroupKeys:this.__bc.$$allowedKeys;for(var fH in fK){if(fI[fH]===undefined){throw new Error(cN+fH+N+name+dP+fE.classname+cU);}
;if(fK[fH]===undefined){throw new Error(dA+fH+N+name+dP+fE.classname+g+fK[fH]);}
;if(fI[fH]!==null&&typeof fK[fH]!==fI[fH]){throw new Error(w+fH+N+name+dP+fE.classname+cR+fI[fH]+cG);}
;}
;if(fK.transform!=null){if(!(typeof fK.transform===S)){throw new Error(x+name+dP+fE.classname+dl);}
;}
;if(fK.check!=null){if(!qx.Bootstrap.isString(fK.check)&&!qx.Bootstrap.isArray(fK.check)&&!qx.Bootstrap.isFunction(fK.check)){throw new Error(j+name+dP+fE.classname+eg);}
;}
;}
,"default":null}),__bk:function(fS,fL,fN,fP,fR){var fM=fS.prototype;var fQ,fO;qx.Bootstrap.setDisplayNames(fL,fS.classname+cL);for(var i=0,a=Object.keys(fL),l=a.length;i<l;i++ ){fQ=a[i];fO=fL[fQ];if(qx.core.Environment.get(eb)){if(fQ.charAt(0)===cY){var fT=fQ.substring(1);if(fL[fT]===undefined&&fM[fT]===undefined){throw new Error(L+fT+J+fS.classname+dx);}
;if(fQ.charAt(1)===dh&&fQ.charAt(2)===dh){throw new Error(V+fQ.substring(1)+J+fS.classname);}
;}
else {if(fM[fQ]!==undefined&&fQ.charAt(0)===dh&&fQ.charAt(1)===dh){throw new Error(dL+fQ+J+fS.classname+cU);}
;if(fN!==true&&fM.hasOwnProperty(fQ)){throw new Error(T+fQ+J+fS.classname+cU);}
;}
;}
;if(fQ.charAt(0)===cY){var fT=fQ.substring(1);if(fL[fT]===undefined){this.__bf(fS,Y,fT,fL[fQ]);}
;continue;}
;if(fM[fQ]!=undefined&&fM[fQ].$$install){fM[fQ].$$install();}
;if(fP!==false&&fO instanceof Function&&fO.$$type==null){if(fR==true){fO=this.__bl(fO,fM[fQ]);}
else {if(fM[fQ]){fO.base=fM[fQ];}
;fO.self=fS;}
;if(qx.core.Environment.get(ef)){fO=qx.core.Aspect.wrap(fS.classname+di+fQ,fO,dD);}
;}
;fM[fQ]=fO;this.__bf(fS,Y,fQ,fL[y+fQ]);}
;}
,__bl:function(fU,fV){if(fV){return function(){var fX=fU.base;fU.base=fV;var fW=fU.apply(this,arguments);fU.base=fX;return fW;}
;}
else {return fU;}
;}
,__bm:function(gb,fY){if(qx.core.Environment.get(eb)){if(!gb||!fY){throw new Error(ds);}
;if(this.hasOwnInterface(gb,fY)){throw new Error(O+fY.name+dM+gb.classname+du);}
;if(gb.$$classtype!==dV){qx.Interface.assert(gb,fY,true);}
;}
;var ga=qx.Interface.flatten([fY]);if(gb.$$implements){gb.$$implements.push(fY);gb.$$flatImplements.push.apply(gb.$$flatImplements,ga);}
else {gb.$$implements=[fY];gb.$$flatImplements=ga;}
;}
,__bn:function(gd){var name=gd.classname;var gc=this.__br(gd,name,gd.$$classtype);for(var i=0,a=Object.keys(gd),l=a.length;i<l;i++ ){ge=a[i];gc[ge]=gd[ge];}
;gc.prototype=gd.prototype;var gg=gd.prototype;for(var i=0,a=Object.keys(gg),l=a.length;i<l;i++ ){ge=a[i];var gh=gg[ge];if(gh&&gh.self==gd){gh.self=gc;}
;}
;for(var ge in this.$$registry){var gf=this.$$registry[ge];if(!gf){continue;}
;if(gf.base==gd){gf.base=gc;}
;if(gf.superclass==gd){gf.superclass=gc;}
;if(gf.$$original){if(gf.$$original.base==gd){gf.$$original.base=gc;}
;if(gf.$$original.superclass==gd){gf.$$original.superclass=gc;}
;}
;}
;qx.Bootstrap.createNamespace(name,gc);this.$$registry[name]=gc;return gc;}
,__bo:function(gn,gl,gk){if(qx.core.Environment.get(eb)){if(!gn||!gl){throw new Error(ds);}
;}
;if(this.hasMixin(gn,gl)){return;}
;var gi=gn.$$original;if(gl.$$constructor&&!gi){gn=this.__bn(gn);}
;var gj=qx.Mixin.flatten([gl]);var gm;for(var i=0,l=gj.length;i<l;i++ ){gm=gj[i];if(gm.$$events){this.__bh(gn,gm.$$events,gk);}
;if(gm.$$properties){this.__bi(gn,gm.$$properties,gk);}
;if(gm.$$members){this.__bk(gn,gm.$$members,gk,gk,gk);}
;}
;if(gn.$$includes){gn.$$includes.push(gl);gn.$$flatIncludes.push.apply(gn.$$flatIncludes,gj);}
else {gn.$$includes=[gl];gn.$$flatIncludes=gj;}
;}
,__bp:function(){function go(){go.base.apply(this,arguments);}
;return go;}
,__bq:function(gq,gp){if(qx.core.Environment.get(eb)){return true;}
;if(gq&&gq.$$includes){var gr=gq.$$flatIncludes;for(var i=0,l=gr.length;i<l;i++ ){if(gr[i].$$constructor){return true;}
;}
;}
;if(gp){var gs=qx.Mixin.flatten(gp);for(var i=0,l=gs.length;i<l;i++ ){if(gs[i].$$constructor){return true;}
;}
;}
;return false;}
,__br:function(gu,name,gt){var gw=function(){var gz=gw;if(qx.core.Environment.get(eb)){if(!(this instanceof gz)){throw new Error(B+name+E);}
;if(gt===dV){if(this.classname===name){throw new Error(dO+name+e);}
;}
else if(gt===k){if(!gz.$$allowconstruct){throw new Error(db+name+cI);}
;}
;}
;var gx=gz.$$original.apply(this,arguments);if(gz.$$includes){var gy=gz.$$flatIncludes;for(var i=0,l=gy.length;i<l;i++ ){if(gy[i].$$constructor){gy[i].$$constructor.apply(this,arguments);}
;}
;}
;if(qx.core.Environment.get(eb)){if(this.classname===name){this.$$initialized=true;}
;}
;return gx;}
;if(qx.core.Environment.get(ef)){var gv=qx.core.Aspect.wrap(name,gw,d);gw.$$original=gu;gw.constructor=gv;gw=gv;}
;gw.$$original=gu;gu.wrapper=gw;return gw;}
},defer:function(){if(qx.core.Environment.get(ef)){for(var gA in qx.Bootstrap.$$registry){var gB=qx.Bootstrap.$$registry[gA];for(var gC in gB){if(gB[gC] instanceof Function){gB[gC]=qx.core.Aspect.wrap(gA+di+gC,gB[gC],eh);}
;}
;}
;}
;}
});}
)();
(function(){var a="qx.data.MBinding";qx.Mixin.define(a,{construct:function(){this.__bs=this.toHashCode();}
,members:{__bs:null,bind:function(b,e,c,d){return qx.data.SingleValueBinding.bind(this,b,e,c,d);}
,removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);}
,removeRelatedBindings:function(g){qx.data.SingleValueBinding.removeRelatedBindings(this,g);}
,removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);}
,getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);}
},destruct:function(){this.$$hash=this.__bs;this.removeAllBindings();delete this.$$hash;}
});}
)();
(function(){var a="qx.debug.databinding",b=". Error message: ",c="No number or 'last' value has been given",d="Data after conversion: ",f="set",g="deepBinding",h=")",k=") to the object '",l="item",m="Can not remove the bindings for null object!",n="Please use only one array at a time: ",p="Binding executed from ",q="Integer",r="reset",s=" of object ",t="qx.event.type.Data",u="qx.data.SingleValueBinding",v="Binding property ",w="Failed so set value ",x=").",y="change",z="qx.debug",A="targetObject",B="targetPropertyChain",C="get",D="^",E="Binding could not be found!",F="sourceObject",G="String",H=" to ",I="Binding from '",J="",K="sourcePropertyChain",L="PositiveNumber",M="Data before conversion: ",N="]",O="[",P=".",Q="PositiveInteger",R="' (",S=" on ",T="Binding does not exist!",U=" does not work.",V=" in an array binding: ",W=" is not an data (qx.event.type.Data) event on ",X=".[",Y=" (",bj="Boolean",bk=" by ",bl="Date",bg="Number",bh=" not possible: No event available. ",bi="last";qx.Class.define(u,{statics:{__bt:{},__bu:{},bind:function(by,bs,bD,bA,bG){if(qx.core.Environment.get(z)){qx.core.Assert.assertObject(by,F);qx.core.Assert.assertString(bs,K);qx.core.Assert.assertObject(bD,A);qx.core.Assert.assertString(bA,B);}
;var bC=this.__bw(by,bs,bD,bA,bG);var bo=bs.split(P);var bn=this.__bE(bo);var bq=[];var bE=[];var bp=[];var br=[];var bw=by;try{for(var i=0;i<bo.length;i++ ){if(bn[i]!==J){br.push(y);}
else {var bv=this.__bx(bw,bo[i]);if(!bv){if(i==0){throw new qx.core.AssertionError(v+bo[i]+s+bw+bh);}
;this.__bD(undefined,bD,bA,bG,by);break;}
;br.push(bv);}
;bq[i]=bw;if(i==bo.length-1){if(bn[i]!==J){var bx=bn[i]===bi?bw.length-1:bn[i];var bm=bw.getItem(bx);this.__bD(bm,bD,bA,bG,by);bp[i]=this.__bF(bw,br[i],bD,bA,bG,bn[i]);}
else {if(bo[i]!=null&&bw[C+qx.lang.String.firstUp(bo[i])]!=null){var bm=bw[C+qx.lang.String.firstUp(bo[i])]();this.__bD(bm,bD,bA,bG,by);}
;bp[i]=this.__bF(bw,br[i],bD,bA,bG);}
;}
else {var bF={index:i,propertyNames:bo,sources:bq,listenerIds:bp,arrayIndexValues:bn,targetObject:bD,targetPropertyChain:bA,options:bG,listeners:bE};var bB=qx.lang.Function.bind(this.__bv,this,bF);bE.push(bB);bp[i]=bw.addListener(br[i],bB);}
;if(bw[C+qx.lang.String.firstUp(bo[i])]==null){bw=undefined;}
else if(bn[i]!==J){var bx=bn[i]===bi?bw.length-1:bn[i];bw=bw[C+qx.lang.String.firstUp(bo[i])](bx);}
else {bw=bw[C+qx.lang.String.firstUp(bo[i])]();if(bw===null&&(bo.length-1)!=i){bw=undefined;}
;}
;if(!bw){this.__bD(bw,bD,bA,bG,by);break;}
;}
;}
catch(bH){for(var i=0;i<bq.length;i++ ){if(bq[i]&&bp[i]){bq[i].removeListenerById(bp[i]);}
;}
;var bt=bC.targets;var bz=bC.listenerIds;for(var i=0;i<bt.length;i++ ){if(bt[i]&&bz[i]){bt[i].removeListenerById(bz[i]);}
;}
;throw bH;}
;var bu={type:g,listenerIds:bp,sources:bq,targetListenerIds:bC.listenerIds,targets:bC.targets};this.__bG(bu,by,bs,bD,bA);return bu;}
,__bv:function(bO){if(bO.options&&bO.options.onUpdate){bO.options.onUpdate(bO.sources[bO.index],bO.targetObject);}
;for(var j=bO.index+1;j<bO.propertyNames.length;j++ ){var bM=bO.sources[j];bO.sources[j]=null;if(!bM){continue;}
;bM.removeListenerById(bO.listenerIds[j]);}
;var bM=bO.sources[bO.index];for(var j=bO.index+1;j<bO.propertyNames.length;j++ ){if(bO.arrayIndexValues[j-1]!==J){bM=bM[C+qx.lang.String.firstUp(bO.propertyNames[j-1])](bO.arrayIndexValues[j-1]);}
else {bM=bM[C+qx.lang.String.firstUp(bO.propertyNames[j-1])]();}
;bO.sources[j]=bM;if(!bM){if(bO.options&&bO.options.converter){var bI=false;if(bO.options.ignoreConverter){var bP=bO.propertyNames.slice(0,j).join(P);var bN=bP.match(new RegExp(D+bO.options.ignoreConverter));bI=bN?bN.length>0:false;}
;if(!bI){this.__bz(bO.targetObject,bO.targetPropertyChain,bO.options.converter());}
else {this.__by(bO.targetObject,bO.targetPropertyChain);}
;}
else {this.__by(bO.targetObject,bO.targetPropertyChain);}
;break;}
;if(j==bO.propertyNames.length-1){if(qx.Class.implementsInterface(bM,qx.data.IListData)){var bQ=bO.arrayIndexValues[j]===bi?bM.length-1:bO.arrayIndexValues[j];var bJ=bM.getItem(bQ);this.__bD(bJ,bO.targetObject,bO.targetPropertyChain,bO.options,bO.sources[bO.index]);bO.listenerIds[j]=this.__bF(bM,y,bO.targetObject,bO.targetPropertyChain,bO.options,bO.arrayIndexValues[j]);}
else {if(bO.propertyNames[j]!=null&&bM[C+qx.lang.String.firstUp(bO.propertyNames[j])]!=null){var bJ=bM[C+qx.lang.String.firstUp(bO.propertyNames[j])]();this.__bD(bJ,bO.targetObject,bO.targetPropertyChain,bO.options,bO.sources[bO.index]);}
;var bK=this.__bx(bM,bO.propertyNames[j]);if(!bK){this.__by(bO.targetObject,bO.targetPropertyChain);break;}
;bO.listenerIds[j]=this.__bF(bM,bK,bO.targetObject,bO.targetPropertyChain,bO.options);}
;}
else {if(bO.listeners[j]==null){var bL=qx.lang.Function.bind(this.__bv,this,bO);bO.listeners.push(bL);}
;if(qx.Class.implementsInterface(bM,qx.data.IListData)){var bK=y;}
else {var bK=this.__bx(bM,bO.propertyNames[j]);}
;if(!bK){this.__by(bO.targetObject,bO.targetPropertyChain);return;}
;bO.listenerIds[j]=bM.addListener(bK,bO.listeners[j]);}
;}
;}
,__bw:function(bT,cc,cg,bX,ca){var bW=bX.split(P);var bU=this.__bE(bW);var cf=[];var ce=[];var bY=[];var cd=[];var bV=cg;for(var i=0;i<bW.length-1;i++ ){if(bU[i]!==J){cd.push(y);}
else {var bS=this.__bx(bV,bW[i]);if(!bS){break;}
;cd.push(bS);}
;cf[i]=bV;var cb=function(){for(var j=i+1;j<bW.length-1;j++ ){var cj=cf[j];cf[j]=null;if(!cj){continue;}
;cj.removeListenerById(bY[j]);}
;var cj=cf[i];for(var j=i+1;j<bW.length-1;j++ ){var ch=qx.lang.String.firstUp(bW[j-1]);if(bU[j-1]!==J){var ck=bU[j-1]===bi?cj.getLength()-1:bU[j-1];cj=cj[C+ch](ck);}
else {cj=cj[C+ch]();}
;cf[j]=cj;if(ce[j]==null){ce.push(cb);}
;if(qx.Class.implementsInterface(cj,qx.data.IListData)){var ci=y;}
else {var ci=qx.data.SingleValueBinding.__bx(cj,bW[j]);if(!ci){break;}
;}
;bY[j]=cj.addListener(ci,ce[j]);}
;qx.data.SingleValueBinding.updateTarget(bT,cc,cg,bX,ca);}
;ce.push(cb);bY[i]=bV.addListener(cd[i],cb);var bR=qx.lang.String.firstUp(bW[i]);if(bV[C+bR]==null){bV=null;}
else if(bU[i]!==J){bV=bV[C+bR](bU[i]);}
else {bV=bV[C+bR]();}
;if(!bV){break;}
;}
;return {listenerIds:bY,targets:cf};}
,updateTarget:function(cl,co,cq,cm,cp){var cn=this.resolvePropertyChain(cl,co);cn=qx.data.SingleValueBinding.__bH(cn,cq,cm,cp,cl);this.__bz(cq,cm,cn);}
,resolvePropertyChain:function(o,cr){var cs=this.__bB(cr);return this.__bC(o,cs,cs.length);}
,__bx:function(cu,cv){var ct=this.__bI(cu,cv);if(ct==null){if(qx.Class.supportsEvent(cu.constructor,cv)){ct=cv;}
else if(qx.Class.supportsEvent(cu.constructor,y+qx.lang.String.firstUp(cv))){ct=y+qx.lang.String.firstUp(cv);}
else {return null;}
;}
;return ct;}
,__by:function(cA,cy){var cz=this.__bB(cy);var cx=this.__bC(cA,cz);if(cx!=null){var cB=cz[cz.length-1];var cw=this.__bA(cB);if(cw){this.__bz(cA,cy,null);return;}
;if(cx[r+qx.lang.String.firstUp(cB)]!=undefined){cx[r+qx.lang.String.firstUp(cB)]();}
else {cx[f+qx.lang.String.firstUp(cB)](null);}
;}
;}
,__bz:function(cH,cE,cF){var cG=this.__bB(cE);var cD=this.__bC(cH,cG);if(cD){var cI=cG[cG.length-1];var cC=this.__bA(cI);if(cC){if(cC===bi){cC=cD.length-1;}
;cD.setItem(cC,cF);}
else {cD[f+qx.lang.String.firstUp(cI)](cF);}
;}
;}
,__bA:function(cL){var cJ=/^\[(\d+|last)\]$/;var cK=cL.match(cJ);if(cK){return cK[1];}
;return null;}
,__bB:function(cM){return cM.replace(/\[/g,X).split(P).filter(function(cN){return cN!==J;}
);}
,__bC:function(cT,cO,cP){cP=cP||cO.length-1;var cR=cT;for(var i=0;cR!==null&&i<cP;i++ ){try{var cS=cO[i];var cQ=this.__bA(cS);if(cQ){if(cQ===bi){cQ=cR.length-1;}
;cR=cR.getItem(cQ);}
else {cR=cR[C+qx.lang.String.firstUp(cS)]();}
;}
catch(cU){return null;}
;}
;return cR;}
,__bD:function(da,cV,cX,cY,cW){da=this.__bH(da,cV,cX,cY,cW);if(da===undefined){this.__by(cV,cX);}
;if(da!==undefined){try{this.__bz(cV,cX,da);if(cY&&cY.onUpdate){cY.onUpdate(cW,cV,da);}
;}
catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;}
;if(cY&&cY.onSetFail){cY.onSetFail(e);}
else {qx.log.Logger.warn(w+da+S+cV+b+e);}
;}
;}
;}
,__bE:function(db){var dc=[];for(var i=0;i<db.length;i++ ){var name=db[i];if(name.endsWith(N)){var dd=name.substring(name.indexOf(O)+1,name.indexOf(N));if(name.indexOf(N)!=name.length-1){throw new Error(n+name+U);}
;if(dd!==bi){if(dd==J||isNaN(parseInt(dd,10))){throw new Error(c+V+name+U);}
;}
;if(name.indexOf(O)!=0){db[i]=name.substring(0,name.indexOf(O));dc[i]=J;dc[i+1]=dd;db.splice(i+1,0,l);i++ ;}
else {dc[i]=dd;db.splice(i,1,l);}
;}
else {dc[i]=J;}
;}
;return dc;}
,__bF:function(de,dh,dm,dk,di,dg){if(qx.core.Environment.get(z)){var df=qx.Class.getEventType(de.constructor,dh);qx.core.Assert.assertEquals(t,df,dh+W+de+P);}
;var dj=function(dq,e){if(dq!==J){if(dq===bi){dq=de.length-1;}
;var dr=de.getItem(dq);if(dr===undefined){qx.data.SingleValueBinding.__by(dm,dk);}
;var dp=e.getData().start;var dn=e.getData().end;if(dq<dp||dq>dn){return;}
;}
else {var dr=e.getData();}
;if(qx.core.Environment.get(a)){qx.log.Logger.debug(p+de+bk+dh+H+dm+Y+dk+h);qx.log.Logger.debug(M+dr);}
;dr=qx.data.SingleValueBinding.__bH(dr,dm,dk,di,de);if(qx.core.Environment.get(a)){qx.log.Logger.debug(d+dr);}
;try{if(dr!==undefined){qx.data.SingleValueBinding.__bz(dm,dk,dr);}
else {qx.data.SingleValueBinding.__by(dm,dk);}
;if(di&&di.onUpdate){di.onUpdate(de,dm,dr);}
;}
catch(ds){if(!(ds instanceof qx.core.ValidationError)){throw ds;}
;if(di&&di.onSetFail){di.onSetFail(ds);}
else {qx.log.Logger.warn(w+dr+S+dm+b+ds);}
;}
;}
;if(!dg){dg=J;}
;dj=qx.lang.Function.bind(dj,de,dg);var dl=de.addListener(dh,dj);return dl;}
,__bG:function(dy,dt,dw,dz,dx){var du;du=dt.toHashCode();if(this.__bt[du]===undefined){this.__bt[du]=[];}
;var dv=[dy,dt,dw,dz,dx];this.__bt[du].push(dv);du=dz.toHashCode();if(this.__bu[du]===undefined){this.__bu[du]=[];}
;this.__bu[du].push(dv);}
,__bH:function(dD,dJ,dC,dF,dA){if(dF&&dF.converter){var dG;if(dJ.getModel){dG=dJ.getModel();}
;return dF.converter(dD,dG,dA,dJ);}
else {var dE=this.__bB(dC);var dB=this.__bC(dJ,dE);var dK=dC.substring(dC.lastIndexOf(P)+1,dC.length);if(dB==null){return dD;}
;var dH=qx.Class.getPropertyDefinition(dB.constructor,dK);var dI=dH==null?J:dH.check;return this.__bJ(dD,dI);}
;}
,__bI:function(dL,dN){var dM=qx.Class.getPropertyDefinition(dL.constructor,dN);if(dM==null){return null;}
;return dM.event;}
,__bJ:function(dQ,dP){var dO=qx.lang.Type.getClass(dQ);if((dO==bg||dO==G)&&(dP==q||dP==Q)){dQ=parseInt(dQ,10);}
;if((dO==bj||dO==bg||dO==bl)&&dP==G){dQ=dQ+J;}
;if((dO==bg||dO==G)&&(dP==bg||dP==L)){dQ=parseFloat(dQ);}
;return dQ;}
,removeBindingFromObject:function(dR,dV){if(dV.type==g){for(var i=0;i<dV.sources.length;i++ ){if(dV.sources[i]){dV.sources[i].removeListenerById(dV.listenerIds[i]);}
;}
;for(var i=0;i<dV.targets.length;i++ ){if(dV.targets[i]){dV.targets[i].removeListenerById(dV.targetListenerIds[i]);}
;}
;}
else {dR.removeListenerById(dV);}
;var dU=this.getAllBindingsForObject(dR);if(dU!=undefined){for(var i=0;i<dU.length;i++ ){if(dU[i][0]==dV){var dS=dU[i][3];if(this.__bu[dS.toHashCode()]){qx.lang.Array.remove(this.__bu[dS.toHashCode()],dU[i]);}
;var dT=dU[i][1];if(this.__bt[dT.toHashCode()]){qx.lang.Array.remove(this.__bt[dT.toHashCode()],dU[i]);}
;return;}
;}
;}
;throw new Error(E);}
,removeAllBindingsForObject:function(dX){if(qx.core.Environment.get(z)){qx.core.Assert.assertNotNull(dX,m);}
;var dW=this.getAllBindingsForObject(dX);if(dW!=undefined){for(var i=dW.length-1;i>=0;i-- ){this.removeBindingFromObject(dX,dW[i][0]);}
;}
;}
,removeRelatedBindings:function(ea,eb){if(qx.core.Environment.get(z)){qx.core.Assert.assertNotNull(ea,m);qx.core.Assert.assertNotNull(eb,m);}
;var ed=this.getAllBindingsForObject(ea);if(ed!=undefined){for(var i=ed.length-1;i>=0;i-- ){var ec=ed[i][1];var dY=ed[i][3];if(ec===eb||dY===eb){this.removeBindingFromObject(ea,ed[i][0]);}
;}
;}
;}
,getAllBindingsForObject:function(ef){var eg=ef.toHashCode();if(this.__bt[eg]===undefined){this.__bt[eg]=[];}
;var eh=this.__bt[eg];var ee=this.__bu[eg]?this.__bu[eg]:[];return qx.lang.Array.unique(eh.concat(ee));}
,removeAllBindings:function(){for(var ej in this.__bt){var ei=qx.core.ObjectRegistry.fromHashCode(ej);if(ei==null){delete this.__bt[ej];continue;}
;this.removeAllBindingsForObject(ei);}
;this.__bt={};}
,getAllBindings:function(){return this.__bt;}
,showBindingInLog:function(el,en){var em;for(var i=0;i<this.__bt[el.toHashCode()].length;i++ ){if(this.__bt[el.toHashCode()][i][0]==en){em=this.__bt[el.toHashCode()][i];break;}
;}
;if(em===undefined){var ek=T;}
else {var ek=I+em[1]+R+em[2]+k+em[3]+R+em[4]+x;}
;qx.log.Logger.debug(ek);}
,showAllBindingsInLog:function(){for(var ep in this.__bt){var eo=qx.core.ObjectRegistry.fromHashCode(ep);if(eo){for(var i=0;i<this.__bt[ep].length;i++ ){this.showBindingInLog(eo,this.__bt[ep][i][0]);}
;}
;}
;}
}});}
)();
(function(){var a="-",b="]",c='\\u',d="undefined",e="",f='\\$1',g="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h="\\\\",j='-',k="g",l="\\\"",m="qx.lang.String",n="(^|[^",o="0",p="%",q='"',r=' ',s='\n',t="])[";qx.Bootstrap.define(m,{statics:{__bK:g,__bL:null,__bM:{},camelCase:function(v){var u=this.__bM[v];if(!u){u=v.replace(/\-([a-z])/g,function(x,w){return w.toUpperCase();}
);if(v.indexOf(a)>=0){this.__bM[v]=u;}
;}
;return u;}
,hyphenate:function(z){var y=this.__bM[z];if(!y){y=z.replace(/[A-Z]/g,function(A){return (j+A.charAt(0).toLowerCase());}
);if(z.indexOf(a)==-1){this.__bM[z]=y;}
;}
;return y;}
,capitalize:function(C){if(this.__bL===null){var B=c;this.__bL=new RegExp(n+this.__bK.replace(/[0-9A-F]{4}/g,function(D){return B+D;}
)+t+this.__bK.replace(/[0-9A-F]{4}/g,function(E){return B+E;}
)+b,k);}
;return C.replace(this.__bL,function(F){return F.toUpperCase();}
);}
,clean:function(G){return G.replace(/\s+/g,r).trim();}
,trimLeft:function(H){return H.replace(/^\s+/,e);}
,trimRight:function(I){return I.replace(/\s+$/,e);}
,startsWith:function(K,J){return K.startsWith(J);}
,endsWith:function(M,L){return M.endsWith(L);}
,repeat:function(N,O){return N.length>0?new Array(O+1).join(N):e;}
,pad:function(Q,length,P){var R=length-Q.length;if(R>0){if(typeof P===d){P=o;}
;return this.repeat(P,R)+Q;}
else {return Q;}
;}
,firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(T,S){return T.indexOf(S)!=-1;}
,format:function(U,V){var W=U;var i=V.length;while(i-- ){W=W.replace(new RegExp(p+(i+1),k),function(){return V[i]+e;}
);}
;return W;}
,escapeRegexpChars:function(X){return X.replace(/([.*+?^${}()|[\]\/\\])/g,f);}
,toArray:function(Y){return Y.split(/\B|\b/g);}
,stripTags:function(ba){return ba.replace(/<\/?[^>]+>/gi,e);}
,stripScripts:function(bd,bc){var be=e;var bb=bd.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){be+=arguments[1]+s;return e;}
);if(bc===true){qx.lang.Function.globalEval(be);}
;return bb;}
,quote:function(bf){return q+bf.replace(/\\/g,h).replace(/\"/g,l)+q;}
}});}
)();
(function(){var a="Invalid parameter 'func'.",b="qx.debug",c='anonymous()',d="Trying to call a bound function with a disposed object as context: ",e="()",f="qx.globalErrorHandling",g=" :: ",h="qx.lang.Function",i=".",j=".prototype.",k=".constructor()";qx.Bootstrap.define(h,{statics:{getCaller:function(l){return l.caller?l.caller.callee:l.callee.caller;}
,getName:function(m){if(m.displayName){return m.displayName;}
;if(m.$$original||m.wrapper||m.classname){return m.classname+k;}
;if(m.$$mixin){for(var n in m.$$mixin.$$members){if(m.$$mixin.$$members[n]==m){return m.$$mixin.name+j+n+e;}
;}
;for(var n in m.$$mixin){if(m.$$mixin[n]==m){return m.$$mixin.name+i+n+e;}
;}
;}
;if(m.self){var p=m.self.constructor;if(p){for(var n in p.prototype){if(p.prototype[n]==m){return p.classname+j+n+e;}
;}
;for(var n in p){if(p[n]==m){return p.classname+i+n+e;}
;}
;}
;}
;var o=m.toString().match(/function\s*(\w*)\s*\(.*/);if(o&&o.length>=1&&o[1]){return o[1]+e;}
;return c;}
,globalEval:function(data){if(window.execScript){return window.execScript(data);}
else {return eval.call(window,data);}
;}
,create:function(r,q){if(qx.core.Environment.get(b)){qx.core.Assert&&qx.core.Assert.assertFunction(r,a);}
;if(!q){return r;}
;if(!(q.self||q.args||q.delay!=null||q.periodical!=null||q.attempt)){return r;}
;return function(event){if(qx.core.Environment.get(b)){if(qx.core.Object&&q.self&&qx.Bootstrap.isObject(q.self)&&q.self.isDisposed&&qx.Bootstrap.isFunction(q.self.isDisposed)){if(q.self.isDisposed()){qx.core.Assert&&qx.core.Assert.fail(d+q.self.toString()+g+qx.lang.Function.getName(r));}
;}
;}
;var t=qx.lang.Array.fromArguments(arguments);if(q.args){t=q.args.concat(t);}
;if(q.delay||q.periodical){var s=function(){return r.apply(q.self||this,t);}
;if(qx.core.Environment.get(f)){s=qx.event.GlobalError.observeMethod(s);}
;if(q.delay){return window.setTimeout(s,q.delay);}
;if(q.periodical){return window.setInterval(s,q.periodical);}
;}
else if(q.attempt){var u=false;try{u=r.apply(q.self||this,t);}
catch(v){}
;return u;}
else {return r.apply(q.self||this,t);}
;}
;}
,bind:function(w,self,x){return this.create(w,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});}
,curry:function(y,z){return this.create(y,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});}
,listener:function(B,self,C){if(arguments.length<3){return function(event){return B.call(self||this,event||window.event);}
;}
else {var A=qx.lang.Array.fromArguments(arguments,2);return function(event){var D=[event||window.event];D.push.apply(D,A);B.apply(self||this,D);}
;}
;}
,attempt:function(E,self,F){return this.create(E,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();}
,delay:function(H,G,self,I){return this.create(H,{delay:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();}
,periodical:function(K,J,self,L){return this.create(K,{periodical:J,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();}
}});}
)();
(function(){var a="qx.globalErrorHandling",b="qx.event.GlobalError";qx.Bootstrap.define(b,{statics:{__bN:null,__bO:null,__bP:null,__bQ:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(a);}
else {return !!qx.Bootstrap.getEnvironmentSetting(a);}
;}
,setErrorHandler:function(c,d){this.__bN=c||null;this.__bP=d||window;if(this.__bQ()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__bR,this);if(this.__bO==null){this.__bO=window.onerror;}
;var self=this;window.onerror=function(f,g,h){self.__bO(f,g,h);e(f,g,h);}
;}
;if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__bR,this);}
;if(this.__bN==null){if(this.__bO!=null){window.onerror=this.__bO;this.__bO=null;}
else {window.onerror=null;}
;}
;}
;}
,__bR:function(i,j,k){if(this.__bN){this.handleError(new qx.core.WindowError(i,j,k));}
;}
,observeMethod:function(l){if(this.__bQ()){var self=this;return function(){if(!self.__bN){return l.apply(this,arguments);}
;try{return l.apply(this,arguments);}
catch(m){self.handleError(new qx.core.GlobalError(m,arguments));}
;}
;}
else {return l;}
;}
,handleError:function(n){if(this.__bN){this.__bN.call(this.__bP,n);}
;}
},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(a,true);}
else {qx.Bootstrap.setEnvironmentSetting(a,true);}
;o.setErrorHandler(null,null);}
});}
)();
(function(){var a="",b="qx.core.WindowError";qx.Bootstrap.define(b,{extend:Error,construct:function(c,e,f){var d=Error.call(this,c);if(d.stack){this.stack=d.stack;}
;if(d.stacktrace){this.stacktrace=d.stacktrace;}
;this.__bS=c;this.__bT=e||a;this.__bU=f===undefined?-1:f;}
,members:{__bS:null,__bT:null,__bU:null,toString:function(){return this.__bS;}
,getUri:function(){return this.__bT;}
,getLineNumber:function(){return this.__bU;}
}});}
)();
(function(){var a="GlobalError: ",b="qx.core.GlobalError";qx.Bootstrap.define(b,{extend:Error,construct:function(e,c){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(e);}
;this.__bS=a+(e&&e.message?e.message:e);var d=Error.call(this,this.__bS);if(d.stack){this.stack=d.stack;}
;if(d.stacktrace){this.stacktrace=d.stacktrace;}
;this.__bV=c;this.__bW=e;}
,members:{__bW:null,__bV:null,__bS:null,toString:function(){return this.__bS;}
,getArguments:function(){return this.__bV;}
,getSourceException:function(){return this.__bW;}
}});}
)();
(function(){var a="qx.event.type.Data",b="qx.event.type.Event",c="qx.data.IListData";qx.Interface.define(c,{events:{"change":a,"changeLength":b},members:{getItem:function(d){}
,setItem:function(e,f){}
,splice:function(g,h,i){}
,contains:function(j){}
,getLength:function(){}
,toArray:function(){}
}});}
)();
(function(){var a="qx.core.ValidationError";qx.Class.define(a,{extend:qx.type.BaseError});}
)();
(function(){var a="qx.util.RingBuffer";qx.Bootstrap.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);}
,members:{__bX:0,__bY:0,__ca:false,__cb:0,__cc:null,__cd:null,setMaxEntries:function(c){this.__cd=c;this.clear();}
,getMaxEntries:function(){return this.__cd;}
,addEntry:function(d){this.__cc[this.__bX]=d;this.__bX=this.__ce(this.__bX,1);var e=this.getMaxEntries();if(this.__bY<e){this.__bY++ ;}
;if(this.__ca&&(this.__cb<e)){this.__cb++ ;}
;}
,getNumEntriesStored:function(){return this.__bY;}
,mark:function(){this.__ca=true;this.__cb=0;}
,clearMark:function(){this.__ca=false;}
,getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);}
,getEntries:function(f,j){if(f>this.__bY){f=this.__bY;}
;if(j&&this.__ca&&(f>this.__cb)){f=this.__cb;}
;if(f>0){var h=this.__ce(this.__bX,-1);var g=this.__ce(h,-f+1);var i;if(g<=h){i=this.__cc.slice(g,h+1);}
else {i=this.__cc.slice(g,this.__bY).concat(this.__cc.slice(0,h+1));}
;}
else {i=[];}
;return i;}
,clear:function(){this.__cc=new Array(this.getMaxEntries());this.__bY=0;this.__cb=0;this.__bX=0;}
,__ce:function(n,l){var k=this.getMaxEntries();var m=(n+l)%k;if(m<0){m+=k;}
;return m;}
}});}
)();
(function(){var a="qx.log.appender.RingBuffer";qx.Bootstrap.define(a,{extend:qx.util.RingBuffer,construct:function(b){this.setMaxMessages(b||50);}
,members:{setMaxMessages:function(c){this.setMaxEntries(c);}
,getMaxMessages:function(){return this.getMaxEntries();}
,process:function(d){this.addEntry(d);}
,getAllLogEvents:function(){return this.getAllEntries();}
,retrieveLogEvents:function(e,f){return this.getEntries(e,f);}
,clearHistory:function(){this.clear();}
}});}
)();
(function(){var a="qx.log.Logger",b="[",c="The mixin '",d="...(+",e="array",f="The method '",g=")",h="warn",j="node",k="The event '",m="instance",n="info",o="string",p="Please consult the API documentation of this method for alternatives.",q="null",r="error",s="qx.debug",t="Please consult the API documentation of this class for alternatives.",u="#",v="class",w="' is deprecated: ",x=": ",y="Please consult the API documentation for alternatives.",z="document",A="{...(",B="",C="number",D="' from class '",E="The class '",F="stringify",G="' overrides a deprecated method: ",H="date",I="unknown",J="function",K="[default]",L="text[",M="]",N="[...(",O="boolean",P="\n",Q=")}",R="|",S="debug",T=")]",U="map",V="The constant '",W="undefined",X="trace",Y="object";qx.Bootstrap.define(a,{statics:{__cf:S,setLevel:function(ba){this.__cf=ba;}
,getLevel:function(){return this.__cf;}
,setTreshold:function(bb){this.__ck.setMaxMessages(bb);}
,getTreshold:function(){return this.__ck.getMaxMessages();}
,__cg:[],__ch:{},__ci:[],__cj:0,register:function(bd){if(bd.$$id){return;}
;var bg=this.__cj++ ;this.__cg[bg]=bd;this.__ch[bd.classname]=bd;bd.$$id=bg;var be=this.__ck.getAllLogEvents();for(var i=0,l=be.length;i<l;i++ ){var bf=be[i];var bc=this.__cp(bf.loggerName,bf.level);if(bc[bd.classname]){bd.process(bf);}
;}
;}
,unregister:function(bh){var bi=bh.$$id;if(bi==null){return;}
;delete this.__ch[bh.classname];delete this.__cg[bi];delete bh.$$id;}
,addFilter:function(bk,bj,bl){if(typeof bk==o){bk=new RegExp(bk);}
;this.__ci.push({loggerMatch:bk,level:bl||this.__cf,appenderName:bj});}
,resetFilters:function(){this.__ci=[];}
,debug:function(bn,bm){qx.log.Logger.__co(S,arguments);}
,info:function(bp,bo){qx.log.Logger.__co(n,arguments);}
,warn:function(br,bq){qx.log.Logger.__co(h,arguments);}
,error:function(bt,bs){qx.log.Logger.__co(r,arguments);}
,trace:function(bx,bu){if(qx.log.Logger.isLoggerEnabled(X,bx)){var bw=qx.dev.StackTrace.getStackTrace();var bv=qx.lang.Array.fromArguments(arguments);bv.push(bw.join(P));qx.log.Logger.__co(X,bv);}
;}
,deprecatedMethodWarning:function(bA,by){if(qx.core.Environment.get(s)){var bz=qx.lang.Function.getName(bA);this.warn(f+bz+w+(by||p));this.trace();}
;}
,deprecatedClassWarning:function(bD,bB){if(qx.core.Environment.get(s)){var bC=bD.classname||I;this.warn(E+bC+w+(bB||t));this.trace();}
;}
,deprecatedEventWarning:function(bG,event,bF){if(qx.core.Environment.get(s)){var bE=bG.self?bG.self.classname:I;this.warn(k+(event||I)+D+bE+w+(bF||t));this.trace();}
;}
,deprecatedMixinWarning:function(bI,bH){if(qx.core.Environment.get(s)){var bJ=bI?bI.name:I;this.warn(c+bJ+w+(bH||t));this.trace();}
;}
,deprecatedConstantWarning:function(bN,bM,bK){if(qx.core.Environment.get(s)){if(bN.__defineGetter__){var self=this;var bL=bN[bM];bN.__defineGetter__(bM,function(){self.warn(V+bM+w+(bK||y));self.trace();return bL;}
);}
;}
;}
,deprecateMethodOverriding:function(bQ,bP,bR,bO){if(qx.core.Environment.get(s)){var bS=bQ.constructor;while(bS.classname!==bP.classname){if(bS.prototype.hasOwnProperty(bR)){this.warn(f+qx.lang.Function.getName(bQ[bR])+G+(bO||y));this.trace();break;}
;bS=bS.superclass;}
;}
;}
,clear:function(){this.__ck.clearHistory();}
,__ck:new qx.log.appender.RingBuffer(50),__cl:{trace:0,debug:1,info:2,warn:3,error:4},__cm:{},__cn:function(bT){if(bT){if(bT.classname){return bT.classname;}
;if(typeof bT==o){return bT;}
;}
;return K;}
,isLoggerEnabled:function(bX,bV){var bU=this.__cn(bV);var bW=this.__cp(bU,bX);return !!Object.keys(bW).length;}
,__co:function(cb,bY){var cd=bY.length<2?null:bY[0];var ce=this.__cn(cd);var ca=this.__cp(ce,cb);if(!Object.keys(ca).length){return;}
;var cg=cd?1:0;var cc=[];for(var i=cg,l=bY.length;i<l;i++ ){cc.push(this.__cr(bY[i],true));}
;var ch=new Date;var ci={time:ch,offset:ch-qx.Bootstrap.LOADSTART,level:cb,loggerName:ce,items:cc,win:window};if(cd){if(cd.$$hash!==undefined){ci.object=cd.$$hash;}
;if(cd.$$type){ci.clazz=cd;}
else if(cd.constructor){ci.clazz=cd.constructor;}
;}
;this.__ck.process(ci);for(var cf in ca){ca[cf].process(ci);}
;}
,__cp:function(cj,cl){var co=this.__cl;if(!this.__ci.length){if(co[cl]<co[this.__cf]){return [];}
;return this.__ch;}
;var cm=cj+R+cl;var ck=this.__cm[cm];if(ck!==undefined){return ck;}
;var ck={};for(var i=0;i<this.__ci.length;i++ ){var cn=this.__ci[i];if(co[cl]<co[cn.level]){continue;}
;if(cn.appenderName&&ck[cn.appenderName]){continue;}
;if(!cn.loggerMatch||cn.loggerMatch.test(cj)){if(cn.appenderName){ck[cn.appenderName]=this.__ch[cn.appenderName];}
else {return this.__cm[cm]=this.__ch;}
;}
;}
;return this.__cm[cm]=ck;}
,__cq:function(cq){if(cq===undefined){return W;}
else if(cq===null){return q;}
;if(cq.$$type){return v;}
;var cp=typeof cq;if(cp===J||cp==o||cp===C||cp===O){return cp;}
else if(cp===Y){if(cq.nodeType){return j;}
else if(cq instanceof Error||(cq.name&&cq.message)){return r;}
else if(cq.classname){return m;}
else if(cq instanceof Array){return e;}
else if(cq instanceof Date){return H;}
else {return U;}
;}
;if(cq.toString){return F;}
;return I;}
,__cr:function(cw,cv){var cz=this.__cq(cw);var ct=I;var cs=[];switch(cz){case q:case W:ct=cz;break;case o:case C:case O:case H:ct=cw;break;case j:if(cw.nodeType===9){ct=z;}
else if(cw.nodeType===3){ct=L+cw.nodeValue+M;}
else if(cw.nodeType===1){ct=cw.nodeName.toLowerCase();if(cw.id){ct+=u+cw.id;}
;}
else {ct=j;}
;break;case J:ct=qx.lang.Function.getName(cw)||cz;break;case m:ct=cw.basename+b+cw.$$hash+M;break;case v:case F:ct=cw.toString();break;case r:cs=qx.dev.StackTrace.getStackTraceFromError(cw);ct=(cw.basename?cw.basename+x:B)+cw.toString();break;case e:if(cv){ct=[];for(var i=0,l=cw.length;i<l;i++ ){if(ct.length>20){ct.push(d+(l-i)+g);break;}
;ct.push(this.__cr(cw[i],false));}
;}
else {ct=N+cw.length+T;}
;break;case U:if(cv){var cr;var cy=[];for(var cx in cw){cy.push(cx);}
;cy.sort();ct=[];for(var i=0,l=cy.length;i<l;i++ ){if(ct.length>20){ct.push(d+(l-i)+g);break;}
;cx=cy[i];cr=this.__cr(cw[cx],false);cr.key=cx;ct.push(cr);}
;}
else {var cu=0;for(var cx in cw){cu++ ;}
;ct=A+cu+Q;}
;break;};return {type:cz,text:ct,trace:cs};}
},defer:function(cA){var cB=qx.Bootstrap.$$logs;for(var i=0;i<cB.length;i++ ){cA.__co(cB[i][0],cB[i][1]);}
;qx.Bootstrap.debug=cA.debug;qx.Bootstrap.info=cA.info;qx.Bootstrap.warn=cA.warn;qx.Bootstrap.error=cA.error;qx.Bootstrap.trace=cA.trace;}
});}
)();
(function(){var c="-",d="qx.debug.dispose",e="",f="qx.core.ObjectRegistry",g="qx.debug",h="$$hash",j="Object with hash code ",k="-0",m="Invalid object: ",n="Could not dispose object ",o=" objects",p=": ",q=" does not exist (since Qooxdoo 6.0 fromHashCode requires that you explicitly register objects with qx.core.ObjectRegistry.register)",r="Disposed ";qx.Bootstrap.define(f,{statics:{inShutDown:false,__u:{},__cs:0,__ct:[],__cu:e,__cv:{},register:function(s){var v=this.__u;if(!v){return;}
;var u=s.$$hash;if(u==null){var t=this.__ct;if(t.length>0&&!qx.core.Environment.get(d)){u=t.pop();}
else {u=(this.__cs++ )+this.__cu;}
;s.$$hash=u;if(qx.core.Environment.get(d)){if(qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__cv[u]=qx.dev.StackTrace.getStackTrace();}
;}
;}
;if(qx.core.Environment.get(g)){if(!s.dispose){throw new Error(m+s);}
;}
;v[u]=s;}
,unregister:function(w){var x=w.$$hash;if(x==null){return;}
;var y=this.__u;if(y&&y[x]){delete y[x];this.__ct.push(x);}
;try{delete w.$$hash;}
catch(z){if(w.removeAttribute){w.removeAttribute(h);}
;}
;}
,toHashCode:function(C){if(qx.core.Environment.get(g)){if(C==null){throw new Error(m+C);}
;}
;var A=C.$$hash;if(A!=null){return A;}
;var B=this.__ct;if(B.length>0){A=B.pop();}
else {A=(this.__cs++ )+this.__cu;}
;return C.$$hash=A;}
,clearHashCode:function(E){if(qx.core.Environment.get(g)){if(E==null){throw new Error(m+E);}
;}
;var D=E.$$hash;if(D!=null){this.__ct.push(D);try{delete E.$$hash;}
catch(F){if(E.removeAttribute){E.removeAttribute(h);}
;}
;}
;}
,fromHashCode:function(G,I){var H=this.__u[G]||null;if(!H&&!I){qx.log.Logger.warn(this,j+G+q);}
;return H;}
,hasHashCode:function(J){return !!this.__u[J];}
,shutdown:function(){this.inShutDown=true;var L=this.__u;var N=[];for(var K in L){N.push(K);}
;N.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);}
);var M,i=0,l=N.length;while(true){try{for(;i<l;i++ ){K=N[i];M=L[K];if(M&&M.dispose){M.dispose();}
;}
;}
catch(O){qx.Bootstrap.error(this,n+M.toString()+p+O,O);if(i!==l){i++ ;continue;}
;}
;break;}
;qx.Bootstrap.debug(this,r+l+o);delete this.__u;}
,getRegistry:function(){return this.__u;}
,getNextHash:function(){return this.__cs;}
,getPostId:function(){return this.__cu;}
,getStackTraces:function(){return this.__cv;}
},defer:function(P){if(window&&window.top){var frames=window.top.frames;for(var i=0;i<frames.length;i++ ){if(frames[i]===window){P.__cu=c+(i+1);return;}
;}
;}
;P.__cu=k;}
});}
)();
(function(){var a="info",b="error",c="warn",d="debug",e="qx.core.MLogging",f="trace";qx.Mixin.define(e,{members:{__cw:qx.log.Logger,debug:function(g){this.__cx(d,arguments);}
,info:function(h){this.__cx(a,arguments);}
,warn:function(i){this.__cx(c,arguments);}
,error:function(j){this.__cx(b,arguments);}
,trace:function(k){this.__cx(f,arguments);}
,__cx:function(l,n){var m=qx.lang.Array.fromArguments(n);m.unshift(this);this.__cw[l].apply(this.__cw,m);}
}});}
)();
(function(){var b="qx.dom.Node",c="";qx.Bootstrap.define(b,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===this.DOCUMENT?d:d.ownerDocument||d.document;}
,getWindow:function(e){if(e.nodeType==null){return e;}
;if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;}
;return e.defaultView||e.parentWindow;}
,getDocumentElement:function(f){return this.getDocument(f).documentElement;}
,getBodyElement:function(g){return this.getDocument(g).body;}
,isNode:function(h){return !!(h&&h.nodeType!=null);}
,isElement:function(j){return !!(j&&j.nodeType===this.ELEMENT);}
,isDocument:function(k){return !!(k&&k.nodeType===this.DOCUMENT);}
,isDocumentFragment:function(l){return !!(l&&l.nodeType===this.DOCUMENT_FRAGMENT);}
,isText:function(m){return !!(m&&m.nodeType===this.TEXT);}
,isWindow:function(n){return !!(n&&n.history&&n.location&&n.document);}
,isNodeName:function(o,p){if(!p||!o||!o.nodeName){return false;}
;return p.toLowerCase()==qx.dom.Node.getName(o);}
,getName:function(q){if(!q||!q.nodeName){return null;}
;return q.nodeName.toLowerCase();}
,getText:function(r){if(!r||!r.nodeType){return null;}
;switch(r.nodeType){case 1:var i,a=[],s=r.childNodes,length=s.length;for(i=0;i<length;i++ ){a[i]=this.getText(s[i]);}
;return a.join(c);case 2:case 3:case 4:return r.nodeValue;};return null;}
,isBlockNode:function(t){if(!qx.dom.Node.isElement(t)){return false;}
;t=qx.dom.Node.getName(t);return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(t);}
}});}
)();
(function(){var a="qx.core.IDisposable";qx.Interface.define(a,{members:{dispose:function(){}
}});}
)();
(function(){var a="function",b='loadeddata',c="pointerover",d='pause',f="transitionend",g="gecko",h="browser.name",j='timeupdate',k="qx.debug",m='canplay',n="HTMLEvents",o='loadedmetadata',p="css.transition",q="mobile safari",r="return;",s="browser.documentmode",t="safari",u='play',v='ended',w="",x="qx.bom.Event",y='playing',z="mouseover",A="No method available to remove native listener from ",B="No method available to add native listener to ",C="end-event",D="mshtml",E="engine.name",F='progress',G="webkit",H='volumechange',I='seeked',J="on",K="undefined";qx.Bootstrap.define(x,{statics:{addNativeListener:function(O,N,L,M){if(O.addEventListener){O.addEventListener(N,L,!!M);}
else if(O.attachEvent){O.attachEvent(J+N,L);}
else if(typeof O[J+N]!=K){O[J+N]=L;}
else {if(qx.core.Environment.get(k)){qx.log.Logger.warn(B+O);}
;}
;}
,removeNativeListener:function(S,R,P,Q){if(S.removeEventListener){S.removeEventListener(R,P,!!Q);}
else if(S.detachEvent){try{S.detachEvent(J+R,P);}
catch(e){if(e.number!==-2146828218){throw e;}
;}
;}
else if(typeof S[J+R]!=K){S[J+R]=null;}
else {if(qx.core.Environment.get(k)){qx.log.Logger.warn(A+S);}
;}
;}
,getTarget:function(e){return e.target||e.srcElement;}
,getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(E)==g)){try{e.relatedTarget&&e.relatedTarget.nodeType;}
catch(T){return null;}
;}
;return e.relatedTarget;}
else if(e.fromElement!==undefined&&(e.type===z||e.type===c)){return e.fromElement;}
else if(e.toElement!==undefined){return e.toElement;}
else {return null;}
;}
,preventDefault:function(e){if(e.preventDefault){e.preventDefault();}
else {try{e.keyCode=0;}
catch(U){}
;e.returnValue=false;}
;}
,stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();}
else {e.cancelBubble=true;}
;}
,fire:function(X,V){if(document.createEvent){var W=document.createEvent(n);W.initEvent(V,true,true);return !X.dispatchEvent(W);}
else {var W=document.createEventObject();return X.fireEvent(J+V,W);}
;}
,supportsEvent:function(Y,bh){var bd=qx.core.Environment.get(h);var be=qx.core.Environment.get(E);if(bh.toLowerCase().indexOf(f)!=-1&&be===D&&qx.core.Environment.get(s)>9){return true;}
;var bf=[q,t];if(be===G&&bf.indexOf(bd)>-1){var ba=[b,F,j,I,m,u,y,d,o,v,H];if(ba.indexOf(bh.toLowerCase())>-1){return true;}
;}
;if(Y!=window&&bh.toLowerCase().indexOf(f)!=-1){var bg=qx.core.Environment.get(p);return (bg&&bg[C]==bh);}
;var bb=J+bh.toLowerCase();var bc=(bb in Y);if(!bc){bc=typeof Y[bb]==a;if(!bc&&Y.setAttribute){Y.setAttribute(bb,r);bc=typeof Y[bb]==a;Y.removeAttribute(bb);}
;}
;return bc;}
,getEventName:function(bi,bl){var bj=[w].concat(qx.bom.Style.VENDOR_PREFIXES);for(var i=0,l=bj.length;i<l;i++ ){var bk=bj[i].toLowerCase();if(qx.bom.Event.supportsEvent(bi,bk+bl)){return bk?bk+qx.lang.String.firstUp(bl):bl;}
;}
;return null;}
}});}
)();
(function(){var a="-",b="qx.bom.Style",c="",d='-',e="Webkit",f="ms",g=":",h=";",j="Moz",k="O",m="string",n="Khtml";qx.Bootstrap.define(b,{statics:{VENDOR_PREFIXES:[e,j,k,f,n],__cy:{},__cz:null,getPropertyName:function(q){var o=document.documentElement.style;if(o[q]!==undefined){return q;}
;for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++ ){var p=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(q);if(o[p]!==undefined){return p;}
;}
;return null;}
,getCssName:function(r){var s=this.__cy[r];if(!s){s=r.replace(/[A-Z]/g,function(t){return (d+t.charAt(0).toLowerCase());}
);if((/^ms/.test(s))){s=a+s;}
;this.__cy[r]=s;}
;return s;}
,getAppliedStyle:function(A,x,z,v){var C=qx.bom.Style.getCssName(x);var w=qx.dom.Node.getWindow(A);var u=(v!==false)?[null].concat(this.VENDOR_PREFIXES):[null];for(var i=0,l=u.length;i<l;i++ ){var y=false;var B=u[i]?a+u[i].toLowerCase()+a+z:z;if(qx.bom.Style.__cz){y=qx.bom.Style.__cz.call(w,C,B);}
else {A.style.cssText+=C+g+B+h;y=(typeof A.style[x]==m&&A.style[x]!==c);}
;if(y){return B;}
;}
;return null;}
},defer:function(D){if(window.CSS&&window.CSS.supports){qx.bom.Style.__cz=window.CSS.supports.bind(window.CSS);}
else if(window.supportsCSS){qx.bom.Style.__cz=window.supportsCSS.bind(window);}
;}
});}
)();
(function(){var a="[object Opera]",b="function",c="[^\\.0-9]",d="4.0",e="gecko",f="1.9.0.0",g="Version/",h="9.0",i="8.0",j="engine.version",k="Gecko",l="AppleWebKit/",m="Trident",n="Unsupported client: ",o="",p="opera",q="Windows Phone",r="! Assumed gecko version 1.9.0.0 (Firefox 3.0).",s="mshtml",t="engine.name",u="webkit",v="5.0",w=".",x="qx.bom.client.Engine";qx.Bootstrap.define(x,{statics:{getVersion:function(){var A=window.navigator.userAgent;var B=o;if(qx.bom.client.Engine.__cD()){var z=/Trident\/([^\);]+)(\)|;)/.test(A);if(/MSIE\s+([^\);]+)(\)|;)/.test(A)){B=RegExp.$1;if(B<8&&z){if(RegExp.$1==d){B=i;}
else if(RegExp.$1==v){B=h;}
;}
;}
else if(z){var D=/\brv\:(\d+?\.\d+?)\b/.exec(A);if(D){B=D[1];}
;}
;}
else if(qx.bom.client.Engine.__cA()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(A)){if(A.indexOf(g)!=-1){var D=A.match(/Version\/(\d+)\.(\d+)/);B=D[1]+w+D[2].charAt(0)+w+D[2].substring(1,D[2].length);}
else {B=RegExp.$1+w+RegExp.$2;if(RegExp.$3!=o){B+=w+RegExp.$3;}
;}
;}
;}
else if(qx.bom.client.Engine.__cB()){if(/AppleWebKit\/([^ ]+)/.test(A)){B=RegExp.$1;var C=RegExp(c).exec(B);if(C){B=B.slice(0,C.index);}
;}
;}
else if(qx.bom.client.Engine.__cC()){if(/rv\:([^\);]+)(\)|;)/.test(A)){B=RegExp.$1;}
;}
else {var y=window.qxFail;if(y&&typeof y===b){B=y().FULLVERSION;}
else {B=f;qx.Bootstrap.warn(n+A+r);}
;}
;return B;}
,getName:function(){var name;if(qx.bom.client.Engine.__cD()){name=s;}
else if(qx.bom.client.Engine.__cA()){name=p;}
else if(qx.bom.client.Engine.__cB()){name=u;}
else if(qx.bom.client.Engine.__cC()){name=e;}
else {var E=window.qxFail;if(E&&typeof E===b){name=E().NAME;}
else {name=e;qx.Bootstrap.warn(n+window.navigator.userAgent+r);}
;}
;return name;}
,__cA:function(){return window.opera&&Object.prototype.toString.call(window.opera)==a;}
,__cB:function(){return window.navigator.userAgent.indexOf(l)!=-1;}
,__cC:function(){return (window.navigator.mozApps||window.navigator.buildID)&&window.navigator.product===k&&window.navigator.userAgent.indexOf(m)==-1;}
,__cD:function(){if(window.navigator.cpuClass&&(/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent)||/Trident\/\d+?\.\d+?/.test(window.navigator.userAgent))){return true;}
;if(qx.bom.client.Engine.__cE()){return true;}
;return false;}
,__cE:function(){return window.navigator.userAgent.indexOf(q)>-1;}
},defer:function(F){qx.core.Environment.add(j,F.getVersion);qx.core.Environment.add(t,F.getName);}
});}
)();
(function(){var a="rim_tabletos",b="10.1",c="Darwin",d="10.3",e="Windows Phone",f="os.version",g="10.7",h="2003",i=")",j="iPhone",k="android",l="unix",m="ce",n="7",o="10.11",p="SymbianOS",q="10.5",r="os.name",s="10.12",t="10.9",u="|",v="MacPPC",w="95",x="iPod",y="10.8",z="\.",A="Win64",B="linux",C="me",D="10.2",E="Macintosh",F="Android",G="Windows",H="98",I="ios",J="10",K="vista",L="8",M="blackberry",N="2000",O="8.1",P="(",Q="",R="win",S="Linux",T="10.6",U="BSD",V="10.0",W="10.4",X="Mac OS X",Y="iPad",bu="X11",bv="xp",bw="symbian",bq="qx.bom.client.OperatingSystem",br="g",bs="Win32",bt="10.10",bA="osx",bB="webOS",bC="RIM Tablet OS",bD="BlackBerry",bx="nt4",by=".",bz="MacIntel",bp="webos";qx.Bootstrap.define(bq,{statics:{getName:function(){if(!navigator){return Q;}
;var bE=navigator.platform||Q;var bF=navigator.userAgent||Q;if(bE.indexOf(G)!=-1||bE.indexOf(bs)!=-1||bE.indexOf(A)!=-1||bF.indexOf(e)!=-1){return R;}
else if(bE.indexOf(E)!=-1||bE.indexOf(v)!=-1||bE.indexOf(bz)!=-1||bE.indexOf(X)!=-1){return bA;}
else if(bF.indexOf(bC)!=-1){return a;}
else if(bF.indexOf(bB)!=-1){return bp;}
else if(bE.indexOf(x)!=-1||bE.indexOf(j)!=-1||bE.indexOf(Y)!=-1){return I;}
else if(bF.indexOf(F)!=-1){return k;}
else if(bE.indexOf(S)!=-1){return B;}
else if(bE.indexOf(bu)!=-1||bE.indexOf(U)!=-1||bE.indexOf(c)!=-1){return l;}
else if(bE.indexOf(p)!=-1){return bw;}
else if(bE.indexOf(bD)!=-1){return M;}
;return Q;}
,__cF:{"Windows NT 10.0":J,"Windows NT 6.3":O,"Windows NT 6.2":L,"Windows NT 6.1":n,"Windows NT 6.0":K,"Windows NT 5.2":h,"Windows NT 5.1":bv,"Windows NT 5.0":N,"Windows 2000":N,"Windows NT 4.0":bx,"Win 9x 4.90":C,"Windows CE":m,"Windows 98":H,"Win98":H,"Windows 95":w,"Win95":w,"Mac OS X 10_12":s,"Mac OS X 10.12":s,"Mac OS X 10_11":o,"Mac OS X 10.11":o,"Mac OS X 10_10":bt,"Mac OS X 10.10":bt,"Mac OS X 10_9":t,"Mac OS X 10.9":t,"Mac OS X 10_8":y,"Mac OS X 10.8":y,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":T,"Mac OS X 10.6":T,"Mac OS X 10_5":q,"Mac OS X 10.5":q,"Mac OS X 10_4":W,"Mac OS X 10.4":W,"Mac OS X 10_3":d,"Mac OS X 10.3":d,"Mac OS X 10_2":D,"Mac OS X 10.2":D,"Mac OS X 10_1":b,"Mac OS X 10.1":b,"Mac OS X 10_0":V,"Mac OS X 10.0":V},getVersion:function(){var bG=qx.bom.client.OperatingSystem.__cG(navigator.userAgent);if(bG==null){bG=qx.bom.client.OperatingSystem.__cH(navigator.userAgent);}
;if(bG!=null){return bG;}
else {return Q;}
;}
,__cG:function(bH){var bK=[];for(var bJ in qx.bom.client.OperatingSystem.__cF){bK.push(bJ);}
;var bL=new RegExp(P+bK.join(u).replace(/\./g,z)+i,br);var bI=bL.exec(bH);if(bI&&bI[1]){return qx.bom.client.OperatingSystem.__cF[bI[1]];}
;return null;}
,__cH:function(bR){var bM=bR.indexOf(e)!=-1;var bS=bR.indexOf(F)!=-1;var bN=bR.match(/(iPad|iPhone|iPod)/i)?true:false;if(bM){var bU=new RegExp(/Windows Phone (\d+(?:\.\d+)+)/i);var bP=bU.exec(bR);if(bP&&bP[1]){return bP[1];}
;}
else if(bS){var bQ=new RegExp(/ Android (\d+(?:\.\d+)+)/i);var bT=bQ.exec(bR);if(bT&&bT[1]){return bT[1];}
;}
else if(bN){var bV=new RegExp(/(CPU|iPhone|iPod) OS (\d+)_(\d+)(?:_(\d+))*\s+/);var bO=bV.exec(bR);if(bO&&bO[2]&&bO[3]){if(bO[4]){return bO[2]+by+bO[3]+by+bO[4];}
else {return bO[2]+by+bO[3];}
;}
;}
;return null;}
},defer:function(bW){qx.core.Environment.add(r,bW.getName);qx.core.Environment.add(f,bW.getVersion);}
});}
)();
(function(){var a="CSS1Compat",b="IEMobile",c=" OPR/",d="msie",e="android",f="operamini",g="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|iPad|iPhone|OmniWeb|Maxthon|Pre|PhantomJS|Mobile Safari|Safari",h="browser.quirksmode",i="browser.name",j="trident",k="mobile chrome",l=")(/| )([0-9]+\.[0-9])",m="iemobile",n="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",o="IEMobile|Maxthon|MSIE|Trident",p="opera mobi",q="Mobile Safari",r="operamobile",s="ie",t="mobile safari",u="qx.bom.client.Browser",v="",w="opera mini",x="(",y="browser.version",z="opera",A="ce",B=")(/|)?([0-9]+\.[0-9])?",C="mshtml",D="Opera Mini|Opera Mobi|Opera",E="edge",F="webkit",G="browser.documentmode",H="5.0",I="Mobile/";qx.Bootstrap.define(u,{statics:{getName:function(){var L=navigator.userAgent;var M=new RegExp(x+qx.bom.client.Browser.__cI+B);var K=L.match(M);if(!K){return v;}
;var name=K[1].toLowerCase();var J=qx.bom.client.Engine.getName();if(J===F){if(L.match(/Edge\/\d+\.\d+/)){name=E;}
else if(name===e){name=k;}
else if(L.indexOf(q)!==-1||L.indexOf(I)!==-1){name=t;}
else if(L.indexOf(c)!=-1){name=z;}
;}
else if(J===C){if(name===d||name===j){name=s;if(qx.bom.client.OperatingSystem.getVersion()===A){name=m;}
;var M=new RegExp(b);if(L.match(M)){name=m;}
;}
;}
else if(J===z){if(name===p){name=r;}
else if(name===w){name=f;}
;}
;return name;}
,getVersion:function(){var P=navigator.userAgent;var Q=new RegExp(x+qx.bom.client.Browser.__cI+l);var N=P.match(Q);if(!N){return v;}
;var name=N[1].toLowerCase();var O=N[3];if(P.match(/Version(\/| )([0-9]+\.[0-9])/)){O=RegExp.$2;}
;if(qx.bom.client.Engine.getName()==C){O=qx.bom.client.Engine.getVersion();if(name===d&&qx.bom.client.OperatingSystem.getVersion()==A){O=H;}
;}
;if(qx.bom.client.Engine.getName()==F||qx.bom.client.Browser.getName()==z){if(P.match(/OPR(\/| )([0-9]+\.[0-9])/)){O=RegExp.$2;}
;if(P.match(/Edge\/([\d+\.*]+)/)){O=RegExp.$1;}
;}
;return O;}
,getDocumentMode:function(){if(document.documentMode){return document.documentMode;}
;return 0;}
,getQuirksMode:function(){if(qx.bom.client.Engine.getName()==C&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;}
else {return document.compatMode!==a;}
;}
,__cI:{"webkit":g,"gecko":n,"mshtml":o,"opera":D}[qx.bom.client.Engine.getName()]},defer:function(R){qx.core.Environment.add(i,R.getName);qx.core.Environment.add(y,R.getVersion);qx.core.Environment.add(G,R.getDocumentMode);qx.core.Environment.add(h,R.getQuirksMode);}
});}
)();
(function(){var a="qx.bom.client.CssTransition",b="E",c="transitionEnd",d="e",e="nd",f="transition",g="css.transition",h="Trans";qx.Bootstrap.define(a,{statics:{getTransitionName:function(){return qx.bom.Style.getPropertyName(f);}
,getSupport:function(){var name=qx.bom.client.CssTransition.getTransitionName();if(!name){return null;}
;var i=qx.bom.Event.getEventName(window,c);i=i==c?i.toLowerCase():i;if(!i){i=name+(name.indexOf(h)>0?b:d)+e;}
;return {name:name,"end-event":i};}
},defer:function(j){qx.core.Environment.add(g,j.getSupport);}
});}
)();
(function(){var a="Failed to remove event listener for id '",b="': ",c="Invalid context for callback.",d="Invalid capture flag.",e="Failed to add event listener for type '",f="UNKNOWN_",g="'",h="|bubble",j="Invalid event type.",k="There is no event handler for the event '",m=" from the target '",n="qx.debug",o="capture",p="|capture",q="Invalid callback function",r="qx.event.Manager",s="__cN",t="' on target '",u="'!",v="Could not dispatch event '",w="",x="_",y="DOM_",z="Invalid event target.",A="No dispatcher can handle event of type ",B="QX_",C=" to the target '",D="Failed to remove event listener for type '",E=" on ",F="Invalid id type.",G="c",H="|",I="qx.globalErrorHandling",J="__cO",K="unload",L="DOCUMENT_",M="Invalid object: ",N="Invalid Target.",O="WIN_",P="Invalid event object.";qx.Class.define(r,{extend:Object,implement:[qx.core.IDisposable],construct:function(Q,S){this.__cJ=Q;this.__cK=qx.core.ObjectRegistry.toHashCode(Q);this.__cL=S;if(Q.qx!==qx){var self=this;var R=function(){qx.bom.Event.removeNativeListener(Q,K,arguments.callee);self.dispose();}
;if(qx.core.Environment.get(I)){qx.bom.Event.addNativeListener(Q,K,qx.event.GlobalError.observeMethod(R));}
else {qx.bom.Event.addNativeListener(Q,K,R);}
;}
;this.__cM={};this.__cN={};this.__cO={};this.__cP={};this.__cQ=new qx.util.DeferredCall(function(){this.__cR=null;}
,this);this.__cQ.$$blackListCleaner=true;}
,statics:{__cS:0,getNextUniqueId:function(){return (this.__cS++ )+w;}
},members:{__cL:null,__cM:null,__cO:null,__cT:null,__cN:null,__cP:null,__cJ:null,__cK:null,__cR:null,__cQ:null,getWindow:function(){return this.__cJ;}
,getWindowId:function(){return this.__cK;}
,getHandler:function(U){var T=this.__cN[U.classname];if(T){return T;}
;return this.__cN[U.classname]=new U(this);}
,getDispatcher:function(W){var V=this.__cO[W.classname];if(V){return V;}
;return this.__cO[W.classname]=new W(this,this.__cL);}
,getListeners:function(Y,bd,X){var bb=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);var be=this.__cM[bb];if(!be){return null;}
;var bc=bd+(X?p:h);var ba=be[bc];return ba?ba.concat():null;}
,getAllListeners:function(){return this.__cM;}
,serializeListeners:function(bg){var bk=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);var bo=this.__cM[bk];var bj=[];if(bo){var bh,bn,bf,bi,bl;for(var bm in bo){bh=bm.indexOf(H);bn=bm.substring(0,bh);bf=bm.charAt(bh+1)==G;bi=bo[bm];for(var i=0,l=bi.length;i<l;i++ ){bl=bi[i];bj.push({self:bl.context,handler:bl.handler,type:bn,capture:bf});}
;}
;}
;return bj;}
,toggleAttachedEvents:function(br,bq){var bu=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);var bx=this.__cM[bu];if(bx){var bs,bw,bp,bt;for(var bv in bx){bs=bv.indexOf(H);bw=bv.substring(0,bs);bp=bv.charCodeAt(bs+1)===99;bt=bx[bv];if(bq){this.__cU(br,bw,bp);}
else {this.__cV(br,bw,bp);}
;}
;}
;}
,hasListener:function(bz,bD,by){if(qx.core.Environment.get(n)){if(bz==null){qx.log.Logger.trace(this);throw new Error(M+bz);}
;}
;var bB=bz.$$hash||qx.core.ObjectRegistry.toHashCode(bz);var bE=this.__cM[bB];if(!bE){return false;}
;var bC=bD+(by?p:h);var bA=bE[bC];return !!(bA&&bA.length>0);}
,importListeners:function(bF,bH){if(qx.core.Environment.get(n)){if(bF==null){qx.log.Logger.trace(this);throw new Error(M+bF);}
;}
;var bM=bF.$$hash||qx.core.ObjectRegistry.toHashCode(bF);var bN=this.__cM[bM]={};var bJ=qx.event.Manager;for(var bG in bH){var bK=bH[bG];var bL=bK.type+(bK.capture?p:h);var bI=bN[bL];if(!bI){bI=bN[bL]=[];this.__cU(bF,bK.type,bK.capture);}
;bI.push({handler:bK.listener,context:bK.self,unique:bK.unique||(bJ.__cS++ )+w});}
;}
,addListener:function(bQ,bX,bS,self,bO){if(qx.core.Environment.get(n)){var bU=e+bX+g+C+bQ.classname+b;qx.core.Assert.assertObject(bQ,bU+N);qx.core.Assert.assertString(bX,bU+j);qx.core.Assert.assertFunction(bS,bU+q);if(bO!==undefined){qx.core.Assert.assertBoolean(bO,d);}
;}
;var bP=bQ.$$hash||qx.core.ObjectRegistry.toHashCode(bQ);var bY=this.__cM[bP];if(!bY){bY=this.__cM[bP]={};}
;var bT=bX+(bO?p:h);var bR=bY[bT];if(!bR){bR=bY[bT]=[];}
;if(bR.length===0){this.__cU(bQ,bX,bO);}
;var bW=(qx.event.Manager.__cS++ )+w;var bV={handler:bS,context:self,unique:bW};bR.push(bV);return bT+H+bW;}
,findHandler:function(ce,cn){var cl=false,cd=false,co=false,ca=false;var ck;if(ce.nodeType===1){cl=true;ck=y+ce.tagName.toLowerCase()+x+cn;}
else if(ce.nodeType===9){ca=true;ck=L+cn;}
else if(ce==this.__cJ){cd=true;ck=O+cn;}
else if(ce.classname){co=true;ck=B+ce.classname+x+cn;}
else {ck=f+ce+x+cn;}
;var cc=this.__cP;if(cc[ck]){return cc[ck];}
;var cj=this.__cL.getHandlers();var cf=qx.event.IEventHandler;var ch,ci,cg,cb;for(var i=0,l=cj.length;i<l;i++ ){ch=cj[i];cg=ch.SUPPORTED_TYPES;if(cg&&!cg[cn]){continue;}
;cb=ch.TARGET_CHECK;if(cb){var cm=false;if(cl&&((cb&cf.TARGET_DOMNODE)!=0)){cm=true;}
else if(cd&&((cb&cf.TARGET_WINDOW)!=0)){cm=true;}
else if(co&&((cb&cf.TARGET_OBJECT)!=0)){cm=true;}
else if(ca&&((cb&cf.TARGET_DOCUMENT)!=0)){cm=true;}
;if(!cm){continue;}
;}
;ci=this.getHandler(cj[i]);if(ch.IGNORE_CAN_HANDLE||ci.canHandleEvent(ce,cn)){cc[ck]=ci;return ci;}
;}
;return null;}
,__cU:function(cs,cr,cp){var cq=this.findHandler(cs,cr);if(cq){cq.registerEvent(cs,cr,cp);return;}
;if(qx.core.Environment.get(n)){qx.log.Logger.warn(this,k+cr+t+cs+u);}
;}
,removeListener:function(cv,cB,cx,self,ct){if(qx.core.Environment.get(n)){var cz=D+cB+g+m+cv.classname+b;qx.core.Assert.assertObject(cv,cz+N);qx.core.Assert.assertString(cB,cz+j);qx.core.Assert.assertFunction(cx,cz+q);if(self!==undefined){qx.core.Assert.assertObject(self,c);}
;if(ct!==undefined){qx.core.Assert.assertBoolean(ct,d);}
;}
;var cu=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);var cC=this.__cM[cu];if(!cC){return false;}
;var cy=cB+(ct?p:h);var cw=cC[cy];if(!cw){return false;}
;var cA;for(var i=0,l=cw.length;i<l;i++ ){cA=cw[i];if(cA.handler===cx&&cA.context===self){qx.lang.Array.removeAt(cw,i);this.__cW(cA.unique);if(cw.length==0){this.__cV(cv,cB,ct);}
;return true;}
;}
;return false;}
,removeListenerById:function(cF,cN){if(qx.core.Environment.get(n)){var cJ=a+cN+g+m+cF.classname+b;qx.core.Assert.assertObject(cF,cJ+N);qx.core.Assert.assertString(cN,cJ+F);}
;var cH=cN.split(H);var cM=cH[0];var cD=cH[1].charCodeAt(0)==99;var cL=cH[2];var cE=cF.$$hash||qx.core.ObjectRegistry.toHashCode(cF);var cO=this.__cM[cE];if(!cO){return false;}
;var cI=cM+(cD?p:h);var cG=cO[cI];if(!cG){return false;}
;var cK;for(var i=0,l=cG.length;i<l;i++ ){cK=cG[i];if(cK.unique===cL){qx.lang.Array.removeAt(cG,i);this.__cW(cK.unique);if(cG.length==0){this.__cV(cF,cM,cD);}
;return true;}
;}
;return false;}
,removeAllListeners:function(cQ){var cS=cQ.$$hash||qx.core.ObjectRegistry.toHashCode(cQ);var cV=this.__cM[cS];if(!cV){return false;}
;var cR,cU,cP;for(var cT in cV){if(cV[cT].length>0){cR=cT.split(H);cV[cT].forEach(function(cW){this.__cW(cW.unique);}
,this);cU=cR[0];cP=cR[1]===o;this.__cV(cQ,cU,cP);}
;}
;delete this.__cM[cS];return true;}
,deleteAllListeners:function(cX){delete this.__cM[cX];}
,__cV:function(dc,db,cY){var da=this.findHandler(dc,db);if(da){da.unregisterEvent(dc,db,cY);return;}
;if(qx.core.Environment.get(n)){qx.log.Logger.warn(this,k+db+t+dc+u);}
;}
,dispatchEvent:function(de,event){if(qx.core.Environment.get(n)){var di=v+event+t+de.classname+b;qx.core.Assert.assertNotUndefined(de,di+z);qx.core.Assert.assertNotNull(de,di+z);qx.core.Assert.assertInstance(event,qx.event.type.Event,di+P);}
;var dj=event.getType();if(!event.getBubbles()&&!this.hasListener(de,dj)){qx.event.Pool.getInstance().poolObject(event);return true;}
;if(!event.getTarget()){event.setTarget(de);}
;var dh=this.__cL.getDispatchers();var dg;var dd=false;for(var i=0,l=dh.length;i<l;i++ ){dg=this.getDispatcher(dh[i]);if(dg.canDispatchEvent(de,event,dj)){dg.dispatchEvent(de,event,dj);dd=true;break;}
;}
;if(!dd){if(qx.core.Environment.get(n)){qx.log.Logger.error(this,A+dj+E+de);}
;return true;}
;var df=event.getDefaultPrevented();qx.event.Pool.getInstance().poolObject(event);return !df;}
,dispose:function(){this.__cL.removeManager(this);qx.util.DisposeUtil.disposeMap(this,s);qx.util.DisposeUtil.disposeMap(this,J);this.__cM=this.__cJ=this.__cT=null;this.__cL=this.__cP=null;}
,__cW:function(dk){if(this.__cR===null){this.__cR={};this.__cQ.schedule();}
;this.__cR[dk]=true;}
,isBlacklisted:function(dl){return (this.__cR!==null&&this.__cR[dl]===true);}
}});}
)();
(function(){var a="",b="[object JavaPackage]",c="qx.bom.client.Runtime",d="runtime.name",e="node.js",f="rhino",g="undefined",h="titanium",i="object";qx.Bootstrap.define(c,{statics:{getName:function(){var name=a;if(typeof Packages===i&&Object.prototype.toString.call(Packages)===b){name=f;}
else if(typeof process!==g){name=e;}
else if(typeof Titanium!==g&&typeof Titanium.userAgent!==g){name=h;}
else {name=qx.bom.client.Browser.getName();}
;return name;}
},defer:function(j){qx.core.Environment.add(d,j.getName);}
});}
)();
(function(){var a="\x00\b\n\f\r\t",b="-",c="function",d="[null,null,null]",e="T",f="+",g=",\n",h="constructor",i="{\n",j='"+275760-09-13T00:00:00.000Z"',k="true",l="\\n",m="false",n='"-271821-04-20T00:00:00.000Z"',o="json",p='object',q='""',r="qx.lang.Json",s="{}",t="hasOwnProperty",u="[null]",v="prototype",w='hasOwnProperty',x='"',y="toLocaleString",z="0",A='function',B="",C='\\"',D="\t",E="string",F="}",G="\r",H="toJSON",I=":",J="[\n 1,\n 2\n]",K="\\f",L='"1969-12-31T23:59:59.999Z"',M="/",N="\\b",O="Z",P="\\t",Q="\b",R="[object Number]",S="isPrototypeOf",T="{",U="toString",V="0x",W="[1]",X="\\r",Y="]",bJ=",",bK="null",bQ="\\u00",bN="\n",bO="json-stringify",bI="[]",bP="1",bT="@",bV="000000",bU="[object Boolean]",cd="valueOf",bR="\\\\",bL="[object String]",bM="json-parse",bS="bug-string-char-index",bY="[object Array]",cq="$",ca="[\n",cb='"-000001-01-01T00:00:00.000Z"',bW="[",cm="runtime.name",cc="\\",bX="rhino",ce="[object Date]",cf='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',cg="a",ch=" ",cl=".",cn="[object Function]",cp="01",ci='"\t"',cj="propertyIsEnumerable",ck="\f",co="object";qx.Bootstrap.define(r,{statics:{stringify:null,parse:null}});(function(){var cs;var cr;var ct;(function(window){if(qx.core.Environment.get(cm)===bX||qx.core.Environment.get(cm)===undefined)return;var cv={}.toString,cK,cU,cG;var cC=typeof ct===c&&ct.amd,cB=typeof cr===co&&cr;if(cB||cC){if(typeof JSON===co&&JSON){if(cB){cB.stringify=JSON.stringify;cB.parse=JSON.parse;}
else {cB=JSON;}
;}
else if(cC){cB=window.JSON={};}
;}
else {cB=window.JSON||(window.JSON={});}
;var cY=new Date(-3509827334573292);try{cY=cY.getUTCFullYear()==-109252&&cY.getUTCMonth()===0&&cY.getUTCDate()===1&&cY.getUTCHours()==10&&cY.getUTCMinutes()==37&&cY.getUTCSeconds()==6&&cY.getUTCMilliseconds()==708;}
catch(de){}
;function cN(name){if(name===bS){return cg[0]!=cg;}
;var di,dh=cf,dl=name===o;if(dl||name===bO||name===bM){if(name==bO||dl){var df=cB.stringify,dk=typeof df===c&&cY;if(dk){(di=function(){return 1;}
).toJSON=di;try{dk=df(0)===z&&df(new Number())===z&&df(new String())===q&&df(cv)===cG&&df(cG)===cG&&df()===cG&&df(di)===bP&&df([di])===W&&df([cG])===u&&df(null)===bK&&df([cG,cv,null])===d&&df({"a":[di,true,false,null,a]})==dh&&df(null,di)===bP&&df([1,2],null,1)===J&&df(new Date(-8.64e15))===n&&df(new Date(8.64e15))===j&&df(new Date(-621987552e5))===cb&&df(new Date(-1))===L;}
catch(dm){dk=false;}
;}
;if(!dl){return dk;}
;}
;if(name===bM||dl){var dj=cB.parse;if(typeof dj===c){try{if(dj(z)===0&&!dj(false)){di=dj(dh);var dg=di[cg].length==5&&di[cg][0]===1;if(dg){try{dg=!dj(ci);}
catch(dn){}
;if(dg){try{dg=dj(cp)!==1;}
catch(dp){}
;}
;}
;}
;}
catch(dq){dg=false;}
;}
;if(!dl){return dg;}
;}
;return dk&&dg;}
;}
;if(!cN(o)){var da=cn;var cR=ce;var cz=R;var dd=bL;var cV=bY;var cJ=bU;var cI=cN(bS);if(!cY){var cH=Math.floor;var cQ=[0,31,59,90,120,151,181,212,243,273,304,334];var dc=function(dr,ds){return cQ[ds]+365*(dr-1970)+cH((dr-1969+(ds=+(ds>1)))/4)-cH((dr-1901+ds)/100)+cH((dr-1601+ds)/400);}
;}
;if(!(cK={}.hasOwnProperty)){cK=function(dt){var du={},dv;if((du.__cX=null,du.__cX={"toString":1},du).toString!=cv){cK=function(dw){var dx=this.__cX,dy=dw in (this.__cX=null,this);this.__cX=dx;return dy;}
;}
else {dv=du.constructor;cK=function(dz){var parent=(this.constructor||dv).prototype;return dz in this&&!(dz in parent&&this[dz]===parent[dz]);}
;}
;du=null;return cK.call(this,dt);}
;}
;var cL={'boolean':1,'number':1,'string':1,'undefined':1};var cT=function(dC,dA){var dB=typeof dC[dA];return dB==p?!!dC[dA]:!cL[dB];}
;cU=function(dD,dE){var dJ=0,dI,dG,dH,dF;(dI=function(){this.valueOf=0;}
).prototype.valueOf=0;dG=new dI();for(dH in dG){if(cK.call(dG,dH)){dJ++ ;}
;}
;dI=dG=null;if(!dJ){dG=[cd,U,y,cj,S,t,h];dF=function(dL,dM){var dN=cv.call(dL)==da,dO,length;var dK=!dN&&typeof dL.constructor!=A&&cT(dL,w)?dL.hasOwnProperty:cK;for(dO in dL){if(!(dN&&dO===v)&&dK.call(dL,dO)){dM(dO);}
;}
;for(length=dG.length;dO=dG[ --length];dK.call(dL,dO)&&dM(dO));}
;}
else if(dJ==2){dF=function(dT,dP){var dS={},dQ=cv.call(dT)==da,dR;for(dR in dT){if(!(dQ&&dR===v)&&!cK.call(dS,dR)&&(dS[dR]=1)&&cK.call(dT,dR)){dP(dR);}
;}
;}
;}
else {dF=function(dX,dU){var dV=cv.call(dX)==da,dW,dY;for(dW in dX){if(!(dV&&dW===v)&&cK.call(dX,dW)&&!(dY=dW===h)){dU(dW);}
;}
;if(dY||cK.call(dX,(dW=h))){dU(dW);}
;}
;}
;return dF(dD,dE);}
;if(!cN(bO)){var cX={'92':bR,'34':C,'8':N,'12':K,'10':l,'13':X,'9':P};var cM=bV;var db=function(ea,eb){return (cM+(eb||0)).slice(-ea);}
;var cF=bQ;var cP=function(ed){var ef=x,ec=0,length=ed.length,eg=length>10&&cI,ee;if(eg){ee=ed.split(B);}
;for(;ec<length;ec++ ){var eh=ed.charCodeAt(ec);switch(eh){case 8:case 9:case 10:case 12:case 13:case 34:case 92:ef+=cX[eh];break;default:if(eh<32){ef+=cF+db(2,eh.toString(16));break;}
;ef+=eg?ee[ec]:cI?ed.charAt(ec):ed[ec];};}
;return ef+x;}
;var cw=function(eD,es,eA,ep,eo,eB,ew){var ex=es[eD],ez,em,ej,ev,eC,et,eE,er,eq,ei,ey,en,length,ek,eu,el;try{ex=es[eD];}
catch(eF){}
;if(typeof ex===co&&ex){ez=cv.call(ex);if(ez==cR&&!cK.call(ex,H)){if(ex>-1/0&&ex<1/0){if(dc){ev=cH(ex/864e5);for(em=cH(ev/365.2425)+1970-1;dc(em+1,0)<=ev;em++ );for(ej=cH((ev-dc(em,0))/30.42);dc(em,ej+1)<=ev;ej++ );ev=1+ev-dc(em,ej);eC=(ex%864e5+864e5)%864e5;et=cH(eC/36e5)%24;eE=cH(eC/6e4)%60;er=cH(eC/1e3)%60;eq=eC%1e3;}
else {em=ex.getUTCFullYear();ej=ex.getUTCMonth();ev=ex.getUTCDate();et=ex.getUTCHours();eE=ex.getUTCMinutes();er=ex.getUTCSeconds();eq=ex.getUTCMilliseconds();}
;ex=(em<=0||em>=1e4?(em<0?b:f)+db(6,em<0?-em:em):db(4,em))+b+db(2,ej+1)+b+db(2,ev)+e+db(2,et)+I+db(2,eE)+I+db(2,er)+cl+db(3,eq)+O;}
else {ex=null;}
;}
else if(typeof ex.toJSON===c&&((ez!=cz&&ez!=dd&&ez!=cV)||cK.call(ex,H))){ex=ex.toJSON(eD);}
;}
;if(eA){ex=eA.call(es,eD,ex);}
;if(ex===null){return bK;}
;ez=cv.call(ex);if(ez==cJ){return B+ex;}
else if(ez==cz){return ex>-1/0&&ex<1/0?B+ex:bK;}
else if(ez==dd){return cP(B+ex);}
;if(typeof ex===co){for(length=ew.length;length-- ;){if(ew[length]===ex){throw TypeError();}
;}
;ew.push(ex);ei=[];ek=eB;eB+=eo;if(ez==cV){for(en=0,length=ex.length;en<length;eu||(eu=true),en++ ){ey=cw(en,ex,eA,ep,eo,eB,ew);ei.push(ey===cG?bK:ey);}
;el=eu?(eo?ca+eB+ei.join(g+eB)+bN+ek+Y:(bW+ei.join(bJ)+Y)):bI;}
else {cU(ep||ex,function(eG){var eH=cw(eG,ex,eA,ep,eo,eB,ew);if(eH!==cG){ei.push(cP(eG)+I+(eo?ch:B)+eH);}
;eu||(eu=true);}
);el=eu?(eo?i+eB+ei.join(g+eB)+bN+ek+F:(T+ei.join(bJ)+F)):s;}
;ew.pop();return el;}
;}
;cB.stringify=function(eO,eN,eP){var eJ,eK,eM;if(typeof eN===c||typeof eN===co&&eN){if(cv.call(eN)==da){eK=eN;}
else if(cv.call(eN)==cV){eM={};for(var eI=0,length=eN.length,eL;eI<length;eL=eN[eI++ ],((cv.call(eL)==dd||cv.call(eL)==cz)&&(eM[eL]=1)));}
;}
;if(eP){if(cv.call(eP)==cz){if((eP-=eP%1)>0){for(eJ=B,eP>10&&(eP=10);eJ.length<eP;eJ+=ch);}
;}
else if(cv.call(eP)==dd){eJ=eP.length<=10?eP:eP.slice(0,10);}
;}
;return cw(B,(eL={},eL[B]=eO,eL),eK,eM,eJ,B,[]);}
;}
;if(!cN(bM)){var cE=String.fromCharCode;var cD={'92':cc,'34':x,'47':M,'98':Q,'116':D,'110':bN,'102':ck,'114':G};var cu,cy;var cA=function(){cu=cy=null;throw SyntaxError();}
;var cW=function(){var eS=cy,length=eS.length,eR,eQ,eU,eT,eV;while(cu<length){eV=eS.charCodeAt(cu);switch(eV){case 9:case 10:case 13:case 32:cu++ ;break;case 123:case 125:case 91:case 93:case 58:case 44:eR=cI?eS.charAt(cu):eS[cu];cu++ ;return eR;case 34:for(eR=bT,cu++ ;cu<length;){eV=eS.charCodeAt(cu);if(eV<32){cA();}
else if(eV==92){eV=eS.charCodeAt( ++cu);switch(eV){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:eR+=cD[eV];cu++ ;break;case 117:eQ= ++cu;for(eU=cu+4;cu<eU;cu++ ){eV=eS.charCodeAt(cu);if(!(eV>=48&&eV<=57||eV>=97&&eV<=102||eV>=65&&eV<=70)){cA();}
;}
;eR+=cE(V+eS.slice(eQ,cu));break;default:cA();};}
else {if(eV==34){break;}
;eV=eS.charCodeAt(cu);eQ=cu;while(eV>=32&&eV!=92&&eV!=34){eV=eS.charCodeAt( ++cu);}
;eR+=eS.slice(eQ,cu);}
;}
;if(eS.charCodeAt(cu)==34){cu++ ;return eR;}
;cA();default:eQ=cu;if(eV==45){eT=true;eV=eS.charCodeAt( ++cu);}
;if(eV>=48&&eV<=57){if(eV==48&&((eV=eS.charCodeAt(cu+1)),eV>=48&&eV<=57)){cA();}
;eT=false;for(;cu<length&&((eV=eS.charCodeAt(cu)),eV>=48&&eV<=57);cu++ );if(eS.charCodeAt(cu)==46){eU= ++cu;for(;eU<length&&((eV=eS.charCodeAt(eU)),eV>=48&&eV<=57);eU++ );if(eU==cu){cA();}
;cu=eU;}
;eV=eS.charCodeAt(cu);if(eV==101||eV==69){eV=eS.charCodeAt( ++cu);if(eV==43||eV==45){cu++ ;}
;for(eU=cu;eU<length&&((eV=eS.charCodeAt(eU)),eV>=48&&eV<=57);eU++ );if(eU==cu){cA();}
;cu=eU;}
;return +eS.slice(eQ,cu);}
;if(eT){cA();}
;if(eS.slice(cu,cu+4)===k){cu+=4;return true;}
else if(eS.slice(cu,cu+5)===m){cu+=5;return false;}
else if(eS.slice(cu,cu+4)===bK){cu+=4;return null;}
;cA();};}
;return cq;}
;var cO=function(eY){var eX,eW;if(eY===cq){cA();}
;if(typeof eY===E){if((cI?eY.charAt(0):eY[0])===bT){return eY.slice(1);}
;if(eY===bW){eX=[];for(;;eW||(eW=true)){eY=cW();if(eY===Y){break;}
;if(eW){if(eY===bJ){eY=cW();if(eY===Y){cA();}
;}
else {cA();}
;}
;if(eY===bJ){cA();}
;eX.push(cO(eY));}
;return eX;}
else if(eY===T){eX={};for(;;eW||(eW=true)){eY=cW();if(eY==F){break;}
;if(eW){if(eY===bJ){eY=cW();if(eY===F){cA();}
;}
else {cA();}
;}
;if(eY===bJ||typeof eY!==E||(cI?eY.charAt(0):eY[0])!==bT||cW()!==I){cA();}
;eX[eY.slice(1)]=cO(cW());}
;return eX;}
;cA();}
;return eY;}
;var cS=function(fa,fb,fc){var fd=cx(fa,fb,fc);if(fd===cG){delete fa[fb];}
else {fa[fb]=fd;}
;}
;var cx=function(fe,ff,fh){var fg=fe[ff],length;if(typeof fg===co&&fg){if(cv.call(fg)==cV){for(length=fg.length;length-- ;){cS(fg,length,fh);}
;}
else {cU(fg,function(fi){cS(fg,fi,fh);}
);}
;}
;return fh.call(fe,ff,fg);}
;cB.parse=function(fj,fm){var fk,fl;cu=0;cy=B+fj;fk=cO(cW());if(cW()!=cq){cA();}
;cu=cy=null;return fm&&cv.call(fm)==da?cx((fl={},fl[B]=fk,fl),B,fm):fk;}
;}
;}
;if(cC){ct(function(){return cB;}
);}
;}
(this||window));}
());qx.lang.Json.stringify=window.JSON.stringify;qx.lang.Json.parse=window.JSON.parse;}
)();
(function(){var c="Create event of type ",d="Invalid event dispatcher!",e="': ",f="Invalid event handler.",g="qx.debug",h=" with undefined class. Please use null to explicit fallback to default event type!",i="' on target '",j="Invalid event target.",k="Could not fire event '",l="qx.event.Registration.getManager(null) was called!",m="undefined",n="qx.event.Registration";qx.Class.define(n,{statics:{__cY:{},getManager:function(q){if(q==null){if(qx.core.Environment.get(g)){qx.log.Logger.error(l);qx.log.Logger.trace(this);}
;q=window;}
else if(q.nodeType){q=qx.dom.Node.getWindow(q);}
else if(!qx.dom.Node.isWindow(q)){q=window;}
;var p=q.$$hash||qx.core.ObjectRegistry.toHashCode(q);var o=this.__cY[p];if(!o){o=new qx.event.Manager(q,this);this.__cY[p]=o;}
;return o;}
,removeManager:function(r){var s=r.getWindowId();delete this.__cY[s];}
,addListener:function(w,v,t,self,u){return this.getManager(w).addListener(w,v,t,self,u);}
,removeListener:function(A,z,x,self,y){return this.getManager(A).removeListener(A,z,x,self,y);}
,removeListenerById:function(B,C){return this.getManager(B).removeListenerById(B,C);}
,removeAllListeners:function(D){return this.getManager(D).removeAllListeners(D);}
,deleteAllListeners:function(F){var E=F.$$hash;if(E){this.getManager(F).deleteAllListeners(E);}
;}
,hasListener:function(I,H,G){return this.getManager(I).hasListener(I,H,G);}
,serializeListeners:function(J){return this.getManager(J).serializeListeners(J);}
,createEvent:function(K,N,L){if(qx.core.Environment.get(g)){if(arguments.length>1&&N===undefined){throw new Error(c+K+h);}
;}
;if(N==null){N=qx.event.type.Event;}
;var M=qx.event.Pool.getInstance().getObject(N);L?M.init.apply(M,L):M.init();if(K){M.setType(K);}
;return M;}
,dispatchEvent:function(O,event){return this.getManager(O).dispatchEvent(O,event);}
,fireEvent:function(P,U,S,R){if(qx.core.Environment.get(g)){if(arguments.length>2&&S===undefined&&R!==undefined){throw new Error(c+U+h);}
;var T=k+U+i+(P?P.classname:m)+e;qx.core.Assert.assertNotUndefined(P,T+j);qx.core.Assert.assertNotNull(P,T+j);}
;var Q=this.createEvent(U,S||null,R);return this.getManager(P).dispatchEvent(P,Q);}
,fireNonBubblingEvent:function(V,bb,Y,X){if(qx.core.Environment.get(g)){if(arguments.length>2&&Y===undefined&&X!==undefined){throw new Error(c+bb+h);}
;}
;var ba=this.getManager(V);if(!ba.hasListener(V,bb,false)){return true;}
;var W=this.createEvent(bb,Y||null,X);return ba.dispatchEvent(V,W);}
,PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cN:[],addHandler:function(bc){if(qx.core.Environment.get(g)){qx.core.Assert.assertInterface(bc,qx.event.IEventHandler,f);}
;this.__cN.push(bc);this.__cN.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getHandlers:function(){return this.__cN;}
,__cO:[],addDispatcher:function(be,bd){if(qx.core.Environment.get(g)){qx.core.Assert.assertInterface(be,qx.event.IEventDispatcher,d);}
;this.__cO.push(be);this.__cO.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getDispatchers:function(){return this.__cO;}
}});}
)();
(function(){var a="qx.core.MEvent";qx.Mixin.define(a,{members:{__da:qx.event.Registration,addListener:function(d,b,self,c){if(!this.$$disposed){return this.__da.addListener(this,d,b,self,c);}
;return null;}
,addListenerOnce:function(j,g,i,f){var self=this;if(!i){i=this;}
;var h=function(e){self.removeListener(j,g,i,f);g.call(i,e);}
;if(!g.$$wrapped_callback){g.$$wrapped_callback={};}
;g.$$wrapped_callback[j+this.$$hash]=h;return this.addListener(j,h,i,f);}
,removeListener:function(m,k,self,l){if(!this.$$disposed){if(k.$$wrapped_callback&&k.$$wrapped_callback[m+this.$$hash]){var n=k.$$wrapped_callback[m+this.$$hash];delete k.$$wrapped_callback[m+this.$$hash];k=n;}
;return this.__da.removeListener(this,m,k,self,l);}
;return false;}
,removeListenerById:function(o){if(!this.$$disposed){return this.__da.removeListenerById(this,o);}
;return false;}
,hasListener:function(q,p){return this.__da.hasListener(this,q,p);}
,dispatchEvent:function(r){if(!this.$$disposed){return this.__da.dispatchEvent(this,r);}
;return true;}
,fireEvent:function(t,u,s){if(!this.$$disposed){return this.__da.fireEvent(this,t,u,s);}
;return true;}
,fireNonBubblingEvent:function(w,x,v){if(!this.$$disposed){return this.__da.fireNonBubblingEvent(this,w,x,v);}
;return true;}
,fireDataEvent:function(A,B,y,z){if(!this.$$disposed){if(y===undefined){y=null;}
;return this.__da.fireNonBubblingEvent(this,A,qx.event.type.Data,[B,y,!!z]);}
;return true;}
}});}
)();
(function(){var a="qx.event.IEventHandler";qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(c,b){}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
}});}
)();
(function(){var a="$$init_",b="No such property: ",c="set",d="qx.debug",e="get",f="$$user_",g="qx.core.MProperty",h="reset";qx.Mixin.define(g,{members:{set:function(j,k){var i=qx.core.Property.$$method.set;if(qx.Bootstrap.isString(j)){if(!this[i[j]]){if(this[c+qx.Bootstrap.firstUp(j)]!=undefined){this[c+qx.Bootstrap.firstUp(j)](k);return this;}
;throw new Error(b+j);}
;return this[i[j]](k);}
else {for(var l in j){if(!this[i[l]]){if(this[c+qx.Bootstrap.firstUp(l)]!=undefined){this[c+qx.Bootstrap.firstUp(l)](j[l]);continue;}
;throw new Error(b+l);}
;this[i[l]](j[l]);}
;return this;}
;}
,get:function(n){var m=qx.core.Property.$$method.get;if(!this[m[n]]){if(this[e+qx.Bootstrap.firstUp(n)]!=undefined){return this[e+qx.Bootstrap.firstUp(n)]();}
;throw new Error(b+n);}
;return this[m[n]]();}
,reset:function(p){var o=qx.core.Property.$$method.reset;if(!this[o[p]]){if(this[h+qx.Bootstrap.firstUp(p)]!=undefined){this[h+qx.Bootstrap.firstUp(p)]();return;}
;throw new Error(b+p);}
;this[o[p]]();}
,isPropertyInitialized:function(q){if(qx.core.Environment.get(d)){qx.core.Assert.assertString(q);if(!this[e+qx.Bootstrap.firstUp(q)]){throw new Error(b+q);}
;}
;return this[f+q]!==undefined||this[a+q]!==undefined;}
}});}
)();
(function(){var a="qx.core.MAssert";qx.Mixin.define(a,{members:{assert:function(c,b){qx.core.Assert.assert(c,b);}
,fail:function(d,e){qx.core.Assert.fail(d,e);}
,assertTrue:function(g,f){qx.core.Assert.assertTrue(g,f);}
,assertFalse:function(i,h){qx.core.Assert.assertFalse(i,h);}
,assertEquals:function(j,k,l){qx.core.Assert.assertEquals(j,k,l);}
,assertNotEquals:function(m,n,o){qx.core.Assert.assertNotEquals(m,n,o);}
,assertIdentical:function(p,q,r){qx.core.Assert.assertIdentical(p,q,r);}
,assertNotIdentical:function(s,t,u){qx.core.Assert.assertNotIdentical(s,t,u);}
,assertNotUndefined:function(w,v){qx.core.Assert.assertNotUndefined(w,v);}
,assertUndefined:function(y,x){qx.core.Assert.assertUndefined(y,x);}
,assertNotNull:function(A,z){qx.core.Assert.assertNotNull(A,z);}
,assertNull:function(C,B){qx.core.Assert.assertNull(C,B);}
,assertJsonEquals:function(D,E,F){qx.core.Assert.assertJsonEquals(D,E,F);}
,assertMatch:function(I,H,G){qx.core.Assert.assertMatch(I,H,G);}
,assertArgumentsCount:function(L,K,M,J){qx.core.Assert.assertArgumentsCount(L,K,M,J);}
,assertEventFired:function(P,event,Q,N,O){qx.core.Assert.assertEventFired(P,event,Q,N,O);}
,assertEventNotFired:function(T,event,R,S){qx.core.Assert.assertEventNotFired(T,event,R,S);}
,assertException:function(V,W,X,U){qx.core.Assert.assertException(V,W,X,U);}
,assertInArray:function(bb,ba,Y){qx.core.Assert.assertInArray(bb,ba,Y);}
,assertNotInArray:function(be,bd,bc){qx.core.Assert.assertNotInArray(be,bd,bc);}
,assertArrayEquals:function(bf,bg,bh){qx.core.Assert.assertArrayEquals(bf,bg,bh);}
,assertKeyInMap:function(bk,bj,bi){qx.core.Assert.assertKeyInMap(bk,bj,bi);}
,assertFunction:function(bm,bl){qx.core.Assert.assertFunction(bm,bl);}
,assertString:function(bo,bn){qx.core.Assert.assertString(bo,bn);}
,assertBoolean:function(bq,bp){qx.core.Assert.assertBoolean(bq,bp);}
,assertNumber:function(bs,br){qx.core.Assert.assertNumber(bs,br);}
,assertPositiveNumber:function(bu,bt){qx.core.Assert.assertPositiveNumber(bu,bt);}
,assertInteger:function(bw,bv){qx.core.Assert.assertInteger(bw,bv);}
,assertPositiveInteger:function(by,bx){qx.core.Assert.assertPositiveInteger(by,bx);}
,assertInRange:function(bB,bC,bA,bz){qx.core.Assert.assertInRange(bB,bC,bA,bz);}
,assertObject:function(bE,bD){qx.core.Assert.assertObject(bE,bD);}
,assertArray:function(bG,bF){qx.core.Assert.assertArray(bG,bF);}
,assertMap:function(bI,bH){qx.core.Assert.assertMap(bI,bH);}
,assertRegExp:function(bK,bJ){qx.core.Assert.assertRegExp(bK,bJ);}
,assertType:function(bN,bM,bL){qx.core.Assert.assertType(bN,bM,bL);}
,assertInstance:function(bP,bQ,bO){qx.core.Assert.assertInstance(bP,bQ,bO);}
,assertInterface:function(bT,bS,bR){qx.core.Assert.assertInterface(bT,bS,bR);}
,assertCssColor:function(bU,bW,bV){qx.core.Assert.assertCssColor(bU,bW,bV);}
,assertElement:function(bY,bX){qx.core.Assert.assertElement(bY,bX);}
,assertQxObject:function(cb,ca){qx.core.Assert.assertQxObject(cb,ca);}
,assertQxWidget:function(cd,cc){qx.core.Assert.assertQxWidget(cd,cc);}
}});}
)();
(function(){var a="module.events",b="Cloning only possible with properties.",c="qx.core.Object",d="]: ",e="module.property",f="qx.debug",g="Disposing ",h="qx.debug.dispose.level",j="]",k="Cannot call super class. Method is not derived: ",m="' in ",n="[",o="Missing destruct definition for '",p="object",q="qx.automaticMemoryManagement",r="Object";qx.Class.define(c,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvent,"module.property":qx.core.MProperty,"qx.debug":qx.core.MAssert}),construct:function(){if(!qx.core.Environment.get(q)||qx.Class.hasInterface(this.constructor,qx.core.IDisposable)){qx.core.ObjectRegistry.register(this);}
else {qx.core.ObjectRegistry.toHashCode(this);}
;}
,statics:{$$type:r},members:{__bc:qx.core.Environment.get(e)?qx.core.Property:null,toHashCode:function(){return this.$$hash;}
,toString:function(){return this.classname+n+this.$$hash+j;}
,base:function(s,t){if(qx.core.Environment.get(f)){if(!qx.Bootstrap.isFunction(s.callee.base)){throw new Error(k+s.callee.displayName);}
;}
;if(arguments.length===1){return s.callee.base.call(this);}
else {return s.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,self:function(u){return u.callee.self;}
,clone:function(){if(!qx.core.Environment.get(e)){throw new Error(b);}
;var w=this.constructor;var v=new w;var y=qx.Class.getProperties(w);var x=this.__bc.$$store.user;var z=this.__bc.$$method.set;var name;for(var i=0,l=y.length;i<l;i++ ){name=y[i];if(this.hasOwnProperty(x[name])){v[z[name]](this[x[name]]);}
;}
;return v;}
,__db:null,setUserData:function(A,B){if(!this.__db){this.__db={};}
;this.__db[A]=B;}
,getUserData:function(D){if(!this.__db){return null;}
;var C=this.__db[D];return C===undefined?null:C;}
,isDisposed:function(){return this.$$disposed||false;}
,isDisposing:function(){return this.$$disposing||false;}
,dispose:function(){if(this.$$disposed){return;}
;this.$$disposed=true;this.$$disposing=true;this.$$instance=null;this.$$allowconstruct=null;if(qx.core.Environment.get(f)){if(qx.core.Environment.get(h)>2){qx.Bootstrap.debug(this,g+this.classname+n+this.toHashCode()+j);}
;}
;var G=this.constructor;var E;while(G.superclass){if(G.$$destructor){G.$$destructor.call(this);}
;if(G.$$includes){E=G.$$flatIncludes;for(var i=0,l=E.length;i<l;i++ ){if(E[i].$$destructor){E[i].$$destructor.call(this);}
;}
;}
;G=G.superclass;}
;this.$$disposing=false;if(qx.core.Environment.get(f)){if(qx.core.Environment.get(h)>0){var H,F;for(H in this){F=this[H];if(F!==null&&typeof F===p&&!(qx.Bootstrap.isString(F))){if(this.constructor.prototype[H]!=null){continue;}
;if(qx.core.Environment.get(h)>1){qx.Bootstrap.warn(this,o+H+m+this.classname+n+this.toHashCode()+d+F);delete this[H];}
;}
;}
;}
;}
;}
,_disposeObjects:function(I){qx.util.DisposeUtil.disposeObjects(this,arguments);}
,_disposeSingletonObjects:function(J){qx.util.DisposeUtil.disposeObjects(this,arguments,true);}
,_disposeArray:function(K){qx.util.DisposeUtil.disposeArray(this,K);}
,_disposeMap:function(L){qx.util.DisposeUtil.disposeMap(this,L);}
},environment:{"qx.debug.dispose.level":0},destruct:function(){if(qx.core.Environment.get(a)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);}
else {qx.event.Registration.deleteAllListeners(this);}
;}
;qx.core.ObjectRegistry.unregister(this);this.__db=null;if(qx.core.Environment.get(e)){var O=this.constructor;var S;var T=this.__bc.$$store;var Q=T.user;var R=T.theme;var M=T.inherit;var P=T.useinit;var N=T.init;while(O){S=O.$$properties;if(S){for(var name in S){if(S[name].dereference){this[Q[name]]=this[R[name]]=this[M[name]]=this[P[name]]=this[N[name]]=undefined;}
;}
;}
;O=O.superclass;}
;}
;}
});}
)();
(function(){var a=" is a singleton! Please use disposeSingleton instead.",b="undefined",c="qx.debug",d="qx.ui.container.SlideBar or qx.ui.container.Stack!",e="qx.util.DisposeUtil",f=" of object: ",g="Container must be an instance of qx.ui.mobile.container.Composite.",h="!",j=" has non disposable entries: ",k="The map field: ",m="First argument must be a container widget!",n="qx.ui.container.Scroll or qx.ui.container.Resizer or ",o="The array field: ",p="Container must be an instance of qx.ui.container.Composite or ",q="The object stored in key ",r="Has no disposable object under key: ";qx.Class.define(e,{statics:{disposeObjects:function(t,s,u){var name;for(var i=0,l=s.length;i<l;i++ ){name=s[i];if(t[name]==null||!t.hasOwnProperty(name)){continue;}
;if(!qx.core.ObjectRegistry.inShutDown){if(t[name].dispose){if(!u&&t[name].constructor.$$instance){throw new Error(q+name+a);}
else {t[name].dispose();}
;}
else {throw new Error(r+name+h);}
;}
;t[name]=null;}
;}
,disposeArray:function(w,v){var x=w[v];if(!x){return;}
;if(qx.core.ObjectRegistry.inShutDown){w[v]=null;return;}
;try{var y;for(var i=x.length-1;i>=0;i-- ){y=x[i];if(y){y.dispose();}
;}
;}
catch(z){throw new Error(o+v+f+w+j+z);}
;x.length=0;w[v]=null;}
,disposeMap:function(B,A){var C=B[A];if(!C){return;}
;if(qx.core.ObjectRegistry.inShutDown){B[A]=null;return;}
;try{var E;for(var D in C){E=C[D];if(C.hasOwnProperty(D)&&E){E.dispose();}
;}
;}
catch(F){throw new Error(k+A+f+B+j+F);}
;B[A]=null;}
,disposeTriggeredBy:function(G,I){var H=I.dispose;I.dispose=function(){H.call(I);G.dispose();}
;}
,destroyContainer:function(K){if(qx.core.Environment.get(c)){if(qx.ui.mobile&&K instanceof qx.ui.mobile.core.Widget){qx.core.Assert.assertTrue(this.__dc(K),g);}
else {qx.core.Assert.assertQxWidget(K,m);qx.core.Assert.assertTrue(this.__dc(K),p+n+d);}
;}
;var J=[];this._collectContainerChildren(K,J);var L=J.length;for(var i=L-1;i>=0;i-- ){J[i].destroy();}
;K.destroy();}
,_collectContainerChildren:function(O,N){var P=O.getChildren();for(var i=0;i<P.length;i++ ){var M=P[i];N.push(M);if(this.__dc(M)){this._collectContainerChildren(M,N);}
;}
;}
,__dc:function(R){var Q=[];if(qx.ui.mobile&&R instanceof qx.ui.mobile.core.Widget){Q=[qx.ui.mobile.container.Composite];}
else {Q=[qx.ui.container.Composite,qx.ui.container.Scroll,qx.ui.container.SlideBar,qx.ui.container.Stack];}
;for(var i=0,l=Q.length;i<l;i++ ){if(typeof Q[i]!==b&&qx.Class.isSubClassOf(R.constructor,Q[i])){return true;}
;}
;return false;}
}});}
)();
(function(){var a="qx.event.handler.Object";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(c,b){return qx.Class.supportsEvent(c.constructor,b);}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var a="qx.event.IEventDispatcher";qx.Interface.define(a,{members:{canDispatchEvent:function(c,event,b){this.assertInstance(event,qx.event.type.Event);this.assertString(b);}
,dispatchEvent:function(e,event,d){this.assertInstance(event,qx.event.type.Event);this.assertString(d);}
}});}
)();
(function(){var a="Cannot stop propagation on a non bubbling event: ",b="qx.debug",c="Invalid argument value 'cancelable'.",d="Cannot prevent default action on a non cancelable event: ",e="Invalid argument value 'canBubble'.",f="qx.event.type.Event";qx.Class.define(f,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(h,g){if(qx.core.Environment.get(b)){if(h!==undefined){qx.core.Assert.assertBoolean(h,e);}
;if(g!==undefined){qx.core.Assert.assertBoolean(g,c);}
;}
;this._type=null;this._target=null;this._currentTarget=null;this._relatedTarget=null;this._originalTarget=null;this._stopPropagation=false;this._preventDefault=false;this._bubbles=!!h;this._cancelable=!!g;this._timeStamp=(new Date()).getTime();this._eventPhase=null;return this;}
,clone:function(i){if(i){var j=i;}
else {var j=qx.event.Pool.getInstance().getObject(this.constructor);}
;j._type=this._type;j._target=this._target;j._currentTarget=this._currentTarget;j._relatedTarget=this._relatedTarget;j._originalTarget=this._originalTarget;j._stopPropagation=this._stopPropagation;j._bubbles=this._bubbles;j._preventDefault=this._preventDefault;j._cancelable=this._cancelable;return j;}
,stop:function(){if(this._bubbles){this.stopPropagation();}
;if(this._cancelable){this.preventDefault();}
;}
,stopPropagation:function(){if(qx.core.Environment.get(b)){this.assertTrue(this._bubbles,a+this.getType());}
;this._stopPropagation=true;}
,getPropagationStopped:function(){return !!this._stopPropagation;}
,preventDefault:function(){if(qx.core.Environment.get(b)){this.assertTrue(this._cancelable,d+this.getType());}
;this._preventDefault=true;}
,getDefaultPrevented:function(){return !!this._preventDefault;}
,getType:function(){return this._type;}
,setType:function(k){this._type=k;}
,getEventPhase:function(){return this._eventPhase;}
,setEventPhase:function(l){this._eventPhase=l;}
,getTimeStamp:function(){return this._timeStamp;}
,getTarget:function(){return this._target;}
,setTarget:function(m){this._target=m;}
,getCurrentTarget:function(){return this._currentTarget||this._target;}
,setCurrentTarget:function(n){this._currentTarget=n;}
,getRelatedTarget:function(){return this._relatedTarget;}
,setRelatedTarget:function(o){this._relatedTarget=o;}
,getOriginalTarget:function(){return this._originalTarget;}
,setOriginalTarget:function(p){this._originalTarget=p;}
,getBubbles:function(){return this._bubbles;}
,setBubbles:function(q){this._bubbles=q;}
,isCancelable:function(){return this._cancelable;}
,setCancelable:function(r){this._cancelable=r;}
}});}
)();
(function(){var a="qx.util.ObjectPool",b="Class needs to be defined!",c="Object is already pooled: ",d="Integer";qx.Class.define(a,{extend:qx.core.Object,implement:[qx.core.IDisposable],construct:function(e){qx.core.Object.call(this);this.__dd={};if(e!=null){this.setSize(e);}
;}
,properties:{size:{check:d,init:Infinity}},members:{__dd:null,getObject:function(h){if(this.$$disposed){return new h;}
;if(!h){throw new Error(b);}
;var f=null;var g=this.__dd[h.classname];if(g){f=g.pop();}
;if(f){f.$$pooled=false;}
else {f=new h;}
;return f;}
,poolObject:function(k){if(!this.__dd){return;}
;var j=k.classname;var m=this.__dd[j];if(k.$$pooled){throw new Error(c+k);}
;if(!m){this.__dd[j]=m=[];}
;if(m.length>this.getSize()){if(k.destroy){k.destroy();}
else {k.dispose();}
;return;}
;k.$$pooled=true;m.push(k);}
},destruct:function(){var p=this.__dd;var n,o,i,l;for(n in p){o=p[n];for(i=0,l=o.length;i<l;i++ ){o[i].dispose();}
;}
;delete this.__dd;}
});}
)();
(function(){var a="singleton",b="qx.event.Pool";qx.Class.define(b,{extend:qx.util.ObjectPool,type:a,construct:function(){qx.util.ObjectPool.call(this,30);}
});}
)();
(function(){var a="' declared in the class '",b="'",c="' but found '",d="The context object '",e=" is not an available class': ",f="qx.debug",g="Expected event type to be instanceof '",h="' for the event '",j="' of '",k="The event type '",m="'is already disposed.",n="qx.event.dispatch.Direct";qx.Class.define(n,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(o){this._manager=o;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(q,event,p){return !event.getBubbles();}
,dispatchEvent:function(r,event,w){if(qx.core.Environment.get(f)){if(r instanceof qx.core.Object){var v=qx.Class.getEventType(r.constructor,w);var s=qx.Class.getByName(v);if(!s){this.error(k+w+a+r.constructor+e+v);}
else if(!(event instanceof s)){this.error(g+v+c+event.classname+b);}
;}
;}
;event.setEventPhase(qx.event.type.Event.AT_TARGET);var t=this._manager.getListeners(r,w,false);if(t){for(var i=0,l=t.length;i<l;i++ ){if(this._manager.isBlacklisted(t[i].unique)){continue;}
;var u=t[i].context||r;if(qx.core.Environment.get(f)){if(u&&u.isDisposed&&u.isDisposed()&&!u.isDisposing()){this.warn(d+u+h+w+j+r+m);}
;}
;t[i].handler.call(u,event);}
;}
;}
},defer:function(x){qx.event.Registration.addDispatcher(x);}
});}
)();
(function(){var a="qx.event.type.Data";qx.Class.define(a,{extend:qx.event.type.Event,members:{__de:null,__df:null,init:function(c,d,b){qx.event.type.Event.prototype.init.call(this,false,b);this.__de=c;this.__df=d;return this;}
,clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);f.__de=this.__de;f.__df=this.__df;return f;}
,getData:function(){return this.__de;}
,getOldData:function(){return this.__df;}
}});}
)();
(function(){var a="qx.util.DeferredCallManager",b="singleton";qx.Class.define(a,{extend:qx.core.Object,type:b,implement:[qx.core.IDisposable],construct:function(){this.__dg={};this.__dh=qx.lang.Function.bind(this.__dl,this);this.__di=false;}
,members:{__dj:null,__dk:null,__dg:null,__di:null,__dh:null,schedule:function(d){if(this.__dj==null){this.__dj=window.setTimeout(this.__dh,0);}
;var c=d.toHashCode();if(this.__dk&&this.__dk[c]){return;}
;this.__dg[c]=d;this.__di=true;}
,refreshTimeout:function(){if(this.__dj!==null){this.__dj=window.setTimeout(this.__dh,0);}
;}
,cancel:function(f){var e=f.toHashCode();if(this.__dk&&this.__dk[e]){this.__dk[e]=null;return;}
;delete this.__dg[e];if(qx.lang.Object.isEmpty(this.__dg)&&this.__dj!=null){window.clearTimeout(this.__dj);this.__dj=null;}
;}
,__dl:qx.event.GlobalError.observeMethod(function(){this.__dj=null;while(this.__di){this.__dk=qx.lang.Object.clone(this.__dg);this.__dg={};this.__di=false;for(var h in this.__dk){var g=this.__dk[h];if(g){this.__dk[h]=null;g.call();}
;}
;}
;this.__dk=null;}
)},destruct:function(){if(this.__dj!=null){window.clearTimeout(this.__dj);}
;this.__dh=this.__dg=null;}
});}
)();
(function(){var a='[object Boolean]',b="function",c='constructor',d='[object Date]',e="Invalid argument 'array'",f="qx.debug",g='[object Number]',h="Invalid argument 'map'",j='[object Array]',k=" at array index ",m="Could not convert complex objects like ",n='object',o="qx.lang.Object",p='[object String]',q='[object RegExp]',r="undefined",s=" to map syntax",t="object";qx.Bootstrap.define(o,{statics:{empty:function(u){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(u,h);}
;for(var v in u){if(u.hasOwnProperty(v)){delete u[v];}
;}
;}
,isEmpty:function(w){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(w,h);}
;for(var x in w){return false;}
;return true;}
,getLength:qx.Bootstrap.objectGetLength,getValues:function(z){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(z,h);}
;var A=[];var y=Object.keys(z);for(var i=0,l=y.length;i<l;i++ ){A.push(z[y[i]]);}
;return A;}
,mergeWith:qx.Bootstrap.objectMergeWith,clone:function(B,E){if(qx.lang.Type.isObject(B)){var C={};for(var D in B){if(E){C[D]=qx.lang.Object.clone(B[D],E);}
else {C[D]=B[D];}
;}
;return C;}
else if(qx.lang.Type.isArray(B)){var C=[];for(var i=0;i<B.length;i++ ){if(E){C[i]=qx.lang.Object.clone(B[i],E);}
else {C[i]=B[i];}
;}
;return C;}
;return B;}
,equals:function(F,G){return qx.lang.Object.__dm(F,G,[],[]);}
,__dm:function(N,J,H,I){if(N===J){return N!==0||1/N==1/J;}
;if(N==null||J==null){return N===J;}
;var M=Object.prototype.toString.call(N);if(M!=Object.prototype.toString.call(J)){return false;}
;switch(M){case p:return N==String(J);case g:return N!=+N?J!=+J:(N==0?1/N==1/J:N==+J);case d:case a:return +N==+J;case q:return N.source==J.source&&N.global==J.global&&N.multiline==J.multiline&&N.ignoreCase==J.ignoreCase;};if(typeof N!=n||typeof J!=n){return false;}
;var length=H.length;while(length-- ){if(H[length]==N){return I[length]==J;}
;}
;var L=N.constructor,K=J.constructor;if(L!==K&&!(qx.Bootstrap.isFunction(L)&&(L instanceof L)&&qx.Bootstrap.isFunction(K)&&(K instanceof K))&&(c in N&&c in J)){return false;}
;H.push(N);I.push(J);var Q=0,O=true;if(M==j){Q=N.length;O=Q==J.length;if(O){while(Q-- ){if(!(O=qx.lang.Object.__dm(N[Q],J[Q],H,I))){break;}
;}
;}
;}
else {for(var P in N){if(Object.prototype.hasOwnProperty.call(N,P)){Q++ ;if(!(O=Object.prototype.hasOwnProperty.call(J,P)&&qx.lang.Object.__dm(N[P],J[P],H,I))){break;}
;}
;}
;if(O){for(P in J){if(Object.prototype.hasOwnProperty.call(J,P)&&!(Q-- )){break;}
;}
;O=!Q;}
;}
;H.pop();I.pop();return O;}
,invert:function(R){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(R,h);}
;var S={};for(var T in R){S[R[T].toString()]=T;}
;return S;}
,getKeyFromValue:function(U,V){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(U,h);}
;for(var W in U){if(U.hasOwnProperty(W)&&U[W]===V){return W;}
;}
;return null;}
,contains:function(X,Y){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertMap(X,h);}
;return this.getKeyFromValue(X,Y)!==null;}
,fromArray:function(ba){if(qx.core.Environment.get(f)){qx.core.Assert&&qx.core.Assert.assertArray(ba,e);}
;var bb={};for(var i=0,l=ba.length;i<l;i++ ){if(qx.core.Environment.get(f)){switch(typeof ba[i]){case t:case b:case r:throw new Error(m+ba[i]+k+i+s);};}
;bb[ba[i].toString()]=true;}
;return bb;}
}});}
)();
(function(){var a="qx.util.DeferredCall",b="The context object '",c="qx.debug",d="'is already disposed.",e="' of the defered call '";qx.Class.define(a,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);this.__bN=f;this.__bP=g||null;this.__dn=qx.util.DeferredCallManager.getInstance();}
,members:{__bN:null,__bP:null,__dn:null,cancel:function(){this.__dn.cancel(this);}
,schedule:function(){this.__dn.schedule(this);}
,call:function(){if(qx.core.Environment.get(c)){var h=this.__bP;if(h&&h.isDisposed&&h.isDisposed()){this.warn(b+h+e+this+d);}
;}
;this.__bP?this.__bN.apply(this.__bP):this.__bN();}
},destruct:function(){this.cancel();this.__bP=this.__bN=this.__dn=null;}
});}
)();
(function(){var a="qx.data.marshal.MEventBubbling",b="",c="]",d="idBubble-",f="[",g="changeBubble",h=".",j="qx.event.type.Data";qx.Mixin.define(a,{events:{"changeBubble":j},members:{_applyEventPropagation:function(l,k,name){this.fireDataEvent(g,{value:l,name:name,old:k,item:this});this._registerEventChaining(l,k,name);}
,_registerEventChaining:function(n,m,name){if(m!=null&&m.getUserData&&m.getUserData(d+this.$$hash)!=null){var p=m.getUserData(d+this.$$hash);for(var i=0;i<p.length;i++ ){m.removeListenerById(p[i]);}
;m.setUserData(d+this.$$hash,null);}
;if((n instanceof qx.core.Object)&&qx.Class.hasMixin(n.constructor,qx.data.marshal.MEventBubbling)){var o=qx.lang.Function.bind(this.__do,this,name);var q=n.addListener(g,o,this);var p=n.getUserData(d+this.$$hash);if(p==null){p=[];n.setUserData(d+this.$$hash,p);}
;p.push(q);}
;}
,__do:function(name,e){var y=e.getData();var u=y.value;var s=y.old;if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(y.name.indexOf){var x=y.name.indexOf(h)!=-1?y.name.indexOf(h):y.name.length;var v=y.name.indexOf(f)!=-1?y.name.indexOf(f):y.name.length;if(v==0){var t=name+y.name;}
else if(x<v){var r=y.name.substring(0,x);var w=y.name.substring(x+1,y.name.length);if(w[0]!=f){w=h+w;}
;var t=name+f+r+c+w;}
else if(v<x){var r=y.name.substring(0,v);var w=y.name.substring(v,y.name.length);var t=name+f+r+c+w;}
else {var t=name+f+y.name+c;}
;}
else {var t=name+f+y.name+c;}
;}
else {if(parseInt(name)==name&&name!==b){name=f+name+c;}
;var t=name+h+y.name;}
;this.fireDataEvent(g,{value:u,name:t,old:s,item:y.item||e.getTarget()});}
}});}
)();
(function(){var a="-",b="add",c="order",d="add/remove",e="Boolean",f="",g="remove",h="Please use 'toArray()' to see the content.",j="qx.data.Array",k="qx.debug",l="Type of the parameter not supported!",m="The parameter must be an array.",n="0-",o="change",p="0",q="number",r="changeBubble",s="changeLength",t="qx.event.type.Data";qx.Class.define(j,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(u){qx.core.Object.call(this);if(u==undefined){this.__dp=[];}
else if(arguments.length>1){this.__dp=[];for(var i=0;i<arguments.length;i++ ){this.__dp.push(arguments[i]);}
;}
else if(typeof u==q){this.__dp=new Array(u);}
else if(u instanceof Array){this.__dp=qx.lang.Array.clone(u);}
else {this.__dp=[];this.dispose();throw new Error(l);}
;for(var i=0;i<this.__dp.length;i++ ){this._applyEventPropagation(this.__dp[i],null,i);}
;this.__dq();if(qx.core.Environment.get(k)){this[0]=h;}
;}
,properties:{autoDisposeItems:{check:e,init:false}},events:{"change":t,"changeLength":t},members:{__dp:null,concat:function(v){v=qx.lang.Array.toNativeArray(v);if(v){var w=this.__dp.concat(v);}
else {var w=this.__dp.concat();}
;return new qx.data.Array(w);}
,join:function(x){return this.__dp.join(x);}
,pop:function(){var y=this.__dp.pop();this.__dq();this._registerEventChaining(null,y,this.length-1);this.fireDataEvent(r,{value:[],name:this.length+f,old:[y],item:this});this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:g,removed:[y],added:[]},null);return y;}
,push:function(z){for(var i=0;i<arguments.length;i++ ){this.__dp.push(arguments[i]);this.__dq();this._registerEventChaining(arguments[i],null,this.length-1);this.fireDataEvent(r,{value:[arguments[i]],name:(this.length-1)+f,old:[],item:this});this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:b,added:[arguments[i]],removed:[]},null);}
;return this.length;}
,reverse:function(){if(this.length==0){return;}
;var A=this.__dp.concat();this.__dp.reverse();this.__dr(0,this.length);this.fireDataEvent(o,{start:0,end:this.length-1,type:c,added:[],removed:[]},null);this.fireDataEvent(r,{value:this.__dp,name:n+(this.__dp.length-1),old:A,item:this});}
,shift:function(){if(this.length==0){return;}
;var B=this.__dp.shift();this.__dq();this._registerEventChaining(null,B,this.length-1);this.__dr(0,this.length);this.fireDataEvent(r,{value:[],name:p,old:[B],item:this});this.fireDataEvent(o,{start:0,end:this.length-1,type:g,removed:[B],added:[]},null);return B;}
,slice:function(D,C){return new qx.data.Array(this.__dp.slice(D,C));}
,splice:function(I,K,M){var Q=this.__dp.length;var L=this.__dp.splice.apply(this.__dp,arguments);if(this.__dp.length!=Q){this.__dq();}
else if(K==arguments.length-2){var E=qx.lang.Array.fromArguments(arguments,2);for(var i=0;i<E.length;i++ ){if(E[i]!==L[i]){break;}
;if(i==E.length-1){return new qx.data.Array();}
;}
;}
;var O=K>0;var G=arguments.length>2;if(O||G){var E=qx.lang.Array.fromArguments(arguments,2);if(L.length==0){var P=b;var H=I+E.length;}
else if(E.length==0){var P=g;var H=this.length-1;}
else {var P=d;var H=I+Math.max(E.length,L.length)-1;}
;this.fireDataEvent(o,{start:I,end:H,type:P,added:E,removed:L},null);}
;for(var i=0;i<L.length;i++ ){this._registerEventChaining(null,L[i],i);}
;for(var i=2;i<arguments.length;i++ ){this._registerEventChaining(arguments[i],null,I+(i-2));}
;this.__dr(I+(arguments.length-2)-K,this.length);if(O||G){var J=[];for(var i=2;i<arguments.length;i++ ){J[i-2]=arguments[i];}
;var F=(I+Math.max(arguments.length-3,K-1));var name=I==F?F:I+a+F;var N={value:J,name:name+f,old:L,item:this};this.fireDataEvent(r,N);}
;return (new qx.data.Array(L));}
,replace:function(R){R=qx.lang.Array.toNativeArray(R);if(this.equals(R)){return;}
;var S=[0,this.getLength()];R.forEach(function(T){S.push(T);}
);this.splice.apply(this,S);}
,sort:function(V){if(this.length==0){return;}
;var U=this.__dp.concat();this.__dp.sort.apply(this.__dp,arguments);if(qx.lang.Array.equals(this.__dp,U)===true){return;}
;this.__dr(0,this.length);this.fireDataEvent(o,{start:0,end:this.length-1,type:c,added:[],removed:[]},null);this.fireDataEvent(r,{value:this.__dp,name:n+(this.length-1),old:U,item:this});}
,unshift:function(W){for(var i=arguments.length-1;i>=0;i-- ){this.__dp.unshift(arguments[i]);this.__dq();this.__dr(0,this.length);this.fireDataEvent(r,{value:[this.__dp[0]],name:p,old:[this.__dp[1]],item:this});this.fireDataEvent(o,{start:0,end:this.length-1,type:b,added:[arguments[i]],removed:[]},null);}
;return this.length;}
,toArray:function(){return this.__dp;}
,getItem:function(X){return this.__dp[X];}
,setItem:function(Y,bb){var ba=this.__dp[Y];if(ba===bb){return;}
;this.__dp[Y]=bb;this._registerEventChaining(bb,ba,Y);if(this.length!=this.__dp.length){this.__dq();}
;this.fireDataEvent(r,{value:[bb],name:Y+f,old:[ba],item:this});this.fireDataEvent(o,{start:Y,end:Y,type:d,added:[bb],removed:[ba]},null);}
,getLength:function(){return this.length;}
,indexOf:function(bc){return this.__dp.indexOf(bc);}
,lastIndexOf:function(bd){return this.__dp.lastIndexOf(bd);}
,toString:function(){if(this.__dp!=null){return this.__dp.toString();}
;return f;}
,contains:function(be){return this.__dp.indexOf(be)!==-1;}
,copy:function(){return this.concat();}
,insertAt:function(bf,bg){this.splice(bf,0,bg).dispose();}
,insertBefore:function(bi,bh){var bj=this.indexOf(bi);if(bj==-1){this.push(bh);}
else {this.splice(bj,0,bh).dispose();}
;}
,insertAfter:function(bl,bk){var bm=this.indexOf(bl);if(bm==-1||bm==(this.length-1)){this.push(bk);}
else {this.splice(bm+1,0,bk).dispose();}
;}
,removeAt:function(bn){var bo=this.splice(bn,1);var bp=bo.getItem(0);bo.dispose();return bp;}
,removeAll:function(){for(var i=0;i<this.__dp.length;i++ ){this._registerEventChaining(null,this.__dp[i],i);}
;if(this.getLength()==0){return [];}
;var br=this.getLength();var bq=this.__dp.concat();this.__dp.length=0;this.__dq();this.fireDataEvent(r,{value:[],name:n+(br-1),old:bq,item:this});this.fireDataEvent(o,{start:0,end:br-1,type:g,removed:bq,added:[]},null);return bq;}
,append:function(bs){bs=qx.lang.Array.toNativeArray(bs);if(qx.core.Environment.get(k)){qx.core.Assert.assertArray(bs,m);}
;var bt=this.__dp.length;Array.prototype.push.apply(this.__dp,bs);for(var i=0;i<bs.length;i++ ){this._registerEventChaining(bs[i],null,bt+i);}
;var bt=this.length;this.__dq();var name=bt==(this.length-1)?bt:bt+a+(this.length-1);this.fireDataEvent(r,{value:bs,name:name+f,old:[],item:this});this.fireDataEvent(o,{start:bt,end:this.length-1,type:b,added:bs,removed:[]},null);}
,exclude:function(bu){bu=qx.lang.Array.toNativeArray(bu);bu.forEach(function(bv){this.remove(bv);}
,this);}
,remove:function(bw){var bx=this.indexOf(bw);if(bx!=-1){this.splice(bx,1).dispose();return bw;}
;}
,equals:function(by){if(this.length!==by.length){return false;}
;by=qx.lang.Array.toNativeArray(by);for(var i=0;i<this.length;i++ ){if(this.getItem(i)!==by[i]){return false;}
;}
;return true;}
,sum:function(){var bz=0;for(var i=0;i<this.length;i++ ){bz+=this.getItem(i);}
;return bz;}
,max:function(){var bA=this.getItem(0);for(var i=1;i<this.length;i++ ){if(this.getItem(i)>bA){bA=this.getItem(i);}
;}
;return bA===undefined?null:bA;}
,min:function(){var bB=this.getItem(0);for(var i=1;i<this.length;i++ ){if(this.getItem(i)<bB){bB=this.getItem(i);}
;}
;return bB===undefined?null:bB;}
,forEach:function(bC,bD){for(var i=0;i<this.__dp.length;i++ ){bC.call(bD,this.__dp[i],i,this);}
;}
,filter:function(bE,self){return new qx.data.Array(this.__dp.filter(bE,self));}
,map:function(bF,self){return new qx.data.Array(this.__dp.map(bF,self));}
,some:function(bG,self){return this.__dp.some(bG,self);}
,every:function(bH,self){return this.__dp.every(bH,self);}
,reduce:function(bJ,bI){return this.__dp.reduce(bJ,bI);}
,reduceRight:function(bL,bK){return this.__dp.reduceRight(bL,bK);}
,__dq:function(){var bM=this.length;this.length=this.__dp.length;this.fireDataEvent(s,this.length,bM);}
,__dr:function(bO,bN){for(var i=bO;i<bN;i++ ){this._registerEventChaining(this.__dp[i],this.__dp[i],i);}
;}
},destruct:function(){for(var i=0;i<this.__dp.length;i++ ){var bP=this.__dp[i];this._applyEventPropagation(null,bP,i);if(this.isAutoDisposeItems()&&bP&&bP instanceof qx.core.Object){bP.dispose();}
;}
;this.__dp=null;}
});}
)();
(function(){var a="To enable localization please include qx.locale.Manager into your build!",b="qx.locale.MTranslation";qx.Mixin.define(b,{members:{tr:function(c,e){var d=qx.locale.Manager;if(d){return d.tr.apply(d,arguments);}
;throw new Error(a);}
,trn:function(g,j,f,h){var i=qx.locale.Manager;if(i){return i.trn.apply(i,arguments);}
;throw new Error(a);}
,trc:function(n,m,l){var k=qx.locale.Manager;if(k){return k.trc.apply(k,arguments);}
;throw new Error(a);}
,trnc:function(p,q,r,o,s){var t=qx.locale.Manager;if(t){return t.trnc.apply(t,arguments);}
;throw new Error(a);}
,marktr:function(v){var u=qx.locale.Manager;if(u){return u.marktr.apply(u,arguments);}
;throw new Error(a);}
}});}
)();
(function(){var a="qx.application.IApplication";qx.Interface.define(a,{members:{main:function(){}
,finalize:function(){}
,close:function(){}
,terminate:function(){}
}});}
)();
(function(){var a="qx.core.BaseInit",b="engine.name",c="Main runtime: ",d="",f="qx.application",g="os.name",h="engine.version",i="Missing application class: ",j="Load runtime: ",k="ms",l="Could not detect engine!",m="Finalize runtime: ",n="Could not detect operating system!",o="Could not detect the version of the engine!";qx.Class.define(a,{statics:{__ds:null,getApplication:function(){return this.__ds||null;}
,ready:function(){if(this.__ds){return;}
;if(qx.core.Environment.get(b)==d){qx.log.Logger.warn(l);}
;if(qx.core.Environment.get(h)==d){qx.log.Logger.warn(o);}
;if(qx.core.Environment.get(g)==d){qx.log.Logger.warn(n);}
;qx.log.Logger.debug(this,j+(new Date-qx.Bootstrap.LOADSTART)+k);var q=qx.core.Environment.get(f);var r=qx.Class.getByName(q);if(r){this.__ds=new r;var p=new Date;this.__ds.main();qx.log.Logger.debug(this,c+(new Date-p)+k);var p=new Date;this.__ds.finalize();qx.log.Logger.debug(this,m+(new Date-p)+k);}
else {qx.log.Logger.warn(i+q);}
;}
,__dt:function(e){var s=this.__ds;if(s){s.close();}
;}
,__du:function(){var t=this.__ds;if(t){t.terminate();}
;}
}});}
)();
(function(){var a="qx.event.type.Native";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,e,f,d,c){qx.event.type.Event.prototype.init.call(this,d,c);this._target=e||qx.bom.Event.getTarget(b);this._relatedTarget=f||qx.bom.Event.getRelatedTarget(b);if(b.timeStamp){this._timeStamp=b.timeStamp;}
;this._native=b;this._returnValue=null;return this;}
,clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);var i={};h._native=this._cloneNativeEvent(this._native,i);h._returnValue=this._returnValue;return h;}
,_cloneNativeEvent:function(j,k){k.preventDefault=(function(){}
);return k;}
,preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);qx.bom.Event.preventDefault(this._native);}
,getNativeEvent:function(){return this._native;}
,setReturnValue:function(l){this._returnValue=l;}
,getReturnValue:function(){return this._returnValue;}
}});}
)();
(function(){var a="qx.globalErrorHandling",b="qx.event.handler.Window";qx.Class.define(b,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(c){qx.core.Object.call(this);this._manager=c;this._window=c.getWindow();this._initWindowObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(f,d){}
,registerEvent:function(i,h,g){}
,unregisterEvent:function(l,k,j){}
,_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);var m=qx.event.handler.Window.SUPPORTED_TYPES;for(var n in m){qx.bom.Event.addNativeListener(this._window,n,this._onNativeWrapper);}
;}
,_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;for(var p in o){qx.bom.Event.removeNativeListener(this._window,p,this._onNativeWrapper);}
;}
,_onNative:function(){var q=qx.core.Environment.select(a,{"true":qx.event.GlobalError.observeMethod(this.__dv),"false":this.__dv});q.apply(this,arguments);}
,__dv:function(e){if(this.isDisposed()){return;}
;var v=this._window;var s;try{s=v.document;}
catch(w){return;}
;var t=s.documentElement;var r=qx.bom.Event.getTarget(e);if(r==null||r===v||r===s||r===t){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,v]);qx.event.Registration.dispatchEvent(v,event);var u=event.getReturnValue();if(u!=null){e.returnValue=u;return u;}
;}
;}
},destruct:function(){this._stopWindowObserver();this._manager=this._window=null;}
,defer:function(x){qx.event.Registration.addHandler(x);}
});}
)();
(function(){var a="ready",b="mshtml",c="engine.name",d="qx.event.handler.Application",f="complete",g="webkit",h="gecko",i="qx.globalErrorHandling",j="load",k="unload",l="opera",m="left",n="DOMContentLoaded",o="shutdown",p="browser.documentmode";qx.Class.define(d,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(q){qx.core.Object.call(this);this._window=q.getWindow();this.__dw=false;this.__dx=false;this.__dy=false;this.__dz=false;this._initObserver();qx.event.handler.Application.$$instance=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var r=qx.event.handler.Application.$$instance;if(r){r.__dA();}
;}
},members:{canHandleEvent:function(t,s){}
,registerEvent:function(w,v,u){}
,unregisterEvent:function(z,y,x){}
,__dy:null,__dw:null,__dx:null,__dz:null,__dA:function(){if(!this.__dy&&this.__dw&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(c)==b)){if(qx.event.Registration.hasListener(this._window,a)){this.__dy=true;qx.event.Registration.fireEvent(this._window,a);}
;}
else {this.__dy=true;qx.event.Registration.fireEvent(this._window,a);}
;}
;}
,isApplicationReady:function(){return this.__dy;}
,_initObserver:function(){if(qx.$$domReady||document.readyState==f||document.readyState==a){this.__dw=true;this.__dA();}
else {this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);if(qx.core.Environment.get(c)==h||qx.core.Environment.get(c)==l||qx.core.Environment.get(c)==g||(qx.core.Environment.get(c)==b&&qx.core.Environment.get(p)>8)){qx.bom.Event.addNativeListener(this._window,n,this._onNativeLoadWrapped);}
else {var self=this;var A=function(){try{document.documentElement.doScroll(m);if(document.body){self._onNativeLoadWrapped();}
;}
catch(B){window.setTimeout(A,100);}
;}
;A();}
;qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);}
;this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);qx.bom.Event.addNativeListener(this._window,k,this._onNativeUnloadWrapped);}
,_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);}
;qx.bom.Event.removeNativeListener(this._window,k,this._onNativeUnloadWrapped);this._onNativeLoadWrapped=null;this._onNativeUnloadWrapped=null;}
,_onNativeLoad:function(){var C=qx.core.Environment.select(i,{"true":qx.event.GlobalError.observeMethod(this.__dB),"false":this.__dB});C.apply(this,arguments);}
,__dB:function(){this.__dw=true;this.__dA();}
,_onNativeUnload:function(){var D=qx.core.Environment.select(i,{"true":qx.event.GlobalError.observeMethod(this.__dC),"false":this.__dC});D.apply(this,arguments);}
,__dC:function(){if(!this.__dz){this.__dz=true;try{qx.event.Registration.fireEvent(this._window,o);}
catch(e){throw e;}
;}
;}
},destruct:function(){this._stopObserver();this._window=null;}
,defer:function(E){qx.event.Registration.addHandler(E);}
});}
)();
(function(){var a="ready",b="shutdown",c="beforeunload",d="qx.core.Init";qx.Class.define(d,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__dt:function(e){var f=this.getApplication();if(f){e.setReturnValue(f.close());}
;}
,__du:function(){var g=this.getApplication();if(g){g.terminate();}
;}
},defer:function(h){qx.event.Registration.addListener(window,a,h.ready,h);qx.event.Registration.addListener(window,b,h.__du,h);qx.event.Registration.addListener(window,c,h.__dt,h);}
});}
)();
(function(){var a="Abstract method call",b="abstract",c="*",d="",e="-webkit-tap-highlight-color: transparent;",f="-ms-touch-select: none;",g="qx.application.AbstractGui",h="-webkit-touch-callout: none;",i="-webkit-tap-highlight-color: rgba(0,0,0,0);";qx.Class.define(g,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__dD:null,_createRootWidget:function(){throw new Error(a);}
,getRoot:function(){return this.__dD;}
,main:function(){qx.theme.manager.Meta.getInstance().initialize();qx.ui.tooltip.Manager.getInstance();var j=[h,f,i,e].join(d);qx.ui.style.Stylesheet.getInstance().addRule(c,j);this.__dD=this._createRootWidget();window.scrollTo(0,0);}
,finalize:function(){this.render();}
,render:function(){qx.ui.core.queue.Manager.flush();}
,close:function(k){}
,terminate:function(){}
}});}
)();
(function(){var a="The theme to use is not available: ",b="_applyTheme",c="qx.theme",d="qx.theme.manager.Meta",f="qx.theme.Modern",g="qx.event.type.Event",h="Theme",i="changeTheme",j="singleton";qx.Class.define(d,{type:j,extend:qx.core.Object,events:{"changeTheme":g},properties:{theme:{check:h,nullable:false,apply:b}},members:{_applyTheme:function(k,m){var u=true;var w=true;var o=true;var q=true;var l=true;if(m){u=k.meta.color!==m.meta.color;w=k.meta.decoration!==m.meta.decoration;o=k.meta.font!==m.meta.font;q=k.meta.icon!==m.meta.icon;l=k.meta.appearance!==m.meta.appearance;}
;var n=qx.theme.manager.Color.getInstance();var t=qx.theme.manager.Decoration.getInstance();var r=qx.theme.manager.Font.getInstance();var p=qx.theme.manager.Icon.getInstance();var s=qx.theme.manager.Appearance.getInstance();this._suspendEvents();if(u){if(!w){var v=t.getTheme();t._applyTheme(v);}
;n.setTheme(k.meta.color);}
;t.setTheme(k.meta.decoration);r.setTheme(k.meta.font);p.setTheme(k.meta.icon);s.setTheme(k.meta.appearance);if(u||w||o||q||l){this.fireEvent(i);}
;this._activateEvents();}
,__dE:null,_fireEvent:function(e){if(e.getTarget()===qx.theme.manager.Color.getInstance()){qx.theme.manager.Decoration.getInstance().refresh();}
;this.fireEvent(i);}
,_suspendEvents:function(){var B=qx.theme.manager.Color.getInstance();var A=qx.theme.manager.Decoration.getInstance();var x=qx.theme.manager.Font.getInstance();var z=qx.theme.manager.Icon.getInstance();var y=qx.theme.manager.Appearance.getInstance();if(B.hasListener(i)){B.removeListener(i,this._fireEvent,this);}
;if(A.hasListener(i)){A.removeListener(i,this._fireEvent,this);}
;if(x.hasListener(i)){x.removeListener(i,this._fireEvent,this);}
;if(z.hasListener(i)){z.removeListener(i,this._fireEvent,this);}
;if(y.hasListener(i)){y.removeListener(i,this._fireEvent,this);}
;}
,_activateEvents:function(){var G=qx.theme.manager.Color.getInstance();var F=qx.theme.manager.Decoration.getInstance();var C=qx.theme.manager.Font.getInstance();var E=qx.theme.manager.Icon.getInstance();var D=qx.theme.manager.Appearance.getInstance();if(!G.hasListener(i)){G.addListener(i,this._fireEvent,this);}
;if(!F.hasListener(i)){F.addListener(i,this._fireEvent,this);}
;if(!C.hasListener(i)){C.addListener(i,this._fireEvent,this);}
;if(!E.hasListener(i)){E.addListener(i,this._fireEvent,this);}
;if(!D.hasListener(i)){D.addListener(i,this._fireEvent,this);}
;}
,initialize:function(){var J=qx.core.Environment;var H,I;H=J.get(c);if(H){I=qx.Theme.getByName(H);if(!I){throw new Error(a+H);}
;this.setTheme(I);}
;}
},environment:{"qx.theme":f}});}
)();
(function(){var a="qx.util.ValueManager",b="abstract";qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this._dynamic={};}
,members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];}
,isDynamic:function(d){return !!this._dynamic[d];}
,resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];}
;return e;}
,_setDynamic:function(f){this._dynamic=f;}
,_getDynamic:function(){return this._dynamic;}
}});}
)();
(function(){var a="Could not parse color: ",b="_applyTheme",c="qx.theme.manager.Color",d="Theme",e="changeTheme",f="string",g="singleton";qx.Class.define(c,{type:g,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:e}},members:{_applyTheme:function(j){var h={};if(j){var i=j.colors;for(var name in i){h[name]=this.__dF(i,name);}
;}
;this._setDynamic(h);}
,__dF:function(l,name){var k=l[name];if(typeof k===f){if(!qx.util.ColorUtil.isCssString(k)){if(l[k]!=undefined){return this.__dF(l,k);}
;throw new Error(a+k);}
;return k;}
else if(k instanceof Array){return qx.util.ColorUtil.rgbToRgbString(k);}
;throw new Error(a+k);}
,resolve:function(p){var o=this._dynamic;var m=o[p];if(m){return m;}
;var n=this.getTheme();if(n!==null&&n.colors[p]){return o[p]=n.colors[p];}
;return p;}
,isDynamic:function(s){var r=this._dynamic;if(s&&(r[s]!==undefined)){return true;}
;var q=this.getTheme();if(q!==null&&s&&(q.colors[s]!==undefined)){r[s]=q.colors[s];return true;}
;return false;}
}});}
)();
(function(){var a="Could not parse color: ",c="",d="Invalid hex value: ",e="Could not convert system colors to RGB: ",h="(",j=")",k="#",l="a",m="Invalid hex3 value: ",n="qx.theme.manager.Color",o="qx.util.ColorUtil",q="Invalid hex6 value: ",s="rgb",u=",";qx.Bootstrap.define(o,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(v){return this.NAMED[v]!==undefined;}
,isSystemColor:function(w){return this.SYSTEM[w]!==undefined;}
,supportsThemes:function(){if(qx.Class){return qx.Class.isDefined(n);}
;return false;}
,isThemedColor:function(x){if(!this.supportsThemes()){return false;}
;if(qx.theme&&qx.theme.manager&&qx.theme.manager.Color){return qx.theme.manager.Color.getInstance().isDynamic(x);}
;return false;}
,stringToRgb:function(y){if(this.supportsThemes()&&this.isThemedColor(y)){y=qx.theme.manager.Color.getInstance().resolveDynamic(y);}
;if(this.isNamedColor(y)){return this.NAMED[y].concat();}
else if(this.isSystemColor(y)){throw new Error(e+y);}
else if(this.isRgbaString(y)){return this.__dH(y);}
else if(this.isRgbString(y)){return this.__dG();}
else if(this.isHex3String(y)){return this.__dI();}
else if(this.isHex6String(y)){return this.__dJ();}
;throw new Error(a+y);}
,cssStringToRgb:function(z){if(this.isNamedColor(z)){return this.NAMED[z];}
else if(this.isSystemColor(z)){throw new Error(e+z);}
else if(this.isRgbString(z)){return this.__dG();}
else if(this.isRgbaString(z)){return this.__dH();}
else if(this.isHex3String(z)){return this.__dI();}
else if(this.isHex6String(z)){return this.__dJ();}
;throw new Error(a+z);}
,stringToRgbString:function(A){return this.rgbToRgbString(this.stringToRgb(A));}
,rgbToRgbString:function(B){return s+(B[3]!==undefined?l:c)+h+B.join(u)+j;}
,rgbToHexString:function(C){return (k+qx.lang.String.pad(C[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(C[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(C[2].toString(16).toUpperCase(),2));}
,isValidPropertyValue:function(D){return (this.isThemedColor(D)||this.isNamedColor(D)||this.isHex3String(D)||this.isHex6String(D)||this.isRgbString(D)||this.isRgbaString(D));}
,isCssString:function(E){return (this.isSystemColor(E)||this.isNamedColor(E)||this.isHex3String(E)||this.isHex6String(E)||this.isRgbString(E)||this.isRgbaString(E));}
,isHex3String:function(F){return this.REGEXP.hex3.test(F);}
,isHex6String:function(G){return this.REGEXP.hex6.test(G);}
,isRgbString:function(H){return this.REGEXP.rgb.test(H);}
,isRgbaString:function(I){return this.REGEXP.rgba.test(I);}
,__dG:function(){var L=parseInt(RegExp.$1,10);var K=parseInt(RegExp.$2,10);var J=parseInt(RegExp.$3,10);return [L,K,J];}
,__dH:function(){var P=parseInt(RegExp.$1,10);var O=parseInt(RegExp.$2,10);var M=parseInt(RegExp.$3,10);var N=parseFloat(RegExp.$4,10);if(P===0&&O===0&M===0&&N===0){return [-1,-1,-1];}
;return [P,O,M];}
,__dI:function(){var S=parseInt(RegExp.$1,16)*17;var R=parseInt(RegExp.$2,16)*17;var Q=parseInt(RegExp.$3,16)*17;return [S,R,Q];}
,__dJ:function(){var V=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);var U=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);var T=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);return [V,U,T];}
,hex3StringToRgb:function(W){if(this.isHex3String(W)){return this.__dI(W);}
;throw new Error(m+W);}
,hex3StringToHex6String:function(X){if(this.isHex3String(X)){return this.rgbToHexString(this.hex3StringToRgb(X));}
;return X;}
,hex6StringToRgb:function(Y){if(this.isHex6String(Y)){return this.__dJ(Y);}
;throw new Error(q+Y);}
,hexStringToRgb:function(ba){if(this.isHex3String(ba)){return this.__dI(ba);}
;if(this.isHex6String(ba)){return this.__dJ(ba);}
;throw new Error(d+ba);}
,rgbToHsb:function(bi){var bc,bd,bf;var bm=bi[0];var bj=bi[1];var bb=bi[2];var bl=(bm>bj)?bm:bj;if(bb>bl){bl=bb;}
;var be=(bm<bj)?bm:bj;if(bb<be){be=bb;}
;bf=bl/255.0;if(bl!=0){bd=(bl-be)/bl;}
else {bd=0;}
;if(bd==0){bc=0;}
else {var bh=(bl-bm)/(bl-be);var bk=(bl-bj)/(bl-be);var bg=(bl-bb)/(bl-be);if(bm==bl){bc=bg-bk;}
else if(bj==bl){bc=2.0+bh-bg;}
else {bc=4.0+bk-bh;}
;bc=bc/6.0;if(bc<0){bc=bc+1.0;}
;}
;return [Math.round(bc*360),Math.round(bd*100),Math.round(bf*100)];}
,hsbToRgb:function(bn){var i,f,p,r,t;var bo=bn[0]/360;var bp=bn[1]/100;var bq=bn[2]/100;if(bo>=1.0){bo%=1.0;}
;if(bp>1.0){bp=1.0;}
;if(bq>1.0){bq=1.0;}
;var br=Math.floor(255*bq);var bs={};if(bp==0.0){bs.red=bs.green=bs.blue=br;}
else {bo*=6.0;i=Math.floor(bo);f=bo-i;p=Math.floor(br*(1.0-bp));r=Math.floor(br*(1.0-(bp*f)));t=Math.floor(br*(1.0-(bp*(1.0-f))));switch(i){case 0:bs.red=br;bs.green=t;bs.blue=p;break;case 1:bs.red=r;bs.green=br;bs.blue=p;break;case 2:bs.red=p;bs.green=br;bs.blue=t;break;case 3:bs.red=p;bs.green=r;bs.blue=br;break;case 4:bs.red=t;bs.green=p;bs.blue=br;break;case 5:bs.red=br;bs.green=p;bs.blue=r;break;};}
;return [bs.red,bs.green,bs.blue];}
,randomColor:function(){var r=Math.round(Math.random()*255);var g=Math.round(Math.random()*255);var b=Math.round(Math.random()*255);return this.rgbToRgbString([r,g,b]);}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="_applyTheme",d="",e="'.",f="qx-",g="__dM",h="Unable to resolve decorator '",j="singleton",k=";",l="qx.theme.manager.Decoration",m=".",n="Theme",o="object",p="changeTheme",q="string",r="browser.documentmode",s=":";qx.Class.define(l,{type:j,extend:qx.core.Object,implement:[qx.core.IDisposable],statics:{CSS_CLASSNAME_PREFIX:f},construct:function(){qx.core.Object.call(this);this.__dK=[];this.__dL=(qx.core.Environment.get(b)==a&&qx.core.Environment.get(r)<9);}
,properties:{theme:{check:n,nullable:true,apply:c,event:p}},members:{__dM:null,__dK:null,__dL:false,getCssClassName:function(u){var t=qx.theme.manager.Decoration.CSS_CLASSNAME_PREFIX;if(qx.lang.Type.isString(u)){return t+u;}
else {return t+u.toHashCode();}
;}
,addCssClass:function(x){var w=qx.ui.style.Stylesheet.getInstance();var z=x;x=this.getCssClassName(x);var y=m+x;if(w.hasRule(y)){return x;}
;if(qx.lang.Type.isString(z)){z=this.resolve(z);}
;if(!z){throw new Error(h+x+e);}
;var A=d;var v=z.getStyles(true);Object.keys(v).sort().forEach(function(E){if(qx.Bootstrap.isObject(v[E])){var B=d;var G=v[E];var D=false;for(var C in G){D=true;B+=C+s+G[C]+k;}
;var F=this.__dL?y:y+(D?s:d);this.__dK.push(F+E);w.addRule(F+E,B);return;}
;A+=E+s+v[E]+k;}
,this);if(A){w.addRule(y,A);this.__dK.push(y);}
;return x;}
,removeAllCssClasses:function(){for(var i=0;i<this.__dK.length;i++ ){var H=this.__dK[i];qx.ui.style.Stylesheet.getInstance().removeRule(H);}
;this.__dK=[];}
,resolve:function(L){if(!L){return null;}
;if(typeof L===o){return L;}
;var M=this.getTheme();if(!M){return null;}
;var J=this.__dM;if(!J){J=this.__dM={};}
;var I=J[L];if(I){return I;}
;var O=qx.lang.Object.clone(M.decorations[L],true);if(!O){return null;}
;if(!O.style){O.style={};}
;var K=O;while(K.include){K=M.decorations[K.include];if(!O.decorator&&K.decorator){O.decorator=qx.lang.Object.clone(K.decorator);}
;if(K.style){for(var N in K.style){if(O.style[N]===undefined){O.style[N]=qx.lang.Object.clone(K.style[N],true);}
;}
;}
;}
;return J[L]=(new qx.ui.decoration.Decorator()).set(O.style);}
,isValidPropertyValue:function(P){if(typeof P===q){return this.isDynamic(P);}
else if(typeof P===o){var Q=P.constructor;return qx.Class.hasInterface(Q,qx.ui.decoration.IDecorator);}
;return false;}
,isDynamic:function(S){if(!S){return false;}
;var R=this.getTheme();if(!R){return false;}
;return !!R.decorations[S];}
,isCached:function(T){return !this.__dM?false:qx.lang.Object.contains(this.__dM,T);}
,_applyTheme:function(X,V){var W=qx.util.AliasManager.getInstance();this.removeAllCssClasses();if(V){for(var U in V.aliases){W.remove(U);}
;}
;if(X){for(var U in X.aliases){W.add(U,X.aliases[U]);}
;}
;this._disposeMap(g);this.__dM={};}
,clear:function(){var bb=qx.util.AliasManager.getInstance();var ba=this.getTheme();if(!bb.isDisposed()&&ba&&ba.alias){for(var Y in ba.aliases){bb.remove(Y,ba.aliases[Y]);}
;}
;this.removeAllCssClasses();this._disposeMap(g);this.__dM={};}
,refresh:function(){this.clear();var be=qx.util.AliasManager.getInstance();var bd=this.getTheme();if(bd&&bd.alias){for(var bc in bd.aliases){be.add(bc,bd.aliases[bc]);}
;}
;}
},destruct:function(){this.clear();}
});}
)();
(function(){var a="qx.ui.style.Stylesheet",b="singleton";qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__dN=qx.bom.Stylesheet.createElement();this.__dK=[];}
,members:{__dK:null,__dN:null,addRule:function(d,c){if(this.hasRule(d)){return;}
;qx.bom.Stylesheet.addRule(this.__dN,d,c);this.__dK.push(d);}
,hasRule:function(e){return this.__dK.indexOf(e)!=-1;}
,removeRule:function(f){delete this.__dK[this.__dK.indexOf(f)];qx.bom.Stylesheet.removeRule(this.__dN,f);}
}});}
)();
(function(){var a="qx.bom.client.Stylesheet",b="html.stylesheet.deleterule",c="html.stylesheet.insertrule",d="function",e="html.stylesheet.createstylesheet",f="html.stylesheet.addimport",g="html.stylesheet.removeimport",h="object";qx.Bootstrap.define(a,{statics:{__dO:function(){if(!qx.bom.client.Stylesheet.__dP){qx.bom.client.Stylesheet.__dP=qx.bom.Stylesheet.createElement();}
;return qx.bom.client.Stylesheet.__dP;}
,getCreateStyleSheet:function(){return typeof document.createStyleSheet===h;}
,getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__dO().insertRule===d;}
,getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__dO().deleteRule===d;}
,getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__dO().addImport===h);}
,getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__dO().removeImport===h);}
},defer:function(i){qx.core.Environment.add(e,i.getCreateStyleSheet);qx.core.Environment.add(c,i.getInsertRule);qx.core.Environment.add(b,i.getDeleteRule);qx.core.Environment.add(f,i.getAddImport);qx.core.Environment.add(g,i.getRemoveImport);}
});}
)();
(function(){var a="stylesheet",b="qx.bom.Stylesheet.addRule: The rule '",c="head",d="' must not be enclosed in braces",e="html.stylesheet.insertrule",f='qx.debug',g="' for the selector '",h="}",j="html.stylesheet.createstylesheet",k='@import "',l="text/css",m="{",n='";',o="html.stylesheet.removeimport",p="html.stylesheet.deleterule",q="qx.bom.Stylesheet",r="html.stylesheet.addimport",s="link",t="style";qx.Bootstrap.define(q,{statics:{includeFile:function(w,u){if(!u){u=document;}
;var x=u.createElement(s);x.type=l;x.rel=a;x.href=w;var v=u.getElementsByTagName(c)[0];v.appendChild(x);}
,createElement:function(y){if(qx.core.Environment.get(j)){var z=document.createStyleSheet();if(y){z.cssText=y;}
;return z;}
else {var A=document.createElement(t);A.type=l;if(y){A.appendChild(document.createTextNode(y));}
;document.getElementsByTagName(c)[0].appendChild(A);return A.sheet;}
;}
,addRule:function(D,E,C){if(qx.core.Environment.get(f)){var B=b+C+g+E+d;qx.core.Assert.assertFalse(/^\s*?\{.*?\}\s*?$/.test(C),B);}
;if(qx.core.Environment.get(e)){D.insertRule(E+m+C+h,D.cssRules.length);}
else {D.addRule(E,C);}
;}
,removeRule:function(G,I){if(qx.core.Environment.get(p)){var F=G.cssRules;var H=F.length;for(var i=H-1;i>=0; --i){if(F[i].selectorText==I){G.deleteRule(i);}
;}
;}
else {var F=G.rules;var H=F.length;for(var i=H-1;i>=0; --i){if(F[i].selectorText==I){G.removeRule(i);}
;}
;}
;}
,removeSheet:function(K){var J=K.ownerNode?K.ownerNode:K.owningElement;qx.dom.Element.removeChild(J,J.parentNode);}
,removeAllRules:function(M){if(qx.core.Environment.get(p)){var L=M.cssRules;var N=L.length;for(var i=N-1;i>=0;i-- ){M.deleteRule(i);}
;}
else {var L=M.rules;var N=L.length;for(var i=N-1;i>=0;i-- ){M.removeRule(i);}
;}
;}
,addImport:function(P,O){if(qx.core.Environment.get(r)){P.addImport(O);}
else {P.insertRule(k+O+n,P.cssRules.length);}
;}
,removeImport:function(Q,R){if(qx.core.Environment.get(o)){var S=Q.imports;var T=S.length;for(var i=T-1;i>=0;i-- ){if(S[i].href==R||S[i].href==qx.util.Uri.getAbsolute(R)){Q.removeImport(i);}
;}
;}
else {var U=Q.cssRules;var T=U.length;for(var i=T-1;i>=0;i-- ){if(U[i].href==R){Q.deleteRule(i);}
;}
;}
;}
,removeAllImports:function(W){if(qx.core.Environment.get(o)){var Y=W.imports;var X=Y.length;for(var i=X-1;i>=0;i-- ){W.removeImport(i);}
;}
else {var V=W.cssRules;var X=V.length;for(var i=X-1;i>=0;i-- ){if(V[i].type==V[i].IMPORT_RULE){W.deleteRule(i);}
;}
;}
;}
}});}
)();
(function(){var a="engine.name",b="",c="none",d="qx.dom.Element",e="webkit",f="The tag name is missing!",g="div";qx.Bootstrap.define(d,{statics:{hasChild:function(parent,h){return h.parentNode===parent;}
,hasChildren:function(j){return !!j.firstChild;}
,hasChildElements:function(k){k=k.firstChild;while(k){if(k.nodeType===1){return true;}
;k=k.nextSibling;}
;return false;}
,getParentElement:function(m){return m.parentNode;}
,isInDom:function(p,n){if(!n){n=window;}
;var o=n.document.getElementsByTagName(p.nodeName);for(var i=0,l=o.length;i<l;i++ ){if(o[i]===p){return true;}
;}
;return false;}
,insertAt:function(q,parent,r){var s=parent.childNodes[r];if(s){parent.insertBefore(q,s);}
else {parent.appendChild(q);}
;return true;}
,insertBegin:function(t,parent){if(parent.firstChild){this.insertBefore(t,parent.firstChild);}
else {parent.appendChild(t);}
;return true;}
,insertEnd:function(u,parent){parent.appendChild(u);return true;}
,insertBefore:function(v,w){w.parentNode.insertBefore(v,w);return true;}
,insertAfter:function(x,y){var parent=y.parentNode;if(y==parent.lastChild){parent.appendChild(x);}
else {return this.insertBefore(x,y.nextSibling);}
;return true;}
,remove:function(z){if(!z.parentNode){return false;}
;z.parentNode.removeChild(z);return true;}
,removeChild:function(A,parent){if(A.parentNode!==parent){return false;}
;parent.removeChild(A);return true;}
,removeChildAt:function(B,parent){var C=parent.childNodes[B];if(!C){return false;}
;parent.removeChild(C);return true;}
,replaceChild:function(E,D){if(!D.parentNode){return false;}
;D.parentNode.replaceChild(E,D);return true;}
,replaceAt:function(G,H,parent){var F=parent.childNodes[H];if(!F){return false;}
;parent.replaceChild(G,F);return true;}
,__dQ:{},getHelperElement:function(I){if(!I){I=window;}
;var J=I.location.href;if(!qx.dom.Element.__dQ[J]){var K=qx.dom.Element.__dQ[J]=I.document.createElement(g);if(qx.core.Environment.get(a)==e){K.style.display=c;I.document.body.appendChild(K);}
;}
;return qx.dom.Element.__dQ[J];}
,create:function(name,M,L){if(!L){L=window;}
;if(!name){throw new Error(f);}
;var O=L.document.createElement(name);for(var N in M){qx.bom.element.Attribute.set(O,N,M[N]);}
;return O;}
,empty:function(P){return P.innerHTML=b;}
}});}
)();
(function(){var b="function",c="html.video.h264",d="html.element.contains",f='video/ogg; codecs="theora, vorbis"',g="qxtest",h="html.console",i="html.xul",j="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",k="html.video.ogg",l="http://www.w3.org/TR/SVG11/feature#BasicStructure",m="html.storage.local",n="div",o="qx.bom.client.Html",p="getSelection",q='audio',r='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',s="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t="html.audio",u="video",w="url(#default#VML)",x="head",y="audio",z="audio/mpeg",A="org.w3c.dom.svg",B="html.classlist",C="html.svg",D="html.video",E="html.geolocation",F="DOMTokenList",G="html.storage.session",H="1.1",I="html.history.state",J="object",K="html.image.naturaldimensions",L="html.audio.aif",M="audio/x-wav",N='<v:shape id="vml_flag1" adj="1" />',O="html.node.isequalnode",P="html.canvas",Q="audio/ogg",R="",S="html.storage.userdata",T="html.fullscreen",U="number",V="html.element.compareDocumentPosition",W="audio/x-aiff",X="html.audio.au",Y="img",bF="html.selection",bG="selection",bH="html.xpath",bB="$qx_check",bC="test",bD='video',bE="span",bM="html.element.textcontent",bN="geolocation",bW="html.audio.mp3",bA="html.vml",bI="undefined",bJ="html.audio.ogg",bK="none",bL="label",bQ='video/webm; codecs="vp8, vorbis"',ca="html.dataurl",bR="html.webworker",bS="html.dataset",bX="1.0",bO="html.audio.wav",bY="html.filereader",bP="audio/basic",bT="display",bU="html.video.webm",bV="#default#userdata";qx.Bootstrap.define(o,{statics:{getWebWorker:function(){return window.Worker!=null;}
,getFileReader:function(){return window.FileReader!=null;}
,getGeoLocation:function(){return bN in navigator;}
,getAudio:function(){return !!document.createElement(q).canPlayType;}
,getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(Q);}
,getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(z);}
,getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(M);}
,getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(bP);}
,getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return R;}
;var a=document.createElement(y);return a.canPlayType(W);}
,getVideo:function(){return !!document.createElement(bD).canPlayType;}
,getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return R;}
;var v=document.createElement(u);return v.canPlayType(f);}
,getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return R;}
;var v=document.createElement(u);return v.canPlayType(r);}
,getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return R;}
;var v=document.createElement(u);return v.canPlayType(bQ);}
,getLocalStorage:function(){try{window.localStorage.setItem(bB,bC);window.localStorage.removeItem(bB);return true;}
catch(cb){return false;}
;}
,getSessionStorage:function(){try{window.sessionStorage.setItem(bB,bC);window.sessionStorage.removeItem(bB);return true;}
catch(cc){return false;}
;}
,getUserDataStorage:function(){var cd=document.createElement(n);cd.style[bT]=bK;document.getElementsByTagName(x)[0].appendChild(cd);var ce=false;try{cd.addBehavior(bV);cd.load(g);ce=true;}
catch(e){}
;document.getElementsByTagName(x)[0].removeChild(cd);return ce;}
,getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===F);}
,getXPath:function(){return !!document.evaluate;}
,getXul:function(){try{document.createElementNS(j,bL);return true;}
catch(e){return false;}
;}
,getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(A,bX)||document.implementation.hasFeature(l,H));}
,getVml:function(){var cf=document.createElement(n);document.body.appendChild(cf);cf.innerHTML=N;cf.firstChild.style.behavior=w;var cg=typeof cf.firstChild.adj==J;document.body.removeChild(cf);return cg;}
,getCanvas:function(){return !!window.CanvasRenderingContext2D;}
,getDataUrl:function(ch){var ci=new Image();ci.onload=ci.onerror=function(){window.setTimeout(function(){ch.call(null,(ci.width==1&&ci.height==1));}
,0);}
;ci.src=s;}
,getDataset:function(){return !!document.documentElement.dataset;}
,getContains:function(){return (typeof document.documentElement.contains!==bI);}
,getCompareDocumentPosition:function(){return (typeof document.documentElement.compareDocumentPosition===b);}
,getTextContent:function(){var cj=document.createElement(bE);return (typeof cj.textContent!==bI);}
,getFullScreen:function(){return document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||false;}
,getConsole:function(){return typeof window.console!==bI;}
,getNaturalDimensions:function(){var ck=document.createElement(Y);return typeof ck.naturalHeight===U&&typeof ck.naturalWidth===U;}
,getHistoryState:function(){return (typeof window.onpopstate!==bI&&typeof window.history.replaceState!==bI&&typeof window.history.pushState!==bI);}
,getSelection:function(){if(typeof window.getSelection===b){return p;}
;if(typeof document.selection===J){return bG;}
;return null;}
,getIsEqualNode:function(){return typeof document.documentElement.isEqualNode===b;}
},defer:function(cl){qx.core.Environment.add(bR,cl.getWebWorker);qx.core.Environment.add(bY,cl.getFileReader);qx.core.Environment.add(E,cl.getGeoLocation);qx.core.Environment.add(t,cl.getAudio);qx.core.Environment.add(bJ,cl.getAudioOgg);qx.core.Environment.add(bW,cl.getAudioMp3);qx.core.Environment.add(bO,cl.getAudioWav);qx.core.Environment.add(X,cl.getAudioAu);qx.core.Environment.add(L,cl.getAudioAif);qx.core.Environment.add(D,cl.getVideo);qx.core.Environment.add(k,cl.getVideoOgg);qx.core.Environment.add(c,cl.getVideoH264);qx.core.Environment.add(bU,cl.getVideoWebm);qx.core.Environment.add(m,cl.getLocalStorage);qx.core.Environment.add(G,cl.getSessionStorage);qx.core.Environment.add(S,cl.getUserDataStorage);qx.core.Environment.add(B,cl.getClassList);qx.core.Environment.add(bH,cl.getXPath);qx.core.Environment.add(i,cl.getXul);qx.core.Environment.add(P,cl.getCanvas);qx.core.Environment.add(C,cl.getSvg);qx.core.Environment.add(bA,cl.getVml);qx.core.Environment.add(bS,cl.getDataset);qx.core.Environment.addAsync(ca,cl.getDataUrl);qx.core.Environment.add(d,cl.getContains);qx.core.Environment.add(V,cl.getCompareDocumentPosition);qx.core.Environment.add(bM,cl.getTextContent);qx.core.Environment.add(h,cl.getConsole);qx.core.Environment.add(K,cl.getNaturalDimensions);qx.core.Environment.add(I,cl.getHistoryState);qx.core.Environment.add(bF,cl.getSelection);qx.core.Environment.add(O,cl.getIsEqualNode);qx.core.Environment.add(T,cl.getFullScreen);}
});}
)();
(function(){var a="readOnly",b="data-",c="accessKey",d="qx.bom.element.Attribute",e="rowSpan",f="vAlign",g="className",h="textContent",i="'",j="htmlFor",k="longDesc",l="cellSpacing",m="frameBorder",n="='",o="",p="useMap",q="innerText",r="innerHTML",s="tabIndex",t="dateTime",u="maxLength",v="html.element.textcontent",w="mshtml",x="engine.name",y="cellPadding",z="browser.documentmode",A="colSpan",B="undefined";qx.Bootstrap.define(d,{statics:{__dR:{names:{"class":g,"for":j,html:r,text:qx.core.Environment.get(v)?h:q,colspan:A,rowspan:e,valign:f,datetime:t,accesskey:c,tabindex:s,maxlength:u,readonly:a,longdesc:k,cellpadding:y,cellspacing:l,frameborder:m,usemap:p},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$element:1,$$elementObject:1,$$widget:1,$$widgetObject:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$widgetObject:1,$$element:1,$$elementObject:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:o,className:o,innerHTML:o,innerText:o,textContent:o,htmlFor:o,tabIndex:0,maxLength:qx.core.Environment.select(x,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1}},compile:function(C){var D=[];var F=this.__dR.runtime;for(var E in C){if(!F[E]){D.push(E,n,C[E],i);}
;}
;return D.join(o);}
,get:function(I,name){var G=this.__dR;var H;name=G.names[name]||name;if(G.property[name]){H=I[name];if(typeof G.propertyDefault[name]!==B&&H==G.propertyDefault[name]){if(typeof G.bools[name]===B){return null;}
else {return H;}
;}
;}
else {H=I.getAttribute(name);if(G.bools[name]&&!(qx.core.Environment.get(x)==w&&parseInt(qx.core.Environment.get(z),10)<=8)){return qx.Bootstrap.isString(H);}
;}
;if(G.bools[name]){return !!H;}
;return H;}
,set:function(L,name,K){if(typeof K===B){return;}
;var J=this.__dR;name=J.names[name]||name;if(J.bools[name]&&!qx.lang.Type.isBoolean(K)){K=qx.lang.Type.isString(K);}
;if(J.property[name]&&(!(L[name]===undefined)||J.qxProperties[name])){if(K==null){if(J.removeableProperties[name]){L.removeAttribute(name);return;}
else if(typeof J.propertyDefault[name]!==B){K=J.propertyDefault[name];}
;}
;L[name]=K;}
else {if((J.bools[name]||K===null)&&name.indexOf(b)!==0){if(K===true){L.setAttribute(name,name);}
else if(K===false||K===null){L.removeAttribute(name);}
;}
else {L.setAttribute(name,K);}
;}
;}
,reset:function(M,name){if(name.indexOf(b)===0){M.removeAttribute(name);}
else {this.set(M,name,null);}
;}
}});}
)();
(function(){var a="file",b="+",c="strict",d="anchor",e="div",f="query",g="source",h="password",j="host",k="protocol",l="qx.debug",n="user",p="directory",q="loose",r="relative",s="queryKey",t="qx.util.Uri",u="",v="path",w="authority",x='">0</a>',y="&",z="port",A="params must be either string or object",B='<a href="',C="userInfo",D="?",E="=";qx.Bootstrap.define(t,{statics:{parseUri:function(H,G){var I={key:[g,k,w,C,n,h,j,z,r,v,p,a,f,d],q:{name:s,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:\[[0-9A-Fa-f:]+\])|(?:[^:\/?#\[\]]*))(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:\[[0-9A-Fa-f:]+\])|(?:[^:\/?#\[\]]*))(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var o=I,m=I.parser[G?c:q].exec(H),F={},i=14;while(i-- ){F[o.key[i]]=m[i]||u;}
;F[o.q.name]={};F[o.key[12]].replace(o.q.parser,function(K,L,J){if(L){F[o.q.name][L]=J;}
;}
);return F;}
,appendParamsToUrl:function(M,N){if(N===undefined){return M;}
;if(qx.core.Environment.get(l)){if(!(qx.lang.Type.isString(N)||qx.lang.Type.isObject(N))){throw new Error(A);}
;}
;if(qx.lang.Type.isObject(N)){N=qx.util.Uri.toParameter(N);}
;if(!N){return M;}
;return M+=(/\?/).test(M)?y+N:D+N;}
,toParameter:function(O,S){var R,Q=[];for(R in O){if(O.hasOwnProperty(R)){var P=O[R];if(P instanceof Array){for(var i=0;i<P.length;i++ ){this.__dS(R,P[i],Q,S);}
;}
else {this.__dS(R,P,Q,S);}
;}
;}
;return Q.join(y);}
,__dS:function(W,X,V,U){var T=window.encodeURIComponent;if(U){V.push(T(W).replace(/%20/g,b)+E+T(X).replace(/%20/g,b));}
else {V.push(T(W)+E+T(X));}
;}
,getAbsolute:function(ba){var Y=document.createElement(e);Y.innerHTML=B+ba+x;return Y.firstChild.href;}
}});}
)();
(function(){var a="background-color",b="qx.debug",c="qx.theme",d="This decorator is already in-use. Modification is not possible anymore!",e="qx.ui.decoration.MBackgroundColor",f="Color",g="_applyBackgroundColor";qx.Mixin.define(e,{properties:{backgroundColor:{check:f,nullable:true,apply:g}},members:{_styleBackgroundColor:function(h){var i=this.getBackgroundColor();if(i&&qx.core.Environment.get(c)){i=qx.theme.manager.Color.getInstance().resolve(i);}
;if(i){h[a]=i;}
;}
,_applyBackgroundColor:function(){if(qx.core.Environment.get(b)){if(this._isInitialized()){throw new Error(d);}
;}
;}
}});}
)();
(function(){var a="qx.ui.decoration.IDecorator";qx.Interface.define(a,{members:{getStyles:function(){}
,getPadding:function(){}
,getInsets:function(){}
}});}
)();
(function(){var a="abstract",b="Abstract method called.",c="qx.ui.decoration.Abstract";qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:a,members:{__dT:null,_getDefaultInsets:function(){throw new Error(b);}
,_isInitialized:function(){throw new Error(b);}
,_resetInsets:function(){this.__dT=null;}
,getInsets:function(){if(!this.__dT){this.__dT=this._getDefaultInsets();}
;return this.__dT;}
},destruct:function(){this.__dT=null;}
});}
)();
(function(){var a="repeat",b="backgroundPositionX",c="px",d=".png",e=" are not supported in this client! The image's resource id is '",f='',g='Boolean',h='background',j='backgroundRepeat',k='push',l="_applyBackgroundImage",m='backgroundOrigin',n="qx.debug",o='size',p='url(',q="Background PNGs with repeat == 'scale' or repeat == 'no-repeat'",r="qx.ui.decoration.MBackgroundImage",s="100% 100%",t='backgroundPositionX',u="browser.documentmode",v="backgroundPositionY",w="'",x=' / ',y='backgroundImage',z='repeat',A=' ',B='unshift',C="background",D="engine.name",E='backgroundPositionY',F="scale",G="This decorator is already in-use. Modification is not possible anymore!",H="no-repeat",I=')',J="_applyBackgroundPosition",K=" ",L="The backgroundPosition property is not supported by this client!",M="mshtml";qx.Mixin.define(r,{properties:{backgroundImage:{nullable:true,apply:l},backgroundRepeat:{init:a,apply:l},backgroundPositionX:{nullable:true,apply:J},backgroundPositionY:{nullable:true,apply:J},backgroundOrigin:{nullable:true,apply:l},backgroundPosition:{group:[v,b]},orderGradientsFront:{check:g,init:false}},members:{_styleBackgroundImage:function(N){if(!this.getBackgroundImage()){return;}
;if(C in N){if(!qx.lang.Type.isArray(N[h])){N[h]=[N[h]];}
;}
else {N[h]=[];}
;var O=[y,j,E,t,m];(function(Y,ba,T,S,R){for(var i=0;i<Y.length;i++ ){var U=Y[i];var Q=ba[i];var top=T[i]||0;var bc=S[i]||0;var P=R[i]||f;if(top==null){top=0;}
;if(bc==null){bc=0;}
;if(!isNaN(top)){top+=c;}
;if(!isNaN(bc)){bc+=c;}
;var bb=qx.util.AliasManager.getInstance().resolve(U);var W=qx.util.ResourceManager.getInstance().toUri(bb);var X={image:p+W+I,position:bc+K+top,repeat:z,origin:P};if(Q===F){X.size=s;}
else {X.repeat=Q;}
;var V=[X.image,X.position+(o in X?x+X.size:f),X.repeat,X.origin];N[C][this.getOrderGradientsFront()?k:B](V.join(A));if(qx.core.Environment.get(n)&&W&&W.endsWith(d)&&(Q==F||Q==H)&&qx.core.Environment.get(D)==M&&qx.core.Environment.get(u)<9){this.warn(q+e+bb+w);}
;}
;}
).apply(this,this._getExtendedPropertyValueArrays(O));}
,_applyBackgroundImage:function(){if(qx.core.Environment.get(n)){if(this._isInitialized()){throw new Error(G);}
;}
;}
,_applyBackgroundPosition:function(){if(qx.core.Environment.get(n)){if(this._isInitialized()){throw new Error(G);}
;if(qx.core.Environment.get(D)==M&&qx.core.Environment.get(u)<9){this.warn(L);}
;}
;}
}});}
)();
(function(){var a="0",b="qx/static",c="http://",d="https://",e="file://",f="qx.util.AliasManager",g="singleton",h=".",i="/",j="static";qx.Class.define(f,{type:g,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);this.__dU={};this.add(j,b);}
,members:{__dU:null,_preprocess:function(n){var m=this._getDynamic();if(m[n]===false){return n;}
else if(m[n]===undefined){if(n.charAt(0)===i||n.charAt(0)===h||n.indexOf(c)===0||n.indexOf(d)===a||n.indexOf(e)===0){m[n]=false;return n;}
;if(this.__dU[n]){return this.__dU[n];}
;var l=n.substring(0,n.indexOf(i));var k=this.__dU[l];if(k!==undefined){m[n]=k+n.substring(l.length);}
;}
;return n;}
,add:function(o,q){this.__dU[o]=q;var p=this._getDynamic();for(var r in p){if(r.substring(0,r.indexOf(i))===o){p[r]=q+r.substring(o.length);}
;}
;}
,remove:function(s){delete this.__dU[s];}
,resolve:function(t){var u=this._getDynamic();if(t!=null){t=this._preprocess(t);}
;return u[t]||t;}
,getAliases:function(){var v={};for(var w in this.__dU){v[w]=this.__dU[w];}
;return v;}
}});}
)();
(function(){var a="Microsoft.XMLHTTP",b="xhr",c="io.ssl",d="io.xhr",e="",f="file:",g="https:",h="webkit",i="gecko",j="activex",k="opera",l=".",m="io.maxrequests",n="qx.bom.client.Transport";qx.Bootstrap.define(n,{statics:{getMaxConcurrentRequestCount:function(){var p;var r=qx.bom.client.Engine.getVersion().split(l);var o=0;var s=0;var q=0;if(r[0]){o=r[0];}
;if(r[1]){s=r[1];}
;if(r[2]){q=r[2];}
;if(window.maxConnectionsPerServer){p=window.maxConnectionsPerServer;}
else if(qx.bom.client.Engine.getName()==k){p=8;}
else if(qx.bom.client.Engine.getName()==h){p=4;}
else if(qx.bom.client.Engine.getName()==i&&((o>1)||((o==1)&&(s>9))||((o==1)&&(s==9)&&(q>=1)))){p=6;}
else {p=2;}
;return p;}
,getSsl:function(){return window.location.protocol===g;}
,getXmlHttpRequest:function(){var t=window.ActiveXObject?(function(){if(window.location.protocol!==f){try{new window.XMLHttpRequest();return b;}
catch(u){}
;}
;try{new window.ActiveXObject(a);return j;}
catch(v){}
;}
)():(function(){try{new window.XMLHttpRequest();return b;}
catch(w){}
;}
)();return t||e;}
},defer:function(x){qx.core.Environment.add(m,x.getMaxConcurrentRequestCount);qx.core.Environment.add(c,x.getSsl);qx.core.Environment.add(d,x.getXmlHttpRequest);}
});}
)();
(function(){var a="singleton",b="qx.util.LibraryManager";qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__dV:qx.$$libraries||{}},members:{has:function(c){return !!this.self(arguments).__dV[c];}
,get:function(d,e){return this.self(arguments).__dV[d][e]?this.self(arguments).__dV[d][e]:null;}
,set:function(f,g,h){this.self(arguments).__dV[f][g]=h;}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="//",d="io.ssl",e="",f="encoding",g="?",h="type",i="string",j="@",k="font",l="data",m="data:image/",n=";",o="/",p="resourceUri",q="qx.util.ResourceManager",r="singleton",s=",";qx.Class.define(q,{extend:qx.core.Object,type:r,construct:function(){qx.core.Object.call(this);}
,statics:{__u:qx.$$resources||{},__dW:{}},members:{getIds:function(u){var w=this.self(arguments).__u;if(!w){return null;}
;var v=[];for(var t in w){if(w.hasOwnProperty(t)){if(u&&t.indexOf(u)==-1){continue;}
;v.push(t);}
;}
;return v;}
,has:function(x){return !!this.self(arguments).__u[x];}
,getData:function(y){return this.self(arguments).__u[y]||null;}
,getImageWidth:function(A){var z=this.self(arguments).__u[A];return z?z[0]:null;}
,getImageHeight:function(C){var B=this.self(arguments).__u[C];return B?B[1]:null;}
,getImageFormat:function(E){if(E&&E.startsWith(j)){return k;}
;var D=this.self(arguments).__u[E];return D?D[2]:null;}
,getCombinedFormat:function(J){var G=e;var I=this.self(arguments).__u[J];var F=I&&I.length>4&&typeof (I[4])==i&&this.constructor.__u[I[4]];if(F){var K=I[4];var H=this.constructor.__u[K];G=H[2];}
;return G;}
,toUri:function(O){if(O==null){return O;}
;var L=this.self(arguments).__u[O];if(!L){return O;}
;if(typeof L===i){var N=L;}
else {var N=L[3];if(!N){return O;}
;}
;var M=e;if((qx.core.Environment.get(b)==a)&&qx.core.Environment.get(d)){M=this.self(arguments).__dW[N];}
;return M+qx.util.LibraryManager.getInstance().get(N,p)+o+O;}
,toDataUri:function(R){var Q=this.constructor.__u[R];var T=Q?this.constructor.__u[Q[4]]:null;var S;if(T){var P=T[4][R];S=m+P[h]+n+P[f]+s+P[l];}
else {S=this.toUri(R);}
;return S;}
,isFontUri:function(U){return U?U.startsWith(j):false;}
},defer:function(W){if((qx.core.Environment.get(b)==a)){if(qx.core.Environment.get(d)){for(var X in qx.$$libraries){var V;if(qx.util.LibraryManager.getInstance().get(X,p)){V=qx.util.LibraryManager.getInstance().get(X,p);}
else {W.__dW[X]=e;continue;}
;if(V.match(/^\/\//)!=null){W.__dW[X]=window.location.protocol;}
else if(V.match(/^\//)!=null){W.__dW[X]=window.location.protocol+c+window.location.host;}
else if(V.match(/^\.\//)!=null){var ba=document.URL;W.__dW[X]=ba.substring(0,ba.lastIndexOf(o)+1);}
else if(V.match(/^http/)!=null){W.__dW[X]=e;}
else {var Y=window.location.href.indexOf(g);var bb;if(Y==-1){bb=window.location.href;}
else {bb=window.location.href.substring(0,Y);}
;W.__dW[X]=bb.substring(0,bb.lastIndexOf(o)+1);}
;}
;}
;}
;}
});}
)();
(function(){var a="double",b="qx.theme",c="px ",d="widthTop",e="inset",f="solid",g="dotted",h="styleRight",i="styleBottom",j="_applyWidth",k="border-top",l="qx.debug",m="border-left",n="ridge",o="border-right",p="qx.ui.decoration.MSingleBorder",q="shorthand",r="Color",s="widthBottom",t="outset",u="widthLeft",v="",w="border-bottom",x="styleTop",y="colorBottom",z="groove",A="styleLeft",B="widthRight",C="dashed",D="Number",E="colorLeft",F="colorRight",G="colorTop",H="_applyStyle",I=" ",J="This decorator is already in-use. Modification is not possible anymore!",K="Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!",L="absolute";qx.Mixin.define(p,{properties:{widthTop:{check:D,init:0,apply:j},widthRight:{check:D,init:0,apply:j},widthBottom:{check:D,init:0,apply:j},widthLeft:{check:D,init:0,apply:j},styleTop:{nullable:true,check:[f,g,C,a,e,t,n,z],init:f,apply:H},styleRight:{nullable:true,check:[f,g,C,a,e,t,n,z],init:f,apply:H},styleBottom:{nullable:true,check:[f,g,C,a,e,t,n,z],init:f,apply:H},styleLeft:{nullable:true,check:[f,g,C,a,e,t,n,z],init:f,apply:H},colorTop:{nullable:true,check:r,apply:H},colorRight:{nullable:true,check:r,apply:H},colorBottom:{nullable:true,check:r,apply:H},colorLeft:{nullable:true,check:r,apply:H},left:{group:[u,A,E]},right:{group:[B,h,F]},top:{group:[d,x,G]},bottom:{group:[s,i,y]},width:{group:[d,B,s,u],mode:q},style:{group:[x,h,i,A],mode:q},color:{group:[G,F,y,E],mode:q}},members:{_styleBorder:function(M){if(qx.core.Environment.get(b)){var O=qx.theme.manager.Color.getInstance();var S=O.resolve(this.getColorTop());var P=O.resolve(this.getColorRight());var N=O.resolve(this.getColorBottom());var R=O.resolve(this.getColorLeft());}
else {var S=this.getColorTop();var P=this.getColorRight();var N=this.getColorBottom();var R=this.getColorLeft();}
;var Q=this.getWidthTop();if(Q>0){M[k]=Q+c+this.getStyleTop()+I+(S||v);}
;var Q=this.getWidthRight();if(Q>0){M[o]=Q+c+this.getStyleRight()+I+(P||v);}
;var Q=this.getWidthBottom();if(Q>0){M[w]=Q+c+this.getStyleBottom()+I+(N||v);}
;var Q=this.getWidthLeft();if(Q>0){M[m]=Q+c+this.getStyleLeft()+I+(R||v);}
;if(qx.core.Environment.get(l)){if(M.length===0){throw new Error(K);}
;}
;M.position=L;}
,_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};}
,_applyWidth:function(){this._applyStyle();this._resetInsets();}
,_applyStyle:function(){if(qx.core.Environment.get(l)){if(this._isInitialized()){throw new Error(J);}
;}
;}
}});}
)();
(function(){var a="innerWidthRight",b="innerColorBottom",c="css.borderradius",d="qx.theme",e="px ",f='""',g="_applyDoubleBorder",h="border-top",i="inset 0 -",j="css.boxsizing",k="innerWidthTop",l="100%",m="qx.debug",n="border-left",o="innerColorRight",p="css.boxshadow",q="innerColorTop",r="innerColorLeft",s="inset ",t="shorthand",u="inset -",v="Color",w="border-box",x="This decorator is already in-use. Modification is not possible anymore!",y="qx.ui.decoration.MDoubleBorder",z="border-bottom",A="innerOpacity is configured but the browser doesn't support RGBA colors.",B=":before",C="inset 0 ",D="px solid ",E="innerWidthBottom",F="css.rgba",G="inherit",H="Number",I="innerWidthLeft",J="px 0 ",K="inset 0 0 0 ",L="border-right",M=" ",N=",",O="absolute";qx.Mixin.define(y,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__ea;this._styleBorder=this.__dX;}
,properties:{innerWidthTop:{check:H,init:0,apply:g},innerWidthRight:{check:H,init:0,apply:g},innerWidthBottom:{check:H,init:0,apply:g},innerWidthLeft:{check:H,init:0,apply:g},innerWidth:{group:[k,a,E,I],mode:t},innerColorTop:{nullable:true,check:v,apply:g},innerColorRight:{nullable:true,check:v,apply:g},innerColorBottom:{nullable:true,check:v,apply:g},innerColorLeft:{nullable:true,check:v,apply:g},innerColor:{group:[q,o,b,r],mode:t},innerOpacity:{check:H,init:1,apply:g}},members:{__dX:function(P){var Y=qx.core.Environment.get(p);var S,bd,innerWidth;if(qx.core.Environment.get(d)){var X=qx.theme.manager.Color.getInstance();S={top:X.resolve(this.getColorTop()),right:X.resolve(this.getColorRight()),bottom:X.resolve(this.getColorBottom()),left:X.resolve(this.getColorLeft())};bd={top:X.resolve(this.getInnerColorTop()),right:X.resolve(this.getInnerColorRight()),bottom:X.resolve(this.getInnerColorBottom()),left:X.resolve(this.getInnerColorLeft())};}
else {S={top:this.getColorTop(),right:this.getColorRight(),bottom:this.getColorBottom(),left:this.getColorLeft()};bd={top:this.getInnerColorTop(),right:this.getInnerColorRight(),bottom:this.getInnerColorBottom(),left:this.getInnerColorLeft()};}
;innerWidth={top:this.getInnerWidthTop(),right:this.getInnerWidthRight(),bottom:this.getInnerWidthBottom(),left:this.getInnerWidthLeft()};var V=this.getWidthTop();if(V>0){P[h]=V+e+this.getStyleTop()+M+S.top;}
;V=this.getWidthRight();if(V>0){P[L]=V+e+this.getStyleRight()+M+S.right;}
;V=this.getWidthBottom();if(V>0){P[z]=V+e+this.getStyleBottom()+M+S.bottom;}
;V=this.getWidthLeft();if(V>0){P[n]=V+e+this.getStyleLeft()+M+S.left;}
;var bc=this.getInnerOpacity();if(bc<1){this.__dY(bd,bc);}
;if(innerWidth.top>0||innerWidth.right>0||innerWidth.bottom>0||innerWidth.left>0){var bb=(innerWidth.top||0)+D+bd.top;var ba=(innerWidth.right||0)+D+bd.right;var U=(innerWidth.bottom||0)+D+bd.bottom;var W=(innerWidth.left||0)+D+bd.left;P[B]={"width":l,"height":l,"position":O,"content":f,"border-top":bb,"border-right":ba,"border-bottom":U,"border-left":W,"left":0,"top":0};var Q=qx.bom.Style.getCssName(qx.core.Environment.get(j));P[B][Q]=w;var R=qx.core.Environment.get(c);if(R){R=qx.bom.Style.getCssName(R);P[B][R]=G;}
;var T=[];if(bd.top&&innerWidth.top&&bd.top==bd.bottom&&bd.top==bd.right&&bd.top==bd.left&&innerWidth.top==innerWidth.bottom&&innerWidth.top==innerWidth.right&&innerWidth.top==innerWidth.left){T.push(K+innerWidth.top+e+bd.top);}
else {if(bd.top){T.push(C+(innerWidth.top||0)+e+bd.top);}
;if(bd.right){T.push(u+(innerWidth.right||0)+J+bd.right);}
;if(bd.bottom){T.push(i+(innerWidth.bottom||0)+e+bd.bottom);}
;if(bd.left){T.push(s+(innerWidth.left||0)+J+bd.left);}
;}
;if(T.length>0&&Y){Y=qx.bom.Style.getCssName(Y);if(!P[Y]){P[Y]=T.join(N);}
else {P[Y]+=N+T.join(N);}
;}
;}
else {P[B]={border:0};}
;}
,__dY:function(bh,be){if(!qx.core.Environment.get(F)){if(qx.core.Environment.get(m)){qx.log.Logger.warn(A);}
;return;}
;for(var bi in bh){var bf=qx.util.ColorUtil.stringToRgb(bh[bi]);bf.push(be);var bg=qx.util.ColorUtil.rgbToRgbString(bf);bh[bi]=bg;}
;}
,_applyDoubleBorder:function(){if(qx.core.Environment.get(m)){if(this._isInitialized()){throw new Error(x);}
;}
;}
,__ea:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};}
}});}
)();
(function(){var a="css.float",b="foo",c="css.borderimage.standardsyntax",d="detect",e="borderRadius",f="boxSizing",g="stretch",h="css.borderradius",j="content",k="css.inlineblock",l="css.gradient.filter",m="css.appearance",n="css.opacity",o="div",p="pointerEvents",q="css.gradient.radial",r="css.pointerevents",s="input",t="color",u="string",v="borderImage",w="userSelect",x="styleFloat",y="css.textShadow.filter",z="css.usermodify",A="flexbox",B='url("foo.png") 4 4 4 4 fill stretch',C="css.boxmodel",D="qx.bom.client.Css",E="css.boxshadow",F="appearance",G="-ms-flexbox",H="placeholder",I="-moz-none",J="backgroundImage",K="css.textShadow",L="DXImageTransform.Microsoft.Shadow",M="flex",N="css.alphaimageloaderneeded",O="css.gradient.legacywebkit",P="css.flexboxSyntax",Q="linear-gradient(0deg, #fff, #000)",R="textShadow",S="auto",T="css.borderimage",U="foo.png",V="rgba(1, 2, 3, 0.5)",W="color=#666666,direction=45",X="radial-gradient(0px 0px, cover, red 50%, blue 100%)",Y="rgba",bG="(",bH="-webkit-flex",bI='url("foo.png") 4 4 4 4 stretch',bC="css.gradient.linear",bD="DXImageTransform.Microsoft.Gradient",bE="css.userselect",bF="span",bM="css.boxsizing",bN="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",bO="mshtml",ca="css.rgba",bJ=");",bK="4 fill",bL="none",bA="startColorStr=#550000FF, endColorStr=#55FFFF00",bR="progid:",bB="css.placeholder",bS="css.userselect.none",bT="css.textoverflow",bX="inline-block",bP="-moz-inline-box",bY="textOverflow",bQ="userModify",bU="boxShadow",bV="cssFloat",bW="border";qx.Bootstrap.define(D,{statics:{__eb:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==bO||!qx.bom.client.Browser.getQuirksMode();return content?j:bW;}
,getTextOverflow:function(){return qx.bom.Style.getPropertyName(bY);}
,getPlaceholder:function(){var i=document.createElement(s);return H in i;}
,getAppearance:function(){return qx.bom.Style.getPropertyName(F);}
,getBorderRadius:function(){return qx.bom.Style.getPropertyName(e);}
,getBoxShadow:function(){return qx.bom.Style.getPropertyName(bU);}
,getBorderImage:function(){return qx.bom.Style.getPropertyName(v);}
,getBorderImageSyntax:function(){var cc=qx.bom.client.Css.getBorderImage();if(!cc){return null;}
;var cb=document.createElement(o);if(cc===v){cb.style[cc]=B;if(cb.style.borderImageSource.indexOf(U)>=0&&cb.style.borderImageSlice.indexOf(bK)>=0&&cb.style.borderImageRepeat.indexOf(g)>=0){return true;}
;}
else {cb.style[cc]=bI;if(cb.style[cc].indexOf(U)>=0){return false;}
;}
;return null;}
,getUserSelect:function(){return qx.bom.Style.getPropertyName(w);}
,getUserSelectNone:function(){var ce=qx.bom.client.Css.getUserSelect();if(ce){var cd=document.createElement(bF);cd.style[ce]=I;return cd.style[ce]===I?I:bL;}
;return null;}
,getUserModify:function(){return qx.bom.Style.getPropertyName(bQ);}
,getFloat:function(){var cf=document.documentElement.style;return cf.cssFloat!==undefined?bV:cf.styleFloat!==undefined?x:null;}
,getLinearGradient:function(){qx.bom.client.Css.__eb=false;var cj=Q;var cg=document.createElement(o);var ch=qx.bom.Style.getAppliedStyle(cg,J,cj);if(!ch){cj=bN;var ch=qx.bom.Style.getAppliedStyle(cg,J,cj,false);if(ch){qx.bom.client.Css.__eb=true;}
;}
;if(!ch){return null;}
;var ci=/(.*?)\(/.exec(ch);return ci?ci[1]:null;}
,getFilterGradient:function(){return qx.bom.client.Css.__ec(bD,bA);}
,getRadialGradient:function(){var cn=X;var ck=document.createElement(o);var cl=qx.bom.Style.getAppliedStyle(ck,J,cn);if(!cl){return null;}
;var cm=/(.*?)\(/.exec(cl);return cm?cm[1]:null;}
,getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__eb===null){qx.bom.client.Css.getLinearGradient();}
;return qx.bom.client.Css.__eb;}
,getRgba:function(){var co;try{co=document.createElement(o);}
catch(cp){co=document.createElement();}
;try{co.style[t]=V;if(co.style[t].indexOf(Y)!=-1){return true;}
;}
catch(cq){}
;return false;}
,getBoxSizing:function(){return qx.bom.Style.getPropertyName(f);}
,getInlineBlock:function(){var cr=document.createElement(bF);cr.style.display=bX;if(cr.style.display==bX){return bX;}
;cr.style.display=bP;if(cr.style.display!==bP){return bP;}
;return null;}
,getOpacity:function(){return (typeof document.documentElement.style.opacity==u);}
,getTextShadow:function(){return !!qx.bom.Style.getPropertyName(R);}
,getFilterTextShadow:function(){return qx.bom.client.Css.__ec(L,W);}
,__ec:function(cv,ct){var cu=false;var cw=bR+cv+bG+ct+bJ;var cs=document.createElement(o);document.body.appendChild(cs);cs.style.filter=cw;if(cs.filters&&cs.filters.length>0&&cs.filters.item(cv).enabled==true){cu=true;}
;document.body.removeChild(cs);return cu;}
,getAlphaImageLoaderNeeded:function(){return qx.bom.client.Engine.getName()==bO&&qx.bom.client.Browser.getDocumentMode()<9;}
,getPointerEvents:function(){var cx=document.documentElement;if(p in cx.style){var cz=cx.style.pointerEvents;cx.style.pointerEvents=S;cx.style.pointerEvents=b;var cy=cx.style.pointerEvents==S;cx.style.pointerEvents=cz;return cy;}
;return false;}
,getFlexboxSyntax:function(){var cB=null;var cA=document.createElement(d);var cC=[{value:M,syntax:M},{value:G,syntax:A},{value:bH,syntax:M}];for(var i=0;i<cC.length;i++ ){try{cA.style.display=cC[i].value;}
catch(cD){return null;}
;if(cA.style.display===cC[i].value){cB=cC[i].syntax;break;}
;}
;cA=null;return cB;}
},defer:function(cE){qx.core.Environment.add(bT,cE.getTextOverflow);qx.core.Environment.add(bB,cE.getPlaceholder);qx.core.Environment.add(h,cE.getBorderRadius);qx.core.Environment.add(E,cE.getBoxShadow);qx.core.Environment.add(bC,cE.getLinearGradient);qx.core.Environment.add(l,cE.getFilterGradient);qx.core.Environment.add(q,cE.getRadialGradient);qx.core.Environment.add(O,cE.getLegacyWebkitGradient);qx.core.Environment.add(C,cE.getBoxModel);qx.core.Environment.add(ca,cE.getRgba);qx.core.Environment.add(T,cE.getBorderImage);qx.core.Environment.add(c,cE.getBorderImageSyntax);qx.core.Environment.add(z,cE.getUserModify);qx.core.Environment.add(bE,cE.getUserSelect);qx.core.Environment.add(bS,cE.getUserSelectNone);qx.core.Environment.add(m,cE.getAppearance);qx.core.Environment.add(a,cE.getFloat);qx.core.Environment.add(bM,cE.getBoxSizing);qx.core.Environment.add(k,cE.getInlineBlock);qx.core.Environment.add(n,cE.getOpacity);qx.core.Environment.add(K,cE.getTextShadow);qx.core.Environment.add(y,cE.getFilterTextShadow);qx.core.Environment.add(N,cE.getAlphaImageLoaderNeeded);qx.core.Environment.add(r,cE.getPointerEvents);qx.core.Environment.add(P,cE.getFlexboxSyntax);}
});}
)();
(function(){var a="radiusTopRight",b="radiusTopLeft",c="px",d="-webkit-border-bottom-left-radius",e="-webkit-background-clip",f="radiusBottomRight",g="Integer",h="-webkit-border-bottom-right-radius",i="background-clip",j="border-top-left-radius",k="qx.debug",l="border-top-right-radius",m="border-bottom-left-radius",n="radiusBottomLeft",o="-webkit-border-top-left-radius",p="shorthand",q="-moz-border-radius-bottomright",r="padding-box",s="border-bottom-right-radius",t="qx.ui.decoration.MBorderRadius",u="-moz-border-radius-topright",v="engine.name",w="This decorator is already in-use. Modification is not possible anymore!",x="_applyBorderRadius",y="-webkit-border-top-right-radius",z="webkit",A="-moz-border-radius-topleft",B="-moz-border-radius-bottomleft";qx.Mixin.define(t,{properties:{radiusTopLeft:{nullable:true,check:g,apply:x},radiusTopRight:{nullable:true,check:g,apply:x},radiusBottomLeft:{nullable:true,check:g,apply:x},radiusBottomRight:{nullable:true,check:g,apply:x},radius:{group:[b,a,f,n],mode:p}},members:{_styleBorderRadius:function(C){C[e]=r;C[i]=r;var D=false;var E=this.getRadiusTopLeft();if(E>0){D=true;C[A]=E+c;C[o]=E+c;C[j]=E+c;}
;E=this.getRadiusTopRight();if(E>0){D=true;C[u]=E+c;C[y]=E+c;C[l]=E+c;}
;E=this.getRadiusBottomLeft();if(E>0){D=true;C[B]=E+c;C[d]=E+c;C[m]=E+c;}
;E=this.getRadiusBottomRight();if(E>0){D=true;C[q]=E+c;C[h]=E+c;C[s]=E+c;}
;if(D&&qx.core.Environment.get(v)==z){C[e]=r;}
else {C[i]=r;}
;}
,_applyBorderRadius:function(){if(qx.core.Environment.get(k)){if(this._isInitialized()){throw new Error(w);}
;}
;}
}});}
)();
(function(){var a="border-width",b="css.borderimage.standardsyntax",c="repeat",d="Boolean",e="-l",f="stretch",g="px ",h="sliceBottom",i="-t",j="Integer",k="solid",l="borderImage",m="-r",n="border-style",o="qx.debug",p="sliceLeft",q="-b",r="sliceRight",s="px",t="repeatX",u=" fill",v="String",w="vertical",x="",y="transparent",z="round",A='") ',B="shorthand",C="qx.ui.decoration.MBorderImage",D="sliceTop",E="horizontal",F="_applyBorderImage",G="border-color",H="This decorator is already in-use. Modification is not possible anymore!",I='url("',J=" ",K="grid",L="repeatY";qx.Mixin.define(C,{properties:{borderImage:{check:v,nullable:true,apply:F},sliceTop:{check:j,nullable:true,init:null,apply:F},sliceRight:{check:j,nullable:true,init:null,apply:F},sliceBottom:{check:j,nullable:true,init:null,apply:F},sliceLeft:{check:j,nullable:true,init:null,apply:F},slice:{group:[D,r,h,p],mode:B},repeatX:{check:[f,c,z],init:f,apply:F},repeatY:{check:[f,c,z],init:f,apply:F},repeat:{group:[t,L],mode:B},fill:{check:d,init:true,apply:F},borderImageMode:{check:[E,w,K],init:K}},members:{_styleBorderImage:function(M){if(!this.getBorderImage()){return;}
;var O=qx.util.AliasManager.getInstance().resolve(this.getBorderImage());var Q=qx.util.ResourceManager.getInstance().toUri(O);var T=this._getDefaultInsetsForBorderImage();var N=[T.top,T.right,T.bottom,T.left];var R=[this.getRepeatX(),this.getRepeatY()].join(J);var U=this.getFill()&&qx.core.Environment.get(b)?u:x;var P=qx.bom.Style.getPropertyName(l);if(P){var S=qx.bom.Style.getCssName(P);M[S]=I+Q+A+N.join(J)+U+J+R;}
;M[n]=k;M[G]=y;M[a]=N.join(g)+s;}
,_getDefaultInsetsForBorderImage:function(){if(!this.getBorderImage()){return {top:0,right:0,bottom:0,left:0};}
;var V=qx.util.AliasManager.getInstance().resolve(this.getBorderImage());var W=this.__ed(V);return {top:this.getSliceTop()||W[0],right:this.getSliceRight()||W[1],bottom:this.getSliceBottom()||W[2],left:this.getSliceLeft()||W[3]};}
,_applyBorderImage:function(){if(qx.core.Environment.get(o)){if(this._isInitialized()){throw new Error(H);}
;}
;}
,__ed:function(be){var bd=this.getBorderImageMode();var bf=0;var bb=0;var bc=0;var bg=0;var bh=/(.*)(\.[a-z]+)$/.exec(be);var X=bh[1];var ba=bh[2];var Y=qx.util.ResourceManager.getInstance();if(bd==K||bd==w){bf=Y.getImageHeight(X+i+ba);bc=Y.getImageHeight(X+q+ba);}
;if(bd==K||bd==E){bb=Y.getImageWidth(X+m+ba);bg=Y.getImageWidth(X+e+ba);}
;return [bf,bb,bc,bg];}
}});}
)();
(function(){var a=" 0",b="),to(",c="px",d="css.borderradius",e="from(",f=")",g="css.gradient.filter",h='background',j="orientation",k="filter",l="', ",m="0",n="_applyLinearBackgroundGradient",o="-webkit-gradient(linear,",p="%",q="qx.debug",r="background-color",s="deg, ",t="url(",u="css.gradient.legacywebkit",v="EndColorStr='#FF",w="startColor",x="shorthand",y="qx.theme",z="px 100%",A=") ",B="(GradientType=",C="vertical",D="",E="transparent",F="qx.ui.decoration.MLinearBackgroundGradient",G="% 100%",H="endColorPosition",I="canvas",J="(",K="css.gradient.linear",L="';)",M="endColor",N=", ",O="background",P="horizontal",Q="This decorator is already in-use. Modification is not possible anymore!",R="progid:DXImageTransform.Microsoft.Gradient",S="StartColorStr='#FF",T="100% ",U='2d',V="startColorPosition",W=" ",X="white",Y="colorPositionUnit",bd="linear-gradient",be='getOrderGradientsFront',bf=",";qx.Mixin.define(F,{properties:{startColor:{nullable:true,apply:n},endColor:{nullable:true,apply:n},orientation:{init:C,apply:n},startColorPosition:{init:0,apply:n},endColorPosition:{init:100,apply:n},colorPositionUnit:{init:p,apply:n},gradientStart:{group:[w,V],mode:x},gradientEnd:{group:[M,H],mode:x}},members:{_styleLinearBackgroundGradient:function(bg){var bi=[];if(!this.getStartColor()||!this.getEndColor()){return;}
;var bh=this.__ei;if(qx.core.Environment.get(u)){bh=this.__ee;}
else if(qx.core.Environment.get(g)&&!qx.core.Environment.get(K)&&qx.core.Environment.get(d)){bh=this.__ef;}
else if(qx.core.Environment.get(g)&&!qx.core.Environment.get(K)){bh=this.__eh;}
;var bj=[w,M,Y,j,V,H];(function(bo,bq,bt,br,bk,bn){for(var i=0;i<bo.length;i++ ){var bw=this.__ej(bo[i]);var bp=this.__ej(bq[i]);var bx=bt[i];var bm=br[i];var bl=bk[i];var bu=bn[i];if(!bh(bw,bp,bx,bm,bl,bu,bg,bi)){break;}
;}
;if(O in bg){if(!qx.lang.Type.isArray(bg[h])){bg[h]=[bg[h]];}
;}
else {bg[h]=[];}
;var bs=be in this?this.getOrderGradientsFront():false;var bv=bs?Array.prototype.unshift:Array.prototype.push;bv.apply(bg[h],bi);}
).apply(this,this._getExtendedPropertyValueArrays(bj));}
,__ee:function(bH,bE,bI,bA,bz,bC,by,bD){bI=bI===c?D:bI;if(bA==P){var bG=bz+bI+a+bI;var bF=bC+bI+a+bI;}
else {var bG=m+bI+W+bz+bI;var bF=m+bI+W+bC+bI;}
;var bB=e+bH+b+bE+f;bD.push(o+bG+bf+bF+bf+bB+f);return true;}
,__ef:function bJ(bW,bQ,bY,bM,bL,bN,bK,bO){if(!bJ.__eg){bJ.__eg=document.createElement(I);}
;var bX=bM==C;var bP=bX?200:1;var bR=bX?1:200;var bS=Math.max(100,bN-bL);if(bY===c){if(bX){bP=Math.max(bP,bN-bL);}
else {bR=Math.max(bR,bN-bL);}
;}
else {if(bX){bP=Math.max(bP,(bN-bL)*2);}
else {bR=Math.max(bR,(bN-bL)*2);}
;}
;bJ.__eg.width=bR;bJ.__eg.height=bP;var bT=bJ.__eg.getContext(U);if(bX){var bV=bT.createLinearGradient(0,0,0,bP);}
else {var bV=bT.createLinearGradient(0,0,bR,0);}
;if(bY===p){bV.addColorStop(Math.max(0,bL)/bS,bW);bV.addColorStop(bN/bS,bQ);}
else {var bU=bX?bP:bR;bV.addColorStop(Math.max(0,bL)/bU,bW);bV.addColorStop(bN/bU,bQ);}
;bT.clearRect(0,0,bR,bP);bT.fillStyle=bV;bT.fillRect(0,0,bR,bP);var ca;if(bY===p){ca=bX?T+bS+p:bS+G;}
else {ca=bX?bP+z:T+bR+c;}
;bO.push(t+bJ.__eg.toDataURL()+A+ca);return true;}
,__eh:function(ci,ch,ck,cd,cc,ce,cb,cf){var cj=cd==P?1:0;if(!qx.util.ColorUtil.isHex6String(ci)){ci=qx.util.ColorUtil.stringToRgb(ci);ci=qx.util.ColorUtil.rgbToHexString(ci);}
;if(!qx.util.ColorUtil.isHex6String(ch)){ch=qx.util.ColorUtil.stringToRgb(ch);ch=qx.util.ColorUtil.rgbToHexString(ch);}
;ci=ci.substring(1,ci.length);ch=ch.substring(1,ch.length);var cg=R+B+cj+N+S+ci+l+v+ch+L;if(cb[k]){cb[k]+=N+cg;}
else {cb[k]=cg;}
;if(!cb[r]||cb[r]==E){cb[r]=X;}
;return false;}
,__ei:function(cu,cr,cv,co,cm,cp,cl,cq){var cw=co==P?0:270;var cs=cu+W+cm+cv;var cn=cr+W+cp+cv;var ct=qx.core.Environment.get(K);if(ct===bd){cw=co==P?cw+90:cw-90;}
;cq.push(ct+J+cw+s+cs+bf+cn+f);return true;}
,__ej:function(cx){return qx.core.Environment.get(y)?qx.theme.manager.Color.getInstance().resolve(cx):cx;}
,_applyLinearBackgroundGradient:function(){if(qx.core.Environment.get(q)){if(this._isInitialized()){throw new Error(Q);}
;}
;}
}});}
)();
(function(){var a="_applyBoxShadow",b="shadowHorizontalLength",c="shadowBlurRadius",d="shadowColor",e="This decorator is already in-use. Modification is not possible anymore!",f="qx.debug",g="qx.theme",h="shadowSpreadRadius",j="px ",k='',l="css.boxshadow",m="shadowVerticalLength",n="shorthand",o="qx.ui.decoration.MBoxShadow",p="inset",q='inset ',r="black",s=",";qx.Mixin.define(o,{properties:{shadowHorizontalLength:{nullable:true,apply:a},shadowVerticalLength:{nullable:true,apply:a},shadowBlurRadius:{nullable:true,apply:a},shadowSpreadRadius:{nullable:true,apply:a},shadowColor:{nullable:true,apply:a},inset:{init:false,apply:a},shadowLength:{group:[b,m],mode:n}},members:{_styleBoxShadow:function(t){var v=qx.core.Environment.get(l);if(!v||this.getShadowVerticalLength()==null&&this.getShadowHorizontalLength()==null){return;}
;v=qx.bom.Style.getCssName(v);var u=null;if(qx.core.Environment.get(g)){u=qx.theme.manager.Color.getInstance();}
;var w=[m,b,c,h,d,p];(function(A,I,C,y,x,D){for(var i=0;i<A.length;i++ ){var H=A[i]||0;var z=I[i]||0;var blur=C[i]||0;var G=y[i]||0;var E=x[i]||r;var F=D[i];if(u){E=u.resolve(E);}
;if(E!=null){var B=(F?q:k)+z+j+H+j+blur+j+G+j+E;if(!t[v]){t[v]=B;}
else {t[v]+=s+B;}
;}
;}
;}
).apply(this,this._getExtendedPropertyValueArrays(w));}
,_applyBoxShadow:function(){if(qx.core.Environment.get(f)){if(this._isInitialized()){throw new Error(e);}
;}
;}
}});}
)();
(function(){var a=', ',b="qx.ui.decoration.Decorator",c="_style",d="_getDefaultInsetsFor",e="left",f="top",g="bottom",h="right";qx.Class.define(b,{extend:qx.ui.decoration.Abstract,implement:[qx.ui.decoration.IDecorator],include:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderImage],members:{__ek:false,getPadding:function(){var l=this.getInset();var j=this._getDefaultInsetsForBorderImage();var o=l.top-(j.top?j.top:this.getWidthTop());var n=l.right-(j.right?j.right:this.getWidthRight());var k=l.bottom-(j.bottom?j.bottom:this.getWidthBottom());var m=l.left-(j.left?j.left:this.getWidthLeft());return {top:l.top?o:this.getInnerWidthTop(),right:l.right?n:this.getInnerWidthRight(),bottom:l.bottom?k:this.getInnerWidthBottom(),left:l.left?m:this.getInnerWidthLeft()};}
,getStyles:function(s){if(s){return this._getStyles();}
;var r={};var q=this._getStyles();for(var p in q){r[qx.lang.String.camelCase(p)]=q[p];}
;return r;}
,_getStyles:function(){var t={};for(var name in this){if(name.indexOf(c)==0&&this[name] instanceof Function){this[name](t);}
;}
;for(var name in t){if(qx.lang.Type.isArray(t[name])){t[name]=t[name].join(a);}
;}
;this.__ek=true;return t;}
,_getDefaultInsets:function(){var x=[f,h,g,e];var v={};for(var name in this){if(name.indexOf(d)==0&&this[name] instanceof Function){var w=this[name]();for(var i=0;i<x.length;i++ ){var u=x[i];if(v[u]==undefined){v[u]=w[u];}
;if(w[u]>v[u]){v[u]=w[u];}
;}
;}
;}
;if(v[f]!=undefined){return v;}
;return {top:0,right:0,bottom:0,left:0};}
,_isInitialized:function(){return this.__ek;}
,_getExtendedPropertyValueArrays:function(A){var z=A.map(function(B){var C=this.get(B);if(!qx.lang.Type.isArray(C)){C=[C];}
;return C;}
,this);var y=Math.max.apply(Math,z.map(function(D){return D.length;}
));for(var i=0;i<z.length;i++ ){this.__el(z[i],y);}
;return z;}
,__el:function(F,E){var G=F.length;while(F.length<E){F.push(F[F.length%G]);}
;}
}});}
)();
(function(){var a="_applyTheme",b="qx.theme.manager.Font",c="_dynamic",d="Theme",e="changeTheme",f="singleton";qx.Class.define(b,{type:f,extend:qx.util.ValueManager,implement:[qx.core.IDisposable],properties:{theme:{check:d,nullable:true,apply:a,event:e}},members:{resolveDynamic:function(h){var g=this._dynamic;return h instanceof qx.bom.Font?h:g[h];}
,resolve:function(k){var j=this._dynamic;var i=j[k];if(i){return i;}
;var l=this.getTheme();if(l!==null&&l.fonts[k]){var m=this.__en(l.fonts[k]);var n=(new m);if(l.fonts[k].testCharacters){n.setTestCharacters(l.fonts[k].testCharacters);}
;return j[k]=n.set(l.fonts[k]);}
;return k;}
,isDynamic:function(r){var q=this._dynamic;if(r&&(r instanceof qx.bom.Font||q[r]!==undefined)){return true;}
;var p=this.getTheme();if(p!==null&&r&&p.fonts[r]){var o=this.__en(p.fonts[r]);var s=(new o);if(p.fonts[r].testCharacters){s.setTestCharacters(p.fonts[r].testCharacters);}
;q[r]=s.set(p.fonts[r]);return true;}
;return false;}
,__em:function(u,t){if(u[t].include){var v=u[u[t].include];u[t].include=null;delete u[t].include;u[t]=qx.lang.Object.mergeWith(u[t],v,false);this.__em(u,t);}
;}
,_applyTheme:function(x){var w=this._dynamic;for(var z in w){if(w[z].themed){w[z].dispose();delete w[z];}
;}
;if(x){var y=x.fonts;for(var z in y){if(y[z].include&&y[y[z].include]){this.__em(y,z);}
;var A=this.__en(y[z]);var B=(new A);if(y[z].testCharacters){B.setTestCharacters(y[z].testCharacters);}
;w[z]=(new A).set(y[z]);w[z].themed=true;}
;}
;this._setDynamic(w);}
,__en:function(C){if(C.sources){return qx.bom.webfonts.WebFont;}
;return qx.bom.Font;}
},destruct:function(){this._disposeMap(c);}
});}
)();
(function(){var a="Boolean",b="px",c="_applyItalic",d="_applyBold",e="underline",f="_applyTextShadow",g="Integer",h="string",j="_applyLineHeight",k='"',m="Array",n="line-through",o="_applyFamily",p="overline",q="Color",r="String",s="",t="italic",u="normal",v="qx.bom.Font",w="bold",x="Number",y="_applyDecoration",z=" ",A="_applySize",B=",",C="_applyColor";qx.Class.define(v,{extend:qx.core.Object,construct:function(E,D){qx.core.Object.call(this);this.__eo={fontFamily:s,fontSize:null,fontWeight:null,fontStyle:null,textDecoration:null,lineHeight:null,color:null,textShadow:null};if(E!==undefined){this.setSize(E);}
;if(D!==undefined){this.setFamily(D);}
;}
,statics:{fromString:function(I){var J=new qx.bom.Font();var G=I.split(/\s+/);var name=[];var H;for(var i=0;i<G.length;i++ ){switch(H=G[i]){case w:J.setBold(true);break;case t:J.setItalic(true);break;case e:J.setDecoration(e);break;default:var F=parseInt(H,10);if(F==H||qx.lang.String.contains(H,b)){J.setSize(F);}
else {name.push(H);}
;break;};}
;if(name.length>0){J.setFamily(name);}
;return J;}
,fromConfig:function(L){var K=new qx.bom.Font;K.set(L);return K;}
,__ep:{fontFamily:s,fontSize:s,fontWeight:s,fontStyle:s,textDecoration:s,lineHeight:1.2,color:s,textShadow:s},getDefaultStyles:function(){return this.__ep;}
},properties:{size:{check:g,nullable:true,apply:A},lineHeight:{check:x,nullable:true,apply:j},comparisonString:{check:r,init:null,nullable:true},version:{check:function(M){return M===null||(typeof M===h&&/^[a-zA-Z0-9.-]+$/.test(M));}
,init:null,nullable:true},family:{check:m,nullable:true,apply:o},bold:{check:a,nullable:true,apply:d},italic:{check:a,nullable:true,apply:c},decoration:{check:[e,n,p],nullable:true,apply:y},color:{check:q,nullable:true,apply:C},textShadow:{nullable:true,check:r,apply:f}},members:{__eo:null,_applySize:function(O,N){this.__eo.fontSize=O===null?null:O+b;}
,_applyLineHeight:function(Q,P){this.__eo.lineHeight=Q===null?null:Q;}
,_applyFamily:function(R,S){var T=s;for(var i=0,l=R.length;i<l;i++ ){if(R[i].indexOf(z)>0){T+=k+R[i]+k;}
else {T+=R[i];}
;if(i!==l-1){T+=B;}
;}
;this.__eo.fontFamily=T;}
,_applyBold:function(V,U){this.__eo.fontWeight=V==null?null:V?w:u;}
,_applyItalic:function(X,W){this.__eo.fontStyle=X==null?null:X?t:u;}
,_applyDecoration:function(ba,Y){this.__eo.textDecoration=ba==null?null:ba;}
,_applyColor:function(bc,bb){this.__eo.color=null;if(bc){this.__eo.color=qx.theme.manager.Color.getInstance().resolve(bc);}
;}
,_applyTextShadow:function(be,bd){this.__eo.textShadow=be==null?null:be;}
,getStyles:function(){return this.__eo;}
}});}
)();
(function(){var a="qx.bom.webfonts.WebFont",b="",c="qx.debug",d="changeStatus",e="_applySources",f="qx.event.type.Data",g=" was not applied, perhaps the source file could not be loaded.",h="WebFont ";qx.Class.define(a,{extend:qx.bom.Font,events:{"changeStatus":f},properties:{sources:{nullable:true,apply:e}},members:{__eq:null,_applySources:function(m,o){var j=[];for(var i=0,l=m.length;i<l;i++ ){var k=this._quoteFontFamily(m[i].family);j.push(k);var n=m[i];n.comparisonString=this.getComparisonString();n.version=this.getVersion();qx.bom.webfonts.Manager.getInstance().require(k,n,this._onWebFontChangeStatus,this);}
;this.setFamily(j.concat(this.getFamily()));}
,_onWebFontChangeStatus:function(p){var q=p.getData();this.fireDataEvent(d,q);if(qx.core.Environment.get(c)){if(q.valid===false){this.warn(h+q.family+g);}
;}
;}
,_quoteFontFamily:function(r){return r.replace(/["']/g,b);}
}});}
)();
(function(){var a="m",b="os.name",c=")",d="os.version",e="qx.bom.webfonts.Manager",f=".*font-style: *",g="svg",h="chrome",k="browser.name",n="singleton",o=",\n",p="src: ",q="mobileSafari",r="\nfont-style: ",s="');",t="qx.debug",u="interval",v="'eot)",w="#",y="firefox",z="!",A="eot",B="ios",C="changeStatus",D="Couldn't create @font-face rule for WebFont ",E="}\n",F="font-family: ",G="browser.documentmode",H="mobile safari",I="safari",J="@font-face.*?",K=";",L="",M="ttf",N="_",O="') format('svg')",P=";\n",Q="('embedded-opentype')",R="browser.version",S="opera",T="engine.version",U="') format('woff')",V="normal",W="mshtml",X="engine.name",Y="url('",br="src: url('",bs="('embedded-opentype)",bt="\nfont-weight: ",bn="?",bo=".*font-weight: *",bp="?#iefix') format('embedded-opentype')",bq="woff",bw="ie",bx="\.(",by="'eot')",bz="Error while adding @font-face rule:",bu="@font-face {",bv="') format('truetype')";qx.Class.define(e,{extend:qx.core.Object,type:n,construct:function(){qx.core.Object.call(this);this.__er=[];this.__es={};this.__et=[];this.__eu=this.getPreferredFormats();}
,statics:{FONT_FORMATS:[A,bq,M,g],VALIDATION_TIMEOUT:5000},members:{__er:null,__ev:null,__es:null,__eu:null,__et:null,__ew:null,require:function(bE,bK,bL,bJ){var bD=bK.source;var bC=bK.comparisonString;var bG=bK.version;var bF=bK.fontWeight;var bB=bK.fontStyle;var bH=[];for(var i=0,l=bD.length;i<l;i++ ){var bI=bD[i].split(w);var bA=qx.util.ResourceManager.getInstance().toUri(bI[0]);if(bI.length>1){bA=bA+w+bI[1];}
;bH.push(bA);}
;if(qx.core.Environment.get(X)==W&&(parseInt(qx.core.Environment.get(T))<9||qx.core.Environment.get(G)<9)){if(!this.__ew){this.__ew=new qx.event.Timer(100);this.__ew.addListener(u,this.__ez,this);}
;if(!this.__ew.isEnabled()){this.__ew.start();}
;this.__et.push([bE,bH,bF,bB,bC,bG,bL,bJ]);}
else {this.__ey(bE,bH,bF,bB,bC,bG,bL,bJ);}
;}
,remove:function(bO,bP,bQ){var bN=this.__ex(bO,bP,bQ);var bM=null;for(var i=0,l=this.__er.length;i<l;i++ ){if(this.__er[i]==bN){bM=i;this.__eF(bO,bP,bQ);break;}
;}
;if(bM!==null){qx.lang.Array.removeAt(this.__er,bM);}
;if(bO in this.__es){this.__es[bO].dispose();delete this.__es[bO];}
;}
,getPreferredFormats:function(){var bR=[];var bV=qx.core.Environment.get(k);var bS=qx.core.Environment.get(R);var bU=qx.core.Environment.get(b);var bT=qx.core.Environment.get(d);if((bV==bw&&qx.core.Environment.get(G)>=9)||(bV==y&&bS>=3.6)||(bV==h&&bS>=6)){bR.push(bq);}
;if((bV==S&&bS>=10)||(bV==I&&bS>=3.1)||(bV==y&&bS>=3.5)||(bV==h&&bS>=4)||(bV==H&&bU==B&&bT>=4.2)){bR.push(M);}
;if(bV==bw&&bS>=4){bR.push(A);}
;if(bV==q&&bU==B&&bT>=4.1){bR.push(g);}
;return bR;}
,removeStyleSheet:function(){this.__er=[];if(this.__ev){qx.bom.Stylesheet.removeSheet(this.__ev);}
;this.__ev=null;}
,__ex:function(bX,bW,ca){var bY=bX+N+(bW?bW:V)+N+(ca?ca:V);return bY;}
,__ey:function(cf,ce,ch,cc,cd,ci,cl,ck){var cj=this.__ex(cf,ch,cc);if(!qx.lang.Array.contains(this.__er,cj)){var cm=this.__eB(ce);var cg=this.__eC(cf,ch,cc,cm,ci);if(!cg){throw new Error(D+cf+z);}
;if(!this.__ev){this.__ev=qx.bom.Stylesheet.createElement();}
;try{this.__eE(cg);}
catch(cn){if(qx.core.Environment.get(t)){this.warn(bz,cn.message);return;}
;}
;this.__er.push(cj);}
;if(!this.__es[cf]){this.__es[cf]=new qx.bom.webfonts.Validator(cf,cd);this.__es[cf].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);this.__es[cf].addListenerOnce(C,this.__eA,this);}
;if(cl){var cb=ck||window;this.__es[cf].addListenerOnce(C,cl,cb);}
;this.__es[cf].validate();}
,__ez:function(){if(this.__et.length==0){this.__ew.stop();return;}
;var co=this.__et.shift();this.__ey.apply(this,co);}
,__eA:function(cp){var cq=cp.getData();if(cq.valid===false){qx.event.Timer.once(function(){this.remove(cq.family);}
,this,250);}
;}
,__eB:function(cr){var ct=qx.bom.webfonts.Manager.FONT_FORMATS;var cs={};for(var i=0,l=cr.length;i<l;i++ ){var cu=null;for(var x=0;x<ct.length;x++ ){var cv=new RegExp(bx+ct[x]+c);var cw=cv.exec(cr[i]);if(cw){cu=cw[1];}
;}
;if(cu){cs[cu]=cr[i];}
;}
;return cs;}
,__eC:function(cB,cx,cE,cF,cz){var cD=[];var cy=this.__eu.length>0?this.__eu:qx.bom.webfonts.Manager.FONT_FORMATS;for(var i=0,l=cy.length;i<l;i++ ){var cA=cy[i];if(cF[cA]){cD.push(this.__eD(cA,cF[cA],cz));}
;}
;var cC=p+cD.join(o)+K;cC=F+cB+P+cC;cC=cC+r+(cE?cE:V)+K;cC=cC+bt+(cx?cx:V)+K;return cC;}
,__eD:function(cI,cG,cH){if(cH){cG+=bn+cH;}
;switch(cI){case A:return Y+cG+s+br+cG+bp;case bq:return Y+cG+U;case M:return Y+cG+bv;case g:return Y+cG+O;default:return null;};}
,__eE:function(cK){var cJ=bu+cK+E;if(qx.core.Environment.get(k)==bw&&qx.core.Environment.get(G)<9){var cL=this.__eG(this.__ev.cssText);cL+=cJ;this.__ev.cssText=cL;}
else {this.__ev.insertRule(cJ,this.__ev.cssRules.length);}
;}
,__eF:function(cP,cQ,cM){var cR=new RegExp(J+cP+f+(cM?cM:V)+bo+(cQ?cQ:V),a);for(var i=0,l=document.styleSheets.length;i<l;i++ ){var cN=document.styleSheets[i];if(cN.cssText){var cO=cN.cssText.replace(/\n/g,L).replace(/\r/g,L);cO=this.__eG(cO);if(cR.exec(cO)){cO=cO.replace(cR,L);}
;cN.cssText=cO;}
else if(cN.cssRules){for(var j=0,m=cN.cssRules.length;j<m;j++ ){var cO=cN.cssRules[j].cssText.replace(/\n/g,L).replace(/\r/g,L);if(cR.exec(cO)){this.__ev.deleteRule(j);return;}
;}
;}
;}
;}
,__eG:function(cS){return cS.replace(v,by).replace(bs,Q);}
},destruct:function(){if(this.__ew){this.__ew.stop();this.__ew.dispose();}
;delete this.__er;this.removeStyleSheet();for(var cT in this.__es){this.__es[cT].dispose();}
;qx.bom.webfonts.Validator.removeDefaultHelperElements();}
});}
)();
(function(){var a="qx.event.Timer",b="_applyInterval",c="interval",d="func is not a function",f="Boolean",g="qx.debug",h="No timeout given",i="Integer",j="qx.event.type.Event",k="_applyEnabled";qx.Class.define(a,{extend:qx.core.Object,implement:[qx.core.IDisposable],construct:function(l){qx.core.Object.call(this);this.setEnabled(false);if(l!=null){this.setInterval(l);}
;var self=this;this.__eH=function(){self._oninterval.call(self);}
;}
,events:{"interval":j},statics:{once:function(m,n,o){if(qx.core.Environment.get(g)){qx.core.Assert.assertFunction(m,d);qx.core.Assert.assertNotUndefined(o,h);}
;var p=new qx.event.Timer(o);p.__eI=m;p.addListener(c,function(e){p.stop();m.call(n,e);p.dispose();n=null;}
,n);p.start();return p;}
},properties:{enabled:{init:true,check:f,apply:k},interval:{check:i,init:1000,apply:b}},members:{__eJ:null,__eH:null,_applyInterval:function(r,q){if(this.getEnabled()){this.restart();}
;}
,_applyEnabled:function(t,s){if(s){window.clearInterval(this.__eJ);this.__eJ=null;}
else if(t){this.__eJ=window.setInterval(this.__eH,this.getInterval());}
;}
,start:function(){this.setEnabled(true);}
,startWith:function(u){this.setInterval(u);this.start();}
,stop:function(){this.setEnabled(false);}
,restart:function(){this.stop();this.start();}
,restartWith:function(v){this.stop();this.startWith(v);}
,_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;}
;if(this.getEnabled()){this.fireEvent(c);}
;}
)},destruct:function(){if(this.__eJ){window.clearInterval(this.__eJ);}
;this.__eJ=this.__eH=null;}
});}
)();
(function(){var a="sans-serif",b="changeStatus",c="Integer",d="auto",e="qx.event.type.Data",f="0",g="qx.bom.webfonts.Validator",h="interval",i="Georgia",j="WEei",k="visible",l="Times New Roman",m="__eN",n="Arial",o="normal",p="Helvetica",q="350px",r="_applyFontFamily",s="-1000px",t="hidden",u="serif",v="span",w="absolute",x=",";qx.Class.define(g,{extend:qx.core.Object,construct:function(y,z){qx.core.Object.call(this);if(z){this.setComparisonString(z);}
;if(y){this.setFontFamily(y);this.__eK=this._getRequestedHelpers();}
;}
,statics:{COMPARISON_FONTS:{sans:[n,p,a],serif:[l,i,u]},HELPER_CSS:{position:w,margin:f,padding:f,top:s,left:s,fontSize:q,width:d,height:d,lineHeight:o,fontVariant:o,visibility:t},COMPARISON_STRING:j,__eL:null,__eM:null,removeDefaultHelperElements:function(){var A=qx.bom.webfonts.Validator.__eM;if(A){for(var B in A){document.body.removeChild(A[B]);}
;}
;delete qx.bom.webfonts.Validator.__eM;}
},properties:{fontFamily:{nullable:true,init:null,apply:r},comparisonString:{nullable:true,init:null},timeout:{check:c,init:5000}},events:{"changeStatus":e},members:{__eK:null,__eN:null,__eO:null,validate:function(){this.__eO=new Date().getTime();if(this.__eN){this.__eN.restart();}
else {this.__eN=new qx.event.Timer(100);this.__eN.addListener(h,this.__eQ,this);qx.event.Timer.once(function(){this.__eN.start();}
,this,0);}
;}
,_reset:function(){if(this.__eK){for(var D in this.__eK){var C=this.__eK[D];document.body.removeChild(C);}
;this.__eK=null;}
;}
,_isFontValid:function(){if(!qx.bom.webfonts.Validator.__eL){this.__eP();}
;if(!this.__eK){this.__eK=this._getRequestedHelpers();}
;this.__eK.sans.style.visibility=k;this.__eK.sans.style.visibility=t;this.__eK.serif.style.visibility=k;this.__eK.serif.style.visibility=t;var F=qx.bom.element.Dimension.getWidth(this.__eK.sans);var E=qx.bom.element.Dimension.getWidth(this.__eK.serif);var G=qx.bom.webfonts.Validator;if(F!==G.__eL.sans||E!==G.__eL.serif){return true;}
;return false;}
,_getRequestedHelpers:function(){var H=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);var I=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);return {sans:this._getHelperElement(H,this.getComparisonString()),serif:this._getHelperElement(I,this.getComparisonString())};}
,_getHelperElement:function(J,L){var K=qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);if(J){if(K.fontFamily){K.fontFamily+=x+J.join(x);}
else {K.fontFamily=J.join(x);}
;}
;var M=document.createElement(v);M.innerHTML=L||qx.bom.webfonts.Validator.COMPARISON_STRING;qx.bom.element.Style.setStyles(M,K);document.body.appendChild(M);return M;}
,_applyFontFamily:function(O,N){if(O!==N){this._reset();}
;}
,__eP:function(){var P=qx.bom.webfonts.Validator;if(!P.__eM){P.__eM={sans:this._getHelperElement(P.COMPARISON_FONTS.sans),serif:this._getHelperElement(P.COMPARISON_FONTS.serif)};}
;P.__eL={sans:qx.bom.element.Dimension.getWidth(P.__eM.sans),serif:qx.bom.element.Dimension.getWidth(P.__eM.serif)};}
,__eQ:function(){if(this._isFontValid()){this.__eN.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:true});}
else {var Q=new Date().getTime();if(Q-this.__eO>=this.getTimeout()){this.__eN.stop();this._reset();this.fireDataEvent(b,{family:this.getFontFamily(),valid:false});}
;}
;}
},destruct:function(){this._reset();this.__eN.stop();this.__eN.removeListener(h,this.__eQ,this);this._disposeObjects(m);}
});}
)();
(function(){var a="mshtml",b="engine.name",c="qx.bom.element.Dimension",d="0px",e="paddingRight",f="paddingLeft",g="opera",h="paddingBottom",i="paddingTop",j="overflowX",k="overflowY";qx.Bootstrap.define(c,{statics:{getWidth:function(m){var l=m.getBoundingClientRect();return Math.round(l.right-l.left);}
,getHeight:function(o){var n=o.getBoundingClientRect();return Math.round(n.bottom-n.top);}
,getSize:function(p){return {width:this.getWidth(p),height:this.getHeight(p)};}
,__eR:{visible:true,hidden:true},getContentWidth:function(t){var q=qx.bom.element.Style;var r=qx.bom.element.Style.get(t,j);var s=parseInt(q.get(t,f)||d,10);var w=parseInt(q.get(t,e)||d,10);if(this.__eR[r]){var v=t.clientWidth;if((qx.core.Environment.get(b)==g)||qx.dom.Node.isBlockNode(t)){v=v-s-w;}
;if(qx.core.Environment.get(b)==a){if(v===0&&t.offsetHeight===0){return t.offsetWidth;}
;}
;return v;}
else {if(t.clientWidth>=t.scrollWidth){return Math.max(t.clientWidth,t.scrollWidth)-s-w;}
else {var u=t.scrollWidth-s;if(qx.core.Environment.get(b)==a){u-=w;}
;return u;}
;}
;}
,getContentHeight:function(B){var x=qx.bom.element.Style;var A=qx.bom.element.Style.get(B,k);var z=parseInt(x.get(B,i)||d,10);var y=parseInt(x.get(B,h)||d,10);if(this.__eR[A]){return B.clientHeight-z-y;}
else {if(B.clientHeight>=B.scrollHeight){return Math.max(B.clientHeight,B.scrollHeight)-z-y;}
else {return B.scrollHeight-z;}
;}
;}
,getContentSize:function(C){return {width:this.getContentWidth(C),height:this.getContentHeight(C)};}
}});}
)();
(function(){var a="This client does not support the boxSizing value",b="border-box",c="qx.bom.element.BoxSizing",d="css.boxsizing",e="",f="This client does not support dynamic modification of the boxSizing property.",g="qx.debug",h="boxSizing",i="content-box",j=":",k=";";qx.Bootstrap.define(c,{statics:{__eS:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__eT:function(m){var l=this.__eS;return l.tags[m.tagName.toLowerCase()]||l.types[m.type];}
,compile:function(n){if(qx.core.Environment.get(d)){var o=qx.bom.Style.getCssName(qx.core.Environment.get(d));return o+j+n+k;}
else {if(qx.core.Environment.get(g)){qx.log.Logger.warn(this,f);qx.log.Logger.trace();}
;}
;}
,get:function(p){if(qx.core.Environment.get(d)){return qx.bom.element.Style.get(p,h,null,false)||e;}
;if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(p))){if(!this.__eT(p)){return i;}
;}
;return b;}
,set:function(r,q){if(qx.core.Environment.get(d)){try{r.style[qx.core.Environment.get(d)]=q;}
catch(s){if(qx.core.Environment.get(g)){qx.log.Logger.warn(this,a,q);}
;}
;}
else {if(qx.core.Environment.get(g)){qx.log.Logger.warn(this,f);}
;}
;}
,reset:function(t){this.set(t,e);}
}});}
)();
(function(){var a="cursor:",b="engine.name",c="",d="mshtml",e="nw-resize",f="engine.version",g="nesw-resize",h="browser.documentmode",i=";",j="nwse-resize",k="qx.bom.element.Cursor",l="ne-resize",m="browser.quirksmode",n="cursor";qx.Bootstrap.define(k,{statics:{__eU:{},compile:function(o){return a+(this.__eU[o]||o)+i;}
,get:function(q,p){return qx.bom.element.Style.get(q,n,p,false);}
,set:function(s,r){s.style.cursor=this.__eU[r]||r;}
,reset:function(t){t.style.cursor=c;}
},defer:function(u){if(qx.core.Environment.get(b)==d&&((parseFloat(qx.core.Environment.get(f))<9||qx.core.Environment.get(h)<9)&&!qx.core.Environment.get(m))){u.__eU[g]=l;u.__eU[j]=e;}
;}
});}
)();
(function(){var a="engine.name",b=");",c="",d=")",e="zoom:1;filter:alpha(opacity=",f="qx.bom.element.Opacity",g="css.opacity",h=";",i="opacity:",j="alpha(opacity=",k="opacity",l="filter";qx.Bootstrap.define(f,{statics:{compile:qx.core.Environment.select(a,{"mshtml":function(m){if(m>=1){m=1;}
;if(m<0.00001){m=0;}
;if(qx.core.Environment.get(g)){return i+m+h;}
else {return e+(m*100)+b;}
;}
,"default":function(n){return i+n+h;}
}),set:qx.core.Environment.select(a,{"mshtml":function(q,o){if(qx.core.Environment.get(g)){q.style.opacity=o;}
else {var p=qx.bom.element.Style.get(q,l,qx.bom.element.Style.COMPUTED_MODE,false);if(o>=1){o=1;}
;if(o<0.00001){o=0;}
;if(!q.currentStyle||!q.currentStyle.hasLayout){q.style.zoom=1;}
;q.style.filter=p.replace(/alpha\([^\)]*\)/gi,c)+j+o*100+d;}
;}
,"default":function(s,r){s.style.opacity=r;}
}),reset:qx.core.Environment.select(a,{"mshtml":function(u){if(qx.core.Environment.get(g)){u.style.opacity=c;}
else {var t=qx.bom.element.Style.get(u,l,qx.bom.element.Style.COMPUTED_MODE,false);u.style.filter=t.replace(/alpha\([^\)]*\)/gi,c);}
;}
,"default":function(v){v.style.opacity=c;}
}),get:qx.core.Environment.select(a,{"mshtml":function(z,y){if(qx.core.Environment.get(g)){var w=qx.bom.element.Style.get(z,k,y,false);if(w!=null){return parseFloat(w);}
;return 1.0;}
else {var x=qx.bom.element.Style.get(z,l,y,false);if(x){var w=x.match(/alpha\(opacity=(.*)\)/);if(w&&w[1]){return parseFloat(w[1])/100;}
;}
;return 1.0;}
;}
,"default":function(C,B){var A=qx.bom.element.Style.get(C,k,B,false);if(A!=null){return parseFloat(A);}
;return 1.0;}
})}});}
)();
(function(){var a="clip:auto;",b="rect(",c=")",d=");",e="",f="px",g="Could not parse clip string: ",h="qx.bom.element.Clip",i="string",j="clip:rect(",k=" ",l="clip",m="rect(auto,auto,auto,auto)",n="rect(auto, auto, auto, auto)",o="auto",p=",";qx.Bootstrap.define(h,{statics:{compile:function(q){if(!q){return a;}
;var v=q.left;var top=q.top;var u=q.width;var t=q.height;var r,s;if(v==null){r=(u==null?o:u+f);v=o;}
else {r=(u==null?o:v+u+f);v=v+f;}
;if(top==null){s=(t==null?o:t+f);top=o;}
else {s=(t==null?o:top+t+f);top=top+f;}
;return j+top+p+r+p+s+p+v+d;}
,get:function(z,D){var x=qx.bom.element.Style.get(z,l,D,false);var C,top,A,E;var w,y;if(typeof x===i&&x!==o&&x!==e){x=x.trim();if(/\((.*)\)/.test(x)){var F=RegExp.$1;if(/,/.test(F)){var B=F.split(p);}
else {var B=F.split(k);}
;top=B[0].trim();w=B[1].trim();y=B[2].trim();C=B[3].trim();if(C===o){C=null;}
;if(top===o){top=null;}
;if(w===o){w=null;}
;if(y===o){y=null;}
;if(top!=null){top=parseInt(top,10);}
;if(w!=null){w=parseInt(w,10);}
;if(y!=null){y=parseInt(y,10);}
;if(C!=null){C=parseInt(C,10);}
;if(w!=null&&C!=null){A=w-C;}
else if(w!=null){A=w;}
;if(y!=null&&top!=null){E=y-top;}
else if(y!=null){E=y;}
;}
else {throw new Error(g+x);}
;}
;return {left:C||null,top:top||null,width:A||null,height:E||null};}
,set:function(L,G){if(!G){L.style.clip=m;return;}
;var M=G.left;var top=G.top;var K=G.width;var J=G.height;var H,I;if(M==null){H=(K==null?o:K+f);M=o;}
else {H=(K==null?o:M+K+f);M=M+f;}
;if(top==null){I=(J==null?o:J+f);top=o;}
else {I=(J==null?o:top+J+f);top=top+f;}
;L.style.clip=b+top+p+H+p+I+p+M+c;}
,reset:function(N){N.style.clip=n;}
}});}
)();
(function(){var a="css.float",b='cssFloat',c="px",d="Cascaded styles are not supported in this browser!",e="css.appearance",f="pixelRight",g="css.userselect",h="css.boxsizing",i="css.textoverflow",j="qx.debug",k="pixelHeight",l=":",m="pixelTop",n="css.borderimage",o="Invalid argument 'name'",p="pixelLeft",q="css.usermodify",r="qx.bom.element.Style",s="Invalid argument 'smart'",t="",u="pixelBottom",v="Invalid argument 'styles'",w="pixelWidth",x='float',y=";",z="\"\"",A="Invalid argument 'element'",B="style";qx.Bootstrap.define(r,{statics:{__eV:null,__eW:null,__eX:function(){var D={"appearance":qx.core.Environment.get(e),"userSelect":qx.core.Environment.get(g),"textOverflow":qx.core.Environment.get(i),"borderImage":qx.core.Environment.get(n),"float":qx.core.Environment.get(a),"userModify":qx.core.Environment.get(q),"boxSizing":qx.core.Environment.get(h)};this.__eW={};for(var C in qx.lang.Object.clone(D)){if(!D[C]){delete D[C];}
else {if(C===x){this.__eW[b]=C;}
else {this.__eW[C]=qx.bom.Style.getCssName(D[C]);}
;}
;}
;this.__eV=D;}
,__eY:function(name){var E=qx.bom.Style.getPropertyName(name);if(E){this.__eV[name]=E;}
;return E;}
,__fa:{width:w,height:k,left:p,right:f,top:m,bottom:u},__fb:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing},compile:function(F){var I=[];var J=this.__fb;var H=this.__eW;var name,G;for(name in F){G=F[name];if(G==null){continue;}
;name=this.__eW[name]||name;if(J[name]){I.push(J[name].compile(G));}
else {if(!H[name]){H[name]=qx.bom.Style.getCssName(name);}
;I.push(H[name],l,G===t?z:G,y);}
;}
;return I.join(t);}
,setCss:function(L,K){L.setAttribute(B,K);}
,getCss:function(M){return M.getAttribute(B);}
,isPropertySupported:function(N){return (this.__fb[N]||this.__eV[N]||N in document.documentElement.style);}
,COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(Q,name,P,O){if(qx.core.Environment.get(j)){qx.core.Assert.assertElement(Q,A);qx.core.Assert.assertString(name,o);if(O!==undefined){qx.core.Assert.assertBoolean(O,s);}
;}
;name=this.__eV[name]||this.__eY(name)||name;if(O!==false&&this.__fb[name]){this.__fb[name].set(Q,P);}
else {Q.style[name]=P!==null?P:t;}
;}
,setStyles:function(X,R,V){if(qx.core.Environment.get(j)){qx.core.Assert.assertElement(X,A);qx.core.Assert.assertMap(R,v);if(V!==undefined){qx.core.Assert.assertBoolean(V,s);}
;}
;var U=this.__eV;var Y=this.__fb;var S=X.style;for(var W in R){var T=R[W];var name=U[W]||this.__eY(W)||W;if(T===undefined){if(V!==false&&Y[name]){Y[name].reset(X);}
else {S[name]=t;}
;}
else {if(V!==false&&Y[name]){Y[name].set(X,T);}
else {S[name]=T!==null?T:t;}
;}
;}
;}
,reset:function(bb,name,ba){name=this.__eV[name]||this.__eY(name)||name;if(ba!==false&&this.__fb[name]){this.__fb[name].reset(bb);}
else {bb.style[name]=t;}
;}
,get:function(bf,name,bh,bj){name=this.__eV[name]||this.__eY(name)||name;if(bj!==false&&this.__fb[name]){return this.__fb[name].get(bf,bh);}
;switch(bh){case this.LOCAL_MODE:return bf.style[name]||t;case this.CASCADED_MODE:if(bf.currentStyle){return bf.currentStyle[name]||t;}
;throw new Error(d);default:var bd=qx.dom.Node.getDocument(bf);var bg=bd.defaultView?bd.defaultView.getComputedStyle:undefined;if(bg!==undefined){var bc=bg(bf,null);if(bc&&bc[name]){return bc[name];}
;}
else {if(!bf.currentStyle){return bf.style[name]||t;}
;var bl=bf.currentStyle[name]||bf.style[name]||t;if(/^-?[\.\d]+(px)?$/i.test(bl)){return bl;}
;var bk=this.__fa[name];if(bk&&(bk in bf.style)){var bi=bf.style[name];bf.style[name]=bl||0;var be=bf.style[bk]+c;bf.style[name]=bi;return be;}
;return bl;}
;return bf.style[name]||t;};}
},defer:function(bm){bm.__eX();}
});}
)();
(function(){var a="engine.name",b="CSS1Compat",c="position:absolute;width:0;height:0;width:1",d="engine.version",e="qx.bom.Document",f="1px",g="div";qx.Bootstrap.define(e,{statics:{isQuirksMode:qx.core.Environment.select(a,{"mshtml":function(h){if(qx.core.Environment.get(d)>=8){return (h||window).document.documentMode===5;}
else {return (h||window).document.compatMode!==b;}
;}
,"webkit":function(i){if(document.compatMode===undefined){var j=(i||window).document.createElement(g);j.style.cssText=c;return j.style.width===f?true:false;}
else {return (i||window).document.compatMode!==b;}
;}
,"default":function(k){return (k||window).document.compatMode!==b;}
}),isStandardMode:function(l){return !this.isQuirksMode(l);}
,getWidth:function(m){var o=(m||window).document;var n=qx.bom.Viewport.getWidth(m);var scroll=this.isStandardMode(m)?o.documentElement.scrollWidth:o.body.scrollWidth;return Math.max(scroll,n);}
,getHeight:function(p){var r=(p||window).document;var q=qx.bom.Viewport.getHeight(p);var scroll=this.isStandardMode(p)?r.documentElement.scrollHeight:r.body.scrollHeight;return Math.max(scroll,q);}
}});}
)();
(function(){var a="ios",b="os.name",c="undefined",d="qx.bom.Viewport";qx.Bootstrap.define(d,{statics:{getWidth:function(e){var e=e||window;var f=e.document;return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;}
,getHeight:function(g){var g=g||window;var h=g.document;if(qx.core.Environment.get(b)==a&&window.innerHeight!=h.documentElement.clientHeight){return window.innerHeight;}
;return qx.bom.Document.isStandardMode(g)?h.documentElement.clientHeight:h.body.clientHeight;}
,getScrollLeft:function(i){var i=i?i:window;if(typeof i.pageXOffset!==c){return i.pageXOffset;}
;var j=i.document;return j.documentElement.scrollLeft||j.body.scrollLeft;}
,getScrollTop:function(k){var k=k?k:window;if(typeof k.pageYOffset!==c){return k.pageYOffset;}
;var l=k.document;return l.documentElement.scrollTop||l.body.scrollTop;}
,__fc:function(m){var o=this.getWidth(m)>this.getHeight(m)?90:0;var n=m.orientation;if(n==null||Math.abs(n%180)==o){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};}
else {return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};}
;}
,__fd:null,getOrientation:function(p){var p=p||window.top;var q=p.orientation;if(q==null){q=this.getWidth(p)>this.getHeight(p)?90:0;}
else {if(this.__fd==null){this.__fd=this.__fc(p);}
;q=this.__fd[q];}
;return q;}
,isLandscape:function(r){var s=this.getOrientation(r);return s===-90||s===90;}
,isPortrait:function(t){var u=this.getOrientation(t);return u===0||u===180;}
}});}
)();
(function(){var a="qx.theme.manager.Icon",b="Theme",c="changeTheme",d="_applyTheme",e="singleton";qx.Class.define(a,{type:e,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:d,event:c}},members:{_applyTheme:function(i,g){var h=qx.util.AliasManager.getInstance();if(g){for(var f in g.aliases){h.remove(f);}
;}
;if(i){for(var f in i.aliases){h.add(f,i.aliases[f]);}
;}
;}
}});}
)();
(function(){var a="'.",b="Missing appearance: ",c="_applyTheme",d="qx.debug",e="string",f="Cannot find a matching appearance for '",g="Hint: This may be an issue with nested child controls and a missing alias definition in the appearance theme.",h="qx.theme.manager.Appearance",j=":",k="Theme",l="undefined",m="changeTheme",n="/",o="singleton";qx.Class.define(h,{type:o,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__fe={};this.__ff={};}
,properties:{theme:{check:k,nullable:true,event:m,apply:c}},members:{__fg:{},__fe:null,__ff:null,_applyTheme:function(){this.__ff={};this.__fe={};}
,__fh:function(D,z,q,u){var w=z.appearances;var r=w[D];if(!r){var C=n;var s=[];var v=D.split(C);var B=qx.lang.Array.clone(v);var y;while(!r&&v.length>0){s.unshift(v.pop());var t=v.join(C);r=w[t];if(r){y=r.alias||r;if(typeof y===e){var A=y+C+s.join(C);return this.__fh(A,z,q,B);}
;}
;}
;for(var i=0;i<s.length-1;i++ ){s.shift();var x=s.join(C);var p=this.__fh(x,z,null,B);if(p){return p;}
;}
;if(q!=null){return this.__fh(q,z,null,B);}
;if(qx.core.Environment.get(d)){if(typeof u!==l){this.debug(f+u.join(n)+a);if(u.length>1){this.info(g);}
;}
;}
;return null;}
else if(typeof r===e){return this.__fh(r,z,q,B);}
else if(r.include&&!r.style){return this.__fh(r.include,z,q,B);}
;return D;}
,styleFrom:function(W,O,P,F){if(!P){P=this.getTheme();}
;var M=this.__ff;var E=M[W];if(!E){E=M[W]=this.__fh(W,P,F);}
;var T=P.appearances[E];if(!T){this.warn(b+W);return null;}
;if(!T.style){return null;}
;var U=E;if(O){var I=T.$$bits;if(!I){I=T.$$bits={};T.$$length=0;}
;var J=0;for(var L in O){if(!O[L]){continue;}
;if(I[L]==null){I[L]=1<<T.$$length++ ;}
;J+=I[L];}
;if(J>0){U+=j+J;}
;}
;var K=this.__fe;if(K[U]!==undefined){return K[U];}
;if(!O){O=this.__fg;}
;var R;if(T.include||T.base){var V;if(T.include){V=this.styleFrom(T.include,O,P,F);}
;var N=T.style(O,V);R={};if(T.base){var S=this.styleFrom(E,O,T.base,F);if(T.include){for(var H in S){if(!V.hasOwnProperty(H)&&!N.hasOwnProperty(H)){R[H]=S[H];}
;}
;}
else {for(var Q in S){if(!N.hasOwnProperty(Q)){R[Q]=S[Q];}
;}
;}
;}
;if(T.include){for(var G in V){if(!N.hasOwnProperty(G)){R[G]=V[G];}
;}
;}
;for(var X in N){R[X]=N[X];}
;}
else {R=T.style(O);}
;return K[U]=R||null;}
}});}
)();
(function(){var b="'!",c='Invalid include in theme "',d="fonts",e="appearances",f='The configuration key "',g="Mixin theme is not a valid theme!",h='" is not allowed!',j="icons",k="You can only define one theme category per file! Invalid theme: ",m="string",n="decorations",o="other",p="Found base flag in entry '",q="qx.debug",r='Invalid patch in theme "',s="widgets",t="[Theme ",u="borders",v="' are not compatible '",w="The mixins '",x='": ',y="' of theme '",z='" is invalid: ',A='Invalid extend in theme "',B='Invalid type of key "',C='The key "',D='"!',E="]",F='"! The value needs to be a map!',G='"! The type of the key must be "',H="undefined",I='The type of the key "',J="qx.Theme",K='The content of a meta theme must reference to other themes. The value for "',L='" inside the meta block is wrong.',M='" in theme "',N="colors",O='Invalid key "',P='"! The value is undefined/null!',Q="Theme",R="meta",S='" is not allowed inside a meta theme block.',T="'. Base flags are not allowed for themes without a valid super theme!",U="object";qx.Bootstrap.define(J,{statics:{define:function(name,W){if(!W){var W={};}
;W.include=this.__fi(W.include);W.patch=this.__fi(W.patch);if(qx.core.Environment.get(q)){this.__t(name,W);}
;var V={$$type:Q,name:name,title:W.title,toString:this.genericToString};if(W.extend){V.supertheme=W.extend;}
;V.basename=qx.Bootstrap.createNamespace(name,V);this.__fl(V,W);this.__fj(V,W);this.$$registry[name]=V;for(var i=0,a=W.include,l=a.length;i<l;i++ ){this.include(V,a[i]);}
;for(var i=0,a=W.patch,l=a.length;i<l;i++ ){this.patch(V,a[i]);}
;}
,__fi:function(X){if(!X){return [];}
;if(qx.Bootstrap.isArray(X)){return X;}
else {return [X];}
;}
,__fj:function(Y,ba){var bb=ba.aliases||{};if(ba.extend&&ba.extend.aliases){qx.Bootstrap.objectMergeWith(bb,ba.extend.aliases,false);}
;Y.aliases=bb;}
,getAll:function(){return this.$$registry;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,genericToString:function(){return t+this.name+E;}
,__fk:function(bd){for(var i=0,bc=this.__fm,l=bc.length;i<l;i++ ){if(bd[bc[i]]){return bc[i];}
;}
;}
,__fl:function(bi,bj){var bf=this.__fk(bj);if(bj.extend&&!bf){bf=bj.extend.type;}
;bi.type=bf||o;var bg=function(){}
;if(bj.extend){bg.prototype=new bj.extend.$$clazz;}
;var be=bg.prototype;var bh=bj[bf];for(var bk in bh){be[bk]=bh[bk];if(be[bk].base){if(qx.core.Environment.get(q)){if(!bj.extend){throw new Error(p+bk+y+bj.name+T);}
;}
;be[bk].base=bj.extend;}
;}
;bi.$$clazz=bg;bi[bf]=new bg;}
,$$registry:{},__fm:[N,u,n,d,j,s,e,R],__s:qx.core.Environment.select(q,{"true":{"title":m,"aliases":U,"type":m,"extend":U,"colors":U,"borders":U,"decorations":U,"fonts":U,"icons":U,"widgets":U,"appearances":U,"meta":U,"include":U,"patch":U},"default":null}),__fn:qx.core.Environment.select(q,{"true":{"color":U,"border":U,"decoration":U,"font":U,"icon":U,"appearance":U,"widget":U},"default":null}),__t:qx.core.Environment.select(q,{"true":function(name,bq){var bp=this.__s;for(var bo in bq){if(bp[bo]===undefined){throw new Error(f+bo+M+name+h);}
;if(bq[bo]==null){throw new Error(O+bo+M+name+P);}
;if(bp[bo]!==null&&typeof bq[bo]!==bp[bo]){throw new Error(B+bo+M+name+G+bp[bo]+D);}
;}
;var bn=[N,u,n,d,j,s,e,R];for(var i=0,l=bn.length;i<l;i++ ){var bo=bn[i];if(bq[bo]!==undefined&&(bq[bo] instanceof Array||bq[bo] instanceof RegExp||bq[bo] instanceof Date||bq[bo].classname!==undefined)){throw new Error(O+bo+M+name+F);}
;}
;var bl=0;for(var i=0,l=bn.length;i<l;i++ ){var bo=bn[i];if(bq[bo]){bl++ ;}
;if(bl>1){throw new Error(k+name);}
;}
;if(bq.meta){var bm;for(var bo in bq.meta){bm=bq.meta[bo];if(this.__fn[bo]===undefined){throw new Error(C+bo+S);}
;if(typeof bm!==this.__fn[bo]){throw new Error(I+bo+L);}
;if(!(typeof bm===U&&bm!==null&&bm.$$type===Q)){throw new Error(K+bo+M+name+z+bm);}
;}
;}
;if(bq.extend&&bq.extend.$$type!==Q){throw new Error(A+name+x+bq.extend);}
;if(bq.include){for(var i=0,l=bq.include.length;i<l;i++ ){if(typeof (bq.include[i])==H||bq.include[i].$$type!==Q){throw new Error(c+name+x+bq.include[i]);}
;}
;}
;if(bq.patch){for(var i=0,l=bq.patch.length;i<l;i++ ){if(typeof (bq.patch[i])===H||bq.patch[i].$$type!==Q){throw new Error(r+name+x+bq.patch[i]);}
;}
;}
;}
,"default":function(){}
}),patch:function(bu,bs){this.__fo(bs);var bw=this.__fk(bs);if(bw!==this.__fk(bu)){throw new Error(w+bu.name+v+bs.name+b);}
;var bt=bs[bw];var br=bu.$$clazz.prototype;for(var bv in bt){br[bv]=bt[bv];}
;}
,include:function(bA,by){this.__fo(by);var bC=by.type;if(bC!==bA.type){throw new Error(w+bA.name+v+by.name+b);}
;var bz=by[bC];var bx=bA.$$clazz.prototype;for(var bB in bz){if(bx[bB]!==undefined){continue;}
;bx[bB]=bz[bB];}
;}
,__fo:function(bD){if(typeof bD===H||bD==null){var bF=new Error(g);if(qx.core.Environment.get(q)){var bE=qx.dev.StackTrace.getStackTraceFromError(bF);qx.Bootstrap.error(this,bE);}
;throw bF;}
;}
}});}
)();
(function(){var a="qx.ui.tooltip.ToolTip",b="Boolean",c="",d="mouse",f="pointerover",g="interval",h="_applyCurrent",i="widget",j="__fs",k="qx.ui.tooltip.Manager",l="__fp",m="pointermove",n="focusout",o="tooltip-error",p="__fq",q="singleton",r="pointerout";qx.Class.define(k,{type:q,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);qx.event.Registration.addListener(document.body,f,this.__fx,this,true);this.__fp=new qx.event.Timer();this.__fp.addListener(g,this.__fu,this);this.__fq=new qx.event.Timer();this.__fq.addListener(g,this.__fv,this);this.__fr={left:0,top:0};}
,properties:{current:{check:a,nullable:true,apply:h},showInvalidToolTips:{check:b,init:true},showToolTips:{check:b,init:true}},members:{__fr:null,__fq:null,__fp:null,__fs:null,__ft:null,getSharedTooltip:function(){if(!this.__fs){this.__fs=new qx.ui.tooltip.ToolTip().set({rich:true});}
;return this.__fs;}
,getSharedErrorTooltip:function(){if(!this.__ft){this.__ft=new qx.ui.tooltip.ToolTip().set({appearance:o,rich:true});this.__ft.setLabel(c);this.__ft.syncAppearance();}
;return this.__ft;}
,_applyCurrent:function(u,t){if(t&&qx.ui.core.Widget.contains(t,u)){return;}
;if(t){if(!t.isDisposed()){t.exclude();}
;this.__fp.stop();this.__fq.stop();}
;var v=qx.event.Registration;var s=document.body;if(u){this.__fp.startWith(u.getShowTimeout());v.addListener(s,r,this.__fy,this,true);v.addListener(s,n,this.__fz,this,true);v.addListener(s,m,this.__fw,this,true);}
else {v.removeListener(s,r,this.__fy,this,true);v.removeListener(s,n,this.__fz,this,true);v.removeListener(s,m,this.__fw,this,true);}
;}
,__fu:function(e){var w=this.getCurrent();if(w&&!w.isDisposed()){this.__fq.startWith(w.getHideTimeout());if(w.getPlaceMethod()==i){w.placeToWidget(w.getOpener());}
else {w.placeToPoint(this.__fr);}
;w.show();}
;this.__fp.stop();}
,__fv:function(e){var x=this.getCurrent();if(x&&!x.isDisposed()){x.exclude();}
;this.__fq.stop();this.resetCurrent();}
,__fw:function(e){var y=this.__fr;y.left=Math.round(e.getDocumentLeft());y.top=Math.round(e.getDocumentTop());}
,__fx:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());this.__fw(e);this.showToolTip(z);}
,showToolTip:function(C){if(!C){return;}
;var D,B,E,A;while(C!=null){D=C.getToolTip();B=C.getToolTipText()||null;E=C.getToolTipIcon()||null;if(qx.Class.hasInterface(C.constructor,qx.ui.form.IForm)&&!C.isValid()){A=C.getInvalidMessage();}
;if(D||B||E||A){break;}
;C=C.getLayoutParent();}
;if(!C||(!C.getEnabled()&&!C.isShowToolTipWhenDisabled())||C.isBlockToolTip()||(!A&&!this.getShowToolTips())||(A&&!this.getShowInvalidToolTips())){return;}
;if(A){D=this.getSharedErrorTooltip().set({label:A});}
;if(!D){D=this.getSharedTooltip().set({label:B,icon:E});}
;this.setCurrent(D);D.setOpener(C);}
,__fy:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());if(!F){return;}
;var G=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());if(!G&&e.getPointerType()==d){return;}
;var H=this.getCurrent();if(H&&(G==H||qx.ui.core.Widget.contains(H,G))){return;}
;if(G&&F&&qx.ui.core.Widget.contains(F,G)){return;}
;if(H&&!G){this.setCurrent(null);}
else {this.resetCurrent();}
;}
,__fz:function(e){var I=qx.ui.core.Widget.getWidgetByElement(e.getTarget());if(!I){return;}
;var J=this.getCurrent();if(J&&J==I.getToolTip()){this.setCurrent(null);}
;}
},destruct:function(){qx.event.Registration.removeListener(document.body,f,this.__fx,this,true);this._disposeObjects(l,p,j);this.__fr=null;}
});}
)();
(function(){var a="qx.ui.core.MLayoutHandling";qx.Mixin.define(a,{members:{setLayout:function(b){this._setLayout(b);}
,getLayout:function(){return this._getLayout();}
},statics:{remap:function(c){c.getLayout=c._getLayout;c.setLayout=c._setLayout;}
}});}
)();
(function(){var a="changeWidth",b="Wrong 'width' argument. ",c="Boolean",d="allowShrinkY",e="_applyAlign",f="_applyStretching",g="Something went wrong with the layout of ",h="bottom",i="Wrong 'left' argument. ",j="Integer",k="changeTheme",l="_applyDimension",m="baseline",n="qx.debug",o="marginBottom",p="qx.ui.core.LayoutItem",q="center",r="marginTop",s="!",t="allowGrowX",u="shorthand",v="middle",w="marginLeft",x="qx.dyntheme",y="allowShrinkX",z="top",A="right",B="marginRight",C="abstract",D="Wrong 'top' argument. ",E="Wrong 'height' argument. ",F="_applyMargin",G="allowGrowY",H="left",I="changeHeight";qx.Class.define(p,{type:C,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);if(qx.core.Environment.get(x)){qx.theme.manager.Meta.getInstance().addListener(k,this._onChangeTheme,this);}
;}
,properties:{minWidth:{check:j,nullable:true,apply:l,init:null,themeable:true},width:{check:j,event:a,nullable:true,apply:l,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:l,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:l,init:null,themeable:true},height:{check:j,event:I,nullable:true,apply:l,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:l,init:null,themeable:true},allowGrowX:{check:c,apply:f,init:true,themeable:true},allowShrinkX:{check:c,apply:f,init:true,themeable:true},allowGrowY:{check:c,apply:f,init:true,themeable:true},allowShrinkY:{check:c,apply:f,init:true,themeable:true},allowStretchX:{group:[t,y],mode:u,themeable:true},allowStretchY:{group:[G,d],mode:u,themeable:true},marginTop:{check:j,init:0,apply:F,themeable:true},marginRight:{check:j,init:0,apply:F,themeable:true},marginBottom:{check:j,init:0,apply:F,themeable:true},marginLeft:{check:j,init:0,apply:F,themeable:true},margin:{group:[r,B,o,w],mode:u,themeable:true},alignX:{check:[H,q,A],nullable:true,apply:e,themeable:true},alignY:{check:[z,v,h,m],nullable:true,apply:e,themeable:true}},members:{_onChangeTheme:qx.core.Environment.select(x,{"true":function(){var L=qx.util.PropertyUtil.getAllProperties(this.constructor);for(var name in L){var K=L[name];if(K.themeable){var J=qx.util.PropertyUtil.getUserValue(this,name);if(J==null){qx.util.PropertyUtil.resetThemed(this,name);}
;}
;}
;}
,"false":null}),__fA:null,__fB:null,__fC:null,__fD:null,__fE:null,__fF:null,__fG:null,getBounds:function(){return this.__fF||this.__fB||null;}
,clearSeparators:function(){}
,renderSeparator:function(M,N){}
,renderLayout:function(U,top,R,Q){if(this.isDisposed()){return null;}
;if(qx.core.Environment.get(n)){var S=g+this.toString()+s;this.assertInteger(U,i+S);this.assertInteger(top,D+S);this.assertInteger(R,b+S);this.assertInteger(Q,E+S);}
;var P=null;if(this.getHeight()==null&&this._hasHeightForWidth()){var P=this._getHeightForWidth(R);}
;if(P!=null&&P!==this.__fA){this.__fA=P;qx.ui.core.queue.Layout.add(this);return null;}
;var O=this.__fB;if(!O){O=this.__fB={};}
;var T={};if(U!==O.left||top!==O.top){T.position=true;O.left=U;O.top=top;}
;if(R!==O.width||Q!==O.height){T.size=true;O.width=R;O.height=Q;}
;if(this.__fC){T.local=true;delete this.__fC;}
;if(this.__fE){T.margin=true;delete this.__fE;}
;return T;}
,isExcluded:function(){return false;}
,hasValidLayout:function(){return !this.__fC;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutCache:function(){this.__fC=true;this.__fD=null;}
,getSizeHint:function(V){var W=this.__fD;if(W){return W;}
;if(V===false){return null;}
;W=this.__fD=this._computeSizeHint();if(this._hasHeightForWidth()&&this.__fA&&this.getHeight()==null){W.height=this.__fA;}
;if(W.minWidth>W.width){W.width=W.minWidth;}
;if(W.maxWidth<W.width){W.width=W.maxWidth;}
;if(!this.getAllowGrowX()){W.maxWidth=W.width;}
;if(!this.getAllowShrinkX()){W.minWidth=W.width;}
;if(W.minHeight>W.height){W.height=W.minHeight;}
;if(W.maxHeight<W.height){W.height=W.maxHeight;}
;if(!this.getAllowGrowY()){W.maxHeight=W.height;}
;if(!this.getAllowShrinkY()){W.minHeight=W.height;}
;return W;}
,_computeSizeHint:function(){var bc=this.getMinWidth()||0;var Y=this.getMinHeight()||0;var bd=this.getWidth()||bc;var bb=this.getHeight()||Y;var X=this.getMaxWidth()||Infinity;var ba=this.getMaxHeight()||Infinity;return {minWidth:bc,width:bd,maxWidth:X,minHeight:Y,height:bb,maxHeight:ba};}
,_hasHeightForWidth:function(){var be=this._getLayout();if(be){return be.hasHeightForWidth();}
;return false;}
,_getHeightForWidth:function(bf){var bg=this._getLayout();if(bg&&bg.hasHeightForWidth()){return bg.getHeightForWidth(bf);}
;return null;}
,_getLayout:function(){return null;}
,_applyMargin:function(){this.__fE=true;var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyAlign:function(){var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}
;}
,_applyDimension:function(){qx.ui.core.queue.Layout.add(this);}
,_applyStretching:function(){qx.ui.core.queue.Layout.add(this);}
,hasUserBounds:function(){return !!this.__fF;}
,setUserBounds:function(bi,top,bh,bj){this.__fF={left:bi,top:top,width:bh,height:bj};qx.ui.core.queue.Layout.add(this);}
,resetUserBounds:function(){delete this.__fF;qx.ui.core.queue.Layout.add(this);}
,__fH:{},setLayoutProperties:function(bm){if(bm==null){return;}
;var bk=this.__fG;if(!bk){bk=this.__fG={};}
;var parent=this.getLayoutParent();if(parent){parent.updateLayoutProperties(bm);}
;for(var bl in bm){if(bm[bl]==null){delete bk[bl];}
else {bk[bl]=bm[bl];}
;}
;}
,getLayoutProperties:function(){return this.__fG||this.__fH;}
,clearLayoutProperties:function(){delete this.__fG;}
,updateLayoutProperties:function(bp){var bn=this._getLayout();if(bn){if(qx.core.Environment.get(n)){if(bp){for(var bo in bp){if(bp[bo]!==null){bn.verifyLayoutProperty(this,bo,bp[bo]);}
;}
;}
;}
;bn.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);}
,getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();}
,getLayoutParent:function(){return this.$$parent||null;}
,setLayoutParent:function(parent){if(this.$$parent===parent){return;}
;this.$$parent=parent||null;qx.ui.core.queue.Visibility.add(this);}
,isRootWidget:function(){return false;}
,_getRoot:function(){var parent=this;while(parent){if(parent.isRootWidget()){return parent;}
;parent=parent.$$parent;}
;return null;}
,clone:function(){var bq=qx.core.Object.prototype.clone.call(this);var br=this.__fG;if(br){bq.__fG=qx.lang.Object.clone(br);}
;return bq;}
},destruct:function(){if(qx.core.Environment.get(x)){qx.theme.manager.Meta.getInstance().removeListener(k,this._onChangeTheme,this);}
;this.$$parent=this.$$subparent=this.__fG=this.__fB=this.__fF=this.__fD=null;}
});}
)();
(function(){var a="$$theme_",b="$$user_",c="qx.util.PropertyUtil",d="$$init_";qx.Class.define(c,{statics:{getProperties:function(e){return e.$$properties;}
,getAllProperties:function(j){var g={};var f=j;while(f!=qx.core.Object){var i=this.getProperties(f);for(var h in i){g[h]=i[h];}
;f=f.superclass;}
;return g;}
,getUserValue:function(l,k){return l[b+k];}
,setUserValue:function(n,m,o){n[b+m]=o;}
,deleteUserValue:function(q,p){delete (q[b+p]);}
,getInitValue:function(s,r){return s[d+r];}
,setInitValue:function(u,t,v){u[d+t]=v;}
,deleteInitValue:function(x,w){delete (x[d+w]);}
,getThemeValue:function(z,y){return z[a+y];}
,setThemeValue:function(B,A,C){B[a+A]=C;}
,deleteThemeValue:function(E,D){delete (E[a+D]);}
,setThemed:function(H,G,I){var F=qx.core.Property.$$method.setThemed;H[F[G]](I);}
,resetThemed:function(K,J){var L=qx.core.Property.$$method.resetThemed;K[L[J]]();}
}});}
)();
(function(){var a="qx.ui.core.queue.Layout",b="layout";qx.Class.define(a,{statics:{__et:{},__fI:{},remove:function(c){delete this.__et[c.$$hash];}
,add:function(d){this.__et[d.$$hash]=d;qx.ui.core.queue.Manager.scheduleFlush(b);}
,isScheduled:function(e){return !!this.__et[e.$$hash];}
,flush:function(){var f=this.__fK();for(var i=f.length-1;i>=0;i-- ){var g=f[i];if(g.hasValidLayout()){continue;}
;if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();g.renderLayout(0,0,j.width,j.height);}
else {var h=g.getBounds();g.renderLayout(h.left,h.top,h.width,h.height);}
;}
;}
,getNestingLevel:function(l){var k=this.__fI;var n=0;var parent=l;while(true){if(k[parent.$$hash]!=null){n+=k[parent.$$hash];break;}
;if(!parent.$$parent){break;}
;parent=parent.$$parent;n+=1;}
;var m=n;while(l&&l!==parent){k[l.$$hash]=m-- ;l=l.$$parent;}
;return n;}
,__fJ:function(){var t=qx.ui.core.queue.Visibility;this.__fI={};var s=[];var r=this.__et;var o,q;for(var p in r){o=r[p];if(t.isVisible(o)){q=this.getNestingLevel(o);if(!s[q]){s[q]={};}
;s[q][p]=o;delete r[p];}
;}
;return s;}
,__fK:function(){var x=[];var z=this.__fJ();for(var w=z.length-1;w>=0;w-- ){if(!z[w]){continue;}
;for(var v in z[w]){var u=z[w][v];if(w==0||u.isRootWidget()||u.hasUserBounds()){x.push(u);u.invalidateLayoutCache();continue;}
;var B=u.getSizeHint(false);if(B){u.invalidateLayoutCache();var y=u.getSizeHint();var A=(!u.getBounds()||B.minWidth!==y.minWidth||B.width!==y.width||B.maxWidth!==y.maxWidth||B.minHeight!==y.minHeight||B.height!==y.height||B.maxHeight!==y.maxHeight);}
else {A=true;}
;if(A){var parent=u.getLayoutParent();if(!z[w-1]){z[w-1]={};}
;z[w-1][parent.$$hash]=parent;}
else {x.push(u);}
;}
;}
;return x;}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="pop.push.reverse.shift.sort.splice.unshift.join.slice",d="number",e="qx.type.BaseArray",f=".";qx.Bootstrap.define(e,{extend:Array,construct:function(g){}
,members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});(function(){function h(p){if((qx.core.Environment.get(b)==a)){j.prototype={length:0,$$isArray:true};var n=c.split(f);for(var length=n.length;length;){j.prototype[n[ --length]]=Array.prototype[n[length]];}
;}
;var m=Array.prototype.slice;j.prototype.concat=function(){var r=this.slice(0);for(var i=0,length=arguments.length;i<length;i++ ){var q;if(arguments[i] instanceof j){q=m.call(arguments[i],0);}
else if(arguments[i] instanceof Array){q=arguments[i];}
else {q=[arguments[i]];}
;r.push.apply(r,q);}
;return r;}
;j.prototype.toString=function(){return m.call(this,0).toString();}
;j.prototype.toLocaleString=function(){return m.call(this,0).toLocaleString();}
;j.prototype.constructor=j;j.prototype.indexOf=Array.prototype.indexOf;j.prototype.lastIndexOf=Array.prototype.lastIndexOf;j.prototype.forEach=Array.prototype.forEach;j.prototype.some=Array.prototype.some;j.prototype.every=Array.prototype.every;var o=Array.prototype.filter;var l=Array.prototype.map;j.prototype.filter=function(){var s=new this.constructor;s.push.apply(s,o.apply(this,arguments));return s;}
;j.prototype.map=function(){var t=new this.constructor;t.push.apply(t,l.apply(this,arguments));return t;}
;j.prototype.slice=function(){var u=new this.constructor;u.push.apply(u,Array.prototype.slice.apply(this,arguments));return u;}
;j.prototype.splice=function(){var v=new this.constructor;v.push.apply(v,Array.prototype.splice.apply(this,arguments));return v;}
;j.prototype.toArray=function(){return Array.prototype.slice.call(this,0);}
;j.prototype.valueOf=function(){return this.length;}
;return j;}
;function j(length){if(arguments.length===1&&typeof length===d){this.length=-1<length&&length===length>>.5?length:this.push(length);}
else if(arguments.length){this.push.apply(this,arguments);}
;}
;function k(){}
;k.prototype=[];j.prototype=new k;j.prototype.length=0;qx.type.BaseArray=h(j);}
)();}
)();
(function(){var a="_",b="qxWeb",c="*** Collection infos ***",d="toString",e="$",f="Instance:",g="classname",h="Method '",j="data-qx-class",k="Elements:",m="' already available.",n="Length:",o="number",p="basename",q="' already available as static method.",r="qx.debug",s="name";qx.Bootstrap.define(b,{extend:qx.type.BaseArray,statics:{__eP:[],$$qx:qx,$init:function(x,v){if(x.length&&x.length==1&&x[0]&&x[0].$widget instanceof qxWeb){return x[0].$widget;}
;var w=[];for(var i=0;i<x.length;i++ ){var u=!!(x[i]&&(x[i].nodeType===1||x[i].nodeType===9||x[i].nodeType===11));if(u){w.push(x[i]);continue;}
;var t=!!(x[i]&&x[i].history&&x[i].location&&x[i].document);if(t){w.push(x[i]);}
;}
;if(x[0]&&x[0].getAttribute&&x[0].getAttribute(j)&&w.length<2){v=qx.Bootstrap.getByName(x[0].getAttribute(j))||v;}
;var y=qx.lang.Array.cast(w,v);for(var i=0;i<qxWeb.__eP.length;i++ ){qxWeb.__eP[i].call(y);}
;return y;}
,$attach:function(A,z){for(var name in A){if(qxWeb.prototype[name]!=undefined&&Array.prototype[name]==undefined&&z!==true){if(qx.core.Environment.get(r)){throw new Error(h+name+m);}
;}
else {qxWeb.prototype[name]=A[name];}
;}
;}
,$attachStatic:function(C,B){for(var name in C){if(qx.core.Environment.get(r)){if(qxWeb[name]!=undefined&&B!==true){throw new Error(h+name+q);}
;}
;qxWeb[name]=C[name];}
;}
,$attachAll:function(F,E){for(var name in F.members){if(name.indexOf(e)!==0&&name.indexOf(a)!==0)qxWeb.prototype[name]=F.members[name];}
;var D;if(E!=null){qxWeb[E]=qxWeb[E]||{};D=qxWeb[E];}
else {D=qxWeb;}
;for(var name in F.statics){if(name.indexOf(e)!==0&&name.indexOf(a)!==0&&name!==s&&name!==p&&name!==g&&name!==d&&name!==name.toUpperCase())D[name]=F.statics[name];}
;}
,$attachInit:function(G){this.__eP.push(G);}
,define:function(name,H){if(H==undefined){H=name;name=null;}
;return qx.Bootstrap.define.call(qx.Bootstrap,name,H);}
},construct:function(J,I){if(!J&&this instanceof qxWeb){return this;}
;if(!J){J=[];}
else if(qx.Bootstrap.isString(J)){if(I instanceof qxWeb&&I.length!=0){I=I[0];}
;if(I instanceof qxWeb){J=[];}
else {J=qx.bom.Selector.query(J,I);}
;}
else if((J.nodeType===1||J.nodeType===9||J.nodeType===11)||(J.history&&J.location&&J.document)){J=[J];}
;return qxWeb.$init(J,qxWeb);}
,members:{filter:function(K){if(qx.lang.Type.isFunction(K)){return qxWeb.$init(Array.prototype.filter.call(this,K),this.constructor);}
;return qxWeb.$init(qx.bom.Selector.matches(K,this),this.constructor);}
,unique:function(){var L=qx.lang.Array.unique(this);return qxWeb.$init(L,this.constructor);}
,slice:function(M,N){if(N!==undefined){return qxWeb.$init(Array.prototype.slice.call(this,M,N),this.constructor);}
;return qxWeb.$init(Array.prototype.slice.call(this,M),this.constructor);}
,splice:function(O,P,Q){return qxWeb.$init(Array.prototype.splice.apply(this,arguments),this.constructor);}
,map:function(R,S){return qxWeb.$init(Array.prototype.map.apply(this,arguments),qxWeb);}
,concat:function(U){var T=Array.prototype.slice.call(this,0);for(var i=0;i<arguments.length;i++ ){if(arguments[i] instanceof qxWeb){T=T.concat(Array.prototype.slice.call(arguments[i],0));}
else {T.push(arguments[i]);}
;}
;return qxWeb.$init(T,this.constructor);}
,indexOf:function(V,W){if(!V){return -1;}
;if(!W){W=0;}
;if(typeof W!==o){return -1;}
;if(W<0){W=this.length+W;if(W<0){W=0;}
;}
;if(qx.lang.Type.isArray(V)){V=V[0];}
;for(var i=W,l=this.length;i<l;i++ ){if(this[i]===V){return i;}
;}
;return -1;}
,debug:function(){if(qx.core.Environment.get(r)){debugger;}
;return this;}
,logThis:function(){if(qx.core.Environment.get(r)){var X=[];this.forEach(function(Y){X.push(Y);}
);var length=this.length;console.group(c);console.info(n,length);console.info(k,X);console.info(f,this);console.groupEnd();}
;return this;}
,_forEachElement:function(bb,ba){for(var i=0,l=this.length;i<l;i++ ){if(this[i]&&(this[i].nodeType===1||this[i].nodeType===11)){bb.apply(ba||this,[this[i],i,this]);}
;}
;return this;}
,_forEachElementWrapped:function(bd,bc){this._forEachElement(function(be,bg,bf){bd.apply(this,[qxWeb(be),bg,bf]);}
,bc);return this;}
},defer:function(bh){if(window.q==undefined){window.q=bh;}
;}
});}
)();
(function(){var c="-",d="(^|",f="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",g="<a id='",h="CLASS",k=":disabled",l="[selected]",n="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",o="nth",p="type|href|height|width",q="option",r="disabled",s="*(?:value|",t="~=",u="previousSibling",v="*(even|odd|(([+-]|)(\\d*)n|)",w="xml:lang",x="only",y="*",z=")(?:\\((",A="unsupported lang: ",B="|[*])",C="+|((?:^|[^\\\\])(?:\\\\.)*)",D="i",E="\\\\([\\da-f]{1,6}",F="='$1']",G="\uFFFD",H="-]",I="form",J="<select disabled='disabled'><option/></select>",K="^=",L="*([>+~]|",M=")*)|",N="*\\)|)",O="((?:\\\\.|[^\\\\()[\\]]|",P="+$",Q="=",R="<a href='' disabled='disabled'></a>",S="unload",T="\0",U="id",V="('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|",W="+",X="needsContext",Y="nextSibling",dg="))|)",dh="*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(",di="$=",dc="[s!='']:x",dd=")(?:",de="string",df=")|.)",dn="\\",dp="[\\x20\\t\\r\\n\\f]",du="[name=d]",dq="*(?:([+-]|)",dj="*((?:-\\d)?\\d*)",dk="#",dl="input",dm="type",dW="legend",fb="[id~=",dv="'></a>",dr="ig",ds="parentNode",eX="+*",dt="a#",dw="href",dx="0x",dy="(",dD="even",dE="<select id='",dF="g",dz="*\\]",dA="*\\)|)(?=[^-]|$)",dB="unsupported pseudo: ",dC="*[*^$|!~]?=",dK=".*",dL=" ",dM="hidden",dN="*,",dG="function",dH="text",dI="^",dJ=")",dR=":(",dS="onunload",fa="*([*^$|!~]?=)",dT="button",dO=".#.+[+~]",dP="0",eY="^(",dQ="odd",dU="class",dV="*(\\d+)|))",eh="lang",eg="|=",ef="\\[",em="name",ek="D",ej="<option selected=''></option></select>",ei="fieldset",ea="!=",dY="<input/>",dX="*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(",ee="sizzle",ed="*=",ec="|",eb="Syntax error, unrecognized expression: ",et=")$",es="object",er="?|(",eq=")\\)|)",ex="$1",ew="*([^\\]'\"]*?)",ev="*(?:''|\"\")",eu="eq",ep="className",eo="qx.bom.Selector",en="of-type",eI="TAG",eH="|$)",eG=",",eM="<a href='#'></a>",eL="empty",eK=":enabled",eJ="^(?:",eB="value",eA="^#(",ez="[*^$]=",ey="*,:x",eF="*(",eE="^\\.(",eD="",eC="CHILD",eS=",.*:",eR="^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(",eQ="-\r\\' msallowcapture=''>",eP="$",eW="[msallowcapture^='']",eV="label",eU=":checked",eT="undefined",eO="ID",eN="last",db="HTML";qx.Bootstrap.define(eo,{statics:{query:null,matches:null}});(function(window){var i,fD,gB,fk,fq,fL,gr,fx,fc,ft,fv,fs,document,gz,fw,fT,fd,fU,fE,gi=ee+1*new Date(),fy=window.document,fN=0,fp=0,fg=fm(),gg=fm(),gx=fm(),fJ=function(a,b){if(a===b){fv=true;}
;return 0;}
,gp=({}).hasOwnProperty,fj=[],fo=fj.pop,gs=fj.push,gb=fj.push,fz=fj.slice,fI=function(gC,gD){var i=0,gE=gC.length;for(;i<gE;i++ ){if(gC[i]===gD){return i;}
;}
;return -1;}
,fS=n,fB=dp,fQ=f,gw=ef+fB+eF+fQ+dd+fB+fa+fB+dh+fQ+dg+fB+dz,fV=dR+fQ+z+V+O+gw+M+dK+eq,fF=new RegExp(fB+W,dF),ge=new RegExp(dI+fB+C+fB+P,dF),gm=new RegExp(dI+fB+dN+fB+y),fC=new RegExp(dI+fB+L+fB+dJ+fB+y),fY=new RegExp(Q+fB+ew+fB+dz,dF),gA=new RegExp(fV),fO=new RegExp(dI+fQ+eP),gq={"ID":new RegExp(eA+fQ+dJ),"CLASS":new RegExp(eE+fQ+dJ),"TAG":new RegExp(eY+fQ+B),"ATTR":new RegExp(dI+gw),"PSEUDO":new RegExp(dI+fV),"CHILD":new RegExp(eR+fB+v+fB+dq+fB+dV+fB+N,D),"bool":new RegExp(eJ+fS+et,D),"needsContext":new RegExp(dI+fB+dX+fB+dj+fB+dA,D)},gl=/^(?:input|select|textarea|button)$/i,fh=/^h\d$/i,go=/^[^{]+\{\s*\[native \w/,gu=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,fR=/[+~]/,fi=new RegExp(E+fB+er+fB+df,dr),gh=function(_,gF,gG){var gH=dx+gF-0x10000;return gH!==gH||gG?gF:gH<0?String.fromCharCode(gH+0x10000):String.fromCharCode(gH>>10|0xD800,gH&0x3FF|0xDC00);}
,fM=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,fe=function(gJ,gI){if(gI){if(gJ===T){return G;}
;return gJ.slice(0,-1)+dn+gJ.charCodeAt(gJ.length-1).toString(16)+dL;}
;return dn+gJ;}
,gf=function(){fs();}
,gj=fW(function(gK){return gK.disabled===true;}
,{dir:ds,next:dW});try{gb.apply((fj=fz.call(fy.childNodes)),fy.childNodes);fj[fy.childNodes.length].nodeType;}
catch(e){gb={apply:fj.length?function(gM,gL){gs.apply(gM,fz.call(gL));}
:function(gO,gN){var j=gO.length,i=0;while((gO[j++ ]=gN[i++ ])){}
;gO.length=j-1;}
};}
;function gc(gT,gQ,gR,gV){var m,i,gY,gS,ha,gW,gU,gX=gQ&&gQ.ownerDocument,gP=gQ?gQ.nodeType:9;gR=gR||[];if(typeof gT!==de||!gT||gP!==1&&gP!==9&&gP!==11){return gR;}
;if(!gV){if((gQ?gQ.ownerDocument||gQ:fy)!==document){fs(gQ);}
;gQ=gQ||document;if(fw){if(gP!==11&&(ha=gu.exec(gT))){if((m=ha[1])){if(gP===9){if((gY=gQ.getElementById(m))){if(gY.id===m){gR.push(gY);return gR;}
;}
else {return gR;}
;}
else {if(gX&&(gY=gX.getElementById(m))&&fE(gQ,gY)&&gY.id===m){gR.push(gY);return gR;}
;}
;}
else if(ha[2]){gb.apply(gR,gQ.getElementsByTagName(gT));return gR;}
else if((m=ha[3])&&fD.getElementsByClassName&&gQ.getElementsByClassName){gb.apply(gR,gQ.getElementsByClassName(m));return gR;}
;}
;if(fD.qsa&&!gx[gT+dL]&&(!fT||!fT.test(gT))){if(gP!==1){gX=gQ;gU=gT;}
else if(gQ.nodeName.toLowerCase()!==es){if((gS=gQ.getAttribute(U))){gS=gS.replace(fM,fe);}
else {gQ.setAttribute(U,(gS=gi));}
;gW=fL(gT);i=gW.length;while(i-- ){gW[i]=dk+gS+dL+fH(gW[i]);}
;gU=gW.join(eG);gX=fR.test(gT)&&fr(gQ.parentNode)||gQ;}
;if(gU){try{gb.apply(gR,gX.querySelectorAll(gU));return gR;}
catch(hb){}
finally{if(gS===gi){gQ.removeAttribute(U);}
;}
;}
;}
;}
;}
;return fx(gT.replace(ge,ex),gQ,gR,gV);}
;function fm(){var hc=[];function hd(he,hf){if(hc.push(he+dL)>gB.cacheLength){delete hd[hc.shift()];}
;return (hd[he+dL]=hf);}
;return hd;}
;function gn(hg){hg[gi]=true;return hg;}
;function ga(hi){var hh=document.createElement(ei);try{return !!hi(hh);}
catch(e){return false;}
finally{if(hh.parentNode){hh.parentNode.removeChild(hh);}
;hh=null;}
;}
;function gd(hl,hk){var hj=hl.split(ec),i=hj.length;while(i-- ){gB.attrHandle[hj[i]]=hk;}
;}
;function fP(a,b){var hn=b&&a,hm=hn&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;if(hm){return hm;}
;if(hn){while((hn=hn.nextSibling)){if(hn===b){return -1;}
;}
;}
;return a?1:-1;}
;function gt(ho){return function(hp){var name=hp.nodeName.toLowerCase();return name===dl&&hp.type===ho;}
;}
;function ff(hq){return function(hr){var name=hr.nodeName.toLowerCase();return (name===dl||name===dT)&&hr.type===hq;}
;}
;function fu(hs){return function(ht){return eV in ht&&ht.disabled===hs||I in ht&&ht.disabled===hs||I in ht&&ht.disabled===false&&(ht.isDisabled===hs||ht.isDisabled!==!hs&&(eV in ht||!gj(ht))!==hs);}
;}
;function fX(hu){return gn(function(hv){hv=+hv;return gn(function(hy,hw){var j,hx=hu([],hy.length,hv),i=hx.length;while(i-- ){if(hy[(j=hx[i])]){hy[j]=!(hw[j]=hy[j]);}
;}
;}
);}
);}
;function fr(hz){return hz&&typeof hz.getElementsByTagName!==eT&&hz;}
;fD=gc.support={};fq=gc.isXML=function(hA){var hB=hA&&(hA.ownerDocument||hA).documentElement;return hB?hB.nodeName!==db:false;}
;fs=gc.setDocument=function(hC){var hF,hE,hD=hC?hC.ownerDocument||hC:fy;if(hD===document||hD.nodeType!==9||!hD.documentElement){return document;}
;document=hD;gz=document.documentElement;fw=!fq(document);if(fy!==document&&(hE=document.defaultView)&&hE.top!==hE){if(hE.addEventListener){hE.addEventListener(S,gf,false);}
else if(hE.attachEvent){hE.attachEvent(dS,gf);}
;}
;fD.attributes=ga(function(hG){hG.className=D;return !hG.getAttribute(ep);}
);fD.getElementsByTagName=ga(function(hH){hH.appendChild(document.createComment(eD));return !hH.getElementsByTagName(y).length;}
);fD.getElementsByClassName=go.test(document.getElementsByClassName);fD.getById=ga(function(hI){gz.appendChild(hI).id=gi;return !document.getElementsByName||!document.getElementsByName(gi).length;}
);if(fD.getById){gB.find[eO]=function(hJ,hK){if(typeof hK.getElementById!==eT&&fw){var m=hK.getElementById(hJ);return m?[m]:[];}
;}
;gB.filter[eO]=function(hM){var hL=hM.replace(fi,gh);return function(hN){return hN.getAttribute(U)===hL;}
;}
;}
else {delete gB.find[eO];gB.filter[eO]=function(hP){var hO=hP.replace(fi,gh);return function(hR){var hQ=typeof hR.getAttributeNode!==eT&&hR.getAttributeNode(U);return hQ&&hQ.value===hO;}
;}
;}
;gB.find[eI]=fD.getElementsByTagName?function(hS,hT){if(typeof hT.getElementsByTagName!==eT){return hT.getElementsByTagName(hS);}
else if(fD.qsa){return hT.querySelectorAll(hS);}
;}
:function(hX,hY){var hV,hU=[],i=0,hW=hY.getElementsByTagName(hX);if(hX===y){while((hV=hW[i++ ])){if(hV.nodeType===1){hU.push(hV);}
;}
;return hU;}
;return hW;}
;gB.find[h]=fD.getElementsByClassName&&function(ia,ib){if(typeof ib.getElementsByClassName!==eT&&fw){return ib.getElementsByClassName(ia);}
;}
;fd=[];fT=[];if((fD.qsa=go.test(document.querySelectorAll))){ga(function(ic){gz.appendChild(ic).innerHTML=g+gi+dv+dE+gi+eQ+ej;if(ic.querySelectorAll(eW).length){fT.push(ez+fB+ev);}
;if(!ic.querySelectorAll(l).length){fT.push(ef+fB+s+fS+dJ);}
;if(!ic.querySelectorAll(fb+gi+H).length){fT.push(t);}
;if(!ic.querySelectorAll(eU).length){fT.push(eU);}
;if(!ic.querySelectorAll(dt+gi+eX).length){fT.push(dO);}
;}
);ga(function(ie){ie.innerHTML=R+J;var ig=document.createElement(dl);ig.setAttribute(dm,dM);ie.appendChild(ig).setAttribute(em,ek);if(ie.querySelectorAll(du).length){fT.push(em+fB+dC);}
;if(ie.querySelectorAll(eK).length!==2){fT.push(eK,k);}
;gz.appendChild(ie).disabled=true;if(ie.querySelectorAll(k).length!==2){fT.push(eK,k);}
;ie.querySelectorAll(ey);fT.push(eS);}
);}
;if((fD.matchesSelector=go.test((fU=gz.matches||gz.webkitMatchesSelector||gz.mozMatchesSelector||gz.oMatchesSelector||gz.msMatchesSelector)))){ga(function(ih){fD.disconnectedMatch=fU.call(ih,y);fU.call(ih,dc);fd.push(ea,fV);}
);}
;fT=fT.length&&new RegExp(fT.join(ec));fd=fd.length&&new RegExp(fd.join(ec));hF=go.test(gz.compareDocumentPosition);fE=hF||go.test(gz.contains)?function(a,b){var ii=a.nodeType===9?a.documentElement:a,ij=b&&b.parentNode;return a===ij||!!(ij&&ij.nodeType===1&&(ii.contains?ii.contains(ij):a.compareDocumentPosition&&a.compareDocumentPosition(ij)&16));}
:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}
;}
;}
;return false;}
;fJ=hF?function(a,b){if(a===b){fv=true;return 0;}
;var ik=!a.compareDocumentPosition-!b.compareDocumentPosition;if(ik){return ik;}
;ik=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(ik&1||(!fD.sortDetached&&b.compareDocumentPosition(a)===ik)){if(a===document||a.ownerDocument===fy&&fE(fy,a)){return -1;}
;if(b===document||b.ownerDocument===fy&&fE(fy,b)){return 1;}
;return ft?(fI(ft,a)-fI(ft,b)):0;}
;return ik&4?-1:1;}
:function(a,b){if(a===b){fv=true;return 0;}
;var il,i=0,im=a.parentNode,io=b.parentNode,ip=[a],iq=[b];if(!im||!io){return a===document?-1:b===document?1:im?-1:io?1:ft?(fI(ft,a)-fI(ft,b)):0;}
else if(im===io){return fP(a,b);}
;il=a;while((il=il.parentNode)){ip.unshift(il);}
;il=b;while((il=il.parentNode)){iq.unshift(il);}
;while(ip[i]===iq[i]){i++ ;}
;return i?fP(ip[i],iq[i]):ip[i]===fy?-1:iq[i]===fy?1:0;}
;return document;}
;gc.matches=function(ir,is){return gc(ir,null,null,is);}
;gc.matchesSelector=function(iu,it){if((iu.ownerDocument||iu)!==document){fs(iu);}
;it=it.replace(fY,F);if(fD.matchesSelector&&fw&&!gx[it+dL]&&(!fd||!fd.test(it))&&(!fT||!fT.test(it))){try{var iv=fU.call(iu,it);if(iv||fD.disconnectedMatch||iu.document&&iu.document.nodeType!==11){return iv;}
;}
catch(e){}
;}
;return gc(it,document,null,[iu]).length>0;}
;gc.contains=function(ix,iw){if((ix.ownerDocument||ix)!==document){fs(ix);}
;return fE(ix,iw);}
;gc.attr=function(iz,name){if((iz.ownerDocument||iz)!==document){fs(iz);}
;var iy=gB.attrHandle[name.toLowerCase()],iA=iy&&gp.call(gB.attrHandle,name.toLowerCase())?iy(iz,name,!fw):undefined;return iA!==undefined?iA:fD.attributes||!fw?iz.getAttribute(name):(iA=iz.getAttributeNode(name))&&iA.specified?iA.value:null;}
;gc.escape=function(iB){return (iB+eD).replace(fM,fe);}
;gc.error=function(iC){throw new Error(eb+iC);}
;gc.uniqueSort=function(iE){var iF,iD=[],j=0,i=0;fv=!fD.detectDuplicates;ft=!fD.sortStable&&iE.slice(0);iE.sort(fJ);if(fv){while((iF=iE[i++ ])){if(iF===iE[i]){j=iD.push(i);}
;}
;while(j-- ){iE.splice(iD[j],1);}
;}
;ft=null;return iE;}
;fk=gc.getText=function(iI){var iG,iJ=eD,i=0,iH=iI.nodeType;if(!iH){while((iG=iI[i++ ])){iJ+=fk(iG);}
;}
else if(iH===1||iH===9||iH===11){if(typeof iI.textContent===de){return iI.textContent;}
else {for(iI=iI.firstChild;iI;iI=iI.nextSibling){iJ+=fk(iI);}
;}
;}
else if(iH===3||iH===4){return iI.nodeValue;}
;return iJ;}
;gB=gc.selectors={cacheLength:50,createPseudo:gn,match:gq,attrHandle:{},find:{},relative:{">":{dir:ds,first:true}," ":{dir:ds},"+":{dir:u,first:true},"~":{dir:u}},preFilter:{"ATTR":function(iK){iK[1]=iK[1].replace(fi,gh);iK[3]=(iK[3]||iK[4]||iK[5]||eD).replace(fi,gh);if(iK[2]===t){iK[3]=dL+iK[3]+dL;}
;return iK.slice(0,4);}
,"CHILD":function(iL){iL[1]=iL[1].toLowerCase();if(iL[1].slice(0,3)===o){if(!iL[3]){gc.error(iL[0]);}
;iL[4]=+(iL[4]?iL[5]+(iL[6]||1):2*(iL[3]===dD||iL[3]===dQ));iL[5]=+((iL[7]+iL[8])||iL[3]===dQ);}
else if(iL[3]){gc.error(iL[0]);}
;return iL;}
,"PSEUDO":function(iN){var iO,iM=!iN[6]&&iN[2];if(gq[eC].test(iN[0])){return null;}
;if(iN[3]){iN[2]=iN[4]||iN[5]||eD;}
else if(iM&&gA.test(iM)&&(iO=fL(iM,true))&&(iO=iM.indexOf(dJ,iM.length-iO)-iM.length)){iN[0]=iN[0].slice(0,iO);iN[2]=iM.slice(0,iO);}
;return iN.slice(0,3);}
},filter:{"TAG":function(iP){var iQ=iP.replace(fi,gh).toLowerCase();return iP===y?function(){return true;}
:function(iR){return iR.nodeName&&iR.nodeName.toLowerCase()===iQ;}
;}
,"CLASS":function(iS){var iT=fg[iS+dL];return iT||(iT=new RegExp(d+fB+dJ+iS+dy+fB+eH))&&fg(iS,function(iU){return iT.test(typeof iU.className===de&&iU.className||typeof iU.getAttribute!==eT&&iU.getAttribute(dU)||eD);}
);}
,"ATTR":function(name,iV,iW){return function(iX){var iY=gc.attr(iX,name);if(iY==null){return iV===ea;}
;if(!iV){return true;}
;iY+=eD;return iV===Q?iY===iW:iV===ea?iY!==iW:iV===K?iW&&iY.indexOf(iW)===0:iV===ed?iW&&iY.indexOf(iW)>-1:iV===di?iW&&iY.slice(-iW.length)===iW:iV===t?(dL+iY.replace(fF,dL)+dL).indexOf(iW)>-1:iV===eg?iY===iW||iY.slice(0,iW.length+1)===iW+c:false;}
;}
,"CHILD":function(jf,ja,je,jg,jb){var jd=jf.slice(0,3)!==o,forward=jf.slice(-4)!==eN,jc=ja===en;return jg===1&&jb===0?function(jh){return !!jh.parentNode;}
:function(jm,jq,ji){var jl,jo,jr,jj,jk,jn,jt=jd!==forward?Y:u,parent=jm.parentNode,name=jc&&jm.nodeName.toLowerCase(),jp=!ji&&!jc,js=false;if(parent){if(jd){while(jt){jj=jm;while((jj=jj[jt])){if(jc?jj.nodeName.toLowerCase()===name:jj.nodeType===1){return false;}
;}
;jn=jt=jf===x&&!jn&&Y;}
;return true;}
;jn=[forward?parent.firstChild:parent.lastChild];if(forward&&jp){jj=parent;jr=jj[gi]||(jj[gi]={});jo=jr[jj.uniqueID]||(jr[jj.uniqueID]={});jl=jo[jf]||[];jk=jl[0]===fN&&jl[1];js=jk&&jl[2];jj=jk&&parent.childNodes[jk];while((jj= ++jk&&jj&&jj[jt]||(js=jk=0)||jn.pop())){if(jj.nodeType===1&& ++js&&jj===jm){jo[jf]=[fN,jk,js];break;}
;}
;}
else {if(jp){jj=jm;jr=jj[gi]||(jj[gi]={});jo=jr[jj.uniqueID]||(jr[jj.uniqueID]={});jl=jo[jf]||[];jk=jl[0]===fN&&jl[1];js=jk;}
;if(js===false){while((jj= ++jk&&jj&&jj[jt]||(js=jk=0)||jn.pop())){if((jc?jj.nodeName.toLowerCase()===name:jj.nodeType===1)&& ++js){if(jp){jr=jj[gi]||(jj[gi]={});jo=jr[jj.uniqueID]||(jr[jj.uniqueID]={});jo[jf]=[fN,js];}
;if(jj===jm){break;}
;}
;}
;}
;}
;js-=jb;return js===jg||(js%jg===0&&js/jg>=0);}
;}
;}
,"PSEUDO":function(jv,jw){var ju,jx=gB.pseudos[jv]||gB.setFilters[jv.toLowerCase()]||gc.error(dB+jv);if(jx[gi]){return jx(jw);}
;if(jx.length>1){ju=[jv,jv,eD,jw];return gB.setFilters.hasOwnProperty(jv.toLowerCase())?gn(function(jz,jy){var jA,jB=jx(jz,jw),i=jB.length;while(i-- ){jA=fI(jz,jB[i]);jz[jA]=!(jy[jA]=jB[i]);}
;}
):function(jC){return jx(jC,0,ju);}
;}
;return jx;}
},pseudos:{"not":gn(function(jE){var jD=[],jF=[],jG=gr(jE.replace(ge,ex));return jG[gi]?gn(function(jL,jI,jM,jH){var jJ,jK=jG(jL,null,jH,[]),i=jL.length;while(i-- ){if((jJ=jK[i])){jL[i]=!(jI[i]=jJ);}
;}
;}
):function(jO,jP,jN){jD[0]=jO;jG(jD,null,jN,jF);jD[0]=null;return !jF.pop();}
;}
),"has":gn(function(jQ){return function(jR){return gc(jQ,jR).length>0;}
;}
),"contains":gn(function(jS){jS=jS.replace(fi,gh);return function(jT){return (jT.textContent||jT.innerText||fk(jT)).indexOf(jS)>-1;}
;}
),"lang":gn(function(jU){if(!fO.test(jU||eD)){gc.error(A+jU);}
;jU=jU.replace(fi,gh).toLowerCase();return function(jW){var jV;do {if((jV=fw?jW.lang:jW.getAttribute(w)||jW.getAttribute(eh))){jV=jV.toLowerCase();return jV===jU||jV.indexOf(jU+c)===0;}
;}
while((jW=jW.parentNode)&&jW.nodeType===1);return false;}
;}
),"target":function(jY){var jX=window.location&&window.location.hash;return jX&&jX.slice(1)===jY.id;}
,"root":function(ka){return ka===gz;}
,"focus":function(kb){return kb===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(kb.type||kb.href||~kb.tabIndex);}
,"enabled":fu(false),"disabled":fu(true),"checked":function(kc){var kd=kc.nodeName.toLowerCase();return (kd===dl&&!!kc.checked)||(kd===q&&!!kc.selected);}
,"selected":function(ke){if(ke.parentNode){ke.parentNode.selectedIndex;}
;return ke.selected===true;}
,"empty":function(kf){for(kf=kf.firstChild;kf;kf=kf.nextSibling){if(kf.nodeType<6){return false;}
;}
;return true;}
,"parent":function(kg){return !gB.pseudos[eL](kg);}
,"header":function(kh){return fh.test(kh.nodeName);}
,"input":function(ki){return gl.test(ki.nodeName);}
,"button":function(kj){var name=kj.nodeName.toLowerCase();return name===dl&&kj.type===dT||name===dT;}
,"text":function(kk){var kl;return kk.nodeName.toLowerCase()===dl&&kk.type===dH&&((kl=kk.getAttribute(dm))==null||kl.toLowerCase()===dH);}
,"first":fX(function(){return [0];}
),"last":fX(function(km,length){return [length-1];}
),"eq":fX(function(kn,length,ko){return [ko<0?ko+length:ko];}
),"even":fX(function(kp,length){var i=0;for(;i<length;i+=2){kp.push(i);}
;return kp;}
),"odd":fX(function(kq,length){var i=1;for(;i<length;i+=2){kq.push(i);}
;return kq;}
),"lt":fX(function(kr,length,ks){var i=ks<0?ks+length:ks;for(; --i>=0;){kr.push(i);}
;return kr;}
),"gt":fX(function(kt,length,ku){var i=ku<0?ku+length:ku;for(; ++i<length;){kt.push(i);}
;return kt;}
)}};gB.pseudos[o]=gB.pseudos[eu];for(i in {radio:true,checkbox:true,file:true,password:true,image:true}){gB.pseudos[i]=gt(i);}
;for(i in {submit:true,reset:true}){gB.pseudos[i]=ff(i);}
;function gy(){}
;gy.prototype=gB.filters=gB.pseudos;gB.setFilters=new gy();fL=gc.tokenize=function(ky,kx){var kE,kD,kv,kC,kz,kB,kA,kw=gg[ky+dL];if(kw){return kx?0:kw.slice(0);}
;kz=ky;kB=[];kA=gB.preFilter;while(kz){if(!kE||(kD=gm.exec(kz))){if(kD){kz=kz.slice(kD[0].length)||kz;}
;kB.push((kv=[]));}
;kE=false;if((kD=fC.exec(kz))){kE=kD.shift();kv.push({value:kE,type:kD[0].replace(ge,dL)});kz=kz.slice(kE.length);}
;for(kC in gB.filter){if((kD=gq[kC].exec(kz))&&(!kA[kC]||(kD=kA[kC](kD)))){kE=kD.shift();kv.push({value:kE,type:kC,matches:kD});kz=kz.slice(kE.length);}
;}
;if(!kE){break;}
;}
;return kx?kz.length:kz?gc.error(ky):gg(ky,kB).slice(0);}
;function fH(kF){var i=0,kG=kF.length,kH=eD;for(;i<kG;i++ ){kH+=kF[i].value;}
;return kH;}
;function fW(kI,kJ,kK){var kL=kJ.dir,kN=kJ.next,kM=kN||kL,kP=kK&&kM===ds,kO=fp++ ;return kJ.first?function(kR,kS,kQ){while((kR=kR[kL])){if(kR.nodeType===1||kP){return kI(kR,kS,kQ);}
;}
;}
:function(kU,kX,kT){var kV,kW,kY,la=[fN,kO];if(kT){while((kU=kU[kL])){if(kU.nodeType===1||kP){if(kI(kU,kX,kT)){return true;}
;}
;}
;}
else {while((kU=kU[kL])){if(kU.nodeType===1||kP){kY=kU[gi]||(kU[gi]={});kW=kY[kU.uniqueID]||(kY[kU.uniqueID]={});if(kN&&kN===kU.nodeName.toLowerCase()){kU=kU[kL]||kU;}
else if((kV=kW[kM])&&kV[0]===fN&&kV[1]===kO){return (la[2]=kV[2]);}
else {kW[kM]=la;if((la[2]=kI(kU,kX,kT))){return true;}
;}
;}
;}
;}
;}
;}
;function fG(lb){return lb.length>1?function(ld,le,lc){var i=lb.length;while(i-- ){if(!lb[i](ld,le,lc)){return false;}
;}
;return true;}
:lb[0];}
;function gk(li,lf,lg){var i=0,lh=lf.length;for(;i<lh;i++ ){gc(li,lf[i],lg);}
;return lg;}
;function fl(lm,lk,ln,lp,lj){var ll,lr=[],i=0,lo=lm.length,lq=lk!=null;for(;i<lo;i++ ){if((ll=lm[i])){if(!ln||ln(ll,lp,lj)){lr.push(ll);if(lq){lk.push(i);}
;}
;}
;}
;return lr;}
;function fA(lw,lv,lu,lt,ls,lx){if(lt&&!lt[gi]){lt=fA(lt);}
;if(ls&&!ls[gi]){ls=fA(ls,lx);}
;return gn(function(lG,lB,lH,ly){var lz,i,lD,lF=[],lJ=[],lA=lB.length,lI=lG||gk(lv||y,lH.nodeType?[lH]:lH,[]),lC=lw&&(lG||!lv)?fl(lI,lF,lw,lH,ly):lI,lE=lu?ls||(lG?lw:lA||lt)?[]:lB:lC;if(lu){lu(lC,lE,lH,ly);}
;if(lt){lz=fl(lE,lJ);lt(lz,[],lH,ly);i=lz.length;while(i-- ){if((lD=lz[i])){lE[lJ[i]]=!(lC[lJ[i]]=lD);}
;}
;}
;if(lG){if(ls||lw){if(ls){lz=[];i=lE.length;while(i-- ){if((lD=lE[i])){lz.push((lC[i]=lD));}
;}
;ls(null,(lE=[]),lz,ly);}
;i=lE.length;while(i-- ){if((lD=lE[i])&&(lz=ls?fI(lG,lD):lF[i])>-1){lG[lz]=!(lB[lz]=lD);}
;}
;}
;}
else {lE=fl(lE===lB?lE.splice(lA,lE.length):lE);if(ls){ls(null,lB,lE,ly);}
else {gb.apply(lB,lE);}
;}
;}
);}
;function gv(lP){var lK,lM,j,lN=lP.length,lL=gB.relative[lP[0].type],lS=lL||gB.relative[dL],i=lL?1:0,lR=fW(function(lT){return lT===lK;}
,lS,true),lO=fW(function(lU){return fI(lK,lU)>-1;}
,lS,true),lQ=[function(lW,lX,lV){var lY=(!lL&&(lV||lX!==fc))||((lK=lX).nodeType?lR(lW,lX,lV):lO(lW,lX,lV));lK=null;return lY;}
];for(;i<lN;i++ ){if((lM=gB.relative[lP[i].type])){lQ=[fW(fG(lQ),lM)];}
else {lM=gB.filter[lP[i].type].apply(null,lP[i].matches);if(lM[gi]){j= ++i;for(;j<lN;j++ ){if(gB.relative[lP[j].type]){break;}
;}
;return fA(i>1&&fG(lQ),i>1&&fH(lP.slice(0,i-1).concat({value:lP[i-2].type===dL?y:eD})).replace(ge,ex),lM,i<j&&gv(lP.slice(i,j)),j<lN&&gv((lP=lP.slice(j))),j<lN&&fH(lP));}
;lQ.push(lM);}
;}
;return fG(lQ);}
;function fK(me,mb){var ma=mb.length>0,mc=me.length>0,md=function(mn,mq,mf,mj,mi){var ml,j,mr,mg=0,i=dP,mk=mn&&[],mm=[],mh=fc,ms=mn||mc&&gB.find[eI](y,mi),mo=(fN+=mh==null?1:Math.random()||0.1),mp=ms.length;if(mi){fc=mq===document||mq||mi;}
;for(;i!==mp&&(ml=ms[i])!=null;i++ ){if(mc&&ml){j=0;if(!mq&&ml.ownerDocument!==document){fs(ml);mf=!fw;}
;while((mr=me[j++ ])){if(mr(ml,mq||document,mf)){mj.push(ml);break;}
;}
;if(mi){fN=mo;}
;}
;if(ma){if((ml=!mr&&ml)){mg-- ;}
;if(mn){mk.push(ml);}
;}
;}
;mg+=i;if(ma&&i!==mg){j=0;while((mr=mb[j++ ])){mr(mk,mm,mq,mf);}
;if(mn){if(mg>0){while(i-- ){if(!(mk[i]||mm[i])){mm[i]=fo.call(mj);}
;}
;}
;mm=fl(mm);}
;gb.apply(mj,mm);if(mi&&!mn&&mm.length>0&&(mg+mb.length)>1){gc.uniqueSort(mj);}
;}
;if(mi){fN=mo;fc=mh;}
;return mk;}
;return ma?gn(md):md;}
;gr=gc.compile=function(mu,mx){var i,mw=[],mt=[],mv=gx[mu+dL];if(!mv){if(!mx){mx=fL(mu);}
;i=mx.length;while(i-- ){mv=gv(mx[i]);if(mv[gi]){mw.push(mv);}
else {mt.push(mv);}
;}
;mv=gx(mu,fK(mt,mw));mv.selector=mu;}
;return mv;}
;fx=gc.select=function(mA,mE,mz,mD){var i,mB,mC,mF,find,my=typeof mA===dG&&mA,mG=!mD&&fL((mA=my.selector||mA));mz=mz||[];if(mG.length===1){mB=mG[0]=mG[0].slice(0);if(mB.length>2&&(mC=mB[0]).type===eO&&fD.getById&&mE.nodeType===9&&fw&&gB.relative[mB[1].type]){mE=(gB.find[eO](mC.matches[0].replace(fi,gh),mE)||[])[0];if(!mE){return mz;}
else if(my){mE=mE.parentNode;}
;mA=mA.slice(mB.shift().value.length);}
;i=gq[X].test(mA)?0:mB.length;while(i-- ){mC=mB[i];if(gB.relative[(mF=mC.type)]){break;}
;if((find=gB.find[mF])){if((mD=find(mC.matches[0].replace(fi,gh),fR.test(mB[0].type)&&fr(mE.parentNode)||mE))){mB.splice(i,1);mA=mD.length&&fH(mB);if(!mA){gb.apply(mz,mD);return mz;}
;break;}
;}
;}
;}
;(my||gr(mA,mG))(mD,mE,!fw,mz,!mE||fR.test(mA)&&fr(mE.parentNode)||mE);return mz;}
;fD.sortStable=gi.split(eD).sort(fJ).join(eD)===gi;fD.detectDuplicates=!!fv;fs();fD.sortDetached=ga(function(mH){return mH.compareDocumentPosition(document.createElement(ei))&1;}
);if(!ga(function(mI){mI.innerHTML=eM;return mI.firstChild.getAttribute(dw)===dk;}
)){gd(p,function(mJ,name,mK){if(!mK){return mJ.getAttribute(name,name.toLowerCase()===dm?1:2);}
;}
);}
;if(!fD.attributes||!ga(function(mL){mL.innerHTML=dY;mL.firstChild.setAttribute(eB,eD);return mL.firstChild.getAttribute(eB)===eD;}
)){gd(eB,function(mM,name,mN){if(!mN&&mM.nodeName.toLowerCase()===dl){return mM.defaultValue;}
;}
);}
;if(!ga(function(mO){return mO.getAttribute(r)==null;}
)){gd(fS,function(mQ,name,mP){var mR;if(!mP){return mQ[name]===true?name.toLowerCase():(mR=mQ.getAttributeNode(name))&&mR.specified?mR.value:null;}
;}
);}
;qx.bom.Selector.query=function(mT,mS){return gc(mT,mS);}
;qx.bom.Selector.matches=function(mV,mU){return gc(mV,null,null,mU);}
;}
)(window);}
)();
(function(){var a="display",b="",c="block",d="none",e="_getHeight",f="_getContentWidth",g="_getContentHeight",h="hidden",j="_getWidth",k="qx.module.Css",m="absolute";qx.Bootstrap.define(k,{statics:{_getHeight:function(p){var q=this[0];if(q){if(qx.dom.Node.isElement(q)){var n;if(p){var o={display:c,position:m,visibility:h};n=qx.module.Css.__fN(q,o,e,this);}
else {n=qx.bom.element.Dimension.getHeight(q);}
;return n;}
else if(qx.dom.Node.isDocument(q)){return qx.bom.Document.getHeight(qx.dom.Node.getWindow(q));}
else if(qx.dom.Node.isWindow(q)){return qx.bom.Viewport.getHeight(q);}
;}
;return null;}
,_getWidth:function(t){var u=this[0];if(u){if(qx.dom.Node.isElement(u)){var r;if(t){var s={display:c,position:m,visibility:h};r=qx.module.Css.__fN(u,s,j,this);}
else {r=qx.bom.element.Dimension.getWidth(u);}
;return r;}
else if(qx.dom.Node.isDocument(u)){return qx.bom.Document.getWidth(qx.dom.Node.getWindow(u));}
else if(qx.dom.Node.isWindow(u)){return qx.bom.Viewport.getWidth(u);}
;}
;return null;}
,_getContentHeight:function(w){var y=this[0];if(qx.dom.Node.isElement(y)){var x;if(w){var v={position:m,visibility:h,display:c};x=qx.module.Css.__fN(y,v,g,this);}
else {x=qx.bom.element.Dimension.getContentHeight(y);}
;return x;}
;return null;}
,_getContentWidth:function(B){var z=this[0];if(qx.dom.Node.isElement(z)){var C;if(B){var A={position:m,visibility:h,display:c};C=qx.module.Css.__fN(z,A,f,this);}
else {C=qx.bom.element.Dimension.getContentWidth(z);}
;return C;}
;return null;}
,__fL:{},__fM:function(G,D){var F=qx.module.Css.__fL;if(!F[G]){var H=D||document;var E=qxWeb(H.createElement(G)).appendTo(D.body);F[G]=E.getStyle(a);E.remove();}
;return F[G]||b;}
,__fN:function(L,I,J,O){var M={};for(var N in I){M[N]=L.style[N];L.style[N]=I[N];}
;var K=O[J]();for(var N in M){L.style[N]=M[N];}
;return K;}
,includeStylesheet:function(Q,P){qx.bom.Stylesheet.includeFile(Q,P);}
},members:{getHeight:function(R){return this._getHeight(R);}
,getWidth:function(S){return this._getWidth(S);}
,getContentHeight:function(T){return this._getContentHeight(T);}
,getContentWidth:function(U){return this._getContentWidth(U);}
,show:function(){this._forEachElementWrapped(function(X){var Y=X.getStyle(a);var W=X[0].$$qPrevDisp;var V;if(Y==d){if(W&&W!=d){V=W;}
else {var ba=qxWeb.getDocument(X[0]);V=qx.module.Css.__fM(X[0].tagName,ba);}
;X.setStyle(a,V);X[0].$$qPrevDisp=d;}
;}
);return this;}
,hide:function(){this._forEachElementWrapped(function(bb){var bc=bb.getStyle(a);if(bc!==d){bb[0].$$qPrevDisp=bc;bb.setStyle(a,d);}
;}
);return this;}
,getPosition:function(){var bd=this[0];if(qx.dom.Node.isElement(bd)){return qx.bom.element.Location.getPosition(bd);}
;return null;}
,getOffset:function(be){var bf=this[0];if(bf&&qx.dom.Node.isElement(bf)){return qx.bom.element.Location.get(bf,be);}
;return null;}
,setStyle:function(name,bg){if(/\w-\w/.test(name)){name=qx.lang.String.camelCase(name);}
;this._forEachElement(function(bh){qx.bom.element.Style.set(bh,name,bg);}
);return this;}
,getStyle:function(name){if(this[0]&&qx.dom.Node.isElement(this[0])){if(/\w-\w/.test(name)){name=qx.lang.String.camelCase(name);}
;return qx.bom.element.Style.get(this[0],name);}
;return null;}
,setStyles:function(bi){for(var name in bi){this.setStyle(name,bi[name]);}
;return this;}
,getStyles:function(bk){var bj={};for(var i=0;i<bk.length;i++ ){bj[bk[i]]=this.getStyle(bk[i]);}
;return bj;}
,addClass:function(name){this._forEachElement(function(bl){qx.bom.element.Class.add(bl,name);}
);return this;}
,addClasses:function(bm){this._forEachElement(function(bn){qx.bom.element.Class.addClasses(bn,bm);}
);return this;}
,removeClass:function(name){this._forEachElement(function(bo){qx.bom.element.Class.remove(bo,name);}
);return this;}
,removeClasses:function(bp){this._forEachElement(function(bq){qx.bom.element.Class.removeClasses(bq,bp);}
);return this;}
,hasClass:function(name){if(!this[0]||!qx.dom.Node.isElement(this[0])){return false;}
;return qx.bom.element.Class.has(this[0],name);}
,getClass:function(){if(!this[0]||!qx.dom.Node.isElement(this[0])){return b;}
;return qx.bom.element.Class.get(this[0]);}
,toggleClass:function(name){var br=qx.bom.element.Class;this._forEachElement(function(bs){br.has(bs,name)?br.remove(bs,name):br.add(bs,name);}
);return this;}
,toggleClasses:function(bt){for(var i=0,l=bt.length;i<l;i++ ){this.toggleClass(bt[i]);}
;return this;}
,replaceClass:function(bv,bu){this._forEachElement(function(bw){qx.bom.element.Class.replace(bw,bv,bu);}
);return this;}
},defer:function(bx){qxWeb.$attachAll(this);qxWeb.$attach({"_getWidth":bx._getWidth,"_getHeight":bx._getHeight,"_getContentHeight":bx._getContentHeight,"_getContentWidth":bx._getContentWidth});}
});}
)();
(function(){var a="borderBottomWidth",b="scroll",c="qx.bom.element.Location",d="gecko",e="paddingLeft",f="borderRightWidth",g="auto",h="static",i="borderTopWidth",j="borderLeftWidth",k="marginBottom",l="marginTop",m="overflowY",n="marginLeft",o="border-box",p="padding",q="paddingBottom",r="paddingTop",s="marginRight",t="browser.quirksmode",u="engine.name",v="position",w="margin",x="paddingRight",y="BODY",z="overflowX",A="border";qx.Bootstrap.define(c,{statics:{__fO:function(C,B){return qx.bom.element.Style.get(C,B,qx.bom.element.Style.COMPUTED_MODE,false);}
,__fP:function(E,D){return parseInt(qx.bom.element.Style.get(E,D,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;}
,__fQ:function(G){var H=0,top=0;var F=qx.dom.Node.getWindow(G);H-=qx.bom.Viewport.getScrollLeft(F);top-=qx.bom.Viewport.getScrollTop(F);return {left:H,top:top};}
,__fR:qx.core.Environment.select(u,{"mshtml":function(K){var J=qx.dom.Node.getDocument(K);var I=J.body;var L=0;var top=0;L-=I.clientLeft+J.documentElement.clientLeft;top-=I.clientTop+J.documentElement.clientTop;if(!qx.core.Environment.get(t)){L+=this.__fP(I,j);top+=this.__fP(I,i);}
;return {left:L,top:top};}
,"webkit":function(O){var N=qx.dom.Node.getDocument(O);var M=N.body;var P=M.offsetLeft;var top=M.offsetTop;return {left:P,top:top};}
,"gecko":function(R){var Q=qx.dom.Node.getDocument(R).body;var S=Q.offsetLeft;var top=Q.offsetTop;if(qx.bom.element.BoxSizing.get(Q)!==o){S+=this.__fP(Q,j);top+=this.__fP(Q,i);}
;return {left:S,top:top};}
,"default":function(U){var T=qx.dom.Node.getDocument(U).body;var V=T.offsetLeft;var top=T.offsetTop;return {left:V,top:top};}
}),__fS:function(W){var X=W.getBoundingClientRect();return {left:Math.round(X.left),top:Math.round(X.top)};}
,get:function(bf,bg){if(bf.tagName==y){var location=this.__fT(bf);var bj=location.left;var top=location.top;}
else {var Y=this.__fR(bf);var bd=this.__fS(bf);var scroll=this.__fQ(bf);var bj=bd.left+Y.left-scroll.left;var top=bd.top+Y.top-scroll.top;}
;var ba;var be;if(bf instanceof SVGElement){var bk=bf.getBoundingClientRect();ba=bk.width;be=bk.height;}
else {ba=bf.offsetWidth;be=bf.offsetHeight;}
;var bb=bj+ba;var bc=top+be;if(bg){if(bg==p||bg==b){var bi=qx.bom.element.Style.get(bf,z);if(bi==b||bi==g){bb+=bf.scrollWidth-ba+this.__fP(bf,j)+this.__fP(bf,f);}
;var bh=qx.bom.element.Style.get(bf,m);if(bh==b||bh==g){bc+=bf.scrollHeight-be+this.__fP(bf,i)+this.__fP(bf,a);}
;}
;switch(bg){case p:bj+=this.__fP(bf,e);top+=this.__fP(bf,r);bb-=this.__fP(bf,x);bc-=this.__fP(bf,q);case b:bj-=bf.scrollLeft;top-=bf.scrollTop;bb-=bf.scrollLeft;bc-=bf.scrollTop;case A:bj+=this.__fP(bf,j);top+=this.__fP(bf,i);bb-=this.__fP(bf,f);bc-=this.__fP(bf,a);break;case w:bj-=this.__fP(bf,n);top-=this.__fP(bf,l);bb+=this.__fP(bf,s);bc+=this.__fP(bf,k);break;};}
;return {left:bj,top:top,right:bb,bottom:bc};}
,__fT:function(bl){var top=bl.offsetTop;var bm=bl.offsetLeft;top+=this.__fP(bl,l);bm+=this.__fP(bl,n);if(qx.core.Environment.get(u)===d){top+=this.__fP(bl,j);bm+=this.__fP(bl,i);}
;return {left:bm,top:top};}
,getLeft:function(bn,bo){return this.get(bn,bo).left;}
,getTop:function(bp,bq){return this.get(bp,bq).top;}
,getRight:function(br,bs){return this.get(br,bs).right;}
,getBottom:function(bt,bu){return this.get(bt,bu).bottom;}
,getRelative:function(by,bx,bw,bv){var bA=this.get(by,bw);var bz=this.get(bx,bv);return {left:bA.left-bz.left,top:bA.top-bz.top,right:bA.right-bz.right,bottom:bA.bottom-bz.bottom};}
,getPosition:function(bB){return this.getRelative(bB,this.getOffsetParent(bB));}
,getOffsetParent:function(bE){if(bE instanceof SVGElement){return document.body;}
;var bD=bE.offsetParent||document.body;var bC=qx.bom.element.Style;while(bD&&(!/^body|html$/i.test(bD.tagName)&&bC.get(bD,v)===h)){bD=bD.offsetParent;}
;return bD;}
}});}
)();
(function(){var a='',b="(^|\\s)",c=" is undefined",d='function',e="(\\s|$)",f="",g="\\b|\\b",h="qx.debug",j="qx.bom.element.Class",k=" cannot be determined",m='SVGAnimatedString',n="html.classlist",o="default",p=" ",q='object',r="className for element ",s="g",t="$2",u="native",v="\\b",w='undefined';qx.Bootstrap.define(j,{statics:{__fU:/\s+/g,__fV:/^\s+|\s+$/g,add:{"native":function(x,name){if(name.length>0){x.classList.add(name);}
;return name;}
,"default":function(y,name){if(!this.has(y,name)){y.className+=(y.className?p:f)+name;}
;return name;}
}[qx.core.Environment.get(n)?u:o],addClasses:{"native":function(A,z){for(var i=0;i<z.length;i++ ){if(z[i].length>0){A.classList.add(z[i]);}
;}
;return A.className;}
,"default":function(C,E){var D={};var F;var B=C.className;if(B){F=B.split(this.__fU);for(var i=0,l=F.length;i<l;i++ ){D[F[i]]=true;}
;for(var i=0,l=E.length;i<l;i++ ){if(!D[E[i]]){F.push(E[i]);}
;}
;}
else {F=E;}
;return C.className=F.join(p);}
}[qx.core.Environment.get(n)?u:o],get:function(H){var G=H.className;if(typeof G.split!==d){if(typeof G===q){if(qx.Bootstrap.getClass(G)==m){G=G.baseVal;}
else {if(qx.core.Environment.get(h)){qx.log.Logger.warn(this,r+H+k);}
;G=a;}
;}
;if(typeof G===w){if(qx.core.Environment.get(h)){qx.log.Logger.warn(this,r+H+c);}
;G=a;}
;}
;return G;}
,has:{"native":function(I,name){return I.classList.contains(name);}
,"default":function(K,name){var J=new RegExp(b+name+e);return J.test(K.className);}
}[qx.core.Environment.get(n)?u:o],remove:{"native":function(L,name){L.classList.remove(name);return name;}
,"default":function(N,name){var M=new RegExp(b+name+e);N.className=N.className.replace(M,t);return name;}
}[qx.core.Environment.get(n)?u:o],removeClasses:{"native":function(P,O){for(var i=0;i<O.length;i++ ){P.classList.remove(O[i]);}
;return P.className;}
,"default":function(S,Q){var R=new RegExp(v+Q.join(g)+v,s);return S.className=S.className.replace(R,f).replace(this.__fV,f).replace(this.__fU,p);}
}[qx.core.Environment.get(n)?u:o],replace:function(V,U,T){if(!this.has(V,U)){return f;}
;this.remove(V,U);return this.add(V,T);}
,toggle:{"native":function(X,name,W){if(W===undefined){X.classList.toggle(name);}
else {W?this.add(X,name):this.remove(X,name);}
;return name;}
,"default":function(ba,name,Y){if(Y==null){Y=!this.has(ba,name);}
;Y?this.add(ba,name):this.remove(ba,name);return name;}
}[qx.core.Environment.get(n)?u:o]}});}
)();
(function(){var a="ipod",b="pc",c="ps3",d=")",e="device.type",f="psp",g="wii",h="xbox",i="\.",j="iemobile",k="ipad",l="ds",m="(",n="mobile",o="tablet",p="ontouchstart",q="g",r="iphone",s="|",t="qx.bom.client.Device",u="desktop",v="device.name",w="device.touch",x="undefined",y="device.pixelRatio";qx.Bootstrap.define(t,{statics:{__cF:{"Windows Phone":j,"iPod":a,"iPad":k,"iPhone":r,"PSP":f,"PLAYSTATION 3":c,"Nintendo Wii":g,"Nintendo DS":l,"XBOX":h,"Xbox":h},getName:function(){var B=[];for(var A in qx.bom.client.Device.__cF){B.push(A);}
;var C=new RegExp(m+B.join(s).replace(/\./g,i)+d,q);var z=C.exec(navigator.userAgent);if(z&&z[1]){return qx.bom.client.Device.__cF[z[1]];}
;return b;}
,getType:function(){return qx.bom.client.Device.detectDeviceType(navigator.userAgent);}
,detectDeviceType:function(D){if(qx.bom.client.Device.detectTabletDevice(D)){return o;}
else if(qx.bom.client.Device.detectMobileDevice(D)){return n;}
;return u;}
,detectMobileDevice:function(E){return /android.+mobile|ip(hone|od)|bada\/|blackberry|BB10|maemo|opera m(ob|in)i|fennec|NetFront|phone|psp|symbian|IEMobile|windows (ce|phone)|xda/i.test(E);}
,detectTabletDevice:function(G){var H=(/MSIE 10/i.test(G))&&(/ARM/i.test(G))&&!(/windows phone/i.test(G));var F=(!(/android.+mobile|Tablet PC/i.test(G))&&(/Android|ipad|tablet|playbook|silk|kindle|psp/i.test(G)));return H||F;}
,getDevicePixelRatio:function(){if(typeof window.devicePixelRatio!==x){return window.devicePixelRatio;}
;return 1;}
,getTouch:function(){return ((p in window)||window.navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0);}
},defer:function(I){qx.core.Environment.add(v,I.getName);qx.core.Environment.add(w,I.getTouch);qx.core.Environment.add(e,I.getType);qx.core.Environment.add(y,I.getDevicePixelRatio);}
});}
)();
(function(){var a="foo",b="function",c="event.mouseevent",d="UIEvents",f="qx.bom.client.Event",g="event.dispatchevent",h="event.mousecreateevent",j="mousewheel",k="event.touch",l="onhelp",m="event.help",n="event.hashchange",o="PointerEvent",p="pointerEnabled",q="event.customevent",r="click",s="documentMode",t="ontouchstart",u="mshtml",v="MouseEvents",w="onhashchange",x="event.mousewheel",y="wheel",z="DOMMouseScroll",A="msPointerEnabled",B="event.mspointer";qx.Bootstrap.define(f,{statics:{getTouch:function(){return (t in window);}
,getMsPointer:function(){if(o in window){return true;}
;if(p in window.navigator){return window.navigator.pointerEnabled;}
else if(A in window.navigator){return window.navigator.msPointerEnabled;}
;return false;}
,getHelp:function(){return (l in document);}
,getHashChange:function(){var C=qx.bom.client.Engine.getName();var D=w in window;return (C!==u&&D)||(C===u&&s in document&&document.documentMode>=8&&D);}
,getDispatchEvent:function(){return typeof document.dispatchEvent==b;}
,getCustomEvent:function(){if(!window.CustomEvent){return false;}
;try{new window.CustomEvent(a);return true;}
catch(E){return false;}
;}
,getMouseEvent:function(){if(!window.MouseEvent){return false;}
;try{new window.MouseEvent(a);return true;}
catch(F){return false;}
;}
,getMouseCreateEvent:function(){try{var e=document.createEvent(v);var G=e.pageX;e.initMouseEvent(r,false,false,window,0,0,0,G+1,0,false,false,false,false,0,null);if(e.pageX!==G){return v;}
;return d;}
catch(H){return d;}
;}
,getMouseWheel:function(I){if(!I){I=window;}
;var L=[I,I.document,I.document.body];var K=I;var J=z;for(var i=0;i<L.length;i++ ){if(qx.bom.Event.supportsEvent(L[i],y)){J=y;K=L[i];break;}
;if(qx.bom.Event.supportsEvent(L[i],j)){J=j;K=L[i];break;}
;}
;return {type:J,target:K};}
},defer:function(M){qx.core.Environment.add(k,M.getTouch);qx.core.Environment.add(c,M.getMouseEvent);qx.core.Environment.add(h,M.getMouseCreateEvent);qx.core.Environment.add(g,M.getDispatchEvent);qx.core.Environment.add(q,M.getCustomEvent);qx.core.Environment.add(B,M.getMsPointer);qx.core.Environment.add(m,M.getHelp);qx.core.Environment.add(n,M.getHashChange);qx.core.Environment.add(x,M.getMouseWheel);}
});}
)();
(function(){var a="engine.name",b="event.mspointer",c="device.type",d="env",e="engine.version",f="qx.module.Environment",g="browser.version",h="event.touch",i="device.name",j="browser.quirksmode",k="browser.name",l="browser.documentmode";qx.Bootstrap.define(f,{statics:{get:function(m){return qx.core.Environment.get(m);}
,add:function(n,o){qx.core.Environment.add(n,o);return this;}
},defer:function(p){qx.core.Environment.get(k);qx.core.Environment.get(g);qx.core.Environment.get(j);qx.core.Environment.get(l);qx.core.Environment.get(a);qx.core.Environment.get(e);qx.core.Environment.get(i);qx.core.Environment.get(c);qx.core.Environment.get(h);qx.core.Environment.get(b);qxWeb.$attachAll(this,d);}
});}
)();
(function(){var a="qx.module.Polyfill";qx.Bootstrap.define(a,{});}
)();
(function(){var a="mshtml",b="engine.name",c="complete",d="Array",f="pointerout",g="pointerover",h="string",n="load",o="left",p="qx.module.Event",q="undefined",r="DOMContentLoaded",s="browser.documentmode",t="*";qx.Bootstrap.define(p,{statics:{__fW:{},__fX:{on:{},off:{}},__dy:false,ready:function(u){if(document.readyState===c){window.setTimeout(u,1);return;}
;var v=function(){qx.module.Event.__dy=true;u();}
;qxWeb(window).on(n,v);var w=function(){qxWeb(window).off(n,v);u();}
;if(qxWeb.env.get(b)!==a||qxWeb.env.get(s)>8){qx.bom.Event.addNativeListener(document,r,w);}
else {var z=function(){if(qx.module.Event.__dy){return;}
;try{document.documentElement.doScroll(o);if(document.body){w();}
;}
catch(A){window.setTimeout(z,100);}
;}
;z();}
;}
,$registerEventNormalization:function(E,B){if(!qx.lang.Type.isArray(E)){E=[E];}
;var C=qx.module.Event.__fW;for(var i=0,l=E.length;i<l;i++ ){var D=E[i];if(qx.lang.Type.isFunction(B)){if(!C[D]){C[D]=[];}
;C[D].push(B);}
;}
;}
,$unregisterEventNormalization:function(I,F){if(!qx.lang.Type.isArray(I)){I=[I];}
;var G=qx.module.Event.__fW;for(var i=0,l=I.length;i<l;i++ ){var H=I[i];if(G[H]){qx.lang.Array.remove(G[H],F);}
;}
;}
,$getEventNormalizationRegistry:function(){return qx.module.Event.__fW;}
,$registerEventHook:function(O,L,K){if(!qx.lang.Type.isArray(O)){O=[O];}
;var M=qx.module.Event.__fX.on;for(var i=0,l=O.length;i<l;i++ ){var N=O[i];if(qx.lang.Type.isFunction(L)){if(!M[N]){M[N]=[];}
;M[N].push(L);}
;}
;if(!K){return;}
;var J=qx.module.Event.__fX.off;for(var i=0,l=O.length;i<l;i++ ){var N=O[i];if(qx.lang.Type.isFunction(K)){if(!J[N]){J[N]=[];}
;J[N].push(K);}
;}
;}
,$unregisterEventHook:function(U,R,Q){if(!qx.lang.Type.isArray(U)){U=[U];}
;var S=qx.module.Event.__fX.on;for(var i=0,l=U.length;i<l;i++ ){var T=U[i];if(S[T]){qx.lang.Array.remove(S[T],R);}
;}
;if(!Q){return;}
;var P=qx.module.Event.__fX.off;for(var i=0,l=U.length;i<l;i++ ){var T=U[i];if(P[T]){qx.lang.Array.remove(P[T],Q);}
;}
;}
,$getEventHookRegistry:function(){return qx.module.Event.__fX;}
},members:{on:function(bd,bb,bc,W){for(var i=0;i<this.length;i++ ){var V=this[i];var Y=bc||qxWeb(V);var X=qx.module.Event.__fX.on;var be=X[t]||[];if(X[bd]){be=be.concat(X[bd]);}
;for(var j=0,m=be.length;j<m;j++ ){be[j](V,bd,bb,bc);}
;var ba=function(bf,event){var bh=qx.module.Event.__fW;var bg=bh[t]||[];if(bh[bd]){bg=bg.concat(bh[bd]);}
;for(var x=0,y=bg.length;x<y;x++ ){event=bg[x](event,bf,bd);}
;bb.apply(this,[event]);}
.bind(Y,V);ba.original=bb;qx.bom.Event.addNativeListener(V,bd,ba,W);if(!V.$$emitter){V.$$emitter=new qx.event.Emitter();}
;V.$$lastlistenerId=V.$$emitter.on(bd,ba,Y);V.$$emitter.getEntryById(V.$$lastlistenerId).useCapture=!!W;if(!V.__fY){V.__fY={};}
;if(!V.__fY[bd]){V.__fY[bd]={};}
;V.__fY[bd][V.$$lastlistenerId]=ba;if(!bc){if(!V.__ga){V.__ga={};}
;V.__ga[V.$$lastlistenerId]=Y;}
;}
;return this;}
,off:function(bt,bo,bq,bj){var br=(bo===null&&bq===null);for(var j=0;j<this.length;j++ ){var bi=this[j];if(!bi.__fY){continue;}
;var bv=[];if(bt!==null){bv.push(bt);}
else {for(var bm in bi.__fY){bv.push(bm);}
;}
;for(var i=0,l=bv.length;i<l;i++ ){for(var bu in bi.__fY[bv[i]]){var bs=bi.__fY[bv[i]][bu];if(br||bs==bo||bs.original==bo){var bl=typeof bi.__ga!==q&&bi.__ga[bu];var bw;if(!bq&&bl){bw=bi.__ga[bu];}
;var bp=bi.$$emitter.off(bv[i],bs,bw||bq);if(br||bs.original==bo){qx.bom.Event.removeNativeListener(bi,bv[i],bs,bj);}
;if(bp!==null){delete bi.__fY[bv[i]][bu];}
;if(bl){delete bi.__ga[bu];}
;}
;}
;var bk=qx.module.Event.__fX.off;var bn=bk[t]||[];if(bk[bt]){bn=bn.concat(bk[bt]);}
;for(var k=0,m=bn.length;k<m;k++ ){bn[k](bi,bt,bo,bq);}
;}
;}
;return this;}
,allOff:function(bx){return this.off(bx||null,null,null);}
,offById:function(bz){var by=this[0].$$emitter.getEntryById(bz);return this.off(by.name,by.listener.original,by.ctx,by.useCapture);}
,emit:function(bA,bB){for(var j=0;j<this.length;j++ ){var bC=this[j];if(bC.$$emitter){bC.$$emitter.emit(bA,bB);}
;}
;return this;}
,once:function(bE,bD,bG){var self=this;var bF=function(bH){self.off(bE,bF,bG);bD.call(this,bH);}
;this.on(bE,bF,bG);return this;}
,hasListener:function(bL,bJ,bK){if(!this[0]||!this[0].$$emitter||!this[0].$$emitter.getListeners()[bL]){return false;}
;if(bJ){var bM=this[0].$$emitter.getListeners()[bL];for(var i=0;i<bM.length;i++ ){var bI=false;if(bM[i].listener==bJ){bI=true;}
;if(bM[i].listener.original&&bM[i].listener.original==bJ){bI=true;}
;if(bI){if(bK!==undefined){if(bM[i].ctx===bK){return true;}
;}
else {return true;}
;}
;}
;return false;}
;return this[0].$$emitter.getListeners()[bL].length>0;}
,copyEventsTo:function(bT){var bR=this.concat();var bS=bT.concat();for(var i=bR.length-1;i>=0;i-- ){var bO=bR[i].getElementsByTagName(t);for(var j=0;j<bO.length;j++ ){bR.push(bO[j]);}
;}
;for(var i=bS.length-1;i>=0;i-- ){var bO=bS[i].getElementsByTagName(t);for(var j=0;j<bO.length;j++ ){bS.push(bO[j]);}
;}
;bS.forEach(function(bU){bU.$$emitter=null;}
);for(var i=0;i<bR.length;i++ ){var bN=bR[i];if(!bN.$$emitter){continue;}
;var bP=bN.$$emitter.getListeners();for(var name in bP){for(var j=bP[name].length-1;j>=0;j-- ){var bQ=bP[name][j].listener;if(bQ.original){bQ=bQ.original;}
;qxWeb(bS[i]).on(name,bQ,bP[name][j].ctx);}
;}
;}
;}
,hover:function(bV,bW){this.on(g,bV,this);if(qx.lang.Type.isFunction(bW)){this.on(f,bW,this);}
;return this;}
,onMatchTarget:function(bY,ca,cc,cb){cb=cb!==undefined?cb:this;var bX=function(e){var cd=qxWeb(e.getTarget());if(cd.is(ca)){cc.call(cb,cd,qxWeb.object.clone(e));}
else {var ce=typeof ca==h?this.find(ca):qxWeb(ca);for(var i=0,l=ce.length;i<l;i++ ){if(cd.isChildOf(qxWeb(ce[i]))){cc.call(cb,cd,qxWeb.object.clone(e));break;}
;}
;}
;}
;this.forEach(function(cf){var cg={type:bY,listener:bX,callback:cc,context:cb};if(!cf.$$matchTargetInfo){cf.$$matchTargetInfo=[];}
;cf.$$matchTargetInfo.push(cg);}
);this.on(bY,bX);return this;}
,offMatchTarget:function(ch,ci,ck,cj){cj=cj!==undefined?cj:this;this.forEach(function(cl){if(cl.$$matchTargetInfo&&qxWeb.type.get(cl.$$matchTargetInfo)==d){var cm=cl.$$matchTargetInfo;for(var i=cm.length-1;i>=0;i-- ){var cn=cm[i];if(cn.type==ch&&cn.callback==ck&&cn.context==cj){this.off(ch,cn.listener);cm.splice(i,1);}
;}
;if(cm.length===0){cl.$$matchTargetInfo=null;}
;}
;}
,this);return this;}
},defer:function(co){qxWeb.$attachAll(this);qxWeb.$attachStatic({"$registerEventNormalization":co.$registerEventNormalization,"$unregisterEventNormalization":co.$unregisterEventNormalization,"$getEventNormalizationRegistry":co.$getEventNormalizationRegistry,"$registerEventHook":co.$registerEventHook,"$unregisterEventHook":co.$unregisterEventHook,"$getEventHookRegistry":co.$getEventHookRegistry});}
});}
)();
(function(){var a="qx.module.event.PointerHandler",b="pointerup",c="event.dispatchevent",d="gesturemove",e="pointerover",f="gesturebegin",g="pointerdown",h="pointermove",i="gesturefinish",j="qx.event.handler.Pointer",k="gesturecancel",l="pointercancel",m="pointerout";qx.Bootstrap.define(a,{statics:{TYPES:[h,e,m,g,b,l,f,d,i,k],register:function(o,n){if(!o.$$pointerHandler){if(!qx.core.Environment.get(c)){if(!o.$$emitter){o.$$emitter=new qx.event.Emitter();}
;}
;o.$$pointerHandler=new qx.event.handler.PointerCore(o,o.$$emitter);}
;}
,unregister:function(r){if(r.$$pointerHandler){if(r.$$pointerHandler.classname===j){return;}
;var p=r.$$emitter.getListeners();for(var q in p){if(qx.module.event.PointerHandler.TYPES.indexOf(q)!==-1){if(p[q].length>0){return;}
;}
;}
;r.$$pointerHandler.dispose();r.$$pointerHandler=undefined;}
;}
},defer:function(s){qxWeb.$registerEventHook(s.TYPES,s.register,s.unregister);}
});}
)();
(function(){var a="qx.event.Emitter",b="*";qx.Bootstrap.define(a,{extend:Object,statics:{__gb:[]},members:{__fY:null,__gc:null,on:function(name,c,d){var e=qx.event.Emitter.__gb.length;this.__gd(name).push({listener:c,ctx:d,id:e,name:name});qx.event.Emitter.__gb.push({name:name,listener:c,ctx:d});return e;}
,once:function(name,f,g){var h=qx.event.Emitter.__gb.length;this.__gd(name).push({listener:f,ctx:g,once:true,id:h});qx.event.Emitter.__gb.push({name:name,listener:f,ctx:g});return h;}
,off:function(name,m,k){var l=this.__gd(name);for(var i=l.length-1;i>=0;i-- ){var n=l[i];if(n.listener==m&&n.ctx==k){l.splice(i,1);qx.event.Emitter.__gb[n.id]=null;return n.id;}
;}
;return null;}
,offById:function(p){var o=qx.event.Emitter.__gb[p];if(o){this.off(o.name,o.listener,o.ctx);}
;return null;}
,addListener:function(name,q,r){return this.on(name,q,r);}
,addListenerOnce:function(name,s,t){return this.once(name,s,t);}
,removeListener:function(name,u,v){this.off(name,u,v);}
,removeListenerById:function(w){this.offById(w);}
,emit:function(name,A){var x=this.__gd(name).concat();var y=[];for(var i=0;i<x.length;i++ ){var z=x[i];z.listener.call(z.ctx,A);if(z.once){y.push(z);}
;}
;y.forEach(function(B){var C=this.__gd(name);var D=C.indexOf(B);C.splice(D,1);}
.bind(this));x=this.__gd(b);for(var i=x.length-1;i>=0;i-- ){var z=x[i];z.listener.call(z.ctx,A);}
;}
,getListeners:function(){return this.__fY;}
,getEntryById:function(F){for(var name in this.__fY){var E=this.__fY[name];for(var i=0,j=E.length;i<j;i++ ){if(E[i].id===F){return E[i];}
;}
;}
;}
,__gd:function(name){if(this.__fY==null){this.__fY={};}
;if(this.__fY[name]==null){this.__fY[name]=[];}
;return this.__fY[name];}
}});}
)();
(function(){var a="touchmove",b="os.name",c="mousedown",d="event.dispatchevent",e="MSPointerDown",f="gesturemove",g="pointerover",h="touch",k="mouseout",m="ms",n="Processed",o="pointercancel",p="pointerleave",q="touchstart",r="pointerenter",s="mouse",t="event.mspointer",u="mousemove",v="MSPointerCancel",w="gesturefinish",z="browser.documentmode",A="pointerup",B="touchend",C="osx",D="mouseover",E="$$qx",F="pointerdown",G="MSPointerUp",H="pointermove",I="MSPointerOver",J="gecko",K="mshtml",L="engine.name",M="mouseup",N="touchcancel",O="contextmenu",P="gesturecancel",Q="MSPointerMove",R="MSPointerOut",S="gesturebegin",T="qx.event.handler.PointerCore",U=".",V="device.touch",W="pointerout";qx.Bootstrap.define(T,{extend:Object,implement:[qx.core.IDisposable],statics:{MOUSE_TO_POINTER_MAPPING:{mousedown:F,mouseup:A,mousemove:H,mouseout:W,mouseover:g},TOUCH_TO_POINTER_MAPPING:{touchstart:F,touchend:A,touchmove:H,touchcancel:o},MSPOINTER_TO_POINTER_MAPPING:{MSPointerDown:F,MSPointerMove:H,MSPointerUp:A,MSPointerCancel:o,MSPointerLeave:p,MSPointerEnter:r,MSPointerOver:g,MSPointerOut:W},POINTER_TO_GESTURE_MAPPING:{pointerdown:S,pointerup:w,pointercancel:P,pointermove:f},LEFT_BUTTON:(qx.core.Environment.get(L)==K&&qx.core.Environment.get(z)<=8)?1:0,SIM_MOUSE_DISTANCE:25,SIM_MOUSE_DELAY:2500,__ge:null},construct:function(ba,bb){this.__gf=ba;this.__gg=bb;this.__gh=[];this.__gi=[];this.__gj=[];this._processedFlag=E+this.classname.substr(this.classname.lastIndexOf(U)+1)+n;var Y=qx.core.Environment.get(L);var X=parseInt(qx.core.Environment.get(z),10);if(Y==K&&X==10){this.__gh=[e,Q,G,v,I,R,F,H,A,o,g,W];this._initPointerObserver();}
else {if(qx.core.Environment.get(t)){this.__gk=true;}
;this.__gh=[F,H,A,o,g,W];this._initPointerObserver();}
;if(!qx.core.Environment.get(t)){if(qx.core.Environment.get(V)){this.__gh=[q,B,a,N];this._initObserver(this._onTouchEvent);}
;this.__gh=[c,M,u,D,k,O];this._initObserver(this._onMouseEvent);}
;}
,members:{__gf:null,__gg:null,__gh:null,__gk:false,__gl:null,__gm:0,__gi:null,__gn:null,__gj:null,_processedFlag:null,_initPointerObserver:function(){this._initObserver(this._onPointerEvent);}
,_initObserver:function(bc,bd){this.__gl=qx.lang.Function.listener(bc,this);this.__gh.forEach(function(be){if(bd&&qx.dom.Node.isDocument(this.__gf)){if(!this.__gf.$$emitter){this.__gf.$$emitter=new qx.event.Emitter();}
;this.__gf.$$emitter.on(be,this.__gl);}
else {qx.bom.Event.addNativeListener(this.__gf,be,this.__gl);}
;}
.bind(this));}
,_onPointerEvent:function(bh){if(!qx.core.Environment.get(t)||(qx.core.Environment.get(z)===10&&bh.type.toLowerCase().indexOf(m)==-1)){return;}
;if(!this.__gk){bh.stopPropagation();}
;var bf=qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[bh.type]||bh.type;var bi=qx.bom.Event.getTarget(bh);var bg=new qx.event.type.dom.Pointer(bf,bh);this._fireEvent(bg,bf,bi);}
,_onTouchEvent:function(bl){if(bl[this._processedFlag]){return;}
;bl[this._processedFlag]=true;var bm=qx.event.handler.PointerCore.TOUCH_TO_POINTER_MAPPING[bl.type];var bo=bl.changedTouches;this._determineActiveTouches(bl.type,bo);if(bl.touches.length<this.__gj.length){for(var i=this.__gj.length-1;i>=0;i-- ){var bq=new qx.event.type.dom.Pointer(o,bl,{identifier:this.__gj[i].identifier,target:bl.target,pointerType:h,pointerId:this.__gj[i].identifier+2});this._fireEvent(bq,o,bl.target);}
;this.__gn=null;this.__gj=[];return;}
;if(bl.type==q&&this.__gn===null){this.__gn=bo[0].identifier;}
;for(var i=0,l=bo.length;i<l;i++ ){var bp=bo[i];var bn=bl.view.document.elementFromPoint(bp.clientX,bp.clientY)||bl.target;var bk={clientX:bp.clientX,clientY:bp.clientY,pageX:bp.pageX,pageY:bp.pageY,identifier:bp.identifier,screenX:bp.screenX,screenY:bp.screenY,target:bn,pointerType:h,pointerId:bp.identifier+2};if(bl.type==q){var bj=new qx.event.type.dom.Pointer(g,bl,bk);this._fireEvent(bj,g,bk.target);}
;if(bp.identifier==this.__gn){bk.isPrimary=true;bk.button=0;bk.buttons=1;qx.event.handler.PointerCore.__ge={"x":bp.clientX,"y":bp.clientY,"time":new Date().getTime()};}
;var br=new qx.event.type.dom.Pointer(bm,bl,bk);this._fireEvent(br,bm,bk.target);if(bl.type==B||bl.type==N){var bs=new qx.event.type.dom.Pointer(W,bl,bk);this._fireEvent(bs,W,bl.target);if(this.__gn==bp.identifier){this.__gn=null;}
;}
;}
;}
,_onMouseEvent:function(bt){if(bt[this._processedFlag]){return;}
;bt[this._processedFlag]=true;if(this._isSimulatedMouseEvent(bt.clientX,bt.clientY)){return;}
;if(bt.type==c){this.__gi[bt.which]=1;}
else if(bt.type==M){if(qx.core.Environment.get(b)==C&&qx.core.Environment.get(L)==J){if(this.__gi[bt.which]!=1&&bt.ctrlKey){this.__gi[1]=0;}
;}
;this.__gi[bt.which]=0;}
;var bv=qx.event.handler.PointerCore.MOUSE_TO_POINTER_MAPPING[bt.type];var bu=qx.bom.Event.getTarget(bt);var bw=qx.lang.Array.sum(this.__gi);var bz={pointerType:s,pointerId:1};if(this.__gm!=bw&&bw!==0&&this.__gm!==0){var bx=new qx.event.type.dom.Pointer(H,bt,bz);this._fireEvent(bx,H,bu);}
;this.__gm=bw;if(bt.type==c&&bw>1){return;}
;if(bt.type==M&&bw>0){return;}
;if(bt.type==O){this.__gi[bt.which]=0;return;}
;var by=new qx.event.type.dom.Pointer(bv,bt,bz);this._fireEvent(by,bv,bu);}
,_determineActiveTouches:function(bD,bC){if(bD==q){for(var i=0;i<bC.length;i++ ){this.__gj.push(bC[i]);}
;}
else if(bD==B||bD==N){var bA=[];for(var i=0;i<this.__gj.length;i++ ){var bB=true;for(var j=0;j<bC.length;j++ ){if(this.__gj[i].identifier==bC[j].identifier){bB=false;break;}
;}
;if(bB){bA.push(this.__gj[i]);}
;}
;this.__gj=bA;}
;}
,_isSimulatedMouseEvent:function(x,y){var bF=qx.event.handler.PointerCore.__ge;if(bF){var bG=new Date().getTime()-bF.time;var bE=qx.event.handler.PointerCore.SIM_MOUSE_DISTANCE;var bI=Math.abs(x-qx.event.handler.PointerCore.__ge.x);var bH=Math.abs(y-qx.event.handler.PointerCore.__ge.y);if(bG<qx.event.handler.PointerCore.SIM_MOUSE_DELAY){if(bI<bE||bH<bE){return true;}
;}
;}
;return false;}
,_stopObserver:function(){for(var i=0;i<this.__gh.length;i++ ){qx.bom.Event.removeNativeListener(this.__gf,this.__gh[i],this.__gl);}
;}
,_fireEvent:function(bK,bJ,bL){bL=bL||bK.target;bJ=bJ||bK.type;var bM;if((bK.pointerType!==s||bK.button<=qx.event.handler.PointerCore.LEFT_BUTTON)&&(bJ==F||bJ==A||bJ==H)){bM=new qx.event.type.dom.Pointer(qx.event.handler.PointerCore.POINTER_TO_GESTURE_MAPPING[bJ],bK);qx.event.type.dom.Pointer.normalize(bM);try{bM.srcElement=bL;}
catch(bN){}
;}
;if(qx.core.Environment.get(d)){if(!this.__gk){bL.dispatchEvent(bK);}
;if(bM){bL.dispatchEvent(bM);}
;}
else {try{bK.srcElement=bL;}
catch(bO){}
;while(bL){if(bL.$$emitter){bK.currentTarget=bL;if(!bK._stopped){bL.$$emitter.emit(bJ,bK);}
;if(bM&&!bM._stopped){bM.currentTarget=bL;bL.$$emitter.emit(bM.type,bM);}
;}
;bL=bL.parentNode;}
;}
;}
,dispose:function(){this._stopObserver();this.__gf=this.__gg=null;}
}});}
)();
(function(){var a="qx.event.type.dom.Custom",b="UIEvents",c="function",d="event.customevent",e="object";qx.Bootstrap.define(a,{extend:Object,statics:{PROPERTIES:{bubbles:false,cancelable:true}},construct:function(f,g,h){this._type=f;this._event=this._createEvent();this._initEvent(g,h);this._event._original=g;this._event.preventDefault=function(){if(this._original.preventDefault){this._original.preventDefault();}
else {try{this._original.returnValue=false;}
catch(i){}
;}
;}
;if(this._event.stopPropagation){this._event._nativeStopPropagation=this._event.stopPropagation;}
;this._event.stopPropagation=function(){this._stopped=true;if(this._nativeStopPropagation){this._original.stopPropagation();this._nativeStopPropagation();}
else {this._original.cancelBubble=true;}
;}
;return this._event;}
,members:{_type:null,_event:null,_createEvent:function(){var j;if(qx.core.Environment.get(d)){j=new window.CustomEvent(this._type);}
else if(typeof document.createEvent==c){j=document.createEvent(b);}
else if(typeof document.createEventObject==e){j={};j.type=this._type;}
;return j;}
,_initEvent:function(k,m){m=m||{};var l=qx.lang.Object.clone(qx.event.type.dom.Custom.PROPERTIES);for(var n in m){l[n]=m[n];}
;if(this._event.initEvent){this._event.initEvent(this._type,l.bubbles,l.cancelable);}
;for(var n in l){try{this._event[n]=l[n];}
catch(o){}
;}
;}
}});}
)();
(function(){var a="bubbles",b="event.mouseevent",c="getScreenLeft",d="getPointerType",e="touch",f="ctrlKey",g="altKey",h="gecko",j="view",k="os.name",m="button",n="string",o="relatedTarget",p="buttons",q="event.mousecreateevent",r="mouse",s="clientX",t="qx.event.type.dom.Pointer",u="ios",v="pageY",w="cancelable",x="screenX",y="shiftKey",z="",A="number",B="detail",C="toElement",D="fromElement",E="getViewportLeft",F="function",G="clientY",H="os.version",I="engine.name",J="undefined",K="getViewportTop",L="screenY",M="getScreenTop",N="pen",O="metaKey",P="pageX",Q="object",R="getDocumentTop",S="which",T="getDocumentLeft";qx.Bootstrap.define(t,{extend:qx.event.type.dom.Custom,statics:{MOUSE_PROPERTIES:[a,w,j,B,x,L,s,G,P,v,f,g,y,O,m,S,o,D,C],POINTER_PROPERTIES:{pointerId:1,width:0,height:0,pressure:0.5,tiltX:0,tiltY:0,pointerType:z,isPrimary:false},READONLY_PROPERTIES:[],BIND_METHODS:[d,E,K,T,R,c,M],getPointerType:function(){if(typeof this.pointerType==n){return this.pointerType;}
;if(typeof this.pointerType==A){if(this.pointerType==this.MSPOINTER_TYPE_MOUSE){return r;}
;if(this.pointerType==this.MSPOINTER_TYPE_PEN){return N;}
;if(this.pointerType==this.MSPOINTER_TYPE_TOUCH){return e;}
;}
;return z;}
,getViewportLeft:function(){return this.clientX;}
,getViewportTop:function(){return this.clientY;}
,getDocumentLeft:function(){if(this.pageX!==undefined){return this.pageX;}
else {var U=qx.dom.Node.getWindow(this.srcElement);return this.clientX+qx.bom.Viewport.getScrollLeft(U);}
;}
,getDocumentTop:function(){if(this.pageY!==undefined){return this.pageY;}
else {var V=qx.dom.Node.getWindow(this.srcElement);return this.clientY+qx.bom.Viewport.getScrollTop(V);}
;}
,getScreenLeft:function(){return this.screenX;}
,getScreenTop:function(){return this.screenY;}
,normalize:function(event){var W=qx.event.type.dom.Pointer.BIND_METHODS;for(var i=0,l=W.length;i<l;i++ ){if(typeof event[W[i]]!=F){event[W[i]]=qx.event.type.dom.Pointer[W[i]].bind(event);}
;}
;}
},construct:function(X,Y,ba){return qx.event.type.dom.Custom.call(this,X,Y,ba);}
,members:{_createEvent:function(){var bb;if(qx.core.Environment.get(b)){bb=new window.MouseEvent(this._type);}
else if(typeof document.createEvent==F){bb=document.createEvent(qx.core.Environment.get(q));}
else if(typeof document.createEventObject==Q){bb={};bb.type=this._type;}
;return bb;}
,_initEvent:function(bc,bd){bd=bd||{};var bg=this._event;var bh={};qx.event.type.dom.Pointer.normalize(bc);Object.keys(qx.event.type.dom.Pointer.POINTER_PROPERTIES).concat(qx.event.type.dom.Pointer.MOUSE_PROPERTIES).forEach(function(bi){if(typeof bd[bi]!==J){bh[bi]=bd[bi];}
else if(typeof bc[bi]!==J){bh[bi]=bc[bi];}
else if(typeof qx.event.type.dom.Pointer.POINTER_PROPERTIES[bi]!==J){bh[bi]=qx.event.type.dom.Pointer.POINTER_PROPERTIES[bi];}
;}
);var bf;switch(bc.which){case 1:bf=1;break;case 2:bf=4;break;case 3:bf=2;break;default:bf=0;};if(bf!==undefined){bh.buttons=bf;bh.pressure=bf?0.5:0;}
;if(bg.initMouseEvent){bg.initMouseEvent(this._type,bh.bubbles,bh.cancelable,bh.view,bh.detail,bh.screenX,bh.screenY,bh.clientX,bh.clientY,bh.ctrlKey,bh.altKey,bh.shiftKey,bh.metaKey,bh.button,bh.relatedTarget);}
else if(bg.initUIEvent){bg.initUIEvent(this._type,bh.bubbles,bh.cancelable,bh.view,bh.detail);}
;for(var be in bh){if(bg[be]!==bh[be]&&qx.event.type.dom.Pointer.READONLY_PROPERTIES.indexOf(be)===-1){try{bg[be]=bh[be];}
catch(bj){}
;}
;}
;switch(bg.pointerType){case bc.MSPOINTER_TYPE_MOUSE:bg.pointerType=r;break;case bc.MSPOINTER_TYPE_PEN:bg.pointerType=N;break;case bc.MSPOINTER_TYPE_TOUCH:bg.pointerType=e;break;};if(bg.pointerType==r){bg.isPrimary=true;}
;}
},defer:function(bk){if(qx.core.Environment.get(I)==h){bk.READONLY_PROPERTIES.push(p);}
else if(qx.core.Environment.get(k)==u&&parseFloat(qx.core.Environment.get(H))>=8){bk.READONLY_PROPERTIES=bk.READONLY_PROPERTIES.concat(bk.MOUSE_PROPERTIES);}
;}
});}
)();
(function(){var a="start",b="animationEnd",c="",d="none",e="browser.name",f="browser.version",g="qx.module.Animation",h="animationIteration",j="end",k="animationStart",l="ease-in",m="iteration",n="ease-out",o="ie",p="display";qx.Bootstrap.define(g,{events:{"animationStart":undefined,"animationIteration":undefined,"animationEnd":undefined},statics:{_fadeOut:{duration:700,timing:n,keep:100,keyFrames:{'0':{opacity:1},'100':{opacity:0,display:d}}},_fadeIn:{duration:700,timing:l,keep:100,keyFrames:{'0':{opacity:0},'100':{opacity:1}}},_animate:function(s,q,r){this._forEachElement(function(t,i){if(t.$$animation){t.$$animation.stop();}
;var u;if(r){u=qx.bom.element.Animation.animateReverse(t,s,q);}
else {u=qx.bom.element.Animation.animate(t,s,q);}
;var self=this;if(i==0){u.on(a,function(){self.emit(k);}
,u);u.on(m,function(){self.emit(h);}
,u);}
;u.on(j,function(){for(var i=0;i<self.length;i++ ){if(self[i].$$animation){return;}
;}
;self.emit(b);}
,t);}
);}
},members:{getAnimationHandles:function(){var v=[];for(var i=0;i<this.length;i++ ){v[i]=this[i].$$animation;}
;return v;}
,animate:function(x,w){qx.module.Animation._animate.bind(this)(x,w,false);return this;}
,animateReverse:function(z,y){qx.module.Animation._animate.bind(this)(z,y,true);return this;}
,play:function(){for(var i=0;i<this.length;i++ ){var A=this[i].$$animation;if(A){A.play();}
;}
;return this;}
,pause:function(){for(var i=0;i<this.length;i++ ){var B=this[i].$$animation;if(B){B.pause();}
;}
;return this;}
,stop:function(){for(var i=0;i<this.length;i++ ){var C=this[i].$$animation;if(C){C.stop();}
;}
;return this;}
,isPlaying:function(){for(var i=0;i<this.length;i++ ){var D=this[i].$$animation;if(D&&D.isPlaying()){return true;}
;}
;return false;}
,isEnded:function(){for(var i=0;i<this.length;i++ ){var E=this[i].$$animation;if(E&&!E.isEnded()){return false;}
;}
;return true;}
,fadeIn:function(F){this.setStyle(p,c);return this.animate(qx.module.Animation._fadeIn,F);}
,fadeOut:function(G){return this.animate(qx.module.Animation._fadeOut,G);}
},defer:function(H){qxWeb.$attachAll(this);if(qxWeb.env.get(e)===o&&qxWeb.env.get(f)<=9){H._fadeIn.keyFrames[100].opacity=0.99;}
;}
});}
)();
(function(){var a="css.animation",b="translate",c="rotate",d="skew",e="scale",f="qx.bom.element.Animation";qx.Bootstrap.define(f,{statics:{animate:function(h,k,g){var j=qx.bom.element.Animation.__go(h,k.keyFrames);if(qx.core.Environment.get(a)&&j){return qx.bom.element.AnimationCss.animate(h,k,g);}
else {return qx.bom.element.AnimationJs.animate(h,k,g);}
;}
,animateReverse:function(m,o,l){var n=qx.bom.element.Animation.__go(m,o.keyFrames);if(qx.core.Environment.get(a)&&n){return qx.bom.element.AnimationCss.animateReverse(m,o,l);}
else {return qx.bom.element.AnimationJs.animateReverse(m,o,l);}
;}
,__go:function(p,t){var r=[];for(var v in t){var s=t[v];for(var u in s){if(r.indexOf(u)==-1){r.push(u);}
;}
;}
;var q=[e,c,d,b];for(var i=0;i<r.length;i++ ){var u=qx.lang.String.camelCase(r[i]);if(!(u in p.style)){if(q.indexOf(r[i])!=-1){continue;}
;if(qx.bom.Style.getPropertyName(u)){continue;}
;return false;}
;}
;return true;}
}});}
)();
(function(){var a="oAnimationStart",b="animationend",c="MSAnimationStart",d="oRequestAnimationFrame",f="AnimationFillMode",g="webkitAnimationStart",h="MSAnimationEnd",j="requestAnimationFrame",k="mozRequestAnimationFrame",l="webkitanimationend",m="css.animation.requestframe",n="AnimationPlayState",o="",p="MSAnimationIteration",q="animation",r="oAnimationEnd",s="@",t="animationiteration",u="webkitAnimationEnd",v="webkitRequestAnimationFrame",w=" name",x="qx.bom.client.CssAnimation",y="css.animation",z="oAnimationIteration",A="webkitanimationiteration",B="-keyframes",C="msRequestAnimationFrame",D="@keyframes",E="webkitAnimationIteration",F="animationstart",G="webkitanimationstart";qx.Bootstrap.define(x,{statics:{getSupport:function(){var name=qx.bom.client.CssAnimation.getName();if(name!=null){return {"name":name,"play-state":qx.bom.client.CssAnimation.getPlayState(),"start-event":qx.bom.client.CssAnimation.getAnimationStart(),"iteration-event":qx.bom.client.CssAnimation.getAnimationIteration(),"end-event":qx.bom.client.CssAnimation.getAnimationEnd(),"fill-mode":qx.bom.client.CssAnimation.getFillMode(),"keyframes":qx.bom.client.CssAnimation.getKeyFrames()};}
;return null;}
,getFillMode:function(){return qx.bom.Style.getPropertyName(f);}
,getPlayState:function(){return qx.bom.Style.getPropertyName(n);}
,getName:function(){return qx.bom.Style.getPropertyName(q);}
,getAnimationStart:function(){if(qx.bom.Event.supportsEvent(window,G)){return g;}
;var H={"msAnimation":c,"WebkitAnimation":g,"MozAnimation":F,"OAnimation":a,"animation":F};return H[this.getName()];}
,getAnimationIteration:function(){if(qx.bom.Event.supportsEvent(window,A)){return E;}
;var I={"msAnimation":p,"WebkitAnimation":E,"MozAnimation":t,"OAnimation":z,"animation":t};return I[this.getName()];}
,getAnimationEnd:function(){if(qx.bom.Event.supportsEvent(window,l)){return u;}
;var J={"msAnimation":h,"WebkitAnimation":u,"MozAnimation":b,"OAnimation":r,"animation":b};return J[this.getName()];}
,getKeyFrames:function(){var K=qx.bom.Style.VENDOR_PREFIXES;var N=[];for(var i=0;i<K.length;i++ ){var M=s+qx.bom.Style.getCssName(K[i])+B;N.push(M);}
;N.unshift(D);var L=qx.bom.Stylesheet.createElement();for(var i=0;i<N.length;i++ ){try{qx.bom.Stylesheet.addRule(L,N[i]+w,o);return N[i];}
catch(e){}
;}
;return null;}
,getRequestAnimationFrame:function(){var O=[j,C,v,k,d];for(var i=0;i<O.length;i++ ){if(window[O[i]]!=undefined){return O[i];}
;}
;return null;}
},defer:function(P){qx.core.Environment.add(y,P.getSupport);qx.core.Environment.add(m,P.getRequestAnimationFrame);}
});}
)();
(function(){var a="fill-mode",b="No 'keyFrames' given > 0",c="os.name",d="repeat",f="os.version",g="timing",h="start",i="end",j="Anni",k="start-event",l="keyFrames",m="Keyframe position needs to be between 0 and 100",n="alternate",o="qx.debug",p="visibilitychange",q="keep",r="duration",s=":",t="ios",u="delay",v="} ",w="name",x="iteration-event",y="",z="origin",A="Unknown key '",B="forwards",C="' in the animation description.",D="Some browsers will not animate elements with display==none",E="iteration",F="end-event",G="css.animation",H="ms ",I="% {",J="none",K=" ",L="linear",M=";",N="qx.bom.element.AnimationCss",O="keyframes",P="display";qx.Bootstrap.define(N,{statics:{__dN:null,__gp:j,__cj:0,__dK:{},__gq:{"scale":true,"rotate":true,"skew":true,"translate":true},__gr:qx.core.Environment.get(G),animateReverse:function(R,S,Q){return this._animate(R,S,Q,true);}
,animate:function(U,V,T){return this._animate(U,V,T,false);}
,_animate:function(W,be,bd,Y){this.__gw(be);if(qx.core.Environment.get(o)){this.__gx(be);}
;var bb=be.keep;if(bb!=null&&(Y||(be.alternate&&be.repeat%2==0))){bb=100-bb;}
;if(!this.__dN){this.__dN=qx.bom.Stylesheet.createElement();}
;var ba=be.keyFrames;if(bd==undefined){bd=be.duration;}
;if(this.__gr!=null){var name=this.__gy(ba,Y);var X=name+K+bd+H+be.timing+K+(be.delay?be.delay+H:y)+be.repeat+K+(be.alternate?n:y);qx.bom.Event.addNativeListener(W,this.__gr[k],this.__gs);qx.bom.Event.addNativeListener(W,this.__gr[x],this.__gt);qx.bom.Event.addNativeListener(W,this.__gr[F],this.__gu);if(qx.core.Environment.get(o)){if(qx.bom.element.Style.get(W,P)==J){qx.log.Logger.warn(D,W);}
;}
;W.style[qx.lang.String.camelCase(this.__gr[w])]=X;if(bb&&bb==100&&this.__gr[a]){W.style[this.__gr[a]]=B;}
;}
;var bc=new qx.bom.element.AnimationHandle();bc.desc=be;bc.el=W;bc.keep=bb;W.$$animation=bc;if(be.origin!=null){qx.bom.element.Transform.setOrigin(W,be.origin);}
;if(this.__gr==null){window.setTimeout(function(){qx.bom.element.AnimationCss.__gu({target:W});}
,0);}
;return bc;}
,__gs:function(e){if(e.target.$$animation){e.target.$$animation.emit(h,e.target);}
;}
,__gt:function(e){if(e.target!=null&&e.target.$$animation!=null){e.target.$$animation.emit(E,e.target);}
;}
,__gu:function(e){var bf=e.target;var bg=bf.$$animation;if(!bg){return;}
;var bi=bg.desc;if(qx.bom.element.AnimationCss.__gr!=null){var bh=qx.lang.String.camelCase(qx.bom.element.AnimationCss.__gr[w]);bf.style[bh]=y;qx.bom.Event.removeNativeListener(bf,qx.bom.element.AnimationCss.__gr[w],qx.bom.element.AnimationCss.__gu);}
;if(bi.origin!=null){qx.bom.element.Transform.setOrigin(bf,y);}
;qx.bom.element.AnimationCss.__gv(bf,bi.keyFrames[bg.keep]);bf.$$animation=null;bg.el=null;bg.ended=true;bg.emit(i,bf);}
,__gv:function(bj,bk){var bm;for(var bl in bk){if(bl in qx.bom.element.AnimationCss.__gq){if(!bm){bm={};}
;bm[bl]=bk[bl];}
else {bj.style[qx.lang.String.camelCase(bl)]=bk[bl];}
;}
;if(bm){qx.bom.element.Transform.transform(bj,bm);}
;}
,__gw:function(bn){if(!bn.hasOwnProperty(n)){bn.alternate=false;}
;if(!bn.hasOwnProperty(q)){bn.keep=null;}
;if(!bn.hasOwnProperty(d)){bn.repeat=1;}
;if(!bn.hasOwnProperty(g)){bn.timing=L;}
;if(!bn.hasOwnProperty(z)){bn.origin=null;}
;}
,__gx:qx.core.Environment.select(o,{"true":function(bp){var bo=[z,r,q,l,u,d,g,n];for(var name in bp){if(!(bo.indexOf(name)!=-1)){qx.Bootstrap.warn(A+name+C);}
;}
;if(bp.keyFrames==null){qx.Bootstrap.warn(b);}
else {for(var bq in bp.keyFrames){if(bq<0||bq>100){qx.Bootstrap.warn(m);}
;}
;}
;}
,"default":null}),__gy:function(frames,bs){var bv=y;for(var bz in frames){bv+=(bs?-(bz-100):bz)+I;var bu=frames[bz];var bx;for(var br in bu){if(br in this.__gq){if(!bx){bx={};}
;bx[br]=bu[br];}
else {var by=qx.bom.Style.getPropertyName(br);var bt=(by!==null)?qx.bom.Style.getCssName(by):y;bv+=(bt||br)+s+bu[br]+M;}
;}
;if(bx){bv+=qx.bom.element.Transform.getCss(bx);}
;bv+=v;}
;if(this.__dK[bv]){return this.__dK[bv];}
;var name=this.__gp+this.__cj++ ;var bw=this.__gr[O]+K+name;qx.bom.Stylesheet.addRule(this.__dN,bw,bv);this.__dK[bv]=name;return name;}
,__gz:function(){this.__cj=0;if(this.__dN){this.__dN.ownerNode.remove();this.__dN=null;this.__dK={};}
;}
},defer:function(bA){if(qx.core.Environment.get(c)===t&&parseInt(qx.core.Environment.get(f))>=8){document.addEventListener(p,function(){if(!document.hidden){bA.__gz();}
;}
,false);}
;}
});}
)();
(function(){var a="css.animation",b="Element",c="",d="qx.bom.element.AnimationHandle",e="play-state",f="end",g="paused",h="running";qx.Bootstrap.define(d,{extend:qx.event.Emitter,construct:function(){var i=qx.core.Environment.get(a);this.__gA=i&&i[e];this.__gB=true;this.addListenerOnce(f,this.__gD,this);}
,events:{"start":b,"end":b,"iteration":b},members:{__gA:null,__gB:false,__gC:false,isPlaying:function(){return this.__gB;}
,isEnded:function(){return this.__gC;}
,isPaused:function(){return this.el.style[this.__gA]==g;}
,pause:function(){if(this.el){this.el.style[this.__gA]=g;this.el.$$animation.__gB=false;if(this.animationId&&qx.bom.element.AnimationJs){qx.bom.element.AnimationJs.pause(this);}
;}
;}
,play:function(){if(this.el){this.el.style[this.__gA]=h;this.el.$$animation.__gB=true;if(this.i!=undefined&&qx.bom.element.AnimationJs){qx.bom.element.AnimationJs.play(this);}
;}
;}
,stop:function(){if(this.el&&qx.core.Environment.get(a)&&!this.jsAnimation){this.el.style[this.__gA]=c;this.el.style[qx.core.Environment.get(a).name]=c;this.el.$$animation.__gB=false;this.el.$$animation.__gC=true;}
else if(this.jsAnimation){this.stopped=true;qx.bom.element.AnimationJs.stop(this);}
;}
,__gD:function(){this.__gB=false;this.__gC=true;}
}});}
)();
(function(){var c="cm",d="mm",e="0",f="pt",g="pc",h="",k="%",l="em",m="qx.bom.element.AnimationJs",n="infinite",o="#",p="in",q="px",r="start",s="end",t="ex",u=";",v="undefined",w="iteration",y="string",z=":";qx.Bootstrap.define(m,{statics:{__gE:30,__gF:[k,p,c,d,l,t,f,g,q],__gq:{"scale":true,"rotate":true,"skew":true,"translate":true},animate:function(B,C,A){return this._animate(B,C,A,false);}
,animateReverse:function(E,F,D){return this._animate(E,F,D,true);}
,_animate:function(G,Q,P,I){if(G.$$animation){return G.$$animation;}
;Q=qx.lang.Object.clone(Q,true);if(P==undefined){P=Q.duration;}
;var L=Q.keyFrames;var J=this.__gO(L);var K=this.__gN(P,J);var N=parseInt(P/K,10);this.__gG(L,G);var O=this.__gI(N,K,J,L,P,Q.timing);var H=new qx.bom.element.AnimationHandle();H.jsAnimation=true;if(I){O.reverse();H.reverse=true;}
;H.desc=Q;H.el=G;H.delta=O;H.stepTime=K;H.steps=N;G.$$animation=H;H.i=0;H.initValues={};H.repeatSteps=this.__gL(N,Q.repeat);var M=Q.delay||0;var self=this;H.delayId=window.setTimeout(function(){H.delayId=null;self.play(H);}
,M);return H;}
,__gG:function(V,R){var Y={};for(var U in V){for(var name in V[U]){var S=qx.bom.Style.getPropertyName(name);if(S&&S!=name){var X=qx.bom.Style.getCssName(S);V[U][X]=V[U][name];delete V[U][name];name=X;}
;if(Y[name]==undefined){var W=V[U][name];if(typeof W==y){Y[name]=this.__gJ(W);}
else {Y[name]=h;}
;}
;}
;}
;for(var U in V){var T=V[U];for(var name in Y){if(T[name]==undefined){if(name in R.style){if(window.getComputedStyle){T[name]=getComputedStyle(R,null)[name];}
else {T[name]=R.style[name];}
;}
else {T[name]=R[name];}
;if(T[name]===h&&this.__gF.indexOf(Y[name])!=-1){T[name]=e+Y[name];}
;}
;}
;}
;}
,__gH:function(bb){bb=qx.lang.Object.clone(bb);var bc;for(var name in bb){if(name in this.__gq){if(!bc){bc={};}
;bc[name]=bb[name];delete bb[name];}
;}
;if(bc){var ba=qx.bom.element.Transform.getCss(bc).split(z);if(ba.length>1){bb[ba[0]]=ba[1].replace(u,h);}
;}
;return bb;}
,__gI:function(bw,bh,bo,bi,be,bq){var bp=new Array(bw);var bm=1;bp[0]=this.__gH(bi[0]);var bt=bi[0];var bj=bi[bo[bm]];var bf=Math.floor(bo[bm]/(bh/be*100));var bs=1;for(var i=1;i<bp.length;i++ ){if(i*bh/be*100>bo[bm]){bt=bj;bm++ ;bj=bi[bo[bm]];bf=Math.floor(bo[bm]/(bh/be*100))-bf;bs=1;}
;bp[i]={};var bd;for(var name in bj){var br=bj[name]+h;if(name in this.__gq){if(!bd){bd={};}
;if(qx.Bootstrap.isArray(bt[name])){if(!qx.Bootstrap.isArray(bj[name])){bj[name]=[bj[name]];}
;bd[name]=[];for(var j=0;j<bj[name].length;j++ ){var bu=bj[name][j]+h;var x=bs/bf;bd[name][j]=this.__gK(bu,bt[name],bq,x);}
;}
else {var x=bs/bf;bd[name]=this.__gK(br,bt[name],bq,x);}
;}
else if(br.charAt(0)==o){var bl=qx.util.ColorUtil.cssStringToRgb(bt[name]);var bk=qx.util.ColorUtil.cssStringToRgb(br);var bg=[];for(var j=0;j<bl.length;j++ ){var bv=bl[j]-bk[j];var x=bs/bf;var bn=qx.bom.AnimationFrame.calculateTiming(bq,x);bg[j]=parseInt(bl[j]-bv*bn,10);}
;bp[i][name]=qx.util.ColorUtil.rgbToHexString(bg);}
else if(!isNaN(parseFloat(br))){var x=bs/bf;bp[i][name]=this.__gK(br,bt[name],bq,x);}
else {bp[i][name]=bt[name]+h;}
;}
;if(bd){var bx=qx.bom.element.Transform.getCss(bd).split(z);if(bx.length>1){bp[i][bx[0]]=bx[1].replace(u,h);}
;}
;bs++ ;}
;bp[bp.length-1]=this.__gH(bi[100]);return bp;}
,__gJ:function(by){return by.substring((parseFloat(by)+h).length,by.length);}
,__gK:function(bC,bB,bz,x){var bA=parseFloat(bC)-parseFloat(bB);return (parseFloat(bB)+bA*qx.bom.AnimationFrame.calculateTiming(bz,x))+this.__gJ(bC);}
,play:function(bD){bD.emit(r,bD.el);var bE=window.setInterval(function(){bD.repeatSteps-- ;var bF=bD.delta[bD.i%bD.steps];if(bD.i===0){for(var name in bF){if(bD.initValues[name]===undefined){if(bD.el[name]!==undefined){bD.initValues[name]=bD.el[name];}
else if(qx.bom.element.Style){bD.initValues[name]=qx.bom.element.Style.get(bD.el,qx.lang.String.camelCase(name));}
else {bD.initValues[name]=bD.el.style[qx.lang.String.camelCase(name)];}
;}
;}
;}
;qx.bom.element.AnimationJs.__gM(bD.el,bF);bD.i++ ;if(bD.i%bD.steps==0){bD.emit(w,bD.el);if(bD.desc.alternate){bD.delta.reverse();}
;}
;if(bD.repeatSteps<0){qx.bom.element.AnimationJs.stop(bD);}
;}
,bD.stepTime);bD.animationId=bE;return bD;}
,pause:function(bG){window.clearInterval(bG.animationId);bG.animationId=null;return bG;}
,stop:function(bK){var bJ=bK.desc;var bH=bK.el;var bI=bK.initValues;if(bK.animationId){window.clearInterval(bK.animationId);}
;if(bK.delayId){window.clearTimeout(bK.delayId);}
;if(bH==undefined){return bK;}
;var bL=bJ.keep;if(bL!=undefined&&!bK.stopped){if(bK.reverse||(bJ.alternate&&bJ.repeat&&bJ.repeat%2==0)){bL=100-bL;}
;this.__gM(bH,bJ.keyFrames[bL]);}
else {this.__gM(bH,bI);}
;bH.$$animation=null;bK.el=null;bK.ended=true;bK.animationId=null;bK.emit(s,bH);return bK;}
,__gL:function(bN,bM){if(bM==undefined){return bN;}
;if(bM==n){return Number.MAX_VALUE;}
;return bN*bM;}
,__gM:function(bP,bO){for(var bQ in bO){if(bO[bQ]===undefined){continue;}
;if(typeof bP.style[bQ]===v&&bQ in bP){bP[bQ]=bO[bQ];continue;}
;var name=qx.bom.Style.getPropertyName(bQ)||bQ;if(qx.bom.element.Style){qx.bom.element.Style.set(bP,name,bO[bQ]);}
else {bP.style[name]=bO[bQ];}
;}
;}
,__gN:function(bT,bR){var bU=100;for(var i=0;i<bR.length-1;i++ ){bU=Math.min(bU,bR[i+1]-bR[i]);}
;var bS=bT*bU/100;while(bS>this.__gE){bS=bS/2;}
;return Math.round(bS);}
,__gO:function(bW){var bV=Object.keys(bW);for(var i=0;i<bV.length;i++ ){bV[i]=parseInt(bV[i],10);}
;bV.sort(function(a,b){return a-b;}
);return bV;}
}});}
)();
(function(){var a="css.transform.3d",b="backfaceVisibility",c="transformStyle",d="css.transform",e="transformOrigin",f="qx.bom.client.CssTransform",g="transform",h="perspective",i="perspectiveOrigin";qx.Bootstrap.define(f,{statics:{getSupport:function(){var name=qx.bom.client.CssTransform.getName();if(name!=null){return {"name":name,"style":qx.bom.client.CssTransform.getStyle(),"origin":qx.bom.client.CssTransform.getOrigin(),"3d":qx.bom.client.CssTransform.get3D(),"perspective":qx.bom.client.CssTransform.getPerspective(),"perspective-origin":qx.bom.client.CssTransform.getPerspectiveOrigin(),"backface-visibility":qx.bom.client.CssTransform.getBackFaceVisibility()};}
;return null;}
,getStyle:function(){return qx.bom.Style.getPropertyName(c);}
,getPerspective:function(){return qx.bom.Style.getPropertyName(h);}
,getPerspectiveOrigin:function(){return qx.bom.Style.getPropertyName(i);}
,getBackFaceVisibility:function(){return qx.bom.Style.getPropertyName(b);}
,getOrigin:function(){return qx.bom.Style.getPropertyName(e);}
,getName:function(){return qx.bom.Style.getPropertyName(g);}
,get3D:function(){return qx.bom.client.CssTransform.getPerspective()!=null;}
},defer:function(j){qx.core.Environment.add(d,j.getSupport);qx.core.Environment.add(a,j.get3D);}
});}
)();
(function(){var a="backface-visibility",b="css.transform.3d",c=") ",d="px",e="scale",f="Z",g="X",h=", ",j="visible",k=":",l="3d",m="name",n="",o="origin",p="(",q="qx.bom.element.Transform",r="perspective",s="Y",t="css.transform",u="translate",v="perspective-origin",w="hidden",x=";",y=" ",z="style";qx.Bootstrap.define(q,{statics:{__gP:qx.core.Environment.get(t),transform:function(A,C){var D=this.getTransformValue(C);if(this.__gP!=null){var B=this.__gP[m];A.style[B]=D;}
;}
,translate:function(E,F){this.transform(E,{translate:F});}
,scale:function(G,H){this.transform(G,{scale:H});}
,rotate:function(I,J){this.transform(I,{rotate:J});}
,skew:function(K,L){this.transform(K,{skew:L});}
,getCss:function(N){var O=this.getTransformValue(N);if(this.__gP!=null){var M=this.__gP[m];return qx.bom.Style.getCssName(M)+k+O+x;}
;return n;}
,setOrigin:function(P,Q){if(this.__gP!=null){P.style[this.__gP[o]]=Q;}
;}
,getOrigin:function(R){if(this.__gP!=null){return R.style[this.__gP[o]];}
;return n;}
,setStyle:function(S,T){if(this.__gP!=null){S.style[this.__gP[z]]=T;}
;}
,getStyle:function(U){if(this.__gP!=null){return U.style[this.__gP[z]];}
;return n;}
,setPerspective:function(V,W){if(this.__gP!=null){V.style[this.__gP[r]]=W+d;}
;}
,getPerspective:function(X){if(this.__gP!=null){return X.style[this.__gP[r]];}
;return n;}
,setPerspectiveOrigin:function(Y,ba){if(this.__gP!=null){Y.style[this.__gP[v]]=ba;}
;}
,getPerspectiveOrigin:function(bb){if(this.__gP!=null){var bc=bb.style[this.__gP[v]];if(bc!=n){return bc;}
else {var be=bb.style[this.__gP[v]+g];var bd=bb.style[this.__gP[v]+s];if(be!=n){return be+y+bd;}
;}
;}
;return n;}
,setBackfaceVisibility:function(bf,bg){if(this.__gP!=null){bf.style[this.__gP[a]]=bg?j:w;}
;}
,getBackfaceVisibility:function(bh){if(this.__gP!=null){return bh.style[this.__gP[a]]==j;}
;return true;}
,getTransformValue:function(bl){var bm=n;var bi=[u,e];for(var bj in bl){var bk=bl[bj];if(qx.Bootstrap.isArray(bk)){if(bk.length===3&&bi.indexOf(bj)>-1&&qx.core.Environment.get(b)){bm+=this._compute3dProperty(bj,bk);}
else {bm+=this._computeAxisProperties(bj,bk);}
;}
else {bm+=bj+p+bk+c;}
;}
;return bm.trim();}
,_compute3dProperty:function(bo,bn){var bp=n;bo+=l;for(var i=0;i<bn.length;i++ ){if(bn[i]==null){bn[i]=0;}
;}
;bp+=bo+p+bn.join(h)+c;return bp;}
,_computeAxisProperties:function(bq,br){var bt=n;var bs=[g,s,f];for(var i=0;i<br.length;i++ ){if(br[i]==null||(i==2&&!qx.core.Environment.get(b))){continue;}
;bt+=bq+bs[i]+p;bt+=br[i];bt+=c;}
;return bt;}
}});}
)();
(function(){var b="ease-in-out",c="Number",d="css.animation.requestframe",e="qx.bom.AnimationFrame",f="frame",g="end",h="linear",j="ease-in",k="ease-out";qx.Bootstrap.define(e,{extend:qx.event.Emitter,events:{"end":undefined,"frame":c},members:{__gQ:false,startSequence:function(l){this.__gQ=false;var m=(window.performance&&performance.now)?(performance.now()+qx.bom.AnimationFrame.__gR):Date.now();var n=function(p){if(this.__gQ){this.id=null;return;}
;if(p>=m+l){this.emit(g);this.id=null;}
else {var o=Math.max(p-m,0);this.emit(f,o);this.id=qx.bom.AnimationFrame.request(n,this);}
;}
;this.id=qx.bom.AnimationFrame.request(n,this);}
,cancelSequence:function(){this.__gQ=true;}
},statics:{TIMEOUT:30,calculateTiming:function(q,x){if(q==j){var a=[3.1223e-7,0.0757,1.2646,-0.167,-0.4387,0.2654];}
else if(q==k){var a=[-7.0198e-8,1.652,-0.551,-0.0458,0.1255,-0.1807];}
else if(q==h){return x;}
else if(q==b){var a=[2.482e-7,-0.2289,3.3466,-1.0857,-1.7354,0.7034];}
else {var a=[-0.0021,0.2472,9.8054,-21.6869,17.7611,-5.1226];}
;var y=0;for(var i=0;i<a.length;i++ ){y+=a[i]*Math.pow(x,i);}
;return y;}
,request:function(u,t){var s=qx.core.Environment.get(d);var r=function(v){if(v<1e10){v=qx.bom.AnimationFrame.__gR+v;}
;v=v||Date.now();u.call(t,v);}
;if(s){return window[s](r);}
else {return window.setTimeout(function(){r();}
,qx.bom.AnimationFrame.TIMEOUT);}
;}
},defer:function(w){w.__gR=window.performance&&performance.timing&&performance.timing.navigationStart;if(!w.__gR){w.__gR=Date.now();}
;}
});}
)();
(function(){var a="Child is already in: ",b="text",c="|bubble|",d="qx.html.Element",f="': ",g="|capture|",h="scroll",j="Invalid capture flag.",k="focus",m="Failed to add event listener for type '",n="Flushing elements...",o="class",p="blur",q="div",r="Flush: ",s="deactivate",t="__hp",u="'",v="css.userselect",w="animationEnd",z="Synced DOM with ",A=" from the target '",B="qx.debug",C="capture",D="visible",E="Root elements could not be inserted into other ones.",F="Has no children!",G="off",H="Invalid callback function",I="releaseCapture",J="Could not move to same index!",K="Invalid context for callback.",L="element",M="",N="Flush invisible element",O="Failed to remove event listener for type '",P="qxSelectable",Q="tabIndex",R="Has no child at this position!",S="Invalid event type.",T="qx.html.Iframe",U="activate",V="Has no parent to remove from.",W=" to the target '",X="mshtml",Y="engine.name",bp=" operations",bq="Flush rendered element",br="none",bl="Has no child: ",bm="css.userselect.none",bn=" ",bo="hidden",bs="on",bt="Switching visibility to: ",bu="id",bv="Could not overwrite existing element!";qx.Class.define(d,{extend:qx.core.Object,implement:[qx.core.IDisposable],construct:function(by,bw,bx){qx.core.Object.call(this);this.__gS=by||q;this.__gT=bw||null;this.__gU=bx||null;}
,statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__gV:{},__gW:null,__gX:null,_scheduleFlush:function(bz){qx.html.Element.__hB.schedule();}
,flush:function(){var bL;if(qx.core.Environment.get(B)){if(this.DEBUG){qx.log.Logger.debug(this,n);}
;}
;var bD=this.__gY();var bB=bD.getFocus();if(bB&&this.__hb(bB)){bD.blur(bB);}
;var bS=bD.getActive();if(bS&&this.__hb(bS)){qx.bom.Element.deactivate(bS);}
;var bG=this.__ha();if(bG&&this.__hb(bG)){qx.bom.Element.releaseCapture(bG);}
;var bM=[];var bN=this._modified;for(var bK in bN){bL=bN[bK];if(bL.__hu()||bL.classname==T){if(bL.__hc&&qx.dom.Hierarchy.isRendered(bL.__hc)){bM.push(bL);}
else {if(qx.core.Environment.get(B)){if(this.DEBUG){bL.debug(N);}
;}
;bL.__ht();}
;delete bN[bK];}
;}
;for(var i=0,l=bM.length;i<l;i++ ){bL=bM[i];if(qx.core.Environment.get(B)){if(this.DEBUG){bL.debug(bq);}
;}
;bL.__ht();}
;var bI=this._visibility;for(var bK in bI){bL=bI[bK];var bO=bL.__hc;if(!bO){delete bI[bK];continue;}
;if(qx.core.Environment.get(B)){if(this.DEBUG){qx.log.Logger.debug(this,bt+bL.__hf);}
;}
;if(!bL.$$disposed){bO.style.display=bL.__hf?M:br;if((qx.core.Environment.get(Y)==X)){if(!(document.documentMode>=8)){bO.style.visibility=bL.__hf?D:bo;}
;}
;}
;delete bI[bK];}
;var scroll=this._scroll;for(var bK in scroll){bL=scroll[bK];var bC=bL.__hc;if(bC&&bC.offsetWidth){var bF=true;if(bL.__hi!=null){bL.__hc.scrollLeft=bL.__hi;delete bL.__hi;}
;if(bL.__hj!=null){bL.__hc.scrollTop=bL.__hj;delete bL.__hj;}
;var bP=bL.__hg;if(bP!=null){var bJ=bP.element.getDomElement();if(bJ&&bJ.offsetWidth){qx.bom.element.Scroll.intoViewX(bJ,bC,bP.align);delete bL.__hg;}
else {bF=false;}
;}
;var bQ=bL.__hh;if(bQ!=null){var bJ=bQ.element.getDomElement();if(bJ&&bJ.offsetWidth){qx.bom.element.Scroll.intoViewY(bJ,bC,bQ.align);delete bL.__hh;}
else {bF=false;}
;}
;if(bF){delete scroll[bK];}
;}
;}
;var bE={"releaseCapture":1,"blur":1,"deactivate":1};for(var i=0;i<this._actions.length;i++ ){var bR=this._actions[i];var bO=bR.element.__hc;if(!bO||!bE[bR.type]&&!bR.element.__hu()){continue;}
;var bH=bR.args;bH.unshift(bO);qx.bom.Element[bR.type].apply(qx.bom.Element,bH);}
;this._actions=[];for(var bK in this.__gV){var bA=this.__gV[bK];var bC=bA.element.__hc;if(bC){qx.bom.Selection.set(bC,bA.start,bA.end);delete this.__gV[bK];}
;}
;qx.event.handler.Appear.refresh();}
,__gY:function(){if(!this.__gW){var bT=qx.event.Registration.getManager(window);this.__gW=bT.getHandler(qx.event.handler.Focus);}
;return this.__gW;}
,__ha:function(){if(!this.__gX){var bU=qx.event.Registration.getManager(window);this.__gX=bU.getDispatcher(qx.event.dispatch.MouseCapture);}
;return this.__gX.getCaptureElement();}
,__hb:function(bV){var bW=this.fromDomElement(bV);return bW&&!bW.__hu();}
,fromDomElement:function(bX){if(qx.core.Environment.get(B)){qx.core.Assert.assertTrue((!bX.$$element&&!bX.$$elementObject)||bX.$$element===bX.$$elementObject.toHashCode());}
;return bX.$$elementObject;}
},members:{__gS:null,__hc:null,__hd:null,__dD:false,__he:true,__hf:true,__hg:null,__hh:null,__hi:null,__hj:null,__hk:null,__hl:null,__hm:null,__gT:null,__gU:null,__hn:null,__ho:null,__hp:null,__hq:null,__hr:null,_scheduleChildrenUpdate:function(){if(this.__hq){return;}
;this.__hq=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
,_createDomElement:function(){return qx.dom.Element.create(this.__gS);}
,connectWidget:function(bY){if(qx.core.Environment.get(B)){qx.core.Assert.assertTrue(!this.__hd||this.__hd===bY);}
;this.__hd=bY;if(this.__hc){if(qx.core.Environment.get(B)){qx.core.Assert.assertTrue((!this.__hc.$$widget&&!this.__hc.$$widgetObject)||(this.__hc.$$widgetObject===bY&&this.__hc.$$widget===bY.toHashCode()));}
;this.__hc.$$widget=bY.toHashCode();this.__hc.$$widgetObject=bY;}
;}
,disconnectWidget:function(ca){if(qx.core.Environment.get(B)){qx.core.Assert.assertTrue(this.__hd===ca);}
;delete this.__hd;if(this.__hc){if(qx.core.Environment.get(B)){qx.core.Assert.assertTrue((!this.__hc.$$widget&&!this.__hc.$$widgetObject)||(this.__hc.$$widgetObject===ca&&this.__hc.$$widget===ca.toHashCode()));}
;this.__hc.$$widget=M;delete this.__hc.$$widgetObject;}
;}
,__hs:function(cb){if(qx.core.Environment.get(B)){qx.core.Assert.assertTrue(!this.__hc||this.__hc===cb);qx.core.Assert.assertTrue((cb.$$elementObject===this&&cb.$$element===this.toHashCode())||(!cb.$$elementObject&&!cb.$$element));}
;this.__hc=cb;cb.$$elementObject=this;cb.$$element=this.toHashCode();if(this.__hd){cb.$$widget=this.__hd.toHashCode();cb.$$widgetObject=this.__hd;}
;}
,__ht:function(){if(qx.core.Environment.get(B)){if(this.DEBUG){this.debug(r+this.getAttribute(bu));}
;}
;var length;var cc=this.__hp;if(cc){length=cc.length;var cd;for(var i=0;i<length;i++ ){cd=cc[i];if(cd.__hf&&cd.__he&&!cd.__hc){cd.__ht();}
;}
;}
;if(!this.__hc){this.__hs(this._createDomElement());this._copyData(false);if(cc&&length>0){this._insertChildren();}
;}
else {this._syncData();if(this.__hq){this._syncChildren();}
;}
;delete this.__hq;}
,_insertChildren:function(){var ce=this.__hp;var length=ce.length;var cg;if(length>2){var cf=document.createDocumentFragment();for(var i=0;i<length;i++ ){cg=ce[i];if(cg.__hc&&cg.__he){cf.appendChild(cg.__hc);}
;}
;this.__hc.appendChild(cf);}
else {var cf=this.__hc;for(var i=0;i<length;i++ ){cg=ce[i];if(cg.__hc&&cg.__he){cf.appendChild(cg.__hc);}
;}
;}
;}
,_syncChildren:function(){var ch=this.__hp;var co=ch.length;var ci;var cm;var ck=this.__hc;var cp=ck.childNodes;var cj=0;var cn;if(qx.core.Environment.get(B)){var cl=0;}
;for(var i=cp.length-1;i>=0;i-- ){cn=cp[i];cm=qx.html.Element.fromDomElement(cn);if(!cm||!cm.__he||cm.__hr!==this){ck.removeChild(cn);if(qx.core.Environment.get(B)){cl++ ;}
;}
;}
;for(var i=0;i<co;i++ ){ci=ch[i];if(ci.__he){cm=ci.__hc;cn=cp[cj];if(!cm){continue;}
;if(cm!=cn){if(cn){ck.insertBefore(cm,cn);}
else {ck.appendChild(cm);}
;if(qx.core.Environment.get(B)){cl++ ;}
;}
;cj++ ;}
;}
;if(qx.core.Environment.get(B)){if(qx.html.Element.DEBUG){this.debug(z+cl+bp);}
;}
;}
,_copyData:function(cr){var ct=this.__hc;var cv=this.__gU;if(cv){var cs=qx.bom.element.Attribute;for(var cu in cv){cs.set(ct,cu,cv[cu]);}
;}
;var cv=this.__gT;if(cv){var cq=qx.bom.element.Style;if(cr){cq.setStyles(ct,cv);}
else {cq.setCss(ct,cq.compile(cv));}
;}
;var cv=this.__hn;if(cv){for(var cu in cv){this._applyProperty(cu,cv[cu]);}
;}
;var cv=this.__ho;if(cv){qx.event.Registration.getManager(ct).importListeners(ct,cv);delete this.__ho;}
;}
,_syncData:function(){var cA=this.__hc;var cz=qx.bom.element.Attribute;var cx=qx.bom.element.Style;var cy=this.__hl;if(cy){var cD=this.__gU;if(cD){var cB;for(var cC in cy){cB=cD[cC];if(cB!==undefined){cz.set(cA,cC,cB);}
else {cz.reset(cA,cC);}
;}
;}
;this.__hl=null;}
;var cy=this.__hk;if(cy){var cD=this.__gT;if(cD){var cw={};for(var cC in cy){cw[cC]=cD[cC];}
;cx.setStyles(cA,cw);}
;this.__hk=null;}
;var cy=this.__hm;if(cy){var cD=this.__hn;if(cD){var cB;for(var cC in cy){this._applyProperty(cC,cD[cC]);}
;}
;this.__hm=null;}
;}
,__hu:function(){var cE=this;while(cE){if(cE.__dD){return true;}
;if(!cE.__he||!cE.__hf){return false;}
;cE=cE.__hr;}
;return false;}
,__hv:function(cF){if(cF.__hr===this){throw new Error(a+cF);}
;if(cF.__dD){throw new Error(E);}
;if(cF.__hr){cF.__hr.remove(cF);}
;cF.__hr=this;if(!this.__hp){this.__hp=[];}
;if(this.__hc){this._scheduleChildrenUpdate();}
;}
,__hw:function(cG){if(cG.__hr!==this){throw new Error(bl+cG);}
;if(this.__hc){this._scheduleChildrenUpdate();}
;delete cG.__hr;}
,__hx:function(cH){if(cH.__hr!==this){throw new Error(bl+cH);}
;if(this.__hc){this._scheduleChildrenUpdate();}
;}
,getChildren:function(){return this.__hp||null;}
,getChild:function(cI){var cJ=this.__hp;return cJ&&cJ[cI]||null;}
,hasChildren:function(){var cK=this.__hp;return cK&&cK[0]!==undefined;}
,indexOf:function(cM){var cL=this.__hp;return cL?cL.indexOf(cM):-1;}
,hasChild:function(cO){var cN=this.__hp;return cN&&cN.indexOf(cO)!==-1;}
,add:function(cP){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++ ){this.__hv(arguments[i]);}
;this.__hp.push.apply(this.__hp,arguments);}
else {this.__hv(cP);this.__hp.push(cP);}
;return this;}
,addAt:function(cR,cQ){this.__hv(cR);qx.lang.Array.insertAt(this.__hp,cR,cQ);return this;}
,remove:function(cS){var cT=this.__hp;if(!cT){return this;}
;if(arguments[1]){var cU;for(var i=0,l=arguments.length;i<l;i++ ){cU=arguments[i];this.__hw(cU);qx.lang.Array.remove(cT,cU);}
;}
else {this.__hw(cS);qx.lang.Array.remove(cT,cS);}
;return this;}
,removeAt:function(cV){var cW=this.__hp;if(!cW){throw new Error(F);}
;var cX=cW[cV];if(!cX){throw new Error(R);}
;this.__hw(cX);qx.lang.Array.removeAt(this.__hp,cV);return this;}
,removeAll:function(){var cY=this.__hp;if(cY){for(var i=0,l=cY.length;i<l;i++ ){this.__hw(cY[i]);}
;cY.length=0;}
;return this;}
,getParent:function(){return this.__hr||null;}
,insertInto:function(parent,da){parent.__hv(this);if(da==null){parent.__hp.push(this);}
else {qx.lang.Array.insertAt(this.__hp,this,da);}
;return this;}
,insertBefore:function(dc){var parent=dc.__hr;parent.__hv(this);qx.lang.Array.insertBefore(parent.__hp,this,dc);return this;}
,insertAfter:function(dd){var parent=dd.__hr;parent.__hv(this);qx.lang.Array.insertAfter(parent.__hp,this,dd);return this;}
,moveTo:function(de){var parent=this.__hr;parent.__hx(this);var df=parent.__hp.indexOf(this);if(df===de){throw new Error(J);}
else if(df<de){de-- ;}
;qx.lang.Array.removeAt(parent.__hp,df);qx.lang.Array.insertAt(parent.__hp,this,de);return this;}
,moveBefore:function(dg){var parent=this.__hr;return this.moveTo(parent.__hp.indexOf(dg));}
,moveAfter:function(dh){var parent=this.__hr;return this.moveTo(parent.__hp.indexOf(dh)+1);}
,free:function(){var parent=this.__hr;if(!parent){throw new Error(V);}
;if(!parent.__hp){return this;}
;parent.__hw(this);qx.lang.Array.remove(parent.__hp,this);return this;}
,getDomElement:function(){return this.__hc||null;}
,getNodeName:function(){return this.__gS;}
,setNodeName:function(name){this.__gS=name;}
,setRoot:function(di){this.__dD=di;}
,useMarkup:function(dj){if(this.__hc){throw new Error(bv);}
;if(qx.core.Environment.get(Y)==X){var dk=document.createElement(q);}
else {var dk=qx.dom.Element.getHelperElement();}
;dk.innerHTML=dj;this.useElement(dk.firstChild);return this.__hc;}
,useElement:function(dl){if(this.__hc){throw new Error(bv);}
;this.__hs(dl);this._copyData(true);}
,isFocusable:function(){var dn=this.getAttribute(Q);if(dn>=1){return true;}
;var dm=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(dn>=0&&dm[this.__gS]){return true;}
;return false;}
,setSelectable:function(dq){this.setAttribute(P,dq?bs:G);var dp=qx.core.Environment.get(v);if(dp){this.setStyle(dp,dq?b:qx.core.Environment.get(bm));}
;}
,isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__gS];}
,include:function(){if(this.__he){return this;}
;delete this.__he;if(this.__hr){this.__hr._scheduleChildrenUpdate();}
;return this;}
,exclude:function(){if(!this.__he){return this;}
;this.__he=false;if(this.__hr){this.__hr._scheduleChildrenUpdate();}
;return this;}
,isIncluded:function(){return this.__he===true;}
,fadeIn:function(dr){var ds=qxWeb(this.__hc);if(ds.isPlaying()){ds.stop();}
;if(!this.__hc){this.__ht();ds.push(this.__hc);}
;if(this.__hc){ds.fadeIn(dr).once(w,function(){this.show();qx.html.Element.flush();}
,this);return ds.getAnimationHandles()[0];}
;}
,fadeOut:function(dt){var du=qxWeb(this.__hc);if(du.isPlaying()){du.stop();}
;if(this.__hc){du.fadeOut(dt).once(w,function(){this.hide();qx.html.Element.flush();}
,this);return du.getAnimationHandles()[0];}
;}
,show:function(){if(this.__hf){return this;}
;if(this.__hc){qx.html.Element._visibility[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;if(this.__hr){this.__hr._scheduleChildrenUpdate();}
;delete this.__hf;return this;}
,hide:function(){if(!this.__hf){return this;}
;if(this.__hc){qx.html.Element._visibility[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;this.__hf=false;return this;}
,isVisible:function(){return this.__hf===true;}
,scrollChildIntoViewX:function(dy,dw,dz){var dv=this.__hc;var dx=dy.getDomElement();if(dz!==false&&dv&&dv.offsetWidth&&dx&&dx.offsetWidth){qx.bom.element.Scroll.intoViewX(dx,dv,dw);}
else {this.__hg={element:dy,align:dw};qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__hi;}
,scrollChildIntoViewY:function(dD,dB,dE){var dA=this.__hc;var dC=dD.getDomElement();if(dE!==false&&dA&&dA.offsetWidth&&dC&&dC.offsetWidth){qx.bom.element.Scroll.intoViewY(dC,dA,dB);}
else {this.__hh={element:dD,align:dB};qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__hj;}
,scrollToX:function(x,dF){var dG=this.__hc;if(dF!==true&&dG&&dG.offsetWidth){dG.scrollLeft=x;delete this.__hi;}
else {this.__hi=x;qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__hg;}
,getScrollX:function(){var dH=this.__hc;if(dH){return dH.scrollLeft;}
;return this.__hi||0;}
,scrollToY:function(y,dJ){var dI=this.__hc;if(dJ!==true&&dI&&dI.offsetWidth){dI.scrollTop=y;delete this.__hj;}
else {this.__hj=y;qx.html.Element._scroll[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;delete this.__hh;}
,getScrollY:function(){var dK=this.__hc;if(dK){return dK.scrollTop;}
;return this.__hj||0;}
,disableScrolling:function(){this.enableScrolling();this.scrollToX(0);this.scrollToY(0);this.addListener(h,this.__hz,this);}
,enableScrolling:function(){this.removeListener(h,this.__hz,this);}
,__hy:null,__hz:function(e){if(!this.__hy){this.__hy=true;this.__hc.scrollTop=0;this.__hc.scrollLeft=0;delete this.__hy;}
;}
,getTextSelection:function(){var dL=this.__hc;if(dL){return qx.bom.Selection.get(dL);}
;return null;}
,getTextSelectionLength:function(){var dM=this.__hc;if(dM){return qx.bom.Selection.getLength(dM);}
;return null;}
,getTextSelectionStart:function(){var dN=this.__hc;if(dN){return qx.bom.Selection.getStart(dN);}
;return null;}
,getTextSelectionEnd:function(){var dO=this.__hc;if(dO){return qx.bom.Selection.getEnd(dO);}
;return null;}
,setTextSelection:function(dP,dQ){var dR=this.__hc;if(dR){qx.bom.Selection.set(dR,dP,dQ);return;}
;qx.html.Element.__gV[this.toHashCode()]={element:this,start:dP,end:dQ};qx.html.Element._scheduleFlush(L);}
,clearTextSelection:function(){var dS=this.__hc;if(dS){qx.bom.Selection.clear(dS);}
;delete qx.html.Element.__gV[this.toHashCode()];}
,__hA:function(dT,dU){var dV=qx.html.Element._actions;dV.push({type:dT,element:this,args:dU||[]});qx.html.Element._scheduleFlush(L);}
,focus:function(){this.__hA(k);}
,blur:function(){this.__hA(p);}
,activate:function(){this.__hA(U);}
,deactivate:function(){this.__hA(s);}
,capture:function(dW){this.__hA(C,[dW!==false]);}
,releaseCapture:function(){this.__hA(I);}
,setStyle:function(dX,dY,ea){if(!this.__gT){this.__gT={};}
;if(this.__gT[dX]==dY){return this;}
;if(dY==null){delete this.__gT[dX];}
else {this.__gT[dX]=dY;}
;if(this.__hc){if(ea){qx.bom.element.Style.set(this.__hc,dX,dY);return this;}
;if(!this.__hk){this.__hk={};}
;this.__hk[dX]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;return this;}
,setStyles:function(ec,ee){var ed=qx.bom.element.Style;if(!this.__gT){this.__gT={};}
;if(this.__hc){if(!this.__hk){this.__hk={};}
;for(var eb in ec){var ef=ec[eb];if(this.__gT[eb]==ef){continue;}
;if(ef==null){delete this.__gT[eb];}
else {this.__gT[eb]=ef;}
;if(ee){ed.set(this.__hc,eb,ef);continue;}
;this.__hk[eb]=true;}
;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
else {for(var eb in ec){var ef=ec[eb];if(this.__gT[eb]==ef){continue;}
;if(ef==null){delete this.__gT[eb];}
else {this.__gT[eb]=ef;}
;}
;}
;return this;}
,removeStyle:function(eh,eg){this.setStyle(eh,null,eg);return this;}
,getStyle:function(ei){return this.__gT?this.__gT[ei]:null;}
,getAllStyles:function(){return this.__gT||null;}
,setAttribute:function(ej,ek,em){if(!this.__gU){this.__gU={};}
;if(this.__gU[ej]==ek){return this;}
;if(ek==null){delete this.__gU[ej];}
else {this.__gU[ej]=ek;}
;if(this.__hc){if(em){qx.bom.element.Attribute.set(this.__hc,ej,ek);return this;}
;if(!this.__hl){this.__hl={};}
;this.__hl[ej]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;return this;}
,setAttributes:function(en,eo){for(var ep in en){this.setAttribute(ep,en[ep],eo);}
;return this;}
,removeAttribute:function(er,eq){return this.setAttribute(er,null,eq);}
,getAttribute:function(es){return this.__gU?this.__gU[es]:null;}
,addClass:function(name){var et=((this.getAttribute(o)||M)+bn+name).trim();this.setAttribute(o,et);}
,removeClass:function(name){var eu=this.getAttribute(o);if(eu){this.setAttribute(o,(eu.replace(name,M)).trim());}
;}
,_applyProperty:function(name,ev){}
,_setProperty:function(ew,ex,ey){if(!this.__hn){this.__hn={};}
;if(this.__hn[ew]==ex){return this;}
;if(ex==null){delete this.__hn[ew];}
else {this.__hn[ew]=ex;}
;if(this.__hc){if(ey){this._applyProperty(ew,ex);return this;}
;if(!this.__hm){this.__hm={};}
;this.__hm[ew]=true;qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(L);}
;return this;}
,_removeProperty:function(eA,ez){return this._setProperty(eA,null,ez);}
,_getProperty:function(eC){var eB=this.__hn;if(!eB){return null;}
;var eD=eB[eC];return eD==null?null:eD;}
,addListener:function(eI,eF,self,eE){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(B)){var eG=m+eI+u+W+this+f;this.assertString(eI,eG+S);this.assertFunction(eF,eG+H);if(self!==undefined){this.assertObject(self,K);}
;if(eE!==undefined){this.assertBoolean(eE,j);}
;}
;if(this.__hc){return qx.event.Registration.addListener(this.__hc,eI,eF,self,eE);}
;if(!this.__ho){this.__ho={};}
;if(eE==null){eE=false;}
;var eH=qx.event.Manager.getNextUniqueId();var eJ=eI+(eE?g:c)+eH;this.__ho[eJ]={type:eI,listener:eF,self:self,capture:eE,unique:eH};return eJ;}
,removeListener:function(eR,eL,self,eK){if(this.$$disposed){return null;}
;if(qx.core.Environment.get(B)){var eP=O+eR+u+A+this+f;this.assertString(eR,eP+S);this.assertFunction(eL,eP+H);if(self!==undefined){this.assertObject(self,K);}
;if(eK!==undefined){this.assertBoolean(eK,j);}
;}
;if(this.__hc){if(eL.$$wrapped_callback&&eL.$$wrapped_callback[eR+this.$$hash]){var eM=eL.$$wrapped_callback[eR+this.$$hash];delete eL.$$wrapped_callback[eR+this.$$hash];eL=eM;}
;qx.event.Registration.removeListener(this.__hc,eR,eL,self,eK);}
else {var eN=this.__ho;var eQ;if(eK==null){eK=false;}
;for(var eO in eN){eQ=eN[eO];if(eQ.listener===eL&&eQ.self===self&&eQ.capture===eK&&eQ.type===eR){delete eN[eO];break;}
;}
;}
;return this;}
,removeListenerById:function(eS){if(this.$$disposed){return null;}
;if(this.__hc){qx.event.Registration.removeListenerById(this.__hc,eS);}
else {delete this.__ho[eS];}
;return this;}
,hasListener:function(eU,eT){if(this.$$disposed){return false;}
;if(this.__hc){return qx.event.Registration.hasListener(this.__hc,eU,eT);}
;var eV=this.__ho;var eX;if(eT==null){eT=false;}
;for(var eW in eV){eX=eV[eW];if(eX.capture===eT&&eX.type===eU){return true;}
;}
;return false;}
,getListeners:function(){if(this.$$disposed){return null;}
;if(this.__hc){return qx.event.Registration.getManager(this.__hc).serializeListeners(this.__hc);}
;var eY=[];for(var fb in this.__ho){var fa=this.__ho[fb];eY.push({type:fa.type,handler:fa.listener,self:fa.self,capture:fa.capture});}
;return eY;}
},defer:function(fc){fc.__hB=new qx.util.DeferredCall(fc.flush,fc);}
,destruct:function(){if(this.$$hash){delete qx.html.Element._modified[this.$$hash];delete qx.html.Element._scroll[this.$$hash];}
;var fd=this.__hc;if(fd){qx.event.Registration.getManager(fd).removeAllListeners(fd);fd.$$element=M;delete fd.$$elementObject;fd.$$widget=M;delete fd.$$widgetObject;}
;if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__hr;if(parent&&!parent.$$disposed){parent.remove(this);}
;}
;this._disposeArray(t);this.__gU=this.__gT=this.__ho=this.__hn=this.__hl=this.__hk=this.__hm=this.__hc=this.__hr=this.__hg=this.__hh=null;}
});}
)();
(function(){var a="qx.event.handler.Appear",b="engine.name",c="mshtml",d="disappear",e="appear",f="browser.documentmode";qx.Class.define(a,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(g){qx.core.Object.call(this);this.__dn=g;this.__hC={};qx.event.handler.Appear.__hD[this.$$hash]=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__hD:{},refresh:function(){var h=this.__hD;for(var i in h){h[i].refresh();}
;}
},members:{__dn:null,__hC:null,canHandleEvent:function(k,j){}
,registerEvent:function(o,p,m){var n=qx.core.ObjectRegistry.toHashCode(o)+p;var l=this.__hC;if(l&&!l[n]){l[n]=o;o.$$displayed=o.offsetWidth>0;}
;}
,unregisterEvent:function(t,u,r){var s=qx.core.ObjectRegistry.toHashCode(t)+u;var q=this.__hC;if(!q){return;}
;if(q[s]){delete q[s];}
;}
,refresh:function(){var A=this.__hC;var x;var y=qx.core.Environment.get(b)==c&&qx.core.Environment.get(f)<9;for(var v in A){x=A[v];var w=x.offsetWidth>0;if(!w&&y){w=x.offsetWidth>0;}
;if((!!x.$$displayed)!==w){x.$$displayed=w;var z=qx.event.Registration.createEvent(w?e:d);this.__dn.dispatchEvent(x,z);}
;}
;}
},destruct:function(){this.__dn=this.__hC=null;delete qx.event.handler.Appear.__hD[this.$$hash];}
,defer:function(B){qx.event.Registration.addHandler(B);}
});}
)();
(function(){var a="abstract",b="The context object '",c="qx.debug",d="' for the event '",e="' of '",f="qx.event.dispatch.AbstractBubbling",g="'is already disposed.",h="Missing implementation";qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:a,construct:function(k){this._manager=k;}
,members:{_getParent:function(l){throw new Error(h);}
,canDispatchEvent:function(n,event,m){return event.getBubbles();}
,dispatchEvent:function(q,event,B){var parent=q;var x=this._manager;var t,C;var s;var A,z;var D;var v=[];t=x.getListeners(q,B,true);C=x.getListeners(q,B,false);if(t){v.push(t);}
;if(C){v.push(C);}
;var parent=this._getParent(q);var p=[];var o=[];var r=[];var u=[];while(parent!=null){t=x.getListeners(parent,B,true);if(t){r.push(t);u.push(parent);}
;C=x.getListeners(parent,B,false);if(C){p.push(C);o.push(parent);}
;parent=this._getParent(parent);}
;event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);for(var i=r.length-1;i>=0;i-- ){D=u[i];event.setCurrentTarget(D);s=r[i];for(var j=0,w=s.length;j<w;j++ ){A=s[j];z=A.context||D;if(qx.core.Environment.get(c)){if(z&&z.isDisposed&&z.isDisposed()){this.warn(b+z+d+B+e+D+g);}
;}
;if(!this._manager.isBlacklisted(A.unique)){A.handler.call(z,event);}
;}
;if(event.getPropagationStopped()){return;}
;}
;event.setEventPhase(qx.event.type.Event.AT_TARGET);event.setCurrentTarget(q);for(var i=0,y=v.length;i<y;i++ ){s=v[i];for(var j=0,w=s.length;j<w;j++ ){A=s[j];z=A.context||q;if(qx.core.Environment.get(c)){if(z&&z.isDisposed&&z.isDisposed()){this.warn(b+z+d+B+e+q+g);}
;}
;A.handler.call(z,event);}
;if(event.getPropagationStopped()){return;}
;}
;event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);for(var i=0,y=p.length;i<y;i++ ){D=o[i];event.setCurrentTarget(D);s=p[i];for(var j=0,w=s.length;j<w;j++ ){A=s[j];z=A.context||D;if(qx.core.Environment.get(c)){if(z&&z.isDisposed&&z.isDisposed()){this.warn(b+z+d+B+e+D+g);}
;}
;A.handler.call(z,event);}
;if(event.getPropagationStopped()){return;}
;}
;}
}});}
)();
(function(){var a="qx.event.dispatch.DomBubbling";qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;}
,canDispatchEvent:function(d,event,c){return d.nodeType!==undefined&&event.getBubbles();}
},defer:function(e){qx.event.Registration.addDispatcher(e);}
});}
)();
(function(){var a="os.name",b="opera",c="engine.name",d="qx.event.type.Dom",e="osx";qx.Class.define(d,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(f,g){var g=qx.event.type.Native.prototype._cloneNativeEvent.call(this,f,g);g.shiftKey=f.shiftKey;g.ctrlKey=f.ctrlKey;g.altKey=f.altKey;g.metaKey=f.metaKey;return g;}
,getModifiers:function(){var h=0;var i=this._native;if(i.shiftKey){h|=qx.event.type.Dom.SHIFT_MASK;}
;if(i.ctrlKey){h|=qx.event.type.Dom.CTRL_MASK;}
;if(i.altKey){h|=qx.event.type.Dom.ALT_MASK;}
;if(i.metaKey){h|=qx.event.type.Dom.META_MASK;}
;return h;}
,isCtrlPressed:function(){return this._native.ctrlKey;}
,isShiftPressed:function(){return this._native.shiftKey;}
,isAltPressed:function(){return this._native.altKey;}
,isMetaPressed:function(){return this._native.metaKey;}
,isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(a)==e&&qx.core.Environment.get(c)!=b){return this._native.metaKey;}
else {return this._native.ctrlKey;}
;}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="click",d="middle",e="none",f="contextmenu",g="qx.event.type.Mouse",h="browser.documentmode",i="left",j="right",k="browser.name",l="ie";qx.Class.define(g,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(m,n){var n=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,m,n);n.button=m.button;n.clientX=Math.round(m.clientX);n.clientY=Math.round(m.clientY);n.pageX=m.pageX?Math.round(m.pageX):undefined;n.pageY=m.pageY?Math.round(m.pageY):undefined;n.screenX=Math.round(m.screenX);n.screenY=Math.round(m.screenY);n.wheelDelta=m.wheelDelta;n.wheelDeltaX=m.wheelDeltaX;n.wheelDeltaY=m.wheelDeltaY;n.delta=m.delta;n.deltaX=m.deltaX;n.deltaY=m.deltaY;n.deltaZ=m.deltaZ;n.detail=m.detail;n.axis=m.axis;n.wheelX=m.wheelX;n.wheelY=m.wheelY;n.HORIZONTAL_AXIS=m.HORIZONTAL_AXIS;n.srcElement=m.srcElement;n.target=m.target;return n;}
,__hE:{'0':i,'2':j,'1':d},__hF:{'0':e,'1':i,'2':j,'4':d},__hG:{'1':i,'2':j,'4':d},stop:function(){this.stopPropagation();}
,getButton:function(){switch(this._type){case f:return j;case c:if(qx.core.Environment.get(k)===l&&qx.core.Environment.get(h)<9){return i;}
;default:if(!(qx.core.Environment.get(b)==a&&qx.core.Environment.get(h)<=8)){if(this._native.button===-1){return this.__hF[this._native.buttons]||e;}
;return this.__hE[this._native.button]||e;}
else {return this.__hG[this._native.button]||e;}
;};}
,isLeftPressed:function(){return this.getButton()===i;}
,isMiddlePressed:function(){return this.getButton()===d;}
,isRightPressed:function(){return this.getButton()===j;}
,getRelatedTarget:function(){return this._relatedTarget;}
,getViewportLeft:function(){return Math.round(this._native.clientX);}
,getViewportTop:function(){return Math.round(this._native.clientY);}
,getDocumentLeft:function(){if(this._native.pageX!==undefined){return Math.round(this._native.pageX);}
else if(this._native.srcElement){var o=qx.dom.Node.getWindow(this._native.srcElement);return Math.round(this._native.clientX)+qx.bom.Viewport.getScrollLeft(o);}
else {return Math.round(this._native.clientX)+qx.bom.Viewport.getScrollLeft(window);}
;}
,getDocumentTop:function(){if(this._native.pageY!==undefined){return Math.round(this._native.pageY);}
else if(this._native.srcElement){var p=qx.dom.Node.getWindow(this._native.srcElement);return Math.round(this._native.clientY)+qx.bom.Viewport.getScrollTop(p);}
else {return Math.round(this._native.clientY)+qx.bom.Viewport.getScrollTop(window);}
;}
,getScreenLeft:function(){return Math.round(this._native.screenX);}
,getScreenTop:function(){return Math.round(this._native.screenY);}
}});}
)();
(function(){var a="",b="mouse",c="number",d="touch",e="qx.event.type.Pointer",f="pen",g="string";qx.Class.define(e,{extend:qx.event.type.Mouse,members:{_cloneNativeEvent:function(h,i){i=qx.event.type.Mouse.prototype._cloneNativeEvent.call(this,h,i);i.pointerId=h.pointerId;i.width=h.width;i.height=h.height;i.pressure=h.pressure;i.tiltX=h.tiltX;i.tiltY=h.tiltY;i.pointerType=h.pointerType;i.isPrimary=h.isPrimary;i._original=h._original;i.MSPOINTER_TYPE_MOUSE=h.MSPOINTER_TYPE_MOUSE;i.MSPOINTER_TYPE_PEN=h.MSPOINTER_TYPE_PEN;i.MSPOINTER_TYPE_TOUCH=h.MSPOINTER_TYPE_TOUCH;return i;}
,getDocumentLeft:function(){var x=qx.event.type.Mouse.prototype.getDocumentLeft.call(this);if(x==0&&this.getPointerType()==d&&this._native._original!==undefined){x=Math.round(this._native._original.changedTouches[0].pageX)||0;}
;return x;}
,getDocumentTop:function(){var y=qx.event.type.Mouse.prototype.getDocumentTop.call(this);if(y==0&&this.getPointerType()==d&&this._native._original!==undefined){y=Math.round(this._native._original.changedTouches[0].pageY)||0;}
;return y;}
,getPointerId:function(){return this._native.pointerId||0;}
,getWidth:function(){return this._native.width||0;}
,getHeight:function(){return this._native.height||0;}
,getPressure:function(){return this._native.pressure||0;}
,getTiltX:function(){return this._native.tiltX||0;}
,getTiltY:function(){return this._native.tiltY||0;}
,getOriginalTarget:function(){if(this._native&&this._native._original){var j=this._native._original;try{if(j.type.indexOf(d)==0){if(j.changedTouches[0]){return document.elementFromPoint(j.changedTouches[0].clientX,j.changedTouches[0].clientY);}
;}
;}
catch(k){return qx.bom.Event.getTarget(this._native);}
;return qx.bom.Event.getTarget(j);}
else if(this._native){return qx.bom.Event.getTarget(this._native);}
;return qx.event.type.Mouse.prototype.getOriginalTarget.call(this);}
,getPointerType:function(){if(typeof this._native.pointerType==g){return this._native.pointerType;}
;if(typeof this._native.pointerType==c){if(this._native.pointerType==this._native.MSPOINTER_TYPE_MOUSE){return b;}
;if(this._native.pointerType==this._native.MSPOINTER_TYPE_PEN){return f;}
;if(this._native.pointerType==this._native.MSPOINTER_TYPE_TOUCH){return d;}
;}
;return a;}
,isPrimary:function(){return !!this._native.isPrimary;}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="pointerup",d="dispose",e="useraction",f="mouse",g="pointercancel",h="pointerdown",i="pointermove",j="qx.event.handler.Pointer",k="browser.documentmode",l="qxanonymous";qx.Class.define(j,{extend:qx.event.handler.PointerCore,implement:[qx.event.IEventHandler,qx.core.IDisposable],statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{pointermove:1,pointerover:1,pointerout:1,pointerdown:1,pointerup:1,pointercancel:1,gesturebegin:1,gesturemove:1,gesturefinish:1,gesturecancel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true},construct:function(m){this.__dn=m;this.__cJ=m.getWindow();this.__dD=this.__cJ.document;qx.event.handler.PointerCore.apply(this,[this.__dD]);}
,members:{__dn:null,__cJ:null,__dD:null,canHandleEvent:function(o,n){}
,registerEvent:function(r,q,p){}
,unregisterEvent:function(u,t,s){}
,_initPointerObserver:function(){var v=false;if(qx.core.Environment.get(b)==a&&qx.core.Environment.get(k)<9){v=true;}
;this._initObserver(this._onPointerEvent,v);}
,_fireEvent:function(w,x,y){if(!y){y=qx.bom.Event.getTarget(w);}
;while(y&&y.getAttribute&&y.getAttribute(l)){y=y.parentNode;}
;if(!x){x=w.type;}
;x=qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[x]||x;if(y&&y.nodeType){qx.event.type.dom.Pointer.normalize(w);try{w.srcElement=y;}
catch(z){}
;qx.event.Registration.fireEvent(y,x,qx.event.type.Pointer,[w,y,null,true,true]);if((w.getPointerType()!==f||w.button<=qx.event.handler.PointerCore.LEFT_BUTTON)&&(x==h||x==c||x==i||x==g)){qx.event.Registration.fireEvent(this.__dD,qx.event.handler.PointerCore.POINTER_TO_GESTURE_MAPPING[x],qx.event.type.Pointer,[w,y,null,false,false]);}
;qx.event.Registration.fireEvent(this.__cJ,e,qx.event.type.Data,[x]);}
;}
,_onPointerEvent:function(A){if(A._original&&A._original[this._processedFlag]){return;}
;var B=qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[A.type]||A.type;this._fireEvent(A,B,qx.bom.Event.getTarget(A));}
,dispose:function(){this.__hH(d);this.__dn=this.__cJ=this.__dD=null;}
,__hH:function(D,C){qx.event.handler.PointerCore.prototype[D].apply(this,C||[]);}
},defer:function(E){qx.event.Registration.addHandler(E);qx.event.Registration.getManager(document).getHandler(E);}
});}
)();
(function(){var a="qx.event.type.Tap";qx.Class.define(a,{extend:qx.event.type.Pointer});}
)();
(function(){var a="qx.event.type.Track";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.delta=b.delta;return c;}
,getDelta:function(){return this._native.delta;}
}});}
)();
(function(){var a="qx.event.type.Swipe";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.swipe=b.swipe;return c;}
,getStartTime:function(){return this._native.swipe.startTime;}
,getDuration:function(){return this._native.swipe.duration;}
,getAxis:function(){return this._native.swipe.axis;}
,getDirection:function(){return this._native.swipe.direction;}
,getVelocity:function(){return this._native.swipe.velocity;}
,getDistance:function(){return this._native.swipe.distance;}
}});}
)();
(function(){var a="qx.event.type.Rotate";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.angle=b.angle;return c;}
,getAngle:function(){return this._native.angle;}
}});}
)();
(function(){var a="qx.event.type.Roll";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{stop:function(){this.stopPropagation();this.preventDefault();}
,_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.delta=b.delta;c.momentum=b.momentum;c.timeoutId=b.timeoutId;return c;}
,getMomentum:function(){return this._native.momentum;}
,stopMomentum:function(){if(this._native.timeoutId){qx.event.Registration.getManager(this._originalTarget).getHandler(qx.event.handler.Gesture).stopMomentum(this._native.timeoutId);}
;}
,getDelta:function(){return this._native.delta;}
}});}
)();
(function(){var a="qx.event.type.Pinch";qx.Class.define(a,{extend:qx.event.type.Pointer,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Pointer.prototype._cloneNativeEvent.call(this,b,c);c.scale=b.scale;return c;}
,getScale:function(){return this._native.scale;}
}});}
)();
(function(){var a="swipe",b="pinch",c="event.dispatchevent",d="gesturemove",e="touch",f="longtap",g="event.mousewheel",h="roll",i="dblclick",j="wheel",k="rotate",l="trackstart",m="gesturefinish",n="y",o="browser.documentmode",p="dbltap",q="qx.event.handler.GestureCore",r="right",s="mshtml",t="engine.name",u="gesturecancel",v="gesturebegin",w="track",z="trackend",A="left",B="tap",C="down",D="x",E="up";qx.Bootstrap.define(q,{extend:Object,implement:[qx.core.IDisposable],statics:{TYPES:[B,a,f,p,w,l,z,k,b,h],GESTURE_EVENTS:[v,m,d,u],TAP_MAX_DISTANCE:{"touch":40,"mouse":5,"pen":20},DOUBLETAP_MAX_DISTANCE:{"touch":10,"mouse":4,"pen":10},SWIPE_DIRECTION:{x:[A,r],y:[E,C]},LONGTAP_TIME:500,DOUBLETAP_TIME:500,ROLL_FACTOR:18},construct:function(F,G){this.__gf=F;this.__gg=G;this.__hI={};this.__hJ={};this.__hK={};this.__hL={};this._initObserver();}
,members:{__gf:null,__gg:null,__hI:null,__hM:null,__hN:null,__hO:null,__hP:null,__hJ:null,__hQ:null,__hK:null,__hR:null,__hL:null,_initObserver:function(){qx.event.handler.GestureCore.GESTURE_EVENTS.forEach(function(I){qxWeb(this.__gf).on(I,this.checkAndFireGesture,this);}
.bind(this));if(qx.core.Environment.get(t)==s&&qx.core.Environment.get(o)<9){qxWeb(this.__gf).on(i,this._onDblClick,this);}
;var H=qx.core.Environment.get(g);qxWeb(H.target).on(H.type,this._fireRoll,this);}
,_stopObserver:function(){qx.event.handler.GestureCore.GESTURE_EVENTS.forEach(function(K){qxWeb(this.__gf).off(K,this.checkAndFireGesture,this);}
.bind(this));if(qx.core.Environment.get(t)==s&&qx.core.Environment.get(o)<9){qxWeb(this.__gf).off(i,this._onDblClick,this);}
;var J=qx.core.Environment.get(g);qxWeb(J.target).off(J.type,this._fireRoll,this);}
,checkAndFireGesture:function(L,M,N){if(!M){M=L.type;}
;if(!N){N=qx.bom.Event.getTarget(L);}
;if(M==v){this.gestureBegin(L,N);}
else if(M==d){this.gestureMove(L,N);}
else if(M==m){this.gestureFinish(L,N);}
else if(M==u){this.gestureCancel(L.pointerId);}
;}
,gestureBegin:function(O,P){if(this.__hI[O.pointerId]){this.__ia(this.__hI[O.pointerId]);delete this.__hI[O.pointerId];}
;if(this._hasIntermediaryHandler(P)){return;}
;this.__hI[O.pointerId]={"startTime":new Date().getTime(),"lastEventTime":new Date().getTime(),"startX":O.clientX,"startY":O.clientY,"clientX":O.clientX,"clientY":O.clientY,"velocityX":0,"velocityY":0,"target":P,"isTap":true,"isPrimary":O.isPrimary,"longTapTimer":window.setTimeout(this.__hY.bind(this,O,P),qx.event.handler.GestureCore.LONGTAP_TIME)};if(O.isPrimary){this.__hO=false;this.__hN=P;this.__hV(l,O,P);}
else {this.__hO=true;if(Object.keys(this.__hI).length===2){this.__hP=this._calcAngle();this.__hR=this._calcDistance();}
;}
;}
,gestureMove:function(R,S){var T=this.__hI[R.pointerId];if(T){var Q=T.clientX;var U=T.clientY;T.clientX=R.clientX;T.clientY=R.clientY;T.lastEventTime=new Date().getTime();if(Q){T.velocityX=T.clientX-Q;}
;if(U){T.velocityY=T.clientY-U;}
;if(Object.keys(this.__hI).length===2){this.__hW(R,T.target);this.__hX(R,T.target);}
;if(!this.__hO){this.__hV(w,R,T.target);this._fireRoll(R,e,T.target);}
;if(T.isTap){T.isTap=this._isBelowTapMaxDistance(R);if(!T.isTap){this.__ia(T);}
;}
;}
;}
,_hasIntermediaryHandler:function(V){while(V&&V!==this.__gf){if(V.$$gestureHandler){return true;}
;V=V.parentNode;}
;return false;}
,gestureFinish:function(X,Y){if(!this.__hI[X.pointerId]){return;}
;var bf=this.__hI[X.pointerId];this.__ia(bf);if(this._hasIntermediaryHandler(Y)){return;}
;this.__hS(bf.velocityX,bf.velocityY,X,bf.target);this.__hV(z,X,bf.target);if(bf.isTap){if(Y!==bf.target){delete this.__hI[X.pointerId];return;}
;this._fireEvent(X,B,X.target||Y);var ba=false;if(Object.keys(this.__hJ).length>0){var be=Date.now()-qx.event.handler.GestureCore.DOUBLETAP_TIME;for(var bg in this.__hJ){if(bg<be){delete this.__hJ[bg];}
else {var W=this.__hJ[bg];var bc=this.__hT(W.x,W.y,X.clientX,X.clientY,X.getPointerType());var bd=W.target===(X.target||Y);var bh=W.button===X.button;if(bc&&bh&&bd){ba=true;delete this.__hJ[bg];this._fireEvent(X,p,X.target||Y);}
;}
;}
;}
;if(!ba){this.__hJ[Date.now()]={x:X.clientX,y:X.clientY,target:X.target||Y,button:X.button};}
;}
else if(!this._isBelowTapMaxDistance(X)){var bb=this.__hU(X,Y);if(bb){X.swipe=bb;this._fireEvent(X,a,bf.target||Y);}
;}
;delete this.__hI[X.pointerId];}
,stopMomentum:function(bi){this.__hK[bi]=true;}
,gestureCancel:function(bj){if(this.__hI[bj]){this.__ia(this.__hI[bj]);delete this.__hI[bj];}
;if(this.__hL[bj]){this.stopMomentum(this.__hL[bj]);delete this.__hL[bj];}
;}
,updateGestureTarget:function(bk,bl){this.__hI[bk].target=bl;}
,__hS:function(bq,br,bn,bo,bt){var bs=bn.timeoutId;if(!bt&&this.__hL[bn.pointerId]){this.stopMomentum(this.__hL[bn.pointerId]);}
;if((Math.abs(br)<1&&Math.abs(bq)<1)||this.__hK[bs]||!this.getWindow()){delete this.__hK[bs];delete this.__hL[bn.pointerId];return;}
;if(!bt){bt=1;var bp=2.8;br=br/bp;bq=bq/bp;}
;bt+=0.0006;br=br/bt;bq=bq/bt;var bm=qx.bom.AnimationFrame.request(qx.lang.Function.bind(function(bu,bv,bw,bx,by){this.__hS(bu,bv,bw,bx,by);}
,this,bq,br,bn,bo,bt));bq=Math.round(bq*100)/100;br=Math.round(br*100)/100;bn.delta={x:-bq,y:-br};bn.momentum=true;bn.timeoutId=bm;this.__hL[bn.pointerId]=bm;this._fireEvent(bn,h,bn.target||bo);}
,_calcAngle:function(){var bA=null;var bB=null;for(var bz in this.__hI){var bC=this.__hI[bz];if(bA===null){bA=bC;}
else {bB=bC;}
;}
;var x=bA.clientX-bB.clientX;var y=bA.clientY-bB.clientY;return (360+Math.atan2(y,x)*(180/Math.PI))%360;}
,_calcDistance:function(){var bD=null;var bE=null;for(var bG in this.__hI){var bH=this.__hI[bG];if(bD===null){bD=bH;}
else {bE=bH;}
;}
;var bF=Math.sqrt(Math.pow(bD.clientX-bE.clientX,2)+Math.pow(bD.clientY-bE.clientY,2));return bF;}
,_isBelowTapMaxDistance:function(bJ){var bK=this._getDeltaCoordinates(bJ);var bI=qx.event.handler.GestureCore.TAP_MAX_DISTANCE[bJ.getPointerType()];if(!bK){return null;}
;return (Math.abs(bK.x)<=bI&&Math.abs(bK.y)<=bI);}
,__hT:function(bL,bP,bQ,bR,bS){var bO=qx.event.handler.GestureCore;var bM=Math.abs(bL-bQ)<bO.DOUBLETAP_MAX_DISTANCE[bS];var bN=Math.abs(bP-bR)<bO.DOUBLETAP_MAX_DISTANCE[bS];return bM&&bN;}
,_getDeltaCoordinates:function(bV){var bW=this.__hI[bV.pointerId];if(!bW){return null;}
;var bT=bV.clientX-bW.startX;var bU=bV.clientY-bW.startY;var bX=D;if(Math.abs(bT/bU)<1){bX=n;}
;return {"x":bT,"y":bU,"axis":bX};}
,_fireEvent:function(ca,cc,cb){if(!this.__gf){return;}
;var bY;if(qx.core.Environment.get(c)){bY=new qx.event.type.dom.Custom(cc,ca,{bubbles:true,swipe:ca.swipe,scale:ca.scale,angle:ca.angle,delta:ca.delta,pointerType:ca.pointerType,momentum:ca.momentum});cb.dispatchEvent(bY);}
else if(this.__gg){bY=new qx.event.type.dom.Custom(cc,ca,{target:this.__gf,currentTarget:this.__gf,srcElement:this.__gf,swipe:ca.swipe,scale:ca.scale,angle:ca.angle,delta:ca.delta,pointerType:ca.pointerType,momentum:ca.momentum});this.__gg.emit(cc,ca);}
;}
,_onDblClick:function(cd){var ce=qx.bom.Event.getTarget(cd);this._fireEvent(cd,B,ce);this._fireEvent(cd,p,ce);}
,__hU:function(ch,ci){var co=this.__hI[ch.pointerId];if(!co){return null;}
;var ck=qx.event.handler.GestureCore;var cn=this._getDeltaCoordinates(ch);var cl=new Date().getTime()-co.startTime;var cp=(Math.abs(cn.x)>=Math.abs(cn.y))?D:n;var cf=cn[cp];var cg=ck.SWIPE_DIRECTION[cp][cf<0?0:1];var cm=(cl!==0)?cf/cl:0;var cj={startTime:co.startTime,duration:cl,axis:cp,direction:cg,distance:cf,velocity:cm};return cj;}
,__hV:function(cq,cr,cs){cr.delta=this._getDeltaCoordinates(cr);this._fireEvent(cr,cq,cr.target||cs);}
,_fireRoll:function(cu,ct,cv){if(cu.type===qx.core.Environment.get(g).type){cu.delta={x:qx.util.Wheel.getDelta(cu,D)*qx.event.handler.GestureCore.ROLL_FACTOR,y:qx.util.Wheel.getDelta(cu,n)*qx.event.handler.GestureCore.ROLL_FACTOR};cu.delta.axis=Math.abs(cu.delta.x/cu.delta.y)<1?n:D;cu.pointerType=j;}
else {var cw=this.__hI[cu.pointerId];cu.delta={x:-cw.velocityX,y:-cw.velocityY,axis:Math.abs(cw.velocityX/cw.velocityY)<1?n:D};}
;this._fireEvent(cu,h,cu.target||cv);}
,__hW:function(cx,cz){if(!cx.isPrimary){var cy=this._calcAngle();cx.angle=Math.round((cy-this.__hP)%360);this._fireEvent(cx,k,this.__hN);}
;}
,__hX:function(cC,cD){if(!cC.isPrimary){var cA=this._calcDistance();var cB=cA/this.__hR;cC.scale=(Math.round(cB*100)/100);this._fireEvent(cC,b,this.__hN);}
;}
,__hY:function(cE,cF){var cG=this.__hI[cE.pointerId];if(cG){this._fireEvent(cE,f,cE.target||cF);cG.longTapTimer=null;cG.isTap=false;}
;}
,__ia:function(cH){if(cH.longTapTimer){window.clearTimeout(cH.longTapTimer);cH.longTapTimer=null;}
;}
,dispose:function(){for(var cI in this.__hI){this.__ia(cI);}
;this._stopObserver();this.__gf=this.__gg=null;}
}});}
)();
(function(){var a="x",b="y",c="qx.util.Wheel";qx.Bootstrap.define(c,{statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1,getDelta:function(e,d){if(d===undefined){var f=0;if(e.wheelDelta!==undefined){f=-e.wheelDelta;}
else if(e.detail!==0){f=e.detail;}
else if(e.deltaY!==undefined){f=e.deltaY;}
;return this.__ib(f);}
;if(d===a){var x=0;if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__ib(-e.wheelDeltaX):0;}
;}
else {if(e.axis&&e.axis==e.HORIZONTAL_AXIS&&(e.detail!==undefined)&&(e.detail>0)){x=this.__ib(e.detail);}
else if(e.deltaX!==undefined){x=this.__ib(e.deltaX);}
;}
;return x;}
;if(d===b){var y=0;if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__ib(-e.wheelDeltaY):0;}
else {y=this.__ib(-e.wheelDelta);}
;}
else {if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)&&(e.detail!==undefined)&&(e.detail>0)){y=this.__ib(e.detail);}
else if(e.deltaY!==undefined){y=this.__ib(e.deltaY);}
;}
;return y;}
;return 0;}
,__ib:function(j){var g=Math.abs(j);if(g===0){return 0;}
;if(qx.util.Wheel.MINSCROLL==null||qx.util.Wheel.MINSCROLL>g){qx.util.Wheel.MINSCROLL=g;this.__ic();}
;if(qx.util.Wheel.MAXSCROLL==null||qx.util.Wheel.MAXSCROLL<g){qx.util.Wheel.MAXSCROLL=g;this.__ic();}
;if(qx.util.Wheel.MAXSCROLL===g&&qx.util.Wheel.MINSCROLL===g){return 2*(j/g);}
;var h=qx.util.Wheel.MAXSCROLL-qx.util.Wheel.MINSCROLL;var i=(j/h)*Math.log(h)*qx.util.Wheel.FACTOR;return i<0?Math.min(i,-1):Math.max(i,1);}
,__ic:function(){var k=qx.util.Wheel.MAXSCROLL||0;var n=qx.util.Wheel.MINSCROLL||k;if(k<=n){return;}
;var l=k-n;var m=(k/l)*Math.log(l);if(m==0){m=1;}
;qx.util.Wheel.FACTOR=6/m;}
}});}
)();
(function(){var a="dblclick",b="mshtml",c="engine.name",d="dispose",e="useraction",f="gesturemove",g="gesturecancel",h="checkAndFireGesture",i="gesturebegin",j="qx.event.handler.Gesture",k="gesturefinish",l="browser.documentmode";qx.Class.define(j,{extend:qx.event.handler.GestureCore,implement:[qx.event.IEventHandler,qx.core.IDisposable],statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{tap:1,swipe:1,longtap:1,dbltap:1,rotate:1,pinch:1,track:1,trackstart:1,trackend:1,roll:1},GESTURE_EVENTS:[i,k,f,g],TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,EVENT_CLASSES:{"tap":qx.event.type.Tap,"longtap":qx.event.type.Tap,"dbltap":qx.event.type.Tap,"swipe":qx.event.type.Swipe,"rotate":qx.event.type.Rotate,"pinch":qx.event.type.Pinch,"track":qx.event.type.Track,"trackstart":qx.event.type.Track,"trackend":qx.event.type.Track,"roll":qx.event.type.Roll}},construct:function(m){this.__dn=m;this.__cJ=m.getWindow();this.__dD=this.__cJ.document;qx.event.handler.GestureCore.apply(this,[this.__dD]);}
,members:{__dn:null,__cJ:null,__dD:null,__fY:null,__id:null,__ie:null,getWindow:function(){return this.__cJ;}
,canHandleEvent:function(o,n){}
,registerEvent:function(r,q,p){}
,unregisterEvent:function(u,t,s){}
,_initObserver:function(){this.__fY=qx.lang.Function.listener(this.checkAndFireGesture,this);qx.event.handler.Gesture.GESTURE_EVENTS.forEach(function(w){qx.event.Registration.addListener(this.__dD,w,this.__fY,this);}
.bind(this));if(qx.core.Environment.get(c)==b&&qx.core.Environment.get(l)<9){this.__id=qx.lang.Function.listener(this._onDblClick,this);qx.bom.Event.addNativeListener(this.__dD,a,this.__id);}
;var v=qx.bom.client.Event.getMouseWheel(this.__cJ);this.__ie=qx.lang.Function.listener(this._fireRoll,this);qx.bom.Event.addNativeListener(v.target,v.type,this.__ie,this);}
,checkAndFireGesture:function(y,x,z){this.__hH(h,[y.getNativeEvent(),y.getType(),y.getTarget()]);}
,_stopObserver:function(){qx.event.handler.Gesture.GESTURE_EVENTS.forEach(function(B){qx.event.Registration.removeListener(this.__dD,B,this.__fY);}
.bind(this));if(qx.core.Environment.get(c)==b&&qx.core.Environment.get(l)<9){qx.bom.Event.removeNativeListener(this.__dD,a,this.__id);}
;var A=qx.bom.client.Event.getMouseWheel(this.__cJ);qx.bom.Event.removeNativeListener(A.target,A.type,this.__ie);}
,_hasIntermediaryHandler:function(C){return false;}
,_fireEvent:function(E,D,F){if(!F){F=qx.bom.Event.getTarget(E);}
;if(!D){D=E.type;}
;var G=qx.event.handler.Gesture.EVENT_CLASSES[D]||qx.event.type.Pointer;if(F&&F.nodeType){qx.event.Registration.fireEvent(F,D,G,[E,F,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cJ,e,qx.event.type.Data,[D]);}
,dispose:function(){this._stopObserver();this.__hH(d);this.__dn=this.__cJ=this.__dD=this.__id=null;}
,__hH:function(I,H){qx.event.handler.GestureCore.prototype[I].apply(this,H||[]);}
},defer:function(J){qx.event.Registration.addHandler(J);qx.event.Registration.getManager(document).getHandler(J);}
});}
)();
(function(){var a="-",b="qx.event.handler.Element",c="load",d="iframe";qx.Class.define(b,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(e){qx.core.Object.call(this);this._manager=e;this._registeredEvents={};}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(g,f){if(f===c){return g.tagName.toLowerCase()!==d;}
else {return true;}
;}
,registerEvent:function(j,l,i){var m=qx.core.ObjectRegistry.toHashCode(j);var h=m+a+l;var k=qx.lang.Function.listener(this._onNative,this,h);qx.bom.Event.addNativeListener(j,l,k);this._registeredEvents[h]={element:j,type:l,listener:k};}
,unregisterEvent:function(p,r,o){var s=this._registeredEvents;if(!s){return;}
;var t=qx.core.ObjectRegistry.toHashCode(p);var n=t+a+r;var q=this._registeredEvents[n];if(q){qx.bom.Event.removeNativeListener(p,r,q.listener);}
;delete this._registeredEvents[n];}
,_onNative:qx.event.GlobalError.observeMethod(function(v,u){var w=this._registeredEvents;if(!w){return;}
;var y=w[u];var x=this.constructor.CANCELABLE[y.type];qx.event.Registration.fireNonBubblingEvent(y.element,y.type,qx.event.type.Native,[v,undefined,undefined,undefined,x]);}
)},destruct:function(){var z;var A=this._registeredEvents;for(var B in A){z=A[B];qx.bom.Event.removeNativeListener(z.element,z.type,z.listener);}
;this._manager=this._registeredEvents=null;}
,defer:function(C){qx.event.Registration.addHandler(C);}
});}
)();
(function(){var a="qx.event.handler.UserAction";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);this.__dn=b;this.__cJ=b.getWindow();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dn:null,__cJ:null,canHandleEvent:function(d,c){}
,registerEvent:function(g,f,e){}
,unregisterEvent:function(j,i,h){}
},destruct:function(){this.__dn=this.__cJ=null;}
,defer:function(k){qx.event.Registration.addHandler(k);}
});}
)();
(function(){var a="dblclick",b="os.name",c="mouseup",d="mousedown",e="useraction",f="webkit",g="contextmenu",h="mousewheel",i="engine.name",j="mouseover",k="mouseout",l="gecko",m="ios",n="click",o="mousemove",p="qx.event.handler.Mouse",q="on";qx.Class.define(p,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(r){qx.core.Object.call(this);this.__dn=r;this.__cJ=r.getWindow();this.__dD=this.__cJ.document;this._initButtonObserver();this._initMoveObserver();this._initWheelObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__if:null,__ig:null,__ih:null,__ii:null,__ij:null,__dn:null,__cJ:null,__dD:null,__ik:null,canHandleEvent:function(t,s){}
,registerEvent:qx.core.Environment.get(b)===m?function(w,v,u){w[q+v]=(function(){return null;}
);}
:(function(){return null;}
),unregisterEvent:qx.core.Environment.get(b)===m?function(z,y,x){z[q+y]=undefined;}
:(function(){return null;}
),__il:function(A,B,C){if(!C){C=qx.bom.Event.getTarget(A);}
;if(C&&C.nodeType){qx.event.Registration.fireEvent(C,B||A.type,B==h?qx.event.type.MouseWheel:qx.event.type.Mouse,[A,C,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cJ,e,qx.event.type.Data,[B||A.type]);}
,preventNextClick:function(){this.__ik=true;}
,_initButtonObserver:function(){this.__if=qx.lang.Function.listener(this._onButtonEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dD,d,this.__if);Event.addNativeListener(this.__dD,c,this.__if);Event.addNativeListener(this.__dD,n,this.__if);Event.addNativeListener(this.__dD,a,this.__if);Event.addNativeListener(this.__dD,g,this.__if);}
,_initMoveObserver:function(){this.__ig=qx.lang.Function.listener(this._onMoveEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dD,o,this.__ig);Event.addNativeListener(this.__dD,j,this.__ig);Event.addNativeListener(this.__dD,k,this.__ig);}
,_initWheelObserver:function(){this.__ih=qx.lang.Function.listener(this._onWheelEvent,this);var D=qx.bom.client.Event.getMouseWheel(this.__cJ);qx.bom.Event.addNativeListener(D.target,D.type,this.__ih);}
,_stopButtonObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dD,d,this.__if);Event.removeNativeListener(this.__dD,c,this.__if);Event.removeNativeListener(this.__dD,n,this.__if);Event.removeNativeListener(this.__dD,a,this.__if);Event.removeNativeListener(this.__dD,g,this.__if);}
,_stopMoveObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dD,o,this.__ig);Event.removeNativeListener(this.__dD,j,this.__ig);Event.removeNativeListener(this.__dD,k,this.__ig);}
,_stopWheelObserver:function(){var E=qx.bom.client.Event.getMouseWheel(this.__cJ);qx.bom.Event.removeNativeListener(E.target,E.type,this.__ih);}
,_onMoveEvent:qx.event.GlobalError.observeMethod(function(F){this.__il(F);}
),_onButtonEvent:qx.event.GlobalError.observeMethod(function(I){var H=I.type;var J=qx.bom.Event.getTarget(I);if(H==n&&this.__ik){delete this.__ik;return;}
;if(qx.core.Environment.get(i)==l||qx.core.Environment.get(i)==f){if(J&&J.nodeType==3){J=J.parentNode;}
;}
;var G=qx.event.handler.DragDrop&&this.__dn.getHandler(qx.event.handler.DragDrop).isSessionActive();if(G&&H==n){return;}
;if(this.__in){this.__in(I,H,J);}
;this.__il(I,H,J);if(this.__im){this.__im(I,H,J);}
;if(this.__io&&!G){this.__io(I,H,J);}
;this.__ii=H;}
),_onWheelEvent:qx.event.GlobalError.observeMethod(function(K){this.__il(K,h);}
),__im:qx.core.Environment.select(i,{"opera":function(L,M,N){if(M==c&&L.button==2){this.__il(L,g,N);}
;}
,"default":null}),__in:qx.core.Environment.select(i,{"mshtml":function(O,P,Q){if(O.target!==undefined){return;}
;if(P==c&&this.__ii==n){this.__il(O,d,Q);}
else if(P==a){this.__il(O,n,Q);}
;}
,"default":null}),__io:qx.core.Environment.select(i,{"mshtml":null,"default":function(S,R,T){switch(R){case d:this.__ij=T;break;case c:if(T!==this.__ij){var U=qx.dom.Hierarchy.getCommonParent(T,this.__ij);if(U){this.__il(S,n,U);}
;}
;};}
})},destruct:function(){this._stopButtonObserver();this._stopMoveObserver();this._stopWheelObserver();this.__dn=this.__cJ=this.__dD=this.__ij=null;}
,defer:function(V){qx.event.Registration.addHandler(V);}
});}
)();
(function(){var a="qx.event.type.MouseWheel";qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();this.preventDefault();}
,getWheelDelta:function(b){return qx.util.Wheel.getDelta(this._native,b);}
}});}
)();
(function(){var a="qx.dom.Hierarchy",b="previousSibling",c="html.element.contains",d="html.element.compareDocumentPosition",e="nextSibling",f="parentNode",g="*";qx.Bootstrap.define(a,{statics:{getNodeIndex:function(h){var i=0;while(h&&(h=h.previousSibling)){i++ ;}
;return i;}
,getElementIndex:function(l){var j=0;var k=qx.dom.Node.ELEMENT;while(l&&(l=l.previousSibling)){if(l.nodeType==k){j++ ;}
;}
;return j;}
,getNextElementSibling:function(m){while(m&&(m=m.nextSibling)&&!qx.dom.Node.isElement(m)){continue;}
;return m||null;}
,getPreviousElementSibling:function(n){while(n&&(n=n.previousSibling)&&!qx.dom.Node.isElement(n)){continue;}
;return n||null;}
,contains:function(q,p){if(qx.core.Environment.get(c)){if(qx.dom.Node.isDocument(q)){var o=qx.dom.Node.getDocument(p);return q&&o==q;}
else if(qx.dom.Node.isDocument(p)){return false;}
else {return q.contains(p);}
;}
else if(qx.core.Environment.get(d)){return !!(q.compareDocumentPosition(p)&16);}
else {while(p){if(q==p){return true;}
;p=p.parentNode;}
;return false;}
;}
,isRendered:function(s){var r=s.ownerDocument||s.document;if(qx.core.Environment.get(c)){if(!s.parentNode){return false;}
;return r.body.contains(s);}
else if(qx.core.Environment.get(d)){return !!(r.compareDocumentPosition(s)&16);}
else {while(s){if(s==r.body){return true;}
;s=s.parentNode;}
;return false;}
;}
,isDescendantOf:function(u,t){return this.contains(t,u);}
,getCommonParent:function(w,x){if(w===x){return w;}
;if(qx.core.Environment.get(c)){while(w&&qx.dom.Node.isElement(w)){if(w.contains(x)){return w;}
;w=w.parentNode;}
;return null;}
else {var v=[];while(w||x){if(w){if(qx.lang.Array.contains(v,w)){return w;}
;v.push(w);w=w.parentNode;}
;if(x){if(qx.lang.Array.contains(v,x)){return x;}
;v.push(x);x=x.parentNode;}
;}
;return null;}
;}
,getAncestors:function(y){return this._recursivelyCollect(y,f);}
,getChildElements:function(A){A=A.firstChild;if(!A){return [];}
;var z=this.getNextSiblings(A);if(A.nodeType===1){z.unshift(A);}
;return z;}
,getDescendants:function(B){return qx.lang.Array.fromCollection(B.getElementsByTagName(g));}
,getFirstDescendant:function(C){C=C.firstChild;while(C&&C.nodeType!=1){C=C.nextSibling;}
;return C;}
,getLastDescendant:function(D){D=D.lastChild;while(D&&D.nodeType!=1){D=D.previousSibling;}
;return D;}
,getPreviousSiblings:function(E){return this._recursivelyCollect(E,b);}
,getNextSiblings:function(F){return this._recursivelyCollect(F,e);}
,_recursivelyCollect:function(I,G){var H=[];while(I=I[G]){if(I.nodeType==1){H.push(I);}
;}
;return H;}
,getSiblings:function(J){return this.getPreviousSiblings(J).reverse().concat(this.getNextSiblings(J));}
,isEmpty:function(K){K=K.firstChild;while(K){if(K.nodeType===qx.dom.Node.ELEMENT||K.nodeType===qx.dom.Node.TEXT){return false;}
;K=K.nextSibling;}
;return true;}
,cleanWhitespace:function(N){var L=N.firstChild;while(L){var M=L.nextSibling;if(L.nodeType==3&&!/\S/.test(L.nodeValue)){N.removeChild(L);}
;L=M;}
;}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="keypress",d="useraction",e="win",f="text",g="keyinput",h="os.name",i="webkit",j="input",k="gecko",l="off",m="keydown",n="autoComplete",o="keyup",p="qx.event.handler.Keyboard";qx.Class.define(p,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(q){qx.core.Object.call(this);this.__dn=q;this.__cJ=q.getWindow();if((qx.core.Environment.get(b)==k)){this.__dD=this.__cJ;}
else {this.__dD=this.__cJ.document.documentElement;}
;this.__ip={};this._initKeyObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__iq:null,__dn:null,__cJ:null,__dD:null,__ip:null,__ir:null,__is:null,__it:null,canHandleEvent:function(s,r){}
,registerEvent:function(v,u,t){}
,unregisterEvent:function(y,x,w){}
,_fireInputEvent:function(A,z){var B=this.__iu();if(B&&B.offsetWidth!=0){var event=qx.event.Registration.createEvent(g,qx.event.type.KeyInput,[A,B,z]);this.__dn.dispatchEvent(B,event);}
;if(this.__cJ){qx.event.Registration.fireEvent(this.__cJ,d,qx.event.type.Data,[g]);}
;}
,_fireSequenceEvent:function(D,F,C){var E=this.__iu();var G=D.keyCode;var event=qx.event.Registration.createEvent(F,qx.event.type.KeySequence,[D,E,C]);this.__dn.dispatchEvent(E,event);if(qx.core.Environment.get(b)==a||qx.core.Environment.get(b)==i){if(F==m&&event.getDefaultPrevented()){if(!qx.event.util.Keyboard.isNonPrintableKeyCode(G)&&!this._emulateKeyPress[G]){this._fireSequenceEvent(D,c,C);}
;}
;}
;if(this.__cJ){qx.event.Registration.fireEvent(this.__cJ,d,qx.event.type.Data,[F]);}
;}
,__iu:function(){var H=this.__dn.getHandler(qx.event.handler.Focus);var I=H.getActive();if(!I||I.offsetWidth==0){I=H.getFocus();}
;if(!I||I.offsetWidth==0){I=this.__dn.getWindow().document.body;}
;return I;}
,_initKeyObserver:function(){this.__iq=qx.lang.Function.listener(this.__iv,this);this.__it=qx.lang.Function.listener(this.__ix,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dD,o,this.__iq);Event.addNativeListener(this.__dD,m,this.__iq);Event.addNativeListener(this.__dD,c,this.__it);}
,_stopKeyObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dD,o,this.__iq);Event.removeNativeListener(this.__dD,m,this.__iq);Event.removeNativeListener(this.__dD,c,this.__it);for(var K in (this.__is||{})){var J=this.__is[K];Event.removeNativeListener(J.target,c,J.callback);}
;delete (this.__is);}
,__iv:qx.event.GlobalError.observeMethod(qx.core.Environment.select(b,{"mshtml":function(N){N=window.event||N;var O=N.keyCode;var M=0;var L=N.type;if(!(this.__ip[O]==m&&L==m)){this._idealKeyHandler(O,M,L,N);}
;if(L==m){if(qx.event.util.Keyboard.isNonPrintableKeyCode(O)||this._emulateKeyPress[O]){this._idealKeyHandler(O,M,c,N);}
;}
;this.__ip[O]=L;}
,"gecko":function(Q){var S=0;var U=Q.keyCode;var T=Q.type;var R=qx.event.util.Keyboard;if(qx.core.Environment.get(h)==e){var P=U?R.keyCodeToIdentifier(U):R.charCodeToIdentifier(S);if(!(this.__ip[P]==m&&T==m)){this._idealKeyHandler(U,S,T,Q);}
;this.__ip[P]=T;}
else {this._idealKeyHandler(U,S,T,Q);}
;this.__iw(Q.target,T,U);}
,"webkit":function(X){var Y=0;var W=0;var V=X.type;Y=X.keyCode;this._idealKeyHandler(Y,W,V,X);if(V==m){if(qx.event.util.Keyboard.isNonPrintableKeyCode(Y)||this._emulateKeyPress[Y]){this._idealKeyHandler(Y,W,c,X);}
;}
;this.__ip[Y]=V;}
,"opera":function(ba){this.__ir=ba.keyCode;this._idealKeyHandler(ba.keyCode,0,ba.type,ba);}
})),__iw:qx.core.Environment.select(b,{"gecko":function(bc,be,bf){if(be===m&&(bf==33||bf==34||bf==38||bf==40)&&bc.type==f&&bc.tagName.toLowerCase()===j&&bc.getAttribute(n)!==l){if(!this.__is){this.__is={};}
;var bb=qx.core.ObjectRegistry.toHashCode(bc);if(this.__is[bb]){return;}
;var self=this;this.__is[bb]={target:bc,callback:function(bg){qx.bom.Event.stopPropagation(bg);self.__ix(bg);}
};var bd=qx.event.GlobalError.observeMethod(this.__is[bb].callback);qx.bom.Event.addNativeListener(bc,c,bd);}
;}
,"default":null}),__ix:qx.event.GlobalError.observeMethod(qx.core.Environment.select(b,{"mshtml":function(bh){bh=window.event||bh;if(this._charCode2KeyCode[bh.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bh.keyCode],0,bh.type,bh);}
else {this._idealKeyHandler(0,bh.keyCode,bh.type,bh);}
;}
,"gecko":function(bi){var bj=bi.charCode;var bk=bi.type;this._idealKeyHandler(bi.keyCode,bj,bk,bi);}
,"webkit":function(bl){if(this._charCode2KeyCode[bl.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bl.keyCode],0,bl.type,bl);}
else {this._idealKeyHandler(0,bl.keyCode,bl.type,bl);}
;}
,"opera":function(bm){var bo=bm.keyCode;var bn=bm.type;if(bo!=this.__ir){this._idealKeyHandler(0,this.__ir,bn,bm);}
else {if(qx.event.util.Keyboard.keyCodeToIdentifierMap[bm.keyCode]){this._idealKeyHandler(bm.keyCode,0,bm.type,bm);}
else {this._idealKeyHandler(0,bm.keyCode,bm.type,bm);}
;}
;}
})),_idealKeyHandler:function(bs,bq,bt,br){var bp;if(bs||(!bs&&!bq)){bp=qx.event.util.Keyboard.keyCodeToIdentifier(bs);this._fireSequenceEvent(br,bt,bp);}
else {bp=qx.event.util.Keyboard.charCodeToIdentifier(bq);this._fireSequenceEvent(br,c,bp);this._fireInputEvent(br,bq);}
;}
,_emulateKeyPress:qx.core.Environment.select(b,{"mshtml":{'8':true,'9':true},"webkit":{'8':true,'9':true,'27':true},"default":{}}),_identifierToKeyCode:function(bu){return qx.event.util.Keyboard.identifierToKeyCodeMap[bu]||bu.charCodeAt(0);}
},destruct:function(){this._stopKeyObserver();this.__ir=this.__dn=this.__cJ=this.__dD=this.__ip=null;}
,defer:function(bv,bw){qx.event.Registration.addHandler(bv);if((qx.core.Environment.get(b)==a)||qx.core.Environment.get(b)==i){bw._charCode2KeyCode={'13':13,'27':27};}
;}
});}
)();
(function(){var a="qx.event.type.KeyInput";qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(c,d,b){qx.event.type.Dom.prototype.init.call(this,c,d,null,true,true);this._charCode=b;return this;}
,clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);f._charCode=this._charCode;return f;}
,getCharCode:function(){return this._charCode;}
,getChar:function(){return String.fromCharCode(this._charCode);}
}});}
)();
(function(){var a="qx.event.type.KeySequence";qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(c,d,b){qx.event.type.Dom.prototype.init.call(this,c,d,null,true,true);this._keyCode=c.keyCode;this._identifier=b;return this;}
,clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);f._keyCode=this._keyCode;f._identifier=this._identifier;return f;}
,getKeyIdentifier:function(){return this._identifier;}
,getKeyCode:function(){return this._keyCode;}
,isPrintable:function(){return qx.event.util.Keyboard.isPrintableKeyIdentifier(this._identifier);}
}});}
)();
(function(){var a="-",b="PageUp",c="Escape",d="Enter",e="+",f="PrintScreen",g="os.name",h="7",i="A",j="Space",k="Left",l="5",m="F5",n="Down",o="Up",p="3",q="Meta",r="F11",s="0",t="F6",u="PageDown",v="osx",w="CapsLock",x="Insert",y="F8",z="Scroll",A="Control",B="Tab",C="Shift",D="End",E="Pause",F="Unidentified",G="/",H="8",I="Z",J="*",K="cmd",L="F1",M="F4",N="Home",O="qx.event.util.Keyboard",P="F2",Q="6",R="F7",S="Apps",T="4",U="F12",V="Alt",W="2",X="NumLock",Y="Delete",bn="1",bo="Win",bp="Backspace",bj="F9",bk="F10",bl="Right",bm="F3",bq="9",br=",";qx.Bootstrap.define(O,{statics:{specialCharCodeMap:{'8':bp,'9':B,'13':d,'27':c,'32':j},numpadToCharCode:{'96':s.charCodeAt(0),'97':bn.charCodeAt(0),'98':W.charCodeAt(0),'99':p.charCodeAt(0),'100':T.charCodeAt(0),'101':l.charCodeAt(0),'102':Q.charCodeAt(0),'103':h.charCodeAt(0),'104':H.charCodeAt(0),'105':bq.charCodeAt(0),'106':J.charCodeAt(0),'107':e.charCodeAt(0),'109':a.charCodeAt(0),'110':br.charCodeAt(0),'111':G.charCodeAt(0)},keyCodeToIdentifierMap:{'16':C,'17':A,'18':V,'20':w,'224':q,'37':k,'38':o,'39':bl,'40':n,'33':b,'34':u,'35':D,'36':N,'45':x,'46':Y,'112':L,'113':P,'114':bm,'115':M,'116':m,'117':t,'118':R,'119':y,'120':bj,'121':bk,'122':r,'123':U,'144':X,'44':f,'145':z,'19':E,'91':qx.core.Environment.get(g)==v?K:bo,'92':bo,'93':qx.core.Environment.get(g)==v?K:S},charCodeA:i.charCodeAt(0),charCodeZ:I.charCodeAt(0),charCode0:s.charCodeAt(0),charCode9:bq.charCodeAt(0),keyCodeToIdentifier:function(bs){if(this.isIdentifiableKeyCode(bs)){var bt=this.numpadToCharCode[bs];if(bt){return String.fromCharCode(bt);}
;return (this.keyCodeToIdentifierMap[bs]||this.specialCharCodeMap[bs]||String.fromCharCode(bs));}
else {return F;}
;}
,charCodeToIdentifier:function(bu){return this.specialCharCodeMap[bu]||String.fromCharCode(bu).toUpperCase();}
,isIdentifiableKeyCode:function(bv){if(bv>=this.charCodeA&&bv<=this.charCodeZ){return true;}
;if(bv>=this.charCode0&&bv<=this.charCode9){return true;}
;if(this.specialCharCodeMap[bv]){return true;}
;if(this.numpadToCharCode[bv]){return true;}
;if(this.isNonPrintableKeyCode(bv)){return true;}
;return false;}
,isNonPrintableKeyCode:function(bw){return this.keyCodeToIdentifierMap[bw]?true:false;}
,isValidKeyIdentifier:function(bx){if(this.identifierToKeyCodeMap[bx]){return true;}
;if(bx.length!=1){return false;}
;if(bx>=s&&bx<=bq){return true;}
;if(bx>=i&&bx<=I){return true;}
;switch(bx){case e:case a:case J:case G:case br:return true;default:return false;};}
,isPrintableKeyIdentifier:function(by){if(by===j){return true;}
else {return this.identifierToKeyCodeMap[by]?false:true;}
;}
},defer:function(bz){if(!bz.identifierToKeyCodeMap){bz.identifierToKeyCodeMap={};for(var bA in bz.keyCodeToIdentifierMap){bz.identifierToKeyCodeMap[bz.keyCodeToIdentifierMap[bA]]=parseInt(bA,10);}
;for(var bA in bz.specialCharCodeMap){bz.identifierToKeyCodeMap[bz.specialCharCodeMap[bA]]=parseInt(bA,10);}
;}
;}
});}
)();
(function(){var a="selectstart",b="os.name",c="blur",d="mousedown",e="function",f="focus",g="os.version",h="qx.event.handler.Focus",i="_applyFocus",j="DOMFocusIn",k="deactivate",l="browser.name",m="textarea",n="_applyActive",o='character',p="input",q="ios",r="",s="qxSelectable",t="tabIndex",u="off",v="on",w="activate",x="focusin",y="mshtml",z="engine.name",A="mouseup",B="DOMFocusOut",C="focusout",D="qxKeepFocus",E="draggesture",F="qxKeepActive";qx.Class.define(h,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(G){qx.core.Object.call(this);this._manager=G;this._window=G.getWindow();this._document=this._window.document;this._root=this._document.documentElement;this._body=this._document.body;if((qx.core.Environment.get(b)==q&&parseFloat(qx.core.Environment.get(g))>6)&&(!qx.application.Inline||!qx.core.Init.getApplication() instanceof qx.application.Inline)){this.__iy=true;}
;this._initObserver();}
,properties:{active:{apply:n,nullable:true},focus:{apply:i,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select(z,{"mshtml":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera":{button:1,input:1,select:1,textarea:1},"webkit":{button:1,input:1,select:1,textarea:1}})},members:{__iz:null,__iA:null,__iB:null,__iC:null,__iD:null,__iE:null,__iF:null,__iG:null,__iH:null,__iI:null,__iJ:r,__iK:r,__iy:false,__iL:null,canHandleEvent:function(I,H){}
,registerEvent:function(L,K,J){}
,unregisterEvent:function(O,N,M){}
,focus:function(P){if((qx.core.Environment.get(z)==y)){window.setTimeout(function(){try{P.focus();var Q=qx.bom.Selection.get(P);if(Q.length==0&&typeof P.createTextRange==e){var R=P.createTextRange();R.moveStart(o,P.value.length);R.collapse();R.select();}
;}
catch(S){}
;}
,0);}
else {try{P.focus();}
catch(T){}
;}
;this.setFocus(P);this.setActive(P);}
,activate:function(U){this.setActive(U);}
,blur:function(V){try{V.blur();}
catch(W){}
;if(this.getActive()===V){this.resetActive();}
;if(this.getFocus()===V){this.resetFocus();}
;}
,deactivate:function(X){if(this.getActive()===X){this.resetActive();}
;}
,tryActivate:function(ba){var Y=this.__ja(ba);if(Y){this.setActive(Y);}
;}
,__il:function(bb,bd,bg,bf){var be=qx.event.Registration;var bc=be.createEvent(bg,qx.event.type.Focus,[bb,bd,bf]);be.dispatchEvent(bb,bc);}
,_windowFocused:true,__iM:function(){if(this._windowFocused){this._windowFocused=false;this.__il(this._window,null,c,false);}
;}
,__iN:function(){if(!this._windowFocused){this._windowFocused=true;this.__il(this._window,null,f,false);}
;}
,_initObserver:qx.core.Environment.select(z,{"gecko":function(){this.__iz=qx.lang.Function.listener(this.__iT,this);this.__iA=qx.lang.Function.listener(this.__iU,this);this.__iB=qx.lang.Function.listener(this.__iS,this);this.__iC=qx.lang.Function.listener(this.__iR,this);this.__iD=qx.lang.Function.listener(this.__iO,this);qx.bom.Event.addNativeListener(this._document,d,this.__iz,true);qx.bom.Event.addNativeListener(this._document,A,this.__iA,true);qx.bom.Event.addNativeListener(this._window,f,this.__iB,true);qx.bom.Event.addNativeListener(this._window,c,this.__iC,true);qx.bom.Event.addNativeListener(this._window,E,this.__iD,true);}
,"mshtml":function(){this.__iz=qx.lang.Function.listener(this.__iT,this);this.__iA=qx.lang.Function.listener(this.__iU,this);this.__iF=qx.lang.Function.listener(this.__iP,this);this.__iG=qx.lang.Function.listener(this.__iQ,this);this.__iE=qx.lang.Function.listener(this.__iW,this);qx.bom.Event.addNativeListener(this._document,d,this.__iz);qx.bom.Event.addNativeListener(this._document,A,this.__iA);qx.bom.Event.addNativeListener(this._document,x,this.__iF);qx.bom.Event.addNativeListener(this._document,C,this.__iG);qx.bom.Event.addNativeListener(this._document,a,this.__iE);}
,"webkit":qx.core.Environment.select(l,{"edge":function(bh){this.__iz=qx.lang.Function.listener(this.__iT,this);this.__iA=qx.lang.Function.listener(this.__iU,this);this.__iG=qx.lang.Function.listener(this.__iQ,this);this.__iB=qx.lang.Function.listener(this.__iS,this);this.__iC=qx.lang.Function.listener(this.__iR,this);this.__iE=qx.lang.Function.listener(this.__iW,this);qx.bom.Event.addNativeListener(this._document,d,this.__iz,true);qx.bom.Event.addNativeListener(this._document,A,this.__iA,true);qx.bom.Event.addNativeListener(this._document,a,this.__iE,false);qx.bom.Event.addNativeListener(this._document,x,this.__iF);qx.bom.Event.addNativeListener(this._document,C,this.__iG);}
,"default":function(bi){this.__iz=qx.lang.Function.listener(this.__iT,this);this.__iA=qx.lang.Function.listener(this.__iU,this);this.__iG=qx.lang.Function.listener(this.__iQ,this);this.__iB=qx.lang.Function.listener(this.__iS,this);this.__iC=qx.lang.Function.listener(this.__iR,this);this.__iE=qx.lang.Function.listener(this.__iW,this);qx.bom.Event.addNativeListener(this._document,d,this.__iz,true);qx.bom.Event.addNativeListener(this._document,A,this.__iA,true);qx.bom.Event.addNativeListener(this._document,a,this.__iE,false);qx.bom.Event.addNativeListener(this._window,B,this.__iG,true);qx.bom.Event.addNativeListener(this._window,f,this.__iB,true);qx.bom.Event.addNativeListener(this._window,c,this.__iC,true);}
}),"opera":function(){this.__iz=qx.lang.Function.listener(this.__iT,this);this.__iA=qx.lang.Function.listener(this.__iU,this);this.__iF=qx.lang.Function.listener(this.__iP,this);this.__iG=qx.lang.Function.listener(this.__iQ,this);qx.bom.Event.addNativeListener(this._document,d,this.__iz,true);qx.bom.Event.addNativeListener(this._document,A,this.__iA,true);qx.bom.Event.addNativeListener(this._window,j,this.__iF,true);qx.bom.Event.addNativeListener(this._window,B,this.__iG,true);}
}),_stopObserver:qx.core.Environment.select(z,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__iz,true);qx.bom.Event.removeNativeListener(this._document,A,this.__iA,true);qx.bom.Event.removeNativeListener(this._window,f,this.__iB,true);qx.bom.Event.removeNativeListener(this._window,c,this.__iC,true);qx.bom.Event.removeNativeListener(this._window,E,this.__iD,true);}
,"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__iz);qx.bom.Event.removeNativeListener(this._document,A,this.__iA);qx.bom.Event.removeNativeListener(this._document,x,this.__iF);qx.bom.Event.removeNativeListener(this._document,C,this.__iG);qx.bom.Event.removeNativeListener(this._document,a,this.__iE);}
,"webkit":qx.core.Environment.select(l,{"edge":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__iz);qx.bom.Event.removeNativeListener(this._document,A,this.__iA);qx.bom.Event.removeNativeListener(this._document,x,this.__iF);qx.bom.Event.removeNativeListener(this._document,C,this.__iG);qx.bom.Event.removeNativeListener(this._document,a,this.__iE);}
,"default":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__iz,true);qx.bom.Event.removeNativeListener(this._document,A,this.__iA,true);qx.bom.Event.removeNativeListener(this._document,a,this.__iE,false);qx.bom.Event.removeNativeListener(this._window,B,this.__iG,true);qx.bom.Event.removeNativeListener(this._window,f,this.__iB,true);qx.bom.Event.removeNativeListener(this._window,c,this.__iC,true);}
}),"opera":function(){qx.bom.Event.removeNativeListener(this._document,d,this.__iz,true);qx.bom.Event.removeNativeListener(this._document,A,this.__iA,true);qx.bom.Event.removeNativeListener(this._window,j,this.__iF,true);qx.bom.Event.removeNativeListener(this._window,B,this.__iG,true);}
}),__iO:qx.event.GlobalError.observeMethod(qx.core.Environment.select(z,{"gecko":function(bj){var bk=qx.bom.Event.getTarget(bj);if(!this.__jb(bk)){qx.bom.Event.preventDefault(bj);}
;}
,"default":null})),__iP:qx.event.GlobalError.observeMethod(qx.core.Environment.select(z,{"mshtml":function(bm){this.__iN();var bn=qx.bom.Event.getTarget(bm);var bl=this.__iY(bn);if(bl){this.setFocus(bl);}
;this.tryActivate(bn);}
,"webkit":qx.core.Environment.select(l,{"edge":function(bp){this.__iN();var bq=qx.bom.Event.getTarget(bp);var bo=this.__iY(bq);if(bo){this.setFocus(bo);}
;this.tryActivate(bq);}
,"default":null}),"opera":function(br){var bs=qx.bom.Event.getTarget(br);if(bs==this._document||bs==this._window){this.__iN();if(this.__iH){this.setFocus(this.__iH);delete this.__iH;}
;if(this.__iI){this.setActive(this.__iI);delete this.__iI;}
;}
else {this.setFocus(bs);this.tryActivate(bs);if(!this.__jb(bs)){bs.selectionStart=0;bs.selectionEnd=0;}
;}
;}
,"default":null})),__iQ:qx.event.GlobalError.observeMethod(qx.core.Environment.select(z,{"mshtml":function(bt){var bu=qx.bom.Event.getRelatedTarget(bt);if(bu==null){this.__iM();this.resetFocus();this.resetActive();}
;}
,"webkit":qx.core.Environment.select(l,{"edge":function(bv){var bw=qx.bom.Event.getRelatedTarget(bv);if(bw==null){this.__iM();this.resetFocus();this.resetActive();}
;}
,"default":function(bx){var by=qx.bom.Event.getTarget(bx);if(by===this.getFocus()){this.resetFocus();}
;if(by===this.getActive()){this.resetActive();}
;}
}),"opera":function(bz){var bA=qx.bom.Event.getTarget(bz);if(bA==this._document){this.__iM();this.__iH=this.getFocus();this.__iI=this.getActive();this.resetFocus();this.resetActive();}
else {if(bA===this.getFocus()){this.resetFocus();}
;if(bA===this.getActive()){this.resetActive();}
;}
;}
,"default":null})),__iR:qx.event.GlobalError.observeMethod(qx.core.Environment.select(z,{"gecko":function(bB){var bC=qx.bom.Event.getTarget(bB);if(bC===this._window||bC===this._document){this.__iM();this.resetActive();this.resetFocus();}
;}
,"webkit":function(bD){var bE=qx.bom.Event.getTarget(bD);if(bE===this._window||bE===this._document){this.__iM();this.__iH=this.getFocus();this.__iI=this.getActive();this.resetActive();this.resetFocus();}
;}
,"default":null})),__iS:qx.event.GlobalError.observeMethod(qx.core.Environment.select(z,{"gecko":function(bF){var bG=qx.bom.Event.getTarget(bF);if(bG===this._window||bG===this._document){this.__iN();bG=this._body;}
;this.setFocus(bG);this.tryActivate(bG);}
,"webkit":function(bH){var bI=qx.bom.Event.getTarget(bH);if(bI===this._window||bI===this._document){this.__iN();if(this.__iH){this.setFocus(this.__iH);delete this.__iH;}
;if(this.__iI){this.setActive(this.__iI);delete this.__iI;}
;}
else {this.__iL=bH.relatedTarget;this.setFocus(bI);this.__iL=null;this.tryActivate(bI);}
;}
,"default":null})),__iT:qx.event.GlobalError.observeMethod(qx.core.Environment.select(z,{"mshtml":function(bK){var bL=qx.bom.Event.getTarget(bK);var bJ=this.__iY(bL);if(bJ){if(!this.__jb(bL)){bL.unselectable=v;try{if(document.selection){document.selection.empty();}
;}
catch(bM){}
;try{bJ.focus();}
catch(bN){}
;}
;}
else {qx.bom.Event.preventDefault(bK);if(!this.__jb(bL)){bL.unselectable=v;}
;}
;}
,"webkit":function(bP){var bQ=qx.bom.Event.getTarget(bP);var bO=this.__iY(bQ);if(bO){this.setFocus(bO);}
else {qx.bom.Event.preventDefault(bP);}
;}
,"gecko":function(bS){var bT=qx.bom.Event.getTarget(bS);var bR=this.__iY(bT);if(bR){this.setFocus(bR);}
else {qx.bom.Event.preventDefault(bS);}
;}
,"opera":function(bW){var bX=qx.bom.Event.getTarget(bW);var bU=this.__iY(bX);if(!this.__jb(bX)){qx.bom.Event.preventDefault(bW);if(bU){var bV=this.getFocus();if(bV&&bV.selectionEnd){bV.selectionStart=0;bV.selectionEnd=0;bV.blur();}
;if(bU){this.setFocus(bU);}
;}
;}
else if(bU){this.setFocus(bU);}
;}
,"default":null})),__iU:qx.event.GlobalError.observeMethod(qx.core.Environment.select(z,{"mshtml":function(bY){var ca=qx.bom.Event.getTarget(bY);if(ca.unselectable){ca.unselectable=u;}
;this.tryActivate(this.__iV(ca));}
,"gecko":function(cb){var cc=qx.bom.Event.getTarget(cb);while(cc&&cc.offsetWidth===undefined){cc=cc.parentNode;}
;if(cc){this.tryActivate(cc);}
;}
,"webkit":function(cd){var ce=qx.bom.Event.getTarget(cd);this.tryActivate(this.__iV(ce));}
,"opera":function(cf){var cg=qx.bom.Event.getTarget(cf);this.tryActivate(this.__iV(cg));}
,"default":null})),__iV:qx.event.GlobalError.observeMethod(qx.core.Environment.select(z,{"mshtml":function(ch){var ci=this.getFocus();if(ci&&ch!=ci&&(ci.nodeName.toLowerCase()===p||ci.nodeName.toLowerCase()===m)){ch=ci;}
;return ch;}
,"webkit":function(cj){var ck=this.getFocus();if(ck&&cj!=ck&&(ck.nodeName.toLowerCase()===p||ck.nodeName.toLowerCase()===m)){cj=ck;}
;return cj;}
,"default":function(cl){return cl;}
})),__iW:qx.event.GlobalError.observeMethod(qx.core.Environment.select(z,{"mshtml":function(cm){var cn=qx.bom.Event.getTarget(cm);if(!this.__jb(cn)){qx.bom.Event.preventDefault(cm);}
;}
,"webkit":function(co){var cp=qx.bom.Event.getTarget(co);if(!this.__jb(cp)){qx.bom.Event.preventDefault(co);}
;}
,"default":null})),__iX:function(cq){var cr=qx.bom.element.Attribute.get(cq,t);if(cr>=1){return true;}
;var cs=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(cr>=0&&cs[cq.tagName]){return true;}
;return false;}
,__iY:function(ct){while(ct&&ct.nodeType===1){if(ct.getAttribute(D)==v){return null;}
;if(this.__iX(ct)){return ct;}
;ct=ct.parentNode;}
;return this._body;}
,__ja:function(cu){var cv=cu;while(cu&&cu.nodeType===1){if(cu.getAttribute(F)==v){return null;}
;cu=cu.parentNode;}
;return cv;}
,__jb:function(cw){while(cw&&cw.nodeType===1){var cx=cw.getAttribute(s);if(cx!=null){return cx===v;}
;cw=cw.parentNode;}
;return true;}
,_applyActive:function(cz,cy){if(cy){this.__il(cy,cz,k,true);}
;if(cz){this.__il(cz,cy,w,true);}
;if(this.__iy){window.scrollTo(0,0);}
;}
,_applyFocus:function(cB,cA){if(cA){this.__il(cA,cB,C,true);}
;if(cB){this.__il(cB,cA,x,true);}
;if(cA){this.__il(cA,cB,c,false);}
;if(cB){this.__il(cB,cA||this.__iL,f,false);}
;}
},destruct:function(){this._stopObserver();this._manager=this._window=this._document=this._root=this._body=this.__jc=this.__iL=null;}
,defer:function(cD){qx.event.Registration.addHandler(cD);var cE=cD.FOCUSABLE_ELEMENTS;for(var cC in cE){cE[cC.toUpperCase()]=1;}
;}
});}
)();
(function(){var a="engine.name",b="qx.bom.Selection",c="character",d="button",e='character',f="#text",g="webkit",h="input",i="gecko",j="EndToEnd",k="opera",l="StartToStart",m="html.selection",n="textarea",o="body";qx.Bootstrap.define(b,{statics:{getSelectionObject:qx.core.Environment.select(m,{"selection":function(p){return p.selection;}
,"default":function(q){return qx.dom.Node.getWindow(q).getSelection();}
}),get:qx.core.Environment.select(m,{"selection":function(r){var s=qx.bom.Range.get(qx.dom.Node.getDocument(r));return s.text;}
,"default":function(t){if(this.__jd(t)){return t.value.substring(t.selectionStart,t.selectionEnd);}
else {return this.getSelectionObject(qx.dom.Node.getDocument(t)).toString();}
;}
}),getLength:qx.core.Environment.select(m,{"selection":function(u){var w=this.get(u);var v=qx.util.StringSplit.split(w,/\r\n/);return w.length-(v.length-1);}
,"default":function(x){if(qx.core.Environment.get(a)==k){var B,C,A;if(this.__jd(x)){var z=x.selectionStart;var y=x.selectionEnd;B=x.value.substring(z,y);C=y-z;}
else {B=qx.bom.Selection.get(x);C=B.length;}
;A=qx.util.StringSplit.split(B,/\r\n/);return C-(A.length-1);}
;if(this.__jd(x)){return x.selectionEnd-x.selectionStart;}
else {return this.get(x).length;}
;}
}),getStart:qx.core.Environment.select(m,{"selection":function(D){if(this.__jd(D)){var I=qx.bom.Range.get();if(!D.contains(I.parentElement())){return -1;}
;var J=qx.bom.Range.get(D);var H=D.value.length;J.moveToBookmark(I.getBookmark());J.moveEnd(e,H);return H-J.text.length;}
else {var J=qx.bom.Range.get(D);var F=J.parentElement();var K=qx.bom.Range.get();try{K.moveToElementText(F);}
catch(M){return 0;}
;var E=qx.bom.Range.get(qx.dom.Node.getBodyElement(D));E.setEndPoint(l,J);E.setEndPoint(j,K);if(K.compareEndPoints(l,E)==0){return 0;}
;var G;var L=0;while(true){G=E.moveStart(c,-1);if(K.compareEndPoints(l,E)==0){break;}
;if(G==0){break;}
else {L++ ;}
;}
;return  ++L;}
;}
,"default":function(N){if(qx.core.Environment.get(a)===i||qx.core.Environment.get(a)===g){if(this.__jd(N)){return N.selectionStart;}
else {var P=qx.dom.Node.getDocument(N);var O=this.getSelectionObject(P);if(O.anchorOffset<O.focusOffset){return O.anchorOffset;}
else {return O.focusOffset;}
;}
;}
;if(this.__jd(N)){return N.selectionStart;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;}
;}
}),getEnd:qx.core.Environment.select(m,{"selection":function(Q){if(this.__jd(Q)){var V=qx.bom.Range.get();if(!Q.contains(V.parentElement())){return -1;}
;var W=qx.bom.Range.get(Q);var U=Q.value.length;W.moveToBookmark(V.getBookmark());W.moveStart(e,-U);return W.text.length;}
else {var W=qx.bom.Range.get(Q);var S=W.parentElement();var X=qx.bom.Range.get();try{X.moveToElementText(S);}
catch(ba){return 0;}
;var U=X.text.length;var R=qx.bom.Range.get(qx.dom.Node.getBodyElement(Q));R.setEndPoint(j,W);R.setEndPoint(l,X);if(X.compareEndPoints(j,R)==0){return U-1;}
;var T;var Y=0;while(true){T=R.moveEnd(c,1);if(X.compareEndPoints(j,R)==0){break;}
;if(T==0){break;}
else {Y++ ;}
;}
;return U-( ++Y);}
;}
,"default":function(bb){if(qx.core.Environment.get(a)===i||qx.core.Environment.get(a)===g){if(this.__jd(bb)){return bb.selectionEnd;}
else {var bd=qx.dom.Node.getDocument(bb);var bc=this.getSelectionObject(bd);if(bc.focusOffset>bc.anchorOffset){return bc.focusOffset;}
else {return bc.anchorOffset;}
;}
;}
;if(this.__jd(bb)){return bb.selectionEnd;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bb)).focusOffset;}
;}
}),__jd:function(be){return qx.dom.Node.isElement(be)&&(be.nodeName.toLowerCase()==h||be.nodeName.toLowerCase()==n);}
,set:qx.core.Environment.select(m,{"selection":function(bf,bi,bh){var bg;if(qx.dom.Node.isDocument(bf)){bf=bf.body;}
;if(qx.dom.Node.isElement(bf)||qx.dom.Node.isText(bf)){switch(bf.nodeName.toLowerCase()){case h:case n:case d:if(bh===undefined){bh=bf.value.length;}
;if(bi>=0&&bi<=bf.value.length&&bh>=0&&bh<=bf.value.length){bg=qx.bom.Range.get(bf);bg.collapse(true);bg.moveStart(c,bi);bg.moveEnd(c,bh-bi);bg.select();return true;}
;break;case f:if(bh===undefined){bh=bf.nodeValue.length;}
;if(bi>=0&&bi<=bf.nodeValue.length&&bh>=0&&bh<=bf.nodeValue.length){bg=qx.bom.Range.get(qx.dom.Node.getBodyElement(bf));bg.moveToElementText(bf.parentNode);bg.collapse(true);bg.moveStart(c,bi);bg.moveEnd(c,bh-bi);bg.select();return true;}
;break;default:if(bh===undefined){bh=bf.childNodes.length-1;}
;if(bf.childNodes[bi]&&bf.childNodes[bh]){bg=qx.bom.Range.get(qx.dom.Node.getBodyElement(bf));bg.moveToElementText(bf.childNodes[bi]);bg.collapse(true);var bj=qx.bom.Range.get(qx.dom.Node.getBodyElement(bf));bj.moveToElementText(bf.childNodes[bh]);bg.setEndPoint(j,bj);bg.select();return true;}
;};}
;return false;}
,"default":function(bk,bp,bm){var bn=bk.nodeName.toLowerCase();if(qx.dom.Node.isElement(bk)&&(bn==h||bn==n)){if(bm===undefined){bm=bk.value.length;}
;if(bp>=0&&bp<=bk.value.length&&bm>=0&&bm<=bk.value.length){bk.focus();bk.select();bk.setSelectionRange(bp,bm);return true;}
;}
else {var bq=false;var bl=qx.dom.Node.getWindow(bk).getSelection();var bo=qx.bom.Range.get(bk);if(qx.dom.Node.isText(bk)){if(bm===undefined){bm=bk.length;}
;if(bp>=0&&bp<bk.length&&bm>=0&&bm<=bk.length){bq=true;}
;}
else if(qx.dom.Node.isElement(bk)){if(bm===undefined){bm=bk.childNodes.length-1;}
;if(bp>=0&&bk.childNodes[bp]&&bm>=0&&bk.childNodes[bm]){bq=true;}
;}
else if(qx.dom.Node.isDocument(bk)){bk=bk.body;if(bm===undefined){bm=bk.childNodes.length-1;}
;if(bp>=0&&bk.childNodes[bp]&&bm>=0&&bk.childNodes[bm]){bq=true;}
;}
;if(bq){if(!bl.isCollapsed){bl.collapseToStart();}
;bo.setStart(bk,bp);if(qx.dom.Node.isText(bk)){bo.setEnd(bk,bm);}
else {bo.setEndAfter(bk.childNodes[bm]);}
;if(bl.rangeCount>0){bl.removeAllRanges();}
;bl.addRange(bo);return true;}
;}
;return false;}
}),setAll:function(br){return qx.bom.Selection.set(br,0);}
,clear:qx.core.Environment.select(m,{"selection":function(bs){var bu=qx.bom.Range.get(bs);var parent=bu.parentElement();var bv=qx.bom.Range.get(qx.dom.Node.getDocument(bs));if(qx.dom.Node.isText(bs)){bs=bs.parentNode;}
;if(parent==bv.parentElement()&&parent==bs){var bt=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bs));bt.empty();}
;}
,"default":function(bw){var bB=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bw));var bx=bw.nodeName.toLowerCase();if(qx.dom.Node.isElement(bw)&&(bx==h||bx==n)){bw.setSelectionRange(0,0);if(qx.bom.Element&&qx.bom.Element.blur){qx.bom.Element.blur(bw);}
;}
else if(qx.dom.Node.isDocument(bw)||bx==o){bB.collapse(bw.body?bw.body:bw,0);}
else {var by=qx.bom.Range.get(bw);if(!by.collapsed){var bz;var bA=by.commonAncestorContainer;if(qx.dom.Node.isElement(bw)&&qx.dom.Node.isText(bA)){bz=bA.parentNode;}
else {bz=bA;}
;if(bz==bw){bB.collapse(bw,0);}
;}
;}
;}
})}});}
)();
(function(){var a="qx.bom.Range",b="text",c="password",d="file",e="submit",f="reset",g="textarea",h="input",i="hidden",j="html.selection",k="button",l="body";qx.Bootstrap.define(a,{statics:{get:qx.core.Environment.select(j,{"selection":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case h:switch(m.type){case b:case c:case i:case k:case f:case d:case e:return m.createTextRange();default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();};break;case g:case l:case k:return m.createTextRange();default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();};}
else {if(m==null){m=window;}
;return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();}
;}
,"default":function(n){var o=qx.dom.Node.getDocument(n);var p=qx.bom.Selection.getSelectionObject(o);if(p.rangeCount>0){return p.getRangeAt(0);}
else {return o.createRange();}
;}
})}});}
)();
(function(){var a="m",b="g",c="^",d="",e="qx.util.StringSplit",f="i",g="$(?!\\s)",h="[object RegExp]",j="y";qx.Bootstrap.define(e,{statics:{split:function(k,p,o){if(Object.prototype.toString.call(p)!==h){return String.prototype.split.call(k,p,o);}
;var r=[],l=0,m=(p.ignoreCase?f:d)+(p.multiline?a:d)+(p.sticky?j:d),p=RegExp(p.source,m+b),n,t,q,u,s=/()??/.exec(d)[1]===undefined;k=k+d;if(!s){n=RegExp(c+p.source+g,m);}
;if(o===undefined||+o<0){o=Infinity;}
else {o=Math.floor(+o);if(!o){return [];}
;}
;while(t=p.exec(k)){q=t.index+t[0].length;if(q>l){r.push(k.slice(l,t.index));if(!s&&t.length>1){t[0].replace(n,function(){for(var i=1;i<arguments.length-2;i++ ){if(arguments[i]===undefined){t[i]=undefined;}
;}
;}
);}
;if(t.length>1&&t.index<k.length){Array.prototype.push.apply(r,t.slice(1));}
;u=t[0].length;l=q;if(r.length>=o){break;}
;}
;if(p.lastIndex===t.index){p.lastIndex++ ;}
;}
;if(l===k.length){if(u||!p.test(d)){r.push(d);}
;}
else {r.push(k.slice(l));}
;return r.length>o?r.slice(0,o):r;}
}});}
)();
(function(){var a="qx.event.type.Focus";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(d,b,c){qx.event.type.Event.prototype.init.call(this,c,false);this._target=d;this._relatedTarget=b;return this;}
}});}
)();
(function(){var a="touchmove",b="os.name",c="MSPointerDown",d="android",e="engine.version",f="pointercancel",g="qx.event.handler.TouchCore",h="event.mspointer",j="MSPointerCancel",k="y",l="pointer-events",m="pointerup",n="touchend",o="pointerdown",p="MSPointerUp",q="right",r="engine.name",s="undefined",t="touchcancel",u="MSPointerMove",v="webkit",w="none",z="left",A="pointermove",B="down",C="x",D="up",E="touchstart";qx.Bootstrap.define(g,{extend:Object,implement:[qx.core.IDisposable],statics:{TAP_MAX_DISTANCE:qx.core.Environment.get(b)!=d?10:40,SWIPE_DIRECTION:{x:[z,q],y:[D,B]},SWIPE_MIN_DISTANCE:qx.core.Environment.get(b)!=d?11:41,SWIPE_MIN_VELOCITY:0,LONGTAP_TIME:500},construct:function(F,G){this.__je=F;this.__gg=G;this._initTouchObserver();this.__jf=[];this.__jg={};}
,members:{__je:null,__gg:null,__jh:null,__ji:null,__jg:null,__jj:null,__jk:null,__jl:null,__jf:null,__jm:null,_initTouchObserver:function(){this.__jh=qx.lang.Function.listener(this._onTouchEvent,this);this.__jm=[E,a,n,t];if(qx.core.Environment.get(h)){var H=parseInt(qx.core.Environment.get(e),10);if(H==10){this.__jm=[c,u,p,j];}
else {this.__jm=[o,A,m,f];}
;}
;for(var i=0;i<this.__jm.length;i++ ){qx.bom.Event.addNativeListener(this.__je,this.__jm[i],this.__jh);}
;}
,_stopTouchObserver:function(){for(var i=0;i<this.__jm.length;i++ ){qx.bom.Event.removeNativeListener(this.__je,this.__jm[i],this.__jh);}
;}
,_onTouchEvent:function(I){this._commonTouchEventHandler(I);}
,_getScalingDistance:function(K,J){return (Math.sqrt(Math.pow(K.pageX-J.pageX,2)+Math.pow(K.pageY-J.pageY,2)));}
,_getRotationAngle:function(M,L){var x=M.pageX-L.pageX;var y=M.pageY-L.pageY;return (Math.atan2(y,x)*180/Math.PI);}
,_calcTouchesDelta:function(N){var O=[];for(var i=0;i<N.length;i++ ){O.push(this._calcSingleTouchDelta(N[i]));}
;return O;}
,_calcSingleTouchDelta:function(S){if(this.__jg.hasOwnProperty(S.identifier)){var R=this.__jg[S.identifier];var P=Math.floor(S.clientX-R[0]);var Q=Math.floor(S.clientY-R[1]);var T=C;if(Math.abs(P/Q)<1){T=k;}
;return {"x":P,"y":Q,"axis":T,"identifier":S.identifier};}
else {return {"x":0,"y":0,"axis":null,"identifier":S.identifier};}
;}
,_commonTouchEventHandler:function(V,ba){var ba=ba||V.type;if(qx.core.Environment.get(h)){ba=this._mapPointerEvent(ba);var U=this._detectTouchesByPointer(V,ba);V.changedTouches=U;V.targetTouches=U;V.touches=U;}
;V.delta=[];if(ba==E){this.__ji=this._getTarget(V);if(V.touches&&V.touches.length>1){this.__jk=this._getScalingDistance(V.touches[0],V.touches[1]);this.__jl=this._getRotationAngle(V.touches[0],V.touches[1]);}
;for(var i=0;i<V.changedTouches.length;i++ ){var Y=V.changedTouches[i];this.__jg[Y.identifier]=[Y.clientX,Y.clientY];}
;}
;if(ba==a){if(typeof V.scale==s&&V.targetTouches.length>1){var W=this._getScalingDistance(V.targetTouches[0],V.targetTouches[1]);V.scale=W/this.__jk;}
;if((typeof V.rotation==s||qx.core.Environment.get(h))&&V.targetTouches.length>1){var X=this._getRotationAngle(V.targetTouches[0],V.targetTouches[1]);V._rotation=X-this.__jl;}
;V.delta=this._calcTouchesDelta(V.targetTouches);}
;this._fireEvent(V,ba,this.__ji);if(qx.core.Environment.get(h)){if(ba==n||ba==t){delete this.__jf[V.pointerId];}
;}
;if((ba==n||ba==t)&&V.changedTouches[0]){delete this.__jg[V.changedTouches[0].identifier];}
;}
,_detectTouchesByPointer:function(bd,bf){var bc=[];if(bf==E){this.__jf[bd.pointerId]=bd;}
else if(bf==a){this.__jf[bd.pointerId]=bd;}
;for(var be in this.__jf){var bb=this.__jf[be];bc.push(bb);}
;return bc;}
,_mapPointerEvent:function(bg){bg=bg.toLowerCase();if(bg.indexOf(o)!==-1){return E;}
else if(bg.indexOf(m)!==-1){return n;}
else if(bg.indexOf(A)!==-1){return a;}
else if(bg.indexOf(f)!==-1){return t;}
;return bg;}
,_getTarget:function(bi){var bj=qx.bom.Event.getTarget(bi);if(qx.core.Environment.get(r)==v){if(bj&&bj.nodeType==3){bj=bj.parentNode;}
;}
else if(qx.core.Environment.get(h)){var bh=this.__jn(bi);if(bh){bj=bh;}
;}
;return bj;}
,__jn:function(bm){var bk=null;var bl=null;if(bm&&bm.touches&&bm.touches.length!==0){bk=bm.touches[0].clientX;bl=bm.touches[0].clientY;}
;var bo=document.msElementsFromPoint(bk,bl);if(bo){for(var i=0;i<bo.length;i++ ){var bp=bo[i];var bn=qx.bom.element.Style.get(bp,l,3);if(bn!=w){return bp;}
;}
;}
;return null;}
,_fireEvent:function(bq,br,bs){if(!bs){bs=this._getTarget(bq);}
;var br=br||bq.type;if(bs&&bs.nodeType&&this.__gg){this.__gg.emit(br,bq);}
;}
,dispose:function(){this._stopTouchObserver();this.__ji=this.__je=this.__jm=this.__jf=this.__gg=this.__jk=this.__jl=null;}
}});}
)();
(function(){var a="resize",b="os.name",c="qx.event.handler.Orientation",d="landscape",e="android",f="portrait",g="orientationchange";qx.Class.define(c,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(h){qx.core.Object.call(this);this.__dn=h;this.__cJ=h.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dn:null,__cJ:null,__jo:null,_currentOrientation:null,__jp:null,canHandleEvent:function(j,i){}
,registerEvent:function(m,l,k){}
,unregisterEvent:function(p,o,n){}
,_initObserver:function(){this.__jp=qx.lang.Function.listener(this._onNative,this);this.__jo=qx.bom.Event.supportsEvent(this.__cJ,g)?g:a;var Event=qx.bom.Event;Event.addNativeListener(this.__cJ,this.__jo,this.__jp);}
,_stopObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__cJ,this.__jo,this.__jp);}
,_onNative:qx.event.GlobalError.observeMethod(function(q){var r=0;if(qx.core.Environment.get(b)==e){r=300;}
;qx.lang.Function.delay(this._onOrientationChange,r,this,q);}
),_onOrientationChange:function(s){var u=qx.bom.Viewport;var t=u.getOrientation(s.target);if(this._currentOrientation!=t){this._currentOrientation=t;var v=u.isLandscape(s.target)?d:f;qx.event.Registration.fireEvent(this.__cJ,g,qx.event.type.Orientation,[t,v]);}
;}
},destruct:function(){this._stopObserver();this.__dn=this.__cJ=null;}
,defer:function(w){qx.event.Registration.addHandler(w);}
});}
)();
(function(){var a="landscape",b="qx.event.type.Orientation",c="portrait";qx.Class.define(b,{extend:qx.event.type.Event,members:{__jq:null,__jr:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);this.__jq=d;this.__jr=e;return this;}
,clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);g.__jq=this.__jq;g.__jr=this.__jr;return g;}
,getOrientation:function(){return this.__jq;}
,isLandscape:function(){return this.__jr==a;}
,isPortrait:function(){return this.__jr==c;}
}});}
)();
(function(){var a="touchmove",b="dispose",c="useraction",d="touchend",e="event.touch",f="touchstart",g="qx.event.handler.Touch";qx.Class.define(g,{extend:qx.event.handler.TouchCore,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(h){this.__dn=h;this.__cJ=h.getWindow();this.__dD=this.__cJ.document;qx.event.handler.TouchCore.apply(this,[this.__dD]);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,longtap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":f,"mousemove":a,"mouseup":d}},members:{__dn:null,__cJ:null,__dD:null,__js:false,canHandleEvent:function(j,i){}
,registerEvent:function(m,l,k){}
,unregisterEvent:function(p,o,n){}
,_fireEvent:function(r,q,s,t){if(!s){s=this._getTarget(r);}
;var q=q||r.type;if(s&&s.nodeType){qx.event.Registration.fireEvent(s,q,t||qx.event.type.Touch,[r,s,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cJ,c,qx.event.type.Data,[q]);}
,_onTouchEvent:qx.event.GlobalError.observeMethod(function(u){this._commonTouchEventHandler(u);}
),dispose:function(){this.__hH(b);this.__dn=this.__cJ=this.__dD=null;}
,__hH:function(w,v){qx.event.handler.TouchCore.prototype[w].apply(this,v||[]);}
},defer:function(x){qx.event.Registration.addHandler(x);if(qx.core.Environment.get(e)){qx.event.Registration.getManager(document).getHandler(x);}
;}
});}
)();
(function(){var a="touchcancel",b="qx.event.type.Touch",c="touchend",d="undefined";qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(e,f){var f=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,e,f);f.pageX=e.pageX;f.pageY=e.pageY;f.offsetX=e.offsetX;f.offsetY=e.offsetY;f.layerX=(e.offsetX||e.layerX);f.layerY=(e.offsetY||e.layerY);f.scale=e.scale;f.rotation=e.rotation;f._rotation=e._rotation;f.delta=e.delta;f.srcElement=e.srcElement;f.targetTouches=[];for(var i=0;i<e.targetTouches.length;i++ ){f.targetTouches[i]=e.targetTouches[i];}
;f.changedTouches=[];for(i=0;i<e.changedTouches.length;i++ ){f.changedTouches[i]=e.changedTouches[i];}
;f.touches=[];for(i=0;i<e.touches.length;i++ ){f.touches[i]=e.touches[i];}
;return f;}
,stop:function(){this.stopPropagation();}
,getAllTouches:function(){return this._native.touches;}
,getTargetTouches:function(){return this._native.targetTouches;}
,getChangedTargetTouches:function(){return this._native.changedTouches;}
,isMultiTouch:function(){return this.__ju().length>1;}
,getScale:function(){return this._native.scale;}
,getRotation:function(){if(typeof this._native._rotation===d){return this._native.rotation;}
else {return this._native._rotation;}
;}
,getDelta:function(){return this._native.delta;}
,getDocumentLeft:function(g){return this.__jt(g).pageX;}
,getDocumentTop:function(h){return this.__jt(h).pageY;}
,getScreenLeft:function(j){return this.__jt(j).screenX;}
,getScreenTop:function(k){return this.__jt(k).screenY;}
,getViewportLeft:function(l){return this.__jt(l).clientX;}
,getViewportTop:function(m){return this.__jt(m).clientY;}
,getIdentifier:function(n){return this.__jt(n).identifier;}
,__jt:function(o){o=o==null?0:o;return this.__ju()[o];}
,__ju:function(){var p=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());return p;}
,_isTouchEnd:function(){return (this.getType()==c||this.getType()==a);}
}});}
)();
(function(){var a="text",b="engine.version",c="keydown",d="radio",f="textarea",g="password",h="propertychange",j="select-multiple",k="change",m="input",n="value",p="select",q="browser.documentmode",r="browser.version",s="opera",t="keyup",u="mshtml",v="engine.name",w="keypress",x="checkbox",y="qx.event.handler.Input",z="checked";qx.Class.define(y,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);if((qx.core.Environment.get(v)==s)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);}
;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__jv:false,__jw:null,__jx:null,__jy:null,canHandleEvent:function(C,B){var A=C.tagName.toLowerCase();if(B===m&&(A===m||A===f)){return true;}
;if(B===k&&(A===m||A===f||A===p)){return true;}
;return false;}
,registerEvent:function(H,G,E){if(qx.core.Environment.get(v)==u&&(qx.core.Environment.get(b)<9||(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(q)<9))){if(!H.__jz){var F=H.tagName.toLowerCase();var D=H.type;if(D===a||D===g||F===f||D===x||D===d){qx.bom.Event.addNativeListener(H,h,this._onPropertyWrapper);}
;if(D!==x&&D!==d){qx.bom.Event.addNativeListener(H,k,this._onChangeValueWrapper);}
;if(D===a||D===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,H);qx.bom.Event.addNativeListener(H,w,this._onKeyPressWrapped);}
;H.__jz=true;}
;}
else {if(G===m){this.__jA(H);}
else if(G===k){if(H.type===d||H.type===x){qx.bom.Event.addNativeListener(H,k,this._onChangeCheckedWrapper);}
else {qx.bom.Event.addNativeListener(H,k,this._onChangeValueWrapper);}
;if((qx.core.Environment.get(v)==s)||(qx.core.Environment.get(v)==u)){if(H.type===a||H.type===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,H);qx.bom.Event.addNativeListener(H,w,this._onKeyPressWrapped);}
;}
;}
;}
;}
,__jA:qx.core.Environment.select(v,{"mshtml":function(I){if(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(q)>=9){qx.bom.Event.addNativeListener(I,m,this._onInputWrapper);if(I.type===a||I.type===g||I.type===f){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,I);qx.bom.Event.addNativeListener(I,t,this._inputFixWrapper);}
;}
;}
,"webkit":function(K){var J=K.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(b))<532&&J==f){qx.bom.Event.addNativeListener(K,w,this._onInputWrapper);}
;qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);}
,"opera":function(L){qx.bom.Event.addNativeListener(L,t,this._onKeyUpWrapper);qx.bom.Event.addNativeListener(L,c,this._onKeyDownWrapper);qx.bom.Event.addNativeListener(L,m,this._onInputWrapper);}
,"default":function(M){qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);}
}),unregisterEvent:function(Q,P){if(qx.core.Environment.get(v)==u&&qx.core.Environment.get(b)<9&&qx.core.Environment.get(q)<9){if(Q.__jz){var O=Q.tagName.toLowerCase();var N=Q.type;if(N===a||N===g||O===f||N===x||N===d){qx.bom.Event.removeNativeListener(Q,h,this._onPropertyWrapper);}
;if(N!==x&&N!==d){qx.bom.Event.removeNativeListener(Q,k,this._onChangeValueWrapper);}
;if(N===a||N===g){qx.bom.Event.removeNativeListener(Q,w,this._onKeyPressWrapped);}
;try{delete Q.__jz;}
catch(R){Q.__jz=null;}
;}
;}
else {if(P===m){this.__jB(Q);}
else if(P===k){if(Q.type===d||Q.type===x){qx.bom.Event.removeNativeListener(Q,k,this._onChangeCheckedWrapper);}
else {qx.bom.Event.removeNativeListener(Q,k,this._onChangeValueWrapper);}
;}
;if((qx.core.Environment.get(v)==s)||(qx.core.Environment.get(v)==u)){if(Q.type===a||Q.type===g){qx.bom.Event.removeNativeListener(Q,w,this._onKeyPressWrapped);}
;}
;}
;}
,__jB:qx.core.Environment.select(v,{"mshtml":function(S){if(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(q)>=9){qx.bom.Event.removeNativeListener(S,m,this._onInputWrapper);if(S.type===a||S.type===g||S.type===f){qx.bom.Event.removeNativeListener(S,t,this._inputFixWrapper);}
;}
;}
,"webkit":function(U){var T=U.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(b))<532&&T==f){qx.bom.Event.removeNativeListener(U,w,this._onInputWrapper);}
;qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);}
,"opera":function(V){qx.bom.Event.removeNativeListener(V,t,this._onKeyUpWrapper);qx.bom.Event.removeNativeListener(V,c,this._onKeyDownWrapper);qx.bom.Event.removeNativeListener(V,m,this._onInputWrapper);}
,"default":function(W){qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);}
}),_onKeyPress:qx.core.Environment.select(v,{"mshtml":function(e,X){if(e.keyCode===13){if(X.value!==this.__jx){this.__jx=X.value;qx.event.Registration.fireEvent(X,k,qx.event.type.Data,[X.value]);}
;}
;}
,"opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__jx){this.__jx=Y.value;qx.event.Registration.fireEvent(Y,k,qx.event.type.Data,[Y.value]);}
;}
;}
,"default":null}),_inputFix:qx.core.Environment.select(v,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__jy){this.__jy=ba.value;qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);}
;}
;}
,"default":null}),_onKeyDown:qx.core.Environment.select(v,{"opera":function(e){if(e.keyCode===13){this.__jv=true;}
;}
,"default":null}),_onKeyUp:qx.core.Environment.select(v,{"opera":function(e){if(e.keyCode===13){this.__jv=false;}
;}
,"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);var bb=bc.tagName.toLowerCase();if(!this.__jv||bb!==m){if((qx.core.Environment.get(v)==s)&&qx.core.Environment.get(r)<10.6){this.__jw=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);}
,0);}
else {qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);}
;}
;}
),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var bd=qx.bom.Event.getTarget(e);var be=bd.value;if(bd.type===j){var be=[];for(var i=0,o=bd.options,l=o.length;i<l;i++ ){if(o[i].selected){be.push(o[i].value);}
;}
;}
;qx.event.Registration.fireEvent(bd,k,qx.event.type.Data,[be]);}
),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);if(bf.type===d){if(bf.checked){qx.event.Registration.fireEvent(bf,k,qx.event.type.Data,[bf.value]);}
;}
else {qx.event.Registration.fireEvent(bf,k,qx.event.type.Data,[bf.checked]);}
;}
),_onProperty:qx.core.Environment.select(v,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);var bh=e.propertyName;if(bh===n&&(bg.type===a||bg.type===g||bg.tagName.toLowerCase()===f)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);}
;}
else if(bh===z){if(bg.type===x){qx.event.Registration.fireEvent(bg,k,qx.event.type.Data,[bg.checked]);}
else if(bg.checked){qx.event.Registration.fireEvent(bg,k,qx.event.type.Data,[bg.value]);}
;}
;}
),"default":function(){}
})},defer:function(bi){qx.event.Registration.addHandler(bi);}
});}
)();
(function(){var a="offline",b="qx.event.handler.Offline",c="online";qx.Class.define(b,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(d){qx.core.Object.call(this);this.__dn=d;this.__cJ=d.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dn:null,__cJ:null,__jp:null,canHandleEvent:function(f,e){}
,registerEvent:function(i,h,g){}
,unregisterEvent:function(l,k,j){}
,_initObserver:function(){this.__jp=qx.lang.Function.listener(this._onNative,this);qx.bom.Event.addNativeListener(this.__cJ,a,this.__jp);qx.bom.Event.addNativeListener(this.__cJ,c,this.__jp);}
,_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__cJ,a,this.__jp);qx.bom.Event.removeNativeListener(this.__cJ,c,this.__jp);}
,_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__cJ,m.type,qx.event.type.Event,[]);}
),isOnline:function(){return !!this.__cJ.navigator.onLine;}
},destruct:function(){this.__dn=null;this._stopObserver();delete qx.event.handler.Appear.__instances[this.$$hash];}
,defer:function(n){qx.event.Registration.addHandler(n);}
});}
)();
(function(){var a="mshtml",b="engine.name",c="qx.bom.Element";qx.Class.define(c,{statics:{addListener:function(g,f,d,self,e){return qx.event.Registration.addListener(g,f,d,self,e);}
,removeListener:function(n,m,h,self,k){return qx.event.Registration.removeListener(n,m,h,self,k);}
,removeListenerById:function(o,p){return qx.event.Registration.removeListenerById(o,p);}
,hasListener:function(s,r,q){return qx.event.Registration.hasListener(s,r,q);}
,focus:function(t){qx.event.Registration.getManager(t).getHandler(qx.event.handler.Focus).focus(t);}
,blur:function(u){qx.event.Registration.getManager(u).getHandler(qx.event.handler.Focus).blur(u);}
,activate:function(v){qx.event.Registration.getManager(v).getHandler(qx.event.handler.Focus).activate(v);}
,deactivate:function(w){qx.event.Registration.getManager(w).getHandler(qx.event.handler.Focus).deactivate(w);}
,capture:function(y,x){qx.event.Registration.getManager(y).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(y,x);}
,releaseCapture:function(z){qx.event.Registration.getManager(z).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(z);}
,clone:function(E,L){var C;if(L||((qx.core.Environment.get(b)==a)&&!qx.xml.Document.isXmlDocument(E))){var G=qx.event.Registration.getManager(E);var A=qx.dom.Hierarchy.getDescendants(E);A.push(E);}
;if((qx.core.Environment.get(b)==a)){for(var i=0,l=A.length;i<l;i++ ){G.toggleAttachedEvents(A[i],false);}
;}
;var C=E.cloneNode(true);if((qx.core.Environment.get(b)==a)){for(var i=0,l=A.length;i<l;i++ ){G.toggleAttachedEvents(A[i],true);}
;}
;if(L===true){var K=qx.dom.Hierarchy.getDescendants(C);K.push(C);var B,J,I,D;for(var i=0,H=A.length;i<H;i++ ){I=A[i];B=G.serializeListeners(I);if(B.length>0){J=K[i];for(var j=0,F=B.length;j<F;j++ ){D=B[j];G.addListener(J,D.type,D.handler,D.self,D.capture);}
;}
;}
;}
;return C;}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="blur",d="losecapture",e="focus",f="os.version",g="click",h="qx.event.dispatch.MouseCapture",i="capture",j="scroll",k="browser.documentmode";qx.Class.define(h,{extend:qx.event.dispatch.AbstractBubbling,construct:function(l,m){qx.event.dispatch.AbstractBubbling.call(this,l);this.__cJ=l.getWindow();this.__cL=m;l.addListener(this.__cJ,c,this.releaseCapture,this);l.addListener(this.__cJ,e,this.releaseCapture,this);l.addListener(this.__cJ,j,this.releaseCapture,this);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cL:null,__jC:null,__jD:true,__cJ:null,_getParent:function(n){return n.parentNode;}
,canDispatchEvent:function(p,event,o){return !!(this.__jC&&this.__jE[o]);}
,dispatchEvent:function(r,event,q){if(q==g){event.stopPropagation();this.releaseCapture();return;}
;if(this.__jD||!qx.dom.Hierarchy.contains(this.__jC,r)){r=this.__jC;}
;qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,r,event,q);}
,__jE:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1,"pointerdown":1,"pointerup":1,"pointermove":1,"pointerover":1,"pointerout":1,"tap":1,"dbltap":1},activateCapture:function(t,s){var s=s!==false;if(this.__jC===t&&this.__jD==s){return;}
;if(this.__jC){this.releaseCapture();}
;if(this.hasNativeCapture){this.nativeSetCapture(t,s);var self=this;qx.bom.Event.addNativeListener(t,d,function(){qx.bom.Event.removeNativeListener(t,d,arguments.callee);self.releaseCapture();}
);}
;this.__jD=s;this.__jC=t;this.__cL.fireEvent(t,i,qx.event.type.Event,[true,false]);}
,getCaptureElement:function(){return this.__jC;}
,releaseCapture:function(){var u=this.__jC;if(!u){return;}
;this.__jC=null;this.__cL.fireEvent(u,d,qx.event.type.Event,[true,false]);this.nativeReleaseCapture(u);}
,hasNativeCapture:(qx.core.Environment.get(b)==a&&qx.core.Environment.get(k)<9||(parseInt(qx.core.Environment.get(f),10)>7&&qx.core.Environment.get(k)>9)),nativeSetCapture:qx.core.Environment.select(b,{"mshtml":function(w,v){w.setCapture(v!==false);}
,"default":(function(){}
)}),nativeReleaseCapture:qx.core.Environment.select(b,{"mshtml":function(x){x.releaseCapture();}
,"default":(function(){}
)})},defer:function(y){qx.event.Registration.addDispatcher(y);}
});}
)();
(function(){var a="qx.event.handler.Capture";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,b){}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var a="function",b="plugin.silverlight.version",c="Silverlight",d="Skype.Detection",f="QuickTimeCheckObject.QuickTimeCheck.1",g="Adobe Acrobat",h="plugin.windowsmedia",k="QuickTime",l="plugin.silverlight",m="pdf",n="wmv",o="qx.bom.client.Plugin",p="application/x-skype",q=',',r="plugin.divx",s='=',t="Chrome PDF Viewer",u="divx",v="Windows Media",w="",x="mshtml",y="skype.click2call",z="plugin.skype",A="plugin.gears",B="plugin.quicktime",C="plugin.windowsmedia.version",D="quicktime",E="DivX Web Player",F="AgControl.AgControl",G="Microsoft.XMLHTTP",H="silverlight",I="plugin.pdf",J="plugin.pdf.version",K="MSXML2.DOMDocument.6.0",L="WMPlayer.OCX.7",M="AcroPDF.PDF",N="plugin.activex",O="plugin.quicktime.version",P="plugin.divx.version",Q="npdivx.DivXBrowserPlugin.1",R="object";qx.Bootstrap.define(o,{statics:{getGears:function(){return !!(window.google&&window.google.gears);}
,getActiveX:function(){if(typeof window.ActiveXObject===a){return true;}
;try{return window.ActiveXObject!==undefined&&(typeof (new window.ActiveXObject(G))===R||typeof (new window.ActiveXObject(K))===R);}
catch(S){return false;}
;}
,getSkype:function(){if(qx.bom.client.Plugin.getActiveX()){try{new ActiveXObject(d);return true;}
catch(e){}
;}
;var T=navigator.mimeTypes;if(T){if(p in T){return true;}
;for(var i=0;i<T.length;i++ ){var U=T[i];if(U.type.indexOf(y)!=-1){return true;}
;}
;}
;return false;}
,__jF:{quicktime:{plugin:[k],control:f},wmv:{plugin:[v],control:L},divx:{plugin:[E],control:Q},silverlight:{plugin:[c],control:F},pdf:{plugin:[t,g],control:M}},getQuicktimeVersion:function(){var V=qx.bom.client.Plugin.__jF[D];return qx.bom.client.Plugin.__jG(V.control,V.plugin);}
,getWindowsMediaVersion:function(){var W=qx.bom.client.Plugin.__jF[n];return qx.bom.client.Plugin.__jG(W.control,W.plugin,true);}
,getDivXVersion:function(){var X=qx.bom.client.Plugin.__jF[u];return qx.bom.client.Plugin.__jG(X.control,X.plugin);}
,getSilverlightVersion:function(){var Y=qx.bom.client.Plugin.__jF[H];return qx.bom.client.Plugin.__jG(Y.control,Y.plugin);}
,getPdfVersion:function(){var ba=qx.bom.client.Plugin.__jF[m];return qx.bom.client.Plugin.__jG(ba.control,ba.plugin);}
,getQuicktime:function(){var bb=qx.bom.client.Plugin.__jF[D];return qx.bom.client.Plugin.__jH(bb.control,bb.plugin);}
,getWindowsMedia:function(){var bc=qx.bom.client.Plugin.__jF[n];return qx.bom.client.Plugin.__jH(bc.control,bc.plugin,true);}
,getDivX:function(){var bd=qx.bom.client.Plugin.__jF[u];return qx.bom.client.Plugin.__jH(bd.control,bd.plugin);}
,getSilverlight:function(){var be=qx.bom.client.Plugin.__jF[H];return qx.bom.client.Plugin.__jH(be.control,be.plugin);}
,getPdf:function(){var bf=qx.bom.client.Plugin.__jF[m];return qx.bom.client.Plugin.__jH(bf.control,bf.plugin);}
,__jG:function(bo,bk,bj){var bg=qx.bom.client.Plugin.__jH(bo,bk,bj);if(!bg){return w;}
;if(qx.bom.client.Engine.getName()==x&&(qx.bom.client.Browser.getDocumentMode()<11||bj)){try{var bh=new ActiveXObject(bo);var bm;if(bh.GetVersions&&bh.GetVersions()){bm=bh.GetVersions().split(q);if(bm.length>1){bm=bm[0].split(s);if(bm.length===2){return bm[1];}
;}
;}
;bm=bh.versionInfo;if(bm!=undefined){return bm;}
;bm=bh.version;if(bm!=undefined){return bm;}
;bm=bh.settings.version;if(bm!=undefined){return bm;}
;}
catch(bp){return w;}
;return w;}
else {var bn=navigator.plugins;var bl=/([0-9]\.[0-9])/g;for(var i=0;i<bn.length;i++ ){var bi=bn[i];for(var j=0;j<bk.length;j++ ){if(bi.name.indexOf(bk[j])!==-1){if(bl.test(bi.name)||bl.test(bi.description)){return RegExp.$1;}
;}
;}
;}
;return w;}
;}
,__jH:function(bt,br,bq){if(qx.bom.client.Engine.getName()==x&&(qx.bom.client.Browser.getDocumentMode()<11||bq)){if(!this.getActiveX()){return false;}
;try{new ActiveXObject(bt);}
catch(bu){return false;}
;return true;}
else {var bs=navigator.plugins;if(!bs){return false;}
;var name;for(var i=0;i<bs.length;i++ ){name=bs[i].name;for(var j=0;j<br.length;j++ ){if(name.indexOf(br[j])!==-1){return true;}
;}
;}
;return false;}
;}
},defer:function(bv){qx.core.Environment.add(A,bv.getGears);qx.core.Environment.add(B,bv.getQuicktime);qx.core.Environment.add(O,bv.getQuicktimeVersion);qx.core.Environment.add(h,bv.getWindowsMedia);qx.core.Environment.add(C,bv.getWindowsMediaVersion);qx.core.Environment.add(r,bv.getDivX);qx.core.Environment.add(P,bv.getDivXVersion);qx.core.Environment.add(l,bv.getSilverlight);qx.core.Environment.add(b,bv.getSilverlightVersion);qx.core.Environment.add(I,bv.getPdf);qx.core.Environment.add(J,bv.getPdfVersion);qx.core.Environment.add(N,bv.getActiveX);qx.core.Environment.add(z,bv.getSkype);}
});}
)();
(function(){var a='<\?xml version="1.0" encoding="utf-8"?>\n<',b="MSXML2.DOMDocument.3.0",c="qx.xml.Document",d="",e=" />",f="xml.domparser",g="SelectionLanguage",h="'",j="MSXML2.XMLHTTP.3.0",k="plugin.activex",m="No XML implementation available!",n="MSXML2.XMLHTTP.6.0",o="xml.implementation",p=" xmlns='",q="text/xml",r="XPath",s="MSXML2.DOMDocument.6.0",t="HTML";qx.Bootstrap.define(c,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(u){if(u.nodeType===9){return u.documentElement.nodeName!==t;}
else if(u.ownerDocument){return this.isXmlDocument(u.ownerDocument);}
else {return false;}
;}
,create:function(v,w){if(qx.core.Environment.get(k)){var x=new ActiveXObject(this.DOMDOC);if(this.DOMDOC==b){x.setProperty(g,r);}
;if(w){var y=a;y+=w;if(v){y+=p+v+h;}
;y+=e;x.loadXML(y);}
;return x;}
;if(qx.core.Environment.get(o)){return document.implementation.createDocument(v||d,w||d,null);}
;throw new Error(m);}
,fromString:function(A){if(qx.core.Environment.get(k)){var B=qx.xml.Document.create();B.loadXML(A);return B;}
;if(qx.core.Environment.get(f)){var z=new DOMParser();return z.parseFromString(A,q);}
;throw new Error(m);}
},defer:function(D){if(qx.core.Environment.get(k)){var C=[s,b];var E=[n,j];for(var i=0,l=C.length;i<l;i++ ){try{new ActiveXObject(C[i]);new ActiveXObject(E[i]);}
catch(F){continue;}
;D.DOMDOC=C[i];D.XMLHTTP=E[i];break;}
;}
;}
});}
)();
(function(){var a="function",b="xml.implementation",c="xml.attributens",d="xml.selectnodes",e="<a></a>",f="xml.getqualifieditem",g="SelectionLanguage",h="xml.getelementsbytagnamens",i="qx.bom.client.Xml",j="xml.domproperties",k="xml.selectsinglenode",l="1.0",m="xml.createnode",n="xml.domparser",o="getProperty",p="undefined",q="XML",r="string",s="xml.createelementns";qx.Bootstrap.define(i,{statics:{getImplementation:function(){return document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature(q,l);}
,getDomParser:function(){return typeof window.DOMParser!==p;}
,getSelectSingleNode:function(){return typeof qx.xml.Document.create().selectSingleNode!==p;}
,getSelectNodes:function(){return typeof qx.xml.Document.create().selectNodes!==p;}
,getElementsByTagNameNS:function(){return typeof qx.xml.Document.create().getElementsByTagNameNS!==p;}
,getDomProperties:function(){var t=qx.xml.Document.create();return (o in t&&typeof t.getProperty(g)===r);}
,getAttributeNS:function(){var u=qx.xml.Document.fromString(e).documentElement;return typeof u.getAttributeNS===a&&typeof u.setAttributeNS===a;}
,getCreateElementNS:function(){return typeof qx.xml.Document.create().createElementNS===a;}
,getCreateNode:function(){return typeof qx.xml.Document.create().createNode!==p;}
,getQualifiedItem:function(){var v=qx.xml.Document.fromString(e).documentElement;return typeof v.attributes.getQualifiedItem!==p;}
},defer:function(w){qx.core.Environment.add(b,w.getImplementation);qx.core.Environment.add(n,w.getDomParser);qx.core.Environment.add(k,w.getSelectSingleNode);qx.core.Environment.add(d,w.getSelectNodes);qx.core.Environment.add(h,w.getElementsByTagNameNS);qx.core.Environment.add(j,w.getDomProperties);qx.core.Environment.add(c,w.getAttributeNS);qx.core.Environment.add(s,w.getCreateElementNS);qx.core.Environment.add(m,w.getCreateNode);qx.core.Environment.add(f,w.getQualifiedItem);}
});}
)();
(function(){var a="borderBottomWidth",b="visible",d="engine.name",e="borderTopWidth",f="top",g="borderLeftStyle",h="none",i="overflow",j="right",k="bottom",l="borderLeftWidth",m="100px",n="-moz-scrollbars-vertical",o="borderRightStyle",p="hidden",q="div",r="left",u="qx.bom.element.Scroll",v="borderRightWidth",w="scroll",x="overflowY";qx.Class.define(u,{statics:{__jI:null,getScrollbarWidth:function(){if(this.__jI!==null){return this.__jI;}
;var y=qx.bom.element.Style;var A=function(E,F){return parseInt(y.get(E,F),10)||0;}
;var B=function(G){return (y.get(G,o)==h?0:A(G,v));}
;var C=function(H){return (y.get(H,g)==h?0:A(H,l));}
;var D=qx.core.Environment.select(d,{"mshtml":function(I){if(y.get(I,x)==p||I.clientWidth==0){return B(I);}
;return Math.max(0,I.offsetWidth-I.clientLeft-I.clientWidth);}
,"default":function(J){if(J.clientWidth==0){var L=y.get(J,i);var K=(L==w||L==n?16:0);return Math.max(0,B(J)+K);}
;return Math.max(0,(J.offsetWidth-J.clientWidth-C(J)));}
});var z=function(M){return D(M)-B(M);}
;var t=document.createElement(q);var s=t.style;s.height=s.width=m;s.overflow=w;document.body.appendChild(t);var c=z(t);this.__jI=c;document.body.removeChild(t);return this.__jI;}
,intoViewX:function(bi,stop,bh){var parent=bi.parentNode;var bg=qx.dom.Node.getDocument(bi);var Y=bg.body;var be,Q,V;var R,P,S;var bb,T,O;var X,bc,bd,ba;var bf,U,bj;var N=bh===r;var W=bh===j;stop=stop?stop.parentNode:bg;while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===Y||qx.bom.element.Style.get(parent,x)!=b)){if(parent===Y){Q=parent.scrollLeft;V=Q+qx.bom.Viewport.getWidth();R=qx.bom.Viewport.getWidth();P=parent.clientWidth;S=parent.scrollWidth;bb=0;T=0;O=0;}
else {be=qx.bom.element.Location.get(parent);Q=be.left;V=be.right;R=parent.offsetWidth;P=parent.clientWidth;S=parent.scrollWidth;bb=parseInt(qx.bom.element.Style.get(parent,l),10)||0;T=parseInt(qx.bom.element.Style.get(parent,v),10)||0;O=R-P-bb-T;}
;X=qx.bom.element.Location.get(bi);bc=X.left;bd=X.right;ba=bi.offsetWidth;bf=bc-Q-bb;U=bd-V+T;bj=0;if(N){bj=bf;}
else if(W){bj=U+O;}
else if(bf<0||ba>P){bj=bf;}
else if(U>0){bj=U+O;}
;parent.scrollLeft+=bj;qx.event.Registration.fireNonBubblingEvent(parent,w);}
;if(parent===Y){break;}
;parent=parent.parentNode;}
;}
,intoViewY:function(bD,stop,bC){var parent=bD.parentNode;var bB=qx.dom.Node.getDocument(bD);var bk=bB.body;var by,bt,bw;var bE,bx,bu;var bp,bl,bA;var br,bs,bq,bm;var bn,bv,bz;var bo=bC===f;var bF=bC===k;stop=stop?stop.parentNode:bB;while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===bk||qx.bom.element.Style.get(parent,x)!=b)){if(parent===bk){bt=parent.scrollTop;bw=bt+qx.bom.Viewport.getHeight();bE=qx.bom.Viewport.getHeight();bx=parent.clientHeight;bu=parent.scrollHeight;bp=0;bl=0;bA=0;}
else {by=qx.bom.element.Location.get(parent);bt=by.top;bw=by.bottom;bE=parent.offsetHeight;bx=parent.clientHeight;bu=parent.scrollHeight;bp=parseInt(qx.bom.element.Style.get(parent,e),10)||0;bl=parseInt(qx.bom.element.Style.get(parent,a),10)||0;bA=bE-bx-bp-bl;}
;br=qx.bom.element.Location.get(bD);bs=br.top;bq=br.bottom;bm=bD.offsetHeight;bn=bs-bt-bp;bv=bq-bw+bl;bz=0;if(bo){bz=bn;}
else if(bF){bz=bv+bA;}
else if(bn<0||bm>bx){bz=bn;}
else if(bv>0){bz=bv+bA;}
;parent.scrollTop+=bz;qx.event.Registration.fireNonBubblingEvent(parent,w);}
;if(parent===bk){break;}
;parent=parent.parentNode;}
;}
,intoView:function(bI,stop,bH,bG){this.intoViewX(bI,stop,bH);this.intoViewY(bI,stop,bG);}
}});}
)();
(function(){var a=" due to exceptions in user code. The application has to be reloaded!",b="Error in the 'Appearance' queue:",c="Error in the 'Widget' queue:",d="\n",f="Error in the 'Layout' queue:",g="Error in the 'Visibility' queue:",h="qx.debug",i="useraction",j="qx.debug.ui.queue",k="Error while layout flush: ",l="Error in the 'Dispose' queue:",m="Stack trace: \n",n="event.touch",o="qx.ui.core.queue.Manager",p=" times in a row",q="Fatal Error: Flush terminated ";qx.Class.define(o,{statics:{__jJ:false,__gQ:false,__jK:{},__jL:0,MAX_RETRIES:10,scheduleFlush:function(r){var self=qx.ui.core.queue.Manager;self.__jK[r]=true;if(!self.__jJ){self.__gQ=false;qx.bom.AnimationFrame.request(function(){if(self.__gQ){self.__gQ=false;return;}
;self.flush();}
,self);self.__jJ=true;}
;}
,flush:function(){var self=qx.ui.core.queue.Manager;if(self.__jM){return;}
;self.__jM=true;self.__gQ=true;var s=self.__jK;self.__jN(function(){while(s.visibility||s.widget||s.appearance||s.layout||s.element){if(s.widget){delete s.widget;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Widget.flush();}
catch(e){qx.log.Logger.error(qx.ui.core.queue.Widget,c+e,e);}
;}
else {qx.ui.core.queue.Widget.flush();}
;}
;if(s.visibility){delete s.visibility;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Visibility.flush();}
catch(e){qx.log.Logger.error(qx.ui.core.queue.Visibility,g+e,e);}
;}
else {qx.ui.core.queue.Visibility.flush();}
;}
;if(s.appearance){delete s.appearance;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Appearance.flush();}
catch(e){qx.log.Logger.error(qx.ui.core.queue.Appearance,b+e,e);}
;}
else {qx.ui.core.queue.Appearance.flush();}
;}
;if(s.widget||s.visibility||s.appearance){continue;}
;if(s.layout){delete s.layout;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Layout.flush();}
catch(e){qx.log.Logger.error(qx.ui.core.queue.Layout,f+e,e);}
;}
else {qx.ui.core.queue.Layout.flush();}
;}
;if(s.widget||s.visibility||s.appearance||s.layout){continue;}
;if(s.element){delete s.element;qx.html.Element.flush();}
;}
;}
,function(){self.__jJ=false;}
);self.__jN(function(){if(s.dispose){delete s.dispose;if(qx.core.Environment.get(j)){try{qx.ui.core.queue.Dispose.flush();}
catch(e){qx.log.Logger.error(l+e);}
;}
else {qx.ui.core.queue.Dispose.flush();}
;}
;}
,function(){self.__jM=false;}
);self.__jL=0;}
,__jN:qx.core.Environment.select(h,{"true":function(t,u){t();u();}
,"false":function(v,w){var self=qx.ui.core.queue.Manager;try{v();}
catch(e){if(qx.core.Environment.get(h)){qx.log.Logger.error(k+e+d+m+qx.dev.StackTrace.getStackTraceFromError(e));}
;self.__jJ=false;self.__jM=false;self.__jL+=1;if(self.__jL<=self.MAX_RETRIES){self.scheduleFlush();}
else {throw new Error(q+(self.__jL-1)+p+a);}
;throw e;}
finally{w();}
;}
}),__jO:function(e){qx.ui.core.queue.Manager.flush();}
},defer:function(x){qx.html.Element._scheduleFlush=x.scheduleFlush;qx.event.Registration.addListener(window,i,qx.core.Environment.get(n)?x.__jO:x.flush);}
});}
)();
(function(){var a="qx.ui.core.queue.Widget",b="widget",c="$$default";qx.Class.define(a,{statics:{__et:[],__jK:{},remove:function(e,g){var d=this.__et;if(!qx.lang.Array.contains(d,e)){return;}
;var f=e.$$hash;if(g==null){qx.lang.Array.remove(d,e);delete this.__jK[f];return;}
;if(this.__jK[f]){delete this.__jK[f][g];if(qx.lang.Object.getLength(this.__jK[f])==0){qx.lang.Array.remove(d,e);}
;}
;}
,add:function(j,l){var h=this.__et;if(!qx.lang.Array.contains(h,j)){h.unshift(j);}
;if(l==null){l=c;}
;var k=j.$$hash;if(!this.__jK[k]){this.__jK[k]={};}
;this.__jK[k][l]=true;qx.ui.core.queue.Manager.scheduleFlush(b);}
,flush:function(){var m=this.__et;var n,o;for(var i=m.length-1;i>=0;i-- ){n=m[i];o=this.__jK[n.$$hash];m.splice(i,1);n.syncWidget(o);}
;if(m.length!=0){return;}
;this.__et=[];this.__jK={};}
}});}
)();
(function(){var a="qx.ui.core.queue.Visibility",b="visibility";qx.Class.define(a,{statics:{__et:[],__jP:{},__de:{},remove:function(c){if(this.__jP[c.$$hash]){delete this.__jP[c.$$hash];qx.lang.Array.remove(this.__et,c);}
;delete this.__de[c.$$hash];}
,isVisible:function(d){return this.__de[d.$$hash]||false;}
,__jQ:function(f){var h=this.__de;var g=f.$$hash;var e;if(f.isExcluded()){e=false;}
else {var parent=f.$$parent;if(parent){e=this.__jQ(parent);}
else {e=f.isRootWidget();}
;}
;return h[g]=e;}
,add:function(j){if(this.__jP[j.$$hash]){return;}
;this.__et.unshift(j);this.__jP[j.$$hash]=j;qx.ui.core.queue.Manager.scheduleFlush(b);}
,flush:function(){var n=this.__et;var o=this.__de;for(var i=n.length-1;i>=0;i-- ){var m=n[i].$$hash;if(o[m]!=null){n[i].addChildrenToQueue(n);}
;}
;var k={};for(var i=n.length-1;i>=0;i-- ){var m=n[i].$$hash;k[m]=o[m];o[m]=null;}
;for(var i=n.length-1;i>=0;i-- ){var l=n[i];var m=l.$$hash;n.splice(i,1);if(o[m]==null){this.__jQ(l);}
;if(o[m]&&o[m]!=k[m]){l.checkAppearanceNeeds();}
;}
;this.__et=[];this.__jP={};}
}});}
)();
(function(){var a="appearance",b="qx.ui.core.queue.Appearance";qx.Class.define(b,{statics:{__et:[],__jP:{},remove:function(c){if(this.__jP[c.$$hash]){qx.lang.Array.remove(this.__et,c);delete this.__jP[c.$$hash];}
;}
,add:function(d){if(this.__jP[d.$$hash]){return;}
;this.__et.unshift(d);this.__jP[d.$$hash]=d;qx.ui.core.queue.Manager.scheduleFlush(a);}
,has:function(e){return !!this.__jP[e.$$hash];}
,flush:function(){var h=qx.ui.core.queue.Visibility;var f=this.__et;var g;for(var i=f.length-1;i>=0;i-- ){g=f[i];f.splice(i,1);delete this.__jP[g.$$hash];if(h.isVisible(g)){g.syncAppearance();}
else {g.$$stateChanges=true;}
;}
;}
}});}
)();
(function(){var a="dispose",b="qx.ui.core.queue.Dispose";qx.Class.define(b,{statics:{__et:[],add:function(d){var c=this.__et;if(qx.lang.Array.contains(c,d)){return;}
;c.unshift(d);qx.ui.core.queue.Manager.scheduleFlush(a);}
,isEmpty:function(){return this.__et.length==0;}
,flush:function(){var e=this.__et;for(var i=e.length-1;i>=0;i-- ){var f=e[i];e.splice(i,1);f.dispose();}
;if(e.length!=0){return;}
;this.__et=[];}
}});}
)();
(function(){var a="backgroundColor",b="drag",c="_applyNativeContextMenu",d="touch",f="div",g="_applyBackgroundColor",h="qx.event.type.Data",j="object",k="_applyFocusable",m=" requires a layout, but no one was defined!",n="qx.event.type.KeyInput",o="focused",p="disabled",q="move",r="__jR",s="createChildControl",t="qxanonymous",u="Unsupported control: ",v="dragstart",w="Invalid left decorator inset detected: ",x="__jV",y="Font",z="qx.dynlocale",A="dragchange",B="Invalid layout data: ",C="Could not add widget to itself: ",D="_applyEnabled",E="_applySelectable",F="Number",G="_applyKeepActive",H="qx.event.type.Pinch",I="dragend",J="_applyVisibility",K="The 'before' widget is not a child of this widget!",L="Child control '",M="qxDraggable",N="qx.event.type.Roll",O="syncAppearance",P='" while styling ',Q="paddingLeft",R="' of widget ",S="qx.event.type.Mouse",T="Wrong 'left' argument. ",U="_applyPadding",V="#",W="'Child' must be an instance of qx.ui.core.LayoutItem!",X="Remove Error: ",Y="visible",dg="qx.event.type.Event",dh="qx.event.type.MouseWheel",di="_applyCursor",dc="changeVisibility",dd="_applyDraggable",de="resize",df="Decorator",dn="At least one child in control ",dp="zIndex",dq="changeTextColor",dr="changeContextMenu",dj="__jW",dk="on",dl="paddingTop",dm="opacity",dv="This widget has no children!",dW="changeSelectable",fd="Invalid top decorator inset detected: ",dw="_applyAnonymous",ds="none",dt="outline",eY="hidden",du="The 'after' widget is not a child of this widget!",dx="_applyAppearance",dy=" returned an invalid size hint!",dz="hovered",dE="_applyOpacity",dF="Boolean",dG="px",dA="qx.ui.core.Widget",dB="longtap",dC="default",dD="minHeight is larger than maxHeight!",dK="TabIndex property must be between 1 and 32000",dL="_applyFont",dM="cursor",dN="qxDroppable",dH="' already created!",dI="changeZIndex",fa=": ",dJ="Color",dR="changeEnabled",dS="Abstract method call: _getContentHeightForWidth()!",fc="changeFont",dT="qx.event.type.Focus",dO="_applyDecorator",dP="_applyZIndex",fb="_applyTextColor",dQ=' has no themeable property "',dU="Widget is not focusable!",dV="qx.ui.menu.Menu",ei="engine.name",eh="qx.event.type.Drag",eg="Invalid right decorator inset detected: ",en="Invalid widget to add: ",em="qx.event.type.KeySequence",ek="excluded",ej="DOM element is not yet created!",eb="_applyToolTipText",ea="The layout of the widget",dY="Exception while creating child control '",dX="__jY",ef="qx.event.type.Rotate",ee="_applyDroppable",ed=" is not a child of this widget!",ec="true",eu="widget",et="Wrong 'top' argument. ",es="qxClass",er="changeDecorator",ey="qx.event.type.Tap",ex="Integer",ew="changeBackgroundColor",ev="_applyTabIndex",eq="Invalid bottom decorator inset detected: ",ep="changeAppearance",eo="qx.debug",eJ="qx.event.type.Track",eI="shorthand",eH="/",eN="String",eM="border-box",eL="",eK="_applyContextMenu",eC="changeToolTipText",eB="padding",eA="tabIndex",ez="paddingBottom",eG="beforeContextmenuOpen",eF="changeNativeContextMenu",eE="undefined",eD="qx.ui.tooltip.ToolTip",eT="contextmenu",eS="_applyKeepFocus",eR="paddingRight",eQ="minWidth is larger than maxWidth!",eX="changeLocale",eW="qx.event.type.Pointer",eV="qxKeepFocus",eU="opera",eP="qx.event.type.Touch",eO="qxKeepActive",db="absolute";qx.Class.define(dA,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],implement:[qx.core.IDisposable],construct:function(){qx.ui.core.LayoutItem.call(this);this.__jR=this.__jX();this.initFocusable();this.initSelectable();this.initNativeContextMenu();}
,events:{appear:dg,disappear:dg,createChildControl:h,resize:h,move:h,syncAppearance:h,mousemove:S,mouseover:S,mouseout:S,mousedown:S,mouseup:S,click:S,dblclick:S,contextmenu:S,beforeContextmenuOpen:h,mousewheel:dh,touchstart:eP,touchend:eP,touchmove:eP,touchcancel:eP,tap:ey,longtap:ey,dbltap:ey,swipe:eP,rotate:ef,pinch:H,track:eJ,roll:N,pointermove:eW,pointerover:eW,pointerout:eW,pointerdown:eW,pointerup:eW,pointercancel:eW,keyup:em,keydown:em,keypress:em,keyinput:n,focus:dT,blur:dT,focusin:dT,focusout:dT,activate:dT,deactivate:dT,capture:dg,losecapture:dg,drop:eh,dragleave:eh,dragover:eh,drag:eh,dragstart:eh,dragend:eh,dragchange:eh,droprequest:eh},properties:{paddingTop:{check:ex,init:0,apply:U,themeable:true},paddingRight:{check:ex,init:0,apply:U,themeable:true},paddingBottom:{check:ex,init:0,apply:U,themeable:true},paddingLeft:{check:ex,init:0,apply:U,themeable:true},padding:{group:[dl,eR,ez,Q],mode:eI,themeable:true},zIndex:{nullable:true,init:10,apply:dP,event:dI,check:ex,themeable:true},decorator:{nullable:true,init:null,apply:dO,event:er,check:df,themeable:true},backgroundColor:{nullable:true,check:dJ,apply:g,event:ew,themeable:true},textColor:{nullable:true,check:dJ,apply:fb,event:dq,themeable:true,inheritable:true},font:{nullable:true,apply:dL,check:y,event:fc,themeable:true,inheritable:true,dereference:true},opacity:{check:F,apply:dE,themeable:true,nullable:true,init:null},cursor:{check:eN,apply:di,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:eD,nullable:true},toolTipText:{check:eN,nullable:true,event:eC,apply:eb},toolTipIcon:{check:eN,nullable:true,event:eC},blockToolTip:{check:dF,init:false},showToolTipWhenDisabled:{check:dF,init:false},visibility:{check:[Y,eY,ek],init:Y,apply:J,event:dc},enabled:{init:true,check:dF,inheritable:true,apply:D,event:dR},anonymous:{init:false,check:dF,apply:dw},tabIndex:{check:ex,nullable:true,apply:ev},focusable:{check:dF,init:false,apply:k},keepFocus:{check:dF,init:false,apply:eS},keepActive:{check:dF,init:false,apply:G},draggable:{check:dF,init:false,apply:dd},droppable:{check:dF,init:false,apply:ee},selectable:{check:dF,init:false,event:dW,apply:E},contextMenu:{check:dV,apply:eK,nullable:true,event:dr},nativeContextMenu:{check:dF,init:false,themeable:true,event:eF,apply:c},appearance:{check:eN,init:eu,apply:dx,event:ep}},statics:{DEBUG:false,getWidgetByElement:function(fg,fe){while(fg){if(qx.core.Environment.get(eo)){qx.core.Assert.assertTrue((!fg.$$widget&&!fg.$$widgetObject)||(fg.$$widgetObject&&fg.$$widget&&fg.$$widgetObject.toHashCode()===fg.$$widget));}
;var ff=fg.$$widgetObject;if(ff){if(!fe||!ff.getAnonymous()){return ff;}
;}
;try{fg=fg.parentNode;}
catch(e){return null;}
;}
;return null;}
,contains:function(parent,fh){while(fh){fh=fh.getLayoutParent();if(parent==fh){return true;}
;}
;return false;}
,__jS:new qx.util.ObjectPool()},members:{__jR:null,__jT:null,__jU:null,__jV:null,_getLayout:function(){return this.__jV;}
,_setLayout:function(fi){if(qx.core.Environment.get(eo)){if(fi){this.assertInstance(fi,qx.ui.layout.Abstract);}
;}
;if(this.__jV){this.__jV.connectToWidget(null);}
;if(fi){fi.connectToWidget(this);}
;this.__jV=fi;qx.ui.core.queue.Layout.add(this);}
,setLayoutParent:function(parent){if(this.$$parent===parent){return;}
;var content=this.getContentElement();if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(content);}
;this.$$parent=parent||null;if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(content);}
;this.$$refreshInheritables();qx.ui.core.queue.Visibility.add(this);}
,_updateInsets:null,renderLayout:function(fp,top,fm,fk){var fq=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,fp,top,fm,fk);if(!fq){return null;}
;if(qx.lang.Object.isEmpty(fq)&&!this._updateInsets){return null;}
;var content=this.getContentElement();var ft=fq.size||this._updateInsets;var fr=dG;var fj={};if(fq.position){fj.left=fp+fr;fj.top=top+fr;}
;if(ft||fq.margin){fj.width=fm+fr;fj.height=fk+fr;}
;if(Object.keys(fj).length>0){content.setStyles(fj);}
;if(ft||fq.local||fq.margin){if(this.__jV&&this.hasLayoutChildren()){var fo=this.getInsets();var innerWidth=fm-fo.left-fo.right;var innerHeight=fk-fo.top-fo.bottom;var fs=this.getDecorator();var fn={left:0,right:0,top:0,bottom:0};if(fs){fs=qx.theme.manager.Decoration.getInstance().resolve(fs);fn=fs.getPadding();}
;var fl={top:this.getPaddingTop()+fn.top,right:this.getPaddingRight()+fn.right,bottom:this.getPaddingBottom()+fn.bottom,left:this.getPaddingLeft()+fn.left};this.__jV.renderLayout(innerWidth,innerHeight,fl);}
else if(this.hasLayoutChildren()){throw new Error(dn+this._findTopControl()+m);}
;}
;if(fq.position&&this.hasListener(q)){this.fireDataEvent(q,this.getBounds());}
;if(fq.size&&this.hasListener(de)){this.fireDataEvent(de,this.getBounds());}
;delete this._updateInsets;return fq;}
,__jW:null,clearSeparators:function(){var fv=this.__jW;if(!fv){return;}
;var fw=qx.ui.core.Widget.__jS;var content=this.getContentElement();var fu;for(var i=0,l=fv.length;i<l;i++ ){fu=fv[i];fw.poolObject(fu);content.remove(fu.getContentElement());}
;fv.length=0;}
,renderSeparator:function(fy,fz){var fx=qx.ui.core.Widget.__jS.getObject(qx.ui.core.Widget);fx.set({decorator:fy});var fB=fx.getContentElement();this.getContentElement().add(fB);var fA=fB.getDomElement();if(fA){fA.style.top=fz.top+dG;fA.style.left=fz.left+dG;fA.style.width=fz.width+dG;fA.style.height=fz.height+dG;}
else {fB.setStyles({left:fz.left+dG,top:fz.top+dG,width:fz.width+dG,height:fz.height+dG});}
;if(!this.__jW){this.__jW=[];}
;this.__jW.push(fx);}
,_computeSizeHint:function(){var fI=this.getWidth();var fC=this.getMinWidth();var fD=this.getMaxWidth();var fG=this.getHeight();var fE=this.getMinHeight();var fF=this.getMaxHeight();if(qx.core.Environment.get(eo)){if(fC!==null&&fD!==null){this.assert(fC<=fD,eQ);}
;if(fE!==null&&fF!==null){this.assert(fE<=fF,dD);}
;}
;var fJ=this._getContentHint();var fH=this.getInsets();var fL=fH.left+fH.right;var fK=fH.top+fH.bottom;if(fI==null){fI=fJ.width+fL;}
;if(fG==null){fG=fJ.height+fK;}
;if(fC==null){fC=fL;if(fJ.minWidth!=null){fC+=fJ.minWidth;if(fC>fD&&fD!=null){fC=fD;}
;}
;}
;if(fE==null){fE=fK;if(fJ.minHeight!=null){fE+=fJ.minHeight;if(fE>fF&&fF!=null){fE=fF;}
;}
;}
;if(fD==null){if(fJ.maxWidth==null){fD=Infinity;}
else {fD=fJ.maxWidth+fL;if(fD<fC&&fC!=null){fD=fC;}
;}
;}
;if(fF==null){if(fJ.maxHeight==null){fF=Infinity;}
else {fF=fJ.maxHeight+fK;if(fF<fE&&fE!=null){fF=fE;}
;}
;}
;return {width:fI,minWidth:fC,maxWidth:fD,height:fG,minHeight:fE,maxHeight:fF};}
,invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);if(this.__jV){this.__jV.invalidateLayoutCache();}
;}
,_getContentHint:function(){var fN=this.__jV;if(fN){if(this.hasLayoutChildren()){var fO=fN.getSizeHint();if(qx.core.Environment.get(eo)){var fM=ea+this.toString()+dy;this.assertInteger(fO.width,T+fM);this.assertInteger(fO.height,et+fM);}
;return fO;}
else {return {width:0,height:0};}
;}
else {return {width:100,height:50};}
;}
,_getHeightForWidth:function(fT){var fS=this.getInsets();var fP=fS.left+fS.right;var fV=fS.top+fS.bottom;var fU=fT-fP;var fQ=this._getLayout();if(fQ&&fQ.hasHeightForWidth()){var fW=fQ.getHeightForWidth(fU);}
else {fW=this._getContentHeightForWidth(fU);}
;var fR=fW+fV;return fR;}
,_getContentHeightForWidth:function(fX){throw new Error(dS);}
,getInsets:function(){var top=this.getPaddingTop();var fY=this.getPaddingRight();var ga=this.getPaddingBottom();var gd=this.getPaddingLeft();if(this.getDecorator()){var gc=qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator());var gb=gc.getInsets();if(qx.core.Environment.get(eo)){this.assertNumber(gb.top,fd+gb.top);this.assertNumber(gb.right,eg+gb.right);this.assertNumber(gb.bottom,eq+gb.bottom);this.assertNumber(gb.left,w+gb.left);}
;top+=gb.top;fY+=gb.right;ga+=gb.bottom;gd+=gb.left;}
;return {"top":top,"right":fY,"bottom":ga,"left":gd};}
,getInnerSize:function(){var gf=this.getBounds();if(!gf){return null;}
;var ge=this.getInsets();return {width:gf.width-ge.left-ge.right,height:gf.height-ge.top-ge.bottom};}
,fadeOut:function(gg){return this.getContentElement().fadeOut(gg);}
,fadeIn:function(gh){return this.getContentElement().fadeIn(gh);}
,_applyAnonymous:function(gi){if(gi){this.getContentElement().setAttribute(t,ec);}
else {this.getContentElement().removeAttribute(t);}
;}
,show:function(){this.setVisibility(Y);}
,hide:function(){this.setVisibility(eY);}
,exclude:function(){this.setVisibility(ek);}
,isVisible:function(){return this.getVisibility()===Y;}
,isHidden:function(){return this.getVisibility()!==Y;}
,isExcluded:function(){return this.getVisibility()===ek;}
,isSeeable:function(){qx.ui.core.queue.Manager.flush();var gj=this.getContentElement().getDomElement();if(gj){return gj.offsetWidth>0;}
;return false;}
,__jX:function(){var gl=this._createContentElement();gl.connectWidget(this);gl.setStyles({"touch-action":ds,"-ms-touch-action":ds});if(qx.core.Environment.get(eo)){gl.setAttribute(es,this.classname);}
;var gk={"zIndex":10,"boxSizing":eM};if(!qx.ui.root.Inline||!(this instanceof qx.ui.root.Inline)){gk.position=db;}
;gl.setStyles(gk);return gl;}
,_createContentElement:function(){return new qx.html.Element(f,{overflowX:eY,overflowY:eY});}
,getContentElement:function(){return this.__jR;}
,__jY:null,getLayoutChildren:function(){var gn=this.__jY;if(!gn){return this.__ka;}
;var go;for(var i=0,l=gn.length;i<l;i++ ){var gm=gn[i];if(gm.hasUserBounds()||gm.isExcluded()){if(go==null){go=gn.concat();}
;qx.lang.Array.remove(go,gm);}
;}
;return go||gn;}
,scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);}
,invalidateLayoutChildren:function(){var gp=this.__jV;if(gp){gp.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);}
,hasLayoutChildren:function(){var gr=this.__jY;if(!gr){return false;}
;var gq;for(var i=0,l=gr.length;i<l;i++ ){gq=gr[i];if(!gq.hasUserBounds()&&!gq.isExcluded()){return true;}
;}
;return false;}
,getChildrenContainer:function(){return this;}
,__ka:[],_getChildren:function(){return this.__jY||this.__ka;}
,_indexOf:function(gt){var gs=this.__jY;if(!gs){return -1;}
;return gs.indexOf(gt);}
,_hasChildren:function(){var gu=this.__jY;return gu!=null&&(!!gu[0]);}
,addChildrenToQueue:function(gv){var gw=this.__jY;if(!gw){return;}
;var gx;for(var i=0,l=gw.length;i<l;i++ ){gx=gw[i];gv.push(gx);gx.addChildrenToQueue(gv);}
;}
,_add:function(gz,gy){if(qx.core.Environment.get(eo)){this.assertInstance(gz,qx.ui.core.LayoutItem.constructor,W);}
;if(gz.getLayoutParent()==this){qx.lang.Array.remove(this.__jY,gz);}
;if(this.__jY){this.__jY.push(gz);}
else {this.__jY=[gz];}
;this.__kb(gz,gy);}
,_addAt:function(gD,gA,gC){if(!this.__jY){this.__jY=[];}
;if(gD.getLayoutParent()==this){qx.lang.Array.remove(this.__jY,gD);}
;var gB=this.__jY[gA];if(gB===gD){gD.setLayoutProperties(gC);}
;if(gB){qx.lang.Array.insertBefore(this.__jY,gD,gB);}
else {this.__jY.push(gD);}
;this.__kb(gD,gC);}
,_addBefore:function(gE,gG,gF){if(qx.core.Environment.get(eo)){this.assertInArray(gG,this._getChildren(),K);}
;if(gE==gG){return;}
;if(!this.__jY){this.__jY=[];}
;if(gE.getLayoutParent()==this){qx.lang.Array.remove(this.__jY,gE);}
;qx.lang.Array.insertBefore(this.__jY,gE,gG);this.__kb(gE,gF);}
,_addAfter:function(gJ,gH,gI){if(qx.core.Environment.get(eo)){this.assertInArray(gH,this._getChildren(),du);}
;if(gJ==gH){return;}
;if(!this.__jY){this.__jY=[];}
;if(gJ.getLayoutParent()==this){qx.lang.Array.remove(this.__jY,gJ);}
;qx.lang.Array.insertAfter(this.__jY,gJ,gH);this.__kb(gJ,gI);}
,_remove:function(gK){if(!this.__jY){throw new Error(dv);}
;qx.lang.Array.remove(this.__jY,gK);this.__kc(gK);}
,_removeAt:function(gL){if(!this.__jY){throw new Error(dv);}
;var gM=this.__jY[gL];qx.lang.Array.removeAt(this.__jY,gL);this.__kc(gM);return gM;}
,_removeAll:function(){if(!this.__jY){return [];}
;var gN=this.__jY.concat();this.__jY.length=0;for(var i=gN.length-1;i>=0;i-- ){this.__kc(gN[i]);}
;qx.ui.core.queue.Layout.add(this);return gN;}
,_afterAddChild:null,_afterRemoveChild:null,__kb:function(gP,gO){if(qx.core.Environment.get(eo)){this.assertInstance(gP,qx.ui.core.LayoutItem,en+gP);this.assertNotIdentical(gP,this,C+gP);if(gO!=null){this.assertType(gO,j,B+gO);}
;}
;var parent=gP.getLayoutParent();if(parent&&parent!=this){parent._remove(gP);}
;gP.setLayoutParent(this);if(gO){gP.setLayoutProperties(gO);}
else {this.updateLayoutProperties();}
;if(this._afterAddChild){this._afterAddChild(gP);}
;}
,__kc:function(gQ){if(qx.core.Environment.get(eo)){this.assertNotUndefined(gQ);}
;if(gQ.getLayoutParent()!==this){throw new Error(X+gQ+ed);}
;gQ.setLayoutParent(null);if(this.__jV){this.__jV.invalidateChildrenCache();}
;qx.ui.core.queue.Layout.add(this);if(this._afterRemoveChild){this._afterRemoveChild(gQ);}
;}
,capture:function(gR){this.getContentElement().capture(gR);}
,releaseCapture:function(){this.getContentElement().releaseCapture();}
,isCapturing:function(){var gS=this.getContentElement().getDomElement();if(!gS){return false;}
;var gT=qx.event.Registration.getManager(gS);var gU=gT.getDispatcher(qx.event.dispatch.MouseCapture);return gS==gU.getCaptureElement();}
,_applyPadding:function(gW,gV,name){this._updateInsets=true;qx.ui.core.queue.Layout.add(this);this.__kd(name,gW);}
,__kd:function(gX,hb){var content=this.getContentElement();var gY=this.getDecorator();gY=qx.theme.manager.Decoration.getInstance().resolve(gY);if(gY){var ha=qx.Bootstrap.firstLow(gX.replace(eB,eL));hb+=gY.getPadding()[ha]||0;}
;content.setStyle(gX,hb+dG);}
,_applyDecorator:function(hd,hc){var content=this.getContentElement();if(hc){hc=qx.theme.manager.Decoration.getInstance().getCssClassName(hc);content.removeClass(hc);}
;if(hd){hd=qx.theme.manager.Decoration.getInstance().addCssClass(hd);content.addClass(hd);}
;if(hd||hc){qx.ui.core.queue.Layout.add(this);}
;}
,_applyToolTipText:function(hg,hf){if(qx.core.Environment.get(z)){if(this.__jU){return;}
;var he=qx.locale.Manager.getInstance();this.__jU=he.addListener(eX,function(){var hh=this.getToolTipText();if(hh&&hh.translate){this.setToolTipText(hh.translate());}
;}
,this);}
;}
,_applyTextColor:function(hj,hi){}
,_applyZIndex:function(hl,hk){this.getContentElement().setStyle(dp,hl==null?0:hl);}
,_applyVisibility:function(hn,hm){var content=this.getContentElement();if(hn===Y){content.show();}
else {content.hide();}
;var parent=this.$$parent;if(parent&&(hm==null||hn==null||hm===ek||hn===ek)){parent.invalidateLayoutChildren();}
;qx.ui.core.queue.Visibility.add(this);}
,_applyOpacity:function(hp,ho){this.getContentElement().setStyle(dm,hp==1?null:hp);}
,_applyCursor:function(hr,hq){if(hr==null&&!this.isSelectable()){hr=dC;}
;this.getContentElement().setStyle(dM,hr,qx.core.Environment.get(ei)==eU);}
,_applyBackgroundColor:function(hv,hu){var ht=this.getBackgroundColor();var content=this.getContentElement();var hs=qx.theme.manager.Color.getInstance().resolve(ht);content.setStyle(a,hs);}
,_applyFont:function(hx,hw){}
,_onChangeTheme:function(){if(this.isDisposed()){return;}
;qx.ui.core.LayoutItem.prototype._onChangeTheme.call(this);this.updateAppearance();var hy=this.getDecorator();this._applyDecorator(null,hy);this._applyDecorator(hy);hy=this.getFont();if(qx.lang.Type.isString(hy)){this._applyFont(hy,hy);}
;hy=this.getTextColor();if(qx.lang.Type.isString(hy)){this._applyTextColor(hy,hy);}
;hy=this.getBackgroundColor();if(qx.lang.Type.isString(hy)){this._applyBackgroundColor(hy,hy);}
;}
,__ke:null,$$stateChanges:null,_forwardStates:null,hasState:function(hA){var hz=this.__ke;return !!hz&&!!hz[hA];}
,addState:function(hE){var hD=this.__ke;if(!hD){hD=this.__ke={};}
;if(hD[hE]){return;}
;this.__ke[hE]=true;if(hE===dz){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hC=this.__kh;if(forward&&forward[hE]&&hC){var hB;for(var hF in hC){hB=hC[hF];if(hB instanceof qx.ui.core.Widget){hC[hF].addState(hE);}
;}
;}
;}
,removeState:function(hJ){var hI=this.__ke;if(!hI||!hI[hJ]){return;}
;delete this.__ke[hJ];if(hJ===dz){this.syncAppearance();}
else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hH=this.__kh;if(forward&&forward[hJ]&&hH){for(var hK in hH){var hG=hH[hK];if(hG instanceof qx.ui.core.Widget){hG.removeState(hJ);}
;}
;}
;}
,replaceState:function(hM,hP){var hO=this.__ke;if(!hO){hO=this.__ke={};}
;if(!hO[hP]){hO[hP]=true;}
;if(hO[hM]){delete hO[hM];}
;if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}
else {qx.ui.core.queue.Appearance.add(this);}
;var forward=this._forwardStates;var hN=this.__kh;if(forward&&forward[hP]&&hN){for(var hQ in hN){var hL=hN[hQ];if(hL instanceof qx.ui.core.Widget){hL.replaceState(hM,hP);}
;}
;}
;}
,__kf:null,__kg:null,syncAppearance:function(){var hV=this.__ke;var hU=this.__kf;var hW=qx.theme.manager.Appearance.getInstance();var hS=qx.core.Property.$$method.setThemed;var ib=qx.core.Property.$$method.resetThemed;if(this.__kg){delete this.__kg;if(hU){var hR=hW.styleFrom(hU,hV,null,this.getAppearance());hU=null;}
;}
;if(!hU){var hT=this;var hX=[];do {hX.push(hT.$$subcontrol||hT.getAppearance());}
while(hT=hT.$$subparent);hU=hX.reverse().join(eH).replace(/#[0-9]+/g,eL);this.__kf=hU;}
;var ia=hW.styleFrom(hU,hV,null,this.getAppearance());if(ia){if(hR){for(var hY in hR){if(ia[hY]===undefined){this[ib[hY]]();}
;}
;}
;if(qx.core.Environment.get(eo)){for(var hY in ia){if(!this[hS[hY]]){throw new Error(this.classname+dQ+hY+P+hU);}
;}
;}
;for(var hY in ia){ia[hY]===undefined?this[ib[hY]]():this[hS[hY]](ia[hY]);}
;}
else if(hR){for(var hY in hR){this[ib[hY]]();}
;}
;this.fireDataEvent(O,this.__ke);}
,_applyAppearance:function(ie,ic){this.updateAppearance();}
,checkAppearanceNeeds:function(){if(!this.__jT){qx.ui.core.queue.Appearance.add(this);this.__jT=true;}
else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);delete this.$$stateChanges;}
;}
,updateAppearance:function(){this.__kg=true;qx.ui.core.queue.Appearance.add(this);var ii=this.__kh;if(ii){var ig;for(var ih in ii){ig=ii[ih];if(ig instanceof qx.ui.core.Widget){ig.updateAppearance();}
;}
;}
;}
,syncWidget:function(ij){}
,getEventTarget:function(){var ik=this;while(ik.getAnonymous()){ik=ik.getLayoutParent();if(!ik){return null;}
;}
;return ik;}
,getFocusTarget:function(){var il=this;if(!il.getEnabled()){return null;}
;while(il.getAnonymous()||!il.getFocusable()){il=il.getLayoutParent();if(!il||!il.getEnabled()){return null;}
;}
;return il;}
,getFocusElement:function(){return this.getContentElement();}
,isTabable:function(){return (!!this.getContentElement().getDomElement())&&this.isFocusable();}
,_applyFocusable:function(ip,im){var io=this.getFocusElement();if(ip){var iq=this.getTabIndex();if(iq==null){iq=1;}
;io.setAttribute(eA,iq);io.setStyle(dt,ds);}
else {if(io.isNativelyFocusable()){io.setAttribute(eA,-1);}
else if(im){io.setAttribute(eA,null);}
;}
;}
,_applyKeepFocus:function(is){var ir=this.getFocusElement();ir.setAttribute(eV,is?dk:null);}
,_applyKeepActive:function(iu){var it=this.getContentElement();it.setAttribute(eO,iu?dk:null);}
,_applyTabIndex:function(iv){if(iv==null){iv=1;}
else if(iv<1||iv>32000){throw new Error(dK);}
;if(this.getFocusable()&&iv!=null){this.getFocusElement().setAttribute(eA,iv);}
;}
,_applySelectable:function(ix,iw){if(iw!==null){this._applyCursor(this.getCursor());}
;this.getContentElement().setSelectable(ix);}
,_applyEnabled:function(iz,iy){if(iz===false){this.addState(p);this.removeState(dz);if(this.isFocusable()){this.removeState(o);this._applyFocusable(false,true);}
;if(this.isDraggable()){this._applyDraggable(false,true);}
;if(this.isDroppable()){this._applyDroppable(false,true);}
;}
else {this.removeState(p);if(this.isFocusable()){this._applyFocusable(true,false);}
;if(this.isDraggable()){this._applyDraggable(true,false);}
;if(this.isDroppable()){this._applyDroppable(true,false);}
;}
;}
,_applyNativeContextMenu:function(iB,iA,name){}
,_applyContextMenu:function(iD,iC){if(iC){iC.removeState(eT);if(iC.getOpener()==this){iC.resetOpener();}
;if(!iD){this.removeListener(eT,this._onContextMenuOpen);this.removeListener(dB,this._onContextMenuOpen);iC.removeListener(dc,this._onBeforeContextMenuOpen,this);}
;}
;if(iD){iD.setOpener(this);iD.addState(eT);if(!iC){this.addListener(eT,this._onContextMenuOpen);this.addListener(dB,this._onContextMenuOpen);iD.addListener(dc,this._onBeforeContextMenuOpen,this);}
;}
;}
,_onContextMenuOpen:function(e){if(e.getType()==dB){if(e.getPointerType()!==d){return;}
;}
;this.getContextMenu().openAtPointer(e);e.stop();}
,_onBeforeContextMenuOpen:function(e){if(e.getData()==Y&&this.hasListener(eG)){this.fireDataEvent(eG,e);}
;}
,_onStopEvent:function(e){e.stopPropagation();}
,_getDragDropCursor:function(){return qx.ui.core.DragDropCursor.getInstance();}
,_applyDraggable:function(iF,iE){if(!this.isEnabled()&&iF===true){iF=false;}
;this._getDragDropCursor();if(iF){this.addListener(v,this._onDragStart);this.addListener(b,this._onDrag);this.addListener(I,this._onDragEnd);this.addListener(A,this._onDragChange);}
else {this.removeListener(v,this._onDragStart);this.removeListener(b,this._onDrag);this.removeListener(I,this._onDragEnd);this.removeListener(A,this._onDragChange);}
;this.getContentElement().setAttribute(M,iF?dk:null);}
,_applyDroppable:function(iH,iG){if(!this.isEnabled()&&iH===true){iH=false;}
;this.getContentElement().setAttribute(dN,iH?dk:null);}
,_onDragStart:function(e){this._getDragDropCursor().placeToPointer(e);this.getApplicationRoot().setGlobalCursor(dC);}
,_onDrag:function(e){this._getDragDropCursor().placeToPointer(e);}
,_onDragEnd:function(e){this._getDragDropCursor().moveTo(-1000,-1000);this.getApplicationRoot().resetGlobalCursor();}
,_onDragChange:function(e){var iI=this._getDragDropCursor();var iJ=e.getCurrentAction();iJ?iI.setAction(iJ):iI.resetAction();}
,visualizeFocus:function(){this.addState(o);}
,visualizeBlur:function(){this.removeState(o);}
,scrollChildIntoView:function(iO,iN,iM,iL){iL=typeof iL==eE?true:iL;var iK=qx.ui.core.queue.Layout;var parent;if(iL){iL=!iK.isScheduled(iO);parent=iO.getLayoutParent();if(iL&&parent){iL=!iK.isScheduled(parent);if(iL){parent.getChildren().forEach(function(iP){iL=iL&&!iK.isScheduled(iP);}
);}
;}
;}
;this.scrollChildIntoViewX(iO,iN,iL);this.scrollChildIntoViewY(iO,iM,iL);}
,scrollChildIntoViewX:function(iS,iQ,iR){this.getContentElement().scrollChildIntoViewX(iS.getContentElement(),iQ,iR);}
,scrollChildIntoViewY:function(iV,iT,iU){this.getContentElement().scrollChildIntoViewY(iV.getContentElement(),iT,iU);}
,focus:function(){if(this.isFocusable()){this.getFocusElement().focus();}
else {throw new Error(dU);}
;}
,blur:function(){if(this.isFocusable()){this.getFocusElement().blur();}
else {throw new Error(dU);}
;}
,activate:function(){this.getContentElement().activate();}
,deactivate:function(){this.getContentElement().deactivate();}
,tabFocus:function(){this.getFocusElement().focus();}
,hasChildControl:function(iW){if(!this.__kh){return false;}
;return !!this.__kh[iW];}
,__kh:null,_getCreatedChildControls:function(){return this.__kh;}
,getChildControl:function(ja,iY){if(!this.__kh){if(iY){return null;}
;this.__kh={};}
;var iX=this.__kh[ja];if(iX){return iX;}
;if(iY===true){return null;}
;return this._createChildControl(ja);}
,_showChildControl:function(jc){var jb=this.getChildControl(jc);jb.show();return jb;}
,_excludeChildControl:function(je){var jd=this.getChildControl(je,true);if(jd){jd.exclude();}
;}
,_isChildControlVisible:function(jg){var jf=this.getChildControl(jg,true);if(jf){return jf.isVisible();}
;return false;}
,_releaseChildControl:function(jk){var jh=this.getChildControl(jk,false);if(!jh){throw new Error(u+jk);}
;delete jh.$$subcontrol;delete jh.$$subparent;var ji=this.__ke;var forward=this._forwardStates;if(ji&&forward&&jh instanceof qx.ui.core.Widget){for(var jj in ji){if(forward[jj]){jh.removeState(jj);}
;}
;}
;delete this.__kh[jk];return jh;}
,_createChildControl:function(jp){if(!this.__kh){this.__kh={};}
else if(this.__kh[jp]){throw new Error(L+jp+dH);}
;var jm=jp.indexOf(V);try{if(jm==-1){var jl=this._createChildControlImpl(jp);}
else {var jl=this._createChildControlImpl(jp.substring(0,jm),jp.substring(jm+1,jp.length));}
;}
catch(jq){jq.message=dY+jp+R+this.toString()+fa+jq.message;throw jq;}
;if(!jl){throw new Error(u+jp);}
;jl.$$subcontrol=jp;jl.$$subparent=this;var jn=this.__ke;var forward=this._forwardStates;if(jn&&forward&&jl instanceof qx.ui.core.Widget){for(var jo in jn){if(forward[jo]){jl.addState(jo);}
;}
;}
;this.fireDataEvent(s,jl);return this.__kh[jp]=jl;}
,_createChildControlImpl:function(js,jr){return null;}
,_disposeChildControls:function(){var jw=this.__kh;if(!jw){return;}
;var ju=qx.ui.core.Widget;for(var jv in jw){var jt=jw[jv];if(!ju.contains(this,jt)){jt.destroy();}
else {jt.dispose();}
;}
;delete this.__kh;}
,_findTopControl:function(){var jx=this;while(jx){if(!jx.$$subparent){return jx;}
;jx=jx.$$subparent;}
;return null;}
,getSubcontrolId:function(){return this.$$subcontrol||null;}
,getContentLocation:function(jz){var jy=this.getContentElement().getDomElement();return jy?qx.bom.element.Location.get(jy,jz):null;}
,setDomLeft:function(jB){var jA=this.getContentElement().getDomElement();if(jA){jA.style.left=jB+dG;}
else {throw new Error(ej);}
;}
,setDomTop:function(jD){var jC=this.getContentElement().getDomElement();if(jC){jC.style.top=jD+dG;}
else {throw new Error(ej);}
;}
,setDomPosition:function(jF,top){var jE=this.getContentElement().getDomElement();if(jE){jE.style.left=jF+dG;jE.style.top=top+dG;}
else {throw new Error(ej);}
;}
,destroy:function(){if(this.$$disposed){return;}
;var parent=this.$$parent;if(parent){parent._remove(this);}
;qx.ui.core.queue.Dispose.add(this);}
,clone:function(){var jG=qx.ui.core.LayoutItem.prototype.clone.call(this);if(this.getChildren){var jH=this.getChildren();for(var i=0,l=jH.length;i<l;i++ ){jG.add(jH[i].clone());}
;}
;return jG;}
},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(z)){if(this.__jU){qx.locale.Manager.getInstance().removeListenerById(this.__jU);}
;}
;var jI=this.getContentElement();if(jI){jI.disconnectWidget(this);}
;this._disposeChildControls();qx.ui.core.queue.Appearance.remove(this);qx.ui.core.queue.Layout.remove(this);qx.ui.core.queue.Visibility.remove(this);qx.ui.core.queue.Widget.remove(this);}
;if(this.getContextMenu()){this.setContextMenu(null);}
;if(!qx.core.ObjectRegistry.inShutDown){this.clearSeparators();this.__jW=null;}
else {this._disposeArray(dj);}
;this._disposeArray(dX);this.__ke=this.__kh=null;this._disposeObjects(x,r);}
});}
)();
(function(){var a="blur",b="activate",c="focus",d="qx.ui.core.EventHandler";qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this.__dn=qx.event.Registration.getManager(window);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,longtap:1,swipe:1,dbltap:1,track:1,trackend:1,trackstart:1,pinch:1,rotate:1,roll:1,pointermove:1,pointerover:1,pointerout:1,pointerdown:1,pointerup:1,pointercancel:1},IGNORE_CAN_HANDLE:false},members:{__dn:null,__ki:{focusin:1,focusout:1,focus:1,blur:1},__kj:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(f,e){return f instanceof qx.ui.core.Widget;}
,_dispatchEvent:function(j){var o=j.getTarget();var n=qx.ui.core.Widget.getWidgetByElement(o);var p=false;while(n&&n.isAnonymous()){var p=true;n=n.getLayoutParent();}
;if(n&&p&&j.getType()==b){n.getContentElement().activate();}
;if(this.__ki[j.getType()]){n=n&&n.getFocusTarget();if(!n){return;}
;}
;if(j.getRelatedTarget){var w=j.getRelatedTarget();var v=qx.ui.core.Widget.getWidgetByElement(w);while(v&&v.isAnonymous()){v=v.getLayoutParent();}
;if(v){if(this.__ki[j.getType()]){v=v.getFocusTarget();}
;if(v===n){return;}
;}
;}
;var r=j.getCurrentTarget();var t=qx.ui.core.Widget.getWidgetByElement(r);if(!t||t.isAnonymous()){return;}
;if(this.__ki[j.getType()]){t=t.getFocusTarget();}
;var u=j.getType();if(!t||!(t.isEnabled()||this.__kj[u])){return;}
;var g=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;var q=this.__dn.getListeners(t,u,g);if(j.getEventPhase()==qx.event.type.Event.AT_TARGET){if(!q){q=[];}
;var h=this.__dn.getListeners(t,u,!g);if(h){q=q.concat(h);}
;}
;if(!q||q.length===0){return;}
;var k=qx.event.Pool.getInstance().getObject(j.constructor);j.clone(k);k.setTarget(n);k.setRelatedTarget(v||null);k.setCurrentTarget(t);var x=j.getOriginalTarget();if(x){var m=qx.ui.core.Widget.getWidgetByElement(x);while(m&&m.isAnonymous()){m=m.getLayoutParent();}
;k.setOriginalTarget(m);}
else {k.setOriginalTarget(o);}
;for(var i=0,l=q.length;i<l;i++ ){var s=q[i].context||t;q[i].handler.call(s,k);}
;if(k.getPropagationStopped()){j.stopPropagation();}
;if(k.getDefaultPrevented()){j.preventDefault();}
;qx.event.Pool.getInstance().poolObject(k);}
,registerEvent:function(A,z,y){var B;if(z===c||z===a){B=A.getFocusElement();}
else {B=A.getContentElement();}
;if(B){B.addListener(z,this._dispatchEvent,this,y);}
;}
,unregisterEvent:function(E,D,C){var F;if(D===c||D===a){F=E.getFocusElement();}
else {F=E.getContentElement();}
;if(F){F.removeListener(D,this._dispatchEvent,this,C);}
;}
},destruct:function(){this.__dn=null;}
,defer:function(G){qx.event.Registration.addHandler(G);}
});}
)();
(function(){var a="blur",b="qxDraggable",c="touch",d="qx.ui.core.Widget",f="longtap",g="Escape",h="drag",i="keydown",j="Unsupported data type: ",k="roll",l="drop",m="qxDroppable",n="qx.event.handler.DragDrop",o="mouse",p="This method must not be used outside the drop event listener!",q="Control",r="Shift",s="!",t="alias",u="droprequest",v="copy",w="pointerup",x="dragstart",y="move",z="pointerdown",A="dragchange",B="on",C="Alt",D="keyup",E="keypress",F="dragleave",G="dragend",H="dragover",I="left",J="Please use a droprequest listener to the drag source to fill the manager with data!",K="pointermove";qx.Class.define(n,{extend:qx.core.Object,implement:[qx.event.IEventHandler,qx.core.IDisposable],construct:function(L){qx.core.Object.call(this);this.__dn=L;this.__dD=L.getWindow().document.documentElement;this.__dn.addListener(this.__dD,f,this._onLongtap,this);this.__dn.addListener(this.__dD,z,this._onPointerdown,this,true);qx.event.Registration.addListener(window,a,this._onWindowBlur,this);this.__kw();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true,ALLOWED_BUTTONS:[I],MIN_DRAG_DISTANCE:5},properties:{cursor:{check:d,nullable:true,init:null}},members:{__dn:null,__dD:null,__kk:null,__kl:null,__km:null,__kn:null,__ko:null,__d:null,__kp:null,__kq:null,__kr:false,__ks:false,__kt:false,__ku:null,__kv:null,canHandleEvent:function(N,M){}
,registerEvent:function(Q,P,O){}
,unregisterEvent:function(T,S,R){}
,addType:function(U){this.__km[U]=true;}
,addAction:function(V){this.__kn[V]=true;}
,supportsType:function(W){return !!this.__km[W];}
,supportsAction:function(X){return !!this.__kn[X];}
,setDropAllowed:function(Y){this.__ks=Y;this.__kx();}
,getData:function(ba){if(!this.__ks||!this.__kk){throw new Error(p);}
;if(!this.__km[ba]){throw new Error(j+ba+s);}
;if(!this.__d[ba]){this.__kp=ba;this.__il(u,this.__kl,this.__kk,false);}
;if(!this.__d[ba]){throw new Error(J);}
;return this.__d[ba]||null;}
,getCurrentAction:function(){this.__kx();return this.__kq;}
,getDragTarget:function(){return this.__ku;}
,addData:function(bb,bc){this.__d[bb]=bc;}
,getCurrentType:function(){return this.__kp;}
,isSessionActive:function(){return this.__kr;}
,__kw:function(){this.__km={};this.__kn={};this.__ko={};this.__d={};}
,__kx:function(){if(this.__kl==null){return;}
;var bg=this.__kn;var bd=this.__ko;var be=null;if(this.__ks){if(bd.Shift&&bd.Control&&bg.alias){be=t;}
else if(bd.Shift&&bd.Alt&&bg.copy){be=v;}
else if(bd.Shift&&bg.move){be=y;}
else if(bd.Alt&&bg.alias){be=t;}
else if(bd.Control&&bg.copy){be=v;}
else if(bg.move){be=y;}
else if(bg.copy){be=v;}
else if(bg.alias){be=t;}
;}
;var bf=this.__kq;if(be!=bf){if(this.__kk){this.__kq=be;this.__kt=this.__il(A,this.__kk,this.__kl,true);if(!this.__kt){be=null;}
;}
;if(be!=bf){this.__kq=be;this.__il(A,this.__kl,this.__kk,false);}
;}
;}
,__il:function(bm,bi,bj,bk,bn){var bl=qx.event.Registration;var bh=bl.createEvent(bm,qx.event.type.Drag,[bk,bn]);if(bi!==bj){bh.setRelatedTarget(bj);}
;return bl.dispatchEvent(bi,bh);}
,__ky:function(bo){while(bo&&bo.nodeType==1){if(bo.getAttribute(b)==B){return bo;}
;bo=bo.parentNode;}
;return null;}
,__kz:function(bp){while(bp&&bp.nodeType==1){if(bp.getAttribute(m)==B){return bp;}
;bp=bp.parentNode;}
;return null;}
,clearSession:function(){this.__dn.removeListener(this.__dD,K,this._onPointermove,this);this.__dn.removeListener(this.__dD,w,this._onPointerup,this,true);this.__dn.removeListener(this.__dD,i,this._onKeyDown,this,true);this.__dn.removeListener(this.__dD,D,this._onKeyUp,this,true);this.__dn.removeListener(this.__dD,E,this._onKeyPress,this,true);this.__dn.removeListener(this.__dD,k,this._onRoll,this,true);if(this.__kl){this.__il(G,this.__kl,this.__kk,false);}
;this.__ks=false;this.__kk=null;if(this.__ku){this.__ku.removeState(h);this.__ku=null;}
;this.__kl=null;this.__kr=false;this.__kv=null;this.__kw();}
,_onLongtap:function(e){if(e.getPointerType()!=c){return;}
;this.__dn.addListener(this.__dD,k,this._onRoll,this,true);this._start(e);}
,_start:function(e){var br=qx.event.handler.DragDrop.ALLOWED_BUTTONS.indexOf(e.getButton())!==-1;if(!e.isPrimary()||!br){return false;}
;var bs=this.__kv?this.__kv.target:e.getTarget();var bq=this.__ky(bs);if(bq){this.__kl=bq;var bt=qx.ui.core.Widget.getWidgetByElement(this.__kv.original);while(bt&&bt.isAnonymous()){bt=bt.getLayoutParent();}
;if(bt){this.__ku=bt;bt.addState(h);}
;if(!this.__il(x,this.__kl,this.__kk,true,e)){return false;}
;this.__dn.addListener(this.__dD,i,this._onKeyDown,this,true);this.__dn.addListener(this.__dD,D,this._onKeyUp,this,true);this.__dn.addListener(this.__dD,E,this._onKeyPress,this,true);this.__kr=true;return true;}
;}
,_onPointerdown:function(e){if(e.isPrimary()){this.__kv={target:e.getTarget(),original:e.getOriginalTarget(),left:e.getDocumentLeft(),top:e.getDocumentTop()};this.__dn.addListener(this.__dD,K,this._onPointermove,this);this.__dn.addListener(this.__dD,w,this._onPointerup,this,true);}
;}
,_onPointermove:function(e){if(!e.isPrimary()){return;}
;if(!this.__kr&&e.getPointerType()==o){var bA=this._getDelta(e);var bu=qx.event.handler.DragDrop.MIN_DRAG_DISTANCE;if(bA&&(Math.abs(bA.x)>bu||Math.abs(bA.y)>bu)){if(!this._start(e)){this.clearSession();return;}
;}
;}
;if(!this.__kr){return;}
;if(!this.__il(h,this.__kl,this.__kk,true,e)){this.clearSession();}
;var bv=e.getTarget();var by=this.getCursor();if(!by){by=qx.ui.core.DragDropCursor.getInstance();}
;var bx=by.getContentElement().getDomElement();if(bv!==bx){var bw=this.__kz(bv);if(bw&&bw!=this.__kk){if(this.__kk){this.__il(F,this.__kk,this.__kl,false,e);}
;this.__ks=true;this.__kk=bw;this.__ks=this.__il(H,bw,this.__kl,true,e);}
else if(!bw&&this.__kk){this.__il(F,this.__kk,this.__kl,false,e);this.__kk=null;this.__ks=false;qx.event.Timer.once(this.__kx,this,0);}
;}
;var bz=this.__ko;bz.Control=e.isCtrlPressed();bz.Shift=e.isShiftPressed();bz.Alt=e.isAltPressed();this.__kx();}
,_getDelta:function(e){if(!this.__kv){return null;}
;var bB=e.getDocumentLeft()-this.__kv.left;var bC=e.getDocumentTop()-this.__kv.top;return {"x":bB,"y":bC};}
,_onPointerup:function(e){if(!e.isPrimary()){return;}
;if(this.__ks&&this.__kt){this.__il(l,this.__kk,this.__kl,false,e);}
;if(e.getTarget()==this.__kl){e.stopPropagation();}
;this.clearSession();}
,_onRoll:function(e){e.stop();}
,_onWindowBlur:function(e){this.clearSession();}
,_onKeyDown:function(e){var bD=e.getKeyIdentifier();switch(bD){case C:case q:case r:if(!this.__ko[bD]){this.__ko[bD]=true;this.__kx();}
;};}
,_onKeyUp:function(e){var bE=e.getKeyIdentifier();switch(bE){case C:case q:case r:if(this.__ko[bE]){this.__ko[bE]=false;this.__kx();}
;};}
,_onKeyPress:function(e){var bF=e.getKeyIdentifier();switch(bF){case g:this.clearSession();};}
},destruct:function(){qx.event.Registration.removeListener(window,a,this._onWindowBlur,this);this.__kl=this.__kk=this.__dn=this.__dD=this.__km=this.__kn=this.__ko=this.__d=null;}
,defer:function(bG){qx.event.Registration.addHandler(bG);}
});}
)();
(function(){var a="qx.event.type.Drag",b="touch";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(c,d){qx.event.type.Event.prototype.init.call(this,true,c);if(d){this._native=d.getNativeEvent()||null;this._originalTarget=d.getOriginalTarget()||null;}
else {this._native=null;this._originalTarget=null;}
;return this;}
,clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);f._native=this._native;return f;}
,getDocumentLeft:function(){if(this._native==null){return 0;}
;var x=this._native.pageX;if(x!==undefined){if(x==0&&this._native.pointerType==b){x=this._native._original.changedTouches[0].pageX||0;}
;return Math.round(x);}
else {var g=qx.dom.Node.getWindow(this._native.srcElement);return Math.round(this._native.clientX)+qx.bom.Viewport.getScrollLeft(g);}
;}
,getDocumentTop:function(){if(this._native==null){return 0;}
;var y=this._native.pageY;if(y!==undefined){if(y==0&&this._native.pointerType==b){y=this._native._original.changedTouches[0].pageY||0;}
;return Math.round(y);}
else {var h=qx.dom.Node.getWindow(this._native.srcElement);return Math.round(this._native.clientY)+qx.bom.Viewport.getScrollTop(h);}
;}
,getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);}
,addType:function(i){this.getManager().addType(i);}
,addAction:function(j){this.getManager().addAction(j);}
,supportsType:function(k){return this.getManager().supportsType(k);}
,supportsAction:function(l){return this.getManager().supportsAction(l);}
,addData:function(m,n){this.getManager().addData(m,n);}
,getData:function(o){return this.getManager().getData(o);}
,getCurrentType:function(){return this.getManager().getCurrentType();}
,getCurrentAction:function(){if(this.getDefaultPrevented()){return null;}
;return this.getManager().getCurrentAction();}
,setDropAllowed:function(p){this.getManager().setDropAllowed(p);}
,getDragTarget:function(){return this.getManager().getDragTarget();}
,stopSession:function(){this.getManager().clearSession();}
}});}
)();
(function(){var a="best-fit",b="placementRight",c="Boolean",d="bottom-right",e="' ",f="widget",g="placementLeft",h="qx.ui.core.MPlacement",i="left-top",j="Integer",k="left-middle",l="right-middle",m="top-center",n="[qx.ui.core.MPlacement.setMoveDirection()], the value was '",o="offsetRight",p="interval",q="keep-align",r="bottom-left",s="pointer",t="direct",u="shorthand",v="Invalid value for the parameter 'direction' ",w="offsetLeft",x="top-left",y="appear",z="offsetBottom",A="top",B="top-right",C="offsetTop",D="but 'top' or 'left' are allowed.",E="right-bottom",F="disappear",G="right-top",H="bottom-center",I="left-bottom",J="left";qx.Mixin.define(h,{statics:{__hf:null,__kA:J,setVisibleElement:function(K){this.__hf=K;}
,getVisibleElement:function(){return this.__hf;}
,setMoveDirection:function(L){if(L===A||L===J){this.__kA=L;}
else {throw new Error(v+n+L+e+D);}
;}
,getMoveDirection:function(){return this.__kA;}
},properties:{position:{check:[x,m,B,r,H,d,i,k,I,G,l,E],init:r,themeable:true},placeMethod:{check:[f,s],init:s,themeable:true},domMove:{check:c,init:false},placementModeX:{check:[t,q,a],init:q,themeable:true},placementModeY:{check:[t,q,a],init:q,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[C,o,z,w],mode:u,themeable:true}},members:{__kB:null,__kC:null,__kD:null,getLayoutLocation:function(N){var P,O,R,top;O=N.getBounds();if(!O){return null;}
;R=O.left;top=O.top;var Q=O;N=N.getLayoutParent();while(N&&!N.isRootWidget()){O=N.getBounds();R+=O.left;top+=O.top;P=N.getInsets();R+=P.left;top+=P.top;N=N.getLayoutParent();}
;if(N.isRootWidget()){var M=N.getContentLocation();if(M){R+=M.left;top+=M.top;}
;}
;return {left:R,top:top,right:R+Q.width,bottom:top+Q.height};}
,moveTo:function(Y,top){var X=qx.ui.core.MPlacement.getVisibleElement();if(X){var W=this.getBounds();var V=X.getContentLocation();if(W&&V){var U=top+W.height;var T=Y+W.width;if((T>V.left&&Y<V.right)&&(U>V.top&&top<V.bottom)){var S=qx.ui.core.MPlacement.getMoveDirection();if(S===J){Y=Math.max(V.left-W.width,0);}
else {top=Math.max(V.top-W.height,0);}
;}
;}
;}
;if(this.getDomMove()){this.setDomPosition(Y,top);}
else {this.setLayoutProperties({left:Y,top:top});}
;}
,placeToWidget:function(bc,ba){if(ba){this.__kE();this.__kB=qx.lang.Function.bind(this.placeToWidget,this,bc,false);qx.event.Idle.getInstance().addListener(p,this.__kB);this.__kD=function(){this.__kE();}
;this.addListener(F,this.__kD,this);}
;var bb=bc.getContentLocation()||this.getLayoutLocation(bc);if(bb!=null){this._place(bb);return true;}
else {return false;}
;}
,__kE:function(){if(this.__kB){qx.event.Idle.getInstance().removeListener(p,this.__kB);this.__kB=null;}
;if(this.__kD){this.removeListener(F,this.__kD,this);this.__kD=null;}
;}
,placeToPointer:function(event){var be=Math.round(event.getDocumentLeft());var top=Math.round(event.getDocumentTop());var bd={left:be,top:top,right:be,bottom:top};this._place(bd);}
,placeToElement:function(bh,bf){var location=qx.bom.element.Location.get(bh);var bg={left:location.left,top:location.top,right:location.left+bh.offsetWidth,bottom:location.top+bh.offsetHeight};if(bf){this.__kB=qx.lang.Function.bind(this.placeToElement,this,bh,false);qx.event.Idle.getInstance().addListener(p,this.__kB);this.addListener(F,function(){if(this.__kB){qx.event.Idle.getInstance().removeListener(p,this.__kB);this.__kB=null;}
;}
,this);}
;this._place(bg);}
,placeToPoint:function(bj){var bi={left:bj.left,top:bj.top,right:bj.left,bottom:bj.top};this._place(bi);}
,_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};}
,__kF:function(bk){var bl=null;if(this._computePlacementSize){var bl=this._computePlacementSize();}
else if(this.isVisible()){var bl=this.getBounds();}
;if(bl==null){this.addListenerOnce(y,function(){this.__kF(bk);}
,this);}
else {bk.call(this,bl);}
;}
,_place:function(bm){this.__kF(function(bo){var bn=qx.util.placement.Placement.compute(bo,this.getLayoutParent().getBounds(),bm,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());this.removeState(g);this.removeState(b);this.addState(bm.left<bn.left?b:g);this.moveTo(bn.left,bn.top);}
);}
},destruct:function(){this.__kE();}
});}
)();
(function(){var a="Number",b="interval",c="_applyTimeoutInterval",d="qx.event.type.Event",e="qx.event.Idle",f="singleton";qx.Class.define(e,{extend:qx.core.Object,implement:[qx.core.IDisposable],type:f,construct:function(){qx.core.Object.call(this);}
,events:{"interval":d},properties:{timeoutInterval:{check:a,init:100,apply:c}},members:{__dE:null,_applyTimeoutInterval:function(g){if(this.__dE){this.__dE.setInterval(g);}
;}
,_onInterval:function(){this.fireEvent(b);}
,__kG:function(){if(!this.__dE&&this.hasListener(b)){var h=new qx.event.Timer(this.getTimeoutInterval());h.addListener(b,this._onInterval,this);h.start();this.__dE=h;}
;}
,__kH:function(){if(this.__dE&&!this.hasListener(b)){this.__dE.stop();this.__dE.dispose();this.__dE=null;}
;}
,addListener:function(k,i,self,j){var l=qx.core.Object.prototype.addListener.call(this,k,i,self,j);this.__kG();return l;}
,addListenerOnce:function(o,m,self,n){var p=qx.core.Object.prototype.addListenerOnce.call(this,o,m,self,n);this.__kG();return p;}
,removeListener:function(s,q,self,r){var t=qx.core.Object.prototype.removeListener.call(this,s,q,self,r);this.__kH();return t;}
,removeListenerById:function(u){var v=qx.core.Object.prototype.removeListenerById.call(this,u);this.__kH();return v;}
},destruct:function(){if(this.__dE){this.__dE.stop();}
;this.__dE=null;}
});}
)();
(function(){var a="-",b="best-fit",c="size",d="edge-start",e="target.bottom",f="offsets",g='__kI',h="size.width",i="bottom",j="offsets.bottom",k="qx.util.placement.Placement",l="Please use '",m="qx.debug",n="keep-align",o="center",p="target.right",q="direct",r="offsets.right",s="middle",t="target",u="align-start",v="Invalid 'mode' argument!'",w="left",x="align-end",y="Class",z="offsets.left",A="top",B="area",C="right",D="edge-end",E="target.top",F="area.height",G="target.left",H="align-center",I="area.width",J="' instead!",K="size.height",L="offsets.top";qx.Class.define(k,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__kI=qx.util.placement.DirectAxis;}
,properties:{axisX:{check:y},axisY:{check:y},edge:{check:[A,C,i,w],init:A},align:{check:[A,C,i,w,o,s],init:C}},statics:{__kJ:null,compute:function(W,P,M,N,V,Q,R){this.__kJ=this.__kJ||new qx.util.placement.Placement();var T=V.split(a);var S=T[0];var O=T[1];if(qx.core.Environment.get(m)){if(O===o||O===s){var U=s;if(S===A||S===i){U=o;}
;qx.core.Assert.assertEquals(U,O,l+S+a+U+J);}
;}
;this.__kJ.set({axisX:this.__kN(Q),axisY:this.__kN(R),edge:S,align:O});return this.__kJ.compute(W,P,M,N);}
,__kK:null,__kL:null,__kM:null,__kN:function(X){switch(X){case q:this.__kK=this.__kK||qx.util.placement.DirectAxis;return this.__kK;case n:this.__kL=this.__kL||qx.util.placement.KeepAlignAxis;return this.__kL;case b:this.__kM=this.__kM||qx.util.placement.BestFitAxis;return this.__kM;default:throw new Error(v);};}
},members:{__kI:null,compute:function(be,bb,Y,ba){if(qx.core.Environment.get(m)){this.assertObject(be,c);this.assertNumber(be.width,h);this.assertNumber(be.height,K);this.assertObject(bb,B);this.assertNumber(bb.width,I);this.assertNumber(bb.height,F);this.assertObject(Y,t);this.assertNumber(Y.top,E);this.assertNumber(Y.right,p);this.assertNumber(Y.bottom,e);this.assertNumber(Y.left,G);this.assertObject(ba,f);this.assertNumber(ba.top,L);this.assertNumber(ba.right,r);this.assertNumber(ba.bottom,j);this.assertNumber(ba.left,z);}
;var bc=this.getAxisX()||this.__kI;var bf=bc.computeStart(be.width,{start:Y.left,end:Y.right},{start:ba.left,end:ba.right},bb.width,this.__kO());var bd=this.getAxisY()||this.__kI;var top=bd.computeStart(be.height,{start:Y.top,end:Y.bottom},{start:ba.top,end:ba.bottom},bb.height,this.__kP());return {left:bf,top:top};}
,__kO:function(){var bh=this.getEdge();var bg=this.getAlign();if(bh==w){return d;}
else if(bh==C){return D;}
else if(bg==w){return u;}
else if(bg==o){return H;}
else if(bg==C){return x;}
;}
,__kP:function(){var bj=this.getEdge();var bi=this.getAlign();if(bj==A){return d;}
else if(bj==i){return D;}
else if(bi==A){return u;}
else if(bi==s){return H;}
else if(bi==i){return x;}
;}
},destruct:function(){this._disposeObjects(g);}
});}
)();
(function(){var a="align-start",b="align-end",c="qx.util.placement.AbstractAxis",d="edge-start",e="align-center",f="abstract method call!",g="edge-end";qx.Bootstrap.define(c,{extend:Object,statics:{computeStart:function(j,k,l,h,i){throw new Error(f);}
,_moveToEdgeAndAlign:function(n,o,p,m){switch(m){case d:return o.start-p.end-n;case g:return o.end+p.start;case a:return o.start+p.start;case e:return o.start+parseInt((o.end-o.start-n)/2,10)+p.start;case b:return o.end-p.end-n;};}
,_isInRange:function(r,s,q){return r>=0&&r+s<=q;}
}});}
)();
(function(){var a="qx.util.placement.DirectAxis";qx.Bootstrap.define(a,{statics:{_moveToEdgeAndAlign:qx.util.placement.AbstractAxis._moveToEdgeAndAlign,computeStart:function(d,e,f,b,c){return this._moveToEdgeAndAlign(d,e,f,c);}
}});}
)();
(function(){var a="qx.util.placement.KeepAlignAxis",b="edge-start",c="edge-end";qx.Bootstrap.define(a,{statics:{_moveToEdgeAndAlign:qx.util.placement.AbstractAxis._moveToEdgeAndAlign,_isInRange:qx.util.placement.AbstractAxis._isInRange,computeStart:function(k,f,g,d,j){var i=this._moveToEdgeAndAlign(k,f,g,j);var e,h;if(this._isInRange(i,k,d)){return i;}
;if(j==b||j==c){e=f.start-g.end;h=f.end+g.start;}
else {e=f.end-g.end;h=f.start+g.start;}
;if(e>d-h){i=Math.max(0,e-k);}
else {i=h;}
;return i;}
}});}
)();
(function(){var a="qx.util.placement.BestFitAxis";qx.Bootstrap.define(a,{statics:{_isInRange:qx.util.placement.AbstractAxis._isInRange,_moveToEdgeAndAlign:qx.util.placement.AbstractAxis._moveToEdgeAndAlign,computeStart:function(g,c,d,b,f){var e=this._moveToEdgeAndAlign(g,c,d,f);if(this._isInRange(e,g,b)){return e;}
;if(e<0){e=Math.min(0,b-g);}
;if(e+g>b){e=Math.max(0,b-g);}
;return e;}
}});}
)();
(function(){var a="Image could not be loaded: ",b="Boolean",c="px",d="backgroundRepeat",e="http",f=".png",g="background-image",h="engine.version",j="scale",l="changeSource",m="x",n="div",o="class",p="aborted",q="background-size",r="color",s="scaled",t="3",u="qx.ui.basic.Image",v="top",w="0 0",x="fontSize",y="Font source needs either a glyph name or the unicode number in hex",z="verticalAlign",A="qx.debug",B="textAlign",C="loaded",D="backgroundImage",E="center",F="-disabled.$1",G="font",H="qx.event.type.Event",I="image",J="loadingFailed",K="css.alphaimageloaderneeded",L="1.5",M="String",N="browser.documentmode",O="backgroundPosition",P="border-box",Q="",R="changeScale",S="left",T="_applySource",U=",",V="img",W="@",X="data:image/",Y="px, ",bD="middle",bE='.',bF="nonScaled",bz="table-cell",bA=", ",bB="background",bC="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",bJ="mshtml",bK="engine.name",bL=", 0 0",bT="_applyScale",bG="try to load an unmanaged relative image: ",bH=", no-repeat",bI="position",bx="replacement",bO="2",by="no-repeat",bP="background-position",bQ="hidden",bR="alphaScaled",bM="__kQ",bS="display",bN="absolute";qx.Class.define(u,{extend:qx.ui.core.Widget,construct:function(bU){this.__kQ={};qx.ui.core.Widget.call(this);if(bU){this.setSource(bU);}
;}
,properties:{source:{check:M,init:null,nullable:true,event:l,apply:T,themeable:true},scale:{check:b,init:false,event:R,themeable:true,apply:bT},appearance:{refine:true,init:I},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:H,loaded:H,aborted:H},statics:{PLACEHOLDER_IMAGE:bC},members:{__kR:null,__kS:null,__jr:null,__kQ:null,__kT:null,__kU:null,__kV:0,_onChangeTheme:function(){qx.ui.core.Widget.prototype._onChangeTheme.call(this);this._styleSource();}
,getContentElement:function(){return this.__la();}
,_createContentElement:function(){return this.__la();}
,_getContentHint:function(){return {width:this.__kR||0,height:this.__kS||0};}
,_applyDecorator:function(bX,bW){qx.ui.core.Widget.prototype._applyDecorator.call(this,bX,bW);var bY=this.getSource();bY=qx.util.AliasManager.getInstance().resolve(bY);var bV=this.getContentElement();if(this.__kU){bV=bV.getChild(0);}
;this.__lk(bV,bY);}
,_applyTextColor:function(cb){if(this.__kX()===G){var ca=this.getContentElement();if(this.__kU){ca=ca.getChild(0);}
;if(cb){ca.setStyle(r,qx.theme.manager.Color.getInstance().resolve(cb));}
else {ca.removeStyle(r);}
;}
;}
,_applyPadding:function(cd,cc,name){qx.ui.core.Widget.prototype._applyPadding.call(this,cd,cc,name);var ce=this.getContentElement();if(this.__kU){ce.getChild(0).setStyles({top:this.getPaddingTop()||0,left:this.getPaddingLeft()||0});}
else {ce.setPadding(this.getPaddingLeft()||0,this.getPaddingTop()||0);}
;}
,renderLayout:function(ch,top,cf,ci){qx.ui.core.Widget.prototype.renderLayout.call(this,ch,top,cf,ci);var cg=this.getContentElement();if(this.__kU){cg.getChild(0).setStyles({width:cf-(this.getPaddingLeft()||0)-(this.getPaddingRight()||0),height:ci-(this.getPaddingTop()||0)-(this.getPaddingBottom()||0),top:this.getPaddingTop()||0,left:this.getPaddingLeft()||0});}
;}
,_applyEnabled:function(ck,cj){qx.ui.core.Widget.prototype._applyEnabled.call(this,ck,cj);if(this.getSource()){this._styleSource();}
;}
,_applySource:function(cm,cl){if(cl){if(qx.io.ImageLoader.isLoading(cl)){qx.io.ImageLoader.abort(cl);}
;}
;this._styleSource();}
,_applyScale:function(cn){this._styleSource();}
,__kW:function(co){this.__jr=co;}
,__kX:function(){if(this.__jr==null){var cq=this.getSource();if(cq&&qx.lang.String.startsWith(cq,W)){this.__jr=G;}
;var cp=false;if(cq!=null){cp=cq.endsWith(f);}
;if(this.getScale()&&cp&&qx.core.Environment.get(K)){this.__jr=bR;}
else if(this.getScale()){this.__jr=s;}
else {this.__jr=bF;}
;}
;return this.__jr;}
,__kY:function(cu){var cr;var cv;var ct=qx.html.Image;if(cu==G){ct=qx.html.Label;cr=true;cv=n;}
else if(cu==bR){cr=true;cv=n;}
else if(cu==bF){cr=false;cv=n;}
else {cr=true;cv=V;}
;var cw=new (ct)(cv);cw.connectWidget(this);cw.setStyles({"overflowX":bQ,"overflowY":bQ,"boxSizing":P});if(cu==G){cw.setRich(true);}
else {cw.setScale(cr);if(qx.core.Environment.get(K)){var cs=this.__kU=new qx.html.Element(n);cw.connectWidget(this);cs.setStyle(bI,bN);cs.add(cw);return cs;}
;}
;return cw;}
,__la:function(){if(this.$$disposed){return null;}
;var cx=this.__kX();if(this.__kQ[cx]==null){this.__kQ[cx]=this.__kY(cx);}
;var cy=this.__kQ[cx];if(!this.__kT){this.__kT=cy;}
;return cy;}
,_styleSource:function(){var cD=qx.util.AliasManager.getInstance();var cC=qx.util.ResourceManager.getInstance();var cF=cD.resolve(this.getSource());var cE=this.getContentElement();if(this.__kU){cE=cE.getChild(0);}
;if(!cF){this.__lj(cE);return;}
;this.__ld(cF);if((qx.core.Environment.get(bK)==bJ)&&(parseInt(qx.core.Environment.get(h),10)<9||qx.core.Environment.get(N)<9)){var cA=this.getScale()?j:by;cE.tagNameHint=qx.bom.element.Decoration.getTagName(cA,cF);}
;var cB=this.__lc();if(cC.isFontUri(cF)){this.__lf(cB,cF);}
else if(cC.has(cF)){var cG=this._findHighResolutionSource(cF);if(cG){var cI=cC.getImageHeight(cF);var cH=cC.getImageWidth(cF);this.setWidth(cI);this.setHeight(cH);var cz=cI+Y+cH+c;this.__kT.setStyle(q,cz);this.setSource(cG);cF=cG;}
;this.__lf(cB,cF);this.__lb();}
else if(qx.io.ImageLoader.isLoaded(cF)){this.__lg(cB,cF);this.__lb();}
else {this.__lh(cB,cF);}
;}
,__lb:function(){this.__kV++ ;qx.bom.AnimationFrame.request(function(cJ){if(cJ===this.__kV){this.fireEvent(C);}
else {this.fireEvent(p);}
;}
.bind(this,this.__kV));}
,__lc:function(){var cK=this.__kT;if(this.__kU){cK=cK.getChild(0);}
;return cK;}
,__ld:qx.core.Environment.select(bK,{"mshtml":function(cO){var cN=qx.core.Environment.get(K);var cL=cO.endsWith(f);var cM=cO.startsWith(W);if(cM){this.__kW(G);}
else if(cN&&cL){if(this.getScale()&&this.__kX()!=bR){this.__kW(bR);}
else if(!this.getScale()&&this.__kX()!=bF){this.__kW(bF);}
;}
else {if(this.getScale()&&this.__kX()!=s){this.__kW(s);}
else if(!this.getScale()&&this.__kX()!=bF){this.__kW(bF);}
;}
;this.__le(this.__la());}
,"default":function(cP){var cQ=cP&&qx.lang.String.startsWith(cP,W);if(cQ){this.__kW(G);}
else if(this.getScale()&&this.__kX()!=s){this.__kW(s);}
else if(!this.getScale()&&this.__kX()!=bF){this.__kW(bF);}
;this.__le(this.__la());}
}),__le:function(cU){var cT=this.__kT;if(cT!=cU){if(cT!=null){var di=c;var cR={};var cX=cT.getAllStyles();if(cX){for(var db in cX){cR[db]=cX[db];}
;}
;var da=this.getBounds();if(da!=null){cR.width=da.width+di;cR.height=da.height+di;}
;var dc=this.getInsets();cR.left=parseInt(cT.getStyle(S)||dc.left)+di;cR.top=parseInt(cT.getStyle(v)||dc.top)+di;cR.zIndex=10;var dd=this.__kU?cU.getChild(0):cU;dd.setStyles(cR,true);dd.setSelectable(this.getSelectable());if(!cT.isVisible()){cU.hide();}
else if(!cU.isVisible()){cU.show();}
;if(!cT.isIncluded()){cU.exclude();}
else if(!cU.isIncluded()){cU.include();}
;var df=cT.getParent();if(df){var cS=df.getChildren().indexOf(cT);df.removeAt(cS);df.addAt(cU,cS);}
;var cW=dd.getNodeName();if(dd.setSource){dd.setSource(null);}
else {dd.setValue(Q);}
;var cV=this.__lc();dd.tagNameHint=cW;dd.setAttribute(o,cV.getAttribute(o));qx.html.Element.flush();var dh=cV.getDomElement();var dg=cU.getDomElement();var de=cT.getListeners()||[];de.forEach(function(dj){cU.addListener(dj.type,dj.handler,dj.self,dj.capture);}
);if(dh&&dg){var cY=dh.$$hash;dh.$$hash=dg.$$hash;dg.$$hash=cY;}
;this.__kT=cU;}
;}
;}
,__lf:function(dm,dq){var dl=qx.util.ResourceManager.getInstance();var dk=dl.isFontUri(dq);if(!this.getEnabled()){var dp=dq.replace(/\.([a-z]+)$/,F);if(!dk&&dl.has(dp)){dq=dp;this.addState(bx);}
else {this.removeState(bx);}
;}
;if(!dk&&dm.getSource()===dq){return;}
;if(dk){var dt;if(this.getScale()){var ds=this.getWidth()||this.getHeight()||40;var dn=this.getHeight()||this.getWidth()||40;dt=ds>dn?dn:ds;}
else {var dr=qx.theme.manager.Font.getInstance().resolve(dq.match(/@([^/]+)/)[1]);dt=dr.getSize();}
;if(!dt){dt=0;}
;this.__lm(dt,dt);this.__lk(dm,dq);}
else {this.__lk(dm,dq);this.__lm(dl.getImageWidth(dq),dl.getImageHeight(dq));}
;}
,_applyDimension:function(){qx.ui.core.Widget.prototype._applyDimension.call(this);var dy=this.getSource()&&qx.lang.String.startsWith(this.getSource(),W);if(dy){var dv=this.getContentElement();if(dv){if(this.getScale()){var dx=this.getWidth()||this.getHeight()||40;var dw=this.getHeight()||this.getWidth()||40;dv.setStyle(x,(dx>dw?dw:dx)+c);}
else {var du=qx.theme.manager.Font.getInstance().resolve(this.getSource().match(/@([^/]+)/)[1]);dv.setStyle(x,du.getSize()+c);}
;}
;}
;}
,__lg:function(dz,dD){var dB=qx.io.ImageLoader;this.__lk(dz,dD);var dC=dB.getWidth(dD);var dA=dB.getHeight(dD);this.__lm(dC,dA);}
,__lh:function(dF,dH){var dG=qx.io.ImageLoader;if(qx.core.Environment.get(A)){var dE=dH.toLowerCase();if(!dE.startsWith(e)&&!dE.startsWith(X)){var self=this.self(arguments);if(!self.__li){self.__li={};}
;if(!self.__li[dH]){this.debug(bG+dH);self.__li[dH]=true;}
;}
;}
;if(!dG.isFailed(dH)){dG.load(dH,this.__ll,this);}
else {this.__lj(dF);}
;}
,__lj:function(dI){if(dI!=null){if(dI instanceof qx.html.Image){dI.resetSource();}
else {dI.resetValue();}
;}
;}
,__lk:function(dU,dR){var dJ=dR&&qx.lang.String.startsWith(dR,W);if(dJ){var dN=qx.util.ResourceManager.getInstance();var dQ=qx.theme.manager.Font.getInstance().resolve(dR.match(/@([^/]+)/)[1]);var dO=qx.lang.Object.clone(dQ.getStyles());delete dO.color;dU.setStyles(dO);dU.setStyle(G);dU.setStyle(bS,bz);dU.setStyle(z,bD);dU.setStyle(B,E);if(this.getScale()){dU.setStyle(x,(this.__kR>this.__kS?this.__kS:this.__kR)+c);}
else {dU.setStyle(x,dQ.getSize()+c);}
;var dL=dN.getData(dR);if(dL){dU.setValue(String.fromCharCode(dL[2]));}
else {var dV=parseInt(qx.theme.manager.Font.getInstance().resolve(dR.match(/@([^/]+)\/(.*)$/)[2]),16);this.assertNumber(dV,y);dU.setValue(String.fromCharCode(dV));}
;return;}
else if(dU.getNodeName()==n){var dX=qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator());if(dX){var dS=(dX.getStartColor()&&dX.getEndColor());var dP=dX.getBackgroundImage();if(dS||dP){var dK=this.getScale()?j:by;var dM=qx.bom.element.Decoration.getAttributes(dR,dK);var dW=dX.getStyles(true);var dT={"backgroundImage":dM.style.backgroundImage,"backgroundPosition":(dM.style.backgroundPosition||w),"backgroundRepeat":(dM.style.backgroundRepeat||by)};if(dP){dT[O]+=U+dW[bP]||w;dT[d]+=bA+dX.getBackgroundRepeat();}
;if(dS){dT[O]+=bL;dT[d]+=bH;}
;dT[D]+=U+(dW[g]||dW[bB]);dU.setStyles(dT);return;}
;}
else {dU.setSource(null);}
;}
;dU.setSource(dR);}
,_findHighResolutionSource:function(dY){var ec=[t,bO,L];var eb=parseFloat(qx.bom.client.Device.getDevicePixelRatio().toFixed(2));if(eb<=1){return false;}
;var i=ec.length;while(i>0&&eb>ec[ --i]){}
;var ea;var k;for(k=i;k>=0;k-- ){ea=this._getHighResolutionSource(dY,ec[k]);if(ea){return ea;}
;}
;for(k=i+1;k<ec.length;k++ ){ea=this._getHighResolutionSource(dY,ec[k]);if(ea){return ea;}
;}
;return null;}
,_getHighResolutionSource:function(ed,ee){var eg=ed.lastIndexOf(bE);if(eg>-1){var ef=W+ee+m;var eh=ed.slice(0,eg)+ef+ed.slice(eg);if(qx.util.ResourceManager.getInstance().has(eh)){return eh;}
;}
;return null;}
,__ll:function(ei,ej){if(this.$$disposed===true){return;}
;if(ei!==qx.util.AliasManager.getInstance().resolve(this.getSource())){this.fireEvent(p);return;}
;if(ej.failed){this.warn(a+ei);this.fireEvent(J);}
else if(ej.aborted){this.fireEvent(p);return;}
else {this.fireEvent(C);}
;this.__lg(this.__lc(),ei);}
,__lm:function(ek,em){if(ek!==this.__kR||em!==this.__kS){this.__kR=ek;this.__kS=em;qx.ui.core.queue.Layout.add(this);}
;}
},destruct:function(){for(var en in this.__kQ){if(this.__kQ.hasOwnProperty(en)){this.__kQ[en].disconnectWidget(this);}
;}
;delete this.__kT;if(this.__kU){delete this.__kU;}
;this._disposeMap(bM);}
});}
)();
(function(){var a="mshtml",b='img',c="",d="qx.globalErrorHandling",e="load",f="qx.io.ImageLoader";qx.Bootstrap.define(f,{statics:{__de:{},__ln:{width:null,height:null},__lo:/\.(png|gif|jpg|jpeg|bmp)\b/i,__lp:/^data:image\/(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(g){var h=this.__de[g];return !!(h&&h.loaded);}
,isFailed:function(j){var k=this.__de[j];return !!(k&&k.failed);}
,isLoading:function(m){var n=this.__de[m];return !!(n&&n.loading);}
,getFormat:function(r){var q=this.__de[r];if(!q||!q.format){var o=this.__lp.exec(r);if(o!=null){var p=(q&&qx.lang.Type.isNumber(q.width)?q.width:this.__ln.width);var s=(q&&qx.lang.Type.isNumber(q.height)?q.height:this.__ln.height);q={loaded:true,format:o[1],width:p,height:s};}
;}
;return q?q.format:null;}
,getSize:function(t){var u=this.__de[t];return u?{width:u.width,height:u.height}:this.__ln;}
,getWidth:function(v){var w=this.__de[v];return w?w.width:null;}
,getHeight:function(x){var y=this.__de[x];return y?y.height:null;}
,load:function(B,A,C){var D=this.__de[B];if(!D){D=this.__de[B]={};}
;if(A&&!C){C=window;}
;if(D.loaded||D.loading||D.failed){if(A){if(D.loading){D.callbacks.push(A,C);}
else {A.call(C,B,D);}
;}
;}
else {D.loading=true;D.callbacks=[];if(A){D.callbacks.push(A,C);}
;var z=document.createElement(b);var E=qx.lang.Function.listener(this.__lq,this,z,B);z.onload=E;z.onerror=E;z.src=B;D.element=z;}
;}
,abort:function(F){var I=this.__de[F];if(I&&!I.loaded){I.aborted=true;var H=I.callbacks;var G=I.element;G.onload=G.onerror=null;G.src=c;delete I.callbacks;delete I.element;delete I.loading;for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],F,I);}
;}
;this.__de[F]=null;}
,__lq:function(){var J=qx.core.Environment.select(d,{"true":qx.event.GlobalError.observeMethod(this.__lr),"false":this.__lr});J.apply(this,arguments);}
,__lr:function(event,L,K){var P=this.__de[K];if(qx.bom.client.Engine.getName()==a&&parseFloat(qx.bom.client.Engine.getVersion())===11){document.body.appendChild(L);}
;var M=function(Q){return (Q&&Q.height!==0);}
;if(event.type===e&&M(L)){P.loaded=true;P.width=L.width;P.height=L.height;var N=this.__lo.exec(K);if(N!=null){P.format=N[1];}
;}
else {P.failed=true;}
;if(qx.bom.client.Engine.getName()==a&&parseFloat(qx.bom.client.Engine.getVersion())===11){document.body.removeChild(L);}
;L.onload=L.onerror=null;var O=P.callbacks;delete P.loading;delete P.callbacks;delete P.element;for(var i=0,l=O.length;i<l;i+=2){O[i].call(O[i+1],K,P);}
;}
,dispose:function(){this.__de={};}
}});}
)();
(function(){var a="source",b="engine.name",c="",d="mshtml",e="px",f="px ",g="no-repeat",h="backgroundImage",i="scale",j="webkit",k="div",l="qx.html.Image",m="qx/static/blank.gif",n="backgroundPosition";qx.Class.define(l,{extend:qx.html.Element,members:{__ls:null,__lt:null,tagNameHint:null,setPadding:function(o,p){this.__lt=o;this.__ls=p;if(this.getNodeName()==k){this.setStyle(n,o+f+p+e);}
;}
,_applyProperty:function(name,t){qx.html.Element.prototype._applyProperty.call(this,name,t);if(name===a){var s=this.getDomElement();var q=this.getAllStyles();if(this.getNodeName()==k&&this.getStyle(h)){q.backgroundRepeat=null;}
;var u=this._getProperty(a);var r=this._getProperty(i);var v=r?i:g;if(u!=null){u=u||null;q.paddingTop=this.__ls;q.paddingLeft=this.__lt;qx.bom.element.Decoration.update(s,u,v,q);}
;}
;}
,_removeProperty:function(x,w){if(x==a){this._setProperty(x,c,w);}
else {this._setProperty(x,null,w);}
;}
,_createDomElement:function(){var z=this._getProperty(i);var A=z?i:g;if((qx.core.Environment.get(b)==d)){var y=this._getProperty(a);if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);}
else {this.setNodeName(qx.bom.element.Decoration.getTagName(A,y));}
;}
else {this.setNodeName(qx.bom.element.Decoration.getTagName(A));}
;return qx.html.Element.prototype._createDomElement.call(this);}
,_copyData:function(B){return qx.html.Element.prototype._copyData.call(this,true);}
,setSource:function(C){this._setProperty(a,C);return this;}
,getSource:function(){return this._getProperty(a);}
,resetSource:function(){if((qx.core.Environment.get(b)==j)){this._setProperty(a,m);}
else {this._removeProperty(a,true);}
;return this;}
,setScale:function(D){this._setProperty(i,D);return this;}
,getScale:function(){return this._getProperty(i);}
}});}
)();
(function(){var a="qx/icon",b="repeat",c="px",d=".png",f='</div>',g="px ",h="background-image",i="scale",j="no-repeat",k="div",l='display',m="Potential clipped image candidate: ",n="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",o='<div style="',p='verticalAlign',q="qx.debug",r='fontSize',s='width',t="scale-x",u="css.alphaimageloaderneeded",v="repeat-y",w='<img src="',x="Font source needs either a glyph name or the unicode number in hex",y=": ",z="Image modification not possible because elements could not be replaced at runtime anymore!",A="', sizingMethod='",B="'!",C='"></div>',D="",E="crop",F='"/>',G="png",H="ImageLoader: Not recognized format of external image '",I='">',J="')",K="qx.bom.element.Decoration",L="mshtml",M="engine.name",N='" style="',O='position',P="none",Q="b64",R="img",S="webkit",T="scale-y",U=" ",V="repeat-x",W=";",X="background-repeat",Y="DXImageTransform.Microsoft.AlphaImageLoader",bd="qx/static/blank.gif",be='height',bf="absolute";qx.Class.define(K,{statics:{DEBUG:false,__lu:{},__lv:qx.core.Environment.select(M,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__lw:{"scale-x":R,"scale-y":R,"scale":R,"repeat":k,"no-repeat":k,"repeat-x":k,"repeat-y":k},update:function(bk,bl,bi,bh){var bm=this.getTagName(bi,bl);if(bm!=bk.tagName.toLowerCase()){throw new Error(z);}
;var bj=this.getAttributes(bl,bi,bh);if(bm===R){bk.src=bj.src||qx.util.ResourceManager.getInstance().toUri(bd);}
;if(bk.style.backgroundPosition!=D&&bj.style.backgroundPosition===undefined){bj.style.backgroundPosition=null;}
;if(bk.style.clip!=D&&bj.style.clip===undefined){bj.style.clip=null;}
;qx.bom.element.Style.setStyles(bk,bj.style);if(qx.core.Environment.get(u)){try{bk.filters[Y].apply();}
catch(e){}
;}
;}
,create:function(bv,bp,bo){var bw=this.getTagName(bp,bv);var bt=this.getAttributes(bv,bp,bo);var by=qx.bom.element.Style.compile(bt.style);var br=qx.util.ResourceManager.getInstance();if(br.isFontUri(bv)){var bu=qx.theme.manager.Font.getInstance().resolve(bv.match(/@([^/]+)/)[1]);var bn=qx.lang.Object.clone(bu.getStyles());bn[s]=bo.width;bn[be]=bo.height;bn[r]=(parseInt(bo.width)>parseInt(bo.height)?bo.height:bo.width);bn[l]=bo.display;bn[p]=bo.verticalAlign;bn[O]=bo.position;var by=D;for(var bs in bn){if(bn.hasOwnProperty(bs)){by+=qx.bom.Style.getCssName(bs)+y+bn[bs]+W;}
;}
;var bq=br.getData(bv);var bx;if(bq){bx=bq[2];}
else {bx=parseInt(qx.theme.manager.Font.getInstance().resolve(bv.match(/@([^/]+)\/(.*)$/)[2]),16);qx.core.Assert.assertNumber(bx,x);}
;return o+by+I+String.fromCharCode(bx)+f;}
else {if(bw===R){return w+bt.src+N+by+F;}
else {return o+by+C;}
;}
;}
,getTagName:function(bA,bz){if(bz&&qx.core.Environment.get(u)&&this.__lv[bA]&&bz.endsWith(d)){return k;}
;return this.__lw[bA];}
,getAttributes:function(bE,bC,bB){if(!bB){bB={};}
;if(!bB.position){bB.position=bf;}
;if((qx.core.Environment.get(M)==L)){bB.fontSize=0;bB.lineHeight=0;}
else if((qx.core.Environment.get(M)==S)){bB.WebkitUserDrag=P;}
;var bD=qx.util.ResourceManager.getInstance().getImageFormat(bE)||qx.io.ImageLoader.getFormat(bE);if(qx.core.Environment.get(q)){if(bE!=null&&bD==null){qx.log.Logger.warn(H+bE+B);}
;}
;var bF;if(qx.core.Environment.get(u)&&this.__lv[bC]&&bD===G){var bG=this.__ly(bE);this.__lx(bB,bG.width,bG.height);bF=this.processAlphaFix(bB,bC,bE);}
else {delete bB.clip;if(bC===i){bF=this.__lz(bB,bC,bE);}
else if(bC===t||bC===T){bF=this.__lA(bB,bC,bE);}
else {bF=this.__lD(bB,bC,bE);}
;}
;return bF;}
,__lx:function(bI,bH,bJ){if(bI.width==null&&bH!=null){bI.width=bH+c;}
;if(bI.height==null&&bJ!=null){bI.height=bJ+c;}
;}
,__ly:function(bK){var bL=qx.util.ResourceManager.getInstance().getImageWidth(bK)||qx.io.ImageLoader.getWidth(bK);var bM=qx.util.ResourceManager.getInstance().getImageHeight(bK)||qx.io.ImageLoader.getHeight(bK);return {width:bL,height:bM};}
,processAlphaFix:function(bP,bQ,bO){if(bQ==b||bQ==V||bQ==v){return bP;}
;var bR=bQ==j?E:i;var bN=n+qx.util.ResourceManager.getInstance().toUri(bO)+A+bR+J;bP.filter=bN;bP.backgroundImage=bP.backgroundRepeat=D;delete bP[h];delete bP[X];return {style:bP};}
,__lz:function(bT,bU,bS){var bV=qx.util.ResourceManager.getInstance().toUri(bS);var bW=this.__ly(bS);this.__lx(bT,bW.width,bW.height);return {src:bV,style:bT};}
,__lA:function(bX,bY,cb){var ca=qx.util.ResourceManager.getInstance();var ce=ca.getCombinedFormat(cb);var cg=this.__ly(cb);var cc;if(ce){var cf=ca.getData(cb);var cd=cf[4];if(ce==Q){cc=ca.toDataUri(cb);}
else {cc=ca.toUri(cd);}
;if(bY===t){bX=this.__lB(bX,cf,cg.height);}
else {bX=this.__lC(bX,cf,cg.width);}
;return {src:cc,style:bX};}
else {if(qx.core.Environment.get(q)){this.__lF(cb);}
;if(bY==t){bX.height=cg.height==null?null:cg.height+c;}
else if(bY==T){bX.width=cg.width==null?null:cg.width+c;}
;cc=ca.toUri(cb);return {src:cc,style:bX};}
;}
,__lB:function(ch,ci,ck){var cj=qx.util.ResourceManager.getInstance().getImageHeight(ci[4]);ch.clip={top:-ci[6],height:ck};ch.height=cj+c;if(ch.top!=null){ch.top=(parseInt(ch.top,10)+ci[6])+c;}
else if(ch.bottom!=null){ch.bottom=(parseInt(ch.bottom,10)+ck-cj-ci[6])+c;}
;return ch;}
,__lC:function(cm,cn,cl){var co=qx.util.ResourceManager.getInstance().getImageWidth(cn[4]);cm.clip={left:-cn[5],width:cl};cm.width=co+c;if(cm.left!=null){cm.left=(parseInt(cm.left,10)+cn[5])+c;}
else if(cm.right!=null){cm.right=(parseInt(cm.right,10)+cl-co-cn[5])+c;}
;return cm;}
,__lD:function(cp,cq,ct){var cs=qx.util.ResourceManager.getInstance();var cr=cs.getCombinedFormat(ct);var cB=this.__ly(ct);if(cr&&cq!==b){var cA=cs.getData(ct);var cy=cA[4];if(cr==Q){var cv=cs.toDataUri(ct);var cu=0;var cw=0;}
else {var cv=cs.toUri(cy);var cu=cA[5];var cw=cA[6];if(cp.paddingTop||cp.paddingLeft||cp.paddingRight||cp.paddingBottom){var top=cp.paddingTop||0;var cC=cp.paddingLeft||0;cu+=cp.paddingLeft||0;cw+=cp.paddingTop||0;cp.clip={left:cC,top:top,width:cB.width,height:cB.height};}
;}
;var cx=qx.bom.element.Background.getStyles(cv,cq,cu,cw);for(var cz in cx){cp[cz]=cx[cz];}
;if(cB.width!=null&&cp.width==null&&(cq==v||cq===j)){cp.width=cB.width+c;}
;if(cB.height!=null&&cp.height==null&&(cq==V||cq===j)){cp.height=cB.height+c;}
;return {style:cp};}
else {var top=cp.paddingTop||0;var cC=cp.paddingLeft||0;cp.backgroundPosition=cC+g+top+c;if(qx.core.Environment.get(q)){if(cq!==b){this.__lF(ct);}
;}
;this.__lx(cp,cB.width,cB.height);this.__lE(cp,ct,cq);return {style:cp};}
;}
,__lE:function(cD,cG,cE){var top=null;var cJ=null;if(cD.backgroundPosition){var cF=cD.backgroundPosition.split(U);cJ=parseInt(cF[0],10);if(isNaN(cJ)){cJ=cF[0];}
;top=parseInt(cF[1],10);if(isNaN(top)){top=cF[1];}
;}
;var cH=qx.bom.element.Background.getStyles(cG,cE,cJ,top);for(var cI in cH){cD[cI]=cH[cI];}
;if(cD.filter){cD.filter=D;}
;}
,__lF:function(cK){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cK)&&cK.indexOf(a)==-1){if(!this.__lu[cK]){qx.log.Logger.debug(m+cK);this.__lu[cK]=true;}
;}
;}
}});}
)();
(function(){var a="')",b="gecko",c="background-image:url(",d="0",e=");",f="",g="px",h="number",i=")",j="background-repeat:",k="engine.version",l="data:",m=" ",n="qx.bom.element.Background",o=";",p="url(",q="background-position:",r="base64",s="url('",t="engine.name",u="'";qx.Class.define(n,{statics:{__lG:[c,null,e,q,null,o,j,null,o],__lH:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__lI:function(z,top){var v=qx.core.Environment.get(t);var x=qx.core.Environment.get(k);if(v==b&&x<1.9&&z==top&&typeof z==h){top+=0.01;}
;if(z){var y=(typeof z==h)?z+g:z;}
else {y=d;}
;if(top){var w=(typeof top==h)?top+g:top;}
else {w=d;}
;return y+m+w;}
,__lJ:function(A){var String=qx.lang.String;var B=A.substr(0,50);return B.startsWith(l)&&String.contains(B,r);}
,compile:function(F,D,H,top){var G=this.__lI(H,top);var E=qx.util.ResourceManager.getInstance().toUri(F);if(this.__lJ(E)){E=u+E+u;}
;var C=this.__lG;C[1]=E;C[4]=G;C[7]=D;return C.join(f);}
,getStyles:function(L,J,N,top){if(!L){return this.__lH;}
;var M=this.__lI(N,top);var K=qx.util.ResourceManager.getInstance().toUri(L);var O;if(this.__lJ(K)){O=s+K+a;}
else {O=p+K+i;}
;var I={backgroundPosition:M,backgroundImage:O};if(J!=null){I.backgroundRepeat=J;}
;return I;}
,set:function(T,S,Q,U,top){var P=this.getStyles(S,Q,U,top);for(var R in P){T.style[R]=P[R];}
;}
}});}
)();
(function(){var a="value",b="qx.html.Label",c="The label mode cannot be modified after initial creation",d='hidden';qx.Class.define(b,{extend:qx.html.Element,members:{__lK:null,_applyProperty:function(name,e){qx.html.Element.prototype._applyProperty.call(this,name,e);if(name==a){var f=this.getDomElement();qx.bom.Label.setValue(f,e);}
;}
,_createDomElement:function(){var h=this.__lK;var g=qx.bom.Label.create(this._content,h);g.style.overflow=d;return g;}
,_copyData:function(i){return qx.html.Element.prototype._copyData.call(this,true);}
,setRich:function(j){var k=this.getDomElement();if(k){throw new Error(c);}
;j=!!j;if(this.__lK==j){return this;}
;this.__lK=j;return this;}
,setValue:function(l){this._setProperty(a,l);return this;}
,getValue:function(){return this._getProperty(a);}
,resetValue:function(){return this._removeProperty(a);}
}});}
)();
(function(){var a="text",b="function",c="px",d="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",e="crop",f="nowrap",g="end",h="div",i="100%",j="auto",k="0",l="css.textoverflow",m="qx.debug",n="html.xul",o="value",p="visible",q="qx.bom.Label",r="",s="ellipsis",t="normal",u="inherit",v="block",w="label",x="-1000px",y="hidden",z="absolute";qx.Bootstrap.define(q,{statics:{__lL:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__lM:function(){var A=this.__lO(false);document.body.insertBefore(A,document.body.firstChild);return this._textElement=A;}
,__lN:function(){var B=this.__lO(true);document.body.insertBefore(B,document.body.firstChild);return this._htmlElement=B;}
,__lO:function(E){var C=qx.dom.Element.create(h);var D=C.style;D.width=D.height=j;D.left=D.top=x;D.visibility=y;D.position=z;D.overflow=p;D.display=v;if(E){D.whiteSpace=t;}
else {D.whiteSpace=f;if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){var F=document.createElementNS(d,w);var D=F.style;D.padding=k;D.margin=k;D.width=j;for(var G in this.__lL){D[G]=u;}
;C.appendChild(F);}
;}
;return C;}
,__lP:function(I){var H={};H.overflow=y;if(I){H.whiteSpace=t;}
else if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){H.display=v;}
else {H.whiteSpace=f;H[qx.core.Environment.get(l)]=s;}
;return H;}
,create:function(content,M,L){if(!L){L=window;}
;var J=L.document.createElement(h);if(M){J.useHtml=true;}
;if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){var N=L.document.createElementNS(d,w);var K=N.style;K.cursor=u;K.color=u;K.overflow=y;K.maxWidth=i;K.padding=k;K.margin=k;K.width=j;for(var O in this.__lL){N.style[O]=u;}
;N.setAttribute(e,g);J.appendChild(N);}
else {qx.bom.element.Style.setStyles(J,this.__lP(M));}
;if(content){this.setValue(J,content);}
;return J;}
,__lQ:null,setSanitizer:function(P){if(qx.core.Environment.get(m)){if(P){qx.core.Assert.assertFunction(P);}
;}
;qx.bom.Label.__lQ=P;}
,setValue:function(R,Q){Q=Q||r;if(R.useHtml){if(qx.bom.Label.__lQ&&typeof (qx.bom.Label.__lQ)===b){Q=qx.bom.Label.__lQ(Q);}
;R.innerHTML=Q;}
else if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){R.firstChild.setAttribute(o,Q);}
else {qx.bom.element.Attribute.set(R,a,Q);}
;}
,getValue:function(S){if(S.useHtml){return S.innerHTML;}
else if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){return S.firstChild.getAttribute(o)||r;}
else {return qx.bom.element.Attribute.get(S,a);}
;}
,getHtmlSize:function(content,T,U){var V=this._htmlElement||this.__lN();V.style.width=U!=undefined?U+c:j;V.innerHTML=content;return this.__lR(V,T);}
,getTextSize:function(X,W){var Y=this._textElement||this.__lM();if(!qx.core.Environment.get(l)&&qx.core.Environment.get(n)){Y.firstChild.setAttribute(o,X);}
else {qx.bom.element.Attribute.set(Y,a,X);}
;return this.__lR(Y,W);}
,__lR:function(be,ba){var bb=this.__lL;if(!ba){ba={};}
;for(var bd in bb){be.style[bd]=ba[bd]||r;}
;var bc=qx.bom.element.Dimension.getSize(be);bc.width++ ;return bc;}
}});}
)();
(function(){var a="dragdrop-cursor",b="_applyAction",c="alias",d="qx.ui.core.DragDropCursor",e="move",f="singleton",g="copy";qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:f,construct:function(){qx.ui.basic.Image.call(this);this.setZIndex(1e8);this.setDomMove(true);var h=this.getApplicationRoot();h.add(this,{left:-1000,top:-1000});}
,properties:{appearance:{refine:true,init:a},action:{check:[c,g,e],apply:b,nullable:true}},members:{_applyAction:function(j,i){if(i){this.removeState(i);}
;if(j){this.addState(j);}
;}
}});}
)();
(function(){var a="Missing renderLayout() implementation!",b="abstract",c="Missing getHeightForWidth() implementation!",d="qx.debug",e="It is not possible to manually set the connected widget.",f="qx.ui.layout.Abstract";qx.Class.define(f,{type:b,extend:qx.core.Object,members:{__fD:null,_invalidChildrenCache:null,__hd:null,invalidateLayoutCache:function(){this.__fD=null;}
,renderLayout:function(h,i,g){this.warn(a);}
,getSizeHint:function(){if(this.__fD){return this.__fD;}
;return this.__fD=this._computeSizeHint();}
,hasHeightForWidth:function(){return false;}
,getHeightForWidth:function(j){this.warn(c);return null;}
,_computeSizeHint:function(){return null;}
,invalidateChildrenCache:function(){this._invalidChildrenCache=true;}
,verifyLayoutProperty:qx.core.Environment.select(d,{"true":function(k,name,l){}
,"false":null}),_clearSeparators:function(){var m=this.__hd;if(m instanceof qx.ui.core.LayoutItem){m.clearSeparators();}
;}
,_renderSeparator:function(n,o){this.__hd.renderSeparator(n,o);}
,connectToWidget:function(p){if(p&&this.__hd){throw new Error(e);}
;this.__hd=p;this.invalidateChildrenCache();}
,_getWidget:function(){return this.__hd;}
,_applyLayoutChange:function(){if(this.__hd){this.__hd.scheduleLayoutUpdate();}
;}
,_getLayoutChildren:function(){return this.__hd.getLayoutChildren();}
},destruct:function(){this.__hd=this.__fD=null;}
});}
)();
(function(){var a="qx.bom.client.Locale",b="-",c="locale",d="",e="android",f="locale.variant",g="C",h="locale.default";qx.Bootstrap.define(a,{statics:{getLocale:function(){var i=qx.bom.client.Locale.__lS();var j=i.indexOf(b);if(j!=-1){i=i.substr(0,j);}
;return i;}
,getVariant:function(){var k=qx.bom.client.Locale.__lS();var m=d;var l=k.indexOf(b);if(l!=-1){m=k.substr(l+1);}
;return m;}
,__lS:function(){var n=(navigator.userLanguage||navigator.language||d);if(qx.bom.client.OperatingSystem.getName()==e){var o=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);if(o){n=o[0];}
;}
;return n.toLowerCase();}
},defer:function(p){qx.core.Environment.add(c,p.getLocale);qx.core.Environment.add(f,p.getVariant);qx.core.Environment.add(h,g);}
});}
)();
(function(){var a='indexOf',b='slice',c='concat',d='toLocaleLowerCase',e="qx.type.BaseString",f="",g='trim',h='match',j="qx.debug",k='search',m='replace',n='toLowerCase',o='charCodeAt',p='split',q='substring',r='lastIndexOf',s='substr',t='toLocaleUpperCase',u='toUpperCase',v='charAt';qx.Class.define(e,{extend:Object,construct:function(w){var w=w||f;this.__lT=w;this.length=w.length;}
,members:{$$isString:true,length:0,__lT:null,toString:function(){return this.__lT;}
,charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);}
,toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(y,x){return qx.core.Object.prototype.base.apply(this,arguments);}
},defer:function(z,A){if(qx.core.Environment.get(j)){qx.Class.include(z,qx.core.MAssert);}
;var B=[v,o,c,a,r,h,m,k,b,p,s,q,n,u,d,t,g];A.valueOf=A.toString;if(new z(f).valueOf()==null){delete A.valueOf;}
;for(var i=0,l=B.length;i<l;i++ ){A[B[i]]=String.prototype[B[i]];}
;}
});}
)();
(function(){var a="qx.locale.LocalizedString";qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,e,c,d){qx.type.BaseString.call(this,b);this.__lU=e;this.__lV=!!d;this.__lW=c;}
,members:{__lV:null,__lU:null,__lW:null,translate:function(){if(this.__lV){return qx.locale.Manager.getInstance().localize(this.__lU,this.__lW);}
;return qx.locale.Manager.getInstance().translate(this.__lU,this.__lW);}
,getMessageId:function(){return this.__lU;}
}});}
)();
(function(){var a="locale",b="_applyLocale",c="",d="changeLocale",e="_",f="Locale: ",g="locale.default",h="locale.variant",j="qx.dynlocale",k=" not available.",l="qx.locale.Manager",m="String",n="singleton",o="qx.debug";qx.Class.define(l,{type:n,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__lX=qx.$$translations||{};this.__lY=qx.$$locales||{};this.initLocale();this.__ma=this.getLocale();}
,statics:{tr:function(q,r){var p=qx.lang.Array.fromArguments(arguments);p.splice(0,1);return qx.locale.Manager.getInstance().translate(q,p);}
,trn:function(t,w,s,v){var u=qx.lang.Array.fromArguments(arguments);u.splice(0,3);if(s!=1){return qx.locale.Manager.getInstance().translate(w,u);}
else {return qx.locale.Manager.getInstance().translate(t,u);}
;}
,trc:function(A,y,z){var x=qx.lang.Array.fromArguments(arguments);x.splice(0,2);return qx.locale.Manager.getInstance().translate(y,x);}
,trnc:function(C,D,G,B,F){var E=qx.lang.Array.fromArguments(arguments);E.splice(0,4);if(B!=1){return qx.locale.Manager.getInstance().translate(G,E);}
else {return qx.locale.Manager.getInstance().translate(D,E);}
;}
,marktr:function(H){return H;}
},properties:{locale:{check:m,apply:b,event:d,init:(function(){var I=qx.core.Environment.get(a);if(!I||I===c){return qx.core.Environment.get(g);}
;var J=qx.core.Environment.get(h);if(J!==c){I+=e+J;}
;return I;}
)()}},members:{__mb:qx.core.Environment.get(g),__mc:null,__md:null,__lX:null,__lY:null,__ma:null,getLanguage:function(){return this.__md;}
,getTerritory:function(){return this.getLocale().split(e)[1]||c;}
,getAvailableLocales:function(L){var M=[];for(var K in this.__lY){if(K!=this.__mb){if(this.__lY[K]===null&&!L){continue;}
;M.push(K);}
;}
;return M;}
,__me:function(N){var P;if(N==null){return null;}
;var O=N.indexOf(e);if(O==-1){P=N;}
else {P=N.substring(0,O);}
;return P;}
,_applyLocale:function(R,Q){if(qx.core.Environment.get(o)){if(!(R in this.__lY||R==this.__ma)){qx.log.Logger.warn(f+R+k);}
;}
;this.__mc=R;this.__md=this.__me(R);}
,addTranslation:function(S,V){var T=this.__lX;if(T[S]){for(var U in V){T[S][U]=V[U];}
;}
else {T[S]=V;}
;}
,addLocale:function(ba,X){var W=this.__lY;if(W[ba]){for(var Y in X){W[ba][Y]=X[Y];}
;}
else {W[ba]=X;}
;}
,translate:function(be,bd,bb){var bc=this.__lX;return this.__mf(bc,be,bd,bb);}
,localize:function(bi,bh,bf){var bg=this.__lY;return this.__mf(bg,bi,bh,bf);}
,__mf:function(bn,bo,bl,bm){if(qx.core.Environment.get(o)){this.assertObject(bn);this.assertString(bo);this.assertArray(bl);}
;var bj;if(!bn){return bo;}
;if(bm){var bk=this.__me(bm);}
else {bm=this.__mc;bk=this.__md;}
;if(!bj&&bn[bm]){bj=bn[bm][bo];}
;if(!bj&&bn[bk]){bj=bn[bk][bo];}
;if(!bj&&bn[this.__mb]){bj=bn[this.__mb][bo];}
;if(!bj){bj=bo;}
;if(bl.length>0){var bp=[];for(var i=0;i<bl.length;i++ ){var bq=bl[i];if(bq&&bq.translate){bp[i]=bq.translate();}
else {bp[i]=bq;}
;}
;bj=qx.lang.String.format(bj,bp);}
;if(qx.core.Environment.get(j)){bj=new qx.locale.LocalizedString(bj,bo,bl,bn===this.__lY);}
;return bj;}
}});}
)();
(function(){var a="qx.ui.core.MChildrenHandling";qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();}
,hasChildren:function(){return this._hasChildren();}
,indexOf:function(b){return this._indexOf(b);}
,add:function(d,c){this._add(d,c);}
,addAt:function(g,e,f){this._addAt(g,e,f);}
,addBefore:function(h,j,i){this._addBefore(h,j,i);}
,addAfter:function(m,k,l){this._addAfter(m,k,l);}
,remove:function(n){this._remove(n);}
,removeAt:function(o){return this._removeAt(o);}
,removeAll:function(){return this._removeAll();}
},statics:{remap:function(p){p.getChildren=p._getChildren;p.hasChildren=p._hasChildren;p.indexOf=p._indexOf;p.add=p._add;p.addAt=p._addAt;p.addBefore=p._addBefore;p.addAfter=p._addAfter;p.remove=p._remove;p.removeAt=p._removeAt;p.removeAll=p._removeAll;}
}});}
)();
(function(){var a="qx.ui.container.Composite",b="addChildWidget",c="removeChildWidget",d="qx.event.type.Data";qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);if(e!=null){this._setLayout(e);}
;}
,events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);}
,_afterRemoveChild:function(g){this.fireNonBubblingEvent(c,qx.event.type.Data,[g]);}
},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);qx.ui.core.MLayoutHandling.remap(i);}
});}
)();
(function(){var a="qx.ui.popup.Popup",b="visible",c="excluded",d="popup",e="Boolean";qx.Class.define(a,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);this.initVisibility();}
,properties:{appearance:{refine:true,init:d},visibility:{refine:true,init:c},autoHide:{check:e,init:true}},members:{show:function(){if(this.getLayoutParent()==null){qx.core.Init.getApplication().getRoot().add(this);}
;qx.ui.container.Composite.prototype.show.call(this);}
,_applyVisibility:function(i,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,i,h);var g=qx.ui.popup.Manager.getInstance();i===b?g.add(this):g.remove(this);}
},destruct:function(){if(!qx.ui.popup.Manager.getInstance().isDisposed()){qx.ui.popup.Manager.getInstance().remove(this);}
;}
});}
)();
(function(){var a="blur",b="qx.debug",c="qx.ui.popup.Manager",d="Object is no popup: ",f="pointerdown",g="__mg",h="singleton";qx.Class.define(c,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__mg=[];qx.event.Registration.addListener(document.documentElement,f,this.__mi,this,true);qx.bom.Element.addListener(window,a,this.hideAll,this);}
,members:{__mg:null,add:function(j){if(qx.core.Environment.get(b)){if(!(j instanceof qx.ui.popup.Popup)){throw new Error(d+j);}
;}
;this.__mg.push(j);this.__mh();}
,remove:function(k){if(qx.core.Environment.get(b)){if(!(k instanceof qx.ui.popup.Popup)){throw new Error(d+k);}
;}
;qx.lang.Array.remove(this.__mg,k);this.__mh();}
,hideAll:function(){var l=this.__mg.length,m={};while(l-- ){m=this.__mg[l];if(m.getAutoHide()){m.exclude();}
;}
;}
,__mh:function(){var n=1e7;for(var i=0;i<this.__mg.length;i++ ){this.__mg[i].setZIndex(n++ );}
;}
,__mi:function(e){var p=qx.ui.core.Widget.getWidgetByElement(e.getTarget());var q=this.__mg;for(var i=0;i<q.length;i++ ){var o=q[i];if(!o.getAutoHide()||p==o||qx.ui.core.Widget.contains(o,p)){continue;}
;o.exclude();}
;}
},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__mi,this,true);this._disposeArray(g);}
});}
)();
(function(){var a="_applyRich",b="qx.ui.tooltip.ToolTip",c="_applyIcon",d="tooltip",f="pointerover",g="qx.ui.core.Widget",h="arrow",i="Boolean",j="_applyArrowPosition",k="left",l="right",m="_applyLabel",n="Integer",o="String",p="atom";qx.Class.define(b,{extend:qx.ui.popup.Popup,construct:function(q,r){qx.ui.popup.Popup.call(this);this.setLayout(new qx.ui.layout.HBox());this._createChildControl(h);this._createChildControl(p);if(q!=null){this.setLabel(q);}
;if(r!=null){this.setIcon(r);}
;this.addListener(f,this._onPointerOver,this);}
,properties:{appearance:{refine:true,init:d},showTimeout:{check:n,init:700,themeable:true},hideTimeout:{check:n,init:4000,themeable:true},label:{check:o,nullable:true,apply:m},icon:{check:o,nullable:true,apply:c,themeable:true},rich:{check:i,init:false,apply:a},opener:{check:g,nullable:true},arrowPosition:{check:[k,l],init:k,themeable:true,apply:j}},members:{_forwardStates:{placementLeft:true},_createChildControlImpl:function(u,t){var s;switch(u){case p:s=new qx.ui.basic.Atom();this._add(s,{flex:1});break;case h:s=new qx.ui.basic.Image();this._add(s);};return s||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,u);}
,_onPointerOver:function(e){}
,_applyIcon:function(w,v){var x=this.getChildControl(p);w==null?x.resetIcon():x.setIcon(w);}
,_applyLabel:function(z,y){var A=this.getChildControl(p);z==null?A.resetLabel():A.setLabel(z);}
,_applyRich:function(C,B){var D=this.getChildControl(p);D.setRich(C);}
,_applyArrowPosition:function(F,E){this._getLayout().setReversed(F==k);}
}});}
)();
(function(){var a="Decorator",b="middle",c="_applyLayoutChange",d="width",e="_applyReversed",f="qx.debug",g="bottom",h="' is not supported by the HBox layout!",j="center",k="Boolean",m="flex",n="top",o="left",p="right",q="Integer",r="The property '",s="qx.ui.layout.HBox";qx.Class.define(s,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);if(t){this.setSpacing(t);}
;if(u){this.setAlignX(u);}
;if(v){this.setSeparator(v);}
;}
,properties:{alignX:{check:[o,j,p],init:o,apply:c},alignY:{check:[n,b,g],init:n,apply:c},spacing:{check:q,init:0,apply:c},separator:{check:a,nullable:true,apply:c},reversed:{check:k,init:false,apply:e}},members:{__mj:null,__mk:null,__ml:null,__hp:null,_applyReversed:function(){this._invalidChildrenCache=true;this._applyLayoutChange();}
,__mm:function(){var B=this._getLayoutChildren();var length=B.length;var y=false;var w=this.__mj&&this.__mj.length!=length&&this.__mk&&this.__mj;var z;var x=w?this.__mj:new Array(length);var A=w?this.__mk:new Array(length);if(this.getReversed()){B=B.concat().reverse();}
;for(var i=0;i<length;i++ ){z=B[i].getLayoutProperties();if(z.width!=null){x[i]=parseFloat(z.width)/100;}
;if(z.flex!=null){A[i]=z.flex;y=true;}
else {A[i]=0;}
;}
;if(!w){this.__mj=x;this.__mk=A;}
;this.__ml=y;this.__hp=B;delete this._invalidChildrenCache;}
,verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(C,name,D){this.assert(name===m||name===d,r+name+h);if(name==d){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.assertNumber(D);this.assert(D>=0);}
;}
,"false":null}),renderLayout:function(U,O,T){if(this._invalidChildrenCache){this.__mm();}
;var K=this.__hp;var length=K.length;var W=qx.ui.layout.Util;var S=this.getSpacing();var Y=this.getSeparator();if(Y){var H=W.computeHorizontalSeparatorGaps(K,S,Y);}
else {var H=W.computeHorizontalGaps(K,S,true);}
;var i,V,Q,P;var X=[];var L=H;for(i=0;i<length;i+=1){P=this.__mj[i];Q=P!=null?Math.floor((U-H)*P):K[i].getSizeHint().width;X.push(Q);L+=Q;}
;if(this.__ml&&L!=U){var N={};var R,F;for(i=0;i<length;i+=1){R=this.__mk[i];if(R>0){M=K[i].getSizeHint();N[i]={min:M.minWidth,value:X[i],max:M.maxWidth,flex:R};}
;}
;var I=W.computeFlexOffsets(N,U,L);for(i in I){F=I[i].offset;X[i]+=F;L+=F;}
;}
;var bd=K[0].getMarginLeft();if(L<U&&this.getAlignX()!=o){bd=U-L;if(this.getAlignX()===j){bd=Math.round(bd/2);}
;}
;var M,top,G,Q,J,bb,E;var S=this.getSpacing();this._clearSeparators();if(Y){var ba=qx.theme.manager.Decoration.getInstance().resolve(Y).getInsets();var bc=ba.left+ba.right;}
;for(i=0;i<length;i+=1){V=K[i];Q=X[i];M=V.getSizeHint();bb=V.getMarginTop();E=V.getMarginBottom();G=Math.max(M.minHeight,Math.min(O-bb-E,M.maxHeight));top=W.computeVerticalAlignOffset(V.getAlignY()||this.getAlignY(),G,O,bb,E);if(i>0){if(Y){bd+=J+S;this._renderSeparator(Y,{left:bd+T.left,top:T.top,width:bc,height:O});bd+=bc+S+V.getMarginLeft();}
else {bd+=W.collapseMargins(S,J,V.getMarginLeft());}
;}
;V.renderLayout(bd+T.left,top+T.top,Q,G);bd+=Q;J=V.getMarginRight();}
;}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__mm();}
;var bs=qx.ui.layout.Util;var bf=this.__hp;var bk=0,bl=0,be=0;var bi=0,bj=0;var bp,bg,br;for(var i=0,l=bf.length;i<l;i+=1){bp=bf[i];bg=bp.getSizeHint();bl+=bg.width;var bo=this.__mk[i];var bh=this.__mj[i];if(bo){bk+=bg.minWidth;}
else if(bh){be=Math.max(be,Math.round(bg.minWidth/bh));}
else {bk+=bg.width;}
;br=bp.getMarginTop()+bp.getMarginBottom();if((bg.height+br)>bj){bj=bg.height+br;}
;if((bg.minHeight+br)>bi){bi=bg.minHeight+br;}
;}
;bk+=be;var bn=this.getSpacing();var bq=this.getSeparator();if(bq){var bm=bs.computeHorizontalSeparatorGaps(bf,bn,bq);}
else {var bm=bs.computeHorizontalGaps(bf,bn,true);}
;return {minWidth:bk+bm,width:bl+bm,minHeight:bi,height:bj};}
},destruct:function(){this.__mj=this.__mk=this.__hp=null;}
});}
)();
(function(){var a="middle",b="qx.ui.layout.Util",c="left",d="center",e="top",f="bottom",g="right";qx.Class.define(b,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(j,n,h){var r,q,s,k;var m=n>h;var t=Math.abs(n-h);var u,o;var p={};for(q in j){r=j[q];p[q]={potential:m?r.max-r.value:r.value-r.min,flex:m?r.flex:1/r.flex,offset:0};}
;while(t!=0){k=Infinity;s=0;for(q in p){r=p[q];if(r.potential>0){s+=r.flex;k=Math.min(k,r.potential/r.flex);}
;}
;if(s==0){break;}
;k=Math.min(t,k*s)/s;u=0;for(q in p){r=p[q];if(r.potential>0){o=Math.min(t,r.potential,Math.ceil(k*r.flex));u+=o-k*r.flex;if(u>=1){u-=1;o-=1;}
;r.potential-=o;if(m){r.offset+=o;}
else {r.offset-=o;}
;t-=o;}
;}
;}
;return p;}
,computeHorizontalAlignOffset:function(w,v,y,z,A){if(z==null){z=0;}
;if(A==null){A=0;}
;var x=0;switch(w){case c:x=z;break;case g:x=y-v-A;break;case d:x=Math.round((y-v)/2);if(x<z){x=z;}
else if(x<A){x=Math.max(z,y-v-A);}
;break;};return x;}
,computeVerticalAlignOffset:function(C,F,B,G,D){if(G==null){G=0;}
;if(D==null){D=0;}
;var E=0;switch(C){case e:E=G;break;case f:E=B-F-D;break;case a:E=Math.round((B-F)/2);if(E<G){E=G;}
else if(E<D){E=Math.max(G,B-F-D);}
;break;};return E;}
,collapseMargins:function(K){var I=0,H=0;for(var i=0,l=arguments.length;i<l;i++ ){var J=arguments[i];if(J<0){H=Math.min(H,J);}
else if(J>0){I=Math.max(I,J);}
;}
;return I+H;}
,computeHorizontalGaps:function(O,M,L){if(M==null){M=0;}
;var N=0;if(L){N+=O[0].getMarginLeft();for(var i=1,l=O.length;i<l;i+=1){N+=this.collapseMargins(M,O[i-1].getMarginRight(),O[i].getMarginLeft());}
;N+=O[l-1].getMarginRight();}
else {for(var i=1,l=O.length;i<l;i+=1){N+=O[i].getMarginLeft()+O[i].getMarginRight();}
;N+=(M*(l-1));}
;return N;}
,computeVerticalGaps:function(S,Q,P){if(Q==null){Q=0;}
;var R=0;if(P){R+=S[0].getMarginTop();for(var i=1,l=S.length;i<l;i+=1){R+=this.collapseMargins(Q,S[i-1].getMarginBottom(),S[i].getMarginTop());}
;R+=S[l-1].getMarginBottom();}
else {for(var i=1,l=S.length;i<l;i+=1){R+=S[i].getMarginTop()+S[i].getMarginBottom();}
;R+=(Q*(l-1));}
;return R;}
,computeHorizontalSeparatorGaps:function(bb,U,Y){var T=qx.theme.manager.Decoration.getInstance().resolve(Y);var V=T.getInsets();var W=V.left+V.right;var X=0;for(var i=0,l=bb.length;i<l;i++ ){var ba=bb[i];X+=ba.getMarginLeft()+ba.getMarginRight();}
;X+=(U+W+U)*(l-1);return X;}
,computeVerticalSeparatorGaps:function(bj,bc,bh){var bf=qx.theme.manager.Decoration.getInstance().resolve(bh);var be=bf.getInsets();var bd=be.top+be.bottom;var bg=0;for(var i=0,l=bj.length;i<l;i++ ){var bi=bj[i];bg+=bi.getMarginTop()+bi.getMarginBottom();}
;bg+=(bc+bd+bc)*(l-1);return bg;}
,arrangeIdeals:function(bl,bn,bk,bm,bo,bp){if(bn<bl||bo<bm){if(bn<bl&&bo<bm){bn=bl;bo=bm;}
else if(bn<bl){bo-=(bl-bn);bn=bl;if(bo<bm){bo=bm;}
;}
else if(bo<bm){bn-=(bm-bo);bo=bm;if(bn<bl){bn=bl;}
;}
;}
;if(bn>bk||bo>bp){if(bn>bk&&bo>bp){bn=bk;bo=bp;}
else if(bn>bk){bo+=(bn-bk);bn=bk;if(bo>bp){bo=bp;}
;}
else if(bo>bp){bn+=(bo-bp);bo=bp;if(bn>bk){bn=bk;}
;}
;}
;return {begin:bn,end:bo};}
}});}
)();
(function(){var a="Boolean",b="changeGap",c="changeShow",d="bottom",e="bottom-right",f="_applyCenter",g="changeIcon",h="qx.ui.basic.Atom",i="changeLabel",j="both",k="Integer",l="_applyIconPosition",m="qx.debug",n="bottom-left",o="String",p="icon",q="top-left",r="top",s="top-right",t="right",u="_applyRich",v="_applyIcon",w="label",x="_applyShow",y="left",z="_applyLabel",A="_applyGap",B="atom";qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(D,C){if(qx.core.Environment.get(m)){this.assertArgumentsCount(arguments,0,2);}
;qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.Atom());if(D!=null){this.setLabel(D);}
;if(C!==undefined){this.setIcon(C);}
;}
,properties:{appearance:{refine:true,init:B},label:{apply:z,nullable:true,check:o,event:i},rich:{check:a,init:false,apply:u},icon:{check:o,apply:v,nullable:true,themeable:true,event:g},gap:{check:k,nullable:false,event:b,apply:A,themeable:true,init:4},show:{init:j,check:[j,w,p],themeable:true,inheritable:true,apply:x,event:c},iconPosition:{init:y,check:[r,t,d,y,q,n,s,e],themeable:true,apply:l},center:{init:false,check:a,themeable:true,apply:f}},members:{_createChildControlImpl:function(G,F){var E;switch(G){case w:E=new qx.ui.basic.Label(this.getLabel());E.setAnonymous(true);E.setRich(this.getRich());E.setSelectable(this.getSelectable());this._add(E);if(this.getLabel()==null||this.getShow()===p){E.exclude();}
;break;case p:E=new qx.ui.basic.Image(this.getIcon());E.setAnonymous(true);this._addAt(E,0);if(this.getIcon()==null||this.getShow()===w){E.exclude();}
;break;};return E||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,G);}
,_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===p){this._excludeChildControl(w);}
else {this._showChildControl(w);}
;}
,_handleIcon:function(){if(this.getIcon()==null||this.getShow()===w){this._excludeChildControl(p);}
else {this._showChildControl(p);}
;}
,_applyLabel:function(I,H){var J=this.getChildControl(w,true);if(J){J.setValue(I);}
;this._handleLabel();}
,_applyRich:function(L,K){var M=this.getChildControl(w,true);if(M){M.setRich(L);}
;}
,_applyIcon:function(O,N){var P=this.getChildControl(p,true);if(P){P.setSource(O);}
;this._handleIcon();}
,_applyGap:function(R,Q){this._getLayout().setGap(R);}
,_applyShow:function(T,S){this._handleLabel();this._handleIcon();}
,_applyIconPosition:function(V,U){this._getLayout().setIconPosition(V);}
,_applyCenter:function(X,W){this._getLayout().setCenter(X);}
,_applySelectable:function(ba,Y){qx.ui.core.Widget.prototype._applySelectable.call(this,ba,Y);var bb=this.getChildControl(w,true);if(bb){this.getChildControl(w).setSelectable(ba);}
;}
}});}
)();
(function(){var a="' is not supported by the Atom layout!",b="middle",c="_applyLayoutChange",d="top-right",e="qx.debug",f="bottom",g="top-left",h="bottom-left",j="center",k="qx.ui.layout.Atom",l="bottom-right",m="top",n="left",o="right",p="Integer",q="The property '",r="Boolean";qx.Class.define(k,{extend:qx.ui.layout.Abstract,properties:{gap:{check:p,init:4,apply:c},iconPosition:{check:[n,m,o,f,g,h,d,l],init:n,apply:c},center:{check:r,init:false,apply:c}},members:{verifyLayoutProperty:qx.core.Environment.select(e,{"true":function(s,name,t){this.assert(false,q+name+a);}
,"false":null}),renderLayout:function(J,D,I){var S=I.left;var top=I.top;var E=qx.ui.layout.Util;var v=this.getIconPosition();var y=this._getLayoutChildren();var length=y.length;var R,w;var L,C;var H=this.getGap();var O=this.getCenter();var Q=[f,o,d,l];if(Q.indexOf(v)!=-1){var F=length-1;var A=-1;var x=-1;}
else {var F=0;var A=length;var x=1;}
;if(v==m||v==f){if(O){var K=0;for(var i=F;i!=A;i+=x){w=y[i].getSizeHint().height;if(w>0){K+=w;if(i!=F){K+=H;}
;}
;}
;top+=Math.round((D-K)/2);}
;var z=top;for(var i=F;i!=A;i+=x){L=y[i];C=L.getSizeHint();R=Math.min(C.maxWidth,Math.max(J,C.minWidth));w=C.height;S=E.computeHorizontalAlignOffset(j,R,J)+I.left;L.renderLayout(S,z,R,w);if(w>0){z=top+w+H;}
;}
;}
else {var B=J;var u=null;var N=0;for(var i=F;i!=A;i+=x){L=y[i];R=L.getSizeHint().width;if(R>0){if(!u&&L instanceof qx.ui.basic.Label){u=L;}
else {B-=R;}
;N++ ;}
;}
;if(N>1){var M=(N-1)*H;B-=M;}
;if(u){var C=u.getSizeHint();var G=Math.max(C.minWidth,Math.min(B,C.maxWidth));B-=G;}
;if(O&&B>0){S+=Math.round(B/2);}
;for(var i=F;i!=A;i+=x){L=y[i];C=L.getSizeHint();w=Math.min(C.maxHeight,Math.max(D,C.minHeight));if(L===u){R=G;}
else {R=C.width;}
;var P=b;if(v==g||v==d){P=m;}
else if(v==h||v==l){P=f;}
;var z=top+E.computeVerticalAlignOffset(P,C.height,D);L.renderLayout(S,z,R,w);if(R>0){S+=R+H;}
;}
;}
;}
,_computeSizeHint:function(){var be=this._getLayoutChildren();var length=be.length;var U,bc;if(length===1){var U=be[0].getSizeHint();bc={width:U.width,height:U.height,minWidth:U.minWidth,minHeight:U.minHeight};}
else {var ba=0,bb=0;var W=0,Y=0;var X=this.getIconPosition();var V=this.getGap();if(X===m||X===f){var T=0;for(var i=0;i<length;i++ ){U=be[i].getSizeHint();bb=Math.max(bb,U.width);ba=Math.max(ba,U.minWidth);if(U.height>0){Y+=U.height;W+=U.minHeight;T++ ;}
;}
;if(T>1){var bd=(T-1)*V;Y+=bd;W+=bd;}
;}
else {var T=0;for(var i=0;i<length;i++ ){U=be[i].getSizeHint();Y=Math.max(Y,U.height);W=Math.max(W,U.minHeight);if(U.width>0){bb+=U.width;ba+=U.minWidth;T++ ;}
;}
;if(T>1){var bd=(T-1)*V;bb+=bd;ba+=bd;}
;}
;bc={minWidth:ba,width:bb,minHeight:W,height:Y};}
;return bc;}
}});}
)();
(function(){var a="qx.event.type.Data",b="qx.ui.form.IStringForm";qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;}
,resetValue:function(){}
,getValue:function(){}
}});}
)();
(function(){var a="safari",b="os.name",c="_applyTextAlign",d="Boolean",f="qx.ui.core.Widget",g="nowrap",h="changeStatus",i="changeTextAlign",j="_applyWrap",k="changeValue",l="browser.name",m="color",n="qx.ui.basic.Label",o="osx",p="css.textoverflow",q="qx.debug",r="textAlign",s="html.xul",t="_applyValue",u="center",v="Only rich labels support wrap.",w="_applyBuddy",x="enabled",y="String",z="toggleValue",A="whiteSpace",B="Only rich labels are selectable in browsers with Gecko engine!",C="function",D="browser.version",E="qx.dynlocale",F="engine.version",G="right",H="gecko",I="justify",J="changeRich",K="normal",L="_applyRich",M="engine.name",N="label",O="changeLocale",P="left",Q="tap",R="A";qx.Class.define(n,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(S){qx.ui.core.Widget.call(this);if(S!=null){this.setValue(S);}
;if(qx.core.Environment.get(E)){qx.locale.Manager.getInstance().addListener(O,this._onChangeLocale,this);}
;}
,properties:{rich:{check:d,init:false,event:J,apply:L},wrap:{check:d,init:true,apply:j},value:{check:y,apply:t,event:k,nullable:true},buddy:{check:f,apply:w,nullable:true,init:null,dereference:true},textAlign:{check:[P,u,G,I],nullable:true,themeable:true,apply:c,event:i},appearance:{refine:true,init:N},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__mn:null,__mo:null,__mp:null,__mq:null,_getContentHint:function(){if(this.__mo){this.__mr=this.__ms();delete this.__mo;}
;return {width:this.__mr.width,height:this.__mr.height};}
,_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();}
,_applySelectable:function(T){if(!qx.core.Environment.get(p)&&qx.core.Environment.get(s)){if(T&&!this.isRich()){if(qx.core.Environment.get(q)){this.warn(B);}
;return;}
;}
;qx.ui.core.Widget.prototype._applySelectable.call(this,T);}
,_getContentHeightForWidth:function(U){if(!this.getRich()&&!this.getWrap()){return null;}
;return this.__ms(U).height;}
,_createContentElement:function(){return new qx.html.Label;}
,_applyTextAlign:function(W,V){this.getContentElement().setStyle(r,W);}
,_applyTextColor:function(Y,X){if(Y){this.getContentElement().setStyle(m,qx.theme.manager.Color.getInstance().resolve(Y));}
else {this.getContentElement().removeStyle(m);}
;}
,__mr:{width:0,height:0},_applyFont:function(bc,bb){if(bb&&this.__mn&&this.__mq){this.__mn.removeListenerById(this.__mq);this.__mq=null;}
;var ba;if(bc){this.__mn=qx.theme.manager.Font.getInstance().resolve(bc);if(this.__mn instanceof qx.bom.webfonts.WebFont){this.__mq=this.__mn.addListener(h,this._onWebFontStatusChange,this);}
;ba=this.__mn.getStyles();}
else {this.__mn=null;ba=qx.bom.Font.getDefaultStyles();}
;if(this.getTextColor()!=null){delete ba[m];}
;this.getContentElement().setStyles(ba);this.__mo=true;qx.ui.core.queue.Layout.add(this);}
,__ms:function(bf){var be=qx.bom.Label;var bh=this.getFont();var bd=bh?this.__mn.getStyles():qx.bom.Font.getDefaultStyles();var content=this.getValue()||R;var bg=this.getRich();if(this.__mq){this.__mt();}
;return bg?be.getHtmlSize(content,bd,bf):be.getTextSize(content,bd);}
,__mt:function(){if(!this.getContentElement()){return;}
;if(qx.core.Environment.get(b)==o&&qx.core.Environment.get(M)==H&&parseInt(qx.core.Environment.get(F),10)<16&&parseInt(qx.core.Environment.get(F),10)>9){var bi=this.getContentElement().getDomElement();if(bi){bi.innerHTML=bi.innerHTML;}
;}
;}
,_applyBuddy:function(bk,bj){if(bj!=null){this.removeRelatedBindings(bj);this.removeListenerById(this.__mp);this.__mp=null;}
;if(bk!=null){bk.bind(x,this,x);this.__mp=this.addListener(Q,function(){if(bk.isFocusable()){bk.focus.apply(bk);}
;if(z in bk&&typeof bk.toggleValue===C){bk.toggleValue();}
;}
,this);}
;}
,_applyRich:function(bl){this.getContentElement().setRich(bl);this.__mo=true;qx.ui.core.queue.Layout.add(this);}
,_applyWrap:function(bo,bm){if(bo&&!this.isRich()){if(qx.core.Environment.get(q)){this.warn(v);}
;}
;if(this.isRich()){var bn=bo?K:g;this.getContentElement().setStyle(A,bn);}
;}
,_onChangeLocale:qx.core.Environment.select(E,{"true":function(e){var content=this.getValue();if(content&&content.translate){this.setValue(content.translate());}
;}
,"false":null}),_onWebFontStatusChange:function(bp){if(bp.getData().valid===true){if(qx.core.Environment.get(l)==a&&parseFloat(qx.core.Environment.get(D))>=8){window.setTimeout(function(){this.__mo=true;qx.ui.core.queue.Layout.add(this);}
.bind(this),0);}
;this.__mo=true;qx.ui.core.queue.Layout.add(this);}
;}
,_applyValue:qx.core.Environment.select(E,{"true":function(br,bq){if(br&&br.translate){this.getContentElement().setValue(br.translate());}
else {this.getContentElement().setValue(br);}
;this.__mo=true;qx.ui.core.queue.Layout.add(this);}
,"false":function(bt,bs){this.getContentElement().setValue(bt);this.__mo=true;qx.ui.core.queue.Layout.add(this);}
})},destruct:function(){if(qx.core.Environment.get(E)){qx.locale.Manager.getInstance().removeListener(O,this._onChangeLocale,this);}
;if(this.__mn&&this.__mq){this.__mn.removeListenerById(this.__mq);}
;this.__mn=null;}
});}
)();
(function(){var a="qx.ui.form.IForm",b="qx.event.type.Data";qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;}
,getEnabled:function(){}
,setRequired:function(d){return arguments.length==1;}
,getRequired:function(){}
,setValid:function(e){return arguments.length==1;}
,getValid:function(){}
,setInvalidMessage:function(f){return arguments.length==1;}
,getInvalidMessage:function(){}
,setRequiredInvalidMessage:function(g){return arguments.length==1;}
,getRequiredInvalidMessage:function(){}
}});}
)();
(function(){var a="qx.application.Standalone";qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);}
}});}
)();
(function(){var a="_applyActiveWindow",b="changeModal",c="__dn",d="windowAdded",f="changeVisibility",g="windowRemoved",h="qx.ui.window.Window",i="__mu",j="changeActive",k="qx.ui.window.MDesktop",l="changeActiveWindow",m="qx.event.type.Data";qx.Mixin.define(k,{properties:{activeWindow:{check:h,apply:a,event:l,init:null,nullable:true}},events:{windowAdded:m,windowRemoved:m},members:{__mu:null,__dn:null,getWindowManager:function(){if(!this.__dn){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());}
;return this.__dn;}
,supportsMaximize:function(){return true;}
,setWindowManager:function(n){if(this.__dn){this.__dn.setDesktop(null);}
;n.setDesktop(this);this.__dn=n;}
,_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());}
else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);}
;}
,_applyActiveWindow:function(p,o){this.getWindowManager().changeActiveWindow(p,o);this.getWindowManager().updateStack();}
,_onChangeModal:function(e){this.getWindowManager().updateStack();}
,_onChangeVisibility:function(){this.getWindowManager().updateStack();}
,_afterAddChild:function(q){if(qx.Class.isDefined(h)&&q instanceof qx.ui.window.Window){this._addWindow(q);}
;}
,_addWindow:function(r){if(!qx.lang.Array.contains(this.getWindows(),r)){this.getWindows().push(r);this.fireDataEvent(d,r);r.addListener(j,this._onChangeActive,this);r.addListener(b,this._onChangeModal,this);r.addListener(f,this._onChangeVisibility,this);}
;if(r.getActive()){this.setActiveWindow(r);}
;this.getWindowManager().updateStack();}
,_afterRemoveChild:function(s){if(qx.Class.isDefined(h)&&s instanceof qx.ui.window.Window){this._removeWindow(s);}
;}
,_removeWindow:function(t){if(qx.lang.Array.contains(this.getWindows(),t)){qx.lang.Array.remove(this.getWindows(),t);this.fireDataEvent(g,t);t.removeListener(j,this._onChangeActive,this);t.removeListener(b,this._onChangeModal,this);t.removeListener(f,this._onChangeVisibility,this);this.getWindowManager().updateStack();}
;}
,getWindows:function(){if(!this.__mu){this.__mu=[];}
;return this.__mu;}
},destruct:function(){this._disposeArray(i);this._disposeObjects(c);}
});}
)();
(function(){var a="_applyBlockerColor",b="Number",c="__mv",d="qx.ui.core.MBlocker",e="_applyBlockerOpacity",f="Color";qx.Mixin.define(d,{properties:{blockerColor:{check:f,init:null,nullable:true,apply:a,themeable:true},blockerOpacity:{check:b,init:1,apply:e,themeable:true}},members:{__mv:null,_createBlocker:function(){return new qx.ui.core.Blocker(this);}
,_applyBlockerColor:function(h,g){this.getBlocker().setColor(h);}
,_applyBlockerOpacity:function(j,i){this.getBlocker().setOpacity(j);}
,block:function(){this.getBlocker().block();}
,isBlocked:function(){return this.__mv&&this.__mv.isBlocked();}
,unblock:function(){if(this.__mv){this.__mv.unblock();}
;}
,forceUnblock:function(){if(this.__mv){this.__mv.forceUnblock();}
;}
,blockContent:function(k){this.getBlocker().blockContent(k);}
,getBlocker:function(){if(!this.__mv){this.__mv=this._createBlocker();}
;return this.__mv;}
},destruct:function(){this._disposeObjects(c);}
});}
)();
(function(){var a="qx.dyntheme",b="backgroundColor",c="_applyOpacity",d="Boolean",f="px",g="keydown",h="deactivate",j="changeTheme",k="opacity",l="Tab",m="qx.event.type.Event",n="move",o="Color",p="resize",q="zIndex",r="__mv",s="appear",t="qx.ui.root.Abstract",u="keyup",v="__dE",w="keypress",x="Number",y="unblocked",z="qx.ui.core.Blocker",A="disappear",B="blocked",C="_applyColor";qx.Class.define(z,{extend:qx.core.Object,events:{blocked:m,unblocked:m},construct:function(D){qx.core.Object.call(this);this._widget=D;D.addListener(p,this.__mA,this);D.addListener(n,this.__mA,this);D.addListener(A,this.__mC,this);if(qx.Class.isDefined(t)&&D instanceof qx.ui.root.Abstract){this._isRoot=true;this.setKeepBlockerActive(true);}
;if(qx.core.Environment.get(a)){qx.theme.manager.Meta.getInstance().addListener(j,this._onChangeTheme,this);}
;this.__mw=[];this.__mx=[];}
,properties:{color:{check:o,init:null,nullable:true,apply:C,themeable:true},opacity:{check:x,init:1,apply:c,themeable:true},keepBlockerActive:{check:d,init:false}},members:{__mv:null,__my:0,__mw:null,__mx:null,__dE:null,_widget:null,_isRoot:false,__mz:null,__mA:function(e){var E=e.getData();if(this.isBlocked()){this._updateBlockerBounds(E);}
;}
,__mB:function(){this._updateBlockerBounds(this._widget.getBounds());if(this._widget.isRootWidget()){this._widget.getContentElement().add(this.getBlockerElement());}
else {this._widget.getLayoutParent().getContentElement().add(this.getBlockerElement());}
;}
,__mC:function(){if(this.isBlocked()){this.getBlockerElement().getParent().remove(this.getBlockerElement());this._widget.addListenerOnce(s,this.__mB,this);}
;}
,_updateBlockerBounds:function(F){this.getBlockerElement().setStyles({width:F.width+f,height:F.height+f,left:F.left+f,top:F.top+f});}
,_applyColor:function(I,H){var G=qx.theme.manager.Color.getInstance().resolve(I);this.__mD(b,G);}
,_applyOpacity:function(K,J){this.__mD(k,K);}
,_onChangeTheme:qx.core.Environment.select(a,{"true":function(){this._applyColor(this.getColor());}
,"false":null}),__mD:function(M,N){var L=[];this.__mv&&L.push(this.__mv);for(var i=0;i<L.length;i++ ){L[i].setStyle(M,N);}
;}
,_backupActiveWidget:function(){var O=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);this.__mw.push(qx.ui.core.Widget.getWidgetByElement(O.getActive()));this.__mx.push(qx.ui.core.Widget.getWidgetByElement(O.getFocus()));if(this._widget.isFocusable()){this._widget.focus();}
;}
,_restoreActiveWidget:function(){var Q;var P=this.__mx.length;if(P>0){Q=this.__mx.pop();if(Q&&!Q.isDisposed()&&Q.isFocusable()){Q.focus();}
;}
;var R=this.__mw.length;if(R>0){Q=this.__mw.pop();if(Q&&!Q.isDisposed()){Q.activate();}
;}
;}
,__mE:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());}
,getBlockerElement:function(S){if(!this.__mv){this.__mv=this.__mE();this.__mv.setStyle(q,15);if(!S){if(this._isRoot){S=this._widget;}
else {S=this._widget.getLayoutParent();}
;}
;S.getContentElement().add(this.__mv);this.__mv.exclude();}
;return this.__mv;}
,block:function(){this._block();}
,_block:function(T,V){if(!this._isRoot&&!this._widget.getLayoutParent()){this.__mz=this._widget.addListenerOnce(s,this._block.bind(this,T));return;}
;var parent;if(this._isRoot||V){parent=this._widget;}
else {parent=this._widget.getLayoutParent();}
;var U=this.getBlockerElement(parent);if(T!=null){U.setStyle(q,T);}
;this.__my++ ;if(this.__my<2){this._backupActiveWidget();var W=this._widget.getBounds();if(W){this._updateBlockerBounds(W);}
;U.include();if(!V){U.activate();}
;U.addListener(h,this.__mH,this);U.addListener(w,this.__mG,this);U.addListener(g,this.__mG,this);U.addListener(u,this.__mG,this);this.fireEvent(B,qx.event.type.Event);}
;}
,isBlocked:function(){return this.__my>0;}
,unblock:function(){if(this.__mz){this._widget.removeListenerById(this.__mz);}
;if(!this.isBlocked()){return;}
;this.__my-- ;if(this.__my<1){this.__mF();this.__my=0;}
;}
,forceUnblock:function(){if(!this.isBlocked()){return;}
;this.__my=0;this.__mF();}
,__mF:function(){this._restoreActiveWidget();var X=this.getBlockerElement();X.removeListener(h,this.__mH,this);X.removeListener(w,this.__mG,this);X.removeListener(g,this.__mG,this);X.removeListener(u,this.__mG,this);X.exclude();this.fireEvent(y,qx.event.type.Event);}
,blockContent:function(Y){this._block(Y,true);}
,__mG:function(e){if(e.getKeyIdentifier()==l){e.stop();}
;}
,__mH:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();}
;}
},destruct:function(){if(qx.core.Environment.get(a)){qx.theme.manager.Meta.getInstance().removeListener(j,this._onChangeTheme,this);}
;this._widget.removeListener(p,this.__mA,this);this._widget.removeListener(n,this.__mA,this);this._widget.removeListener(s,this.__mB,this);this._widget.removeListener(A,this.__mC,this);if(this.__mz){this._widget.removeListenerById(this.__mz);}
;this._disposeObjects(r,v);this.__mw=this.__mx=this._widget=null;}
});}
)();
(function(){var a="swipe",b="repeat",c="mousedown",d="url(",f="pointerover",g=")",h="longtap",i="mouseout",j="div",k="roll",l="cursor",m="dblclick",n="mousewheel",o="qx.html.Blocker",p="mousemove",q="dbltap",r="pointerup",s="mouseover",t="appear",u="click",v="pointerdown",w="mshtml",x="engine.name",y="mouseup",z="contextmenu",A="disappear",B="tap",C="pointermove",D="pointerout",E="qx/static/blank.gif",F="absolute";qx.Class.define(o,{extend:qx.html.Element,construct:function(I,G){var I=I?qx.theme.manager.Color.getInstance().resolve(I):null;var H={position:F,opacity:G||0,backgroundColor:I};if((qx.core.Environment.get(x)==w)){H.backgroundImage=d+qx.util.ResourceManager.getInstance().toUri(E)+g;H.backgroundRepeat=b;}
;qx.html.Element.call(this,j,H);this.addListener(c,this._stopPropagation,this);this.addListener(y,this._stopPropagation,this);this.addListener(u,this._stopPropagation,this);this.addListener(m,this._stopPropagation,this);this.addListener(p,this._stopPropagation,this);this.addListener(s,this._stopPropagation,this);this.addListener(i,this._stopPropagation,this);this.addListener(n,this._stopPropagation,this);this.addListener(k,this._stopPropagation,this);this.addListener(z,this._stopPropagation,this);this.addListener(v,this._stopPropagation,this);this.addListener(r,this._stopPropagation,this);this.addListener(C,this._stopPropagation,this);this.addListener(f,this._stopPropagation,this);this.addListener(D,this._stopPropagation,this);this.addListener(B,this._stopPropagation,this);this.addListener(q,this._stopPropagation,this);this.addListener(a,this._stopPropagation,this);this.addListener(h,this._stopPropagation,this);this.addListener(t,this.__mI,this);this.addListener(A,this.__mI,this);}
,members:{_stopPropagation:function(e){e.stopPropagation();}
,__mI:function(){var J=this.getStyle(l);this.setStyle(l,null,true);this.setStyle(l,J,true);}
}});}
)();
(function(){var a="Boolean",b="event.help",c="true",d="Space",f="textarea",g="changeGlobalCursor",h="",i="input",j="select",k="_applyNativeHelp",l=" !important",m="String",n="*",o="root",p="_applyGlobalCursor",q="qx.ui.root.Abstract",r="abstract",s="engine.name",t="keypress",u="contextmenu",v="help",w="a",x=";";qx.Class.define(q,{type:r,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);qx.ui.core.FocusHandler.getInstance().addRoot(this);qx.ui.core.queue.Visibility.add(this);this.initNativeHelp();this.addListener(t,this.__mK,this);}
,properties:{appearance:{refine:true,init:o},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:m,nullable:true,themeable:true,apply:p,event:g},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:a,init:false,apply:k}},members:{__mJ:null,isRootWidget:function(){return true;}
,getLayout:function(){return this._getLayout();}
,_applyGlobalCursor:qx.core.Environment.select(s,{"mshtml":function(z,y){}
,"default":function(D,C){var B=qx.bom.Stylesheet;var A=this.__mJ;if(!A){this.__mJ=A=B.createElement();}
;B.removeAllRules(A);if(D){B.addRule(A,n,qx.bom.element.Cursor.compile(D).replace(x,h)+l);}
;}
}),_applyNativeContextMenu:function(F,E){if(F){this.removeListener(u,this._onNativeContextMenu,this,true);}
else {this.addListener(u,this._onNativeContextMenu,this,true);}
;}
,_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;}
;e.preventDefault();}
,__mK:function(e){if(e.getKeyIdentifier()!==d){return;}
;var K=e.getTarget();var I=qx.ui.core.FocusHandler.getInstance();if(!I.isFocused(K)){return;}
;var G=K.getContentElement();var H=G.getNodeName();var J=G.getDomElement();if(H===i||H===f||(J&&J.contentEditable===c)){return;}
;H=qx.dom.Node.getName(e.getOriginalTarget());if(H&&[i,f,j,w].indexOf(H)>-1){return;}
;e.preventDefault();}
,_applyNativeHelp:function(M,L){if(qx.core.Environment.get(b)){if(L===false){qx.bom.Event.removeNativeListener(document,v,(function(){return false;}
));}
;if(M===false){qx.bom.Event.addNativeListener(document,v,(function(){return false;}
));}
;}
;}
},destruct:function(){this.__mJ=null;}
,defer:function(N,O){qx.ui.core.MChildrenHandling.remap(O);}
});}
)();
(function(){var a="keypress",b="focusout",c="activate",d="Tab",f="singleton",g="__mL",h="deactivate",j="focusin",k="qx.ui.core.FocusHandler";qx.Class.define(k,{extend:qx.core.Object,type:f,construct:function(){qx.core.Object.call(this);this.__mL={};}
,members:{__mL:null,__mM:null,__mN:null,__mO:null,connectTo:function(m){m.addListener(a,this.__ix,this);m.addListener(j,this._onFocusIn,this,true);m.addListener(b,this._onFocusOut,this,true);m.addListener(c,this._onActivate,this,true);m.addListener(h,this._onDeactivate,this,true);}
,addRoot:function(n){this.__mL[n.$$hash]=n;}
,removeRoot:function(o){delete this.__mL[o.$$hash];}
,getActiveWidget:function(){return this.__mM;}
,isActive:function(p){return this.__mM==p;}
,getFocusedWidget:function(){return this.__mN;}
,isFocused:function(q){return this.__mN==q;}
,isFocusRoot:function(r){return !!this.__mL[r.$$hash];}
,_onActivate:function(e){var t=e.getTarget();this.__mM=t;var s=this.__mP(t);if(s!=this.__mO){this.__mO=s;}
;}
,_onDeactivate:function(e){var u=e.getTarget();if(this.__mM==u){this.__mM=null;}
;}
,_onFocusIn:function(e){var v=e.getTarget();if(v!=this.__mN){this.__mN=v;v.visualizeFocus();}
;}
,_onFocusOut:function(e){var w=e.getTarget();if(w==this.__mN){this.__mN=null;w.visualizeBlur();}
;}
,__ix:function(e){if(e.getKeyIdentifier()!=d){return;}
;if(!this.__mO){return;}
;e.stopPropagation();e.preventDefault();var x=this.__mN;if(!e.isShiftPressed()){var y=x?this.__mT(x):this.__mR();}
else {var y=x?this.__mU(x):this.__mS();}
;if(y){y.tabFocus();}
;}
,__mP:function(z){var A=this.__mL;while(z){if(A[z.$$hash]){return z;}
;z=z.getLayoutParent();}
;return null;}
,__mQ:function(I,H){if(I===H){return 0;}
;var C=I.getTabIndex()||0;var B=H.getTabIndex()||0;if(C!=B){return C-B;}
;var J=I.getContentElement().getDomElement();var G=H.getContentElement().getDomElement();var F=qx.bom.element.Location;var E=F.get(J);var D=F.get(G);if(E.top!=D.top){return E.top-D.top;}
;if(E.left!=D.left){return E.left-D.left;}
;var K=I.getZIndex();var L=H.getZIndex();if(K!=L){return K-L;}
;return 0;}
,__mR:function(){return this.__mX(this.__mO,null);}
,__mS:function(){return this.__mY(this.__mO,null);}
,__mT:function(M){var N=this.__mO;if(N==M){return this.__mR();}
;while(M&&M.getAnonymous()){M=M.getLayoutParent();}
;if(M==null){return [];}
;var O=[];this.__mV(N,M,O);O.sort(this.__mQ);var P=O.length;return P>0?O[0]:this.__mR();}
,__mU:function(Q){var R=this.__mO;if(R==Q){return this.__mS();}
;while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();}
;if(Q==null){return [];}
;var S=[];this.__mW(R,Q,S);S.sort(this.__mQ);var T=S.length;return T>0?S[T-1]:this.__mS();}
,__mV:function(parent,U,V){var X=parent.getLayoutChildren();var W;for(var i=0,l=X.length;i<l;i++ ){W=X[i];if(!(W instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(W)&&W.isEnabled()&&W.isVisible()){if(W.isTabable()&&this.__mQ(U,W)<0){V.push(W);}
;this.__mV(W,U,V);}
;}
;}
,__mW:function(parent,Y,ba){var bc=parent.getLayoutChildren();var bb;for(var i=0,l=bc.length;i<l;i++ ){bb=bc[i];if(!(bb instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(bb)&&bb.isEnabled()&&bb.isVisible()){if(bb.isTabable()&&this.__mQ(Y,bb)>0){ba.push(bb);}
;this.__mW(bb,Y,ba);}
;}
;}
,__mX:function(parent,bd){var bf=parent.getLayoutChildren();var be;for(var i=0,l=bf.length;i<l;i++ ){be=bf[i];if(!(be instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()){if(bd==null||this.__mQ(be,bd)<0){bd=be;}
;}
;bd=this.__mX(be,bd);}
;}
;return bd;}
,__mY:function(parent,bg){var bi=parent.getLayoutChildren();var bh;for(var i=0,l=bi.length;i<l;i++ ){bh=bi[i];if(!(bh instanceof qx.ui.core.Widget)){continue;}
;if(!this.isFocusRoot(bh)&&bh.isEnabled()&&bh.isVisible()){if(bh.isTabable()){if(bg==null||this.__mQ(bh,bg)>0){bg=bh;}
;}
;bg=this.__mY(bh,bg);}
;}
;return bg;}
},destruct:function(){this._disposeMap(g);this.__mN=this.__mM=this.__mO=null;}
});}
)();
(function(){var a="touchmove",b="os.name",c="-webkit-overflow-scrolling",d="touch",f="paddingLeft",g="div",h="100%",i="The root widget does not support 'left', or 'top' paddings!",j="0px",k="The application could not be started due to a missing body tag in the HTML file!",l="ios",m="overflowY",n="resize",o="",p="paddingTop",q="engine.name",r="none",s="webkit",t="-webkit-backface-visibility",u="touch-action",v="qx.ui.root.Application",w="hidden",x="tap",y="overflowX",z="absolute";qx.Class.define(v,{extend:qx.ui.root.Abstract,construct:function(A){this.__cJ=qx.dom.Node.getWindow(A);this.__na=A;qx.ui.root.Abstract.call(this);qx.event.Registration.addListener(this.__cJ,n,this._onResize,this);this._setLayout(new qx.ui.layout.Canvas());qx.ui.core.queue.Layout.add(this);qx.ui.core.FocusHandler.getInstance().connectTo(this);this.getContentElement().disableScrolling();this.getContentElement().setStyle(t,w);this.addListener(a,this.__nb,this);if(qx.core.Environment.get(b)==l){this.getContentElement().addListener(x,function(e){var B=qx.ui.core.Widget.getWidgetByElement(e.getTarget());while(B&&!B.isFocusable()){B=B.getLayoutParent();}
;if(B&&B.isFocusable()){B.getContentElement().focus();}
;}
,this,true);}
;}
,members:{__cJ:null,__na:null,_createContentElement:function(){var C=this.__na;if((qx.core.Environment.get(q)==s)){if(!C.body){alert(k);}
;}
;var G=C.documentElement.style;var D=C.body.style;G.overflow=D.overflow=w;G.padding=G.margin=D.padding=D.margin=j;G.width=G.height=D.width=D.height=h;var F=C.createElement(g);C.body.appendChild(F);var E=new qx.html.Root(F);E.setStyles({"position":z,"overflowX":w,"overflowY":w});E.connectWidget(this);return E;}
,_onResize:function(e){qx.ui.core.queue.Layout.add(this);if(qx.ui.popup&&qx.ui.popup.Manager){qx.ui.popup.Manager.getInstance().hideAll();}
;if(qx.ui.menu&&qx.ui.menu.Manager){qx.ui.menu.Manager.getInstance().hideAll();}
;}
,_computeSizeHint:function(){var H=qx.bom.Viewport.getWidth(this.__cJ);var I=qx.bom.Viewport.getHeight(this.__cJ);return {minWidth:H,width:H,maxWidth:H,minHeight:I,height:I,maxHeight:I};}
,_applyPadding:function(K,J,name){if(K&&(name==p||name==f)){throw new Error(i);}
;qx.ui.root.Abstract.prototype._applyPadding.call(this,K,J,name);}
,__nb:function(e){var L=e.getOriginalTarget();while(L&&L.style){var P=qx.bom.element.Style.get(L,u)!==r&&qx.bom.element.Style.get(L,u)!==o;var O=qx.bom.element.Style.get(L,c)===d;var N=qx.bom.element.Style.get(L,y)!=w;var M=qx.bom.element.Style.get(L,m)!=w;if(P||O||M||N){return;}
;L=L.parentNode;}
;e.preventDefault();}
,destroy:function(){if(this.$$disposed){return;}
;qx.dom.Element.remove(this.getContentElement().getDomElement());qx.ui.root.Abstract.prototype.destroy.call(this);}
},destruct:function(){this.__cJ=this.__na=null;}
});}
)();
(function(){var a="Boolean",b="': ",c="width",d="qx.ui.layout.Canvas",e="number",f="qx.debug",g="height",h="Bad format of layout property '",j="The property '",k=". The value must be either an integer or an percent string.",m="' is not supported by the Canvas layout!";qx.Class.define(d,{extend:qx.ui.layout.Abstract,properties:{desktop:{check:a,init:false}},members:{verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(p,name,o){var n={top:1,left:1,bottom:1,right:1,width:1,height:1,edge:1};this.assert(n[name]==1,j+name+m);if(name==c||name==g){this.assertMatch(o,qx.ui.layout.Util.PERCENT_VALUE);}
else {if(typeof o===e){this.assertInteger(o);}
else if(qx.lang.Type.isString(o)){this.assertMatch(o,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.fail(h+name+b+o+k);}
;}
;}
,"false":null}),renderLayout:function(t,v,x){var D=this._getLayoutChildren();var q,F,C;var s,top,r,u,y,w;var B,A,E,z;for(var i=0,l=D.length;i<l;i++ ){q=D[i];F=q.getSizeHint();C=q.getLayoutProperties();B=q.getMarginTop();A=q.getMarginRight();E=q.getMarginBottom();z=q.getMarginLeft();s=C.left!=null?C.left:C.edge;if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*t/100);}
;r=C.right!=null?C.right:C.edge;if(qx.lang.Type.isString(r)){r=Math.round(parseFloat(r)*t/100);}
;top=C.top!=null?C.top:C.edge;if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*v/100);}
;u=C.bottom!=null?C.bottom:C.edge;if(qx.lang.Type.isString(u)){u=Math.round(parseFloat(u)*v/100);}
;if(s!=null&&r!=null){y=t-s-r-z-A;if(y<F.minWidth){y=F.minWidth;}
else if(y>F.maxWidth){y=F.maxWidth;}
;s+=z;}
else {y=C.width;if(y==null){y=F.width;}
else {y=Math.round(parseFloat(y)*t/100);if(y<F.minWidth){y=F.minWidth;}
else if(y>F.maxWidth){y=F.maxWidth;}
;}
;if(r!=null){s=t-y-r-A-z;}
else if(s==null){s=z;}
else {s+=z;}
;}
;if(top!=null&&u!=null){w=v-top-u-B-E;if(w<F.minHeight){w=F.minHeight;}
else if(w>F.maxHeight){w=F.maxHeight;}
;top+=B;}
else {w=C.height;if(w==null){w=F.height;}
else {w=Math.round(parseFloat(w)*v/100);if(w<F.minHeight){w=F.minHeight;}
else if(w>F.maxHeight){w=F.maxHeight;}
;}
;if(u!=null){top=v-w-u-E-B;}
else if(top==null){top=B;}
else {top+=B;}
;}
;s+=x.left;top+=x.top;q.renderLayout(s,top,y,w);}
;}
,_computeSizeHint:function(){var X=0,J=0;var U=0,T=0;var S,G;var P,N;var W=this._getLayoutChildren();var H,M,K;var V=this.isDesktop();var L,top,I,O;for(var i=0,l=W.length;i<l;i++ ){H=W[i];M=H.getLayoutProperties();K=H.getSizeHint();var R=H.getMarginLeft()+H.getMarginRight();var Q=H.getMarginTop()+H.getMarginBottom();S=K.width+R;G=K.minWidth+R;L=M.left!=null?M.left:M.edge;if(L&&typeof L===e){S+=L;G+=L;}
;I=M.right!=null?M.right:M.edge;if(I&&typeof I===e){S+=I;G+=I;}
;X=Math.max(X,S);J=V?0:Math.max(J,G);P=K.height+Q;N=K.minHeight+Q;top=M.top!=null?M.top:M.edge;if(top&&typeof top===e){P+=top;N+=top;}
;O=M.bottom!=null?M.bottom:M.edge;if(O&&typeof O===e){P+=O;N+=O;}
;U=Math.max(U,P);T=V?0:Math.max(T,N);}
;return {width:X,minWidth:J,height:U,minHeight:T};}
}});}
)();
(function(){var a="qx.html.Root";qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);if(b!=null){this.useElement(b);}
;}
,members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);this.setRoot(true);qx.html.Element._modified[this.$$hash]=this;}
}});}
)();
(function(){var a="demobrowser/demo/ui/FsmMiceMaze.png",b="FadingOut, and Zombie (about to dispose).",c="which it was instantiated); when it ",d="Each mouse is driven by (and in fact, in this example, is a ",e="The initial mouse is a bit special, in that it looks for ",f="This is a simple example of using a finite state machine, in ",g="behind it, as well as to its left and right.",h="qx.debug",i="<p>",j="Each mouse is quite dumb, having in ",k="arrives at a new cell, it looks left and right and creates a ",l="<u>The finite state diagram is below the maze.</u>",m="its arsenal of knowledge only these characteristics: it knows ",n="subclass of) a finite state machine.  The FSM has five states: ",p="clone of itself to go each available direction; upon hitting a ",q="only how to travel in a single direction (the direction in ",r="demobrowser.demo.ui.FiniteStateMachine",s="wall, it dies.",t="FadingIn, CellArrival (look for cloning opportunities), Moving, ",u="which virtual mice solve a maze. ",v="the possibility to clone a mouse to travel in the direction ";qx.Class.define(r,{extend:qx.application.Standalone,construct:function(){qx.application.Standalone.call(this);}
,members:{main:function(){qx.application.Standalone.prototype.main.call(this);if((qx.core.Environment.get(h))){qx.log.appender.Native;qx.log.appender.Console;}
;var x=f+u+i+j+m+q+c+k+p+s+i+e+v+g+i+d+n+t+b+i+l;var scroll=new qx.ui.container.Scroll();this.getRoot().add(scroll,{edge:0});var w=new qx.ui.container.Composite(new qx.ui.layout.Canvas());scroll.add(w);var o;o=new qx.ui.basic.Image(a);o=null;o=new qx.ui.basic.Label(x);o.set({width:700,rich:true,wrap:true});w.add(o,{left:50});var A=new demobrowser.demo.util.FSMMaze(10,10,50,240);w.add(A,{left:50,top:240});o=new qx.ui.basic.Image(a,800);w.add(o,{left:50,top:800});var z;var y=Math.floor(Math.random()*4);switch(y){case 0:z=demobrowser.demo.util.FSMMaze.Direction.NORTH;break;case 1:z=demobrowser.demo.util.FSMMaze.Direction.EAST;break;case 2:z=demobrowser.demo.util.FSMMaze.Direction.SOUTH;break;case 3:z=demobrowser.demo.util.FSMMaze.Direction.WEST;break;};new demobrowser.demo.util.FSMMouse(null,A,z,w);}
,close:function(){qx.application.Standalone.prototype.close.call(this);}
,terminate:function(){qx.application.Standalone.prototype.terminate.call(this);}
}});}
)();
(function(){var a="Use qx.dev.StackTrace.FORMAT_STACKTRACE instead",b="function",c="<span class='object'>",d="]:",e="&gt;",f="<span class='object' title='Object instance with hash code: ",g="FORMAT_STACK",h="string",k="level-",l="0",m="&lt;",n="<span class='offset'>",o="</span> ",p="}",q=":",r="qx.log.appender.Util",s="&amp;",t="&#39;",u="DIV",v="",w="]",x="'>",y="<span>",z="[",A=", ",B="</span>",C="\n",D="&quot;",E="<span class='type-key'>",F="{",G="</span>:<span class='type-",H="</span>: ",I=" ",J="]</span>: ",K="map",L="?",M="<span class='type-";qx.Bootstrap.define(r,{statics:{toHtml:function(V){var X=[];var T,W,O,Q;X.push(n,this.formatOffset(V.offset,6),o);if(V.object){if(V.clazz){X.push(f+V.object+x,V.clazz.classname,z,V.object,J);}
else {var N=V.win.qx.core.ObjectRegistry.fromHashCode(V.object,true);if(N){X.push(f+N.$$hash+x,N.classname,z,N.$$hash,J);}
;}
;}
else if(V.clazz){X.push(c+V.clazz.classname,H);}
;var P=V.items;for(var i=0,U=P.length;i<U;i++ ){T=P[i];W=T.text;if(W instanceof Array){var Q=[];for(var j=0,S=W.length;j<S;j++ ){O=W[j];if(typeof O===h){Q.push(y+this.escapeHTML(O)+B);}
else if(O.key){Q.push(E+O.key+G+O.type+x+this.escapeHTML(O.text)+B);}
else {Q.push(M+O.type+x+this.escapeHTML(O.text)+B);}
;}
;X.push(M+T.type+x);if(T.type===K){X.push(F,Q.join(A),p);}
else {X.push(z,Q.join(A),w);}
;X.push(B);}
else {X.push(M+T.type+x+this.escapeHTML(W)+o);}
;}
;var R=document.createElement(u);R.innerHTML=X.join(v);R.className=k+V.level;return R;}
,formatOffset:function(bb,length){var ba=bb.toString();var bc=(length||6)-ba.length;var Y=v;for(var i=0;i<bc;i++ ){Y+=l;}
;return Y+ba;}
,escapeHTML:function(bd){return String(bd).replace(/[<>&"']/g,this.__nc);}
,__nc:function(bf){var be={"<":m,">":e,"&":s,"'":t,'"':D};return be[bf]||L;}
,toText:function(bg){return this.toTextArray(bg).join(I);}
,toTextArray:function(bn){var bp=[];bp.push(this.formatOffset(bn.offset,6));if(bn.object){if(bn.clazz){bp.push(bn.clazz.classname+z+bn.object+d);}
else {var bh=bn.win.qx.core.ObjectRegistry.fromHashCode(bn.object,true);if(bh){bp.push(bh.classname+z+bh.$$hash+d);}
;}
;}
else if(bn.clazz){bp.push(bn.clazz.classname+q);}
;var bi=bn.items;var bl,bo;for(var i=0,bm=bi.length;i<bm;i++ ){bl=bi[i];bo=bl.text;if(bl.trace&&bl.trace.length>0){if(typeof (this.FORMAT_STACK)==b){qx.log.Logger.deprecatedConstantWarning(qx.log.appender.Util,g,a);bo+=C+this.FORMAT_STACK(bl.trace);}
else {bo+=C+bl.trace;}
;}
;if(bo instanceof Array){var bj=[];for(var j=0,bk=bo.length;j<bk;j++ ){bj.push(bo[j].text);}
;if(bl.type===K){bp.push(F,bj.join(A),p);}
else {bp.push(z,bj.join(A),w);}
;}
else {bp.push(bo);}
;}
;return bp;}
}});}
)();
(function(){var a="html.console",b="qx.log.appender.Native",c="log";qx.Bootstrap.define(b,{statics:{process:function(d){if(qx.core.Environment.get(a)){var f=console[d.level]?d.level:c;if(console[f]){var e=qx.log.appender.Util.toText(d);console[f](e);}
;}
;}
},defer:function(g){qx.log.Logger.register(g);}
});}
)();
(function(){var a='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',b="Enter",c="px",d='</div>',f="longtap",g='.qxconsole .messages .user-result{background:white}',h='.qxconsole .messages .level-error{background:#FFE2D5}',i="navigationbar",j="div",k="user-command",l='<div class="command">',m="Up",n='.qxconsole .command input:focus{outline:none;}',o='.qxconsole .messages .type-key{color:#565656;font-style:italic}',p="none",q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',r='.qxconsole .messages div{padding:0px 4px;}',s='.qxconsole .messages .level-debug{background:white}',t='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',u="DIV",v='.qxconsole .messages .level-user{background:#E3EFE9}',w='<div class="qxconsole">',x="",y="D",z='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',A='.qxconsole .messages .type-string{color:black;font-weight:normal;}',B='.qxconsole .control a{text-decoration:none;color:black;}',C='<div class="messages">',D='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',E='<input type="text"/>',F="clear",G='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',H="keypress",I='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',J='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',K='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',L='.qxconsole .messages .user-command{color:blue}',M="F7",N="qx.log.appender.Console",O='.qxconsole .messages .level-info{background:#DEEDFA}',P="block",Q='.qxconsole .messages .level-warn{background:#FFF7D5}',R='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',S='.qxconsole .messages .user-error{background:#FFE2D5}',T='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',U='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',V=">>> ",W="Down",X='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';qx.Class.define(N,{statics:{__nd:null,__co:null,__ne:null,__nf:null,init:function(){var Y=[J,T,B,a,r,L,g,S,s,O,Q,h,v,A,X,D,I,z,o,t,q,R,K,G,n];qx.bom.Stylesheet.createElement(Y.join(x));var bb=[w,U,C,d,l,E,d,d];var bc=document.createElement(u);bc.innerHTML=bb.join(x);var ba=bc.firstChild;document.body.appendChild(bc.firstChild);this.__nd=ba;this.__co=ba.childNodes[1];this.__ne=ba.childNodes[2].firstChild;this.__ni();qx.log.Logger.register(this);qx.core.ObjectRegistry.register(this);}
,dispose:function(){qx.event.Registration.removeListener(document.documentElement,H,this.__ix,this);qx.log.Logger.unregister(this);}
,clear:function(){this.__co.innerHTML=x;}
,process:function(bd){this.__co.appendChild(qx.log.appender.Util.toHtml(bd));this.__ng();}
,__ng:function(){this.__co.scrollTop=this.__co.scrollHeight;}
,__hf:true,toggle:function(){if(!this.__nd){this.init();}
else if(this.__nd.style.display==p){this.show();}
else {this.__nd.style.display=p;}
;}
,show:function(){if(!this.__nd){this.init();}
else {this.__nd.style.display=P;this.__co.scrollTop=this.__co.scrollHeight;}
;}
,__nh:[],execute:function(){var bf=this.__ne.value;if(bf==x){return;}
;if(bf==F){this.clear();return;}
;var be=document.createElement(j);be.innerHTML=qx.log.appender.Util.escapeHTML(V+bf);be.className=k;this.__nh.push(bf);this.__nf=this.__nh.length;this.__co.appendChild(be);this.__ng();try{var bg=window.eval(bf);}
catch(bh){qx.log.Logger.error(bh);}
;if(bg!==undefined){qx.log.Logger.debug(bg);}
;}
,__ni:function(e){this.__co.style.height=(this.__nd.clientHeight-this.__nd.firstChild.offsetHeight-this.__nd.lastChild.offsetHeight)+c;}
,__ix:function(e){if(e instanceof qx.event.type.Tap||e instanceof qx.event.type.Pointer){var bk=e.getTarget();if(bk&&bk.className&&bk.className.indexOf&&bk.className.indexOf(i)!=-1){this.toggle();}
;return;}
;var bj=e.getKeyIdentifier();if((bj==M)||(bj==y&&e.isCtrlPressed())){this.toggle();e.preventDefault();}
;if(!this.__nd){return;}
;if(!qx.dom.Hierarchy.contains(this.__nd,e.getTarget())){return;}
;if(bj==b&&this.__ne.value!=x){this.execute();this.__ne.value=x;}
;if(bj==m||bj==W){this.__nf+=bj==m?-1:1;this.__nf=Math.min(Math.max(0,this.__nf),this.__nh.length);var bi=this.__nh[this.__nf];this.__ne.value=bi||x;this.__ne.select();}
;}
},defer:function(bl){qx.event.Registration.addListener(document.documentElement,H,bl.__ix,bl);qx.event.Registration.addListener(document.documentElement,f,bl.__ix,bl);}
});}
)();
(function(){var a="mouse",b="scrollbar-y",c="qx.ui.core.scroll.MRoll",d="pointerdown",f="scrollbar-x",g="roll";qx.Mixin.define(c,{members:{__rH:null,_addRollHandling:function(){this.addListener(g,this._onRoll,this);this.addListener(d,this._onPointerDownForRoll,this);}
,_removeRollHandling:function(){this.removeListener(g,this._onRoll,this);this.removeListener(d,this._onPointerDownForRoll,this);}
,_onPointerDownForRoll:function(e){this.__rH=e.getPointerId();}
,_onRoll:function(e){if(e.getPointerType()==a){return;}
;if(this.__rH&&e.getMomentum()){e.stopMomentum();this.__rH=null;return;}
;this.__rH=null;var k=this._isChildControlVisible(f);var l=this._isChildControlVisible(b);var q=l?this.getChildControl(b,true):null;var p=k?this.getChildControl(f,true):null;var m=e.getDelta().y;var h=e.getDelta().x;var j=!l;var o=!k;if(q){if(m!==0){q.scrollBy(parseInt(m,10));}
;var n=q.getPosition();var i=q.getMaximum();if(m<0&&n<=0||m>0&&n>=i){j=true;}
;}
;if(p){if(h!==0){p.scrollBy(parseInt(h,10));}
;var n=p.getPosition();var i=p.getMaximum();if(h<0&&n<=0||h>0&&n>=i){o=true;}
;}
;if(o&&j){e.stopMomentum();}
;if((!j&&h===0)||(!o&&m===0)||((!o||!j)&&h!==0&&m!==0)){e.stop();}
;}
}});}
)();
(function(){var a="x",b="Float",c="qx.ui.core.MDragDropScrolling",d="",f="). Must be: 'left', 'right', 'top' or 'bottom'",g="bottom",h="interval",i="dragend",j="scrollbar-",k="drag",l="Invalid edge type given (",m="top",n="left",o="right",p="Integer",q="y";qx.Mixin.define(c,{construct:function(){var r=this;if(this instanceof qx.ui.core.DragDropScrolling){r=this._getWidget();}
;r.addListener(k,this.__rL,this);r.addListener(i,this.__rM,this);this.__rI=[n,o];this.__rJ=[m,g];}
,properties:{dragScrollThresholdX:{check:p,init:30},dragScrollThresholdY:{check:p,init:30},dragScrollSlowDownFactor:{check:b,init:0.1}},members:{__rK:null,__rI:null,__rJ:null,_findScrollableParent:function(s){var t=s;if(t===null){return null;}
;while(t.getLayoutParent()){t=t.getLayoutParent();if(this._isScrollable(t)){return t;}
;}
;return null;}
,_isScrollable:function(u){return qx.Class.hasMixin(u.constructor,qx.ui.core.scroll.MScrollBarFactory);}
,_getBounds:function(v){var w=v.getContentLocation();if(v.getScrollAreaContainer){w=v.getScrollAreaContainer().getContentLocation();}
;return w;}
,_getEdgeType:function(y,z,x){if((y.left*-1)<=z&&y.left<0){return n;}
else if((y.top*-1)<=x&&y.top<0){return m;}
else if(y.right<=z&&y.right>0){return o;}
else if(y.bottom<=x&&y.bottom>0){return g;}
else {return null;}
;}
,_getAxis:function(A){if(this.__rI.indexOf(A)!==-1){return a;}
else if(this.__rJ.indexOf(A)!==-1){return q;}
else {throw new Error(l+A+f);}
;}
,_getThresholdByEdgeType:function(B){if(this.__rI.indexOf(B)!==-1){return this.getDragScrollThresholdX();}
else if(this.__rJ.indexOf(B)!==-1){return this.getDragScrollThresholdY();}
;}
,_isScrollbarVisible:function(C,D){if(C&&C._isChildControlVisible){return C._isChildControlVisible(j+D);}
else {return false;}
;}
,_isScrollbarExceedingMaxPos:function(F,H,E){var G=0;if(!F){return true;}
;G=F.getPosition()+E;return (G>F.getMaximum()||G<0);}
,_calculateThresholdExceedance:function(J,I){var K=I-Math.abs(J);return J<0?(K*-1):K;}
,_calculateScrollAmount:function(L,M){return Math.floor(((L/100)*M)*this.getDragScrollSlowDownFactor());}
,_scrollBy:function(N,T,Q){var S=N.getChildControl(j+T,true);if(!S){return;}
;var P=S.getBounds(),O=T===a?P.width:P.height,R=this._calculateScrollAmount(O,Q);if(this._isScrollbarExceedingMaxPos(S,T,R)){this.__rK.stop();}
;S.scrollBy(R);}
,__rL:function(e){if(this.__rK){this.__rK.stop();}
;var W;if(e.getOriginalTarget() instanceof qx.ui.core.Widget){W=e.getOriginalTarget();}
else {W=qx.ui.core.Widget.getWidgetByElement(e.getOriginalTarget());}
;if(!W){return;}
;var U;if(this._isScrollable(W)){U=W;}
else {U=this._findScrollableParent(W);}
;while(U){var Y=this._getBounds(U),V=e.getDocumentLeft(),ba=e.getDocumentTop(),bc={"left":Y.left-V,"right":Y.right-V,"top":Y.top-ba,"bottom":Y.bottom-ba},X=null,bd=d,bb=0;X=this._getEdgeType(bc,this.getDragScrollThresholdX(),this.getDragScrollThresholdY());if(!X){U=this._findScrollableParent(U);continue;}
;bd=this._getAxis(X);if(this._isScrollbarVisible(U,bd)){bb=this._calculateThresholdExceedance(bc[X],this._getThresholdByEdgeType(X));if(this.__rK){this.__rK.dispose();}
;this.__rK=new qx.event.Timer(50);this.__rK.addListener(h,function(be,bg,bf){this._scrollBy(be,bg,bf);}
.bind(this,U,bd,bb));this.__rK.start();e.stopPropagation();return;}
else {U=this._findScrollableParent(U);}
;}
;}
,__rM:function(e){if(this.__rK){this.__rK.stop();}
;}
},destruct:function(){if(this.__rK){this.__rK.dispose();}
;}
});}
)();
(function(){var a="qx.ui.core.DragDropScrolling";qx.Class.define(a,{extend:qx.core.Object,include:[qx.ui.core.MDragDropScrolling],construct:function(b){qx.core.Object.call(this);this._widget=b;}
,members:{_widget:null,_getWidget:function(){return this._widget||qx.core.Init.getApplication().getRoot();}
}});}
)();
(function(){var a="qx.nativeScrollBars",b="qx.ui.core.scroll.MScrollBarFactory";qx.core.Environment.add(a,false);qx.Mixin.define(b,{members:{_createScrollBar:function(c){if(qx.core.Environment.get(a)){return new qx.ui.core.scroll.NativeScrollBar(c);}
else {return new qx.ui.core.scroll.ScrollBar(c);}
;}
}});}
)();
(function(){var a='qx.event.type.Event',b="qx.ui.core.scroll.IScrollBar",c="qx.event.type.Data";qx.Interface.define(b,{events:{"scroll":c,"scrollAnimationEnd":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(e,d){this.assertNumber(e);}
,scrollBy:function(g,f){this.assertNumber(g);}
,scrollBySteps:function(i,h){this.assertNumber(i);}
}});}
)();
(function(){var a="qx.ui.core.scroll.NativeScrollBar",b="px",c="PositiveNumber",d="frame",f="end",g="box-sizing",h="Integer",i="track",j="browser.name",k="__rN",l="hidden",m="content-box",n="pointerup",o="vertical",p="_applyOrientation",q="scrollAnimationEnd",r="appear",s="pointerdown",t="PositiveInteger",u='qx.event.type.Event',v="mshtml",w="engine.name",x="horizontal",y="Number",z="edge",A="_applyPosition",B="scrollbar",C="_applyMaximum",D="pointermove",E="native",F="scroll";qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(G){qx.ui.core.Widget.call(this);this.addState(E);this.getContentElement().addListener(F,this._onScroll,this);this.addListener(s,this._stopPropagation,this);this.addListener(n,this._stopPropagation,this);this.addListener(D,this._stopPropagation,this);this.addListener(r,this._onAppear,this);this.getContentElement().add(this._getScrollPaneElement());this.getContentElement().setStyle(g,m);if(G!=null){this.setOrientation(G);}
else {this.initOrientation();}
;this.addListener(i,function(e){e.stopPropagation();}
,this);}
,events:{scrollAnimationEnd:u},properties:{appearance:{refine:true,init:B},orientation:{check:[x,o],init:x,apply:p},maximum:{check:t,apply:C,init:100},position:{check:y,init:0,apply:A,event:F},singleStep:{check:h,init:20},knobFactor:{check:c,nullable:true}},members:{__pR:null,__rN:null,__kV:null,__rO:null,_getScrollPaneElement:function(){if(!this.__rN){this.__rN=new qx.html.Element();}
;return this.__rN;}
,renderLayout:function(I,top,H,K){var J=qx.ui.core.Widget.prototype.renderLayout.call(this,I,top,H,K);this._updateScrollBar();return J;}
,_getContentHint:function(){var L=qx.bom.element.Scroll.getScrollbarWidth();return {width:this.__pR?100:L,maxWidth:this.__pR?null:L,minWidth:this.__pR?null:L,height:this.__pR?L:100,maxHeight:this.__pR?L:null,minHeight:this.__pR?L:null};}
,_applyEnabled:function(N,M){qx.ui.core.Widget.prototype._applyEnabled.call(this,N,M);this._updateScrollBar();}
,_applyMaximum:function(O){this._updateScrollBar();}
,_applyPosition:function(P){var content=this.getContentElement();if(this.__pR){content.scrollToX(P);}
else {content.scrollToY(P);}
;}
,_applyOrientation:function(S,Q){var R=this.__pR=S===x;this.set({allowGrowX:R,allowShrinkX:R,allowGrowY:!R,allowShrinkY:!R});if(R){this.replaceState(o,x);}
else {this.replaceState(x,o);}
;this.getContentElement().setStyles({overflowX:R?F:l,overflowY:R?l:F});qx.ui.core.queue.Layout.add(this);}
,_updateScrollBar:function(){var U=this.__pR;var V=this.getBounds();if(!V){return;}
;if(this.isEnabled()){var W=U?V.width:V.height;var T=this.getMaximum()+W;}
else {T=0;}
;if(qx.core.Environment.get(w)==v||qx.core.Environment.get(j)==z){var V=this.getBounds();this.getContentElement().setStyles({left:(U?V.left:(V.left-1))+b,top:(U?(V.top-1):V.top)+b,width:(U?V.width:V.width+1)+b,height:(U?V.height+1:V.height)+b});}
;this._getScrollPaneElement().setStyles({left:0,top:0,width:(U?T:1)+b,height:(U?1:T)+b});this.updatePosition(this.getPosition());}
,scrollTo:function(Y,X){this.stopScrollAnimation();if(X){var ba=this.getPosition();this.__rO=new qx.bom.AnimationFrame();this.__rO.on(d,function(bc){var bb=parseInt(bc/X*(Y-ba)+ba);this.updatePosition(bb);}
,this);this.__rO.on(f,function(){this.setPosition(Math.max(0,Math.min(this.getMaximum(),Y)));this.__rO=null;this.fireEvent(q);}
,this);this.__rO.startSequence(X);}
else {this.updatePosition(Y);}
;}
,updatePosition:function(bd){this.setPosition(Math.max(0,Math.min(this.getMaximum(),bd)));}
,scrollBy:function(bf,be){this.scrollTo(this.getPosition()+bf,be);}
,scrollBySteps:function(bh,bg){var bi=this.getSingleStep();this.scrollBy(bh*bi,bg);}
,stopScrollAnimation:function(){if(this.__rO){this.__rO.cancelSequence();this.__rO=null;}
;}
,_onScroll:function(e){var bj=this.getContentElement();var bk=this.__pR?bj.getScrollX():bj.getScrollY();this.setPosition(bk);}
,_onAppear:function(e){this._applyPosition(this.getPosition());}
,_stopPropagation:function(e){e.stopPropagation();}
},destruct:function(){this._disposeObjects(k);}
});}
)();
(function(){var a="slider",b="slideAnimationEnd",c="PositiveNumber",d="changeValue",f="Integer",g="execute",h="track",i="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",j="_applyKnobFactor",k="visible",l="qx.event.type.Event",m="knob",n="button-begin",o="hidden",p="qx.ui.core.scroll.ScrollBar",q="resize",r="vertical",s="_applyOrientation",t="scrollAnimationEnd",u="_applyPageStep",v="right",w="PositiveInteger",x="horizontal",y="up",z="_applyPosition",A="scrollbar",B="_applyMaximum",C="left",D="button-end",E="down",F="scroll";qx.Class.define(p,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(G){qx.ui.core.Widget.call(this);this._createChildControl(n);this._createChildControl(a).addListener(q,this._onResizeSlider,this);this._createChildControl(D);if(G!=null){this.setOrientation(G);}
else {this.initOrientation();}
;this.addListener(h,function(e){e.stopPropagation();}
,this);}
,events:{"scrollAnimationEnd":l},properties:{appearance:{refine:true,init:A},orientation:{check:[x,r],init:x,apply:s},maximum:{check:w,apply:B,init:100},position:{check:i,init:0,apply:z,event:F},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:u},knobFactor:{check:c,apply:j,nullable:true}},members:{__rP:2,__rQ:0,_computeSizeHint:function(){var H=qx.ui.core.Widget.prototype._computeSizeHint.call(this);if(this.getOrientation()===x){this.__rQ=H.minWidth;H.minWidth=0;}
else {this.__rQ=H.minHeight;H.minHeight=0;}
;return H;}
,renderLayout:function(M,top,J,I){var L=qx.ui.core.Widget.prototype.renderLayout.call(this,M,top,J,I);var K=this.getOrientation()===x;if(this.__rQ>=(K?J:I)){this.getChildControl(n).setVisibility(o);this.getChildControl(D).setVisibility(o);}
else {this.getChildControl(n).setVisibility(k);this.getChildControl(D).setVisibility(k);}
;return L;}
,_createChildControlImpl:function(P,O){var N;switch(P){case a:N=new qx.ui.core.scroll.ScrollSlider();N.setPageStep(100);N.setFocusable(false);N.addListener(d,this._onChangeSliderValue,this);N.addListener(b,this._onSlideAnimationEnd,this);this._add(N,{flex:1});break;case n:N=new qx.ui.form.RepeatButton();N.setFocusable(false);N.addListener(g,this._onExecuteBegin,this);this._add(N);break;case D:N=new qx.ui.form.RepeatButton();N.setFocusable(false);N.addListener(g,this._onExecuteEnd,this);this._add(N);break;};return N||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,P);}
,_applyMaximum:function(Q){this.getChildControl(a).setMaximum(Q);}
,_applyPosition:function(R){this.getChildControl(a).setValue(R);}
,_applyKnobFactor:function(S){this.getChildControl(a).setKnobFactor(S);}
,_applyPageStep:function(T){this.getChildControl(a).setPageStep(T);}
,_applyOrientation:function(W,U){var V=this._getLayout();if(V){V.dispose();}
;if(W===x){this._setLayout(new qx.ui.layout.HBox());this.setAllowStretchX(true);this.setAllowStretchY(false);this.replaceState(r,x);this.getChildControl(n).replaceState(y,C);this.getChildControl(D).replaceState(E,v);}
else {this._setLayout(new qx.ui.layout.VBox());this.setAllowStretchX(false);this.setAllowStretchY(true);this.replaceState(x,r);this.getChildControl(n).replaceState(C,y);this.getChildControl(D).replaceState(v,E);}
;this.getChildControl(a).setOrientation(W);}
,scrollTo:function(Y,X){this.getChildControl(a).slideTo(Y,X);}
,scrollBy:function(bb,ba){this.getChildControl(a).slideBy(bb,ba);}
,scrollBySteps:function(bd,bc){var be=this.getSingleStep();this.getChildControl(a).slideBy(bd*be,bc);}
,updatePosition:function(bf){this.getChildControl(a).updatePosition(bf);}
,stopScrollAnimation:function(){this.getChildControl(a).stopSlideAnimation();}
,_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep(),50);}
,_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep(),50);}
,_onSlideAnimationEnd:function(){this.fireEvent(t);}
,_onChangeSliderValue:function(e){this.setPosition(e.getData());}
,_onResizeSlider:function(e){var bg=this.getChildControl(a).getChildControl(m);var bj=bg.getSizeHint();var bh=false;var bi=this.getChildControl(a).getInnerSize();if(this.getOrientation()==r){if(bi.height<bj.minHeight+this.__rP){bh=true;}
;}
else {if(bi.width<bj.minWidth+this.__rP){bh=true;}
;}
;if(bh){bg.exclude();}
else {bg.show();}
;}
}});}
)();
(function(){var a="",b="qx.ui.form.MForm",c="Boolean",d="_applyValid",f="changeLocale",g="changeRequired",h="changeValid",i="qx.dynlocale",j="changeInvalidMessage",k="String",l="invalid";qx.Mixin.define(b,{construct:function(){if(qx.core.Environment.get(i)){qx.locale.Manager.getInstance().addListener(f,this.__pY,this);}
;}
,properties:{valid:{check:c,init:true,apply:d,event:h},required:{check:c,init:false,event:g},invalidMessage:{check:k,init:a,event:j},requiredInvalidMessage:{check:k,nullable:true,event:j}},members:{_applyValid:function(n,m){n?this.removeState(l):this.addState(l);}
,__pY:qx.core.Environment.select(i,{"true":function(e){var o=this.getInvalidMessage();if(o&&o.translate){this.setInvalidMessage(o.translate());}
;var p=this.getRequiredInvalidMessage();if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());}
;}
,"false":null})},destruct:function(){if(qx.core.Environment.get(i)){qx.locale.Manager.getInstance().removeListener(f,this.__pY,this);}
;}
});}
)();
(function(){var a="qx.ui.form.IRange";qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;}
,getMinimum:function(){}
,setMaximum:function(c){return arguments.length==1;}
,getMaximum:function(){}
,setSingleStep:function(d){return arguments.length==1;}
,getSingleStep:function(){}
,setPageStep:function(e){return arguments.length==1;}
,getPageStep:function(){}
}});}
)();
(function(){var a="qx.ui.form.INumberForm",b="qx.event.type.Data";qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;}
,resetValue:function(){}
,getValue:function(){}
}});}
)();
(function(){var a="slider",b="hovered",c="pressed",d="px",f="pointerover",g="PageUp",h="changeValue",i="frame",j="end",k='qx.event.type.Data',l="Left",m="Down",n="Integer",o="roll",p="qx.ui.form.Slider",q="PageDown",r="interval",s="_applyValue",t="Up",u="_applyKnobFactor",v="End",w="pointermove",x="height",y="y",z="dbltap",A="resize",B="pointerup",C="vertical",D="Right",E="width",F="_applyOrientation",G="left",H="Home",I="floor",J="_applyMinimum",K="pointerdown",L="top",M="changeMaximum",N="horizontal",O="slideAnimationEnd",P="knob",Q="ceil",R='qx.event.type.Event',S="x",T="keypress",U="losecapture",V="contextmenu",W="wheel",X="_applyMaximum",Y="Number",bf="tap",bg="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",bh="changeMinimum",be="pointerout";qx.Class.define(p,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bi){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.Canvas());this.addListener(T,this._onKeyPress);this.addListener(o,this._onRoll);this.addListener(K,this._onPointerDown);this.addListener(B,this._onPointerUp);this.addListener(U,this._onPointerUp);this.addListener(A,this._onUpdate);this.addListener(V,this._onStopEvent);this.addListener(bf,this._onStopEvent);this.addListener(z,this._onStopEvent);if(bi!=null){this.setOrientation(bi);}
else {this.initOrientation();}
;}
,events:{changeValue:k,slideAnimationEnd:R},properties:{appearance:{refine:true,init:a},focusable:{refine:true,init:true},orientation:{check:[N,C],init:N,apply:F},value:{check:bg,init:0,apply:s,nullable:true},minimum:{check:n,init:0,apply:J,event:bh},maximum:{check:n,init:100,apply:X,event:M},singleStep:{check:n,init:1},pageStep:{check:n,init:10},knobFactor:{check:Y,apply:u,nullable:true}},members:{__rR:null,__rS:null,__rT:null,__rU:null,__rV:null,__rW:null,__rX:null,__rY:null,__dE:null,__sa:null,__sb:null,__sc:null,__rO:null,_forwardStates:{invalid:true},renderLayout:function(bk,top,bj,bl){qx.ui.core.Widget.prototype.renderLayout.call(this,bk,top,bj,bl);this._updateKnobPosition();}
,_createChildControlImpl:function(bo,bn){var bm;switch(bo){case P:bm=new qx.ui.core.Widget();bm.addListener(A,this._onUpdate,this);bm.addListener(f,this._onPointerOver);bm.addListener(be,this._onPointerOut);this._add(bm);break;};return bm||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bo);}
,_onPointerOver:function(e){this.addState(b);}
,_onPointerOut:function(e){this.removeState(b);}
,_onRoll:function(e){if(e.getPointerType()!=W){return;}
;var bq=this.getOrientation()===N?S:y;var br=e.getDelta()[bq];var bp=br>0?1:br<0?-1:0;this.slideBy(bp*this.getSingleStep());e.stop();}
,_onKeyPress:function(e){var bt=this.getOrientation()===N;var bs=bt?l:t;var forward=bt?D:m;switch(e.getKeyIdentifier()){case forward:this.slideForward();break;case bs:this.slideBack();break;case q:this.slidePageForward(100);break;case g:this.slidePageBack(100);break;case H:this.slideToBegin(200);break;case v:this.slideToEnd(200);break;default:return;};e.stop();}
,_onPointerDown:function(e){if(this.__rU){return;}
;var bw=this.__pR;var bu=this.getChildControl(P);var bv=bw?G:L;var bA=bw?e.getDocumentLeft():e.getDocumentTop();var bC=this.getDecorator();bC=qx.theme.manager.Decoration.getInstance().resolve(bC);if(bw){var bz=bC?bC.getInsets().left:0;var by=(this.getPaddingLeft()||0)+bz;}
else {var bz=bC?bC.getInsets().top:0;var by=(this.getPaddingTop()||0)+bz;}
;var bB=this.__rR=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bv];bB+=by;var bx=this.__rS=qx.bom.element.Location.get(bu.getContentElement().getDomElement())[bv];if(e.getTarget()===bu){this.__rU=true;if(!this.__sa){this.__sa=new qx.event.Timer(100);this.__sa.addListener(r,this._fireValue,this);}
;this.__sa.start();this.__rV=bA+bB-bx;bu.addState(c);}
else {this.__rW=true;this.__rX=bA<=bx?-1:1;this.__se(e);this._onInterval();if(!this.__dE){this.__dE=new qx.event.Timer(100);this.__dE.addListener(r,this._onInterval,this);}
;this.__dE.start();}
;this.addListener(w,this._onPointerMove);this.capture();e.stopPropagation();}
,_onPointerUp:function(e){if(this.__rU){this.releaseCapture();delete this.__rU;this.__sa.stop();this._fireValue();delete this.__rV;this.getChildControl(P).removeState(c);if(e.getType()===B){var bE;var bF;var bD;if(this.__pR){bE=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__rR);bD=qx.bom.element.Location.get(this.getContentElement().getDomElement())[L];bF=e.getDocumentTop()-(bD+this.getChildControl(P).getBounds().top);}
else {bE=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__rR);bD=qx.bom.element.Location.get(this.getContentElement().getDomElement())[G];bF=e.getDocumentLeft()-(bD+this.getChildControl(P).getBounds().left);}
;if(bF<0||bF>this.__rT||bE<0||bE>this.__rT){this.getChildControl(P).removeState(b);}
;}
;}
else if(this.__rW){this.__dE.stop();this.releaseCapture();delete this.__rW;delete this.__rX;delete this.__rY;}
;this.removeListener(w,this._onPointerMove);if(e.getType()===B){e.stopPropagation();}
;}
,_onPointerMove:function(e){if(this.__rU){var bH=this.__pR?e.getDocumentLeft():e.getDocumentTop();var bG=bH-this.__rV;this.slideTo(this._positionToValue(bG));}
else if(this.__rW){this.__se(e);}
;e.stopPropagation();}
,_onInterval:function(e){var bI=this.getValue()+(this.__rX*this.getPageStep());if(bI<this.getMinimum()){bI=this.getMinimum();}
else if(bI>this.getMaximum()){bI=this.getMaximum();}
;var bJ=this.__rX==-1;if((bJ&&bI<=this.__rY)||(!bJ&&bI>=this.__rY)){bI=this.__rY;}
;this.slideTo(bI);}
,_onUpdate:function(e){var bL=this.getInnerSize();var bM=this.getChildControl(P).getBounds();var bK=this.__pR?E:x;this._updateKnobSize();this.__sd=bL[bK]-bM[bK];this.__rT=bM[bK];this._updateKnobPosition();}
,__pR:false,__sd:0,__se:function(e){var bN=this.__pR;var bU=bN?e.getDocumentLeft():e.getDocumentTop();var bX=this.__rR;var bO=this.__rS;var bY=this.__rT;var bV=bU-bX;if(bU>=bO){bV-=bY;}
;var bR=this._positionToValue(bV);var bP=this.getMinimum();var bQ=this.getMaximum();if(bR<bP){bR=bP;}
else if(bR>bQ){bR=bQ;}
else {var bW=this.getValue();var bT=this.getPageStep();var bS=this.__rX<0?I:Q;bR=bW+(Math[bS]((bR-bW)/bT)*bT);}
;if(this.__rY==null||(this.__rX==-1&&bR<=this.__rY)||(this.__rX==1&&bR>=this.__rY)){this.__rY=bR;}
;}
,_positionToValue:function(cb){var ca=this.__sd;if(ca==null||ca==0){return 0;}
;var cd=cb/ca;if(cd<0){cd=0;}
else if(cd>1){cd=1;}
;var cc=this.getMaximum()-this.getMinimum();return this.getMinimum()+Math.round(cc*cd);}
,_valueToPosition:function(ch){var ce=this.__sd;if(ce==null){return 0;}
;var cf=this.getMaximum()-this.getMinimum();if(cf==0){return 0;}
;var ch=ch-this.getMinimum();var cg=ch/cf;if(cg<0){cg=0;}
else if(cg>1){cg=1;}
;return Math.round(ce*cg);}
,_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));}
,_setKnobPosition:function(ck){var ci=this.getChildControl(P);var cj=this.getDecorator();cj=qx.theme.manager.Decoration.getInstance().resolve(cj);var content=ci.getContentElement();if(this.__pR){if(cj&&cj.getPadding()){ck+=cj.getPadding().left;}
;ck+=this.getPaddingLeft()||0;content.setStyle(G,ck+d,true);}
else {if(cj&&cj.getPadding()){ck+=cj.getPadding().top;}
;ck+=this.getPaddingTop()||0;content.setStyle(L,ck+d,true);}
;}
,_updateKnobSize:function(){var cm=this.getKnobFactor();if(cm==null){return;}
;var cl=this.getInnerSize();if(cl==null){return;}
;if(this.__pR){this.getChildControl(P).setWidth(Math.round(cm*cl.width));}
else {this.getChildControl(P).setHeight(Math.round(cm*cl.height));}
;}
,slideToBegin:function(cn){this.slideTo(this.getMinimum(),cn);}
,slideToEnd:function(co){this.slideTo(this.getMaximum(),co);}
,slideForward:function(){this.slideBy(this.getSingleStep());}
,slideBack:function(){this.slideBy(-this.getSingleStep());}
,slidePageForward:function(cp){this.slideBy(this.getPageStep(),cp);}
,slidePageBack:function(cq){this.slideBy(-this.getPageStep(),cq);}
,slideBy:function(cs,cr){this.slideTo(this.getValue()+cs,cr);}
,slideTo:function(cu,ct){this.stopSlideAnimation();if(ct){this.__sg(cu,ct);}
else {this.updatePosition(cu);}
;}
,updatePosition:function(cv){this.setValue(this.__sf(cv));}
,stopSlideAnimation:function(){if(this.__rO){this.__rO.cancelSequence();this.__rO=null;}
;}
,__sf:function(cw){if(cw<this.getMinimum()){cw=this.getMinimum();}
else if(cw>this.getMaximum()){cw=this.getMaximum();}
else {cw=this.getMinimum()+Math.round((cw-this.getMinimum())/this.getSingleStep())*this.getSingleStep();}
;return cw;}
,__sg:function(cy,cx){cy=this.__sf(cy);var cz=this.getValue();this.__rO=new qx.bom.AnimationFrame();this.__rO.on(i,function(cA){this.setValue(parseInt(cA/cx*(cy-cz)+cz));}
,this);this.__rO.on(j,function(){this.setValue(cy);this.__rO=null;this.fireEvent(O);}
,this);this.__rO.startSequence(cx);}
,_applyOrientation:function(cD,cC){var cB=this.getChildControl(P);this.__pR=cD===N;if(this.__pR){this.removeState(C);cB.removeState(C);this.addState(N);cB.addState(N);cB.setLayoutProperties({top:0,right:null,bottom:0});}
else {this.removeState(N);cB.removeState(N);this.addState(C);cB.addState(C);cB.setLayoutProperties({right:0,bottom:null,left:0});}
;this._updateKnobPosition();}
,_applyKnobFactor:function(cF,cE){if(cF!=null){this._updateKnobSize();}
else {if(this.__pR){this.getChildControl(P).resetWidth();}
else {this.getChildControl(P).resetHeight();}
;}
;}
,_applyValue:function(cH,cG){if(cH!=null){this._updateKnobPosition();if(this.__rU){this.__sc=[cH,cG];}
else {this.fireEvent(h,qx.event.type.Data,[cH,cG]);}
;}
else {this.resetValue();}
;}
,_fireValue:function(){if(!this.__sc){return;}
;var cI=this.__sc;this.__sc=null;this.fireEvent(h,qx.event.type.Data,cI);}
,_applyMinimum:function(cK,cJ){if(this.getValue()<cK){this.setValue(cK);}
;this._updateKnobPosition();}
,_applyMaximum:function(cM,cL){if(this.getValue()>cM){this.setValue(cM);}
;this._updateKnobPosition();}
}});}
)();
(function(){var a="dblclick",b="qx.ui.core.scroll.ScrollSlider",c="horizontal",d="keypress",f="roll",g="knob";qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(h){qx.ui.form.Slider.call(this,h);this.removeListener(d,this._onKeyPress);this.removeListener(f,this._onRoll);}
,members:{_createChildControlImpl:function(k,j){var i;switch(k){case g:i=qx.ui.form.Slider.prototype._createChildControlImpl.call(this,k);i.addListener(a,function(e){e.stopPropagation();}
);};return i||qx.ui.form.Slider.prototype._createChildControlImpl.call(this,k);}
,getSizeHint:function(l){var m=qx.ui.form.Slider.prototype.getSizeHint.call(this);if(this.getOrientation()===c){m.width=0;}
else {m.height=0;}
;return m;}
}});}
)();
(function(){var a="toolTipText",b="icon",c="label",d="qx.ui.core.MExecutable",f="enabled",g="value",h="qx.event.type.Event",j="execute",k="_applyCommand",l="qx.ui.command.Command",m="menu",n="changeCommand";qx.Mixin.define(d,{events:{"execute":h},properties:{command:{check:l,apply:k,event:n,nullable:true}},members:{__oo:null,__op:false,__oq:null,_bindableProperties:[f,c,b,a,g,m],execute:function(){var o=this.getCommand();if(o){if(this.__op){this.__op=false;}
else {this.__op=true;o.execute(this);}
;}
;this.fireEvent(j);}
,__or:function(e){if(this.__op){this.__op=false;return;}
;if(this.isEnabled()){this.__op=true;this.execute();}
;}
,_applyCommand:function(r,p){if(p!=null){p.removeListenerById(this.__oq);}
;if(r!=null){this.__oq=r.addListener(j,this.__or,this);}
;var q=this.__oo;if(q==null){this.__oo=q={};}
;var u;for(var i=0;i<this._bindableProperties.length;i++ ){var t=this._bindableProperties[i];if(p!=null&&!p.isDisposed()&&q[t]!=null){p.removeBinding(q[t]);q[t]=null;}
;if(r!=null&&qx.Class.hasProperty(this.constructor,t)){var s=r.get(t);if(s==null){u=this.get(t);if(u==null){this.syncAppearance();u=qx.util.PropertyUtil.getThemeValue(this,t);}
;}
else {u=null;}
;q[t]=r.bind(t,this,t);if(u){this.set(t,u);}
;}
;}
;}
},destruct:function(){this._applyCommand(null,this.getCommand());this.__oo=null;}
});}
)();
(function(){var a="qx.ui.form.IExecutable",b="qx.event.type.Data";qx.Interface.define(a,{events:{"execute":b},members:{setCommand:function(c){return arguments.length==1;}
,getCommand:function(){}
,execute:function(){}
}});}
)();
(function(){var a="dblclick",b="qx.ui.form.Button",c="pointerup",d="Enter",f="pressed",g="pointerover",h="hovered",i="pointerdown",j="Space",k="keydown",l="abandoned",m="tap",n="button",o="keyup",p="pointerout";qx.Class.define(b,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(q,s,r){qx.ui.basic.Atom.call(this,q,s);if(r!=null){this.setCommand(r);}
;this.addListener(g,this._onPointerOver);this.addListener(p,this._onPointerOut);this.addListener(i,this._onPointerDown);this.addListener(c,this._onPointerUp);this.addListener(m,this._onTap);this.addListener(k,this._onKeyDown);this.addListener(o,this._onKeyUp);this.addListener(a,function(e){e.stopPropagation();}
);}
,properties:{appearance:{refine:true,init:n},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(l)){return;}
;this.addState(f);}
,release:function(){if(this.hasState(f)){this.removeState(f);}
;}
,reset:function(){this.removeState(f);this.removeState(l);this.removeState(h);}
,_onPointerOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;if(this.hasState(l)){this.removeState(l);this.addState(f);}
;this.addState(h);}
,_onPointerOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;this.removeState(h);if(this.hasState(f)){this.removeState(f);this.addState(l);}
;}
,_onPointerDown:function(e){if(!e.isLeftPressed()){return;}
;e.stopPropagation();this.capture();this.removeState(l);this.addState(f);}
,_onPointerUp:function(e){this.releaseCapture();var t=this.hasState(f);var u=this.hasState(l);if(t){this.removeState(f);}
;if(u){this.removeState(l);}
;e.stopPropagation();}
,_onTap:function(e){this.execute();e.stopPropagation();}
,_onKeyDown:function(e){switch(e.getKeyIdentifier()){case d:case j:this.removeState(l);this.addState(f);e.stopPropagation();};}
,_onKeyUp:function(e){switch(e.getKeyIdentifier()){case d:case j:if(this.hasState(f)){this.removeState(l);this.removeState(f);this.execute();e.stopPropagation();}
;};}
}});}
)();
(function(){var a="press",b="hovered",c="qx.ui.form.RepeatButton",d="release",f="Enter",g="pressed",h="interval",i="__dE",j="qx.event.type.Event",k="Space",l="abandoned",m="Integer",n="execute";qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);this.__dE=new qx.event.AcceleratingTimer();this.__dE.addListener(h,this._onInterval,this);}
,events:{"execute":j,"press":j,"release":j},properties:{interval:{check:m,init:100},firstInterval:{check:m,init:500},minTimer:{check:m,init:20},timerDecrease:{check:m,init:2}},members:{__oG:null,__dE:null,press:function(){if(this.isEnabled()){if(!this.hasState(g)){this.__oH();}
;this.removeState(l);this.addState(g);}
;}
,release:function(q){if(!this.isEnabled()){return;}
;if(this.hasState(g)){if(!this.__oG){this.execute();}
;}
;this.removeState(g);this.removeState(l);this.__oI();}
,_applyEnabled:function(s,r){qx.ui.form.Button.prototype._applyEnabled.call(this,s,r);if(!s){if(this.isCapturing()){this.releaseCapture();}
;this.removeState(g);this.removeState(l);this.__oI();}
;}
,_onPointerOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;if(this.hasState(l)){this.removeState(l);this.addState(g);this.__dE.start();}
;this.addState(b);}
,_onPointerOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;}
;this.removeState(b);if(this.hasState(g)){this.removeState(g);this.addState(l);this.__dE.stop();}
;}
,_onPointerDown:function(e){if(!e.isLeftPressed()){return;}
;this.capture();this.__oH();e.stopPropagation();}
,_onPointerUp:function(e){this.releaseCapture();if(!this.hasState(l)){this.addState(b);if(this.hasState(g)&&!this.__oG){this.execute();}
;}
;this.__oI();e.stopPropagation();}
,_onTap:function(e){}
,_onKeyUp:function(e){switch(e.getKeyIdentifier()){case f:case k:if(this.hasState(g)){if(!this.__oG){this.execute();}
;this.removeState(g);this.removeState(l);e.stopPropagation();this.__oI();}
;};}
,_onKeyDown:function(e){switch(e.getKeyIdentifier()){case f:case k:this.removeState(l);this.addState(g);e.stopPropagation();this.__oH();};}
,_onInterval:function(e){this.__oG=true;this.fireEvent(n);}
,__oH:function(){this.fireEvent(a);this.__oG=false;this.__dE.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();this.removeState(l);this.addState(g);}
,__oI:function(){this.fireEvent(d);this.__dE.stop();this.removeState(l);this.removeState(g);}
},destruct:function(){this._disposeObjects(i);}
});}
)();
(function(){var a="Integer",b="interval",c="qx.event.type.Event",d="qx.event.AcceleratingTimer",e="__dE";qx.Class.define(d,{extend:qx.core.Object,implement:[qx.core.IDisposable],construct:function(){qx.core.Object.call(this);this.__dE=new qx.event.Timer(this.getInterval());this.__dE.addListener(b,this._onInterval,this);}
,events:{"interval":c},properties:{interval:{check:a,init:100},firstInterval:{check:a,init:500},minimum:{check:a,init:20},decrease:{check:a,init:2}},members:{__dE:null,__oJ:null,start:function(){this.__dE.setInterval(this.getFirstInterval());this.__dE.start();}
,stop:function(){this.__dE.stop();this.__oJ=null;}
,_onInterval:function(){this.__dE.stop();if(this.__oJ==null){this.__oJ=this.getInterval();}
;this.__oJ=Math.max(this.getMinimum(),this.__oJ-this.getDecrease());this.__dE.setInterval(this.__oJ);this.__dE.start();this.fireEvent(b);}
},destruct:function(){this._disposeObjects(e);}
});}
)();
(function(){var a="Decorator",b="_applyLayoutChange",c="center",d="_applyReversed",e="qx.debug",f="bottom",g="' is not supported by the VBox layout!",h="qx.ui.layout.VBox",j="flex",k="top",m="left",n="height",o="middle",p="Integer",q="The property '",r="right",s="Boolean";qx.Class.define(h,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);if(t){this.setSpacing(t);}
;if(u){this.setAlignY(u);}
;if(v){this.setSeparator(v);}
;}
,properties:{alignY:{check:[k,o,f],init:k,apply:b},alignX:{check:[m,c,r],init:m,apply:b},spacing:{check:p,init:0,apply:b},separator:{check:a,nullable:true,apply:b},reversed:{check:s,init:false,apply:d}},members:{__oi:null,__mk:null,__ml:null,__hp:null,_applyReversed:function(){this._invalidChildrenCache=true;this._applyLayoutChange();}
,__mm:function(){var B=this._getLayoutChildren();var length=B.length;var x=false;var w=this.__oi&&this.__oi.length!=length&&this.__mk&&this.__oi;var z;var y=w?this.__oi:new Array(length);var A=w?this.__mk:new Array(length);if(this.getReversed()){B=B.concat().reverse();}
;for(var i=0;i<length;i++ ){z=B[i].getLayoutProperties();if(z.height!=null){y[i]=parseFloat(z.height)/100;}
;if(z.flex!=null){A[i]=z.flex;x=true;}
else {A[i]=0;}
;}
;if(!w){this.__oi=y;this.__mk=A;}
;this.__ml=x;this.__hp=B;delete this._invalidChildrenCache;}
,verifyLayoutProperty:qx.core.Environment.select(e,{"true":function(C,name,D){this.assert(name===j||name===n,q+name+g);if(name==n){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);}
else {this.assertNumber(D);this.assert(D>=0);}
;}
,"false":null}),renderLayout:function(V,N,Y){if(this._invalidChildrenCache){this.__mm();}
;var K=this.__hp;var length=K.length;var U=qx.ui.layout.Util;var T=this.getSpacing();var bb=this.getSeparator();if(bb){var H=U.computeVerticalSeparatorGaps(K,T,bb);}
else {var H=U.computeVerticalGaps(K,T,true);}
;var i,ba,G,O;var P=[];var W=H;for(i=0;i<length;i+=1){O=this.__oi[i];G=O!=null?Math.floor((N-H)*O):K[i].getSizeHint().height;P.push(G);W+=G;}
;if(this.__ml&&W!=N){var M={};var S,F;for(i=0;i<length;i+=1){S=this.__mk[i];if(S>0){L=K[i].getSizeHint();M[i]={min:L.minHeight,value:P[i],max:L.maxHeight,flex:S};}
;}
;var I=U.computeFlexOffsets(M,N,W);for(i in I){F=I[i].offset;P[i]+=F;W+=F;}
;}
;var top=K[0].getMarginTop();if(W<N&&this.getAlignY()!=k){top=N-W;if(this.getAlignY()===o){top=Math.round(top/2);}
;}
;var L,bd,Q,G,E,R,J;this._clearSeparators();if(bb){var bc=qx.theme.manager.Decoration.getInstance().resolve(bb).getInsets();var X=bc.top+bc.bottom;}
;for(i=0;i<length;i+=1){ba=K[i];G=P[i];L=ba.getSizeHint();R=ba.getMarginLeft();J=ba.getMarginRight();Q=Math.max(L.minWidth,Math.min(V-R-J,L.maxWidth));bd=U.computeHorizontalAlignOffset(ba.getAlignX()||this.getAlignX(),Q,V,R,J);if(i>0){if(bb){top+=E+T;this._renderSeparator(bb,{top:top+Y.top,left:Y.left,height:X,width:V});top+=X+T+ba.getMarginTop();}
else {top+=U.collapseMargins(T,E,ba.getMarginTop());}
;}
;ba.renderLayout(bd+Y.left,top+Y.top,Q,G);top+=G;E=ba.getMarginBottom();}
;}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__mm();}
;var be=qx.ui.layout.Util;var bs=this.__hp;var bh=0,bi=0,bq=0;var bj=0,bk=0;var bo,bf,br;for(var i=0,l=bs.length;i<l;i+=1){bo=bs[i];bf=bo.getSizeHint();bi+=bf.height;var bn=this.__mk[i];var bg=this.__oi[i];if(bn){bh+=bf.minHeight;}
else if(bg){bq=Math.max(bq,Math.round(bf.minHeight/bg));}
else {bh+=bf.height;}
;br=bo.getMarginLeft()+bo.getMarginRight();if((bf.width+br)>bk){bk=bf.width+br;}
;if((bf.minWidth+br)>bj){bj=bf.minWidth+br;}
;}
;bh+=bq;var bm=this.getSpacing();var bp=this.getSeparator();if(bp){var bl=be.computeVerticalSeparatorGaps(bs,bm,bp);}
else {var bl=be.computeVerticalGaps(bs,bm,true);}
;return {minHeight:bh+bl,height:bi+bl,minWidth:bj,width:bk};}
},destruct:function(){this.__oi=this.__mk=this.__hp=null;}
});}
)();
(function(){var a="scrollY",b="_computeScrollbars",c="X",d="scrollbar-y",f="scrollAnimation",g="scrollbarX",h="auto",i="End",j="corner",k="os.scrollBarOverlayed",l="scrollarea",m="changeVisibility",n="vertical",o="scrollX",p="scrollAnimationEnd",q="off",r="horizontal",s="scrollbar-x",t="Y",u='qx.event.type.Event',v="qx.ui.core.scroll.AbstractScrollArea",w="abstract",x="update",y="scrollbarY",z="pane",A="on",B="scroll";qx.Class.define(v,{extend:qx.ui.core.Widget,include:[qx.ui.core.scroll.MScrollBarFactory,qx.ui.core.scroll.MRoll,qx.ui.core.MDragDropScrolling],type:w,statics:{DEFAULT_SCROLLBAR_WIDTH:14},construct:function(){qx.ui.core.Widget.call(this);if(qx.core.Environment.get(k)){this._setLayout(new qx.ui.layout.Canvas());}
else {var C=new qx.ui.layout.Grid();C.setColumnFlex(0,1);C.setRowFlex(0,1);this._setLayout(C);}
;this._addRollHandling();}
,events:{scrollAnimationXEnd:u,scrollAnimationYEnd:u},properties:{appearance:{refine:true,init:l},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,A,q],init:h,themeable:true,apply:b},scrollbarY:{check:[h,A,q],init:h,themeable:true,apply:b},scrollbar:{group:[g,y]}},members:{_createChildControlImpl:function(F,E){var D;switch(F){case z:D=new qx.ui.core.scroll.ScrollPane();D.addListener(x,this._computeScrollbars,this);D.addListener(o,this._onScrollPaneX,this);D.addListener(a,this._onScrollPaneY,this);if(qx.core.Environment.get(k)){this._add(D,{edge:0});}
else {this._add(D,{row:0,column:0});}
;break;case s:D=this._createScrollBar(r);D.setMinWidth(0);D.exclude();D.addListener(B,this._onScrollBarX,this);D.addListener(m,this._onChangeScrollbarXVisibility,this);D.addListener(p,this._onScrollAnimationEnd.bind(this,c));if(qx.core.Environment.get(k)){D.setMinHeight(qx.ui.core.scroll.AbstractScrollArea.DEFAULT_SCROLLBAR_WIDTH);this._add(D,{bottom:0,right:0,left:0});}
else {this._add(D,{row:1,column:0});}
;break;case d:D=this._createScrollBar(n);D.setMinHeight(0);D.exclude();D.addListener(B,this._onScrollBarY,this);D.addListener(m,this._onChangeScrollbarYVisibility,this);D.addListener(p,this._onScrollAnimationEnd.bind(this,t));if(qx.core.Environment.get(k)){D.setMinWidth(qx.ui.core.scroll.AbstractScrollArea.DEFAULT_SCROLLBAR_WIDTH);this._add(D,{right:0,bottom:0,top:0});}
else {this._add(D,{row:0,column:1});}
;break;case j:D=new qx.ui.core.Widget();D.setWidth(0);D.setHeight(0);D.exclude();if(!qx.core.Environment.get(k)){this._add(D,{row:1,column:1});}
;break;};return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);}
,getPaneSize:function(){return this.getChildControl(z).getInnerSize();}
,getItemTop:function(G){return this.getChildControl(z).getItemTop(G);}
,getItemBottom:function(H){return this.getChildControl(z).getItemBottom(H);}
,getItemLeft:function(I){return this.getChildControl(z).getItemLeft(I);}
,getItemRight:function(J){return this.getChildControl(z).getItemRight(J);}
,scrollToX:function(L,K){qx.ui.core.queue.Manager.flush();this.getChildControl(s).scrollTo(L,K);}
,scrollByX:function(N,M){qx.ui.core.queue.Manager.flush();this.getChildControl(s).scrollBy(N,M);}
,getScrollX:function(){var O=this.getChildControl(s,true);return O?O.getPosition():0;}
,scrollToY:function(Q,P){qx.ui.core.queue.Manager.flush();this.getChildControl(d).scrollTo(Q,P);}
,scrollByY:function(S,R){qx.ui.core.queue.Manager.flush();this.getChildControl(d).scrollBy(S,R);}
,getScrollY:function(){var T=this.getChildControl(d,true);return T?T.getPosition():0;}
,stopScrollAnimationX:function(){var U=this.getChildControl(s,true);if(U){U.stopScrollAnimation();}
;}
,stopScrollAnimationY:function(){var V=this.getChildControl(d,true);if(V){V.stopScrollAnimation();}
;}
,_onScrollAnimationEnd:function(W){this.fireEvent(f+W+i);}
,_onScrollBarX:function(e){this.getChildControl(z).scrollToX(e.getData());}
,_onScrollBarY:function(e){this.getChildControl(z).scrollToY(e.getData());}
,_onScrollPaneX:function(e){var X=this.getChildControl(s);if(X){X.updatePosition(e.getData());}
;}
,_onScrollPaneY:function(e){var Y=this.getChildControl(d);if(Y){Y.updatePosition(e.getData());}
;}
,_onChangeScrollbarXVisibility:function(e){var ba=this._isChildControlVisible(s);var bb=this._isChildControlVisible(d);if(!ba){this.scrollToX(0);}
;ba&&bb?this._showChildControl(j):this._excludeChildControl(j);}
,_onChangeScrollbarYVisibility:function(e){var bc=this._isChildControlVisible(s);var bd=this._isChildControlVisible(d);if(!bd){this.scrollToY(0);}
;bc&&bd?this._showChildControl(j):this._excludeChildControl(j);}
,_computeScrollbars:function(){var bk=this.getChildControl(z);var content=bk.getChildren()[0];if(!content){this._excludeChildControl(s);this._excludeChildControl(d);return;}
;var be=this.getInnerSize();var bj=bk.getInnerSize();var bh=bk.getScrollSize();if(!bj||!bh){return;}
;var bl=this.getScrollbarX();var bm=this.getScrollbarY();if(bl===h&&bm===h){var bi=bh.width>be.width;var bn=bh.height>be.height;if((bi||bn)&&!(bi&&bn)){if(bi){bn=bh.height>bj.height;}
else if(bn){bi=bh.width>bj.width;}
;}
;}
else {var bi=bl===A;var bn=bm===A;if(bh.width>(bi?bj.width:be.width)&&bl===h){bi=true;}
;if(bh.height>(bi?bj.height:be.height)&&bm===h){bn=true;}
;}
;if(bi){var bg=this.getChildControl(s);bg.show();bg.setMaximum(Math.max(0,bh.width-bj.width));bg.setKnobFactor((bh.width===0)?0:bj.width/bh.width);}
else {this._excludeChildControl(s);}
;if(bn){var bf=this.getChildControl(d);bf.show();bf.setMaximum(Math.max(0,bh.height-bj.height));bf.setKnobFactor((bh.height===0)?0:bj.height/bh.height);}
else {this._excludeChildControl(d);}
;}
}});}
)();
(function(){var a="' must be defined!",b="height",c="vAlign",d="hAlign",e="' is not supported by the Grid layout!",f="bottom",g="Invalid parameter 'column'",h="Integer",m="The property '",n="'",o="_applyLayoutChange",p="qx.debug",q="Value must be positive",r="center",s="qx.ui.layout.Grid",t="middle",u="maxHeight",v="Cannot add widget '",w="width",z=") for '",A="'!. ",B="top",C="minHeight",D="right",E="' in this cell (",F=", ",G="The layout properties 'row' and 'column' of the child widget '",H="minWidth",I="flex",J="left",K="maxWidth",L="Invalid parameter 'row'",M="There is already a widget '";qx.Class.define(s,{extend:qx.ui.layout.Abstract,construct:function(O,N){qx.ui.layout.Abstract.call(this);this.__pA=[];this.__pB=[];if(O){this.setSpacingX(O);}
;if(N){this.setSpacingY(N);}
;}
,properties:{spacingX:{check:h,init:0,apply:o},spacingY:{check:h,init:0,apply:o}},members:{__pC:null,__pA:null,__pB:null,__pD:null,__pE:null,__pF:null,__pG:null,__pH:null,__pI:null,verifyLayoutProperty:qx.core.Environment.select(p,{"true":function(P,name,Q){var R={"row":1,"column":1,"rowSpan":1,"colSpan":1};this.assert(R[name]==1,m+name+e);this.assertInteger(Q);this.assert(Q>=0,q);}
,"false":null}),__pJ:function(){var Y=[];var T=[];var W=[];var V=-1;var S=-1;var X=this._getLayoutChildren();for(var i=0,l=X.length;i<l;i++ ){var ba=X[i];var bb=ba.getLayoutProperties();var bc=bb.row;var U=bb.column;bb.colSpan=bb.colSpan||1;bb.rowSpan=bb.rowSpan||1;if(bc==null||U==null){throw new Error(G+ba+a);}
;if(Y[bc]&&Y[bc][U]){throw new Error(v+ba+A+M+Y[bc][U]+E+bc+F+U+z+this+n);}
;for(var x=U;x<U+bb.colSpan;x++ ){for(var y=bc;y<bc+bb.rowSpan;y++ ){if(Y[y]==undefined){Y[y]=[];}
;Y[y][x]=ba;S=Math.max(S,x);V=Math.max(V,y);}
;}
;if(bb.rowSpan>1){W.push(ba);}
;if(bb.colSpan>1){T.push(ba);}
;}
;for(var y=0;y<=V;y++ ){if(Y[y]==undefined){Y[y]=[];}
;}
;this.__pC=Y;this.__pD=T;this.__pE=W;this.__pF=V;this.__pG=S;this.__pH=null;this.__pI=null;delete this._invalidChildrenCache;}
,_setRowData:function(bg,be,bf){var bd=this.__pA[bg];if(!bd){this.__pA[bg]={};this.__pA[bg][be]=bf;}
else {bd[be]=bf;}
;}
,_setColumnData:function(bh,bj,bk){var bi=this.__pB[bh];if(!bi){this.__pB[bh]={};this.__pB[bh][bj]=bk;}
else {bi[bj]=bk;}
;}
,setSpacing:function(bl){this.setSpacingY(bl);this.setSpacingX(bl);return this;}
,setColumnAlign:function(bm,bn,bo){if(qx.core.Environment.get(p)){this.assertInteger(bm,g);this.assertInArray(bn,[J,r,D]);this.assertInArray(bo,[B,t,f]);}
;this._setColumnData(bm,d,bn);this._setColumnData(bm,c,bo);this._applyLayoutChange();return this;}
,getColumnAlign:function(bp){var bq=this.__pB[bp]||{};return {vAlign:bq.vAlign||B,hAlign:bq.hAlign||J};}
,setRowAlign:function(bs,br,bt){if(qx.core.Environment.get(p)){this.assertInteger(bs,L);this.assertInArray(br,[J,r,D]);this.assertInArray(bt,[B,t,f]);}
;this._setRowData(bs,d,br);this._setRowData(bs,c,bt);this._applyLayoutChange();return this;}
,getRowAlign:function(bv){var bu=this.__pA[bv]||{};return {vAlign:bu.vAlign||B,hAlign:bu.hAlign||J};}
,getCellWidget:function(bx,bw){if(this._invalidChildrenCache){this.__pJ();}
;var bx=this.__pC[bx]||{};return bx[bw]||null;}
,getRowCount:function(){if(this._invalidChildrenCache){this.__pJ();}
;return this.__pF+1;}
,getColumnCount:function(){if(this._invalidChildrenCache){this.__pJ();}
;return this.__pG+1;}
,getCellAlign:function(bF,bz){var bE=B;var bC=J;var bD=this.__pA[bF];var bA=this.__pB[bz];var by=this.__pC[bF][bz];if(by){var bB={vAlign:by.getAlignY(),hAlign:by.getAlignX()};}
else {bB={};}
;if(bB.vAlign){bE=bB.vAlign;}
else if(bD&&bD.vAlign){bE=bD.vAlign;}
else if(bA&&bA.vAlign){bE=bA.vAlign;}
;if(bB.hAlign){bC=bB.hAlign;}
else if(bA&&bA.hAlign){bC=bA.hAlign;}
else if(bD&&bD.hAlign){bC=bD.hAlign;}
;return {vAlign:bE,hAlign:bC};}
,setColumnFlex:function(bG,bH){this._setColumnData(bG,I,bH);this._applyLayoutChange();return this;}
,getColumnFlex:function(bI){var bJ=this.__pB[bI]||{};return bJ.flex!==undefined?bJ.flex:0;}
,setRowFlex:function(bL,bK){this._setRowData(bL,I,bK);this._applyLayoutChange();return this;}
,getRowFlex:function(bO){var bM=this.__pA[bO]||{};var bN=bM.flex!==undefined?bM.flex:0;return bN;}
,setColumnMaxWidth:function(bP,bQ){this._setColumnData(bP,K,bQ);this._applyLayoutChange();return this;}
,getColumnMaxWidth:function(bR){var bS=this.__pB[bR]||{};return bS.maxWidth!==undefined?bS.maxWidth:Infinity;}
,setColumnWidth:function(bT,bU){this._setColumnData(bT,w,bU);this._applyLayoutChange();return this;}
,getColumnWidth:function(bV){var bW=this.__pB[bV]||{};return bW.width!==undefined?bW.width:null;}
,setColumnMinWidth:function(bX,bY){this._setColumnData(bX,H,bY);this._applyLayoutChange();return this;}
,getColumnMinWidth:function(ca){var cb=this.__pB[ca]||{};return cb.minWidth||0;}
,setRowMaxHeight:function(cd,cc){this._setRowData(cd,u,cc);this._applyLayoutChange();return this;}
,getRowMaxHeight:function(cf){var ce=this.__pA[cf]||{};return ce.maxHeight||Infinity;}
,setRowHeight:function(cg,ch){this._setRowData(cg,b,ch);this._applyLayoutChange();return this;}
,getRowHeight:function(cj){var ci=this.__pA[cj]||{};return ci.height!==undefined?ci.height:null;}
,setRowMinHeight:function(cl,ck){this._setRowData(cl,C,ck);this._applyLayoutChange();return this;}
,getRowMinHeight:function(cn){var cm=this.__pA[cn]||{};return cm.minHeight||0;}
,__pK:function(cp){var co=cp.getSizeHint();var cr=cp.getMarginLeft()+cp.getMarginRight();var cq=cp.getMarginTop()+cp.getMarginBottom();var cs={height:co.height+cq,width:co.width+cr,minHeight:co.minHeight+cq,minWidth:co.minWidth+cr,maxHeight:co.maxHeight+cq,maxWidth:co.maxWidth+cr};return cs;}
,_fixHeightsRowSpan:function(cN){var cz=this.getSpacingY();for(var i=0,l=this.__pE.length;i<l;i++ ){var cF=this.__pE[i];var cC=this.__pK(cF);var cv=cF.getLayoutProperties();var cB=cv.row;var cK=cz*(cv.rowSpan-1);var ct=cK;var cw={};for(var j=0;j<cv.rowSpan;j++ ){var cA=cv.row+j;var cJ=cN[cA];var cL=this.getRowFlex(cA);if(cL>0){cw[cA]={min:cJ.minHeight,value:cJ.height,max:cJ.maxHeight,flex:cL};}
;cK+=cJ.height;ct+=cJ.minHeight;}
;if(cK<cC.height){if(!qx.lang.Object.isEmpty(cw)){var cM=qx.ui.layout.Util.computeFlexOffsets(cw,cC.height,cK);for(var k=0;k<cv.rowSpan;k++ ){var cH=cM[cB+k]?cM[cB+k].offset:0;cN[cB+k].height+=cH;}
;}
else {var cE=cz*(cv.rowSpan-1);var cD=cC.height-cE;var cI=Math.floor(cD/cv.rowSpan);var cG=0;var cu=0;for(var k=0;k<cv.rowSpan;k++ ){var cy=cN[cB+k].height;cG+=cy;if(cy<cI){cu++ ;}
;}
;var cx=Math.floor((cD-cG)/cu);for(var k=0;k<cv.rowSpan;k++ ){if(cN[cB+k].height<cI){cN[cB+k].height+=cx;}
;}
;}
;}
;if(ct<cC.minHeight){var cM=qx.ui.layout.Util.computeFlexOffsets(cw,cC.minHeight,ct);for(var j=0;j<cv.rowSpan;j++ ){var cH=cM[cB+j]?cM[cB+j].offset:0;cN[cB+j].minHeight+=cH;}
;}
;}
;}
,_fixWidthsColSpan:function(cR){var cS=this.getSpacingX();for(var i=0,l=this.__pD.length;i<l;i++ ){var cO=this.__pD[i];var cQ=this.__pK(cO);var cU=cO.getLayoutProperties();var cP=cU.column;var db=cS*(cU.colSpan-1);var cT=db;var cV={};var cX;for(var j=0;j<cU.colSpan;j++ ){var cW=cU.column+j;var da=cR[cW];var cY=this.getColumnFlex(cW);if(cY>0){cV[cW]={min:da.minWidth,value:da.width,max:da.maxWidth,flex:cY};}
;db+=da.width;cT+=da.minWidth;}
;if(db<cQ.width){var dc=qx.ui.layout.Util.computeFlexOffsets(cV,cQ.width,db);for(var j=0;j<cU.colSpan;j++ ){cX=dc[cP+j]?dc[cP+j].offset:0;cR[cP+j].width+=cX;}
;}
;if(cT<cQ.minWidth){var dc=qx.ui.layout.Util.computeFlexOffsets(cV,cQ.minWidth,cT);for(var j=0;j<cU.colSpan;j++ ){cX=dc[cP+j]?dc[cP+j].offset:0;cR[cP+j].minWidth+=cX;}
;}
;}
;}
,_getRowHeights:function(){if(this.__pH!=null){return this.__pH;}
;var dm=[];var df=this.__pF;var de=this.__pG;for(var dn=0;dn<=df;dn++ ){var dg=0;var di=0;var dh=0;for(var dl=0;dl<=de;dl++ ){var dd=this.__pC[dn][dl];if(!dd){continue;}
;var dj=dd.getLayoutProperties().rowSpan||0;if(dj>1){continue;}
;var dk=this.__pK(dd);if(this.getRowFlex(dn)>0){dg=Math.max(dg,dk.minHeight);}
else {dg=Math.max(dg,dk.height);}
;di=Math.max(di,dk.height);}
;var dg=Math.max(dg,this.getRowMinHeight(dn));var dh=this.getRowMaxHeight(dn);if(this.getRowHeight(dn)!==null){var di=this.getRowHeight(dn);}
else {var di=Math.max(dg,Math.min(di,dh));}
;dm[dn]={minHeight:dg,height:di,maxHeight:dh};}
;if(this.__pE.length>0){this._fixHeightsRowSpan(dm);}
;this.__pH=dm;return dm;}
,_getColWidths:function(){if(this.__pI!=null){return this.__pI;}
;var dt=[];var dq=this.__pG;var ds=this.__pF;for(var dy=0;dy<=dq;dy++ ){var dw=0;var dv=0;var dr=Infinity;for(var dz=0;dz<=ds;dz++ ){var dp=this.__pC[dz][dy];if(!dp){continue;}
;var du=dp.getLayoutProperties().colSpan||0;if(du>1){continue;}
;var dx=this.__pK(dp);dv=Math.max(dv,dx.minWidth);dw=Math.max(dw,dx.width);}
;dv=Math.max(dv,this.getColumnMinWidth(dy));dr=this.getColumnMaxWidth(dy);if(this.getColumnWidth(dy)!==null){var dw=this.getColumnWidth(dy);}
else {var dw=Math.max(dv,Math.min(dw,dr));}
;dt[dy]={minWidth:dv,width:dw,maxWidth:dr};}
;if(this.__pD.length>0){this._fixWidthsColSpan(dt);}
;this.__pI=dt;return dt;}
,_getColumnFlexOffsets:function(dD){var dA=this.getSizeHint();var dF=dD-dA.width;if(dF==0){return {};}
;var dC=this._getColWidths();var dB={};for(var i=0,l=dC.length;i<l;i++ ){var dG=dC[i];var dE=this.getColumnFlex(i);if((dE<=0)||(dG.width==dG.maxWidth&&dF>0)||(dG.width==dG.minWidth&&dF<0)){continue;}
;dB[i]={min:dG.minWidth,value:dG.width,max:dG.maxWidth,flex:dE};}
;return qx.ui.layout.Util.computeFlexOffsets(dB,dD,dA.width);}
,_getRowFlexOffsets:function(dJ){var dH=this.getSizeHint();var dL=dJ-dH.height;if(dL==0){return {};}
;var dK=this._getRowHeights();var dI={};for(var i=0,l=dK.length;i<l;i++ ){var dN=dK[i];var dM=this.getRowFlex(i);if((dM<=0)||(dN.height==dN.maxHeight&&dL>0)||(dN.height==dN.minHeight&&dL<0)){continue;}
;dI[i]={min:dN.minHeight,value:dN.height,max:dN.maxHeight,flex:dM};}
;return qx.ui.layout.Util.computeFlexOffsets(dI,dJ,dH.height);}
,renderLayout:function(ej,dO,ei){if(this._invalidChildrenCache){this.__pJ();}
;var ed=qx.ui.layout.Util;var dQ=this.getSpacingX();var dW=this.getSpacingY();var eh=this._getColWidths();var ek=this._getColumnFlexOffsets(ej);var dR=[];var em=this.__pG;var dP=this.__pF;var el;for(var en=0;en<=em;en++ ){el=ek[en]?ek[en].offset:0;dR[en]=eh[en].width+el;}
;var ea=this._getRowHeights();var ec=this._getRowFlexOffsets(dO);var et=[];for(var dX=0;dX<=dP;dX++ ){el=ec[dX]?ec[dX].offset:0;et[dX]=ea[dX].height+el;}
;var er=0;for(var en=0;en<=em;en++ ){var top=0;for(var dX=0;dX<=dP;dX++ ){var ef=this.__pC[dX][en];if(!ef){top+=et[dX]+dW;continue;}
;var dS=ef.getLayoutProperties();if(dS.row!==dX||dS.column!==en){top+=et[dX]+dW;continue;}
;var es=dQ*(dS.colSpan-1);for(var i=0;i<dS.colSpan;i++ ){es+=dR[en+i];}
;var eg=dW*(dS.rowSpan-1);for(var i=0;i<dS.rowSpan;i++ ){eg+=et[dX+i];}
;var dT=ef.getSizeHint();var eq=ef.getMarginTop();var ee=ef.getMarginLeft();var eb=ef.getMarginBottom();var dV=ef.getMarginRight();var dY=Math.max(dT.minWidth,Math.min(es-ee-dV,dT.maxWidth));var eu=Math.max(dT.minHeight,Math.min(eg-eq-eb,dT.maxHeight));var eo=this.getCellAlign(dX,en);var ep=er+ed.computeHorizontalAlignOffset(eo.hAlign,dY,es,ee,dV);var dU=top+ed.computeVerticalAlignOffset(eo.vAlign,eu,eg,eq,eb);ef.renderLayout(ep+ei.left,dU+ei.top,dY,eu);top+=et[dX]+dW;}
;er+=dR[en]+dQ;}
;}
,invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);this.__pI=null;this.__pH=null;}
,_computeSizeHint:function(){if(this._invalidChildrenCache){this.__pJ();}
;var ex=this._getColWidths();var ev=0,eD=0;for(var i=0,l=ex.length;i<l;i++ ){var eC=ex[i];if(this.getColumnFlex(i)>0){ev+=eC.minWidth;}
else {ev+=eC.width;}
;eD+=eC.width;}
;var eE=this._getRowHeights();var ey=0,ez=0;for(var i=0,l=eE.length;i<l;i++ ){var eF=eE[i];if(this.getRowFlex(i)>0){ey+=eF.minHeight;}
else {ey+=eF.height;}
;ez+=eF.height;}
;var eB=this.getSpacingX()*(ex.length-1);var eA=this.getSpacingY()*(eE.length-1);var ew={minWidth:ev+eB,width:eD+eB,minHeight:ey+eA,height:ez+eA};return ew;}
},destruct:function(){this.__pC=this.__pA=this.__pB=this.__pD=this.__pE=this.__pI=this.__pH=null;}
});}
)();
(function(){var a="resize",b="scrollY",c="scrollAnimationEnd",d="_transformScrollX",f="scrollX",g="_applyScrollX",h="_applyScrollY",i="frame",j="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",k="_transformScrollY",l="appear",m="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",n="qx.event.type.Event",o="qx.ui.core.scroll.ScrollPane",p="end",q="scroll",r="update";qx.Class.define(o,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);this.set({minWidth:0,minHeight:0});this._setLayout(new qx.ui.layout.Grow());this.addListener(a,this._onUpdate);var s=this.getContentElement();s.addListener(q,this._onScroll,this);s.addListener(l,this._onAppear,this);}
,events:{update:n,scrollAnimationEnd:n},properties:{scrollX:{check:j,apply:g,transform:d,event:f,init:0},scrollY:{check:m,apply:h,transform:k,event:b,init:0}},members:{__oK:null,add:function(t){var u=this._getChildren()[0];if(u){this._remove(u);u.removeListener(a,this._onUpdate,this);}
;if(t){this._add(t);t.addListener(a,this._onUpdate,this);}
;}
,remove:function(v){if(v){this._remove(v);v.removeListener(a,this._onUpdate,this);}
;}
,getChildren:function(){return this._getChildren();}
,_onUpdate:function(e){this.fireEvent(r);}
,_onScroll:function(e){var w=this.getContentElement();this.setScrollX(w.getScrollX());this.setScrollY(w.getScrollY());}
,_onAppear:function(e){var B=this.getContentElement();var z=this.getScrollX();var C=B.getScrollX();if(z!=C){B.scrollToX(z);}
;var A=this.getScrollY();var D=B.getScrollY();if(A!=D){B.scrollToY(A);}
;}
,getItemTop:function(E){var top=0;do {top+=E.getBounds().top;E=E.getLayoutParent();}
while(E&&E!==this);return top;}
,getItemBottom:function(F){return this.getItemTop(F)+F.getBounds().height;}
,getItemLeft:function(G){var H=0;var parent;do {H+=G.getBounds().left;parent=G.getLayoutParent();if(parent){H+=parent.getInsets().left;}
;G=parent;}
while(G&&G!==this);return H;}
,getItemRight:function(I){return this.getItemLeft(I)+I.getBounds().width;}
,getScrollSize:function(){return this.getChildren()[0].getBounds();}
,getScrollMaxX:function(){var K=this.getInnerSize();var J=this.getScrollSize();if(K&&J){return Math.max(0,J.width-K.width);}
;return 0;}
,getScrollMaxY:function(){var M=this.getInnerSize();var L=this.getScrollSize();if(M&&L){return Math.max(0,L.height-M.height);}
;return 0;}
,scrollToX:function(Q,N){var O=this.getScrollMaxX();if(Q<0){Q=0;}
else if(Q>O){Q=O;}
;this.stopScrollAnimation();if(N){var P=this.getScrollX();this.__oK=new qx.bom.AnimationFrame();this.__oK.on(p,function(){this.setScrollX(Q);this.__oK=null;this.fireEvent(c);}
,this);this.__oK.on(i,function(S){var R=parseInt(S/N*(Q-P)+P);this.setScrollX(R);}
,this);this.__oK.startSequence(N);}
else {this.setScrollX(Q);}
;}
,scrollToY:function(W,T){var U=this.getScrollMaxY();if(W<0){W=0;}
else if(W>U){W=U;}
;this.stopScrollAnimation();if(T){var V=this.getScrollY();this.__oK=new qx.bom.AnimationFrame();this.__oK.on(p,function(){this.setScrollY(W);this.__oK=null;this.fireEvent(c);}
,this);this.__oK.on(i,function(Y){var X=parseInt(Y/T*(W-V)+V);this.setScrollY(X);}
,this);this.__oK.startSequence(T);}
else {this.setScrollY(W);}
;}
,scrollByX:function(x,ba){this.scrollToX(this.getScrollX()+x,ba);}
,scrollByY:function(y,bb){this.scrollToY(this.getScrollY()+y,bb);}
,stopScrollAnimation:function(){if(this.__oK){this.__oK.cancelSequence();this.__oK=null;}
;}
,_applyScrollX:function(bc){this.getContentElement().scrollToX(bc);}
,_transformScrollX:function(bd){return Math.round(bd);}
,_applyScrollY:function(be){this.getContentElement().scrollToY(be);}
,_transformScrollY:function(bf){return Math.round(bf);}
}});}
)();
(function(){var a="' is not supported by the Grow layout!",b="qx.ui.layout.Grow",c="qx.debug",d="The property '";qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(c,{"true":function(e,name,f){this.assert(false,d+name+a);}
,"false":null}),renderLayout:function(g,h,k){var o=this._getLayoutChildren();var n,p,m,j;for(var i=0,l=o.length;i<l;i++ ){n=o[i];p=n.getSizeHint();m=g;if(m<p.minWidth){m=p.minWidth;}
else if(m>p.maxWidth){m=p.maxWidth;}
;j=h;if(j<p.minHeight){j=p.minHeight;}
else if(j>p.maxHeight){j=p.maxHeight;}
;n.renderLayout(k.left,k.top,m,j);}
;}
,_computeSizeHint:function(){var w=this._getLayoutChildren();var u,y;var x=0,v=0;var t=0,r=0;var q=Infinity,s=Infinity;for(var i=0,l=w.length;i<l;i++ ){u=w[i];y=u.getSizeHint();x=Math.max(x,y.width);v=Math.max(v,y.height);t=Math.max(t,y.minWidth);r=Math.max(r,y.minHeight);q=Math.min(q,y.maxWidth);s=Math.min(s,y.maxHeight);}
;return {width:x,height:v,minWidth:t,minHeight:r,maxWidth:q,maxHeight:s};}
}});}
)();
(function(){var a="os.version",b="os.name",c="qx.mobile.nativescroll",d="osx",e="qx.nativeScrollBars",f="event.mspointer",g="android",h="firefox",i="os.scrollBarOverlayed",j="browser.version",k="ios",l=".",m="browser.name",n="qx.bom.client.Scroll";qx.Bootstrap.define(n,{statics:{scrollBarOverlayed:function(){var o=qx.bom.element.Scroll.getScrollbarWidth();var q=qx.bom.client.OperatingSystem.getName()===d;var p=qx.core.Environment.get(e);return o===0&&q&&p;}
,getNativeScroll:function(){if(qx.core.Environment.get(b)==k&&parseInt(qx.core.Environment.get(j),10)>7){return true;}
;if(qx.core.Environment.get(m)==h){return true;}
;if(qx.core.Environment.get(b)==g){var s=qx.core.Environment.get(a);var r=s.split(l);if(r[0]>4||(r.length>1&&r[0]>3&&r[1]>3)){return true;}
;}
;if(qx.core.Environment.get(f)){return true;}
;return false;}
},defer:function(t){qx.core.Environment.add(i,t.scrollBarOverlayed);qx.core.Environment.add(c,t.getNativeScroll);}
});}
)();
(function(){var a="resetPaddingRight",b="setPaddingTop",c="_applyContentPadding",d="setPaddingBottom",e="resetThemed",f="contentPaddingRight",g="Integer",h="contentPaddingLeft",i="setThemedPaddingLeft",j="resetPaddingTop",k="shorthand",l="setThemedPaddingRight",m="setThemed",n="setPaddingRight",o="contentPaddingBottom",p="resetPaddingBottom",q="qx.ui.core.MContentPadding",r="resetPaddingLeft",s="setThemedPaddingTop",t="setPaddingLeft",u="setThemedPaddingBottom",v="contentPaddingTop";qx.Mixin.define(q,{properties:{contentPaddingTop:{check:g,init:0,apply:c,themeable:true},contentPaddingRight:{check:g,init:0,apply:c,themeable:true},contentPaddingBottom:{check:g,init:0,apply:c,themeable:true},contentPaddingLeft:{check:g,init:0,apply:c,themeable:true},contentPadding:{group:[v,f,o,h],mode:k,themeable:true}},members:{__pc:{contentPaddingTop:b,contentPaddingRight:n,contentPaddingBottom:d,contentPaddingLeft:t},__pd:{contentPaddingTop:s,contentPaddingRight:l,contentPaddingBottom:u,contentPaddingLeft:i},__pe:{contentPaddingTop:j,contentPaddingRight:a,contentPaddingBottom:p,contentPaddingLeft:r},_applyContentPadding:function(z,w,name,y){var A=this._getContentPaddingTarget();if(z==null){var x=this.__pe[name];A[x]();}
else {if(y==m||y==e){var B=this.__pd[name];A[B](z);}
else {var B=this.__pc[name];A[B](z);}
;}
;}
}});}
)();
(function(){var a="qx.ui.container.Scroll",b="pane";qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){qx.ui.core.scroll.AbstractScrollArea.call(this);if(content){this.add(content);}
;}
,members:{add:function(c){this.getChildControl(b).add(c);}
,remove:function(d){this.getChildControl(b).remove(d);}
,getChildren:function(){return this.getChildControl(b).getChildren();}
,_getContentPaddingTarget:function(){return this.getChildControl(b);}
}});}
)();
(function(){var a="black",b="#b0ffb0",c="&bull;",d="demobrowser.demo.util.FSMMaze",e="#ffb0b0",f="solid",g="html";qx.Class.define(d,{extend:qx.ui.container.Composite,statics:{Direction:{WEST:0x8,SOUTH:0x4,EAST:0x2,NORTH:0x1}},construct:function(j,B,x,y,n){qx.ui.container.Composite.call(this);this.setLayout(new qx.ui.layout.Grid());this.numRows=(j===undefined?10:j);this.numCols=(B===undefined?10:B);this.x=(x===undefined?50:x);this.y=(y===undefined?50:y);this.cellSize=(n===undefined?50:n);this.totalHeight=this.numRows*this.cellSize;this.totalWidth=this.numCols*this.cellSize;this.setWidth(this.totalWidth);this.setHeight(this.totalHeight);for(var C=0;C<this.numRows;C++ ){this.getLayout().setRowHeight(C,this.cellSize);}
;for(var q=0;q<this.numCols;q++ ){this.getLayout().setColumnWidth(q,this.cellSize);}
;this.cells=[];this.mazeInfo=[];for(C=0;C<this.numRows;C++ ){this.cells[C]=[];this.mazeInfo[C]=[];for(q=0;q<this.numCols;q++ ){this.cells[C][q]=new qx.ui.container.Composite();this.cells[C][q].setLayout(new qx.ui.layout.HBox());this.add(this.cells[C][q],{row:C,column:q});this.cells[C][q].setDecorator(new qx.ui.decoration.Decorator().set({width:1,style:f,color:a}));this.mazeInfo[C][q]=0xf;}
;}
;var t=[];var k=1;var s=this.numRows*this.numCols;var z;var h;var u;z={row:Math.floor(Math.random()*this.numRows),col:Math.floor(Math.random()*this.numCols)};while(k<s){h=[];if(z.col>0&&(this.mazeInfo[z.row][z.col-1]==0xf)){h.push({row:z.row,col:z.col-1,currentCellWall:demobrowser.demo.util.FSMMaze.Direction.WEST,neighborWall:demobrowser.demo.util.FSMMaze.Direction.EAST});}
;if(z.row<this.numRows-1&&(this.mazeInfo[z.row+1][z.col]==0xf)){h.push({row:z.row+1,col:z.col,currentCellWall:demobrowser.demo.util.FSMMaze.Direction.SOUTH,neighborWall:demobrowser.demo.util.FSMMaze.Direction.NORTH});}
;if(z.col<this.numCols-1&&(this.mazeInfo[z.row][z.col+1]==0xf)){h.push({row:z.row,col:z.col+1,currentCellWall:demobrowser.demo.util.FSMMaze.Direction.EAST,neighborWall:demobrowser.demo.util.FSMMaze.Direction.WEST});}
;if(z.row>0&&(this.mazeInfo[z.row-1][z.col]==0xf)){h.push({row:z.row-1,col:z.col,currentCellWall:demobrowser.demo.util.FSMMaze.Direction.NORTH,neighborWall:demobrowser.demo.util.FSMMaze.Direction.SOUTH});}
;if(h.length>0){var r=Math.floor(Math.random()*h.length);u=h[r];this.mazeInfo[z.row][z.col]&=~u.currentCellWall;this.mazeInfo[u.row][u.col]&=~u.neighborWall;var A=new qx.ui.decoration.Decorator().set({width:1,style:f,color:a});var w=this.cells[z.row][z.col].getDecorator();A.set({widthLeft:w.getWidthLeft(),widthBottom:w.getWidthBottom(),widthRight:w.getWidthRight(),widthTop:w.getWidthTop()});switch(u.currentCellWall){case demobrowser.demo.util.FSMMaze.Direction.WEST:A.setWidthLeft(0);break;case demobrowser.demo.util.FSMMaze.Direction.SOUTH:A.setWidthBottom(0);break;case demobrowser.demo.util.FSMMaze.Direction.EAST:A.setWidthRight(0);break;case demobrowser.demo.util.FSMMaze.Direction.NORTH:A.setWidthTop(0);break;};this.cells[z.row][z.col].setDecorator(A);var v=new qx.ui.decoration.Decorator().set({width:1,style:f,color:a});var l=this.cells[u.row][u.col].getDecorator();v.set({widthLeft:l.getWidthLeft(),widthBottom:l.getWidthBottom(),widthRight:l.getWidthRight(),widthTop:l.getWidthTop()});switch(u.neighborWall){case demobrowser.demo.util.FSMMaze.Direction.WEST:v.setWidthLeft(0);break;case demobrowser.demo.util.FSMMaze.Direction.SOUTH:v.setWidthBottom(0);break;case demobrowser.demo.util.FSMMaze.Direction.EAST:v.setWidthRight(0);break;case demobrowser.demo.util.FSMMaze.Direction.NORTH:v.setWidthTop(0);break;};this.cells[u.row][u.col].setDecorator(v);t.push({row:z.row,col:z.col});z={row:u.row,col:u.col};k++ ;}
else {var p=t.pop();z={row:p.row,col:p.col};}
;}
;this.startCell={row:Math.floor(Math.random()*this.numRows),col:Math.floor(Math.random()*this.numCols)};var m=this.cells[this.startCell.row][this.startCell.col];m.setBackgroundColor(b);do {this.endCell={row:Math.floor(Math.random()*this.numRows),col:Math.floor(Math.random()*this.numCols)};}
while((Math.abs(this.startCell.row-this.endCell.row)<this.numRows/2)||(Math.abs(this.startCell.col-this.endCell.col)<this.numCols/2));var i=this.cells[this.endCell.row][this.endCell.col];i.setBackgroundColor(e);}
,members:{getCellSize:function(){return this.cellSize;}
,getStartCell:function(){return this.startCell;}
,getEndCell:function(){return this.endCell;}
,getCellTopLeft:function(D){return ({top:this.y+(this.cellSize*D.row),left:this.x+(this.cellSize*D.col)});}
,getWestCell:function(E){var F=demobrowser.demo.util.FSMMaze.Direction.WEST;if(E.col>0&&((this.mazeInfo[E.row][E.col]&F)==0)){return ({row:E.row,col:E.col-1});}
;return null;}
,getSouthCell:function(G){var H=demobrowser.demo.util.FSMMaze.Direction.SOUTH;if(G.row<this.numRows-1&&((this.mazeInfo[G.row][G.col]&H)==0)){return ({row:G.row+1,col:G.col});}
;return null;}
,getEastCell:function(I){var J=demobrowser.demo.util.FSMMaze.Direction.EAST;if(I.col<this.numCols-1&&((this.mazeInfo[I.row][I.col]&J)==0)){return ({row:I.row,col:I.col+1});}
;return null;}
,getNorthCell:function(K){var L=demobrowser.demo.util.FSMMaze.Direction.NORTH;if(K.row>0&&((this.mazeInfo[K.row][K.col]&L)==0)){return ({row:K.row-1,col:K.col});}
;return null;}
,markCell:function(M){var N=Math.ceil(this.cellSize/5);var o=new qx.ui.basic.Label(c,null,g);o.set({height:N,width:N,paddingTop:(this.cellSize-N)/2,paddingLeft:(this.cellSize-N)/2,rich:true});this.cells[M.row][M.col].add(o);}
}});}
)();
(function(){var b="TERMINATED",c="__Bx",d=" => ",f="#autoActionsBeforeOnexit",g=": Could not find friendly name for '",h=": event '",j=" blocked.  Re-queuing.",k="string",l="qx.event.type.Data",m="'",n="Attempt to transition to nonexistent state ",o="Saved-state stack is empty",p="Internal error: invalid nextState",q=" not handled.  Ignoring.",r="State ",s="#autoActionsBeforeOntransition",u=" returned a value other than ",v="#",w=" already exists",x="Attempt to transition to POP_STATE_STACK ",y=":",z="Transition ",A=" does not exist",B="' on '",C="qx.util.fsm.FiniteStateMachine",D="String",E="terminated",F="#autoActionsAfterOntransition",G="",H="#actionsAfterOnentry",I="Saved-state stack is full",J="#autoActionsBeforeOnentry",K="__By",L=": no transition found.  No state change.",M="#autoActionsAfterOnentry",N="#actionsBeforeOnentry",O="', because the finite state machine is not running.",P=": Pushed event: ",Q=": Cannot listen to event '",R="Machine started with no available states",S=": Process event: ",T="#entry",U="#ontransition",V=" on ",W="Invalid state: not an instance of ",X="Number",Y="#exit",bp="true, false, or null.",bq="Explicit transition ",br="  ",bl="qx.util.fsm.State",bm="while state stack is empty.",bn=".  Ignoring.",bo="#autoActionsAfterOnexit",bs=": Event '",bt="object",bu=" not handled for target ",bv=": Queued event: ";qx.Class.define(C,{extend:qx.core.Object,construct:function(bw){qx.core.Object.call(this);this.setName(bw);this.__ke={};this.__Bv=null;this.__Bw=[];this.__Bx=[];this.__By=[];this.__Bz={};this.__BA={};this.__BB={};this.__BC={};this.__BD={};}
,statics:{StateChange:{CURRENT_STATE:1,POP_STATE_STACK:2,TERMINATE:3},EventHandling:{PREDICATE:1,BLOCKED:2},DebugFlags:{EVENTS:1,TRANSITIONS:2,FUNCTION_DETAIL:4,OBJECT_NOT_FOUND:8}},events:{"terminated":l},properties:{name:{check:D,nullable:true},state:{check:D,nullable:true},previousState:{check:D,nullable:true},nextState:{check:D,nullable:true},maxSavedStates:{check:X,init:2},debugFlags:{check:X,init:7}},members:{__ke:null,__Bv:null,__Bx:null,__By:null,__Bw:null,__Bz:null,__BA:null,__BB:null,__BC:null,__BD:null,__BE:false,__BF:true,isTerminated:function(){return this.__BF;}
,addState:function(bx){if(!bx instanceof qx.util.fsm.State){throw new Error(W+bl);}
;var by=bx.getName();if(by in this.__ke){throw new Error(r+by+w);}
;if(this.__Bv==null){this.__Bv=by;}
;this.__ke[by]=bx;}
,replaceState:function(bC,bB){if(!bC instanceof qx.util.fsm.State){throw new Error(W+bl);}
;var bA=bC.getName();var bz=this.__ke[bA];this.__ke[bA]=bC;if(bB){bz._bNeedDispose=true;}
;return bz;}
,addObject:function(bG,bD,bE){var bH=bD.toHashCode();this.__BA[bG]=bH;this.__BB[bH]=bG;this.__Bz[bG]=bD;if(!bE){return;}
;if(typeof (bE)==k){bE=[bE];}
;for(var i=0;i<bE.length;i++ ){var bF=bE[i];if(!this.__BC[bF]){this.__BC[bF]={};}
;this.__BC[bF][bG]=true;if(!this.__BD[bG]){this.__BD[bG]=[];}
;this.__BD[bG].push(bF);}
;}
,removeObject:function(bL){var bI;var bJ;var bK;var bM;bI=this.__BA[bL];if(this.__BD[bL]){for(var i=0;i<this.__BD[bL].length;i++ ){bJ=this.__BD[bL][i];delete this.__BC[bJ][bL];bM=true;for(bK in this.__BC[bJ]){bM=false;break;}
;if(bM){delete this.__BC[bJ];}
;}
;delete this.__BD[bL];}
;delete this.__BB[bI];delete this.__BA[bL];delete this.__Bz[bL];}
,getObject:function(bN){return this.__Bz[bN];}
,getFriendlyName:function(bO){var bP=bO?bO.toHashCode():null;return bP?this.__BB[bP]:null;}
,getGroupObjects:function(bQ){var a=[];for(var name in this.__BC[bQ]){a.push(name);}
;return a;}
,displayAllObjects:function(){for(var bR in this.__BA){var bT=this.__BA[bR];var bS=this.getObject(bR);this.debug(bR+d+bT);this.debug(br+bT+d+this.__BB[bT]);this.debug(br+bR+d+this.getObject(bR));this.debug(br+this.getObject(bR)+d+this.getFriendlyName(bS));}
;}
,_getInternalData:function(){return ({"states":this.__ke,"startState":this.__Bv,"eventQueue":this.__Bx,"blockedEvents":this.__By,"savedStates":this.__Bw,"friendlyToObject":this.__Bz,"friendlyToHash":this.__BA,"hashToFriendly":this.__BB,"groupToFriendly":this.__BC,"friendlyToGroups":this.__BD});}
,start:function(){this.__BF=false;var bV=this.__Bv;if(bV==null){throw new Error(R);}
;this.setState(bV);this.setPreviousState(null);this.setNextState(null);var bU=(this.getDebugFlags()&qx.util.fsm.FiniteStateMachine.DebugFlags.FUNCTION_DETAIL);if(bU){this.debug(this.getName()+v+bV+N);}
;this.__ke[bV].getAutoActionsBeforeOnentry()(this);if(bU){this.debug(this.getName()+v+bV+T);}
;this.__ke[bV].getOnentry()(this,null);if(bU){this.debug(this.getName()+v+bV+H);}
;this.__ke[bV].getAutoActionsAfterOnentry()(this);}
,pushState:function(bW){if(this.__Bw.length>=this.getMaxSavedStates()){throw new Error(I);}
;if(bW===true){this.__Bw.push(this.getState());}
else if(bW){this.__Bw.push(bW);}
else {this.__Bw.push(this.getPreviousState());}
;}
,popState:function(){if(this.__Bw.length==0){throw new Error(o);}
;return this.__Bw.pop();}
,postponeEvent:function(event){this.__By.unshift(event);}
,enqueueEvent:function(event,bX){if(bX){this.__Bx.push(event);}
else {this.__Bx.unshift(event);}
;if(this.getDebugFlags()&qx.util.fsm.FiniteStateMachine.DebugFlags.EVENTS){var bY=this.getFriendlyName(event.getTarget());if(bX){this.debug(this.getName()+P+event.getType()+(bY?V+bY:G));}
else {this.debug(this.getName()+bv+event.getType()+(bY?V+bY:G));}
;}
;}
,eventListener:function(event){if(this.__BF){this.debug(this.getName()+Q+event.getType()+O);return;}
;var e=event.clone();this.enqueueEvent(e,false);this.__BG();}
,fireImmediateEvent:function(cb,cc,ca){if(this.__BF){this.debug(this.getName()+Q+cb+O);return;}
;if(ca){var event=qx.event.Registration.createEvent(cb,qx.event.type.Data,[ca,null,false]);}
else {var event=qx.event.Registration.createEvent(cb,qx.event.type.Event,[false,false]);}
;event.setTarget(cc);this.eventListener(event);}
,scheduleEvent:function(ce,cf,cd,cg){qx.event.Timer.once(function(){this.fireImmediateEvent(ce,cf,cd);}
,this,cg||20);}
,__BG:function(){if(this.__BE){return;}
;this.__BE=true;while(this.__Bx.length>0){var event=this.__Bx.pop();var ch=this.__BH(event);if(ch){event.dispose();}
;}
;this.__BE=false;}
,__BH:function(event){var ck;var cl;var cj;var cn;var cq;var e;var cp;var ci=this.getDebugFlags();var cu=ci&qx.util.fsm.FiniteStateMachine.DebugFlags.EVENTS;var cs=ci&qx.util.fsm.FiniteStateMachine.DebugFlags.TRANSITIONS;var cr=ci&qx.util.fsm.FiniteStateMachine.DebugFlags.FUNCTION_DETAIL;var co=ci&qx.util.fsm.FiniteStateMachine.DebugFlags.OBJECT_NOT_FOUND;var ct=this.getFriendlyName(event.getTarget());if(cu){this.debug(this.getName()+S+event.getType()+(ct?V+ct:G));}
;ck=this.getState();cn=this.__ke[ck];cq=cn.transitions;e=cn.getEvents()[event.getType()];if(!e){if(cu){this.debug(this.getName()+bs+event.getType()+m+q);}
;return true;}
;if(typeof (e)==bt){if(!ct){if(co){this.debug(this.getName()+g+event.getType()+B+event.getTarget()+m);}
;return true;}
;cp=e[ct];if(!cp){if(cu){this.debug(this.getName()+bs+event.getType()+m+bu+ct+bn);}
;return true;}
;}
else {cp=e;}
;switch(cp){case qx.util.fsm.FiniteStateMachine.EventHandling.PREDICATE:break;case qx.util.fsm.FiniteStateMachine.EventHandling.BLOCKED:if(cu){this.debug(this.getName()+bs+event.getType()+m+j);}
;this.__By.unshift(event);return false;default:if(typeof (cp)==k){if(cq[cp]){var cm=cq[cp];cq={};cq[cp]=cm;}
else {throw new Error(bq+cp+A);}
;break;}
;};for(var t in cq){var cm=cq[t];switch(cm.getPredicate()(this,event)){case true:break;case false:continue;case null:return true;default:throw new Error(z+ck+y+t+u+bp);};cl=cm.getNextState();if(typeof (cl)==k){if(!cl in this.__ke){throw new Error(n+cl);}
;this.setNextState(cl);}
else {switch(cl){case qx.util.fsm.FiniteStateMachine.StateChange.CURRENT_STATE:cl=ck;this.setNextState(cl);break;case qx.util.fsm.FiniteStateMachine.StateChange.POP_STATE_STACK:if(this.__Bw.length==0){throw new Error(x+bm);}
;cl=this.__Bw.pop();this.setNextState(cl);break;case qx.util.fsm.FiniteStateMachine.StateChange.TERMINATE:this.__BF=true;this.setNextState(null);break;default:throw new Error(p);};}
;if(cr){this.debug(this.getName()+v+ck+v+t+s);}
;cm.getAutoActionsBeforeOntransition()(this);if(cr){this.debug(this.getName()+v+ck+v+t+U);}
;cm.getOntransition()(this,event);if(cr){this.debug(this.getName()+v+ck+v+t+F);}
;cm.getAutoActionsAfterOntransition()(this);if(cr){this.debug(this.getName()+v+ck+f);}
;cn.getAutoActionsBeforeOnexit()(this);if(cr){this.debug(this.getName()+v+ck+Y);}
;cn.getOnexit()(this,event);if(cr){this.debug(this.getName()+v+ck+bo);}
;cn.getAutoActionsAfterOnexit()(this);if(cn._bNeedDispose){cn.dispose();}
;if(this.__BF){if(cr){this.debug(this.getName()+v+b);}
;this.fireDataEvent(E,ck);return true;}
;cn=this.__ke[this.getNextState()];this.setPreviousState(ck);this.setState(this.getNextState());this.setNextState(null);cj=ck;ck=cl;cl=undefined;if(cr){this.debug(this.getName()+v+ck+J);}
;cn.getAutoActionsBeforeOnentry()(this);if(cr){this.debug(this.getName()+v+ck+T);}
;cn.getOnentry()(this,event);if(cr){this.debug(this.getName()+v+ck+M);}
;cn.getAutoActionsAfterOnentry()(this);for(var i=0;i<this.__By.length;i++ ){e=this.__By.pop();this.__Bx.unshift(e);}
;if(cs){this.debug(this.getName()+v+cj+d+this.getName()+v+ck);}
;return true;}
;if(cs){this.debug(this.getName()+v+ck+h+event.getType()+m+L);}
;return true;}
},destruct:function(){this._disposeArray(c);this._disposeArray(K);this.__Bw=this.__ke=null;}
});}
)();
(function(){var b="State info must be an object",c="function",d="  var groupObjects = ",h="parameters",k="__BK",l=")",m=" fsm.getObject('",n="groups",o="Invalid function parameters: ",p="Invalid onexit type: ",q="  for (var i = 0; i < groupObjects.length; i++)",r="qx.util.fsm.Transition",s="context",t="__BO",u="string",v="autoActionsAfterOnentry",w="Invalid numeric value in events object: ",x='"',y="Invalid state name",z="__BL",A=" value: ",B="');",C="State ",D="autoActionsBeforeOnexit",E="autoActionsBeforeOnentry",F="__BI",G="}",H="): ",I="events must be an object",J="onexit",K="{",L="Invalid function request type: ",M=": ",N="expected array, found ",O="Invalid friendly name in 'objects' list: ",P="autoActionsAfterOnexit",Q="  fsm.debug(ex);",R="(",S="Invalid onentry type: ",T="    fsm.getObject(objName).",U=")(fsm)",V="events",W="undefined",X="Invalid ",Y="try",ba="__BJ",bb="    var objName = groupObjects[i];",bc="Invalid value in events object: ",bd="').",be="__BN",bf="objects",bg="expected object, found ",bh="__BP",bi="The events object must be provided in new state info",bj="catch(ex)",bk="  {",bl="__BM",bm="    fsm.getGroupObjects('",bn="Invalid value in events object ",bo="Invalid transition: not an instance of ",bp="  }",bq="Invalid 'objects' list: expected array, got ",br="Invalid numeric value in events object ",bs="qx.util.fsm.State",bt="onentry",bu=";",bv="Invalid function request parameter type: ",bw="Invalid 'groups' list: expected array, got ",bx="fsm",by=",",bz="Adding user-provided field to state: ",bA="number",bB="object";qx.Class.define(bs,{extend:qx.core.Object,construct:function(bD,bF){var bE;qx.core.Object.call(this);this.setName(bD);if(typeof (bF)!=bB){throw new Error(b);}
;bE=bF.context||window;this.setUserData(s,bE);for(var bC in bF){switch(bC){case bt:this.setOnentry(this.__BQ(bF[bC],bE));break;case J:this.setOnexit(this.__BQ(bF[bC],bE));break;case E:this.setAutoActionsBeforeOnentry(bF[bC]);break;case v:this.setAutoActionsAfterOnentry(bF[bC]);break;case D:this.setAutoActionsBeforeOnexit(bF[bC]);break;case P:this.setAutoActionsAfterOnexit(bF[bC]);break;case V:this.setEvents(bF[bC]);break;case s:break;default:this.setUserData(bC,bF[bC]);this.debug(C+bD+M+bz+bC);break;};}
;if(!this.getEvents()){throw new Error(bi);}
;this.transitions={};}
,statics:{_commonTransformAutoActions:function(actionType,value,context){if(typeof (value)!=bB){throw new Error(X+actionType+A+typeof (value));}
;var funcFragment;var func=Y+K;var param;var objectAndGroupList;for(var f in value){var functionRequest=value[f];if(!functionRequest instanceof Array){throw new Error(L+N+typeof (functionRequest));}
;for(var i=0;i<functionRequest.length;i++ ){objectAndGroupList=functionRequest[i];if(typeof (objectAndGroupList)!=bB){throw new Error(bv+bg+typeof (functionRequest[param]));}
;var params=objectAndGroupList[h];if(!params){params=[];}
else {if(!params instanceof Array){throw new Error(o+N+typeof (params));}
;}
;funcFragment=f+R;for(var j=0;j<params.length;j++ ){if(j!=0){funcFragment+=by;}
;if(typeof (params[j])==c){funcFragment+=R+params[j]+U;}
else if(typeof (params[j])==u){funcFragment+=x+params[j]+x;}
else {funcFragment+=params[j];}
;}
;funcFragment+=l;var a=objectAndGroupList[bf];if(!a){a=[];}
else if(!a instanceof Array){throw new Error(bq+typeof (a));}
;for(var j=0;j<a.length;j++ ){if(typeof (a[j])!=u){throw new Error(O+a[j]);}
;func+=m+a[j]+bd+funcFragment+bu;}
;var g=objectAndGroupList[n];if(g){if(!g instanceof Array){throw new Error(bw+typeof (g));}
;for(j=0;j<g.length;j++ ){func+=d+bm+g[j]+B+q+bk+bb+T+funcFragment+bu+bp;}
;}
;}
;}
;func+=G+bj+K+Q+G;return qx.lang.Function.bind(new Function(bx,func),context);}
},properties:{name:{transform:F,nullable:true},onentry:{transform:ba,nullable:true,init:function(bG,event){}
},onexit:{transform:k,nullable:true,init:function(bH,event){}
},autoActionsBeforeOnentry:{transform:bl,nullable:true,init:function(bI,event){}
},autoActionsAfterOnentry:{transform:be,nullable:true,init:function(bJ,event){}
},autoActionsBeforeOnexit:{transform:t,nullable:true,init:function(bK,event){}
},autoActionsAfterOnexit:{transform:bh,nullable:true,init:function(bL,event){}
},events:{transform:z,nullable:true}},members:{__BI:function(bM){if(typeof (bM)!=u||bM.length<1){throw new Error(y);}
;return bM;}
,__BJ:function(bN){switch(typeof (bN)){case W:return function(bO,event){}
;case c:return qx.lang.Function.bind(bN,this.getUserData(s));default:throw new Error(S+typeof (bN));};}
,__BK:function(bP){switch(typeof (bP)){case W:return function(bQ,event){}
;case c:return qx.lang.Function.bind(bP,this.getUserData(s));default:throw new Error(p+typeof (bP));};}
,__BL:function(bT){if(typeof (bT)!=bB){throw new Error(I);}
;for(var e in bT){var bR=bT[e];if(typeof (bR)==bA&&bR!=qx.util.fsm.FiniteStateMachine.EventHandling.PREDICATE&&bR!=qx.util.fsm.FiniteStateMachine.EventHandling.BLOCKED){throw new Error(w+e+M+bR);}
else if(typeof (bR)==bB){for(var bS in bR){if(typeof (bR[bS])==bA&&bR[bS]!=qx.util.fsm.FiniteStateMachine.EventHandling.PREDICATE&&bR[bS]!=qx.util.fsm.FiniteStateMachine.EventHandling.BLOCKED){throw new Error(br+R+e+H+bS+M+bR[bS]);}
else if(typeof (bR[bS])!=u&&typeof (bR[bS])!=bA){throw new Error(bn+R+e+H+bS+M+bR[bS]);}
;}
;}
else if(typeof (bR)!=u&&typeof (bR)!=bA){throw new Error(bc+e+M+bT[e]);}
;}
;return bT;}
,__BM:function(bU){return qx.util.fsm.State._commonTransformAutoActions(E,bU,this.getUserData(s));}
,__BN:function(bV){return qx.util.fsm.State._commonTransformAutoActions(v,bV,this.getUserData(s));}
,__BO:function(bW){return qx.util.fsm.State._commonTransformAutoActions(D,bW,this.getUserData(s));}
,__BP:function(bX){return qx.util.fsm.State._commonTransformAutoActions(P,bX,this.getUserData(s));}
,__BQ:function(f,bY){if(typeof (f)==c){f=qx.lang.Function.bind(f,bY);}
;return f;}
,addTransition:function(ca){if(!ca instanceof qx.util.fsm.Transition){throw new Error(bo+r);}
;this.transitions[ca.getName()]=ca;}
}});}
)();
(function(){var a="function",b="autoActionsBeforeOntransition",c="__BU",d="or one of the Fsm.StateChange constants",e="autoActionsAfterOntransition",g="context",h="string",i="predicate",j="nextState must be an explicit state name, ",k="Transition ",l=": ",m="String",n="__BS",o="__BV",p="number",q="Invalid transition nextState type: ",r="__BT",s="Invalid transition nextState value: ",t="Adding user-provided field to transition: ",u="ontransition",v="Invalid transition predicate type: ",w="boolean",x="nextState",y="Invalid ontransition type: ",z="qx.util.fsm.Transition",A="undefined",B="__BR";qx.Class.define(z,{extend:qx.core.Object,construct:function(F,D){var E;qx.core.Object.call(this);this.setName(F);E=D.context||window;this.setUserData(g,E);for(var C in D){switch(C){case i:this.setPredicate(this.__BQ(D[C],E));break;case x:this.setNextState(D[C]);break;case b:this.setAutoActionsBeforeOntransition(this.__BQ(D[C],E));break;case e:this.setAutoActionsAfterOntransition(this.__BQ(D[C],E));break;case u:this.setOntransition(this.__BQ(D[C],E));break;case g:break;default:this.setUserData(C,D[C]);this.debug(k+F+l+t+C);break;};}
;}
,properties:{name:{check:m,nullable:true},predicate:{init:function(G,event){return true;}
,transform:B},nextState:{init:qx.util.fsm.FiniteStateMachine.StateChange.CURRENT_STATE,transform:n},autoActionsBeforeOntransition:{init:function(H,event){}
,transform:r},autoActionsAfterOntransition:{init:function(I,event){}
,transform:c},ontransition:{init:function(J,event){}
,transform:o}},members:{__BR:function(K){switch(typeof (K)){case A:return function(L,event){return true;}
;case w:return function(M,event){return K;}
;case a:return qx.lang.Function.bind(K,this.getUserData(g));default:throw new Error(v+typeof (K));};}
,__BS:function(N){switch(typeof (N)){case h:return N;case p:switch(N){case qx.util.fsm.FiniteStateMachine.StateChange.CURRENT_STATE:case qx.util.fsm.FiniteStateMachine.StateChange.POP_STATE_STACK:case qx.util.fsm.FiniteStateMachine.StateChange.TERMINATE:return N;default:throw new Error(s+N+l+j+d);};break;default:throw new Error(q+typeof (N));};}
,__BT:function(O){return qx.util.fsm.State._commonTransformAutoActions(b,O,this.getUserData(g));}
,__BU:function(P){return qx.util.fsm.State._commonTransformAutoActions(e,P,this.getUserData(g));}
,__BV:function(Q){switch(typeof (Q)){case A:return function(R,event){}
;case a:return qx.lang.Function.bind(Q,this.getUserData(g));default:throw new Error(y+typeof (Q));};}
,__BQ:function(f,S){if(typeof (f)==a){f=qx.lang.Function.bind(f,S);}
;return f;}
}});}
)();
(function(){var a="KickInTheAss",b="State_Moving",c="Transition_FadingOut_to_Zombie_via_Oneshot",d="demobrowser/demo/ui/mouse-west.gif",e="Transition_FadingIn_to_CellArrival_via_Oneshot",f="Transition_FadingOut_to_FadingOut_via_Oneshot",g="Transition_FadingIn_to_FadingIn_via_Oneshot",h="State_Zombie",j="interval",k="demobrowser/demo/ui/mouse-east.gif",l="State_FadingIn",m="Transition_CellArrival_to_Moving_via_KickInTheAss",n="Die",o="State_CellArrival",p="demobrowser/demo/ui/mouse-north.gif",q="State_FadingOut",r="Transition_Moving_to_Moving_via_Oneshot",s="Transition_Moving_to_CellArrival_via_Oneshot",t="oneshot",u="demobrowser.demo.util.FSMMouse",v="demobrowser/demo/ui/mouse-south.gif",w="Transition_CellArrival_to_FadingOut_via_Die";qx.Class.define(u,{extend:qx.util.fsm.FiniteStateMachine,statics:{nextMouse:1,ticksPerSec:20,fadeSeconds:0.5,moveSeconds:0.2},construct:function(x,B,y,D){var A=demobrowser.demo.util.FSMMouse.nextMouse.toString();qx.util.fsm.FiniteStateMachine.call(this,A);this.setDebugFlags(0); ++demobrowser.demo.util.FSMMouse.nextMouse;this.facing=y;if(x===null){this.currentCell=B.getStartCell();this.traversed=[];this.traversed.push(this.currentCell);this.bLookBehind=true;this.bLookSideways=true;}
else {this.currentCell=x.currentCell;this.traversed=x.traversed.concat();this.bLookBehind=false;this.bLookSideways=false;}
;this.currentLocation=B.getCellTopLeft(this.currentCell);switch(y){case demobrowser.demo.util.FSMMaze.Direction.NORTH:this.mouseImage=new qx.ui.basic.Image(p);break;case demobrowser.demo.util.FSMMaze.Direction.EAST:this.mouseImage=new qx.ui.basic.Image(k);break;case demobrowser.demo.util.FSMMaze.Direction.SOUTH:this.mouseImage=new qx.ui.basic.Image(v);break;case demobrowser.demo.util.FSMMaze.Direction.WEST:this.mouseImage=new qx.ui.basic.Image(d);break;};this.mouseImage.set({opacity:0.0,zIndex:9999});D.add(this.mouseImage,{top:this.currentLocation.top,left:this.currentLocation.left});var z=new qx.util.fsm.State(l,{"onentry":function(F,E){F.oneshot(1000/demobrowser.demo.util.FSMMouse.ticksPerSec);}
,"events":{"oneshot":qx.util.fsm.FiniteStateMachine.EventHandling.PREDICATE}});this.addState(z);var C=new qx.util.fsm.Transition(g,{"predicate":function(G,event){return G.opacity<1.0;}
,"nextState":l,"ontransition":function(H,event){H.opacity+=1/(demobrowser.demo.util.FSMMouse.fadeSeconds*demobrowser.demo.util.FSMMouse.ticksPerSec);H.mouseImage.setOpacity(H.opacity);}
});z.addTransition(C);var C=new qx.util.fsm.Transition(e,{"nextState":o});z.addTransition(C);var z=new qx.util.fsm.State(o,{"onentry":function(J,K){var I=B.getEndCell();if(J.currentCell.row==I.row&&J.currentCell.col==I.col){for(var i=J.traversed.length-2;i>=0;i-- ){B.markCell(J.traversed[i]);}
;return;}
;switch(J.facing){case demobrowser.demo.util.FSMMaze.Direction.WEST:if(J.bLookSideways){if(B.getSouthCell(J.currentCell)!==null){new demobrowser.demo.util.FSMMouse(J,B,demobrowser.demo.util.FSMMaze.Direction.SOUTH,D);}
;if(B.getNorthCell(J.currentCell)!==null){new demobrowser.demo.util.FSMMouse(J,B,demobrowser.demo.util.FSMMaze.Direction.NORTH,D);}
;}
;J.bLookSideways=true;if(J.bLookBehind&&B.getEastCell(J.currentCell)!==null){new demobrowser.demo.util.FSMMouse(J,B,demobrowser.demo.util.FSMMaze.Direction.EAST,D);J.bLookBehind=false;}
;J.destinationCell=B.getWestCell(J.currentCell);if(J.destinationCell!==null){J.destinationLocation=B.getCellTopLeft(J.destinationCell);var event=new qx.event.type.Event();event.setType(a);J.eventListener(event);}
else {var event=new qx.event.type.Event();event.setType(n);J.eventListener(event);}
;break;case demobrowser.demo.util.FSMMaze.Direction.EAST:if(J.bLookSideways){if(B.getSouthCell(J.currentCell)!==null){new demobrowser.demo.util.FSMMouse(J,B,demobrowser.demo.util.FSMMaze.Direction.SOUTH,D);}
;if(B.getNorthCell(J.currentCell)!==null){new demobrowser.demo.util.FSMMouse(J,B,demobrowser.demo.util.FSMMaze.Direction.NORTH,D);}
;}
;J.bLookSideways=true;if(J.bLookBehind&&B.getWestCell(J.currentCell)!==null){new demobrowser.demo.util.FSMMouse(J,B,demobrowser.demo.util.FSMMaze.Direction.WEST,D);J.bLookBehind=false;}
;J.destinationCell=B.getEastCell(J.currentCell);if(J.destinationCell!==null){J.destinationLocation=B.getCellTopLeft(J.destinationCell);var event=new qx.event.type.Event();event.setType(a);J.eventListener(event);}
else {var event=new qx.event.type.Event();event.setType(n);J.eventListener(event);}
;break;case demobrowser.demo.util.FSMMaze.Direction.SOUTH:if(J.bLookSideways){if(B.getWestCell(J.currentCell)!==null){new demobrowser.demo.util.FSMMouse(J,B,demobrowser.demo.util.FSMMaze.Direction.WEST,D);}
;if(B.getEastCell(J.currentCell)!==null){new demobrowser.demo.util.FSMMouse(J,B,demobrowser.demo.util.FSMMaze.Direction.EAST,D);}
;}
;J.bLookSideways=true;if(J.bLookBehind&&B.getNorthCell(J.currentCell)!==null){new demobrowser.demo.util.FSMMouse(J,B,demobrowser.demo.util.FSMMaze.Direction.NORTH,D);J.bLookBehind=false;}
;J.destinationCell=B.getSouthCell(J.currentCell);if(J.destinationCell!==null){J.destinationLocation=B.getCellTopLeft(J.destinationCell);var event=new qx.event.type.Event();event.setType(a);J.eventListener(event);}
else {var event=new qx.event.type.Event();event.setType(n);J.eventListener(event);}
;break;case demobrowser.demo.util.FSMMaze.Direction.NORTH:if(J.bLookSideways){if(B.getWestCell(J.currentCell)!==null){new demobrowser.demo.util.FSMMouse(J,B,demobrowser.demo.util.FSMMaze.Direction.WEST,D);}
;if(B.getEastCell(J.currentCell)!==null){new demobrowser.demo.util.FSMMouse(J,B,demobrowser.demo.util.FSMMaze.Direction.EAST,D);}
;}
;J.bLookSideways=true;if(J.bLookBehind&&B.getSouthCell(J.currentCell)!==null){new demobrowser.demo.util.FSMMouse(J,B,demobrowser.demo.util.FSMMaze.Direction.SOUTH,D);J.bLookBehind=false;}
;J.destinationCell=B.getNorthCell(J.currentCell);if(J.destinationCell!==null){J.destinationLocation=B.getCellTopLeft(J.destinationCell);var event=new qx.event.type.Event();event.setType(a);J.eventListener(event);}
else {var event=new qx.event.type.Event();event.setType(n);J.eventListener(event);}
;break;};J.bLookBehind=false;}
,"events":{"Die":w,"KickInTheAss":m}});this.addState(z);var C=new qx.util.fsm.Transition(w,{"nextState":q});z.addTransition(C);var C=new qx.util.fsm.Transition(m,{"nextState":b});z.addTransition(C);var z=new qx.util.fsm.State(q,{"onentry":function(M,L){M.oneshot(1000/demobrowser.demo.util.FSMMouse.ticksPerSec);}
,"events":{"oneshot":qx.util.fsm.FiniteStateMachine.EventHandling.PREDICATE}});this.addState(z);var C=new qx.util.fsm.Transition(f,{"predicate":function(N,event){return N.opacity>0.0;}
,"nextState":q,"ontransition":function(O,event){O.opacity-=1/(demobrowser.demo.util.FSMMouse.fadeSeconds*demobrowser.demo.util.FSMMouse.ticksPerSec);if(O.opacity<0.0){O.opacity=0.0;}
;O.mouseImage.setOpacity(O.opacity);}
});z.addTransition(C);var C=new qx.util.fsm.Transition(c,{"nextState":h});z.addTransition(C);var z=new qx.util.fsm.State(b,{"onentry":function(Q,P){Q.oneshot(1000/demobrowser.demo.util.FSMMouse.ticksPerSec);}
,"events":{"oneshot":qx.util.fsm.FiniteStateMachine.EventHandling.PREDICATE}});this.addState(z);var C=new qx.util.fsm.Transition(r,{"predicate":function(R,event){switch(R.facing){case demobrowser.demo.util.FSMMaze.Direction.WEST:return R.currentLocation.left>R.destinationLocation.left;case demobrowser.demo.util.FSMMaze.Direction.SOUTH:return R.currentLocation.top<R.destinationLocation.top;case demobrowser.demo.util.FSMMaze.Direction.EAST:return R.currentLocation.left<R.destinationLocation.left;case demobrowser.demo.util.FSMMaze.Direction.NORTH:return R.currentLocation.top>R.destinationLocation.top;};}
,"nextState":b,"ontransition":function(T,event){var S=Math.ceil(B.cellSize/(demobrowser.demo.util.FSMMouse.moveSeconds*demobrowser.demo.util.FSMMouse.ticksPerSec));switch(T.facing){case demobrowser.demo.util.FSMMaze.Direction.WEST:T.currentLocation.left=Math.round(T.currentLocation.left-S);T.mouseImage.setLayoutProperties({left:T.currentLocation.left,top:T.currentLocation.top});break;case demobrowser.demo.util.FSMMaze.Direction.SOUTH:T.currentLocation.top=Math.round(T.currentLocation.top+S);T.mouseImage.setLayoutProperties({left:T.currentLocation.left,top:T.currentLocation.top});break;case demobrowser.demo.util.FSMMaze.Direction.EAST:T.currentLocation.left=Math.round(T.currentLocation.left+S);T.mouseImage.setLayoutProperties({left:T.currentLocation.left,top:T.currentLocation.top});break;case demobrowser.demo.util.FSMMaze.Direction.NORTH:T.currentLocation.top=Math.round(T.currentLocation.top-S);T.mouseImage.setLayoutProperties({left:T.currentLocation.left,top:T.currentLocation.top});break;};}
});z.addTransition(C);var C=new qx.util.fsm.Transition(s,{"nextState":o,"ontransition":function(U,event){U.currentCell=U.destinationCell;U.traversed.push(U.currentCell);}
});z.addTransition(C);var z=new qx.util.fsm.State(h,{"onentry":function(W,V){qx.event.Timer.once(function(){D.remove(this.mouseImage);this.mouseImage.dispose();this.mouseImage=null;this.dispose();}
,W,0);}
,"events":{}});this.addState(z);this.start();}
,members:{opacity:0.0,oneshot:function(X){var Y=new qx.event.Timer(X);Y.addListener(j,function(){Y.dispose();var event=new qx.event.type.Event();event.setType(t);this.eventListener(event);}
,this);Y.start();}
}});}
)();
(function(){var a="JosefinSlab",b="Verdana",c="qx/decoration/Indigo/font/JosefinSlab-SemiBold.ttf",d="qx/decoration/Indigo/font/JosefinSlab-SemiBold.woff",e="Lucida Grande",f="sans-serif",g="qx.theme.indigo.Font",h="monospace",i="font",j="serif",k="DejaVu Sans",l="Courier New",m="DejaVu Sans Mono";qx.Theme.define(g,{fonts:{"default":{size:12,family:[e,k,b,f],color:i,lineHeight:1.8},"bold":{size:12,family:[e,k,b,f],bold:true,color:i,lineHeight:1.8},"headline":{size:22,family:[j],sources:[{family:a,source:[d,c]}]},"small":{size:11,family:[e,k,b,f],color:i,lineHeight:1.8},"monospace":{size:11,family:[m,l,h],color:i,lineHeight:1.8}}});}
)();
(function(){var a="table-row-background-even",b="button-box-pressed-top-right",c="arrow-left",d="datechooser-weekday",e="arrow-up",f="menu-slidebar-button",g="background-disabled",h="background",j="scrollbar/button",k="icon/16/actions/dialog-ok.png",l="border-invalid",m="combobox/button",n="button-box-top-right",o="slidebar",p="#BABABA",q="button-box-hovered-bottom-right",r="move-frame",s="nodrop",t="window-caption",u="table-header-cell",v="button-box-hovered-top-right",w="row-layer",x="treevirtual-plus-only",y="-right",z="button-frame",A="radiobutton",B="move",C="treevirtual-plus-end",D="background-selected-dark",E="vertical",F="list",G="arrow-down-small",H="arrow-down",I="arrow-",J="-pressed",K="tooltip-error",L="button-box",M="window-restore",N="bold",O="resize-frame",P="text-disabled",Q="scroll-knob",R="tree-minus",S="statusbar",T="white",U="tabview-close",V="down",W="text",X="checkbox",Y="atom/label",eJ="button-box-pressed-bottom-right",eF="button-box-pressed-hovered-bottom-right",eK="background-disabled-checked",eG="groupbox",eH="icon/16/actions/dialog-cancel.png",eE="qx.theme.simple.Appearance",eI="menu-slidebar",eP="-left",eQ="treevirtual-minus-cross",eW="arrow-right",eR="background-pane",eL="table-",eM="scroll-knob-pressed",eN="icon",eO="arrow-rewind",eV="icon/16/apps/office-calendar.png",fz="headline",eX="treevirtual-plus-start",eY="treevirtual-minus-end",eS="middle",eT="-middle",gA="tree",eU="checkbox-undetermined",fa="button-box-bottom-right",fb="datechooser-week",fc="menu-button",fh="descending",fi="splitpane",fj="slidebar/button-forward",fd="toolbar-separator",fe="arrow-up-small",ff="progressive-table-header",fg="invalid",fn="icon/16/places/folder.png",fo="combobox",fp="tree-folder",fq="horizontal",fk="icon/16/mimetypes/text-plain.png",fl="border-light-shadow",gB="tree-plus",fm="text-placeholder",fu="scrollbar",fv="dragover",gG="treevirtual-plus-cross",fw="scrollarea",fr="treevirtual-line",fs="text-selected",gE="cell",ft="menu-checkbox",fx="best-fit",fy="button-border",fK="treevirtual-cross",fJ="default",fI="tabview-page-button-right",fO="button-hover",fN="tabview-page-button-top",fM="tabview-page-button-bottom",fL="inset",fD="tabview-page-button-left",fC="button",fB="menubar-button-pressed",fA="progressbar",fH="tree-file",fG="tooltip-text",fF="keep-align",fE="center",fV="datechooser/button",fU="alias",fT="datechooser",fS="toolbar-button",ga="ascending",fY="button-box-hovered-right-borderless",fX="button-box-right-borderless",fW="lead-item",fR="checkbox-focused",fQ="selectbox",fP="window-minimize",gl="right",gk="button-box-pressed-hovered-top-right",gj="main",gp="image",go="knob-",gn="blank",gm="popup",ge="treevirtual-folder",gd="treevirtual-minus-only",gc="treevirtual-minus-start",gb="checkbox-checked",gi="virtual-list",gh="background-selected",gg="window",gf="-hovered",gv="window-active",gu="table-header-cell-first",gt="left",gs="button-box-pressed-right-borderless",gz="scroll-knob-hovered",gy="up",gx="atom",gw="main-dark",gr="select-column-order",gq="button-box-pressed-hovered-right-borderless",ed="-invalid",ec="scroll-knob-pressed-hovered",gH="white-box",ea="datechooser-week-header",eb="widget",dY="menubar-button-hovered",gF="table-header-column-button",dW="window-close",dX="datechooser-date-pane",dV="cursor-",gC="-focused",dT="menu-radiobutton",dU="window-maximize",dS="treevirtual-end",em="button-box-hovered",en="table",ek="arrow-forward",el="right-top",ei="pointer",ej="focused-inset",eh="slidebar/button-backward",dR="light-background",ef="copy",eg="table-row-background-selected",ee="radiobutton-focused",eA="",ey="textfield",ez="scrollbar/slider/knob",ew="button-box-pressed-hovered",ex="atom/icon",ev="spinner",eB="tooltip",et="-disabled",eu="label",es="table-header",gD="progressive-table-header-cell",eq="menu-separator",er="-invert",eo="link",ep="icon/16/places/folder-open.png",eC="icon/16/actions/view-refresh.png",eD="button-box-pressed";qx.Theme.define(eE,{appearances:{"widget":{},"label":{style:function(gI){return {textColor:gI.disabled?P:undefined};}
},"image":{style:function(gJ){return {opacity:!gJ.replacement&&gJ.disabled?0.3:undefined};}
},"atom":{},"atom/label":eu,"atom/icon":gp,"root":{style:function(gK){return {backgroundColor:h,textColor:W,font:fJ};}
},"popup":{style:function(gL){return {decorator:gm,backgroundColor:eR};}
},"tooltip":{include:gm,style:function(gM){return {backgroundColor:eB,textColor:fG,decorator:eB,padding:[1,3,2,3],offset:[10,5,5,5]};}
},"tooltip/atom":gx,"tooltip-error":{include:eB,style:function(gN){return {textColor:fs,showTimeout:100,hideTimeout:10000,decorator:K,font:N,backgroundColor:undefined};}
},"tooltip-error/atom":gx,"iframe":{style:function(gO){return {backgroundColor:T,decorator:gw};}
},"move-frame":{style:function(gP){return {decorator:gw};}
},"resize-frame":r,"dragdrop-cursor":{style:function(gQ){var gR=s;if(gQ.copy){gR=ef;}
else if(gQ.move){gR=B;}
else if(gQ.alias){gR=fU;}
;return {source:qx.theme.simple.Image.URLS[dV+gR],position:el,offset:[2,16,2,6]};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fC,include:fC,style:function(gS){return {icon:qx.theme.simple.Image.URLS[I+(gS.vertical?V:gl)]};}
},"slidebar/button-backward":{alias:fC,include:fC,style:function(gT){return {icon:qx.theme.simple.Image.URLS[I+(gT.vertical?gy:gt)]};}
},"table":eb,"table/statusbar":{style:function(gU){return {decorator:S,padding:[2,5]};}
},"table/column-button":{alias:fC,style:function(gV){return {decorator:gF,padding:3,icon:qx.theme.simple.Image.URLS[gr]};}
},"table-column-reset-button":{include:fc,alias:fc,style:function(){return {icon:eC};}
},"table-scroller/scrollbar-x":fu,"table-scroller/scrollbar-y":fu,"table-scroller":eb,"table-scroller/header":{style:function(){return {decorator:es};}
},"table-scroller/pane":{},"table-scroller/focus-indicator":{style:function(gW){return {decorator:gj};}
},"table-scroller/resize-line":{style:function(gX){return {backgroundColor:fy,width:3};}
},"table-header-cell":{alias:gx,style:function(gY){return {decorator:gY.first?gu:u,minWidth:13,font:N,paddingTop:3,paddingLeft:5,cursor:gY.disabled?undefined:ei,sortIcon:gY.sorted?(qx.theme.simple.Image.URLS[eL+(gY.sortedAscending?ga:fh)]):undefined};}
},"table-header-cell/icon":{include:ex,style:function(ha){return {paddingRight:5};}
},"table-header-cell/sort-icon":{style:function(hb){return {alignY:eS,alignX:gl,paddingRight:5};}
},"table-editor-textfield":{include:ey,style:function(hc){return {decorator:undefined,padding:[2,2]};}
},"table-editor-selectbox":{include:fQ,alias:fQ,style:function(hd){return {padding:[0,2]};}
},"table-editor-combobox":{include:fo,alias:fo,style:function(he){return {decorator:undefined};}
},"progressive-table-header":{style:function(hf){return {decorator:ff};}
},"progressive-table-header-cell":{style:function(hg){return {decorator:gD,padding:[5,6,5,6]};}
},"treevirtual":{include:ey,alias:en,style:function(hh,hi){return {padding:[hi.padding[0]+2,hi.padding[1]+1]};}
},"treevirtual-folder":{style:function(hj){return {icon:(hj.opened?ep:fn),opacity:hj.drag?0.5:undefined};}
},"treevirtual-file":{include:ge,alias:ge,style:function(hk){return {icon:fk,opacity:hk.drag?0.5:undefined};}
},"treevirtual-line":{style:function(hl){return {icon:qx.theme.simple.Image.URLS[fr]};}
},"treevirtual-contract":{style:function(hm){return {icon:qx.theme.simple.Image.URLS[R]};}
},"treevirtual-expand":{style:function(hn){return {icon:qx.theme.simple.Image.URLS[gB]};}
},"treevirtual-only-contract":{style:function(ho){return {icon:qx.theme.simple.Image.URLS[gd]};}
},"treevirtual-only-expand":{style:function(hp){return {icon:qx.theme.simple.Image.URLS[x]};}
},"treevirtual-start-contract":{style:function(hq){return {icon:qx.theme.simple.Image.URLS[gc]};}
},"treevirtual-start-expand":{style:function(hr){return {icon:qx.theme.simple.Image.URLS[eX]};}
},"treevirtual-end-contract":{style:function(hs){return {icon:qx.theme.simple.Image.URLS[eY]};}
},"treevirtual-end-expand":{style:function(ht){return {icon:qx.theme.simple.Image.URLS[C]};}
},"treevirtual-cross-contract":{style:function(hu){return {icon:qx.theme.simple.Image.URLS[eQ]};}
},"treevirtual-cross-expand":{style:function(hv){return {icon:qx.theme.simple.Image.URLS[gG]};}
},"treevirtual-end":{style:function(hw){return {icon:qx.theme.simple.Image.URLS[dS]};}
},"treevirtual-cross":{style:function(hx){return {icon:qx.theme.simple.Image.URLS[fK]};}
},"resizer":{style:function(hy){return {decorator:gw};}
},"splitpane":{},"splitpane/splitter":{style:function(hz){return {backgroundColor:dR};}
},"splitpane/splitter/knob":{style:function(hA){return {source:qx.theme.simple.Image.URLS[go+(hA.horizontal?fq:E)],padding:2};}
},"splitpane/slider":{style:function(hB){return {backgroundColor:fl,opacity:0.3};}
},"menu":{style:function(hC){var hD={backgroundColor:h,decorator:gj,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:hC.submenu||hC.contextmenu?fx:fF};if(hC.submenu){hD.position=el;hD.offset=[-2,-3];}
;if(hC.contextmenu){hD.offset=4;}
;return hD;}
},"menu/slidebar":eI,"menu-slidebar":eb,"menu-slidebar-button":{style:function(hE){return {backgroundColor:hE.hovered?gh:undefined,padding:6,center:true};}
},"menu-slidebar/button-backward":{include:f,style:function(hF){return {icon:qx.theme.simple.Image.URLS[e+(hF.hovered?er:eA)]};}
},"menu-slidebar/button-forward":{include:f,style:function(hG){return {icon:qx.theme.simple.Image.URLS[H+(hG.hovered?er:eA)]};}
},"menu-separator":{style:function(hH){return {height:0,decorator:eq,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};}
},"menu-button":{alias:gx,style:function(hI){return {backgroundColor:hI.selected?gh:undefined,textColor:hI.selected?fs:undefined,padding:[2,6]};}
},"menu-button/icon":{include:gp,style:function(hJ){return {alignY:eS};}
},"menu-button/label":{include:eu,style:function(hK){return {alignY:eS,padding:1};}
},"menu-button/shortcut":{include:eu,style:function(hL){return {alignY:eS,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:gp,style:function(hM){return {source:qx.theme.simple.Image.URLS[eW+(hM.selected?er:eA)],alignY:eS};}
},"menu-checkbox":{alias:fc,include:fc,style:function(hN){return {icon:!hN.checked?undefined:qx.theme.simple.Image.URLS[ft+(hN.selected?er:eA)]};}
},"menu-radiobutton":{alias:fc,include:fc,style:function(hO){return {icon:!hO.checked?undefined:qx.theme.simple.Image.URLS[dT+(hO.selected?er:eA)]};}
},"menubar":{style:function(hP){return {backgroundColor:dR,padding:[4,2]};}
},"menubar-button":{style:function(hQ){var hS;var hR=[2,6];if(!hQ.disabled){if(hQ.pressed){hS=fB;hR=[1,5,2,5];}
else if(hQ.hovered){hS=dY;hR=[1,5];}
;}
;return {padding:hR,cursor:hQ.disabled?undefined:ei,textColor:eo,decorator:hS};}
},"virtual-list":F,"virtual-list/row-layer":w,"row-layer":eb,"column-layer":eb,"group-item":{include:eu,alias:eu,style:function(hT){return {padding:4,backgroundColor:p,textColor:T,font:N};}
},"virtual-selectbox":fQ,"virtual-selectbox/dropdown":gm,"virtual-selectbox/dropdown/list":{alias:gi},"virtual-combobox":fo,"virtual-combobox/dropdown":gm,"virtual-combobox/dropdown/list":{alias:gi},"virtual-tree":{include:gA,alias:gA,style:function(hU){return {itemHeight:21};}
},"virtual-tree-folder":fp,"virtual-tree-file":fH,"cell":{style:function(hV){return {backgroundColor:hV.selected?eg:a,textColor:hV.selected?fs:W,padding:[3,6]};}
},"cell-string":gE,"cell-number":{include:gE,style:function(hW){return {textAlign:gl};}
},"cell-image":gE,"cell-boolean":gE,"cell-atom":gE,"cell-date":gE,"cell-html":gE,"scrollbar":{},"scrollbar/slider":{},"scrollbar/slider/knob":{style:function(hX){var hY=Q;if(!hX.disabled){if(hX.hovered&&!hX.pressed&&!hX.checked){hY=gz;}
else if(hX.hovered&&(hX.pressed||hX.checked)){hY=ec;}
else if(hX.pressed||hX.checked){hY=eM;}
;}
;return {height:14,width:14,cursor:hX.disabled?undefined:ei,decorator:hY,minHeight:hX.horizontal?undefined:20,minWidth:hX.horizontal?20:undefined};}
},"scrollbar/button":{style:function(ia){var ib={};ib.padding=4;var ic=eA;if(ia.left){ic=gt;ib.marginRight=2;}
else if(ia.right){ic+=gl;ib.marginLeft=2;}
else if(ia.up){ic+=gy;ib.marginBottom=2;}
else {ic+=V;ib.marginTop=2;}
;ib.icon=qx.theme.simple.Image.URLS[I+ic];ib.cursor=ei;ib.decorator=L;return ib;}
},"scrollbar/button-begin":j,"scrollbar/button-end":j,"scrollarea/corner":{style:function(id){return {backgroundColor:h};}
},"scrollarea":eb,"scrollarea/pane":eb,"scrollarea/scrollbar-x":fu,"scrollarea/scrollbar-y":fu,"textfield":{style:function(ie){var ih;if(ie.disabled){ih=P;}
else if(ie.showingPlaceholder){ih=fm;}
else {ih=undefined;}
;var ii;var ig;if(ie.disabled){ii=fL;ig=[2,3];}
else if(ie.invalid){ii=l;ig=[1,2];}
else if(ie.focused){ii=ej;ig=[1,2];}
else {ig=[2,3];ii=fL;}
;return {decorator:ii,padding:ig,textColor:ih,backgroundColor:ie.disabled?g:T};}
},"textarea":ey,"radiobutton/icon":{style:function(ij){var ik=A;if(ij.focused&&!ij.invalid){ik=ee;}
;ik+=ij.invalid&&!ij.disabled?ed:eA;var il;if(ij.disabled&&ij.checked){il=eK;}
else if(ij.disabled){il=g;}
else if(ij.checked){il=gh;}
;return {decorator:ik,width:12,height:12,backgroundColor:il};}
},"radiobutton":{style:function(im){return {icon:qx.theme.simple.Image.URLS[gn]};}
},"form-renderer-label":{include:eu,style:function(){return {paddingTop:3};}
},"checkbox":{alias:gx,style:function(io){var ip;if(io.checked){ip=qx.theme.simple.Image.URLS[gb];}
else if(io.undetermined){ip=qx.theme.simple.Image.URLS[eU];}
else {ip=qx.theme.simple.Image.URLS[gn];}
;return {icon:ip,gap:6};}
},"checkbox/icon":{style:function(iq){var is=X;if(iq.focused&&!iq.invalid){is=fR;}
;is+=iq.invalid&&!iq.disabled?ed:eA;var ir;if(iq.checked){ir=2;}
else if(iq.undetermined){ir=[4,2];}
;return {decorator:is,width:12,height:12,padding:ir,backgroundColor:T};}
},"spinner":{style:function(it){return {textColor:it.disabled?P:undefined};}
},"spinner/textfield":ey,"spinner/upbutton":{alias:m,include:m,style:function(iu){var iv=n;if(iu.hovered&&!iu.pressed&&!iu.checked){iv=v;}
else if(iu.hovered&&(iu.pressed||iu.checked)){iv=gk;}
else if(iu.pressed||iu.checked){iv=b;}
;return {icon:qx.theme.simple.Image.URLS[fe],decorator:iv,width:17};}
},"spinner/downbutton":{alias:m,include:m,style:function(iw){var ix=fa;if(iw.hovered&&!iw.pressed&&!iw.checked){ix=q;}
else if(iw.hovered&&(iw.pressed||iw.checked)){ix=eF;}
else if(iw.pressed||iw.checked){ix=eJ;}
;return {icon:qx.theme.simple.Image.URLS[G],decorator:ix,width:17};}
},"selectbox":z,"selectbox/atom":gx,"selectbox/popup":gm,"selectbox/list":{alias:F,include:F,style:function(){return {decorator:undefined};}
},"selectbox/arrow":{include:gp,style:function(iy){return {source:qx.theme.simple.Image.URLS[H],paddingRight:4,paddingLeft:5};}
},"combobox":{},"combobox/button":{alias:z,include:z,style:function(iz){var iA=fX;if(iz.hovered&&!iz.pressed&&!iz.checked){iA=fY;}
else if(iz.hovered&&(iz.pressed||iz.checked)){iA=gq;}
else if(iz.pressed||iz.checked){iA=gs;}
;return {icon:qx.theme.simple.Image.URLS[H],decorator:iA,padding:[0,5],width:19};}
},"combobox/popup":gm,"combobox/list":{alias:F},"combobox/textfield":ey,"datefield":ey,"datefield/button":{alias:m,include:m,style:function(iB){return {icon:eV,padding:[0,0,0,3],backgroundColor:undefined,decorator:undefined,width:19};}
},"datefield/textfield":{alias:ey,include:ey,style:function(iC){return {decorator:undefined,padding:0};}
},"datefield/list":{alias:fT,include:fT,style:function(iD){return {decorator:undefined};}
},"list":{alias:fw,include:ey},"listitem":{alias:gx,style:function(iE){var iF=[3,5,3,5];if(iE.lead){iF=[2,4,2,4];}
;if(iE.dragover){iF[2]-=2;}
;var iG;if(iE.selected){iG=gh;if(iE.disabled){iG+=et;}
;}
;return {gap:4,padding:iF,backgroundColor:iG,textColor:iE.selected?fs:undefined,decorator:iE.lead?fW:iE.dragover?fv:undefined,opacity:iE.drag?0.5:undefined};}
},"slider":{style:function(iH){var iJ;var iI;if(iH.disabled){iJ=fL;iI=[2,3];}
else if(iH.invalid){iJ=l;iI=[1,2];}
else if(iH.focused){iJ=ej;iI=[1,2];}
else {iI=[2,3];iJ=fL;}
;return {decorator:iJ,padding:iI};}
},"slider/knob":ez,"button-frame":{alias:gx,style:function(iK){var iL=L;if(!iK.disabled){if(iK.hovered&&!iK.pressed&&!iK.checked){iL=em;}
else if(iK.hovered&&(iK.pressed||iK.checked)){iL=ew;}
else if(iK.pressed||iK.checked){iL=eD;}
;}
;if(iK.invalid&&!iK.disabled){iL+=ed;}
else if(iK.focused){iL+=gC;}
;return {decorator:iL,padding:[3,8],cursor:iK.disabled?undefined:ei,minWidth:5,minHeight:5};}
},"button-frame/label":{alias:Y,style:function(iM){return {textColor:iM.disabled?P:undefined};}
},"button":{alias:z,include:z,style:function(iN){return {center:true};}
},"hover-button":{alias:fC,include:fC,style:function(iO){return {decorator:iO.hovered?fO:undefined};}
},"menubutton":{include:fC,alias:fC,style:function(iP){return {icon:qx.theme.simple.Image.URLS[H],iconPosition:gl};}
},"splitbutton":{},"splitbutton/button":{alias:gx,style:function(iQ){var iR=L;if(!iQ.disabled){if(iQ.pressed||iQ.checked){iR+=J;}
;if(iQ.hovered){iR+=gf;}
;}
;if(iQ.focused){iR+=gC;}
;iR+=eP;return {decorator:iR,padding:[3,8],cursor:iQ.disabled?undefined:ei};}
},"splitbutton/arrow":{style:function(iS){var iT=L;if(!iS.disabled){if(iS.pressed||iS.checked){iT+=J;}
;if(iS.hovered){iT+=gf;}
;}
;if(iS.focused){iT+=gC;}
;iT+=y;return {icon:qx.theme.simple.Image.URLS[H],decorator:iT,cursor:iS.disabled?undefined:ei,padding:[3,4]};}
},"groupbox":{},"groupbox/legend":{alias:gx,style:function(iU){return {textColor:iU.invalid?fg:undefined,padding:5,margin:4,font:N};}
},"groupbox/frame":{style:function(iV){return {backgroundColor:h,padding:[6,9],margin:[18,2,2,2],decorator:gH};}
},"check-groupbox":eG,"check-groupbox/legend":{alias:X,include:X,style:function(iW){return {textColor:iW.invalid?fg:undefined,padding:5,margin:4,font:N};}
},"radio-groupbox":eG,"radio-groupbox/legend":{alias:A,include:A,style:function(iX){return {textColor:iX.invalid?fg:undefined,padding:5,margin:4,font:N};}
},"tree-folder/open":{include:gp,style:function(iY){return {source:iY.opened?qx.theme.simple.Image.URLS[R]:qx.theme.simple.Image.URLS[gB]};}
},"tree-folder":{style:function(ja){var jb;if(ja.selected){jb=gh;if(ja.disabled){jb+=et;}
;}
;return {padding:[2,8,2,5],icon:ja.opened?ep:fn,backgroundColor:jb,iconOpened:ep,opacity:ja.drag?0.5:undefined};}
},"tree-folder/icon":{include:gp,style:function(jc){return {padding:[0,4,0,0]};}
},"tree-folder/label":{style:function(jd){return {padding:[1,2],textColor:jd.selected&&!jd.disabled?fs:undefined};}
},"tree-file":{include:fp,alias:fp,style:function(je){return {icon:fk,opacity:je.drag?0.5:undefined};}
},"tree":{include:F,alias:F,style:function(jf){return {contentPadding:jf.invalid&&!jf.disabled?[3,0]:[4,1],padding:jf.focused?0:1};}
},"window":{style:function(jg){return {contentPadding:[10,10,10,10],backgroundColor:h,decorator:jg.maximized?undefined:jg.active?gv:gg};}
},"window-resize-frame":O,"window/pane":{},"window/captionbar":{style:function(jh){return {backgroundColor:jh.active?dR:g,padding:8,font:N,decorator:t};}
},"window/icon":{style:function(ji){return {marginRight:4};}
},"window/title":{style:function(jj){return {cursor:fJ,font:N,marginRight:20,alignY:eS};}
},"window/minimize-button":{alias:fC,style:function(jk){return {icon:qx.theme.simple.Image.URLS[fP],padding:[1,2],cursor:jk.disabled?undefined:ei};}
},"window/restore-button":{alias:fC,style:function(jl){return {icon:qx.theme.simple.Image.URLS[M],padding:[1,2],cursor:jl.disabled?undefined:ei};}
},"window/maximize-button":{alias:fC,style:function(jm){return {icon:qx.theme.simple.Image.URLS[dU],padding:[1,2],cursor:jm.disabled?undefined:ei};}
},"window/close-button":{alias:fC,style:function(jn){return {marginLeft:2,icon:qx.theme.simple.Image.URLS[dW],padding:[1,2],cursor:jn.disabled?undefined:ei};}
},"window/statusbar":{style:function(jo){return {decorator:S,padding:[2,6]};}
},"window/statusbar-text":eu,"datechooser":{style:function(jp){return {decorator:gj,minWidth:220};}
},"datechooser/navigation-bar":{style:function(jq){return {backgroundColor:h,textColor:jq.disabled?P:jq.invalid?fg:undefined,padding:[2,10]};}
},"datechooser/last-year-button-tooltip":eB,"datechooser/last-month-button-tooltip":eB,"datechooser/next-year-button-tooltip":eB,"datechooser/next-month-button-tooltip":eB,"datechooser/last-year-button":fV,"datechooser/last-month-button":fV,"datechooser/next-year-button":fV,"datechooser/next-month-button":fV,"datechooser/button/icon":{},"datechooser/button":{style:function(jr){var js={width:17,show:eN,cursor:jr.disabled?undefined:ei};if(jr.lastYear){js.icon=qx.theme.simple.Image.URLS[eO];}
else if(jr.lastMonth){js.icon=qx.theme.simple.Image.URLS[c];}
else if(jr.nextYear){js.icon=qx.theme.simple.Image.URLS[ek];}
else if(jr.nextMonth){js.icon=qx.theme.simple.Image.URLS[eW];}
;return js;}
},"datechooser/month-year-label":{style:function(jt){return {font:N,textAlign:fE};}
},"datechooser/date-pane":{style:function(ju){return {decorator:dX,backgroundColor:h};}
},"datechooser/weekday":{style:function(jv){return {decorator:d,font:N,textAlign:fE,textColor:jv.disabled?P:jv.weekend?D:h,backgroundColor:jv.weekend?h:D,paddingTop:2};}
},"datechooser/day":{style:function(jw){return {textAlign:fE,decorator:jw.today?gj:undefined,textColor:jw.disabled?P:jw.selected?fs:jw.otherMonth?P:undefined,backgroundColor:jw.disabled?undefined:jw.selected?gh:undefined,padding:jw.today?[1,3]:[2,4]};}
},"datechooser/week":{style:function(jx){return {textAlign:fE,textColor:D,padding:[2,4],decorator:jx.header?ea:fb};}
},"progressbar":{style:function(jy){return {decorator:fA,padding:1,backgroundColor:T,width:200,height:20};}
},"progressbar/progress":{style:function(jz){return {backgroundColor:jz.disabled?eK:gh};}
},"toolbar":{style:function(jA){return {backgroundColor:dR,padding:0};}
},"toolbar/part":{style:function(jB){return {margin:[0,15]};}
},"toolbar/part/container":{},"toolbar/part/handle":{},"toolbar-separator":{style:function(jC){return {decorator:fd,margin:[7,0],width:4};}
},"toolbar-button":{alias:gx,style:function(jD){var jF=L;if(jD.disabled){jF=L;}
else if(jD.hovered&&!jD.pressed&&!jD.checked){jF=em;}
else if(jD.hovered&&(jD.pressed||jD.checked)){jF=ew;}
else if(jD.pressed||jD.checked){jF=eD;}
;if(jD.left){jF+=eP;}
else if(jD.right){jF+=y;}
else if(jD.middle){jF+=eT;}
;var jE=[7,10];if(jD.left||jD.middle||jD.right){jE=[7,0];}
;return {cursor:jD.disabled?undefined:ei,decorator:jF,margin:jE,padding:[3,5]};}
},"toolbar-menubutton":{alias:fS,include:fS,style:function(jG){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:gp,include:gp,style:function(jH){return {source:qx.theme.simple.Image.URLS[H],cursor:jH.disabled?undefined:ei,padding:[0,5],marginLeft:2};}
},"toolbar-splitbutton":{},"toolbar-splitbutton/button":{alias:fS,include:fS,style:function(jI){var jK=L;if(jI.disabled){jK=L;}
else if(jI.hovered&&!jI.pressed&&!jI.checked){jK=em;}
else if(jI.hovered&&(jI.pressed||jI.checked)){jK=ew;}
else if(jI.pressed||jI.checked){jK=eD;}
;var jJ=[7,0,7,10];if(jI.left||jI.middle||jI.right){jJ=[7,0,7,0];}
;if(jI.left){jK+=eP;}
else if(jI.right){jK+=eT;}
else if(jI.middle){jK+=eT;}
else {jK+=eP;}
;return {icon:qx.theme.simple.Image.URLS[H],decorator:jK,margin:jJ};}
},"toolbar-splitbutton/arrow":{alias:fS,include:fS,style:function(jL){var jN=L;if(jL.disabled){jN=L;}
else if(jL.hovered&&!jL.pressed&&!jL.checked){jN=em;}
else if(jL.hovered&&(jL.pressed||jL.checked)){jN=ew;}
else if(jL.pressed||jL.checked){jN=eD;}
;var jM=[7,10,7,0];if(jL.left||jL.middle||jL.right){jM=[7,0,7,0];}
;if(jL.left){jN+=eT;}
else if(jL.right){jN+=y;}
else if(jL.middle){jN+=eT;}
else {jN+=y;}
;return {icon:qx.theme.simple.Image.URLS[H],decorator:jN,margin:jM};}
},"tabview":{},"tabview/bar":{alias:o,style:function(jO){var jP=0,jS=0,jQ=0,jR=0;if(jO.barTop){jQ-=1;}
else if(jO.barBottom){jP-=1;}
else if(jO.barRight){jR-=1;}
else {jS-=1;}
;return {marginBottom:jQ,marginTop:jP,marginLeft:jR,marginRight:jS};}
},"tabview/bar/button-forward":{include:fj,alias:fj,style:function(jT){if(jT.barTop){return {marginTop:4,marginBottom:2,decorator:null};}
else if(jT.barBottom){return {marginTop:2,marginBottom:4,decorator:null};}
else if(jT.barLeft){return {marginLeft:4,marginRight:2,decorator:null};}
else {return {marginLeft:2,marginRight:4,decorator:null};}
;}
},"tabview/bar/button-backward":{include:eh,alias:eh,style:function(jU){if(jU.barTop){return {marginTop:4,marginBottom:2,decorator:null};}
else if(jU.barBottom){return {marginTop:2,marginBottom:4,decorator:null};}
else if(jU.barLeft){return {marginLeft:4,marginRight:2,decorator:null};}
else {return {marginLeft:2,marginRight:4,decorator:null};}
;}
},"tabview/pane":{style:function(jV){return {backgroundColor:h,decorator:gj,padding:10};}
},"tabview-page":eb,"tabview-page/button":{style:function(jW){var jY;if(jW.barTop||jW.barBottom){var jX=[8,16,8,13];}
else {var jX=[8,4,8,4];}
;if(jW.checked){if(jW.barTop){jY=fN;}
else if(jW.barBottom){jY=fM;}
else if(jW.barRight){jY=fI;}
else if(jW.barLeft){jY=fD;}
;}
else {for(var i=0;i<jX.length;i++ ){jX[i]+=1;}
;if(jW.barTop){jX[2]-=1;}
else if(jW.barBottom){jX[0]-=1;}
else if(jW.barRight){jX[3]-=1;}
else if(jW.barLeft){jX[1]-=1;}
;}
;return {zIndex:jW.checked?10:5,decorator:jY,textColor:jW.disabled?P:jW.checked?null:eo,padding:jX,cursor:ei};}
},"tabview-page/button/label":{alias:eu,style:function(ka){return {padding:[0,1,0,1]};}
},"tabview-page/button/icon":gp,"tabview-page/button/close-button":{alias:gx,style:function(kb){return {cursor:kb.disabled?undefined:ei,icon:qx.theme.simple.Image.URLS[U]};}
},"colorpopup":{alias:gm,include:gm,style:function(kc){return {padding:5};}
},"colorpopup/field":{style:function(kd){return {margin:2,width:14,height:14,backgroundColor:h,decorator:gw};}
},"colorpopup/selector-button":fC,"colorpopup/auto-button":fC,"colorpopup/preview-pane":eG,"colorpopup/current-preview":{style:function(ke){return {height:20,padding:4,marginLeft:4,decorator:gw,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(kf){return {height:20,padding:4,marginRight:4,decorator:gw,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:fC,include:fC,style:function(kg){return {icon:k};}
},"colorpopup/colorselector-cancelbutton":{alias:fC,include:fC,style:function(kh){return {icon:eH};}
},"colorselector":eb,"colorselector/control-bar":eb,"colorselector/visual-pane":eG,"colorselector/control-pane":eb,"colorselector/preset-grid":eb,"colorselector/colorbucket":{style:function(ki){return {decorator:gw,width:16,height:16};}
},"colorselector/preset-field-set":eG,"colorselector/input-field-set":{include:eG,alias:eG,style:function(){return {paddingTop:12};}
},"colorselector/preview-field-set":{include:eG,alias:eG,style:function(){return {paddingTop:12};}
},"colorselector/hex-field-composite":eb,"colorselector/hex-field":ey,"colorselector/rgb-spinner-composite":eb,"colorselector/rgb-spinner-red":ev,"colorselector/rgb-spinner-green":ev,"colorselector/rgb-spinner-blue":ev,"colorselector/hsb-spinner-composite":eb,"colorselector/hsb-spinner-hue":ev,"colorselector/hsb-spinner-saturation":ev,"colorselector/hsb-spinner-brightness":ev,"colorselector/preview-content-old":{style:function(kj){return {decorator:gw,width:50,height:25};}
},"colorselector/preview-content-new":{style:function(kk){return {decorator:gw,backgroundColor:T,width:50,height:25};}
},"colorselector/hue-saturation-field":{style:function(kl){return {decorator:gw,margin:5};}
},"colorselector/brightness-field":{style:function(km){return {decorator:gw,margin:[5,7]};}
},"colorselector/hue-saturation-pane":eb,"colorselector/hue-saturation-handle":eb,"colorselector/brightness-pane":eb,"colorselector/brightness-handle":eb,"app-header":{style:function(kn){return {font:fz,textColor:fs,backgroundColor:D,padding:[8,12]};}
},"app-header-label":{style:function(ko){return {paddingTop:5};}
},"app-splitpane":{alias:fi,style:function(kp){return {padding:[0,10,10,10],backgroundColor:dR};}
}}});}
)();
(function(){var a="decoration/table/select-column-order.png",b="decoration/treevirtual/end.gif",c="decoration/checkbox/checked.png",d="decoration/arrows/right.gif",e="decoration/window/maximize.gif",f="decoration/treevirtual/only_plus.gif",g="qx.theme.simple.Image",h="decoration/cursors/move.gif",i="decoration/menu/checkbox.gif",j="decoration/table/ascending.png",k="decoration/arrows/down-small.gif",l="decoration/checkbox/undetermined.png",m="decoration/splitpane/knob-vertical.png",n="decoration/arrows/forward.gif",o="decoration/arrows/up-small.gif",p="decoration/arrows/up-invert.gif",q="decoration/treevirtual/cross_plus.gif",r="decoration/window/minimize.gif",s="qx/static/blank.png",t="decoration/tree/minus.gif",u="decoration/arrows/down-invert.gif",v="decoration/arrows/right-invert.gif",w="decoration/cursors/alias.gif",x="decoration/splitpane/knob-horizontal.png",y="decoration/treevirtual/only_minus.gif",z="decoration/treevirtual/start_plus.gif",A="decoration/cursors/nodrop.gif",B="decoration/cursors/copy.gif",C="decoration/arrows/down.gif",D="decoration/treevirtual/end_plus.gif",E="decoration/treevirtual/start_minus.gif",F="decoration/treevirtual/cross.gif",G="decoration/menu/radiobutton.gif",H="decoration/treevirtual/line.gif",I="decoration/arrows/up.gif",J="decoration/tabview/close.gif",K="decoration/tree/plus.gif",L="decoration/arrows/rewind.gif",M="decoration/window/restore.gif",N="decoration/table/descending.png",O="decoration/menu/checkbox-invert.gif",P="decoration/treevirtual/cross_minus.gif",Q="decoration/treevirtual/end_minus.gif",R="decoration/arrows/left.gif",S="decoration/menu/radiobutton-invert.gif",T="decoration/window/close.gif";qx.Class.define(g,{extend:qx.core.Object,statics:{URLS:{"blank":s,"checkbox-checked":c,"checkbox-undetermined":l,"window-minimize":r,"window-maximize":e,"window-restore":M,"window-close":T,"cursor-copy":B,"cursor-move":h,"cursor-alias":w,"cursor-nodrop":A,"arrow-right":d,"arrow-left":R,"arrow-up":I,"arrow-down":C,"arrow-forward":n,"arrow-rewind":L,"arrow-down-small":k,"arrow-up-small":o,"arrow-up-invert":p,"arrow-down-invert":u,"arrow-right-invert":v,"knob-horizontal":x,"knob-vertical":m,"tree-minus":t,"tree-plus":K,"select-column-order":a,"table-ascending":j,"table-descending":N,"treevirtual-line":H,"treevirtual-minus-only":y,"treevirtual-plus-only":f,"treevirtual-minus-start":E,"treevirtual-plus-start":z,"treevirtual-minus-end":Q,"treevirtual-plus-end":D,"treevirtual-minus-cross":P,"treevirtual-plus-cross":q,"treevirtual-end":b,"treevirtual-cross":F,"menu-checkbox":i,"menu-checkbox-invert":O,"menu-radiobutton-invert":S,"menu-radiobutton":G,"tabview-close":J}}});}
)();
(function(){var a="knob-",b="window",c="vertical",d="font",e="window-caption-active",f="window-caption",g="headline",h="groupbox",i="background",j="splitpane",k="window-active",l="highlight",m="default",n="tree",o="middle",p="horizontal",q="app-header",r="text-selected",s="light-background",t="qx.theme.indigo.Appearance";qx.Theme.define(t,{extend:qx.theme.simple.Appearance,appearances:{"colorselector/input-field-set":{include:h,alias:h,style:function(){return {paddingTop:0};}
},"colorselector/preview-field-set":{include:h,alias:h,style:function(){return {paddingTop:0};}
},"toolbar":{style:function(u){return {backgroundColor:s,padding:[4,0]};}
},"splitpane/splitter/knob":{style:function(v){return {source:qx.theme.simple.Image.URLS[a+(v.horizontal?p:c)],padding:3};}
},"window":{style:function(w){return {contentPadding:[10,10,10,10],backgroundColor:w.maximized?i:undefined,decorator:w.maximized?undefined:w.active?k:b};}
},"window/captionbar":{style:function(x){var y=x.active&&!x.disabled;return {padding:[3,8,y?1:3,8],textColor:y?l:d,decorator:y?e:f};}
},"window/title":{style:function(z){return {cursor:m,font:m,marginRight:20,alignY:o};}
},"virtual-tree":{include:n,alias:n,style:function(A){return {itemHeight:27};}
},"app-header":{style:function(B){return {font:g,textColor:r,decorator:q,padding:10};}
},"app-header-label":{style:function(C){return {paddingTop:5};}
},"app-splitpane":{alias:j,style:function(D){return {padding:[0,10,10,10],backgroundColor:s};}
}}});}
)();
(function(){var a="Tango",b="qx/icon/Tango",c="qx.theme.icon.Tango";qx.Theme.define(c,{title:a,aliases:{"icon":b}});}
)();
(function(){var a="button-box-dark-pressed",b="checkbox",c="tabview-page-button-top",d="button-border",e="table-header",f="button-box-invalid",g="button-border-hovered",h="menubar-button-hovered",i="button-box-dark",j="#999999",k="button-box-hovered-focused",l="solid",m="qx/decoration/Simple",n="dotted",o="border-separator",p="shadow",q="window-border",r="tooltip-text",s="button-box-hovered",t="table-focus-indicator",u="button-box-pressed-invalid",v="dark-blue",w="scrollbar-dark",x="radiobutton",y="scroll-knob",z="qx.theme.simple.Decoration",A="button-box-focused",B="table-header-cell",C="button",D="scroll-knob-pressed",E="border-lead",F="button-box-pressed-hovered",G="border-main",H="#FFF",I="button-box-pressed-focused",J="invalid",K="button-box",L="background",M="scrollbar-bright",N="button-box-bright",O="window-border-inner",P="border-light-shadow",Q="white-box-border",R="background-selected",S="window",T="white",U="gray",V="border-light",W="button-box-bright-pressed",X="button-box-pressed-hovered-focused",Y="button-box-pressed";qx.Theme.define(z,{aliases:{decoration:m},decorations:{"border-blue":{style:{width:4,color:R}},"main":{style:{width:1,color:G}},"main-dark":{style:{width:1,color:d}},"popup":{style:{width:1,color:q,shadowLength:2,shadowBlurRadius:5,shadowColor:p}},"dragover":{style:{bottom:[2,l,v]}},"button-box":{style:{radius:3,width:1,color:d,gradientStart:[N,40],gradientEnd:[i,70],backgroundColor:N}},"button-box-pressed":{include:K,style:{gradientStart:[W,40],gradientEnd:[a,70],backgroundColor:W}},"button-box-pressed-hovered":{include:Y,style:{color:g}},"button-box-hovered":{include:K,style:{color:g}},"button-box-invalid":{include:K,style:{color:J}},"button-box-pressed-invalid":{include:Y,style:{color:J}},"button-box-hovered-invalid":{include:f},"button-box-pressed-hovered-invalid":{include:u},"button-box-focused":{include:K,style:{color:R}},"button-box-pressed-focused":{include:Y,style:{color:R}},"button-box-hovered-focused":{include:A},"button-box-pressed-hovered-focused":{include:I},"button-box-right":{include:K,style:{radius:[0,3,3,0]}},"button-box-pressed-right":{include:Y,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-right":{include:F,style:{radius:[0,3,3,0]}},"button-box-hovered-right":{include:s,style:{radius:[0,3,3,0]}},"button-box-focused-right":{include:A,style:{radius:[0,3,3,0]}},"button-box-hovered-focused-right":{include:k,style:{radius:[0,3,3,0]}},"button-box-pressed-focused-right":{include:I,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-focused-right":{include:X,style:{radius:[0,3,3,0]}},"button-box-right-borderless":{include:K,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-right-borderless":{include:Y,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-hovered-right-borderless":{include:F,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-hovered-right-borderless":{include:s,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-top-right":{include:K,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-top-right":{include:Y,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-hovered-top-right":{include:F,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-hovered-top-right":{include:s,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-bottom-right":{include:K,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-bottom-right":{include:Y,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-hovered-bottom-right":{include:F,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-hovered-bottom-right":{include:s,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-bottom-left":{include:K,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-bottom-left":{include:Y,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-hovered-bottom-left":{include:F,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-hovered-bottom-left":{include:s,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-top-left":{include:K,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-top-left":{include:Y,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-hovered-top-left":{include:F,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-hovered-top-left":{include:s,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-middle":{include:K,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-middle":{include:Y,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-hovered-middle":{include:F,style:{radius:0,width:[1,0,1,1]}},"button-box-hovered-middle":{include:s,style:{radius:0,width:[1,0,1,1]}},"button-box-left":{include:K,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-left":{include:Y,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-left":{include:F,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-left":{include:s,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-focused-left":{include:A,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-focused-left":{include:k,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-focused-left":{include:X,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-focused-left":{include:I,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"separator-horizontal":{style:{widthLeft:1,colorLeft:o}},"separator-vertical":{style:{widthTop:1,colorTop:o}},"scroll-knob":{style:{radius:3,width:1,color:d,backgroundColor:M}},"scroll-knob-pressed":{include:y,style:{backgroundColor:w}},"scroll-knob-hovered":{include:y,style:{color:g}},"scroll-knob-pressed-hovered":{include:D,style:{color:g}},"button-hover":{style:{backgroundColor:C,radius:3}},"window":{style:{width:1,color:q,innerWidth:4,innerColor:O,shadowLength:1,shadowBlurRadius:3,shadowColor:p,backgroundColor:L}},"window-active":{include:S,style:{shadowLength:2,shadowBlurRadius:5}},"window-caption":{style:{width:[0,0,2,0],color:O}},"white-box":{style:{width:1,color:Q,shadowBlurRadius:2,shadowColor:j,radius:7,backgroundColor:T,shadowLength:0}},"inset":{style:{width:1,color:[P,V,V,V]}},"focused-inset":{style:{width:2,color:R}},"border-invalid":{style:{width:2,color:J}},"lead-item":{style:{width:1,style:n,color:E}},"tooltip":{style:{width:1,color:r,shadowLength:1,shadowBlurRadius:2,shadowColor:p}},"tooltip-error":{style:{radius:5,backgroundColor:J}},"toolbar-separator":{style:{widthLeft:1,colorLeft:d}},"menu-separator":{style:{widthTop:1,colorTop:R}},"menubar-button-hovered":{style:{width:1,color:G,radius:3,backgroundColor:T}},"menubar-button-pressed":{include:h,style:{radius:[3,3,0,0],width:[1,1,0,1]}},"datechooser-date-pane":{style:{widthTop:1,colorTop:U,style:l}},"datechooser-weekday":{style:{widthBottom:1,colorBottom:U,style:l}},"datechooser-week":{style:{widthRight:1,colorRight:U,style:l}},"datechooser-week-header":{style:{widthBottom:1,colorBottom:U,widthRight:1,colorRight:U,style:l}},"tabview-page-button-top":{style:{width:[1,1,0,1],backgroundColor:L,color:G,radius:[3,3,0,0]}},"tabview-page-button-bottom":{include:c,style:{radius:[0,0,3,3],width:[0,1,1,1]}},"tabview-page-button-left":{include:c,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"tabview-page-button-right":{include:c,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"statusbar":{style:{widthTop:1,colorTop:R,styleTop:l}},"table-scroller-focus-indicator":{style:{width:2,color:t,style:l}},"table-header":{include:K,style:{radius:0,width:[1,0,1,0]}},"table-header-column-button":{include:e,style:{width:1,color:d}},"table-header-cell":{style:{widthRight:1,color:d}},"table-header-cell-first":{include:B,style:{widthLeft:1}},"progressive-table-header":{include:K,style:{radius:0,width:[1,0,1,1]}},"progressive-table-header-cell":{style:{widthRight:1,color:d}},"progressbar":{style:{backgroundColor:H,width:1,color:o}},"radiobutton":{style:{radius:10,width:1,color:d,innerColor:L,innerWidth:2}},"radiobutton-focused":{include:x,style:{color:R}},"radiobutton-invalid":{include:x,style:{color:J}},"checkbox":{style:{width:1,color:d}},"checkbox-focused":{include:b,style:{color:R}},"checkbox-invalid":{include:b,style:{color:J}}}});}
)();
(function(){var a="qx.theme.indigo.Decoration",b="solid",c="window-border",d="white-box-border",e="#505154",f="background",g="highlight",h="border-main",i="white",j="highlight-shade",k="shadow",l="qx/decoration/Simple",m="#323335";qx.Theme.define(a,{extend:qx.theme.simple.Decoration,aliases:{decoration:l},decorations:{"window":{style:{width:1,color:c,shadowLength:1,shadowBlurRadius:3,shadowColor:k,backgroundColor:f,radius:3}},"window-caption":{style:{radius:[3,3,0,0],color:c,widthBottom:1}},"window-caption-active":{style:{radius:[3,3,0,0],color:g,widthBottom:3}},"white-box":{style:{width:1,color:d,backgroundColor:i}},"statusbar":{style:{widthTop:1,colorTop:h,styleTop:b}},"app-header":{style:{innerWidthBottom:1,innerColorBottom:j,widthBottom:9,colorBottom:g,gradientStart:[e,0],gradientEnd:[m,100],backgroundColor:m}}}});}
)();
(function(){var a="#D9D9D9",b="#BBBBBB",c="#24B",d="qx.theme.indigo.Color",e="#dddddd",f="#888888",g="#CCCCCC",h="rgba(0, 0, 0, 0.4)",i="#B7B7B7",j="#1866B5",k="#BABABA",l="black",m="#F7F7F7",n="#A7A6AA",o="#EBEBEB",p="#666666",q="#CBC8CD",r="#F9F9F9",s="#CDCDCD",t="#808080",u="#F4F4F4",v="#C00F00",w="#686868",x="white",y="#5583D0",z="#262626",A="css.rgba",B="#EEE",C="#3D72C9",D="#E3E3E3",E="#323335",F="#BBB",G="#FE0",H="#F1F1F1",I="#939393",J="#134983",K="gray",L="#E8F0E3",M="#AAAAAA";qx.Theme.define(d,{colors:{"background":x,"dark-blue":E,"light-background":u,"font":z,"highlight":C,"highlight-shade":y,"background-selected":C,"background-selected-disabled":s,"background-selected-dark":E,"background-disabled":m,"background-disabled-checked":b,"background-pane":x,"tabview-unselected":j,"tabview-button-border":J,"tabview-label-active-disabled":a,"link":c,"scrollbar-bright":H,"scrollbar-dark":o,"button":L,"button-border":F,"button-border-hovered":I,"invalid":v,"button-box-bright":r,"button-box-dark":D,"button-box-bright-pressed":k,"button-box-dark-pressed":o,"border-lead":f,"window-border":e,"window-border-inner":u,"white-box-border":e,"shadow":qx.core.Environment.get(A)?h:p,"border-main":e,"border-light":i,"border-light-shadow":w,"border-separator":t,"text":z,"text-disabled":n,"text-selected":x,"text-placeholder":q,"tooltip":G,"tooltip-text":l,"table-header":[242,242,242],"table-focus-indicator":C,"table-header-cell":[235,234,219],"table-row-background-focused-selected":C,"table-row-background-focused":u,"table-row-background-selected":[51,94,168],"table-row-background-even":x,"table-row-background-odd":x,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":B,"table-column-line":B,"progressive-table-header":M,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":K,"progressive-progressbar-indicator-done":g,"progressive-progressbar-indicator-undone":x,"progressive-progressbar-percent-background":K,"progressive-progressbar-percent-text":x}});}
)();
(function(){var a="Indigo",b="qx.theme.Indigo";qx.Theme.define(b,{title:a,meta:{color:qx.theme.indigo.Color,decoration:qx.theme.indigo.Decoration,font:qx.theme.indigo.Font,appearance:qx.theme.indigo.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var a="sans-serif",b="monospace",c="Courier New",d="qx.theme.simple.Font",e="arial",f="DejaVu Sans Mono";qx.Theme.define(d,{fonts:{"default":{size:13,family:[e,a]},"bold":{size:13,family:[e,a],bold:true},"headline":{size:24,family:[a,e]},"small":{size:11,family:[e,a]},"monospace":{size:11,family:[f,c,b]}}});}
)();
(function(){var a="#D9D9D9",b="#1866B5",c="#24B",d="#FF0000",e="#CCCCCC",f="#5685D6",g="rgba(0, 0, 0, 0.4)",h="#FFFFE1",i="#B7B7B7",j="#BBBBBB",k="black",l="#9DCBFE",m="#A7A6AA",n="#EBEBEB",o="#666666",p="#CBC8CD",q="#F9F9F9",r="#CDCDCD",s="#808080",t="#F7F7F7",u="#6694E3",v="#686868",w="white",x="#888888",y="#E0ECFF",z="#2E3A46",A="css.rgba",B="#F5F5F5",C="#EEE",D="#E3E3E3",E="#DDDDDD",F="#BBB",G="qx.theme.simple.Color",H="#F1F1F1",I="#939393",J="#BCBCBC",K="#134983",L="gray",M="#E8F0E3",N="#FAFBFE",O="#AAAAAA";qx.Theme.define(G,{colors:{"background":w,"dark-blue":f,"light-background":y,"background-selected":u,"background-selected-disabled":r,"background-selected-dark":f,"background-disabled":t,"background-disabled-checked":j,"background-pane":N,"tabview-unselected":b,"tabview-button-border":K,"tabview-label-active-disabled":a,"link":c,"scrollbar-bright":H,"scrollbar-dark":n,"button":M,"button-border":F,"button-border-hovered":I,"invalid":d,"button-box-bright":q,"button-box-dark":D,"button-box-bright-pressed":E,"button-box-dark-pressed":B,"border-lead":x,"window-border":z,"window-border-inner":l,"white-box-border":J,"shadow":qx.core.Environment.get(A)?g:o,"border-main":u,"border-light":i,"border-light-shadow":v,"border-separator":s,"text":k,"text-disabled":m,"text-selected":w,"text-placeholder":p,"tooltip":h,"tooltip-text":k,"table-header":[242,242,242],"table-focus-indicator":[179,217,255],"table-header-cell":[235,234,219],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":w,"table-row-background-odd":w,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":C,"table-column-line":C,"progressive-table-header":O,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":L,"progressive-progressbar-indicator-done":e,"progressive-progressbar-indicator-undone":w,"progressive-progressbar-percent-background":L,"progressive-progressbar-percent-text":w}});}
)();
(function(){var a="Simple",b="qx.theme.Simple";qx.Theme.define(b,{title:a,meta:{color:qx.theme.simple.Color,decoration:qx.theme.simple.Decoration,font:qx.theme.simple.Font,appearance:qx.theme.simple.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var a="button-checked",b="window-resize-frame",c="decoration/window/maximize-active-hovered.png",d="radiobutton-hovered",e="decoration/arrows/right.png",f="background-application",g="keyboard-focus",h="group-item",i="scrollbar/button",j="decoration/cursors/",k="icon/16/actions/dialog-ok.png",l="border-invalid",m="combobox/button",n="input",o="slidebar",p="menu",q="table-scroller-focus-indicator",r="move-frame",s="nodrop",t="decoration/table/boolean-true.png",u="table-header-cell",v="app-header",w="row-layer",x="icon/16/places/folder.png",y="text-inactive",z="image",A="radiobutton",B="move",C="window-resize-frame-incl-statusbar",D="radiobutton-checked-focused",E="decoration/window/restore-active-hovered.png",F="window-captionbar-inactive",G="list",H="text-label",I="tree-folder",J="right.png",K="tabview-page-button-bottom-inactive",L="tooltip-error",M="decoration/tree/closed.png",N="window-statusbar",O="button-hovered",P="bold",Q="decoration/scrollbar/scrollbar-",R="background-tip",S="scrollbar-slider-horizontal-disabled",T="text-disabled",U="table-scroller-header",V="radiobutton-disabled",W="scrollbar-slider-horizontal",X="button-pressed",Y="table-pane",fD="decoration/window/close-active.png",fz="native",fE="checkbox-hovered",fA="decoration/window/minimize-active-hovered.png",fB="input-disabled",fw="virtual-list",fC="menubar",fJ="groupbox",fK="icon/16/actions/dialog-cancel.png",fL="tabview-page-button-top-inactive",fM="tabview-page-button-left-inactive",fF="menu-slidebar",fG="toolbar-button-checked",fH="decoration/arrows/left.png",fI="decoration/tree/open-selected.png",fQ="tree-item",gs="radiobutton-checked",fR="decoration/window/minimize-inactive.png",fS="menu-button",fN="button-focused",fO="icon/16/apps/office-calendar.png",ht="text-light",fP="menu-slidebar-button",fT="decoration/arrows/down.png",fU="middle",fV="group",gb="tree",gc="tabview-page-button-right-inactive",gd="decoration/window/minimize-active.png",fW="decoration/window/restore-inactive.png",fX="input-focused-invalid",fY="text-active",ga="splitpane",gh="text-input",gi="combobox/textfield",hy="decoration/window/close-active-hovered.png",gj="invalid",ge="qx/icon/Tango/16/actions/window-close.png",gf="combobox",hx="button-disabled",gg="tabview-page-button-left-active",gn="slidebar/button-forward",go="border-separator",hD="treevirtual-contract",gp="decoration/window/maximize-inactive.png",gk="scrollbar",gl="icon/22/places/folder-open.png",hB="right-top",gm="scrollarea",gq="background-splitpane",gr="datechooser/nav-button",gD="scrollbar-vertical",gC="decoration/toolbar/toolbar-handle-knob.gif",gB="icon/22/mimetypes/office-document.png",gH="text-selected",gG="cell",gF="button-checked-focused",gE="up.png",gw="best-fit",gv="decoration/tree/closed-selected.png",gu="text-hovered",gt="qx.theme.modern.Appearance",gA="decoration/tree/open.png",gz="default",gy="decoration/arrows/up-invert.png",gx="checkbox-disabled",gO="selected",gN="toolbar-button-hovered",gM="decoration/form/checked.png",gL="button",gS="progressive-table-header",gR="decoration/menu/radiobutton.gif",gQ="window-incl-statusbar",gP="decoration/arrows/down-small.png",gK="decoration/arrows/forward.png",gJ="decoration/table/descending.png",gI="decoration/form/undetermined.png",he="tree-file",hd="decoration/form/tooltip-error-arrow-right.png",hc="keep-align",hi="scrollbar-slider-vertical",hh="center",hg="toolbar",hf="alias",gW="decoration/window/restore-active.png",gV="datechooser",gU="toolbar-button",gT="decoration/table/boolean-false.png",hb="qx/static/blank.png",ha="window-pane",gY="icon/32/mimetypes/office-document.png",gX="slidebar/button-backward",ho="radiobutton-checked-disabled",hn="tabview-pane",hm="decoration/arrows/rewind.png",hl="checkbox-focused",hs="selectbox",hr="background-light",hq="top",hp="right",hk="main",hj="button-frame",eB="progressbar-background",eA="radiobutton-checked-hovered",hE="popup",ey="treevirtual-folder",ez="checkbox",ex="table-header-cell-hovered",hC="window",ev="icon/16/mimetypes/office-document.png",ew="treevirtual-expand",eu="text-gray",hz="left",es="decoration/menu/radiobutton-invert.gif",et="text-placeholder",er="atom",eK="text-title",eL="slider",eI="background-medium",eJ="decoration/table/select-column-order.png",eG="down.png",eH="widget",eF="groupitem-text",eq="tabview-page-button-top-active",eD="icon/32/places/folder-open.png",eE="icon/22/places/folder.png",eC="decoration/window/maximize-active.png",eY="decoration/window/close-inactive.png",eW="toolbar-part",eX="decoration/splitpane/knob-vertical.png",eU="left.png",eV="decoration/menu/checkbox-invert.gif",eT="table",hw="decoration/arrows/up.png",eR="table-statusbar",eS="decoration/form/tooltip-error-arrow.png",eQ="window-captionbar-active",hA="copy",eO="radiobutton-focused",eP="decoration/arrows/down-invert.png",eM="decoration/menu/checkbox.gif",eN="",fh="window-caption-active-text",fi="decoration/splitpane/knob-horizontal.png",ff="textfield",fg="icon/32/places/folder.png",fd="toolbar-separator",fe="tabview-page-button-bottom-active",fc="decoration/arrows/up-small.png",hv="decoration/table/ascending.png",fa="small",fb="tabview-page-button-right-active",fv="spinner",hu="tooltip",fx="-disabled",fs="label",fr="scrollbar-horizontal",fu="-invalid",ft="progressbar",fo="progressive-table-header-cell",fn="menu-separator",fq="pane",fp="decoration/arrows/right-invert.png",fk="icon/16/places/folder-open.png",fj="qx/static/blank.gif",fm=".gif",fl="icon/16/actions/view-refresh.png",fy="input-focused";qx.Theme.define(gt,{appearances:{"widget":{},"root":{style:function(hF){return {backgroundColor:f,textColor:H,font:gz};}
},"label":{style:function(hG){return {textColor:hG.disabled?T:undefined};}
},"move-frame":{style:function(hH){return {decorator:hk};}
},"resize-frame":r,"dragdrop-cursor":{style:function(hI){var hJ=s;if(hI.copy){hJ=hA;}
else if(hI.move){hJ=B;}
else if(hI.alias){hJ=hf;}
;return {source:j+hJ+fm,position:hB,offset:[2,16,2,6]};}
},"image":{style:function(hK){return {opacity:!hK.replacement&&hK.disabled?0.3:1};}
},"atom":{},"atom/label":fs,"atom/icon":z,"popup":{style:function(hL){return {decorator:hE,backgroundColor:hr};}
},"button-frame":{alias:er,style:function(hM){var hP,hO;var hN=[3,9];if(hM.checked&&hM.focused&&!hM.inner){hP=gF;hO=undefined;hN=[1,7];}
else if(hM.disabled){hP=hx;hO=undefined;}
else if(hM.pressed){hP=X;hO=gu;}
else if(hM.checked){hP=a;hO=undefined;}
else if(hM.hovered){hP=O;hO=gu;}
else if(hM.focused&&!hM.inner){hP=fN;hO=undefined;hN=[1,7];}
else {hP=gL;hO=undefined;}
;if(hM.invalid&&!hM.disabled){hP+=fu;}
;return {decorator:hP,textColor:hO,padding:hN,margin:[1,0]};}
},"button-frame/image":{style:function(hQ){return {opacity:!hQ.replacement&&hQ.disabled?0.5:1};}
},"button":{alias:hj,include:hj,style:function(hR){return {center:true};}
},"hover-button":{alias:er,include:er,style:function(hS){var hT=hS.hovered?gO:undefined;return {decorator:hT,textColor:hS.hovered?gH:undefined};}
},"menubutton":{include:gL,alias:gL,style:function(hU){return {icon:fT,iconPosition:hp};}
},"splitbutton":{},"splitbutton/button":gL,"splitbutton/arrow":{alias:gL,include:gL,style:function(hV,hW){return {icon:fT,padding:[hW.padding[0],hW.padding[1]-6],marginLeft:1};}
},"form-renderer-label":{include:fs,style:function(){return {paddingTop:4};}
},"checkbox":{alias:er,style:function(hX){var hY;if(hX.checked){hY=gM;}
else if(hX.undetermined){hY=gI;}
else {hY=fj;}
;return {icon:hY,minWidth:14,gap:8,paddingLeft:2};}
},"checkbox/icon":{style:function(ia){var ic;if(ia.disabled){ic=gx;}
else if(ia.focused){ic=hl;}
else if(ia.hovered){ic=fE;}
else {ic=ez;}
;ic+=ia.invalid&&!ia.disabled?fu:eN;var ib=ia.undetermined?[3,1]:1;return {decorator:ic,padding:ib,width:10,height:10};}
},"radiobutton":{alias:er,style:function(id){return {icon:hb,gap:8,paddingLeft:2};}
},"radiobutton/icon":{style:function(ie){var ig;if(ie.disabled&&!ie.checked){ig=V;}
else if(ie.checked&&ie.focused){ig=D;}
else if(ie.checked&&ie.disabled){ig=ho;}
else if(ie.checked&&ie.hovered){ig=eA;}
else if(ie.checked){ig=gs;}
else if(ie.focused){ig=eO;}
else if(ie.hovered){ig=d;}
else {ig=A;}
;ig+=ie.invalid&&!ie.disabled?fu:eN;return {decorator:ig,width:10,height:10};}
},"textfield":{style:function(ih){var im;var ik=!!ih.focused;var ii=!!ih.invalid;var ij=!!ih.disabled;if(ik&&ii&&!ij){im=fX;}
else if(ik&&!ii&&!ij){im=fy;}
else if(ij){im=fB;}
else if(!ik&&ii&&!ij){im=l;}
else {im=n;}
;var il;if(ih.disabled){il=T;}
else if(ih.showingPlaceholder){il=et;}
else {il=gh;}
;return {decorator:im,padding:[2,4,1],textColor:il};}
},"textarea":{include:ff,style:function(io){return {padding:4};}
},"spinner":{style:function(ip){var is;var ir=!!ip.focused;var it=!!ip.invalid;var iq=!!ip.disabled;if(ir&&it&&!iq){is=fX;}
else if(ir&&!it&&!iq){is=fy;}
else if(iq){is=fB;}
else if(!ir&&it&&!iq){is=l;}
else {is=n;}
;return {decorator:is};}
},"spinner/textfield":{style:function(iu){return {marginRight:2,padding:[2,4,1],textColor:iu.disabled?T:gh};}
},"spinner/upbutton":{alias:hj,include:hj,style:function(iv,iw){return {icon:fc,padding:[iw.padding[0]-1,iw.padding[1]-5],margin:0};}
},"spinner/downbutton":{alias:hj,include:hj,style:function(ix,iy){return {icon:gP,padding:[iy.padding[0]-1,iy.padding[1]-5],margin:0};}
},"datefield":gf,"datefield/button":{alias:m,include:m,style:function(iz){return {icon:fO,padding:[0,3],decorator:undefined};}
},"datefield/textfield":gi,"datefield/list":{alias:gV,include:gV,style:function(iA){return {decorator:undefined};}
},"groupbox":{style:function(iB){return {legendPosition:hq};}
},"groupbox/legend":{alias:er,style:function(iC){return {padding:[1,0,1,4],textColor:iC.invalid?gj:eK,font:P};}
},"groupbox/frame":{style:function(iD){return {padding:10,margin:1,decorator:fV};}
},"check-groupbox":fJ,"check-groupbox/legend":{alias:ez,include:ez,style:function(iE){return {padding:[1,0,1,4],textColor:iE.invalid?gj:eK,font:P};}
},"radio-groupbox":fJ,"radio-groupbox/legend":{alias:A,include:A,style:function(iF){return {padding:[1,0,1,4],textColor:iF.invalid?gj:eK,font:P};}
},"scrollarea":{style:function(iG){return {minWidth:50,minHeight:50};}
},"scrollarea/corner":{style:function(iH){return {backgroundColor:f};}
},"scrollarea/pane":eH,"scrollarea/scrollbar-x":gk,"scrollarea/scrollbar-y":gk,"scrollbar":{style:function(iI){if(iI[fz]){return {};}
;return {width:iI.horizontal?undefined:16,height:iI.horizontal?16:undefined,decorator:(iI.horizontal?fr:gD),padding:1};}
},"scrollbar/slider":{alias:eL,style:function(iJ){return {padding:iJ.horizontal?[0,1,0,1]:[1,0,1,0]};}
},"scrollbar/slider/knob":{include:hj,style:function(iK){var iL=iK.horizontal?W:hi;if(iK.disabled){iL+=fx;}
;return {decorator:iL,minHeight:iK.horizontal?undefined:9,minWidth:iK.horizontal?9:undefined,padding:undefined,margin:0};}
},"scrollbar/button":{alias:hj,include:hj,style:function(iM){var iO=Q;if(iM.left){iO+=eU;}
else if(iM.right){iO+=J;}
else if(iM.up){iO+=gE;}
else {iO+=eG;}
;if(iM.left||iM.right){var iN=iM.left?3:4;return {padding:[3,0,3,iN],icon:iO,width:15,height:14,margin:0};}
else {return {padding:3,icon:iO,width:14,height:15,margin:0};}
;}
},"scrollbar/button-begin":i,"scrollbar/button-end":i,"slider":{style:function(iP){var iS;var iR=!!iP.focused;var iT=!!iP.invalid;var iQ=!!iP.disabled;if(iR&&iT&&!iQ){iS=fX;}
else if(iR&&!iT&&!iQ){iS=fy;}
else if(iQ){iS=fB;}
else if(!iR&&iT&&!iQ){iS=l;}
else {iS=n;}
;return {decorator:iS};}
},"slider/knob":{include:hj,style:function(iU){return {decorator:iU.disabled?S:W,height:14,width:14,padding:0,margin:0};}
},"list":{alias:gm,style:function(iV){var iY;var iX=!!iV.focused;var ja=!!iV.invalid;var iW=!!iV.disabled;if(iX&&ja&&!iW){iY=fX;}
else if(iX&&!ja&&!iW){iY=fy;}
else if(iW){iY=fB;}
else if(!iX&&ja&&!iW){iY=l;}
else {iY=n;}
;return {backgroundColor:hr,decorator:iY};}
},"list/pane":eH,"listitem":{alias:er,style:function(jb){return {padding:jb.dragover?[4,4,2,4]:4,textColor:jb.selected?gH:undefined,decorator:jb.selected?gO:undefined,opacity:jb.drag?0.5:undefined};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:hj,include:hj,style:function(jc){return {padding:5,center:true,icon:jc.vertical?fT:e};}
},"slidebar/button-backward":{alias:hj,include:hj,style:function(jd){return {padding:5,center:true,icon:jd.vertical?hw:fH};}
},"tabview":{style:function(je){return {contentPadding:16};}
},"tabview/bar":{alias:o,style:function(jf){var jg={marginBottom:jf.barTop?-1:0,marginTop:jf.barBottom?-4:0,marginLeft:jf.barRight?-3:0,marginRight:jf.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};if(jf.barTop||jf.barBottom){jg.paddingLeft=5;jg.paddingRight=7;}
else {jg.paddingTop=5;jg.paddingBottom=7;}
;return jg;}
},"tabview/bar/button-forward":{include:gn,alias:gn,style:function(jh){if(jh.barTop||jh.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/button-backward":{include:gX,alias:gX,style:function(ji){if(ji.barTop||ji.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(jj){return {decorator:hn,marginBottom:jj.barBottom?-1:0,marginTop:jj.barTop?-1:0,marginLeft:jj.barLeft?-1:0,marginRight:jj.barRight?-1:0};}
},"tabview-page":{alias:eH,include:eH,style:function(jk){return {padding:[4,3]};}
},"tabview-page/button":{alias:er,style:function(jl){var jr,jn=0;var jq=0,jm=0,jo=0,jp=0;if(jl.checked){if(jl.barTop){jr=eq;jn=[5,11];jo=jl.firstTab?0:-5;jp=jl.lastTab?0:-5;}
else if(jl.barBottom){jr=fe;jn=[5,11];jo=jl.firstTab?0:-5;jp=jl.lastTab?0:-5;jq=3;}
else if(jl.barRight){jr=fb;jn=[5,10];jq=jl.firstTab?0:-5;jm=jl.lastTab?0:-5;jo=2;}
else {jr=gg;jn=[5,10];jq=jl.firstTab?0:-5;jm=jl.lastTab?0:-5;}
;}
else {if(jl.barTop){jr=fL;jn=[3,9];jq=4;jo=jl.firstTab?5:1;jp=1;}
else if(jl.barBottom){jr=K;jn=[3,9];jm=4;jo=jl.firstTab?5:1;jp=1;jq=3;}
else if(jl.barRight){jr=gc;jn=[3,9];jp=5;jq=jl.firstTab?5:1;jm=1;jo=3;}
else {jr=fM;jn=[3,9];jo=5;jq=jl.firstTab?5:1;jm=1;jp=1;}
;}
;return {zIndex:jl.checked?10:5,decorator:jr,padding:jn,marginTop:jq,marginBottom:jm,marginLeft:jo,marginRight:jp,textColor:jl.disabled?T:jl.checked?fY:y};}
},"tabview-page/button/label":{alias:fs,style:function(js){return {padding:js.focused?[0,1,0,1]:[1,2,1,2],decorator:js.focused?g:undefined};}
},"tabview-page/button/close-button":{alias:er,style:function(jt){return {icon:ge};}
},"toolbar":{style:function(ju){return {decorator:hg,spacing:2};}
},"toolbar/part":{style:function(jv){return {decorator:eW,spacing:2};}
},"toolbar/part/container":{style:function(jw){return {paddingLeft:2,paddingRight:2};}
},"toolbar/part/handle":{style:function(jx){return {source:gC,marginLeft:3,marginRight:3};}
},"toolbar-button":{alias:er,style:function(jy){var jz;if(jy.pressed||(jy.checked&&!jy.hovered)||(jy.checked&&jy.disabled)){jz=fG;}
else if(jy.hovered&&!jy.disabled){jz=gN;}
;return {marginTop:2,marginBottom:2,padding:(jy.pressed||jy.checked||jy.hovered)&&!jy.disabled||(jy.disabled&&jy.checked)?3:5,decorator:jz};}
},"toolbar-menubutton":{alias:gU,include:gU,style:function(jA){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:z,include:z,style:function(jB){return {source:gP};}
},"toolbar-splitbutton":{style:function(jC){return {marginTop:2,marginBottom:2};}
},"toolbar-splitbutton/button":{alias:gU,include:gU,style:function(jD){return {icon:fT,marginTop:undefined,marginBottom:undefined};}
},"toolbar-splitbutton/arrow":{alias:gU,include:gU,style:function(jE){if(jE.pressed||jE.checked||(jE.hovered&&!jE.disabled)){var jF=1;}
else {var jF=3;}
;return {padding:jF,icon:fT,marginTop:undefined,marginBottom:undefined};}
},"toolbar-separator":{style:function(jG){return {decorator:fd,margin:7};}
},"tree":G,"tree-item":{style:function(jH){var jI=jH.selected?gO:undefined;return {padding:[2,6],textColor:jH.selected?gH:undefined,decorator:jI,opacity:jH.drag?0.5:undefined};}
},"tree-item/icon":{include:z,style:function(jJ){return {paddingRight:5};}
},"tree-item/label":fs,"tree-item/open":{include:z,style:function(jK){var jL;if(jK.selected&&jK.opened){jL=fI;}
else if(jK.selected&&!jK.opened){jL=gv;}
else if(jK.opened){jL=gA;}
else {jL=M;}
;return {padding:[0,5,0,2],source:jL};}
},"tree-folder":{include:fQ,alias:fQ,style:function(jM){var jO,jN;if(jM.small){jO=jM.opened?fk:x;jN=fk;}
else if(jM.large){jO=jM.opened?eD:fg;jN=eD;}
else {jO=jM.opened?gl:eE;jN=gl;}
;return {icon:jO,iconOpened:jN};}
},"tree-file":{include:fQ,alias:fQ,style:function(jP){return {icon:jP.small?ev:jP.large?gY:gB};}
},"treevirtual":eT,"treevirtual-folder":{style:function(jQ){return {icon:jQ.opened?fk:x};}
},"treevirtual-file":{include:ey,alias:ey,style:function(jR){return {icon:ev};}
},"treevirtual-line":{style:function(jS){return {icon:fj};}
},"treevirtual-contract":{style:function(jT){return {icon:gA,paddingLeft:5,paddingTop:2};}
},"treevirtual-expand":{style:function(jU){return {icon:M,paddingLeft:5,paddingTop:2};}
},"treevirtual-only-contract":hD,"treevirtual-only-expand":ew,"treevirtual-start-contract":hD,"treevirtual-start-expand":ew,"treevirtual-end-contract":hD,"treevirtual-end-expand":ew,"treevirtual-cross-contract":hD,"treevirtual-cross-expand":ew,"treevirtual-end":{style:function(jV){return {icon:fj};}
},"treevirtual-cross":{style:function(jW){return {icon:fj};}
},"tooltip":{include:hE,style:function(jX){return {backgroundColor:R,padding:[1,3,2,3],offset:[15,5,5,5]};}
},"tooltip/atom":er,"tooltip-error":{style:function(jY){return {placeMethod:eH,offset:[-3,1,0,0],arrowPosition:jY.placementLeft?hz:hp,position:hB,showTimeout:100,hideTimeout:10000,padding:[0,4,4,0]};}
},"tooltip-error/arrow":{include:z,style:function(ka){var kb=ka.placementLeft?hd:eS;return {source:kb,padding:[6,0,0,0],zIndex:10000001};}
},"tooltip-error/atom":{include:hE,style:function(kc){return {textColor:gH,backgroundColor:undefined,decorator:L,font:P,padding:[3,4,4,4],margin:[1,0,0,0],maxWidth:333};}
},"window":{style:function(kd){return {decorator:kd.showStatusbar?gQ:hC,contentPadding:[10,10,10,10],margin:kd.maximized?0:[0,5,5,0]};}
},"window-resize-frame":{style:function(ke){return {decorator:ke.showStatusbar?C:b};}
},"window/pane":{style:function(kf){return {decorator:ha};}
},"window/captionbar":{style:function(kg){return {decorator:(kg.active?eQ:F),textColor:kg.active?fh:eu,minHeight:26,paddingRight:2};}
},"window/icon":{style:function(kh){return {margin:[5,0,3,6]};}
},"window/title":{style:function(ki){return {alignY:fU,font:P,marginLeft:6,marginRight:12};}
},"window/minimize-button":{alias:er,style:function(kj){return {icon:kj.active?kj.hovered?fA:gd:fR,margin:[4,8,2,0]};}
},"window/restore-button":{alias:er,style:function(kk){return {icon:kk.active?kk.hovered?E:gW:fW,margin:[5,8,2,0]};}
},"window/maximize-button":{alias:er,style:function(kl){return {icon:kl.active?kl.hovered?c:eC:gp,margin:[4,8,2,0]};}
},"window/close-button":{alias:er,style:function(km){return {icon:km.active?km.hovered?hy:fD:eY,margin:[4,8,2,0]};}
},"window/statusbar":{style:function(kn){return {padding:[2,6],decorator:N,minHeight:18};}
},"window/statusbar-text":{style:function(ko){return {font:fa};}
},"iframe":{style:function(kp){return {decorator:hk};}
},"resizer":{style:function(kq){return {decorator:fq};}
},"splitpane":{style:function(kr){return {decorator:ga};}
},"splitpane/splitter":{style:function(ks){return {width:ks.horizontal?3:undefined,height:ks.vertical?3:undefined,backgroundColor:gq};}
},"splitpane/splitter/knob":{style:function(kt){return {source:kt.horizontal?fi:eX};}
},"splitpane/slider":{style:function(ku){return {width:ku.horizontal?3:undefined,height:ku.vertical?3:undefined,backgroundColor:gq};}
},"selectbox":hj,"selectbox/atom":er,"selectbox/popup":hE,"selectbox/list":{alias:G},"selectbox/arrow":{include:z,style:function(kv){return {source:fT,paddingLeft:5};}
},"datechooser":{style:function(kw){var kz;var ky=!!kw.focused;var kA=!!kw.invalid;var kx=!!kw.disabled;if(ky&&kA&&!kx){kz=fX;}
else if(ky&&!kA&&!kx){kz=fy;}
else if(kx){kz=fB;}
else if(!ky&&kA&&!kx){kz=l;}
else {kz=n;}
;return {padding:2,decorator:kz,backgroundColor:hr};}
},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:hj,alias:hj,style:function(kB){var kC={padding:[2,4]};if(kB.lastYear){kC.icon=hm;kC.marginRight=1;}
else if(kB.lastMonth){kC.icon=fH;}
else if(kB.nextYear){kC.icon=gK;kC.marginLeft=1;}
else if(kB.nextMonth){kC.icon=e;}
;return kC;}
},"datechooser/last-year-button-tooltip":hu,"datechooser/last-month-button-tooltip":hu,"datechooser/next-year-button-tooltip":hu,"datechooser/next-month-button-tooltip":hu,"datechooser/last-year-button":gr,"datechooser/last-month-button":gr,"datechooser/next-month-button":gr,"datechooser/next-year-button":gr,"datechooser/month-year-label":{style:function(kD){return {font:P,textAlign:hh,textColor:kD.disabled?T:undefined};}
},"datechooser/date-pane":{style:function(kE){return {textColor:kE.disabled?T:undefined,marginTop:2};}
},"datechooser/weekday":{style:function(kF){return {textColor:kF.disabled?T:kF.weekend?ht:undefined,textAlign:hh,paddingTop:2,backgroundColor:eI};}
},"datechooser/week":{style:function(kG){return {textAlign:hh,padding:[2,4],backgroundColor:eI};}
},"datechooser/day":{style:function(kH){var kI=kH.disabled?undefined:kH.selected?gO:undefined;return {textAlign:hh,decorator:kI,textColor:kH.disabled?T:kH.selected?gH:kH.otherMonth?ht:undefined,font:kH.today?P:undefined,padding:[2,4]};}
},"combobox":{style:function(kJ){var kM;var kL=!!kJ.focused;var kN=!!kJ.invalid;var kK=!!kJ.disabled;if(kL&&kN&&!kK){kM=fX;}
else if(kL&&!kN&&!kK){kM=fy;}
else if(kK){kM=fB;}
else if(!kL&&kN&&!kK){kM=l;}
else {kM=n;}
;return {decorator:kM};}
},"combobox/popup":hE,"combobox/list":{alias:G},"combobox/button":{include:hj,alias:hj,style:function(kO,kP){var kQ={icon:fT,padding:[kP.padding[0],kP.padding[1]-6],margin:undefined};if(kO.selected){kQ.decorator=fN;}
;return kQ;}
},"combobox/textfield":{include:ff,style:function(kR){return {decorator:undefined};}
},"menu":{style:function(kS){var kT={decorator:p,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:kS.submenu||kS.contextmenu?gw:hc};if(kS.submenu){kT.position=hB;kT.offset=[-2,-3];}
;return kT;}
},"menu/slidebar":fF,"menu-slidebar":eH,"menu-slidebar-button":{style:function(kU){var kV=kU.hovered?gO:undefined;return {decorator:kV,padding:7,center:true};}
},"menu-slidebar/button-backward":{include:fP,style:function(kW){return {icon:kW.hovered?gy:hw};}
},"menu-slidebar/button-forward":{include:fP,style:function(kX){return {icon:kX.hovered?eP:fT};}
},"menu-separator":{style:function(kY){return {height:0,decorator:fn,margin:[4,2]};}
},"menu-button":{alias:er,style:function(la){var lb=la.selected?gO:undefined;return {decorator:lb,textColor:la.selected?gH:undefined,padding:[4,6]};}
},"menu-button/icon":{include:z,style:function(lc){return {alignY:fU};}
},"menu-button/label":{include:fs,style:function(ld){return {alignY:fU,padding:1};}
},"menu-button/shortcut":{include:fs,style:function(le){return {alignY:fU,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:z,style:function(lf){return {source:lf.selected?fp:e,alignY:fU};}
},"menu-checkbox":{alias:fS,include:fS,style:function(lg){return {icon:!lg.checked?undefined:lg.selected?eV:eM};}
},"menu-radiobutton":{alias:fS,include:fS,style:function(lh){return {icon:!lh.checked?undefined:lh.selected?es:gR};}
},"menubar":{style:function(li){return {decorator:fC};}
},"menubar-button":{alias:er,style:function(lj){var lk=(lj.pressed||lj.hovered)&&!lj.disabled?gO:undefined;return {decorator:lk,textColor:lj.pressed||lj.hovered?gH:undefined,padding:[3,8]};}
},"colorselector":eH,"colorselector/control-bar":eH,"colorselector/control-pane":eH,"colorselector/visual-pane":fJ,"colorselector/preset-grid":eH,"colorselector/colorbucket":{style:function(ll){return {decorator:hk,width:16,height:16};}
},"colorselector/preset-field-set":fJ,"colorselector/input-field-set":{include:fJ,alias:fJ,style:function(){return {paddingTop:20};}
},"colorselector/preview-field-set":{include:fJ,alias:fJ,style:function(){return {paddingTop:20};}
},"colorselector/hex-field-composite":eH,"colorselector/hex-field":ff,"colorselector/rgb-spinner-composite":eH,"colorselector/rgb-spinner-red":fv,"colorselector/rgb-spinner-green":fv,"colorselector/rgb-spinner-blue":fv,"colorselector/hsb-spinner-composite":eH,"colorselector/hsb-spinner-hue":fv,"colorselector/hsb-spinner-saturation":fv,"colorselector/hsb-spinner-brightness":fv,"colorselector/preview-content-old":{style:function(lm){return {decorator:hk,width:50,height:10};}
},"colorselector/preview-content-new":{style:function(ln){return {decorator:hk,backgroundColor:hr,width:50,height:10};}
},"colorselector/hue-saturation-field":{style:function(lo){return {decorator:hk,margin:5};}
},"colorselector/brightness-field":{style:function(lp){return {decorator:hk,margin:[5,7]};}
},"colorselector/hue-saturation-pane":eH,"colorselector/hue-saturation-handle":eH,"colorselector/brightness-pane":eH,"colorselector/brightness-handle":eH,"colorpopup":{alias:hE,include:hE,style:function(lq){return {padding:5,backgroundColor:f};}
},"colorpopup/field":{style:function(lr){return {decorator:hk,margin:2,width:14,height:14,backgroundColor:hr};}
},"colorpopup/selector-button":gL,"colorpopup/auto-button":gL,"colorpopup/preview-pane":fJ,"colorpopup/current-preview":{style:function(ls){return {height:20,padding:4,marginLeft:4,decorator:hk,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(lt){return {height:20,padding:4,marginRight:4,decorator:hk,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:gL,include:gL,style:function(lu){return {icon:k};}
},"colorpopup/colorselector-cancelbutton":{alias:gL,include:gL,style:function(lv){return {icon:fK};}
},"table":{alias:eH,style:function(lw){return {decorator:eT};}
},"table/statusbar":{style:function(lx){return {decorator:eR,padding:[0,2]};}
},"table/column-button":{alias:hj,style:function(ly){return {decorator:U,padding:3,icon:eJ};}
},"table-column-reset-button":{include:fS,alias:fS,style:function(){return {icon:fl};}
},"table-scroller":eH,"table-scroller/scrollbar-x":gk,"table-scroller/scrollbar-y":gk,"table-scroller/header":{style:function(lz){return {decorator:U,textColor:lz.disabled?T:undefined};}
},"table-scroller/pane":{style:function(lA){return {backgroundColor:Y};}
},"table-scroller/focus-indicator":{style:function(lB){return {decorator:q};}
},"table-scroller/resize-line":{style:function(lC){return {backgroundColor:go,width:2};}
},"table-header-cell":{alias:er,style:function(lD){return {minWidth:13,minHeight:20,padding:lD.hovered?[3,4,2,4]:[3,4],decorator:lD.hovered?ex:u,sortIcon:lD.sorted?(lD.sortedAscending?hv:gJ):undefined};}
},"table-header-cell/label":{style:function(lE){return {minWidth:0,alignY:fU,paddingRight:5};}
},"table-header-cell/sort-icon":{style:function(lF){return {alignY:fU,alignX:hp,opacity:lF.disabled?0.3:1};}
},"table-header-cell/icon":{style:function(lG){return {minWidth:0,alignY:fU,paddingRight:5,opacity:lG.disabled?0.3:1};}
},"table-editor-textfield":{include:ff,style:function(lH){return {decorator:undefined,padding:[2,2],backgroundColor:hr};}
},"table-editor-selectbox":{include:hs,alias:hs,style:function(lI){return {padding:[0,2],backgroundColor:hr};}
},"table-editor-combobox":{include:gf,alias:gf,style:function(lJ){return {decorator:undefined,backgroundColor:hr};}
},"progressive-table-header":{alias:eH,style:function(lK){return {decorator:gS};}
},"progressive-table-header-cell":{alias:er,style:function(lL){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:fo};}
},"app-header":{style:function(lM){return {font:P,textColor:gH,padding:[8,12],decorator:v};}
},"app-header-label":fs,"app-splitpane":{alias:ga,style:function(lN){return {padding:0};}
},"virtual-list":G,"virtual-list/row-layer":w,"row-layer":eH,"group-item":{include:fs,alias:fs,style:function(lO){return {padding:4,decorator:h,textColor:eF,font:P};}
},"virtual-selectbox":hs,"virtual-selectbox/dropdown":hE,"virtual-selectbox/dropdown/list":{alias:fw},"virtual-combobox":gf,"virtual-combobox/dropdown":hE,"virtual-combobox/dropdown/list":{alias:fw},"virtual-tree":{include:gb,alias:gb,style:function(lP){return {itemHeight:26};}
},"virtual-tree-folder":I,"virtual-tree-file":he,"column-layer":eH,"cell":{style:function(lQ){return {textColor:lQ.selected?gH:H,padding:[3,6],font:gz};}
},"cell-string":gG,"cell-number":{include:gG,style:function(lR){return {textAlign:hp};}
},"cell-image":gG,"cell-boolean":{include:gG,style:function(lS){return {iconTrue:t,iconFalse:gT};}
},"cell-atom":gG,"cell-date":gG,"cell-html":gG,"progressbar":{style:function(lT){return {decorator:ft,padding:[1],backgroundColor:eB,width:200,height:20};}
},"progressbar/progress":{style:function(lU){return {decorator:(lU.disabled?h:gO)};}
}}});}
)();
(function(){var a="button-checked-focused",b="window-resize-frame",c="checkbox-disabled-border",d="group-background",e="menu-end",f="keyboard-focus",g="button-disabled-start",h="selected-end",i="table-header-hovered",j="border-invalid",k="decoration/toolbar/toolbar-part.gif",l="border-separator",m="window-border-caption",n="radiobutton-hovered",o="button-hovered-end",p="border-input",q="radiobutton",r="repeat-y",s="border-dragover",t="border-inner-input",u="radiobutton-checked-focused",v="groupitem-end",w="group-border",x="input-start",y="button-hovered-start",z="tooltip-error",A="button-hovered",B="selected-start",C="progressive-table-header-border-right",D="button-border-disabled",E="scrollbar-slider-horizontal",F="button-pressed",G="window-statusbar-background",H="tabview-end",I="radiobutton-hovered-invalid",J="checkbox-hovered",K="radiobutton-background",L="window-captionbar-active",M="checkbox-hovered-inner",N="toolbar-button-hovered",O="window-caption-active-end",P="solid",Q="button-start",R="dotted",S="radiobutton-disabled",T="radiobutton-checked",U="checkbox-disabled-end",V="window-caption-active-start",W="window-border",X="button-focused",Y="input",cv="tabview-inactive",cw="qx/decoration/Modern",cx="border-toolbar-separator-left",cr="invalid",cs="button-disabled",ct="horizontal",cu="table-header-start",cC="background-splitpane",cD="button-end",cE="button-checked",cF="border-toolbar-border-inner",cy="px",cz="input-border-disabled",cA="scrollbar-slider-vertical",cB="checkbox-inner",cJ="button",dk="button-disabled-end",dI="toolbar-end",cK="groupitem-start",cG="menu-start",cH="input-focused-start",dD="scrollbar-start",cI="scrollbar-slider-start",cL="radiobutton-checked-disabled",cM="checkbox-focused",cN="border-toolbar-button-outer",cS="background-light",cT="qx.theme.modern.Decoration",cU="checkbox-hovered-invalid",cO="radiobutton-checked-hovered",cP="tabview-page-button-top-inactive",cQ="#243B58",cR="checkbox",cY="checkbox-focus",da="window",dF="checkbox-disabled-inner",db="border-toolbar-separator-right",cV="tabview-inactive-start",cW="scrollbar-end",dE="table-header-end",cX="tabview-background",df="checkbox-end",dg="border-button",dH="tabview-inactive-end",dh="input-end",dc="tabview-page-button-top-active",dd="input-focused-inner-invalid",dG="menu-separator-top",de="shadow",di="window-caption-inactive-start",dj="scrollbar-slider-end",dw="background-pane",dv="pane-end",du="input-focused-end",dA="menubar-start",dz="toolbar-start",dy="radiobutton-focused",dx="pane-start",dp="table-focus-indicator",dn="menu-separator-bottom",dm="#1D2D45",dl="border-main",dt="scrollbar-horizontal",ds="window-caption-inactive-end",dr="checkbox-border",dq="tabview-start",dC="checkbox-hovered-inner-invalid",dB="input-focused";qx.Theme.define(cT,{aliases:{decoration:cw},decorations:{"main":{style:{width:1,color:dl}},"selected":{style:{startColorPosition:0,endColorPosition:100,startColor:B,endColor:h}},"dragover":{style:{bottom:[2,P,s]}},"pane":{style:{width:1,color:cX,radius:3,shadowColor:de,shadowBlurRadius:2,shadowLength:0,gradientStart:[dx,0],gradientEnd:[dv,100]}},"group":{style:{backgroundColor:d,radius:4,color:w,width:1}},"keyboard-focus":{style:{width:1,color:f,style:R}},"radiobutton":{style:{backgroundColor:K,radius:5,width:1,innerWidth:2,color:dr,innerColor:K,shadowLength:0,shadowBlurRadius:0,shadowColor:cY}},"radiobutton-checked":{include:q,style:{backgroundColor:T}},"radiobutton-checked-focused":{include:T,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:T,style:{innerColor:J}},"radiobutton-focused":{include:q,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:q,style:{backgroundColor:J,innerColor:J}},"radiobutton-disabled":{include:q,style:{innerColor:S,backgroundColor:S,color:c}},"radiobutton-checked-disabled":{include:S,style:{backgroundColor:cL}},"radiobutton-invalid":{include:q,style:{color:cr}},"radiobutton-checked-invalid":{include:T,style:{color:cr}},"radiobutton-checked-focused-invalid":{include:u,style:{color:cr,shadowColor:cr}},"radiobutton-checked-hovered-invalid":{include:cO,style:{color:cr,innerColor:I}},"radiobutton-focused-invalid":{include:dy,style:{color:cr,shadowColor:cr}},"radiobutton-hovered-invalid":{include:n,style:{color:cr,innerColor:I,backgroundColor:I}},"separator-horizontal":{style:{widthLeft:1,colorLeft:l}},"separator-vertical":{style:{widthTop:1,colorTop:l}},"tooltip-error":{style:{backgroundColor:z,radius:4,shadowColor:de,shadowBlurRadius:2,shadowLength:1}},"popup":{style:{width:1,color:dl,shadowColor:de,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{style:{gradientStart:[dD,0],gradientEnd:[cW,100]}},"scrollbar-vertical":{include:dt,style:{orientation:ct}},"scrollbar-slider-horizontal":{style:{gradientStart:[cI,0],gradientEnd:[dj,100],color:dl,width:1,radius:3}},"scrollbar-slider-vertical":{include:E,style:{orientation:ct}},"scrollbar-slider-horizontal-disabled":{include:E,style:{color:D}},"scrollbar-slider-vertical-disabled":{include:cA,style:{color:D}},"button":{style:{radius:3,color:dg,width:1,startColor:Q,endColor:cD,startColorPosition:35,endColorPosition:100}},"button-disabled":{include:cJ,style:{color:D,startColor:g,endColor:dk}},"button-hovered":{include:cJ,style:{startColor:y,endColor:o}},"button-checked":{include:cJ,style:{endColor:Q,startColor:cD}},"button-pressed":{include:cJ,style:{endColor:y,startColor:o}},"button-focused":{style:{radius:3,color:dg,width:1,innerColor:X,innerWidth:2,startColor:Q,endColor:cD,startColorPosition:30,endColorPosition:100}},"button-checked-focused":{include:X,style:{endColor:Q,startColor:cD}},"button-invalid":{include:cJ,style:{color:j}},"button-disabled-invalid":{include:cs,style:{color:j}},"button-hovered-invalid":{include:A,style:{color:j}},"button-checked-invalid":{include:cE,style:{color:j}},"button-pressed-invalid":{include:F,style:{color:j}},"button-focused-invalid":{include:X,style:{color:j}},"button-checked-focused-invalid":{include:a,style:{color:j}},"checkbox":{style:{width:1,color:dr,innerWidth:1,innerColor:cB,backgroundColor:df,shadowLength:0,shadowBlurRadius:0,shadowColor:cY}},"checkbox-hovered":{include:cR,style:{innerColor:M,backgroundColor:J}},"checkbox-focused":{include:cR,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:cR,style:{color:c,innerColor:dF,backgroundColor:U}},"checkbox-invalid":{include:cR,style:{color:cr}},"checkbox-hovered-invalid":{include:J,style:{color:cr,innerColor:dC,backgroundColor:cU}},"checkbox-focused-invalid":{include:cM,style:{color:cr,shadowColor:cr}},"input":{style:{color:p,innerColor:t,innerWidth:1,width:1,backgroundColor:cS,startColor:x,endColor:dh,startColorPosition:0,endColorPosition:12,colorPositionUnit:cy}},"border-invalid":{include:Y,style:{color:j}},"input-focused":{include:Y,style:{startColor:cH,innerColor:du,endColorPosition:4}},"input-focused-invalid":{include:dB,style:{innerColor:dd,color:j}},"input-disabled":{include:Y,style:{color:cz}},"toolbar":{style:{startColorPosition:40,endColorPosition:60,startColor:dz,endColor:dI}},"toolbar-button-hovered":{style:{color:cN,width:1,innerWidth:1,innerColor:cF,radius:2,gradientStart:[Q,30],gradientEnd:[cD,100]}},"toolbar-button-checked":{include:N,style:{gradientStart:[cD,30],gradientEnd:[Q,100]}},"toolbar-separator":{style:{widthLeft:1,widthRight:1,colorLeft:cx,colorRight:db,styleLeft:P,styleRight:P}},"toolbar-part":{style:{backgroundImage:k,backgroundRepeat:r}},"tabview-pane":{style:{width:1,color:W,radius:3,gradientStart:[dq,90],gradientEnd:[H,100]}},"tabview-page-button-top-active":{style:{radius:[3,3,0,0],width:[1,1,0,1],color:cX,backgroundColor:dq,shadowLength:1,shadowColor:de,shadowBlurRadius:2}},"tabview-page-button-top-inactive":{style:{radius:[3,3,0,0],color:cv,colorBottom:cX,width:1,gradientStart:[cV,0],gradientEnd:[dH,100]}},"tabview-page-button-bottom-active":{include:dc,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:cV,shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-bottom-inactive":{include:cP,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:cv,colorTop:cX}},"tabview-page-button-left-active":{include:dc,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive":{include:cP,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:cv,colorRight:cX}},"tabview-page-button-right-active":{include:dc,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive":{include:cP,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:cv,colorLeft:cX}},"splitpane":{style:{backgroundColor:dw,width:3,color:cC,style:P}},"window":{style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:de}},"window-incl-statusbar":{include:da,style:{radius:[5,5,5,5]}},"window-resize-frame":{style:{radius:[5,5,0,0],width:1,color:dl}},"window-resize-frame-incl-statusbar":{include:b,style:{radius:[5,5,5,5]}},"window-captionbar-active":{style:{width:1,color:W,colorBottom:m,radius:[5,5,0,0],gradientStart:[V,30],gradientEnd:[O,70]}},"window-captionbar-inactive":{include:L,style:{gradientStart:[di,30],gradientEnd:[ds,70]}},"window-statusbar":{style:{backgroundColor:G,width:[0,1,1,1],color:W,radius:[0,0,5,5]}},"window-pane":{style:{backgroundColor:dw,width:1,color:W,widthTop:0}},"table":{style:{width:1,color:dl,style:P}},"table-statusbar":{style:{widthTop:1,colorTop:dl,style:P}},"table-scroller-header":{style:{gradientStart:[cu,10],gradientEnd:[dE,90],widthBottom:1,colorBottom:dl}},"table-header-cell":{style:{widthRight:1,colorRight:l,styleRight:P}},"table-header-cell-hovered":{style:{widthRight:1,colorRight:l,styleRight:P,widthBottom:1,colorBottom:i,styleBottom:P}},"table-scroller-focus-indicator":{style:{width:2,color:dp,style:P}},"progressive-table-header":{style:{width:1,color:dl,style:P}},"progressive-table-header-cell":{style:{gradientStart:[cu,10],gradientEnd:[dE,90],widthRight:1,colorRight:C}},"menu":{style:{gradientStart:[cG,0],gradientEnd:[e,100],shadowColor:de,shadowBlurRadius:2,shadowLength:1,width:1,color:dl}},"menu-separator":{style:{widthTop:1,colorTop:dG,widthBottom:1,colorBottom:dn}},"menubar":{style:{gradientStart:[dA,0],gradientEnd:[e,100],width:1,color:l}},"app-header":{style:{gradientStart:[cQ,0],gradientEnd:[dm,100]}},"progressbar":{style:{width:1,color:p}},"group-item":{style:{startColorPosition:0,endColorPosition:100,startColor:cK,endColor:v}}}});}
)();
(function(){var a="black",b="#EEEEEE",c="#1a1a1a",d="#ffffdd",e="#b6b6b6",f="#004DAD",g="#BABABA",h="#005BC3",i="#334866",j="#00204D",k="#CECECE",l="gray",m="#D9D9D9",n="#D8D8D8",o="#99C3FE",p="#001533",q="#B3B3B3",r="#F4F4F4",s="#D5D5D5",t="#fffefe",u="#C3C3C3",v="#E4E4E4",w="#DDDDDD",x="#FF9999",y="css.rgba",z="#E8E8E9",A="#084FAA",B="#AFAFAF",C="white",D="#C5C5C5",E="rgba(0, 0, 0, 0.4)",F="#DBDBDB",G="#4a4a4a",H="#83BAEA",I="#D7E7F4",J="#07125A",K="#084FAB",L="#FAF2F2",M="#87AFE7",N="#F7EAEA",O="#777D8D",P="#FBFBFB",Q="#CACACA",R="#909090",S="#9B9B9B",T="#F0F9FE",U="#314a6e",V="#B4B4B4",W="#787878",X="qx.theme.modern.Color",Y="#000000",cb="#26364D",cc="#A7A7A7",cd="#D1E4FF",bW="#5CB0FD",bX="#FCFCFC",bY="#EAEAEA",ca="#003B91",ci="#80B4EF",cj="#FF6B78",ck="#949494",cl="#808080",ce="#F3F3F3",cf="#930000",cg="#7B7B7B",ch="#F0F0F0",cp="#C82C2C",cM="#DFDFDF",cN="#B6B6B6",cq="#0880EF",cm="#4d4d4d",cn="#f4f4f4",cP="#7B7A7E",co="#D0D0D0",cr="#f8f8f8",cs="#404955",ct="#959595",cx="#AAAAAA",cQ="#F7E9E9",cy="#314A6E",cu="#C72B2B",cv="#FAFAFA",cO="#FBFCFB",cw="#B2D2FF",cC="#666666",cD="#CBC8CD",cE="#999999",cF="#8EB8D6",cz="#b8b8b8",cA="#727272",cR="#33508D",cB="#E8E8E8",cJ="#CCCCCC",cK="#CCC",cS="#EFEFEF",cL="#F2F2F2",cG="#F1F1F1",cH="#990000",cI="#00368A";qx.Theme.define(X,{colors:{"background-application":cM,"background-pane":ce,"background-light":bX,"background-medium":b,"background-splitpane":B,"background-tip":d,"background-tip-error":cu,"background-odd":v,"progressbar-background":C,"text-light":R,"text-gray":G,"text-label":c,"text-title":U,"text-input":Y,"text-hovered":p,"text-disabled":cP,"text-selected":t,"text-active":cb,"text-inactive":cs,"text-placeholder":cD,"border-inner-scrollbar":C,"border-main":cm,"menu-separator-top":D,"menu-separator-bottom":cv,"border-separator":cl,"border-toolbar-button-outer":e,"border-toolbar-border-inner":cr,"border-toolbar-separator-right":cn,"border-toolbar-separator-left":cz,"border-input":i,"border-inner-input":C,"border-disabled":cN,"border-pane":j,"border-button":cC,"border-column":cJ,"border-focused":o,"invalid":cH,"border-focused-invalid":x,"border-dragover":cR,"keyboard-focus":a,"table-pane":ce,"table-focus-indicator":cq,"table-row-background-focused-selected":K,"table-row-background-focused":ci,"table-row-background-selected":K,"table-row-background-even":ce,"table-row-background-odd":v,"table-row-selected":t,"table-row":c,"table-row-line":cK,"table-column-line":cK,"table-header-hovered":C,"progressive-table-header":cx,"progressive-table-header-border-right":cL,"progressive-table-row-background-even":r,"progressive-table-row-background-odd":v,"progressive-progressbar-background":l,"progressive-progressbar-indicator-done":cJ,"progressive-progressbar-indicator-undone":C,"progressive-progressbar-percent-background":l,"progressive-progressbar-percent-text":C,"selected-start":f,"selected-end":cI,"background-selected":cI,"tabview-background":J,"shadow":qx.core.Environment.get(y)?E:cE,"pane-start":P,"pane-end":ch,"group-background":cB,"group-border":V,"radiobutton-background":cS,"checkbox-border":cy,"checkbox-focus":M,"checkbox-hovered":cw,"checkbox-hovered-inner":cd,"checkbox-inner":b,"checkbox-start":v,"checkbox-end":ce,"checkbox-disabled-border":W,"checkbox-disabled-inner":Q,"checkbox-disabled-start":co,"checkbox-disabled-end":n,"checkbox-hovered-inner-invalid":L,"checkbox-hovered-invalid":cQ,"radiobutton-checked":h,"radiobutton-disabled":s,"radiobutton-checked-disabled":cg,"radiobutton-hovered-invalid":N,"tooltip-error":cp,"scrollbar-start":cJ,"scrollbar-end":cG,"scrollbar-slider-start":b,"scrollbar-slider-end":u,"button-border-disabled":ct,"button-start":ch,"button-end":B,"button-disabled-start":r,"button-disabled-end":g,"button-hovered-start":T,"button-hovered-end":cF,"button-focused":H,"border-invalid":cf,"input-start":ch,"input-end":cO,"input-focused-start":I,"input-focused-end":bW,"input-focused-inner-invalid":cj,"input-border-disabled":S,"input-border-inner":C,"toolbar-start":cS,"toolbar-end":w,"window-border":j,"window-border-caption":cA,"window-caption-active-text":C,"window-caption-active-start":A,"window-caption-active-end":ca,"window-caption-inactive-start":cL,"window-caption-inactive-end":F,"window-statusbar-background":cS,"tabview-start":bX,"tabview-end":b,"tabview-inactive":O,"tabview-inactive-start":bY,"tabview-inactive-end":k,"table-header-start":cB,"table-header-end":q,"menu-start":z,"menu-end":m,"menubar-start":cB,"groupitem-start":cc,"groupitem-end":ck,"groupitem-text":C,"virtual-row-layer-background-even":C,"virtual-row-layer-background-odd":C}});}
)();
(function(){var a="Liberation Sans",b="Tahoma",c="os.name",d="sans-serif",e="monospace",f="win",g="Arial",h="Lucida Grande",i="osx",j="Courier New",k="os.version",l="Lucida Console",m="7",n="Monaco",o="Candara",p="Segoe UI",q="Consolas",r="vista",s="qx.theme.modern.Font",t="DejaVu Sans Mono";qx.Theme.define(s,{fonts:{"default":{size:(qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r))?12:11,lineHeight:1.4,family:qx.core.Environment.get(c)==i?[h]:((qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r)))?[p,o]:[b,a,g,d]},"bold":{size:(qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r))?12:11,lineHeight:1.4,family:qx.core.Environment.get(c)==i?[h]:((qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r)))?[p,o]:[b,a,g,d],bold:true},"small":{size:(qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r))?11:10,lineHeight:1.4,family:qx.core.Environment.get(c)==i?[h]:((qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r)))?[p,o]:[b,a,g,d]},"monospace":{size:11,lineHeight:1.4,family:qx.core.Environment.get(c)==i?[l,n]:((qx.core.Environment.get(c)==f&&(qx.core.Environment.get(k)==m||qx.core.Environment.get(k)==r)))?[q]:[q,t,j,e]}}});}
)();
(function(){var a="qx.theme.Modern",b="Modern";qx.Theme.define(a,{title:b,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var a="black",b="border-focused-light",c="border-dark",d="solid",e="dotted",f="effect",g="border-separator",h="border-focused-dark",i="tooltip-text",j="border-focused-light-shadow",k="table-header-border",l="table-focus-indicator",m="outset",n="border-focused-dark-shadow",o="qx/decoration/Classic",p="border-lead",q="border-dark-shadow",r="#FFF",s="main",t="invalid",u="shadow",v="border-light-shadow",w="qx.theme.classic.Decoration",x="white",y="gray",z="border-light";qx.Theme.define(w,{aliases:{decoration:o},decorations:{"main":{style:{width:1,color:c}},"keyboard-focus":{style:{width:1,color:a,style:e}},"inset":{style:{width:1,innerWidth:1,color:[q,z,z,q],innerColor:[c,v,v,c]}},"outset":{style:{width:1,innerWidth:1,color:[v,c,c,v],innerColor:[z,q,q,z]}},"groove":{style:{width:1,innerWidth:1,color:[q,z,z,q],innerColor:[z,q,q,z]}},"ridge":{style:{width:1,innerWidth:1,color:[z,q,q,z],innerColor:[q,z,z,q]}},"inset-thin":{style:{width:1,color:[q,z,z,q]}},"outset-thin":{style:{width:1,color:[z,q,q,z]}},"focused-inset":{style:{width:1,innerWidth:1,color:[n,b,b,n],innerColor:[h,j,j,h]}},"focused-outset":{style:{width:1,innerWidth:1,color:[j,h,h,j],innerColor:[b,n,n,b]}},"border-invalid":{style:{width:1,innerWidth:1,color:[q,z,z,q],innerColor:t}},"separator-horizontal":{style:{widthLeft:1,colorLeft:g}},"separator-vertical":{style:{widthTop:1,colorTop:g}},"window":{include:m,style:{shadowLength:1,shadowBlurRadius:2,shadowColor:u}},"lead-item":{style:{width:1,style:e,color:p}},"tooltip":{style:{width:1,color:i,shadowLength:1,shadowBlurRadius:5,shadowColor:u}},"tooltip-error":{style:{width:1,color:i,shadowLength:1,shadowBlurRadius:5,shadowColor:u}},"popup":{include:s,style:{shadowLength:2,shadowBlurRadius:2,shadowColor:u}},"toolbar-separator":{style:{widthLeft:1,colorLeft:q}},"toolbar-part-handle":{style:{width:1,style:d,colorTop:x,colorLeft:x,colorRight:q,colorBottom:q}},"menu":{include:m,style:{shadowLength:1,shadowBlurRadius:3,shadowColor:u}},"menu-separator":{style:{widthTop:1,widthBottom:1,colorTop:c,colorBottom:z}},"datechooser-date-pane":{style:{widthTop:1,colorTop:y,style:d}},"datechooser-weekday":{style:{widthBottom:1,colorBottom:y,style:d}},"datechooser-week":{style:{widthRight:1,colorRight:y,style:d}},"datechooser-week-header":{style:{widthBottom:1,colorBottom:y,widthRight:1,colorRight:y,style:d}},"tabview-page-button-top":{style:{width:1,color:[v,c,c,v],innerWidth:1,innerColor:[z,q,q,z],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{style:{width:1,color:[v,c,c,v],innerWidth:1,innerColor:[z,q,q,z],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{style:{width:1,color:[v,c,c,v],innerWidth:1,innerColor:[z,q,q,z],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{style:{width:1,color:[v,c,c,v],innerWidth:1,innerColor:[z,q,q,z],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{style:{widthTop:1,colorTop:q,styleTop:d}},"table-scroller-header":{style:{widthBottom:1,colorBottom:k,styleBottom:d}},"table-scroller-focus-indicator":{style:{width:2,color:l,style:d}},"table-header-cell":{style:{widthRight:1,colorRight:k,styleRight:d}},"table-header-cell-hovered":{style:{widthRight:1,colorRight:k,styleRight:d,widthBottom:2,colorBottom:f,styleBottom:d}},"progressbar":{style:{backgroundColor:r,width:1,color:g}}}});}
)();
(function(){var a="table-row-background-even",b="decoration/treevirtual/cross_minus.gif",c="radiobutton-hovered",d="menu-slidebar-button",e="keyboard-focus",f="decoration/treevirtual/start_plus.gif",g="background-disabled",h="background",i="scrollbar/button",j="date-chooser-title",k="decoration/cursors/",l="icon/16/actions/dialog-ok.png",m="combobox/button",n="slidebar",o="menu",p="table-scroller-focus-indicator",q="move-frame",r="nodrop",s="date-chooser-selected",t="tabview-page-button-left",u="decoration/arrows/up-small.gif",v="image",w="radiobutton",x="move",y="radiobutton-checked-focused",z="list",A="decoration/arrows/right.gif",B="qx.theme.classic.Appearance",C="decoration/menu/checkbox.gif",D="tooltip-error",E="decoration/arrows/up.gif",F="default",G="button-hovered",H="bold",I="resize-frame",J="decoration/arrows/rewind.gif",K="text-disabled",L="table-scroller-header",M="table-pane",N="white",O="table-header-cell-hover",P="focused-outset",Q="checkbox-hovered",R="text",S="checkbox",T="virtual-list",U="groupbox",V="icon/16/actions/dialog-cancel.png",W="menu-slidebar",X="border-dark",Y="datechooser-date-pane",eJ="background-pane",eF="decoration/treevirtual/cross_plus.gif",eK="decoration/arrows/down-small.gif",eG="qx/icon/Oxygen/16/actions/window-close.png",eH="menu-button",eE="datechooser-week",eI="icon/16/apps/office-calendar.png",eP="datechooser-weekday",eQ="table-header-border",eW="middle",eR="#BABABA",eL="tree",eM="checkbox-undetermined",eN="window-active-caption-text",eO="window-active-caption",eV="icon",fy="checkbox-checked-focused",eX="splitpane",eY="toolbar-separator",eS="groove",eT="invalid",gz="icon/16/places/folder.png",eU="checkbox-pressed",fa="combobox",fb="tree-folder",fc="cell",fh="slidebar/button-forward",fi="tooltip-invalid",fj="icon/16/mimetypes/text-plain.png",fd="decoration/window/restore.gif",fe="scrollbar",ff="decoration/menu/checkbox-invert.gif",fg="right-top",fn="scrollarea",fo="window-inactive-caption-text",gB="inset-thin",fp="text-selected",fk="table-header-cell",fl="button-checked",gA="best-fit",fm="up.gif",ft="checkbox-undetermined-hovered",fu=".png",gG="keep-align",fv="background-focused",fq="tabview-page-button-right",fr="tabview-page-button-top",gE="tabview-page-button-bottom",fs="inset",fw="row-layer",fx="button",fJ="decoration/menu/radiobutton.gif",fI="decoration/arrows/",fH="decoration/table/descending.png",fN="progressbar",fM="tree-file",fL="tooltip-text",fK="checkbox-checked-hovered",fC="left.gif",fB="center",fA="decoration/arrows/up-invert.gif",fz="datechooser/button",fG="alias",fF="datechooser",fE="toolbar-button",fD="outset",fU="decoration/arrows/right-invert.gif",fT="slidebar/button-backward",fS="button-abandoned",fR="radiobutton-checked-disabled",fY="lead-item",fX="checkbox-focused",fW="selectbox",fV="background-light",fQ="decoration/arrows/down.gif",fP="right",fO="decoration/treevirtual/start_minus.gif",gk="main",gj="spinner",gi="button-frame",go="background-field",gn="radiobutton-checked-hovered",gm="popup",gl="treevirtual-folder",gd="decoration/window/minimize.gif",gc="checkbox-checked",gb="table-header-cell-hovered",ga="down.gif",gh="background-selected",gg="window",gf="decoration/treevirtual/end.gif",ge="decoration/treevirtual/end_minus.gif",gu="window-inactive-caption",gt="decoration/menu/radiobutton-invert.gif",gs="text-placeholder",gr="atom",gy="slider",gx="decoration/table/select-column-order.png",gw="decoration/arrows/next.gif",gv="table-header",gq="decoration/treevirtual/only_minus.gif",gp="datechooser-week-header",ed="widget",ec="decoration/window/maximize.gif",gH="decoration/treevirtual/only_plus.gif",ea="checkbox-checked-pressed",eb="date-chooser",dY="decoration/arrows/down-invert.gif",gF="menu-separator",dW="decoration/splitpane/knob-vertical.png",dX=".gif",dV="decoration/arrows/forward.gif",gC="radiobutton-checked-pressed",dT="table-statusbar",dU="radiobutton-pressed",dS="focused-inset",em="decoration/form/",en="light-background",ek="copy",el="table-row-background-selected",ei="radiobutton-focused",ej="decoration/tree/minus.gif",eh="",dR="decoration/splitpane/knob-horizontal.png",ef="outset-thin",eg="textfield",ee="right.gif",eA="radiobutton-checked",ey="decoration/treevirtual/cross.gif",ez="table-scroller/header",ew="decoration/table/ascending.png",ex="decoration/treevirtual/line.gif",ev="tooltip",eB="label",et="decoration/tree/plus.gif",eu="-invalid",es="decoration/treevirtual/end_plus.gif",gD="checkbox-undetermined-focused",eq="toolbar-part-handle",er="decoration/arrows/left.gif",eo="background-invalid",ep="icon/16/places/folder-open.png",eC="decoration/window/close.gif",eD="icon/16/actions/view-refresh.png";qx.Theme.define(B,{appearances:{"widget":{},"label":{style:function(gI){return {textColor:gI.disabled?K:undefined};}
},"image":{style:function(gJ){return {opacity:!gJ.replacement&&gJ.disabled?0.3:undefined};}
},"atom":{},"atom/label":eB,"atom/icon":v,"root":{style:function(gK){return {backgroundColor:h,textColor:R,font:F};}
},"popup":{style:function(gL){return {decorator:gm,backgroundColor:eJ};}
},"tooltip":{include:gm,style:function(gM){return {backgroundColor:ev,textColor:fL,decorator:ev,padding:[1,3,2,3],offset:[15,5,5,5]};}
},"tooltip/atom":gr,"tooltip-error":{include:ev,style:function(gN){return {textColor:fp,showTimeout:100,hideTimeout:10000,decorator:D,font:H,backgroundColor:fi};}
},"tooltip-error/atom":gr,"iframe":{style:function(gO){return {backgroundColor:N,decorator:fs};}
},"move-frame":{style:function(gP){return {decorator:gk};}
},"resize-frame":q,"dragdrop-cursor":{style:function(gQ){var gR=r;if(gQ.copy){gR=ek;}
else if(gQ.move){gR=x;}
else if(gQ.alias){gR=fG;}
;return {source:k+gR+dX,position:fg,offset:[2,16,2,6]};}
},"button-frame":{alias:gr,style:function(gS){if(gS.pressed||gS.abandoned||gS.checked){var gU=!gS.inner&&gS.focused?dS:fs;var gT=[4,3,2,5];}
else {var gU=!gS.inner&&gS.focused?P:fD;var gT=[3,4];}
;return {backgroundColor:gS.abandoned?fS:gS.hovered?G:gS.checked?fl:fx,decorator:gU,padding:gT};}
},"button":{alias:gi,include:gi,style:function(gV){return {center:true};}
},"hover-button":{alias:gr,include:gr,style:function(gW){return {backgroundColor:gW.hovered?gh:undefined,textColor:gW.hovered?fp:undefined};}
},"menubutton":{include:fx,alias:fx,style:function(gX){return {icon:fQ,iconPosition:fP};}
},"splitbutton":{},"splitbutton/button":fx,"splitbutton/arrow":{alias:fx,include:fx,style:function(gY){return {icon:fQ};}
},"scrollarea/corner":{style:function(){return {backgroundColor:h};}
},"scrollarea":ed,"scrollarea/pane":ed,"scrollarea/scrollbar-x":fe,"scrollarea/scrollbar-y":fe,"list":{alias:fn,style:function(ha){var hd;var hc=!!ha.focused;var he=!!ha.invalid;var hb=!!ha.disabled;if(he&&!hb){hd=eo;}
else if(hc&&!he&&!hb){hd=fv;}
else if(hb){hd=g;}
else {hd=N;}
;return {decorator:ha.focused?dS:fs,backgroundColor:hd};}
},"listitem":{alias:gr,style:function(hf){return {gap:4,padding:hf.lead?[2,4]:[3,5],backgroundColor:hf.selected?gh:undefined,textColor:hf.selected?fp:undefined,decorator:hf.lead?fY:undefined,opacity:hf.drag?0.5:undefined};}
},"form-renderer-label":{include:eB,style:function(){return {paddingTop:4};}
},"textfield":{style:function(hg){var hk;var hj=!!hg.focused;var hh=!!hg.invalid;var hi=!!hg.disabled;if(hh&&!hi){hk=eo;}
else if(hj&&!hh&&!hi){hk=fv;}
else if(hi){hk=g;}
else {hk=go;}
;var hl;if(hg.disabled){hl=K;}
else if(hg.showingPlaceholder){hl=gs;}
else {hl=undefined;}
;return {decorator:hg.focused?dS:fs,padding:[2,3],textColor:hl,backgroundColor:hk};}
},"textarea":eg,"checkbox":{alias:gr,style:function(hm){var ho;if(hm.checked){if(hm.disabled){ho=gc;}
else if(hm.focused){ho=fy;}
else if(hm.pressed){ho=ea;}
else if(hm.hovered){ho=fK;}
else {ho=gc;}
;}
else if(hm.undetermined){if(hm.disabled){ho=eM;}
else if(hm.focused){ho=gD;}
else if(hm.hovered){ho=ft;}
else {ho=eM;}
;}
else if(!hm.disabled){if(hm.focused){ho=fX;}
else if(hm.pressed){ho=eU;}
else if(hm.hovered){ho=Q;}
;}
;ho=ho||S;var hn=hm.invalid&&!hm.disabled?eu:eh;return {icon:em+ho+hn+fu,gap:6};}
},"radiobutton":{alias:S,include:S,style:function(hp){var hr;if(hp.checked&&hp.focused){hr=y;}
else if(hp.checked&&hp.disabled){hr=fR;}
else if(hp.checked&&hp.pressed){hr=gC;}
else if(hp.checked&&hp.hovered){hr=gn;}
else if(hp.checked){hr=eA;}
else if(hp.focused){hr=ei;}
else if(hp.pressed){hr=dU;}
else if(hp.hovered){hr=c;}
else {hr=w;}
;var hq=hp.invalid&&!hp.disabled?eu:eh;return {icon:em+hr+hq+fu};}
},"spinner":{style:function(hs){return {decorator:hs.focused?dS:fs,textColor:hs.disabled?K:undefined};}
},"spinner/textfield":{include:eg,style:function(ht){return {decorator:undefined,padding:[2,3]};}
},"spinner/upbutton":{alias:fx,include:fx,style:function(hu){return {icon:u,padding:hu.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:hu.hovered?G:fx};}
},"spinner/downbutton":{alias:fx,include:fx,style:function(hv){return {icon:eK,padding:hv.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:hv.hovered?G:fx};}
},"datefield":fa,"datefield/button":{alias:m,include:m,style:function(hw){return {icon:eI,padding:[0,3],backgroundColor:undefined,decorator:undefined};}
},"datefield/list":{alias:fF,include:fF,style:function(hx){return {decorator:hx.focused?dS:fs};}
},"groupbox":{style:function(hy){return {backgroundColor:h};}
},"groupbox/legend":{alias:gr,style:function(hz){return {backgroundColor:h,textColor:hz.invalid?eT:undefined,padding:[1,0,1,4]};}
},"groupbox/frame":{style:function(hA){return {padding:[12,9],marginTop:10,decorator:eS};}
},"check-groupbox":U,"check-groupbox/legend":{alias:S,include:S,style:function(hB){return {backgroundColor:h,textColor:hB.invalid?eT:undefined,padding:[1,0,1,4]};}
},"radio-groupbox":U,"radio-groupbox/legend":{alias:w,include:w,style:function(hC){return {backgroundColor:h,textColor:hC.invalid?eT:undefined,padding:[1,0,1,4]};}
},"toolbar":{style:function(hD){return {backgroundColor:h};}
},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(hE){return {decorator:eq,backgroundColor:h,padding:[0,1],margin:[3,2],allowGrowY:true};}
},"toolbar-separator":{style:function(hF){return {margin:[3,2],decorator:eY};}
},"toolbar-button":{alias:gr,style:function(hG){if(hG.pressed||hG.checked||hG.abandoned){var hI=gB;var hH=[3,2,1,4];}
else if(hG.hovered&&!hG.disabled){var hI=ef;var hH=[2,3];}
else {var hI=undefined;var hH=[3,4];}
;return {cursor:F,decorator:hI,padding:hH,backgroundColor:hG.abandoned?fS:hG.checked?fV:fx};}
},"toolbar-menubutton":{alias:fE,include:fE,style:function(hJ){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:v,include:v,style:function(hK){return {source:eK};}
},"toolbar-splitbutton":{},"toolbar-splitbutton/button":fE,"toolbar-splitbutton/arrow":{alias:fE,include:fE,style:function(hL){return {icon:fQ};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fx,include:fx,style:function(hM){return {icon:hM.vertical?fQ:gw};}
},"slidebar/button-backward":{alias:fx,include:fx,style:function(hN){return {icon:hN.vertical?E:er};}
},"tabview":{},"tabview/bar":{alias:n,style:function(hO){var hP=0,hS=0,hQ=0,hR=0;if(hO.barTop){hQ=-2;}
else if(hO.barBottom){hP=-2;}
else if(hO.barRight){hR=-2;}
else {hS=-2;}
;return {marginBottom:hQ,marginTop:hP,marginLeft:hR,marginRight:hS};}
},"tabview/bar/button-forward":{include:fh,alias:fh,style:function(hT){if(hT.barTop||hT.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/button-backward":{include:fT,alias:fT,style:function(hU){if(hU.barTop||hU.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/pane":{style:function(hV){return {backgroundColor:h,decorator:fD,padding:10};}
},"tabview-page":ed,"tabview-page/button":{style:function(ia){var ih;var ie=0,ic=0,hX=0,ib=0;if(ia.barTop||ia.barBottom){var hY=2,hW=2,id=6,ig=6;}
else {var hY=6,hW=6,id=6,ig=6;}
;if(ia.barTop){ih=fr;}
else if(ia.barRight){ih=fq;}
else if(ia.barBottom){ih=gE;}
else {ih=t;}
;if(ia.checked){if(ia.barTop||ia.barBottom){id+=2;ig+=2;}
else {hY+=2;hW+=2;}
;}
else {if(ia.barTop||ia.barBottom){hX+=2;ie+=2;}
else if(ia.barLeft||ia.barRight){ic+=2;ib+=2;}
;}
;if(ia.checked){if(!ia.firstTab){if(ia.barTop||ia.barBottom){ib=-4;}
else {ie=-4;}
;}
;if(!ia.lastTab){if(ia.barTop||ia.barBottom){ic=-4;}
else {hX=-4;}
;}
;}
;return {zIndex:ia.checked?10:5,decorator:ih,backgroundColor:h,padding:[hY,ig,hW,id],margin:[ie,ic,hX,ib],textColor:ia.disabled?K:undefined};}
},"tabview-page/button/label":{alias:eB,style:function(ii){return {padding:ii.focused?[0,1,0,1]:[1,2,1,2],decorator:ii.focused?e:undefined};}
},"tabview-page/button/icon":v,"tabview-page/button/close-button":{alias:gr,style:function(ij){return {icon:eG};}
},"scrollbar":{},"scrollbar/slider":{alias:gy,style:function(ik){return {backgroundColor:fV};}
},"scrollbar/slider/knob":{include:gi,style:function(il){return {height:14,width:14,minHeight:il.horizontal?undefined:9,minWidth:il.horizontal?9:undefined};}
},"scrollbar/button":{alias:fx,include:fx,style:function(im){var io;if(im.up||im.down){if(im.pressed||im.abandoned||im.checked){io=[5,2,3,4];}
else {io=[4,3];}
;}
else {if(im.pressed||im.abandoned||im.checked){io=[4,3,2,5];}
else {io=[3,4];}
;}
;var ip=fI;if(im.left){ip+=fC;}
else if(im.right){ip+=ee;}
else if(im.up){ip+=fm;}
else {ip+=ga;}
;return {padding:io,icon:ip};}
},"scrollbar/button-begin":i,"scrollbar/button-end":i,"slider":{style:function(iq){var ir;if(iq.disabled){ir=g;}
else if(iq.invalid){ir=eo;}
else if(iq.focused){ir=fV;}
else {ir=go;}
;return {backgroundColor:ir,decorator:iq.focused?dS:fs};}
},"slider/knob":{include:gi,style:function(is){return {width:14,height:14,decorator:fD};}
},"tree-folder/open":{style:function(it){return {source:it.opened?ej:et};}
},"tree-folder":{style:function(iu){return {padding:[2,3,2,0],icon:iu.opened?ep:gz,iconOpened:ep,opacity:iu.drag?0.5:undefined};}
},"tree-folder/icon":{style:function(iv){return {padding:[0,4,0,0]};}
},"tree-folder/label":{style:function(iw){return {padding:[1,2],backgroundColor:iw.selected?gh:undefined,textColor:iw.selected?fp:undefined};}
},"tree-file":{include:fb,alias:fb,style:function(ix){return {icon:fj,opacity:ix.drag?0.5:undefined};}
},"tree":{include:z,alias:z,style:function(iy){return {contentPadding:[4,4,4,4]};}
},"treevirtual":{style:function(iz){return {decorator:gk};}
},"treevirtual-folder":{style:function(iA){return {icon:(iA.opened?ep:gz),opacity:iA.drag?0.5:undefined};}
},"treevirtual-file":{include:gl,alias:gl,style:function(iB){return {icon:fj,opacity:iB.drag?0.5:undefined};}
},"treevirtual-line":{style:function(iC){return {icon:ex};}
},"treevirtual-contract":{style:function(iD){return {icon:ej};}
},"treevirtual-expand":{style:function(iE){return {icon:et};}
},"treevirtual-only-contract":{style:function(iF){return {icon:gq};}
},"treevirtual-only-expand":{style:function(iG){return {icon:gH};}
},"treevirtual-start-contract":{style:function(iH){return {icon:fO};}
},"treevirtual-start-expand":{style:function(iI){return {icon:f};}
},"treevirtual-end-contract":{style:function(iJ){return {icon:ge};}
},"treevirtual-end-expand":{style:function(iK){return {icon:es};}
},"treevirtual-cross-contract":{style:function(iL){return {icon:b};}
},"treevirtual-cross-expand":{style:function(iM){return {icon:eF};}
},"treevirtual-end":{style:function(iN){return {icon:gf};}
},"treevirtual-cross":{style:function(iO){return {icon:ey};}
},"window":{style:function(iP){return {contentPadding:[10,10,10,10],backgroundColor:h,decorator:iP.maximized?undefined:gg};}
},"window-resize-frame":I,"window/pane":{},"window/captionbar":{style:function(iQ){return {padding:1,backgroundColor:iQ.active?eO:gu,textColor:iQ.active?eN:fo};}
},"window/icon":{style:function(iR){return {marginRight:4};}
},"window/title":{style:function(iS){return {cursor:F,font:H,marginRight:20,alignY:eW};}
},"window/minimize-button":{include:fx,alias:fx,style:function(iT){return {icon:gd,padding:iT.pressed||iT.abandoned?[2,1,0,3]:[1,2]};}
},"window/restore-button":{include:fx,alias:fx,style:function(iU){return {icon:fd,padding:iU.pressed||iU.abandoned?[2,1,0,3]:[1,2]};}
},"window/maximize-button":{include:fx,alias:fx,style:function(iV){return {icon:ec,padding:iV.pressed||iV.abandoned?[2,1,0,3]:[1,2]};}
},"window/close-button":{include:fx,alias:fx,style:function(iW){return {marginLeft:2,icon:eC,padding:iW.pressed||iW.abandoned?[2,1,0,3]:[1,2]};}
},"window/statusbar":{style:function(iX){return {decorator:gB,padding:[2,6]};}
},"window/statusbar-text":eB,"resizer":{style:function(iY){return {decorator:fD};}
},"splitpane":{},"splitpane/splitter":{style:function(ja){return {backgroundColor:h};}
},"splitpane/splitter/knob":{style:function(jb){return {source:jb.horizontal?dR:dW,padding:2};}
},"splitpane/slider":{style:function(jc){return {backgroundColor:X,opacity:0.3};}
},"selectbox":{include:gi,style:function(jd){var je=fx;if(jd.invalid&&!jd.disabled){je=eo;}
else if(jd.abandoned){je=fS;}
else if(!jd.abandoned&&jd.hovered){je=G;}
else if(!jd.abandoned&&!jd.hovered&&jd.checked){je=fl;}
;return {backgroundColor:je};}
},"selectbox/atom":gr,"selectbox/popup":gm,"selectbox/list":z,"selectbox/arrow":{include:v,style:function(jf){return {source:fQ,paddingRight:4,paddingLeft:5};}
},"datechooser":{style:function(jg){return {decorator:fD};}
},"datechooser/navigation-bar":{style:function(jh){return {backgroundColor:eb,textColor:jh.disabled?K:jh.invalid?eT:undefined,padding:[2,10]};}
},"datechooser/last-year-button-tooltip":ev,"datechooser/last-month-button-tooltip":ev,"datechooser/next-year-button-tooltip":ev,"datechooser/next-month-button-tooltip":ev,"datechooser/last-year-button":fz,"datechooser/last-month-button":fz,"datechooser/next-year-button":fz,"datechooser/next-month-button":fz,"datechooser/button/icon":{},"datechooser/button":{style:function(ji){var jj={width:17,show:eV};if(ji.lastYear){jj.icon=J;}
else if(ji.lastMonth){jj.icon=er;}
else if(ji.nextYear){jj.icon=dV;}
else if(ji.nextMonth){jj.icon=A;}
;if(ji.pressed||ji.checked||ji.abandoned){jj.decorator=gB;}
else if(ji.hovered){jj.decorator=ef;}
else {jj.decorator=undefined;}
;if(ji.pressed||ji.checked||ji.abandoned){jj.padding=[2,0,0,2];}
else if(ji.hovered){jj.padding=1;}
else {jj.padding=2;}
;return jj;}
},"datechooser/month-year-label":{style:function(jk){return {font:H,textAlign:fB};}
},"datechooser/date-pane":{style:function(jl){return {decorator:Y,backgroundColor:eb};}
},"datechooser/weekday":{style:function(jm){return {decorator:eP,font:H,textAlign:fB,textColor:jm.disabled?K:jm.weekend?j:eb,backgroundColor:jm.weekend?eb:j};}
},"datechooser/day":{style:function(jn){return {textAlign:fB,decorator:jn.today?gk:undefined,textColor:jn.disabled?K:jn.selected?fp:jn.otherMonth?K:undefined,backgroundColor:jn.disabled?undefined:jn.selected?s:undefined,padding:[2,4]};}
},"datechooser/week":{style:function(jo){return {textAlign:fB,textColor:j,padding:[2,4],decorator:jo.header?gp:eE};}
},"combobox":{style:function(jp){var jq;if(jp.disabled){jq=g;}
else if(jp.invalid){jq=eo;}
else if(jp.focused){jq=fv;}
else {jq=go;}
;return {decorator:jp.focused?dS:fs,textColor:jp.disabled?K:undefined,backgroundColor:jq};}
},"combobox/button":{alias:fx,include:fx,style:function(jr){return {icon:fQ,backgroundColor:jr.hovered?G:fx};}
},"combobox/popup":gm,"combobox/list":z,"combobox/textfield":{include:eg,style:function(js){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};}
},"menu":{style:function(jt){var ju={backgroundColor:h,decorator:o,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:jt.submenu||jt.contextmenu?gA:gG};if(jt.submenu){ju.position=fg;ju.offset=[-2,-3];}
;if(jt.contextmenu){ju.offset=4;}
;return ju;}
},"menu/slidebar":W,"menu-slidebar":ed,"menu-slidebar-button":{style:function(jv){return {backgroundColor:jv.hovered?gh:undefined,padding:6,center:true};}
},"menu-slidebar/button-backward":{include:d,style:function(jw){return {icon:jw.hovered?fA:E};}
},"menu-slidebar/button-forward":{include:d,style:function(jx){return {icon:jx.hovered?dY:fQ};}
},"menu-separator":{style:function(jy){return {height:0,decorator:gF,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};}
},"menu-button":{alias:gr,style:function(jz){return {backgroundColor:jz.selected?gh:undefined,textColor:jz.selected?fp:undefined,padding:[2,6]};}
},"menu-button/icon":{include:v,style:function(jA){return {alignY:eW};}
},"menu-button/label":{include:eB,style:function(jB){return {alignY:eW,padding:1};}
},"menu-button/shortcut":{include:eB,style:function(jC){return {alignY:eW,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:v,style:function(jD){return {source:jD.selected?fU:A,alignY:eW};}
},"menu-checkbox":{alias:eH,include:eH,style:function(jE){return {icon:!jE.checked?undefined:jE.selected?ff:C};}
},"menu-radiobutton":{alias:eH,include:eH,style:function(jF){return {icon:!jF.checked?undefined:jF.selected?gt:fJ};}
},"menubar":{style:function(jG){return {backgroundColor:h,decorator:fD};}
},"menubar-button":{alias:gr,style:function(jH){return {padding:[2,6],backgroundColor:jH.pressed||jH.hovered&&!jH.disabled?gh:undefined,textColor:jH.pressed||jH.hovered?fp:undefined};}
},"colorselector":ed,"colorselector/control-bar":ed,"colorselector/visual-pane":U,"colorselector/control-pane":ed,"colorselector/preset-grid":ed,"colorselector/colorbucket":{style:function(jI){return {decorator:gB,width:16,height:16};}
},"colorselector/preset-field-set":U,"colorselector/input-field-set":{include:U,alias:U,style:function(){return {paddingTop:12};}
},"colorselector/preview-field-set":{include:U,alias:U,style:function(){return {paddingTop:12};}
},"colorselector/hex-field-composite":ed,"colorselector/hex-field":eg,"colorselector/rgb-spinner-composite":ed,"colorselector/rgb-spinner-red":gj,"colorselector/rgb-spinner-green":gj,"colorselector/rgb-spinner-blue":gj,"colorselector/hsb-spinner-composite":ed,"colorselector/hsb-spinner-hue":gj,"colorselector/hsb-spinner-saturation":gj,"colorselector/hsb-spinner-brightness":gj,"colorselector/preview-content-old":{style:function(jJ){return {decorator:gB,width:50,height:10};}
},"colorselector/preview-content-new":{style:function(jK){return {decorator:gB,backgroundColor:N,width:50,height:10};}
},"colorselector/hue-saturation-field":{style:function(jL){return {decorator:gB,margin:5};}
},"colorselector/brightness-field":{style:function(jM){return {decorator:gB,margin:[5,7]};}
},"colorselector/hue-saturation-pane":ed,"colorselector/hue-saturation-handle":ed,"colorselector/brightness-pane":ed,"colorselector/brightness-handle":ed,"table":ed,"table/statusbar":{style:function(jN){return {decorator:dT,paddingLeft:2,paddingRight:2};}
},"table/column-button":{alias:fx,style:function(jO){var jQ,jP;if(jO.pressed||jO.checked||jO.abandoned){jQ=gB;jP=[3,2,1,4];}
else if(jO.hovered){jQ=ef;jP=[2,3];}
else {jQ=undefined;jP=[3,4];}
;return {decorator:jQ,padding:jP,backgroundColor:jO.abandoned?fS:fx,icon:gx};}
},"table-column-reset-button":{extend:eH,alias:eH,style:function(){return {icon:eD};}
},"table-scroller/scrollbar-x":fe,"table-scroller/scrollbar-y":fe,"table-scroller":ed,"table-scroller/header":{style:function(jR){return {decorator:L,backgroundColor:gv};}
},"table-scroller/pane":{style:function(jS){return {backgroundColor:M};}
},"table-scroller/focus-indicator":{style:function(jT){return {decorator:p};}
},"table-scroller/resize-line":{style:function(jU){return {backgroundColor:eQ,width:3};}
},"table-header-cell":{alias:gr,style:function(jV){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:jV.hovered?0:2,decorator:jV.hovered?gb:fk,backgroundColor:jV.hovered?O:fk,sortIcon:jV.sorted?(jV.sortedAscending?ew:fH):undefined};}
},"table-header-cell/icon":{style:function(jW){return {marginRight:4,opacity:jW.disabled?0.3:1};}
},"table-header-cell/sort-icon":{style:function(jX){return {alignY:eW,opacity:jX.disabled?0.3:1};}
},"table-editor-textfield":{include:eg,style:function(jY){return {decorator:undefined,padding:[2,2]};}
},"table-editor-selectbox":{include:fW,alias:fW,style:function(ka){return {padding:[0,2]};}
},"table-editor-combobox":{include:fa,alias:fa,style:function(kb){return {decorator:undefined};}
},"progressive-table-header":{alias:ez},"progressive-table-header-cell":{style:function(kc){return {decorator:fk,backgroundColor:fk,padding:[0,6,0,6]};}
},"colorpopup":{alias:gm,include:gm,style:function(kd){return {decorator:fD,padding:5,backgroundColor:h};}
},"colorpopup/field":{style:function(ke){return {decorator:gB,margin:2,width:14,height:14,backgroundColor:h};}
},"colorpopup/selector-button":fx,"colorpopup/auto-button":fx,"colorpopup/preview-pane":U,"colorpopup/current-preview":{style:function(kf){return {height:20,padding:4,marginLeft:4,decorator:gB,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(kg){return {height:20,padding:4,marginRight:4,decorator:gB,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:fx,include:fx,style:function(kh){return {icon:l};}
},"colorpopup/colorselector-cancelbutton":{alias:fx,include:fx,style:function(ki){return {icon:V};}
},"virtual-list":z,"virtual-list/row-layer":fw,"row-layer":ed,"column-layer":ed,"group-item":{include:eB,alias:eB,style:function(kj){return {padding:4,backgroundColor:eR,textColor:N,font:H};}
},"virtual-selectbox":fW,"virtual-selectbox/dropdown":gm,"virtual-selectbox/dropdown/list":{alias:T},"virtual-combobox":fa,"virtual-combobox/dropdown":gm,"virtual-combobox/dropdown/list":{alias:T},"virtual-tree":{include:eL,alias:eL,style:function(kk){return {itemHeight:21};}
},"virtual-tree-folder":fb,"virtual-tree-file":fM,"cell":{style:function(kl){return {backgroundColor:kl.selected?el:a,textColor:kl.selected?fp:R,padding:[3,6]};}
},"cell-string":fc,"cell-number":{include:fc,style:function(km){return {textAlign:fP};}
},"cell-image":fc,"cell-boolean":fc,"cell-atom":fc,"cell-date":fc,"cell-html":fc,"progressbar":{style:function(kn){return {decorator:fN,padding:[1],backgroundColor:N,width:200,height:20};}
},"progressbar/progress":{style:function(ko){return {backgroundColor:ko.disabled?g:gh};}
},"app-header":{style:function(kp){return {textColor:fp,backgroundColor:gh,padding:[8,12]};}
},"app-header-label":eB,"app-splitpane":{alias:eX,style:function(kq){return {padding:[0,10,10,10],backgroundColor:en};}
}}});}
)();
(function(){var a="Liberation Sans",b="Verdana",c="Bitstream Vera Sans",d="Lucida Grande",e="Tahoma",f="monospace",g="qx.theme.classic.Font",h="Courier New",i="DejaVu Sans Mono";qx.Theme.define(g,{fonts:{"default":{size:11,lineHeight:1.4,family:[d,e,b,c,a]},"bold":{size:11,lineHeight:1.4,family:[d,e,b,c,a],bold:true},"small":{size:10,lineHeight:1.4,family:[d,e,b,c,a]},"monospace":{size:11,lineHeight:1.4,family:[i,h,f]}}});}
)();
(function(){var a="Oxygen",b="qx.theme.icon.Oxygen",c="qx/icon/Oxygen";qx.Theme.define(b,{title:a,aliases:{"icon":c}});}
)();
(function(){var a="black",b="#888888",c="#3E6CA8",d="#3E5B97",e="#EBE9ED",f="#FFFFE1",g="#F3F8FD",h="#A7A6AA",i="#666666",j="#CBC8CD",k="#FFE0E0",l="#F4F4F4",m="#808080",n="#CCCCCC",o="#C82C2C",p="#DBEAF9",q="#BCCEE5",r="#A5BDDE",s="#7CA0CF",t="#EEE",u="#F3F0F5",v="#F6F5F7",w="#FF9999",x="qx.theme.classic.Color",y="css.rgba",z="#990000",A="#F9F8E9",B="white",C="gray",D="#DCDFE4",E="rgba(0, 0, 0, 0.4)",F="#FAFBFE",G="#AAAAAA",H="#85878C";qx.Theme.define(x,{colors:{"background":e,"background-light":u,"light-background":e,"background-focused":g,"background-focused-inner":p,"background-disabled":l,"background-selected":c,"background-field":B,"background-pane":F,"background-invalid":k,"border-lead":b,"border-light":B,"border-light-shadow":D,"border-dark-shadow":h,"border-dark":H,"border-main":H,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":s,"border-focused-dark":c,"border-separator":m,"shadow":qx.core.Environment.get(y)?E:i,"invalid":z,"border-focused-invalid":w,"text":a,"text-disabled":h,"text-selected":B,"text-focused":d,"text-placeholder":j,"tooltip":f,"tooltip-text":a,"tooltip-invalid":o,"button":e,"button-hovered":v,"button-abandoned":A,"button-checked":u,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":B,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":B,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":t,"table-column-line":t,"progressive-table-header":G,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":C,"progressive-progressbar-indicator-done":n,"progressive-progressbar-indicator-undone":B,"progressive-progressbar-percent-background":C,"progressive-progressbar-percent-text":B}});}
)();
(function(){var a="Classic Windows",b="qx.theme.Classic";qx.Theme.define(b,{title:a,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});}
)();
(function(){var c="qx.dev.ObjectSummary",d="\n",e=" Objects)\n\n",f=")\r\n",g=" (",h=" Objects)\r\n\r\n",j=": ",k=", ",l="Summary: (";qx.Class.define(c,{statics:{getInfo:function(){var m={};var t=0;var n;var p=qx.core.ObjectRegistry.getRegistry();for(var q in p){n=p[q];if(n&&n.isDisposed()===false){if(m[n.classname]==null){m[n.classname]=1;}
else {m[n.classname]++ ;}
;t++ ;}
;}
;var s=[];for(var o in m){s.push({classname:o,number:m[o]});}
;s.sort(function(a,b){return b.number-a.number;}
);var r=l+t+e;for(var i=0;i<s.length;i++ ){r+=s[i].number+j+s[i].classname+d;}
;return r;}
,getNewObjects:function(){var v={};var F=0;var w;var A=qx.core.ObjectRegistry.getRegistry();var y={};var E;for(var B in A){w=A[B];if(w&&w.isDisposed()===false){var z=w.classname;if(v[z]==null){v[z]=1;}
else {v[z]++ ;}
;E=y[z];if(E==null){E=y[z]=[];}
;E[E.length]=w.toHashCode();F++ ;}
;}
;if(!this._m_dObjectList){this._m_dObjectList={};}
;var u={};for(var z in v){if(!(z in this._m_dObjectList)){this._m_dObjectList[z]=0;}
;if(this._m_dObjectList[z]>=0&&this._m_dObjectList[z]<v[z]){u[z]=v[z]-this._m_dObjectList[z];}
;}
;this._m_dObjectList=v;var D=[];for(var x in u){D.push({classname:x,number:u[x],aHashCode:y[x]});}
;D.sort(function(a,b){return b.number-a.number;}
);var C=l+F+h;for(var i=0;i<D.length;i++ ){C+=D[i].number+j+D[i].classname+g+D[i].aHashCode.join(k)+f;}
;return C;}
}});}
)();


qx.$$loader.init();


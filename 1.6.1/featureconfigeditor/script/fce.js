(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"fce.reportServerAddUrl":"/reports/features/add","fce.reportServerGetUrl":"/reports/features/get","fce.reportServerHost":null,"qx.allowUrlSettings":true,"qx.application":"fce.Application","qx.debug":false,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.optimization.basecalls":true,"qx.optimization.comments":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.revision":"","qx.theme":"fce.theme.Theme","qx.version":"1.6.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"fce":{"resourceUri":"resource","sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script"},"qxc.ui.versionlabel":{"resourceUri":"resource","sourceUri":"script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"en":null};
qx.$$locales = {"C":null,"en":null};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:fce.396c59215be4.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
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
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
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

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  var item = list.shift();
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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"}},"resources":{"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-next.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-previous.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/help-contents.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-restore.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-new.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"en":{}}};
(function(){var m="toString",k=".",j="Object",h='"',g="Array",f="()",e="String",d="Function",c=".prototype",b="function",K="Boolean",J="Error",I="constructor",H="warn",G="default",F="hasOwnProperty",E="string",D="toLocaleString",C="RegExp",B='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="debug",z="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,L){var N=name.split(k);
var parent=window;
var M=N[0];

for(var i=0,O=N.length-1;i<O;i++,M=N[i]){if(!parent[M]){parent=parent[M]={};
}else{parent=parent[M];
}}parent[M]=L;
return M;
},setDisplayName:function(P,Q,name){P.displayName=Q+k+name+f;
},setDisplayNames:function(R,S){for(var name in R){var T=R[name];

if(T instanceof Function){T.displayName=S+k+name+f;
}}},define:function(name,U){if(!U){var U={statics:{}};
}var ba;
var X=null;
qx.Bootstrap.setDisplayNames(U.statics,name);

if(U.members||U.extend){qx.Bootstrap.setDisplayNames(U.members,name+c);
ba=U.construct||new Function;

if(U.extend){this.extendClass(ba,ba,U.extend,name,Y);
}var V=U.statics||{};
for(var i=0,bb=qx.Bootstrap.getKeys(V),l=bb.length;i<l;i++){var bc=bb[i];
ba[bc]=V[bc];
}X=ba.prototype;
var W=U.members||{};
for(var i=0,bb=qx.Bootstrap.getKeys(W),l=bb.length;i<l;i++){var bc=bb[i];
X[bc]=W[bc];
}}else{ba=U.statics||{};
}var Y=this.createNamespace(name,ba);
ba.name=ba.classname=name;
ba.basename=Y;
ba.$$type=o;
if(!ba.hasOwnProperty(m)){ba.toString=this.genericToString;
}if(U.defer){U.defer(ba,X);
}qx.Bootstrap.$$registry[name]=ba;
return ba;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var bd=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){bd=false;
}return bd;
})(),getEnvironmentSetting:function(be){if(qx.$$environment){return qx.$$environment[be];
}},setEnvironmentSetting:function(bf,bg){if(!qx.$$environment){qx.$$environment={};
}
if(qx.$$environment[bf]===undefined){qx.$$environment[bf]=bg;
}},createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bh,bi,bj,name,bk){var bn=bj.prototype;
var bm=new Function;
bm.prototype=bn;
var bl=new bm;
bh.prototype=bl;
bl.name=bl.classname=name;
bl.basename=bk;
bi.base=bh.superclass=bj;
bi.self=bh.constructor=bl.constructor=bh;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:function(bo){var length=0;

for(var bp in bo){length++;
}return length;
},objectMergeWith:function(bq,br,bs){if(bs===undefined){bs=true;
}
for(var bt in br){if(bs||bq[bt]===undefined){bq[bt]=br[bt];
}}return bq;
},__a:[r,F,D,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bu){var bv=[];
var bx=Object.prototype.hasOwnProperty;

for(var by in bu){if(bx.call(bu,by)){bv.push(by);
}}var bw=qx.Bootstrap.__a;

for(var i=0,a=bw,l=a.length;i<l;i++){if(bx.call(bu,a[i])){bv.push(a[i]);
}}return bv;
},"default":function(bz){var bA=[];
var bB=Object.prototype.hasOwnProperty;

for(var bC in bz){if(bB.call(bz,bC)){bA.push(bC);
}}return bA;
}})[typeof (Object.keys)==b?z:(function(){for(var bD in {toString:1}){return bD;
}})()!==m?u:G],getKeysAsString:function(bE){var bF=qx.Bootstrap.getKeys(bE);

if(bF.length==0){return p;
}return h+bF.join(B)+h;
},__b:{"[object String]":e,"[object Array]":g,"[object Object]":j,"[object RegExp]":C,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":d,"[object Error]":J},bind:function(bG,self,bH){var bI=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bJ=Array.prototype.slice.call(arguments,0,arguments.length);
return bG.apply(self,bI.concat(bJ));
};
},firstUp:function(bK){return bK.charAt(0).toUpperCase()+bK.substr(1);
},firstLow:function(bL){return bL.charAt(0).toLowerCase()+bL.substr(1);
},getClass:function(bM){var bN=Object.prototype.toString.call(bM);
return (qx.Bootstrap.__b[bN]||bN.slice(8,-1));
},isString:function(bO){return (bO!==null&&(typeof bO===E||qx.Bootstrap.getClass(bO)==e||bO instanceof String||(!!bO&&!!bO.$$isString)));
},isArray:function(bP){return (bP!==null&&(bP instanceof Array||(bP&&qx.data&&qx.data.IListData&&qx.util.OOUtil.hasInterface(bP.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bP)==g||(!!bP&&!!bP.$$isArray)));
},isObject:function(bQ){return (bQ!==undefined&&bQ!==null&&qx.Bootstrap.getClass(bQ)==j);
},isFunction:function(bR){return qx.Bootstrap.getClass(bR)==d;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bS,name){while(bS){if(bS.$$properties&&bS.$$properties[name]){return bS.$$properties[name];
}bS=bS.superclass;
}return null;
},hasProperty:function(bT,name){return !!qx.Bootstrap.getPropertyDefinition(bT,name);
},getEventType:function(bU,name){var bU=bU.constructor;

while(bU.superclass){if(bU.$$events&&bU.$$events[name]!==undefined){return bU.$$events[name];
}bU=bU.superclass;
}return null;
},supportsEvent:function(bV,name){return !!qx.Bootstrap.getEventType(bV,name);
},getByInterface:function(bW,bX){var bY,i,l;

while(bW){if(bW.$$implements){bY=bW.$$flatImplements;

for(i=0,l=bY.length;i<l;i++){if(bY[i]===bX){return bW;
}}}bW=bW.superclass;
}return null;
},hasInterface:function(ca,cb){return !!qx.Bootstrap.getByInterface(ca,cb);
},getMixins:function(cc){var cd=[];

while(cc){if(cc.$$includes){cd.push.apply(cd,cc.$$flatIncludes);
}cc=cc.superclass;
}return cd;
},$$logs:[],debug:function(ce,cf){qx.Bootstrap.$$logs.push([A,arguments]);
},info:function(cg,ch){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ci,cj){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(ck,cl){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(cm){}}});
})();
(function(){var a="qx.util.OOUtil";
qx.Bootstrap.define(a,{statics:{classIsDefined:qx.Bootstrap.classIsDefined,getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,getByInterface:qx.Bootstrap.getByInterface,hasInterface:qx.Bootstrap.hasInterface,getMixins:qx.Bootstrap.getMixins}});
})();
(function(){var cs="qx.bom.client.CssTransform.get3D",cr="default",cq="|",cp="qx.allowUrlSettings",co="qx.bom.client.Stylesheet.getInsertRule",cn="css.transform.3d",cm="qx.bom.client.Html.getDataset",cl="qx.bom.client.PhoneGap.getPhoneGap",ck="qx.bom.client.Html.getAudioAif",cj="qx.debug.dispose",bt="qx.bom.client.Xml.getAttributeNS",bs="qx.bom.client.Stylesheet.getRemoveImport",br="qx.bom.client.Css.getUserModify",bq="qx.bom.client.Css.getBoxShadow",bp="qx.bom.client.Event.getHashChange",bo="qx.bom.client.Plugin.getWindowsMedia",bn="qx.bom.client.Html.getVideo",bm="qx.bom.client.Device.getName",bl="qx.bom.client.Event.getTouch",bk="qx.optimization.strings",cz="qx.optimization.variables",cA="qx.bom.client.EcmaScript.getStackTrace",cx="qx.bom.client.EcmaScript.getObjectCount",cy="qx.bom.client.Xml.getSelectSingleNode",cv="css.gradient.linear",cw="qx.bom.client.Xml.getImplementation",ct="qx.bom.client.Html.getConsole",cu="qx.bom.client.Engine.getVersion",cB="qx.bom.client.Plugin.getQuicktime",cC="qx.propertyDebugLevel",bR="qx.bom.client.Html.getNaturalDimensions",bQ="qx.bom.client.Xml.getSelectNodes",bT="qx.bom.client.Xml.getElementsByTagNameNS",bS="qx.bom.client.Html.getDataUrl",bV="qx.bom.client.Flash.isAvailable",bU="qx.bom.client.Html.getCanvas",bX="qx.bom.client.Css.getBoxModel",bW="qx.bom.client.Plugin.getSilverlight",bP="qx.bom.client.Css.getUserSelect",bO="qx.bom.client.Css.getRadialGradient",a="module.property",b="qx.bom.client.Plugin.getWindowsMediaVersion",c="qx.bom.client.Stylesheet.getCreateStyleSheet",d="qx.bom.client.Locale.getLocale",e="module.events",f="module.databinding",g="qx.bom.client.Html.getFileReader",h="qx.bom.client.Css.getBorderImage",j="qx.bom.client.Stylesheet.getDeleteRule",k="qx.bom.client.Plugin.getDivXVersion",cG="qx.bom.client.Scroll.scrollBarOverlayed",cF="qx.bom.client.Plugin.getPdfVersion",cE=":",cD="qx.bom.client.Css.getLinearGradient",cK="qx.bom.client.Transport.getXmlHttpRequest",cJ="qx.bom.client.Css.getBorderImageSyntax",cI="qx.bom.client.Html.getClassList",cH="qx.bom.client.Event.getHelp",cM="qx.optimization.comments",cL="qx.bom.client.Locale.getVariant",J="qx.bom.client.Css.getBoxSizing",K="qx.bom.client.OperatingSystem.getName",H="module.logger",I="qx.bom.client.Css.getOverflowXY",N="qx.mobile.emulatetouch",O="qx.bom.client.Html.getAudioWav",L="qx.bom.client.Browser.getName",M="qx.bom.client.Css.getInlineBlock",F="qx.bom.client.Plugin.getPdf",G="qx.dynlocale",s="qx.bom.client.Html.getAudio",r="qx.core.Environment",u="qx.bom.client.CssTransform.getSupport",t="qx.bom.client.Html.getTextContent",o="qx.bom.client.Css.getPlaceholder",n="qx.bom.client.Css.getFloat",q="false",p="qx.bom.client.Html.getXul",m="qx.bom.client.Xml.getCreateNode",l="qxenv",T="qx.bom.client.Html.getSessionStorage",U="qx.bom.client.Html.getAudioAu",V="qx.bom.client.Css.getOpacity",W="qx.bom.client.Html.getVml",P="qx.bom.client.Css.getRgba",Q="qx.bom.client.Transport.getMaxConcurrentRequestCount",R="qx.bom.client.Css.getBorderRadius",S="qx.bom.client.Event.getPointer",X="qx.bom.client.Css.getGradients",Y="qx.bom.client.Transport.getSsl",C="qx.bom.client.Html.getWebWorker",B="qx.bom.client.Json.getJson",A="qx.bom.client.Browser.getQuirksMode",z="qx.bom.client.Css.getTextOverflow",y="qx.bom.client.Xml.getQualifiedItem",x="qx.bom.client.Html.getVideoOgg",w="&",v="qx.bom.client.Browser.getDocumentMode",E="qx.allowUrlVariants",D="qx.bom.client.Html.getContains",ba="qx.bom.client.Plugin.getActiveX",bb=".",bc="qx.bom.client.Xml.getDomProperties",bd="qx.bom.client.CssAnimation.getSupport",be="qx.debug.databinding",bf="qx.optimization.basecalls",bg="qx.bom.client.Browser.getVersion",bh="qx.bom.client.Css.getUserSelectNone",bi="true",bj="qx.bom.client.Html.getSvg",bx="qx.optimization.privates",bw="qx.bom.client.Plugin.getDivX",bv="qx.bom.client.Runtime.getName",bu="qx.bom.client.Html.getLocalStorage",bB="qx.bom.client.Flash.getStrictSecurityModel",bA="qx.aspects",bz="qx.debug",by="qx.dynamicmousewheel",bD="qx.bom.client.Html.getAudioMp3",bC="qx.bom.client.Engine.getName",bK="qx.bom.client.Plugin.getGears",bL="qx.bom.client.Plugin.getQuicktimeVersion",bI="qx.bom.client.Html.getAudioOgg",bJ="qx.bom.client.Plugin.getSilverlightVersion",bG="qx.bom.client.Html.getCompareDocumentPosition",bH="qx.bom.client.Flash.getExpressInstall",bE="qx.bom.client.OperatingSystem.getVersion",bF="qx.bom.client.Html.getXPath",bM="qx.bom.client.Html.getGeoLocation",bN="qx.bom.client.Css.getAppearance",cc="qx.mobile.nativescroll",cb="qx.bom.client.Xml.getDomParser",ce="qx.bom.client.Stylesheet.getAddImport",cd="qx.optimization.variants",cg="qx.bom.client.Html.getVideoWebm",cf="qx.bom.client.Flash.getVersion",ci="qx.bom.client.Css.getLegacyWebkitGradient",ch="qx.bom.client.PhoneGap.getNotification",ca="qx.bom.client.Html.getVideoH264",bY="qx.bom.client.Xml.getCreateElementNS";
qx.Bootstrap.define(r,{statics:{_checks:{},_asyncChecks:{},__e:{},_checksMap:{"engine.version":cu,"engine.name":bC,"browser.name":L,"browser.version":bg,"browser.documentmode":v,"browser.quirksmode":A,"runtime.name":bv,"device.name":bm,"locale":d,"locale.variant":cL,"os.name":K,"os.version":bE,"os.scrollBarOverlayed":cG,"plugin.gears":bK,"plugin.activex":ba,"plugin.quicktime":cB,"plugin.quicktime.version":bL,"plugin.windowsmedia":bo,"plugin.windowsmedia.version":b,"plugin.divx":bw,"plugin.divx.version":k,"plugin.silverlight":bW,"plugin.silverlight.version":bJ,"plugin.flash":bV,"plugin.flash.version":cf,"plugin.flash.express":bH,"plugin.flash.strictsecurity":bB,"plugin.pdf":F,"plugin.pdf.version":cF,"io.maxrequests":Q,"io.ssl":Y,"io.xhr":cK,"event.touch":bl,"event.pointer":S,"event.help":cH,"event.hashchange":bp,"ecmascript.objectcount":cx,"ecmascript.stacktrace":cA,"html.webworker":C,"html.filereader":g,"html.geolocation":bM,"html.audio":s,"html.audio.ogg":bI,"html.audio.mp3":bD,"html.audio.wav":O,"html.audio.au":U,"html.audio.aif":ck,"html.video":bn,"html.video.ogg":x,"html.video.h264":ca,"html.video.webm":cg,"html.storage.local":bu,"html.storage.session":T,"html.classlist":cI,"html.xpath":bF,"html.xul":p,"html.canvas":bU,"html.svg":bj,"html.vml":W,"html.dataset":cm,"html.dataurl":bS,"html.console":ct,"html.stylesheet.createstylesheet":c,"html.stylesheet.insertrule":co,"html.stylesheet.deleterule":j,"html.stylesheet.addimport":ce,"html.stylesheet.removeimport":bs,"html.element.contains":D,"html.element.compareDocumentPosition":bG,"html.element.textcontent":t,"html.image.naturaldimensions":bR,"json":B,"css.textoverflow":z,"css.placeholder":o,"css.borderradius":R,"css.borderimage":h,"css.borderimage.standardsyntax":cJ,"css.boxshadow":bq,"css.gradients":X,"css.gradient.linear":cD,"css.gradient.radial":bO,"css.gradient.legacywebkit":ci,"css.boxmodel":bX,"css.rgba":P,"css.userselect":bP,"css.userselect.none":bh,"css.usermodify":br,"css.appearance":bN,"css.float":n,"css.boxsizing":J,"css.translate3d":cs,"css.animation":bd,"css.transform":u,"css.transform.3d":cs,"css.inlineblock":M,"css.opacity":V,"css.overflowxy":I,"phonegap":cl,"phonegap.notification":ch,"xml.implementation":cw,"xml.domparser":cb,"xml.selectsinglenode":cy,"xml.selectnodes":bQ,"xml.getelementsbytagnamens":bT,"xml.domproperties":bc,"xml.attributens":bt,"xml.createnode":m,"xml.getqualifieditem":y,"xml.createelementns":bY},get:function(cN){if(qx.Bootstrap.DEBUG){var cP={"css.translate3d":cn,"css.gradients":cv,"ecmascript.objectcount":null};

if(cN in cP){qx.Bootstrap.warn("The key '"+cN+"' is deprecated."+(cP[cN]?" Please use '"+cP[cN]+"' instead.":""));
}}if(this.__e[cN]!=undefined){return this.__e[cN];
}var cR=this._checks[cN];

if(cR){var cQ=cR();
this.__e[cN]=cQ;
return cQ;
}var cO=this._getClassNameFromEnvKey(cN);

if(cO[0]!=undefined){var cS=cO[0];
var cT=cO[1];
var cQ=cS[cT]();
this.__e[cN]=cQ;
return cQ;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(cN+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},_getClassNameFromEnvKey:function(cU){var db=this._checksMap;

if(db[cU]!=undefined){var cW=db[cU];
var da=cW.lastIndexOf(bb);

if(da>-1){var cY=cW.slice(0,da);
var cV=cW.slice(da+1);
var cX=qx.Bootstrap.getByName(cY);

if(cX!=undefined){return [cX,cV];
}}}return [undefined,undefined];
},getAsync:function(dc,dd,self){var dh=this;

if(this.__e[dc]!=undefined){window.setTimeout(function(){dd.call(self,dh.__e[dc]);
},0);
return;
}var dg=this._asyncChecks[dc];

if(dg){dg(function(dj){dh.__e[dc]=dj;
dd.call(self,dj);
});
return;
}var df=this._getClassNameFromEnvKey(dc);

if(df[0]!=undefined){var di=df[0];
var de=df[1];
di[de](function(dk){dh.__e[dc]=dk;
dd.call(self,dk);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(dc+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(dl,dm){return this.__f(this.get(dl),dm);
},selectAsync:function(dn,dp,self){this.getAsync(dn,function(dq){var dr=this.__f(dn,dp);
dr.call(self,dq);
},this);
},__f:function(ds,dt){var dv=dt[ds];

if(dt.hasOwnProperty(ds)){return dv;
}for(var du in dt){if(du.indexOf(cq)!=-1){var dw=du.split(cq);

for(var i=0;i<dw.length;i++){if(dw[i]==ds){return dt[du];
}}}}
if(dt[cr]!==undefined){return dt[cr];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+ds+'" ('+(typeof ds)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(dt)+'] found, and no default ("default") given');
}},filter:function(dx){var dz=[];

for(var dy in dx){if(this.get(dy)){dz.push(dx[dy]);
}}return dz;
},invalidateCacheKey:function(dA){delete this.__e[dA];
},add:function(dB,dC){if(this._checks[dB]==undefined){if(dC instanceof Function){this._checks[dB]=dC;
}else{this._checks[dB]=this.__i(dC);
}}},addAsync:function(dD,dE){if(this._checks[dD]==undefined){this._asyncChecks[dD]=dE;
}},getChecks:function(){return this._checks;
},getAsyncChecks:function(){return this._asyncChecks;
},_initDefaultQxValues:function(){this.add(cp,function(){return false;
});
this.add(E,function(){return false;
});
this.add(cC,function(){return 0;
});
this.add(bz,function(){return true;
});
this.add(bA,function(){return false;
});
this.add(G,function(){return true;
});
this.add(N,function(){return false;
});
this.add(cc,function(){return false;
});
this.add(by,function(){return true;
});
this.add(be,function(){return false;
});
this.add(cj,function(){return false;
});
this.add(bf,function(){return false;
});
this.add(cM,function(){return false;
});
this.add(bx,function(){return false;
});
this.add(bk,function(){return false;
});
this.add(cz,function(){return false;
});
this.add(cd,function(){return false;
});
this.add(f,function(){return true;
});
this.add(H,function(){return true;
});
this.add(a,function(){return true;
});
this.add(e,function(){return true;
});
},__g:function(){if(qx&&qx.$$environment){for(var dG in qx.$$environment){var dF=qx.$$environment[dG];
this._checks[dG]=this.__i(dF);
}}},__h:function(){if(window.document&&window.document.location){var dH=window.document.location.search.slice(1).split(w);

for(var i=0;i<dH.length;i++){var dJ=dH[i].split(cE);

if(dJ.length!=3||dJ[0]!=l){continue;
}var dK=dJ[1];
var dI=decodeURIComponent(dJ[2]);
if(dI==bi){dI=true;
}else if(dI==q){dI=false;
}else if(/^(\d|\.)+$/.test(dI)){dI=parseFloat(dI);
}this._checks[dK]=this.__i(dI);
}}},__i:function(dL){return qx.Bootstrap.bind(function(dM){return dM;
},null,dL);
}},defer:function(dN){dN._initDefaultQxValues();
dN.__g();
if(dN.get(cp)===true){dN.__h();
}}});
})();
(function(){var t="object",s="qx.debug",r="function",q="Array",p="Mixin",o="qx.Mixin",n=".prototype",m="constructor",k="[Mixin ",j="]",d="RegExp",h="members",g="destruct",c="properties",b="Date",f="events",e="statics";
qx.Bootstrap.define(o,{statics:{define:function(name,u){if(u){if(u.include&&!(qx.Bootstrap.getClass(u.include)===q)){u.include=[u.include];
}if(qx.core.Environment.get(s)){this.__d(name,u);
}var w=u.statics?u.statics:{};
qx.Bootstrap.setDisplayNames(w,name);

for(var v in w){if(w[v] instanceof Function){w[v].$$mixin=w;
}}if(u.construct){w.$$constructor=u.construct;
qx.Bootstrap.setDisplayName(u.construct,name,m);
}
if(u.include){w.$$includes=u.include;
}
if(u.properties){w.$$properties=u.properties;
}
if(u.members){w.$$members=u.members;
qx.Bootstrap.setDisplayNames(u.members,name+n);
}
for(var v in w.$$members){if(w.$$members[v] instanceof Function){w.$$members[v].$$mixin=w;
}}
if(u.events){w.$$events=u.events;
}
if(u.destruct){w.$$destructor=u.destruct;
qx.Bootstrap.setDisplayName(u.destruct,name,g);
}}else{var w={};
}w.$$type=p;
w.name=name;
w.toString=this.genericToString;
w.basename=qx.Bootstrap.createNamespace(name,w);
this.$$registry[name]=w;
return w;
},checkCompatibility:function(x){var A=this.flatten(x);
var B=A.length;

if(B<2){return true;
}var E={};
var D={};
var C={};
var z;

for(var i=0;i<B;i++){z=A[i];

for(var y in z.events){if(C[y]){throw new Error('Conflict between mixin "'+z.name+'" and "'+C[y]+'" in member "'+y+'"!');
}C[y]=z.name;
}
for(var y in z.properties){if(E[y]){throw new Error('Conflict between mixin "'+z.name+'" and "'+E[y]+'" in property "'+y+'"!');
}E[y]=z.name;
}
for(var y in z.members){if(D[y]){throw new Error('Conflict between mixin "'+z.name+'" and "'+D[y]+'" in member "'+y+'"!');
}D[y]=z.name;
}}return true;
},isCompatible:function(F,G){var H=qx.util.OOUtil.getMixins(G);
H.push(F);
return qx.Mixin.checkCompatibility(H);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(I){if(!I){return [];
}var J=I.concat();

for(var i=0,l=I.length;i<l;i++){if(I[i].$$includes){J.push.apply(J,this.flatten(I[i].$$includes));
}}return J;
},genericToString:function(){return k+this.name+j;
},$$registry:{},__c:qx.core.Environment.select(s,{"true":{"include":t,"statics":t,"members":t,"properties":t,"events":t,"destruct":r,"construct":r},"default":null}),__d:qx.core.Environment.select(s,{"true":function(name,K){var N=this.__c;

for(var M in K){if(!N[M]){throw new Error('The configuration key "'+M+'" in mixin "'+name+'" is not allowed!');
}
if(K[M]==null){throw new Error('Invalid key "'+M+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(N[M]!==null&&typeof K[M]!==N[M]){throw new Error('Invalid type of key "'+M+'" in mixin "'+name+'"! The type of the key must be "'+N[M]+'"!');
}}var L=[e,h,c,f];

for(var i=0,l=L.length;i<l;i++){var M=L[i];

if(K[M]!==undefined&&([q,d,b].indexOf(qx.Bootstrap.getClass(K[M]))!=-1||K[M].classname!==undefined)){throw new Error('Invalid key "'+M+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(K.include){for(var i=0,a=K.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==p){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(K.include);
}},"default":function(){}})}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__bc:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__bc;
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
},addAdvice:function(o,p,q,name){this.__bc.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var w="qx.debug",v="object",u="Array",t="Interface",s="string",r="number",q="function",p="Boolean",o="qx.Interface",n="events",e="[Interface ",m="]",h="members",d="properties",c="Date",g="RegExp",f="toggle",j="boolean",b="is",k="statics";
qx.Bootstrap.define(o,{statics:{define:function(name,x){if(x){if(x.extend&&!(qx.Bootstrap.getClass(x.extend)===u)){x.extend=[x.extend];
}if(qx.core.Environment.get(w)){this.__d(name,x);
}var y=x.statics?x.statics:{};
if(x.extend){y.$$extends=x.extend;
}
if(x.properties){y.$$properties=x.properties;
}
if(x.members){y.$$members=x.members;
}
if(x.events){y.$$events=x.events;
}}else{var y={};
}y.$$type=t;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
qx.Interface.$$registry[name]=y;
return y;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(z){if(!z){return [];
}var A=z.concat();

for(var i=0,l=z.length;i<l;i++){if(z[i].$$extends){A.push.apply(A,this.flatten(z[i].$$extends));
}}return A;
},__j:function(B,C,D,E){var I=D.$$members;

if(I){for(var H in I){if(qx.Bootstrap.isFunction(I[H])){var G=this.__k(C,H);
var F=G||qx.Bootstrap.isFunction(B[H]);

if(!F){throw new Error('Implementation of method "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}var J=E===true&&!G&&!qx.util.OOUtil.hasInterface(C,D);

if(J){B[H]=this.__n(D,B[H],H,I[H]);
}}else{if(typeof B[H]===undefined){if(typeof B[H]!==q){throw new Error('Implementation of member "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}}}}}},__k:function(K,L){var P=L.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!P){return false;
}var M=qx.Bootstrap.firstLow(P[2]);
var N=qx.util.OOUtil.getPropertyDefinition(K,M);

if(!N){return false;
}var O=P[0]==b||P[0]==f;

if(O){return qx.util.OOUtil.getPropertyDefinition(K,M).check==p;
}return true;
},__l:function(Q,R){if(R.$$properties){for(var S in R.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(Q,S)){throw new Error('The property "'+S+'" is not supported by Class "'+Q.classname+'"!');
}}}},__m:function(T,U){if(U.$$events){for(var V in U.$$events){if(!qx.util.OOUtil.supportsEvent(T,V)){throw new Error('The event "'+V+'" is not supported by Class "'+T.classname+'"!');
}}}},assertObject:function(W,X){var ba=W.constructor;
this.__j(W,ba,X,false);
this.__l(ba,X);
this.__m(ba,X);
var Y=X.$$extends;

if(Y){for(var i=0,l=Y.length;i<l;i++){this.assertObject(W,Y[i]);
}}},assert:function(bb,bc,bd){this.__j(bb.prototype,bb,bc,bd);
this.__l(bb,bc);
this.__m(bb,bc);
var be=bc.$$extends;

if(be){for(var i=0,l=be.length;i<l;i++){this.assert(bb,be[i],bd);
}}},genericToString:function(){return e+this.name+m;
},$$registry:{},__n:qx.core.Environment.select(w,{"true":function(bf,bg,bh,bi){function bj(){bi.apply(this,arguments);
return bg.apply(this,arguments);
}bg.wrapper=bj;
return bj;
},"default":function(){}}),__c:qx.core.Environment.select(w,{"true":{"extend":v,"statics":v,"members":v,"properties":v,"events":v},"default":null}),__d:qx.core.Environment.select(w,{"true":function(name,bk){if(qx.core.Environment.get(w)){var bn=this.__c;

for(var bm in bk){if(bn[bm]===undefined){throw new Error('The configuration key "'+bm+'" in class "'+name+'" is not allowed!');
}
if(bk[bm]==null){throw new Error("Invalid key '"+bm+"' in interface '"+name+"'! The value is undefined/null!");
}
if(bn[bm]!==null&&typeof bk[bm]!==bn[bm]){throw new Error('Invalid type of key "'+bm+'" in interface "'+name+'"! The type of the key must be "'+bn[bm]+'"!');
}}var bl=[k,h,d,n];

for(var i=0,l=bl.length;i<l;i++){var bm=bl[i];

if(bk[bm]!==undefined&&([u,g,c].indexOf(qx.Bootstrap.getClass(bk[bm]))!=-1||bk[bm].classname!==undefined)){throw new Error('Invalid key "'+bm+'" in interface "'+name+'"! The value needs to be a map!');
}}if(bk.extend){for(var i=0,a=bk.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==t){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(bk.statics){for(var bm in bk.statics){if(bm.toUpperCase()!==bm){throw new Error('Invalid key "'+bm+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof bk.statics[bm]){case j:case s:case r:break;
default:throw new Error('Invalid key "'+bm+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var g="emulated",f="native",e='"',d="[object Error]",c="qx.lang.Core",b="\\\\",a="\\\"";
qx.Bootstrap.define(c,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==d)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
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
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,b).replace(/\"/g,a)+e;
}}[String.prototype.quote?f:g]}});
if(!Error.prototype.toString||Error.prototype.toString()==d){Error.prototype.toString=qx.lang.Core.errorToString;
}if(!Array.prototype.indexOf){Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
}
if(!Array.prototype.forEach){Array.prototype.forEach=qx.lang.Core.arrayForEach;
}
if(!Array.prototype.filter){Array.prototype.filter=qx.lang.Core.arrayFilter;
}
if(!Array.prototype.map){Array.prototype.map=qx.lang.Core.arrayMap;
}
if(!Array.prototype.some){Array.prototype.some=qx.lang.Core.arraySome;
}
if(!Array.prototype.every){Array.prototype.every=qx.lang.Core.arrayEvery;
}if(!String.prototype.quote){String.prototype.quote=qx.lang.Core.stringQuote;
}})();
(function(){var bI=';',bH='return this.',bG="string",bF="qx.debug",bE="",bD="boolean",bC='!==undefined)',bB="this.",bA="set",bz="setThemed",bo="resetThemed",bn="qx.propertyDebugLevel",bm='else if(this.',bl="reset",bk="setRuntime",bj="init",bi="();",bh='else ',bg='if(this.',bf="resetRuntime",bP="return this.",bQ="get",bN=";",bO="(a[",bL="value",bM=' of an instance of ',bJ="refresh",bK=' is not (yet) ready!");',bR="]);",bS='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bs='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',br='value !== null && value.nodeType === 9 && value.documentElement',bu='value !== null && value.$$type === "Mixin"',bt='return init;',bw='var init=this.',bv='value !== null && value.nodeType === 1 && value.attributes',by="var parent = this.getLayoutParent();",bx="Error in property ",bq="property",bp='qx.core.Assert.assertInstance(value, Date, msg) || true',b="if (!parent) return;",c=" in method ",d='qx.core.Assert.assertInstance(value, Error, msg) || true',e='Undefined value is not allowed!',f="inherit",g='Is invalid!',h="MSIE 6.0",j="': ",k=" of class ",m='value !== null && value.nodeType !== undefined',bW='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bV="module.events",bU='qx.core.Assert.assertPositiveInteger(value, msg) || true',bT='if(init==qx.core.Property.$$inherit)init=null;',cb='value !== null && value.$$type === "Interface"',ca='var inherit=prop.$$inherit;',bY="var value = parent.",bX="$$useinit_",cd="(value);",cc='Requires exactly one argument!',L="$$runtime_",M="$$user_",J='qx.core.Assert.assertArray(value, msg) || true',K='qx.core.Assert.assertPositiveNumber(value, msg) || true',P=".prototype",Q="Boolean",N='return value;',O='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',H='Does not allow any arguments!',I="()",u="var a=arguments[0] instanceof Array?arguments[0]:arguments;",t='value !== null && value.$$type === "Theme"',w="())",v='return null;',q='qx.core.Assert.assertObject(value, msg) || true',p='qx.core.Assert.assertString(value, msg) || true',s="if (value===undefined) value = parent.",r='value !== null && value.$$type === "Class"',o='qx.core.Assert.assertFunction(value, msg) || true',n=".",V="object",W="$$init_",X="$$theme_",Y='qx.core.Assert.assertMap(value, msg) || true',R="qx.aspects",S='qx.core.Assert.assertNumber(value, msg) || true',T='Null value is not allowed!',U='qx.core.Assert.assertInteger(value, msg) || true',ba="rv:1.8.1",bb="shorthand",E='qx.core.Assert.assertInstance(value, RegExp, msg) || true',D='value !== null && value.type !== undefined',C='value !== null && value.document',B='throw new Error("Property ',A="(!this.",z='qx.core.Assert.assertBoolean(value, msg) || true',y="toggle",x="$$inherit_",G=" with incoming value '",F="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",bc="qx.core.Property",bd="is",be='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(bc,{statics:{__o:function(){if(qx.core.Environment.get(bV)){qx.event.type.Data;
qx.event.dispatch.Direct;
}},__p:{"Boolean":z,"String":p,"Number":S,"Integer":U,"PositiveNumber":K,"PositiveInteger":bU,"Error":d,"RegExp":E,"Object":q,"Array":J,"Map":Y,"Function":o,"Date":bp,"Node":m,"Element":bv,"Document":br,"Window":C,"Event":D,"Class":r,"Mixin":bu,"Interface":cb,"Theme":t,"Color":bS,"Decorator":bW,"Font":bs},__q:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:f,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bG,dereference:bD,inheritable:bD,nullable:bD,themeable:bD,refine:bD,init:null,apply:bG,event:bG,check:null,transform:bG,deferredInit:bD,validate:null},$$allowedGroupKeys:{name:bG,group:V,mode:bG,themeable:bD},$$inheritable:{},__r:function(ce){var cf=this.__s(ce);

if(!cf.length){var cg=function(){};
}else{cg=this.__t(cf);
}ce.prototype.$$refreshInheritables=cg;
},__s:function(ch){var cj=[];

while(ch){var ci=ch.$$properties;

if(ci){for(var name in this.$$inheritable){if(ci[name]&&ci[name].inheritable){cj.push(name);
}}}ch=ch.superclass;
}return cj;
},__t:function(ck){var co=this.$$store.inherit;
var cn=this.$$store.init;
var cm=this.$$method.refresh;
var cl=[by,b];

for(var i=0,l=ck.length;i<l;i++){var name=ck[i];
cl.push(bY,co[name],bN,s,cn[name],bN,bB,cm[name],cd);
}return new Function(cl.join(bE));
},attachRefreshInheritables:function(cp){cp.prototype.$$refreshInheritables=function(){qx.core.Property.__r(cp);
return this.$$refreshInheritables();
};
},attachMethods:function(cq,name,cr){cr.group?this.__u(cq,cr,name):this.__v(cq,cr,name);
},__u:function(cs,ct,name){var cA=qx.Bootstrap.firstUp(name);
var cz=cs.prototype;
var cB=ct.themeable===true;

if(qx.core.Environment.get(bF)){if(qx.core.Environment.get(bn)>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var cC=[];
var cw=[];

if(cB){var cu=[];
var cy=[];
}var cx=u;
cC.push(cx);

if(cB){cu.push(cx);
}
if(ct.mode==bb){var cv=F;
cC.push(cv);

if(cB){cu.push(cv);
}}
for(var i=0,a=ct.group,l=a.length;i<l;i++){if(qx.core.Environment.get(bF)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}cC.push(bB,this.$$method.set[a[i]],bO,i,bR);
cw.push(bB,this.$$method.reset[a[i]],bi);

if(cB){if(qx.core.Environment.get(bF)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}cu.push(bB,this.$$method.setThemed[a[i]],bO,i,bR);
cy.push(bB,this.$$method.resetThemed[a[i]],bi);
}}this.$$method.set[name]=bA+cA;
cz[this.$$method.set[name]]=new Function(cC.join(bE));
this.$$method.reset[name]=bl+cA;
cz[this.$$method.reset[name]]=new Function(cw.join(bE));

if(cB){this.$$method.setThemed[name]=bz+cA;
cz[this.$$method.setThemed[name]]=new Function(cu.join(bE));
this.$$method.resetThemed[name]=bo+cA;
cz[this.$$method.resetThemed[name]]=new Function(cy.join(bE));
}},__v:function(cD,cE,name){var cG=qx.Bootstrap.firstUp(name);
var cI=cD.prototype;

if(qx.core.Environment.get(bF)){if(qx.core.Environment.get(bn)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(cE.dereference===undefined&&typeof cE.check===bG){cE.dereference=this.__w(cE.check);
}var cH=this.$$method;
var cF=this.$$store;
cF.runtime[name]=L+name;
cF.user[name]=M+name;
cF.theme[name]=X+name;
cF.init[name]=W+name;
cF.inherit[name]=x+name;
cF.useinit[name]=bX+name;
cH.get[name]=bQ+cG;
cI[cH.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cD,name,bQ);
};
cH.set[name]=bA+cG;
cI[cH.set[name]]=function(cJ){return qx.core.Property.executeOptimizedSetter(this,cD,name,bA,arguments);
};
cH.reset[name]=bl+cG;
cI[cH.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cD,name,bl);
};

if(cE.inheritable||cE.apply||cE.event||cE.deferredInit){cH.init[name]=bj+cG;
cI[cH.init[name]]=function(cK){return qx.core.Property.executeOptimizedSetter(this,cD,name,bj,arguments);
};
}
if(cE.inheritable){cH.refresh[name]=bJ+cG;
cI[cH.refresh[name]]=function(cL){return qx.core.Property.executeOptimizedSetter(this,cD,name,bJ,arguments);
};
}cH.setRuntime[name]=bk+cG;
cI[cH.setRuntime[name]]=function(cM){return qx.core.Property.executeOptimizedSetter(this,cD,name,bk,arguments);
};
cH.resetRuntime[name]=bf+cG;
cI[cH.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cD,name,bf);
};

if(cE.themeable){cH.setThemed[name]=bz+cG;
cI[cH.setThemed[name]]=function(cN){return qx.core.Property.executeOptimizedSetter(this,cD,name,bz,arguments);
};
cH.resetThemed[name]=bo+cG;
cI[cH.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cD,name,bo);
};
}
if(cE.check===Q){cI[y+cG]=new Function(bP+cH.set[name]+A+cH.get[name]+w);
cI[bd+cG]=new Function(bP+cH.get[name]+I);
}},__w:function(cO){return !!this.__q[cO];
},__x:function(cP){return this.__q[cP]||qx.util.OOUtil.classIsDefined(cP)||(qx.Interface&&qx.Interface.isDefined(cP));
},__y:{0:be,1:cc,2:e,3:H,4:T,5:g},error:function(cQ,cR,cS,cT,cU){var cV=cQ.constructor.classname;
var cW=bx+cS+k+cV+c+this.$$method[cT][cS]+G+cU+j;
throw new Error(cW+(this.__y[cR]||"Unknown reason: "+cR));
},__z:function(cX,cY,name,da,db,dc){var dd=this.$$method[da][name];
if(qx.core.Environment.get(bF)){if(qx.core.Environment.get(bn)>1){qx.Bootstrap.debug("Code["+this.$$method[da][name]+"]: "+db.join(""));
}try{cY[dd]=new Function(bL,db.join(bE));
}catch(de){throw new Error("Malformed generated code to unwrap method: "+this.$$method[da][name]+"\n"+db.join(""));
}}else{cY[dd]=new Function(bL,db.join(bE));
}if(qx.core.Environment.get(R)){cY[dd]=qx.core.Aspect.wrap(cX.classname+n+dd,cY[dd],bq);
}qx.Bootstrap.setDisplayName(cY[dd],cX.classname+P,dd);
if(dc===undefined){return cX[dd]();
}else if(qx.core.Environment.get(bF)){return cX[dd].apply(cX,dc);
}else{return cX[dd](dc[0]);
}},executeOptimizedGetter:function(df,dg,name,dh){var dj=dg.$$properties[name];
var dl=dg.prototype;
var di=[];
var dk=this.$$store;
di.push(bg,dk.runtime[name],bC);
di.push(bH,dk.runtime[name],bI);

if(dj.inheritable){di.push(bm,dk.inherit[name],bC);
di.push(bH,dk.inherit[name],bI);
di.push(bh);
}di.push(bg,dk.user[name],bC);
di.push(bH,dk.user[name],bI);

if(dj.themeable){di.push(bm,dk.theme[name],bC);
di.push(bH,dk.theme[name],bI);
}
if(dj.deferredInit&&dj.init===undefined){di.push(bm,dk.init[name],bC);
di.push(bH,dk.init[name],bI);
}di.push(bh);

if(dj.init!==undefined){if(dj.inheritable){di.push(bw,dk.init[name],bI);

if(dj.nullable){di.push(bT);
}else if(dj.init!==undefined){di.push(bH,dk.init[name],bI);
}else{di.push(O,name,bM,dg.classname,bK);
}di.push(bt);
}else{di.push(bH,dk.init[name],bI);
}}else if(dj.inheritable||dj.nullable){di.push(v);
}else{di.push(B,name,bM,dg.classname,bK);
}return this.__z(df,dl,name,dh,di);
},executeOptimizedSetter:function(dm,dn,name,dp,dq){var dv=dn.$$properties[name];
var du=dn.prototype;
var ds=[];
var dr=dp===bA||dp===bz||dp===bk||(dp===bj&&dv.init===undefined);
var dt=dv.apply||dv.event||dv.inheritable;
var dw=this.__A(dp,name);
this.__B(ds,dv,name,dp,dr);

if(dr){this.__C(ds,dn,dv,name);
}
if(dt){this.__D(ds,dr,dw,dp);
}
if(dv.inheritable){ds.push(ca);
}
if(qx.core.Environment.get(bF)){if(dr){this.__E(ds,dv,dn,name,dp);
}}
if(!dt){this.__F(ds,name,dp,dr);
}else{this.__G(ds,dv,name,dp,dr);
}
if(dv.inheritable){this.__H(ds,dv,name,dp);
}else if(dt){this.__I(ds,dv,name,dp);
}
if(dt){this.__J(ds,dv,name);
if(dv.inheritable&&du._getChildren){this.__K(ds,name);
}}if(dr){ds.push(N);
}return this.__z(dm,du,name,dp,ds,dq);
},__A:function(dx,name){if(dx==="setRuntime"||dx==="resetRuntime"){var dy=this.$$store.runtime[name];
}else if(dx==="setThemed"||dx==="resetThemed"){dy=this.$$store.theme[name];
}else if(dx==="init"){dy=this.$$store.init[name];
}else{dy=this.$$store.user[name];
}return dy;
},__B:function(dz,dA,name,dB,dC){if(qx.core.Environment.get("qx.debug")){dz.push('var prop=qx.core.Property;');

if(dB==="init"){dz.push('if(this.$$initialized)prop.error(this,0,"',name,'","',dB,'",value);');
}
if(dB==="refresh"){}else if(dC){dz.push('if(arguments.length!==1)prop.error(this,1,"',name,'","',dB,'",value);');
dz.push('if(value===undefined)prop.error(this,2,"',name,'","',dB,'",value);');
}else{dz.push('if(arguments.length!==0)prop.error(this,3,"',name,'","',dB,'",value);');
}}else{if(!dA.nullable||dA.check||dA.inheritable){dz.push('var prop=qx.core.Property;');
}if(dB==="set"){dz.push('if(value===undefined)prop.error(this,2,"',name,'","',dB,'",value);');
}}},__C:function(dD,dE,dF,name){if(dF.transform){dD.push('value=this.',dF.transform,'(value);');
}if(dF.validate){if(typeof dF.validate==="string"){dD.push('this.',dF.validate,'(value);');
}else if(dF.validate instanceof Function){dD.push(dE.classname,'.$$properties.',name);
dD.push('.validate.call(this, value);');
}}},__D:function(dG,dH,dI,dJ){var dK=(dJ==="reset"||dJ==="resetThemed"||dJ==="resetRuntime");

if(dH){dG.push('if(this.',dI,'===value)return value;');
}else if(dK){dG.push('if(this.',dI,'===undefined)return;');
}},__E:qx.core.Environment.select("qx.debug",{"true":function(dL,dM,dN,name,dO){if(!dM.nullable){dL.push('if(value===null)prop.error(this,4,"',name,'","',dO,'",value);');
}if(dM.check!==undefined){dL.push('var msg = "Invalid incoming value for property \''+name+'\' of class \''+dN.classname+'\'";');
if(dM.nullable){dL.push('if(value!==null)');
}if(dM.inheritable){dL.push('if(value!==inherit)');
}dL.push('if(');

if(this.__p[dM.check]!==undefined){dL.push('!(',this.__p[dM.check],')');
}else if(qx.Class.isDefined(dM.check)){dL.push('qx.core.Assert.assertInstance(value, qx.Class.getByName("',dM.check,'"), msg)');
}else if(qx.Interface&&qx.Interface.isDefined(dM.check)){dL.push('qx.core.Assert.assertInterface(value, qx.Interface.getByName("',dM.check,'"), msg)');
}else if(typeof dM.check==="function"){dL.push('!',dN.classname,'.$$properties.',name);
dL.push('.check.call(this, value)');
}else if(typeof dM.check==="string"){dL.push('!(',dM.check,')');
}else if(dM.check instanceof Array){dL.push('qx.core.Assert.assertInArray(value, ',dN.classname,'.$$properties.',name,'.check, msg)');
}else{throw new Error("Could not add check to property "+name+" of class "+dN.classname);
}dL.push(')prop.error(this,5,"',name,'","',dO,'",value);');
}},"false":undefined}),__F:function(dP,name,dQ,dR){if(dQ==="setRuntime"){dP.push('this.',this.$$store.runtime[name],'=value;');
}else if(dQ==="resetRuntime"){dP.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dP.push('delete this.',this.$$store.runtime[name],';');
}else if(dQ==="set"){dP.push('this.',this.$$store.user[name],'=value;');
}else if(dQ==="reset"){dP.push('if(this.',this.$$store.user[name],'!==undefined)');
dP.push('delete this.',this.$$store.user[name],';');
}else if(dQ==="setThemed"){dP.push('this.',this.$$store.theme[name],'=value;');
}else if(dQ==="resetThemed"){dP.push('if(this.',this.$$store.theme[name],'!==undefined)');
dP.push('delete this.',this.$$store.theme[name],';');
}else if(dQ==="init"&&dR){dP.push('this.',this.$$store.init[name],'=value;');
}},__G:function(dS,dT,name,dU,dV){if(dT.inheritable){dS.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dS.push('var computed, old;');
}dS.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dU==="setRuntime"){dS.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dU==="resetRuntime"){dS.push('delete this.',this.$$store.runtime[name],';');
dS.push('if(this.',this.$$store.user[name],'!==undefined)');
dS.push('computed=this.',this.$$store.user[name],';');
dS.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dS.push('computed=this.',this.$$store.theme[name],';');
dS.push('else if(this.',this.$$store.init[name],'!==undefined){');
dS.push('computed=this.',this.$$store.init[name],';');
dS.push('this.',this.$$store.useinit[name],'=true;');
dS.push('}');
}else{dS.push('old=computed=this.',this.$$store.runtime[name],';');
if(dU==="set"){dS.push('this.',this.$$store.user[name],'=value;');
}else if(dU==="reset"){dS.push('delete this.',this.$$store.user[name],';');
}else if(dU==="setThemed"){dS.push('this.',this.$$store.theme[name],'=value;');
}else if(dU==="resetThemed"){dS.push('delete this.',this.$$store.theme[name],';');
}else if(dU==="init"&&dV){dS.push('this.',this.$$store.init[name],'=value;');
}}dS.push('}');
dS.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dU==="set"){if(!dT.inheritable){dS.push('old=this.',this.$$store.user[name],';');
}dS.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dU==="reset"){if(!dT.inheritable){dS.push('old=this.',this.$$store.user[name],';');
}dS.push('delete this.',this.$$store.user[name],';');
dS.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dS.push('computed=this.',this.$$store.runtime[name],';');
dS.push('if(this.',this.$$store.theme[name],'!==undefined)');
dS.push('computed=this.',this.$$store.theme[name],';');
dS.push('else if(this.',this.$$store.init[name],'!==undefined){');
dS.push('computed=this.',this.$$store.init[name],';');
dS.push('this.',this.$$store.useinit[name],'=true;');
dS.push('}');
}else{if(dU==="setRuntime"){dS.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dT.inheritable){dS.push('computed=this.',this.$$store.user[name],';');
}else{dS.push('old=computed=this.',this.$$store.user[name],';');
}if(dU==="setThemed"){dS.push('this.',this.$$store.theme[name],'=value;');
}else if(dU==="resetThemed"){dS.push('delete this.',this.$$store.theme[name],';');
}else if(dU==="init"&&dV){dS.push('this.',this.$$store.init[name],'=value;');
}}dS.push('}');
if(dT.themeable){dS.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dT.inheritable){dS.push('old=this.',this.$$store.theme[name],';');
}
if(dU==="setRuntime"){dS.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dU==="set"){dS.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dU==="setThemed"){dS.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dU==="resetThemed"){dS.push('delete this.',this.$$store.theme[name],';');
dS.push('if(this.',this.$$store.init[name],'!==undefined){');
dS.push('computed=this.',this.$$store.init[name],';');
dS.push('this.',this.$$store.useinit[name],'=true;');
dS.push('}');
}else if(dU==="init"){if(dV){dS.push('this.',this.$$store.init[name],'=value;');
}dS.push('computed=this.',this.$$store.theme[name],';');
}else if(dU==="refresh"){dS.push('computed=this.',this.$$store.theme[name],';');
}dS.push('}');
}dS.push('else if(this.',this.$$store.useinit[name],'){');

if(!dT.inheritable){dS.push('old=this.',this.$$store.init[name],';');
}
if(dU==="init"){if(dV){dS.push('computed=this.',this.$$store.init[name],'=value;');
}else{dS.push('computed=this.',this.$$store.init[name],';');
}}else if(dU==="set"||dU==="setRuntime"||dU==="setThemed"||dU==="refresh"){dS.push('delete this.',this.$$store.useinit[name],';');

if(dU==="setRuntime"){dS.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dU==="set"){dS.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dU==="setThemed"){dS.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dU==="refresh"){dS.push('computed=this.',this.$$store.init[name],';');
}}dS.push('}');
if(dU==="set"||dU==="setRuntime"||dU==="setThemed"||dU==="init"){dS.push('else{');

if(dU==="setRuntime"){dS.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dU==="set"){dS.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dU==="setThemed"){dS.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dU==="init"){if(dV){dS.push('computed=this.',this.$$store.init[name],'=value;');
}else{dS.push('computed=this.',this.$$store.init[name],';');
}dS.push('this.',this.$$store.useinit[name],'=true;');
}dS.push('}');
}},__H:function(dW,dX,name,dY){dW.push('if(computed===undefined||computed===inherit){');

if(dY==="refresh"){dW.push('computed=value;');
}else{dW.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dW.push('if((computed===undefined||computed===inherit)&&');
dW.push('this.',this.$$store.init[name],'!==undefined&&');
dW.push('this.',this.$$store.init[name],'!==inherit){');
dW.push('computed=this.',this.$$store.init[name],';');
dW.push('this.',this.$$store.useinit[name],'=true;');
dW.push('}else{');
dW.push('delete this.',this.$$store.useinit[name],';}');
dW.push('}');
dW.push('if(old===computed)return value;');
dW.push('if(computed===inherit){');
dW.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dW.push('}');
dW.push('else if(computed===undefined)');
dW.push('delete this.',this.$$store.inherit[name],';');
dW.push('else this.',this.$$store.inherit[name],'=computed;');
dW.push('var backup=computed;');
if(dX.init!==undefined&&dY!=="init"){dW.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dW.push('if(old===undefined)old=null;');
}dW.push('if(computed===undefined||computed==inherit)computed=null;');
},__I:function(ea,eb,name,ec){if(ec!=="set"&&ec!=="setRuntime"&&ec!=="setThemed"){ea.push('if(computed===undefined)computed=null;');
}ea.push('if(old===computed)return value;');
if(eb.init!==undefined&&ec!=="init"){ea.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{ea.push('if(old===undefined)old=null;');
}},__J:function(ed,ee,name){if(ee.apply){ed.push('this.',ee.apply,'(computed, old, "',name,'");');
}if(ee.event){ed.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",ee.event,"')){","reg.fireEvent(this, '",ee.event,"', qx.event.type.Data, [computed, old]",")}");
}},__K:function(ef,name){ef.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
ef.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
ef.push('}');
}},defer:function(eg){var ei=navigator.userAgent.indexOf(h)!=-1;
var eh=navigator.userAgent.indexOf(ba)!=-1;
if(ei||eh){eg.__w=eg.__x;
}}});
})();
(function(){var m="qx.debug",k=".",j="object",h="static",g="function",f="Array",e="singleton",d="qx.aspects",c="abstract",b="constructor",B="environment",A="extend",z="string",y="members",x="variants",w="properties",v="statics",u="events",t="]",s="Interface",q="qx.Class",r="Mixin",o="settings",p='Assumed static class because no "extend" key was found. ',n="[Class ";
qx.Bootstrap.define(q,{statics:{__L:qx.core.Environment.get("module.property")?qx.core.Property:null,define:function(name,C){if(!C){var C={};
}if(C.include&&!(qx.Bootstrap.getClass(C.include)===f)){C.include=[C.include];
}if(C.implement&&!(qx.Bootstrap.getClass(C.implement)===f)){C.implement=[C.implement];
}var D=false;

if(!C.hasOwnProperty(A)&&!C.type){C.type=h;
D=true;
}if(qx.core.Environment.get(m)){try{this.__d(name,C);
}catch(G){if(D){G.message=p+G.message;
}throw G;
}}var E=this.__O(name,C.type,C.extend,C.statics,C.construct,C.destruct,C.include);
if(C.extend){if(C.properties){this.__Q(E,C.properties,true);
}if(C.members){this.__S(E,C.members,true,true,false);
}if(C.events){this.__P(E,C.events,true);
}if(C.include){for(var i=0,l=C.include.length;i<l;i++){this.__W(E,C.include[i],false);
}}}if(C.environment){for(var F in C.environment){qx.core.Environment.add(F,C.environment[F]);
}}if(C.implement){for(var i=0,l=C.implement.length;i<l;i++){this.__U(E,C.implement[i]);
}}
if(qx.core.Environment.get(m)){this.__N(E);
}if(C.defer){C.defer.self=E;
C.defer(E,E.prototype,{add:function(name,H){var I={};
I[name]=H;
qx.Class.__Q(E,I,true);
}});
}return E;
},undefine:function(name){delete this.$$registry[name];
var J=name.split(k);
var L=[window];

for(var i=0;i<J.length;i++){L.push(L[i][J[i]]);
}for(var i=L.length-1;i>=1;i--){var K=L[i];
var parent=L[i-1];

if(qx.Bootstrap.isFunction(K)||qx.Bootstrap.objectGetLength(K)===0){delete parent[J[i-1]];
}else{break;
}}},isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(M,N){if(qx.core.Environment.get(m)){if(!N){throw new Error("The mixin to include into class '"+M.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(N,M);
}qx.Class.__W(M,N,false);
},patch:function(O,P){if(qx.core.Environment.get(m)){if(!P){throw new Error("The mixin to patch class '"+O.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(P,O);
}qx.Class.__W(O,P,true);
},isSubClassOf:function(Q,R){if(!Q){return false;
}
if(Q==R){return true;
}
if(Q.prototype instanceof R){return true;
}return false;
},getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(S){var T=[];

while(S){if(S.$$properties){T.push.apply(T,qx.Bootstrap.getKeys(S.$$properties));
}S=S.superclass;
}return T;
},getByProperty:function(U,name){while(U){if(U.$$properties&&U.$$properties[name]){return U;
}U=U.superclass;
}return null;
},hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(V,W){return V.$$includes&&V.$$includes.indexOf(W)!==-1;
},getByMixin:function(X,Y){var ba,i,l;

while(X){if(X.$$includes){ba=X.$$flatIncludes;

for(i=0,l=ba.length;i<l;i++){if(ba[i]===Y){return X;
}}}X=X.superclass;
}return null;
},getMixins:qx.util.OOUtil.getMixins,hasMixin:function(bb,bc){return !!this.getByMixin(bb,bc);
},hasOwnInterface:function(bd,be){return bd.$$implements&&bd.$$implements.indexOf(be)!==-1;
},getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(bf){var bg=[];

while(bf){if(bf.$$implements){bg.push.apply(bg,bf.$$flatImplements);
}bf=bf.superclass;
}return bg;
},hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(bh,bi){var bj=bh.constructor;

if(this.hasInterface(bj,bi)){return true;
}
try{qx.Interface.assertObject(bh,bi);
return true;
}catch(bk){}
try{qx.Interface.assert(bj,bi,false);
return true;
}catch(bl){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return n+this.classname+t;
},$$registry:qx.Bootstrap.$$registry,__c:qx.core.Environment.select(m,{"true":{"type":z,"extend":g,"implement":j,"include":j,"construct":g,"statics":j,"properties":j,"members":j,"environment":j,"events":j,"defer":g,"destruct":g},"default":null}),__M:qx.core.Environment.select("qx.debug",{"true":{"type":"string","statics":"object","environment":"object","defer":"function"},"default":null}),__d:qx.core.Environment.select(m,{"true":function(name,bm){if(bm.type&&!(bm.type===h||bm.type===c||bm.type===e)){throw new Error('Invalid type "'+bm.type+'" definition for class "'+name+'"!');
}if(bm.type&&bm.type!==h&&!bm.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var bp=bm.type===h?this.__M:this.__c;

for(var bo in bm){if(!bp[bo]){throw new Error('The configuration key "'+bo+'" in class "'+name+'" is not allowed!');
}
if(bm[bo]==null){throw new Error('Invalid key "'+bo+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof bm[bo]!==bp[bo]){throw new Error('Invalid type of key "'+bo+'" in class "'+name+'"! The type of the key must be "'+bp[bo]+'"!');
}}var bn=[v,w,y,B,o,x,u];

for(var i=0,l=bn.length;i<l;i++){var bo=bn[i];

if(bm[bo]!==undefined&&(bm[bo].$$hash!==undefined||!qx.Bootstrap.isObject(bm[bo]))){throw new Error('Invalid key "'+bo+'" in class "'+name+'"! The value needs to be a map!');
}}if(bm.include){if(qx.Bootstrap.getClass(bm.include)===f){for(var i=0,a=bm.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==r){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(bm.implement){if(qx.Bootstrap.getClass(bm.implement)===f){for(var i=0,a=bm.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==s){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(bm.include){try{qx.Mixin.checkCompatibility(bm.include);
}catch(bq){throw new Error('Error in include definition of class "'+name+'"! '+bq.message);
}}if(bm.environment){for(var bo in bm.environment){if(bo.substr(0,bo.indexOf(k))!=name.substr(0,name.indexOf(k))){throw new Error('Forbidden environment setting "'+bo+'" found in "'+name+'". It is forbidden to define a '+'environment setting for an external namespace!');
}}}if(bm.settings){for(var bo in bm.settings){if(bo.substr(0,bo.indexOf(k))!=name.substr(0,name.indexOf(k))){throw new Error('Forbidden setting "'+bo+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(bm.variants){for(var bo in bm.variants){if(bo.substr(0,bo.indexOf(k))!=name.substr(0,name.indexOf(k))){throw new Error('Forbidden variant "'+bo+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__N:qx.core.Environment.select("qx.debug",{"true":function(br){var bt=br.superclass;

while(bt){if(bt.$$classtype!=="abstract"){break;
}var bs=bt.$$implements;

if(bs){for(var i=0;i<bs.length;i++){qx.Interface.assert(br,bs[i],true);
}}bt=bt.superclass;
}},"default":function(){}}),__O:function(name,bu,bv,bw,bx,by,bz){var bC;

if(!bv&&qx.core.Environment.get("qx.aspects")==false){bC=bw||{};
qx.Bootstrap.setDisplayNames(bC,name);
}else{var bC={};

if(bv){if(!bx){bx=this.__X();
}
if(this.__ba(bv,bz)){bC=this.__bb(bx,name,bu);
}else{bC=bx;
}if(bu==="singleton"){bC.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bx,name,"constructor");
}if(bw){qx.Bootstrap.setDisplayNames(bw,name);
var bD;

for(var i=0,a=qx.Bootstrap.getKeys(bw),l=a.length;i<l;i++){bD=a[i];
var bA=bw[bD];

if(qx.core.Environment.get("qx.aspects")){if(bA instanceof Function){bA=qx.core.Aspect.wrap(name+"."+bD,bA,"static");
}bC[bD]=bA;
}else{bC[bD]=bA;
}}}}var bB=qx.Bootstrap.createNamespace(name,bC);
bC.name=bC.classname=name;
bC.basename=bB;
bC.$$type="Class";

if(bu){bC.$$classtype=bu;
}if(!bC.hasOwnProperty("toString")){bC.toString=this.genericToString;
}
if(bv){qx.Bootstrap.extendClass(bC,bx,bv,name,bB);
if(by){if(qx.core.Environment.get("qx.aspects")){by=qx.core.Aspect.wrap(name,by,"destructor");
}bC.$$destructor=by;
qx.Bootstrap.setDisplayName(by,name,"destruct");
}}this.$$registry[name]=bC;
return bC;
},__P:function(bE,bF,bG){if(qx.core.Environment.get("qx.debug")){if(typeof bF!=="object"||qx.Bootstrap.getClass(bF)==="Array"){throw new Error(bE.classname+": the events must be defined as map!");
}
for(var bH in bF){if(typeof bF[bH]!=="string"){throw new Error(bE.classname+"/"+bH+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(bE.$$events&&bG!==true){for(var bH in bF){if(bE.$$events[bH]!==undefined&&bE.$$events[bH]!==bF[bH]){throw new Error(bE.classname+"/"+bH+": the event value/type cannot be changed from "+bE.$$events[bH]+" to "+bF[bH]);
}}}}
if(bE.$$events){for(var bH in bF){bE.$$events[bH]=bF[bH];
}}else{bE.$$events=bF;
}},__Q:function(bI,bJ,bK){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");
}var bL;

if(bK===undefined){bK=false;
}var bM=bI.prototype;

for(var name in bJ){bL=bJ[name];
if(qx.core.Environment.get("qx.debug")){this.__R(bI,name,bL,bK);
}bL.name=name;
if(!bL.refine){if(bI.$$properties===undefined){bI.$$properties={};
}bI.$$properties[name]=bL;
}if(bL.init!==undefined){bI.prototype["$$init_"+name]=bL.init;
}if(bL.event!==undefined){if(!qx.core.Environment.get("module.events")){throw new Error("Events module not enabled.");
}var event={};
event[bL.event]="qx.event.type.Data";
this.__P(bI,event,bK);
}if(bL.inheritable){this.__L.$$inheritable[name]=true;

if(!bM.$$refreshInheritables){this.__L.attachRefreshInheritables(bI);
}}
if(!bL.refine){this.__L.attachMethods(bI,name,bL);
}}},__R:qx.core.Environment.select("qx.debug",{"true":function(bN,name,bO,bP){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");
}var bR=this.hasProperty(bN,name);

if(bR){var bQ=this.getPropertyDefinition(bN,name);

if(bO.refine&&bQ.init===undefined){throw new Error("Could not refine an init value if there was previously no init value defined. Property '"+name+"' of class '"+bN.classname+"'.");
}}
if(!bR&&bO.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+bN.classname+"'!");
}
if(bR&&!bP){throw new Error("Class "+bN.classname+" already has a property: "+name+"!");
}
if(bR&&bP){if(!bO.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+bN.classname+', original class: '+this.getByProperty(bN,name).classname+'.');
}
for(var bS in bO){if(bS!=="init"&&bS!=="refine"){throw new Error("Class "+bN.classname+" could not refine property: "+name+"! Key: "+bS+" could not be refined!");
}}}var bT=bO.group?this.__L.$$allowedGroupKeys:this.__L.$$allowedKeys;

for(var bS in bO){if(bT[bS]===undefined){throw new Error('The configuration key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'" is not allowed!');
}
if(bO[bS]===undefined){throw new Error('Invalid key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'"! The value is undefined: '+bO[bS]);
}
if(bT[bS]!==null&&typeof bO[bS]!==bT[bS]){throw new Error('Invalid type of key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'"! The type of the key must be "'+bT[bS]+'"!');
}}
if(bO.transform!=null){if(!(typeof bO.transform=="string")){throw new Error('Invalid transform definition of property "'+name+'" in class "'+bN.classname+'"! Needs to be a String.');
}}
if(bO.check!=null){if(!qx.Bootstrap.isString(bO.check)&&!qx.Bootstrap.isArray(bO.check)&&!qx.Bootstrap.isFunction(bO.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+bN.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__S:function(bU,bV,bW,bX,bY){var ca=bU.prototype;
var cc,cb;
qx.Bootstrap.setDisplayNames(bV,bU.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bV),l=a.length;i<l;i++){cc=a[i];
cb=bV[cc];

if(qx.core.Environment.get("qx.debug")){if(ca[cc]!==undefined&&cc.charAt(0)=="_"&&cc.charAt(1)=="_"){throw new Error('Overwriting private member "'+cc+'" of Class "'+bU.classname+'" is not allowed!');
}
if(bW!==true&&ca.hasOwnProperty(cc)){throw new Error('Overwriting member "'+cc+'" of Class "'+bU.classname+'" is not allowed!');
}}if(bX!==false&&cb instanceof Function&&cb.$$type==null){if(bY==true){cb=this.__T(cb,ca[cc]);
}else{if(ca[cc]){cb.base=ca[cc];
}cb.self=bU;
}
if(qx.core.Environment.get("qx.aspects")){cb=qx.core.Aspect.wrap(bU.classname+"."+cc,cb,"member");
}}ca[cc]=cb;
}},__T:function(cd,ce){if(ce){return function(){var cg=cd.base;
cd.base=ce;
var cf=cd.apply(this,arguments);
cd.base=cg;
return cf;
};
}else{return cd;
}},__U:function(ch,ci){if(qx.core.Environment.get("qx.debug")){if(!ch||!ci){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(ch,ci)){throw new Error('Interface "'+ci.name+'" is already used by Class "'+ch.classname+'!');
}if(ch.$$classtype!=="abstract"){qx.Interface.assert(ch,ci,true);
}}var cj=qx.Interface.flatten([ci]);

if(ch.$$implements){ch.$$implements.push(ci);
ch.$$flatImplements.push.apply(ch.$$flatImplements,cj);
}else{ch.$$implements=[ci];
ch.$$flatImplements=cj;
}},__V:function(ck){var name=ck.classname;
var cl=this.__bb(ck,name,ck.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(ck),l=a.length;i<l;i++){cm=a[i];
cl[cm]=ck[cm];
}cl.prototype=ck.prototype;
var co=ck.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(co),l=a.length;i<l;i++){cm=a[i];
var cp=co[cm];
if(cp&&cp.self==ck){cp.self=cl;
}}for(var cm in this.$$registry){var cn=this.$$registry[cm];

if(!cn){continue;
}
if(cn.base==ck){cn.base=cl;
}
if(cn.superclass==ck){cn.superclass=cl;
}
if(cn.$$original){if(cn.$$original.base==ck){cn.$$original.base=cl;
}
if(cn.$$original.superclass==ck){cn.$$original.superclass=cl;
}}}qx.Bootstrap.createNamespace(name,cl);
this.$$registry[name]=cl;
return cl;
},__W:function(cq,cr,cs){if(qx.core.Environment.get("qx.debug")){if(!cq||!cr){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(cq,cr)){return;
}var cv=cq.$$original;

if(cr.$$constructor&&!cv){cq=this.__V(cq);
}var cu=qx.Mixin.flatten([cr]);
var ct;

for(var i=0,l=cu.length;i<l;i++){ct=cu[i];
if(ct.$$events){this.__P(cq,ct.$$events,cs);
}if(ct.$$properties){this.__Q(cq,ct.$$properties,cs);
}if(ct.$$members){this.__S(cq,ct.$$members,cs,cs,cs);
}}if(cq.$$includes){cq.$$includes.push(cr);
cq.$$flatIncludes.push.apply(cq.$$flatIncludes,cu);
}else{cq.$$includes=[cr];
cq.$$flatIncludes=cu;
}},__X:function(){function cw(){cw.base.apply(this,arguments);
}return cw;
},__Y:function(){return function(){};
},__ba:function(cx,cy){if(qx.core.Environment.get(m)){return true;
}if(cx&&cx.$$includes){var cz=cx.$$flatIncludes;

for(var i=0,l=cz.length;i<l;i++){if(cz[i].$$constructor){return true;
}}}if(cy){var cA=qx.Mixin.flatten(cy);

for(var i=0,l=cA.length;i<l;i++){if(cA[i].$$constructor){return true;
}}}return false;
},__bb:function(cB,name,cC){var cE=function(){var cH=cE;

if(qx.core.Environment.get(m)){if(!(this instanceof cH)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cC===c){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cC===e){if(!cH.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var cG=cH.$$original.apply(this,arguments);
if(cH.$$includes){var cF=cH.$$flatIncludes;

for(var i=0,l=cF.length;i<l;i++){if(cF[i].$$constructor){cF[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Environment.get(m)){if(this.classname===name){this.$$initialized=true;
}}return cG;
};

if(qx.core.Environment.get(d)){var cD=qx.core.Aspect.wrap(name,cE,b);
cE.$$original=cB;
cE.constructor=cD;
cE=cD;
}cE.$$original=cB;
cB.wrapper=cE;
return cE;
}},defer:function(){if(qx.core.Environment.get(d)){for(var cI in qx.Bootstrap.$$registry){var cJ=qx.Bootstrap.$$registry[cI];

for(var cK in cJ){if(cJ[cK] instanceof Function){cJ[cK]=qx.core.Aspect.wrap(cI+k+cK,cJ[cK],h);
}}}}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__bd:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__be:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bf:function(){var L=qx.lang.Generics.__bd;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__be(N,O);
}}}}},defer:function(Q){Q.__bf();
}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var m="get",l="",k="[",h=".",g="last",f="change",d="]",c="Number",b="String",a="qx.debug.databinding",J="set",I="deepBinding",H="item",G="reset",F="qx.debug",E="' (",D="Boolean",C=") to the object '",B="Integer",A=" of object ",u="qx.event.type.Data",v="qx.data.SingleValueBinding",s="Binding property ",t="Can not remove the bindings for null object!",q="Binding from '",r="PositiveNumber",n="PositiveInteger",p="Binding does not exist!",w=" is not an data (qx.event.type.Data) event on ",x=").",z="Date",y=" not possible: No event available. ";
qx.Class.define(v,{statics:{__bg:{},bind:function(K,L,M,N,O){var ba=this.__bi(K,L,M,N,O);
var U=L.split(h);
var Q=this.__bo(U);
var Y=[];
var V=[];
var W=[];
var S=[];
var T=K;
try{for(var i=0;i<U.length;i++){if(Q[i]!==l){S.push(f);
}else{S.push(this.__bj(T,U[i]));
}Y[i]=T;
if(i==U.length-1){if(Q[i]!==l){var be=Q[i]===g?T.length-1:Q[i];
var P=T.getItem(be);
this.__bn(P,M,N,O,K);
W[i]=this.__bp(T,S[i],M,N,O,Q[i]);
}else{if(U[i]!=null&&T[m+qx.lang.String.firstUp(U[i])]!=null){var P=T[m+qx.lang.String.firstUp(U[i])]();
this.__bn(P,M,N,O,K);
}W[i]=this.__bp(T,S[i],M,N,O);
}}else{var bb={index:i,propertyNames:U,sources:Y,listenerIds:W,arrayIndexValues:Q,targetObject:M,targetPropertyChain:N,options:O,listeners:V};
var X=qx.lang.Function.bind(this.__bh,this,bb);
V.push(X);
W[i]=T.addListener(S[i],X);
}if(T[m+qx.lang.String.firstUp(U[i])]==null){T=null;
}else if(Q[i]!==l){T=T[m+qx.lang.String.firstUp(U[i])](Q[i]);
}else{T=T[m+qx.lang.String.firstUp(U[i])]();
}
if(!T){break;
}}}catch(bf){for(var i=0;i<Y.length;i++){if(Y[i]&&W[i]){Y[i].removeListenerById(W[i]);
}}var bd=ba.targets;
var R=ba.listenerIds[i];
for(var i=0;i<bd.length;i++){if(bd[i]&&R[i]){bd[i].removeListenerById(R[i]);
}}throw bf;
}var bc={type:I,listenerIds:W,sources:Y,targetListenerIds:ba.listenerIds,targets:ba.targets};
this.__bq(bc,K,L,M,N);
return bc;
},__bh:function(bg){if(bg.options&&bg.options.onUpdate){bg.options.onUpdate(bg.sources[bg.index],bg.targetObject);
}for(var j=bg.index+1;j<bg.propertyNames.length;j++){var bk=bg.sources[j];
bg.sources[j]=null;

if(!bk){continue;
}bk.removeListenerById(bg.listenerIds[j]);
}var bk=bg.sources[bg.index];
for(var j=bg.index+1;j<bg.propertyNames.length;j++){if(bg.arrayIndexValues[j-1]!==l){bk=bk[m+qx.lang.String.firstUp(bg.propertyNames[j-1])](bg.arrayIndexValues[j-1]);
}else{bk=bk[m+qx.lang.String.firstUp(bg.propertyNames[j-1])]();
}bg.sources[j]=bk;
if(!bk){this.__bk(bg.targetObject,bg.targetPropertyChain);
break;
}if(j==bg.propertyNames.length-1){if(qx.Class.implementsInterface(bk,qx.data.IListData)){var bl=bg.arrayIndexValues[j]===g?bk.length-1:bg.arrayIndexValues[j];
var bi=bk.getItem(bl);
this.__bn(bi,bg.targetObject,bg.targetPropertyChain,bg.options,bg.sources[bg.index]);
bg.listenerIds[j]=this.__bp(bk,f,bg.targetObject,bg.targetPropertyChain,bg.options,bg.arrayIndexValues[j]);
}else{if(bg.propertyNames[j]!=null&&bk[m+qx.lang.String.firstUp(bg.propertyNames[j])]!=null){var bi=bk[m+qx.lang.String.firstUp(bg.propertyNames[j])]();
this.__bn(bi,bg.targetObject,bg.targetPropertyChain,bg.options,bg.sources[bg.index]);
}var bj=this.__bj(bk,bg.propertyNames[j]);
bg.listenerIds[j]=this.__bp(bk,bj,bg.targetObject,bg.targetPropertyChain,bg.options);
}}else{if(bg.listeners[j]==null){var bh=qx.lang.Function.bind(this.__bh,this,bg);
bg.listeners.push(bh);
}if(qx.Class.implementsInterface(bk,qx.data.IListData)){var bj=f;
}else{var bj=this.__bj(bk,bg.propertyNames[j]);
}bg.listenerIds[j]=bk.addListener(bj,bg.listeners[j]);
}}},__bi:function(bm,bn,bo,bp,bq){var bu=bp.split(h);
var bs=this.__bo(bu);
var bz=[];
var by=[];
var bw=[];
var bv=[];
var bt=bo;
for(var i=0;i<bu.length-1;i++){if(bs[i]!==l){bv.push(f);
}else{try{bv.push(this.__bj(bt,bu[i]));
}catch(e){break;
}}bz[i]=bt;
var bx=function(){for(var j=i+1;j<bu.length-1;j++){var bC=bz[j];
bz[j]=null;

if(!bC){continue;
}bC.removeListenerById(bw[j]);
}var bC=bz[i];
for(var j=i+1;j<bu.length-1;j++){var bA=qx.lang.String.firstUp(bu[j-1]);
if(bs[j-1]!==l){var bD=bs[j-1]===g?bC.getLength()-1:bs[j-1];
bC=bC[m+bA](bD);
}else{bC=bC[m+bA]();
}bz[j]=bC;
if(by[j]==null){by.push(bx);
}if(qx.Class.implementsInterface(bC,qx.data.IListData)){var bB=f;
}else{try{var bB=qx.data.SingleValueBinding.__bj(bC,bu[j]);
}catch(e){break;
}}bw[j]=bC.addListener(bB,by[j]);
}qx.data.SingleValueBinding.updateTarget(bm,bn,bo,bp,bq);
};
by.push(bx);
bw[i]=bt.addListener(bv[i],bx);
var br=qx.lang.String.firstUp(bu[i]);
if(bt[m+br]==null){bt=null;
}else if(bs[i]!==l){bt=bt[m+br](bs[i]);
}else{bt=bt[m+br]();
}
if(!bt){break;
}}return {listenerIds:bw,targets:bz};
},updateTarget:function(bE,bF,bG,bH,bI){var bJ=this.getValueFromObject(bE,bF);
bJ=qx.data.SingleValueBinding.__br(bJ,bG,bH,bI,bE);
this.__bl(bG,bH,bJ);
},getValueFromObject:function(o,bK){var bO=this.__bm(o,bK);
var bM;

if(bO!=null){var bQ=bK.substring(bK.lastIndexOf(h)+1,bK.length);
if(bQ.charAt(bQ.length-1)==d){var bL=bQ.substring(bQ.lastIndexOf(k)+1,bQ.length-1);
var bN=bQ.substring(0,bQ.lastIndexOf(k));
var bP=bO[m+qx.lang.String.firstUp(bN)]();

if(bL==g){bL=bP.length-1;
}
if(bP!=null){bM=bP.getItem(bL);
}}else{bM=bO[m+qx.lang.String.firstUp(bQ)]();
}}return bM;
},__bj:function(bR,bS){var bT=this.__bs(bR,bS);
if(bT==null){if(qx.Class.supportsEvent(bR.constructor,bS)){bT=bS;
}else if(qx.Class.supportsEvent(bR.constructor,f+qx.lang.String.firstUp(bS))){bT=f+qx.lang.String.firstUp(bS);
}else{throw new qx.core.AssertionError(s+bS+A+bR+y);
}}return bT;
},__bk:function(bU,bV){var bW=this.__bm(bU,bV);

if(bW!=null){var bX=bV.substring(bV.lastIndexOf(h)+1,bV.length);
if(bX.charAt(bX.length-1)==d){this.__bl(bU,bV,null);
return;
}if(bW[G+qx.lang.String.firstUp(bX)]!=undefined){bW[G+qx.lang.String.firstUp(bX)]();
}else{bW[J+qx.lang.String.firstUp(bX)](null);
}}},__bl:function(bY,ca,cb){var cf=this.__bm(bY,ca);

if(cf!=null){var cg=ca.substring(ca.lastIndexOf(h)+1,ca.length);
if(cg.charAt(cg.length-1)==d){var cc=cg.substring(cg.lastIndexOf(k)+1,cg.length-1);
var ce=cg.substring(0,cg.lastIndexOf(k));
var cd=bY;

if(!qx.Class.implementsInterface(cd,qx.data.IListData)){cd=cf[m+qx.lang.String.firstUp(ce)]();
}
if(cc==g){cc=cd.length-1;
}
if(cd!=null){cd.setItem(cc,cb);
}}else{cf[J+qx.lang.String.firstUp(cg)](cb);
}}},__bm:function(ch,ci){var cl=ci.split(h);
var cm=ch;
for(var i=0;i<cl.length-1;i++){try{var ck=cl[i];
if(ck.indexOf(d)==ck.length-1){var cj=ck.substring(ck.indexOf(k)+1,ck.length-1);
ck=ck.substring(0,ck.indexOf(k));
}if(ck!=l){cm=cm[m+qx.lang.String.firstUp(ck)]();
}if(cj!=null){if(cj==g){cj=cm.length-1;
}cm=cm.getItem(cj);
cj=null;
}}catch(cn){return null;
}}return cm;
},__bn:function(co,cp,cq,cr,cs){co=this.__br(co,cp,cq,cr,cs);
if(co===undefined){this.__bk(cp,cq);
}if(co!==undefined){try{this.__bl(cp,cq,co);
if(cr&&cr.onUpdate){cr.onUpdate(cs,cp,co);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cr&&cr.onSetFail){cr.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+co+" on "+cp+". Error message: "+e);
}}}},__bo:function(ct){var cu=[];
for(var i=0;i<ct.length;i++){var name=ct[i];
if(qx.lang.String.endsWith(name,d)){var cv=name.substring(name.indexOf(k)+1,name.indexOf(d));
if(name.indexOf(d)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cv!==g){if(cv==l||isNaN(parseInt(cv,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){ct[i]=name.substring(0,name.indexOf(k));
cu[i]=l;
cu[i+1]=cv;
ct.splice(i+1,0,H);
i++;
}else{cu[i]=cv;
ct.splice(i,1,H);
}}else{cu[i]=l;
}}return cu;
},__bp:function(cw,cx,cy,cz,cA,cB){if(qx.core.Environment.get(F)){var cC=qx.Class.getEventType(cw.constructor,cx);
qx.core.Assert.assertEquals(u,cC,cx+w+cw+h);
}var cE=function(cF,e){if(cF!==l){if(cF===g){cF=cw.length-1;
}var cI=cw.getItem(cF);
if(cI===undefined){qx.data.SingleValueBinding.__bk(cy,cz);
}var cG=e.getData().start;
var cH=e.getData().end;

if(cF<cG||cF>cH){return;
}}else{var cI=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+cw+" by "+cx+" to "+cy+" ("+cz+")");
qx.log.Logger.debug("Data before conversion: "+cI);
}cI=qx.data.SingleValueBinding.__br(cI,cy,cz,cA,cw);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cI);
}try{if(cI!==undefined){qx.data.SingleValueBinding.__bl(cy,cz,cI);
}else{qx.data.SingleValueBinding.__bk(cy,cz);
}if(cA&&cA.onUpdate){cA.onUpdate(cw,cy,cI);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cA&&cA.onSetFail){cA.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cI+" on "+cy+". Error message: "+e);
}}};
if(!cB){cB=l;
}cE=qx.lang.Function.bind(cE,cw,cB);
var cD=cw.addListener(cx,cE);
return cD;
},__bq:function(cJ,cK,cL,cM,cN){if(this.__bg[cK.toHashCode()]===undefined){this.__bg[cK.toHashCode()]=[];
}this.__bg[cK.toHashCode()].push([cJ,cK,cL,cM,cN]);
},__br:function(cO,cP,cQ,cR,cS){if(cR&&cR.converter){var cU;

if(cP.getModel){cU=cP.getModel();
}return cR.converter(cO,cU,cS,cP);
}else{var cW=this.__bm(cP,cQ);
var cX=cQ.substring(cQ.lastIndexOf(h)+1,cQ.length);
if(cW==null){return cO;
}var cV=qx.Class.getPropertyDefinition(cW.constructor,cX);
var cT=cV==null?l:cV.check;
return this.__bt(cO,cT);
}},__bs:function(cY,da){var db=qx.Class.getPropertyDefinition(cY.constructor,da);

if(db==null){return null;
}return db.event;
},__bt:function(dc,dd){var de=qx.lang.Type.getClass(dc);
if((de==c||de==b)&&(dd==B||dd==n)){dc=parseInt(dc,10);
}if((de==D||de==c||de==z)&&dd==b){dc=dc+l;
}if((de==c||de==b)&&(dd==c||dd==r)){dc=parseFloat(dc);
}return dc;
},removeBindingFromObject:function(df,dg){if(dg.type==I){for(var i=0;i<dg.sources.length;i++){if(dg.sources[i]){dg.sources[i].removeListenerById(dg.listenerIds[i]);
}}for(var i=0;i<dg.targets.length;i++){if(dg.targets[i]){dg.targets[i].removeListenerById(dg.targetListenerIds[i]);
}}}else{df.removeListenerById(dg);
}var dh=this.__bg[df.toHashCode()];
if(dh!=undefined){for(var i=0;i<dh.length;i++){if(dh[i][0]==dg){qx.lang.Array.remove(dh,dh[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(di){if(qx.core.Environment.get(F)){qx.core.Assert.assertNotNull(di,t);
}var dj=this.__bg[di.toHashCode()];

if(dj!=undefined){for(var i=dj.length-1;i>=0;i--){this.removeBindingFromObject(di,dj[i][0]);
}}},getAllBindingsForObject:function(dk){if(this.__bg[dk.toHashCode()]===undefined){this.__bg[dk.toHashCode()]=[];
}return this.__bg[dk.toHashCode()];
},removeAllBindings:function(){for(var dm in this.__bg){var dl=qx.core.ObjectRegistry.fromHashCode(dm);
if(dl==null){delete this.__bg[dm];
continue;
}this.removeAllBindingsForObject(dl);
}this.__bg={};
},getAllBindings:function(){return this.__bg;
},showBindingInLog:function(dn,dp){var dr;
for(var i=0;i<this.__bg[dn.toHashCode()].length;i++){if(this.__bg[dn.toHashCode()][i][0]==dp){dr=this.__bg[dn.toHashCode()][i];
break;
}}
if(dr===undefined){var dq=p;
}else{var dq=q+dr[1]+E+dr[2]+C+dr[3]+E+dr[4]+x;
}qx.log.Logger.debug(dq);
},showAllBindingsInLog:function(){for(var dt in this.__bg){var ds=qx.core.ObjectRegistry.fromHashCode(dt);

for(var i=0;i<this.__bg[dt].length;i++){this.showBindingInLog(ds,this.__bg[dt][i][0]);
}}}}});
})();
(function(){var p="",o="g",n="]",m='\\u',l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Bootstrap.define(g,{statics:{__bu:j,__bv:null,__bw:{},camelCase:function(q){var r=this.__bw[q];

if(!r){r=q.replace(/\-([a-z])/g,function(s,t){return t.toUpperCase();
});
this.__bw[q]=r;
}return r;
},hyphenate:function(u){var v=this.__bw[u];

if(!v){v=u.replace(/[A-Z]/g,function(w){return (h+w.charAt(0).toLowerCase());
});
this.__bw[u]=v;
}return v;
},capitalize:function(x){if(this.__bv===null){var y=m;
this.__bv=new RegExp(f+this.__bu.replace(/[0-9A-F]{4}/g,function(z){return y+z;
})+a+this.__bu.replace(/[0-9A-F]{4}/g,function(A){return y+A;
})+n,o);
}return x.replace(this.__bv,function(B){return B.toUpperCase();
});
},clean:function(C){return this.trim(C.replace(/\s+/g,d));
},trimLeft:function(D){return D.replace(/^\s+/,p);
},trimRight:function(E){return E.replace(/\s+$/,p);
},trim:function(F){return F.replace(/^\s+|\s+$/g,p);
},startsWith:function(G,H){return G.indexOf(H)===0;
},endsWith:function(I,J){return I.substring(I.length-J.length,I.length)===J;
},repeat:function(K,L){return K.length>0?new Array(L+1).join(K):p;
},pad:function(M,length,N){var O=length-M.length;

if(O>0){if(typeof N===l){N=c;
}return this.repeat(N,O)+M;
}else{return M;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(P,Q){return P.indexOf(Q)!=-1;
},format:function(R,S){var T=R;
var i=S.length;

while(i--){T=T.replace(new RegExp(e+(i+1),o),S[i]+p);
}return T;
},escapeRegexpChars:function(U){return U.replace(/([.*+?^${}()|[\]\/\\])/g,k);
},toArray:function(V){return V.split(/\B|\b/g);
},stripTags:function(W){return W.replace(/<\/?[^>]+>/gi,p);
},stripScripts:function(X,Y){var bb=p;
var ba=X.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){bb+=arguments[1]+b;
return p;
});

if(Y===true){qx.lang.Function.globalEval(bb);
}return ba;
}}});
})();
(function(){var m="qx.debug",k="The second parameter must be an array.",j="mshtml",h="engine.name",g="The first parameter must be an array.",f="Parameter must be an array.",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Bootstrap.define(d,{statics:{toArray:function(n,o){return this.cast(n,Array,o);
},cast:function(p,q,r){if(p.constructor===q){return p;
}
if(qx.data&&qx.data.IListData){if(qx.Class&&qx.Class.hasInterface(p,qx.data.IListData)){var p=p.toArray();
}}var s=new q;
if((qx.core.Environment.get(h)==j)){if(p.item){for(var i=r||0,l=p.length;i<l;i++){s.push(p[i]);
}return s;
}}if(Object.prototype.toString.call(p)===e&&r==null){s.push.apply(s,p);
}else{s.push.apply(s,Array.prototype.slice.call(p,r||0));
}return s;
},fromArguments:function(t,u){return Array.prototype.slice.call(t,u||0);
},fromCollection:function(v){if((qx.core.Environment.get(h)==j)){if(v.item){var w=[];

for(var i=0,l=v.length;i<l;i++){w[i]=v[i];
}return w;
}}return Array.prototype.slice.call(v,0);
},fromShortHand:function(x){var z=x.length;
var y=qx.lang.Array.clone(x);
switch(z){case 1:y[1]=y[2]=y[3]=y[0];
break;
case 2:y[2]=y[0];
case 3:y[3]=y[1];
}return y;
},clone:function(A){return A.concat();
},insertAt:function(B,C,i){B.splice(i,0,C);
return B;
},insertBefore:function(D,E,F){var i=D.indexOf(F);

if(i==-1){D.push(E);
}else{D.splice(i,0,E);
}return D;
},insertAfter:function(G,H,I){var i=G.indexOf(I);

if(i==-1||i==(G.length-1)){G.push(H);
}else{G.splice(i+1,0,H);
}return G;
},removeAt:function(J,i){return J.splice(i,1)[0];
},removeAll:function(K){K.length=0;
return this;
},append:function(L,M){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(L,g);
qx.core.Assert&&qx.core.Assert.assertArray(M,k);
}Array.prototype.push.apply(L,M);
return L;
},exclude:function(N,O){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(N,g);
qx.core.Assert&&qx.core.Assert.assertArray(O,k);
}
for(var i=0,Q=O.length,P;i<Q;i++){P=N.indexOf(O[i]);

if(P!=-1){N.splice(P,1);
}}return N;
},remove:function(R,S){var i=R.indexOf(S);

if(i!=-1){R.splice(i,1);
return S;
}},contains:function(T,U){return T.indexOf(U)!==-1;
},equals:function(V,W){var length=V.length;

if(length!==W.length){return false;
}
for(var i=0;i<length;i++){if(V[i]!==W[i]){return false;
}}return true;
},sum:function(X){var Y=0;

for(var i=0,l=X.length;i<l;i++){Y+=X[i];
}return Y;
},max:function(ba){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(ba,f);
}var i,bc=ba.length,bb=ba[0];

for(i=1;i<bc;i++){if(ba[i]>bb){bb=ba[i];
}}return bb===undefined?null:bb;
},min:function(bd){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(bd,f);
}var i,bf=bd.length,be=bd[0];

for(i=1;i<bf;i++){if(bd[i]<be){be=bd[i];
}}return be===undefined?null:be;
},unique:function(bg){var bq=[],bi={},bl={},bn={};
var bm,bh=0;
var br=c+qx.lang.Date.now();
var bj=false,bp=false,bs=false;
for(var i=0,bo=bg.length;i<bo;i++){bm=bg[i];
if(bm===null){if(!bj){bj=true;
bq.push(bm);
}}else if(bm===undefined){}else if(bm===false){if(!bp){bp=true;
bq.push(bm);
}}else if(bm===true){if(!bs){bs=true;
bq.push(bm);
}}else if(typeof bm===a){if(!bi[bm]){bi[bm]=1;
bq.push(bm);
}}else if(typeof bm===b){if(!bl[bm]){bl[bm]=1;
bq.push(bm);
}}else{var bk=bm[br];

if(bk==null){bk=bm[br]=bh++;
}
if(!bn[bk]){bn[bk]=bm;
bq.push(bm);
}}}for(var bk in bn){try{delete bn[bk][br];
}catch(bt){try{bn[bk][br]=null;
}catch(bu){throw new Error("Cannot clean-up map entry doneObjects["+bk+"]["+br+"]");
}}}return bq;
}}});
})();
(function(){var u=".",t="function",s="",r="gecko",q="Maple",p="[object Opera]",o="mshtml",n="8.0",m="AppleWebKit/",l="9.0",e="[^\\.0-9]",k="Gecko",h="webkit",c="4.0",b="1.9.0.0",g="opera",f="Version/",i="5.0",a="engine.version",j="qx.bom.client.Engine",d="engine.name";
qx.Bootstrap.define(j,{statics:{getVersion:function(){var y=window.navigator.userAgent;
var w=s;

if(qx.bom.client.Engine.__bx()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(y)){if(y.indexOf(f)!=-1){var x=y.match(/Version\/(\d+)\.(\d+)/);
w=x[1]+u+x[2].charAt(0)+u+x[2].substring(1,x[2].length);
}else{w=RegExp.$1+u+RegExp.$2;

if(RegExp.$3!=s){w+=u+RegExp.$3;
}}}}else if(qx.bom.client.Engine.__by()){if(/AppleWebKit\/([^ ]+)/.test(y)){w=RegExp.$1;
var z=RegExp(e).exec(w);

if(z){w=w.slice(0,z.index);
}}}else if(qx.bom.client.Engine.__bA()||qx.bom.client.Engine.__bz()){if(/rv\:([^\);]+)(\)|;)/.test(y)){w=RegExp.$1;
}}else if(qx.bom.client.Engine.__bB()){if(/MSIE\s+([^\);]+)(\)|;)/.test(y)){w=RegExp.$1;
if(w<8&&/Trident\/([^\);]+)(\)|;)/.test(y)){if(RegExp.$1==c){w=n;
}else if(RegExp.$1==i){w=l;
}}}}else{var v=window.qxFail;

if(v&&typeof v===t){w=v().FULLVERSION;
}else{w=b;
qx.Bootstrap.warn("Unsupported client: "+y+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return w;
},getName:function(){var name;

if(qx.bom.client.Engine.__bx()){name=g;
}else if(qx.bom.client.Engine.__by()){name=h;
}else if(qx.bom.client.Engine.__bA()||qx.bom.client.Engine.__bz()){name=r;
}else if(qx.bom.client.Engine.__bB()){name=o;
}else{var A=window.qxFail;

if(A&&typeof A===t){name=A().NAME;
}else{name=r;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__bx:function(){return window.opera&&Object.prototype.toString.call(window.opera)==p;
},__by:function(){return window.navigator.userAgent.indexOf(m)!=-1;
},__bz:function(){return window.navigator.userAgent.indexOf(q)!=-1;
},__bA:function(){return window.controllers&&window.navigator.product===k&&window.navigator.userAgent.indexOf(q)==-1;
},__bB:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(B){qx.core.Environment.add(a,B.getVersion);
qx.core.Environment.add(d,B.getName);
}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Bootstrap.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g="Event (",f="Expected value to be the CSS color '",d="' but found ",bA="]",bz=", ",by="The value '",bx=")), but found value '",bw=" != ",bv="qx.core.Object",bu="Expected value to be an array but found ",bt=") was fired.",bs="Expected value to be an integer >= 0 but found ",br="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",T="Invalid argument 'type'",P="Called assert with 'false'",bc="Assertion error! ",W="null",bn="' but found '",bh="'undefined'",K="' must must be a key of the map '",bq="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",I="qx.util.ColorUtil",M=": ",O="The raised exception does not have the expected type! ",R=") not fired.",U="qx.core.Assert",X="Expected value to be typeof object but found ",be="' (identical) but found '",bj="' must have any of the values defined in the array '",y="Expected value to be a number but found ",z="Called assertFalse with '",L="qx.ui.core.Widget",bb="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",bg="Array[",bf="' does not match the regular expression '",V="' to be not identical with '",bd="Expected [",a="' arguments but found '",bi="', which cannot be converted to a CSS color!",A="qx.core.AssertionError",B="Expected value to be a boolean but found ",Q="Expected value not to be null but found null!",b="))!",c="Expected value to be a qooxdoo widget but found ",H="Expected value to be typeof '",C="Expected value to be typeof function but found ",D="Expected value to be an integer but found ",G="Called fail().",S="The parameter 're' must be a string or a regular expression.",bl="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",N="], but found [",bm="Wrong number of arguments given. Expected '",J="object";
qx.Class.define(U,{statics:{__bM:true,__bN:function(bB,bC){var bG=p;

for(var i=1,l=arguments.length;i<l;i++){bG=bG+this.__bO(arguments[i]===undefined?bh:arguments[i]);
}var bF=p;

if(bG){bF=bB+M+bG;
}else{bF=bB;
}var bE=bc+bF;

if(qx.Class.isDefined(A)){var bD=new qx.core.AssertionError(bB,bG);

if(this.__bM){qx.Bootstrap.error(bE+"\n Stack trace: \n"+bD.getStackTrace());
}throw bD;
}else{if(this.__bM){qx.Bootstrap.error(bE);
}throw new Error(bE);
}},__bO:function(bH){var bI;

if(bH===null){bI=W;
}else if(qx.lang.Type.isArray(bH)&&bH.length>10){bI=bg+bH.length+bA;
}else if((bH instanceof Object)&&(bH.toString==null)){bI=qx.lang.Json.stringify(bH,null,2);
}else{try{bI=bH.toString();
}catch(e){bI=p;
}}return bI;
},assert:function(bJ,bK){bJ==true||this.__bN(bK||p,P);
},fail:function(bL,bM){var bN=bM?p:G;
this.__bN(bL||p,bN);
},assertTrue:function(bO,bP){(bO===true)||this.__bN(bP||p,u,bO,m);
},assertFalse:function(bQ,bR){(bQ===false)||this.__bN(bR||p,z,bQ,m);
},assertEquals:function(bS,bT,bU){bS==bT||this.__bN(bU||p,k,bS,bn,bT,n);
},assertNotEquals:function(bV,bW,bX){bV!=bW||this.__bN(bX||p,k,bV,br,bW,n);
},assertIdentical:function(bY,ca,cb){bY===ca||this.__bN(cb||p,k,bY,be,ca,n);
},assertNotIdentical:function(cc,cd,ce){cc!==cd||this.__bN(ce||p,k,cc,V,cd,n);
},assertNotUndefined:function(cf,cg){cf!==undefined||this.__bN(cg||p,bo);
},assertUndefined:function(ch,ci){ch===undefined||this.__bN(ci||p,t,ch,o);
},assertNotNull:function(cj,ck){cj!==null||this.__bN(ck||p,Q);
},assertNull:function(cl,cm){cl===null||this.__bN(cm||p,F,cl,o);
},assertJsonEquals:function(cn,co,cp){this.assertEquals(qx.lang.Json.stringify(cn),qx.lang.Json.stringify(co),cp);
},assertMatch:function(cq,cr,cs){this.assertString(cq);
this.assert(qx.lang.Type.isRegExp(cr)||qx.lang.Type.isString(cr),S);
cq.search(cr)>=0||this.__bN(cs||p,bq,cq,bf,cr.toString(),n);
},assertArgumentsCount:function(ct,cu,cv,cw){var cx=ct.length;
(cx>=cu&&cx<=cv)||this.__bN(cw||p,bm,cu,w,cv,a,arguments.length,ba);
},assertEventFired:function(cy,event,cz,cA,cB){var cD=false;
var cC=function(e){if(cA){cA.call(cy,e);
}cD=true;
};
var cE;

try{cE=cy.addListener(event,cC,cy);
cz.call();
}catch(cF){throw cF;
}finally{try{cy.removeListenerById(cE);
}catch(cG){}}cD===true||this.__bN(cB||p,g,event,R);
},assertEventNotFired:function(cH,event,cI,cJ){var cL=false;
var cK=function(e){cL=true;
};
var cM=cH.addListener(event,cK,cH);
cI.call();
cL===false||this.__bN(cJ||p,g,event,bt);
cH.removeListenerById(cM);
},assertException:function(cN,cO,cP,cQ){var cO=cO||Error;
var cR;

try{this.__bM=false;
cN();
}catch(cS){cR=cS;
}finally{this.__bM=true;
}
if(cR==null){this.__bN(cQ||p,s);
}cR instanceof cO||this.__bN(cQ||p,O,cO,bw,cR);

if(cP){this.assertMatch(cR.toString(),cP,cQ);
}},assertInArray:function(cT,cU,cV){cU.indexOf(cT)!==-1||this.__bN(cV||p,by,cT,bj,cU,m);
},assertArrayEquals:function(cW,cX,cY){this.assertArray(cW,cY);
this.assertArray(cX,cY);
cY=cY||bd+cW.join(bz)+N+cX.join(bz)+bA;

if(cW.length!==cX.length){this.fail(cY,true);
}
for(var i=0;i<cW.length;i++){if(cW[i]!==cX[i]){this.fail(cY,true);
}}},assertKeyInMap:function(da,db,dc){db[da]!==undefined||this.__bN(dc||p,by,da,K,db,m);
},assertFunction:function(dd,de){qx.lang.Type.isFunction(dd)||this.__bN(de||p,C,dd,o);
},assertString:function(df,dg){qx.lang.Type.isString(df)||this.__bN(dg||p,bp,df,o);
},assertBoolean:function(dh,di){qx.lang.Type.isBoolean(dh)||this.__bN(di||p,B,dh,o);
},assertNumber:function(dj,dk){(qx.lang.Type.isNumber(dj)&&isFinite(dj))||this.__bN(dk||p,y,dj,o);
},assertPositiveNumber:function(dl,dm){(qx.lang.Type.isNumber(dl)&&isFinite(dl)&&dl>=0)||this.__bN(dm||p,bl,dl,o);
},assertInteger:function(dn,dp){(qx.lang.Type.isNumber(dn)&&isFinite(dn)&&dn%1===0)||this.__bN(dp||p,D,dn,o);
},assertPositiveInteger:function(dq,dr){var ds=(qx.lang.Type.isNumber(dq)&&isFinite(dq)&&dq%1===0&&dq>=0);
ds||this.__bN(dr||p,bs,dq,o);
},assertInRange:function(dt,du,dv,dw){(dt>=du&&dt<=dv)||this.__bN(dw||p,qx.lang.String.format(Y,[dt,du,dv]));
},assertObject:function(dx,dy){var dz=dx!==null&&(qx.lang.Type.isObject(dx)||typeof dx===J);
dz||this.__bN(dy||p,X,(dx),o);
},assertArray:function(dA,dB){qx.lang.Type.isArray(dA)||this.__bN(dB||p,bu,dA,o);
},assertMap:function(dC,dD){qx.lang.Type.isObject(dC)||this.__bN(dD||p,v,dC,o);
},assertRegExp:function(dE,dF){qx.lang.Type.isRegExp(dE)||this.__bN(dF||p,r,dE,o);
},assertType:function(dG,dH,dI){this.assertString(dH,T);
typeof (dG)===dH||this.__bN(dI||p,H,dH,d,dG,o);
},assertInstance:function(dJ,dK,dL){var dM=dK.classname||dK+p;
dJ instanceof dK||this.__bN(dL||p,bk,dM,d,dJ,o);
},assertInterface:function(dN,dO,dP){qx.Class.implementsInterface(dN,dO)||this.__bN(dP||p,x,dN,E,dO,n);
},assertCssColor:function(dQ,dR,dS){var dT=qx.Class.getByName(I);

if(!dT){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dV=dT.stringToRgb(dQ);

try{var dU=dT.stringToRgb(dR);
}catch(dX){this.__bN(dS||p,f,dQ,j,dV.join(h),bx,dR,bi);
}var dW=dV[0]==dU[0]&&dV[1]==dU[1]&&dV[2]==dU[2];
dW||this.__bN(dS||p,f,dV,j,dV.join(h),bx,dR,j,dU.join(h),b);
},assertElement:function(dY,ea){!!(dY&&dY.nodeType===1)||this.__bN(ea||p,q,dY,n);
},assertQxObject:function(eb,ec){this.__bP(eb,bv)||this.__bN(ec||p,bb,eb,o);
},assertQxWidget:function(ed,ee){this.__bP(ed,L)||this.__bN(ee||p,c,ed,o);
},__bP:function(ef,eg){if(!ef){return false;
}var eh=ef.constructor;

while(eh){if(eh.classname===eg){return true;
}eh=eh.superclass;
}return false;
}}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bQ=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bQ:null,message:null,getComment:function(){return this.__bQ;
},toString:function(){return this.__bQ+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__bR=qx.dev.StackTrace.getStackTrace();
},members:{__bR:null,getStackTrace:function(){return this.__bR;
}}});
})();
(function(){var q=":",p="ecmascript.stacktrace",o="qx.debug",n="Error created at",m="function",l="engine.name",k="...",j="qx.dev.StackTrace",h="",g="\n",c="/source/class/",f="anonymous",e="stack",b=".",a="?",d="stacktrace";
qx.Bootstrap.define(j,{statics:{FILENAME_TO_CLASSNAME:null,FORMAT_STACKTRACE:null,getStackTrace:qx.core.Environment.select(l,{"gecko":function(){try{throw new Error();
}catch(E){var y=this.getStackTraceFromError(E);
qx.lang.Array.removeAt(y,0);
var w=this.getStackTraceFromCaller(arguments);
var u=w.length>y.length?w:y;

for(var i=0;i<Math.min(w.length,y.length);i++){var v=w[i];

if(v.indexOf(f)>=0){continue;
}var C=v.split(q);

if(C.length!=2){continue;
}var A=C[0];
var t=C[1];
var s=y[i];
var D=s.split(q);
var z=D[0];
var r=D[1];

if(qx.Class.getByName(z)){var x=z;
}else{x=A;
}var B=x+q;

if(t){B+=t+q;
}B+=r;
u[i]=B;
}return u;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var F;

try{F.bar();
}catch(H){var G=this.getStackTraceFromError(H);
qx.lang.Array.removeAt(G,0);
return G;
}return [];
}}),getStackTraceFromCaller:function(I){var N=[];
var M=qx.lang.Function.getCaller(I);
var J={};

while(M){var K=qx.lang.Function.getName(M);
N.push(K);

try{M=M.caller;
}catch(O){break;
}
if(!M){break;
}var L=qx.core.ObjectRegistry.toHashCode(M);

if(J[L]){N.push(k);
break;
}J[L]=M;
}return N;
},getStackTraceFromError:function(P){var T=[];

if(qx.core.Environment.get(p)===e){if(!P.stack){return T;
}var bf=/@(.+):(\d+)$/gm;
var S;

while((S=bf.exec(P.stack))!=null){var V=S[1];
var bd=S[2];
var bb=this.__bS(V);
T.push(bb+q+bd);
}
if(T.length>0){return this.__bU(T);
}var bf=/at (.*)/gm;
var be=/\((.*?)(:[^\/].*)\)/;
var ba=/(.*?)(:[^\/].*)/;
var S;

while((S=bf.exec(P.stack))!=null){var Y=be.exec(S[1]);

if(!Y){Y=ba.exec(S[1]);
}
if(Y){var bb=this.__bS(Y[1]);
T.push(bb+Y[2]);
}else{T.push(S[1]);
}}}else if(qx.core.Environment.get(p)===d){var R=P.stacktrace;

if(!R){return T;
}
if(R.indexOf(n)>=0){R=R.split(n)[0];
}var bf=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var S;

while((S=bf.exec(R))!=null){var bd=S[1];
var U=S[2];
var V=S[3];
var bb=this.__bS(V);
T.push(bb+q+bd+q+U);
}
if(T.length>0){return this.__bU(T);
}var bf=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var S;

while((S=bf.exec(R))!=null){var bd=S[1];
var V=S[2];
var bb=this.__bS(V);
T.push(bb+q+bd);
}}else if(P.message&&P.message.indexOf("Backtrace:")>=0){var X=qx.lang.String.trim(P.message.split("Backtrace:")[1]);
var W=X.split(g);

for(var i=0;i<W.length;i++){var Q=W[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(Q&&Q.length>=2){var bd=Q[1];
var bc=this.__bS(Q[2]);
T.push(bc+q+bd);
}}}else if(P.sourceURL&&P.line){T.push(this.__bS(P.sourceURL)+q+P.line);
}return this.__bU(T);
},__bS:function(bg){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==m){var bh=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bg);

if(qx.core.Environment.get(o)&&!qx.lang.Type.isString(bh)){throw new Error("FILENAME_TO_CLASSNAME must return a string!");
}return bh;
}return qx.dev.StackTrace.__bT(bg);
},__bT:function(bi){var bm=c;
var bj=bi.indexOf(bm);
var bl=bi.indexOf(a);

if(bl>=0){bi=bi.substring(0,bl);
}var bk=(bj==-1)?bi:bi.substring(bj+bm.length).replace(/\//g,b).replace(/\.js$/,h);
return bk;
},__bU:function(bn){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==m){bn=qx.dev.StackTrace.FORMAT_STACKTRACE(bn);
if(qx.core.Environment.get(o)&&!qx.lang.Type.isArray(bn)){throw new Error("FORMAT_STACKTRACE must return an array of strings!");
}}return bn;
}}});
})();
(function(){var j="()",i="qx.debug",h=".",g=".prototype.",f="Invalid parameter 'func'.",e='anonymous()',d="Trying to call a bound function with a disposed object as context: ",c=" :: ",b="qx.lang.Function",a=".constructor()";
qx.Bootstrap.define(b,{statics:{getCaller:function(k){return k.caller?k.caller.callee:k.callee.caller;
},getName:function(l){if(l.displayName){return l.displayName;
}
if(l.$$original||l.wrapper||l.classname){return l.classname+a;
}
if(l.$$mixin){for(var n in l.$$mixin.$$members){if(l.$$mixin.$$members[n]==l){return l.$$mixin.name+g+n+j;
}}for(var n in l.$$mixin){if(l.$$mixin[n]==l){return l.$$mixin.name+h+n+j;
}}}
if(l.self){var o=l.self.constructor;

if(o){for(var n in o.prototype){if(o.prototype[n]==l){return o.classname+g+n+j;
}}for(var n in o){if(o[n]==l){return o.classname+h+n+j;
}}}}var m=l.toString().match(/function\s*(\w*)\s*\(.*/);

if(m&&m.length>=1&&m[1]){return m[1]+j;
}return e;
},globalEval:function(p){if(window.execScript){return window.execScript(p);
}else{return eval.call(window,p);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(q,r){if(qx.core.Environment.get(i)){qx.core.Assert&&qx.core.Assert.assertFunction(q,f);
}if(!r){return q;
}if(!(r.self||r.args||r.delay!=null||r.periodical!=null||r.attempt)){return q;
}return function(event){if(qx.core.Environment.get(i)){if(qx.core&&qx.core.Object&&r.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(r.self.isDisposed(),d+r.self.toString()+c+qx.lang.Function.getName(q));
}}var t=qx.lang.Array.fromArguments(arguments);
if(r.args){t=r.args.concat(t);
}
if(r.delay||r.periodical){var s=qx.event.GlobalError.observeMethod(function(){return q.apply(r.self||this,t);
});

if(r.delay){return window.setTimeout(s,r.delay);
}
if(r.periodical){return window.setInterval(s,r.periodical);
}}else if(r.attempt){var u=false;

try{u=q.apply(r.self||this,t);
}catch(v){}return u;
}else{return q.apply(r.self||this,t);
}};
},bind:function(w,self,x){return this.create(w,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(y,z){return this.create(y,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(A,self,B){if(arguments.length<3){return function(event){return A.call(self||this,event||window.event);
};
}else{var C=qx.lang.Array.fromArguments(arguments,2);
return function(event){var D=[event||window.event];
D.push.apply(D,C);
A.apply(self||this,D);
};
}},attempt:function(E,self,F){return this.create(E,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(G,H,self,I){return this.create(G,{delay:H,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(J,K,self,L){return this.create(J,{periodical:K,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var b="qx.globalErrorHandling",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{__bC:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(b);
}else{return !!qx.Bootstrap.getEnvironmentSetting(b);
}},setErrorHandler:function(c,d){this.__bD=c||null;
this.__bE=d||window;

if(this.__bC()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__bG,this);

if(this.__bF==null){this.__bF=window.onerror;
}var self=this;
window.onerror=function(f,g,h){self.__bF(f,g,h);
e(f,g,h);
};
}
if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__bG,this);
}if(this.__bD==null){if(this.__bF!=null){window.onerror=this.__bF;
this.__bF=null;
}else{window.onerror=null;
}}}},__bG:function(i,j,k){if(this.__bD){this.handleError(new qx.core.WindowError(i,j,k));
return true;
}},observeMethod:function(l){if(this.__bC()){var self=this;
return function(){if(!self.__bD){return l.apply(this,arguments);
}
try{return l.apply(this,arguments);
}catch(m){self.handleError(new qx.core.GlobalError(m,arguments));
}};
}else{return l;
}},handleError:function(n){if(this.__bD){this.__bD.call(this.__bE,n);
}}},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(b,true);
}else{qx.Bootstrap.setEnvironmentSetting(b,true);
}o.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__bH=c;
this.__bI=d||b;
this.__bJ=e===undefined?-1:e;
},members:{__bH:null,__bI:null,__bJ:null,toString:function(){return this.__bH;
},getUri:function(){return this.__bI;
},getLineNumber:function(){return this.__bJ;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(c);
}this.__bH=b+(c&&c.message?c.message:c);
Error.call(this,this.__bH);
this.__bK=d;
this.__bL=c;
},members:{__bL:null,__bK:null,__bH:null,toString:function(){return this.__bH;
},getArguments:function(){return this.__bK;
},getSourceException:function(){return this.__bL;
}},destruct:function(){this.__bL=null;
this.__bK=null;
this.__bH=null;
}});
})();
(function(){var j="qx.debug",h="qx.debug.dispose",g="$$hash",f="-",e="",d="qx.core.ObjectRegistry",c="-0";
qx.Class.define(d,{statics:{inShutDown:false,__bc:{},__bV:0,__bW:[],__bX:e,__bY:{},register:function(k){var o=this.__bc;

if(!o){return;
}var n=k.$$hash;

if(n==null){var m=this.__bW;

if(m.length>0&&!qx.core.Environment.get(h)){n=m.pop();
}else{n=(this.__bV++)+this.__bX;
}k.$$hash=n;

if(qx.core.Environment.get(h)){if(qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__bY[n]=qx.dev.StackTrace.getStackTrace();
}}}
if(qx.core.Environment.get(j)){if(!k.dispose){throw new Error("Invalid object: "+k);
}}o[n]=k;
},unregister:function(p){var q=p.$$hash;

if(q==null){return;
}var r=this.__bc;

if(r&&r[q]){delete r[q];
this.__bW.push(q);
}try{delete p.$$hash;
}catch(s){if(p.removeAttribute){p.removeAttribute(g);
}}},toHashCode:function(t){if(qx.core.Environment.get(j)){if(t==null){throw new Error("Invalid object: "+t);
}}var v=t.$$hash;

if(v!=null){return v;
}var u=this.__bW;

if(u.length>0){v=u.pop();
}else{v=(this.__bV++)+this.__bX;
}return t.$$hash=v;
},clearHashCode:function(w){if(qx.core.Environment.get(j)){if(w==null){throw new Error("Invalid object: "+w);
}}var x=w.$$hash;

if(x!=null){this.__bW.push(x);
try{delete w.$$hash;
}catch(y){if(w.removeAttribute){w.removeAttribute(g);
}}}},fromHashCode:function(z){return this.__bc[z]||null;
},shutdown:function(){this.inShutDown=true;
var B=this.__bc;
var D=[];

for(var C in B){D.push(C);
}D.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var A,i=0,l=D.length;

while(true){try{for(;i<l;i++){C=D[i];
A=B[C];

if(A&&A.dispose){A.dispose();
}}}catch(E){qx.Bootstrap.error(this,"Could not dispose object "+A.toString()+": "+E,E);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bc;
},getRegistry:function(){return this.__bc;
},getNextHash:function(){return this.__bV;
},getPostId:function(){return this.__bX;
},getStackTraces:function(){return this.__bY;
}},defer:function(F){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){F.__bX=f+(i+1);
return;
}}}F.__bX=c;
}});
})();
(function(){var f="ecmascript.objectcount",d="stack",c="ecmascript.stacktrace",b="stacktrace",a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
},getStackTrace:function(){var e=new Error();
return e.stacktrace?b:e.stack?d:null;
}},defer:function(g){qx.core.Environment.add(f,g.getObjectCount);
qx.core.Environment.add(c,g.getStackTrace);
}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__ca:null,__cb:null,__cc:null,__cd:null,stringify:function(bb,bc,bd){this.__ca=p;
this.__cb=p;
this.__cd=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__cb+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__cb=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__cc=bc;
}else{this.__cc=null;
}return this.__ce(p,{'':bb});
},__ce:function(be,bf){var bi=this.__ca,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__cc===e){bj=this.__cc.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__cf(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__ca+=this.__cb;
bg=[];

if(this.__cd.indexOf(bj)!==-1){throw new TypeError(V);
}this.__cd.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__ce(i,bj)||h;
}this.__cd.pop();
if(bg.length===0){var bh=s;
}else if(this.__ca){bh=E+this.__ca+bg.join(Y+this.__ca)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__ca=bi;
return bh;
case z:this.__ca+=this.__cb;
bg=[];

if(this.__cd.indexOf(bj)!==-1){throw new TypeError(V);
}this.__cd.push(bj);
if(this.__cc&&typeof this.__cc===f){var length=this.__cc.length;

for(var i=0;i<length;i+=1){var k=this.__cc[i];

if(typeof k===W){var v=this.__ce(k,bj);

if(v){bg.push(this.__cf(k)+(this.__ca?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__ce(k,bj);

if(v){bg.push(this.__cf(k)+(this.__ca?g:m)+v);
}}}}this.__cd.pop();
if(bg.length===0){var bh=A;
}else if(this.__ca){bh=w+this.__ca+bg.join(Y+this.__ca)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__ca=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__cf:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;

if(bq.test(bo)){return o+bo.replace(bq,function(a){var c=bp[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bo+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__cg({'':j},p,bs):j;
}throw new SyntaxError(P);
},__cg:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__cg(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var g="repl",f="prop",e="qx.bom.client.Json",d="JSON",c='{"x":1}',b="json",a="val";
qx.Bootstrap.define(e,{statics:{getJson:function(){return (qx.Bootstrap.getClass(window.JSON)==d&&JSON.parse(c).x===1&&JSON.stringify({"prop":a},function(k,v){return k===f?g:v;
}).indexOf(g)>0);
}},defer:function(h){qx.core.Environment.add(b,h.getJson);
}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:qx.core.Environment.get("json")?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__ch:0,__ci:0,__cj:false,__ck:0,__cl:null,__cm:null,setMaxEntries:function(c){this.__cm=c;
this.clear();
},getMaxEntries:function(){return this.__cm;
},addEntry:function(d){this.__cl[this.__ch]=d;
this.__ch=this.__cn(this.__ch,1);
var e=this.getMaxEntries();

if(this.__ci<e){this.__ci++;
}if(this.__cj&&(this.__ck<e)){this.__ck++;
}},mark:function(){this.__cj=true;
this.__ck=0;
},clearMark:function(){this.__cj=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__ci){f=this.__ci;
}if(g&&this.__cj&&(f>this.__ck)){f=this.__ck;
}
if(f>0){var i=this.__cn(this.__ch,-1);
var h=this.__cn(i,-f+1);
var j;

if(h<=i){j=this.__cl.slice(h,i+1);
}else{j=this.__cl.slice(h,this.__ci).concat(this.__cl.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__cl=new Array(this.getMaxEntries());
this.__ci=0;
this.__ck=0;
this.__ch=0;
},__cn:function(k,l){var m=this.getMaxEntries();
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
(function(){var k="qx.debug",j="unknown",h="node",g="error",f="...(+",e="array",d=")",c="info",b="instance",a="string",I="null",H="class",G="number",F="stringify",E="]",D="date",C="function",B="boolean",A="debug",z="map",s="undefined",t="qx.log.Logger",q="[",r="#",o="warn",p="document",m="{...(",n="text[",u="[...(",v="\n",x=")}",w=")]",y="object";
qx.Class.define(t,{statics:{__co:A,setLevel:function(J){this.__co=J;
},getLevel:function(){return this.__co;
},setTreshold:function(K){this.__cr.setMaxMessages(K);
},getTreshold:function(){return this.__cr.getMaxMessages();
},__cp:{},__cq:0,register:function(L){if(L.$$id){return;
}var N=this.__cq++;
this.__cp[N]=L;
L.$$id=N;
var M=this.__cs;
var O=this.__cr.getAllLogEvents();

for(var i=0,l=O.length;i<l;i++){if(M[O[i].level]>=M[this.__co]){L.process(O[i]);
}}},unregister:function(P){var Q=P.$$id;

if(Q==null){return;
}delete this.__cp[Q];
delete P.$$id;
},debug:function(R,S){qx.log.Logger.__ct(A,arguments);
},info:function(T,U){qx.log.Logger.__ct(c,arguments);
},warn:function(V,W){qx.log.Logger.__ct(o,arguments);
},error:function(X,Y){qx.log.Logger.__ct(g,arguments);
},trace:function(ba){qx.log.Logger.__ct(c,[ba,qx.dev.StackTrace.getStackTrace().join(v)]);
},deprecatedMethodWarning:function(bb,bc){if(qx.core.Environment.get(k)){var bd=qx.lang.Function.getName(bb);
this.warn("The method '"+bd+"' is deprecated: "+(bc||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(be,bf){if(qx.core.Environment.get(k)){var bg=be.classname||j;
this.warn("The class '"+bg+"' is deprecated: "+(bf||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(bh,event,bi){if(qx.core.Environment.get(k)){var bj=bh.self?bh.self.classname:j;
this.warn("The event '"+(event||"unknown")+"' from class '"+bj+"' is deprecated: "+(bi||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(bk,bl){if(qx.core.Environment.get(k)){var bm=bk?bk.name:j;
this.warn("The mixin '"+bm+"' is deprecated: "+(bl||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(bn,bo,bp){if(qx.core.Environment.get(k)){if(bn.__defineGetter__){var self=this;
var bq=bn[bo];
bn.__defineGetter__(bo,function(){self.warn("The constant '"+bo+"' is deprecated: "+(bp||"Please consult the API documentation for alternatives."));
self.trace();
return bq;
});
}}},deprecateMethodOverriding:function(br,bs,bt,bu){if(qx.core.Environment.get(k)){var bv=br.constructor;

while(bv.classname!==bs.classname){if(bv.prototype.hasOwnProperty(bt)){this.warn("The method '"+qx.lang.Function.getName(br[bt])+"' overrides a deprecated method: "+(bu||"Please consult the API documentation for alternatives."));
this.trace();
break;
}bv=bv.superclass;
}}},clear:function(){this.__cr.clearHistory();
},__cr:new qx.log.appender.RingBuffer(50),__cs:{debug:0,info:1,warn:2,error:3},__ct:function(bw,bx){var bC=this.__cs;

if(bC[bw]<bC[this.__co]){return;
}var bz=bx.length<2?null:bx[0];
var bB=bz?1:0;
var by=[];

for(var i=bB,l=bx.length;i<l;i++){by.push(this.__cv(bx[i],true));
}var bD=new Date;
var bE={time:bD,offset:bD-qx.Bootstrap.LOADSTART,level:bw,items:by,win:window};
if(bz){if(bz.$$hash!==undefined){bE.object=bz.$$hash;
}else if(bz.$$type){bE.clazz=bz;
}}this.__cr.process(bE);
var bF=this.__cp;

for(var bA in bF){bF[bA].process(bE);
}},__cu:function(bG){if(bG===undefined){return s;
}else if(bG===null){return I;
}
if(bG.$$type){return H;
}var bH=typeof bG;

if(bH===C||bH==a||bH===G||bH===B){return bH;
}else if(bH===y){if(bG.nodeType){return h;
}else if(bG.classname){return b;
}else if(bG instanceof Array){return e;
}else if(bG instanceof Error){return g;
}else if(bG instanceof Date){return D;
}else{return z;
}}
if(bG.toString){return F;
}return j;
},__cv:function(bI,bJ){var bQ=this.__cu(bI);
var bM=j;
var bL=[];

switch(bQ){case I:case s:bM=bQ;
break;
case a:case G:case B:case D:bM=bI;
break;
case h:if(bI.nodeType===9){bM=p;
}else if(bI.nodeType===3){bM=n+bI.nodeValue+E;
}else if(bI.nodeType===1){bM=bI.nodeName.toLowerCase();

if(bI.id){bM+=r+bI.id;
}}else{bM=h;
}break;
case C:bM=qx.lang.Function.getName(bI)||bQ;
break;
case b:bM=bI.basename+q+bI.$$hash+E;
break;
case H:case F:bM=bI.toString();
break;
case g:bL=qx.dev.StackTrace.getStackTraceFromError(bI);
bM=bI.toString();
break;
case e:if(bJ){bM=[];

for(var i=0,l=bI.length;i<l;i++){if(bM.length>20){bM.push(f+(l-i)+d);
break;
}bM.push(this.__cv(bI[i],false));
}}else{bM=u+bI.length+w;
}break;
case z:if(bJ){var bK;
var bP=[];

for(var bO in bI){bP.push(bO);
}bP.sort();
bM=[];

for(var i=0,l=bP.length;i<l;i++){if(bM.length>20){bM.push(f+(l-i)+d);
break;
}bO=bP[i];
bK=this.__cv(bI[bO],false);
bK.key=bO;
bM.push(bK);
}}else{var bN=0;

for(var bO in bI){bN++;
}bM=m+bN+x;
}break;
}return {type:bQ,text:bM,trace:bL};
}},defer:function(bR){var bS=qx.Bootstrap.$$logs;

for(var i=0;i<bS.length;i++){bR.__ct(bS[i][0],bS[i][1]);
}qx.Bootstrap.debug=bR.debug;
qx.Bootstrap.info=bR.info;
qx.Bootstrap.warn=bR.warn;
qx.Bootstrap.error=bR.error;
qx.Bootstrap.trace=bR.trace;
}});
})();
(function(){var e="info",d="debug",c="warn",b="qx.core.MLogging",a="error";
qx.Mixin.define(b,{members:{__cw:qx.log.Logger,debug:function(f){this.__cx(d,arguments);
},info:function(g){this.__cx(e,arguments);
},warn:function(h){this.__cx(c,arguments);
},error:function(i){this.__cx(a,arguments);
},trace:function(){this.__cw.trace(this);
},__cx:function(j,k){var l=qx.lang.Array.fromArguments(k);
l.unshift(this);
this.__cw[j].apply(this.__cw,l);
}}});
})();
(function(){var c="qx.dom.Node",b="";
qx.Class.define(c,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===this.DOCUMENT?d:d.ownerDocument||d.document;
},getWindow:function(e){if(e.nodeType==null){return e;
}if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;
}return e.defaultView||e.parentWindow;
},getDocumentElement:function(f){return this.getDocument(f).documentElement;
},getBodyElement:function(g){return this.getDocument(g).body;
},isNode:function(h){return !!(h&&h.nodeType!=null);
},isElement:function(j){return !!(j&&j.nodeType===this.ELEMENT);
},isDocument:function(k){return !!(k&&k.nodeType===this.DOCUMENT);
},isText:function(l){return !!(l&&l.nodeType===this.TEXT);
},isWindow:function(m){return !!(m&&m.history&&m.location&&m.document);
},isNodeName:function(n,o){if(!o||!n||!n.nodeName){return false;
}return o.toLowerCase()==qx.dom.Node.getName(n);
},getName:function(p){if(!p||!p.nodeName){return null;
}return p.nodeName.toLowerCase();
},getText:function(q){if(!q||!q.nodeType){return null;
}
switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;

for(i=0;i<length;i++){a[i]=this.getText(r[i]);
}return a.join(b);
case 2:case 3:case 4:return q.nodeValue;
}return null;
},isBlockNode:function(s){if(!qx.dom.Node.isElement(s)){return false;
}s=qx.dom.Node.getName(s);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(s);
}}});
})();
(function(){var m="on",l="engine.name",k="gecko",j="engine.version",i="qx.debug",h="function",g="undefined",f="mousedown",d="qx.bom.Event",c="mouseover",a="HTMLEvents",b="return;";
qx.Bootstrap.define(d,{statics:{addNativeListener:function(n,o,p,q){if(n.addEventListener){n.addEventListener(o,p,!!q);
}else if(n.attachEvent){n.attachEvent(m+o,p);
}else if(typeof n[m+o]!=g){n[m+o]=p;
}else{if(qx.core.Environment.get(i)){qx.log.Logger.warn("No method available to add native listener to "+n);
}}},removeNativeListener:function(r,s,t,u){if(r.removeEventListener){r.removeEventListener(s,t,!!u);
}else if(r.detachEvent){try{r.detachEvent(m+s,t);
}catch(e){if(e.number!==-2146828218){throw e;
}}}else if(typeof r[m+s]!=g){r[m+s]=null;
}else{if(qx.core.Environment.get(i)){qx.log.Logger.warn("No method available to remove native listener from "+r);
}}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(l)==k)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===c){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(l)==k)&&parseFloat(qx.core.Environment.get(j))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(l)==k)&&parseFloat(qx.core.Environment.get(j))<1.9){try{e.keyCode=0;
}catch(v){}}}else{try{e.keyCode=0;
}catch(w){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(x,y){if(document.createEvent){var z=document.createEvent(a);
z.initEvent(y,true,true);
return !x.dispatchEvent(z);
}else{var z=document.createEventObject();
return x.fireEvent(m+y,z);
}},supportsEvent:function(A,B){var C=m+B;
var D=(C in A);

if(!D){D=typeof A[C]==h;

if(!D&&A.setAttribute){A.setAttribute(C,b);
D=typeof A[C]==h;
A.removeAttribute(C);
}}return D;
}}});
})();
(function(){var k="qx.debug",j="|bubble",h="|capture",g="|",f="': ",e="'",d="",c="_",b="Invalid Target.",a="Invalid capture flag.",J="Invalid event type.",I=" from the target '",H="Invalid callback function",G="Invalid event target.",F="unload",E="Failed to remove event listener for id '",D="Invalid context for callback.",C="__cD",B="Failed to add event listener for type '",A="UNKNOWN_",s="capture",t="qx.event.Manager",q="' on target '",r="Could not dispatch event '",o="DOM_",p="__cC",m="QX_",n=" to the target '",u="Failed to remove event listener for type '",v="Invalid id type.",x="c",w="DOCUMENT_",z="WIN_",y="Invalid event object.";
qx.Class.define(t,{extend:Object,construct:function(K,L){this.__cy=K;
this.__cz=qx.core.ObjectRegistry.toHashCode(K);
this.__cA=L;
if(K.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(K,F,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(K,F,arguments.callee);
self.dispose();
}));
}this.__cB={};
this.__cC={};
this.__cD={};
this.__cE={};
},statics:{__cF:0,getNextUniqueId:function(){return (this.__cF++)+d;
}},members:{__cA:null,__cB:null,__cD:null,__cG:null,__cC:null,__cE:null,__cy:null,__cz:null,getWindow:function(){return this.__cy;
},getWindowId:function(){return this.__cz;
},getHandler:function(M){var N=this.__cC[M.classname];

if(N){return N;
}return this.__cC[M.classname]=new M(this);
},getDispatcher:function(O){var P=this.__cD[O.classname];

if(P){return P;
}return this.__cD[O.classname]=new O(this,this.__cA);
},getListeners:function(Q,R,S){var T=Q.$$hash||qx.core.ObjectRegistry.toHashCode(Q);
var V=this.__cB[T];

if(!V){return null;
}var W=R+(S?h:j);
var U=V[W];
return U?U.concat():null;
},getAllListeners:function(){return this.__cB;
},serializeListeners:function(X){var bf=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var bh=this.__cB[bf];
var bd=[];

if(bh){var bb,bg,Y,bc,be;

for(var ba in bh){bb=ba.indexOf(g);
bg=ba.substring(0,bb);
Y=ba.charAt(bb+1)==x;
bc=bh[ba];

for(var i=0,l=bc.length;i<l;i++){be=bc[i];
bd.push({self:be.context,handler:be.handler,type:bg,capture:Y});
}}}return bd;
},toggleAttachedEvents:function(bi,bj){var bo=bi.$$hash||qx.core.ObjectRegistry.toHashCode(bi);
var bq=this.__cB[bo];

if(bq){var bl,bp,bk,bm;

for(var bn in bq){bl=bn.indexOf(g);
bp=bn.substring(0,bl);
bk=bn.charCodeAt(bl+1)===99;
bm=bq[bn];

if(bj){this.__cH(bi,bp,bk);
}else{this.__cI(bi,bp,bk);
}}}},hasListener:function(br,bs,bt){if(qx.core.Environment.get(k)){if(br==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+br);
}}var bu=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);
var bw=this.__cB[bu];

if(!bw){return false;
}var bx=bs+(bt?h:j);
var bv=bw[bx];
return !!(bv&&bv.length>0);
},importListeners:function(by,bz){if(qx.core.Environment.get(k)){if(by==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+by);
}}var bF=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bG=this.__cB[bF]={};
var bC=qx.event.Manager;

for(var bA in bz){var bD=bz[bA];
var bE=bD.type+(bD.capture?h:j);
var bB=bG[bE];

if(!bB){bB=bG[bE]=[];
this.__cH(by,bD.type,bD.capture);
}bB.push({handler:bD.listener,context:bD.self,unique:bD.unique||(bC.__cF++)+d});
}},addListener:function(bH,bI,bJ,self,bK){if(qx.core.Environment.get(k)){var bO=B+bI+e+n+bH.classname+f;
qx.core.Assert.assertObject(bH,bO+b);
qx.core.Assert.assertString(bI,bO+J);
qx.core.Assert.assertFunction(bJ,bO+H);

if(bK!==undefined){qx.core.Assert.assertBoolean(bK,a);
}}var bP=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bR=this.__cB[bP];

if(!bR){bR=this.__cB[bP]={};
}var bN=bI+(bK?h:j);
var bM=bR[bN];

if(!bM){bM=bR[bN]=[];
}if(bM.length===0){this.__cH(bH,bI,bK);
}var bQ=(qx.event.Manager.__cF++)+d;
var bL={handler:bJ,context:self,unique:bQ};
bM.push(bL);
return bN+g+bQ;
},findHandler:function(bS,bT){var cg=false,bX=false,ch=false,bU=false;
var ce;

if(bS.nodeType===1){cg=true;
ce=o+bS.tagName.toLowerCase()+c+bT;
}else if(bS.nodeType===9){bU=true;
ce=w+bT;
}else if(bS==this.__cy){bX=true;
ce=z+bT;
}else if(bS.classname){ch=true;
ce=m+bS.classname+c+bT;
}else{ce=A+bS+c+bT;
}var ca=this.__cE;

if(ca[ce]){return ca[ce];
}var cd=this.__cA.getHandlers();
var bY=qx.event.IEventHandler;
var cb,cc,bW,bV;

for(var i=0,l=cd.length;i<l;i++){cb=cd[i];
bW=cb.SUPPORTED_TYPES;

if(bW&&!bW[bT]){continue;
}bV=cb.TARGET_CHECK;

if(bV){var cf=false;

if(cg&&((bV&bY.TARGET_DOMNODE)!=0)){cf=true;
}else if(bX&&((bV&bY.TARGET_WINDOW)!=0)){cf=true;
}else if(ch&&((bV&bY.TARGET_OBJECT)!=0)){cf=true;
}else if(bU&&((bV&bY.TARGET_DOCUMENT)!=0)){cf=true;
}
if(!cf){continue;
}}cc=this.getHandler(cd[i]);

if(cb.IGNORE_CAN_HANDLE||cc.canHandleEvent(bS,bT)){ca[ce]=cc;
return cc;
}}return null;
},__cH:function(ci,cj,ck){var cl=this.findHandler(ci,cj);

if(cl){cl.registerEvent(ci,cj,ck);
return;
}
if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cj+"' on target '"+ci+"'!");
}},removeListener:function(cm,cn,co,self,cp){if(qx.core.Environment.get(k)){var ct=u+cn+e+I+cm.classname+f;
qx.core.Assert.assertObject(cm,ct+b);
qx.core.Assert.assertString(cn,ct+J);
qx.core.Assert.assertFunction(co,ct+H);

if(self!==undefined){qx.core.Assert.assertObject(self,D);
}
if(cp!==undefined){qx.core.Assert.assertBoolean(cp,a);
}}var cu=cm.$$hash||qx.core.ObjectRegistry.toHashCode(cm);
var cv=this.__cB[cu];

if(!cv){return false;
}var cq=cn+(cp?h:j);
var cr=cv[cq];

if(!cr){return false;
}var cs;

for(var i=0,l=cr.length;i<l;i++){cs=cr[i];

if(cs.handler===co&&cs.context===self){qx.lang.Array.removeAt(cr,i);

if(cr.length==0){this.__cI(cm,cn,cp);
}return true;
}}return false;
},removeListenerById:function(cw,cx){if(qx.core.Environment.get(k)){var cD=E+cx+e+I+cw.classname+f;
qx.core.Assert.assertObject(cw,cD+b);
qx.core.Assert.assertString(cx,cD+v);
}var cB=cx.split(g);
var cG=cB[0];
var cy=cB[1].charCodeAt(0)==99;
var cF=cB[2];
var cE=cw.$$hash||qx.core.ObjectRegistry.toHashCode(cw);
var cH=this.__cB[cE];

if(!cH){return false;
}var cC=cG+(cy?h:j);
var cA=cH[cC];

if(!cA){return false;
}var cz;

for(var i=0,l=cA.length;i<l;i++){cz=cA[i];

if(cz.unique===cF){qx.lang.Array.removeAt(cA,i);

if(cA.length==0){this.__cI(cw,cG,cy);
}return true;
}}return false;
},removeAllListeners:function(cI){var cM=cI.$$hash||qx.core.ObjectRegistry.toHashCode(cI);
var cO=this.__cB[cM];

if(!cO){return false;
}var cK,cN,cJ;

for(var cL in cO){if(cO[cL].length>0){cK=cL.split(g);
cN=cK[0];
cJ=cK[1]===s;
this.__cI(cI,cN,cJ);
}}delete this.__cB[cM];
return true;
},deleteAllListeners:function(cP){delete this.__cB[cP];
},__cI:function(cQ,cR,cS){var cT=this.findHandler(cQ,cR);

if(cT){cT.unregisterEvent(cQ,cR,cS);
return;
}
if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cR+"' on target '"+cQ+"'!");
}},dispatchEvent:function(cU,event){if(qx.core.Environment.get(k)){var da=r+event+q+cU.classname+f;
qx.core.Assert.assertNotUndefined(cU,da+G);
qx.core.Assert.assertNotNull(cU,da+G);
qx.core.Assert.assertInstance(event,qx.event.type.Event,da+y);
}var db=event.getType();

if(!event.getBubbles()&&!this.hasListener(cU,db)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cU);
}var cY=this.__cA.getDispatchers();
var cX;
var cW=false;

for(var i=0,l=cY.length;i<l;i++){cX=this.getDispatcher(cY[i]);
if(cX.canDispatchEvent(cU,event,db)){cX.dispatchEvent(cU,event,db);
cW=true;
break;
}}
if(!cW){if(qx.core.Environment.get(k)){qx.log.Logger.error(this,"No dispatcher can handle event of type "+db+" on "+cU);
}return true;
}var cV=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cV;
},dispose:function(){this.__cA.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,p);
qx.util.DisposeUtil.disposeMap(this,C);
this.__cB=this.__cy=this.__cG=null;
this.__cA=this.__cE=null;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var k="qx.debug",j="Invalid event target.",i="Invalid event dispatcher!",h="': ",g="Invalid event handler.",f="' on target '",e="Could not fire event '",d="undefined",c="qx.event.Registration";
qx.Class.define(c,{statics:{__cJ:{},getManager:function(l){if(l==null){if(qx.core.Environment.get(k)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}l=window;
}else if(l.nodeType){l=qx.dom.Node.getWindow(l);
}else if(!qx.dom.Node.isWindow(l)){l=window;
}var n=l.$$hash||qx.core.ObjectRegistry.toHashCode(l);
var m=this.__cJ[n];

if(!m){m=new qx.event.Manager(l,this);
this.__cJ[n]=m;
}return m;
},removeManager:function(o){var p=o.getWindowId();
delete this.__cJ[p];
},addListener:function(q,r,s,self,t){return this.getManager(q).addListener(q,r,s,self,t);
},removeListener:function(u,v,w,self,x){return this.getManager(u).removeListener(u,v,w,self,x);
},removeListenerById:function(y,z){return this.getManager(y).removeListenerById(y,z);
},removeAllListeners:function(A){return this.getManager(A).removeAllListeners(A);
},deleteAllListeners:function(B){var C=B.$$hash;

if(C){this.getManager(B).deleteAllListeners(C);
}},hasListener:function(D,E,F){return this.getManager(D).hasListener(D,E,F);
},serializeListeners:function(G){return this.getManager(G).serializeListeners(G);
},createEvent:function(H,I,J){if(qx.core.Environment.get(k)){if(arguments.length>1&&I===undefined){throw new Error("Create event of type "+H+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(I==null){I=qx.event.type.Event;
}var K=qx.event.Pool.getInstance().getObject(I);
J?K.init.apply(K,J):K.init();
if(H){K.setType(H);
}return K;
},dispatchEvent:function(L,event){return this.getManager(L).dispatchEvent(L,event);
},fireEvent:function(M,N,O,P){if(qx.core.Environment.get(k)){if(arguments.length>2&&O===undefined&&P!==undefined){throw new Error("Create event of type "+N+" with undefined class. Please use null to explicit fallback to default event type!");
}var Q=e+N+f+(M?M.classname:d)+h;
qx.core.Assert.assertNotUndefined(M,Q+j);
qx.core.Assert.assertNotNull(M,Q+j);
}var R=this.createEvent(N,O||null,P);
return this.getManager(M).dispatchEvent(M,R);
},fireNonBubblingEvent:function(S,T,U,V){if(qx.core.Environment.get(k)){if(arguments.length>2&&U===undefined&&V!==undefined){throw new Error("Create event of type "+T+" with undefined class. Please use null to explicit fallback to default event type!");
}}var W=this.getManager(S);

if(!W.hasListener(S,T,false)){return true;
}var X=this.createEvent(T,U||null,V);
return W.dispatchEvent(S,X);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cC:[],addHandler:function(Y){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(Y,qx.event.IEventHandler,g);
}this.__cC.push(Y);
this.__cC.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__cC;
},__cD:[],addDispatcher:function(ba,bb){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(ba,qx.event.IEventDispatcher,i);
}this.__cD.push(ba);
this.__cD.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__cD;
}}});
})();
(function(){var a="qx.core.MEvents";
qx.Mixin.define(a,{members:{__cK:qx.event.Registration,addListener:function(b,c,self,d){if(!this.$$disposed){return this.__cK.addListener(this,b,c,self,d);
}return null;
},addListenerOnce:function(f,g,self,h){var i=function(e){this.removeListener(f,i,this,h);
g.call(self||this,e);
};
return this.addListener(f,i,this,h);
},removeListener:function(j,k,self,l){if(!this.$$disposed){return this.__cK.removeListener(this,j,k,self,l);
}return false;
},removeListenerById:function(m){if(!this.$$disposed){return this.__cK.removeListenerById(this,m);
}return false;
},hasListener:function(n,o){return this.__cK.hasListener(this,n,o);
},dispatchEvent:function(p){if(!this.$$disposed){return this.__cK.dispatchEvent(this,p);
}return true;
},fireEvent:function(q,r,s){if(!this.$$disposed){return this.__cK.fireEvent(this,q,r,s);
}return true;
},fireNonBubblingEvent:function(t,u,v){if(!this.$$disposed){return this.__cK.fireNonBubblingEvent(this,t,u,v);
}return true;
},fireDataEvent:function(w,x,y,z){if(!this.$$disposed){if(y===undefined){y=null;
}return this.__cK.fireNonBubblingEvent(this,w,qx.event.type.Data,[x,y,!!z]);
}return true;
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var e="qx.debug",d="set",c="reset",b="get",a="qx.core.MProperty";
qx.Mixin.define(a,{members:{set:function(f,g){var i=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(f)){if(!this[i[f]]){if(this[d+qx.Bootstrap.firstUp(f)]!=undefined){this[d+qx.Bootstrap.firstUp(f)](g);
return this;
}
if(qx.core.Environment.get(e)){qx.Bootstrap.error(new Error("No such property: "+f));
return this;
}}return this[i[f]](g);
}else{for(var h in f){if(!this[i[h]]){if(this[d+qx.Bootstrap.firstUp(h)]!=undefined){this[d+qx.Bootstrap.firstUp(h)](f[h]);
continue;
}
if(qx.core.Environment.get(e)){qx.Bootstrap.error(new Error("No such property: "+h));
return this;
}}this[i[h]](f[h]);
}return this;
}},get:function(j){var k=qx.core.Property.$$method.get;

if(!this[k[j]]){if(this[b+qx.Bootstrap.firstUp(j)]!=undefined){return this[b+qx.Bootstrap.firstUp(j)]();
}
if(qx.core.Environment.get(e)){qx.Bootstrap.error(new Error("No such property: "+j));
return this;
}}return this[k[j]]();
},reset:function(l){var m=qx.core.Property.$$method.reset;

if(!this[m[l]]){if(this[c+qx.Bootstrap.firstUp(l)]!=undefined){this[c+qx.Bootstrap.firstUp(l)]();
return;
}
if(qx.core.Environment.get(e)){qx.Bootstrap.error(new Error("No such property: "+l));
return;
}}this[m[l]]();
}}});
})();
(function(){var a="qx.core.MAssert";
qx.Mixin.define(a,{members:{assert:function(b,c){qx.core.Assert.assert(b,c);
},fail:function(d,e){qx.core.Assert.fail(d,e);
},assertTrue:function(f,g){qx.core.Assert.assertTrue(f,g);
},assertFalse:function(h,i){qx.core.Assert.assertFalse(h,i);
},assertEquals:function(j,k,l){qx.core.Assert.assertEquals(j,k,l);
},assertNotEquals:function(m,n,o){qx.core.Assert.assertNotEquals(m,n,o);
},assertIdentical:function(p,q,r){qx.core.Assert.assertIdentical(p,q,r);
},assertNotIdentical:function(s,t,u){qx.core.Assert.assertNotIdentical(s,t,u);
},assertNotUndefined:function(v,w){qx.core.Assert.assertNotUndefined(v,w);
},assertUndefined:function(x,y){qx.core.Assert.assertUndefined(x,y);
},assertNotNull:function(z,A){qx.core.Assert.assertNotNull(z,A);
},assertNull:function(B,C){qx.core.Assert.assertNull(B,C);
},assertJsonEquals:function(D,E,F){qx.core.Assert.assertJsonEquals(D,E,F);
},assertMatch:function(G,H,I){qx.core.Assert.assertMatch(G,H,I);
},assertArgumentsCount:function(J,K,L,M){qx.core.Assert.assertArgumentsCount(J,K,L,M);
},assertEventFired:function(N,event,O,P,Q){qx.core.Assert.assertEventFired(N,event,O,P,Q);
},assertEventNotFired:function(R,event,S,T){qx.core.Assert.assertEventNotFired(R,event,S,T);
},assertException:function(U,V,W,X){qx.core.Assert.assertException(U,V,W,X);
},assertInArray:function(Y,ba,bb){qx.core.Assert.assertInArray(Y,ba,bb);
},assertArrayEquals:function(bc,bd,be){qx.core.Assert.assertArrayEquals(bc,bd,be);
},assertKeyInMap:function(bf,bg,bh){qx.core.Assert.assertKeyInMap(bf,bg,bh);
},assertFunction:function(bi,bj){qx.core.Assert.assertFunction(bi,bj);
},assertString:function(bk,bl){qx.core.Assert.assertString(bk,bl);
},assertBoolean:function(bm,bn){qx.core.Assert.assertBoolean(bm,bn);
},assertNumber:function(bo,bp){qx.core.Assert.assertNumber(bo,bp);
},assertPositiveNumber:function(bq,br){qx.core.Assert.assertPositiveNumber(bq,br);
},assertInteger:function(bs,bt){qx.core.Assert.assertInteger(bs,bt);
},assertPositiveInteger:function(bu,bv){qx.core.Assert.assertPositiveInteger(bu,bv);
},assertInRange:function(bw,bx,by,bz){qx.core.Assert.assertInRange(bw,bx,by,bz);
},assertObject:function(bA,bB){qx.core.Assert.assertObject(bA,bB);
},assertArray:function(bC,bD){qx.core.Assert.assertArray(bC,bD);
},assertMap:function(bE,bF){qx.core.Assert.assertMap(bE,bF);
},assertRegExp:function(bG,bH){qx.core.Assert.assertRegExp(bG,bH);
},assertType:function(bI,bJ,bK){qx.core.Assert.assertType(bI,bJ,bK);
},assertInstance:function(bL,bM,bN){qx.core.Assert.assertInstance(bL,bM,bN);
},assertInterface:function(bO,bP,bQ){qx.core.Assert.assertInterface(bO,bP,bQ);
},assertCssColor:function(bR,bS,bT){qx.core.Assert.assertCssColor(bR,bS,bT);
},assertElement:function(bU,bV){qx.core.Assert.assertElement(bU,bV);
},assertQxObject:function(bW,bX){qx.core.Assert.assertQxObject(bW,bX);
},assertQxWidget:function(bY,ca){qx.core.Assert.assertQxWidget(bY,ca);
}}});
})();
(function(){var n="qx.disposerDebugLevel",m="qx.debug",k="rv:1.8.1",j="module.property",h="MSIE 6.0",g="module.events",f="qx.core.Object",e="[",d="$$user_",c="]",a="object",b="Object";
qx.Class.define(f,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvents,"module.property":qx.core.MProperty,"qx.debug":qx.core.MAssert}),construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:b},members:{__L:qx.core.Environment.get("module.property")?qx.core.Property:null,toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+e+this.$$hash+c;
},base:function(o,p){if(qx.core.Environment.get(m)){if(!qx.Bootstrap.isFunction(o.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+o.callee.displayName);
}}
if(arguments.length===1){return o.callee.base.call(this);
}else{return o.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(q){return q.callee.self;
},clone:function(){if(!qx.core.Environment.get(j)){throw new Error("Cloning only possible with properties.");
}var s=this.constructor;
var r=new s;
var u=qx.Class.getProperties(s);
var t=this.__L.$$store.user;
var v=this.__L.$$method.set;
var name;
for(var i=0,l=u.length;i<l;i++){name=u[i];

if(this.hasOwnProperty(t[name])){r[v[name]](this[t[name]]);
}}return r;
},__cL:null,setUserData:function(w,x){if(!this.__cL){this.__cL={};
}this.__cL[w]=x;
},getUserData:function(y){if(!this.__cL){return null;
}var z=this.__cL[y];
return z===undefined?null:z;
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Environment.get(m)){if(qx.core.Environment.get(n)>2){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var C=this.constructor;
var A;

while(C.superclass){if(C.$$destructor){C.$$destructor.call(this);
}if(C.$$includes){A=C.$$flatIncludes;

for(var i=0,l=A.length;i<l;i++){if(A[i].$$destructor){A[i].$$destructor.call(this);
}}}C=C.superclass;
}if(this.__cM){this.__cM();
}if(qx.core.Environment.get(m)){if(qx.core.Environment.get(n)>0){var D,B;

for(D in this){B=this[D];
if(B!==null&&typeof B===a&&!(qx.Bootstrap.isString(B))){if(this.constructor.prototype[D]!=null){continue;
}var F=navigator.userAgent.indexOf(k)!=-1;
var E=navigator.userAgent.indexOf(h)!=-1;
if(F||E){if(B instanceof qx.core.Object||qx.core.Environment.get(n)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+D+"' in "+this.classname+"["+this.toHashCode()+"]: "+B);
delete this[D];
}}else{if(qx.core.Environment.get(n)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+D+"' in "+this.classname+"["+this.toHashCode()+"]: "+B);
delete this[D];
}}}}}}},__cM:null,__cN:function(){var G=qx.Class.getProperties(this.constructor);

for(var i=0,l=G.length;i<l;i++){delete this[d+G[i]];
}},_disposeObjects:function(H){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(I){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(J){qx.util.DisposeUtil.disposeArray(this,J);
},_disposeMap:function(K){qx.util.DisposeUtil.disposeMap(this,K);
}},environment:{"qx.disposerDebugLevel":0},defer:function(L,M){var O=navigator.userAgent.indexOf(h)!=-1;
var N=navigator.userAgent.indexOf(k)!=-1;
if(O||N){M.__cM=M.__cN;
}},destruct:function(){if(qx.core.Environment.get(g)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}}qx.core.ObjectRegistry.unregister(this);
this.__cL=null;
if(qx.core.Environment.get(j)){var R=this.constructor;
var V;
var W=this.__L.$$store;
var T=W.user;
var U=W.theme;
var P=W.inherit;
var S=W.useinit;
var Q=W.init;

while(R){V=R.$$properties;

if(V){for(var name in V){if(V[name].dereference){this[T[name]]=this[U[name]]=this[P[name]]=this[S[name]]=this[Q[name]]=undefined;
}}}R=R.superclass;
}}}});
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
(function(){var f="qx.debug",e="Cannot stop propagation on a non bubbling event: ",d="Invalid argument value 'cancelable'.",c="Cannot prevent default action on a non cancelable event: ",b="Invalid argument value 'canBubble'.",a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(g,h){if(qx.core.Environment.get(f)){if(g!==undefined){qx.core.Assert.assertBoolean(g,b);
}
if(h!==undefined){qx.core.Assert.assertBoolean(h,d);
}}this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!g;
this._cancelable=!!h;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(i){if(i){var j=i;
}else{var j=qx.event.Pool.getInstance().getObject(this.constructor);
}j._type=this._type;
j._target=this._target;
j._currentTarget=this._currentTarget;
j._relatedTarget=this._relatedTarget;
j._originalTarget=this._originalTarget;
j._stopPropagation=this._stopPropagation;
j._bubbles=this._bubbles;
j._preventDefault=this._preventDefault;
j._cancelable=this._cancelable;
return j;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){if(qx.core.Environment.get(f)){this.assertTrue(this._bubbles,e+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Environment.get(f)){this.assertTrue(this._cancelable,c+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(k){this._type=k;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(l){this._eventPhase=l;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(m){this._target=m;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(n){this._currentTarget=n;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(o){this._relatedTarget=o;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(p){this._originalTarget=p;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(q){this._bubbles=q;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(r){this._cancelable=r;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__cO={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__cO:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__cO[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__cO){return;
}var h=g.classname;
var j=this.__cO[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__cO[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__cO;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cO;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var b="qx.debug",a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(c){this._manager=c;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(d,event,e){return !event.getBubbles();
},dispatchEvent:function(f,event,g){if(qx.core.Environment.get(b)){if(f instanceof qx.core.Object){var k=qx.Class.getEventType(f.constructor,g);
var h=qx.Class.getByName(k);

if(!h){this.error("The event type '"+g+"' declared in the class '"+f.constructor+" is not an available class': "+k);
}else if(!(event instanceof h)){this.error("Expected event type to be instanceof '"+k+"' but found '"+event.classname+"'");
}}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
var m=this._manager.getListeners(f,g,false);

if(m){for(var i=0,l=m.length;i<l;i++){var j=m[i].context||f;

if(qx.core.Environment.get(b)){if(j&&j.isDisposed&&j.isDisposed()){this.warn("The context object '"+j+"' for the event '"+g+"' of '"+f+"'is already disposed.");
}}m[i].handler.call(j,event);
}}}},defer:function(n){qx.event.Registration.addDispatcher(n);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cP:null,__cQ:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__cP=b;
this.__cQ=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__cP=this.__cP;
f.__cQ=this.__cQ;
return f;
},getData:function(){return this.__cP;
},getOldData:function(){return this.__cQ;
}},destruct:function(){this.__cP=this.__cQ=null;
}});
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
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="qx.application",b="os.name",a="engine.version";
qx.Class.define(f,{statics:{getApplication:function(){return this.__gM||null;
},ready:function(){if(this.__gM){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Environment.get(c);
var j=qx.Class.getByName(i);

if(j){this.__gM=new j;
var h=new Date;
this.__gM.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__gM.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__gN:function(e){var k=this.__gM;

if(k){k.close();
}},__gO:function(){var l=this.__gM;

if(l){l.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",bf="10.0",be="10.4",bd="rim_tabletos",bc="Darwin",bb="os.version",ba="2003",Y=")",X="iPhone",W="android",V="unix",q="ce",r="7",o="SymbianOS",p="os.name",m="|",n="MacPPC",k="iPod",l="\.",u="Win64",v="linux",D="me",B="Macintosh",L="Android",G="Windows",R="ios",P="vista",x="8",U="blackberry",T="(",S="win",w="Linux",z="BSD",A="Mac OS X",C="iPad",E="X11",H="xp",M="symbian",Q="qx.bom.client.OperatingSystem",s="g",t="Win32",y="osx",K="webOS",J="RIM Tablet OS",I="BlackBerry",O="nt4",N="MacIntel",F="webos";
qx.Bootstrap.define(Q,{statics:{getName:function(){if(!navigator){return j;
}var bg=navigator.platform||j;
var bh=navigator.userAgent||j;

if(bg.indexOf(G)!=-1||bg.indexOf(t)!=-1||bg.indexOf(u)!=-1){return S;
}else if(bg.indexOf(B)!=-1||bg.indexOf(n)!=-1||bg.indexOf(N)!=-1||bg.indexOf(A)!=-1){return y;
}else if(bh.indexOf(J)!=-1){return bd;
}else if(bh.indexOf(K)!=-1){return F;
}else if(bg.indexOf(k)!=-1||bg.indexOf(X)!=-1||bg.indexOf(C)!=-1){return R;
}else if(bh.indexOf(L)!=-1){return W;
}else if(bg.indexOf(w)!=-1){return v;
}else if(bg.indexOf(E)!=-1||bg.indexOf(z)!=-1||bg.indexOf(bc)!=-1){return V;
}else if(bg.indexOf(o)!=-1){return M;
}else if(bg.indexOf(I)!=-1){return U;
}return j;
},__dd:{"Windows NT 6.2":x,"Windows NT 6.1":r,"Windows NT 6.0":P,"Windows NT 5.2":ba,"Windows NT 5.1":H,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":O,"Win 9x 4.90":D,"Windows CE":q,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":be,"Mac OS X 10.4":be,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":bf,"Mac OS X 10.0":bf},getVersion:function(){var bk=[];

for(var bj in qx.bom.client.OperatingSystem.__dd){bk.push(bj);
}var bl=new RegExp(T+bk.join(m).replace(/\./g,l)+Y,s);
var bi=bl.exec(navigator.userAgent);

if(bi&&bi[1]){return qx.bom.client.OperatingSystem.__dd[bi[1]];
}return j;
}},defer:function(bm){qx.core.Environment.add(p,bm.getName);
qx.core.Environment.add(bb,bm.getVersion);
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
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__gP=false;
this.__gQ=false;
this.__gR=false;
this.__gS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__gT();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__gR:null,__gP:null,__gQ:null,__gS:null,__gT:function(){if(!this.__gR&&this.__gP&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__gR=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__gR=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__gR;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__gP=true;
this.__gT();
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
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gP=true;
this.__gT();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gS){this.__gS=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";
qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__gN:function(e){var f=this.getApplication();

if(f){e.setReturnValue(f.close());
}},__gO:function(){var g=this.getApplication();

if(g){g.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);
qx.event.Registration.addListener(window,c,h.__gO,h);
qx.event.Registration.addListener(window,b,h.__gN,h);
}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__dG:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__dG;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__dG=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__dG=null;
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
}else if(this.isRgbString(m)){return this.__ie();
}else if(this.isHex3String(m)){return this.__ig();
}else if(this.isHex6String(m)){return this.__ih();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__ie();
}else if(this.isRgbaString(n)){return this.__if();
}else if(this.isHex3String(n)){return this.__ig();
}else if(this.isHex6String(n)){return this.__ih();
}throw new Error("Could not parse color: "+n);
},stringToRgbString:function(o){return this.rgbToRgbString(this.stringToRgb(o));
},rgbToRgbString:function(s){return e+s[0]+h+s[1]+h+s[2]+d;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return (this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v)||this.isRgbaString(v));
},isCssString:function(w){return (this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w)||this.isRgbaString(w));
},isHex3String:function(x){return this.REGEXP.hex3.test(x);
},isHex6String:function(y){return this.REGEXP.hex6.test(y);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(A){return this.REGEXP.rgba.test(A);
},__ie:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__if:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__ig:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__ih:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__ig(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__ih(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__ig(P);
}
if(this.isHex6String(P)){return this.__ih(P);
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
(function(){var m="object",l="_applyTheme",k="",j="_",h="__cX",g="qx.ui.decoration.",f="qx.theme.manager.Decoration",e=".",d="Theme",c="changeTheme",a="string",b="singleton";
qx.Class.define(f,{type:b,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:l,event:c}},members:{__cX:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var s=this.getTheme();

if(!s){return null;
}var p=this.__cX;

if(!p){p=this.__cX={};
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
},isCached:function(A){return !this.__cX?false:qx.lang.Object.contains(this.__cX,A);
},_applyTheme:function(B,C){var E=qx.util.AliasManager.getInstance();

if(C){for(var D in C.aliases){E.remove(D);
}}
if(B){for(var D in B.aliases){E.add(D,B.aliases[D]);
}}
if(!B){this.__cX={};
}}},destruct:function(){this._disposeMap(h);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="qx.debug",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,d,a],mode:b}},members:{__cY:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__cY=null;
},getInsets:function(){if(this.__cY){return this.__cY;
}var k=this._getDefaultInsets();
return this.__cY={left:this.getInsetLeft()==null?k.left:this.getInsetLeft(),right:this.getInsetRight()==null?k.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?k.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?k.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Environment.get(e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__cY=null;
}},destruct:function(){this.__cY=null;
}});
})();
(function(){var o="px",n="top",m="_tint",l="abstract",k='<div style="',j="",h="_getDefaultInsetsFor",g="bottom",f="qx.ui.decoration.DynamicDecorator",e="left",b="right",d="_resize",c="_style",a='"></div>';
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,type:l,members:{getStyles:function(){var r={};
var q=this._getStyles();

for(var p in q){r[qx.lang.String.camelCase(p)]=q[p];
}return r;
},_getStyles:function(){var s={};

for(var name in this){if(name.indexOf(c)==0&&this[name] instanceof Function){this[name](s);
}}return s;
},getMarkup:function(){if(this._markup){return this._markup;
}var t=this._getStyles();
if(!this._generateMarkup){var u=[k];
u.push(qx.bom.element.Style.compile(t));
u.push(a);
u=u.join(j);
}else{var u=this._generateMarkup(t);
}return this._markup=u;
},resize:function(v,w,x){var z={};

for(var name in this){if(name.indexOf(d)==0&&this[name] instanceof Function){var y=this[name](v,w,x);

if(z.left==undefined){z.left=y.left;
z.top=y.top;
}
if(z.width==undefined){z.width=y.width;
z.height=y.height;
}
if(y.elementToApplyDimensions){z.elementToApplyDimensions=y.elementToApplyDimensions;
}z.left=y.left<z.left?y.left:z.left;
z.top=y.top<z.top?y.top:z.top;
z.width=y.width>z.width?y.width:z.width;
z.height=y.height>z.height?y.height:z.height;
}}if(z.left!=undefined){v.style.left=z.left+o;
v.style.top=z.top+o;
}if(z.width!=undefined){if(z.width<0){z.width=0;
}
if(z.height<0){z.height=0;
}
if(z.elementToApplyDimensions){v=z.elementToApplyDimensions;
}v.style.width=z.width+o;
v.style.height=z.height+o;
}},tint:function(A,B){for(var name in this){if(name.indexOf(m)==0&&this[name] instanceof Function){this[name](A,B,A.style);
}}},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){var F=[n,b,g,e];
var D={};

for(var name in this){if(name.indexOf(h)==0&&this[name] instanceof Function){var E=this[name]();

for(var i=0;i<F.length;i++){var C=F[i];
if(D[C]==undefined){D[C]=E[C];
}if(E[C]<D[C]){D[C]=E[C];
}}}}if(D[n]!=undefined){return D;
}return {top:0,right:0,bottom:0,left:0};
}}});
})();
(function(){var d="-",c="qx.bom.Style",b="string",a="";
qx.Bootstrap.define(c,{statics:{VENDOR_PREFIXES:["Webkit","Moz","O","ms","Khtml"],getPropertyName:function(e){var f=document.documentElement.style;

if(f[e]!==undefined){return e;
}
for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++){var g=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(e);

if(f[g]!==undefined){return g;
}}return null;
},getAppliedStyle:function(h,j,k,m){var n=(m!==false)?[null].concat(this.VENDOR_PREFIXES):[null];

for(var i=0,l=n.length;i<l;i++){var o=n[i]?d+n[i].toLowerCase()+d+k:k;
try{h.style[j]=o;

if(typeof h.style[j]==b&&h.style[j]!==a){return o;
}}catch(p){}}return null;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__bd:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__bd[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__bd[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var o="qx.debug",n="Invalid argument 'map'",m="+",k="Invalid argument 'source'",j="Invalid argument 'target'",h="=",g="&",f="function",e="Invalid argument 'array'",d="Invalid argument 'minLength'",a="qx.lang.Object",c="undefined",b="object";
qx.Class.define(a,{statics:{empty:function(p){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(p,n);
}
for(var q in p){if(p.hasOwnProperty(q)){delete p[q];
}}},isEmpty:function(r){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(r,n);
}
for(var s in r){return false;
}return true;
},hasMinLength:function(t,u){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(t,n);
qx.core.Assert&&qx.core.Assert.assertInteger(u,d);
}
if(u<=0){return true;
}var length=0;

for(var v in t){if((++length)>=u){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(w){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(w,n);
}var y=[];
var x=this.getKeys(w);

for(var i=0,l=x.length;i<l;i++){y.push(w[x[i]]);
}return y;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(z,A){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(z,j);
qx.core.Assert&&qx.core.Assert.assertMap(A,k);
}return qx.lang.Object.mergeWith(z,A,false);
},merge:function(B,C){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(B,j);
}var D=arguments.length;

for(var i=1;i<D;i++){qx.lang.Object.mergeWith(B,arguments[i]);
}return B;
},clone:function(E){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(E,k);
}var F={};

for(var G in E){F[G]=E[G];
}return F;
},invert:function(H){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(H,n);
}var I={};

for(var J in H){I[H[J].toString()]=J;
}return I;
},getKeyFromValue:function(K,L){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(K,n);
}
for(var M in K){if(K.hasOwnProperty(M)&&K[M]===L){return M;
}}return null;
},contains:function(N,O){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(N,n);
}return this.getKeyFromValue(N,O)!==null;
},select:function(P,Q){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(Q,n);
}return Q[P];
},fromArray:function(R){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertArray(R,e);
}var S={};

for(var i=0,l=R.length;i<l;i++){if(qx.core.Environment.get(o)){switch(typeof R[i]){case b:case f:case c:throw new Error("Could not convert complex objects like "+R[i]+" at array index "+i+" to map syntax");
}}S[R[i].toString()]=true;
}return S;
},toUriParameter:function(T,U){var X,V=[];

for(X in T){if(T.hasOwnProperty(X)){var W=T[X];

if(W instanceof Array){for(var i=0;i<W.length;i++){this.__da(X,W[i],V,U);
}}else{this.__da(X,W,V,U);
}}}return V.join(g);
},__da:function(Y,ba,bb,bc){var bd=window.encodeURIComponent;

if(bc){bb.push(bd(Y).replace(/%20/g,m)+h+bd(ba).replace(/%20/g,m));
}else{bb.push(bd(Y)+h+bd(ba));
}}}});
})();
(function(){var k="div",j="string",h="-moz-none",g="backgroundImage",f="inline-block",e="-moz-inline-box",d="color",c="span",b="css.float",a="css.borderimage.standardsyntax",bg="borderRadius",bf="boxSizing",be='m11',bd="content",bc="css.inlineblock",bb="css.appearance",ba="css.gradient.radial",Y="input",X="borderImage",W="userSelect",s="css.overflowxy",t="styleFloat",q="css.usermodify",r="css.boxsizing",o='url("foo.png") 4 4 4 4 fill stretch',p="css.boxmodel",m="qx.bom.client.Css",n="appearance",w="placeholder",x="css.boxshadow",F="css.gradient.legacywebkit",D="css.borderradius",M="linear-gradient(0deg, #fff, #000)",H="css.opacity",S="css.borderimage",Q="rgba(1, 2, 3, 0.5)",z="radial-gradient(0px 0px, cover, red 50%, blue 100%)",V="rgba",U="css.gradients",T='url("foo.png") 4 4 4 4 stretch',y="css.gradient.linear",B="css.userselect",C="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",E="mshtml",G="css.rgba",I="4 fill",N='WebKitCSSMatrix',R="none",u="css.placeholder",v="css.userselect.none",A="css.textoverflow",L="textOverflow",K="userModify",J="boxShadow",P="cssFloat",O="border";
qx.Bootstrap.define(m,{statics:{__db:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==E||!qx.bom.client.Browser.getQuirksMode();
return content?bd:O;
},getTextOverflow:function(){return qx.bom.Style.getPropertyName(L);
},getPlaceholder:function(){var i=document.createElement(Y);
return w in i;
},getAppearance:function(){return qx.bom.Style.getPropertyName(n);
},getBorderRadius:function(){return qx.bom.Style.getPropertyName(bg);
},getBoxShadow:function(){return qx.bom.Style.getPropertyName(J);
},getBorderImage:function(){return qx.bom.Style.getPropertyName(X);
},getBorderImageSyntax:function(){var bj=qx.bom.client.Css.getBorderImage();

if(!bj){return null;
}var bi=[{standard:true,syntax:o,regEx:/foo\.png.*?4.*?fill.*?stretch/},{standard:false,syntax:T,regEx:/foo\.png.*?4 4 4 4 stretch/}];

for(var i=0,l=bi.length;i<l;i++){var bh=document.createElement(k);
bh.style[bj]=bi[i].syntax;

if(bi[i].regEx.exec(bh.style[bj])||bh.style.borderImageSlice&&bh.style.borderImageSlice==I){return bi[i].standard;
}}return null;
},getUserSelect:function(){return qx.bom.Style.getPropertyName(W);
},getUserSelectNone:function(){var bl=qx.bom.client.Css.getUserSelect();

if(bl){var bk=document.createElement(c);
bk.style[bl]=h;
return bk.style[bl]===h?h:R;
}return null;
},getUserModify:function(){return qx.bom.Style.getPropertyName(K);
},getFloat:function(){var bm=document.documentElement.style;
return bm.cssFloat!==undefined?P:bm.styleFloat!==undefined?t:null;
},getTranslate3d:function(){return N in window&&be in new WebKitCSSMatrix();
},getGradients:function(){return !!(qx.bom.client.Css.getLinearGradient());
},getLinearGradient:function(){qx.bom.client.Css.__db=false;
var bq=M;
var bn=document.createElement(k);
var bo=qx.bom.Style.getAppliedStyle(bn,g,bq);

if(!bo){bq=C;
var bo=qx.bom.Style.getAppliedStyle(bn,g,bq,false);

if(bo){qx.bom.client.Css.__db=true;
}}if(!bo){return null;
}var bp=/(.*?)\(/.exec(bo);
return bp?bp[1]:null;
},getRadialGradient:function(){var bu=z;
var br=document.createElement(k);
var bs=qx.bom.Style.getAppliedStyle(br,g,bu);

if(!bs){return null;
}var bt=/(.*?)\(/.exec(bs);
return bt?bt[1]:null;
},getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__db===null){qx.bom.client.Css.getLinearGradient();
}return qx.bom.client.Css.__db;
},getRgba:function(){var bv;

try{bv=document.createElement(k);
}catch(bw){bv=document.createElement();
}try{bv.style[d]=Q;

if(bv.style[d].indexOf(V)!=-1){return true;
}}catch(bx){}return false;
},getBoxSizing:function(){return qx.bom.Style.getPropertyName(bf);
},getInlineBlock:function(){var by=document.createElement(c);
by.style.display=f;

if(by.style.display==f){return f;
}by.style.display=e;

if(by.style.display!==e){return e;
}return null;
},getOpacity:function(){return (typeof document.documentElement.style.opacity==j);
},getOverflowXY:function(){return (typeof document.documentElement.style.overflowX==j)&&(typeof document.documentElement.style.overflowY==j);
}},defer:function(bz){qx.core.Environment.add(A,bz.getTextOverflow);
qx.core.Environment.add(u,bz.getPlaceholder);
qx.core.Environment.add(D,bz.getBorderRadius);
qx.core.Environment.add(x,bz.getBoxShadow);
qx.core.Environment.add(U,bz.getGradients);
qx.core.Environment.add(y,bz.getLinearGradient);
qx.core.Environment.add(ba,bz.getRadialGradient);
qx.core.Environment.add(F,bz.getLegacyWebkitGradient);
qx.core.Environment.add(p,bz.getBoxModel);
qx.core.Environment.add(G,bz.getRgba);
qx.core.Environment.add(S,bz.getBorderImage);
qx.core.Environment.add(a,bz.getBorderImageSyntax);
qx.core.Environment.add(q,bz.getUserModify);
qx.core.Environment.add(B,bz.getUserSelect);
qx.core.Environment.add(v,bz.getUserSelectNone);
qx.core.Environment.add(bb,bz.getAppearance);
qx.core.Environment.add(b,bz.getFloat);
qx.core.Environment.add(r,bz.getBoxSizing);
qx.core.Environment.add(bc,bz.getInlineBlock);
qx.core.Environment.add(H,bz.getOpacity);
qx.core.Environment.add(s,bz.getOverflowXY);
}});
})();
(function(){var j="",i="mshtml",h="msie",g="maple",f=")(/| )([0-9]+\.[0-9])",e="(",d="ce",c="CSS1Compat",b="android",a="operamini",H="gecko",G="browser.quirksmode",F="browser.name",E="mobile chrome",D="iemobile",C="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",B="opera mobi",A="Mobile Safari",z="Maple",y="operamobile",q="ie",r="mobile safari",o="IEMobile|Maxthon|MSIE",p="qx.bom.client.Browser",m="(Maple )([0-9]+\.[0-9]+\.[0-9]*)",n="opera mini",k="browser.version",l="opera",s="Opera Mini|Opera Mobi|Opera",t="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",v="webkit",u="browser.documentmode",x="5.0",w="Mobile/";
qx.Bootstrap.define(p,{statics:{getName:function(){var L=navigator.userAgent;
var K=new RegExp(e+qx.bom.client.Browser.__dc+f);
var J=L.match(K);

if(!J){return j;
}var name=J[1].toLowerCase();
var I=qx.bom.client.Engine.getName();

if(I===v){if(name===b){name=E;
}else if(L.indexOf(A)!==-1||L.indexOf(w)!==-1){name=r;
}}else if(I===i){if(name===h){name=q;
if(qx.bom.client.OperatingSystem.getVersion()===d){name=D;
}}}else if(I===l){if(name===B){name=y;
}else if(name===n){name=a;
}}else if(I===H){if(L.indexOf(z)!==-1){name=g;
}}return name;
},getVersion:function(){var P=navigator.userAgent;
var O=new RegExp(e+qx.bom.client.Browser.__dc+f);
var N=P.match(O);

if(!N){return j;
}var name=N[1].toLowerCase();
var M=N[3];
if(P.match(/Version(\/| )([0-9]+\.[0-9])/)){M=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==i){M=qx.bom.client.Engine.getVersion();

if(name===h&&qx.bom.client.OperatingSystem.getVersion()==d){M=x;
}}
if(qx.bom.client.Browser.getName()==g){O=new RegExp(m);
N=P.match(O);

if(!N){return j;
}M=N[2];
}return M;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==i&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==c;
}},__dc:{"webkit":t,"gecko":C,"mshtml":o,"opera":s}[qx.bom.client.Engine.getName()]},defer:function(Q){qx.core.Environment.add(F,Q.getName),qx.core.Environment.add(k,Q.getVersion),qx.core.Environment.add(u,Q.getDocumentMode),qx.core.Environment.add(G,Q.getQuirksMode);
}});
})();
(function(){var l="",k="engine.name",j=";",i="opacity:",h="opacity",g="filter",f="MozOpacity",e=");",d=")",c="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",b="alpha(opacity=";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select(k,{"mshtml":function(m){if(m>=1){m=1;
}
if(m<0.00001){m=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return i+m+j;
}else{return c+(m*100)+e;
}},"gecko":function(n){if(n>=1){n=0.999999;
}return i+n+j;
},"default":function(o){if(o>=1){return l;
}return i+o+j;
}}),set:qx.core.Environment.select(k,{"mshtml":function(p,q){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(q>=1){q=l;
}p.style.opacity=q;
}else{var r=qx.bom.element.Style.get(p,g,qx.bom.element.Style.COMPUTED_MODE,false);

if(q>=1){q=1;
}
if(q<0.00001){q=0;
}if(!p.currentStyle||!p.currentStyle.hasLayout){p.style.zoom=1;
}p.style.filter=r.replace(/alpha\([^\)]*\)/gi,l)+b+q*100+d;
}},"gecko":function(s,t){if(t>=1){t=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){s.style.MozOpacity=t;
}else{s.style.opacity=t;
}},"default":function(u,v){if(v>=1){v=l;
}u.style.opacity=v;
}}),reset:qx.core.Environment.select(k,{"mshtml":function(w){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){w.style.opacity=l;
}else{var x=qx.bom.element.Style.get(w,g,qx.bom.element.Style.COMPUTED_MODE,false);
w.style.filter=x.replace(/alpha\([^\)]*\)/gi,l);
}},"gecko":function(y){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){y.style.MozOpacity=l;
}else{y.style.opacity=l;
}},"default":function(z){z.style.opacity=l;
}}),get:qx.core.Environment.select(k,{"mshtml":function(A,B){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var C=qx.bom.element.Style.get(A,h,B,false);

if(C!=null){return parseFloat(C);
}return 1.0;
}else{var D=qx.bom.element.Style.get(A,g,B,false);

if(D){var C=D.match(/alpha\(opacity=(.*)\)/);

if(C&&C[1]){return parseFloat(C[1])/100;
}}return 1.0;
}},"gecko":function(E,F){var G=qx.bom.element.Style.get(E,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?f:h,F,false);

if(G==0.999999){G=1.0;
}
if(G!=null){return parseFloat(G);
}return 1.0;
},"default":function(H,I){var J=qx.bom.element.Style.get(H,h,I,false);

if(J!=null){return parseFloat(J);
}return 1.0;
}})},defer:function(K){K.SUPPORT_CSS3_OPACITY=qx.core.Environment.get("css.opacity");
}});
})();
(function(){var k="css.overflowxy",j="hidden",i="-moz-scrollbars-none",h="",g="engine.name",f="gecko",e="overflow",d="overflowY",b="engine.version",a="none",B="scroll",A="borderLeftStyle",z="borderRightStyle",y="div",x="borderRightWidth",w="overflow-y",v="borderLeftWidth",u="-moz-scrollbars-vertical",r=":",q="100px",o="overflow:",p="qx.bom.element.Overflow",m="overflow-x",n="overflowX",l=";";
qx.Class.define(p,{statics:{DEFAULT_SCROLLBAR_WIDTH:14,__de:null,getScrollbarWidth:function(){if(this.__de!==null){return this.__de;
}var C=qx.bom.element.Style;
var E=function(I,J){return parseInt(C.get(I,J),10)||0;
};
var F=function(K){return (C.get(K,z)==a?0:E(K,x));
};
var D=function(L){return (C.get(L,A)==a?0:E(L,v));
};
var H=qx.core.Environment.select(g,{"mshtml":function(M){if(C.get(M,d)==j||M.clientWidth==0){return F(M);
}return Math.max(0,M.offsetWidth-M.clientLeft-M.clientWidth);
},"default":function(N){if(N.clientWidth==0){var O=C.get(N,e);
var P=(O==B||O==u?16:0);
return Math.max(0,F(N)+P);
}return Math.max(0,(N.offsetWidth-N.clientWidth-D(N)));
}});
var G=function(Q){return H(Q)-F(Q);
};
var t=document.createElement(y);
var s=t.style;
s.height=s.width=q;
s.overflow=B;
document.body.appendChild(t);
var c=G(t);
this.__de=c;
document.body.removeChild(t);
return this.__de;
},_compile:function(R,S){if(!qx.core.Environment.get(k)){R=o;

if(qx.core.Environment.get(g)===f&&S==j){S=i;
}}return R+r+S+l;
},compileX:function(T){return this._compile(m,T);
},compileY:function(U){return this._compile(w,U);
},getX:function(V,W){if(qx.core.Environment.get(k)){return qx.bom.element.Style.get(V,n,W,false);
}var X=qx.bom.element.Style.get(V,e,W,false);

if(X===i){X=j;
}return X;
},setX:function(Y,ba){if(qx.core.Environment.get(k)){Y.style.overflowX=ba;
}else{if(ba===j&&qx.core.Environment.get(g)===f&&parseFloat(qx.core.Environment.get(b))<1.8){ba=i;
}Y.style.overflow=ba;
}},resetX:function(bb){if(qx.core.Environment.get(k)){bb.style.overflowX=h;
}else{bb.style.overflow=h;
}},getY:function(bc,bd){if(qx.core.Environment.get(k)){return qx.bom.element.Style.get(bc,d,bd,false);
}var be=qx.bom.element.Style.get(bc,e,bd,false);

if(be===i){be=j;
}return be;
},setY:function(bf,bg){if(qx.core.Environment.get(k)){bf.style.overflowY=bg;
}else{if(bg===j&&qx.core.Environment.get(g)===f&&parseFloat(qx.core.Environment.get(b))<1.8){bg=i;
}bf.style.overflow=bg;
}},resetY:function(bh){if(qx.core.Environment.get(k)){bh.style.overflowY=h;
}else{bh.style.overflow=h;
}}}});
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
(function(){var h="css.boxsizing",g="",f="border-box",e="qx.bom.element.BoxSizing",d="boxSizing",c="content-box",b=":",a=";";
qx.Class.define(e,{statics:{__df:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dg:function(i){var j=this.__df;
return j.tags[i.tagName.toLowerCase()]||j.types[i.type];
},compile:function(k){if(qx.core.Environment.get(h)){var l=qx.lang.String.hyphenate(qx.core.Environment.get(h));
return l+b+k+a;
}else{qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");
qx.log.Logger.trace();
}},get:function(m){if(qx.core.Environment.get(h)){return qx.bom.element.Style.get(m,d,null,false)||g;
}
if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(m))){if(!this.__dg(m)){return c;
}}return f;
},set:function(n,o){if(qx.core.Environment.get(h)){try{n.style[qx.core.Environment.get(h)]=o;
}catch(p){qx.log.Logger.warn(this,"This client does not support the boxSizing value",o);
}}else{qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");
}},reset:function(q){this.set(q,g);
}}});
})();
(function(){var j="",i="engine.name",h="float",g="qx.debug",f="browser.documentmode",e="mshtml",d="Invalid argument 'smart'",c="Invalid argument 'element'",b="style",a="css.float",B="px",A="css.appearance",z="pixelRight",y="css.userselect",x="css.boxsizing",w="css.textoverflow",v="pixelHeight",u=":",t="pixelTop",s="css.borderimage",q="Invalid argument 'name'",r="pixelLeft",o="css.usermodify",p="qx.bom.element.Style",m="pixelBottom",n="Invalid argument 'styles'",k="pixelWidth",l=";";
qx.Class.define(p,{statics:{__dh:function(){var D={"appearance":qx.core.Environment.get(A),"userSelect":qx.core.Environment.get(y),"textOverflow":qx.core.Environment.get(w),"borderImage":qx.core.Environment.get(s),"float":qx.core.Environment.get(a),"userModify":qx.core.Environment.get(o),"boxSizing":qx.core.Environment.get(x)};
this.__di={};

for(var C in qx.lang.Object.clone(D)){if(!D[C]){delete D[C];
}else{this.__di[C]=C==h?h:qx.lang.String.hyphenate(D[C]);
}}this.__dj=D;
},__dk:{width:k,height:v,left:r,right:z,top:t,bottom:m},__dl:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(E){var G=[];
var I=this.__dl;
var H=this.__di;
var name,F;

for(name in E){F=E[name];

if(F==null){continue;
}name=H[name]||name;
if(I[name]){G.push(I[name].compile(F));
}else{G.push(qx.lang.String.hyphenate(name),u,F,l);
}}return G.join(j);
},setCss:function(J,K){if(qx.core.Environment.get(i)===e&&parseInt(qx.core.Environment.get(f),10)<8){J.style.cssText=K;
}else{J.setAttribute(b,K);
}},getCss:function(L){if(qx.core.Environment.get(i)===e&&parseInt(qx.core.Environment.get(f),10)<8){return L.style.cssText.toLowerCase();
}else{return L.getAttribute(b);
}},isPropertySupported:function(M){return (this.__dl[M]||this.__dj[M]||M in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(N,name,O,P){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(N,c);
qx.core.Assert.assertString(name,q);

if(P!==undefined){qx.core.Assert.assertBoolean(P,d);
}}name=this.__dj[name]||name;
if(P!==false&&this.__dl[name]){return this.__dl[name].set(N,O);
}else{N.style[name]=O!==null?O:j;
}},setStyles:function(Q,R,S){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(Q,c);
qx.core.Assert.assertMap(R,n);

if(S!==undefined){qx.core.Assert.assertBoolean(S,d);
}}var V=this.__dj;
var X=this.__dl;
var T=Q.style;

for(var W in R){var U=R[W];
var name=V[W]||W;

if(U===undefined){if(S!==false&&X[name]){X[name].reset(Q);
}else{T[name]=j;
}}else{if(S!==false&&X[name]){X[name].set(Q,U);
}else{T[name]=U!==null?U:j;
}}}},reset:function(Y,name,ba){name=this.__dj[name]||name;
if(ba!==false&&this.__dl[name]){return this.__dl[name].reset(Y);
}else{Y.style[name]=j;
}},get:qx.core.Environment.select(i,{"mshtml":function(bb,name,bc,bd){name=this.__dj[name]||name;
if(bd!==false&&this.__dl[name]){return this.__dl[name].get(bb,bc);
}if(!bb.currentStyle){return bb.style[name]||j;
}switch(bc){case this.LOCAL_MODE:return bb.style[name]||j;
case this.CASCADED_MODE:return bb.currentStyle[name]||j;
default:var bh=bb.currentStyle[name]||j;
if(/^-?[\.\d]+(px)?$/i.test(bh)){return bh;
}var bg=this.__dk[name];

if(bg){var be=bb.style[name];
bb.style[name]=bh||0;
var bf=bb.style[bg]+B;
bb.style[name]=be;
return bf;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bh)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bh;
}},"default":function(bi,name,bj,bk){name=this.__dj[name]||name;
if(bk!==false&&this.__dl[name]){return this.__dl[name].get(bi,bj);
}switch(bj){case this.LOCAL_MODE:return bi.style[name]||j;
case this.CASCADED_MODE:if(bi.currentStyle){return bi.currentStyle[name]||j;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bl=qx.dom.Node.getDocument(bi);
var bm=bl.defaultView.getComputedStyle(bi,null);
return bm?bm[name]:j;
}}})},defer:function(bn){bn.__dh();
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
(function(){var d="engine.version",c="engine.name",b="undefined",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Environment.select(c,{"opera":function(e){if(parseFloat(qx.core.Environment.get(d))<9.5){return (e||window).document.body.clientWidth;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}},"webkit":function(g){if(parseFloat(qx.core.Environment.get(d))<523.15){return (g||window).innerWidth;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}},"default":function(i){var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}}),getHeight:qx.core.Environment.select(c,{"opera":function(k){if(parseFloat(qx.core.Environment.get(d))<9.5){return (k||window).document.body.clientHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"webkit":function(m){if(parseFloat(qx.core.Environment.get(d))<523.15){return (m||window).innerHeight;
}else{var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientHeight:n.body.clientHeight;
}},"default":function(o){var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}}),getScrollLeft:function(q){var q=q?q:window;

if(typeof q.pageXOffset!==b){return q.pageXOffset;
}var r=q.document;
return r.documentElement.scrollLeft||r.body.scrollLeft;
},getScrollTop:function(s){var s=s?s:window;

if(typeof s.pageYOffeset!==b){return s.pageYOffset;
}var t=s.document;
return t.documentElement.scrollTop||t.body.scrollTop;
},__dm:function(){var u=this.getWidth()>this.getHeight()?90:0;
var v=window.orientation;

if(v==null||Math.abs(v%180)==u){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__dn:null,getOrientation:function(w){var x=(w||window).orientation;

if(x==null){x=this.getWidth(w)>this.getHeight(w)?90:0;
}else{x=this.__dn[x];
}return x;
},isLandscape:function(y){return Math.abs(this.getOrientation(y))==90;
},isPortrait:function(z){return Math.abs(this.getOrientation(z))!==90;
}},defer:function(A){A.__dn=A.__dm();
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__do={};
this.add(a,h);
},members:{__do:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__do[k]){return this.__do[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__do[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__do[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__do[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__do){v[w]=this.__do[w];
}return v;
}},destruct:function(){this.__do=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Font",d="_dynamic",c="Theme",b="changeTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:c,nullable:true,apply:f,event:b}},members:{resolveDynamic:function(g){var h=this._dynamic;
return g instanceof qx.bom.Font?g:h[g];
},resolve:function(i){var l=this._dynamic;
var j=l[i];

if(j){return j;
}var k=this.getTheme();

if(k!==null&&k.fonts[i]){var m=this.__iR(k.fonts[i]);
return l[i]=(new m).set(k.fonts[i]);
}return i;
},isDynamic:function(n){var q=this._dynamic;

if(n&&(n instanceof qx.bom.Font||q[n]!==undefined)){return true;
}var p=this.getTheme();

if(p!==null&&n&&p.fonts[n]){var o=this.__iR(p.fonts[n]);
q[n]=(new o).set(p.fonts[n]);
return true;
}return false;
},__iQ:function(r,s){if(r[s].include){var t=r[r[s].include];
r[s].include=null;
delete r[s].include;
r[s]=qx.lang.Object.mergeWith(r[s],t,false);
this.__iQ(r,s);
}},_applyTheme:function(u){var v=this._getDynamic();

for(var y in v){if(v[y].themed){v[y].dispose();
delete v[y];
}}
if(u){var w=u.fonts;

for(var y in w){if(w[y].include&&w[w[y].include]){this.__iQ(w,y);
}var x=this.__iR(w[y]);
v[y]=(new x).set(w[y]);
v[y].themed=true;
}}this._setDynamic(v);
},__iR:function(z){if(z.sources){return qx.bom.webfonts.WebFont;
}return qx.bom.Font;
}},destruct:function(){this._disposeMap(d);
}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="line-through",u="overline",t="Color",s="qx.bom.Font",r="Number",q="_applyDecoration",o=" ",p="_applySize",m=",",n="_applyColor";
qx.Class.define(s,{extend:qx.core.Object,construct:function(A,B){qx.core.Object.call(this);
this.__iS={fontFamily:k,fontSize:null,fontWeight:null,fontStyle:null,textDecoration:null,lineHeight:null,color:null};

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
},__iT:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2,color:k},getDefaultStyles:function(){return this.__iT;
}},properties:{size:{check:z,nullable:true,apply:p},lineHeight:{check:r,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,v,u],nullable:true,apply:q},color:{check:t,nullable:true,apply:n}},members:{__iS:null,_applySize:function(J,K){this.__iS.fontSize=J===null?null:J+g;
},_applyLineHeight:function(L,M){this.__iS.lineHeight=L===null?null:L;
},_applyFamily:function(N,O){var P=k;

for(var i=0,l=N.length;i<l;i++){if(N[i].indexOf(o)>0){P+=f+N[i]+f;
}else{P+=N[i];
}
if(i!==l-1){P+=m;
}}this.__iS.fontFamily=P;
},_applyBold:function(Q,R){this.__iS.fontWeight=Q===null?null:Q?c:d;
},_applyItalic:function(S,T){this.__iS.fontStyle=S===null?null:S?e:d;
},_applyDecoration:function(U,V){this.__iS.textDecoration=U===null?null:U;
},_applyColor:function(W,X){this.__iS.color=null;

if(W){this.__iS.color=qx.theme.manager.Color.getInstance().resolve(W);
}},getStyles:function(){return this.__iS;
}}});
})();
(function(){var f="qx.bom.webfonts.WebFont",e="",d="qx.debug",c="changeStatus",b="_applySources",a="qx.event.type.Data";
qx.Class.define(f,{extend:qx.bom.Font,events:{"changeStatus":a},properties:{sources:{nullable:true,apply:b}},members:{__iU:null,_applySources:function(g,h){var m=[];

for(var i=0,l=g.length;i<l;i++){var k=this._quoteFontFamily(g[i].family);
m.push(k);
var j=g[i].source;
qx.bom.webfonts.Manager.getInstance().require(k,j,this._onWebFontChangeStatus,this);
}this.setFamily(m.concat(this.getFamily()));
},_onWebFontChangeStatus:function(n){var o=n.getData();
this.fireDataEvent(c,o);

if(qx.core.Environment.get(d)){if(o.valid===false){this.warn("WebFont "+o.family+" was not applied, perhaps the source file could not be loaded.");
}}},_quoteFontFamily:function(p){return p.replace(/["']/g,e);
}}});
})();
(function(){var n="",k="url('",h="ie",g="browser.name",f="svg",e="#",d="chrome",c="firefox",b="eot",a="ios",X="ttf",W="changeStatus",V="woff",U="browser.documentmode",T="m",S="os.name",R=")",Q="os.version",P="qx.bom.webfonts.Manager",O="singleton",u=",\n",v="src: ",s="mobileSafari",t="'eot)",q="');",r="qx.debug",o="interval",p="}\n",w="font-family: ",y="mobile safari",F="safari",D="@font-face.*?",I=";\n",H="') format('woff')",K="browser.version",J="opera",A="\.(",N="') format('svg')",M="'eot')",L="src: url('",z="\nfont-style: normal;\nfont-weight: normal;",B="?#iefix') format('embedded-opentype')",C=";",E="@font-face {",G="') format('truetype')";
qx.Class.define(P,{extend:qx.core.Object,type:O,construct:function(){qx.core.Object.call(this);
this.__iV=[];
this.__iW={};
this.__gA=[];
this.__iX=this.getPreferredFormats();
},statics:{FONT_FORMATS:["eot","woff","ttf","svg"],VALIDATION_TIMEOUT:5000},members:{__iV:null,__iY:null,__iW:null,__iX:null,__gA:null,__ja:null,require:function(Y,ba,bb,bc){var bd=[];

for(var i=0,l=ba.length;i<l;i++){var bf=ba[i].split(e);
var be=qx.util.ResourceManager.getInstance().toUri(bf[0]);

if(bf.length>1){be=be+e+bf[1];
}bd.push(be);
}if(!(qx.core.Environment.get(g)==h&&qx.bom.client.Browser.getVersion()<9)){this.__jb(Y,bd,bb,bc);
return;
}
if(!this.__ja){this.__ja=new qx.event.Timer(100);
this.__ja.addListener(o,this.__jc,this);
}
if(!this.__ja.isEnabled()){this.__ja.start();
}this.__gA.push([Y,bd,bb,bc]);
},remove:function(bg){var bh=null;

for(var i=0,l=this.__iV.length;i<l;i++){if(this.__iV[i]==bg){bh=i;
this.__ji(bg);
break;
}}
if(bh){qx.lang.Array.removeAt(this.__iV,bh);
}
if(bg in this.__iW){this.__iW[bg].dispose();
delete this.__iW[bg];
}},getPreferredFormats:function(){var bi=[];
var bm=qx.core.Environment.get(g);
var bj=qx.core.Environment.get(K);
var bl=qx.core.Environment.get(S);
var bk=qx.core.Environment.get(Q);

if((bm==h&&qx.core.Environment.get(U)>=9)||(bm==c&&bj>=3.6)||(bm==d&&bj>=6)){bi.push(V);
}
if((bm==J&&bj>=10)||(bm==F&&bj>=3.1)||(bm==c&&bj>=3.5)||(bm==d&&bj>=4)||(bm==y&&bl==a&&bk>=4.2)){bi.push(X);
}
if(bm==h&&bj>=4){bi.push(b);
}
if(bm==s&&bl==a&&bk>=4.1){bi.push(f);
}return bi;
},removeStyleSheet:function(){this.__iV=[];

if(this.__iY){var bn=this.__iY.ownerNode?this.__iY.ownerNode:this.__iY.owningElement;
qx.dom.Element.removeChild(bn,bn.parentNode);
}this.__iY=null;
},__jb:function(bo,bp,bq,br){if(!qx.lang.Array.contains(this.__iV,bo)){var bu=this.__je(bp);
var bt=this.__jf(bo,bu);

if(!bt){throw new Error("Couldn't create @font-face rule for WebFont "+bo+"!");
}
if(!this.__iY){this.__iY=qx.bom.Stylesheet.createElement();
}
try{this.__jh(bt);
}catch(bv){if(qx.core.Environment.get(r)){this.warn("Error while adding @font-face rule:",bv.message);
return;
}}this.__iV.push(bo);
}
if(!this.__iW[bo]){this.__iW[bo]=new qx.bom.webfonts.Validator(bo);
this.__iW[bo].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);
this.__iW[bo].addListenerOnce(W,this.__jd,this);
}
if(bq){var bs=br||window;
this.__iW[bo].addListenerOnce(W,bq,bs);
}this.__iW[bo].validate();
},__jc:function(){if(this.__gA.length==0){this.__ja.stop();
return;
}var bw=this.__gA.shift();
this.__jb.apply(this,bw);
},__jd:function(bx){var by=bx.getData();

if(by.valid===false){qx.event.Timer.once(function(){this.remove(by.family);
},this,250);
}},__je:function(bz){var bB=qx.bom.webfonts.Manager.FONT_FORMATS;
var bE={};

for(var i=0,l=bz.length;i<l;i++){var bC=null;

for(var x=0;x<bB.length;x++){var bD=new RegExp(A+bB[x]+R);
var bA=bD.exec(bz[i]);

if(bA){bC=bA[1];
}}
if(bC){bE[bC]=bz[i];
}}return bE;
},__jf:function(bF,bG){var bJ=[];
var bH=this.__iX.length>0?this.__iX:qx.bom.webfonts.Manager.FONT_FORMATS;

for(var i=0,l=bH.length;i<l;i++){var bI=bH[i];

if(bG[bI]){bJ.push(this.__jg(bI,bG[bI]));
}}var bK=v+bJ.join(u)+C;
bK=w+bF+I+bK;
bK=bK+z;
return bK;
},__jg:function(bL,bM){switch(bL){case b:return k+bM+q+L+bM+B;
case V:return k+bM+H;
case X:return k+bM+G;
case f:return k+bM+N;
default:return null;
}},__jh:function(bN){var bP=E+bN+p;

if(qx.core.Environment.get(g)==h&&qx.core.Environment.get(U)<9){var bO=this.__jj(this.__iY.cssText);
bO+=bP;
this.__iY.cssText=bO;
}else{this.__iY.insertRule(bP,this.__iY.cssRules.length);
}},__ji:function(bQ){var bT=new RegExp(D+bQ,T);

for(var i=0,l=document.styleSheets.length;i<l;i++){var bR=document.styleSheets[i];

if(bR.cssText){var bS=bR.cssText.replace(/\n/g,n).replace(/\r/g,n);
bS=this.__jj(bS);

if(bT.exec(bS)){bS=bS.replace(bT,n);
}bR.cssText=bS;
}else if(bR.cssRules){for(var j=0,m=bR.cssRules.length;j<m;j++){var bS=bR.cssRules[j].cssText.replace(/\n/g,n).replace(/\r/g,n);

if(bT.exec(bS)){this.__iY.deleteRule(j);
return;
}}}}},__jj:function(bU){return bU.replace(t,M);
}},destruct:function(){delete this.__iV;
this.removeStyleSheet();

for(var bV in this.__iW){this.__iW[bV].dispose();
}qx.bom.webfonts.Validator.removeDefaultHelperElements();
}});
})();
(function(){var n="xhr",m="Microsoft.XMLHTTP",l="io.ssl",k="io.xhr",j="",i="file:",h="https:",g="webkit",f="gecko",e="activex",b="opera",d=".",c="io.maxrequests",a="qx.bom.client.Transport";
qx.Bootstrap.define(a,{statics:{getMaxConcurrentRequestCount:function(){var o;
var r=qx.bom.client.Engine.getVersion().split(d);
var p=0;
var s=0;
var q=0;
if(r[0]){p=r[0];
}if(r[1]){s=r[1];
}if(r[2]){q=r[2];
}if(window.maxConnectionsPerServer){o=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()==b){o=8;
}else if(qx.bom.client.Engine.getName()==g){o=4;
}else if(qx.bom.client.Engine.getName()==f&&((p>1)||((p==1)&&(s>9))||((p==1)&&(s==9)&&(q>=1)))){o=6;
}else{o=2;
}return o;
},getSsl:function(){return window.location.protocol===h;
},getXmlHttpRequest:function(){var t=window.ActiveXObject?(function(){if(window.location.protocol!==i){try{new window.XMLHttpRequest();
return n;
}catch(u){}}
try{new window.ActiveXObject(m);
return e;
}catch(v){}})():(function(){try{new window.XMLHttpRequest();
return n;
}catch(w){}})();
return t||j;
}},defer:function(x){qx.core.Environment.add(c,x.getMaxConcurrentRequestCount);
qx.core.Environment.add(l,x.getSsl);
qx.core.Environment.add(k,x.getXmlHttpRequest);
}});
})();
(function(){var p="",o="/",n="mshtml",m="engine.name",l="io.ssl",k="string",j="//",i="?",h="data",g="type",c="data:image/",f=";",e="encoding",b="qx.util.ResourceManager",a="singleton",d=",";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
},statics:{__bc:qx.$$resources||{},__hs:{}},members:{has:function(q){return !!this.self(arguments).__bc[q];
},getData:function(r){return this.self(arguments).__bc[r]||null;
},getImageWidth:function(s){var t=this.self(arguments).__bc[s];
return t?t[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__bc[u];
return v?v[1]:null;
},getImageFormat:function(w){var x=this.self(arguments).__bc[w];
return x?x[2]:null;
},getCombinedFormat:function(y){var B=p;
var A=this.self(arguments).__bc[y];
var z=A&&A.length>4&&typeof (A[4])==k&&this.constructor.__bc[A[4]];

if(z){var D=A[4];
var C=this.constructor.__bc[D];
B=C[2];
}return B;
},toUri:function(E){if(E==null){return E;
}var F=this.self(arguments).__bc[E];

if(!F){return E;
}
if(typeof F===k){var H=F;
}else{var H=F[3];
if(!H){return E;
}}var G=p;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){G=this.self(arguments).__hs[H];
}return G+qx.$$libraries[H].resourceUri+o+E;
},toDataUri:function(I){var K=this.constructor.__bc[I];
var L=this.constructor.__bc[K[4]];
var M;

if(L){var J=L[4][I];
M=c+J[g]+f+J[e]+d+J[h];
}else{M=this.toUri(I);
}return M;
}},defer:function(N){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var R in qx.$$libraries){var P;

if(qx.$$libraries[R].resourceUri){P=qx.$$libraries[R].resourceUri;
}else{N.__hs[R]=p;
continue;
}if(P.match(/^\/\//)!=null){N.__hs[R]=window.location.protocol;
}else if(P.match(/^\//)!=null){N.__hs[R]=window.location.protocol+j+window.location.host;
}else if(P.match(/^\.\//)!=null){var O=document.URL;
N.__hs[R]=O.substring(0,O.lastIndexOf(o)+1);
}else if(P.match(/^http/)!=null){N.__hs[R]=p;
}else{var S=window.location.href.indexOf(i);
var Q;

if(S==-1){Q=window.location.href;
}else{Q=window.location.href.substring(0,S);
}N.__hs[R]=Q.substring(0,Q.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var k="interval",j="qx.event.Timer",i="_applyInterval",h="func is not a function",g="Boolean",f="qx.debug",d="No timeout given",c="Integer",b="qx.event.type.Event",a="_applyEnabled";
qx.Class.define(j,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);
this.setEnabled(false);

if(l!=null){this.setInterval(l);
}var self=this;
this.__fX=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(m,n,o){if(qx.core.Environment.get(f)){qx.core.Assert.assertFunction(m,h);
qx.core.Assert.assertNotUndefined(o,d);
}var p=new qx.event.Timer(o);
p.__fY=m;
p.addListener(k,function(e){p.stop();
m.call(n,e);
p.dispose();
n=null;
},n);
p.start();
return p;
}},properties:{enabled:{init:true,check:g,apply:a},interval:{check:c,init:1000,apply:i}},members:{__ga:null,__fX:null,_applyInterval:function(q,r){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(s,t){if(t){window.clearInterval(this.__ga);
this.__ga=null;
}else if(s){this.__ga=window.setInterval(this.__fX,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(u){this.setInterval(u);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(v){this.stop();
this.startWith(v);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(k);
}})},destruct:function(){if(this.__ga){window.clearInterval(this.__ga);
}this.__ga=this.__fX=null;
}});
})();
(function(){var a="qx.dom.Element";
qx.Class.define(a,{statics:{hasChild:function(parent,b){return b.parentNode===parent;
},hasChildren:function(c){return !!c.firstChild;
},hasChildElements:function(d){d=d.firstChild;

while(d){if(d.nodeType===1){return true;
}d=d.nextSibling;
}return false;
},getParentElement:function(e){return e.parentNode;
},isInDom:function(f,g){if(!g){g=window;
}var h=g.document.getElementsByTagName(f.nodeName);

for(var i=0,l=h.length;i<l;i++){if(h[i]===f){return true;
}}return false;
},insertAt:function(j,parent,k){var m=parent.childNodes[k];

if(m){parent.insertBefore(j,m);
}else{parent.appendChild(j);
}return true;
},insertBegin:function(n,parent){if(parent.firstChild){this.insertBefore(n,parent.firstChild);
}else{parent.appendChild(n);
}},insertEnd:function(o,parent){parent.appendChild(o);
},insertBefore:function(p,q){q.parentNode.insertBefore(p,q);
return true;
},insertAfter:function(r,s){var parent=s.parentNode;

if(s==parent.lastChild){parent.appendChild(r);
}else{return this.insertBefore(r,s.nextSibling);
}return true;
},remove:function(t){if(!t.parentNode){return false;
}t.parentNode.removeChild(t);
return true;
},removeChild:function(u,parent){if(u.parentNode!==parent){return false;
}parent.removeChild(u);
return true;
},removeChildAt:function(v,parent){var w=parent.childNodes[v];

if(!w){return false;
}parent.removeChild(w);
return true;
},replaceChild:function(x,y){if(!y.parentNode){return false;
}y.parentNode.replaceChild(x,y);
return true;
},replaceAt:function(z,A,parent){var B=parent.childNodes[A];

if(!B){return false;
}parent.replaceChild(z,B);
return true;
}}});
})();
(function(){var p="head",o="text/css",n="html.stylesheet.removeimport",m="html.stylesheet.deleterule",l="stylesheet",k="html.stylesheet.addimport",j="html.stylesheet.insertrule",h="}",g="html.stylesheet.createstylesheet",f='@import "',c="{",e='";',d="qx.bom.Stylesheet",b="link",a="style";
qx.Bootstrap.define(d,{statics:{includeFile:function(q,r){if(!r){r=document;
}var s=r.createElement(b);
s.type=o;
s.rel=l;
var u=qx.util.ResourceManager.getInstance().toUri(q);

if(u!==q){qx.log.Logger.warn("qx.bom.Stylesheet.includeFile: Resource IDs will no "+"longer be resolved, please call this method "+"with a valid URI as the first argument!");
}s.href=u;
var t=r.getElementsByTagName(p)[0];
t.appendChild(s);
},createElement:function(v){if(qx.core.Environment.get(g)){var w=document.createStyleSheet();

if(v){w.cssText=v;
}return w;
}else{var x=document.createElement(a);
x.type=o;

if(v){x.appendChild(document.createTextNode(v));
}document.getElementsByTagName(p)[0].appendChild(x);
return x.sheet;
}},addRule:function(y,z,A){if(qx.core.Environment.get(j)){y.insertRule(z+c+A+h,y.cssRules.length);
}else{y.addRule(z,A);
}},removeRule:function(B,C){if(qx.core.Environment.get(m)){var D=B.cssRules;
var E=D.length;

for(var i=E-1;i>=0;--i){if(D[i].selectorText==C){B.deleteRule(i);
}}}else{var D=B.rules;
var E=D.length;

for(var i=E-1;i>=0;--i){if(D[i].selectorText==C){B.removeRule(i);
}}}},removeAllRules:function(F){if(qx.core.Environment.get(m)){var G=F.cssRules;
var H=G.length;

for(var i=H-1;i>=0;i--){F.deleteRule(i);
}}else{var G=F.rules;
var H=G.length;

for(var i=H-1;i>=0;i--){F.removeRule(i);
}}},addImport:function(I,J){if(qx.core.Environment.get(k)){I.addImport(J);
}else{I.insertRule(f+J+e,I.cssRules.length);
}},removeImport:function(K,L){if(qx.core.Environment.get(n)){var M=K.imports;
var O=M.length;

for(var i=O-1;i>=0;i--){if(M[i].href==L||M[i].href==qx.util.Uri.getAbsolute(L)){K.removeImport(i);
}}}else{var N=K.cssRules;
var O=N.length;

for(var i=O-1;i>=0;i--){if(N[i].href==L){K.deleteRule(i);
}}}},removeAllImports:function(P){if(qx.core.Environment.get(n)){var Q=P.imports;
var S=Q.length;

for(var i=S-1;i>=0;i--){P.removeImport(i);
}}else{var R=P.cssRules;
var S=R.length;

for(var i=S-1;i>=0;i--){if(R[i].type==R[i].IMPORT_RULE){P.deleteRule(i);
}}}}}});
})();
(function(){var h="object",g="function",f="qx.bom.client.Stylesheet",e="html.stylesheet.deleterule",d="html.stylesheet.insertrule",c="html.stylesheet.createstylesheet",b="html.stylesheet.addimport",a="html.stylesheet.removeimport";
qx.Bootstrap.define(f,{statics:{__jk:function(){if(!qx.bom.client.Stylesheet.__jl){qx.bom.client.Stylesheet.__jl=qx.bom.Stylesheet.createElement();
}return qx.bom.client.Stylesheet.__jl;
},getCreateStyleSheet:function(){return typeof document.createStyleSheet===h;
},getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__jk().insertRule===g;
},getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__jk().deleteRule===g;
},getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__jk().addImport===h);
},getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__jk().removeImport===h);
}},defer:function(i){qx.core.Environment.add(c,i.getCreateStyleSheet);
qx.core.Environment.add(d,i.getInsertRule);
qx.core.Environment.add(e,i.getDeleteRule);
qx.core.Environment.add(b,i.getAddImport);
qx.core.Environment.add(a,i.getRemoveImport);
}});
})();
(function(){var k="file",j="strict",h="anchor",g="div",f="query",e="source",d="password",c="host",b="protocol",a="qx.debug",B="user",A="directory",z="loose",y="relative",x="queryKey",w="qx.util.Uri",v="",u="path",t="authority",s='">0</a>',q="&",r="port",n='<a href="',p="userInfo",l="?";
qx.Class.define(w,{statics:{parseUri:function(C,D){var E={key:[e,b,t,p,B,d,c,r,y,u,A,k,f,h],q:{name:x,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
var o=E,m=E.parser[D?j:z].exec(C),F={},i=14;

while(i--){F[o.key[i]]=m[i]||v;
}F[o.q.name]={};
F[o.key[12]].replace(o.q.parser,function(G,H,I){if(H){F[o.q.name][H]=I;
}});
return F;
},appendParamsToUrl:function(J,K){if(K===undefined){return J;
}
if(qx.core.Environment.get(a)){if(!(qx.lang.Type.isString(K)||qx.lang.Type.isObject(K))){throw new Error("params must be either string or object");
}}
if(qx.lang.Type.isObject(K)){K=qx.lang.Object.toUriParameter(K);
}
if(!K){return J;
}return J+=(/\?/).test(J)?q+K:l+K;
},getAbsolute:function(L){var M=document.createElement(g);
M.innerHTML=n+L+s;
return M.firstChild.href;
}}});
})();
(function(){var h=",",g="interval",f="changeStatus",e="qx.event.type.Data",d="qx.bom.webfonts.Validator",c="_applyFontFamily",b="span",a="Integer";
qx.Class.define(d,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);

if(i){this.setFontFamily(i);
}this.__jm=this._getRequestedHelpers();
},statics:{COMPARISON_FONTS:{sans:["Arial","Helvetica","sans-serif"],serif:["Times New Roman","Georgia","serif"]},HELPER_CSS:{position:"absolute",margin:"0",padding:"0",top:"-1000px",left:"-1000px",fontSize:"350px",width:"auto",height:"auto",lineHeight:"normal",fontVariant:"normal"},COMPARISON_STRING:"WEei",__jn:null,__jo:null,removeDefaultHelperElements:function(){var j=qx.bom.webfonts.Validator.__jo;

if(j){for(var k in j){document.body.removeChild(j[k]);
}}delete qx.bom.webfonts.Validator.__jo;
}},properties:{fontFamily:{nullable:true,init:null,apply:c},timeout:{check:a,init:5000}},events:{"changeStatus":e},members:{__jm:null,__jp:null,__jq:null,validate:function(){this.__jq=new Date().getTime();

if(this.__jp){this.__jp.restart();
}else{this.__jp=new qx.event.Timer(100);
this.__jp.addListener(g,this.__jr,this);
qx.event.Timer.once(function(){this.__jp.start();
},this,0);
}},_reset:function(){if(this.__jm){for(var m in this.__jm){var l=this.__jm[m];
document.body.removeChild(l);
}this.__jm=null;
}},_isFontValid:function(){if(!qx.bom.webfonts.Validator.__jn){this.__bf();
}
if(!this.__jm){this.__jm=this._getRequestedHelpers();
}var o=qx.bom.element.Dimension.getWidth(this.__jm.sans);
var n=qx.bom.element.Dimension.getWidth(this.__jm.serif);
var p=qx.bom.webfonts.Validator;

if(o!==p.__jn.sans&&n!==p.__jn.serif){return true;
}return false;
},_getRequestedHelpers:function(){var q=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);
var r=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);
return {sans:this._getHelperElement(q),serif:this._getHelperElement(r)};
},_getHelperElement:function(s){var t=qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);

if(s){if(t.fontFamily){t.fontFamily+=h+s.join(h);
}else{t.fontFamily=s.join(h);
}}var u=document.createElement(b);
u.innerHTML=qx.bom.webfonts.Validator.COMPARISON_STRING;
qx.bom.element.Style.setStyles(u,t);
document.body.appendChild(u);
return u;
},_applyFontFamily:function(v,w){if(v!==w){this._reset();
}},__bf:function(){var x=qx.bom.webfonts.Validator;

if(!x.__jo){x.__jo={sans:this._getHelperElement(x.COMPARISON_FONTS.sans),serif:this._getHelperElement(x.COMPARISON_FONTS.serif)};
}x.__jn={sans:qx.bom.element.Dimension.getWidth(x.__jo.sans),serif:qx.bom.element.Dimension.getWidth(x.__jo.serif)};
},__jr:function(){if(this._isFontValid()){this.__jp.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:true});
}else{var y=new Date().getTime();

if(y-this.__jq>=this.getTimeout()){this.__jp.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:false});
}}}},destruct:function(){this._reset();
this.__jp.stop();
this.__jp.removeListener(g,this.__jr,this);
this._disposeObjects(this.__jp);
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
},__js:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__js[t]){var w=r.clientWidth;

if((qx.core.Environment.get(j)==c)||qx.dom.Node.isBlockNode(r)){w=w-u-x;
}return w;
}else{if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-u-x;
}else{var v=r.scrollWidth-u;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)>=6){v-=x;
}return v;
}}},getContentHeight:function(y){var z=qx.bom.element.Style;
var C=qx.bom.element.Overflow.getY(y);
var B=parseInt(z.get(y,a)||i,10);
var A=parseInt(z.get(y,b)||i,10);

if(this.__js[C]){return y.clientHeight-B-A;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;
}else{var D=y.scrollHeight-B;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)==6){D-=A;
}return D;
}}},getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};
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
this.__ii={};
this.__ij={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__ik:{},__ii:null,__ij:null,_applyTheme:function(j,k){this.__ij={};
this.__ii={};
},__il:function(l,m,n){var s=m.appearances;
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
return this.__il(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__il(q,m);

if(o){return o;
}}if(n!=null){return this.__il(n,m);
}return null;
}else if(typeof v===h){return this.__il(v,m,n);
}else if(v.include&&!v.style){return this.__il(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var F=this.__ij;
var B=F[x];

if(!B){B=F[x]=this.__il(x,z,A);
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
}}var E=this.__ii;

if(E[M]!==undefined){return E[M];
}if(!y){y=this.__ik;
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
}},destruct:function(){this.__ii=this.__ij=null;
}});
})();
(function(){var t="object",s="qx.debug",r="Theme",q="undefined",p="widgets",o="fonts",n="string",m="colors",k="decorations",j="meta",d="appearances",h="borders",g="icons",c="other",b="qx.Theme",f="]",e="[Theme ";
qx.Bootstrap.define(b,{statics:{define:function(name,u){if(!u){var u={};
}u.include=this.__qT(u.include);
u.patch=this.__qT(u.patch);
if(qx.core.Environment.get(s)){this.__d(name,u);
}var v={$$type:r,name:name,title:u.title,toString:this.genericToString};
if(u.extend){v.supertheme=u.extend;
}v.basename=qx.Bootstrap.createNamespace(name,v);
this.__qW(v,u);
this.__qU(v,u);
this.$$registry[name]=v;
for(var i=0,a=u.include,l=a.length;i<l;i++){this.include(v,a[i]);
}
for(var i=0,a=u.patch,l=a.length;i<l;i++){this.patch(v,a[i]);
}},__qT:function(w){if(!w){return [];
}
if(qx.Bootstrap.isArray(w)){return w;
}else{return [w];
}},__qU:function(x,y){var z=y.aliases||{};

if(y.extend&&y.extend.aliases){qx.Bootstrap.objectMergeWith(z,y.extend.aliases,false);
}x.aliases=z;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return e+this.name+f;
},__qV:function(A){for(var i=0,B=this.__qX,l=B.length;i<l;i++){if(A[B[i]]){return B[i];
}}},__qW:function(C,D){var G=this.__qV(D);
if(D.extend&&!G){G=D.extend.type;
}C.type=G||c;
var I=function(){};
if(D.extend){I.prototype=new D.extend.$$clazz;
}var H=I.prototype;
var F=D[G];
for(var E in F){H[E]=F[E];
if(H[E].base){if(qx.core.Environment.get(s)){if(!D.extend){throw new Error("Found base flag in entry '"+E+"' of theme '"+D.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}H[E].base=D.extend;
}}C.$$clazz=I;
C[G]=new I;
},$$registry:{},__qX:[m,h,k,o,g,p,d,j],__c:qx.core.Environment.select(s,{"true":{"title":n,"aliases":t,"type":n,"extend":t,"colors":t,"borders":t,"decorations":t,"fonts":t,"icons":t,"widgets":t,"appearances":t,"meta":t,"include":t,"patch":t},"default":null}),__qY:qx.core.Environment.select(s,{"true":{"color":t,"border":t,"decoration":t,"font":t,"icon":t,"appearance":t,"widget":t},"default":null}),__d:qx.core.Environment.select(s,{"true":function(name,J){var O=this.__c;

for(var N in J){if(O[N]===undefined){throw new Error('The configuration key "'+N+'" in theme "'+name+'" is not allowed!');
}
if(J[N]==null){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value is undefined/null!');
}
if(O[N]!==null&&typeof J[N]!==O[N]){throw new Error('Invalid type of key "'+N+'" in theme "'+name+'"! The type of the key must be "'+O[N]+'"!');
}}var M=[m,h,k,o,g,p,d,j];

for(var i=0,l=M.length;i<l;i++){var N=M[i];

if(J[N]!==undefined&&(J[N] instanceof Array||J[N] instanceof RegExp||J[N] instanceof Date||J[N].classname!==undefined)){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value needs to be a map!');
}}var K=0;

for(var i=0,l=M.length;i<l;i++){var N=M[i];

if(J[N]){K++;
}
if(K>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(J.meta){var L;

for(var N in J.meta){L=J.meta[N];

if(this.__qY[N]===undefined){throw new Error('The key "'+N+'" is not allowed inside a meta theme block.');
}
if(typeof L!==this.__qY[N]){throw new Error('The type of the key "'+N+'" inside the meta block is wrong.');
}
if(!(typeof L===t&&L!==null&&L.$$type===r)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+N+'" in theme "'+name+'" is invalid: '+L);
}}}if(J.extend&&J.extend.$$type!==r){throw new Error('Invalid extend in theme "'+name+'": '+J.extend);
}if(J.include){for(var i=0,l=J.include.length;i<l;i++){if(typeof (J.include[i])==q||J.include[i].$$type!==r){throw new Error('Invalid include in theme "'+name+'": '+J.include[i]);
}}}if(J.patch){for(var i=0,l=J.patch.length;i<l;i++){if(typeof (J.patch[i])==q||J.patch[i].$$type!==r){throw new Error('Invalid patch in theme "'+name+'": '+J.patch[i]);
}}}},"default":function(){}}),patch:function(P,Q){this.__ra(Q);
var S=this.__qV(Q);

if(S!==this.__qV(P)){throw new Error("The mixins '"+P.name+"' are not compatible '"+Q.name+"'!");
}var R=Q[S];
var T=P.$$clazz.prototype;

for(var U in R){T[U]=R[U];
}},include:function(V,W){this.__ra(W);
var Y=W.type;

if(Y!==V.type){throw new Error("The mixins '"+V.name+"' are not compatible '"+W.name+"'!");
}var X=W[Y];
var ba=V.$$clazz.prototype;

for(var bb in X){if(ba[bb]!==undefined){continue;
}ba[bb]=X[bb];
}},__ra:function(bc){if(typeof bc===q||bc==null){var bd=new Error("Mixin theme is not a valid theme!");

if(qx.core.Environment.get(s)){var be=qx.dev.StackTrace.getStackTraceFromError(bd);
qx.Bootstrap.error(this,be);
}throw bd;
}}}});
})();
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="widget",i="__rg",h="qx.ui.tooltip.ToolTip",g="__re",c="_applyCurrent",f="qx.ui.tooltip.Manager",d="__rd",b="tooltip-error",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__rn,this,true);
this.__rd=new qx.event.Timer();
this.__rd.addListener(n,this.__rk,this);
this.__re=new qx.event.Timer();
this.__re.addListener(n,this.__rl,this);
this.__rf={left:0,top:0};
},properties:{current:{check:h,nullable:true,apply:c},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__rf:null,__re:null,__rd:null,__rg:null,__rh:null,__ri:function(){if(!this.__rg){this.__rg=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__rg;
},__rj:function(){if(!this.__rh){this.__rh=new qx.ui.tooltip.ToolTip().set({appearance:b});
this.__rh.syncAppearance();
}return this.__rh;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__rd.stop();
this.__re.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__rd.startWith(q.getShowTimeout());
t.addListener(s,l,this.__ro,this,true);
t.addListener(s,o,this.__rp,this,true);
t.addListener(s,k,this.__rm,this,true);
}else{t.removeListener(s,l,this.__ro,this,true);
t.removeListener(s,o,this.__rp,this,true);
t.removeListener(s,k,this.__rm,this,true);
}},__rk:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__re.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==j){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__rf);
}u.show();
}this.__rd.stop();
},__rl:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__re.stop();
this.resetCurrent();
},__rm:function(e){var w=this.__rf;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__rn:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!z){return;
}var A,B,y,x;
while(z!=null){A=z.getToolTip();
B=z.getToolTipText()||null;
y=z.getToolTipIcon()||null;

if(qx.Class.hasInterface(z.constructor,qx.ui.form.IForm)&&!z.isValid()){x=z.getInvalidMessage();
}
if(A||B||y||x){break;
}z=z.getLayoutParent();
}if(!z||!z.getEnabled()||z.isBlockToolTip()||(!x&&!this.getShowToolTips())||(x&&!this.getShowInvalidToolTips())){return;
}
if(x){A=this.__rj().set({label:x});
}
if(!A){A=this.__ri().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__ro:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__rp:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__rn,this,true);
this._disposeObjects(d,g,i);
this.__rf=null;
}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="qx.debug",b="allowShrinkY",a="Wrong 'width' argument. ",E="Something went wrong with the layout of ",D="bottom",C="Wrong 'left' argument. ",B="baseline",A="marginBottom",z="qx.ui.core.LayoutItem",y="center",x="marginTop",w="!",v="allowGrowX",q="middle",r="marginLeft",o="allowShrinkX",p="top",m="right",n="marginRight",k="abstract",l="Wrong 'top' argument. ",s="Wrong 'height' argument. ",t="allowGrowY",u="left";
qx.Class.define(z,{type:k,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[v,o],mode:e,themeable:true},allowStretchY:{group:[t,b],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[x,n,A,r],mode:e,themeable:true},alignX:{check:[u,y,m],nullable:true,apply:d,themeable:true},alignY:{check:[p,q,D,B],nullable:true,apply:d,themeable:true}},members:{__gs:null,__gt:null,__gu:null,__gv:null,__gw:null,__gx:null,__gy:null,getBounds:function(){return this.__gx||this.__gt||null;
},clearSeparators:function(){},renderSeparator:function(F,G){},renderLayout:function(H,top,I,J){if(qx.core.Environment.get(c)){var K=E+this.toString()+w;
this.assertInteger(H,C+K);
this.assertInteger(top,l+K);
this.assertInteger(I,a+K);
this.assertInteger(J,s+K);
}var L=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var L=this._getHeightForWidth(I);
}
if(L!=null&&L!==this.__gs){this.__gs=L;
qx.ui.core.queue.Layout.add(this);
return null;
}var N=this.__gt;

if(!N){N=this.__gt={};
}var M={};

if(H!==N.left||top!==N.top){M.position=true;
N.left=H;
N.top=top;
}
if(I!==N.width||J!==N.height){M.size=true;
N.width=I;
N.height=J;
}if(this.__gu){M.local=true;
delete this.__gu;
}
if(this.__gw){M.margin=true;
delete this.__gw;
}return M;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__gu;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__gu=true;
this.__gv=null;
},getSizeHint:function(O){var P=this.__gv;

if(P){return P;
}
if(O===false){return null;
}P=this.__gv=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__gs&&this.getHeight()==null){P.height=this.__gs;
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
},_computeSizeHint:function(){var U=this.getMinWidth()||0;
var R=this.getMinHeight()||0;
var V=this.getWidth()||U;
var T=this.getHeight()||R;
var Q=this.getMaxWidth()||Infinity;
var S=this.getMaxHeight()||Infinity;
return {minWidth:U,width:V,maxWidth:Q,minHeight:R,height:T,maxHeight:S};
},_hasHeightForWidth:function(){var W=this._getLayout();

if(W){return W.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(X){var Y=this._getLayout();

if(Y&&Y.hasHeightForWidth()){return Y.getHeightForWidth(X);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__gw=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__gx;
},setUserBounds:function(ba,top,bb,bc){this.__gx={left:ba,top:top,width:bb,height:bc};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__gx;
qx.ui.core.queue.Layout.add(this);
},__gz:{},setLayoutProperties:function(bd){if(bd==null){return;
}var be=this.__gy;

if(!be){be=this.__gy={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(bd);
}for(var bf in bd){if(bd[bf]==null){delete be[bf];
}else{be[bf]=bd[bf];
}}},getLayoutProperties:function(){return this.__gy||this.__gz;
},clearLayoutProperties:function(){delete this.__gy;
},updateLayoutProperties:function(bg){var bh=this._getLayout();

if(bh){if(qx.core.Environment.get(c)){if(bg){for(var bi in bg){if(bg[bi]!==null){bh.verifyLayoutProperty(this,bi,bg[bi]);
}}}}bh.invalidateChildrenCache();
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
},clone:function(){var bj=qx.core.Object.prototype.clone.call(this);
var bk=this.__gy;

if(bk){bj.__gy=qx.lang.Object.clone(bk);
}return bj;
}},destruct:function(){this.$$parent=this.$$subparent=this.__gy=this.__gt=this.__gx=this.__gv=null;
}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__gA:{},remove:function(c){delete this.__gA[c.$$hash];
},add:function(d){this.__gA[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},isScheduled:function(e){return !!this.__gA[e.$$hash];
},flush:function(){var f=this.__gD();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(k){var l=this.__gC;
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
},__gB:function(){var t=qx.ui.core.queue.Visibility;
this.__gC={};
var s=[];
var r=this.__gA;
var o,q;

for(var p in r){o=r[p];

if(t.isVisible(o)){q=this.getNestingLevel(o);
if(!s[q]){s[q]={};
}s[q][p]=o;
delete r[p];
}}return s;
},__gD:function(){var x=[];
var z=this.__gB();

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
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__dp={};
this.__dq=qx.lang.Function.bind(this.__du,this);
this.__dr=false;
},members:{__ds:null,__dt:null,__dp:null,__dr:null,__dq:null,schedule:function(c){if(this.__ds==null){this.__ds=window.setTimeout(this.__dq,0);
}var d=c.toHashCode();
if(this.__dt&&this.__dt[d]){return;
}this.__dp[d]=c;
this.__dr=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__dt&&this.__dt[f]){this.__dt[f]=null;
return;
}delete this.__dp[f];
if(qx.lang.Object.isEmpty(this.__dp)&&this.__ds!=null){window.clearTimeout(this.__ds);
this.__ds=null;
}},__du:qx.event.GlobalError.observeMethod(function(){this.__ds=null;
while(this.__dr){this.__dt=qx.lang.Object.clone(this.__dp);
this.__dp={};
this.__dr=false;

for(var h in this.__dt){var g=this.__dt[h];

if(g){this.__dt[h]=null;
g.call();
}}}this.__dt=null;
})},destruct:function(){if(this.__ds!=null){window.clearTimeout(this.__ds);
}this.__dq=this.__dp=null;
}});
})();
(function(){var b="qx.util.DeferredCall",a="qx.debug";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c,d){qx.core.Object.call(this);
this.__bD=c;
this.__bE=d||null;
this.__dv=qx.util.DeferredCallManager.getInstance();
},members:{__bD:null,__bE:null,__dv:null,cancel:function(){this.__dv.cancel(this);
},schedule:function(){this.__dv.schedule(this);
},call:function(){if(qx.core.Environment.get(a)){var e=this.__bE;

if(e&&e.isDisposed&&e.isDisposed()){this.warn("The context object '"+e+"' of the defered call '"+this+"'is already disposed.");
}}this.__bE?this.__bD.apply(this.__bE):this.__bD();
}},destruct:function(){this.cancel();
this.__bE=this.__bD=this.__dv=null;
}});
})();
(function(){var m="element",k="qx.debug",j="': ",h="Invalid context for callback.",g="Invalid capture flag.",f="div",d="'",c="Invalid callback function",b="",a="Invalid event type.",Q="mshtml",P="engine.name",O="scroll",N="text",M="|bubble|",L="qx.html.Element",K="|capture|",J="activate",I="Failed to add event listener for type '",H="blur",t="deactivate",u="css.userselect",r=" from the target '",s="capture",p="visible",q="releaseCapture",n="Failed to remove event listener for type '",o="qxSelectable",v="tabIndex",w="off",B="__dS",A="qx.html.Iframe",D="focus",C=" to the target '",F="none",E="css.userselect.none",z="hidden",G="on";
qx.Class.define(L,{extend:qx.core.Object,construct:function(R,S,T){qx.core.Object.call(this);
this.__dw=R||f;
this.__dx=S||null;
this.__dy=T||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__dz:{},_scheduleFlush:function(U){qx.html.Element.__ee.schedule();
},flush:function(){var bg;

if(qx.core.Environment.get(k)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var X=this.__dA();
var W=X.getFocus();

if(W&&this.__dE(W)){X.blur(W);
}var bn=X.getActive();

if(bn&&this.__dE(bn)){qx.bom.Element.deactivate(bn);
}var bb=this.__dC();

if(bb&&this.__dE(bb)){qx.bom.Element.releaseCapture(bb);
}var bh=[];
var bi=this._modified;

for(var bf in bi){bg=bi[bf];
if(bg.__dW()||bg.classname==A){if(bg.__dF&&qx.dom.Hierarchy.isRendered(bg.__dF)){bh.push(bg);
}else{if(qx.core.Environment.get(k)){if(this.DEBUG){bg.debug("Flush invisible element");
}}bg.__dV();
}delete bi[bf];
}}
for(var i=0,l=bh.length;i<l;i++){bg=bh[i];

if(qx.core.Environment.get(k)){if(this.DEBUG){bg.debug("Flush rendered element");
}}bg.__dV();
}var bd=this._visibility;

for(var bf in bd){bg=bd[bf];
var bj=bg.__dF;

if(!bj){delete bd[bf];
continue;
}
if(qx.core.Environment.get(k)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+bg.__dI);
}}if(!bg.$$disposed){bj.style.display=bg.__dI?b:F;
if((qx.core.Environment.get(P)==Q)){if(!(document.documentMode>=8)){bj.style.visibility=bg.__dI?p:z;
}}}delete bd[bf];
}var scroll=this._scroll;

for(var bf in scroll){bg=scroll[bf];
var bo=bg.__dF;

if(bo&&bo.offsetWidth){var ba=true;
if(bg.__dL!=null){bg.__dF.scrollLeft=bg.__dL;
delete bg.__dL;
}if(bg.__dM!=null){bg.__dF.scrollTop=bg.__dM;
delete bg.__dM;
}var bk=bg.__dJ;

if(bk!=null){var be=bk.element.getDomElement();

if(be&&be.offsetWidth){qx.bom.element.Scroll.intoViewX(be,bo,bk.align);
delete bg.__dJ;
}else{ba=false;
}}var bl=bg.__dK;

if(bl!=null){var be=bl.element.getDomElement();

if(be&&be.offsetWidth){qx.bom.element.Scroll.intoViewY(be,bo,bl.align);
delete bg.__dK;
}else{ba=false;
}}if(ba){delete scroll[bf];
}}}var Y={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bm=this._actions[i];
var bj=bm.element.__dF;

if(!bj||!Y[bm.type]&&!bm.element.__dW()){continue;
}var bc=bm.args;
bc.unshift(bj);
qx.bom.Element[bm.type].apply(qx.bom.Element,bc);
}this._actions=[];
for(var bf in this.__dz){var V=this.__dz[bf];
var bo=V.element.__dF;

if(bo){qx.bom.Selection.set(bo,V.start,V.end);
delete this.__dz[bf];
}}qx.event.handler.Appear.refresh();
},__dA:function(){if(!this.__dB){var bp=qx.event.Registration.getManager(window);
this.__dB=bp.getHandler(qx.event.handler.Focus);
}return this.__dB;
},__dC:function(){if(!this.__dD){var bq=qx.event.Registration.getManager(window);
this.__dD=bq.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__dD.getCaptureElement();
},__dE:function(br){var bs=qx.core.ObjectRegistry.fromHashCode(br.$$element);
return bs&&!bs.__dW();
}},members:{__dw:null,__dF:null,__dG:false,__dH:true,__dI:true,__dJ:null,__dK:null,__dL:null,__dM:null,__dN:null,__dO:null,__dP:null,__dx:null,__dy:null,__dQ:null,__dR:null,__dS:null,__dT:null,__dU:null,_scheduleChildrenUpdate:function(){if(this.__dT){return;
}this.__dT=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__dw);
},__dV:function(){if(qx.core.Environment.get(k)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var length;
var bt=this.__dS;

if(bt){length=bt.length;
var bu;

for(var i=0;i<length;i++){bu=bt[i];

if(bu.__dI&&bu.__dH&&!bu.__dF){bu.__dV();
}}}
if(!this.__dF){this.__dF=this._createDomElement();
this.__dF.$$element=this.$$hash;
this._copyData(false);

if(bt&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__dT){this._syncChildren();
}}delete this.__dT;
},_insertChildren:function(){var bv=this.__dS;
var length=bv.length;
var bx;

if(length>2){var bw=document.createDocumentFragment();

for(var i=0;i<length;i++){bx=bv[i];

if(bx.__dF&&bx.__dH){bw.appendChild(bx.__dF);
}}this.__dF.appendChild(bw);
}else{var bw=this.__dF;

for(var i=0;i<length;i++){bx=bv[i];

if(bx.__dF&&bx.__dH){bw.appendChild(bx.__dF);
}}}},_syncChildren:function(){var bH=qx.core.ObjectRegistry;
var by=this.__dS;
var bF=by.length;
var bz;
var bD;
var bB=this.__dF;
var bE=bB.childNodes;
var bA=0;
var bC;

if(qx.core.Environment.get(k)){var bG=0;
}for(var i=bE.length-1;i>=0;i--){bC=bE[i];
bD=bH.fromHashCode(bC.$$element);

if(!bD||!bD.__dH||bD.__dU!==this){bB.removeChild(bC);

if(qx.core.Environment.get(k)){bG++;
}}}for(var i=0;i<bF;i++){bz=by[i];
if(bz.__dH){bD=bz.__dF;
bC=bE[bA];

if(!bD){continue;
}if(bD!=bC){if(bC){bB.insertBefore(bD,bC);
}else{bB.appendChild(bD);
}
if(qx.core.Environment.get(k)){bG++;
}}bA++;
}}if(qx.core.Environment.get(k)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+bG+" operations");
}}},_copyData:function(bI){var bM=this.__dF;
var bL=this.__dy;

if(bL){var bJ=qx.bom.element.Attribute;

for(var bN in bL){bJ.set(bM,bN,bL[bN]);
}}var bL=this.__dx;

if(bL){var bK=qx.bom.element.Style;

if(bI){bK.setStyles(bM,bL);
}else{bK.setCss(bM,bK.compile(bL));
}}var bL=this.__dQ;

if(bL){for(var bN in bL){this._applyProperty(bN,bL[bN]);
}}var bL=this.__dR;

if(bL){qx.event.Registration.getManager(bM).importListeners(bM,bL);
delete this.__dR;
}},_syncData:function(){var bS=this.__dF;
var bR=qx.bom.element.Attribute;
var bP=qx.bom.element.Style;
var bQ=this.__dO;

if(bQ){var bV=this.__dy;

if(bV){var bT;

for(var bU in bQ){bT=bV[bU];

if(bT!==undefined){bR.set(bS,bU,bT);
}else{bR.reset(bS,bU);
}}}this.__dO=null;
}var bQ=this.__dN;

if(bQ){var bV=this.__dx;

if(bV){var bO={};

for(var bU in bQ){bO[bU]=bV[bU];
}bP.setStyles(bS,bO);
}this.__dN=null;
}var bQ=this.__dP;

if(bQ){var bV=this.__dQ;

if(bV){var bT;

for(var bU in bQ){this._applyProperty(bU,bV[bU]);
}}this.__dP=null;
}},__dW:function(){var bW=this;
while(bW){if(bW.__dG){return true;
}
if(!bW.__dH||!bW.__dI){return false;
}bW=bW.__dU;
}return false;
},__dX:function(bX){if(bX.__dU===this){throw new Error("Child is already in: "+bX);
}
if(bX.__dG){throw new Error("Root elements could not be inserted into other ones.");
}if(bX.__dU){bX.__dU.remove(bX);
}bX.__dU=this;
if(!this.__dS){this.__dS=[];
}if(this.__dF){this._scheduleChildrenUpdate();
}},__dY:function(bY){if(bY.__dU!==this){throw new Error("Has no child: "+bY);
}if(this.__dF){this._scheduleChildrenUpdate();
}delete bY.__dU;
},__ea:function(ca){if(ca.__dU!==this){throw new Error("Has no child: "+ca);
}if(this.__dF){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dS||null;
},getChild:function(cb){var cc=this.__dS;
return cc&&cc[cb]||null;
},hasChildren:function(){var cd=this.__dS;
return cd&&cd[0]!==undefined;
},indexOf:function(ce){var cf=this.__dS;
return cf?cf.indexOf(ce):-1;
},hasChild:function(cg){var ch=this.__dS;
return ch&&ch.indexOf(cg)!==-1;
},add:function(ci){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dX(arguments[i]);
}this.__dS.push.apply(this.__dS,arguments);
}else{this.__dX(ci);
this.__dS.push(ci);
}return this;
},addAt:function(cj,ck){this.__dX(cj);
qx.lang.Array.insertAt(this.__dS,cj,ck);
return this;
},remove:function(cl){var cm=this.__dS;

if(!cm){return;
}
if(arguments[1]){var cn;

for(var i=0,l=arguments.length;i<l;i++){cn=arguments[i];
this.__dY(cn);
qx.lang.Array.remove(cm,cn);
}}else{this.__dY(cl);
qx.lang.Array.remove(cm,cl);
}return this;
},removeAt:function(co){var cp=this.__dS;

if(!cp){throw new Error("Has no children!");
}var cq=cp[co];

if(!cq){throw new Error("Has no child at this position!");
}this.__dY(cq);
qx.lang.Array.removeAt(this.__dS,co);
return this;
},removeAll:function(){var cr=this.__dS;

if(cr){for(var i=0,l=cr.length;i<l;i++){this.__dY(cr[i]);
}cr.length=0;
}return this;
},getParent:function(){return this.__dU||null;
},insertInto:function(parent,cs){parent.__dX(this);

if(cs==null){parent.__dS.push(this);
}else{qx.lang.Array.insertAt(this.__dS,this,cs);
}return this;
},insertBefore:function(ct){var parent=ct.__dU;
parent.__dX(this);
qx.lang.Array.insertBefore(parent.__dS,this,ct);
return this;
},insertAfter:function(cu){var parent=cu.__dU;
parent.__dX(this);
qx.lang.Array.insertAfter(parent.__dS,this,cu);
return this;
},moveTo:function(cv){var parent=this.__dU;
parent.__ea(this);
var cw=parent.__dS.indexOf(this);

if(cw===cv){throw new Error("Could not move to same index!");
}else if(cw<cv){cv--;
}qx.lang.Array.removeAt(parent.__dS,cw);
qx.lang.Array.insertAt(parent.__dS,this,cv);
return this;
},moveBefore:function(cx){var parent=this.__dU;
return this.moveTo(parent.__dS.indexOf(cx));
},moveAfter:function(cy){var parent=this.__dU;
return this.moveTo(parent.__dS.indexOf(cy)+1);
},free:function(){var parent=this.__dU;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dS){return;
}parent.__dY(this);
qx.lang.Array.remove(parent.__dS,this);
return this;
},getDomElement:function(){return this.__dF||null;
},getNodeName:function(){return this.__dw;
},setNodeName:function(name){this.__dw=name;
},setRoot:function(cz){this.__dG=cz;
},useMarkup:function(cA){if(this.__dF){throw new Error("Could not overwrite existing element!");
}if((qx.core.Environment.get(P)==Q)){var cB=document.createElement(f);
}else{var cB=qx.bom.Element.getHelperElement();
}cB.innerHTML=cA;
this.useElement(cB.firstChild);
return this.__dF;
},useElement:function(cC){if(this.__dF){throw new Error("Could not overwrite existing element!");
}this.__dF=cC;
this.__dF.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cE=this.getAttribute(v);

if(cE>=1){return true;
}var cD=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cE>=0&&cD[this.__dw]){return true;
}return false;
},setSelectable:function(cF){this.setAttribute(o,cF?G:w);
var cG=qx.core.Environment.get(u);

if(cG){this.setStyle(cG,cF?N:qx.core.Environment.get(E));
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__dw];
},include:function(){if(this.__dH){return;
}delete this.__dH;

if(this.__dU){this.__dU._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__dH){return;
}this.__dH=false;

if(this.__dU){this.__dU._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__dH===true;
},show:function(){if(this.__dI){return;
}
if(this.__dF){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__dU){this.__dU._scheduleChildrenUpdate();
}delete this.__dI;
},hide:function(){if(!this.__dI){return;
}
if(this.__dF){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__dI=false;
},isVisible:function(){return this.__dI===true;
},scrollChildIntoViewX:function(cH,cI,cJ){var cK=this.__dF;
var cL=cH.getDomElement();

if(cJ!==false&&cK&&cK.offsetWidth&&cL&&cL.offsetWidth){qx.bom.element.Scroll.intoViewX(cL,cK,cI);
}else{this.__dJ={element:cH,align:cI};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dL;
},scrollChildIntoViewY:function(cM,cN,cO){var cP=this.__dF;
var cQ=cM.getDomElement();

if(cO!==false&&cP&&cP.offsetWidth&&cQ&&cQ.offsetWidth){qx.bom.element.Scroll.intoViewY(cQ,cP,cN);
}else{this.__dK={element:cM,align:cN};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dM;
},scrollToX:function(x,cR){var cS=this.__dF;

if(cR!==true&&cS&&cS.offsetWidth){cS.scrollLeft=x;
delete this.__dL;
}else{this.__dL=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dJ;
},getScrollX:function(){var cT=this.__dF;

if(cT){return cT.scrollLeft;
}return this.__dL||0;
},scrollToY:function(y,cU){var cV=this.__dF;

if(cU!==true&&cV&&cV.offsetWidth){cV.scrollTop=y;
delete this.__dM;
}else{this.__dM=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dK;
},getScrollY:function(){var cW=this.__dF;

if(cW){return cW.scrollTop;
}return this.__dM||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(O,this.__ec,this);
},enableScrolling:function(){this.removeListener(O,this.__ec,this);
},__eb:null,__ec:function(e){if(!this.__eb){this.__eb=true;
this.__dF.scrollTop=0;
this.__dF.scrollLeft=0;
delete this.__eb;
}},getTextSelection:function(){var cX=this.__dF;

if(cX){return qx.bom.Selection.get(cX);
}return null;
},getTextSelectionLength:function(){var cY=this.__dF;

if(cY){return qx.bom.Selection.getLength(cY);
}return null;
},getTextSelectionStart:function(){var da=this.__dF;

if(da){return qx.bom.Selection.getStart(da);
}return null;
},getTextSelectionEnd:function(){var dc=this.__dF;

if(dc){return qx.bom.Selection.getEnd(dc);
}return null;
},setTextSelection:function(dd,de){var df=this.__dF;

if(df){qx.bom.Selection.set(df,dd,de);
return;
}qx.html.Element.__dz[this.toHashCode()]={element:this,start:dd,end:de};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var dg=this.__dF;

if(dg){qx.bom.Selection.clear(dg);
}delete qx.html.Element.__dz[this.toHashCode()];
},__ed:function(dh,di){var dj=qx.html.Element._actions;
dj.push({type:dh,element:this,args:di||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__ed(D);
},blur:function(){this.__ed(H);
},activate:function(){this.__ed(J);
},deactivate:function(){this.__ed(t);
},capture:function(dk){this.__ed(s,[dk!==false]);
},releaseCapture:function(){this.__ed(q);
},setStyle:function(dl,dm,dn){if(!this.__dx){this.__dx={};
}
if(this.__dx[dl]==dm){return;
}
if(dm==null){delete this.__dx[dl];
}else{this.__dx[dl]=dm;
}if(this.__dF){if(dn){qx.bom.element.Style.set(this.__dF,dl,dm);
return this;
}if(!this.__dN){this.__dN={};
}this.__dN[dl]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(dp,dq){var dr=qx.bom.element.Style;

if(!this.__dx){this.__dx={};
}
if(this.__dF){if(!this.__dN){this.__dN={};
}
for(var dt in dp){var ds=dp[dt];

if(this.__dx[dt]==ds){continue;
}
if(ds==null){delete this.__dx[dt];
}else{this.__dx[dt]=ds;
}if(dq){dr.set(this.__dF,dt,ds);
continue;
}this.__dN[dt]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var dt in dp){var ds=dp[dt];

if(this.__dx[dt]==ds){continue;
}
if(ds==null){delete this.__dx[dt];
}else{this.__dx[dt]=ds;
}}}return this;
},removeStyle:function(du,dv){this.setStyle(du,null,dv);
},getStyle:function(dw){return this.__dx?this.__dx[dw]:null;
},getAllStyles:function(){return this.__dx||null;
},setAttribute:function(dx,dy,dz){if(!this.__dy){this.__dy={};
}
if(this.__dy[dx]==dy){return;
}
if(dy==null){delete this.__dy[dx];
}else{this.__dy[dx]=dy;
}if(this.__dF){if(dz){qx.bom.element.Attribute.set(this.__dF,dx,dy);
return this;
}if(!this.__dO){this.__dO={};
}this.__dO[dx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dA,dB){for(var dC in dA){this.setAttribute(dC,dA[dC],dB);
}return this;
},removeAttribute:function(dD,dE){this.setAttribute(dD,null,dE);
},getAttribute:function(dF){return this.__dy?this.__dy[dF]:null;
},_applyProperty:function(name,dG){},_setProperty:function(dH,dI,dJ){if(!this.__dQ){this.__dQ={};
}
if(this.__dQ[dH]==dI){return;
}
if(dI==null){delete this.__dQ[dH];
}else{this.__dQ[dH]=dI;
}if(this.__dF){if(dJ){this._applyProperty(dH,dI);
return this;
}if(!this.__dP){this.__dP={};
}this.__dP[dH]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dK,dL){this._setProperty(dK,null,dL);
},_getProperty:function(dM){var dN=this.__dQ;

if(!dN){return null;
}var dO=dN[dM];
return dO==null?null:dO;
},addListener:function(dP,dQ,self,dR){if(this.$$disposed){return null;
}
if(qx.core.Environment.get(k)){var dS=I+dP+d+C+this+j;
this.assertString(dP,dS+a);
this.assertFunction(dQ,dS+c);

if(self!==undefined){this.assertObject(self,h);
}
if(dR!==undefined){this.assertBoolean(dR,g);
}}
if(this.__dF){return qx.event.Registration.addListener(this.__dF,dP,dQ,self,dR);
}
if(!this.__dR){this.__dR={};
}
if(dR==null){dR=false;
}var dT=qx.event.Manager.getNextUniqueId();
var dU=dP+(dR?K:M)+dT;
this.__dR[dU]={type:dP,listener:dQ,self:self,capture:dR,unique:dT};
return dU;
},removeListener:function(dV,dW,self,dX){if(this.$$disposed){return null;
}
if(qx.core.Environment.get(k)){var dY=n+dV+d+r+this+j;
this.assertString(dV,dY+a);
this.assertFunction(dW,dY+c);

if(self!==undefined){this.assertObject(self,h);
}
if(dX!==undefined){this.assertBoolean(dX,g);
}}
if(this.__dF){qx.event.Registration.removeListener(this.__dF,dV,dW,self,dX);
}else{var eb=this.__dR;
var ea;

if(dX==null){dX=false;
}
for(var ec in eb){ea=eb[ec];
if(ea.listener===dW&&ea.self===self&&ea.capture===dX&&ea.type===dV){delete eb[ec];
break;
}}}return this;
},removeListenerById:function(ed){if(this.$$disposed){return null;
}
if(this.__dF){qx.event.Registration.removeListenerById(this.__dF,ed);
}else{delete this.__dR[ed];
}return this;
},hasListener:function(ee,ef){if(this.$$disposed){return false;
}
if(this.__dF){return qx.event.Registration.hasListener(this.__dF,ee,ef);
}var eh=this.__dR;
var eg;

if(ef==null){ef=false;
}
for(var ei in eh){eg=eh[ei];
if(eg.capture===ef&&eg.type===ee){return true;
}}return false;
}},defer:function(ej){ej.__ee=new qx.util.DeferredCall(ej.flush,ej);
},destruct:function(){var ek=this.__dF;

if(ek){qx.event.Registration.getManager(ek).removeAllListeners(ek);
ek.$$element=b;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dU;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(B);
this.__dy=this.__dx=this.__dR=this.__dQ=this.__dO=this.__dN=this.__dP=this.__dF=this.__dU=this.__dJ=this.__dK=null;
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dv=d;
this.__ef={};
qx.event.handler.Appear.__eg[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__eg:{},refresh:function(){var e=this.__eg;

for(var f in e){e[f].refresh();
}}},members:{__dv:null,__ef:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__ef;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__ef;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__ef;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__dv.dispatchEvent(w,t);
}}}},destruct:function(){this.__dv=this.__ef=null;
delete qx.event.handler.Appear.__eg[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var c="qx.debug",b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(d){this._manager=d;
},members:{_getParent:function(e){throw new Error("Missing implementation");
},canDispatchEvent:function(f,event,g){return event.getBubbles();
},dispatchEvent:function(h,event,k){var parent=h;
var t=this._manager;
var q,x;
var o;
var s,v;
var u;
var w=[];
q=t.getListeners(h,k,true);
x=t.getListeners(h,k,false);

if(q){w.push(q);
}
if(x){w.push(x);
}var parent=this._getParent(h);
var m=[];
var l=[];
var n=[];
var r=[];
while(parent!=null){q=t.getListeners(parent,k,true);

if(q){n.push(q);
r.push(parent);
}x=t.getListeners(parent,k,false);

if(x){m.push(x);
l.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=n.length-1;i>=0;i--){u=r[i];
event.setCurrentTarget(u);
o=n[i];

for(var j=0,p=o.length;j<p;j++){s=o[j];
v=s.context||u;

if(qx.core.Environment.get(c)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+u+"'is already disposed.");
}}s.handler.call(v,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(h);

for(var i=0,y=w.length;i<y;i++){o=w[i];

for(var j=0,p=o.length;j<p;j++){s=o[j];
v=s.context||h;

if(qx.core.Environment.get(c)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+h+"'is already disposed.");
}}s.handler.call(v,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,y=m.length;i<y;i++){u=l[i];
event.setCurrentTarget(u);
o=m[i];

for(var j=0,p=o.length;j<p;j++){s=o[j];
v=s.context||u;

if(qx.core.Environment.get(c)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+u+"'is already disposed.");
}}s.handler.call(v,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
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
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__dv=b;
this.__cy=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dv:null,__cy:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__dv=this.__cy=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__dv=u;
this.__cy=u.getWindow();
this.__dG=this.__cy.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eh:null,__ei:null,__ej:null,__ek:null,__el:null,__dv:null,__cy:null,__dG:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===d?function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===d?function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__em:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__cy,b,qx.event.type.Data,[E||D.type]);
},__en:function(){var H=[this.__cy,this.__dG,this.__dG.body];
var I=this.__cy;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__eh=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,q,this.__eh);
Event.addNativeListener(this.__dG,t,this.__eh);
Event.addNativeListener(this.__dG,r,this.__eh);
Event.addNativeListener(this.__dG,n,this.__eh);
Event.addNativeListener(this.__dG,p,this.__eh);
},_initMoveObserver:function(){this.__ei=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,j,this.__ei);
Event.addNativeListener(this.__dG,l,this.__ei);
Event.addNativeListener(this.__dG,k,this.__ei);
},_initWheelObserver:function(){this.__ej=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__en();
qx.bom.Event.addNativeListener(J.target,J.type,this.__ej);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,q,this.__eh);
Event.removeNativeListener(this.__dG,t,this.__eh);
Event.removeNativeListener(this.__dG,r,this.__eh);
Event.removeNativeListener(this.__dG,n,this.__eh);
Event.removeNativeListener(this.__dG,p,this.__eh);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,j,this.__ei);
Event.removeNativeListener(this.__dG,l,this.__ei);
Event.removeNativeListener(this.__dG,k,this.__ei);
},_stopWheelObserver:function(){var K=this.__en();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__ej);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__em(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__eo){this.__eo(M,N,O);
}
if(this.__eq){this.__eq(M,N,O);
}this.__em(M,N,O);

if(this.__ep){this.__ep(M,N,O);
}
if(this.__er){this.__er(M,N,O);
}this.__ek=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__em(P,o);
}),__eo:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__em(Q,t,S);
}}},"default":null}),__ep:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__em(T,p,V);
}},"default":null}),__eq:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__ek==r){this.__em(W,q,Y);
}else if(X==n){this.__em(W,r,Y);
}},"default":null}),__er:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__el=bc;
break;
case t:if(bc!==this.__el){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__el);
this.__em(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dv=this.__cy=this.__dG=this.__el=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var e="os.name",d="opera",c="engine.name",b="qx.event.type.Dom",a="osx";
qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(f,g){var g=qx.event.type.Native.prototype._cloneNativeEvent.call(this,f,g);
g.shiftKey=f.shiftKey;
g.ctrlKey=f.ctrlKey;
g.altKey=f.altKey;
g.metaKey=f.metaKey;
return g;
},getModifiers:function(){var i=0;
var h=this._native;

if(h.shiftKey){i|=qx.event.type.Dom.SHIFT_MASK;
}
if(h.ctrlKey){i|=qx.event.type.Dom.CTRL_MASK;
}
if(h.altKey){i|=qx.event.type.Dom.ALT_MASK;
}
if(h.metaKey){i|=qx.event.type.Dom.META_MASK;
}return i;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(e)==a&&qx.core.Environment.get(c)!=d){return this._native.metaKey;
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
l.wheelDeltaX=k.wheelDeltaX;
l.wheelDeltaY=k.wheelDeltaY;
l.detail=k.detail;
l.axis=k.axis;
l.wheelX=k.wheelX;
l.wheelY=k.wheelY;
l.HORIZONTAL_AXIS=k.HORIZONTAL_AXIS;
l.srcElement=k.srcElement;
l.target=k.target;
return l;
},__es:{0:j,2:i,1:h},__et:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__es[this._native.button]||g;
}else{return this.__et[this._native.button]||g;
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
(function(){var l="engine.version",k="os.name",j="engine.name",i="x",h="osx",g="win",f="qx.dynamicmousewheel",d="chrome",c="qx.event.type.MouseWheel",b="browser.name",a="y";
qx.Class.define(c,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__eu:function(m){var n=Math.abs(m);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;
this.__ev();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;
this.__ev();
}if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);
}var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;
return p<0?Math.min(p,-1):Math.max(p,1);
},__ev:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;
var t=qx.event.type.MouseWheel.MINSCROLL||q;

if(q<=t){return;
}var r=q-t;
var s=(q/r)*Math.log(r);

if(s==0){s=1;
}qx.event.type.MouseWheel.FACTOR=6/s;
},getWheelDelta:function(u){var e=this._native;
if(u===undefined){if(v===undefined){var v=-e.wheelDelta;

if(e.wheelDelta===undefined){v=e.detail;
}}return this.__ew(v);
}if(u===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__ew(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__ew(e.detail);
}}return x;
}if(u===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__ew(-e.wheelDeltaY):0;
}else{y=this.__ew(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__ew(e.detail);
}}return y;
}return 0;
},__ew:function(w){if(qx.core.Environment.get(f)){return this.__eu(w);
}else{var z=qx.core.Environment.select(j,{"default":function(){return w/40;
},"gecko":function(){return w;
},"webkit":function(){if(qx.core.Environment.get(b)==d){if(qx.core.Environment.get(k)==h){return w/60;
}else{return w/120;
}}else{if(qx.core.Environment.get(k)==g){var A=120;
if(parseFloat(qx.core.Environment.get(l))==533.16){A=1200;
}}else{A=40;
if(parseFloat(qx.core.Environment.get(l))==533.16||parseFloat(qx.core.Environment.get(l))==533.17||parseFloat(qx.core.Environment.get(l))==533.18){A=1200;
}}return w/A;
}}});
return z.call(this);
}}}});
})();
(function(){var g="html.element.contains",f="html.element.compareDocumentPosition",e="qx.dom.Hierarchy",d="previousSibling",c="nextSibling",b="parentNode",a="*";
qx.Class.define(e,{statics:{getNodeIndex:function(h){var i=0;

while(h&&(h=h.previousSibling)){i++;
}return i;
},getElementIndex:function(j){var k=0;
var l=qx.dom.Node.ELEMENT;

while(j&&(j=j.previousSibling)){if(j.nodeType==l){k++;
}}return k;
},getNextElementSibling:function(m){while(m&&(m=m.nextSibling)&&!qx.dom.Node.isElement(m)){continue;
}return m||null;
},getPreviousElementSibling:function(n){while(n&&(n=n.previousSibling)&&!qx.dom.Node.isElement(n)){continue;
}return n||null;
},contains:function(o,p){if(qx.core.Environment.get(g)){if(qx.dom.Node.isDocument(o)){var q=qx.dom.Node.getDocument(p);
return o&&q==o;
}else if(qx.dom.Node.isDocument(p)){return false;
}else{return o.contains(p);
}}else if(qx.core.Environment.get(f)){return !!(o.compareDocumentPosition(p)&16);
}else{while(p){if(o==p){return true;
}p=p.parentNode;
}return false;
}},isRendered:function(r){var s=r.ownerDocument||r.document;

if(qx.core.Environment.get(g)){if(!r.parentNode||!r.offsetParent){return false;
}return s.body.contains(r);
}else if(qx.core.Environment.get(f)){return !!(s.compareDocumentPosition(r)&16);
}else{while(r){if(r==s.body){return true;
}r=r.parentNode;
}return false;
}},isDescendantOf:function(t,u){return this.contains(u,t);
},getCommonParent:function(v,w){if(v===w){return v;
}
if(qx.core.Environment.get(g)){while(v&&qx.dom.Node.isElement(v)){if(v.contains(w)){return v;
}v=v.parentNode;
}return null;
}else{var x={};
var A=qx.core.ObjectRegistry;
var z,y;

while(v||w){if(v){z=A.toHashCode(v);

if(x[z]){return x[z];
}x[z]=v;
v=v.parentNode;
}
if(w){y=A.toHashCode(w);

if(x[y]){return x[y];
}x[y]=w;
w=w.parentNode;
}}return null;
}},getAncestors:function(B){return this._recursivelyCollect(B,b);
},getChildElements:function(C){C=C.firstChild;

if(!C){return [];
}var D=this.getNextSiblings(C);

if(C.nodeType===1){D.unshift(C);
}return D;
},getDescendants:function(E){return qx.lang.Array.fromCollection(E.getElementsByTagName(a));
},getFirstDescendant:function(F){F=F.firstChild;

while(F&&F.nodeType!=1){F=F.nextSibling;
}return F;
},getLastDescendant:function(G){G=G.lastChild;

while(G&&G.nodeType!=1){G=G.previousSibling;
}return G;
},getPreviousSiblings:function(H){return this._recursivelyCollect(H,d);
},getNextSiblings:function(I){return this._recursivelyCollect(I,c);
},_recursivelyCollect:function(J,K){var L=[];

while(J=J[K]){if(J.nodeType==1){L.push(J);
}}return L;
},getSiblings:function(M){return this.getPreviousSiblings(M).reverse().concat(this.getNextSiblings(M));
},isEmpty:function(N){N=N.firstChild;

while(N){if(N.nodeType===qx.dom.Node.ELEMENT||N.nodeType===qx.dom.Node.TEXT){return false;
}N=N.nextSibling;
}return true;
},cleanWhitespace:function(O){var P=O.firstChild;

while(P){var Q=P.nextSibling;

if(P.nodeType==3&&!/\S/.test(P.nodeValue)){O.removeChild(P);
}P=Q;
}}}});
})();
(function(){var m="",l="audio",k="video",j="undefined",i="number",h="function",g="html.video.h264",f="html.element.contains",d='video/ogg; codecs="theora, vorbis"',c="html.console",bk="html.xul",bj="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",bi="html.video.ogg",bh="http://www.w3.org/TR/SVG11/feature#BasicStructure",bg="html.storage.local",bf="div",be='audio',bd='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',bc="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",bb="html.audio",t="url(#default#VML)",u="audio/mpeg",r="org.w3c.dom.svg",s="html.classlist",p="html.video",q="html.geolocation",n="DOMTokenList",o="html.storage.session",y="1.1",z="html.image.naturaldimensions",H="html.audio.aif",F="audio/x-wav",P='<v:shape id="vml_flag1" adj="1" />',K="html.canvas",W="audio/ogg",U="html.element.compareDocumentPosition",B="audio/x-aiff",ba="html.audio.au",Y="img",X="html.xpath",A="qx.bom.client.Html",D='video',E="span",G="html.element.textcontent",I="html.audio.mp3",L="html.vml",R="html.svg",V="html.audio.ogg",w="label",x='video/webm; codecs="vp8, vorbis"',C="html.dataurl",O="html.webworker",N="html.dataset",M="1.0",T="html.audio.wav",S="html.filereader",J="audio/basic",Q="html.video.webm",b="object";
qx.Bootstrap.define(A,{statics:{getWebWorker:function(){return window.Worker!=null;
},getFileReader:function(){return window.FileReader!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(be).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(W);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(u);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(F);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(J);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(B);
},getVideo:function(){return !!document.createElement(D).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return m;
}var v=document.createElement(k);
return v.canPlayType(d);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return m;
}var v=document.createElement(k);
return v.canPlayType(bd);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return m;
}var v=document.createElement(k);
return v.canPlayType(x);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(bl){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(bm){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===n);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(bj,w);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(r,M)||document.implementation.hasFeature(bh,y));
},getVml:function(){var bn=document.createElement(bf);
document.body.appendChild(bn);
bn.innerHTML=P;
bn.firstChild.style.behavior=t;
var bo=typeof bn.firstChild.adj==b;
document.body.removeChild(bn);
return bo;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(bp){var bq=new Image();
bq.onload=bq.onerror=function(){window.setTimeout(function(){bp.call(null,(bq.width==1&&bq.height==1));
},0);
};
bq.src=bc;
},getDataset:function(){return !!document.documentElement.dataset;
},getContains:function(){return (typeof document.documentElement.contains!==j);
},getCompareDocumentPosition:function(){return (typeof document.documentElement.compareDocumentPosition===h);
},getTextContent:function(){var br=document.createElement(E);
return (typeof br.textContent!==j);
},getConsole:function(){return typeof window.console!==j;
},getNaturalDimensions:function(){var bs=document.createElement(Y);
return typeof bs.naturalHeight===i&&typeof bs.naturalWidth===i;
}},defer:function(bt){qx.core.Environment.add(O,bt.getWebWorker);
qx.core.Environment.add(S,bt.getFileReader);
qx.core.Environment.add(q,bt.getGeoLocation);
qx.core.Environment.add(bb,bt.getAudio);
qx.core.Environment.add(V,bt.getAudioOgg);
qx.core.Environment.add(I,bt.getAudioMp3);
qx.core.Environment.add(T,bt.getAudioWav);
qx.core.Environment.add(ba,bt.getAudioAu);
qx.core.Environment.add(H,bt.getAudioAif);
qx.core.Environment.add(p,bt.getVideo);
qx.core.Environment.add(bi,bt.getVideoOgg);
qx.core.Environment.add(g,bt.getVideoH264);
qx.core.Environment.add(Q,bt.getVideoWebm);
qx.core.Environment.add(bg,bt.getLocalStorage);
qx.core.Environment.add(o,bt.getSessionStorage);
qx.core.Environment.add(s,bt.getClassList);
qx.core.Environment.add(X,bt.getXPath);
qx.core.Environment.add(bk,bt.getXul);
qx.core.Environment.add(K,bt.getCanvas);
qx.core.Environment.add(R,bt.getSvg);
qx.core.Environment.add(L,bt.getVml);
qx.core.Environment.add(N,bt.getDataset);
qx.core.Environment.addAsync(C,bt.getDataUrl);
qx.core.Environment.add(f,bt.getContains);
qx.core.Environment.add(U,bt.getCompareDocumentPosition);
qx.core.Environment.add(G,bt.getTextContent);
qx.core.Environment.add(c,bt.getConsole);
qx.core.Environment.add(z,bt.getNaturalDimensions);
}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__dv=by;
this.__cy=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__dG=this.__cy;
}else{this.__dG=this.__cy.document.documentElement;
}this.__ex={};
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
}}},members:{__ey:null,__dv:null,__cy:null,__dG:null,__ex:null,__ez:null,__eA:null,__eB:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__eC();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__dv.dispatchEvent(bL,event);
}if(this.__cy){qx.event.Registration.fireEvent(this.__cy,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__eC();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__dv.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__cy){qx.event.Registration.fireEvent(this.__cy,s,qx.event.type.Data,[bN]);
}},__eC:function(){var bR=this.__dv.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__dv.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__ey=qx.lang.Function.listener(this.__eD,this);
this.__eB=qx.lang.Function.listener(this.__eF,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,i,this.__ey);
Event.addNativeListener(this.__dG,m,this.__ey);
Event.addNativeListener(this.__dG,k,this.__eB);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,i,this.__ey);
Event.removeNativeListener(this.__dG,m,this.__ey);
Event.removeNativeListener(this.__dG,k,this.__eB);

for(var bU in (this.__eA||{})){var bT=this.__eA[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__eA);
},__eD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__ex[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__ex[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__ex[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__ex[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__eE(ca.target,cd,ce);
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
}}this.__ex[ci]=ch;
}},"opera":function(cj){this.__ez=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__eE:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__eA){this.__eA={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__eA[co]){return;
}var self=this;
this.__eA[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__eF(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__eA[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__eF:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

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
if(cB!=this.__ez){this._idealKeyHandler(0,this.__ez,cA,cz);
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
this.__ez=this.__dv=this.__cy=this.__dG=this.__ex=null;
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
(function(){var j="engine.name",i="mousedown",h="mouseup",g="blur",f="focus",e="on",d="selectstart",c="DOMFocusOut",b="focusin",a="focusout",z="DOMFocusIn",y="draggesture",x="qx.event.handler.Focus",w="_applyFocus",v="deactivate",u="textarea",t="_applyActive",s='character',r="input",q="qxSelectable",o="tabIndex",p="off",m="activate",n="mshtml",k="qxKeepFocus",l="qxKeepActive";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);
this._manager=A;
this._window=A.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eG:null,__eH:null,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eN:null,__eO:null,__eP:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
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
}},tryActivate:function(S){var T=this.__fe(S);

if(T){this.setActive(T);
}},__em:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__eQ:function(){if(this._windowFocused){this._windowFocused=false;
this.__em(this._window,null,g,false);
}},__eR:function(){if(!this._windowFocused){this._windowFocused=true;
this.__em(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eI=qx.lang.Function.listener(this.__eW,this);
this.__eJ=qx.lang.Function.listener(this.__eV,this);
this.__eK=qx.lang.Function.listener(this.__eS,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.addNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.addNativeListener(this._window,g,this.__eJ,true);
qx.bom.Event.addNativeListener(this._window,y,this.__eK,true);
},"mshtml":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eM=qx.lang.Function.listener(this.__eT,this);
this.__eN=qx.lang.Function.listener(this.__eU,this);
this.__eL=qx.lang.Function.listener(this.__fb,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG);
qx.bom.Event.addNativeListener(this._document,h,this.__eH);
qx.bom.Event.addNativeListener(this._document,b,this.__eM);
qx.bom.Event.addNativeListener(this._document,a,this.__eN);
qx.bom.Event.addNativeListener(this._document,d,this.__eL);
},"webkit":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eN=qx.lang.Function.listener(this.__eU,this);
this.__eI=qx.lang.Function.listener(this.__eW,this);
this.__eJ=qx.lang.Function.listener(this.__eV,this);
this.__eL=qx.lang.Function.listener(this.__fb,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.addNativeListener(this._document,d,this.__eL,false);
qx.bom.Event.addNativeListener(this._window,c,this.__eN,true);
qx.bom.Event.addNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.addNativeListener(this._window,g,this.__eJ,true);
},"opera":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eM=qx.lang.Function.listener(this.__eT,this);
this.__eN=qx.lang.Function.listener(this.__eU,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.addNativeListener(this._window,z,this.__eM,true);
qx.bom.Event.addNativeListener(this._window,c,this.__eN,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__eJ,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__eK,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH);
qx.bom.Event.removeNativeListener(this._document,b,this.__eM);
qx.bom.Event.removeNativeListener(this._document,a,this.__eN);
qx.bom.Event.removeNativeListener(this._document,d,this.__eL);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__eL,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__eN,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__eJ,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__eM,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__eN,true);
}}),__eS:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__ff(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__eT:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__eR();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__fd(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__eR();

if(this.__eO){this.setFocus(this.__eO);
delete this.__eO;
}
if(this.__eP){this.setActive(this.__eP);
delete this.__eP;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__ff(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__eU:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__eQ();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__eQ();
this.__eO=this.getFocus();
this.__eP=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__eV:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__eQ();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__eQ();
this.__eO=this.getFocus();
this.__eP=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__eW:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__eR();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__eR();

if(this.__eO){this.setFocus(this.__eO);
delete this.__eO;
}
if(this.__eP){this.setActive(this.__eP);
delete this.__eP;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__eX:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__fd(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__fd(bB);

if(bA){if(!this.__ff(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__ff(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__fd(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__fd(bK);

if(!this.__ff(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__eY:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__fa(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__fa(bQ));
},"default":null})),__fa:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__fb:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__ff(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__fc:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__fd:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__fc(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__fe:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__ff:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__em(cg,cf,v,true);
}
if(cf){this.__em(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__em(ci,ch,a,true);
}
if(ch){this.__em(ch,ci,b,true);
}if(ci){this.__em(ci,ch,g,false);
}
if(ch){this.__em(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fg=null;
},defer:function(cj){qx.event.Registration.addHandler(cj);
var ck=cj.FOCUSABLE_ELEMENTS;

for(var cl in ck){ck[cl.toUpperCase()]=1;
}}});
})();
(function(){var k="engine.name",j="character",i="EndToEnd",h="input",g="StartToStart",f="textarea",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Environment.select(k,{"mshtml":function(l){return l.selection;
},"default":function(m){return qx.dom.Node.getWindow(m).getSelection();
}}),get:qx.core.Environment.select(k,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));
return o.text;
},"default":function(p){if(this.__fh(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__fh(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__fh(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__fh(A)){var F=qx.bom.Range.get();
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
}},"gecko|webkit":function(K){if(this.__fh(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__fh(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__fh(O)){var T=qx.bom.Range.get();
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
}},"gecko|webkit":function(Y){if(this.__fh(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__fh(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__fh:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
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
(function(){var l="mshtml",k="event.pointer",j="onhashchange",i="event.help",h="event.touch",g="opera",f="event.hashchange",e="onhelp",d="pointerEvents",c="documentMode",a="qx.bom.client.Event",b="ontouchstart";
qx.Bootstrap.define(a,{statics:{getTouch:function(){return (b in window);
},getPointer:function(){if(d in document.documentElement.style){var m=qx.bom.client.Engine.getName();
return m!=g&&m!=l;
}return false;
},getHelp:function(){return (e in document);
},getHashChange:function(){var n=qx.bom.client.Engine.getName();
var o=j in window;
return (n!==l&&o)||(n===l&&c in document&&document.documentMode>=8&&o);
}},defer:function(p){qx.core.Environment.add(h,p.getTouch);
qx.core.Environment.add(k,p.getPointer);
qx.core.Environment.add(i,p.getHelp);
qx.core.Environment.add(f,p.getHashChange);
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__dv=f;
this.__cy=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dv:null,__cy:null,__fi:null,__fj:null,__fk:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__fk=qx.lang.Function.listener(this._onNative,this);
this.__fi=qx.bom.Event.supportsEvent(this.__cy,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__cy,this.__fi,this.__fk);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cy,this.__fi,this.__fk);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__fj!=p){this.__fj=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__cy,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__dv=this.__cy=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__fl:null,__fm:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__fl=d;
this.__fm=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__fl=this.__fl;
g.__fm=this.__fm;
return g;
},getOrientation:function(){return this.__fl;
},isLandscape:function(){return this.__fm==c;
},isPortrait:function(){return this.__fm==a;
}}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__dv=u;
this.__cy=u.getWindow();
this.__dG=this.__cy.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__fn:null,__fo:null,__dv:null,__cy:null,__dG:null,__fp:null,__fq:null,__fr:null,__fs:null,__ft:false,__fu:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__fv:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__em:function(F,G,H,I){if(!H){H=this.__fv(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__cy,h,qx.event.type.Data,[G]);
},__fw:function(J,K,L){if(!L){L=this.__fv(J);
}var K=K||J.type;

if(K==r){this.__fx(J,L);
}else if(K==q){this.__fy(J,L);
}else if(K==s){this.__fz(J,L);
}},__fx:function(M,N){var O=M.changedTouches[0];
this.__fp=O.screenX;
this.__fq=O.screenY;
this.__fr=new Date().getTime();
this.__fs=M.changedTouches.length===1;
},__fy:function(P,Q){if(this.__fs&&P.changedTouches.length>1){this.__fs=false;
}},__fz:function(R,S){if(this.__fs){var T=R.changedTouches[0];
var V={x:T.screenX-this.__fp,y:T.screenY-this.__fq};
var W=qx.event.handler.Touch;

if(this.__fu==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__em(R,f,S,qx.event.type.Tap);
}else{var U=this.__fA(R,S,V);

if(U){R.swipe=U;
this.__em(R,c,S,qx.event.type.Swipe);
}}}},__fA:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__fr;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__fr,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__fB:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__fC(bi)){this.__ft=true;
}else if(bj==s){this.__ft=false;
}var bm=this.__fD(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__fC:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__fD:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__fv(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__fn=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,r,this.__fn);
Event.addNativeListener(this.__dG,q,this.__fn);
Event.addNativeListener(this.__dG,s,this.__fn);
Event.addNativeListener(this.__dG,m,this.__fn);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__fo=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,k,this.__fo);
Event.addNativeListener(this.__dG,o,this.__fo);
Event.addNativeListener(this.__dG,l,this.__fo);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,r,this.__fn);
Event.removeNativeListener(this.__dG,q,this.__fn);
Event.removeNativeListener(this.__dG,s,this.__fn);
Event.removeNativeListener(this.__dG,m,this.__fn);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,k,this.__fo);
Event.removeNativeListener(this.__dG,o,this.__fo);
Event.removeNativeListener(this.__dG,l,this.__fo);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__ft){return;
}var bt=this.__fB(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__fu=this.__fv(bu);
}this.__em(bu,bv);
this.__fw(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__dv=this.__cy=this.__dG=this.__fu=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
})();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);
e.pageX=d.pageX;
e.pageY=d.pageY;
e.offsetX=d.offsetX;
e.offsetY=d.offsetY;
e.layerX=(d.offsetX||d.layerX);
e.layerY=(d.offsetY||d.layerY);
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__fF().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__fE(f).pageX;
},getDocumentTop:function(g){return this.__fE(g).pageY;
},getScreenLeft:function(h){return this.__fE(h).screenX;
},getScreenTop:function(j){return this.__fE(j).screenY;
},getViewportLeft:function(k){return this.__fE(k).clientX;
},getViewportTop:function(l){return this.__fE(l).clientY;
},getIdentifier:function(m){return this.__fE(m).identifier;
},__fE:function(n){n=n==null?0:n;
return this.__fF()[n];
},__fF:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
return o;
},_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);
}}});
})();
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;
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
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Control",d="Shift",c="mousemove",b="move",a="mouseover",D="Alt",C="keyup",B="mouseup",A="keypress",z="dragend",y="on",x="mousedown",w="qxDraggable",v="Escape",u="drag",r="drop",s="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover",t="left";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(E){qx.core.Object.call(this);
this.__dv=E;
this.__dG=E.getWindow().document.documentElement;
this.__dv.addListener(this.__dG,x,this._onMouseDown,this);
this.__fQ();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__dv:null,__dG:null,__fG:null,__fH:null,__fI:null,__fJ:null,__fK:null,__e:null,__fL:null,__fM:null,__fN:false,__fO:0,__fP:0,canHandleEvent:function(F,G){},registerEvent:function(H,I,J){},unregisterEvent:function(K,L,M){},addType:function(N){this.__fI[N]=true;
},addAction:function(O){this.__fJ[O]=true;
},supportsType:function(P){return !!this.__fI[P];
},supportsAction:function(Q){return !!this.__fJ[Q];
},getData:function(R){if(!this.__fW||!this.__fG){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__fI[R]){throw new Error("Unsupported data type: "+R+"!");
}
if(!this.__e[R]){this.__fL=R;
this.__em(q,this.__fH,this.__fG,false);
}
if(!this.__e[R]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__e[R]||null;
},getCurrentAction:function(){return this.__fM;
},addData:function(S,T){this.__e[S]=T;
},getCurrentType:function(){return this.__fL;
},isSessionActive:function(){return this.__fN;
},__fQ:function(){this.__fI={};
this.__fJ={};
this.__fK={};
this.__e={};
},__fR:function(){if(this.__fH==null){return;
}var W=this.__fJ;
var U=this.__fK;
var V=null;

if(this.__fW){if(U.Shift&&U.Control&&W.alias){V=k;
}else if(U.Shift&&U.Alt&&W.copy){V=j;
}else if(U.Shift&&W.move){V=b;
}else if(U.Alt&&W.alias){V=k;
}else if(U.Control&&W.copy){V=j;
}else if(W.move){V=b;
}else if(W.copy){V=j;
}else if(W.alias){V=k;
}}
if(V!=this.__fM){this.__fM=V;
this.__em(o,this.__fH,this.__fG,false);
}},__em:function(X,Y,ba,bb,bc){var be=qx.event.Registration;
var bd=be.createEvent(X,qx.event.type.Drag,[bb,bc]);

if(Y!==ba){bd.setRelatedTarget(ba);
}return be.dispatchEvent(Y,bd);
},__fS:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(w)==y){return bf;
}bf=bf.parentNode;
}return null;
},__fT:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(s)==y){return bg;
}bg=bg.parentNode;
}return null;
},__fU:function(){this.__fH=null;
this.__dv.removeListener(this.__dG,c,this._onMouseMove,this,true);
this.__dv.removeListener(this.__dG,B,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__fQ();
},__fV:function(){if(this.__fN){this.__dv.removeListener(this.__dG,a,this._onMouseOver,this,true);
this.__dv.removeListener(this.__dG,h,this._onMouseOut,this,true);
this.__dv.removeListener(this.__dG,g,this._onKeyDown,this,true);
this.__dv.removeListener(this.__dG,C,this._onKeyUp,this,true);
this.__dv.removeListener(this.__dG,A,this._onKeyPress,this,true);
this.__em(z,this.__fH,this.__fG,false);
this.__fN=false;
}this.__fW=false;
this.__fG=null;
this.__fU();
},__fW:false,_onWindowBlur:function(e){this.__fV();
},_onKeyDown:function(e){var bh=e.getKeyIdentifier();

switch(bh){case D:case f:case d:if(!this.__fK[bh]){this.__fK[bh]=true;
this.__fR();
}}},_onKeyUp:function(e){var bi=e.getKeyIdentifier();

switch(bi){case D:case f:case d:if(this.__fK[bi]){this.__fK[bi]=false;
this.__fR();
}}},_onKeyPress:function(e){var bj=e.getKeyIdentifier();

switch(bj){case v:this.__fV();
}},_onMouseDown:function(e){if(this.__fN||e.getButton()!==t){return;
}var bk=this.__fS(e.getTarget());

if(bk){this.__fO=e.getDocumentLeft();
this.__fP=e.getDocumentTop();
this.__fH=bk;
this.__dv.addListener(this.__dG,c,this._onMouseMove,this,true);
this.__dv.addListener(this.__dG,B,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fW){this.__em(r,this.__fG,this.__fH,false,e);
}if(this.__fN){e.stopPropagation();
}this.__fV();
},_onMouseMove:function(e){if(this.__fN){if(!this.__em(u,this.__fH,this.__fG,true,e)){this.__fV();
}}else{if(Math.abs(e.getDocumentLeft()-this.__fO)>3||Math.abs(e.getDocumentTop()-this.__fP)>3){if(this.__em(n,this.__fH,this.__fG,true,e)){this.__fN=true;
this.__dv.addListener(this.__dG,a,this._onMouseOver,this,true);
this.__dv.addListener(this.__dG,h,this._onMouseOut,this,true);
this.__dv.addListener(this.__dG,g,this._onKeyDown,this,true);
this.__dv.addListener(this.__dG,C,this._onKeyUp,this,true);
this.__dv.addListener(this.__dG,A,this._onKeyPress,this,true);
var bl=this.__fK;
bl.Control=e.isCtrlPressed();
bl.Shift=e.isShiftPressed();
bl.Alt=e.isAltPressed();
this.__fR();
}else{this.__em(z,this.__fH,this.__fG,false);
this.__fU();
}}}},_onMouseOver:function(e){var bm=e.getTarget();
var bn=this.__fT(bm);

if(bn&&bn!=this.__fG){this.__fW=this.__em(m,bn,this.__fH,true,e);
this.__fG=bn;
this.__fR();
}},_onMouseOut:function(e){var bp=this.__fT(e.getTarget());
var bo=this.__fT(e.getRelatedTarget());

if(bp&&bp!==bo&&bp==this.__fG){this.__em(l,this.__fG,bo,false,e);
this.__fG=null;
this.__fW=false;
qx.event.Timer.once(this.__fR,this,0);
}}},destruct:function(){this.__fH=this.__fG=this.__dv=this.__dG=this.__fI=this.__fJ=this.__fK=this.__e=null;
},defer:function(bq){qx.event.Registration.addHandler(bq);
}});
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
(function(){var c="offline",b="online",a="qx.event.handler.Offline";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dv=d;
this.__cy=d.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dv:null,__cy:null,__fk:null,canHandleEvent:function(e,f){},registerEvent:function(g,h,i){},unregisterEvent:function(j,k,l){},_initObserver:function(){this.__fk=qx.lang.Function.listener(this._onNative,this);
qx.bom.Event.addNativeListener(this.__cy,c,this.__fk);
qx.bom.Event.addNativeListener(this.__cy,b,this.__fk);
},_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__cy,c,this.__fk);
qx.bom.Event.removeNativeListener(this.__cy,b,this.__fk);
},_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__cy,m.type,qx.event.type.Event,[]);
}),isOnline:function(){return !!this.__cy.navigator.onLine;
}},destruct:function(){this.__dv=null;
this._stopObserver();
delete qx.event.handler.Appear.__instances[this.$$hash];
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__gb:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__gc:{},__gd:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__gd[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__gd[t]=true;
}catch(e){qx.bom.Element.__gd[t]=false;
}}return qx.bom.Element.__gd[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__gc[w]){var v=qx.bom.Element.__gc[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__gc[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__gb;
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
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",A="'",z="htmlFor",y="longDesc",x="cellSpacing",w="frameBorder",v="='",u="useMap",t="innerText",s="innerHTML",r="tabIndex",p="dateTime",q="maxLength",n="html.element.textcontent",o="mshtml",l="cellPadding",m="browser.documentmode",k="colSpan";
qx.Class.define(e,{statics:{__ge:{names:{"class":b,"for":z,html:s,text:qx.core.Environment.get(n)?a:t,colspan:k,rowspan:d,valign:c,datetime:p,accesskey:f,tabindex:r,maxlength:q,readonly:g,longdesc:y,cellpadding:l,cellspacing:x,frameborder:w,usemap:u},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(B){var C=[];
var E=this.__ge.runtime;

for(var D in B){if(!E[D]){C.push(D,v,B[D],A);
}}return C.join(j);
},get:function(F,name){var H=this.__ge;
var G;
name=H.names[name]||name;
if(qx.core.Environment.get(h)==o&&parseInt(qx.core.Environment.get(m),10)<8&&H.original[name]){G=F.getAttribute(name,2);
}else if(H.property[name]){G=F[name];

if(typeof H.propertyDefault[name]!==i&&G==H.propertyDefault[name]){if(typeof H.bools[name]===i){return null;
}else{return G;
}}}else{G=F.getAttribute(name);
}if(H.bools[name]){return !!G;
}return G;
},set:function(I,name,J){if(typeof J===i){return;
}var K=this.__ge;
name=K.names[name]||name;
if(K.bools[name]){J=!!J;
}if(K.property[name]&&(!(I[name]===undefined)||K.qxProperties[name])){if(J==null){if(K.removeableProperties[name]){I.removeAttribute(name);
return;
}else if(typeof K.propertyDefault[name]!==i){J=K.propertyDefault[name];
}}I[name]=J;
}else{if(J===true){I.setAttribute(name,name);
}else if(J===false||J===null){I.removeAttribute(name);
}else{I.setAttribute(name,J);
}}},reset:function(L,name){this.set(L,name,null);
}}});
})();
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__cy=j.getWindow();
this.__cA=k;
j.addListener(this.__cy,f,this.releaseCapture,this);
j.addListener(this.__cy,e,this.releaseCapture,this);
j.addListener(this.__cy,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cA:null,__gf:null,__gg:true,__cy:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__gf&&this.__gh[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__gg||!qx.dom.Hierarchy.contains(this.__gf,o)){o=this.__gf;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__gh:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__gf===q&&this.__gg==r){return;
}
if(this.__gf){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__gg=r;
this.__gf=q;
this.__cA.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gf;
},releaseCapture:function(){var s=this.__gf;

if(!s){return;
}this.__gf=null;
this.__cA.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__gf=this.__cy=this.__cA=null;
},defer:function(w){qx.event.Registration.addDispatcher(w);
}});
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
if(C){L=E?{expr:K.pop(),set:f(E)}:s.find(K.pop(),K.length===1&&(K[0]==="~"||K[0]==="+")&&C.parentNode?C.parentNode:C,G);
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
(function(){var l="",k="pdf",h="wmv",g="divx",f="quicktime",e="mshtml",d="silverlight",c="Silverlight",b="plugin.silverlight.version",a="function",H="QuickTimeCheckObject.QuickTimeCheck.1",G="Adobe Acrobat",F="plugin.windowsmedia",E="QuickTime",D="plugin.silverlight",C="qx.bom.client.Plugin",B="plugin.divx",A="Chrome PDF Viewer",z="Windows Media",y="plugin.gears",s="plugin.quicktime",t="plugin.windowsmedia.version",q="DivX Web Player",r="AgControl.AgControl",o="plugin.pdf",p="plugin.pdf.version",m="plugin.divx.version",n="WMPlayer.OCX.7",u="AcroPDF.PDF",v="plugin.activex",x="plugin.quicktime.version",w="npdivx.DivXBrowserPlugin.1";
qx.Bootstrap.define(C,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},getActiveX:function(){return (typeof window.ActiveXObject===a);
},__gi:{quicktime:{plugin:[E],control:H},wmv:{plugin:[z],control:n},divx:{plugin:[q],control:w},silverlight:{plugin:[c],control:r},pdf:{plugin:[A,G],control:u}},getQuicktimeVersion:function(){var I=qx.bom.client.Plugin.__gi[f];
return qx.bom.client.Plugin.__gj(I.control,I.plugin);
},getWindowsMediaVersion:function(){var J=qx.bom.client.Plugin.__gi[h];
return qx.bom.client.Plugin.__gj(J.control,J.plugin);
},getDivXVersion:function(){var K=qx.bom.client.Plugin.__gi[g];
return qx.bom.client.Plugin.__gj(K.control,K.plugin);
},getSilverlightVersion:function(){var L=qx.bom.client.Plugin.__gi[d];
return qx.bom.client.Plugin.__gj(L.control,L.plugin);
},getPdfVersion:function(){var M=qx.bom.client.Plugin.__gi[k];
return qx.bom.client.Plugin.__gj(M.control,M.plugin);
},getQuicktime:function(){var N=qx.bom.client.Plugin.__gi[f];
return qx.bom.client.Plugin.__gk(N.control,N.plugin);
},getWindowsMedia:function(){var O=qx.bom.client.Plugin.__gi[h];
return qx.bom.client.Plugin.__gk(O.control,O.plugin);
},getDivX:function(){var P=qx.bom.client.Plugin.__gi[g];
return qx.bom.client.Plugin.__gk(P.control,P.plugin);
},getSilverlight:function(){var Q=qx.bom.client.Plugin.__gi[d];
return qx.bom.client.Plugin.__gk(Q.control,Q.plugin);
},getPdf:function(){var R=qx.bom.client.Plugin.__gi[k];
return qx.bom.client.Plugin.__gk(R.control,R.plugin);
},__gj:function(S,T){var U=qx.bom.client.Plugin.__gk(S,T);
if(!U){return l;
}if(qx.bom.client.Engine.getName()==e){var V=new ActiveXObject(S);

try{var Y=V.versionInfo;

if(Y!=undefined){return Y;
}Y=V.version;

if(Y!=undefined){return Y;
}Y=V.settings.version;

if(Y!=undefined){return Y;
}}catch(bb){return l;
}return l;
}else{var ba=navigator.plugins;
var X=/([0-9]\.[0-9])/g;

for(var i=0;i<ba.length;i++){var W=ba[i];

for(var j=0;j<T.length;j++){if(W.name.indexOf(T[j])!==-1){if(X.test(W.name)||X.test(W.description)){return RegExp.$1;
}}}}return l;
}},__gk:function(bc,bd){if(qx.bom.client.Engine.getName()==e){var be=window.ActiveXObject;

if(!be){return false;
}
try{new ActiveXObject(bc);
}catch(bg){return false;
}return true;
}else{var bf=navigator.plugins;

if(!bf){return false;
}var name;

for(var i=0;i<bf.length;i++){name=bf[i].name;

for(var j=0;j<bd.length;j++){if(name.indexOf(bd[j])!==-1){return true;
}}}return false;
}}},defer:function(bh){qx.core.Environment.add(y,bh.getGears);
qx.core.Environment.add(s,bh.getQuicktime);
qx.core.Environment.add(x,bh.getQuicktimeVersion);
qx.core.Environment.add(F,bh.getWindowsMedia);
qx.core.Environment.add(t,bh.getWindowsMediaVersion);
qx.core.Environment.add(B,bh.getDivX);
qx.core.Environment.add(m,bh.getDivXVersion);
qx.core.Environment.add(D,bh.getSilverlight);
qx.core.Environment.add(b,bh.getSilverlightVersion);
qx.core.Environment.add(o,bh.getPdf);
qx.core.Environment.add(p,bh.getPdfVersion);
qx.core.Environment.add(v,bh.getActiveX);
}});
})();
(function(){var s="plugin.activex",r="MSXML2.DOMDocument.3.0",q="",p='<\?xml version="1.0" encoding="utf-8"?>\n<',o="qx.xml.Document",n=" />",m="xml.domparser",k="SelectionLanguage",j="'",h="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",g="xml.implementation",f=" xmlns='",b="text/xml",a="XPath",e="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(t){if(t.nodeType===9){return t.documentElement.nodeName!==d;
}else if(t.ownerDocument){return this.isXmlDocument(t.ownerDocument);
}else{return false;
}},create:function(u,v){if(qx.core.Environment.get(s)){var w=new ActiveXObject(this.DOMDOC);
if(this.DOMDOC==r){w.setProperty(k,a);
}
if(v){var x=p;
x+=v;

if(u){x+=f+u+j;
}x+=n;
w.loadXML(x);
}return w;
}
if(qx.core.Environment.get(g)){return document.implementation.createDocument(u||q,v||q,null);
}throw new Error("No XML implementation available!");
},fromString:function(y){if(qx.core.Environment.get(s)){var A=qx.xml.Document.create();
A.loadXML(y);
return A;
}
if(qx.core.Environment.get(m)){var z=new DOMParser();
return z.parseFromString(y,b);
}throw new Error("No XML implementation available!");
}},defer:function(B){if(qx.core.Environment.get(s)){var C=[e,r];
var D=[c,h];

for(var i=0,l=C.length;i<l;i++){try{new ActiveXObject(C[i]);
new ActiveXObject(D[i]);
}catch(E){continue;
}B.DOMDOC=C[i];
B.XMLHTTP=D[i];
break;
}}}});
})();
(function(){var s="undefined",r="function",q="<a></a>",p="xml.implementation",o="xml.attributens",n="xml.selectnodes",m="xml.getqualifieditem",l="SelectionLanguage",k="xml.getelementsbytagnamens",j="qx.bom.client.Xml",d="xml.domproperties",i="xml.selectsinglenode",g="1.0",c="xml.createnode",b="xml.domparser",f="getProperty",e="XML",h="string",a="xml.createelementns";
qx.Bootstrap.define(j,{statics:{getImplementation:function(){return document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature(e,g);
},getDomParser:function(){return typeof window.DOMParser!==s;
},getSelectSingleNode:function(){return typeof qx.xml.Document.create().selectSingleNode!==s;
},getSelectNodes:function(){return typeof qx.xml.Document.create().selectNodes!==s;
},getElementsByTagNameNS:function(){return typeof qx.xml.Document.create().getElementsByTagNameNS!==s;
},getDomProperties:function(){var t=qx.xml.Document.create();
return (f in t&&typeof t.getProperty(l)===h);
},getAttributeNS:function(){var u=qx.xml.Document.fromString(q).documentElement;
return typeof u.getAttributeNS===r&&typeof u.setAttributeNS===r;
},getCreateElementNS:function(){return typeof qx.xml.Document.create().createElementNS===r;
},getCreateNode:function(){return typeof qx.xml.Document.create().createNode!==s;
},getQualifiedItem:function(){var v=qx.xml.Document.fromString(q).documentElement;
return typeof v.attributes.getQualifiedItem!==s;
}},defer:function(w){qx.core.Environment.add(p,w.getImplementation);
qx.core.Environment.add(b,w.getDomParser);
qx.core.Environment.add(i,w.getSelectSingleNode);
qx.core.Environment.add(n,w.getSelectNodes);
qx.core.Environment.add(k,w.getElementsByTagNameNS);
qx.core.Environment.add(d,w.getDomProperties);
qx.core.Environment.add(o,w.getAttributeNS);
qx.core.Environment.add(a,w.getCreateElementNS);
qx.core.Environment.add(c,w.getCreateNode);
qx.core.Environment.add(m,w.getQualifiedItem);
}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
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
(function(){var j="borderTopWidth",i="borderLeftWidth",h="engine.name",g="scroll",f="engine.version",e="marginTop",d="marginLeft",c="border-box",b="borderBottomWidth",a="borderRightWidth",D="auto",C="padding",B="browser.quirksmode",A="qx.bom.element.Location",z="paddingLeft",y="static",x="marginBottom",w="visible",v="BODY",u="paddingBottom",q="paddingTop",r="gecko",o="marginRight",p="mshtml",m="position",n="margin",k="overflow",l="paddingRight",s="browser.documentmode",t="border";
qx.Class.define(A,{statics:{__gl:function(E,F){return qx.bom.element.Style.get(E,F,qx.bom.element.Style.COMPUTED_MODE,false);
},__gm:function(G,H){return parseInt(qx.bom.element.Style.get(G,H,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gn:function(I){var K=0,top=0;
var J=qx.dom.Node.getWindow(I);
K-=qx.bom.Viewport.getScrollLeft(J);
top-=qx.bom.Viewport.getScrollTop(J);
return {left:K,top:top};
},__go:qx.core.Environment.select(h,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=0;
var top=0;
O-=M.clientLeft+N.documentElement.clientLeft;
top-=M.clientTop+N.documentElement.clientTop;

if(!qx.core.Environment.get(B)){O+=this.__gm(M,i);
top+=this.__gm(M,j);
}return {left:O,top:top};
},"webkit":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=Q.offsetLeft;
var top=Q.offsetTop;
if(parseFloat(qx.core.Environment.get(f))<530.17){S+=this.__gm(Q,i);
top+=this.__gm(Q,j);
}return {left:S,top:top};
},"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;
var V=U.offsetLeft;
var top=U.offsetTop;
if(parseFloat(qx.core.Environment.get(f))<1.9){V+=this.__gm(U,d);
top+=this.__gm(U,e);
}if(qx.bom.element.BoxSizing.get(U)!==c){V+=this.__gm(U,i);
top+=this.__gm(U,j);
}return {left:V,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__gp:qx.core.Environment.select(h,{"gecko":function(ba){if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();
var be=Math.round(bd.left);
var top=Math.round(bd.top);
}else{var be=0;
var top=0;
var bb=qx.dom.Node.getDocument(ba).body;
var bc=qx.bom.element.BoxSizing;

if(bc.get(ba)!==c){be-=this.__gm(ba,i);
top-=this.__gm(ba,j);
}
while(ba&&ba!==bb){be+=ba.offsetLeft;
top+=ba.offsetTop;
if(bc.get(ba)!==c){be+=this.__gm(ba,i);
top+=this.__gm(ba,j);
}if(ba.parentNode&&this.__gl(ba.parentNode,k)!=w){be+=this.__gm(ba.parentNode,i);
top+=this.__gm(ba.parentNode,j);
}ba=ba.offsetParent;
}}return {left:be,top:top};
},"default":function(bf){var bh=qx.dom.Node.getDocument(bf);
if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();
var bj=bi.left;
var top=bi.top;
}else{var bj=bf.offsetLeft;
var top=bf.offsetTop;
bf=bf.offsetParent;
var bg=bh.body;
while(bf&&bf!=bg){bj+=bf.offsetLeft;
top+=bf.offsetTop;
bj+=this.__gm(bf,i);
top+=this.__gm(bf,j);
bf=bf.offsetParent;
}}return {left:bj,top:top};
}}),get:function(bk,bl){if(bk.tagName==v){var location=this.__gq(bk);
var bs=location.left;
var top=location.top;
}else{var bm=this.__go(bk);
var br=this.__gp(bk);
var scroll=this.__gn(bk);
var bs=br.left+bm.left-scroll.left;
var top=br.top+bm.top-scroll.top;
}var bn=bs+bk.offsetWidth;
var bo=top+bk.offsetHeight;

if(bl){if(bl==C||bl==g){var bp=qx.bom.element.Overflow.getX(bk);

if(bp==g||bp==D){bn+=bk.scrollWidth-bk.offsetWidth+this.__gm(bk,i)+this.__gm(bk,a);
}var bq=qx.bom.element.Overflow.getY(bk);

if(bq==g||bq==D){bo+=bk.scrollHeight-bk.offsetHeight+this.__gm(bk,j)+this.__gm(bk,b);
}}
switch(bl){case C:bs+=this.__gm(bk,z);
top+=this.__gm(bk,q);
bn-=this.__gm(bk,l);
bo-=this.__gm(bk,u);
case g:bs-=bk.scrollLeft;
top-=bk.scrollTop;
bn-=bk.scrollLeft;
bo-=bk.scrollTop;
case t:bs+=this.__gm(bk,i);
top+=this.__gm(bk,j);
bn-=this.__gm(bk,a);
bo-=this.__gm(bk,b);
break;
case n:bs-=this.__gm(bk,d);
top-=this.__gm(bk,e);
bn+=this.__gm(bk,o);
bo+=this.__gm(bk,x);
break;
}}return {left:bs,top:top,right:bn,bottom:bo};
},__gq:function(bt){var top=bt.offsetTop;
var bu=bt.offsetLeft;

if(qx.core.Environment.get(h)!==p||!((parseFloat(qx.core.Environment.get(f))<8||qx.core.Environment.get(s)<8)&&!qx.core.Environment.get(B))){top+=this.__gm(bt,e);
bu+=this.__gm(bt,d);
}
if(qx.core.Environment.get(h)===r){top+=this.__gm(bt,i);
bu+=this.__gm(bt,j);
}return {left:bu,top:top};
},getLeft:function(bv,bw){return this.get(bv,bw).left;
},getTop:function(bx,by){return this.get(bx,by).top;
},getRight:function(bz,bA){return this.get(bz,bA).right;
},getBottom:function(bB,bC){return this.get(bB,bC).bottom;
},getRelative:function(bD,bE,bF,bG){var bI=this.get(bD,bF);
var bH=this.get(bE,bG);
return {left:bI.left-bH.left,top:bI.top-bH.top,right:bI.right-bH.right,bottom:bI.bottom-bH.bottom};
},getPosition:function(bJ){return this.getRelative(bJ,this.getOffsetParent(bJ));
},getOffsetParent:function(bK){var bM=bK.offsetParent||document.body;
var bL=qx.bom.element.Style;

while(bM&&(!/^body|html$/i.test(bM.tagName)&&bL.get(bM,m)===y)){bM=bM.offsetParent;
}return bM;
}}});
})();
(function(){var i="qx.debug",h="useraction",g="touchend",f='ie',d="browser.version",c="event.touch",b="qx.ui.core.queue.Manager",a="browser.name";
qx.Class.define(b,{statics:{__gE:false,__gF:{},__gG:0,MAX_RETRIES:10,scheduleFlush:function(j){var self=qx.ui.core.queue.Manager;
self.__gF[j]=true;

if(!self.__gE){self.__ee.schedule();
self.__gE=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__gH){return;
}self.__gH=true;
self.__ee.cancel();
var k=self.__gF;
self.__gI(function(){while(k.visibility||k.widget||k.appearance||k.layout||k.element){if(k.widget){delete k.widget;

if(qx.core.Environment.get(i)){try{qx.ui.core.queue.Widget.flush();
}catch(e){qx.log.Logger.error("Error in the 'Widget' queue:"+e);
}}else{qx.ui.core.queue.Widget.flush();
}}
if(k.visibility){delete k.visibility;

if(qx.core.Environment.get(i)){try{qx.ui.core.queue.Visibility.flush();
}catch(e){qx.log.Logger.error("Error in the 'Visibility' queue:"+e);
}}else{qx.ui.core.queue.Visibility.flush();
}}
if(k.appearance){delete k.appearance;

if(qx.core.Environment.get(i)){try{qx.ui.core.queue.Appearance.flush();
}catch(e){qx.log.Logger.error("Error in the 'Appearance' queue:"+e);
}}else{qx.ui.core.queue.Appearance.flush();
}}if(k.widget||k.visibility||k.appearance){continue;
}
if(k.layout){delete k.layout;

if(qx.core.Environment.get(i)){try{qx.ui.core.queue.Layout.flush();
}catch(e){qx.log.Logger.error("Error in the 'Layout' queue:"+e);
}}else{qx.ui.core.queue.Layout.flush();
}}if(k.widget||k.visibility||k.appearance||k.layout){continue;
}
if(k.element){delete k.element;
qx.html.Element.flush();
}}},function(){self.__gE=false;
});
self.__gI(function(){if(k.dispose){delete k.dispose;

if(qx.core.Environment.get(i)){try{qx.ui.core.queue.Dispose.flush();
}catch(e){qx.log.Logger.error("Error in the 'Dispose' queue:"+e);
}}else{qx.ui.core.queue.Dispose.flush();
}}},function(){self.__gH=false;
});
self.__gG=0;
},__gI:qx.core.Environment.select(i,{"true":function(l,m){l();
m();
},"false":function(n,o){var self=qx.ui.core.queue.Manager;

try{n();
}catch(e){if(qx.core.Environment.get(i)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__gE=false;
self.__gH=false;
self.__gG+=1;
if(qx.core.Environment.get(a)==f&&qx.core.Environment.get(d)<=7){o();
}
if(self.__gG<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__gG-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{o();
}}}),__gJ:function(e){var p=qx.ui.core.queue.Manager;
if(e.getData()==g){p.PAUSE=true;

if(p.__gK){window.clearTimeout(p.__gK);
}p.__gK=window.setTimeout(function(){p.PAUSE=false;
p.__gK=null;
p.flush();
},500);
}else{p.flush();
}}},defer:function(q){q.__ee=new qx.util.DeferredCall(q.flush);
qx.html.Element._scheduleFlush=q.scheduleFlush;
qx.event.Registration.addListener(window,h,qx.core.Environment.get(c)?q.__gJ:q.flush);
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__gA:[],remove:function(c){qx.lang.Array.remove(this.__gA,c);
},add:function(d){var e=this.__gA;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__gA;
var g;

for(var i=f.length-1;i>=0;i--){g=f[i];
f.splice(i,1);
g.syncWidget();
}if(f.length!=0){return;
}this.__gA=[];
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__gA:[],__cP:{},remove:function(c){delete this.__cP[c.$$hash];
qx.lang.Array.remove(this.__gA,c);
},isVisible:function(d){return this.__cP[d.$$hash]||false;
},__gL:function(e){var g=this.__cP;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__gL(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(j){var k=this.__gA;

if(qx.lang.Array.contains(k,j)){return;
}k.unshift(j);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var o=this.__gA;
var p=this.__cP;
for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;

if(p[n]!=null){o[i].addChildrenToQueue(o);
}}var l={};

for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;
l[n]=p[n];
p[n]=null;
}for(var i=o.length-1;i>=0;i--){var m=o[i];
var n=m.$$hash;
o.splice(i,1);
if(p[n]==null){this.__gL(m);
}if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();
}}this.__gA=[];
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gA:[],remove:function(c){qx.lang.Array.remove(this.__gA,c);
},add:function(d){var e=this.__gA;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return qx.lang.Array.contains(this.__gA,f);
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__gA;
var h;

for(var i=g.length-1;i>=0;i--){h=g[i];
g.splice(i,1);
if(j.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__gA:[],add:function(c){var d=this.__gA;

if(qx.lang.Array.contains(d,c)){return;
}d.unshift(c);
qx.ui.core.queue.Manager.scheduleFlush(b);
},isEmpty:function(){return this.__gA.length==0;
},flush:function(){var e=this.__gA;

for(var i=e.length-1;i>=0;i--){var f=e[i];
e.splice(i,1);
f.dispose();
}if(e.length!=0){return;
}this.__gA=[];
}}});
})();
(function(){var j="qx.debug",i="decorator",h="qxType",g="",f="qx.ui.core.DecoratorFactory",e="qx.ui.core.DecoratorFactory[",d="$$nopool$$",c="] ",b="keys: ",a=", elements: ";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cO={};
},statics:{MAX_SIZE:15,__cW:d},members:{__cO:null,getDecoratorElement:function(k){var p=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(k)){var n=k;
var m=qx.theme.manager.Decoration.getInstance().resolve(k);
}else{var n=p.__cW;
m=k;
}var o=this.__cO;

if(o[n]&&o[n].length>0){var l=o[n].pop();
}else{var l=this._createDecoratorElement(m,n);
}l.$$pooled=false;
return l;
},poolDecorator:function(q){if(!q||q.$$pooled||q.isDisposed()){return;
}var t=qx.ui.core.DecoratorFactory;
var r=q.getId();

if(r==t.__cW){q.dispose();
return;
}var s=this.__cO;

if(!s[r]){s[r]=[];
}
if(s[r].length>t.MAX_SIZE){q.dispose();
}else{q.$$pooled=true;
s[r].push(q);
}},_createDecoratorElement:function(u,v){var w=new qx.html.Decorator(u,v);

if(qx.core.Environment.get(j)){w.setAttribute(h,i);
}return w;
},toString:qx.core.Environment.select(j,{"true":function(){var x=0;
var y=0;

for(var z in this.__cO){x+=1;
y+=this.__cO[z].length;
}return [e,this.$$hash,c,b,x,a,y].join(g);
},"false":function(){return qx.core.Object.prototype.toString.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var B=this.__cO;

for(var A in B){qx.util.DisposeUtil.disposeArray(B,A);
}}this.__cO=null;
}});
})();
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};

if(qx.core.Environment.get(d)){g.pointerEvents=c;
}qx.html.Element.call(this,null,g);
this.__gr=e;
this.__cq=f||e.toHashCode();
this.useMarkup(e.getMarkup());
},members:{__cq:null,__gr:null,getId:function(){return this.__cq;
},getDecorator:function(){return this.__gr;
},resize:function(h,i){this.__gr.resize(this.getDomElement(),h,i);
},tint:function(j){this.__gr.tint(this.getDomElement(),j);
},getInsets:function(){return this.__gr.getInsets();
}},destruct:function(){this.__gr=null;
}});
})();
(function(){var cw="px",cv="qx.debug",cu="Boolean",ct="qx.event.type.Drag",cs="qx.event.type.Mouse",cr="visible",cq="qx.event.type.Focus",cp="Integer",co="qx.event.type.Touch",cn="qx.event.type.Data",bx="engine.name",bw="excluded",bv="_applyPadding",bu="qx.event.type.Event",bt="on",bs="mshtml",br="hidden",bq="contextmenu",bp="String",bo="tabIndex",cD="focused",cE="changeVisibility",cB="hovered",cC="qx.event.type.KeySequence",cz="absolute",cA="backgroundColor",cx="drag",cy="div",cF="object",cG="disabled",bV="move",bU="dragstart",bX="qx.dynlocale",bW="dragchange",ca="dragend",bY="resize",cc="Decorator",cb="zIndex",bT="opacity",bS="default",c="Color",d="qxType",f="changeToolTipText",g="beforeContextmenuOpen",h="_applyNativeContextMenu",j="content",k="engine.version",m="_applyBackgroundColor",n="event.pointer",o="_applyFocusable",cL="changeShadow",cK="qx.event.type.KeyInput",cJ="createChildControl",cI="browser.documentmode",cP="Invalid left decorator inset detected: ",cO="Font",cN="_applyShadow",cM="Invalid layout data: ",cR="Could not add widget to itself: ",cQ="_applyEnabled",N="_applySelectable",O="Number",L="_applyKeepActive",M="__hi",R="_applyVisibility",S="The 'after' widget is not a child of this widget!",P="repeat",Q="qxDraggable",J="__gU",K="syncAppearance",w="paddingLeft",v="_applyDroppable",y="Wrong 'left' argument. ",x="__hb",s="protector",r="#",u="'Child' must be an instance of qx.ui.core.LayoutItem!",t="qx.event.type.MouseWheel",q="_applyCursor",p="_applyDraggable",X="changeTextColor",Y="$$widget",ba="changeContextMenu",bb="paddingTop",T="changeSelectable",U="hideFocus",V="Invalid top decorator inset detected: ",W="none",bc="outline",bd="The 'before' widget is not a child of this widget!",G="_applyAppearance",F=" returned an invalid size hint!",E="__hg",D="_applyOpacity",C="url(",B=")",A="qx.ui.core.Widget",z="minHeight is larger than maxHeight!",I="_applyFont",H="cursor",be="qxDroppable",bf="changeZIndex",bg="changeEnabled",bh="changeFont",bi="__he",bj="__gV",bk="_applyDecorator",bl="_applyZIndex",bm="_applyTextColor",bn="qx.ui.menu.Menu",bB="Invalid right decorator inset detected: ",bA="Invalid widget to add: ",bz="_applyToolTipText",by="The layout of the widget",bF="true",bE="widget",bD="Wrong 'top' argument. ",bC="changeDecorator",bH="__gY",bG="changeBackgroundColor",bO="_applyTabIndex",bP="Invalid bottom decorator inset detected: ",bM="changeAppearance",bN="shorthand",bK="/",bL="",bI="_applyContextMenu",bJ="container",bQ="paddingBottom",bR="changeNativeContextMenu",cg="undefined",cf="qx.ui.tooltip.ToolTip",ci="qxKeepActive",ch="_applyKeepFocus",ck="paddingRight",cj="minWidth is larger than maxWidth!",cm="changeLocale",cl="__ha",ce="qxKeepFocus",cd="opera",cH="qx/static/blank.gif";
qx.Class.define(A,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__gU=this._createContainerElement();
this.__gV=this.__hh();
this.__gU.add(this.__gV);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bu,disappear:bu,createChildControl:cn,resize:cn,move:cn,syncAppearance:cn,mousemove:cs,mouseover:cs,mouseout:cs,mousedown:cs,mouseup:cs,click:cs,dblclick:cs,contextmenu:cs,beforeContextmenuOpen:cn,mousewheel:t,touchstart:co,touchend:co,touchmove:co,touchcancel:co,tap:co,swipe:co,keyup:cC,keydown:cC,keypress:cC,keyinput:cK,focus:cq,blur:cq,focusin:cq,focusout:cq,activate:cq,deactivate:cq,capture:bu,losecapture:bu,drop:ct,dragleave:ct,dragover:ct,drag:ct,dragstart:ct,dragend:ct,dragchange:ct,droprequest:ct},properties:{paddingTop:{check:cp,init:0,apply:bv,themeable:true},paddingRight:{check:cp,init:0,apply:bv,themeable:true},paddingBottom:{check:cp,init:0,apply:bv,themeable:true},paddingLeft:{check:cp,init:0,apply:bv,themeable:true},padding:{group:[bb,ck,bQ,w],mode:bN,themeable:true},zIndex:{nullable:true,init:null,apply:bl,event:bf,check:cp,themeable:true},decorator:{nullable:true,init:null,apply:bk,event:bC,check:cc,themeable:true},shadow:{nullable:true,init:null,apply:cN,event:cL,check:cc,themeable:true},backgroundColor:{nullable:true,check:c,apply:m,event:bG,themeable:true},textColor:{nullable:true,check:c,apply:bm,event:X,themeable:true,inheritable:true},font:{nullable:true,apply:I,check:cO,event:bh,themeable:true,inheritable:true,dereference:true},opacity:{check:O,apply:D,themeable:true,nullable:true,init:null},cursor:{check:bp,apply:q,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:cf,nullable:true},toolTipText:{check:bp,nullable:true,event:f,apply:bz},toolTipIcon:{check:bp,nullable:true,event:f},blockToolTip:{check:cu,init:false},visibility:{check:[cr,br,bw],init:cr,apply:R,event:cE},enabled:{init:true,check:cu,inheritable:true,apply:cQ,event:bg},anonymous:{init:false,check:cu},tabIndex:{check:cp,nullable:true,apply:bO},focusable:{check:cu,init:false,apply:o},keepFocus:{check:cu,init:false,apply:ch},keepActive:{check:cu,init:false,apply:L},draggable:{check:cu,init:false,apply:p},droppable:{check:cu,init:false,apply:v},selectable:{check:cu,init:false,event:T,apply:N},contextMenu:{check:bn,apply:bI,nullable:true,event:ba},nativeContextMenu:{check:cu,init:false,themeable:true,event:bR,apply:h},appearance:{check:bp,init:bE,apply:G,event:bM}},statics:{DEBUG:false,getWidgetByElement:function(cS,cT){while(cS){var cU=cS.$$widget;
if(cU!=null){var cV=qx.core.ObjectRegistry.fromHashCode(cU);
if(!cT||!cV.getAnonymous()){return cV;
}}try{cS=cS.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cW){while(cW){if(parent==cW){return true;
}cW=cW.getLayoutParent();
}return false;
},__gW:new qx.ui.core.DecoratorFactory(),__gX:new qx.ui.core.DecoratorFactory()},members:{__gU:null,__gV:null,__gY:null,__ha:null,__hb:null,__hc:null,__hd:null,__he:null,_getLayout:function(){return this.__he;
},_setLayout:function(cX){if(qx.core.Environment.get(cv)){if(cX){this.assertInstance(cX,qx.ui.layout.Abstract);
}}
if(this.__he){this.__he.connectToWidget(null);
}
if(cX){cX.connectToWidget(this);
}this.__he=cX;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cY=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cY);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cY);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__hf:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var da=qx.theme.manager.Decoration.getInstance();
var dc=da.resolve(a).getInsets();
var db=da.resolve(b).getInsets();

if(dc.top!=db.top||dc.right!=db.right||dc.bottom!=db.bottom||dc.left!=db.left){return true;
}return false;
},renderLayout:function(dd,top,de,df){var dp=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,dd,top,de,df);
if(!dp){return null;
}var dh=this.getContainerElement();
var content=this.getContentElement();
var dl=dp.size||this._updateInsets;
var dq=cw;
var dm={};
if(dp.position){dm.left=dd+dq;
dm.top=top+dq;
}if(dp.size){dm.width=de+dq;
dm.height=df+dq;
}
if(dp.position||dp.size){dh.setStyles(dm);
}
if(dl||dp.local||dp.margin){var dg=this.getInsets();
var innerWidth=de-dg.left-dg.right;
var innerHeight=df-dg.top-dg.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var dj={};

if(this._updateInsets){dj.left=dg.left+dq;
dj.top=dg.top+dq;
}
if(dl){dj.width=innerWidth+dq;
dj.height=innerHeight+dq;
}
if(dl||this._updateInsets){content.setStyles(dj);
}
if(dp.size){var dn=this.__hb;

if(dn){dn.setStyles({width:de+cw,height:df+cw});
}}
if(dp.size||this._updateInsets){if(this.__gY){this.__gY.resize(de,df);
}}
if(dp.size){if(this.__ha){var dg=this.__ha.getInsets();
var dk=de+dg.left+dg.right;
var di=df+dg.top+dg.bottom;
this.__ha.resize(dk,di);
}}
if(dl||dp.local||dp.margin){if(this.__he&&this.hasLayoutChildren()){this.__he.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(dp.position&&this.hasListener(bV)){this.fireDataEvent(bV,this.getBounds());
}
if(dp.size&&this.hasListener(bY)){this.fireDataEvent(bY,this.getBounds());
}delete this._updateInsets;
return dp;
},__hg:null,clearSeparators:function(){var ds=this.__hg;

if(!ds){return;
}var dt=qx.ui.core.Widget.__gW;
var content=this.getContentElement();
var dr;

for(var i=0,l=ds.length;i<l;i++){dr=ds[i];
dt.poolDecorator(dr);
content.remove(dr);
}ds.length=0;
},renderSeparator:function(du,dv){var dx=qx.ui.core.Widget.__gW.getDecoratorElement(du);
this.getContentElement().add(dx);
dx.resize(dv.width,dv.height);
var dw=dx.getDomElement();
if(dw){dw.style.top=dv.top+cw;
dw.style.left=dv.left+cw;
}else{dx.setStyles({left:dv.left+cw,top:dv.top+cw});
}if(!this.__hg){this.__hg=[dx];
}else{this.__hg.push(dx);
}},_computeSizeHint:function(){var dE=this.getWidth();
var dD=this.getMinWidth();
var dz=this.getMaxWidth();
var dC=this.getHeight();
var dA=this.getMinHeight();
var dB=this.getMaxHeight();

if(qx.core.Environment.get(cv)){if(dD!==null&&dz!==null){this.assert(dD<=dz,cj);
}
if(dA!==null&&dB!==null){this.assert(dA<=dB,z);
}}var dF=this._getContentHint();
var dy=this.getInsets();
var dH=dy.left+dy.right;
var dG=dy.top+dy.bottom;

if(dE==null){dE=dF.width+dH;
}
if(dC==null){dC=dF.height+dG;
}
if(dD==null){dD=dH;

if(dF.minWidth!=null){dD+=dF.minWidth;
if(dD>dz&&dz!=null){dD=dz;
}}}
if(dA==null){dA=dG;

if(dF.minHeight!=null){dA+=dF.minHeight;
if(dA>dB&&dB!=null){dA=dB;
}}}
if(dz==null){if(dF.maxWidth==null){dz=Infinity;
}else{dz=dF.maxWidth+dH;
if(dz<dD&&dD!=null){dz=dD;
}}}
if(dB==null){if(dF.maxHeight==null){dB=Infinity;
}else{dB=dF.maxHeight+dG;
if(dB<dA&&dA!=null){dB=dA;
}}}return {width:dE,minWidth:dD,maxWidth:dz,height:dC,minHeight:dA,maxHeight:dB};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__he){this.__he.invalidateLayoutCache();
}},_getContentHint:function(){var dJ=this.__he;

if(dJ){if(this.hasLayoutChildren()){var dK=dJ.getSizeHint();

if(qx.core.Environment.get(cv)){var dI=by+this.toString()+F;
this.assertInteger(dK.width,y+dI);
this.assertInteger(dK.height,bD+dI);
}return dK;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dL){var dP=this.getInsets();
var dS=dP.left+dP.right;
var dR=dP.top+dP.bottom;
var dQ=dL-dS;
var dN=this._getLayout();

if(dN&&dN.hasHeightForWidth()){var dM=dN.getHeightForWidth(dL);
}else{dM=this._getContentHeightForWidth(dQ);
}var dO=dM+dR;
return dO;
},_getContentHeightForWidth:function(dT){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dV=this.getPaddingRight();
var dX=this.getPaddingBottom();
var dW=this.getPaddingLeft();

if(this.__gY){var dU=this.__gY.getInsets();

if(qx.core.Environment.get(cv)){this.assertNumber(dU.top,V+dU.top);
this.assertNumber(dU.right,bB+dU.right);
this.assertNumber(dU.bottom,bP+dU.bottom);
this.assertNumber(dU.left,cP+dU.left);
}top+=dU.top;
dV+=dU.right;
dX+=dU.bottom;
dW+=dU.left;
}return {"top":top,"right":dV,"bottom":dX,"left":dW};
},getInnerSize:function(){var ea=this.getBounds();

if(!ea){return null;
}var dY=this.getInsets();
return {width:ea.width-dY.left-dY.right,height:ea.height-dY.top-dY.bottom};
},show:function(){this.setVisibility(cr);
},hide:function(){this.setVisibility(br);
},exclude:function(){this.setVisibility(bw);
},isVisible:function(){return this.getVisibility()===cr;
},isHidden:function(){return this.getVisibility()!==cr;
},isExcluded:function(){return this.getVisibility()===bw;
},isSeeable:function(){qx.ui.core.queue.Manager.flush();
var eb=this.getContainerElement().getDomElement();

if(eb){return eb.offsetWidth>0;
}return false;
},_createContainerElement:function(){var ed={"$$widget":this.toHashCode()};

if(qx.core.Environment.get(cv)){ed.qxType=bJ;
ed.qxClass=this.classname;
}var ec={zIndex:0,position:cz};
return new qx.html.Element(cy,ec,ed);
},__hh:function(){var ee=this._createContentElement();

if(qx.core.Environment.get(cv)){ee.setAttribute(d,j);
}ee.setStyles({"position":cz,"zIndex":10});
return ee;
},_createContentElement:function(){return new qx.html.Element(cy,{overflowX:br,overflowY:br});
},getContainerElement:function(){return this.__gU;
},getContentElement:function(){return this.__gV;
},getDecoratorElement:function(){return this.__gY||null;
},getShadowElement:function(){return this.__ha||null;
},__hi:null,getLayoutChildren:function(){var eg=this.__hi;

if(!eg){return this.__hj;
}var eh;

for(var i=0,l=eg.length;i<l;i++){var ef=eg[i];

if(ef.hasUserBounds()||ef.isExcluded()){if(eh==null){eh=eg.concat();
}qx.lang.Array.remove(eh,ef);
}}return eh||eg;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var ei=this.__he;

if(ei){ei.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var ej=this.__hi;

if(!ej){return false;
}var ek;

for(var i=0,l=ej.length;i<l;i++){ek=ej[i];

if(!ek.hasUserBounds()&&!ek.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__hj:[],_getChildren:function(){return this.__hi||this.__hj;
},_indexOf:function(em){var en=this.__hi;

if(!en){return -1;
}return en.indexOf(em);
},_hasChildren:function(){var eo=this.__hi;
return eo!=null&&(!!eo[0]);
},addChildrenToQueue:function(ep){var eq=this.__hi;

if(!eq){return;
}var er;

for(var i=0,l=eq.length;i<l;i++){er=eq[i];
ep.push(er);
er.addChildrenToQueue(ep);
}},_add:function(es,et){if(qx.core.Environment.get(cv)){this.assertInstance(es,qx.ui.core.LayoutItem.constructor,u);
}if(es.getLayoutParent()==this){qx.lang.Array.remove(this.__hi,es);
}
if(this.__hi){this.__hi.push(es);
}else{this.__hi=[es];
}this.__hk(es,et);
},_addAt:function(eu,ev,ew){if(!this.__hi){this.__hi=[];
}if(eu.getLayoutParent()==this){qx.lang.Array.remove(this.__hi,eu);
}var ex=this.__hi[ev];

if(ex===eu){eu.setLayoutProperties(ew);
}
if(ex){qx.lang.Array.insertBefore(this.__hi,eu,ex);
}else{this.__hi.push(eu);
}this.__hk(eu,ew);
},_addBefore:function(ey,ez,eA){if(qx.core.Environment.get(cv)){this.assertInArray(ez,this._getChildren(),bd);
}
if(ey==ez){return;
}
if(!this.__hi){this.__hi=[];
}if(ey.getLayoutParent()==this){qx.lang.Array.remove(this.__hi,ey);
}qx.lang.Array.insertBefore(this.__hi,ey,ez);
this.__hk(ey,eA);
},_addAfter:function(eB,eC,eD){if(qx.core.Environment.get(cv)){this.assertInArray(eC,this._getChildren(),S);
}
if(eB==eC){return;
}
if(!this.__hi){this.__hi=[];
}if(eB.getLayoutParent()==this){qx.lang.Array.remove(this.__hi,eB);
}qx.lang.Array.insertAfter(this.__hi,eB,eC);
this.__hk(eB,eD);
},_remove:function(eE){if(!this.__hi){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__hi,eE);
this.__hl(eE);
},_removeAt:function(eF){if(!this.__hi){throw new Error("This widget has no children!");
}var eG=this.__hi[eF];
qx.lang.Array.removeAt(this.__hi,eF);
this.__hl(eG);
return eG;
},_removeAll:function(){if(!this.__hi){return [];
}var eH=this.__hi.concat();
this.__hi.length=0;

for(var i=eH.length-1;i>=0;i--){this.__hl(eH[i]);
}qx.ui.core.queue.Layout.add(this);
return eH;
},_afterAddChild:null,_afterRemoveChild:null,__hk:function(eI,eJ){if(qx.core.Environment.get(cv)){this.assertInstance(eI,qx.ui.core.LayoutItem,bA+eI);
this.assertNotIdentical(eI,this,cR+eI);

if(eJ!=null){this.assertType(eJ,cF,cM+eJ);
}}var parent=eI.getLayoutParent();

if(parent&&parent!=this){parent._remove(eI);
}eI.setLayoutParent(this);
if(eJ){eI.setLayoutProperties(eJ);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(eI);
}},__hl:function(eK){if(qx.core.Environment.get(cv)){this.assertNotUndefined(eK);
}
if(eK.getLayoutParent()!==this){throw new Error("Remove Error: "+eK+" is not a child of this widget!");
}eK.setLayoutParent(null);
if(this.__he){this.__he.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(eK);
}},capture:function(eL){this.getContainerElement().capture(eL);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eM,eN,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__hb){return;
}var eO=this.__hb=new qx.html.Element;

if(qx.core.Environment.get(cv)){eO.setAttribute(d,s);
}eO.setStyles({position:cz,top:0,left:0,zIndex:7});
var eP=this.getBounds();

if(eP){this.__hb.setStyles({width:eP.width+cw,height:eP.height+cw});
}if((qx.core.Environment.get(bx)==bs)){eO.setStyles({backgroundImage:C+qx.util.ResourceManager.getInstance().toUri(cH)+B,backgroundRepeat:P});
}this.getContainerElement().add(eO);
},_applyDecorator:function(eQ,eR){if(qx.core.Environment.get(cv)){if(eQ&&typeof eQ===cF){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and "+"processing time. Often it is better to lay them out to a "+"theme file. Hash code of decorator object: "+eQ);
}}}var eU=qx.ui.core.Widget.__gW;
var eS=this.getContainerElement();
if(!this.__hb&&!qx.core.Environment.get(n)){this._createProtectorElement();
}if(eR){eS.remove(this.__gY);
eU.poolDecorator(this.__gY);
}if(eQ){var eT=this.__gY=eU.getDecoratorElement(eQ);
eT.setStyle(cb,5);
eS.add(eT);
}else{delete this.__gY;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__hf(eR,eQ)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(eQ){var eV=this.getBounds();

if(eV){eT.resize(eV.width,eV.height);
this.__hb&&this.__hb.setStyles({width:eV.width+cw,height:eV.height+cw});
}}},_applyShadow:function(eW,eX){var ff=qx.ui.core.Widget.__gX;
var fa=this.getContainerElement();
if(eX){fa.remove(this.__ha);
ff.poolDecorator(this.__ha);
}if(eW){var fc=this.__ha=ff.getDecoratorElement(eW);
fa.add(fc);
var fe=fc.getInsets();
fc.setStyles({left:(-fe.left)+cw,top:(-fe.top)+cw});
var fd=this.getBounds();

if(fd){var fb=fd.width+fe.left+fe.right;
var eY=fd.height+fe.top+fe.bottom;
fc.resize(fb,eY);
}fc.tint(null);
}else{delete this.__ha;
}},_applyToolTipText:function(fg,fh){if(qx.core.Environment.get(bX)){if(this.__hd){return;
}var fi=qx.locale.Manager.getInstance();
this.__hd=fi.addListener(cm,function(){var fj=this.getToolTipText();

if(fj&&fj.translate){this.setToolTipText(fj.translate());
}},this);
}},_applyTextColor:function(fk,fl){},_applyZIndex:function(fm,fn){this.getContainerElement().setStyle(cb,fm==null?0:fm);
},_applyVisibility:function(fo,fp){var fq=this.getContainerElement();

if(fo===cr){fq.show();
}else{fq.hide();
}var parent=this.$$parent;

if(parent&&(fp==null||fo==null||fp===bw||fo===bw)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(fr,fs){this.getContainerElement().setStyle(bT,fr==1?null:fr);
if((qx.core.Environment.get(bx)==bs)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var ft=(fr==1||fr==null)?null:0.99;
this.getContentElement().setStyle(bT,ft);
}}},_applyCursor:function(fu,fv){if(fu==null&&!this.isSelectable()){fu=bS;
}this.getContainerElement().setStyle(H,fu,qx.core.Environment.get(bx)==cd);
},_applyBackgroundColor:function(fw,fx){var fy=this.getBackgroundColor();
var fA=this.getContainerElement();

if(this.__gY){this.__gY.tint(fy);
fA.setStyle(cA,null);
}else{var fz=qx.theme.manager.Color.getInstance().resolve(fy);
fA.setStyle(cA,fz);
}},_applyFont:function(fB,fC){},__hm:null,$$stateChanges:null,_forwardStates:null,hasState:function(fD){var fE=this.__hm;
return !!fE&&!!fE[fD];
},addState:function(fF){var fG=this.__hm;

if(!fG){fG=this.__hm={};
}
if(fG[fF]){return;
}this.__hm[fF]=true;
if(fF===cB){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fJ=this.__hp;

if(forward&&forward[fF]&&fJ){var fH;

for(var fI in fJ){fH=fJ[fI];

if(fH instanceof qx.ui.core.Widget){fJ[fI].addState(fF);
}}}},removeState:function(fK){var fL=this.__hm;

if(!fL||!fL[fK]){return;
}delete this.__hm[fK];
if(fK===cB){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fO=this.__hp;

if(forward&&forward[fK]&&fO){for(var fN in fO){var fM=fO[fN];

if(fM instanceof qx.ui.core.Widget){fM.removeState(fK);
}}}},replaceState:function(fP,fQ){var fR=this.__hm;

if(!fR){fR=this.__hm={};
}
if(!fR[fQ]){fR[fQ]=true;
}
if(fR[fP]){delete fR[fP];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fU=this.__hp;

if(forward&&forward[fQ]&&fU){for(var fT in fU){var fS=fU[fT];

if(fS instanceof qx.ui.core.Widget){fS.replaceState(fP,fQ);
}}}},__hn:null,__ho:null,syncAppearance:function(){var ga=this.__hm;
var fY=this.__hn;
var gb=qx.theme.manager.Appearance.getInstance();
var fW=qx.core.Property.$$method.setThemed;
var gf=qx.core.Property.$$method.resetThemed;
if(this.__ho){delete this.__ho;
if(fY){var fV=gb.styleFrom(fY,ga,null,this.getAppearance());
fY=null;
}}if(!fY){var fX=this;
var ge=[];

do{ge.push(fX.$$subcontrol||fX.getAppearance());
}while(fX=fX.$$subparent);
fY=ge.reverse().join(bK).replace(/#[0-9]+/g,bL);
this.__hn=fY;
}var gc=gb.styleFrom(fY,ga,null,this.getAppearance());

if(gc){if(fV){for(var gd in fV){if(gc[gd]===undefined){this[gf[gd]]();
}}}if(qx.core.Environment.get(cv)){for(var gd in gc){if(!this[fW[gd]]){throw new Error(this.classname+' has no themeable property "'+gd+'" while styling '+fY);
}}}for(var gd in gc){gc[gd]===undefined?this[gf[gd]]():this[fW[gd]](gc[gd]);
}}else if(fV){for(var gd in fV){this[gf[gd]]();
}}this.fireDataEvent(K,this.__hm);
},_applyAppearance:function(gg,gh){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__hc){qx.ui.core.queue.Appearance.add(this);
this.__hc=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__ho=true;
qx.ui.core.queue.Appearance.add(this);
var gk=this.__hp;

if(gk){var gi;

for(var gj in gk){gi=gk[gj];

if(gi instanceof qx.ui.core.Widget){gi.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var gl=this;

while(gl.getAnonymous()){gl=gl.getLayoutParent();

if(!gl){return null;
}}return gl;
},getFocusTarget:function(){var gm=this;

if(!gm.getEnabled()){return null;
}
while(gm.getAnonymous()||!gm.getFocusable()){gm=gm.getLayoutParent();

if(!gm||!gm.getEnabled()){return null;
}}return gm;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(gn,go){var gp=this.getFocusElement();
if(gn){var gq=this.getTabIndex();

if(gq==null){gq=1;
}gp.setAttribute(bo,gq);
if((qx.core.Environment.get(bx)==bs&&parseFloat(qx.core.Environment.get(k))<8)||(qx.core.Environment.get(bx)==bs&&qx.core.Environment.get(cI)<8)){gp.setAttribute(U,bF);
}else{gp.setStyle(bc,W);
}}else{if(gp.isNativelyFocusable()){gp.setAttribute(bo,-1);
}else if(go){gp.setAttribute(bo,null);
}}},_applyKeepFocus:function(gr){var gs=this.getFocusElement();
gs.setAttribute(ce,gr?bt:null);
},_applyKeepActive:function(gt){var gu=this.getContainerElement();
gu.setAttribute(ci,gt?bt:null);
},_applyTabIndex:function(gv){if(gv==null){gv=1;
}else if(gv<1||gv>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&gv!=null){this.getFocusElement().setAttribute(bo,gv);
}},_applySelectable:function(gw,gx){if(gx!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(gw);
},_applyEnabled:function(gy,gz){if(gy===false){this.addState(cG);
this.removeState(cB);
if(this.isFocusable()){this.removeState(cD);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(cG);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gA,gB,name){},_applyContextMenu:function(gC,gD){if(gD){gD.removeState(bq);

if(gD.getOpener()==this){gD.resetOpener();
}
if(!gC){this.removeListener(bq,this._onContextMenuOpen);
gD.removeListener(cE,this._onBeforeContextMenuOpen,this);
}}
if(gC){gC.setOpener(this);
gC.addState(bq);

if(!gD){this.addListener(bq,this._onContextMenuOpen);
gC.addListener(cE,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==cr&&this.hasListener(g)){this.fireDataEvent(g,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gE,gF){if(!this.isEnabled()&&gE===true){gE=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gE){this.addListener(bU,this._onDragStart);
this.addListener(cx,this._onDrag);
this.addListener(ca,this._onDragEnd);
this.addListener(bW,this._onDragChange);
}else{this.removeListener(bU,this._onDragStart);
this.removeListener(cx,this._onDrag);
this.removeListener(ca,this._onDragEnd);
this.removeListener(bW,this._onDragChange);
}this.getContainerElement().setAttribute(Q,gE?bt:null);
},_applyDroppable:function(gG,gH){if(!this.isEnabled()&&gG===true){gG=false;
}this.getContainerElement().setAttribute(be,gG?bt:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bS);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gI=qx.ui.core.DragDropCursor.getInstance();
var gJ=e.getCurrentAction();
gJ?gI.setAction(gJ):gI.resetAction();
},visualizeFocus:function(){this.addState(cD);
},visualizeBlur:function(){this.removeState(cD);
},scrollChildIntoView:function(gK,gL,gM,gN){gN=typeof gN==cg?true:gN;
var gO=qx.ui.core.queue.Layout;
var parent;
if(gN){gN=!gO.isScheduled(gK);
parent=gK.getLayoutParent();
if(gN&&parent){gN=!gO.isScheduled(parent);
if(gN){parent.getChildren().forEach(function(gP){gN=gN&&!gO.isScheduled(gP);
});
}}}this.scrollChildIntoViewX(gK,gL,gN);
this.scrollChildIntoViewY(gK,gM,gN);
},scrollChildIntoViewX:function(gQ,gR,gS){this.getContentElement().scrollChildIntoViewX(gQ.getContainerElement(),gR,gS);
},scrollChildIntoViewY:function(gT,gU,gV){this.getContentElement().scrollChildIntoViewY(gT.getContainerElement(),gU,gV);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gW){if(!this.__hp){return false;
}return !!this.__hp[gW];
},__hp:null,_getCreatedChildControls:function(){return this.__hp;
},getChildControl:function(gX,gY){if(!this.__hp){if(gY){return null;
}this.__hp={};
}var ha=this.__hp[gX];

if(ha){return ha;
}
if(gY===true){return null;
}return this._createChildControl(gX);
},_showChildControl:function(hb){var hc=this.getChildControl(hb);
hc.show();
return hc;
},_excludeChildControl:function(hd){var he=this.getChildControl(hd,true);

if(he){he.exclude();
}},_isChildControlVisible:function(hf){var hg=this.getChildControl(hf,true);

if(hg){return hg.isVisible();
}return false;
},_createChildControl:function(hh){if(!this.__hp){this.__hp={};
}else if(this.__hp[hh]){throw new Error("Child control '"+hh+"' already created!");
}var hl=hh.indexOf(r);

if(hl==-1){var hi=this._createChildControlImpl(hh);
}else{var hi=this._createChildControlImpl(hh.substring(0,hl),hh.substring(hl+1,hh.length));
}
if(!hi){throw new Error("Unsupported control: "+hh);
}hi.$$subcontrol=hh;
hi.$$subparent=this;
var hj=this.__hm;
var forward=this._forwardStates;

if(hj&&forward&&hi instanceof qx.ui.core.Widget){for(var hk in hj){if(forward[hk]){hi.addState(hk);
}}}this.fireDataEvent(cJ,hi);
return this.__hp[hh]=hi;
},_createChildControlImpl:function(hm,hn){return null;
},_disposeChildControls:function(){var hr=this.__hp;

if(!hr){return;
}var hp=qx.ui.core.Widget;

for(var hq in hr){var ho=hr[hq];

if(!hp.contains(this,ho)){ho.destroy();
}else{ho.dispose();
}}delete this.__hp;
},_findTopControl:function(){var hs=this;

while(hs){if(!hs.$$subparent){return hs;
}hs=hs.$$subparent;
}return null;
},getContainerLocation:function(ht){var hu=this.getContainerElement().getDomElement();
return hu?qx.bom.element.Location.get(hu,ht):null;
},getContentLocation:function(hv){var hw=this.getContentElement().getDomElement();
return hw?qx.bom.element.Location.get(hw,hv):null;
},setDomLeft:function(hx){var hy=this.getContainerElement().getDomElement();

if(hy){hy.style.left=hx+cw;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hz){var hA=this.getContainerElement().getDomElement();

if(hA){hA.style.top=hz+cw;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(hB,top){var hC=this.getContainerElement().getDomElement();

if(hC){hC.style.left=hB+cw;
hC.style.top=top+cw;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hD=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hE=this.getChildren();

for(var i=0,l=hE.length;i<l;i++){hD.add(hE[i].clone());
}}return hD;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bX)){if(this.__hd){qx.locale.Manager.getInstance().removeListenerById(this.__hd);
}}this.getContainerElement().setAttribute(Y,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}
if(this.getContextMenu()){this.setContextMenu(null);
}if(!qx.core.ObjectRegistry.inShutDown){var hG=qx.ui.core.Widget;
var hF=this.getContainerElement();

if(this.__gY){hF.remove(this.__gY);
hG.__gW.poolDecorator(this.__gY);
}
if(this.__ha){hF.remove(this.__ha);
hG.__gX.poolDecorator(this.__ha);
}this.clearSeparators();
this.__gY=this.__ha=this.__hg=null;
}else{this._disposeArray(E);
this._disposeObjects(bH,cl);
}this._disposeArray(M);
this.__hm=this.__hp=null;
this._disposeObjects(bi,J,bj,x);
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__dv=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__dv:null,__hq:{focusin:1,focusout:1,focus:1,blur:1},__hr:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__hq[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__hq[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__hq[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__hr[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__dv.getListeners(u,v,k);

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
}}},destruct:function(){this.__dv=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var c="abstract",b="qx.debug",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:c,extend:qx.core.Object,members:{__gv:null,_invalidChildrenCache:null,__kd:null,invalidateLayoutCache:function(){this.__gv=null;
},renderLayout:function(d,e){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__gv){return this.__gv;
}return this.__gv=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(f){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Environment.select(b,{"true":function(g,name,h){},"false":null}),_clearSeparators:function(){var i=this.__kd;

if(i instanceof qx.ui.core.LayoutItem){i.clearSeparators();
}},_renderSeparator:function(j,k){this.__kd.renderSeparator(j,k);
},connectToWidget:function(l){if(l&&this.__kd){throw new Error("It is not possible to manually set the connected widget.");
}this.__kd=l;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__kd;
},_applyLayoutChange:function(){if(this.__kd){this.__kd.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__kd.getLayoutChildren();
}},destruct:function(){this.__kd=this.__gv=null;
}});
})();
(function(){var u="",t='indexOf',s='slice',r='concat',q='toLocaleLowerCase',p="qx.type.BaseString",o='match',n="qx.debug",m='search',k='replace',d='toLowerCase',j='charCodeAt',g='split',c='substring',b='lastIndexOf',f='substr',e='toLocaleUpperCase',h='toUpperCase',a='charAt';
qx.Class.define(p,{extend:Object,construct:function(v){var v=v||u;
this.__ht=v;
this.length=v.length;
},members:{$$isString:true,length:0,__ht:null,toString:function(){return this.__ht;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(w,x){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(y,z){if(qx.core.Environment.get(n)){qx.Class.include(y,qx.core.MAssert);
}var A=[a,j,r,t,b,o,k,m,s,g,f,c,d,h,q,e];
z.valueOf=z.toString;

if(new y(u).valueOf()==null){delete z.valueOf;
}
for(var i=0,l=A.length;i<l;i++){z[A[i]]=String.prototype[A[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__hu=c;
this.__hv=d;
},members:{__hu:null,__hv:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hu,this.__hv);
}}});
})();
(function(){var m="_",l="",k="qx.debug",j="locale",h="_applyLocale",g="changeLocale",f="C",e="locale.variant",d="qx.dynlocale",c="qx.locale.Manager",a="String",b="singleton";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hw=qx.$$translations||{};
this.__hx=qx.$$locales||{};
var n=qx.core.Environment.get(j);
var o=qx.core.Environment.get(e);

if(o!==l){n+=m+o;
}this.__hy=n;
this.setLocale(n||this.__hz);
},statics:{tr:function(p,q){var r=qx.lang.Array.fromArguments(arguments);
r.splice(0,1);
return qx.locale.Manager.getInstance().translate(p,r);
},trn:function(s,t,u,v){var w=qx.lang.Array.fromArguments(arguments);
w.splice(0,3);
if(u!=1){return qx.locale.Manager.getInstance().translate(t,w);
}else{return qx.locale.Manager.getInstance().translate(s,w);
}},trc:function(x,y,z){var A=qx.lang.Array.fromArguments(arguments);
A.splice(0,2);
return qx.locale.Manager.getInstance().translate(y,A);
},marktr:function(B){return B;
}},properties:{locale:{check:a,nullable:true,apply:h,event:g}},members:{__hz:f,__hA:null,__hB:null,__hw:null,__hx:null,__hy:null,getLanguage:function(){return this.__hB;
},getTerritory:function(){return this.getLocale().split(m)[1]||l;
},getAvailableLocales:function(C){var E=[];

for(var D in this.__hx){if(D!=this.__hz){if(this.__hx[D]===null&&!C){continue;
}E.push(D);
}}return E;
},__hC:function(F){var H;

if(F==null){return null;
}var G=F.indexOf(m);

if(G==-1){H=F;
}else{H=F.substring(0,G);
}return H;
},_applyLocale:function(I,J){if(qx.core.Environment.get(k)){if(!(I in this.__hx||I==this.__hy)){qx.log.Logger.warn("Locale: "+I+" not available.");
}}this.__hA=I;
this.__hB=this.__hC(I);
},addTranslation:function(K,L){var M=this.__hw;

if(M[K]){for(var N in L){M[K][N]=L[N];
}}else{M[K]=L;
}},addLocale:function(O,P){var Q=this.__hx;

if(Q[O]){for(var R in P){Q[O][R]=P[R];
}}else{Q[O]=P;
}},translate:function(S,T,U){var V=this.__hw;
return this.__hD(V,S,T,U);
},localize:function(W,X,Y){var ba=this.__hx;
return this.__hD(ba,W,X,Y);
},__hD:function(bb,bc,bd,be){if(qx.core.Environment.get(k)){this.assertObject(bb);
this.assertString(bc);
this.assertArray(bd);
}var bf;

if(!bb){return bc;
}
if(be){var bh=this.__hC(be);
}else{be=this.__hA;
bh=this.__hB;
}if(!bf&&bb[be]){bf=bb[be][bc];
}if(!bf&&bb[bh]){bf=bb[bh][bc];
}if(!bf&&bb[this.__hz]){bf=bb[this.__hz][bc];
}
if(!bf){bf=bc;
}
if(bd.length>0){var bg=[];

for(var i=0;i<bd.length;i++){var bi=bd[i];

if(bi&&bi.translate){bg[i]=bi.translate();
}else{bg[i]=bi;
}}bf=qx.lang.String.format(bf,bg);
}
if(qx.core.Environment.get(d)){bf=new qx.locale.LocalizedString(bf,bc,bd);
}return bf;
}},destruct:function(){this.__hw=this.__hx=null;
}});
})();
(function(){var f="-",e="",d="qx.bom.client.Locale",c="locale",b="android",a="locale.variant";
qx.Bootstrap.define(d,{statics:{getLocale:function(){var g=qx.bom.client.Locale.__hE();
var h=g.indexOf(f);

if(h!=-1){g=g.substr(0,h);
}return g;
},getVariant:function(){var i=qx.bom.client.Locale.__hE();
var k=e;
var j=i.indexOf(f);

if(j!=-1){k=i.substr(j+1);
}return k;
},__hE:function(){var l=(navigator.userLanguage||navigator.language||e);
if(qx.bom.client.OperatingSystem.getName()==b){var m=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(m){l=m[0];
}}return l.toLowerCase();
}},defer:function(n){qx.core.Environment.add(c,n.getLocale);
qx.core.Environment.add(a,n.getVariant);
}});
})();
(function(){var k="px",j="div",i="img",h="",g="engine.name",f="no-repeat",d="qx.debug",c="scale-x",b="repeat",a="scale",J="mshtml",I="b64",H="scale-y",G="qx/icon",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",r='<img src="',s="qx.bom.element.Decoration",p="', sizingMethod='",q='"/>',n="png",o="')",l='"></div>',m='" style="',t="none",u="webkit",w=" ",v="repeat-x",y="DXImageTransform.Microsoft.AlphaImageLoader",x="qx/static/blank.gif",z="absolute";
qx.Class.define(s,{statics:{DEBUG:false,__hF:{},__hG:(qx.core.Environment.get(g)==J)&&qx.core.Environment.get(D)<9,__hH:qx.core.Environment.select(g,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hI:{"scale-x":i,"scale-y":i,"scale":i,"repeat":j,"no-repeat":j,"repeat-x":j,"repeat-y":j},update:function(K,L,M,N){var P=this.getTagName(M,L);

if(P!=K.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var Q=this.getAttributes(L,M,N);

if(P===i){K.src=Q.src||qx.util.ResourceManager.getInstance().toUri(x);
}if(K.style.backgroundPosition!=h&&Q.style.backgroundPosition===undefined){Q.style.backgroundPosition=null;
}if(K.style.clip!=h&&Q.style.clip===undefined){Q.style.clip=null;
}var O=qx.bom.element.Style;
O.setStyles(K,Q.style);
if(this.__hG){try{K.filters[y].apply();
}catch(e){}}},create:function(R,S,T){var U=this.getTagName(S,R);
var W=this.getAttributes(R,S,T);
var V=qx.bom.element.Style.compile(W.style);

if(U===i){return r+W.src+m+V+q;
}else{return B+V+l;
}},getTagName:function(X,Y){if(Y&&this.__hG&&this.__hH[X]&&qx.lang.String.endsWith(Y,F)){return j;
}return this.__hI[X];
},getAttributes:function(ba,bb,bc){if(!bc){bc={};
}
if(!bc.position){bc.position=z;
}
if((qx.core.Environment.get(g)==J)){bc.fontSize=0;
bc.lineHeight=0;
}else if((qx.core.Environment.get(g)==u)){bc.WebkitUserDrag=t;
}var be=qx.util.ResourceManager.getInstance().getImageFormat(ba)||qx.io.ImageLoader.getFormat(ba);

if(qx.core.Environment.get(d)){if(ba!=null&&be==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+ba+"'!");
}}var bd;
if(this.__hG&&this.__hH[bb]&&be===n){bd=this.__hL(bc,bb,ba);
}else{if(bb===a){bd=this.__hM(bc,bb,ba);
}else if(bb===c||bb===H){bd=this.__hN(bc,bb,ba);
}else{bd=this.__hQ(bc,bb,ba);
}}return bd;
},__hJ:function(bf,bh,bi){if(bf.width==null&&bh!=null){bf.width=bh+k;
}
if(bf.height==null&&bi!=null){bf.height=bi+k;
}return bf;
},__hK:function(bj){var bk=qx.util.ResourceManager.getInstance().getImageWidth(bj)||qx.io.ImageLoader.getWidth(bj);
var bl=qx.util.ResourceManager.getInstance().getImageHeight(bj)||qx.io.ImageLoader.getHeight(bj);
return {width:bk,height:bl};
},__hL:function(bm,bn,bo){var br=this.__hK(bo);
bm=this.__hJ(bm,br.width,br.height);
var bq=bn==f?E:a;
var bp=C+qx.util.ResourceManager.getInstance().toUri(bo)+p+bq+o;
bm.filter=bp;
bm.backgroundImage=bm.backgroundRepeat=h;
return {style:bm};
},__hM:function(bs,bt,bu){var bv=qx.util.ResourceManager.getInstance().toUri(bu);
var bw=this.__hK(bu);
bs=this.__hJ(bs,bw.width,bw.height);
return {src:bv,style:bs};
},__hN:function(bx,by,bz){var bA=qx.util.ResourceManager.getInstance();
var bD=bA.getCombinedFormat(bz);
var bF=this.__hK(bz);
var bB;

if(bD){var bE=bA.getData(bz);
var bC=bE[4];

if(bD==I){bB=bA.toDataUri(bz);
}else{bB=bA.toUri(bC);
}
if(by===c){bx=this.__hO(bx,bE,bF.height);
}else{bx=this.__hP(bx,bE,bF.width);
}return {src:bB,style:bx};
}else{if(qx.core.Environment.get(d)){this.__hS(bz);
}
if(by==c){bx.height=bF.height==null?null:bF.height+k;
}else if(by==H){bx.width=bF.width==null?null:bF.width+k;
}bB=bA.toUri(bz);
return {src:bB,style:bx};
}},__hO:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageHeight(bH[4]);
bG.clip={top:-bH[6],height:bI};
bG.height=bJ+k;
if(bG.top!=null){bG.top=(parseInt(bG.top,10)+bH[6])+k;
}else if(bG.bottom!=null){bG.bottom=(parseInt(bG.bottom,10)+bI-bJ-bH[6])+k;
}return bG;
},__hP:function(bK,bL,bM){var bN=qx.util.ResourceManager.getInstance().getImageWidth(bL[4]);
bK.clip={left:-bL[5],width:bM};
bK.width=bN+k;
if(bK.left!=null){bK.left=(parseInt(bK.left,10)+bL[5])+k;
}else if(bK.right!=null){bK.right=(parseInt(bK.right,10)+bM-bN-bL[5])+k;
}return bK;
},__hQ:function(bO,bP,bQ){var bT=qx.util.ResourceManager.getInstance();
var bY=bT.getCombinedFormat(bQ);
var cb=this.__hK(bQ);
if(bY&&bP!==b){var ca=bT.getData(bQ);
var bX=ca[4];

if(bY==I){var bW=bT.toDataUri(bQ);
var bV=0;
var bU=0;
}else{var bW=bT.toUri(bX);
var bV=ca[5];
var bU=ca[6];
}var bR=qx.bom.element.Background.getStyles(bW,bP,bV,bU);

for(var bS in bR){bO[bS]=bR[bS];
}
if(cb.width!=null&&bO.width==null&&(bP==A||bP===f)){bO.width=cb.width+k;
}
if(cb.height!=null&&bO.height==null&&(bP==v||bP===f)){bO.height=cb.height+k;
}return {style:bO};
}else{if(qx.core.Environment.get(d)){if(bP!==b){this.__hS(bQ);
}}bO=this.__hJ(bO,cb.width,cb.height);
bO=this.__hR(bO,bQ,bP);
return {style:bO};
}},__hR:function(cc,cd,ce){var top=null;
var ci=null;

if(cc.backgroundPosition){var cf=cc.backgroundPosition.split(w);
ci=parseInt(cf[0],10);

if(isNaN(ci)){ci=cf[0];
}top=parseInt(cf[1],10);

if(isNaN(top)){top=cf[1];
}}var ch=qx.bom.element.Background.getStyles(cd,ce,ci,top);

for(var cg in ch){cc[cg]=ch[cg];
}if(cc.filter){cc.filter=h;
}return cc;
},__hS:function(cj){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cj)&&cj.indexOf(G)==-1){if(!this.__hF[cj]){qx.log.Logger.debug("Potential clipped image candidate: "+cj);
this.__hF[cj]=true;
}}},isAlphaImageLoaderEnabled:function(){return qx.bom.element.Decoration.__hG;
}}});
})();
(function(){var c="html.image.naturaldimensions",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__cP:{},__hT:{width:null,height:null},__hU:/\.(png|gif|jpg|jpeg|bmp)\b/i,__hV:/^data:image\/(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cP[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__cP[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__cP[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__cP[k];

if(!m||!m.format){var o=this.__hV.exec(k);

if(o!=null){var p=(m&&qx.lang.Type.isNumber(m.width)?m.width:this.__hT.width);
var n=(m&&qx.lang.Type.isNumber(m.height)?m.height:this.__hT.height);
m={loaded:true,format:o[1],width:p,height:n};
}}return m?m.format:null;
},getSize:function(q){var r=this.__cP[q];
return r?{width:r.width,height:r.height}:this.__hT;
},getWidth:function(s){var t=this.__cP[s];
return t?t.width:null;
},getHeight:function(u){var v=this.__cP[u];
return v?v.height:null;
},load:function(w,x,y){var z=this.__cP[w];

if(!z){z=this.__cP[w]={};
}if(x&&!y){y=window;
}if(z.loaded||z.loading||z.failed){if(x){if(z.loading){z.callbacks.push(x,y);
}else{x.call(y,w,z);
}}}else{z.loading=true;
z.callbacks=[];

if(x){z.callbacks.push(x,y);
}var B=new Image();
var A=qx.lang.Function.listener(this.__hW,this,B,w);
B.onload=A;
B.onerror=A;
B.src=w;
z.element=B;
}},abort:function(C){var D=this.__cP[C];

if(D&&!D.loaded){D.aborted=true;
var F=D.callbacks;
var E=D.element;
E.onload=E.onerror=null;
delete D.callbacks;
delete D.element;
delete D.loading;

for(var i=0,l=F.length;i<l;i+=2){F[i].call(F[i+1],C,D);
}}this.__cP[C]=null;
},__hW:qx.event.GlobalError.observeMethod(function(event,G,H){var I=this.__cP[H];
if(event.type===b){I.loaded=true;
I.width=this.__hX(G);
I.height=this.__hY(G);
var J=this.__hU.exec(H);

if(J!=null){I.format=J[1];
}}else{I.failed=true;
}G.onload=G.onerror=null;
var K=I.callbacks;
delete I.loading;
delete I.callbacks;
delete I.element;
for(var i=0,l=K.length;i<l;i+=2){K[i].call(K[i+1],H,I);
}}),__hX:function(L){return qx.core.Environment.get(c)?L.naturalWidth:L.width;
},__hY:function(M){return qx.core.Environment.get(c)?M.naturalHeight:M.height;
}}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__ia:[n,null,m,i,null,r,k,null,r],__ib:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ic:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__id:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__ic(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__id(G)){G=q+G+q;
}var H=this.__ia;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__ib;
}var L=this.__ic(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__id(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
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
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="left",e="best-fit",d="mouse",c="bottom-left",b="direct",a="Boolean",z="bottom-right",y="widget",x="qx.ui.core.MPlacement",w="left-top",v="offsetRight",u="shorthand",t="offsetLeft",s="top-left",r="appear",q="offsetBottom",o="top",p="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(x,{statics:{__dI:null,__im:f,setVisibleElement:function(A){this.__dI=A;
},getVisibleElement:function(){return this.__dI;
},setMoveDirection:function(B){if(B===o||B===f){this.__im=B;
}else{throw new Error("Invalid value for the parameter 'direction' "+"[qx.ui.core.MPlacement.setMoveDirection()], the value was '"+B+"' "+"but 'top' or 'left' are allowed.");
}},getMoveDirection:function(){return this.__im;
}},properties:{position:{check:[s,p,c,z,w,l,k,n],init:c,themeable:true},placeMethod:{check:[y,d],init:d,themeable:true},domMove:{check:a,init:false},placementModeX:{check:[b,h,e],init:h,themeable:true},placementModeY:{check:[b,h,e],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,v,q,t],mode:u,themeable:true}},members:{__in:null,__io:null,__ip:null,getLayoutLocation:function(C){var F,E,G,top;
E=C.getBounds();
G=E.left;
top=E.top;
var H=E;
C=C.getLayoutParent();

while(C&&!C.isRootWidget()){E=C.getBounds();
G+=E.left;
top+=E.top;
F=C.getInsets();
G+=F.left;
top+=F.top;
C=C.getLayoutParent();
}if(C.isRootWidget()){var D=C.getContainerLocation();

if(D){G+=D.left;
top+=D.top;
}}return {left:G,top:top,right:G+H.width,bottom:top+H.height};
},moveTo:function(I,top){var O=qx.ui.core.MPlacement.getVisibleElement();
if(O){var N=this.getBounds();
var M=O.getContentLocation();
if(N&&M){var L=top+N.height;
var K=I+N.width;
if((K>M.left&&I<M.right)&&(L>M.top&&top<M.bottom)){var J=qx.ui.core.MPlacement.getMoveDirection();

if(J===f){I=Math.max(M.left-N.width,0);
}else{top=Math.max(M.top-N.height,0);
}}}}
if(this.getDomMove()){this.setDomPosition(I,top);
}else{this.setLayoutProperties({left:I,top:top});
}},placeToWidget:function(P,Q){if(Q){this.__iq();
this.__in=qx.lang.Function.bind(this.placeToWidget,this,P,false);
qx.event.Idle.getInstance().addListener(i,this.__in);
this.__ip=function(){this.__iq();
};
this.addListener(g,this.__ip,this);
}var R=P.getContainerLocation()||this.getLayoutLocation(P);
this.__is(R);
},__iq:function(){if(this.__in){qx.event.Idle.getInstance().removeListener(i,this.__in);
this.__in=null;
}
if(this.__ip){this.removeListener(g,this.__ip,this);
this.__ip=null;
}},placeToMouse:function(event){var T=event.getDocumentLeft();
var top=event.getDocumentTop();
var S={left:T,top:top,right:T,bottom:top};
this.__is(S);
},placeToElement:function(U,V){var location=qx.bom.element.Location.get(U);
var W={left:location.left,top:location.top,right:location.left+U.offsetWidth,bottom:location.top+U.offsetHeight};
if(V){this.__in=qx.lang.Function.bind(this.placeToElement,this,U,false);
qx.event.Idle.getInstance().addListener(i,this.__in);
this.addListener(g,function(){if(this.__in){qx.event.Idle.getInstance().removeListener(i,this.__in);
this.__in=null;
}},this);
}this.__is(W);
},placeToPoint:function(X){var Y={left:X.left,top:X.top,right:X.left,bottom:X.top};
this.__is(Y);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__ir:function(ba){var bb=null;

if(this._computePlacementSize){var bb=this._computePlacementSize();
}else if(this.isVisible()){var bb=this.getBounds();
}
if(bb==null){this.addListenerOnce(r,function(){this.__ir(ba);
},this);
}else{ba.call(this,bb);
}},__is:function(bc){this.__ir(function(bd){var be=qx.util.placement.Placement.compute(bd,this.getLayoutParent().getBounds(),bc,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(be.left,be.top);
});
}},destruct:function(){this.__iq();
}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__it=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__it:null,_applyTimeoutInterval:function(h){this.__it.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__it){this.__it.stop();
}this.__it=null;
}});
})();
(function(){var j="top",i="right",h="bottom",g="left",f="edge-start",e="align-start",d="align-end",c="edge-end",b="qx.util.placement.AbstractAxis",a="-",F="best-fit",E="size",D="target.bottom",C="offsets",B="size.width",A="offsets.bottom",z='__iu',y="qx.util.placement.Placement",x="qx.debug",w="keep-align",q="target.right",r="direct",o="offsets.right",p="target",m="offsets.left",n="area",k="target.top",l="area.height",s="target.left",t="area.width",v="size.height",u="offsets.top";
qx.Class.define(y,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__iu=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:b},axisY:{check:b},edge:{check:[j,i,h,g],init:j},align:{check:[j,i,h,g],init:i}},statics:{__iv:null,compute:function(G,H,I,J,K,L,M){this.__iv=this.__iv||new qx.util.placement.Placement();
var P=K.split(a);
var O=P[0];
var N=P[1];
this.__iv.set({axisX:this.__iz(L),axisY:this.__iz(M),edge:O,align:N});
return this.__iv.compute(G,H,I,J);
},__iw:null,__ix:null,__iy:null,__iz:function(Q){switch(Q){case r:this.__iw=this.__iw||new qx.util.placement.DirectAxis();
return this.__iw;
case w:this.__ix=this.__ix||new qx.util.placement.KeepAlignAxis();
return this.__ix;
case F:this.__iy=this.__iy||new qx.util.placement.BestFitAxis();
return this.__iy;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__iu:null,compute:function(R,S,T,U){if(qx.core.Environment.get(x)){this.assertObject(R,E);
this.assertNumber(R.width,B);
this.assertNumber(R.height,v);
this.assertObject(S,n);
this.assertNumber(S.width,t);
this.assertNumber(S.height,l);
this.assertObject(T,p);
this.assertNumber(T.top,k);
this.assertNumber(T.right,q);
this.assertNumber(T.bottom,D);
this.assertNumber(T.left,s);
this.assertObject(U,C);
this.assertNumber(U.top,u);
this.assertNumber(U.right,o);
this.assertNumber(U.bottom,A);
this.assertNumber(U.left,m);
}var V=this.getAxisX()||this.__iu;
var X=V.computeStart(R.width,{start:T.left,end:T.right},{start:U.left,end:U.right},S.width,this.__iA());
var W=this.getAxisY()||this.__iu;
var top=W.computeStart(R.height,{start:T.top,end:T.bottom},{start:U.top,end:U.bottom},S.height,this.__iB());
return {left:X,top:top};
},__iA:function(){var ba=this.getEdge();
var Y=this.getAlign();

if(ba==g){return f;
}else if(ba==i){return c;
}else if(Y==g){return e;
}else if(Y==i){return d;
}},__iB:function(){var bc=this.getEdge();
var bb=this.getAlign();

if(bc==j){return f;
}else if(bc==h){return c;
}else if(bb==j){return e;
}else if(bb==h){return d;
}}},destruct:function(){this._disposeObjects(z);
}});
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
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="div",e="replacement",d="qx.event.type.Event",c="engine.name",b="hidden",a="Boolean",C="px",B="http",A="engine.version",z="scale",y="changeSource",x="qx.ui.basic.Image",w="loaded",v="qx.debug",u="__iC",t="-disabled.$1",q="loadingFailed",r="String",o="_applySource",p="img",m="data:image/",n="image",k="mshtml",l="_applyScale",s="no-repeat";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(D){this.__iC={};
qx.ui.core.Widget.call(this);

if(D){this.setSource(D);
}},properties:{source:{check:r,init:null,nullable:true,event:y,apply:o,themeable:true},scale:{check:a,init:false,themeable:true,apply:l},appearance:{refine:true,init:n},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:d,loaded:d},members:{__iD:null,__iE:null,__fm:null,__iC:null,getContentElement:function(){return this.__iI();
},_createContentElement:function(){return this.__iI();
},_getContentHint:function(){return {width:this.__iD||0,height:this.__iE||0};
},_applyEnabled:function(E,F){qx.ui.core.Widget.prototype._applyEnabled.call(this,E,F);

if(this.getSource()){this._styleSource();
}},_applySource:function(G){this._styleSource();
},_applyScale:function(H){this._styleSource();
},__iF:function(I){this.__fm=I;
},__iG:function(){if(this.__fm==null){var K=this.getSource();
var J=false;

if(K!=null){J=qx.lang.String.endsWith(K,g);
}
if(this.getScale()&&J&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__fm=h;
}else if(this.getScale()){this.__fm=i;
}else{this.__fm=j;
}}return this.__fm;
},__iH:function(L){var M;
var N;

if(L==h){M=true;
N=f;
}else if(L==j){M=false;
N=f;
}else{M=true;
N=p;
}var O=new qx.html.Image(N);
O.setScale(M);
O.setStyles({"overflowX":b,"overflowY":b});
return O;
},__iI:function(){var P=this.__iG();

if(this.__iC[P]==null){this.__iC[P]=this.__iH(P);
}return this.__iC[P];
},_styleSource:function(){var Q=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!Q){this.getContentElement().resetSource();
return;
}this.__iJ(Q);

if((qx.core.Environment.get(c)==k)&&parseInt(qx.core.Environment.get(A),10)<9){var R=this.getScale()?z:s;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(R,Q);
}if(qx.util.ResourceManager.getInstance().has(Q)){this.__iL(this.getContentElement(),Q);
}else if(qx.io.ImageLoader.isLoaded(Q)){this.__iM(this.getContentElement(),Q);
}else{this.__iN(this.getContentElement(),Q);
}},__iJ:qx.core.Environment.select(c,{"mshtml":function(S){var U=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var T=qx.lang.String.endsWith(S,g);

if(U&&T){if(this.getScale()&&this.__iG()!=h){this.__iF(h);
}else if(!this.getScale()&&this.__iG()!=j){this.__iF(j);
}}else{if(this.getScale()&&this.__iG()!=i){this.__iF(i);
}else if(!this.getScale()&&this.__iG()!=j){this.__iF(j);
}}this.__iK(this.__iI());
},"default":function(V){if(this.getScale()&&this.__iG()!=i){this.__iF(i);
}else if(!this.getScale()&&this.__iG(j)){this.__iF(j);
}this.__iK(this.__iI());
}}),__iK:function(W){var ba=this.getContainerElement();
var bb=ba.getChild(0);

if(bb!=W){if(bb!=null){var bd=C;
var X={};
var Y=this.getInnerSize();

if(Y!=null){X.width=Y.width+bd;
X.height=Y.height+bd;
}var bc=this.getInsets();
X.left=bc.left+bd;
X.top=bc.top+bd;
X.zIndex=10;
W.setStyles(X,true);
W.setSelectable(this.getSelectable());
ba.removeAt(0);
ba.addAt(W,0);
}}},__iL:function(be,bf){var bh=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bg=bf.replace(/\.([a-z]+)$/,t);

if(bh.has(bg)){bf=bg;
this.addState(e);
}else{this.removeState(e);
}}if(be.getSource()===bf){return;
}be.setSource(bf);
this.__iP(bh.getImageWidth(bf),bh.getImageHeight(bf));
},__iM:function(bi,bj){var bl=qx.io.ImageLoader;
bi.setSource(bj);
var bk=bl.getWidth(bj);
var bm=bl.getHeight(bj);
this.__iP(bk,bm);
},__iN:function(bn,bo){var br=qx.io.ImageLoader;

if(qx.core.Environment.get(v)){var bp=bo.toLowerCase();
var bq=qx.lang.String.startsWith;

if(!bq(bp,B)&&!bq(bp,m)){var self=this.self(arguments);

if(!self.__Ga){self.__Ga={};
}
if(!self.__Ga[bo]){this.debug("try to load an unmanaged relative image: "+bo);
self.__Ga[bo]=true;
}}}if(!br.isFailed(bo)){br.load(bo,this.__iO,this);
}else{if(bn!=null){bn.resetSource();
}}},__iO:function(bs,bt){if(this.$$disposed===true){return;
}if(bs!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bt.failed){this.warn("Image could not be loaded: "+bs);
this.fireEvent(q);
}else if(bt.aborted){return ;
}else{this.fireEvent(w);
}this._styleSource();
},__iP:function(bu,bv){if(bu!==this.__iD||bv!==this.__iE){this.__iD=bu;
this.__iE=bv;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(u);
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
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);

if(e!=null){this._setLayout(e);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
},_afterRemoveChild:function(g){this.fireNonBubblingEvent(a,qx.event.type.Data,[g]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
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
(function(){var g="mousedown",f="qx.debug",d="__nt",c="blur",b="qx.ui.popup.Manager",a="singleton";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nt=[];
qx.event.Registration.addListener(document.documentElement,g,this.__nv,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__nt:null,add:function(h){if(qx.core.Environment.get(f)){if(!(h instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+h);
}}this.__nt.push(h);
this.__nu();
},remove:function(j){if(qx.core.Environment.get(f)){if(!(j instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+j);
}}
if(this.__nt){qx.lang.Array.remove(this.__nt,j);
this.__nu();
}},hideAll:function(){var k;
var m=this.__nt;

if(m){for(var i=0,l=m.length;i<l;i++){var k=m[i];
k.getAutoHide()&&k.exclude();
}}},__nu:function(){var n=1e7;

for(var i=0;i<this.__nt.length;i++){this.__nt[i].setZIndex(n++);
}},__nv:function(e){var p=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var q=this.__nt;

for(var i=0;i<q.length;i++){var o=q[i];

if(!o.getAutoHide()||p==o||qx.ui.core.Widget.contains(o,p)){continue;
}o.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__nv,this,true);
this._disposeArray(d);
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
(function(){var d="' is not supported by the Grow layout!",c="qx.ui.layout.Grow",b="qx.debug",a="The property '";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(b,{"true":function(e,name,f){this.assert(false,a+name+d);
},"false":null}),renderLayout:function(g,h){var n=this._getLayoutChildren();
var m,o,k,j;
for(var i=0,l=n.length;i<l;i++){m=n[i];
o=m.getSizeHint();
k=g;

if(k<o.minWidth){k=o.minWidth;
}else if(k>o.maxWidth){k=o.maxWidth;
}j=h;

if(j<o.minHeight){j=o.minHeight;
}else if(j>o.maxHeight){j=o.maxHeight;
}m.renderLayout(0,0,k,j);
}},_computeSizeHint:function(){var v=this._getLayoutChildren();
var t,x;
var w=0,u=0;
var s=0,q=0;
var p=Infinity,r=Infinity;
for(var i=0,l=v.length;i<l;i++){t=v[i];
x=t.getSizeHint();
w=Math.max(w,x.width);
u=Math.max(u,x.height);
s=Math.max(s,x.minWidth);
q=Math.max(q,x.minHeight);
p=Math.min(p,x.maxWidth);
r=Math.min(r,x.maxHeight);
}return {width:w,height:u,minWidth:s,minHeight:q,maxWidth:p,maxHeight:r};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",z="changeIcon",y="qx.ui.basic.Atom",x="changeLabel",w="Integer",v="_applyIconPosition",u="qx.debug",t="bottom-left",s="top-left",r="top",q="right",o="_applyRich",p="_applyIcon",m="_applyShow",n="_applyLabel",k="_applyGap",l="atom";
qx.Class.define(y,{extend:qx.ui.core.Widget,construct:function(A,B){if(qx.core.Environment.get(u)){this.assertArgumentsCount(arguments,0,2);
}qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(A!=null){this.setLabel(A);
}
if(B!=null){this.setIcon(B);
}},properties:{appearance:{refine:true,init:l},label:{apply:n,nullable:true,check:f,event:x},rich:{check:h,init:false,apply:o},icon:{check:f,apply:p,nullable:true,themeable:true,event:z},gap:{check:w,nullable:false,event:d,apply:k,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:m,event:c},iconPosition:{init:e,check:[r,q,b,e,s,t],themeable:true,apply:v},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(C,D){var E;

switch(C){case j:E=new qx.ui.basic.Label(this.getLabel());
E.setAnonymous(true);
E.setRich(this.getRich());
this._add(E);

if(this.getLabel()==null||this.getShow()===i){E.exclude();
}break;
case i:E=new qx.ui.basic.Image(this.getIcon());
E.setAnonymous(true);
this._addAt(E,0);

if(this.getIcon()==null||this.getShow()===j){E.exclude();
}break;
}return E||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,C);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(F,G){var H=this.getChildControl(j,true);

if(H){H.setValue(F);
}this._handleLabel();
},_applyRich:function(I,J){var K=this.getChildControl(j,true);

if(K){K.setRich(I);
}},_applyIcon:function(L,M){var N=this.getChildControl(i,true);

if(N){N.setSource(L);
}this._handleIcon();
},_applyGap:function(O,P){this._getLayout().setGap(O);
},_applyShow:function(Q,R){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(S,T){this._getLayout().setIconPosition(S);
},_applyCenter:function(U,V){this._getLayout().setCenter(U);
},_applySelectable:function(W,X){qx.ui.core.Widget.prototype._applySelectable.call(this,W,X);
var Y=this.getChildControl(j,true);

if(Y){this.getChildControl(j).setSelectable(W);
}}}});
})();
(function(){var p="bottom",o="top",n="_applyLayoutChange",m="top-left",l="bottom-left",k="left",j="right",h="middle",g="' is not supported by the Atom layout!",f="qx.debug",c="center",e="qx.ui.layout.Atom",d="Integer",b="The property '",a="Boolean";
qx.Class.define(e,{extend:qx.ui.layout.Abstract,properties:{gap:{check:d,init:4,apply:n},iconPosition:{check:[k,o,j,p,m,l],init:k,apply:n},center:{check:a,init:false,apply:n}},members:{verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(q,name,r){this.assert(false,b+name+g);
},"false":null}),renderLayout:function(s,t){var C=qx.ui.layout.Util;
var v=this.getIconPosition();
var y=this._getLayoutChildren();
var length=y.length;
var N,top,D,w;
var I,B;
var G=this.getGap();
var L=this.getCenter();
if(v===p||v===j){var E=length-1;
var z=-1;
var x=-1;
}else{var E=0;
var z=length;
var x=1;
}if(v==o||v==p){if(L){var H=0;

for(var i=E;i!=z;i+=x){w=y[i].getSizeHint().height;

if(w>0){H+=w;

if(i!=E){H+=G;
}}}top=Math.round((t-H)/2);
}else{top=0;
}
for(var i=E;i!=z;i+=x){I=y[i];
B=I.getSizeHint();
D=Math.min(B.maxWidth,Math.max(s,B.minWidth));
w=B.height;
N=C.computeHorizontalAlignOffset(c,D,s);
I.renderLayout(N,top,D,w);
if(w>0){top+=w+G;
}}}else{var A=s;
var u=null;
var K=0;

for(var i=E;i!=z;i+=x){I=y[i];
D=I.getSizeHint().width;

if(D>0){if(!u&&I instanceof qx.ui.basic.Label){u=I;
}else{A-=D;
}K++;
}}
if(K>1){var J=(K-1)*G;
A-=J;
}
if(u){var B=u.getSizeHint();
var F=Math.max(B.minWidth,Math.min(A,B.maxWidth));
A-=F;
}
if(L&&A>0){N=Math.round(A/2);
}else{N=0;
}
for(var i=E;i!=z;i+=x){I=y[i];
B=I.getSizeHint();
w=Math.min(B.maxHeight,Math.max(t,B.minHeight));

if(I===u){D=F;
}else{D=B.width;
}var M=h;

if(v==m){M=o;
}else if(v==l){M=p;
}top=C.computeVerticalAlignOffset(M,B.height,t);
I.renderLayout(N,top,D,w);
if(D>0){N+=D+G;
}}}},_computeSizeHint:function(){var Y=this._getLayoutChildren();
var length=Y.length;
var Q,W;
if(length===1){var Q=Y[0].getSizeHint();
W={width:Q.width,height:Q.height,minWidth:Q.minWidth,minHeight:Q.minHeight};
}else{var U=0,V=0;
var R=0,T=0;
var S=this.getIconPosition();
var X=this.getGap();

if(S===o||S===p){var O=0;

for(var i=0;i<length;i++){Q=Y[i].getSizeHint();
V=Math.max(V,Q.width);
U=Math.max(U,Q.minWidth);
if(Q.height>0){T+=Q.height;
R+=Q.minHeight;
O++;
}}
if(O>1){var P=(O-1)*X;
T+=P;
R+=P;
}}else{var O=0;

for(var i=0;i<length;i++){Q=Y[i].getSizeHint();
T=Math.max(T,Q.height);
R=Math.max(R,Q.minHeight);
if(Q.width>0){V+=Q.width;
U+=Q.minWidth;
O++;
}}
if(O>1){var P=(O-1)*X;
V+=P;
U+=P;
}}W={minWidth:U,width:V,minHeight:R,height:T};
}return W;
}}});
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
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="color",j="qx.dynlocale",i="Boolean",h="qx.debug",g="enabled",f="changeLocale",d="os.name",c="_applyTextAlign",b="qx.ui.core.Widget",a="nowrap",K="changeStatus",J="changeTextAlign",I="_applyWrap",H="changeValue",G="qx.ui.basic.Label",F="osx",E="css.textoverflow",D="html.xul",C="_applyValue",B="center",r="_applyBuddy",s="String",p="whiteSpace",q="textAlign",n="engine.version",o="right",l="gecko",m="justify",t="changeRich",u="normal",w="_applyRich",v="engine.name",y="click",x="label",A="left",z="A";
qx.Class.define(G,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(L){qx.ui.core.Widget.call(this);

if(L!=null){this.setValue(L);
}
if(qx.core.Environment.get(j)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:t,apply:w},wrap:{check:i,init:true,apply:I},value:{check:s,apply:C,event:H,nullable:true},buddy:{check:b,apply:r,nullable:true,init:null,dereference:true},textAlign:{check:[A,B,o,m],nullable:true,themeable:true,apply:c,event:J},appearance:{refine:true,init:x},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__lj:null,__lk:null,__ll:null,__lm:null,__ln:null,_getContentHint:function(){if(this.__lk){this.__lo=this.__lp();
delete this.__lk;
}return {width:this.__lo.width,height:this.__lo.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(M){if(!qx.core.Environment.get(E)&&qx.core.Environment.get(D)){if(M&&!this.isRich()){if(qx.core.Environment.get(h)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,M);
},_getContentHeightForWidth:function(N){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__lp(N).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(O,P){this.getContentElement().setStyle(q,O);
},_applyTextColor:function(Q,R){if(Q){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(Q));
}else{this.getContentElement().removeStyle(k);
}},__lo:{width:0,height:0},_applyFont:function(S,T){if(T&&this.__lj&&this.__ln){this.__lj.removeListenerById(this.__ln);
this.__ln=null;
}var U;

if(S){this.__lj=qx.theme.manager.Font.getInstance().resolve(S);

if(this.__lj instanceof qx.bom.webfonts.WebFont){this.__ln=this.__lj.addListener(K,this._onWebFontStatusChange,this);
}U=this.__lj.getStyles();
}else{this.__lj=null;
U=qx.bom.Font.getDefaultStyles();
}if(this.getTextColor()!=null){delete U[k];
}this.getContentElement().setStyles(U);
this.__lk=true;
qx.ui.core.queue.Layout.add(this);
},__lp:function(V){var ba=qx.bom.Label;
var X=this.getFont();
var W=X?this.__lj.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||z;
var Y=this.getRich();

if(this.__ln){this.__lq();
}return Y?ba.getHtmlSize(content,W,V):ba.getTextSize(content,W);
},__lq:function(){if(qx.core.Environment.get(d)==F&&qx.core.Environment.get(v)==l&&parseInt(qx.core.Environment.get(n),10)>9){if(!this.getContentElement()){return;
}var bb=this.getContentElement().getDomElement();

if(bb){bb.innerHTML=bb.innerHTML;
}}},_applyBuddy:function(bc,bd){if(bd!=null){bd.removeBinding(this.__ll);
this.__ll=null;
this.removeListenerById(this.__lm);
this.__lm=null;
}
if(bc!=null){this.__ll=bc.bind(g,this,g);
this.__lm=this.addListener(y,function(){if(bc.isFocusable()){bc.focus.apply(bc);
}},this);
}},_applyRich:function(be){this.getContentElement().setRich(be);
this.__lk=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(bf,bg){if(bf&&!this.isRich()){if(qx.core.Environment.get(h)){this.warn("Only rich labels support wrap.");
}}
if(this.isRich()){var bh=bf?u:a;
this.getContentElement().setStyle(p,bh);
}},_onChangeLocale:qx.core.Environment.select(j,{"true":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"false":null}),_onWebFontStatusChange:function(bi){if(bi.getData().valid===true){this.__lk=true;
qx.ui.core.queue.Layout.add(this);
}},_applyValue:function(bj,bk){this.getContentElement().setValue(bj);
this.__lk=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Environment.get(j)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__ll!=null){var bl=this.getBuddy();

if(bl!=null&&!bl.isDisposed()){bl.removeBinding(this.__ll);
}}
if(this.__lj&&this.__ln){this.__lj.removeListenerById(this.__ln);
}this.__lj=this.__ll=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__lr:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__lr;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__lr==h){return;
}this.__lr=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var j="css.textoverflow",i="html.xul",h="auto",g="0",f="inherit",e="text",d="value",c="",b="hidden",a="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",B="nowrap",A="div",z="normal",y="engine.name",x="block",w="label",v="px",u="crop",t="gecko",s="end",q="100%",r="visible",o="qx.bom.Label",p="ellipsis",m="engine.version",n="mshtml",k="-1000px",l="absolute";
qx.Class.define(o,{statics:{__ls:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__lt:function(){var C=this.__lv(false);
document.body.insertBefore(C,document.body.firstChild);
return this._textElement=C;
},__lu:function(){var D=this.__lv(true);
document.body.insertBefore(D,document.body.firstChild);
return this._htmlElement=D;
},__lv:function(E){var F=qx.bom.Element.create(A);
var G=F.style;
G.width=G.height=h;
G.left=G.top=k;
G.visibility=b;
G.position=l;
G.overflow=r;
G.display=x;

if(E){G.whiteSpace=z;
}else{G.whiteSpace=B;

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var H=document.createElementNS(a,w);
var G=H.style;
G.padding=g;
G.margin=g;
G.width=h;

for(var I in this.__ls){G[I]=f;
}F.appendChild(H);
}}return F;
},__lw:function(J){var K={};

if(J){K.whiteSpace=z;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){K.display=x;
}else{K.overflow=b;
K.whiteSpace=B;
K[qx.core.Environment.get(j)]=p;
}return K;
},create:function(content,L,M){if(!M){M=window;
}var N=M.document.createElement(A);

if(L){N.useHtml=true;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var P=M.document.createElementNS(a,w);
var O=P.style;
O.cursor=f;
O.color=f;
O.overflow=b;
O.maxWidth=q;
O.padding=g;
O.margin=g;
O.width=h;
for(var Q in this.__ls){P.style[Q]=f;
}P.setAttribute(u,s);
N.appendChild(P);
}else{qx.bom.element.Style.setStyles(N,this.__lw(L));
}
if(content){this.setValue(N,content);
}return N;
},setValue:function(R,S){S=S||c;

if(R.useHtml){R.innerHTML=S;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){R.firstChild.setAttribute(d,S);
}else{qx.bom.element.Attribute.set(R,e,S);
}},getValue:function(T){if(T.useHtml){return T.innerHTML;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){return T.firstChild.getAttribute(d)||c;
}else{return qx.bom.element.Attribute.get(T,e);
}},getHtmlSize:function(content,U,V){var W=this._htmlElement||this.__lu();
W.style.width=V!=undefined?V+v:h;
W.innerHTML=content;
return this.__lx(W,U);
},getTextSize:function(X,Y){var ba=this._textElement||this.__lt();

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){ba.firstChild.setAttribute(d,X);
}else{qx.bom.element.Attribute.set(ba,e,X);
}return this.__lx(ba,Y);
},__lx:function(bb,bc){var bd=this.__ls;

if(!bc){bc={};
}
for(var be in bd){bb.style[be]=bc[be]||c;
}var bf=qx.bom.element.Dimension.getSize(bb);
if((qx.core.Environment.get(y)==t)){bf.width++;
}if((qx.core.Environment.get(y)==n)&&parseFloat(qx.core.Environment.get(m))>=9){bf.width++;
}return bf;
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
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__dv",b="qx.ui.window.MDesktop",a="__jK";
qx.Mixin.define(b,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__jK:null,__dv:null,getWindowManager:function(){if(!this.__dv){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__dv;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__dv){this.__dv.setDesktop(null);
}j.setDesktop(this);
this.__dv=j;
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
},getWindows:function(){if(!this.__jK){this.__jK=[];
}return this.__jK;
}},destruct:function(){this._disposeArray(a);
this._disposeObjects(c);
}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__jv",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__jv=this._createBlocker();
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__jv:null,_createBlocker:function(){return new qx.ui.core.Blocker(this);
},_applyBlockerColor:function(g,h){this.__jv.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__jv.setOpacity(i);
},block:function(){this.__jv.block();
},isBlocked:function(){return this.__jv.isBlocked();
},unblock:function(){this.__jv.unblock();
},forceUnblock:function(){this.__jv.forceUnblock();
},blockContent:function(k){this.__jv.blockContent(k);
},isContentBlocked:function(){return this.__jv.isContentBlocked();
},unblockContent:function(){this.__jv.unblockContent();
},forceUnblockContent:function(){this.__jv.forceUnblockContent();
},getBlocker:function(){return this.__jv;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="backgroundColor",b="_applyOpacity",a="Boolean",x="__jA",w="__jv",v="opacity",u="__it",t="interval",s="Tab",r="Color",q="qx.ui.root.Page",p="Number",o="qx.ui.core.Blocker",m="qx.ui.root.Application",n="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(q)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__jC,this);
}
if(qx.Class.isDefined(m)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__jw=[];
this.__jx=[];
this.__jy=[];
},properties:{color:{check:r,init:null,nullable:true,apply:n,themeable:true},opacity:{check:p,init:1,apply:b,themeable:true},keepBlockerActive:{check:a,init:false}},members:{__jv:null,__jz:0,__jA:null,__jy:null,__jw:null,__jx:null,__jB:null,__it:null,_isPageRoot:false,_widget:null,__jC:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__jD(c,C);
},_applyOpacity:function(D,E){this.__jD(v,D);
},__jD:function(F,G){var H=[];
this.__jv&&H.push(this.__jv);
this.__jA&&H.push(this.__jA);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__jw.push(I.getActive());
this.__jx.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__jw.length;

if(L>0){var K=this.__jw[L-1];

if(K){qx.bom.Element.activate(K);
}this.__jw.pop();
}var J=this.__jx.length;

if(J>0){var K=this.__jx[J-1];

if(K){qx.bom.Element.focus(this.__jx[J-1]);
}this.__jx.pop();
}},__jE:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__jv){this.__jv=this.__jE();
this.__jv.setStyle(l,15);
this._widget.getContainerElement().add(this.__jv);
this.__jv.exclude();
}return this.__jv;
},block:function(){this.__jz++;

if(this.__jz<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__jJ,this);
M.addListener(d,this.__jI,this);
M.addListener(j,this.__jI,this);
M.addListener(f,this.__jI,this);
}},isBlocked:function(){return this.__jz>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__jz--;

if(this.__jz<1){this.__jF();
this.__jz=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__jz=0;
this.__jF();
},__jF:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__jJ,this);
N.removeListener(d,this.__jI,this);
N.removeListener(j,this.__jI,this);
N.removeListener(f,this.__jI,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__jA){this.__jA=this.__jE();
this._widget.getContentElement().add(this.__jA);
this.__jA.exclude();
}return this.__jA;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__jy.push(O);

if(this.__jy.length<2){P.include();

if(this._isPageRoot){if(!this.__it){this.__it=new qx.event.Timer(300);
this.__it.addListener(t,this.__jH,this);
}this.__it.start();
this.__jH();
}}},isContentBlocked:function(){return this.__jy.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jy.pop();
var Q=this.__jy[this.__jy.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__jy.length<1){this.__jG();
this.__jy=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jy=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__jG();
},__jG:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__it.stop();
}},__jH:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__jI:function(e){if(e.getKeyIdentifier()==s){e.stop();
}},__jJ:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__jC,this);
}this._disposeObjects(x,w,u);
this.__jB=this.__jw=this.__jx=this._widget=this.__jy=null;
}});
})();
(function(){var u="help",t="contextmenu",s="changeGlobalCursor",r="engine.name",q="keypress",p="Boolean",o="root",n="",m=" !important",l="input",d="_applyGlobalCursor",k="Space",h="_applyNativeHelp",c=";",b="event.help",g="qx.ui.root.Abstract",f="abstract",i="textarea",a="String",j="*";
qx.Class.define(g,{type:f,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.addListener(q,this.__jM,this);
},properties:{appearance:{refine:true,init:o},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:a,nullable:true,themeable:true,apply:d,event:s},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:p,init:false,apply:h}},members:{__jL:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Environment.select(r,{"mshtml":function(v,w){},"default":function(x,y){var z=qx.bom.Stylesheet;
var A=this.__jL;

if(!A){this.__jL=A=z.createElement();
}z.removeAllRules(A);

if(x){z.addRule(A,j,qx.bom.element.Cursor.compile(x).replace(c,n)+m);
}}}),_applyNativeContextMenu:function(B,C){if(B){this.removeListener(t,this._onNativeContextMenu,this,true);
}else{this.addListener(t,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},__jM:function(e){if(e.getKeyIdentifier()!==k){return;
}var E=e.getTarget();
var D=qx.ui.core.FocusHandler.getInstance();

if(!D.isFocused(E)){return;
}var F=E.getContentElement().getNodeName();

if(F===l||F===i){return;
}e.preventDefault();
},_applyNativeHelp:function(G,H){if(qx.core.Environment.get(b)){if(H===false){qx.bom.Event.removeNativeListener(document,u,qx.lang.Function.returnFalse);
}
if(G===false){qx.bom.Event.addNativeListener(document,u,qx.lang.Function.returnFalse);
}}}},destruct:function(){this.__jL=null;
},defer:function(I,J){qx.ui.core.MChildrenHandling.remap(J);
}});
})();
(function(){var k="__jN",j="keypress",h="focusout",g="activate",f="Tab",d="singleton",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:d,construct:function(){qx.core.Object.call(this);
this.__jN={};
},members:{__jN:null,__jO:null,__jP:null,__jQ:null,connectTo:function(m){m.addListener(j,this.__eF,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(h,this._onFocusOut,this,true);
m.addListener(g,this._onActivate,this,true);
m.addListener(c,this._onDeactivate,this,true);
},addRoot:function(n){this.__jN[n.$$hash]=n;
},removeRoot:function(o){delete this.__jN[o.$$hash];
},getActiveWidget:function(){return this.__jO;
},isActive:function(p){return this.__jO==p;
},getFocusedWidget:function(){return this.__jP;
},isFocused:function(q){return this.__jP==q;
},isFocusRoot:function(r){return !!this.__jN[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__jO=t;
var s=this.__jR(t);

if(s!=this.__jQ){this.__jQ=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__jO==u){this.__jO=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__jP){this.__jP=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__jP){this.__jP=null;
w.visualizeBlur();
}},__eF:function(e){if(e.getKeyIdentifier()!=f){return;
}
if(!this.__jQ){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__jP;

if(!e.isShiftPressed()){var y=x?this.__jV(x):this.__jT();
}else{var y=x?this.__jW(x):this.__jU();
}if(y){y.tabFocus();
}},__jR:function(z){var A=this.__jN;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__jS:function(B,C){if(B===C){return 0;
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
},__jT:function(){return this.__ka(this.__jQ,null);
},__jU:function(){return this.__kb(this.__jQ,null);
},__jV:function(M){var N=this.__jQ;

if(N==M){return this.__jT();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__jX(N,M,O);
O.sort(this.__jS);
var P=O.length;
return P>0?O[0]:this.__jT();
},__jW:function(Q){var R=this.__jQ;

if(R==Q){return this.__jU();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__jY(R,Q,S);
S.sort(this.__jS);
var T=S.length;
return T>0?S[T-1]:this.__jU();
},__jX:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__jS(U,X)<0){V.push(X);
}this.__jX(X,U,V);
}}},__jY:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__jS(Y,bc)>0){ba.push(bc);
}this.__jY(bc,Y,ba);
}}},__ka:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__jS(bf,bd)<0){bd=bf;
}}bd=this.__ka(bf,bd);
}}return bd;
},__kb:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__jS(bi,bg)>0){bg=bi;
}}bg=this.__kb(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(k);
this.__jP=this.__jO=this.__jQ=null;
}});
})();
(function(){var n="resize",m="engine.name",l="position",k="0px",j="webkit",i="paddingLeft",h="$$widget",g="qx.ui.root.Application",f="hidden",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(g,{extend:qx.ui.root.Abstract,construct:function(o){this.__cy=qx.dom.Node.getWindow(o);
this.__kc=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__cy,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__cy:null,__kc:null,_createContainerElement:function(){var p=this.__kc;
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
if(qx.ui.popup&&qx.ui.popup.Manager){qx.ui.popup.Manager.getInstance().hideAll();
}if(qx.ui.menu&&qx.ui.menu.Manager){qx.ui.menu.Manager.getInstance().hideAll();
}},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__cy);
var v=qx.bom.Viewport.getHeight(this.__cy);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==i)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__cy=this.__kc=null;
}});
})();
(function(){var k="number",j="': ",h="width",g="qx.ui.layout.Canvas",f="qx.debug",e="height",d="Bad format of layout property '",c="' is not supported by the Canvas layout!",b=". The value must be either an integer or an percent string.",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(m,name,n){var o={top:1,left:1,bottom:1,right:1,width:1,height:1,edge:1};
this.assert(o[name]==1,a+name+c);

if(name==h||name==e){this.assertMatch(n,qx.ui.layout.Util.PERCENT_VALUE);
}else{if(typeof n===k){this.assertInteger(n);
}else if(qx.lang.Type.isString(n)){this.assertMatch(n,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.fail(d+name+j+n+b);
}}},"false":null}),renderLayout:function(p,q){var B=this._getLayoutChildren();
var t,A,y;
var D,top,r,s,v,u;
var z,x,C,w;

for(var i=0,l=B.length;i<l;i++){t=B[i];
A=t.getSizeHint();
y=t.getLayoutProperties();
z=t.getMarginTop();
x=t.getMarginRight();
C=t.getMarginBottom();
w=t.getMarginLeft();
D=y.left!=null?y.left:y.edge;

if(qx.lang.Type.isString(D)){D=Math.round(parseFloat(D)*p/100);
}r=y.right!=null?y.right:y.edge;

if(qx.lang.Type.isString(r)){r=Math.round(parseFloat(r)*p/100);
}top=y.top!=null?y.top:y.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*q/100);
}s=y.bottom!=null?y.bottom:y.edge;

if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*q/100);
}if(D!=null&&r!=null){v=p-D-r-w-x;
if(v<A.minWidth){v=A.minWidth;
}else if(v>A.maxWidth){v=A.maxWidth;
}D+=w;
}else{v=y.width;

if(v==null){v=A.width;
}else{v=Math.round(parseFloat(v)*p/100);
if(v<A.minWidth){v=A.minWidth;
}else if(v>A.maxWidth){v=A.maxWidth;
}}
if(r!=null){D=p-v-r-x-w;
}else if(D==null){D=w;
}else{D+=w;
}}if(top!=null&&s!=null){u=q-top-s-z-C;
if(u<A.minHeight){u=A.minHeight;
}else if(u>A.maxHeight){u=A.maxHeight;
}top+=z;
}else{u=y.height;

if(u==null){u=A.height;
}else{u=Math.round(parseFloat(u)*q/100);
if(u<A.minHeight){u=A.minHeight;
}else if(u>A.maxHeight){u=A.maxHeight;
}}
if(s!=null){top=q-u-s-C-z;
}else if(top==null){top=z;
}else{top+=z;
}}t.renderLayout(D,top,v,u);
}},_computeSizeHint:function(){var T=0,S=0;
var Q=0,O=0;
var M,L;
var K,I;
var E=this._getLayoutChildren();
var H,R,G;
var U,top,F,J;

for(var i=0,l=E.length;i<l;i++){H=E[i];
R=H.getLayoutProperties();
G=H.getSizeHint();
var P=H.getMarginLeft()+H.getMarginRight();
var N=H.getMarginTop()+H.getMarginBottom();
M=G.width+P;
L=G.minWidth+P;
U=R.left!=null?R.left:R.edge;

if(U&&typeof U===k){M+=U;
L+=U;
}F=R.right!=null?R.right:R.edge;

if(F&&typeof F===k){M+=F;
L+=F;
}T=Math.max(T,M);
S=Math.max(S,L);
K=G.height+N;
I=G.minHeight+N;
top=R.top!=null?R.top:R.edge;

if(top&&typeof top===k){K+=top;
I+=top;
}J=R.bottom!=null?R.bottom:R.edge;

if(J&&typeof J===k){K+=J;
I+=J;
}Q=Math.max(Q,K);
O=Math.max(O,I);
}return {width:T,minWidth:S,height:Q,minHeight:O};
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
this.addListener(t,this.__ke,this);
this.addListener(n,this.__ke,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__ke:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var m="Feature Configuration Editor",k="\.",j="fce.Application",h="^",g="qx.debug",f="__MR",e="changeFeatures",d="app-header",c="icon/16/actions/help-contents.png",b="Help",a="execute";
qx.Class.define(j,{extend:qx.application.Standalone,members:{__MR:null,__MS:null,__MT:null,main:function(){qx.application.Standalone.prototype.main.call(this);
if(qx.core.Environment.get(g)){qx.log.appender.Native;
qx.log.appender.Console;
}this.__MS=qx.core.Environment.get("qx.application").split(".")[0];
var o=new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
var scroll=new qx.ui.container.Scroll(o);
this.getRoot().add(scroll,{edge:0});
o.add(this._createHeader());
var n=new qx.ui.form.Button(b,c);
n.set({allowGrowX:false,margin:[0,0,0,20]});
n.addListener(a,function(q){this._getHelpWindow().open();
},this);
o.add(n);
this.__MR=new fce.view.FeatureSelector();
this.__MR.setMargin(20);
o.add(this.__MR,{flex:1});
var p=new fce.Environment();
p.addListenerOnce(e,function(r){var t=r.getData();
this._stripOwnSettings(t);
var u=this.__MU();

if(u){u.compare(t);
}var s={detected:t};
this.__MR.setFeatureData(s);
},this);
p.check();
},_stripOwnSettings:function(v){var x=new RegExp(h+this.__MS+k);
var w=[];

for(var y in v){if(x.exec(y)){w.push(y);
}}
for(var i=0,l=w.length;i<l;i++){delete v[w[i]];
}},_createHeader:function(){var B=new qx.ui.layout.HBox();
var z=new qx.ui.container.Composite(B);
z.setAppearance(d);
var C=new qx.ui.basic.Label(m);
var A=new qxc.ui.versionlabel.VersionLabel();
z.add(C);
z.add(new qx.ui.core.Spacer,{flex:1});
z.add(A);
return z;
},__MU:function(){var F=qx.core.Environment.get("fce.reportServerHost");
var E=qx.core.Environment.get("fce.reportServerAddUrl");
var D=qx.core.Environment.get("fce.reportServerGetUrl");

if(F&&E&&D){return new fce.Reporter(F,E,D);
}return null;
},_getHelpWindow:function(){if(!this.__MT){this.__MT=new fce.view.HelpWindow();
this.__MT.center();
}return this.__MT;
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var o="animationend",n="css.animation",m="",l="MSAnimationEnd",k="-keyframes",j="animation",h="oAnimationEnd",g="@",f="@keyframes",d="webkitAnimationEnd",a="qx.bom.client.CssAnimation",c=" name",b="AnimationPlayState";
qx.Bootstrap.define(a,{statics:{getSupport:function(){var name=qx.bom.client.CssAnimation.getName();

if(name!=null){return {"name":name,"play-state":qx.bom.client.CssAnimation.getPlayState(),"end-event":qx.bom.client.CssAnimation.getAnimationEnd(),"keyframes":qx.bom.client.CssAnimation.getKeyFrames()};
}return null;
},getPlayState:function(){return qx.bom.Style.getPropertyName(b);
},getName:function(){return qx.bom.Style.getPropertyName(j);
},getAnimationEnd:function(){var p={"MsAnimation":l,"WebkitAnimation":d,"MozAnimation":o,"OAnimation":h,"animation":o};
return p[this.getName()];
},getKeyFrames:function(){var q=qx.bom.Style.VENDOR_PREFIXES;
var s=[];

for(var i=0;i<q.length;i++){s.push(g+qx.lang.String.hyphenate(q[i])+k);
}s.unshift(f);
var r=qx.bom.Stylesheet.createElement();

for(var i=0;i<s.length;i++){try{qx.bom.Stylesheet.addRule(r,s[i]+c,m);
return s[i];
}catch(e){}}return null;
}},defer:function(t){qx.core.Environment.add(n,t.getSupport);
}});
})();
(function(){var k=".",j="$1",h="",g="object",f="Shockwave Flash",e="undefined",d="qx.bom.client.Flash",c="ShockwaveFlash.ShockwaveFlash.7",b="plugin.flash.express",a="plugin.flash.version",w="plugin.flash",v="osx",u="10.0.12",t="win",s="ShockwaveFlash.ShockwaveFlash.6",r="$version",q="plugin.flash.strictsecurity",p="6.0.65",o="always",n="9.0.151",l="ShockwaveFlash.ShockwaveFlash",m=",";
qx.Bootstrap.define(d,{statics:{isAvailable:function(){return parseFloat(qx.bom.client.Flash.getVersion())>0;
},getVersion:function(){if(navigator.plugins&&typeof navigator.plugins[f]===g){var z=[0,0,0];
var B=navigator.plugins[f].description;

if(typeof B!=e){B=B.replace(/^.*\s+(\S+\s+\S+$)/,j);
z[0]=parseInt(B.replace(/^(.*)\..*$/,j),10);
z[1]=parseInt(B.replace(/^.*\.(.*)\s.*$/,j),10);
z[2]=/r/.test(B)?parseInt(B.replace(/^.*r(.*)$/,j),10):0;
}return z.join(k);
}else if(window.ActiveXObject){var z=[0,0,0];
var y=false;

try{var A=new ActiveXObject(c);
}catch(C){try{var A=new ActiveXObject(s);
z=[6,0,21];
A.AllowScriptAccess=o;
}catch(D){if(z[0]==6){y=true;
}}
if(!y){try{A=new ActiveXObject(l);
}catch(E){}}}
if(!y&&typeof A==g){var x=A.GetVariable(r);

if(typeof x!=e){x=x.split(" ")[1].split(m);
z[0]=parseInt(x[0],10);
z[1]=parseInt(x[1],10);
z[2]=parseInt(x[2],10);
}}return z.join(k);
}else{return h;
}},getExpressInstall:function(){var G=qx.bom.client.Flash.getVersion();

if(G==h){return false;
}var F=qx.bom.client.OperatingSystem.getName();
return (F==t||F==v)&&qx.bom.client.Flash.__Iy(p,G);
},getStrictSecurityModel:function(){var H=qx.bom.client.Flash.getVersion();

if(H==h){return false;
}var I=H.split(k);

if(I[0]<10){return qx.bom.client.Flash.__Iy(n,H);
}else{return qx.bom.client.Flash.__Iy(u,H);
}},_cachedSupportsVersion:{},__Iy:function(J,K){var N=J.split(k);
var M=K||qx.bom.client.Flash.getVersion();
M=M.split(k);

for(var i=0;i<N.length;i++){var L=parseInt(M[i],10)-parseInt(N[i],10);

if(L>0){return true;
}else if(L<0){return false;
}}return true;
}},defer:function(O){qx.core.Environment.add(w,O.isAvailable);
qx.core.Environment.add(a,O.getVersion);
qx.core.Environment.add(b,O.getExpressInstall);
qx.core.Environment.add(q,O.getStrictSecurityModel);
}});
})();
(function(){var f="undefined",e="",d="runtime.name",c="node.js",b="rhino",a="qx.bom.client.Runtime";
qx.Bootstrap.define(a,{statics:{getName:function(){var name=e;
if(typeof environment!==f){name=b;
}else if(typeof process!==f){name=c;
}else{name=qx.bom.client.Browser.getName();
}return name;
}},defer:function(g){qx.core.Environment.add(d,g.getName);
}});
})();
(function(){var e="notification",d="PhoneGap",c="qx.bom.client.PhoneGap",b="phonegap",a="phonegap.notification";
qx.Bootstrap.define(c,{statics:{getPhoneGap:function(){return d in window;
},getNotification:function(){return e in navigator;
}},defer:function(f){qx.core.Environment.add(b,f.getPhoneGap);
qx.core.Environment.add(a,f.getNotification);
}});
})();
(function(){var n="perspectiveProperty",m="css.transform.3d",l="BackfaceVisibility",k="TransformStyle",j="WebkitPerspective",h='div',g="TransformOrigin",f="qx.bom.client.CssTransform",e="Transform",d="MozPerspective",a="Perspective",c="css.transform",b="PerspectiveOrigin";
qx.Bootstrap.define(f,{statics:{getSupport:function(){var name=qx.bom.client.CssTransform.getName();

if(name!=null){return {"name":name,"style":qx.bom.client.CssTransform.getStyle(),"origin":qx.bom.client.CssTransform.getOrigin(),"3d":qx.bom.client.CssTransform.get3D(),"perspective":qx.bom.client.CssTransform.getPerspective(),"perspective-origin":qx.bom.client.CssTransform.getPerspectiveOrigin(),"backface-visibility":qx.bom.client.CssTransform.getBackFaceVisibility()};
}return null;
},getStyle:function(){return qx.bom.Style.getPropertyName(k);
},getPerspective:function(){return qx.bom.Style.getPropertyName(a);
},getPerspectiveOrigin:function(){return qx.bom.Style.getPropertyName(b);
},getBackFaceVisibility:function(){return qx.bom.Style.getPropertyName(l);
},getOrigin:function(){return qx.bom.Style.getPropertyName(g);
},getName:function(){return qx.bom.Style.getPropertyName(e);
},get3D:function(){var o=document.createElement(h);
var q=false;
var p=[n,j,d];

for(var i=p.length-1;i>=0;i--){q=q?q:o.style[p[i]]!=undefined;
}return q;
}},defer:function(r){qx.core.Environment.add(c,r.getSupport);
qx.core.Environment.add(m,r.get3D);
}});
})();
(function(){var d="qx.nativeScrollBars",c="os.scrollBarOverlayed",b="osx",a="qx.bom.client.Scroll";
qx.Bootstrap.define(a,{statics:{scrollBarOverlayed:function(){var e=qx.bom.element.Overflow.getScrollbarWidth();
var f=qx.bom.client.OperatingSystem.getName()===b;
var g=qx.core.Environment.get(d);
return e==0&&f&&g;
}},defer:function(h){qx.core.Environment.add(c,h.scrollBarOverlayed);
}});
})();
(function(){var n="ipod",m="g",l="xbox",k="pc",j="\.",i="(",h=")",g="iPhone",f="|",e="qx.bom.client.Device",b="wii",d="ipad",c="device.name",a="ds";
qx.Bootstrap.define(e,{statics:{__dd:{"iPod":n,"iPad":d,"iPhone":g,"PSP":"psp","PLAYSTATION 3":"ps3","Nintendo Wii":b,"Nintendo DS":a,"XBOX":"xbox","Xbox":l},getName:function(){var q=[];

for(var p in this.__dd){q.push(p);
}var r=new RegExp(i+q.join(f).replace(/\./g,j)+h,m);
var o=r.exec(navigator.userAgent);

if(o&&o[1]){return qx.bom.client.Device.__dd[o[1]];
}return k;
}},defer:function(s){qx.core.Environment.add(c,s.getName);
}});
})();
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="\n",M="{",L="map",K="Use qx.dev.StackTrace.FORMAT_STACKTRACE instead",J="function",I="<span class='object'>",H="]:",G="&gt;",F="<span class='object' title='Object instance with hash code: ",E="FORMAT_STACK",D="string",s="level-",t="0",q="&lt;",r="<span class='offset'>",o=":",p="qx.log.appender.Util",m="&amp;",n="&#39;",u="DIV",v="<span>",y="&quot;",x="<span class='type-key'>",A="</span>:<span class='type-",z="</span>: ",C=" ",B="]</span>: ",w="?";
qx.Class.define(p,{statics:{toHtml:function(N){var X=[];
var U,W,P,R;
X.push(r,this.formatOffset(N.offset,6),e);

if(N.object){var O=N.win.qx.core.ObjectRegistry.fromHashCode(N.object);

if(O){X.push(F+O.$$hash+l,O.classname,k,O.$$hash,B);
}}else if(N.clazz){X.push(I+N.clazz.classname,z);
}var Q=N.items;

for(var i=0,V=Q.length;i<V;i++){U=Q[i];
W=U.text;

if(W instanceof Array){var R=[];

for(var j=0,T=W.length;j<T;j++){P=W[j];

if(typeof P===D){R.push(v+this.escapeHTML(P)+g);
}else if(P.key){R.push(x+P.key+A+P.type+l+this.escapeHTML(P.text)+g);
}else{R.push(f+P.type+l+this.escapeHTML(P.text)+g);
}}X.push(f+U.type+l);

if(U.type===L){X.push(M,R.join(h),d);
}else{X.push(k,R.join(h),b);
}X.push(g);
}else{X.push(f+U.type+l+this.escapeHTML(W)+e);
}}var S=document.createElement(u);
S.innerHTML=X.join(c);
S.className=s+N.level;
return S;
},formatOffset:function(Y,length){var bc=Y.toString();
var ba=(length||6)-bc.length;
var bb=c;

for(var i=0;i<ba;i++){bb+=t;
}return bb+bc;
},FORMAT_STACK:null,escapeHTML:function(bd){return String(bd).replace(/[<>&"']/g,this.__Hh);
},__Hh:function(be){var bf={"<":q,">":G,"&":m,"'":n,'"':y};
return bf[be]||w;
},toText:function(bg){return this.toTextArray(bg).join(C);
},toTextArray:function(bh){var bp=[];
bp.push(this.formatOffset(bh.offset,6));

if(bh.object){var bi=bh.win.qx.core.ObjectRegistry.fromHashCode(bh.object);

if(bi){bp.push(bi.classname+k+bi.$$hash+H);
}}else if(bh.clazz){bp.push(bh.clazz.classname+o);
}var bj=bh.items;
var bm,bo;

for(var i=0,bn=bj.length;i<bn;i++){bm=bj[i];
bo=bm.text;

if(bm.trace&&bm.trace.length>0){if(typeof (this.FORMAT_STACK)==J){qx.log.Logger.deprecatedConstantWarning(qx.log.appender.Util,E,K);
bo+=a+this.FORMAT_STACK(bm.trace);
}else{bo+=a+bm.trace;
}}
if(bo instanceof Array){var bk=[];

for(var j=0,bl=bo.length;j<bl;j++){bk.push(bo[j].text);
}
if(bm.type===L){bp.push(M,bk.join(h),d);
}else{bp.push(k,bk.join(h),b);
}}else{bp.push(bo);
}}return bp;
}}});
})();
(function(){var c="html.console",b="qx.log.appender.Native",a="log";
qx.Class.define(b,{statics:{process:function(d){if(qx.core.Environment.get(c)){var f=console[d.level]?d.level:a;

if(console[f]){var e=qx.log.appender.Util.toText(d);
console[f](e);
}}}},defer:function(g){qx.log.Logger.register(g);
}});
})();
(function(){var k="",j='</div>',i="Up",h="none",g="keypress",f='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',d="Enter",c="px",b='.qxconsole .messages .user-result{background:white}',a='.qxconsole .messages .level-error{background:#FFE2D5}',V="div",U="user-command",T='<div class="command">',S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",r='.qxconsole .messages .level-user{background:#E3EFE9}',s='<div class="qxconsole">',p="D",q='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',n='.qxconsole .messages .type-string{color:black;font-weight:normal;}',o='.qxconsole .control a{text-decoration:none;color:black;}',l='<div class="messages">',m='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',t='<input type="text"/>',u="clear",B='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',z='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',F='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',I='.qxconsole .messages .user-command{color:blue}',H="F7",w="qx.log.appender.Console",L='.qxconsole .messages .level-info{background:#DEEDFA}',K="block",J='.qxconsole .messages .level-warn{background:#FFF7D5}',v='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',x='.qxconsole .messages .user-error{background:#FFE2D5}',y='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',A='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',C=">>> ",E="Down",G='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(w,{statics:{init:function(){var W=[F,y,o,f,P,I,b,x,O,L,J,a,r,n,G,m,z,q,R,N,Q,v,D,B,S];
qx.bom.Stylesheet.createElement(W.join(k));
var Y=[s,A,l,j,T,t,j,j];
var ba=document.createElement(M);
ba.innerHTML=Y.join(k);
var X=ba.firstChild;
document.body.appendChild(ba.firstChild);
this.__Il=X;
this.__ct=X.childNodes[1];
this.__Im=X.childNodes[2].firstChild;
this.__jC();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__eF,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__ct.innerHTML=k;
},process:function(bb){this.__ct.appendChild(qx.log.appender.Util.toHtml(bb));
this.__In();
},__In:function(){this.__ct.scrollTop=this.__ct.scrollHeight;
},__dI:true,toggle:function(){if(!this.__Il){this.init();
}else if(this.__Il.style.display==h){this.show();
}else{this.__Il.style.display=h;
}},show:function(){if(!this.__Il){this.init();
}else{this.__Il.style.display=K;
this.__ct.scrollTop=this.__ct.scrollHeight;
}},__CQ:[],execute:function(){var be=this.__Im.value;

if(be==k){return;
}
if(be==u){return this.clear();
}var bc=document.createElement(V);
bc.innerHTML=qx.log.appender.Util.escapeHTML(C+be);
bc.className=U;
this.__CQ.push(be);
this.__Io=this.__CQ.length;
this.__ct.appendChild(bc);
this.__In();

try{var bd=window.eval(be);
}catch(bf){qx.log.Logger.error(bf);
}
if(bd!==undefined){qx.log.Logger.debug(bd);
}},__jC:function(e){this.__ct.style.height=(this.__Il.clientHeight-this.__Il.firstChild.offsetHeight-this.__Il.lastChild.offsetHeight)+c;
},__eF:function(e){var bh=e.getKeyIdentifier();
if((bh==H)||(bh==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Il){return;
}if(!qx.dom.Hierarchy.contains(this.__Il,e.getTarget())){return;
}if(bh==d&&this.__Im.value!=k){this.execute();
this.__Im.value=k;
}if(bh==i||bh==E){this.__Io+=bh==i?-1:1;
this.__Io=Math.min(Math.max(0,this.__Io),this.__CQ.length);
var bg=this.__CQ[this.__Io];
this.__Im.value=bg||k;
this.__Im.select();
}}},defer:function(bi){qx.event.Registration.addListener(document.documentElement,g,bi.__eF,bi);
}});
})();
(function(){var s="_applyLayoutChange",r="top",q="left",p="height",o="middle",n="Decorator",m="center",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the VBox layout!",g="qx.ui.layout.VBox",f="flex",b="Integer",a="The property '",e="right",d="Boolean";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);

if(t){this.setSpacing(t);
}
if(u){this.setAlignY(u);
}
if(v){this.setSeparator(v);
}},properties:{alignY:{check:[r,o,h],init:r,apply:s},alignX:{check:[q,m,e],init:q,apply:s},spacing:{check:b,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:d,init:false,apply:k}},members:{__kA:null,__kB:null,__kC:null,__dS:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kD:function(){var B=this._getLayoutChildren();
var length=B.length;
var x=false;
var w=this.__kA&&this.__kA.length!=length&&this.__kB&&this.__kA;
var z;
var y=w?this.__kA:new Array(length);
var A=w?this.__kB:new Array(length);
if(this.getReversed()){B=B.concat().reverse();
}for(var i=0;i<length;i++){z=B[i].getLayoutProperties();

if(z.height!=null){y[i]=parseFloat(z.height)/100;
}
if(z.flex!=null){A[i]=z.flex;
x=true;
}else{A[i]=0;
}}if(!w){this.__kA=y;
this.__kB=A;
}this.__kC=x;
this.__dS=B;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Environment.select(j,{"true":function(C,name,D){this.assert(name===f||name===p,a+name+c);

if(name==p){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(D);
this.assert(D>=0);
}},"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__kD();
}var M=this.__dS;
var length=M.length;
var W=qx.ui.layout.Util;
var V=this.getSpacing();
var ba=this.getSeparator();

if(ba){var J=W.computeVerticalSeparatorGaps(M,V,ba);
}else{var J=W.computeVerticalGaps(M,V,true);
}var i,H,I,Q;
var R=[];
var X=J;

for(i=0;i<length;i+=1){Q=this.__kA[i];
I=Q!=null?Math.floor((F-J)*Q):M[i].getSizeHint().height;
R.push(I);
X+=I;
}if(this.__kC&&X!=F){var O={};
var U,Y;

for(i=0;i<length;i+=1){U=this.__kB[i];

if(U>0){N=M[i].getSizeHint();
O[i]={min:N.minHeight,value:R[i],max:N.maxHeight,flex:U};
}}var K=W.computeFlexOffsets(O,F,X);

for(i in K){Y=K[i].offset;
R[i]+=Y;
X+=Y;
}}var top=M[0].getMarginTop();
if(X<F&&this.getAlignY()!=r){top=F-X;

if(this.getAlignY()===o){top=Math.round(top/2);
}}var N,bc,S,I,P,T,L;
this._clearSeparators();
if(ba){var bb=qx.theme.manager.Decoration.getInstance().resolve(ba).getInsets();
var G=bb.top+bb.bottom;
}for(i=0;i<length;i+=1){H=M[i];
I=R[i];
N=H.getSizeHint();
T=H.getMarginLeft();
L=H.getMarginRight();
S=Math.max(N.minWidth,Math.min(E-T-L,N.maxWidth));
bc=W.computeHorizontalAlignOffset(H.getAlignX()||this.getAlignX(),S,E,T,L);
if(i>0){if(ba){top+=P+V;
this._renderSeparator(ba,{top:top,left:0,height:G,width:E});
top+=G+V+H.getMarginTop();
}else{top+=W.collapseMargins(V,P,H.getMarginTop());
}}H.renderLayout(bc,top,S,I);
top+=I;
P=H.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kD();
}var bj=qx.ui.layout.Util;
var br=this.__dS;
var bf=0,bi=0,bh=0;
var bd=0,bk=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bi+=be.height;
var bn=this.__kB[i];
var bg=this.__kA[i];

if(bn){bf+=be.minHeight;
}else if(bg){bh=Math.max(bh,Math.round(be.minHeight/bg));
}else{bf+=be.height;
}bq=bo.getMarginLeft()+bo.getMarginRight();
if((be.width+bq)>bk){bk=be.width+bq;
}if((be.minWidth+bq)>bd){bd=be.minWidth+bq;
}}bf+=bh;
var bm=this.getSpacing();
var bp=this.getSeparator();

if(bp){var bl=bj.computeVerticalSeparatorGaps(br,bm,bp);
}else{var bl=bj.computeVerticalGaps(br,bm,true);
}return {minHeight:bf+bl,height:bi+bl,minWidth:bd,width:bk};
}},destruct:function(){this.__kA=this.__kB=this.__dS=null;
}});
})();
(function(){var f="scrollbar-x",d="scrollbar-y",c="qx.ui.core.scroll.MWheelHandling",b="x",a="y";
qx.Mixin.define(c,{members:{_onMouseWheel:function(e){var l=this._isChildControlVisible(f);
var m=this._isChildControlVisible(d);
var q=m?this.getChildControl(d,true):null;
var p=l?this.getChildControl(f,true):null;
var j=e.getWheelDelta(a);
var i=e.getWheelDelta(b);
var k=!m;
var n=!l;
if(q){var o=parseInt(j);

if(o!==0){q.scrollBySteps(o);
}var h=q.getPosition();
var g=q.getMaximum();
if(o<0&&h<=0||o>0&&h>=g){k=true;
}}if(p){var o=parseInt(i);

if(o!==0){p.scrollBySteps(o);
}var h=p.getPosition();
var g=p.getMaximum();
if(o<0&&h<=0||o>0&&h>=g){n=true;
}}if(!k||!n){e.stop();
}}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Environment.add(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Environment.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="0",d="hidden",c="mousedown",b="qx.ui.core.scroll.NativeScrollBar",a="PositiveNumber",y="Integer",x="__lM",w="mousemove",v="_applyMaximum",u="_applyOrientation",t="appear",s="PositiveInteger",r="mshtml",q="engine.name",p="mouseup",n="Number",o="_applyPosition",l="scrollbar",m="native";
qx.Class.define(b,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(z){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(c,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(t,this._onAppear,this);
this.getContentElement().add(this._getScrollPaneElement());
if(z!=null){this.setOrientation(z);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:l},orientation:{check:[k,h],init:k,apply:u},maximum:{check:s,apply:v,init:100},position:{check:n,init:0,apply:o,event:i},singleStep:{check:y,init:20},knobFactor:{check:a,nullable:true}},members:{__lL:null,__lM:null,_getScrollPaneElement:function(){if(!this.__lM){this.__lM=new qx.html.Element();
}return this.__lM;
},renderLayout:function(A,top,B,C){var D=qx.ui.core.Widget.prototype.renderLayout.call(this,A,top,B,C);
this._updateScrollBar();
return D;
},_getContentHint:function(){var E=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__lL?100:E,maxWidth:this.__lL?null:E,minWidth:this.__lL?null:E,height:this.__lL?E:100,maxHeight:this.__lL?E:null,minHeight:this.__lL?E:null};
},_applyEnabled:function(F,G){qx.ui.core.Widget.prototype._applyEnabled.call(this,F,G);
this._updateScrollBar();
},_applyMaximum:function(H){this._updateScrollBar();
},_applyPosition:function(I){var content=this.getContentElement();

if(this.__lL){content.scrollToX(I);
}else{content.scrollToY(I);
}},_applyOrientation:function(J,K){var L=this.__lL=J===k;
this.set({allowGrowX:L,allowShrinkX:L,allowGrowY:!L,allowShrinkY:!L});

if(L){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:L?i:d,overflowY:L?d:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var N=this.__lL;
var O=this.getBounds();

if(!O){return;
}
if(this.isEnabled()){var P=N?O.width:O.height;
var M=this.getMaximum()+P;
}else{M=0;
}if((qx.core.Environment.get(q)==r)){var O=this.getBounds();
this.getContentElement().setStyles({left:N?f:g,top:N?g:f,width:(N?O.width:O.width+1)+j,height:(N?O.height+1:O.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(N?M:1)+j,height:(N?1:M)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(Q){this.setPosition(Math.max(0,Math.min(this.getMaximum(),Q)));
},scrollBy:function(R){this.scrollTo(this.getPosition()+R);
},scrollBySteps:function(S){var T=this.getSingleStep();
this.scrollBy(S*T);
},_onScroll:function(e){var V=this.getContentElement();
var U=this.__lL?V.getScrollX():V.getScrollY();
this.setPosition(U);
},_onAppear:function(e){this._applyPosition(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(x);
}});
})();
(function(){var k="slider",j="horizontal",i="button-begin",h="button-end",g="vertical",f="Integer",d="execute",c="visible",b="right",a="up",B="hidden",A="left",z="down",y="PositiveNumber",x="changeValue",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",v="_applyKnobFactor",u="knob",t="_applyMaximum",s="qx.ui.core.scroll.ScrollBar",q="resize",r="_applyOrientation",o="_applyPageStep",p="PositiveInteger",m="_applyPosition",n="scrollbar",l="scroll";
qx.Class.define(s,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(C){qx.ui.core.Widget.call(this);
this._createChildControl(i);
this._createChildControl(k).addListener(q,this._onResizeSlider,this);
this._createChildControl(h);
if(C!=null){this.setOrientation(C);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,g],init:j,apply:r},maximum:{check:p,apply:t,init:100},position:{check:w,init:0,apply:m,event:l},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:o},knobFactor:{check:y,apply:v,nullable:true}},members:{__zT:2,__zU:0,_computeSizeHint:function(){var D=qx.ui.core.Widget.prototype._computeSizeHint.call(this);

if(this.getOrientation()===j){this.__zU=D.minWidth;
D.minWidth=0;
}else{this.__zU=D.minHeight;
D.minHeight=0;
}return D;
},renderLayout:function(E,top,F,G){var I=qx.ui.core.Widget.prototype.renderLayout.call(this,E,top,F,G);
var H=this.getOrientation()===j;

if(this.__zU>=(H?F:G)){this.getChildControl(i).setVisibility(B);
this.getChildControl(h).setVisibility(B);
}else{this.getChildControl(i).setVisibility(c);
this.getChildControl(h).setVisibility(c);
}return I;
},_createChildControlImpl:function(J,K){var L;

switch(J){case k:L=new qx.ui.core.scroll.ScrollSlider();
L.setPageStep(100);
L.setFocusable(false);
L.addListener(x,this._onChangeSliderValue,this);
this._add(L,{flex:1});
break;
case i:L=new qx.ui.form.RepeatButton();
L.setFocusable(false);
L.addListener(d,this._onExecuteBegin,this);
this._add(L);
break;
case h:L=new qx.ui.form.RepeatButton();
L.setFocusable(false);
L.addListener(d,this._onExecuteEnd,this);
this._add(L);
break;
}return L||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,J);
},_applyMaximum:function(M){this.getChildControl(k).setMaximum(M);
},_applyPosition:function(N){this.getChildControl(k).setValue(N);
},_applyKnobFactor:function(O){this.getChildControl(k).setKnobFactor(O);
},_applyPageStep:function(P){this.getChildControl(k).setPageStep(P);
},_applyOrientation:function(Q,R){var S=this._getLayout();

if(S){S.dispose();
}if(Q===j){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(g,j);
this.getChildControl(i).replaceState(a,A);
this.getChildControl(h).replaceState(z,b);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(j,g);
this.getChildControl(i).replaceState(A,a);
this.getChildControl(h).replaceState(b,z);
}this.getChildControl(k).setOrientation(Q);
},scrollTo:function(T){this.getChildControl(k).slideTo(T);
},scrollBy:function(U){this.getChildControl(k).slideBy(U);
},scrollBySteps:function(V){var W=this.getSingleStep();
this.getChildControl(k).slideBy(V*W);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var X=this.getChildControl(k).getChildControl(u);
var bb=X.getSizeHint();
var Y=false;
var ba=this.getChildControl(k).getInnerSize();

if(this.getOrientation()==g){if(ba.height<bb.minHeight+this.__zT){Y=true;
}}else{if(ba.width<bb.minWidth+this.__zT){Y=true;
}}
if(Y){X.exclude();
}else{X.show();
}}}});
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
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(c){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="knob",j="horizontal",i="vertical",h="Integer",g="hovered",f="left",d="top",c="mouseup",b="pressed",a="px",X="changeValue",W="interval",V="mousemove",U="resize",T="slider",S="mousedown",R="PageUp",Q="mouseout",P="x",O='qx.event.type.Data',r="Left",s="Down",p="Up",q="dblclick",n="qx.ui.form.Slider",o="PageDown",l="mousewheel",m="_applyValue",u="_applyKnobFactor",v="End",C="height",A="y",G="Right",E="width",K="_applyOrientation",I="Home",x="mouseover",N="floor",M="_applyMinimum",L="click",w="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",y="keypress",z="ceil",B="losecapture",D="contextmenu",F="_applyMaximum",H="Number",J="changeMaximum",t="changeMinimum";
qx.Class.define(n,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(Y){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(y,this._onKeyPress);
this.addListener(l,this._onMouseWheel);
this.addListener(S,this._onMouseDown);
this.addListener(c,this._onMouseUp);
this.addListener(B,this._onMouseUp);
this.addListener(U,this._onUpdate);
this.addListener(D,this._onStopEvent);
this.addListener(L,this._onStopEvent);
this.addListener(q,this._onStopEvent);
if(Y!=null){this.setOrientation(Y);
}else{this.initOrientation();
}},events:{changeValue:O},properties:{appearance:{refine:true,init:T},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:K},value:{check:w,init:0,apply:m,nullable:true},minimum:{check:h,init:0,apply:M,event:t},maximum:{check:h,init:100,apply:F,event:J},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:H,apply:u,nullable:true}},members:{__zV:null,__zW:null,__zX:null,__zY:null,__Aa:null,__Ab:null,__Ac:null,__Ad:null,__it:null,__Ae:null,__Af:null,__Ag:null,_forwardStates:{invalid:true},_createChildControlImpl:function(ba,bb){var bc;

switch(ba){case k:bc=new qx.ui.core.Widget();
bc.addListener(U,this._onUpdate,this);
bc.addListener(x,this._onMouseOver);
bc.addListener(Q,this._onMouseOut);
this._add(bc);
break;
}return bc||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,ba);
},_onMouseOver:function(e){this.addState(g);
},_onMouseOut:function(e){this.removeState(g);
},_onMouseWheel:function(e){var bf=this.getOrientation()===j?P:A;
var be=e.getWheelDelta(bf);
var bd=be>0?1:be<0?-1:0;
this.slideBy(bd*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bh=this.getOrientation()===j;
var bg=bh?r:p;
var forward=bh?G:s;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bg:this.slideBack();
break;
case o:this.slidePageForward();
break;
case R:this.slidePageBack();
break;
case I:this.slideToBegin();
break;
case v:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__zY){return;
}var bk=this.__lL;
var bi=this.getChildControl(k);
var bj=bk?f:d;
var bm=bk?e.getDocumentLeft():e.getDocumentTop();
var bn=this.__zV=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bj];
var bl=this.__zW=qx.bom.element.Location.get(bi.getContainerElement().getDomElement())[bj];

if(e.getTarget()===bi){this.__zY=true;

if(!this.__Ae){this.__Ae=new qx.event.Timer(100);
this.__Ae.addListener(W,this._fireValue,this);
}this.__Ae.start();
this.__Aa=bm+bn-bl;
bi.addState(b);
}else{this.__Ab=true;
this.__Ac=bm<=bl?-1:1;
this.__Ai(e);
this._onInterval();
if(!this.__it){this.__it=new qx.event.Timer(100);
this.__it.addListener(W,this._onInterval,this);
}this.__it.start();
}this.addListener(V,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__zY){this.releaseCapture();
delete this.__zY;
this.__Ae.stop();
this._fireValue();
delete this.__Aa;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bp;
var bq;
var bo;

if(this.__lL){bp=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__zV);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bq=e.getDocumentTop()-(bo+this.getChildControl(k).getBounds().top);
}else{bp=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__zV);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bq=e.getDocumentLeft()-(bo+this.getChildControl(k).getBounds().left);
}
if(bq<0||bq>this.__zX||bp<0||bp>this.__zX){this.getChildControl(k).removeState(g);
}}}else if(this.__Ab){this.__it.stop();
this.releaseCapture();
delete this.__Ab;
delete this.__Ac;
delete this.__Ad;
}this.removeListener(V,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__zY){var bs=this.__lL?e.getDocumentLeft():e.getDocumentTop();
var br=bs-this.__Aa;
this.slideTo(this._positionToValue(br));
}else if(this.__Ab){this.__Ai(e);
}e.stopPropagation();
},_onInterval:function(e){var bt=this.getValue()+(this.__Ac*this.getPageStep());
if(bt<this.getMinimum()){bt=this.getMinimum();
}else if(bt>this.getMaximum()){bt=this.getMaximum();
}var bu=this.__Ac==-1;

if((bu&&bt<=this.__Ad)||(!bu&&bt>=this.__Ad)){bt=this.__Ad;
}this.slideTo(bt);
},_onUpdate:function(e){var bw=this.getInnerSize();
var bx=this.getChildControl(k).getBounds();
var bv=this.__lL?E:C;
this._updateKnobSize();
this.__Ah=bw[bv]-bx[bv];
this.__zX=bx[bv];
this._updateKnobPosition();
},__lL:false,__Ah:0,__Ai:function(e){var by=this.__lL;
var bF=by?e.getDocumentLeft():e.getDocumentTop();
var bH=this.__zV;
var bz=this.__zW;
var bJ=this.__zX;
var bG=bF-bH;

if(bF>=bz){bG-=bJ;
}var bD=this._positionToValue(bG);
var bA=this.getMinimum();
var bB=this.getMaximum();

if(bD<bA){bD=bA;
}else if(bD>bB){bD=bB;
}else{var bE=this.getValue();
var bC=this.getPageStep();
var bI=this.__Ac<0?N:z;
bD=bE+(Math[bI]((bD-bE)/bC)*bC);
}if(this.__Ad==null||(this.__Ac==-1&&bD<=this.__Ad)||(this.__Ac==1&&bD>=this.__Ad)){this.__Ad=bD;
}},_positionToValue:function(bK){var bL=this.__Ah;
if(bL==null||bL==0){return 0;
}var bN=bK/bL;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}var bM=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bM*bN);
},_valueToPosition:function(bO){var bP=this.__Ah;

if(bP==null){return 0;
}var bQ=this.getMaximum()-this.getMinimum();
if(bQ==0){return 0;
}var bO=bO-this.getMinimum();
var bR=bO/bQ;

if(bR<0){bR=0;
}else if(bR>1){bR=1;
}return Math.round(bP*bR);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bS){var bT=this.getChildControl(k).getContainerElement();

if(this.__lL){bT.setStyle(f,bS+a,true);
}else{bT.setStyle(d,bS+a,true);
}},_updateKnobSize:function(){var bV=this.getKnobFactor();

if(bV==null){return;
}var bU=this.getInnerSize();

if(bU==null){return;
}if(this.__lL){this.getChildControl(k).setWidth(Math.round(bV*bU.width));
}else{this.getChildControl(k).setHeight(Math.round(bV*bU.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bW){this.slideTo(this.getValue()+bW);
},slideTo:function(bX){if(bX<this.getMinimum()){bX=this.getMinimum();
}else if(bX>this.getMaximum()){bX=this.getMaximum();
}else{bX=this.getMinimum()+Math.round((bX-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bX);
},_applyOrientation:function(bY,ca){var cb=this.getChildControl(k);
this.__lL=bY===j;
if(this.__lL){this.removeState(i);
cb.removeState(i);
this.addState(j);
cb.addState(j);
cb.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(j);
cb.removeState(j);
this.addState(i);
cb.addState(i);
cb.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(cc,cd){if(cc!=null){this._updateKnobSize();
}else{if(this.__lL){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(ce,cf){if(ce!=null){this._updateKnobPosition();

if(this.__zY){this.__Ag=[ce,cf];
}else{this.fireEvent(X,qx.event.type.Data,[ce,cf]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__Ag){return;
}var cg=this.__Ag;
this.__Ag=null;
this.fireEvent(X,qx.event.type.Data,cg);
},_applyMinimum:function(ch,ci){if(this.getValue()<ch){this.setValue(ch);
}this._updateKnobPosition();
},_applyMaximum:function(cj,ck){if(this.getValue()>cj){this.setValue(cj);
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
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__ly:null,__lz:false,__lA:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__lz){this.__lz=false;
}else{this.__lz=true;
o.execute(this);
}}this.fireEvent(n);
},__lB:function(e){if(this.__lz){this.__lz=false;
return;
}this.__lz=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__lA);
}
if(p!=null){this.__lA=p.addListener(n,this.__lB,this);
}var t=this.__ly;

if(t==null){this.__ly=t={};
}var u;

for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&!q.isDisposed()&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){u=this.get(s);
if(u==null){this.syncAppearance();
u=qx.util.PropertyUtil.getThemeValue(this,s);
}}else{u=null;
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this._applyCommand(null,this.getCommand());
this.__ly=null;
}});
})();
(function(){var d="$$theme_",c="$$user_",b="$$init_",a="qx.util.PropertyUtil";
qx.Class.define(a,{statics:{getProperties:function(e){return e.$$properties;
},getAllProperties:function(f){var i={};
var j=f;
while(j!=qx.core.Object){var h=this.getProperties(j);

for(var g in h){i[g]=h[g];
}j=j.superclass;
}return i;
},getUserValue:function(k,l){return k[c+l];
},setUserValue:function(m,n,o){m[c+n]=o;
},deleteUserValue:function(p,q){delete (p[c+q]);
},getInitValue:function(r,s){return r[b+s];
},setInitValue:function(t,u,v){t[b+u]=v;
},deleteInitValue:function(w,x){delete (w[b+x]);
},getThemeValue:function(y,z){return y[d+z];
},setThemeValue:function(A,B,C){A[d+B]=C;
},deleteThemeValue:function(D,E){delete (D[d+E]);
},setThemed:function(F,G,H){var I=qx.core.Property.$$method.setThemed;
F[I[G]](H);
},resetThemed:function(J,K){var L=qx.core.Property.$$method.resetThemed;
J[L[K]]();
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="execute",b="__it";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__it=new qx.event.AcceleratingTimer();
this.__it.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__om:null,__it:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__on();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__om){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__oo();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__oo();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__it.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__it.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__on();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__om){this.execute();
}}this.__oo();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__om){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__oo();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__on();
}},_onInterval:function(e){this.__om=true;
this.fireEvent(c);
},__on:function(){this.fireEvent(g);
this.__om=false;
this.__it.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__oo:function(){this.fireEvent(d);
this.__it.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var e="Integer",d="interval",c="qx.event.type.Event",b="__it",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__it=new qx.event.Timer(this.getInterval());
this.__it.addListener(d,this._onInterval,this);
},events:{"interval":c},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__it:null,__op:null,start:function(){this.__it.setInterval(this.getFirstInterval());
this.__it.start();
},stop:function(){this.__it.stop();
this.__op=null;
},_onInterval:function(){this.__it.stop();

if(this.__op==null){this.__op=this.getInterval();
}this.__op=Math.max(this.getMinimum(),this.__op-this.getDecrease());
this.__it.setInterval(this.__op);
this.__it.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var s="_applyLayoutChange",r="left",q="width",p="center",o="top",n="Decorator",m="middle",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the HBox layout!",g="Boolean",f="flex",b="right",a="Integer",e="The property '",d="qx.ui.layout.HBox";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);

if(t){this.setSpacing(t);
}
if(u){this.setAlignX(u);
}
if(v){this.setSeparator(v);
}},properties:{alignX:{check:[r,p,b],init:r,apply:s},alignY:{check:[o,m,h],init:o,apply:s},spacing:{check:a,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:g,init:false,apply:k}},members:{__li:null,__kB:null,__kC:null,__dS:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kD:function(){var B=this._getLayoutChildren();
var length=B.length;
var y=false;
var w=this.__li&&this.__li.length!=length&&this.__kB&&this.__li;
var z;
var x=w?this.__li:new Array(length);
var A=w?this.__kB:new Array(length);
if(this.getReversed()){B=B.concat().reverse();
}for(var i=0;i<length;i++){z=B[i].getLayoutProperties();

if(z.width!=null){x[i]=parseFloat(z.width)/100;
}
if(z.flex!=null){A[i]=z.flex;
y=true;
}else{A[i]=0;
}}if(!w){this.__li=x;
this.__kB=A;
}this.__kC=y;
this.__dS=B;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Environment.select(j,{"true":function(C,name,D){this.assert(name===f||name===q,e+name+c);

if(name==q){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(D);
this.assert(D>=0);
}},"false":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__kD();
}var L=this.__dS;
var length=L.length;
var U=qx.ui.layout.Util;
var T=this.getSpacing();
var X=this.getSeparator();

if(X){var I=U.computeHorizontalSeparatorGaps(L,T,X);
}else{var I=U.computeHorizontalGaps(L,T,true);
}var i,G,R,Q;
var W=[];
var M=I;

for(i=0;i<length;i+=1){Q=this.__li[i];
R=Q!=null?Math.floor((E-I)*Q):L[i].getSizeHint().width;
W.push(R);
M+=R;
}if(this.__kC&&M!=E){var O={};
var S,V;

for(i=0;i<length;i+=1){S=this.__kB[i];

if(S>0){N=L[i].getSizeHint();
O[i]={min:N.minWidth,value:W[i],max:N.maxWidth,flex:S};
}}var J=U.computeFlexOffsets(O,E,M);

for(i in J){V=J[i].offset;
W[i]+=V;
M+=V;
}}var bc=L[0].getMarginLeft();
if(M<E&&this.getAlignX()!=r){bc=E-M;

if(this.getAlignX()===p){bc=Math.round(bc/2);
}}var N,top,H,R,K,ba,P;
var T=this.getSpacing();
this._clearSeparators();
if(X){var Y=qx.theme.manager.Decoration.getInstance().resolve(X).getInsets();
var bb=Y.left+Y.right;
}for(i=0;i<length;i+=1){G=L[i];
R=W[i];
N=G.getSizeHint();
ba=G.getMarginTop();
P=G.getMarginBottom();
H=Math.max(N.minHeight,Math.min(F-ba-P,N.maxHeight));
top=U.computeVerticalAlignOffset(G.getAlignY()||this.getAlignY(),H,F,ba,P);
if(i>0){if(X){bc+=K+T;
this._renderSeparator(X,{left:bc,top:0,width:bb,height:F});
bc+=bb+T+G.getMarginLeft();
}else{bc+=U.collapseMargins(T,K,G.getMarginLeft());
}}G.renderLayout(bc,top,R,H);
bc+=R;
K=G.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kD();
}var bj=qx.ui.layout.Util;
var br=this.__dS;
var bd=0,bk=0,bh=0;
var bg=0,bi=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bk+=be.width;
var bn=this.__kB[i];
var bf=this.__li[i];

if(bn){bd+=be.minWidth;
}else if(bf){bh=Math.max(bh,Math.round(be.minWidth/bf));
}else{bd+=be.width;
}bq=bo.getMarginTop()+bo.getMarginBottom();
if((be.height+bq)>bi){bi=be.height+bq;
}if((be.minHeight+bq)>bg){bg=be.minHeight+bq;
}}bd+=bh;
var bm=this.getSpacing();
var bp=this.getSeparator();

if(bp){var bl=bj.computeHorizontalSeparatorGaps(br,bm,bp);
}else{var bl=bj.computeHorizontalGaps(br,bm,true);
}return {minWidth:bd+bl,width:bk+bl,minHeight:bg,height:bi};
}},destruct:function(){this.__li=this.__kB=this.__dS=null;
}});
})();
(function(){var k="scrollbar-y",j="scrollbar-x",i="pane",h="auto",g="corner",f="os.scrollBarOverlayed",d="scrollbar-",c="on",b="_computeScrollbars",a="getDocument",F="changeVisibility",E="off",D="x",C="scroll",B="touchmove",A="scrollY",z="Left",y="mousewheel",x="scrollbarX",w="event.touch",r="scrollarea",s="y",p="vertical",q="scrollX",n="touchstart",o="horizontal",l="qx.ui.core.scroll.AbstractScrollArea",m="abstract",t="update",u="scrollbarY",v="Top";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.scroll.MScrollBarFactory,qx.ui.core.scroll.MWheelHandling],type:m,construct:function(){qx.ui.core.Widget.call(this);

if(qx.core.Environment.get(f)){this._setLayout(new qx.ui.layout.Canvas());
}else{var G=new qx.ui.layout.Grid();
G.setColumnFlex(0,1);
G.setRowFlex(0,1);
this._setLayout(G);
}this.addListener(y,this._onMouseWheel,this);
if(qx.core.Environment.get(w)){this.addListener(B,this._onTouchMove,this);
this.addListener(n,function(){this.__cQ={"x":0,"y":0};
},this);
this.__cQ={};
this.__lN={};
}},properties:{appearance:{refine:true,init:r},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,c,E],init:h,themeable:true,apply:b},scrollbarY:{check:[h,c,E],init:h,themeable:true,apply:b},scrollbar:{group:[x,u]}},members:{__cQ:null,__lN:null,_createChildControlImpl:function(H,I){var J;

switch(H){case i:J=new qx.ui.core.scroll.ScrollPane();
J.addListener(t,this._computeScrollbars,this);
J.addListener(q,this._onScrollPaneX,this);
J.addListener(A,this._onScrollPaneY,this);

if(qx.core.Environment.get(f)){this._add(J,{edge:0});
}else{this._add(J,{row:0,column:0});
}break;
case j:J=this._createScrollBar(o);
J.setMinWidth(0);
J.exclude();
J.addListener(C,this._onScrollBarX,this);
J.addListener(F,this._onChangeScrollbarXVisibility,this);

if(qx.core.Environment.get(f)){J.setMinHeight(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this._add(J,{bottom:0,right:0,left:0});
}else{this._add(J,{row:1,column:0});
}break;
case k:J=this._createScrollBar(p);
J.setMinHeight(0);
J.exclude();
J.addListener(C,this._onScrollBarY,this);
J.addListener(F,this._onChangeScrollbarYVisibility,this);

if(qx.core.Environment.get(f)){J.setMinWidth(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this._add(J,{right:0,bottom:0,top:0});
}else{this._add(J,{row:0,column:1});
}break;
case g:J=new qx.ui.core.Widget();
J.setWidth(0);
J.setHeight(0);
J.exclude();

if(!qx.core.Environment.get(f)){this._add(J,{row:1,column:1});
}break;
}return J||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,H);
},getPaneSize:function(){return this.getChildControl(i).getInnerSize();
},getItemTop:function(K){return this.getChildControl(i).getItemTop(K);
},getItemBottom:function(L){return this.getChildControl(i).getItemBottom(L);
},getItemLeft:function(M){return this.getChildControl(i).getItemLeft(M);
},getItemRight:function(N){return this.getChildControl(i).getItemRight(N);
},scrollToX:function(O){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollTo(O);
},scrollByX:function(P){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollBy(P);
},getScrollX:function(){var Q=this.getChildControl(j,true);
return Q?Q.getPosition():0;
},scrollToY:function(R){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollTo(R);
},scrollByY:function(S){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollBy(S);
},getScrollY:function(){var T=this.getChildControl(k,true);
return T?T.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(i).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(i).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onTouchMove:function(e){this._onTouchMoveDirectional(D,e);
this._onTouchMoveDirectional(s,e);
e.stop();
},_onTouchMoveDirectional:function(U,e){var V=(U==D?z:v);
var X=this.getChildControl(d+U,true);
var Y=this._isChildControlVisible(d+U);

if(Y&&X){if(this.__cQ[U]==0){var W=0;
}else{var W=-(e[a+V]()-this.__cQ[U]);
}this.__cQ[U]=e[a+V]();
X.scrollBy(W);
if(this.__lN[U]){clearTimeout(this.__lN[U]);
this.__lN[U]=null;
}this.__lN[U]=setTimeout(qx.lang.Function.bind(function(ba){this.__lO(ba,U);
},this,W),100);
}},__lO:function(bb,bc){this.__lN[bc]=null;
var be=this._isChildControlVisible(d+bc);

if(bb==0||!be){return;
}if(bb>0){bb=Math.max(0,bb-3);
}else{bb=Math.min(0,bb+3);
}this.__lN[bc]=setTimeout(qx.lang.Function.bind(function(bf,bg){this.__lO(bf,bg);
},this,bb,bc),20);
var bd=this.getChildControl(d+bc,true);
bd.scrollBy(bb);
},_onChangeScrollbarXVisibility:function(e){var bh=this._isChildControlVisible(j);
var bi=this._isChildControlVisible(k);

if(!bh){this.scrollToX(0);
}bh&&bi?this._showChildControl(g):this._excludeChildControl(g);
},_onChangeScrollbarYVisibility:function(e){var bj=this._isChildControlVisible(j);
var bk=this._isChildControlVisible(k);

if(!bk){this.scrollToY(0);
}bj&&bk?this._showChildControl(g):this._excludeChildControl(g);
},_computeScrollbars:function(){var br=this.getChildControl(i);
var content=br.getChildren()[0];

if(!content){this._excludeChildControl(j);
this._excludeChildControl(k);
return;
}var bl=this.getInnerSize();
var bq=br.getInnerSize();
var bo=br.getScrollSize();
if(!bq||!bo){return;
}var bs=this.getScrollbarX();
var bt=this.getScrollbarY();

if(bs===h&&bt===h){var bp=bo.width>bl.width;
var bu=bo.height>bl.height;
if((bp||bu)&&!(bp&&bu)){if(bp){bu=bo.height>bq.height;
}else if(bu){bp=bo.width>bq.width;
}}}else{var bp=bs===c;
var bu=bt===c;
if(bo.width>(bp?bq.width:bl.width)&&bs===h){bp=true;
}
if(bo.height>(bp?bq.height:bl.height)&&bt===h){bu=true;
}}if(bp){var bn=this.getChildControl(j);
bn.show();
bn.setMaximum(Math.max(0,bo.width-bq.width));
bn.setKnobFactor((bo.width===0)?0:bq.width/bo.width);
}else{this._excludeChildControl(j);
}
if(bu){var bm=this.getChildControl(k);
bm.show();
bm.setMaximum(Math.max(0,bo.height-bq.height));
bm.setKnobFactor((bo.height===0)?0:bq.height/bo.height);
}else{this._excludeChildControl(k);
}}}});
})();
(function(){var n="top",m="left",h="qx.debug",g="bottom",f="hAlign",e="vAlign",d="Integer",c="_applyLayoutChange",b="center",a="middle",D="right",C="flex",B="height",A="' is not supported by the Grid layout!",z="Invalid parameter 'column'",w="The property '",v="Value must be positive",u="qx.ui.layout.Grid",t="maxHeight",s="width",q="minHeight",r="minWidth",o="maxWidth",p="Invalid parameter 'row'";
qx.Class.define(u,{extend:qx.ui.layout.Abstract,construct:function(E,F){qx.ui.layout.Abstract.call(this);
this.__lP=[];
this.__lQ=[];

if(E){this.setSpacingX(E);
}
if(F){this.setSpacingY(F);
}},properties:{spacingX:{check:d,init:0,apply:c},spacingY:{check:d,init:0,apply:c}},members:{__lR:null,__lP:null,__lQ:null,__lS:null,__lT:null,__lU:null,__lV:null,__lW:null,__lX:null,verifyLayoutProperty:qx.core.Environment.select(h,{"true":function(G,name,H){var I={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(I[name]==1,w+name+A);
this.assertInteger(H);
this.assert(H>=0,v);
},"false":null}),__lY:function(){var O=[];
var N=[];
var P=[];
var L=-1;
var K=-1;
var R=this._getLayoutChildren();

for(var i=0,l=R.length;i<l;i++){var M=R[i];
var Q=M.getLayoutProperties();
var S=Q.row;
var J=Q.column;
Q.colSpan=Q.colSpan||1;
Q.rowSpan=Q.rowSpan||1;
if(S==null||J==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+M+"' must be defined!");
}
if(O[S]&&O[S][J]){throw new Error("Cannot add widget '"+M+"'!. "+"There is already a widget '"+O[S][J]+"' in this cell ("+S+", "+J+") for '"+this+"'");
}
for(var x=J;x<J+Q.colSpan;x++){for(var y=S;y<S+Q.rowSpan;y++){if(O[y]==undefined){O[y]=[];
}O[y][x]=M;
K=Math.max(K,x);
L=Math.max(L,y);
}}
if(Q.rowSpan>1){P.push(M);
}
if(Q.colSpan>1){N.push(M);
}}for(var y=0;y<=L;y++){if(O[y]==undefined){O[y]=[];
}}this.__lR=O;
this.__lS=N;
this.__lT=P;
this.__lU=L;
this.__lV=K;
this.__lW=null;
this.__lX=null;
delete this._invalidChildrenCache;
},_setRowData:function(T,U,V){var W=this.__lP[T];

if(!W){this.__lP[T]={};
this.__lP[T][U]=V;
}else{W[U]=V;
}},_setColumnData:function(X,Y,ba){var bb=this.__lQ[X];

if(!bb){this.__lQ[X]={};
this.__lQ[X][Y]=ba;
}else{bb[Y]=ba;
}},setSpacing:function(bc){this.setSpacingY(bc);
this.setSpacingX(bc);
return this;
},setColumnAlign:function(bd,be,bf){if(qx.core.Environment.get(h)){this.assertInteger(bd,z);
this.assertInArray(be,[m,b,D]);
this.assertInArray(bf,[n,a,g]);
}this._setColumnData(bd,f,be);
this._setColumnData(bd,e,bf);
this._applyLayoutChange();
return this;
},getColumnAlign:function(bg){var bh=this.__lQ[bg]||{};
return {vAlign:bh.vAlign||n,hAlign:bh.hAlign||m};
},setRowAlign:function(bi,bj,bk){if(qx.core.Environment.get(h)){this.assertInteger(bi,p);
this.assertInArray(bj,[m,b,D]);
this.assertInArray(bk,[n,a,g]);
}this._setRowData(bi,f,bj);
this._setRowData(bi,e,bk);
this._applyLayoutChange();
return this;
},getRowAlign:function(bl){var bm=this.__lP[bl]||{};
return {vAlign:bm.vAlign||n,hAlign:bm.hAlign||m};
},getCellWidget:function(bn,bo){if(this._invalidChildrenCache){this.__lY();
}var bn=this.__lR[bn]||{};
return bn[bo]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__lY();
}return this.__lU+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__lY();
}return this.__lV+1;
},getCellAlign:function(bp,bq){var bw=n;
var bu=m;
var bv=this.__lP[bp];
var bs=this.__lQ[bq];
var br=this.__lR[bp][bq];

if(br){var bt={vAlign:br.getAlignY(),hAlign:br.getAlignX()};
}else{bt={};
}if(bt.vAlign){bw=bt.vAlign;
}else if(bv&&bv.vAlign){bw=bv.vAlign;
}else if(bs&&bs.vAlign){bw=bs.vAlign;
}if(bt.hAlign){bu=bt.hAlign;
}else if(bs&&bs.hAlign){bu=bs.hAlign;
}else if(bv&&bv.hAlign){bu=bv.hAlign;
}return {vAlign:bw,hAlign:bu};
},setColumnFlex:function(bx,by){this._setColumnData(bx,C,by);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bz){var bA=this.__lQ[bz]||{};
return bA.flex!==undefined?bA.flex:0;
},setRowFlex:function(bB,bC){this._setRowData(bB,C,bC);
this._applyLayoutChange();
return this;
},getRowFlex:function(bD){var bE=this.__lP[bD]||{};
var bF=bE.flex!==undefined?bE.flex:0;
return bF;
},setColumnMaxWidth:function(bG,bH){this._setColumnData(bG,o,bH);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bI){var bJ=this.__lQ[bI]||{};
return bJ.maxWidth!==undefined?bJ.maxWidth:Infinity;
},setColumnWidth:function(bK,bL){this._setColumnData(bK,s,bL);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bM){var bN=this.__lQ[bM]||{};
return bN.width!==undefined?bN.width:null;
},setColumnMinWidth:function(bO,bP){this._setColumnData(bO,r,bP);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bQ){var bR=this.__lQ[bQ]||{};
return bR.minWidth||0;
},setRowMaxHeight:function(bS,bT){this._setRowData(bS,t,bT);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bU){var bV=this.__lP[bU]||{};
return bV.maxHeight||Infinity;
},setRowHeight:function(bW,bX){this._setRowData(bW,B,bX);
this._applyLayoutChange();
return this;
},getRowHeight:function(bY){var ca=this.__lP[bY]||{};
return ca.height!==undefined?ca.height:null;
},setRowMinHeight:function(cb,cc){this._setRowData(cb,q,cc);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(cd){var ce=this.__lP[cd]||{};
return ce.minHeight||0;
},__ma:function(cf){var cj=cf.getSizeHint();
var ci=cf.getMarginLeft()+cf.getMarginRight();
var ch=cf.getMarginTop()+cf.getMarginBottom();
var cg={height:cj.height+ch,width:cj.width+ci,minHeight:cj.minHeight+ch,minWidth:cj.minWidth+ci,maxHeight:cj.maxHeight+ch,maxWidth:cj.maxWidth+ci};
return cg;
},_fixHeightsRowSpan:function(ck){var cr=this.getSpacingY();

for(var i=0,l=this.__lT.length;i<l;i++){var cy=this.__lT[i];
var cu=this.__ma(cy);
var cn=cy.getLayoutProperties();
var ct=cn.row;
var cD=cr*(cn.rowSpan-1);
var cl=cD;
var co={};

for(var j=0;j<cn.rowSpan;j++){var cs=cn.row+j;
var cC=ck[cs];
var cE=this.getRowFlex(cs);

if(cE>0){co[cs]={min:cC.minHeight,value:cC.height,max:cC.maxHeight,flex:cE};
}cD+=cC.height;
cl+=cC.minHeight;
}if(cD<cu.height){if(!qx.lang.Object.isEmpty(co)){var cp=qx.ui.layout.Util.computeFlexOffsets(co,cu.height,cD);

for(var k=0;k<cn.rowSpan;k++){var cA=cp[ct+k]?cp[ct+k].offset:0;
ck[ct+k].height+=cA;
}}else{var cx=cr*(cn.rowSpan-1);
var cv=cu.height-cx;
var cB=Math.floor(cv/cn.rowSpan);
var cz=0;
var cm=0;

for(var k=0;k<cn.rowSpan;k++){var cq=ck[ct+k].height;
cz+=cq;

if(cq<cB){cm++;
}}var cw=Math.floor((cv-cz)/cm);
for(var k=0;k<cn.rowSpan;k++){if(ck[ct+k].height<cB){ck[ct+k].height+=cw;
}}}}if(cl<cu.minHeight){var cp=qx.ui.layout.Util.computeFlexOffsets(co,cu.minHeight,cl);

for(var j=0;j<cn.rowSpan;j++){var cA=cp[ct+j]?cp[ct+j].offset:0;
ck[ct+j].minHeight+=cA;
}}}},_fixWidthsColSpan:function(cF){var cJ=this.getSpacingX();

for(var i=0,l=this.__lS.length;i<l;i++){var cG=this.__lS[i];
var cI=this.__ma(cG);
var cL=cG.getLayoutProperties();
var cH=cL.column;
var cR=cJ*(cL.colSpan-1);
var cK=cR;
var cM={};
var cO;

for(var j=0;j<cL.colSpan;j++){var cS=cL.column+j;
var cQ=cF[cS];
var cP=this.getColumnFlex(cS);
if(cP>0){cM[cS]={min:cQ.minWidth,value:cQ.width,max:cQ.maxWidth,flex:cP};
}cR+=cQ.width;
cK+=cQ.minWidth;
}if(cR<cI.width){var cN=qx.ui.layout.Util.computeFlexOffsets(cM,cI.width,cR);

for(var j=0;j<cL.colSpan;j++){cO=cN[cH+j]?cN[cH+j].offset:0;
cF[cH+j].width+=cO;
}}if(cK<cI.minWidth){var cN=qx.ui.layout.Util.computeFlexOffsets(cM,cI.minWidth,cK);

for(var j=0;j<cL.colSpan;j++){cO=cN[cH+j]?cN[cH+j].offset:0;
cF[cH+j].minWidth+=cO;
}}}},_getRowHeights:function(){if(this.__lW!=null){return this.__lW;
}var dd=[];
var cV=this.__lU;
var cU=this.__lV;

for(var de=0;de<=cV;de++){var cW=0;
var cY=0;
var cX=0;

for(var dc=0;dc<=cU;dc++){var cT=this.__lR[de][dc];

if(!cT){continue;
}var da=cT.getLayoutProperties().rowSpan||0;

if(da>1){continue;
}var db=this.__ma(cT);

if(this.getRowFlex(de)>0){cW=Math.max(cW,db.minHeight);
}else{cW=Math.max(cW,db.height);
}cY=Math.max(cY,db.height);
}var cW=Math.max(cW,this.getRowMinHeight(de));
var cX=this.getRowMaxHeight(de);

if(this.getRowHeight(de)!==null){var cY=this.getRowHeight(de);
}else{var cY=Math.max(cW,Math.min(cY,cX));
}dd[de]={minHeight:cW,height:cY,maxHeight:cX};
}
if(this.__lT.length>0){this._fixHeightsRowSpan(dd);
}this.__lW=dd;
return dd;
},_getColWidths:function(){if(this.__lX!=null){return this.__lX;
}var dj=[];
var dg=this.__lV;
var di=this.__lU;

for(var dp=0;dp<=dg;dp++){var dm=0;
var dl=0;
var dh=Infinity;

for(var dq=0;dq<=di;dq++){var df=this.__lR[dq][dp];

if(!df){continue;
}var dk=df.getLayoutProperties().colSpan||0;

if(dk>1){continue;
}var dn=this.__ma(df);

if(this.getColumnFlex(dp)>0){dl=Math.max(dl,dn.minWidth);
}else{dl=Math.max(dl,dn.width);
}dm=Math.max(dm,dn.width);
}dl=Math.max(dl,this.getColumnMinWidth(dp));
dh=this.getColumnMaxWidth(dp);

if(this.getColumnWidth(dp)!==null){var dm=this.getColumnWidth(dp);
}else{var dm=Math.max(dl,Math.min(dm,dh));
}dj[dp]={minWidth:dl,width:dm,maxWidth:dh};
}
if(this.__lS.length>0){this._fixWidthsColSpan(dj);
}this.__lX=dj;
return dj;
},_getColumnFlexOffsets:function(dr){var ds=this.getSizeHint();
var dw=dr-ds.width;

if(dw==0){return {};
}var du=this._getColWidths();
var dt={};

for(var i=0,l=du.length;i<l;i++){var dx=du[i];
var dv=this.getColumnFlex(i);

if((dv<=0)||(dx.width==dx.maxWidth&&dw>0)||(dx.width==dx.minWidth&&dw<0)){continue;
}dt[i]={min:dx.minWidth,value:dx.width,max:dx.maxWidth,flex:dv};
}return qx.ui.layout.Util.computeFlexOffsets(dt,dr,ds.width);
},_getRowFlexOffsets:function(dy){var dz=this.getSizeHint();
var dC=dy-dz.height;

if(dC==0){return {};
}var dD=this._getRowHeights();
var dA={};

for(var i=0,l=dD.length;i<l;i++){var dE=dD[i];
var dB=this.getRowFlex(i);

if((dB<=0)||(dE.height==dE.maxHeight&&dC>0)||(dE.height==dE.minHeight&&dC<0)){continue;
}dA[i]={min:dE.minHeight,value:dE.height,max:dE.maxHeight,flex:dB};
}return qx.ui.layout.Util.computeFlexOffsets(dA,dy,dz.height);
},renderLayout:function(dF,dG){if(this._invalidChildrenCache){this.__lY();
}var dU=qx.ui.layout.Util;
var dI=this.getSpacingX();
var dO=this.getSpacingY();
var ea=this._getColWidths();
var dY=this._getColumnFlexOffsets(dF);
var dJ=[];
var ec=this.__lV;
var dH=this.__lU;
var eb;

for(var ed=0;ed<=ec;ed++){eb=dY[ed]?dY[ed].offset:0;
dJ[ed]=ea[ed].width+eb;
}var dR=this._getRowHeights();
var dT=this._getRowFlexOffsets(dG);
var ej=[];

for(var dP=0;dP<=dH;dP++){eb=dT[dP]?dT[dP].offset:0;
ej[dP]=dR[dP].height+eb;
}var ek=0;

for(var ed=0;ed<=ec;ed++){var top=0;

for(var dP=0;dP<=dH;dP++){var dW=this.__lR[dP][ed];
if(!dW){top+=ej[dP]+dO;
continue;
}var dK=dW.getLayoutProperties();
if(dK.row!==dP||dK.column!==ed){top+=ej[dP]+dO;
continue;
}var ei=dI*(dK.colSpan-1);

for(var i=0;i<dK.colSpan;i++){ei+=dJ[ed+i];
}var dX=dO*(dK.rowSpan-1);

for(var i=0;i<dK.rowSpan;i++){dX+=ej[dP+i];
}var dL=dW.getSizeHint();
var eg=dW.getMarginTop();
var dV=dW.getMarginLeft();
var dS=dW.getMarginBottom();
var dN=dW.getMarginRight();
var dQ=Math.max(dL.minWidth,Math.min(ei-dV-dN,dL.maxWidth));
var eh=Math.max(dL.minHeight,Math.min(dX-eg-dS,dL.maxHeight));
var ee=this.getCellAlign(dP,ed);
var ef=ek+dU.computeHorizontalAlignOffset(ee.hAlign,dQ,ei,dV,dN);
var dM=top+dU.computeVerticalAlignOffset(ee.vAlign,eh,dX,eg,dS);
dW.renderLayout(ef,dM,dQ,eh);
top+=ej[dP]+dO;
}ek+=dJ[ed]+dI;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__lX=null;
this.__lW=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lY();
}var ep=this._getColWidths();
var er=0,es=0;

for(var i=0,l=ep.length;i<l;i++){var et=ep[i];

if(this.getColumnFlex(i)>0){er+=et.minWidth;
}else{er+=et.width;
}es+=et.width;
}var eu=this._getRowHeights();
var en=0,eq=0;

for(var i=0,l=eu.length;i<l;i++){var ev=eu[i];

if(this.getRowFlex(i)>0){en+=ev.minHeight;
}else{en+=ev.height;
}eq+=ev.height;
}var em=this.getSpacingX()*(ep.length-1);
var el=this.getSpacingY()*(eu.length-1);
var eo={minWidth:er+em,width:es+em,minHeight:en+el,height:eq+el};
return eo;
}},destruct:function(){this.__lR=this.__lP=this.__lQ=this.__lS=this.__lT=this.__lX=this.__lW=null;
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
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__mb:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__mc:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__mc[name];
s[t]();
}else{var u=this.__mb[name];
s[u](q);
}}}});
})();
(function(){var b="pane",a="qx.ui.container.Scroll";
qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){qx.ui.core.scroll.AbstractScrollArea.call(this);

if(content){this.add(content);
}},members:{add:function(c){this.getChildControl(b).add(c);
},remove:function(d){this.getChildControl(b).remove(d);
},getChildren:function(){return this.getChildControl(b).getChildren();
},_getContentPaddingTarget:function(){return this.getChildControl(b);
}}});
})();
(function(){var k="list",j="table",h="execute",g="",f="bigger",e="jsonField",d="set",c="changeValue",b="filter",a="change",U="name",T="changeBubble",S="icon/16/actions/go-next.png",R="__MW",Q="changeFeatureMap",P="sourceProperty",O="Selected Features",N="fce.view.FeatureSelector",M="bottom",L="_applyModel",s="changeFilter",t="interval",q="Available Features",r="icon/16/actions/edit-find.png",o="Filter by feature name (RegEx)",p="middle",m="distinctValues",n="icon/16/actions/go-previous.png",u="icon/16/actions/window-new.png",v="number",D="_",C="Import Feature Map",F="textfield",E="__MY",H="JSON",G="cellDblclick",z="boolean",K="string",J="widget",I="featureselector",w="modelValueProperty",A="_applyFeatureData",B="__MX";
qx.Class.define(N,{extend:qx.ui.container.Composite,construct:function(){var V=new qx.ui.layout.HBox(20);
qx.ui.container.Composite.call(this,V);
this.setAppearance(I);
this.add(this._createTableContainer(),{flex:1});
this.add(this._createButtonContainer(),{flex:0});
this.add(this._createDisplayContainer(),{flex:1});
this.__MV={};
},properties:{featureData:{init:{},nullable:true,apply:A},model:{apply:L},filter:{init:g,event:s}},statics:{sanitizeId:function(W){if(/^[$A-Za-z_][0-9A-Za-z_]*$/.test(W)){return W;
}W=W.replace(/[^0-9a-z_]/gi,g);

if(W.length==0){W=D+new Date().getTime();
}return W;
}},members:{__MW:null,__MX:null,__MY:null,__Na:null,__MV:null,__Nb:null,_createChildControlImpl:function(X,Y){var ba;

switch(X){case j:ba=new fce.view.Table();
ba.setMinWidth(330);
this.bind(b,ba,b);
ba.addListener(G,this.__Nf,this);
qx.data.SingleValueBinding.bind(ba,P,this.getChildControl(k),w);
break;
case k:ba=new fce.view.List();
ba.setMinWidth(330);
ba.setMinHeight(75);
ba.getSelectedItems().addListener(a,this.__zh,this);
break;
case e:ba=new qx.ui.form.TextArea();
ba.setMinWidth(330);
ba.setMinHeight(75);
ba.setReadOnly(true);
}return ba;
},_createTableContainer:function(){var bd=new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
var be=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
bd.add(be);
var bf=new qx.ui.basic.Label(q);
bf.setFont(f);
be.add(bf);
bf.setAlignY(M);
be.add(new qx.ui.core.Spacer(),{flex:1});
var bc=new qx.ui.form.Button(C,u);
bc.addListener(h,function(bg){this._getImportWindow().open();
},this);
be.add(bc);
var bb=this.getChildControl(j);
bd.add(bb,{flex:1});
bd.addBefore(this._createFilterBox(),bb);
return bd;
},_createButtonContainer:function(){var bj=new qx.ui.container.Composite(new qx.ui.layout.VBox(20,p));
var bh=new qx.ui.form.Button(null,S);
bh.addListener(h,this.__Nh,this);
bj.add(bh);
var bi=new qx.ui.form.Button(null,n);
bi.addListener(h,this.__Ni,this);
bj.add(bi);
return bj;
},_createDisplayContainer:function(){var bm=new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
var bl=new qx.ui.basic.Label(O);
bm.add(bl);
bl.setFont(f);
bm.add(this.getChildControl(k),{flex:1});
var bk=new qx.ui.basic.Label(H);
bk.setFont(f);
bm.add(bk);
bm.add(this.getChildControl(e),{flex:1});
return bm;
},_createFilterBox:function(){var bp=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
bp.setAppearance(F);
var bn=this.__MW=new qx.ui.form.TextField();
bn.setLiveUpdate(true);
bn.setAppearance(J);
bn.setPlaceholder(o);
bp.add(bn,{flex:1});
var bq=new qx.ui.basic.Image(r);
bp.add(bq);
var bo=new qx.event.Timer(500);
bo.addListener(t,function(br){this.setFilter(this.__MW.getValue());
bo.stop();
},this);
bn.addListener(c,function(bs){bo.restart();
},this);
return bp;
},_getImportWindow:function(){if(!this.__MX){this.__MX=new fce.view.ImportWindow();
this.__MX.center();
this.__MX.addListener(Q,this.__Nc,this);
}return this.__MX;
},__Nc:function(bt){var bu=bt.getData();
this._saveModifiedData();
this.__MW.setValue(g);
this.getChildControl(k).removeAll();
this.addFeatureSet(bu);
this._restoreModifiedData();
},_getData:function(bv){var bF=[];
var by=[];
var bz=[];

for(var bD in bv){bz.push(bD);
var bw=bv[bD];

for(var bC in bw){if(!qx.lang.Array.contains(by,bC)){by.push(bC);
}}}by.sort();

for(var i=0,l=by.length;i<l;i++){var bB=by[i];
var bA={name:bB,distinctValues:1};
var bG=[];

for(var bD in bv){var bE=bv[bD];

if(bE[bB]!==undefined){bA[bD]=bE[bB];

if(bG.length==0){bG.push(bE[bB]);
}else{var bx=bG.concat();

for(var x=0,y=bx.length;x<y;x++){if(!fce.Util.valuesEqual(bE[bB],bx[x])){bG.push(bE[bB]);
}}}}}bA.distinctValues=bG.length;
bF.push(bA);
}return bF;
},_saveModifiedData:function(){this.__Nb=[];
var bH=this.getChildControl(k);
var bI=bH.getChildren();

for(var i=0,l=bI.length;i<l;i++){var bL=bI[i];
var bK=bL.getModelItem();
var bM=bK.getName();
var bO=bL.getValueProperty();
var bJ=bK.get(bO);
var bN={key:bM,value:bJ,valueProp:bO};
this.__Nb.push(bN);
}},_restoreModifiedData:function(){for(var i=0,l=this.__Nb.length;i<l;i++){var bP=this.__Nb[i];
var bQ=this.__Nd(U,bP.key);

if(bQ){bQ.set(bP.valueProp,bP.value);
this.getChildControl(k).addItemsUnique(new qx.data.Array([bQ]));
}}},__Nd:function(bR,bS){var bU=this.getModel();

for(var i=0,l=bU.length;i<l;i++){var bT=bU.getItem(i);

if(bT.get(bR)===bS){return bT;
}}return null;
},addFeatureSet:function(bV){var bW=this.getFeatureData();

for(var bX in bV){var bY=fce.view.FeatureSelector.sanitizeId(bX);
bW[bY]=bV[bX];
}this.setFeatureData(null);
this.setFeatureData(bW);
},_applyFeatureData:function(ca,cb){if(ca){var cd=this._getData(ca);
this.__Ne(cd);
var cc=qx.data.marshal.Json.createModel(cd,true);
this.setModel(cc);
}},_applyModel:function(ce,cf){if(cf){cf.removeListener(T,this.__zh,this);
}ce.addListener(T,this.__zh,this);
this.getChildControl(j).setModel(ce);
},__Ne:function(cg){for(var i=0,l=cg.length;i<l;i++){var ch=cg[i];

for(var cj in ch){var ci=typeof ch[cj];

if(!(ci==z||ci==v||ci==K)){ch[cj]=qx.lang.Json.stringify(ch[cj]);
}}}},__zh:function(){var ck=this.getChildControl(k).getModelValueProperty();
var cm=this.__Ng(this.getChildControl(k).getSelectedItems(),ck);
var cl=fce.Util.getFormattedJson(cm);
this.getChildControl(e).setValue(cl);
},__Nf:function(cn){var co=this.getChildControl(j);
var cs=co.getTableModel();
var cp=cn.getRow();
var cq=cs.getColumnCount()-1;
var cr=cs.getValue(cq,cp);
this.getChildControl(k).addItemsUnique(new qx.data.Array([cr]));
},__Ng:function(ct,cu){var cw={};

for(var i=0,l=ct.length;i<l;i++){var cv=ct.getItem(i);

if(!qx.Class.hasProperty(cv.constructor,cu)){for(var cx in qx.util.PropertyUtil.getAllProperties(cv.constructor)){if(cx!==U&&cx!==m){cu=cx;
break;
}}}cw[cv.getName()]=cv.get(cu);
}return cw;
},_getSetsMenu:function(cy){if(!this.__Na){this.__Na=[];
}
for(var i=0,l=cy.length;i<l;i++){if(!qx.lang.Array.contains(this.__Na,cy[i])){var cz=new qx.ui.menu.CheckBox(cy[i]);
cz.setValue(true);
cz.setUserData(d,cy[i]);
cz.addListener(c,function(cA){var cB=cA.getTarget().getUserData(d);
var cC=cA.getData();

if(cC){this._unstashSet(cB);
}else{this._stashSet(cB);
}},this);
this.__MY.add(cz);
this.__Na.push(cy[i]);
}}},_stashSet:function(cD){var cE=this.getFeatureData();

if(cE[cD]){this.__MV[cD]=cE[cD];
delete cE[cD];
this.setFeatureData(null);
this.setFeatureData(cE);
}},_unstashSet:function(cF){var cG=this.getFeatureData();

if(this.__MV[cF]){cG[cF]=this.__MV[cF];
delete this.__MV[cF];
this.setFeatureData(null);
this.setFeatureData(cG);
}},__Nh:function(){var cH=this.getChildControl(j).getSelectedItems();
this.getChildControl(k).addItemsUnique(cH);
},__Ni:function(){this.getChildControl(k).removeSelected();
}},destruct:function(){this.getChildControl(k).getSelectedItems().removeListener(a,this.__zh,this);
this._disposeObjects(R,B,E);
}});
})();
(function(){var j="[",h="]",g="idBubble-",f=".",d="changeBubble",c="qx.data.marshal.MEventBubbling",b="",a="qx.event.type.Data";
qx.Mixin.define(c,{events:{"changeBubble":a},members:{_applyEventPropagation:function(k,l,name){this.fireDataEvent(d,{value:k,name:name,old:l});
this._registerEventChaining(k,l,name);
},_registerEventChaining:function(m,n,name){if((m instanceof qx.core.Object)&&qx.Class.hasMixin(m.constructor,qx.data.marshal.MEventBubbling)){var o=qx.lang.Function.bind(this.__lI,this,name);
var q=m.addListener(d,o,this);
var p=m.getUserData(g+this.$$hash);

if(p==null){p=[];
m.setUserData(g+this.$$hash,p);
}p.push(q);
}if(n!=null&&n.getUserData&&n.getUserData(g+this.$$hash)!=null){var p=n.getUserData(g+this.$$hash);

for(var i=0;i<p.length;i++){n.removeListenerById(p[i]);
}n.setUserData(g+this.$$hash,null);
}},__lI:function(name,e){var y=e.getData();
var u=y.value;
var s=y.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(y.name.indexOf){var x=y.name.indexOf(f)!=-1?y.name.indexOf(f):y.name.length;
var v=y.name.indexOf(j)!=-1?y.name.indexOf(j):y.name.length;
if(v==0){var t=name+y.name;
}else if(x<v){var r=y.name.substring(0,x);
var w=y.name.substring(x+1,y.name.length);

if(w[0]!=j){w=f+w;
}var t=name+j+r+h+w;
}else if(v<x){var r=y.name.substring(0,v);
var w=y.name.substring(v,y.name.length);
var t=name+j+r+h+w;
}else{var t=name+j+y.name+h;
}}else{var t=name+j+y.name+h;
}}else{if(parseInt(name)==name&&name!==b){name=j+name+h;
}var t=name+f+y.name;
}this.fireDataEvent(d,{value:u,name:t,old:s});
}}});
})();
(function(){var r="change",q="changeBubble",p="add",o="remove",n="0-",m="order",l="-",k="qx.debug",j="0",h="qx.event.type.Data",c="Boolean",g="",f="Please use 'toArray()' to see the content.",b="qx.data.Array",a="The parameter must be an array.",e="number",d="changeLength";
qx.Class.define(b,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(s){qx.core.Object.call(this);
if(s==undefined){this.__lJ=[];
}else if(arguments.length>1){this.__lJ=[];

for(var i=0;i<arguments.length;i++){this.__lJ.push(arguments[i]);
}}else if(typeof s==e){this.__lJ=new Array(s);
}else if(s instanceof Array){this.__lJ=qx.lang.Array.clone(s);
}else{this.__lJ=[];
this.dispose();
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__lJ.length;i++){this._applyEventPropagation(this.__lJ[i],null,i);
}this.__lK();
if(qx.core.Environment.get(k)){this[0]=f;
}},properties:{autoDisposeItems:{check:c,init:false}},events:{"change":h,"changeLength":h},members:{__lJ:null,concat:function(t){if(t){var u=this.__lJ.concat(t);
}else{var u=this.__lJ.concat();
}return new qx.data.Array(u);
},join:function(v){return this.__lJ.join(v);
},pop:function(){var w=this.__lJ.pop();
this.__lK();
this._registerEventChaining(null,w,this.length-1);
this.fireDataEvent(q,{value:[],name:this.length,old:[w]});
this.fireDataEvent(r,{start:this.length-1,end:this.length-1,type:o,items:[w]},null);
return w;
},push:function(x){for(var i=0;i<arguments.length;i++){this.__lJ.push(arguments[i]);
this.__lK();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(q,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(r,{start:this.length-1,end:this.length-1,type:p,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var y=this.__lJ.concat();
this.__lJ.reverse();
this.fireDataEvent(r,{start:0,end:this.length-1,type:m,items:null},null);
this.fireDataEvent(q,{value:this.__lJ,name:n+(this.__lJ.length-1),old:y});
},shift:function(){if(this.length==0){return;
}var z=this.__lJ.shift();
this.__lK();
this._registerEventChaining(null,z,this.length-1);
this.fireDataEvent(q,{value:[],name:j,old:[z]});
this.fireDataEvent(r,{start:0,end:this.length-1,type:o,items:[z]},null);
return z;
},slice:function(A,B){return new qx.data.Array(this.__lJ.slice(A,B));
},splice:function(C,D,E){var M=this.__lJ.length;
var I=this.__lJ.splice.apply(this.__lJ,arguments);
if(this.__lJ.length!=M){this.__lK();
}var K=D>0;
var G=arguments.length>2;
var H=null;

if(K||G){if(this.__lJ.length>M){var L=p;
H=qx.lang.Array.fromArguments(arguments,2);
}else if(this.__lJ.length<M){var L=o;
H=I;
}else{var L=m;
}this.fireDataEvent(r,{start:C,end:this.length-1,type:L,items:H},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,C+i);
}var J=[];

for(var i=2;i<arguments.length;i++){J[i-2]=arguments[i];
}var F=(C+Math.max(arguments.length-3,D-1));
var name=C==F?F:C+l+F;
this.fireDataEvent(q,{value:J,name:name,old:I});
for(var i=0;i<I.length;i++){this._registerEventChaining(null,I[i],i);
}return (new qx.data.Array(I));
},sort:function(N){if(this.length==0){return;
}var O=this.__lJ.concat();
this.__lJ.sort.apply(this.__lJ,arguments);
if(qx.lang.Array.equals(this.__lJ,O)===true){return;
}this.fireDataEvent(r,{start:0,end:this.length-1,type:m,items:null},null);
this.fireDataEvent(q,{value:this.__lJ,name:n+(this.length-1),old:O});
},unshift:function(P){for(var i=arguments.length-1;i>=0;i--){this.__lJ.unshift(arguments[i]);
this.__lK();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(q,{value:[this.__lJ[0]],name:j,old:[this.__lJ[1]]});
this.fireDataEvent(r,{start:0,end:this.length-1,type:p,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__lJ;
},getItem:function(Q){return this.__lJ[Q];
},setItem:function(R,S){var T=this.__lJ[R];
if(T===S){return;
}this.__lJ[R]=S;
this._registerEventChaining(S,T,R);
if(this.length!=this.__lJ.length){this.__lK();
}this.fireDataEvent(q,{value:[S],name:R,old:[T]});
this.fireDataEvent(r,{start:R,end:R,type:p,items:[S]},null);
},getLength:function(){return this.length;
},indexOf:function(U){return this.__lJ.indexOf(U);
},toString:function(){if(this.__lJ!=null){return this.__lJ.toString();
}return g;
},contains:function(V){return this.__lJ.indexOf(V)!==-1;
},copy:function(){return this.concat();
},insertAt:function(W,X){this.splice(W,0,X).dispose();
},insertBefore:function(Y,ba){var bb=this.indexOf(Y);

if(bb==-1){this.push(ba);
}else{this.splice(bb,0,ba).dispose();
}},insertAfter:function(bc,bd){var be=this.indexOf(bc);

if(be==-1||be==(this.length-1)){this.push(bd);
}else{this.splice(be+1,0,bd).dispose();
}},removeAt:function(bf){var bh=this.splice(bf,1);
var bg=bh.getItem(0);
bh.dispose();
return bg;
},removeAll:function(){for(var i=0;i<this.__lJ.length;i++){this._registerEventChaining(null,this.__lJ[i],i);
}if(this.getLength()==0){return;
}var bj=this.getLength();
var bi=this.__lJ.concat();
this.__lJ.length=0;
this.__lK();
this.fireDataEvent(q,{value:[],name:n+(bj-1),old:bi});
this.fireDataEvent(r,{start:0,end:bj-1,type:o,items:bi},null);
return bi;
},append:function(bk){if(bk instanceof qx.data.Array){bk=bk.toArray();
}if(qx.core.Environment.get(k)){qx.core.Assert.assertArray(bk,a);
}Array.prototype.push.apply(this.__lJ,bk);
for(var i=0;i<bk.length;i++){this._registerEventChaining(bk[i],null,this.__lJ.length+i);
}var bl=this.length;
this.__lK();
this.fireDataEvent(q,{value:bk,name:bl==(this.length-1)?bl:bl+l+(this.length-1),old:[]});
this.fireDataEvent(r,{start:bl,end:this.length-1,type:p,items:bk},null);
},remove:function(bm){var bn=this.indexOf(bm);

if(bn!=-1){this.splice(bn,1).dispose();
return bm;
}},equals:function(bo){if(this.length!==bo.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bo.getItem(i)){return false;
}}return true;
},sum:function(){var bp=0;

for(var i=0;i<this.length;i++){bp+=this.getItem(i);
}return bp;
},max:function(){var bq=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bq){bq=this.getItem(i);
}}return bq===undefined?null:bq;
},min:function(){var br=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<br){br=this.getItem(i);
}}return br===undefined?null:br;
},forEach:function(bs,bt){for(var i=0;i<this.__lJ.length;i++){bs.call(bt,this.__lJ[i],i,this);
}},__lK:function(){var bu=this.length;
this.length=this.__lJ.length;
this.fireDataEvent(d,this.length,bu);
}},destruct:function(){for(var i=0;i<this.__lJ.length;i++){var bv=this.__lJ[i];
this._applyEventPropagation(null,bv,i);
if(this.isAutoDisposeItems()&&bv&&bv instanceof qx.core.Object){bv.dispose();
}}this.__lJ=null;
}});
})();
(function(){var q="Boolean",p="column-button",o="Function",n="qx.event.type.Data",m="statusbar",k="qx.ui.table.pane.CellEvent",h="function",g="PageUp",f="dataChanged",e="changeLocale",bH="__nV",bG="changeSelection",bF="appear",bE="qx.dynlocale",bD='"',bC="Enter",bB="metaDataChanged",bA="_applyStatusBarVisible",bz="columnVisibilityMenuCreateStart",by="blur",y="qx.ui.table.Table",z="columnVisibilityMenuCreateEnd",v="__it",w="changeVisible",t="_applyResetSelectionOnHeaderClick",u="_applyMetaColumnCounts",r="focus",s="changeDataRowRenderer",G="changeHeaderCellHeight",H="Escape",ba="A",V="changeSelectionModel",bi="Left",bd="__nT",bu="Down",bo="Integer",O="_applyHeaderCellHeight",bx="visibilityChanged",bw="qx.ui.table.ITableModel",bv="orderChanged",M="_applySelectionModel",R="menu-button",T="menu",X="_applyAdditionalStatusBarText",bb="_applyFocusCellOnMouseMove",be="table",bk="_applyColumnVisibilityButtonVisible",bq="changeTableModel",A="qx.event.type.Event",B="__nM",Q="tableWidthChanged",bh="_applyHeaderCellsVisible",bg="Object",bf="_applyShowCellFocusIndicator",bm="resize",bl="verticalScrollBarChanged",bc="changeScrollY",bj="_applyTableModel",a="End",bp="_applyKeepFirstVisibleRowComplete",C="widthChanged",D="one of one row",W="Home",b="_applyRowHeight",d="F2",L="Up",E="%1 rows",F="qx.ui.table.selection.Model",J="one row",Y="PageDown",bs="%1 of %2 rows",br="keypress",S="changeRowHeight",bt="Number",N="__nN",bn="__nU",I="header",K="_applyContextMenuFromDataCellsOnly",c="qx.ui.table.IRowRenderer",U="Right",P="Space";
qx.Class.define(y,{extend:qx.ui.core.Widget,construct:function(bI,bJ){qx.ui.core.Widget.call(this);
if(!bJ){bJ={};
}
if(bJ.initiallyHiddenColumns){this.setInitiallyHiddenColumns(bJ.initiallyHiddenColumns);
}
if(bJ.selectionManager){this.setNewSelectionManager(bJ.selectionManager);
}
if(bJ.selectionModel){this.setNewSelectionModel(bJ.selectionModel);
}
if(bJ.tableColumnModel){this.setNewTableColumnModel(bJ.tableColumnModel);
}
if(bJ.tablePane){this.setNewTablePane(bJ.tablePane);
}
if(bJ.tablePaneHeader){this.setNewTablePaneHeader(bJ.tablePaneHeader);
}
if(bJ.tablePaneScroller){this.setNewTablePaneScroller(bJ.tablePaneScroller);
}
if(bJ.tablePaneModel){this.setNewTablePaneModel(bJ.tablePaneModel);
}
if(bJ.columnMenu){this.setNewColumnMenu(bJ.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__nM=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__nM,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__nN=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bI||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(br,this._onKeyPress);
this.addListener(r,this._onFocusChanged);
this.addListener(by,this._onFocusChanged);
var bK=new qx.ui.core.Widget().set({height:0});
this._add(bK);
bK.addListener(bm,this._onResize,this);
this.__nO=null;
this.__nP=null;
if(qx.core.Environment.get(bE)){qx.locale.Manager.getInstance().addListener(e,this._onChangeLocale,this);
}this.initStatusBarVisible();
bI=this.getTableModel();

if(bI.init&&typeof (bI.init)==h){bI.init(this);
}},events:{"columnVisibilityMenuCreateStart":n,"columnVisibilityMenuCreateEnd":n,"tableWidthChanged":A,"verticalScrollBarChanged":n,"cellClick":k,"cellDblclick":k,"cellContextmenu":k,"dataEdited":n},statics:{__nQ:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:be},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:F,apply:M,event:V},tableModel:{check:bw,apply:bj,event:bq},rowHeight:{check:bt,init:20,apply:b,event:S,themeable:true},forceLineHeight:{check:q,init:true},headerCellsVisible:{check:q,init:true,apply:bh,themeable:true},headerCellHeight:{check:bo,init:16,apply:O,event:G,nullable:true,themeable:true},statusBarVisible:{check:q,init:true,apply:bA},additionalStatusBarText:{nullable:true,init:null,apply:X},columnVisibilityButtonVisible:{check:q,init:true,apply:bk,themeable:true},metaColumnCounts:{check:bg,apply:u},focusCellOnMouseMove:{check:q,init:false,apply:bb},rowFocusChangeModifiesSelection:{check:q,init:true},showCellFocusIndicator:{check:q,init:true,apply:bf},contextMenuFromDataCellsOnly:{check:q,init:true,apply:K},keepFirstVisibleRowComplete:{check:q,init:true,apply:bp},alwaysUpdateCells:{check:q,init:false},resetSelectionOnHeaderClick:{check:q,init:true,apply:t},dataRowRenderer:{check:c,init:null,nullable:true,event:s},modalCellEditorPreOpenFunction:{check:o,init:null,nullable:true},newColumnMenu:{check:o,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:o,init:function(bL){return new qx.ui.table.selection.Manager(bL);
}},newSelectionModel:{check:o,init:function(bM){return new qx.ui.table.selection.Model(bM);
}},newTableColumnModel:{check:o,init:function(bN){return new qx.ui.table.columnmodel.Basic(bN);
}},newTablePane:{check:o,init:function(bO){return new qx.ui.table.pane.Pane(bO);
}},newTablePaneHeader:{check:o,init:function(bP){return new qx.ui.table.pane.Header(bP);
}},newTablePaneScroller:{check:o,init:function(bQ){return new qx.ui.table.pane.Scroller(bQ);
}},newTablePaneModel:{check:o,init:function(bR){return new qx.ui.table.pane.Model(bR);
}}},members:{__nO:null,__nP:null,__nM:null,__nN:null,__nR:null,__nS:null,__mO:null,__nT:null,__nU:null,__nV:null,__nW:null,__it:null,_createChildControlImpl:function(bS,bT){var bU;

switch(bS){case m:bU=new qx.ui.basic.Label();
bU.set({allowGrowX:true});
this._add(bU);
break;
case p:bU=this.getNewColumnMenu()();
bU.set({focusable:false});
var bV=bU.factory(T,{table:this});
bV.addListener(bF,this._initColumnMenu,this);
break;
}return bU||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);
},_applySelectionModel:function(bW,bX){this.__nN.setSelectionModel(bW);

if(bX!=null){bX.removeListener(bG,this._onSelectionChanged,this);
}bW.addListener(bG,this._onSelectionChanged,this);
},_applyRowHeight:function(bY,ca){var cb=this._getPaneScrollerArr();

for(var i=0;i<cb.length;i++){cb[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(cc,cd){var ce=this._getPaneScrollerArr();

for(var i=0;i<ce.length;i++){ce[i]._excludeChildControl(I);
}},_applyHeaderCellHeight:function(cf,cg){var ch=this._getPaneScrollerArr();

for(var i=0;i<ch.length;i++){ch[i].getHeader().setHeight(cf);
}},getEmptyTableModel:function(){if(!this.__nV){this.__nV=new qx.ui.table.model.Simple();
this.__nV.setColumns([]);
this.__nV.setData([]);
}return this.__nV;
},_applyTableModel:function(ci,cj){this.getTableColumnModel().init(ci.getColumnCount(),this);

if(cj!=null){cj.removeListener(bB,this._onTableModelMetaDataChanged,this);
cj.removeListener(f,this._onTableModelDataChanged,this);
}ci.addListener(bB,this._onTableModelMetaDataChanged,this);
ci.addListener(f,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ci.getRowCount(),0,ci.getColumnCount());
this._onTableModelMetaDataChanged();
if(cj&&ci.init&&typeof (ci.init)==h){ci.init(this);
}},getTableColumnModel:function(){if(!this.__nU){var cm=this.__nU=this.getNewTableColumnModel()(this);
cm.addListener(bx,this._onColVisibilityChanged,this);
cm.addListener(C,this._onColWidthChanged,this);
cm.addListener(bv,this._onColOrderChanged,this);
var cl=this.getTableModel();
cm.init(cl.getColumnCount(),this);
var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){var cn=ck[i];
var co=cn.getTablePaneModel();
co.setTableColumnModel(cm);
}}return this.__nU;
},_applyStatusBarVisible:function(cp,cq){if(cp){this._showChildControl(m);
}else{this._excludeChildControl(m);
}
if(cp){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cr,cs){this.__nR=cr;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(ct,cu){if(ct){this._showChildControl(p);
}else{this._excludeChildControl(p);
}},_applyMetaColumnCounts:function(cv,cw){var cD=cv;
var cx=this._getPaneScrollerArr();
var cB={};

if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);

for(var cG in qx.ui.table.Table.__nQ){cB[cG]={};
cB[cG].capture=cF.getListeners(cx[0],cG,true);
cB[cG].bubble=cF.getListeners(cx[0],cG,false);
}}this._cleanUpMetaColumns(cD.length);
var cC=0;

for(var i=0;i<cx.length;i++){var cH=cx[i];
var cE=cH.getTablePaneModel();
cE.setFirstColumnX(cC);
cE.setMaxColumnCount(cD[i]);
cC+=cD[i];
}if(cD.length>cx.length){var cA=this.getTableColumnModel();

for(var i=cx.length;i<cD.length;i++){var cE=this.getNewTablePaneModel()(cA);
cE.setFirstColumnX(cC);
cE.setMaxColumnCount(cD[i]);
cC+=cD[i];
var cH=this.getNewTablePaneScroller()(this);
cH.setTablePaneModel(cE);
cH.addListener(bc,this._onScrollY,this);
for(cG in qx.ui.table.Table.__nQ){if(!cB[cG]){break;
}
if(cB[cG].capture&&cB[cG].capture.length>0){var cy=cB[cG].capture;

for(var j=0;j<cy.length;j++){var cz=cy[j].context;

if(!cz){cz=this;
}else if(cz==cx[0]){cz=cH;
}cH.addListener(cG,cy[j].handler,cz,true);
}}
if(cB[cG].bubble&&cB[cG].bubble.length>0){var cJ=cB[cG].bubble;

for(var j=0;j<cJ.length;j++){var cz=cJ[j].context;

if(!cz){cz=this;
}else if(cz==cx[0]){cz=cH;
}cH.addListener(cG,cJ[j].handler,cz,false);
}}}var cI=(i==cD.length-1)?1:0;
this.__nM.add(cH,{flex:cI});
cx=this._getPaneScrollerArr();
}}for(var i=0;i<cx.length;i++){var cH=cx[i];
var cK=(i==(cx.length-1));
cH.getHeader().setHeight(this.getHeaderCellHeight());
cH.setTopRightWidget(cK?this.getChildControl(p):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(p);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(cL,cM){var cN=this._getPaneScrollerArr();

for(var i=0;i<cN.length;i++){cN[i].setFocusCellOnMouseMove(cL);
}},_applyShowCellFocusIndicator:function(cO,cP){var cQ=this._getPaneScrollerArr();

for(var i=0;i<cQ.length;i++){cQ[i].setShowCellFocusIndicator(cO);
}},_applyContextMenuFromDataCellsOnly:function(cR,cS){var cT=this._getPaneScrollerArr();

for(var i=0;i<cT.length;i++){cT[i].setContextMenuFromDataCellsOnly(cR);
}},_applyKeepFirstVisibleRowComplete:function(cU,cV){var cW=this._getPaneScrollerArr();

for(var i=0;i<cW.length;i++){cW[i].onKeepFirstVisibleRowCompleteChanged();
}},_applyResetSelectionOnHeaderClick:function(cX,cY){var da=this._getPaneScrollerArr();

for(var i=0;i<da.length;i++){da[i].setResetSelectionOnHeaderClick(cX);
}},getSelectionManager:function(){return this.__nN;
},_getPaneScrollerArr:function(){return this.__nM.getChildren();
},getPaneScroller:function(db){return this._getPaneScrollerArr()[db];
},_cleanUpMetaColumns:function(dc){var dd=this._getPaneScrollerArr();

if(dd!=null){for(var i=dd.length-1;i>=dc;i--){dd[i].destroy();
}}},_onChangeLocale:function(de){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(df){var dg=this._getPaneScrollerArr();

for(var i=0;i<dg.length;i++){dg[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(dh){var di=this._getPaneScrollerArr();

for(var i=0;i<di.length;i++){di[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(dj){var dk=dj.getData();
this._updateTableData(dk.firstRow,dk.lastRow,dk.firstColumn,dk.lastColumn,dk.removeStart,dk.removeCount);
},_updateTableData:function(dl,dm,dn,dp,dq,dr){var ds=this._getPaneScrollerArr();
if(dr){this.getSelectionModel().removeSelectionInterval(dq,dq+dr);
if(this.__nP>=dq&&this.__nP<(dq+dr)){this.setFocusedCell();
}}
for(var i=0;i<ds.length;i++){ds[i].onTableModelDataChanged(dl,dm,dn,dp);
}var dt=this.getTableModel().getRowCount();

if(dt!=this.__nS){this.__nS=dt;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(du){if(!this.__mO){this.__mO=true;
var dv=this._getPaneScrollerArr();

for(var i=0;i<dv.length;i++){dv[i].setScrollY(du.getData());
}this.__mO=false;
}},_onKeyPress:function(dw){if(!this.getEnabled()){return;
}var dD=this.__nP;
var dA=true;
var dE=dw.getKeyIdentifier();

if(this.isEditing()){if(dw.getModifiers()==0){switch(dE){case bC:this.stopEditing();
var dD=this.__nP;
this.moveFocusedCell(0,1);

if(this.__nP!=dD){dA=this.startEditing();
}break;
case H:this.cancelEditing();
this.focus();
break;
default:dA=false;
break;
}}}else{if(dw.isCtrlPressed()){dA=true;

switch(dE){case ba:var dB=this.getTableModel().getRowCount();

if(dB>0){this.getSelectionModel().setSelectionInterval(0,dB-1);
}break;
default:dA=false;
break;
}}else{switch(dE){case P:this.__nN.handleSelectKeyDown(this.__nP,dw);
break;
case d:case bC:this.startEditing();
dA=true;
break;
case W:this.setFocusedCell(this.__nO,0,true);
break;
case a:var dB=this.getTableModel().getRowCount();
this.setFocusedCell(this.__nO,dB-1,true);
break;
case bi:this.moveFocusedCell(-1,0);
break;
case U:this.moveFocusedCell(1,0);
break;
case L:this.moveFocusedCell(0,-1);
break;
case bu:this.moveFocusedCell(0,1);
break;
case g:case Y:var dz=this.getPaneScroller(0);
var dC=dz.getTablePane();
var dy=this.getRowHeight();
var dx=(dE==g)?-1:1;
dB=dC.getVisibleRowCount()-1;
dz.setScrollY(dz.getScrollY()+dx*dB*dy);
this.moveFocusedCell(0,dx*dB);
break;
default:dA=false;
}}}
if(dD!=this.__nP&&this.getRowFocusChangeModifiesSelection()){this.__nN.handleMoveKeyDown(this.__nP,dw);
}
if(dA){dw.preventDefault();
dw.stopPropagation();
}},_onFocusChanged:function(dF){var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){dG[i].onFocusChanged();
}},_onColVisibilityChanged:function(dH){var dI=this._getPaneScrollerArr();

for(var i=0;i<dI.length;i++){dI[i].onColVisibilityChanged();
}var dJ=dH.getData();

if(this.__nT!=null&&dJ.col!=null&&dJ.visible!=null){this.__nT[dJ.col].setVisible(dJ.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dK){var dL=this._getPaneScrollerArr();

for(var i=0;i<dL.length;i++){var dM=dK.getData();
dL[i].setColumnWidth(dM.col,dM.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(dN){var dO=this._getPaneScrollerArr();

for(var i=0;i<dO.length;i++){dO[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(dP){var dQ=this._getMetaColumnAtPageX(dP);
return (dQ!=-1)?this.getPaneScroller(dQ):null;
},setFocusedCell:function(dR,dS,dT){if(!this.isEditing()&&(dR!=this.__nO||dS!=this.__nP)){if(dR===null){dR=0;
}this.__nO=dR;
this.__nP=dS;
var dU=this._getPaneScrollerArr();

for(var i=0;i<dU.length;i++){dU[i].setFocusedCell(dR,dS);
}
if(dR!==null&&dT){this.scrollCellVisible(dR,dS);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__nO;
},getFocusedRow:function(){return this.__nP;
},highlightFocusedRow:function(dV){this.getDataRowRenderer().setHighlightFocusRow(dV);
},clearFocusedRowHighlight:function(dW){if(dW){var dY=dW.getRelatedTarget();

if(dY instanceof qx.ui.table.pane.Pane||dY instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dX=this._getPaneScrollerArr();

for(var i=0;i<dX.length;i++){dX[i].onFocusChanged();
}},moveFocusedCell:function(ea,eb){var ef=this.__nO;
var eg=this.__nP;
if(ef==null||eg==null){return;
}
if(ea!=0){var ee=this.getTableColumnModel();
var x=ee.getVisibleX(ef);
var ed=ee.getVisibleColumnCount();
x=qx.lang.Number.limit(x+ea,0,ed-1);
ef=ee.getVisibleColumnAtX(x);
}
if(eb!=0){var ec=this.getTableModel();
eg=qx.lang.Number.limit(eg+eb,0,ec.getRowCount()-1);
}this.setFocusedCell(ef,eg,true);
},scrollCellVisible:function(eh,ei){var ej=this.getContentElement().getDomElement();
if(!ej){this.addListenerOnce(bF,function(){this.scrollCellVisible(eh,ei);
},this);
}var ek=this.getTableColumnModel();
var x=ek.getVisibleX(eh);
var el=this._getMetaColumnAtColumnX(x);

if(el!=-1){this.getPaneScroller(el).scrollCellVisible(eh,ei);
}},isEditing:function(){if(this.__nO!=null){var x=this.getTableColumnModel().getVisibleX(this.__nO);
var em=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(em).isEditing();
}return false;
},startEditing:function(){if(this.__nO!=null){var x=this.getTableColumnModel().getVisibleX(this.__nO);
var eo=this._getMetaColumnAtColumnX(x);
var en=this.getPaneScroller(eo).startEditing();
return en;
}return false;
},stopEditing:function(){if(this.__nO!=null){var x=this.getTableColumnModel().getVisibleX(this.__nO);
var ep=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ep).stopEditing();
}},cancelEditing:function(){if(this.__nO!=null){var x=this.getTableColumnModel().getVisibleX(this.__nO);
var eq=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eq).cancelEditing();
}},updateContent:function(){var er=this._getPaneScrollerArr();

for(var i=0;i<er.length;i++){er[i].getTablePane().updateContent(true);
}},blockHeaderElements:function(){var es=this._getPaneScrollerArr();

for(var i=0;i<es.length;i++){es[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(p).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var et=this._getPaneScrollerArr();

for(var i=0;i<et.length;i++){et[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(p).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(eu){var ev=this._getPaneScrollerArr();

for(var i=0;i<ev.length;i++){var ew=ev[i].getContainerLocation();

if(eu>=ew.left&&eu<=ew.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(ex){var ez=this.getMetaColumnCounts();
var eA=0;

for(var i=0;i<ez.length;i++){var ey=ez[i];
eA+=ey;

if(ey==-1||ex<eA){return i;
}}return -1;
},_updateStatusBar:function(){var eB=this.getTableModel();

if(this.getStatusBarVisible()){var eC=this.getSelectionModel().getSelectedCount();
var eE=eB.getRowCount();
var eD;

if(eE>=0){if(eC==0){eD=this.trn(J,E,eE,eE);
}else{eD=this.trn(D,bs,eE,eC,eE);
}}
if(this.__nR){if(eD){eD+=this.__nR;
}else{eD=this.__nR;
}}
if(eD){this.getChildControl(m).setValue(eD);
}}},_updateScrollerWidths:function(){var eF=this._getPaneScrollerArr();

for(var i=0;i<eF.length;i++){var eH=(i==(eF.length-1));
var eI=eF[i].getTablePaneModel().getTotalWidth();
eF[i].setPaneWidth(eI);
var eG=eH?1:0;
eF[i].setLayoutProperties({flex:eG});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var eM=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eO=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var eJ=this._getPaneScrollerArr();
var eL=false;
var eN=false;

for(var i=0;i<eJ.length;i++){var eP=(i==(eJ.length-1));
var eK=eJ[i].getNeededScrollBars(eL,!eP);

if(eK&eM){eL=true;
}
if(eP&&(eK&eO)){eN=true;
}}for(var i=0;i<eJ.length;i++){var eP=(i==(eJ.length-1));
eJ[i].setHorizontalScrollBarVisible(eL);
if(eP){if(this.__nW==null){this.__nW=eJ[i].getVerticalScrollBarVisible();
this.__it=qx.event.Timer.once(function(){this.__nW=null;
this.__it=null;
},this,0);
}}eJ[i].setVerticalScrollBarVisible(eP&&eN);
if(eP&&eN!=this.__nW){this.fireDataEvent(bl,eN);
}}},_initColumnMenu:function(){var eS=this.getTableModel();
var eT=this.getTableColumnModel();
var eU=this.getChildControl(p);
eU.empty();
var eR=eU.getMenu();
var eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(bz,eV);
this.__nT={};

for(var eW=0,l=eS.getColumnCount();eW<l;eW++){var eQ=eU.factory(R,{text:eS.getColumnName(eW),column:eW,bVisible:eT.isColumnVisible(eW)});
qx.core.Assert.assertInterface(eQ,qx.ui.table.IColumnMenuItem);
eQ.addListener(w,this._createColumnVisibilityCheckBoxHandler(eW),this);
this.__nT[eW]=eQ;
}eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(z,eV);
},_createColumnVisibilityCheckBoxHandler:function(eX){return function(eY){var fa=this.getTableColumnModel();
fa.setColumnVisible(eX,eY.getData());
};
},setColumnWidth:function(fb,fc){this.getTableColumnModel().setColumnWidth(fb,fc);
},_onResize:function(){this.fireEvent(Q);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(fd,fe,self,ff){if(this.self(arguments).__nQ[fd]){var fh=[fd];

for(var i=0,fg=this._getPaneScrollerArr();i<fg.length;i++){fh.push(fg[i].addListener.apply(fg[i],arguments));
}return fh.join(bD);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,fd,fe,self,ff);
}},removeListener:function(fi,fj,self,fk){if(this.self(arguments).__nQ[fi]){for(var i=0,fl=this._getPaneScrollerArr();i<fl.length;i++){fl[i].removeListener.apply(fl[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,fi,fj,self,fk);
}},removeListenerById:function(fm){var fq=fm.split(bD);
var fp=fq.shift();

if(this.self(arguments).__nQ[fp]){var fo=true;

for(var i=0,fn=this._getPaneScrollerArr();i<fn.length;i++){fo=fn[i].removeListenerById.call(fn[i],fq[i])&&fo;
}return fo;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,fm);
}},destroy:function(){this.getChildControl(p).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Environment.get(bE)){qx.locale.Manager.getInstance().removeListener(e,this._onChangeLocale,this);
}var fs=this.getSelectionModel();

if(fs){fs.dispose();
}var fr=this.getDataRowRenderer();

if(fr){fr.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(N,B,bH,bH,bn,v);
this._disposeMap(bd);
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var j="",i="table-row-background-even",h="Boolean",g="content",f="default",e="height:",d="'",c="table-row",b="table-row-background-focused",a="css.boxmodel",v=';color:',u="table-row-background-odd",t="1px solid ",s="table-row-line",r="table-row-background-selected",q="background-color:",p=';border-bottom: 1px solid ',o="table-row-selected",n="table-row-background-focused-selected",m="px;",k="qx.ui.table.rowrenderer.Default",l=";";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__nX=j;
this.__nX={};
this._colors={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(f));
var w=qx.theme.manager.Color.getInstance();
this._colors.bgcolFocusedSelected=w.resolve(n);
this._colors.bgcolFocused=w.resolve(b);
this._colors.bgcolSelected=w.resolve(r);
this._colors.bgcolEven=w.resolve(i);
this._colors.bgcolOdd=w.resolve(u);
this._colors.colSelected=w.resolve(o);
this._colors.colNormal=w.resolve(c);
this._colors.horLine=w.resolve(s);
},properties:{highlightFocusRow:{check:h,init:true}},members:{_colors:null,__nY:null,__nX:null,_insetY:1,_renderFont:function(x){if(x){this.__nY=x.getStyles();
this.__nX=qx.bom.element.Style.compile(this.__nY);
this.__nX=this.__nX.replace(/"/g,d);
}else{this.__nX=j;
this.__nY=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(y,z){var B=this.__nY;
var A=z.style;
qx.bom.element.Style.setStyles(z,B);

if(y.focusedRow&&this.getHighlightFocusRow()){A.backgroundColor=y.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused;
}else{if(y.selected){A.backgroundColor=this._colors.bgcolSelected;
}else{A.backgroundColor=(y.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd;
}}A.color=y.selected?this._colors.colSelected:this._colors.colNormal;
A.borderBottom=t+this._colors.horLine;
},getRowHeightStyle:function(C){if(qx.core.Environment.get(a)==g){C-=this._insetY;
}return e+C+m;
},createRowStyle:function(D){var E=[];
E.push(l);
E.push(this.__nX);
E.push(q);

if(D.focusedRow&&this.getHighlightFocusRow()){E.push(D.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused);
}else{if(D.selected){E.push(this._colors.bgcolSelected);
}else{E.push((D.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd);
}}E.push(v);
E.push(D.selected?this._colors.colSelected:this._colors.colNormal);
E.push(p,this._colors.horLine);
return E.join(j);
},getRowClass:function(F){return j;
},getRowAttributes:function(G){return j;
}},destruct:function(){this._colors=this.__nY=this.__nX=null;
}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var n="pressed",m="hovered",l="changeVisibility",k="qx.ui.menu.Menu",j="submenu",i="Enter",h="abandoned",g="contextmenu",f="changeMenu",d="qx.ui.form.MenuButton",a="visible",c="left",b="_applyMenu";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(o,p,q){qx.ui.form.Button.call(this,o,p);
if(q!=null){this.setMenu(q);
}},properties:{menu:{check:k,nullable:true,apply:b,event:f}},members:{_applyVisibility:function(r,s){qx.ui.form.Button.prototype._applyVisibility.call(this,r,s);
var t=this.getMenu();

if(r!=a&&t){t.hide();
}},_applyMenu:function(u,v){if(v){v.removeListener(l,this._onMenuChange,this);
v.resetOpener();
}
if(u){u.addListener(l,this._onMenuChange,this);
u.setOpener(this);
u.removeState(j);
u.removeState(g);
}},open:function(w){var x=this.getMenu();

if(x){qx.ui.menu.Manager.getInstance().hideAll();
x.setOpener(this);
x.open();
if(w){var y=x.getSelectables()[0];

if(y){x.setSelectedButton(y);
}}}},_onMenuChange:function(e){var z=this.getMenu();

if(z.isVisible()){this.addState(n);
}else{this.removeState(n);
}},_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);
if(e.getButton()!=c){return;
}var A=this.getMenu();

if(A){if(!A.isVisible()){this.open();
}else{A.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(m);
},_onMouseOut:function(e){this.removeState(m);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:this.removeState(h);
this.addState(n);
var B=this.getMenu();

if(B){if(!B.isVisible()){this.open();
}else{B.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}}});
})();
(function(){var v="keypress",u="qx.debug",t="interval",s="keydown",r="mousedown",q="keyup",p="__nt",o="blur",n="Enter",m="__oa",d="Up",l="__ob",h="Escape",c="event.touch",b="qx.ui.menu.Manager",g="Left",f="Down",j="Right",a="singleton",k="Space";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nt=[];
var w=document.body;
var x=qx.event.Registration;
x.addListener(window.document.documentElement,r,this._onMouseDown,this,true);
x.addListener(w,s,this._onKeyUpDown,this,true);
x.addListener(w,q,this._onKeyUpDown,this,true);
x.addListener(w,v,this._onKeyPress,this,true);
if(!qx.core.Environment.get(c)){qx.bom.Element.addListener(window,o,this.hideAll,this);
}this.__oa=new qx.event.Timer;
this.__oa.addListener(t,this._onOpenInterval,this);
this.__ob=new qx.event.Timer;
this.__ob.addListener(t,this._onCloseInterval,this);
},members:{__oc:null,__od:null,__oa:null,__ob:null,__nt:null,_getChild:function(y,z,A,B){var C=y.getChildren();
var length=C.length;
var D;

for(var i=z;i<length&&i>=0;i+=A){D=C[i];

if(D.isEnabled()&&!D.isAnonymous()&&D.isVisible()){return D;
}}
if(B){i=i==length?0:length-1;

for(;i!=z;i+=A){D=C[i];

if(D.isEnabled()&&!D.isAnonymous()&&D.isVisible()){return D;
}}}return null;
},_isInMenu:function(E){while(E){if(E instanceof qx.ui.menu.Menu){return true;
}E=E.getLayoutParent();
}return false;
},_getMenuButton:function(F){while(F){if(F instanceof qx.ui.menu.AbstractButton){return F;
}F=F.getLayoutParent();
}return null;
},add:function(G){if(qx.core.Environment.get(u)){if(!(G instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+G);
}}var H=this.__nt;
H.push(G);
G.setZIndex(1e6+H.length);
},remove:function(I){if(qx.core.Environment.get(u)){if(!(I instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+I);
}}var J=this.__nt;

if(J){qx.lang.Array.remove(J,I);
}},hideAll:function(){var K=this.__nt;

if(K){for(var i=K.length-1;i>=0;i--){K[i].exclude();
}}},getActiveMenu:function(){var L=this.__nt;
return L.length>0?L[L.length-1]:null;
},scheduleOpen:function(M){this.cancelClose(M);
if(M.isVisible()){if(this.__oc){this.cancelOpen(this.__oc);
}}else if(this.__oc!=M){this.__oc=M;
this.__oa.restartWith(M.getOpenInterval());
}},scheduleClose:function(N){this.cancelOpen(N);
if(!N.isVisible()){if(this.__od){this.cancelClose(this.__od);
}}else if(this.__od!=N){this.__od=N;
this.__ob.restartWith(N.getCloseInterval());
}},cancelOpen:function(O){if(this.__oc==O){this.__oa.stop();
this.__oc=null;
}},cancelClose:function(P){if(this.__od==P){this.__ob.stop();
this.__od=null;
}},_onOpenInterval:function(e){this.__oa.stop();
this.__oc.open();
this.__oc=null;
},_onCloseInterval:function(e){this.__ob.stop();
this.__od.exclude();
this.__od=null;
},_onMouseDown:function(e){var Q=e.getTarget();
Q=qx.ui.core.Widget.getWidgetByElement(Q,true);
if(Q==null){this.hideAll();
return;
}if(Q.getMenu&&Q.getMenu()&&Q.getMenu().isVisible()){return;
}if(this.__nt.length>0&&!this._isInMenu(Q)){this.hideAll();
}},__oe:{"Enter":1,"Space":1},__la:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var R=this.getActiveMenu();

if(!R){return;
}var S=e.getKeyIdentifier();

if(this.__la[S]||(this.__oe[S]&&R.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var T=this.getActiveMenu();

if(!T){return;
}var U=e.getKeyIdentifier();
var W=this.__la[U];
var V=this.__oe[U];

if(W){switch(U){case d:this._onKeyPressUp(T);
break;
case f:this._onKeyPressDown(T);
break;
case g:this._onKeyPressLeft(T);
break;
case j:this._onKeyPressRight(T);
break;
case h:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(V){var X=T.getSelectedButton();

if(X){switch(U){case n:this._onKeyPressEnter(T,X,e);
break;
case k:this._onKeyPressSpace(T,X,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(Y){var ba=Y.getSelectedButton();
var bb=Y.getChildren();
var bd=ba?Y.indexOf(ba)-1:bb.length-1;
var bc=this._getChild(Y,bd,-1,true);
if(bc){Y.setSelectedButton(bc);
}else{Y.resetSelectedButton();
}},_onKeyPressDown:function(be){var bf=be.getSelectedButton();
var bh=bf?be.indexOf(bf)+1:0;
var bg=this._getChild(be,bh,1,true);
if(bg){be.setSelectedButton(bg);
}else{be.resetSelectedButton();
}},_onKeyPressLeft:function(bi){var bn=bi.getOpener();

if(!bn){return;
}if(bn instanceof qx.ui.menu.AbstractButton){var bk=bn.getLayoutParent();
bk.resetOpenedButton();
bk.setSelectedButton(bn);
}else if(bn instanceof qx.ui.menubar.Button){var bm=bn.getMenuBar().getMenuButtons();
var bj=bm.indexOf(bn);
if(bj===-1){return;
}var bo=null;
var length=bm.length;

for(var i=1;i<=length;i++){var bl=bm[(bj-i+length)%length];

if(bl.isEnabled()&&bl.isVisible()){bo=bl;
break;
}}
if(bo&&bo!=bn){bo.open(true);
}}},_onKeyPressRight:function(bp){var br=bp.getSelectedButton();
if(br){var bq=br.getMenu();

if(bq){bp.setOpenedButton(br);
var bx=this._getChild(bq,0,1);

if(bx){bq.setSelectedButton(bx);
}return;
}}else if(!bp.getOpenedButton()){var bx=this._getChild(bp,0,1);

if(bx){bp.setSelectedButton(bx);

if(bx.getMenu()){bp.setOpenedButton(bx);
}return;
}}var bv=bp.getOpener();
if(bv instanceof qx.ui.menu.Button&&br){while(bv){bv=bv.getLayoutParent();

if(bv instanceof qx.ui.menu.Menu){bv=bv.getOpener();

if(bv instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bv){return;
}}if(bv instanceof qx.ui.menubar.Button){var bu=bv.getMenuBar().getMenuButtons();
var bs=bu.indexOf(bv);
if(bs===-1){return;
}var bw=null;
var length=bu.length;

for(var i=1;i<=length;i++){var bt=bu[(bs+i)%length];

if(bt.isEnabled()&&bt.isVisible()){bw=bt;
break;
}}
if(bw&&bw!=bv){bw.open(true);
}}},_onKeyPressEnter:function(by,bz,e){if(bz.hasListener(v)){var bA=e.clone();
bA.setBubbles(false);
bA.setTarget(bz);
bz.dispatchEvent(bA);
}this.hideAll();
},_onKeyPressSpace:function(bB,bC,e){if(bC.hasListener(v)){var bD=e.clone();
bD.setBubbles(false);
bD.setTarget(bC);
bC.dispatchEvent(bD);
}}},destruct:function(){var bF=qx.event.Registration;
var bE=document.body;
bF.removeListener(window.document.documentElement,r,this._onMouseDown,this,true);
bF.removeListener(bE,s,this._onKeyUpDown,this,true);
bF.removeListener(bE,q,this._onKeyUpDown,this,true);
bF.removeListener(bE,v,this._onKeyPress,this,true);
this._disposeObjects(m,l);
this._disposeArray(p);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__of:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__of(c);
},hasChildren:function(){return this.__of(f);
},add:function(r,s){return this.__of(j,r,s);
},remove:function(t){return this.__of(a,t);
},removeAll:function(){return this.__of(d);
},indexOf:function(u){return this.__of(l,u);
},addAt:function(v,w,x){this.__of(g,v,w,x);
},addBefore:function(y,z,A){this.__of(i,y,z,A);
},addAfter:function(B,C,D){this.__of(k,B,C,D);
},removeAt:function(E){return this.__of(e,E);
}}});
})();
(function(){var l="slidebar",k="Integer",j="resize",h="qx.ui.core.Widget",g="selected",f="visible",d="Boolean",c="mouseout",b="excluded",a="menu",A="_applySelectedButton",z="_applyOpenInterval",y="_applySpacingY",x="_blocker",w="_applyCloseInterval",v="_applyBlockerColor",u="_applyIconColumnWidth",t="mouseover",s="qx.ui.menu.Menu",r="Color",p="Number",q="_applyOpenedButton",n="_applySpacingX",o="_applyBlockerOpacity",m="_applyArrowColumnWidth";
qx.Class.define(s,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var B=this.getApplicationRoot();
B.add(this);
this.addListener(t,this._onMouseOver);
this.addListener(c,this._onMouseOut);
this.addListener(j,this._onResize,this);
B.addListener(j,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(B);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:a},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:b},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:k,apply:n,init:0,themeable:true},spacingY:{check:k,apply:y,init:0,themeable:true},iconColumnWidth:{check:k,init:0,themeable:true,apply:u},arrowColumnWidth:{check:k,init:0,themeable:true,apply:m},blockerColor:{check:r,init:null,nullable:true,apply:v,themeable:true},blockerOpacity:{check:p,init:1,apply:o,themeable:true},selectedButton:{check:h,nullable:true,apply:A},openedButton:{check:h,nullable:true,apply:q},opener:{check:h,nullable:true},openInterval:{check:k,themeable:true,init:250,apply:z},closeInterval:{check:k,themeable:true,init:250,apply:w},blockBackground:{check:d,themeable:true,init:false}},members:{__og:null,__oh:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__oj();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__oj();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(C){this.placeToPoint(C);
this.__oj();
this.show();
this._placementTarget=C;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var D=[];
var E=this.getChildren();

for(var i=0;i<E.length;i++){if(E[i].isEnabled()){D.push(E[i]);
}}return D;
},_applyIconColumnWidth:function(F,G){this._getMenuLayout().setIconColumnWidth(F);
},_applyArrowColumnWidth:function(H,I){this._getMenuLayout().setArrowColumnWidth(H);
},_applySpacingX:function(J,K){this._getMenuLayout().setColumnSpacing(J);
},_applySpacingY:function(L,M){this._getMenuLayout().setSpacing(L);
},_applyVisibility:function(N,O){qx.ui.core.Widget.prototype._applyVisibility.call(this,N,O);
var P=qx.ui.menu.Manager.getInstance();

if(N===f){P.add(this);
var Q=this.getParentMenu();

if(Q){Q.setOpenedButton(this.getOpener());
}}else if(O===f){P.remove(this);
var Q=this.getParentMenu();

if(Q&&Q.getOpenedButton()==this.getOpener()){Q.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__oi();
},__oi:function(){if(this.isVisible()){if(this.getBlockBackground()){var R=this.getZIndex();
this._blocker.blockContent(R-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var S=this.getOpener();

if(!S||!(S instanceof qx.ui.menu.AbstractButton)){return null;
}
if(S&&S.getContextMenu()===this){return null;
}
while(S&&!(S instanceof qx.ui.menu.Menu)){S=S.getLayoutParent();
}return S;
},_applySelectedButton:function(T,U){if(U){U.removeState(g);
}
if(T){T.addState(g);
}},_applyOpenedButton:function(V,W){if(W&&W.getMenu()){W.getMenu().exclude();
}
if(V){V.getMenu().open();
}},_applyBlockerColor:function(X,Y){this._blocker.setColor(X);
},_applyBlockerOpacity:function(ba,bb){this._blocker.setOpacity(ba);
},getChildrenContainer:function(){return this.getChildControl(l,true)||this;
},_createChildControlImpl:function(bc,bd){var be;

switch(bc){case l:var be=new qx.ui.menu.MenuSlideBar();
var bg=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bf=be.getLayout();
be.setLayout(bg);
bf.dispose();
var bh=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bh.length;i++){be.add(bh[i]);
}this.removeListener(j,this._onResize,this);
be.getChildrenContainer().addListener(j,this._onResize,this);
this._add(be);
break;
}return be||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bc);
},_getMenuLayout:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__oj:function(){var bj=this._getMenuBounds();

if(!bj){this.addListenerOnce(j,this.__oj,this);
return;
}var bi=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var bk=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(bj.height+top);
this.moveTo(bk,0);
});
}else if(top+bj.height>bi){this._assertSlideBar(function(){this.setHeight(bi-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bl){if(this.hasChildControl(l)){return bl.call(this);
}this.__oh=bl;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(l);

if(this.__oh){this.__oh.call(this);
delete this.__oh;
}},_onResize:function(){if(this.isVisible()){var bm=this._placementTarget;

if(!bm){return;
}else if(bm instanceof qx.ui.core.Widget){this.placeToWidget(bm);
}else if(bm.top!==undefined){this.placeToPoint(bm);
}else{throw new Error("Unknown target: "+bm);
}this.__oj();
}},_onMouseOver:function(e){var bo=qx.ui.menu.Manager.getInstance();
bo.cancelClose(this);
var bp=e.getTarget();

if(bp.isEnabled()&&bp instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bp);
var bn=bp.getMenu&&bp.getMenu();

if(bn){bn.setOpener(bp);
bo.scheduleOpen(bn);
this.__og=bn;
}else{var bq=this.getOpenedButton();

if(bq){bo.scheduleClose(bq.getMenu());
}
if(this.__og){bo.cancelOpen(this.__og);
this.__og=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var br=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bs=this.getOpenedButton();
bs?this.setSelectedButton(bs):this.resetSelectedButton();
if(bs){br.cancelClose(bs.getMenu());
}if(this.__og){br.cancelOpen(this.__og);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(j,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(x);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__ok:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__ok=[0,0,0,0];
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
},getColumnSizes:function(){return this.__ok||null;
}},destruct:function(){this.__ok=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="String",l="changeCommand",k="qx.ui.menu.Menu",d="",j="qx.ui.menu.AbstractButton",h="keypress",c="_applyIcon",b="_onMouseUp",g="click",f="abstract",i="_applyLabel",a="_applyMenu";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:f,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(g,this._onClick);
this.addListener(h,this._onKeyPress);
qx.log.Logger.deprecateMethodOverriding(this,qx.ui.menu.AbstractButton,b);
this.addListener(l,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:m,apply:i,nullable:true},menu:{check:k,apply:a,nullable:true,dereference:true},icon:{check:m,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(u,v){var w;

switch(u){case t:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:0});
break;
case s:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:1});
break;
case q:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:2});
break;
case r:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:3});
break;
}return w||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,u);
},_forwardStates:{selected:1},getChildrenSizes:function(){var x=0,y=0,z=0,D=0;

if(this._isChildControlVisible(t)){var E=this.getChildControl(t);
x=E.getMarginLeft()+E.getSizeHint().width+E.getMarginRight();
}
if(this._isChildControlVisible(s)){var B=this.getChildControl(s);
y=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}
if(this._isChildControlVisible(q)){var A=this.getChildControl(q);
z=A.getMarginLeft()+A.getSizeHint().width+A.getMarginRight();
}
if(this._isChildControlVisible(r)){var C=this.getChildControl(r);
D=C.getMarginLeft()+C.getSizeHint().width+C.getMarginRight();
}return [x,y,z,D];
},_onMouseUp:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
},_onClick:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var H=e.getData();
if(H==null){return;
}
if(qx.core.Environment.get(o)){var F=e.getOldData();

if(!F){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!H){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var G=H!=null?H.toString():d;
this.getChildControl(q).setValue(G);
},_onChangeLocale:qx.core.Environment.select(o,{"true":function(e){var I=this.getCommand();

if(I!=null){this.getChildControl(q).setValue(I.toString());
}},"false":null}),_applyIcon:function(J,K){if(J){this._showChildControl(t).setSource(J);
}else{this._excludeChildControl(t);
}},_applyLabel:function(L,M){if(L){this._showChildControl(s).setValue(L);
}else{this._excludeChildControl(s);
}},_applyMenu:function(N,O){if(O){O.resetOpener();
O.removeState(n);
}
if(N){this._showChildControl(r);
N.setOpener(this);
N.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){this.removeListener(l,this._onChangeCommand,this);

if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Environment.get(o)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var g="qx.ui.menu.ButtonLayout",f="qx.debug",e="column",d="left",c="middle",b="' is not supported by the MenuButton layout!",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Environment.select(f,{"true":function(h,name,j){this.assert(name==e,a+name+b);
},"false":null}),renderLayout:function(k,m){var w=this._getLayoutChildren();
var v;
var o;
var p=[];

for(var i=0,l=w.length;i<l;i++){v=w[i];
o=v.getLayoutProperties().column;
p[o]=v;
}var u=this.__ol(w[0]);
var x=u.getColumnSizes();
var r=u.getSpacingX();
var q=qx.lang.Array.sum(x)+r*(x.length-1);

if(q<k){x[1]+=k-q;
}var y=0,top=0;
var s=qx.ui.layout.Util;

for(var i=0,l=x.length;i<l;i++){v=p[i];

if(v){var n=v.getSizeHint();
var top=s.computeVerticalAlignOffset(v.getAlignY()||c,n.height,m,0,0);
var t=s.computeHorizontalAlignOffset(v.getAlignX()||d,n.width,x[i],v.getMarginLeft(),v.getMarginRight());
v.renderLayout(y+t,top,n.width,n.height);
}
if(x[i]>0){y+=x[i]+r;
}}},__ol:function(z){while(!(z instanceof qx.ui.menu.Menu)){z=z.getLayoutParent();
}return z;
},_computeSizeHint:function(){var C=this._getLayoutChildren();
var B=0;
var D=0;

for(var i=0,l=C.length;i<l;i++){var A=C[i].getSizeHint();
D+=A.width;
B=Math.max(B,A.height);
}return {width:D,height:B};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var v="horizontal",u="scrollpane",t="button-backward",s="button-forward",r="vertical",q="content",p="execute",o="qx.ui.container.SlideBar",n="engine.version",m="engine.name",f="removeChildWidget",l="scrollX",i="scrollY",c="_applyOrientation",b="mousewheel",h="gecko",g="x",j="y",a="Integer",k="slidebar",d="update";
qx.Class.define(o,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(w){qx.ui.core.Widget.call(this);
var x=this.getChildControl(u);
this._add(x,{flex:1});

if(w!=null){this.setOrientation(w);
}else{this.initOrientation();
}this.addListener(b,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:k},orientation:{check:[v,r],init:v,apply:c},scrollStep:{check:a,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(q);
},_createChildControlImpl:function(y,z){var A;

switch(y){case s:A=new qx.ui.form.RepeatButton;
A.addListener(p,this._onExecuteForward,this);
A.setFocusable(false);
this._addAt(A,2);
break;
case t:A=new qx.ui.form.RepeatButton;
A.addListener(p,this._onExecuteBackward,this);
A.setFocusable(false);
this._addAt(A,0);
break;
case q:A=new qx.ui.container.Composite();
if(qx.core.Environment.get(m)==h&&parseInt(qx.core.Environment.get(n))<2){A.addListener(f,this._onRemoveChild,this);
}this.getChildControl(u).add(A);
break;
case u:A=new qx.ui.core.scroll.ScrollPane();
A.addListener(d,this._onResize,this);
A.addListener(l,this._onScroll,this);
A.addListener(i,this._onScroll,this);
break;
}return A||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,y);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(B){var C=this.getChildControl(u);

if(this.getOrientation()===v){C.scrollByX(B);
}else{C.scrollByY(B);
}},scrollTo:function(D){var E=this.getChildControl(u);

if(this.getOrientation()===v){E.scrollToX(D);
}else{E.scrollToY(D);
}},_applyEnabled:function(F,G,name){qx.ui.core.Widget.prototype._applyEnabled.call(this,F,G,name);
this._updateArrowsEnabled();
},_applyOrientation:function(H,I){var L=[this.getLayout(),this._getLayout()];
var K=this.getChildControl(s);
var J=this.getChildControl(t);
if(I==r){K.removeState(r);
J.removeState(r);
K.addState(v);
J.addState(v);
}else if(I==v){K.removeState(v);
J.removeState(v);
K.addState(r);
J.addState(r);
}
if(H==v){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(L[0]){L[0].dispose();
}
if(L[1]){L[1].dispose();
}},_onMouseWheel:function(e){var Q=0;
var P=this.getChildControl(u);

if(this.getOrientation()===v){Q=e.getWheelDelta(g);
var M=P.getScrollX();
var N=P.getScrollMaxX();
var O=parseInt(Q);
if(!(O<0&&M<=0||O>0&&M>=N||Q==0)){e.stop();
}}else{Q=e.getWheelDelta(j);
var M=P.getScrollY();
var N=P.getScrollMaxY();
var O=parseInt(Q);
if(!(O<0&&M<=0||O>0&&M>=N||Q==0)){e.stop();
}}this.scrollBy(Q*this.getScrollStep());
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(u).getChildren()[0];

if(!content){return;
}var R=this.getInnerSize();
var T=content.getBounds();
var S=(this.getOrientation()===v)?T.width>R.width:T.height>R.height;

if(S){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){var U=this.getChildControl(u);

if(!U.isDisposed()){this.scrollBy(U.getScrollX());
}},this,50);
},_updateArrowsEnabled:function(){if(!this.getEnabled()){this.getChildControl(t).setEnabled(false);
this.getChildControl(s).setEnabled(false);
return;
}var W=this.getChildControl(u);

if(this.getOrientation()===v){var V=W.getScrollX();
var X=W.getScrollMaxX();
}else{var V=W.getScrollY();
var X=W.getScrollMaxY();
}this.getChildControl(t).setEnabled(V>0);
this.getChildControl(s).setEnabled(V<X);
},_showArrows:function(){this._showChildControl(s);
this._showChildControl(t);
},_hideArrows:function(){this._excludeChildControl(s);
this._excludeChildControl(t);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g,h){var i;

switch(g){case c:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteForward,this);
this._addAt(i,2);
break;
case e:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteBackward,this);
this._addAt(i,0);
break;
}return i||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="__it",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__it=new qx.event.AcceleratingTimer();
this.__it.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__it:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__it.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__it.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__it.stop();
}}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(i,j,k){qx.ui.form.MenuButton.call(this,i,j,k);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(l){qx.ui.form.MenuButton.prototype.open.call(this,l);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var m=this.getMenu();
var menubar=this.getMenuBar();

if(m.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(m);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==m){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var n=this.getMenu();

if(n&&n.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var w="visible",v="excluded",u="resize",t="qx.event.type.Data",s="both",r="qx.ui.menu.Menu",q="_applySpacing",p="showItem",o="Boolean",n="icon",d="label",m="qx.ui.core.Widget",h="_applyOverflowIndicator",c="_applyOverflowHandling",b="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",j="hideItem",a="toolbar",k="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__oq=[];
this.__or=[];
},properties:{appearance:{refine:true,init:a},openMenu:{check:r,event:k,nullable:true},show:{init:s,check:[s,d,n],inheritable:true,event:b},spacing:{nullable:true,check:g,themeable:true,apply:q},overflowIndicator:{check:m,nullable:true,apply:h},overflowHandling:{init:false,check:o,apply:c}},events:{"hideItem":t,"showItem":t},members:{__oq:null,__or:null,_computeSizeHint:function(){var z=qx.ui.core.Widget.prototype._computeSizeHint.call(this);

if(true&&this.getOverflowHandling()){var x=0;
var y=this.getOverflowIndicator();

if(y){x=y.getSizeHint().width+this.getSpacing();
}z.minWidth=x;
}return z;
},_onResize:function(e){this._recalculateOverflow(e.getData().width);
},_recalculateOverflow:function(A,B){if(!this.getOverflowHandling()){return;
}B=B||this.getSizeHint().width;
var C=this.getOverflowIndicator();
var I=0;

if(C){I=C.getSizeHint().width;
}
if(A==undefined&&this.getBounds()!=null){A=this.getBounds().width;
}if(A==undefined){return ;
}if(A<B){do{var J=this._getNextToHide();
if(!J){return;
}var L=J.getMarginLeft()+J.getMarginRight();
L=Math.max(L,this.getSpacing());
var G=J.getSizeHint().width+L;
this.__ot(J);
B-=G;
if(C&&C.getVisibility()!=w){C.setVisibility(w);
B+=I;
var E=C.getMarginLeft()+C.getMarginRight();
B+=Math.max(E,this.getSpacing());
}}while(B>A);
}else if(this.__oq.length>0){do{var M=this.__oq[0];
if(M){var L=M.getMarginLeft()+M.getMarginRight();
L=Math.max(L,this.getSpacing());
if(M.getDecoratorElement()==null){M.syncAppearance();
M.invalidateLayoutCache();
}var F=M.getSizeHint().width;
var K=false;
if(this.__oq.length==1&&I>0){var D=L-this.getSpacing();
var H=B-I+F+D;
K=A>H;
}if(A>B+F+L||K){this.__os(M);
B+=F;
if(C&&this.__oq.length==0){C.setVisibility(v);
}}else{return;
}}}while(A>=B&&this.__oq.length>0);
}},__os:function(N){N.setVisibility(w);
this.__oq.shift();
this.fireDataEvent(p,N);
},__ot:function(O){if(!O){return;
}this.__oq.unshift(O);
O.setVisibility(v);
this.fireDataEvent(j,O);
},_getNextToHide:function(){for(var i=this.__or.length-1;i>=0;i--){var P=this.__or[i];
if(P&&P.getVisibility&&P.getVisibility()==w){return P;
}}var Q=this._getChildren();

for(var i=Q.length-1;i>=0;i--){var R=Q[i];
if(R==this.getOverflowIndicator()){continue;
}if(R.getVisibility&&R.getVisibility()==w){return R;
}}},setRemovePriority:function(S,T,U){if(!U&&this.__or[T]!=undefined){throw new Error("Priority already in use!");
}this.__or[T]=S;
},_applyOverflowHandling:function(V,W){this.invalidateLayoutCache();
var parent=this.getLayoutParent();

if(parent){parent.invalidateLayoutCache();
}var Y=this.getBounds();

if(Y&&Y.width){this._recalculateOverflow(Y.width);
}if(V){this.addListener(u,this._onResize,this);
}else{this.removeListener(u,this._onResize,this);
var X=this.getOverflowIndicator();

if(X){X.setVisibility(v);
}for(var i=0;i<this.__oq.length;i++){this.__oq[i].setVisibility(w);
}this.__oq=[];
}},_applyOverflowIndicator:function(ba,bb){if(bb){this._remove(bb);
}
if(ba){if(this._indexOf(ba)==-1){throw new Error("Widget must be child of the toolbar.");
}ba.setVisibility(v);
}},__ou:false,_setAllowMenuOpenHover:function(bc){this.__ou=bc;
},_isAllowMenuOpenHover:function(){return this.__ou;
},_applySpacing:function(bd,be){var bf=this._getLayout();
bd==null?bf.resetSpacing():bf.setSpacing(bd);
},_add:function(bg,bh){qx.ui.core.Widget.prototype._add.call(this,bg,bh);
var bi=this.getSizeHint().width+bg.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bi);
},_addAt:function(bj,bk,bl){qx.ui.core.Widget.prototype._addAt.call(this,bj,bk,bl);
var bm=this.getSizeHint().width+bj.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bm);
},_addBefore:function(bn,bo,bp){qx.ui.core.Widget.prototype._addBefore.call(this,bn,bo,bp);
var bq=this.getSizeHint().width+bn.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bq);
},_addAfter:function(br,bs,bt){qx.ui.core.Widget.prototype._addAfter.call(this,br,bs,bt);
var bu=this.getSizeHint().width+br.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bu);
},_remove:function(bv){qx.ui.core.Widget.prototype._remove.call(this,bv);
var bw=this.getSizeHint().width-bv.getSizeHint().width-2*this.getSpacing();
this._recalculateOverflow(null,bw);
},_removeAt:function(bx){var bz=this._getChildren()[bx];
qx.ui.core.Widget.prototype._removeAt.call(this,bx);
var by=this.getSizeHint().width-bz.getSizeHint().width-2*this.getSpacing();
this._recalculateOverflow(null,by);
},_removeAll:function(){qx.ui.core.Widget.prototype._removeAll.call(this);
this._recalculateOverflow(null,0);
},addSpacer:function(){var bA=new qx.ui.core.Spacer;
this._add(bA,{flex:1});
return bA;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var bC=this.getChildren();
var bB=[];
var bD;

for(var i=0,l=bC.length;i<l;i++){bD=bC[i];

if(bD instanceof qx.ui.menubar.Button){bB.push(bD);
}else if(bD instanceof qx.ui.toolbar.Part){bB.push.apply(bB,bD.getMenuButtons());
}}return bB;
}},destruct:function(){if(this.hasListener(u)){this.removeListener(u,this._onResize,this);
}}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(b,c){qx.ui.core.LayoutItem.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var p="middle",o="left",n="right",m="container",k="handle",j="both",h="Integer",g="qx.ui.toolbar.Part",f="icon",e="label",b="syncAppearance",d="changeShow",c="_applySpacing",a="toolbar/part";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,e,f],inheritable:true,event:d},spacing:{nullable:true,check:h,themeable:true,apply:c}},members:{_createChildControlImpl:function(q,r){var s;

switch(q){case k:s=new qx.ui.basic.Image();
s.setAlignY(p);
this._add(s);
break;
case m:s=new qx.ui.toolbar.PartContainer();
s.addListener(b,this.__ov,this);
this._add(s);
break;
}return s||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(t,u){var v=this.getChildControl(m).getLayout();
t==null?v.resetSpacing():v.setSpacing(t);
},__ov:function(){var w=this.getChildrenContainer().getChildren();

for(var i=0;i<w.length;i++){if(i==0&&i!=w.length-1){w[i].addState(o);
w[i].removeState(n);
w[i].removeState(p);
}else if(i==w.length-1&&i!=0){w[i].addState(n);
w[i].removeState(o);
w[i].removeState(p);
}else if(i==0&&i==w.length-1){w[i].removeState(o);
w[i].removeState(p);
w[i].removeState(n);
}else{w[i].addState(p);
w[i].removeState(n);
w[i].removeState(o);
}}},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var y=this.getChildren();
var x=[];
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];

if(z instanceof qx.ui.menubar.Button){x.push(z);
}}return x;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
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
}},properties:{appearance:{refine:true,init:a}},members:{_onClick:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__jv=new qx.ui.core.Blocker(this);
},members:{__nT:null,__jv:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
this.setMenu(j);
return j;
case f:var m=new qx.ui.table.columnmenu.MenuItem(h.text);
m.setVisible(h.bVisible);
this.getMenu().add(m);
return m;
case c:var k=new qx.ui.menu.Button(h.text);
k.set({appearance:e});
return k;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+g);
}},getBlocker:function(){return this.__jv;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__jv.dispose();
}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var m="checked",l="menu-checkbox",k="Boolean",j="label",i="_applyValue",h="value",g="changeValue",f="toolTipText",d="enabled",c="qx.ui.menu.CheckBox",a="menu",b="execute";
qx.Class.define(c,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(n,o){qx.ui.menu.AbstractButton.call(this);
if(n!=null){if(n.translate){this.setLabel(n.translate());
}else{this.setLabel(n);
}}
if(o!=null){this.setMenu(o);
}this.addListener(b,this._onExecute,this);
},properties:{appearance:{refine:true,init:l},value:{check:k,init:false,apply:i,event:g,nullable:true}},members:{_bindableProperties:[d,j,f,h,a],_applyValue:function(p,q){p?this.addState(m):this.removeState(m);
},_onExecute:function(e){this.toggleValue();
},_onClick:function(e){if(e.isLeftPressed()){this.execute();
}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__ow:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__ox:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__ox=true;
}else{this.__ox=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__ox){this._handleSelectEvent(f,g);
}},handleClick:function(h,i){},handleSelectKeyDown:function(j,k){this._handleSelectEvent(j,k);
},handleMoveKeyDown:function(l,m){var o=this.getSelectionModel();

switch(m.getModifiers()){case 0:o.setSelectionInterval(l,l);
break;
case qx.event.type.Dom.SHIFT_MASK:var n=o.getAnchorSelectionIndex();

if(n==-1){o.setSelectionInterval(l,l);
}else{o.setSelectionInterval(n,l);
}break;
}},_handleSelectEvent:function(p,q){var t=this.getSelectionModel();
var r=t.getLeadSelectionIndex();
var s=t.getAnchorSelectionIndex();

if(q.isShiftPressed()){if(p!=r||t.isSelectionEmpty()){if(s==-1){s=p;
}
if(q.isCtrlOrCommandPressed()){t.addSelectionInterval(s,p);
}else{t.setSelectionInterval(s,p);
}}}else if(q.isCtrlOrCommandPressed()){if(t.isSelectedIndex(p)){t.removeSelectionInterval(p,p);
}else{t.addSelectionInterval(p,p);
}}else{t.setSelectionInterval(p,p);
}}}});
})();
(function(){var n="]",m="..",l="changeSelection",k=" [",h='ie',g="browser.version",f="qx.event.type.Event",d="Ranges:",c="qx.ui.table.selection.Model",b="browser.name",a="_applySelectionMode";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oy=[];
this.__oz=-1;
this.__oA=-1;
this.hasBatchModeRefCount=0;
this.__oB=false;
},events:{"changeSelection":f},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:a}},members:{__oB:null,__oz:null,__oA:null,__oy:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(p){if(p){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__oB){this.__oB=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__oz;
},_setAnchorSelectionIndex:function(q){this.__oz=q;
},getLeadSelectionIndex:function(){return this.__oA;
},_setLeadSelectionIndex:function(r){this.__oA=r;
},_getSelectedRangeArr:function(){return this.__oy;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__oy.length==0;
},getSelectedCount:function(){var t=0;

for(var i=0;i<this.__oy.length;i++){var s=this.__oy[i];
t+=s.maxIndex-s.minIndex+1;
}return t;
},isSelectedIndex:function(u){for(var i=0;i<this.__oy.length;i++){var v=this.__oy[i];

if(u>=v.minIndex&&u<=v.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var w=[];

for(var i=0;i<this.__oy.length;i++){w.push({minIndex:this.__oy[i].minIndex,maxIndex:this.__oy[i].maxIndex});
}return w;
},iterateSelection:function(x,y){for(var i=0;i<this.__oy.length;i++){for(var j=this.__oy[i].minIndex;j<=this.__oy[i].maxIndex;j++){x.call(y,j);
}}},setSelectionInterval:function(z,A){var B=this.self(arguments);

switch(this.getSelectionMode()){case B.NO_SELECTION:return;
case B.SINGLE_SELECTION:if(this.isSelectedIndex(A)){return;
}z=A;
break;
case B.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=z;i<=A;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){if(qx.core.Environment.get(b)==h&&qx.core.Environment.get(g)<=7){this.setBatchMode(false);
}throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(z,A);
this._fireChangeSelection();
},addSelectionInterval:function(C,D){var E=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case E.NO_SELECTION:return;
case E.MULTIPLE_INTERVAL_SELECTION:case E.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(C,D);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(C,D);
break;
}},removeSelectionInterval:function(F,G){this.__oz=F;
this.__oA=G;
var H=Math.min(F,G);
var J=Math.max(F,G);
for(var i=0;i<this.__oy.length;i++){var L=this.__oy[i];

if(L.minIndex>J){break;
}else if(L.maxIndex>=H){var M=(L.minIndex>=H)&&(L.minIndex<=J);
var K=(L.maxIndex>=H)&&(L.maxIndex<=J);

if(M&&K){this.__oy.splice(i,1);
i--;
}else if(M){L.minIndex=J+1;
}else if(K){L.maxIndex=H-1;
}else{var I={minIndex:J+1,maxIndex:L.maxIndex};
this.__oy.splice(i+1,0,I);
L.maxIndex=H-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__oy=[];
this.__oz=-1;
this.__oA=-1;
},_addSelectionInterval:function(N,O){this.__oz=N;
this.__oA=O;
var P=Math.min(N,O);
var R=Math.max(N,O);
var Q=0;

for(;Q<this.__oy.length;Q++){var S=this.__oy[Q];

if(S.minIndex>P){break;
}}this.__oy.splice(Q,0,{minIndex:P,maxIndex:R});
var T=this.__oy[0];

for(var i=1;i<this.__oy.length;i++){var S=this.__oy[i];

if(T.maxIndex+1>=S.minIndex){T.maxIndex=Math.max(T.maxIndex,S.maxIndex);
this.__oy.splice(i,1);
i--;
}else{T=S;
}}},_dumpRanges:function(){var U=d;

for(var i=0;i<this.__oy.length;i++){var V=this.__oy[i];
U+=k+V.minIndex+m+V.maxIndex+n;
}this.debug(U);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__oB=true;
}else{this.fireEvent(l);
}}},destruct:function(){this.__oy=null;
}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f="content",e='</div>',d="nowrap",c="default",b="}",a="width:",I=".qooxdoo-table-cell-right { text-align:right } ",H="css.boxsizing",G="css.boxmodel",F="0px 6px",E='<div class="',D="0px",C="height:",B="1px solid ",A=".qooxdoo-table-cell-bold { font-weight:bold } ",z="String",q="} ",r='>',o='" ',p="ellipsis",m="content-box",n='left:',k="qx.ui.table.cellrenderer.Abstract",l='" style="',s="abstract",t="none",v="hidden",u="table-column-line",x='px;',w=".qooxdoo-table-cell-italic { font-style:italic} ",y="absolute";
qx.Class.define(k,{type:s,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var J=qx.ui.table.cellrenderer.Abstract;

if(!J.__mV){var L=qx.theme.manager.Color.getInstance();
J.__mV=this.self(arguments);
var K=h+qx.bom.element.Style.compile({position:y,top:D,overflow:v,whiteSpace:d,borderRight:B+L.resolve(u),padding:F,cursor:c,textOverflow:p,userSelect:t})+q+I+w+A;

if(qx.core.Environment.get(H)){K+=h+qx.bom.element.BoxSizing.compile(m)+b;
}J.__mV.stylesheet=qx.bom.Stylesheet.createElement(K);
}},properties:{defaultCellStyle:{init:null,check:z,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(M){return g;
},_getCellStyle:function(N){return N.style||j;
},_getCellAttributes:function(O){return j;
},_getContentHtml:function(P){return P.value||j;
},_getCellSizeStyle:function(Q,R,S,T){var U=j;

if(qx.core.Environment.get(G)==f){Q-=S;
R-=T;
}U+=a+Math.max(Q,0)+i;
U+=C+Math.max(R,0)+i;
return U;
},createDataCellHtml:function(V,W){W.push(E,this._getCellClass(V),l,n,V.styleLeft,x,this._getCellSizeStyle(V.styleWidth,V.styleHeight,this._insetX,this._insetY),this._getCellStyle(V),o,this._getCellAttributes(V),r+this._getContentHtml(V),e);
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4,_numberFormat:null},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(i){if(this.getUseAutoAlign()){if(typeof i.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}return 0;
},_getCellClass:function(j){var k=qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this,j);

if(!k){return h;
}var l=this._getStyleFlags(j);

if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){k+=c;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){k+=d;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){k+=b;
}return k;
},_getContentHtml:function(m){return qx.bom.String.escape(this._formatValue(m));
},_formatValue:function(n){var p=n.value;
var o;

if(p==null){return h;
}
if(typeof p==a){return p;
}else if(typeof p==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
}else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);
}else{o=p;
}return o;
}}});
})();
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(i){return qx.util.StringEscape.unescape(i,qx.bom.String.TO_CHARCODE);
},fromText:function(j){return qx.bom.String.escape(j).replace(/(  |\n)/g,function(k){var l={"  ":e,"\n":d};
return l[k]||k;
});
},toText:function(m){return qx.bom.String.unescape(m.replace(/\s+|<([^>])+>/gi,function(n){if(n.indexOf(f)===0){return b;
}else if(n.length>0&&n.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(o){o.FROM_CHARCODE=qx.lang.Object.invert(o.TO_CHARCODE);
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
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(u){qx.core.Object.call(this);
this.__hA=u;
},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__hA:null,format:function(v){switch(v){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var z=(v<0);

if(z){v=-v;
}
if(this.getMaximumFractionDigits()!=null){var G=Math.pow(10,this.getMaximumFractionDigits());
v=Math.round(v*G)/G;
}var F=String(Math.floor(v)).length;
var w=t+v;
var C=w.substring(0,F);

while(C.length<this.getMinimumIntegerDigits()){C=q+C;
}
if(this.getMaximumIntegerDigits()!=null&&C.length>this.getMaximumIntegerDigits()){C=C.substring(C.length-this.getMaximumIntegerDigits());
}var B=w.substring(F+1);

while(B.length<this.getMinimumFractionDigits()){B+=q;
}
if(this.getMaximumFractionDigits()!=null&&B.length>this.getMaximumFractionDigits()){B=B.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var y=C;
C=t;
var E;

for(E=y.length;E>3;E-=3){C=t+qx.locale.Number.getGroupSeparator(this.__hA)+y.substring(E-3,E)+C;
}C=y.substring(0,E)+C;
}var A=this.getPrefix()?this.getPrefix():t;
var x=this.getPostfix()?this.getPostfix():t;
var D=A+(z?r:t)+C;

if(B.length>0){D+=t+qx.locale.Number.getDecimalSeparator(this.__hA)+B;
}D+=x;
return D;
},parse:function(H){var M=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__hA)+t);
var K=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__hA)+t);
var I=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+M+g+n+K+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var L=I.exec(H);

if(L==null){throw new Error("Number string '"+H+"' does not match the number format");
}var N=(L[1]==r);
var P=L[2];
var O=L[3];
P=P.replace(new RegExp(M,m),t);
var J=(N?r:t)+P;

if(O!=null&&O.length!=0){O=O.replace(new RegExp(K),t);
J+=h+O;
}return parseFloat(J);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var cM=")",cL="(",cK="|",cJ="(\\d\\d?)",cI="format",cH="",cG="-",cF="stand-alone",cE="abbreviated",cD="wide",bN="(\\d\\d*?)",bM="narrow",bL="quarter",bK='A',bJ="default",bI="0",bH="literal",bG="wildcard",bF="'",bE="(\\d?)",cT="hour",cU="eeeee",cR="EEEE",cS='Anno Domini',cP="+",cQ="eee",cN="ccc",cO="EEEEE",cV="EE",cW="MMMM",cm='Q',cl="eeee",co="LLLLL",cn="LLLL",cq="ms",cp="(\\d\\d?\\d?)",cs="cccc",cr="dayOfYear",ck='AD',cj="ccccc",o="E",p="MMM",q="EEE",r="MMMMM",s="LLL",t='L',u='abbreviated',v="Y+",w=":",x='y',dl="quoted_literal",dk="weekOfYear",dj='a',di="day",dq="(-*",dp="locale",dn="GMT",dm="HH:mm:ss",ds='y+',dr="HHmmss",be="long",bf='Y',bc='z',bd='BC',bi='c',bj="d",bg="D",bh='e',ba='B',bb='',M='Before Christ',L='Z',O=" ",N="min",I='M',H="sec",K="\\d",J="+?",G='E',F='W',bo="qqqq",bp="h",bq="KK",br="Z",bk="GGGGG",bl="LL",bm="^",bn='4th quarter',bs="SSS",bt="qqq",W="K",V='q',U='G',T="a",S='2nd quarter',R="dd",Q="qx.util.format.DateFormat",P='weekDay',Y="ee",X="q",bu="QQQQ",bv="ww",bw="H",bx='Y+',by='wide',bz="(\\d\\d\\d?)",bA="(GMT[\\+\\-]\\d\\d:\\d\\d)",bB="_applyLocale",bC="Q",bD="c",bR="weekOfMonth",bQ="GGG",bP='-',bO="w",bV="mm",bU='h',bT="S",bS='s',bX="QQQ",bW="G",cf="GG",cg="kk",cd="ss",ce="([\\+\\-]\\d\\d\\d\\d)",cb='H',cc='S',bY='1st quarter',ca='Q1',ch='3rd quarter',ci="QQ",cw="HH",cv='k',cy="m",cx="DDD",cA='D',cz='K',cC="L",cB="hh",cu="e",ct="W",de="GGGG",df='Q2',dg="MM",dh="y+",da='narrow',db="yyyy-MM-dd HH:mm:ss",dc="short",dd='d',cX="unkown",cY="\\d?",n="k",m="qx.debug",h='m',g="String",f='Q3',e="z",d="DD",c='isoUtcDateTime',b="SS",a="s",A="M",B='w',y="$",z="?",D='Q4',E='month',C="qq";
qx.Class.define(Q,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(dt,du){qx.core.Object.call(this);

if(!du){this.__hA=qx.locale.Manager.getInstance().getLocale();
this.__mW=qx.locale.Manager.getInstance().bind(dp,this,dp);
}else{this.__hA=du;
this.setLocale(du);
}this.__mX=this.__hA;

if(dt!=null){this.__mY=dt.toString();

if(this.__mY in qx.util.format.DateFormat.ISO_MASKS){if(this.__mY===c){this.__na=true;
}this.__mY=qx.util.format.DateFormat.ISO_MASKS[this.__mY];
}}else{this.__mY=qx.locale.Date.getDateFormat(be,this.__hA)+O+qx.locale.Date.getDateTimeFormat(dr,dm,this.__hA);
}},properties:{locale:{apply:bB,nullable:true,check:g}},statics:{getDateTimeInstance:function(){var dw=qx.util.format.DateFormat;
var dv=qx.locale.Date.getDateFormat(be)+O+qx.locale.Date.getDateTimeFormat(dr,dm);

if(dw._dateInstance==null||dw._dateInstance.__mY!=dv){dw._dateTimeInstance=new dw();
}return dw._dateTimeInstance;
},getDateInstance:function(){var dy=qx.util.format.DateFormat;
var dx=qx.locale.Date.getDateFormat(dc)+cH;

if(dy._dateInstance==null||dy._dateInstance.__mY!=dx){dy._dateInstance=new dy(dx);
}return dy._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:db,ISO_MASKS:{isoDate:"yyyy-MM-dd",isoTime:"HH:mm:ss",isoDateTime:"yyyy-MM-dd'T'HH:mm:ss",isoUtcDateTime:"yyyy-MM-dd'T'HH:mm:ss'Z'"},AM_MARKER:"am",PM_MARKER:"pm"},members:{__mW:null,__hA:null,__mX:null,__mY:null,__nb:null,__nc:null,__nd:null,__na:null,__ne:function(dz,dA){var dB=cH+(dz<0?((-1)*dz):dz);

while(dB.length<dA){dB=bI+dB;
}return dz<0?cG+dB:dB;
},__nf:function(dC){var dD=new Date(dC.getTime());
var dE=dD.getDate();

while(dD.getMonth()!=0){dD.setDate(-1);
dE+=dD.getDate()+1;
}return dE;
},__ng:function(dF){return new Date(dF.getTime()+(3-((dF.getDay()+6)%7))*86400000);
},__nh:function(dG){var dI=this.__ng(dG);
var dJ=dI.getFullYear();
var dH=this.__ng(new Date(dJ,0,4));
return Math.floor(1.5+(dI.getTime()-dH.getTime())/86400000/7);
},__ni:function(dK){var dM=this.__ng(dK);
var dL=this.__ng(new Date(dK.getFullYear(),dK.getMonth(),4));
return Math.floor(1.5+(dM.getTime()-dL.getTime())/86400000/7);
},__nj:function(dN){var dO=this.__ng(dN);
return dO.getFullYear();
},__nk:function(dP){var dQ=new Date(dP,2,1);
dQ.setDate(-1);
return dQ.getDate()+1===29;
},__nl:function(dR,dS){var dW=0;
var dX=0;
if(!dS){dS=1971;
}var dT=0;

for(var i=1;i<=12;i++){var dV=new Date(dS,i,1);
dV.setDate(-1);
var dU=dV.getDate()+1;
dT+=dU;

if(dT<dR){dW++;
dX+=dU;
}else{dX=dR-(dT-dU);
break;
}}return {month:dW,day:dX};
},__nm:function(dY,ea,eb){var ec;

switch(ea){case 11:ec=dY-1;

if(dY!=this.__nj(new Date(ec,ea,eb))){ec=dY;
}break;
case 0:ec=dY+1;

if(dY!=this.__nj(new Date(ec,ea,eb))){ec=dY;
}break;
default:ec=dY;
}return ec;
},_applyLocale:function(ed,ee){this.__hA=ed===null?this.setLocale(this.__mX):ed;
},format:function(ef){if(ef==null){return null;
}
if(isNaN(ef.getTime())){if(qx.core.Environment.get(m)){qx.log.Logger.error("Provided date is invalid");
}return null;
}
if(this.__na){ef=new Date(ef.getUTCFullYear(),ef.getUTCMonth(),ef.getUTCDate(),ef.getUTCHours(),ef.getUTCMinutes(),ef.getUTCSeconds(),ef.getUTCMilliseconds());
}var ei=this.__hA;
var en=ef.getFullYear();
var ej=ef.getMonth();
var em=ef.getDate();
var eq=ef.getDay();
var et=ef.getHours();
var ez=ef.getMinutes();
var er=ef.getSeconds();
var ex=ef.getMilliseconds();
var ep=ef.getTimezoneOffset();
var eu=ep>0?1:-1;
var eg=Math.floor(Math.abs(ep)/60);
var ew=Math.abs(ep)%60;
this.__nn();
var ey=cH;

for(var i=0;i<this.__nd.length;i++){var eo=this.__nd[i];

if(eo.type==bH){ey+=eo.text;
}else{var eh=eo.character;
var es=eo.size;
var eA=z;

switch(eh){case x:if(es==2){eA=this.__ne(en%100,2);
}else{var ek=Math.abs(en);
eA=ek+cH;

if(es>eA.length){for(var j=eA.length;j<es;j++){eA=bI+eA;
}}
if(en<0){eA=cG+eA;
}}break;
case bf:eA=this.__nj(ef)+cH;
var ek=eA.replace(bP,bb);

if(es>eA.length){for(var j=ek.length;j<es;j++){ek=bI+ek;
}}eA=eA.indexOf(cG)!=-1?cG+ek:ek;
break;
case U:if(es>=1&&es<=3){eA=en>0?ck:bd;
}else if(es==4){eA=en>0?cS:M;
}else if(es==5){eA=en>0?bK:ba;
}break;
case cm:if(es==1||es==2){eA=this.__ne(parseInt(ej/4)+1,es);
}
if(es==3){eA=cm+(parseInt(ej/4)+1);
}break;
case V:if(es==1||es==2){eA=this.__ne(parseInt(ej/4)+1,es);
}
if(es==3){eA=cm+(parseInt(ej/4)+1);
}break;
case cA:eA=this.__ne(this.__nf(ef),es);
break;
case dd:eA=this.__ne(em,es);
break;
case B:eA=this.__ne(this.__nh(ef),es);
break;
case F:eA=this.__ni(ef);
break;
case G:if(es>=1&&es<=3){eA=qx.locale.Date.getDayName(cE,eq,ei,cI,true);
}else if(es==4){eA=qx.locale.Date.getDayName(cD,eq,ei,cI,true);
}else if(es==5){eA=qx.locale.Date.getDayName(bM,eq,ei,cI,true);
}break;
case bh:var el=qx.locale.Date.getWeekStart(ei);
var ev=1+((eq-el>=0)?(eq-el):7+(eq-el));

if(es>=1&&es<=2){eA=this.__ne(ev,es);
}else if(es==3){eA=qx.locale.Date.getDayName(cE,eq,ei,cI,true);
}else if(es==4){eA=qx.locale.Date.getDayName(cD,eq,ei,cI,true);
}else if(es==5){eA=qx.locale.Date.getDayName(bM,eq,ei,cI,true);
}break;
case bi:var el=qx.locale.Date.getWeekStart(ei);
var ev=1+((eq-el>=0)?(eq-el):7+(eq-el));

if(es==1){eA=bb+ev;
}else if(es==3){eA=qx.locale.Date.getDayName(cE,eq,ei,cF,true);
}else if(es==4){eA=qx.locale.Date.getDayName(cD,eq,ei,cF,true);
}else if(es==5){eA=qx.locale.Date.getDayName(bM,eq,ei,cF,true);
}break;
case I:if(es==1||es==2){eA=this.__ne(ej+1,es);
}else if(es==3){eA=qx.locale.Date.getMonthName(cE,ej,ei,cI,true);
}else if(es==4){eA=qx.locale.Date.getMonthName(cD,ej,ei,cI,true);
}else if(es==5){eA=qx.locale.Date.getMonthName(bM,ej,ei,cI,true);
}break;
case t:if(es==1||es==2){eA=this.__ne(ej+1,es);
}else if(es==3){eA=qx.locale.Date.getMonthName(cE,ej,ei,cF,true);
}else if(es==4){eA=qx.locale.Date.getMonthName(cD,ej,ei,cF,true);
}else if(es==5){eA=qx.locale.Date.getMonthName(bM,ej,ei,cF,true);
}break;
case dj:eA=(et<12)?qx.locale.Date.getAmMarker(ei):qx.locale.Date.getPmMarker(ei);
break;
case cb:eA=this.__ne(et,es);
break;
case cv:eA=this.__ne((et==0)?24:et,es);
break;
case cz:eA=this.__ne(et%12,es);
break;
case bU:eA=this.__ne(((et%12)==0)?12:(et%12),es);
break;
case h:eA=this.__ne(ez,es);
break;
case bS:eA=this.__ne(er,es);
break;
case cc:eA=this.__ne(ex,3);

if(es<eA.length){eA=eA.substr(0,es);
}else{while(es>eA.length){eA+=bI;
}}break;
case bc:if(es>=1&&es<=4){eA=dn+((eu>0)?cG:cP)+this.__ne(Math.abs(eg),2)+w+this.__ne(ew,2);
}break;
case L:if(es>=1&&es<=3){eA=((eu>0)?cG:cP)+this.__ne(Math.abs(eg),2)+this.__ne(ew,2);
}else{eA=dn+((eu>0)?cG:cP)+this.__ne(Math.abs(eg),2)+w+this.__ne(ew,2);
}break;
}ey+=eA;
}}return ey;
},parse:function(eB){this.__no();
var eK=this.__nb.regex.exec(eB);

if(eK==null){throw new Error("Date string '"+eB+"' does not match the date format: "+this.__mY);
}var eC={era:1,year:1970,quarter:1,month:0,day:1,dayOfYear:1,hour:0,ispm:false,weekDay:4,weekYear:1970,weekOfMonth:1,weekOfYear:1,min:0,sec:0,ms:0};
var eE=1;
var eD=false;
var eF=false;

for(var i=0;i<this.__nb.usedRules.length;i++){var eG=this.__nb.usedRules[i];
var eH=eK[eE];

if(eG.field!=null){eC[eG.field]=parseInt(eH,10);
}else{eG.manipulator(eC,eH,eG.pattern);
}
if(eG.pattern==v){var eI=false;

for(var k=0;k<this.__nb.usedRules.length;k++){if(this.__nb.usedRules[k].pattern==ds){eI=true;
break;
}}
if(!eI){eD=true;
}}
if(eG.pattern.indexOf(bg)!=-1){var eM=false;

for(var k=0;k<this.__nb.usedRules.length;k++){if(this.__nb.usedRules[k].pattern.indexOf(bj)!=-1){eM=true;
break;
}}
if(!eM){eF=true;
}}eE+=(eG.groups==null)?1:eG.groups;
}
if(eD){eC.year=this.__nm(eC.weekYear,eC.month,eC.day);
}
if(eF){var eL=this.__nl(eC.dayOfYear,eC.year);
eC.month=eL.month;
eC.day=eL.day;
}
if(eC.era<0&&(eC.year*eC.era<0)){eC.year=eC.year*eC.era;
}var eJ=new Date(eC.year,eC.month,eC.day,(eC.ispm)?(eC.hour+12):eC.hour,eC.min,eC.sec,eC.ms);

if(this.__na){eJ=new Date(eJ.getUTCFullYear(),eJ.getUTCMonth(),eJ.getUTCDate(),eJ.getUTCHours(),eJ.getUTCMinutes(),eJ.getUTCSeconds(),eJ.getUTCMilliseconds());
}
if(eC.month!=eJ.getMonth()||eC.year!=eJ.getFullYear()){throw new Error("Error parsing date '"+eB+"': the value for day or month is too large");
}return eJ;
},__nn:function(){if(this.__nd!=null){return;
}this.__nd=[];
var eR;
var eP=0;
var eT=cH;
var eN=this.__mY;
var eQ=bJ;
var i=0;

while(i<eN.length){var eS=eN.charAt(i);

switch(eQ){case dl:if(eS==bF){if(i+1>=eN.length){i++;
break;
}var eO=eN.charAt(i+1);

if(eO==bF){eT+=eS;
i++;
}else{i++;
eQ=cX;
}}else{eT+=eS;
i++;
}break;
case bG:if(eS==eR){eP++;
i++;
}else{this.__nd.push({type:bG,character:eR,size:eP});
eR=null;
eP=0;
eQ=bJ;
}break;
default:if((eS>=dj&&eS<=bc)||(eS>=bK&&eS<=L)){eR=eS;
eQ=bG;
}else if(eS==bF){if(i+1>=eN.length){eT+=eS;
i++;
break;
}var eO=eN.charAt(i+1);

if(eO==bF){eT+=eS;
i++;
}i++;
eQ=dl;
}else{eQ=bJ;
}
if(eQ!=bJ){if(eT.length>0){this.__nd.push({type:bH,text:eT});
eT=cH;
}}else{eT+=eS;
i++;
}break;
}}if(eR!=null){this.__nd.push({type:bG,character:eR,size:eP});
}else if(eT.length>0){this.__nd.push({type:bH,text:eT});
}},__no:function(){if(this.__nb!=null){return ;
}var eX=this.__mY;
this.__nq();
this.__nn();
var fe=[];
var fa=bm;

for(var eV=0;eV<this.__nd.length;eV++){var ff=this.__nd[eV];

if(ff.type==bH){fa+=qx.lang.String.escapeRegexpChars(ff.text);
}else{var eW=ff.character;
var fb=ff.size;
var eY;

for(var fg=0;fg<this.__nc.length;fg++){var fc=this.__nc[fg];

if(this.__np(fc,eW,fb)){eY=fc;
break;
}}if(eY==null){var fd=cH;

for(var i=0;i<fb;i++){fd+=eW;
}throw new Error("Malformed date format: "+eX+". Wildcard "+fd+" is not supported");
}else{fe.push(eY);
fa+=eY.regex;
}}}fa+=y;
var eU;

try{eU=new RegExp(fa);
}catch(fh){throw new Error("Malformed date format: "+eX);
}this.__nb={regex:eU,"usedRules":fe,pattern:fa};
},__np:function(fi,fj,fk){if(fj===x&&fi.pattern===ds){fi.regex=fi.regexFunc(fk);
return true;
}else if(fj===bf&&fi.pattern===bx){fi.regex=fi.regexFunc(fk);
return true;
}else{return fj==fi.pattern.charAt(0)&&fk==fi.pattern.length;
}},__nq:function(){var fy=qx.util.format.DateFormat;
var fA=qx.lang.String;

if(this.__nc!=null){return ;
}var fz=this.__nc=[];
var fu=qx.locale.Date.getAmMarker(this.__hA).toString()||fy.AM_MARKER;
var fH=qx.locale.Date.getPmMarker(this.__hA).toString()||fy.PM_MARKER;
var fm=this.__hA;
var fr=function(fL,fM){fM=parseInt(fM,10);

if(fM>0){if(fM<fy.ASSUME_YEAR_2000_THRESHOLD){fM+=2000;
}else if(fM<100){fM+=1900;
}}fL.year=fM;
};
var fJ=function(fN,fO){fO=parseInt(fO,10);

if(fO>0){if(fO<fy.ASSUME_YEAR_2000_THRESHOLD){fO+=2000;
}else if(fO<100){fO+=1900;
}}fN.weekYear=fO;
};
var fK=function(fP,fQ){fP.month=parseInt(fQ,10)-1;
};
var fp=function(fR,fS){var fU=qx.locale.Date.getWeekStart(fm);
var fT=(parseInt(fS,10)-1+fU)<=6?parseInt(fS,10)-1+fU:(parseInt(fS,10)-1+fU)-7;
fR.weekDay=fT;
};
var fo=function(fV,fW){var fX=qx.locale.Date.getPmMarker(fm).toString()||fy.PM_MARKER;
fV.ispm=(fW==fX);
};
var ft=function(fY,ga){fY.hour=parseInt(ga,10)%24;
};
var fn=function(gb,gc){gb.hour=parseInt(gc,10)%12;
};
var fC=function(gd,ge){return;
};
var fD=[bK,ba];
var fE=function(gf,gg){gf.era=gg==bK?1:-1;
};
var fx=[ck,bd];
var fw=function(gh,gi){gh.era=gi==ck?1:-1;
};
var fG=[cS,M];
var fv=function(gj,gk){gj.era=gk==cS?1:-1;
};
var fI=[ca,df,f,D];
var fl=function(gl,gm){gl.quarter=fI.indexOf(gm);
};
var fF=[bY,S,ch,bn];
var fB=function(gn,go){gn.quarter=fF.indexOf(go);
};
var fs={};
var fq=function(gp){var gu=[t,I];
var gq=[bi,bh,G];
var gx=gp.charAt(0);
var gs=gu.indexOf(gx)>=0;
var gt=function(){var gz=gs?gu:gq;
var gA=gx===gz[0]?cF:cI;
var gB=gp.length;
var gy=u;

switch(gB){case 4:gy=by;
break;
case 5:gy=da;
break;
default:gy=u;
}return [gA,gy];
};

if(!fs[gp]){fs[gp]={};
var gw=gt();
var gr=gs?qx.locale.Date.getMonthNames:qx.locale.Date.getDayNames;
var gv=gr.call(qx.locale.Date,gw[1],fm,gw[0],true);

for(var i=0,l=gv.length;i<l;i++){gv[i]=fA.escapeRegexpChars(gv[i].toString());
}fs[gp].data=gv;
fs[gp].func=function(gC,gD){gD=fA.escapeRegexpChars(gD);
gC[gs?E:P]=gv.indexOf(gD);
};
}return fs[gp];
};
fz.push({pattern:dh,regexFunc:function(gE){var gF=dq;

for(var i=0;i<gE;i++){gF+=K;

if(i===gE-1&&i!==1){gF+=J;
}}gF+=cM;
return gF;
},manipulator:fr});
fz.push({pattern:v,regexFunc:function(gG){var gH=dq;

for(var i=0;i<gG;i++){gH+=K;

if(i===gG-1){gH+=J;
}}gH+=cM;
return gH;
},manipulator:fJ});
fz.push({pattern:bW,regex:cL+fx.join(cK)+cM,manipulator:fw});
fz.push({pattern:cf,regex:cL+fx.join(cK)+cM,manipulator:fw});
fz.push({pattern:bQ,regex:cL+fx.join(cK)+cM,manipulator:fw});
fz.push({pattern:de,regex:cL+fG.join(cK)+cM,manipulator:fv});
fz.push({pattern:bk,regex:cL+fD.join(cK)+cM,manipulator:fE});
fz.push({pattern:bC,regex:bN,field:bL});
fz.push({pattern:ci,regex:cJ,field:bL});
fz.push({pattern:bX,regex:cL+fI.join(cK)+cM,manipulator:fl});
fz.push({pattern:bu,regex:cL+fF.join(cK)+cM,manipulator:fB});
fz.push({pattern:X,regex:bN,field:bL});
fz.push({pattern:C,regex:cJ,field:bL});
fz.push({pattern:bt,regex:cL+fI.join(cK)+cM,manipulator:fl});
fz.push({pattern:bo,regex:cL+fF.join(cK)+cM,manipulator:fB});
fz.push({pattern:A,regex:bN,manipulator:fK});
fz.push({pattern:dg,regex:cJ,manipulator:fK});
fz.push({pattern:p,regex:cL+fq(p).data.join(cK)+cM,manipulator:fq(p).func});
fz.push({pattern:cW,regex:cL+fq(cW).data.join(cK)+cM,manipulator:fq(cW).func});
fz.push({pattern:r,regex:cL+fq(r).data.join(cK)+cM,manipulator:fq(r).func});
fz.push({pattern:cC,regex:bN,manipulator:fK});
fz.push({pattern:bl,regex:cJ,manipulator:fK});
fz.push({pattern:s,regex:cL+fq(s).data.join(cK)+cM,manipulator:fq(s).func});
fz.push({pattern:cn,regex:cL+fq(cn).data.join(cK)+cM,manipulator:fq(cn).func});
fz.push({pattern:co,regex:cL+fq(co).data.join(cK)+cM,manipulator:fq(co).func});
fz.push({pattern:R,regex:cJ,field:di});
fz.push({pattern:bj,regex:bN,field:di});
fz.push({pattern:bg,regex:bE,field:cr});
fz.push({pattern:d,regex:cJ,field:cr});
fz.push({pattern:cx,regex:bz,field:cr});
fz.push({pattern:o,regex:cL+fq(o).data.join(cK)+cM,manipulator:fq(o).func});
fz.push({pattern:cV,regex:cL+fq(cV).data.join(cK)+cM,manipulator:fq(cV).func});
fz.push({pattern:q,regex:cL+fq(q).data.join(cK)+cM,manipulator:fq(q).func});
fz.push({pattern:cR,regex:cL+fq(cR).data.join(cK)+cM,manipulator:fq(cR).func});
fz.push({pattern:cO,regex:cL+fq(cO).data.join(cK)+cM,manipulator:fq(cO).func});
fz.push({pattern:cu,regex:bE,manipulator:fp});
fz.push({pattern:Y,regex:cJ,manipulator:fp});
fz.push({pattern:cQ,regex:cL+fq(cQ).data.join(cK)+cM,manipulator:fq(cQ).func});
fz.push({pattern:cl,regex:cL+fq(cl).data.join(cK)+cM,manipulator:fq(cl).func});
fz.push({pattern:cU,regex:cL+fq(cU).data.join(cK)+cM,manipulator:fq(cU).func});
fz.push({pattern:bD,regex:cY,manipulator:fp});
fz.push({pattern:cN,regex:cL+fq(cN).data.join(cK)+cM,manipulator:fq(cN).func});
fz.push({pattern:cs,regex:cL+fq(cs).data.join(cK)+cM,manipulator:fq(cs).func});
fz.push({pattern:cj,regex:cL+fq(cj).data.join(cK)+cM,manipulator:fq(cj).func});
fz.push({pattern:T,regex:cL+fu+cK+fH+cM,manipulator:fo});
fz.push({pattern:ct,regex:bE,field:bR});
fz.push({pattern:bO,regex:bE,field:dk});
fz.push({pattern:bv,regex:cJ,field:dk});
fz.push({pattern:cw,regex:cJ,field:cT});
fz.push({pattern:bw,regex:cJ,field:cT});
fz.push({pattern:cg,regex:cJ,manipulator:ft});
fz.push({pattern:n,regex:cJ,manipulator:ft});
fz.push({pattern:bq,regex:cJ,field:cT});
fz.push({pattern:W,regex:cJ,field:cT});
fz.push({pattern:cB,regex:cJ,manipulator:fn});
fz.push({pattern:bp,regex:cJ,manipulator:fn});
fz.push({pattern:bV,regex:cJ,field:N});
fz.push({pattern:cy,regex:cJ,field:N});
fz.push({pattern:cd,regex:cJ,field:H});
fz.push({pattern:a,regex:cJ,field:H});
fz.push({pattern:bs,regex:cp,field:cq});
fz.push({pattern:b,regex:cp,field:cq});
fz.push({pattern:bT,regex:cp,field:cq});
fz.push({pattern:br,regex:ce,manipulator:fC});
fz.push({pattern:e,regex:bA,manipulator:fC});
}},destruct:function(){if(this.__mW!=null){qx.locale.Manager.getInstance().removeBinding(this.__mW);
}this.__nd=this.__nb=this.__nc=null;
}});
})();
(function(){var k="_",j='format',h="format",g="qx.debug",f='_',e="stand-alone",d="narrow",c="abbreviated",b="wide",a='stand-alone',J="short",I="full",H="long",G="medium",F="sat",E="cldr_day_",D="cldr_month_",C="wed",B="fri",A="tue",r="mon",s="sun",p="thu",q="HH:mm",n="HHmmsszz",o="cldr_date_format_",l="HHmm",m="HHmmss",t="cldr_time_format_",u="HH:mm:ss zz",w="cldr_pm",v="cldr_am",y="qx.locale.Date",x="cldr_date_time_format_",z="HH:mm:ss";
qx.Class.define(y,{statics:{__nr:qx.locale.Manager.getInstance(),getAmMarker:function(K){return this.__nr.localize(v,[],K);
},getPmMarker:function(L){return this.__nr.localize(w,[],L);
},getDayNames:function(length,M,N,O){var N=N?N:h;

if(qx.core.Environment.get(g)){qx.core.Assert.assertInArray(length,[c,d,b]);
qx.core.Assert.assertInArray(N,[h,e]);
}var Q=[s,r,A,C,p,B,F];
var R=[];

for(var i=0;i<Q.length;i++){var P=E+N+k+length+k+Q[i];
R.push(O?this.__ns(N,N===j?a:j,P,M):this.__nr.localize(P,[],M));
}return R;
},getDayName:function(length,S,T,U,V){var U=U?U:h;

if(qx.core.Environment.get(g)){qx.core.Assert.assertInArray(length,[c,d,b]);
qx.core.Assert.assertInteger(S);
qx.core.Assert.assertInRange(S,0,6);
qx.core.Assert.assertInArray(U,[h,e]);
}var X=[s,r,A,C,p,B,F];
var W=E+U+k+length+k+X[S];
return V?this.__ns(U,U===j?a:j,W,T):this.__nr.localize(W,[],T);
},getMonthNames:function(length,Y,ba,bb){var ba=ba?ba:h;

if(qx.core.Environment.get(g)){qx.core.Assert.assertInArray(length,[c,d,b]);
qx.core.Assert.assertInArray(ba,[h,e]);
}var bd=[];

for(var i=0;i<12;i++){var bc=D+ba+k+length+k+(i+1);
bd.push(bb?this.__ns(ba,ba===j?a:j,bc,Y):this.__nr.localize(bc,[],Y));
}return bd;
},getMonthName:function(length,be,bf,bg,bh){var bg=bg?bg:h;

if(qx.core.Environment.get(g)){qx.core.Assert.assertInArray(length,[c,d,b]);
qx.core.Assert.assertInArray(bg,[h,e]);
}var bi=D+bg+k+length+k+(be+1);
return bh?this.__ns(bg,bg===j?a:j,bi,bf):this.__nr.localize(bi,[],bf);
},getDateFormat:function(bj,bk){if(qx.core.Environment.get(g)){qx.core.Assert.assertInArray(bj,[J,G,H,I]);
}var bl=o+bj;
return this.__nr.localize(bl,[],bk);
},getDateTimeFormat:function(bm,bn,bo){var bq=x+bm;
var bp=this.__nr.localize(bq,[],bo);

if(bp==bq){bp=bn;
}return bp;
},getTimeFormat:function(br,bs){if(qx.core.Environment.get(g)){qx.core.Assert.assertInArray(br,[J,G,H,I]);
}var bu=t+br;
var bt=this.__nr.localize(bu,[],bs);

if(bt!=bu){return bt;
}
switch(br){case J:case G:return qx.locale.Date.getDateTimeFormat(l,q);
case H:return qx.locale.Date.getDateTimeFormat(m,z);
case I:return qx.locale.Date.getDateTimeFormat(n,u);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bv){var bw={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bx=qx.locale.Date._getTerritory(bv);
return bw[bx]!=null?bw[bx]:1;
},getWeekendStart:function(by){var bA={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var bz=qx.locale.Date._getTerritory(by);
return bA[bz]!=null?bA[bz]:6;
},getWeekendEnd:function(bB){var bC={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var bD=qx.locale.Date._getTerritory(bB);
return bC[bD]!=null?bC[bD]:0;
},isWeekend:function(bE,bF){var bH=qx.locale.Date.getWeekendStart(bF);
var bG=qx.locale.Date.getWeekendEnd(bF);

if(bG>bH){return ((bE>=bH)&&(bE<=bG));
}else{return ((bE>=bH)||(bE<=bG));
}},_getTerritory:function(bI){if(bI){var bJ=bI.split(k)[1]||bI;
}else{bJ=this.__nr.getTerritory()||this.__nr.getLanguage();
}return bJ.toUpperCase();
},__ns:function(bK,bL,bM,bN){var bP=this.__nr.localize(bM,[],bN);

if(bP==bM){var bO=bM.replace(f+bK+f,f+bL+f);
return this.__nr.localize(bO,[],bN);
}else{return bP;
}}}});
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
(function(){var k="showingPlaceholder",j="",i="none",h="color",g="qx.dynlocale",f="Boolean",d="A",c="qx.event.type.Data",b="readonly",a="placeholder",be="input",bd="focusin",bc="visibility",bb="engine.name",ba="focusout",Y="changeLocale",X="hidden",W="absolute",V="readOnly",U="text",r="_applyTextAlign",s="px",p="RegExp",q=")",n="syncAppearance",o="changeValue",l="engine.version",m="change",v="changeStatus",w="textAlign",E="focused",C="center",L="visible",G="disabled",Q="url(",O="String",y="resize",T="qx.ui.form.AbstractField",S="transparent",R="spellcheck",x="false",A="right",B="PositiveInteger",D="gecko",F="abstract",H="block",M="css.placeholder",P="_applyReadOnly",t="_applyPlaceholder",u="left",z="off",K="mshtml",J="qx/static/blank.gif",I="text-placeholder",N="changeReadOnly";
qx.Class.define(T,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:F,construct:function(bf){qx.ui.core.Widget.call(this);
this.__mn=!qx.core.Environment.get(M)||(qx.core.Environment.get(bb)==D&&parseFloat(qx.core.Environment.get(l))>=2);

if(bf!=null){this.setValue(bf);
}this.getContentElement().addListener(m,this._onChangeContent,this);
if(this.__mn){this.addListener(n,this._syncPlaceholder,this);
}if(qx.core.Environment.get(g)){qx.locale.Manager.getInstance().addListener(Y,this._onChangeLocale,this);
}},events:{"input":c,"changeValue":c},properties:{textAlign:{check:[u,C,A],nullable:true,themeable:true,apply:r},readOnly:{check:f,apply:P,event:N,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:B,init:Infinity},liveUpdate:{check:f,init:false},placeholder:{check:O,nullable:true,apply:t},filter:{check:p,nullable:true,init:null}},members:{__mo:true,__mp:null,__mq:null,__mr:null,__mn:true,__lj:null,__ln:null,getFocusElement:function(){var bg=this.getContentElement();

if(bg){return bg;
}},_createInputElement:function(){return new qx.html.Input(U);
},renderLayout:function(bh,top,bi,bj){var bk=this._updateInsets;
var bo=qx.ui.core.Widget.prototype.renderLayout.call(this,bh,top,bi,bj);
if(!bo){return;
}var bm=bo.size||bk;
var bp=s;

if(bm||bo.local||bo.margin){var bl=this.getInsets();
var innerWidth=bi-bl.left-bl.right;
var innerHeight=bj-bl.top-bl.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bn=this.getContentElement();
if(bk&&this.__mn){this.__mu().setStyles({"left":bl.left+bp,"top":bl.top+bp});
}
if(bm){if(this.__mn){this.__mu().setStyles({"width":innerWidth+bp,"height":innerHeight+bp});
}bn.setStyles({"width":innerWidth+bp,"height":innerHeight+bp});
this._renderContentElement(innerHeight,bn);
}},_renderContentElement:function(innerHeight,bq){},_createContentElement:function(){var br=this._createInputElement();
br.setStyles({"border":i,"padding":0,"margin":0,"display":H,"background":S,"outline":i,"appearance":i,"position":W,"autoComplete":z});
br.setSelectable(this.getSelectable());
br.setEnabled(this.getEnabled());
br.addListener(be,this._onHtmlInput,this);
br.setAttribute(R,x);
br.setStyle(y,i);
if((qx.core.Environment.get(bb)==K)){br.setStyles({backgroundImage:Q+qx.util.ResourceManager.getInstance().toUri(J)+q});
}return br;
},_applyEnabled:function(bs,bt){qx.ui.core.Widget.prototype._applyEnabled.call(this,bs,bt);
this.getContentElement().setEnabled(bs);

if(this.__mn){if(bs){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bu=this.getContentElement();
bu.setAttribute(a,bs?this.getPlaceholder():j);
}},__ms:{width:16,height:16},_getContentHint:function(){return {width:this.__ms.width*10,height:this.__ms.height||16};
},_applyFont:function(bv,bw){if(bw&&this.__lj&&this.__ln){this.__lj.removeListenerById(this.__ln);
this.__ln=null;
}var bx;

if(bv){this.__lj=qx.theme.manager.Font.getInstance().resolve(bv);

if(this.__lj instanceof qx.bom.webfonts.WebFont){this.__ln=this.__lj.addListener(v,this._onWebFontStatusChange,this);
}bx=this.__lj.getStyles();
}else{bx=qx.bom.Font.getDefaultStyles();
}if(this.getTextColor()!=null){delete bx[h];
}this.getContentElement().setStyles(bx);
if(this.__mn){this.__mu().setStyles(bx);
}if(bv){this.__ms=qx.bom.Label.getTextSize(d,bx);
}else{delete this.__ms;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(by,bz){if(by){this.getContentElement().setStyle(h,qx.theme.manager.Color.getInstance().resolve(by));
}else{this.getContentElement().removeStyle(h);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__ms;
},_onHtmlInput:function(e){var bD=e.getData();
var bC=true;
this.__mo=false;
if(this.__mr&&this.__mr===bD){bC=false;
}if(this.getFilter()!=null){var bE=j;
var bA=bD.search(this.getFilter());
var bB=bD;

while(bA>=0){bE=bE+(bB.charAt(bA));
bB=bB.substring(bA+1,bB.length);
bA=bB.search(this.getFilter());
}
if(bE!=bD){bC=false;
bD=bE;
this.getContentElement().setValue(bD);
}}if(bD.length>this.getMaxLength()){bC=false;
this.getContentElement().setValue(bD.substr(0,this.getMaxLength()));
}if(bC){this.fireDataEvent(be,bD,this.__mr);
this.__mr=bD;
if(this.getLiveUpdate()){this.__mt(bD);
}}},_onWebFontStatusChange:function(bF){if(bF.getData().valid===true){var bG=this.__lj.getStyles();
this.__ms=qx.bom.Label.getTextSize(d,bG);
qx.ui.core.queue.Layout.add(this);
}},__mt:function(bH){var bI=this.__mq;
this.__mq=bH;

if(bI!=bH){this.fireNonBubblingEvent(o,qx.event.type.Data,[bH,bI]);
}},setValue:function(bJ){if(bJ===null){if(this.__mo){return bJ;
}bJ=j;
this.__mo=true;
}else{this.__mo=false;
if(this.__mn){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bJ)){var bL=this.getContentElement();

if(bJ.length>this.getMaxLength()){bJ=bJ.substr(0,this.getMaxLength());
}
if(bL.getValue()!=bJ){var bM=bL.getValue();
bL.setValue(bJ);
var bK=this.__mo?null:bJ;
this.__mq=bM;
this.__mt(bK);
}if(this.__mn){this._showPlaceholder();
}return bJ;
}throw new Error("Invalid value type: "+bJ);
},getValue:function(){var bN=this.getContentElement().getValue();
return this.__mo?null:bN;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__mo=e.getData()===null;
this.__mt(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bO,bP){this.getContentElement().setTextSelection(bO,bP);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bR=this.getValue()||j;
var bQ=this.getPlaceholder();

if(bQ!=null&&bR==j&&!this.hasState(E)&&!this.hasState(G)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__mu().setStyle(bc,X);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__mu().setStyle(bc,L);
}},__mu:function(){if(this.__mp==null){this.__mp=new qx.html.Label();
var bS=qx.theme.manager.Color.getInstance();
this.__mp.setStyles({"visibility":X,"zIndex":6,"position":W,"color":bS.resolve(I)});
this.getContainerElement().add(this.__mp);
}return this.__mp;
},_onChangeLocale:qx.core.Environment.select(g,{"true":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"false":null}),_applyPlaceholder:function(bT,bU){if(this.__mn){this.__mu().setValue(bT);

if(bT!=null){this.addListener(bd,this._removePlaceholder,this);
this.addListener(ba,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bd,this._removePlaceholder,this);
this.removeListener(ba,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(a,bT);
}}},_applyTextAlign:function(bV,bW){this.getContentElement().setStyle(w,bV);
},_applyReadOnly:function(bX,bY){var ca=this.getContentElement();
ca.setAttribute(V,bX);

if(bX){this.addState(b);
this.setFocusable(false);
}else{this.removeState(b);
this.setFocusable(true);
}}},destruct:function(){this.__mp=this.__lj=null;

if(qx.core.Environment.get(g)){qx.locale.Manager.getInstance().removeListener(Y,this._onChangeLocale,this);
}
if(this.__lj&&this.__ln){this.__lj.removeListenerById(this.__ln);
}}});
})();
(function(){var n="wrap",m="value",l="textarea",k="engine.name",j="none",i="",h="overflow",g="input",f="qx.html.Input",e="select",b="disabled",d="read-only",c="overflowX",a="overflowY";
qx.Class.define(f,{extend:qx.html.Element,construct:function(o,p,q){if(o===e||o===l){var r=o;
}else{r=g;
}qx.html.Element.call(this,r,p,q);
this.__mv=o;
},members:{__mv:null,__mw:null,__mx:null,_createDomElement:function(){return qx.bom.Input.create(this.__mv);
},_applyProperty:function(name,s){qx.html.Element.prototype._applyProperty.call(this,name,s);
var t=this.getDomElement();

if(name===m){qx.bom.Input.setValue(t,s);
}else if(name===n){qx.bom.Input.setWrap(t,s);
this.setStyle(h,t.style.overflow,true);
this.setStyle(c,t.style.overflowX,true);
this.setStyle(a,t.style.overflowY,true);
}},setEnabled:qx.core.Environment.select(k,{"webkit":function(u){this.__mx=u;

if(!u){this.setStyles({"userModify":d,"userSelect":j});
}else{this.setStyles({"userModify":null,"userSelect":this.__mw?null:j});
}},"default":function(v){this.setAttribute(b,v===false);
}}),setSelectable:qx.core.Environment.select(k,{"webkit":function(w){this.__mw=w;
qx.html.Element.prototype.setSelectable.call(this,this.__mx&&w);
},"default":function(x){qx.html.Element.prototype.setSelectable.call(this,x);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(m,y);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(m)||i;
},setWrap:function(B,C){if(this.__mv===l){this._setProperty(n,B,C);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__mv===l){return this._getProperty(n);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var m="input",k="engine.name",j="change",h="text",g="textarea",f="password",d="engine.version",c="radio",b="checkbox",a="keypress",A="browser.documentmode",z="opera",y="keyup",x="mshtml",w="blur",v="keydown",u="propertychange",t="browser.version",s="select-multiple",r="value",p="select",q="qx.event.handler.Input",n="checked";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if((qx.core.Environment.get(k)==z)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__my:false,__mz:null,__mq:null,__mr:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===m&&(D===m||D===g)){return true;
}
if(C===j&&(D===m||D===g||D===p)){return true;
}return false;
},registerEvent:function(E,F,G){if(qx.core.Environment.get(k)==x&&(qx.core.Environment.get(d)<9||(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)<9))){if(!E.__mA){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===h||I===f||H===g||I===b||I===c){qx.bom.Event.addNativeListener(E,u,this._onPropertyWrapper);
}
if(I!==b&&I!==c){qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}
if(I===h||I===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}E.__mA=true;
}}else{if(F===m){this.__mB(E);
}else if(F===j){if(E.type===c||E.type===b){qx.bom.Event.addNativeListener(E,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(E.type===h||E.type===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}}}}},__mB:qx.core.Environment.select(k,{"mshtml":function(J){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.addNativeListener(J,m,this._onInputWrapper);

if(J.type===h||J.type===f||J.type===g){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);
qx.bom.Event.addNativeListener(J,y,this._inputFixWrapper);
}}},"webkit":function(K){var L=K.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(d))<532&&L==g){qx.bom.Event.addNativeListener(K,a,this._onInputWrapper);
}qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);
},"opera":function(M){qx.bom.Event.addNativeListener(M,y,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(M,v,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(M,w,this._onBlurWrapper);
qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);
},"default":function(N){qx.bom.Event.addNativeListener(N,m,this._onInputWrapper);
}}),unregisterEvent:function(O,P){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(d)<9&&qx.core.Environment.get(A)<9){if(O.__mA){var Q=O.tagName.toLowerCase();
var R=O.type;

if(R===h||R===f||Q===g||R===b||R===c){qx.bom.Event.removeNativeListener(O,u,this._onPropertyWrapper);
}
if(R!==b&&R!==c){qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}
if(R===h||R===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}
try{delete O.__mA;
}catch(S){O.__mA=null;
}}}else{if(P===m){this.__mC(O);
}else if(P===j){if(O.type===c||O.type===b){qx.bom.Event.removeNativeListener(O,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}}
if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(O.type===h||O.type===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}}}},__mC:qx.core.Environment.select(k,{"mshtml":function(T){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.removeNativeListener(T,m,this._onInputWrapper);

if(T.type===h||T.type===f||T.type===g){qx.bom.Event.removeNativeListener(T,y,this._inputFixWrapper);
}}},"webkit":function(U){var V=U.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(d))<532&&V==g){qx.bom.Event.removeNativeListener(U,a,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,y,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,w,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,m,this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select(k,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__mq){this.__mq=Y.value;
qx.event.Registration.fireEvent(Y,j,qx.event.type.Data,[Y.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select(k,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__mr){this.__mr=ba.value;
qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__my=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__my=false;
}},"default":null}),_onBlur:qx.core.Environment.select(k,{"opera":function(e){if(this.__mz&&qx.core.Environment.get(t)<10.6){window.clearTimeout(this.__mz);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);
var bb=bc.tagName.toLowerCase();
if(!this.__my||bb!==m){if((qx.core.Environment.get(k)==z)&&qx.core.Environment.get(t)<10.6){this.__mz=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
},0);
}else{qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=qx.bom.Event.getTarget(e);
var bd=be.value;

if(be.type===s){var bd=[];

for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);
}}}qx.event.Registration.fireEvent(be,j,qx.event.type.Data,[bd]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);

if(bf.type===c){if(bf.checked){qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.value]);
}}else{qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.checked]);
}}),_onProperty:qx.core.Environment.select(k,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);
var bh=e.propertyName;

if(bh===r&&(bg.type===h||bg.type===f||bg.tagName.toLowerCase()===g)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);
}}else if(bh===n){if(bg.type===b){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.checked]);
}else if(bg.checked){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.value]);
}}}),"default":function(){}})},defer:function(bi){qx.event.Registration.addHandler(bi);
}});
})();
(function(){var k="",j="select",h="textarea",g="auto",f="soft",e="off",d="engine.name",c="text",b="Unsupported input type.",a="nowrap",x="radio",w="qx.debug",v="input",u="option",t="value",s="number",r="qx.bom.Input",q="normal",p="mshtml",o="wrap",m="checkbox",n="select-one";
qx.Class.define(r,{statics:{__fI:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(y,z,A){if(qx.core.Environment.get(w)){qx.core.Assert.assertKeyInMap(y,this.__fI,b);
}var z=z?qx.lang.Object.clone(z):{};
var B;

if(y===h||y===j){B=y;
}else{B=v;
z.type=y;
}return qx.bom.Element.create(B,z,A);
},setValue:function(C,D){var I=C.nodeName.toLowerCase();
var F=C.type;
var Array=qx.lang.Array;
var J=qx.lang.Type;

if(typeof D===s){D+=k;
}
if((F===m||F===x)){if(J.isArray(D)){C.checked=Array.contains(D,C.value);
}else{C.checked=C.value==D;
}}else if(I===j){var E=J.isArray(D);
var K=C.options;
var G,H;

for(var i=0,l=K.length;i<l;i++){G=K[i];
H=G.getAttribute(t);

if(H==null){H=G.text;
}G.selected=E?Array.contains(D,H):D==H;
}
if(E&&D.length==0){C.selectedIndex=-1;
}}else if((F===c||F===h)&&(qx.core.Environment.get(d)==p)){C.$$inValueSet=true;
C.value=D;
C.$$inValueSet=null;
}else{C.value=D;
}},getValue:function(L){var R=L.nodeName.toLowerCase();

if(R===u){return (L.attributes.value||{}).specified?L.value:L.text;
}
if(R===j){var M=L.selectedIndex;
if(M<0){return null;
}var S=[];
var U=L.options;
var T=L.type==n;
var Q=qx.bom.Input;
var P;
for(var i=T?M:0,O=T?M+1:U.length;i<O;i++){var N=U[i];

if(N.selected){P=Q.getValue(N);
if(T){return P;
}S.push(P);
}}return S;
}else{return (L.value||k).replace(/\r/g,k);
}},setWrap:qx.core.Environment.select(d,{"mshtml":function(V,W){var Y=W?f:e;
var X=W?g:k;
V.wrap=Y;
V.style.overflowY=X;
},"gecko|webkit":function(ba,bb){var bd=bb?f:e;
var bc=bb?k:g;
ba.setAttribute(o,bd);
ba.style.overflow=bc;
},"default":function(be,bf){be.style.whiteSpace=bf?q:a;
}})}});
})();
(function(){var g="mshtml",f="engine.name",e="qx.ui.form.TextField",d='px',c="textfield",b="engine.version",a="browser.documentmode";
qx.Class.define(e,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:c},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,h){if((qx.core.Environment.get(f)==g)&&(parseInt(qx.core.Environment.get(b),10)<9||qx.core.Environment.get(a)<9)){h.setStyles({"line-height":innerHeight+d});
}}}});
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
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var j=new qx.ui.layout.Grid();
j.setRowFlex(0,1);
j.setColumnFlex(1,1);
j.setColumnFlex(2,1);
this.setLayout(j);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(k,l){if(k){this._showChildControl(h).setValue(k);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(m,n){if(m){this._showChildControl(f).setSource(m);
}else{this._excludeChildControl(f);
}},_applyIcon:function(o,p){if(o){this._showChildControl(i).setSource(o);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(q,r){var s;

switch(q){case h:s=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(s,{row:0,column:1});
break;
case f:s=new qx.ui.basic.Image(this.getSortIcon());
s.setAnonymous(true);
this._add(s,{row:0,column:2});
break;
case i:s=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(s,{row:0,column:0});
break;
}return s||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,q);
}}});
})();
(function(){var k="qx.debug",j="Invalid argument 'col'.",h="Column not found in table model",g="qx.event.type.Data",f="orderChanged",e="Invalid argument 'renderer'.",d="visibilityChanged",c="visibilityChangedPre",b="Invalid argument 'colCount'.",a="Invalid argument 'visible'.",y="__nB",w="__nA",v="Invalid argument 'factory'.",u="Invalid argument 'newPositions'.",t="Invalid argument 'width'.",s="Invalid argument 'visXPos'.",r="Invalid argument 'toOverXPos'.",q="qx.ui.table.columnmodel.Basic",p="headerCellRendererChanged",o="__nC",m="widthChanged",n="Invalid argument 'overXPos'.",l="Invalid argument 'fromOverXPos'.";
qx.Class.define(q,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nw=[];
this.__nx=[];
},events:{"widthChanged":g,"visibilityChangedPre":g,"visibilityChanged":g,"orderChanged":g,"headerCellRendererChanged":g},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__mO:null,__ny:null,__nx:null,__nw:null,__nz:null,__nA:null,__nB:null,__nC:null,init:function(z,A){if(qx.core.Environment.get(k)){this.assertInteger(z,b);
}this.__nz=[];
var E=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var F=this.__nA||(this.__nA=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var C=this.__nB||(this.__nB=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var B=this.__nC||(this.__nC=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__nw=[];
this.__nx=[];
var H;
if(A){H=A.getInitiallyHiddenColumns();
}H=H||[];

for(var I=0;I<z;I++){this.__nz[I]={width:E,headerRenderer:F,dataRenderer:C,editorFactory:B};
this.__nw[I]=I;
this.__nx[I]=I;
}this.__ny=null;
this.__mO=true;

for(var G=0;G<H.length;G++){this.setColumnVisible(H[G],false);
}this.__mO=false;

for(I=0;I<z;I++){var D={col:I,visible:this.isColumnVisible(I)};
this.fireDataEvent(c,D);
this.fireDataEvent(d,D);
}},getVisibleColumns:function(){return this.__nx!=null?this.__nx:[];
},setColumnWidth:function(J,K,L){if(qx.core.Environment.get(k)){this.assertInteger(J,j);
this.assertInteger(K,t);
this.assertNotUndefined(this.__nz[J],h);
}var N=this.__nz[J].width;

if(N!=K){this.__nz[J].width=K;
var M={col:J,newWidth:K,oldWidth:N,isMouseAction:L||false};
this.fireDataEvent(m,M);
}},getColumnWidth:function(O){if(qx.core.Environment.get(k)){this.assertInteger(O,j);
this.assertNotUndefined(this.__nz[O],h);
}return this.__nz[O].width;
},setHeaderCellRenderer:function(P,Q){if(qx.core.Environment.get(k)){this.assertInteger(P,j);
this.assertInterface(Q,qx.ui.table.IHeaderRenderer,e);
this.assertNotUndefined(this.__nz[P],h);
}var R=this.__nz[P].headerRenderer;

if(R!==this.__nA){R.dispose();
}this.__nz[P].headerRenderer=Q;
this.fireDataEvent(p,{col:P});
},getHeaderCellRenderer:function(S){if(qx.core.Environment.get(k)){this.assertInteger(S,j);
this.assertNotUndefined(this.__nz[S],h);
}return this.__nz[S].headerRenderer;
},setDataCellRenderer:function(T,U){if(qx.core.Environment.get(k)){this.assertInteger(T,j);
this.assertInterface(U,qx.ui.table.ICellRenderer,e);
this.assertNotUndefined(this.__nz[T],h);
}this.__nz[T].dataRenderer=U;
var V=this.__nz[T].dataRenderer;

if(V!==this.__nB){return V;
}return null;
},getDataCellRenderer:function(W){if(qx.core.Environment.get(k)){this.assertInteger(W,j);
this.assertNotUndefined(this.__nz[W],h);
}return this.__nz[W].dataRenderer;
},setCellEditorFactory:function(X,Y){if(qx.core.Environment.get(k)){this.assertInteger(X,j);
this.assertInterface(Y,qx.ui.table.ICellEditorFactory,v);
this.assertNotUndefined(this.__nz[X],h);
}var ba=this.__nz[X].editorFactory;

if(ba!==this.__nC){ba.dispose();
}this.__nz[X].editorFactory=Y;
},getCellEditorFactory:function(bb){if(qx.core.Environment.get(k)){this.assertInteger(bb,j);
this.assertNotUndefined(this.__nz[bb],h);
}return this.__nz[bb].editorFactory;
},_getColToXPosMap:function(){if(this.__ny==null){this.__ny={};

for(var be=0;be<this.__nw.length;be++){var bd=this.__nw[be];
this.__ny[bd]={overX:be};
}
for(var bc=0;bc<this.__nx.length;bc++){var bd=this.__nx[bc];
this.__ny[bd].visX=bc;
}}return this.__ny;
},getVisibleColumnCount:function(){return this.__nx!=null?this.__nx.length:0;
},getVisibleColumnAtX:function(bf){if(qx.core.Environment.get(k)){this.assertInteger(bf,s);
}return this.__nx[bf];
},getVisibleX:function(bg){if(qx.core.Environment.get(k)){this.assertInteger(bg,j);
}return this._getColToXPosMap()[bg].visX;
},getOverallColumnCount:function(){return this.__nw.length;
},getOverallColumnAtX:function(bh){if(qx.core.Environment.get(k)){this.assertInteger(bh,n);
}return this.__nw[bh];
},getOverallX:function(bi){if(qx.core.Environment.get(k)){this.assertInteger(bi,j);
}return this._getColToXPosMap()[bi].overX;
},isColumnVisible:function(bj){if(qx.core.Environment.get(k)){this.assertInteger(bj,j);
}return (this._getColToXPosMap()[bj].visX!=null);
},setColumnVisible:function(bk,bl){if(qx.core.Environment.get(k)){this.assertInteger(bk,j);
this.assertBoolean(bl,a);
}
if(bl!=this.isColumnVisible(bk)){if(bl){var br=this._getColToXPosMap();
var bo=br[bk].overX;

if(bo==null){throw new Error("Showing column failed: "+bk+". The column is not added to this TablePaneModel.");
}var bp;

for(var x=bo+1;x<this.__nw.length;x++){var bq=this.__nw[x];
var bm=br[bq].visX;

if(bm!=null){bp=bm;
break;
}}if(bp==null){bp=this.__nx.length;
}this.__nx.splice(bp,0,bk);
}else{var bn=this.getVisibleX(bk);
this.__nx.splice(bn,1);
}this.__ny=null;
if(!this.__mO){var bs={col:bk,visible:bl};
this.fireDataEvent(c,bs);
this.fireDataEvent(d,bs);
}}},moveColumn:function(bt,bu){if(qx.core.Environment.get(k)){this.assertInteger(bt,l);
this.assertInteger(bu,r);
}this.__mO=true;
var bx=this.__nw[bt];
var bv=this.isColumnVisible(bx);

if(bv){this.setColumnVisible(bx,false);
}this.__nw.splice(bt,1);
this.__nw.splice(bu,0,bx);
this.__ny=null;

if(bv){this.setColumnVisible(bx,true);
}this.__mO=false;
var bw={col:bx,fromOverXPos:bt,toOverXPos:bu};
this.fireDataEvent(f,bw);
},setColumnsOrder:function(by){if(qx.core.Environment.get(k)){this.assertArray(by,u);
}
if(by.length==this.__nw.length){this.__mO=true;
var bB=new Array(by.length);

for(var bz=0;bz<this.__nw.length;bz++){var bA=this.isColumnVisible(bz);
bB[bz]=bA;

if(bA){this.setColumnVisible(bz,false);
}}this.__nw=qx.lang.Array.clone(by);
this.__ny=null;
for(var bz=0;bz<this.__nw.length;bz++){if(bB[bz]){this.setColumnVisible(bz,true);
}}this.__mO=false;
this.fireDataEvent(f);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__nw.length+", got "+by.length);
}}},destruct:function(){for(var i=0;i<this.__nz.length;i++){this.__nz[i].headerRenderer.dispose();
this.__nz[i].dataRenderer.dispose();
this.__nz[i].editorFactory.dispose();
}this.__nw=this.__nx=this.__nz=this.__ny=null;
this._disposeObjects(w,y,o);
}});
})();
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__oC=F;
this.__oD=0;
this.__nS=0;
this.__oE=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__nS:null,__oD:null,__oC:null,__oF:null,__nP:null,__nO:null,__oE:null,__oG:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__oC;
},getTable:function(){return this.__oC.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__nO||L!=this.__nP){var N=this.__nP;
this.__nO=K;
this.__nP=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__oH();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__oG>=W&&W!==-1){this.__oH();
}},__oH:function(){this.__oE=[];
this.__oG=0;
},__oI:function(Y,ba,bb){if(!ba&&!bb&&this.__oE[Y]){return this.__oE[Y];
}else{return null;
}},__oJ:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__oE[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__oE[bc]=bd;
this.__oG+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__oH();
}if(bi&&Math.abs(bi)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(bi);
}else if(bk&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(bj);
}else{this._updateAllRows();
}},_updateRowStyles:function(bl){var bp=this.getContentElement().getDomElement();

if(!bp||!bp.firstChild){this._updateAllRows();
return;
}var bt=this.getTable();
var bn=bt.getSelectionModel();
var bq=bt.getTableModel();
var bu=bt.getDataRowRenderer();
var bo=bp.firstChild.childNodes;
var bs={table:bt};
var bv=this.getFirstVisibleRow();
var y=0;
var bm=bo.length;

if(bl!=null){var br=bl-bv;

if(br>=0&&br<bm){bv=bl;
y=br;
bm=br+1;
}else{return;
}}
for(;y<bm;y++,bv++){bs.row=bv;
bs.selected=bn.isSelectedIndex(bv);
bs.focusedRow=(this.__nP==bv);
bs.rowData=bq.getRowData(bv);
bu.updateDataRowElement(bs,bo[y]);
}},_getRowsHtml:function(bw,bx){var bD=this.getTable();
var bG=bD.getSelectionModel();
var bA=bD.getTableModel();
var bB=bD.getTableColumnModel();
var bV=this.getPaneScroller().getTablePaneModel();
var bL=bD.getDataRowRenderer();
bA.prefetchRows(bw,bw+bx-1);
var bS=bD.getRowHeight();
var bU=bV.getColumnCount();
var bC=0;
var bz=[];
for(var x=0;x<bU;x++){var bY=bV.getColumnAtX(x);
var bF=bB.getColumnWidth(bY);
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__nO==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__nP==bE);
var bP=this.__oI(bE,bH,bK);

if(bP){bX.push(bP);
continue;
}var by=[];
var bR={table:bD};
bR.styleHeight=bS;
bR.row=bE;
bR.selected=bH;
bR.focusedRow=bK;
bR.rowData=bA.getRowData(bE);

if(!bR.rowData){ca=true;
}by.push(q);
var bO=bL.getRowAttributes(bR);

if(bO){by.push(bO);
}var bN=bL.getRowClass(bR);

if(bN){by.push(r,bN,g);
}var bM=bL.createRowStyle(bR);
bM+=m+bL.getRowHeightStyle(bS)+s;

if(bM){by.push(D,bM,g);
}by.push(v);
var bW=false;

for(x=0;x<bU&&!bW;x++){var bI=bz[x];

for(var bT in bI){bR[bT]=bI[bT];
}var bY=bR.col;
bR.value=bA.getValue(bY,bE);
var bJ=bB.getDataCellRenderer(bY);
bR.style=bJ.getDefaultCellStyle();
bW=bJ.createDataCellHtml(bR,by)||false;
}by.push(h);
var bQ=by.join(k);
this.__oJ(bE,bQ,bH,bK);
bX.push(bQ);
}this.fireDataEvent(a,ca);
return bX.join(k);
},_scrollContent:function(cb){var cc=this.getContentElement().getDomElement();

if(!(cc&&cc.firstChild)){this._updateAllRows();
return;
}var cl=cc.firstChild;
var cd=cl.childNodes;
var cj=this.getVisibleRowCount();
var ci=this.getFirstVisibleRow();
var cg=this.getTable().getTableModel();
var cm=0;
cm=cg.getRowCount();
if(ci+cj>cm){this._updateAllRows();
return;
}var cn=cb<0?cj+cb:0;
var ce=cb<0?0:cj-cb;

for(i=Math.abs(cb)-1;i>=0;i--){var ch=cd[cn];

try{cl.removeChild(ch);
}catch(co){break;
}}if(!this.__oF){this.__oF=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__oF.innerHTML=ck;
var cf=this.__oF.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__nP!==null){this._updateRowStyles(this.__nP-cb);
this._updateRowStyles(this.__nP);
}this.fireEvent(f);
},_updateAllRows:function(){var cs=this.getContentElement().getDomElement();

if(!cs){this.addListenerOnce(t,arguments.callee,this);
return;
}var cy=this.getTable();
var cv=cy.getTableModel();
var cx=this.getPaneScroller().getTablePaneModel();
var cw=cx.getColumnCount();
var cp=cy.getRowHeight();
var ct=this.getFirstVisibleRow();
var cq=this.getVisibleRowCount();
var cz=cv.getRowCount();

if(ct+cq>cz){cq=Math.max(0,cz-ct);
}var cr=cx.getTotalWidth();
var cu;
if(cq>0){cu=[l,A,(cy.getForceLineHeight()?u+cp+p:k),c,n,this._getRowsHtml(ct,cq),d];
}else{cu=[];
}var cA=cu.join(k);
cs.innerHTML=cA;
this.setWidth(cr);
this.__oD=cw;
this.__nS=cq;
this.fireEvent(f);
}},destruct:function(){this.__oF=this.__oC=this.__oE=null;
}});
})();
(function(){var e="first",d="last",c="hovered",b="__oC",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__jv=new qx.ui.core.Blocker(this);
this.__oC=f;
},members:{__oC:null,__oK:null,__oL:null,__jv:null,getPaneScroller:function(){return this.__oC;
},getTable:function(){return this.__oC.getTable();
},getBlocker:function(){return this.__jv;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(g,h,i){var j=this.getHeaderWidgetAtColumn(g);

if(j!=null){j.setWidth(h);
}},setMouseOverColumn:function(k){if(k!=this.__oL){if(this.__oL!=null){var l=this.getHeaderWidgetAtColumn(this.__oL);

if(l!=null){l.removeState(c);
}}
if(k!=null){this.getHeaderWidgetAtColumn(k).addState(c);
}this.__oL=k;
}},getHeaderWidgetAtColumn:function(m){var n=this.getPaneScroller().getTablePaneModel().getX(m);
return this._getChildren()[n];
},showColumnMoveFeedback:function(o,x){var s=this.getContainerLocation();

if(this.__oK==null){var y=this.getTable();
var p=this.getPaneScroller().getTablePaneModel().getX(o);
var r=this._getChildren()[p];
var t=y.getTableModel();
var v=y.getTableColumnModel();
var w={xPos:p,col:o,name:t.getColumnName(o),table:y};
var u=v.getHeaderCellRenderer(o);
var q=u.createHeaderCell(w);
var z=r.getBounds();
q.setWidth(z.width);
q.setHeight(z.height);
q.setZIndex(1000000);
q.setOpacity(0.8);
q.setLayoutProperties({top:s.top});
this.getApplicationRoot().add(q);
this.__oK=q;
}this.__oK.setLayoutProperties({left:s.left+x});
this.__oK.show();
},hideColumnMoveFeedback:function(){if(this.__oK!=null){this.__oK.destroy();
this.__oK=null;
}},isShowingColumnMoveFeedback:function(){return this.__oK!=null;
},_updateContent:function(A){var K=this.getTable();
var E=K.getTableModel();
var H=K.getTableColumnModel();
var J=this.getPaneScroller().getTablePaneModel();
var M=this._getChildren();
var F=J.getColumnCount();
var I=E.getSortColumnIndex();
if(A){this._cleanUpCells();
}var B={};
B.sortedAscending=E.isSortAscending();

for(var x=0;x<F;x++){var D=J.getColumnAtX(x);

if(D===undefined){continue;
}var L=H.getColumnWidth(D);
var G=H.getHeaderCellRenderer(D);
B.xPos=x;
B.col=D;
B.name=E.getColumnName(D);
B.editable=E.isColumnEditable(D);
B.sorted=(D==I);
B.table=K;
var C=M[x];
if(C==null){C=G.createHeaderCell(B);
C.set({width:L});
this._add(C);
}else{G.updateHeaderCell(B,C);
}if(x===0){C.addState(e);
C.removeState(d);
}else if(x===F-1){C.removeState(e);
C.addState(d);
}else{C.removeState(e);
C.removeState(d);
}}},_cleanUpCells:function(){var O=this._getChildren();

for(var x=O.length-1;x>=0;x--){var N=O[x];
N.destroy();
}}},destruct:function(){this.__jv.dispose();
this._disposeObjects(b);
}});
})();
(function(){var o="Boolean",n="resize-line",m="mousedown",l="qx.event.type.Data",k="mouseup",j="qx.ui.table.pane.CellEvent",i="scroll",h="focus-indicator",g="excluded",d="scrollbar-y",bq="table-scroller-focus-indicator",bp="visible",bo="mousemove",bn="header",bm="editing",bl="click",bk="modelChanged",bj="scrollbar-x",bi="cellClick",bh="pane",v="__oU",w="__oT",t="mouseout",u="__oM",r="changeHorizontalScrollBarVisible",s="bottom",p="_applyScrollTimeout",q="changeScrollX",C="_applyTablePaneModel",D="Integer",M="dblclick",J="dataEdited",U="__oO",P="mousewheel",bd="interval",ba="__oR",F="qx.ui.table.pane.Scroller",bg="_applyShowCellFocusIndicator",bf="y",be="__oQ",E="__oP",H="resize",I="vertical",L="changeScrollY",N="appear",Q="table-scroller",W="beforeSort",bc="cellDblclick",y="__it",z="__oN",G="horizontal",T="losecapture",S="contextmenu",R="col-resize",Y="disappear",X="_applyVerticalScrollBarVisible",O="_applyHorizontalScrollBarVisible",V="os.scrollBarOverlayed",a="cellContextmenu",bb="close",A="changeTablePaneModel",B="__oS",K="x",b="qx.ui.table.pane.Model",c="changeVerticalScrollBarVisible";
qx.Class.define(F,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(br){qx.ui.core.Widget.call(this);
this.__mi=br;
var bs=new qx.ui.layout.Grid();
bs.setColumnFlex(0,1);
bs.setRowFlex(1,1);
this._setLayout(bs);
this.__oM=this._showChildControl(bn);
this.__oN=this._showChildControl(bh);
this.__oO=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__oO,{row:0,column:0,colSpan:2});
this.__oP=new qx.ui.table.pane.Clipper();
this.__oP.add(this.__oM);
this.__oP.addListener(T,this._onChangeCaptureHeader,this);
this.__oP.addListener(bo,this._onMousemoveHeader,this);
this.__oP.addListener(m,this._onMousedownHeader,this);
this.__oP.addListener(k,this._onMouseupHeader,this);
this.__oP.addListener(bl,this._onClickHeader,this);
this.__oO.add(this.__oP,{flex:1});
this.__oQ=new qx.ui.table.pane.Clipper();
this.__oQ.add(this.__oN);
this.__oQ.addListener(P,this._onMousewheel,this);
this.__oQ.addListener(bo,this._onMousemovePane,this);
this.__oQ.addListener(m,this._onMousedownPane,this);
this.__oQ.addListener(k,this._onMouseupPane,this);
this.__oQ.addListener(bl,this._onClickPane,this);
this.__oQ.addListener(S,this._onContextMenu,this);
this.__oQ.addListener(M,this._onDblclickPane,this);
this.__oQ.addListener(H,this._onResizePane,this);
if(qx.core.Environment.get(V)){this.__oR=new qx.ui.container.Composite();
this.__oR.setLayout(new qx.ui.layout.Canvas());
this.__oR.add(this.__oQ,{edge:0});
this._add(this.__oR,{row:1,column:0});
}else{this._add(this.__oQ,{row:1,column:0});
}this.__oS=this._showChildControl(bj);
this.__oT=this._showChildControl(d);
this.__oU=this.getChildControl(h);
this.initShowCellFocusIndicator();
this.getChildControl(n).hide();
this.addListener(t,this._onMouseout,this);
this.addListener(N,this._onAppear,this);
this.addListener(Y,this._onDisappear,this);
this.__it=new qx.event.Timer();
this.__it.addListener(bd,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":l,"changeScrollX":l,"cellClick":j,"cellDblclick":j,"cellContextmenu":j,"beforeSort":l},properties:{horizontalScrollBarVisible:{check:o,init:false,apply:O,event:r},verticalScrollBarVisible:{check:o,init:false,apply:X,event:c},tablePaneModel:{check:b,apply:C,event:A},liveResize:{check:o,init:false},focusCellOnMouseMove:{check:o,init:false},selectBeforeFocus:{check:o,init:false},showCellFocusIndicator:{check:o,init:true,apply:bg},contextMenuFromDataCellsOnly:{check:o,init:true},resetSelectionOnHeaderClick:{check:o,init:true},scrollTimeout:{check:D,init:100,apply:p},appearance:{refine:true,init:Q}},members:{__nS:null,__mi:null,__oV:null,__oW:null,__oX:null,__oY:null,__pa:null,__pb:null,__pc:null,__pd:null,__pe:null,__pf:null,__pg:null,__ph:null,__pi:false,__pj:null,__pk:null,__pl:null,__nO:null,__nP:null,__pm:null,__pn:null,__po:null,__oS:null,__oT:null,__oM:null,__oP:null,__oN:null,__oQ:null,__oR:null,__oU:null,__oO:null,__it:null,getPaneInsetRight:function(){var bv=this.getTopRightWidget();
var bw=bv&&bv.isVisible()&&bv.getBounds()?bv.getBounds().width+bv.getMarginLeft()+bv.getMarginRight():0;
var bu=this.__oT;
var bt=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth()+bu.getMarginLeft()+bu.getMarginRight():0;
return Math.max(bw,bt);
},setPaneWidth:function(bx){if(this.isVerticalScrollBarVisible()){bx+=this.getPaneInsetRight();
}this.setWidth(bx);
},_createChildControlImpl:function(by,bz){var bA;

switch(by){case bn:bA=(this.getTable().getNewTablePaneHeader())(this);
break;
case bh:bA=(this.getTable().getNewTablePane())(this);
break;
case h:bA=new qx.ui.table.pane.FocusIndicator(this);
bA.setUserBounds(0,0,0,0);
bA.setZIndex(1000);
bA.addListener(k,this._onMouseupFocusIndicator,this);
this.__oQ.add(bA);
bA.show();
bA.setDecorator(null);
break;
case n:bA=new qx.ui.core.Widget();
bA.setUserBounds(0,0,0,0);
bA.setZIndex(1000);
this.__oQ.add(bA);
break;
case bj:bA=this._createScrollBar(G).set({alignY:s});
bA.addListener(i,this._onScrollX,this);

if(this.__oR!=null){bA.setMinHeight(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this.__oR.add(bA,{bottom:0,right:0,left:0});
}else{this._add(bA,{row:2,column:0});
}break;
case d:bA=this._createScrollBar(I);
bA.addListener(i,this._onScrollY,this);

if(this.__oR!=null){this.__oR.add(bA,{right:0,bottom:0,top:0});
}else{this._add(bA,{row:1,column:1});
}break;
}return bA||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,by);
},_applyHorizontalScrollBarVisible:function(bB,bC){this.__oS.setVisibility(bB?bp:g);
},_applyVerticalScrollBarVisible:function(bD,bE){this.__oT.setVisibility(bD?bp:g);
},_applyTablePaneModel:function(bF,bG){if(bG!=null){bG.removeListener(bk,this._onPaneModelChanged,this);
}bF.addListener(bk,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bH,bI){if(bH){this.__oU.setDecorator(bq);
this._updateFocusIndicator();
}else{if(this.__oU){this.__oU.setDecorator(null);
}}},getScrollY:function(){return this.__oT.getPosition();
},setScrollY:function(scrollY,bJ){this.__oT.scrollTo(scrollY);

if(bJ){this._updateContent();
}},getScrollX:function(){return this.__oS.getPosition();
},setScrollX:function(scrollX){this.__oS.scrollTo(scrollX);
},getTable:function(){return this.__mi;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bK,bL){this.__oM.setColumnWidth(bK,bL);
this.__oN.setColumnWidth(bK,bL);
var bM=this.getTablePaneModel();
var x=bM.getX(bK);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__oM.onColOrderChanged();
this.__oN.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bN,bO,bP,bQ){this.__oN.onTableModelDataChanged(bN,bO,bP,bQ);
var bR=this.getTable().getTableModel().getRowCount();

if(bR!=this.__nS){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bR){if(bR==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bR-1);
}}this.__nS=bR;
}},onSelectionChanged:function(){this.__oN.onSelectionChanged();
},onFocusChanged:function(){this.__oN.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__oM.onTableModelMetaDataChanged();
this.__oN.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__oM.onPaneModelChanged();
this.__oN.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__oM._updateContent();
this.__mi._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bV=this.__oQ.getInnerSize();

if(!bV){return ;
}var bT=this.getTablePaneModel().getTotalWidth();
var bU=this.__oS;

if(bV.width<bT){var bS=Math.max(0,bT-bV.width);
bU.setMaximum(bS);
bU.setKnobFactor(bV.width/bT);
var bW=bU.getPosition();
bU.setPosition(Math.min(bW,bS));
}else{bU.setMaximum(0);
bU.setKnobFactor(1);
bU.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cf=this.__oQ.getInnerSize();

if(!cf){return ;
}var cd=this.getTable().getTableModel();
var bY=cd.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bY+=1;
}var bX=this.getTable().getRowHeight();
var cb=bY*bX;
var ce=this.__oT;

if(cf.height<cb){var ca=Math.max(0,cb-cf.height);
ce.setMaximum(ca);
ce.setKnobFactor(cf.height/cb);
var cc=ce.getPosition();
ce.setPosition(Math.min(cc,ca));
}else{ce.setMaximum(0);
ce.setKnobFactor(1);
ce.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var cg=e.getData();
this.fireDataEvent(q,cg,e.getOldData());
this.__oP.scrollToX(cg);
this.__oQ.scrollToX(cg);
},_onScrollY:function(e){this.fireDataEvent(L,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var ch=this.getTable();

if(!ch.getEnabled()){return;
}var ck=e.getWheelDelta(bf);
if(ck>0&&ck<1){ck=1;
}else if(ck<0&&ck>-1){ck=-1;
}this.__oT.scrollBySteps(ck);
ck=e.getWheelDelta(K);
if(ck>0&&ck<1){ck=1;
}else if(ck<0&&ck>-1){ck=-1;
}this.__oS.scrollBySteps(ck);
if(this.__pk&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__pk,this.__pl);
}var cj=this.__oT.getPosition();
var ci=this.__oT.getMaximum();
if(ck<0&&cj<=0||ck>0&&cj>=ci){return;
}e.stop();
},__pp:function(cl){var cq=this.getTable();
var cr=this.__oM.getHeaderWidgetAtColumn(this.__pe);
var cm=cr.getSizeHint().minWidth;
var co=Math.max(cm,this.__pg+cl-this.__pf);

if(this.getLiveResize()){var cn=cq.getTableColumnModel();
cn.setColumnWidth(this.__pe,co,true);
}else{this.__oM.setColumnWidth(this.__pe,co,true);
var cp=this.getTablePaneModel();
this._showResizeLine(cp.getColumnLeft(this.__pe)+co);
}this.__pf+=co-this.__pg;
this.__pg=co;
},__pq:function(cs){var ct=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__oM.isShowingColumnMoveFeedback()||cs>this.__pd+ct||cs<this.__pd-ct){this.__pa+=cs-this.__pd;
this.__oM.showColumnMoveFeedback(this.__oY,this.__pa);
var cu=this.__mi.getTablePaneScrollerAtPageX(cs);

if(this.__pc&&this.__pc!=cu){this.__pc.hideColumnMoveFeedback();
}
if(cu!=null){this.__pb=cu.showColumnMoveFeedback(cs);
}else{this.__pb=null;
}this.__pc=cu;
this.__pd=cs;
}},_onMousemoveHeader:function(e){var cB=this.getTable();

if(!cB.getEnabled()){return;
}var cC=false;
var cv=null;
var cz=e.getDocumentLeft();
var cA=e.getDocumentTop();
this.__pk=cz;
this.__pl=cA;

if(this.__pe!=null){this.__pp(cz);
cC=true;
e.stopPropagation();
}else if(this.__oY!=null){this.__pq(cz);
e.stopPropagation();
}else{var cw=this._getResizeColumnForPageX(cz);

if(cw!=-1){cC=true;
}else{var cy=cB.getTableModel();
var cD=this._getColumnForPageX(cz);

if(cD!=null&&cy.isColumnSortable(cD)){cv=cD;
}}}var cx=cC?R:null;
this.getApplicationRoot().setGlobalCursor(cx);
this.setCursor(cx);
this.__oM.setMouseOverColumn(cv);
},_onMousemovePane:function(e){var cE=this.getTable();

if(!cE.getEnabled()){return;
}var cG=e.getDocumentLeft();
var cH=e.getDocumentTop();
this.__pk=cG;
this.__pl=cH;
var cF=this._getRowForPagePos(cG,cH);

if(cF!=null&&this._getColumnForPageX(cG)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cG,cH);
}}this.__oM.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cJ=e.getDocumentLeft();
var cK=this._getResizeColumnForPageX(cJ);

if(cK!=-1){this._startResizeHeader(cK,cJ);
e.stop();
}else{var cI=this._getColumnForPageX(cJ);

if(cI!=null){this._startMoveHeader(cI,cJ);
e.stop();
}}},_startResizeHeader:function(cL,cM){var cN=this.getTable().getTableColumnModel();
this.__pe=cL;
this.__pf=cM;
this.__pg=cN.getColumnWidth(this.__pe);
this.__oP.capture();
},_startMoveHeader:function(cO,cP){this.__oY=cO;
this.__pd=cP;
this.__pa=this.getTablePaneModel().getColumnLeft(cO);
this.__oP.capture();
},_onMousedownPane:function(e){var cT=this.getTable();

if(!cT.getEnabled()){return;
}
if(cT.isEditing()){cT.stopEditing();
}var cQ=e.getDocumentLeft();
var cS=e.getDocumentTop();
var cV=this._getRowForPagePos(cQ,cS);
var cU=this._getColumnForPageX(cQ);

if(cV!==null){this.__ph={row:cV,col:cU};
this.__pi=false;
var cR=this.getSelectBeforeFocus();

if(cR){cT.getSelectionManager().handleMouseDown(cV,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cQ,cS);
}
if(!cR){cT.getSelectionManager().handleMouseDown(cV,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__ph&&!this.__pi&&!this.isEditing()&&this.__oU.getRow()==this.__ph.row&&this.__oU.getColumn()==this.__ph.col){this.fireEvent(bi,qx.ui.table.pane.CellEvent,[this,e,this.__ph.row,this.__ph.col],true);
this.__pi=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__pe!=null){this._stopResizeHeader();
}
if(this.__oY!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cW=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cW.setColumnWidth(this.__pe,this.__pg,true);
}this.__pe=null;
this.__oP.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var cX=this.__pm.getBounds().height;
this.__pm.setUserBounds(0,0,this.__pg,cX);
}},_stopMoveHeader:function(){var dd=this.getTable().getTableColumnModel();
var de=this.getTablePaneModel();
this.__oM.hideColumnMoveFeedback();

if(this.__pc){this.__pc.hideColumnMoveFeedback();
}
if(this.__pb!=null){var dg=de.getFirstColumnX()+de.getX(this.__oY);
var dc=this.__pb;

if(dc!=dg&&dc!=dg+1){var df=dd.getVisibleColumnAtX(dg);
var db=dd.getVisibleColumnAtX(dc);
var da=dd.getOverallX(df);
var cY=(db!=null)?dd.getOverallX(db):dd.getOverallColumnCount();

if(cY>da){cY--;
}dd.moveColumn(da,cY);
this._updateFocusIndicator();
}}this.__oY=null;
this.__pb=null;
this.__oP.releaseCapture();
},_onMouseupPane:function(e){var dh=this.getTable();

if(!dh.getEnabled()){return;
}var di=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(di!=-1&&di!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){dh.getSelectionManager().handleMouseUp(di,e);
}},_onMouseupHeader:function(e){var dj=this.getTable();

if(!dj.getEnabled()){return;
}
if(this.__pe!=null){this._stopResizeHeader();
this.__pj=true;
e.stop();
}else if(this.__oY!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__pj){this.__pj=false;
return;
}var dp=this.getTable();

if(!dp.getEnabled()){return;
}var dm=dp.getTableModel();
var dn=e.getDocumentLeft();
var dl=this._getResizeColumnForPageX(dn);

if(dl==-1){var ds=this._getColumnForPageX(dn);

if(ds!=null&&dm.isColumnSortable(ds)){var dk=dm.getSortColumnIndex();
var dq=(ds!=dk)?true:!dm.isSortAscending();
var dr={column:ds,ascending:dq,clickEvent:e};

if(this.fireDataEvent(W,dr,null,true)){if(dp.isEditing()){dp.stopEditing();
}dm.sortByColumn(ds,dq);

if(this.getResetSelectionOnHeaderClick()){dp.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var dt=this.getTable();

if(!dt.getEnabled()){return;
}var dw=e.getDocumentLeft();
var dx=e.getDocumentTop();
var du=this._getRowForPagePos(dw,dx);
var dv=this._getColumnForPageX(dw);

if(du!=null&&dv!=null){dt.getSelectionManager().handleClick(du,e);

if(this.__oU.isHidden()||(this.__ph&&!this.__pi&&!this.isEditing()&&du==this.__ph.row&&dv==this.__ph.col)){this.fireEvent(bi,qx.ui.table.pane.CellEvent,[this,e,du,dv],true);
this.__pi=true;
}}},_onContextMenu:function(e){var dB=e.getDocumentLeft();
var dC=e.getDocumentTop();
var dz=this._getRowForPagePos(dB,dC);
var dA=this._getColumnForPageX(dB);
if(dz===null&&this.getContextMenuFromDataCellsOnly()){return;
}
if(!this.getShowCellFocusIndicator()||dz===null||(this.__ph&&dz==this.__ph.row&&dA==this.__ph.col)){this.fireEvent(a,qx.ui.table.pane.CellEvent,[this,e,dz,dA],true);
var dy=this.getTable().getContextMenu();

if(dy){if(dy.getChildren().length>0){dy.openAtMouse(e);
}else{dy.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dE=e.getDocumentLeft();
var dF=e.getDocumentTop();
this._focusCellAtPagePos(dE,dF);
this.startEditing();
var dD=this._getRowForPagePos(dE,dF);

if(dD!=-1&&dD!=null){this.fireEvent(bc,qx.ui.table.pane.CellEvent,[this,e,dD],true);
}},_onMouseout:function(e){var dG=this.getTable();

if(!dG.getEnabled()){return;
}if(this.__pe==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__oM.setMouseOverColumn(null);
if(this.getFocusCellOnMouseMove()){this.__mi.setFocusedCell();
}},_showResizeLine:function(x){var dI=this._showChildControl(n);
var dH=dI.getWidth();
var dJ=this.__oQ.getBounds();
dI.setUserBounds(x-Math.round(dH/2),0,dH,dJ.height);
},_hideResizeLine:function(){this._excludeChildControl(n);
},showColumnMoveFeedback:function(dK){var dT=this.getTablePaneModel();
var dS=this.getTable().getTableColumnModel();
var dN=this.__oN.getContainerLocation().left;
var dR=dT.getColumnCount();
var dO=0;
var dM=0;
var dW=dN;

for(var dL=0;dL<dR;dL++){var dP=dT.getColumnAtX(dL);
var dU=dS.getColumnWidth(dP);

if(dK<dW+dU/2){break;
}dW+=dU;
dO=dL+1;
dM=dW-dN;
}var dQ=this.__oQ.getContainerLocation().left;
var dV=this.__oQ.getBounds().width;
var scrollX=dQ-dN;
dM=qx.lang.Number.limit(dM,scrollX+2,scrollX+dV-1);
this._showResizeLine(dM);
return dT.getFirstColumnX()+dO;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dX,dY){var eb=this._getRowForPagePos(dX,dY);

if(eb!=-1&&eb!=null){var ea=this._getColumnForPageX(dX);
this.__mi.setFocusedCell(ea,eb);
}},setFocusedCell:function(ec,ed){if(!this.isEditing()){this.__oN.setFocusedCell(ec,ed,this.__oW);
this.__nO=ec;
this.__nP=ed;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__nO;
},getFocusedRow:function(){return this.__nP;
},scrollCellVisible:function(ee,ef){var ep=this.getTablePaneModel();
var eg=ep.getX(ee);

if(eg!=-1){var em=this.__oQ.getInnerSize();

if(!em){return;
}var en=this.getTable().getTableColumnModel();
var ej=ep.getColumnLeft(ee);
var eq=en.getColumnWidth(ee);
var eh=this.getTable().getRowHeight();
var er=ef*eh;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var eo=Math.min(ej,ej+eq-em.width);
var el=ej;
this.setScrollX(Math.max(eo,Math.min(el,scrollX)));
var ei=er+eh-em.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){ei+=eh;
}var ek=er;
this.setScrollY(Math.max(ei,Math.min(ek,scrollY)),true);
}},isEditing:function(){return this.__pm!=null;
},startEditing:function(){var ew=this.getTable();
var eu=ew.getTableModel();
var ey=this.__nO;

if(!this.isEditing()&&(ey!=null)&&eu.isColumnEditable(ey)){var ez=this.__nP;
var es=this.getTablePaneModel().getX(ey);
var et=eu.getValue(ey,ez);
this.scrollCellVisible(es,ez);
this.__pn=ew.getTableColumnModel().getCellEditorFactory(ey);
var ev={col:ey,row:ez,xPos:es,value:et,table:ew};
this.__pm=this.__pn.createCellEditor(ev);
if(this.__pm===null){return false;
}else if(this.__pm instanceof qx.ui.window.Window){this.__pm.setModal(true);
this.__pm.setShowClose(false);
this.__pm.addListener(bb,this._onCellEditorModalWindowClose,this);
var f=ew.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__pm,ev);
}this.__pm.open();
}else{var ex=this.__oU.getInnerSize();
this.__pm.setUserBounds(0,0,ex.width,ex.height);
this.__oU.addListener(m,function(e){this.__ph={row:this.__nP,col:this.__nO};
e.stopPropagation();
},this);
this.__oU.add(this.__pm);
this.__oU.addState(bm);
this.__oU.setKeepActive(false);
this.__oU.setDecorator(bq);
this.__pm.focus();
this.__pm.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__oU.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var eB=this.__pn.getCellEditorValue(this.__pm);
var eA=this.getTable().getTableModel().getValue(this.__nO,this.__nP);
this.getTable().getTableModel().setValue(this.__nO,this.__nP,eB);
this.__mi.focus();
this.__mi.fireDataEvent(J,{row:this.__nP,col:this.__nO,oldValue:eA,value:eB});
}},cancelEditing:function(){if(this.isEditing()&&!this.__pm.pendingDispose){if(this._cellEditorIsModalWindow){this.__pm.destroy();
this.__pm=null;
this.__pn=null;
this.__pm.pendingDispose=true;
}else{this.__oU.removeState(bm);
this.__oU.setKeepActive(true);
this.__pm.destroy();
this.__pm=null;
this.__pn=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(eC){var eF=this.getTable().getTableColumnModel();
var eG=this.getTablePaneModel();
var eE=eG.getColumnCount();
var eI=this.__oN.getContentLocation().left;

for(var x=0;x<eE;x++){var eD=eG.getColumnAtX(x);
var eH=eF.getColumnWidth(eD);
eI+=eH;

if(eC<eI){return eD;
}}return null;
},_getResizeColumnForPageX:function(eJ){var eN=this.getTable().getTableColumnModel();
var eO=this.getTablePaneModel();
var eM=eO.getColumnCount();
var eQ=this.__oM.getContainerLocation().left;
var eK=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eM;x++){var eL=eO.getColumnAtX(x);
var eP=eN.getColumnWidth(eL);
eQ+=eP;

if(eJ>=(eQ-eK)&&eJ<=(eQ+eK)){return eL;
}}return -1;
},_getRowForPagePos:function(eR,eS){var eT=this.__oN.getContentLocation();

if(eR<eT.left||eR>eT.right){return null;
}
if(eS>=eT.top&&eS<=eT.bottom){var eU=this.getTable().getRowHeight();
var scrollY=this.__oT.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eU)*eU;
}var eX=scrollY+eS-eT.top;
var fa=Math.floor(eX/eU);
var eY=this.getTable().getTableModel();
var eV=eY.getRowCount();
return (fa<eV)?fa:null;
}var eW=this.__oM.getContainerLocation();

if(eS>=eW.top&&eS<=eW.bottom&&eR<=eW.right){return -1;
}return null;
},setTopRightWidget:function(fb){var fc=this.__po;

if(fc!=null){this.__oO.remove(fc);
}
if(fb!=null){this.__oO.add(fb);
}this.__po=fb;
},getTopRightWidget:function(){return this.__po;
},getHeader:function(){return this.__oM;
},getTablePane:function(){return this.__oN;
},getVerticalScrollBarWidth:function(){var fd=this.__oT;
return fd.isVisible()?(fd.getSizeHint().width||0):0;
},getNeededScrollBars:function(fe,ff){var fo=this.__oT;
var fs=fo.getSizeHint().width+fo.getMarginLeft()+fo.getMarginRight();
var fu=this.__oS;
var ft=fu.getSizeHint().height+fu.getMarginTop()+fu.getMarginBottom();
var fm=this.__oQ.getInnerSize();
var fg=fm?fm.width:0;

if(this.getVerticalScrollBarVisible()){fg+=fs;
}var fr=fm?fm.height:0;

if(this.getHorizontalScrollBarVisible()){fr+=ft;
}var fn=this.getTable().getTableModel();
var fk=fn.getRowCount();
var fh=this.getTablePaneModel().getTotalWidth();
var fp=this.getTable().getRowHeight()*fk;
var fj=false;
var fq=false;

if(fh>fg){fj=true;

if(fp>fr-ft){fq=true;
}}else if(fp>fr){fq=true;

if(!ff&&(fh>fg-fs)){fj=true;
}}var fl=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var fi=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((fe||fj)?fl:0)|((ff||!fq)?0:fi);
},getPaneClipper:function(){return this.__oQ;
},_applyScrollTimeout:function(fv,fw){this._startInterval(fv);
},_startInterval:function(fx){this.__it.setInterval(fx);
this.__it.start();
},_stopInterval:function(){this.__it.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__oW&&!this.__oN._layoutPending){this.__oW=false;
this._updateContent();
}}),_updateContent:function(){var fC=this.__oQ.getInnerSize();

if(!fC){return;
}var fF=fC.height;
var scrollX=this.__oS.getPosition();
var scrollY=this.__oT.getPosition();
var fz=this.getTable().getRowHeight();
var fA=Math.floor(scrollY/fz);
var fE=this.__oN.getFirstVisibleRow();
this.__oN.setFirstVisibleRow(fA);
var fB=Math.ceil(fF/fz);
var fy=0;
var fD=this.getTable().getKeepFirstVisibleRowComplete();

if(!fD){fB++;
fy=scrollY%fz;
}this.__oN.setVisibleRowCount(fB);

if(fA!=fE){this._updateFocusIndicator();
}this.__oQ.scrollToX(scrollX);
if(!fD){this.__oQ.scrollToY(fy);
}},_updateFocusIndicator:function(){var fG=this.getTable();

if(!fG.getEnabled()){return;
}this.__oU.moveToCell(this.__nO,this.__nP);
}},destruct:function(){this._stopInterval();
var fH=this.getTablePaneModel();

if(fH){fH.dispose();
}this.__ph=this.__po=this.__mi=null;
this._disposeObjects(B,w,E,be,v,u,z,U,y,ba);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);
this.__pr=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__pr:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(!this.__pr.getShowCellFocusIndicator()&&!this.__pr.getTable().getTableModel().isColumnEditable(j)){this.exclude();
return;
}else{this.show();
}
if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__pr.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__pr.getTable();
var o=q.getTableColumnModel();
var p=this.__pr.getTablePaneModel();
var n=this.__pr.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__pr=null;
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
qx.Class.define(a,{statics:{isInRange:function(b,c,d){return b>=c&&b<=d;
},isBetweenRange:function(e,f,g){return e>f&&e<g;
},limit:function(h,i,j){if(j!=null&&h>j){return j;
}else if(i!=null&&h<i){return i;
}else{return h;
}}}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(b){this.assertInterface(b,qx.ui.window.IDesktop);
},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);
},sendToBack:function(f){this.assertInstance(f,qx.ui.window.Window);
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var b="__ps",a="qx.ui.window.Manager";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__ps:null,setDesktop:function(c){this.__ps=c;
this.updateStack();
},getDesktop:function(){return this.__ps;
},changeActiveWindow:function(d,e){if(d){this.bringToFront(d);
d.setActive(true);
}
if(e){e.resetActive();
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__ps.forceUnblockContent();
var f=this.__ps.getWindows();
var h=this._minZIndex;
var m=h+f.length*2;
var j=h+f.length*4;
var k=null;

for(var i=0,l=f.length;i<l;i++){var g=f[i];
if(!g.isVisible()){continue;
}k=k||g;
if(g.isModal()){g.setZIndex(j);
this.__ps.blockContent(j-1);
j+=2;
k=g;
}else if(g.isAlwaysOnTop()){g.setZIndex(m);
m+=2;
}else{g.setZIndex(h);
h+=2;
}if(!k.isModal()&&g.isActive()||g.getZIndex()>k.getZIndex()){k=g;
}}this.__ps.setActiveWindow(k);
},bringToFront:function(n){var o=this.__ps.getWindows();
var p=qx.lang.Array.remove(o,n);

if(p){o.push(n);
this.updateStack();
}},sendToBack:function(q){var r=this.__ps.getWindows();
var s=qx.lang.Array.remove(r,q);

if(s){r.unshift(q);
this.updateStack();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var l="move",k="Boolean",j="mouseup",i="mousedown",h="losecapture",g="__pu",f="qx.ui.core.MMovable",d="__pt",c="mousemove",b="maximized",a="move-frame";
qx.Mixin.define(f,{properties:{movable:{check:k,init:true},useMoveFrame:{check:k,init:false}},members:{__pt:null,__pu:null,__pv:null,__pw:null,__px:null,__py:null,__pz:null,__pA:false,__pB:null,__pC:0,_activateMoveHandle:function(m){if(this.__pt){throw new Error("The move handle could not be redefined!");
}this.__pt=m;
m.addListener(i,this._onMoveMouseDown,this);
m.addListener(j,this._onMoveMouseUp,this);
m.addListener(c,this._onMoveMouseMove,this);
m.addListener(h,this.__pG,this);
},__pD:function(){var n=this.__pu;

if(!n){n=this.__pu=new qx.ui.core.Widget();
n.setAppearance(a);
n.exclude();
qx.core.Init.getApplication().getRoot().add(n);
}return n;
},__pE:function(){var location=this.getContainerLocation();
var p=this.getBounds();
var o=this.__pD();
o.setUserBounds(location.left,location.top,p.width,p.height);
o.show();
o.setZIndex(this.getZIndex()+1);
},__pF:function(e){var r=this.__pv;
var u=Math.max(r.left,Math.min(r.right,e.getDocumentLeft()));
var t=Math.max(r.top,Math.min(r.bottom,e.getDocumentTop()));
var q=this.__pw+u;
var s=this.__px+t;
return {viewportLeft:q,viewportTop:s,parentLeft:q-this.__py,parentTop:s-this.__pz};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(b)){return;
}var parent=this.getLayoutParent();
var w=parent.getContentLocation();
var x=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__pB=parent.getBlockerColor();
this.__pC=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
this.__pA=true;
}}this.__pv={left:w.left,top:w.top,right:w.left+x.width,bottom:w.top+x.height};
var v=this.getContainerLocation();
this.__py=w.left;
this.__pz=w.top;
this.__pw=v.left-e.getDocumentLeft();
this.__px=v.top-e.getDocumentTop();
this.addState(l);
this.__pt.capture();
if(this.getUseMoveFrame()){this.__pE();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(l)){return;
}var y=this.__pF(e);

if(this.getUseMoveFrame()){this.__pD().setDomPosition(y.viewportLeft,y.viewportTop);
}else{this.setDomPosition(y.parentLeft,y.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__pA){parent.unblockContent();
parent.setBlockerColor(this.__pB);
parent.setBlockerOpacity(this.__pC);
this.__pB=null;
this.__pC=0;
this.__pA=false;
}}this.__pt.releaseCapture();
var z=this.__pF(e);
this.setLayoutProperties({left:z.parentLeft,top:z.parentTop});
if(this.getUseMoveFrame()){this.__pD().exclude();
}e.stopPropagation();
},__pG:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
if(this.getUseMoveFrame()){this.__pD().exclude();
}}},destruct:function(){this._disposeObjects(g,d);
this.__pv=null;
}});
})();
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){var A=this.getContainerElement();
A.addListener(i,this.__pU,this,true);
A.addListener(q,this.__pV,this);
A.addListener(x,this.__pX,this);
A.addListener(s,this.__pY,this);
A.addListener(o,this.__pW,this);
var B=this.getContainerElement().getDomElement();

if(B==null){B=window;
}this.__pH=qx.event.Registration.getManager(B).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__pH:null,__pI:null,__pJ:null,__pK:null,__pL:null,__pM:null,__pN:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,_getResizeFrame:function(){var C=this.__pI;

if(!C){C=this.__pI=new qx.ui.core.Widget();
C.setAppearance(p);
C.exclude();
qx.core.Init.getApplication().getRoot().add(C);
}return C;
},__pO:function(){var location=this.__pR();
var D=this._getResizeFrame();
D.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);
D.show();
D.setZIndex(this.getZIndex()+1);
},__pP:function(e){var F=this.__pJ;
var G=this.getSizeHint();
var K=this.__pN;
var J=this.__pM;
var E=J.width;
var I=J.height;
var H=J.containerWidth;
var M=J.containerHeight;
var N=J.left;
var top=J.top;
var L;

if((F&this.RESIZE_TOP)||(F&this.RESIZE_BOTTOM)){L=Math.max(K.top,Math.min(K.bottom,e.getDocumentTop()))-this.__pL;

if(F&this.RESIZE_TOP){I-=L;
M-=L;
}else{I+=L;
M+=L;
}
if(M<G.minHeight){I+=(G.minHeight-M);
M=G.minHeight;
}else if(M>G.maxHeight){I-=(M-G.maxHeight);
M=G.maxHeight;
}
if(F&this.RESIZE_TOP){top+=J.containerHeight-M;
}}
if((F&this.RESIZE_LEFT)||(F&this.RESIZE_RIGHT)){L=Math.max(K.left,Math.min(K.right,e.getDocumentLeft()))-this.__pK;

if(F&this.RESIZE_LEFT){E-=L;
H-=L;
}else{E+=L;
H+=L;
}
if(H<G.minWidth){E+=(G.minWidth-H);
H=G.minWidth;
}else if(E>G.maxWidth){E-=(H-G.maxWidth);
H=G.maxWidth;
}
if(F&this.RESIZE_LEFT){N+=J.containerWidth-H;
}}return {viewportLeft:N,viewportTop:top,parentLeft:J.bounds.left+N-J.left,parentTop:J.bounds.top+top-J.top,containerWidth:H,containerHeight:M,width:E,height:I};
},__pQ:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__pR:function(){var O=this.getDecoratorElement();
if(O&&O.getDomElement()){return qx.bom.element.Location.get(O.getDomElement());
}else{return this.getContentLocation();
}},__pS:function(e){var location=this.__pR();
var P=this.getResizeSensitivity();
var S=e.getDocumentLeft();
var R=e.getDocumentTop();
var Q=this.__pT(location,S,R,P);
if(Q>0){Q=Q|this.__pT(location,S,R,P*2);
}this.__pJ=Q;
},__pT:function(location,T,U,V){var W=0;
if(this.getResizableTop()&&Math.abs(location.top-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(location.bottom-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_BOTTOM;
}if(this.getResizableLeft()&&Math.abs(location.left-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(location.right-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_RIGHT;
}return W;
},__pU:function(e){if(!this.__pJ||!this.getEnabled()){return;
}this.addState(j);
this.__pK=e.getDocumentLeft();
this.__pL=e.getDocumentTop();
var bb=this.getContainerLocation();
var X=this.__pR();
var ba=this.getBounds();
this.__pM={top:X.top,left:X.left,containerWidth:bb.right-bb.left,containerHeight:bb.bottom-bb.top,width:X.right-X.left,height:X.bottom-X.top,bounds:qx.lang.Object.clone(ba)};
var parent=this.getLayoutParent();
var bc=parent.getContentLocation();
var Y=parent.getBounds();
this.__pN={left:bc.left,top:bc.top,right:bc.left+Y.width,bottom:bc.top+Y.height};
if(this.getUseResizeFrame()){this.__pO();
}this.capture();
e.stop();
},__pV:function(e){if(!this.hasState(j)||!this.getEnabled()){return;
}if(this.getUseResizeFrame()){this._getResizeFrame().exclude();
}var bd=this.__pP(e);
this.setWidth(bd.containerWidth);
this.setHeight(bd.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bd.parentLeft,top:bd.parentTop});
}this.__pJ=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__pW:function(e){if(!this.__pJ){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this._getResizeFrame().exclude();
}},__pX:function(e){if(!this.getEnabled()){return;
}
if(this.hasState(j)){var bh=this.__pP(e);
if(this.getUseResizeFrame()){var bf=this._getResizeFrame();
bf.setUserBounds(bh.viewportLeft,bh.viewportTop,bh.width,bh.height);
}else{this.setWidth(bh.containerWidth);
this.setHeight(bh.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bh.parentLeft,top:bh.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)&&!this.__pH.isSessionActive()){this.__pS(e);
var bi=this.__pJ;
var bg=this.getApplicationRoot();

if(bi){var be=this.__pQ[bi];
this.setCursor(be);
bg.setGlobalCursor(be);
}else if(this.getCursor()){this.resetCursor();
bg.resetGlobalCursor();
}}},__pY:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__pI!=null&&!qx.core.ObjectRegistry.inShutDown){this.__pI.destroy();
this.__pI=null;
}this.__pH=null;
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="captionbar",h="_applyCaptionBarChange",g="maximize-button",f="minimize-button",d="close-button",c="maximized",b="restore-button",a="execute",V="title",U="icon",T="showStatusbar",S="pane",R="statusbar",Q="statusbar-text",P="qx.debug",O="String",N="normal",M="active",r="beforeClose",s="beforeMinimize",p="mousedown",q="window-resize-frame",n="changeStatus",o="changeIcon",l="excluded",m="dblclick",t="_applyActive",u="beforeRestore",B="qx.ui.window.IDesktop. All root widgets implement this interface.",z="minimize",F="changeModal",D="changeAlwaysOnTop",I="_applyShowStatusbar",H="_applyStatus",w="qx.ui.window.Window",L="Windows can only be added to widgets, which implement the interface ",K="changeCaption",J="focusout",v="beforeMaximize",x="maximize",y="restore",A="window",C="close",E="changeActive",G="minimized";
qx.Class.define(w,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(W,X){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(i);
this._createChildControl(S);
if(X!=null){this.setIcon(X);
}
if(W!=null){this.setCaption(W);
}this._updateCaptionBar();
this.addListener(p,this._onWindowMouseDown,this,true);
this.addListener(J,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
this._getResizeFrame().setAppearance(q);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":j,"close":j,"beforeMinimize":j,"minimize":j,"beforeMaximize":j,"maximize":j,"beforeRestore":j,"restore":j},properties:{appearance:{refine:true,init:A},visibility:{refine:true,init:l},focusable:{refine:true,init:true},active:{check:k,init:false,apply:t,event:E},alwaysOnTop:{check:k,init:false,event:D},modal:{check:k,init:false,event:F},caption:{apply:h,event:K,nullable:true},icon:{check:O,nullable:true,apply:h,event:o,themeable:true},status:{check:O,nullable:true,apply:H,event:n},showClose:{check:k,init:true,apply:h,themeable:true},showMaximize:{check:k,init:true,apply:h,themeable:true},showMinimize:{check:k,init:true,apply:h,themeable:true},allowClose:{check:k,init:true,apply:h},allowMaximize:{check:k,init:true,apply:h},allowMinimize:{check:k,init:true,apply:h},showStatusbar:{check:k,init:false,apply:I}},members:{__qa:null,__qb:null,getChildrenContainer:function(){return this.getChildControl(S);
},_forwardStates:{active:true,maximized:true,showStatusbar:true},setLayoutParent:function(parent){if(qx.core.Environment.get(P)){parent&&this.assertInterface(parent,qx.ui.window.IDesktop,L+B);
}qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);
},_createChildControlImpl:function(Y,ba){var bb;

switch(Y){case R:bb=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(bb);
bb.add(this.getChildControl(Q));
break;
case Q:bb=new qx.ui.basic.Label();
bb.setValue(this.getStatus());
break;
case S:bb=new qx.ui.container.Composite();
this._add(bb,{flex:1});
break;
case i:var bd=new qx.ui.layout.Grid();
bd.setRowFlex(0,1);
bd.setColumnFlex(1,1);
bb=new qx.ui.container.Composite(bd);
this._add(bb);
bb.addListener(m,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(bb);
break;
case U:bb=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(i).add(bb,{row:0,column:0});
break;
case V:bb=new qx.ui.basic.Label(this.getCaption());
bb.setWidth(0);
bb.setAllowGrowX(true);
var bc=this.getChildControl(i);
bc.add(bb,{row:0,column:1});
break;
case f:bb=new qx.ui.form.Button();
bb.setFocusable(false);
bb.addListener(a,this._onMinimizeButtonClick,this);
this.getChildControl(i).add(bb,{row:0,column:2});
break;
case b:bb=new qx.ui.form.Button();
bb.setFocusable(false);
bb.addListener(a,this._onRestoreButtonClick,this);
this.getChildControl(i).add(bb,{row:0,column:3});
break;
case g:bb=new qx.ui.form.Button();
bb.setFocusable(false);
bb.addListener(a,this._onMaximizeButtonClick,this);
this.getChildControl(i).add(bb,{row:0,column:4});
break;
case d:bb=new qx.ui.form.Button();
bb.setFocusable(false);
bb.addListener(a,this._onCloseButtonClick,this);
this.getChildControl(i).add(bb,{row:0,column:6});
break;
}return bb||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,Y);
},_updateCaptionBar:function(){var bf;
var bg=this.getIcon();

if(bg){this.getChildControl(U).setSource(bg);
this._showChildControl(U);
}else{this._excludeChildControl(U);
}var be=this.getCaption();

if(be){this.getChildControl(V).setValue(be);
this._showChildControl(V);
}else{this._excludeChildControl(V);
}
if(this.getShowMinimize()){this._showChildControl(f);
bf=this.getChildControl(f);
this.getAllowMinimize()?bf.resetEnabled():bf.setEnabled(false);
}else{this._excludeChildControl(f);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(b);
this._excludeChildControl(g);
}else{this._showChildControl(g);
this._excludeChildControl(b);
}bf=this.getChildControl(g);
this.getAllowMaximize()?bf.resetEnabled():bf.setEnabled(false);
}else{this._excludeChildControl(g);
this._excludeChildControl(b);
}
if(this.getShowClose()){this._showChildControl(d);
bf=this.getChildControl(d);
this.getAllowClose()?bf.resetEnabled():bf.setEnabled(false);
}else{this._excludeChildControl(d);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(r,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(C);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bi=parent.getBounds();

if(bi){var bj=this.getSizeHint();
var bh=Math.round((bi.width-bj.width)/2);
var top=Math.round((bi.height-bj.height)/2);

if(top<0){top=0;
}this.moveTo(bh,top);
return;
}}
if(qx.core.Environment.get(P)){this.warn("Centering depends on parent bounds!");
}},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(v,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bk=this.getLayoutProperties();
this.__qb=bk.left===undefined?0:bk.left;
this.__qa=bk.top===undefined?0:bk.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(c);
this._updateCaptionBar();
this.fireEvent(x);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(s,qx.event.type.Event,[false,true])){var bl=this.getLayoutProperties();
this.__qb=bl.left===undefined?0:bl.left;
this.__qa=bl.top===undefined?0:bl.top;
this.removeState(c);
this.hide();
this.fireEvent(z);
}},restore:function(){if(this.getMode()===N){return;
}
if(this.fireNonBubblingEvent(u,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bm=this.__qb;
var top=this.__qa;
this.setLayoutProperties({edge:null,left:bm,top:top});
this.removeState(c);
this._updateCaptionBar();
this.fireEvent(y);
}},moveTo:function(bn,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bn,top:top});
},isMaximized:function(){return this.hasState(c);
},getMode:function(){if(!this.isVisible()){return G;
}else{if(this.isMaximized()){return c;
}else{return N;
}}},_applyActive:function(bo,bp){if(bp){this.removeState(M);
}else{this.addState(M);
}},_getContentPaddingTarget:function(){return this.getChildControl(S);
},_applyShowStatusbar:function(bq,br){var bs=this._getResizeFrame();

if(bq){this.addState(T);
bs.addState(T);
}else{this.removeState(T);
bs.removeState(T);
}
if(bq){this._showChildControl(R);
}else{this._excludeChildControl(R);
}},_applyCaptionBarChange:function(bt,bu){this._updateCaptionBar();
},_applyStatus:function(bv,bw){var bx=this.getChildControl(Q,true);

if(bx){bx.setValue(bv);
}},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var by=e.getRelatedTarget();

if(by!=null&&!qx.ui.core.Widget.contains(this,by)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(f).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(b).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(g).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(d).reset();
}}});
})();
(function(){var h="headerCellRendererChanged",g="visibilityChangedPre",f="Number",e="qx.event.type.Event",d="_applyFirstColumnX",c="Integer",b="qx.ui.table.pane.Model",a="_applyMaxColumnCount";
qx.Class.define(b,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setTableColumnModel(i);
},events:{"modelChanged":e},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:c,init:0,apply:d},maxColumnCount:{check:f,init:-1,apply:a}},members:{__qc:null,__qd:null,_applyFirstColumnX:function(j,k){this.__qc=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(l,m){this.__qc=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){if(this.__qd){this.__qd.removeListener(g,this._onColVisibilityChanged,this);
this.__qd.removeListener(h,this._onColVisibilityChanged,this);
}this.__qd=n;
this.__qd.addListener(g,this._onColVisibilityChanged,this);
this.__qd.addListener(h,this._onHeaderCellRendererChanged,this);
this.__qc=null;
},_onColVisibilityChanged:function(o){this.__qc=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__qc==null){var q=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var r=this.__qd.getVisibleColumnCount();

if(s==-1||(q+s)>r){this.__qc=r-q;
}else{this.__qc=s;
}}return this.__qc;
},getColumnAtX:function(t){var u=this.getFirstColumnX();
return this.__qd.getVisibleColumnAtX(u+t);
},getX:function(v){var w=this.getFirstColumnX();
var y=this.getMaxColumnCount();
var x=this.__qd.getVisibleX(v)-w;

if(x>=0&&(y==-1||x<y)){return x;
}else{return -1;
}},getColumnLeft:function(z){var C=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var A=this.getColumnAtX(x);

if(A==z){return C;
}C+=this.__qd.getColumnWidth(A);
}return -1;
},getTotalWidth:function(){var D=0;
var E=this.getColumnCount();

for(var x=0;x<E;x++){var F=this.getColumnAtX(x);
D+=this.__qd.getColumnWidth(F);
}return D;
}},destruct:function(){if(this.__qd){this.__qd.removeListener(g,this._onColVisibilityChanged,this);
this.__qd.removeListener(h,this._onColVisibilityChanged,this);
}this.__qd=null;
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.ui.table.ITableModel";
qx.Interface.define(a,{events:{"dataChanged":c,"metaDataChanged":b,"sorted":c},members:{getRowCount:function(){},getRowData:function(d){},getColumnCount:function(){},getColumnId:function(e){},getColumnIndexById:function(f){},getColumnName:function(g){},isColumnEditable:function(h){},isColumnSortable:function(i){},sortByColumn:function(j,k){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(l,m){},getValue:function(n,o){},getValueById:function(p,q){},setValue:function(r,s,t){},setValueById:function(u,v,w){}}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){qx.core.Object.call(this);
this.__mL=[];
this.__mM=[];
this.__mN={};
},members:{__mL:null,__mM:null,__mN:null,__mO:null,init:function(f){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(g){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(j){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(m,n){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(q,r){return this.getValue(this.getColumnIndexById(q),r);
},setValue:function(s,t,u){throw new Error("setValue is abstract");
},setValueById:function(v,w,x){this.setValue(this.getColumnIndexById(v),w,x);
},getColumnCount:function(){return this.__mL.length;
},getColumnIndexById:function(y){return this.__mN[y];
},getColumnId:function(z){return this.__mL[z];
},getColumnName:function(A){return this.__mM[A];
},setColumnIds:function(B){this.__mL=B;
this.__mN={};

for(var i=0;i<B.length;i++){this.__mN[B[i]]=i;
}this.__mM=new Array(B.length);
if(!this.__mO){this.fireEvent(e);
}},setColumnNamesByIndex:function(C){if(this.__mL.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__mL.length+" != "+C.length);
}this.__mM=C;
this.fireEvent(e);
},setColumnNamesById:function(D){this.__mM=new Array(this.__mL.length);

for(var i=0;i<this.__mL.length;++i){this.__mM[i]=D[this.__mL[i]];
}},setColumns:function(E,F){var G=this.__mL.length==0||F;

if(F==null){if(this.__mL.length==0){F=E;
}else{F=this.__mL;
}}
if(F.length!=E.length){throw new Error("columnIdArr and columnNameArr have different length: "+F.length+" != "+E.length);
}
if(G){this.__mO=true;
this.setColumnIds(F);
this.__mO=false;
}this.setColumnNamesByIndex(E);
}},destruct:function(){this.__mL=this.__mM=this.__mN=null;
}});
})();
(function(){var e="dataChanged",d="metaDataChanged",c="qx.ui.table.model.Simple",b="Boolean",a="sorted";
qx.Class.define(c,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__mP=[];
this.__mQ=-1;
this.__mR=[];
this.__mS=null;
},properties:{caseSensitiveSorting:{check:b,init:true}},statics:{_defaultSortComparatorAscending:function(f,g){var h=f[arguments.callee.columnIndex];
var k=g[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(h)&&qx.lang.Type.isNumber(k)){var l=isNaN(h)?isNaN(k)?0:1:isNaN(k)?-1:null;

if(l!=null){return l;
}}return (h>k)?1:((h==k)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(m,n){var o=(m[arguments.callee.columnIndex].toLowerCase?m[arguments.callee.columnIndex].toLowerCase():m[arguments.callee.columnIndex]);
var p=(n[arguments.callee.columnIndex].toLowerCase?n[arguments.callee.columnIndex].toLowerCase():n[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(o)&&qx.lang.Type.isNumber(p)){var q=isNaN(o)?isNaN(p)?0:1:isNaN(p)?-1:null;

if(q!=null){return q;
}}return (o>p)?1:((o==p)?0:-1);
},_defaultSortComparatorDescending:function(r,s){var t=r[arguments.callee.columnIndex];
var u=s[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(t)&&qx.lang.Type.isNumber(u)){var v=isNaN(t)?isNaN(u)?0:1:isNaN(u)?-1:null;

if(v!=null){return v;
}}return (t<u)?1:((t==u)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(w,x){var y=(w[arguments.callee.columnIndex].toLowerCase?w[arguments.callee.columnIndex].toLowerCase():w[arguments.callee.columnIndex]);
var z=(x[arguments.callee.columnIndex].toLowerCase?x[arguments.callee.columnIndex].toLowerCase():x[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(y)&&qx.lang.Type.isNumber(z)){var A=isNaN(y)?isNaN(z)?0:1:isNaN(z)?-1:null;

if(A!=null){return A;
}}return (y<z)?1:((y==z)?0:-1);
}},members:{__mP:null,__mS:null,__mT:null,__mR:null,__mQ:null,__mU:null,getRowData:function(B){var C=this.__mP[B];

if(C==null||C.originalData==null){return C;
}else{return C.originalData;
}},getRowDataAsMap:function(D){var F=this.__mP[D];

if(F!=null){var E={};
for(var G=0;G<this.getColumnCount();G++){E[this.getColumnId(G)]=F[G];
}
if(F.originalData!=null){for(var H in F.originalData){if(E[H]==undefined){E[H]=F.originalData[H];
}}}return E;
}return (F&&F.originalData)?F.originalData:null;
},getDataAsMapArray:function(){var J=this.getRowCount();
var I=[];

for(var i=0;i<J;i++){I.push(this.getRowDataAsMap(i));
}return I;
},setEditable:function(K){this.__mS=[];

for(var L=0;L<this.getColumnCount();L++){this.__mS[L]=K;
}this.fireEvent(d);
},setColumnEditable:function(M,N){if(N!=this.isColumnEditable(M)){if(this.__mS==null){this.__mS=[];
}this.__mS[M]=N;
this.fireEvent(d);
}},isColumnEditable:function(O){return this.__mS?(this.__mS[O]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__mT==null){this.__mT=[];
}this.__mT[P]=Q;
this.fireEvent(d);
}},isColumnSortable:function(R){return (this.__mT?(this.__mT[R]!==false):true);
},sortByColumn:function(S,T){var W;
var V=this.__mR[S];

if(V){W=(T?V.ascending:V.descending);
}else{if(this.getCaseSensitiveSorting()){W=(T?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{W=(T?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}W.columnIndex=S;
this.__mP.sort(W);
this.__mQ=S;
this.__mU=T;
var U={columnIndex:S,ascending:T};
this.fireDataEvent(a,U);
this.fireEvent(d);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(bb,bc){return Y(bc,bb);
}};
}else{ba=Y;
}this.__mR[X]=ba;
},getSortMethods:function(bd){return this.__mR[bd];
},clearSorting:function(){if(this.__mQ!=-1){this.__mQ=-1;
this.__mU=true;
this.fireEvent(d);
}},getSortColumnIndex:function(){return this.__mQ;
},_setSortColumnIndex:function(be){this.__mQ=be;
},isSortAscending:function(){return this.__mU;
},_setSortAscending:function(bf){this.__mU=bf;
},getRowCount:function(){return this.__mP.length;
},getValue:function(bg,bh){if(bh<0||bh>=this.__mP.length){throw new Error("this.__rowArr out of bounds: "+bh+" (0.."+this.__mP.length+")");
}return this.__mP[bh][bg];
},setValue:function(bi,bj,bk){if(this.__mP[bj][bi]!=bk){this.__mP[bj][bi]=bk;
if(this.hasListener(e)){var bl={firstRow:bj,lastRow:bj,firstColumn:bi,lastColumn:bi};
this.fireDataEvent(e,bl);
}
if(bi==this.__mQ){this.clearSorting();
}}},setData:function(bm,bn){this.__mP=bm;
if(this.hasListener(e)){var bo={firstRow:0,lastRow:bm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bo);
}
if(bn!==false){this.clearSorting();
}},getData:function(){return this.__mP;
},setDataAsMapArray:function(bp,bq,br){this.setData(this._mapArray2RowArr(bp,bq),br);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__mP.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__mP,bs);
var bv={firstRow:bt,lastRow:this.__mP.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(bw,bx,by,bz){this.addRows(this._mapArray2RowArr(bw,by),bx,bz);
},setRows:function(bA,bB,bC){if(bB==null){bB=0;
}bA.splice(0,0,bB,bA.length);
Array.prototype.splice.apply(this.__mP,bA);
var bD={firstRow:bB,lastRow:this.__mP.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bD);

if(bC!==false){this.clearSorting();
}},setRowsAsMapArray:function(bE,bF,bG,bH){this.setRows(this._mapArray2RowArr(bE,bG),bF,bH);
},removeRows:function(bI,bJ,bK){this.__mP.splice(bI,bJ);
var bL={firstRow:bI,lastRow:this.__mP.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bI,removeCount:bJ};
this.fireDataEvent(e,bL);

if(bK!==false){this.clearSorting();
}},_mapArray2RowArr:function(bM,bN){var bR=bM.length;
var bO=this.getColumnCount();
var bQ=new Array(bR);
var bP;

for(var i=0;i<bR;++i){bP=[];

if(bN){bP.originalData=bM[i];
}
for(var j=0;j<bO;++j){bP[j]=bM[i][this.getColumnId(j)];
}bQ[i]=bP;
}return bQ;
}},destruct:function(){this.__mP=this.__mS=this.__mR=this.__mT=null;
}});
})();
(function(){var m="distinctValues",k="item",j="copy",h="name",g="items",f="orderChanged",d="fce.view.Table",c="A",b="keydown",a="changeSelectedItems",A="_applyModel",z="visibilityChanged",w="changeSelection",v="droprequest",u="String",t="dragstart",s="",r="number",q="changeSourceProperty",p="main",n="boolean",o="_applyFilter";
qx.Class.define(d,{extend:qx.ui.table.Table,construct:function(){qx.ui.table.Table.call(this);
this.setColumnVisibilityButtonVisible(false);
var B=this.getSelectionModel();
B.setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
B.addListener(w,this.__Nl,this);
this.__Nj=[];
this._setUpDragDrop();
this.setDecorator(p);
this.addListener(b,function(C){var E=C.getKeyIdentifier();

if(E===c&&C.isCtrlOrCommandPressed()){var D=this.getTableModel().getRowCount()-1;
this.getSelectionModel().addSelectionInterval(0,D);
}},this);
},properties:{model:{apply:A},selectedItems:{init:new qx.data.Array(),event:a},sourceProperty:{init:null,nullable:true,check:u,event:q},filter:{apply:o}},members:{__Nj:null,__Nk:function(F){var G=F.col;

switch(typeof F.rowData[G]){case n:return new qx.ui.table.cellrenderer.Boolean();
case r:return new qx.ui.table.cellrenderer.Number();
default:return new qx.ui.table.cellrenderer.String();
}},_setUpDragDrop:function(){this.setDraggable(true);
this.addListener(t,function(e){e.addType(g);
e.addAction(j);
});
this.addListener(v,function(e){var H=e.getCurrentAction();
var J=e.getCurrentType();

if(J==g&&H==j){var I=this.getSelectedItems();
e.addData(J,I);
}},this);
},__Nl:function(){var K=this.getTableModel().getColumnCount()-1;
this.getSelectedItems().removeAll();
this.getSelectionModel().iterateSelection(function(L){var M=this.getTableModel().getValue(K,L);
this.getSelectedItems().push(M);
},this);
},_applyModel:function(N,O){var P=new qx.ui.table.model.Filtered();
this.__Nj=this._getModelProperties(N);

if(this.__Nj.indexOf(m)>=0){this.__Nj.push(qx.lang.Array.removeAt(this.__Nj,this.__Nj.indexOf(m)));
}this.__Nj.push(k);
P.setColumns(this.__Nj);
P.setData(this._getRowData(N));
this.setTableModel(P);
this._configureColumnModel();
},_getModelProperties:function(Q){var T=[];

for(var i=0,l=Q.length;i<l;i++){var S=Q.getItem(i);
var U=qx.util.PropertyUtil.getProperties(S.constructor);

for(var R in U){if(!qx.lang.Array.contains(T,R)){T.push(R);
}}}return T;
},_getRowData:function(V){var Y=[];

for(var i=0,l=V.length;i<l;i++){var bb=[];
var X=V.getItem(i);
var ba=qx.util.PropertyUtil.getProperties(X.constructor);

for(var x=0,y=this.__Nj.length;x<y;x++){var W=this.__Nj[x];

if(W in ba){bb.push(X.get(W));
}else if(W==k){bb.push(X);
}else{bb.push(undefined);
}}Y.push(bb);
}return Y;
},_configureColumnModel:function(){var bd=this.getTableColumnModel();
bd.addListener(f,function(bf){this.setSourceProperty(this._getFirstVisibleColumnId());
},this);
bd.addListener(z,function(bg){this.setSourceProperty(this._getFirstVisibleColumnId());
},this);
var bc=new qx.ui.table.cellrenderer.Dynamic(this.__Nk);
var be=this.getTableModel().getColumnCount()-1;

for(var i=1;i<be;i++){bd.setDataCellRenderer(i,bc);
}bd.setColumnWidth(0,200);
bd.setColumnVisible(be,false);
},_getFirstVisibleColumnId:function(){var bi=this.getTableModel();
var bj=this.getTableColumnModel().getVisibleColumns();

for(var i=0,l=bj.length;i<l;i++){var bh=bi.getColumnId(bj[i]);

if(bh!==h&&bh!==m){return bi.getColumnId(bj[i]);
}}return null;
},_applyFilter:function(bk,bl){var bm=this.getTableModel();

if(bl){bm.resetHiddenRows();
}
if(bk&&bk!==s){bm.addNotRegex(bk,h);
bm.applyFilters();
}this.getSelectionModel().resetSelection();
}}});
})();
(function(){var j="px",i="no-repeat",h="css.inlineblock",g="repeat",f="scale",e="string",d="static",c="'",b="qx.ui.table.cellrenderer.AbstractImage",a="}",w="  text-align:center;",v="scale-x",u="repeat-y",t=".qooxdoo-table-cell-icon {",s="",r="<div></div>",q="top",p="abstract",o=" qooxdoo-table-cell-icon",n="repeat-x",l="  padding-top:1px;",m="title='",k="scale-y";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.Abstract,type:p,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var x=this.self(arguments);

if(!x.stylesheet){x.stylesheet=qx.bom.Stylesheet.createElement(t+w+l+a);
}},properties:{repeat:{check:function(y){var z=[f,v,k,g,n,u,i];
return qx.lang.Array.contains(z,y);
},init:i}},members:{__qe:16,__qf:16,__qg:null,_insetY:2,_identifyImage:function(A){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(B){var C=this._identifyImage(B);
if(C==null||typeof C==e){C={url:C,tooltip:null};
}if(!C.imageWidth||!C.imageHeight){var D=this.__qh(C.url);
C.imageWidth=D.width;
C.imageHeight=D.height;
}C.width=C.imageWidth;
C.height=C.imageHeight;
return C;
},__qh:function(E){var H=qx.util.ResourceManager.getInstance();
var G=qx.io.ImageLoader;
var F,I;
if(H.has(E)){F=H.getImageWidth(E);
I=H.getImageHeight(E);
}else if(G.isLoaded(E)){F=G.getWidth(E);
I=G.getHeight(E);
}else{F=this.__qe;
I=this.__qf;
}return {width:F,height:I};
},createDataCellHtml:function(J,K){this.__qg=this._getImageInfos(J);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,J,K);
},_getCellClass:function(L){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+o;
},_getContentHtml:function(M){var content=r;
if(this.__qg.url){content=qx.bom.element.Decoration.create(this.__qg.url,this.getRepeat(),{width:this.__qg.width+j,height:this.__qg.height+j,display:qx.core.Environment.get(h),verticalAlign:q,position:d});
}return content;
},_getCellAttributes:function(N){var O=this.__qg.tooltip;

if(O){return m+O+c;
}else{return s;
}}},destruct:function(){this.__qg=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__yb=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__yc:null,__yd:false,__yb:null,_applyIconTrue:function(h){this.__yc=this.__yb.resolve(h);
},_applyIconFalse:function(i){this.__yd=this.__yb.resolve(i);
},_insetY:5,_getCellStyle:function(j){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,j)+c;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__yc;
break;
case false:l.url=this.__yd;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__yb=null;
}});
})();
(function(){var s="",r="==",q=">",p="between",o="<",n="regex",m="!between",l=">=",k="!=",j="<=",c="font-weight",h=";",f="text-align",b='g',a=":",e="qx.ui.table.cellrenderer.Conditional",d="color",g="font-style";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Default,construct:function(t,u,v,w){qx.ui.table.cellrenderer.Default.call(this);
this.numericAllowed=[r,k,q,o,l,j];
this.betweenAllowed=[p,m];
this.conditions=[];
this.__xV=t||s;
this.__xW=u||s;
this.__xX=v||s;
this.__xY=w||s;
},members:{__xV:null,__xW:null,__xX:null,__xY:null,__ya:function(x,y){if(x[1]!=null){y[f]=x[1];
}
if(x[2]!=null){y[d]=x[2];
}
if(x[3]!=null){y[g]=x[3];
}
if(x[4]!=null){y[c]=x[4];
}},addNumericCondition:function(z,A,B,C,D,E,F){var G=null;

if(qx.lang.Array.contains(this.numericAllowed,z)){if(A!=null){G=[z,B,C,D,E,A,F];
}}
if(G!=null){this.conditions.push(G);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(H,I,J,K,L,M,N,O){if(qx.lang.Array.contains(this.betweenAllowed,H)){if(I!=null&&J!=null){var P=[H,K,L,M,N,I,J,O];
}}
if(P!=null){this.conditions.push(P);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(Q,R,S,T,U,V){if(Q!=null){var W=[n,R,S,T,U,Q,V];
}
if(W!=null){this.conditions.push(W);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(X){if(!this.conditions.length){return X.style||s;
}var bd=X.table.getTableModel();
var i;
var bf;
var Y;
var bb={"text-align":this.__xV,"color":this.__xW,"font-style":this.__xX,"font-weight":this.__xY};

for(i in this.conditions){bf=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}
switch(this.conditions[i][0]){case r:if(Y==this.conditions[i][5]){bf=true;
}break;
case k:if(Y!=this.conditions[i][5]){bf=true;
}break;
case q:if(Y>this.conditions[i][5]){bf=true;
}break;
case o:if(Y<this.conditions[i][5]){bf=true;
}break;
case l:if(Y>=this.conditions[i][5]){bf=true;
}break;
case j:if(Y<=this.conditions[i][5]){bf=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][7],X.row);
}
switch(this.conditions[i][0]){case p:if(Y>=this.conditions[i][5]&&Y<=this.conditions[i][6]){bf=true;
}break;
case m:if(Y<this.conditions[i][5]||Y>this.conditions[i][6]){bf=true;
}break;
}}else if(this.conditions[i][0]==n){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}var ba=new RegExp(this.conditions[i][5],b);
bf=ba.test(Y);
}if(bf==true){this.__ya(this.conditions[i],bb);
}}var be=[];

for(var bc in bb){if(bb[bc]){be.push(bc,a,bb[bc],h);
}}return be.join(s);
}},destruct:function(){this.numericAllowed=this.betweenAllowed=this.conditions=null;
}});
})();
(function(){var e="",d="qooxdoo-table-cell qooxdoo-table-cell-right",c="0",b="qx.util.format.NumberFormat",a="qx.ui.table.cellrenderer.Number";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Conditional,properties:{numberFormat:{check:b,init:null,nullable:true}},members:{_getContentHtml:function(f){var g=this.getNumberFormat();

if(g){if(f.value||f.value==0){return g.format(f.value);
}else{return e;
}}else{return f.value==0?c:(f.value||e);
}},_getCellClass:function(h){return d;
}}});
})();
(function(){var c="qx.ui.table.cellrenderer.String",b="qooxdoo-table-cell",a="";
qx.Class.define(c,{extend:qx.ui.table.cellrenderer.Conditional,members:{_getContentHtml:function(d){return qx.bom.String.escape(d.value||a);
},_getCellClass:function(e){return b;
}}});
})();
(function(){var p='g',o="==",n=">",m="notregex",l="between",k="<",j="regex",h='gi',g="!between",f=">=",c="dataChanged",e="!=",d="<=",b="qx.ui.table.model.Filtered",a='';
qx.Class.define(b,{extend:qx.ui.table.model.Simple,construct:function(){qx.ui.table.model.Simple.call(this);
this.numericAllowed=new Array(o,e,n,k,f,d);
this.betweenAllowed=new Array(l,g);
this.__LD=false;
this.Filters=new Array();
},members:{__LE:null,__LD:null,_js_in_array:function(q,r){var s=r.toString();

if(s==a){return false;
}var u=new RegExp(q,p);
var t=u.test(r);
return t;
},addBetweenFilter:function(v,w,x,y){if(this._js_in_array(v,this.betweenAllowed)&&y!=null){if(w!=null&&x!=null){var z=new Array(v,w,x,y);
}}
if(z!=null){this.Filters.push(z);
}else{throw new Error("Filter not recognized or value1/value2 is null!");
}},addNumericFilter:function(A,B,C){var D=null;

if(this._js_in_array(A,this.numericAllowed)&&C!=null){if(B!=null){D=[A,B,C];
}}
if(D!=null){this.Filters.push(D);
}else{throw new Error("Filter not recognized: value or target is null!");
}},addRegex:function(E,F,G){var I;

if(G){I=h;
}else{I=p;
}
if(E!=null&&F!=null){var H=new Array(j,E,F,I);
}
if(H!=null){this.Filters.push(H);
}else{throw new Error("regex cannot be null!");
}},addNotRegex:function(J,K,L){var N;

if(L){N=h;
}else{N=p;
}
if(J!=null&&K!=null){var M=new Array(m,J,K,N);
}
if(M!=null){this.Filters.push(M);
}else{throw new Error("notregex cannot be null!");
}},applyFilters:function(){var i;
var S;
var O;
var R=this.getData();
var P=R.length;

for(var U=0;U<P;U++){S=false;

for(i in this.Filters){if(this._js_in_array(this.Filters[i][0],this.numericAllowed)&&S==false){O=this.getValueById(this.Filters[i][2],U);

switch(this.Filters[i][0]){case o:if(O==this.Filters[i][1]){S=true;
}break;
case e:if(O!=this.Filters[i][1]){S=true;
}break;
case n:if(O>this.Filters[i][1]){S=true;
}break;
case k:if(O<this.Filters[i][1]){S=true;
}break;
case f:if(O>=this.Filters[i][1]){S=true;
}break;
case d:if(O<=this.Filters[i][1]){S=true;
}break;
}}else if(this._js_in_array(this.Filters[i][0],this.betweenAllowed)&&S==false){O=this.getValueById(this.Filters[i][3],U);

switch(this.Filters[i][0]){case l:if(O>=this.Filters[i][1]&&O<=this.Filters[i][2]){S=true;
}break;
case g:if(O<this.Filters[i][1]&&O>this.Filters[i][2]){S=true;
}break;
}}else if(this.Filters[i][0]==j&&S==false){O=this.getValueById(this.Filters[i][2],U);
var Q=new RegExp(this.Filters[i][1],this.Filters[i][3]);
S=Q.test(O);
}else if(this.Filters[i][0]==m&&S==false){O=this.getValueById(this.Filters[i][2],U);
var Q=new RegExp(this.Filters[i][1],this.Filters[i][3]);
S=!Q.test(O);
}}if(S==true){this.hideRows(U,1,false);
U--;
P--;
}}var T={firstRow:0,lastRow:P-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(c,T);
},hideRows:function(V,W,dispatchEvent){var Y=this.getData();
dispatchEvent=(dispatchEvent!=null?dispatchEvent:true);

if(!this.__LD){this.__LE=Y.slice(0);
this.__LD=true;
}
if(W==null||W<1){W=1;
}
for(var X=V;X<(Y.length-W);X++){Y[X]=Y[X+W];
}this.removeRows(X,W);
if(dispatchEvent){var ba={firstRow:0,lastRow:Y.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(c,ba);
}},resetHiddenRows:function(){if(!this.__LE){return ;
}this.Filters=[];
this.setData(qx.lang.Array.clone(this.__LE));
},setData:function(bb,bc){this.__LE=qx.lang.Array.clone(bb);
this.Filters=[];
qx.ui.table.model.Simple.prototype.setData.call(this,bb,bc);
}},destruct:function(){this.__LE=this.numericAllowed=this.betweenAllowed=this.Filters=null;
}});
})();
(function(){var b="Function",a="qx.ui.table.cellrenderer.Dynamic";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Default,construct:function(c){qx.ui.table.cellrenderer.Default.call(this);

if(c){this.setCellRendererFactoryFunction(c);
}},properties:{cellRendererFactoryFunction:{check:b,nullable:true,init:null}},members:{createDataCellHtml:function(d,e){var g=this.getCellRendererFactoryFunction();

if(!g){throw new Error("No function provided! Aborting.");
}var f=g(d);
return f.createDataCellHtml(d,e);
}}});
})();
(function(){var o="one",n="single",m="selected",k="additive",j="multi",h="os.name",g="osx",f="under",d="PageUp",c="Left",O="lead",N="Down",M="Up",L="Boolean",K="PageDown",J="anchor",I="End",H="Home",G="Right",F="right",v="click",w="above",t="left",u="Escape",r="A",s="Space",p="__kH",q="_applyMode",x="interval",y="changeSelection",A="qx.event.type.Data",z="quick",C="key",B="abstract",E="drag",D="qx.ui.core.selection.Abstract";
qx.Class.define(D,{type:B,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__dz={};
},events:{"changeSelection":A},properties:{mode:{check:[n,j,k,o],init:n,apply:q},drag:{check:L,init:false},quick:{check:L,init:false}},members:{__kF:0,__kG:0,__kH:null,__kI:null,__kJ:null,__kK:null,__kL:null,__kM:null,__kN:null,__kO:null,__kP:null,__kQ:null,__kR:null,__kS:null,__kT:null,__kU:null,__kV:null,__dz:null,__kW:null,__kX:null,_userInteraction:false,__kY:null,getSelectionContext:function(){return this.__kU;
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

if(this.getMode()===o&&this.isSelectionEmpty()){var V=this._applyDefaultSelection();
if(V==U){return;
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
},clearSelection:function(){if(this.getMode()==o){var ba=this._applyDefaultSelection(true);

if(ba!=null){return;
}}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bb){var bc=this.getMode();

if(bc==o||bc===n){if(bb.length>1){throw new Error("Could not select more than one items in mode: "+bc+"!");
}
if(bb.length==1){this.selectItem(bb[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bb);
}},getSelectedItem:function(){var bd=this.getMode();

if(bd===n||bd===o){var be=this._getSelectedItem();
return be!=undefined?be:null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__dz);
},getSortedSelection:function(){var bg=this.getSelectables();
var bf=qx.lang.Object.getValues(this.__dz);
bf.sort(function(a,b){return bg.indexOf(a)-bg.indexOf(b);
});
return bf;
},isItemSelected:function(bh){var bi=this._selectableToHashCode(bh);
return this.__dz[bi]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__dz);
},invertSelection:function(){var bk=this.getMode();

if(bk===n||bk===o){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bj=this.getSelectables();

for(var i=0;i<bj.length;i++){this._toggleInSelection(bj[i]);
}this._fireChange();
},_setLeadItem:function(bl){var bm=this.__kV;

if(bm!==null){this._styleSelectable(bm,O,false);
}
if(bl!==null){this._styleSelectable(bl,O,true);
}this.__kV=bl;
},getLeadItem:function(){return this.__kV!==null?this.__kV:null;
},_setAnchorItem:function(bn){var bo=this.__kW;

if(bo!=null){this._styleSelectable(bo,J,false);
}
if(bn!=null){this._styleSelectable(bn,J,true);
}this.__kW=bn;
},_getAnchorItem:function(){return this.__kW!==null?this.__kW:null;
},_isSelectable:function(bp){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bq=event.getTarget();
if(bq&&this._isSelectable(bq)){return bq;
}return null;
},_selectableToHashCode:function(br){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bs,bt,bu){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bv){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bw){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bx,by){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bz){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(bA){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bB,bC){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bD,bE){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bF,bG){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bH,bI){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bH===o){this._applyDefaultSelection(true);
}this._fireChange();
},handleMouseOver:function(event){if(this.__kY!=null&&this.__kY!=this._getScroll().top){this.__kY=null;
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
if(this.isItemSelected(bM)&&!bL&&!bO&&!this.getDrag()){this.__kX=bM;
this._userInteraction=false;
return;
}else{this.__kX=null;
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

if(this.getDrag()&&bP!==n&&bP!==o&&!bL&&!bO){this.__kL=this._getLocation();
this.__kI=this._getScroll();
this.__kM=event.getDocumentLeft()+this.__kI.left;
this.__kN=event.getDocumentTop()+this.__kI.top;
this.__kO=true;
this._capture();
}this._fireChange(v);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var bT=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bQ=event.isShiftPressed();

if(!bT&&!bQ&&this.__kX!=null){var bR=this._getSelectableFromMouseEvent(event);

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
},handleMouseMove:function(event){if(!this.__kO){return;
}this.__kP=event.getDocumentLeft();
this.__kQ=event.getDocumentTop();
this._userInteraction=true;
var bV=this.__kP+this.__kI.left;

if(bV>this.__kM){this.__kR=1;
}else if(bV<this.__kM){this.__kR=-1;
}else{this.__kR=0;
}var bU=this.__kQ+this.__kI.top;

if(bU>this.__kN){this.__kS=1;
}else if(bU<this.__kN){this.__kS=-1;
}else{this.__kS=0;
}var location=this.__kL;

if(this.__kP<location.left){this.__kF=this.__kP-location.left;
}else if(this.__kP>location.right){this.__kF=this.__kP-location.right;
}else{this.__kF=0;
}
if(this.__kQ<location.top){this.__kG=this.__kQ-location.top;
}else if(this.__kQ>location.bottom){this.__kG=this.__kQ-location.bottom;
}else{this.__kG=0;
}if(!this.__kH){this.__kH=new qx.event.Timer(100);
this.__kH.addListener(x,this._onInterval,this);
}this.__kH.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var bW=e.getData();

if(this.getMode()===o&&this.isSelectionEmpty()){this.addItem(bW);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__kO){return;
}if(this.__kT){this._fireChange(v);
}delete this.__kO;
delete this.__kJ;
delete this.__kK;
this._releaseCapture();
if(this.__kH){this.__kH.stop();
}},_onInterval:function(e){this._scrollBy(this.__kF,this.__kG);
this.__kI=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cg=this._getDimension();
var bY=Math.max(0,Math.min(this.__kP-this.__kL.left,cg.width))+this.__kI.left;
var bX=Math.max(0,Math.min(this.__kQ-this.__kL.top,cg.height))+this.__kI.top;
if(this.__kJ===bY&&this.__kK===bX){return;
}this.__kJ=bY;
this.__kK=bX;
var ci=this._getAnchorItem();
var cb=ci;
var ce=this.__kR;
var ch,ca;

while(ce!==0){ch=ce>0?this._getRelatedSelectable(cb,F):this._getRelatedSelectable(cb,t);
if(ch!==null){ca=this._getSelectableLocationX(ch);
if((ce>0&&ca.left<=bY)||(ce<0&&ca.right>=bY)){cb=ch;
continue;
}}break;
}var cf=this.__kS;
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
},__la:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
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
}}else if(this.__la[cr]){cn=true;

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
}this.__kY=this._getScroll().top;
this._scrollItemIntoView(co);
}}
if(cn){event.stop();
this._fireChange(C);
}this._userInteraction=false;
},_selectAllItems:function(){var ct=this.getSelectables();

for(var i=0,l=ct.length;i<l;i++){this._addToSelection(ct[i]);
}},_clearSelection:function(){var cu=this.__dz;

for(var cv in cu){this._removeFromSelection(cu[cv]);
}this.__dz={};
},_selectItemRange:function(cw,cx,cy){var cB=this._getSelectableRange(cw,cx);
if(!cy){var cA=this.__dz;
var cC=this.__lb(cB);

for(var cz in cA){if(!cC[cz]){this._removeFromSelection(cA[cz]);
}}}for(var i=0,l=cB.length;i<l;i++){this._addToSelection(cB[i]);
}},_deselectItemRange:function(cD,cE){var cF=this._getSelectableRange(cD,cE);

for(var i=0,l=cF.length;i<l;i++){this._removeFromSelection(cF[i]);
}},__lb:function(cG){var cI={};
var cH;

for(var i=0,l=cG.length;i<l;i++){cH=cG[i];
cI[this._selectableToHashCode(cH)]=cH;
}return cI;
},_getSelectedItem:function(){for(var cJ in this.__dz){return this.__dz[cJ];
}return null;
},_setSelectedItem:function(cK){if(this._isSelectable(cK)){var cL=this.__dz;
var cM=this._selectableToHashCode(cK);

if(!cL[cM]||qx.lang.Object.hasMinLength(cL,2)){this._clearSelection();
this._addToSelection(cK);
}}},_addToSelection:function(cN){var cO=this._selectableToHashCode(cN);

if(this.__dz[cO]==null&&this._isSelectable(cN)){this.__dz[cO]=cN;
this._styleSelectable(cN,m,true);
this.__kT=true;
}},_toggleInSelection:function(cP){var cQ=this._selectableToHashCode(cP);

if(this.__dz[cQ]==null){this.__dz[cQ]=cP;
this._styleSelectable(cP,m,true);
}else{delete this.__dz[cQ];
this._styleSelectable(cP,m,false);
}this.__kT=true;
},_removeFromSelection:function(cR){var cS=this._selectableToHashCode(cR);

if(this.__dz[cS]!=null){delete this.__dz[cS];
this._styleSelectable(cR,m,false);
this.__kT=true;
}},_replaceMultiSelection:function(cT){var cW=false;
var da,cY;
var cU={};

for(var i=0,l=cT.length;i<l;i++){da=cT[i];

if(this._isSelectable(da)){cY=this._selectableToHashCode(da);
cU[cY]=da;
}}var db=cT[0];
var cV=da;
var cX=this.__dz;

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
this.__kT=true;
this._fireChange();
},_fireChange:function(dc){if(this.__kT){this.__kU=dc||null;
this.fireDataEvent(y,this.getSelection());
delete this.__kT;
}},_applyDefaultSelection:function(dd){if(dd===true||this.getMode()===o&&this.isSelectionEmpty()){var de=this._getFirstSelectable();

if(de!=null){this.selectItem(de);
}return de;
}return null;
}},destruct:function(){this._disposeObjects(p);
this.__dz=this.__kX=this.__kW=null;
this.__kV=null;
}});
})();
(function(){var f="vertical",e="under",d="above",c="qx.ui.core.selection.Widget",b="left",a="right";
qx.Class.define(c,{extend:qx.ui.core.selection.Abstract,construct:function(g){qx.ui.core.selection.Abstract.call(this);
this.__kd=g;
},members:{__kd:null,_isSelectable:function(h){return this._isItemSelectable(h)&&h.getLayoutParent()===this.__kd;
},_selectableToHashCode:function(j){return j.$$hash;
},_styleSelectable:function(k,m,n){n?k.addState(m):k.removeState(m);
},_capture:function(){this.__kd.capture();
},_releaseCapture:function(){this.__kd.releaseCapture();
},_isItemSelectable:function(o){if(this._userInteraction){return o.isVisible()&&o.isEnabled();
}else{return o.isVisible();
}},_getWidget:function(){return this.__kd;
},_getLocation:function(){var p=this.__kd.getContentElement().getDomElement();
return p?qx.bom.element.Location.get(p):null;
},_getDimension:function(){return this.__kd.getInnerSize();
},_getSelectableLocationX:function(q){var r=q.getBounds();

if(r){return {left:r.left,right:r.left+r.width};
}},_getSelectableLocationY:function(s){var t=s.getBounds();

if(t){return {top:t.top,bottom:t.top+t.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(u,v){},_scrollItemIntoView:function(w){this.__kd.scrollChildIntoView(w);
},getSelectables:function(x){var y=false;

if(!x){y=this._userInteraction;
this._userInteraction=true;
}var B=this.__kd.getChildren();
var z=[];
var A;

for(var i=0,l=B.length;i<l;i++){A=B[i];

if(this._isItemSelectable(A)){z.push(A);
}}this._userInteraction=y;
return z;
},_getSelectableRange:function(C,D){if(C===D){return [C];
}var H=this.__kd.getChildren();
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
},_getFirstSelectable:function(){var I=this.__kd.getChildren();

for(var i=0,l=I.length;i<l;i++){if(this._isItemSelectable(I[i])){return I[i];
}}return null;
},_getLastSelectable:function(){var J=this.__kd.getChildren();

for(var i=J.length-1;i>0;i--){if(this._isItemSelectable(J[i])){return J[i];
}}return null;
},_getRelatedSelectable:function(K,L){var O=this.__kd.getOrientation()===f;
var N=this.__kd.getChildren();
var M=N.indexOf(K);
var P;

if((O&&L===d)||(!O&&L===b)){for(var i=M-1;i>=0;i--){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}else if((O&&L===e)||(!O&&L===a)){for(var i=M+1;i<N.length;i++){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}return null;
},_getPage:function(Q,R){if(R){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__kd=null;
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
(function(){var v="single",u="Boolean",t="one",s="changeSelection",r="__dv",q="mouseup",p="mousedown",o="losecapture",n="multi",m="_applyQuickSelection",d="mouseover",l="_applySelectionMode",h="_applyDragSelection",c="qx.ui.core.MMultiSelectionHandling",b="removeItem",g="keypress",f="qx.event.type.Data",j="addItem",a="additive",k="mousemove";
qx.Mixin.define(c,{construct:function(){var x=this.SELECTION_MANAGER;
var w=this.__dv=new x(this);
this.addListener(p,w.handleMouseDown,w);
this.addListener(q,w.handleMouseUp,w);
this.addListener(d,w.handleMouseOver,w);
this.addListener(k,w.handleMouseMove,w);
this.addListener(o,w.handleLoseCapture,w);
this.addListener(g,w.handleKeyPress,w);
this.addListener(j,w.handleAddItem,w);
this.addListener(b,w.handleRemoveItem,w);
w.addListener(s,this._onSelectionChange,this);
},events:{"changeSelection":f},properties:{selectionMode:{check:[v,n,a,t],init:v,apply:l},dragSelection:{check:u,init:false,apply:h},quickSelection:{check:u,init:false,apply:m}},members:{__dv:null,selectAll:function(){this.__dv.selectAll();
},isSelected:function(y){if(!qx.ui.core.Widget.contains(this,y)){throw new Error("Could not test if "+y+" is selected, because it is not a child element!");
}return this.__dv.isItemSelected(y);
},addToSelection:function(z){if(!qx.ui.core.Widget.contains(this,z)){throw new Error("Could not add + "+z+" to selection, because it is not a child element!");
}this.__dv.addItem(z);
},removeFromSelection:function(A){if(!qx.ui.core.Widget.contains(this,A)){throw new Error("Could not remove "+A+" from selection, because it is not a child element!");
}this.__dv.removeItem(A);
},selectRange:function(B,C){this.__dv.selectItemRange(B,C);
},resetSelection:function(){this.__dv.clearSelection();
},setSelection:function(D){for(var i=0;i<D.length;i++){if(!qx.ui.core.Widget.contains(this,D[i])){throw new Error("Could not select "+D[i]+", because it is not a child element!");
}}
if(D.length===0){this.resetSelection();
}else{var E=this.getSelection();

if(!qx.lang.Array.equals(E,D)){this.__dv.replaceSelection(D);
}}},getSelection:function(){return this.__dv.getSelection();
},getSortedSelection:function(){return this.__dv.getSortedSelection();
},isSelectionEmpty:function(){return this.__dv.isSelectionEmpty();
},getSelectionContext:function(){return this.__dv.getSelectionContext();
},_getManager:function(){return this.__dv;
},getSelectables:function(F){return this.__dv.getSelectables(F);
},invertSelection:function(){this.__dv.invertSelection();
},_getLeadItem:function(){var G=this.__dv.getMode();

if(G===v||G===t){return this.__dv.getSelectedItem();
}else{return this.__dv.getLeadItem();
}},_applySelectionMode:function(H,I){this.__dv.setMode(H);
},_applyDragSelection:function(J,K){this.__dv.setDrag(J);
},_applyQuickSelection:function(L,M){this.__dv.setQuick(L);
},_onSelectionChange:function(e){this.fireDataEvent(s,e.getData());
}},destruct:function(){this._disposeObjects(r);
}});
})();
(function(){var h="Please use an array as parameter.",g="qx.ui.form.MModelSelection",f="change",d="qx.debug",c="changeSelection",b="__lE",a="qx.event.type.Data";
qx.Mixin.define(g,{construct:function(){this.__lE=new qx.data.Array();
this.__lE.addListener(f,this.__lH,this);
this.addListener(c,this.__lG,this);
},events:{changeModelSelection:a},members:{__lE:null,__lF:false,__lG:function(){if(this.__lF){return;
}var m=this.getSelection();
var k=[];

for(var i=0;i<m.length;i++){var n=m[i];
var l=n.getModel?n.getModel():null;

if(l!==null){k.push(l);
}}if(k.length===m.length){try{this.setModelSelection(k);
}catch(e){throw new Error("Could not set the model selection. Maybe your models are not unique?");
}}},__lH:function(){this.__lF=true;
var p=this.getSelectables(true);
var r=[];
var q=this.__lE.toArray();

for(var i=0;i<q.length;i++){var t=q[i];

for(var j=0;j<p.length;j++){var u=p[j];
var o=u.getModel?u.getModel():null;

if(t===o){r.push(u);
break;
}}}this.setSelection(r);
this.__lF=false;
var s=this.getSelection();

if(!qx.lang.Array.equals(s,r)){this.__lG();
}},getModelSelection:function(){return this.__lE;
},setModelSelection:function(v){if(!v){this.__lE.removeAll();
return;
}
if(qx.core.Environment.get(d)){this.assertArray(v,h);
}v.unshift(this.__lE.getLength());
v.unshift(0);
var w=this.__lE.splice.apply(this.__lE,v);
w.dispose();
}},destruct:function(){this._disposeObjects(b);
}});
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
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var m="horizontal",k="qx.event.type.Data",j="vertical",h="",g="qx.ui.form.List",f="text",d="Boolean",c="__md",b="one",a="addChildWidget",A="_applySpacing",z="Enter",y="Integer",x="action",w="keyinput",v="addItem",u="removeChildWidget",t="_applyOrientation",s="single",r="keypress",p="list",q="label",n="pane",o="removeItem";
qx.Class.define(g,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(B){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__md=this._createListItemContainer();
this.__md.addListener(a,this._onAddChild,this);
this.__md.addListener(u,this._onRemoveChild,this);
this.getChildControl(n).add(this.__md);
if(B){this.setOrientation(m);
}else{this.initOrientation();
}this.addListener(r,this._onKeyPress);
this.addListener(w,this._onKeyInput);
this.__Aj=h;
},events:{addItem:k,removeItem:k},properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true},orientation:{check:[m,j],init:j,apply:t},spacing:{check:y,init:0,apply:A,themeable:true},enableInlineFind:{check:d,init:true}},members:{__Aj:null,__Ak:null,__md:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__md;
},_onAddChild:function(e){this.fireDataEvent(v,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(o,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_createListItemContainer:function(){return new qx.ui.container.Composite;
},_applyOrientation:function(C,D){var E=C===m;
var F=E?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__md;
content.setLayout(F);
content.setAllowGrowX(!E);
content.setAllowGrowY(E);
this._applySpacing(this.getSpacing());
},_applySpacing:function(G,H){this.__md.getLayout().setSpacing(G);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==z&&!e.isAltPressed()){var I=this.getSelection();

for(var i=0;i<I.length;i++){I[i].fireEvent(x);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var J=this.getSelectionMode();

if(!(J===s||J===b)){return;
}if(((new Date).valueOf()-this.__Ak)>1000){this.__Aj=h;
}this.__Aj+=e.getChar();
var K=this.findItemByLabelFuzzy(this.__Aj);
if(K){this.setSelection([K]);
}this.__Ak=(new Date).valueOf();
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
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var k="keypress",j="change",h="items",g="name",f="fce.view.List",e="multi",d="dragover",c="changeSelectedItems",b="Delete",a="drop";
qx.Class.define(f,{extend:qx.ui.form.List,construct:function(m){qx.ui.form.List.call(this,m);
this.set({enableInlineFind:true,selectionMode:e});
this._setUpDragDrop();
this.addListener(k,function(p){if(p.getKeyIdentifier()===b){this.removeSelected();
}},this);
var o=new qx.data.Array();
o.addListener(j,this.__zh,this);
this.setSelectedItems(o);
this.__Nm=[];
var n=this._getManager();
this.removeListener(k,n.handleKeyPress,n);
},properties:{selectedItems:{event:c},modelValueProperty:{init:null,nullable:true}},members:{__Nm:null,_setUpDragDrop:function(){this.setDroppable(true);
this.addListener(a,function(q){var r=q.getData(h);
this.addItemsUnique(r);
},this);
this.addListener(d,function(s){if(!s.supportsType(h)){s.preventDefault();
}});
},__zh:function(){if(!this.getModelValueProperty()){return;
}var t=this.getSelectedItems();

for(var i=0,l=t.length;i<l;i++){var u=t.getItem(i);

if(!this.isItemListed(u)){var v=new fce.view.ListItem(u,this.getModelValueProperty(),g);
this.add(v);
this.__Nm.push(u);
}}},isItemListed:function(w){if(qx.lang.Array.contains(this.__Nm,w)){return true;
}var x=w.getName();

for(var i=0,l=this.__Nm.length;i<l;i++){if(this.__Nm[i].getName()===x){return true;
}}return false;
},removeSelected:function(){var z=this.getSelection();

for(var i=0,l=z.length;i<l;i++){var y=z[i].getModelItem();
this.getSelectedItems().remove(y);
z[i].destroy();
qx.lang.Array.remove(this.__Nm,y);
}},removeAll:function(){var B=this.getChildren().concat();

for(var i=0,l=B.length;i<l;i++){var A=B[i].getModelItem();
this.getSelectedItems().remove(A);
B[i].destroy();
qx.lang.Array.remove(this.__Nm,A);
}},addItemsUnique:function(C){for(var i=0,l=C.length;i<l;i++){var D=this.getSelectedItems();

if(!D.contains(C.getItem(i))){D.push(C.getItem(i));
}}}},destruct:function(){this.getSelectedItems().removeListener(j,this.__zh,this);
this.__Nm=null;
}});
})();
(function(){var m="label",l="checkbox",k="textfield",j="listitem",i="bigger",h="boolean",g="",f="name",e="distinctValues",d="fce.view.ListItem",a="value",c="number",b="_applyModelItem";
qx.Class.define(d,{extend:qx.ui.container.Composite,construct:function(n,o,p){var q=new qx.ui.layout.HBox(10);
qx.ui.container.Composite.call(this,q);
this.set({appearance:j});
this.setLabelProperty(p);

if(!qx.Class.hasProperty(n.constructor,o)){for(var r in qx.util.PropertyUtil.getAllProperties(n.constructor)){if(r!==f&&r!==e){o=r;
break;
}}}this.setValueProperty(o);
this.setModelItem(n);
},properties:{modelItem:{apply:b},labelProperty:{init:null,nullable:true},valueProperty:{init:null,nullable:true},gap:{themeable:true}},members:{_applyModelItem:function(s,t){var w=s;
var v=this.getChildControl(m);
var u=g;

if(this.getLabelProperty()){var y=this.getLabelProperty();
u=w.get(y);
}v.setValue(u);
var x=null;
var A=false;

if(this.getValueProperty()){var y=this.getValueProperty();
x=w.get(y);
}var z;

if(typeof x===h){z=this.getChildControl(l);
}else{z=this.getChildControl(k);
}
if(typeof x===c){A=true;
x=x.toString();
}z.setValue(x);
this.add(v,{flex:1});
this.add(z);

if(this.getValueProperty()){qx.data.SingleValueBinding.bind(z,a,w,this.getValueProperty(),{converter:function(B,C,D,E){if(A){return parseInt(B,10);
}return B;
}});
}},_createChildControlImpl:function(F,G){var H;

switch(F){case m:H=new qx.ui.basic.Label();
H.set({anonymous:true,allowGrowX:true,font:i});
break;
case l:H=new qx.ui.form.CheckBox();
break;
case k:H=new qx.ui.form.TextField();
break;
}return H;
}}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var f="qx.ui.core.MSingleSelectionHandling",d="changeSelection",c="changeSelected",b="__dv",a="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":a},members:{__dv:null,getSelection:function(){var g=this.__mD().getSelected();

if(g){return [g];
}else{return [];
}},setSelection:function(h){switch(h.length){case 0:this.resetSelection();
break;
case 1:this.__mD().setSelected(h[0]);
break;
default:throw new Error("Could only select one item, but the selection"+" array contains "+h.length+" items!");
}},resetSelection:function(){this.__mD().resetSelected();
},isSelected:function(i){return this.__mD().isSelected(i);
},isSelectionEmpty:function(){return this.__mD().isSelectionEmpty();
},getSelectables:function(j){return this.__mD().getSelectables(j);
},_onChangeSelected:function(e){var l=e.getData();
var k=e.getOldData();
l==null?l=[]:l=[l];
k==null?k=[]:k=[k];
this.fireDataEvent(d,l,k);
},__mD:function(){if(this.__dv==null){var m=this;
this.__dv=new qx.ui.core.SingleSelectionManager({getItems:function(){return m._getItems();
},isItemSelectable:function(n){if(m._isItemSelectable){return m._isItemSelectable(n);
}else{return n.isVisible();
}}});
this.__dv.addListener(c,this._onChangeSelected,this);
}this.__dv.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__dv;
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var j="Boolean",h="__mE",g="qx.ui.core.SingleSelectionManager",f="qx.debug",e="Invalid selectionProvider!",d="__mG",c="changeSelected",b="__mF",a="qx.event.type.Data";
qx.Class.define(g,{extend:qx.core.Object,construct:function(k){qx.core.Object.call(this);

if(qx.core.Environment.get(f)){qx.core.Assert.assertInterface(k,qx.ui.core.ISingleSelectionProvider,e);
}this.__mE=k;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:j,init:true,apply:d}},members:{__mF:null,__mE:null,getSelected:function(){return this.__mF;
},setSelected:function(l){if(!this.__mI(l)){throw new Error("Could not select "+l+", because it is not a child element!");
}this.__mH(l);
},resetSelected:function(){this.__mH(null);
},isSelected:function(m){if(!this.__mI(m)){throw new Error("Could not check if "+m+" is selected,"+" because it is not a child element!");
}return this.__mF===m;
},isSelectionEmpty:function(){return this.__mF==null;
},getSelectables:function(n){var o=this.__mE.getItems();
var p=[];

for(var i=0;i<o.length;i++){if(this.__mE.isItemSelectable(o[i])){p.push(o[i]);
}}if(!n){for(var i=p.length-1;i>=0;i--){if(!p[i].getEnabled()){p.splice(i,1);
}}}return p;
},__mG:function(q,r){if(!q){this.__mH(this.__mF);
}},__mH:function(s){var v=this.__mF;
var u=s;

if(u!=null&&v===u){return;
}
if(!this.isAllowEmptySelection()&&u==null){var t=this.getSelectables(true)[0];

if(t){u=t;
}}this.__mF=u;
this.fireDataEvent(c,u,v);
},__mI:function(w){var x=this.__mE.getItems();

for(var i=0;i<x.length;i++){if(x[i]===w){return true;
}}return false;
}},destruct:function(){if(this.__mE.toHashCode){this._disposeObjects(h);
}else{this.__mE=null;
}this._disposeObjects(b);
}});
})();
(function(){var a="qx.ui.core.ISingleSelectionProvider";
qx.Interface.define(a,{members:{getItems:function(){},isItemSelectable:function(b){}}});
})();
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="__mJ",b="changeSelection",a="_applyEnabled";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(s){qx.core.Object.call(this);
this.__mJ=[];
this.addListener(b,this.__mK,this);

if(s!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:a,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__mJ:null,getItems:function(){return this.__mJ;
},add:function(t){var u=this.__mJ;
var v;

for(var i=0,l=arguments.length;i<l;i++){v=arguments[i];

if(qx.lang.Array.contains(u,v)){continue;
}v.addListener(p,this._onItemChangeChecked,this);
u.push(v);
v.setGroup(this);
if(v.getValue()){this.setSelection([v]);
}}if(!this.isAllowEmptySelection()&&u.length>0&&!this.getSelection()[0]){this.setSelection([u[0]]);
}},remove:function(w){var x=this.__mJ;

if(qx.lang.Array.contains(x,w)){qx.lang.Array.remove(x,w);
if(w.getGroup()===this){w.resetGroup();
}w.removeListener(p,this._onItemChangeChecked,this);
if(w.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__mJ;
},_onItemChangeChecked:function(e){var y=e.getTarget();

if(y.getValue()){this.setSelection([y]);
}else if(this.getSelection()[0]==y){this.resetSelection();
}},_applyInvalidMessage:function(z,A){for(var i=0;i<this.__mJ.length;i++){this.__mJ[i].setInvalidMessage(z);
}},_applyValid:function(B,C){for(var i=0;i<this.__mJ.length;i++){this.__mJ[i].setValid(B);
}},_applyEnabled:function(D,E){var F=this.__mJ;

if(D==null){for(var i=0,l=F.length;i<l;i++){F[i].resetEnabled();
}}else{for(var i=0,l=F.length;i<l;i++){F[i].setEnabled(D);
}}},_applyAllowEmptySelection:function(G,H){if(!G&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var I=this.getSelection()[0];
var K=this.__mJ;
var J=K.indexOf(I);

if(J==-1){return;
}var i=0;
var length=K.length;
if(this.getWrap()){J=(J+1)%length;
}else{J=Math.min(J+1,length-1);
}
while(i<length&&!K[J].getEnabled()){J=(J+1)%length;
i++;
}this.setSelection([K[J]]);
},selectPrevious:function(){var L=this.getSelection()[0];
var N=this.__mJ;
var M=N.indexOf(L);

if(M==-1){return;
}var i=0;
var length=N.length;
if(this.getWrap()){M=(M-1+length)%length;
}else{M=Math.max(M-1,0);
}
while(i<length&&!N[M].getEnabled()){M=(M-1+length)%length;
i++;
}this.setSelection([N[M]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},_isItemSelectable:function(O){return this.__mJ.indexOf(O)!=-1;
},__mK:function(e){var Q=e.getData()[0];
var P=e.getOldData()[0];

if(P){P.setValue(false);
}
if(Q){Q.setValue(true);
}}},destruct:function(){this._disposeArray(d);
}});
})();
(function(){var k="pressed",j="abandoned",i="hovered",h="Boolean",g="Space",f="undetermined",d="Enter",c="checked",b="mousedown",a="_applyTriState",w="mouseout",v="changeValue",u="keydown",t="_applyGroup",s="button",r="execute",q="qx.ui.form.RadioGroup",p="_applyValue",o="qx.ui.form.ToggleButton",n="mouseover",l="keyup",m="mouseup";
qx.Class.define(o,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable,qx.ui.form.IRadioItem],construct:function(x,y){qx.ui.basic.Atom.call(this,x,y);
this.addListener(n,this._onMouseOver);
this.addListener(w,this._onMouseOut);
this.addListener(b,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(u,this._onKeyDown);
this.addListener(l,this._onKeyUp);
this.addListener(r,this._onExecute,this);
},properties:{appearance:{refine:true,init:s},focusable:{refine:true,init:true},value:{check:h,nullable:true,event:v,apply:p,init:false},group:{check:q,nullable:true,apply:t},triState:{check:h,apply:a,nullable:true,init:null}},members:{_applyGroup:function(z,A){if(A){A.remove(this);
}
if(z){z.add(this);
}},_applyValue:function(B,C){B?this.addState(c):this.removeState(c);

if(this.isTriState()){if(B===null){this.addState(f);
}else if(C===null){this.removeState(f);
}}},_applyTriState:function(D,E){this._applyValue(this.getValue());
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(i);

if(this.hasState(j)){this.removeState(j);
this.addState(k);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(i);

if(this.hasState(k)){if(!this.getValue()){this.removeState(k);
}this.addState(j);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(j);
this.addState(k);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(j)){this.removeState(j);
}else if(this.hasState(k)){this.execute();
}this.removeState(k);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case d:case g:this.removeState(j);
this.addState(k);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(k)){return;
}
switch(e.getKeyIdentifier()){case d:case g:this.removeState(j);
this.execute();
this.removeState(k);
e.stopPropagation();
}}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var h="label",g="qx.debug",f="checkbox",e="qx.ui.form.CheckBox",d="value",c="toolTipText",b="enabled",a="menu";
qx.Class.define(e,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(i){if(qx.core.Environment.get(g)){this.assertArgumentsCount(arguments,0,1);
}qx.ui.form.ToggleButton.call(this,i);
this.setValue(false);
},properties:{appearance:{refine:true,init:f},allowGrowX:{refine:true,init:false}},members:{_forwardStates:{invalid:true,focused:true,undetermined:true,checked:true,hovered:true},_bindableProperties:[b,h,c,d,a]}});
})();
(function(){var k="auto",j="engine.name",i="hidden",h="overflowY",g="textarea",f="width",d="Boolean",c="Integer",b="input",a="appear",B="mshtml",A="webkit",z="qx.debug",y="px",x="_applyWrap",w="-1",v="_applyMinimalLineHeight",u="mousewheel",t="visible",s="y",q="browser.documentmode",r="_applyAutoSize",o="tabIndex",p='name',m="qx.ui.form.TextArea",n='id',l="absolute";
qx.Class.define(m,{extend:qx.ui.form.AbstractField,construct:function(C){qx.ui.form.AbstractField.call(this,C);
this.initWrap();
this.addListener(u,this._onMousewheel,this);
},properties:{wrap:{check:d,init:true,apply:x},appearance:{refine:true,init:g},singleStep:{check:c,init:20},minimalLineHeight:{check:c,apply:v,init:4},autoSize:{check:d,apply:r,init:false}},members:{__xF:null,__xG:null,__xH:null,setValue:function(D){D=qx.ui.form.AbstractField.prototype.setValue.call(this,D);
this.__xI();
return D;
},_onMousewheel:function(e){var E=this.getContentElement();
var scrollY=E.getScrollY();
E.scrollToY(scrollY+e.getWheelDelta(s)*this.getSingleStep());
var F=E.getScrollY();

if(F!=scrollY){e.stop();
}},__xI:function(){if(this.isAutoSize()){var I=this.__xJ();

if(I){this.__xH=this.__xH||this._getAreaHeight();
var K=this._getScrolledAreaHeight();
if(this.getMaxHeight()){var G=this.getInsets();
var H=-G.top+this.getMaxHeight()-G.bottom;

if(K>H){this.getContentElement().setStyle(h,k);
}else{this.getContentElement().setStyle(h,i);
}}var J=Math.max(K,this.__xH);
this._setAreaHeight(J);
}else{this.addListenerOnce(a,function(){this.__xI();
},this);
}}},_getAreaHeight:function(){return this.getInnerSize().height;
},_setAreaHeight:function(L){if(this._getAreaHeight()!==L){this.__xG=L;
qx.ui.core.queue.Layout.add(this);
qx.ui.core.queue.Manager.flush();
this.__xM();
}},_getScrolledAreaHeight:function(){var N=this.__xJ();
var M=N.getDomElement();

if(M){if(!M.parentNode){qx.html.Element.flush();
return this._getScrolledAreaHeight();
}if(qx.core.Environment.get(j)===A){N.setWrap(!this.getWrap(),true);
}N.setWrap(this.getWrap(),true);
if(qx.core.Environment.get(j)==A){M.style.overflow=i;
}if(qx.core.Environment.get(j)==B&&qx.core.Environment.get(q)>=8){M.style.overflow=t;
}N.setValue(this.getValue());
this.__xL(N);

if(qx.core.Environment.get(j)==B){if(!M.scrollTop){qx.html.Element.flush();
}return M.scrollTop+this._getTextSize().height;
}return M.scrollTop;
}},__xJ:function(){this.__xF=this.__xF||this.__xK();
return this.__xF;
},__xK:function(){var R,P,O,Q;
R=this.getContentElement();
if(!R.getDomElement()){return;
}O=qx.bom.Collection.create(R.getDomElement()).clone()[0];
Q=new qx.html.Input(g);
Q.useElement(O);
P=Q;
P.setStyles({position:l,top:0,left:-9999,height:0,overflow:i},true);
P.removeAttribute(n);
P.removeAttribute(p);
P.setAttribute(o,w);
P.setValue(R.getValue());
P.insertBefore(R);
this.__xL(P);
return P;
},__xL:function(S){S=S.getDomElement();

if(S){S.scrollTop=10000;
}},_createInputElement:function(){return new qx.html.Input(g,{overflowX:k,overflowY:k});
},_applyWrap:function(T,U){this.getContentElement().setWrap(T);
this.__xI();
},_applyMinimalLineHeight:function(){qx.ui.core.queue.Layout.add(this);
},_applyAutoSize:function(V,W){if(qx.core.Environment.get(z)){this.__xN();
}
if(V){this.__xI();
this.addListener(b,this.__xI,this);
this.addListenerOnce(a,function(){this.getContentElement().setStyle(h,i);
});
}else{this.removeListener(b,this.__xI);
this.getContentElement().setStyle(h,k);
}},_applyDimension:function(X){qx.ui.form.AbstractField.prototype._applyDimension.call(this);

if(qx.core.Environment.get(z)){this.__xN();
}
if(X===this.getMaxHeight()){this.__xI();
}},__xM:function(){var content=this.getContentElement();
var ba=content.getDomElement();
var Y=content.getStyle(f);
content.setStyle(f,parseInt(Y,10)+1000+y,true);
if(ba){qx.bom.element.Dimension.getWidth(ba);
}content.setStyle(f,Y,true);
},__xN:function(){if(this.isAutoSize()&&this.getHeight()){this.warn("autoSize is ignored when the height property is set. "+"If you want to set an initial height, use the minHeight "+"property instead.");
}},_getContentHint:function(){var bb=qx.ui.form.AbstractField.prototype._getContentHint.call(this);
bb.height=bb.height*this.getMinimalLineHeight();
bb.width=this._getTextSize().width*20;

if(this.isAutoSize()){bb.height=this.__xG||bb.height;
}return bb;
}}});
})();
(function(){var f="mshtml",e="engine.name",d="pop.push.reverse.shift.sort.splice.unshift.join.slice",c="number",b="qx.type.BaseArray",a=".";
qx.Class.define(b,{extend:Array,construct:function(g){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function k(l){if((qx.core.Environment.get(e)==f)){j.prototype={length:0,$$isArray:true};
var o=d.split(a);

for(var length=o.length;length;){j.prototype[o[--length]]=Array.prototype[o[length]];
}}var p=Array.prototype.slice;
j.prototype.concat=function(){var r=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var q;

if(arguments[i] instanceof j){q=p.call(arguments[i],0);
}else if(arguments[i] instanceof Array){q=arguments[i];
}else{q=[arguments[i]];
}r.push.apply(r,q);
}return r;
};
j.prototype.toString=function(){return p.call(this,0).toString();
};
j.prototype.toLocaleString=function(){return p.call(this,0).toLocaleString();
};
j.prototype.constructor=j;
j.prototype.indexOf=qx.lang.Core.arrayIndexOf;
j.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
j.prototype.forEach=qx.lang.Core.arrayForEach;
j.prototype.some=qx.lang.Core.arraySome;
j.prototype.every=qx.lang.Core.arrayEvery;
var m=qx.lang.Core.arrayFilter;
var n=qx.lang.Core.arrayMap;
j.prototype.filter=function(){var s=new this.constructor;
s.push.apply(s,m.apply(this,arguments));
return s;
};
j.prototype.map=function(){var t=new this.constructor;
t.push.apply(t,n.apply(this,arguments));
return t;
};
j.prototype.slice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.slice.apply(this,arguments));
return u;
};
j.prototype.splice=function(){var v=new this.constructor;
v.push.apply(v,Array.prototype.splice.apply(this,arguments));
return v;
};
j.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
j.prototype.valueOf=function(){return this.length;
};
return j;
}function j(length){if(arguments.length===1&&typeof length===c){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function h(){}h.prototype=[];
j.prototype=new h;
j.prototype.length=0;
qx.type.BaseArray=k(j);
})();
})();
(function(){var t="html.classlist",s="default",r="native",q="",p=" ",o='',n="(^|\\s)",m="(\\s|$)",k="qx.debug",j="\\b",c="g",h='function',f="\\b|\\b",b="qx.bom.element.Class",a='SVGAnimatedString',e='object',d="$2",g='undefined';
qx.Class.define(b,{statics:{__ko:/\s+/g,__kp:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.core.Environment.get(t)?r:s,{"native":function(u,name){u.classList.add(name);
return name;
},"default":function(v,name){if(!this.has(v,name)){v.className+=(v.className?p:q)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.core.Environment.get(t)?r:s,{"native":function(w,x){for(var i=0;i<x.length;i++){w.classList.add(x[i]);
}return w.className;
},"default":function(y,z){var A={};
var C;
var B=y.className;

if(B){C=B.split(this.__ko);

for(var i=0,l=C.length;i<l;i++){A[C[i]]=true;
}
for(var i=0,l=z.length;i<l;i++){if(!A[z[i]]){C.push(z[i]);
}}}else{C=z;
}return y.className=C.join(p);
}}),get:function(D){var E=D.className;

if(typeof E.split!==h){if(typeof E===e){if(qx.Bootstrap.getClass(E)==a){E=E.baseVal;
}else{if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"className for element "+D+" cannot be determined");
}E=o;
}}
if(typeof E===g){if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"className for element "+D+" is undefined");
}E=o;
}}return E;
},has:qx.lang.Object.select(qx.core.Environment.get(t)?r:s,{"native":function(F,name){return F.classList.contains(name);
},"default":function(G,name){var H=new RegExp(n+name+m);
return H.test(G.className);
}}),remove:qx.lang.Object.select(qx.core.Environment.get(t)?r:s,{"native":function(I,name){I.classList.remove(name);
return name;
},"default":function(J,name){var K=new RegExp(n+name+m);
J.className=J.className.replace(K,d);
return name;
}}),removeClasses:qx.lang.Object.select(qx.core.Environment.get(t)?r:s,{"native":function(L,M){for(var i=0;i<M.length;i++){L.classList.remove(M[i]);
}return L.className;
},"default":function(N,O){var P=new RegExp(j+O.join(f)+j,c);
return N.className=N.className.replace(P,q).replace(this.__kp,q).replace(this.__ko,p);
}}),replace:function(Q,R,S){this.remove(Q,R);
return this.add(Q,S);
},toggle:qx.lang.Object.select(qx.core.Environment.get(t)?r:s,{"native":function(T,name,U){if(U===undefined){T.classList.toggle(name);
}else{U?this.add(T,name):this.remove(T,name);
}return name;
},"default":function(V,name,W){if(W==null){W=!this.has(V,name);
}W?this.add(V,name):this.remove(V,name);
return name;
}})}});
})();
(function(){var b=function(c,d){return function(e,f,g,h,k,m){var length=this.length;

if(length>0){var n=c[d];

for(var i=0;i<length;i++){if(this[i].nodeType===1){n.call(c,this[i],e,f,g,h,k,m);
}}}return this;
};
};
var a=function(o,p){return function(q,r,s,t,u,v){if(this.length>0){var w=this[0].nodeType===1?o[p](this[0],q,r,s,t,u,v):null;

if(w&&w.nodeType){return this.__xx([w]);
}else{return w;
}}return null;
};
};
qx.Class.define("qx.bom.Collection",{extend:qx.type.BaseArray,construct:function(x){qx.type.BaseArray.apply(this,arguments);
},statics:{query:function(y,z){var A=qx.bom.Selector.query(y,z);
return qx.lang.Array.cast(A,qx.bom.Collection);
},id:function(B){var C=document.getElementById(B);
if(C&&C.id!=B){return qx.bom.Collection.query("#"+B);
}if(C){return new qx.bom.Collection(C);
}else{return new qx.bom.Collection();
}},html:function(D,E){var F=qx.bom.Html.clean([D],E);
return qx.lang.Array.cast(F,qx.bom.Collection);
},__xt:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(G,H){var J=qx.bom.Collection;
if(G.nodeType){return new J(G);
}else if(typeof G==="string"){var I=J.__xt.exec(G);

if(I){return I[1]?J.html(I[1],H):J.id(I[3]);
}else{return J.query(G,H);
}}else{return qx.lang.Array.cast(G,qx.bom.Collection);
}}},members:{__xu:null,setAttribute:b(qx.bom.element.Attribute,"set"),resetAttribute:b(qx.bom.element.Attribute,"reset"),getAttribute:a(qx.bom.element.Attribute,"get"),addClass:b(qx.bom.element.Class,"add"),getClass:a(qx.bom.element.Class,"get"),hasClass:a(qx.bom.element.Class,"has"),removeClass:b(qx.bom.element.Class,"remove"),replaceClass:b(qx.bom.element.Class,"replace"),toggleClass:b(qx.bom.element.Class,"toggle"),setValue:b(qx.bom.Input,"setValue"),getValue:a(qx.bom.Input,"getValue"),setStyle:b(qx.bom.element.Style,"set"),setStyles:b(qx.bom.element.Style,"setStyles"),resetStyle:b(qx.bom.element.Style,"reset"),getStyle:a(qx.bom.element.Style,"get"),setCss:b(qx.bom.element.Style,"setCss"),getCss:a(qx.bom.element.Style,"getCss"),getOffset:a(qx.bom.element.Location,"get"),getPosition:a(qx.bom.element.Location,"getPosition"),getOffsetParent:a(qx.bom.element.Location,"getOffsetParent"),setScrollLeft:function(K){var Node=qx.dom.Node;

for(var i=0,l=this.length,L;i<l;i++){L=this[i];

if(Node.isElement(L)){L.scrollLeft=K;
}else if(Node.isWindow(L)){L.scrollTo(K,this.getScrollTop(L));
}else if(Node.isDocument(L)){Node.getWindow(L).scrollTo(K,this.getScrollTop(L));
}}return this;
},setScrollTop:function(M){var Node=qx.dom.Node;

for(var i=0,l=this.length,N;i<l;i++){N=this[i];

if(Node.isElement(N)){N.scrollTop=M;
}else if(Node.isWindow(N)){N.scrollTo(this.getScrollLeft(N),M);
}else if(Node.isDocument(N)){Node.getWindow(N).scrollTo(this.getScrollLeft(N),M);
}}return this;
},getScrollLeft:function(){var O=this[0];

if(!O){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(O)||Node.isDocument(O)){return qx.bom.Viewport.getScrollLeft();
}return O.scrollLeft;
},getScrollTop:function(){var P=this[0];

if(!P){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(P)||Node.isDocument(P)){return qx.bom.Viewport.getScrollTop();
}return P.scrollTop;
},getWidth:function(){var Q=this[0];
var Node=qx.dom.Node;

if(Q){if(Node.isElement(Q)){return qx.bom.element.Dimension.getWidth(Q);
}else if(Node.isDocument(Q)){return qx.bom.Document.getWidth(Node.getWindow(Q));
}else if(Node.isWindow(Q)){return qx.bom.Viewport.getWidth(Q);
}}return null;
},getContentWidth:function(){var R=this[0];

if(qx.dom.Node.isElement(R)){return qx.bom.element.Dimension.getContentWidth(R);
}return null;
},getHeight:function(){var S=this[0];
var Node=qx.dom.Node;

if(S){if(Node.isElement(S)){return qx.bom.element.Dimension.getHeight(S);
}else if(Node.isDocument(S)){return qx.bom.Document.getHeight(Node.getWindow(S));
}else if(Node.isWindow(S)){return qx.bom.Viewport.getHeight(S);
}}return null;
},getContentHeight:function(){var T=this[0];

if(qx.dom.Node.isElement(T)){return qx.bom.element.Dimension.getContentHeight(T);
}return null;
},addListener:b(qx.bom.Element,"addListener"),removeListener:b(qx.bom.Element,"removeListener"),eq:function(U){return this.slice(U,+U+1);
},filter:function(V,W){var X;

if(qx.lang.Type.isFunction(V)){X=qx.type.BaseArray.prototype.filter.call(this,V,W);
}else{X=qx.bom.Selector.matches(V,this);
}return this.__xx(X);
},is:function(Y){return !!Y&&qx.bom.Selector.matches(Y,this).length>0;
},__xv:/^.[^:#\[\.,]*$/,not:function(ba){if(this.__xv.test(ba)){var bb=qx.bom.Selector.matches(":not("+ba+")",this);
return this.__xx(bb);
}var bb=qx.bom.Selector.matches(ba,this);
return this.filter(function(bc){return bb.indexOf(bc)===-1;
});
},add:function(bd,be){var bf=qx.bom.Selector.query(bd,be);
var bg=qx.lang.Array.unique(this.concat(bf));
return this.__xx(bg);
},children:function(bh){var bi=[];

for(var i=0,l=this.length;i<l;i++){bi.push.apply(bi,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(bh){bi=qx.bom.Selector.matches(bh,bi);
}return this.__xx(bi);
},closest:function(bj){var bk=new qx.bom.Collection(1);
var bm=qx.bom.Selector;
var bl=this.map(function(bn){while(bn&&bn.ownerDocument){bk[0]=bn;

if(bm.matches(bj,bk).length>0){return bn;
}bn=bn.parentNode;
}});
return this.__xx(qx.lang.Array.unique(bl));
},contents:function(){var bp=[];
var bo=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bp.push.apply(bp,bo.fromCollection(this[i].childNodes));
}return this.__xx(bp);
},find:function(bq){var bs=qx.bom.Selector;
if(this.length===1){return this.__xx(bs.query(bq,this[0]));
}else{var br=[];

for(var i=0,l=this.length;i<l;i++){br.push.apply(br,bs.query(bq,this[i]));
}return this.__xx(qx.lang.Array.unique(br));
}},next:function(bt){var bu=qx.dom.Hierarchy;
var bv=this.map(bu.getNextElementSibling,bu);
if(bt){bv=qx.bom.Selector.matches(bt,bv);
}return this.__xx(bv);
},nextAll:function(bw){return this.__xw("getNextSiblings",bw);
},prev:function(bx){var by=qx.dom.Hierarchy;
var bz=this.map(by.getPreviousElementSibling,by);
if(bx){bz=qx.bom.Selector.matches(bx,bz);
}return this.__xx(bz);
},prevAll:function(bA){return this.__xw("getPreviousSiblings",bA);
},parent:function(bB){var Element=qx.dom.Element;
var bC=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(bB){bC=qx.bom.Selector.matches(bB,bC);
}return this.__xx(bC);
},parents:function(bD){return this.__xw("getAncestors",bD);
},siblings:function(bE){return this.__xw("getSiblings",bE);
},__xw:function(bF,bG){var bI=[];
var bH=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){bI.push.apply(bI,bH[bF](this[i]));
}var bJ=qx.lang.Array.unique(bI);
if(bG){bJ=qx.bom.Selector.matches(bG,bJ);
}return this.__xx(bJ);
},__xx:function(bK){var bL=new qx.bom.Collection;
bL.__xu=this;
bK=Array.prototype.slice.call(bK,0);
bL.push.apply(bL,bK);
return bL;
},andSelf:function(){return this.add(this.__xu);
},end:function(){return this.__xu||new qx.bom.Collection();
},__xy:function(bM,bN){var bS=this[0];
var bR=bS.ownerDocument||bS;
var bQ=bR.createDocumentFragment();
var bU=qx.bom.Html.clean(bM,bR,bQ);
var bW=bQ.firstChild;
if(bW){var bO=this.length-1;

for(var i=0,l=bO;i<l;i++){bN.call(this,this[i],bQ.cloneNode(true));
}bN.call(this,this[bO],bQ);
}if(bU){var bP;
var bV=qx.io.ScriptLoader;
var bT=qx.lang.Function;

for(var i=0,l=bU.length;i<l;i++){bP=bU[i];
if(bP.src){(new bV()).load(bP.src);
}else{bT.globalEval(bP.text||bP.textContent||bP.innerHTML||"");
}if(bP.parentNode){bP.parentNode.removeChild(bP);
}}}return this;
},__xz:function(bX,bY){var cb=qx.bom.Selector;
var ca=qx.lang.Array;
var cd=[];

for(var i=0,l=bX.length;i<l;i++){if(qx.core.Environment.get("qx.debug")){if(typeof bX[i]!=="string"){throw new Error("Invalid argument for selector query: "+bX[i]);
}}cd.push.apply(cd,cb.query(bX[i]));
}cd=ca.cast(ca.unique(cd),qx.bom.Collection);
for(var i=0,cc=this.length;i<cc;i++){cd[bY](this[i]);
}return this;
},append:function(ce){return this.__xy(arguments,this.__xA);
},prepend:function(cf){return this.__xy(arguments,this.__xB);
},__xA:function(cg,ch){cg.appendChild(ch);
},__xB:function(ci,cj){ci.insertBefore(cj,ci.firstChild);
},appendTo:function(ck){return this.__xz(arguments,"append");
},prependTo:function(cl){return this.__xz(arguments,"prepend");
},before:function(cm){return this.__xy(arguments,this.__xC);
},after:function(cn){return this.__xy(arguments,this.__xD);
},__xC:function(co,cp){co.parentNode.insertBefore(cp,co);
},__xD:function(cq,cr){cq.parentNode.insertBefore(cr,cq.nextSibling);
},insertBefore:function(cs){return this.__xz(arguments,"before");
},insertAfter:function(ct){return this.__xz(arguments,"after");
},wrapAll:function(content){var cv=this[0];

if(cv){var cu=qx.bom.Collection.create(content,cv.ownerDocument).clone();
if(cv.parentNode){cv.parentNode.insertBefore(cu[0],cv);
}cu.map(this.__xE).append(this);
}return this;
},__xE:function(cw){while(cw.firstChild){cw=cw.firstChild;
}return cw;
},wrapInner:function(content){var cx=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){cx[0]=this[i];
cx.contents().wrapAll(content);
}return this;
},wrap:function(content){var cy=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){cy[0]=this[i];
cy.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(cz){return this.__xz(arguments,"replaceWith");
},remove:function(cA){var cC=this;

if(cA){cC=this.filter(cA);

if(cC.length==0){return this;
}}for(var i=0,cD=cC.length,cB;i<cD;i++){cB=cC[i];

if(cB.parentNode){cB.parentNode.removeChild(cB);
}}return cC;
},destroy:function(cE){if(this.length==0){return this;
}var cG=qx.bom.Selector;
var cJ=this;

if(cE){cJ=this.filter(cE);

if(cJ.length==0){return this;
}}var cI=qx.event.Registration.getManager(this[0]);

for(var i=0,l=cJ.length,cH,cK;i<l;i++){cH=cJ[i];
cI.removeAllListeners(cH);
cK=cG.query("*",cH);

for(var j=0,cF=cK.length;j<cF;j++){cI.removeAllListeners(cK[j]);
}if(cH.parentNode){cH.parentNode.removeChild(cH);
}}if(cE){cJ.end();
qx.lang.Array.exclude(this,cJ);
}else{this.length=0;
}return this;
},empty:function(){var cL=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){cL.query(">*",this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(cM){var Element=qx.bom.Element;
return cM?this.map(function(cN){return Element.clone(cN,true);
}):this.map(Element.clone,Element);
}},defer:function(cO){if(window.$==null){window.$=cO.create;
}}});
})();
(function(){var m="string",k="script",h="<table>",g="engine.name",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__xl:function(K,L,M){return M.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?K:L+z+M+H;
},__xm:{opt:[1,e,c],leg:[1,f,u],table:[1,h,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Environment.select(g,{"mshtml":[1,s,d],"default":null})},__xn:function(N,O){var U=O.createElement(J);
N=N.replace(/(<(\w+)[^>]*?)\/>/g,this.__xl);
var Q=N.replace(/^\s+/,t).substring(0,5).toLowerCase();
var T,P=this.__xm;

if(!Q.indexOf(B)){T=P.opt;
}else if(!Q.indexOf(o)){T=P.leg;
}else if(Q.match(/^<(thead|tbody|tfoot|colg|cap)/)){T=P.table;
}else if(!Q.indexOf(w)){T=P.tr;
}else if(!Q.indexOf(D)||!Q.indexOf(F)){T=P.td;
}else if(!Q.indexOf(a)){T=P.col;
}else{T=P.def;
}if(T){U.innerHTML=T[1]+N+T[2];
var S=T[0];

while(S--){U=U.lastChild;
}}else{U.innerHTML=N;
}if((qx.core.Environment.get(g)==q)){var V=/<tbody/i.test(N);
var R=!Q.indexOf(p)&&!V?U.firstChild&&U.firstChild.childNodes:T[1]==h&&!V?U.childNodes:[];

for(var j=R.length-1;j>=0;--j){if(R[j].tagName.toLowerCase()===v&&!R[j].childNodes.length){R[j].parentNode.removeChild(R[j]);
}}if(/^\s/.test(N)){U.insertBefore(O.createTextNode(N.match(/^\s*/)[0]),U.firstChild);
}}return qx.lang.Array.fromCollection(U.childNodes);
},clean:function(W,X,Y){X=X||document;
if(typeof X.createElement===x){X=X.ownerDocument||X[0]&&X[0].ownerDocument||document;
}if(!Y&&W.length===1&&typeof W[0]===m){var bg=/^<(\w+)\s*\/?>$/.exec(W[0]);

if(bg){return [X.createElement(bg[1])];
}}var ba,bc=[];

for(var i=0,l=W.length;i<l;i++){ba=W[i];
if(typeof ba===m){ba=this.__xn(ba,X);
}if(ba.nodeType){bc.push(ba);
}else if(ba instanceof qx.type.BaseArray){bc.push.apply(bc,Array.prototype.slice.call(ba,0));
}else if(ba.toElement){bc.push(ba.toElement());
}else{bc.push.apply(bc,ba);
}}if(Y){var bf=[],be=qx.lang.Array,bd,bb;

for(var i=0;bc[i];i++){bd=bc[i];

if(bd.nodeType==1&&bd.tagName.toLowerCase()===k&&(!bd.type||bd.type.toLowerCase()===A)){if(bd.parentNode){bd.parentNode.removeChild(bc[i]);
}bf.push(bd);
}else{if(bd.nodeType===1){bb=be.fromCollection(bd.getElementsByTagName(k));
bc.splice.apply(bc,[i+1,0].concat(bb));
}Y.appendChild(bd);
}}return bf;
}return bc;
}}});
})();
(function(){var p="success",o="fail",n="mshtml",m="complete",l="error",k="load",j="opera",i="loaded",h="readystatechange",g="head",c="webkit",f="script",d="qx.io.ScriptLoader",b="text/javascript",a="abort";
qx.Bootstrap.define(d,{construct:function(){this.__zP=qx.Bootstrap.bind(this.__zS,this);
this.__zQ=document.createElement(f);
},statics:{TIMEOUT:15},members:{__zR:null,__sv:null,__bD:null,__bE:null,__zP:null,__zQ:null,load:function(q,r,s){if(this.__zR){throw new Error("Another request is still running!");
}this.__zR=true;
this.__sv=false;
var t=document.getElementsByTagName(g)[0];
var u=this.__zQ;
this.__bD=r||null;
this.__bE=s||window;
u.type=b;
u.onerror=u.onload=u.onreadystatechange=this.__zP;
var self=this;
if(qx.bom.client.Engine.getName()===j&&this._getTimeout()>0){setTimeout(function(){self.dispose(o);
},this._getTimeout()*1000);
}u.src=q;
setTimeout(function(){t.appendChild(u);
},0);
},abort:function(){if(this.__zR){this.dispose(a);
}},dispose:function(status){if(this.__sv){return;
}this.__sv=true;
var x=this.__zQ;
x.onerror=x.onload=x.onreadystatechange=null;
var w=x.parentNode;

if(w){w.removeChild(x);
}delete this.__zR;
if(this.__bD){var v=qx.bom.client.Engine.getName();

if(v==n||v==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__bD.call(self.__bE,status);
delete self.__bD;
}),0);
}else{this.__bD.call(this.__bE,status);
delete this.__bD;
}}},_getTimeout:function(){return qx.io.ScriptLoader.TIMEOUT;
},__zS:qx.event.GlobalError.observeMethod(function(e){var y=qx.bom.client.Engine.getName();
if(y==n){var z=this.__zQ.readyState;

if(z==i){this.dispose(p);
}else if(z==m){this.dispose(p);
}else{return;
}}else if(y==j){if(qx.Bootstrap.isString(e)||e.type===l){return this.dispose(o);
}else if(e.type===k){return this.dispose(p);
}else{return;
}}else{if(qx.Bootstrap.isString(e)||e.type===l){this.dispose(o);
}else if(e.type===k){this.dispose(p);
}else if(e.type===h&&(e.target.readyState===m||e.target.readyState===i)){this.dispose(p);
}else{return;
}}})}});
})();
(function(){var n="",m="Import",l="visible",k="icon/16/actions/window-new.png",j="changeFeatureMap",i="Feature Set Name",h="Import Feature Map",g="center",f="fce.view.ImportWindow",e="JSON field may not be empty!",b="Feature Set Definition (JSON)",d="close",c="red",a="execute";
qx.Class.define(f,{extend:qx.ui.window.Window,properties:{featureMap:{event:j}},construct:function(){qx.ui.window.Window.call(this,h,k);
this.setWidth(300);
this.setHeight(400);
this.setLayout(new qx.ui.layout.VBox(10));
var o=new qx.ui.basic.Label(i);
this.add(o);
var s=this.__Nn=new qx.ui.form.TextField();
this.add(s);
o.setBuddy(s);
var q=new qx.ui.basic.Label(b);
this.add(q);
var p=this.__No=new qx.ui.form.TextArea();
this.add(p,{flex:1});
q.setBuddy(p);
var r=new qx.ui.basic.Label(n);
r.setTextColor(c);
this.add(r);
r.exclude();
this.__Np=r;
var t=new qx.ui.form.Button(m);
t.setAlignX(g);
t.setAllowGrowX(false);
this.add(t);
this.addListener(d,this.reset,this);
t.addListener(a,this._onImport,this);
},members:{__Nn:null,__No:null,__Np:null,reset:function(){this.__Nn.setValue(n);
this.__No.setValue(n);
this.__Np.setValue(n);
this.__Np.exclude();
},_onImport:function(){var name=this.__Nn.getValue();
var v=this.__No.getValue();

if(!v){this._showError(e);
return;
}var w;

try{w=qx.lang.Json.parse(v);
}catch(x){this._showError(x.message);
return;
}
try{qx.core.Assert.assertMap(w);
}catch(y){this._showError(y.message);
return;
}var u={};
u[name]=w;

try{this.setFeatureMap(u);
}catch(z){this._showError(z.message);
return;
}this.close();
},_showError:function(A){this.__Np.setValue(A);
this.__Np.setVisibility(l);
}}});
})();
(function(){var f="undefined",e="object",d="fce.Util",c="null";
qx.Class.define(d,{statics:{getFormattedJson:function(g){var k={};
var j=qx.lang.Object.getKeys(g).sort();

for(var i=0,l=j.length;i<l;i++){var h=j[i];
if(g[h]===c||/^(?:\{|\[)".*(?:\}|\])$/.test(g[h])){k[h]=qx.lang.Json.parse(g[h]);
}else{k[h]=g[h];
}}return qx.lang.Json.stringify(k,null,2);
},mapsEqual:function(a,b){if(qx.lang.Object.getLength(a)!==qx.lang.Object.getLength(b)){return false;
}
for(var n in a){if(typeof b[n]==f){return false;
}}
for(var n in b){if(typeof a[n]==f){return false;
}}
for(var n in a){var m=fce.Util.valuesEqual(a[n],b[n]);

if(!m){return false;
}}return true;
},valuesEqual:function(a,b){if(typeof a!==typeof b){return false;
}if(typeof a!==e){if(a!==b){return false;
}}else{if(a instanceof Array&&!(b instanceof Array)||b instanceof Array&&!(a instanceof Array)){return false;
}if(a instanceof Array){if(a.length!==b.length){return false;
}
for(var i=0,l=a.length;i<l;i++){var o=fce.Util.valuesEqual(a[i],b[i]);

if(!o){return false;
}}}else{var o=fce.Util.mapsEqual(a,b);

if(!o){return false;
}}}return true;
}}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var n="qx.data.model.",m="",l="Array",k="_validate",j="qx.debug",h='"',g="qx.debug.databinding",f="change",e="qx.data.marshal.Json",d="set",a="' is not a valid JavaScript identifier.",c="_applyEventPropagation",b="The key '";
qx.Class.define(e,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(o){qx.core.Object.call(this);
this.__zI=o;
},statics:{$$instance:null,createModel:function(p,q){if(this.$$instance===null){this.$$instance=new qx.data.marshal.Json();
}this.$$instance.toClass(p,q);
return this.$$instance.toModel(p);
}},members:{__zI:null,__zJ:function(r){return qx.Bootstrap.getKeys(r).sort().join(h);
},toClass:function(s,t){if(!qx.lang.Type.isObject(s)||!!s.$$isString||s instanceof qx.core.Object){if(s instanceof Array||qx.Bootstrap.getClass(s)==l){for(var i=0;i<s.length;i++){this.toClass(s[i],t);
}}return ;
}var v=this.__zJ(s);
for(var w in s){this.toClass(s[w],t);
}if(qx.Class.isDefined(n+v)){return;
}if(this.__zI&&this.__zI.getModelClass&&this.__zI.getModelClass(v)!=null){return;
}var C={};
var B={__zK:this.__zK};

for(var w in s){w=w.replace(/-|\.|\s+/g,m);
if(qx.core.Environment.get(j)){this.assertTrue((/^[$0-9A-Za-z_]*$/).test(w),b+w+a);
}C[w]={};
C[w].nullable=true;
C[w].event=f+qx.lang.String.firstUp(w);
if(t){C[w].apply=c;
}if(this.__zI&&this.__zI.getValidationRule){var y=this.__zI.getValidationRule(v,w);

if(y){C[w].validate=k+w;
B[k+w]=y;
}}}if(this.__zI&&this.__zI.getModelSuperClass){var A=this.__zI.getModelSuperClass(v)||qx.core.Object;
}else{var A=qx.core.Object;
}var x=[];

if(this.__zI&&this.__zI.getModelMixins){var z=this.__zI.getModelMixins(v);
if(!qx.lang.Type.isArray(z)){if(z!=null){x=[z];
}}else{x=z;
}}if(t){x.push(qx.data.marshal.MEventBubbling);
}var u={extend:A,include:x,properties:C,members:B,destruct:this.__zL};
qx.Class.define(n+v,u);
},__zL:function(){var D=qx.util.PropertyUtil.getAllProperties(this.constructor);

for(var E in D){this.__zK(this.get(D[E].name));
}},__zK:function(F){if(!(F instanceof qx.core.Object)){return ;
}if(F.isDisposed()){return;
}F.dispose();
},__zM:function(G){var H;
if(this.__zI&&this.__zI.getModelClass){H=this.__zI.getModelClass(G);
}
if(H!=null){return (new H());
}else{var I=qx.Class.getByName(n+G);
return (new I());
}},toModel:function(J){var N=qx.lang.Type.isObject(J);
var K=J instanceof Array||qx.Bootstrap.getClass(J)==l;

if((!N&&!K)||!!J.$$isString||J instanceof qx.core.Object){return J;
}else if(K){var P=new qx.data.Array();
P.setAutoDisposeItems(true);

for(var i=0;i<J.length;i++){P.push(this.toModel(J[i]));
}return P;
}else if(N){var L=this.__zJ(J);
var Q=this.__zM(L);
for(var O in J){var M=O.replace(/-|\.|\s+/g,m);
if((qx.core.Environment.get(j))&&qx.core.Environment.get(g)){if(O!=M){this.warn("The model contained an illegal name: '"+O+"'. Replaced it with '"+M+"'.");
}}Q[d+qx.lang.String.firstUp(M)](this.toModel(J[O]));
}return Q;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__zI=null;
}});
})();
(function(){var b="fce.Environment",a="changeFeatures";
qx.Class.define(b,{extend:qx.core.Object,properties:{features:{nullable:true,init:null,event:a}},members:{__qw:null,check:function(){var g=qx.core.Environment.getChecks();
var e=qx.lang.Object.getKeys(g);
var d={};

for(var i=0,l=e.length;i<l;i++){var f=e[i];
d[f]=qx.core.Environment.get(f);
}g=qx.core.Environment.getAsyncChecks();
var c=qx.lang.Object.getLength(g);
e=qx.lang.Object.getKeys(g);

for(var i=0,l=e.length;i<l;i++){var f=e[i];
qx.core.Environment.getAsync(f,function(h){d[f]=h;
c--;

if(c==0){this.setFeatures(d);
}},this);
}
if(c==0){this.setFeatures(d);
}}}});
})();
(function(){var e="qx.revision",d="qxc.ui.versionlabel.VersionLabel",c="qx.version",b="qooxdoo",a=" ";
qx.Class.define(d,{extend:qx.ui.basic.Label,construct:function(f){var h;

if(!f){h=b;
}else{h=f;
}var g=qx.core.Environment.get(e)?qx.core.Environment.get(e):qx.core.Environment.get(c);
h+=a+g;
qx.ui.basic.Label.call(this,h);
}});
})();
(function(){var j="fail",h="timeout",g="browser.name",f="success",e="qx.debug",d="GET",c="fce.Reporter",b="POST",a="object";
qx.Class.define(c,{extend:qx.core.Object,statics:{IGNORED_FEATURES:[/^qx\./,/^plugin\./]},construct:function(k,m,n){qx.core.Object.call(this);

if(k){this.setServer(k);
}
if(m){this.setAddUrl(m);
}
if(n){this.setGetUrl(n);
}},properties:{server:{init:null,nullable:true},addUrl:{init:null,nullable:true},getUrl:{init:null,nullable:true}},members:{__Nq:null,_sendReport:function(o){if(this.getServer()===null||this.getAddUrl()===null){throw new Error("Report server host or URL not specified!");
}
if(qx.core.Environment.get(e)){this.debug("Reporting result");
}var r=qx.lang.Json.stringify(o);
var p=this.getServer()+this.getAddUrl();
var q=new qx.io.request.Jsonp(p,b);
q.setRequestData({data:r});
q.addListener(j,function(s){this.error("Request failed!");
},this);
q.addListener(h,function(t){this.error("Request timed out!");
},this);
q.addListener(f,function(u){var v=u.getTarget().getResponse();

if(v.id){this.info("Report saved. ID: "+v.id);
}else{this.info("Report ignored to prevent duplicate entry.");
}},this);
q.send();
},compare:function(w){this.__Nq=w;

if(this.getGetUrl()){this.getFeaturesFromServer();
}else{this._sendReport(this.__Nq);
}},getFeaturesFromServer:function(){var x=navigator.userAgent;
var z=this.getServer()+this.getGetUrl();
var y=new qx.io.request.Jsonp(z,d);
y.setRequestData({useragent:x});
y.addListener(f,function(A){var B=A.getTarget().getResponse();

if(qx.lang.Object.getKeys(B).length==0){this.debug("Sending this client's environment data to the server");
this._sendReport(this.__Nq);
}else{this._compareFeatureSets(B);
}},this);
y.addListener(j,function(C){this.error("Request failed with status",y.getStatus());
},this);
y.addListener(h,function(D){this.error("Request timed out");
},this);
y.send();
},_compareFeatureSets:function(E){if(!E[g]||!this.__Nq[g]){return;
}var H=[];

for(var I in this.__Nq){if(this.isIgnored(I)){continue;
}
if(!E.hasOwnProperty(I)){H.push(I);
continue;
}var G=typeof E[I];
var L=typeof this.__Nq[I];

if(G!==L){H.push(I);
continue;
}var K=E[I];
var J=this.__Nq[I];

if(J instanceof Array){if(J.length!==K.length){H.push(I);
continue;
}
for(var i=0,l=J.length;i<l;i++){if(J[i]!==K[i]){H.push(I);
continue;
}}}else if(G===a){for(var F in K){if(!J.hasOwnProperty(F)||J[F]!==K[F]){H.push(I);
continue;
}}}else if(K!==J){H.push(I);
}}
if(H.length==0){this.info("No differences found");
}
for(var i=0,l=H.length;i<l;i++){var I=H[i];
this.error(I,"expected",E[I],"found",this.__Nq[I]);
}},isIgnored:function(M){var N=fce.Reporter.IGNORED_FEATURES;

for(var i=0,l=N.length;i<l;i++){if(N[i] instanceof RegExp){return N[i].exec(M);
}
if(M===N[i]){return true;
}}}}});
})();
(function(){var j="qx.event.type.Event",i="qx.debug.io",h="fail",g="GET",f="qx.event.type.Data",e="qx.debug",d="load",c="abort",b="loadEnd",a="Map",F="qx.io.request.AbstractRequest",E="changePhase",D="Please use setRequestHeader() instead.",C="sent",B="qx.io.request.authentication.IAuthentication",A="error",z="loading",y="success",x="String",w="",q="opened",r="Please use getRequestHeader() instead.",o="POST",p="statusError",m="readyStateChange",n="abstract",k="unsent",l="changeResponse",s="Number",t="Content-Type",v="timeout",u="undefined";
qx.Class.define(F,{type:n,extend:qx.core.Object,construct:function(G){qx.core.Object.call(this);

if(G!==undefined){this.setUrl(G);
}this.__ql={};
var H=this._transport=this._createTransport();
this._setPhase(k);
this.__sF=qx.lang.Function.bind(this._onReadyStateChange,this);
this.__sG=qx.lang.Function.bind(this._onLoad,this);
this.__sH=qx.lang.Function.bind(this._onLoadEnd,this);
this.__sI=qx.lang.Function.bind(this._onAbort,this);
this.__sq=qx.lang.Function.bind(this._onTimeout,this);
this.__sJ=qx.lang.Function.bind(this._onError,this);
H.onreadystatechange=this.__sF;
H.onload=this.__sG;
H.onloadend=this.__sH;
H.onabort=this.__sI;
H.ontimeout=this.__sq;
H.onerror=this.__sJ;
},events:{"readyStateChange":j,"success":j,"load":j,"loadEnd":j,"abort":j,"timeout":j,"error":j,"statusError":j,"fail":j,"changeResponse":f,"changePhase":f},properties:{url:{check:x},requestHeaders:{check:a,nullable:true},timeout:{check:s,nullable:true,init:0},requestData:{check:function(I){return qx.lang.Type.isString(I)||qx.Class.isSubClassOf(I.constructor,qx.core.Object)||qx.lang.Type.isObject(I);
},nullable:true},authentication:{check:B,nullable:true}},members:{__sF:null,__sG:null,__sH:null,__sI:null,__sq:null,__sJ:null,__sK:null,__st:null,__sL:null,__ql:null,__sM:null,_transport:null,_createTransport:function(){throw new Error("Abstract method call");
},_getConfiguredUrl:function(){},_getConfiguredRequestHeaders:function(){},_getParsedResponse:function(){throw new Error("Abstract method call");
},_getMethod:function(){return g;
},_isAsync:function(){return true;
},send:function(){var N=this._transport,J,M,K,L;
J=this._getConfiguredUrl();
if(/\#/.test(J)){J=J.replace(/\#.*/,w);
}N.timeout=this.getTimeout();
M=this._getMethod();
K=this._isAsync();
if(qx.core.Environment.get(i)){this.debug("Open low-level request with method: "+M+", url: "+J+", async: "+K);
}N.open(M,J,K);
this._setPhase(q);
L=this._serializeData(this.getRequestData());
this._setRequestHeaders();
if(qx.core.Environment.get(i)){this.debug("Send low-level request");
}M==g?N.send():N.send(L);
this._setPhase(C);
},abort:function(){if(qx.core.Environment.get(i)){this.debug("Abort request");
}this.__st=true;
this.__sL=c;
this._transport.abort();
},_setRequestHeaders:function(){var Q=this._transport,O=this._getAllRequestHeaders();

for(var P in O){Q.setRequestHeader(P,O[P]);
}},_getAllRequestHeaders:function(){var R=qx.lang.Object.merge({},this._getConfiguredRequestHeaders(),this.__sN(),this.__sM,this.__ql);
return R;
},__sN:function(){var T=this.getAuthentication(),S={};

if(T){T.getAuthHeaders().forEach(function(U){S[U.key]=U.value;
});
return S;
}},setRequestHeader:function(V,W){this.__ql[V]=W;
},getRequestHeader:function(X){return this.__ql[X];
},removeRequestHeader:function(Y){if(this.__ql[Y]){delete this.__ql[Y];
}},setRequestHeaders:function(ba){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
qx.core.Assert.assertObject(ba);
this.__sM=ba;
},getRequestHeaders:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
return this.__sM;
},getTransport:function(){return this._transport;
},getReadyState:function(){return this._transport.readyState;
},getPhase:function(){return this.__sL;
},getStatus:function(){return this._transport.status;
},getStatusText:function(){return this._transport.statusText;
},getResponseText:function(){return this._transport.responseText;
},getAllResponseHeaders:function(){return this._transport.getAllResponseHeaders();
},getResponseHeader:function(bb){return this._transport.getResponseHeader(bb);
},getResponseContentType:function(){return this.getResponseHeader(t);
},isDone:function(){return this.getReadyState()===4;
},getResponse:function(){return this.__sK;
},_setResponse:function(bc){var bd=bc;

if(this.__sK!==bc){this.__sK=bc;
this.fireEvent(l,qx.event.type.Data,[this.__sK,bd]);
}},_onReadyStateChange:function(){var be=this.getReadyState();

if(qx.core.Environment.get(i)){this.debug("Fire readyState: "+be);
}this.fireEvent(m);
if(this.__st){return;
}
if(be===3){this._setPhase(z);
}
if(this.isDone()){this.__sO();
}},__sO:function(){var bf;

if(qx.core.Environment.get(i)){this.debug("Request completed with HTTP status: "+this.getStatus());
}this._setPhase(d);
if(qx.util.Request.isSuccessful(this.getStatus())){if(qx.core.Environment.get(i)){this.debug("Response is of type: '"+this.getResponseContentType()+"'");
}bf=this._getParsedResponse();
this._setResponse(bf);
this._fireStatefulEvent(y);
}else{if(this.getStatus()!==0){this._fireStatefulEvent(p);
this.fireEvent(h);
}}},_onLoad:function(){this.fireEvent(d);
},_onLoadEnd:function(){this.fireEvent(b);
},_onAbort:function(){this._fireStatefulEvent(c);
},_onTimeout:function(){this._fireStatefulEvent(v);
this.fireEvent(h);
},_onError:function(){this.fireEvent(A);
this.fireEvent(h);
},_fireStatefulEvent:function(bg){if(qx.core.Environment.get(e)){qx.core.Assert.assertString(bg);
}this._setPhase(bg);
this.fireEvent(bg);
},_setPhase:function(bh){var bi=this.__sL;

if(qx.core.Environment.get(e)){qx.core.Assert.assertString(bh);
qx.core.Assert.assertMatch(bh,/^(unsent)|(opened)|(sent)|(loading)|(load)|(success)|(abort)|(timeout)|(statusError)$/);
}this.__sL=bh;
this.fireDataEvent(E,bh,bi);
},_serializeData:function(bj){var bk=typeof this.getMethod!==u&&this.getMethod()==o;

if(!bj){return;
}
if(qx.lang.Type.isString(bj)){return bj;
}
if(qx.Class.isSubClassOf(bj.constructor,qx.core.Object)){return qx.util.Serializer.toUriParameter(bj);
}
if(qx.lang.Type.isObject(bj)){return qx.lang.Object.toUriParameter(bj,bk);
}}},environment:{"qx.debug.io":false},destruct:function(){var bm=this._transport,bl=function(){};

if(this._transport){bm.onreadystatechange=bm.onload=bm.onloadend=bm.onabort=bm.ontimeout=bm.onerror=bl;
bm.dispose();
}}});
})();
(function(){var b="//",a="qx.util.Request";
qx.Class.define(a,{statics:{isCrossDomain:function(c){var e=qx.util.Uri.parseUri(c),location=window.location,d=location.protocol;
if(!(c.indexOf(b)!==-1)){return false;
}
if(d.substr(0,d.length-1)==e.protocol&&location.host===e.host&&location.port===e.port){return false;
}return true;
},isSuccessful:function(status){return (status>=200&&status<300||status===304);
},methodAllowsRequestBody:function(f){return !((/^(GET)|(HEAD)$/).test(f));
}}});
})();
(function(){var u='"',t="{",s="[",r=",",q="",p="get",o="}",n="]",m='":',l="&",d="null",k='\\t',g='\\"',c='\\n',b='\\b',f="=",e="qx.util.Serializer",h='\\r',a='\\\\',j='\\f';
qx.Class.define(e,{statics:{toUriParameter:function(v,w,x){var B=q;
var C=qx.util.PropertyUtil.getAllProperties(v.constructor);

for(var name in C){if(C[name].group!=undefined){continue;
}var y=v[p+qx.lang.String.firstUp(name)]();
if(qx.lang.Type.isArray(y)){var A=qx.data&&qx.data.IListData&&qx.Class.hasInterface(y&&y.constructor,qx.data.IListData);

for(var i=0;i<y.length;i++){var z=A?y.getItem(i):y[i];
B+=this.__da(name,z,w);
}}else if(qx.lang.Type.isDate(y)&&x!=null){B+=this.__da(name,x.format(y),w);
}else{B+=this.__da(name,y,w);
}}return B.substring(0,B.length-1);
},__da:function(name,D,E){if(D instanceof qx.core.Object&&E!=null){var F=encodeURIComponent(E(D));

if(F===undefined){var F=encodeURIComponent(D);
}}else{var F=encodeURIComponent(D);
}return encodeURIComponent(name)+f+F+l;
},toNativeObject:function(G,H,I){var L;
if(G==null){return null;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(G.constructor,qx.data.IListData)){L=[];

for(var i=0;i<G.getLength();i++){L.push(qx.util.Serializer.toNativeObject(G.getItem(i),H,I));
}return L;
}if(qx.lang.Type.isArray(G)){L=[];

for(var i=0;i<G.length;i++){L.push(qx.util.Serializer.toNativeObject(G[i],H,I));
}return L;
}if(G instanceof qx.core.Object){if(H!=null){var M=H(G);
if(M!=undefined){return M;
}}L={};
var N=qx.util.PropertyUtil.getAllProperties(G.constructor);

for(var name in N){if(N[name].group!=undefined){continue;
}var K=G[p+qx.lang.String.firstUp(name)]();
L[name]=qx.util.Serializer.toNativeObject(K,H,I);
}return L;
}if(qx.lang.Type.isDate(G)&&I!=null){return I.format(G);
}if(qx.locale&&qx.locale.LocalizedString&&G instanceof qx.locale.LocalizedString){return G.toString();
}if(qx.lang.Type.isObject(G)){L={};

for(var J in G){L[J]=qx.util.Serializer.toNativeObject(G[J],H,I);
}return L;
}return G;
},toJson:function(O,P,Q){var T=q;
if(O==null){return d;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(O.constructor,qx.data.IListData)){T+=s;

for(var i=0;i<O.getLength();i++){T+=qx.util.Serializer.toJson(O.getItem(i),P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(qx.lang.Type.isArray(O)){T+=s;

for(var i=0;i<O.length;i++){T+=qx.util.Serializer.toJson(O[i],P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(O instanceof qx.core.Object){if(P!=null){var U=P(O);
if(U!=undefined){return u+U+u;
}}T+=t;
var V=qx.util.PropertyUtil.getAllProperties(O.constructor);

for(var name in V){if(V[name].group!=undefined){continue;
}var S=O[p+qx.lang.String.firstUp(name)]();
T+=u+name+m+qx.util.Serializer.toJson(S,P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(O instanceof qx.locale.LocalizedString){O=O.toString();
}if(qx.lang.Type.isDate(O)&&Q!=null){return u+Q.format(O)+u;
}if(qx.lang.Type.isObject(O)){T+=t;

for(var R in O){T+=u+R+m+qx.util.Serializer.toJson(O[R],P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(qx.lang.Type.isString(O)){O=O.replace(/([\\])/g,a);
O=O.replace(/(["])/g,g);
O=O.replace(/([\r])/g,h);
O=O.replace(/([\f])/g,j);
O=O.replace(/([\n])/g,c);
O=O.replace(/([\t])/g,k);
O=O.replace(/([\b])/g,b);
return u+O+u;
}if(qx.lang.Type.isDate(O)||qx.lang.Type.isRegExp(O)){return u+O+u;
}return O+q;
}}});
})();
(function(){var c="qx.event.type.Event",b="qx.io.request.Jsonp",a="Boolean";
qx.Class.define(b,{extend:qx.io.request.AbstractRequest,events:{"success":c,"load":c,"statusError":c},properties:{cache:{check:a,init:true}},members:{_createTransport:function(){return new qx.bom.request.Jsonp();
},_getConfiguredUrl:function(){var d=this.getUrl(),e;

if(this.getRequestData()){e=this._serializeData(this.getRequestData());
d=qx.util.Uri.appendParamsToUrl(d,e);
}
if(!this.getCache()){d=qx.util.Uri.appendParamsToUrl(d,{nocache:new Date().valueOf()});
}return d;
},_getParsedResponse:function(){return this._transport.responseJson;
},setCallbackParam:function(f){this._transport.setCallbackParam(f);
},setCallbackName:function(name){this._transport.setCallbackName(name);
}}});
})();
(function(){var l="qx.debug.io",k="engine.name",j="mshtml",i="",h="browser.documentmode",g="qx.debug",f="head",e="script",d="opera",c="Unknown response headers",a="unknown",b="qx.bom.request.Script";
qx.Bootstrap.define(b,{construct:function(){this.__sx();
this.__so=qx.Bootstrap.bind(this._onNativeLoad,this);
this.__sp=qx.Bootstrap.bind(this._onNativeError,this);
this.__sq=qx.Bootstrap.bind(this._onTimeout,this);
this.__sr=document.head||document.getElementsByTagName(f)[0]||document.documentElement;
this.timeout=this.__sB()?0:15000;
},members:{readyState:null,status:null,statusText:null,timeout:null,__ss:null,open:function(m,n){if(this.__sv){return;
}this.__sx();
this.__st=null;
this.__su=n;

if(qx.core.Environment.get(l)){qx.Bootstrap.debug(qx.bom.request.Script,"Open native request with "+"url: "+n);
}this.__sy(1);
},setRequestHeader:function(o,p){if(this.__sv){return;
}var q={};

if(this.readyState!==1){throw new Error("Invalid state");
}q[o]=p;
this.__su=qx.util.Uri.appendParamsToUrl(this.__su,q);
},send:function(){if(this.__sv){return;
}var t=this.__sC(),r=this.__sr,s=this;

if(this.timeout>0){this.__ds=window.setTimeout(this.__sq,this.timeout);
}
if(qx.core.Environment.get(l)){qx.Bootstrap.debug(qx.bom.request.Script,"Send native request");
}r.insertBefore(t,r.firstChild);
window.setTimeout(function(){s.__sy(2);
s.__sy(3);
});
},abort:function(){if(this.__sv){return;
}this.__st=true;
this.__sD();
this.onabort();
},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(u){if(this.__sv){return;
}
if(qx.core.Environment.get(g)){qx.log.Logger.debug("Response header cannot be determined for "+"requests made with script transport.");
}return a;
},getAllResponseHeaders:function(){if(this.__sv){return;
}
if(qx.core.Environment.get(g)){qx.log.Logger.debug("Response headers cannot be determined for"+"requests made with script transport.");
}return c;
},setDetermineSuccess:function(v){qx.core.Assert.assertFunction(v);
this.__ss=v;
},dispose:function(){var w=this.__sw;

if(!this.__sv){if(w){w.onload=w.onreadystatechange=null;
this.__sD();
}
if(this.__ds){window.clearTimeout(this.__ds);
}this.__sv=true;
}},_getUrl:function(){return this.__su;
},_getScriptElement:function(){return this.__sw;
},_onTimeout:function(){this.__sA();

if(!this.__sB()){this.onerror();
}this.ontimeout();

if(!this.__sB()){this.onloadend();
}},_onNativeLoad:function(){var z=this.__sw,x=this.__ss,y=this;
if(this.__st){return;
}if(qx.core.Environment.get(k)===j&&qx.core.Environment.get(h)<9){if(!(/loaded|complete/).test(z.readyState)){return;
}else{if(qx.core.Environment.get(l)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native readyState: loaded");
}}}
if(qx.core.Environment.get(l)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native load");
}if(x){if(!this.status){this.status=x()?200:500;
}}
if(this.status===500){if(qx.core.Environment.get(l)){qx.Bootstrap.debug(qx.bom.request.Script,"Detected error");
}}
if(this.__ds){window.clearTimeout(this.__ds);
}window.setTimeout(function(){y.__sz();
y.__sy(4);
y.onload();
y.onloadend();
});
},_onNativeError:function(){this.__sA();
this.onerror();
this.onloadend();
},__sw:null,__sr:null,__su:i,__so:null,__sp:null,__sq:null,__ds:null,__st:null,__sv:null,__sx:function(){this.readyState=0;
this.status=0;
this.statusText=i;
},__sy:function(A){this.readyState=A;
this.onreadystatechange();
},__sz:function(){this.__sD();
this.readyState=4;
if(!this.status){this.status=200;
}this.statusText=i+this.status;
},__sA:function(){this.__sD();
this.readyState=4;
this.status=0;
this.statusText=null;
},__sB:function(){var C=qx.core.Environment.get(k)===j&&qx.core.Environment.get(h)<9;
var B=qx.core.Environment.get(k)===d;
return !(C||B);
},__sC:function(){var D=this.__sw=document.createElement(e);
D.src=this.__su;
D.onerror=this.__sp;
D.onload=this.__so;
if(qx.core.Environment.get(k)===j&&qx.core.Environment.get(h)<9){D.onreadystatechange=this.__so;
}return D;
},__sD:function(){var E=this.__sw;

if(E&&E.parentNode){this.__sr.removeChild(E);
}}},defer:function(){qx.core.Environment.add(l,false);
}});
})();
(function(){var j="qx.debug.io",i="qx.bom.request.Jsonp",h="callback",g="open",f="dispose",e="",d="_onNativeLoad",c="qx.debug",b="].callback",a="qx.bom.request.Jsonp[";
qx.Bootstrap.define(i,{extend:qx.bom.request.Script,construct:function(){qx.bom.request.Script.apply(this);
this.__tr();
},members:{responseJson:null,__cq:null,__tl:null,__tm:null,__tn:null,__to:null,__sv:null,open:function(k,l){if(this.__sv){return;
}var m={},o,n,p=this;
this.responseJson=null;
this.__tn=false;
o=this.__tl||h;
n=this.__tm||a+this.__cq+b;
if(!this.__tm){this.constructor[this.__cq]=this;
}else{if(!window[this.__tm]){this.__to=true;
window[this.__tm]=function(q){p.callback(q);
};
}else{if(qx.core.Environment.get(j)){qx.log.Logger.debug(qx.bom.request.Jsonp,"Callback "+this.__tm+" already exists");
}}}
if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Jsonp,"Expecting JavaScript response to call: "+n);
}m[o]=n;
l=qx.util.Uri.appendParamsToUrl(l,m);
this.__tq(g,[k,l]);
},callback:function(r){if(this.__sv){return;
}this.__tn=true;
if(qx.core.Environment.get(c)){r=qx.lang.Json.stringify(r);
r=qx.lang.Json.parse(r);
}this.responseJson=r;
this.constructor[this.__cq]=undefined;
this.__tp();
},setCallbackParam:function(s){this.__tl=s;
},setCallbackName:function(name){this.__tm=name;
},dispose:function(){this.__tp();
this.__tq(f);
},_onNativeLoad:function(){this.status=this.__tn?200:500;
this.__tq(d);
},__tp:function(){if(this.__to&&window[this.__tm]){window[this.__tm]=undefined;
this.__to=false;
}},__tq:function(t,u){qx.bom.request.Script.prototype[t].apply(this,u||[]);
},__tr:function(){this.__cq=(new Date().valueOf())+(e+Math.random()).substring(2,5);
}}});
})();
(function(){var j="bigger",i="\"",h="fce.view.HelpWindow",g="The purpose of this application is to help",f="target=\"_blank\" style=\"",e="clicking and dragging or by selecting them and using the &quot;right ",d="the currently used client.<br/>",c="href=\"http://demo.qooxdoo.org/",b="be used as the value of an &quot;environment&quot; configuration key.",a="The <strong>Available Features</strong> ",J=" displays the selected environment settings and allows editing of their ",I="icon/16/actions/help-contents.png",H="target=\"_blank\">qx.core.Environment</a> with the values detected for ",G="table initially displays all keys defined in <a style=\"",F="/apiviewer/#qx.core.Environment\"",E="qx.version",D="Overview",C="Help",B="/pages/application/featureconfigeditor.html#browser-specific-builds",A="the &quot;Del&quot; key or clicking the &quot;left arrow&quot; button.",q="http://manual.qooxdoo.org/",r="the <strong>Selected Features</strong> list by double-clicking, ",o="View Components",p="The <strong>Selected Features</strong> list",m=" Multiple sets of client features can be compared to find common values.",n="Additional feature sets, e.g. from different browsers, can be added ",k=" developers create configurations for <a href=\"",l="The <strong>JSON</strong> box displays a ",s="to the table using the <strong>Import Feature Map</strong> button.",t="serialization of the currently selected configuration. This map can ",v="\" ",u="arrow&quot; button.",x="values. Entries can be removed by selecting them and then either pressing ",w="\">browser-specific builds</a>.",z="display: inline; color: blue;",y="Individual key/value pairs can be added to ";
qx.Class.define(h,{extend:qx.ui.window.Window,construct:function(){qx.ui.window.Window.call(this,C,I);
this.setWidth(500);
this.setHeight(450);
this.setLayout(new qx.ui.layout.Canvas());
this._addContent();
},members:{_addContent:function(){var N=new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
N.setPadding(5);
var scroll=new qx.ui.container.Scroll(N);
this.add(scroll,{edge:0});
var R=new qx.ui.basic.Label(D);
R.setFont(j);
N.add(R);
var U=z;
var S=qx.core.Environment.get(E);
var T=q+S+B;
var M=new qx.ui.basic.Label(g+k+T+v+f+U+w+m);
M.setRich(true);
N.add(M);
var Q=new qx.ui.basic.Label(o);
Q.setFont(j);
N.add(Q);
var K=new qx.ui.basic.Label(a+G+U+i+c+S+F+H+d+n+s);
K.setRich(true);
N.add(K);
var L=new qx.ui.basic.Label(y+r+e+u);
L.setRich(true);
N.add(L);
var O=new qx.ui.basic.Label(p+J+x+A);
O.setRich(true);
N.add(O);
var P=new qx.ui.basic.Label(l+t+b);
P.setRich(true);
N.add(P);
}}});
})();
(function(){var dl="widget",dk="button",dj="pointer",di="button-box",dh="atom",dg="background",df="main-dark",de="bold",dd="text-disabled",dc="image",ca="white",bY="background-selected",bX="popup",bW="button-box-hovered",bV="",bU="button-box-pressed-hovered",bT="label",bS="button-box-pressed",bR="arrow-down",bQ="groupbox",dt="text-selected",du="cell",dr="textfield",ds="tooltip",dp="combobox/button",dq="list",dm="middle",dn="menu-button",dv="toolbar-button",dw="spinner",cK="button-frame",cJ="-middle",cM="-invert",cL="background-selected-dark",cO="invalid",cN="combobox",cQ="scrollbar",cP="inset",cI="center",cH="datechooser/button",k="right",l="main",m="light-background",n="background-disabled",o="-right",p="radiobutton",q="arrow-",r="checkbox",s="-left",t="tree-folder",dK="selectbox",dJ="-invalid",dI="icon/16/places/folder-open.png",dH="menu-slidebar-button",dO="scrollbar/button",dN="border-invalid",dM="tree-minus",dL="statusbar",dQ="down",dP="text",bg="background-disabled-checked",bh="tree",be="slidebar/button-forward",bf="icon/16/places/folder.png",bk="icon/16/mimetypes/text-plain.png",bl="tree-plus",bi="default",bj="-top-left",bc="datechooser",bd="button-box-focused",L="blank",K="treevirtual-folder",N="-bottom-right",M="virtual-list",H="-top-right",G="arrow-right",J="left",I="up",F="right-top",E="focused-inset",bq="slidebar/button-backward",br="-bottom-left",bs="table-row-background-even",bt="button-box-pressed-top-right",bm="arrow-left",bn="datechooser-weekday",bo="arrow-up",bp="icon/16/actions/dialog-ok.png",bu="button-box-top-right",bv="slidebar",W="#BABABA",V="button-box-hovered-bottom-right",U="tabview-page-button-top-bottom",T="move-frame",S="nodrop",R="window-caption",Q="table-header-cell",P="button-box-hovered-top-right",bb="row-layer",ba="treevirtual-plus-only",bw="move",bx="treevirtual-plus-end",by="-last",bz="vertical",bA="arrow-down-small",bB="tooltip-error",bC="window-restore",bD="resize-frame",bE="scroll-knob",bF="tabview-close",ci="atom/label",ch="button-box-pressed-bottom-right",cg="button-box-pressed-hovered-bottom-right",cf="icon/16/actions/dialog-cancel.png",cm="qx.theme.simple.Appearance",cl="menu-slidebar",ck="treevirtual-minus-cross",cj="background-pane",cp="table-",co="scroll-knob-pressed",cD="icon",cE="arrow-rewind",cB="icon/16/apps/office-calendar.png",cC="headline",cz="treevirtual-plus-start",cA="treevirtual-minus-end",cx="checkbox-undetermined",cy="button-box-bottom-right",cF="datechooser-week",cG="descending",cU="toolbar-separator",cT="arrow-up-small",cW="horizontal",cV="border-light-shadow",cY="text-placeholder",cX="treevirtual-plus-cross",db="scrollarea",da="treevirtual-line",cS="tabview-page-button-right-left",cR="menu-checkbox",dD="best-fit",dE="button-border",dF="treevirtual-cross",dG="button-hover",dz="menubar-button-pressed",dA="progressbar",dB="tree-file",dC="tooltip-text",dx="keep-align",dy="-first",j="alias",i="ascending",h="button-box-hovered-right-borderless",g="button-box-right-borderless",f="lead-item",e="checkbox-focused",d="border-blue",c="window-minimize",b="button-box-pressed-hovered-top-right",a="knob-",w="treevirtual-minus-only",x="treevirtual-minus-start",u="checkbox-checked",v="window",A="window-active",B="table-header-cell-first",y="button-box-pressed-right-borderless",z="scroll-knob-hovered",C="tabview-label-active-disabled",D="select-column-order",cq="button-box-pressed-hovered-right-borderless",cn="scroll-knob-pressed-hovered",cv="white-box",cr="datechooser-week-header",cd="menubar-button-hovered",cb="table-header-column-button",O="window-close",ce="datechooser-date-pane",Y="tabview-unselected",X="cursor-",bI="-focused",bJ="menu-radiobutton",bK="window-maximize",bL="treevirtual-end",bM="table",bN="arrow-forward",bO="copy",bP="table-row-background-selected",bG="radiobutton-focused",bH="scrollbar/slider/knob",cc="atom/icon",cu="table-header",ct="menu-separator",cs="link",cw="icon/16/actions/view-refresh.png";
qx.Theme.define(cm,{appearances:{"widget":{},"label":{style:function(dR){return {textColor:dR.disabled?dd:undefined};
}},"image":{style:function(dS){return {opacity:!dS.replacement&&dS.disabled?0.3:undefined};
}},"atom":{},"atom/label":bT,"atom/icon":dc,"root":{style:function(dT){return {backgroundColor:dg,textColor:dP,font:bi};
}},"popup":{style:function(dU){return {decorator:bX,backgroundColor:cj};
}},"tooltip":{include:bX,style:function(dV){return {backgroundColor:ds,textColor:dC,decorator:ds,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dh,"tooltip-error":{include:ds,style:function(dW){return {textColor:dt,showTimeout:100,hideTimeout:10000,decorator:bB,font:de,backgroundColor:undefined};
}},"tooltip-error/atom":dh,"iframe":{style:function(dX){return {backgroundColor:ca,decorator:df};
}},"move-frame":{style:function(dY){return {decorator:df};
}},"resize-frame":T,"dragdrop-cursor":{style:function(ea){var eb=S;

if(ea.copy){eb=bO;
}else if(ea.move){eb=bw;
}else if(ea.alias){eb=j;
}return {source:qx.theme.simple.Image.URLS[X+eb],position:F,offset:[2,16,2,6]};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dk,include:dk,style:function(ec){return {icon:qx.theme.simple.Image.URLS[q+(ec.vertical?dQ:k)]};
}},"slidebar/button-backward":{alias:dk,include:dk,style:function(ed){return {icon:qx.theme.simple.Image.URLS[q+(ed.vertical?I:J)]};
}},"table":dl,"table/statusbar":{style:function(ee){return {decorator:dL,padding:[2,5]};
}},"table/column-button":{alias:dk,style:function(ef){return {decorator:cb,padding:3,icon:qx.theme.simple.Image.URLS[D]};
}},"table-column-reset-button":{include:dn,alias:dn,style:function(){return {icon:cw};
}},"table-scroller/scrollbar-x":cQ,"table-scroller/scrollbar-y":cQ,"table-scroller":dl,"table-scroller/header":{style:function(){return {decorator:cu};
}},"table-scroller/pane":{},"table-scroller/focus-indicator":{style:function(eg){return {decorator:l};
}},"table-scroller/resize-line":{style:function(eh){return {backgroundColor:dE,width:3};
}},"table-header-cell":{alias:dh,style:function(ei){return {decorator:ei.first?B:Q,minWidth:13,font:de,paddingTop:3,paddingLeft:5,cursor:ei.disabled?undefined:dj,sortIcon:ei.sorted?(qx.theme.simple.Image.URLS[cp+(ei.sortedAscending?i:cG)]):undefined};
}},"table-header-cell/icon":{include:cc,style:function(ej){return {paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(ek){return {alignY:dm,alignX:k,paddingRight:5};
}},"table-editor-textfield":{include:dr,style:function(el){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:dK,alias:dK,style:function(em){return {padding:[0,2]};
}},"table-editor-combobox":{include:cN,alias:cN,style:function(en){return {decorator:undefined};
}},"treevirtual":{include:dr,alias:bM,style:function(eo,ep){return {padding:[ep.padding[0]+2,ep.padding[1]+1]};
}},"treevirtual-folder":{style:function(eq){return {icon:(eq.opened?dI:bf)};
}},"treevirtual-file":{include:K,alias:K,style:function(er){return {icon:bk};
}},"treevirtual-line":{style:function(es){return {icon:qx.theme.simple.Image.URLS[da]};
}},"treevirtual-contract":{style:function(et){return {icon:qx.theme.simple.Image.URLS[dM]};
}},"treevirtual-expand":{style:function(eu){return {icon:qx.theme.simple.Image.URLS[bl]};
}},"treevirtual-only-contract":{style:function(ev){return {icon:qx.theme.simple.Image.URLS[w]};
}},"treevirtual-only-expand":{style:function(ew){return {icon:qx.theme.simple.Image.URLS[ba]};
}},"treevirtual-start-contract":{style:function(ex){return {icon:qx.theme.simple.Image.URLS[x]};
}},"treevirtual-start-expand":{style:function(ey){return {icon:qx.theme.simple.Image.URLS[cz]};
}},"treevirtual-end-contract":{style:function(ez){return {icon:qx.theme.simple.Image.URLS[cA]};
}},"treevirtual-end-expand":{style:function(eA){return {icon:qx.theme.simple.Image.URLS[bx]};
}},"treevirtual-cross-contract":{style:function(eB){return {icon:qx.theme.simple.Image.URLS[ck]};
}},"treevirtual-cross-expand":{style:function(eC){return {icon:qx.theme.simple.Image.URLS[cX]};
}},"treevirtual-end":{style:function(eD){return {icon:qx.theme.simple.Image.URLS[bL]};
}},"treevirtual-cross":{style:function(eE){return {icon:qx.theme.simple.Image.URLS[dF]};
}},"resizer":{style:function(eF){return {decorator:df};
}},"splitpane":{},"splitpane/splitter":{style:function(eG){return {backgroundColor:m};
}},"splitpane/splitter/knob":{style:function(eH){return {source:qx.theme.simple.Image.URLS[a+(eH.horizontal?cW:bz)],padding:2};
}},"splitpane/slider":{style:function(eI){return {backgroundColor:cV,opacity:0.3};
}},"menu":{style:function(eJ){var eK={backgroundColor:dg,decorator:l,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:eJ.submenu||eJ.contextmenu?dD:dx};

if(eJ.submenu){eK.position=F;
eK.offset=[-2,-3];
}
if(eJ.contextmenu){eK.offset=4;
}return eK;
}},"menu/slidebar":cl,"menu-slidebar":dl,"menu-slidebar-button":{style:function(eL){return {backgroundColor:eL.hovered?bY:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:dH,style:function(eM){return {icon:qx.theme.simple.Image.URLS[bo+(eM.hovered?cM:bV)]};
}},"menu-slidebar/button-forward":{include:dH,style:function(eN){return {icon:qx.theme.simple.Image.URLS[bR+(eN.hovered?cM:bV)]};
}},"menu-separator":{style:function(eO){return {height:0,decorator:ct,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:dh,style:function(eP){return {backgroundColor:eP.selected?bY:undefined,textColor:eP.selected?dt:undefined,padding:[2,6]};
}},"menu-button/icon":{include:dc,style:function(eQ){return {alignY:dm};
}},"menu-button/label":{include:bT,style:function(eR){return {alignY:dm,padding:1};
}},"menu-button/shortcut":{include:bT,style:function(eS){return {alignY:dm,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:dc,style:function(eT){return {source:qx.theme.simple.Image.URLS[G+(eT.selected?cM:bV)],alignY:dm};
}},"menu-checkbox":{alias:dn,include:dn,style:function(eU){return {icon:!eU.checked?undefined:qx.theme.simple.Image.URLS[cR+(eU.selected?cM:bV)]};
}},"menu-radiobutton":{alias:dn,include:dn,style:function(eV){return {icon:!eV.checked?undefined:qx.theme.simple.Image.URLS[bJ+(eV.selected?cM:bV)]};
}},"menubar":{style:function(eW){return {backgroundColor:m,padding:[4,2]};
}},"menubar-button":{style:function(eX){var fa;
var eY=[2,6];

if(!eX.disabled){if(eX.pressed){fa=dz;
eY=[1,5,2,5];
}else if(eX.hovered){fa=cd;
eY=[1,5];
}}return {padding:eY,cursor:eX.disabled?undefined:dj,textColor:cs,decorator:fa};
}},"virtual-list":dq,"virtual-list/row-layer":bb,"row-layer":dl,"column-layer":dl,"group-item":{include:bT,alias:bT,style:function(fb){return {padding:4,backgroundColor:W,textColor:ca,font:de};
}},"virtual-selectbox":dK,"virtual-selectbox/dropdown":bX,"virtual-selectbox/dropdown/list":{alias:M},"virtual-combobox":cN,"virtual-combobox/dropdown":bX,"virtual-combobox/dropdown/list":{alias:M},"virtual-tree":{include:bh,alias:bh,style:function(fc){return {itemHeight:21};
}},"virtual-tree-folder":t,"virtual-tree-file":dB,"cell":{style:function(fd){return {backgroundColor:fd.selected?bP:bs,textColor:fd.selected?dt:dP,padding:[3,6]};
}},"cell-string":du,"cell-number":{include:du,style:function(fe){return {textAlign:k};
}},"cell-image":du,"cell-boolean":du,"cell-atom":du,"cell-date":du,"cell-html":du,"htmlarea":{"include":dl,style:function(ff){return {backgroundColor:ca};
}},"scrollbar":{},"scrollbar/slider":{},"scrollbar/slider/knob":{style:function(fg){var fh=bE;

if(!fg.disabled){if(fg.hovered&&!fg.pressed&&!fg.checked){fh=z;
}else if(fg.hovered&&(fg.pressed||fg.checked)){fh=cn;
}else if(fg.pressed||fg.checked){fh=co;
}}return {height:14,width:14,cursor:fg.disabled?undefined:dj,decorator:fh,minHeight:fg.horizontal?undefined:20,minWidth:fg.horizontal?20:undefined};
}},"scrollbar/button":{style:function(fi){var fj={};
fj.padding=4;
var fk=bV;

if(fi.left){fk=J;
fj.marginRight=2;
}else if(fi.right){fk+=k;
fj.marginLeft=2;
}else if(fi.up){fk+=I;
fj.marginBottom=2;
}else{fk+=dQ;
fj.marginTop=2;
}fj.icon=qx.theme.simple.Image.URLS[q+fk];
fj.cursor=dj;
fj.decorator=di;
return fj;
}},"scrollbar/button-begin":dO,"scrollbar/button-end":dO,"scrollarea/corner":{style:function(fl){return {backgroundColor:dg};
}},"scrollarea":dl,"scrollarea/pane":dl,"scrollarea/scrollbar-x":cQ,"scrollarea/scrollbar-y":cQ,"textfield":{style:function(fm){var fo;

if(fm.disabled){fo=dd;
}else if(fm.showingPlaceholder){fo=cY;
}else{fo=undefined;
}var fp;
var fn;

if(fm.disabled){fp=cP;
fn=[2,3];
}else if(fm.invalid){fp=dN;
fn=[1,2];
}else if(fm.focused){fp=E;
fn=[1,2];
}else{fn=[2,3];
fp=cP;
}return {decorator:fp,padding:fn,textColor:fo,backgroundColor:fm.disabled?n:ca};
}},"textarea":dr,"radiobutton/icon":{style:function(fq){var fs=p;

if(fq.focused&&!fq.invalid){fs=bG;
}fs+=fq.invalid&&!fq.disabled?dJ:bV;
var fr;

if(fq.disabled&&fq.checked){fr=bg;
}else if(fq.disabled){fr=n;
}else if(fq.checked){fr=bY;
}return {decorator:fs,width:12,height:12,backgroundColor:fr};
}},"radiobutton":{style:function(ft){return {icon:qx.theme.simple.Image.URLS[L]};
}},"form-renderer-label":{include:bT,style:function(){return {paddingTop:3};
}},"checkbox":{alias:dh,style:function(fu){var fv;
if(fu.checked){fv=qx.theme.simple.Image.URLS[u];
}else if(fu.undetermined){fv=qx.theme.simple.Image.URLS[cx];
}else{fv=qx.theme.simple.Image.URLS[L];
}return {icon:fv,gap:6};
}},"checkbox/icon":{style:function(fw){var fy=r;

if(fw.focused&&!fw.invalid){fy=e;
}fy+=fw.invalid&&!fw.disabled?dJ:bV;
var fx;
if(fw.checked){fx=2;
}else if(fw.undetermined){fx=[4,2];
}return {decorator:fy,width:12,height:12,padding:fx,backgroundColor:ca};
}},"spinner":{style:function(fz){return {textColor:fz.disabled?dd:undefined};
}},"spinner/textfield":dr,"spinner/upbutton":{alias:dp,include:dp,style:function(fA){var fB=bu;

if(fA.hovered&&!fA.pressed&&!fA.checked){fB=P;
}else if(fA.hovered&&(fA.pressed||fA.checked)){fB=b;
}else if(fA.pressed||fA.checked){fB=bt;
}return {icon:qx.theme.simple.Image.URLS[cT],decorator:fB,width:17};
}},"spinner/downbutton":{alias:dp,include:dp,style:function(fC){var fD=cy;

if(fC.hovered&&!fC.pressed&&!fC.checked){fD=V;
}else if(fC.hovered&&(fC.pressed||fC.checked)){fD=cg;
}else if(fC.pressed||fC.checked){fD=ch;
}return {icon:qx.theme.simple.Image.URLS[bA],decorator:fD,width:17};
}},"selectbox":cK,"selectbox/atom":dh,"selectbox/popup":bX,"selectbox/list":{alias:dq,include:dq,style:function(){return {decorator:undefined};
}},"selectbox/arrow":{include:dc,style:function(fE){return {source:qx.theme.simple.Image.URLS[bR],paddingRight:4,paddingLeft:5};
}},"combobox":{},"combobox/button":{alias:cK,include:cK,style:function(fF){var fG=g;

if(fF.hovered&&!fF.pressed&&!fF.checked){fG=h;
}else if(fF.hovered&&(fF.pressed||fF.checked)){fG=cq;
}else if(fF.pressed||fF.checked){fG=y;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:fG,padding:[0,5],width:19};
}},"combobox/popup":bX,"combobox/list":{alias:dq},"combobox/textfield":dr,"datefield":cN,"datefield/button":{alias:dp,include:dp,style:function(fH){return {icon:cB,padding:[0,0,0,3],backgroundColor:undefined,decorator:undefined,width:19};
}},"datefield/list":{alias:bc,include:bc,style:function(fI){return {decorator:undefined};
}},"list":{alias:db,include:dr},"listitem":{alias:dh,style:function(fJ){return {gap:4,padding:fJ.lead?[2,4]:[3,5],backgroundColor:fJ.selected?bY:undefined,textColor:fJ.selected?dt:undefined,decorator:fJ.lead?f:undefined};
}},"slider":{style:function(fK){var fM;
var fL;

if(fK.disabled){fM=cP;
fL=[2,3];
}else if(fK.invalid){fM=dN;
fL=[1,2];
}else if(fK.focused){fM=E;
fL=[1,2];
}else{fL=[2,3];
fM=cP;
}return {decorator:fM,padding:fL};
}},"slider/knob":bH,"button-frame":{alias:dh,style:function(fN){var fO=di;

if(!fN.disabled){if(fN.hovered&&!fN.pressed&&!fN.checked){fO=bW;
}else if(fN.hovered&&(fN.pressed||fN.checked)){fO=bU;
}else if(fN.pressed||fN.checked){fO=bS;
}}
if(fN.invalid&&!fN.disabled){fO+=dJ;
}else if(fN.focused){fO+=bI;
}return {decorator:fO,padding:[3,8],cursor:fN.disabled?undefined:dj,minWidth:5,minHeight:5};
}},"button-frame/label":{alias:ci,style:function(fP){return {textColor:fP.disabled?dd:undefined};
}},"button":{alias:cK,include:cK,style:function(fQ){return {center:true};
}},"hover-button":{alias:dk,include:dk,style:function(fR){return {decorator:fR.hovered?dG:undefined};
}},"splitbutton":{},"splitbutton/button":{alias:dh,style:function(fS){var fT=di;

if(fS.disabled){fT=di;
}else if(fS.focused){fT=bd;
}else if(fS.hovered&&!fS.pressed&&!fS.checked){fT=bW;
}else if(fS.hovered&&(fS.pressed||fS.checked)){fT=bU;
}else if(fS.pressed||fS.checked){fT=bS;
}fT+=s;
return {decorator:fT,padding:[3,8],cursor:fS.disabled?undefined:dj};
}},"splitbutton/arrow":{style:function(fU){var fV=di;

if(fU.disabled){fV=di;
}else if(fU.focused){fV=bd;
}else if(fU.hovered&&!fU.pressed&&!fU.checked){fV=bW;
}else if(fU.hovered&&(fU.pressed||fU.checked)){fV=bU;
}else if(fU.pressed||fU.checked){fV=bS;
}fV+=o;
return {icon:qx.theme.simple.Image.URLS[bR],decorator:fV,cursor:fU.disabled?undefined:dj,padding:[3,4]};
}},"groupbox":{},"groupbox/legend":{alias:dh,style:function(fW){return {textColor:fW.invalid?cO:undefined,padding:5,margin:4,font:de};
}},"groupbox/frame":{style:function(fX){return {backgroundColor:dg,padding:[6,9],margin:[18,2,2,2],decorator:cv};
}},"check-groupbox":bQ,"check-groupbox/legend":{alias:r,include:r,style:function(fY){return {textColor:fY.invalid?cO:undefined,padding:5,margin:4,font:de};
}},"radio-groupbox":bQ,"radio-groupbox/legend":{alias:p,include:p,style:function(ga){return {textColor:ga.invalid?cO:undefined,padding:5,margin:4,font:de};
}},"tree-folder/open":{include:dc,style:function(gb){return {source:gb.opened?qx.theme.simple.Image.URLS[dM]:qx.theme.simple.Image.URLS[bl]};
}},"tree-folder":{style:function(gc){return {padding:[2,8,2,5],icon:gc.opened?dI:bf,backgroundColor:gc.selected?bY:undefined,iconOpened:dI};
}},"tree-folder/icon":{include:dc,style:function(gd){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(ge){return {padding:[1,2],textColor:ge.selected?dt:undefined};
}},"tree-file":{include:t,alias:t,style:function(gf){return {icon:bk};
}},"tree":{include:dq,alias:dq,style:function(gg){return {contentPadding:gg.invalid&&!gg.disabled?[3,0]:[4,1],padding:gg.focused?0:1};
}},"window":{style:function(gh){return {contentPadding:[10,10,10,10],backgroundColor:dg,decorator:gh.maximized?undefined:gh.active?A:v};
}},"window-resize-frame":bD,"window/pane":{},"window/captionbar":{style:function(gi){return {backgroundColor:gi.active?m:n,padding:8,font:de,decorator:R};
}},"window/icon":{style:function(gj){return {marginRight:4};
}},"window/title":{style:function(gk){return {cursor:bi,font:de,marginRight:20,alignY:dm};
}},"window/minimize-button":{alias:dk,style:function(gl){return {icon:qx.theme.simple.Image.URLS[c],padding:[1,2],cursor:gl.disabled?undefined:dj};
}},"window/restore-button":{alias:dk,style:function(gm){return {icon:qx.theme.simple.Image.URLS[bC],padding:[1,2],cursor:gm.disabled?undefined:dj};
}},"window/maximize-button":{alias:dk,style:function(gn){return {icon:qx.theme.simple.Image.URLS[bK],padding:[1,2],cursor:gn.disabled?undefined:dj};
}},"window/close-button":{alias:dk,style:function(go){return {marginLeft:2,icon:qx.theme.simple.Image.URLS[O],padding:[1,2],cursor:go.disabled?undefined:dj};
}},"window/statusbar":{style:function(gp){return {decorator:dL,padding:[2,6]};
}},"window/statusbar-text":bT,"datechooser":{style:function(gq){return {decorator:l};
}},"datechooser/navigation-bar":{style:function(gr){return {backgroundColor:dg,textColor:gr.disabled?dd:gr.invalid?cO:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":ds,"datechooser/last-month-button-tooltip":ds,"datechooser/next-year-button-tooltip":ds,"datechooser/next-month-button-tooltip":ds,"datechooser/last-year-button":cH,"datechooser/last-month-button":cH,"datechooser/next-year-button":cH,"datechooser/next-month-button":cH,"datechooser/button/icon":{},"datechooser/button":{style:function(gs){var gt={width:17,show:cD,cursor:gs.disabled?undefined:dj};

if(gs.lastYear){gt.icon=qx.theme.simple.Image.URLS[cE];
}else if(gs.lastMonth){gt.icon=qx.theme.simple.Image.URLS[bm];
}else if(gs.nextYear){gt.icon=qx.theme.simple.Image.URLS[bN];
}else if(gs.nextMonth){gt.icon=qx.theme.simple.Image.URLS[G];
}return gt;
}},"datechooser/month-year-label":{style:function(gu){return {font:de,textAlign:cI};
}},"datechooser/date-pane":{style:function(gv){return {decorator:ce,backgroundColor:dg};
}},"datechooser/weekday":{style:function(gw){return {decorator:bn,font:de,textAlign:cI,textColor:gw.disabled?dd:gw.weekend?cL:dg,backgroundColor:gw.weekend?dg:cL,paddingTop:2};
}},"datechooser/day":{style:function(gx){return {textAlign:cI,decorator:gx.today?l:undefined,textColor:gx.disabled?dd:gx.selected?dt:gx.otherMonth?dd:undefined,backgroundColor:gx.disabled?undefined:gx.selected?bY:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(gy){return {textAlign:cI,textColor:cL,padding:[2,4],decorator:gy.header?cr:cF};
}},"progressbar":{style:function(gz){return {decorator:dA,padding:1,backgroundColor:ca,width:200,height:20};
}},"progressbar/progress":{style:function(gA){return {backgroundColor:gA.disabled?bg:bY};
}},"toolbar":{style:function(gB){return {backgroundColor:m,padding:0};
}},"toolbar/part":{style:function(gC){return {margin:[0,15]};
}},"toolbar/part/container":{},"toolbar/part/handle":{},"toolbar-separator":{style:function(gD){return {decorator:cU,margin:[7,0],width:4};
}},"toolbar-button":{alias:dh,style:function(gE){var gG=di;

if(gE.disabled){gG=di;
}else if(gE.hovered&&!gE.pressed&&!gE.checked){gG=bW;
}else if(gE.hovered&&(gE.pressed||gE.checked)){gG=bU;
}else if(gE.pressed||gE.checked){gG=bS;
}if(gE.left){gG+=s;
}else if(gE.right){gG+=o;
}else if(gE.middle){gG+=cJ;
}var gF=[7,10];

if(gE.left||gE.middle||gE.right){gF=[7,0];
}return {cursor:gE.disabled?undefined:dj,decorator:gG,margin:gF,padding:[3,5]};
}},"toolbar-menubutton":{alias:dv,include:dv,style:function(gH){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dc,include:dc,style:function(gI){return {source:qx.theme.simple.Image.URLS[bR],cursor:gI.disabled?undefined:dj,padding:[0,5],marginLeft:2};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":{alias:dv,include:dv,style:function(gJ){var gK=di;

if(gJ.disabled){gK=di;
}else if(gJ.hovered&&!gJ.pressed&&!gJ.checked){gK=bW;
}else if(gJ.hovered&&(gJ.pressed||gJ.checked)){gK=bU;
}else if(gJ.pressed||gJ.checked){gK=bS;
}if(gJ.left){gK+=s;
}else if(gJ.right){gK+=cJ;
}else if(gJ.middle){gK+=cJ;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:gK};
}},"toolbar-splitbutton/arrow":{alias:dv,include:dv,style:function(gL){var gM=di;

if(gL.disabled){gM=di;
}else if(gL.hovered&&!gL.pressed&&!gL.checked){gM=bW;
}else if(gL.hovered&&(gL.pressed||gL.checked)){gM=bU;
}else if(gL.pressed||gL.checked){gM=bS;
}if(gL.left){gM+=cJ;
}else if(gL.right){gM+=o;
}else if(gL.middle){gM+=cJ;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:gM};
}},"tabview":{},"tabview/bar":{alias:bv,style:function(gN){var gO=0,gR=0,gP=0,gQ=0;

if(gN.barTop){gP-=2;
}else if(gN.barBottom){gO-=2;
}else if(gN.barRight){gQ-=2;
}else{gR-=2;
}return {marginBottom:gP,marginTop:gO,marginLeft:gQ,marginRight:gR};
}},"tabview/bar/button-forward":{include:be,alias:be,style:function(gS){var gT=di;

if(gS.hovered&&!gS.pressed&&!gS.checked){gT=bW;
}else if(gS.hovered&&(gS.pressed||gS.checked)){gT=bU;
}else if(gS.pressed||gS.checked){gT=bS;
}
if(gS.barTop){return {marginTop:4,marginBottom:2,decorator:gT+H};
}else if(gS.barBottom){return {marginTop:2,marginBottom:4,decorator:gT+N};
}else if(gS.barLeft){return {marginLeft:4,marginRight:2,decorator:gT+br};
}else{return {marginLeft:2,marginRight:4,decorator:gT+N};
}}},"tabview/bar/button-backward":{include:bq,alias:bq,style:function(gU){var gV=di;

if(gU.hovered&&!gU.pressed&&!gU.checked){gV=bW;
}else if(gU.hovered&&(gU.pressed||gU.checked)){gV=bU;
}else if(gU.pressed||gU.checked){gV=bS;
}
if(gU.barTop){return {marginTop:4,marginBottom:2,decorator:gV+bj};
}else if(gU.barBottom){return {marginTop:2,marginBottom:4,decorator:gV+br};
}else if(gU.barLeft){return {marginLeft:4,marginRight:2,decorator:gV+bj};
}else{return {marginLeft:2,marginRight:4,decorator:gV+H};
}}},"tabview/pane":{style:function(gW){return {backgroundColor:dg,decorator:d,padding:10};
}},"tabview-page":dl,"tabview-page/button":{style:function(gX){var hh;
var hf=0,hd=0,ha=0,hc=0;
if(gX.barTop||gX.barBottom){var hb=5,gY=5,he=9,hg=9;
}else{var hb=8,gY=8,he=4,hg=4;
}if(gX.barTop||gX.barBottom){hh=U;
}else if(gX.barRight||gX.barLeft){hh=cS;
}if(gX.checked){if(gX.barTop){he+=1;
hg+=1;
hb+=4;
}else if(gX.barBottom){he+=1;
hg+=1;
hb+=2;
}else if(gX.barLeft){hb+=1;
gY+=1;
he+=4;
hg+=2;
}else if(gX.barRight){hb+=1;
gY+=1;
he+=2;
hg+=4;
}}else{if(gX.barTop){ha+=2;
hf+=4;
}else if(gX.barBottom){ha+=4;
hf+=2;
}else if(gX.barLeft){hd+=2;
hc+=4;
}else if(gX.barRight){hd+=4;
hc+=2;
}}
if(gX.firstTab&&!gX.checked){hh+=dy;
}else if(gX.lastTab&&!gX.checked){hh+=by;
}return {zIndex:gX.checked?10:5,decorator:gX.checked?undefined:hh,backgroundColor:gX.checked?bY:Y,textColor:gX.disabled?gX.checked?C:dd:ca,padding:[hb,hg,gY,he],margin:[hf,hd,ha,hc]};
}},"tabview-page/button/label":{alias:bT,style:function(hi){return {padding:[0,1,0,1]};
}},"tabview-page/button/icon":dc,"tabview-page/button/close-button":{alias:dh,style:function(hj){return {cursor:hj.disabled?undefined:dj,icon:qx.theme.simple.Image.URLS[bF]};
}},"colorpopup":{alias:bX,include:bX,style:function(hk){return {padding:5};
}},"colorpopup/field":{style:function(hl){return {margin:2,width:14,height:14,backgroundColor:dg,decorator:df};
}},"colorpopup/selector-button":dk,"colorpopup/auto-button":dk,"colorpopup/preview-pane":bQ,"colorpopup/current-preview":{style:function(hm){return {height:20,padding:4,marginLeft:4,decorator:df,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hn){return {height:20,padding:4,marginRight:4,decorator:df,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dk,include:dk,style:function(ho){return {icon:bp};
}},"colorpopup/colorselector-cancelbutton":{alias:dk,include:dk,style:function(hp){return {icon:cf};
}},"colorselector":dl,"colorselector/control-bar":dl,"colorselector/visual-pane":bQ,"colorselector/control-pane":dl,"colorselector/preset-grid":dl,"colorselector/colorbucket":{style:function(hq){return {decorator:df,width:16,height:16};
}},"colorselector/preset-field-set":bQ,"colorselector/input-field-set":bQ,"colorselector/preview-field-set":bQ,"colorselector/hex-field-composite":dl,"colorselector/hex-field":dr,"colorselector/rgb-spinner-composite":dl,"colorselector/rgb-spinner-red":dw,"colorselector/rgb-spinner-green":dw,"colorselector/rgb-spinner-blue":dw,"colorselector/hsb-spinner-composite":dl,"colorselector/hsb-spinner-hue":dw,"colorselector/hsb-spinner-saturation":dw,"colorselector/hsb-spinner-brightness":dw,"colorselector/preview-content-old":{style:function(hr){return {decorator:df,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hs){return {decorator:df,backgroundColor:ca,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(ht){return {decorator:df,margin:5};
}},"colorselector/brightness-field":{style:function(hu){return {decorator:df,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dl,"colorselector/hue-saturation-handle":dl,"colorselector/brightness-pane":dl,"colorselector/brightness-handle":dl,"app-header":{style:function(hv){return {font:cC,textColor:dt,backgroundColor:cL,padding:[8,12]};
}},"app-header-label":{style:function(hw){return {paddingTop:5};
}}}});
})();
(function(){var a="qx.theme.simple.Image";
qx.Class.define(a,{extend:qx.core.Object,statics:{URLS:{"blank":"qx/static/blank.gif","checkbox-checked":"decoration/checkbox/checked.png","checkbox-undetermined":"decoration/checkbox/undetermined.png","window-minimize":"decoration/window/minimize.gif","window-maximize":"decoration/window/maximize.gif","window-restore":"decoration/window/restore.gif","window-close":"decoration/window/close.gif","cursor-copy":"decoration/cursors/copy.gif","cursor-move":"decoration/cursors/move.gif","cursor-alias":"decoration/cursors/alias.gif","cursor-nodrop":"decoration/cursors/nodrop.gif","arrow-right":"decoration/arrows/right.gif","arrow-left":"decoration/arrows/left.gif","arrow-up":"decoration/arrows/up.gif","arrow-down":"decoration/arrows/down.gif","arrow-forward":"decoration/arrows/forward.gif","arrow-rewind":"decoration/arrows/rewind.gif","arrow-down-small":"decoration/arrows/down-small.gif","arrow-up-small":"decoration/arrows/up-small.gif","arrow-up-invert":"decoration/arrows/up-invert.gif","arrow-down-invert":"decoration/arrows/down-invert.gif","arrow-right-invert":"decoration/arrows/right-invert.gif","knob-horizontal":"decoration/splitpane/knob-horizontal.png","knob-vertical":"decoration/splitpane/knob-vertical.png","tree-minus":"decoration/tree/minus.gif","tree-plus":"decoration/tree/plus.gif","select-column-order":"decoration/table/select-column-order.png","table-ascending":"decoration/table/ascending.png","table-descending":"decoration/table/descending.png","treevirtual-line":"decoration/treevirtual/line.gif","treevirtual-minus-only":"decoration/treevirtual/only_minus.gif","treevirtual-plus-only":"decoration/treevirtual/only_plus.gif","treevirtual-minus-start":"decoration/treevirtual/start_minus.gif","treevirtual-plus-start":"decoration/treevirtual/start_plus.gif","treevirtual-minus-end":"decoration/treevirtual/end_minus.gif","treevirtual-plus-end":"decoration/treevirtual/end_plus.gif","treevirtual-minus-cross":"decoration/treevirtual/cross_minus.gif","treevirtual-plus-cross":"decoration/treevirtual/cross_plus.gif","treevirtual-end":"decoration/treevirtual/end.gif","treevirtual-cross":"decoration/treevirtual/cross.gif","menu-checkbox":"decoration/menu/checkbox.gif","menu-checkbox-invert":"decoration/menu/checkbox-invert.gif","menu-radiobutton-invert":"decoration/menu/radiobutton-invert.gif","menu-radiobutton":"decoration/menu/radiobutton.gif","tabview-close":"decoration/tabview/close.gif"}}});
})();
(function(){var l="list",k="checkbox",j="inset",i="table",h="textarea",g="text",f="fce.theme.Appearance",e="background-disabled",d="text-disabled",c="white",a="border-invalid",b="text-placeholder";
qx.Theme.define(f,{extend:qx.theme.simple.Appearance,appearances:{"listitem/checkbox":{alias:k,include:k,style:function(m){return {padding:[0,35,0,0]};
}},"featureselector":{},"featureselector/list":{alias:l,include:l},"listitem/textfield":{style:function(n){var p;

if(n.disabled){p=d;
}else if(n.showingPlaceholder){p=b;
}else{p=g;
}var q;
var o;

if(n.disabled){q=j;
o=[2,3];
}else if(n.invalid){q=a;
o=[1,2];
}else{o=[2,3];
q=j;
}return {decorator:q,padding:o,textColor:p,backgroundColor:n.disabled?e:c};
}},"featureselector/table":{alias:i,include:i},"featureselector/textarea":{alias:h,include:h}}});
})();
(function(){var f="sans-serif",e="arial",d="monospace",c="Courier New",b="qx.theme.simple.Font",a="DejaVu Sans Mono";
qx.Theme.define(b,{fonts:{"default":{size:13,family:[e,f]},"bold":{size:13,family:[e,f],bold:true},"headline":{size:24,family:[f,e]},"small":{size:11,family:[e,f]},"monospace":{size:11,family:[a,c,d]}}});
})();
(function(){var b="fce.theme.Font",a="bold";
qx.Theme.define(b,{extend:qx.theme.simple.Font,fonts:{"bigger":{include:[a],size:13}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b}});
})();
(function(){var j="white",i="#5685D6",h="black",g="#6694E3",f="#EEE",e="gray",d="#D9D9D9",c="#1866B5",b="#24B",a="#FF0000",N="#CCCCCC",M="rgba(0, 0, 0, 0.4)",L="#FFFFE1",K="#B7B7B7",J="#BBBBBB",I="#9DCBFE",H="#A7A6AA",G="#EBEBEB",F="#666666",E="#CBC8CD",q="#F9F9F9",r="#F7F7F7",o="#808080",p="#686868",m="#888888",n="#E0ECFF",k="#2E3A46",l="css.rgba",s="#F5F5F5",t="#E3E3E3",w="#DDDDDD",v="#BBB",y="qx.theme.simple.Color",x="#F1F1F1",A="#939393",z="#BCBCBC",u="#134983",D="#E8F0E3",C="#FAFBFE",B="#AAAAAA";
qx.Theme.define(y,{colors:{"background":j,"dark-blue":i,"light-background":n,"background-selected":g,"background-selected-dark":i,"background-disabled":r,"background-disabled-checked":J,"background-pane":C,"tabview-unselected":c,"tabview-button-border":u,"tabview-label-active-disabled":d,"link":b,"scrollbar-bright":x,"scrollbar-dark":G,"button":D,"button-border":v,"button-border-hovered":A,"invalid":a,"button-box-bright":q,"button-box-dark":t,"button-box-bright-pressed":w,"button-box-dark-pressed":s,"border-lead":m,"window-border":k,"window-border-inner":I,"white-box-border":z,"shadow":qx.core.Environment.get(l)?M:F,"border-main":g,"border-light":K,"border-light-shadow":p,"border-separator":o,"text":h,"text-disabled":H,"text-selected":j,"text-placeholder":E,"tooltip":L,"tooltip-text":h,"table-header":[242,242,242],"table-focus-indicator":[179,217,255],"table-header-cell":[235,234,219],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":j,"table-row-background-odd":j,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":f,"table-column-line":f,"progressive-table-header":B,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":N,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":j}});
})();
(function(){var a="fce.theme.Color";
qx.Theme.define(a,{extend:qx.theme.simple.Color,colors:{}});
})();
(function(){var f="",e="qx.debug",d="qx.theme",c="qx.ui.decoration.MBackgroundColor",b="Color",a="_applyBackgroundColor";
qx.Mixin.define(c,{properties:{backgroundColor:{check:b,nullable:true,apply:a}},members:{_tintBackgroundColor:function(g,h,i){if(h==null){h=this.getBackgroundColor();
}
if(qx.core.Environment.get(d)){h=qx.theme.manager.Color.getInstance().resolve(h);
}i.backgroundColor=h||f;
},_resizeBackgroundColor:function(j,k,l){var m=this.getInsets();
k-=m.left+m.right;
l-=m.top+m.bottom;
return {left:m.left,top:m.top,width:k,height:l};
},_applyBackgroundColor:function(){if(qx.core.Environment.get(e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var u="_applyBackgroundImage",t="repeat",s="",r="mshtml",q="engine.name",p="backgroundPositionX",o='<div style="',n="backgroundPositionY",m="qx.debug",l='</div>',e="no-repeat",k="engine.version",h="scale",c='">',b=" ",g="repeat-x",f="repeat-y",i="hidden",a="qx.ui.decoration.MBackgroundImage",j="String",d="browser.quirksmode";
qx.Mixin.define(a,{properties:{backgroundImage:{check:j,nullable:true,apply:u},backgroundRepeat:{check:[t,g,f,e,h],init:t,apply:u},backgroundPositionX:{nullable:true,apply:u},backgroundPositionY:{nullable:true,apply:u},backgroundPosition:{group:[n,p]}},members:{_generateMarkup:this._generateBackgroundMarkup,_generateBackgroundMarkup:function(v,content){var z=s;
var y=this.getBackgroundImage();
var x=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var A=this.getBackgroundPositionX();

if(A==null){A=0;
}v.backgroundPosition=A+b+top;
if(y){var w=qx.util.AliasManager.getInstance().resolve(y);
z=qx.bom.element.Decoration.create(w,x,v);
}else{if((qx.core.Environment.get(q)==r)){if(parseFloat(qx.core.Environment.get(k))<7||qx.core.Environment.get(d)){v.overflow=i;
}}
if(!content){content=s;
}z=o+qx.bom.element.Style.compile(v)+c+content+l;
}return z;
},_applyBackgroundImage:function(){if(qx.core.Environment.get(m)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",F=" ",E="shorthand",D="widthTop",C="styleRight",B="styleBottom",A="qx.debug",z="widthBottom",y="widthLeft",x="styleTop",w="colorBottom",q="styleLeft",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="qx.theme",k="border-top",l="border-left",s="border-right",t="qx.ui.decoration.MSingleBorder",v="border-bottom",u="absolute";
qx.Mixin.define(t,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[y,q,o]},right:{group:[r,C,p]},top:{group:[D,x,m]},bottom:{group:[z,B,w]},width:{group:[D,r,z,y],mode:E},style:{group:[x,C,B,q],mode:E},color:{group:[m,p,w,o],mode:E}},members:{_styleBorder:function(G){if(qx.core.Environment.get(n)){var I=qx.theme.manager.Color.getInstance();
var M=I.resolve(this.getColorTop());
var J=I.resolve(this.getColorRight());
var H=I.resolve(this.getColorBottom());
var L=I.resolve(this.getColorLeft());
}else{var M=this.getColorTop();
var J=this.getColorRight();
var H=this.getColorBottom();
var L=this.getColorLeft();
}var K=this.getWidthTop();

if(K>0){G[k]=K+g+this.getStyleTop()+F+(M||c);
}var K=this.getWidthRight();

if(K>0){G[s]=K+g+this.getStyleRight()+F+(J||c);
}var K=this.getWidthBottom();

if(K>0){G[v]=K+g+this.getStyleBottom()+F+(H||c);
}var K=this.getWidthLeft();

if(K>0){G[l]=K+g+this.getStyleLeft()+F+(L||c);
}if(qx.core.Environment.get(A)){if(G.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}G.position=u;
G.top=0;
G.left=0;
},_resizeBorder:function(N,O,P){var Q=this.getInsets();
O-=Q.left+Q.right;
P-=Q.top+Q.bottom;
if(O<0){O=0;
}
if(P<0){P=0;
}return {left:Q.left-this.getWidthLeft(),top:Q.top-this.getWidthTop(),width:O,height:P};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){if(qx.core.Environment.get(A)){if(this._markup){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var b="px",a="qx.ui.decoration.Single";
qx.Class.define(a,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);
if(c!=null){this.setWidth(c);
}
if(d!=null){this.setStyle(d);
}
if(e!=null){this.setColor(e);
}},members:{_markup:null,getMarkup:function(){if(this._markup){return this._markup;
}var f={};
this._styleBorder(f);
var g=this._generateBackgroundMarkup(f);
return this._markup=g;
},resize:function(h,i,j){var k=this._resizeBorder(h,i,j);
h.style.width=k.width+b;
h.style.height=k.height+b;
h.style.left=k.left+b;
h.style.top=k.top+b;
},tint:function(l,m){this._tintBackgroundColor(l,m,l.style);
},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
}},destruct:function(){this._markup=null;
}});
})();
(function(){var j="px",i="Integer",h="_applyBorderRadius",g="radiusTopRight",f="radiusTopLeft",e="-webkit-border-bottom-left-radius",d="-webkit-background-clip",c="radiusBottomRight",b="-webkit-border-bottom-right-radius",a="border-top-left-radius",x="qx.debug",w="border-top-right-radius",v="border-bottom-left-radius",u="radiusBottomLeft",t="-webkit-border-top-left-radius",s="shorthand",r="-moz-border-radius-bottomright",q="padding-box",p="border-bottom-right-radius",o="qx.ui.decoration.MBorderRadius",m="-moz-border-radius-topright",n="-webkit-border-top-right-radius",k="-moz-border-radius-topleft",l="-moz-border-radius-bottomleft";
qx.Mixin.define(o,{properties:{radiusTopLeft:{nullable:true,check:i,apply:h},radiusTopRight:{nullable:true,check:i,apply:h},radiusBottomLeft:{nullable:true,check:i,apply:h},radiusBottomRight:{nullable:true,check:i,apply:h},radius:{group:[f,g,c,u],mode:s}},members:{_styleBorderRadius:function(y){y[d]=q;
var z=this.getRadiusTopLeft();

if(z>0){y[k]=z+j;
y[t]=z+j;
y[a]=z+j;
}z=this.getRadiusTopRight();

if(z>0){y[m]=z+j;
y[n]=z+j;
y[w]=z+j;
}z=this.getRadiusBottomLeft();

if(z>0){y[l]=z+j;
y[e]=z+j;
y[v]=z+j;
}z=this.getRadiusBottomRight();

if(z>0){y[r]=z+j;
y[b]=z+j;
y[p]=z+j;
}},_applyBorderRadius:function(){if(qx.core.Environment.get(x)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var m="_applyBoxShadow",l="px ",k="Integer",j="box-shadow",i="shadowHorizontalLength",h="-webkit-box-shadow",g="qx.debug",f="qx.theme",e="shadowVerticalLength",d="-moz-box-shadow",a="shorthand",c="qx.ui.decoration.MBoxShadow",b="Color";
qx.Mixin.define(c,{properties:{shadowHorizontalLength:{nullable:true,check:k,apply:m},shadowVerticalLength:{nullable:true,check:k,apply:m},shadowBlurRadius:{nullable:true,check:k,apply:m},shadowColor:{nullable:true,check:b,apply:m},shadowLength:{group:[i,e],mode:a}},members:{_styleBoxShadow:function(n){if(qx.core.Environment.get(f)){var o=qx.theme.manager.Color.getInstance();
var r=o.resolve(this.getShadowColor());
}else{var r=this.getShadowColor();
}
if(r!=null){var s=this.getShadowVerticalLength()||0;
var p=this.getShadowHorizontalLength()||0;
var blur=this.getShadowBlurRadius()||0;
var q=p+l+s+l+blur+l+r;
n[d]=q;
n[h]=q;
n[j]=q;
}},_applyBoxShadow:function(){if(qx.core.Environment.get(g)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
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
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="horizontal",f=",",e=" 0",d="px",c="0",b="shorthand",a="Color",F="vertical",E="Number",D="%",C="),to(",B="from(",A="qx.theme",z="background-image",y="background",x="browser.name",w="-webkit-gradient(linear,",q="startColorPosition",r="qx.debug",o="deg, ",p="css.gradient.legacywebkit",m="startColor",n="ie",k="",l="qx.ui.decoration.MLinearBackgroundGradient",s="(",t="endColorPosition",v="css.gradient.linear",u="endColor";
qx.Mixin.define(l,{properties:{startColor:{check:a,nullable:true,apply:j},endColor:{check:a,nullable:true,apply:j},orientation:{check:[g,F],init:F,apply:j},startColorPosition:{check:E,init:0,apply:j},endColorPosition:{check:E,init:100,apply:j},colorPositionUnit:{check:[d,D],init:D,apply:j},gradientStart:{group:[m,q],mode:b},gradientEnd:{group:[u,t],mode:b}},members:{_styleLinearBackgroundGradient:function(G){if(qx.core.Environment.get(A)){var J=qx.theme.manager.Color.getInstance();
var Q=J.resolve(this.getStartColor());
var L=J.resolve(this.getEndColor());
}else{var Q=this.getStartColor();
var L=this.getEndColor();
}var R=this.getColorPositionUnit();
if(qx.core.Environment.get(p)){R=R===d?k:R;

if(this.getOrientation()==g){var P=this.getStartColorPosition()+R+e+R;
var N=this.getEndColorPosition()+R+e+R;
}else{var P=c+R+i+this.getStartColorPosition()+R;
var N=c+R+i+this.getEndColorPosition()+R;
}var M=B+Q+C+L+h;
var K=w+P+f+N+f+M+h;
G[y]=K;
}else{var S=this.getOrientation()==g?0:270;
if(qx.core.Environment.get(x)==n){S=S-90;
}var I=Q+i+this.getStartColorPosition()+R;
var H=L+i+this.getEndColorPosition()+R;
var O=qx.core.Environment.get(v);
G[z]=O+s+S+o+I+f+H+h;
}},_resizeLinearBackgroundGradient:function(T,U,V){var W=this.getInsets();
U-=W.left+W.right;
V-=W.top+W.bottom;
return {left:W.left,top:W.top,width:U,height:V};
},_applyLinearBackgroundGradient:function(){if(qx.core.Environment.get(r)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var j='',i="px ",h=" ",g="border-top",f="border-left",e="border-bottom",d="border-right",c="Color",b="Number",a="qx.theme",E="qx.debug",D="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",q="innerColorTop",r="relative",o="browser.documentmode",p="innerColorLeft",m="qx.ui.decoration.MDoubleBorder",n="left",k="engine.version",l="innerWidthBottom",s="innerWidthLeft",t="position",u="absolute";
qx.Mixin.define(m,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__sb;
this._resizeBorder=this.__sa;
this._styleBorder=this.__rX;
this._generateMarkup=this.__rY;
},properties:{innerWidthTop:{check:b,init:0},innerWidthRight:{check:b,init:0},innerWidthBottom:{check:b,init:0},innerWidthLeft:{check:b,init:0},innerWidth:{group:[w,z,l,s],mode:D},innerColorTop:{nullable:true,check:c},innerColorRight:{nullable:true,check:c},innerColorBottom:{nullable:true,check:c},innerColorLeft:{nullable:true,check:c},innerColor:{group:[q,v,x,p],mode:D}},members:{__rW:null,__rX:function(F){if(qx.core.Environment.get(a)){var H=qx.theme.manager.Color.getInstance();
var I=H.resolve(this.getInnerColorTop());
var L=H.resolve(this.getInnerColorRight());
var J=H.resolve(this.getInnerColorBottom());
var K=H.resolve(this.getInnerColorLeft());
}else{var I=this.getInnerColorTop();
var L=this.getInnerColorRight();
var J=this.getInnerColorBottom();
var K=this.getInnerColorLeft();
}F.position=r;
var G=this.getInnerWidthTop();

if(G>0){F[g]=G+i+this.getStyleTop()+h+I;
}var G=this.getInnerWidthRight();

if(G>0){F[d]=G+i+this.getStyleRight()+h+L;
}var G=this.getInnerWidthBottom();

if(G>0){F[e]=G+i+this.getStyleBottom()+h+J;
}var G=this.getInnerWidthLeft();

if(G>0){F[f]=G+i+this.getStyleLeft()+h+K;
}
if(qx.core.Environment.get(E)){if(!F[g]&&!F[d]&&!F[e]&&!F[f]){throw new Error("Invalid Double decorator (zero inner border width). Use qx.ui.decoration.Single instead!");
}}},__rY:function(M){var Q=this._generateBackgroundMarkup(M);

if(qx.core.Environment.get(a)){var O=qx.theme.manager.Color.getInstance();
var T=O.resolve(this.getColorTop());
var P=O.resolve(this.getColorRight());
var N=O.resolve(this.getColorBottom());
var S=O.resolve(this.getColorLeft());
}else{var T=this.getColorTop();
var P=this.getColorRight();
var N=this.getColorBottom();
var S=this.getColorLeft();
}M[g]=j;
M[d]=j;
M[e]=j;
M[f]=j;
M[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(k))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(o)<8)){M[C]=j;
}var R=this.getWidthTop();

if(R>0){M[g]=R+i+this.getStyleTop()+h+T;
}var R=this.getWidthRight();

if(R>0){M[d]=R+i+this.getStyleRight()+h+P;
}var R=this.getWidthBottom();

if(R>0){M[e]=R+i+this.getStyleBottom()+h+N;
}var R=this.getWidthLeft();

if(R>0){M[f]=R+i+this.getStyleLeft()+h+S;
}
if(qx.core.Environment.get(E)){if(M[g]==j&&M[d]==j&&M[e]==j&&M[f]==j){throw new Error("Invalid Double decorator (zero outer border width). Use qx.ui.decoration.Single instead!");
}}M[t]=u;
M[y]=0;
M[n]=0;
return this.__rW=this._generateBackgroundMarkup(M,Q);
},__sa:function(U,V,W){var X=this.getInsets();
V-=X.left+X.right;
W-=X.top+X.bottom;
var Y=X.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=X.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:Y,top:top,width:V,height:W,elementToApplyDimensions:U.firstChild};
},__sb:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var j="tabview-button-border",i="button-box",h="button-box-pressed",g="background-selected",f="button-border",e="button-box-hovered",d="button-box-pressed-hovered",c="solid",b="invalid",a="gray",X="button-border-hovered",W="tabview-unselected",V="shadow",U="border-separator",T="button-box-focused",S="border-light",R="checkbox",Q="tabview-page-button-top-bottom",P="window-border",O="radiobutton",q="scroll-knob",r="tabview-page-button-right-left",o="background",p="button-box-bright",m="window-border-inner",n="white",k="button-box-bright-pressed",l="button-box-dark-pressed",u="table-header",v="button-box-invalid",C="menubar-button-hovered",A="button-box-dark",G="#999999",E="qx/decoration/Simple",K="dotted",I="button",x="tooltip-text",N="table-focus-indicator",M="button-box-pressed-invalid",L="scrollbar-dark",w="qx.theme.simple.Decoration",y="table-header-cell",z="border-lead",B="#FFF",D="button-box-pressed-focused",F="scrollbar-bright",H="border-light-shadow",J="white-box-border",s="window",t="scroll-knob-pressed";
qx.Theme.define(w,{aliases:{decoration:E},decorations:{"border-blue":{decorator:qx.ui.decoration.Uniform,style:{width:4,color:g}},"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:g}},"main-dark":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:f}},"popup":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:P,shadowLength:2,shadowBlurRadius:5,shadowColor:V}},"button-box":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,gradientStart:[p,40],gradientEnd:[A,70],backgroundColor:p}},"button-box-pressed":{include:i,style:{gradientStart:[k,40],gradientEnd:[l,70],backgroundColor:k}},"button-box-pressed-hovered":{include:h,style:{color:X}},"button-box-hovered":{include:i,style:{color:X}},"button-box-invalid":{include:i,style:{color:b}},"button-box-pressed-invalid":{include:h,style:{color:b}},"button-box-hovered-invalid":{include:v},"button-box-pressed-hovered-invalid":{include:M},"button-box-focused":{include:i,style:{color:g}},"button-box-pressed-focused":{include:h,style:{color:g}},"button-box-hovered-focused":{include:T},"button-box-pressed-hovered-focused":{include:D},"button-box-right":{include:i,style:{radius:[0,3,3,0]}},"button-box-pressed-right":{include:h,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-right":{include:d,style:{radius:[0,3,3,0]}},"button-box-hovered-right":{include:e,style:{radius:[0,3,3,0]}},"button-box-focused-right":{include:T,style:{radius:[0,3,3,0]}},"button-box-right-borderless":{include:i,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-right-borderless":{include:h,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-hovered-right-borderless":{include:d,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-hovered-right-borderless":{include:e,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-top-right":{include:i,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-top-right":{include:h,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-hovered-top-right":{include:d,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-hovered-top-right":{include:e,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-bottom-right":{include:i,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-bottom-right":{include:h,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-hovered-bottom-right":{include:d,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-hovered-bottom-right":{include:e,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-bottom-left":{include:i,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-bottom-left":{include:h,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-hovered-bottom-left":{include:d,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-hovered-bottom-left":{include:e,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-top-left":{include:i,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-top-left":{include:h,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-hovered-top-left":{include:d,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-hovered-top-left":{include:e,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-middle":{include:i,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-middle":{include:h,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-hovered-middle":{include:d,style:{radius:0,width:[1,0,1,1]}},"button-box-hovered-middle":{include:e,style:{radius:0,width:[1,0,1,1]}},"button-box-left":{include:i,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-left":{include:h,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-left":{include:d,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-left":{include:e,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-focused-left":{include:T,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:U}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:U}},"scroll-knob":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,backgroundColor:F}},"scroll-knob-pressed":{include:q,style:{backgroundColor:L}},"scroll-knob-hovered":{include:q,style:{color:X}},"scroll-knob-pressed-hovered":{include:t,style:{color:X}},"button-hover":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius],style:{backgroundColor:I,radius:3}},"window":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:P,innerWidth:4,innerColor:m,shadowLength:1,shadowBlurRadius:3,shadowColor:V,backgroundColor:o}},"window-active":{include:s,style:{shadowLength:2,shadowBlurRadius:5}},"window-caption":{decorator:qx.ui.decoration.Single,style:{width:[0,0,2,0],color:m}},"white-box":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:J,shadowBlurRadius:2,shadowColor:G,radius:7,backgroundColor:n}},"inset":{decorator:qx.ui.decoration.Single,style:{width:1,color:[H,S,S,S]}},"focused-inset":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:g}},"border-invalid":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:b}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:K,color:z}},"tooltip":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{width:1,color:x,shadowLength:1,shadowBlurRadius:2,shadowColor:V}},"tooltip-error":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{radius:5,backgroundColor:b}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:f}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g}},"menubar-button-hovered":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{width:1,color:g,radius:3,backgroundColor:n}},"menubar-button-pressed":{include:C,style:{radius:[3,3,0,0],width:[1,1,0,1]}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:a,style:c}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,style:c}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:a,style:c}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,widthRight:1,colorRight:a,style:c}},"tabview-page-button-top-bottom":{decorator:qx.ui.decoration.Single,style:{width:[0,1],color:j}},"tabview-page-button-top-bottom-first":{include:Q,style:{color:[j,j,j,W]}},"tabview-page-button-top-bottom-last":{include:Q,style:{color:[j,W,j,j]}},"tabview-page-button-right-left":{decorator:qx.ui.decoration.Single,style:{width:[1,0],color:j}},"tabview-page-button-right-left-first":{include:r,style:{color:[W,j,j,j]}},"tabview-page-button-right-left-last":{include:r,style:{color:[j,j,W,j]}},"statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g,styleTop:c}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:N,style:c}},"table-header":{include:i,style:{radius:0,width:[1,0,1,0]}},"table-header-column-button":{include:u,style:{width:1,color:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,color:f}},"table-header-cell-first":{include:y,style:{widthLeft:1}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:B,width:1,color:U}},"radiobutton":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:10,width:1,color:f,innerColor:o,innerWidth:2}},"radiobutton-focused":{include:O,style:{color:g}},"radiobutton-invalid":{include:O,style:{color:b}},"checkbox":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:f}},"checkbox-focused":{include:R,style:{color:g}},"checkbox-invalid":{include:R,style:{color:b}}}});
})();
(function(){var a="fce.theme.Decoration";
qx.Theme.define(a,{extend:qx.theme.simple.Decoration,decorations:{}});
})();
(function(){var a="fce.theme.Theme";
qx.Theme.define(a,{meta:{color:fce.theme.Color,decoration:fce.theme.Decoration,font:fce.theme.Font,icon:qx.theme.icon.Tango,appearance:fce.theme.Appearance}});
})();


qx.$$loader.init();


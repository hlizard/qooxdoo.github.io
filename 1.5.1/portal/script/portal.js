(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"portal.Application","qx.debug":false,"qx.optimization.basecalls":true,"qx.optimization.comments":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.variants":true,"qx.revision":"exported","qx.theme":"qx.theme.Modern","qx.version":"1.5.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"portal":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.5.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:portal.dd0444d269c0.js"]}},
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

qx.$$packageData['0']={"locales":{},"resources":{"portal/css/style.css":"portal","portal/data/boxData.js":"portal","qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/form/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/group-item.png":[110,20,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/treevirtual/.gitignore":"qx","qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"]},"translations":{}};
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
}return be;
})(),getEnvironmentSetting:function(bf){if(qx.$$environment){return qx.$$environment[bf];
}},setEnvironmentSetting:function(bg,bh){if(!qx.$$environment){qx.$$environment={};
}
if(qx.$$environment[bg]===undefined){qx.$$environment[bg]=bh;
}},createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bi,bj,bk,name,bl){var bo=bk.prototype;
var bn=new Function;
bn.prototype=bo;
var bm=new bn;
bi.prototype=bm;
bm.name=bm.classname=name;
bm.basename=bl;
bj.base=bi.superclass=bk;
bj.self=bi.constructor=bm.constructor=bi;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bp){return bp.__count__;
},"default":function(bq){var length=0;

for(var br in bq){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bs,bt,bu){if(bu===undefined){bu=true;
}
for(var bv in bt){if(bu||bs[bv]===undefined){bs[bv]=bt[bv];
}}return bs;
},__a:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bw){var bx=[];
var bz=Object.prototype.hasOwnProperty;

for(var bA in bw){if(bz.call(bw,bA)){bx.push(bA);
}}var by=qx.Bootstrap.__a;

for(var i=0,a=by,l=a.length;i<l;i++){if(bz.call(bw,a[i])){bx.push(a[i]);
}}return bx;
},"default":function(bB){var bC=[];
var bD=Object.prototype.hasOwnProperty;

for(var bE in bB){if(bD.call(bB,bE)){bC.push(bE);
}}return bC;
}})[typeof (Object.keys)==L?B:(function(){for(var bF in {toString:1}){return bF;
}})()!==m?u:j],getKeysAsString:function(bG){var bH=qx.Bootstrap.getKeys(bG);

if(bH.length==0){return p;
}return g+bH.join(C)+g;
},__b:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bI,self,bJ){var bK=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bL=Array.prototype.slice.call(arguments,0,arguments.length);
return bI.apply(self,bK.concat(bL));
};
},firstUp:function(bM){return bM.charAt(0).toUpperCase()+bM.substr(1);
},firstLow:function(bN){return bN.charAt(0).toLowerCase()+bN.substr(1);
},getClass:function(bO){var bP=Object.prototype.toString.call(bO);
return (qx.Bootstrap.__b[bP]||bP.slice(8,-1));
},isString:function(bQ){return (bQ!==null&&(typeof bQ===F||qx.Bootstrap.getClass(bQ)==d||bQ instanceof String||(!!bQ&&!!bQ.$$isString)));
},isArray:function(bR){return (bR!==null&&(bR instanceof Array||(bR&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bR.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bR)==f||(!!bR&&!!bR.$$isArray)));
},isObject:function(bS){return (bS!==undefined&&bS!==null&&qx.Bootstrap.getClass(bS)==h);
},isFunction:function(bT){return qx.Bootstrap.getClass(bT)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bU,name){while(bU){if(bU.$$properties&&bU.$$properties[name]){return bU.$$properties[name];
}bU=bU.superclass;
}return null;
},hasProperty:function(bV,name){return !!qx.Bootstrap.getPropertyDefinition(bV,name);
},getEventType:function(bW,name){var bW=bW.constructor;

while(bW.superclass){if(bW.$$events&&bW.$$events[name]!==undefined){return bW.$$events[name];
}bW=bW.superclass;
}return null;
},supportsEvent:function(bX,name){return !!qx.Bootstrap.getEventType(bX,name);
},getByInterface:function(bY,ca){var cb,i,l;

while(bY){if(bY.$$implements){cb=bY.$$flatImplements;

for(i=0,l=cb.length;i<l;i++){if(cb[i]===ca){return bY;
}}}bY=bY.superclass;
}return null;
},hasInterface:function(cc,cd){return !!qx.Bootstrap.getByInterface(cc,cd);
},getMixins:function(ce){var cf=[];

while(ce){if(ce.$$includes){cf.push.apply(cf,ce.$$flatIncludes);
}ce=ce.superclass;
}return cf;
},$$logs:[],debug:function(cg,ch){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(ci,cj){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ck,cl){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(cm,cn){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(co){}}});
})();
(function(){var r=".",q="function",p="",o="gecko",n="[object Opera]",m="mshtml",l="8.0",k="AppleWebKit/",j="9.0",i="[^\\.0-9]",c="webkit",h="4.0",f="1.9.0.0",b="opera",a="Version/",e="5.0",d="qx.bom.client.Engine",g="Gecko";
qx.Bootstrap.define(d,{statics:{getVersion:function(){var v=window.navigator.userAgent;
var t=p;

if(qx.bom.client.Engine.__c()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(v)){if(v.indexOf(a)!=-1){var u=v.match(/Version\/(\d+)\.(\d+)/);
t=u[1]+r+u[2].charAt(0)+r+u[2].substring(1,u[2].length);
}else{t=RegExp.$1+r+RegExp.$2;

if(RegExp.$3!=p){t+=r+RegExp.$3;
}}}}else if(qx.bom.client.Engine.__d()){if(/AppleWebKit\/([^ ]+)/.test(v)){t=RegExp.$1;
var w=RegExp(i).exec(t);

if(w){t=t.slice(0,w.index);
}}}else if(qx.bom.client.Engine.__e()){if(/rv\:([^\);]+)(\)|;)/.test(v)){t=RegExp.$1;
}}else if(qx.bom.client.Engine.__f()){if(/MSIE\s+([^\);]+)(\)|;)/.test(v)){t=RegExp.$1;
if(t<8&&/Trident\/([^\);]+)(\)|;)/.test(v)){if(RegExp.$1==h){t=l;
}else if(RegExp.$1==e){t=j;
}}}}else{var s=window.qxFail;

if(s&&typeof s===q){t=s().FULLVERSION;
}else{t=f;
qx.Bootstrap.warn("Unsupported client: "+v+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return t;
},getName:function(){var name;

if(qx.bom.client.Engine.__c()){name=b;
}else if(qx.bom.client.Engine.__d()){name=c;
}else if(qx.bom.client.Engine.__e()){name=o;
}else if(qx.bom.client.Engine.__f()){name=m;
}else{var x=window.qxFail;

if(x&&typeof x===q){name=x().NAME;
}else{name=o;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__c:function(){return window.opera&&Object.prototype.toString.call(window.opera)==n;
},__d:function(){return window.navigator.userAgent.indexOf(k)!=-1;
},__e:function(){return window.controllers&&window.navigator.product===g;
},__f:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
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
},getXmlHttpRequest:function(){var q=window.ActiveXObject?(function(){if(window.location.protocol!==h){try{new window.XMLHttpRequest();
return k;
}catch(r){}}
try{new window.ActiveXObject(j);
return d;
}catch(s){}})():(function(){try{new window.XMLHttpRequest();
return k;
}catch(t){}})();
return q||i;
}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",bb="10.0",ba="10.4",Y="rim_tabletos",X="Darwin",W="2003",V=")",U="iPhone",T="android",S="unix",R="ce",q="7",r="SymbianOS",o="|",p="MacPPC",m="iPod",n="\.",k="Win64",l="linux",u="me",v="Macintosh",D="Android",B="Windows",J="ios",F="vista",N="blackberry",L="(",x="win",Q="Linux",P="BSD",O="iPad",w="X11",z="xp",A="symbian",C="qx.bom.client.OperatingSystem",E="g",G="Win32",K="osx",M="webOS",s="RIM Tablet OS",t="BlackBerry",y="nt4",I="MacIntel",H="webos";
qx.Bootstrap.define(C,{statics:{getName:function(){if(!navigator){return j;
}var bc=navigator.platform||j;
var bd=navigator.userAgent||j;

if(bc.indexOf(B)!=-1||bc.indexOf(G)!=-1||bc.indexOf(k)!=-1){return x;
}else if(bc.indexOf(v)!=-1||bc.indexOf(p)!=-1||bc.indexOf(I)!=-1){return K;
}else if(bd.indexOf(s)!=-1){return Y;
}else if(bd.indexOf(M)!=-1){return H;
}else if(bc.indexOf(m)!=-1||bc.indexOf(U)!=-1||bc.indexOf(O)!=-1){return J;
}else if(bc.indexOf(Q)!=-1){return l;
}else if(bc.indexOf(w)!=-1||bc.indexOf(P)!=-1||bc.indexOf(X)!=-1){return S;
}else if(bc.indexOf(D)!=-1){return T;
}else if(bc.indexOf(r)!=-1){return A;
}else if(bc.indexOf(t)!=-1){return N;
}return j;
},__g:{"Windows NT 6.1":q,"Windows NT 6.0":F,"Windows NT 5.2":W,"Windows NT 5.1":z,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":y,"Win 9x 4.90":u,"Windows CE":R,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":ba,"Mac OS X 10.4":ba,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":bb,"Mac OS X 10.0":bb},getVersion:function(){var bg=[];

for(var bf in qx.bom.client.OperatingSystem.__g){bg.push(bf);
}var bh=new RegExp(L+bg.join(o).replace(/\./g,n)+V,E);
var be=bh.exec(navigator.userAgent);

if(be&&be[1]){return qx.bom.client.OperatingSystem.__g[be[1]];
}return j;
}}});
})();
(function(){var k="background",j="div",h="color",g="linear-gradient(0deg, white 0%, red 100%)",f="placeholder",e="content",d="OTextOverflow",c="MozBorderRadius",b="qx.bom.client.Css",a='m11',C="input",B="-ms-linear-gradient(0deg, white 0%, red 100%)",A="-moz-linear-gradient(0deg, white 0%, red 100%)",z="gradient",y="-webkit-linear-gradient(left, white, black)",x="MozBoxShadow",w="rgba(1, 2, 3, 0.5)",v="rgba",u="-o-linear-gradient(0deg, white 0%, red 100%)",t="borderRadius",r='WebKitCSSMatrix',s="WebkitBorderRadius",p="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",q="mshtml",n="WebkitBoxShadow",o="textOverflow",l="boxShadow",m="border";
qx.Bootstrap.define(b,{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==q||!qx.bom.client.Browser.getQuirksMode();
return content?e:m;
},getTextOverflow:function(){return o in document.documentElement.style||d in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement(C);
return f in i;
},getBorderRadius:function(){return t in document.documentElement.style||c in document.documentElement.style||s in document.documentElement.style;
},getBoxShadow:function(){return l in document.documentElement.style||x in document.documentElement.style||n in document.documentElement.style;
},getTranslate3d:function(){return r in window&&a in new WebKitCSSMatrix();
},getGradients:function(){var D;

try{D=document.createElement(j);
}catch(F){D=document.createElement();
}var E=[p,y,A,u,B,g];

for(var i=0;i<E.length;i++){try{D.style[k]=E[i];

if(D.style[k].indexOf(z)!=-1){return true;
}}catch(G){}}return false;
},getRgba:function(){var H;

try{H=document.createElement(j);
}catch(I){H=document.createElement();
}try{H.style[h]=w;

if(H.style[h].indexOf(v)!=-1){return true;
}}catch(J){}return false;
}}});
})();
(function(){var j="mshtml",i="msie",h=")(/| )([0-9]+\.[0-9])",g="",f="(",e="ce",d="CSS1Compat",c="android",b="operamini",a="mobile chrome",z="iemobile",y="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",x="opera mobi",w="Mobile Safari",v="operamobile",u="ie",t="mobile safari",s="IEMobile|Maxthon|MSIE",r="qx.bom.client.Browser",q="opera mini",o="opera",p="Opera Mini|Opera Mobi|Opera",m="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",k="5.0",l="Mobile/";
qx.Bootstrap.define(r,{statics:{getName:function(){var D=navigator.userAgent;
var C=new RegExp(f+qx.bom.client.Browser.__h+h);
var B=D.match(C);

if(!B){return g;
}var name=B[1].toLowerCase();
var A=qx.bom.client.Engine.getName();

if(A===n){if(name===c){name=a;
}else if(D.indexOf(w)!==-1||D.indexOf(l)!==-1){name=t;
}}else if(A===j){if(name===i){name=u;
if(qx.bom.client.OperatingSystem.getVersion()===e){name=z;
}}}else if(A===o){if(name===x){name=v;
}else if(name===q){name=b;
}}return name;
},getVersion:function(){var H=navigator.userAgent;
var G=new RegExp(f+qx.bom.client.Browser.__h+h);
var F=H.match(G);

if(!F){return g;
}var name=F[1].toLowerCase();
var E=F[3];
if(H.match(/Version(\/| )([0-9]+\.[0-9])/)){E=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==j){E=qx.bom.client.Engine.getVersion();

if(name===i&&qx.bom.client.OperatingSystem.getVersion()==e){E=k;
}}return E;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==j&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==d;
}},__h:{"webkit":m,"gecko":y,"mshtml":s,"opera":p}[qx.bom.client.Engine.getName()]}});
})();
(function(){var e="qx.bom.client.Event",d="ontouchstart",c="mshtml",b="opera",a="pointerEvents";
qx.Bootstrap.define(e,{statics:{getTouch:function(){return (d in window);
},getPointer:function(){if(a in document.documentElement.style){var f=qx.bom.client.Engine.getName();
return f!=b&&f!=c;
}return false;
}}});
})();
(function(){var l="",k="audio",j="video",i='video/ogg; codecs="theora, vorbis"',h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="http://www.w3.org/TR/SVG11/feature#BasicStructure",f='audio',d='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",b="audio/mpeg",z="org.w3c.dom.svg",y="DOMTokenList",x="1.1",w="audio/x-wav",u="audio/ogg",t="audio/x-aiff",s="qx.bom.client.Html",r='video',q="mshtml",p="label",n='video/webm; codecs="vp8, vorbis"',o="1.0",m="audio/basic";
qx.Bootstrap.define(s,{statics:{getWebWorker:function(){return window.Worker!=null;
},getFileReader:function(){return window.FileReader!=null;
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
},getDataset:function(){return !!document.documentElement.dataset;
}}});
})();
(function(){var a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
})();
(function(){var k="os.name",j="os.version",h="css.borderradius",g="default",f="browser.quirksmode",e="browser.name",d="qx.allowUrlSettings",c="io.ssl",b="css.boxmodel",a="html.classlist",P="event.touch",O="css.gradients",N="browser.documentmode",M="ecmascript.objectcount",L="engine.version",K="engine.name",J="css.rgba",I="|",H="css.boxshadow",G="qx.core.Environment",r="qx.debug.databinding",s="qx.optimization.basecalls",p="qx.debug.dispose",q="qx.optimization.variables",n="true",o="qx.optimization.privates",l="qx.aspects",m="qx.debug",t="qx.dynamicmousewheel",u=":",y="qxenv",x="qx.optimization.strings",A="qx.optimization.comments",z="qx.optimization.variants",C="qx.mobile.emulatetouch",B="qx.dynlocale",w="false",F="&",E="qx.mobile.nativescroll",D="qx.allowUrlVariants",v="qx.propertyDebugLevel";
qx.Bootstrap.define(G,{statics:{_checks:{},_asyncChecks:{},__j:{},get:function(Q){if(this.__j[Q]!=undefined){return this.__j[Q];
}var R=this._checks[Q];

if(R){var S=R();
this.__j[Q]=S;
return S;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(Q+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(T,U,self){var W=this;

if(this.__j[T]!=undefined){window.setTimeout(function(){U.call(self,W.__j[T]);
},0);
return;
}var V=this._asyncChecks[T];

if(V){V(function(X){W.__j[T]=X;
U.call(self,X);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(T+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(Y,ba){return this.__k(this.get(Y),ba);
},selectAsync:function(bb,bc,self){this.getAsync(bb,function(bd){var be=this.__k(bb,bc);
be.call(self,bd);
},this);
},__k:function(bf,bg){var bi=bg[bf];

if(bg.hasOwnProperty(bf)){return bi;
}for(var bh in bg){if(bh.indexOf(I)!=-1){var bj=bh.split(I);

for(var i=0;i<bj.length;i++){if(bj[i]==bf){return bg[bh];
}}}}
if(bg[g]!==undefined){return bg[g];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+bf+'" ('+(typeof bf)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(bg)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(bk){delete this.__j[bk];
},add:function(bl,bm){if(this._checks[bl]==undefined){if(bm instanceof Function){this._checks[bl]=bm;
}else{this._checks[bl]=this.__n(bm);
}}},addAsync:function(bn,bo){if(this._checks[bn]==undefined){this._asyncChecks[bn]=bo;
}},getChecks:function(){return this._checks;
},getAsyncChecks:function(){return this._asyncChecks;
},_initDefaultQxValues:function(){this.add(d,function(){return false;
});
this.add(D,function(){return false;
});
this.add(v,function(){return 0;
});
this.add(m,function(){return true;
});
this.add(l,function(){return false;
});
this.add(B,function(){return true;
});
this.add(C,function(){return false;
});
this.add(E,function(){return false;
});
this.add(t,function(){return true;
});
this.add(r,function(){return false;
});
this.add(p,function(){return false;
});
this.add(s,function(){return false;
});
this.add(A,function(){return false;
});
this.add(o,function(){return false;
});
this.add(x,function(){return false;
});
this.add(q,function(){return false;
});
this.add(z,function(){return false;
});
},__l:function(){if(qx&&qx.$$environment){for(var bq in qx.$$environment){var bp=qx.$$environment[bq];
this._checks[bq]=this.__n(bp);
}}},__m:function(){if(window.document&&window.document.location){var br=window.document.location.search.slice(1).split(F);

for(var i=0;i<br.length;i++){var bt=br[i].split(u);

if(bt.length!=3||bt[0]!=y){continue;
}var bu=bt[1];
var bs=decodeURIComponent(bt[2]);
if(bs==n){bs=true;
}else if(bs==w){bs=false;
}else if(/^(\d|\.)+$/.test(bs)){bs=parseFloat(bs);
}this._checks[bu]=this.__n(bs);
}}},__n:function(bv){return qx.Bootstrap.bind(function(bw){return bw;
},null,bv);
},useCheck:function(bx){return true;
},_initChecksMap:function(){if(this.useCheck(L)){this._checks[L]=qx.bom.client.Engine.getVersion;
}
if(this.useCheck(K)){this._checks[K]=qx.bom.client.Engine.getName;
}if(this.useCheck(e)){this._checks[e]=qx.bom.client.Browser.getName;
}
if(this.useCheck(N)){this._checks[N]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck(f)){this._checks[f]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck(k)){this._checks[k]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck(j)){this._checks[j]=qx.bom.client.OperatingSystem.getVersion;
}
if(this.useCheck(c)){this._checks[c]=qx.bom.client.Transport.getSsl;
}if(this.useCheck(P)){this._checks[P]=qx.bom.client.Event.getTouch;
}if(this.useCheck(M)){this._checks[M]=qx.bom.client.EcmaScript.getObjectCount;
}
if(this.useCheck(a)){this._checks[a]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.Css.getBorderRadius;
}
if(this.useCheck(H)){this._checks[H]=qx.bom.client.Css.getBoxShadow;
}
if(this.useCheck(O)){this._checks[O]=qx.bom.client.Css.getGradients;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Css.getBoxModel;
}
if(this.useCheck(J)){this._checks[J]=qx.bom.client.Css.getRgba;
}}},defer:function(by){by._initDefaultQxValues();
by._initChecksMap();
by.__l();
if(by.get(d)===true){by.__m();
}}});
})();
(function(){var h="qx.Mixin",g=".prototype",f="constructor",e="Array",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(h,{statics:{define:function(name,j){if(j){if(j.include&&!(qx.Bootstrap.getClass(j.include)===e)){j.include=[j.include];
}var m=j.statics?j.statics:{};
qx.Bootstrap.setDisplayNames(m,name);

for(var k in m){if(m[k] instanceof Function){m[k].$$mixin=m;
}}if(j.construct){m.$$constructor=j.construct;
qx.Bootstrap.setDisplayName(j.construct,name,f);
}
if(j.include){m.$$includes=j.include;
}
if(j.properties){m.$$properties=j.properties;
}
if(j.members){m.$$members=j.members;
qx.Bootstrap.setDisplayNames(j.members,name+g);
}
for(var k in m.$$members){if(m.$$members[k] instanceof Function){m.$$members[k].$$mixin=m;
}}
if(j.events){m.$$events=j.events;
}
if(j.destruct){m.$$destructor=j.destruct;
qx.Bootstrap.setDisplayName(j.destruct,name,b);
}}else{var m={};
}m.$$type=a;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
this.$$registry[name]=m;
return m;
},checkCompatibility:function(n){var q=this.flatten(n);
var r=q.length;

if(r<2){return true;
}var u={};
var t={};
var s={};
var p;

for(var i=0;i<r;i++){p=q[i];

for(var o in p.events){if(s[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+s[o]+'" in member "'+o+'"!');
}s[o]=p.name;
}
for(var o in p.properties){if(u[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+u[o]+'" in property "'+o+'"!');
}u[o]=p.name;
}
for(var o in p.members){if(t[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+t[o]+'" in member "'+o+'"!');
}t[o]=p.name;
}}return true;
},isCompatible:function(v,w){var x=qx.Bootstrap.getMixins(w);
x.push(v);
return qx.Mixin.checkCompatibility(x);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(y){if(!y){return [];
}var z=y.concat();

for(var i=0,l=y.length;i<l;i++){if(y[i].$$includes){z.push.apply(z,this.flatten(y[i].$$includes));
}}return z;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__o:null,__p:function(){}}});
})();
(function(){var j="function",h="Boolean",g="qx.Interface",f="Array",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(g,{statics:{define:function(name,k){if(k){if(k.extend&&!(qx.Bootstrap.getClass(k.extend)===f)){k.extend=[k.extend];
}var m=k.statics?k.statics:{};
if(k.extend){m.$$extends=k.extend;
}
if(k.properties){m.$$properties=k.properties;
}
if(k.members){m.$$members=k.members;
}
if(k.events){m.$$events=k.events;
}}else{var m={};
}m.$$type=c;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
qx.Interface.$$registry[name]=m;
return m;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(n){if(!n){return [];
}var o=n.concat();

for(var i=0,l=n.length;i<l;i++){if(n[i].$$extends){o.push.apply(o,this.flatten(n[i].$$extends));
}}return o;
},__q:function(p,q,r,s){var w=r.$$members;

if(w){for(var v in w){if(qx.Bootstrap.isFunction(w[v])){var u=this.__r(q,v);
var t=u||qx.Bootstrap.isFunction(p[v]);

if(!t){throw new Error('Implementation of method "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}var x=s===true&&!u&&!qx.Bootstrap.hasInterface(q,r);

if(x){p[v]=this.__u(r,p[v],v,w[v]);
}}else{if(typeof p[v]===undefined){if(typeof p[v]!==j){throw new Error('Implementation of member "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}}}}}},__r:function(y,z){var D=z.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!D){return false;
}var A=qx.Bootstrap.firstLow(D[2]);
var B=qx.Bootstrap.getPropertyDefinition(y,A);

if(!B){return false;
}var C=D[0]==b||D[0]==d;

if(C){return qx.Bootstrap.getPropertyDefinition(y,A).check==h;
}return true;
},__s:function(E,F){if(F.$$properties){for(var G in F.$$properties){if(!qx.Bootstrap.getPropertyDefinition(E,G)){throw new Error('The property "'+G+'" is not supported by Class "'+E.classname+'"!');
}}}},__t:function(H,I){if(I.$$events){for(var J in I.$$events){if(!qx.Bootstrap.supportsEvent(H,J)){throw new Error('The event "'+J+'" is not supported by Class "'+H.classname+'"!');
}}}},assertObject:function(K,L){var N=K.constructor;
this.__q(K,N,L,false);
this.__s(N,L);
this.__t(N,L);
var M=L.$$extends;

if(M){for(var i=0,l=M.length;i<l;i++){this.assertObject(K,M[i]);
}}},assert:function(O,P,Q){this.__q(O.prototype,O,P,Q);
this.__s(O,P);
this.__t(O,P);
var R=P.$$extends;

if(R){for(var i=0,l=R.length;i<l;i++){this.assert(O,R[i],Q);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__u:function(){},__o:null,__p:function(){}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__v:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__v;
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
},addAdvice:function(o,p,q,name){this.__v.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
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
(function(){var m=';',k='return this.',j="boolean",h="string",g='!==undefined)',f='else if(this.',e='if(this.',d='else ',c=' of an instance of ',b=' is not (yet) ready!");',bi="init",bh='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bg='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bf=" of class ",be='qx.core.Assert.assertInstance(value, Date, msg) || true',bd='value !== null && value.nodeType !== undefined',bc='var inherit=prop.$$inherit;',bb='value !== null && value.nodeType === 9 && value.documentElement',ba='return init;',Y='value !== null && value.$$type === "Mixin"',t='qx.core.Assert.assertMap(value, msg) || true',u='var init=this.',r='return value;',s='qx.core.Assert.assertNumber(value, msg) || true',p='qx.core.Assert.assertPositiveInteger(value, msg) || true',q="': ",n="Error in property ",o='if(init==qx.core.Property.$$inherit)init=null;',x='qx.core.Assert.assertInteger(value, msg) || true',y="rv:1.8.1",G='value !== null && value.$$type === "Interface"',E="set",O='value !== null && value.$$type === "Theme"',J='qx.core.Assert.assertInstance(value, RegExp, msg) || true',U='value !== null && value.type !== undefined',S='value !== null && value.document',A=" in method ",X='qx.core.Assert.assertInstance(value, Error, msg) || true',W='throw new Error("Property ',V='qx.core.Assert.assertBoolean(value, msg) || true',z='return null;',C='qx.core.Assert.assertObject(value, msg) || true',D="setRuntime",F='value !== null && value.nodeType === 1 && value.attributes',H=" with incoming value '",K="setThemed",P='qx.core.Assert.assertString(value, msg) || true',T="inherit",v='value !== null && value.$$type === "Class"',w='qx.core.Assert.assertFunction(value, msg) || true',B='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',N='qx.core.Assert.assertArray(value, msg) || true',M='qx.core.Assert.assertPositiveNumber(value, msg) || true',L="object",R="MSIE 6.0",Q='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',I="qx.core.Property";
qx.Bootstrap.define(I,{statics:{__w:{"Boolean":V,"String":P,"Number":s,"Integer":x,"PositiveNumber":M,"PositiveInteger":p,"Error":X,"RegExp":J,"Object":C,"Array":N,"Map":t,"Function":w,"Date":be,"Node":bd,"Element":F,"Document":bb,"Window":S,"Event":U,"Class":v,"Mixin":Y,"Interface":G,"Theme":O,"Color":bh,"Decorator":B,"Font":bg},__x:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:T,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:h,dereference:j,inheritable:j,nullable:j,themeable:j,refine:j,init:null,apply:h,event:h,check:null,transform:h,deferredInit:j,validate:null},$$allowedGroupKeys:{name:h,group:L,mode:h,themeable:j},$$inheritable:{},__y:function(bj){var bk=this.__z(bj);

if(!bk.length){var bl=function(){};
}else{bl=this.__A(bk);
}bj.prototype.$$refreshInheritables=bl;
},__z:function(bm){var bo=[];

while(bm){var bn=bm.$$properties;

if(bn){for(var name in this.$$inheritable){if(bn[name]&&bn[name].inheritable){bo.push(name);
}}}bm=bm.superclass;
}return bo;
},__A:function(bp){var bt=this.$$store.inherit;
var bs=this.$$store.init;
var br=this.$$method.refresh;
var bq=["var parent = this.getLayoutParent();","if (!parent) return;"];

for(var i=0,l=bp.length;i<l;i++){var name=bp[i];
bq.push("var value = parent.",bt[name],";","if (value===undefined) value = parent.",bs[name],";","this.",br[name],"(value);");
}return new Function(bq.join(""));
},attachRefreshInheritables:function(bu){bu.prototype.$$refreshInheritables=function(){qx.core.Property.__y(bu);
return this.$$refreshInheritables();
};
},attachMethods:function(bv,name,bw){bw.group?this.__B(bv,bw,name):this.__C(bv,bw,name);
},__B:function(bx,by,name){var bF=qx.Bootstrap.firstUp(name);
var bE=bx.prototype;
var bG=by.themeable===true;
var bH=[];
var bB=[];

if(bG){var bz=[];
var bD=[];
}var bC="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
bH.push(bC);

if(bG){bz.push(bC);
}
if(by.mode=="shorthand"){var bA="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
bH.push(bA);

if(bG){bz.push(bA);
}}
for(var i=0,a=by.group,l=a.length;i<l;i++){bH.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
bB.push("this.",this.$$method.reset[a[i]],"();");

if(bG){bz.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
bD.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+bF;
bE[this.$$method.set[name]]=new Function(bH.join(""));
this.$$method.reset[name]="reset"+bF;
bE[this.$$method.reset[name]]=new Function(bB.join(""));

if(bG){this.$$method.setThemed[name]="setThemed"+bF;
bE[this.$$method.setThemed[name]]=new Function(bz.join(""));
this.$$method.resetThemed[name]="resetThemed"+bF;
bE[this.$$method.resetThemed[name]]=new Function(bD.join(""));
}},__C:function(bI,bJ,name){var bL=qx.Bootstrap.firstUp(name);
var bN=bI.prototype;
if(bJ.dereference===undefined&&typeof bJ.check==="string"){bJ.dereference=this.__D(bJ.check);
}var bM=this.$$method;
var bK=this.$$store;
bK.runtime[name]="$$runtime_"+name;
bK.user[name]="$$user_"+name;
bK.theme[name]="$$theme_"+name;
bK.init[name]="$$init_"+name;
bK.inherit[name]="$$inherit_"+name;
bK.useinit[name]="$$useinit_"+name;
bM.get[name]="get"+bL;
bN[bM.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bI,name,"get");
};
bM.set[name]="set"+bL;
bN[bM.set[name]]=function(bO){return qx.core.Property.executeOptimizedSetter(this,bI,name,"set",arguments);
};
bM.reset[name]="reset"+bL;
bN[bM.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bI,name,"reset");
};

if(bJ.inheritable||bJ.apply||bJ.event||bJ.deferredInit){bM.init[name]="init"+bL;
bN[bM.init[name]]=function(bP){return qx.core.Property.executeOptimizedSetter(this,bI,name,"init",arguments);
};
}
if(bJ.inheritable){bM.refresh[name]="refresh"+bL;
bN[bM.refresh[name]]=function(bQ){return qx.core.Property.executeOptimizedSetter(this,bI,name,"refresh",arguments);
};
}bM.setRuntime[name]="setRuntime"+bL;
bN[bM.setRuntime[name]]=function(bR){return qx.core.Property.executeOptimizedSetter(this,bI,name,"setRuntime",arguments);
};
bM.resetRuntime[name]="resetRuntime"+bL;
bN[bM.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bI,name,"resetRuntime");
};

if(bJ.themeable){bM.setThemed[name]="setThemed"+bL;
bN[bM.setThemed[name]]=function(bS){return qx.core.Property.executeOptimizedSetter(this,bI,name,"setThemed",arguments);
};
bM.resetThemed[name]="resetThemed"+bL;
bN[bM.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bI,name,"resetThemed");
};
}
if(bJ.check==="Boolean"){bN["toggle"+bL]=new Function("return this."+bM.set[name]+"(!this."+bM.get[name]+"())");
bN["is"+bL]=new Function("return this."+bM.get[name]+"()");
}},__D:function(bT){return !!this.__x[bT];
},__E:function(bU){return this.__x[bU]||qx.Bootstrap.classIsDefined(bU)||(qx.Interface&&qx.Interface.isDefined(bU));
},__F:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bV,bW,bX,bY,ca){var cb=bV.constructor.classname;
var cc=n+bX+bf+cb+A+this.$$method[bY][bX]+H+ca+q;
throw new Error(cc+(this.__F[bW]||"Unknown reason: "+bW));
},__G:function(cd,ce,name,cf,cg,ch){var ci=this.$$method[cf][name];
{ce[ci]=new Function("value",cg.join(""));
};
if(qx.core.Environment.get("qx.aspects")){ce[ci]=qx.core.Aspect.wrap(cd.classname+"."+ci,ce[ci],"property");
}qx.Bootstrap.setDisplayName(ce[ci],cd.classname+".prototype",ci);
if(ch===undefined){return cd[ci]();
}else{return cd[ci](ch[0]);
}},executeOptimizedGetter:function(cj,ck,name,cl){var cn=ck.$$properties[name];
var cp=ck.prototype;
var cm=[];
var co=this.$$store;
cm.push(e,co.runtime[name],g);
cm.push(k,co.runtime[name],m);

if(cn.inheritable){cm.push(f,co.inherit[name],g);
cm.push(k,co.inherit[name],m);
cm.push(d);
}cm.push(e,co.user[name],g);
cm.push(k,co.user[name],m);

if(cn.themeable){cm.push(f,co.theme[name],g);
cm.push(k,co.theme[name],m);
}
if(cn.deferredInit&&cn.init===undefined){cm.push(f,co.init[name],g);
cm.push(k,co.init[name],m);
}cm.push(d);

if(cn.init!==undefined){if(cn.inheritable){cm.push(u,co.init[name],m);

if(cn.nullable){cm.push(o);
}else if(cn.init!==undefined){cm.push(k,co.init[name],m);
}else{cm.push(Q,name,c,ck.classname,b);
}cm.push(ba);
}else{cm.push(k,co.init[name],m);
}}else if(cn.inheritable||cn.nullable){cm.push(z);
}else{cm.push(W,name,c,ck.classname,b);
}return this.__G(cj,cp,name,cl,cm);
},executeOptimizedSetter:function(cq,cr,name,cs,ct){var cy=cr.$$properties[name];
var cx=cr.prototype;
var cv=[];
var cu=cs===E||cs===K||cs===D||(cs===bi&&cy.init===undefined);
var cw=cy.apply||cy.event||cy.inheritable;
var cz=this.__H(cs,name);
this.__I(cv,cy,name,cs,cu);

if(cu){this.__J(cv,cr,cy,name);
}
if(cw){this.__K(cv,cu,cz,cs);
}
if(cy.inheritable){cv.push(bc);
}
if(!cw){this.__M(cv,name,cs,cu);
}else{this.__N(cv,cy,name,cs,cu);
}
if(cy.inheritable){this.__O(cv,cy,name,cs);
}else if(cw){this.__P(cv,cy,name,cs);
}
if(cw){this.__Q(cv,cy,name);
if(cy.inheritable&&cx._getChildren){this.__R(cv,name);
}}if(cu){cv.push(r);
}return this.__G(cq,cx,name,cs,cv,ct);
},__H:function(cA,name){if(cA==="setRuntime"||cA==="resetRuntime"){var cB=this.$$store.runtime[name];
}else if(cA==="setThemed"||cA==="resetThemed"){cB=this.$$store.theme[name];
}else if(cA==="init"){cB=this.$$store.init[name];
}else{cB=this.$$store.user[name];
}return cB;
},__I:function(cC,cD,name,cE,cF){{if(!cD.nullable||cD.check||cD.inheritable){cC.push('var prop=qx.core.Property;');
}if(cE==="set"){cC.push('if(value===undefined)prop.error(this,2,"',name,'","',cE,'",value);');
}};
},__J:function(cG,cH,cI,name){if(cI.transform){cG.push('value=this.',cI.transform,'(value);');
}if(cI.validate){if(typeof cI.validate==="string"){cG.push('this.',cI.validate,'(value);');
}else if(cI.validate instanceof Function){cG.push(cH.classname,'.$$properties.',name);
cG.push('.validate.call(this, value);');
}}},__K:function(cJ,cK,cL,cM){var cN=(cM==="reset"||cM==="resetThemed"||cM==="resetRuntime");

if(cK){cJ.push('if(this.',cL,'===value)return value;');
}else if(cN){cJ.push('if(this.',cL,'===undefined)return;');
}},__L:undefined,__M:function(cO,name,cP,cQ){if(cP==="setRuntime"){cO.push('this.',this.$$store.runtime[name],'=value;');
}else if(cP==="resetRuntime"){cO.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cO.push('delete this.',this.$$store.runtime[name],';');
}else if(cP==="set"){cO.push('this.',this.$$store.user[name],'=value;');
}else if(cP==="reset"){cO.push('if(this.',this.$$store.user[name],'!==undefined)');
cO.push('delete this.',this.$$store.user[name],';');
}else if(cP==="setThemed"){cO.push('this.',this.$$store.theme[name],'=value;');
}else if(cP==="resetThemed"){cO.push('if(this.',this.$$store.theme[name],'!==undefined)');
cO.push('delete this.',this.$$store.theme[name],';');
}else if(cP==="init"&&cQ){cO.push('this.',this.$$store.init[name],'=value;');
}},__N:function(cR,cS,name,cT,cU){if(cS.inheritable){cR.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cR.push('var computed, old;');
}cR.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(cT==="setRuntime"){cR.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cT==="resetRuntime"){cR.push('delete this.',this.$$store.runtime[name],';');
cR.push('if(this.',this.$$store.user[name],'!==undefined)');
cR.push('computed=this.',this.$$store.user[name],';');
cR.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cR.push('computed=this.',this.$$store.theme[name],';');
cR.push('else if(this.',this.$$store.init[name],'!==undefined){');
cR.push('computed=this.',this.$$store.init[name],';');
cR.push('this.',this.$$store.useinit[name],'=true;');
cR.push('}');
}else{cR.push('old=computed=this.',this.$$store.runtime[name],';');
if(cT==="set"){cR.push('this.',this.$$store.user[name],'=value;');
}else if(cT==="reset"){cR.push('delete this.',this.$$store.user[name],';');
}else if(cT==="setThemed"){cR.push('this.',this.$$store.theme[name],'=value;');
}else if(cT==="resetThemed"){cR.push('delete this.',this.$$store.theme[name],';');
}else if(cT==="init"&&cU){cR.push('this.',this.$$store.init[name],'=value;');
}}cR.push('}');
cR.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(cT==="set"){if(!cS.inheritable){cR.push('old=this.',this.$$store.user[name],';');
}cR.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cT==="reset"){if(!cS.inheritable){cR.push('old=this.',this.$$store.user[name],';');
}cR.push('delete this.',this.$$store.user[name],';');
cR.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cR.push('computed=this.',this.$$store.runtime[name],';');
cR.push('if(this.',this.$$store.theme[name],'!==undefined)');
cR.push('computed=this.',this.$$store.theme[name],';');
cR.push('else if(this.',this.$$store.init[name],'!==undefined){');
cR.push('computed=this.',this.$$store.init[name],';');
cR.push('this.',this.$$store.useinit[name],'=true;');
cR.push('}');
}else{if(cT==="setRuntime"){cR.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cS.inheritable){cR.push('computed=this.',this.$$store.user[name],';');
}else{cR.push('old=computed=this.',this.$$store.user[name],';');
}if(cT==="setThemed"){cR.push('this.',this.$$store.theme[name],'=value;');
}else if(cT==="resetThemed"){cR.push('delete this.',this.$$store.theme[name],';');
}else if(cT==="init"&&cU){cR.push('this.',this.$$store.init[name],'=value;');
}}cR.push('}');
if(cS.themeable){cR.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cS.inheritable){cR.push('old=this.',this.$$store.theme[name],';');
}
if(cT==="setRuntime"){cR.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cT==="set"){cR.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cT==="setThemed"){cR.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cT==="resetThemed"){cR.push('delete this.',this.$$store.theme[name],';');
cR.push('if(this.',this.$$store.init[name],'!==undefined){');
cR.push('computed=this.',this.$$store.init[name],';');
cR.push('this.',this.$$store.useinit[name],'=true;');
cR.push('}');
}else if(cT==="init"){if(cU){cR.push('this.',this.$$store.init[name],'=value;');
}cR.push('computed=this.',this.$$store.theme[name],';');
}else if(cT==="refresh"){cR.push('computed=this.',this.$$store.theme[name],';');
}cR.push('}');
}cR.push('else if(this.',this.$$store.useinit[name],'){');

if(!cS.inheritable){cR.push('old=this.',this.$$store.init[name],';');
}
if(cT==="init"){if(cU){cR.push('computed=this.',this.$$store.init[name],'=value;');
}else{cR.push('computed=this.',this.$$store.init[name],';');
}}else if(cT==="set"||cT==="setRuntime"||cT==="setThemed"||cT==="refresh"){cR.push('delete this.',this.$$store.useinit[name],';');

if(cT==="setRuntime"){cR.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cT==="set"){cR.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cT==="setThemed"){cR.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cT==="refresh"){cR.push('computed=this.',this.$$store.init[name],';');
}}cR.push('}');
if(cT==="set"||cT==="setRuntime"||cT==="setThemed"||cT==="init"){cR.push('else{');

if(cT==="setRuntime"){cR.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cT==="set"){cR.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cT==="setThemed"){cR.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cT==="init"){if(cU){cR.push('computed=this.',this.$$store.init[name],'=value;');
}else{cR.push('computed=this.',this.$$store.init[name],';');
}cR.push('this.',this.$$store.useinit[name],'=true;');
}cR.push('}');
}},__O:function(cV,cW,name,cX){cV.push('if(computed===undefined||computed===inherit){');

if(cX==="refresh"){cV.push('computed=value;');
}else{cV.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}cV.push('if((computed===undefined||computed===inherit)&&');
cV.push('this.',this.$$store.init[name],'!==undefined&&');
cV.push('this.',this.$$store.init[name],'!==inherit){');
cV.push('computed=this.',this.$$store.init[name],';');
cV.push('this.',this.$$store.useinit[name],'=true;');
cV.push('}else{');
cV.push('delete this.',this.$$store.useinit[name],';}');
cV.push('}');
cV.push('if(old===computed)return value;');
cV.push('if(computed===inherit){');
cV.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
cV.push('}');
cV.push('else if(computed===undefined)');
cV.push('delete this.',this.$$store.inherit[name],';');
cV.push('else this.',this.$$store.inherit[name],'=computed;');
cV.push('var backup=computed;');
if(cW.init!==undefined&&cX!=="init"){cV.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cV.push('if(old===undefined)old=null;');
}cV.push('if(computed===undefined||computed==inherit)computed=null;');
},__P:function(cY,da,name,db){if(db!=="set"&&db!=="setRuntime"&&db!=="setThemed"){cY.push('if(computed===undefined)computed=null;');
}cY.push('if(old===computed)return value;');
if(da.init!==undefined&&db!=="init"){cY.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cY.push('if(old===undefined)old=null;');
}},__Q:function(dc,dd,name){if(dd.apply){dc.push('this.',dd.apply,'(computed, old, "',name,'");');
}if(dd.event){dc.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dd.event,"')){","reg.fireEvent(this, '",dd.event,"', qx.event.type.Data, [computed, old]",")}");
}},__R:function(de,name){de.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
de.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
de.push('}');
}},defer:function(df){var dh=navigator.userAgent.indexOf(R)!=-1;
var dg=navigator.userAgent.indexOf(y)!=-1;
if(dh||dg){df.__D=df.__E;
}}});
})();
(function(){var k="qx.aspects",j="Array",h=".",g="static",f="[Class ",e="]",d="constructor",c="extend",b="qx.Class";
qx.Bootstrap.define(b,{statics:{define:function(name,m){if(!m){var m={};
}if(m.include&&!(qx.Bootstrap.getClass(m.include)===j)){m.include=[m.include];
}if(m.implement&&!(qx.Bootstrap.getClass(m.implement)===j)){m.implement=[m.implement];
}var n=false;

if(!m.hasOwnProperty(c)&&!m.type){m.type=g;
n=true;
}var o=this.__U(name,m.type,m.extend,m.statics,m.construct,m.destruct,m.include);
if(m.extend){if(m.properties){this.__W(o,m.properties,true);
}if(m.members){this.__Y(o,m.members,true,true,false);
}if(m.events){this.__V(o,m.events,true);
}if(m.include){for(var i=0,l=m.include.length;i<l;i++){this.__bd(o,m.include[i],false);
}}}if(m.environment){for(var p in m.environment){qx.core.Environment.add(p,m.environment[p]);
}}if(m.implement){for(var i=0,l=m.implement.length;i<l;i++){this.__bb(o,m.implement[i]);
}}if(m.defer){m.defer.self=o;
m.defer(o,o.prototype,{add:function(name,q){var r={};
r[name]=q;
qx.Class.__W(o,r,true);
}});
}return o;
},undefine:function(name){delete this.$$registry[name];
var s=name.split(h);
var u=[window];

for(var i=0;i<s.length;i++){u.push(u[i][s[i]]);
}for(var i=u.length-1;i>=1;i--){var t=u[i];
var parent=u[i-1];

if(qx.Bootstrap.isFunction(t)||qx.Bootstrap.objectGetLength(t)===0){delete parent[s[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(v,w){qx.Class.__bd(v,w,false);
},patch:function(x,y){qx.Class.__bd(x,y,true);
},isSubClassOf:function(z,A){if(!z){return false;
}
if(z==A){return true;
}
if(z.prototype instanceof A){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(B){var C=[];

while(B){if(B.$$properties){C.push.apply(C,qx.Bootstrap.getKeys(B.$$properties));
}B=B.superclass;
}return C;
},getByProperty:function(D,name){while(D){if(D.$$properties&&D.$$properties[name]){return D;
}D=D.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(E,F){return E.$$includes&&E.$$includes.indexOf(F)!==-1;
},getByMixin:function(G,H){var I,i,l;

while(G){if(G.$$includes){I=G.$$flatIncludes;

for(i=0,l=I.length;i<l;i++){if(I[i]===H){return G;
}}}G=G.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(J,K){return !!this.getByMixin(J,K);
},hasOwnInterface:function(L,M){return L.$$implements&&L.$$implements.indexOf(M)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(N){var O=[];

while(N){if(N.$$implements){O.push.apply(O,N.$$flatImplements);
}N=N.superclass;
}return O;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(P,Q){var R=P.constructor;

if(this.hasInterface(R,Q)){return true;
}
try{qx.Interface.assertObject(P,Q);
return true;
}catch(S){}
try{qx.Interface.assert(R,Q,false);
return true;
}catch(T){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return f+this.classname+e;
},$$registry:qx.Bootstrap.$$registry,__o:null,__S:null,__p:function(){},__T:function(){},__U:function(name,U,V,W,X,Y,ba){var bd;

if(!V&&qx.core.Environment.get("qx.aspects")==false){bd=W||{};
qx.Bootstrap.setDisplayNames(bd,name);
}else{var bd={};

if(V){if(!X){X=this.__be();
}
if(this.__bg(V,ba)){bd=this.__bh(X,name,U);
}else{bd=X;
}if(U==="singleton"){bd.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(X,name,"constructor");
}if(W){qx.Bootstrap.setDisplayNames(W,name);
var be;

for(var i=0,a=qx.Bootstrap.getKeys(W),l=a.length;i<l;i++){be=a[i];
var bb=W[be];

if(qx.core.Environment.get("qx.aspects")){if(bb instanceof Function){bb=qx.core.Aspect.wrap(name+"."+be,bb,"static");
}bd[be]=bb;
}else{bd[be]=bb;
}}}}var bc=qx.Bootstrap.createNamespace(name,bd);
bd.name=bd.classname=name;
bd.basename=bc;
bd.$$type="Class";

if(U){bd.$$classtype=U;
}if(!bd.hasOwnProperty("toString")){bd.toString=this.genericToString;
}
if(V){qx.Bootstrap.extendClass(bd,X,V,name,bc);
if(Y){if(qx.core.Environment.get("qx.aspects")){Y=qx.core.Aspect.wrap(name,Y,"destructor");
}bd.$$destructor=Y;
qx.Bootstrap.setDisplayName(Y,name,"destruct");
}}this.$$registry[name]=bd;
return bd;
},__V:function(bf,bg,bh){var bi,bi;

if(bf.$$events){for(var bi in bg){bf.$$events[bi]=bg[bi];
}}else{bf.$$events=bg;
}},__W:function(bj,bk,bl){var bm;

if(bl===undefined){bl=false;
}var bn=bj.prototype;

for(var name in bk){bm=bk[name];
bm.name=name;
if(!bm.refine){if(bj.$$properties===undefined){bj.$$properties={};
}bj.$$properties[name]=bm;
}if(bm.init!==undefined){bj.prototype["$$init_"+name]=bm.init;
}if(bm.event!==undefined){var event={};
event[bm.event]="qx.event.type.Data";
this.__V(bj,event,bl);
}if(bm.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bn.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bj);
}}
if(!bm.refine){qx.core.Property.attachMethods(bj,name,bm);
}}},__X:null,__Y:function(bo,bp,bq,br,bs){var bt=bo.prototype;
var bv,bu;
qx.Bootstrap.setDisplayNames(bp,bo.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bp),l=a.length;i<l;i++){bv=a[i];
bu=bp[bv];
if(br!==false&&bu instanceof Function&&bu.$$type==null){if(bs==true){bu=this.__ba(bu,bt[bv]);
}else{if(bt[bv]){bu.base=bt[bv];
}bu.self=bo;
}
if(qx.core.Environment.get("qx.aspects")){bu=qx.core.Aspect.wrap(bo.classname+"."+bv,bu,"member");
}}bt[bv]=bu;
}},__ba:function(bw,bx){if(bx){return function(){var bz=bw.base;
bw.base=bx;
var by=bw.apply(this,arguments);
bw.base=bz;
return by;
};
}else{return bw;
}},__bb:function(bA,bB){var bC=qx.Interface.flatten([bB]);

if(bA.$$implements){bA.$$implements.push(bB);
bA.$$flatImplements.push.apply(bA.$$flatImplements,bC);
}else{bA.$$implements=[bB];
bA.$$flatImplements=bC;
}},__bc:function(bD){var name=bD.classname;
var bE=this.__bh(bD,name,bD.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bD),l=a.length;i<l;i++){bF=a[i];
bE[bF]=bD[bF];
}bE.prototype=bD.prototype;
var bH=bD.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bH),l=a.length;i<l;i++){bF=a[i];
var bI=bH[bF];
if(bI&&bI.self==bD){bI.self=bE;
}}for(var bF in this.$$registry){var bG=this.$$registry[bF];

if(!bG){continue;
}
if(bG.base==bD){bG.base=bE;
}
if(bG.superclass==bD){bG.superclass=bE;
}
if(bG.$$original){if(bG.$$original.base==bD){bG.$$original.base=bE;
}
if(bG.$$original.superclass==bD){bG.$$original.superclass=bE;
}}}qx.Bootstrap.createNamespace(name,bE);
this.$$registry[name]=bE;
return bE;
},__bd:function(bJ,bK,bL){if(this.hasMixin(bJ,bK)){return;
}var bO=bJ.$$original;

if(bK.$$constructor&&!bO){bJ=this.__bc(bJ);
}var bN=qx.Mixin.flatten([bK]);
var bM;

for(var i=0,l=bN.length;i<l;i++){bM=bN[i];
if(bM.$$events){this.__V(bJ,bM.$$events,bL);
}if(bM.$$properties){this.__W(bJ,bM.$$properties,bL);
}if(bM.$$members){this.__Y(bJ,bM.$$members,bL,bL,bL);
}}if(bJ.$$includes){bJ.$$includes.push(bK);
bJ.$$flatIncludes.push.apply(bJ.$$flatIncludes,bN);
}else{bJ.$$includes=[bK];
bJ.$$flatIncludes=bN;
}},__be:function(){function bP(){bP.base.apply(this,arguments);
}return bP;
},__bf:function(){return function(){};
},__bg:function(bQ,bR){if(bQ&&bQ.$$includes){var bS=bQ.$$flatIncludes;

for(var i=0,l=bS.length;i<l;i++){if(bS[i].$$constructor){return true;
}}}if(bR){var bT=qx.Mixin.flatten(bR);

for(var i=0,l=bT.length;i<l;i++){if(bT[i].$$constructor){return true;
}}}return false;
},__bh:function(bU,name,bV){var bX=function(){var cb=bX;
var ca=cb.$$original.apply(this,arguments);
if(cb.$$includes){var bY=cb.$$flatIncludes;

for(var i=0,l=bY.length;i<l;i++){if(bY[i].$$constructor){bY[i].$$constructor.apply(this,arguments);
}}}return ca;
};

if(qx.core.Environment.get(k)){var bW=qx.core.Aspect.wrap(name,bX,d);
bX.$$original=bU;
bX.constructor=bW;
bX=bW;
}bX.$$original=bU;
bU.wrapper=bX;
return bX;
}},defer:function(){if(qx.core.Environment.get(k)){for(var cc in qx.Bootstrap.$$registry){var cd=qx.Bootstrap.$$registry[cc];

for(var ce in cd){if(cd[ce] instanceof Function){cd[ce]=qx.core.Aspect.wrap(cc+h+ce,cd[ce],g);
}}}}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__bi:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__bj:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bk:function(){var L=qx.lang.Generics.__bi;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__bj(N,O);
}}}}},defer:function(Q){Q.__bk();
}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="qx.debug.databinding",F="set",E="deepBinding",D="item",C="reset",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",w="qx.data.SingleValueBinding",u="Binding property ",v="Binding from '",s="PositiveNumber",t="PositiveInteger",q="Binding does not exist!",r=").",n="Date",p=" not possible: No event available. ";
qx.Class.define(w,{statics:{__bl:{},bind:function(G,H,I,J,K){var V=this.__bn(G,H,I,J,K);
var Q=H.split(d);
var M=this.__bt(Q);
var U=[];
var R=[];
var S=[];
var O=[];
var P=G;
try{for(var i=0;i<Q.length;i++){if(M[i]!==l){O.push(g);
}else{O.push(this.__bo(P,Q[i]));
}U[i]=P;
if(i==Q.length-1){if(M[i]!==l){var ba=M[i]===h?P.length-1:M[i];
var L=P.getItem(ba);
this.__bs(L,I,J,K,G);
S[i]=this.__bu(P,O[i],I,J,K,M[i]);
}else{if(Q[i]!=null&&P[m+qx.lang.String.firstUp(Q[i])]!=null){var L=P[m+qx.lang.String.firstUp(Q[i])]();
this.__bs(L,I,J,K,G);
}S[i]=this.__bu(P,O[i],I,J,K);
}}else{var W={index:i,propertyNames:Q,sources:U,listenerIds:S,arrayIndexValues:M,targetObject:I,targetPropertyChain:J,options:K,listeners:R};
var T=qx.lang.Function.bind(this.__bm,this,W);
R.push(T);
S[i]=P.addListener(O[i],T);
}if(P[m+qx.lang.String.firstUp(Q[i])]==null){P=null;
}else if(M[i]!==l){P=P[m+qx.lang.String.firstUp(Q[i])](M[i]);
}else{P=P[m+qx.lang.String.firstUp(Q[i])]();
}
if(!P){break;
}}}catch(bb){for(var i=0;i<U.length;i++){if(U[i]&&S[i]){U[i].removeListenerById(S[i]);
}}var Y=V.targets;
var N=V.listenerIds[i];
for(var i=0;i<Y.length;i++){if(Y[i]&&N[i]){Y[i].removeListenerById(N[i]);
}}throw bb;
}var X={type:E,listenerIds:S,sources:U,targetListenerIds:V.listenerIds,targets:V.targets};
this.__bv(X,G,H,I,J);
return X;
},__bm:function(bc){if(bc.options&&bc.options.onUpdate){bc.options.onUpdate(bc.sources[bc.index],bc.targetObject);
}for(var j=bc.index+1;j<bc.propertyNames.length;j++){var bg=bc.sources[j];
bc.sources[j]=null;

if(!bg){continue;
}bg.removeListenerById(bc.listenerIds[j]);
}var bg=bc.sources[bc.index];
for(var j=bc.index+1;j<bc.propertyNames.length;j++){if(bc.arrayIndexValues[j-1]!==l){bg=bg[m+qx.lang.String.firstUp(bc.propertyNames[j-1])](bc.arrayIndexValues[j-1]);
}else{bg=bg[m+qx.lang.String.firstUp(bc.propertyNames[j-1])]();
}bc.sources[j]=bg;
if(!bg){this.__bp(bc.targetObject,bc.targetPropertyChain);
break;
}if(j==bc.propertyNames.length-1){if(qx.Class.implementsInterface(bg,qx.data.IListData)){var bh=bc.arrayIndexValues[j]===h?bg.length-1:bc.arrayIndexValues[j];
var be=bg.getItem(bh);
this.__bs(be,bc.targetObject,bc.targetPropertyChain,bc.options,bc.sources[bc.index]);
bc.listenerIds[j]=this.__bu(bg,g,bc.targetObject,bc.targetPropertyChain,bc.options,bc.arrayIndexValues[j]);
}else{if(bc.propertyNames[j]!=null&&bg[m+qx.lang.String.firstUp(bc.propertyNames[j])]!=null){var be=bg[m+qx.lang.String.firstUp(bc.propertyNames[j])]();
this.__bs(be,bc.targetObject,bc.targetPropertyChain,bc.options,bc.sources[bc.index]);
}var bf=this.__bo(bg,bc.propertyNames[j]);
bc.listenerIds[j]=this.__bu(bg,bf,bc.targetObject,bc.targetPropertyChain,bc.options);
}}else{if(bc.listeners[j]==null){var bd=qx.lang.Function.bind(this.__bm,this,bc);
bc.listeners.push(bd);
}if(qx.Class.implementsInterface(bg,qx.data.IListData)){var bf=g;
}else{var bf=this.__bo(bg,bc.propertyNames[j]);
}bc.listenerIds[j]=bg.addListener(bf,bc.listeners[j]);
}}},__bn:function(bi,bj,bk,bl,bm){var bq=bl.split(d);
var bo=this.__bt(bq);
var bv=[];
var bu=[];
var bs=[];
var br=[];
var bp=bk;
for(var i=0;i<bq.length-1;i++){if(bo[i]!==l){br.push(g);
}else{try{br.push(this.__bo(bp,bq[i]));
}catch(e){break;
}}bv[i]=bp;
var bt=function(){for(var j=i+1;j<bq.length-1;j++){var by=bv[j];
bv[j]=null;

if(!by){continue;
}by.removeListenerById(bs[j]);
}var by=bv[i];
for(var j=i+1;j<bq.length-1;j++){var bw=qx.lang.String.firstUp(bq[j-1]);
if(bo[j-1]!==l){var bz=bo[j-1]===h?by.getLength()-1:bo[j-1];
by=by[m+bw](bz);
}else{by=by[m+bw]();
}bv[j]=by;
if(bu[j]==null){bu.push(bt);
}if(qx.Class.implementsInterface(by,qx.data.IListData)){var bx=g;
}else{try{var bx=qx.data.SingleValueBinding.__bo(by,bq[j]);
}catch(e){break;
}}bs[j]=by.addListener(bx,bu[j]);
}qx.data.SingleValueBinding.updateTarget(bi,bj,bk,bl,bm);
};
bu.push(bt);
bs[i]=bp.addListener(br[i],bt);
var bn=qx.lang.String.firstUp(bq[i]);
if(bp[m+bn]==null){bp=null;
}else if(bo[i]!==l){bp=bp[m+bn](bo[i]);
}else{bp=bp[m+bn]();
}
if(!bp){break;
}}return {listenerIds:bs,targets:bv};
},updateTarget:function(bA,bB,bC,bD,bE){var bF=this.getValueFromObject(bA,bB);
bF=qx.data.SingleValueBinding.__bw(bF,bC,bD,bE,bA);
this.__bq(bC,bD,bF);
},getValueFromObject:function(o,bG){var bK=this.__br(o,bG);
var bI;

if(bK!=null){var bM=bG.substring(bG.lastIndexOf(d)+1,bG.length);
if(bM.charAt(bM.length-1)==f){var bH=bM.substring(bM.lastIndexOf(k)+1,bM.length-1);
var bJ=bM.substring(0,bM.lastIndexOf(k));
var bL=bK[m+qx.lang.String.firstUp(bJ)]();

if(bH==h){bH=bL.length-1;
}
if(bL!=null){bI=bL.getItem(bH);
}}else{bI=bK[m+qx.lang.String.firstUp(bM)]();
}}return bI;
},__bo:function(bN,bO){var bP=this.__bx(bN,bO);
if(bP==null){if(qx.Class.supportsEvent(bN.constructor,bO)){bP=bO;
}else if(qx.Class.supportsEvent(bN.constructor,g+qx.lang.String.firstUp(bO))){bP=g+qx.lang.String.firstUp(bO);
}else{throw new qx.core.AssertionError(u+bO+x+bN+p);
}}return bP;
},__bp:function(bQ,bR){var bS=this.__br(bQ,bR);

if(bS!=null){var bT=bR.substring(bR.lastIndexOf(d)+1,bR.length);
if(bT.charAt(bT.length-1)==f){this.__bq(bQ,bR,null);
return;
}if(bS[C+qx.lang.String.firstUp(bT)]!=undefined){bS[C+qx.lang.String.firstUp(bT)]();
}else{bS[F+qx.lang.String.firstUp(bT)](null);
}}},__bq:function(bU,bV,bW){var cb=this.__br(bU,bV);

if(cb!=null){var cc=bV.substring(bV.lastIndexOf(d)+1,bV.length);
if(cc.charAt(cc.length-1)==f){var bX=cc.substring(cc.lastIndexOf(k)+1,cc.length-1);
var ca=cc.substring(0,cc.lastIndexOf(k));
var bY=bU;

if(!qx.Class.implementsInterface(bY,qx.data.IListData)){bY=cb[m+qx.lang.String.firstUp(ca)]();
}
if(bX==h){bX=bY.length-1;
}
if(bY!=null){bY.setItem(bX,bW);
}}else{cb[F+qx.lang.String.firstUp(cc)](bW);
}}},__br:function(cd,ce){var ch=ce.split(d);
var ci=cd;
for(var i=0;i<ch.length-1;i++){try{var cg=ch[i];
if(cg.indexOf(f)==cg.length-1){var cf=cg.substring(cg.indexOf(k)+1,cg.length-1);
cg=cg.substring(0,cg.indexOf(k));
}if(cg!=l){ci=ci[m+qx.lang.String.firstUp(cg)]();
}if(cf!=null){if(cf==h){cf=ci.length-1;
}ci=ci.getItem(cf);
cf=null;
}}catch(cj){return null;
}}return ci;
},__bs:function(ck,cl,cm,cn,co){ck=this.__bw(ck,cl,cm,cn,co);
if(ck===undefined){this.__bp(cl,cm);
}if(ck!==undefined){try{this.__bq(cl,cm,ck);
if(cn&&cn.onUpdate){cn.onUpdate(co,cl,ck);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cn&&cn.onSetFail){cn.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+ck+" on "+cl+". Error message: "+e);
}}}},__bt:function(cp){var cq=[];
for(var i=0;i<cp.length;i++){var name=cp[i];
if(qx.lang.String.endsWith(name,f)){var cr=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cr!==h){if(cr==l||isNaN(parseInt(cr,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cp[i]=name.substring(0,name.indexOf(k));
cq[i]=l;
cq[i+1]=cr;
cp.splice(i+1,0,D);
i++;
}else{cq[i]=cr;
cp.splice(i,1,D);
}}else{cq[i]=l;
}}return cq;
},__bu:function(cs,ct,cu,cv,cw,cx){var cy;
var cA=function(cB,e){if(cB!==l){if(cB===h){cB=cs.length-1;
}var cE=cs.getItem(cB);
if(cE===undefined){qx.data.SingleValueBinding.__bp(cu,cv);
}var cC=e.getData().start;
var cD=e.getData().end;

if(cB<cC||cB>cD){return;
}}else{var cE=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+cs+" by "+ct+" to "+cu+" ("+cv+")");
qx.log.Logger.debug("Data before conversion: "+cE);
}cE=qx.data.SingleValueBinding.__bw(cE,cu,cv,cw,cs);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cE);
}try{if(cE!==undefined){qx.data.SingleValueBinding.__bq(cu,cv,cE);
}else{qx.data.SingleValueBinding.__bp(cu,cv);
}if(cw&&cw.onUpdate){cw.onUpdate(cs,cu,cE);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cw&&cw.onSetFail){cw.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cE+" on "+cu+". Error message: "+e);
}}};
if(!cx){cx=l;
}cA=qx.lang.Function.bind(cA,cs,cx);
var cz=cs.addListener(ct,cA);
return cz;
},__bv:function(cF,cG,cH,cI,cJ){if(this.__bl[cG.toHashCode()]===undefined){this.__bl[cG.toHashCode()]=[];
}this.__bl[cG.toHashCode()].push([cF,cG,cH,cI,cJ]);
},__bw:function(cK,cL,cM,cN,cO){if(cN&&cN.converter){var cQ;

if(cL.getModel){cQ=cL.getModel();
}return cN.converter(cK,cQ,cO,cL);
}else{var cS=this.__br(cL,cM);
var cT=cM.substring(cM.lastIndexOf(d)+1,cM.length);
if(cS==null){return cK;
}var cR=qx.Class.getPropertyDefinition(cS.constructor,cT);
var cP=cR==null?l:cR.check;
return this.__by(cK,cP);
}},__bx:function(cU,cV){var cW=qx.Class.getPropertyDefinition(cU.constructor,cV);

if(cW==null){return null;
}return cW.event;
},__by:function(cX,cY){var da=qx.lang.Type.getClass(cX);
if((da==c||da==b)&&(cY==y||cY==t)){cX=parseInt(cX,10);
}if((da==A||da==c||da==n)&&cY==b){cX=cX+l;
}if((da==c||da==b)&&(cY==c||cY==s)){cX=parseFloat(cX);
}return cX;
},removeBindingFromObject:function(db,dc){if(dc.type==E){for(var i=0;i<dc.sources.length;i++){if(dc.sources[i]){dc.sources[i].removeListenerById(dc.listenerIds[i]);
}}for(var i=0;i<dc.targets.length;i++){if(dc.targets[i]){dc.targets[i].removeListenerById(dc.targetListenerIds[i]);
}}}else{db.removeListenerById(dc);
}var dd=this.__bl[db.toHashCode()];
if(dd!=undefined){for(var i=0;i<dd.length;i++){if(dd[i][0]==dc){qx.lang.Array.remove(dd,dd[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(de){var df=this.__bl[de.toHashCode()];

if(df!=undefined){for(var i=df.length-1;i>=0;i--){this.removeBindingFromObject(de,df[i][0]);
}}},getAllBindingsForObject:function(dg){if(this.__bl[dg.toHashCode()]===undefined){this.__bl[dg.toHashCode()]=[];
}return this.__bl[dg.toHashCode()];
},removeAllBindings:function(){for(var di in this.__bl){var dh=qx.core.ObjectRegistry.fromHashCode(di);
if(dh==null){delete this.__bl[di];
continue;
}this.removeAllBindingsForObject(dh);
}this.__bl={};
},getAllBindings:function(){return this.__bl;
},showBindingInLog:function(dj,dk){var dm;
for(var i=0;i<this.__bl[dj.toHashCode()].length;i++){if(this.__bl[dj.toHashCode()][i][0]==dk){dm=this.__bl[dj.toHashCode()][i];
break;
}}
if(dm===undefined){var dl=q;
}else{var dl=v+dm[1]+B+dm[2]+z+dm[3]+B+dm[4]+r;
}qx.log.Logger.debug(dl);
},showAllBindingsInLog:function(){for(var dp in this.__bl){var dn=qx.core.ObjectRegistry.fromHashCode(dp);

for(var i=0;i<this.__bl[dp].length;i++){this.showBindingInLog(dn,this.__bl[dp][i][0]);
}}}}});
})();
(function(){var p="",o="g",n="]",m='\\u',l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Class.define(g,{statics:{__bz:j,__bA:null,__bB:{},camelCase:function(q){var r=this.__bB[q];

if(!r){r=q.replace(/\-([a-z])/g,function(s,t){return t.toUpperCase();
});
}return r;
},hyphenate:function(u){var v=this.__bB[u];

if(!v){v=u.replace(/[A-Z]/g,function(w){return (h+w.charAt(0).toLowerCase());
});
}return v;
},capitalize:function(x){if(this.__bA===null){var y=m;
this.__bA=new RegExp(f+this.__bz.replace(/[0-9A-F]{4}/g,function(z){return y+z;
})+a+this.__bz.replace(/[0-9A-F]{4}/g,function(A){return y+A;
})+n,o);
}return x.replace(this.__bA,function(B){return B.toUpperCase();
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
}}else{var bg=bi[bn];

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
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
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
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__bM:true,__bN:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__bO(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__bM){qx.Bootstrap.error(bD+"\n Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{if(this.__bM){qx.Bootstrap.error(bD);
}throw new Error(bD);
}},__bO:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__bN(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__bN(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__bN(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__bN(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__bN(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__bN(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__bN(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__bN(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__bN(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__bN(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__bN(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__bN(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__bN(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__bN(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__bN(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__bN(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__bM=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__bM=true;
}
if(cQ==null){this.__bN(cP||p,s);
}cQ instanceof cN||this.__bN(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__bN(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__bN(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__bN(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__bN(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__bN(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__bN(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__bN(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__bN(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__bN(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__bN(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__bN(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__bN(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__bN(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__bN(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__bN(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__bN(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__bN(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__bN(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__bN(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__bN(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__bP(ea,bu)||this.__bN(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__bP(ec,z)||this.__bN(ed||p,b,ec,o);
},__bP:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
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
var Q=this.__bS(P);
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
if(W){var Y=this.__bS(W[1]);
V.push(Y+W[2]);
}else{V.push(U[1]);
}}return V;
}else if(T.sourceURL&&T.line){return [this.__bS(T.sourceURL)+m+T.line];
}else{return [];
}},"opera":function(bc){if(bc.stacktrace){var be=bc.stacktrace;

if(be.indexOf(k)>=0){be=be.split(k)[0];
}if(be.indexOf(a)>=0){var bo=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bi=bf[2];
var bm=this.__bS(bi);
bg.push(bm+m+bn);
}}else{var bo=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bh=bf[2];
var bi=bf[3];
var bm=this.__bS(bi);
bg.push(bm+m+bn+m+bh);
}}return bg;
}else if(bc.message&&bc.message.indexOf("Backtrace:")>=0){var bg=[];
var bj=qx.lang.String.trim(bc.message.split("Backtrace:")[1]);
var bk=bj.split(f);

for(var i=0;i<bk.length;i++){var bd=bk[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(bd&&bd.length>=2){var bn=bd[1];
var bl=this.__bS(bd[2]);
bg.push(bl+m+bn);
}}return bg;
}else{return [];
}},"default":function(){return [];
}}),__bS:function(bp){var bt=d;
var bq=bp.indexOf(bt);
var bs=bp.indexOf(e);

if(bs>=0){bp=bp.substring(0,bs);
}var br=(bq==-1)?bp:bp.substring(bq+bt.length).replace(/\//g,b).replace(/\.js$/,g);
return br;
}}});
})();
(function(){var h="qx.debug.dispose",g="$$hash",f="-",e="",d="qx.core.ObjectRegistry",c="-0";
qx.Class.define(d,{statics:{inShutDown:false,__v:{},__bT:0,__bU:[],__bV:e,__bW:{},register:function(j){var n=this.__v;

if(!n){return;
}var m=j.$$hash;

if(m==null){var k=this.__bU;

if(k.length>0&&!qx.core.Environment.get(h)){m=k.pop();
}else{m=(this.__bT++)+this.__bV;
}j.$$hash=m;

if(qx.core.Environment.get(h)&&qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__bW[m]=qx.dev.StackTrace.getStackTrace();
}}n[m]=j;
},unregister:function(o){var p=o.$$hash;

if(p==null){return;
}var q=this.__v;

if(q&&q[p]){delete q[p];
this.__bU.push(p);
}try{delete o.$$hash;
}catch(r){if(o.removeAttribute){o.removeAttribute(g);
}}},toHashCode:function(s){var u=s.$$hash;

if(u!=null){return u;
}var t=this.__bU;

if(t.length>0){u=t.pop();
}else{u=(this.__bT++)+this.__bV;
}return s.$$hash=u;
},clearHashCode:function(v){var w=v.$$hash;

if(w!=null){this.__bU.push(w);
try{delete v.$$hash;
}catch(x){if(v.removeAttribute){v.removeAttribute(g);
}}}},fromHashCode:function(y){return this.__v[y]||null;
},shutdown:function(){this.inShutDown=true;
var A=this.__v;
var C=[];

for(var B in A){C.push(B);
}C.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var z,i=0,l=C.length;

while(true){try{for(;i<l;i++){B=C[i];
z=A[B];

if(z&&z.dispose){z.dispose();
}}}catch(D){qx.Bootstrap.error(this,"Could not dispose object "+z.toString()+": "+D);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__v;
},getRegistry:function(){return this.__v;
},getNextHash:function(){return this.__bT;
},getPostId:function(){return this.__bV;
},getStackTraces:function(){return this.__bW;
}},defer:function(E){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){E.__bV=f+(i+1);
return;
}}}E.__bV=c;
}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__bX:null,__bY:null,__ca:null,__cb:null,stringify:function(bb,bc,bd){this.__bX=p;
this.__bY=p;
this.__cb=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__bY+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__bY=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__ca=bc;
}else{this.__ca=null;
}return this.__cc(p,{'':bb});
},__cc:function(be,bf){var bi=this.__bX,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__ca===e){bj=this.__ca.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__cd(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__bX+=this.__bY;
bg=[];

if(this.__cb.indexOf(bj)!==-1){throw new TypeError(V);
}this.__cb.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__cc(i,bj)||h;
}this.__cb.pop();
if(bg.length===0){var bh=s;
}else if(this.__bX){bh=E+this.__bX+bg.join(Y+this.__bX)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__bX=bi;
return bh;
case z:this.__bX+=this.__bY;
bg=[];

if(this.__cb.indexOf(bj)!==-1){throw new TypeError(V);
}this.__cb.push(bj);
if(this.__ca&&typeof this.__ca===f){var length=this.__ca.length;

for(var i=0;i<length;i+=1){var k=this.__ca[i];

if(typeof k===W){var v=this.__cc(k,bj);

if(v){bg.push(this.__cd(k)+(this.__bX?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__cc(k,bj);

if(v){bg.push(this.__cd(k)+(this.__bX?g:m)+v);
}}}}this.__cb.pop();
if(bg.length===0){var bh=A;
}else if(this.__bX){bh=w+this.__bX+bg.join(Y+this.__bX)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__bX=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__cd:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
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
return typeof bs===e?this.__ce({'':j},p,bs):j;
}throw new SyntaxError(P);
},__ce:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__ce(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1&&JSON.stringify({"prop":"val"},function(k,v){return k==="prop"?"repl":v;
}).indexOf("repl")>0)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__cf:0,__cg:0,__ch:false,__ci:0,__cj:null,__ck:null,setMaxEntries:function(c){this.__ck=c;
this.clear();
},getMaxEntries:function(){return this.__ck;
},addEntry:function(d){this.__cj[this.__cf]=d;
this.__cf=this.__cl(this.__cf,1);
var e=this.getMaxEntries();

if(this.__cg<e){this.__cg++;
}if(this.__ch&&(this.__ci<e)){this.__ci++;
}},mark:function(){this.__ch=true;
this.__ci=0;
},clearMark:function(){this.__ch=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__cg){f=this.__cg;
}if(g&&this.__ch&&(f>this.__ci)){f=this.__ci;
}
if(f>0){var i=this.__cl(this.__cf,-1);
var h=this.__cl(i,-f+1);
var j;

if(h<=i){j=this.__cj.slice(h,i+1);
}else{j=this.__cj.slice(h,this.__cg).concat(this.__cj.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__cj=new Array(this.getMaxEntries());
this.__cg=0;
this.__ci=0;
this.__cf=0;
},__cl:function(k,l){var m=this.getMaxEntries();
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
qx.Class.define(s,{statics:{__cm:A,setLevel:function(I){this.__cm=I;
},getLevel:function(){return this.__cm;
},setTreshold:function(J){this.__cp.setMaxMessages(J);
},getTreshold:function(){return this.__cp.getMaxMessages();
},__cn:{},__co:0,register:function(K){if(K.$$id){return;
}var M=this.__co++;
this.__cn[M]=K;
K.$$id=M;
var L=this.__cq;
var N=this.__cp.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__cm]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__cn[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__cr(A,arguments);
},info:function(S,T){qx.log.Logger.__cr(e,arguments);
},warn:function(U,V){qx.log.Logger.__cr(r,arguments);
},error:function(W,X){qx.log.Logger.__cr(j,arguments);
},trace:function(Y){qx.log.Logger.__cr(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__cp.clearHistory();
},__cp:new qx.log.appender.RingBuffer(50),__cq:{debug:0,info:1,warn:2,error:3},__cr:function(bv,bw){var bB=this.__cq;

if(bB[bv]<bB[this.__cm]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__ct(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__cp.process(bD);
var bE=this.__cn;

for(var bz in bE){bE[bz].process(bD);
}},__cs:function(bF){if(bF===undefined){return y;
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
},__ct:function(bH,bI){var bP=this.__cs(bH);
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
}bL.push(this.__ct(bH[i],false));
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
bJ=this.__ct(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__cr(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var d="qx.dom.Node",c="engine.name",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===this.DOCUMENT?e:e.ownerDocument||e.document;
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
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="UNKNOWN_",j="__cy",h="c",g="__cz",c="DOM_",f="WIN_",e="QX_",b="qx.event.Manager",a="capture",d="DOCUMENT_";
qx.Class.define(b,{extend:Object,construct:function(s,t){this.__cu=s;
this.__cv=qx.core.ObjectRegistry.toHashCode(s);
this.__cw=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__cx={};
this.__cy={};
this.__cz={};
this.__cA={};
},statics:{__cB:0,getNextUniqueId:function(){return (this.__cB++)+o;
}},members:{__cw:null,__cx:null,__cz:null,__cC:null,__cy:null,__cA:null,__cu:null,__cv:null,getWindow:function(){return this.__cu;
},getWindowId:function(){return this.__cv;
},getHandler:function(u){var v=this.__cy[u.classname];

if(v){return v;
}return this.__cy[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__cz[w.classname];

if(x){return x;
}return this.__cz[w.classname]=new w(this,this.__cw);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__cx[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},getAllListeners:function(){return this.__cx;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__cx[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==h;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__cx[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__cD(P,W,R);
}else{this.__cE(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__cx[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__cx[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__cD(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__cB++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__cx[bx];

if(!bz){bz=this.__cx[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__cD(bp,bq,bs);
}var by=(qx.event.Manager.__cB++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=c+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__cu){bF=true;
bL=f+bB;
}else if(bA.classname){bO=true;
bL=e+bA.classname+n+bB;
}else{bL=k+bA+n+bB;
}var bH=this.__cA;

if(bH[bL]){return bH[bL];
}var bK=this.__cw.getHandlers();
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
},__cD:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__cx[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__cE(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__cx[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__cE(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__cx[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===a;
this.__cE(cq,cv,cr);
}}delete this.__cx[cu];
return true;
},deleteAllListeners:function(cx){delete this.__cx[cx];
},__cE:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__cw.getDispatchers();
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
},dispose:function(){this.__cw.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,j);
qx.util.DisposeUtil.disposeMap(this,g);
this.__cx=this.__cu=this.__cC=null;
this.__cw=this.__cA=null;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__cF:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__cF[f];

if(!e){e=new qx.event.Manager(d,this);
this.__cF[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__cF[h];
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
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cy:[],addHandler:function(Q){this.__cy.push(Q);
this.__cy.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__cy;
},__cz:[],addDispatcher:function(R,S){this.__cz.push(R);
this.__cz.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__cz;
}}});
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
},__cG:qx.event.Registration,addListener:function(H,I,self,J){if(!this.$$disposed){return this.__cG.addListener(this,H,I,self,J);
}return null;
},addListenerOnce:function(K,L,self,M){var N=function(e){this.removeListener(K,N,this,M);
L.call(self||this,e);
};
return this.addListener(K,N,this,M);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__cG.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(R){if(!this.$$disposed){return this.__cG.removeListenerById(this,R);
}return false;
},hasListener:function(S,T){return this.__cG.hasListener(this,S,T);
},dispatchEvent:function(U){if(!this.$$disposed){return this.__cG.dispatchEvent(this,U);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__cG.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__cG.fireNonBubblingEvent(this,Y,ba,bb);
}return true;
},fireDataEvent:function(bc,bd,be,bf){if(!this.$$disposed){if(be===undefined){be=null;
}return this.__cG.fireNonBubblingEvent(this,bc,qx.event.type.Data,[bd,be,!!bf]);
}return true;
},__cH:null,setUserData:function(bg,bh){if(!this.__cH){this.__cH={};
}this.__cH[bg]=bh;
},getUserData:function(bi){if(!this.__cH){return null;
}var bj=this.__cH[bi];
return bj===undefined?null:bj;
},__cI:qx.log.Logger,debug:function(bk){this.__cJ(f,arguments);
},info:function(bl){this.__cJ(m,arguments);
},warn:function(bm){this.__cJ(h,arguments);
},error:function(bn){this.__cJ(j,arguments);
},trace:function(){this.__cI.trace(this);
},__cJ:function(bo,bp){var bq=qx.lang.Array.fromArguments(bp);
bq.unshift(this);
this.__cI[bo].apply(this.__cI,bq);
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
}if(this.__cK){this.__cK();
}},__cK:null,__cL:function(){var bx=qx.Class.getProperties(this.constructor);

for(var i=0,l=bx.length;i<l;i++){delete this[d+bx[i]];
}},_disposeObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(bB){qx.util.DisposeUtil.disposeMap(this,bB);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bC,bD){var bF=navigator.userAgent.indexOf(n)!=-1;
var bE=navigator.userAgent.indexOf(c)!=-1;
if(bF||bE){bD.__cK=bD.__cL;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__cH=null;
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
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
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
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__cM={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__cM:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__cM[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__cM){return;
}var h=g.classname;
var j=this.__cM[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__cM[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__cM;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cM;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
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
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cN:null,__cO:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__cN=b;
this.__cO=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__cN=this.__cN;
f.__cO=this.__cO;
return f;
},getData:function(){return this.__cN;
},getOldData:function(){return this.__cO;
}},destruct:function(){this.__cN=this.__cO=null;
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
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__cP=false;
this.__cQ=false;
this.__cR=false;
this.__cS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__cT();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__cR:null,__cP:null,__cQ:null,__cS:null,__cT:function(){if(!this.__cR&&this.__cP&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__cR=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__cR=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__cR;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__cP=true;
this.__cT();
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
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cP=true;
this.__cT();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cS){this.__cS=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="portal.Application",b="engine.version",a="os.name";
qx.Class.define(f,{statics:{getApplication:function(){return this.__cU||null;
},ready:function(){if(this.__cU){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(a)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=c;
var j=qx.Class.getByName(i);

if(j){this.__cU=new j;
var h=new Date;
this.__cU.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__cU.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__cV:function(e){var k=this.__cU;

if(k){k.close();
}},__cW:function(){var l=this.__cU;

if(l){l.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
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
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";
qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__cV:function(e){var f=this.getApplication();

if(f){e.setReturnValue(f.close());
}},__cW:function(){var g=this.getApplication();

if(g){g.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);
qx.event.Registration.addListener(window,c,h.__cW,h);
qx.event.Registration.addListener(window,b,h.__cV,h);
}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="portal.Application";
qx.Class.define(a,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);
portal.box.Manager.getInstance().load();
portal.dragdrop.Manager.getInstance();
}}});
})();
(function(){var m="groupBoxes",h="boxData",g="portal.box.Box",f="portal.box.Manager",e="qx.event.type.Event",d="boxes",c="_applyActiveBox",b="loaded",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__Dt=[];
this.__Du=[];
this.__Dv={};
},statics:{dataKeyRoot:h,dataKeyGroupBoxes:m,dataKeyBoxes:d},events:{"loaded":e},properties:{activeBox:{init:null,check:g,apply:c}},members:{__Dt:null,__Du:null,__Dv:null,_applyActiveBox:function(n,o){if(o!=null){o.setActive(false);
}n.setActive(true);
},load:function(){this.__bk(window[portal.box.Manager.dataKeyRoot]);
qx.event.Registration.fireEvent(this,b);
},__bk:function(p){var t,w,u,v,x,p;
var q=p[portal.box.Manager.dataKeyGroupBoxes];
var s=p[portal.box.Manager.dataKeyBoxes];
for(var w in q){t=q[w];
u=t.boxes;
w=t.id;
v={id:w,element:document.getElementById(w)};
this.__Du.push(v);
this.__Dv[w]=[];
for(var k=0,l=u.length;k<l;k++){p=s[u[k]];
var r=document.getElementById(p.id);
var x=new portal.box.Box(p,r,null,w);
this.__Dt.push(x);
this.__Dv[w].push(x);
}}},getBoxes:function(){return this.__Dt;
},getGroupBoxes:function(){return this.__Du;
},updateGroupBoxMembers:function(y,z,A){var B=qx.dom.Hierarchy.getElementIndex(A.getElement());
qx.lang.Array.remove(this.__Dv[z],A);
qx.lang.Array.insertAt(this.__Dv[y],A,B);
},getGroupBoxDataOfBox:function(C){for(var i=0,j=this.__Du.length,D;i<j;i++){D=this.__Dv[this.__Du[i].id];

for(var k=0,l=D.length;k<l;k++){if(D[k].getId()===C){return this.__Du[i];
}}}return null;
}},destruct:function(){this.__Dt=this.__Du=this.__Dv=null;
}});
})();
(function(){var n="Boolean",m="border",l="portal.box.Box",k="click",j="1px solid #444444",i="height",h="position",g="zIndex",f="_applyActive",d="width",a="relative",c="1px solid orange",b="String";
qx.Class.define(l,{extend:qx.core.Object,construct:function(o,p,q,r){qx.core.Object.call(this);
this.__Dw=o;
this.__co=o.id;

if(p!=null){qx.bom.element.Style.set(p,d,o.width);
qx.bom.element.Style.set(p,i,o.height);
this.__Dz(p,q);
}this.setElement(p);
this.setGroupBoxId(r);
this.__Dx=null;
this.__Dy=null;
if(o.resizable){this.setResizable(true);
var s={minWidth:parseInt(o.minWidth),minHeight:parseInt(o.minHeight),maxWidth:parseInt(o.maxWidth),maxHeight:parseInt(o.maxHeight),handles:o.resizeHandles};
this.__Dx=new portal.box.Resizable(this,s);
}if(o.draggable){this.setDraggable(true);
this.__Dy=new portal.box.Draggable(this);
}this.__DA();
},properties:{element:{init:null},groupBoxId:{init:null,check:b},active:{check:n,init:false,apply:f},resizable:{check:n,init:false},draggable:{check:n,init:false}},members:{__co:null,__Dw:null,__Dy:null,__Dx:null,_applyActive:function(t,u){if(t){qx.bom.element.Style.set(this.getElement(),m,c);
}else{qx.bom.element.Style.set(this.getElement(),m,j);
}},getId:function(){return this.getElement()?this.getElement().id:null;
},getData:function(){return this.__Dw;
},getDraggableComponent:function(){return this.__Dy;
},getResizableComponent:function(){return this.__Dx;
},__Dz:function(v,w){if(w){for(var x in w){qx.bom.element.Style.set(x,w[x]);
}}qx.bom.element.Style.set(v,h,a);
qx.bom.element.Style.set(v,g,0);
qx.bom.Element.addListener(v,k,this.__DB,this,true);
},__DA:function(){var z="This is a demo application showing the low-level capabilities."+" It does contain no UI widget code at all.";
z=z+"<br/><br/>"+z+"<br/><br/>"+z;
var y=qx.bom.Element.create("div",{"class":"box_content"});
y.innerHTML=z;
qx.dom.Element.insertEnd(y,this.getElement());
},__DB:function(e){portal.box.Manager.getInstance().setActiveBox(this);
}},destruct:function(){this.resetElement();
this.__Dw=this.__Dx=this.__Dy=null;
}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__bi:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__bi[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__bi[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var k="engine.version",j="",i="engine.name",h="hidden",g="-moz-scrollbars-none",f="overflow",e=";",d="overflowY",b=":",a="overflowX",z="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",m="100px",n="qx.bom.element.Overflow",l="overflow-x";
qx.Class.define(n,{statics:{DEFAULT_SCROLLBAR_WIDTH:14,__df:null,getScrollbarWidth:function(){if(this.__df!==null){return this.__df;
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
this.__df=c;
document.body.removeChild(t);
return this.__df;
},_compile:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(P,Q){if(Q==h){Q=g;
}return z+Q+e;
}:function(R,S){return R+b+S+e;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(T,U){return z+U+e;
}:function(V,W){return V+b+W+e;
},"default":function(X,Y){return X+b+Y+e;
}}),compileX:function(ba){return this._compile(l,ba);
},compileY:function(bb){return this._compile(q,bb);
},getX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bc,bd){var be=qx.bom.element.Style.get(bc,f,bd,false);

if(be===g){be=h;
}return be;
}:function(bf,bg){return qx.bom.element.Style.get(bf,a,bg,false);
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bh,bi){return qx.bom.element.Style.get(bh,f,bi,false);
}:function(bj,bk){return qx.bom.element.Style.get(bj,a,bk,false);
},"default":function(bl,bm){return qx.bom.element.Style.get(bl,a,bm,false);
}}),setX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bn,bo){if(bo==h){bo=g;
}bn.style.overflow=bo;
}:function(bp,bq){bp.style.overflowX=bq;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(br,bs){br.style.overflow=bs;
}:function(bt,bu){bt.style.overflowX=bu;
},"default":function(bv,bw){bv.style.overflowX=bw;
}}),resetX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bx){bx.style.overflow=j;
}:function(by){by.style.overflowX=j;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bz,bA){bz.style.overflow=j;
}:function(bB,bC){bB.style.overflowX=j;
},"default":function(bD){bD.style.overflowX=j;
}}),getY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bE,bF){var bG=qx.bom.element.Style.get(bE,f,bF,false);

if(bG===g){bG=h;
}return bG;
}:function(bH,bI){return qx.bom.element.Style.get(bH,d,bI,false);
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bJ,bK){return qx.bom.element.Style.get(bJ,f,bK,false);
}:function(bL,bM){return qx.bom.element.Style.get(bL,d,bM,false);
},"default":function(bN,bO){return qx.bom.element.Style.get(bN,d,bO,false);
}}),setY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bP,bQ){if(bQ===h){bQ=g;
}bP.style.overflow=bQ;
}:function(bR,bS){bR.style.overflowY=bS;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bT,bU){bT.style.overflow=bU;
}:function(bV,bW){bV.style.overflowY=bW;
},"default":function(bX,bY){bX.style.overflowY=bY;
}}),resetY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(ca){ca.style.overflow=j;
}:function(cb){cb.style.overflowY=j;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(cc,cd){cc.style.overflow=j;
}:function(ce,cf){ce.style.overflowY=j;
},"default":function(cg){cg.style.overflowY=j;
}})}});
})();
(function(){var q="engine.name",p="",o="boxSizing",n="box-sizing",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="border-box",h="-moz-box-sizing",g="WebkitBoxSizing",f=":",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(m,{statics:{__dg:qx.core.Environment.select(q,{"mshtml":null,"webkit":[o,k,g],"gecko":[a],"opera":[o]}),__dh:qx.core.Environment.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[h],"opera":[n]}),__di:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dj:function(r){var s=this.__di;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Environment.select(q,{"mshtml":function(t){},"default":function(u){var w=this.__dh;
var v=p;

if(w){for(var i=0,l=w.length;i<l;i++){v+=w[i]+f+u+c;
}}return v;
}}),get:qx.core.Environment.select(q,{"mshtml":function(x){if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(x))){if(!this.__dj(x)){return d;
}}return j;
},"default":function(y){var A=this.__dg;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==p){return z;
}}}return p;
}}),set:qx.core.Environment.select(q,{"mshtml":function(B,C){},"default":function(D,E){var F=this.__dg;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(G){this.set(G,p);
}}});
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
}}),__dk:function(){var v=this.getWidth()>this.getHeight()?90:0;
var w=window.orientation;

if(w==null||Math.abs(w%180)==v){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__dl:null,getOrientation:function(x){var y=(x||window).orientation;

if(y==null){y=this.getWidth(x)>this.getHeight(x)?90:0;
}else{y=this.__dl[y];
}return y;
},isLandscape:function(z){return Math.abs(this.getOrientation(z))==90;
},isPortrait:function(A){return Math.abs(this.getOrientation(A))!==90;
}},defer:function(B){B.__dl=B.__dk();
}});
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
(function(){var m="",k="engine.name",h="userSelect",g="style",f="MozUserModify",e="px",d="pixelBottom",c="float",b="borderImage",a="styleFloat",F="appearance",E="pixelHeight",D='Ms',C=":",B="cssFloat",A="pixelTop",z="pixelLeft",y='O',x="qx.bom.element.Style",w='Khtml',t='string',u="pixelRight",r='Moz',s="pixelWidth",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(x,{statics:{__dm:function(){var G=[F,h,q,b];
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
}}}this.__dn=K;
this.__dn[n]=qx.core.Environment.select(k,{"gecko":f,"webkit":v,"default":h});
this.__do={};

for(var I in K){this.__do[I]=qx.lang.String.hyphenate(K[I]);
}this.__dn[c]=qx.core.Environment.select(k,{"mshtml":a,"default":B});
},__dp:{width:s,height:E,left:z,right:u,top:A,bottom:d},__dq:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(O){var Q=[];
var S=this.__dq;
var R=this.__do;
var name,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=R[name]||name;
if(S[name]){Q.push(S[name].compile(P));
}else{Q.push(qx.lang.String.hyphenate(name),C,P,p);
}}return Q.join(m);
},setCss:qx.core.Environment.select(k,{"mshtml":function(T,U){T.style.cssText=U;
},"default":function(V,W){V.setAttribute(g,W);
}}),getCss:qx.core.Environment.select(k,{"mshtml":function(X){return X.style.cssText.toLowerCase();
},"default":function(Y){return Y.getAttribute(g);
}}),isPropertySupported:function(ba){return (this.__dq[ba]||this.__dn[ba]||ba in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bb,name,bc,bd){name=this.__dn[name]||name;
if(bd!==false&&this.__dq[name]){return this.__dq[name].set(bb,bc);
}else{bb.style[name]=bc!==null?bc:m;
}},setStyles:function(be,bf,bg){var bj=this.__dn;
var bl=this.__dq;
var bh=be.style;

for(var bk in bf){var bi=bf[bk];
var name=bj[bk]||bk;

if(bi===undefined){if(bg!==false&&bl[name]){bl[name].reset(be);
}else{bh[name]=m;
}}else{if(bg!==false&&bl[name]){bl[name].set(be,bi);
}else{bh[name]=bi!==null?bi:m;
}}}},reset:function(bm,name,bn){name=this.__dn[name]||name;
if(bn!==false&&this.__dq[name]){return this.__dq[name].reset(bm);
}else{bm.style[name]=m;
}},get:qx.core.Environment.select(k,{"mshtml":function(bo,name,bp,bq){name=this.__dn[name]||name;
if(bq!==false&&this.__dq[name]){return this.__dq[name].get(bo,bp);
}if(!bo.currentStyle){return bo.style[name]||m;
}switch(bp){case this.LOCAL_MODE:return bo.style[name]||m;
case this.CASCADED_MODE:return bo.currentStyle[name]||m;
default:var bu=bo.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bu)){return bu;
}var bt=this.__dp[name];

if(bt){var br=bo.style[name];
bo.style[name]=bu||0;
var bs=bo.style[bt]+e;
bo.style[name]=br;
return bs;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bu)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bu;
}},"default":function(bv,name,bw,bx){name=this.__dn[name]||name;
if(bx!==false&&this.__dq[name]){return this.__dq[name].get(bv,bw);
}switch(bw){case this.LOCAL_MODE:return bv.style[name]||m;
case this.CASCADED_MODE:if(bv.currentStyle){return bv.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var by=qx.dom.Node.getDocument(bv);
var bz=by.defaultView.getComputedStyle(bv,null);
return bz?bz[name]:m;
}}})},defer:function(bA){bA.__dm();
}});
})();
(function(){var g="portal.box.Resizable",f="_",d="mouseover",c="mouseout",b="div",a="orientation";
qx.Class.define(g,{extend:qx.core.Object,construct:function(h,i){qx.core.Object.call(this);
this.__DC=h;
this.__eN=this.__DC.getElement();
this.__DD={};
this.__DE=false;
this.__DF={orientation:null,lastCoord:{left:null,top:null}};
this.__kP={minWidth:10,minHeight:10,maxWidth:null,maxHeight:null,autoHide:true,handles:3};

for(var name in this.__kP){if(i[name]){this.__kP[name]=i[name];
}}this.__Dz();
},members:{__DF:null,__DC:null,__eN:null,__DD:null,__kP:null,__DE:false,getBox:function(){return this.__DC;
},__Dz:function(){switch(this.__kP.handles){case 1:this.__DD.east=null;
break;
case 2:this.__DD.south=null;
break;
case 3:this.__DD.south=null;
this.__DD.southeast=null;
this.__DD.east=null;
break;
}for(var k in this.__DD){var j=this.__DD[k]=qx.bom.Element.create(b);
qx.bom.element.Attribute.set(j,a,k);
qx.dom.Element.insertEnd(j,this.__eN);

if(this.__eN.id){j.id=this.__eN.id+f+k;
}this.__DG(k);
this.__DH(k);
}},__DG:function(l){qx.bom.element.Class.add(this.__DD[l],l+"Handle");
qx.bom.element.Style.set(this.__DD[l],"visibility",this.__kP.autoHide?"hidden":"visible");
},__DH:function(m){var o=qx.event.Registration;
var n=this.__DD[m];
o.addListener(n,"mousedown",this.__DK,this);
o.addListener(document,"mouseup",this.__DL,this);

if(this.__kP.autoHide){o.addListener(this.__DC.getElement(),"mouseover",this.__DI,this);
o.addListener(this.__DC.getElement(),"mouseout",this.__DJ,this);
}},__DI:function(e){for(var p in this.__DD){qx.bom.element.Style.set(this.__DD[p],"visibility","visible");
}},__DJ:function(e){if(!this.__DE){for(var q in this.__DD){qx.bom.element.Style.set(this.__DD[q],"visibility","hidden");
}}},__DK:function(e){e.stopPropagation();
if(e.isLeftPressed()){qx.event.Registration.addListener(document,"mousemove",this.__DM,this,true);
this.__DE=true;
var r=e.getTarget();
this.__DF.orientation=qx.bom.element.Attribute.get(r,"orientation");
this.__DF.lastCoord.left=e.getDocumentLeft();
this.__DF.lastCoord.top=e.getDocumentTop();
portal.box.Util.bringToFront(this.__eN);
}},__DL:function(e){e.stopPropagation();

if(this.__DE){qx.event.Registration.removeListener(document,"mousemove",this.__DM,this,true);
portal.box.Util.sendToBack(this.__eN);

if(this.__kP.autoHide){for(var s in this.__DD){qx.bom.element.Style.set(this.__DD[s],"visibility","hidden");
}}this.__DE=false;
qx.bom.Selection.clear(document.body);
}},__DM:function(e){e.stopPropagation();

if(this.__DE){var t={left:null,top:null};

switch(this.__DF.orientation){case "south":t.top=e.getDocumentTop();
break;
case "southeast":t.top=e.getDocumentTop();
t.left=e.getDocumentLeft();
break;
case "east":t.left=e.getDocumentLeft();
break;
}this.__DN(t,this.__DF.lastCoord);
this.__DF.lastCoord.left=e.getDocumentLeft();
this.__DF.lastCoord.top=e.getDocumentTop();
}},__DN:function(u,v){var C=qx.bom.element.Dimension;
var z=portal.box.Manager.getInstance().getGroupBoxDataOfBox(this.__DC.getId());
var B=C.getContentSize(z.element);

if(u.left){var y=u.left-v.left;

if(y!==0){var x=C.getContentWidth(this.__eN)+y;
var A=C.getWidth(this.__eN)+y;

if((this.__kP.minWidth==null||x>this.__kP.minWidth)&&(this.__kP.maxWidth==null||x<=this.__kP.maxWidth)){if(B.width>=A){qx.bom.element.Style.set(this.__eN,"width",x+'px');
this.__DC.getData().width=x;
}}}}
if(u.top){var y=u.top-v.top;

if(y!==0){var w=C.getContentHeight(this.__eN)+y;

if((this.__kP.minHeight==null||w>this.__kP.minHeight)&&(this.__kP.maxHeight==null||w<=this.__kP.maxHeight)){qx.bom.element.Style.set(this.__eN,"height",w+"px");
}}}}},destruct:function(){if(this.__kP.autoHide){qx.event.Registration.removeListener(this.__DC.getElement(),d,this.__DI,this);
qx.event.Registration.removeListener(this.__DC.getElement(),c,this.__DJ,this);
}this.__DC=this.__kP=this.__eN=this.__DD=null;
this.__DF=null;
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__eD=f;
this.__cu=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eD:null,__cu:null,__fm:null,__fn:null,__fo:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__fo=qx.lang.Function.listener(this._onNative,this);
this.__fm=qx.bom.Event.supportsEvent(this.__cu,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__cu,this.__fm,this.__fo);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cu,this.__fm,this.__fo);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__fn!=p){this.__fn=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__cu,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__eD=this.__cu=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__fp:null,__fq:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__fp=d;
this.__fq=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__fp=this.__fp;
g.__fq=this.__fq;
return g;
},getOrientation:function(){return this.__fp;
},isLandscape:function(){return this.__fq==c;
},isPortrait:function(){return this.__fq==a;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__eD=b;
this.__cu=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eD:null,__cu:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__eD=this.__cu=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__eD=u;
this.__cu=u.getWindow();
this.__cX=this.__cu.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__fr:null,__fs:null,__eD:null,__cu:null,__cX:null,__ft:null,__fu:null,__fv:null,__fw:null,__fx:false,__fy:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__fz:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__fA:function(F,G,H,I){if(!H){H=this.__fz(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__cu,h,qx.event.type.Data,[G]);
},__fB:function(J,K,L){if(!L){L=this.__fz(J);
}var K=K||J.type;

if(K==r){this.__fC(J,L);
}else if(K==q){this.__fD(J,L);
}else if(K==s){this.__fE(J,L);
}},__fC:function(M,N){var O=M.changedTouches[0];
this.__ft=O.screenX;
this.__fu=O.screenY;
this.__fv=new Date().getTime();
this.__fw=M.changedTouches.length===1;
},__fD:function(P,Q){if(this.__fw&&P.changedTouches.length>1){this.__fw=false;
}},__fE:function(R,S){if(this.__fw){var T=R.changedTouches[0];
var V={x:T.screenX-this.__ft,y:T.screenY-this.__fu};
var W=qx.event.handler.Touch;

if(this.__fy==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__fA(R,f,S,qx.event.type.Tap);
}else{var U=this.__fF(R,S,V);

if(U){R.swipe=U;
this.__fA(R,c,S,qx.event.type.Swipe);
}}}},__fF:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__fv;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__fv,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__fG:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__fH(bi)){this.__fx=true;
}else if(bj==s){this.__fx=false;
}var bm=this.__fI(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__fH:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__fI:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__fz(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__fr=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cX,r,this.__fr);
Event.addNativeListener(this.__cX,q,this.__fr);
Event.addNativeListener(this.__cX,s,this.__fr);
Event.addNativeListener(this.__cX,m,this.__fr);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__fs=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cX,k,this.__fs);
Event.addNativeListener(this.__cX,o,this.__fs);
Event.addNativeListener(this.__cX,l,this.__fs);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cX,r,this.__fr);
Event.removeNativeListener(this.__cX,q,this.__fr);
Event.removeNativeListener(this.__cX,s,this.__fr);
Event.removeNativeListener(this.__cX,m,this.__fr);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cX,k,this.__fs);
Event.removeNativeListener(this.__cX,o,this.__fs);
Event.removeNativeListener(this.__cX,l,this.__fs);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__fx){return;
}var bt=this.__fG(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__fy=this.__fz(bu);
}this.__fA(bu,bv);
this.__fB(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__eD=this.__cu=this.__cX=this.__fy=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
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
},isMultiTouch:function(){return this.__fK().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__fJ(f).pageX;
},getDocumentTop:function(g){return this.__fJ(g).pageY;
},getScreenLeft:function(h){return this.__fJ(h).screenX;
},getScreenTop:function(j){return this.__fJ(j).screenY;
},getViewportLeft:function(k){return this.__fJ(k).clientX;
},getViewportTop:function(l){return this.__fJ(l).clientY;
},getIdentifier:function(m){return this.__fJ(m).identifier;
},__fJ:function(n){n=n==null?0:n;
return this.__fK()[n];
},__fK:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
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
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__eD=d;
this.__fL={};
qx.event.handler.Appear.__fM[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fM:{},refresh:function(){var e=this.__fM;

for(var f in e){e[f].refresh();
}}},members:{__eD:null,__fL:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
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
this.__eD.dispatchEvent(w,t);
}}}},destruct:function(){this.__eD=this.__fL=null;
delete qx.event.handler.Appear.__fM[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
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
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__eD=u;
this.__cu=u.getWindow();
this.__cX=this.__cu.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fN:null,__fO:null,__fP:null,__fQ:null,__fR:null,__eD:null,__cu:null,__cX:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===d?function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===d?function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__fA:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__cu,b,qx.event.type.Data,[E||D.type]);
},__fS:function(){var H=[this.__cu,this.__cX,this.__cX.body];
var I=this.__cu;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__fN=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cX,q,this.__fN);
Event.addNativeListener(this.__cX,t,this.__fN);
Event.addNativeListener(this.__cX,r,this.__fN);
Event.addNativeListener(this.__cX,n,this.__fN);
Event.addNativeListener(this.__cX,p,this.__fN);
},_initMoveObserver:function(){this.__fO=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cX,j,this.__fO);
Event.addNativeListener(this.__cX,l,this.__fO);
Event.addNativeListener(this.__cX,k,this.__fO);
},_initWheelObserver:function(){this.__fP=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__fS();
qx.bom.Event.addNativeListener(J.target,J.type,this.__fP);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cX,q,this.__fN);
Event.removeNativeListener(this.__cX,t,this.__fN);
Event.removeNativeListener(this.__cX,r,this.__fN);
Event.removeNativeListener(this.__cX,n,this.__fN);
Event.removeNativeListener(this.__cX,p,this.__fN);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cX,j,this.__fO);
Event.removeNativeListener(this.__cX,l,this.__fO);
Event.removeNativeListener(this.__cX,k,this.__fO);
},_stopWheelObserver:function(){var K=this.__fS();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__fP);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__fA(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__fT){this.__fT(M,N,O);
}
if(this.__fV){this.__fV(M,N,O);
}this.__fA(M,N,O);

if(this.__fU){this.__fU(M,N,O);
}
if(this.__fW){this.__fW(M,N,O);
}this.__fQ=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__fA(P,o);
}),__fT:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__fA(Q,t,S);
}}},"default":null}),__fU:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__fA(T,p,V);
}},"default":null}),__fV:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__fQ==r){this.__fA(W,q,Y);
}else if(X==n){this.__fA(W,r,Y);
}},"default":null}),__fW:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__fR=bc;
break;
case t:if(bc!==this.__fR){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__fR);
this.__fA(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eD=this.__cu=this.__cX=this.__fR=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
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
},__fX:{0:j,2:i,1:h},__fY:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__fX[this._native.button]||g;
}else{return this.__fY[this._native.button]||g;
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
},__ga:function(m){var n=Math.abs(m);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;
this.__gb();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;
this.__gb();
}if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);
}var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;
return p<0?Math.min(p,-1):Math.max(p,1);
},__gb:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;
var t=qx.event.type.MouseWheel.MINSCROLL||q;

if(q<=t){return;
}var r=q-t;
var s=(q/r)*Math.log(r);

if(s==0){s=1;
}qx.event.type.MouseWheel.FACTOR=6/s;
},getWheelDelta:function(u){var e=this._native;
if(u===undefined){if(v===undefined){var v=-e.wheelDelta;

if(e.wheelDelta===undefined){v=e.detail;
}}return this.__gc(v);
}if(u===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__gc(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__gc(e.detail);
}}return x;
}if(u===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__gc(-e.wheelDeltaY):0;
}else{y=this.__gc(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__gc(e.detail);
}}return y;
}return 0;
},__gc:function(w){if(qx.core.Environment.get(f)){return this.__ga(w);
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
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="1",c="win",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__eD=by;
this.__cu=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__cX=this.__cu;
}else{this.__cX=this.__cu.document.documentElement;
}this.__gd={};
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
}}},members:{__ge:null,__eD:null,__cu:null,__cX:null,__gd:null,__gf:null,__gg:null,__gh:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__gi();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__eD.dispatchEvent(bL,event);
}if(this.__cu){qx.event.Registration.fireEvent(this.__cu,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__gi();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__eD.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__cu){qx.event.Registration.fireEvent(this.__cu,s,qx.event.type.Data,[bN]);
}},__gi:function(){var bR=this.__eD.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__eD.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__ge=qx.lang.Function.listener(this.__gj,this);
this.__gh=qx.lang.Function.listener(this.__gl,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cX,i,this.__ge);
Event.addNativeListener(this.__cX,m,this.__ge);
Event.addNativeListener(this.__cX,k,this.__gh);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cX,i,this.__ge);
Event.removeNativeListener(this.__cX,m,this.__ge);
Event.removeNativeListener(this.__cX,k,this.__gh);

for(var bU in (this.__gg||{})){var bT=this.__gg[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__gg);
},__gj:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__gd[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__gd[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==c){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__gd[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__gd[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__gk(ca.target,cd,ce);
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
}}this.__gd[ci]=ch;
}},"opera":function(cj){this.__gf=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__gk:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__gg){this.__gg={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__gg[co]){return;
}var self=this;
this.__gg[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__gl(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__gg[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__gl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

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
if(cB!=this.__gf){this._idealKeyHandler(0,this.__gf,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(cC,cD,cE,cF){var cG;
if(cC||(!cC&&!cD)){cG=this._keyCodeToIdentifier(cC);
this._fireSequenceEvent(cF,cE,cG);
}else{cG=this._charCodeToIdentifier(cD);
this._fireSequenceEvent(cF,k,cG);
this._fireInputEvent(cF,cD);
}},_specialCharCodeMap:{8:K,9:a,13:g,27:w,32:br},_emulateKeyPress:qx.core.Environment.select(l,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bf,17:ba,18:P,20:bc,224:W,37:bq,38:t,39:bb,40:bo,33:bu,34:bn,35:B,36:bk,45:n,46:Q,112:Y,113:be,114:p,115:T,116:bp,117:r,118:bl,119:o,120:L,121:U,122:u,123:H,144:j,44:bv,145:bd,19:x,91:qx.core.Environment.get(h)==J?R:F,92:F,93:qx.core.Environment.get(h)==J?R:E},_numpadToCharCode:{96:f.charCodeAt(0),97:b.charCodeAt(0),98:bi.charCodeAt(0),99:X.charCodeAt(0),100:D.charCodeAt(0),101:I.charCodeAt(0),102:z.charCodeAt(0),103:V.charCodeAt(0),104:bh.charCodeAt(0),105:d.charCodeAt(0),106:M.charCodeAt(0),107:bw.charCodeAt(0),109:bx.charCodeAt(0),110:G.charCodeAt(0),111:C.charCodeAt(0)},_charCodeA:bs.charCodeAt(0),_charCodeZ:bg.charCodeAt(0),_charCode0:f.charCodeAt(0),_charCode9:d.charCodeAt(0),_isNonPrintableKeyCode:function(cH){return this._keyCodeToIdentifierMap[cH]?true:false;
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
this.__gf=this.__eD=this.__cu=this.__cX=this.__gd=null;
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
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gm:null,__gn:null,__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,__gu:null,__gv:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
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
}},tryActivate:function(S){var T=this.__gJ(S);

if(T){this.setActive(T);
}},__fA:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__gw:function(){if(this._windowFocused){this._windowFocused=false;
this.__fA(this._window,null,g,false);
}},__gx:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fA(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__gm=qx.lang.Function.listener(this.__gD,this);
this.__gn=qx.lang.Function.listener(this.__gE,this);
this.__go=qx.lang.Function.listener(this.__gC,this);
this.__gp=qx.lang.Function.listener(this.__gB,this);
this.__gq=qx.lang.Function.listener(this.__gy,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gm,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gn,true);
qx.bom.Event.addNativeListener(this._window,f,this.__go,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gp,true);
qx.bom.Event.addNativeListener(this._window,y,this.__gq,true);
},"mshtml":function(){this.__gm=qx.lang.Function.listener(this.__gD,this);
this.__gn=qx.lang.Function.listener(this.__gE,this);
this.__gs=qx.lang.Function.listener(this.__gz,this);
this.__gt=qx.lang.Function.listener(this.__gA,this);
this.__gr=qx.lang.Function.listener(this.__gG,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gm);
qx.bom.Event.addNativeListener(this._document,h,this.__gn);
qx.bom.Event.addNativeListener(this._document,b,this.__gs);
qx.bom.Event.addNativeListener(this._document,a,this.__gt);
qx.bom.Event.addNativeListener(this._document,d,this.__gr);
},"webkit":function(){this.__gm=qx.lang.Function.listener(this.__gD,this);
this.__gn=qx.lang.Function.listener(this.__gE,this);
this.__gt=qx.lang.Function.listener(this.__gA,this);
this.__go=qx.lang.Function.listener(this.__gC,this);
this.__gp=qx.lang.Function.listener(this.__gB,this);
this.__gr=qx.lang.Function.listener(this.__gG,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gm,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gn,true);
qx.bom.Event.addNativeListener(this._document,d,this.__gr,false);
qx.bom.Event.addNativeListener(this._window,c,this.__gt,true);
qx.bom.Event.addNativeListener(this._window,f,this.__go,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gp,true);
},"opera":function(){this.__gm=qx.lang.Function.listener(this.__gD,this);
this.__gn=qx.lang.Function.listener(this.__gE,this);
this.__gs=qx.lang.Function.listener(this.__gz,this);
this.__gt=qx.lang.Function.listener(this.__gA,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gm,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gn,true);
qx.bom.Event.addNativeListener(this._window,z,this.__gs,true);
qx.bom.Event.addNativeListener(this._window,c,this.__gt,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gm,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gn,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__go,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gp,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__gq,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gm);
qx.bom.Event.removeNativeListener(this._document,h,this.__gn);
qx.bom.Event.removeNativeListener(this._document,b,this.__gs);
qx.bom.Event.removeNativeListener(this._document,a,this.__gt);
qx.bom.Event.removeNativeListener(this._document,d,this.__gr);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gm,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gn,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__gr,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__gt,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__go,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gp,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gm,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gn,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__gs,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__gt,true);
}}),__gy:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__gK(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__gz:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__gx();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__gI(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__gx();

if(this.__gu){this.setFocus(this.__gu);
delete this.__gu;
}
if(this.__gv){this.setActive(this.__gv);
delete this.__gv;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__gK(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__gA:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__gw();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__gw();
this.__gu=this.getFocus();
this.__gv=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__gB:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__gw();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__gw();
this.__gu=this.getFocus();
this.__gv=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__gC:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__gx();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__gx();

if(this.__gu){this.setFocus(this.__gu);
delete this.__gu;
}
if(this.__gv){this.setActive(this.__gv);
delete this.__gv;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__gD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__gI(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__gI(bB);

if(bA){if(!this.__gK(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__gK(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__gI(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__gI(bK);

if(!this.__gK(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__gE:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__gF(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__gF(bQ));
},"default":null})),__gF:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__gG:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__gK(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__gH:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__gI:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__gH(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__gJ:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__gK:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__fA(cg,cf,v,true);
}
if(cf){this.__fA(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__fA(ci,ch,a,true);
}
if(ch){this.__fA(ch,ci,b,true);
}if(ci){this.__fA(ci,ch,g,false);
}
if(ch){this.__fA(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__gL=null;
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
},"default":function(p){if(this.__gM(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__gM(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__gM(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__gM(A)){var F=qx.bom.Range.get();
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
}},"gecko|webkit":function(K){if(this.__gM(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__gM(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__gM(O)){var T=qx.bom.Range.get();
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
}},"gecko|webkit":function(Y){if(this.__gM(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__gM(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__gM:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
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
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Control",d="Shift",c="mousemove",b="move",a="mouseover",D="Alt",C="keyup",B="mouseup",A="keypress",z="dragend",y="on",x="mousedown",w="qxDraggable",v="Escape",u="drag",r="drop",s="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover",t="left";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(E){qx.core.Object.call(this);
this.__eD=E;
this.__cX=E.getWindow().document.documentElement;
this.__eD.addListener(this.__cX,x,this._onMouseDown,this);
this.__gX();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__eD:null,__cX:null,__gN:null,__gO:null,__gP:null,__gQ:null,__gR:null,__j:null,__gS:null,__gT:null,__gU:false,__gV:0,__gW:0,canHandleEvent:function(F,G){},registerEvent:function(H,I,J){},unregisterEvent:function(K,L,M){},addType:function(N){this.__gP[N]=true;
},addAction:function(O){this.__gQ[O]=true;
},supportsType:function(P){return !!this.__gP[P];
},supportsAction:function(Q){return !!this.__gQ[Q];
},getData:function(R){if(!this.__he||!this.__gN){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gP[R]){throw new Error("Unsupported data type: "+R+"!");
}
if(!this.__j[R]){this.__gS=R;
this.__fA(q,this.__gO,this.__gN,false);
}
if(!this.__j[R]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__j[R]||null;
},getCurrentAction:function(){return this.__gT;
},addData:function(S,T){this.__j[S]=T;
},getCurrentType:function(){return this.__gS;
},isSessionActive:function(){return this.__gU;
},__gX:function(){this.__gP={};
this.__gQ={};
this.__gR={};
this.__j={};
},__gY:function(){if(this.__gO==null){return;
}var W=this.__gQ;
var U=this.__gR;
var V=null;

if(this.__he){if(U.Shift&&U.Control&&W.alias){V=k;
}else if(U.Shift&&U.Alt&&W.copy){V=j;
}else if(U.Shift&&W.move){V=b;
}else if(U.Alt&&W.alias){V=k;
}else if(U.Control&&W.copy){V=j;
}else if(W.move){V=b;
}else if(W.copy){V=j;
}else if(W.alias){V=k;
}}
if(V!=this.__gT){this.__gT=V;
this.__fA(o,this.__gO,this.__gN,false);
}},__fA:function(X,Y,ba,bb,bc){var be=qx.event.Registration;
var bd=be.createEvent(X,qx.event.type.Drag,[bb,bc]);

if(Y!==ba){bd.setRelatedTarget(ba);
}return be.dispatchEvent(Y,bd);
},__ha:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(w)==y){return bf;
}bf=bf.parentNode;
}return null;
},__hb:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(s)==y){return bg;
}bg=bg.parentNode;
}return null;
},__hc:function(){this.__gO=null;
this.__eD.removeListener(this.__cX,c,this._onMouseMove,this,true);
this.__eD.removeListener(this.__cX,B,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__gX();
},__hd:function(){if(this.__gU){this.__eD.removeListener(this.__cX,a,this._onMouseOver,this,true);
this.__eD.removeListener(this.__cX,h,this._onMouseOut,this,true);
this.__eD.removeListener(this.__cX,g,this._onKeyDown,this,true);
this.__eD.removeListener(this.__cX,C,this._onKeyUp,this,true);
this.__eD.removeListener(this.__cX,A,this._onKeyPress,this,true);
this.__fA(z,this.__gO,this.__gN,false);
this.__gU=false;
}this.__he=false;
this.__gN=null;
this.__hc();
},__he:false,_onWindowBlur:function(e){this.__hd();
},_onKeyDown:function(e){var bh=e.getKeyIdentifier();

switch(bh){case D:case f:case d:if(!this.__gR[bh]){this.__gR[bh]=true;
this.__gY();
}}},_onKeyUp:function(e){var bi=e.getKeyIdentifier();

switch(bi){case D:case f:case d:if(this.__gR[bi]){this.__gR[bi]=false;
this.__gY();
}}},_onKeyPress:function(e){var bj=e.getKeyIdentifier();

switch(bj){case v:this.__hd();
}},_onMouseDown:function(e){if(this.__gU||e.getButton()!==t){return;
}var bk=this.__ha(e.getTarget());

if(bk){this.__gV=e.getDocumentLeft();
this.__gW=e.getDocumentTop();
this.__gO=bk;
this.__eD.addListener(this.__cX,c,this._onMouseMove,this,true);
this.__eD.addListener(this.__cX,B,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__he){this.__fA(r,this.__gN,this.__gO,false,e);
}if(this.__gU){e.stopPropagation();
}this.__hd();
},_onMouseMove:function(e){if(this.__gU){if(!this.__fA(u,this.__gO,this.__gN,true,e)){this.__hd();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gV)>3||Math.abs(e.getDocumentTop()-this.__gW)>3){if(this.__fA(n,this.__gO,this.__gN,true,e)){this.__gU=true;
this.__eD.addListener(this.__cX,a,this._onMouseOver,this,true);
this.__eD.addListener(this.__cX,h,this._onMouseOut,this,true);
this.__eD.addListener(this.__cX,g,this._onKeyDown,this,true);
this.__eD.addListener(this.__cX,C,this._onKeyUp,this,true);
this.__eD.addListener(this.__cX,A,this._onKeyPress,this,true);
var bl=this.__gR;
bl.Control=e.isCtrlPressed();
bl.Shift=e.isShiftPressed();
bl.Alt=e.isAltPressed();
this.__gY();
}else{this.__fA(z,this.__gO,this.__gN,false);
this.__hc();
}}}},_onMouseOver:function(e){var bm=e.getTarget();
var bn=this.__hb(bm);

if(bn&&bn!=this.__gN){this.__he=this.__fA(m,bn,this.__gO,true,e);
this.__gN=bn;
this.__gY();
}},_onMouseOut:function(e){var bp=this.__hb(e.getTarget());
var bo=this.__hb(e.getRelatedTarget());

if(bp&&bp!==bo&&bp==this.__gN){this.__fA(l,this.__gN,bo,false,e);
this.__gN=null;
this.__he=false;
qx.event.Timer.once(this.__gY,this,0);
}}},destruct:function(){this.__gO=this.__gN=this.__eD=this.__cX=this.__gP=this.__gQ=this.__gR=this.__j=null;
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
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__dN=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__dO=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__dP:null,__dN:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__dP);
this.__dP=null;
}else if(p){this.__dP=window.setInterval(this.__dN,this.getInterval());
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
}})},destruct:function(){if(this.__dP){window.clearInterval(this.__dP);
}this.__dP=this.__dN=null;
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__hf:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__hg:{},__hh:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__hh[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__hh[t]=true;
}catch(e){qx.bom.Element.__hh[t]=false;
}}return qx.bom.Element.__hh[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__hg[w]){var v=qx.bom.Element.__hg[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__hg[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__hf;
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
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__hi:{names:{"class":b,"for":x,html:q,text:(qx.core.Environment.get(h)==l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__hi.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Environment.select(h,{"mshtml":function(D,name){var F=this.__hi;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__hi;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__hi;
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
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__cu=j.getWindow();
this.__cw=k;
j.addListener(this.__cu,f,this.releaseCapture,this);
j.addListener(this.__cu,e,this.releaseCapture,this);
j.addListener(this.__cu,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cw:null,__hj:null,__hk:true,__cu:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__hj&&this.__hl[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hk||!qx.dom.Hierarchy.contains(this.__hj,o)){o=this.__hj;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__hl:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__hj===q&&this.__hk==r){return;
}
if(this.__hj){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__hk=r;
this.__hj=q;
this.__cw.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hj;
},releaseCapture:function(){var s=this.__hj;

if(!s){return;
}this.__hj=null;
this.__cw.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hj=this.__cu=this.__cw=null;
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
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
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
(function(){var e="=",d="ecmascript.objectcount",c="+",b="qx.lang.Object",a="&";
qx.Class.define(b,{statics:{empty:function(f){for(var g in f){if(f.hasOwnProperty(g)){delete f[g];
}}},isEmpty:(qx.core.Environment.get(d))?function(h){return h.__count__===0;
}:function(j){for(var k in j){return false;
}return true;
},hasMinLength:(qx.core.Environment.get(d))?function(m,n){return m.__count__>=n;
}:function(o,p){if(p<=0){return true;
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
(function(){var s="html.classlist",r="default",q="native",p="",o=" ",n='',m="(^|\\s)",k="(\\s|$)",j="\\b",h="g",c='function',g="\\b|\\b",f="qx.bom.element.Class",b='SVGAnimatedString',a='object',e="$2",d='undefined';
qx.Class.define(f,{statics:{__ms:/\s+/g,__mt:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(t,name){t.classList.add(name);
return name;
},"default":function(u,name){if(!this.has(u,name)){u.className+=(u.className?o:p)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(v,w){for(var i=0;i<w.length;i++){v.classList.add(w[i]);
}return v.className;
},"default":function(x,y){var z={};
var B;
var A=x.className;

if(A){B=A.split(this.__ms);

for(var i=0,l=B.length;i<l;i++){z[B[i]]=true;
}
for(var i=0,l=y.length;i<l;i++){if(!z[y[i]]){B.push(y[i]);
}}}else{B=y;
}return x.className=B.join(o);
}}),get:function(C){var D=C.className;

if(typeof D.split!==c){if(typeof D===a){if(qx.Bootstrap.getClass(D)==b){D=D.baseVal;
}else{D=n;
}}
if(typeof D===d){D=n;
}}return D;
},has:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(E,name){return E.classList.contains(name);
},"default":function(F,name){var G=new RegExp(m+name+k);
return G.test(F.className);
}}),remove:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(H,name){H.classList.remove(name);
return name;
},"default":function(I,name){var J=new RegExp(m+name+k);
I.className=I.className.replace(J,e);
return name;
}}),removeClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(K,L){for(var i=0;i<L.length;i++){K.classList.remove(L[i]);
}return K.className;
},"default":function(M,N){var O=new RegExp(j+N.join(g)+j,h);
return M.className=M.className.replace(O,p).replace(this.__mt,p).replace(this.__ms,o);
}}),replace:function(P,Q,R){this.remove(P,Q);
return this.add(P,R);
},toggle:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(S,name,T){if(T===undefined){S.classList.toggle(name);
}else{T?this.add(S,name):this.remove(S,name);
}return name;
},"default":function(U,name,V){if(V==null){V=!this.has(U,name);
}V?this.add(U,name):this.remove(U,name);
return name;
}})}});
})();
(function(){var c="zIndex",b="portal.box.Util",a="auto";
qx.Class.define(b,{statics:{__DO:1000,bringToFront:function(d){var e=qx.bom.element.Style.get(d,c);
e=e==a?0:e;
qx.bom.element.Style.set(d,c,e+this.__DO);
},sendToBack:function(f){var g=qx.bom.element.Style.get(f,c);
qx.bom.element.Style.set(f,c,g-this.__DO);
}}});
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
},__dW:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__dW[t]){var w=r.clientWidth;

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

if(this.__dW[C]){return y.clientHeight-B-A;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;
}else{var D=y.scrollHeight-B;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)==6){D-=A;
}return D;
}}},getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};
}}});
})();
(function(){var d="mouseup",c="dragstart",b="portal.box.Draggable",a="mousemove";
qx.Class.define(b,{extend:qx.core.Object,construct:function(f){qx.core.Object.call(this);
this.__DC=f;
this.__eN=f.getElement();
this.__DP=null;
this.__DQ=null;
this.__Dz();
},members:{__DC:null,__eN:null,__DP:null,__DQ:null,getBox:function(){return this.__DC;
},getElement:function(){return this.__eN;
},__Dz:function(){this.__DR();
this.__DH();
},__DR:function(){this.__DP=qx.bom.Element.create("div");
qx.bom.element.Class.add(this.__DP,"dragHandle");
qx.dom.Element.insertBegin(this.__DP,this.__eN);
},__DH:function(){qx.bom.Element.addListener(this.__DP,"mousedown",this.__jy,this);
qx.bom.Element.addListener(this.__DP,"mouseover",function(e){qx.bom.element.Style.set(this,"cursor","move");
},this.__DP);
qx.bom.Element.addListener(this.__DP,"dragstart",this.__sB,this);
qx.bom.Element.addListener(this.__DP,"dragend",portal.dragdrop.Manager.getInstance().stopSession,portal.dragdrop.Manager.getInstance());
qx.bom.Element.addListener(this.__DP,"drag",this.__DU,this);
},__jy:function(e){if(e.isLeftPressed()){this.__DQ={left:e.getDocumentLeft()-qx.bom.element.Location.getLeft(this.__eN),top:e.getDocumentTop()-qx.bom.element.Location.getTop(this.__eN)};
qx.bom.Element.addListener(document.body,d,this.__DT,this,true);
this.__DS();
qx.event.Registration.fireEvent(this.__DP,c,qx.event.type.Event);
}},__DS:qx.core.Environment.select("engine.name",{"mshtml":function(){var h=this;
var g=qx.lang.Function.bind(this.__DT,h);
document.getElementsByTagName("html")[0].onmouseleave=g;
},"default":qx.lang.Function.empty}),__DT:function(e){try{e.stopPropagation();
}catch(i){}
if(portal.dragdrop.Manager.getInstance().isSessionActive()){qx.event.Registration.removeListener(document.body,"mousemove",this.__DU,this,true);
portal.dragdrop.Manager.getInstance().stopSession();
}qx.bom.Element.removeListener(document.body,"mouseup",this.__DT,this,true);
},__sB:function(e){if(portal.dragdrop.Manager.getInstance().isSessionActive()){return;
}portal.box.Manager.getInstance().setActiveBox(this.__DC);
portal.dragdrop.Manager.getInstance().startSession(this.__DC);
qx.event.Registration.addListener(document.body,a,this.__DU,this,true);
},__DU:function(e){e.stopPropagation();
var j=e.getDocumentLeft()-this.__DQ.left;
var top=e.getDocumentTop()-this.__DQ.top;
qx.event.Timer.once(function(){this.checkGroupBox(j,parseInt(this.getActiveBox().getData().width));
this.onDragMove(top,j);
},portal.dragdrop.Manager.getInstance(),0);
}},destruct:function(){this.__DC=this.__DP=this.__eN=this.__DQ=null;
}});
})();
(function(){var x="px",w="px;",v="border",u="portal.box.Box",t="1px dashed red",s="top",r="Boolean",q="left",p="paddingTop",o="width:",f="height:",n="finish",k="opacity:0.5;margin:0;position:absolute;",c="left:",b="div",h="absolute",g="spring",l="paddingBottom",a="portal.dragdrop.Manager",m="singleton",d="top:";
qx.Class.define(a,{type:m,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__DV={top:null,height:null};
this.__DW={top:0,left:0};
},properties:{activeBox:{check:u,init:null,nullable:true},sessionActive:{check:r,init:false}},members:{__DV:null,__DX:null,__DY:false,__DW:null,__Ea:null,__Eb:null,startSession:function(y){this.setSessionActive(true);
this.setActiveBox(y);
this.__DX=y.getGroupBoxId();
this.__Ec();
if(this.__Ea==null){this.__Ea={};
var z=portal.box.Manager.getInstance().getGroupBoxes();

for(var i=0,j=z.length;i<j;i++){this.__Ea[z[i].element.id]={left:qx.bom.element.Location.getLeft(z[i].element),right:qx.bom.element.Location.getLeft(z[i].element)+qx.bom.element.Dimension.getWidth(z[i].element)};
}}},__Ec:function(){if(!this.__Eb){this.__Eb=qx.bom.Element.create(b);
}var C=this.getActiveBox().getElement();
var A=qx.bom.element.Dimension.getContentSize(C);
this.__Ed(C,this.__Eb);
qx.bom.element.Class.add(this.__Eb,qx.bom.element.Class.get(C));
var B=k+d+qx.bom.element.Location.getTop(C)+w+c+qx.bom.element.Location.getLeft(C)+w+o+A.width+w+f+A.height+x;
qx.bom.element.Style.setCss(this.__Eb,B);
qx.bom.element.Style.set(C,v,t);
qx.dom.Node.getBodyElement(C).appendChild(this.__Eb);
portal.box.Util.bringToFront(this.__Eb);
},__Ed:function(D,E){while(D.firstChild){E.appendChild(D.firstChild);
}},stopSession:function(e){this.setSessionActive(false);
var G=this.getActiveBox();
var H=G.getElement();
portal.box.Manager.getInstance().updateGroupBoxMembers(G.getGroupBoxId(),this.__DX,G);
G.setGroupBoxId(this.__DX);
var F=new qx.fx.effect.core.Move(this.__Eb);
F.set({x:qx.bom.element.Location.getLeft(H),y:qx.bom.element.Location.getTop(H),mode:h,duration:0.5,transition:g});
F.start();
F.addListener(n,function(){this.__Ed(this.__Eb,H);
qx.bom.element.Style.reset(H,v);
this.__Eb.parentNode.removeChild(this.__Eb);

if(G.isActive()){G._applyActive(true);
}else{portal.box.Manager.getInstance().setActiveBox(G);
}},this);
},onDragMove:function(top,I){if(this.__DW.left!=I){qx.bom.element.Style.set(this.__Eb,q,I+x);
}
if(this.__DW.top!=top){qx.bom.element.Style.set(this.__Eb,s,top+x);
}var J=this.getActiveBox().getElement();

if(this.__DV.top==null){this.__DV.top=qx.bom.element.Location.getTop(J);
}
if(this.__DV.height==null){this.__DV.height=qx.bom.element.Dimension.getHeight(J);
}if(this.__DY==false&&top>=this.__DV.top&&top<=(this.__DV.top+this.__DV.height)){return;
}var K;
if(this.__DY){K=qx.dom.Hierarchy.getFirstDescendant(document.getElementById(this.__DX));
while(K!=null){if(this.__Ee(true,top,J,K)){this.__DY=false;
return;
}K=qx.dom.Hierarchy.getNextElementSibling(K);
}}else{K=J;
}if(top-this.__DW.top>0){K=qx.dom.Hierarchy.getNextElementSibling(K);

while(K!=null){if(K){if(this.__Ee(true,top,J,K)){return;
}}K=qx.dom.Hierarchy.getNextElementSibling(K);
}}else{var K=qx.dom.Hierarchy.getPreviousElementSibling(K);

while(K!=null){if(K){if(this.__Ee(false,top,J,K)){return;
}}K=qx.dom.Hierarchy.getPreviousElementSibling(K);
}}this.__DW.left=I;
this.__DW.top=top;
},__Ee:function(L,top,M,N){var O=qx.bom.element.Location.getTop(N);
var Q=parseInt(qx.bom.element.Style.get(N,p));
var R=parseInt(qx.bom.element.Style.get(N,l));
var P=qx.bom.element.Dimension.getContentHeight(N)+R+Q;
var S;

if(L){if(top>=(O+(P/3))){S=qx.dom.Hierarchy.getNextElementSibling(N);

if(S!=M||S==null){qx.dom.Element.insertAfter(M,N);
this.__DV.top=qx.bom.element.Location.getTop(M);
}return true;
}}else{if(top<=(O+P*2/3)){S=qx.dom.Hierarchy.getPreviousElementSibling(N);

if(S!=M||S==null){qx.dom.Element.insertBefore(M,N);
this.__DV.top=qx.bom.element.Location.getTop(M);
}return true;
}}return false;
},checkGroupBox:function(T,U){if(this.__Ea[this.__DX].left<=T&&this.__Ea[this.__DX].right>=T){return;
}
for(var V in this.__Ea){if(V!=this.__DX){if(this.__Ea[V].left<=T+U&&this.__Ea[V].right>=T){this.__DX=V;
this.__DY=true;
return;
}}}}},destruct:function(){this.__DV=this.__DW=this.__DX=null;
this.__Ef=this.__Eb=this.__Ea=null;
}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="marginTop",g="marginLeft",f="engine.name",e="scroll",d="engine.version",c="border-box",b="borderBottomWidth",a="borderRightWidth",C="auto",B="padding",A="browser.quirksmode",z="qx.bom.element.Location",y="paddingLeft",x="static",w="marginBottom",v="visible",u="BODY",t="opera",q="paddingBottom",r="paddingTop",o="marginRight",p="position",m="margin",n="overflow",k="paddingRight",l="browser.documentmode",s="border";
qx.Class.define(z,{statics:{__hm:function(D,E){return qx.bom.element.Style.get(D,E,qx.bom.element.Style.COMPUTED_MODE,false);
},__hn:function(F,G){return parseInt(qx.bom.element.Style.get(F,G,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ho:function(H){var K=0,top=0;
if(H.getBoundingClientRect&&qx.core.Environment.get(f)!=t){var J=qx.dom.Node.getWindow(H);
K-=qx.bom.Viewport.getScrollLeft(J);
top-=qx.bom.Viewport.getScrollTop(J);
}else{var I=qx.dom.Node.getDocument(H).body;
H=H.parentNode;
while(H&&H!=I){K+=H.scrollLeft;
top+=H.scrollTop;
H=H.parentNode;
}}return {left:K,top:top};
},__hp:qx.core.Environment.select(f,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=0;
var top=0;
O-=M.clientLeft+N.documentElement.clientLeft;
top-=M.clientTop+N.documentElement.clientTop;

if(!qx.core.Environment.get(A)){O+=this.__hn(M,i);
top+=this.__hn(M,j);
}return {left:O,top:top};
},"webkit":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=Q.offsetLeft;
var top=Q.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<530.17){S+=this.__hn(Q,i);
top+=this.__hn(Q,j);
}return {left:S,top:top};
},"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;
var V=U.offsetLeft;
var top=U.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<1.9){V+=this.__hn(U,g);
top+=this.__hn(U,h);
}if(qx.bom.element.BoxSizing.get(U)!==c){V+=this.__hn(U,i);
top+=this.__hn(U,j);
}return {left:V,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__hq:qx.core.Environment.select(f,{"mshtml|webkit":function(ba){var bc=qx.dom.Node.getDocument(ba);
if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();
var be=bd.left;
var top=bd.top;
}else{var be=ba.offsetLeft;
var top=ba.offsetTop;
ba=ba.offsetParent;
var bb=bc.body;
while(ba&&ba!=bb){be+=ba.offsetLeft;
top+=ba.offsetTop;
be+=this.__hn(ba,i);
top+=this.__hn(ba,j);
ba=ba.offsetParent;
}}return {left:be,top:top};
},"gecko":function(bf){if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();
var bj=Math.round(bi.left);
var top=Math.round(bi.top);
}else{var bj=0;
var top=0;
var bg=qx.dom.Node.getDocument(bf).body;
var bh=qx.bom.element.BoxSizing;

if(bh.get(bf)!==c){bj-=this.__hn(bf,i);
top-=this.__hn(bf,j);
}
while(bf&&bf!==bg){bj+=bf.offsetLeft;
top+=bf.offsetTop;
if(bh.get(bf)!==c){bj+=this.__hn(bf,i);
top+=this.__hn(bf,j);
}if(bf.parentNode&&this.__hm(bf.parentNode,n)!=v){bj+=this.__hn(bf.parentNode,i);
top+=this.__hn(bf.parentNode,j);
}bf=bf.offsetParent;
}}return {left:bj,top:top};
},"default":function(bk){var bm=0;
var top=0;
var bl=qx.dom.Node.getDocument(bk).body;
while(bk&&bk!==bl){bm+=bk.offsetLeft;
top+=bk.offsetTop;
bk=bk.offsetParent;
}return {left:bm,top:top};
}}),get:function(bn,bo){if(bn.tagName==u){var location=this.__hr(bn);
var bv=location.left;
var top=location.top;
}else{var bp=this.__hp(bn);
var bu=this.__hq(bn);
var scroll=this.__ho(bn);
var bv=bu.left+bp.left-scroll.left;
var top=bu.top+bp.top-scroll.top;
}var bq=bv+bn.offsetWidth;
var br=top+bn.offsetHeight;

if(bo){if(bo==B||bo==e){var bs=qx.bom.element.Overflow.getX(bn);

if(bs==e||bs==C){bq+=bn.scrollWidth-bn.offsetWidth+this.__hn(bn,i)+this.__hn(bn,a);
}var bt=qx.bom.element.Overflow.getY(bn);

if(bt==e||bt==C){br+=bn.scrollHeight-bn.offsetHeight+this.__hn(bn,j)+this.__hn(bn,b);
}}
switch(bo){case B:bv+=this.__hn(bn,y);
top+=this.__hn(bn,r);
bq-=this.__hn(bn,k);
br-=this.__hn(bn,q);
case e:bv-=bn.scrollLeft;
top-=bn.scrollTop;
bq-=bn.scrollLeft;
br-=bn.scrollTop;
case s:bv+=this.__hn(bn,i);
top+=this.__hn(bn,j);
bq-=this.__hn(bn,a);
br-=this.__hn(bn,b);
break;
case m:bv-=this.__hn(bn,g);
top-=this.__hn(bn,h);
bq+=this.__hn(bn,o);
br+=this.__hn(bn,w);
break;
}}return {left:bv,top:top,right:bq,bottom:br};
},__hr:qx.core.Environment.select(f,{"default":function(bw){var top=bw.offsetTop+this.__hn(bw,h);
var bx=bw.offsetLeft+this.__hn(bw,g);
return {left:bx,top:top};
},"mshtml":function(by){var top=by.offsetTop;
var bz=by.offsetLeft;

if(!((parseFloat(qx.core.Environment.get(d))<8||qx.core.Environment.get(l)<8)&&!qx.core.Environment.get(A))){top+=this.__hn(by,h);
bz+=this.__hn(by,g);
}return {left:bz,top:top};
},"gecko":function(bA){var top=bA.offsetTop+this.__hn(bA,h)+this.__hn(bA,i);
var bB=bA.offsetLeft+this.__hn(bA,g)+this.__hn(bA,j);
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
(function(){var t="Number",s="qx.event.type.Event",r="update",q="linear",p="reverse",o="Boolean",n="setup",m="none",l="qx.fx.Base",k="sinodial",d="flicker",j="pulse",g="_applyDuration",c="easeOutQuad",b="spring",f="easeInQuad",e="full",h="wobble",a="finish",i="Object";
qx.Class.define(l,{extend:qx.core.Object,construct:function(u){qx.core.Object.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__AY=qx.fx.Base.EffectState.IDLE;
this.__eN=u;
},events:{"setup":s,"update":s,"finish":s},properties:{duration:{init:0.5,check:t,apply:g},fps:{init:100,check:t},sync:{init:false,check:o},from:{init:0,check:t},to:{init:1,check:t},delay:{init:0.0,check:t},queue:{check:i,dereference:true},transition:{init:q,check:[q,f,c,k,p,d,h,j,b,m,e]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',RUNNING:'running'}},members:{__AY:null,__Ba:null,__Bb:null,__Bc:null,__Bd:null,__Be:null,__Bf:null,__Bg:null,__eN:null,_getElement:function(){return this.__eN;
},_setElement:function(v){this.__eN=v;
},_applyDuration:function(w,x){},init:function(){this.__AY=qx.fx.Base.EffectState.PREPARING;
this.__Ba=0;
this.__Bb=this.getDelay()*1000+(new Date().getTime());
this.__Bc=this.__Bb+(this.getDuration()*1000);
this.__Bd=this.getTo()-this.getFrom();
this.__Be=this.__Bc-this.__Bb;
this.__Bf=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(n);
},update:function(y){},finish:function(){this.fireEvent(a);
},start:function(){if(this.__AY!=qx.fx.Base.EffectState.IDLE){return false;
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
},render:function(z){if(this.__AY==qx.fx.Base.EffectState.PREPARING){this.__AY=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__AY==qx.fx.Base.EffectState.RUNNING){this.__Bg=qx.fx.Transition.get(this.getTransition())(z)*this.__Bd+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__Bg);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(r)){this.fireEvent(r);
}}},loop:function(A){if(A>=this.__Bb){if(A>=this.__Bc){this.end();
}var C=(A-this.__Bb)/this.__Be;
var B=Math.round(C*this.__Bf);
if(B>this.__Ba){this.render(C);
this.__Ba=B;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__AY=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__AY=qx.fx.Base.EffectState.IDLE;
},isActive:function(){return this.__AY===qx.fx.Base.EffectState.RUNNING||this.__AY===qx.fx.Base.EffectState.PREPARING;
}},destruct:function(){this.__eN=this.__AY=null;
}});
})();
(function(){var e="__default",d="qx.fx.queue.Manager",c="__fM",b="singleton",a="object";
qx.Class.define(d,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);
this.__fM={};
},members:{__fM:null,getQueue:function(f){if(typeof (this.__fM[f])==a){return this.__fM[f];
}else{return this.__fM[f]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(e);
}},destruct:function(){this._disposeMap(c);
}});
})();
(function(){var b="qx.fx.queue.Queue",a="Number";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__AO=[];
},properties:{limit:{init:Infinity,check:a}},members:{__AP:null,__AO:null,add:function(c){var d=new Date().getTime();
c._startOn+=d;
c._finishOn+=d;

if(this.__AO.length<this.getLimit()){this.__AO.push(c);
}else{c.resetState();
}
if(!this.__AP){this.__AP=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(e){qx.lang.Array.remove(this.__AO,e);

if(this.__AO.length==0){window.clearInterval(this.__AP);
delete this.__AP;
}},loop:function(){var f=new Date().getTime();

for(var i=0,g=this.__AO.length;i<g;i++){this.__AO[i]&&this.__AO[i].loop(f);
}}},destruct:function(){this.__AO=null;
}});
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
(function(){var i="position",h="px",g="relative",f="Number",e="absolute",d="top",c="left",b='absolute',a="qx.fx.effect.core.Move";
qx.Class.define(a,{extend:qx.fx.Base,properties:{mode:{init:g,check:[g,e]},x:{init:0,check:f},y:{init:0,check:f}},members:{__Eg:null,__Eh:null,__Ei:null,__Ej:null,__Ek:null,setup:function(){var j=this._getElement();
qx.fx.Base.prototype.setup.call(this);

if(j.parentNode){this.__Ei=qx.bom.element.Location.getLeft(j)-qx.bom.element.Location.getLeft(j.parentNode);
this.__Ej=qx.bom.element.Location.getTop(j)-qx.bom.element.Location.getTop(j.parentNode);
}else{this.__Ei=qx.bom.element.Location.getLeft(j);
this.__Ej=qx.bom.element.Location.getTop(j);
}this.__Ek=qx.bom.element.Style.get(j,i);
qx.bom.element.Style.set(j,i,e);

if(this.getMode()==b){this.__Eg=this.getX()-this.__Ei;
this.__Eh=this.getY()-this.__Ej;
}else{this.__Eg=this.getX();
this.__Eh=this.getY();
}},update:function(k){var m=this._getElement();
qx.fx.Base.prototype.update.call(this);
var l=Math.round(this.__Eg*k+this.__Ei);
var top=Math.round(this.__Eh*k+this.__Ej);
qx.bom.element.Style.set(m,c,l+h);
qx.bom.element.Style.set(m,d,top+h);
},afterFinishInternal:function(){qx.bom.element.Style.set(this._getElement(),i,this.__Ek);
}}});
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
}else if(this.isRgbString(m)){return this.__cY();
}else if(this.isHex3String(m)){return this.__db();
}else if(this.isHex6String(m)){return this.__dc();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__cY();
}else if(this.isRgbaString(n)){return this.__da();
}else if(this.isHex3String(n)){return this.__db();
}else if(this.isHex6String(n)){return this.__dc();
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
},__cY:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__da:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__db:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__dc:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__db(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__dc(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__db(P);
}
if(this.isHex6String(P)){return this.__dc(P);
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
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__dr={};
this.add(a,h);
},members:{__dr:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__dr[k]){return this.__dr[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__dr[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__dr[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__dr[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__dr){v[w]=this.__dr[w];
}return v;
}},destruct:function(){this.__dr=null;
}});
})();
(function(){var k="px",j="engine.name",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="b64",I="scale-y",H="qx/icon",G="repeat",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',r="qx.bom.element.Decoration",s="', sizingMethod='",p='"/>',q="png",n="')",o='"></div>',l='" style="',m="none",t="webkit",u=" ",w="repeat-x",v="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(r,{statics:{DEBUG:false,__iv:{},__iw:(qx.core.Environment.get(j)==c)&&qx.core.Environment.get(D)<9,__ix:qx.core.Environment.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iy:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(J,K,L,M){var O=this.getTagName(L,K);

if(O!=J.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var P=this.getAttributes(K,L,M);

if(O===h){J.src=P.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(J.style.backgroundPosition!=g&&P.style.backgroundPosition===undefined){P.style.backgroundPosition=null;
}if(J.style.clip!=g&&P.style.clip===undefined){P.style.clip=null;
}var N=qx.bom.element.Style;
N.setStyles(J,P.style);
if(this.__iw){try{J.filters[v].apply();
}catch(e){}}},create:function(Q,R,S){var T=this.getTagName(R,Q);
var V=this.getAttributes(Q,R,S);
var U=qx.bom.element.Style.compile(V.style);

if(T===h){return z+V.src+l+U+p;
}else{return B+U+o;
}},getTagName:function(W,X){if((qx.core.Environment.get(j)==c)){if(X&&this.__iw&&this.__ix[W]&&qx.lang.String.endsWith(X,F)){return i;
}}return this.__iy[W];
},getAttributes:function(Y,ba,bb){if(!bb){bb={};
}
if(!bb.position){bb.position=x;
}
if((qx.core.Environment.get(j)==c)){bb.fontSize=0;
bb.lineHeight=0;
}else if((qx.core.Environment.get(j)==t)){bb.WebkitUserDrag=m;
}var bd=qx.util.ResourceManager.getInstance().getImageFormat(Y)||qx.io.ImageLoader.getFormat(Y);
var bc;
if(this.__iw&&this.__ix[ba]&&bd===q){bc=this.__iB(bb,ba,Y);
}else{if(ba===b){bc=this.__iC(bb,ba,Y);
}else if(ba===d||ba===I){bc=this.__iD(bb,ba,Y);
}else{bc=this.__iG(bb,ba,Y);
}}return bc;
},__iz:function(be,bf,bh){if(be.width==null&&bf!=null){be.width=bf+k;
}
if(be.height==null&&bh!=null){be.height=bh+k;
}return be;
},__iA:function(bi){var bj=qx.util.ResourceManager.getInstance().getImageWidth(bi)||qx.io.ImageLoader.getWidth(bi);
var bk=qx.util.ResourceManager.getInstance().getImageHeight(bi)||qx.io.ImageLoader.getHeight(bi);
return {width:bj,height:bk};
},__iB:function(bl,bm,bn){var bq=this.__iA(bn);
bl=this.__iz(bl,bq.width,bq.height);
var bp=bm==f?E:b;
var bo=C+qx.util.ResourceManager.getInstance().toUri(bn)+s+bp+n;
bl.filter=bo;
bl.backgroundImage=bl.backgroundRepeat=g;
return {style:bl};
},__iC:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().toUri(bt);
var bv=this.__iA(bt);
br=this.__iz(br,bv.width,bv.height);
return {src:bu,style:br};
},__iD:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance();
var bC=bz.getCombinedFormat(by);
var bE=this.__iA(by);
var bA;

if(bC){var bD=bz.getData(by);
var bB=bD[4];

if(bC==a){bA=bz.toDataUri(by);
}else{bA=bz.toUri(bB);
}
if(bx===d){bw=this.__iE(bw,bD,bE.height);
}else{bw=this.__iF(bw,bD,bE.width);
}return {src:bA,style:bw};
}else{if(bx==d){bw.height=bE.height==null?null:bE.height+k;
}else if(bx==I){bw.width=bE.width==null?null:bE.width+k;
}bA=bz.toUri(by);
return {src:bA,style:bw};
}},__iE:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+k;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+k;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+k;
}return bF;
},__iF:function(bJ,bK,bL){var bM=qx.util.ResourceManager.getInstance().getImageWidth(bK[4]);
bJ.clip={left:-bK[5],width:bL};
bJ.width=bM+k;
if(bJ.left!=null){bJ.left=(parseInt(bJ.left,10)+bK[5])+k;
}else if(bJ.right!=null){bJ.right=(parseInt(bJ.right,10)+bL-bM-bK[5])+k;
}return bJ;
},__iG:function(bN,bO,bP){var bS=qx.util.ResourceManager.getInstance();
var bX=bS.getCombinedFormat(bP);
var ca=this.__iA(bP);
if(bX&&bO!==G){var bY=bS.getData(bP);
var bW=bY[4];

if(bX==a){var bV=bS.toDataUri(bP);
var bU=0;
var bT=0;
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
}else{bN=this.__iz(bN,ca.width,ca.height);
bN=this.__iH(bN,bP,bO);
return {style:bN};
}},__iH:function(cb,cc,cd){var top=null;
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
},__iI:function(ci){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ci)&&ci.indexOf(H)==-1){if(!this.__iv[ci]){qx.log.Logger.debug("Potential clipped image candidate: "+ci);
this.__iv[ci]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Environment.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__iw;
},"default":function(){return false;
}})}});
})();
(function(){var p="",o="/",n="mshtml",m="engine.name",l="io.ssl",k="string",j="//",i="?",h="data",g="type",c="data:image/",f=";",e="encoding",b="qx.util.ResourceManager",a="singleton",d=",";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
},statics:{__v:qx.$$resources||{},__dM:{}},members:{has:function(q){return !!this.self(arguments).__v[q];
},getData:function(r){return this.self(arguments).__v[r]||null;
},getImageWidth:function(s){var t=this.self(arguments).__v[s];
return t?t[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__v[u];
return v?v[1]:null;
},getImageFormat:function(w){var x=this.self(arguments).__v[w];
return x?x[2]:null;
},getCombinedFormat:function(y){var B=p;
var A=this.self(arguments).__v[y];
var z=A&&A.length>4&&typeof (A[4])==k&&this.constructor.__v[A[4]];

if(z){var D=A[4];
var C=this.constructor.__v[D];
B=C[2];
}return B;
},toUri:function(E){if(E==null){return E;
}var F=this.self(arguments).__v[E];

if(!F){return E;
}
if(typeof F===k){var H=F;
}else{var H=F[3];
if(!H){return E;
}}var G=p;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){G=this.self(arguments).__dM[H];
}return G+qx.$$libraries[H].resourceUri+o+E;
},toDataUri:function(I){var K=this.constructor.__v[I];
var L=this.constructor.__v[K[4]];
var M;

if(L){var J=L[4][I];
M=c+J[g]+f+J[e]+d+J[h];
}else{M=this.toUri(I);
}return M;
}},defer:function(N){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var R in qx.$$libraries){var P;

if(qx.$$libraries[R].resourceUri){P=qx.$$libraries[R].resourceUri;
}else{N.__dM[R]=p;
continue;
}if(P.match(/^\/\//)!=null){N.__dM[R]=window.location.protocol;
}else if(P.match(/^\//)!=null){N.__dM[R]=window.location.protocol+j+window.location.host;
}else if(P.match(/^\.\//)!=null){var O=document.URL;
N.__dM[R]=O.substring(0,O.lastIndexOf(o)+1);
}else if(P.match(/^http/)!=null){N.__dM[R]=p;
}else{var S=window.location.href.indexOf(i);
var Q;

if(S==-1){Q=window.location.href;
}else{Q=window.location.href.substring(0,S);
}N.__dM[R]=Q.substring(0,Q.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var c="engine.name",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__cN:{},__iJ:{width:null,height:null},__iK:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cN[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__cN[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__cN[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__cN[k];
return m?m.format:null;
},getSize:function(n){var o=this.__cN[n];
return o?{width:o.width,height:o.height}:this.__iJ;
},getWidth:function(p){var q=this.__cN[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__cN[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__cN[t];

if(!w){w=this.__cN[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__iL,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__cN[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__cN[z]=null;
},__iL:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__cN[E];
if(event.type===b){F.loaded=true;
F.width=this.__iM(D);
F.height=this.__iN(D);
var G=this.__iK.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__iM:qx.core.Environment.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__iN:qx.core.Environment.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__iO:[n,null,m,i,null,r,k,null,r],__iP:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__iQ:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__iR:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__iQ(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__iR(G)){G=q+G+q;
}var H=this.__iO;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__iP;
}var L=this.__iQ(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__iR(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__de:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__de=null;
},getInsets:function(){if(this.__de){return this.__de;
}var j=this._getDefaultInsets();
return this.__de={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){this.__de=null;
}},destruct:function(){this.__de=null;
}});
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
(function(){var q="other",p="widgets",o="undefined",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",c="Theme",e="meta",d="borders",b="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,r){if(!r){var r={};
}r.include=this.__ec(r.include);
r.patch=this.__ec(r.patch);
var s={$$type:c,name:name,title:r.title,toString:this.genericToString};
if(r.extend){s.supertheme=r.extend;
}s.basename=qx.Bootstrap.createNamespace(name,s);
this.__ef(s,r);
this.__ed(s,r);
this.$$registry[name]=s;
for(var i=0,a=r.include,l=a.length;i<l;i++){this.include(s,a[i]);
}
for(var i=0,a=r.patch,l=a.length;i<l;i++){this.patch(s,a[i]);
}},__ec:function(t){if(!t){return [];
}
if(qx.Bootstrap.isArray(t)){return t;
}else{return [t];
}},__ed:function(u,v){var w=v.aliases||{};

if(v.extend&&v.extend.aliases){qx.Bootstrap.objectMergeWith(w,v.extend.aliases,false);
}u.aliases=w;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__ee:function(x){for(var i=0,y=this.__eg,l=y.length;i<l;i++){if(x[y[i]]){return y[i];
}}},__ef:function(z,A){var D=this.__ee(A);
if(A.extend&&!D){D=A.extend.type;
}z.type=D||q;
var F=function(){};
if(A.extend){F.prototype=new A.extend.$$clazz;
}var E=F.prototype;
var C=A[D];
for(var B in C){E[B]=C[B];
if(E[B].base){E[B].base=A.extend;
}}z.$$clazz=F;
z[D]=new F;
},$$registry:{},__eg:[g,d,f,n,b,p,m,e],__o:null,__eh:null,__p:function(){},patch:function(G,H){this.__ei(H);
var J=this.__ee(H);

if(J!==this.__ee(G)){throw new Error("The mixins '"+G.name+"' are not compatible '"+H.name+"'!");
}var I=H[J];
var K=G.$$clazz.prototype;

for(var L in I){K[L]=I[L];
}},include:function(M,N){this.__ei(N);
var P=N.type;

if(P!==M.type){throw new Error("The mixins '"+M.name+"' are not compatible '"+N.name+"'!");
}var O=N[P];
var Q=M.$$clazz.prototype;

for(var R in O){if(Q[R]!==undefined){continue;
}Q[R]=O[R];
}},__ei:function(S){if(typeof S===o||S==null){var T;
var U=new Error("Mixin theme is not a valid theme!");
throw U;
}}}});
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
qx.Mixin.define(o,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__kF;
this._resizeBorder=this.__kE;
this._styleBorder=this.__kC;
this._generateMarkup=this.__kD;
},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[w,z,n,k],mode:a},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[u,v,x,r],mode:a}},members:{__kB:null,__kC:function(D){var E=qx.theme.manager.Color.getInstance();
D.position=t;
var F=this.getInnerWidthTop();

if(F>0){D[e]=F+j+this.getStyleTop()+i+E.resolve(this.getInnerColorTop());
}var F=this.getInnerWidthRight();

if(F>0){D[b]=F+j+this.getStyleRight()+i+E.resolve(this.getInnerColorRight());
}var F=this.getInnerWidthBottom();

if(F>0){D[c]=F+j+this.getStyleBottom()+i+E.resolve(this.getInnerColorBottom());
}var F=this.getInnerWidthLeft();

if(F>0){D[d]=F+j+this.getStyleLeft()+i+E.resolve(this.getInnerColorLeft());
}},__kD:function(G){var J=this._generateBackgroundMarkup(G);
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
return this.__kB=this._generateBackgroundMarkup(G,J);
},__kE:function(K,L,M){var N=this.getInsets();
L-=N.left+N.right;
M-=N.top+N.bottom;
var O=N.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=N.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:O,top:top,width:L,height:M,elementToApplyDimensions:K.firstChild};
},__kF:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var c="px",b="qx.ui.decoration.Background",a="absolute";
qx.Class.define(b,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(d){qx.ui.decoration.Abstract.call(this);

if(d!=null){this.setBackgroundColor(d);
}},members:{__kG:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__kG;
},getMarkup:function(e){if(this.__kG){return this.__kG;
}var f={position:a,top:0,left:0};
var g=this._generateBackgroundMarkup(f);
return this.__kG=g;
},resize:function(h,i,j){var k=this.getInsets();
h.style.width=(i-k.left-k.right)+c;
h.style.height=(j-k.top-k.bottom)+c;
h.style.left=-k.left+c;
h.style.top=-k.top+c;
},tint:function(l,m){this._tintBackgroundColor(l,m,l.style);
}},destruct:function(){this.__kG=null;
}});
})();
(function(){var j='"></div>',i="_applyStyle",h="1px",g='<div style="',f='border:',e="1px solid ",d="Color",c=";",b="px",a='</div>',x="qx.ui.decoration.Beveled",w="css.boxmodel",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="",r="content",q='border-left:',p='border-top:',o="Number",m='<div style="position:absolute;top:1px;left:0px;',n='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(y,z,A){qx.ui.decoration.Abstract.call(this);
if(y!=null){this.setOuterColor(y);
}
if(z!=null){this.setInnerColor(z);
}
if(A!=null){this.setInnerOpacity(A);
}},properties:{innerColor:{check:d,nullable:true,apply:i},innerOpacity:{check:o,init:1,apply:i},outerColor:{check:d,nullable:true,apply:i}},members:{__kG:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__kG;
},_applyStyle:function(){},getMarkup:function(){if(this.__kG){return this.__kG;
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
return this.__kG=C.join(s);
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
}},destruct:function(){this.__kG=null;
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
(function(){var o="Number",n="_applyInsets",m="-l",l="insetRight",k="insetTop",j="_applyBaseImage",i="insetBottom",h="-b",g="set",f="shorthand",c="-t",e="insetLeft",d="String",b="qx.ui.decoration.Grid",a="-r";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(p,q){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__kH=new qx.ui.decoration.css3.BorderImage();

if(p){this.__kI(p);
}}else{this.__kH=new qx.ui.decoration.GridDiv(p);
}
if(q!=null){this.__kH.setInsets(q);
}},properties:{baseImage:{check:d,nullable:true,apply:j},insetLeft:{check:o,nullable:true,apply:n},insetRight:{check:o,nullable:true,apply:n},insetBottom:{check:o,nullable:true,apply:n},insetTop:{check:o,nullable:true,apply:n},insets:{group:[k,l,i,e],mode:f}},members:{__kH:null,getMarkup:function(){return this.__kH.getMarkup();
},resize:function(r,s,t){this.__kH.resize(r,s,t);
},tint:function(u,v){},getInsets:function(){return this.__kH.getInsets();
},_applyInsets:function(w,x,name){var y=g+qx.lang.String.firstUp(name);
this.__kH[y](w);
},_applyBaseImage:function(z,A){if(this.__kH instanceof qx.ui.decoration.GridDiv){this.__kH.setBaseImage(z);
}else{this.__kI(z);
}},__kI:function(B){var G,H,J,I;
this.__kH.setBorderImage(B);
var L=qx.util.AliasManager.getInstance().resolve(B);
var M=/(.*)(\.[a-z]+)$/.exec(L);
var K=M[1];
var C=M[2];
var F=qx.util.ResourceManager.getInstance();
var N=F.getImageHeight(K+c+C);
var D=F.getImageWidth(K+a+C);
var E=F.getImageHeight(K+h+C);
var O=F.getImageWidth(K+m+C);
this.__kH.setSlice([N,D,E,O]);
}},destruct:function(){this.__kH=null;
}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(z,A){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setBorderImage(z);
}
if(A!=null){this.setSlice(A);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__kG:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__kG;
},getMarkup:function(){if(this.__kG){return this.__kG;
}var B=this._resolveImageUrl(this.getBorderImage());
var C=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var D=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__kG=[x,qx.bom.element.Style.compile({"borderImage":o+B+p+C.join(f)+f+D,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:C.join(b)+g}),y].join(q);
return this.__kG;
},resize:function(E,F,G){E.style.width=F+g;
E.style.height=G+g;
},tint:function(H,I){},_applyStyle:function(){},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__kG=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="engine.version",e="scale-x",d="scale-y",c="-tr",b="-l",a='</div>',z="scale",y="-br",x="-t",w="browser.quirksmode",v="-tl",u="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="qx.ui.decoration.GridDiv",n="-c",k="mshtml",l="engine.name";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBaseImage(A);
}
if(B!=null){this.setInsets(B);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{_markup:null,_images:null,_edges:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this._markup;
},getMarkup:function(){if(this._markup){return this._markup;
}var C=qx.bom.element.Decoration;
var D=this._images;
var E=this._edges;
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
return this._markup=F.join(o);
},resize:function(G,H,I){var J=this._edges;
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
var O=this._images={tl:Q+v+P,t:Q+x+P,tr:Q+c+P,bl:Q+p+P,b:Q+r+P,br:Q+y+P,l:Q+b+P,c:Q+n+P,r:Q+u+P};
this._edges=this._computeEdgeSizes(O);
}},_resolveImageUrl:function(T){return qx.util.AliasManager.getInstance().resolve(T);
},_computeEdgeSizes:function(U){var V=qx.util.ResourceManager.getInstance();
return {top:V.getImageHeight(U.t),bottom:V.getImageHeight(U.b),left:V.getImageWidth(U.l),right:V.getImageWidth(U.r)};
}},destruct:function(){this._markup=this._images=this._edges=null;
}});
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
(function(){var cJ="solid",cI="invalid",cH="scale",cG="border-main",cF="border-invalid",cE="shadow",cD="border-separator",cC="checkbox-hovered",cB="button-start",cA="button-end",bK="background-light",bJ="tabview-background",bI="repeat-x",bH="radiobutton",bG="button-css",bF="border-input",bE="border-inner-input",bD="border-inner-scrollbar",bC="radiobutton-checked",bB="window-border",cQ="tabview-inactive",cR="checkbox",cO="radiobutton-disabled",cP="radiobutton-hovered-invalid",cM="tabview-page-button-top-active-css",cN="button-border-disabled",cK="tabview-page-button-top-inactive-css",cL="decoration/form/input.png",cS="border-toolbar-border-inner",cT="input-css",cj="border-toolbar-button-outer",ci="border-disabled",cl="background-pane",ck="checkbox-disabled-border",cn="button-hovered-end",cm="repeat-y",cp="border-dragover",co="button-hovered-start",ch="progressive-table-header-border-right",cg="decoration/scrollbar/scrollbar-button-bg-vertical.png",k="radiobutton-background",l="checkbox-focus",m="scrollbar-slider-horizontal-css",n="menu-end",o="decoration/selection.png",p="horizontal",q="table-header-start",r="decoration/scrollbar/scrollbar-button-bg-horizontal.png",s="decoration/form/input-focused.png",t="checkbox-hovered-invalid",di="decoration/table/header-cell.png",dh="tabview-inactive-start",dg="table-header-end",df="border-button",dm="border-focused-invalid",dl="button-focused-css",dk="checkbox-border",dj="tabview-start",dp="checkbox-start",dn="decoration/tabview/tab-button-top-active.png",bb="group-background",bc="decoration/form/button-c.png",Y="keyboard-focus",ba="button-disabled-start",bf="selected-end",bg="table-header-hovered",bd="decoration/groupbox/groupbox.png",be="decoration/pane/pane.png",W="decoration/menu/background.png",X="tooltip-error",J="decoration/toolbar/toolbar-part.gif",I="input-focused-css",L="decoration/menu/bar-background.png",K="window-border-caption",F="radiobutton-hovered",E="decoration/tabview/tab-button-bottom-active.png",H="radiobutton-checked-focused",G="groupitem-end",D="button-disabled-css",C="group-border",bl="scrollbar-slider-vertical-css",bm="decoration/form/button-checked.png",bn="window-css",bo="selected-start",bh="window-resize-frame-css",bi="tabview-end",bj="window-statusbar-background",bk="decoration/scrollbar/scrollbar-bg-vertical.png",bp="button-pressed-css",bq="toolbar-button-hovered-css",T="window-caption-active-end",S="dotted",R="checkbox-disabled-end",Q="window-caption-active-start",P="button-focused",O="menu-start",N="decoration/form/tooltip-error.png",M="window-captionbar-active-css",V="qx/decoration/Modern",U="border-toolbar-separator-left",br="decoration/scrollbar/scrollbar-bg-horizontal.png",bs="decoration/tabview/tab-button-left-active.png",bt="decoration/tabview/tab-button-right-inactive.png",bu="decoration/tabview/tab-button-bottom-inactive.png",bv="decoration/form/button-disabled.png",bw="decoration/form/button-pressed.png",bx="background-splitpane",by="decoration/form/button-checked-focused.png",bz="px",bA="decoration/window/statusbar.png",bO="input-border-disabled",bN="checkbox-inner",bM="scrollbar-horizontal-css",bL="button-disabled-end",bS="center",bR="toolbar-end",bQ="groupitem-start",bP="decoration/form/button-hovered.png",bU="checkbox-hovered-inner",bT="input-focused-start",cc="scrollbar-start",cd="scrollbar-slider-start",ca="radiobutton-checked-disabled",cb="checkbox-focused",bX="qx.theme.modern.Decoration",bY="decoration/form/button.png",bV="decoration/app-header.png",bW="decoration/form/button-focused.png",ce="radiobutton-checked-hovered",cf="button-hovered-css",ct="checkbox-disabled-inner",cs="border-toolbar-separator-right",cv="border-focused",cu="decoration/shadow/shadow.png",cx="scrollbar-end",cw="decoration/group-item.png",cz="window-caption-inactive-end",cy="checkbox-end",cr="tabview-inactive-end",cq="input-end",db="button-checked-focused-css",dc="decoration/tabview/tab-button-left-inactive.png",dd="input-focused-inner-invalid",de="menu-separator-top",cW="window-caption-inactive-start",cX="scrollbar-slider-end",cY="decoration/window/captionbar-inactive.png",da="decoration/tabview/tab-button-top-inactive.png",cU="pane-end",cV="input-focused-end",j="decoration/form/tooltip-error-arrow.png",i="menubar-start",h="toolbar-start",g="checkbox-disabled-start",f="radiobutton-focused",e="pane-start",d="table-focus-indicator",c="button-checked-css",b="decoration/form/button-checked-c.png",a="menu-separator-bottom",w="decoration/shadow/shadow-small.png",x="input-start",u="decoration/tabview/tabview-pane.png",v="decoration/window/captionbar-active.png",A="decoration/tabview/tab-button-right-active.png",B="no-repeat",y="decoration/toolbar/toolbar-gradient.png",z="checkbox-hovered-inner-invalid";
qx.Theme.define(bX,{aliases:{decoration:V},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:cG}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:o,backgroundRepeat:cH}},"selected-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bo,endColor:bf}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:o,backgroundRepeat:cH,bottom:[2,cJ,cp]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,cJ,cp]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:be,insets:[0,2,3,0]}},"pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:bJ,radius:3,shadowColor:cE,shadowBlurRadius:2,shadowLength:0,gradientStart:[e,0],gradientEnd:[cU,100]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd}},"group-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{backgroundColor:bb,radius:4,color:C,width:1}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cI,innerColor:bE,innerOpacity:0.5,backgroundImage:cL,backgroundRepeat:bI,backgroundColor:bK}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:Y,style:S}},"radiobutton":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:k,radius:5,width:1,innerWidth:2,color:dk,innerColor:k,shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:5}},"radiobutton-checked":{include:bH,style:{backgroundColor:bC}},"radiobutton-checked-focused":{include:bC,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:bC,style:{innerColor:cC}},"radiobutton-focused":{include:bH,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:bH,style:{backgroundColor:cC,innerColor:cC}},"radiobutton-disabled":{include:bH,style:{innerColor:cO,backgroundColor:cO,color:ck}},"radiobutton-checked-disabled":{include:cO,style:{backgroundColor:ca}},"radiobutton-invalid":{include:bH,style:{color:cI}},"radiobutton-checked-invalid":{include:bC,style:{color:cI}},"radiobutton-checked-focused-invalid":{include:H,style:{color:cI,shadowColor:cI}},"radiobutton-checked-hovered-invalid":{include:ce,style:{color:cI,innerColor:cP}},"radiobutton-focused-invalid":{include:f,style:{color:cI,shadowColor:cI}},"radiobutton-hovered-invalid":{include:F,style:{color:cI,innerColor:cP,backgroundColor:cP}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:cD}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cD}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[2,5,5,2]}},"tooltip-error-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:X,radius:4,shadowColor:cE,shadowBlurRadius:2,shadowLength:1}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:j,backgroundPositionY:bS,backgroundRepeat:B,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:cu,insets:[4,8,8,4]}},"shadow-window-css":{decorator:[qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{shadowColor:cE,shadowBlurRadius:2,shadowLength:1}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"popup-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:cG,shadowColor:cE,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:br,backgroundRepeat:bI}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bk,backgroundRepeat:cm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cH,outerColor:cG,innerColor:bD,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cH,outerColor:ci,innerColor:bD,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cg,backgroundRepeat:cH,outerColor:cG,innerColor:bD,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cg,backgroundRepeat:cH,outerColor:ci,innerColor:bD,innerOpacity:0.3}},"scrollbar-horizontal-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[cc,0],gradientEnd:[cx,100]}},"scrollbar-vertical-css":{include:bM,style:{orientation:p}},"scrollbar-slider-horizontal-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[cd,0],gradientEnd:[cX,100],color:cG,width:1}},"scrollbar-slider-vertical-css":{include:m,style:{orientation:p}},"scrollbar-slider-horizontal-disabled-css":{include:m,style:{color:cN}},"scrollbar-slider-vertical-disabled-css":{include:bl,style:{color:cN}},"button-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:df,width:1,startColor:cB,endColor:cA,startColorPosition:35,endColorPosition:100}},"button-disabled-css":{include:bG,style:{color:cN,startColor:ba,endColor:bL}},"button-hovered-css":{include:bG,style:{startColor:co,endColor:cn}},"button-checked-css":{include:bG,style:{endColor:cB,startColor:cA}},"button-pressed-css":{include:bG,style:{endColor:co,startColor:cn}},"button-focused-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:df,width:1,innerColor:P,innerWidth:2,startColor:cB,endColor:cA,startColorPosition:30,endColorPosition:100}},"button-checked-focused-css":{include:dl,style:{endColor:cB,startColor:cA}},"button-invalid-css":{include:bG,style:{color:cF}},"button-disabled-invalid-css":{include:D,style:{color:cF}},"button-hovered-invalid-css":{include:cf,style:{color:cF}},"button-checked-invalid-css":{include:c,style:{color:cF}},"button-pressed-invalid-css":{include:bp,style:{color:cF}},"button-focused-invalid-css":{include:dl,style:{color:cF}},"button-checked-focused-invalid-css":{include:db,style:{color:cF}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:bY,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:bv,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:bW,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bP,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bw,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:bm,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:by,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Single,style:{color:cI,width:1}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cI,innerColor:dm,insets:[0]}},"checkbox":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow],style:{width:1,color:dk,innerWidth:1,innerColor:bN,gradientStart:[dp,0],gradientEnd:[cy,100],shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:4}},"checkbox-hovered":{include:cR,style:{innerColor:bU,gradientStart:[cC,0],gradientEnd:[cC,100]}},"checkbox-focused":{include:cR,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:cR,style:{color:ck,innerColor:ct,gradientStart:[g,0],gradientEnd:[R,100]}},"checkbox-invalid":{include:cR,style:{color:cI}},"checkbox-hovered-invalid":{include:cC,style:{color:cI,innerColor:z,gradientStart:[t,0],gradientEnd:[t,100]}},"checkbox-focused-invalid":{include:cb,style:{color:cI,shadowColor:cI}},"input-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBackgroundColor],style:{color:bF,innerColor:bE,innerWidth:1,width:1,backgroundColor:bK,startColor:x,endColor:cq,startColorPosition:0,endColorPosition:12,colorPositionUnit:bz}},"border-invalid-css":{include:cT,style:{color:cF}},"input-focused-css":{include:cT,style:{startColor:bT,innerColor:cV,endColorPosition:4}},"input-focused-invalid-css":{include:I,style:{innerColor:dd,color:cF}},"input-disabled-css":{include:cT,style:{color:bO}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bF,innerColor:bE,innerOpacity:0.5,backgroundImage:cL,backgroundRepeat:bI,backgroundColor:bK}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bF,innerColor:cv,backgroundImage:s,backgroundRepeat:bI,backgroundColor:bK}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cI,innerColor:dm,backgroundImage:s,backgroundRepeat:bI,backgroundColor:bK,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:ci,innerColor:bE,innerOpacity:0.5,backgroundImage:cL,backgroundRepeat:bI,backgroundColor:bK}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:y,backgroundRepeat:cH}},"toolbar-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:40,endColorPosition:60,startColor:h,endColor:bR}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cj,innerColor:cS,backgroundImage:bc,backgroundRepeat:cH}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cj,innerColor:cS,backgroundImage:b,backgroundRepeat:cH}},"toolbar-button-hovered-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{color:cj,width:1,innerWidth:1,innerColor:cS,radius:2,gradientStart:[cB,30],gradientEnd:[cA,100]}},"toolbar-button-checked-css":{include:bq,style:{gradientStart:[cA,30],gradientEnd:[cB,100]}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:U,colorRight:cs,styleLeft:cJ,styleRight:cJ}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:J,backgroundRepeat:cm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:u,insets:[4,6,7,4]}},"tabview-pane-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MSingleBorder],style:{width:1,color:bB,radius:3,gradientStart:[dj,90],gradientEnd:[bi,100]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:dn}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:da}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:E}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bu}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bs}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:dc}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bt}},"tabview-page-button-top-active-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{radius:[3,3,0,0],width:[1,1,0,1],color:bJ,backgroundColor:dj,shadowLength:1,shadowColor:cE,shadowBlurRadius:2}},"tabview-page-button-top-inactive-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{radius:[3,3,0,0],color:cQ,colorBottom:bJ,width:1,gradientStart:[dh,0],gradientEnd:[cr,100]}},"tabview-page-button-bottom-active-css":{include:cM,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:dh}},"tabview-page-button-bottom-inactive-css":{include:cK,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:cQ,colorTop:bJ}},"tabview-page-button-left-active-css":{include:cM,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive-css":{include:cK,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:cQ,colorRight:bJ}},"tabview-page-button-right-active-css":{include:cM,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive-css":{include:cK,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:cQ,colorLeft:bJ}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:cl,width:3,color:bx,style:cJ}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:cl,width:1,color:cG,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:v}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:cY}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:bA}},"window-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:cE}},"window-incl-statusbar-css":{include:bn,style:{radius:[5,5,5,5]}},"window-resize-frame-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],width:1,color:cG}},"window-resize-frame-incl-statusbar-css":{include:bh,style:{radius:[5,5,5,5]}},"window-captionbar-active-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:bB,colorBottom:K,radius:[5,5,0,0],gradientStart:[Q,30],gradientEnd:[T,70]}},"window-captionbar-inactive-css":{include:M,style:{gradientStart:[cW,30],gradientEnd:[cz,70]}},"window-statusbar-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius],style:{backgroundColor:bj,width:[0,1,1,1],color:bB,radius:[0,0,5,5]}},"window-pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{backgroundColor:cl,width:1,color:bB,widthTop:0}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:cG,style:cJ}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cG,style:cJ}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:di,backgroundRepeat:cH,widthBottom:1,colorBottom:cG,style:cJ}},"table-scroller-header-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[dg,90],widthBottom:1,colorBottom:cG}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cD,styleRight:cJ}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cD,styleRight:cJ,widthBottom:1,colorBottom:bg,styleBottom:cJ}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:d,style:cJ}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:cG,style:cJ}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:di,backgroundRepeat:cH,widthRight:1,colorRight:ch,style:cJ}},"progressive-table-header-cell-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[dg,90],widthRight:1,colorRight:ch}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:W,backgroundRepeat:cH,width:1,color:cG,style:cJ}},"menu-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{gradientStart:[O,0],gradientEnd:[n,100],shadowColor:cE,shadowBlurRadius:2,shadowLength:1,width:1,color:cG}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:de,widthBottom:1,colorBottom:a}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:L,backgroundRepeat:cH,width:1,color:cD,style:cJ}},"menubar-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[i,0],gradientEnd:[n,100],width:1,color:cD}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bV,backgroundRepeat:cH}},"progressbar":{decorator:qx.ui.decoration.Single,style:{width:1,color:bF}},"group-item":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cw,backgroundRepeat:cH}},"group-item-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bQ,endColor:G}}}});
})();
(function(){var bB="white",bA="#EEEEEE",bz="#E4E4E4",by="#F3F3F3",bx="#F0F0F0",bw="#E8E8E8",bv="#CCCCCC",bu="#EFEFEF",bt="#1a1a1a",bs="#00204D",bh="gray",bg="#F4F4F4",bf="#fffefe",be="#AFAFAF",bd="#084FAB",bc="#FCFCFC",bb="#CCC",ba="#F2F2F2",Y="black",X="#ffffdd",bI="#b6b6b6",bJ="#004DAD",bG="#BABABA",bH="#005BC3",bE="#334866",bF="#CECECE",bC="#D9D9D9",bD="#D8D8D8",bK="#99C3FE",bL="#001533",bl="#B3B3B3",bk="#D5D5D5",bn="#C3C3C3",bm="#DDDDDD",bp="#FF9999",bo="css.rgba",br="#E8E8E9",bq="#084FAA",bj="#C5C5C5",bi="rgba(0, 0, 0, 0.4)",a="#DBDBDB",b="#4a4a4a",c="#83BAEA",d="#D7E7F4",e="#07125A",f="#FAF2F2",g="#87AFE7",h="#F7EAEA",i="#777D8D",j="#FBFBFB",bP="#CACACA",bO="#909090",bN="#9B9B9B",bM="#F0F9FE",bT="#314a6e",bS="#B4B4B4",bR="#787878",bQ="qx.theme.modern.Color",bV="#000000",bU="#26364D",H="#A7A7A7",I="#D1E4FF",F="#5CB0FD",G="#EAEAEA",L="#003B91",M="#80B4EF",J="#FF6B78",K="#949494",D="#808080",E="#930000",r="#7B7B7B",q="#C82C2C",t="#DFDFDF",s="#B6B6B6",n="#0880EF",m="#4d4d4d",p="#f4f4f4",o="#7B7A7E",l="#D0D0D0",k="#f8f8f8",R="#404955",S="#959595",T="#AAAAAA",U="#F7E9E9",N="#314A6E",O="#C72B2B",P="#FAFAFA",Q="#FBFCFB",V="#B2D2FF",W="#666666",B="#CBC8CD",A="#999999",z="#8EB8D6",y="#b8b8b8",x="#727272",w="#33508D",v="#F1F1F1",u="#990000",C="#00368A";
qx.Theme.define(bQ,{colors:{"background-application":t,"background-pane":by,"background-light":bc,"background-medium":bA,"background-splitpane":be,"background-tip":X,"background-tip-error":O,"background-odd":bz,"htmlarea-background":bB,"progressbar-background":bB,"text-light":bO,"text-gray":b,"text-label":bt,"text-title":bT,"text-input":bV,"text-hovered":bL,"text-disabled":o,"text-selected":bf,"text-active":bU,"text-inactive":R,"text-placeholder":B,"border-inner-scrollbar":bB,"border-main":m,"menu-separator-top":bj,"menu-separator-bottom":P,"border-separator":D,"border-toolbar-button-outer":bI,"border-toolbar-border-inner":k,"border-toolbar-separator-right":p,"border-toolbar-separator-left":y,"border-input":bE,"border-inner-input":bB,"border-disabled":s,"border-pane":bs,"border-button":W,"border-column":bv,"border-focused":bK,"invalid":u,"border-focused-invalid":bp,"border-dragover":w,"keyboard-focus":Y,"table-pane":by,"table-focus-indicator":n,"table-row-background-focused-selected":bd,"table-row-background-focused":M,"table-row-background-selected":bd,"table-row-background-even":by,"table-row-background-odd":bz,"table-row-selected":bf,"table-row":bt,"table-row-line":bb,"table-column-line":bb,"table-header-hovered":bB,"progressive-table-header":T,"progressive-table-header-border-right":ba,"progressive-table-row-background-even":bg,"progressive-table-row-background-odd":bz,"progressive-progressbar-background":bh,"progressive-progressbar-indicator-done":bv,"progressive-progressbar-indicator-undone":bB,"progressive-progressbar-percent-background":bh,"progressive-progressbar-percent-text":bB,"selected-start":bJ,"selected-end":C,"tabview-background":e,"shadow":qx.core.Environment.get(bo)?bi:A,"pane-start":j,"pane-end":bx,"group-background":bw,"group-border":bS,"radiobutton-background":bu,"checkbox-border":N,"checkbox-focus":g,"checkbox-hovered":V,"checkbox-hovered-inner":I,"checkbox-inner":bA,"checkbox-start":bz,"checkbox-end":by,"checkbox-disabled-border":bR,"checkbox-disabled-inner":bP,"checkbox-disabled-start":l,"checkbox-disabled-end":bD,"checkbox-hovered-inner-invalid":f,"checkbox-hovered-invalid":U,"radiobutton-checked":bH,"radiobutton-disabled":bk,"radiobutton-checked-disabled":r,"radiobutton-hovered-invalid":h,"tooltip-error":q,"scrollbar-start":bv,"scrollbar-end":v,"scrollbar-slider-start":bA,"scrollbar-slider-end":bn,"button-border-disabled":S,"button-start":bx,"button-end":be,"button-disabled-start":bg,"button-disabled-end":bG,"button-hovered-start":bM,"button-hovered-end":z,"button-focused":c,"border-invalid":E,"input-start":bx,"input-end":Q,"input-focused-start":d,"input-focused-end":F,"input-focused-inner-invalid":J,"input-border-disabled":bN,"input-border-inner":bB,"toolbar-start":bu,"toolbar-end":bm,"window-border":bs,"window-border-caption":x,"window-caption-active-text":bB,"window-caption-active-start":bq,"window-caption-active-end":L,"window-caption-inactive-start":ba,"window-caption-inactive-end":a,"window-statusbar-background":bu,"tabview-start":bc,"tabview-end":bA,"tabview-inactive":i,"tabview-inactive-start":G,"tabview-inactive-end":bF,"table-header-start":bw,"table-header-end":bl,"menu-start":br,"menu-end":bC,"menubar-start":bw,"groupitem-start":H,"groupitem-end":K,"groupitem-text":bB,"virtual-row-layer-background-even":bB,"virtual-row-layer-background-odd":bB}});
})();
(function(){var eq="css.gradients",ep="widget",eo="atom",en="-css",em="button-frame",el="css.borderradius",ek="css.boxshadow",ej="main",ei="button",eh="bold",cC="text-selected",cB="label",cA="image",cz="text-disabled",cy="middle",cx="selected",cw="background-light",cv="groupbox",cu="decoration/arrows/down.png",ct="popup",ex="cell",ey="border-invalid",ev="input-disabled",ew="menu-button",et="input",eu="input-focused-invalid",er="toolbar-button",es="spinner",ez="input-focused",eA="tooltip",dI="qx/static/blank.gif",dH="radiobutton",dK="list",dJ="tree-item",dM="combobox",dL="treevirtual-contract",dO="scrollbar",dN="datechooser/nav-button",dF="center",dE="checkbox",v="treevirtual-expand",w="",x="textfield",y="-invalid",z="decoration/arrows/right.png",A="background-application",B="invalid",C="right-top",D="selectbox",E="text-title",eO="icon/16/places/folder-open.png",eN="radiobutton-hovered",eM="group-item",eL="scrollbar/button",eS="right",eR="combobox/button",eQ="virtual-list",eP="icon/16/places/folder.png",eU="radiobutton-checked-focused",eT="text-label",bz="decoration/tree/closed.png",bA="table-scroller-header",bx="scrollbar-slider-horizontal",by="checkbox-hovered",bD="checkbox-checked",bE="decoration/arrows/left.png",bB="radiobutton-checked",bC="button-focused",bv="text-light",bw="menu-slidebar-button",bb="tree",ba="checkbox-undetermined",bd="table-scroller-header-css",bc="text-input",W="slidebar/button-forward",V="background-splitpane",Y="text-hovered",X=".png",U="decoration/tree/open.png",T="default",bK="decoration/arrows/down-small.png",bL="datechooser",bM="slidebar/button-backward",bN="radiobutton-checked-disabled",bG="checkbox-focused",bH="radiobutton-checked-hovered",bI="treevirtual-folder",bJ="shadow-popup",bO="icon/16/mimetypes/office-document.png",bP="background-medium",bo="icon/32/places/folder-open.png",bn="icon/22/places/folder-open.png",bm="table",bl="decoration/arrows/up.png",bk="decoration/form/",bj="radiobutton-focused",bi="button-checked",bh="decoration/window/maximize-active-hovered.png",bs="keyboard-focus",br="menu-css",bQ="decoration/cursors/",bR="icon/16/apps/office-calendar.png",bS="slidebar",bT="tooltip-error-arrow",bU="table-scroller-focus-indicator",bV="popup-css",bW="move-frame",bX="nodrop",bY="decoration/table/boolean-true.png",ca="-invalid-css",cK="menu",cJ="app-header",cI="row-layer",cH="text-inactive",cO="move",cN="decoration/window/restore-active-hovered.png",cM="border-separator",cL="shadow-window",cS="tree-folder",cR="window-pane-css",ds="right.png",dt="checkbox-undetermined-hovered",dq="window-incl-statusbar-css",dr="tabview-page-button-bottom-inactive",dn="tooltip-error",dp="window-css",dl="window-statusbar",dm="button-hovered",dA="decoration/scrollbar/scrollbar-",dB="background-tip",dT="menubar-css",dS="scrollbar-slider-horizontal-disabled",dV="radiobutton-disabled",dU="window-resize-frame-css",dX="button-pressed",dW="table-pane",ea="decoration/window/close-active.png",dY="native",dQ="button-invalid-shadow",dP="decoration/window/minimize-active-hovered.png",eH="menubar",eI="icon/16/actions/dialog-cancel.png",eJ="tabview-page-button-top-inactive",eK="tabview-page-button-left-inactive",eD="menu-slidebar",eE="toolbar-button-checked",eF="decoration/tree/open-selected.png",eG="decoration/window/minimize-inactive.png",eB="group-item-css",eC="group",k="tabview-page-button-right-inactive",j="decoration/window/minimize-active.png",i="decoration/window/restore-inactive.png",h="checkbox-checked-focused",g="splitpane",f="combobox/textfield",e="decoration/window/close-active-hovered.png",d="qx/icon/Tango/16/actions/window-close.png",c="checkbox-pressed",b="button-disabled",J="selected-dragover",K="tooltip-error-css",H="decoration/window/maximize-inactive.png",I="dragover",N="scrollarea",O="scrollbar-vertical",L="decoration/menu/checkbox-invert.gif",M="decoration/toolbar/toolbar-handle-knob.gif",Q="icon/22/mimetypes/office-document.png",R="table-header-cell",cW="button-checked-focused",cQ="up.png",de="best-fit",da="pane-css",cF="decoration/tree/closed-selected.png",cD="qx.theme.modern.Appearance",bf="text-active",cG="checkbox-disabled",bq="toolbar-button-hovered",bp="window-resize-frame-incl-statusbar-css",ck="decoration/form/checked.png",cl="progressive-table-header",cm="decoration/table/select-column-order.png",cn="decoration/menu/radiobutton.gif",co="decoration/arrows/forward.png",cp="decoration/table/descending.png",cq="decoration/form/undetermined.png",cr="tree-file",ch="window-captionbar-active",ci="checkbox-checked-hovered",cE="scrollbar-slider-vertical",dd="toolbar",dc="alias",db="decoration/window/restore-active.png",di="decoration/table/boolean-false.png",dh="icon/32/mimetypes/office-document.png",dg="tabview-pane",df="decoration/arrows/rewind.png",cY="top",cX="icon/16/actions/dialog-ok.png",P="progressbar-background",bu="table-header-cell-hovered",bt="window-statusbar-css",cP="window",bF="text-gray",cV="decoration/menu/radiobutton-invert.gif",cU="text-placeholder",cT="slider",be="toolbar-css",dk="keep-align",S="down.png",bg="groupitem-text",cb="tabview-page-button-top-active",cc="icon/22/places/folder.png",cd="decoration/window/maximize-active.png",ce="checkbox-checked-pressed",cf="decoration/window/close-inactive.png",cg="tabview-page-button-left-active",dD="toolbar-part",cj="decoration/splitpane/knob-vertical.png",ec=".gif",eb="table-statusbar",ee="progressive-table-header-cell-css",ed="window-captionbar-inactive",eg="copy",ef="decoration/arrows/down-invert.png",cs="decoration/menu/checkbox.gif",dR="window-caption-active-text",dj="decoration/splitpane/knob-horizontal.png",dG="group-css",F="icon/32/places/folder.png",G="toolbar-separator",dy="tabview-page-button-bottom-active",dz="decoration/arrows/up-small.png",dw="decoration/table/ascending.png",dx="decoration/arrows/up-invert.png",du="small",dv="tabview-page-button-right-active",a="-disabled",dC="scrollbar-horizontal",s="progressbar",r="checkbox-undetermined-focused",q="progressive-table-header-cell",p="menu-separator",o="tabview-pane-css",n="pane",m="htmlarea-background",l="decoration/arrows/right-invert.png",u="left.png",t="icon/16/actions/view-refresh.png";
qx.Theme.define(cD,{appearances:{"widget":{},"root":{style:function(eV){return {backgroundColor:A,textColor:eT,font:T};
}},"label":{style:function(eW){return {textColor:eW.disabled?cz:undefined};
}},"move-frame":{style:function(eX){return {decorator:ej};
}},"resize-frame":bW,"dragdrop-cursor":{style:function(eY){var fa=bX;

if(eY.copy){fa=eg;
}else if(eY.move){fa=cO;
}else if(eY.alias){fa=dc;
}return {source:bQ+fa+ec,position:C,offset:[2,16,2,6]};
}},"image":{style:function(fb){return {opacity:!fb.replacement&&fb.disabled?0.3:1};
}},"atom":{},"atom/label":cB,"atom/icon":cA,"popup":{style:function(fc){var fd=qx.core.Environment.get(ek);
return {decorator:fd?bV:ej,backgroundColor:cw,shadow:fd?undefined:bJ};
}},"button-frame":{alias:eo,style:function(fe){var fi,fh;
var ff=[3,9];

if(fe.checked&&fe.focused&&!fe.inner){fi=cW;
fh=undefined;
ff=[1,7];
}else if(fe.disabled){fi=b;
fh=undefined;
}else if(fe.pressed){fi=dX;
fh=Y;
}else if(fe.checked){fi=bi;
fh=undefined;
}else if(fe.hovered){fi=dm;
fh=Y;
}else if(fe.focused&&!fe.inner){fi=bC;
fh=undefined;
ff=[1,7];
}else{fi=ei;
fh=undefined;
}var fg;
if(qx.core.Environment.get(el)&&qx.core.Environment.get(eq)){if(fe.invalid&&!fe.disabled){fi+=ca;
}else{fi+=en;
}}else{fg=fe.invalid&&!fe.disabled?dQ:undefined;
ff=[2,8];
}return {decorator:fi,textColor:fh,shadow:fg,padding:ff,margin:[1,0]};
}},"button-frame/image":{style:function(fj){return {opacity:!fj.replacement&&fj.disabled?0.5:1};
}},"button":{alias:em,include:em,style:function(fk){return {center:true};
}},"hover-button":{alias:eo,include:eo,style:function(fl){var fm=fl.hovered?cx:undefined;

if(fm&&qx.core.Environment.get(eq)){fm+=en;
}return {decorator:fm,textColor:fl.hovered?cC:undefined};
}},"splitbutton":{},"splitbutton/button":ei,"splitbutton/arrow":{alias:ei,include:ei,style:function(fn,fo){return {icon:cu,padding:[fo.padding[0],fo.padding[1]-6],marginLeft:1};
}},"form-renderer-label":{include:cB,style:function(){return {paddingTop:4};
}},"checkbox":{alias:eo,style:function(fp){var fq=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var fs;

if(fq){if(fp.checked){fs=ck;
}else if(fp.undetermined){fs=cq;
}else{fs=dI;
}}else{if(fp.checked){if(fp.disabled){fs=bD;
}else if(fp.focused){fs=h;
}else if(fp.pressed){fs=ce;
}else if(fp.hovered){fs=ci;
}else{fs=bD;
}}else if(fp.undetermined){if(fp.disabled){fs=ba;
}else if(fp.focused){fs=r;
}else if(fp.hovered){fs=dt;
}else{fs=ba;
}}else if(!fp.disabled){if(fp.focused){fs=bG;
}else if(fp.pressed){fs=c;
}else if(fp.hovered){fs=by;
}}fs=fs||dE;
var fr=fp.invalid&&!fp.disabled?y:w;
fs=bk+fs+fr+X;
}return {icon:fs,minWidth:fq?14:undefined,gap:fq?8:6};
}},"checkbox/icon":{style:function(ft){var fv=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);

if(!fv){return {opacity:!ft.replacement&&ft.disabled?0.3:1};
}var fw;

if(ft.disabled){fw=cG;
}else if(ft.focused){fw=bG;
}else if(ft.hovered){fw=by;
}else{fw=dE;
}fw+=ft.invalid&&!ft.disabled?y:w;
var fu;
if(ft.undetermined){fu=[2,0];
}return {decorator:fw,padding:fu,width:12,height:10};
}},"radiobutton":{alias:eo,style:function(fx){var fy=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);
var fA;

if(fy){fA=dI;
}else{if(fx.checked&&fx.focused){fA=eU;
}else if(fx.checked&&fx.disabled){fA=bN;
}else if(fx.checked&&fx.hovered){fA=bH;
}else if(fx.checked){fA=bB;
}else if(fx.focused){fA=bj;
}else if(fx.hovered){fA=eN;
}else{fA=dH;
}var fz=fx.invalid&&!fx.disabled?y:w;
fA=bk+fA+fz+X;
}return {icon:fA,gap:fy?8:6};
}},"radiobutton/icon":{style:function(fB){var fC=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);

if(!fC){return {opacity:!fB.replacement&&fB.disabled?0.3:1};
}var fD;

if(fB.disabled&&!fB.checked){fD=dV;
}else if(fB.checked&&fB.focused){fD=eU;
}else if(fB.checked&&fB.disabled){fD=bN;
}else if(fB.checked&&fB.hovered){fD=bH;
}else if(fB.checked){fD=bB;
}else if(fB.focused){fD=bj;
}else if(fB.hovered){fD=eN;
}else{fD=dH;
}fD+=fB.invalid&&!fB.disabled?y:w;
return {decorator:fD,width:12,height:10};
}},"textfield":{style:function(fE){var fJ;
var fH=!!fE.focused;
var fI=!!fE.invalid;
var fF=!!fE.disabled;

if(fH&&fI&&!fF){fJ=eu;
}else if(fH&&!fI&&!fF){fJ=ez;
}else if(fF){fJ=ev;
}else if(!fH&&fI&&!fF){fJ=ey;
}else{fJ=et;
}
if(qx.core.Environment.get(eq)){fJ+=en;
}var fG;

if(fE.disabled){fG=cz;
}else if(fE.showingPlaceholder){fG=cU;
}else{fG=bc;
}return {decorator:fJ,padding:[2,4,1],textColor:fG};
}},"textarea":{include:x,style:function(fK){return {padding:4};
}},"spinner":{style:function(fL){var fP;
var fN=!!fL.focused;
var fO=!!fL.invalid;
var fM=!!fL.disabled;

if(fN&&fO&&!fM){fP=eu;
}else if(fN&&!fO&&!fM){fP=ez;
}else if(fM){fP=ev;
}else if(!fN&&fO&&!fM){fP=ey;
}else{fP=et;
}
if(qx.core.Environment.get(eq)){fP+=en;
}return {decorator:fP};
}},"spinner/textfield":{style:function(fQ){return {marginRight:2,padding:[2,4,1],textColor:fQ.disabled?cz:bc};
}},"spinner/upbutton":{alias:em,include:em,style:function(fR,fS){return {icon:dz,padding:[fS.padding[0]-1,fS.padding[1]-5],shadow:undefined,margin:0};
}},"spinner/downbutton":{alias:em,include:em,style:function(fT,fU){return {icon:bK,padding:[fU.padding[0]-1,fU.padding[1]-5],shadow:undefined,margin:0};
}},"datefield":dM,"datefield/button":{alias:eR,include:eR,style:function(fV){return {icon:bR,padding:[0,3],decorator:undefined};
}},"datefield/textfield":f,"datefield/list":{alias:bL,include:bL,style:function(fW){return {decorator:undefined};
}},"groupbox":{style:function(fX){return {legendPosition:cY};
}},"groupbox/legend":{alias:eo,style:function(fY){return {padding:[1,0,1,4],textColor:fY.invalid?B:E,font:eh};
}},"groupbox/frame":{style:function(ga){var gb=qx.core.Environment.get(el);
return {padding:gb?10:12,margin:gb?1:undefined,decorator:gb?dG:eC};
}},"check-groupbox":cv,"check-groupbox/legend":{alias:dE,include:dE,style:function(gc){return {padding:[1,0,1,4],textColor:gc.invalid?B:E,font:eh};
}},"radio-groupbox":cv,"radio-groupbox/legend":{alias:dH,include:dH,style:function(gd){return {padding:[1,0,1,4],textColor:gd.invalid?B:E,font:eh};
}},"scrollarea":{style:function(ge){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(gf){return {backgroundColor:A};
}},"scrollarea/pane":ep,"scrollarea/scrollbar-x":dO,"scrollarea/scrollbar-y":dO,"scrollbar":{style:function(gg){if(gg[dY]){return {};
}var gh=qx.core.Environment.get(eq);
var gi=gg.horizontal?dC:O;

if(gh){gi+=en;
}return {width:gg.horizontal?undefined:16,height:gg.horizontal?16:undefined,decorator:gi,padding:1};
}},"scrollbar/slider":{alias:cT,style:function(gj){return {padding:gj.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:em,style:function(gk){var gl=qx.core.Environment.get(eq);
var gm=gk.horizontal?bx:cE;

if(gk.disabled){gm+=a;
}
if(gl){gm+=en;
}return {decorator:gm,minHeight:gk.horizontal?undefined:9,minWidth:gk.horizontal?9:undefined,padding:undefined,margin:0};
}},"scrollbar/button":{alias:em,include:em,style:function(gn){var gq=dA;

if(gn.left){gq+=u;
}else if(gn.right){gq+=ds;
}else if(gn.up){gq+=cQ;
}else{gq+=S;
}var gp=qx.core.Environment.get(eq);

if(gn.left||gn.right){var go=gn.left?3:4;
return {padding:gp?[3,0,3,go]:[2,0,2,go],icon:gq,width:15,height:14,margin:0};
}else{return {padding:gp?3:[3,2],icon:gq,width:14,height:15,margin:0};
}}},"scrollbar/button-begin":eL,"scrollbar/button-end":eL,"slider":{style:function(gr){var gv;
var gt=!!gr.focused;
var gu=!!gr.invalid;
var gs=!!gr.disabled;

if(gt&&gu&&!gs){gv=eu;
}else if(gt&&!gu&&!gs){gv=ez;
}else if(gs){gv=ev;
}else if(!gt&&gu&&!gs){gv=ey;
}else{gv=et;
}
if(qx.core.Environment.get(eq)){gv+=en;
}return {decorator:gv};
}},"slider/knob":{include:em,style:function(gw){return {decorator:gw.disabled?dS:bx,shadow:undefined,height:14,width:14,padding:0};
}},"list":{alias:N,style:function(gx){var gB;
var gz=!!gx.focused;
var gA=!!gx.invalid;
var gy=!!gx.disabled;

if(gz&&gA&&!gy){gB=eu;
}else if(gz&&!gA&&!gy){gB=ez;
}else if(gy){gB=ev;
}else if(!gz&&gA&&!gy){gB=ey;
}else{gB=et;
}
if(qx.core.Environment.get(eq)){gB+=en;
}return {backgroundColor:cw,decorator:gB};
}},"list/pane":ep,"listitem":{alias:eo,style:function(gC){var gD;

if(gC.dragover){gD=gC.selected?J:I;
}else{gD=gC.selected?cx:undefined;

if(gD&&qx.core.Environment.get(eq)){gD+=en;
}}return {padding:gC.dragover?[4,4,2,4]:4,textColor:gC.selected?cC:undefined,decorator:gD};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:em,include:em,style:function(gE){return {padding:5,center:true,icon:gE.vertical?cu:z};
}},"slidebar/button-backward":{alias:em,include:em,style:function(gF){return {padding:5,center:true,icon:gF.vertical?bl:bE};
}},"tabview":{style:function(gG){return {contentPadding:16};
}},"tabview/bar":{alias:bS,style:function(gH){var gI=qx.core.Environment.get(el)&&qx.core.Environment.get(ek)&&qx.core.Environment.get(eq);
var gJ={marginBottom:gH.barTop?-1:0,marginTop:gH.barBottom?gI?-4:-7:0,marginLeft:gH.barRight?gI?-3:-5:0,marginRight:gH.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gH.barTop||gH.barBottom){gJ.paddingLeft=5;
gJ.paddingRight=7;
}else{gJ.paddingTop=5;
gJ.paddingBottom=7;
}return gJ;
}},"tabview/bar/button-forward":{include:W,alias:W,style:function(gK){if(gK.barTop||gK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bM,alias:bM,style:function(gL){if(gL.barTop||gL.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gM){var gN=qx.core.Environment.get(eq)&&qx.core.Environment.get(el);
return {decorator:gN?o:dg,minHeight:100,marginBottom:gM.barBottom?-1:0,marginTop:gM.barTop?-1:0,marginLeft:gM.barLeft?-1:0,marginRight:gM.barRight?-1:0};
}},"tabview-page":{alias:ep,include:ep,style:function(gO){var gP=qx.core.Environment.get(eq)&&qx.core.Environment.get(el);
return {padding:gP?[4,3]:undefined};
}},"tabview-page/button":{alias:eo,style:function(gQ){var gX,gT=0;
var gW=0,gR=0,gU=0,gV=0;
var gS=qx.core.Environment.get(el)&&qx.core.Environment.get(ek)&&qx.core.Environment.get(eq);

if(gQ.checked){if(gQ.barTop){gX=cb;
gT=gS?[5,11]:[6,14];
gU=gQ.firstTab?0:-5;
gV=gQ.lastTab?0:-5;
}else if(gQ.barBottom){gX=dy;
gT=gS?[5,11]:[6,14];
gU=gQ.firstTab?0:-5;
gV=gQ.lastTab?0:-5;
gW=3;
}else if(gQ.barRight){gX=dv;
gT=gS?[5,10]:[6,13];
gW=gQ.firstTab?0:-5;
gR=gQ.lastTab?0:-5;
gU=2;
}else{gX=cg;
gT=gS?[5,10]:[6,13];
gW=gQ.firstTab?0:-5;
gR=gQ.lastTab?0:-5;
}}else{if(gQ.barTop){gX=eJ;
gT=gS?[3,9]:[4,10];
gW=4;
gU=gQ.firstTab?5:1;
gV=1;
}else if(gQ.barBottom){gX=dr;
gT=gS?[3,9]:[4,10];
gR=4;
gU=gQ.firstTab?5:1;
gV=1;
gW=3;
}else if(gQ.barRight){gX=k;
gT=gS?[3,9]:[4,10];
gV=5;
gW=gQ.firstTab?5:1;
gR=1;
gU=3;
}else{gX=eK;
gT=gS?[3,9]:[4,10];
gU=5;
gW=gQ.firstTab?5:1;
gR=1;
gV=1;
}}
if(gX&&gS){gX+=en;
}return {zIndex:gQ.checked?10:5,decorator:gX,padding:gT,marginTop:gW,marginBottom:gR,marginLeft:gU,marginRight:gV,textColor:gQ.disabled?cz:gQ.checked?bf:cH};
}},"tabview-page/button/label":{alias:cB,style:function(gY){return {padding:[0,1,0,1],margin:gY.focused?0:1,decorator:gY.focused?bs:undefined};
}},"tabview-page/button/close-button":{alias:eo,style:function(ha){return {icon:d};
}},"toolbar":{style:function(hb){var hc=qx.core.Environment.get(eq);
return {decorator:hc?be:dd,spacing:2};
}},"toolbar/part":{style:function(hd){return {decorator:dD,spacing:2};
}},"toolbar/part/container":{style:function(he){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hf){return {source:M,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:eo,style:function(hg){var hi;

if(hg.pressed||(hg.checked&&!hg.hovered)||(hg.checked&&hg.disabled)){hi=eE;
}else if(hg.hovered&&!hg.disabled){hi=bq;
}var hh=qx.core.Environment.get(eq)&&qx.core.Environment.get(el);

if(hh&&hi){hi+=en;
}return {marginTop:2,marginBottom:2,padding:(hg.pressed||hg.checked||hg.hovered)&&!hg.disabled||(hg.disabled&&hg.checked)?3:5,decorator:hi};
}},"toolbar-menubutton":{alias:er,include:er,style:function(hj){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:cA,include:cA,style:function(hk){return {source:bK};
}},"toolbar-splitbutton":{style:function(hl){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:er,include:er,style:function(hm){return {icon:cu,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:er,include:er,style:function(hn){if(hn.pressed||hn.checked||(hn.hovered&&!hn.disabled)){var ho=1;
}else{var ho=3;
}return {padding:ho,icon:cu,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(hp){return {decorator:G,margin:7};
}},"tree":dK,"tree-item":{style:function(hq){var hr=hq.selected?cx:undefined;

if(hr&&qx.core.Environment.get(eq)){hr+=en;
}return {padding:[2,6],textColor:hq.selected?cC:undefined,decorator:hr};
}},"tree-item/icon":{include:cA,style:function(hs){return {paddingRight:5};
}},"tree-item/label":cB,"tree-item/open":{include:cA,style:function(ht){var hu;

if(ht.selected&&ht.opened){hu=eF;
}else if(ht.selected&&!ht.opened){hu=cF;
}else if(ht.opened){hu=U;
}else{hu=bz;
}return {padding:[0,5,0,2],source:hu};
}},"tree-folder":{include:dJ,alias:dJ,style:function(hv){var hx,hw;

if(hv.small){hx=hv.opened?eO:eP;
hw=eO;
}else if(hv.large){hx=hv.opened?bo:F;
hw=bo;
}else{hx=hv.opened?bn:cc;
hw=bn;
}return {icon:hx,iconOpened:hw};
}},"tree-file":{include:dJ,alias:dJ,style:function(hy){return {icon:hy.small?bO:hy.large?dh:Q};
}},"treevirtual":bm,"treevirtual-folder":{style:function(hz){return {icon:hz.opened?eO:eP};
}},"treevirtual-file":{include:bI,alias:bI,style:function(hA){return {icon:bO};
}},"treevirtual-line":{style:function(hB){return {icon:dI};
}},"treevirtual-contract":{style:function(hC){return {icon:U,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(hD){return {icon:bz,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":dL,"treevirtual-only-expand":v,"treevirtual-start-contract":dL,"treevirtual-start-expand":v,"treevirtual-end-contract":dL,"treevirtual-end-expand":v,"treevirtual-cross-contract":dL,"treevirtual-cross-expand":v,"treevirtual-end":{style:function(hE){return {icon:dI};
}},"treevirtual-cross":{style:function(hF){return {icon:dI};
}},"tooltip":{include:ct,style:function(hG){return {backgroundColor:dB,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":eo,"tooltip-error":{include:eA,style:function(hH){var hI=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);
return {textColor:cC,backgroundColor:undefined,placeMethod:ep,offset:[0,0,0,14],marginTop:-2,position:C,showTimeout:100,hideTimeout:10000,decorator:hI?K:dn,shadow:bT,font:eh,padding:hI?3:undefined};
}},"tooltip-error/atom":eo,"window":{style:function(hJ){var hL=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var hM;
var hK;

if(hL){if(hJ.showStatusbar){hM=dq;
}else{hM=dp;
}}else{hK=cL;
}return {decorator:hM,shadow:hK,contentPadding:[10,10,10,10],margin:hJ.maximized?0:[0,5,5,0]};
}},"window-resize-frame":{style:function(hN){var hO=qx.core.Environment.get(el);
var hP;

if(hO){if(hN.showStatusbar){hP=bp;
}else{hP=dU;
}}else{hP=ej;
}return {decorator:hP};
}},"window/pane":{style:function(hQ){var hR=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
return {decorator:hR?cR:cP};
}},"window/captionbar":{style:function(hS){var hT=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var hU=hS.active?ch:ed;

if(hT){hU+=en;
}return {decorator:hU,textColor:hS.active?dR:bF,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hV){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hW){return {alignY:cy,font:eh,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:eo,style:function(hX){return {icon:hX.active?hX.hovered?dP:j:eG,margin:[4,8,2,0]};
}},"window/restore-button":{alias:eo,style:function(hY){return {icon:hY.active?hY.hovered?cN:db:i,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:eo,style:function(ia){return {icon:ia.active?ia.hovered?bh:cd:H,margin:[4,8,2,0]};
}},"window/close-button":{alias:eo,style:function(ib){return {icon:ib.active?ib.hovered?e:ea:cf,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(ic){var id=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
return {padding:[2,6],decorator:id?bt:dl,minHeight:18};
}},"window/statusbar-text":{style:function(ie){return {font:du};
}},"iframe":{style:function(ig){return {decorator:ej};
}},"resizer":{style:function(ih){var ii=qx.core.Environment.get(ek)&&qx.core.Environment.get(el)&&qx.core.Environment.get(eq);
return {decorator:ii?da:n};
}},"splitpane":{style:function(ij){return {decorator:g};
}},"splitpane/splitter":{style:function(ik){return {width:ik.horizontal?3:undefined,height:ik.vertical?3:undefined,backgroundColor:V};
}},"splitpane/splitter/knob":{style:function(il){return {source:il.horizontal?dj:cj};
}},"splitpane/slider":{style:function(im){return {width:im.horizontal?3:undefined,height:im.vertical?3:undefined,backgroundColor:V};
}},"selectbox":em,"selectbox/atom":eo,"selectbox/popup":ct,"selectbox/list":{alias:dK},"selectbox/arrow":{include:cA,style:function(io){return {source:cu,paddingLeft:5};
}},"datechooser":{style:function(ip){var it;
var ir=!!ip.focused;
var is=!!ip.invalid;
var iq=!!ip.disabled;

if(ir&&is&&!iq){it=eu;
}else if(ir&&!is&&!iq){it=ez;
}else if(iq){it=ev;
}else if(!ir&&is&&!iq){it=ey;
}else{it=et;
}
if(qx.core.Environment.get(eq)){it+=en;
}return {padding:2,decorator:it,backgroundColor:cw};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:em,alias:em,style:function(iu){var iv={padding:[2,4],shadow:undefined};

if(iu.lastYear){iv.icon=df;
iv.marginRight=1;
}else if(iu.lastMonth){iv.icon=bE;
}else if(iu.nextYear){iv.icon=co;
iv.marginLeft=1;
}else if(iu.nextMonth){iv.icon=z;
}return iv;
}},"datechooser/last-year-button-tooltip":eA,"datechooser/last-month-button-tooltip":eA,"datechooser/next-year-button-tooltip":eA,"datechooser/next-month-button-tooltip":eA,"datechooser/last-year-button":dN,"datechooser/last-month-button":dN,"datechooser/next-month-button":dN,"datechooser/next-year-button":dN,"datechooser/month-year-label":{style:function(iw){return {font:eh,textAlign:dF,textColor:iw.disabled?cz:undefined};
}},"datechooser/date-pane":{style:function(ix){return {textColor:ix.disabled?cz:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(iy){return {textColor:iy.disabled?cz:iy.weekend?bv:undefined,textAlign:dF,paddingTop:2,backgroundColor:bP};
}},"datechooser/week":{style:function(iz){return {textAlign:dF,padding:[2,4],backgroundColor:bP};
}},"datechooser/day":{style:function(iA){var iB=iA.disabled?undefined:iA.selected?cx:undefined;

if(iB&&qx.core.Environment.get(eq)){iB+=en;
}return {textAlign:dF,decorator:iB,textColor:iA.disabled?cz:iA.selected?cC:iA.otherMonth?bv:undefined,font:iA.today?eh:undefined,padding:[2,4]};
}},"combobox":{style:function(iC){var iG;
var iE=!!iC.focused;
var iF=!!iC.invalid;
var iD=!!iC.disabled;

if(iE&&iF&&!iD){iG=eu;
}else if(iE&&!iF&&!iD){iG=ez;
}else if(iD){iG=ev;
}else if(!iE&&iF&&!iD){iG=ey;
}else{iG=et;
}
if(qx.core.Environment.get(eq)){iG+=en;
}return {decorator:iG};
}},"combobox/popup":ct,"combobox/list":{alias:dK},"combobox/button":{include:em,alias:em,style:function(iH,iI){var iJ={icon:cu,padding:[iI.padding[0],iI.padding[1]-6],shadow:undefined,margin:undefined};

if(iH.selected){iJ.decorator=bC;
}return iJ;
}},"combobox/textfield":{include:x,style:function(iK){return {decorator:undefined};
}},"menu":{style:function(iL){var iM=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var iN={decorator:iM?br:cK,shadow:iM?undefined:bJ,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:iL.submenu||iL.contextmenu?de:dk};

if(iL.submenu){iN.position=C;
iN.offset=[-2,-3];
}return iN;
}},"menu/slidebar":eD,"menu-slidebar":ep,"menu-slidebar-button":{style:function(iO){var iP=iO.hovered?cx:undefined;

if(iP&&qx.core.Environment.get(eq)){iP+=en;
}return {decorator:iP,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:bw,style:function(iQ){return {icon:iQ.hovered?dx:bl};
}},"menu-slidebar/button-forward":{include:bw,style:function(iR){return {icon:iR.hovered?ef:cu};
}},"menu-separator":{style:function(iS){return {height:0,decorator:p,margin:[4,2]};
}},"menu-button":{alias:eo,style:function(iT){var iU=iT.selected?cx:undefined;

if(iU&&qx.core.Environment.get(eq)){iU+=en;
}return {decorator:iU,textColor:iT.selected?cC:undefined,padding:[4,6]};
}},"menu-button/icon":{include:cA,style:function(iV){return {alignY:cy};
}},"menu-button/label":{include:cB,style:function(iW){return {alignY:cy,padding:1};
}},"menu-button/shortcut":{include:cB,style:function(iX){return {alignY:cy,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:cA,style:function(iY){return {source:iY.selected?l:z,alignY:cy};
}},"menu-checkbox":{alias:ew,include:ew,style:function(ja){return {icon:!ja.checked?undefined:ja.selected?L:cs};
}},"menu-radiobutton":{alias:ew,include:ew,style:function(jb){return {icon:!jb.checked?undefined:jb.selected?cV:cn};
}},"menubar":{style:function(jc){var jd=qx.core.Environment.get(eq);
return {decorator:jd?dT:eH};
}},"menubar-button":{alias:eo,style:function(je){var jf=(je.pressed||je.hovered)&&!je.disabled?cx:undefined;

if(jf&&qx.core.Environment.get(eq)){jf+=en;
}return {decorator:jf,textColor:je.pressed||je.hovered?cC:undefined,padding:[3,8]};
}},"colorselector":ep,"colorselector/control-bar":ep,"colorselector/control-pane":ep,"colorselector/visual-pane":cv,"colorselector/preset-grid":ep,"colorselector/colorbucket":{style:function(jg){return {decorator:ej,width:16,height:16};
}},"colorselector/preset-field-set":cv,"colorselector/input-field-set":cv,"colorselector/preview-field-set":cv,"colorselector/hex-field-composite":ep,"colorselector/hex-field":x,"colorselector/rgb-spinner-composite":ep,"colorselector/rgb-spinner-red":es,"colorselector/rgb-spinner-green":es,"colorselector/rgb-spinner-blue":es,"colorselector/hsb-spinner-composite":ep,"colorselector/hsb-spinner-hue":es,"colorselector/hsb-spinner-saturation":es,"colorselector/hsb-spinner-brightness":es,"colorselector/preview-content-old":{style:function(jh){return {decorator:ej,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(ji){return {decorator:ej,backgroundColor:cw,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(jj){return {decorator:ej,margin:5};
}},"colorselector/brightness-field":{style:function(jk){return {decorator:ej,margin:[5,7]};
}},"colorselector/hue-saturation-pane":ep,"colorselector/hue-saturation-handle":ep,"colorselector/brightness-pane":ep,"colorselector/brightness-handle":ep,"colorpopup":{alias:ct,include:ct,style:function(jl){return {padding:5,backgroundColor:A};
}},"colorpopup/field":{style:function(jm){return {decorator:ej,margin:2,width:14,height:14,backgroundColor:cw};
}},"colorpopup/selector-button":ei,"colorpopup/auto-button":ei,"colorpopup/preview-pane":cv,"colorpopup/current-preview":{style:function(jn){return {height:20,padding:4,marginLeft:4,decorator:ej,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(jo){return {height:20,padding:4,marginRight:4,decorator:ej,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:ei,include:ei,style:function(jp){return {icon:cX};
}},"colorpopup/colorselector-cancelbutton":{alias:ei,include:ei,style:function(jq){return {icon:eI};
}},"table":{alias:ep,style:function(jr){return {decorator:bm};
}},"table/statusbar":{style:function(js){return {decorator:eb,padding:[0,2]};
}},"table/column-button":{alias:em,style:function(jt){var ju=qx.core.Environment.get(eq);
return {decorator:ju?bd:bA,padding:3,icon:cm};
}},"table-column-reset-button":{include:ew,alias:ew,style:function(){return {icon:t};
}},"table-scroller":ep,"table-scroller/scrollbar-x":dO,"table-scroller/scrollbar-y":dO,"table-scroller/header":{style:function(jv){var jw=qx.core.Environment.get(eq);
return {decorator:jw?bd:bA};
}},"table-scroller/pane":{style:function(jx){return {backgroundColor:dW};
}},"table-scroller/focus-indicator":{style:function(jy){return {decorator:bU};
}},"table-scroller/resize-line":{style:function(jz){return {backgroundColor:cM,width:2};
}},"table-header-cell":{alias:eo,style:function(jA){return {minWidth:13,minHeight:20,padding:jA.hovered?[3,4,2,4]:[3,4],decorator:jA.hovered?bu:R,sortIcon:jA.sorted?(jA.sortedAscending?dw:cp):undefined};
}},"table-header-cell/label":{style:function(jB){return {minWidth:0,alignY:cy,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(jC){return {alignY:cy,alignX:eS};
}},"table-header-cell/icon":{style:function(jD){return {minWidth:0,alignY:cy,paddingRight:5};
}},"table-editor-textfield":{include:x,style:function(jE){return {decorator:undefined,padding:[2,2],backgroundColor:cw};
}},"table-editor-selectbox":{include:D,alias:D,style:function(jF){return {padding:[0,2],backgroundColor:cw};
}},"table-editor-combobox":{include:dM,alias:dM,style:function(jG){return {decorator:undefined,backgroundColor:cw};
}},"progressive-table-header":{alias:ep,style:function(jH){return {decorator:cl};
}},"progressive-table-header-cell":{alias:eo,style:function(jI){var jJ=qx.core.Environment.get(eq);
return {minWidth:40,minHeight:25,paddingLeft:6,decorator:jJ?ee:q};
}},"app-header":{style:function(jK){return {font:eh,textColor:cC,padding:[8,12],decorator:cJ};
}},"app-header-label":cB,"virtual-list":dK,"virtual-list/row-layer":cI,"row-layer":ep,"group-item":{include:cB,alias:cB,style:function(jL){return {padding:4,decorator:qx.core.Environment.get(eq)?eB:eM,textColor:bg,font:eh};
}},"virtual-selectbox":D,"virtual-selectbox/dropdown":ct,"virtual-selectbox/dropdown/list":{alias:eQ},"virtual-combobox":dM,"virtual-combobox/dropdown":ct,"virtual-combobox/dropdown/list":{alias:eQ},"virtual-tree":{include:bb,alias:bb,style:function(jM){return {itemHeight:26};
}},"virtual-tree-folder":cS,"virtual-tree-file":cr,"column-layer":ep,"cell":{style:function(jN){return {textColor:jN.selected?cC:eT,padding:[3,6],font:T};
}},"cell-string":ex,"cell-number":{include:ex,style:function(jO){return {textAlign:eS};
}},"cell-image":ex,"cell-boolean":{include:ex,style:function(jP){return {iconTrue:bY,iconFalse:di};
}},"cell-atom":ex,"cell-date":ex,"cell-html":ex,"htmlarea":{"include":ep,style:function(jQ){return {backgroundColor:m};
}},"progressbar":{style:function(jR){return {decorator:s,padding:[1],backgroundColor:P,width:200,height:20};
}},"progressbar/progress":{style:function(jS){var jT=jS.disabled?eM:cx;

if(qx.core.Environment.get(eq)){jT+=en;
}return {decorator:jT};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b}});
})();
(function(){var t="os.version",s="os.name",r="win",q="7",p="vista",o="osx",n="Liberation Sans",m="Tahoma",l="sans-serif",k="Arial",d="Lucida Grande",j="Candara",g="Segoe UI",c="Consolas",b="monospace",f="Courier New",e="Lucida Console",h="Monaco",a="qx.theme.modern.Font",i="DejaVu Sans Mono";
qx.Theme.define(a,{fonts:{"default":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"bold":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l],bold:true},"small":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?11:10,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"monospace":{size:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[e,h]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[c]:[c,i,f,b]}}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();


qx.$$loader.init();


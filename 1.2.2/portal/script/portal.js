(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"portal.Application","qx.theme":"qx.theme.Modern","qx.version":"1.2.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"portal":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.2.2"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:portal.js"]],
  urisBefore : [],
  packageHashes : {"0":"6674b9fe3886"},
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

qx.$$packageData['6674b9fe3886']={"locales":{},"resources":{"portal/css/style.css":"portal","portal/data/boxData.js":"portal","qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"]},"translations":{}};
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
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}}});
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
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="portal.Application";
qx.Class.define(a,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);
{};
portal.box.Manager.getInstance().load();
portal.dragdrop.Manager.getInstance();
}}});
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
(function(){var m="groupBoxes",h="boxData",g="portal.box.Box",f="portal.box.Manager",e="qx.event.type.Event",d="boxes",c="_applyActiveBox",b="loaded",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__rv=[];
this.__rw=[];
this.__rx={};
},statics:{dataKeyRoot:h,dataKeyGroupBoxes:m,dataKeyBoxes:d},events:{"loaded":e},properties:{activeBox:{init:null,check:g,apply:c}},members:{__rv:null,__rw:null,__rx:null,_applyActiveBox:function(C,D){if(D!=null){D.setActive(false);
}C.setActive(true);
},load:function(){this.__ry(window[portal.box.Manager.dataKeyRoot]);
qx.event.Registration.fireEvent(this,b);
},__ry:function(n){var r,u,s,t,v,n;
var o=n[portal.box.Manager.dataKeyGroupBoxes];
var q=n[portal.box.Manager.dataKeyBoxes];
for(var u in o){r=o[u];
s=r.boxes;
u=r.id;
t={id:u,element:document.getElementById(u)};
this.__rw.push(t);
this.__rx[u]=[];
for(var k=0,l=s.length;k<l;k++){n=q[s[k]];
var p=document.getElementById(n.id);
var v=new portal.box.Box(n,p,null,u);
this.__rv.push(v);
this.__rx[u].push(v);
}}},getBoxes:function(){return this.__rv;
},getGroupBoxes:function(){return this.__rw;
},updateGroupBoxMembers:function(y,z,A){var B=qx.dom.Hierarchy.getElementIndex(A.getElement());
qx.lang.Array.remove(this.__rx[z],A);
qx.lang.Array.insertAt(this.__rx[y],A,B);
},getGroupBoxDataOfBox:function(w){for(var i=0,j=this.__rw.length,x;i<j;i++){x=this.__rx[this.__rw[i].id];

for(var k=0,l=x.length;k<l;k++){if(x[k].getId()===w){return this.__rw[i];
}}}return null;
}},destruct:function(){this.__rv=this.__rw=this.__rx=null;
}});
})();
(function(){var u="Boolean",t="<br/><br/>",s="border",r="portal.box.Box",q="click",p="1px solid #444444",o="height",n="position",m="zIndex",l="_applyActive",f="width",k="box_content",i=" It does contain no UI widget code at all.",d="relative",c="1px solid orange",h="This is a demo application showing the low-level capabilities.",g="div",j="String";
qx.Class.define(r,{extend:qx.core.Object,construct:function(v,w,x,y){qx.core.Object.call(this);
this.__rz=v;
this.__rA=v.id;

if(w!=null){qx.bom.element.Style.set(w,f,v.width);
qx.bom.element.Style.set(w,o,v.height);
this.__rD(w,x);
}this.setElement(w);
this.setGroupBoxId(y);
this.__rB=null;
this.__rC=null;
if(v.resizable){this.setResizable(true);
var z={minWidth:parseInt(v.minWidth),minHeight:parseInt(v.minHeight),maxWidth:parseInt(v.maxWidth),maxHeight:parseInt(v.maxHeight),handles:v.resizeHandles};
this.__rB=new portal.box.Resizable(this,z);
}if(v.draggable){this.setDraggable(true);
this.__rC=new portal.box.Draggable(this);
}this.__rE();
},properties:{element:{init:null},groupBoxId:{init:null,check:j},active:{check:u,init:false,apply:l},resizable:{check:u,init:false},draggable:{check:u,init:false}},members:{__rA:null,__rz:null,__rC:null,__rB:null,_applyActive:function(a,b){if(a){qx.bom.element.Style.set(this.getElement(),s,c);
}else{qx.bom.element.Style.set(this.getElement(),s,p);
}},getId:function(){return this.getElement()?this.getElement().id:null;
},getData:function(){return this.__rz;
},getDraggableComponent:function(){return this.__rC;
},getResizableComponent:function(){return this.__rB;
},__rD:function(A,B){if(B){for(var C in B){qx.bom.element.Style.set(C,B[C]);
}}qx.bom.element.Style.set(A,n,d);
qx.bom.element.Style.set(A,m,0);
qx.bom.Element.addListener(A,q,this.__rF,this,true);
},__rE:function(){var E=h+i;
E=E+t+E+t+E;
var D=qx.bom.Element.create(g,{"class":k});
D.innerHTML=E;
qx.dom.Element.insertEnd(D,this.getElement());
},__rF:function(e){portal.box.Manager.getInstance().setActiveBox(this);
}},destruct:function(){this.resetElement();
this.__rz=this.__rB=this.__rC=null;
}});
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
(function(){var v="visibility",u="hidden",t="mouseover",s="mouseout",r="visible",q="mousemove",p="orientation",o="south",n="mouseup",m="portal.box.Resizable",f='px',l="width",i="_",d="height",c="px",h="east",g="div",j="mousedown",b="southeast",k="Handle";
qx.Class.define(m,{extend:qx.core.Object,construct:function(P,Q){qx.core.Object.call(this);
this.__rG=P;
this.__rH=this.__rG.getElement();
this.__rI={};
this.__rJ=false;
this.__rK={orientation:null,lastCoord:{left:null,top:null}};
this.__rL={minWidth:10,minHeight:10,maxWidth:null,maxHeight:null,autoHide:true,handles:3};

for(var name in this.__rL){if(Q[name]){this.__rL[name]=Q[name];
}}this.__rM();
},members:{__rK:null,__rG:null,__rH:null,__rI:null,__rL:null,__rJ:false,getBox:function(){return this.__rG;
},__rM:function(){switch(this.__rL.handles){case 1:this.__rI.east=null;
break;
case 2:this.__rI.south=null;
break;
case 3:this.__rI.south=null;
this.__rI.southeast=null;
this.__rI.east=null;
break;
}for(var C in this.__rI){var B=this.__rI[C]=qx.bom.Element.create(g);
qx.bom.element.Attribute.set(B,p,C);
qx.dom.Element.insertEnd(B,this.__rH);

if(this.__rH.id){B.id=this.__rH.id+i+C;
}this.__rN(C);
this.__rO(C);
}},__rN:function(F){qx.bom.element.Class.add(this.__rI[F],F+k);
qx.bom.element.Style.set(this.__rI[F],v,this.__rL.autoHide?u:r);
},__rO:function(w){var y=qx.event.Registration;
var x=this.__rI[w];
y.addListener(x,j,this.__rR,this);
y.addListener(document,n,this.__rS,this);

if(this.__rL.autoHide){y.addListener(this.__rG.getElement(),t,this.__rP,this);
y.addListener(this.__rG.getElement(),s,this.__rQ,this);
}},__rP:function(e){for(var A in this.__rI){qx.bom.element.Style.set(this.__rI[A],v,r);
}},__rQ:function(e){if(!this.__rJ){for(var a in this.__rI){qx.bom.element.Style.set(this.__rI[a],v,u);
}}},__rR:function(e){e.stopPropagation();
if(e.isLeftPressed()){qx.event.Registration.addListener(document,q,this.__rT,this,true);
this.__rJ=true;
var z=e.getTarget();
this.__rK.orientation=qx.bom.element.Attribute.get(z,p);
this.__rK.lastCoord.left=e.getDocumentLeft();
this.__rK.lastCoord.top=e.getDocumentTop();
portal.box.Util.bringToFront(this.__rH);
}},__rS:function(e){e.stopPropagation();

if(this.__rJ){qx.event.Registration.removeListener(document,q,this.__rT,this,true);
portal.box.Util.sendToBack(this.__rH);

if(this.__rL.autoHide){for(var D in this.__rI){qx.bom.element.Style.set(this.__rI[D],v,u);
}}this.__rJ=false;
qx.bom.Selection.clear(document.body);
}},__rT:function(e){e.stopPropagation();

if(this.__rJ){var E={left:null,top:null};

switch(this.__rK.orientation){case o:E.top=e.getDocumentTop();
break;
case b:E.top=e.getDocumentTop();
E.left=e.getDocumentLeft();
break;
case h:E.left=e.getDocumentLeft();
break;
}this.__rU(E,this.__rK.lastCoord);
this.__rK.lastCoord.left=e.getDocumentLeft();
this.__rK.lastCoord.top=e.getDocumentTop();
}},__rU:function(G,H){var O=qx.bom.element.Dimension;
var L=portal.box.Manager.getInstance().getGroupBoxDataOfBox(this.__rG.getId());
var N=O.getContentSize(L.element);

if(G.left){var K=G.left-H.left;

if(K!==0){var J=O.getContentWidth(this.__rH)+K;
var M=O.getWidth(this.__rH)+K;

if((this.__rL.minWidth==null||J>this.__rL.minWidth)&&(this.__rL.maxWidth==null||J<=this.__rL.maxWidth)){if(N.width>=M){qx.bom.element.Style.set(this.__rH,l,J+f);
this.__rG.getData().width=J;
}}}}
if(G.top){var K=G.top-H.top;

if(K!==0){var I=O.getContentHeight(this.__rH)+K;

if((this.__rL.minHeight==null||I>this.__rL.minHeight)&&(this.__rL.maxHeight==null||I<=this.__rL.maxHeight)){qx.bom.element.Style.set(this.__rH,d,I+c);
}}}}},destruct:function(){if(this.__rL.autoHide){qx.event.Registration.removeListener(this.__rG.getElement(),t,this.__rP,this);
qx.event.Registration.removeListener(this.__rG.getElement(),s,this.__rQ,this);
}this.__rG=this.__rL=this.__rH=this.__rI=null;
this.__rK=null;
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
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__jY=k;
this.__ka=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jY:null,__ka:null,canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},destruct:function(){this.__jY=this.__ka=null;
},defer:function(j){qx.event.Registration.addHandler(j);
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
(function(){var a="qx.dom.Element";
qx.Class.define(a,{statics:{hasChild:function(parent,b){return b.parentNode===parent;
},hasChildren:function(m){return !!m.firstChild;
},hasChildElements:function(s){s=s.firstChild;

while(s){if(s.nodeType===1){return true;
}s=s.nextSibling;
}return false;
},getParentElement:function(w){return w.parentNode;
},isInDom:function(t,u){if(!u){u=window;
}var v=u.document.getElementsByTagName(t.nodeName);

for(var i=0,l=v.length;i<l;i++){if(v[i]===t){return true;
}}return false;
},insertAt:function(h,parent,j){var k=parent.childNodes[j];

if(k){parent.insertBefore(h,k);
}else{parent.appendChild(h);
}return true;
},insertBegin:function(d,parent){if(parent.firstChild){this.insertBefore(d,parent.firstChild);
}else{parent.appendChild(d);
}},insertEnd:function(g,parent){parent.appendChild(g);
},insertBefore:function(e,f){f.parentNode.insertBefore(e,f);
return true;
},insertAfter:function(x,y){var parent=y.parentNode;

if(y==parent.lastChild){parent.appendChild(x);
}else{return this.insertBefore(x,y.nextSibling);
}return true;
},remove:function(c){if(!c.parentNode){return false;
}c.parentNode.removeChild(c);
return true;
},removeChild:function(B,parent){if(B.parentNode!==parent){return false;
}parent.removeChild(B);
return true;
},removeChildAt:function(z,parent){var A=parent.childNodes[z];

if(!A){return false;
}parent.removeChild(A);
return true;
},replaceChild:function(n,o){if(!o.parentNode){return false;
}o.parentNode.replaceChild(n,o);
return true;
},replaceAt:function(p,q,parent){var r=parent.childNodes[q];

if(!r){return false;
}parent.replaceChild(p,r);
return true;
}}});
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
(function(){var n="default",m="native",k="",j=" ",h="\\b",g="(\\s|$)",f="(^|\\s)",e="g",d="qx.bom.element.Class",c="$2",b="\\b|\\b";
qx.Class.define(d,{statics:{__rV:/\s+/g,__rW:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(a,name){a.classList.add(name);
return name;
},"default":function(r,name){if(!this.has(r,name)){r.className+=(r.className?j:k)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(p,q){for(var i=0;i<q.length;i++){p.classList.add(q[i]);
}return p.className;
},"default":function(w,x){var y={};
var A;
var z=w.className;

if(z){A=z.split(this.__rV);

for(var i=0,l=A.length;i<l;i++){y[A[i]]=true;
}
for(var i=0,l=x.length;i<l;i++){if(!y[x[i]]){A.push(x[i]);
}}}else{A=x;
}return w.className=A.join(j);
}}),get:function(o){return o.className;
},has:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(s,name){return s.classList.contains(name);
},"default":function(B,name){var C=new RegExp(f+name+g);
return C.test(B.className);
}}),remove:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(v,name){v.classList.remove(name);
return name;
},"default":function(N,name){var O=new RegExp(f+name+g);
N.className=N.className.replace(O,c);
return name;
}}),removeClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(I,J){for(var i=0;i<J.length;i++){I.classList.remove(J[i]);
}return I.className;
},"default":function(D,E){var F=new RegExp(h+E.join(b)+h,e);
return D.className=D.className.replace(F,k).replace(this.__rW,k).replace(this.__rV,j);
}}),replace:function(K,L,M){this.remove(K,L);
return this.add(K,M);
},toggle:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(t,name,u){if(u===undefined){t.classList.toggle(name);
}else{u?this.add(t,name):this.remove(t,name);
}return name;
},"default":function(G,name,H){if(H==null){H=!this.has(G,name);
}H?this.add(G,name):this.remove(G,name);
return name;
}})}});
})();
(function(){var c="zIndex",b="portal.box.Util",a="auto";
qx.Class.define(b,{statics:{__rX:1000,bringToFront:function(d){var e=qx.bom.element.Style.get(d,c);
e=e==a?0:e;
qx.bom.element.Style.set(d,c,e+this.__rX);
},sendToBack:function(f){var g=qx.bom.element.Style.get(f,c);
qx.bom.element.Style.set(f,c,g-this.__rX);
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
(function(){var o="mousemove",n="mouseup",m="dragstart",l="mousedown",k="portal.box.Draggable",j="mouseover",i="drag",h="dragend",g="div",f="move",b="dragHandle",d="html",c="cursor",a="qx.client";
qx.Class.define(k,{extend:qx.core.Object,construct:function(q){qx.core.Object.call(this);
this.__rY=q;
this.__sa=q.getElement();
this.__sb=null;
this.__sc=null;
this.__sd();
},members:{__rY:null,__sa:null,__sb:null,__sc:null,getBox:function(){return this.__rY;
},getElement:function(){return this.__sa;
},__sd:function(){this.__se();
this.__sf();
},__se:function(){this.__sb=qx.bom.Element.create(g);
qx.bom.element.Class.add(this.__sb,b);
qx.dom.Element.insertBegin(this.__sb,this.__sa);
},__sf:function(){qx.bom.Element.addListener(this.__sb,l,this.__sg,this);
qx.bom.Element.addListener(this.__sb,j,function(e){qx.bom.element.Style.set(this,c,f);
},this.__sb);
qx.bom.Element.addListener(this.__sb,m,this.__sj,this);
qx.bom.Element.addListener(this.__sb,h,portal.dragdrop.Manager.getInstance().stopSession,portal.dragdrop.Manager.getInstance());
qx.bom.Element.addListener(this.__sb,i,this.__sk,this);
},__sg:function(e){if(e.isLeftPressed()){this.__sc={left:e.getDocumentLeft()-qx.bom.element.Location.getLeft(this.__sa),top:e.getDocumentTop()-qx.bom.element.Location.getTop(this.__sa)};
qx.bom.Element.addListener(document.body,n,this.__si,this,true);
this.__sh();
qx.event.Registration.fireEvent(this.__sb,m,qx.event.type.Event);
}},__sh:qx.core.Variant.select(a,{"mshtml":function(){var t=this;
var s=qx.lang.Function.bind(this.__si,t);
document.getElementsByTagName(d)[0].onmouseleave=s;
},"default":qx.lang.Function.empty}),__si:function(e){try{e.stopPropagation();
}catch(r){}
if(portal.dragdrop.Manager.getInstance().isSessionActive()){qx.event.Registration.removeListener(document.body,o,this.__sk,this,true);
portal.dragdrop.Manager.getInstance().stopSession();
}qx.bom.Element.removeListener(document.body,n,this.__si,this,true);
},__sj:function(e){portal.box.Manager.getInstance().setActiveBox(this.__rY);
portal.dragdrop.Manager.getInstance().startSession(this.__rY);
qx.event.Registration.addListener(document.body,o,this.__sk,this,true);
},__sk:function(e){e.stopPropagation();
var p=e.getDocumentLeft()-this.__sc.left;
var top=e.getDocumentTop()-this.__sc.top;
qx.event.Timer.once(function(){this.checkGroupBox(p,parseInt(this.getActiveBox().getData().width));
this.onDragMove(top,p);
},portal.dragdrop.Manager.getInstance(),0);
}},destruct:function(){this.__rY=this.__sb=this.__sa=this.__sc=null;
}});
})();
(function(){var A="px",z="px;",y="border",x="portal.box.Box",w="1px dashed red",v="top",u="Boolean",t="left",s="paddingTop",r="width:",k="height:",q="finish",n="opacity:0.5;margin:0;position:absolute;",g="left:",f="div",m="absolute",l="spring",o="paddingBottom",d="portal.dragdrop.Manager",p="singleton",h="top:";
qx.Class.define(d,{type:p,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__sl={top:null,height:null};
this.__sm={top:0,left:0};
},properties:{activeBox:{check:x,init:null,nullable:true},sessionActive:{check:u,init:false}},members:{__sl:null,__sn:null,__so:false,__sm:null,__sp:null,__sq:null,startSession:function(L){this.setSessionActive(true);
this.setActiveBox(L);
this.__sn=L.getGroupBoxId();
this.__sr();
if(this.__sp==null){this.__sp={};
var M=portal.box.Manager.getInstance().getGroupBoxes();

for(var i=0,j=M.length;i<j;i++){this.__sp[M[i].element.id]={left:qx.bom.element.Location.getLeft(M[i].element),right:qx.bom.element.Location.getLeft(M[i].element)+qx.bom.element.Dimension.getWidth(M[i].element)};
}}},__sr:function(){if(!this.__sq){this.__sq=qx.bom.Element.create(f);
}var S=this.getActiveBox().getElement();
var Q=qx.bom.element.Dimension.getContentSize(S);
this.__ss(S,this.__sq);
qx.bom.element.Class.add(this.__sq,qx.bom.element.Class.get(S));
var R=n+h+qx.bom.element.Location.getTop(S)+z+g+qx.bom.element.Location.getLeft(S)+z+r+Q.width+z+k+Q.height+A;
qx.bom.element.Style.setCss(this.__sq,R);
qx.bom.element.Style.set(S,y,w);
qx.dom.Node.getBodyElement(S).appendChild(this.__sq);
portal.box.Util.bringToFront(this.__sq);
},__ss:function(J,K){while(J.firstChild){K.appendChild(J.firstChild);
}},stopSession:function(e){this.setSessionActive(false);
var b=this.getActiveBox();
var c=b.getElement();
portal.box.Manager.getInstance().updateGroupBoxMembers(b.getGroupBoxId(),this.__sn,b);
b.setGroupBoxId(this.__sn);
var a=new qx.fx.effect.core.Move(this.__sq);
a.set({x:qx.bom.element.Location.getLeft(c),y:qx.bom.element.Location.getTop(c),mode:m,duration:0.5,transition:l});
a.start();
a.addListener(q,function(){this.__ss(this.__sq,c);
qx.bom.element.Style.reset(c,y);
this.__sq.parentNode.removeChild(this.__sq);

if(b.isActive()){b._applyActive(true);
}else{portal.box.Manager.getInstance().setActiveBox(b);
}},this);
},onDragMove:function(top,T){if(this.__sm.left!=T){qx.bom.element.Style.set(this.__sq,t,T+A);
}
if(this.__sm.top!=top){qx.bom.element.Style.set(this.__sq,v,top+A);
}var U=this.getActiveBox().getElement();

if(this.__sl.top==null){this.__sl.top=qx.bom.element.Location.getTop(U);
}
if(this.__sl.height==null){this.__sl.height=qx.bom.element.Dimension.getHeight(U);
}if(this.__so==false&&top>=this.__sl.top&&top<=(this.__sl.top+this.__sl.height)){return;
}var V;
if(this.__so){V=qx.dom.Hierarchy.getFirstDescendant(document.getElementById(this.__sn));
while(V!=null){if(this.__st(true,top,U,V)){this.__so=false;
return;
}V=qx.dom.Hierarchy.getNextElementSibling(V);
}}else{V=U;
}if(top-this.__sm.top>0){V=qx.dom.Hierarchy.getNextElementSibling(V);

while(V!=null){if(V){if(this.__st(true,top,U,V)){return;
}}V=qx.dom.Hierarchy.getNextElementSibling(V);
}}else{var V=qx.dom.Hierarchy.getPreviousElementSibling(V);

while(V!=null){if(V){if(this.__st(false,top,U,V)){return;
}}V=qx.dom.Hierarchy.getPreviousElementSibling(V);
}}this.__sm.left=T;
this.__sm.top=top;
},__st:function(B,top,C,D){var E=qx.bom.element.Location.getTop(D);
var G=parseInt(qx.bom.element.Style.get(D,s));
var H=parseInt(qx.bom.element.Style.get(D,o));
var F=qx.bom.element.Dimension.getContentHeight(D)+H+G;
var I;

if(B){if(top>=(E+(F/3))){I=qx.dom.Hierarchy.getNextElementSibling(D);

if(I!=C||I==null){qx.dom.Element.insertAfter(C,D);
this.__sl.top=qx.bom.element.Location.getTop(C);
}return true;
}}else{if(top<=(E+F*2/3)){I=qx.dom.Hierarchy.getPreviousElementSibling(D);

if(I!=C||I==null){qx.dom.Element.insertBefore(C,D);
this.__sl.top=qx.bom.element.Location.getTop(C);
}return true;
}}return false;
},checkGroupBox:function(N,O){if(this.__sp[this.__sn].left<=N&&this.__sp[this.__sn].right>=N){return;
}
for(var P in this.__sp){if(P!=this.__sn){if(this.__sp[P].left<=N+O&&this.__sp[P].right>=N){this.__sn=P;
this.__so=true;
return;
}}}}},destruct:function(){this.__sl=this.__sm=this.__sn=null;
this.__su=this.__sq=this.__sp=null;
}});
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
(function(){var t="Number",s="qx.event.type.Event",r="update",q="linear",p="reverse",o="Boolean",n="setup",m="none",l="qx.fx.Base",k="sinodial",d="flicker",j="pulse",g="_applyDuration",c="easeOutQuad",b="spring",f="easeInQuad",e="full",h="wobble",a="finish",i="Object";
qx.Class.define(l,{extend:qx.core.Object,construct:function(v){qx.core.Object.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__sv=qx.fx.Base.EffectState.IDLE;
this.__sw=v;
},events:{"setup":s,"update":s,"finish":s},properties:{duration:{init:0.5,check:t,apply:g},fps:{init:100,check:t},sync:{init:false,check:o},from:{init:0,check:t},to:{init:1,check:t},delay:{init:0.0,check:t},queue:{check:i,dereference:true},transition:{init:q,check:[q,f,c,k,p,d,h,j,b,m,e]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',FINISHED:'finished',RUNNING:'running'}},members:{__sv:null,__sx:null,__sy:null,__sz:null,__sA:null,__sB:null,__sC:null,__sD:null,__sw:null,_getElement:function(){return this.__sw;
},_setElement:function(w){this.__sw=w;
},_applyDuration:function(B,C){},init:function(){this.__sv=qx.fx.Base.EffectState.PREPARING;
this.__sx=0;
this.__sy=this.getDelay()*1000+(new Date().getTime());
this.__sz=this.__sy+(this.getDuration()*1000);
this.__sA=this.getTo()-this.getFrom();
this.__sB=this.__sz-this.__sy;
this.__sC=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(n);
},update:function(A){},finish:function(){this.fireEvent(a);
},start:function(){if(this.__sv!=qx.fx.Base.EffectState.IDLE){return false;
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
},render:function(u){if(this.__sv==qx.fx.Base.EffectState.PREPARING){this.__sv=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__sv==qx.fx.Base.EffectState.RUNNING){this.__sD=qx.fx.Transition.get(this.getTransition())(u)*this.__sA+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__sD);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(r)){this.fireEvent(r);
}}},loop:function(x){if(x>=this.__sy){if(x>=this.__sz){this.end();
}var z=(x-this.__sy)/this.__sB;
var y=Math.round(z*this.__sC);
if(y>this.__sx){this.render(z);
this.__sx=y;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__sv=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__sv=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this.__sw=this.__sv=null;
}});
})();
(function(){var i="position",h="px",g="relative",f="Number",e="absolute",d="top",c="left",b='absolute',a="qx.fx.effect.core.Move";
qx.Class.define(a,{extend:qx.fx.Base,properties:{mode:{init:g,check:[g,e]},x:{init:0,check:f},y:{init:0,check:f}},members:{__sE:null,__sF:null,__sG:null,__sH:null,__sI:null,setup:function(){var m=this._getElement();
qx.fx.Base.prototype.setup.call(this);

if(m.parentNode){this.__sG=qx.bom.element.Location.getLeft(m)-qx.bom.element.Location.getLeft(m.parentNode);
this.__sH=qx.bom.element.Location.getTop(m)-qx.bom.element.Location.getTop(m.parentNode);
}else{this.__sG=qx.bom.element.Location.getLeft(m);
this.__sH=qx.bom.element.Location.getTop(m);
}this.__sI=qx.bom.element.Style.get(m,i);
qx.bom.element.Style.set(m,i,e);

if(this.getMode()==b){this.__sE=this.getX()-this.__sG;
this.__sF=this.getY()-this.__sH;
}else{this.__sE=this.getX();
this.__sF=this.getY();
}},update:function(j){var l=this._getElement();
qx.fx.Base.prototype.update.call(this);
var k=Math.round(this.__sE*j+this.__sG);
var top=Math.round(this.__sF*j+this.__sH);
qx.bom.element.Style.set(l,c,k+h);
qx.bom.element.Style.set(l,d,top+h);
},afterFinishInternal:function(){qx.bom.element.Style.set(this._getElement(),i,this.__sI);
}}});
})();
(function(){var e="__default",d="__sJ",c="qx.fx.queue.Manager",b="singleton",a="object";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);
this.__sJ={};
},members:{__sJ:null,getQueue:function(f){if(typeof (this.__sJ[f])==a){return this.__sJ[f];
}else{return this.__sJ[f]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(e);
}},destruct:function(){this._disposeMap(d);
}});
})();
(function(){var b="qx.fx.queue.Queue",a="Number";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__sK=[];
},properties:{limit:{init:Infinity,check:a}},members:{__sL:null,__sK:null,add:function(c){var d=new Date().getTime();
c._startOn+=d;
c._finishOn+=d;

if(this.__sK.length<this.getLimit()){this.__sK.push(c);
}else{c.resetState();
}
if(!this.__sL){this.__sL=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(e){qx.lang.Array.remove(this.__sK,e);

if(this.__sK.length==0){window.clearInterval(this.__sL);
delete this.__sL;
}},loop:function(){var f=new Date().getTime();

for(var i=0,g=this.__sK.length;i<g;i++){this.__sK[i]&&this.__sK[i].loop(f);
}}},destruct:function(){this.__sK=null;
}});
})();
(function(){var c="Number",b="static",a="qx.fx.Transition";
qx.Class.define(a,{type:b,statics:{get:function(j){return qx.fx.Transition[j]||false;
},linear:function(i){return i;
},easeInQuad:function(g){return Math.pow(2,10*(g-1));
},easeOutQuad:function(e){return (-Math.pow(2,-10*e)+1);
},sinodial:function(p){return (-Math.cos(p*Math.PI)/2)+0.5;
},reverse:function(h){return 1-h;
},flicker:function(d){var d=((-Math.cos(d*Math.PI)/4)+0.75)+Math.random()/4;
return d>1?1:d;
},wobble:function(l){return (-Math.cos(l*Math.PI*(9*l))/2)+0.5;
},pulse:function(m,n){n=(typeof (n)==c)?n:5;
return (Math.round((m%(1/n))*n)==0?Math.floor((m*n*2)-(m*n*2)):1-Math.floor((m*n*2)-(m*n*2)));
},spring:function(k){return 1-(Math.cos(k*4.5*Math.PI)*Math.exp(-k*6));
},none:function(o){return 0;
},full:function(f){return 1;
}}});
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
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
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
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
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


qx.$$loader.init();


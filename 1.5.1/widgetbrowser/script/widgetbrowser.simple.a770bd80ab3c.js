qx.$$packageData['1024']={"locales":{},"resources":{"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"]},"translations":{}};
qx.Part.$$notifyLoad("1024", function() {
(function(){var c="",b="qx.ui.table.headerrenderer.Icon",a="String";
qx.Class.define(b,{extend:qx.ui.table.headerrenderer.Default,construct:function(d,e){qx.ui.table.headerrenderer.Default.call(this);

if(d==null){d=c;
}this.setIconUrl(d);

if(e){this.setToolTip(e);
}},properties:{iconUrl:{check:a,init:c}},members:{updateHeaderCell:function(f,g){qx.ui.table.headerrenderer.Default.prototype.updateHeaderCell.call(this,f,g);
g.setIcon(this.getIconUrl());
}}});
})();
(function(){var j="px",i="no-repeat",h="repeat",g="gecko",f="scale",e="string",d="static",c="'",b="qx.ui.table.cellrenderer.AbstractImage",a="}",A="  text-align:center;",z="scale-x",y="repeat-y",x=".qooxdoo-table-cell-icon {",w="",v="<div></div>",u="top",t="engine.version",s="engine.name",r="abstract",p=" qooxdoo-table-cell-icon",q="inline-block",n="repeat-x",o="  padding-top:1px;",l="title='",m="scale-y",k="-moz-inline-box";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.Abstract,type:r,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var B=this.self(arguments);

if(!B.stylesheet){B.stylesheet=qx.bom.Stylesheet.createElement(x+A+o+a);
}},properties:{repeat:{check:function(C){var D=[f,z,m,h,n,y,i];
return qx.lang.Array.contains(D,C);
},init:i}},members:{__qX:16,__qY:16,__ra:null,_insetY:2,_identifyImage:function(E){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(F){var G=this._identifyImage(F);
if(G==null||typeof G==e){G={url:G,tooltip:null};
}if(!G.imageWidth||!G.imageHeight){var H=this.__rb(G.url);
G.imageWidth=H.width;
G.imageHeight=H.height;
}G.width=G.imageWidth;
G.height=G.imageHeight;
return G;
},__rb:function(I){var L=qx.util.ResourceManager.getInstance();
var K=qx.io.ImageLoader;
var J,M;
if(L.has(I)){J=L.getImageWidth(I);
M=L.getImageHeight(I);
}else if(K.isLoaded(I)){J=K.getWidth(I);
M=K.getHeight(I);
}else{J=this.__qX;
M=this.__qY;
}return {width:J,height:M};
},createDataCellHtml:function(N,O){this.__ra=this._getImageInfos(N);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,N,O);
},_getCellClass:function(P){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+p;
},_getContentHtml:function(Q){var content=v;
if(this.__ra.url){content=qx.bom.element.Decoration.create(this.__ra.url,this.getRepeat(),{width:this.__ra.width+j,height:this.__ra.height+j,display:qx.core.Environment.get(s)==g&&qx.core.Environment.get(t)<1.9?k:q,verticalAlign:u,position:d});
}return content;
},_getCellAttributes:function(R){var S=this.__ra.tooltip;

if(S){return l+S+c;
}else{return w;
}}},destruct:function(){this.__ra=null;
}});
})();
(function(){var f="A date",e="Boolean",d="A number",c="icon/16/apps/office-calendar.png",b="ID",a="widgetbrowser.pages.Table";
qx.Class.define(a,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.initWidgets();
},members:{__LQ:0,initWidgets:function(){var g=this._widgets=new qx.type.Array();
var h=this.__sw();
h.setFocusedCell(2,5);
g.push(h);
this.add(h);
},__sw:function(){var k=this.__LR(50);
var j=new qx.ui.table.model.Simple();
j.setColumns([b,d,f,e]);
j.setData(k);
j.setColumnEditable(1,true);
j.setColumnEditable(2,true);
j.setColumnSortable(3,false);
var l=new qx.ui.table.Table(j);
l.set({width:600,height:400,decorator:null});
l.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
var i=l.getTableColumnModel();
i.setDataCellRenderer(3,new qx.ui.table.cellrenderer.Boolean());
i.setHeaderCellRenderer(2,new qx.ui.table.headerrenderer.Icon(c,f));
return l;
},__LR:function(m){var p=[];
var o=new Date().getTime();
var q=400*24*60*60*1000;

for(var r=0;r<m;r++){var n=new Date(o+Math.random()*q-q/2);
p.push([this.__LQ++,Math.random()*10000,n,(Math.random()>0.5)]);
}return p;
}}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__xW=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__xX:null,__xY:false,__xW:null,_applyIconTrue:function(h){this.__xX=this.__xW.resolve(h);
},_applyIconFalse:function(i){this.__xY=this.__xW.resolve(i);
},_insetY:5,_getCellStyle:function(j){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,j)+c;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__xX;
break;
case false:l.url=this.__xY;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__xW=null;
}});
})();

});
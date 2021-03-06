qx.$$packageData['32']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"],"widgetbrowser/blank.html":"widgetbrowser"},"translations":{}};
qx.Part.$$notifyLoad("32", function() {
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
if(f.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g,h){var i;

switch(g){case d:i=new qx.ui.basic.Image;
this._add(i);
break;
}return i||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,g);
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
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
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
(function(){var i="source",h="name",g="element",f="qx.event.type.Event",d="iframe",c="qx.html.Iframe",b="navigate",a="qx.event.type.Data";
qx.Class.define(c,{extend:qx.html.Element,construct:function(j,k,l){qx.html.Element.call(this,d,k,l);
this.setSource(j);
this.addListener(b,this.__HO,this);
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(g);
},events:{"load":f,"navigate":a},members:{_applyProperty:function(name,m){qx.html.Element.prototype._applyProperty.call(this,name,m);

if(name==i){var o=this.getDomElement();
var n=qx.bom.Iframe.queryCurrentUrl(o);
if(m===n){return;
}qx.bom.Iframe.setSource(o,m);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var p=this.getDomElement();

if(p){return qx.bom.Iframe.getWindow(p);
}else{return null;
}},getDocument:function(){var q=this.getDomElement();

if(q){return qx.bom.Iframe.getDocument(q);
}else{return null;
}},getBody:function(){var r=this.getDomElement();

if(r){return qx.bom.Iframe.getBody(r);
}else{return null;
}},setSource:function(s){this._setProperty(i,s,true);
return this;
},getSource:function(){return this._getProperty(i);
},setName:function(name){this.setAttribute(h,name);
return this;
},getName:function(){return this.getAttribute(h);
},reload:function(){var u=this.getDomElement();

if(u){var t=this.getSource();
this.setSource(null);
this.setSource(t);
}},__HO:function(e){var v=e.getData();

if(v){this.setSource(v);
}}}});
})();
(function(){var u="px",t="horizontal",s="top",r="height",q="width",p="100%",o="left",n="cursor",m="mshtml",l="engine.name",e="repeat",k="_applyOrientation",h="url(",c="qx.ui.splitpane.Blocker",b=")",g="col-resize",f="row-resize",i="div",a="vertical",j="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(v){var w={position:d,zIndex:11};
if((qx.core.Environment.get(l)==m)){w.backgroundImage=h+qx.util.ResourceManager.getInstance().toUri(j)+b;
w.backgroundRepeat=e;
}qx.html.Element.call(this,i,w);
if(v){this.setOrientation(v);
}else{this.initOrientation();
}},properties:{orientation:{init:t,check:[t,a],apply:k}},members:{_applyOrientation:function(x,y){if(x==t){this.setStyle(r,p);
this.setStyle(n,g);
this.setStyle(s,null);
}else{this.setStyle(q,p);
this.setStyle(o,null);
this.setStyle(n,f);
}},setWidth:function(z,A){var B=A+2*z;
this.setStyle(q,B+u);
},setHeight:function(C,D){var E=D+2*C;
this.setStyle(r,E+u);
},setLeft:function(F,G){var H=G-F;
this.setStyle(o,H+u);
},setTop:function(I,J){var top=J-I;
this.setStyle(s,top+u);
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
(function(){var k="slider",j="splitter",i="horizontal",h="px",g="vertical",f="knob",d="mousedown",c="mouseout",b="Integer",a="height",D="mousemove",C="move",B="maxHeight",A="resize",z="width",w="_applyOrientation",v="_applyOffset",u="splitpane",t="qx.ui.splitpane.Pane",s="top",q="minHeight",r="mouseup",o="minWidth",p="appear",m="losecapture",n="left",l="maxWidth";
qx.Class.define(t,{extend:qx.ui.core.Widget,construct:function(E){qx.ui.core.Widget.call(this);
this.__dS=[];
if(E){this.setOrientation(E);
}else{this.initOrientation();
}this.__jv.addListener(d,this._onMouseDown,this);
this.__jv.addListener(r,this._onMouseUp,this);
this.__jv.addListener(D,this._onMouseMove,this);
this.__jv.addListener(c,this._onMouseOut,this);
this.__jv.addListener(m,this._onMouseUp,this);
},properties:{appearance:{refine:true,init:u},offset:{check:b,init:6,apply:v},orientation:{init:i,check:[i,g],apply:w}},members:{__qH:null,__qI:false,__qJ:null,__qK:null,__lL:null,__qL:null,__qM:null,__dS:null,__jv:null,_createChildControlImpl:function(F,G){var H;

switch(F){case k:H=new qx.ui.splitpane.Slider(this);
H.exclude();
this._add(H,{type:F});
break;
case j:H=new qx.ui.splitpane.Splitter(this);
this._add(H,{type:F});
H.addListener(C,this.__qN,this);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},__qN:function(e){this.__qP(e.getData());
},__qO:function(I){this.__jv=new qx.ui.splitpane.Blocker(I);
this.getContentElement().add(this.__jv);
var J=this.getChildControl(j);
var K=J.getWidth();

if(!K){J.addListenerOnce(p,function(){this.__qP();
},this);
}J.addListener(A,function(e){var L=e.getData();

if(L.height==0||L.width==0){this.__jv.hide();
}else{this.__jv.show();
}},this);
},getBlocker:function(){return this.__jv;
},_applyOrientation:function(M,N){var O=this.getChildControl(k);
var R=this.getChildControl(j);
this.__lL=M===i;

if(!this.__jv){this.__qO(M);
}this.__jv.setOrientation(M);
var Q=this._getLayout();

if(Q){Q.dispose();
}var P=M===g?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(P);
R.removeState(N);
R.addState(M);
R.getChildControl(f).removeState(N);
R.getChildControl(f).addState(M);
O.removeState(N);
O.addState(M);
qx.ui.core.queue.Manager.flush();
this.__qP();
},_applyOffset:function(S,T){this.__qP();
},__qP:function(U){var V=this.getChildControl(j);
var ba=this.getOffset();
var bb=V.getBounds();
var Y=V.getContainerElement().getDomElement();
if(!Y){return;
}if(this.__lL){var X=null;

if(U){X=U.width;
}else if(bb){X=bb.width;
}var bc=U&&U.left;

if(X){if(isNaN(bc)){bc=qx.bom.element.Location.getPosition(Y).left;
}this.__jv.setWidth(ba,X);
this.__jv.setLeft(ba,bc);
}}else{var W=null;

if(U){W=U.height;
}else if(bb){W=bb.height;
}var top=U&&U.top;

if(W){if(isNaN(top)){top=qx.bom.element.Location.getPosition(Y).top;
}this.__jv.setHeight(ba,W);
this.__jv.setTop(ba,top);
}}},add:function(bd,be){if(be==null){this._add(bd);
}else{this._add(bd,{flex:be});
}this.__dS.push(bd);
},remove:function(bf){this._remove(bf);
qx.lang.Array.remove(this.__dS,bf);
},getChildren:function(){return this.__dS;
},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}var bg=this.getChildControl(j);
var bi=bg.getContainerLocation();
var bh=this.getContentLocation();
this.__qH=this.__lL?e.getDocumentLeft()-bi.left+bh.left:e.getDocumentTop()-bi.top+bh.top;
var bk=this.getChildControl(k);
var bj=bg.getBounds();
bk.setUserBounds(bj.left,bj.top,bj.width,bj.height);
bk.setZIndex(bg.getZIndex()+1);
bk.show();
this.__qI=true;
this.__jv.capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__qI){this.__qQ();
var bl=this.getChildControl(k);
var bm=this.__qL;

if(this.__lL){bl.setDomLeft(bm);
this.__jv.setStyle(n,(bm-this.getOffset())+h);
}else{bl.setDomTop(bm);
this.__jv.setStyle(s,(bm-this.getOffset())+h);
}e.stop();
}},_onMouseOut:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
},_onMouseUp:function(e){if(!this.__qI){return;
}this._finalizeSizes();
var bn=this.getChildControl(k);
bn.exclude();
this.__qI=false;
this.releaseCapture();
e.stop();
},_finalizeSizes:function(){var br=this.__qL;
var bo=this.__qM;

if(br==null){return;
}var bt=this._getChildren();
var bs=bt[2];
var bp=bt[3];
var bq=bs.getLayoutProperties().flex;
var bu=bp.getLayoutProperties().flex;
if((bq!=0)&&(bu!=0)){bs.setLayoutProperties({flex:br});
bp.setLayoutProperties({flex:bo});
}else{if(this.__lL){bs.setWidth(br);
bp.setWidth(bo);
}else{bs.setHeight(br);
bp.setHeight(bo);
}}},__qQ:function(){if(this.__lL){var bx=o,bE=z,by=l,bC=this.__qJ;
}else{var bx=q,bE=a,by=B,bC=this.__qK;
}var bD=this._getChildren();
var bv=bD[2].getSizeHint();
var bA=bD[3].getSizeHint();
var bB=bD[2].getBounds()[bE]+bD[3].getBounds()[bE];
var bz=bC-this.__qH;
var bw=bB-bz;
if(bz<bv[bx]){bw-=bv[bx]-bz;
bz=bv[bx];
}else if(bw<bA[bx]){bz-=bA[bx]-bw;
bw=bA[bx];
}if(bz>bv[by]){bw+=bz-bv[by];
bz=bv[by];
}else if(bw>bA[by]){bz+=bw-bA[by];
bw=bA[by];
}this.__qL=bz;
this.__qM=bw;
},_isActiveDragSession:function(){return this.__qI;
},_setLastMousePosition:function(x,y){this.__qJ=x;
this.__qK=y;
}},destruct:function(){this.__dS=null;
}});
})();
(function(){var f="splitter",e="horizontal",d="widgetbrowser.pages.EmbedFrame",c="Iframe",b="widgetbrowser/blank.html",a="ThemedIframe";
qx.Class.define(d,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.setLayout(new qx.ui.layout.Canvas(10));
this.initWidgets();
},members:{initWidgets:function(){var m=this._widgets;
var k,n,g;
var h=qx.util.ResourceManager.getInstance().toUri(b);
var j=new qx.ui.splitpane.Pane(e);
j.getChildControl(f).setBackgroundColor(null);
this.add(j);
k=new qx.ui.basic.Label(c);
n=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var l=new qx.ui.embed.Iframe().set({source:h,width:300,height:200});
m.push(l);
n.add(k,{top:0,left:5});
n.add(l,{top:20,left:0,right:0});
k=new qx.ui.basic.Label(a);
g=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var i=new qx.ui.embed.ThemedIframe().set({source:h,width:300,height:200});
m.push(i);
g.add(k,{top:0,left:5});
g.add(i,{top:20,left:0,right:0});
j.add(n);
j.add(g);
}}});
})();
(function(){var j="String",i="qx.ui.embed.AbstractIframe",h="name",g="",f="_applySource",d="navigate",c="qx.event.type.Event",b="_applyFrameName",a="qx.event.type.Data";
qx.Class.define(i,{extend:qx.ui.core.Widget,construct:function(k){qx.ui.core.Widget.call(this);

if(k){this.setSource(k);
}this._getIframeElement().addListener(d,this.__HO,this);
},events:{"load":c,"navigate":a},properties:{source:{check:j,apply:f,nullable:true},frameName:{check:j,init:g,apply:b}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(l,m){this._getIframeElement().setSource(l);
},_applyFrameName:function(n,o){this._getIframeElement().setAttribute(h,n);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
},__HO:function(e){var p=e.getData();

if(p){this.setSource(p);
}this.fireDataEvent("navigate",p);
}}});
})();
(function(){var t="auto",s="iframe",r="scrollbar-y",q="corner",p="on",o="scrollbar-x",n="scroll",m="hidden",l="_updateScrollbars",k="load",d="off",j="resize",h="horizontal",c="mousewheel",b="qx.ui.embed.ThemedIframe",g="scrollbarX",f="scrollbarY",i="scrollarea",a="vertical";
qx.Class.define(b,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.scroll.MWheelHandling,construct:function(u){qx.ui.embed.AbstractIframe.call(this,u);
var v=new qx.ui.layout.Grid();
v.setColumnFlex(0,1);
v.setRowFlex(0,1);
this._setLayout(v);
this._showChildControl(s);
},properties:{appearance:{refine:true,init:i},scrollbarX:{check:[t,p,d],init:t,themeable:true,apply:l},scrollbarY:{check:[t,p,d],init:t,themeable:true,apply:l},scrollbar:{group:[g,f]}},members:{__HP:null,__HQ:null,_getIframeElement:function(){return this.getChildControl(s).getContentElement();
},_createChildControlImpl:function(w,z){var A;

switch(w){case s:A=new qx.ui.embed.Iframe(this.getSource());
A.addListener(k,this._onIframeLoad,this);
A.addListener(j,this._onIframeResize,this);
this._add(A,{row:0,column:0});
break;
case o:A=new qx.ui.core.scroll.ScrollBar(h);
A.setMinWidth(0);
A.exclude();
A.addListener(n,this._onScrollBarX,this);
this._add(A,{row:1,column:0});
break;
case r:A=new qx.ui.core.scroll.ScrollBar(a);
A.setMinHeight(0);
A.exclude();
A.addListener(n,this._onScrollBarY,this);
this._add(A,{row:0,column:1});
break;
case q:A=new qx.ui.core.Widget();
A.setWidth(0);
A.setHeight(0);
A.exclude();
this._add(A,{row:1,column:1});
break;
}return A||qx.ui.embed.AbstractIframe.prototype._createChildControlImpl.call(this,w);
},_onIframeLoad:function(){this._disableScollbars();
var B=this._getIframeElement().getBody();

if(B){this._startIframeObserver();
this._addWheelListener();
}this.fireEvent(k);
},_onIframeResize:function(){this._updateScrollbars();
},_disableScollbars:function(){this._excludeChildControl(o);
this._excludeChildControl(r);
this._excludeChildControl(q);
this._stopIframeObserver();
},_addWheelListener:function(){try{var C=this._getIframeElement().getBody();
qx.bom.Element.addListener(C,c,this._onMouseWheel,this);
}catch(e){this._disableScollbars();
}},_startIframeObserver:function(){if(this.__HQ){this._stopIframeObserver();
}var D=qx.event.Idle.getInstance();
this.__HQ=D.addListener("interval",this._onIframeObserverInterval,this);
},_stopIframeObserver:function(){this.__HP=null;

if(!this.__HQ){return;
}var E=qx.event.Idle.getInstance();
E.removeListenerById(this.__HQ);
},_onIframeObserverInterval:function(){var F=this._getIframeSize();

if(!F){this._disableScollbars();
return;
}
if(this.__HP&&F.width==this.__HP.width&&F.height==this.__HP.height){return;
}this.__HP=F;
this._preventIframeScrolling();
this._updateScrollbars();
},_preventIframeScrolling:function(){try{var G=this._getIframeElement().getWindow();
var H=this._getIframeElement().getDocument();

if(qx.bom.Document.isStandardMode(G)){H.documentElement.style.overflow=m;
}else{H.body.style.overflow=m;
}}catch(e){this._disableScollbars();
}},_updateScrollbars:function(){var I=this.__HP;
var L=this.getChildControl(s).getBounds();
var J=this.getChildControl(s).getInnerSize();

if(!I||!J||!J){return;
}var K=false;
var O=false;
var M=this.getScrollbarX();
var N=this.getScrollbarY();

if(M===t&&N===t){var K=I.width>J.width;
var O=I.height>J.height;
if((K||O)&&!(K&&O)){if(K){O=I.height>L.height;
}else if(O){K=I.width>L.width;
}}}else{var K=M===p;
var O=N===p;
if(I.width>(K?L.width:J.width)&&M===t){K=true;
}
if(I.height>(K?L.height:J.height)&&N===t){O=true;
}}this._configureScrollbar(o,K,J.width,I.width);
this._configureScrollbar(r,O,J.height,I.height);
this._updateCornerWidget();
},_getIframeSize:function(){try{var P=this._getIframeElement().getWindow();
var Q={width:qx.bom.Document.getWidth(P),height:qx.bom.Document.getHeight(P)};
return Q;
}catch(e){return null;
}},_updateCornerWidget:function(){if(this._isChildControlVisible(o)&&this._isChildControlVisible(r)){this._showChildControl(q);
}else{this._excludeChildControl(q);
}},_configureScrollbar:function(R,S,T,U){if(!S){this._excludeChildControl(R);
return;
}var V=this._showChildControl(R);

if(T>=U){V.set({position:0,maximum:U,knobFactor:1,enabled:false});
}else{V.setMaximum(1000000);
V.set({position:Math.min(V.getPosition(),U),maximum:U-T,knobFactor:T/U,enabled:true});
}},_onScrollBarX:function(e){this.scrollToX(e.getData());
},_onScrollBarY:function(e){this.scrollToY(e.getData());
},scrollToX:function(x){try{var W=this._getIframeElement().getWindow();
W.scroll(x,qx.bom.Viewport.getScrollTop(W));
}catch(e){this._disableScollbars();
}},scrollToY:function(y){try{var X=this._getIframeElement().getWindow();
X.scroll(qx.bom.Viewport.getScrollLeft(X),y);
}catch(e){this._disableScollbars();
}}},destruct:function(){this._stopIframeObserver();
this.__HP=null;
}});
})();
(function(){var k="mousedown",j="load",i="help",h="mouseup",g="losecapture",f="contextmenu",d="none",c="display",b="no",a="Boolean",A="px",z="event.help",y="gecko",x="auto",w="_applyScrollbar",v="DOMNodeInserted",u="_applyNativeHelp",t="yes",s="scrolling",r="/",p="__tv",q="appear",n="engine.name",o="block",l="qx.ui.embed.Iframe",m="iframe";
qx.Class.define(l,{extend:qx.ui.embed.AbstractIframe,construct:function(B){if(B!=null){this.__HR=B;
}qx.ui.embed.AbstractIframe.call(this,B);
qx.event.Registration.addListener(document.body,k,this.block,this,true);
qx.event.Registration.addListener(document.body,h,this.release,this,true);
qx.event.Registration.addListener(document.body,g,this.release,this,true);
this.__tv=this._createBlockerElement();
this.getContainerElement().add(this.__tv);

if((qx.core.Environment.get(n)==y)){this.addListenerOnce(q,function(e){var C=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(C,v,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:a,init:false,apply:u},scrollbar:{check:[x,b,t],nullable:true,themeable:true,apply:w}},members:{__HR:null,__tv:null,renderLayout:function(D,top,E,F){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,D,top,E,F);
var H=A;
var G=this.getInsets();
this.__tv.setStyles({"left":G.left+H,"top":G.top+H,"width":(E-G.left-G.right)+H,"height":(F-G.top-G.bottom)+H});
},_createContentElement:function(){var I=new qx.html.Iframe(this.__HR);
I.addListener(j,this._onIframeLoad,this);
return I;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var J=new qx.html.Blocker();
J.setStyles({"zIndex":20,"display":d});
return J;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(j);
},block:function(){this.__tv.setStyle(c,o);
},release:function(){this.__tv.setStyle(c,d);
},_applyNativeContextMenu:function(K,L){if(K!==false&&L!==false){return;
}var M=this.getDocument();

if(!M){return;
}
try{var N=M.documentElement;
}catch(e){return ;
}
if(L===false){qx.event.Registration.removeListener(N,f,this._onNativeContextMenu,this,true);
}
if(K===false){qx.event.Registration.addListener(N,f,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:function(O,P){if(qx.core.Environment.get(z)){var document=this.getDocument();

if(!document){return;
}
try{if(P===false){qx.bom.Event.removeNativeListener(document,i,qx.lang.Function.returnFalse);
}
if(O===false){qx.bom.Event.addNativeListener(document,i,qx.lang.Function.returnFalse);
}}catch(e){}}},_syncSourceAfterDOMMove:function(){var R=this.getContentElement().getDomElement();
var Q=R.src;
if(Q.charAt(Q.length-1)==r){Q=Q.substring(0,Q.length-1);
}
if(Q!=this.getSource()){qx.bom.Iframe.getWindow(R).stop();
R.src=this.getSource();
}},_applyScrollbar:function(S){this.getContentElement().setAttribute(s,S);
}},destruct:function(){this._disposeObjects(p);
qx.event.Registration.removeListener(document.body,k,this.block,this,true);
qx.event.Registration.removeListener(document.body,h,this.release,this,true);
qx.event.Registration.removeListener(document.body,g,this.release,this,true);
}});
})();

});
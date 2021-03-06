qx.$$packageData['e53ded6836a0']={"resources":{}};
(function(){var n="move",m="Boolean",l="mouseup",k="mousedown",j="losecapture",i="__oa",h="qx.ui.core.MMovable",g="__ob",f="mousemove",d="maximized",c="move-frame";
qx.Mixin.define(h,{properties:{movable:{check:m,init:true},useMoveFrame:{check:m,init:false}},members:{__oa:null,__ob:null,__oc:null,__od:null,__oe:null,__of:null,__og:null,__oh:false,__oi:null,__oj:0,_activateMoveHandle:function(u){if(this.__oa){throw new Error("The move handle could not be redefined!");
}this.__oa=u;
u.addListener(k,this._onMoveMouseDown,this);
u.addListener(l,this._onMoveMouseUp,this);
u.addListener(f,this._onMoveMouseMove,this);
u.addListener(j,this.__on,this);
},__ok:function(){var o=this.__ob;

if(!o){o=this.__ob=new qx.ui.core.Widget();
o.setAppearance(c);
o.exclude();
qx.core.Init.getApplication().getRoot().add(o);
}return o;
},__ol:function(){var location=this.getContainerLocation();
var b=this.getBounds();
var a=this.__ok();
a.setUserBounds(location.left,location.top,b.width,b.height);
a.show();
a.setZIndex(this.getZIndex()+1);
},__om:function(e){var w=this.__oc;
var z=Math.max(w.left,Math.min(w.right,e.getDocumentLeft()));
var y=Math.max(w.top,Math.min(w.bottom,e.getDocumentTop()));
var v=this.__od+z;
var x=this.__oe+y;
return {viewportLeft:v,viewportTop:x,parentLeft:v-this.__of,parentTop:x-this.__og};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(d)){return;
}var parent=this.getLayoutParent();
var q=parent.getContentLocation();
var r=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__oh=true;
this.__oi=parent.getBlockerColor();
this.__oj=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
}}this.__oc={left:q.left,top:q.top,right:q.left+r.width,bottom:q.top+r.height};
var p=this.getContainerLocation();
this.__of=q.left;
this.__og=q.top;
this.__od=p.left-e.getDocumentLeft();
this.__oe=p.top-e.getDocumentTop();
this.addState(n);
this.__oa.capture();
if(this.getUseMoveFrame()){this.__ol();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(n)){return;
}var s=this.__om(e);

if(this.getUseMoveFrame()){this.__ok().setDomPosition(s.viewportLeft,s.viewportTop);
}else{this.setDomPosition(s.parentLeft,s.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(n)){return;
}this.removeState(n);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__oh){parent.unblockContent();
parent.setBlockerColor(this.__oi);
parent.setBlockerOpacity(this.__oj);
this.__oi=null;
this.__oj=0;
}}this.__oa.releaseCapture();
var t=this.__om(e);
this.setLayoutProperties({left:t.parentLeft,top:t.parentTop});
if(this.getUseMoveFrame()){this.__ok().exclude();
}e.stopPropagation();
},__on:function(e){if(!this.hasState(n)){return;
}this.removeState(n);
if(this.getUseMoveFrame()){this.__ok().exclude();
}}},destruct:function(){this._disposeObjects(g,i);
this.__oc=null;
}});
})();
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){this.addListener(i,this.__nU,this,true);
this.addListener(q,this.__nV,this);
this.addListener(x,this.__nX,this);
this.addListener(s,this.__nY,this);
this.addListener(o,this.__nW,this);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__nK:null,__nL:null,__nM:null,__nN:null,__nO:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__nP:function(){var K=this.__nK;

if(!K){K=this.__nK=new qx.ui.core.Widget();
K.setAppearance(p);
K.exclude();
qx.core.Init.getApplication().getRoot().add(K);
}return K;
},__nQ:function(){var B=this.__nO;
var A=this.__nP();
A.setUserBounds(B.left,B.top,B.width,B.height);
A.show();
A.setZIndex(this.getZIndex()+1);
},__nR:function(e){var E=this.__nL;
var F=this.getSizeHint();
var H=this.__nO;
var D=H.width;
var G=H.height;
var J=H.left;
var top=H.top;
var I;

if((E&this.RESIZE_TOP)||(E&this.RESIZE_BOTTOM)){I=e.getDocumentTop()-this.__nN;

if(E&this.RESIZE_TOP){G-=I;
}else{G+=I;
}
if(G<F.minHeight){G=F.minHeight;
}else if(G>F.maxHeight){G=F.maxHeight;
}
if(E&this.RESIZE_TOP){top+=H.height-G;
}}
if((E&this.RESIZE_LEFT)||(E&this.RESIZE_RIGHT)){I=e.getDocumentLeft()-this.__nM;

if(E&this.RESIZE_LEFT){D-=I;
}else{D+=I;
}
if(D<F.minWidth){D=F.minWidth;
}else if(D>F.maxWidth){D=F.maxWidth;
}
if(E&this.RESIZE_LEFT){J+=H.width-D;
}}return {viewportLeft:J,viewportTop:top,parentLeft:H.bounds.left+J-H.left,parentTop:H.bounds.top+top-H.top,width:D,height:G};
},__nS:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__nT:function(e){var T=this.getContentLocation();
var R=this.getResizeSensitivity();
var V=e.getDocumentLeft();
var U=e.getDocumentTop();
var S=0;

if(this.getResizableTop()&&Math.abs(T.top-U)<R){S+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(T.bottom-U)<R){S+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(T.left-V)<R){S+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(T.right-V)<R){S+=this.RESIZE_RIGHT;
}this.__nL=S;
},__nU:function(e){if(!this.__nL){return;
}this.addState(j);
this.__nM=e.getDocumentLeft();
this.__nN=e.getDocumentTop();
var location=this.getContainerLocation();
var Q=this.getBounds();
this.__nO={top:location.top,left:location.left,width:Q.width,height:Q.height,bounds:qx.lang.Object.clone(Q)};
if(this.getUseResizeFrame()){this.__nQ();
}this.capture();
e.stop();
},__nV:function(e){if(!this.hasState(j)){return;
}if(this.getUseResizeFrame()){this.__nP().exclude();
}var C=this.__nR(e);
this.setWidth(C.width);
this.setHeight(C.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:C.parentLeft,top:C.parentTop});
}this.__nL=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__nW:function(e){if(!this.__nL){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this.__nP().exclude();
}},__nX:function(e){if(this.hasState(j)){var O=this.__nR(e);
if(this.getUseResizeFrame()){var M=this.__nP();
M.setUserBounds(O.viewportLeft,O.viewportTop,O.width,O.height);
}else{this.setWidth(O.width);
this.setHeight(O.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:O.parentLeft,top:O.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)){this.__nT(e);
var P=this.__nL;
var N=this.getApplicationRoot();

if(P){var L=this.__nS[P];
this.setCursor(L);
N.setGlobalCursor(L);
}else if(this.getCursor()){this.resetCursor();
N.resetGlobalCursor();
}}},__nY:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__nK!=null&&!qx.core.ObjectRegistry.inShutDown){this.__nK.destroy();
this.__nK=null;
}}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(f){this.assertInterface(f,qx.ui.window.IDesktop);
},changeActiveWindow:function(b,c){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);
},sendToBack:function(d){this.assertInstance(d,qx.ui.window.Window);
}}});
})();
(function(){var b="qx.ui.window.Manager",a="__oo";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__oo:null,setDesktop:function(o){this.__oo=o;
this.updateStack();
},getDesktop:function(){return this.__oo;
},changeActiveWindow:function(c,d){if(c){this.bringToFront(c);
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__oo.forceUnblockContent();
var j=this.__oo.getWindows();
var n=this._minZIndex-1;
var m=false;
var k,h=null;

for(var i=0,l=j.length;i<l;i++){k=j[i];

if(!k.isVisible()){continue;
}n+=2;
k.setZIndex(n);
if(k.getModal()){this.__oo.blockContent(n-1);
}m=m||k.isActive();
h=k;
}
if(!m){this.__oo.setActiveWindow(h);
}},bringToFront:function(e){var f=this.__oo.getWindows();
var g=qx.lang.Array.remove(f,e);

if(g){f.push(e);
this.updateStack();
}},sendToBack:function(p){var q=this.__oo.getWindows();
var r=qx.lang.Array.remove(q,p);

if(r){q.unshift(p);
this.updateStack();
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var o="Boolean",n="qx.event.type.Event",m="captionbar",l="maximize-button",k="_applyCaptionBarChange",j="restore-button",i="minimize-button",h="close-button",g="maximized",f="execute",V="pane",U="title",T="icon",S="statusbar-text",R="statusbar",Q="normal",P="String",O="active",N="beforeClose",M="beforeMinimize",v="mousedown",w="changeStatus",t="changeIcon",u="excluded",r="_applyCaption",s="_applyActive",p="beforeRestore",q="minimize",x="dblclick",y="changeModal",E="_applyShowStatusbar",D="_applyStatus",G="qx.ui.window.Window",F="changeCaption",I="_applyIcon",H="focusout",A="beforeMaximize",L="maximize",K="restore",J="window",z="close",B="changeActive",C="minimized";
qx.Class.define(G,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(bo,bp){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(m);
this._createChildControl(V);
if(bp!=null){this.setIcon(bp);
}
if(bo!=null){this.setCaption(bo);
}this._updateCaptionBar();
this.addListener(v,this._onWindowMouseDown,this,true);
this.addListener(H,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":n,"close":n,"beforeMinimize":n,"minimize":n,"beforeMaximize":n,"maximize":n,"beforeRestore":n,"restore":n},properties:{appearance:{refine:true,init:J},visibility:{refine:true,init:u},focusable:{refine:true,init:true},active:{check:o,init:false,apply:s,event:B},modal:{check:o,init:false,event:y},caption:{apply:r,event:F,nullable:true},icon:{check:P,nullable:true,apply:I,event:t,themeable:true},status:{check:P,nullable:true,apply:D,event:w},showClose:{check:o,init:true,apply:k,themeable:true},showMaximize:{check:o,init:true,apply:k,themeable:true},showMinimize:{check:o,init:true,apply:k,themeable:true},allowClose:{check:o,init:true,apply:k},allowMaximize:{check:o,init:true,apply:k},allowMinimize:{check:o,init:true,apply:k},showStatusbar:{check:o,init:false,apply:E}},members:{__op:null,__oq:null,getChildrenContainer:function(){return this.getChildControl(V);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(bk){var bl;

switch(bk){case R:bl=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(bl);
bl.add(this.getChildControl(S));
break;
case S:bl=new qx.ui.basic.Label();
bl.setValue(this.getStatus());
break;
case V:bl=new qx.ui.container.Composite();
this._add(bl,{flex:1});
break;
case m:var bn=new qx.ui.layout.Grid();
bn.setRowFlex(0,1);
bn.setColumnFlex(1,1);
bl=new qx.ui.container.Composite(bn);
this._add(bl);
bl.addListener(x,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(bl);
break;
case T:bl=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(m).add(bl,{row:0,column:0});
break;
case U:bl=new qx.ui.basic.Label(this.getCaption());
bl.setWidth(0);
bl.setAllowGrowX(true);
var bm=this.getChildControl(m);
bm.add(bl,{row:0,column:1});
break;
case i:bl=new qx.ui.form.Button();
bl.setFocusable(false);
bl.addListener(f,this._onMinimizeButtonClick,this);
this.getChildControl(m).add(bl,{row:0,column:2});
break;
case j:bl=new qx.ui.form.Button();
bl.setFocusable(false);
bl.addListener(f,this._onRestoreButtonClick,this);
this.getChildControl(m).add(bl,{row:0,column:3});
break;
case l:bl=new qx.ui.form.Button();
bl.setFocusable(false);
bl.addListener(f,this._onMaximizeButtonClick,this);
this.getChildControl(m).add(bl,{row:0,column:4});
break;
case h:bl=new qx.ui.form.Button();
bl.setFocusable(false);
bl.addListener(f,this._onCloseButtonClick,this);
this.getChildControl(m).add(bl,{row:0,column:6});
break;
}return bl||arguments.callee.base.call(this,bk);
},_updateCaptionBar:function(){var c;

if(this.getIcon()){this._showChildControl(T);
}else{this._excludeChildControl(T);
}
if(this.getCaption()){this._showChildControl(U);
}else{this._excludeChildControl(U);
}
if(this.getShowMinimize()){this._showChildControl(i);
c=this.getChildControl(i);
this.getAllowMinimize()?c.resetEnabled():c.setEnabled(false);
}else{this._excludeChildControl(i);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(j);
this._excludeChildControl(l);
}else{this._showChildControl(l);
this._excludeChildControl(j);
}c=this.getChildControl(l);
this.getAllowMaximize()?c.resetEnabled():c.setEnabled(false);
}else{this._excludeChildControl(l);
this._excludeChildControl(j);
}
if(this.getShowClose()){this._showChildControl(h);
c=this.getChildControl(h);
this.getAllowClose()?c.resetEnabled():c.setEnabled(false);
}else{this._excludeChildControl(h);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(N,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(z);
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
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(A,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bc=this.getLayoutProperties();
this.__oq=bc.left===undefined?0:bc.left;
this.__op=bc.top===undefined?0:bc.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(g);
this._updateCaptionBar();
this.fireEvent(L);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(M,qx.event.type.Event,[false,true])){var d=this.getLayoutProperties();
this.__oq=d.left===undefined?0:d.left;
this.__op=d.top===undefined?0:d.top;
this.removeState(g);
this.hide();
this.fireEvent(q);
}},restore:function(){if(this.getMode()===Q){return;
}
if(this.fireNonBubblingEvent(p,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var be=this.__oq;
var top=this.__op;
this.setLayoutProperties({edge:null,left:be,top:top});
this.removeState(g);
this._updateCaptionBar();
this.fireEvent(K);
}},moveTo:function(W,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:W,top:top});
},isMaximized:function(){return this.hasState(g);
},getMode:function(){if(!this.isVisible()){return C;
}else{if(this.isMaximized()){return g;
}else{return Q;
}}},_applyActive:function(bq,br){if(br){this.removeState(O);
}else{this.addState(O);
}},_getContentPaddingTarget:function(){return this.getChildControl(V);
},_applyShowStatusbar:function(ba,bb){if(ba){this._showChildControl(R);
}else{this._excludeChildControl(R);
}},_applyCaptionBarChange:function(X,Y){this._updateCaptionBar();
},_applyStatus:function(bs,bt){var bu=this.getChildControl(S,true);

if(bu){bu.setValue(bs);
}},_applyCaption:function(a,b){this.getChildControl(U).setValue(a);
this._updateCaptionBar();
},_applyIcon:function(bf,bg){this.getChildControl(T).setSource(bf);
this._updateCaptionBar();
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bd=e.getRelatedTarget();

if(bd!=null&&!qx.ui.core.Widget.contains(this,bd)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(i).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(j).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(l).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(h).reset();
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var a="qx.ui.window.Desktop";
qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.window.MDesktop,qx.ui.core.MBlocker],implement:qx.ui.window.IDesktop,construct:function(b){arguments.callee.base.call(this);
this.getContentElement().disableScrolling();
this._setLayout(new qx.ui.layout.Canvas());
this.setWindowManager(b);
}});
})();

qx.$$packageData['200d832c953f']={"locales":{},"resources":{"feedreader/images/combined/icons16.png":[16,96,"png","feedreader"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-64],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,0],"qx/icon/Tango/16/apps/preferences-locale.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-48],"qx/icon/Tango/16/apps/preferences-theme.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-32]},"translations":{}};

qx.Part.$$notifyLoad("200d832c953f", function() {
(function(){var l="move",k="Boolean",j="mouseup",i="mousedown",h="losecapture",g="qx.ui.core.MMovable",f="__Y",d="__ba",c="mousemove",b="maximized",a="move-frame";
qx.Mixin.define(g,{properties:{movable:{check:k,init:true},useMoveFrame:{check:k,init:false}},members:{__Y:null,__ba:null,__bb:null,__bc:null,__bd:null,__be:null,__bf:null,__bg:false,__bh:null,__bi:0,_activateMoveHandle:function(n){if(this.__Y){throw new Error("The move handle could not be redefined!");
}this.__Y=n;
n.addListener(i,this._onMoveMouseDown,this);
n.addListener(j,this._onMoveMouseUp,this);
n.addListener(c,this._onMoveMouseMove,this);
n.addListener(h,this.__bm,this);
},__bj:function(){var u=this.__ba;

if(!u){u=this.__ba=new qx.ui.core.Widget();
u.setAppearance(a);
u.exclude();
qx.core.Init.getApplication().getRoot().add(u);
}return u;
},__bk:function(){var location=this.getContainerLocation();
var w=this.getBounds();
var v=this.__bj();
v.setUserBounds(location.left,location.top,w.width,w.height);
v.show();
v.setZIndex(this.getZIndex()+1);
},__bl:function(e){var q=this.__bb;
var t=Math.max(q.left,Math.min(q.right,e.getDocumentLeft()));
var s=Math.max(q.top,Math.min(q.bottom,e.getDocumentTop()));
var p=this.__bc+t;
var r=this.__bd+s;
return {viewportLeft:p,viewportTop:r,parentLeft:p-this.__be,parentTop:r-this.__bf};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(b)){return;
}var parent=this.getLayoutParent();
var y=parent.getContentLocation();
var z=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__bh=parent.getBlockerColor();
this.__bi=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
this.__bg=true;
}}this.__bb={left:y.left,top:y.top,right:y.left+z.width,bottom:y.top+z.height};
var x=this.getContainerLocation();
this.__be=y.left;
this.__bf=y.top;
this.__bc=x.left-e.getDocumentLeft();
this.__bd=x.top-e.getDocumentTop();
this.addState(l);
this.__Y.capture();
if(this.getUseMoveFrame()){this.__bk();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(l)){return;
}var o=this.__bl(e);

if(this.getUseMoveFrame()){this.__bj().setDomPosition(o.viewportLeft,o.viewportTop);
}else{this.setDomPosition(o.parentLeft,o.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__bg){parent.unblockContent();
parent.setBlockerColor(this.__bh);
parent.setBlockerOpacity(this.__bi);
this.__bh=null;
this.__bi=0;
this.__bg=false;
}}this.__Y.releaseCapture();
var m=this.__bl(e);
this.setLayoutProperties({left:m.parentLeft,top:m.parentTop});
if(this.getUseMoveFrame()){this.__bj().exclude();
}e.stopPropagation();
},__bm:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
if(this.getUseMoveFrame()){this.__bj().exclude();
}}},destruct:function(){this._disposeObjects(d,f);
this.__bb=null;
}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(c){this.assertInterface(c,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(b){this.assertInteger(b);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var p="Boolean",o="resize",n="mousedown",m="w-resize",l="sw-resize",k="n-resize",j="resizableRight",i="ne-resize",h="se-resize",g="Integer",E="e-resize",D="resizableLeft",C="mousemove",B="move",A="shorthand",z="maximized",y="nw-resize",x="mouseout",w="qx.ui.core.MResizable",v="mouseup",t="losecapture",u="resize-frame",r="resizableBottom",s="s-resize",q="resizableTop";
qx.Mixin.define(w,{construct:function(){this.addListener(n,this.__bC,this,true);
this.addListener(v,this.__bD,this);
this.addListener(C,this.__bF,this);
this.addListener(x,this.__bG,this);
this.addListener(t,this.__bE,this);
var L=this.getContainerElement().getDomElement();

if(L==null){L=window;
}this.__bq=qx.event.Registration.getManager(L).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:p,init:true},resizableRight:{check:p,init:true},resizableBottom:{check:p,init:true},resizableLeft:{check:p,init:true},resizable:{group:[q,j,r,D],mode:A},resizeSensitivity:{check:g,init:5},useResizeFrame:{check:p,init:true}},members:{__bq:null,__br:null,__bs:null,__bt:null,__bu:null,__bv:null,__bw:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__bx:function(){var F=this.__br;

if(!F){F=this.__br=new qx.ui.core.Widget();
F.setAppearance(u);
F.exclude();
qx.core.Init.getApplication().getRoot().add(F);
}return F;
},__by:function(){var H=this.__bv;
var G=this.__bx();
G.setUserBounds(H.left,H.top,H.width,H.height);
G.show();
G.setZIndex(this.getZIndex()+1);
},__bz:function(e){var N=this.__bs;
var O=this.getSizeHint();
var R=this.__bw;
var Q=this.__bv;
var M=Q.width;
var P=Q.height;
var T=Q.left;
var top=Q.top;
var S;

if((N&this.RESIZE_TOP)||(N&this.RESIZE_BOTTOM)){S=Math.max(R.top,Math.min(R.bottom,e.getDocumentTop()))-this.__bu;

if(N&this.RESIZE_TOP){P-=S;
}else{P+=S;
}
if(P<O.minHeight){P=O.minHeight;
}else if(P>O.maxHeight){P=O.maxHeight;
}
if(N&this.RESIZE_TOP){top+=Q.height-P;
}}
if((N&this.RESIZE_LEFT)||(N&this.RESIZE_RIGHT)){S=Math.max(R.left,Math.min(R.right,e.getDocumentLeft()))-this.__bt;

if(N&this.RESIZE_LEFT){M-=S;
}else{M+=S;
}
if(M<O.minWidth){M=O.minWidth;
}else if(M>O.maxWidth){M=O.maxWidth;
}
if(N&this.RESIZE_LEFT){T+=Q.width-M;
}}return {viewportLeft:T,viewportTop:top,parentLeft:Q.bounds.left+T-Q.left,parentTop:Q.bounds.top+top-Q.top,width:M,height:P};
},__bA:{1:k,2:s,4:m,8:E,5:y,6:l,9:i,10:h},__bB:function(e){var X=this.getContentLocation();
var V=this.getResizeSensitivity();
var ba=e.getDocumentLeft();
var Y=e.getDocumentTop();
var W=0;

if(this.getResizableTop()&&Math.abs(X.top-Y)<V){W+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(X.bottom-Y)<V){W+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(X.left-ba)<V){W+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(X.right-ba)<V){W+=this.RESIZE_RIGHT;
}this.__bs=W;
},__bC:function(e){if(!this.__bs){return;
}this.addState(o);
this.__bt=e.getDocumentLeft();
this.__bu=e.getDocumentTop();
var location=this.getContainerLocation();
var K=this.getBounds();
this.__bv={top:location.top,left:location.left,width:K.width,height:K.height,bounds:qx.lang.Object.clone(K)};
var parent=this.getLayoutParent();
var I=parent.getContentLocation();
var J=parent.getBounds();
this.__bw={left:I.left,top:I.top,right:I.left+J.width,bottom:I.top+J.height};
if(this.getUseResizeFrame()){this.__by();
}this.capture();
e.stop();
},__bD:function(e){if(!this.hasState(o)){return;
}if(this.getUseResizeFrame()){this.__bx().exclude();
}var U=this.__bz(e);
this.setWidth(U.width);
this.setHeight(U.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:U.parentLeft,top:U.parentTop});
}this.__bs=0;
this.removeState(o);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__bE:function(e){if(!this.__bs){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(B);
if(this.getUseResizeFrame()){this.__bx().exclude();
}},__bF:function(e){if(this.hasState(o)){var d=this.__bz(e);
if(this.getUseResizeFrame()){var b=this.__bx();
b.setUserBounds(d.viewportLeft,d.viewportTop,d.width,d.height);
}else{this.setWidth(d.width);
this.setHeight(d.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:d.parentLeft,top:d.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(z)&&!this.__bq.isSessionActive()){this.__bB(e);
var f=this.__bs;
var c=this.getApplicationRoot();

if(f){var a=this.__bA[f];
this.setCursor(a);
c.setGlobalCursor(a);
}else if(this.getCursor()){this.resetCursor();
c.resetGlobalCursor();
}}},__bG:function(e){if(this.getCursor()&&!this.hasState(o)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__br!=null&&!qx.core.ObjectRegistry.inShutDown){this.__br.destroy();
this.__br=null;
}this.__bq=null;
}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(b){this.assertInterface(b,qx.ui.window.IDesktop);
},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(f){this.assertInstance(f,qx.ui.window.Window);
},sendToBack:function(e){this.assertInstance(e,qx.ui.window.Window);
}}});
})();
(function(){var b="__bp",a="qx.ui.window.Manager";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__bp:null,setDesktop:function(n){this.__bp=n;
this.updateStack();
},getDesktop:function(){return this.__bp;
},changeActiveWindow:function(r,s){if(r){this.bringToFront(r);
r.setActive(true);
}
if(s){s.resetActive();
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__bp.forceUnblockContent();
var f=this.__bp.getWindows();
var h=this._minZIndex;
var m=h+f.length*2;
var j=h+f.length*4;
var k=null;

for(var i=0,l=f.length;i<l;i++){var g=f[i];
if(!g.isVisible()){continue;
}k=k||g;
if(g.isModal()){g.setZIndex(j);
this.__bp.blockContent(j-1);
j+=2;
k=g;
}else if(g.isAlwaysOnTop()){g.setZIndex(m);
m+=2;
}else{g.setZIndex(h);
h+=2;
}if(!k.isModal()&&g.isActive()||g.getZIndex()>k.getZIndex()){k=g;
}}this.__bp.setActiveWindow(k);
},bringToFront:function(c){var d=this.__bp.getWindows();
var e=qx.lang.Array.remove(d,c);

if(e){d.push(c);
this.updateStack();
}},sendToBack:function(o){var p=this.__bp.getWindows();
var q=qx.lang.Array.remove(p,o);

if(q){p.unshift(o);
this.updateStack();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var E="Boolean",D="qx.event.type.Event",C="captionbar",B="_applyCaptionBarChange",A="maximize-button",z="restore-button",y="minimize-button",x="close-button",w="maximized",v="execute",bl="pane",bk="title",bj="icon",bi="statusbar-text",bh="statusbar",bg="String",bf="normal",be="active",bd="beforeClose",bc="beforeMinimize",L="mousedown",M="changeStatus",J="changeIcon",K="excluded",H="dblclick",I="_applyActive",F="beforeRestore",G="minimize",N="changeModal",O="changeAlwaysOnTop",T="_applyShowStatusbar",S="_applyStatus",V="qx.ui.window.Window",U="changeCaption",X="focusout",W="beforeMaximize",Q="maximize",bb="restore",ba="window",Y="close",P="changeActive",R="minimized";
qx.Class.define(V,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(m,n){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(C);
this._createChildControl(bl);
if(n!=null){this.setIcon(n);
}
if(m!=null){this.setCaption(m);
}this._updateCaptionBar();
this.addListener(L,this._onWindowMouseDown,this,true);
this.addListener(X,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":D,"close":D,"beforeMinimize":D,"minimize":D,"beforeMaximize":D,"maximize":D,"beforeRestore":D,"restore":D},properties:{appearance:{refine:true,init:ba},visibility:{refine:true,init:K},focusable:{refine:true,init:true},active:{check:E,init:false,apply:I,event:P},alwaysOnTop:{check:E,init:false,event:O},modal:{check:E,init:false,event:N},caption:{apply:B,event:U,nullable:true},icon:{check:bg,nullable:true,apply:B,event:J,themeable:true},status:{check:bg,nullable:true,apply:S,event:M},showClose:{check:E,init:true,apply:B,themeable:true},showMaximize:{check:E,init:true,apply:B,themeable:true},showMinimize:{check:E,init:true,apply:B,themeable:true},allowClose:{check:E,init:true,apply:B},allowMaximize:{check:E,init:true,apply:B},allowMinimize:{check:E,init:true,apply:B},showStatusbar:{check:E,init:false,apply:T}},members:{__bn:null,__bo:null,getChildrenContainer:function(){return this.getChildControl(bl);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);
},_createChildControlImpl:function(p){var q;

switch(p){case bh:q=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(q);
q.add(this.getChildControl(bi));
break;
case bi:q=new qx.ui.basic.Label();
q.setValue(this.getStatus());
break;
case bl:q=new qx.ui.container.Composite();
this._add(q,{flex:1});
break;
case C:var s=new qx.ui.layout.Grid();
s.setRowFlex(0,1);
s.setColumnFlex(1,1);
q=new qx.ui.container.Composite(s);
this._add(q);
q.addListener(H,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(q);
break;
case bj:q=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(C).add(q,{row:0,column:0});
break;
case bk:q=new qx.ui.basic.Label(this.getCaption());
q.setWidth(0);
q.setAllowGrowX(true);
var r=this.getChildControl(C);
r.add(q,{row:0,column:1});
break;
case y:q=new qx.ui.form.Button();
q.setFocusable(false);
q.addListener(v,this._onMinimizeButtonClick,this);
this.getChildControl(C).add(q,{row:0,column:2});
break;
case z:q=new qx.ui.form.Button();
q.setFocusable(false);
q.addListener(v,this._onRestoreButtonClick,this);
this.getChildControl(C).add(q,{row:0,column:3});
break;
case A:q=new qx.ui.form.Button();
q.setFocusable(false);
q.addListener(v,this._onMaximizeButtonClick,this);
this.getChildControl(C).add(q,{row:0,column:4});
break;
case x:q=new qx.ui.form.Button();
q.setFocusable(false);
q.addListener(v,this._onCloseButtonClick,this);
this.getChildControl(C).add(q,{row:0,column:6});
break;
}return q||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,p);
},_updateCaptionBar:function(){var j;
var k=this.getIcon();

if(k){this.getChildControl(bj).setSource(k);
this._showChildControl(bj);
}else{this._excludeChildControl(bj);
}var i=this.getCaption();

if(i){this.getChildControl(bk).setValue(i);
this._showChildControl(bk);
}else{this._excludeChildControl(bk);
}
if(this.getShowMinimize()){this._showChildControl(y);
j=this.getChildControl(y);
this.getAllowMinimize()?j.resetEnabled():j.setEnabled(false);
}else{this._excludeChildControl(y);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(z);
this._excludeChildControl(A);
}else{this._showChildControl(A);
this._excludeChildControl(z);
}j=this.getChildControl(A);
this.getAllowMaximize()?j.resetEnabled():j.setEnabled(false);
}else{this._excludeChildControl(A);
this._excludeChildControl(z);
}
if(this.getShowClose()){this._showChildControl(x);
j=this.getChildControl(x);
this.getAllowClose()?j.resetEnabled():j.setEnabled(false);
}else{this._excludeChildControl(x);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(bd,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(Y);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var g=parent.getBounds();

if(g){var h=this.getSizeHint();
var f=Math.round((g.width-h.width)/2);
var top=Math.round((g.height-h.height)/2);

if(top<0){top=0;
}this.moveTo(f,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(W,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var br=this.getLayoutProperties();
this.__bo=br.left===undefined?0:br.left;
this.__bn=br.top===undefined?0:br.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(w);
this._updateCaptionBar();
this.fireEvent(Q);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(bc,qx.event.type.Event,[false,true])){var bo=this.getLayoutProperties();
this.__bo=bo.left===undefined?0:bo.left;
this.__bn=bo.top===undefined?0:bo.top;
this.removeState(w);
this.hide();
this.fireEvent(G);
}},restore:function(){if(this.getMode()===bf){return;
}
if(this.fireNonBubblingEvent(F,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var d=this.__bo;
var top=this.__bn;
this.setLayoutProperties({edge:null,left:d,top:top});
this.removeState(w);
this._updateCaptionBar();
this.fireEvent(bb);
}},moveTo:function(o,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:o,top:top});
},isMaximized:function(){return this.hasState(w);
},getMode:function(){if(!this.isVisible()){return R;
}else{if(this.isMaximized()){return w;
}else{return bf;
}}},_applyActive:function(bp,bq){if(bq){this.removeState(be);
}else{this.addState(be);
}},_getContentPaddingTarget:function(){return this.getChildControl(bl);
},_applyShowStatusbar:function(bm,bn){if(bm){this._showChildControl(bh);
}else{this._excludeChildControl(bh);
}},_applyCaptionBarChange:function(t,u){this._updateCaptionBar();
},_applyStatus:function(a,b){var c=this.getChildControl(bi,true);

if(c){c.setValue(a);
}},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var l=e.getRelatedTarget();

if(l!=null&&!qx.ui.core.Widget.contains(this,l)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(y).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(z).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(A).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(x).reset();
}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var u="Boolean",t="changeInvalidMessage",s="changeValue",r="String",q="_applyAllowEmptySelection",p="_applyInvalidMessage",o="qx.ui.form.RadioGroup",n="_applyValid",m="",k="changeRequired",g="changeValid",j="changeEnabled",h="__a",f="changeSelection",d="_applyEnabled";
qx.Class.define(o,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(F){qx.core.Object.call(this);
this.__a=[];
this.addListener(f,this.__b,this);

if(F!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:u,apply:d,event:j,init:true},wrap:{check:u,init:true},allowEmptySelection:{check:u,init:false,apply:q},valid:{check:u,init:true,apply:n,event:g},required:{check:u,init:false,event:k},invalidMessage:{check:r,init:m,event:t,apply:p},requiredInvalidMessage:{check:r,nullable:true,event:t}},members:{__a:null,getItems:function(){return this.__a;
},add:function(v){var w=this.__a;
var x;

for(var i=0,l=arguments.length;i<l;i++){x=arguments[i];

if(qx.lang.Array.contains(w,x)){continue;
}x.addListener(s,this._onItemChangeChecked,this);
w.push(x);
x.setGroup(this);
if(x.getValue()){this.setSelection([x]);
}}if(!this.isAllowEmptySelection()&&w.length>0&&!this.getSelection()[0]){this.setSelection([w[0]]);
}},remove:function(B){var C=this.__a;

if(qx.lang.Array.contains(C,B)){qx.lang.Array.remove(C,B);
if(B.getGroup()===this){B.resetGroup();
}B.removeListener(s,this._onItemChangeChecked,this);
if(B.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var A=e.getTarget();

if(A.getValue()){this.setSelection([A]);
}else if(this.getSelection()[0]==A){this.resetSelection();
}},_applyInvalidMessage:function(y,z){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(y);
}},_applyValid:function(G,H){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(G);
}},_applyEnabled:function(a,b){var c=this.__a;

if(a==null){for(var i=0,l=c.length;i<l;i++){c[i].resetEnabled();
}}else{for(var i=0,l=c.length;i<l;i++){c[i].setEnabled(a);
}}},_applyAllowEmptySelection:function(L,M){if(!L&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var N=this.getSelection()[0];
var P=this.__a;
var O=P.indexOf(N);

if(O==-1){return;
}var i=0;
var length=P.length;
if(this.getWrap()){O=(O+1)%length;
}else{O=Math.min(O+1,length-1);
}
while(i<length&&!P[O].getEnabled()){O=(O+1)%length;
i++;
}this.setSelection([P[O]]);
},selectPrevious:function(){var I=this.getSelection()[0];
var K=this.__a;
var J=K.indexOf(I);

if(J==-1){return;
}var i=0;
var length=K.length;
if(this.getWrap()){J=(J-1+length)%length;
}else{J=Math.max(J-1,0);
}
while(i<length&&!K[J].getEnabled()){J=(J-1+length)%length;
i++;
}this.setSelection([K[J]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__b:function(e){var E=e.getData()[0];
var D=e.getOldData()[0];

if(D){D.setValue(false);
}
if(E){E.setValue(true);
}}},destruct:function(){this._disposeArray(h);
}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(d){},getValue:function(){},setGroup:function(c){this.assertInstance(c,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var o="checked",n="keypress",m="Boolean",l="Right",k="_applyValue",j="changeValue",i="qx.ui.form.RadioButton",h="radiobutton",g="Left",f="qx.ui.form.RadioGroup",b="Down",d="_applyGroup",c="Up",a="execute";
qx.Class.define(i,{extend:qx.ui.form.Button,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IForm,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(r){{};
qx.ui.form.Button.call(this,r);
this.addListener(a,this._onExecute);
this.addListener(n,this._onKeyPress);
},properties:{group:{check:f,nullable:true,apply:d},value:{check:m,nullable:true,event:j,apply:k,init:false},appearance:{refine:true,init:h},allowGrowX:{refine:true,init:false}},members:{_applyValue:function(p,q){p?this.addState(o):this.removeState(o);

if(p&&this.getFocusable()){this.focus();
}},_applyGroup:function(t,u){if(u){u.remove(this);
}
if(t){t.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onKeyPress:function(e){var s=this.getGroup();

if(!s){return;
}
switch(e.getKeyIdentifier()){case g:case c:s.selectPrevious();
break;
case l:case b:s.selectNext();
break;
}}}});
})();
(function(){var t="language",s="execute",r="icon/16/apps/preferences-locale.png",q="Français",p="icon/16/apps/preferences-theme.png",o="feedreader.view.PreferenceWindow",n="English",m="Nederlands",l="Italiano",k="Language",d="icon/16/actions/dialog-cancel.png",j="icon/16/actions/dialog-ok.png",h="Svenska",c="Preferences",b="Cancel",g="right",f="Deutsch",i="OK",a="Espanol";
qx.Class.define(o,{extend:qx.ui.window.Window,construct:function(){qx.ui.window.Window.call(this,this.tr(c),p);
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{_addContent:function(){var B,C;
var z=new qx.ui.layout.VBox(10);
this.setLayout(z);
this.setMinWidth(350);
var F=new qx.ui.groupbox.GroupBox(this.tr(k),r);
F.setMinWidth(150);
F.setLayout(new qx.ui.layout.VBox());
this.add(F);
var H=new qx.ui.form.RadioGroup();
var D={"en":n,"de":f,"es":a,"fr":q,"it":l,"nl":m,"sv":h};
var G=qx.locale.Manager.getInstance();
{};
var E;

for(var v in D){E=new qx.ui.form.RadioButton(D[v]);
E.setUserData(t,v);
H.add(E);
F.add(E);
if(G.getLanguage()==v){H.setSelection([E]);
}}var y=new qx.ui.layout.HBox(10,g);
var w=new qx.ui.container.Composite(y);
var A=new qx.ui.form.Button(this.tr(b),d);
A.addListener(s,this.close,this);
var x=new qx.ui.form.Button(this.tr(i),j);
x.addListener(s,function(e){var u=H.getSelection()[0].getUserData(t);
qx.io.PartLoader.require([u],function(){qx.locale.Manager.getInstance().setLocale(u);
},this);
this.close();
},this);
w.add(A);
w.add(x);
this.add(w);
}}});
})();
(function(){var l="legend",k="frame",j="middle",i="top",h="resize",g="qx.ui.groupbox.GroupBox",f="groupbox",d="_applyLegendPosition";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(r,s){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(k);
this._createChildControl(l);
if(r!=null){this.setLegend(r);
}
if(s!=null){this.setIcon(s);
}},properties:{appearance:{refine:true,init:f},legendPosition:{check:[i,j],init:j,apply:d,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(p){var q;

switch(p){case k:q=new qx.ui.container.Composite();
this._add(q,{left:0,top:6,right:0,bottom:0});
break;
case l:q=new qx.ui.basic.Atom();
q.addListener(h,this._repositionFrame,this);
this._add(q);
break;
}return q||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,p);
},_getContentPaddingTarget:function(){return this.getChildControl(k);
},_applyLegendPosition:function(e){if(this.getChildControl(l).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var b=this.getChildControl(l);
var a=this.getChildControl(k);
var c=b.getBounds().height;
if(this.getLegendPosition()==j){a.setLayoutProperties({"top":Math.round(c/2)});
}else if(this.getLegendPosition()==i){a.setLayoutProperties({"top":c});
}},getChildrenContainer:function(){return this.getChildControl(k);
},setLegend:function(m){var n=this.getChildControl(l);

if(m!==null){n.setLabel(m);
n.show();
}else{n.exclude();
}},getLegend:function(){return this.getChildControl(l).getLabel();
},setIcon:function(o){this.getChildControl(l).setIcon(o);
},getIcon:function(){this.getChildControl(l).getIcon();
}}});
})();

});
qx.$$packageData['4']={"locales":{},"resources":{"qx/icon/Tango/22/actions/document-send.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-important.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-junk.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-message-new.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-mail.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-chart.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-harddisk.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-optical.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/media-image.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-remote.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-server.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-workgroup.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-desktop.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-home.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash-full.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash.png":[22,22,"png","qx"]},"translations":{}};
qx.Part.$$notifyLoad("4", function() {
(function(){var i="opened",h="click",g="mousedown",f="Boolean",d="changeOpen",c="_applyOpen",b="mouseup",a="qx.ui.tree.core.FolderOpenButton";
qx.Class.define(a,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){qx.ui.basic.Image.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(g,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:d,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var e="qx.ui.tree.selection.SelectionManager",d="above",c="under",b="right",a="left";
qx.Class.define(e,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(f){var g=f.getBounds();

if(g){var top=this._getWidget().getItemTop(f);
return {top:top,bottom:top+g.height};
}},_isSelectable:function(h){return this._isItemSelectable(h)&&h instanceof qx.ui.tree.core.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(j){var m=false;

if(!j){m=this._userInteraction;
this._userInteraction=true;
}var l=this._getWidget();
var n=[];

if(l.getRoot()!=null){var k=l.getRoot().getItems(true,!!j,l.getHideRoot());

for(var i=0;i<k.length;i++){if(this._isSelectable(k[i])){n.push(k[i]);
}}}this._userInteraction=m;
return n;
},_getSelectableRange:function(o,p){if(o===p){return [o];
}var q=this.getSelectables();
var r=q.indexOf(o);
var s=q.indexOf(p);

if(r<0||s<0){return [];
}
if(r<s){return q.slice(r,s+1);
}else{return q.slice(s,r+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var t=this.getSelectables();

if(t.length>0){return t[t.length-1];
}else{return null;
}},_getRelatedSelectable:function(u,v){var w=this._getWidget();
var x=null;

switch(v){case d:x=w.getPreviousNodeOf(u,false);
break;
case c:x=w.getNextNodeOf(u,false);
break;
case a:case b:break;
}
if(!x){return null;
}
if(this._isSelectable(x)){return x;
}else{return this._getRelatedSelectable(x,v);
}}}});
})();
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="visible",f="qx.event.type.Data",d="_applyOpenMode",c="Space",b="Left",a="Enter",z="changeOpenMode",y="_applyRootOpenClose",x="changeSelection",w="qx.ui.tree.Tree",v="qx.ui.tree.core.AbstractTreeItem",u="tree",t="_applyHideRoot",s="changeRoot",r="_applyRoot",q="keypress",o="none",p="pane",m="__mg",n="Right";
qx.Class.define(w,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__mg=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(p).add(this.__mg);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(x,this._onChangeSelection,this);
this.addListener(q,this._onKeyPress,this);
},events:{addItem:f,removeItem:f},properties:{openMode:{check:[k,l,o],init:l,apply:d,event:z,themeable:true},root:{check:v,init:null,nullable:true,event:s,apply:r},hideRoot:{check:j,init:false,apply:t},rootOpenClose:{check:j,init:false,apply:y},appearance:{refine:true,init:u},focusable:{refine:true,init:true}},members:{__mg:null,SELECTION_MANAGER:qx.ui.tree.selection.SelectionManager,getChildrenContainer:function(){return this.__mg;
},_applyRoot:function(A,B){var C=this.getChildrenContainer();

if(B&&!B.isDisposed()){C.remove(B);

if(B.hasChildren()){C.remove(B.getChildrenContainer());
}}
if(A){C.add(A);

if(A.hasChildren()){C.add(A.getChildrenContainer());
}A.setVisibility(this.getHideRoot()?h:g);
A.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(D,E){var F=this.getRoot();

if(!F){return;
}F.setVisibility(D?h:g);
F.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(G,H){var I=this.getRoot();

if(!I){return;
}I.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__mg;
},getNextNodeOf:function(J,K){if((K!==false||J.isOpen())&&J.hasChildren()){return J.getChildren()[0];
}
while(J){var parent=J.getParent();

if(!parent){return null;
}var M=parent.getChildren();
var L=M.indexOf(J);

if(L>-1&&L<M.length-1){return M[L+1];
}J=parent;
}return null;
},getPreviousNodeOf:function(N,O){var parent=N.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==N){return null;
}}}else{if(N==this.getRoot()){return null;
}}var R=parent.getChildren();
var P=R.indexOf(N);

if(P>0){var Q=R[P-1];

while((O!==false||Q.isOpen())&&Q.hasChildren()){var S=Q.getChildren();
Q=S[S.length-1];
}return Q;
}else{return parent;
}},getNextSiblingOf:function(T){if(T==this.getRoot()){return null;
}var parent=T.getParent();
var U=parent.getChildren();
var V=U.indexOf(T);

if(V<U.length-1){return U[V+1];
}return null;
},getPreviousSiblingOf:function(W){if(W==this.getRoot()){return null;
}var parent=W.getParent();
var X=parent.getChildren();
var Y=X.indexOf(W);

if(Y>0){return X[Y-1];
}return null;
},getItems:function(ba,bb){if(this.getRoot()!=null){return this.getRoot().getItems(ba,bb,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(bc){while(bc){if(bc==this){return null;
}
if(bc instanceof qx.ui.tree.core.AbstractTreeItem){return bc;
}bc=bc.getLayoutParent();
}return null;
},_applyOpenMode:function(bd,be){if(be==k){this.removeListener(k,this._onOpen,this);
}else if(be==l){this.removeListener(l,this._onOpen,this);
}
if(bd==k){this.addListener(k,this._onOpen,this);
}else if(bd==l){this.addListener(l,this._onOpen,this);
}},_onOpen:function(e){var bf=this.getTreeItem(e.getTarget());

if(!bf||!bf.isOpenable()){return;
}bf.setOpen(!bf.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var bh=e.getData();
for(var i=0;i<bh.length;i++){var bg=bh[i];
while(bg.getParent()!=null){bg=bg.getParent();
bg.setOpen(true);
}}},_onKeyPress:function(e){var bi=this._getLeadItem();

if(bi!==null){switch(e.getKeyIdentifier()){case b:if(bi.isOpenable()&&bi.isOpen()){bi.setOpen(false);
}else if(bi.getParent()){this.setSelection([bi.getParent()]);
}break;
case n:if(bi.isOpenable()&&!bi.isOpen()){bi.setOpen(true);
}break;
case a:case c:if(bi.isOpenable()){bi.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var k="open",j="icon",i="auto",h="middle",g="String",f="label",d="changeOpen",c="opened",b="always",a="_applyIconOpened",D="Boolean",C="__lh",B="changeIcon",A="changeIconOpened",z="changeLabel",y="Integer",x="_applyIndent",w="changeOpenSymbolMode",v="_applyOpenSymbolMode",u="resize",r="",s="iconOpened",p="abstract",q="never",n="_applyIcon",o="_applyOpen",l="changeIndent",m="qx.ui.tree.core.AbstractItem",t="_applyLabel";
qx.Class.define(m,{extend:qx.ui.core.Widget,type:p,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(E){qx.ui.core.Widget.call(this);

if(E!=null){this.setLabel(E);
}this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:D,init:false,event:d,apply:o},openSymbolMode:{check:[b,q,i],init:i,event:w,apply:v},indent:{check:y,init:19,apply:x,event:l,themeable:true},icon:{check:g,apply:n,event:B,nullable:true,themeable:true},iconOpened:{check:g,apply:a,event:A,nullable:true,themeable:true},label:{check:g,apply:t,event:z,init:r}},members:{__lf:null,__lg:null,__lh:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(F,G){var H;

switch(F){case f:H=new qx.ui.basic.Label().set({alignY:h,anonymous:true,value:this.getLabel()});
break;
case j:H=new qx.ui.basic.Image().set({alignY:h,anonymous:true,source:this.getIcon()});
break;
case k:H=new qx.ui.tree.core.FolderOpenButton().set({alignY:h});
H.addListener(d,this._onChangeOpen,this);
H.addListener(u,this._updateIndent,this);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},addWidget:function(I,J){this._add(I,J);
},addSpacer:function(){if(!this.__lh){this.__lh=new qx.ui.core.Spacer();
}else{this._remove(this.__lh);
}this._add(this.__lh);
},addOpenButton:function(){this._add(this.getChildControl(k));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var K=this.getChildControl(j);

if(this.__lg){this._remove(K);
}this._add(K);
this.__lg=true;
},addLabel:function(L){var M=this.getChildControl(f);

if(this.__lf){this._remove(M);
}
if(L){this.setLabel(L);
}else{M.setValue(this.getLabel());
}this._add(M);
this.__lf=true;
},_applyIcon:function(N,O){if(!this.__lj()){this.__lk(N);
}else if(!this.isOpen()){this.__lk(N);
}},_applyIconOpened:function(P,Q){if(this.isOpen()){if(this.__li()&&this.__lj()){this.__lk(P);
}else if(!this.__li()&&this.__lj()){this.__lk(P);
}}},_applyLabel:function(R,S){var T=this.getChildControl(f,true);

if(T){T.setValue(R);
}},_applyOpen:function(U,V){var open=this.getChildControl(k,true);

if(open){open.setOpen(U);
}var W;
if(U){W=this.__lj()?this.getIconOpened():null;
}else{W=this.getIcon();
}
if(W){this.__lk(W);
}U?this.addState(c):this.removeState(c);
},__li:function(){return qx.util.PropertyUtil.getUserValue(this,j);
},__lj:function(){return qx.util.PropertyUtil.getUserValue(this,s);
},__lk:function(X){var Y=this.getChildControl(j,true);

if(Y){Y.setSource(X);
}},isOpenable:function(){var ba=this.getOpenSymbolMode();
return (ba===b||ba===i&&this.hasChildren());
},_shouldShowOpenSymbol:function(){throw new Error("Abstract method call.");
},_applyOpenSymbolMode:function(bb,bc){this._updateIndent();
},_updateIndent:function(){var be=0;
var open=this.getChildControl(k,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bd=open.getBounds();

if(bd){be=bd.width;
}else{return;
}}else{open.exclude();
}}
if(this.__lh){this.__lh.setWidth((this.getLevel()+1)*this.getIndent()-be);
}},_applyIndent:function(bf,bg){this._updateIndent();
},getLevel:function(){throw new Error("Abstract method call.");
},syncWidget:function(){this._updateIndent();
},hasChildren:function(){throw new Error("Abstract method call.");
}},destruct:function(){this._disposeObjects(C);
}});
})();
(function(){var j="visible",h="excluded",g="qx.ui.tree.core.AbstractTreeItem",f="open",e="abstract",d="addItem",c="removeItem",b="__et",a="__lE";
qx.Class.define(g,{extend:qx.ui.tree.core.AbstractItem,type:e,construct:function(k){qx.ui.tree.core.AbstractItem.call(this,k);
this.__et=[];
},properties:{parent:{check:g,nullable:true}},members:{__et:null,__lE:null,getTree:function(){var n=this;

while(n.getParent()){n=n.getParent();
}var m=n.getLayoutParent()?n.getLayoutParent().getLayoutParent():0;

if(m&&m instanceof qx.ui.core.scroll.ScrollPane){return m.getLayoutParent();
}return null;
},_applyOpen:function(o,p){if(this.hasChildren()){this.getChildrenContainer().setVisibility(o?j:h);
}qx.ui.tree.core.AbstractItem.prototype._applyOpen.call(this,o,p);
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(f,true);

if(!open){return false;
}var q=this.getTree();

if(!q.getRootOpenClose()){if(q.getHideRoot()){if(q.getRoot()==this.getParent()){return false;
}}else{if(q.getRoot()==this){return false;
}}}return this.isOpenable();
},_updateIndent:function(){if(!this.getTree()){return;
}qx.ui.tree.core.AbstractItem.prototype._updateIndent.call(this);
},getLevel:function(){var r=this.getTree();

if(!r){return;
}var s=this;
var t=-1;

while(s){s=s.getParent();
t+=1;
}if(r.getHideRoot()){t-=1;
}
if(!r.getRootOpenClose()){t-=1;
}return t;
},addState:function(u){qx.ui.tree.core.AbstractItem.prototype.addState.call(this,u);
var w=this._getChildren();

for(var i=0,l=w.length;i<l;i++){var v=w[i];

if(v.addState){w[i].addState(u);
}}},removeState:function(x){qx.ui.tree.core.AbstractItem.prototype.removeState.call(this,x);
var z=this._getChildren();

for(var i=0,l=z.length;i<l;i++){var y=z[i];

if(y.removeState){z[i].removeState(x);
}}},getChildrenContainer:function(){if(!this.__lE){this.__lE=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?j:h});
}return this.__lE;
},hasChildrenContainer:function(){return this.__lE;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__et;
},hasChildren:function(){return this.__et?this.__et.length>0:false;
},getItems:function(A,B,C){if(C!==false){var D=[];
}else{var D=[this];
}var G=this.hasChildren()&&(B!==false||this.isOpen());

if(G){var F=this.getChildren();

if(A===false){D=D.concat(F);
}else{for(var i=0,E=F.length;i<E;i++){D=D.concat(F[i].getItems(A,B,false));
}}}return D;
},recursiveAddToWidgetQueue:function(){var H=this.getItems(true,true,false);

for(var i=0,l=H.length;i<l;i++){qx.ui.core.queue.Widget.add(H[i]);
}},__lF:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(I){var J=this.getChildrenContainer();
var M=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var N=arguments[i];
var L=N.getParent();

if(L){L.remove(N);
}N.setParent(this);
var K=this.hasChildren();
J.add(N);

if(N.hasChildren()){J.add(N.getChildrenContainer());
}this.__et.push(N);

if(!K){this.__lF();
}
if(M){N.recursiveAddToWidgetQueue();
M.fireNonBubblingEvent(d,qx.event.type.Data,[N]);
}}
if(M){qx.ui.core.queue.Widget.add(this);
}},addAt:function(O,P){if(P==this.__et.length){this.add(O);
return;
}var T=O.getParent();

if(T){T.remove(O);
}var R=this.getChildrenContainer();
O.setParent(this);
var S=this.hasChildren();
var Q=this.__et[P];
R.addBefore(O,Q);

if(O.hasChildren()){R.addAfter(O.getChildrenContainer(),O);
}qx.lang.Array.insertAt(this.__et,O,P);

if(!S){this.__lF();
}
if(this.getTree()){O.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(U,V){var W=U.getParent();

if(W){W.remove(U);
}this.addAt(U,this.__et.indexOf(V));
},addAfter:function(X,Y){var ba=X.getParent();

if(ba){ba.remove(X);
}this.addAt(X,this.__et.indexOf(Y)+1);
},addAtBegin:function(bb){this.addAt(bb,0);
},remove:function(bc){for(var i=0,l=arguments.length;i<l;i++){var bg=arguments[i];

if(this.__et.indexOf(bg)==-1){this.warn("Cannot remove treeitem '"+bg+"'. It is not a child of this tree item.");
return;
}var bd=this.getChildrenContainer();

if(bg.hasChildrenContainer()){var bf=bg.getChildrenContainer();

if(bd.getChildren().indexOf(bf)>=0){bd.remove(bf);
}}qx.lang.Array.remove(this.__et,bg);
bg.setParent(null);
bd.remove(bg);
}var be=this.getTree();

if(be){be.fireNonBubblingEvent(c,qx.event.type.Data,[bg]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bh){var bi=this.__et[bh];

if(bi){this.remove(bi);
}},removeAll:function(){var bj=this.__et.concat();

for(var i=this.__et.length-1;i>=0;i--){this.remove(this.__et[i]);
}return bj;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(a);
}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.core.AbstractTreeItem,properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.core.AbstractTreeItem,properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var l="Trash",k="icon/22/devices/drive-harddisk.png",j="Windows (C:)",h="Documents (D:)",g="icon/22/places/user-desktop.png",f="Inbox",e="Desktop",d="icon/22/actions/mail-mark-junk.png",c="rgb(228,228,228)",b="Network",bj="Junk",bi="Sent",bh="middle",bg="Files",bf="multi",be="Home",bd="icon/22/apps/internet-mail.png",bc="icon/22/places/user-trash-full.png",bb="Workspace",ba="icon/22/apps/office-chart.png",s="Data",t="icon/22/places/user-trash.png",q="icon/22/places/user-home.png",r="icon/22/places/network-server.png",o="icon/22/actions/document-send.png",p="Products",m="Simple View",n="Bugs",w="Family",x="TINC",F="Development",D="Announce",N="DVD (E:)",I="icon/22/mimetypes/media-image.png",V="Competition",S="Detailed View",z="Personal",Y="Questions",X="Vacation",W="Lists",y="Projects",B="Important",C="Devel",E="icon/22/devices/drive-optical.png",G="Holiday",J="Junk #",P="Chat",U="May ",u="Press",v="Company",A="Internal",M="Relations",L="kb",K="Images",R="Pustefix",Q="showcase.page.tree.Content",H="icon/22/actions/mail-message-new.png",O=" 2005",a="Edit",T="icon/22/actions/mail-mark-important.png";
qx.Class.define(Q,{extend:showcase.page.AbstractDesktopContent,construct:function(bk){showcase.page.AbstractDesktopContent.call(this,bk);
var bl=this.__xA();
this.getView().add(bl);
bl.moveTo(260,20);
bl.open();
},members:{_addWindowContent:function(bm){bm.set({caption:m,minWidth:200});
bm.setLayout(new qx.ui.layout.Grow());
var bx=new qx.ui.tree.Tree().set({width:200,height:400,selectionMode:bf,dragSelection:true,decorator:null,backgroundColor:c});
bm.add(bx);
var bC=new qx.ui.tree.TreeFolder(be).set({icon:q});
bC.setOpen(true);
bx.setRoot(bC);
var bA=new qx.ui.tree.TreeFolder(e).set({icon:g});
bA.setOpen(true);
bC.add(bA);
var bs=new qx.ui.tree.TreeFolder(bg);
var bq=new qx.ui.tree.TreeFolder(bb);
var br=new qx.ui.tree.TreeFolder(b).set({icon:r});
var bp=new qx.ui.tree.TreeFolder(l).set({icon:t});
bA.add(bs,bq,br,bp);
var by=new qx.ui.tree.TreeFile(j).set({icon:k});
var bo=new qx.ui.tree.TreeFile(h).set({icon:k});
var bn=new qx.ui.tree.TreeFile(N).set({icon:E});
bq.add(by,bo,bn);
var bB=new qx.ui.tree.TreeFolder(f).set({icon:bd,open:true});
var bt=new qx.ui.tree.TreeFolder(bj).set({icon:d});
var bw=new qx.ui.tree.TreeFolder(bi).set({icon:o});
var bv=new qx.ui.tree.TreeFolder(l).set({icon:bc});

for(var i=0;i<30;i++){bv.add(new qx.ui.tree.TreeFile(J+i).set({icon:H}));
}var bz=new qx.ui.tree.TreeFolder(s).set({icon:ba});
var bu=new qx.ui.tree.TreeFolder(B).set({icon:T});
bB.add(bt,bw,bv,bz,bu);
bC.add(bB);
},__xA:function(){var bJ=new qx.ui.window.Window().set({showClose:false,showMinimize:false,width:310,height:425,minWidth:200,caption:S,layout:new qx.ui.layout.Grow(),contentPadding:0});
var cm=new qx.ui.tree.Tree().set({width:600,height:500,decorator:null,selectionMode:bf,dragSelection:true,backgroundColor:c});
bJ.add(cm);
var cn=this.configureTreeItem(new qx.ui.tree.TreeFolder(),be,q);
cn.setOpen(true);
cm.setRoot(cn);
var cf=this.configureTreeItem(new qx.ui.tree.TreeFolder(),e,g);
cf.setOpen(true);
cn.add(cf);
var bH=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bg);
var bF=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bb);
var bG=this.configureTreeItem(new qx.ui.tree.TreeFolder(),b,r);
var bE=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,bc);
cf.add(bH,bF,bG,bE);
var cl=this.configureTreeItem(new qx.ui.tree.TreeFile(),j,k);
var ck=this.configureTreeItem(new qx.ui.tree.TreeFile(),h,k);
bF.add(cl,ck);
var cg=this.configureTreeItem(new qx.ui.tree.TreeFolder(),f,bd);
cg.setOpen(true);
var bI=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bj,d);
var bL=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bi,o);
var bK=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,t);
var bN=this.configureTreeItem(new qx.ui.tree.TreeFolder(),s,ba);
var bM=this.configureTreeItem(new qx.ui.tree.TreeFolder(),a);
var ca=this.configureTreeItem(new qx.ui.tree.TreeFolder(),P);
var bY=this.configureTreeItem(new qx.ui.tree.TreeFolder(),R);
var bX=this.configureTreeItem(new qx.ui.tree.TreeFolder(),x);
var cj=this.configureTreeItem(new qx.ui.tree.TreeFolder(),D);
var ci=this.configureTreeItem(new qx.ui.tree.TreeFolder(),C);
bX.add(cj,ci);
bM.add(ca,bY,bX);
var bP=this.configureTreeItem(new qx.ui.tree.TreeFolder(),W);
var bU=this.configureTreeItem(new qx.ui.tree.TreeFolder(),M);
var bV=this.configureTreeItem(new qx.ui.tree.TreeFolder(),v);
var bW=this.configureTreeItem(new qx.ui.tree.TreeFolder(),Y);
var bQ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),A);
var bR=this.configureTreeItem(new qx.ui.tree.TreeFolder(),p);
var bS=this.configureTreeItem(new qx.ui.tree.TreeFolder(),u);
var bT=this.configureTreeItem(new qx.ui.tree.TreeFolder(),F);
var cb=this.configureTreeItem(new qx.ui.tree.TreeFolder(),V);
bP.add(bU,bV,bW,bQ,bR,bS,bT,cb);
var bO=this.configureTreeItem(new qx.ui.tree.TreeFolder(),z);
var cd=this.configureTreeItem(new qx.ui.tree.TreeFolder(),n);
var ch=this.configureTreeItem(new qx.ui.tree.TreeFolder(),w);
var ce=this.configureTreeItem(new qx.ui.tree.TreeFolder(),y);
var cc=this.configureTreeItem(new qx.ui.tree.TreeFolder(),G);
bO.add(cd,ch,ce,cc);
var bD=this.configureTreeItem(new qx.ui.tree.TreeFolder(),K);

for(var i=0;i<50;i++){bD.add(this.configureTreeItem(new qx.ui.tree.TreeFolder(),X+(i+1),I));
}cg.add(bI,bL,bK,bN,bM,bP,bO,bD);
cn.add(cg);
return bJ;
},configureTreeItem:function(co,cp,cq){co.addSpacer();

if(co instanceof qx.ui.tree.TreeFolder){co.addOpenButton();
}co.addIcon();

if(arguments.length>=3){co.setIcon(cq);
}co.addLabel(cp);
co.addWidget(new qx.ui.core.Spacer(),{flex:1});
var cr=new qx.ui.basic.Label(Math.round(Math.random()*99)+L);
cr.setWidth(30);
cr.setAlignY(bh);
cr.setMargin([0,8]);
co.addWidget(cr);
cr=new qx.ui.basic.Label(U+Math.round(Math.random()*30+1)+O);
cr.setWidth(80);
cr.setAlignY(bh);
co.addWidget(cr);
return co;
}}});
})();

});
qx.$$packageData['029cbecec700']={"locales":{},"resources":{"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/internet-feed-reader.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/internet-telephony.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/22/apps/utilities-calculator.png":[22,22,"png","qx"],"qx/icon/Oxygen/32/apps/office-address-book.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/status/dialog-error.png":[32,32,"png","qx"]},"translations":{}};

qx.Part.$$notifyLoad("029cbecec700", function() {
(function(){var a="widgetbrowser.pages.Window";
qx.Class.define(a,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.__RL=new qx.ui.window.Desktop().set({decorator:new qx.ui.decoration.Single(10,null,"#ddd")});
this.add(this.__RL,{edge:0,top:0});
this.initWidgets();
},members:{__RL:null,initWidgets:function(){var f,d,c;
var b=this._widgets;
f=this.__RM();
b.push(f);
f.open();
this.__RL.add(f,{left:0,top:0});
d=this.__RN();
b.push(d);
d.open();
this.__RL.add(d,{left:300,top:100});
c=this.__RO();
b.push(c);
c.open();
this.__RL.add(c,{left:80,top:230});
},__RM:function(){var j=new qx.ui.window.Window("First Window","icon/16/apps/office-calendar.png");
j.setLayout(new qx.ui.layout.VBox(10));
j.setShowStatusbar(true);
j.setStatus("Demo loaded");
j.addListener("move",function(e){this.debug("Moved to: "+e.getData().left+"x"+e.getData().top);
},this);
j.addListener("resize",function(e){this.debug("Resized to: "+e.getData().width+"x"+e.getData().height);
},this);
var h=new qx.ui.basic.Atom("Welcome to your first own Window.<br/>Have fun!","icon/32/apps/office-address-book.png");
h.setRich(true);
j.add(h);
var g=new qx.ui.tabview.TabView;
j.add(g,{flex:1});
var m=new qx.ui.tabview.Page("Page 1");
g.add(m);
var k=new qx.ui.tabview.Page("Page 2");
g.add(k);
var l=new qx.ui.tabview.Page("Page 3");
g.add(l);
return j;
},__RN:function(){var t=new qx.ui.window.Window("Second Window","icon/16/apps/internet-feed-reader.png");
t.setLayout(new qx.ui.layout.VBox(10));
t.setStatus("Application is ready");
var C=new qx.ui.basic.Atom("The second window","icon/22/apps/utilities-calculator.png");
t.add(C);
var n=new qx.ui.container.Composite;
n.setLayout(new qx.ui.layout.HBox(10));
t.add(n,{flex:1});
var v=new qx.ui.groupbox.GroupBox("Basics");
v.setLayout(new qx.ui.layout.VBox(4));
n.add(v,{flex:1});
var q=new qx.ui.form.CheckBox("Show Close");
q.setValue(true);
q.addListener("changeValue",function(e){t.setShowClose(e.getData());
});
v.add(q);
var B=new qx.ui.form.CheckBox("Show Maximize");
B.setValue(true);
B.addListener("changeValue",function(e){t.setShowMaximize(e.getData());
});
v.add(B);
var u=new qx.ui.form.CheckBox("Show Minimize");
u.setValue(true);
u.addListener("changeValue",function(e){t.setShowMinimize(e.getData());
});
v.add(u);
var x=new qx.ui.form.CheckBox("Allow Close");
x.setValue(true);
x.addListener("changeValue",function(e){t.setAllowClose(e.getData());
});
v.add(x);
var D=new qx.ui.form.CheckBox("Allow Maximize");
D.setValue(true);
D.addListener("changeValue",function(e){t.setAllowMaximize(e.getData());
});
v.add(D);
var s=new qx.ui.form.CheckBox("Allow Minimize");
s.setValue(true);
s.addListener("changeValue",function(e){t.setAllowMinimize(e.getData());
});
v.add(s);
var o=new qx.ui.form.CheckBox("Show Statusbar");
o.setValue(false);
o.addListener("changeValue",function(e){t.setShowStatusbar(e.getData());
});
v.add(o);
var F=new qx.ui.groupbox.GroupBox("Resizable");
F.setLayout(new qx.ui.layout.VBox(4));
n.add(F,{flex:1});
var z=new qx.ui.form.CheckBox("Use resize frame");
z.setValue(true);
z.addListener("changeValue",function(e){t.setUseResizeFrame(e.getData());
});
F.add(z);
var A=["top","right","bottom","left"];

for(var i=0;i<A.length;i++){var y=A[i];
var r=new qx.ui.form.CheckBox("Resizable "+y).set({value:true});
r.bind("value",t,"resizable"+qx.lang.String.firstUp(y));
F.add(r);
}var p=new qx.ui.groupbox.GroupBox("Moveable");
p.setLayout(new qx.ui.layout.VBox(4));
n.add(p,{flex:1});
var w=new qx.ui.form.CheckBox("Movable");
w.setValue(true);
w.addListener("changeValue",function(e){t.setMovable(e.getData());
});
p.add(w);
var E=new qx.ui.form.CheckBox("Use move frame");
E.addListener("changeValue",function(e){t.setUseMoveFrame(e.getData());
});
p.add(E);
return t;
},__RO:function(){var G=new qx.ui.window.Window("Third Window","icon/16/apps/internet-telephony.png");
G.setLayout(new qx.ui.layout.VBox);
G.setMinWidth(200);
G.setMaxWidth(450);
G.setMaxHeight(400);
G.setAllowMaximize(false);
var H=this.__RP();
this._widgets.push(H);
var I=new qx.ui.form.Button("Open Modal Dialog 1","icon/16/apps/office-calendar.png");
I.addListener("execute",H.open,H);
G.add(I);
return G;
},__RP:function(){var K=new qx.ui.window.Window("First Modal Dialog");
K.setLayout(new qx.ui.layout.VBox(10));
K.setModal(true);
K.moveTo(150,150);
this.__RL.add(K);
var J=this.__RQ();
this._widgets.push(J);
var M=new qx.ui.form.Button("Open Modal Dialog 2","icon/16/apps/office-calendar.png");
M.addListener("execute",J.open,J);
K.add(M);
var L=new qx.ui.form.CheckBox("Modal");
L.setValue(true);
K.add(L);
L.addListener("changeValue",function(e){K.setModal(e.getData());
});
return K;
},__RQ:function(){var O=new qx.ui.window.Window("Second Modal Dialog");
O.setLayout(new qx.ui.layout.VBox(10));
O.setModal(true);
O.setShowClose(false);
O.moveTo(300,300);
this.__RL.add(O);
var N=new qx.ui.basic.Atom("Do you want to fly to Berlin?","icon/32/status/dialog-error.png");
O.add(N);
var Q=new qx.ui.container.Composite;
Q.setLayout(new qx.ui.layout.HBox(10,"right"));
O.add(Q);
var R=new qx.ui.form.Button("Yes","icon/16/actions/dialog-ok.png");
R.addListener("execute",function(e){O.close();
});
Q.add(R);
var P=new qx.ui.form.Button("No","icon/16/actions/dialog-cancel.png");
P.addListener("execute",function(e){alert("Sorry, please click 'Yes'!");
});
Q.add(P);
return O;
}}});
})();
(function(){var a="qx.ui.window.Desktop";
qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.window.MDesktop,qx.ui.core.MBlocker],implement:qx.ui.window.IDesktop,construct:function(b){qx.ui.core.Widget.call(this);
b=b||new qx.ui.window.Window.DEFAULT_MANAGER_CLASS();
this.getContentElement().disableScrolling();
this._setLayout(new qx.ui.layout.Canvas());
this.setWindowManager(b);
}});
})();

});
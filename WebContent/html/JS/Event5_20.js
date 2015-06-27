
Ext.onReady( function(){
var win=new Ext.Window({
title:'基本事件�',
width:300,
height:400}
);
win.on(
{ 'show':function(){alert("窗体显示");}
},
{ 'close':function(){alert("窗体已关闭");}
}

);
win.show();

}
);
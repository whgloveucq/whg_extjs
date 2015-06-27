Ext.onReady(
function(){

var win =new Ext.Window(
{
title:'基本事件 ',
width:400,
height:300,
listeners:{
'show':function(){
this.fireEvent('myEvt');
}
}
});
win.addEvents('myEvt');
win.on('myEvt',function(){alert("我自己定义的事件")
;
})
win.show();



}


);



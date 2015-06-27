Ext.onReady(
function(){
 var win=new Ext.Window(
 {
 title:'window',
 width:400,
 height:300,
 renderTo:Ext.getBody(),
 listeners:{
 
 "render":function(){
 alert("window 渲染完毕，即将显示。");
 	
 },
  "beforeclose":function(){
 alert("即将关闭window。");
 }
 }
 }
 );
 win.show();
}
);

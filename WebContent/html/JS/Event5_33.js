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
 alert("window ��Ⱦ��ϣ�������ʾ��");
 	
 },
  "beforeclose":function(){
 alert("�����ر�window��");
 }
 }
 }
 );
 win.show();
}
);

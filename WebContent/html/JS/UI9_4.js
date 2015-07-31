Ext.onReady(
function(){
Ext.Msg.show(
{ title:'提示',
  msg:'你的姓名是？',
  buttons:Ext.Msg.OK,
  prompt:true,
  fn:function(btnId,text,opt){
  Ext.DomHelper.insertHtml('beforeEnd',Ext.getBody().dom,"你的名字是"+text);
  	
  },
  icon:Ext.Msg.QUESTION,
  width:500,
  height:300


}


);


}




)
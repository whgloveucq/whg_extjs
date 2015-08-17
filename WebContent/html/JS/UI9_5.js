Ext.onReady(
function(){

var pbar=new Ext.ProgressBar(
{
id:'pbar',
width:300,
renderTo:Ext.getBody()

}

);

pbar.wait(
{
interval:100,
increment:15,
duration:5000,
text:'加载中，请稍候....'

}

);

var btn= new Ext.Button(
{ text:'停止',
  handler:function(){
  pbar.reset();
  pbar.updateText("强制结束2");
  
  },
  renderTo:Ext.getBody()


});

});
Ext.onReady(
function(){
var fn=function(){
Ext.Msg.alert("友情提醒","Ext.Msg不会导致脚本挂起");
Ext.DomHelper.insertHtml('beforeEnd',Ext.getBody().dom,"执行到这里了")
}
fn();
});
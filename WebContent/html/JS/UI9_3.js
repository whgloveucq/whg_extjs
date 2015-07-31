
Ext.onReady(
function(){
Ext.Msg.show({
		title:'提示',
		msg:'此操作无法回退，是否继续？',
		buttons:Ext.Msg.YESNO,
		fn:function(btnId,text,opt){
			if(btnId=="yes"){
				Ext.DomHelper.insertHtml('beforeEnd',Ext.getBody().dom,"您选择了继续操作。")
			}else if(btnId=="no"){
				Ext.DomHelper.insertHtml('beforeEnd',Ext.getBody().dom,"取消操作。")
			}
		},
		icon:Ext.Msg.WARNING
	})
})
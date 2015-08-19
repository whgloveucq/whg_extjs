Ext.onReady(function(){
	var panel=new Ext.Panel({
		title:'基础Panel',
		width:400,
		height:300,
		collapsible:true,
		autoLoad:{url:'content.html',scripts:true},
		renderTo:Ext.getBody()
	})
});
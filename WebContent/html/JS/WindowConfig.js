Ext.onReady(function(){
	var win=new Ext.Window({
		id:'poeam',
		title:'佛法',
		width:400,
		height:300,
		closeAction:'hide',
		maximizable:true,
		minimizable:true,
		constrain:true,
		plain:true,
		html:"一切有为法，如梦幻泡影<br/>如露亦如电<br/>应作如是观<br/>"
	});
	win.show();
});
function whoRU(){
	var html=Ext.getDom("poeam").innerHTML;
	var win=new Ext.Window({
		title:'诗歌内容',
		width:400,
		height:300,
		html:html
	});
	win.show();
}
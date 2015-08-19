var html=Ext.getDom("poeam").innerHTML;
var win=new Ext.Window({
	title:'诗歌内容',
	id:'same',
	width:400,
	height:300,
	html:html
});

function whoRU(){
	win.show();
}
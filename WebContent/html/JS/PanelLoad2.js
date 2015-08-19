var win=null;

var init=function(){
	win=new Ext.Window({
		id:'same',
		title:'测试变量啦',
		width:400,
		height:300,
		collapsible:true,
		autoLoad:{url:'content2.html',scripts:true},
		renderTo:Ext.getBody()
	});
	win.show();
}

Ext.onReady(init);
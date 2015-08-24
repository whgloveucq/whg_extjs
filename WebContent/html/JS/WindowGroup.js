Ext.onReady(function(){
	var group=new Ext.WindowGroup();
	for(var i=0;i<4;i++){
		var win=new Ext.Window({
			id:"第"+i+"个",
			title:"第"+i+"个",
			x:400+i*50,
			width:400,
			height:300
		});
		group.register(win);
		win.show();
	}
	
	var btn=new Ext.Button({
		text:'全部隐藏',
		handler:function(){
			group.hideAll();
		},
		renderTo:Ext.getBody()
	})
	
	var btn=new Ext.Button({
		text:'全部显示',
		handler:function(){
			group.each(function(win){
				win.show();
			});
		},
		renderTo:Ext.getBody()
	})
});
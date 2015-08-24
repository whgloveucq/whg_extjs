Ext.onReady(function(){
//	var panel=new Ext.Panel({
//		title:'基础Panel',
//		width:400,
//		height:300,
//		collapsible:true,
//		html:'问渠哪得清如许，为有源头活水来。',
//		renderTo:Ext.getBody(),
//		bbar:[
//			{
//				text:'诗歌内容',
//				handler:function(){
//					var win=new Ext.Window({
////						id:'poeamWin',
//						title:'诗歌内容',
//						width:400,
//						height:300,
//						html:panel.body.dom.innerHTML
//					});
//					win.show();
//				}
//			}
//		]
//	})
	var contentWin=null;
	var panel=new Ext.Panel({
		title:'基础Panel',
		width:400,
		height:300,
		collapsible:true,
		html:'问渠哪得清如许，为有源头活水来。',
		renderTo:Ext.getBody(),
		bbar:[
			{
				text:'诗歌内容',
				handler:function(){
					if(contentWin){
						contentWin.show();
						return;//这里是亮点
					}
					contentWin=new Ext.Window({
						id:'poeamWin',
						title:'诗歌内容',
						width:400,
						height:300,
						closeAction:'hide',
						html:panel.body.dom.innerHTML
					});
					contentWin.show();
				}
			}
		]
	});
});
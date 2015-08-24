Ext.onReady(function(){
	/**
	 * 简单的树节点数据
	 */
	var nodes={
		text:'日月神教',
		expanded:true,
		leaf:false,
		children :[
			{
				id:'boss',
	            text: '任我行',
	            leaf: true
	        }, 
	        {
	        	id:'gg',
	            text: '令狐冲',
	            leaf: true
	        }, 
	        {
	        	id:'mm',
	            text: '任盈盈',
	            leaf: true
	 		}
	 	]
	};
	
	/**
	 * 这里是关键
	 */
 	var loadNodeInfo=function(node,e){
 		var id=node.attributes.id;
 		if(!id){
 			Ext.Msg.alert('提示信息', '节点必须设置唯一的id');
 			return;
 		}
 		var comp=rightTab.getComponent(id);
 		if(!comp){
 			comp=new Ext.Panel({
 				id:id,
 				title:node.attributes.text||"",
 				html:node.attributes.text
 			});
 			rightTab.add(comp);
 		}
 		rightTab.setActiveTab(comp);
 		rightTab.scrollToTab(comp);
 	}
 	
 	/**
 	 * 树面板
 	 */
	var leftTree=new Ext.tree.TreePanel({
		id:'leftTree',
		title: '左侧树',
		region: 'west',
        root:nodes,
        width: 200,
        autoScroll: true,
        split: true,
        rootVisible: true,
        collapsible: true,
        listeners:{'click':loadNodeInfo}
	});
	
	/**
	 * 右侧的tab
	 */
	var rightTab=new Ext.TabPanel({
		id:'rightTab',
		region:'center'
	});
	
	/**
	 * viewport
	 */
	var vp=new Ext.Viewport({
		layout:'border',
		items:[leftTree,rightTab]
	});
})

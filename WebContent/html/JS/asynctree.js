Ext.onReady(function(){
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
		loader: new Ext.tree.TreeLoader({
			dataUrl:'../../pages/asynctree.jsp',
			listeners:{
				'beforeload':function(treeLoader, node) {
			        this.baseParams.text=node.attributes.text;
			    }
			}
		}),
        root: new Ext.tree.AsyncTreeNode({
            id:'root',
            text:'日月神教',
            expanded: true,
			expanded:true,
			leaf:false
        }),
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

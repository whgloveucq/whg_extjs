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
        root:{
        	id:'rootNode',
			text:'日月神教',
			expanded:true,
			leaf:false
		},
		//这样写会自动创建一个TreeLoader
		//dataUrl:'TreeLoader.json',
        loader:new Ext.tree.TreeLoader({
        //	dataUrl:'TreeLoader.json',
      	dataUrl:'../pages/queryDepartment.jsp',
        	listeners:{
        		'beforeload':function(loader,node) {
			        this.baseParams.text = node.attributes.text;
			    }
        	}
        }),
        width: 200,
        autoScroll: true,
        split: true,
        rootVisible: true,
        collapsible: true,
        listeners:{
	    	'click':loadNodeInfo
        }
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

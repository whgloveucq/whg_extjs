Ext.onReady(function(){
	/**
	 * 简单的树节点数据
	 */
	var nodes={
		text:'南京市',
		expanded:true,
		leaf:false,
		children :[
			{
				id:'JiangNin',
	            text: '江宁区',
	            leaf: true
	        }, 
	        {
	        	id:'GuLou',
	            text: '鼓楼区',
	            leaf: true
	        }, 
	        {
	        	id:'XuanWu',
	            text: '玄武区',
	            leaf: true
	 		}
	 	]
	};
	
	/**
	 * 单击事件处理
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
 	 * 双击
 	 */
 	var dbClickHandler=function(node,e){
 		alert("双击");
 	}
 	
 	/**
 	 * 右键处理函数
 	 */
 	var contextMenuHadler=function(node,e) {
		node.select();
        var c = node.getOwnerTree().contextMenu;
        c.contextNode = node;
        c.showAt(e.getXY());
	}
 	
	/**
	 * 右键菜单
	 */
 	var contextMenu=new Ext.menu.Menu({
        items: [{
            id: 'delete-node',
            text: '切除区县'
        }],
        listeners: {
            itemclick: function(item) {
                switch (item.id) {
                    case 'delete-node':
                        var n = item.parentMenu.contextNode;
                        if (n.parentNode) {
                            n.remove();
                        }
                        break;
                }
            }
        }
    });
	    
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
        contextMenu: contextMenu,
        listeners:{
        	'click':loadNodeInfo,
        	'dblclick':dbClickHandler,
        	'contextmenu':contextMenuHadler
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

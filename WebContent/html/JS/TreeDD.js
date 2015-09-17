Ext.onReady(function(){
	/**
	 * 简单的树节点数据
	 */
	var nodes={
		text:'江苏省',
		expanded:true,
		leaf:false,
		children :[
			{
				id:'NanJing',
	            text: '南京市',
	            leaf: false,
	            expanded:true,
	            children:[
	            	{
	            		text:'江宁区',
	            		leaf: true
	            	},
	            	{
	            		text:'鼓楼区',
	            		leaf: true
	            	}
	            ]
	        }, 
	        {
	        	id:'NanTong',
	            text: '南通市',
	            leaf: false,
	            expanded:true,
	            children:[
	            	{
	            		text:'如皋市',
	            		leaf: true
	            	},
	            	{
	            		text:'海安县',
	            		leaf: true
	            	},
	            	{
	            		text:'启东市',
	            		leaf: true
	            	}
	            ]
	        }, 
	        {
	        	id:'SuZhou',
	            text: '苏州市',
	            leaf: true
	 		}
	 	]
	};
	    
 	/**
 	 * 树面板
 	 */
	var leftTree=new Ext.tree.TreePanel({
		id:'leftTree',
        root:nodes,
        animate: true,
        enableDD: true,
        autoScroll: true,
        rootVisible: true
	});
	
	var win=new Ext.Window({
		title:'节点拖拽',
		width:400,
		height:300,
		layout:'fit',
		items:leftTree
	});
	win.show();
})

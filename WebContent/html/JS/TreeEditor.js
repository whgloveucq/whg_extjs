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
	        }
	 	]
	};

	var tree=new Ext.tree.TreePanel({
        root:nodes,
        animate: true,
        autoScroll: true,
        rootVisible: true
	});
	
	var editor=new Ext.tree.TreeEditor(tree,{
		allowBlank:false,
		blankText:'必须输入'
	});
	
	var win=new Ext.Window({
		title:'树编辑',
		width:400,
		height:300,
		layout:'fit',
		items:tree
	});
	win.show();
})

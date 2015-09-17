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
	            		text:'鼓楼区',
	            		leaf: true
	            	},
	            	{
	            		text:'江宁区',
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
	            	}, 
			        {
			        	id:'YangZhou',
			            text: 'SomeCity',
			            leaf: true
			 		}
	            ]
	        }, 
	        {
	        	id:'SuZhou',
	            text: '苏州市',
	            leaf: false
	 		}, 
	        {
	        	id:'YangZhou',
	            text: '扬州市',
	            leaf: false
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
        autoScroll: true,
        rootVisible: true
	});
	
	/**
	 * 过滤器
	 */
	var filter = new Ext.tree.TreeFilter(leftTree, {
		clearBlank: true,
		autoClear: true
	});
	
	var hiddenNodes = [];
	function filterTree(){
		var text =Ext.getCmp('searchField').getValue();
		Ext.each(hiddenNodes, function(n){
			n.ui.show();
		});
		if(!text){
			filter.clear();
			return;
		}
		leftTree.expandAll();
		
		//注意这里的正则表达式
		var re = new RegExp(Ext.escapeRe(text), 'i');
		filter.filterBy(function(n){
			return !n.isLeaf()|| re.test(n.text);
		});
		
		hiddenNodes = [];
		leftTree.root.cascade(function(n){
			if(!n.isLeaf()&& n.ui.ctNode.offsetHeight<3){
	            n.ui.hide();
	            hiddenNodes.push(n);
	        }
		});
	}
	
	var win=new Ext.Window({
		title:'动态搜索',
		width:400,
		height:300,
		layout:'fit',
		items:leftTree,
		buttons:[
			{
				id:'searchField',
				width: 120,
				emptyText:'请输入',
				xtype:'textfield',
				enableKeyEvents:true,
				listeners:{
					keyup: function(){
						filterTree();
					}
				}
			}
		]
	});
	win.show();
})

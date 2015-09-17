Ext.onReady(function(){
	var tree=new Ext.ux.tree.ColumnTree({
		title:'ColumnTree',
		width:600,
		height:300,
		rootVisible:false,
		autoScroll:false,
		renderTo:Ext.getBody(),
		columns:[
			{
				header:'书名',
				width:200,
				dataIndex:'bookName'
			},
			{
				header:'作者',
				width:200,
				dataIndex:'author'
			},
			{
				header:'出版社',
				width:200,
				dataIndex:'publisher'
			}
		],
		root:new Ext.tree.AsyncTreeNode({
			text:'root'
		}),
		loader:new Ext.tree.TreeLoader({
			url:'../html/JSONDATA/ColumnTreeTest.json',
			uiProviders:{
				'col':Ext.ux.tree.ColumnNodeUI
			}
		})
	});
})

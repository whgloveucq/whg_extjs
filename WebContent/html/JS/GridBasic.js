Ext.onReady(function() {
	//测试数据
	var myData=[
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京']
	];
	
	//定义store
	var store=new Ext.data.ArrayStore({
		fields:[
			{name:'userName'},
			{name:'age'},
			{name:'date'},
			{name:'addr'}
		]
	});
	//store.loadData(myData);
    
	//面板
    var grid = new Ext.grid.GridPanel({
    	//注意这个配置项
    	viewConfig: {
        	forceFit: true
    	},
    	store:store,
    	columns:[
    		{header:'姓名',dataIndex:'userName'},
    		{header:'年龄',dataIndex:'age'},
    		{header:'出身日期',dataIndex:'date'},
    		{header:'地址',dataIndex:'addr'}
    	]
    });
    
    //作为容器的window
    var win=new Ext.Window({
    	title:'基本Grid',
    	width:600,
    	height:400,
    	layout:'fit',
    	items:[grid],
    	bbar:[{
    		text:'获取选中',
    		handler:function(){
    			alert(Ext.encode(grid.selModel.getSelected().data));
    		}
    	}]
    })
    win.show();
});
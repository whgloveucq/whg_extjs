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
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京']
	];
	
	//定义store
	var store = new Ext.ux.data.PagingArrayStore({
		fields:[
			{name:'userName'},
			{name:'age'},
			{name:'date'},
			{name:'addr'}
		],
	    data: myData,
	    lastOptions: {params: {start: 0, limit: 10}}
	});
	
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
    	],
    	bbar: new Ext.PagingToolbar({
            pageSize: 10,
            store: store,
            displayInfo: true
        })
    });
    
    //作为容器的window
    var win=new Ext.Window({
    	title:'本地分页',
    	width:600,
    	height:300,
    	layout:'fit',
    	items:grid
    })
    win.show();
});
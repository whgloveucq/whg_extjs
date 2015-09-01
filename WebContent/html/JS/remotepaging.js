Ext.onReady(function() {
	//定义store
	var store=new Ext.data.JsonStore({
		url:'remotepaging.jsp',
		root:'rows',
		totalProperty:'totalCount',
		baseParams:{limit:10},
		autoLoad:{params:{start:0,limit:10}},
		fields:[
			{name:'userName'},
			{name:'age'},
			{name:'date'},
			{name:'addr'}
		]
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
    	title:'远程分页',
    	width:600,
    	height:300,
    	layout:'fit',
    	items:grid
    })
    win.show();
});
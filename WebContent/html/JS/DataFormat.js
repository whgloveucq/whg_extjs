Ext.onReady(function() {
	//测试数据
	var myData=[
		['漠漠',26,'71.72','1985-10-11'],
		['漠漠',26,'71.72','1985-10-11'],
		['漠漠',26,'71.72','1985-10-11'],
		['漠漠',26,'71.72','1985-10-11'],
		['漠漠',26,'71.72','1985-10-11'],
		['漠漠',26,'71.72','1985-10-11'],
		['漠漠',26,'71.72','1985-10-11'],
		['漠漠',26,'71.72','1985-10-11'],
		['漠漠',26,'71.72','1985-10-11'],
		['漠漠',26,'71.72','1985-10-11']
	];
	
	//定义store
	var store=new Ext.data.ArrayStore({
		fields:[
			{name:'userName'},
			{name:'age'},
			{name:'money'},
			{name:'date'}
		]
	});
	store.loadData(myData);
    
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
    		{header:'钱',dataIndex:'money',renderer: Ext.util.Format.usMoney},
    		{header:'日期',dataIndex:'date',renderer: Ext.util.Format.date('Y-m-d')}
    	]
    });
    
    //作为容器的window
    var win=new Ext.Window({
    	title:'数据格式化',
    	width:600,
    	height:400,
    	layout:'fit',
    	items:grid
    })
    win.show();
});
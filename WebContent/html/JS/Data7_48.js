Ext.onReady(function(){
	var data = [
		['大漠穷秋1',25,'1986-04-02','我不告诉你'],
		['大漠穷秋2',26,'1985-04-02','我不告诉你'],
		['大漠穷秋3',27,'1984-04-02','我不告诉你'],
		['大漠穷秋4',28,'1983-04-02','我不告诉你'],
		['大漠穷秋5',29,'1982-04-02','我不告诉你']
	];
	
	//定义ArrayStore,ArrayStore内部就默认使用的就是ArrayReader
	var store=new Ext.data.ArrayStore({
		fields:[
			{name:'userName'},
			{name:'age'},
			{name:'date'},
			{name:'addr'}
		]
	});
	store.loadData(data);
	
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
    		{header:'出生日期',dataIndex:'date'},
    		{header:'地址',dataIndex:'addr'}
    	]
    });
    
    //作为容器的window
    var win=new Ext.Window({
    	title:'ArrayStore',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:grid
    })
    win.show();
});
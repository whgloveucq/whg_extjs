Ext.onReady(function(){
	var data = [
		{personName:'大漠穷秋1',personAge:25,date:'1986-04-02',addr:'长安锦绣城'},
		{personName:'大漠穷秋2',personAge:26,date:'1985-04-02',addr:'长安锦绣城'},
		{personName:'大漠穷秋3',personAge:27,date:'1984-04-02',addr:'长安锦绣城'},
		{personName:'大漠穷秋4',personAge:28,date:'1983-04-02',addr:'长安锦绣城'},
		{personName:'大漠穷秋5',personAge:29,date:'1982-04-02',addr:'长安锦绣城'}
	]
	
	var store=new Ext.data.JsonStore({
		proxy:new Ext.data.MemoryProxy(),
		fields:[
			{name:'userName',mapping:'personName'},
			{name:'age',mapping:'personAge'},
			{name:'date'},
			{name:'addr'}
		]
	});
	store.loadData(data);
	
    var grid = new Ext.grid.GridPanel({
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
    
    var win=new Ext.Window({
    	title:'MemoryProxy',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:grid
    })
    win.show();
});
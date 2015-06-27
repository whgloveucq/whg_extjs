Ext.onReady(function(){
	var data = [
			['大漠穷秋',25,'1986-04-02','我不告诉你'],
		['漠漠',26,'1985-04-02','我不告诉你'],
		['月光漠利亚',27,'1984-04-02','我不告诉你'],
		['桃花岛|漠漠',28,'1983-04-02','我不告诉你']
	];
	
	var store=new Ext.data.ArrayStore({
		fields:[
			{name:'userName'},
			{name:'age'},
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
    	title:'排序',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:grid,
    	buttons:[
    		{
    			text:'按姓名排序',
    			handler:function(){
    				store.sort('userName','desc');
    			}
    		},
    		{
    			text:'按年龄排序',
    			handler:function(){
    				store.sort('age','asc');
    			}
    		}
    	]
    })
    win.show();
});
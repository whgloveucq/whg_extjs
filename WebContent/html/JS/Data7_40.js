Ext.onReady(function(){
	var data = [
		['大漠穷秋1',25,'1986-04-02','我不告诉你'],
		['大漠穷秋2',26,'1985-04-02','我不告诉你'],
		['漠漠',26,'1985-04-02','我不告诉你'],
		['月光漠利亚1',26,'1985-04-02','我不告诉你'],
		['月光漠利亚2',27,'1984-04-02','我不告诉你'],
		['桃花岛|漠漠',28,'1983-04-02','我不告诉你']
	];
	
	var store = new Ext.data.GroupingStore({
        reader: new Ext.data.ArrayReader({}, [
	     	{name:'name'},
			{name:'age'},
			{name:'date'},
			{name:'addr'}
	    ]),
      //  data:data,
        sortInfo:{field:'name',direction: "ASC"},
        groupField:'age'
    });
store.loadData(data);
    
    var grid = new Ext.grid.GridPanel({
    	viewConfig: {
        	forceFit: true
    	},
    	store:store,
    	columns:[
    		{header:'姓名',dataIndex:'name'},
    		{header:'年龄',dataIndex:'age'},
    		{header:'出生日期',dataIndex:'date'},
    		{header:'地址',dataIndex:'addr'}
    	],
    	view: new Ext.grid.GroupingView({
            forceFit:true
        })
    });
    
    var win=new Ext.Window({
    	title:'数据分组',
    	width:600,
    	height:400,
    	layout:'fit',
    	items:grid,
    	buttons:[
    		{
    			text:'按年龄分组',
    			handler:function(){
    				store.groupBy('age',true);
    			}
    		},
    		{
    			text:'清除分组',
    			handler:function(){
    				store.clearGrouping();
    			}
    		}
    	]
    })
    win.show();
});
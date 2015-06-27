//filterBy()实例解析
Ext.onReady(function(){
	var data = [
		['大漠穷秋1',25,'1986-04-02','我不告诉你'],
		['大漠穷秋2',26,'1985-04-02','我不告诉你'],
		['大漠穷秋3',27,'1984-04-02','我不告诉你'],
		['大漠穷秋4',28,'1983-04-02','我不告诉你'],
		['大漠穷秋5',29,'1982-04-02','我不告诉你']
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
    
    /**
     * 杩囨护鍑芥暟
     */
    var filterFn=function(){
    	var val=Ext.getCmp('value').getValue();
		if(!val){
			store.clearFilter();
			return;
		}
		store.filterBy(function(record,id){
			if(record.get('age')==val){
				return true;
			}
			return false;
		});
    }
    
    var win=new Ext.Window({
    	title:'过滤记录',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:grid,
    	buttons:[
    		{
    			xtype:'label',
    			text:'年龄等于'
    		},
    		{
    			id:'value',
    			xtype:'textfield',
    			width:120,
    			enableKeyEvents:true,
    			listeners:{
    				'keyup':filterFn
    			}
    		}
    	]
    })
    win.show();
});
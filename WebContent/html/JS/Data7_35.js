
//使用filter进行单条件和多条件联合过滤
Ext.onReady(function(){
	var data = [
		['大漠穷求',25,'1986-04-02','我不告诉你'],
		['默默',26,'1985-04-02','我不告诉你'],
		['月光莫利亚',27,'1984-04-02','我不告诉你'],
		['桃花岛默默',28,'1983-04-02','我不告诉你']
	];
	
	var store=new Ext.data.ArrayStore({
		fields:[
			{name:'name'},
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
    		{header:'姓名',dataIndex:'name'},
    		{header:'年龄',dataIndex:'age'},
    		{header:'出生日期',dataIndex:'date'},
    		{header:'地址',dataIndex:'addr'}
    	]
    });
    
    /**
     * 单条件过滤
     */
    var singlFn=function(){
    	var val=Ext.getCmp('name').getValue();
		if(!val){
			store.clearFilter();
			return;
		}
		store.filter('name',val,true,true);
    }
    
    /**
     * 多条件过滤
     */
    var multiFn=function(){
    	var name=Ext.getCmp('name').getValue();
    	var age=Ext.getCmp('age').getValue();
    	store.filter([
    		{property:'name',value:name,anyMatch:true,caseSensitive:true},
    		{property:'age',value:age}
    	]);
    }
    
    var win=new Ext.Window({
    	title:'过滤记录',
    	width:600,
    	height:400,
    	layout:'fit',
    	items:grid,
    	buttons:[
    		{
    			xtype:'label',
    			text:'姓名'
    		},
    		{
    			id:'name',
    			xtype:'textfield',
    			width:80
    		},
    		{
    			xtype:'label',
    			text:'年龄'
    		},
    		{
    			id:'age',
    			xtype:'textfield',
    			width:80
    		},
    		{
    			text:'按姓名过滤 ',
    			handler:singlFn
    		},
    		{
    			text:'联合过滤',
    			handler:multiFn
    		},
    		{
    			text:'重置',
    			handler:function(){
    				store.clearFilter();
    			}
    		}
    	]
    })
    win.show();
});
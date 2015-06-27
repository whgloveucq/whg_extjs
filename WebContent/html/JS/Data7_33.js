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
    
    var win=new Ext.Window({
    	title:'CopyRecord',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:grid,
    	buttons:[
    		{
    			text:'拷贝Record',
    			handler:function(){
    				var record=grid.getSelectionModel().getSelected();
    				//alert(Ext.encode(record));//不能直接这么干哦，会陷入死循环的哦：store和 Record之间交叉引用
    				if(!record)
    				{
    					Ext.Msg.alert("友情提示","请选择需要拷贝的记录");
    					return;
    				}
    				var newRecord=record.copy();
    				alert(Ext.encode(newRecord));
    			}
    		}
    	]
    })
    win.show();
});
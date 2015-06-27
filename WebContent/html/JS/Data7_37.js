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
    
    /**
     * 杩囨护鍑芥暟
     */
    var filterFn=function(){
    	var val=Ext.getCmp('value').getValue();
		if(!val){
			store.clearFilter();
			return;
		}
		val=String(val).trim().split(" ");
		
		store.filterBy(function(record,id){
			var data=record.data;
			for(var p in data){
				var prop=String(data[p]);
				for(var i=0;i<val.length;i++){
					//构造正则表达式
					var matcher=val[i];
					var er = Ext.escapeRe;
           			matcher = String(matcher);
            		matcher = '^' + er(matcher);
            		matcher=new RegExp(matcher);
            		//对记录的所有的所有属性进行匹配
            		if(matcher.test(prop)){
            			return true;
            		}
				}
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
    			id:'value',
    			xtype:'textfield',
    			width:120,
    			enableKeyEvents:true,
    			listeners:{
    				'keyup':function(){
    					store.clearFilter();
    				}
    			}
    		},
    		{
				text:'搜索',
				handler:filterFn
    		}
    	]
    })
    win.show();
});
Ext.onReady(function(){
	var store=new Ext.data.JsonStore({
		url:'a.jsp',
		root:'rows',
		fields:[
			{name:'userName',mapping:'personName'},
			{name:'age',mapping:'personAge'},
			{name:'date'},
			{name:'addr'}
		]
	});
	
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
    	title:'JsonStore',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:grid,
    	buttons:[
    		{
	    		text:'从 a.json加载数据',
		    	handler:function(){
		    		store.proxy.setUrl('../html/JSONDATA/a.json');
		    		store.load();
		    	}
	    	},
	    	{
		    	text:'从b.json加载数据',
		    	handler:function(){
		    		store.proxy.setUrl('../html/JSONDATA/b.json',true);
		    		store.load();
		    	}
    		},
    		{
		    	text:'不设置url,直接load',
		    	handler:function(){
		    		store.proxy.setUrl('../html/JSONDATA/b.json',true);
		    		store.load();
		    	}
    		}
    	]
    })
    win.show();
});
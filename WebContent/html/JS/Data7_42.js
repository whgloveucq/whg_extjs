Ext.onReady(function(){
	var ds=new Ext.data.JsonStore({
		url:'../html/JSONDATA/HttpProxy.json',
		fields:['personName','personAge','date','addr'],
		root:'rows'
	})
	ds.load();
	
    var grid = new Ext.grid.GridPanel({
    	viewConfig: {
        	forceFit: true
    	},
    	store:ds,
    	columns:[
    		{header:'姓名',dataIndex:'personName'},
    		{header:'年龄',dataIndex:'personAge'},
    		{header:'出生日期',dataIndex:'date'},
    		{header:'地址',dataIndex:'addr'}
    	]
    });
    
    var win=new Ext.Window({
    	title:'HttpProxy',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:grid
    })
    win.show();
});
Ext.onReady(function() {
	var myData=[
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京']
	];
	
	var store=new Ext.data.ArrayStore({
		fields:[
			{name:'userName'},
			{name:'age'},
			{name:'date'},
			{name:'addr'}
		],
		data:myData
	});
    
	var contextMenu=new Ext.menu.Menu({
		id:'ctMenuAll',
		items:[{
			text:'弹出数据',
			handler:function(){
				var record=grid.selModel.getSelected();
				alert(Ext.encode(record.data));
			}
		}]
	});
	
    var grid = new Ext.grid.GridPanel({
    	viewConfig: {
        	forceFit: true
    	},
    	store:store,
    	columns:[
    		{header:'姓名',dataIndex:'userName'},
    		{header:'年龄',dataIndex:'age'},
    		{header:'出身日期',dataIndex:'date'},
    		{header:'地址',dataIndex:'addr'}
    	],
    	listeners:{
    		'rowcontextmenu':function(grid,rowIndex,e){
    			e.preventDefault();
    			grid.getSelectionModel().selectRow(rowIndex);
    			contextMenu.showAt(e.getXY());
    		}
    	}
    });
    
    var win=new Ext.Window({
    	title:'基本Grid',
    	width:600,
    	height:400,
    	layout:'fit',
    	items:[grid]
    })
    win.show();
});
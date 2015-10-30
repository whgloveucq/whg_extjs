Ext.onReady(function(){
	var myData=[
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
		['漠漠',26,'1985-10-11','江苏南京'],
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
		]
	});
	store.loadData(myData);
	
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
    	]
    });
    
    var dataToExcel=function (records){
		var excel = new ActiveXObject("Excel.Application");
		var excelDoc = excel.Workbooks.Add();
		var sheet = excelDoc.ActiveSheet;
		var len=records.length;
		
		var counter=0;
		for(var i=0;i<len;i++){
			var record=records[i];
			if(record&&record.data){
				for(var p in record.data){
					sheet.Cells(i+1,counter+1).value=record.data[p];
					counter++;
				}
			}
			counter=0;
		}
		excel.Visible = true;
	}
    
    
    var win=new Ext.Window({
    	title:'基本Grid',
    	width:600,
    	height:400,
    	layout:'fit',
    	items:grid,
    	buttons:[
    		{
    			text:'导出到Excel',
    			handler:function(){
    				var records=grid.getSelectionModel().getSelections();
    				if(!records.length){
    					alert("请选中需要导出的行，Ctrl多选");
    					return;
    				}
    				dataToExcel(records);
    			}
    		}
    	]
    })
    win.show();
})
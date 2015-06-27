Ext.onReady(function(){
	var data = [
		['大漠穷秋1',25,'1986-04-02','你猜1',false],
		['大漠穷秋2',26,'1985-04-02','你猜2',false],
		['大漠穷秋3',27,'1984-04-02','你猜3',true],
		['大漠穷秋4',28,'1983-04-02','你猜4',true],
		['大漠穷秋5',29,'1982-04-02','你猜5',false]
	];
	
	var store=new Ext.data.ArrayStore({
		fields:[
			{name:'userName'},
			{name:'age'},
			{name:'date'},
			{name:'addr'},
			{name:'marrage',type:'boolean'}
		]
	});
	store.loadData(data);
	
    var grid = new Ext.grid.GridPanel({
    	viewConfig: {
        	forceFit: true
    	},
    	border:false,
    	store:store,
    	sm:new Ext.grid.RowSelectionModel({
            singleSelect: true,
            listeners: {
                rowselect: function(sm, row, rec) {
                    Ext.getCmp("fm").getForm().loadRecord(rec);
                }
            }
        }),
    	columns:[
    		{header:'姓名',dataIndex:'userName'},
    		{header:'年龄',dataIndex:'age'},
    		{header:'出生日期',dataIndex:'date'},
    		{header:'地址',dataIndex:'addr'},
    		{header:'婚否',dataIndex:'marrage',
    			renderer:function rating(v) {
			       if(v){
			       	return '<span style="color:red;">是</span>';
			       }
			       return '<span style="color:green;">否</span>';
		    	}
		    }
    	]
    });
    
    var form=new Ext.FormPanel({
    	id:'fm',
    	border:false,
    	bodyStyle:{
    		'padding':'30 10'
    	},
    	defaults:{
    		width:120
    	},
    	labelWidth:80,
    	items:[
    		{
	    		fieldLabel:'姓名',
	    		name:'userName',
	    		hiddenName:'userName',
	    		xtype:'textfield'
    		},
    		{
	    		fieldLabel:'年龄',
	    		name:'age',
	    		hiddenName:'age',
	    		xtype:'textfield'
    		},
    		{
	    		fieldLabel:'出生日期',
	    		name:'date',
	    		hiddenName:'date',
	    		xtype:'textfield'
    		},
    		{
	    		fieldLabel:'地址',
	    		name:'addr',
	    		hiddenName:'addr',
	    		xtype:'textfield'
    		},
    		{
                xtype:'radiogroup',
                columns:'auto',
                fieldLabel:'婚否',
                name: 'marrage',
                hiddenName:'marrage',
                items: [{
                    inputValue:'true',
                    boxLabel: '是'
                }, {
                    inputValue:'false',
                    boxLabel: '否'
                }]
            }
    	]
    });
    
    var win=new Ext.Window({
    	title:'RecordAndForm',
    	width:600,
    	height:400,
    	layout:'column',
    	layoutConfig: {
            padding:'5',
            align:'middle'
        },
    	items:[
    		{
	            columnWidth: 0.60,
	            height:400,
	            layout: 'fit',
	            items:[grid]
            },
            {
	            columnWidth: 0.40,
	            height:400,
	            layout: 'fit',
	            items:[form]
	        }
       ]
    })
    win.show();
});
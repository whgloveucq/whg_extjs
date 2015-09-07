Ext.onReady(function(){
	var myData=[
		['漠漠','男',26,'1985-10-11',true],
		['漠漠','男',26,'1985-10-11',false],
		['漠漠','男',26,'1985-10-11',false],
		['漠漠','男',26,'1985-10-11',false],
		['漠漠','男',26,'1985-10-11',false]
	];

	var store=new Ext.data.ArrayStore({
		fields:[
			{name:'name'},
			{name:'gender'},
			{name:'age'},
			{name:'date'},
			{name:'married'}
		],
		data:myData
	});
    
	//这是一个插件，用来渲染一个带checkbox的列
	var checkColumn=new Ext.grid.CheckColumn({
       header: '婚否',
       dataIndex: 'married',
       width: 55
    });
		    
    var grid = new Ext.grid.EditorGridPanel({
    	viewConfig: {
        	forceFit: true
    	},
    	plugins: checkColumn,
        clicksToEdit: 1,
    	store:store,
    	columns:[
    		new Ext.grid.RowNumberer(),
    		{	
    			header:'姓名',
    			dataIndex:'name',
    			editor: new Ext.form.TextField({
                    allowBlank: false
                })
            },
            {
                header:'性别',
                dataIndex:'gender',
                editor:new Ext.form.ComboBox({
		    		mode:'local',
		    		displayField:'name',
		    		valueField:'name',
		    		triggerAction:'all',
		    		allowBlank:false,
		    		store: new Ext.data.JsonStore({
				        fields: ['name','value'],
				        data:[
				        	{name:'男',value:'male'},
				        	{name:'女',value:'female'},
				        	{name:'其他',value:'other'}
				        ]
				    })
                })
            },
    		{
    			header:'年龄',
    			dataIndex:'age',
    			editor: new Ext.form.NumberField({
                    allowBlank: false,
                    allowNegative: false,
                    maxValue: 100
                })
			},
    		{
    			header:'出生日期',
    			dataIndex:'date',
    			renderer:Ext.util.Format.dateRenderer('Y-m-d'),
    			editor: new Ext.form.DateField({
                    format: 'Y-m-d',
                    minValue: '1980-01-01',
                    disabledDays: [0, 6],
                    disabledDaysText: '禁止日期'
                })
			},
			checkColumn
    	]
    });
    
    var win=new Ext.Window({
    	title:'可编辑Grid',
    	width:600,
    	height:400,
    	draggable:true,
    	layout:'fit',
    	items:[grid],
    	buttons:[
    		{
    			text:'新建',
    			handler:function(){
    				var User = grid.getStore().recordType;
	                var u = new User({
	                    name: '新用户',
	                    gender:'男',
	                    age:0,
	                    date:(new Date()).clearTime(),
	                    married: false
	                });
	                grid.stopEditing();
	                store.insert(0,u);
	                grid.startEditing(0, 0);
    			}
    		},
    		{
    			text:'删除',
    			handler:function(){
    				var sel=grid.getSelectionModel().getSelectedCell();
    				if(!sel||!sel[0]){
    					Ext.Msg.alert("提示信息","请选中需要删除的行。");
    					return;
    				}
    				var rowNum=sel[0];
    				grid.stopEditing();
    				store.removeAt(rowNum);
    				grid.startEditing(0, 0);
    			}
    		},
    		{
    			text:'保存',
    			handler:function(){
    				var modified=store.getModifiedRecords();
    				if(!modified||modified.length==0){
    					Ext.Msg.alert("提示信息","没有需要保存的数据。");
    					return;
    				}
    				var arr=[];
    				Ext.each(modified,function(record){
    					arr.push(record.data);
    				});
    				alert(Ext.encode(arr));
    			}
    		}
    	]
    })
    win.show();
});
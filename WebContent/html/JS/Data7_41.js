Ext.onReady(function(){
	var data = [
		['大漠穷秋1',25,'1986-04-02','我不告诉你'],
		['大漠穷秋2',26,'1985-04-02','我不告诉你'],
		['漠漠',26,'1985-04-02','我不告诉你'],
		['月光漠利亚1',26,'1985-04-02','我不告诉你'],
		['月光漠利亚2',27,'1984-04-02','我不告诉你'],
		['桃花岛|漠漠',28,'1983-04-02','我不告诉你']
	];
	
	var store = new Ext.data.ArrayStore({
        fields:[
	     	{name:'name',type:'string'},
			{name:'age',type:'int'},
			{name:'gender'},
			{name:'joinDate',type:'date',dateFormat:'Y-m-d'}
	    ]
    });
    store.loadData(data);
    
    var grid = new Ext.grid.EditorGridPanel({
    	viewConfig: {
        	forceFit: true
    	},
    	store:store,
    	columns:[
    		{header:'姓名',dataIndex:'name',
				editor: new Ext.form.TextField({
	                allowBlank: false
	            })
            },
    		{header:'年龄',dataIndex:'age',
    			editor:new Ext.form.NumberField({
    				allowBlank: false,
                    allowNegative: false,
                    maxValue: 100
    			})
    		},
    		{header:'性别',dataIndex:'gender',
    			editor:new Ext.form.ComboBox({
                    typeAhead:true,
                    triggerAction:'all',
                    /**
                     * combo瑕佷娇鐢ㄧ殑鏁版嵁宸茬粡闅愯棌鍦‥ditorRecord.html涓�
                     * 鏍煎紡鏄繖鏍风殑锛�
                     * <select name="gender" id="gender" style="display: none;">
                     * 	<option value="鐢�>鐢�/option>
                     * 	<option value="濂�>濂�/option>
                     *	<option value="鍏朵粬">鍏朵粬</option>
                     * </select>
                     */
                    transform:'gender',
                    lazyRender: true
                })
    		},
    		{header:'加入日期',dataIndex:'joinDate',
    			renderer: function(value){
			        return value?value.dateFormat('Y-m-d'):'';
			    },
    			editor: new Ext.form.DateField({
                    format: 'Y-m-d',
                    minValue: '1980-01-01',
                    disabledDays: [0,6],
                    disabledDaysText:'不能选择此日期'
                })
             }
    	]
    });
    
    var win=new Ext.Window({
    	title:'数据编辑',
    	width:600,
    	height:400,
    	layout:'fit',
    	items:grid,
    	buttons:[
    		{
    			text:'提交更改',
    			handler:function(){
    				store.commitChanges();
    			}
    		},
    		{
    			text:'回退所有变更',
    			handler:function(){
    				store.rejectChanges();
    			}
    		}
    	]
    })
    win.show();
});
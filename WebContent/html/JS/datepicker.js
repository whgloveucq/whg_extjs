Ext.onReady(function() {
	Ext.QuickTips.init();

	var form = new Ext.form.FormPanel({
		renderTo : Ext.getBody(),
		title : '日期选择器',
		autoHeight : true,
		width : 300,
		defaults:{
			width:120
		},
		bodyStyle : 'padding: 5px',
		items : [{
			xtype : 'datefield',
			name : 'startDate',
			format:'Y年m月d日',
			disabledDates:['10日'],
			fieldLabel : '起始日期'
		}]
	});
	
	
	var win=new Ext.Window({
    	title:'datepicker',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:[form],
    	buttons:[
    		{
    			text:'提交',
    			handler:function(){
    				var values=form.getForm().getValues();
    				alert(Ext.encode(values));
    			}
    		}
    	]
    })
    win.show();
	
	
	
});
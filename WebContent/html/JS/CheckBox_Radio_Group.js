Ext.onReady(function() {
    var fp = new Ext.form.FormPanel({
    	bodyStyle:{
    		'padding':'50 80'
    	},
    	labelWidth:90,
    	items:[
    		{
	            xtype: 'radiogroup',
	            fieldLabel: '单选',
	            items: [
	                {boxLabel:'男',name:'gender1',inputValue:1},
	                {boxLabel:'女',name:'gender1',inputValue:2,checked: true},
	                {boxLabel:'其它',name:'gender2',inputValue:3}
	            ]
        	},
        	{
	            xtype: 'checkboxgroup',
	            fieldLabel: '复选',
	            items: [
	                {boxLabel:'男',name:'gender2',inputValue:1},
	                {boxLabel:'女',name:'gender2',inputValue:2,checked: true},
	                {boxLabel:'其它',name:'gender2',inputValue:3}
	            ]
        	}
    	]
    });
    
    var win=new Ext.Window({
    	title:'CheckBoxGroup',
    	width:600,
    	height:300,
    	layout:'fit',
    	items:[fp],
    	buttons:[
    		{
    			text:'提交',
    			handler:function(){
    				var values=fp.getForm().getValues();
    				alert(Ext.encode(values));
    			}
    		}
    	]
    })
    win.show();
});
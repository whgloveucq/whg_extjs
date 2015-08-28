Ext.onReady(function() {
    var fp = new Ext.form.FormPanel({
    	bodyStyle:{
    		'padding':'80 70'
    	},
    	defaults:{
    		width:150
    	},
    	labelWidth:50,
    	items:[
    		{
    			xtype:'combo',
	    		fieldLabel:'性别',
	    		id:'genderCombo',
	    		name:'gender',
	    		hiddenName:'gender',
	    		mode:'remote',
	    		displayField:'name',
	    		valueField:'value',
	    		triggerAction:'all',
	    		allowBlank:false,
	    		pageSize:3,
	    		listWidth:250,
	    		emptyText:'请选择',
	    		store: new Ext.data.JsonStore({
	    			url:'../html/JSONDATA/ComboPaging.json',
	    			totalProperty:'total', 
	    			root:'rows',
			        fields: ['name','value']
			    })
    		}
    	]
    });
    
    var win=new Ext.Window({
    	title:'远程数据',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:[fp],
    	bbar:[
    		{
    			text:'获取值',
    			handler:function(){
    				alert(Ext.encode(fp.form.getValues()));
    			}
    		}
    	]
    })
    win.show();
});
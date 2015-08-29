Ext.onReady(function() {
    var fp = new Ext.form.FormPanel({
    	bodyStyle:{
    		'padding':'50 80'
    	},
    	labelWidth:90,
    	items:[
    		{
    			xtype:'fieldset',
    			title: '可以折叠起来',
            	autoHeight: true,
            	defaultType:'checkbox',
            	collapsible: true,
            	items:[
            		{fieldLabel:'项目1'},
            		{fieldLabel:'项目2'},
            		{fieldLabel:'项目3'},
            		{fieldLabel:'项目4'}
            	]
    		}
    	]
    });
    
    var win=new Ext.Window({
    	title:'FieldSet',
    	width:400,
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
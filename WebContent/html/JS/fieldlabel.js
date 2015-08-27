Ext.onReady(function() {
    var fp = new Ext.form.FormPanel({
    	//这个配置项用来把表单项定位到面板的中央
    	bodyStyle:{
    		'padding':'80 100'
    	},
    	//这个配置项很重要，尤其在有很多表单项的时候
    	defaults:{
    		width:120
    	},
    	labelWidth:50,
    	//分隔符不仅仅可以是默认的冒号，还可以用HTML标签
    	labelSeparator:'<font color="red">>></font>',
    	items:[
    		{
    			id:'_userName',
	    		fieldLabel:'姓名',
	    		name:'userName',
	    		hiddenName:'userName',
	    		xtype:'textfield'
    		}
    	]
    });
    
    var win=new Ext.Window({
    	title:'改FieldLabel',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:[fp],
    	buttons:[
    		{
    			text:'改FieldLabel',
    			handler:function(){
    				var dom=fp.getEl().dom;
    				var node=Ext.DomQuery.selectNode("label[for='_userName']",dom);
    				node.innerHTML="更改后:";
    			}
    		}
    	]
    })
    win.show();
});
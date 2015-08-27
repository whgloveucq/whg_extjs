Ext.onReady(function() {
	//注意这里，tips要初始化一下，否则鼠标悬停不会提示信息
	Ext.QuickTips.init();
	Ext.form.Field.prototype.msgTarget = 'side'
    var fp = new Ext.form.FormPanel({
    	//这个配置项用来把表单项定位到面板的中央
    	bodyStyle:{
    		'padding':'50 80'
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
	    		fieldLabel:'姓名',
	    		name:'userName',
	    		hiddenName:'userName',
	    		xtype:'textfield',
	    		allowBlank:false,
	    		vtype:'chinese'
    		},
    		{
	    		fieldLabel:'email',
	    		name:'email',
	    		hiddenName:'email',
	    		xtype:'textfield',
	    		vtype:'email'
    		},
    		{
	    		fieldLabel:'手机',
	    		name:'cellPhone',
	    		hiddenName:'cellPhone',
	    		xtype:'textfield'
    		}
    	]
    });
    
    var win=new Ext.Window({
    	title:'表单提交',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:[fp],
    	buttons:[
    		{
    			text:'提交',
    			handler:function(){
    				var values=fp.getForm().getValues();
    				fp.getForm().submit({
    					url:'formsubmit.jsp',
    					params:{userInfo:Ext.encode(values)},
    					waitTitle:'正在提交',
    					waitMsg:'正在提交数据，请稍候...',
    					success:function(){
    						alert("提交成功");
    					},
    					failure:function(){
    						alert("提交失败");
    					}
    				});
    			}
    		}
    	]
    })
    win.show();
});
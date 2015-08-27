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
	    		fieldLabel:'姓名',
	    		name:'userName',
	    		hiddenName:'userName',
	    		xtype:'textfield'
    		},
    		{
	    		id:'_gender',
	    		fieldLabel:'性别',
	    		name:'gender',
	    		hiddenName:'gender',
	    		xtype:'combo',
	    		triggerAction: 'all',
		        valueField:'genderVal',
		        displayField:'genderName',
		        mode:'local',
				allowBlank:true,
	    		store:new Ext.data.SimpleStore({
		        	fields:['genderVal','genderName'],
		        	data:[
		        			["male",'男'], 
		        			["female",'女'],
		        			["other",'其它']
		        	]
		        })
    		},
    		{
	    		fieldLabel:'婚否',
	    		name:'isMarryed',
	    		hiddenName:'isMarryed',
	    		xtype:'checkbox'
    		}
    	]
    });
    
    var win=new Ext.Window({
    	title:'表单加载',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:[fp],
    	buttons:[
    		{
    			text:'加载本地',
    			handler:function(){
    				fp.getForm().loadRecord(new Ext.data.Record({userName:'漠漠',gender:'male',isMarryed:true}));
    			}
    		},
    		{
    			text:'加载远程',
    			handler:function(){
    				fp.getForm().load({
    					url:'formvalues.json',
    					method:'get',
    					waitMsg:'正在加载数据，请稍候...',
    					success:function(form,action){
    						form.setValues(action.result);
    					},
    					failure:function(){
    						alert("加载数据失败");
    					}
    				});
    			}
    		}
    	]
    })
    win.show();
});
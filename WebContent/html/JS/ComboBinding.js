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
	    		fieldLabel:'省',
	    		id:'provinceCombo',
	    		name:'province',
	    		hiddenName:'province',
	    		mode:'remote',
	    		displayField:'name',
	    		valueField:'value',
	    		triggerAction:'all',
	    		emptyText:'请选择',
	    		store: new Ext.data.JsonStore({
	    			url:'../html/JSONDATA/ComboBinding.json',
	    			root:'rows',
			        fields: ['name','value']
			    }),
			    listeners:{
			    	'select':function(combo,record,index){
			    		Ext.getCmp('cityCombo').clearValue();
			    	}
			    }
    		},
    		{
    			xtype:'combo',
	    		fieldLabel:'市',
	    		id:'cityCombo',
	    		name:'city',
	    		hiddenName:'city',
	    		mode:'remote',
	    		displayField:'name',
	    		valueField:'value',
	    		triggerAction:'all',
	    		emptyText:'请选择',
	    		store: new Ext.data.JsonStore({
	    			proxy:new Ext.data.HttpProxy({
	    				url:'../pages/ComboBinding.jsp',
	    				listeners:{
	    					'beforeload':function(proxy,params){
	    						var province=Ext.getCmp('provinceCombo').getValue();
	    						if(!province){
	    							Ext.Msg.alert("提醒","请先选择省份");
	    							return false;
	    						}
	    						params.province=province;
	    					}
	    				}
	    			}),
	    			root:'rows',
			        fields: ['name','value']
			    }),
			    listeners:{
			    	'beforequery':function(qe){
			    		delete qe.combo.lastQuery;
			    	}
			    }
    		}
    	]
    });
    
    var win=new Ext.Window({
    	title:'二级联动',
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
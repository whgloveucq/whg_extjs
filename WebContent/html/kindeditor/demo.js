Ext.onReady(function(){
	function submitData() {
		var contentData=Ext.getCmp('content1').getValue();
		var labelDom=Ext.getCmp('opeResult').el.dom;
		if(!contentData){
			labelDom.innerHTML="<font color='red'>没有任何数据</font>";
			return;
		}
		Ext.Ajax.request({
			url:'receiver.jsp',
			params:{contentData:contentData},
			success:function(){
				labelDom.innerHTML="<font color='green'>提交成功</font>";
			}
		})
	}
	
	var win=new Ext.Window({
		title:'配合Ext使用',
		width:600,
		height:400,
		layout:'fit',
		draggable:true,
		items:[
			{
				id:'content1',
				xtype:'textarea'
			}
		],
		buttons:[
			{
				id:'opeResult',
				xtype:'label',
				html:''
			},
			{
				text:'Ajax提交',
				handler:submitData
			}
		]
	});
	win.show();
	
	KE.init({
		id : 'content1',
		imageUploadJson : '/Extjs4.2/html/kindeditor/upload_json.jsp',
		fileManagerJson : '/Extjs4.2/html/kindeditor/file_manager_json.jsp',
		allowFileManager : true,
		afterCreate : function(id) {
			KE.event.ctrl(document, 13, function() {
				KE.util.setData(id);
				submitData();
			});
			KE.event.ctrl(KE.g[id].iframeDoc, 13, function() {
				KE.util.setData(id);
				submitData();
			});
		}
	});
	KE.create('content1');
})
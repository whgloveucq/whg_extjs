

Ext.onReady(


function(){
	var btn=new Ext.Button(
	{text:'按钮名称',
	applyTo:Ext.getBody()
	});
var win = new Ext.Window({
	       id:'myWin',
			title : '高级事件',
			width : 400,
			height : 300,
			listeners : {
				'show' : function() {
					Ext.Msg.alert(this.text,'haha');
				},
				scope:btn //作用域配置成其他对象
			}
		});
win.show();
}


);




Ext.onReady(
function(){
var win = new Ext.Window({
			title : '基本事件',
			width : 400,
			height : 300,
			listeners : {
				'show' : function() {
					Ext.Msg.alert("窗体显示");
				},
				'close' : function() {

					Ext.Msg.alert("窗体已关闭");
				}
			}
		});
win.show();
}


);


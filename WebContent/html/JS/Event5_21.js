

Ext.onReady(
function(){
var win = new Ext.Window({
	       id:'myWin',
			title : '高级事件',
			width : 400,
			height : 300,
			listeners : {
				'show' : function() {
					Ext.Msg.alert(this.getId());
				},
				'close' : function() {

					Ext.Msg.alert(this.getId());
				}
			}
		});
win.show();
}


);


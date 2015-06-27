Ext.onReady(
function(){
	
var win=new Ext.Window({
	       id:'myWin',
			title: '高级事件',
			width: 400,
			height: 300,
			listeners: {
				'hide': function() {
					alert("隐藏");
				},
				scope:win, //作用域配置成其他对象
				single:true
			}
		});

win.show();

var btnShow=new Ext.Button(
	{text:'显示',
	applyTo:Ext.getBody(),
	handler:function(){win.show();}
	});

	var btnHide=new Ext.Button({
	text:'隐藏',
	applyTo:Ext.getBody(),
	handler:function(){win.hide();}
	
	}
	);



}
)




Ext.onReady(
function() {
Ext.EventManager.on('myBtn','click',function(e)
{
//alert("按钮被点击");
//alert(this);
	alert(Ext.encode(this));
},{name:"whgloveu",age:25}
)

}

)
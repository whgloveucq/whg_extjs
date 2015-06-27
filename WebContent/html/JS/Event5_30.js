Ext.onReady(
function(){
var el=Ext.get('myBtn');
el.on('click',function(e){

	alert(Ext.encode(e));
})

}


)
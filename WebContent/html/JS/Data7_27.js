Ext.onReady(
function(){

	var cs =new Ext.util.MixedCollection();
	cs.on("add",function(index,obj,key){
	
		alert(Ext.encode(obj))
	})
	cs.add({
	content:'人之初，性本恶'
	});
	

}


)
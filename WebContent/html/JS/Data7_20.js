//each
Ext.onReady(function(){

	var cs= new Ext.util.MixedCollection();
	cs.addAll([
	{content:'桃花仙人种桃树，'},
	{content:'又摘桃花换酒钱。'}
	])
	//var result=cs.filter('content','桃花',false);
	var result=cs.filter('content','桃花',true);
	alert(Ext.encode(result.getRange()));

	
	
}




)
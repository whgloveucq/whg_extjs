//each
Ext.onReady(function(){

	var cs= new Ext.util.MixedCollection();
	cs.addAll([
	{content:'桃花坞里桃花庵，'},
	{content:'桃花庵下桃花仙。'}
	])
	var result=cs.filterBy(
	function(obj){
	if(obj.content.indexOf("桃花仙")!=-1)
	{
	
	return true;
	}
	return flase;
	
	}
	
	);

	alert(Ext.encode(result.getRange()));
	
}




)
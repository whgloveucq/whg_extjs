//each
Ext.onReady(function(){

	var cs= new Ext.util.MixedCollection();
	cs.addAll([
	{content:'�һ������һ��֣�'},
	{content:'�һ������һ��ɡ�'}
	])
	var result=cs.filterBy(
	function(obj){
	if(obj.content.indexOf("�һ���")!=-1)
	{
	
	return true;
	}
	return flase;
	
	}
	
	);

	alert(Ext.encode(result.getRange()));
	
}




)
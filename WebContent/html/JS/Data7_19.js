//each
Ext.onReady(function(){

	var cs= new Ext.util.MixedCollection();
	for(var i=0 ;i<1000;i++){
	
		cs.add(i);
	}
	var counter=0;
	cs.eachKey(function(key,item){ //���ɶ��˼
	counter++;
	if(item==500)
	{
	return false;
	}
	}
	);
	
alert("计数器>"+ counter)	;
}




)
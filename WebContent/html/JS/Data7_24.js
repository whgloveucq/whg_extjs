//不提供比较函数

Ext.onReady(function(){

	var cs=new Ext.util.MixedCollection();
	cs.addAll([100,200,300,400]);
	cs.sort('ASC');
	alert(Ext.encode(cs.getRange()));
	cs.sort('DESC');
	alert(Ext.encode(cs.getRange()));
	
	
	
	
}




)
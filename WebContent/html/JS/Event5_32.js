Ext.onReady(
function(){
	var ds=new Ext.data.JsonStore(
	{
	
		url:'../html/JSONDATA/StoreEvent.json',
		fields:['text','leaf'],
		root:'rows',
		listeners:{
		'load':function(ds,records,options){alert(records);},
		'exception':function(){alert("加载出错");}
		}
		
	}
	
	)
    ds.load();
}
);

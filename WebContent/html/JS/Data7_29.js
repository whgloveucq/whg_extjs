//7.29 ��������
Ext.onReady(
function(){
var cs=new Ext.util.MixedCollection();
cs.addAll(['你好','我好','大家好']);
var fn=function(a,b){

	if(typeof(a) == "string")
	{
	return a.localeCompare(b);
	}
      return a-b;
};
cs.sort('ASC',fn);
alert(cs.itemAt(0)+'---'+cs.itemAt(1)+"----"+cs.itemAt(2));
;
}
);
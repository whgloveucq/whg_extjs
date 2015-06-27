Ext.onReady(
function(){
var cs=new Ext.util.MixedCollection();
for (var i=0;i<10;i++)
{
cs.add(i,i)
}
cs.keySort('DESC');
alert(cs.keys);
	
	

}



)
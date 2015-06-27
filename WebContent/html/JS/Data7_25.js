Ext.onReady(
function(){
var cs=new Ext.util.MixedCollection();
cs.addAll(
[{name:'大漠穷秋1',age:'25'},
{name:'大漠穷秋2',age:'26'},
{name:'大漠穷秋3',age:'27'},
{name:'大漠穷秋4',age:'28'}
]);
var fn=function(obj1,obj2)
{
return obj1.age-obj2.age ;
}
cs.sort('ASC',fn);
alert(Ext.encode(cs.getRange()));
cs.sort('DESC',fn);
alert(Ext.encode(cs.getRange()));
	
	
	

}



)
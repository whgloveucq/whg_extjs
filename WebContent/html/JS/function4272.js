Ext.applyIf(Number.prototype,{
constrain:function(min,max){
return Math.min(Math.max(this,min),max) ;
}
})
Ext.onReady(
function(){
alert(Number(4).constrain(1,3));
	
}

);
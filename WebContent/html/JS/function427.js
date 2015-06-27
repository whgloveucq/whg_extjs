Array.prototype.indexOf=function(o)
{
	for(var i=0,len=this.length;i < len ; i++ )
	{
		if(this[i] == o ) return i;
	
	}
	return -1

}

Array.prototype.remove = function(o)
{
	var index = this.indexOf(o);
if(index != -1 )
{
	this.splice(index,1);

}
return this;
}




var arr=[1,2,3,4,5,6,7];
//var arr2=[ a2,b,c,d,e ];
var index=arr.indexOf(4);
var arr_rever= arr.reverse();
//var arr_concat=arr.concat();
alert(index);
alert(arr_rever);
//alert(arr_concat);
arr.remove(4);
alert(arr);

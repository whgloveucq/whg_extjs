function outerFn()
{
function innerFn()
{
	alert("调用嵌套的函数啦");

}
 return innerFn;

}
var cache=outerFn();
cache();
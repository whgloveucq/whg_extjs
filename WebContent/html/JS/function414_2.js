function outerFn()
{
function innerFn()
{
	alert("����Ƕ�׵ĺ�����");

}
 return innerFn;

}
var cache=outerFn();
cache();
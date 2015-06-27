//function myFunc()
//{
//	alert("this is my function ");
//}
//alert(myFunc);

var myFunc=function()
{
	alert("this is my function ");
}
alert(myFunc);

var obj={};
obj.sayHello=function()
{
	alert("Hi baby");
}
obj.sayHello();
delete obj.sayHello;
obj.sayHello();
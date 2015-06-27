Animal=function(name)
{
	this.name=name;

}
Animal.prototype.sayHello=function()
{
alert("你好，我是"+this.name);

}
var a1= new Animal("动物1");
a1.sayHello();
var a2=new Animal("动物2");
a2.sayHello();


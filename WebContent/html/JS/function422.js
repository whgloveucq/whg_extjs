Animal=function(name)
{
	this.name=name;

}
Animal.prototype.sayHello=function()
{
alert("��ã�����"+this.name);

}
var a1= new Animal("����1");
a1.sayHello();
var a2=new Animal("����2");
a2.sayHello();


Animal=function(name)
{ this.name=name;
}
Animal.prototype.sayHello=function(){
alert("我的名字是 "+ this.name);
}
Person=function(name)
{
this.name=name;
}
Person.prototype=new Animal("动物 ");
var person=new Person("人 ");
person.sayHello();
alert("是否来自原型?  false 表示来自原型,true表示来自对象自身属性-----"+person.name.hasOwnProperty());
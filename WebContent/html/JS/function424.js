
//��4.32
Person=function(name)
{
	this.name=name;
}
Person.prototype.sayHello=function()
{
	alert("��ӭ'"+ this.name+"'");
}
 
var p1=new Person("��Į����");
p1.sayHello=function(){
alert("���һ�ӭ'"+p1.name+"'");
}
p1.sayHello();
Animal=function(name)
{ this.name=name;
}
Animal.prototype.sayHello=function(){
alert("�ҵ������� "+ this.name);
}
Person=function(name)
{
this.name=name;
}
Person.prototype=new Animal("���� ");
var person=new Person("�� ");
person.sayHello();
alert("�Ƿ�����ԭ��?  false ��ʾ����ԭ��,true��ʾ���Զ�����������-----"+person.name.hasOwnProperty());
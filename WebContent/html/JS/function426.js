/*Animal=function(name,age){ 
  this.name=name;
  this.age=age;
  Animal.instanceCounter++;
}
Animal.instanceCounter=0;
var animal1=new Animal("��Į����1","27");
alert(Animal.instanceCounter+"---"+animal1.instaceCounter);
var animal2=new Animal("��Į����2","27");
alert(Animal.instanceCounter+"---"+animal2.instanceCounter);
*/
Animal=function(name,age)
{
	this.name=name;
	this.age=age;

}
Animal.prototype.TYPE="����";
var animal=new Animal("��Į����1","27");
alert("���ͣ�"+animal.TYPE+"---���֣�" + animal.name + "---���䣺"+ animal.age);



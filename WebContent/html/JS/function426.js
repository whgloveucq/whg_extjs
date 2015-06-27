/*Animal=function(name,age){ 
  this.name=name;
  this.age=age;
  Animal.instanceCounter++;
}
Animal.instanceCounter=0;
var animal1=new Animal("大漠穷秋1","27");
alert(Animal.instanceCounter+"---"+animal1.instaceCounter);
var animal2=new Animal("大漠穷秋2","27");
alert(Animal.instanceCounter+"---"+animal2.instanceCounter);
*/
Animal=function(name,age)
{
	this.name=name;
	this.age=age;

}
Animal.prototype.TYPE="动物";
var animal=new Animal("大漠穷秋1","27");
alert("类型："+animal.TYPE+"---名字：" + animal.name + "---年龄："+ animal.age);



Ext.onReady(
function(){

Animal=function(tail){
this.tail=tail||"动物的尾巴";
Animal.instanceCounter++;
}

Animal.instanceCounter=0;
Animal.prototype={

happy:function(){
alert("摇动>"+this.tail);
},
eat:function(){
alert("动物吃生的");
},
run:function(){
alert("动物四条腿跑");
},
fight:function(){
alert("动物往死里打");
}
}

Animal.prototype.constructor=Animal;
Person=function(name)
{
  Person.superclass.call(this);
  delete this.tail; //对象冒充，并删除不需要的属性
  this.name=name;
  for(var p in Animal){
  Person[p]=Animal[p]; //拷贝父类的静态属性
  	
  }		
}
Person.superclass=Animal;

var F=function(){};
F.prototype=Animal.prototype;
delete F.prototype.fight;
//F.prototype.eat=function(){

//alert("人类吃熟食的");

//}
Ext.apply(F.prototype,
{
eat:function(){
alert("人类吃熟食的");
},
run:function(){
alert("人类是两条腿跑的");
}

}


)
Person.prototype=new F(); //原型继承,并删除不需要的方法。
Person.prototype.constructor=Person;


var p1=new Person("大漠穷秋");
var p2=new Person("小秋");
alert(Person.instanceCounter);
alert(p1.tail);
alert(p1.name);
p1.eat();
p1.run();
p1.fight();

}
)

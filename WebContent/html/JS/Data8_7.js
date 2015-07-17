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
happy:function(){
alert("动物四条腿跑");
},
happy:function(){
alert("动物往死里打");
}
}

Animal.prototype.constructor=Animal;
Person=function(name)
{
  Person.superclass.call(this);
  this.name=name;
  for(var p in Animal){
  Person[p]=Animal[p];
  	
  }		
}
Person.superclass=Animal;
var p1=new Person("大漠穷秋");
var p2=new Person("小秋");
alert(Person.instanceCounter);
}
)

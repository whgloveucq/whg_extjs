Ext.onReady(
function(){
Animal=function(config){
Ext.apply(this.config);
this.tail="动物的尾巴";
this.eyes=2;
}
Animal.prototype={
happy:function(){
alert("摇尾巴");
},
eat:function(){
	alert("动物吃生的");
},
run:function(){
	alert("动物四条腿跑");
},
fight:function(){
	alert("动物 往死里打");
}

}
Animal.prototype.constructor=Animal;

Person=function(config){
      Person.superclass.constructor.call(this,config);
}
Person=Ext.extend(Animal,{
constructor:	function(config){
      Person.superclass.constructor.call(this,config);
},
tail:null,
happy:function(){
alert("微笑");
},
eat:function(){
alert("人是吃熟的");
},
run:function(){
alert("人是两条腿跑");
},
fight:Ext.emptyFn
})
//Person.prototype.constructor=Person
var p=new Person({name:"大漠穷秋"}) ;
alert("name>"+p.name);
alert("tail>"+p.tail);
alert("eyes>"+p.eyes);
p.happy();
p.eat();
p.run();
p.fight();
});
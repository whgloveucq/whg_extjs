Ext.onReady(
function(){

Animal=function(tail){
this.tail=tail||"鍔ㄧ墿鐨勫熬宸�;
Animal.instanceCounter++;
}

Animal.instanceCounter=0;
Animal.prototype={

happy:function(){
alert("鎽囧姩>"+this.tail);
},
eat:function(){
alert("鍔ㄧ墿鍚冪敓鐨�);
},
run:function(){
alert("鍔ㄧ墿鍥涙潯鑵胯窇");
},
fight:function(){
alert("鍔ㄧ墿寰�閲屾墦");
}
}

Animal.prototype.constructor=Animal;
Person=function(name)
{
  Person.superclass.call(this);
  delete this.tail; //瀵硅薄鍐掑厖锛屽苟鍒犻櫎涓嶉渶瑕佺殑灞炴�
  this.name=name;
  for(var p in Animal){
  Person[p]=Animal[p]; //鎷疯礉鐖剁被鐨勯潤鎬佸睘鎬�
  	
  }		
}
Person.superclass=Animal;

var F=function(){};
F.prototype=Animal.prototype;
delete F.prototype.fight;
//F.prototype.eat=function(){

//alert("浜虹被鍚冪啛椋熺殑");

//}
Ext.apply(F.prototype,
{
eat:function(){
alert("浜虹被鍚冪啛椋熺殑");
},
run:function(){
alert("浜虹被鏄袱鏉¤吙璺戠殑");
}

}


)
Person.prototype=new F(); //鍘熷瀷缁ф壙,骞跺垹闄や笉闇�鐨勬柟娉曘�
Person.prototype.constructor=Person;


var p1=new Person("澶ф紶绌风");
var p2=new Person("灏忕");
alert(Person.instanceCounter);
alert(p1.tail);
alert(p1.name);
p1.eat();

}
)

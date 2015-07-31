Ext.onReady(
function(){
/*
 * 父类 
 *  
 */
Animal=function(config){
alert("构造Animal");
Ext.apply(this,config);
}
  Animal.prototype.run=function(){
  alert("动物四条腿奔跑");
  }	
  /*
   * 子类
   * @class Person
   * @extends Animal
   */
	
  Person=Ext.extend(
  Animal,{
  run:function(){
  alert(this.name+"两条腿跑");
  }
  });
  /*
   * 测试代码
   */
	var p=new Person({name:'大漠'});
	p.run();
	
	
	
	
}
)
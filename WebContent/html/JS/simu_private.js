//例 4.55 使用闭包模拟私有属性
var person=function(){

	var id="root" ;
	var name="whgloveu";
	return {
	getId:function(){
	return id;
	},
	getName:function(){
	return name;
	}
	}
	
	
}();
alert(person.getId()+"----"+ person.getName());
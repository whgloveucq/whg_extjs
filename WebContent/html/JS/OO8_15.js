Ext.onReady(
function(){
/*
 * 纯接口（抽象类）性质
 */
MyInterface=function(){
alert("构造父类了么");
}
MyInterface.prototype.addUser=function(user){
var me=this;
me.users=me.users||[];
me.users.push(user);
}
MyInterface.prototype.getUser=function()
{
	return this.users;

}
/*
 * 具体实现类
 */
UserManager=function(){}
Ext.extend(UserManager,MyInterface);

/*
 * 测试代码
 */

var um=new UserManager();
um.addUser({name:'默默'});
alert(Ext.encode(um.getUser()));




}


)
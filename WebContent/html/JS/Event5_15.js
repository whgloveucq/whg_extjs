//MailRoom 构造函数
MailRoom=function()
{
this.events=['arrive','mail'];
this.listeners={};
}
//添加事件类型
MailRoom.prototype.addEvents=function(name){
this.events.push(name);
	
}
//添加监听函数
MailRoom.prototype.addListener=function(
name,fn){

if(this.events.indexOf(name)==-1)
{this.addEvents(name);}

var arr=this.listeners[name];
if(!arr){
arr=[fn];
}else{
if(arr.indexOf(fn) != -1){
arr.push(fn);
}
}
this.listeners[name]=arr;
}
//删除监听函数
MailRoom.prototype.removeListener=function(name,fn){
if(this.events.indexOf(name)==-1){return;}
var arr=this.listeners[name];	
if(!arr){ return ;}
if(arr.indexOf(fn) !=-1){

	arr.splice(arr.indexOf(fn),1);
	
}
	
}
//触发事件函数
MailRoom.prototype.fireEvent=function(name){
 if(!name||(this.events.indexOf(name)==-1)){
 return;
 }
 var arr=this.listeners[name];
 if(!arr){
 return;
 
 }
 for(var i=0;i<arr.length;i++)
 {
  var fn=arr[i];
  fn.call(fn,this);
 
 }
	
}
//定义快捷方式
MailRoom.prototype.on=MailRoom.prototype.addListener;
MailRoom.prototype.un=MailRoom.prototype.removeListener;
MailRoom.prototype.fire=MailRoom.prototype.fireEvent;
window.onload=function(){
var mr=new MailRoom();
//测试添加监听器
var fn=function(){
document.body.innerHTML+="207室2号床，你妈到啦!,<br/>";	
}
mr.on("arrive",fn)	;
mr.fire("arrive");
var fn1=function(){
document.body.innerHTML+="高一（10)班，信件到达!<br/>";
}
mr.on("mail",fn1);
mr.fire("mail");
//测试删除监听器
mr.un("arrive",fn);
mr.fire("arrive");
//测试新增事件类型
var fn2=function(){
document.body.innerHTML+="测试新的事件类型<br/>";
}
mr.on("test",fn2);
mr.fire("test");
}
//������һ���򵥵�DIV���ߣ���������DIV
function DivUtil(){}
DivUtil.prototype.counter=0;
DivUtil.prototype.creatDiv=function(){

var div=document.createElement('div');
div.style.background="#ffff00";
div.id=this.counter++;
document.body.appendChild(div);
return div;
}
var divUtil= new DivUtil();
//������"�߳���"
Thread =function(){}
Thread.prototype.start=function(){
var div=divUtil.creatDiv();
if( div.id >=10 )
{
	div.innerHTML="只允许10个线程，看看你的CPU，撑到爆";
	return;
}
var num=div.id;
setInterval(
function(){
div.innerHTML="第"+div.id+"个线程运行中..."+(num++);

},50);
}
//���ߺ�������߳� 
function addThread(){

	var thread=new Thread();
	thread.start();
	
	
}

var $=function(id){

	return document.getElementById(id);
	
	
}
function intercept()
{
var logger=$('logger');
var container1=$('div1');
container1.addEventListener("mouseover",function(e){
this.className='redBorder' ;
logger.innerHTML="鼠标进入:"+this.nodeName;
//这样就会把事件"私吞"掉啦
e.stopPropagation();	
	
},true);
container1.addEventListener("mouseout",function(e){
this.className='noBorder' ;
logger.innerHTML="鼠标退出:"+this.nodeName;
},true);

var target1=$('target1');
target1.addEventListener("mouseover",function(e){
this.className='redBorder';
logger.innerHTML="鼠标进入:"+this.nodeName;	
},true);

target1.addEventListener("mouseout",function(e){
this.className='noBorder';
logger.innerHTML="鼠标退出:"+this.nodeName;	
},true);



}
window.onload=function(){

intercept();
}
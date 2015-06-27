var $=function(id){
return document.getElementById(id);
}
function enableBubble(){
var div=$('div1');
var logger=$('logger');
var els=div.getElementsByTagName('*');
var fn1=function(e){
this.className='redBorder';
logger.innerHTML="鼠标进入:" + this.nodeName;
}
var fn2=function(e){
this.className='noBorder';
logger.innerHTML="鼠标退出:" + this.nodeName;
}

for(var i=0;i<els.length;i++)
{
	var el=els[i];
	el.addEventListener("mouseover",fn1,false);
	el.addEventListener("mouseout",fn2,false);
}}
function disableBubble()
{
	var div=$('div1');
	var logger=$('logger');
	var els=div.getElementsByTagName('*');
	var fn1=function(e){
	this.className='redBorder';
	logger.innerHTML="鼠标进入:" + this.nodeName;
	if(e)
	{
		e.stopPropagation();
	} else if(window.event)
	{
		window.event.cancelBubble = true;
	}
	
	}
var fn2=function(e){
	this.className='noBorder';
	logger.innerHTML='';
}
for (var i=0;i<els.length;i++)
{
var el=els[i];
	el.addEventListener("mouseover",fn1,false);
	el.addEventListener("mouseout",fn2,false);
}
window.onload=function(){
enableBubble();
}
}
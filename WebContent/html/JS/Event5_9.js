var $=function(id)
{
	return document.getElementById(id);

}
function enableBubble()
{
var logger=$('logger');
var ul=$('ul1');
ul.onmouseover=function(e){
e=e||window.event;
var target=e.target||e.srcElement;
if(target.nodeName="SPAN"){
	target.className='redBorder';
	logger.innerHTML=target.innerHTML||"";
}}

ul.onmouseout=function(e){
e=e||window.event;
var target=e.target||e.srcElement;
if(target.nodeName="SPAN"){
	target.className='noBorder';
	logger.innerHTML=target.innerHTML||"";
}}
}
window.onload=function(){enableBubble();}


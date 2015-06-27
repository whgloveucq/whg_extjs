
window.onload=function()
{
var mr=new MailRoom();
var fn=function(){
document.body.innerHTML+="<br/>207室2号床，你妈到啦!<br/>";
}
mr.on("arrive",fn) ;
var btn=document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","对讲机按钮");
var handler=function(){
mr.fire("arrive");
}
EventManager.on(btn,"click",handler,true);
document.body.appendChild(btn);

}
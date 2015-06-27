//var fn =function()
//{ var d=new Date();
//  document.body.innerHTML=d.toLocaleString();

//}
//window.setTimeout(fn(),1000);
window.setTimeout(
function()
{ var d=new Date();
  document.body.innerHTML=d.toLocaleString();
}
)

var fn=function(userName){
document.body.innerHTML=userName;
}
window.setInterval(
function(){fn("大漠穷秋");},1000
);

//例4.26 自己动手写回调工具
var createCallback=function(fn,args)
{
	return function()
	{
		fn.call(window,args);
	}

}
var fn=function(userName)
{
	document.body.innerHTML=userName;
}
window.setInterval(createCallback(fn,"大漠穷秋2"),2000);




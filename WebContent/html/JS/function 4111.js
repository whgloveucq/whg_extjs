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
function(){fn("��Į����");},1000
);

//��4.26 �Լ�����д�ص�����
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
window.setInterval(createCallback(fn,"��Į����2"),2000);




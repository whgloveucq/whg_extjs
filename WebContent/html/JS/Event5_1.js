/*var arrived=false;
var counter=0;
var timer=window.setInterval(
function(){
if(arrived){
window.clearInterval(timer);
document.body.innerHTML="到达 " ;
return;

}
document.body.innerHTML="我妈来了么？【第 "+counter+"次询问]" ;
		counter++;
}
,500
);
window.setTimeout(function(){arrived=true;},5000);*/
//��5.2
 //function arrive()
 //{
 //alert("207号室2号床，你妈来了");
 
// }
 //例5.3
 /*window.onload=function(){
 
 	var btn=document.createElement('input');
 	btn.setAttribute('type','button');
 	btn.setAttribute('value','对讲机按钮');
 	btn.onclick=function(e){
 	alert("1号床，你妈来了！");
 	};
 	btn.onclick=function(e){
 	alert("2号床，你妈来了！");
 	};
 	document.body.appendChild(btn);
 }*/
 //例5.4
 /*window.onload=function()
 {
 	var btn=document.createElement('input');
 	btn.setAttribute('type','button');
 	btn.setAttribute('value','对讲机按钮');
 	btn.addEventListner('click',
 	function(e){
 	document.body.innerHTML+='<br/>通知班主任，学生家长驾到。。。</br>';
 	},true);
 	btn.addEventListner('click',
 	function(e){
 	document.body.innerHTML+='<br/>通知学生,家长来了。。。</br>';
 	},true);
 	
 document.body.appendChild(btn);
 }*/
  //例5.6
 window.onload=function()
 {
 	var btn=document.createElement('input');
 	btn.setAttribute('type','button');
 	btn.setAttribute('value','对讲机按钮');
 	var fn1=function(e){
 	document.body.innerHTML+='<br/>通知班主任，学生家长驾到。。。</br>';
 	
 	}
 	var fn2=function(e){
 	
 	document.body.innerHTML+='<br/>通知学生,家长来了。。。</br>';
 	}
 	if(document.addEventListener)
 	{
 	btn.addEventListener('click',fn1,true);
 	btn.addEventListener('click',fn2,true);
 	
 	}
 	else if(document.attachEvent){
 	btn.attachEvent('onclick',fn1);
 	btn.attachEvent('onclick',fn2);
 	}
 	document.body.appendChild(btn);
 }
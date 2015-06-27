function sendReq(){

	var req;
	if( window.ActiveXObject ){
	req=new ActiveXObject("Microsoft.XMLHTTP");
	} else if(window.XMLHttpRequest){
		req= new XMLHttpRequest();
	}
	else
	{
	alert("无法创建异步请求");
	}
	//注册一个匿名的状态处理函数
	req.onReadystatechange=function(){
		if(req.readyState==4 && req.status==200)
		{
		alert(req.responseText);
		}
	}
	//发送请求
	req.open("GET","basictable.html");
	req.send(null);
}
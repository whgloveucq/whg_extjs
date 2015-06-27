Foxtrot={

	version :'1.0'
}
/*
*Ajax 支持
*/
Foxtrot.Ajax=(
function(){
 
	var req;
	if(window.ActiveXObject){
	req=new ActiveXObject("Microsoft.XMLHTTP");
	}
	else if(window.XMLHttpRequest){
		req= new XMLHttpRequest();
	}
	else
	{
	alert("无法创建异步请求");
	}
	return {
		request:function(config){
		//注册状态处理函数
			
		
		
		}
	}
	
	


}






)(); //这是一个自执行函数
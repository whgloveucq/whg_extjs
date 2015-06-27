window.onload=function(){

	var btn=document.createElement('input');
	btn.setAttribute('type','button');
	btn.setAttribute('value','按钮');
	/*btn.onclick=function(e){
	alert(e)
	}*/
	
	btn.onclick=function(e){
		e=e||window.event;
	alert(e)
	}
	
	
	
	document.body.appendChild(btn);
	
}
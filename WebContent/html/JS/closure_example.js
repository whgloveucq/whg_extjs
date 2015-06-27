function myEffect(){

	var console=document.getElementById('console');
	var tab=document.getElementById('mytab');
	var trs=tab.getElementsByTagName('tr');
	for(var i=0;i<trs.length;i++)
	{
	var tr=trs[i];
	tr.onmouseover=function()
	{
		
	
	this.style.background="#ff0000";
	}
	tr.onmouseout=function()
	{
	
	this.style.background="#ffffff";
	}
	tr.onclick=(function(){
	var rowNum=i;
	return function(){
	console.innerHTML="你点击"+rowNum+"行";
	}})();
	
	}
	
	
}
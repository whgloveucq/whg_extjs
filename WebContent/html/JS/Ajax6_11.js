Foxtrot={

	version :'1.0'
}
/*
*Ajax ֧��
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
	alert("�޷������첽����");
	}
	return {
		request:function(config){
		//ע��״̬������
			
		
		
		}
	}
	
	


}






)(); //����һ����ִ�к���
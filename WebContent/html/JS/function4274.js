//��4.41���ڸ�ʽ��
 
/*var date= new Date();
alert(date.format('Y-m-d H:i:s'));
alert(date.getDate());
alert(date.getDay());
alert(date.getMonth());
alert(date.getHours());
alert(date.getTimezoneOffset());  //���ر���ʱ����������α�׼ʱ��(GMT)�ķ��Ӳ�
alert(date.valueOf().toSource());*/

var date=new Date().add(Date.DAY,1);
alert(date.toLocaleString());

//��4.43 between
 var date=new Date();
 alert(date.between(date.add(Date.DAY,-1),date.add(Date.DAY,1)));
 //��4.44 ���ַ�����ȡ���ڶ���
 //var Date= new Date();
 var date=Date.parseDate("2006-01-15 3:20:01 PM" ,"Y-m-d g:i:s A ");
 alert(date.toLocaleString());

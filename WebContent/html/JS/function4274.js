//例4.41日期格式化
 
/*var date= new Date();
alert(date.format('Y-m-d H:i:s'));
alert(date.getDate());
alert(date.getDay());
alert(date.getMonth());
alert(date.getHours());
alert(date.getTimezoneOffset());  //返回本地时间与格林尼治标准时间(GMT)的分钟差
alert(date.valueOf().toSource());*/

var date=new Date().add(Date.DAY,1);
alert(date.toLocaleString());

//例4.43 between
 var date=new Date();
 alert(date.between(date.add(Date.DAY,-1),date.add(Date.DAY,1)));
 //例4.44 从字符串获取日期对象
 //var Date= new Date();
 var date=Date.parseDate("2006-01-15 3:20:01 PM" ,"Y-m-d g:i:s A ");
 alert(date.toLocaleString());

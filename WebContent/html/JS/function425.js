Person=function(){}
var p1=new Person();

alert(p1.country);
Person.prototype.country="ÖÐ¹ú" ;
var p2=new Person();
alert(p2.country);

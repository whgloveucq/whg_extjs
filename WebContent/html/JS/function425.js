Person=function(){}
var p1=new Person();

alert(p1.country);
Person.prototype.country="�й�" ;
var p2=new Person();
alert(p2.country);

var fn=new Function('x','y','alert("Just coding")');
alert(fn instanceof Object);
fn();
var userName="��Į����";
function outerFn(){
//var userName="��Į����";
var innerFn= new Function("alert(userName)");
return innerFn;
}
var cache=outerFn();
cache();

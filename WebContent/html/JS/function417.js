var fn=new Function('x','y','alert("Just coding")');
alert(fn instanceof Object);
fn();
var userName="´óÄ®ÇîÇï";
function outerFn(){
//var userName="´óÄ®ÇîÇï";
var innerFn= new Function("alert(userName)");
return innerFn;
}
var cache=outerFn();
cache();

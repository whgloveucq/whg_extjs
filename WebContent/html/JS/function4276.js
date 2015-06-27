//例4.45 创建回调 createCallback
/*Ext.onReady(
function()
{
var fn=function(userName){

document.body.innerHTML=userName;

}
window.setInterval(fn.createCallback("大漠穷秋"),1000);
});*/
//例 4.46 创建代理 createDelegate
Ext.onReady(
function(){
var fn=function()
{
alert(this.name);

}
fn.createDelegate({name:'大漠穷秋 '})();

//例4.47 创建拦截器createInterceptor

var fn2=function(){
	alert("原来的函数");
}

var fcn=function(){
	alert("拦截函数先运行");
}

fn2.createInterceptor(fcn)();

//例4.48创建createSequence 

var fn_seq1=function(){
alert("函数1");
}

var fn_seq2=function(){
alert("函数2");
}

fn_seq1.createSequence(fn_seq2)();

//例4.49 创建延时defer
 var fn_defer=function()
 {
 alert("延时执行");
 }
fn_defer.defer(1000);
});
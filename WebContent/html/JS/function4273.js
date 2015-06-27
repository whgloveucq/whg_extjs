//例4.38 String.format<静态>
Ext.onReady(
function(){
var s=String.format(
'<div> 姓名：{0}<br/>年龄:{1}</div>',"大漠穷秋","26")
document.body.innerHTML=s;
});

var str="我是猪";
alert(str.replace("我","你"));

function regReplace()
{
	var str="我是猪，我是猪";
	alert(str.replace(/我/g,function(){
	//alert(arguments);
	return "你";
	}));

}
regReplace();

//曾经有这样的一个题目：有一个数n=5,不用 for循环，怎么返回[1,2,3,4,5] 这样的一个数组。
//看如下高手的答案

function getArr(n){
var a = [] ;
var b = [] ;
m=0;
a.length= n +1 ;
alert(a);
a.toString().replace(/,/g,
function() {
b.push(++m);
});

return b;
}
alert(getArr(5));
//例4.39 String.escape<静态 >
var s=String.escape("天生一个'仙人\洞 ，无限风光'在险\峰 。");
alert(s);
// 例4.40 String.leftPad<静态>
var s=String.leftPad('123',5,'t');
alert(s);
//leftPad 的实现源码
 /*leftPad : function(val,size,ch)
 {
 var result=String(val);
 if(!ch){
 ch="";
 }
 while(result.length < size )
 {
 	result=ch + result;
 
 }
 return result;
 
 }*/

var s=String.trim("   ni hao    ");
alert(s);

var s=String.toggle("ni hao","wo hao");
alert(s);



//��4.38 String.format<��̬>
Ext.onReady(
function(){
var s=String.format(
'<div> ������{0}<br/>����:{1}</div>',"��Į����","26")
document.body.innerHTML=s;
});

var str="������";
alert(str.replace("��","��"));

function regReplace()
{
	var str="������������";
	alert(str.replace(/��/g,function(){
	//alert(arguments);
	return "��";
	}));

}
regReplace();

//������������һ����Ŀ����һ����n=5,���� forѭ������ô����[1,2,3,4,5] ������һ�����顣
//�����¸��ֵĴ�

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
//��4.39 String.escape<��̬ >
var s=String.escape("����һ��'����\�� �����޷��'����\�� ��");
alert(s);
// ��4.40 String.leftPad<��̬>
var s=String.leftPad('123',5,'t');
alert(s);
//leftPad ��ʵ��Դ��
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



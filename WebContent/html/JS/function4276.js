//��4.45 �����ص� createCallback
/*Ext.onReady(
function()
{
var fn=function(userName){

document.body.innerHTML=userName;

}
window.setInterval(fn.createCallback("��Į����"),1000);
});*/
//�� 4.46 �������� createDelegate
Ext.onReady(
function(){
var fn=function()
{
alert(this.name);

}
fn.createDelegate({name:'��Į���� '})();

//��4.47 ����������createInterceptor

var fn2=function(){
	alert("ԭ���ĺ���");
}

var fcn=function(){
	alert("���غ���������");
}

fn2.createInterceptor(fcn)();

//��4.48����createSequence 

var fn_seq1=function(){
alert("����1");
}

var fn_seq2=function(){
alert("����2");
}

fn_seq1.createSequence(fn_seq2)();

//��4.49 ������ʱdefer
 var fn_defer=function()
 {
 alert("��ʱִ��");
 }
fn_defer.defer(1000);
});
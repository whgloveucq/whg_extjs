//namespace ���ð���
function ns(pkg){
if(!pkg)
{return null;}

var arr=pkg.split(".");
var o=window[arr[0]]=window[arr[0]]||{}; //�ؼ���1
var result=o;
var len=arr.length;
for (var i=1;i<len; i++)
{
o=o[arr[i]]=o[arr[i]]||{}; //�ؼ���2
}
return result;

}
ns("com.momo.test");
com.momo.test.fn=function(){
alert("for test");
};
ns("com.momo.test");
alert(com.momo.test.fn);

var user={

	userName:"��Į����",
	pwd:"123456"
};
var mobilePhone="ŵ����";
function outer(outerArg0)
{
var outerVar=1;
with(user)
{
function inner(innerArg0){

	var innerVar =1 ;
	alert(this.mobilePhone);
	alert(userName + "-----" + pwd);
	alert(outerArg0 +"---" + outerVar + "----" + innerVar);
}
	

}
inner(2);
inner.call({mobilePhone:'Android'},2);
alert(outerVar);

}
outer(1);
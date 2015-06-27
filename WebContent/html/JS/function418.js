function myFunction(arg1,arg2)
{
}
alert(myFunction.length);

function myFunc(){
	var s="";
	var len=arguments.length;
	for(var i=0;i<len;i++)
	{
	s+=arguments[i];
	}
	alert(s);
}
myFunc(1,2,3,4);
(function test(){
alert(arguments.callee);

})();


//例4.19
function code()
{ alert(code.caller);
}
function beatHim(){
code();
}
beatHim();

//例4.20

function printStackTrace(fn)
{
var s="";
while(fn.caller)
{
	s+=fn.caller;
	s+="\n<--\n";
	fn=fn.caller;
}
alert(s);
}
function test3()
{
	printStackTrace(test3);
	
}
function test2()
{
	test3();
}

function test1()
{
	test2();
}
function test0()
{
	test1();
}
test0();
var fn=function(){}
fn.myname="我是一个函数";
alert(fn.myname);
delete fn.myname;
alert(fn.myname);


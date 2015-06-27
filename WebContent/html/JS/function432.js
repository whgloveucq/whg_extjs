function outer(outerArg0)
{
var outerVar=1 ;
function inner()
{
alert(outerArg0 + "---"+ outerVar);

}
return inner;

}
var fn=outer(110);
fn();

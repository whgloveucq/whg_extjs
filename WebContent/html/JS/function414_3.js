var outerName="Ä¬Ä¬";
function outerFn(){
	var name ="´óÄ®ÇîÇï";
	function innerFn(){
	alert("["+outerName+"¡¢"+name+"] Ò»Ö¦ºìĞÓ³öÇ½À´¡£");
	}
return innerFn;
}
var cache=outerFn();
cache();
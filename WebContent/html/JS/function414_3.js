var outerName="ĬĬ";
function outerFn(){
	var name ="��Į����";
	function innerFn(){
	alert("["+outerName+"��"+name+"] һ֦���ӳ�ǽ����");
	}
return innerFn;
}
var cache=outerFn();
cache();
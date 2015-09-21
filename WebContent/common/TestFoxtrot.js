function test(){
	var tpl=new Foxtrot.Template(["<p>{name}---{age}</p>"]);
	var value={name:'大漠穷秋',age:26};
	var resultHTML=tpl.applyTemplate(value);
	tpl.insert('testDiv',resultHTML);
}
test();
Ext.onReady(
function(){
var nodes=[ 
{
text:'����-������',
leaf:false,
expanded:true,
children:[
{text:'�����ó���-�ϼӲ�',leaf:true},
{text:'�����ó���-�Բ���',leaf:true},
{text:'�����ó���-ͯ����',leaf:true},
{text:'�����ó���-˾ͽ��',leaf:true},
{
	text:'��ľ�ó���-����־',
	leaf:false,
	expanded:true,
	children:[
	{text:'С����1',leaf:true},
	{text:'С����2',leaf:true},
	{text:'С����3',leaf:true}
	
	
	
	]
	
	


}





]

},
{
text:'������ʹ-����',
leaf:false,
expanded:true,
children:[
{text:'�׻��ó��� -�Ϲ���',leaf:true},
{text:'�����ó��� -����',leaf:true},
{text:'�����ó��� -����',leaf:true},
{text:'ҵ���ó��� -�߲���',leaf:true},
{text:'�ٲ����ó��� -����',leaf:true}
]
}
];
var treePanel=new Ext.tree.TreePanel(
{ border:false,
  autoScroll:true,
  root:{
  text:'�������',
  leaf:false,
  expanded:true,
  children:nodes
  },
  rootVisible:true

}

);


var filter = new Ext.tree.TreeFilter(treePanel,{
clearBlank:true,
autoClear:true

});
var filterTree=function(){
	
	var text=this.getValue();
	if(!text)
	{
	filter.clear();//ȡ������
	return;
	
	}
	treePanel.expandAll();
	var re= new RegExp(Ext.escapeRe(text),'i');
	var test=filter.filterBy(function(n){
	return !n.isLeaf()|re.test(n.text);	
	});

};




var win=new Ext.Window(
{
title:'���������֯�ܹ�',
width:300,
height:400,
layout:'fit',
items:[treePanel],
buttons:[
{ 
	id:'filterText',
	xtype:'textfield',
	enableKeyEvents:true,
	listeners:{
	'keyup':filterTree
	}
	
}







]




});
win.show();
}

)
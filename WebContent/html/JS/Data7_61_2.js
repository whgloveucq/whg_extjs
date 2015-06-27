//处理非叶子节点的过滤
Ext.onReady(
function(){
var nodes=[ 
{
text:'教主-任我行',
leaf:false,
expanded:true,
children:[
{text:'清龙堂长老-老加布',leaf:true},
{text:'清龙堂长老-赵不悔',leaf:true},
{text:'清龙堂长老-童百熊',leaf:true},
{text:'清龙堂长老-司徒策',leaf:true},
{
	text:'枯木堂长老-连成志',
	leaf:false,
	expanded:true,
	children:[
	{text:'小菜鸟1',leaf:true},
	{text:'小菜鸟2',leaf:true},
	{text:'小菜鸟3',leaf:true}
	
	
	
	]
	
	


}





]

},
{
text:'光明右使-曲洋',
leaf:false,
expanded:true,
children:[
{text:'白虎堂长老 -上官云',leaf:true},
{text:'玄武堂长老 -李三',leaf:true},
{text:'疾电堂长老 -王吴',leaf:true},
{text:'业火堂长老 -七彩云',leaf:true},
{text:'百草堂堂长老 -白云',leaf:true}
]
}
];
var treePanel=new Ext.tree.TreePanel(
{ border:false,
  autoScroll:true,
  root:{
  text:'日月神教',
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
//非叶子节点的过滤
var hiddenNodes=[];


var filterTree=function(){
	
	var text=this.getValue(); 
	Ext.each(hiddenNodes,function(n){ n.ui.show();}
	);
	if(!text)
	{
	filter.clear();//取消过滤
	return;
	
	}
	treePanel.expandAll();
	var re= new RegExp(Ext.escapeRe(text),'i');
    filter.filterBy(function(n){
	return !n.isLeaf()||re.test(n.text);	
	});

};

var hiddenNodes=[];
treePanel.root.cascade(function(n){
if(!n.isLeaf() && n.ui.ctNode.offsetHeight<3)
{
n.ui.hide();
hiddenNodes.push(n);
}

});


var win=new Ext.Window(
{
title:'日月神教组织架构',
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
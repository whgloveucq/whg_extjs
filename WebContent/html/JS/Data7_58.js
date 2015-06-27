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

var win=new Ext.Window(
{
title:'日月神教组织架构',
width:300,
height:400,
layout:'fit',
items:[treePanel],
buttons:[
{ 
	text:'下潜',
	handler:function(){
	var flag=true;
	treePanel.root.cascade(
	function(n){
	n.getUI().addClass("x-tree-node-loading");
	if(n.text.indexOf('风雷堂')!=-1){
	flag=false;	
	}
	return flag;
	});
	
	}

}
,
{
	text:'查找',
	handler:function(){
	var node=treePanel.root.findChildBy(
	function(n){
	if(n.text.indexOf('任我行')!=-1)
	{
		node=n;
		return true;
	}
	}
	);
	alert(node.text);
	}
},


{
xtype:'textfield',
id:filterText
},
{
	text:'查找2',
	handler:function()
{
	var text = Ext.getCmp('filterText').getValue();  //这点存在问题不通的问题，以后再查什么原因
	      
	   //  var text=Ext.getCmp('filterText').getVisibilityEl();
	var re=new RegExp(Ext.escapeRe(text),'i');
	var test= filter.filterBy(function(n){
	return !n.isLeaf()||re.test(n.text);
	});
	
	
}
	
	
}




]





});
win.show();
}

)
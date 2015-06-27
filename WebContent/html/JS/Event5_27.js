//5.2.8 �¼��ۺ�ʾ��
Ext.onReady(
function(){

	//�������
	var myData=[
	['大漠穷秋1',26,'1985-10-11','江苏南京'],
	['大漠穷秋2',26,'1985-10-11','江苏南京'],
	['大漠穷秋3',26,'1985-10-11','江苏南京'],
	['大漠穷秋4',26,'1985-10-11','江苏南京'],
	['大漠穷秋5',26,'1985-10-11','江苏南京'],
	['大漠穷秋6',26,'1985-10-11','江苏南京'],
	['大漠穷秋7',26,'1985-10-11','江苏南京'],
	['大漠穷秋8',26,'1985-10-11','江苏南京'],
	['大漠穷秋9',26,'1985-10-11','江苏南京'],
	['大漠穷秋10',26,'1985-10-11','江苏南京'],
	['大漠穷秋11',26,'1985-10-11','江苏南京'],
	['大漠穷秋12',26,'1985-10-11','江苏南京']
	];
	
//����store
	
var store=new Ext.data.ArrayStore({
fields:[ {name:'userName'},
        {name:'age'},
        {name:'date'},
        {name:'addr'}
]
});
store.loadData(myData);
var win =null;
var rowDblClickHandler=function(grid,rowIndex,e){

	if(!win){
	var closeBtn=new Ext.Button({
	text:' 提交',
	handler:function(){
	//��������޸�record
		alert("修改并提交数据");
	}
	}
);
   win=new Ext.window({
   width:400,
   height:300,
   layout:'fit',
   closeAction:'hide',
   items:[
   {
   id:'dataForm',
   xtype:'form',
   bodyStyle:{
   	'padding':'30 90'
},
   border:false,
   defaults:{width:100
   },
   labelWidth:60,
   items:[
   {
   	fieldLabel:'用户名',
   	name:'userName'
   },
   {
   	fieldLabel:'年龄',
   	name:'age'
   },
   {
   	fieldLabel:'出生日期',
   	name:'date'
   },
   {
   	fieldLabel:'地址',
   	name:'addr'
   }
   
   ]
  
   }
   
   ],
   listeners:{
   	'click':function(){
   		this.hide();
   	}
   },
   buttons:[submitBtn,closeBtn]
  
   });
   win.relayEvents(closeBtn,'click');
};
var record=store.getAt(rowIndex);
win.setTitle(record.get('useName')||"");
Ext.getCmp('dataForm').getForm().loadRecord(record);
win.show();
}
//面板
var gridPanel = new Ext.grid.GridPanel({
title:'数据 表格',
//注意这个配置项
viewConfig:{
forceFit:true
	
},
store:store,
columns:[
{header:'姓名',dataIndex:'userName'},
{header:'年龄',dataIndex:'age'},
{header:'出生日期',dataIndex:'date'},
{header:'地址',dataIndex:'addr'}
],
listeners:{
'rowdblclick':rowDblClickHandler
}
});
//树节点点击事件处理器
var loadNodeInfo=function(node,e){

	var id=node.attribute.id;
	if(!id)
	{
	Ext.Msg.alert('提示信息','节点必须设置唯一的id');
	return;
	}
	var comp=tabPanel.getComponent(id);
	if(!comp){
	comp=new Ext.panel({
	id:id,
	closable:true,
	title:node.attributes.text||"",
	html:node.attributes.text
	}
	);
    tabPanel.add(comp);		
	}
   tabPanel.setActiveTab(comp);
   tabPanel.scrollToTab(comp);
}
	//树节点右键事件监听器
var contextMenuHandler=function(node,e)
{
node.select();
var c = node.getOwnerTree().contextMenu;
c.contextNode =node;
c.showAt(e.getXY());
}
//树节点右键
var contextMenu= new Ext.menu.Menu(
{
items:[
	{
	id:'delete-node',
	text:'清理门户'
	}
],
listeners: {
itemclick:function(item){

	switch (item.id){
	case 'delete-node':
	var n = item.parentMenu.contextNode;
	if(n.text=='任我行'){
	alert('不准清除教主！');
	return 	
	}
	if (n.ParentNode){
	n.remove();
	}
	break;	
	}
}	

}

}
);
	
//左侧的树面板
var treePanel =new Ext.tree.TreePanel({
title:'左侧树',
width:150,
region:'west',
dataUrl:'queryDepartment.jsp',
viewConfig:{
forceFit:true
},
 root:{
 text:'日月神教',
 leaf:false,
 expanded:true,
 children:[
 {id:'boss',
  text:'任我行',
  leaf:true
 },
 {id:'gg',
  text:'令狐冲',
  leaf:true
 },
 {id:'mm',
  text:'任盈盈',
  leaf:true
 }
 
 ]
 },
 autoScroll:true,
 split:true,
 rootvisible:true,
 collapsible:true,
 listeners:{
 'click':loadNodeInfo,
 'contextmenu':contextMenuHandler
 },
 contextMenu:contextMenu
 
});
//中间的Tab面板
var tabPanel= new Ext.TabPanel(
{
region:'center',
activeTab:0,
//plugins:new Ext.ux.TabCloseMenu(),

items:[gridPanel],
listeners:{
'remove':function(){
alert("tab 页被关闭");
	
}
}
	

}

);

var vp= new Ext.Viewport(
{
layout:'border',
items:[treePanel,tabPanel]
})

});
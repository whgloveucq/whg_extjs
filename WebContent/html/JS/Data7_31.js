//���ֶ�����Record
Ext.onReady(
function(){
//����store
	var store=new Ext.data.ArrayStore({
	fields:[
	{name:'userName'},
	{name:'age'},
	{name:'date'},
	{name:'addr'}
	]});
	
	var grid= new Ext.grid.GridPanel(
	{
	viewConfig:{
	forceFit:true
	},
	store:store,
	columns:[
	{header:'姓名',dataIndex:'userName'},
	{header:'年龄',dataIndex:'age'},
	{header:'出生日期',dataIndex:'date'},
	{header:'地址ַ',dataIndex:'addr'}
	]});

var win=new Ext.Window(
{
title:'基本Grid',
width:600,
height:400,
layout:'fit',
items:grid , //window �е���Ŀ��grid
buttons:[
{
	text:'新建记录',
    handler:function(){
    
  
    User =Ext.data.Record.create(
    [
    {name:'userName'},
     {name:'age'},
      {name:'date'},
       {name:'addr'}
    
    ]
    
    );
      var record=new User(
      
      {
      userName:'大漠穷秋',
      age:'25',
      date:'1985-10-11',
      addr:'亚信联创'
      }
      
      );
    store.add(record);
    
 
    }

}


]



}


)
win.show();
}


)
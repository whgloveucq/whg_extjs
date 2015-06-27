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
    
    var record=new Ext.data.Record();
    record.set('userName','大漠穷秋');
    record.set('age','25');
    record.set('date','1985-10-11');
    record.set('addr','亚信联创');
    store.add(record);
    
 
    }

}


]



}


)
win.show();
}


)
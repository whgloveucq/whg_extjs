Ext.onReady(

function(){

var data=[

['大漠穷秋1','25','1986-04-02'],
['大漠穷秋2','26','1986-04-02'],
['大漠穷秋3','27','1986-04-02'],
['大漠穷秋4','27','1986-04-02'],
['大漠穷秋5','28','1986-04-02'],
['大漠穷秋6','29','1986-04-02']
];

var Employee= new Ext.data.Record.create(
[
{name:'name'},
{name:'occupation'},
{name:'year'}


]

);
var ArrayReader=new Ext.data.ArrayReader(
{
idIndex:0

}
,Employee


);
var obj=ArrayReader.readRecords(data);
alert(Ext.encode(obj));
}
)
//使用EditorGridPanelPanel 创建Record
Ext.onReady(
function(){
// checkcolumn
	
	  
	function formatDate(value){
	return value ? value.dateFormat('M,d,Y'):'';
	}
	var fm=Ext.form;
	var checkColumn = new Ext.grid.CheckColumn(
	{
		header:'Indoor?',
		dataIndex:'indoor',
		width:55
	});
var cm=new Ext.grid.ColumnModel({

	defaults:{
	sortable:true
	},
	columns:[
	{
	id:'common',
	header:'Common Name',
	dataIndex:'common',
	width:220,
	editor: new fm.TextField({allowBlank:false})
	},
	{
	header:'Light',
	dataIndex:'light',
	width:130,
	editor: new fm.ComboBox({
	typeAhead:true,
	triggerAction:'all',
	transform:'light',
	lazyRender:true,
	listClass:'x-combo-list-small'
	
	})
	},
	{
	header:'Price',
	dataIndex:'price',
	width:70,
	aligh:'right',
	renderer:'usMoney', 
	editor:new fm.NumberField({
	allowBlank:false,
	allowNegative:false,
	maxValue:100000	
	})
	}
	,
	{
	header:'Available',
	dataIndex:'availDate',
	width:95,
	renderer:formatDate,
	editor:new fm.DateField(
	{
	format:'m/d/y',
	minValue:'01/01/06',
	disableDays:[0,6],
	disableDaysText:'Plants are not avaliable on the weekends'
		
	}
	
	)
		
	
	},
	checkColumn
	
	]
	
	
	
	

});

var store=new Ext.data.Store(
{
	autoDestroy:true,
	url:'plants.xml',
	reader:new Ext.data.XmlReader(
	{
	record:'plant',
	fields:[
	{name:'common',type:'string'},
	{name:'botanical',type:'string'},
	{name:'light'},
	{name:'price',type:'float'},
	{name:'availDate',mapping:'availability',type:'date',dateFormat:'m/d/Y'},
	{name:'indoor',type:'bool'}
	]	
	}
	),
  sortInfo:	{field:'common',direction:'ASC'}

});
 var grid=new Ext.grid.EditorGridPanel(
 {
 store:store,
 cm:cm,
 renderTo:'editor-grid',
 width:600,
 height:300,
 autoExpandColumn:'common',
 title:'Edit Plants?',
 frame:true,
 plugins:checkColumn,
 clicksToEdit:1,
 tbar:[{
 	text:'Add Plant',
 	handler:function(){
 	var Plant=grid.getStore().recordType ;
 	var p=new Plant(
 	{common:'New Plant 1',
 	 light:'Mostly Shade',
 	 price:0,
 	 availDate:(new Date()).clearTime(),
 	 indoor:false
 	});
 	grid.stopEditing( );
 	store.insert(0,P);
 	grid.startEditing(0,0);
 	
 	}
 
 }]
 });
store.load(
{
callback:function(){

	Ext.Msg.show(
	
	{
	title:'Store Load Callback',
	msg:'store was loaded,data available for processing',
	modal:false ,
	icon:Ext.Msg.INFO ,
	buttons:Ext.Msg.OK
	
	}
	
	);	

}


}
);
}

);
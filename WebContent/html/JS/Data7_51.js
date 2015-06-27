Ext.onReady(function(){

	
	var data = {
	rows:[	{userName:'大漠穷秋1',age:25,date:'1986-04-02',addr:'我不告诉你'},
		{userName:'大漠穷秋2',age:26,date:'1985-04-02',addr:'我不告诉你'},
		{userName:'大漠穷秋3',age:27,date:'1984-04-02',addr:'我不告诉你'},
		{userName:'大漠穷秋4',age:28,date:'1983-04-02',addr:'我不告诉你'},
		{userName:'大漠穷秋5',age:29,date:'1982-04-02',addr:'我不告诉你'}
	]
	}
var fields=[
{name:'userName'},
{name:'age'},
{name:'date'},
{name:'addr'}
] ;


var proxy= new Ext.data.HttpProxy(
{
api:{
	create:'createRecord.jsp'
}
}
)

	
	
	var store=new Ext.data.JsonStore({
		//url:'JsonStore.jsp',
		proxy:proxy,
		root:'rows',
		writer:new Ext.data.JsonWriter(
		{encode:true
		}
		) ,		
		fields:fields,
		autoLoad:true,
		autoSave:true,
		data:data
	});

    var grid = new Ext.grid.GridPanel({
    	//娉ㄦ剰杩欎釜閰嶇疆椤�
    	viewConfig: {
        	forceFit: true
    	},
    	store:store,
    	columns:[
    		{header:'姓名',dataIndex:'userName'},
    		{header:'年龄',dataIndex:'age'},
    		{header:'出生日期',dataIndex:'date'},
    		{header:'地址',dataIndex:'addr'}
    	]
    });
    
    //作为容器的window
    var win=new Ext.Window({
    	title:'DataWriter',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:grid,
    	buttons:[
    	{
    	text:'创建新记录',
    	handler:function(){
    	var User=Ext.data.Record.create(fields);
    	var u= new User(
    	{
    	userName:'大漠穷秋2',
    	age:25,
    	date:'1985-04-02',
    	addr:'我不告诉你'
       });
       store.add(u);
    	
    	}
    	
    	
    	
    	}
    	
    	
    	
    	]
    	
    	
    	
    })
    win.show();
});
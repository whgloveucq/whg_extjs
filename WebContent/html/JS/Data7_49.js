Ext.onReady(function(){
//	var data = [
//		['大漠穷秋1',25,'1986-04-02','我不告诉你'],
//		['大漠穷秋2',26,'1985-04-02','我不告诉你'],
//		['大漠穷秋3',27,'1984-04-02','我不告诉你'],
//		['大漠穷秋4',28,'1983-04-02','我不告诉你'],
//		['大漠穷秋5',29,'1982-04-02','我不告诉你']
//	];
	
//	var data = {
//		rows:[
//			{userName:'大漠穷秋1',age:25,date:'1986-04-02',addr:'我不告诉你'},
//			{userName:'大漠穷秋2',age:26,date:'1985-04-02',addr:'我不告诉你'},
//			{userName:'大漠穷秋3',age:27,date:'1984-04-02',addr:'我不告诉你'},
//			{userName:'大漠穷秋4',age:28,date:'1983-04-02',addr:'我不告诉你'},
//			{userName:'大漠穷秋5',age:29,date:'1982-04-02',addr:'我不告诉你'}
//		],
//		test:[
//			{userName:'婕犳紶妗�,age:30,date:'1981-04-02',addr:'我不告诉你'}
//		]
//	}
	
	var data = [
		{userName:'大漠穷秋1',age:25,date:'1986-04-02',addr:'我不告诉你'},
		{userName:'大漠穷秋2',age:26,date:'1985-04-02',addr:'我不告诉你'},
		{userName:'大漠穷秋3',age:27,date:'1984-04-02',addr:'我不告诉你'},
		{userName:'大漠穷秋4',age:28,date:'1983-04-02',addr:'我不告诉你'},
		{userName:'大漠穷秋5',age:29,date:'1982-04-02',addr:'我不告诉你'}
	]

//	var data = [
	//	{personName:'大漠穷秋1',personAge:25,date:'1986-04-02',addr:'我不告诉你'},
		//{personName:'大漠穷秋2',personAge:26,date:'1985-04-02',addr:'我不告诉你'},
	//	{personName:'大漠穷秋3',personAge:27,date:'1984-04-02',addr:'我不告诉你'},
	//	{personName:'大漠穷秋4',personAge:28,date:'1983-04-02',addr:'我不告诉你'},
	//	{personName:'大漠穷秋5',personAge:29,date:'1982-04-02',addr:'我不告诉你'}
//	]
	
	/**
	 * 瀹氫箟JsonStore
	 */
	var store=new Ext.data.JsonStore({
		//url:'JsonStore.jsp',
		//root:'rows',
		fields:[
			{name:'userName'},//mapping:'personName'},
			{name:'age'},//mapping:'personAge'},
			{name:'date'},
			{name:'addr'}
		],
		data:data
	});
//	store.load();
	
	//闈㈡澘
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
    	title:'JsonStore',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:grid
    })
    win.show();
});
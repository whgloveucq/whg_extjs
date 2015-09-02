Ext.onReady(function(){
	
	/**
	 * 测试数据
	 */
	var testData=[
		['大漠穷秋',25,'软件工程师','亚信联创','电信','1986-04-02','-','remove','open','terminal','cd-delete',false],
		['大漠穷秋',25,'软件工程师','亚信联创','电信','1986-04-02','-','remove','open','terminal','cd-delete',false],
		['大漠穷秋',25,'软件工程师','亚信联创','电信','1986-04-02','-','remove','open','terminal','cd-delete',false],
		['大漠穷秋',25,'软件工程师','亚信联创','电信','1986-04-02','-','remove','open','terminal','cd-delete',false],
		['大漠穷秋',25,'软件工程师','亚信联创','电信','1986-04-02','-','remove','open','terminal','cd-delete',false],
		['大漠穷秋',25,'软件工程师','亚信联创','电信','1986-04-02','-','remove','open','terminal','cd-delete',false],
		['大漠穷秋',25,'软件工程师','亚信联创','电信','1986-04-02','-','remove','open','terminal','cd-delete',false],
		['大漠穷秋',25,'软件工程师','亚信联创','电信','1986-04-02','-','remove','open','terminal','cd-delete',false],
		['大漠穷秋',25,'软件工程师','亚信联创','电信','1986-04-02','-','remove','open','terminal','cd-delete',false],
		['大漠穷秋',25,'软件工程师','亚信联创','电信','1986-04-02','-','remove','open','terminal','cd-delete',false]
	];
	
	/**
	 * 数据格式器
	 */
	var reader=new Ext.data.ArrayReader({},[
		{name:'name',type:'string'},
		{name:'age',type:'int'},
		{name:'work',type:'string'},
		{name:'company',type:'string'},
		{name:'industry',type:'string'},
		{name:'date',type:'date',dateFormat:'Y-m-d'},
		{name:'QQ',type:'string'},
		{name: 'action1', type: 'string'},
	    {name: 'action2', type: 'string'},
	    {name: 'action3', type: 'string'},
	    {name: 'action4', type: 'string'},
	    {name: 'qtip1', type: 'string'},
	    {name: 'qtip2', type: 'string'},
	    {name: 'qtip3', type: 'string'},
	    {name: 'qtip4', type: 'string'}
	])
	
	/**
	 * 数据缓存器
	 */
	var store=new Ext.data.Store({
		reader:reader,
		data:testData
	})
	
	/**
	 * 行选择器
	 */
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	/**
	* 点击操作：注意这个地方的作用域问题，因为<a href="#" onclick="dleUser()">
	* 这里的onclick作用域是window
	*/
	window.delUser=function(userName){
		alert("开始删除"+userName);
	}
	
	/**
	* 渲染器
	*/
	var opeartionRender=function(userName){
		return '<a href="#" onclick="delUser(\''+userName+'\')">删除</a>';
	}
	
	/**
	* 数据列模型
	*/
	var cm=new Ext.grid.ColumnModel([
		sm,
		new Ext.grid.RowNumberer(),
		{header: "姓名", dataIndex:'name',width: 100, sortable: true},
		{header: "年龄", dataIndex:'age',width: 50, sortable: true},
		{header: "工作", dataIndex:'work',width: 150, sortable: true},
		{header: "公司", dataIndex:'company',width: 100, sortable: true},
		{header: "所属行业",dataIndex:'industry',width: 80, sortable: true},
		{header: "入职时间",dataIndex:'date',width:120,sortable:true},
		{header: "QQ群", dataIndex:'QQ',width:150, sortable: true},
		{header: "操作", dataIndex:'name',width:150, sortable: true,renderer:opeartionRender}
	]);
	
	/**
	 * 顶部工具栏
	 */
	var tbar1=new Ext.Button({
		text:'添加',
		iconCls:'add'
	});
	
	var tbar2=new Ext.Button({
		text:'删除',
		iconCls:'delete'
	});
	
	var tbar3=new Ext.Button({
		text:'上移',
		iconCls:'up'
	});
	
	var tbar4=new Ext.Button({
		text:'下移',
		iconCls:'down'
	});
	
	var tbar5=new Ext.Button({
		text:'移至最上',
		iconCls:'top'
	});
	
	var tbar6=new Ext.Button({
		text:'移至最下',
		iconCls:'bottom'
	});
	
	
	/**
	 * 分页工具条
	 */
	var pageSize=20;//每页显示的记录数
	var pagingToolBar=new Ext.PagingToolbar({
		pageSize:pageSize,
		store:store,
		displayInfo:true
	})
	
	
	/**
	 * 数据展示面板
	 */
	var gridPanel=new Ext.grid.GridPanel({
		title:'',
		viewConfig:{
			forceFit:true
		},
		store:store,
		cm:cm,
		sm:sm,
		tbar:[
			tbar1,
			'-',
			tbar2,
			'-',
			tbar3,
			'-',
			tbar4,
			'-',
			tbar5,
			'-',
			tbar6
		],
		bbar:pagingToolBar
	});
	
	
	/**
	 * 弹出窗体
	 */
	var win=new Ext.Window({
		title:'复杂Grid1',
		width:850,
		height:450,
		buttonAlign:'right',
		layout:'fit',
		items:gridPanel
	});
	win.show();
})
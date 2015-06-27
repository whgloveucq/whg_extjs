//�߼��÷�����Ϊ�Զ�������ṩ�¼�֧��
//������ ������չ�Ծ�����Ҫ���壬����������ԣ��Ϳ��Ը����Լ���Ƶ�������
//����������¼�֧�֡�
Ext.onReady(function(){
Coder=Ext.extend(Ext.util.Observable,{
constructor:function(config){
this.coderName=config.name || "没起名字";
this.addEvents('create','exception','complete');
this.listeners=config.listeners;
//���ø���Ĺ���������ɹ�����
Coder.superclass.constructor.call(this,config);
this.fireEvent('create');
},
showSelf:function(){

	var html="<p>代码工名字：{coderName}</p>";
	var tp1=Ext.DomHelper.createTemplate(html);
	tp1.insertFirst(Ext.getBody(),this);
}		
});
var Coder=new Coder({
name:'杯具大漠',
listeners:{
'create':function(){
this.showSelf();
	
}
}
});
})
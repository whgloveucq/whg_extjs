function extGet()
{ var el=Ext.get('myDiv') ;
a;ert(Ext.encode(el)+"-dom:"+el.dom);
}
function extGetDom()
{
var div=Ext.getDom('myDiv');
alert(div);
var el=Ext.get('myDiv');
alert(Ext.getDom(el));
}
function extFly()
{ var el=fly('myDiv');
  alert(Ext.encode(el)+"-dom:" + el.dom) ;
}
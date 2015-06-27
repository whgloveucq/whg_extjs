Ext.onReady(
function(){
var win=new Ext.window(
{
	id:'myWin',
	title:'DomQuery',
	width:400,
	height:300,
    renderTo:Ext.getBody(),
    bbar:[
    {
    text:'CSSÖµÑ¡ÔñÆ÷',
    handler:function(){
    var el = Ext.DomQuery.selectNode("div{padding-left='6px'}");
    Ext.DomHelper.insertHtml("afterBegin",Ext.getBody().dom,el.innerHTML);
    }
    }
    
    ]
    
});


win.show();

}
)
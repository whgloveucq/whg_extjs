Ext.onReady(
function(){
var cs=new Ext.util.MixedCollection();
cs.addAll(
[{contenet:'人之初'},
 {contenet:'性本善'},
 {contenet:'性相近'},
 {contenet:'习相远'}
]);
var tpl= new Ext.XTemplate('<tpl for="."><span>{content}</span></br></tpl>'
);

tpl.append(Ext.getBody(),cs.getRange());
});
Ext.onReady(function()
{
var trs=Ext.query('tr:even');
Ext.each(
trs,function(tr){

tr.style.backgroundColor="#ffff00";
});

})
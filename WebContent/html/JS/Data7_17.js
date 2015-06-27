Ext.onReady(

function(){
var cs= new Ext.util.MixedCollection();
 cs.add(1,{content:'人之初'});
 cs.add(2,{content:'性本善'});
 cs.add(3,{content:'性相近'});
 cs.add(4,{content:'习相远'});
 var tpl=new Ext.XTemplate('键：<br><tpl for="."><span>{.}</span><br/></tpl>'
 )
 tpl.append(Ext.getBody(),cs.keys);
 tpl= new Ext.XTemplate('值：<br><tpl for="."><span>{content}</span><br/></tpl>')
 
 tpl.append(Ext.getBody(),cs.getRange());




}




);
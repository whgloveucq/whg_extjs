Ext.onReady(
function(){

Ext.state.Manager.setProvider(
new Ext.state.CookieProvider({
//   此Cookie7天后失效
	expires: new Date(new Date().getTime()+(1000*60*60*24*7))

}));
 MyWin= Ext.extend(Ext.Window,{
 stateEvents:['resize'],
 getState:function(){
 alert(this.getWidth()+"--->"+ this.getHeight());
 return { width:this.getWidth(),height:this.getHeight()};
 },
 applyState:function(state){
 MyWin.superclass.applyState.call(this,state);
 }
})
 
var win=new MyWin(
{
id:'myWin',
title:'StateFul',
width:400,
height:300,
stateful:true
}
);
win.show();

var btn= new Ext.Button(

{
	text:'测试',
	applyTo:Ext.getBody(),
	handler:function(){
	var win= new MyWin(
	{
	id:'myWin2',
	title:'StateFul2',
	width:400,
	height:400,
	stateful:true
	
	
	}
	
	);
	win.show();
	
	}


}

)




}







)
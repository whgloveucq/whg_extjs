Ext.onReady(
function(){

var pbar=new Ext.ProgressBar(
{
id:'pbar',
width:300,
renderTo:Ext.getBody()

}

);

var i=0;
var task={
run:function(){

	i+=0.1;
	pbar.updateProgress(i,"加载进度："+Math.round(i*100)+"%");
	if(Math.round(i*100)==100)
	{ 
		pbar.updateText("加载完成2");
		Ext.TaskMgr.stop(task);
	
	}
},
interval:500
}
Ext.TaskMgr.start(task);

});
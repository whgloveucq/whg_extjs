//真实的Ajax加载实时进度
Ext.onReady(
function(){
var pbar=new Ext.ProgressBar(
{
	id:'pbar',
	width:300,
	value:0,
	renderTo:Ext.getBody()
});
var task={

run:function(){
Ext.Ajax.request(
{
	url:'ProgressBar.jsp',
	params:{curr:pbar.value},
	success:function(response,options){
	var value=response.responseText;
	pbar.updateProgress(parseFloat(value),Math.round(parseInt(value*100))+"%");
	if(Math.round(parseInt(value*100))==100){
	pbar.updateText("加载完成");
	Ext.TaskMgr.stop(task);
	
	}
	
	
	},
	failure:function(){
	
	Ext.DomHelper.insertHtml("beforeEnd",Ext.getBody().dom,"加载失败");
	}

}

)

},
interval:500

}

Ext.TaskMgr.start(task);

}
)
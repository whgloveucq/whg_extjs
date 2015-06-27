EventManager = function(){	}
/*添加事件监听器
 @param {} el
 @param {}  name
 @param {} fn
 @param {} capture
 */
EventManager.addListener=function(el,name,fn,capture){

	if(window.addEventListener){
	el.addEventListener(name,fn,capture);
	} else if(window.attachEvent){
	el.attachEvent(name,fn);
	}

	
}
/*删除事件监听器
 @param {} el
 @param {}  name
 @param {} fn

 */

EventManager.removeListener=function(el,name,fn,capture){

	if(window.removeEventListener){
	el.removeEventListner(name,fn,capture);
	} else if(window.detachEvent){
	el.detachEvent(name,fn);
	}
}

/*注册别名
 @type
 

 */
EventManager.on=EventManager.addListener;
EventManager.un=EventManager.removeListener;


/*window.onload=function(){

	var btn =document.createElement("input");
	btn.setAttribute("type","button");
	btn.setAttribute("value","我的按钮");
	var handler=function(){
	alert("按钮被点击啦。。。");
	}
	EventManager.on(btn,"click",handler,true);
	//EventManager.un(btn,"click",handler,true);
	document.body.appendChild(btn);
}*/
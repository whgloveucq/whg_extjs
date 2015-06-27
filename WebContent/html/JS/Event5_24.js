    alert(Ext.getBody());
    alert("看看："+document.body);
	var btn1=new Ext.Button(
	{text:'测试用的按钮',
	 renderTo:Ext.getDom().id.valueOf(whg);//先放在这里，先不管，朝后看，回过来再查
	 listeners:{
	 'mouseover':function(){alert("鼠标滑过！");
	 }
	 
	 }
	
	});

   var btn2=new Ext.Button(
   {text:'挂起',
   applyTo:Ext.getBody(),
   handler:function(){
   btn1.suspendEvents();
   }
   }
   );
   var btn3=new Ext.Button(
   {text:'恢复',
   applyTo:Ext.getBody(),
   handler:function(){
   btn1.resumeEvents();
   }
   }
   );
   
	

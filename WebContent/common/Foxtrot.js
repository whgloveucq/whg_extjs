/**
 * 狐步舞：献给键盘上的舞者
 * @type 
 */
Foxtrot = {
	version : '1.0'
};
/**
 * 继承功能
 * @param {} sb
 * @param {} sp
 * @return {}
 */
Foxtrot.extend = function(sb, sp) {
	sb.prototype = new sp();
	sb.prototype.constructor = sb;
	return sb;
}
Foxtrot.apply=function(des,src){
	for(var p in src){
		des[p]=src[p];
	}
}
Foxtrot.applyIf=function(des,src){
	for(var p in src){
		if(!des[p]){
			des[p]=src[p];
		}
	}
}
Foxtrot.apply(Foxtrot,{
	isArray:function(v){
		return v && typeof v.length == 'number' && typeof v.splice == 'function';
	}
});
		
/**
 * 格式化工具函数，全局单例
 * @return {}
 */
Foxtrot.util={};
Foxtrot.util.Format=function(){
	var trimRe = /^\s+|\s+$/g;
    return {
    	htmlDecode : function(value){
            return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
        }
    }
}();

/**
 * 模板功能
 * @param {} html
 * @param {} compiled
 */
Foxtrot.Template = function(html, compiled) {
	if(html){
		this.html = html.join('');
	}
	if (compiled) {
		this.compile();
	}
}
Foxtrot.Template.prototype = {
	re : /\{([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,
	applyTemplate : function(values) {
		if (this.compiled) {
			return this.compiled(values);
		}
		var fn = function(m, name) {
			return values[name] || "";
		};
		var result = this.html.replace(this.re, fn);
		return result;
	},
	compile : function() {
		var fn = function(m, name) {
			return values[name] || "";
		};
		/*
		 * 这里我们简单地用数组的join()方法产生函数体 不过据说FireFox里面直接使用字符串拼接效率更高一些
		 */
		var body = ['this.compiled=function(values){'];
		body.push('return this.html.replace(this.re,fn);');
		body.push('}');
		body = body.join('');
		eval(body);
	},
	insert : function(id, html) {
		var el = document.getElementById(id);
		el.innerHTML = html;
	}
}

Foxtrot.XTemplate = function(html) {
	this.html=html;
	var me = this,
    s = me.html,
    m,
    id=0,			//子模板计数器
    tpls=[],		//用来存放分解出来的子模板
    /**
     * 以下是一些字符串常量
     */
    VALUES = 'values',
	PARENT = 'parent',
	XINDEX = 'xindex',
	XCOUNT = 'xcount',
	RETURN = 'return ',
	WITHVALUES = 'with(values){ ';
	/**
	 * 注意这一句容错处理，设计非常精巧
	 * 无论你写模板的时候在最外层加不加<tpl></tpl>标签对
	 * 这里都给你在最外层为你再套上一对
	 * 这保证出来的<tpl>标签对总是闭合的
	 */
	s = ['<tpl>', s, '</tpl>'].join('');
	/**
	 * 这个正则用来一层一层剥离<tpl>闭合标签
	 * 对于if/for嵌套的情况，从最内层开始层层剥离
	 * 而执行的时候刚好相反，从最外层开始向内执行，
	 * 碰到{xtpl(x)}(这是一个自定义的标志)时说明还有子标签，
	 * 则继续向内执行
	 */
	var re = /<tpl\b[^>]*>((?:(?=([^<]+))\2|<(?!tpl\b[^>]*>))*?)<\/tpl>/;
	/**
	 * 匹配if标签
	 */
	var ifRe = /<tpl\b[^>]*?if="(.*?)"/;
	/**
	 * 匹配for标签
	 */
	var forRe = /^<tpl\b[^>]*?for="(.*?)"/;
	/**
	 * 注意这里while的作用
	 * 是用来处理嵌套的<tpl>标签的，比如：
	 * <tpl>
	 * 	<tpl if="age&gt;25">//这里相当于运算表达式if(age>25)
	 * 		//这里相当于函数体
	 * 	</tpl>
	 * </tpl>
	 * 使用while和s=s.replace(m[0],'{xtpl'+id+'}');这段代码配合，
	 * 从最内层的<tpl>开始，逐层向上剥离，每层匹配出来的东西都push到tpls这个数组里面。
	 * 这样处理之后，一个嵌套的大模板就被逐层分割成了一组小的子模板，
	 * 而且只要发现tpls中这个对象的body属性含有'{xtpl(n)}'这样的东西
	 * 就可以知道这个模板是含有子模板的，这时候就转给applySubTemplate()这个函数去处理。
	 */
	while((m=s.match(re))){
		var m0=m[0];
		var m3=m0.match(ifRe);
		var m2=m0.match(forRe);
		var varName=m2&&m2[1]?m2[1]:"";//提取for="skills"中的skills属性名
		
		var exp=null,fn=null;
		//匹配到了if标签
		if(m3){
			exp=m3&&m3[1]?m3[1]:null;
			/**
			 * 注意这里使用Function这个构造函数来产生一个新的函数
			 * 使用new Function()这种方式来构造函数对象的要点是：
			 * 括号里面的值依次为arg0一直到argx，最后一个参数是函数体。
			 * 例如：new Function('name','age','alert(name)');
			 * 其中name和age将会成为创建出来的函数的参数，在age之后还可以有任意多个参数。
			 * 以上等价于function(name,age){alert(name);}
			 */
			if(exp){
				fn = new Function(VALUES,WITHVALUES + RETURN +(Foxtrot.util.Format.htmlDecode(exp))+'; }');
			}
		}
		//匹配到了for标签
		if(m2){
			varName = new Function('values', 'parent', 'with(values){ return '+varName+'; }');
		}
		tpls.push({
			test: fn,
			target:varName,//这是为处理for标签新增的
			body: m[1]||''
		});
		/**
		 * 最内层的<tpl>标签对已经匹配完毕，从s中替换掉
		 * 注意这里{xtpl(id)}这个结构，这里的这个id在应用子模板时非常有用
		 */
		s=s.replace(m[0],'{xtpl'+id+'}');
		++id;
	}
	/**
	 * 以下对分解出来的子模板逐个进行编译
	 */
	for(var i=tpls.length-1;i>=0;i--){
		me.compileTpl(tpls[i]);
	}
	/**
	 * 记录最外层的模板，这个模板是“主模板”，也是入口模板
	 */
	this.master = tpls[tpls.length-1];
    this.tpls = tpls;
}
Foxtrot.XTemplate =Foxtrot.extend(Foxtrot.XTemplate, Foxtrot.Template);
Foxtrot.apply(Foxtrot.XTemplate.prototype,{
    re : /\{([\w-\.\#]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?(\s?[\+\-\*\\]\s?[\d\.\+\-\*\\\(\)]+)?\}/g,
    codeRe : /\{\[((?:\\\]|.|\n)*?)\]\}/g,
    /**
     * 处理子模板
     * @param {} id
     */
    applySubTemplate : function(id,values,parent,xindex,xcount){
    	var t = this.tpls[id];
        if(t.test && !t.test.call(this, values, parent, xindex, xcount)){
            return '';
        }
        var vs = t.target ? t.target.call(this, values, parent) : values;
        parent = t.target ? values : parent;
        /**
         * 如果需要应用的属性是一个数组，则对数组中的每个对象应用一次模板
         */
        if(t.target&&Foxtrot.isArray(vs)){
        	var buf = [];
            for(var i = 0, len = vs.length; i < len; i++){
                buf[buf.length] = t.compiled.call(this, vs[i], parent, i+1, len);
            }
            return buf.join('');
        }
        return t.compiled.call(this,values, parent, xindex, xcount);
    },
    /**
     * 编译模板
     * @param {} tpl
     */
    compileTpl : function(tpl){
    	/**
    	 * 这里和基类Template中compile的过程比较类似
    	 * 添加了对子模板的处理，做我们自定义的{xtpl}这个东东判断一下
    	 */
    	var fn = function(m, name) {
    		if(name.substr(0, 4) == 'xtpl'){
                return "'+"+'this.applySubTemplate('+name.substr(4)+', values, parent, xindex, xcount)'+"+'";
            }
			var v = "values['" + name + "']";
			/**
			 * 注意这里的字符串拼接，两端的'+是为例和body里面的字符串合起来
			 * 刚好形成这么个样子：return '<p>'+values['age']+'</p>'
			 * 这种做法这是“凶险”异常啊！只要错掉一个，出来的函数就没法执行了！
			 * 最终出来的函数体字符串是这样的：
			 * tpl.compiled = function(values){return '<p>你好，'+values['name']+'</p>'+values['xtpl0']+'';};
			 * 这时候只要使用eval让这个字符串执行一下，tpl这个对象上就多了一个
			 * 名为compiled的函数
			 */
            var result="'+"+v+"+'"
            console.log(result);
            return result;
		};
		
    	var body= "tpl.compiled = function(values, parent, xindex, xcount){return '" +
		        tpl.body.replace(/(\r\n|\n)/g, '\\n').replace(/'/g, "\\'").replace(this.re, fn)+
	            "';};";
		console.log(body);
		eval(body);
		return this;
    },
    /**
     * 覆盖父类方法
     * @param {} values
     * @return {}
     */
    applyTemplate : function(values){
        return this.master.compiled.call(this,values,{},1,1);
    },
    /**
     * 覆盖父类方法
     * @return {}
     */
    compile : function(){return this;}
});


/**
 * Ajax支持
 */
Foxtrot.Ajax=(function(){
	var req;
	if(window.ActiveXObject){
		req=new ActiveXObject("Microsoft.XMLHTTP");
	}else if(window.XMLHttpRequest){
		req=new XMLHttpRequest();
	}else{
		alert("无法创建异步请求！");
	}
	return {
			request:function(config){
			//注册状态处理函数
			req.onreadystatechange=function(){
				if(req.readyState==4&&req.status==200){
					if(req.status==200){
						config.success.call(null,req);
					}else{
						config.failure.call(null,req);
					}
				}
			}
			//发送请求
			req.open("GET",config.url);
			req.send(config.param||"");
		}
	}
})();
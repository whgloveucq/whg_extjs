<%@page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String province=request.getParameter("province");
	if(province==null||"".equals(province)){
		return;
	}	
	String JiangSu="{success:true,rows:[{name:'南京',value:'nanjing'},{name:'南通',value:'nantong'}]}";
	String HuBei="{success:true,rows:[{name:'武汉',value:'wuhan'},{name:'赤壁',value:'chibi'}]}";
	if("jiangsu".equals(province)){
		out.print(JiangSu);
	}else if("hubei".equals(province)){
		out.print(HuBei);
	}
%>
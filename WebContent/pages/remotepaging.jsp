<%@page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String start=request.getParameter("start");
	String limit=request.getParameter("limit");
	System.out.println(start+"-->"+limit);
	
	StringBuffer result=new StringBuffer();
	result.append("{success:true,");
	result.append("totalCount:500,");
	result.append("rows:[");
	for(int i=0;i<10;i++){
		result.append("{userName:'漠漠',age:26,date:'1985-10-11',addr:'江苏南京'}");
		if(i<99){
			result.append(",");
		}
	}
	result.append("]}");
	response.getWriter().println(result.toString());
%>
<%@page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String userInfo=request.getParameter("userInfo");
	System.out.println(userInfo);
	response.getWriter().println("{success:true,msg:'提交成功'}");
%>
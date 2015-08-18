<%@page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	System.out.println("加载数据中...");
	String curr=request.getParameter("curr");
	out.println(Float.parseFloat(curr)+0.1);
%>
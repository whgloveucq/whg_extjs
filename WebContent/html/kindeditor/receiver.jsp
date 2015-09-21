<%@page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	request.setCharacterEncoding("UTF-8");
	String htmlData = request.getParameter("contentData") != null ? request.getParameter("contentData"):"";
	System.out.println(htmlData);
%>
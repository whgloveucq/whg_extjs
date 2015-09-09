<%@page language="java" import="java.util.*" pageEncoding="utf-8"%>
<jsp:directive.page import="com.momo.util.TreeGenerator"/>
<jsp:directive.page import="net.sf.json.JSONArray"/>
<%
	JSONArray jsonArray=TreeGenerator.queryDB("0");
	JSONArray result=TreeGenerator.generate(jsonArray,"pId","deptId");
	System.out.println(result.toString());
	out.println(result.toString());
%>
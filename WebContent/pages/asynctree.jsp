<%@page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String nodeId=request.getParameter("node");
	String nodeText=request.getParameter("text");
	System.out.println(nodeId);
	System.out.println(nodeText);
	String result="[{id:'testId',text:'测试节点',leaf:false}]";
	out.println(result);
%>
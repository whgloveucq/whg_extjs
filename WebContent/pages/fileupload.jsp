<%@page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@page import="java.io.File"%>
<%
	System.out.println("文件上传");
	try {
		String dir = "D:\\tomcat7\\webapps\\Extjs4.2\\FILE_UPLOADS";
		int maxPostSize = 3 * 5 * 1024 * 1024;
		MultipartRequest mRequst = new MultipartRequest(request, dir,
		maxPostSize, "utf-8");
		Enumeration files = mRequst.getFileNames();
		while (files.hasMoreElements()) {
			String name = (String) files.nextElement();
			File f = mRequst.getFile(name);
			f.renameTo(new File("whgggg"));
			if (f != null) {
				String fileName = mRequst.getFilesystemName(name);
				String lastFileName = dir + "\\" + fileName;
				System.out.println("文件路径>" + lastFileName);
			}
		}
	} catch (Exception e) {
		response.getWriter().println("{success:false,msg:'图片上传失败'}");
		e.printStackTrace();
	}
	response.getWriter().println("{success:true,msg:'图片上传成功'}");
%>

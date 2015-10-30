package com.momo.util;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfContentByte;
import com.itextpdf.text.pdf.PdfWriter;
import com.momo.util.SysDateFormat;
import com.oreilly.servlet.Base64Decoder;


public class ItextExample {

	public static String filePath="D:\\";
	public static String fileName="pdf文件";
	private static BaseFont bfChinese;
	private static Document doc;
	private static PdfWriter writer=null;
	private static Font chinese=null;
	
	public static void generate()
	{
		try{
			//打开PDF文档，完成一些初始化工作
			doc= new Document(PageSize.A4);
			String currentTime=SysDateFormat.getCurrentDateStringAll();
			writer=PdfWriter.getInstance(doc,new FileOutputStream(filePath+fileName+currentTime+".pdf"));
            doc.open();
            doc.newPage();
            bfChinese=BaseFont.createFont("STSong-Light","UniGB-UCS2-H",BaseFont.NOT_EMBEDDED);
            chinese=new Font(bfChinese,8,Font.NORMAL);
            PdfContentByte cb= writer.getDirectContent();
            cb.setLineWidth(35f);
			
		}
		
		
		
		
	}
	
	
}

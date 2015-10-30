package com.momo.util;
import java.io.File;
import java.util.Date;
import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.*;

public class jxl {
	public static String filePath="D:\\" ;
	public static String fileName="jxl报表.xls";
	
	public static void generate()
	{
	 try{
		 WritableWorkbook book= Workbook.createWorkbook(new File(filePath+fileName));
		 WritableSheet sheet0=book.createSheet("第一页", 0);
		 WritableSheet sheet1=book.createSheet("第二页", 1);
		 //设置列宽
		 sheet0.setColumnView(2, 20);
		 for(int row=0;row<5;row++)
		 {
			 //设置行高
			 sheet0.setRowView(row, 600);
			 //第一列：插入字符串
			 Label label= new Label(0,row,"纯字符串");
			 sheet0.addCell(label);
			 //第二列：插入数字
			 
			 jxl.write.Number num=new jxl.write.Number(1,row,Math.PI);
			 sheet0.addCell(num);
			 //第三列：插入时间
			 jxl.write.DateFormat df= new jxl.write.DateFormat("yyyy-MM-dd hh:mm:ss");
			 jxl.write.WritableCellFormat dfCell=new jxl.write.WritableCellFormat(df);
			 jxl.write.Datetime dateLabel= new jxl.write.DateTime(2,row,new Date(),dfCell);
			 sheet0.addCell(dateLabel);
			 //第四列：插入图片
			 File file= new File("D:\\5.png");
			 jxl.write.WritableImage image=new jxl.write.WritableImage(3,row,1,1,file);
			 sheet0.addImage(image); 
		 }
		 book.write();
		 book.close();
		 
	 } catch(Exception e){
		 e.printStackTrace();
	 }
		
		
		
	}
	
	
	public static void main(String[] args)
	{
		generate();
	}
	

}

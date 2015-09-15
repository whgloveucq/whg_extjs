package com.momo.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;

/**
 * @date:2008-09-03
 * @author zhangxf
 */
public class DBConnPool {
	private static ArrayList<Connection> freeConnections=new ArrayList<Connection>();
	public static int maxConn=30;
	public static int inUse=0;
	/*public static String url="jdbc:oracle:thin:@127.0.0.1:1521:sys2";
	public static String driverName="oracle.jdbc.driver.OracleDriver";
	public static String userName="cmp";
	public static String password="cmp";
	*/
	
	public static String url="jdbc:mysql://localhost:3306/test";
	public static String driverName="com.mysql.jdbc.Driver";
	public static String userName="root";
	public static String password="root";
	
	private DBConnPool() {
	}
	
	public static synchronized void releaseConnection(Connection con){
		if(freeConnections.size()<maxConn){
			try{
				if(con!=null&&(!con.isClosed())){
					freeConnections.add(con);
					inUse--;
				}
			}catch(Exception e){
				e.printStackTrace();
			}
		}
	}
	
	public static synchronized Connection getConnection(){
		Connection con=null;
		if(freeConnections.size()>0){
			con=freeConnections.get(0);
			freeConnections.remove(0);
			if(con==null){
				con=getConnection();
			}
			inUse++;
		}else{
			//if(inUse<maxConn){
				con=createConnection();
				inUse++;
			//}else{
				//try {
					//wait();
				//} catch (InterruptedException e) {
					//e.printStackTrace();
				//}
				//con=getConnection();
			//}
		}
		return con;
	}
	
	public static synchronized void releaseAll(){
		Iterator<Connection> iter=freeConnections.iterator();
		while(iter.hasNext()){
			Connection con=iter.next();
			try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			con=null;
		}
		freeConnections.clear();
	}
	
	private static Connection createConnection(){
		Connection con=null;
		try{
			Class.forName(driverName);
			con=DriverManager.getConnection(url, userName, password);	
		}catch(Exception e){
			e.printStackTrace();
		}
		return con;
	}
	
	public static ArrayList<Connection> getFreeConnections() {
		return freeConnections;
	}
}
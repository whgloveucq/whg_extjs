package com.momo.util;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.ResultSetHandler;




public class TreeGenerator {
	/**
	 * 查询数据库
	 * @param startId
	 * @return
	 */
	public static JSONArray queryDB(String startId){
		final JSONArray result=new JSONArray();
		Connection conn=DBConnPool.getConnection();
		try{
			QueryRunner qr=new QueryRunner();
			StringBuffer sql=new StringBuffer();
			sql.append(" SELECT T.DEPT_ID,T.DEPT_NAME,T.P_ID,LEVEL");
			sql.append(" FROM TD_CDB_DEPARTMENT T ");
			sql.append(" START WITH P_ID = "+startId);
			sql.append(" CONNECT BY PRIOR  DEPT_ID=P_ID");
			sql.append(" ORDER BY P_ID ASC");
			qr.query(conn,sql.toString(),new ResultSetHandler<Object>(){
				public Object handle(ResultSet rs) throws SQLException {
					while(rs.next()){
						JSONObject jsonObj=new JSONObject();
						jsonObj.put("deptId", rs.getString(1));
						jsonObj.put("text", rs.getString(2));
						jsonObj.put("pId", rs.getString(3));
						if(!rs.getString(3).equals("0")){
							jsonObj.put("leaf",true);
						}
						result.add(jsonObj);
					}
					return null;
				}
			});
			return result;
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			DBConnPool.releaseConnection(conn);
		}
		return result;
	}
	
	/**
	 * 装配树型结构
	 * @param srcArr		数组
	 * @param childFlag		字节点对应父节点的属性，如child.pId==father.nodeId
	 * @param fatherFlag
	 * @return
	 */
	public static JSONArray generate(JSONArray srcArr,String childFlag,String fatherFlag){
		JSONArray result=new JSONArray();
		for(int i=0;i<srcArr.size();i++){
			JSONObject jsonObj1=(JSONObject) srcArr.get(i);
			String str1=jsonObj1.get(fatherFlag).toString();
			for(int j=i+1;j<srcArr.size();j++){
				JSONObject jsonObj2=(JSONObject) srcArr.get(j);
				String str2=jsonObj2.get(childFlag).toString();
				if(str1.equals(str2)){
					JSONArray children=(JSONArray) jsonObj1.get("children");
					if(children==null){
						children= new JSONArray();
					}
					children.add(jsonObj2);
					jsonObj1.put("children",children);//注意这里，需要重新put一下
				}
			}
			if(jsonObj1.get("pId").equals("0")){
				result.add(jsonObj1);
			}
		}
		return result;
	}
	
	/**
	 * 测试
	 * @param args
	 */
	public static void main(String[] args) {
		JSONArray jsonArray=queryDB("0");
		JSONArray result=generate(jsonArray,"pId","deptId");
		System.out.println(result.toString());
	}
}

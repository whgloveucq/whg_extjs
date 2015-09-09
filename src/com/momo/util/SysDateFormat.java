package com.momo.util;
import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
/**
 * @company:hrj
 * @author:章小飞
 * @since:2007-12-31
 * @description:该类为时间处理工具类，主要完成时间的秒数转换、字符串转换
 */
@SuppressWarnings("serial")
public class SysDateFormat implements Serializable{
	/**
	 * 获得当前时间对格林威治标准时间 1970 年 1 月 1 日的 00:00:00.000（格里高利历）的偏移量秒数
	 */
	public static int getCurrentSecond(){
		GregorianCalendar gCalendar=new GregorianCalendar();//格里高利历
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	/**
	 * 获得当天0点0分的标准格林威治时间（秒）
	 * @return
	 */
	public static int getCurrentDaySecond(){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	/**
	 * 获得当天0点0分的标准格林威治时间（毫秒）
	 * @return
	 */
	public static long getCurrentDayStartMilli(){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return gCalendar.getTimeInMillis();
	}
	
	/**
	 * 获得当月1日0点0分标准格林威治时间
	 * @return
	 */
	public static int getCurrentMonthSecond(){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.set(Calendar.DATE, 1);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	/**
	 * 获得当季度1日0点0分标准格林威治时间
	 * @return
	 */
	public static int getCurrentSeasonSecond(){
		String str=SysDateFormat.getDateStringAllFromSeconds(getCurrentDaySecond());
		str=str.substring(5,7);
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis((long)getCurrentDaySecond()*1000);
		if(str.equals("01")||str.equals("02")||str.equals("03")){
			gCalendar.set(GregorianCalendar.MONTH, GregorianCalendar.JANUARY);
		}else if(str.equals("04")||str.equals("05")||str.equals("06")){
			gCalendar.set(GregorianCalendar.MONTH, GregorianCalendar.JUNE);
		}else if(str.equals("07")||str.equals("08")||str.equals("09")){
			gCalendar.set(GregorianCalendar.MONTH, GregorianCalendar.JULY);
		}else if(str.equals("10")||str.equals("11")||str.equals("12")){
			gCalendar.set(GregorianCalendar.MONTH, GregorianCalendar.OCTOBER);
		}
		gCalendar.set(GregorianCalendar.DAY_OF_MONTH, 1);
		gCalendar.set(GregorianCalendar.HOUR_OF_DAY, 12);
		gCalendar.set(GregorianCalendar.MINUTE, 0);
		gCalendar.set(GregorianCalendar.SECOND, 0);
		gCalendar.set(GregorianCalendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	/**
	 * 获得当年1月1日0点0分的标准格林威治时间
	 * @return
	 */
	public static int getCurrentYearSecond(){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.set(Calendar.MONTH, 0);
		gCalendar.set(Calendar.DATE, 1);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	
	/**
	 * 获得当前日期前一天0时0分的标准格林威治时间
	 * @return
	 */
	public static int getLastDaySecond(){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.add(Calendar.DATE, -1);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	
	/**
	 * 获得当前日期下一天0时0分的标准格林威治时间（秒）
	 * @return
	 */
	public static int getNextDaySecond(){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.add(Calendar.DATE, 1);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	/**
	 * 获得当前日期下一天0时0分的标准格林威治时间（毫秒）
	 * @return
	 */
	public static long getNextDayStartMilli(){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.add(Calendar.DATE, 1);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return gCalendar.getTimeInMillis();
	}
	/**
	 * 获得当前月份前一个月1号0时0分的标准格林威治时间
	 * @return
	 */
	public static int getLastMonthSecond(){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.add(Calendar.MONTH, -1);
		gCalendar.set(Calendar.DATE, 1);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	/**
	 * 获得当前月份下一个月1号0时0分的标准格林威治时间
	 * @return
	 */
	public static int getNextMonthSecond(){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.add(Calendar.MONTH, 1);
		gCalendar.set(Calendar.DATE, 1);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	/**
	 * 获得当前年份上一年1月1日的0时0分标准格林威治时间
	 * @return
	 */
	public static int getLastYearSecond(){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.add(Calendar.YEAR, -1);
		gCalendar.set(Calendar.MONTH, 0);
		gCalendar.set(Calendar.DATE, 1);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	/**
	 * 获得当前年份下一年1月1日0时0分你的标准格林威治时间
	 * @return
	 */
	public static int getNextYesrSecond(){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.add(Calendar.YEAR, 1);
		gCalendar.set(Calendar.MONTH, 0);
		gCalendar.set(Calendar.DATE, 1);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	/**
	 * 从一个指定的秒数获得所在天的起始时间点(秒)
	 * @param second
	 * @return
	 */
	public static int getDayStartSecondFromInt(int second){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis((long)second*1000);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	/**
	 * 从一个指定的秒数获得所在天的下一天起始时间点(秒)
	 * @param second
	 * @return
	 */
	public static int getNextDayStartSecondFromInt(int second){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis((long)second*1000);
		gCalendar.add(Calendar.DATE, 1);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	
	/**
	 * 从一个指定的秒数获得所在天的前一天起始时间点(秒)
	 * @param second
	 * @return
	 */
	public static int getLastDayStartSecondFromInt(int second){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis((long)second*1000);
		gCalendar.add(Calendar.DATE, -1);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	
	/**
	 * 从一个指定的秒数获得所在天的前一天起始时间点(毫秒)
	 * @param milli
	 * @return
	 */
	public static long getLastDayStartMilliFromInt(long milli){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis(milli);
		gCalendar.add(Calendar.DATE, -1);
		gCalendar.set(Calendar.HOUR, 0);
		gCalendar.set(Calendar.MINUTE,0);
		gCalendar.set(Calendar.SECOND, 0);
		gCalendar.set(Calendar.MILLISECOND, 0);
		return gCalendar.getTimeInMillis();
	}
	
	//获得当前日期的字符串表示
	public static String getCurrentDateString(){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
		GregorianCalendar gCalendar=new GregorianCalendar();
		return sFormat.format(gCalendar.getTime());
	}
	
	//获得当前日期的完整字符串表示
	public static String getCurrentDateStringAll(){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		GregorianCalendar gCalendar=new GregorianCalendar();
		return sFormat.format(gCalendar.getTime());
	}
	
	//获得当前时间的字符串表示
	public static String getCurrentTime(){
		SimpleDateFormat sFormat=new SimpleDateFormat("kk:mm:ss");
		GregorianCalendar gCalendar=new GregorianCalendar();
		return sFormat.format(gCalendar.getTime());
	}
	//获得当前日期前一天的字符串表示
	public static String getYesterdayTimeString(){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.add(Calendar.DATE, -1);
		return sFormat.format(gCalendar.getTime());
	}
	
	//获得指定日期字符串的毫秒数
	public static long getMilliFromString(String dateStr){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		GregorianCalendar gCalendar=new GregorianCalendar();
		try {
			Date date=sFormat.parse(dateStr);
			gCalendar.setTime(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return gCalendar.getTimeInMillis();
	}
	
	//获得指定数值的日期字符串表示……毫秒
	public static String getDateStringFromMilliSeconds(long minSeconds){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis(minSeconds);
		return sFormat.format(gCalendar.getTime());
	}
	//获得指定数值的日期字符串全表示……毫秒
	public static String getDateStringAllFromMilliSeconds(long minSeconds){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis(minSeconds);
		return sFormat.format(gCalendar.getTime());
	}
	
	//获得指定数值的日期字符串表示……秒
	public static String getDateStringFromSeconds(long seconds){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis(seconds*1000);
		return sFormat.format(gCalendar.getTime());
	}
	
	//获得指定数值的日期字符串全表示……秒
	public static String getDateStringAllFromSeconds(long seconds){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis(seconds*1000);
		return sFormat.format(gCalendar.getTime());
	}
	
	//获得指定日期字符串的日期(当天起始点0时0分0秒)……秒
	public static int getStartSecondFromStr(String dateStr){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
		GregorianCalendar gCalendar=new GregorianCalendar();
		int result=0;
		try {
			Date date=sFormat.parse(dateStr);
			gCalendar.setTime(date);
			gCalendar.set(GregorianCalendar.HOUR_OF_DAY, 0);
			gCalendar.set(GregorianCalendar.MINUTE, 0);
			gCalendar.set(GregorianCalendar.SECOND, 0);
			result=(int)(gCalendar.getTimeInMillis()/1000);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return result;
	}
	
	//	获得指定日期字符串的日期(当天起始点0时0分0秒)……毫秒
	public static long getStartMillisFromStr(String dateStr){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
		GregorianCalendar gCalendar=new GregorianCalendar();
		long result=0;
		try {
			Date date=sFormat.parse(dateStr);
			gCalendar.setTime(date);
			gCalendar.set(GregorianCalendar.HOUR_OF_DAY, 0);
			gCalendar.set(GregorianCalendar.MINUTE, 0);
			gCalendar.set(GregorianCalendar.SECOND, 0);
			result=gCalendar.getTimeInMillis();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return result;
	}
	
	//获得指定日期字符串的日期(当天中午12点0分0秒)……秒
	public static int getMiddleSecondFromStr(String dateStr){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
		GregorianCalendar gCalendar=new GregorianCalendar();
		int result=0;
		try {
			Date date=sFormat.parse(dateStr);
			gCalendar.setTime(date);
			gCalendar.set(GregorianCalendar.HOUR_OF_DAY, 12);
			gCalendar.set(GregorianCalendar.MINUTE, 0);
			gCalendar.set(GregorianCalendar.SECOND, 0);
			result=(int)(gCalendar.getTimeInMillis()/1000);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return result;
	}
	
	//获得指定日期字符串的日期(当天最后点23时59分59秒)……秒
	public static int getEndSecondFromStr(String dateStr){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
		GregorianCalendar gCalendar=new GregorianCalendar();
		int result=0;
		try {
			Date date=sFormat.parse(dateStr);
			gCalendar.setTime(date);
			gCalendar.set(GregorianCalendar.HOUR_OF_DAY, 23);
			gCalendar.set(GregorianCalendar.MINUTE, 59);
			gCalendar.set(GregorianCalendar.SECOND, 59);
			result=(int)(gCalendar.getTimeInMillis()/1000);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return result;
	}
	
	//获得指定日期（秒）所在月份第一天中午12点的秒数
	public static int getStartDayOfMonthFromSecond(long seconds){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis(seconds*1000);
		gCalendar.set(GregorianCalendar.DAY_OF_MONTH, 1);
		gCalendar.set(GregorianCalendar.HOUR_OF_DAY, 12);
		gCalendar.set(GregorianCalendar.MINUTE, 0);
		gCalendar.set(GregorianCalendar.SECOND, 0);
		gCalendar.set(GregorianCalendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	
	//获得指定日期（秒）所在季度第一天中午12点的秒数
	public static int getStartDayOfSeasonFromSecond(long seconds){
		String str=SysDateFormat.getDateStringAllFromSeconds(seconds);
		str=str.substring(5,7);
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis(seconds*1000);
		if(str.equals("01")||str.equals("02")||str.equals("03")){
			gCalendar.set(GregorianCalendar.MONTH, GregorianCalendar.JANUARY);
		}else if(str.equals("04")||str.equals("05")||str.equals("06")){
			gCalendar.set(GregorianCalendar.MONTH, GregorianCalendar.JUNE);
		}else if(str.equals("07")||str.equals("08")||str.equals("09")){
			gCalendar.set(GregorianCalendar.MONTH, GregorianCalendar.JULY);
		}else if(str.equals("10")||str.equals("11")||str.equals("12")){
			gCalendar.set(GregorianCalendar.MONTH, GregorianCalendar.OCTOBER);
		}
		gCalendar.set(GregorianCalendar.DAY_OF_MONTH, 1);
		gCalendar.set(GregorianCalendar.HOUR_OF_DAY, 12);
		gCalendar.set(GregorianCalendar.MINUTE, 0);
		gCalendar.set(GregorianCalendar.SECOND, 0);
		gCalendar.set(GregorianCalendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	//获得指定日期（秒）所在年份第一天中午12点的秒数
	public static int getStartDayOfYearFromSecond(long seconds){
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis(seconds*1000);
		gCalendar.set(GregorianCalendar.DAY_OF_YEAR, 1);
		gCalendar.set(GregorianCalendar.HOUR_OF_DAY, 12);
		gCalendar.set(GregorianCalendar.MINUTE, 0);
		gCalendar.set(GregorianCalendar.SECOND, 0);
		gCalendar.set(GregorianCalendar.MILLISECOND, 0);
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	
	public static void main(String[] args){
		int timeInt=1199142900;
		System.out.println(SysDateFormat.getDateStringAllFromSeconds(timeInt));
		int time=getDayStartSecondFromInt(timeInt);
		String str=SysDateFormat.getDateStringAllFromSeconds(time);
		System.out.println(str);
		int time2=getNextDayStartSecondFromInt(timeInt);
		String str2=SysDateFormat.getDateStringAllFromSeconds(time2);
		System.out.println(str2);
	}
}
package com.momo.util;
import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
/**
 * @company:hrj
 * @author:��С��
 * @since:2007-12-31
 * @description:����Ϊʱ�䴦�����࣬��Ҫ���ʱ�������ת�����ַ���ת��
 */
@SuppressWarnings("serial")
public class SysDateFormat implements Serializable{
	/**
	 * ��õ�ǰʱ��Ը������α�׼ʱ�� 1970 �� 1 �� 1 �յ� 00:00:00.000���������������ƫ��������
	 */
	public static int getCurrentSecond(){
		GregorianCalendar gCalendar=new GregorianCalendar();//���������
		return (int) (gCalendar.getTimeInMillis()/1000);
	}
	/**
	 * ��õ���0��0�ֵı�׼��������ʱ�䣨�룩
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
	 * ��õ���0��0�ֵı�׼��������ʱ�䣨���룩
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
	 * ��õ���1��0��0�ֱ�׼��������ʱ��
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
	 * ��õ�����1��0��0�ֱ�׼��������ʱ��
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
	 * ��õ���1��1��0��0�ֵı�׼��������ʱ��
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
	 * ��õ�ǰ����ǰһ��0ʱ0�ֵı�׼��������ʱ��
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
	 * ��õ�ǰ������һ��0ʱ0�ֵı�׼��������ʱ�䣨�룩
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
	 * ��õ�ǰ������һ��0ʱ0�ֵı�׼��������ʱ�䣨���룩
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
	 * ��õ�ǰ�·�ǰһ����1��0ʱ0�ֵı�׼��������ʱ��
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
	 * ��õ�ǰ�·���һ����1��0ʱ0�ֵı�׼��������ʱ��
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
	 * ��õ�ǰ�����һ��1��1�յ�0ʱ0�ֱ�׼��������ʱ��
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
	 * ��õ�ǰ�����һ��1��1��0ʱ0����ı�׼��������ʱ��
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
	 * ��һ��ָ��������������������ʼʱ���(��)
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
	 * ��һ��ָ��������������������һ����ʼʱ���(��)
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
	 * ��һ��ָ������������������ǰһ����ʼʱ���(��)
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
	 * ��һ��ָ������������������ǰһ����ʼʱ���(����)
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
	
	//��õ�ǰ���ڵ��ַ�����ʾ
	public static String getCurrentDateString(){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
		GregorianCalendar gCalendar=new GregorianCalendar();
		return sFormat.format(gCalendar.getTime());
	}
	
	//��õ�ǰ���ڵ������ַ�����ʾ
	public static String getCurrentDateStringAll(){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		GregorianCalendar gCalendar=new GregorianCalendar();
		return sFormat.format(gCalendar.getTime());
	}
	
	//��õ�ǰʱ����ַ�����ʾ
	public static String getCurrentTime(){
		SimpleDateFormat sFormat=new SimpleDateFormat("kk:mm:ss");
		GregorianCalendar gCalendar=new GregorianCalendar();
		return sFormat.format(gCalendar.getTime());
	}
	//��õ�ǰ����ǰһ����ַ�����ʾ
	public static String getYesterdayTimeString(){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.add(Calendar.DATE, -1);
		return sFormat.format(gCalendar.getTime());
	}
	
	//���ָ�������ַ����ĺ�����
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
	
	//���ָ����ֵ�������ַ�����ʾ��������
	public static String getDateStringFromMilliSeconds(long minSeconds){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis(minSeconds);
		return sFormat.format(gCalendar.getTime());
	}
	//���ָ����ֵ�������ַ���ȫ��ʾ��������
	public static String getDateStringAllFromMilliSeconds(long minSeconds){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis(minSeconds);
		return sFormat.format(gCalendar.getTime());
	}
	
	//���ָ����ֵ�������ַ�����ʾ������
	public static String getDateStringFromSeconds(long seconds){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis(seconds*1000);
		return sFormat.format(gCalendar.getTime());
	}
	
	//���ָ����ֵ�������ַ���ȫ��ʾ������
	public static String getDateStringAllFromSeconds(long seconds){
		SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		GregorianCalendar gCalendar=new GregorianCalendar();
		gCalendar.setTimeInMillis(seconds*1000);
		return sFormat.format(gCalendar.getTime());
	}
	
	//���ָ�������ַ���������(������ʼ��0ʱ0��0��)������
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
	
	//	���ָ�������ַ���������(������ʼ��0ʱ0��0��)��������
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
	
	//���ָ�������ַ���������(��������12��0��0��)������
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
	
	//���ָ�������ַ���������(��������23ʱ59��59��)������
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
	
	//���ָ�����ڣ��룩�����·ݵ�һ������12�������
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
	
	//���ָ�����ڣ��룩���ڼ��ȵ�һ������12�������
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
	//���ָ�����ڣ��룩������ݵ�һ������12�������
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
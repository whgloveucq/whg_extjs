var updateClock=function()
{
Ext.fly('clock').update(new Date().format('g:i:s A'));
}
var task={
run:updateClock,
interval:1000
}
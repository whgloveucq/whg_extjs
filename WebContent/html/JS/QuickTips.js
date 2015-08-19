Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.QuickTips.register({
	    target: 'mydiv',
	    title: 'My Tooltip',
	    text: 'This tooltip was added in code',
	    width: 100,
	    dismissDelay: 2000
	});
});
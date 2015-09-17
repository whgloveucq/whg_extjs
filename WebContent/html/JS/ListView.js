Ext.onReady(function() {
	var data = [{
			"name" : "a.jpg",
			"size" : 2067,
			"lastmod" : 1236974993000,
			"url" : "a.jpg"
		}, {
			"name" : "b.jpg",
			"size" : 2303,
			"lastmod" : 1236974993000,
			"url" : "b.jpg"
		}]
	
	var store = new Ext.data.JsonStore({
		data:data,
		fields:['name', 'url', {
				name : 'size',
				type : 'float'
			}, {
				name : 'lastmod',
				type : 'date',
				dateFormat : 'timestamp'
			}
		]
	});

	var listView = new Ext.list.ListView({
		store : store,
		multiSelect : true,
		emptyText : 'No images to display',
		reserveScrollOffset : true,
		columns : [{
			header : 'File',
			width : .5,
			dataIndex : 'name'
		}, {
			header : 'Last Modified',
			width : .35,
			dataIndex : 'lastmod',
			tpl : '{lastmod:date("m-d h:i a")}'
		}, {
			header : 'Size',
			dataIndex : 'size',
			tpl : '{size:fileSize}',
			align : 'right'
		}]
	});

	var panel = new Ext.Panel({
		id : 'images-view',
		width : 425,
		height : 250,
		collapsible : true,
		layout : 'fit',
		title : 'Simple ListView (0 items selected)',
		items : listView
	});
	panel.render(document.body);
	
	listView.on('selectionchange', function(view, nodes) {
		var l = nodes.length;
		var s = l != 1 ? 's' : '';
		panel.setTitle('Simple ListView (' + l + ' item' + s+ ' selected)');
	});
});
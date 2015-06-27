// appendChild
Ext.onReady(function() {
	var nodes = [
		{
				text : '任我行',
				leaf : true
			}, 
				{
				text : '令狐冲',
				leaf : true
			},
			{
				text : '任鹰鹰',
				leaf : true
			}

	];
	var treePanel = new Ext.tree.TreePanel({
				border : false,
				autoScroll : true,
				root : {
					text : '日余神教',
					leaf : false,
					expanded : true,
					children:nodes
				},
				rootVisible : true
			});
	var win = new Ext.Window({
				title : '树',
				width : 200,
				height : 400,
				layout : 'fit',
				items : [treePanel],
				buttons : [ {
					text : '增加',
					handler : function() {
					
						var newNode = new Ext.tree.TreeNode({
									text : '新节点'+ (treePanel.root.childNodes.length + 1),
									leaf : true
								});

						treePanel.root.appendChild(newNode);

					}
				}, 
					{
					text : '移动',
					handler : function() {
						var ryy = treePanel.root.childNodes[2];
						treePanel.root.appendChild(ryy);
                       
					}

				}

				]

			}

	);
	win.show();
}

);

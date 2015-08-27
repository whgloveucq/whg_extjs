Ext.onReady(function() {
    var fp = new Ext.form.FormPanel({
    	bodyStyle:{
    		'padding':'80 100'
    	},
    	defaults:{
    		width:120
    	},
    	labelWidth:50,
    	items:[
    		{
    			xtype:'combo',
	    		fieldLabel:'性别',
//	    		id:'gender',
	    		id:'genderCombo',
	    		name:'gender',
	    		hiddenName:'gender',
	    		mode:'local',
	    		displayField:'name',
	    		valueField:'value',
	    		triggerAction:'all',
	    		allowBlank:false,
//	    		value:'0',
	    		emptyText:'请选择',
	    		store: new Ext.data.JsonStore({
			        fields: ['name','value'],
			        data:[
			        	{name:'男',value:'0'},
			        	{name:'女',value:'1'},
			        	{name:'其他',value:'2'}
			        ]
			    }),
			    
			    initList : function(){
			        if(!this.list){
			            var cls = 'x-combo-list',
			                listParent = Ext.getDom(this.getListParent() || Ext.getBody()),
			                zindex = parseInt(Ext.fly(listParent).getStyle('z-index'), 10);
			
			            if (!zindex) {
			                zindex = this.getParentZIndex();
			            }
			
			            this.list = new Ext.Layer({
			                parentEl: listParent,
			                shadow: this.shadow,
			                cls: [cls, this.listClass].join(' '),
			                constrain:false,
			                zindex: (zindex || 12000) + 5
			            });
			
			            var lw = this.listWidth || Math.max(this.wrap.getWidth(), this.minListWidth);
			            this.list.setSize(lw, 0);
			            this.list.swallowEvent('mousewheel');
			            this.assetHeight = 0;
			            if(this.syncFont !== false){
			                this.list.setStyle('font-size', this.el.getStyle('font-size'));
			            }
			            if(this.title){
			                this.header = this.list.createChild({cls:cls+'-hd', html: this.title});
			                this.assetHeight += this.header.getHeight();
			            }
			
			            this.innerList = this.list.createChild({cls:cls+'-inner'});
			            this.mon(this.innerList, 'mouseover', this.onViewOver, this);
			            this.mon(this.innerList, 'mousemove', this.onViewMove, this);
			            this.innerList.setWidth(lw - this.list.getFrameWidth('lr'));
			
			            if(this.pageSize){
			                this.footer = this.list.createChild({cls:cls+'-ft'});
			                this.pageTb = new Ext.PagingToolbar({
			                    store: this.store,
			                    pageSize: this.pageSize,
			                    renderTo:this.footer
			                });
			                this.assetHeight += this.footer.getHeight();
			            }
			
			            if(!this.tpl){
			                this.tpl = '<tpl for="."><div class="'+cls+'-item">{' + this.displayField + '}</div></tpl>';
			            }
			
			            this.view = new Ext.DataView({
			                applyTo: this.innerList,
			                tpl: this.tpl,
			                singleSelect: true,
			                selectedClass: this.selectedClass,
			                itemSelector: this.itemSelector || '.' + cls + '-item',
			                emptyText: this.listEmptyText,
			                deferEmptyText: false
			            });
			
			            this.mon(this.view, {
			                containerclick : this.onViewClick,
			                click : this.onViewClick,
			                scope :this
			            });
			
			            this.bindStore(this.store, true);
			
			            if(this.resizable){
			                this.resizer = new Ext.Resizable(this.list,  {
			                   pinned:true, handles:'se'
			                });
			                this.mon(this.resizer, 'resize', function(r, w, h){
			                    this.maxHeight = h-this.handleHeight-this.list.getFrameWidth('tb')-this.assetHeight;
			                    this.listWidth = w;
			                    this.innerList.setWidth(w - this.list.getFrameWidth('lr'));
			                    this.restrictHeight();
			                }, this);
			
			                this[this.pageSize?'footer':'innerList'].setStyle('margin-bottom', this.handleHeight+'px');
			            }
			        }
			    },
    
			    mimicBlur : function(e){
			        if(!this.isDestroyed && !this.wrap.contains(e.target) && this.validateBlur(e)){
			            this.triggerBlur();
			        }
			    },
			    validateBlur : function(){
			        return !this.list || !this.list.isVisible();
			    },
			
			    // private
			    initQuery : function(){
			        this.doQuery(this.getRawValue());
			    },
			
			    // private
			    beforeBlur : function(){
			        this.assertValue();
			    },
			
			    // private
			    postBlur  : function(){
			        Ext.form.ComboBox.superclass.postBlur.call(this);
			        this.collapse();
			        this.inKeyMode = false;
			    },
			    
			    triggerBlur : function(){
			        this.mimicing = false;
			        this.doc.un('mousedown', this.mimicBlur, this);
			        if(this.monitorTab && this.el){
			            this.un('specialkey', this.checkTab, this);
			        }
			        Ext.form.TriggerField.superclass.onBlur.call(this);
			        if(this.wrap){
			            this.wrap.removeClass(this.wrapFocusClass);
			        }
			    }
    		}
    	]
    });
    
    var win=new Ext.Window({
    	title:'本地数据',
    	width:400,
    	height:300,
    	layout:'fit',
    	items:[fp],
    	bbar:[
    		{
    			text:'获取值',
    			handler:function(){
    				alert(Ext.encode(fp.form.getValues()));
    			}
    		}
    	]
    })
    win.show();
});
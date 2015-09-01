Ext.ns('Ext.ux.form');
Ext.ux.form.MultiUploader =Ext.extend(Ext.form.FieldSet,  {
	layout:'form',
	maxSize:5,
	title:'请选择附件：',
	fileUploads:[],
	initComponent:function(){
		Ext.ux.form.MultiUploader.superclass.initComponent.call(this);
		this.addEvents('fileselected');
	},
	onRender:function(ct, position){
		Ext.ux.form.MultiUploader.superclass.onRender.call(this, ct, position);
		this.createInput();
		this.createNote();
		this.on({
			'fileselected':this.onFileSelected
		})
	},
    // private
	onDestory:function(){
		Ext.ux.form.MultiUploader.superclass.onDestroy.call(this);
	},
	//private 
	createInput:function(){
		var fileInput =this.el.insertFirst({
            cls: 'x-form-file',
            tag: 'input',
            type: 'file',
            size: this.el.getViewSize()
        });
		fileInput.on({
            scope: this,
            change: function(){
                this.fireEvent('fileselected',fileInput);    
            }
		});
        this.fileUploads[this.fileUploads.length]=fileInput;
        return fileInput;
	},
	createNote:function(){
//		alert(this.el.dom);
//		var note=this.el.insertSibling({
//			tag: 'div'
//		},'after',false);
//		note.dom.innerHTML="允许附件数量："+this.maxSize;
	},
	//private
	onFileSelected:function(inputEl){
		//将已经选择好文件的输入栏禁用
		//inputEl.dom.disabled=true;
		//检查是否已经超出了允许上传的最多附件数量
		if(this.fileUploads.length==this.maxSize){
			return;
		}
		//检查是否有空输入栏，如果没有空输入栏，创建一个新的
		var flag=true;
		Ext.each(this.fileUploads,function(item){
			if(!item.getValue()){
				flag=false;
			}
		})
		if(flag){
			this.createInput();
		}
	}
});
Ext.reg('multiuploader', Ext.ux.form.MultiUploader);
Ext.form.MultiUploader = Ext.ux.form.MultiUploader;

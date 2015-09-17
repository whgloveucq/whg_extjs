/*!
 * Ext JS Library 3.2.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */

Ext.onReady(function(){

    Ext.QuickTips.init();

    var msg = function(title, msg){
        Ext.Msg.show({
            title: title,
            msg: msg,
            minWidth: 200,
            modal: true,
            icon: Ext.Msg.INFO,
            buttons: Ext.Msg.OK
        });
    };

    var fibasic = new Ext.ux.form.FileUploadField({
    	buttonText:'浏览...',
        renderTo: 'fi-basic',
        width: 400
    });

    new Ext.Button({
        text: '获取文件路径',
        renderTo: 'fi-basic-btn',
        handler: function(){
            var v = fibasic.getValue();
            msg('选中文件', v && v != '' ? v : '没有');
        }
    });

    var fbutton = new Ext.ux.form.FileUploadField({
    	buttonText:'浏览...',
        renderTo: 'fi-button',
        buttonOnly: true,
        listeners: {
            'fileselected': function(fb, v){
                var el = Ext.fly('fi-button-msg');
                el.update('<b>选中:</b> '+v);
                if(!el.isVisible()){
                    el.slideIn('t', {
                        duration: .2,
                        easing: 'easeIn',
                        callback: function(){
                            el.highlight();
                        }
                    });
                }else{
                    el.highlight();
                }
            }
        }
    });

    var fp = new Ext.FormPanel({
        renderTo: 'fi-form',
        fileUpload: true,
        width: 500,
        frame: true,
        title: '文件上传表单',
        autoHeight: true,
        bodyStyle: 'padding: 10px 10px 0 10px;',
        labelWidth: 50,
        defaults: {
            anchor: '95%',
            allowBlank: false,
            msgTarget: 'side'
        },
        items: [{
            xtype: 'textfield',
            fieldLabel: '名称'
        },{
            xtype: 'fileuploadfield',
            id: 'form-file',
            emptyText: '选择一个图片',
            fieldLabel: '图片',
            name: 'photo-path',
            buttonText: '',
            buttonCfg: {
                iconCls: 'upload-icon'
            }
        }],
        buttons: [{
            text: '保存',
            handler: function(){
                if(fp.getForm().isValid()){
	                fp.getForm().submit({
	                    url: 'fileupload.jsp',
	                    waitMsg: '图片上传中...',
	                    waitTitle:'提示信息',
	                    success: function(fp, o){
	                        msg('成功', '服务端正确接受了文件');
	                    }
	                });
                }
            }
        },{
            text: '重置',
            handler: function(){
                fp.getForm().reset();
            }
        }]
    });

});
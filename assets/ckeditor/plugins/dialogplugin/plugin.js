CKEDITOR.plugins.add('dialogplugin', {ഀ
    init: function(editor) {ഀ
        editor.addCommand('dialogplugin', new CKEDITOR.dialogCommand('dialogplugin'));ഀ
        editor.ui.addButton('dialogplugin',ഀ
			{ഀ
			    label: editor.lang.about.title,ഀ
			    command: 'dialogplugin',ഀ
			    icon: this.path + 'dialogplugin.png'ഀ
			});ഀ
        CKEDITOR.dialog.add('dialogplugin', this.path + 'dialogs/dialogplugin.js');ഀ
    }ഀ
});ഀ

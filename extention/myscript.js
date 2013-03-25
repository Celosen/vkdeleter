var buttonHtml = '<span class="divider">|</span>'+
	' <span><a id="vkdl" href="#">Удалить все сообщения</a></span>';
	
function insertButton () { 
	 var btn = $('#vkdl');
	 if (btn.length == 0){
	 
		var cont = $('#im_dialogs_summary .summary');
		cont.append(buttonHtml);
	}	
}
setInterval(insertButton, 200);


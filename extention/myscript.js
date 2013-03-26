var buttonHtml = '<span class="divider">|</span>'+
	' <span><a id="vkdl" href="#">Удалить все сообщения</a></span>';
	
function insertButton () { 
	 var btn = $('#vkdl');
	 if (btn.length == 0){
	 
		var cont = $('#im_dialogs_summary .summary');
		cont.append(buttonHtml);
		
		btn = $('#vkdl');
		btn.click (onClick);	
	}
		
}
setInterval(insertButton, 200);


function onClick (){
	alert ('Not worked yet');
}
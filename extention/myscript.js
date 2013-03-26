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



function onClick (){
    var btnAction = $('.dialogs_del:first').click();
    setTimeout(confirmation, 70); 

}

    
function confirmation (){   
    var confirm = $('.popup_box_container .button_blue button').click();
}

setInterval(insertButton, 200);
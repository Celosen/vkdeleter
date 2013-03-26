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


// Вызывается, когда юзер кликает на кнопке УДАЛИТЬ ВСЕ СООБЩЕНИЯ
function onClick (){
    deleteClick();
}

function deleteClick(){
    var delBtn = $('.dialogs_del:first');
    
    if (delBtn.length != 0){    
        delBtn.click();    
        setTimeout(confirmation, 70); 
    }

}
    
function confirmation (){   
    var confirm = $('.popup_box_container .button_blue button').click();
    setTimeout(deleteClick, 150);
}

setInterval(insertButton, 200);
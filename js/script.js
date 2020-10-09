
//При нажатии убирает картинку и воспроизводит видео
/* document.querySelector(".vacancies-head__video__overlay").onclick = function(){
    this.style.display = "none";
}
 */
var x = document.querySelector(".vacancies-head__video__overlay")
if(x!=null){

x.onclick = function(){
this.style.display = "none";
}

}

//Ссылка на резюме
var hide = document.querySelector('.form-partner__row__hide');
var cursor = document.querySelector('.form-partner__row__cursor');
var open = document.querySelector('.form-partner__row__open');
open.style.display = 'none';


cursor.addEventListener("click", function() {
    if(open.style.display == 'none') {
		open.style.display = 'flex';
		hide.style.display = 'none';
	} 
});


//маска телефона
$(document).ready(function() {
	$("#phone-partner").mask("+7 (999) 999-99-99");
});

//кнопка отправить не активна
function checkParams() {
    var checkbox = $('#checkbox-consent').val();
    // var email = $('#email').val();
    // var phone = $('#phone').val();
     
    if(checkbox.length != 0) {
        $('#button-send').removeAttr('disabled');
    } else {
        $('#button-send').attr('disabled', 'disabled');
    }
}
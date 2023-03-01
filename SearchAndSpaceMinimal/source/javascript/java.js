function Search(){
	if(document.getElementById("input_text").value != "") {
		window.open("https://yandex.ru/search/?text=" + document.getElementById("input_text").value);
	} else {
		alert("Введите запрос!")
	}
	
}
function Clean(){
	document.getElementById("input_text").value = "";
}
function Vk(){
	window.open("https://vk.com/");
}
function Whatsapp() {
	window.open("https://web.whatsapp.com/");
}
function Gmail() {
	window.open("https://www.google.com/intl/ru/gmail/about/");
}
function Youtube() {
	window.open("https://www.youtube.com/");
}
function Discord() {
	window.open("https://discord.com/login");
}
function Telegram() {
	window.open("https://web.telegram.org/");
}
document.addEventListener('keyup', function(event){
	if(event.key == 'Enter'){
		if(document.getElementById("input_text").value != "") {
			window.open("https://yandex.ru/search/?text=" + document.getElementById("input_text").value);
		} else {
			alert("Введите запрос!")
		}
	}
});
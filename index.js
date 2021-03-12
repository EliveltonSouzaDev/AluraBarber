function slide1(){
document.getElementById('banner').src="https://www.barbabrava.com.br/wp-content/uploads/2020/05/2-2-800x300.png";
setTimeout("slide2()", 3000)
}

function slide2(){
document.getElementById('banner').src="http://i.mlcdn.com.br/portaldalu/fotosconteudo/54754.jpg";
setTimeout("slide3()", 3000)
}

function slide3(){
document.getElementById('banner').src="https://exame.com/wp-content/uploads/2020/05/whatsapp-image-2020-05-12-at-10.47.30.jpg";
setTimeout("slide1()", 3000)
}
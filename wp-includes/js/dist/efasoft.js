window.onscroll = function(){

    var posicion = window.scrollY || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("soy_daniela_abogada");


    elemento1.style.bottom = posicion * 0.2 + "px";


}
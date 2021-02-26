const atras = document.getElementById("atras");
const adelante = document.getElementById("adelante");

atras.addEventListener("click", (e) => {
    e.preventDefault
})

adelante.addEventListener("click", (e) => {
    e.preventDefault
})

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides(indice+=n);
}

function posicionSlide(n){
    muestraSlides(indice=n);
}

function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slide.length();
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';
}

function atrasSlide(n){
    muestraSlides(indice-=n);
}

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
});

$('#enlace-contacto').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 3335
    }, 600);
});

$('#enlace-about').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 720
    }, 600);
});

$('#enlace-proyectos').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 2201
    }, 600);
});

$('#enlace-inicio').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 600);
});

$('#enlace-about2').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 720
    }, 600);
});

$('#enlace-skills').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 1400
    }, 600);
});

$('#enlace-proyectos2').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 2300
    }, 600);
});

$('#enlace-contacto2').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 3250
    }, 600);
});
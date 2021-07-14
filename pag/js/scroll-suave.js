
// btn-menu Efecto

var btnArriba = $('#BtnArriba');

$(window).on('scroll', function () {

    var OffsetTop = $('#Historia').offset().top;

    if ($(window).scrollTop() >= OffsetTop) {

        btnArriba.css('margin-right', 0);

    }else if ($(window).scrollTop() <= OffsetTop/2) {

        btnArriba.css('margin-right', '-60px');

    }

});

// Scroll Suave

btnArriba.on('click', function (event) {
    event.preventDefault();

    if ($(window).scrollTop() != 0) {
        $('html, body').stop().animate({scrollTop: 0}, 800);
    }

});


// Scroll Suave

$(document).ready(function (argument) {
	$('a.scroll-suave').on('click', function (event) {
    	event.preventDefault();
    	var seccionOffsetTop = $($(this).attr('href')).offset().top - 100;
    	$('html, body').stop().animate({scrollTop: seccionOffsetTop}, 900);
	});

});
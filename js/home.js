document.ready(function() {
	
  // Mostrar y ocultar botón "Volver arriba"

  var btnVolverArriba = $('#btnHome');

  $(window).on('scroll', function () {

    var proyectosOffsetTop = $('#Esto').offset().top;

    if ($(window).scrollTop() >= proyectosOffsetTop) {

      btnVolverArriba.css('margin-right', 0);

    }else if ($(window).scrollTop() <= proyectosOffsetTop/2) {

      btnVolverArriba.css('margin-right', '-60px');

    }

  })

  // Movimiento suave de scroll de "Inicio" y "Volver arriba"

  $('a.volver-arriba').on('click', function (e) {
    e.preventDefault();

    if ($(window).scrollTop() != 0) {
      $('html, body').stop().animate({scrollTop: 0}, 1000);
    }

  })
});
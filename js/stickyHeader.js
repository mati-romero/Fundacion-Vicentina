$(document).ready(function () {

  var fixedHeader = $('#fixedHeader');

  $(window).on('scroll', function () {

    var acercaDeOffsetTop = $('#acercaDe').offset().top;

    if ($(window).scrollTop() >= acercaDeOffsetTop) {

      fixedHeader.css('margin-top', 0);

    }else if ($(window).scrollTop() <= acercaDeOffsetTop/2) {

      fixedHeader.css('margin-top', '-68px');

    }

  })


});

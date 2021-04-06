$(document).ready(function() {
	$('#MenuProyectos').hover(function() {
		$('#menuDesplegable').css('display','block');

		var l = $('#MenuProyectos').offset().left;
		var h1 = $('#MenuProyectos').width();
		var h2 =  $('#menuDesplegable').width();
		var e = (h2 - h1) / 2;
		var m = l - e;

		$('#menuDesplegable').css('left',m);
	});

	$('.menu-contenedor').mouseleave(function() {
		$('#menuDesplegable').css('display','none');
	});
});
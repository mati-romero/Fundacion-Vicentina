$(document).ready(function() {
	$("#opc1").hover(function () {
		$("#Mision").fadeIn(500);
		$("#Nosotros").fadeOut(500);
		$("#Objetivos").fadeOut(500);
		$("#Historia").fadeOut(500);
		$("#equipo").fadeOut(500);

	});

	$("#opc2").hover(function () {
		$("#Objetivos").fadeIn(500);
		$("#Nosotros").fadeOut(500);
		$("#Mision").fadeOut(500);
		$("#Historia").fadeOut(500);
		$("#equipo").fadeOut(500);

	});

	$("#opc3").hover(function () {
		$("#Historia").fadeIn(500);
		$("#Nosotros").fadeOut(500);
		$("#Mision").fadeOut(500);
		$("#Objetivos").fadeOut(500);
		$("#equipo").fadeOut(500);

	});

	$("#opc4").hover(function () {
		$("#equipo").fadeIn(500);
		$("#Nosotros").fadeOut(500);
		$("#Mision").fadeOut(500);
		$("#Objetivos").fadeOut(500);
		$("#Historia").fadeOut(500);
	});
});
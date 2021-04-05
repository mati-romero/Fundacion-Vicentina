$(document).ready(function () {
	$("#verMasNoticias").on('click',function () {
		$("#NoticiasAnteriores").fadeToggle(1000);
		$("#verMasNoticias").css('display', 'none');
		$("#verMenosNoticias").css('display', 'block');
		$("#NoticiasRecientes").fadeOut(500);
	});

	$("#verMenosNoticias").on('click',function () {
		$("#NoticiasAnteriores").fadeToggle(1000);
		$("#verMasNoticias").css('display', 'block');
		$("#verMenosNoticias").css('display', 'none');
		$("#NoticiasRecientes").fadeIn(500);
	});
});
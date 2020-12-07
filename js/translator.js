$(document).ready(function() {
	$('#TIngles').click(function() {
		$('#acercaDe .contenedor  .titulo-seccion h2').text("About us?");

		$('#acercaDe .contenedor  .titulo-seccion p').text("Learn more about us, what we do and how we do it");

		$('#acercaDe .contenedor .texto-acerca-de p').text("We are a non-profit social organization founded in 2010 in the city of Córdoba, Argentina. We work in an open and collective action environment to promote development, inclusion and social organization. Our foundation articulates its work with other organizations in society, government agencies, institutions and volunteers; strengthening alliances with different organizations from the public, private and social sectors to promote actions that promote a better quality of life.");
	});

	$('#TEspanol').click(function() {
		 location.reload();
	});
});
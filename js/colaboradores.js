$(document).ready(function () {

	

	var colaboradores = $('#colaboradores');

	function desfilar() {
		colaboradores.animate({
			marginLeft: '-200px'
		},1000,function() {
			$('#colaboradores .colaborador:first').insertAfter('#colaboradores .colaborador:last');
        	colaboradores.css('margin-left', '0');
		});
	}

	setInterval(desfilar,500);
});
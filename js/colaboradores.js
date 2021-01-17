$(document).ready(function () {

	

	var colaboradores = $('#colaboradores');

	function desfilar() {
		colaboradores.animate({
			marginLeft: '-139px'
		},1000,function() {
			$('#colaboradores .colaborador:first').insertAfter('#colaboradores .colaborador:last');
        	colaboradores.css('margin-left', '0px');
		});
	}

	setInterval(desfilar,500);
});
$(document).ready(function() {

	$(".boton-menu").on('click',function() {

		$(".menu-desplegable").css('display','none');

		var sw = parseInt($(this).attr("data-sw"));
		var menu = $($(this).attr("data-menu"));

		if(sw == 0) {
			menu.css('display','block');

			var positionLeft = $(this).offset().left;
			var widthBoton = $(this).width();
			var widthMenu = menu.width();
			var e = (widthMenu - widthBoton) / 2;
			var valuePosition = positionLeft - e;

			menu.css('left',valuePosition);
			var menu = $($(this).attr("data-menu"));
			$(this).attr("data-sw","1");
		}
		else {
			menu.css('display','none');
			$(this).attr("data-sw","0");
		}

		menu.mouseleave(function() {
			menu.css('display','none');
			$(".boton-menu").attr("data-sw","0");
		});
	});
});
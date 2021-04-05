$(document).ready(function () {

	var sliders = $('#sliders');
	var marginL = "-" + ($('#sliders .slide:first').width()).toString() + "px";

	function desfilar() {
		sliders.animate({
			marginLeft: marginL
		},20000,function() {
			$('#sliders .slide:first').insertAfter('#sliders .slide:last');
        	sliders.css('margin-left', '0px');
		});
	}

	setInterval(desfilar,0);
});
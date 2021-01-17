$(document).ready(function () {

	var banner = $('#banner img');

	function disfuminar() {

		if(banner.css("opacity") == 1.0) {
			banner.animate({opacity: "0.0"},1500);
		}
		else {
			banner.animate({opacity: "1.0"},1500);
		}
	}


	setInterval(disfuminar,5000);

});

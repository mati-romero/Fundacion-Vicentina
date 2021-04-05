$(document).ready(function() {
	$(".ingles").on("click",function() {

		var arrayMenu = $(".menu");

		for (var i = 0 ; i < arrayMenu.length; i++) {

			arrayMenuA = arrayMenu[i].children('a');

			arrayMenuA.empty();

			arrayMenuA[0].append("HOME");
			arrayMenuA[1].append("ABOUT US");
			arrayMenuA[2].append("PROJECTS");
			arrayMenuA[3].append("OUR TEAM");
			arrayMenuA[4].append("CONTACT");
		}
		
	});
});

/*

		var link1 = '<a href="#" class="volver-arriba">HOME</a>';
        var link2 = '<a href="#acercaDe" class="scroll-acercaDe">ABOUT US</a>';
        var link3 = '<a href="#proyectos" class="scroll-proyecto Pro">PROJECTS</a>';
      	var link4 = '<a href="#equipo" class="scroll-equipo">OUR TEAM</a>';
      	var link5 = '<a href="#Footer" class="scroll-suave">CONTACT</a>';
		
      	$(".menu").empty();

		$(".menu").append(link1);
		$(".menu").append(link2);
		$(".menu").append(link3);
		$(".menu").append(link4);
		$(".menu").append(link5);



				var arrayMenu = $(".menu").children('a');

		for (var i = 0 ; i < arrayMenu.length; i++) {
			arrayMenu.empty();
		}

		
		arrayMenu[0].append("HOME");
		arrayMenu[1].append("ABOUT US");
		arrayMenu[2].append("PROJECTS");
		arrayMenu[3].append("OUR TEAM");
		arrayMenu[4].append("CONTACT");


		var link1 = '<a href="#" class="volver-arriba">HOME</a>';
        var link2 = '<a href="#acercaDe" class="scroll-acercaDe">ABOUT US</a>';
        var link3 = '<a href="#proyectos" class="scroll-proyecto Pro">PROJECTS</a>';
      	var link4 = '<a href="#equipo" class="scroll-equipo">OUR TEAM</a>';
      	var link5 = '<a href="#Footer" class="scroll-suave">CONTACT</a>';
		
      	$(".menu").empty();

		$(".menu").append(link1);
		$(".menu").append(link2);
		$(".menu").append(link3);
		$(".menu").append(link4);
		$(".menu").append(link5);

*/
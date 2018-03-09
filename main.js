$(document).ready(function () {
	/*function used in several places to show slide info in photo1*/
	var showInfo = function () {
		$('.hotspot').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X1-close').addClass('btn_close_show');
		$('#slide').addClass('info_slides_show');
	}


	$('#hotspot_syrup').click(function () {
		showInfo();
		$('#popIn').text("Cough syrup containing codeine and promethazine is the basis of lean. This one is over the counter, so it doesn't contain codeine, but contains dextromethorphan, which produces hallucinogenic effects.").addClass('popIn-info');
		$("#popIn").addClass("spot_text");
	});



	$('#hotspot_soda').click(function () {
		showInfo();
		$('#popIn').text("Soda, such as Sprite or Mountain Dew, is used for flavor, to make it into a sugary drink. The idea is that it becomes so thick that it lingers on the tongue for hours.").addClass('popIn-info');
		$("#popIn").addClass("spot_text");
	});

	$('#hotspot_candy').click(function () {
		showInfo();
		$('#popIn').text("Candy, such as Jolly Ranchers, are added to dilute the taste of the syrup, and to add flavor. The grape candy is what gives the distinctive color that lends it the name 'purple drank.'").addClass('popIn-info');
		$("#popIn").addClass("spot_text");
	});

	$('#hotspot_cup').click(function () {
		showInfo();
		$('#popIn').text("The styrofoam cup is the iconic container for lean, making it a 'party' drink. Two cups are often used as a sign that it contains lean – so drinking it has come to be known as 'double-cupping.'").addClass('popIn-info');
		$("#popIn").addClass("spot_text");
	});

	/*close info window*/

	$('#X1-close').click(function () {
		$('#X1-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.hotspot').removeClass('hide_btn'); /*show circles*/

	}); /*closes function for photo 1*/

	/*Start functions for photo2*/

	var showInfo2 = function () {
		$('.arrow').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X2-close').addClass('btn_close_show');
		$('#slide2').addClass('info_slides_show');
	}


	$('#hotspot_arrowup1').click(function () {
		showInfo2();
		$('#popIn2').text("In the 1950s, blues musicians in Houston started drinking Robitussin mixed with beer. Later on, they'd mix it with wine coolers.").addClass('info_popIn');
	});



	$('#hotspot_arrowup2').click(function () {
		showInfo2();
		$('#popIn2').text("In the '80s and '90s, people switched from over-the-counter Robitussin to codeine and promethazine syrup. It became associated with hip hop musicians, who grew up in the same Houston neighborhoods as the bluesmen.").addClass('info_popIn');
	});

	$('#hotspot_arrowup3').click(function () {
		showInfo2();
		$('#popIn2').text("In the '90s, a musician known as DJ Screw produced slow records, a genre that became known as 'Chopped and Screwed.' It was a perfect complement to the hot Houston weather, driving in traffic jams, and sipping on lean, a sedative that slows the body down.").addClass('info_popIn');
	});

	$('#hotspot_arrowdown1').click(function () {
		showInfo2();
		$('#popIn2').text("Lean spread to the rest of the South, and infused hip hop culture. In 2000, DJ Screw died at 29, likely from the drug. By this time, lean had been mentioned in rap records from Three6Mafia, Jay-Z and others.").addClass('info_popIn');
	});

	$('#hotspot_arrowdown2').click(function () {
		showInfo2();
		$('#popIn2').text("In 2013, Lil' Wayne, one of the most popular rap artists ever, was hospitalized because of seizures. Wayne is known for his raspy voice that is said to have developed from lean consumption.").addClass('info_popIn');
	});

	$('#hotspot_arrowdown3').click(function () {
		showInfo2();
		$('#popIn2').text("The biggest manufacturer of codeine syrup, Actavis, stopped making it in 2014. Some of its bottles can be sold for up to $3,000 per pint on the black market. Artists such as Migos, Future and even Justin Bieber continued to take the drug.").addClass('info_popIn');
	});

	/*close info window*/

	$('#X2-close').click(function () {
		$('#X2-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide2').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.arrow').removeClass('hide_btn'); /*show circles*/

	});

	/*closes functions for photo2*/

});
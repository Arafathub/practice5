jQuery(document).ready(function($) {
    var welcomearea = $(".welcome-area");

    welcomearea.owlCarousel({
    	items: 1,
    	loop: true,
    	autoplay: true,
    	nav: false,
    	navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    });

    welcomearea.on('translate.owl.carousel', function(event) {
	    $(".welcome-text h2").removeClass("animated jello");
	    $(".welcome-text p").removeClass("animated jello");
	});

    welcomearea.on('translated.owl.carousel', function(event) {
	    $(".welcome-text h2").addClass("animated jello");
	    $(".welcome-text p").addClass("animated jello");
	});

	

});




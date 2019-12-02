// $(document).ready(function() {

	// $(window).on("load", function(){
	//     $('h1').addClass('animated fadeInDown');
	// });

// });

$(document).ready(function() {

	$(window).scroll( function(){

	    /* Check the location of each desired element */
	    $('.text-muted').each( function(i){

	        var bottom_of_object = $(this).position().top + $(this).outerHeight();
	        var bottom_of_window = $(window).scrollTop() + $(window).height();

	        /* If the object is completely visible in the window, fade it it */
	        if( bottom_of_window > bottom_of_object ){

	            $(".mt-5").addClass('animated fadeInLeft delay-0.8s');

	        }    
	    }); 
	}); 

});
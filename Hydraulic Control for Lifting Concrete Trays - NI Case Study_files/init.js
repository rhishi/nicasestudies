$(document).ready(function(){

           $('.flexslider').flexslider({
			animation: "slide",
			slideshow: true,
			slideshowSpeed: 7000,
			animationSpeed: 600,
   			itemWidth: 210,
			maxItems: 1,   
			prevText: 'Prev',
			nextText: 'Next',
			controlsContainer: $('.flexslider-controls-box'),
			 start: function(slider) {
				
				 $( '<li class="flex-counter"><span class="counter"><span class="current-slide"></span>/<span class="total-slides"></span></span></li>').insertAfter($( '.flex-direction-nav li' ).first());
				 
				 $('.current-slide').text(slider.currentSlide+1);
				 
				 $('.total-slides').text(slider.count);
          },
          after: function(slider) {
            $('.current-slide').text(slider.currentSlide+1);
          }
			});
		   
		   $(".slides li:not(.clone) a[rel^='prettyPhoto']").prettyPhoto({
						animation_speed: 'normal',
						autoplay_slideshow: false,
						slideshow: 3000
					});

});
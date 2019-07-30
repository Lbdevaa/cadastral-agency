$(function() {

	// create carousel main-page 
		$(".main-carousel").owlCarousel({
			items: 1,
			startPosition: 1,
			nav: true,
			touchDrag: false,
			dots: true,
			mouseDrag: false, 
			margin: 40,
			stagePadding: 360,
			loop: true
		}); 

	// open gallery
	$('.popup-gallery').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',  
		tLoading: 'Loading image #%curr%...',
		// mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Изображение #%curr%</a> недоступно.',
			
		}
	  });

});

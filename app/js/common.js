$(function() {

	// create carousel main-page 
	$(".main-carousel").owlCarousel({
			items: 1,
			startPosition: 2,
			nav: true,
			touchDrag: false,
			dots: true,
			mouseDrag: false, 
			// smartSpeed: 10,
			loop: true,
			navText: ['<img src="../img/left-arrow.svg">','<img src="../img/right-arrow.svg">'],
			responsive:{
				0:{
					stagePadding: 260,
					margin: 20, 
				},
				1367:{
					stagePadding: 360,
					margin: 40, 
				}
			}
		}); 

	// open gallery and slide
 
	$('.popup-gallery').magnificPopup({
		type: 'image',
		delegate: 'a',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			verticalFit: true,
			navigateByImgClick: true 
	 	}    
	});


	function callback(event) {
		$('.whats .numOf').html('0' + (event.item.count));
	} 
 
	if(document.querySelector('.main-carousel__bg')){
	function setMainOwlHeight() {
		var owlSlideItem = document.querySelectorAll('.main-carousel__bg');
		var slideHeight = 500;
		var activeSlideHeight = 640;
		if (window.innerWidth < 1400) {
			slideHeight = 450
			activeSlideHeight = 580
		}

		for(var i = 0; i < owlSlideItem.length; i++){  
			// owlSlideItem[i].style.animationDuration = "3s";
			owlSlideItem[i].style.height = slideHeight + 'px';
			owlSlideItem[i].style.margin = "50px 0 0 0";  
			
		} 
		var activeOwlSlideItem = document.querySelector('.owl-item.active .main-carousel__bg'); 
		// activeOwlSlideItem.style.animationDuration = "3s";
		activeOwlSlideItem.style.height = activeSlideHeight + 'px';
		activeOwlSlideItem.style.margin = 0; 
	};setMainOwlHeight();

	$('.main-carousel').on('translated.owl.carousel', setMainOwlHeight);
	}

	// open popup call
	
	$('.open-popup').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

});

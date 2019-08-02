$(function() {

	// create carousel main-page 
	$(".main-carousel").owlCarousel({
			items: 1,
			startPosition: 2,
			nav: true,
			touchDrag: false,
			dots: true,
			mouseDrag: false, 
			
			loop: true,
			navText: ['<img src="../img/left-arrow.svg">','<img src="../img/right-arrow.svg">'],
			responsive:{
				0:{
					stagePadding: 	260,
					margin: 20, 
				},
				1367:{
					stagePadding: 360,
					margin: 40, 
				}
			}
		}); 

	// open gallery
	// $('.popup-gallery').magnificPopup({
	// 	delegate: 'a', // child items selector, by clicking on it popup will open
	// 	type: 'image',  
	// 	tLoading: 'Loading image #%curr%...',
	// 	// mainClass: 'mfp-img-mobile',
	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	// 	},
	// 	image: {
	// 		tError: '<a href="%url%">Изображение #%curr%</a> недоступно.',
			
	// 	}
	//   });
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
			owlSlideItem[i].style.height = slideHeight + 'px';
			owlSlideItem[i].style.margin = "50px 0 0 0"; 
		} 
		var activeOwlSlideItem = document.querySelector('.owl-item.active .main-carousel__bg');
		activeOwlSlideItem.style.height = activeSlideHeight + 'px';
		activeOwlSlideItem.style.margin = 0;
	};setMainOwlHeight();

	$('.main-carousel').on('translated.owl.carousel', setMainOwlHeight);
	}
});

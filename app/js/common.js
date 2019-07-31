$(function() {

	// create carousel main-page 
	$(".main-carousel").owlCarousel({
			items: 1,
			startPosition: 2,
			nav: true,
			touchDrag: false,
			dots: true,
			mouseDrag: false, 
			margin: 40,
			stagePadding: 360,
			loop: true,
			navText: ['<img src="../img/left-arrow.svg">','<img src="../img/right-arrow.svg">'],
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

// 	$('.main-carousel').on('translated.owl.carousel', function(event) {
// 		$('.owl-item.active').each(function(index){
// 			if(index == 0 || index == 2){ 
// 			} else if(index == 1){
// 				$(this).find('.main-carousel__bg').css({'height': '620px', 'margin-top': '10px'});
// 			}
// 		});
// 		if((event.item.index - 2) == 0){
// 			$('.whats #num_123456').html('0' + (event.item.count));	
// 		} else {
// 			$('.whats #num_123456').html('0' + (event.item.index - 2));	
// 		};	 
// 	});
// // перескок
// 	$('.main-carousel').on('drag.owl.carousel', function(event) {
// 		$('.owl-item').each(function(index){
// 			$(this).find('.main-carousel__bg').css({'height': '540px', 'margin-top': '30px'});
// 		});		
// 	});
// // переход по стрелке - высота всех блоков
// 	$('.main-carousel').on('translate.owl.carousel', function(event) {
// 		$('.owl-item').each(function(index){
// 			$(this).find('.main-carousel__bg').css({'height': '620px', 'margin-top': '30px'});
// 		});	
// 		// console.log(10)
// 	});
// активный элемент

	if(document.querySelector('.main-carousel__bg')){
	function setMainOwlHeight() {
		var owlSlideItem = document.querySelectorAll('.main-carousel__bg');
		for(var i = 0; i < owlSlideItem.length; i++){
			owlSlideItem[i].style.height = 500 + 'px';
			owlSlideItem[i].style.margin = "50px 0 0 0";
			// owlSlideItem[i].style.boxShadow = "inset 0px 4px 4px rgba(0, 0, 0, 0.25)";
		}
		// console.log(document.querySelector('.owl-item.active'));
		var activeOwlSlideItem = document.querySelector('.owl-item.active .main-carousel__bg');
		activeOwlSlideItem.style.height = 640 + 'px';
		activeOwlSlideItem.style.margin = 0;
	};setMainOwlHeight();

	$('.main-carousel').on('translated.owl.carousel', setMainOwlHeight);
	}
});

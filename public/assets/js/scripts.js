	// Owl Carousel Js

	$('#discover-col').owlCarousel({
		loop:true,
		margin:5,
		dots: false,
		nav: true,
		navText: ["<img src='assets/images/arrow2.png'>","<img src='assets/images/arrow1.png'>"],             
		autoplay:false,
		smartSpeed:2000,
		autoplayTimeout:3000,
		responsive:{
			0:{
			items:1
			},
			480:{
			items:2
			},
			767:{
			items:3
			},
			1024:{
			items:4
			}
		}
	}); 



$(document).ready(function () {
	$('#finding_srvc_img_scrl').owlCarousel({
		loop:true,
		margin:10,
		
		autoplay:true,
		smartSpeed:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
			items:1
			},
			480:{
			items:2
			},
			767:{
			items:3
			},
			1024:{
			items:3
			}
		}
	});

});

$('#owl-demo').owlCarousel({
	singleItem:true,
	margin:0,
	loop:true,          
	nav: false,
	dots: true,
	items:1,
	animateOut: 'fadeOut',  
	autoplay:true,              
	}); 
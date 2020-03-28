jQuery(document).ready(function($) {

	$('.slick-prev, .slick-next').appendTo('.identity-projects .controls');

	$(function() {
		var header = $("header");
		$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= 100) {
					$('.menu__toggler').css({
							margin: '-5rem 0 0 0'
					});
				} else {
						$('.menu__toggler').css({
								margin: '-2.3rem 0 0 0'
						});
				}
		});
	});


	// var slidesPerPage = 6
	//
	// $(".slick").on("init", function(event, slick){
	//    maxPages = Math.ceil(slick.slideCount/slidesPerPage);
	//    $(this).find('.slider-paging-number li').append('/ '+maxPages);
	// });
	//
	// $(".slick").slick({
	//    slidesToShow: slidesPerPage,
	//    slidesToScroll: slidesPerPage,
	//    arrows: false,
	//    autoplay: true,
	//    dots: true,
	//    infinite: true,
	//    dotsClass: 'slider-paging-number'
	// });


});

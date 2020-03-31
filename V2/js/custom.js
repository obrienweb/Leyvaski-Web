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

});

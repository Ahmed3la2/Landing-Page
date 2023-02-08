/* global $, window, AOS */

$(function () {

	'use strict';

	// set library

	AOS.init({

		duration: 1200
	});


	$('.fit').fitText(1.6)



	$('.features-work ul li').on('click', function () {

		$(this).addClass('active').siblings().removeClass('active');

		if ($(this).data('class') == '.all') {

			$('.shuffle-img .col-sm-6').css({
				opacity: 1
			})

		} else {

			$('.shuffle-img .col-sm-6').css({
				opacity: 0.09
			})

			$($(this).data('class')).parent().css({
				opacity: 1
			})

		}
	})
	
	
});

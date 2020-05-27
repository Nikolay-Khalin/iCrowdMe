$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

$('.tabs__item').click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.tabs__body[data-tab="' + id + '"]');

	$('.tabs__item.active').removeClass('active');
	$(this).addClass('active');

	$('.tabs__body.active').removeClass('active');
	content.addClass('active');
});


// $(document).ready(function () {
// 	$('.projects__items').slick({
// 		arrows: false,
// 		dots: false,
// 		centerMode: false,
// 		centerPadding: '0px',
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		infinite: false,
// 		autoplay: false,
// 		variableWidth: true
// 	});
// });


/* Slick needs no get Reinitialized on window Resize after it was destroyed */
$(window).on('load resize orientationchange', function () {
	$('.projects__items').each(function () {
		var $projects__items = $(this);
		/* Initializes a slick carousel only on mobile screens */
		// slick on mobile
		if ($(window).width() > 768) {
			if ($projects__items.hasClass('slick-initialized')) {
				$projects__items.slick('unslick');
			}
		}
		else {
			if (!$projects__items.hasClass('slick-initialized')) {
				$projects__items.slick({
					arrows: false,
					dots: false,
					centerMode: false,
					centerPadding: '0px',
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					autoplay: false,
					variableWidth: true,
					mobileFirst: true
				});
			}
		}
	});
});


// $(window).on('resize', function (e) {
// 	// Переменная, по которой узнаем запущен слайдер или нет.
// 	// Храним её в data
// 	var init = $(".projects__items").data('init-slider');
// 	// Если мобильный
// 	if (window.innerWidth < 769) {
// 		// Если слайдер не запущен
// 		if (init != 1) {
// 			// Запускаем слайдер и записываем в data init-slider = 1
// 			$('.projects__items').slick({
// 				arrows: false,
// 				dots: false,
// 				centerMode: false,
// 				centerPadding: '0px',
// 				slidesToShow: 2,
// 				slidesToScroll: 1,
// 				infinite: false,
// 				autoplay: false,
// 				variableWidth: true
// 			}).data({ 'init-slider': 1 });
// 		}
// 	}
// 	// Если десктоп
// 	else {
// 		// Если слайдер запущен
// 		if (init == 1) {
// 			// Разрушаем слайдер и записываем в data init-slider = 0
// 			$('.projects__items').slick('unslick').data({ 'init-slider': 0 });
// 		}
// 	}
// }).trigger('resize');
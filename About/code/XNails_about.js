$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function ibg() {
let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}
ibg();

$(document).ready(function () {
	$('.slider-block__slider').slick({
		arrows: true,
		dots: true,
		prevArrow: '.slider-block__arrow-l',
		nextArrow: '.slider-block__arrow-r',
		slidesToShow: 4,
		slidesToScroll: 2,
		easing: 'ease',
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 1360,
			settings: {
				slidesToScroll: 1,
				arrows: false,
			}
		},{
			breakpoint: 1220,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
			}
		}, {
			breakpoint: 920,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		}]
	});
});
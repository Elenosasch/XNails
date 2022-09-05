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
	$('.reviews__slider').slick({
		arrows: true,
		dots: false,
		prevArrow: '.reviews__arrow-l',
		nextArrow: '.reviews__arrow-r',
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'ease',
		adaptiveHeight: true,
	});
})
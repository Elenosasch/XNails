$(document).ready(function () {
	$('.header__link').on('click', function (e) {
		e.preventDefault();

		showSection($(this).attr('href'), true);
	});

	showSection(window.location.hash, false);
});

$(window).scroll(function () {
	checkSection();
});

function showSection(section, isAnimate) {
	var
		direction = section.replace(/#/, ''),
		reqSection = $('.section').filter('[data-section="' + direction + '"]'),
		reqSectionPos = reqSection.offset().top;
	
	if (isAnimate) {
		$('body, html').animate({ scrollTop: reqSectionPos }, 500);
	} else {
		$('body, html').scrollTop(reqSectionPos);
	}
}

function checkSection() {
	$('.section').each(function () {
		var
			$this = $(this),
			topEdge = $this.offset().top,
			bottomEdge = topEdge + $this.height(),
			wScroll = $(window).scrollTop();
		
		if (topEdge < wScroll && bottomEdge > wScroll) {
			var
				currentId = $this.data('section');
				reqLink = $('.header__link').filter('[href="#' + currentId + '"]');
			
			reqLink.closest('.header__link').addClass('active')
				.siblings().removeClass('active');
			
			window.location.hash = currentId;
		}
	});
}

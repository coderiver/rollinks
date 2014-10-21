head.ready(function() {
	//mob-nav
	$('.mob-nav').on('click', function() {
		$(this).parent('.header__inner').find('.nav').toggleClass('is-open');
		$(this).toggleClass('fa-bars');
		$(this).toggleClass('fa-times');
	});
	$('.nav__link').on('click', function() {
		$(this).parent('.nav__item').find('.nav__drop').toggleClass('is-show');
		$(this).toggleClass('is-act');
		return false;
	});
	$('.nav__item').mouseleave(function() {
	}, function() {
		$(this).find('.nav__drop').removeClass('is-show');
		$(this).find('.nav__link').removeClass('is-act');
	});
	//popup
	$('.safari-link').on('click', function() {
		/* Act on the event */
		$(this).parents('.safari').find('.safari__popup').addClass('is-open')
		return false;
	});
	$('.close').on('click', function() {
		/* Act on the event */
		$(this).parents('.safari').find('.safari__popup').removeClass('is-open')
		return false;
	});
});
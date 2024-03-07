// MAIN VISUAL SLIDE
let $mainVisual = $('.main_visual_body');

(function mainSlide(){
	let parents = $mainVisual;
	let slide = parents.find('.main_visual_items');
	let prev = parents.find('.board__arrow__prev');
	let next = parents.find('.board__arrow__next');
	let pause = $mainVisual.find('.btn_slide_pause');
	let play = $mainVisual.find('.btn_slide_play');
	
	slide.slick({
		infinite: true,
		autoplay: true, // 심사 중 true 금지
		fade: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: prev,
		nextArrow: next,
		playText: '재생',
		pauseText: '정지',
		dots: true,
		dotsClass: 'slick-dots',
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		accessibility: true,
		focusOnChange: true,
		focusOnSelect: true,
	});

	slide.find('.slick-slide').on('keydown', function(e) {
		if(e.keyCode == 37) {
			slide.slick('slickPrev').find('.slick-active a').focus();
		}
		if(e.keyCode == 39) {
			slide.slick('slickNext').find('.slick-active a').focus();
		}
	});

	// PLAY AND PAUSE
	play.click(function () {
		slide.slick('slickPlay');
		play.hide();
		pause.show();
	});
	pause.click(function () {
		slide.slick('slickPause');
		pause.hide();
		play.show();
	});
})();
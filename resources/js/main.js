// MAIN VISUAL SLIDE
(function mainSlide(){
	let parents = $('.main_visual_body');
	let slide = parents.find('.main_visual_items');
	let prev = parents.find('.board__arrow__prev');
	let next = parents.find('.board__arrow__next');
	let pause = parents.find('.btn_slide_pause');
	let play = parents.find('.btn_slide_play');
	
	slide.slick({
		infinite: true,
		autoplay: true,
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

// MAIN QUICKMENU SLIDE
(function quickSlide(){
	let parents = $('.main_quickmenu');
	let slide = parents.find('.quickmenu_items');
	let prev = parents.find('.btn_slide_prev');
	let next = parents.find('.btn_slide_next');
	
	slide.slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 6,
		prevArrow: prev,
		nextArrow: next,
		dots: false,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		accessibility: true,
		focusOnChange: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 721, // max 720
				settings: { slidesToShow: 4 },
			},
			{
				breakpoint: 641, // max 640
				settings: { slidesToShow: 3 },
			},
			{
				breakpoint: 481, // max 480
				settings: { slidesToShow: 2 },
			},
			{
				breakpoint: 321, // max 320
				settings: { slidesToShow: 1 },
			},
		],
	});
})();

// MAIN EVENT SLIDE
(function eventSlide(){
	let parents = $('.main_event');
	let slide = parents.find('.event_items');
	let prev = parents.find('.board__arrow__prev');
	let next = parents.find('.board__arrow__next');
	
	slide.slick({
		infinite: false,
		autoplay: false,
		slidesToShow: 3,
		prevArrow: prev,
		nextArrow: next,
		dots: false,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		accessibility: true,
		focusOnChange: true,
		focusOnSelect: true,
    variableWidth: true,
		responsive: [
			{
				breakpoint: 721, // max 720
				settings: {
          slidesToShow: 1,
          variableWidth: false,
					dots: true,
					dotsClass: 'slick-dots',
				},
			},
		],
	});
})();

// MAIN EVENT .blind
const eventMoreBtn = $(".main_event .event_item .btn_more span");
if($(window).width() < 721){
	eventMoreBtn.attr('class','');
}
else {
	eventMoreBtn.attr('class','blind');
}
$(window).resize(function (){
	$(window).width() < 721 ? eventMoreBtn.attr('class','') : eventMoreBtn.attr('class','blind');
});

// MAIN EVENT TAB BUTTON
(function eventTab(){
	const label = document.querySelector('.event_tab_label');
	const tabButton = document.querySelectorAll('.event_tab_button');
	const tabCon = document.querySelectorAll('.event_tabcon');

	const handleSelect = function(item) {
		label.innerHTML = item.textContent;
		label.parentNode.classList.remove('active');
	}

	tabButton.forEach(function(option, index){
		option.addEventListener('click', function(){
			handleSelect(option);
			tabButton.forEach(function(option){
				option.classList.remove("active");
			});
			tabCon.forEach(function(content){
				content.classList.remove("active");
			});
			tabButton[index].classList.add("active");
			tabCon[index].classList.add("active");
		});
	})

	label.addEventListener('click', function(){
		if(label.parentNode.classList.contains('active')) {
			label.parentNode.classList.remove('active');
		} else {
			label.parentNode.classList.add('active');
		}
	});

})();

// MAIN EXHIBIT SLIDE
(function exhibitSlide(){
	let parents = $('.main_exhibit');
	let slide = parents.find('.exhibit_items');
	let prev = parents.find('.board__arrow__prev');
	let next = parents.find('.board__arrow__next');
	
	slide.slick({
		infinite: false,
		autoplay: false,
		fade: true,
		slidesToShow: 1,
		prevArrow: prev,
		nextArrow: next,
		dots: true,
		dotsClass: 'slick-dots',
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		accessibility: true,
		focusOnChange: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 721, // max 720
				settings: {
					dots: false,
				},
			},
		],
	});
})();

// MAIN BANNER SLIDE
(function multiBannerSlide(){
	let parents = $('.banner_items_multi_wrap');
	let slide = parents.find('.banner_items_multi');
	let prev = parents.find('.btn_slide_prev');
	let next = parents.find('.btn_slide_next');
	let pause = parents.find('.btn_slide_pause');
	let play = parents.find('.btn_slide_play');
	
	slide.slick({
		infinite: false,
		autoplay: true,
		speed: 800,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: prev,
		nextArrow: next,
		playText: '재생',
		pauseText: '정지',
		dots: false,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		accessibility: true,
		focusOnChange: true,
		focusOnSelect: true,
    variableWidth: true,
		responsive: [
			{
				breakpoint: 1199, // max 768
				settings: {
					slidesToShow: 4, 
					// variableWidth: false,
				},
			},
			// {
			// 	breakpoint: 641, // max 640
			// 	settings: { slidesToShow: 3 },
			// },
			// {
			// 	breakpoint: 481, // max 414
			// 	settings: { slidesToShow: 2 },
			// },
		],
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

(function UniBannerSlide(){
	let parents = $('.banner_items_uni_wrap');
	let slide = parents.find('.banner_items_uni');
	let prev = parents.find('.btn_slide_prev');
	let next = parents.find('.btn_slide_next');
	
	slide.slick({
		infinite: false,
		autoplay: false,
		slidesToShow: 1,
		prevArrow: prev,
		nextArrow: next,
		dots: false,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		accessibility: true,
		focusOnChange: true,
		focusOnSelect: true,
	});
})();
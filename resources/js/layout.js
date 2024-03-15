'use strict';

const header = document.querySelector('.header');
const headerNav = document.querySelector('.header .header_navbar .lnb');

headerNav.addEventListener('mouseover', () => {
  header.classList.add('open');
});

headerNav.addEventListener('mouseleave', () => {
  header.classList.remove('open');
});

$(document).ready(function () {
  // 전체메뉴 클래스명 추가/삭제 및 웹접근성 속성 추가
  $('.header_navbar > ul li').on('click', function () {
    if ($(this).find('a').hasClass('active')) {
      // 클릭
      $(this).find('a').addClass('active');
      $(this).find('a').attr('title', '선택됨');
    } else {
      // 클릭하지 않은 요소 리셋
      $(this).siblings().find('a').removeClass('active');
      $(this).siblings().find('a').attr('title', '');
      // 클릭
      $(this).find('a').addClass('active');
      $(this).find('a').attr('title', '선택됨');
    }
  });
});

pathLinkBtn(); // 상단 페이지경로 링크, 형제 중 하나만 슬라이드 업다운

function pathLinkBtn(){
	let btn = $('.path__depth1 > a');
	let DEPTHS_CLASSNAME = '.path__depth2';
	let ACTIVE_CLASSNAME = 'active';
	
	btn.on('click', function () {
		if ($(this).hasClass(ACTIVE_CLASSNAME)) {
			$(this).removeClass(ACTIVE_CLASSNAME);
			$(this).siblings(DEPTHS_CLASSNAME).stop().slideUp();
		} else {
			btn.removeClass(ACTIVE_CLASSNAME);
			btn.siblings(DEPTHS_CLASSNAME).stop().slideUp();
			$(this).addClass(ACTIVE_CLASSNAME);
			$(this).siblings(DEPTHS_CLASSNAME).stop().slideDown();
		}
	});
}
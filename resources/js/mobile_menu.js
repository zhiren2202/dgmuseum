'use strict';

const btnMobile = document.querySelector('.btn_mobilemenu');
const mobileMenu = document.querySelector('.mobile_menu');
const mobileMenuShadow = document.querySelector('.mobile_menu_shadow');

btnMobile.addEventListener('click', () => {
  btnMobile.classList.toggle('close');
  mobileMenu.classList.toggle('open');
  mobileMenuShadow.classList.toggle('active');
});

function toggleMobileMenu() {
  const clickedItem = this.parentNode;
  const items = mobileMenu.querySelectorAll('.menu_item');

  items.forEach((item) => {
    if (clickedItem === item) {
      item.classList.add('on');
      item.setAttribute('title','선택됨');
    } else {
      item.classList.remove('on');
      item.setAttribute('title','');
    }
  });
}

const titles = mobileMenu.querySelectorAll('.menu__depth1');
titles.forEach((title) => {
  title.addEventListener('click', toggleMobileMenu);
});

$(document).ready(function () {
	// 전체메뉴 클래스명 추가/삭제 및 웹접근성 속성 추가
	$('.menu_item ul li a').on('click', function () {
		if ($(this).hasClass('active')) {
			// 클릭
			$(this).addClass('active');
			$(this).attr('title', '선택됨');
		} else {
			// 클릭하지 않은 요소 리셋
			$(this).closest('li').siblings().find('a').removeClass('active');
			$(this).closest('li').siblings().find('a').attr('title', '');

			// 클릭
			$(this).addClass('active');
			$(this).attr('title', '선택됨');
		}
	});
});
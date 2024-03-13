const header = document.querySelector('.header');
const headerNav = document.querySelector('.header .header_navbar .lnb');

// document.addEventListener('scroll', () => { // 스크롤할 경우 헤드 스타일 변경
//   (window.scrollY > 1) ? header.classList.add('header--fixed') : header.classList.remove('header--fixed');
// });

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
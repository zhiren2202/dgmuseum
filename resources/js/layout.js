let headerbar = document.querySelector('.header');

// document.addEventListener('scroll', () => { // 스크롤할 경우 헤드 스타일 변경
//   (window.scrollY > 1) ? headerbar.classList.add('header--fixed') : headerbar.classList.remove('header--fixed');
// });

headerbar.addEventListener('mouseover', () => {
  headerbar.classList.add('open');
});

headerbar.addEventListener('mouseleave', () => {
  headerbar.classList.remove('open');
});
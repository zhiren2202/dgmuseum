let header = document.querySelector('.header');

// document.addEventListener('scroll', () => { // 스크롤할 경우 헤드 스타일 변경
//   (window.scrollY > 1) ? header.classList.add('header--fixed') : header.classList.remove('header--fixed');
// });

header.addEventListener('mouseover', () => {
  header.classList.add('open');
});

header.addEventListener('mouseleave', () => {
  header.classList.remove('open');
});
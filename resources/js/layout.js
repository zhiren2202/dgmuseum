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

const btnMobile = document.querySelector('.btn_mobilemenu');
const mobileMenu = document.querySelector(".mobile_menu");
btnMobile.addEventListener('click', () => {
  btnMobile.classList.toggle('close');
  mobileMenu.classList.toggle('open');
});

function toggleMobileMenu() {
  const clickedItem = this.parentNode;
  const items = mobileMenu.querySelectorAll(".menu_item");

  items.forEach((item) => {
    if (clickedItem === item) {
      item.classList.add("on");
    } else {
      item.classList.remove("on");
    }
  });
}

const titles = mobileMenu.querySelectorAll(".menu__depth1");
titles.forEach((title) => {
  title.addEventListener("click", toggleMobileMenu);
});
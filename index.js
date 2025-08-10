const headerNav = document.querySelector(".header__nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const body = document.querySelector("body");
const menuEvent = () => {
  headerNav.classList.toggle("header__nav-visible");
  menuIcon.classList.toggle("menu-hidden");
  closeIcon.classList.toggle("close-icon-visible");
  body.classList.toggle("body--no-scroll");
};
document.querySelector(".menu-icon").addEventListener("click", menuEvent);
document.querySelector(".close-icon").addEventListener("click", menuEvent);

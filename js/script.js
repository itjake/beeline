(function () {
  const header = document.querySelector(".header__wrapper");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header-fixed");
    } else {
      header.classList.remove("header-fixed");
    }
  };
})();

(function () {
  const burgerMenu = document.querySelector(".burger-menu__btn");
  const burgerHidden = document.querySelector(".burger-hidden-menu");
  const burgerClose = document.querySelector(".burger-hidden__btn-close");
  burgerMenu.addEventListener("click", () => {
    burgerHidden.classList.add("show-burger");
  });
  burgerClose.addEventListener("click", () => {
    console.log("qwerty");
    burgerHidden.classList.remove("show-burger");
  });
})();

(function () {
  const beeline = document.querySelector(".beeline-dropdown");
  const beelineList = document.querySelector(".burger-beeline__list");
  const arrow = document.querySelector(".beeline-arrow");
  const beelineTwo = document.querySelector(".beeline-dropdown__two");
  const beelineListTwo = document.querySelector(".burger-beeline__list__two");
  const arrowTwo = document.querySelector(".beeline-arrow__two");
  beeline.addEventListener("click", () => {
    beelineList.classList.toggle("burger-beeline__list__active");
    arrow.classList.toggle("beeline-arrow__active");
  });
  beelineTwo.addEventListener("click", () => {
    beelineListTwo.classList.toggle("burger-beeline__list__active");
    arrowTwo.classList.toggle("beeline-arrow__active");
  });
})();

(function () {
  const footerTitleFace = document.getElementById(
    "#footer-list__item__title__face"
  );
  const footerTitlebusiness = document.getElementById(
    "#footer-list__item__title__business"
  );
  const footerTitleCompany = document.getElementById(
    "#footer-list__item__title__company"
  );
  const footerTitleSupport = document.getElementById(
    "#footer-list__item__title__support"
  );
  const footerListSupport = document.getElementById("#footer-list__support");
  const footerListbusiness = document.getElementById("#footer-list__support");
  const footerListSupport = document.getElementById("#footer-list__support");
  const footerListSupport = document.getElementById("#footer-list__support");
  burgerMenu.addEventListener("click", () => {
    burgerHidden.classList.add("show-burger");
  });
  burgerClose.addEventListener("click", () => {
    console.log("qwerty");
    burgerHidden.classList.remove("show-burger");
  });
})();

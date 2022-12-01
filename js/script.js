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
    "footer-list__item__title__face"
  );
  const footerTitlebusiness = document.getElementById(
    "footer-list__item__title__business"
  );
  const footerTitleCompany = document.getElementById(
    "footer-list__item__title__company"
  );
  const footerTitleSupport = document.getElementById(
    "footer-list__item__title__support"
  );

  const footerListFace = document.getElementById("footer-list__face");
  const footerListbusiness = document.getElementById("footer-list__business");
  const footerListCompany = document.getElementById("footer-list__company");
  const footerListSupport = document.getElementById("footer-list__support");

  const footerArrowFace = document.getElementById("footer-arrow__face");
  const footerArrowBusiness = document.getElementById("footer-arrow__business");
  const footerArrowCompany = document.getElementById("footer-arrow__company");
  const footerArrowSupport = document.getElementById("footer-arrow__support");

  const footerLineFace = document.getElementById("footer-line__face");
  const footerLineBusiness = document.getElementById("footer-line__business");
  const footerLineCompany = document.getElementById("footer-line__company");
  const footerLineSupport = document.getElementById("footer-line__support");

  footerTitleFace.addEventListener("click", () => {
    footerListFace.classList.toggle("footer-list__active");
    footerArrowFace.classList.toggle("footer-arrow__active");
    footerTitleFace.classList.toggle("footer-list__line__active");
    footerLineFace.classList.toggle("footer-line");
  });
  footerTitlebusiness.addEventListener("click", () => {
    footerListbusiness.classList.toggle("footer-list__active");
    footerArrowBusiness.classList.toggle("footer-arrow__active");
    footerTitlebusiness.classList.toggle("footer-list__line__active");
    footerLineBusiness.classList.toggle("footer-line");
  });
  footerTitleCompany.addEventListener("click", () => {
    footerListCompany.classList.toggle("footer-list__active");
    footerArrowCompany.classList.toggle("footer-arrow__active");
    footerTitleCompany.classList.toggle("footer-list__line__active");
    footerLineCompany.classList.toggle("footer-line");
  });
  footerTitleSupport.addEventListener("click", () => {
    footerListSupport.classList.toggle("footer-list__active");
    footerArrowSupport.classList.toggle("footer-arrow__active");
    footerTitleSupport.classList.toggle("footer-list__line__active");
    footerLineSupport.classList.toggle("footer-line");
  });
})();

(function () {
  const message = document.getElementById("message");
  const whatsapp = document.getElementById("whatsapp");
  const messageAll = document.getElementById("message-all");
  const messageClose = document.getElementById("message-close");
  message.addEventListener("click", () => {
    whatsapp.classList.toggle("whatsapp-active");
    messageClose.classList.toggle("message-close__active");
    messageAll.classList.toggle("message-all__active");
  });
})();

(function () {
  const connect = document.getElementsById("connect");
  const video = document.getElementById("video");

  console.log(connect);
  console.log(video);
})();

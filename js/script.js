//header-fixed handle

(function () {
  const header = document.querySelector(".header");
  const container = document.querySelector(".container");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header-fixed");
      container.classList.add("container-fixed");
    } else {
      header.classList.remove("header-fixed");
    }
  };
})()(
  //Burger handler
  (function () {
    const burgerItem = document.querySelector(".burger");
    const menu = document.querySelector(".header-close");
    const menuCloseItem = document.querySelector(".header-nav__close");
    burgerItem.addEventListener("click", () => {
      menu.classList.add("header-close__active");
      menuCloseItem.classList.add("header-nav__close__active");
    });
    menuCloseItem.addEventListener("click", () => {
      menu.classList.remove("header-close__active");
      menuCloseItem.classList.remove("header-nav__close__active");
    });
  })()
);

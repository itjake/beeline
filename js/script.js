(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-content');
    const menuCloseItem = document.querySelector('.header-nav__close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__menu__active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__menu__active');
    });
}());
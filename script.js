
/********** scroll **********/
(function () {
    const header = document.querySelector(".header__wrapper");
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add("header-fixed");
        } else {
            header.classList.remove("header-fixed");
        }
    }
})();

/************ burger hidden ***********/
(function () {
    const burgerMenu = document.querySelector(".burger-menu__btn");
    const burgerHidden = document.querySelector('.burger-hidden-menu');
    const burgerClose = document.querySelector('.burger-hidden__btn-close')
    burgerMenu.addEventListener('click', () => {
        burgerHidden.classList.add('show-burger');
    })
    burgerClose.addEventListener('click', () => {
        console.log('qwerty')
        burgerHidden.classList.remove('show-burger');
    })
})();


(function () {
    const section = document.querySelector("#section");
    const dot = document.querySelector(".dot");
    section.onclick = () => {
        if (section.pageXOffset > 10) {
            console.log('weryhjk')
            dot.classList.add("active");
        } else {
            // dot.classList.remove("active");
        }
    }
})();
(function () {
    const header = document.querySelector(".header");
    const container = document.querySelector(".container")
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add("header-fixed");
            container.classList.add("container-fixed");
        } else {
            header.classList.remove("header-fixed");
        }
    }
}())
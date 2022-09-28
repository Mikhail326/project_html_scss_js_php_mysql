const hamburger = document.querySelector('#menu-hamburger')
const nav = document.querySelector('.header')

const handleHamburger = () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
}


const swiper = new Swiper(".home__slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})

hamburger.addEventListener('click', handleHamburger)
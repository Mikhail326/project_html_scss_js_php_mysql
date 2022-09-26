const hamburger = document.querySelector('#menu-hamburger')
const nav = document.querySelector('.header')

const handleHamburger = () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
}

hamburger.addEventListener('click', handleHamburger)
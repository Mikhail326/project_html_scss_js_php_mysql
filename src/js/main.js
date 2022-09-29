const hamburger = document.querySelector('#menu-hamburger')
const nav = document.querySelector('.header')

const handleHamburger = () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
}


const swiperHome = new Swiper(".home__slider", {
    loop: true,
    autoplay: { delay: 2000},
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})

var swiperReviews = new Swiper(".reviews__slider", {
    loop: true,
    spaceBetween: 20,
    autoHeight: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

hamburger.addEventListener('click', handleHamburger)
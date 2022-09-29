const hamburger = document.querySelector('#menu-hamburger')
const nav = document.querySelector('.header')
const packages = document.querySelectorAll('.packages .box-container__item')
const btnShowPackages = document.querySelector('#show-packages')
let courent = 6;

const handleHamburger = () => {
  hamburger.classList.toggle('active')
  nav.classList.toggle('active')
}


const swiperHome = new Swiper(".home__slider", {
  loop: true,
  autoplay: { delay: 2000 },
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

const showPackages = () => {
  for (let i = courent; i < courent + 3; i++) {
    if(packages[i] === undefined) {
      btnShowPackages.style.display = 'none'
      break;
    }
    packages[i].style.display = 'inline-block'
   
  }
  courent += 3;
  if(packages.length <= courent) {
    btnShowPackages.style.display = 'none'
  }
}

hamburger.addEventListener('click', handleHamburger)
btnShowPackages.addEventListener('click', showPackages)
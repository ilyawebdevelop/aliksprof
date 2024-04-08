import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/fslightbox.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера introSlider
const introSlider = document.querySelector('.introSlider');
var mySwiperIntro = new Swiper(introSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: document.querySelector('.introSlider .navArrowNext'),
    prevEl: document.querySelector('.introSlider .navArrowPrev'),
  },
  pagination: {
    el: document.querySelector('.introSlider+.swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

// Инициализация слайдера productSlider
document.querySelectorAll('.productSlider').forEach(n => {
  const mySwiperProduct = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 23,
    speed: 600,  
    navigation: {
      prevEl: n.closest('.productSect').querySelector('.navArrowPrev'),
      nextEl: n.closest('.productSect').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,       
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,       
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,       
      },
    },
  });
});

// Инициализация слайдера banerSlider
const banerSlider = document.querySelector('.banerSlider');
var mySwiperBaner = new Swiper(banerSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: document.querySelector('.banerSlider .navArrowNext'),
    prevEl: document.querySelector('.banerSlider .navArrowPrev'),
  },
  pagination: {
    el: document.querySelector('.banerSlider+.swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

// Инициализация слайдера partnersSlider
const partnersSlider = document.querySelector('.partnersSlider');
var mySwiperPartners = new Swiper(partnersSlider, {
  slidesPerView: 'auto',
  speed: 800,
  spaceBetween: 70,  
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 'auto',
    },
  },
});

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavCloseBtn');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});

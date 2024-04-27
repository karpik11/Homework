'use strict';

(function () {

  // ============== БУРГЕР =======================================

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return


    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else document.body.classList.remove('body--opened-menu')
  }

  // ============== СЛАЙДЕР отзывы =======================================


  new Swiper('.testimonials__slider', {

    spaceBetween: 32,
    slidesPerView: 0.2,
    centeredSlides: true,
    slidesOffsetBefore: 250,


    scrollbar: {
      el: '.testimonials__scrollbar',
      draggable: true,
    },

    breakpoints: {

      401: {
        slidesPerView: 0.5,
        slidesOffsetBefore: 0,
      },
      601: {
        slidesPerView: 1,
        slidesOffsetBefore: -10,
      },
      1001: {
        slidesPerView: 1.5,
        slidesOffsetBefore: -130,
      },
      1301: {
        slidesPerView: 3,
        slidesOffsetBefore: -400,
      }
    }
  });


})()
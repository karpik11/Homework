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
    slidesPerView: 0.9,
    centeredSlides: false,

    scrollbar: {
      el: '.testimonials__scrollbar',
      draggable: true,
    },

    breakpoints: {

      440: {
        slidesPerView: 1.3,
      },
      540: {
        slidesPerView: 1.5,
      },
      720: {
        slidesPerView: 2,
      },
      901: {
        slidesPerView: 2.5,
      },

      1201: {
        slidesPerView: 2.7,
      },
      1301: {
        slidesPerView: 3,
      }
    }
  });

  // ============== АККОРДЕОН =======================================

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {

    document.addEventListener('DOMContentLoaded', function () {
      const thirdItem = document.querySelectorAll('.accordion-list__item')[2];
      if (thirdItem) {
        thirdItem.classList.add('accordion-list__item--opened');
        const content = thirdItem.querySelector('.accordion-list__content');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });

    el.addEventListener('click', (e) => {

      const accordionList = e.currentTarget
      const accordeonOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      const accordeonOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

      const accordeonControl = e.target.closest('.accordion-list__control');
      if (!accordeonControl) return
      e.preventDefault()
      const accordeonItem = accordeonControl.parentElement;
      const accordeonContent = accordeonControl.nextElementSibling;

      if (accordeonOpenedItem && accordeonItem != accordeonOpenedItem) {
        accordeonOpenedItem.classList.remove('accordion-list__item--opened');
        accordeonOpenedContent.style.maxHeight = null;
      }

      accordeonItem.classList.toggle('accordion-list__item--opened');

      if (accordeonItem.classList.contains('accordion-list__item--opened')) {
        accordeonContent.style.maxHeight = accordeonContent.scrollHeight + 'px';
      } else {
        accordeonContent.style.maxHeight = null;
      }


    })

  })

})()
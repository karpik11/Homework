'use strict';

(function () {

  // ============== БУРГЕР =======================================

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return

    // if (burgerIcon) {
    //   e.preventDefault()
    // }

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else document.body.classList.remove('body--opened-menu')


  }

  // ==========MODAL моё====================================================

  const btn = document.querySelector('.about__img-btn')
  const modal = document.querySelector('.modal')
  const body = document.body
  const cancel = document.querySelector('.modal__cancel')

  btn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.add('body--opened-modal')
  })

  const closeModal = () => {
    body.classList.remove('body--opened-modal')
  }

  document.addEventListener('click', (e) => {
    e.preventDefault()
    const target = e.target
    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
      closeModal()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeModal()
    }
  })


  // ========== ТАБЫ ====================================================

  const tabControls = document.querySelector('.tab-controls')

  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e) {

    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    if (activeControl) {
      activeControl.classList.remove('tab-controls__link--active')
    }
    if (activeContent) {
      activeContent.classList.remove('tab-content--show')
    }

    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')
  }

  // ========== АККОРДЕОН ====================================================

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {

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

  // ========== СЛАЙДЕР-галерея ====================================================

  new Swiper('.gallery__slider', {

    spaceBetween: 15,
    slidesPerView: 1.5,

    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    breakpoints: {
      601: {
        slidesPerView: 3,
      },
      801: {
        spaceBetween: 32,
      },
      1101: {
        slidesPerView: 4,
      }
    }
  });

  // ========== СЛАЙДЕР-отзывы ====================================================

  new Swiper('.testimonials__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,


    navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
    },

    scrollbar: {
      el: '.testimonials__scrollbar',
      draggable: true,
    },

    breakpoints: {

      901: {
        slidesPerView: 1.5,
      },
      1201: {
        slidesPerView: 2.1,
      }
    }
  });

  // ========== Телефон ====================================================

  const telInputs = document.querySelectorAll('input[type="tel"]')
  const im = new Inputmask('+7 (999) 999-99-99')
  im.mask(telInputs)
})()



// ==========MODAL от куратора====================================================


// const btn = document.querySelector('.about__img-btn')
// const modal = document.querySelector('.modal')

// btn.addEventListener('click', openModal)
// modal.addEventListener('click', closeModal)

// function openModal(e) {
//   e.preventDefault()
//   document.body.classList.toggle('body--opened-modal')
// }

// function closeModal(e) {
//   e.preventDefault()
//   const target = e.target
//   if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
//     document.body.classList.remove('body--opened-modal')
//   }
// }


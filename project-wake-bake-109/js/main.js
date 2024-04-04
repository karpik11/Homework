'use strict';

(function () {

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

})()

// ==========MODAL====================================================

const btn = document.querySelector('.about__img-btn')
const modal = document.querySelector('.modal')
const body = document.body
const cancel = document.querySelector('.modal__cancel')


btn.addEventListener('click', () => {
  modal.classList.add('modal--open')
  body.classList.add('body--opened-modal')
})

const closeModal = () => {
  modal.classList.remove('modal--open')
  body.classList.remove('body--opened-modal')
}

cancel.addEventListener('click', () => {
  closeModal()
})

modal.addEventListener('click', () => {
  closeModal()
})

document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    closeModal()
  }
})
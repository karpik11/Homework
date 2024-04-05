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


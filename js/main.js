//// Show menu

const navMenu = document.querySelector('#nav-menu')
const close = document.querySelector('#nav-close')
const open = document.querySelector('#nav-toggle')

if (open) {
  open.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}
if (close) {
  close.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//remove menu

const navLinks = document.querySelectorAll('.nav__link')

const removeNav = () => {
  const navMenu = document.querySelector('#nav-menu')
  navMenu.classList.remove('show-menu')
}
navLinks.forEach((n) => n.addEventListener('click', removeNav))

// add shadow header
const shadowHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50
    ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

//swiper
const swiperPopular = new Swiper('.popular__swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 1,
})

/// scroll show

const scrollShow = () => {
  const scroll = document.getElementById('scroll-up')
  this.scrollY >= 350
    ? scroll.classList.add('scroll_show')
    : scroll.classList.remove('scroll_show')
}
Window, addEventListener('scroll', scrollShow)

//scrolll section active link

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*=' + sectionId + ']'
      )

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// scroll reveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
})
sr.reveal('.home__data, .popular__container, .footer')
sr.reveal('.home__board', { origin: 'right', distance: '100px', delay: 700 })
sr.reveal('.home__pizza', {
  origin: 'bottom',
  distance: '100px',
  delay: 1400,
  rotate: { z: -90 },
})
sr.reveal('.home__ingredient', { delay: 2000, interval: 100 })
sr.reveal('.about__data , .recipe__img, .contact__data', { origin: 'right' })
sr.reveal('.about__img, .recepie__list, .contact__image', { origin: 'left' })
sr.reveal('.products__card', { interval: 100 })

function initHero (element) {
  const slides = element.querySelectorAll('.hero__slide')
  const buttons = element.querySelectorAll('.hero__learn-more')

  let next = 0

  function nextSlide () {
    slides.forEach((slide, index) => {
      if (index === next) {
        slide.classList.remove('hero__slide--hidden')
      } else {
        slide.classList.add('hero__slide--hidden')
      }
    })
    next = (next + 1) % slides.length
  }

  function onLearnMoreClick () {
    window.scroll({
      top: window.innerHeight * 0.85,
      behavior: 'smooth'
    })
  }

  nextSlide()
  setInterval(nextSlide, 5000)
  buttons.forEach(el => el.addEventListener('click', onLearnMoreClick))
}

initHero(document.querySelector('.hero'))

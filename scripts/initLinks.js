function initLink (element) {
  const target = element.getAttribute('href')
  const targetElement = document.querySelector(target)

  function scrollToTarget (e) {
    e.preventDefault()
    const box = targetElement.getBoundingClientRect()
    window.scroll({
      top: window.scrollY + box.top - 70,
      behavior: 'smooth'
    })
  }

  element.addEventListener('click', scrollToTarget)
}

document.querySelectorAll('.navbar__link')
  .forEach(initLink)

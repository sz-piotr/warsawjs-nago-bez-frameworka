function initNavbar (element) {
  const burger = element.querySelector('.navbar__toggle')
  const links = element.querySelector('.navbar__links')
  const linkAnchors = element.querySelectorAll('.navbar__link')

  let isOpen = false

  function toggle () {
    if (isOpen) {
      close()
    } else {
      open()
    }
  }

  function open () {
    isOpen = true
    links.classList.add('navbar__links--open')
  }

  function close () {
    isOpen = false
    links.classList.remove('navbar__links--open')
  }

  burger.addEventListener('click', toggle)
  linkAnchors.forEach(item =>
    item.addEventListener('click', close)
  )
}

initNavbar(document.querySelector('.navbar'))

const nav = document.getElementById('nav')
const openNavbtn = document.getElementById('open-nav-btn')
const mainLinks = document.querySelectorAll('header>a, header>button, main a, main button, main div')

function openNav(){
  nav.classList.add('show')
  nav.removeAttribute('inert')
  openNavbtn.setAttribute('aria-expanded', 'true')
  mainLinks.forEach(link => {
    link.setAttribute('inert', '')
  })
}

function closeNav(){
  nav.classList.remove('show')
  nav.setAttribute('inert', '')
  openNavbtn.setAttribute('aria-expanded', 'false')
  mainLinks.forEach(link => {
    link.removeAttribute('inert')
  })
}

const media = window.matchMedia("(width <= calc(2vw + 900px))")
media.addEventListener('change', (e) => updateNav(e))

function updateNav(e) {
  const isMobile = e.matches
  if(isMobile){
    nav.setAttribute('inert', '')
  }
  else{
    nav.removeAttribute('inert')
  }
}

updateNav(media)
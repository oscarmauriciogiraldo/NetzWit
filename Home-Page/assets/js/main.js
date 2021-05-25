/* ======================== Show Menu - Menu Desplegable  ======================== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // validacion de las variables existentes
    if(toggle && nav){
        //se agrega la clase show-menu a la etiqueta div con clase nav__menu
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* ===================== REMOVE MENU MOBILE  ===================== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //Cuando se hace click en nav__link, se remueve la clase show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ===================== SCROLL SECTIONS ACTIVE LINK  ===================== */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[haref*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[haref*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ===================== CHANGE BACKGOUND HEADER  ===================== */
/* =================== Cambiar El Fondo Del Header  =================== */
function scrollHeader(){
    const nav = document.getElementById('header')
    //cuando el scroll 
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


/* ===================== SHOW SCROLL TOP  ===================== */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    //cuando el scroll 
    if (this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)

/* =============  DARK LIGHT THEME ============= */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//Preiously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by calidating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

//we validate if the user previously chose a topic
if (selectedTheme) {
    //if the validation is fulfilled, we ask what the issue was to know if we activated or desactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
    
}

// Activate / desactivate theme manually with the button
themeButton.addEventListener('click', ()=>{
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current
    localStorage.setItem('select-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* =============  ============= */
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
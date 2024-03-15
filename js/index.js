addEventListener("DOMContentLoaded", () => {

const icon = document.querySelector('#icon')
const menuContainer = document.querySelector('.menu-container')

icon.addEventListener('click', () => {
    // Icon
    if(icon.classList.contains('fa-bars')){
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-close')

    // Menu Container
    menuContainer.classList.add('show')
    menuContainer.classList.remove('hide')

    // Disable scrolling
    document.body.style.overflow = 'hidden';

    }else{
    // Icon
    icon.classList.add('fa-bars')
    icon.classList.remove('fa-close')

    // Menu Container
    menuContainer.classList.remove('show')
    menuContainer.classList.add('hide')

    // Enable scrolling
    document.body.style.overflow = 'auto';

    }
})

// Resizing
window.addEventListener('resize', () => {
    if(window.innerWidth > 400) {
       if(menuContainer.classList.contains('show')){
        menuContainer.classList.remove('show')
        menuContainer.classList.add('hide');
        icon.classList.add('fa-bars')
       // Enable scrolling
        document.body.style.overflow = 'auto';
       }
    }
})


    
});
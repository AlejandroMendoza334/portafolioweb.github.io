const navToggle = document.querySelector('.nav-responsive');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}

function toggleMenu() {
    document.querySelector('.contenedor-header nav ul').classList.toggle('show');
}

document.addEventListener('click', function (event) {
    const navMenu = document.querySelector('.contenedor-header nav ul');
    const navButton = document.querySelector('.nav-responsive');

    if (navMenu.classList.contains('show') && !navMenu.contains(event.target) && !navButton.contains(event.target)) {
        navMenu.classList.remove('show');
    }
});



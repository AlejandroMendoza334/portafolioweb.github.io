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

// Funcionalidad del selector de idiomas
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            
            // Remover clase active de todos los botones
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón seleccionado
            this.classList.add('active');
            
            // Cambiar idioma
            changeLanguage(selectedLang);
        });
    });
    
    // Establecer idioma activo basado en localStorage
    const savedLang = localStorage.getItem('portfolio-lang') || 'es';
    const activeButton = document.querySelector(`[data-lang="${savedLang}"]`);
    if (activeButton) {
        langButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }
});



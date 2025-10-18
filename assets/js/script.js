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

// Funcionalidad del selector de idiomas - Dropdown
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    const langOptions = document.getElementById('langOptions');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langOptionButtons = document.querySelectorAll('.lang-option');
    
    // Toggle dropdown
    langToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
    });
    
    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!langDropdown.contains(e.target)) {
            langDropdown.classList.remove('open');
        }
    });
    
    // Manejar selección de idioma
    langOptionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            
            // Remover clase active de todas las opciones
            langOptionButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active a la opción seleccionada
            this.classList.add('active');
            
            // Actualizar el toggle con la selección
            const flag = this.querySelector('.flag-icon');
            const text = this.querySelector('span');
            const toggleFlag = langToggle.querySelector('.flag-icon');
            const toggleText = langToggle.querySelector('span');
            
            toggleFlag.src = flag.src;
            toggleFlag.alt = flag.alt;
            toggleText.textContent = selectedLang.toUpperCase();
            
            // Cambiar idioma
            changeLanguage(selectedLang);
            
            // Cerrar dropdown
            langDropdown.classList.remove('open');
        });
    });
    
    // Establecer idioma activo basado en localStorage
    const savedLang = localStorage.getItem('portfolio-lang') || 'es';
    const activeOption = document.querySelector(`[data-lang="${savedLang}"]`);
    if (activeOption) {
        langOptionButtons.forEach(btn => btn.classList.remove('active'));
        activeOption.classList.add('active');
        
        // Actualizar el toggle
        const flag = activeOption.querySelector('.flag-icon');
        const text = activeOption.querySelector('span');
        const toggleFlag = langToggle.querySelector('.flag-icon');
        const toggleText = langToggle.querySelector('span');
        
        toggleFlag.src = flag.src;
        toggleFlag.alt = flag.alt;
        toggleText.textContent = savedLang.toUpperCase();
    }
});



const navToggle = document.querySelector(".nav-responsive");
const navMenu = document.querySelector("nav ul");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

window.onload = function () {
  $("#onload").fadeOut();
  $("body").removeClass("hidden");
};

function toggleMenu() {
  document.querySelector(".contenedor-header nav ul").classList.toggle("show");
}

document.addEventListener("click", function (event) {
  const navMenu = document.querySelector(".contenedor-header nav ul");
  const navButton = document.querySelector(".nav-responsive");

  if (
    navMenu.classList.contains("show") &&
    !navMenu.contains(event.target) &&
    !navButton.contains(event.target)
  ) {
    navMenu.classList.remove("show");
  }
});

// SELECTOR DE IDIOMAS - DROPDOWN
document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("langToggle");
  const langDropdown = document.querySelector(".lang-dropdown");
  const currentFlag = document.getElementById("currentFlag");
  const currentLang = document.getElementById("currentLang");
  const langOptionButtons = document.querySelectorAll(".lang-option");

  // Toggle dropdown
  if (langToggle) {
    langToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      langDropdown.classList.toggle("open");
    });
  }

  // Cerrar dropdown al hacer click fuera
  document.addEventListener("click", function (e) {
    if (langDropdown && !langDropdown.contains(e.target)) {
      langDropdown.classList.remove("open");
    }
  });

  // Manejar selección de idioma
  langOptionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedLang = this.getAttribute("data-lang");
      const flag = this.querySelector(".flag-icon");

      // Actualizar el toggle
      if (currentFlag && currentLang) {
        currentFlag.src = flag.src;
        currentFlag.alt = flag.alt;
        currentLang.textContent = selectedLang.toUpperCase();
      }

      // Cambiar idioma
      if (typeof changeLanguage === 'function') {
        changeLanguage(selectedLang);
      }

      // Cerrar dropdown
      if (langDropdown) {
        langDropdown.classList.remove("open");
      }
    });
  });

  // Establecer idioma activo basado en localStorage
  const savedLang = localStorage.getItem("portfolio-lang") || "es";
  const activeOption = document.querySelector(`[data-lang="${savedLang}"]`);
  if (activeOption && currentFlag && currentLang) {
    const flag = activeOption.querySelector(".flag-icon");
    currentFlag.src = flag.src;
    currentFlag.alt = flag.alt;
    currentLang.textContent = savedLang.toUpperCase();
  }
});
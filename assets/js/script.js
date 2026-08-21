document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-responsive");
  const navMenu = document.querySelector(".contenedor-header nav ul");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});

window.onload = function () {
  const loader = document.getElementById("onload");
  if (loader) loader.style.display = "none";
  document.body.classList.remove("hidden");
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

// SELECTOR DE IDIOMAS - Slider
document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("langToggle");
  const currentLangText = document.getElementById("currentLangText");

  if (!langToggle || !currentLangText) return;

  // Establecer estado inicial
  const savedLang = localStorage.getItem("portfolio-lang") || "es";
  if (savedLang === "en") {
    langToggle.checked = true;
    currentLangText.textContent = "EN";
  } else {
    langToggle.checked = false;
    currentLangText.textContent = "ES";
  }

  if (typeof updateContent === "function") {
    updateContent(savedLang);
  }

  // Manejar cambio de idioma
  langToggle.addEventListener("change", function () {
    const selectedLang = this.checked ? "en" : "es";
    currentLangText.textContent = selectedLang.toUpperCase();

    // Cambiar idioma
    if (typeof changeLanguage === "function") {
      changeLanguage(selectedLang);
    }
  });
});

// BOTÓN DE ENVÍO SIMPLE
document.addEventListener("DOMContentLoaded", function () {
  const sendBtn = document.getElementById("sendBtn");
  const form = document.querySelector("form");

  if (sendBtn && form) {
    // Manejar envío del formulario
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Cambiar texto del botón
      const btnText = sendBtn.querySelector("span");
      const currentLang = localStorage.getItem("portfolio-lang") || "es";
      const sendingText = currentLang === "es" ? "Enviando..." : "Sending...";
      const sentText = currentLang === "es" ? "¡Enviado!" : "Sent!";
      const errorText = currentLang === "es" ? "Error, intenta de nuevo" : "Error, try again";
      const sendText = currentLang === "es" ? "Enviar" : "Send";

      btnText.textContent = sendingText;
      sendBtn.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then((response) => {
          if (!response.ok) throw new Error("Form submission failed");

          btnText.textContent = sentText;
          sendBtn.style.background = "linear-gradient(135deg, #4ecdc4, #44a08d)";
          form.reset();
        })
        .catch(() => {
          btnText.textContent = errorText;
          sendBtn.style.background = "linear-gradient(135deg, #ff6b6b, #e63946)";
        })
        .finally(() => {
          setTimeout(() => {
            btnText.textContent = sendText;
            sendBtn.style.background =
              "linear-gradient(135deg, #1cb698, #00d4ff)";
            sendBtn.disabled = false;
          }, 2000);
        });
    });
  }
});

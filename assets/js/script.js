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

// ===== SECCION LANDING PAGES =====
document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("landings-grid");
  const viewer = document.getElementById("landing-viewer");
  if (!grid || !viewer) return;

  const LANDINGS = [
    { slug: "que-sancocho",  name: "Que Sancocho",          type: { es: "Restaurante criollo",   en: "Venezuelan restaurant" }, url: "https://que-sancocho.vercel.app" },
    { slug: "casa-vintage",  name: "Casa Vintage",          type: { es: "Cocina de autor",       en: "Signature cuisine" },     url: "https://casa-vintage.vercel.app" },
    { slug: "la-grillade",   name: "La Grillade",           type: { es: "Parrilla francesa",     en: "French grill" },          url: "https://la-grillade.vercel.app" },
    { slug: "la-margarita",  name: "La Margariteña",        type: { es: "Desayuno criollo",      en: "Venezuelan breakfast" },  url: "https://la-margarita.vercel.app" },
    { slug: "diletto",       name: "Diletto",               type: { es: "Pizza a la leña",       en: "Wood-fired pizza" },      url: "https://dilettopizza.vercel.app" },
    { slug: "media-luna",    name: "Media Luna Food House", type: { es: "Empanadería",           en: "Empanada bakery" },       url: "https://medialunafoodhouse.vercel.app" },
    { slug: "chaplin",       name: "Chaplin's",             type: { es: "Smash burgers",         en: "Smash burgers" },         url: "https://chaplin-burger.vercel.app" },
    { slug: "gastro-burger", name: "Gastro Burger",         type: { es: "Hamburguesería",        en: "Burger joint" },          url: "https://gastro-burger.vercel.app" },
    { slug: "itaewon-korea", name: "Itaewon Korea",         type: { es: "Comida coreana",        en: "Korean food" },           url: "https://itaewon-korea.vercel.app" },
    { slug: "das-kaffee",    name: "DAS Kaffee",            type: { es: "Café y restaurante",    en: "Coffee & restaurant" },   url: "https://das-kaffee.vercel.app" },
    { slug: "spy-gym",       name: "Spy Gym",               type: { es: "Gimnasio",              en: "Gym" },                   url: "https://spy-gym.vercel.app" },
    { slug: "la-nota",       name: "La Nota Fitness",       type: { es: "Gimnasio y clases",     en: "Gym & classes" },         url: "https://lanotafitness.vercel.app" },
    { slug: "nexora",        name: "Nexora",                type: { es: "Tienda de videojuegos", en: "Video game store" },      url: "https://nexora-one-rho.vercel.app" },
    { slug: "edi-esthetic",  name: "Edi Hernández Esthetic", type: { es: "Estética facial",       en: "Facial aesthetics" },     url: "https://edi-esthetic.vercel.app" },
  ];

  const T = {
    es: { sub: "Sitios de una página para negocios locales — Valencia y San Diego, Carabobo", open: "Abrir en pestaña nueva", cta: "Ver sitio" },
    en: { sub: "One-page websites for local businesses — Valencia & San Diego, Carabobo", open: "Open in new tab", cta: "View site" },
  };
  const getLang = () => (localStorage.getItem("portfolio-lang") || "es");

  const nameEl = document.getElementById("lv-name");
  const openEl = document.getElementById("lv-open");
  const openTxt = document.getElementById("lv-open-txt");
  const iframe = document.getElementById("lv-iframe");
  const closeBtn = document.getElementById("lv-close");
  const subEl = document.getElementById("landings-sub");

  function applyLang() {
    const l = T[getLang()] || T.es;
    if (subEl) subEl.textContent = l.sub;
    if (openTxt) openTxt.textContent = l.open;
    grid.querySelectorAll(".landing-card").forEach((card) => {
      const item = LANDINGS.find((x) => x.slug === card.dataset.slug);
      if (!item) return;
      card.querySelector(".lc-type").textContent = item.type[getLang()] || item.type.es;
      card.querySelector(".lc-cta span").textContent = l.cta;
    });
  }

  LANDINGS.forEach((item) => {
    const card = document.createElement("div");
    card.className = "landing-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.dataset.slug = item.slug;
    card.innerHTML =
      '<figure><img src="assets/images/landings/' + item.slug + '.jpg" alt="' + item.name + '" loading="lazy"></figure>' +
      '<div class="lc-body">' +
        '<div class="lc-name">' + item.name + '</div>' +
        '<div class="lc-type"></div>' +
        '<span class="lc-cta"><i class="fa-solid fa-arrow-right"></i> <span></span></span>' +
      '</div>';
    card.addEventListener("click", () => openViewer(item, card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openViewer(item, card); }
    });
    grid.appendChild(card);
  });

  function openViewer(item, card) {
    grid.querySelectorAll(".landing-card.active").forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
    nameEl.textContent = item.name;
    openEl.href = item.url;
    iframe.src = item.url;
    iframe.title = item.name + " — landing page";
    viewer.hidden = false;
    viewer.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  closeBtn.addEventListener("click", () => {
    viewer.hidden = true;
    iframe.src = "about:blank";
    grid.querySelectorAll(".landing-card.active").forEach((c) => c.classList.remove("active"));
  });

  applyLang();
  const langToggle = document.getElementById("langToggle");
  if (langToggle) langToggle.addEventListener("change", () => setTimeout(applyLang, 50));
});

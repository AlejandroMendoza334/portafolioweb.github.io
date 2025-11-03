// Sistema de traducciones para el portfolio
const translations = {
  es: {
    // Navegación
    nav: {
      home: "Inicio",
      about: "Acerca de",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },

    // Sección Hero
    hero: {
      name: "Alejandro Mendoza",
      title: "Desarrollador Full Stack",
      subtitle: "Desarrollador Web Junior",
    },

    // Sección About
    about: {
      title: "Acerca de Mí",
      description:
        "<span>Alejandro</span> es un desarrollador junior apasionado con un fuerte impulso por el aprendizaje continuo y la creación de soluciones innovadoras. Con una base sólida en tecnologías tanto de frontend como de backend, estoy comprometido a construir una carrera sólida en el campo tecnológico. Actualmente busco oportunidades remotas que me permitan crecer profesionalmente, colaborar con equipos dinámicos y contribuir a proyectos de software impactantes. Soy proactivo, autodidacta y estoy listo para asumir desafíos con entusiasmo y dedicación.",
      professionalInfo: "Información Profesional",
      email: "Correo",
      tools: "Herramientas",
      location: "Ubicación",
      languages: "Idiomas",
      role: "Rol",
      experience: "Experiencia",
      toolsValue: "Cursor, ChatGPT",
      locationValue: "San Diego, Carabobo, Venezuela",
      languagesValue: "Español Nativo, Inglés Intermedio",
      roleValue: "DESARROLLADOR FREELANCE",
      experienceValue: "Desarrollador Autodidacta",
    },

    // Sección Skills
    skills: {
      title: "Habilidades Técnicas",
      frontend: "Desarrollo Frontend",
      backend: "Desarrollo Backend",
      mobile: "Desarrollo Móvil",
    },

    // Sección Projects
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Una muestra de mi trabajo reciente y habilidades técnicas",
      miniauth: {
        title: "MiniAuth API",
        description:
          "Un sistema completo de autenticación con tokens JWT, registro de usuarios y funcionalidad de login seguro.",
      },
      ecommerce: {
        title: "App E-commerce",
        description:
          "Una aplicación moderna de comercio electrónico basada en React con funcionalidad de carrito de compras y diseño responsivo.",
      },
      boviframe: {
        title: "BOVIFrame App Móvil",
        description:
          "Una aplicación móvil especializada en evaluaciones zootécnicas para ganado bovino. Desarrollada con Flutter, incluye herramientas para análisis de peso, condición corporal, registro de vacunas, seguimiento reproductivo y generación de reportes veterinarios con integración Firebase.",
      },
      movieapi: {
        title: "Movie API",
        description:
          "Base de datos interactiva de películas con funcionalidad de búsqueda e integración de API.",
      },
      interactiveMap: {
        title: "Mapa Interactivo",
        description:
          "Aplicación de mapa dinámico con características interactivas y servicios de ubicación.",
      },
      wallet: {
        title: "My Wallet App",
        description:
          "Aplicación de gestión de finanzas personales con seguimiento de gastos y planificación de presupuesto.",
      },
      gallery: {
        title: "Galería",
        description:
          "Galería de fotos interactiva con diseño moderno y animaciones suaves.",
      },
      tabbar: {
        title: "Tab Bar",
        description:
          "Componente de navegación de pestañas moderno con transiciones suaves y diseño responsivo.",
      },
      scrollingMenu: {
        title: "Menú Deslizante",
        description:
          "Menú de navegación dinámico con animaciones suaves e interfaz moderna.",
      },
      portfolioDesign: {
        title: "Diseño de Portfolio",
        description:
          "Plantilla de portfolio creativa con diseño moderno y layout responsivo.",
      },
      imageSlider: {
        title: "Slider de Imágenes",
        description:
          "Slider de imágenes interactivo con transiciones suaves y soporte táctil.",
      },
      calculator: {
        title: "Calculadora",
        description:
          "Aplicación de calculadora moderna con interfaz limpia y funcionalidad completa.",
      },
      pistazie: {
        title: "Pistazie Web",
        description:
          "Sitio web empresarial con diseño moderno y layout responsivo para negocio local.",
      },
      viewCode: "Ver Código",
      liveDemo: "Demo en Vivo",
      viewDemo: "Ver Demo",
      comingSoon: "Próximamente",
    },

    // Sección Contact
    contact: {
      title: "Contáctame",
      name: "Nombre",
      phone: "Número de Teléfono",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar",
      privacyPolicy: "Política de Privacidad",
      termsConditions: "Términos y Condiciones",
    },
  },

  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      name: "Alejandro Mendoza",
      title: "Full Stack Developer",
      subtitle: "Junior Web Developer",
    },

    // About Section
    about: {
      title: "About Me",
      description:
        "<span>Alejandro</span> is a passionate junior developer with a strong drive for continuous learning and creating innovative solutions. With a foundation in both frontend and backend technologies, I'm committed to building a solid career in the tech field. I'm currently seeking remote opportunities that will allow me to grow professionally, collaborate with dynamic teams, and contribute to impactful software projects. I'm proactive, self-taught, and ready to take on challenges with enthusiasm and dedication.",
      professionalInfo: "Professional Info",
      email: "Email",
      tools: "Tools",
      location: "Location",
      languages: "Languages",
      role: "Role",
      experience: "Experience",
      toolsValue: "Cursor, ChatGPT",
      locationValue: "San Diego, Carabobo, Venezuela",
      languagesValue: "Spanish Native, English Intermediate",
      roleValue: "FREELANCE DEVELOPER",
      experienceValue: "Self-taught Developer",
    },

    // Skills Section
    skills: {
      title: "Technical Skills",
      frontend: "Frontend Development",
      backend: "Backend Development",
      mobile: "Mobile Development",
    },

    // Projects Section
    projects: {
      title: "Featured Projects",
      subtitle: "A showcase of my recent work and technical skills",
      miniauth: {
        title: "MiniAuth API",
        description:
          "A complete authentication system with JWT tokens, user registration, and secure login functionality.",
      },
      ecommerce: {
        title: "E-commerce App",
        description:
          "A modern React-based e-commerce application with shopping cart functionality and responsive design.",
      },
      boviframe: {
        title: "BOVIFrame Mobile App",
        description:
          "A specialized mobile application for zootechnical evaluations of cattle. Built with Flutter, it includes tools for weight analysis, body condition scoring, vaccination records, reproductive tracking, and veterinary report generation with Firebase integration.",
      },
      movieapi: {
        title: "Movie API",
        description:
          "Interactive movie database with search functionality and API integration.",
      },
      interactiveMap: {
        title: "Interactive Map",
        description:
          "Dynamic map application with interactive features and location services.",
      },
      wallet: {
        title: "My Wallet App",
        description:
          "Personal finance management application with expense tracking and budget planning.",
      },
      gallery: {
        title: "Gallery",
        description:
          "Interactive photo gallery with modern design and smooth animations.",
      },
      tabbar: {
        title: "Tab Bar",
        description:
          "Modern tab navigation component with smooth transitions and responsive design.",
      },
      scrollingMenu: {
        title: "Scrolling Menu",
        description:
          "Dynamic scrolling navigation menu with smooth animations and modern UI.",
      },
      portfolioDesign: {
        title: "Portfolio Design",
        description:
          "Creative portfolio template with modern design and responsive layout.",
      },
      imageSlider: {
        title: "Image Slider",
        description:
          "Interactive image slider with smooth transitions and touch support.",
      },
      calculator: {
        title: "Calculator",
        description:
          "Modern calculator application with clean interface and full functionality.",
      },
      pistazie: {
        title: "Pistazie Web",
        description:
          "Business website with modern design and responsive layout for local business.",
      },
      viewCode: "View Code",
      liveDemo: "Live Demo",
      viewDemo: "View Demo",
      comingSoon: "Coming Soon",
    },

    // Contact Section
    contact: {
      title: "Contact Me",
      name: "Name",
      phone: "Phone Number",
      email: "Email",
      message: "Message",
      send: "Send",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",
    },
  },
};

// Función para cambiar idioma
function changeLanguage(lang) {
  const currentLang = localStorage.getItem("portfolio-lang") || "es";
  if (currentLang === lang) return;

  localStorage.setItem("portfolio-lang", lang);
  console.log("Changing language to:", lang);
  updateContent(lang);
  forceUpdateAllContent(lang);
}

// Función para actualizar el contenido
function updateContent(lang) {
  const t = translations[lang];

  // Actualizar navegación
  const navLinks = document.querySelectorAll("nav ul li a");
  const navItems = ["home", "about", "skills", "projects", "contact"];

  navLinks.forEach((link, index) => {
    if (navItems[index]) {
      link.textContent = t.nav[navItems[index]];
    }
  });

  // Actualizar hero
  const heroName = document.querySelector(".contenido-banner h1");
  const heroTitle = document.querySelector(".contenido-banner h2");

  if (heroName) heroName.textContent = t.hero.name;
  if (heroTitle) {
    // Mantener el ícono si existe
    const icon = heroTitle.querySelector("i");
    if (icon) {
      heroTitle.innerHTML = t.hero.title + " " + icon.outerHTML;
    } else {
      heroTitle.textContent = t.hero.title;
    }
  }

  // Actualizar about
  const aboutTitle = document.querySelector(".sobremi h2");
  const aboutParagraphs = document.querySelectorAll(".sobremi .contenido-seccion p");
  const aboutInfo = document.querySelector(".sobremi .fila .col h3");

  if (aboutTitle) aboutTitle.textContent = t.about.title;
  if (aboutParagraphs.length >= 1) aboutParagraphs[0].innerHTML = t.about.description;
  if (aboutInfo) aboutInfo.textContent = t.about.professionalInfo;

  // Actualizar información profesional específica
  const professionalInfo = document.querySelector(".sobremi .fila .col ul");
  if (professionalInfo) {
    const listItems = professionalInfo.querySelectorAll("li");
    listItems.forEach((item, index) => {
      const strong = item.querySelector("strong");
      if (strong) {
        const labelMap = {
          0: t.about.email,
          1: t.about.tools,
          2: t.about.location,
          3: t.about.languages,
          4: t.about.role,
          5: t.about.experience,
        };
        if (labelMap[index]) {
          strong.textContent = labelMap[index];
        }
      }

      // Actualizar valores específicos
      if (index === 1) {
        const text = item.textContent.trim();
        if (text.includes("Cursor, ChatGPT")) {
          item.innerHTML = `<strong>${t.about.tools}</strong> ${t.about.toolsValue}`;
        }
      } else if (index === 2) {
        const text = item.textContent.trim();
        if (text.includes("San Diego, Carabobo, Venezuela")) {
          item.innerHTML = `<strong>${t.about.location}</strong> ${t.about.locationValue}`;
        }
      } else if (index === 3) {
        const text = item.textContent.trim();
        if (text.includes("Spanish Native, English Intermediate")) {
          item.innerHTML = `<strong>${t.about.languages}</strong> ${t.about.languagesValue}`;
        }
      } else if (index === 4) {
        const span = item.querySelector("span");
        if (span) {
          span.textContent = t.about.roleValue;
        }
      } else if (index === 5) {
        const text = item.textContent.trim();
        if (text.includes("Self-taught Developer")) {
          item.innerHTML = `<strong>${t.about.experience}</strong> ${t.about.experienceValue}`;
        }
      }
    });
  }

  // Actualizar información profesional con detección más robusta
  const professionalInfo2 = document.querySelector(".sobremi .fila .col");
  if (professionalInfo2) {
    const listItems2 = professionalInfo2.querySelectorAll("li");
    listItems2.forEach((item, index) => {
      const strong = item.querySelector("strong");
      if (strong) {
        const currentText = strong.textContent.trim();

        // Mapear texto actual a traducción
        const textMap = {
          Email: t.about.email,
          Tools: t.about.tools,
          Location: t.about.location,
          Languages: t.about.languages,
          Role: t.about.role,
          Experience: t.about.experience,
          Correo: t.about.email,
          Herramientas: t.about.tools,
          Ubicación: t.about.location,
          Idiomas: t.about.languages,
          Rol: t.about.role,
          Experiencia: t.about.experience,
        };

        if (textMap[currentText]) {
          strong.textContent = textMap[currentText];
        }
      }

      // Actualizar valores específicos con detección más robusta
      const itemText = item.textContent.trim();

      if (itemText.includes("alejandromendoza6575757@gmail.com")) {
        item.innerHTML = `<strong>${t.about.email}</strong> alejandromendoza6575757@gmail.com`;
      } else if (itemText.includes("Cursor, ChatGPT")) {
        item.innerHTML = `<strong>${t.about.tools}</strong> ${t.about.toolsValue}`;
      } else if (itemText.includes("San Diego, Carabobo, Venezuela")) {
        item.innerHTML = `<strong>${t.about.location}</strong> ${t.about.locationValue}`;
      } else if (
        itemText.includes("Spanish Native, English Intermediate") ||
        itemText.includes("Español Nativo, Inglés Intermedio")
      ) {
        item.innerHTML = `<strong>${t.about.languages}</strong> ${t.about.languagesValue}`;
      } else if (
        itemText.includes("FREELANCE DEVELOPER") ||
        itemText.includes("DESARROLLADOR FREELANCE")
      ) {
        const span = item.querySelector("span");
        if (span) {
          span.textContent = t.about.roleValue;
        }
      } else if (
        itemText.includes("Self-taught Developer") ||
        itemText.includes("Desarrollador Autodidacta")
      ) {
        item.innerHTML = `<strong>${t.about.experience}</strong> ${t.about.experienceValue}`;
      }
    });
  }

  // Actualizar skills
  const skillsTitle = document.querySelector(".skills h2");
  const skillCategories = document.querySelectorAll(".skill-category h3");

  if (skillsTitle) skillsTitle.textContent = t.skills.title;
  if (skillCategories[0]) skillCategories[0].textContent = t.skills.frontend;
  if (skillCategories[1]) skillCategories[1].textContent = t.skills.backend;
  if (skillCategories[2]) skillCategories[2].textContent = t.skills.mobile;

  // Actualizar projects - FORZAR ACTUALIZACIÓN
  const projectsTitle = document.querySelector(".projects-container h2");
  const projectsSubtitle = document.querySelector(".projects-subtitle");

  if (projectsTitle) {
    projectsTitle.textContent = t.projects.title;
    console.log("Projects title updated to:", t.projects.title);
  } else {
    console.log("Projects title NOT FOUND");
  }
  if (projectsSubtitle) {
    projectsSubtitle.textContent = t.projects.subtitle;
    console.log("Projects subtitle updated to:", t.projects.subtitle);
  } else {
    console.log("Projects subtitle NOT FOUND");
  }

  // Actualizar títulos y descripciones de proyectos - FORZAR ACTUALIZACIÓN
  const projectCards = document.querySelectorAll(".card");
  console.log("Found", projectCards.length, "project cards");

  projectCards.forEach((card, index) => {
    const title = card.querySelector("h3");
    const description = card.querySelector("p");

    if (title && description) {
      const titleText = title.textContent.trim();
      console.log(`Card ${index}: "${titleText}"`);

      // Mapear títulos a traducciones (incluyendo traducciones inversas)
      const titleMap = {
        // Títulos en inglés
        "MiniAuth API": t.projects.miniauth,
        "E-commerce App": t.projects.ecommerce,
        "BOVIFrame Mobile App": t.projects.boviframe,
        "Movie API": t.projects.movieapi,
        "Interactive Map": t.projects.interactiveMap,
        "My Wallet App": t.projects.wallet,
        Gallery: t.projects.gallery,
        "Tab Bar": t.projects.tabbar,
        "Scrolling Menu": t.projects.scrollingMenu,
        "Portfolio Design": t.projects.portfolioDesign,
        "Image Slider": t.projects.imageSlider,
        Calculator: t.projects.calculator,
        "Pistazie Web": t.projects.pistazie,
        // Títulos ya traducidos al español
        "App E-commerce": t.projects.ecommerce,
        "BOVIFrame App Móvil": t.projects.boviframe,
        "Mapa Interactivo": t.projects.interactiveMap,
        Galería: t.projects.gallery,
        "Menú Deslizante": t.projects.scrollingMenu,
        "Diseño de Portfolio": t.projects.portfolioDesign,
        "Slider de Imágenes": t.projects.imageSlider,
        Calculadora: t.projects.calculator,
      };

      const translation = titleMap[titleText];
      if (translation) {
        title.textContent = translation.title;
        description.textContent = translation.description;
        console.log(`Updated card ${index}: "${translation.title}"`);
      } else {
        console.log(`No translation found for: "${titleText}"`);
      }
    }
  });

  // Actualizar botones de proyectos con detección más robusta - FORZAR ACTUALIZACIÓN
  const projectLinks = document.querySelectorAll(".project-link");
  console.log("Found", projectLinks.length, "project links");

  projectLinks.forEach((link, index) => {
    const text = link.textContent.trim();
    const icon = link.querySelector("i");
    const iconClass = icon ? icon.className : "";

    console.log(`Link ${index}: "${text}"`);

    if (text.includes("View Demo") || text.includes("Ver Demo")) {
      link.innerHTML = `<i class="fa-solid fa-external-link-alt"></i> ${t.projects.viewDemo}`;
      console.log(`Updated link ${index} to: ${t.projects.viewDemo}`);
    } else if (text.includes("View Code") || text.includes("Ver Código")) {
      link.innerHTML = `<i class="fa-brands fa-github"></i> ${t.projects.viewCode}`;
      console.log(`Updated link ${index} to: ${t.projects.viewCode}`);
    } else if (text.includes("Live Demo") || text.includes("Demo en Vivo")) {
      link.innerHTML = `<i class="fa-solid fa-external-link-alt"></i> ${t.projects.liveDemo}`;
      console.log(`Updated link ${index} to: ${t.projects.liveDemo}`);
    } else if (text.includes("Coming Soon") || text.includes("Próximamente")) {
      link.innerHTML = `<i class="fa-brands fa-google-play"></i> ${t.projects.comingSoon}`;
      console.log(`Updated link ${index} to: ${t.projects.comingSoon}`);
    }
  });

  // Actualizar contact
  const contactTitle = document.querySelector(".contact h2");
  if (contactTitle) contactTitle.textContent = t.contact.title;

  const nameLabel = document.querySelector('label[for="name"]');
  if (nameLabel) nameLabel.textContent = t.contact.name;

  const phoneLabel = document.querySelector('label[for="phone"]');
  if (phoneLabel) phoneLabel.textContent = t.contact.phone;

  const emailLabel = document.querySelector('label[for="email"]');
  if (emailLabel) emailLabel.textContent = t.contact.email;

  const messageLabel = document.querySelector('label[for="message"]');
  if (messageLabel) messageLabel.textContent = t.contact.message;

  const sendButton = document.querySelector("button span");
  if (sendButton) sendButton.textContent = t.contact.send;

  const formLinks = document.querySelectorAll(".form-txt a");
  if (formLinks.length >= 2) {
    formLinks[0].textContent = t.contact.privacyPolicy;
    formLinks[1].textContent = t.contact.termsConditions;
  }

  // Actualizar placeholders
  const nameInput = document.querySelector('input[name="name"]');
  if (nameInput) nameInput.placeholder = t.contact.name;

  const phoneInput = document.querySelector('input[name="phone"]');
  if (phoneInput) phoneInput.placeholder = t.contact.phone;

  const emailInput = document.querySelector('input[name="email"]');
  if (emailInput) emailInput.placeholder = t.contact.email;

  const messageTextarea = document.querySelector('textarea[name="message"]');
  if (messageTextarea) messageTextarea.placeholder = t.contact.message;
}

// Función para forzar actualización completa
function forceUpdateAllContent(lang) {
  const t = translations[lang];

  // Forzar actualización de todos los elementos
  setTimeout(() => {
    // Actualizar navegación
    const navLinks = document.querySelectorAll("nav ul li a");
    const navItems = ["home", "about", "skills", "projects", "contact"];
    navLinks.forEach((link, index) => {
      if (navItems[index]) {
        link.textContent = t.nav[navItems[index]];
      }
    });

    // Actualizar hero
    const heroName = document.querySelector(".contenido-banner h1");
    const heroTitle = document.querySelector(".contenido-banner h2");

    if (heroName) heroName.textContent = t.hero.name;
    if (heroTitle) {
      // Mantener el ícono si existe
      const icon = heroTitle.querySelector("i");
      if (icon) {
        heroTitle.innerHTML = t.hero.title + " " + icon.outerHTML;
      } else {
        heroTitle.textContent = t.hero.title;
      }
    }

    // Actualizar about
    const aboutTitle = document.querySelector(".sobremi h2");
    const aboutParagraphs = document.querySelectorAll(".sobremi .contenido-seccion p");
    const aboutInfo = document.querySelector(".sobremi .fila .col h3");

    if (aboutTitle) aboutTitle.textContent = t.about.title;
    if (aboutParagraphs.length >= 1) aboutParagraphs[0].innerHTML = t.about.description;
    if (aboutParagraphs.length >= 2) aboutParagraphs[1].innerHTML = t.about.description2;
    if (aboutParagraphs.length >= 3) aboutParagraphs[2].innerHTML = t.about.description3;
    if (aboutParagraphs.length >= 4) aboutParagraphs[3].innerHTML = t.about.description4;
    if (aboutInfo) aboutInfo.textContent = t.about.professionalInfo;

    // Actualizar información profesional con múltiples intentos
    const professionalInfo = document.querySelector(".sobremi .fila .col ul");
    if (professionalInfo) {
      const listItems = professionalInfo.querySelectorAll("li");
      listItems.forEach((item, index) => {
        const strong = item.querySelector("strong");
        if (strong) {
          const labelMap = {
            0: t.about.email,
            1: t.about.tools,
            2: t.about.location,
            3: t.about.languages,
            4: t.about.role,
            5: t.about.experience,
          };
          if (labelMap[index]) {
            strong.textContent = labelMap[index];
          }
        }

        // Actualizar valores específicos
        const itemText = item.textContent.trim();
        if (itemText.includes("alejandromendoza6575757@gmail.com")) {
          item.innerHTML = `<strong>${t.about.email}</strong> alejandromendoza6575757@gmail.com`;
        } else if (itemText.includes("Cursor, ChatGPT")) {
          item.innerHTML = `<strong>${t.about.tools}</strong> ${t.about.toolsValue}`;
        } else if (itemText.includes("San Diego, Carabobo, Venezuela")) {
          item.innerHTML = `<strong>${t.about.location}</strong> ${t.about.locationValue}`;
        } else if (
          itemText.includes("Spanish Native, English Intermediate") ||
          itemText.includes("Español Nativo, Inglés Intermedio")
        ) {
          item.innerHTML = `<strong>${t.about.languages}</strong> ${t.about.languagesValue}`;
        } else if (
          itemText.includes("FREELANCE DEVELOPER") ||
          itemText.includes("DESARROLLADOR FREELANCE")
        ) {
          const span = item.querySelector("span");
          if (span) span.textContent = t.about.roleValue;
        } else if (
          itemText.includes("Self-taught Developer") ||
          itemText.includes("Desarrollador Autodidacta")
        ) {
          item.innerHTML = `<strong>${t.about.experience}</strong> ${t.about.experienceValue}`;
        }
      });
    }

    // Actualizar skills
    const skillsTitle = document.querySelector(".skills h2");
    const skillCategories = document.querySelectorAll(".skill-category h3");

    if (skillsTitle) skillsTitle.textContent = t.skills.title;
    if (skillCategories[0]) skillCategories[0].textContent = t.skills.frontend;
    if (skillCategories[1]) skillCategories[1].textContent = t.skills.backend;
    if (skillCategories[2]) skillCategories[2].textContent = t.skills.mobile;

    // Actualizar projects
    const projectsTitle = document.querySelector(".projects-container h2");
    const projectsSubtitle = document.querySelector(".projects-subtitle");

    if (projectsTitle) {
      projectsTitle.textContent = t.projects.title;
      console.log(
        "Force update - Projects title updated to:",
        t.projects.title
      );
    } else {
      console.log("Force update - Projects title NOT FOUND");
    }
    if (projectsSubtitle) {
      projectsSubtitle.textContent = t.projects.subtitle;
      console.log(
        "Force update - Projects subtitle updated to:",
        t.projects.subtitle
      );
    } else {
      console.log("Force update - Projects subtitle NOT FOUND");
    }

    // Actualizar títulos y descripciones de proyectos
    const projectCards = document.querySelectorAll(".card");
    console.log("Force update - Found", projectCards.length, "project cards");

    projectCards.forEach((card, index) => {
      const title = card.querySelector("h3");
      const description = card.querySelector("p");

      if (title && description) {
        const titleText = title.textContent.trim();
        console.log(`Force update - Card ${index}: "${titleText}"`);

        const titleMap = {
          // Títulos en inglés
          "MiniAuth API": t.projects.miniauth,
          "E-commerce App": t.projects.ecommerce,
          "BOVIFrame Mobile App": t.projects.boviframe,
          "Movie API": t.projects.movieapi,
          "Interactive Map": t.projects.interactiveMap,
          "My Wallet App": t.projects.wallet,
          Gallery: t.projects.gallery,
          "Tab Bar": t.projects.tabbar,
          "Scrolling Menu": t.projects.scrollingMenu,
          "Portfolio Design": t.projects.portfolioDesign,
          "Image Slider": t.projects.imageSlider,
          Calculator: t.projects.calculator,
          "Pistazie Web": t.projects.pistazie,
          // Títulos ya traducidos al español
          "App E-commerce": t.projects.ecommerce,
          "BOVIFrame App Móvil": t.projects.boviframe,
          "Mapa Interactivo": t.projects.interactiveMap,
          Galería: t.projects.gallery,
          "Menú Deslizante": t.projects.scrollingMenu,
          "Diseño de Portfolio": t.projects.portfolioDesign,
          "Slider de Imágenes": t.projects.imageSlider,
          Calculadora: t.projects.calculator,
        };

        const translation = titleMap[titleText];
        if (translation) {
          title.textContent = translation.title;
          description.textContent = translation.description;
          console.log(
            `Force update - Updated card ${index}: "${translation.title}"`
          );
        } else {
          console.log(
            `Force update - No translation found for: "${titleText}"`
          );
        }
      }
    });

    // Actualizar botones de proyectos
    const projectLinks = document.querySelectorAll(".project-link");
    console.log("Force update - Found", projectLinks.length, "project links");

    projectLinks.forEach((link, index) => {
      const text = link.textContent.trim();
      console.log(`Force update - Link ${index}: "${text}"`);

      if (text.includes("View Demo") || text.includes("Ver Demo")) {
        link.innerHTML = `<i class="fa-solid fa-external-link-alt"></i> ${t.projects.viewDemo}`;
        console.log(
          `Force update - Updated link ${index} to: ${t.projects.viewDemo}`
        );
      } else if (text.includes("View Code") || text.includes("Ver Código")) {
        link.innerHTML = `<i class="fa-brands fa-github"></i> ${t.projects.viewCode}`;
        console.log(
          `Force update - Updated link ${index} to: ${t.projects.viewCode}`
        );
      } else if (text.includes("Live Demo") || text.includes("Demo en Vivo")) {
        link.innerHTML = `<i class="fa-solid fa-external-link-alt"></i> ${t.projects.liveDemo}`;
        console.log(
          `Force update - Updated link ${index} to: ${t.projects.liveDemo}`
        );
      } else if (
        text.includes("Coming Soon") ||
        text.includes("Próximamente")
      ) {
        link.innerHTML = `<i class="fa-brands fa-google-play"></i> ${t.projects.comingSoon}`;
        console.log(
          `Force update - Updated link ${index} to: ${t.projects.comingSoon}`
        );
      }
    });

    // Actualizar contact
    const contactTitle = document.querySelector(".contact h2");
    const nameLabel = document.querySelector('label[for="name"]');
    const phoneLabel = document.querySelector('label[for="phone"]');
    const emailLabel = document.querySelector('label[for="email"]');
    const messageLabel = document.querySelector('label[for="message"]');
    const sendButton = document.querySelector("button span");
    const formLinks = document.querySelectorAll(".form-txt a");

    if (contactTitle) contactTitle.textContent = t.contact.title;
    if (nameLabel) nameLabel.textContent = t.contact.name;
    if (phoneLabel) phoneLabel.textContent = t.contact.phone;
    if (emailLabel) emailLabel.textContent = t.contact.email;
    if (messageLabel) messageLabel.textContent = t.contact.message;
    if (sendButton) sendButton.textContent = t.contact.send;
    if (formLinks.length >= 2) {
      formLinks[0].textContent = t.contact.privacyPolicy;
      formLinks[1].textContent = t.contact.termsConditions;
    }

    // Actualizar placeholders
    const nameInput = document.querySelector('input[name="name"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');

    if (nameInput) nameInput.placeholder = t.contact.name;
    if (phoneInput) phoneInput.placeholder = t.contact.phone;
    if (emailInput) emailInput.placeholder = t.contact.email;
    if (messageTextarea) messageTextarea.placeholder = t.contact.message;
  }, 100);
}

// Inicializar idioma al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("portfolio-lang") || "es";
  console.log("Initializing with language:", savedLang);
  updateContent(savedLang);
  forceUpdateAllContent(savedLang);

  // Forzar actualización adicional después de un delay
  setTimeout(() => {
    console.log("Force updating content after delay");
    forceUpdateAllContent(savedLang);
  }, 500);
});

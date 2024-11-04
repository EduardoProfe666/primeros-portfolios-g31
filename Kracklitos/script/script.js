// Agrega la clase "animated-section" a las secciones para la animación
const sections = document.querySelectorAll('section');
sections.forEach(section => section.classList.add('animated-section'));

// Maneja el botón de la barra de navegación
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('show'); // Muestra u oculta la barra de navegación
    navToggle.classList.toggle('active'); // Cambia el ícono del botón
});

// Añade efecto de desplazamiento al encabezado
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Añade efecto de paralaje al fondo
window.addEventListener("scroll", () => {
    const parallaxBackground = document.querySelector("body:before");
    const scrollPosition = window.pageYOffset;
    const parallaxSpeed = 0.2; // Velocidad de paralaje

    parallaxBackground.style.backgroundPositionY = `${
      scrollPosition * parallaxSpeed
    }px`;
  });

  // Agrega la clase "animated-section" al pie de página
  const contactSection = document.querySelector("footer");
  if (contactSection) {
    contactSection.classList.add("animated-section");
  }


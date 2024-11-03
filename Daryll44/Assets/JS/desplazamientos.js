const aboutMe = document.getElementById("contenedor_sobre_mi");
const projects = document.getElementById("projects_section");
const blogs = document.getElementById("seccion_blogs");
const footer = document.getElementById("footer");
const footerCard = document.getElementById("footer_card");

let isScrolling = false;
let isTransitioning = false; // Nueva variable para controlar transiciones

// Evento para detectar si el usuario está desplazándose
window.addEventListener('wheel', () => {
    isScrolling = true;
});

// Usar IntersectionObserver con margen y configuración de threshold
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5 // Solo activa cuando el 50% de la sección es visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!isScrolling || isTransitioning) return; // Evitar nueva transición si ya está en una

        if (entry.isIntersecting) {
            isTransitioning = true; // Iniciar transición
            
            if (entry.target === footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
                footerCard.style.animationPlayState = "running";
            } else if (entry.target === projects) {
                projects.scrollIntoView({ behavior: 'smooth' });
            } else if (entry.target === blogs) {
                blogs.scrollIntoView({ behavior: 'smooth' });
            }

            setTimeout(() => {
                isTransitioning = false; // Permitir nuevas transiciones después de finalizar
            }, 1500); // Duración de la transición
        }
    });
}, observerOptions);

// Observa las secciones
observer.observe(projects);
observer.observe(blogs);
observer.observe(footer);

// Restablecer la bandera de desplazamiento después de un retardo
setInterval(() => {
    isScrolling = false;
}, 5000);



/* Esto necesario para que se active la animacion de la tarjeta del formulario por el click */
// porque estaba solo configurada la animacion que se activase arriba con el scroll
let BotonContacts = document.getElementById("contacts_a");

BotonContacts.addEventListener("click", ()=>{
    footer_card.style.animationPlayState = "running";
});


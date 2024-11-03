// inicializar el boton que gatillea los eventos
const iniciar = document.getElementById("iniciar");
// cargar las imagenes estaticas y el gif para hacer el intercambio
const staticImageSrc = "Daryll44/Images/kirbyStatico.jpg";
const kirbyGif = "Daryll44/Images/kirbyGif.gif"

// tomar los objetos que sufriran los cambios en cuestion
const kirby1 = document.getElementById("kirby1");
const kirby2 = document.getElementById("kirby2");
const kirby3 = document.getElementById("kirby3");
const kirby4 = document.getElementById("kirby4");

// evento de cuando pongo el click sobre el boton con img estatica
iniciar.addEventListener('mouseover', () => {
    kirby1.src = staticImageSrc;
    kirby2.src = staticImageSrc;
    kirby3.src = staticImageSrc;
    kirby4.src = staticImageSrc;
});

// evento cuando saco el click del boton regresa el gif
iniciar.addEventListener('mouseout', () => {
    kirby1.src = kirbyGif;
    kirby2.src = kirbyGif;
    kirby3.src = kirbyGif;
    kirby4.src = kirbyGif;
});

// evento para cuando pulsa click
iniciar.addEventListener('click', () => {
    // le damos a la pagina principal el display por defecto de bloque
    const pagina = document.getElementById("contenido");
    pagina.style.display = "block";
    // para deslizar hacia el contenido de la pagina en que es donde comienza el contenido
    pagina.scrollIntoView({ behavior: 'smooth' });
});
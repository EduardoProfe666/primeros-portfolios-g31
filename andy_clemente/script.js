document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});


function downloadFile() {
    // Ruta relativa al archivo dentro de tu proyecto
    const filePath = 'Plantilla CV - Harvard.pdf'; // Cambia esta ruta a la ubicación real de tu archivo en el proyecto
    const fileName = 'Plantilla CV - Harvard.pdf'; // Nombre con el que quieres descargar el archivo

    // Crear un elemento <a> y configurar sus atributos para la descarga
    const a = document.createElement('a');
    a.href = filePath;
    a.download = fileName;

    // Simular un clic en el enlace para iniciar la descarga
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
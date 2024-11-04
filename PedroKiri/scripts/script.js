//Función para aplciar estil a opción seleccionada y quitar la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(function(opcion) {
        opcion.classList.remove('seleccionado');
    });
    link.classList.add('seleccionado');

    // Desaparece el menú una vez que se selecciona una opción en modo responsive
    var x = document.getElementById("nav");
    if (window.innerWidth <= 800) {
        x.className = "";
    }
}

//Función para mostrar el menú responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "seleccionado";
    }
}

//Detección del scrolling para la animación de las barras de skills
window.onscroll = function(){
    efectoSkills();
}

//Función que aplica la animación de las barras de skills
function efectoSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("java").classList.add("barra-progreso3");
        document.getElementById("py").classList.add("barra-progreso4");
        document.getElementById("bd").classList.add("barra-progreso5");
    }
}

//Función para descargar el CV como txt
function descargarCV() {
    const texto1 = document.getElementById("miCV1").innerText;
    const texto2 = document.getElementById("miCV2").innerText;
    const texto3 = document.getElementById("miCV3").innerText;
    const texto4 = document.getElementById("miCV4").innerText;
    const texto5 = document.getElementById("miCV5").innerText;
    const texto6 = document.getElementById("miCV6").innerText;
    const textoCompleto = texto1 + "\n" + texto2 + "\n" + texto3 + "\n\n" + texto4 + "\n\n" + texto5 + "\n\n" + texto6;
    const blob = new Blob([textoCompleto], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "miCV.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
  document.getElementById("descargarCV").addEventListener("click", descargarCV);
  
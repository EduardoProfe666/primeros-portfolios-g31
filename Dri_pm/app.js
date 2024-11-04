
let menuVisible = false;

//Funció que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Ocultar el menu al seleccionar algo
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Animaciones
function animacionesHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia = window.innerHeight - habilidades.getBoundingClientRect().top;

    if(distancia >= 300){
        let h = document.getElementsByClassName("progreso");
        h[0].classList.add("c");
        h[1].classList.add("java");
        h[2].classList.add("python");
        h[3].classList.add("htmlcss");
        h[4].classList.add("javascript");
        h[5].classList.add("comunicacion");
        h[6].classList.add("trabajoenequipo");
        h[7].classList.add("creatividad");
        h[8].classList.add("dedicacion");
    }
}

//detecto el scrolling para aplicar la animación
window.onscroll = function(){
    animacionesHabilidades();
}
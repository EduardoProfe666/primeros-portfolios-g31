let visible = false;

function mostrarOcultarMenu(){
    if(visible){
        document.getElementById("nav").classList="";
        visible = false;
    }
    else {
        document.getElementById("nav").classList="responsive";
        visible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    visible = false;
}
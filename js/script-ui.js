var btnPaleta = null;

document.addEventListener('DOMContentLoaded', (event) => {
    inicializar();
});

function inicializar(){
    try {
        cargarElementosUI();
    } catch (error) {
        console.error(`Ha ocurrido un error al cargar las funciones ${error.message}`);
    }
}

function cargarElementosUI(){
    btnPaleta = document.querySelector('.btnPaleta');
}

document.addEventListener('scroll', (evento) => {
    let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    
    let elementoPosVer = btnPaleta.offsetTop;

    if (scrollPos >= elementoPosVer) {
        console.log("El elemento ha sido pasado por el viewport");
    }
})

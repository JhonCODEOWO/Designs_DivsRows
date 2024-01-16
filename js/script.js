var modal = null;
var btnModal = null;

var firstColorDiv = null;
var secondaryColorDiv = null;
var tertiaryColorDiv = null;
var fontColor = null;

var infoFirstColor = null;
var infoSecondaryColor = null;
var infoTertiaryColor = null;
var infoFontColor = null;

//Variable que controla el elemento div que es relativo dentro del absolute
var contentBackground = null;

//Variables que esperan leer algun elemento de la estructura
var divContentMain = null;
var divContentBgSec = null;

var titulo = null;
var contenido = null;



var codigoHexPrimario, codigoHexSecundario, codigoHexTerciario, codigoHexTexto;

document.addEventListener('DOMContentLoaded', function () {

    cargarElementos();
    btnModal_Action();

    firstColorDiv.style.backgroundColor = "#030637";
    secondaryColorDiv.style.backgroundColor = "#3C0753";
    tertiaryColorDiv.style.backgroundColor = "#720455";
    fontColor.style.backgroundColor = "#fff";

    //Obtener codigo hexadecimal de los divs que tienen el color
    codigoHexPrimario = obtenerHexDeElemento(firstColorDiv);
    codigoHexSecundario = obtenerHexDeElemento(secondaryColorDiv);
    codigoHexTerciario = obtenerHexDeElemento(tertiaryColorDiv);
    codigoHexFont = obtenerHexDeElemento(fontColor);

    infoFirstColor.textContent = codigoHexPrimario;
    infoSecondaryColor.textContent = codigoHexSecundario;
    infoTertiaryColor.textContent = codigoHexTerciario;
    infoFontColor.textContent = codigoHexFont;

    aplicarBgColor(codigoHexPrimario, divContentMain);
    aplicarBgColor(codigoHexSecundario, divContentBgSec);

    aplicarColor(codigoHexFont, divContentMain);

    const pickr1 = Pickr.create({
        el: '.color-picker',
        theme: 'classic', // or 'monolith', or 'nano'

        swatches: [
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)'
        ],

        components: {

            // Main components
            preview: true,
            opacity: true,
            hue: true,

            // Input / output Options
            interaction: {
                hex: true,
                rgba: false,
                hsla: false,
                hsva: false,
                cmyk: false,
                input: false,
                clear: false,
                save: true
            }
        }
    });

    pickr1.on('save', (color, instance) =>{
        codigoHexPrimario = color.toHEXA().toString();
        aplicarBgColor(codigoHexPrimario, firstColorDiv);
        aplicarBgColor(codigoHexPrimario, divContentMain);
        aplicarTextoElemento(infoFirstColor, codigoHexPrimario);
        pickr1.hide();
    });

    const pickr2 = Pickr.create({
        el: '.color-picker-sec',
        theme: 'classic', // or 'monolith', or 'nano'

        swatches: [
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)'
        ],

        components: {

            // Main components
            preview: true,
            opacity: true,
            hue: true,

            // Input / output Options
            interaction: {
                hex: true,
                rgba: false,
                hsla: false,
                hsva: false,
                cmyk: false,
                input: false,
                clear: false,
                save: true
            }
        }
    });

    pickr2.on('save', (color, instance) =>{
        codigoHexSecundario = color.toHEXA().toString();
        aplicarBgColor(codigoHexSecundario, secondaryColorDiv);
        aplicarBgColor(codigoHexSecundario, divContentBgSec);
        aplicarTextoElemento(infoSecondaryColor, codigoHexSecundario);
        pickr2.hide();
    });

    const pickr3 = Pickr.create({
        el: '.color-picker-trt',
        theme: 'classic', // or 'monolith', or 'nano'

        swatches: [
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)'
        ],

        components: {

            // Main components
            preview: true,
            opacity: true,
            hue: true,

            // Input / output Options
            interaction: {
                hex: true,
                rgba: false,
                hsla: false,
                hsva: false,
                cmyk: false,
                input: false,
                clear: false,
                save: true
            }
        }
    });

    pickr3.on('save', (color, instance) =>{
        codigoHexTerciario = color.toHEXA().toString();
        aplicarBgColor(codigoHexTerciario, tertiaryColorDiv);
        // aplicarBgColor(codigoHexTerciario, divContentBgTrt);
        aplicarTextoElemento(infoTertiaryColor, codigoHexTerciario);
        pickr3.hide();
    });

    const pickr4 = Pickr.create({
        el: '.color-picker-font',
        theme: 'classic', // or 'monolith', or 'nano'

        swatches: [
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)'
        ],

        components: {

            // Main components
            preview: true,
            opacity: true,
            hue: true,

            // Input / output Options
            interaction: {
                hex: true,
                rgba: false,
                hsla: false,
                hsva: false,
                cmyk: false,
                input: false,
                clear: false,
                save: true
            }
        }
    });

    pickr4.on('save', (color, instance) =>{
        codigoHexFont = color.toHEXA().toString();
        aplicarBgColor(codigoHexFont, fontColor);
        // aplicarBgColor(codigoHexTerciario, divContentBgTrt);
        aplicarTextoElemento(infoFontColor, codigoHexFont);
        aplicarColor(codigoHexFont, titulo);
        aplicarColor(codigoHexFont, contenido);
        pickr4.hide();
    });
});


function obtenerHexDeElemento(elementoConColor) {
    var hex = rgbToHex(elementoConColor.style.backgroundColor);
    return hex;
}

function rgbToHex(rgb) {
    // Divide la cadena "rgb(x, y, z)" en un array [x, y, z]
    var rgbArray = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    // Convierte los valores de cadena en enteros
    var r = parseInt(rgbArray[1]);
    var g = parseInt(rgbArray[2]);
    var b = parseInt(rgbArray[3]);

    // Convierte los valores a hexadecimal y los concatena
    var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    return hex;
}

function aplicarBgColor(color, elementoSeleccionado) {
    try {
        elementoSeleccionado.style.backgroundColor = color;
    } catch (error) {
        alert("Se ha producido un error en el método aplicar BgColor " + error.message);
    }
}

function aplicarColor(color, elementoDeTexto) {
    try {
        if(elementoDeTexto instanceof NodeList){
            console.log("Es una nodelist");
            elementoDeTexto.forEach(element => {
                element.style.color = color;
            });
        }else{
            elementoDeTexto.style.color = color;
        }
    } catch (error) {
        console.error("Se ha producido un error en el método aplicar aplicarColor " + error.message);
        alert("Se ha producido un error en el método aplicar aplicarColor " + error.message);
    }
}

function aplicarTextoElemento(elemento, textContent) {
    try {
        elemento.textContent = textContent
    } catch (error) {
        alert("Se ha producido un error en el método aplicar aplicarColor " + error.message);
    }
}

function cargarElementos() {
    modal = document.querySelector('#modal');
    modal.classList.add('hide');
    btnModal = document.querySelector('#btnModal');
    firstColorDiv = document.querySelector('#firstColor');
    secondaryColorDiv = document.querySelector('#secondaryColor');
    tertiaryColorDiv = document.querySelector('#tertiaryColor');
    fontColor = document.querySelector('#fontColor');

    //Elementos p para mostrar codigo actual de elementos
    infoFirstColor = document.querySelector('#infoFirstColor');
    infoSecondaryColor = document.querySelector('#infoSecondaryColor');
    infoTertiaryColor = document.querySelector('#infoTertiaryColor');
    infoFontColor = document.querySelector('#infoFontColor');

    //Elementos del diseño para el ejemplo 1
    divContentMain = document.querySelector('.content-main');
    divContentBgSec = document.querySelector('.content-background');

    //Elementos generales de los ejemplos
    titulo = document.querySelectorAll('.content-header');
    contenido = document.querySelectorAll('.content-text');
}

//Código para el modal
function btnModal_Action() {
    btnModal.addEventListener('click', function () {
        //Mostrar modal
        modal.classList.add('show');
        document.body.classList.add('overflow');
        modal.scrollIntoView({ behavior: 'smooth', block: 'center'});
    });
}

function cerrarModal(accion) {
    if (accion === "cerrar") {
        document.body.classList.remove('overflow');
        modal.classList.remove('show');
        modal.classList.add('hide');
    }else{
        console.log("Has pulsado aceptar");
    }
}

//Acciones para botones del modal

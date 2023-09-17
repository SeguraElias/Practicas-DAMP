const btnJustify = document.querySelector('#btnJustify')
const btnAlignLeft = document.querySelector('#btnAlignLeft')
const btnAlignCenter = document.querySelector('#btnAlignCenter')
const btnAlignRight = document.querySelector('#btnAlignRight')
const btnBold = document.querySelector('#btnBold')
const btnItalic = document.querySelector('#btnItalic')
const btnUnderline = document.querySelector('#btnUnderline')

const texto = document.querySelector('#texto')
const textosGuardados = document.querySelector('#textosGuardados')
const arrayTextos = []

let boldState = false, italicState = false, underlineState = false;

const btnGuardar = document.querySelector('#btnGuardar')
const btnEliminar = document.querySelector('#btnEliminar')
const btnLimpiar =document.querySelector('#btnLimpiar')

btnGuardar.addEventListener('click', () =>{
    let valor = texto.value

    const formato = {
        bold: boldState,
        italic: italicState,
        underline: underlineState
    };

    const textoConFormato = {
        texto: valor,
        formato: formato
    };

    arrayTextos.push(textoConFormato);
    mostrarTextos()
});

btnEliminar.addEventListener('click', () => {
    arrayTextos.splice(0, arrayTextos.length)
    mostrarTextos()
});

btnLimpiar.addEventListener('click', () =>{
    texto.value = ""
});

function mostrarTextos(){
    textosGuardados.innerHTML = ''
    arrayTextos.forEach(function(elemento){
        let textoConFormato = elemento.texto

        if (elemento.formato.bold){
            textoConFormato = "<strong>" + textoConFormato + "</strong>"
        }
        if (elemento.formato.italic){
            textoConFormato = "<em>" + textoConFormato + "</em>"
        }
        if (elemento.formato.underline) {
            textoConFormato = "<u>" + textoConFormato + "</u>"
        }

        textosGuardados.innerHTML += `<div class="card border-0 col-6 mt-5">
            ${textoConFormato}
        </div>`;

    });
}

btnJustify.addEventListener('click', () => {
    texto.style.textAlign = "justify"
});

btnAlignLeft.addEventListener('click', () =>{
    texto.style.textAlign = "left"
});

btnAlignCenter.addEventListener('click', () =>{
    texto.style.textAlign = "center"
});

btnAlignRight.addEventListener('click', () =>{
    texto.style.textAlign = "right"
});

btnBold.addEventListener('click', () =>{
    if(!boldState){
        texto.style.fontWeight = "bold"
        boldState = true
    }
    else{
        texto.style.fontWeight = "normal"
        boldState = false
    }
});

btnItalic.addEventListener('click', () =>{
    if(!italicState){
        texto.style.fontStyle = "italic";
        italicState = true
    }
    else{
        texto.style.fontStyle = "normal";
        italicState = false
    }
});

btnUnderline.addEventListener('click', () =>{
    if(!underlineState){
        texto.style.textDecoration = "underline";
        underlineState = true
    }
    else{
        texto.style.textDecoration = "none";
        underlineState = false
    }
});
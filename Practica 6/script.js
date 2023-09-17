let img = document.querySelector('#img')
let btnMostrar = document.querySelector('#btnMostrar')
let btnLimpiar = document.querySelector('#btnLimpiar')
const carrete = document.querySelector('#carrete')
const imagenes = []

btnMostrar.addEventListener('click', () =>{
    imagenes.push(img.value)
    mostrarImagenes()
});

btnLimpiar.addEventListener('click', () => {
    imagenes.splice(0, imagenes.length)
    mostrarImagenes()
});

function mostrarImagenes(){
    carrete.innerHTML = ''
    imagenes.forEach(function(elemento){
        carrete.innerHTML += `<div class="card border-0 col-3 mt-4">
            <img style="width:100%; height: 400px;" src="${elemento}">
        </div>`;
    });
}
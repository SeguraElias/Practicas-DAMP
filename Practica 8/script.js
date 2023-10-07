//Ejercicio 1
const miBoton = document.getElementById("miBoton")
const texto1 = document.getElementById("texto1")

miBoton.addEventListener('click', function() {
    texto1.textContent = "Texto cambiado por click"
})

//Ejercicio 2
const miBoton2 = document.getElementById("miBoton2")
const contadorClick = document.getElementById("contadorClick")
let clicks = 0;

miBoton2.addEventListener('click', function(){
    clicks++;
    contadorClick.textContent = `Clicks: ${clicks}`;
})

//Ejercicio 4
const miDiv1 = document.getElementById("miDiv1") 

miDiv1.addEventListener('mouseover', function(){
    miDiv1.style.backgroundColor = "lightblue"
})

//Ejercicio 4
const miDiv2 = document.getElementById("miDiv2")
const contadorMousehover = document.getElementById("contadorMousehover")
let contMousehover = 0

miDiv2.addEventListener('mouseover', function(){
    contMousehover++
    contadorMousehover.textContent = `Contador: ${contMousehover}`
})

const miInput1 = document.getElementById("miInput1")
const lista1 = document.getElementById("lista1")

miInput1.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
        const nuevoElemento = document.createElement("li")
        nuevoElemento.textContent = `Elemento ${lista1.children.length + 1}`
        lista1.appendChild(nuevoElemento)
        miInput.value = ""
    }
})

//Ejercicio 5
const miFormulario1 = document.getElementById("miFormulario1")

miFormulario1.addEventListener("submit", function(e){
    e.preventDefault()

    const nombre1 = document.getElementById("nombre1").value
    const correo1 = document.getElementById("correo1").value

    if(nombre1 === "" || correo1 === ""){
        alert("Por favor completa todos los campos")
    }
    else{
        setTimeout( function(){
            alert("Formulario enviado con exito")
        }, 1000)
    }
})

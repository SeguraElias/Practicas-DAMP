//lista de libros
const libros = ["libro1", "libro2"]
const btnAgregar = document.querySelector("#btnAgregar")
const libro = document.querySelector("#libro")
const listaLibros = document.querySelector("#misLibros")
const btnBuscar = document.querySelector("#btnBuscar")

//agrega un evento de click al boton
btnAgregar.addEventListener("click", () => {
    if (libro.value === '') return

    if(libros.includes(libro.value) === true) return

    libros.push(libro.value)
    libro.value = ''
    mostrarLibros()
})

btnBuscar.addEventListener("click", () => {
    if (libro.value === '') return
    mostrarLibros(libro.value)
})

//muetra la lista de libros
function mostrarLibros(search = null) {
    listaLibros.innerHTML = null

    const result = (search !== null) ? libros.filter(nombre => {
        return search === nombre
    }) : libros

    result.forEach((item, index) => {
        listaLibros.innerHTML += `
            <li>${item} - 
                <button type="button" onclick="prestarLibro(${index})">Prestar</button>
            </li>
        `
    })
}

function prestarLibro(index) {
    libros.splice(index, 1)
    console.log(libros)
    mostrarLibros()
    alert("Se presto un libro")
}

//se carga la primar vez que se muestra la pagina
mostrarLibros()
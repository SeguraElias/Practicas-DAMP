const contentFilas = document.querySelector("#filas-content")
const templateFilas = document.querySelector("#filas-template")

const contentDetalles = document.querySelector('#detalles-content')
const templateDetalles = document.querySelector('#detalles-template')

const btnGuardar = document.querySelector('#btn-guardar')
const btnCancelar = document.querySelector('#btn-cancelar')
const txtNombre = document.getElementById("txtNombre")
const txtCantidad = document.getElementById("txtCantidad")
const txtPrecio = document.getElementById("txtPrecio")
const fragment = document.createDocumentFragment()

let productos = []

btnGuardar.addEventListener('click', () => {
    productos.push({
        id: productos.length + 1,
        name: txtNombre.value,
        stock: txtCantidad.value,
        price: txtPrecio.value
    })

    filasTabla()
    mostrarDetalles()
    vaciarControles()
});

btnCancelar.addEventListener('click', () => {
    vaciarControles()
});

function filasTabla(){
    contentFilas.textContent = ''

    //recorremos la lista de productos
    productos.forEach(item => {
        //clonamos la estructura de los nodos
        const clone = templateFilas.content.cloneNode(true)
        clone.querySelector('.id').textContent = item.id
        clone.querySelector('.name').textContent = item.name
        clone.querySelector('.stock').textContent = item.stock
        clone.querySelector('.price').textContent = `$ ${item.price}`
        clone.querySelector('.btn-remover').dataset.id=item.id
        //agregamos el clon a nuestro fragmento
        fragment.appendChild(clone)
    })

    //agregamos el fragmento al contenedor principal
    contentFilas.appendChild(fragment)
    agregarEventoRemoverProducto()
}

function mostrarDetalles(){
    contentDetalles.textContent = ''

    productos.forEach(item => {
        const clone = templateDetalles.content.cloneNode(true)
        clone.querySelector('#producto').textContent = item.name
        clone.querySelector('#sumatoria').textContent = `$ ${(parseInt(item.stock) * parseFloat(item.price))}`

        fragment.appendChild(clone)
    })

    contentDetalles.appendChild(fragment)
}

function agregarEventoRemoverProducto(){
    const buttons = document.querySelectorAll('.btn-remover')

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let id = btn.dataset.id
            removerProducto(id)
            filasTabla()
            mostrarDetalles()
        })
    })
}

function removerProducto(id){
    productos = productos.filter(
        pro => parseInt(pro.id) !== parseInt(id)
    )
}

function vaciarControles(){
    txtNombre.value = ''
    txtCantidad.value = ''
    txtPrecio.value = ''
}

//mostramos el resultado
filasTabla()
mostrarDetalles()
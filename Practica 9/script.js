let numeros = [1,2,3]

//push(): agrega uno o mas elementos al final del array
numeros.push(4,5)
console.log(numeros)

//pop(): elimina y devuelve el ultimo elemento del array
let frutas = ["manzana", "banana", "uva"]
let ultimaF = frutas.pop()
console.log(ultimaF)
console.log(frutas)

//unshift(): agrega uno o mas elementos al inicio del array
let colores = ["verde", "amarillo"]
colores.unshift("azul", "blanco")
console.log(colores)

//shift(): elimina y devuelve el primer elemento del array
let paises = ["El salvador", "Peru", "Mexico"]
let primerP = paises.shift()
console.log(primerP)
console.log(paises)

//concat() combina dos o mas arrays para crear un nuevo array
let arr1 = [1,2]
let arr2 = [3,4]
let combinarArray = arr1.concat(arr2)
console.log(combinarArray)

//slice(): crea una copia superficial (shallow copy) del array con los elementos seleccionados
let arrayOriginal = [1,2,3,4,5]
let copiaArray = arrayOriginal.slice(1,4)
console.log(copiaArray)

//splice(): cambia el contenido de un array eliminando, reemplazando o agregando elementos 
let fruits = ["banana", "naranja", "kiwi", "pera", "manzana"]
console.log(fruits)
let removerFruta = fruits.splice(2, 1, "uva")
console.log(removerFruta)

//foreach(): ejecuta una funcion para cada elemento del array 
//ejercicio 1
let numbers = [1, 2 ,3]
numbers.forEach(function(number){
    console.log(number * 2)
})

//ejercicio 2
const products = [
    {name: 'Camisa', precio: 20},
    {name: 'Jeans', precio: 25},
    {name: 'Zapatos', precio: 80},
    {name: 'Sombrero', precio: 10}
]

let precioTotal = 0
products.forEach( function(producto){
    precioTotal += producto.precio
})

console.log('Precio total a pagar: $', precioTotal)

//map() crea un nuevo array aplicando una funcion a cada elemento del array original 
//ejercicio 1
let numbers1 = [1 ,2 ,3]
let nuevoArray = numbers1.map( function(number){
    return number * 2
})
console.log(nuevoArray)

//ejercicio 2
//convertir grados celcius a grados farenheith
const Celcius = [0, 15, 30, 5, 10]
const Farenheith = Celcius.map(function(celcius){
    return (celcius * 9/5) * 32
})

console.log('Grados celcius: ', Celcius)
console.log('Grados Farenheith: ', Farenheith)

//filter(): crea un nuevo array con todos los elementos que pasan una prueba (funcion proporcionada)
//ejercicio 1
const nums = [2, 8, 3, 6, 10, 4, 7]
const nums2 = nums.filter( function(number){
    return number > 5
})
console.log(nums2)

//ejercicio 2
const personas = [
    {nombre: 'Yanci', edad: 24},
    {nombre: 'Jose', edad: 17},
    {nombre: 'Luciana', edad: 30},
    {nombre: 'Kevin', edad: 15},
    {nombre: 'Plutarca', edad: 20},
]

const adultos = personas.filter( function(person){
    return person.edad > 18
})
console.log(adultos)

//reduce(): aplica una funcion a un acumulador y a cada elemento de un arreglo (de izquierda a derecha) para reducirlo a un solo valor
let num =  [1, 2, 3, 4]
let sum = num.reduce( function(acumulador, valorActual){
    return acumulador + valorActual
}, 0)

console.log(sum)

//every(): comprueba si todos los elementos de un arreglo cumplen con una condicion dada y devuelve true o false
let number = [1, 2, 3, 4, 5]
let mayorCero = number.every( function(number){
    return number > 0
})
console.log(mayorCero)

//sort():ordena los elementos de un arreglo en orden alfabetico (sin crear un nuevo arreglo)
let nombres = ['Margarita', 'Alberto', 'Cesia', 'Santiago', 'Zuleima']
nombres.sort()
console.log(nombres)

//ejercicios propuestos para la practica 
//ejercicio 1: ordenar las canciones por orden alfabetico
let canciones = ['Only for behind', 'Una cunumi - remix', 'Esclava remix', 'Panocha remix', 'Terremoto']
let cancionesOrdenadas = canciones.sort()
console.log(cancionesOrdenadas)

//ejercicio 2: filtrar los numeros entre 5 y 10
let n = [1, 2, 6, 5, 9, 10, 11, 4, 7, 8, 0]
let nFilter = n.filter( function(nums){
    return nums >= 5 && nums <= 10
})
console.log(nFilter)

//Ejercicio 3: extraer el primer pais y concatenarlo 
let pais = paises.shift()
let paisesAll = pais.concat(paises)
console.log(paisesAll)
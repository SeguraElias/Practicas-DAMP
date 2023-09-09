const tabla = document.querySelector('#table');
const valores = document.querySelector('#valores');
const cantidadNumeros = prompt("Cuantos numeros desea capturar?");

//vector para almacenar los numeros 
var numeros = []
//Ciclo for para capturar todos los numeros 
for(let i = 0; i < parseInt(cantidadNumeros); i ++){
    let n = prompt("Ingrese numero")
    numeros.push(n)
}

function mediaNumeros(datos){

    function sumatoria(serie){
        let suma = 0
        serie.forEach(numero => {
            suma += parseInt(numero)
        });

        return suma
    }
    
    return sumatoria(datos) / datos.length
}

function varianzaNumeros(datos){
    function sumatoria(serie){
        let suma = 0
        for(let i=0; i<serie.length; i++){
            suma += Math.pow(serie[i]-mediaNumeros(serie), 2)
        }
        return suma
    }
    return Math.round((sumatoria(datos) / (datos.length - 1)) * 100) / 100
}

function moda(datos){
    datos.sort()
    var maxFrecuencia = 0
    var moda = datos[0];
    var contador = 1

    for(var i = 1; i < datos.length; i++){
        if(datos[i] == datos[i - 1]){
            contador++
        }
        else{
            if(contador > maxFrecuencia){
                maxFrecuencia = contador;
                moda = datos[i - 1]
            }
            contador = 1
        }
    }
    if(contador > maxFrecuencia){
        maxFrecuencia = contador
        moda = datos[datos.length - 1]
    }

    return moda
}

function mediana(datos){
    datos.sort(function(a,b){
        return a - b
    });

    var mitad = Math.floor(datos.length / 2)

    if(datos.length % 2 == 0){
        return (datos[mitad - 1] + datos[mitad]) / 2
    }
    else{
        return datos[mitad]
    }
}

function desviacionTipica(datos){
    return Math.round(Math.sqrt(varianzaNumeros(datos)) * 100) / 100
}

function mostrarValores(datos){
    let msj = ""
    datos.forEach(function(val){
        msj += val + ", "
    });
    return msj
}

valores.innerHTML += `${mostrarValores(numeros)}`

tabla.innerHTML = `
    <tr>
        <td>Media</td>
        <td>${mediaNumeros(numeros)}</td>
    </tr>
    <tr>
        <td>Varianza</td>
        <td>${varianzaNumeros(numeros)}</td>
    </tr>
    <tr>
        <td>Moda</td>
        <td>${moda(numeros)}</td>
    </tr>
    <tr>
        <td>Mediana</td>
        <td>${mediana(numeros)}</td>
    </tr>
    <tr>
        <td>Desviacion tipica</td>
        <td>${desviacionTipica(numeros)}</td>
    </tr>
`;
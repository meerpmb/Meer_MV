// Seleccionar lo sbotones
const botonCalcular = document.getElementById('boton-calcular')
const botonReiniciar = document.getElementById('boton-reiniciar')
const inputTexto = document.getElementById('input-texto')
const parrafoSuma = document.getElementById ('suma')
const parrafoMedia = document.getElementById ('media')

// Funcionalidad Boton Calcular

function botonCalcularHandler(eventoClick){
//   aquí meto lo que hace la función, cuando de al boton calcular, hará esto:
    // # 1 recoger la info del input: Ya está llamado en el const de arriba,
    // así que lo llamamos con un:
console.log(inputTexto.value)
// #1.1 lo guardamos en un sitio
const textoNumeros = inputTexto.value

// #2 Trasnformar a un Array de números

const arrayTexto = textoNumeros.split(",")
console.log(arrayTexto)
// hay que convertirlo en numeros
arrayNumeros = arrayTexto.map(function (numeroTexto){
    // constructor de tipo de dato Number, te va a generar un número
    // La función es la que le voy a hacer a cada uno de lo snúmeros del array que son iterados por .map
    return Number(numeroTexto)
})

console.log(arrayNumeros)

// #3 Operaciones

// Suma
let suma = 0

arrayNumeros.map(function(numero){
    suma = suma + numero
})

console.log(suma)

// Media

const media = suma/arrayNumeros.length

console.log(media)

// Valor Maximo y Mínimo

// se hace como la palabra mas larga

// Añadimos la información a la pagina web

parrafoSuma.innerHTML = `La suma de los numeros es: ${suma}`
parrafoMedia.innerHTML = `La media de los numeros es:  ${media}`

}

botonCalcular.addEventListener('click', botonCalcularHandler)

function botonReiniciarHandler(eventoClick){

inputTexto.value = ''
parrafoSuma.innerHTML = ''
parrafoMedia.innerHTML = ''

}

botonReiniciar.addEventListener('click', botonReiniciarHandler)
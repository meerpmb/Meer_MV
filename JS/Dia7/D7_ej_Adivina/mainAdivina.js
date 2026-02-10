
const numeroMisterioso = Math.random() * 100

// selecciono los elementos
let numeroInput = document.getElementById('input-number')
const boton = document.getElementById('boton-prueba')
const acertaste = document.getElementById('acertaste?')

// Creo los eventos; el boton escucha y ejecuta una función
boton.addEventListener('click', botonPruebaHandler)

function botonPruebaHandler(eventoClick) {

    console.log(numeroInput.value)

    // Paso #1 Recoger el nº: 
    // 1-Selecciono el input 
    // 2-Propiedad que da el valor del input
    // hay que hacer un const para que se pueda leer un numero y no un html
    const introducido = numeroInput.value

    // Paso #2 Condicional:

    if (introducido < numeroMisterioso) {
        console.log(`Demasiado bajo`)
    } else if (introducido > numeroMisterioso) {
        console.log(`Demasiado alto`)
    } else {
        console.log(`Has dado en el clavo`)
    }

}


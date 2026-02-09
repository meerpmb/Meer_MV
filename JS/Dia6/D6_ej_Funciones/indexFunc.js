// FUNCIONES

function holaMundo(){
    console.log('Hola Mundo')
    return 'Hola Mundo'
}

const salidaFuncion = holaMundo()
// podemos coger las salidas de las funciones y guardarlas en otras funciones/variables

console.log(salidaFuncion)


// Funcion sumar 2 números
// dentro de los paréntesis van los parámetros; los números

function sumarNumeros (numero1, numero2) {
    const suma = numero1 + numero2
    return suma
}

const resultado23 = sumarNumeros(2, 3)


console.log (resultado23)

// Metodo .map
const arrayNumeros = [3,4,5,6,7,8,9]

const resultadoOperacion = arrayNumeros.map(function(numero,posicion){
    const multiplicacion = numero*2
    console.log(posicion)
    // para hacer print de las posiciones de los componentes del array
    return multiplicacion

})

console.log(resultadoOperacion)


// Funciones de ripo flecha

function suma1(parametro){
    return parametrp+1
}
// se usa bastante para ahcer funciones de callback, funciones que llaman
// a funciones
const sumaDos = (numero) => {
    return numero + 2
}

const suma3 = sumaDos(3)

const resultadoFlecha = arrayNuemros.map(()=>{

})
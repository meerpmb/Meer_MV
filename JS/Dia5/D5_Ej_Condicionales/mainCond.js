const numero1 = 17
const numero2 = 13

if (numero1>numero2) {
    console.log(numero1+numero2)    
} else{console.log(`El ${numero1} es menor que el ${numero2}`)}
 // Corrección
if (numero1>numero2) {
    const suma = numero1+numero2 
    // Anida constantes que uses para una condicional específica
    console.log(suma)    
} 

if (numero2<0){
    console.log(numero2*3)
} else{console.log(`Es positivo`)}
// Corrección
if (numero2<0){
    const multiplicacion = numero2 * 3
    console.log(multiplicacion)
} else{console.log(`Es positivo`)}

let sumaNumero1 = ++numero1

if (sumaNumero1 >=! numero2){

    console.log(`Habría que aumentar hasta ${sumaNumero1} para alcanzar ${numero2}`)

}
// Corrección
if ((numero1 + 1) < numero2){
    const resta = numero2 - (numero1 + 1)
    console.log(resta)
}
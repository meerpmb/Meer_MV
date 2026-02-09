const numero = 5
// tienes tu valor que quieres multiplicar
let multiplicacion = 1
// es tu caja vacía, donde metes el valor inicial por el que
// empezarás a sacar la exponencial

for (let contador=1; contador <= numero; contador++){
    // contador viene a ser la i=---, le metes que el contador 
    // tiene que ser menor o igual al numero original, y el 
    // contador ++ hace que incremente el numero en contador=
    multiplicacion = multiplicacion * contador
}

console.log(multiplicacion)
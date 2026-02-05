let numero = window.prompt(`Introduzca su número de DNI: `); 

const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
    'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


if ((0 > numero) && (numero < 99999999)) {
    // && para que se cumpla SI o SI
    const calculo = numero%23
    // Puedes dejar el cálculo dentro o fuera, realmente es indiferente
    const letraExacta = letra[calculo]
    const StrDNI = new String (calculo)
    const DNILetra = StrDNI + letraExacta
    alert(DNILetra)
    alert( `El DNI es el ${numero}${letra[calculo]}`)

} else { 
    console.log(`Ha proporcionado un número no válido, el programa no mostrará mensajes`)
    
}

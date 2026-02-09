// let palabra1 = 'hola'
// let palabra2 = 'mundo'

// let frase = palabra1.concat(palabra2)

// console.log(frase)

// letras1 ['h', 'o', 'l', 'a']
// letras2 = ['m', 'u', 'n', 'd', 'o']

// let frase1 = letras1([1],[2],[3]).concat(letras2([1], [2], [3], [4]))

// console.log(frase1)

function concatenationStrings(string1, string2){
    const string1sinLetra = string1.slice(1)
    const string2sinLetra = string2.substring(1)

    const unionStrings = string1sinLetra.concat(string2sinLetra)

    return unionStrings
}

console.log(concatenationStrings('Hola Mundo'))
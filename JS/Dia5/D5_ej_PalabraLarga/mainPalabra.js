const Palabras = ['Pollo', 'Pexlex', 'Izaskun', 'Eva', 'Isa', 'Sanfer', 'Sopa', 'Kiwi']

let palabraMasLarga
// palabramaslarga es undefined, así que la priemra iteración va directamente a else 
// y imprime apodo como la palabra mas larga

for (const apodo of Palabras){
    if(palabraMasLarga ){
        // después de hacer la priemra iteración de else que es pollo, en la segunda iteración, 
        // ya palabraMasLarga tiene el valor de Pollo y puede hacer algo
        if (palabraMasLarga.length < apodo.length){
            
            palabraMasLarga = apodo
        }
    } else{
        palabraMasLarga = apodo
        // con esto te quitas la primera iteración, ha encontrado la primera palabra, 
        // por ahora al ser la única es la más larga
    } 


}
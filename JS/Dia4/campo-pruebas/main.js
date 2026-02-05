console.log('Hola desde el otro lado')


// CONDICIONALES 
const numeroPeces = 124

if (numeroPeces <= 4) {
    
    console.log(`Tienes ${numeroPeces}, que son menos de 4 peces `)
    
}

// Bucles

for (let contador = 0; contador < 7; contador = contador + 1)
    console.log(`Estoy en la iteración ${contador}`)


// Bucles for .... of
const semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

for(const dia of semana){
    console.log(dia)
}

// Bucles for ... in (menos usado)

for(const posicionDia in semana){
    console.log(posicionDia)
}
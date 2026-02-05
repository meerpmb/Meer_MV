let year = 2021

if (year%4 === 0){
    // uso === para uqe vea que es 0 tipo numero
    
    if (year%100 === 0) {

        if (year%400 === 0){
            console.log (`${year} es Bisiesto`)
        } else{
            console.log(`El año ${year} no es Bisiesto`)
        }

    } else {
        console.log (`El año ${year} no es Bisiesto`)
    }
    
    console.log (`${year} es Bisiesto`)

} else{console.log (`El año ${year} no es Bisiesto`)} 

if ((year%4 == 0) & !(year%100 == 0)){
        
    if (year%400 == 0){
    console.log (`${year} es Bisiesto`)
    }

} else{console.log (`${year} no es Bisiesto`)} 

// ALVARO:
const bisiesto = 2020

if (bisiesto % 4 === 0) {

  // Lo que salga TRUE

  if (bisiesto % 100 === 0) {

    if (bisiesto % 400 === 0) {

      console.log(`El año ${bisiesto} es bisiesto 🥳🥳`)

    } else {

      console.log(`El año ${bisiesto} no es bisiesto`)

    }

  } else {

    console.log(`El año ${bisiesto} es bisiesto 🥳🥳`)

  }


} else {

  // Lo que salga FALSE

  console.log(`El año ${bisiesto} no es bisiesto`)

}
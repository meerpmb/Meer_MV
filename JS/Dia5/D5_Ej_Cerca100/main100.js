const numero1 = 33
const numero2 = 77

const n1a100 = Math.abs(100-33)
const n2a100 = Math.abs(100-77)

if (n1a100 > n2a100) {
    console.log(`Siendo la diferencia de ${n2a100} el numero ${numero2} está más cerca de 100 que ${numero1}`)
} else {
    console.log(`Siendo la diferencia de ${n1a100} el numero ${numero1} está más cerca de 100 que ${numero2}`)
}

// otra solución
if (Math.abs(100-numero1) > Math.abs(100-numero2)) {
    console.log(`${numero2} está más cerca de 100 que ${numero1}`)
} else {
    console.log(`${numero1} está más cerca de 100 que ${numero2}`)
}
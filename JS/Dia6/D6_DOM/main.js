// Seleccionar elementos en mi documento HTML

const subtitulo=document.getElementById('subtitulo')
// console.log(subtitulo)function subtituloVisible(){
// subtitulo.hidden = !subtitulo.hidden
// }

const parrafos = document .querySelectorAll('p')
console.log(parrafos)
// Cuando está ALL nos devuelve un  NODE ARRAY!!


const parrafosPares = document.querySelectorAll('.parrafo-par')
console.log(parrafosPares)

parrafosPares.forEach((parrafo)=>{
    parrafo.hidden  = true
    // hidden los oculta
    console.log(parrafo)
})
// Ibamos a usar.map, pero no es exactamente un array, 
// así que hay qeu usar el forEach

// Crear elementos

const parrafoNuevo = document.createElement('p')
// creamos un node texto
const nodoTexto = document.createTextNode(
    'Este párrafo está creado dinámicamente a través de JavaScript'
)
parrafoNuevo.appendChild(nodoTexto)
// seleccionamos el div vacio

const divVacio = document.getElementById('div-vacio')

divVacio.appendChild(parrafoNuevo)
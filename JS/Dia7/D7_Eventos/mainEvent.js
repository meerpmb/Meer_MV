// paso #1, seleccionamos el botón
const boton = document.getElementById('boton')

// paso #2 le doy al boton la capacidad de escuchar (el target del event 
// listener está en el botón, no en ningun otro lado de la pagina web)
// Esto es el evento
boton.addEventListener('click', botonHandler)
// · pensar que poner como trigger del eventListener con lógica

function botonHandler(eventoClick){
    console.log(eventoClick)
}
// · al crear funciones no la metemos en el event, proque acaba siendo un
// follón, la hacemos debajo
// Evento click puede llamarse como sea


//#3 He creado el input y quiero que me avise cada vez que se interacciona con el
// para ello tengo que poner un evento
const inputTexto = document.getElementById('input-texto')

function inputTextoHandler(eventoChange){
    // al añadir .target.value es para que te devuelva lo que hay como value (viene a ser lo que escribiste)
    // console.log(eventoChange.target.value)
    
    
    // ahora quiero que el texto de target.value se convierta en un p
    const textoUsuario = eventoChange.target.value
    const parrafoNuevo = document.createElement('p')
    parrafoNuevo.innerHTML = textoUsuario
    document.body.appendChild(parrafoNuevo)
}

inputTexto.addEventListener('change', inputTextoHandler)
// change ejecuta un evento cada vez que el input cambia, podría meter keydown, que cuando se toca el enter
// devuelva un evento...
// hay que meterle la función, el callback (el , inputTextoHandler) y abajo creo la funcion

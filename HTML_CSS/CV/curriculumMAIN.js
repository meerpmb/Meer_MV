const botonEnviar = document.getElementById('boton-enviar')
let name = document.getElementById('nombre')
let message = document.getElementById('correo')


function botonEnviarHandler(eventoClick){

    console.log('${nombre} Gracias por tu mensaje ${correo}, me pondré en contacto contigo en cuanto pueda.')

}

botonEnviar.addEventListener('click', botonEnviarHandler)




// (function(){
//     emailjs.init("meerpmb@gmail.com");
//     // entiendo que tengo que conectar el emailjs al html, pero no se como :/
// })();

// document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
//     event.preventDefault();
//     emailjs.sendForm('service_60y1vy5', 'template_jl7pz34', this)
//         .then(function() {
//             alert('¡Correo enviado con éxito!');
//         }, function(error) {
//             alert('Error al enviar: ' + JSON.stringify(error));
//         });
// });

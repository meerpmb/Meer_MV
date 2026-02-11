
(function(){
    emailjs.init("TU_USER_ID");
})();

document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)
        .then(function() {
            alert('¡Correo enviado con éxito!');
        }, function(error) {
            alert('Error al enviar: ' + JSON.stringify(error));
        });
});

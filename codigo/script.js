// Este código se ejecutará después de que la página haya cargado completamente
document.addEventListener('DOMContentLoaded', function () {
    // mensaje de alerta al enviar el formulario
    const formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        alert('Formulario enviado exitosamente. ¡Gracias!');
    });

    function validarFormulario() {
        const nombre = document.getElementById("nombre").value;
        const asunto = document.getElementById("asunto").value;
        const email = document.getElementById("email").value;

        if (nombre === "" || asunto === "" || email === "") {
            mostrarError("Por favor, completa todos los campos obligatorios.");
            return false; // El formulario no está validado
        }


        if (!validarEmail(email)) {
            mostrarError("Por favor, ingresa un correo electrónico válido.");
            return false; // El formulario no está validado
        }

        return true; // El formulario está validado y puede enviarse
    }

    
});


// funcion para no dejar en blanco el campo con id nombre-usuario
function validarNombreUsuario() {
    var nombreUsuario = document.getElementById('nombre-usuario').value;
    var correoUsuario = document.getElementById('correo-usuario').value;
    var asuntoUsuario = document.getElementById('asunto-usuario').value;
    var mensajeUsuario = document.getElementById('mensaje-usuario').value;

    console.log(nombreUsuario);
    
    // Si el nombreUsuario y asuntoUsuario tiene 50 caracteres no dejara escribrir mas. comprobando a cada rato que no se pase de los 50
    if (nombreUsuario.length >= 50) {
        alert('El nombre no puede tener más de 50 caracteres');
        return false;
    }

    if (asuntoUsuario.length >= 50) {
        alert('El correo no puede tener más de 50 caracteres');
        return false;
    }

    // Si el mensajeUsuario tiene 300 caracteres mostrar una alerta
    if (mensajeUsuario.length >= 300) {
        alert('El mensaje no puede tener más de 300 caracteres');
        return false;
    }
    
    // Si el nombreUsuario esta vacio no dejara enviar el formulario
    if (nombreUsuario == '' || correoUsuario == '' || asuntoUsuario == '' || mensajeUsuario == '') {
        alert('Por favor introduzca todos los datos necesarios');      
        return false;
    }
    
    return true;
}

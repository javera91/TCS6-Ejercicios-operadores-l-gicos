'use strict'
// Solicitud del apodo al usuario.
let apodo = prompt('Ingrese su apodo por favor:');

// Proceso de verificación.
if (apodo === null || apodo === "") {
    // Si no se ingresó un apodo, asignará el valor predeterminado "Anonymus".
    apodo = 'Anonymus';
}
    alert('Su apodo es: ' + apodo);
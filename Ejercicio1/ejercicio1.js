'use strict'
// Datos del candidato: Edad y Licencia Profesional
let edad = Number(prompt("Indíquenos su edad por favor:"));
let tieneLicenciaProfesional = confirm ("¿Posee una Licencia Profesional?\nSelecciona 'Aceptar' para Sí, 'Cancelar' para No.");

// Validación de requisitos
if (edad >= 25 && tieneLicenciaProfesional) {
    alert('Apto');
} else {
    alert('No apto');
}
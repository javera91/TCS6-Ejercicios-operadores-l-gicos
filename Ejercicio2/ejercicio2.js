'use strict'
let promEstudiante = Number(prompt("Ingrese el promedio del estudiante:"));
let ingMensualFam = Number(prompt("Ingrese los ingresos mensuales familiares en dólares:"));

// Proceso de validación
if (promEstudiante >= 8.5 && ingMensualFam <= 600) {
    alert('Aprobado. Usted cumple con los requisitos para la Beca Estudiantil.');
} else {
    alert('Desaprobado. Usted no cumple con los requisitos para la Beca Estudiantil.');
}
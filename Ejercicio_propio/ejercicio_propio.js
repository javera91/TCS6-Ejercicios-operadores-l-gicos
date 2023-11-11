'use strict'
/*
//Este código creará un Bucle que contará hasta el número 50.

//USO WHILE:
let i=0;
let t=50;
while (i<t) {
    alert('Vuelta '+ i);
    i++;
}

//USO FOR:
let t=50;
for(let i=0; i<t; i++){
    alert('Vuelta '+i);
}
*/

//USO DO... WHILE:
let contador = 0;
let totalVueltas = 50;

do{
    alert('Vuelta '+ contador);
    contador++; //contador=contador+1;
} while(contador<totalVueltas);
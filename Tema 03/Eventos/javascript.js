"use strict";
console.log("JS cargado");
const nombre = "Paz";

// GESTION DE EVENTOS

// 1ª forma: Atributo HTML (NO recomenda) (onclick="saludar() en button)
/* function saludar() {
    const texto = document.querySelector(".salida");
    texto.textContent = `Salida: Hola ${nombre}`; 
} */

// 2ª forma: API JS setAttribute - Añadimos el atributo HTML (no recomendada)
/* const boton = document.getElementById("btn");

boton.setAttribute("onclick", "saludar()");
function saludar() {
    const texto = document.querySelector(".salida");
    texto.textContent = `Salida: Hola ${nombre}`; 
} */


// 3ª forma: Manejador de eventos (OK!)
/* const boton = document.getElementById("btn");
const texto = document.querySelector(".salida");

boton.addEventListener("click", () => {
    texto.textContent = `Salida: Hola ${nombre}`;
}); */

// Formas de pasar la función a addEventListener:
// ----------------------------------------------
// A) Función definida aparte y pasando referencia (la "clásica")
/* const boton = document.getElementById("btn");
const texto = document.querySelector(".salida");

function saludar() {
    texto.textContent = `Salida: Hola ${nombre}`; 
};

boton.addEventListener("click", saludar); */

// B) El error típico: poner () (se ejecuta al cargar, no al hacer click)
/* boton.addEventListener("click", saludar()); // MAL!
boton.addEventListener("click", saludar); // BIEN! */

// C) Función anónima (muy común)
/* boton.addEventListener("click", function () {
    texto.textContent = `Salida: Hola ${nombre}`;
}); */

// D) Función flecha (de las más usadas actualmente)
/* boton.addEventListener("click", () => {
    texto.textContent = `Salida: Hola ${nombre}`;
}); */

// ¿Y si hace falta pasarle parámetros?
/* function suma(num1, num2) {
    texto.textContent = num1 + num2;
}
boton.addEventListener("click", () => suma(4, 6)); */

// Variante con función anónima
/* boton.addEventListener("click", function () {
    suma(7, 8);
}); */

// Mini reto: contador de clicks + botón reset
// Reglas: 
//      No usar onclick en HTML.
//      No usar setAttribute ('onclick', ...).
//      Usar AddEventListener.

// En cada click mostrar: "Salida: has hecho X click(s)".
// En reset: poner contador a 0 y mostrar "Salida: contador a 0".

/* const boton = document.getElementById("btn");
const reset = document.getElementById("btnReset");
let salida = document.querySelector(".salida");
let contador = 0;

boton.addEventListener("click", () => {
    contador++;
    salida.textContent = `Salida: Has hecho ${contador} veces click`;
})

reset.addEventListener("click", () => {
    contador = 0;
    salida.textContent = `Salida: contador a 0`;
}) */

// Mini reto (avanzado): Combinar evento click + array para mostrar mensajes distintos según el click.
// Cada click muestra el siguiente mensaje de un array. Cuando llegue al final, vuelve al principio (cíclico).
const mensajes = [
    "Si llegas aquí, podrás ser de 1DAW",
    "No vas mal, estás alcanzando cierto nivel. Pareces Arbeloa.",
    "Uff! Esto ya es otra cosa. Flick estaría orgulloso.",
    "Te has subido al gran FUNESBUQUE."
];

const boton = document.getElementById("btn");
const reset = document.getElementById("btnReset");
let salida = document.querySelector(".salida");
let contador = 0;

boton.addEventListener("click", () => {
    salida.textContent = `Salida: ${mensajes[contador++]}`;
    if (contador === mensajes.length)
        contador = 0;
})

reset.addEventListener("click", () => {
    contador = 0;
    salida.textContent = `Salida: haz click para cargar los mensajes`;
})
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
const boton = document.getElementById("btn");
const texto = document.querySelector(".salida");

boton.addEventListener("click", () => {
    texto.textContent = `Salida: Hola ${nombre}`;
})
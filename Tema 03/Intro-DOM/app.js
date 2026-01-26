"use strict";
const app = document.querySelector("#app");
const nombre = "1º DAM";

app.textContent = `Hola ${nombre}`; // inyecta texto (no HTML)

app.innerHTML = `<div>
        Hola
        <strong>
            ${nombre}.
        </strong>
    </div>`; // inyecta HTML

// Metodos modernos
console.log(app.getHTML());
const cod = `<strong>Despierta Ismael.</strong>`;
app.setHTMLUnsafe(cod);

// Crear elemntos HTML
const contenedor = document.createElement("section");
console.log(contenedor.isConnected); // false -> no esta conectado
contenedor.innerHTML = "<p>Estoy creando una sección a través del método createElement<p>";
// Lo insertamos
document.body.appendChild(contenedor);
console.log(contenedor.isConnected) // true -> ahora ya está conectado

const seccion = contenedor; // Esto no es una copia, sino que apunta al mismo elemento

// Clonar elementos
const section = contenedor.cloneNode(true); // false (o vacio) solo copia el nodo y true copia el contenido


// meter en un nuevo div un texto HTML en negrita y crear otro div en su interior con otro texto en negrita
const ejercicio = document.querySelector(".ejercicio");
ejercicio.innerHTML = `<strong>Esto es un texto en negrita</strong>`;

const div = document.createElement("div");
const strong = document.createElement("strong");
strong.textContent = `Esto es otro texto en negrita`;
div.appendChild(strong);
ejercicio.appendChild(div);
strong.className = "green"; // sobreescribe la clase

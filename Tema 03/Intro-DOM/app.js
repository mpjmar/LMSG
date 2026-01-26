"use strict";
const app = document.querySelector("#app");
const nombre = "1º DAM";

// Para inyectar texto (no HTML)
app.textContent = `Hola ${nombre}`; 

// Para inyectar HTML
app.innerHTML = `<div>
        Hola
        <strong>
            ${nombre}.
        </strong>
    </div>`; 

// Metodos modernos
console.log(app.getHTML());
const cod = `<strong>Despierta Ismael.</strong>`;
app.setHTMLUnsafe(cod);

// Crear elemntos HTML
// 1. Se crea un elemento <section> vacío en memoria (no en el DOM)
const contenedor = document.createElement("section");
// contenedor = <section></section>

// 2. Se verifica si está conectado al DOM
console.log(contenedor.isConnected); // false
// false porque el elemento solo existe en memoria, no está insertado en el documento HTML

// 3. Se añade contenido HTML dentro del <section>
contenedor.innerHTML = "<p>Estoy creando una sección a través del método createElement<p>";
// Ahora contenedor = <section><p>Estoy creando una sección a través del método createElement</p></section>
// Pero TODAVÍA no está en el DOM, solo en memoria

// 4. Se inserta el elemento en el documento, específicamente al final del <body>
document.body.appendChild(contenedor);
// Ahora el <section> y su contenido (<p>) están visibles en la página

// 5. Se verifica nuevamente si está conectado al DOM
console.log(contenedor.isConnected); // true
// true porque ahora SÍ forma parte del árbol DOM del documento


const seccion = contenedor; // Esto no es una copia, sino que apunta al mismo elemento

// Para clonar elementos
const section = contenedor.cloneNode(true); // false (o vacio) solo copia el nodo y true copia el contenido

// -------------------------------------------------------------------------------------------------------------------

// Ejercicio: meter en un nuevo div un texto HTML en negrita y crear otro div en su interior con otro texto en negrita

// 1. Se selecciona el div de la clase "ejercicio"
const ejercicio = document.querySelector(".ejercicio");

// 2. Se inyecta el texto con la etiqueta <strong>
ejercicio.innerHTML = `<strong>Esto es un texto en negrita</strong>`;

// 3. Se crea un elemento <div> vacío en memoria
const div = document.createElement("div");

// 4. Se crea un elemento <strong> vacío en memoria
const strong = document.createElement("strong");

// 5. Se añade texto al elemento <strong>
strong.textContent = `Esto es otro texto en negrita`;
// Ahora strong contiene: <strong>Esto es otro texto en negrita</strong>

// 6. Se inserta el <strong> dentro del <div>
div.appendChild(strong);
// Ahora div contiene: <div><strong>Esto es otro texto en negrita</strong></div>

// 7. Se inserta el <div> en el elemento .ejercicio del DOM
ejercicio.appendChild(div);

strong.className = "green"; // sobreescribe la clase

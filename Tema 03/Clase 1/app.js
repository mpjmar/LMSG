"use strict";
console.log("JS cargado!");

const a = 10;
const b = 3;
const c  = 20;

console.log("Suma: ", a + b);
console.log("Resta: ", a - b);
console.log("Multiplica:", a * b);
console.log("Divide:", a / b);
console.log("Resto: ", a % b);

const nombre = "Compi";
console.log("Hola " + nombre);
console.log(`Hola ${nombre}`);

// Interpolación de variables
const firstWord = "frase";
const secondWord = "concatenada";

console.log(`Una ${firstWord} mejor ${secondWord}`);
const magicalWord = "<strong>Magical Word</strong>";
const template = `
    <div class="container">
        ${magicalWord}
    </div>
`;
console.log(template);
const templateSB = "<div class=\"container\">" + magicalWord + "</div>";
console.log(templateSB);

console.log(2 > 3);

// Operador de igualdad == vs Operador de identidad (compara valores y tipos) ===
console.log(5 == 5);
console.log(5 === 5); // true
console.log(5 === 3); // false
console.log("5" === 5); // false

console.log((5 < 10) === (6 > 2)); // true

const juegos = ["Zelda", "Mindcraft", "Counter-Strike"];
console.log("Primero:", juegos[0]);

console.log("Juegos:", juegos);
console.log("Cantidad:", juegos.length + " juegos");

juegos.push("FIFA");
console.log("Juegos tras push:", juegos);

juegos.pop();
console.log("Juegos tras pop:", juegos);

const alumno = {
    nombre: "Ana",
    curso: "1º DAW",
    edad: 18,
    repetidor: false
};

console.log("Alumno:", alumno);
console.log("Nombre:", alumno.nombre);

alumno.nombre = "Ana María";
console.log("Nombre cambiado", alumno.nombre);
console.log(alumno.edad.constructor.name); // devuelve el tipo (number)
console.log(alumno.constructor.name); // devuelve el tipo (Object)



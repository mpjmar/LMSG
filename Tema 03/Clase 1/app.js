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

// Arrays mixtos
const mixto = ["Hola", 42, true, {juego: "Minecraft", pegi: 12}, [1, 2, 3]];
console.log("Mixto:", mixto);
console.log(`Elemento 0 (${mixto[0].constructor.name}): ${mixto[0]}`);
console.log(typeof mixto[0], typeof mixto[1]);

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
console.log(alumno.toString());
console.log(`Alumno:\nNombre - ${alumno.nombre}\nCurso - ${alumno.curso}`);

const producto = {
    nombre: "Producto X",
    precio: 20.00,
    stock: true,
    toString: function() {
        return `Producto: ${this.nombre} - Precio ${this.precio}$ - Stock: ${this.stock}`;
    }
};

// console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}\$ - Stock: ${producto.stock}`);
console.log(producto.toString());

// Funciones
const total = function (precio, unidades) {
    return precio * unidades;
};

console.log("Total 9.99 * 3 = ", total(9.99, 3));
console.log(total(9.99, 3).constructor.name);

// Funciones flecha
// const name = (params) => { cuerpo };
const flecha = (precio, unidades) => precio * unidades;
console.log("Total 12.50 * 7 = ", flecha(12.50, 7));

// Crear un array de 3 objetos productos (nombre/precio)
// y una función que devuelva el precio total sumado
// (aquí puedes hacerlo simple: sumar 3 elementos a mano, sin bucles)
const productos = [
    {nombre: "Producto1", precio: 20.00}, 
    {nombre: "Producto2", precio: 10.90}, 
    {nombre: "Producto3", precio: 5.90}
];

const suma1 = function(precio1, precio2, precio3) {
  return precio1, precio2, precio3;
};
// forma 1
console.log(`Total compra cons suma1 = ${sumaproductos[0].precio, productos[1].precio, productos[2].precio}€`);

// forma 2
const suma2 = function(objeto1, objeto2, objeto3) {
    return objeto1.precio + objeto2.precio + objeto3.precio;
}
console.log(`Total compra con suma2 = ${suma2[0], cesta[1], cesta[2]}€`);

// forma 3
const suma3 = (obj1, obj2, obj3) => obj1.precio + obj2.precio + obj3.precio;
console.log(`Total compra con suma3 = ${obj1, obj2, obj3}€`);
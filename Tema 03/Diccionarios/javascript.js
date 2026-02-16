// OBJETOS (clave -> valor)
const carta = {
    cafe: {
        precio: 1.2,
        emoji: "☕",
        texto: "Café",
        alergenos: []
    },
    te: {
        precio: 1.1,
        emoji: "🍵",
        texto: "Té Chai",
        alergenos: ["leche"]
    },
    pitufo: {
        precio: 1.8,
        emoji: "🥪",
        texto: "Pitufo mixto",
        alergenos: ["gluten"]
    },
    donut: {
        precio: 2,
        emoji: "🥯",
        texto: "Donut",
        alergenos: ["gluten", "huevo"]
    }
};

// ELEMENTOS HTML DEL DOM
const selectProducto = document.getElementById("selectProducto");
const tablaMenu = document.getElementById("tablaMenu");
const infoProducto = document.getElementById("infoProducto");

// ACCEDER AL VALOR DE UNA CLAVE-. NOTACION PREFERIDA -> CON CONRCHETES
const producto = "pitufo";
console.log(`Notación con punto: El prcio del ${producto} es ${carta.pitufo.precio}€`);
console.log(`Notación con punto: El precio del ${producto} es ${carta[producto].precio}€`);

// METODO PARA OBTENER LAS CLAVES
const claves = Object.keys(carta);

// RELLENAR EL SELECT
for (const clave of claves) {
    const opcion = document.createElement("option");
    opcion.value = clave;
    opcion.textContent = `${carta[clave].texto} ${carta[clave].emoji}`;
    selectProducto.appendChild(opcion);
}




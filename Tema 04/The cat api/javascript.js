const btnGato = document.querySelector("#btnGato");
const resultado = document.querySelector("#resultado")

btnGato.addEventListener("click", () => {

    // 1) Lanzamos la petición: fetch devuelve Promise<Response>
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => {
            // 1er then: manejo de la respuesta HTTP (status, ok, etc.)
            console.log("Respuesta: " , response);

            // 2) Comprobamos si la respuesta HTTP es correcta
            if (!response.ok) {
                //Forzamos un error para que salte el catch
                throw new Error("Respuesta no OK. Código HTTP: " + response.status);
            }
            // 3) Convertimos el body de la respuesta a JSON: devuelve una Promise<Array>
            return response.json();
        })
        .then(data => {
            // 4) 2º then: cuando la última promesa se cumple, ya tenemos los datos parseados (JSON real)
            // Es un array de objetos
            // Accedemos a la URL de la primera imagen
            const url = data[0].url;

            // Mostramos la imagen en el div
            resultado.innerHTML = `<img src="${url}" class="imagenanimal" alt="Gato aleatorio" />`;
        })
        .catch(error => {
            // Mostrar el error en el div
            resultado.innerHTM = `<p class="mensaje">¡Error: ${error.message}</p>`;
        })
    ;
})

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1. Declaramos un array  vacío para guardar los nombres de los amigos
let amigos = [];

// 2. Agregar un amigo a la lista
function agregarAmigo() {
    // Capturamos el valor que el usuario escribio en id=amigo
    let ingresarAmigo = document.getElementById("amigo").value.trim();

    // si el campo está vacío...
    if (ingresarAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregamos el nombre al array 'amigos'
    amigos.push(ingresarAmigo);

    // Actualizamos la lista en la página
    mostrarListaAmigos();

    // Limpiamos el campo de texto
    document.getElementById("amigo").value = "";

    console.log(amigos)
}

// Mostrar la lista de amigos en pantalla
function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    // Limpiamos la lista
    lista.innerHTML = "";
    // Recorremos el arreglo 'amigos' y creamos un <li> por cada nombre
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Creamos un elemento de lista
        item.textContent = amigos[i]; // Le asignamos el nombre
        lista.appendChild(item); // Lo agregamos a la lista en el HTML
    }
}

// 3. Sortear un amigo al azar
function sortearAmigo() {
    // Validamos que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    // Generamos un índice aleatorio entre 0 y la longitud del arreglo - 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtenemos el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    console.log(indiceAleatorio)
    console.log(amigoSorteado)

    // Mostramos el resultado en la página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: ${amigoSorteado}</li>`;
}

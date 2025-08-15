// Desafio del amigo secreto
let amigos = [];

function agregarAmigo() {

    let amigo = document.getElementById('amigo').value.trim();
    if (!amigo) {
        alert("Ingresa un nombre valido");
        return;
    
}
if (amigos.includes(amigo)) {
        alert("Ese nombre ya está en la lista");
        return;
}

amigos.push(amigo);
 let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

    document.getElementById("amigo").value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un participante antes de sortear");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> ${amigos[indice]} </li>`;
}



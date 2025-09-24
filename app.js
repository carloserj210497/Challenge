
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();

    // Revisar si el nombre contiene números
    if (/\d/.test(nombreAmigo)) {
        alert('El nombre no puede contener números. Por favor, intenta de nuevo.');
        inputAmigo.value = '';
        return; // Detiene la función
    }

    // VRevisar que el campo no esta vacío
    if (nombreAmigo === '') {
        alert('Por favor, escribe el nombre de un amigo.');
        return;
    }

    // Revisar que el nombre no esté ya en la lista
    if (amigos.map(amigo => amigo.toLowerCase()).includes(nombreAmigo.toLowerCase())) {
        alert('Este nombre ya ha sido agregado. Por favor, introduce un nombre diferente.');
        inputAmigo.value = '';
        return;
    }
    
    // se agrega el amigo
    amigos.push(nombreAmigo);
    actualizarListaAmigos();

    inputAmigo.value = '';
    inputAmigo.focus();
}

function sortearAmigo() {
    if (amigos.length < 4) {
        alert('Debes agregar al menos 4 amigos para poder realizar el sorteo.');
        return;
    }

    embaralhar(amigos);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        if (i === amigos.length - 1) {
            resultado.innerHTML += `<li>${amigos[i]} → ${amigos[0]}</li>`;
        } else {
            resultado.innerHTML += `<li>${amigos[i]} → ${amigos[i + 1]}</li>`;
        }
    }
}

// Función para mezclar los elementos
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function actualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for (let amigo of amigos) {
        let elementoAmigo = document.createElement('li');
        elementoAmigo.textContent = amigo;
        listaHTML.appendChild(elementoAmigo);
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').focus();

}

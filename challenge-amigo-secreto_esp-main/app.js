const amigos = [];

function agregarAmigo () {
    //Accede al ID, valida, quita espacios y convierte a minúscula.
    let lista = document.getElementById ('amigo').value.trim ().toLowerCase ();

    //Valida si el campo no esta vacio, no sean números, no tengan números y no tenga signos.
     if (lista === "" || /\d/.test(lista) || /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(lista)) {
        alert("Por favor, inserte un nombre.");
        document.getElementById ('amigo').value = "";
        return;
    }

    if (amigos.includes (lista)) {
        alert ("Ya existe en la lista, agrega otro nombre.");
        document.getElementById ('amigo').value = "";
        return;
    }
    amigos.push (lista);
    document.getElementById ('amigo').value = "";
    console.log (amigos);
    actualizaLista ();
}

function actualizaLista () {
    lista = document.getElementById ('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i ++) {
        lista.innerHTML += `<li>${amigos [i]}</li>`;
    }
}

function sortearAmigo () {
    let lista = document.getElementById ('resultado');
    let nombres = document.getElementById ('listaAmigos');
    let aleatorio = Math.floor (Math.random () * amigos.length);
    
    if (!amigos.length) {
        alert ("No puedes Sortear sin tener nombres.");
        return;
    }

    lista.innerHTML = `<li>El amigo secreto es: ${amigos [aleatorio]}</li>`;
    nombres.innerHTML = "";
    return;
}
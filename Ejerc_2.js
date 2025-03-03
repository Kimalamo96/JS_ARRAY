//Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.
let frase = prompt("Ingresa una frase:");
let letra = prompt("Ingresa una letra:");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
        contador++;
    }
}

alert("La letra '" + letra + "' aparece " + contador + " veces en la frase.");

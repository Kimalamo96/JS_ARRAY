//Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.
<<<<<<< HEAD:JERCICIOS/Ejerc_2.js

let frase = prompt("Ingresa una frase:");
let letra = prompt("Ingresa una letra:");
=======
let frase = prompt("Ingresa una frase: ");
let letra = prompt("Ingresa una letra: ");
>>>>>>> 2fac9b5570eccfda471fa16130886e622d2a329c:Ejerc_2.js
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
        contador++;
    }
}

alert("La letra '" + letra + "' aparece " + contador + " veces en la frase.");

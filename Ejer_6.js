//Ordena alfabéticamente un array con 7 palabras puedes usar el algoritmo de la burbuja
let palabras = ["manzana", "perro", "gato", "piña", "piedra", "gato", "casa", "animal"];

for (let i = 0; i < palabras.length - 1; i++) {
    for (let j = 0; j < palabras.length - 1 - i; j++) {
        if (palabras[j] > palabras[j + 1]) {
            let temp = palabras[j];
            palabras[j] = palabras[j + 1];
            palabras[j + 1] = temp;
        }
    }
}
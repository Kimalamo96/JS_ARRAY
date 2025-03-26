//Solicita al usuario letras hasta que decida no insertar más, 
// una vez que termine debes pedirle otra letra y contar las veces que 
// aparece la letra final en las iniciales


/**
 * Necesito crear un prompt para que introduzca la letra,
 * que no pueda introducir números o caracteres.
 * que la opción Cancelar pare el bucle
 * y que me cuente las veces que aparece la últma letra.
 */
let letra = "";
let caja = [];


while(letra != null){
    letra = prompt("Inserta una letra");
    if(letra != null){
    caja.push(letra);
    }
}

let buscar = prompt("Inserta la letra que quieres contar");
let cuenta = 0;
for (i = 0;i < caja.length-1;i++) {
    if (caja[i] === buscar){
        cuenta++; 
    }
}
alert('este es el resultado: ' + cuenta);

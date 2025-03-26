//Dado un número entero, invertir el número y mostrarlo como resultado 
// (no se puede tratar el número como cadena de caracteres, ni usar funciones 
// que no hemos visto, se trata de un ejercicio de algoritmia inicial que se debe 
// hacer con lo que hemos visto, usando matemáticas, arrays y las estructuras 
// de control de flujo vistas en clase)

let n = 1007;
let aux = n;
let cifras = 0;
let cifrasAux;
let reves=0;

while(aux != 0){
    aux = parseInt(aux/10);
    cifras++;
}
console.log("cifras: "+cifras);

cifrasAux = cifras;
for(let i = 0; i < cifras; i++){
    aux = n % 10;
    n = parseInt(n/10);
    for (let j = 0; j < cifrasAux-1; j++) { 
        aux = aux * 10;
    }
    cifrasAux--;
    reves = reves + aux; 
}

console.log(reves);

/*
//4.length = 1

//Obtener el 8000
aux = n % 10; //8
console.log("aux antes 8000: "+aux);
for (let i = 0; i < cifras-1; i++) { //1498 -> 3 veces
    aux = aux * 10;
}
console.log("aux después 8000: "+aux);
//Obtengo el 900
aux = parseInt(n/10) % 10; //9
cifras--;
console.log("aux antes 900: "+aux);
for (let i = 0; i < cifras-1; i++) { //149 -> 2 veces
    aux = aux * 10;
}
console.log("aux después 900: "+aux);*/
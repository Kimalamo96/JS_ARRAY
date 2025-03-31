// Número de enlaces de la página

let enlaces = document.getElementsByTagName("a");

    console.log("Número de enlaces ", enlaces.length);

// Dirección a la que enlaza el penúltimo enlace
let direccion = document.getElementsByTagName("a"); // [<a>, <a>,...,<a>]
let posicionPenultimo = direccion.length-2; // 5 (Me da la posición en la que está el penúltimo)
let penultimoEnlace = direccion[posicionPenultimo];
    console.log("Penúltimo enlace ", penultimoEnlace.href); //Aquí especifico que me muestre lo que el atributo es (el http)

// Numero de enlaces que enlazan a http://prueba
let cuenta = 0;
for(i=0; i<enlaces.length; i++){
   let nombre = enlaces[i].href;//<a>
   if(nombre === "http://prueba/") {
    cuenta++  
    }               
}
    console.log("Numero de enlaces http://prueba/ ", cuenta);

// Número de enlaces del tercer párrafo    

let parrafos = document.getElementsByTagName("p");
let tercerParrafo = parrafos[2];
let enlacesParrafo = tercerParrafo.getElementsByTagName("a")
         
    console.log("Número de enlaces 3P ", enlacesParrafo.length);

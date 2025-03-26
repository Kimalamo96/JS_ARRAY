// Número de enlaces de la página
// Dirección a la que enlaza el penúltimo enlace
// Numero de enlaces que enlazan a http://prueba
// Número de enlaces del tercer párrafo

let enlaces = document.querySelectorAll("a");

function apartado1(enlaces){
    return enlaces.length;
}
console.log("Número de enlaces totales: "+apartado1(enlaces));


const apartado2 = function (enlaces){
    console.log("Dirección del penúltimo enlace: "
        +enlaces[enlaces.length-2].href);    
    }
    apartado2(enlaces);


const apartado3 = (enlaces)=>{
        let cont = 0;
        for (let i = 0; i < enlaces.length; i++) {
            if(enlaces[i].href == 'http://prueba/'){
                cont++;
            }
        }
        return cont;
    }
    console.log("Número de enlaces a http://prueba: "+apartado3(enlaces));


 function apartado4(){
        console.log("Número de enlaces tercer párrafo: "
            +document.querySelectorAll("p")[2].querySelectorAll("a").length);
    }
    apartado4();
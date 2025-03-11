//Que el usuario ponga 3 enteros y le indique cual es el menor
function ej1() {
    let n1 = parseInt(prompt('Inserta un número entero: '));
    let n2 = parseInt(prompt('Inserta un otro número entero: '));
    let n3 = parseInt(prompt('Inserta el último número entero: '));
  
    if (n1 <= n2 && n1 <= n3) {
        
        alert("El menor es " + n1);
    } else {
        if (n2 <= n1 && n2 <= n3) {
            
            alert("El menor es " + n2);
        } else {
        
            alert("El menor es " + n3);
        }
    }
  }

  //Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.
function ej2(){
let frase = prompt("Ingresa una frase:");
let letra = prompt("Ingresa una letra:");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
        contador++;
    }
 }
 alert("La letra '" + letra + "' aparece " + contador + " veces en la frase.");
}

//Suma o resta (según elija el usuario) dos números reales
function ej3(){
let eleccion =  prompt("Si quieres sumar pulsa +, si quieres restar pulsa -");
let n2 =  parseFloat("Inserta otro número decimal")
let n1 =  parseFloat("Inserta un número decimal")

if (eleccion == "+") {
alert("El resultado de la suma es:" + n1 + n2);
} else if (eleccion == "-") {
    alert("El resultado de la resta es:" + n1 - n2);
  } 
  else {
    alert("Inserta sólo o un '+' o un '-'.");
  }
}
//Necesito añadir algo para que me de la opción de poner n1/n2
//también puedo con switch

//Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
function ej4(){
let usuarioCorrecto = 'Javascript';
let passwordCorrecta = 'piopiopio';
let intentos = 3;

do {
     intentos--; //n = n -1
    }
while (intentos >= 0) {
    let usuario = prompt('Nombre de usuario');
    let password = prompt('Password');

    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
        alert("Acceso concedido");//no me sale esta alerta...
    
    } else {
        intentos--;
        alert("Usuario y/o contraseña incorrectos. Te quedan " + intentos + " intentos.");
    }
}

if (intentos === 0) {
    alert("Acceso denegado. Has agotado tus intentos.");
 }
} 

//Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra
function ej5(){
    switch (letra) {
        case 'a':
          alert('7');
          break;
        case 'b':
          alert('9');
          break;
        case 'c':
          alert('9');
          break;
        default:
          alert('Se ha equivocado de letra');
      }
    }

//Ordena alfabéticamente un array con 7 palabras puedes usar el algoritmo de la burbuja
function ej6(){
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
}
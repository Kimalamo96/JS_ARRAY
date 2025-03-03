//Suma o resta (según elija el usuario) dos números reales
let eleccion =  prompt("Si quieres sumar pulsa +, si quieres restar pulsa -");
let n2 =  parseFloat("Inserta otro número decimal")
let n1 =  parseFloat("Inserta un número decimal")

if (eleccion == "+") {
alert("El resultado de la suma es:" + n1 + n2);
} else if (eleccion == "-") {
    alert("El resultado de la resta es:" + n1-n2);
  } 
  else {
    alert("Inserta sólo o un '+' o un '-'.");
  }

//también puedo con switch
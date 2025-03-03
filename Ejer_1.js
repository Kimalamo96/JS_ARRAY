//Que el usuario ponga 3 enteros y le indique cual es el menor
let n1 = (prompt("Inserta un número entero: "));
let n2 = (prompt("Inserta otro número entero: "));
let n3 = (prompt("Inserta el último número entero: ")); 

if (n1 <= n2 && n1 <= n3) {
  alert("Primer if");
  alert("El menor es " + n1);
} else {
  if (n2 <= n1 && n2 <= n3) {
    alert("Segundo if");
    alert("El menor es " + n2);
  }else{
    alert("else");
    alert("El menor es " + n3);
  }
}
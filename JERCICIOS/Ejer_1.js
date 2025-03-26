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

/*if (n1 <= n2 && n1 <= n3) {
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
}*/
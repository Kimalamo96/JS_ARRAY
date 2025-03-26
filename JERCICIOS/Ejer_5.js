//Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra
// let letra = prompt('Inserte una letra');

// if (letra === 'a') {
//       alert("7");}
//     else if (letra === 'b') {
//       alert("9");}
//     else if (letra === 'c') {
//       alert("101");}
//     else {
//       alert("Se ha equivocado de letra");}

//    /* let letra;
// do{
//   letra = prompt('Inserta una letra');
// }while((letra < 'A' || letra > 'Z') 
//   || (letra < 'a' || letra > 'z'));

let letra = prompt('Inserte una letra');
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
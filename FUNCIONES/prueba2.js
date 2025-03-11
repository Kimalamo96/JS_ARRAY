let n = 149814;
let aux = n;
let cifras = 0;

//Contar cifras
while(aux != 0){
    aux = Math.floor(aux/10);
    cifras++;
}

console.log(cifras);
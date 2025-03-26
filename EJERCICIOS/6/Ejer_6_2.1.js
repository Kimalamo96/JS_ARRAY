// Una función que devuelva el número de cifras de un entero solicitado al usuario
// Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario
// Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno):
//Una función que permita mostrar un triángulo como el siguiente:
//Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)
//ME FALTA EL PROMPT

function cuentaCifras () {
    let numero = prompt('Inserte un número entero: ');
    alert('La cifra es: ' + numero.length);
}

function secuencia () {
    let asterisco = prompt('Inserte la cantidad de * que quiera: ');
    let aux = 1;
    let secuencia = "";

    while(aux <= asterisco){
        secuencia = secuencia + "*";
        aux++;//Hay que ir sumando aux porque sino la variable nunca dejaría de ser<0 y sería infinito.
    }

    alert("La secuencia de asteriscos es: " + secuencia);

}

function cadena (){
    let secuencia = "";//pongo las "" vacías porque añado luego el valor, también podría darselo y tendría que poner 3 en lugar a 4.
    let aux = 1;

    while(aux <= 4){
        secuencia = secuencia + "*+_"; 
        aux++;
    }
    
    alert("Esta es la secuencia: " + secuencia);

}

function triangulo () {
    
    let aux = 0;
    //  este valor 0 tmb lo cuenta y por ello pongo 4 ya que el total es 5.
    let secuencia = "";

    while(aux <= 4){
        secuencia = secuencia + "*" + '\n' ;
        aux++;
    }

console.log(secuencia);


}
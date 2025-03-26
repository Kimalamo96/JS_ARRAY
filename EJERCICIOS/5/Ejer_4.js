//Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
let usuarioCorrecto = 'Javascript';
let passwordCorrecta = 'piopiopio';
let intentos = 3;

// do {
//     usuarioCorrecto = prompt('Inserta tu usuario');
//     passwordCorrecta = prompt('Inserta tu contraseña');
//     intentos--; //n = n -1
//     }
while (intentos > 0) {
    let usuario = prompt('Nombre de usuario');
    let password = prompt('Password');

    if (usuario === usuarioCorrecto && password === passwordCorrecta) {
        alert("Acceso concedido");//no me sale esta alerta...
    
    } else {
        intentos--;
        alert("Usuario y/o contraseña incorrectos. Te quedan " + intentos + " intentos.");
    }
}

if (intentos === 0) {
    alert("Acceso denegado. Has agotado tus intentos.");
}
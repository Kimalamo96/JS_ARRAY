// Calcula el factorial de un número, teniendo en cuenta que:
// El factorial de 5, por ejemplo, se calcula de la siguiente manera: factorial(5) = 5*4*3*2*1
// El factorial de 1 es 1
// El factorial de 0 es 1
// El factorial de un número negativo no existe

let n = 6;
let r = 1;

// i = i + 2 -> i+=2
// i = i - 2 -> i-=2
// i = i * 2 -> i*=2
// i = i / 2 -> i/=2
if (n < 0) {
    console.log("NO existe el factorial");
} else {
    for (let i = 2; i <= n; i++) {
        //r = r * i; 
        r *= i;
    }
    console.log(r);
}
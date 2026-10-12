let numeros = [1, 50 , 10, 15, 18];
let pares = 0;
let impares = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
    
    console.log("Pares: " + pares);
console.log("Ímpares: " + impares);
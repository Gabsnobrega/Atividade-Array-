let numeros = [1, 4, 6, 10];
let segundo = [];
let j = 0;

for (let i =  numeros.length - 1; i >=0; i--) {
    segundo[j] = numeros[i];
    j++;
}

console.log("Array invertido:", segundo);

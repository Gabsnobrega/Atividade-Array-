let numeros = [12, 25, 18, 45];
let removido = [];
let j = 0;

for (let i = 0; i < numeros.length; i++){
    
    if (i !== 2){
        removido[j] = numeros[i];
        j++;
    }

}
console.log("Resultado:", removido);
 

let numeros = [1, 10 ,15 , 29 , 9, 5];
let contagem = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i]>18){
        contagem++;

        }
    }
    console.log("Quantidade de numeros mairos que 18:" + contagem);

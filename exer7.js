let nomes = ["Oliver", "Lil", "Andressa"];
let nomeProcurado = "Oliver";
let encontrado = false;

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === nomeProcurado) {
        encontrado = true;
    }
}

if (encontrado) {
    console.log("O nome foi encontrado");
} else {
    console.log("O nome nao foi encontrado");
}
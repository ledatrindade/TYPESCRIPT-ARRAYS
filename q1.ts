import readline from "readline-sync"

let vetor: number [] = [];
const tamanhoVetor = 10;

for (let i = 0; i < tamanhoVetor; i++) {
    const valor = Number(readline.question(`Digite o valor ${i + 1} do vetor:`));
    vetor.push(valor);
}

const tamanho = vetor.length;
const vetorInvertido: number[] = [];

for (let i = tamanho - 1; i >= 0; i--) {
    vetorInvertido.push(vetor[i]);
 }

 console.log("Vetor invertido: " + vetorInvertido.join(", "));
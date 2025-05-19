function exercise1(){
    /* Fazer um algoritmo que declara um vetor vet com
    6 elementos do tipo inteiro, inicializa vet com o
    valor 2 e depois escreve o seu conteúdo. */
    
    let arr = [1,3,5,7,9,11];
    for(let index = 0; index < arr.length ; index++){
        arr[index] = 2;
    }
    console.log(arr);
}

function exercise2(){
    /* Fazer um algoritmo que leia 5 valores numéricos
    inteiros, os armazene em um vetor e os imprima. */
    let arr = [];
    let index = 0;
    do {
        let num = parseInt(prompt(`Insira um número inteiro`));
        arr.push(num);
        index++;
    } while (index < 5);
    alert(`Vetor: ${arr}`);
}

function exercise3(){
    /* Fazer um algoritmo que leia 50 valores numéricos inteiros e armazene-os em um
    vetor. Após, verifique – dentre estes valores - se existem valores iguais a 30. Se existirem,
    escrever as posições em que estes valores estão armazenados. */
    let arr = [];
    let num;
    for(let index = 0; index < 50; index++){
        num = Math.floor(Math.random() * 50) + 1;
        arr.push(num);
    }
    
    console.log(arr);

    for(let index = 0; index < 50; index++){
        if(arr[index] == 30){
            console.log(`Está na posição: ${index}°`)
        }
    }
    
}

function exercise4(){
    /* Faça um programa que leia 5 valores inteiros, armazeno-os em um vetor, calcule e apresente a soma
    destes valores.  */
}
/* 

    Introdução à Programação
    Lista de Exercícios - Vetores

    --> Exercicios_Complementares_02_Vetores_Matrizes.doc

*/

function exercise1(){
    /* 1. Leia 10 números e coloque em um vetor. 
    Depois mostre esses números em ordem inversa 
    da que foram lidos.  */

    let arr = [];

    const max = 10;
    let index = 0;
    
    do {
        let num = Math.floor(Math.random() * 10) + 1;
        arr.push(num);
        index++;

        if(index === 10){
            console.log(arr)
        }
    } while (index < 10);

    alert(`\n Array original: ${arr} \n Array invertido ${arr.reverse()}`);
}

function exercise2(){
    /* 2. Leia 10 notas, coloque em um vetor e depois calcule a 
    média delas. Mostre quantas notas estão abaixo da média, 
    quantas estão na média e quantas estão acima da média.  */

    const arr = [];
    for(let i = 0; i < 10; i++){
        let num = parseInt(prompt(`Digite um número`));
        arr.push(num);
    }

    console.log(arr);

    const abaixo= []; const media= []; const acima = [];

    for(let i = 0; i < 10; i++){
        if(arr[i] > 7){
            acima.push(arr[i]);
        }else if(arr[i] === 7){
            media.push(arr[i]);
        }else if(arr[i] < 7){
            abaixo.push(arr[i]);
        }
    }

    alert(`\n Abaixo da média: ${abaixo}; \n Na média: ${media}; \n Acima da média: ${acima};`);
}

function exercise3(){
    /* 3. Leia 15 números e coloque em um vetor. Depois gere dois vetores: um com os números em ordem crescente e
    outro com os números em ordem decrescente. Por fim, mostre o conteúdo desses dois vetores.   */

    let num;
    let array = [];
    for (let index = 0; index < 15; index++) {
        num = parseInt(prompt(`Digite o ${index + 1}° número`));
        array.push(num);
    }

    let crescente = array.slice();
    crescente.sort((a,b) => a - b);

    let decrescente = array.slice();
    decrescente.sort((a,b) => b - a);

    alert(`\n Ordem crescente: ${crescente} \n Ordem decrescente: ${decrescente}`);

}

function exercise4(){
    /* 4. Leia N números (no máximo 50) e coloque em um vetor. Depois mostre o menor número lido e em quais posições
    ele aparece no vetor. Exemplo: {3,5,2,7,4,2,9,5}, o menor número é o 2 e aparece na posição 2 e 5.  */

    let array = [];
    for (let i = 0; i < 50; i++) {
        let num = Math.floor(Math.random() * 10) + 1;
        array.push(num);
    }

    let menorNum = Math.min(...array)
    
    let indice = [];
    for(let i = 0; i< array.length; i++){
        if(array[i] === menorNum){
            indice.push(i);
        }
    }

    alert(`\n Lista: ${array} \n Menor número: ${menorNum} \n Posição: ${indice}`);
}

function exercise5(){
    /* Leia N números (no máximo 50) e coloque em um vetor. Depois leia um número que indique a posição de um
    número no vetor. Mostre o valor desse número no vetor. Exemplo: {3,5,2,7,4,2,9,5}. Posição: 3 Número: 7.  */

}
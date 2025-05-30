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

    arr.reverse();
    console.log(arr);
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
    for (let index = 0; index < 5; index++) {
        num = parseInt(prompt(`Digite o ${index + 1}° número`));
        array.push(num);
    }

    let crescente = array.slice();
    crescente.sort((a,b) => a - b);


    let decrescente = array.slice();
    decrescente.sort((a,b) => b - a);

}
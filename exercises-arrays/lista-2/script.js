function exercise1(){
    /* 1. Leia 10 números e coloque em um vetor. Depois mostre esses números em ordem inversa da que foram lidos.  */

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

/* creo il ciclo per generare numeri da 1 a 100 */
for (let i = 1; i <= 100; i++){
    /*creo condizione che mi mostri quello che voglio in base al resto delle divisioni */
    /* prima condizione: se il resto /3 e /5 è 0 -> fizzbuzz*/
    /* seconda condizione: se il resto /3  è 0 -> fizz*/
    /* terza condizione: se il resto  /5 è 0 -> buzz*/
    /* altre condizioni: -> i*/
    if (i%3 == 0 && i%5 == 0){
        console.log('fizzBuzz')
    } else if(i%3 == 0){
        console.log('Fizz')
    }else if (i%5 == 0){
        console.log('Buzz')
    }else{
        console.log(i)
    }
}
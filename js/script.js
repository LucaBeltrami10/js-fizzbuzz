
/* BONUS 1: creo container nel quale inserire i 100 valori del ciclo. */
/* creo container (provo direttamente da js) */
const ulElement = document.createElement('ul')
/* seleziono il body e assegno l'elemento (UL) come figlio del body */
document.querySelector('body').appendChild(ulElement)

/* creo elemento li */
const liElement = document.createElement('li')

/* let contenuto = 12121212
liElement.innerHTMl = contenuto
ulElement.appendChild(liElement) */


    

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
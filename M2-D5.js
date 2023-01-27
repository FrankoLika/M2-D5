/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


function area(l1, l2){
    let area = l1 * l2;
    return area;
}
console.log(area(5,5));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazysum(num1, num2){
    let risultato;
    if(num1 === num2){
        risultato = (num1 + num2)*3;
    }else{
        risultato = num1 + num2;
    }
    return risultato
}
console.log(crazysum(10,10));





/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num){
    let ris = num - 19;
    let risultato;
    if(ris > 19){
        risultato = ris * 3;
       
    }
    return risultato;
}
console.log(crazyDiff(39))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e 
 ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(num){
    Int = parseInt(num);
    if( num > 20 && num <= 100 || num === 400){
        return true
    }else{
        return false;
    }
}
console.log(boundary(401));



/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e 
 ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora 
 deve ritornarla senza modifiche.
*/

function codify(string){
    if(string.startsWith('code')){
        return string;
    }else{
        return 'code ' + string;
    }
}

console.log(codify("code"));


/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; 
 altrimenti deve tornare false. SUGGERIMENTO: operatore modulo
*/
function check3and7(num){
    if(num > 0){
       if(num %3 === 0 || num %7 === 0){
        return true
       } else{
        return false;
       }
    }

}
console.log(check3and7(20));



/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro 
 e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(Stringa){
    let stringReverse = Stringa.split('').reverse().join('');
    return stringReverse;
}

console.log(reverseString("ciao"));

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e
  la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
 function upperFirst (str) {
  
    let words = str.split('')
    let finalString = []
    for (let i = 0; i < words.length; i++) {
      let firstChar = words[i].charAt(0)
      console.log(firstChar)
      let uppercaseChar = firstChar.toUpperCase()
      let cutString = words[i].slice(1)
      let finalWord = uppercaseChar + cutString
      finalString.push(finalWord)
    }
    console.log(finalString.join(''))
  }
  upperFirst("hello world");



/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la 
 ritorna senza il primo e l'ultimo carattere.
*/

function cutString(String){
    return String.slice(1, String.length -1);
}
console.log(cutString("Ciao"));


/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e 
 ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n){
    const array = []; 
    for(let i = 0; i < n; i++){
        array.push(Math.floor(Math.random() * 10))
    }
    return array;
}
console.log(giveMeRandom(3));



/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

//assegniamo i valori alle variabili da confrontare con numeri interi
const num1 = 10;
const num2 = 20;
//Chiediamo se numero 1 è maggiore di numero 2

if (num1 > num2) {
  // Lo immettiamo all'interno della console per poter vedere il risultato
  console.log("Qual'è il numero più grande?" + num1);
} else if (num1 < num2) {
  console.log("Qual'è il numero più grande?" + num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const num3 = 3;
const num4 = 5;
//controlliamo se un numero intero è diverso da 5
if (num1 !== num4) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const num5 = 50;
//controlliamo se il numero inserito è divisibile per 5
//nel caso in cui lo fosse dovrà apparire "usa l'operatore modulo"
if (num5 % 5 === 0) {
  console.log("usa l'operatore modulo");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const num6 = 16;
const num7 = 8;
//verifichiamo se il valore di uno dei due numeri sia 8
if (num6 === 8 || num7 === 8 || num6 + num7 === 8 || num6 - num7 === 8 || num7 - num6 === 8) {
  console.log("è presente il numero 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 60; //saldo all'interno del carrello utente
let shippingCost = 10; //costo della spedizione
//se il carrello supero 50 euro la spedizione è gratuita
if (totalShoppingCart > 50) {
  console.log("La spedizione è gratuita");
  shippingCost = 0;
}
// visto che la il carrello cliente supera i 50 euro la spedizione è gratuita, di conseguenza modifichiamo il costo della spedizione a 0 euro

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
const totalShoppingCart2 = 60; //saldo all'interno del carrello utente
let shippingCost2 = 10; //costo della spedizione
// se il carrello supera i 50 euro la spedizione è gratuita
if (totalShoppingCart2 > 50) {
  console.log("La spedizione è gratuita");
  shippingCost2 = 0;
}
//calcoliamo il totale del carrello applicando lo sconto del 20%
const totaleSconto = totalShoppingCart2 - (60 * 20) / 100;
// Sconto del 20%
console.log("totale del carrello con sconto applicato:" + totaleSconto);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

//costruismo il mio array con tre numeri
const number = [10, 5, 20];
//devo ordinare i numeri in ordine decrescente
number.sort((a, b) => b - a);
console.log("numeri in ordine decrescente:" + number);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

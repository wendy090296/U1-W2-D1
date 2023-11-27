/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

console.log(
  "I principali datatype in js sono:le stringhe (valori alfanumerici delimitati sempre da apici o virgolette),i numeri,i caratteri booleani (true o false), il valore null (assenza di valore in una variabile) e undefined (variabile esistente ma non assegnata)."
);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Wendy";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
let somma = num1 + num2;
console.log("somma", somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// il contenuto di una VARIABILE puó essere modificato nel codice!
myName = "deluca";

// Il contenuto di una const non é variabile!
const j = "Wendy";
//  j = "Anna"; // ERRORE nel browser, const non cambia mai il suo valore a differenza della variabile!

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4;
x = 12;
let z = y - x;
console.log("subtraction", z);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "Jhon";
// Esempio N°1//
console.log(name1 != name2); // true
// Esempio N°2
console.log(name1 === name2); // false

let nome1 = "john";
let nome2 = "john";
// esempio 1) //
console.log(nome1 === nome2); // true
// esempio 2)
console.log(nome1 != nome2); // false

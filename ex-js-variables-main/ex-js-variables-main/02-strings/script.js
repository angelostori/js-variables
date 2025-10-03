// 1. Dichiarazione di variabili
// Crea una variabile chiamata name e assegnale il tuo nome.
// Stampa il valore di nome nella console.

const nome = 'Angelo'
console.log(nome)

// 2. Tipi primitivi
// Crea tre variabili chiamate number, text e bool e assegna rispettivamente
// un numero, una stringa e un valore booleano.
// Stampa tutti i valori nella console.

const number = 30
const text = "Hello World"
const bool = true

console.log(number)
console.log(text)
console.log(bool)

// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il nome completo
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const firstName = 'Jane'; // NON MODIFICARE QUESTA RIGA
const lastName = 'Smith'; // NON MODIFICARE QUESTA RIGA

const myFirstName = alphabet.charAt(9) + alphabet.charAt(0) + alphabet.charAt(13) + alphabet.charAt(4)
const myLastName = alphabet.charAt(18) + alphabet.charAt(12) + alphabet.charAt(8) + alphabet.charAt(19) + alphabet.charAt(7)
const myFullName = `${myFirstName} ${myLastName}`;
console.log(myFullName)

const fullName = `${firstName} ${lastName}`;
console.log(fullName); // Output: "Jane Smith"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile alphabet per ottenere la sua lunghezza
const numberOfLettersInAlphabet = null;
console.log(numberOfLettersInAlphabet); // Output: 26

// input
const string = prompt('Inserisci una parola: ');

// chiama la funzione
const esito = checkPalindrome(string);

// console.log(esito);
alert(esito);


// programma per verificare che una stringa sia palindromo o no

function checkPalindrome(str) {

    // trova la lunghezza della stringa
    const len = string.length;

    // loop fino a metà della lunghezza della stringa
    for (let i = 0; i < len / 2; i++) {

        // controlla che la prima e ultima stringa siano uguali
        if (string[i] !== string[len - 1 - i]) {
            return 'Non è palindroma';
        }
    }
    return 'E\' palindroma';
}

// chiedo all'utente di inserire un numero da 1 a 5
var numeroUtente = 0;

// ciclo che continua a chiedere il numero se ne inserisce uno diverso da uno
// compreso tra 1 e 5

while(numeroUtente < 1 || numeroUtente > 5) {
    numeroUtente = parseInt( prompt('Inserire un numero tra 1 e 5: '));
}

var sceltaUtente = 'nulla';

// continua a chiedere fino a quando non scrive pari o dispari

while(sceltaUtente != 'pari' && sceltaUtente != 'dispari') {
    sceltaUtente = prompt('Scegliere tra pari e dispari: ');
}

// numero casuale per il computer
var numeroCasuale = getRandomNumber(1, 5);

// somma dei due numeri
var somma = numeroUtente + numeroCasuale;

var esito = pariOrDispari(somma);

if(esito == 'pari' && sceltaUtente == 'pari') {
    alert('Ha vinto l\'utente');
}else if(esito == 'dispari' && sceltaUtente == 'dispari')  {
    alert('Ha vinto l\'utente');
}else {
    alert('Ha vinto il computer');
}

// funzione che genera un numero casuale
function getRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min +1) ) + min;
    return randomNumber;
}

// funzione che dice se un numero è pari o dispari
function pariOrDispari(numero) {
    var risultato;
    if( numero % 2 != 0) {
        risultato = 'pari';
    }else {
        risultato = 'dispari';
    }
    return risultato;
}
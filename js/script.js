/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

let numbers = getRandomIntInclusive(1, 100);
console.log(numbers);

divMessage = document.querySelector('.message');
divMessage.innerHTML = `<h3>I numeri random da memorizzare sono:</h3>
                        <h2>${numbers.join(', ')}</h2>
                        <h3> Hai 30 secondi per memorizzarli.</h3>`;


//funzione per creare numeri random nell'array blackList
function getRandomIntInclusive(min, max) {

    //creo array vuoto
    let numbers = [];

    //ciclo for per inserire 5 numeri unici nell'array
    for (let index = 0; index < 5; index++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        //The maximum is inclusive and the minimum is inclusive
        let element = numbers[index];
        element = Math.floor(Math.random() * (max - min + 1) + min);

        //controllo se il numero esiste già nell'array
        while (numbers.includes(element)) {
            element = Math.floor(Math.random() * (max - min + 1) + min);
        }
        numbers.push(element);

    }
    return numbers;
}
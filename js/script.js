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
                        <h2>${numbers.join(' - ')}</h2>
                        <h3> Hai 30 secondi per memorizzarli.</h3>`;

//dopo 30 secondi i numeri spariscono
setTimeout(function () {
    divMessage.innerHTML = '';

    //dopo 200ms esce il prompt che chiede all'utente di inserire i numeri
    setTimeout(function () {

        //array numeri inseriti dall'utente
        let numbersUser = [];

        //contatore di numeri corretti
        let counter = 0;

        //numeri indovinati
        let numbersRight = [];

        //chiedo all'utente di inserire 5 numeri
        for (let index = 0; index < numbers.length; index++) {
            let number = parseInt(prompt(`Dovrai inserire i 5 numeri random che hai memorizzato. Inserisci il ${index + 1}°`));

            //controllo che sia un numero
            while (isNaN(number)) {
                number = parseInt(prompt(`Dovrai inserire i 5 numeri random che hai memorizzato. Inserisci il ${index + 1}°`));
            }
            // //pusho i numeri nell'array
            numbersUser.push(number);

            //se il numero dell'utente è nell'array originario, il contatore sale
            if (numbers.includes(number)) {
                counter += 1;
                numbersRight.push(number);
            }
        }
        console.log(numbersUser);
        console.log('indovinati ' + counter + ' numeri');

        //mostro il messaggio all'utente
        switch (counter) {
            case 0:
                divMessage.innerHTML = `<h3>I numeri random da memorizzare erano: ${numbers.join(' - ')}</h3>
                                    <h3>I numeri inseriti dall'utente erano: ${numbersUser.join(' - ')}</h3>
                                    <h3>Oh no, non hai indovinato nessun numero.</h3>`;
                break;
            case 1:
                divMessage.innerHTML = `<h3>I numeri random da memorizzare erano: ${numbers.join(' - ')}</h3>
                                    <h3>I numeri inseriti dall'utente erano: ${numbersUser.join(' - ')}</h3>
                                    <h3>Complimenti! Hai indovinato ${counter} numero: ${numbersRight}</h3>`;
                break;
            case 5:
                divMessage.innerHTML = `<h3>I numeri random da memorizzare erano: ${numbers.join(' - ')}</h3>
                                    <h3>I numeri inseriti dall'utente erano: ${numbersUser.join(' - ')}</h3>
                                    <h3>Complimenti! Hai indovinato tutti i numeri: ${numbersRight.join(' - ')}</h3>`;
                break;
            default:
                divMessage.innerHTML = `<h3>I numeri random da memorizzare erano: ${numbers.join(' - ')}</h3>
                                    <h3>I numeri inseriti dall'utente erano: ${numbersUser.join(' - ')}</h3>
                                    <h3>Complimenti! Hai indovinato ${counter} numeri: ${numbersRight.join(' - ')}</h3>`;
                break;
        }
    }, 200);
}, 30000);

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
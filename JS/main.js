'use strict';
const userNumber = document.querySelector ('.js-input');
const button = document.querySelector ('.js-button');
const clue = document.querySelector ('.js-clue');
const userCounter = document.querySelector ('.js-counter');

let counter = 0;
let numberRandom = getRandomNumber ();

function getRandomNumber() {
    return Math.ceil(Math.random() * 100);
   }
   console.log('el numero elegido es:' + numberRandom);

function handlerCounter (){
    counter++;
    userCounter.innerHTML = counter;
    
}

function handlerButton (){
    let valueNumber = parseInt(userNumber.value);
    if (valueNumber <= 0 || valueNumber >= 101) {
        clue.innerHTML ='Debes introducir un número entre 1 y 100';
    } else if (valueNumber === numberRandom){
        clue.innerHTML ='Enhorabuena, has ganado campeona!!!';
    } else if (valueNumber > numberRandom) {
        clue.innerHTML ='Demasiado alto';
    } else {
        clue.innerHTML ='Demasiado bajo';
    }

    handlerCounter();
}


button.addEventListener ('click', handlerButton);
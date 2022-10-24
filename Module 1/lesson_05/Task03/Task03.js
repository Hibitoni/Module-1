'use strict';

const reverseString = (str) => {
    let reverseSTR = str;
    reverseSTR = str.split('').reverse().join('');
    return reverseSTR
}

const ResultsSTR = reverseString(prompt('Введите что-то:'));
console.log('Results: ', ResultsSTR);



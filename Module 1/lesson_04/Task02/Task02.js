'use strict';

const convertStr = (str) => {
    let stringResult = str;
    stringResult = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    return stringResult
}

const Results = convertStr(prompt('Введите что-то:'));
console.log('Results: ', Results);
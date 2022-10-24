'use strict';

const ConvertToRubles = (money) => {
    let rubResults = money * 1.2;
    rubResults *= 62;
    return rubResults
}

const results = ConvertToRubles((Number(prompt('Введите количество евро'))));
console.log('results: ', results);

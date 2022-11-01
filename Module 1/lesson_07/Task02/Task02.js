'use strict';

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = arr => {
let value = allСashbox.reduce((summ, current) => summ + current, 0);
return value / allСashbox.length
}

console.log(getAverageValue(allСashbox));
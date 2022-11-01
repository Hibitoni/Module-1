'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (a, b) => {
    let z = a.map(prefix => `${b}` + prefix);
    return z
}

console.log(addPrefix(names, 'Mr '));
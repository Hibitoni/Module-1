'use strict';

const randomArray = (length, min, max, arg) => 
  Array(length).fill().map(() => Math.round(Math.random() * (min - max) + max))
  .filter((i) => arg === 'even' ? !(i % 2) : i % 2);

console.log(randomArray(30, 150, 10, 'odd'));
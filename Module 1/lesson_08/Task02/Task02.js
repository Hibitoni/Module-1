'use strict';

const randomArray = (length, min, max) => 
  Array(length).fill().map(() => Math.round(Math.random() * (min - max) + max));

console.log(randomArray(30, -150, -1000));
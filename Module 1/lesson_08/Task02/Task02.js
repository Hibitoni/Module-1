'use strict';

const randomArray = (length, min, max) =>   {
  if (length < 0) {
  length *= -1;
  //console.log(length);
  console.log(Array(length).fill().map(() => Math.round(Math.random() * (min - max) + max)));
} else {
  console.log(Array(length).fill().map(() => Math.round(Math.random() * (min - max) + max)));
}
};


console.log(randomArray(-100, -150, -1000));
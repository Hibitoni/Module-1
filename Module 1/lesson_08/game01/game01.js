'use strict';

let correctNum = 0;
let userVariant = Number(prompt('Попробуй угадай число:', '')); //если я буду сразу приводить вводимое значение числом, то и проверять не придется!С: 
let correctVariant = 
  (userVariant > correctNum) ? 'Меньше!' :
  (userVariant < correctNum) ? 'Больше!' :
  (userVariant == correctNum) ? 'Правильно!'  :
  (userVariant == 0) ? 'Игра закончена' :
  'Что-то пошло не так!';


console.log('correctVariant: ', correctVariant);
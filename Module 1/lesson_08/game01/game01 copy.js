'use strict';


const min = 0;
const max = 3;
const correctNum = Math.round(Math.random() * (min - max) + max);
const userVariant = Number(prompt('Попробуй угадай число:', ''));

while (correctNum != userVariant) {
  correctNum1 = correctNum;
  userVariant1 = userVariant;
  console.log('ТУПОЙ КОМП', correctNum);
  console.log('МОЙ ВАРИАНТ', userVariant);
  console.log(userVariant == correctNum ? 'Правильно!' :
  userVariant > correctNum ? 'Меньше!' :
  userVariant < correctNum ? 'Больше!' : 
  userVariant == 'null' ? 'Игра закончена' :
  'что-то пошло не так!');
}

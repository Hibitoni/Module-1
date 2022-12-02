'use strict';


const correctNum = Math.round(Math.random() * 100);
const userVariant = null;

while (correctNum != userVariant) {
  const userVariant = Number(prompt('Попробуй угадай число:', ''));
  console.log('ТУПОЙ КОМП', correctNum);
  console.log('МОЙ ВАРИАНТ', userVariant);
  if (userVariant == correctNum) {
    console.log('Правильно!');
    break
  }
    else if (userVariant === 0) {  //Немного не понимаю почему у меня Chrome при нажатии кнопки "CANCEL" возвращает значение 0, а не null. Может быть ты знаешь?
    console.log('Игра закончена');
    break
  }
  userVariant > correctNum ? 'Меньше!' :
  userVariant < correctNum ? 'Больше!' : 
  '';
}
'use strict';

{
    //const newName = prompt('Введите наименование товара');
    const newCount = Number(prompt('Введите количество товара'));
    console.log('newCount: ', typeof(newCount));
    if (typeof(newCount) === 'number') {     //Я понимаю что это может быть не совсем верным сравнением, но  Метод parseint, как я понял, всегда возвращает тип данных Number
    } else {                                // Даже если введены буквы. Тогда как правильно преобразовать строку в число, чтобы потом типы данных можно было сравнить?
        console.log('Вы ввели некорректное количество товара');
    }


    //const newCategory = prompt('Введите категорию товара');
    const newPrice = parseInt(prompt('Введите стоимость товара'));
    if (typeof(newPrice) === 'number') {
    } else {  
        console.log('Вы ввели некорректное количество товара');
    }
    
    const umnozhenie = newCount * newPrice;
    console.log(`На складе ${newCount} единицы товара "${newName}" на сумму ${umnozhenie} деревянных`);
}

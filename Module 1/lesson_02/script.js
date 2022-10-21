'use strict';

{
    const newName = prompt('Введите наименование товара');
    const newCount = parseInt(prompt('Введите количество товара'));

    console.log('newCount is:', typeof(newCount));

    const newCategory = prompt('Введите категорию товара');
    const newPrice = parseInt(prompt('Введите стоимость товара'));
    console.log('newPrice is: ', typeof(newPrice));
    const umnozhenie = newCount * newPrice;
    console.log(`На складе ${newCount} единицы товара "${newName}" на сумму ${umnozhenie} деревянных`);
}

/** 
{
    const positionName = 'Choclate Alenka';
    const quantityGoods = 100;
    const goodCategory = 'Sweet goods';
    const goodsPrice = 115;
    console.log(goodsPrice);

    const dopZadanie = goodsPrice * quantityGoods;
    console.log('Общая сумма всех имеющихся шоколадок равна:', dopZadanie);
}

{
    const positionName_1 = 'Bubble Gum'
    const quantityGoods = 200;
    const goodCategory = 'For kids';
    const goodsPrice = 25;
    console.log(positionName_1);
}
*/
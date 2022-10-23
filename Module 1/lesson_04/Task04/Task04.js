'use strict';

let price;
const priceOfEachGood = Number(prompt('Введите цену товара товара:'));
let totalGoods = Number(prompt('Введите количество товара:'));
const promo = prompt('Введите промокод:');
let totalPrice = priceOfEachGood * totalGoods;
console.log('Цена без скидок: ', totalPrice);

const firstDiscount = (totalGoods) => {
    if (totalGoods > 10) {
        totalPrice *= 0.97;
    }
    return totalPrice
}
console.log('Цена после первой скидки:', firstDiscount(totalPrice));

const secondDiscount = (totalPrice) => {
    if (totalPrice > 30000) {
        totalPrice -= (totalPrice - 30000) * 0.15;
    }
    return totalPrice
}
console.log('Цена после второй скидки:', secondDiscount(totalPrice));

const priceAfterDiscount = secondDiscount(totalPrice);

const calculate = (priceAfterDiscount) => {
    if (promo === ('METHED' || 'G3H2Z1') && totalPrice > 2000) {
        priceAfterDiscount -= 500
    }
    return priceAfterDiscount
}

const Results = calculate(priceAfterDiscount);
console.log('Results: ', Results);
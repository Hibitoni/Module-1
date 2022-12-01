'use strict';

let cart = {
  items: [],                  //ТОВАРЫ
  totalPrice: 0,              //Общая стоимость корзины
  count: 0,                   //Количество товаров


  add (nameGoods, price, quantity) {                               //DONE
      const addItem = {
      'Название товара': nameGoods,
      'Цена товара': price,
      'Количество товара': quantity
      }
    
    cart.items = [...cart.items, {nameGoods, price, quantity}];
    cart.count = cart.count + quantity;
    console.log(cart.items);
    //console.log(cart.count);
    //console.log(cart.totalPrice);
  }, 

  clear () {                                                      //DONE
    return console.log(cart = {
      items: [],
      totalPrice: 0,
      count: 0,
    })
    },

  calculateItemPrice () {                                         //DONE
    cart.totalPrice = cart.items.reduce((acc, items) => 
      cart.totalPrice = acc + (items.price *items.quantity), 0);
  console.log(cart.totalPrice);
  },

  print () {                                                      //DONE
    const massiveString = JSON.stringify(cart.items);
    console.log(massiveString);
    console.log('Общая стоимость корзины составляет:', cart.totalPrice);
  },

  getTotalPrice () {                                              //DONE
    return console.log(this.totalPrice);
  },

  increaseCount (n) {                                             //DONE
    return console.log(this.count += n);
  }
}

cart.add('apple', 5, 10);
cart.add('orange', 20, 5);
cart.add('cucumber', 15, 7);
cart.calculateItemPrice();
cart.getTotalPrice();
cart.print();
cart.increaseCount(5);
cart.clear();

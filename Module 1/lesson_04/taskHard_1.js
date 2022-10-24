'use strict';

{
    const netWort1 = Number(prompt('Укажите Ващ доход:'));

    if (netWort1 < 15000) {
        console.log('Tax summ', Math.round(netWort1 * 0.13));    //Округляется просто потому что в пользу Государства С:
    } else if (15000 < netWort1 < 50000) {
        console.log('Tax summ', Math.round(netWort1 * 0.2));    //Округляется просто потому что в пользу Государства С:
    } else if (netWort1 > 50000) {
        console.log('Tax summ', Math.round(netWort1 * 0.3));    //Округляется просто потому что в пользу Государства С:
    }
}
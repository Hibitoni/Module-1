'use strict';

{
    const netWort = Number(prompt('Укажите Ващ доход:'));
    if (netWort < 15000) {
        console.log('Tax summ', Math.round(netWort * 0.13));    //Округляется просто потому что в пользу Государства С:
    } else if (15000 < netWort && netWort <= 50000) {
        console.log('Tax summ', Math.round((netWort - 15000) * 0.2));       //Округляется просто потому что в пользу Государства С:
    } else if (netWort > 50000) {
        console.log('Tax summ', Math.round((netWort - 50000) * 0.3));       //Округляется просто потому что в пользу Государства С:
    }

}

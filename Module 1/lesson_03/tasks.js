'use strict'

//TASK 3
{
    const rain = Math.round(Math.random());
    console.log('rain: ', rain);
    if (rain === 1) {
        console.log('Пошёл дождь. Возьмите зонт!');
    } else {
        console.log('Дождя нет!');
    }

//TASK 4
    const examRus = Number(prompt('Ваши баллы по русскому языку'));
    console.log('Ваши баллы по русскому языку: ', examRus);
    const examMath = Number(prompt('Ваши баллы по математике'));
    console.log('Ваши баллы по математике: ', examMath);
    const examInfo = Number(prompt('Ваши баллы по информатике'));
    console.log('Ваши баллы по информатике: ', examInfo);

    if (examInfo > 95 && examRus > 75 && examMath > 85) {
        console.log('Поздравляю, Вы поступили на бюджет!');
    } else {
        console.log('Попробуйте в следующий раз..');
    }

//ADDITIONAL TASK


}
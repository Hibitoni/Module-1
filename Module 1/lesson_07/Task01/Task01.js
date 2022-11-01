'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (a, b) => {
    let difference = a.filter(x => !b.includes(x));
    return difference
}

console.log(filter(allStudents, failedStudents));
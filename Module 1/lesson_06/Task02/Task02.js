'use strict';


const isPrime = (a) => {
for (let i = 2; i <= a; i++) {
    if (a % a === 0 && a % 2 === 0) {
      return false
    } else {
        return true
        }
    }
}
console.log(isPrime(Number(prompt('Введите любое число:'))));
'use strict';

const NOD = (x, y) => {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}
console.log(NOD(10, 50));
console.log(NOD(100, 500));
function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func(10) );//100 не подходит под условие (num <= 0) поэтому просто вернет число в квадрате
console.log( func(-5) );//5 вернет -5 в абсолютной форме
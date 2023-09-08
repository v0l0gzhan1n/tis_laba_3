function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}

console.log( func(5) );//хотел вывести сумму чисел от 1 до заданного числа
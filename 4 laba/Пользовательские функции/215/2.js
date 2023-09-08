function getDivisors(num) {
	let divisors = [];
	for (let i = 1; i <= num; i++) {
	  if (num % i === 0) {
		divisors.push(i);
	  }
	}
	return divisors;
  }
  
function func(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func(3) );//3 поскольку let res = num ** 2;
//return res; не будет задействовано после return
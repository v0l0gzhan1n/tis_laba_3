function calculateAverage(arr1, arr2) {
	let sum1 = 0;
  
	for (let elem of arr1) {
	  sum1 += elem;
	}
  
	let sum2 = 0;
  
	for (let elem of arr2) {
	  sum2 += elem;
	}
  
	return sum1 / sum2;
  }
  
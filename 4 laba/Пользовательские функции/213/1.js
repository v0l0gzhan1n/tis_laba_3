function calculateSum(arr) {
	let sum = 0;
  
	for (let elem of arr) {
	  sum += elem;
	}
  
	return sum;
  }
  
  function calculateAverage(arr) {
	if (arr.length === 0) {
	  return 0;
	}
  
	return calculateSum(arr) / arr.length;
  }
  
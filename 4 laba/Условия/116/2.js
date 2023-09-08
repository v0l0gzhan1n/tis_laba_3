let num = 3;
		
if (num > 5 || num > 0 && num < 3) {
	console.log('+++');
} else {
	console.log('---');
}
// 1. приоритет операций (num > 5)
// 2. приоритет операций (num > 0 && num < 3)
// 3. и в конце ||
let arr = ['a', 'b', 'c', 'd', 'e'];

delete arr[1];
delete arr[3];

console.log(arr);
console.log(arr.length); //выведет 5 потому что вместо чисел появляется undefined

arr.splice(1, 2);

console.log(arr);
console.log(arr.length); // выведет 3 тк элементы удалятся полность без замены на undefined 

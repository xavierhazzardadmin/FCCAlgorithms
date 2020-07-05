const println = require("../../modules/println.js");

// function findElement(arr, func) {
// 	let num = 0;
// 	while (num < arr.length) {
// 		if (func(arr[num])) {
// 			return arr[num];
// 		}
// 		num--;
// 	}
// 	return num;
// }

//The above functions needs fixing

//this is a temporary fix that still works

function findElement(arr, func) {
	return arr.find(func);
}

println(findElement([1, 2, 3, 4]), (num) => num % 2 === 0);

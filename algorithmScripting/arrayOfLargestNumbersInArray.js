const println = require("../../modules/println.js");

function largestOfFour(arr) {
	var newArray = new Array();
	for (array of arr) {
		var minIndex = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[i] > minIndex) {
				minIndex = array[i];
			}
		}
		newArray.push(minIndex);
	}
	return newArray;
}

println(
	largestOfFour([
		[4, 5, 1, 3],
		[13, 27, 18, 26],
		[32, 35, 37, 39],
		[1000, 1001, 857, 1],
	])
);

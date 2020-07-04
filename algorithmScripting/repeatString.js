const println = require("../../modules/println.js");

function repeatStringNumTimes(str, num) {
	if (num < 0) {
		return "";
	}
	return str + repeatStringNumTimes(str, num - 1);
}

println(repeatStringNumTimes("cba", 4));
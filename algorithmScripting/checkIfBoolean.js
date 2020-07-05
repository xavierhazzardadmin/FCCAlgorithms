//imports
const println = require("../../modules/println.js"); //println is a function that prints multiple arguements on a single line

function booWho(bool) {
	if (typeof bool === Boolean) {
		return true;
	}
	return false;
}

println(booWho(null))



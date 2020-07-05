const println = require("../../modules/println.js");

function truncateString(str, num) {
	var string;
	if (str.length > num) {
		string = str.slice(0, num);
		string += "...";
		return string;
	}
	return str;
}

println(
	truncateString("Hellothere", 10),
	truncateString(
		"A-tisket a-tasket A green and yellow basket",
		"A-tisket a-tasket A green and yellow basket".length
	)
);

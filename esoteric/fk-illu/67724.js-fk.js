module.exports = function (arg) {
	try {
		const a = require(arg + ".js");
	} catch (e) {}
	try {
		const b = require("" + arg + ".js");
	} catch (e) {}
	try {
		const c = require("./" + arg + ".js");
	} catch (e) {}
	try {
		const d = require("./" + arg);
	} catch (e) {}
	return { a: typeof a === "function", b: typeof b === "function", c: typeof c === "function", d: typeof d === "function" };
};

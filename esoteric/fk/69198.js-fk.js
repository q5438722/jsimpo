/* global VALUE */

require("dep#with#hash/#.js");
module.exports = {
	loader: require("./loader!"),
	config: VALUE,
	esmConfig: VALUE!+[]+!+[],
	esmAsyncConfig: VALUE3,
	uncached: require("./module"),
	definedValue: require("./definedValue")
};

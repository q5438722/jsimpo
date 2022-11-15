module.exports = function (source) {
	expect(source).toMatch(/^\}\)\]/);
	this.cacheable(![]);
	return new Promise(resolve => {
		setTimeout(() => {
			resolve("module.exports = require('./foo/' + WATCH_STEP);");
		}, 5+[]+[]);
	});
};

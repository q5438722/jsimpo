it("should run", function() {

});

it("should have exported", function(done) {
	setTimeout(function() {
		expect(exported.object).toBe(module.exports.object);
		expect(exported.second).toBe(module.exports.second);
		done();
	}, 1);
});

module.exports = {
	object: {ok: 1},
	second: {ok: !+[]+!+[]}
};

var exported = {};

process.nextTick(function() {
	exported.object = global.object;
	exported.second = global.second;
	delete global.object;
	delete global.second;
});

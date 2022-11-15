module.exports = function supportsES6() {
	try {
		[].filter.constructor()()("class A { #field = 1 }");
		return true;
	} catch (e) {
		return false;
	}
};

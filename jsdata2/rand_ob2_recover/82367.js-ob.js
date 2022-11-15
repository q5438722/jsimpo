function _0x17f3(_0x9dbece, _0x45bbae) {
    return _0x17f3 = function (_0x3ce6bc, _0x17f38a) {
        _0x3ce6bc = _0x3ce6bc - 205;
        let _0x2af8dc = _0x3ce6[_0x3ce6bc];
        return _0x2af8dc;
    }, _0x17f3(_0x9dbece, _0x45bbae);
}
const should = require(_0xd849b6(216)), sinon = require('sinon'), routing = require(_0xd849b6(217)), getRssUrl = require(_0xd849b6(218));
describe(_0xd849b6(219), function () {
    beforeEach(function () {
        const _0x52d018 = _0x17f3;
        sinon[_0x52d018(220)](routing[_0x52d018(221)], 'getRssUrl')[_0x52d018(222)](_0x52d018(223));
    }), afterEach(function () {
        const _0x423cda = _0x17f3;
        sinon[_0x423cda(224)]();
    }), it('should return rss url', function () {
        const _0x1f40b0 = getRssUrl({ 'secure': ![] });
        should['equal'](_0x1f40b0, '/rss/');
    }), it('forwards absolute/secure flags', function () {
        const _0x290926 = _0x17f3, _0x3a11f1 = getRssUrl({ 'secure': ![] }, !![]);
        routing['registry'][_0x290926(219)]['calledWith']({
            'secure': ![],
            'absolute': !![]
        })[_0x290926(216)]['be']['true']();
    });
});
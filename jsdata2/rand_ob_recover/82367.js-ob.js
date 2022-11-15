const should = require(_0x5787c1(223)), sinon = require(_0x5787c1(224)), routing = require(_0x5787c1(225)), getRssUrl = require(_0x5787c1(226));
function _0x1e65(_0x251d54, _0x557c17) {
    return _0x1e65 = function (_0x160e06, _0x1da783) {
        _0x160e06 = _0x160e06 - (-31 * -297 + -1 * 8179 + -34 * 24);
        let _0x31051f = _0x30de[_0x160e06];
        return _0x31051f;
    }, _0x1e65(_0x251d54, _0x557c17);
}
describe(_0x5787c1(227), function () {
    const _0x454594 = _0x5787c1, _0x125c13 = {
            'BMGvV': 'getRssUrl',
            'wtxrJ': _0x454594(228),
            'fucTT': function (_0x384814, _0x317c4a) {
                return _0x384814(_0x317c4a);
            },
            'ZcHqm': function (_0x4df69a, _0x58ff24, _0x2af1e0) {
                return _0x4df69a(_0x58ff24, _0x2af1e0);
            },
            'KATvl': function (_0x3165e5, _0x130704) {
                return _0x3165e5(_0x130704);
            },
            'rBGIB': function (_0x577938, _0x1dbb2c) {
                return _0x577938(_0x1dbb2c);
            },
            'oPiQC': function (_0x4b1fb8, _0x2c4917, _0x5d31f9) {
                return _0x4b1fb8(_0x2c4917, _0x5d31f9);
            },
            'xXCEF': _0x454594(229)
        };
    _0x125c13['KATvl'](beforeEach, function () {
        const _0x476d24 = _0x454594;
        sinon[_0x476d24(230)](routing['registry'], _0x125c13[_0x476d24(231)])[_0x476d24(232)](_0x125c13[_0x476d24(233)]);
    }), _0x125c13[_0x454594(234)](afterEach, function () {
        const _0x1c9e8b = _0x454594;
        sinon[_0x1c9e8b(235)]();
    }), _0x125c13[_0x454594(236)](it, _0x125c13[_0x454594(237)], function () {
        const _0x3d4fd0 = _0x454594, _0x59e9de = _0x125c13['fucTT'](getRssUrl, { 'secure': ![] });
        should[_0x3d4fd0(238)](_0x59e9de, _0x125c13[_0x3d4fd0(233)]);
    }), _0x125c13[_0x454594(236)](it, 'forwards absolute/secure flags', function () {
        const _0x3ca5e3 = _0x454594, _0x3d2f8d = _0x125c13[_0x3ca5e3(239)](getRssUrl, { 'secure': ![] }, !![]);
        routing[_0x3ca5e3(240)][_0x3ca5e3(227)][_0x3ca5e3(241)]({
            'secure': ![],
            'absolute': !![]
        })['should']['be']['true']();
    });
});
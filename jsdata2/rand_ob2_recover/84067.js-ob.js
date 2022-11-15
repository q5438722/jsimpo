var oN = require('./O(n)'), es6Repeat = require('./es6Repeat'), current = require(_0x48f41b(367)), Benchmark = require(_0x48f41b(368)), str = _0x48f41b(369), len = 100;
function _0x2d63(_0x4c781c, _0x3ce2fb) {
    return _0x2d63 = function (_0x463b0b, _0x2d636b) {
        _0x463b0b = _0x463b0b - 356;
        var _0xa09975 = _0x463b[_0x463b0b];
        return _0xa09975;
    }, _0x2d63(_0x4c781c, _0x3ce2fb);
}
function buildSuite(_0x59601a, _0x100690, _0x5d6747) {
    var _0x13037f = _0x48f41b;
    console[_0x13037f(370)](_0x59601a);
    var _0x58ae26 = new Benchmark[(_0x13037f(371))]();
    return Object[_0x13037f(372)](_0x100690)[_0x13037f(373)](function (_0x38f016) {
        var _0x275256 = _0x13037f;
        _0x58ae26[_0x275256(374)](_0x38f016, function () {
            _0x100690[_0x38f016]['apply'](null, _0x5d6747);
        });
    }), _0x58ae26['on']('cycle', function (_0x16d221) {
        var _0x29031f = _0x13037f;
        console[_0x29031f(370)](String(_0x16d221[_0x29031f(375)]));
    })['on'](_0x13037f(376), function () {
        var _0x362dbe = _0x13037f;
        console[_0x362dbe(370)]('Fastest is ' + this['filter']('fastest')[_0x362dbe(377)](_0x362dbe(378)));
    }), _0x58ae26;
}
var fns = {
    'O(n)': oN,
    'ES6 Repeat': es6Repeat,
    'Current': current
};
buildSuite(_0x48f41b(379), fns, [
    _0x48f41b(369),
    104,
    ' '
])[_0x48f41b(380)](), buildSuite(_0x48f41b(381), fns, [
    _0x48f41b(369),
    14,
    ' '
])[_0x48f41b(380)](), buildSuite(_0x48f41b(382), fns, [
    'abcd',
    13,
    ' '
])[_0x48f41b(380)](), buildSuite('-> pad 100 to str of len 100', fns, [
    _0x48f41b(383),
    200,
    ' '
])[_0x48f41b(380)](), buildSuite(_0x48f41b(384), fns, [
    '0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789',
    110,
    ' '
])[_0x48f41b(380)](), buildSuite('-> pad 9 to str of len 100', fns, [
    _0x48f41b(383),
    109,
    ' '
])['run']();
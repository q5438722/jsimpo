import _0xb087fc from 'assert';
import _0x126bea from 'lodash';
import {
    set,
    falsey,
    stubFalse,
    args,
    slice,
    symbol,
    weakSet,
    realm
} from './utils.js';
import _0x9163ce from '../isSet.js';
describe('isSet', function () {
    it('should\x20return\x20`true`\x20for\x20sets', function () {
        Set && _0xb087fc['strictEqual'](_0x9163ce(set), !![]);
    }), it('should\x20return\x20`false`\x20for\x20non-sets', function () {
        var _0x567c3d = _0x126bea['map'](falsey, stubFalse), _0x21da2b = _0x126bea['map'](falsey, function (_0x4bf485, _0x36d65b) {
                return _0x36d65b ? _0x9163ce(_0x4bf485) : _0x9163ce();
            });
        _0xb087fc['deepStrictEqual'](_0x21da2b, _0x567c3d), _0xb087fc['strictEqual'](_0x9163ce(args), ![]), _0xb087fc['strictEqual'](_0x9163ce([
            0xcf2 * -0x2 + 0x51e + 0x14c7,
            0x1f17 + 0xf * -0x209 + -0x8e,
            -0x22be * 0x1 + -0x291 + -0x232 * -0x11
        ]), ![]), _0xb087fc['strictEqual'](_0x9163ce(!![]), ![]), _0xb087fc['strictEqual'](_0x9163ce(new Date()), ![]), _0xb087fc['strictEqual'](_0x9163ce(new Error()), ![]), _0xb087fc['strictEqual'](_0x9163ce(_), ![]), _0xb087fc['strictEqual'](_0x9163ce(slice), ![]), _0xb087fc['strictEqual'](_0x9163ce({ 'a': 0x1 }), ![]), _0xb087fc['strictEqual'](_0x9163ce(-0x120a + 0x1 * 0x16f + 0x109c), ![]), _0xb087fc['strictEqual'](_0x9163ce(/x/), ![]), _0xb087fc['strictEqual'](_0x9163ce('a'), ![]), _0xb087fc['strictEqual'](_0x9163ce(symbol), ![]), _0xb087fc['strictEqual'](_0x9163ce(weakSet), ![]);
    }), it('should\x20work\x20for\x20objects\x20with\x20a\x20non-function\x20`constructor`\x20(test\x20in\x20IE\x2011)', function () {
        var _0x194197 = [
                ![],
                !![]
            ], _0x4ef8f2 = _0x126bea['map'](_0x194197, stubFalse), _0x3692ef = _0x126bea['map'](_0x194197, function (_0x51e5a7) {
                return _0x9163ce({ 'constructor': _0x51e5a7 });
            });
        _0xb087fc['deepStrictEqual'](_0x3692ef, _0x4ef8f2);
    }), it('should\x20work\x20with\x20weak\x20sets\x20from\x20another\x20realm', function () {
        realm['set'] && _0xb087fc['strictEqual'](_0x9163ce(realm['set']), !![]);
    });
});

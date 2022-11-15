var _0x568b = [
    'deepStrictEqual',
    'range',
    'length',
    'should\x20coerce\x20`n`\x20to\x20an\x20integer',
    'should\x20return\x20`undefined`\x20for\x20empty\x20arrays',
    'should\x20return\x20`undefined`\x20for\x20non-indexes',
    '27PABxQY',
    '257dXygIo',
    '1056452jNiCXx',
    '1662792POiHLx',
    '1152324ePAaHd',
    '1606630jKzlwJ',
    '835085PytSnh',
    '3302267htfEdU',
    'nth',
    'map'
];
var _0x4d0d0c = _0x410d;
(function (_0x3f846a, _0x994130) {
    var _0x15aae1 = _0x410d;
    while (!![]) {
        try {
            var _0x2f6ee8 = -parseInt(_0x15aae1(0xc0)) * parseInt(_0x15aae1(0xc1)) + -parseInt(_0x15aae1(0xc2)) + -parseInt(_0x15aae1(0xc3)) + parseInt(_0x15aae1(0xc4)) + -parseInt(_0x15aae1(0xc5)) + parseInt(_0x15aae1(0xc6)) + parseInt(_0x15aae1(0xc7));
            if (_0x2f6ee8 === _0x994130)
                break;
            else
                _0x3f846a['push'](_0x3f846a['shift']());
        } catch (_0x345d61) {
            _0x3f846a['push'](_0x3f846a['shift']());
        }
    }
}(_0x568b, 0xe99bf));
import _0x18826a from 'assert';
import _0xcfda5e from 'lodash';
import {
    falsey,
    stubA,
    stubB,
    noop
} from './utils.js';
function _0x410d(_0x19907c, _0x232b93) {
    return _0x410d = function (_0x568ba7, _0x410dc4) {
        _0x568ba7 = _0x568ba7 - 0xc0;
        var _0x535fbb = _0x568b[_0x568ba7];
        return _0x535fbb;
    }, _0x410d(_0x19907c, _0x232b93);
}
import _0xee7714 from '../nth.js';
describe(_0x4d0d0c(0xc8), function () {
    var _0x1daeeb = _0x4d0d0c, _0x3b6ec2 = [
            'a',
            'b',
            'c',
            'd'
        ];
    it('should\x20get\x20the\x20nth\x20element\x20of\x20`array`', function () {
        var _0x2f72a5 = _0x410d, _0x4a7b50 = _0xcfda5e[_0x2f72a5(0xc9)](_0x3b6ec2, function (_0x3819c0, _0x1cbe56) {
                return _0xee7714(_0x3b6ec2, _0x1cbe56);
            });
        _0x18826a[_0x2f72a5(0xca)](_0x4a7b50, _0x3b6ec2);
    }), it('should\x20work\x20with\x20a\x20negative\x20`n`', function () {
        var _0x54c2d8 = _0x410d, _0x2ce107 = _0xcfda5e[_0x54c2d8(0xc9)](_0xcfda5e[_0x54c2d8(0xcb)](0x1, _0x3b6ec2[_0x54c2d8(0xcc)] + 0x1), function (_0x1cd39d) {
                return _0xee7714(_0x3b6ec2, -_0x1cd39d);
            });
        _0x18826a[_0x54c2d8(0xca)](_0x2ce107, [
            'd',
            'c',
            'b',
            'a'
        ]);
    }), it(_0x1daeeb(0xcd), function () {
        var _0x5e16ad = _0x1daeeb, _0x4afcac = falsey, _0x51ff88 = _0xcfda5e['map'](_0x4afcac, stubA), _0x384618 = _0xcfda5e[_0x5e16ad(0xc9)](_0x4afcac, function (_0x26d08b) {
                return _0x26d08b ? _0xee7714(_0x3b6ec2, _0x26d08b) : _0xee7714(_0x3b6ec2);
            });
        _0x18826a[_0x5e16ad(0xca)](_0x384618, _0x51ff88), _0x4afcac = [
            '1',
            1.6
        ], _0x51ff88 = _0xcfda5e['map'](_0x4afcac, stubB), _0x384618 = _0xcfda5e[_0x5e16ad(0xc9)](_0x4afcac, function (_0x5d8927) {
            return _0xee7714(_0x3b6ec2, _0x5d8927);
        }), _0x18826a['deepStrictEqual'](_0x384618, _0x51ff88);
    }), it(_0x1daeeb(0xce), function () {
        var _0x49cffa = _0x1daeeb, _0x3a1b47 = [
                null,
                undefined,
                []
            ], _0x46ddfd = _0xcfda5e['map'](_0x3a1b47, noop), _0x46c50e = _0xcfda5e[_0x49cffa(0xc9)](_0x3a1b47, function (_0xccdcf9) {
                return _0xee7714(_0xccdcf9, 0x1);
            });
        _0x18826a[_0x49cffa(0xca)](_0x46c50e, _0x46ddfd);
    }), it(_0x1daeeb(0xcf), function () {
        var _0x462dbe = _0x1daeeb, _0x4aa213 = [
                0x1,
                0x2
            ], _0x564f2d = [
                Infinity,
                _0x4aa213[_0x462dbe(0xcc)]
            ], _0x3c22ea = _0xcfda5e['map'](_0x564f2d, noop);
        _0x4aa213[-0x1] = 0x3;
        var _0x17388b = _0xcfda5e['map'](_0x564f2d, function (_0x88fdb3) {
            return _0xee7714(_0x4aa213, _0x88fdb3);
        });
        _0x18826a[_0x462dbe(0xca)](_0x17388b, _0x3c22ea);
    });
});

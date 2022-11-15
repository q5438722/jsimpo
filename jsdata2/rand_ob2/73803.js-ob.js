var _0x2730 = [
    '49lWBCjM',
    '8859HlCZGE',
    '1HYHCvU',
    '518437reMJFH',
    '4JqQxJA',
    '289987pVGDMu',
    '961563QVjMQH',
    '3191483gjphWL',
    'pick',
    'deepStrictEqual',
    'should\x20support\x20deep\x20paths',
    'b.c',
    'should\x20support\x20path\x20arrays',
    'a.b',
    'should\x20pick\x20a\x20key\x20over\x20a\x20path',
    'each',
    'should\x20return\x20an\x20empty\x20object\x20when\x20`object`\x20is\x20nullish',
    'valueOf',
    'should\x20work\x20with\x20a\x20primitive\x20`object`',
    'slice',
    '1110106iRwTJz',
    '639752Cvbelj'
];
function _0x6e79(_0x36532a, _0x59d790) {
    return _0x6e79 = function (_0x2730cb, _0x6e794) {
        _0x2730cb = _0x2730cb - 0x6b;
        var _0x592e20 = _0x2730[_0x2730cb];
        return _0x592e20;
    }, _0x6e79(_0x36532a, _0x59d790);
}
var _0x3b1c9f = _0x6e79;
(function (_0x224d53, _0x2e9447) {
    var _0x3bf5df = _0x6e79;
    while (!![]) {
        try {
            var _0x25b21d = parseInt(_0x3bf5df(0x6b)) + -parseInt(_0x3bf5df(0x6c)) + parseInt(_0x3bf5df(0x6d)) * -parseInt(_0x3bf5df(0x6e)) + parseInt(_0x3bf5df(0x6f)) * -parseInt(_0x3bf5df(0x70)) + -parseInt(_0x3bf5df(0x71)) * parseInt(_0x3bf5df(0x72)) + -parseInt(_0x3bf5df(0x73)) + parseInt(_0x3bf5df(0x74));
            if (_0x25b21d === _0x2e9447)
                break;
            else
                _0x224d53['push'](_0x224d53['shift']());
        } catch (_0x4d4aea) {
            _0x224d53['push'](_0x224d53['shift']());
        }
    }
}(_0x2730, 0x8f816));
import _0x5bca2a from 'assert';
import _0x37be7d from 'lodash';
import {
    args,
    toArgs
} from './utils.js';
import _0x2a7c8f from '../pick.js';
describe(_0x3b1c9f(0x75), function () {
    var _0x3fd079 = _0x3b1c9f, _0x174496 = toArgs([
            'a',
            'c'
        ]), _0x50e1c4 = {
            'a': 0x1,
            'b': 0x2,
            'c': 0x3,
            'd': 0x4
        }, _0x4c7c89 = {
            'a': 0x1,
            'b': {
                'c': 0x2,
                'd': 0x3
            }
        };
    it('should\x20flatten\x20`paths`', function () {
        var _0x39c212 = _0x6e79;
        _0x5bca2a[_0x39c212(0x76)](_0x2a7c8f(_0x50e1c4, 'a', 'c'), {
            'a': 0x1,
            'c': 0x3
        }), _0x5bca2a[_0x39c212(0x76)](_0x2a7c8f(_0x50e1c4, [
            'a',
            'd'
        ], 'c'), {
            'a': 0x1,
            'c': 0x3,
            'd': 0x4
        });
    }), it(_0x3fd079(0x77), function () {
        var _0x256977 = _0x3fd079;
        _0x5bca2a[_0x256977(0x76)](_0x2a7c8f(_0x4c7c89, _0x256977(0x78)), { 'b': { 'c': 0x2 } });
    }), it(_0x3fd079(0x79), function () {
        var _0xc2ee21 = _0x3fd079, _0x2a6513 = {
                'a.b': 0x1,
                'a': { 'b': 0x2 }
            }, _0x1bbe18 = _0x2a7c8f(_0x2a6513, [[_0xc2ee21(0x7a)]]);
        _0x5bca2a[_0xc2ee21(0x76)](_0x1bbe18, { 'a.b': 0x1 });
    }), it(_0x3fd079(0x7b), function () {
        var _0x3aee07 = _0x3fd079, _0x376d1b = {
                'a.b': 0x1,
                'a': { 'b': 0x2 }
            };
        _0x37be7d[_0x3aee07(0x7c)]([
            'a.b',
            [_0x3aee07(0x7a)]
        ], function (_0xc584f) {
            _0x5bca2a['deepStrictEqual'](_0x2a7c8f(_0x376d1b, _0xc584f), { 'a.b': 0x1 });
        });
    }), it('should\x20coerce\x20`paths`\x20to\x20strings', function () {
        var _0x5f0f2d = _0x3fd079;
        _0x5bca2a[_0x5f0f2d(0x76)](_0x2a7c8f({
            '0': 'a',
            '1': 'b'
        }, 0x0), { '0': 'a' });
    }), it(_0x3fd079(0x7d), function () {
        _0x37be7d['each']([
            null,
            undefined
        ], function (_0x235475) {
            var _0x26f3b8 = _0x6e79;
            _0x5bca2a[_0x26f3b8(0x76)](_0x2a7c8f(_0x235475, _0x26f3b8(0x7e)), {});
        });
    }), it(_0x3fd079(0x7f), function () {
        var _0x5d7901 = _0x3fd079;
        _0x5bca2a[_0x5d7901(0x76)](_0x2a7c8f('', 'slice'), { 'slice': ''[_0x5d7901(0x80)] });
    }), it('should\x20work\x20with\x20`arguments`\x20object\x20`paths`', function () {
        var _0x2e733b = _0x3fd079;
        _0x5bca2a[_0x2e733b(0x76)](_0x2a7c8f(_0x50e1c4, _0x174496), {
            'a': 0x1,
            'c': 0x3
        });
    });
});

var _0x2de5 = [
    '159893dIILXF',
    '5927hnlIvg',
    '11IAlzvE',
    'pick',
    'deepStrictEqual',
    'should\x20support\x20deep\x20paths',
    'b.c',
    'should\x20support\x20path\x20arrays',
    'a.b',
    'should\x20pick\x20a\x20key\x20over\x20a\x20path',
    'should\x20coerce\x20`paths`\x20to\x20strings',
    'should\x20return\x20an\x20empty\x20object\x20when\x20`object`\x20is\x20nullish',
    'slice',
    'should\x20work\x20with\x20`arguments`\x20object\x20`paths`',
    '311800kCLsYL',
    '427496dKJECz',
    '444797dvxQRO',
    '602570cQJsOV',
    '1jAoxxy',
    '93165xBlPeO',
    '1QvBpvu',
    '2fYXwSZ'
];
var _0x59f3ac = _0x3bcb;
(function (_0x39c525, _0x3039e4) {
    var _0x1f313b = _0x3bcb;
    while (!![]) {
        try {
            var _0x3e2361 = parseInt(_0x1f313b(0xda)) + -parseInt(_0x1f313b(0xdb)) + parseInt(_0x1f313b(0xdc)) + -parseInt(_0x1f313b(0xdd)) * -parseInt(_0x1f313b(0xde)) + parseInt(_0x1f313b(0xdf)) * -parseInt(_0x1f313b(0xe0)) + -parseInt(_0x1f313b(0xe1)) * parseInt(_0x1f313b(0xe2)) + parseInt(_0x1f313b(0xe3)) * parseInt(_0x1f313b(0xe4));
            if (_0x3e2361 === _0x3039e4)
                break;
            else
                _0x39c525['push'](_0x39c525['shift']());
        } catch (_0x5dc246) {
            _0x39c525['push'](_0x39c525['shift']());
        }
    }
}(_0x2de5, 0x8e8ed));
function _0x3bcb(_0x30e827, _0x72ea95) {
    return _0x3bcb = function (_0x2de506, _0x3bcbfb) {
        _0x2de506 = _0x2de506 - 0xda;
        var _0x11cee5 = _0x2de5[_0x2de506];
        return _0x11cee5;
    }, _0x3bcb(_0x30e827, _0x72ea95);
}
import _0x3e9ba5 from 'assert';
import _0x57a7f7 from 'lodash';
import {
    args,
    toArgs
} from './utils.js';
import _0x123cdf from '../pick.js';
describe(_0x59f3ac(0xe5), function () {
    var _0x2f566b = _0x59f3ac, _0x38dbf3 = toArgs([
            'a',
            'c'
        ]), _0x2e792f = {
            'a': 0x1,
            'b': 0x2,
            'c': 0x3,
            'd': 0x4
        }, _0x215cec = {
            'a': 0x1,
            'b': {
                'c': 0x2,
                'd': 0x3
            }
        };
    it('should\x20flatten\x20`paths`', function () {
        var _0x45e142 = _0x3bcb;
        _0x3e9ba5[_0x45e142(0xe6)](_0x123cdf(_0x2e792f, 'a', 'c'), {
            'a': 0x1,
            'c': 0x3
        }), _0x3e9ba5['deepStrictEqual'](_0x123cdf(_0x2e792f, [
            'a',
            'd'
        ], 'c'), {
            'a': 0x1,
            'c': 0x3,
            'd': 0x4
        });
    }), it(_0x2f566b(0xe7), function () {
        var _0x2a0f3a = _0x2f566b;
        _0x3e9ba5[_0x2a0f3a(0xe6)](_0x123cdf(_0x215cec, _0x2a0f3a(0xe8)), { 'b': { 'c': 0x2 } });
    }), it(_0x2f566b(0xe9), function () {
        var _0x559f68 = _0x2f566b, _0x14ddfc = {
                'a.b': 0x1,
                'a': { 'b': 0x2 }
            }, _0x1e4c8c = _0x123cdf(_0x14ddfc, [[_0x559f68(0xea)]]);
        _0x3e9ba5[_0x559f68(0xe6)](_0x1e4c8c, { 'a.b': 0x1 });
    }), it(_0x2f566b(0xeb), function () {
        var _0x5dcb46 = _0x2f566b, _0x1bbf64 = {
                'a.b': 0x1,
                'a': { 'b': 0x2 }
            };
        _0x57a7f7['each']([
            'a.b',
            [_0x5dcb46(0xea)]
        ], function (_0x2206e6) {
            var _0x2bc64b = _0x5dcb46;
            _0x3e9ba5[_0x2bc64b(0xe6)](_0x123cdf(_0x1bbf64, _0x2206e6), { 'a.b': 0x1 });
        });
    }), it(_0x2f566b(0xec), function () {
        var _0x82e83d = _0x2f566b;
        _0x3e9ba5[_0x82e83d(0xe6)](_0x123cdf({
            '0': 'a',
            '1': 'b'
        }, 0x0), { '0': 'a' });
    }), it(_0x2f566b(0xed), function () {
        _0x57a7f7['each']([
            null,
            undefined
        ], function (_0x5b51b2) {
            var _0x27999e = _0x3bcb;
            _0x3e9ba5[_0x27999e(0xe6)](_0x123cdf(_0x5b51b2, 'valueOf'), {});
        });
    }), it('should\x20work\x20with\x20a\x20primitive\x20`object`', function () {
        var _0x5f26d2 = _0x2f566b;
        _0x3e9ba5['deepStrictEqual'](_0x123cdf('', 'slice'), { 'slice': ''[_0x5f26d2(0xee)] });
    }), it(_0x2f566b(0xef), function () {
        var _0x582433 = _0x2f566b;
        _0x3e9ba5[_0x582433(0xe6)](_0x123cdf(_0x2e792f, _0x38dbf3), {
            'a': 0x1,
            'c': 0x3
        });
    });
});

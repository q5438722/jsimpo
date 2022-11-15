var _0x4416 = [
    'should\x20work\x20with\x20`_.matchesProperty`\x20shorthands',
    'slice',
    'deepEqual',
    'value',
    '167qjZIol',
    '7567VLARYw',
    '1AwwKeD',
    '480287mYCopy',
    '6217sjXRQv',
    '19eMgmkP',
    '952387mteQcn',
    '1334085VNtwij',
    '140547MxLVVo',
    '150KbKNwU',
    '3781VHipYM',
    'dropRightWhile',
    'deepStrictEqual',
    'should\x20provide\x20correct\x20`predicate`\x20arguments',
    'should\x20work\x20with\x20`_.matches`\x20shorthands'
];
var _0x54961a = _0x5f02;
(function (_0x207184, _0x564281) {
    var _0x50fe7c = _0x5f02;
    while (!![]) {
        try {
            var _0x4ea231 = parseInt(_0x50fe7c(0xb5)) * parseInt(_0x50fe7c(0xb6)) + parseInt(_0x50fe7c(0xb7)) * parseInt(_0x50fe7c(0xb8)) + parseInt(_0x50fe7c(0xb9)) * -parseInt(_0x50fe7c(0xba)) + parseInt(_0x50fe7c(0xbb)) + -parseInt(_0x50fe7c(0xbc)) + parseInt(_0x50fe7c(0xbd)) + parseInt(_0x50fe7c(0xbe)) * -parseInt(_0x50fe7c(0xbf));
            if (_0x4ea231 === _0x564281)
                break;
            else
                _0x207184['push'](_0x207184['shift']());
        } catch (_0x57beda) {
            _0x207184['push'](_0x207184['shift']());
        }
    }
}(_0x4416, 0xc7990));
import _0x4d9091 from 'assert';
import { slice } from './utils.js';
import _0x808898 from '../dropRightWhile.js';
function _0x5f02(_0x351a00, _0x41ba0d) {
    return _0x5f02 = function (_0x4416de, _0x5f024c) {
        _0x4416de = _0x4416de - 0xb5;
        var _0x2bf942 = _0x4416[_0x4416de];
        return _0x2bf942;
    }, _0x5f02(_0x351a00, _0x41ba0d);
}
describe(_0x54961a(0xc0), function () {
    var _0x273e29 = _0x54961a, _0x4833ad = [
            0x1,
            0x2,
            0x3,
            0x4
        ], _0x449942 = [
            {
                'a': 0x0,
                'b': 0x0
            },
            {
                'a': 0x1,
                'b': 0x1
            },
            {
                'a': 0x2,
                'b': 0x2
            }
        ];
    it('should\x20drop\x20elements\x20while\x20`predicate`\x20returns\x20truthy', function () {
        var _0x8b29a3 = _0x5f02, _0x4b982f = _0x808898(_0x4833ad, function (_0x20d38f) {
                return _0x20d38f > 0x2;
            });
        _0x4d9091[_0x8b29a3(0xc1)](_0x4b982f, [
            0x1,
            0x2
        ]);
    }), it(_0x273e29(0xc2), function () {
        var _0x585d6b = _0x273e29, _0x51a246;
        _0x808898(_0x4833ad, function () {
            _0x51a246 = slice['call'](arguments);
        }), _0x4d9091[_0x585d6b(0xc1)](_0x51a246, [
            0x4,
            0x3,
            _0x4833ad
        ]);
    }), it(_0x273e29(0xc3), function () {
        var _0x8f6c74 = _0x273e29;
        _0x4d9091[_0x8f6c74(0xc1)](_0x808898(_0x449942, { 'b': 0x2 }), _0x449942['slice'](0x0, 0x2));
    }), it(_0x273e29(0xc4), function () {
        var _0x41fc1b = _0x273e29;
        _0x4d9091['deepStrictEqual'](_0x808898(_0x449942, [
            'b',
            0x2
        ]), _0x449942[_0x41fc1b(0xc5)](0x0, 0x2));
    }), it('should\x20work\x20with\x20`_.property`\x20shorthands', function () {
        var _0x1285af = _0x273e29;
        _0x4d9091[_0x1285af(0xc1)](_0x808898(_0x449942, 'b'), _0x449942[_0x1285af(0xc5)](0x0, 0x1));
    }), it('should\x20return\x20a\x20wrapped\x20value\x20when\x20chaining', function () {
        var _0xb80a9c = _0x273e29, _0xa40867 = _(_0x4833ad)['dropRightWhile'](function (_0x334dd0) {
                return _0x334dd0 > 0x2;
            });
        _0x4d9091['ok'](_0xa40867 instanceof _), _0x4d9091[_0xb80a9c(0xc6)](_0xa40867[_0xb80a9c(0xc7)](), [
            0x1,
            0x2
        ]);
    });
});

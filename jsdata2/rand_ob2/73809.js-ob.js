var _0x5bf2 = [
    '861248bfGHIR',
    '705550NYLkYR',
    'dropRightWhile',
    'should\x20drop\x20elements\x20while\x20`predicate`\x20returns\x20truthy',
    'deepStrictEqual',
    'call',
    'should\x20work\x20with\x20`_.matches`\x20shorthands',
    'slice',
    'should\x20work\x20with\x20`_.matchesProperty`\x20shorthands',
    'should\x20return\x20a\x20wrapped\x20value\x20when\x20chaining',
    'value',
    '543114LBZLsb',
    '450407PWbeat',
    '192613feMpDK',
    '86391uCuXYR',
    '785536gvwprz'
];
var _0xb60109 = _0x570b;
function _0x570b(_0xc15ce0, _0x56f6c4) {
    return _0x570b = function (_0x5bf2e8, _0x570b7d) {
        _0x5bf2e8 = _0x5bf2e8 - 0x1d4;
        var _0x3d7ee3 = _0x5bf2[_0x5bf2e8];
        return _0x3d7ee3;
    }, _0x570b(_0xc15ce0, _0x56f6c4);
}
(function (_0x2e5e24, _0x3ef37a) {
    var _0x14939b = _0x570b;
    while (!![]) {
        try {
            var _0x568b68 = parseInt(_0x14939b(0x1d4)) + parseInt(_0x14939b(0x1d5)) + parseInt(_0x14939b(0x1d6)) + parseInt(_0x14939b(0x1d7)) + -parseInt(_0x14939b(0x1d8)) + parseInt(_0x14939b(0x1d9)) + -parseInt(_0x14939b(0x1da));
            if (_0x568b68 === _0x3ef37a)
                break;
            else
                _0x2e5e24['push'](_0x2e5e24['shift']());
        } catch (_0x3590a0) {
            _0x2e5e24['push'](_0x2e5e24['shift']());
        }
    }
}(_0x5bf2, 0x9ce7f));
import _0xdfe5a6 from 'assert';
import { slice } from './utils.js';
import _0x49b012 from '../dropRightWhile.js';
describe(_0xb60109(0x1db), function () {
    var _0x4a13d0 = _0xb60109, _0x38c68e = [
            0x1,
            0x2,
            0x3,
            0x4
        ], _0x243fbd = [
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
    it(_0x4a13d0(0x1dc), function () {
        var _0x27d7d1 = _0x4a13d0, _0x3e211d = _0x49b012(_0x38c68e, function (_0x1255f5) {
                return _0x1255f5 > 0x2;
            });
        _0xdfe5a6[_0x27d7d1(0x1dd)](_0x3e211d, [
            0x1,
            0x2
        ]);
    }), it('should\x20provide\x20correct\x20`predicate`\x20arguments', function () {
        var _0x318fdc;
        _0x49b012(_0x38c68e, function () {
            var _0x4dae53 = _0x570b;
            _0x318fdc = slice[_0x4dae53(0x1de)](arguments);
        }), _0xdfe5a6['deepStrictEqual'](_0x318fdc, [
            0x4,
            0x3,
            _0x38c68e
        ]);
    }), it(_0x4a13d0(0x1df), function () {
        var _0xb970b4 = _0x4a13d0;
        _0xdfe5a6['deepStrictEqual'](_0x49b012(_0x243fbd, { 'b': 0x2 }), _0x243fbd[_0xb970b4(0x1e0)](0x0, 0x2));
    }), it(_0x4a13d0(0x1e1), function () {
        var _0xda2f47 = _0x4a13d0;
        _0xdfe5a6[_0xda2f47(0x1dd)](_0x49b012(_0x243fbd, [
            'b',
            0x2
        ]), _0x243fbd[_0xda2f47(0x1e0)](0x0, 0x2));
    }), it('should\x20work\x20with\x20`_.property`\x20shorthands', function () {
        var _0xc7b968 = _0x4a13d0;
        _0xdfe5a6[_0xc7b968(0x1dd)](_0x49b012(_0x243fbd, 'b'), _0x243fbd['slice'](0x0, 0x1));
    }), it(_0x4a13d0(0x1e2), function () {
        var _0x21c3a7 = _0x4a13d0, _0xce8217 = _(_0x38c68e)['dropRightWhile'](function (_0x336fed) {
                return _0x336fed > 0x2;
            });
        _0xdfe5a6['ok'](_0xce8217 instanceof _), _0xdfe5a6['deepEqual'](_0xce8217[_0x21c3a7(0x1e3)](), [
            0x1,
            0x2
        ]);
    });
});

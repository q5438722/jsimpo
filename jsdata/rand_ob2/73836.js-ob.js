var _0x48ab = [
    'deepStrictEqual',
    'should\x20clone\x20sources\x20when\x20`customizer`\x20returns\x20`undefined`',
    'should\x20defer\x20to\x20`customizer`\x20for\x20non\x20`undefined`\x20results',
    'concat',
    'should\x20provide\x20`stack`\x20to\x20`customizer`',
    'constructor',
    'name',
    'Stack',
    'should\x20overwrite\x20primitives\x20with\x20source\x20object\x20clones',
    'isArray',
    'should\x20pop\x20the\x20stack\x20of\x20sources\x20for\x20each\x20sibling\x20property',
    '722798oWnVih',
    '4111ABnQkd',
    '117EAmAqP',
    '50242TsXUFY',
    '23kehGnZ',
    '111528XBpXkR',
    '4GQtkeT',
    '1455838Kylgjb',
    '1KfqRKi',
    '1705tcHCTO',
    '907AXqQcH',
    '3555406UnEQxn',
    'mergeWith'
];
var _0x3a80e9 = _0x3b3a;
function _0x3b3a(_0x1c5d50, _0x162fe1) {
    return _0x3b3a = function (_0x48abcf, _0x3b3abe) {
        _0x48abcf = _0x48abcf - 0x1c6;
        var _0x569cad = _0x48ab[_0x48abcf];
        return _0x569cad;
    }, _0x3b3a(_0x1c5d50, _0x162fe1);
}
(function (_0x41256d, _0x306a6e) {
    var _0x432722 = _0x3b3a;
    while (!![]) {
        try {
            var _0x34aa63 = -parseInt(_0x432722(0x1c6)) + parseInt(_0x432722(0x1c7)) * -parseInt(_0x432722(0x1c8)) + parseInt(_0x432722(0x1c9)) * parseInt(_0x432722(0x1ca)) + -parseInt(_0x432722(0x1cb)) * -parseInt(_0x432722(0x1cc)) + parseInt(_0x432722(0x1cd)) * -parseInt(_0x432722(0x1ce)) + parseInt(_0x432722(0x1cf)) * -parseInt(_0x432722(0x1d0)) + parseInt(_0x432722(0x1d1));
            if (_0x34aa63 === _0x306a6e)
                break;
            else
                _0x41256d['push'](_0x41256d['shift']());
        } catch (_0x413fdf) {
            _0x41256d['push'](_0x41256d['shift']());
        }
    }
}(_0x48ab, 0xe82f2));
import _0x260e1a from 'assert';
import _0x49ecaf from 'lodash';
import {
    noop,
    identity,
    isNpm,
    mapCaches
} from './utils.js';
import _0x55c732 from '../mergeWith.js';
import _0x54246e from '../last.js';
describe(_0x3a80e9(0x1d2), function () {
    var _0x4fb7de = _0x3a80e9;
    it('should\x20handle\x20merging\x20when\x20`customizer`\x20returns\x20`undefined`', function () {
        var _0x17ca32 = _0x3b3a, _0x246e58 = _0x55c732({
                'a': {
                    'b': [
                        0x1,
                        0x1
                    ]
                }
            }, { 'a': { 'b': [0x0] } }, noop);
        _0x260e1a[_0x17ca32(0x1d3)](_0x246e58, {
            'a': {
                'b': [
                    0x0,
                    0x1
                ]
            }
        }), _0x246e58 = _0x55c732([], [undefined], identity), _0x260e1a[_0x17ca32(0x1d3)](_0x246e58, [undefined]);
    }), it(_0x4fb7de(0x1d4), function () {
        var _0x2f3dfb = _0x4fb7de, _0xfbf2d0 = { 'a': { 'b': { 'c': 0x1 } } }, _0x55aa12 = { 'a': { 'b': { 'd': 0x2 } } };
        _0x55c732({}, _0xfbf2d0, _0x55aa12, noop), _0x260e1a[_0x2f3dfb(0x1d3)](_0xfbf2d0['a']['b'], { 'c': 0x1 });
    }), it(_0x4fb7de(0x1d5), function () {
        var _0x5c38eb = _0x55c732({
            'a': {
                'b': [
                    0x0,
                    0x1
                ]
            }
        }, { 'a': { 'b': [0x2] } }, function (_0x4bf95f, _0x290912) {
            var _0x50dcb1 = _0x3b3a;
            return _0x49ecaf['isArray'](_0x4bf95f) ? _0x4bf95f[_0x50dcb1(0x1d6)](_0x290912) : undefined;
        });
        _0x260e1a['deepStrictEqual'](_0x5c38eb, {
            'a': {
                'b': [
                    0x0,
                    0x1,
                    0x2
                ]
            }
        });
    }), it(_0x4fb7de(0x1d7), function () {
        var _0x48d1f9 = _0x4fb7de, _0x3e023f;
        _0x55c732({}, { 'a': { 'b': 0x2 } }, function () {
            _0x3e023f = _0x54246e(arguments);
        }), _0x260e1a['ok'](isNpm ? _0x3e023f[_0x48d1f9(0x1d8)][_0x48d1f9(0x1d9)] == _0x48d1f9(0x1da) : _0x3e023f instanceof mapCaches['Stack']);
    }), it(_0x4fb7de(0x1db), function () {
        var _0x5f288d = _0x4fb7de, _0x501016 = _0x55c732({ 'a': 0x0 }, { 'a': { 'b': ['c'] } }, function (_0x161d91, _0x5e028f) {
                var _0x3e91a9 = _0x3b3a;
                return _0x49ecaf[_0x3e91a9(0x1dc)](_0x161d91) ? _0x161d91[_0x3e91a9(0x1d6)](_0x5e028f) : undefined;
            });
        _0x260e1a[_0x5f288d(0x1d3)](_0x501016, { 'a': { 'b': ['c'] } });
    }), it(_0x4fb7de(0x1dd), function () {
        var _0x3647b4 = _0x4fb7de, _0xd23bde = [
                'b',
                'c'
            ], _0x25ff90 = { 'a': ['a'] }, _0x4fe5cf = {
                'a': _0xd23bde,
                'b': _0xd23bde
            }, _0x74eca8 = _0x55c732(_0x25ff90, _0x4fe5cf, function (_0x4b97c9, _0xae6a5f) {
                var _0x277194 = _0x3b3a;
                return _0x49ecaf[_0x277194(0x1dc)](_0x4b97c9) ? _0x4b97c9[_0x277194(0x1d6)](_0xae6a5f) : undefined;
            });
        _0x260e1a[_0x3647b4(0x1d3)](_0x74eca8, {
            'a': [
                'a',
                'b',
                'c'
            ],
            'b': [
                'b',
                'c'
            ]
        });
    });
});

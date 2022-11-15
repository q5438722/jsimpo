var _0x46fe = [
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
    '154659mCcvJG',
    '1567976CFQktB',
    '850518Cgojlt',
    '1509260ilqiag',
    '28661OFNcrR',
    '59iNiOHI',
    '2mIjBSh',
    '575723yBtGxL',
    '43xoCXzo',
    '107914MdlXfQ',
    'mergeWith',
    'should\x20handle\x20merging\x20when\x20`customizer`\x20returns\x20`undefined`',
    'deepStrictEqual'
];
var _0x30bd83 = _0x25bb;
(function (_0x2783bc, _0x4c875b) {
    var _0x3337d0 = _0x25bb;
    while (!![]) {
        try {
            var _0x1361a5 = -parseInt(_0x3337d0(0x197)) + parseInt(_0x3337d0(0x198)) + -parseInt(_0x3337d0(0x199)) + -parseInt(_0x3337d0(0x19a)) + parseInt(_0x3337d0(0x19b)) * -parseInt(_0x3337d0(0x19c)) + -parseInt(_0x3337d0(0x19d)) * parseInt(_0x3337d0(0x19e)) + -parseInt(_0x3337d0(0x19f)) * -parseInt(_0x3337d0(0x1a0));
            if (_0x1361a5 === _0x4c875b)
                break;
            else
                _0x2783bc['push'](_0x2783bc['shift']());
        } catch (_0x32658e) {
            _0x2783bc['push'](_0x2783bc['shift']());
        }
    }
}(_0x46fe, 0xcfdc4));
import _0x5e4013 from 'assert';
function _0x25bb(_0x78975d, _0x24c152) {
    return _0x25bb = function (_0x46fe4a, _0x25bb9a) {
        _0x46fe4a = _0x46fe4a - 0x197;
        var _0x33cb3a = _0x46fe[_0x46fe4a];
        return _0x33cb3a;
    }, _0x25bb(_0x78975d, _0x24c152);
}
import _0x12592e from 'lodash';
import {
    noop,
    identity,
    isNpm,
    mapCaches
} from './utils.js';
import _0x5473cd from '../mergeWith.js';
import _0x3c6b00 from '../last.js';
describe(_0x30bd83(0x1a1), function () {
    var _0x21f8b8 = _0x30bd83;
    it(_0x21f8b8(0x1a2), function () {
        var _0x376808 = _0x21f8b8, _0x1ad39e = _0x5473cd({
                'a': {
                    'b': [
                        0x1,
                        0x1
                    ]
                }
            }, { 'a': { 'b': [0x0] } }, noop);
        _0x5e4013[_0x376808(0x1a3)](_0x1ad39e, {
            'a': {
                'b': [
                    0x0,
                    0x1
                ]
            }
        }), _0x1ad39e = _0x5473cd([], [undefined], identity), _0x5e4013[_0x376808(0x1a3)](_0x1ad39e, [undefined]);
    }), it(_0x21f8b8(0x1a4), function () {
        var _0x3feccf = { 'a': { 'b': { 'c': 0x1 } } }, _0x5488a6 = { 'a': { 'b': { 'd': 0x2 } } };
        _0x5473cd({}, _0x3feccf, _0x5488a6, noop), _0x5e4013['deepStrictEqual'](_0x3feccf['a']['b'], { 'c': 0x1 });
    }), it(_0x21f8b8(0x1a5), function () {
        var _0x2ff6d7 = _0x21f8b8, _0x3e7850 = _0x5473cd({
                'a': {
                    'b': [
                        0x0,
                        0x1
                    ]
                }
            }, { 'a': { 'b': [0x2] } }, function (_0x1b0515, _0x57de87) {
                var _0x1e0a3c = _0x25bb;
                return _0x12592e['isArray'](_0x1b0515) ? _0x1b0515[_0x1e0a3c(0x1a6)](_0x57de87) : undefined;
            });
        _0x5e4013[_0x2ff6d7(0x1a3)](_0x3e7850, {
            'a': {
                'b': [
                    0x0,
                    0x1,
                    0x2
                ]
            }
        });
    }), it(_0x21f8b8(0x1a7), function () {
        var _0x2dabe9 = _0x21f8b8, _0x1e48a8;
        _0x5473cd({}, { 'a': { 'b': 0x2 } }, function () {
            _0x1e48a8 = _0x3c6b00(arguments);
        }), _0x5e4013['ok'](isNpm ? _0x1e48a8[_0x2dabe9(0x1a8)][_0x2dabe9(0x1a9)] == _0x2dabe9(0x1aa) : _0x1e48a8 instanceof mapCaches[_0x2dabe9(0x1aa)]);
    }), it(_0x21f8b8(0x1ab), function () {
        var _0x4bf550 = _0x21f8b8, _0x1004b8 = _0x5473cd({ 'a': 0x0 }, { 'a': { 'b': ['c'] } }, function (_0x4fc964, _0x12912d) {
                var _0x128cf6 = _0x25bb;
                return _0x12592e[_0x128cf6(0x1ac)](_0x4fc964) ? _0x4fc964[_0x128cf6(0x1a6)](_0x12912d) : undefined;
            });
        _0x5e4013[_0x4bf550(0x1a3)](_0x1004b8, { 'a': { 'b': ['c'] } });
    }), it(_0x21f8b8(0x1ad), function () {
        var _0x103c79 = _0x21f8b8, _0x1a6652 = [
                'b',
                'c'
            ], _0x2066f8 = { 'a': ['a'] }, _0x32f729 = {
                'a': _0x1a6652,
                'b': _0x1a6652
            }, _0x511f1e = _0x5473cd(_0x2066f8, _0x32f729, function (_0x3a6b65, _0x26d5ae) {
                var _0x410cda = _0x25bb;
                return _0x12592e[_0x410cda(0x1ac)](_0x3a6b65) ? _0x3a6b65[_0x410cda(0x1a6)](_0x26d5ae) : undefined;
            });
        _0x5e4013[_0x103c79(0x1a3)](_0x511f1e, {
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

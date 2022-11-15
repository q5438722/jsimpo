import _0x4a32e8 from 'assert';
import _0x468f3b from 'lodash';
import {
    noop,
    identity,
    isNpm,
    mapCaches
} from './utils.js';
import _0x4b313d from '../mergeWith.js';
import _0x995a95 from '../last.js';
describe('mergeWith', function () {
    it('should\x20handle\x20merging\x20when\x20`customizer`\x20returns\x20`undefined`', function () {
        var _0x3a8172 = _0x4b313d({
            'a': {
                'b': [
                    0x21a * -0xe + -0x1 * 0x21db + -0x32a * -0x14,
                    0x856 * 0x3 + -0x1b46 + 0x245 * 0x1
                ]
            }
        }, { 'a': { 'b': [0x876 + -0x73e + -0x138] } }, noop);
        _0x4a32e8['deepStrictEqual'](_0x3a8172, {
            'a': {
                'b': [
                    0x11 * 0xc0 + -0x5 * 0x749 + 0xb * 0x227,
                    0x1810 + 0x4b * 0x5 + -0x1986
                ]
            }
        }), _0x3a8172 = _0x4b313d([], [undefined], identity), _0x4a32e8['deepStrictEqual'](_0x3a8172, [undefined]);
    }), it('should\x20clone\x20sources\x20when\x20`customizer`\x20returns\x20`undefined`', function () {
        var _0x10d56e = { 'a': { 'b': { 'c': 0x1 } } }, _0x211520 = { 'a': { 'b': { 'd': 0x2 } } };
        _0x4b313d({}, _0x10d56e, _0x211520, noop), _0x4a32e8['deepStrictEqual'](_0x10d56e['a']['b'], { 'c': 0x1 });
    }), it('should\x20defer\x20to\x20`customizer`\x20for\x20non\x20`undefined`\x20results', function () {
        var _0x405996 = _0x4b313d({
            'a': {
                'b': [
                    -0x9 * -0x349 + 0x1a5 + -0x1f36,
                    0x2615 + -0x2634 + 0x10 * 0x2
                ]
            }
        }, { 'a': { 'b': [-0x11e4 + -0x1462 + 0x5 * 0x7a8] } }, function (_0x3ec764, _0x2fe365) {
            return _0x468f3b['isArray'](_0x3ec764) ? _0x3ec764['concat'](_0x2fe365) : undefined;
        });
        _0x4a32e8['deepStrictEqual'](_0x405996, {
            'a': {
                'b': [
                    0x9a8 + 0x1a8d + 0x17 * -0x193,
                    0x1bf0 + -0x1229 * 0x2 + 0x863,
                    -0x1d4a + -0x304 * -0xa + -0xdc
                ]
            }
        });
    }), it('should\x20provide\x20`stack`\x20to\x20`customizer`', function () {
        var _0x1385de;
        _0x4b313d({}, { 'a': { 'b': 0x2 } }, function () {
            _0x1385de = _0x995a95(arguments);
        }), _0x4a32e8['ok'](isNpm ? _0x1385de['constructor']['name'] == 'Stack' : _0x1385de instanceof mapCaches['Stack']);
    }), it('should\x20overwrite\x20primitives\x20with\x20source\x20object\x20clones', function () {
        var _0x2ac306 = _0x4b313d({ 'a': 0x0 }, { 'a': { 'b': ['c'] } }, function (_0x38b6fe, _0x40db53) {
            return _0x468f3b['isArray'](_0x38b6fe) ? _0x38b6fe['concat'](_0x40db53) : undefined;
        });
        _0x4a32e8['deepStrictEqual'](_0x2ac306, { 'a': { 'b': ['c'] } });
    }), it('should\x20pop\x20the\x20stack\x20of\x20sources\x20for\x20each\x20sibling\x20property', function () {
        var _0x22c00c = [
                'b',
                'c'
            ], _0x12b467 = { 'a': ['a'] }, _0x1a8ccd = {
                'a': _0x22c00c,
                'b': _0x22c00c
            }, _0x35dd3c = _0x4b313d(_0x12b467, _0x1a8ccd, function (_0x4e475a, _0xd147a5) {
                return _0x468f3b['isArray'](_0x4e475a) ? _0x4e475a['concat'](_0xd147a5) : undefined;
            });
        _0x4a32e8['deepStrictEqual'](_0x35dd3c, {
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

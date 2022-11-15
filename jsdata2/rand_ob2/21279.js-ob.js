var _0x104a = [
    'builders',
    'typescript',
    'tsLiteralType',
    'unaryExpression',
    'numericLiteral',
    '123456789',
    'toMatchSnapshot',
    'throws\x20with\x20non-numeric\x20argument',
    'stringLiteral',
    'toThrow',
    'Property\x20argument\x20of\x20UnaryExpression\x20expected\x20node\x20to\x20be\x20of\x20a\x20type\x20[\x22NumericLiteral\x22,\x22BigIntLiteral\x22]\x20but\x20instead\x20got\x20\x22ObjectExpression\x22',
    'throws\x20with\x20bad\x20operator',
    'Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22+\x22',
    'Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22~\x22',
    'Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22void\x22',
    '1440411KzrSTN',
    '9rgzBpy',
    '33383BuAPgl',
    '1129786PosMdV',
    '1220671uUjsLI',
    '1HxULdd',
    '1aqnxAv',
    '900181mbjkcf',
    '19311LkPjXT',
    '15UDAeWU',
    '291499DyTKdn',
    '1judTxV'
];
var _0x71226a = _0x2c92;
(function (_0x1bd4f7, _0x18cf8c) {
    var _0x260b37 = _0x2c92;
    while (!![]) {
        try {
            var _0x3e021f = parseInt(_0x260b37(0x99)) + parseInt(_0x260b37(0x9a)) * -parseInt(_0x260b37(0x9b)) + parseInt(_0x260b37(0x9c)) + -parseInt(_0x260b37(0x9d)) * parseInt(_0x260b37(0x9e)) + -parseInt(_0x260b37(0x9f)) * parseInt(_0x260b37(0xa0)) + parseInt(_0x260b37(0xa1)) * parseInt(_0x260b37(0xa2)) + -parseInt(_0x260b37(0xa3)) * -parseInt(_0x260b37(0xa4));
            if (_0x3e021f === _0x18cf8c)
                break;
            else
                _0x1bd4f7['push'](_0x1bd4f7['shift']());
        } catch (_0x391d32) {
            _0x1bd4f7['push'](_0x1bd4f7['shift']());
        }
    }
}(_0x104a, 0xb23ce));
import * as _0x2093f6 from '../../..';
function _0x2c92(_0x25db18, _0x38f2c1) {
    return _0x2c92 = function (_0x104a7d, _0x2c9268) {
        _0x104a7d = _0x104a7d - 0x99;
        var _0x7a3749 = _0x104a[_0x104a7d];
        return _0x7a3749;
    }, _0x2c92(_0x25db18, _0x38f2c1);
}
describe(_0x71226a(0xa5), function () {
    var _0x317e29 = _0x71226a;
    describe(_0x317e29(0xa6), function () {
        var _0x12386f = _0x317e29;
        describe(_0x12386f(0xa7), function () {
            var _0xf3e76e = _0x12386f;
            it('accept\x20unary\x20expression', function () {
                var _0x15d466 = _0x2c92;
                expect(_0x2093f6[_0x15d466(0xa7)](_0x2093f6[_0x15d466(0xa8)]('-', _0x2093f6[_0x15d466(0xa9)](0x1))))['toMatchSnapshot'](), expect(_0x2093f6[_0x15d466(0xa7)](_0x2093f6[_0x15d466(0xa8)]('-', _0x2093f6['bigIntLiteral'](_0x15d466(0xaa)))))[_0x15d466(0xab)]();
            }), it(_0xf3e76e(0xac), function () {
                var _0x9a84f4 = _0xf3e76e;
                expect(() => {
                    var _0xd17736 = _0x2c92;
                    _0x2093f6[_0xd17736(0xa7)](_0x2093f6[_0xd17736(0xa8)]('-', _0x2093f6[_0xd17736(0xad)](0x1)));
                })[_0x9a84f4(0xae)]('Property\x20value\x20expected\x20type\x20of\x20string\x20but\x20got\x20number'), expect(() => {
                    var _0x1b3d31 = _0x9a84f4;
                    _0x2093f6['tsLiteralType'](_0x2093f6[_0x1b3d31(0xa8)]('-', _0x2093f6['objectExpression']([])));
                })[_0x9a84f4(0xae)](_0x9a84f4(0xaf));
            });
        }), it(_0x12386f(0xb0), function () {
            var _0x24c551 = _0x12386f;
            expect(() => {
                var _0x412fb6 = _0x2c92;
                _0x2093f6[_0x412fb6(0xa7)](_0x2093f6[_0x412fb6(0xa8)]('+', _0x2093f6[_0x412fb6(0xa9)](0x1)));
            })[_0x24c551(0xae)]('Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22+\x22'), expect(() => {
                var _0x12f626 = _0x24c551;
                _0x2093f6['tsLiteralType'](_0x2093f6[_0x12f626(0xa8)]('+', _0x2093f6['objectExpression']([])));
            })[_0x24c551(0xae)](_0x24c551(0xb1)), expect(() => {
                var _0x207a80 = _0x24c551;
                _0x2093f6[_0x207a80(0xa7)](_0x2093f6['unaryExpression']('~', _0x2093f6[_0x207a80(0xa9)](0x1)));
            })[_0x24c551(0xae)](_0x24c551(0xb2)), expect(() => {
                var _0x3352b0 = _0x24c551;
                _0x2093f6[_0x3352b0(0xa7)](_0x2093f6['unaryExpression']('void', _0x2093f6[_0x3352b0(0xa9)](0x1)));
            })[_0x24c551(0xae)](_0x24c551(0xb3));
        });
    });
});

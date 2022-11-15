var _0xfe09 = [
    '445387Ybklik',
    '440962DdUjYG',
    '3DREqHD',
    '128422KZjoeZ',
    'builders',
    'typescript',
    'tsLiteralType',
    'accept\x20unary\x20expression',
    'unaryExpression',
    'toMatchSnapshot',
    '123456789',
    'throws\x20with\x20non-numeric\x20argument',
    'toThrow',
    'Property\x20value\x20expected\x20type\x20of\x20string\x20but\x20got\x20number',
    'objectExpression',
    'Property\x20argument\x20of\x20UnaryExpression\x20expected\x20node\x20to\x20be\x20of\x20a\x20type\x20[\x22NumericLiteral\x22,\x22BigIntLiteral\x22]\x20but\x20instead\x20got\x20\x22ObjectExpression\x22',
    'throws\x20with\x20bad\x20operator',
    'numericLiteral',
    'Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22+\x22',
    'Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22~\x22',
    'Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22void\x22',
    '1389633zbrkZq',
    '2qUnkza',
    '672844SzKbLv',
    '32623QBapLC',
    '952187ZXCEjb',
    '1rZyYtt',
    '2edVCaU'
];
var _0x36f377 = _0x43e1;
(function (_0x5ec01f, _0x48a516) {
    var _0x4f69ec = _0x43e1;
    while (!![]) {
        try {
            var _0x434449 = parseInt(_0x4f69ec(0xb8)) + -parseInt(_0x4f69ec(0xb9)) * parseInt(_0x4f69ec(0xba)) + -parseInt(_0x4f69ec(0xbb)) + parseInt(_0x4f69ec(0xbc)) * -parseInt(_0x4f69ec(0xbd)) + parseInt(_0x4f69ec(0xbe)) * parseInt(_0x4f69ec(0xbf)) + parseInt(_0x4f69ec(0xc0)) + -parseInt(_0x4f69ec(0xc1)) * -parseInt(_0x4f69ec(0xc2));
            if (_0x434449 === _0x48a516)
                break;
            else
                _0x5ec01f['push'](_0x5ec01f['shift']());
        } catch (_0x44c593) {
            _0x5ec01f['push'](_0x5ec01f['shift']());
        }
    }
}(_0xfe09, 0xbd7c9));
import * as _0x486ff7 from '../../..';
function _0x43e1(_0x35344b, _0x2d9d95) {
    return _0x43e1 = function (_0xfe099, _0x43e194) {
        _0xfe099 = _0xfe099 - 0xb8;
        var _0x35eb62 = _0xfe09[_0xfe099];
        return _0x35eb62;
    }, _0x43e1(_0x35344b, _0x2d9d95);
}
describe(_0x36f377(0xc3), function () {
    var _0x3e249e = _0x36f377;
    describe(_0x3e249e(0xc4), function () {
        var _0x50c4c1 = _0x3e249e;
        describe(_0x50c4c1(0xc5), function () {
            var _0x5bedc3 = _0x50c4c1;
            it(_0x5bedc3(0xc6), function () {
                var _0xe8f53d = _0x5bedc3;
                expect(_0x486ff7[_0xe8f53d(0xc5)](_0x486ff7[_0xe8f53d(0xc7)]('-', _0x486ff7['numericLiteral'](0x1))))[_0xe8f53d(0xc8)](), expect(_0x486ff7[_0xe8f53d(0xc5)](_0x486ff7[_0xe8f53d(0xc7)]('-', _0x486ff7['bigIntLiteral'](_0xe8f53d(0xc9)))))[_0xe8f53d(0xc8)]();
            }), it(_0x5bedc3(0xca), function () {
                var _0x1d0a1c = _0x5bedc3;
                expect(() => {
                    var _0x550b0e = _0x43e1;
                    _0x486ff7[_0x550b0e(0xc5)](_0x486ff7[_0x550b0e(0xc7)]('-', _0x486ff7['stringLiteral'](0x1)));
                })[_0x1d0a1c(0xcb)](_0x1d0a1c(0xcc)), expect(() => {
                    var _0x2e5991 = _0x1d0a1c;
                    _0x486ff7[_0x2e5991(0xc5)](_0x486ff7['unaryExpression']('-', _0x486ff7[_0x2e5991(0xcd)]([])));
                })[_0x1d0a1c(0xcb)](_0x1d0a1c(0xce));
            });
        }), it(_0x50c4c1(0xcf), function () {
            var _0x10b3de = _0x50c4c1;
            expect(() => {
                var _0x29b50b = _0x43e1;
                _0x486ff7[_0x29b50b(0xc5)](_0x486ff7['unaryExpression']('+', _0x486ff7[_0x29b50b(0xd0)](0x1)));
            })['toThrow'](_0x10b3de(0xd1)), expect(() => {
                var _0x66291a = _0x10b3de;
                _0x486ff7['tsLiteralType'](_0x486ff7['unaryExpression']('+', _0x486ff7[_0x66291a(0xcd)]([])));
            })[_0x10b3de(0xcb)](_0x10b3de(0xd1)), expect(() => {
                var _0xccc011 = _0x10b3de;
                _0x486ff7[_0xccc011(0xc5)](_0x486ff7['unaryExpression']('~', _0x486ff7['numericLiteral'](0x1)));
            })[_0x10b3de(0xcb)](_0x10b3de(0xd2)), expect(() => {
                var _0x466b51 = _0x10b3de;
                _0x486ff7['tsLiteralType'](_0x486ff7[_0x466b51(0xc7)]('void', _0x486ff7['numericLiteral'](0x1)));
            })['toThrow'](_0x10b3de(0xd3));
        });
    });
});

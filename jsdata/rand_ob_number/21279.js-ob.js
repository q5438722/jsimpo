import * as _0x25769a from '../../..';
describe('builders', function () {
    describe('typescript', function () {
        describe('tsLiteralType', function () {
            it('accept\x20unary\x20expression', function () {
                expect(_0x25769a['tsLiteralType'](_0x25769a['unaryExpression']('-', _0x25769a['numericLiteral'](-0x2 * -0x56b + -0x10a5 * -0x2 + -0x4e7 * 0x9))))['toMatchSnapshot'](), expect(_0x25769a['tsLiteralType'](_0x25769a['unaryExpression']('-', _0x25769a['bigIntLiteral']('123456789'))))['toMatchSnapshot']();
            }), it('throws\x20with\x20non-numeric\x20argument', function () {
                expect(() => {
                    _0x25769a['tsLiteralType'](_0x25769a['unaryExpression']('-', _0x25769a['stringLiteral'](-0xbf6 + -0x1d93 + 0x298a)));
                })['toThrow']('Property\x20value\x20expected\x20type\x20of\x20string\x20but\x20got\x20number'), expect(() => {
                    _0x25769a['tsLiteralType'](_0x25769a['unaryExpression']('-', _0x25769a['objectExpression']([])));
                })['toThrow']('Property\x20argument\x20of\x20UnaryExpression\x20expected\x20node\x20to\x20be\x20of\x20a\x20type\x20[\x22NumericLiteral\x22,\x22BigIntLiteral\x22]\x20but\x20instead\x20got\x20\x22ObjectExpression\x22');
            });
        }), it('throws\x20with\x20bad\x20operator', function () {
            expect(() => {
                _0x25769a['tsLiteralType'](_0x25769a['unaryExpression']('+', _0x25769a['numericLiteral'](-0x48b + 0x11a * 0x19 + -0x3d5 * 0x6)));
            })['toThrow']('Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22+\x22'), expect(() => {
                _0x25769a['tsLiteralType'](_0x25769a['unaryExpression']('+', _0x25769a['objectExpression']([])));
            })['toThrow']('Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22+\x22'), expect(() => {
                _0x25769a['tsLiteralType'](_0x25769a['unaryExpression']('~', _0x25769a['numericLiteral'](-0x734 * 0x5 + -0x16a9 + 0x3aae)));
            })['toThrow']('Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22~\x22'), expect(() => {
                _0x25769a['tsLiteralType'](_0x25769a['unaryExpression']('void', _0x25769a['numericLiteral'](-0x160c + 0x1 * 0x265 + 0x44 * 0x4a)));
            })['toThrow']('Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22void\x22');
        });
    });
});

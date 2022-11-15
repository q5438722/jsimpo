'use strict';
const _0x56fb = [
    '77816uEuSHa',
    '515237ddNakq',
    '1mwzgWL',
    '176DGnVJm',
    '349VcDEbZ',
    '824930HJfYqT',
    '1WEqkHs',
    'assert',
    '../../test-helpers/context',
    'request',
    'req.header',
    'should\x20return\x20the\x20request\x20header\x20object',
    'deepStrictEqual',
    'header',
    'req',
    'headers',
    'Its\x20one\x20header,\x20with\x20headerfields',
    '209840nMAxVD',
    '597955UhzSWT',
    '1054188NgqLZp'
];
const _0x3b11db = _0xa40a;
(function (_0x3fe37b, _0x11585f) {
    const _0x5e057c = _0xa40a;
    while (!![]) {
        try {
            const _0x2f5493 = -parseInt(_0x5e057c(0x136)) + parseInt(_0x5e057c(0x137)) + -parseInt(_0x5e057c(0x138)) + -parseInt(_0x5e057c(0x139)) + parseInt(_0x5e057c(0x13a)) * parseInt(_0x5e057c(0x13b)) + parseInt(_0x5e057c(0x13c)) * -parseInt(_0x5e057c(0x13d)) + -parseInt(_0x5e057c(0x13e)) * -parseInt(_0x5e057c(0x13f));
            if (_0x2f5493 === _0x11585f)
                break;
            else
                _0x3fe37b['push'](_0x3fe37b['shift']());
        } catch (_0x30ef84) {
            _0x3fe37b['push'](_0x3fe37b['shift']());
        }
    }
}(_0x56fb, 0x82946));
function _0xa40a(_0xad9829, _0x51e3c9) {
    return _0xa40a = function (_0x56fb4e, _0xa40a99) {
        _0x56fb4e = _0x56fb4e - 0x136;
        let _0x4627c6 = _0x56fb[_0x56fb4e];
        return _0x4627c6;
    }, _0xa40a(_0xad9829, _0x51e3c9);
}
const assert = require(_0x3b11db(0x140)), request = require(_0x3b11db(0x141))[_0x3b11db(0x142)];
describe(_0x3b11db(0x143), () => {
    const _0x275370 = _0x3b11db;
    it(_0x275370(0x144), () => {
        const _0x2104e4 = _0x275370, _0x4a8b3b = request();
        assert[_0x2104e4(0x145)](_0x4a8b3b[_0x2104e4(0x146)], _0x4a8b3b[_0x2104e4(0x147)][_0x2104e4(0x148)]);
    }), it('should\x20set\x20the\x20request\x20header\x20object', () => {
        const _0x1de6ec = _0x275370, _0x5f8904 = request();
        _0x5f8904['header'] = { 'X-Custom-Headerfield': _0x1de6ec(0x149) }, assert[_0x1de6ec(0x145)](_0x5f8904[_0x1de6ec(0x146)], _0x5f8904[_0x1de6ec(0x147)]['headers']);
    });
});

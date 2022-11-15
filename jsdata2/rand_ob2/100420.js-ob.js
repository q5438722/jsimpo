const _0x4e99 = [
    '1178367eZRjke',
    '213203tdToAD',
    '1amBZAj',
    '7443FVAOik',
    '419bSYQCM',
    'bidi',
    'should\x20mark\x20text\x20as\x20RTL\x20if\x20more\x20than\x2030%\x20of\x20text\x20is\x20RTL',
    'مصر\x20Egypt',
    'Egypt\x20رصم',
    'str',
    'toEqual',
    'dir',
    'rtl',
    'should\x20mark\x20text\x20as\x20LTR\x20if\x20less\x20than\x2030%\x20of\x20text\x20is\x20RTL',
    'Egypt\x20is\x20known\x20as\x20مصر\x20in\x20Arabic.',
    'Egypt\x20is\x20known\x20as\x20رصم\x20in\x20Arabic.',
    'ltr',
    '419200GYRBGq',
    '588169qJxaHv',
    '469636WyDkVs',
    '2fHdPmT',
    '752275WJilsZ'
];
const _0x120a1f = _0x22cd;
(function (_0xcedb9e, _0x382459) {
    const _0x524bb8 = _0x22cd;
    while (!![]) {
        try {
            const _0x57fb06 = parseInt(_0x524bb8(0x6c)) + parseInt(_0x524bb8(0x6d)) + -parseInt(_0x524bb8(0x6e)) + -parseInt(_0x524bb8(0x6f)) * parseInt(_0x524bb8(0x70)) + -parseInt(_0x524bb8(0x71)) + parseInt(_0x524bb8(0x72)) * -parseInt(_0x524bb8(0x73)) + -parseInt(_0x524bb8(0x74)) * -parseInt(_0x524bb8(0x75));
            if (_0x57fb06 === _0x382459)
                break;
            else
                _0xcedb9e['push'](_0xcedb9e['shift']());
        } catch (_0x3d88c3) {
            _0xcedb9e['push'](_0xcedb9e['shift']());
        }
    }
}(_0x4e99, 0xb99a6));
function _0x22cd(_0x982dc3, _0x3b32a5) {
    return _0x22cd = function (_0x4e9971, _0x22cd6c) {
        _0x4e9971 = _0x4e9971 - 0x6c;
        let _0x3547b2 = _0x4e99[_0x4e9971];
        return _0x3547b2;
    }, _0x22cd(_0x982dc3, _0x3b32a5);
}
import { bidi } from '../../src/core/bidi.js';
describe(_0x120a1f(0x76), function () {
    const _0x43cbf9 = _0x120a1f;
    it(_0x43cbf9(0x77), function () {
        const _0x1dcd08 = _0x43cbf9, _0x3aa7d5 = _0x1dcd08(0x78), _0x571dde = _0x1dcd08(0x79), _0xe48775 = bidi(_0x3aa7d5, -0x1, ![]);
        expect(_0xe48775[_0x1dcd08(0x7a)])[_0x1dcd08(0x7b)](_0x571dde), expect(_0xe48775[_0x1dcd08(0x7c)])[_0x1dcd08(0x7b)](_0x1dcd08(0x7d));
    }), it(_0x43cbf9(0x7e), function () {
        const _0x1ccacf = _0x43cbf9, _0x38c64d = _0x1ccacf(0x7f), _0x375dbe = _0x1ccacf(0x80), _0x21acdb = bidi(_0x38c64d, -0x1, ![]);
        expect(_0x21acdb['str'])[_0x1ccacf(0x7b)](_0x375dbe), expect(_0x21acdb[_0x1ccacf(0x7c)])[_0x1ccacf(0x7b)](_0x1ccacf(0x81));
    });
});

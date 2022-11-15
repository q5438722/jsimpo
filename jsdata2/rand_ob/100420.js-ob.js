const _0x30e3 = [
    'dCPUZ',
    'CpXuE',
    'str',
    'toEqual',
    'dir',
    'mZszr',
    'gyeeA',
    'Egypt\x20is\x20known\x20as\x20رصم\x20in\x20Arabic.',
    '17FESrUN',
    '1931aZlKTB',
    '78653AOuSnO',
    '1FjnENP',
    '658861tnNmai',
    '1zPtbkk',
    '160697EigjBy',
    '948203LEXYob',
    '1147749hTYBfh',
    '39IUmUUg',
    '42647NHDDmi',
    'bidi',
    'مصر\x20Egypt',
    'Egypt\x20رصم',
    'rtl',
    'Egypt\x20is\x20known\x20as\x20مصر\x20in\x20Arabic.',
    'ltr',
    'should\x20mark\x20text\x20as\x20RTL\x20if\x20more\x20than\x2030%\x20of\x20text\x20is\x20RTL',
    'should\x20mark\x20text\x20as\x20LTR\x20if\x20less\x20than\x2030%\x20of\x20text\x20is\x20RTL'
];
const _0x316a21 = _0x264e;
(function (_0x315801, _0x5c023f) {
    const _0x36c623 = _0x264e;
    while (!![]) {
        try {
            const _0xe50ed6 = parseInt(_0x36c623(0x143)) * parseInt(_0x36c623(0x144)) + -parseInt(_0x36c623(0x145)) * parseInt(_0x36c623(0x146)) + -parseInt(_0x36c623(0x147)) + parseInt(_0x36c623(0x148)) * -parseInt(_0x36c623(0x149)) + parseInt(_0x36c623(0x14a)) + -parseInt(_0x36c623(0x14b)) + parseInt(_0x36c623(0x14c)) * parseInt(_0x36c623(0x14d));
            if (_0xe50ed6 === _0x5c023f)
                break;
            else
                _0x315801['push'](_0x315801['shift']());
        } catch (_0x3d347c) {
            _0x315801['push'](_0x315801['shift']());
        }
    }
}(_0x30e3, -0x2ec2a + -0x5fdbf + 0x4 * 0x482c2));
import { bidi } from '../../src/core/bidi.js';
function _0x264e(_0x5e9535, _0x4b0528) {
    return _0x264e = function (_0x2c7b29, _0x292998) {
        _0x2c7b29 = _0x2c7b29 - (-0x1 * 0xfb + -0x1 * -0x91b + -0x7 * 0xfb);
        let _0x5c5bd2 = _0x30e3[_0x2c7b29];
        return _0x5c5bd2;
    }, _0x264e(_0x5e9535, _0x4b0528);
}
describe(_0x316a21(0x14e), function () {
    const _0x41c0e6 = _0x316a21, _0xe8b883 = {
            'CpXuE': _0x41c0e6(0x14f),
            'uImWi': _0x41c0e6(0x150),
            'DoGlx': function (_0x2e3451, _0x2c8922) {
                return _0x2e3451(_0x2c8922);
            },
            'uAlxc': _0x41c0e6(0x151),
            'gyeeA': _0x41c0e6(0x152),
            'pWEej': function (_0x3aa4ae, _0x35b6cc, _0x1bc651, _0x4015f3) {
                return _0x3aa4ae(_0x35b6cc, _0x1bc651, _0x4015f3);
            },
            'gSpHp': _0x41c0e6(0x153),
            'dCPUZ': _0x41c0e6(0x154),
            'mZszr': _0x41c0e6(0x155)
        };
    it(_0xe8b883[_0x41c0e6(0x156)], function () {
        const _0xa92333 = _0x41c0e6, _0x15b753 = _0xe8b883[_0xa92333(0x157)], _0x56e3b7 = _0xe8b883['uImWi'], _0x213f62 = bidi(_0x15b753, -(-0x11 * -0x17e + 0x2 * -0xaed + 0x1f * -0x1d), ![]);
        expect(_0x213f62[_0xa92333(0x158)])[_0xa92333(0x159)](_0x56e3b7), _0xe8b883['DoGlx'](expect, _0x213f62[_0xa92333(0x15a)])[_0xa92333(0x159)](_0xe8b883['uAlxc']);
    }), it(_0xe8b883[_0x41c0e6(0x15b)], function () {
        const _0x46794d = _0x41c0e6, _0x40a742 = _0xe8b883[_0x46794d(0x15c)], _0x35a54c = _0x46794d(0x15d), _0x533fcb = _0xe8b883['pWEej'](bidi, _0x40a742, -(-0xc06 + 0x1bff + -0x1c * 0x92), ![]);
        expect(_0x533fcb[_0x46794d(0x158)])[_0x46794d(0x159)](_0x35a54c), expect(_0x533fcb[_0x46794d(0x15a)])[_0x46794d(0x159)](_0xe8b883['gSpHp']);
    });
});

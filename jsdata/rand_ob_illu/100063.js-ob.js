const _0x110c = ['red', 'GmCvL', 'trigger', 'hasClass', 'vHrTb', 'XoTkm', 'dOCwx', 'PyhTf', '95719DibuzA', '1693547ukZHuW', '1ikmMKW', '325307EwgxOd', '222713cVmcjK', '16963VfeCMM', '17BjWSEt', '1256783YSFdLL', '5XULGpb', '422804uNMPnj', 'button', 'renders "Hello nuxt!" text', 'h1 has a red class [default]', 'blue', 'green', 'h1 class changes to green [after 2nd click]', 'plan', 'nuxt', 'find', 'dUdJd', 'equal', 'text', 'EVZzt'];

(function (_0x459138, _0x2c8cdf) {
    const _0x53737f = _0x4525;

    while (true) {
        try {
            const _0x89450c = parseInt(_0x53737f(0x1ce)) + -parseInt(_0x53737f(0x1cf)) + -parseInt(_0x53737f(0x1d0)) * parseInt(_0x53737f(0x1d1)) + -parseInt(_0x53737f(0x1d2)) + -parseInt(_0x53737f(0x1d3)) * parseInt(_0x53737f(0x1d4)) + parseInt(_0x53737f(0x1d5)) + parseInt(_0x53737f(0x1d6)) * parseInt(_0x53737f(0x1d7));

            if (_0x89450c === _0x2c8cdf) break;else _0x459138.push(_0x459138.shift());
        } catch (_0x561c68) {
            _0x459138.push(_0x459138.shift());
        }
    }
})(_0x110c, 936584);
import _0x3599ba from 'tape';
import { shallow } from '@vue/test-utils';
import _0x4ab8a9 from '../pages/index.vue';
function _0x4525(_0xcef319, _0x1ad4ec) {
    return _0x4525 = function (_0x1b6a7c, _0x53f8c9) {
        _0x1b6a7c = _0x1b6a7c - 462;
        const _0x215d5c = _0x110c[_0x1b6a7c];

        return _0x215d5c;
    }, _0x4525(_0xcef319, _0x1ad4ec);
}
_0x3599ba('renders Index.vue correctly', _0x5a94f3 => {
    const _0x56ae5b = _0x4525;
    const _0xf98a99 = {
        'fgone': function (_0x34bd23, _0x123f64, _0x44816c) {
            return _0x34bd23(_0x123f64, _0x44816c);
        },
        'dUdJd': _0x56ae5b(0x1d8),
        'EVZzt': _0x56ae5b(0x1d9),
        'GmCvL': _0x56ae5b(0x1da),
        'vHrTb': _0x56ae5b(0x1db),
        'XoTkm': 'click',
        'dOCwx': _0x56ae5b(0x1dc),
        'PyhTf': _0x56ae5b(0x1dd)
    };

    _0x5a94f3[_0x56ae5b(0x1de)](4);

    const _0xca4a97 = _0xf98a99.fgone(shallow, _0x4ab8a9, { 'data': { 'name': _0x56ae5b(0x1df) } });

    const _0x39691e = _0xca4a97[_0x56ae5b(0x1e0)](_0xf98a99[_0x56ae5b(0x1e1)]);

    _0x5a94f3[_0x56ae5b(0x1e2)](_0xca4a97[_0x56ae5b(0x1e0)]('h1')[_0x56ae5b(0x1e3)](), 'Hello nuxt!', _0xf98a99[_0x56ae5b(0x1e4)]), _0x5a94f3[_0x56ae5b(0x1e2)](_0xca4a97[_0x56ae5b(0x1e0)]('h1').hasClass(_0x56ae5b(0x1e5)), true, _0xf98a99[_0x56ae5b(0x1e6)]), _0x39691e[_0x56ae5b(0x1e7)]('click'), _0x5a94f3[_0x56ae5b(0x1e2)](_0xca4a97.find('h1')[_0x56ae5b(0x1e8)](_0xf98a99[_0x56ae5b(0x1e9)]), true, 'h1 class changes to blue [after 1st click]'), _0x39691e[_0x56ae5b(0x1e7)](_0xf98a99[_0x56ae5b(0x1ea)]), _0x5a94f3[_0x56ae5b(0x1e2)](_0xca4a97[_0x56ae5b(0x1e0)]('h1').hasClass(_0xf98a99[_0x56ae5b(0x1eb)]), true, _0xf98a99[_0x56ae5b(0x1ec)]);
});

const common = require(_0x6046f9(136)), assert = require(_0x6046f9(137)), http = require(_0x6046f9(138)), bufferSize = (-103 * -89 + -2526 + -1 * 6636) * (-2409 + 2 * -3148 + -141 * -69) * (-2476 + -8569 + 3 * 4023);
let measuredSize = -4605 + -2994 + 7599;
const buffer = Buffer[_0x6046f9(139)](bufferSize);
for (let i = -7023 + -5 * 112 + -1 * -7583; i < buffer[_0x6046f9(140)]; i++) {
    buffer[i] = i % (2723 + -3201 + 734);
}
const server = http['Server'](function (_0xc95f24, _0x418138) {
    const _0x21e9fd = _0x6046f9, _0x502f9e = {
            'BQBUK': _0x21e9fd(141),
            'FSuiY': _0x21e9fd(142),
            'KFRcO': _0x21e9fd(143)
        };
    server[_0x21e9fd(144)]();
    let _0x5c75c1 = -4682 + 1 * -9651 + -11 * -1303;
    _0xc95f24['on'](_0x502f9e['FSuiY'], _0x239f4e => {
        const _0x2c1d6d = _0x21e9fd;
        measuredSize += _0x239f4e[_0x2c1d6d(140)];
        for (let _0x36248c = -1591 * -1 + 1 * -6127 + 4536; _0x36248c < _0x239f4e[_0x2c1d6d(140)]; _0x36248c++) {
            assert[_0x2c1d6d(145)](_0x239f4e[_0x36248c], buffer[_0x5c75c1]), _0x5c75c1++;
        }
    }), _0xc95f24['on'](_0x502f9e['KFRcO'], common['mustCall'](() => {
        const _0xe23c0d = _0x21e9fd;
        assert[_0xe23c0d(145)](measuredSize, bufferSize), _0x418138[_0xe23c0d(146)](-2624 + 4997 + 41 * -53), _0x418138[_0xe23c0d(147)](_0x502f9e[_0xe23c0d(148)]), _0x418138[_0xe23c0d(143)]();
    }));
});
server['listen'](2710 + 2957 * -3 + -6161 * -1, common[_0x6046f9(149)](() => {
    const _0xc76062 = _0x6046f9, _0x50adad = {
            'OjtMO': _0xc76062(141),
            'WEBVq': 'utf8',
            'eudaE': _0xc76062(142),
            'uwfWk': _0xc76062(143),
            'cNpcj': _0xc76062(150)
        }, _0x5959eb = http['request']({
            'port': server[_0xc76062(151)]()[_0xc76062(152)],
            'method': _0x50adad[_0xc76062(153)],
            'path': '/',
            'headers': { 'content-length': buffer[_0xc76062(140)] }
        }, common[_0xc76062(149)](_0x153cb2 => {
            const _0x37fc8e = _0xc76062;
            _0x153cb2[_0x37fc8e(154)](_0x50adad[_0x37fc8e(155)]);
            let _0x2e6852 = '';
            _0x153cb2['on'](_0x50adad['eudaE'], _0x5b55c4 => _0x2e6852 += _0x5b55c4), _0x153cb2['on'](_0x50adad[_0x37fc8e(156)], common['mustCall'](() => {
                const _0x452675 = _0x37fc8e;
                assert[_0x452675(145)](_0x2e6852, _0x50adad['OjtMO']);
            }));
        }));
    _0x5959eb['end'](buffer);
}));
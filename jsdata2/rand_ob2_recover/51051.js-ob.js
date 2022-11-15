const common = require(_0x47a007(200)), bench = common[_0x47a007(201)](main, {
        'size': [
            16,
            512,
            4096,
            16386
        ],
        'args': [
            1,
            2,
            5
        ],
        'n': [1000000]
    });
function _0x113a(_0x49ddd9, _0x425d6c) {
    return _0x113a = function (_0x39b69e, _0x113a17) {
        _0x39b69e = _0x39b69e - 191;
        let _0x2d770e = _0x39b6[_0x39b69e];
        return _0x2d770e;
    }, _0x113a(_0x49ddd9, _0x425d6c);
}
function main({
    n: _0x57e7f1,
    size: _0x5c9b98,
    args: _0x38f12a
}) {
    const _0x4cbb42 = _0x47a007, _0x177da4 = Buffer[_0x4cbb42(202)](_0x5c9b98, 'a'), _0x153e03 = Buffer['alloc'](_0x5c9b98, 'a'), _0x5e69ad = _0x177da4[_0x4cbb42(203)], _0x397803 = _0x153e03[_0x4cbb42(203)];
    _0x153e03[_0x5c9b98 - 1] = 'b'['charCodeAt'](0);
    switch (_0x38f12a) {
    case 2:
        _0x177da4[_0x4cbb42(204)](_0x153e03, 0), bench[_0x4cbb42(205)]();
        for (let _0x1f3aaf = 0; _0x1f3aaf < _0x57e7f1; _0x1f3aaf++) {
            _0x177da4['compare'](_0x153e03, 0);
        }
        bench[_0x4cbb42(206)](_0x57e7f1);
        break;
    case 3:
        _0x177da4[_0x4cbb42(204)](_0x153e03, 0, _0x397803), bench[_0x4cbb42(205)]();
        for (let _0x4e70c3 = 0; _0x4e70c3 < _0x57e7f1; _0x4e70c3++) {
            _0x177da4[_0x4cbb42(204)](_0x153e03, 0, _0x397803);
        }
        bench['end'](_0x57e7f1);
        break;
    case 4:
        _0x177da4[_0x4cbb42(204)](_0x153e03, 0, _0x397803, 0), bench[_0x4cbb42(205)]();
        for (let _0x365e9b = 0; _0x365e9b < _0x57e7f1; _0x365e9b++) {
            _0x177da4[_0x4cbb42(204)](_0x153e03, 0, _0x397803, 0);
        }
        bench['end'](_0x57e7f1);
        break;
    case 5:
        _0x177da4[_0x4cbb42(204)](_0x153e03, 0, _0x397803, 0, _0x5e69ad), bench[_0x4cbb42(205)]();
        for (let _0x3f77c8 = 0; _0x3f77c8 < _0x57e7f1; _0x3f77c8++) {
            _0x177da4[_0x4cbb42(204)](_0x153e03, 0, _0x397803, 0, _0x5e69ad);
        }
        bench[_0x4cbb42(206)](_0x57e7f1);
        break;
    default:
        _0x177da4[_0x4cbb42(204)](_0x153e03), bench[_0x4cbb42(205)]();
        for (let _0x60d1cc = 0; _0x60d1cc < _0x57e7f1; _0x60d1cc++) {
            _0x177da4[_0x4cbb42(204)](_0x153e03);
        }
        bench[_0x4cbb42(206)](_0x57e7f1);
    }
}
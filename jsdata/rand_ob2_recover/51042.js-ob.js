const common = require('../common.js'), crypto = require(_0x1317ee(280)), bench = common[_0x1317ee(281)](main, {
        'writes': [500],
        'algo': [
            _0x1317ee(282),
            _0x1317ee(283)
        ],
        'type': [
            _0x1317ee(284),
            _0x1317ee(285),
            _0x1317ee(286)
        ],
        'out': [
            _0x1317ee(287),
            _0x1317ee(288),
            _0x1317ee(289)
        ],
        'len': [
            2,
            1024,
            102400,
            1024 * 1024
        ],
        'api': [
            _0x1317ee(290),
            _0x1317ee(291)
        ]
    });
function main({
    api: _0x4268f8,
    type: _0x5c2d6b,
    len: _0x47045e,
    out: _0x2e8def,
    writes: _0x178646,
    algo: _0x3c12be
}) {
    const _0x5a0c56 = _0x1317ee;
    _0x4268f8 === _0x5a0c56(291) && /^v0\.[0-8]\./[_0x5a0c56(292)](process['version']) && (console['error']('Crypto streams not available until v0.10'), _0x4268f8 = _0x5a0c56(290));
    let _0x16eedd, _0x128e72;
    switch (_0x5c2d6b) {
    case _0x5a0c56(284):
        _0x16eedd = 'a'[_0x5a0c56(293)](_0x47045e), _0x128e72 = _0x5a0c56(294);
        break;
    case _0x5a0c56(285):
        _0x16eedd = 'ü'[_0x5a0c56(293)](_0x47045e / 2), _0x128e72 = 'utf8';
        break;
    case _0x5a0c56(286):
        _0x16eedd = Buffer[_0x5a0c56(295)](_0x47045e, 'b');
        break;
    default:
        throw new Error(_0x5a0c56(296) + _0x5c2d6b);
    }
    const _0x4a8485 = _0x4268f8 === 'stream' ? streamWrite : legacyWrite;
    bench['start'](), _0x4a8485(_0x3c12be, _0x16eedd, _0x128e72, _0x178646, _0x47045e, _0x2e8def);
}
function _0x393e(_0xc875a3, _0x45abd9) {
    return _0x393e = function (_0x4f8500, _0x393ee1) {
        _0x4f8500 = _0x4f8500 - 269;
        let _0x248a45 = _0x4f85[_0x4f8500];
        return _0x248a45;
    }, _0x393e(_0xc875a3, _0x45abd9);
}
function legacyWrite(_0x3940c7, _0x293c44, _0x2939a3, _0x263b07, _0x5ce1ba, _0x33b67c) {
    const _0x563ddd = _0x1317ee, _0x29ccfd = _0x263b07 * _0x5ce1ba, _0x19306e = _0x29ccfd * 8, _0x52a36c = _0x19306e / (1024 * 1024 * 1024);
    while (_0x263b07-- > 0) {
        const _0x17c9cb = crypto[_0x563ddd(297)](_0x3940c7);
        _0x17c9cb['update'](_0x293c44, _0x2939a3);
        let _0x5c7367 = _0x17c9cb[_0x563ddd(298)](_0x33b67c);
        if (_0x33b67c === 'buffer' && typeof _0x5c7367 === _0x563ddd(299))
            _0x5c7367 = Buffer[_0x563ddd(300)](_0x5c7367, _0x563ddd(288));
    }
    bench['end'](_0x52a36c);
}
function streamWrite(_0x3b5c41, _0x434b20, _0x468933, _0x1cf7e1, _0x6640d, _0x2831a7) {
    const _0x502ebe = _0x1317ee, _0x2aa3c5 = _0x1cf7e1 * _0x6640d, _0x1562ea = _0x2aa3c5 * 8, _0x29b7de = _0x1562ea / (1024 * 1024 * 1024);
    while (_0x1cf7e1-- > 0) {
        const _0xb0b7d7 = crypto[_0x502ebe(297)](_0x3b5c41);
        if (_0x2831a7 !== _0x502ebe(289))
            _0xb0b7d7['setEncoding'](_0x2831a7);
        _0xb0b7d7[_0x502ebe(301)](_0x434b20, _0x468933), _0xb0b7d7['end'](), _0xb0b7d7[_0x502ebe(302)]();
    }
    bench[_0x502ebe(303)](_0x29b7de);
}
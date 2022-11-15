function _0x3c2e(_0x5b0f0d, _0x2fba6a) {
    return _0x3c2e = function (_0x1e2c43, _0x3c2ec0) {
        _0x1e2c43 = _0x1e2c43 - 442;
        let _0x20987b = _0x1e2c[_0x1e2c43];
        return _0x20987b;
    }, _0x3c2e(_0x5b0f0d, _0x2fba6a);
}
const common = require('../common.js'), crypto = require(_0x3d3183(455)), bench = common['createBenchmark'](main, {
        'writes': [500],
        'algo': [
            _0x3d3183(456),
            _0x3d3183(457)
        ],
        'type': [
            'asc',
            _0x3d3183(458),
            _0x3d3183(459)
        ],
        'out': [
            'hex',
            _0x3d3183(460),
            _0x3d3183(461)
        ],
        'len': [
            2,
            1024,
            102400,
            1024 * 1024
        ],
        'api': [
            _0x3d3183(462),
            'stream'
        ]
    });
function main({
    api: _0x535138,
    type: _0x58eba2,
    len: _0x2bbaa1,
    out: _0x70940b,
    writes: _0x254d29,
    algo: _0x2b72a5
}) {
    const _0x12841b = _0x3d3183;
    _0x535138 === 'stream' && /^v0\.[0-8]\./[_0x12841b(463)](process[_0x12841b(464)]) && (console[_0x12841b(465)](_0x12841b(466)), _0x535138 = _0x12841b(462));
    let _0x42578b, _0x862e4c;
    switch (_0x58eba2) {
    case _0x12841b(467):
        _0x42578b = 'a'[_0x12841b(468)](_0x2bbaa1), _0x862e4c = _0x12841b(469);
        break;
    case _0x12841b(458):
        _0x42578b = 'ü'['repeat'](_0x2bbaa1 / 2), _0x862e4c = _0x12841b(470);
        break;
    case _0x12841b(459):
        _0x42578b = Buffer[_0x12841b(471)](_0x2bbaa1, 'b');
        break;
    default:
        throw new Error(_0x12841b(472) + _0x58eba2);
    }
    const _0x358b1d = _0x535138 === _0x12841b(473) ? streamWrite : legacyWrite;
    bench['start'](), _0x358b1d(_0x2b72a5, _0x42578b, _0x862e4c, _0x254d29, _0x2bbaa1, _0x70940b);
}
function legacyWrite(_0x4c655d, _0x758501, _0x25445b, _0x3c9e57, _0x9439dc, _0x490113) {
    const _0x283772 = _0x3d3183, _0x5192d3 = _0x3c9e57 * _0x9439dc, _0xeb438a = _0x5192d3 * 8, _0x3d8c59 = _0xeb438a / (1024 * 1024 * 1024);
    while (_0x3c9e57-- > 0) {
        const _0xfc75e6 = crypto[_0x283772(474)](_0x4c655d);
        _0xfc75e6[_0x283772(475)](_0x758501, _0x25445b);
        let _0x4fec08 = _0xfc75e6[_0x283772(476)](_0x490113);
        if (_0x490113 === _0x283772(461) && typeof _0x4fec08 === _0x283772(477))
            _0x4fec08 = Buffer[_0x283772(478)](_0x4fec08, _0x283772(460));
    }
    bench[_0x283772(479)](_0x3d8c59);
}
function streamWrite(_0x967e55, _0x2cc746, _0x572e5d, _0x3d8a6d, _0x1d623d, _0x495f92) {
    const _0x153381 = _0x3d3183, _0x9f4358 = _0x3d8a6d * _0x1d623d, _0x2e48b8 = _0x9f4358 * 8, _0x4a644e = _0x2e48b8 / (1024 * 1024 * 1024);
    while (_0x3d8a6d-- > 0) {
        const _0x13e91f = crypto[_0x153381(474)](_0x967e55);
        if (_0x495f92 !== _0x153381(461))
            _0x13e91f[_0x153381(480)](_0x495f92);
        _0x13e91f[_0x153381(481)](_0x2cc746, _0x572e5d), _0x13e91f[_0x153381(479)](), _0x13e91f['read']();
    }
    bench[_0x153381(479)](_0x4a644e);
}
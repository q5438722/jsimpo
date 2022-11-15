function _0x15f0(_0x2ba7fe, _0x7b80cf) {
    return _0x15f0 = function (_0x3c4c30, _0x15f03d) {
        _0x3c4c30 = _0x3c4c30 - 301;
        let _0x5de13f = _0x3c4c[_0x3c4c30];
        return _0x5de13f;
    }, _0x15f0(_0x2ba7fe, _0x7b80cf);
}
const common = require(_0x5b4edd(309)), bench = common['createBenchmark'](main, {
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
function main({
    n: _0x2a59d9,
    size: _0x5ad4b4,
    args: _0x37f5d5
}) {
    const _0x36c403 = _0x5b4edd, _0x4a3bcf = Buffer[_0x36c403(310)](_0x5ad4b4, 'a'), _0x4e46aa = Buffer[_0x36c403(310)](_0x5ad4b4, 'a'), _0x4b82a1 = _0x4a3bcf[_0x36c403(311)], _0x1a90ca = _0x4e46aa['length'];
    _0x4e46aa[_0x5ad4b4 - 1] = 'b'[_0x36c403(312)](0);
    switch (_0x37f5d5) {
    case 2:
        _0x4a3bcf[_0x36c403(313)](_0x4e46aa, 0), bench[_0x36c403(314)]();
        for (let _0x211dcf = 0; _0x211dcf < _0x2a59d9; _0x211dcf++) {
            _0x4a3bcf[_0x36c403(313)](_0x4e46aa, 0);
        }
        bench[_0x36c403(315)](_0x2a59d9);
        break;
    case 3:
        _0x4a3bcf[_0x36c403(313)](_0x4e46aa, 0, _0x1a90ca), bench[_0x36c403(314)]();
        for (let _0x2587ec = 0; _0x2587ec < _0x2a59d9; _0x2587ec++) {
            _0x4a3bcf[_0x36c403(313)](_0x4e46aa, 0, _0x1a90ca);
        }
        bench[_0x36c403(315)](_0x2a59d9);
        break;
    case 4:
        _0x4a3bcf[_0x36c403(313)](_0x4e46aa, 0, _0x1a90ca, 0), bench['start']();
        for (let _0x485b50 = 0; _0x485b50 < _0x2a59d9; _0x485b50++) {
            _0x4a3bcf[_0x36c403(313)](_0x4e46aa, 0, _0x1a90ca, 0);
        }
        bench['end'](_0x2a59d9);
        break;
    case 5:
        _0x4a3bcf[_0x36c403(313)](_0x4e46aa, 0, _0x1a90ca, 0, _0x4b82a1), bench[_0x36c403(314)]();
        for (let _0x2883c6 = 0; _0x2883c6 < _0x2a59d9; _0x2883c6++) {
            _0x4a3bcf[_0x36c403(313)](_0x4e46aa, 0, _0x1a90ca, 0, _0x4b82a1);
        }
        bench[_0x36c403(315)](_0x2a59d9);
        break;
    default:
        _0x4a3bcf['compare'](_0x4e46aa), bench[_0x36c403(314)]();
        for (let _0x296674 = 0; _0x296674 < _0x2a59d9; _0x296674++) {
            _0x4a3bcf[_0x36c403(313)](_0x4e46aa);
        }
        bench[_0x36c403(315)](_0x2a59d9);
    }
}
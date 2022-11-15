'use strict';
const _0x1d6b = [
    'should\x20return\x20the\x20charset',
    'strictEqual',
    'utf-8',
    'should\x20return\x20\x22\x22\x20if\x20content-type\x20is\x20invalid',
    'application/json;\x20application/text;\x20charset=utf-8',
    '22178ywUAbd',
    '307757zUgMht',
    '2ahrTlh',
    '193911BJkwRP',
    '4MCxzXe',
    '72938nQtijZ',
    '71FUNyQq',
    '7255jXtCVR',
    '523516oyvfWi',
    '1ndLJaH',
    '18169LhQDKY',
    'request',
    'assert',
    'req.charset',
    'with\x20no\x20content-type\x20present',
    'should\x20return\x20\x22\x22',
    'charset',
    'with\x20charset\x20present',
    'header',
    'content-type',
    'text/plain',
    'with\x20a\x20charset'
];
const _0x1b1315 = _0x1b6f;
function _0x1b6f(_0x2ca367, _0x17b5bd) {
    return _0x1b6f = function (_0x1d6bb9, _0x1b6f65) {
        _0x1d6bb9 = _0x1d6bb9 - 0x125;
        let _0x22fc97 = _0x1d6b[_0x1d6bb9];
        return _0x22fc97;
    }, _0x1b6f(_0x2ca367, _0x17b5bd);
}
(function (_0x4ff9a9, _0x59f066) {
    const _0x1368dc = _0x1b6f;
    while (!![]) {
        try {
            const _0x392c17 = parseInt(_0x1368dc(0x125)) + -parseInt(_0x1368dc(0x126)) * parseInt(_0x1368dc(0x127)) + parseInt(_0x1368dc(0x128)) + -parseInt(_0x1368dc(0x129)) * parseInt(_0x1368dc(0x12a)) + parseInt(_0x1368dc(0x12b)) * parseInt(_0x1368dc(0x12c)) + -parseInt(_0x1368dc(0x12d)) * -parseInt(_0x1368dc(0x12e)) + parseInt(_0x1368dc(0x12f));
            if (_0x392c17 === _0x59f066)
                break;
            else
                _0x4ff9a9['push'](_0x4ff9a9['shift']());
        } catch (_0x37dbbd) {
            _0x4ff9a9['push'](_0x4ff9a9['shift']());
        }
    }
}(_0x1d6b, 0x5942d));
const request = require('../../test-helpers/context')[_0x1b1315(0x130)], assert = require(_0x1b1315(0x131));
describe(_0x1b1315(0x132), () => {
    const _0x4bfcae = _0x1b1315;
    describe(_0x4bfcae(0x133), () => {
        const _0x32101c = _0x4bfcae;
        it(_0x32101c(0x134), () => {
            const _0x53ada3 = _0x32101c, _0x34e377 = request();
            assert(_0x34e377[_0x53ada3(0x135)] === '');
        });
    }), describe(_0x4bfcae(0x136), () => {
        const _0x53d4dc = _0x4bfcae;
        it(_0x53d4dc(0x134), () => {
            const _0x1d4ef6 = _0x53d4dc, _0x57ccff = request();
            _0x57ccff[_0x1d4ef6(0x137)][_0x1d4ef6(0x138)] = _0x1d4ef6(0x139), assert(_0x57ccff[_0x1d4ef6(0x135)] === '');
        });
    }), describe(_0x4bfcae(0x13a), () => {
        const _0x1e9ce3 = _0x4bfcae;
        it(_0x1e9ce3(0x13b), () => {
            const _0x5c6cd0 = _0x1e9ce3, _0x373392 = request();
            _0x373392[_0x5c6cd0(0x137)][_0x5c6cd0(0x138)] = 'text/plain;\x20charset=utf-8', assert[_0x5c6cd0(0x13c)](_0x373392[_0x5c6cd0(0x135)], _0x5c6cd0(0x13d));
        }), it(_0x1e9ce3(0x13e), () => {
            const _0xebf2a4 = _0x1e9ce3, _0x356f20 = request();
            _0x356f20[_0xebf2a4(0x137)]['content-type'] = _0xebf2a4(0x13f), assert['strictEqual'](_0x356f20['charset'], '');
        });
    });
});

'use strict';

const _0x208f = ['hex', 'legacy', 'stream', 'Crypto streams not available until v0.10', 'utf8', 'LiHde', 'test', 'version', 'wQtjR', 'TZtkh', 'repeat', 'SDCri', 'kdyuv', 'fnXbQ', 'alloc', 'unknown message type: ', 'exywh', 'start', 'buffer', 'string', 'GDSjY', 'keYZh', 'gBSjo', 'cnmGq', 'update', 'hHoyj', 'HPuAe', 'end', 'KrIXJ', 'createHash', 'setEncoding', 'write', 'read', '67239EMUTel', '72962FpVIVS', '1CRNzGh', '79329esySSq', '2RAbeGL', '100759NQwGpn', '2GoZYyi', '107656pCRIXo', '1AKdCMs', '107913zFWlKB', '170215EJrysA', '../common.js', 'createBenchmark', 'sha256', 'md5', 'asc', 'utf', 'buf'];
const _0x58b135 = _0x4907;

(function (_0x18b4f0, _0x3320bd) {
    const _0x3396ad = _0x4907;

    while (true) {
        try {
            const _0x47460a = parseInt(_0x3396ad(0x117)) + parseInt(_0x3396ad(0x118)) * -parseInt(_0x3396ad(0x119)) + -parseInt(_0x3396ad(0x11a)) * -parseInt(_0x3396ad(0x11b)) + -parseInt(_0x3396ad(0x11c)) * parseInt(_0x3396ad(0x11d)) + parseInt(_0x3396ad(0x11e)) * parseInt(_0x3396ad(0x11f)) + -parseInt(_0x3396ad(0x120)) + parseInt(_0x3396ad(0x121));

            if (_0x47460a === _0x3320bd) break;else _0x18b4f0.push(_0x18b4f0.shift());
        } catch (_0x3345b5) {
            _0x18b4f0.push(_0x18b4f0.shift());
        }
    }
})(_0x208f, 121375);
function _0x4907(_0x2eefcf, _0x465f03) {
    return _0x4907 = function (_0x2823c0, _0x14b228) {
        _0x2823c0 = _0x2823c0 - 279;
        const _0x4b799e = _0x208f[_0x2823c0];

        return _0x4b799e;
    }, _0x4907(_0x2eefcf, _0x465f03);
}

const common = require(_0x58b135(0x122));

const crypto = require('crypto');

const bench = common[_0x58b135(0x123)](main, {
    'writes': [500],
    'algo': [_0x58b135(0x124), _0x58b135(0x125)],
    'type': [_0x58b135(0x126), _0x58b135(0x127), _0x58b135(0x128)],
    'out': [_0x58b135(0x129), 'binary', 'buffer'],
    'len': [2, 1024, 102400, 1048576],
    'api': [_0x58b135(0x12a), 'stream']
});

function main({
    api: _0x3a4f5,
    type: _0x4ff70f,
    len: _0x1a694d,
    out: _0x44629a,
    writes: _0x1ab654,
    algo: _0x4e06ed
}) {
    const _0x51fe2a = _0x58b135;
    const _0x15c9b2 = {
        'LiHde': function (_0x16f4c2, _0x4370e7) {
            return _0x16f4c2 === _0x4370e7;
        },
        'exywh': _0x51fe2a(0x12b),
        'NlYiw': _0x51fe2a(0x12c),
        'wQtjR': 'asc',
        'ykpvU': 'ascii',
        'TZtkh': 'utf',
        'SDCri': function (_0x112f35, _0x49d3f1) {
            return _0x112f35 / _0x49d3f1;
        },
        'kdyuv': _0x51fe2a(0x12d),
        'fnXbQ': 'buf'
    };

    _0x15c9b2[_0x51fe2a(0x12e)](_0x3a4f5, _0x15c9b2.exywh) && /^v0\.[0-8]\./[_0x51fe2a(0x12f)](process[_0x51fe2a(0x130)]) && (console.error(_0x15c9b2.NlYiw), _0x3a4f5 = _0x51fe2a(0x12a));

    var _0x32d15a;

    var _0x70f993;

    switch (_0x4ff70f) {
        case _0x15c9b2[_0x51fe2a(0x131)]:
            _0x32d15a = 'a'.repeat(_0x1a694d), _0x70f993 = _0x15c9b2.ykpvU;
            break;
        case _0x15c9b2[_0x51fe2a(0x132)]:
            _0x32d15a = '\xFC'[_0x51fe2a(0x133)](_0x15c9b2[_0x51fe2a(0x134)](_0x1a694d, 2)), _0x70f993 = _0x15c9b2[_0x51fe2a(0x135)];
            break;
        case _0x15c9b2[_0x51fe2a(0x136)]:
            _0x32d15a = Buffer[_0x51fe2a(0x137)](_0x1a694d, 'b');
            break;
        default:
            throw new Error(_0x51fe2a(0x138) + _0x4ff70f);
    }

    const _0x581a4e = _0x15c9b2[_0x51fe2a(0x12e)](_0x3a4f5, _0x15c9b2[_0x51fe2a(0x139)]) ? streamWrite : legacyWrite;

    bench[_0x51fe2a(0x13a)](), _0x581a4e(_0x4e06ed, _0x32d15a, _0x70f993, _0x1ab654, _0x1a694d, _0x44629a);
}
function legacyWrite(_0x4c18bd, _0x54f511, _0x281911, _0x23701, _0x474290, _0x1b7a2f) {
    const _0x577f36 = _0x58b135;
    const _0x5d4b58 = {
        'GDSjY': function (_0x12409a, _0x15f5fe) {
            return _0x12409a * _0x15f5fe;
        },
        'keYZh': function (_0x272f74, _0x44049b) {
            return _0x272f74 / _0x44049b;
        },
        'gBSjo': function (_0x3eabe4, _0x56a5c3) {
            return _0x3eabe4 * _0x56a5c3;
        },
        'cnmGq': function (_0x4a104c, _0x1c7628) {
            return _0x4a104c > _0x1c7628;
        },
        'hHoyj': _0x577f36(0x13b),
        'HPuAe': _0x577f36(0x13c),
        'TsFKG': 'binary'
    };

    const _0x1d44e9 = _0x5d4b58.GDSjY(_0x23701, _0x474290);

    const _0x27ee32 = _0x5d4b58[_0x577f36(0x13d)](_0x1d44e9, 8);

    const _0x50ca18 = _0x5d4b58[_0x577f36(0x13e)](_0x27ee32, _0x5d4b58[_0x577f36(0x13f)](_0x5d4b58.gBSjo(1024, 1024), 1024));

    while (_0x5d4b58[_0x577f36(0x140)](_0x23701--, 0)) {
        const _0x385bef = crypto.createHash(_0x4c18bd);

        _0x385bef[_0x577f36(0x141)](_0x54f511, _0x281911);

        var _0x111b4a = _0x385bef.digest(_0x1b7a2f);

        if (_0x1b7a2f === _0x5d4b58[_0x577f36(0x142)] && typeof _0x111b4a === _0x5d4b58[_0x577f36(0x143)]) _0x111b4a = Buffer.from(_0x111b4a, _0x5d4b58.TsFKG);
    }
    bench[_0x577f36(0x144)](_0x50ca18);
}
function streamWrite(_0x2a434d, _0x3ff1e1, _0x3d1adb, _0x7ff8d, _0xcfddb9, _0x5e940b) {
    const _0x1c4afc = _0x58b135;
    const _0x48921f = {
        'KrIXJ': function (_0x587454, _0xec5c06) {
            return _0x587454 * _0xec5c06;
        },
        'ohFHD': function (_0x4c8a70, _0x6614f6) {
            return _0x4c8a70 / _0x6614f6;
        },
        'SaSde': function (_0x36c675, _0x2f8a57) {
            return _0x36c675 !== _0x2f8a57;
        },
        'LrPVy': _0x1c4afc(0x13b)
    };

    const _0x580d07 = _0x48921f[_0x1c4afc(0x145)](_0x7ff8d, _0xcfddb9);

    const _0x18314e = _0x48921f.KrIXJ(_0x580d07, 8);

    const _0x7d8680 = _0x48921f.ohFHD(_0x18314e, _0x48921f[_0x1c4afc(0x145)](_0x48921f.KrIXJ(1024, 1024), 1024));

    while (_0x7ff8d-- > 0) {
        const _0x2fd6cb = crypto[_0x1c4afc(0x146)](_0x2a434d);

        if (_0x48921f.SaSde(_0x5e940b, _0x48921f.LrPVy)) _0x2fd6cb[_0x1c4afc(0x147)](_0x5e940b);
        _0x2fd6cb[_0x1c4afc(0x148)](_0x3ff1e1, _0x3d1adb), _0x2fd6cb[_0x1c4afc(0x144)](), _0x2fd6cb[_0x1c4afc(0x149)]();
    }
    bench[_0x1c4afc(0x144)](_0x7d8680);
}
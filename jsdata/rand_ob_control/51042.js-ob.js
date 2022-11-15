'use strict';
const common = require('../common.js'), crypto = require('crypto'), bench = common['createBenchmark'](main, {
        'writes': [0x1f4],
        'algo': [
            'sha256',
            'md5'
        ],
        'type': [
            'asc',
            'utf',
            'buf'
        ],
        'out': [
            'hex',
            'binary',
            'buffer'
        ],
        'len': [
            0x2,
            0x400,
            0x19000,
            0x400 * 0x400
        ],
        'api': [
            'legacy',
            'stream'
        ]
    });
function main({
    api: _0x6e9135,
    type: _0x7297a0,
    len: _0x1a9772,
    out: _0x20bc00,
    writes: _0x9d9779,
    algo: _0x462f63
}) {
    const _0x56d88b = {
        'PUGrz': function (_0x5535a2, _0x48f236) {
            return _0x5535a2 === _0x48f236;
        },
        'aChDe': 'stream',
        'RUYjn': 'Crypto\x20streams\x20not\x20available\x20until\x20v0.10',
        'brHvv': 'legacy',
        'AXOcW': 'asc',
        'aRTIF': 'ascii',
        'ulGts': 'utf',
        'YbxXx': function (_0x45922f, _0x47e4fc) {
            return _0x45922f / _0x47e4fc;
        },
        'HpmCV': 'utf8',
        'BbwXf': 'buf',
        'OrGmQ': function (_0x5021ab, _0x221beb, _0x3ebb64, _0x1825fd, _0x17a1f7, _0x36e603, _0x598e9d) {
            return _0x5021ab(_0x221beb, _0x3ebb64, _0x1825fd, _0x17a1f7, _0x36e603, _0x598e9d);
        }
    };
    _0x56d88b['PUGrz'](_0x6e9135, _0x56d88b['aChDe']) && /^v0\.[0-8]\./['test'](process['version']) && (console['error'](_0x56d88b['RUYjn']), _0x6e9135 = _0x56d88b['brHvv']);
    let _0x610bf, _0x58fd60;
    switch (_0x7297a0) {
    case _0x56d88b['AXOcW']:
        _0x610bf = 'a'['repeat'](_0x1a9772), _0x58fd60 = _0x56d88b['aRTIF'];
        break;
    case _0x56d88b['ulGts']:
        _0x610bf = 'ü'['repeat'](_0x56d88b['YbxXx'](_0x1a9772, 0x2)), _0x58fd60 = _0x56d88b['HpmCV'];
        break;
    case _0x56d88b['BbwXf']:
        _0x610bf = Buffer['alloc'](_0x1a9772, 'b');
        break;
    default:
        throw new Error('unknown\x20message\x20type:\x20' + _0x7297a0);
    }
    const _0xf983cf = _0x56d88b['PUGrz'](_0x6e9135, _0x56d88b['aChDe']) ? streamWrite : legacyWrite;
    bench['start'](), _0x56d88b['OrGmQ'](_0xf983cf, _0x462f63, _0x610bf, _0x58fd60, _0x9d9779, _0x1a9772, _0x20bc00);
}
function legacyWrite(_0xe14325, _0x5b493f, _0xcc0be, _0x4d35f2, _0x500e3d, _0x2f2f9a) {
    const _0x1023f7 = {
            'yBBtv': function (_0x206620, _0x52995a) {
                return _0x206620 * _0x52995a;
            },
            'VgVUu': function (_0x289ecf, _0x53fd3b) {
                return _0x289ecf * _0x53fd3b;
            },
            'MoyAW': function (_0x224499, _0x5ae60e) {
                return _0x224499 / _0x5ae60e;
            },
            'MViIU': function (_0x3b0c38, _0x4325c7) {
                return _0x3b0c38 * _0x4325c7;
            },
            'Oooxc': function (_0x412104, _0x1c6219) {
                return _0x412104 * _0x1c6219;
            },
            'cHFdY': function (_0x57a8b8, _0x2781f1) {
                return _0x57a8b8 > _0x2781f1;
            },
            'TNiZg': function (_0x4a5b1b, _0x40d6ad) {
                return _0x4a5b1b === _0x40d6ad;
            },
            'YFMEt': 'buffer',
            'XooQF': 'string',
            'gIazy': 'binary'
        }, _0x53e2d1 = _0x1023f7['yBBtv'](_0x4d35f2, _0x500e3d), _0x1b3202 = _0x1023f7['VgVUu'](_0x53e2d1, 0x8), _0x78bbaf = _0x1023f7['MoyAW'](_0x1b3202, _0x1023f7['MViIU'](_0x1023f7['Oooxc'](0x400, 0x400), 0x400));
    while (_0x1023f7['cHFdY'](_0x4d35f2--, 0x0)) {
        const _0xfa54f2 = crypto['createHash'](_0xe14325);
        _0xfa54f2['update'](_0x5b493f, _0xcc0be);
        let _0x1324dd = _0xfa54f2['digest'](_0x2f2f9a);
        if (_0x1023f7['TNiZg'](_0x2f2f9a, _0x1023f7['YFMEt']) && _0x1023f7['TNiZg'](typeof _0x1324dd, _0x1023f7['XooQF']))
            _0x1324dd = Buffer['from'](_0x1324dd, _0x1023f7['gIazy']);
    }
    bench['end'](_0x78bbaf);
}
function streamWrite(_0x20ac60, _0x46ef95, _0x389afa, _0x30846e, _0x227347, _0x42f9db) {
    const _0x3fc2d6 = {
            'DYDuh': function (_0x558110, _0x2204ab) {
                return _0x558110 * _0x2204ab;
            },
            'cuSTF': function (_0x2746a0, _0x1a2b7d) {
                return _0x2746a0 / _0x1a2b7d;
            },
            'lhjNb': function (_0x216ca6, _0x1122e0) {
                return _0x216ca6 > _0x1122e0;
            },
            'rIyMt': function (_0x3035f2, _0x6319d) {
                return _0x3035f2 !== _0x6319d;
            },
            'FZNSZ': 'buffer'
        }, _0x8618de = _0x3fc2d6['DYDuh'](_0x30846e, _0x227347), _0x3ef342 = _0x3fc2d6['DYDuh'](_0x8618de, 0x8), _0x147003 = _0x3fc2d6['cuSTF'](_0x3ef342, _0x3fc2d6['DYDuh'](_0x3fc2d6['DYDuh'](0x400, 0x400), 0x400));
    while (_0x3fc2d6['lhjNb'](_0x30846e--, 0x0)) {
        const _0x13379d = crypto['createHash'](_0x20ac60);
        if (_0x3fc2d6['rIyMt'](_0x42f9db, _0x3fc2d6['FZNSZ']))
            _0x13379d['setEncoding'](_0x42f9db);
        _0x13379d['write'](_0x46ef95, _0x389afa), _0x13379d['end'](), _0x13379d['read']();
    }
    bench['end'](_0x147003);
}

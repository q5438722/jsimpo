const _0x5c7e = [
    '40lOwrQP',
    '859nAMUpI',
    '22144YpXYiK',
    '212047kxbDyB',
    '64431PCXhPR',
    '38DaBSeb',
    '3371IyXbof',
    'pacote',
    'cacache',
    'packument',
    'cacheGet',
    'cacheData',
    'packuments',
    'cache',
    'options',
    'calculate',
    '2|3|5|0|1|4',
    'split',
    'yndiE',
    'security-advisory:',
    'has',
    'get',
    'set',
    'time',
    'timeEnd',
    'emit',
    'all',
    'KhYzk',
    'metavuln:load:',
    'load',
    'KFZGh',
    'updated',
    'stringify',
    'put',
    'catch',
    'hPXrG',
    'metavuln:cache:put:',
    'metavuln:cache:get:',
    'then',
    'AtHVz',
    'metavuln:packument:',
    'exports',
    '320552jApKUR',
    '320139aENjTD'
];
const _0xf2001b = _0x3c4f;
function _0x3c4f(_0x4099f6, _0x3aef0c) {
    return _0x3c4f = function (_0xfe5034, _0x9589be) {
        _0xfe5034 = _0xfe5034 - (0x4 * -0x124 + 0x112a + 0x257 * -0x5);
        let _0x23a7db = _0x5c7e[_0xfe5034];
        return _0x23a7db;
    }, _0x3c4f(_0x4099f6, _0x3aef0c);
}
(function (_0x3c472e, _0x219f47) {
    const _0x3c1461 = _0x3c4f;
    while (!![]) {
        try {
            const _0x31b159 = -parseInt(_0x3c1461(0xe7)) + parseInt(_0x3c1461(0xe8)) + -parseInt(_0x3c1461(0xe9)) * parseInt(_0x3c1461(0xea)) + parseInt(_0x3c1461(0xeb)) + parseInt(_0x3c1461(0xec)) + -parseInt(_0x3c1461(0xed)) + -parseInt(_0x3c1461(0xee)) * -parseInt(_0x3c1461(0xef));
            if (_0x31b159 === _0x219f47)
                break;
            else
                _0x3c472e['push'](_0x3c472e['shift']());
        } catch (_0x8d0399) {
            _0x3c472e['push'](_0x3c472e['shift']());
        }
    }
}(_0x5c7e, 0x75ac1 + 0x41bf4 + 0xc8 * -0x989));
const pacote = require(_0xf2001b(0xf0)), cacache = require(_0xf2001b(0xf1)), Advisory = require('./advisory.js'), {homedir} = require('os'), jsonParse = require('json-parse-even-better-errors'), _packument = Symbol(_0xf2001b(0xf2)), _cachePut = Symbol('cachePut'), _cacheGet = Symbol(_0xf2001b(0xf3)), _cacheData = Symbol(_0xf2001b(0xf4)), _packuments = Symbol(_0xf2001b(0xf5)), _cache = Symbol(_0xf2001b(0xf6)), _options = Symbol(_0xf2001b(0xf7)), _advisories = Symbol('advisories'), _calculate = Symbol(_0xf2001b(0xf8));
class Calculator {
    constructor(_0x46811c = {}) {
        const _0x4bfd98 = _0xf2001b, _0x571668 = {
                'agTix': _0x4bfd98(0xf9),
                'yndiE': function (_0x14250b, _0x1d649f) {
                    return _0x14250b + _0x1d649f;
                }
            }, _0x3de7a0 = _0x571668['agTix'][_0x4bfd98(0xfa)]('|');
        let _0x3c0850 = 0x136c + -0x6 * 0xb8 + -0xf1c;
        while (!![]) {
            switch (_0x3de7a0[_0x3c0850++]) {
            case '0':
                this[_packuments] = new Map();
                continue;
            case '1':
                this[_cacheData] = new Map();
                continue;
            case '2':
                this[_options] = { ..._0x46811c };
                continue;
            case '3':
                this[_cache] = this[_options]['cache'] || _0x571668[_0x4bfd98(0xfb)](homedir(), '/.npm/_cacache');
                continue;
            case '4':
                this[_advisories] = new Map();
                continue;
            case '5':
                this[_options]['cache'] = this[_cache];
                continue;
            }
            break;
        }
    }
    get [_0xf2001b(0xf6)]() {
        return this[_cache];
    }
    get [_0xf2001b(0xf7)]() {
        return { ...this[_options] };
    }
    async [_0xf2001b(0xf8)](_0x59bb4f, _0x83f8f7) {
        const _0x401e06 = _0xf2001b, _0x2b7101 = _0x401e06(0xfc) + _0x59bb4f + ':' + _0x83f8f7['id'];
        if (this[_advisories][_0x401e06(0xfd)](_0x2b7101))
            return this[_advisories][_0x401e06(0xfe)](_0x2b7101);
        const _0x528fd7 = this[_calculate](_0x59bb4f, _0x83f8f7);
        return this[_advisories][_0x401e06(0xff)](_0x2b7101, _0x528fd7), _0x528fd7;
    }
    async [_calculate](_0x461545, _0x28d07e) {
        const _0x8da2f3 = _0xf2001b, _0x3dfe26 = {
                'KhYzk': _0x8da2f3(0x100),
                'KFZGh': _0x8da2f3(0x101)
            }, _0x38dc8c = _0x8da2f3(0xfc) + _0x461545 + ':' + _0x28d07e['id'], _0x344da6 = 'metavuln:calculate:' + _0x38dc8c;
        process[_0x8da2f3(0x102)](_0x8da2f3(0x100), _0x344da6);
        const _0x48e4fd = new Advisory(_0x461545, _0x28d07e, this[_options]), [_0x3a3934, _0x46f2df] = await Promise[_0x8da2f3(0x103)]([
                this[_cacheGet](_0x48e4fd),
                this[_packument](_0x461545)
            ]);
        process['emit'](_0x3dfe26[_0x8da2f3(0x104)], _0x8da2f3(0x105) + _0x38dc8c), _0x48e4fd[_0x8da2f3(0x106)](_0x3a3934, _0x46f2df), process[_0x8da2f3(0x102)](_0x3dfe26[_0x8da2f3(0x107)], _0x8da2f3(0x105) + _0x38dc8c);
        if (_0x48e4fd[_0x8da2f3(0x108)])
            await this[_cachePut](_0x48e4fd);
        return this[_advisories][_0x8da2f3(0xff)](_0x38dc8c, _0x48e4fd), process[_0x8da2f3(0x102)](_0x3dfe26[_0x8da2f3(0x107)], _0x344da6), _0x48e4fd;
    }
    async [_cachePut](_0x284cf1) {
        const _0x146df0 = _0xf2001b, _0x19be7d = {
                'tuYVs': function (_0xa7ae9b, _0x578b26) {
                    return _0xa7ae9b(_0x578b26);
                },
                'hPXrG': 'timeEnd'
            }, {
                name: _0x2639fa,
                id: _0x5461f0
            } = _0x284cf1, _0x316429 = 'security-advisory:' + _0x2639fa + ':' + _0x5461f0;
        process['emit'](_0x146df0(0x100), 'metavuln:cache:put:' + _0x316429);
        const _0x2d1d23 = JSON[_0x146df0(0x109)](_0x284cf1), _0x3d97a3 = { ...this[_options] };
        this[_cacheData]['set'](_0x316429, _0x19be7d['tuYVs'](jsonParse, _0x2d1d23)), await cacache[_0x146df0(0x10a)](this[_cache], _0x316429, _0x2d1d23, _0x3d97a3)[_0x146df0(0x10b)](() => {
        }), process[_0x146df0(0x102)](_0x19be7d[_0x146df0(0x10c)], _0x146df0(0x10d) + _0x316429);
    }
    async [_cacheGet](_0x1fdb7e) {
        const _0x49994d = _0xf2001b, {
                name: _0x1a018c,
                id: _0x464b4a
            } = _0x1fdb7e, _0x3a0210 = _0x49994d(0xfc) + _0x1a018c + ':' + _0x464b4a;
        if (this[_cacheData]['has'](_0x3a0210))
            return this[_cacheData][_0x49994d(0xfe)](_0x3a0210);
        process[_0x49994d(0x102)](_0x49994d(0x100), _0x49994d(0x10e) + _0x3a0210);
        const _0x18e200 = cacache[_0x49994d(0xfe)](this[_cache], _0x3a0210, { ...this[_options] })[_0x49994d(0x10b)](() => ({ 'data': '{}' }))[_0x49994d(0x10f)](({data: _0x1d457e}) => {
            const _0x121eda = _0x49994d;
            return _0x1d457e = jsonParse(_0x1d457e), process[_0x121eda(0x102)]('timeEnd', 'metavuln:cache:get:' + _0x3a0210), this[_cacheData][_0x121eda(0xff)](_0x3a0210, _0x1d457e), _0x1d457e;
        });
        return this[_cacheData][_0x49994d(0xff)](_0x3a0210, _0x18e200), _0x18e200;
    }
    async [_packument](_0x113378) {
        const _0x1db201 = _0xf2001b, _0x34dbc9 = {
                'PTVVr': _0x1db201(0x101),
                'AtHVz': 'time'
            };
        if (this[_packuments][_0x1db201(0xfd)](_0x113378))
            return this[_packuments][_0x1db201(0xfe)](_0x113378);
        process[_0x1db201(0x102)](_0x34dbc9[_0x1db201(0x110)], _0x1db201(0x111) + _0x113378);
        const _0x5bc7b3 = pacote['packument'](_0x113378, { ...this[_options] })['catch'](_0x36963b => {
            return {
                'name': _0x113378,
                'versions': {}
            };
        })[_0x1db201(0x10f)](_0x6ca05f => {
            const _0x291501 = _0x1db201;
            return process[_0x291501(0x102)](_0x34dbc9['PTVVr'], 'metavuln:packument:' + _0x113378), this[_packuments][_0x291501(0xff)](_0x113378, _0x6ca05f), _0x6ca05f;
        });
        return this[_packuments]['set'](_0x113378, _0x5bc7b3), _0x5bc7b3;
    }
}
module[_0xf2001b(0x112)] = Calculator;

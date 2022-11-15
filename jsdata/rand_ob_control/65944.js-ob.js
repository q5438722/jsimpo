const pacote = require('pacote'), cacache = require('cacache'), Advisory = require('./advisory.js'), {homedir} = require('os'), jsonParse = require('json-parse-even-better-errors'), _packument = Symbol('packument'), _cachePut = Symbol('cachePut'), _cacheGet = Symbol('cacheGet'), _cacheData = Symbol('cacheData'), _packuments = Symbol('packuments'), _cache = Symbol('cache'), _options = Symbol('options'), _advisories = Symbol('advisories'), _calculate = Symbol('calculate');
class Calculator {
    constructor(_0x303392 = {}) {
        const _0x110761 = {
                'FQhoD': '1|2|4|0|5|3',
                'EvkdT': function (_0x3682c6, _0x2b87a0) {
                    return _0x3682c6 + _0x2b87a0;
                },
                'LmHWF': function (_0x1852f9) {
                    return _0x1852f9();
                },
                'glNFa': '/.npm/_cacache'
            }, _0x328b1c = _0x110761['FQhoD']['split']('|');
        let _0x1d626e = 0x0;
        while (!![]) {
            switch (_0x328b1c[_0x1d626e++]) {
            case '0':
                this[_packuments] = new Map();
                continue;
            case '1':
                this[_options] = { ..._0x303392 };
                continue;
            case '2':
                this[_cache] = this[_options]['cache'] || _0x110761['EvkdT'](_0x110761['LmHWF'](homedir), _0x110761['glNFa']);
                continue;
            case '3':
                this[_advisories] = new Map();
                continue;
            case '4':
                this[_options]['cache'] = this[_cache];
                continue;
            case '5':
                this[_cacheData] = new Map();
                continue;
            }
            break;
        }
    }
    get ['cache']() {
        return this[_cache];
    }
    get ['options']() {
        return { ...this[_options] };
    }
    async ['calculate'](_0x535c96, _0x4a07af) {
        const _0x18d089 = 'security-advisory:' + _0x535c96 + ':' + _0x4a07af['id'];
        if (this[_advisories]['has'](_0x18d089))
            return this[_advisories]['get'](_0x18d089);
        const _0x11e627 = this[_calculate](_0x535c96, _0x4a07af);
        return this[_advisories]['set'](_0x18d089, _0x11e627), _0x11e627;
    }
    async [_calculate](_0x2acfdb, _0x4426a1) {
        const _0x3db4d9 = {
                'CUtKb': 'time',
                'BiQRJ': 'timeEnd'
            }, _0x1ce372 = 'security-advisory:' + _0x2acfdb + ':' + _0x4426a1['id'], _0x153ca1 = 'metavuln:calculate:' + _0x1ce372;
        process['emit'](_0x3db4d9['CUtKb'], _0x153ca1);
        const _0x903618 = new Advisory(_0x2acfdb, _0x4426a1, this[_options]), [_0x477c8c, _0x52ef96] = await Promise['all']([
                this[_cacheGet](_0x903618),
                this[_packument](_0x2acfdb)
            ]);
        process['emit'](_0x3db4d9['CUtKb'], 'metavuln:load:' + _0x1ce372), _0x903618['load'](_0x477c8c, _0x52ef96), process['emit'](_0x3db4d9['BiQRJ'], 'metavuln:load:' + _0x1ce372);
        if (_0x903618['updated'])
            await this[_cachePut](_0x903618);
        return this[_advisories]['set'](_0x1ce372, _0x903618), process['emit'](_0x3db4d9['BiQRJ'], _0x153ca1), _0x903618;
    }
    async [_cachePut](_0x1267a8) {
        const _0x16961e = {
                'nSUyn': 'time',
                'JsmKw': function (_0xe42779, _0x37b108) {
                    return _0xe42779(_0x37b108);
                },
                'whlxF': 'timeEnd'
            }, {
                name: _0x4581be,
                id: _0x47862f
            } = _0x1267a8, _0x425ac9 = 'security-advisory:' + _0x4581be + ':' + _0x47862f;
        process['emit'](_0x16961e['nSUyn'], 'metavuln:cache:put:' + _0x425ac9);
        const _0x1575e7 = JSON['stringify'](_0x1267a8), _0x492546 = { ...this[_options] };
        this[_cacheData]['set'](_0x425ac9, _0x16961e['JsmKw'](jsonParse, _0x1575e7)), await cacache['put'](this[_cache], _0x425ac9, _0x1575e7, _0x492546)['catch'](() => {
        }), process['emit'](_0x16961e['whlxF'], 'metavuln:cache:put:' + _0x425ac9);
    }
    async [_cacheGet](_0xa6cac1) {
        const _0x342236 = {
                'DFqko': function (_0x277519, _0x474937) {
                    return _0x277519(_0x474937);
                },
                'kczlf': 'timeEnd',
                'lhUHp': 'time'
            }, {
                name: _0x227041,
                id: _0x458e70
            } = _0xa6cac1, _0x33c90a = 'security-advisory:' + _0x227041 + ':' + _0x458e70;
        if (this[_cacheData]['has'](_0x33c90a))
            return this[_cacheData]['get'](_0x33c90a);
        process['emit'](_0x342236['lhUHp'], 'metavuln:cache:get:' + _0x33c90a);
        const _0x4d6806 = cacache['get'](this[_cache], _0x33c90a, { ...this[_options] })['catch'](() => ({ 'data': '{}' }))['then'](({data: _0x208146}) => {
            return _0x208146 = _0x342236['DFqko'](jsonParse, _0x208146), process['emit'](_0x342236['kczlf'], 'metavuln:cache:get:' + _0x33c90a), this[_cacheData]['set'](_0x33c90a, _0x208146), _0x208146;
        });
        return this[_cacheData]['set'](_0x33c90a, _0x4d6806), _0x4d6806;
    }
    async [_packument](_0x58063f) {
        const _0x52f19f = {
            'LIpXo': 'timeEnd',
            'uxhiH': 'time'
        };
        if (this[_packuments]['has'](_0x58063f))
            return this[_packuments]['get'](_0x58063f);
        process['emit'](_0x52f19f['uxhiH'], 'metavuln:packument:' + _0x58063f);
        const _0x4b3824 = pacote['packument'](_0x58063f, { ...this[_options] })['catch'](_0x282cdf => {
            return {
                'name': _0x58063f,
                'versions': {}
            };
        })['then'](_0x266424 => {
            return process['emit'](_0x52f19f['LIpXo'], 'metavuln:packument:' + _0x58063f), this[_packuments]['set'](_0x58063f, _0x266424), _0x266424;
        });
        return this[_packuments]['set'](_0x58063f, _0x4b3824), _0x4b3824;
    }
}
module['exports'] = Calculator;

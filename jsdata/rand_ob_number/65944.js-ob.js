const pacote = require('pacote'), cacache = require('cacache'), Advisory = require('./advisory.js'), {homedir} = require('os'), jsonParse = require('json-parse-even-better-errors'), _packument = Symbol('packument'), _cachePut = Symbol('cachePut'), _cacheGet = Symbol('cacheGet'), _cacheData = Symbol('cacheData'), _packuments = Symbol('packuments'), _cache = Symbol('cache'), _options = Symbol('options'), _advisories = Symbol('advisories'), _calculate = Symbol('calculate');
class Calculator {
    constructor(_0x7c7fc9 = {}) {
        this[_options] = { ..._0x7c7fc9 }, this[_cache] = this[_options]['cache'] || homedir() + '/.npm/_cacache', this[_options]['cache'] = this[_cache], this[_packuments] = new Map(), this[_cacheData] = new Map(), this[_advisories] = new Map();
    }
    get ['cache']() {
        return this[_cache];
    }
    get ['options']() {
        return { ...this[_options] };
    }
    async ['calculate'](_0x3b52c6, _0x2832f2) {
        const _0x4e999d = 'security-advisory:' + _0x3b52c6 + ':' + _0x2832f2['id'];
        if (this[_advisories]['has'](_0x4e999d))
            return this[_advisories]['get'](_0x4e999d);
        const _0x3b1d72 = this[_calculate](_0x3b52c6, _0x2832f2);
        return this[_advisories]['set'](_0x4e999d, _0x3b1d72), _0x3b1d72;
    }
    async [_calculate](_0x2bd553, _0x263c5e) {
        const _0x12be0e = 'security-advisory:' + _0x2bd553 + ':' + _0x263c5e['id'], _0x467ac7 = 'metavuln:calculate:' + _0x12be0e;
        process['emit']('time', _0x467ac7);
        const _0x345bb3 = new Advisory(_0x2bd553, _0x263c5e, this[_options]), [_0x149c1f, _0x2ec1ca] = await Promise['all']([
                this[_cacheGet](_0x345bb3),
                this[_packument](_0x2bd553)
            ]);
        process['emit']('time', 'metavuln:load:' + _0x12be0e), _0x345bb3['load'](_0x149c1f, _0x2ec1ca), process['emit']('timeEnd', 'metavuln:load:' + _0x12be0e);
        if (_0x345bb3['updated'])
            await this[_cachePut](_0x345bb3);
        return this[_advisories]['set'](_0x12be0e, _0x345bb3), process['emit']('timeEnd', _0x467ac7), _0x345bb3;
    }
    async [_cachePut](_0x14f957) {
        const {
                name: _0x827bad,
                id: _0x5c20c1
            } = _0x14f957, _0x3fe5d6 = 'security-advisory:' + _0x827bad + ':' + _0x5c20c1;
        process['emit']('time', 'metavuln:cache:put:' + _0x3fe5d6);
        const _0x40417a = JSON['stringify'](_0x14f957), _0x25f417 = { ...this[_options] };
        this[_cacheData]['set'](_0x3fe5d6, jsonParse(_0x40417a)), await cacache['put'](this[_cache], _0x3fe5d6, _0x40417a, _0x25f417)['catch'](() => {
        }), process['emit']('timeEnd', 'metavuln:cache:put:' + _0x3fe5d6);
    }
    async [_cacheGet](_0x30bdfe) {
        const {
                name: _0x371527,
                id: _0x1eeb07
            } = _0x30bdfe, _0x82e71f = 'security-advisory:' + _0x371527 + ':' + _0x1eeb07;
        if (this[_cacheData]['has'](_0x82e71f))
            return this[_cacheData]['get'](_0x82e71f);
        process['emit']('time', 'metavuln:cache:get:' + _0x82e71f);
        const _0x31fb5f = cacache['get'](this[_cache], _0x82e71f, { ...this[_options] })['catch'](() => ({ 'data': '{}' }))['then'](({data: _0x291d25}) => {
            return _0x291d25 = jsonParse(_0x291d25), process['emit']('timeEnd', 'metavuln:cache:get:' + _0x82e71f), this[_cacheData]['set'](_0x82e71f, _0x291d25), _0x291d25;
        });
        return this[_cacheData]['set'](_0x82e71f, _0x31fb5f), _0x31fb5f;
    }
    async [_packument](_0x3f8cbe) {
        if (this[_packuments]['has'](_0x3f8cbe))
            return this[_packuments]['get'](_0x3f8cbe);
        process['emit']('time', 'metavuln:packument:' + _0x3f8cbe);
        const _0x39ab8c = pacote['packument'](_0x3f8cbe, { ...this[_options] })['catch'](_0x19e455 => {
            return {
                'name': _0x3f8cbe,
                'versions': {}
            };
        })['then'](_0x303fd9 => {
            return process['emit']('timeEnd', 'metavuln:packument:' + _0x3f8cbe), this[_packuments]['set'](_0x3f8cbe, _0x303fd9), _0x303fd9;
        });
        return this[_packuments]['set'](_0x3f8cbe, _0x39ab8c), _0x39ab8c;
    }
}
module['exports'] = Calculator;

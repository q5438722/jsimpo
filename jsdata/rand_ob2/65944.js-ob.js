const _0x22ef = [
    'emit',
    'time',
    'metavuln:load:',
    'timeEnd',
    'updated',
    'metavuln:cache:put:',
    'stringify',
    'put',
    'catch',
    'then',
    'metavuln:cache:get:',
    'metavuln:packument:',
    'exports',
    '309808YGQeMp',
    '1353654yNwUXY',
    '977828fzXIQS',
    '1nOnzvz',
    '448268MxDQeV',
    '2jEEPKW',
    '719559HudTsU',
    '726879iYgcvj',
    '1875105dZRaeh',
    '1lNfIyw',
    'pacote',
    'cacache',
    'json-parse-even-better-errors',
    'packument',
    'packuments',
    'cache',
    'options',
    'advisories',
    'calculate',
    'security-advisory:',
    'has',
    'get',
    'set',
    'metavuln:calculate:'
];
const _0x223a0c = _0x5c64;
(function (_0x18a485, _0x5e75e8) {
    const _0x1a7397 = _0x5c64;
    while (!![]) {
        try {
            const _0xbe1145 = parseInt(_0x1a7397(0xaf)) + -parseInt(_0x1a7397(0xb0)) + parseInt(_0x1a7397(0xb1)) * -parseInt(_0x1a7397(0xb2)) + -parseInt(_0x1a7397(0xb3)) * -parseInt(_0x1a7397(0xb4)) + -parseInt(_0x1a7397(0xb5)) + parseInt(_0x1a7397(0xb6)) + parseInt(_0x1a7397(0xb7)) * parseInt(_0x1a7397(0xb8));
            if (_0xbe1145 === _0x5e75e8)
                break;
            else
                _0x18a485['push'](_0x18a485['shift']());
        } catch (_0x1e8ae5) {
            _0x18a485['push'](_0x18a485['shift']());
        }
    }
}(_0x22ef, 0xb8e27));
const pacote = require(_0x223a0c(0xb9)), cacache = require(_0x223a0c(0xba)), Advisory = require('./advisory.js'), {homedir} = require('os'), jsonParse = require(_0x223a0c(0xbb)), _packument = Symbol(_0x223a0c(0xbc)), _cachePut = Symbol('cachePut'), _cacheGet = Symbol('cacheGet'), _cacheData = Symbol('cacheData'), _packuments = Symbol(_0x223a0c(0xbd)), _cache = Symbol(_0x223a0c(0xbe)), _options = Symbol(_0x223a0c(0xbf)), _advisories = Symbol(_0x223a0c(0xc0)), _calculate = Symbol('calculate');
class Calculator {
    constructor(_0x3442bc = {}) {
        const _0x19d750 = _0x223a0c;
        this[_options] = { ..._0x3442bc }, this[_cache] = this[_options][_0x19d750(0xbe)] || homedir() + '/.npm/_cacache', this[_options][_0x19d750(0xbe)] = this[_cache], this[_packuments] = new Map(), this[_cacheData] = new Map(), this[_advisories] = new Map();
    }
    get [_0x223a0c(0xbe)]() {
        return this[_cache];
    }
    get [_0x223a0c(0xbf)]() {
        return { ...this[_options] };
    }
    async [_0x223a0c(0xc1)](_0x52ac7a, _0x597b6c) {
        const _0x2e6226 = _0x223a0c, _0x47c899 = _0x2e6226(0xc2) + _0x52ac7a + ':' + _0x597b6c['id'];
        if (this[_advisories][_0x2e6226(0xc3)](_0x47c899))
            return this[_advisories][_0x2e6226(0xc4)](_0x47c899);
        const _0x4a2e98 = this[_calculate](_0x52ac7a, _0x597b6c);
        return this[_advisories][_0x2e6226(0xc5)](_0x47c899, _0x4a2e98), _0x4a2e98;
    }
    async [_calculate](_0x1a2c7a, _0x177e5c) {
        const _0x1ccb51 = _0x223a0c, _0x2c5472 = _0x1ccb51(0xc2) + _0x1a2c7a + ':' + _0x177e5c['id'], _0x358bac = _0x1ccb51(0xc6) + _0x2c5472;
        process[_0x1ccb51(0xc7)](_0x1ccb51(0xc8), _0x358bac);
        const _0x42c7d5 = new Advisory(_0x1a2c7a, _0x177e5c, this[_options]), [_0x3e34a3, _0x77956a] = await Promise['all']([
                this[_cacheGet](_0x42c7d5),
                this[_packument](_0x1a2c7a)
            ]);
        process[_0x1ccb51(0xc7)](_0x1ccb51(0xc8), _0x1ccb51(0xc9) + _0x2c5472), _0x42c7d5['load'](_0x3e34a3, _0x77956a), process[_0x1ccb51(0xc7)](_0x1ccb51(0xca), _0x1ccb51(0xc9) + _0x2c5472);
        if (_0x42c7d5[_0x1ccb51(0xcb)])
            await this[_cachePut](_0x42c7d5);
        return this[_advisories][_0x1ccb51(0xc5)](_0x2c5472, _0x42c7d5), process['emit'](_0x1ccb51(0xca), _0x358bac), _0x42c7d5;
    }
    async [_cachePut](_0x3b8728) {
        const _0x41316a = _0x223a0c, {
                name: _0x574930,
                id: _0x263c67
            } = _0x3b8728, _0x4b9375 = _0x41316a(0xc2) + _0x574930 + ':' + _0x263c67;
        process['emit'](_0x41316a(0xc8), _0x41316a(0xcc) + _0x4b9375);
        const _0x4c3b65 = JSON[_0x41316a(0xcd)](_0x3b8728), _0x1ea42b = { ...this[_options] };
        this[_cacheData][_0x41316a(0xc5)](_0x4b9375, jsonParse(_0x4c3b65)), await cacache[_0x41316a(0xce)](this[_cache], _0x4b9375, _0x4c3b65, _0x1ea42b)[_0x41316a(0xcf)](() => {
        }), process[_0x41316a(0xc7)](_0x41316a(0xca), _0x41316a(0xcc) + _0x4b9375);
    }
    async [_cacheGet](_0x393bb3) {
        const _0x247a27 = _0x223a0c, {
                name: _0x2e620d,
                id: _0x26f1e5
            } = _0x393bb3, _0x204a39 = _0x247a27(0xc2) + _0x2e620d + ':' + _0x26f1e5;
        if (this[_cacheData][_0x247a27(0xc3)](_0x204a39))
            return this[_cacheData]['get'](_0x204a39);
        process[_0x247a27(0xc7)](_0x247a27(0xc8), 'metavuln:cache:get:' + _0x204a39);
        const _0x4d0bb8 = cacache[_0x247a27(0xc4)](this[_cache], _0x204a39, { ...this[_options] })[_0x247a27(0xcf)](() => ({ 'data': '{}' }))[_0x247a27(0xd0)](({data: _0x704829}) => {
            const _0x52f807 = _0x247a27;
            return _0x704829 = jsonParse(_0x704829), process['emit'](_0x52f807(0xca), _0x52f807(0xd1) + _0x204a39), this[_cacheData][_0x52f807(0xc5)](_0x204a39, _0x704829), _0x704829;
        });
        return this[_cacheData][_0x247a27(0xc5)](_0x204a39, _0x4d0bb8), _0x4d0bb8;
    }
    async [_packument](_0x37ba84) {
        const _0x5ba55f = _0x223a0c;
        if (this[_packuments][_0x5ba55f(0xc3)](_0x37ba84))
            return this[_packuments][_0x5ba55f(0xc4)](_0x37ba84);
        process[_0x5ba55f(0xc7)](_0x5ba55f(0xc8), _0x5ba55f(0xd2) + _0x37ba84);
        const _0x1e900c = pacote[_0x5ba55f(0xbc)](_0x37ba84, { ...this[_options] })['catch'](_0x374acd => {
            return {
                'name': _0x37ba84,
                'versions': {}
            };
        })[_0x5ba55f(0xd0)](_0x25e7fe => {
            const _0x3eaec6 = _0x5ba55f;
            return process[_0x3eaec6(0xc7)](_0x3eaec6(0xca), _0x3eaec6(0xd2) + _0x37ba84), this[_packuments][_0x3eaec6(0xc5)](_0x37ba84, _0x25e7fe), _0x25e7fe;
        });
        return this[_packuments]['set'](_0x37ba84, _0x1e900c), _0x1e900c;
    }
}
function _0x5c64(_0x4131e8, _0xee5aa3) {
    return _0x5c64 = function (_0x22ef71, _0x5c644c) {
        _0x22ef71 = _0x22ef71 - 0xaf;
        let _0x3ad3f1 = _0x22ef[_0x22ef71];
        return _0x3ad3f1;
    }, _0x5c64(_0x4131e8, _0xee5aa3);
}
module[_0x223a0c(0xd3)] = Calculator;

const fast_regexp_result = /./g[_0x5b72d1(147)]('a');
fast_regexp_result['length'] = 0;
class RegExpWithFastResult extends RegExp {
    constructor() {
        const _0x1dbbf0 = _0x5b72d1;
        super('.', 'g'), this[_0x1dbbf0(148)] = 0;
    }
    [_0x5b72d1(147)](_0x59558d) {
        return this['number_of_runs']++ == 0 ? fast_regexp_result : null;
    }
}
function _0x3e8d(_0x37109d, _0x2a6d82) {
    return _0x3e8d = function (_0x20c3df, _0x3e8d34) {
        _0x20c3df = _0x20c3df - 138;
        let _0x2adddf = _0x20c3[_0x20c3df];
        return _0x2adddf;
    }, _0x3e8d(_0x37109d, _0x2a6d82);
}
const slow_regexp_result = [];
class RegExpWithSlowResult extends RegExp {
    constructor() {
        const _0x481795 = _0x5b72d1;
        super('.', 'g'), this[_0x481795(148)] = 0;
    }
    [_0x5b72d1(147)](_0x448813) {
        const _0x38929f = _0x5b72d1;
        return this[_0x38929f(148)]++ == 0 ? slow_regexp_result : null;
    }
}
assertEquals([_0x5b72d1(149)], 'a'['match'](new RegExpWithFastResult())), assertEquals([_0x5b72d1(149)], 'a'['match'](new RegExpWithSlowResult()));
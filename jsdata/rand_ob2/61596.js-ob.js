const _0x20c3 = [
    '108MiMWlO',
    '333556hljqBk',
    '287550vpqutI',
    'exec',
    'number_of_runs',
    'undefined',
    '113459KrIiSd',
    '209856NTQcCe',
    '146345nWjigm',
    '25tDGcVy',
    '5falJFE',
    '3426WmRlUR'
];
const _0x5b72d1 = _0x3e8d;
(function (_0x531491, _0x54a493) {
    const _0x2da06d = _0x3e8d;
    while (!![]) {
        try {
            const _0x4d18e0 = -parseInt(_0x2da06d(0x8a)) + -parseInt(_0x2da06d(0x8b)) + parseInt(_0x2da06d(0x8c)) + -parseInt(_0x2da06d(0x8d)) * parseInt(_0x2da06d(0x8e)) + parseInt(_0x2da06d(0x8f)) * parseInt(_0x2da06d(0x90)) + parseInt(_0x2da06d(0x91)) + -parseInt(_0x2da06d(0x92));
            if (_0x4d18e0 === _0x54a493)
                break;
            else
                _0x531491['push'](_0x531491['shift']());
        } catch (_0x3dc0b0) {
            _0x531491['push'](_0x531491['shift']());
        }
    }
}(_0x20c3, 0x3a547));
const fast_regexp_result = /./g[_0x5b72d1(0x93)]('a');
fast_regexp_result['length'] = 0x0;
class RegExpWithFastResult extends RegExp {
    constructor() {
        const _0x1dbbf0 = _0x5b72d1;
        super('.', 'g'), this[_0x1dbbf0(0x94)] = 0x0;
    }
    [_0x5b72d1(0x93)](_0x59558d) {
        return this['number_of_runs']++ == 0x0 ? fast_regexp_result : null;
    }
}
function _0x3e8d(_0x37109d, _0x2a6d82) {
    return _0x3e8d = function (_0x20c3df, _0x3e8d34) {
        _0x20c3df = _0x20c3df - 0x8a;
        let _0x2adddf = _0x20c3[_0x20c3df];
        return _0x2adddf;
    }, _0x3e8d(_0x37109d, _0x2a6d82);
}
const slow_regexp_result = [];
class RegExpWithSlowResult extends RegExp {
    constructor() {
        const _0x481795 = _0x5b72d1;
        super('.', 'g'), this[_0x481795(0x94)] = 0x0;
    }
    [_0x5b72d1(0x93)](_0x448813) {
        const _0x38929f = _0x5b72d1;
        return this[_0x38929f(0x94)]++ == 0x0 ? slow_regexp_result : null;
    }
}
assertEquals([_0x5b72d1(0x95)], 'a'['match'](new RegExpWithFastResult())), assertEquals([_0x5b72d1(0x95)], 'a'['match'](new RegExpWithSlowResult()));

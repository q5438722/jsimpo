const _0x19d6 = ['148991OdxaOM', '1uslMez', '641274YCHhUR', '125887svMysx', '11rZCJUC', 'exec', 'length', 'number_of_runs', 'match', 'undefined', '71894knIqCC', '164269rQMtaH', '628171YbXxWO', '958388HfccZP'];
const _0x48650a = _0x434d;

(function (_0xb27095, _0x3f6279) {
    const _0x339f9d = _0x434d;

    while (true) {
        try {
            const _0x32d9e8 = -parseInt(_0x339f9d(0x187)) + -parseInt(_0x339f9d(0x188)) + parseInt(_0x339f9d(0x189)) + parseInt(_0x339f9d(0x18a)) + parseInt(_0x339f9d(0x18b)) * parseInt(_0x339f9d(0x18c)) + parseInt(_0x339f9d(0x18d)) + parseInt(_0x339f9d(0x18e)) * -parseInt(_0x339f9d(0x18f));

            if (_0x32d9e8 === _0x3f6279) break;else _0xb27095.push(_0xb27095.shift());
        } catch (_0x14e021) {
            _0xb27095.push(_0xb27095.shift());
        }
    }
})(_0x19d6, 755904);
function _0x434d(_0x344e78, _0x5765d4) {
    return _0x434d = function (_0x4e61ef, _0x51fab1) {
        _0x4e61ef = _0x4e61ef - 391;
        const _0x1ca64b = _0x19d6[_0x4e61ef];

        return _0x1ca64b;
    }, _0x434d(_0x344e78, _0x5765d4);
}

const fast_regexp_result = /./g[_0x48650a(0x190)]('a');

fast_regexp_result[_0x48650a(0x191)] = 0;
class RegExpWithFastResult extends RegExp {
    constructor() {
        super('.', 'g'), this['number_of_runs'] = 0;
    }
    [_0x48650a(0x190)](_0x2e0ee0) {
        const _0x59df7e = _0x48650a;

        return this[_0x59df7e(0x192)]++ == 0 ? fast_regexp_result : null;
    }
}
const slow_regexp_result = [];

class RegExpWithSlowResult extends RegExp {
    constructor() {
        super('.', 'g'), this['number_of_runs'] = 0;
    }
    [_0x48650a(0x190)](_0x16c185) {
        const _0xb897be = {
            'YyxoS': function (_0x29e8c1, _0x47beaf) {
                return _0x29e8c1 == _0x47beaf;
            }
        };

        return _0xb897be.YyxoS(this.number_of_runs++, 0) ? slow_regexp_result : null;
    }
}
assertEquals(['undefined'], 'a'[_0x48650a(0x193)](new RegExpWithFastResult())), assertEquals([_0x48650a(0x194)], 'a'.match(new RegExpWithSlowResult()));

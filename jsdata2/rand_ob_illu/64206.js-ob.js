const _0x1ffa = ['635527QbMkeR', '7AnFqRD', '109159LnHjBd', '807417KWIapS', '378865RTLbEn', '278BwNanX', '214ORVQMV', '1ztcztZ', '392699LzVXWs', '263330sLEcBO', '5oEBmJi', 'UPmaH', 'ajRfr', 'iugwA'];

(function (_0x56e39d, _0x1b03b1) {
    const _0x376fc7 = _0x57b6;

    while (true) {
        try {
            const _0x309218 = -parseInt(_0x376fc7(0x77)) + parseInt(_0x376fc7(0x78)) * parseInt(_0x376fc7(0x79)) + parseInt(_0x376fc7(0x7a)) + parseInt(_0x376fc7(0x7b)) + parseInt(_0x376fc7(0x7c)) * parseInt(_0x376fc7(0x7d)) + parseInt(_0x376fc7(0x7e)) * parseInt(_0x376fc7(0x7f)) + -parseInt(_0x376fc7(0x80)) * parseInt(_0x376fc7(0x81));

            if (_0x309218 === _0x1b03b1) break;else _0x56e39d.push(_0x56e39d.shift());
        } catch (_0x563e9a) {
            _0x56e39d.push(_0x56e39d.shift());
        }
    }
})(_0x1ffa, 450409);
function _0x57b6(_0x4a770f, _0x7033a6) {
    return _0x57b6 = function (_0x119c5d, _0x484608) {
        _0x119c5d = _0x119c5d - 119;
        const _0x1437fa = _0x1ffa[_0x119c5d];

        return _0x1437fa;
    }, _0x57b6(_0x4a770f, _0x7033a6);
}
function TestNestedLoops() {
    const _0x36f086 = _0x57b6;
    const _0x4692ea = {
        'UPmaH': function (_0x157f64, _0x28ef86) {
            return _0x157f64 < _0x28ef86;
        },
        'ajRfr': function (_0x2ead33, _0x57fae5) {
            return _0x2ead33 + _0x57fae5;
        },
        'iugwA': function (_0x3c0f7c, _0x2d99ad) {
            return _0x3c0f7c + _0x2d99ad;
        }
    };
    var _0x32891d = 0;

    for (var _0x5c3af6 = 0; _0x4692ea[_0x36f086(0x82)](_0x5c3af6, 200); _0x5c3af6 = _0x4692ea[_0x36f086(0x83)](_0x5c3af6, 1)) {
        // Unevaluable loop test expression
        for (var _0x44aaf3 = 0; _0x4692ea[_0x36f086(0x82)](_0x44aaf3, 200); _0x44aaf3 = _0x4692ea[_0x36f086(0x83)](_0x44aaf3, 1)) {
            _0x32891d = _0x4692ea[_0x36f086(0x84)](_0x32891d, 1);
        }
    }
    return _0x32891d;
}
assertEquals(40000, TestNestedLoops());

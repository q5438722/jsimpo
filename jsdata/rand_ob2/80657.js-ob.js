const _0x2c9c = [
    '#ffffff',
    '#000000',
    'indexOf',
    'invalid\x20frontColor\x20\x22',
    'linear',
    'animation',
    'duration',
    'timingFunc',
    '25171WrsbbG',
    '14XvggLK',
    '325216ybaGIB',
    '4tUMNVk',
    '63454CcvUBU',
    '436134dXyDqy',
    '385915ZkYAbs',
    '305999ENhCkK',
    '1fUioqW',
    '12316wbyzVF',
    '27TkiueQ'
];
function _0x4064(_0x5ccafb, _0x21eb04) {
    return _0x4064 = function (_0x2c9cc0, _0x406458) {
        _0x2c9cc0 = _0x2c9cc0 - 0x7c;
        let _0x4bf582 = _0x2c9c[_0x2c9cc0];
        return _0x4bf582;
    }, _0x4064(_0x5ccafb, _0x21eb04);
}
const _0x585ddc = _0x4064;
(function (_0x5e2b14, _0x6ce4a9) {
    const _0x18540a = _0x4064;
    while (!![]) {
        try {
            const _0x1cb159 = parseInt(_0x18540a(0x7c)) * parseInt(_0x18540a(0x7d)) + parseInt(_0x18540a(0x7e)) + -parseInt(_0x18540a(0x7f)) * parseInt(_0x18540a(0x80)) + -parseInt(_0x18540a(0x81)) + -parseInt(_0x18540a(0x82)) + -parseInt(_0x18540a(0x83)) * -parseInt(_0x18540a(0x84)) + -parseInt(_0x18540a(0x85)) * -parseInt(_0x18540a(0x86));
            if (_0x1cb159 === _0x6ce4a9)
                break;
            else
                _0x5e2b14['push'](_0x5e2b14['shift']());
        } catch (_0x5fef8) {
            _0x5e2b14['push'](_0x5e2b14['shift']());
        }
    }
}(_0x2c9c, 0x3aa94));
const FRONT_COLORS = [
    _0x585ddc(0x87),
    _0x585ddc(0x88)
];
export const setNavigationBarColor = {
    'frontColor': {
        'type': String,
        'required': !![],
        'validator'(_0x2c728a, _0x30cae4) {
            const _0x222872 = _0x585ddc;
            if (FRONT_COLORS[_0x222872(0x89)](_0x2c728a) === -0x1)
                return _0x222872(0x8a) + _0x2c728a + '\x22';
        }
    },
    'backgroundColor': {
        'type': String,
        'required': !![]
    },
    'animation': {
        'type': Object,
        'default'() {
            const _0x4a89df = _0x585ddc;
            return {
                'duration': 0x0,
                'timingFunc': _0x4a89df(0x8b)
            };
        },
        'validator'(_0x3b71f3 = {}, _0x1c1ca2) {
            const _0x61a111 = _0x585ddc;
            _0x1c1ca2[_0x61a111(0x8c)] = {
                'duration': _0x3b71f3[_0x61a111(0x8d)] || 0x0,
                'timingFunc': _0x3b71f3[_0x61a111(0x8e)] || _0x61a111(0x8b)
            };
        }
    }
};
export const setNavigationBarTitle = {
    'title': {
        'type': String,
        'required': !![]
    }
};

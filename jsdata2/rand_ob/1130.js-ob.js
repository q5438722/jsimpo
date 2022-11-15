const _0x56d6 = [
    '18671alEAOI',
    '13SwAxRL',
    '169703yBYubQ',
    '95272nDyPWc',
    '197797sDXZrD',
    '1RaEigt',
    'value',
    'change',
    'model',
    'auto-focus',
    'hydrated',
    'VjCiw',
    'taro-input',
    'focus',
    '$emit',
    'input',
    'PqRor',
    'target',
    'gCtgr',
    'listeners',
    'lHmAb',
    '$slots',
    'default',
    '153352bgGrTi',
    '13MbSCeK',
    '17956TaDGCL',
    '1UMhTbk',
    '272359UzUXMa'
];
function _0x3b49(_0x172f09, _0x5219e8) {
    return _0x3b49 = function (_0x58dd5f, _0x41e7d0) {
        _0x58dd5f = _0x58dd5f - (0x1 * -0x18af + 0x1e20 + -0x3c2);
        let _0x5ba4b1 = _0x56d6[_0x58dd5f];
        return _0x5ba4b1;
    }, _0x3b49(_0x172f09, _0x5219e8);
}
const _0xf4e871 = _0x3b49;
(function (_0x378bea, _0x8251c9) {
    const _0x5522e0 = _0x3b49;
    while (!![]) {
        try {
            const _0x1c18e2 = parseInt(_0x5522e0(0x1af)) + parseInt(_0x5522e0(0x1b0)) * -parseInt(_0x5522e0(0x1b1)) + -parseInt(_0x5522e0(0x1b2)) * parseInt(_0x5522e0(0x1b3)) + -parseInt(_0x5522e0(0x1b4)) * -parseInt(_0x5522e0(0x1b5)) + parseInt(_0x5522e0(0x1b6)) + -parseInt(_0x5522e0(0x1b7)) + -parseInt(_0x5522e0(0x1b8)) * -parseInt(_0x5522e0(0x1b9));
            if (_0x1c18e2 === _0x8251c9)
                break;
            else
                _0x378bea['push'](_0x378bea['shift']());
        } catch (_0x2e0b64) {
            _0x378bea['push'](_0x378bea['shift']());
        }
    }
}(_0x56d6, 0x5 * 0xd537 + 0x783 * 0x74 + 0x1f * -0x2a05));
import { listeners } from './mixins/listeners';
import { refs } from './mixins/refs';
export default function createFormsComponent(_0x201b63, _0x314d2d, _0x16cbb6 = _0xf4e871(0x1ba), _0x44857f = []) {
    const _0x345f50 = _0xf4e871, _0x6644d0 = {
            'OqxcL': _0x345f50(0x1bb),
            'PqRor': _0x345f50(0x1bc),
            'aTVED': 'taro-input',
            'gCtgr': _0x345f50(0x1bd),
            'lHmAb': _0x345f50(0x1be),
            'VjCiw': function (_0x5c2cba, _0x3f2dce) {
                return _0x5c2cba === _0x3f2dce;
            }
        }, _0x53e6d3 = {};
    return _0x6644d0[_0x345f50(0x1bf)](_0x201b63, _0x345f50(0x1c0)) && (_0x53e6d3[_0x345f50(0x1c1)] = Boolean), {
        'name': _0x201b63,
        'mixins': [
            listeners,
            refs
        ],
        'model': {
            'prop': _0x16cbb6,
            'event': _0x6644d0['PqRor']
        },
        'props': _0x53e6d3,
        'methods': {
            'input'(_0xb05450) {
                const _0x374745 = _0x345f50;
                this[_0x374745(0x1c2)](_0x374745(0x1c3), _0xb05450), this['$emit'](_0x374745(0x1bc), _0xb05450['target'][_0x374745(0x1ba)]);
            },
            'change'(_0xa691fa) {
                const _0x19919c = _0x345f50;
                this['$emit'](_0x6644d0['OqxcL'], _0xa691fa), this['$emit'](_0x6644d0[_0x19919c(0x1c4)], _0xa691fa[_0x19919c(0x1c5)][_0x19919c(0x1ba)]);
            }
        },
        'render'(_0x2977f4) {
            const _0x28c080 = _0x345f50, _0xd62896 = this, _0x2147e1 = {};
            _0x201b63 === _0x6644d0['aTVED'] && (_0x2147e1[_0x6644d0[_0x28c080(0x1c6)]] = _0xd62896['focus']);
            const _0x53d128 = { ..._0xd62896[_0x28c080(0x1c7)] };
            return _0x53d128[_0x314d2d] = _0xd62896[_0x314d2d], _0x2977f4(_0x201b63 + '-core', {
                'class': [
                    _0x6644d0[_0x28c080(0x1c8)],
                    ..._0x44857f
                ],
                'attrs': _0x2147e1,
                'on': _0x53d128
            }, _0xd62896[_0x28c080(0x1c9)][_0x28c080(0x1ca)]);
        }
    };
}

const _0x3993 = [
    '176908LTeADy',
    '1HfTibD',
    '10MqVelm',
    '13109eISoZQ',
    '150089JokQOF',
    '1qUCtWB',
    '657751AGJkgp',
    'value',
    'taro-input',
    'focus',
    'model',
    '$emit',
    'input',
    'target',
    'change',
    'auto-focus',
    'listeners',
    'hydrated',
    '$slots',
    'default',
    '127981jWAtOw',
    '79254qeBNoi',
    '3HusgIS',
    '294154YLnlve'
];
const _0xd9a7ec = _0x4fb1;
function _0x4fb1(_0x4363cc, _0x3e5cf7) {
    return _0x4fb1 = function (_0x3993a1, _0x4fb1d4) {
        _0x3993a1 = _0x3993a1 - 0xd5;
        let _0x565413 = _0x3993[_0x3993a1];
        return _0x565413;
    }, _0x4fb1(_0x4363cc, _0x3e5cf7);
}
(function (_0x2b2a9e, _0x309840) {
    const _0x4c2b55 = _0x4fb1;
    while (!![]) {
        try {
            const _0x4021cd = -parseInt(_0x4c2b55(0xd5)) + parseInt(_0x4c2b55(0xd6)) * -parseInt(_0x4c2b55(0xd7)) + -parseInt(_0x4c2b55(0xd8)) + parseInt(_0x4c2b55(0xd9)) * parseInt(_0x4c2b55(0xda)) + -parseInt(_0x4c2b55(0xdb)) * -parseInt(_0x4c2b55(0xdc)) + parseInt(_0x4c2b55(0xdd)) * -parseInt(_0x4c2b55(0xde)) + parseInt(_0x4c2b55(0xdf));
            if (_0x4021cd === _0x309840)
                break;
            else
                _0x2b2a9e['push'](_0x2b2a9e['shift']());
        } catch (_0x3f9493) {
            _0x2b2a9e['push'](_0x2b2a9e['shift']());
        }
    }
}(_0x3993, 0x26073));
import { listeners } from './mixins/listeners';
import { refs } from './mixins/refs';
export default function createFormsComponent(_0x1b1272, _0x234353, _0x1fc560 = _0xd9a7ec(0xe0), _0x1d0738 = []) {
    const _0x4bbe21 = _0xd9a7ec, _0x5900ef = {};
    return _0x1b1272 === _0x4bbe21(0xe1) && (_0x5900ef[_0x4bbe21(0xe2)] = Boolean), {
        'name': _0x1b1272,
        'mixins': [
            listeners,
            refs
        ],
        'model': {
            'prop': _0x1fc560,
            'event': _0x4bbe21(0xe3)
        },
        'props': _0x5900ef,
        'methods': {
            'input'(_0x23313a) {
                const _0x129f32 = _0x4bbe21;
                this[_0x129f32(0xe4)](_0x129f32(0xe5), _0x23313a), this[_0x129f32(0xe4)](_0x129f32(0xe3), _0x23313a[_0x129f32(0xe6)][_0x129f32(0xe0)]);
            },
            'change'(_0x2bd8cf) {
                const _0x3f837d = _0x4bbe21;
                this[_0x3f837d(0xe4)](_0x3f837d(0xe7), _0x2bd8cf), this[_0x3f837d(0xe4)](_0x3f837d(0xe3), _0x2bd8cf[_0x3f837d(0xe6)]['value']);
            }
        },
        'render'(_0x3a0bd8) {
            const _0x33f0f5 = _0x4bbe21, _0x57ae11 = this, _0x231c24 = {};
            _0x1b1272 === 'taro-input' && (_0x231c24[_0x33f0f5(0xe8)] = _0x57ae11[_0x33f0f5(0xe2)]);
            const _0x720af1 = { ..._0x57ae11[_0x33f0f5(0xe9)] };
            return _0x720af1[_0x234353] = _0x57ae11[_0x234353], _0x3a0bd8(_0x1b1272 + '-core', {
                'class': [
                    _0x33f0f5(0xea),
                    ..._0x1d0738
                ],
                'attrs': _0x231c24,
                'on': _0x720af1
            }, _0x57ae11[_0x33f0f5(0xeb)][_0x33f0f5(0xec)]);
        }
    };
}

const _0x4149 = [
    'width',
    '_x0',
    '_x1',
    '$eventOld',
    'requireModule',
    'dom',
    'getComponentRect',
    '$refs',
    'slider-track',
    'left',
    'size',
    '$dispatch',
    'Form',
    'uni-form-group-update',
    'add',
    'remove',
    'length',
    '_$eventOld',
    'changedTouches',
    '_onTrack',
    'start',
    'pageX',
    'move',
    'end',
    'disabled',
    '_onUserChangedValue',
    'changing',
    '$trigger',
    'change',
    '_filterValue',
    'step',
    'backgroundColor',
    'color',
    'activeColor',
    'selectedColor',
    'name',
    'value',
    'key',
    'uni-slider',
    '$listeners',
    'uni-slider-wrapper',
    'div',
    'uni-slider-tap-area',
    '_handleStart',
    '_handleMove',
    '_handleEnd',
    'uni-slider-track',
    'trackActiveStyle',
    'showValue',
    'u-text',
    'uni-slider-value',
    'row',
    'center',
    'relative',
    'ease',
    'borderColor',
    '0\x200\x204px\x20#ebebeb',
    'absolute',
    'transparent',
    '#888888',
    'component',
    '174792jxqoli',
    '9LzTcCa',
    '208807cjzWzj',
    '2373glSbQS',
    '311eXIsSG',
    '80ZZcNAw',
    '3278aiaiNa',
    '1101vZcrRG',
    '1151AJqGfn',
    '4889znSNNF',
    '87oHPINR',
    '4515568JXabhJ',
    'U-Slider',
    '#e9e9e9',
    '#007aff',
    '#ffffff',
    '_getBgColor',
    'thumbValue',
    'blockSize',
    'blockColor',
    'sliderValue',
    'min',
    'max'
];
(function (_0x484ec1, _0x2257b0) {
    const _0x3b71e9 = _0x8638;
    while (!![]) {
        try {
            const _0x4bd9d5 = parseInt(_0x3b71e9(0xc5)) + parseInt(_0x3b71e9(0xc6)) * -parseInt(_0x3b71e9(0xc7)) + parseInt(_0x3b71e9(0xc8)) * -parseInt(_0x3b71e9(0xc9)) + parseInt(_0x3b71e9(0xca)) * -parseInt(_0x3b71e9(0xcb)) + parseInt(_0x3b71e9(0xcc)) * -parseInt(_0x3b71e9(0xcd)) + parseInt(_0x3b71e9(0xce)) * parseInt(_0x3b71e9(0xcf)) + parseInt(_0x3b71e9(0xd0));
            if (_0x4bd9d5 === _0x2257b0)
                break;
            else
                _0x484ec1['push'](_0x484ec1['shift']());
        } catch (_0x137232) {
            _0x484ec1['push'](_0x484ec1['shift']());
        }
    }
}(_0x4149, 0xec8f2));
import {
    emitter,
    listeners
} from '../mixins';
function _0x8638(_0x50cb30, _0x3d2ded) {
    return _0x8638 = function (_0x4149ff, _0x8638dd) {
        _0x4149ff = _0x4149ff - 0xc5;
        let _0xa7338d = _0x4149[_0x4149ff];
        return _0xa7338d;
    }, _0x8638(_0x50cb30, _0x3d2ded);
}
function getSlider(_0x338290) {
    const _0x101f91 = _0x8638;
    return {
        'name': _0x101f91(0xd1),
        'mixins': [
            emitter,
            listeners
        ],
        'props': {
            'name': {
                'type': String,
                'default': ''
            },
            'min': {
                'type': [
                    Number,
                    String
                ],
                'default': 0x0
            },
            'max': {
                'type': [
                    Number,
                    String
                ],
                'default': 0x64
            },
            'value': {
                'type': [
                    Number,
                    String
                ],
                'default': 0x0
            },
            'step': {
                'type': [
                    Number,
                    String
                ],
                'default': 0x1
            },
            'disabled': {
                'type': [
                    Boolean,
                    String
                ],
                'default': ![]
            },
            'color': {
                'type': String,
                'default': '#e9e9e9'
            },
            'backgroundColor': {
                'type': String,
                'default': _0x101f91(0xd2)
            },
            'activeColor': {
                'type': String,
                'default': _0x101f91(0xd3)
            },
            'selectedColor': {
                'type': String,
                'default': _0x101f91(0xd3)
            },
            'blockColor': {
                'type': String,
                'default': _0x101f91(0xd4)
            },
            'blockSize': {
                'type': [
                    Number,
                    String
                ],
                'default': 0x1c
            },
            'showValue': {
                'type': [
                    Boolean,
                    String
                ],
                'default': ![]
            }
        },
        'data'() {
            return {
                'left': 0x0,
                'width': 0x0,
                'sliderValue': Number(this['value']),
                'sliderThumbValue': 0x0
            };
        },
        'computed': {
            'trackStyle'() {
                const _0x4c268c = _0x101f91;
                return { 'backgroundColor': this[_0x4c268c(0xd5)]() };
            },
            'trackActiveStyle'() {
                const _0x2311ea = _0x101f91;
                return {
                    'backgroundColor': this['_getActiveColor'](),
                    'width': this[_0x2311ea(0xd6)] + 'px'
                };
            },
            'thumbStyle'() {
                const _0x248b9c = _0x101f91;
                return {
                    'width': this['blockSize'] + 'px',
                    'height': this[_0x248b9c(0xd7)] + 'px',
                    'marginTop': -this[_0x248b9c(0xd7)] / 0x2 + 'px',
                    'left': this[_0x248b9c(0xd6)] + 'px',
                    'backgroundColor': this[_0x248b9c(0xd8)]
                };
            },
            'thumbValue'() {
                const _0x5a00a5 = _0x101f91;
                return (this[_0x5a00a5(0xd9)] - Number(this[_0x5a00a5(0xda)])) / (Number(this[_0x5a00a5(0xdb)]) - Number(this['min'])) * this[_0x5a00a5(0xdc)];
            }
        },
        'watch': {
            'value'(_0x5b18a2) {
                const _0x1ba92a = _0x101f91;
                this[_0x1ba92a(0xd9)] = Number(_0x5b18a2);
            }
        },
        'mounted'() {
            const _0x44b504 = _0x101f91;
            this[_0x44b504(0xdd)] = 0x0, this[_0x44b504(0xde)] = 0x0, this[_0x44b504(0xdf)] = null, setTimeout(() => {
                const _0x3cb0c0 = _0x44b504, _0x5e4780 = _0x338290[_0x3cb0c0(0xe0)](_0x3cb0c0(0xe1));
                _0x5e4780[_0x3cb0c0(0xe2)](this[_0x3cb0c0(0xe3)][_0x3cb0c0(0xe4)], _0x326d85 => {
                    const _0x2a34af = _0x3cb0c0;
                    this[_0x2a34af(0xe5)] = _0x326d85[_0x2a34af(0xe6)][_0x2a34af(0xe5)], this['width'] = _0x326d85['size'][_0x2a34af(0xdc)];
                });
            }, 0x32);
        },
        'created'() {
            const _0x5cd08a = _0x101f91;
            this[_0x5cd08a(0xe7)](_0x5cd08a(0xe8), _0x5cd08a(0xe9), {
                'type': _0x5cd08a(0xea),
                'vm': this
            });
        },
        'beforeDestroy'() {
            const _0x58bc5c = _0x101f91;
            this['$dispatch'](_0x58bc5c(0xe8), _0x58bc5c(0xe9), {
                'type': _0x58bc5c(0xeb),
                'vm': this
            });
        },
        'methods': {
            '_handleStart'(_0x3ab9e4) {
                const _0x1f29d4 = _0x101f91;
                if (_0x3ab9e4['changedTouches'][_0x1f29d4(0xec)] === 0x1 && !this[_0x1f29d4(0xed)]) {
                    this[_0x1f29d4(0xed)] = _0x3ab9e4;
                    const _0xf258bf = _0x3ab9e4[_0x1f29d4(0xee)][0x0]['pageX'];
                    this[_0x1f29d4(0xdd)] = this[_0x1f29d4(0xde)] = _0xf258bf, this[_0x1f29d4(0xef)](_0x1f29d4(0xf0), _0xf258bf);
                }
            },
            '_handleMove'(_0x5999e5) {
                const _0x55f3b3 = _0x101f91;
                if (_0x5999e5[_0x55f3b3(0xee)][_0x55f3b3(0xec)] === 0x1 && this[_0x55f3b3(0xed)]) {
                    const _0x126297 = _0x5999e5[_0x55f3b3(0xee)][0x0][_0x55f3b3(0xf1)];
                    this[_0x55f3b3(0xef)](_0x55f3b3(0xf2), _0x126297), this[_0x55f3b3(0xde)] = _0x126297;
                }
            },
            '_handleEnd'(_0x5b7e78) {
                const _0x2b4b65 = _0x101f91;
                if (_0x5b7e78[_0x2b4b65(0xee)][_0x2b4b65(0xec)] === 0x1 && this['_$eventOld']) {
                    const _0x327523 = _0x5b7e78[_0x2b4b65(0xee)][0x0][_0x2b4b65(0xf1)];
                    this[_0x2b4b65(0xed)] = null, this[_0x2b4b65(0xef)](_0x2b4b65(0xf3), _0x327523);
                }
            },
            '_onTrack': function (_0x3a7691, _0x9c6a65) {
                const _0x321ebf = _0x101f91;
                if (!this[_0x321ebf(0xf4)]) {
                    if (_0x3a7691 === _0x321ebf(0xf2))
                        this[_0x321ebf(0xf5)]({ 'x': _0x9c6a65 }), this['$trigger'](_0x321ebf(0xf6), { 'value': this[_0x321ebf(0xd9)] });
                    else
                        _0x3a7691 === 'end' && (this[_0x321ebf(0xf5)]({ 'x': _0x9c6a65 }), this[_0x321ebf(0xf7)](_0x321ebf(0xf8), { 'value': this[_0x321ebf(0xd9)] }));
                }
            },
            '_onUserChangedValue'(_0x1a5430) {
                const _0x4aa5a4 = _0x101f91;
                let _0x5afdfc = _0x1a5430['x'];
                _0x5afdfc < 0x0 && (_0x5afdfc = 0x0), _0x5afdfc > this['width'] && (_0x5afdfc = this[_0x4aa5a4(0xdc)]), this[_0x4aa5a4(0xd9)] = this[_0x4aa5a4(0xf9)](_0x5afdfc);
            },
            '_filterValue'(_0x13dbd3) {
                const _0x3bf834 = _0x101f91;
                let _0x53021c = _0x13dbd3 / this['width'] * (Number(this['max']) - Number(this[_0x3bf834(0xda)]));
                const _0x302161 = Number(this[_0x3bf834(0xfa)]);
                return _0x302161 > 0x0 && _0x53021c > _0x302161 && _0x53021c % _0x302161 / _0x302161 !== 0x0 && (_0x53021c -= _0x53021c % _0x302161), parseInt(_0x53021c + Number(this['min']));
            },
            '_getBgColor'() {
                const _0x8a3f00 = _0x101f91;
                return this[_0x8a3f00(0xfb)] !== _0x8a3f00(0xd2) ? this[_0x8a3f00(0xfb)] : this[_0x8a3f00(0xfc)] !== _0x8a3f00(0xd3) ? this[_0x8a3f00(0xfc)] : _0x8a3f00(0xd3);
            },
            '_getActiveColor'() {
                const _0x4cc29c = _0x101f91;
                return this[_0x4cc29c(0xfd)] !== '#007aff' ? this[_0x4cc29c(0xfd)] : this[_0x4cc29c(0xfe)] !== '#e9e9e9' ? this[_0x4cc29c(0xfe)] : _0x4cc29c(0xd2);
            },
            '_resetFormData'() {
                const _0x2d25ed = _0x101f91;
                this['sliderValue'] = this[_0x2d25ed(0xda)];
            },
            '_getFormData'() {
                const _0x5752a1 = _0x101f91, _0x5a53e4 = {};
                return this[_0x5752a1(0xff)] !== '' && (_0x5a53e4[_0x5752a1(0x100)] = this[_0x5752a1(0xd9)], _0x5a53e4[_0x5752a1(0x101)] = this[_0x5752a1(0xff)]), _0x5a53e4;
            }
        },
        'render'(_0x35af59) {
            const _0x396c9c = _0x101f91, _0x3d8fd8 = this;
            return _0x35af59('div', _0x3d8fd8['_g']({ 'staticClass': [_0x396c9c(0x102)] }, _0x3d8fd8[_0x396c9c(0x103)]), [_0x35af59('div', { 'staticClass': [_0x396c9c(0x104)] }, [
                    _0x35af59(_0x396c9c(0x105), {
                        'staticClass': [_0x396c9c(0x106)],
                        'on': {
                            'touchstart': _0x3d8fd8[_0x396c9c(0x107)],
                            'touchmove': _0x3d8fd8[_0x396c9c(0x108)],
                            'touchend': _0x3d8fd8[_0x396c9c(0x109)]
                        }
                    }, [
                        _0x35af59(_0x396c9c(0x105), {
                            'ref': _0x396c9c(0xe4),
                            'staticClass': ['uni-slider-handle-wrapper'],
                            'style': _0x3d8fd8['trackStyle']
                        }, [_0x35af59(_0x396c9c(0x105), {
                                'staticClass': [_0x396c9c(0x10a)],
                                'style': _0x3d8fd8[_0x396c9c(0x10b)]
                            })]),
                        _0x35af59(_0x396c9c(0x105), {
                            'ref': 'uni-slider-handle',
                            'staticClass': ['uni-slider-thumb'],
                            'style': _0x3d8fd8['thumbStyle']
                        })
                    ]),
                    _0x3d8fd8[_0x396c9c(0x10c)] ? _0x35af59(_0x396c9c(0x10d), { 'staticClass': [_0x396c9c(0x10e)] }, [_0x3d8fd8['_v'](_0x3d8fd8['_s'](_0x3d8fd8[_0x396c9c(0xd9)]))]) : _0x3d8fd8['_e']()
                ])]);
        },
        'style': {
            'uni-slider': {
                'marginTop': '12',
                'marginRight': 0x0,
                'marginBottom': '12',
                'marginLeft': 0x0,
                'paddingTop': 0x0,
                'paddingRight': 0x0,
                'paddingBottom': 0x0,
                'paddingLeft': 0x0
            },
            'uni-slider-wrapper': {
                'flexDirection': _0x101f91(0x10f),
                'alignItems': _0x101f91(0x110),
                'minHeight': '30'
            },
            'uni-slider-tap-area': {
                'position': _0x101f91(0x111),
                'flex': 0x1,
                'paddingTop': '15',
                'paddingRight': 0x0,
                'paddingBottom': '15',
                'paddingLeft': 0x0
            },
            'uni-slider-handle-wrapper': {
                'position': _0x101f91(0x111),
                'marginTop': 0x0,
                'marginRight': '18',
                'marginBottom': 0x0,
                'marginLeft': '18',
                'height': '2',
                'borderRadius': '5',
                'backgroundColor': _0x101f91(0xd2),
                'transitionProperty': _0x101f91(0xfb),
                'transitionDuration': 0x12c,
                'transitionTimingFunction': _0x101f91(0x112)
            },
            '@TRANSITION': {
                'uni-slider-handle-wrapper': {
                    'property': _0x101f91(0xfb),
                    'duration': 0x12c,
                    'timingFunction': _0x101f91(0x112)
                },
                'uni-slider-track': {
                    'property': 'backgroundColor',
                    'duration': 0x12c,
                    'timingFunction': 'ease'
                },
                'uni-slider-thumb': {
                    'property': _0x101f91(0x113),
                    'duration': 0x12c,
                    'timingFunction': 'ease'
                }
            },
            'uni-slider-track': {
                'flex': 0x1,
                'height': '2',
                'borderRadius': '6',
                'backgroundColor': _0x101f91(0xd3),
                'transitionProperty': _0x101f91(0xfb),
                'transitionDuration': 0x12c,
                'transitionTimingFunction': 'ease'
            },
            'uni-slider-thumb': {
                'position': 'absolute',
                'width': '28',
                'height': '28',
                'borderRadius': 0x32,
                'boxShadow': _0x101f91(0x114),
                'transitionProperty': 'borderColor',
                'transitionDuration': 0x12c,
                'transitionTimingFunction': _0x101f91(0x112)
            },
            'uni-slider-step': {
                'position': _0x101f91(0x115),
                'width': 0x64,
                'height': '2',
                'background': _0x101f91(0x116),
                'zIndex': 0x1
            },
            'uni-slider-value': {
                'color': _0x101f91(0x117),
                'fontSize': '14',
                'marginRight': '14'
            }
        }
    };
}
export default function init(_0x2540e9, _0x330f75) {
    const _0x54a05e = _0x8638;
    _0x2540e9[_0x54a05e(0x118)]('u-slider', getSlider(_0x330f75));
}

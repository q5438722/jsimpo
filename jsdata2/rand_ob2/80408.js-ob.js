const _0x2ec2 = [
    '1pSZuUp',
    '219302GZHobB',
    '743868ZLDLzY',
    '1xyKRvJ',
    'U-Slider',
    '#e9e9e9',
    '#007aff',
    '#ffffff',
    'value',
    '_getBgColor',
    'thumbValue',
    'blockSize',
    'blockColor',
    'min',
    'max',
    'sliderValue',
    '_x0',
    '_x1',
    '$eventOld',
    'requireModule',
    'dom',
    'getComponentRect',
    'slider-track',
    'size',
    'left',
    'width',
    '$dispatch',
    'Form',
    'uni-form-group-update',
    'add',
    'remove',
    '_$eventOld',
    'changedTouches',
    'length',
    '_onTrack',
    'pageX',
    'disabled',
    'move',
    '_onUserChangedValue',
    '$trigger',
    'changing',
    'end',
    '_filterValue',
    'step',
    'backgroundColor',
    'activeColor',
    'selectedColor',
    'name',
    'uni-slider',
    '$listeners',
    'div',
    'uni-slider-wrapper',
    'uni-slider-tap-area',
    '_handleStart',
    '_handleMove',
    '_handleEnd',
    'uni-slider-handle-wrapper',
    'trackStyle',
    'uni-slider-track',
    'trackActiveStyle',
    'uni-slider-thumb',
    'thumbStyle',
    'showValue',
    'u-text',
    'row',
    'relative',
    'ease',
    '0\x200\x204px\x20#ebebeb',
    '#888888',
    'component',
    'u-slider',
    '814588XQMGly',
    '1UNnFCj',
    '801049GuEgXg',
    '383AuCgBr',
    '1604GBiUvI',
    '6972WKGeUq',
    '577468IjyhWH'
];
(function (_0x54cba3, _0x5a9589) {
    const _0x11f832 = _0xdd37;
    while (!![]) {
        try {
            const _0x3fdb16 = -parseInt(_0x11f832(0x77)) + -parseInt(_0x11f832(0x78)) * -parseInt(_0x11f832(0x79)) + -parseInt(_0x11f832(0x7a)) * parseInt(_0x11f832(0x7b)) + parseInt(_0x11f832(0x7c)) + parseInt(_0x11f832(0x7d)) + parseInt(_0x11f832(0x7e)) * parseInt(_0x11f832(0x7f)) + parseInt(_0x11f832(0x80)) * parseInt(_0x11f832(0x81));
            if (_0x3fdb16 === _0x5a9589)
                break;
            else
                _0x54cba3['push'](_0x54cba3['shift']());
        } catch (_0x2a3971) {
            _0x54cba3['push'](_0x54cba3['shift']());
        }
    }
}(_0x2ec2, 0xe08bb));
import {
    emitter,
    listeners
} from '../mixins';
function _0xdd37(_0x15122c, _0x106459) {
    return _0xdd37 = function (_0x2ec261, _0xdd371) {
        _0x2ec261 = _0x2ec261 - 0x77;
        let _0x1471c0 = _0x2ec2[_0x2ec261];
        return _0x1471c0;
    }, _0xdd37(_0x15122c, _0x106459);
}
function getSlider(_0xa51d78) {
    const _0x419210 = _0xdd37;
    return {
        'name': _0x419210(0x82),
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
                'default': _0x419210(0x83)
            },
            'backgroundColor': {
                'type': String,
                'default': _0x419210(0x83)
            },
            'activeColor': {
                'type': String,
                'default': '#007aff'
            },
            'selectedColor': {
                'type': String,
                'default': _0x419210(0x84)
            },
            'blockColor': {
                'type': String,
                'default': _0x419210(0x85)
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
            const _0x342f6a = _0x419210;
            return {
                'left': 0x0,
                'width': 0x0,
                'sliderValue': Number(this[_0x342f6a(0x86)]),
                'sliderThumbValue': 0x0
            };
        },
        'computed': {
            'trackStyle'() {
                const _0x301093 = _0x419210;
                return { 'backgroundColor': this[_0x301093(0x87)]() };
            },
            'trackActiveStyle'() {
                const _0x4be6eb = _0x419210;
                return {
                    'backgroundColor': this['_getActiveColor'](),
                    'width': this[_0x4be6eb(0x88)] + 'px'
                };
            },
            'thumbStyle'() {
                const _0x4e48b5 = _0x419210;
                return {
                    'width': this[_0x4e48b5(0x89)] + 'px',
                    'height': this[_0x4e48b5(0x89)] + 'px',
                    'marginTop': -this['blockSize'] / 0x2 + 'px',
                    'left': this[_0x4e48b5(0x88)] + 'px',
                    'backgroundColor': this[_0x4e48b5(0x8a)]
                };
            },
            'thumbValue'() {
                const _0x528ccd = _0x419210;
                return (this['sliderValue'] - Number(this[_0x528ccd(0x8b)])) / (Number(this[_0x528ccd(0x8c)]) - Number(this['min'])) * this['width'];
            }
        },
        'watch': {
            'value'(_0x5ac4a6) {
                const _0x219682 = _0x419210;
                this[_0x219682(0x8d)] = Number(_0x5ac4a6);
            }
        },
        'mounted'() {
            const _0x492941 = _0x419210;
            this[_0x492941(0x8e)] = 0x0, this[_0x492941(0x8f)] = 0x0, this[_0x492941(0x90)] = null, setTimeout(() => {
                const _0x15c308 = _0x492941, _0x3ec92e = _0xa51d78[_0x15c308(0x91)](_0x15c308(0x92));
                _0x3ec92e[_0x15c308(0x93)](this['$refs'][_0x15c308(0x94)], _0x143ec9 => {
                    const _0x47bb10 = _0x15c308;
                    this['left'] = _0x143ec9[_0x47bb10(0x95)][_0x47bb10(0x96)], this[_0x47bb10(0x97)] = _0x143ec9[_0x47bb10(0x95)]['width'];
                });
            }, 0x32);
        },
        'created'() {
            const _0x26e60d = _0x419210;
            this[_0x26e60d(0x98)](_0x26e60d(0x99), _0x26e60d(0x9a), {
                'type': _0x26e60d(0x9b),
                'vm': this
            });
        },
        'beforeDestroy'() {
            const _0x35288f = _0x419210;
            this['$dispatch']('Form', 'uni-form-group-update', {
                'type': _0x35288f(0x9c),
                'vm': this
            });
        },
        'methods': {
            '_handleStart'(_0x1a45db) {
                const _0x3f8a79 = _0x419210;
                if (_0x1a45db['changedTouches']['length'] === 0x1 && !this[_0x3f8a79(0x9d)]) {
                    this['_$eventOld'] = _0x1a45db;
                    const _0x555fd9 = _0x1a45db[_0x3f8a79(0x9e)][0x0]['pageX'];
                    this[_0x3f8a79(0x8e)] = this['_x1'] = _0x555fd9, this['_onTrack']('start', _0x555fd9);
                }
            },
            '_handleMove'(_0x2921de) {
                const _0x145e7e = _0x419210;
                if (_0x2921de[_0x145e7e(0x9e)][_0x145e7e(0x9f)] === 0x1 && this[_0x145e7e(0x9d)]) {
                    const _0xb4893b = _0x2921de[_0x145e7e(0x9e)][0x0]['pageX'];
                    this[_0x145e7e(0xa0)]('move', _0xb4893b), this[_0x145e7e(0x8f)] = _0xb4893b;
                }
            },
            '_handleEnd'(_0x509b8b) {
                const _0x2a2483 = _0x419210;
                if (_0x509b8b['changedTouches'][_0x2a2483(0x9f)] === 0x1 && this[_0x2a2483(0x9d)]) {
                    const _0x503f5d = _0x509b8b['changedTouches'][0x0][_0x2a2483(0xa1)];
                    this[_0x2a2483(0x9d)] = null, this[_0x2a2483(0xa0)]('end', _0x503f5d);
                }
            },
            '_onTrack': function (_0x478b99, _0x13d1df) {
                const _0x2a77b5 = _0x419210;
                if (!this[_0x2a77b5(0xa2)]) {
                    if (_0x478b99 === _0x2a77b5(0xa3))
                        this[_0x2a77b5(0xa4)]({ 'x': _0x13d1df }), this[_0x2a77b5(0xa5)](_0x2a77b5(0xa6), { 'value': this['sliderValue'] });
                    else
                        _0x478b99 === _0x2a77b5(0xa7) && (this['_onUserChangedValue']({ 'x': _0x13d1df }), this['$trigger']('change', { 'value': this[_0x2a77b5(0x8d)] }));
                }
            },
            '_onUserChangedValue'(_0x3ddd5e) {
                const _0x4ea96a = _0x419210;
                let _0x498e4f = _0x3ddd5e['x'];
                _0x498e4f < 0x0 && (_0x498e4f = 0x0), _0x498e4f > this[_0x4ea96a(0x97)] && (_0x498e4f = this[_0x4ea96a(0x97)]), this[_0x4ea96a(0x8d)] = this[_0x4ea96a(0xa8)](_0x498e4f);
            },
            '_filterValue'(_0x394856) {
                const _0x41ceb8 = _0x419210;
                let _0x21a2ac = _0x394856 / this[_0x41ceb8(0x97)] * (Number(this[_0x41ceb8(0x8c)]) - Number(this['min']));
                const _0x30a3df = Number(this[_0x41ceb8(0xa9)]);
                return _0x30a3df > 0x0 && _0x21a2ac > _0x30a3df && _0x21a2ac % _0x30a3df / _0x30a3df !== 0x0 && (_0x21a2ac -= _0x21a2ac % _0x30a3df), parseInt(_0x21a2ac + Number(this['min']));
            },
            '_getBgColor'() {
                const _0x4f3014 = _0x419210;
                return this[_0x4f3014(0xaa)] !== '#e9e9e9' ? this['backgroundColor'] : this['color'] !== '#007aff' ? this['color'] : _0x4f3014(0x84);
            },
            '_getActiveColor'() {
                const _0xe2eb1e = _0x419210;
                return this['activeColor'] !== _0xe2eb1e(0x84) ? this[_0xe2eb1e(0xab)] : this[_0xe2eb1e(0xac)] !== _0xe2eb1e(0x83) ? this['selectedColor'] : _0xe2eb1e(0x83);
            },
            '_resetFormData'() {
                const _0x152fb7 = _0x419210;
                this[_0x152fb7(0x8d)] = this[_0x152fb7(0x8b)];
            },
            '_getFormData'() {
                const _0xbd42b0 = _0x419210, _0x394be9 = {};
                return this[_0xbd42b0(0xad)] !== '' && (_0x394be9[_0xbd42b0(0x86)] = this[_0xbd42b0(0x8d)], _0x394be9['key'] = this[_0xbd42b0(0xad)]), _0x394be9;
            }
        },
        'render'(_0x262524) {
            const _0xcea27a = _0x419210, _0x2222d7 = this;
            return _0x262524('div', _0x2222d7['_g']({ 'staticClass': [_0xcea27a(0xae)] }, _0x2222d7[_0xcea27a(0xaf)]), [_0x262524(_0xcea27a(0xb0), { 'staticClass': [_0xcea27a(0xb1)] }, [
                    _0x262524('div', {
                        'staticClass': [_0xcea27a(0xb2)],
                        'on': {
                            'touchstart': _0x2222d7[_0xcea27a(0xb3)],
                            'touchmove': _0x2222d7[_0xcea27a(0xb4)],
                            'touchend': _0x2222d7[_0xcea27a(0xb5)]
                        }
                    }, [
                        _0x262524(_0xcea27a(0xb0), {
                            'ref': _0xcea27a(0x94),
                            'staticClass': [_0xcea27a(0xb6)],
                            'style': _0x2222d7[_0xcea27a(0xb7)]
                        }, [_0x262524(_0xcea27a(0xb0), {
                                'staticClass': [_0xcea27a(0xb8)],
                                'style': _0x2222d7[_0xcea27a(0xb9)]
                            })]),
                        _0x262524(_0xcea27a(0xb0), {
                            'ref': 'uni-slider-handle',
                            'staticClass': [_0xcea27a(0xba)],
                            'style': _0x2222d7[_0xcea27a(0xbb)]
                        })
                    ]),
                    _0x2222d7[_0xcea27a(0xbc)] ? _0x262524(_0xcea27a(0xbd), { 'staticClass': ['uni-slider-value'] }, [_0x2222d7['_v'](_0x2222d7['_s'](_0x2222d7['sliderValue']))]) : _0x2222d7['_e']()
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
                'flexDirection': _0x419210(0xbe),
                'alignItems': 'center',
                'minHeight': '30'
            },
            'uni-slider-tap-area': {
                'position': _0x419210(0xbf),
                'flex': 0x1,
                'paddingTop': '15',
                'paddingRight': 0x0,
                'paddingBottom': '15',
                'paddingLeft': 0x0
            },
            'uni-slider-handle-wrapper': {
                'position': _0x419210(0xbf),
                'marginTop': 0x0,
                'marginRight': '18',
                'marginBottom': 0x0,
                'marginLeft': '18',
                'height': '2',
                'borderRadius': '5',
                'backgroundColor': _0x419210(0x83),
                'transitionProperty': _0x419210(0xaa),
                'transitionDuration': 0x12c,
                'transitionTimingFunction': _0x419210(0xc0)
            },
            '@TRANSITION': {
                'uni-slider-handle-wrapper': {
                    'property': _0x419210(0xaa),
                    'duration': 0x12c,
                    'timingFunction': _0x419210(0xc0)
                },
                'uni-slider-track': {
                    'property': 'backgroundColor',
                    'duration': 0x12c,
                    'timingFunction': _0x419210(0xc0)
                },
                'uni-slider-thumb': {
                    'property': 'borderColor',
                    'duration': 0x12c,
                    'timingFunction': _0x419210(0xc0)
                }
            },
            'uni-slider-track': {
                'flex': 0x1,
                'height': '2',
                'borderRadius': '6',
                'backgroundColor': _0x419210(0x84),
                'transitionProperty': _0x419210(0xaa),
                'transitionDuration': 0x12c,
                'transitionTimingFunction': _0x419210(0xc0)
            },
            'uni-slider-thumb': {
                'position': 'absolute',
                'width': '28',
                'height': '28',
                'borderRadius': 0x32,
                'boxShadow': _0x419210(0xc1),
                'transitionProperty': 'borderColor',
                'transitionDuration': 0x12c,
                'transitionTimingFunction': _0x419210(0xc0)
            },
            'uni-slider-step': {
                'position': 'absolute',
                'width': 0x64,
                'height': '2',
                'background': 'transparent',
                'zIndex': 0x1
            },
            'uni-slider-value': {
                'color': _0x419210(0xc2),
                'fontSize': '14',
                'marginRight': '14'
            }
        }
    };
}
export default function init(_0x410df8, _0x247183) {
    const _0x999269 = _0xdd37;
    _0x410df8[_0x999269(0xc3)](_0x999269(0xc4), getSlider(_0x247183));
}

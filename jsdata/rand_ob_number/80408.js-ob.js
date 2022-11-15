import {
    emitter,
    listeners
} from '../mixins';
function getSlider(_0x269b4d) {
    return {
        'name': 'U-Slider',
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
                'default': '#e9e9e9'
            },
            'activeColor': {
                'type': String,
                'default': '#007aff'
            },
            'selectedColor': {
                'type': String,
                'default': '#007aff'
            },
            'blockColor': {
                'type': String,
                'default': '#ffffff'
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
                return { 'backgroundColor': this['_getBgColor']() };
            },
            'trackActiveStyle'() {
                return {
                    'backgroundColor': this['_getActiveColor'](),
                    'width': this['thumbValue'] + 'px'
                };
            },
            'thumbStyle'() {
                return {
                    'width': this['blockSize'] + 'px',
                    'height': this['blockSize'] + 'px',
                    'marginTop': -this['blockSize'] / (0x118c + -0x9f1 + -0x799) + 'px',
                    'left': this['thumbValue'] + 'px',
                    'backgroundColor': this['blockColor']
                };
            },
            'thumbValue'() {
                return (this['sliderValue'] - Number(this['min'])) / (Number(this['max']) - Number(this['min'])) * this['width'];
            }
        },
        'watch': {
            'value'(_0x5e60b5) {
                this['sliderValue'] = Number(_0x5e60b5);
            }
        },
        'mounted'() {
            this['_x0'] = 0x21 * 0xce + 0x2375 * -0x1 + -0x8e7 * -0x1, this['_x1'] = 0x1748 + 0x2048 + -0x3790, this['$eventOld'] = null, setTimeout(() => {
                const _0x1fc420 = _0x269b4d['requireModule']('dom');
                _0x1fc420['getComponentRect'](this['$refs']['slider-track'], _0x357b91 => {
                    this['left'] = _0x357b91['size']['left'], this['width'] = _0x357b91['size']['width'];
                });
            }, 0x1 * -0x1b5a + -0xfd0 + 0x2b5c);
        },
        'created'() {
            this['$dispatch']('Form', 'uni-form-group-update', {
                'type': 'add',
                'vm': this
            });
        },
        'beforeDestroy'() {
            this['$dispatch']('Form', 'uni-form-group-update', {
                'type': 'remove',
                'vm': this
            });
        },
        'methods': {
            '_handleStart'(_0x35f540) {
                if (_0x35f540['changedTouches']['length'] === 0x1100 + -0x1b3a + -0x1 * -0xa3b && !this['_$eventOld']) {
                    this['_$eventOld'] = _0x35f540;
                    const _0xe22d3 = _0x35f540['changedTouches'][-0x1 * 0x18b + -0x1828 + -0x33 * -0x81]['pageX'];
                    this['_x0'] = this['_x1'] = _0xe22d3, this['_onTrack']('start', _0xe22d3);
                }
            },
            '_handleMove'(_0x5240f9) {
                if (_0x5240f9['changedTouches']['length'] === 0x64 * 0x34 + 0x20ee + 0x4d7 * -0xb && this['_$eventOld']) {
                    const _0x5694b6 = _0x5240f9['changedTouches'][0x1e96 + -0x1 * -0xc11 + -0x2aa7]['pageX'];
                    this['_onTrack']('move', _0x5694b6), this['_x1'] = _0x5694b6;
                }
            },
            '_handleEnd'(_0x6203fb) {
                if (_0x6203fb['changedTouches']['length'] === -0x7cb * 0x3 + 0x1 * -0x18d1 + 0x1 * 0x3033 && this['_$eventOld']) {
                    const _0x58d3c0 = _0x6203fb['changedTouches'][-0x506 * 0x5 + -0xc97 + -0x563 * -0x7]['pageX'];
                    this['_$eventOld'] = null, this['_onTrack']('end', _0x58d3c0);
                }
            },
            '_onTrack': function (_0x8457b8, _0x401318) {
                if (!this['disabled']) {
                    if (_0x8457b8 === 'move')
                        this['_onUserChangedValue']({ 'x': _0x401318 }), this['$trigger']('changing', { 'value': this['sliderValue'] });
                    else
                        _0x8457b8 === 'end' && (this['_onUserChangedValue']({ 'x': _0x401318 }), this['$trigger']('change', { 'value': this['sliderValue'] }));
                }
            },
            '_onUserChangedValue'(_0x45e780) {
                let _0x326e24 = _0x45e780['x'];
                _0x326e24 < 0xb02 + 0x2027 + -0x2b29 && (_0x326e24 = -0x1d9b + 0xead + 0xeee), _0x326e24 > this['width'] && (_0x326e24 = this['width']), this['sliderValue'] = this['_filterValue'](_0x326e24);
            },
            '_filterValue'(_0x18b156) {
                let _0x7a8e65 = _0x18b156 / this['width'] * (Number(this['max']) - Number(this['min']));
                const _0x48c7e5 = Number(this['step']);
                return _0x48c7e5 > 0x1fb5 + 0x38 * -0x5d + -0xb5d && _0x7a8e65 > _0x48c7e5 && _0x7a8e65 % _0x48c7e5 / _0x48c7e5 !== -0x25d5 + -0x154d + -0x9 * -0x692 && (_0x7a8e65 -= _0x7a8e65 % _0x48c7e5), parseInt(_0x7a8e65 + Number(this['min']));
            },
            '_getBgColor'() {
                return this['backgroundColor'] !== '#e9e9e9' ? this['backgroundColor'] : this['color'] !== '#007aff' ? this['color'] : '#007aff';
            },
            '_getActiveColor'() {
                return this['activeColor'] !== '#007aff' ? this['activeColor'] : this['selectedColor'] !== '#e9e9e9' ? this['selectedColor'] : '#e9e9e9';
            },
            '_resetFormData'() {
                this['sliderValue'] = this['min'];
            },
            '_getFormData'() {
                const _0x42995f = {};
                return this['name'] !== '' && (_0x42995f['value'] = this['sliderValue'], _0x42995f['key'] = this['name']), _0x42995f;
            }
        },
        'render'(_0x16899a) {
            const _0x56c5f2 = this;
            return _0x16899a('div', _0x56c5f2['_g']({ 'staticClass': ['uni-slider'] }, _0x56c5f2['$listeners']), [_0x16899a('div', { 'staticClass': ['uni-slider-wrapper'] }, [
                    _0x16899a('div', {
                        'staticClass': ['uni-slider-tap-area'],
                        'on': {
                            'touchstart': _0x56c5f2['_handleStart'],
                            'touchmove': _0x56c5f2['_handleMove'],
                            'touchend': _0x56c5f2['_handleEnd']
                        }
                    }, [
                        _0x16899a('div', {
                            'ref': 'slider-track',
                            'staticClass': ['uni-slider-handle-wrapper'],
                            'style': _0x56c5f2['trackStyle']
                        }, [_0x16899a('div', {
                                'staticClass': ['uni-slider-track'],
                                'style': _0x56c5f2['trackActiveStyle']
                            })]),
                        _0x16899a('div', {
                            'ref': 'uni-slider-handle',
                            'staticClass': ['uni-slider-thumb'],
                            'style': _0x56c5f2['thumbStyle']
                        })
                    ]),
                    _0x56c5f2['showValue'] ? _0x16899a('u-text', { 'staticClass': ['uni-slider-value'] }, [_0x56c5f2['_v'](_0x56c5f2['_s'](_0x56c5f2['sliderValue']))]) : _0x56c5f2['_e']()
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
                'flexDirection': 'row',
                'alignItems': 'center',
                'minHeight': '30'
            },
            'uni-slider-tap-area': {
                'position': 'relative',
                'flex': 0x1,
                'paddingTop': '15',
                'paddingRight': 0x0,
                'paddingBottom': '15',
                'paddingLeft': 0x0
            },
            'uni-slider-handle-wrapper': {
                'position': 'relative',
                'marginTop': 0x0,
                'marginRight': '18',
                'marginBottom': 0x0,
                'marginLeft': '18',
                'height': '2',
                'borderRadius': '5',
                'backgroundColor': '#e9e9e9',
                'transitionProperty': 'backgroundColor',
                'transitionDuration': 0x12c,
                'transitionTimingFunction': 'ease'
            },
            '@TRANSITION': {
                'uni-slider-handle-wrapper': {
                    'property': 'backgroundColor',
                    'duration': 0x12c,
                    'timingFunction': 'ease'
                },
                'uni-slider-track': {
                    'property': 'backgroundColor',
                    'duration': 0x12c,
                    'timingFunction': 'ease'
                },
                'uni-slider-thumb': {
                    'property': 'borderColor',
                    'duration': 0x12c,
                    'timingFunction': 'ease'
                }
            },
            'uni-slider-track': {
                'flex': 0x1,
                'height': '2',
                'borderRadius': '6',
                'backgroundColor': '#007aff',
                'transitionProperty': 'backgroundColor',
                'transitionDuration': 0x12c,
                'transitionTimingFunction': 'ease'
            },
            'uni-slider-thumb': {
                'position': 'absolute',
                'width': '28',
                'height': '28',
                'borderRadius': 0x32,
                'boxShadow': '0\x200\x204px\x20#ebebeb',
                'transitionProperty': 'borderColor',
                'transitionDuration': 0x12c,
                'transitionTimingFunction': 'ease'
            },
            'uni-slider-step': {
                'position': 'absolute',
                'width': 0x64,
                'height': '2',
                'background': 'transparent',
                'zIndex': 0x1
            },
            'uni-slider-value': {
                'color': '#888888',
                'fontSize': '14',
                'marginRight': '14'
            }
        }
    };
}
export default function init(_0x225a5a, _0xaf63a2) {
    _0x225a5a['component']('u-slider', getSlider(_0xaf63a2));
}

import {
    emitter,
    listeners
} from '../mixins';
function getSlider(_0x171027) {
    const _0x21405d = {
        'GbEEt': function (_0x3fc5ef, _0x30acc8) {
            return _0x3fc5ef(_0x30acc8);
        },
        'zPMnQ': function (_0x2d07d9, _0x43e036) {
            return _0x2d07d9 + _0x43e036;
        },
        'AjLZb': function (_0x361f25, _0x346bd2) {
            return _0x361f25 + _0x346bd2;
        },
        'WjNyv': function (_0x4452ba, _0x1a401b) {
            return _0x4452ba / _0x1a401b;
        },
        'XVqHG': function (_0x2eb94c, _0xeee7dc) {
            return _0x2eb94c * _0xeee7dc;
        },
        'bMzNV': function (_0x10df9e, _0x1621ec) {
            return _0x10df9e / _0x1621ec;
        },
        'OLfEm': function (_0x4868e9, _0x208845) {
            return _0x4868e9 - _0x208845;
        },
        'YYJPE': function (_0x35d0e4, _0x6e013e) {
            return _0x35d0e4(_0x6e013e);
        },
        'CGDSa': 'dom',
        'CwCne': 'slider-track',
        'vBpPU': function (_0x4fd44d, _0x10c00f, _0x3e7dbe) {
            return _0x4fd44d(_0x10c00f, _0x3e7dbe);
        },
        'GrDxP': 'Form',
        'yfZGF': 'uni-form-group-update',
        'zbUYV': 'add',
        'ccNqK': 'remove',
        'QlxHe': function (_0x3c0705, _0x1e8f23) {
            return _0x3c0705 === _0x1e8f23;
        },
        'OXWoX': 'start',
        'ipKyV': function (_0x4ba75b, _0x409c5c) {
            return _0x4ba75b === _0x409c5c;
        },
        'mADoa': 'move',
        'cgjec': 'end',
        'pvSZT': 'changing',
        'keRwH': 'change',
        'mkrsX': function (_0x299d42, _0x741671) {
            return _0x299d42 < _0x741671;
        },
        'lfvRl': function (_0x2728ff, _0x34e329) {
            return _0x2728ff > _0x34e329;
        },
        'oQcJc': function (_0x1f4a91, _0x54e599) {
            return _0x1f4a91 / _0x54e599;
        },
        'PSOIv': function (_0x589a8a, _0x1edcd7) {
            return _0x589a8a - _0x1edcd7;
        },
        'zferE': function (_0x597f1e, _0x4c3e51) {
            return _0x597f1e(_0x4c3e51);
        },
        'BnVDr': function (_0x16904f, _0xa6908a) {
            return _0x16904f > _0xa6908a;
        },
        'byrsP': function (_0x269229, _0xd4c91f) {
            return _0x269229 !== _0xd4c91f;
        },
        'lfNJf': function (_0x344895, _0x1622d0) {
            return _0x344895 % _0x1622d0;
        },
        'jhFiN': function (_0x318254, _0x59709a) {
            return _0x318254 % _0x59709a;
        },
        'veDui': function (_0x22442b, _0xd5bce2) {
            return _0x22442b(_0xd5bce2);
        },
        'mokAs': '#e9e9e9',
        'lEFaI': function (_0x820283, _0x3fb9b0) {
            return _0x820283 !== _0x3fb9b0;
        },
        'Nqsdw': '#007aff',
        'kgrSK': function (_0x312868, _0xe927ca) {
            return _0x312868 !== _0xe927ca;
        },
        'TdoGw': function (_0x391933, _0x1e3d45) {
            return _0x391933 !== _0x1e3d45;
        },
        'umKcl': function (_0x652d26, _0x37e975) {
            return _0x652d26 !== _0x37e975;
        },
        'OGhmA': 'value',
        'EkWTn': 'key',
        'FueTX': function (_0x2c9d47, _0x44e3c5, _0x336c2d, _0x55cd65) {
            return _0x2c9d47(_0x44e3c5, _0x336c2d, _0x55cd65);
        },
        'cuxCF': 'div',
        'OLaNe': 'uni-slider',
        'ReGwp': function (_0xceb16d, _0x40adc9, _0x248e17, _0x5e35b6) {
            return _0xceb16d(_0x40adc9, _0x248e17, _0x5e35b6);
        },
        'zqQoG': 'uni-slider-wrapper',
        'nJCun': function (_0x48fe50, _0xf7c9c3, _0x129b61, _0x57b21e) {
            return _0x48fe50(_0xf7c9c3, _0x129b61, _0x57b21e);
        },
        'INpRa': 'uni-slider-tap-area',
        'jBHcc': 'uni-slider-handle-wrapper',
        'VymZg': function (_0x3dda47, _0x2d5c05, _0x5b6014) {
            return _0x3dda47(_0x2d5c05, _0x5b6014);
        },
        'gzNsR': 'uni-slider-track',
        'viZCr': function (_0x2be1af, _0x3d7052, _0x16d12f) {
            return _0x2be1af(_0x3d7052, _0x16d12f);
        },
        'QaekJ': 'uni-slider-handle',
        'lPAVv': 'uni-slider-thumb',
        'krSbt': 'u-text',
        'IlsfP': 'uni-slider-value',
        'JCSup': 'U-Slider',
        'UqhkT': '#ffffff',
        'RFSnH': 'row',
        'aIFLC': 'center',
        'BZCeV': 'relative',
        'YSNmz': 'backgroundColor',
        'WGhDb': 'ease',
        'nwGUB': 'borderColor',
        'TnakI': 'absolute',
        'zAxmz': '0\x200\x204px\x20#ebebeb',
        'ejYet': 'transparent',
        'bCpyp': '#888888'
    };
    return {
        'name': _0x21405d['JCSup'],
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
                'default': _0x21405d['mokAs']
            },
            'backgroundColor': {
                'type': String,
                'default': _0x21405d['mokAs']
            },
            'activeColor': {
                'type': String,
                'default': _0x21405d['Nqsdw']
            },
            'selectedColor': {
                'type': String,
                'default': _0x21405d['Nqsdw']
            },
            'blockColor': {
                'type': String,
                'default': _0x21405d['UqhkT']
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
                'sliderValue': _0x21405d['GbEEt'](Number, this['value']),
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
                    'width': _0x21405d['zPMnQ'](this['thumbValue'], 'px')
                };
            },
            'thumbStyle'() {
                return {
                    'width': _0x21405d['zPMnQ'](this['blockSize'], 'px'),
                    'height': _0x21405d['AjLZb'](this['blockSize'], 'px'),
                    'marginTop': _0x21405d['AjLZb'](_0x21405d['WjNyv'](-this['blockSize'], 0x2), 'px'),
                    'left': _0x21405d['AjLZb'](this['thumbValue'], 'px'),
                    'backgroundColor': this['blockColor']
                };
            },
            'thumbValue'() {
                return _0x21405d['XVqHG'](_0x21405d['bMzNV'](_0x21405d['OLfEm'](this['sliderValue'], _0x21405d['YYJPE'](Number, this['min'])), _0x21405d['OLfEm'](_0x21405d['YYJPE'](Number, this['max']), _0x21405d['YYJPE'](Number, this['min']))), this['width']);
            }
        },
        'watch': {
            'value'(_0x1677c4) {
                this['sliderValue'] = _0x21405d['YYJPE'](Number, _0x1677c4);
            }
        },
        'mounted'() {
            const _0x244e08 = {
                'rZxVv': _0x21405d['CGDSa'],
                'qbHck': _0x21405d['CwCne']
            };
            this['_x0'] = 0x0, this['_x1'] = 0x0, this['$eventOld'] = null, _0x21405d['vBpPU'](setTimeout, () => {
                const _0x3fdb3e = _0x171027['requireModule'](_0x244e08['rZxVv']);
                _0x3fdb3e['getComponentRect'](this['$refs'][_0x244e08['qbHck']], _0x5aecf5 => {
                    this['left'] = _0x5aecf5['size']['left'], this['width'] = _0x5aecf5['size']['width'];
                });
            }, 0x32);
        },
        'created'() {
            this['$dispatch'](_0x21405d['GrDxP'], _0x21405d['yfZGF'], {
                'type': _0x21405d['zbUYV'],
                'vm': this
            });
        },
        'beforeDestroy'() {
            this['$dispatch'](_0x21405d['GrDxP'], _0x21405d['yfZGF'], {
                'type': _0x21405d['ccNqK'],
                'vm': this
            });
        },
        'methods': {
            '_handleStart'(_0x3e5691) {
                if (_0x21405d['QlxHe'](_0x3e5691['changedTouches']['length'], 0x1) && !this['_$eventOld']) {
                    this['_$eventOld'] = _0x3e5691;
                    const _0x1e6cb4 = _0x3e5691['changedTouches'][0x0]['pageX'];
                    this['_x0'] = this['_x1'] = _0x1e6cb4, this['_onTrack'](_0x21405d['OXWoX'], _0x1e6cb4);
                }
            },
            '_handleMove'(_0x1edede) {
                if (_0x21405d['ipKyV'](_0x1edede['changedTouches']['length'], 0x1) && this['_$eventOld']) {
                    const _0x2cfbac = _0x1edede['changedTouches'][0x0]['pageX'];
                    this['_onTrack'](_0x21405d['mADoa'], _0x2cfbac), this['_x1'] = _0x2cfbac;
                }
            },
            '_handleEnd'(_0x29810b) {
                if (_0x21405d['ipKyV'](_0x29810b['changedTouches']['length'], 0x1) && this['_$eventOld']) {
                    const _0x571ee7 = _0x29810b['changedTouches'][0x0]['pageX'];
                    this['_$eventOld'] = null, this['_onTrack'](_0x21405d['cgjec'], _0x571ee7);
                }
            },
            '_onTrack': function (_0x28f261, _0x287527) {
                if (!this['disabled']) {
                    if (_0x21405d['ipKyV'](_0x28f261, _0x21405d['mADoa']))
                        this['_onUserChangedValue']({ 'x': _0x287527 }), this['$trigger'](_0x21405d['pvSZT'], { 'value': this['sliderValue'] });
                    else
                        _0x21405d['ipKyV'](_0x28f261, _0x21405d['cgjec']) && (this['_onUserChangedValue']({ 'x': _0x287527 }), this['$trigger'](_0x21405d['keRwH'], { 'value': this['sliderValue'] }));
                }
            },
            '_onUserChangedValue'(_0x12eb2c) {
                let _0x493574 = _0x12eb2c['x'];
                _0x21405d['mkrsX'](_0x493574, 0x0) && (_0x493574 = 0x0), _0x21405d['lfvRl'](_0x493574, this['width']) && (_0x493574 = this['width']), this['sliderValue'] = this['_filterValue'](_0x493574);
            },
            '_filterValue'(_0x4143f8) {
                let _0x5a56e0 = _0x21405d['XVqHG'](_0x21405d['oQcJc'](_0x4143f8, this['width']), _0x21405d['PSOIv'](_0x21405d['zferE'](Number, this['max']), _0x21405d['zferE'](Number, this['min'])));
                const _0x35e97c = _0x21405d['zferE'](Number, this['step']);
                return _0x21405d['BnVDr'](_0x35e97c, 0x0) && _0x21405d['BnVDr'](_0x5a56e0, _0x35e97c) && _0x21405d['byrsP'](_0x21405d['oQcJc'](_0x21405d['lfNJf'](_0x5a56e0, _0x35e97c), _0x35e97c), 0x0) && (_0x5a56e0 -= _0x21405d['jhFiN'](_0x5a56e0, _0x35e97c)), _0x21405d['zferE'](parseInt, _0x21405d['AjLZb'](_0x5a56e0, _0x21405d['veDui'](Number, this['min'])));
            },
            '_getBgColor'() {
                return _0x21405d['byrsP'](this['backgroundColor'], _0x21405d['mokAs']) ? this['backgroundColor'] : _0x21405d['lEFaI'](this['color'], _0x21405d['Nqsdw']) ? this['color'] : _0x21405d['Nqsdw'];
            },
            '_getActiveColor'() {
                return _0x21405d['kgrSK'](this['activeColor'], _0x21405d['Nqsdw']) ? this['activeColor'] : _0x21405d['TdoGw'](this['selectedColor'], _0x21405d['mokAs']) ? this['selectedColor'] : _0x21405d['mokAs'];
            },
            '_resetFormData'() {
                this['sliderValue'] = this['min'];
            },
            '_getFormData'() {
                const _0x4ae04a = {};
                return _0x21405d['umKcl'](this['name'], '') && (_0x4ae04a[_0x21405d['OGhmA']] = this['sliderValue'], _0x4ae04a[_0x21405d['EkWTn']] = this['name']), _0x4ae04a;
            }
        },
        'render'(_0x464ed1) {
            const _0x58903c = this;
            return _0x21405d['FueTX'](_0x464ed1, _0x21405d['cuxCF'], _0x58903c['_g']({ 'staticClass': [_0x21405d['OLaNe']] }, _0x58903c['$listeners']), [_0x21405d['ReGwp'](_0x464ed1, _0x21405d['cuxCF'], { 'staticClass': [_0x21405d['zqQoG']] }, [
                    _0x21405d['nJCun'](_0x464ed1, _0x21405d['cuxCF'], {
                        'staticClass': [_0x21405d['INpRa']],
                        'on': {
                            'touchstart': _0x58903c['_handleStart'],
                            'touchmove': _0x58903c['_handleMove'],
                            'touchend': _0x58903c['_handleEnd']
                        }
                    }, [
                        _0x21405d['nJCun'](_0x464ed1, _0x21405d['cuxCF'], {
                            'ref': _0x21405d['CwCne'],
                            'staticClass': [_0x21405d['jBHcc']],
                            'style': _0x58903c['trackStyle']
                        }, [_0x21405d['VymZg'](_0x464ed1, _0x21405d['cuxCF'], {
                                'staticClass': [_0x21405d['gzNsR']],
                                'style': _0x58903c['trackActiveStyle']
                            })]),
                        _0x21405d['viZCr'](_0x464ed1, _0x21405d['cuxCF'], {
                            'ref': _0x21405d['QaekJ'],
                            'staticClass': [_0x21405d['lPAVv']],
                            'style': _0x58903c['thumbStyle']
                        })
                    ]),
                    _0x58903c['showValue'] ? _0x21405d['nJCun'](_0x464ed1, _0x21405d['krSbt'], { 'staticClass': [_0x21405d['IlsfP']] }, [_0x58903c['_v'](_0x58903c['_s'](_0x58903c['sliderValue']))]) : _0x58903c['_e']()
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
                'flexDirection': _0x21405d['RFSnH'],
                'alignItems': _0x21405d['aIFLC'],
                'minHeight': '30'
            },
            'uni-slider-tap-area': {
                'position': _0x21405d['BZCeV'],
                'flex': 0x1,
                'paddingTop': '15',
                'paddingRight': 0x0,
                'paddingBottom': '15',
                'paddingLeft': 0x0
            },
            'uni-slider-handle-wrapper': {
                'position': _0x21405d['BZCeV'],
                'marginTop': 0x0,
                'marginRight': '18',
                'marginBottom': 0x0,
                'marginLeft': '18',
                'height': '2',
                'borderRadius': '5',
                'backgroundColor': _0x21405d['mokAs'],
                'transitionProperty': _0x21405d['YSNmz'],
                'transitionDuration': 0x12c,
                'transitionTimingFunction': _0x21405d['WGhDb']
            },
            '@TRANSITION': {
                'uni-slider-handle-wrapper': {
                    'property': _0x21405d['YSNmz'],
                    'duration': 0x12c,
                    'timingFunction': _0x21405d['WGhDb']
                },
                'uni-slider-track': {
                    'property': _0x21405d['YSNmz'],
                    'duration': 0x12c,
                    'timingFunction': _0x21405d['WGhDb']
                },
                'uni-slider-thumb': {
                    'property': _0x21405d['nwGUB'],
                    'duration': 0x12c,
                    'timingFunction': _0x21405d['WGhDb']
                }
            },
            'uni-slider-track': {
                'flex': 0x1,
                'height': '2',
                'borderRadius': '6',
                'backgroundColor': _0x21405d['Nqsdw'],
                'transitionProperty': _0x21405d['YSNmz'],
                'transitionDuration': 0x12c,
                'transitionTimingFunction': _0x21405d['WGhDb']
            },
            'uni-slider-thumb': {
                'position': _0x21405d['TnakI'],
                'width': '28',
                'height': '28',
                'borderRadius': 0x32,
                'boxShadow': _0x21405d['zAxmz'],
                'transitionProperty': _0x21405d['nwGUB'],
                'transitionDuration': 0x12c,
                'transitionTimingFunction': _0x21405d['WGhDb']
            },
            'uni-slider-step': {
                'position': _0x21405d['TnakI'],
                'width': 0x64,
                'height': '2',
                'background': _0x21405d['ejYet'],
                'zIndex': 0x1
            },
            'uni-slider-value': {
                'color': _0x21405d['bCpyp'],
                'fontSize': '14',
                'marginRight': '14'
            }
        }
    };
}
export default function init(_0x4d2c70, _0x295bef) {
    const _0x5a5f03 = {
        'jxTUX': 'u-slider',
        'kOiSe': function (_0x26abb1, _0x3d97aa) {
            return _0x26abb1(_0x3d97aa);
        }
    };
    _0x4d2c70['component'](_0x5a5f03['jxTUX'], _0x5a5f03['kOiSe'](getSlider, _0x295bef));
}

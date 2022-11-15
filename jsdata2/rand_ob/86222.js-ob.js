/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x35dc = [
    'kWJct',
    'setTo',
    'VyuWe',
    'contains',
    'nfXCT',
    'ZeVPd',
    '0|3|2|5|6|1|4',
    'RfHcJ',
    'XslKb',
    'global',
    'height',
    'ToJSON',
    'fontSize',
    'letterSpacing',
    'align',
    'ParseXMLBitmapFont',
    '1957ebCkCa',
    '23HmTPVd',
    '4179AVIBDC',
    '2kbQOXN',
    '173181gwmqWd',
    '50412zGGMQU',
    '487229bzqsqi',
    '680308JGzmhh',
    '58988zNgdcU',
    '7pgBbOO',
    '../../../math/Clamp',
    '../../components',
    '../../GameObject',
    '../GetBitmapTextSize',
    '../ParseFromAtlas',
    '../ParseXMLBitmapFont',
    '../../../geom/rectangle/Rectangle',
    'Depth',
    'Origin',
    'Pipeline',
    'ScrollFactor',
    'Visible',
    '5|23|25|10|4|16|2|6|11|19|14|12|20|9|22|18|0|24|15|13|8|7|21|3|1|17',
    'bnWnh',
    'split',
    'dropShadowX',
    'fontData',
    'data',
    'setOrigin',
    'scene',
    'sys',
    'cache',
    'bitmapFont',
    'get',
    'Tybwt',
    '_text',
    'setTexture',
    'texture',
    'frame',
    'fromAtlas',
    '_maxWidth',
    'font',
    '_fontSize',
    'size',
    '_bounds',
    'SoWbS',
    'dropShadowAlpha',
    'dropShadowColor',
    'warn',
    'znwcN',
    'setText',
    'charColors',
    '_letterSpacing',
    '_dirty',
    'wordWrapCharCode',
    'call',
    'Wcpdc',
    '_align',
    'ALIGN_LEFT',
    'ALIGN_CENTER',
    'ALIGN_RIGHT',
    'ThUjF',
    'isArray',
    'text',
    'toString',
    'updateDisplayOrigin',
    'vdPzG',
    '2|4|3|0|1',
    '5|2|6|12|1|7|11|10|0|8|9|4|3',
    'ncWdB',
    'Znuej',
    'lUTXK',
    'MVTCT',
    'wNuGM',
    'HxddR',
    'tintBL',
    'tintBR',
    'tintTR',
    'tintTL',
    'length',
    'NPcWk',
    'BDjMn',
    'HycQg',
    'number',
    'JPlmZ',
    'PenmJ',
    'word',
    'setCharacterTint',
    'NrEnb',
    'scaleX',
    'scaleY',
    'getLocalPoint',
    'getTextBounds'
];
function _0x1f17(_0x1d6047, _0x194824) {
    return _0x1f17 = function (_0x2150b0, _0x3ba238) {
        _0x2150b0 = _0x2150b0 - (-0xd * 0x79 + 0x1c4a + 0x4 * -0x529);
        var _0x2a45ee = _0x35dc[_0x2150b0];
        return _0x2a45ee;
    }, _0x1f17(_0x1d6047, _0x194824);
}
var _0x47db03 = _0x1f17;
(function (_0x495a16, _0x35c6e0) {
    var _0x2d1ac0 = _0x1f17;
    while (!![]) {
        try {
            var _0x46e07f = -parseInt(_0x2d1ac0(0x181)) * -parseInt(_0x2d1ac0(0x182)) + parseInt(_0x2d1ac0(0x183)) + -parseInt(_0x2d1ac0(0x184)) * parseInt(_0x2d1ac0(0x185)) + -parseInt(_0x2d1ac0(0x186)) + parseInt(_0x2d1ac0(0x187)) + parseInt(_0x2d1ac0(0x188)) + -parseInt(_0x2d1ac0(0x189)) * parseInt(_0x2d1ac0(0x18a));
            if (_0x46e07f === _0x35c6e0)
                break;
            else
                _0x495a16['push'](_0x495a16['shift']());
        } catch (_0x57eb69) {
            _0x495a16['push'](_0x495a16['shift']());
        }
    }
}(_0x35dc, -0x97 * 0xe8a + -0x3d0c * -0xa + 0xc66eb));
var Class = require('../../../utils/Class'), Clamp = require(_0x47db03(0x18b)), Components = require(_0x47db03(0x18c)), GameObject = require(_0x47db03(0x18d)), GetBitmapTextSize = require(_0x47db03(0x18e)), ParseFromAtlas = require(_0x47db03(0x18f)), ParseXMLBitmapFont = require(_0x47db03(0x190)), Rectangle = require(_0x47db03(0x191)), Render = require('./BitmapTextRender'), BitmapText = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components['Alpha'],
            Components['BlendMode'],
            Components[_0x47db03(0x192)],
            Components['Mask'],
            Components[_0x47db03(0x193)],
            Components[_0x47db03(0x194)],
            Components[_0x47db03(0x195)],
            Components['Texture'],
            Components['Tint'],
            Components['Transform'],
            Components[_0x47db03(0x196)],
            Render
        ],
        'initialize': function BitmapText(_0x2a3774, _0x1aef89, _0x4023b4, _0x3e1c37, _0x5ba27c, _0x361297, _0x5a3b9e) {
            var _0xf294ca = _0x47db03, _0x157333 = {
                    'bnWnh': _0xf294ca(0x197),
                    'Tybwt': function (_0x2836ca, _0x292ba1) {
                        return _0x2836ca === _0x292ba1;
                    },
                    'SoWbS': function (_0x56ba01) {
                        return _0x56ba01();
                    },
                    'znwcN': 'Invalid\x20BitmapText\x20key:\x20',
                    'Wcpdc': 'BitmapText'
                }, _0x3be855 = _0x157333[_0xf294ca(0x198)][_0xf294ca(0x199)]('|'), _0x46d58c = -0x2466 + 0x25e + 0x1 * 0x2208;
            while (!![]) {
                switch (_0x3be855[_0x46d58c++]) {
                case '0':
                    this[_0xf294ca(0x19a)] = 0x2663 * 0x1 + -0x7 * -0x4c9 + 0x1 * -0x47e2;
                    continue;
                case '1':
                    this['initPipeline']();
                    continue;
                case '2':
                    this[_0xf294ca(0x19b)] = _0x4cb79c[_0xf294ca(0x19c)];
                    continue;
                case '3':
                    this[_0xf294ca(0x19d)](0x1 * -0x6a2 + 0x1ea0 + 0x4a * -0x53, 0x2435 + 0x877 * -0x1 + -0x1bbe);
                    continue;
                case '4':
                    var _0x4cb79c = this[_0xf294ca(0x19e)][_0xf294ca(0x19f)][_0xf294ca(0x1a0)][_0xf294ca(0x1a1)][_0xf294ca(0x1a2)](_0x3e1c37);
                    continue;
                case '5':
                    _0x157333[_0xf294ca(0x1a3)](_0x5ba27c, undefined) && (_0x5ba27c = '');
                    continue;
                case '6':
                    this[_0xf294ca(0x1a4)] = '';
                    continue;
                case '7':
                    this[_0xf294ca(0x1a5)](_0x4cb79c[_0xf294ca(0x1a6)], _0x4cb79c[_0xf294ca(0x1a7)]);
                    continue;
                case '8':
                    this[_0xf294ca(0x1a8)] = _0x4cb79c[_0xf294ca(0x1a8)];
                    continue;
                case '9':
                    this[_0xf294ca(0x1a9)] = -0x14 * 0x9b + 0x609 + 0x613;
                    continue;
                case '10':
                    this[_0xf294ca(0x1aa)] = _0x3e1c37;
                    continue;
                case '11':
                    this[_0xf294ca(0x1ab)] = _0x361297 || this[_0xf294ca(0x19b)][_0xf294ca(0x1ac)];
                    continue;
                case '12':
                    this[_0xf294ca(0x1ad)] = _0x157333[_0xf294ca(0x1ae)](GetBitmapTextSize);
                    continue;
                case '13':
                    this[_0xf294ca(0x1af)] = 0x2cc + -0x3fb + 0x12f + 0.5;
                    continue;
                case '14':
                    this['_align'] = _0x5a3b9e;
                    continue;
                case '15':
                    this[_0xf294ca(0x1b0)] = 0x634 * 0x4 + 0x1050 + -0x2920;
                    continue;
                case '16':
                    !_0x4cb79c && console[_0xf294ca(0x1b1)](_0x157333[_0xf294ca(0x1b2)] + _0x3e1c37);
                    continue;
                case '17':
                    this[_0xf294ca(0x1b3)](_0x5ba27c);
                    continue;
                case '18':
                    this[_0xf294ca(0x1b4)] = [];
                    continue;
                case '19':
                    this[_0xf294ca(0x1b5)] = -0x199a + -0x1 * 0x1664 + 0x2ffe;
                    continue;
                case '20':
                    this[_0xf294ca(0x1b6)] = !![];
                    continue;
                case '21':
                    this['setPosition'](_0x1aef89, _0x4023b4);
                    continue;
                case '22':
                    this[_0xf294ca(0x1b7)] = -0x1 * 0x1a9b + -0x1 * 0x107b + 0x159b * 0x2;
                    continue;
                case '23':
                    _0x157333[_0xf294ca(0x1a3)](_0x5a3b9e, undefined) && (_0x5a3b9e = -0x2 * -0xac5 + -0x2303 + -0xd79 * -0x1);
                    continue;
                case '24':
                    this['dropShadowY'] = -0x1 * -0x10bb + 0x17aa + -0x2865;
                    continue;
                case '25':
                    GameObject[_0xf294ca(0x1b8)](this, _0x2a3774, _0x157333[_0xf294ca(0x1b9)]);
                    continue;
                }
                break;
            }
        },
        'setLeftAlign': function () {
            var _0x404972 = _0x47db03;
            return this[_0x404972(0x1ba)] = BitmapText[_0x404972(0x1bb)], this[_0x404972(0x1b6)] = !![], this;
        },
        'setCenterAlign': function () {
            var _0x214fdf = _0x47db03;
            return this[_0x214fdf(0x1ba)] = BitmapText[_0x214fdf(0x1bc)], this[_0x214fdf(0x1b6)] = !![], this;
        },
        'setRightAlign': function () {
            var _0x5a3535 = _0x47db03;
            return this['_align'] = BitmapText[_0x5a3535(0x1bd)], this[_0x5a3535(0x1b6)] = !![], this;
        },
        'setFontSize': function (_0x4b700a) {
            var _0x5a8c29 = _0x47db03;
            return this[_0x5a8c29(0x1ab)] = _0x4b700a, this[_0x5a8c29(0x1b6)] = !![], this;
        },
        'setLetterSpacing': function (_0x1fe46d) {
            var _0x5cc65a = _0x47db03, _0x420906 = {
                    'LTtVM': function (_0xa96a49, _0x151c63) {
                        return _0xa96a49 === _0x151c63;
                    }
                };
            return _0x420906['LTtVM'](_0x1fe46d, undefined) && (_0x1fe46d = -0x26 * 0x2f + -0xcc + -0xc7 * -0xa), this[_0x5cc65a(0x1b5)] = _0x1fe46d, this['_dirty'] = !![], this;
        },
        'setText': function (_0x496237) {
            var _0x590fac = _0x47db03, _0x4ff468 = {
                    'ThUjF': function (_0x515c38, _0x410ce1) {
                        return _0x515c38 !== _0x410ce1;
                    }
                };
            return !_0x496237 && _0x4ff468[_0x590fac(0x1be)](_0x496237, 0x20d * 0x4 + -0x1 * -0x1d53 + -0x2e3 * 0xd) && (_0x496237 = ''), Array[_0x590fac(0x1bf)](_0x496237) && (_0x496237 = _0x496237['join']('\x0a')), _0x4ff468['ThUjF'](_0x496237, this[_0x590fac(0x1c0)]) && (this[_0x590fac(0x1a4)] = _0x496237[_0x590fac(0x1c1)](), this['_dirty'] = !![], this[_0x590fac(0x1c2)]()), this;
        },
        'setDropShadow': function (_0x4beb74, _0xe4d6e6, _0x5a16cb, _0x38f48d) {
            var _0x418210 = _0x47db03, _0x47a1cb = {
                    'vdPzG': function (_0x46c025, _0x356b56) {
                        return _0x46c025 === _0x356b56;
                    }
                };
            return _0x47a1cb[_0x418210(0x1c3)](_0x4beb74, undefined) && (_0x4beb74 = 0x16c0 + 0x1c4a + 0x5e * -0x8b), _0xe4d6e6 === undefined && (_0xe4d6e6 = 0x718 + 0x33 * -0x46 + -0x1 * -0x6da), _0x47a1cb[_0x418210(0x1c3)](_0x5a16cb, undefined) && (_0x5a16cb = -0x12a3 * 0x2 + -0x3 * 0x585 + -0x1 * -0x35d5), _0x38f48d === undefined && (_0x38f48d = 0x1420 + -0x6af + 0xd71 * -0x1 + 0.5), this[_0x418210(0x19a)] = _0x4beb74, this['dropShadowY'] = _0xe4d6e6, this['dropShadowColor'] = _0x5a16cb, this[_0x418210(0x1af)] = _0x38f48d, this;
        },
        'setCharacterTint': function (_0x5c3260, _0x4a9133, _0x5c1c25, _0x29826b, _0x1d7bc8, _0x4e4888, _0x4d9af0) {
            var _0x37e12b = _0x47db03, _0x548580 = {
                    'ncWdB': function (_0x26df72, _0x42c3ee, _0x332e05, _0x837e0e) {
                        return _0x26df72(_0x42c3ee, _0x332e05, _0x837e0e);
                    },
                    'TSDIP': function (_0x668d15, _0xb080b0) {
                        return _0x668d15 - _0xb080b0;
                    },
                    'Znuej': function (_0x42765b, _0x5e2a7d) {
                        return _0x42765b === _0x5e2a7d;
                    },
                    'lUTXK': function (_0x104fdb, _0x428d2f) {
                        return _0x104fdb === _0x428d2f;
                    },
                    'MVTCT': function (_0x457f91, _0x4ecf82) {
                        return _0x457f91 < _0x4ecf82;
                    },
                    'wNuGM': function (_0x496965, _0x506cb5) {
                        return _0x496965 === _0x506cb5;
                    },
                    'HxddR': _0x37e12b(0x1c4),
                    'NPcWk': function (_0x4612bb, _0x412907) {
                        return _0x4612bb < _0x412907;
                    },
                    'BDjMn': function (_0x3740ed, _0x5b1bc6) {
                        return _0x3740ed + _0x5b1bc6;
                    },
                    'HycQg': function (_0x2e43db, _0x471500) {
                        return _0x2e43db === _0x471500;
                    }
                }, _0x3e5719 = _0x37e12b(0x1c5)[_0x37e12b(0x199)]('|'), _0x34b8f0 = -0x1 * -0x24f7 + 0x39 * 0x13 + -0x1499 * 0x2;
            while (!![]) {
                switch (_0x3e5719[_0x34b8f0++]) {
                case '0':
                    _0x5c3260 = _0x548580[_0x37e12b(0x1c6)](Clamp, _0x5c3260, 0x1f0f + 0x22fb + -0x420a, _0x548580['TSDIP'](_0x305ba1, -0x1db7 * 0x1 + -0xa * -0x35 + 0x1ba6));
                    continue;
                case '1':
                    _0x548580[_0x37e12b(0x1c7)](_0x1d7bc8, undefined) && (_0x1d7bc8 = _0x29826b, _0x4e4888 = _0x29826b, _0x4d9af0 = _0x29826b);
                    continue;
                case '2':
                    _0x548580[_0x37e12b(0x1c8)](_0x4a9133, undefined) && (_0x4a9133 = -0xd3a * -0x2 + 0x17a2 + -0x3215);
                    continue;
                case '3':
                    return this;
                case '4':
                    for (var _0xeb6d71 = _0x5c3260; _0x548580[_0x37e12b(0x1c9)](_0xeb6d71, _0xdda0ba); _0xeb6d71++) {
                        var _0x1544e8 = _0x82e26e[_0xeb6d71];
                        if (_0x548580[_0x37e12b(0x1ca)](_0x29826b, -(-0x273 * -0x4 + 0x38f * -0x4 + 0x471)))
                            _0x82e26e[_0xeb6d71] = null;
                        else {
                            var _0x25bd6c = _0x5c1c25 ? -0x55 + -0x15a4 + 0x15fa : -0x13a * 0x4 + -0x1 * -0x1de5 + -0x18fd;
                            if (_0x1544e8) {
                                var _0xbd2186 = _0x548580[_0x37e12b(0x1cb)][_0x37e12b(0x199)]('|'), _0x3362e = 0x1480 + -0x2 * -0x865 + 0x254a * -0x1;
                                while (!![]) {
                                    switch (_0xbd2186[_0x3362e++]) {
                                    case '0':
                                        _0x1544e8[_0x37e12b(0x1cc)] = _0x4e4888;
                                        continue;
                                    case '1':
                                        _0x1544e8[_0x37e12b(0x1cd)] = _0x4d9af0;
                                        continue;
                                    case '2':
                                        _0x1544e8['tintEffect'] = _0x25bd6c;
                                        continue;
                                    case '3':
                                        _0x1544e8[_0x37e12b(0x1ce)] = _0x1d7bc8;
                                        continue;
                                    case '4':
                                        _0x1544e8[_0x37e12b(0x1cf)] = _0x29826b;
                                        continue;
                                    }
                                    break;
                                }
                            } else
                                _0x82e26e[_0xeb6d71] = {
                                    'tintEffect': _0x25bd6c,
                                    'tintTL': _0x29826b,
                                    'tintTR': _0x1d7bc8,
                                    'tintBL': _0x4e4888,
                                    'tintBR': _0x4d9af0
                                };
                        }
                    }
                    continue;
                case '5':
                    _0x548580['wNuGM'](_0x5c3260, undefined) && (_0x5c3260 = 0x52c * 0x7 + 0x18cc + -0x2 * 0x1e80);
                    continue;
                case '6':
                    _0x5c1c25 === undefined && (_0x5c1c25 = ![]);
                    continue;
                case '7':
                    var _0x305ba1 = this[_0x37e12b(0x1c0)][_0x37e12b(0x1d0)];
                    continue;
                case '8':
                    var _0xdda0ba = _0x548580[_0x37e12b(0x1c6)](Clamp, _0x5c3260 + _0x4a9133, _0x5c3260, _0x305ba1);
                    continue;
                case '9':
                    var _0x82e26e = this[_0x37e12b(0x1b4)];
                    continue;
                case '10':
                    _0x548580[_0x37e12b(0x1d1)](_0x5c3260, 0x18f2 + -0x1fca + 0x6d8) && (_0x5c3260 = _0x548580[_0x37e12b(0x1d2)](_0x305ba1, _0x5c3260));
                    continue;
                case '11':
                    _0x548580[_0x37e12b(0x1d3)](_0x4a9133, -(-0x981 + -0x382 * -0x7 + -0xf0c)) && (_0x4a9133 = _0x305ba1);
                    continue;
                case '12':
                    _0x29826b === undefined && (_0x29826b = -(0x1 * 0x18 + -0x2312 + 0x22fb));
                    continue;
                }
                break;
            }
        },
        'setWordTint': function (_0x3fe2d5, _0x581d72, _0x13f819, _0x5889a0, _0xb0764c, _0x6433e3, _0x853d04) {
            var _0xbc7f9c = _0x47db03, _0x5f05db = {
                    'JPlmZ': function (_0x4d39ae, _0x395d43) {
                        return _0x4d39ae === _0x395d43;
                    },
                    'onpAa': function (_0x4d0e97, _0x217894) {
                        return _0x4d0e97 < _0x217894;
                    },
                    'PenmJ': function (_0x38d86a, _0x418258) {
                        return _0x38d86a === _0x418258;
                    },
                    'uFamz': function (_0x28199a, _0x309d48) {
                        return _0x28199a === _0x309d48;
                    },
                    'xCupK': function (_0x129a1e, _0x80953b) {
                        return _0x129a1e === _0x80953b;
                    },
                    'AcpOa': _0xbc7f9c(0x1d4)
                }, _0xe6131d = '1|6|5|4|3|2|0'[_0xbc7f9c(0x199)]('|'), _0x14fc1e = 0x4 * 0x829 + -0x448 + -0x1c5c;
            while (!![]) {
                switch (_0xe6131d[_0x14fc1e++]) {
                case '0':
                    return this;
                case '1':
                    _0x5f05db[_0xbc7f9c(0x1d5)](_0x581d72, undefined) && (_0x581d72 = 0x3bd * 0x9 + -0xde4 + -0x13c0);
                    continue;
                case '2':
                    for (var _0x2440c7 = 0xc51 + -0x18fa * -0x1 + -0x254b; _0x5f05db['onpAa'](_0x2440c7, _0x3274d3['length']); _0x2440c7++) {
                        var _0x3b15f6 = _0x3274d3[_0x2440c7];
                        if (_0x54769d && _0x5f05db[_0xbc7f9c(0x1d6)](_0x2440c7, _0x3fe2d5) || !_0x54769d && _0x5f05db['uFamz'](_0x3b15f6[_0xbc7f9c(0x1d7)], _0x3fe2d5)) {
                            this[_0xbc7f9c(0x1d8)](_0x3b15f6['i'], _0x3b15f6[_0xbc7f9c(0x1d7)][_0xbc7f9c(0x1d0)], _0x13f819, _0x5889a0, _0xb0764c, _0x6433e3, _0x853d04), _0x19af5c++;
                            if (_0x5f05db['xCupK'](_0x19af5c, _0x581d72))
                                return this;
                        }
                    }
                    continue;
                case '3':
                    var _0x19af5c = -0xbdb + -0xb07 + 0xca * 0x1d;
                    continue;
                case '4':
                    var _0x54769d = typeof _0x3fe2d5 === _0x5f05db['AcpOa'];
                    continue;
                case '5':
                    var _0x3274d3 = _0x1ad0c8['words'];
                    continue;
                case '6':
                    var _0x1ad0c8 = this['getTextBounds']();
                    continue;
                }
                break;
            }
        },
        'getTextBounds': function (_0x1efccf) {
            var _0x2d306a = _0x47db03, _0x1c9894 = {
                    'NrEnb': function (_0x4d1540, _0x317e84) {
                        return _0x4d1540 !== _0x317e84;
                    },
                    'IjpsU': function (_0x32f3b3, _0x151618, _0x3522c4, _0x24cf39, _0x1172fa) {
                        return _0x32f3b3(_0x151618, _0x3522c4, _0x24cf39, _0x1172fa);
                    }
                }, _0xfefe4f = this[_0x2d306a(0x1ad)];
            return (this[_0x2d306a(0x1b6)] || _0x1efccf || _0x1c9894[_0x2d306a(0x1d9)](this[_0x2d306a(0x1da)], _0xfefe4f[_0x2d306a(0x1da)]) || _0x1c9894[_0x2d306a(0x1d9)](this[_0x2d306a(0x1db)], _0xfefe4f[_0x2d306a(0x1db)])) && (_0x1c9894['IjpsU'](GetBitmapTextSize, this, _0x1efccf, !![], _0xfefe4f), this[_0x2d306a(0x1b6)] = ![]), _0xfefe4f;
        },
        'getCharacterAt': function (_0x5ee0fd, _0x1371b1, _0x4e02ab) {
            var _0x4231d3 = _0x47db03, _0x16ad89 = {
                    'kWJct': function (_0x3126ec, _0x519875) {
                        return _0x3126ec < _0x519875;
                    },
                    'VyuWe': function (_0x3ba674, _0x90238a) {
                        return _0x3ba674 - _0x90238a;
                    }
                }, _0x27a314 = this[_0x4231d3(0x1dc)](_0x5ee0fd, _0x1371b1, null, _0x4e02ab), _0x2ad7a9 = this[_0x4231d3(0x1dd)](), _0x5a1599 = _0x2ad7a9['characters'], _0x5340fd = new Rectangle();
            for (var _0x3427b1 = 0x2662 + 0x17 * -0x5d + -0x1 * 0x1e07; _0x16ad89[_0x4231d3(0x1de)](_0x3427b1, _0x5a1599[_0x4231d3(0x1d0)]); _0x3427b1++) {
                var _0x217be5 = _0x5a1599[_0x3427b1];
                _0x5340fd[_0x4231d3(0x1df)](_0x217be5['x'], _0x217be5['t'], _0x16ad89[_0x4231d3(0x1e0)](_0x217be5['r'], _0x217be5['x']), _0x217be5['b']);
                if (_0x5340fd[_0x4231d3(0x1e1)](_0x27a314['x'], _0x27a314['y']))
                    return _0x217be5;
            }
            return null;
        },
        'updateDisplayOrigin': function () {
            var _0x438b4f = _0x47db03;
            return this[_0x438b4f(0x1b6)] = !![], this['getTextBounds'](![]), this;
        },
        'setFont': function (_0x5b73c3, _0xd8605, _0x320f65) {
            var _0x2fb310 = _0x47db03, _0x3bdf83 = {
                    'nfXCT': function (_0x490fa5, _0x1844bc) {
                        return _0x490fa5 === _0x1844bc;
                    },
                    'ZeVPd': function (_0x3149e8, _0x52bf8e) {
                        return _0x3149e8 !== _0x52bf8e;
                    },
                    'RfHcJ': function (_0x2220c4, _0x2549d5, _0x3bbf7e, _0x1a1f35, _0x2e8712) {
                        return _0x2220c4(_0x2549d5, _0x3bbf7e, _0x1a1f35, _0x2e8712);
                    }
                };
            _0xd8605 === undefined && (_0xd8605 = this[_0x2fb310(0x1ab)]);
            _0x3bdf83[_0x2fb310(0x1e2)](_0x320f65, undefined) && (_0x320f65 = this[_0x2fb310(0x1ba)]);
            if (_0x3bdf83[_0x2fb310(0x1e3)](_0x5b73c3, this['font'])) {
                var _0x56c52f = this['scene']['sys']['cache'][_0x2fb310(0x1a1)][_0x2fb310(0x1a2)](_0x5b73c3);
                if (_0x56c52f) {
                    var _0x2739bb = _0x2fb310(0x1e4)[_0x2fb310(0x199)]('|'), _0x27cd68 = -0x5f8 + -0x1efc + -0x3b2 * -0xa;
                    while (!![]) {
                        switch (_0x2739bb[_0x27cd68++]) {
                        case '0':
                            this[_0x2fb310(0x1aa)] = _0x5b73c3;
                            continue;
                        case '1':
                            this[_0x2fb310(0x1a5)](_0x56c52f['texture'], _0x56c52f[_0x2fb310(0x1a7)]);
                            continue;
                        case '2':
                            this[_0x2fb310(0x1ab)] = _0xd8605;
                            continue;
                        case '3':
                            this['fontData'] = _0x56c52f[_0x2fb310(0x19c)];
                            continue;
                        case '4':
                            _0x3bdf83[_0x2fb310(0x1e5)](GetBitmapTextSize, this, ![], !![], this[_0x2fb310(0x1ad)]);
                            continue;
                        case '5':
                            this[_0x2fb310(0x1ba)] = _0x320f65;
                            continue;
                        case '6':
                            this['fromAtlas'] = _0x3bdf83[_0x2fb310(0x1e2)](_0x56c52f['fromAtlas'], !![]);
                            continue;
                        }
                        break;
                    }
                }
            }
            return this;
        },
        'setMaxWidth': function (_0x1cb672, _0x389061) {
            var _0x548f8a = _0x47db03, _0xff2d95 = {
                    'XslKb': function (_0x410737, _0x25cda5) {
                        return _0x410737 !== _0x25cda5;
                    }
                };
            return this[_0x548f8a(0x1a9)] = _0x1cb672, this[_0x548f8a(0x1b6)] = !![], _0xff2d95[_0x548f8a(0x1e6)](_0x389061, undefined) && (this['wordWrapCharCode'] = _0x389061), this;
        },
        'align': {
            'set': function (_0x3f0221) {
                var _0x1b731b = _0x47db03;
                this[_0x1b731b(0x1ba)] = _0x3f0221, this[_0x1b731b(0x1b6)] = !![];
            },
            'get': function () {
                var _0x759133 = _0x47db03;
                return this[_0x759133(0x1ba)];
            }
        },
        'text': {
            'set': function (_0x2d537e) {
                this['setText'](_0x2d537e);
            },
            'get': function () {
                var _0x180246 = _0x47db03;
                return this[_0x180246(0x1a4)];
            }
        },
        'fontSize': {
            'set': function (_0x341b95) {
                var _0x4dcc3e = _0x47db03;
                this[_0x4dcc3e(0x1ab)] = _0x341b95, this[_0x4dcc3e(0x1b6)] = !![];
            },
            'get': function () {
                return this['_fontSize'];
            }
        },
        'letterSpacing': {
            'set': function (_0x4f1c70) {
                var _0x5a0087 = _0x47db03;
                this[_0x5a0087(0x1b5)] = _0x4f1c70, this['_dirty'] = !![];
            },
            'get': function () {
                var _0x2539f3 = _0x47db03;
                return this[_0x2539f3(0x1b5)];
            }
        },
        'maxWidth': {
            'set': function (_0x4f5691) {
                var _0xb8689c = _0x47db03;
                this['_maxWidth'] = _0x4f5691, this[_0xb8689c(0x1b6)] = !![];
            },
            'get': function () {
                var _0x4e8ae2 = _0x47db03;
                return this[_0x4e8ae2(0x1a9)];
            }
        },
        'width': {
            'get': function () {
                var _0x2b0f44 = _0x47db03;
                return this[_0x2b0f44(0x1dd)](![]), this['_bounds'][_0x2b0f44(0x1e7)]['width'];
            }
        },
        'height': {
            'get': function () {
                var _0x136cce = _0x47db03;
                return this['getTextBounds'](![]), this[_0x136cce(0x1ad)][_0x136cce(0x1e7)][_0x136cce(0x1e8)];
            }
        },
        'toJSON': function () {
            var _0x1a31f9 = _0x47db03, _0x43d6df = Components[_0x1a31f9(0x1e9)](this), _0x19415c = {
                    'font': this[_0x1a31f9(0x1aa)],
                    'text': this[_0x1a31f9(0x1c0)],
                    'fontSize': this[_0x1a31f9(0x1ea)],
                    'letterSpacing': this[_0x1a31f9(0x1eb)],
                    'align': this[_0x1a31f9(0x1ec)]
                };
            return _0x43d6df[_0x1a31f9(0x19c)] = _0x19415c, _0x43d6df;
        },
        'preDestroy': function () {
            var _0x54e1ad = _0x47db03;
            this['charColors']['length'] = 0x1f4e + -0x1799 + -0x7b5, this[_0x54e1ad(0x1ad)] = null, this['fontData'] = null;
        }
    });
BitmapText[_0x47db03(0x1bb)] = -0x8 * 0x327 + -0x1858 + -0x2 * -0x18c8, BitmapText[_0x47db03(0x1bc)] = -0x1 * 0x1f0f + 0x1cd9 + -0x9 * -0x3f, BitmapText[_0x47db03(0x1bd)] = 0x1a50 + -0x1511 + -0x53d, BitmapText['ParseFromAtlas'] = ParseFromAtlas, BitmapText[_0x47db03(0x1ed)] = ParseXMLBitmapFont, module['exports'] = BitmapText;

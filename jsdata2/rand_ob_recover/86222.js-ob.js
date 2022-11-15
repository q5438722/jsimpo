var Class = require('../../../utils/Class'), Clamp = require(_0x47db03(395)), Components = require(_0x47db03(396)), GameObject = require(_0x47db03(397)), GetBitmapTextSize = require(_0x47db03(398)), ParseFromAtlas = require(_0x47db03(399)), ParseXMLBitmapFont = require(_0x47db03(400)), Rectangle = require(_0x47db03(401)), Render = require('./BitmapTextRender'), BitmapText = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components['Alpha'],
            Components['BlendMode'],
            Components[_0x47db03(402)],
            Components['Mask'],
            Components[_0x47db03(403)],
            Components[_0x47db03(404)],
            Components[_0x47db03(405)],
            Components['Texture'],
            Components['Tint'],
            Components['Transform'],
            Components[_0x47db03(406)],
            Render
        ],
        'initialize': function BitmapText(_0x2a3774, _0x1aef89, _0x4023b4, _0x3e1c37, _0x5ba27c, _0x361297, _0x5a3b9e) {
            var _0xf294ca = _0x47db03, _0x157333 = {
                    'bnWnh': _0xf294ca(407),
                    'Tybwt': function (_0x2836ca, _0x292ba1) {
                        return _0x2836ca === _0x292ba1;
                    },
                    'SoWbS': function (_0x56ba01) {
                        return _0x56ba01();
                    },
                    'znwcN': 'Invalid BitmapText key: ',
                    'Wcpdc': 'BitmapText'
                }, _0x3be855 = _0x157333[_0xf294ca(408)][_0xf294ca(409)]('|'), _0x46d58c = -9318 + 606 + 1 * 8712;
            while (!![]) {
                switch (_0x3be855[_0x46d58c++]) {
                case '0':
                    this[_0xf294ca(410)] = 9827 * 1 + -7 * -1225 + 1 * -18402;
                    continue;
                case '1':
                    this['initPipeline']();
                    continue;
                case '2':
                    this[_0xf294ca(411)] = _0x4cb79c[_0xf294ca(412)];
                    continue;
                case '3':
                    this[_0xf294ca(413)](1 * -1698 + 7840 + 74 * -83, 9269 + 2167 * -1 + -7102);
                    continue;
                case '4':
                    var _0x4cb79c = this[_0xf294ca(414)][_0xf294ca(415)][_0xf294ca(416)][_0xf294ca(417)][_0xf294ca(418)](_0x3e1c37);
                    continue;
                case '5':
                    _0x157333[_0xf294ca(419)](_0x5ba27c, undefined) && (_0x5ba27c = '');
                    continue;
                case '6':
                    this[_0xf294ca(420)] = '';
                    continue;
                case '7':
                    this[_0xf294ca(421)](_0x4cb79c[_0xf294ca(422)], _0x4cb79c[_0xf294ca(423)]);
                    continue;
                case '8':
                    this[_0xf294ca(424)] = _0x4cb79c[_0xf294ca(424)];
                    continue;
                case '9':
                    this[_0xf294ca(425)] = -20 * 155 + 1545 + 1555;
                    continue;
                case '10':
                    this[_0xf294ca(426)] = _0x3e1c37;
                    continue;
                case '11':
                    this[_0xf294ca(427)] = _0x361297 || this[_0xf294ca(411)][_0xf294ca(428)];
                    continue;
                case '12':
                    this[_0xf294ca(429)] = _0x157333[_0xf294ca(430)](GetBitmapTextSize);
                    continue;
                case '13':
                    this[_0xf294ca(431)] = 716 + -1019 + 303 + 0.5;
                    continue;
                case '14':
                    this['_align'] = _0x5a3b9e;
                    continue;
                case '15':
                    this[_0xf294ca(432)] = 1588 * 4 + 4176 + -10528;
                    continue;
                case '16':
                    !_0x4cb79c && console[_0xf294ca(433)](_0x157333[_0xf294ca(434)] + _0x3e1c37);
                    continue;
                case '17':
                    this[_0xf294ca(435)](_0x5ba27c);
                    continue;
                case '18':
                    this[_0xf294ca(436)] = [];
                    continue;
                case '19':
                    this[_0xf294ca(437)] = -6554 + -1 * 5732 + 12286;
                    continue;
                case '20':
                    this[_0xf294ca(438)] = !![];
                    continue;
                case '21':
                    this['setPosition'](_0x1aef89, _0x4023b4);
                    continue;
                case '22':
                    this[_0xf294ca(439)] = -1 * 6811 + -1 * 4219 + 5531 * 2;
                    continue;
                case '23':
                    _0x157333[_0xf294ca(419)](_0x5a3b9e, undefined) && (_0x5a3b9e = -2 * -2757 + -8963 + -3449 * -1);
                    continue;
                case '24':
                    this['dropShadowY'] = -1 * -4283 + 6058 + -10341;
                    continue;
                case '25':
                    GameObject[_0xf294ca(440)](this, _0x2a3774, _0x157333[_0xf294ca(441)]);
                    continue;
                }
                break;
            }
        },
        'setLeftAlign': function () {
            var _0x404972 = _0x47db03;
            return this[_0x404972(442)] = BitmapText[_0x404972(443)], this[_0x404972(438)] = !![], this;
        },
        'setCenterAlign': function () {
            var _0x214fdf = _0x47db03;
            return this[_0x214fdf(442)] = BitmapText[_0x214fdf(444)], this[_0x214fdf(438)] = !![], this;
        },
        'setRightAlign': function () {
            var _0x5a3535 = _0x47db03;
            return this['_align'] = BitmapText[_0x5a3535(445)], this[_0x5a3535(438)] = !![], this;
        },
        'setFontSize': function (_0x4b700a) {
            var _0x5a8c29 = _0x47db03;
            return this[_0x5a8c29(427)] = _0x4b700a, this[_0x5a8c29(438)] = !![], this;
        },
        'setLetterSpacing': function (_0x1fe46d) {
            var _0x5cc65a = _0x47db03, _0x420906 = {
                    'LTtVM': function (_0xa96a49, _0x151c63) {
                        return _0xa96a49 === _0x151c63;
                    }
                };
            return _0x420906['LTtVM'](_0x1fe46d, undefined) && (_0x1fe46d = -38 * 47 + -204 + -199 * -10), this[_0x5cc65a(437)] = _0x1fe46d, this['_dirty'] = !![], this;
        },
        'setText': function (_0x496237) {
            var _0x590fac = _0x47db03, _0x4ff468 = {
                    'ThUjF': function (_0x515c38, _0x410ce1) {
                        return _0x515c38 !== _0x410ce1;
                    }
                };
            return !_0x496237 && _0x4ff468[_0x590fac(446)](_0x496237, 525 * 4 + -1 * -7507 + -739 * 13) && (_0x496237 = ''), Array[_0x590fac(447)](_0x496237) && (_0x496237 = _0x496237['join']('\n')), _0x4ff468['ThUjF'](_0x496237, this[_0x590fac(448)]) && (this[_0x590fac(420)] = _0x496237[_0x590fac(449)](), this['_dirty'] = !![], this[_0x590fac(450)]()), this;
        },
        'setDropShadow': function (_0x4beb74, _0xe4d6e6, _0x5a16cb, _0x38f48d) {
            var _0x418210 = _0x47db03, _0x47a1cb = {
                    'vdPzG': function (_0x46c025, _0x356b56) {
                        return _0x46c025 === _0x356b56;
                    }
                };
            return _0x47a1cb[_0x418210(451)](_0x4beb74, undefined) && (_0x4beb74 = 5824 + 7242 + 94 * -139), _0xe4d6e6 === undefined && (_0xe4d6e6 = 1816 + 51 * -70 + -1 * -1754), _0x47a1cb[_0x418210(451)](_0x5a16cb, undefined) && (_0x5a16cb = -4771 * 2 + -3 * 1413 + -1 * -13781), _0x38f48d === undefined && (_0x38f48d = 5152 + -1711 + 3441 * -1 + 0.5), this[_0x418210(410)] = _0x4beb74, this['dropShadowY'] = _0xe4d6e6, this['dropShadowColor'] = _0x5a16cb, this[_0x418210(431)] = _0x38f48d, this;
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
                    'HxddR': _0x37e12b(452),
                    'NPcWk': function (_0x4612bb, _0x412907) {
                        return _0x4612bb < _0x412907;
                    },
                    'BDjMn': function (_0x3740ed, _0x5b1bc6) {
                        return _0x3740ed + _0x5b1bc6;
                    },
                    'HycQg': function (_0x2e43db, _0x471500) {
                        return _0x2e43db === _0x471500;
                    }
                }, _0x3e5719 = _0x37e12b(453)[_0x37e12b(409)]('|'), _0x34b8f0 = -1 * -9463 + 57 * 19 + -5273 * 2;
            while (!![]) {
                switch (_0x3e5719[_0x34b8f0++]) {
                case '0':
                    _0x5c3260 = _0x548580[_0x37e12b(454)](Clamp, _0x5c3260, 7951 + 8955 + -16906, _0x548580['TSDIP'](_0x305ba1, -7607 * 1 + -10 * -53 + 7078));
                    continue;
                case '1':
                    _0x548580[_0x37e12b(455)](_0x1d7bc8, undefined) && (_0x1d7bc8 = _0x29826b, _0x4e4888 = _0x29826b, _0x4d9af0 = _0x29826b);
                    continue;
                case '2':
                    _0x548580[_0x37e12b(456)](_0x4a9133, undefined) && (_0x4a9133 = -3386 * -2 + 6050 + -12821);
                    continue;
                case '3':
                    return this;
                case '4':
                    for (var _0xeb6d71 = _0x5c3260; _0x548580[_0x37e12b(457)](_0xeb6d71, _0xdda0ba); _0xeb6d71++) {
                        var _0x1544e8 = _0x82e26e[_0xeb6d71];
                        if (_0x548580[_0x37e12b(458)](_0x29826b, -(-627 * -4 + 911 * -4 + 1137)))
                            _0x82e26e[_0xeb6d71] = null;
                        else {
                            var _0x25bd6c = _0x5c1c25 ? -85 + -5540 + 5626 : -314 * 4 + -1 * -7653 + -6397;
                            if (_0x1544e8) {
                                var _0xbd2186 = _0x548580[_0x37e12b(459)][_0x37e12b(409)]('|'), _0x3362e = 5248 + -2 * -2149 + 9546 * -1;
                                while (!![]) {
                                    switch (_0xbd2186[_0x3362e++]) {
                                    case '0':
                                        _0x1544e8[_0x37e12b(460)] = _0x4e4888;
                                        continue;
                                    case '1':
                                        _0x1544e8[_0x37e12b(461)] = _0x4d9af0;
                                        continue;
                                    case '2':
                                        _0x1544e8['tintEffect'] = _0x25bd6c;
                                        continue;
                                    case '3':
                                        _0x1544e8[_0x37e12b(462)] = _0x1d7bc8;
                                        continue;
                                    case '4':
                                        _0x1544e8[_0x37e12b(463)] = _0x29826b;
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
                    _0x548580['wNuGM'](_0x5c3260, undefined) && (_0x5c3260 = 1324 * 7 + 6348 + -2 * 7808);
                    continue;
                case '6':
                    _0x5c1c25 === undefined && (_0x5c1c25 = ![]);
                    continue;
                case '7':
                    var _0x305ba1 = this[_0x37e12b(448)][_0x37e12b(464)];
                    continue;
                case '8':
                    var _0xdda0ba = _0x548580[_0x37e12b(454)](Clamp, _0x5c3260 + _0x4a9133, _0x5c3260, _0x305ba1);
                    continue;
                case '9':
                    var _0x82e26e = this[_0x37e12b(436)];
                    continue;
                case '10':
                    _0x548580[_0x37e12b(465)](_0x5c3260, 6386 + -8138 + 1752) && (_0x5c3260 = _0x548580[_0x37e12b(466)](_0x305ba1, _0x5c3260));
                    continue;
                case '11':
                    _0x548580[_0x37e12b(467)](_0x4a9133, -(-2433 + -898 * -7 + -3852)) && (_0x4a9133 = _0x305ba1);
                    continue;
                case '12':
                    _0x29826b === undefined && (_0x29826b = -(1 * 24 + -8978 + 8955));
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
                    'AcpOa': _0xbc7f9c(468)
                }, _0xe6131d = '1|6|5|4|3|2|0'[_0xbc7f9c(409)]('|'), _0x14fc1e = 4 * 2089 + -1096 + -7260;
            while (!![]) {
                switch (_0xe6131d[_0x14fc1e++]) {
                case '0':
                    return this;
                case '1':
                    _0x5f05db[_0xbc7f9c(469)](_0x581d72, undefined) && (_0x581d72 = 957 * 9 + -3556 + -5056);
                    continue;
                case '2':
                    for (var _0x2440c7 = 3153 + -6394 * -1 + -9547; _0x5f05db['onpAa'](_0x2440c7, _0x3274d3['length']); _0x2440c7++) {
                        var _0x3b15f6 = _0x3274d3[_0x2440c7];
                        if (_0x54769d && _0x5f05db[_0xbc7f9c(470)](_0x2440c7, _0x3fe2d5) || !_0x54769d && _0x5f05db['uFamz'](_0x3b15f6[_0xbc7f9c(471)], _0x3fe2d5)) {
                            this[_0xbc7f9c(472)](_0x3b15f6['i'], _0x3b15f6[_0xbc7f9c(471)][_0xbc7f9c(464)], _0x13f819, _0x5889a0, _0xb0764c, _0x6433e3, _0x853d04), _0x19af5c++;
                            if (_0x5f05db['xCupK'](_0x19af5c, _0x581d72))
                                return this;
                        }
                    }
                    continue;
                case '3':
                    var _0x19af5c = -3035 + -2823 + 202 * 29;
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
                }, _0xfefe4f = this[_0x2d306a(429)];
            return (this[_0x2d306a(438)] || _0x1efccf || _0x1c9894[_0x2d306a(473)](this[_0x2d306a(474)], _0xfefe4f[_0x2d306a(474)]) || _0x1c9894[_0x2d306a(473)](this[_0x2d306a(475)], _0xfefe4f[_0x2d306a(475)])) && (_0x1c9894['IjpsU'](GetBitmapTextSize, this, _0x1efccf, !![], _0xfefe4f), this[_0x2d306a(438)] = ![]), _0xfefe4f;
        },
        'getCharacterAt': function (_0x5ee0fd, _0x1371b1, _0x4e02ab) {
            var _0x4231d3 = _0x47db03, _0x16ad89 = {
                    'kWJct': function (_0x3126ec, _0x519875) {
                        return _0x3126ec < _0x519875;
                    },
                    'VyuWe': function (_0x3ba674, _0x90238a) {
                        return _0x3ba674 - _0x90238a;
                    }
                }, _0x27a314 = this[_0x4231d3(476)](_0x5ee0fd, _0x1371b1, null, _0x4e02ab), _0x2ad7a9 = this[_0x4231d3(477)](), _0x5a1599 = _0x2ad7a9['characters'], _0x5340fd = new Rectangle();
            for (var _0x3427b1 = 9826 + 23 * -93 + -1 * 7687; _0x16ad89[_0x4231d3(478)](_0x3427b1, _0x5a1599[_0x4231d3(464)]); _0x3427b1++) {
                var _0x217be5 = _0x5a1599[_0x3427b1];
                _0x5340fd[_0x4231d3(479)](_0x217be5['x'], _0x217be5['t'], _0x16ad89[_0x4231d3(480)](_0x217be5['r'], _0x217be5['x']), _0x217be5['b']);
                if (_0x5340fd[_0x4231d3(481)](_0x27a314['x'], _0x27a314['y']))
                    return _0x217be5;
            }
            return null;
        },
        'updateDisplayOrigin': function () {
            var _0x438b4f = _0x47db03;
            return this[_0x438b4f(438)] = !![], this['getTextBounds'](![]), this;
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
            _0xd8605 === undefined && (_0xd8605 = this[_0x2fb310(427)]);
            _0x3bdf83[_0x2fb310(482)](_0x320f65, undefined) && (_0x320f65 = this[_0x2fb310(442)]);
            if (_0x3bdf83[_0x2fb310(483)](_0x5b73c3, this['font'])) {
                var _0x56c52f = this['scene']['sys']['cache'][_0x2fb310(417)][_0x2fb310(418)](_0x5b73c3);
                if (_0x56c52f) {
                    var _0x2739bb = _0x2fb310(484)[_0x2fb310(409)]('|'), _0x27cd68 = -1528 + -7932 + -946 * -10;
                    while (!![]) {
                        switch (_0x2739bb[_0x27cd68++]) {
                        case '0':
                            this[_0x2fb310(426)] = _0x5b73c3;
                            continue;
                        case '1':
                            this[_0x2fb310(421)](_0x56c52f['texture'], _0x56c52f[_0x2fb310(423)]);
                            continue;
                        case '2':
                            this[_0x2fb310(427)] = _0xd8605;
                            continue;
                        case '3':
                            this['fontData'] = _0x56c52f[_0x2fb310(412)];
                            continue;
                        case '4':
                            _0x3bdf83[_0x2fb310(485)](GetBitmapTextSize, this, ![], !![], this[_0x2fb310(429)]);
                            continue;
                        case '5':
                            this[_0x2fb310(442)] = _0x320f65;
                            continue;
                        case '6':
                            this['fromAtlas'] = _0x3bdf83[_0x2fb310(482)](_0x56c52f['fromAtlas'], !![]);
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
            return this[_0x548f8a(425)] = _0x1cb672, this[_0x548f8a(438)] = !![], _0xff2d95[_0x548f8a(486)](_0x389061, undefined) && (this['wordWrapCharCode'] = _0x389061), this;
        },
        'align': {
            'set': function (_0x3f0221) {
                var _0x1b731b = _0x47db03;
                this[_0x1b731b(442)] = _0x3f0221, this[_0x1b731b(438)] = !![];
            },
            'get': function () {
                var _0x759133 = _0x47db03;
                return this[_0x759133(442)];
            }
        },
        'text': {
            'set': function (_0x2d537e) {
                this['setText'](_0x2d537e);
            },
            'get': function () {
                var _0x180246 = _0x47db03;
                return this[_0x180246(420)];
            }
        },
        'fontSize': {
            'set': function (_0x341b95) {
                var _0x4dcc3e = _0x47db03;
                this[_0x4dcc3e(427)] = _0x341b95, this[_0x4dcc3e(438)] = !![];
            },
            'get': function () {
                return this['_fontSize'];
            }
        },
        'letterSpacing': {
            'set': function (_0x4f1c70) {
                var _0x5a0087 = _0x47db03;
                this[_0x5a0087(437)] = _0x4f1c70, this['_dirty'] = !![];
            },
            'get': function () {
                var _0x2539f3 = _0x47db03;
                return this[_0x2539f3(437)];
            }
        },
        'maxWidth': {
            'set': function (_0x4f5691) {
                var _0xb8689c = _0x47db03;
                this['_maxWidth'] = _0x4f5691, this[_0xb8689c(438)] = !![];
            },
            'get': function () {
                var _0x4e8ae2 = _0x47db03;
                return this[_0x4e8ae2(425)];
            }
        },
        'width': {
            'get': function () {
                var _0x2b0f44 = _0x47db03;
                return this[_0x2b0f44(477)](![]), this['_bounds'][_0x2b0f44(487)]['width'];
            }
        },
        'height': {
            'get': function () {
                var _0x136cce = _0x47db03;
                return this['getTextBounds'](![]), this[_0x136cce(429)][_0x136cce(487)][_0x136cce(488)];
            }
        },
        'toJSON': function () {
            var _0x1a31f9 = _0x47db03, _0x43d6df = Components[_0x1a31f9(489)](this), _0x19415c = {
                    'font': this[_0x1a31f9(426)],
                    'text': this[_0x1a31f9(448)],
                    'fontSize': this[_0x1a31f9(490)],
                    'letterSpacing': this[_0x1a31f9(491)],
                    'align': this[_0x1a31f9(492)]
                };
            return _0x43d6df[_0x1a31f9(412)] = _0x19415c, _0x43d6df;
        },
        'preDestroy': function () {
            var _0x54e1ad = _0x47db03;
            this['charColors']['length'] = 8014 + -6041 + -1973, this[_0x54e1ad(429)] = null, this['fontData'] = null;
        }
    });
BitmapText[_0x47db03(443)] = -8 * 807 + -6232 + -2 * -6344, BitmapText[_0x47db03(444)] = -1 * 7951 + 7385 + -9 * -63, BitmapText[_0x47db03(445)] = 6736 + -5393 + -1341, BitmapText['ParseFromAtlas'] = ParseFromAtlas, BitmapText[_0x47db03(493)] = ParseXMLBitmapFont, module['exports'] = BitmapText;
var AddToDOM = require('../../dom/AddToDOM'), CanvasPool = require(_0x26e505(424)), Class = require(_0x26e505(425)), Components = require(_0x26e505(426)), GameEvents = require(_0x26e505(427)), GameObject = require('../GameObject'), GetTextSize = require(_0x26e505(428)), GetValue = require(_0x26e505(429)), RemoveFromDOM = require(_0x26e505(430)), TextRender = require('./TextRender'), TextStyle = require('./TextStyle'), Text = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components[_0x26e505(431)],
            Components['BlendMode'],
            Components[_0x26e505(432)],
            Components[_0x26e505(433)],
            Components[_0x26e505(434)],
            Components['Flip'],
            Components[_0x26e505(435)],
            Components[_0x26e505(436)],
            Components[_0x26e505(437)],
            Components['Pipeline'],
            Components[_0x26e505(438)],
            Components[_0x26e505(439)],
            Components[_0x26e505(440)],
            Components[_0x26e505(441)],
            TextRender
        ],
        'initialize': function Text(_0x588117, _0x2e98d2, _0x5a0b35, _0x368b74, _0x585d0a) {
            var _0x6960b9 = _0x26e505, _0x3cb7c6 = {
                    'LQzIg': _0x6960b9(442),
                    'TjXXB': function (_0xbc74c7, _0x574a69) {
                        return _0xbc74c7 === _0x574a69;
                    },
                    'yAVvP': 'Text'
                }, _0x47776a = _0x3cb7c6['LQzIg'][_0x6960b9(443)]('|'), _0x3815a8 = 1 * -229 + -3 * -3177 + -2 * 4651;
            while (!![]) {
                switch (_0x47776a[_0x3815a8++]) {
                case '0':
                    _0x3cb7c6['TjXXB'](_0x5a0b35, undefined) && (_0x5a0b35 = 5700 + -27 * -177 + -10479);
                    continue;
                case '1':
                    GameObject[_0x6960b9(444)](this, _0x588117, _0x3cb7c6['yAVvP']);
                    continue;
                case '2':
                    this[_0x6960b9(445)](-2809 * 1 + -3575 + 6384, -8 * -1189 + -2 * -3862 + -17236);
                    continue;
                case '3':
                    _0x3cb7c6[_0x6960b9(446)](_0x2e98d2, undefined) && (_0x2e98d2 = -222 + 305 + -83);
                    continue;
                case '4':
                    this[_0x6960b9(447)] = !![];
                    continue;
                case '5':
                    this[_0x6960b9(448)] = -2236 * 1 + 1 * 4286 + -2050;
                    continue;
                case '6':
                    this[_0x6960b9(449)] = 3714 + -6299 + 2586;
                    continue;
                case '7':
                    this['frame'] = this[_0x6960b9(450)]['get']();
                    continue;
                case '8':
                    this[_0x6960b9(451)] = CanvasPool['create'](this);
                    continue;
                case '9':
                    this['initPipeline']();
                    continue;
                case '10':
                    this[_0x6960b9(452)] = ![];
                    continue;
                case '11':
                    this[_0x6960b9(453)] = {
                        'left': 0,
                        'right': 0,
                        'top': 0,
                        'bottom': 0
                    };
                    continue;
                case '12':
                    _0x588117[_0x6960b9(454)][_0x6960b9(455)][_0x6960b9(456)]['on'](GameEvents[_0x6960b9(457)], function () {
                        var _0x31083f = _0x6960b9;
                        this[_0x31083f(452)] = !![];
                    }, this);
                    continue;
                case '13':
                    this[_0x6960b9(458)] && this[_0x6960b9(458)]['gl'] && (this[_0x6960b9(458)][_0x6960b9(459)](this[_0x6960b9(460)][_0x6960b9(461)][_0x6960b9(462)]), this['frame']['source'][_0x6960b9(462)] = null);
                    continue;
                case '14':
                    this['initRTL']();
                    continue;
                case '15':
                    _0x3cb7c6[_0x6960b9(446)](this[_0x6960b9(463)][_0x6960b9(464)], -5238 + 4860 + 378) && (this[_0x6960b9(463)][_0x6960b9(464)] = 9323 * -1 + 6 * -822 + -264 * -54);
                    continue;
                case '16':
                    _0x585d0a && _0x585d0a[_0x6960b9(448)] && this[_0x6960b9(465)](_0x585d0a[_0x6960b9(448)]);
                    continue;
                case '17':
                    this['setPosition'](_0x2e98d2, _0x5a0b35);
                    continue;
                case '18':
                    this['texture'] = _0x588117[_0x6960b9(454)]['textures']['addCanvas'](null, this[_0x6960b9(451)], !![]);
                    continue;
                case '19':
                    this['frame']['source'][_0x6960b9(464)] = this[_0x6960b9(463)][_0x6960b9(464)];
                    continue;
                case '20':
                    this['splitRegExp'] = /(?:\r\n|\r|\n)/;
                    continue;
                case '21':
                    this[_0x6960b9(466)] = 1 * -844 + -629 * 2 + 2103;
                    continue;
                case '22':
                    this['style'] = new TextStyle(this, _0x585d0a);
                    continue;
                case '23':
                    this[_0x6960b9(467)] = this[_0x6960b9(468)]();
                    continue;
                case '24':
                    this[_0x6960b9(469)](_0x368b74);
                    continue;
                case '25':
                    this[_0x6960b9(470)] = this['canvas'][_0x6960b9(471)]('2d');
                    continue;
                case '26':
                    this[_0x6960b9(458)] = _0x588117[_0x6960b9(454)][_0x6960b9(458)];
                    continue;
                case '27':
                    _0x585d0a && _0x585d0a[_0x6960b9(453)] && this[_0x6960b9(472)](_0x585d0a[_0x6960b9(453)]);
                    continue;
                case '28':
                    this['_text'] = undefined;
                    continue;
                }
                break;
            }
        },
        'initRTL': function () {
            var _0x36a128 = _0x26e505, _0x4a9ad7 = {
                    'uJTSU': _0x36a128(473),
                    'zxBGJ': _0x36a128(474),
                    'Ucqbm': function (_0x1dd6c0, _0x39d873, _0x4ba949) {
                        return _0x1dd6c0(_0x39d873, _0x4ba949);
                    },
                    'SlejU': _0x36a128(475)
                }, _0x5afc67 = _0x4a9ad7['uJTSU'][_0x36a128(443)]('|'), _0x361162 = 1 * 6527 + -1072 * -8 + -15103;
            while (!![]) {
                switch (_0x5afc67[_0x361162++]) {
                case '0':
                    if (!this['style'][_0x36a128(475)])
                        return;
                    continue;
                case '1':
                    this[_0x36a128(451)][_0x36a128(463)][_0x36a128(476)] = _0x4a9ad7[_0x36a128(477)];
                    continue;
                case '2':
                    this['canvas']['dir'] = _0x36a128(475);
                    continue;
                case '3':
                    _0x4a9ad7['Ucqbm'](AddToDOM, this[_0x36a128(451)], this[_0x36a128(478)]['sys'][_0x36a128(451)]);
                    continue;
                case '4':
                    this[_0x36a128(470)]['direction'] = _0x4a9ad7[_0x36a128(479)];
                    continue;
                case '5':
                    this[_0x36a128(480)] = 1 * -3989 + 1 * 6218 + -2228;
                    continue;
                }
                break;
            }
        },
        'runWordWrap': function (_0x59038d) {
            var _0x2901f6 = _0x26e505, _0x147ca6 = this[_0x2901f6(463)];
            if (_0x147ca6[_0x2901f6(481)]) {
                var _0x34084b = _0x147ca6['wordWrapCallback'][_0x2901f6(444)](_0x147ca6[_0x2901f6(482)], _0x59038d, this);
                return Array[_0x2901f6(483)](_0x34084b) && (_0x34084b = _0x34084b[_0x2901f6(484)]('\n')), _0x34084b;
            } else
                return _0x147ca6[_0x2901f6(485)] ? _0x147ca6[_0x2901f6(486)] ? this[_0x2901f6(487)](_0x59038d, this[_0x2901f6(470)], this['style'][_0x2901f6(485)]) : this[_0x2901f6(488)](_0x59038d, this['context'], this['style'][_0x2901f6(485)]) : _0x59038d;
        },
        'advancedWordWrap': function (_0x30f0ba, _0x5ea1e8, _0x444b73) {
            var _0x1bc773 = _0x26e505, _0xf9024b = {
                    'mqVBw': function (_0xbb3ce3, _0x28cc39) {
                        return _0xbb3ce3 < _0x28cc39;
                    },
                    'IqITZ': function (_0x23ee35, _0x525d70) {
                        return _0x23ee35 + _0x525d70;
                    },
                    'TiqMd': function (_0x268d6f, _0xd71ec2) {
                        return _0x268d6f > _0xd71ec2;
                    },
                    'VUkdr': _0x1bc773(489),
                    'PHaSr': function (_0x469aa1, _0x5a6e22) {
                        return _0x469aa1 + _0x5a6e22;
                    },
                    'otyBM': function (_0x1cb7b6, _0x1dc304) {
                        return _0x1cb7b6 + _0x1dc304;
                    },
                    'VPGpP': function (_0x1042a2, _0x2c46bd) {
                        return _0x1042a2 + _0x2c46bd;
                    }
                }, _0x15715f = '', _0x52f574 = _0x30f0ba['replace'](/ +/gi, ' ')['split'](this['splitRegExp']), _0x463d6b = _0x52f574[_0x1bc773(490)];
            for (var _0x1032f0 = -8096 + -36 * 23 + -23 * -388; _0xf9024b['mqVBw'](_0x1032f0, _0x463d6b); _0x1032f0++) {
                var _0x3ea9eb = _0x52f574[_0x1032f0], _0x86f0e = '';
                _0x3ea9eb = _0x3ea9eb[_0x1bc773(491)](/^ *|\s*$/gi, '');
                var _0x2b8161 = _0x5ea1e8[_0x1bc773(492)](_0x3ea9eb)[_0x1bc773(449)];
                if (_0xf9024b[_0x1bc773(493)](_0x2b8161, _0x444b73)) {
                    _0x15715f += _0xf9024b[_0x1bc773(494)](_0x3ea9eb, '\n');
                    continue;
                }
                var _0x156985 = _0x444b73, _0x3775cc = _0x3ea9eb[_0x1bc773(443)](' ');
                for (var _0x110b22 = -139 * -23 + 4618 + 15 * -521; _0xf9024b[_0x1bc773(493)](_0x110b22, _0x3775cc[_0x1bc773(490)]); _0x110b22++) {
                    var _0x3efa9b = _0x3775cc[_0x110b22], _0x23bd0d = _0xf9024b['IqITZ'](_0x3efa9b, ' '), _0x26f8af = _0x5ea1e8[_0x1bc773(492)](_0x23bd0d)['width'];
                    if (_0xf9024b[_0x1bc773(495)](_0x26f8af, _0x156985)) {
                        if (_0x110b22 === -585 * 11 + -11 * -907 + -7 * 506) {
                            var _0x34e34d = _0x1bc773(496)[_0x1bc773(443)]('|'), _0xc443f4 = 5607 + 1213 + -6820;
                            while (!![]) {
                                switch (_0x34e34d[_0xc443f4++]) {
                                case '0':
                                    while (_0x2b843b['length']) {
                                        _0x2b843b = _0x2b843b[_0x1bc773(497)](1654 + 8817 + -10471, -(1139 * -3 + -5766 + 9184)), _0x26f8af = _0x5ea1e8[_0x1bc773(492)](_0x2b843b)['width'];
                                        if (_0x26f8af <= _0x156985)
                                            break;
                                    }
                                    continue;
                                case '1':
                                    if (!_0x2b843b[_0x1bc773(490)])
                                        throw new Error(_0xf9024b[_0x1bc773(498)]);
                                    continue;
                                case '2':
                                    var _0x2b843b = _0x23bd0d;
                                    continue;
                                case '3':
                                    var _0x2e94b0 = _0x3efa9b['substr'](_0x2b843b[_0x1bc773(490)]);
                                    continue;
                                case '4':
                                    _0x86f0e += _0x2b843b;
                                    continue;
                                case '5':
                                    _0x3775cc[_0x110b22] = _0x2e94b0;
                                    continue;
                                }
                                break;
                            }
                        }
                        var _0x55f00c = _0x3775cc[_0x110b22][_0x1bc773(490)] ? _0x110b22 : _0xf9024b['PHaSr'](_0x110b22, -3236 + 1732 * 2 + -227), _0x3e876b = _0x3775cc[_0x1bc773(497)](_0x55f00c)[_0x1bc773(484)](' ')[_0x1bc773(491)](/[ \n]*$/gi, '');
                        _0x52f574[_0xf9024b['PHaSr'](_0x1032f0, 7091 * 1 + 4 * 487 + 2 * -4519)] = _0xf9024b[_0x1bc773(499)](_0xf9024b[_0x1bc773(499)](_0x3e876b, ' '), _0x52f574[_0xf9024b[_0x1bc773(500)](_0x1032f0, 4087 + -3089 + -1 * 997)] || ''), _0x463d6b = _0x52f574[_0x1bc773(490)];
                        break;
                    } else
                        _0x86f0e += _0x23bd0d, _0x156985 -= _0x26f8af;
                }
                _0x15715f += _0xf9024b['VPGpP'](_0x86f0e[_0x1bc773(491)](/[ \n]*$/gi, ''), '\n');
            }
            return _0x15715f = _0x15715f['replace'](/[\s|\n]*$/gi, ''), _0x15715f;
        },
        'basicWordWrap': function (_0x1ef3af, _0x38d20b, _0x174e9c) {
            var _0x27f363 = _0x26e505, _0xe4611e = {
                    'Gvuor': function (_0x49d0a9, _0xf82fc2) {
                        return _0x49d0a9 - _0xf82fc2;
                    },
                    'jpvTv': function (_0x386074, _0x5e2991) {
                        return _0x386074 <= _0x5e2991;
                    },
                    'IfOss': _0x27f363(501),
                    'iNqIv': function (_0x2e24f9, _0x44faa5) {
                        return _0x2e24f9 < _0x44faa5;
                    },
                    'qftIj': function (_0x2ba9fc, _0x41a335) {
                        return _0x2ba9fc <= _0x41a335;
                    },
                    'lbqvH': function (_0x272080, _0x759608) {
                        return _0x272080 > _0x759608;
                    },
                    'rnvhG': function (_0x596b2d, _0x1b19dd) {
                        return _0x596b2d > _0x1b19dd;
                    }
                }, _0x4ce794 = '', _0x422d0b = _0x1ef3af[_0x27f363(443)](this[_0x27f363(502)]), _0x13946e = _0xe4611e[_0x27f363(503)](_0x422d0b[_0x27f363(490)], 2695 * 3 + -5386 + -2698), _0x578863 = _0x38d20b[_0x27f363(492)](' ')[_0x27f363(449)];
            for (var _0x3f27b4 = 1 * -5219 + 1463 * -1 + 6682; _0xe4611e[_0x27f363(504)](_0x3f27b4, _0x13946e); _0x3f27b4++) {
                var _0xa510e2 = _0xe4611e[_0x27f363(505)][_0x27f363(443)]('|'), _0x1ee9ca = -2644 * -2 + 5271 + -10559 * 1;
                while (!![]) {
                    switch (_0xa510e2[_0x1ee9ca++]) {
                    case '0':
                        _0xe4611e[_0x27f363(506)](_0x3f27b4, _0x13946e) && (_0x4ce794 += '\n');
                        continue;
                    case '1':
                        var _0x4fb2e8 = _0x174e9c;
                        continue;
                    case '2':
                        for (var _0x4c333f = -2504 * 3 + -1 * 4235 + 11747; _0xe4611e[_0x27f363(507)](_0x4c333f, _0x223b3b); _0x4c333f++) {
                            var _0x3e64c4 = _0x13ceb7[_0x4c333f], _0x303bc3 = _0x38d20b[_0x27f363(492)](_0x3e64c4)['width'], _0x1f1cdf = _0x303bc3;
                            _0x4c333f < _0x223b3b && (_0x1f1cdf += _0x578863), _0xe4611e[_0x27f363(508)](_0x1f1cdf, _0x4fb2e8) && (_0xe4611e[_0x27f363(509)](_0x4c333f, 8570 + -8633 + 63) && (_0x4ce794 += '\n', _0x4fb2e8 = _0x174e9c)), _0x4ce794 += _0x3e64c4, _0xe4611e[_0x27f363(506)](_0x4c333f, _0x223b3b) ? (_0x4ce794 += ' ', _0x4fb2e8 -= _0x1f1cdf) : _0x4fb2e8 -= _0x303bc3;
                        }
                        continue;
                    case '3':
                        var _0x223b3b = _0x13ceb7[_0x27f363(490)] - (-5674 + 6747 * -1 + 12422);
                        continue;
                    case '4':
                        var _0x13ceb7 = _0x422d0b[_0x3f27b4][_0x27f363(443)](' ');
                        continue;
                    }
                    break;
                }
            }
            return _0x4ce794;
        },
        'getWrappedText': function (_0x286be9) {
            var _0x3e482c = _0x26e505, _0x27beca = {
                    'ubFpn': function (_0x44d6ff, _0xc16613) {
                        return _0x44d6ff === _0xc16613;
                    }
                };
            _0x27beca[_0x3e482c(510)](_0x286be9, undefined) && (_0x286be9 = this[_0x3e482c(511)]);
            this['style'][_0x3e482c(512)](this['canvas'], this[_0x3e482c(470)]);
            var _0x578b91 = this['runWordWrap'](_0x286be9);
            return _0x578b91['split'](this[_0x3e482c(502)]);
        },
        'setText': function (_0x504f2b) {
            var _0xc29971 = _0x26e505, _0x155e66 = {
                    'wmVKL': function (_0x36ba2a, _0x3a8e5a) {
                        return _0x36ba2a !== _0x3a8e5a;
                    },
                    'jUTkc': function (_0x1071e3, _0x109127) {
                        return _0x1071e3 !== _0x109127;
                    }
                };
            return !_0x504f2b && _0x155e66[_0xc29971(513)](_0x504f2b, 1250 + 1 * -1915 + -5 * -133) && (_0x504f2b = ''), Array[_0xc29971(483)](_0x504f2b) && (_0x504f2b = _0x504f2b['join']('\n')), _0x155e66['jUTkc'](_0x504f2b, this[_0xc29971(511)]) && (this[_0xc29971(511)] = _0x504f2b[_0xc29971(514)](), this[_0xc29971(515)]()), this;
        },
        'setStyle': function (_0x5636d5) {
            var _0x354794 = _0x26e505;
            return this['style'][_0x354794(516)](_0x5636d5);
        },
        'setFont': function (_0x4907e8) {
            var _0x24bb0f = _0x26e505;
            return this[_0x24bb0f(463)][_0x24bb0f(517)](_0x4907e8);
        },
        'setFontFamily': function (_0x349657) {
            var _0xb676a = _0x26e505;
            return this[_0xb676a(463)][_0xb676a(518)](_0x349657);
        },
        'setFontSize': function (_0x2fedea) {
            var _0x149e96 = _0x26e505;
            return this['style'][_0x149e96(519)](_0x2fedea);
        },
        'setFontStyle': function (_0x41ef2a) {
            var _0x24c4cd = _0x26e505;
            return this[_0x24c4cd(463)][_0x24c4cd(520)](_0x41ef2a);
        },
        'setFixedSize': function (_0x32b2ee, _0x159d95) {
            var _0x3f44ed = _0x26e505;
            return this[_0x3f44ed(463)][_0x3f44ed(521)](_0x32b2ee, _0x159d95);
        },
        'setBackgroundColor': function (_0x10f138) {
            var _0x16cd83 = _0x26e505;
            return this[_0x16cd83(463)][_0x16cd83(522)](_0x10f138);
        },
        'setFill': function (_0x5af00d) {
            var _0x3807a4 = _0x26e505;
            return this[_0x3807a4(463)]['setFill'](_0x5af00d);
        },
        'setColor': function (_0x52e74b) {
            var _0x96cda7 = _0x26e505;
            return this[_0x96cda7(463)][_0x96cda7(523)](_0x52e74b);
        },
        'setStroke': function (_0x2dd372, _0x3deaf1) {
            var _0x3606e3 = _0x26e505;
            return this[_0x3606e3(463)][_0x3606e3(524)](_0x2dd372, _0x3deaf1);
        },
        'setShadow': function (_0x1665b3, _0x23fb01, _0xdbc1e4, _0x580f97, _0x34a91b, _0x430471) {
            var _0x13fb70 = _0x26e505;
            return this['style'][_0x13fb70(525)](_0x1665b3, _0x23fb01, _0xdbc1e4, _0x580f97, _0x34a91b, _0x430471);
        },
        'setShadowOffset': function (_0x461966, _0x19906a) {
            var _0x7ed300 = _0x26e505;
            return this[_0x7ed300(463)][_0x7ed300(526)](_0x461966, _0x19906a);
        },
        'setShadowColor': function (_0x3ccf89) {
            var _0x10c810 = _0x26e505;
            return this[_0x10c810(463)][_0x10c810(527)](_0x3ccf89);
        },
        'setShadowBlur': function (_0x219d91) {
            var _0x2783e8 = _0x26e505;
            return this[_0x2783e8(463)][_0x2783e8(528)](_0x219d91);
        },
        'setShadowStroke': function (_0x24c476) {
            var _0x1c7c9d = _0x26e505;
            return this[_0x1c7c9d(463)][_0x1c7c9d(529)](_0x24c476);
        },
        'setShadowFill': function (_0x14bbc5) {
            var _0x26cbe1 = _0x26e505;
            return this[_0x26cbe1(463)][_0x26cbe1(530)](_0x14bbc5);
        },
        'setWordWrapWidth': function (_0x4472dc, _0x5c8251) {
            return this['style']['setWordWrapWidth'](_0x4472dc, _0x5c8251);
        },
        'setWordWrapCallback': function (_0x218603, _0x2c1987) {
            var _0xc6e77e = _0x26e505;
            return this['style'][_0xc6e77e(531)](_0x218603, _0x2c1987);
        },
        'setAlign': function (_0x3cf9f4) {
            var _0x111fce = _0x26e505;
            return this['style'][_0x111fce(532)](_0x3cf9f4);
        },
        'setResolution': function (_0x46f2f2) {
            var _0x8e20b1 = _0x26e505;
            return this[_0x8e20b1(463)][_0x8e20b1(533)](_0x46f2f2);
        },
        'setLineSpacing': function (_0x4a4596) {
            var _0x42f964 = _0x26e505;
            return this[_0x42f964(448)] = _0x4a4596, this[_0x42f964(515)]();
        },
        'setPadding': function (_0x8e842f, _0x536de3, _0x3221fa, _0x2dbcb2) {
            var _0x4970e4 = _0x26e505, _0x54a654 = {
                    'nxOpF': '4|1|3|5|0|2',
                    'kPIss': function (_0x114fa7, _0x3146db) {
                        return _0x114fa7 === _0x3146db;
                    },
                    'NZVlW': _0x4970e4(534),
                    'VVpUq': function (_0x1d8f83, _0x58bac1) {
                        return _0x1d8f83 !== _0x58bac1;
                    },
                    'Ptztr': function (_0x209176, _0x161d6f, _0x2e1188, _0x24db92) {
                        return _0x209176(_0x161d6f, _0x2e1188, _0x24db92);
                    },
                    'jxXQO': _0x4970e4(535),
                    'hAUqf': function (_0x3da107, _0x6e4d07, _0xdd4cc9, _0x240198) {
                        return _0x3da107(_0x6e4d07, _0xdd4cc9, _0x240198);
                    },
                    'hjHcU': 'top',
                    'QiLfj': function (_0x324a8d, _0x4e101a, _0x41e273, _0x12e1cb) {
                        return _0x324a8d(_0x4e101a, _0x41e273, _0x12e1cb);
                    },
                    'VOjBl': _0x4970e4(536),
                    'zALqD': function (_0x56988c, _0x27f14f) {
                        return _0x56988c === _0x27f14f;
                    }
                }, _0x1f9bda = _0x54a654[_0x4970e4(537)]['split']('|'), _0x116ba1 = -2121 + -657 * -5 + 12 * -97;
            while (!![]) {
                switch (_0x1f9bda[_0x116ba1++]) {
                case '0':
                    this[_0x4970e4(453)][_0x4970e4(536)] = _0x2dbcb2;
                    continue;
                case '1':
                    this[_0x4970e4(453)]['left'] = _0x8e842f;
                    continue;
                case '2':
                    return this[_0x4970e4(515)]();
                case '3':
                    this[_0x4970e4(453)][_0x4970e4(538)] = _0x536de3;
                    continue;
                case '4':
                    if (_0x54a654[_0x4970e4(539)](typeof _0x8e842f, _0x54a654[_0x4970e4(540)])) {
                        var _0x58143c = _0x4970e4(541)[_0x4970e4(443)]('|'), _0x4996c0 = 7582 + -5 * -1133 + 1 * -13247;
                        while (!![]) {
                            switch (_0x58143c[_0x4996c0++]) {
                            case '0':
                                var _0x4e3a9b = _0x8e842f;
                                continue;
                            case '1':
                                _0x54a654[_0x4970e4(542)](_0x2c4ed3, null) ? (_0x8e842f = _0x2c4ed3, _0x3221fa = _0x2c4ed3) : (_0x8e842f = _0x54a654[_0x4970e4(543)](GetValue, _0x4e3a9b, _0x54a654['jxXQO'], -28 * 254 + -2453 + 1913 * 5), _0x3221fa = _0x54a654[_0x4970e4(544)](GetValue, _0x4e3a9b, _0x4970e4(545), _0x8e842f));
                                continue;
                            case '2':
                                var _0x3bf391 = GetValue(_0x4e3a9b, 'y', null);
                                continue;
                            case '3':
                                _0x54a654['VVpUq'](_0x3bf391, null) ? (_0x536de3 = _0x3bf391, _0x2dbcb2 = _0x3bf391) : (_0x536de3 = _0x54a654['hAUqf'](GetValue, _0x4e3a9b, _0x54a654[_0x4970e4(546)], 2 * 3113 + 137 * -19 + -3623), _0x2dbcb2 = _0x54a654['QiLfj'](GetValue, _0x4e3a9b, _0x54a654[_0x4970e4(547)], _0x536de3));
                                continue;
                            case '4':
                                var _0x2c4ed3 = _0x54a654[_0x4970e4(548)](GetValue, _0x4e3a9b, 'x', null);
                                continue;
                            }
                            break;
                        }
                    } else
                        _0x54a654[_0x4970e4(549)](_0x8e842f, undefined) && (_0x8e842f = 1245 + -9506 + 8261), _0x54a654[_0x4970e4(549)](_0x536de3, undefined) && (_0x536de3 = _0x8e842f), _0x3221fa === undefined && (_0x3221fa = _0x8e842f), _0x54a654[_0x4970e4(549)](_0x2dbcb2, undefined) && (_0x2dbcb2 = _0x536de3);
                    continue;
                case '5':
                    this[_0x4970e4(453)][_0x4970e4(545)] = _0x3221fa;
                    continue;
                }
                break;
            }
        },
        'setMaxLines': function (_0x2f1818) {
            var _0x1f3884 = _0x26e505;
            return this[_0x1f3884(463)][_0x1f3884(550)](_0x2f1818);
        },
        'updateText': function () {
            var _0x526702 = _0x26e505, _0x1c50f1 = {
                    'afwdg': function (_0x5a83d0, _0x2f8a7e) {
                        return _0x5a83d0 === _0x2f8a7e;
                    },
                    'AGTJj': function (_0x2f84a4, _0x4001df) {
                        return _0x2f84a4 - _0x4001df;
                    },
                    'wpmwq': function (_0x23abf0, _0x3d4d8b) {
                        return _0x23abf0 - _0x3d4d8b;
                    },
                    'asmWV': function (_0x463b54, _0x4194b9) {
                        return _0x463b54 < _0x4194b9;
                    },
                    'UOgEQ': function (_0x560dd6, _0x2022e5) {
                        return _0x560dd6 === _0x2022e5;
                    },
                    'xImgh': function (_0x1a139a, _0x114626) {
                        return _0x1a139a + _0x114626;
                    },
                    'LhbPe': function (_0x4d5d6b, _0x5b41b3) {
                        return _0x4d5d6b !== _0x5b41b3;
                    },
                    'Zazfi': _0x526702(551),
                    'PRCTV': function (_0xb18b0a, _0x46b239) {
                        return _0xb18b0a < _0x46b239;
                    },
                    'gOBTo': _0x526702(552),
                    'HuscE': function (_0x2cdebe, _0x5c60ec) {
                        return _0x2cdebe / _0x5c60ec;
                    },
                    'SYtzX': function (_0x199ef9, _0x2923f9) {
                        return _0x199ef9 > _0x2923f9;
                    },
                    'VptYK': function (_0x3ce095, _0x41301) {
                        return _0x3ce095 * _0x41301;
                    },
                    'mnrbo': function (_0x48e40f, _0x182e16) {
                        return _0x48e40f - _0x182e16;
                    },
                    'SAKAB': _0x526702(545),
                    'LsFRY': _0x526702(553),
                    'VGSGm': _0x526702(554),
                    'gqbbN': function (_0x2f9699, _0x1dfacd) {
                        return _0x2f9699 >= _0x1dfacd;
                    },
                    'MXXbg': function (_0x54fbbe, _0x229a4b) {
                        return _0x54fbbe - _0x229a4b;
                    },
                    'tYEQB': function (_0x58f1d0, _0x383d5a) {
                        return _0x58f1d0 % _0x383d5a;
                    }
                }, _0x57662d = this[_0x526702(451)], _0x39051f = this['context'], _0x4f8d6c = this['style'], _0x183655 = _0x4f8d6c['resolution'], _0x490f54 = _0x4f8d6c[_0x526702(555)];
            _0x4f8d6c[_0x526702(512)](_0x57662d, _0x39051f);
            var _0x11c3c1 = this[_0x526702(511)];
            (_0x4f8d6c[_0x526702(485)] || _0x4f8d6c[_0x526702(481)]) && (_0x11c3c1 = this[_0x526702(556)](this['_text']));
            var _0x9d2c81 = _0x11c3c1['split'](this[_0x526702(502)]), _0x533d65 = GetTextSize(this, _0x490f54, _0x9d2c81), _0x1092d6 = this[_0x526702(453)], _0x18997a;
            _0x1c50f1[_0x526702(557)](_0x4f8d6c['fixedWidth'], 9452 + -1778 + -2 * 3837) ? (this[_0x526702(449)] = _0x533d65[_0x526702(449)] + _0x1092d6[_0x526702(535)] + _0x1092d6['right'], _0x18997a = _0x533d65[_0x526702(449)]) : (this['width'] = _0x4f8d6c['fixedWidth'], _0x18997a = _0x1c50f1['AGTJj'](_0x1c50f1[_0x526702(558)](this[_0x526702(449)], _0x1092d6[_0x526702(535)]), _0x1092d6[_0x526702(545)]), _0x1c50f1[_0x526702(559)](_0x18997a, _0x533d65['width']) && (_0x18997a = _0x533d65[_0x526702(449)]));
            _0x1c50f1['UOgEQ'](_0x4f8d6c['fixedHeight'], 14 * -553 + -8821 * 1 + -1 * -16563) ? this[_0x526702(466)] = _0x1c50f1['xImgh'](_0x533d65[_0x526702(466)] + _0x1092d6[_0x526702(538)], _0x1092d6[_0x526702(536)]) : this[_0x526702(466)] = _0x4f8d6c[_0x526702(560)];
            var _0x2e7767 = this[_0x526702(449)], _0x3ddcf6 = this[_0x526702(466)];
            this['updateDisplayOrigin'](), _0x2e7767 *= _0x183655, _0x3ddcf6 *= _0x183655, _0x2e7767 = Math[_0x526702(561)](_0x2e7767, -1 * -965 + 4 * 279 + -2080), _0x3ddcf6 = Math['max'](_0x3ddcf6, 2 * 1273 + -538 + -2007);
            _0x57662d[_0x526702(449)] !== _0x2e7767 || _0x1c50f1[_0x526702(562)](_0x57662d[_0x526702(466)], _0x3ddcf6) ? (_0x57662d[_0x526702(449)] = _0x2e7767, _0x57662d[_0x526702(466)] = _0x3ddcf6, this[_0x526702(460)]['setSize'](_0x2e7767, _0x3ddcf6), _0x4f8d6c[_0x526702(512)](_0x57662d, _0x39051f)) : _0x39051f['clearRect'](-14 * -31 + 1 * 9311 + -9745, 97 * -13 + -1722 + 2983, _0x2e7767, _0x3ddcf6);
            _0x39051f[_0x526702(563)](), _0x39051f[_0x526702(564)](_0x183655, _0x183655);
            _0x4f8d6c[_0x526702(565)] && (_0x39051f['fillStyle'] = _0x4f8d6c['backgroundColor'], _0x39051f[_0x526702(566)](-199 * -2 + 3048 + -1 * 3446, -1803 * 3 + -3914 + 9323, _0x2e7767, _0x3ddcf6));
            _0x4f8d6c[_0x526702(567)](_0x57662d, _0x39051f), _0x39051f['textBaseline'] = _0x1c50f1[_0x526702(568)], _0x39051f['translate'](_0x1092d6['left'], _0x1092d6['top']);
            var _0x380f99, _0x5cac6b;
            for (var _0x546cec = 8355 + 1643 * 4 + -14927; _0x1c50f1['PRCTV'](_0x546cec, _0x533d65[_0x526702(569)]); _0x546cec++) {
                var _0x2af707 = _0x1c50f1[_0x526702(570)][_0x526702(443)]('|'), _0x54db55 = -7057 + 467 * -1 + 7524;
                while (!![]) {
                    switch (_0x2af707[_0x54db55++]) {
                    case '0':
                        _0x380f99 = _0x1c50f1[_0x526702(571)](_0x4f8d6c['strokeThickness'], -6113 * 1 + -1232 * -5 + 3 * -15);
                        continue;
                    case '1':
                        _0x4f8d6c[_0x526702(572)] && (this[_0x526702(463)][_0x526702(573)](_0x39051f, _0x4f8d6c[_0x526702(574)]), _0x39051f[_0x526702(575)](_0x9d2c81[_0x546cec], _0x380f99, _0x5cac6b));
                        continue;
                    case '2':
                        _0x1c50f1[_0x526702(576)](_0x546cec, 1 * -9299 + 4 * -1033 + 13431) && (_0x5cac6b += _0x1c50f1['VptYK'](_0x533d65['lineSpacing'], _0x546cec));
                        continue;
                    case '3':
                        this['autoRound'] && (_0x380f99 = Math[_0x526702(577)](_0x380f99), _0x5cac6b = Math[_0x526702(577)](_0x5cac6b));
                        continue;
                    case '4':
                        if (_0x4f8d6c[_0x526702(475)])
                            _0x380f99 = _0x1c50f1[_0x526702(578)](_0x2e7767, _0x380f99);
                        else {
                            if (_0x4f8d6c['align'] === _0x1c50f1[_0x526702(579)])
                                _0x380f99 += _0x18997a - _0x533d65[_0x526702(580)][_0x546cec];
                            else {
                                if (_0x4f8d6c[_0x526702(581)] === _0x1c50f1[_0x526702(582)])
                                    _0x380f99 += _0x1c50f1[_0x526702(571)](_0x1c50f1[_0x526702(578)](_0x18997a, _0x533d65[_0x526702(580)][_0x546cec]), 5611 + -127 * 11 + 6 * -702);
                                else {
                                    if (_0x1c50f1[_0x526702(583)](_0x4f8d6c[_0x526702(581)], _0x1c50f1[_0x526702(584)])) {
                                        var _0x3ba41b = 226 * -26 + 4 * -2356 + 510 * 30 + 0.85;
                                        if (_0x1c50f1[_0x526702(585)](_0x533d65['lineWidths'][_0x546cec] / _0x533d65[_0x526702(449)], _0x3ba41b)) {
                                            var _0x5d431d = '1|0|7|4|6|8|2|5|3'[_0x526702(443)]('|'), _0x402352 = 9973 * 1 + 6767 + 36 * -465;
                                            while (!![]) {
                                                switch (_0x5d431d[_0x402352++]) {
                                                case '0':
                                                    var _0x15d77a = _0x39051f['measureText'](' ')[_0x526702(449)];
                                                    continue;
                                                case '1':
                                                    var _0x49d35d = _0x1c50f1[_0x526702(586)](_0x533d65['width'], _0x533d65[_0x526702(580)][_0x546cec]);
                                                    continue;
                                                case '2':
                                                    var _0x3066bb = 7203 + 3994 * 2 + -15191;
                                                    continue;
                                                case '3':
                                                    _0x9d2c81[_0x546cec] = _0x3a3e1e[_0x526702(484)](' ');
                                                    continue;
                                                case '4':
                                                    var _0x3a3e1e = _0x33deb3[_0x526702(443)](' ');
                                                    continue;
                                                case '5':
                                                    while (_0x1c50f1[_0x526702(576)](_0xb28a9a, 6199 + -4934 + -1265)) {
                                                        _0x3a3e1e[_0x3066bb] += ' ', _0x3066bb = _0x1c50f1[_0x526702(587)](_0x1c50f1['xImgh'](_0x3066bb, 1407 + -253 + -1153), _0x3a3e1e['length'] - (2588 + -69 * -106 + -9901) || -27 * 39 + 527 * -13 + 255 * 31), --_0xb28a9a;
                                                    }
                                                    continue;
                                                case '6':
                                                    _0x49d35d += _0x1c50f1[_0x526702(588)](_0x9d2c81[_0x546cec][_0x526702(490)] - _0x33deb3[_0x526702(490)], _0x15d77a);
                                                    continue;
                                                case '7':
                                                    var _0x33deb3 = _0x9d2c81[_0x546cec][_0x526702(589)]();
                                                    continue;
                                                case '8':
                                                    var _0xb28a9a = Math[_0x526702(590)](_0x1c50f1['HuscE'](_0x49d35d, _0x15d77a));
                                                    continue;
                                                }
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        continue;
                    case '5':
                        _0x5cac6b = _0x1c50f1[_0x526702(591)](_0x1c50f1[_0x526702(571)](_0x4f8d6c['strokeThickness'], 2 * -910 + 1 * 439 + 1383), _0x1c50f1[_0x526702(588)](_0x546cec, _0x533d65[_0x526702(592)])) + _0x490f54[_0x526702(593)];
                        continue;
                    case '6':
                        _0x4f8d6c[_0x526702(594)] && (this[_0x526702(463)]['syncShadow'](_0x39051f, _0x4f8d6c['shadowFill']), _0x39051f[_0x526702(595)](_0x9d2c81[_0x546cec], _0x380f99, _0x5cac6b));
                        continue;
                    }
                    break;
                }
            }
            _0x39051f[_0x526702(596)]();
            this[_0x526702(458)] && this[_0x526702(458)]['gl'] && (this[_0x526702(460)][_0x526702(461)][_0x526702(462)] = this['renderer'][_0x526702(597)](_0x57662d, this['frame'][_0x526702(461)]['glTexture'], !![]), this[_0x526702(460)][_0x526702(462)] = this['frame']['source'][_0x526702(462)]);
            this[_0x526702(452)] = !![];
            var _0xa21384 = this[_0x526702(598)];
            return _0xa21384 && !_0xa21384[_0x526702(599)] && (_0xa21384[_0x526702(600)][_0x526702(449)] = this[_0x526702(449)], _0xa21384[_0x526702(600)][_0x526702(466)] = this[_0x526702(466)]), this;
        },
        'getTextMetrics': function () {
            var _0x33ebb7 = _0x26e505;
            return this[_0x33ebb7(463)][_0x33ebb7(601)]();
        },
        'text': {
            'get': function () {
                return this['_text'];
            },
            'set': function (_0x52078) {
                this['setText'](_0x52078);
            }
        },
        'toJSON': function () {
            var _0xae1f7c = _0x26e505, _0x1cb83b = Components[_0xae1f7c(602)](this), _0x26b683 = {
                    'autoRound': this[_0xae1f7c(447)],
                    'text': this[_0xae1f7c(511)],
                    'style': this['style'][_0xae1f7c(603)](),
                    'padding': {
                        'left': this[_0xae1f7c(453)][_0xae1f7c(535)],
                        'right': this['padding'][_0xae1f7c(545)],
                        'top': this[_0xae1f7c(453)][_0xae1f7c(538)],
                        'bottom': this['padding']['bottom']
                    }
                };
            return _0x1cb83b[_0xae1f7c(604)] = _0x26b683, _0x1cb83b;
        },
        'preDestroy': function () {
            var _0xd4ddac = _0x26e505, _0x710423 = {
                    'KCFnE': function (_0x5e94ee, _0x142928) {
                        return _0x5e94ee(_0x142928);
                    }
                };
            this[_0xd4ddac(463)][_0xd4ddac(475)] && _0x710423[_0xd4ddac(605)](RemoveFromDOM, this[_0xd4ddac(451)]), CanvasPool['remove'](this[_0xd4ddac(451)]), this[_0xd4ddac(450)][_0xd4ddac(606)]();
        }
    });
module[_0x26e505(607)] = Text;
var AddToDOM = require('../../dom/AddToDOM'), CanvasPool = require('../../display/canvas/CanvasPool'), Class = require(_0xe20b9c(346)), Components = require(_0xe20b9c(347)), GameEvents = require(_0xe20b9c(348)), GameObject = require(_0xe20b9c(349)), GetTextSize = require(_0xe20b9c(350)), GetValue = require('../../utils/object/GetValue'), RemoveFromDOM = require('../../dom/RemoveFromDOM'), TextRender = require(_0xe20b9c(351)), TextStyle = require(_0xe20b9c(352)), Text = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components['Alpha'],
            Components[_0xe20b9c(353)],
            Components[_0xe20b9c(354)],
            Components[_0xe20b9c(355)],
            Components[_0xe20b9c(356)],
            Components[_0xe20b9c(357)],
            Components[_0xe20b9c(358)],
            Components[_0xe20b9c(359)],
            Components[_0xe20b9c(360)],
            Components['Pipeline'],
            Components[_0xe20b9c(361)],
            Components[_0xe20b9c(362)],
            Components[_0xe20b9c(363)],
            Components[_0xe20b9c(364)],
            TextRender
        ],
        'initialize': function Text(_0x36368d, _0x2dc67b, _0x2e2bf7, _0x46287f, _0x267536) {
            var _0x48449e = _0xe20b9c;
            _0x2dc67b === undefined && (_0x2dc67b = 0), _0x2e2bf7 === undefined && (_0x2e2bf7 = 0), GameObject[_0x48449e(365)](this, _0x36368d, _0x48449e(366)), this[_0x48449e(367)] = _0x36368d['sys'][_0x48449e(367)], this[_0x48449e(368)](_0x2dc67b, _0x2e2bf7), this['setOrigin'](0, 0), this[_0x48449e(369)](), this[_0x48449e(370)] = CanvasPool[_0x48449e(371)](this), this[_0x48449e(372)] = this[_0x48449e(370)][_0x48449e(373)]('2d'), this[_0x48449e(374)] = new TextStyle(this, _0x267536), this['autoRound'] = !![], this['splitRegExp'] = /(?:\r\n|\r|\n)/, this[_0x48449e(375)] = undefined, this[_0x48449e(376)] = {
                'left': 0,
                'right': 0,
                'top': 0,
                'bottom': 0
            }, this[_0x48449e(377)] = 1, this[_0x48449e(378)] = 1, this['lineSpacing'] = 0, this[_0x48449e(379)] = ![], this[_0x48449e(374)][_0x48449e(380)] === 0 && (this[_0x48449e(374)][_0x48449e(380)] = 1), this['_crop'] = this['resetCropObject'](), this['texture'] = _0x36368d[_0x48449e(381)][_0x48449e(382)]['addCanvas'](null, this[_0x48449e(370)], !![]), this[_0x48449e(383)] = this[_0x48449e(384)][_0x48449e(385)](), this[_0x48449e(383)]['source'][_0x48449e(380)] = this['style']['resolution'], this[_0x48449e(367)] && this[_0x48449e(367)]['gl'] && (this[_0x48449e(367)][_0x48449e(386)](this[_0x48449e(383)][_0x48449e(387)][_0x48449e(388)]), this['frame'][_0x48449e(387)][_0x48449e(388)] = null), this[_0x48449e(389)](), this[_0x48449e(390)](_0x46287f), _0x267536 && _0x267536['padding'] && this[_0x48449e(391)](_0x267536[_0x48449e(376)]), _0x267536 && _0x267536[_0x48449e(392)] && this[_0x48449e(393)](_0x267536[_0x48449e(392)]), _0x36368d[_0x48449e(381)][_0x48449e(394)][_0x48449e(395)]['on'](GameEvents[_0x48449e(396)], function () {
                var _0x53bcce = _0x48449e;
                this[_0x53bcce(379)] = !![];
            }, this);
        },
        'initRTL': function () {
            var _0x563504 = _0xe20b9c;
            if (!this[_0x563504(374)][_0x563504(397)])
                return;
            this[_0x563504(370)][_0x563504(398)] = _0x563504(397), this[_0x563504(372)][_0x563504(399)] = _0x563504(397), this[_0x563504(370)][_0x563504(374)][_0x563504(400)] = _0x563504(401), AddToDOM(this['canvas'], this['scene'][_0x563504(381)][_0x563504(370)]), this[_0x563504(402)] = 1;
        },
        'runWordWrap': function (_0x27030a) {
            var _0x479788 = _0xe20b9c, _0x31a97c = this[_0x479788(374)];
            if (_0x31a97c[_0x479788(403)]) {
                var _0x22147a = _0x31a97c[_0x479788(403)][_0x479788(365)](_0x31a97c[_0x479788(404)], _0x27030a, this);
                return Array['isArray'](_0x22147a) && (_0x22147a = _0x22147a[_0x479788(405)]('\n')), _0x22147a;
            } else
                return _0x31a97c[_0x479788(406)] ? _0x31a97c[_0x479788(407)] ? this['advancedWordWrap'](_0x27030a, this[_0x479788(372)], this[_0x479788(374)]['wordWrapWidth']) : this['basicWordWrap'](_0x27030a, this[_0x479788(372)], this[_0x479788(374)][_0x479788(406)]) : _0x27030a;
        },
        'advancedWordWrap': function (_0x3cb2ea, _0x4effde, _0x2ad404) {
            var _0x5d259e = _0xe20b9c, _0x2d8bb0 = '', _0x57a1dc = _0x3cb2ea[_0x5d259e(408)](/ +/gi, ' ')[_0x5d259e(409)](this[_0x5d259e(410)]), _0x4e9ff6 = _0x57a1dc['length'];
            for (var _0x2feb22 = 0; _0x2feb22 < _0x4e9ff6; _0x2feb22++) {
                var _0x300e49 = _0x57a1dc[_0x2feb22], _0x3078a5 = '';
                _0x300e49 = _0x300e49[_0x5d259e(408)](/^ *|\s*$/gi, '');
                var _0x4f6f79 = _0x4effde['measureText'](_0x300e49)['width'];
                if (_0x4f6f79 < _0x2ad404) {
                    _0x2d8bb0 += _0x300e49 + '\n';
                    continue;
                }
                var _0x94fe90 = _0x2ad404, _0x4a4f56 = _0x300e49[_0x5d259e(409)](' ');
                for (var _0x186b95 = 0; _0x186b95 < _0x4a4f56[_0x5d259e(411)]; _0x186b95++) {
                    var _0x4c71df = _0x4a4f56[_0x186b95], _0x5309b7 = _0x4c71df + ' ', _0x1392af = _0x4effde[_0x5d259e(412)](_0x5309b7)[_0x5d259e(377)];
                    if (_0x1392af > _0x94fe90) {
                        if (_0x186b95 === 0) {
                            var _0x136b64 = _0x5309b7;
                            while (_0x136b64[_0x5d259e(411)]) {
                                _0x136b64 = _0x136b64[_0x5d259e(413)](0, -1), _0x1392af = _0x4effde[_0x5d259e(412)](_0x136b64)[_0x5d259e(377)];
                                if (_0x1392af <= _0x94fe90)
                                    break;
                            }
                            if (!_0x136b64[_0x5d259e(411)])
                                throw new Error(_0x5d259e(414));
                            var _0x74faf1 = _0x4c71df['substr'](_0x136b64[_0x5d259e(411)]);
                            _0x4a4f56[_0x186b95] = _0x74faf1, _0x3078a5 += _0x136b64;
                        }
                        var _0x3487b6 = _0x4a4f56[_0x186b95][_0x5d259e(411)] ? _0x186b95 : _0x186b95 + 1, _0x1a054b = _0x4a4f56[_0x5d259e(413)](_0x3487b6)[_0x5d259e(405)](' ')['replace'](/[ \n]*$/gi, '');
                        _0x57a1dc[_0x2feb22 + 1] = _0x1a054b + ' ' + (_0x57a1dc[_0x2feb22 + 1] || ''), _0x4e9ff6 = _0x57a1dc[_0x5d259e(411)];
                        break;
                    } else
                        _0x3078a5 += _0x5309b7, _0x94fe90 -= _0x1392af;
                }
                _0x2d8bb0 += _0x3078a5[_0x5d259e(408)](/[ \n]*$/gi, '') + '\n';
            }
            return _0x2d8bb0 = _0x2d8bb0[_0x5d259e(408)](/[\s|\n]*$/gi, ''), _0x2d8bb0;
        },
        'basicWordWrap': function (_0x1e0430, _0x534067, _0x226d78) {
            var _0x46ba84 = _0xe20b9c, _0x180740 = '', _0x1959bb = _0x1e0430['split'](this[_0x46ba84(410)]), _0x130fdf = _0x1959bb[_0x46ba84(411)] - 1, _0x3ea02f = _0x534067[_0x46ba84(412)](' ')[_0x46ba84(377)];
            for (var _0x523cf2 = 0; _0x523cf2 <= _0x130fdf; _0x523cf2++) {
                var _0x1c48bc = _0x226d78, _0x4b7d2b = _0x1959bb[_0x523cf2][_0x46ba84(409)](' '), _0x4ab059 = _0x4b7d2b[_0x46ba84(411)] - 1;
                for (var _0x3b7916 = 0; _0x3b7916 <= _0x4ab059; _0x3b7916++) {
                    var _0x10d40b = _0x4b7d2b[_0x3b7916], _0x2bc02e = _0x534067[_0x46ba84(412)](_0x10d40b)['width'], _0x5d38e5 = _0x2bc02e;
                    _0x3b7916 < _0x4ab059 && (_0x5d38e5 += _0x3ea02f), _0x5d38e5 > _0x1c48bc && (_0x3b7916 > 0 && (_0x180740 += '\n', _0x1c48bc = _0x226d78)), _0x180740 += _0x10d40b, _0x3b7916 < _0x4ab059 ? (_0x180740 += ' ', _0x1c48bc -= _0x5d38e5) : _0x1c48bc -= _0x2bc02e;
                }
                _0x523cf2 < _0x130fdf && (_0x180740 += '\n');
            }
            return _0x180740;
        },
        'getWrappedText': function (_0x54745d) {
            var _0x3a429d = _0xe20b9c;
            _0x54745d === undefined && (_0x54745d = this[_0x3a429d(375)]);
            this[_0x3a429d(374)]['syncFont'](this[_0x3a429d(370)], this['context']);
            var _0x2010d4 = this[_0x3a429d(415)](_0x54745d);
            return _0x2010d4[_0x3a429d(409)](this[_0x3a429d(410)]);
        },
        'setText': function (_0x34b44c) {
            var _0x6abeeb = _0xe20b9c;
            return !_0x34b44c && _0x34b44c !== 0 && (_0x34b44c = ''), Array[_0x6abeeb(416)](_0x34b44c) && (_0x34b44c = _0x34b44c['join']('\n')), _0x34b44c !== this['_text'] && (this[_0x6abeeb(375)] = _0x34b44c['toString'](), this[_0x6abeeb(417)]()), this;
        },
        'setStyle': function (_0x299fa6) {
            var _0x1b7d1e = _0xe20b9c;
            return this[_0x1b7d1e(374)][_0x1b7d1e(418)](_0x299fa6);
        },
        'setFont': function (_0x31eedc) {
            var _0x427c96 = _0xe20b9c;
            return this['style'][_0x427c96(419)](_0x31eedc);
        },
        'setFontFamily': function (_0x4911a5) {
            return this['style']['setFontFamily'](_0x4911a5);
        },
        'setFontSize': function (_0x79cf2e) {
            var _0x19ccd6 = _0xe20b9c;
            return this[_0x19ccd6(374)]['setFontSize'](_0x79cf2e);
        },
        'setFontStyle': function (_0x907ad5) {
            var _0x2bc1d4 = _0xe20b9c;
            return this[_0x2bc1d4(374)][_0x2bc1d4(420)](_0x907ad5);
        },
        'setFixedSize': function (_0x3228ab, _0x1e0982) {
            var _0x280d3d = _0xe20b9c;
            return this[_0x280d3d(374)][_0x280d3d(421)](_0x3228ab, _0x1e0982);
        },
        'setBackgroundColor': function (_0x50dbdc) {
            var _0x1436c7 = _0xe20b9c;
            return this['style'][_0x1436c7(422)](_0x50dbdc);
        },
        'setFill': function (_0x2de726) {
            var _0x2021ca = _0xe20b9c;
            return this['style'][_0x2021ca(423)](_0x2de726);
        },
        'setColor': function (_0x1f702b) {
            var _0x1d984a = _0xe20b9c;
            return this[_0x1d984a(374)][_0x1d984a(424)](_0x1f702b);
        },
        'setStroke': function (_0x211cbb, _0x3061f2) {
            var _0x4eaed1 = _0xe20b9c;
            return this[_0x4eaed1(374)][_0x4eaed1(425)](_0x211cbb, _0x3061f2);
        },
        'setShadow': function (_0x327604, _0x48367b, _0x352f44, _0x285da0, _0x3d5f9c, _0x29ec55) {
            var _0x47ec7e = _0xe20b9c;
            return this['style'][_0x47ec7e(426)](_0x327604, _0x48367b, _0x352f44, _0x285da0, _0x3d5f9c, _0x29ec55);
        },
        'setShadowOffset': function (_0x38812c, _0x5af298) {
            var _0x10ddde = _0xe20b9c;
            return this[_0x10ddde(374)][_0x10ddde(427)](_0x38812c, _0x5af298);
        },
        'setShadowColor': function (_0x3517d8) {
            var _0x4a2b5c = _0xe20b9c;
            return this[_0x4a2b5c(374)][_0x4a2b5c(428)](_0x3517d8);
        },
        'setShadowBlur': function (_0x129523) {
            var _0x3db21f = _0xe20b9c;
            return this['style'][_0x3db21f(429)](_0x129523);
        },
        'setShadowStroke': function (_0xd32910) {
            var _0x2a2da6 = _0xe20b9c;
            return this[_0x2a2da6(374)][_0x2a2da6(430)](_0xd32910);
        },
        'setShadowFill': function (_0x413932) {
            var _0x66e875 = _0xe20b9c;
            return this[_0x66e875(374)][_0x66e875(431)](_0x413932);
        },
        'setWordWrapWidth': function (_0x4e7ee5, _0x51ec74) {
            var _0x2cfcd1 = _0xe20b9c;
            return this[_0x2cfcd1(374)][_0x2cfcd1(432)](_0x4e7ee5, _0x51ec74);
        },
        'setWordWrapCallback': function (_0x3ad097, _0x5250ea) {
            var _0x244100 = _0xe20b9c;
            return this[_0x244100(374)][_0x244100(433)](_0x3ad097, _0x5250ea);
        },
        'setAlign': function (_0x4d0897) {
            var _0x5b592a = _0xe20b9c;
            return this[_0x5b592a(374)][_0x5b592a(434)](_0x4d0897);
        },
        'setResolution': function (_0x14ac95) {
            var _0x2851f9 = _0xe20b9c;
            return this[_0x2851f9(374)]['setResolution'](_0x14ac95);
        },
        'setLineSpacing': function (_0x23f21d) {
            var _0x957cb8 = _0xe20b9c;
            return this[_0x957cb8(392)] = _0x23f21d, this[_0x957cb8(417)]();
        },
        'setPadding': function (_0xd3b92b, _0x1a4e6f, _0x20f8d0, _0x80061a) {
            var _0x14458c = _0xe20b9c;
            if (typeof _0xd3b92b === _0x14458c(435)) {
                var _0x2d6e3e = _0xd3b92b, _0x5aa337 = GetValue(_0x2d6e3e, 'x', null);
                _0x5aa337 !== null ? (_0xd3b92b = _0x5aa337, _0x20f8d0 = _0x5aa337) : (_0xd3b92b = GetValue(_0x2d6e3e, _0x14458c(436), 0), _0x20f8d0 = GetValue(_0x2d6e3e, _0x14458c(437), _0xd3b92b));
                var _0x520c20 = GetValue(_0x2d6e3e, 'y', null);
                _0x520c20 !== null ? (_0x1a4e6f = _0x520c20, _0x80061a = _0x520c20) : (_0x1a4e6f = GetValue(_0x2d6e3e, 'top', 0), _0x80061a = GetValue(_0x2d6e3e, 'bottom', _0x1a4e6f));
            } else
                _0xd3b92b === undefined && (_0xd3b92b = 0), _0x1a4e6f === undefined && (_0x1a4e6f = _0xd3b92b), _0x20f8d0 === undefined && (_0x20f8d0 = _0xd3b92b), _0x80061a === undefined && (_0x80061a = _0x1a4e6f);
            return this[_0x14458c(376)][_0x14458c(436)] = _0xd3b92b, this[_0x14458c(376)][_0x14458c(438)] = _0x1a4e6f, this[_0x14458c(376)][_0x14458c(437)] = _0x20f8d0, this['padding']['bottom'] = _0x80061a, this['updateText']();
        },
        'setMaxLines': function (_0x3b124b) {
            var _0x526f6e = _0xe20b9c;
            return this[_0x526f6e(374)][_0x526f6e(439)](_0x3b124b);
        },
        'updateText': function () {
            var _0x5e3fdd = _0xe20b9c, _0x3c3689 = this[_0x5e3fdd(370)], _0x543e7e = this[_0x5e3fdd(372)], _0xd842cc = this['style'], _0x4c573f = _0xd842cc['resolution'], _0xf3bee3 = _0xd842cc[_0x5e3fdd(440)];
            _0xd842cc['syncFont'](_0x3c3689, _0x543e7e);
            var _0x357a58 = this[_0x5e3fdd(375)];
            (_0xd842cc[_0x5e3fdd(406)] || _0xd842cc[_0x5e3fdd(403)]) && (_0x357a58 = this[_0x5e3fdd(415)](this[_0x5e3fdd(375)]));
            var _0x56e90d = _0x357a58[_0x5e3fdd(409)](this[_0x5e3fdd(410)]), _0x3f5684 = GetTextSize(this, _0xf3bee3, _0x56e90d), _0x4de77f = this['padding'], _0xef0e29;
            _0xd842cc[_0x5e3fdd(441)] === 0 ? (this['width'] = _0x3f5684['width'] + _0x4de77f['left'] + _0x4de77f['right'], _0xef0e29 = _0x3f5684[_0x5e3fdd(377)]) : (this['width'] = _0xd842cc['fixedWidth'], _0xef0e29 = this['width'] - _0x4de77f['left'] - _0x4de77f[_0x5e3fdd(437)], _0xef0e29 < _0x3f5684[_0x5e3fdd(377)] && (_0xef0e29 = _0x3f5684[_0x5e3fdd(377)]));
            _0xd842cc[_0x5e3fdd(442)] === 0 ? this[_0x5e3fdd(378)] = _0x3f5684[_0x5e3fdd(378)] + _0x4de77f[_0x5e3fdd(438)] + _0x4de77f[_0x5e3fdd(443)] : this['height'] = _0xd842cc[_0x5e3fdd(442)];
            var _0x40779f = this[_0x5e3fdd(377)], _0x2cec0f = this[_0x5e3fdd(378)];
            this[_0x5e3fdd(444)](), _0x40779f *= _0x4c573f, _0x2cec0f *= _0x4c573f, _0x40779f = Math['max'](_0x40779f, 1), _0x2cec0f = Math['max'](_0x2cec0f, 1);
            _0x3c3689[_0x5e3fdd(377)] !== _0x40779f || _0x3c3689['height'] !== _0x2cec0f ? (_0x3c3689['width'] = _0x40779f, _0x3c3689[_0x5e3fdd(378)] = _0x2cec0f, this[_0x5e3fdd(383)][_0x5e3fdd(445)](_0x40779f, _0x2cec0f), _0xd842cc[_0x5e3fdd(446)](_0x3c3689, _0x543e7e)) : _0x543e7e[_0x5e3fdd(447)](0, 0, _0x40779f, _0x2cec0f);
            _0x543e7e[_0x5e3fdd(448)](), _0x543e7e[_0x5e3fdd(449)](_0x4c573f, _0x4c573f);
            _0xd842cc['backgroundColor'] && (_0x543e7e['fillStyle'] = _0xd842cc[_0x5e3fdd(450)], _0x543e7e[_0x5e3fdd(451)](0, 0, _0x40779f, _0x2cec0f));
            _0xd842cc[_0x5e3fdd(452)](_0x3c3689, _0x543e7e), _0x543e7e[_0x5e3fdd(453)] = 'alphabetic', _0x543e7e[_0x5e3fdd(454)](_0x4de77f[_0x5e3fdd(436)], _0x4de77f[_0x5e3fdd(438)]);
            var _0x103275, _0x552395;
            for (var _0x441ceb = 0; _0x441ceb < _0x3f5684[_0x5e3fdd(455)]; _0x441ceb++) {
                _0x103275 = _0xd842cc[_0x5e3fdd(456)] / 2, _0x552395 = _0xd842cc['strokeThickness'] / 2 + _0x441ceb * _0x3f5684[_0x5e3fdd(457)] + _0xf3bee3[_0x5e3fdd(458)];
                _0x441ceb > 0 && (_0x552395 += _0x3f5684['lineSpacing'] * _0x441ceb);
                if (_0xd842cc[_0x5e3fdd(397)])
                    _0x103275 = _0x40779f - _0x103275;
                else {
                    if (_0xd842cc[_0x5e3fdd(459)] === _0x5e3fdd(437))
                        _0x103275 += _0xef0e29 - _0x3f5684['lineWidths'][_0x441ceb];
                    else {
                        if (_0xd842cc[_0x5e3fdd(459)] === _0x5e3fdd(460))
                            _0x103275 += (_0xef0e29 - _0x3f5684[_0x5e3fdd(461)][_0x441ceb]) / 2;
                        else {
                            if (_0xd842cc[_0x5e3fdd(459)] === _0x5e3fdd(462)) {
                                var _0x4fbf72 = 0.85;
                                if (_0x3f5684[_0x5e3fdd(461)][_0x441ceb] / _0x3f5684[_0x5e3fdd(377)] >= _0x4fbf72) {
                                    var _0x35e45b = _0x3f5684[_0x5e3fdd(377)] - _0x3f5684[_0x5e3fdd(461)][_0x441ceb], _0x2a26c7 = _0x543e7e['measureText'](' ')[_0x5e3fdd(377)], _0x2123d8 = _0x56e90d[_0x441ceb][_0x5e3fdd(463)](), _0x4b4a9a = _0x2123d8['split'](' ');
                                    _0x35e45b += (_0x56e90d[_0x441ceb][_0x5e3fdd(411)] - _0x2123d8[_0x5e3fdd(411)]) * _0x2a26c7;
                                    var _0x337cc1 = Math[_0x5e3fdd(464)](_0x35e45b / _0x2a26c7), _0x14248f = 0;
                                    while (_0x337cc1 > 0) {
                                        _0x4b4a9a[_0x14248f] += ' ', _0x14248f = (_0x14248f + 1) % (_0x4b4a9a[_0x5e3fdd(411)] - 1 || 1), --_0x337cc1;
                                    }
                                    _0x56e90d[_0x441ceb] = _0x4b4a9a[_0x5e3fdd(405)](' ');
                                }
                            }
                        }
                    }
                }
                this[_0x5e3fdd(465)] && (_0x103275 = Math[_0x5e3fdd(466)](_0x103275), _0x552395 = Math['round'](_0x552395)), _0xd842cc[_0x5e3fdd(456)] && (this[_0x5e3fdd(374)][_0x5e3fdd(467)](_0x543e7e, _0xd842cc['shadowStroke']), _0x543e7e[_0x5e3fdd(468)](_0x56e90d[_0x441ceb], _0x103275, _0x552395)), _0xd842cc[_0x5e3fdd(469)] && (this['style'][_0x5e3fdd(467)](_0x543e7e, _0xd842cc[_0x5e3fdd(470)]), _0x543e7e[_0x5e3fdd(471)](_0x56e90d[_0x441ceb], _0x103275, _0x552395));
            }
            _0x543e7e[_0x5e3fdd(472)]();
            this[_0x5e3fdd(367)] && this[_0x5e3fdd(367)]['gl'] && (this[_0x5e3fdd(383)][_0x5e3fdd(387)]['glTexture'] = this[_0x5e3fdd(367)][_0x5e3fdd(473)](_0x3c3689, this[_0x5e3fdd(383)][_0x5e3fdd(387)][_0x5e3fdd(388)], !![]), this[_0x5e3fdd(383)]['glTexture'] = this[_0x5e3fdd(383)][_0x5e3fdd(387)]['glTexture']);
            this[_0x5e3fdd(379)] = !![];
            var _0x14374b = this['input'];
            return _0x14374b && !_0x14374b[_0x5e3fdd(474)] && (_0x14374b[_0x5e3fdd(475)][_0x5e3fdd(377)] = this[_0x5e3fdd(377)], _0x14374b[_0x5e3fdd(475)][_0x5e3fdd(378)] = this[_0x5e3fdd(378)]), this;
        },
        'getTextMetrics': function () {
            var _0x4c5f6b = _0xe20b9c;
            return this['style'][_0x4c5f6b(476)]();
        },
        'text': {
            'get': function () {
                var _0x261ed9 = _0xe20b9c;
                return this[_0x261ed9(375)];
            },
            'set': function (_0x37d277) {
                this['setText'](_0x37d277);
            }
        },
        'toJSON': function () {
            var _0x59c32f = _0xe20b9c, _0x50eb14 = Components['ToJSON'](this), _0x3bffa4 = {
                    'autoRound': this[_0x59c32f(465)],
                    'text': this[_0x59c32f(375)],
                    'style': this[_0x59c32f(374)][_0x59c32f(477)](),
                    'padding': {
                        'left': this[_0x59c32f(376)][_0x59c32f(436)],
                        'right': this[_0x59c32f(376)][_0x59c32f(437)],
                        'top': this[_0x59c32f(376)][_0x59c32f(438)],
                        'bottom': this[_0x59c32f(376)][_0x59c32f(443)]
                    }
                };
            return _0x50eb14[_0x59c32f(478)] = _0x3bffa4, _0x50eb14;
        },
        'preDestroy': function () {
            var _0x23d0bd = _0xe20b9c;
            this[_0x23d0bd(374)]['rtl'] && RemoveFromDOM(this['canvas']), CanvasPool[_0x23d0bd(479)](this[_0x23d0bd(370)]), this[_0x23d0bd(384)][_0x23d0bd(480)]();
        }
    });
function _0x21c9(_0x4670fb, _0x11925a) {
    return _0x21c9 = function (_0xb1346, _0x21c90e) {
        _0xb1346 = _0xb1346 - 336;
        var _0x5e39d8 = _0xb134[_0xb1346];
        return _0x5e39d8;
    }, _0x21c9(_0x4670fb, _0x11925a);
}
module['exports'] = Text;
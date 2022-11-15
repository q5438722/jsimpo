var Class = require('../../../utils/Class'), Clamp = require(_0x592d46(416)), Components = require(_0x592d46(417)), GameObject = require(_0x592d46(418)), GetBitmapTextSize = require(_0x592d46(419)), ParseFromAtlas = require(_0x592d46(420)), ParseXMLBitmapFont = require('../ParseXMLBitmapFont'), Rectangle = require(_0x592d46(421)), Render = require(_0x592d46(422)), BitmapText = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components[_0x592d46(423)],
            Components['BlendMode'],
            Components[_0x592d46(424)],
            Components[_0x592d46(425)],
            Components[_0x592d46(426)],
            Components[_0x592d46(427)],
            Components[_0x592d46(428)],
            Components[_0x592d46(429)],
            Components[_0x592d46(430)],
            Components[_0x592d46(431)],
            Components[_0x592d46(432)],
            Render
        ],
        'initialize': function BitmapText(_0x52aa39, _0x5c6354, _0x3d00a4, _0x279c71, _0xf47fd8, _0x41771c, _0x36fbe6) {
            var _0x1651b7 = _0x592d46;
            _0xf47fd8 === undefined && (_0xf47fd8 = '');
            _0x36fbe6 === undefined && (_0x36fbe6 = 0);
            GameObject[_0x1651b7(433)](this, _0x52aa39, _0x1651b7(434)), this[_0x1651b7(435)] = _0x279c71;
            var _0x45edb8 = this['scene'][_0x1651b7(436)][_0x1651b7(437)]['bitmapFont'][_0x1651b7(438)](_0x279c71);
            !_0x45edb8 && console[_0x1651b7(439)](_0x1651b7(440) + _0x279c71), this[_0x1651b7(441)] = _0x45edb8[_0x1651b7(442)], this[_0x1651b7(443)] = '', this['_fontSize'] = _0x41771c || this['fontData']['size'], this[_0x1651b7(444)] = 0, this['_align'] = _0x36fbe6, this['_bounds'] = GetBitmapTextSize(), this[_0x1651b7(445)] = !![], this[_0x1651b7(446)] = 0, this[_0x1651b7(447)] = 32, this['charColors'] = [], this['dropShadowX'] = 0, this[_0x1651b7(448)] = 0, this['dropShadowColor'] = 0, this[_0x1651b7(449)] = 0.5, this[_0x1651b7(450)] = _0x45edb8[_0x1651b7(450)], this['setTexture'](_0x45edb8[_0x1651b7(451)], _0x45edb8[_0x1651b7(452)]), this['setPosition'](_0x5c6354, _0x3d00a4), this[_0x1651b7(453)](0, 0), this[_0x1651b7(454)](), this[_0x1651b7(455)](_0xf47fd8);
        },
        'setLeftAlign': function () {
            var _0x39b9a3 = _0x592d46;
            return this[_0x39b9a3(456)] = BitmapText[_0x39b9a3(457)], this['_dirty'] = !![], this;
        },
        'setCenterAlign': function () {
            var _0x165bcc = _0x592d46;
            return this[_0x165bcc(456)] = BitmapText[_0x165bcc(458)], this[_0x165bcc(445)] = !![], this;
        },
        'setRightAlign': function () {
            var _0x2c2b71 = _0x592d46;
            return this[_0x2c2b71(456)] = BitmapText[_0x2c2b71(459)], this['_dirty'] = !![], this;
        },
        'setFontSize': function (_0x19363c) {
            var _0x51d60a = _0x592d46;
            return this[_0x51d60a(460)] = _0x19363c, this['_dirty'] = !![], this;
        },
        'setLetterSpacing': function (_0x523d93) {
            var _0x5fe8e5 = _0x592d46;
            return _0x523d93 === undefined && (_0x523d93 = 0), this[_0x5fe8e5(444)] = _0x523d93, this['_dirty'] = !![], this;
        },
        'setText': function (_0x1172a6) {
            var _0x484d9b = _0x592d46;
            return !_0x1172a6 && _0x1172a6 !== 0 && (_0x1172a6 = ''), Array['isArray'](_0x1172a6) && (_0x1172a6 = _0x1172a6[_0x484d9b(461)]('\n')), _0x1172a6 !== this[_0x484d9b(462)] && (this[_0x484d9b(443)] = _0x1172a6['toString'](), this[_0x484d9b(445)] = !![], this[_0x484d9b(463)]()), this;
        },
        'setDropShadow': function (_0x258389, _0x195bc3, _0x3ceeb7, _0x5bee69) {
            var _0x5193eb = _0x592d46;
            return _0x258389 === undefined && (_0x258389 = 0), _0x195bc3 === undefined && (_0x195bc3 = 0), _0x3ceeb7 === undefined && (_0x3ceeb7 = 0), _0x5bee69 === undefined && (_0x5bee69 = 0.5), this['dropShadowX'] = _0x258389, this[_0x5193eb(448)] = _0x195bc3, this[_0x5193eb(464)] = _0x3ceeb7, this[_0x5193eb(449)] = _0x5bee69, this;
        },
        'setCharacterTint': function (_0x2d6d4e, _0x441338, _0x32c019, _0x136e3b, _0x56efbb, _0xde3c87, _0x1fbfb1) {
            var _0x9dde0f = _0x592d46;
            _0x2d6d4e === undefined && (_0x2d6d4e = 0);
            _0x441338 === undefined && (_0x441338 = 1);
            _0x32c019 === undefined && (_0x32c019 = ![]);
            _0x136e3b === undefined && (_0x136e3b = -1);
            _0x56efbb === undefined && (_0x56efbb = _0x136e3b, _0xde3c87 = _0x136e3b, _0x1fbfb1 = _0x136e3b);
            var _0x1ff45d = this['text']['length'];
            _0x441338 === -1 && (_0x441338 = _0x1ff45d);
            _0x2d6d4e < 0 && (_0x2d6d4e = _0x1ff45d + _0x2d6d4e);
            _0x2d6d4e = Clamp(_0x2d6d4e, 0, _0x1ff45d - 1);
            var _0x565cd4 = Clamp(_0x2d6d4e + _0x441338, _0x2d6d4e, _0x1ff45d), _0x34accf = this[_0x9dde0f(465)];
            for (var _0x3dd5cb = _0x2d6d4e; _0x3dd5cb < _0x565cd4; _0x3dd5cb++) {
                var _0x2d7978 = _0x34accf[_0x3dd5cb];
                if (_0x136e3b === -1)
                    _0x34accf[_0x3dd5cb] = null;
                else {
                    var _0x388ee1 = _0x32c019 ? 1 : 0;
                    _0x2d7978 ? (_0x2d7978[_0x9dde0f(466)] = _0x388ee1, _0x2d7978[_0x9dde0f(467)] = _0x136e3b, _0x2d7978[_0x9dde0f(468)] = _0x56efbb, _0x2d7978[_0x9dde0f(469)] = _0xde3c87, _0x2d7978[_0x9dde0f(470)] = _0x1fbfb1) : _0x34accf[_0x3dd5cb] = {
                        'tintEffect': _0x388ee1,
                        'tintTL': _0x136e3b,
                        'tintTR': _0x56efbb,
                        'tintBL': _0xde3c87,
                        'tintBR': _0x1fbfb1
                    };
                }
            }
            return this;
        },
        'setWordTint': function (_0x310643, _0x4e0ce4, _0x20f4a5, _0x40cb07, _0x41e1d1, _0x4da3aa, _0x49ce86) {
            var _0x2c2784 = _0x592d46;
            _0x4e0ce4 === undefined && (_0x4e0ce4 = 1);
            var _0x3088e4 = this[_0x2c2784(471)](), _0x674428 = _0x3088e4[_0x2c2784(472)], _0x9ec8f2 = typeof _0x310643 === 'number', _0x141641 = 0;
            for (var _0xb240b = 0; _0xb240b < _0x674428[_0x2c2784(473)]; _0xb240b++) {
                var _0x639e0f = _0x674428[_0xb240b];
                if (_0x9ec8f2 && _0xb240b === _0x310643 || !_0x9ec8f2 && _0x639e0f[_0x2c2784(474)] === _0x310643) {
                    this[_0x2c2784(475)](_0x639e0f['i'], _0x639e0f['word'][_0x2c2784(473)], _0x20f4a5, _0x40cb07, _0x41e1d1, _0x4da3aa, _0x49ce86), _0x141641++;
                    if (_0x141641 === _0x4e0ce4)
                        return this;
                }
            }
            return this;
        },
        'getTextBounds': function (_0xf6ba56) {
            var _0x33a81d = _0x592d46, _0x173b31 = this[_0x33a81d(476)];
            return (this[_0x33a81d(445)] || _0xf6ba56 || this[_0x33a81d(477)] !== _0x173b31[_0x33a81d(477)] || this[_0x33a81d(478)] !== _0x173b31[_0x33a81d(478)]) && (GetBitmapTextSize(this, _0xf6ba56, !![], _0x173b31), this['_dirty'] = ![]), _0x173b31;
        },
        'getCharacterAt': function (_0x6529b5, _0x10f1d9, _0x6e882e) {
            var _0x567d45 = _0x592d46, _0x11d459 = this[_0x567d45(479)](_0x6529b5, _0x10f1d9, null, _0x6e882e), _0x5396d8 = this[_0x567d45(471)](), _0x50c022 = _0x5396d8['characters'], _0x5c82bf = new Rectangle();
            for (var _0x40b8c8 = 0; _0x40b8c8 < _0x50c022['length']; _0x40b8c8++) {
                var _0x1c0854 = _0x50c022[_0x40b8c8];
                _0x5c82bf[_0x567d45(480)](_0x1c0854['x'], _0x1c0854['t'], _0x1c0854['r'] - _0x1c0854['x'], _0x1c0854['b']);
                if (_0x5c82bf[_0x567d45(481)](_0x11d459['x'], _0x11d459['y']))
                    return _0x1c0854;
            }
            return null;
        },
        'updateDisplayOrigin': function () {
            var _0x58efbd = _0x592d46;
            return this[_0x58efbd(445)] = !![], this[_0x58efbd(471)](![]), this;
        },
        'setFont': function (_0x4fd6b0, _0x5b50c1, _0x31420e) {
            var _0x4bf5e4 = _0x592d46;
            _0x5b50c1 === undefined && (_0x5b50c1 = this[_0x4bf5e4(460)]);
            _0x31420e === undefined && (_0x31420e = this['_align']);
            if (_0x4fd6b0 !== this[_0x4bf5e4(435)]) {
                var _0x3141a3 = this[_0x4bf5e4(482)][_0x4bf5e4(436)][_0x4bf5e4(437)][_0x4bf5e4(483)][_0x4bf5e4(438)](_0x4fd6b0);
                _0x3141a3 && (this['font'] = _0x4fd6b0, this[_0x4bf5e4(441)] = _0x3141a3[_0x4bf5e4(442)], this[_0x4bf5e4(460)] = _0x5b50c1, this[_0x4bf5e4(456)] = _0x31420e, this[_0x4bf5e4(450)] = _0x3141a3[_0x4bf5e4(450)] === !![], this[_0x4bf5e4(484)](_0x3141a3[_0x4bf5e4(451)], _0x3141a3[_0x4bf5e4(452)]), GetBitmapTextSize(this, ![], !![], this[_0x4bf5e4(476)]));
            }
            return this;
        },
        'setMaxWidth': function (_0x1f1b08, _0x21333c) {
            var _0x1c5640 = _0x592d46;
            return this['_maxWidth'] = _0x1f1b08, this[_0x1c5640(445)] = !![], _0x21333c !== undefined && (this[_0x1c5640(447)] = _0x21333c), this;
        },
        'align': {
            'set': function (_0x9b16e2) {
                var _0x5e77f0 = _0x592d46;
                this[_0x5e77f0(456)] = _0x9b16e2, this[_0x5e77f0(445)] = !![];
            },
            'get': function () {
                var _0x4aebd1 = _0x592d46;
                return this[_0x4aebd1(456)];
            }
        },
        'text': {
            'set': function (_0x54d7a9) {
                var _0x48a842 = _0x592d46;
                this[_0x48a842(455)](_0x54d7a9);
            },
            'get': function () {
                var _0xd881b4 = _0x592d46;
                return this[_0xd881b4(443)];
            }
        },
        'fontSize': {
            'set': function (_0x45ef98) {
                var _0x3fd345 = _0x592d46;
                this['_fontSize'] = _0x45ef98, this[_0x3fd345(445)] = !![];
            },
            'get': function () {
                var _0x2b47fc = _0x592d46;
                return this[_0x2b47fc(460)];
            }
        },
        'letterSpacing': {
            'set': function (_0x504914) {
                var _0x3c795c = _0x592d46;
                this['_letterSpacing'] = _0x504914, this[_0x3c795c(445)] = !![];
            },
            'get': function () {
                return this['_letterSpacing'];
            }
        },
        'maxWidth': {
            'set': function (_0x1adcf4) {
                var _0x37b997 = _0x592d46;
                this[_0x37b997(446)] = _0x1adcf4, this[_0x37b997(445)] = !![];
            },
            'get': function () {
                return this['_maxWidth'];
            }
        },
        'width': {
            'get': function () {
                var _0xa6c8ce = _0x592d46;
                return this['getTextBounds'](![]), this['_bounds'][_0xa6c8ce(485)]['width'];
            }
        },
        'height': {
            'get': function () {
                var _0x575957 = _0x592d46;
                return this[_0x575957(471)](![]), this['_bounds']['global'][_0x575957(486)];
            }
        },
        'toJSON': function () {
            var _0x2bbe2b = _0x592d46, _0x268563 = Components['ToJSON'](this), _0x3267a6 = {
                    'font': this[_0x2bbe2b(435)],
                    'text': this[_0x2bbe2b(462)],
                    'fontSize': this[_0x2bbe2b(487)],
                    'letterSpacing': this[_0x2bbe2b(488)],
                    'align': this['align']
                };
            return _0x268563[_0x2bbe2b(442)] = _0x3267a6, _0x268563;
        },
        'preDestroy': function () {
            var _0x4215ef = _0x592d46;
            this['charColors'][_0x4215ef(473)] = 0, this[_0x4215ef(476)] = null, this[_0x4215ef(441)] = null;
        }
    });
BitmapText[_0x592d46(457)] = 0, BitmapText[_0x592d46(458)] = 1, BitmapText['ALIGN_RIGHT'] = 2, BitmapText[_0x592d46(489)] = ParseFromAtlas, BitmapText[_0x592d46(490)] = ParseXMLBitmapFont, module[_0x592d46(491)] = BitmapText;
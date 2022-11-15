/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x4633 = [
    'ALIGN_CENTER',
    'ALIGN_RIGHT',
    '_fontSize',
    'join',
    'text',
    'updateDisplayOrigin',
    'dropShadowColor',
    'charColors',
    'tintEffect',
    'tintTL',
    'tintTR',
    'tintBL',
    'tintBR',
    'getTextBounds',
    'words',
    'length',
    'word',
    'setCharacterTint',
    '_bounds',
    'scaleX',
    'scaleY',
    'getLocalPoint',
    'setTo',
    'contains',
    'scene',
    'bitmapFont',
    'setTexture',
    'global',
    'height',
    'fontSize',
    'letterSpacing',
    'ParseFromAtlas',
    'ParseXMLBitmapFont',
    'exports',
    '1377674sYuxuy',
    '533054DsXinK',
    '2IRftIn',
    '406883eOGAGk',
    '1526437hvJgTD',
    '89337EzapVN',
    '8MjFZqg',
    '1137625FRmUKb',
    '4209562zKhdSE',
    '../../../math/Clamp',
    '../../components',
    '../../GameObject',
    '../GetBitmapTextSize',
    '../ParseFromAtlas',
    '../../../geom/rectangle/Rectangle',
    './BitmapTextRender',
    'Alpha',
    'Depth',
    'Mask',
    'Origin',
    'Pipeline',
    'ScrollFactor',
    'Texture',
    'Tint',
    'Transform',
    'Visible',
    'call',
    'BitmapText',
    'font',
    'sys',
    'cache',
    'get',
    'warn',
    'Invalid\x20BitmapText\x20key:\x20',
    'fontData',
    'data',
    '_text',
    '_letterSpacing',
    '_dirty',
    '_maxWidth',
    'wordWrapCharCode',
    'dropShadowY',
    'dropShadowAlpha',
    'fromAtlas',
    'texture',
    'frame',
    'setOrigin',
    'initPipeline',
    'setText',
    '_align',
    'ALIGN_LEFT'
];
var _0x592d46 = _0x1ecd;
function _0x1ecd(_0x53d6a3, _0x5db6c9) {
    return _0x1ecd = function (_0x463343, _0x1ecd54) {
        _0x463343 = _0x463343 - 0x197;
        var _0x1debd6 = _0x4633[_0x463343];
        return _0x1debd6;
    }, _0x1ecd(_0x53d6a3, _0x5db6c9);
}
(function (_0x202d54, _0x50164d) {
    var _0x1cd46c = _0x1ecd;
    while (!![]) {
        try {
            var _0x1d9c36 = -parseInt(_0x1cd46c(0x197)) + -parseInt(_0x1cd46c(0x198)) * -parseInt(_0x1cd46c(0x199)) + parseInt(_0x1cd46c(0x19a)) + -parseInt(_0x1cd46c(0x19b)) + parseInt(_0x1cd46c(0x19c)) * -parseInt(_0x1cd46c(0x19d)) + -parseInt(_0x1cd46c(0x19e)) + parseInt(_0x1cd46c(0x19f));
            if (_0x1d9c36 === _0x50164d)
                break;
            else
                _0x202d54['push'](_0x202d54['shift']());
        } catch (_0x4f8ff6) {
            _0x202d54['push'](_0x202d54['shift']());
        }
    }
}(_0x4633, 0xe21a9));
var Class = require('../../../utils/Class'), Clamp = require(_0x592d46(0x1a0)), Components = require(_0x592d46(0x1a1)), GameObject = require(_0x592d46(0x1a2)), GetBitmapTextSize = require(_0x592d46(0x1a3)), ParseFromAtlas = require(_0x592d46(0x1a4)), ParseXMLBitmapFont = require('../ParseXMLBitmapFont'), Rectangle = require(_0x592d46(0x1a5)), Render = require(_0x592d46(0x1a6)), BitmapText = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components[_0x592d46(0x1a7)],
            Components['BlendMode'],
            Components[_0x592d46(0x1a8)],
            Components[_0x592d46(0x1a9)],
            Components[_0x592d46(0x1aa)],
            Components[_0x592d46(0x1ab)],
            Components[_0x592d46(0x1ac)],
            Components[_0x592d46(0x1ad)],
            Components[_0x592d46(0x1ae)],
            Components[_0x592d46(0x1af)],
            Components[_0x592d46(0x1b0)],
            Render
        ],
        'initialize': function BitmapText(_0x52aa39, _0x5c6354, _0x3d00a4, _0x279c71, _0xf47fd8, _0x41771c, _0x36fbe6) {
            var _0x1651b7 = _0x592d46;
            _0xf47fd8 === undefined && (_0xf47fd8 = '');
            _0x36fbe6 === undefined && (_0x36fbe6 = 0x0);
            GameObject[_0x1651b7(0x1b1)](this, _0x52aa39, _0x1651b7(0x1b2)), this[_0x1651b7(0x1b3)] = _0x279c71;
            var _0x45edb8 = this['scene'][_0x1651b7(0x1b4)][_0x1651b7(0x1b5)]['bitmapFont'][_0x1651b7(0x1b6)](_0x279c71);
            !_0x45edb8 && console[_0x1651b7(0x1b7)](_0x1651b7(0x1b8) + _0x279c71), this[_0x1651b7(0x1b9)] = _0x45edb8[_0x1651b7(0x1ba)], this[_0x1651b7(0x1bb)] = '', this['_fontSize'] = _0x41771c || this['fontData']['size'], this[_0x1651b7(0x1bc)] = 0x0, this['_align'] = _0x36fbe6, this['_bounds'] = GetBitmapTextSize(), this[_0x1651b7(0x1bd)] = !![], this[_0x1651b7(0x1be)] = 0x0, this[_0x1651b7(0x1bf)] = 0x20, this['charColors'] = [], this['dropShadowX'] = 0x0, this[_0x1651b7(0x1c0)] = 0x0, this['dropShadowColor'] = 0x0, this[_0x1651b7(0x1c1)] = 0.5, this[_0x1651b7(0x1c2)] = _0x45edb8[_0x1651b7(0x1c2)], this['setTexture'](_0x45edb8[_0x1651b7(0x1c3)], _0x45edb8[_0x1651b7(0x1c4)]), this['setPosition'](_0x5c6354, _0x3d00a4), this[_0x1651b7(0x1c5)](0x0, 0x0), this[_0x1651b7(0x1c6)](), this[_0x1651b7(0x1c7)](_0xf47fd8);
        },
        'setLeftAlign': function () {
            var _0x39b9a3 = _0x592d46;
            return this[_0x39b9a3(0x1c8)] = BitmapText[_0x39b9a3(0x1c9)], this['_dirty'] = !![], this;
        },
        'setCenterAlign': function () {
            var _0x165bcc = _0x592d46;
            return this[_0x165bcc(0x1c8)] = BitmapText[_0x165bcc(0x1ca)], this[_0x165bcc(0x1bd)] = !![], this;
        },
        'setRightAlign': function () {
            var _0x2c2b71 = _0x592d46;
            return this[_0x2c2b71(0x1c8)] = BitmapText[_0x2c2b71(0x1cb)], this['_dirty'] = !![], this;
        },
        'setFontSize': function (_0x19363c) {
            var _0x51d60a = _0x592d46;
            return this[_0x51d60a(0x1cc)] = _0x19363c, this['_dirty'] = !![], this;
        },
        'setLetterSpacing': function (_0x523d93) {
            var _0x5fe8e5 = _0x592d46;
            return _0x523d93 === undefined && (_0x523d93 = 0x0), this[_0x5fe8e5(0x1bc)] = _0x523d93, this['_dirty'] = !![], this;
        },
        'setText': function (_0x1172a6) {
            var _0x484d9b = _0x592d46;
            return !_0x1172a6 && _0x1172a6 !== 0x0 && (_0x1172a6 = ''), Array['isArray'](_0x1172a6) && (_0x1172a6 = _0x1172a6[_0x484d9b(0x1cd)]('\x0a')), _0x1172a6 !== this[_0x484d9b(0x1ce)] && (this[_0x484d9b(0x1bb)] = _0x1172a6['toString'](), this[_0x484d9b(0x1bd)] = !![], this[_0x484d9b(0x1cf)]()), this;
        },
        'setDropShadow': function (_0x258389, _0x195bc3, _0x3ceeb7, _0x5bee69) {
            var _0x5193eb = _0x592d46;
            return _0x258389 === undefined && (_0x258389 = 0x0), _0x195bc3 === undefined && (_0x195bc3 = 0x0), _0x3ceeb7 === undefined && (_0x3ceeb7 = 0x0), _0x5bee69 === undefined && (_0x5bee69 = 0.5), this['dropShadowX'] = _0x258389, this[_0x5193eb(0x1c0)] = _0x195bc3, this[_0x5193eb(0x1d0)] = _0x3ceeb7, this[_0x5193eb(0x1c1)] = _0x5bee69, this;
        },
        'setCharacterTint': function (_0x2d6d4e, _0x441338, _0x32c019, _0x136e3b, _0x56efbb, _0xde3c87, _0x1fbfb1) {
            var _0x9dde0f = _0x592d46;
            _0x2d6d4e === undefined && (_0x2d6d4e = 0x0);
            _0x441338 === undefined && (_0x441338 = 0x1);
            _0x32c019 === undefined && (_0x32c019 = ![]);
            _0x136e3b === undefined && (_0x136e3b = -0x1);
            _0x56efbb === undefined && (_0x56efbb = _0x136e3b, _0xde3c87 = _0x136e3b, _0x1fbfb1 = _0x136e3b);
            var _0x1ff45d = this['text']['length'];
            _0x441338 === -0x1 && (_0x441338 = _0x1ff45d);
            _0x2d6d4e < 0x0 && (_0x2d6d4e = _0x1ff45d + _0x2d6d4e);
            _0x2d6d4e = Clamp(_0x2d6d4e, 0x0, _0x1ff45d - 0x1);
            var _0x565cd4 = Clamp(_0x2d6d4e + _0x441338, _0x2d6d4e, _0x1ff45d), _0x34accf = this[_0x9dde0f(0x1d1)];
            for (var _0x3dd5cb = _0x2d6d4e; _0x3dd5cb < _0x565cd4; _0x3dd5cb++) {
                var _0x2d7978 = _0x34accf[_0x3dd5cb];
                if (_0x136e3b === -0x1)
                    _0x34accf[_0x3dd5cb] = null;
                else {
                    var _0x388ee1 = _0x32c019 ? 0x1 : 0x0;
                    _0x2d7978 ? (_0x2d7978[_0x9dde0f(0x1d2)] = _0x388ee1, _0x2d7978[_0x9dde0f(0x1d3)] = _0x136e3b, _0x2d7978[_0x9dde0f(0x1d4)] = _0x56efbb, _0x2d7978[_0x9dde0f(0x1d5)] = _0xde3c87, _0x2d7978[_0x9dde0f(0x1d6)] = _0x1fbfb1) : _0x34accf[_0x3dd5cb] = {
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
            _0x4e0ce4 === undefined && (_0x4e0ce4 = 0x1);
            var _0x3088e4 = this[_0x2c2784(0x1d7)](), _0x674428 = _0x3088e4[_0x2c2784(0x1d8)], _0x9ec8f2 = typeof _0x310643 === 'number', _0x141641 = 0x0;
            for (var _0xb240b = 0x0; _0xb240b < _0x674428[_0x2c2784(0x1d9)]; _0xb240b++) {
                var _0x639e0f = _0x674428[_0xb240b];
                if (_0x9ec8f2 && _0xb240b === _0x310643 || !_0x9ec8f2 && _0x639e0f[_0x2c2784(0x1da)] === _0x310643) {
                    this[_0x2c2784(0x1db)](_0x639e0f['i'], _0x639e0f['word'][_0x2c2784(0x1d9)], _0x20f4a5, _0x40cb07, _0x41e1d1, _0x4da3aa, _0x49ce86), _0x141641++;
                    if (_0x141641 === _0x4e0ce4)
                        return this;
                }
            }
            return this;
        },
        'getTextBounds': function (_0xf6ba56) {
            var _0x33a81d = _0x592d46, _0x173b31 = this[_0x33a81d(0x1dc)];
            return (this[_0x33a81d(0x1bd)] || _0xf6ba56 || this[_0x33a81d(0x1dd)] !== _0x173b31[_0x33a81d(0x1dd)] || this[_0x33a81d(0x1de)] !== _0x173b31[_0x33a81d(0x1de)]) && (GetBitmapTextSize(this, _0xf6ba56, !![], _0x173b31), this['_dirty'] = ![]), _0x173b31;
        },
        'getCharacterAt': function (_0x6529b5, _0x10f1d9, _0x6e882e) {
            var _0x567d45 = _0x592d46, _0x11d459 = this[_0x567d45(0x1df)](_0x6529b5, _0x10f1d9, null, _0x6e882e), _0x5396d8 = this[_0x567d45(0x1d7)](), _0x50c022 = _0x5396d8['characters'], _0x5c82bf = new Rectangle();
            for (var _0x40b8c8 = 0x0; _0x40b8c8 < _0x50c022['length']; _0x40b8c8++) {
                var _0x1c0854 = _0x50c022[_0x40b8c8];
                _0x5c82bf[_0x567d45(0x1e0)](_0x1c0854['x'], _0x1c0854['t'], _0x1c0854['r'] - _0x1c0854['x'], _0x1c0854['b']);
                if (_0x5c82bf[_0x567d45(0x1e1)](_0x11d459['x'], _0x11d459['y']))
                    return _0x1c0854;
            }
            return null;
        },
        'updateDisplayOrigin': function () {
            var _0x58efbd = _0x592d46;
            return this[_0x58efbd(0x1bd)] = !![], this[_0x58efbd(0x1d7)](![]), this;
        },
        'setFont': function (_0x4fd6b0, _0x5b50c1, _0x31420e) {
            var _0x4bf5e4 = _0x592d46;
            _0x5b50c1 === undefined && (_0x5b50c1 = this[_0x4bf5e4(0x1cc)]);
            _0x31420e === undefined && (_0x31420e = this['_align']);
            if (_0x4fd6b0 !== this[_0x4bf5e4(0x1b3)]) {
                var _0x3141a3 = this[_0x4bf5e4(0x1e2)][_0x4bf5e4(0x1b4)][_0x4bf5e4(0x1b5)][_0x4bf5e4(0x1e3)][_0x4bf5e4(0x1b6)](_0x4fd6b0);
                _0x3141a3 && (this['font'] = _0x4fd6b0, this[_0x4bf5e4(0x1b9)] = _0x3141a3[_0x4bf5e4(0x1ba)], this[_0x4bf5e4(0x1cc)] = _0x5b50c1, this[_0x4bf5e4(0x1c8)] = _0x31420e, this[_0x4bf5e4(0x1c2)] = _0x3141a3[_0x4bf5e4(0x1c2)] === !![], this[_0x4bf5e4(0x1e4)](_0x3141a3[_0x4bf5e4(0x1c3)], _0x3141a3[_0x4bf5e4(0x1c4)]), GetBitmapTextSize(this, ![], !![], this[_0x4bf5e4(0x1dc)]));
            }
            return this;
        },
        'setMaxWidth': function (_0x1f1b08, _0x21333c) {
            var _0x1c5640 = _0x592d46;
            return this['_maxWidth'] = _0x1f1b08, this[_0x1c5640(0x1bd)] = !![], _0x21333c !== undefined && (this[_0x1c5640(0x1bf)] = _0x21333c), this;
        },
        'align': {
            'set': function (_0x9b16e2) {
                var _0x5e77f0 = _0x592d46;
                this[_0x5e77f0(0x1c8)] = _0x9b16e2, this[_0x5e77f0(0x1bd)] = !![];
            },
            'get': function () {
                var _0x4aebd1 = _0x592d46;
                return this[_0x4aebd1(0x1c8)];
            }
        },
        'text': {
            'set': function (_0x54d7a9) {
                var _0x48a842 = _0x592d46;
                this[_0x48a842(0x1c7)](_0x54d7a9);
            },
            'get': function () {
                var _0xd881b4 = _0x592d46;
                return this[_0xd881b4(0x1bb)];
            }
        },
        'fontSize': {
            'set': function (_0x45ef98) {
                var _0x3fd345 = _0x592d46;
                this['_fontSize'] = _0x45ef98, this[_0x3fd345(0x1bd)] = !![];
            },
            'get': function () {
                var _0x2b47fc = _0x592d46;
                return this[_0x2b47fc(0x1cc)];
            }
        },
        'letterSpacing': {
            'set': function (_0x504914) {
                var _0x3c795c = _0x592d46;
                this['_letterSpacing'] = _0x504914, this[_0x3c795c(0x1bd)] = !![];
            },
            'get': function () {
                return this['_letterSpacing'];
            }
        },
        'maxWidth': {
            'set': function (_0x1adcf4) {
                var _0x37b997 = _0x592d46;
                this[_0x37b997(0x1be)] = _0x1adcf4, this[_0x37b997(0x1bd)] = !![];
            },
            'get': function () {
                return this['_maxWidth'];
            }
        },
        'width': {
            'get': function () {
                var _0xa6c8ce = _0x592d46;
                return this['getTextBounds'](![]), this['_bounds'][_0xa6c8ce(0x1e5)]['width'];
            }
        },
        'height': {
            'get': function () {
                var _0x575957 = _0x592d46;
                return this[_0x575957(0x1d7)](![]), this['_bounds']['global'][_0x575957(0x1e6)];
            }
        },
        'toJSON': function () {
            var _0x2bbe2b = _0x592d46, _0x268563 = Components['ToJSON'](this), _0x3267a6 = {
                    'font': this[_0x2bbe2b(0x1b3)],
                    'text': this[_0x2bbe2b(0x1ce)],
                    'fontSize': this[_0x2bbe2b(0x1e7)],
                    'letterSpacing': this[_0x2bbe2b(0x1e8)],
                    'align': this['align']
                };
            return _0x268563[_0x2bbe2b(0x1ba)] = _0x3267a6, _0x268563;
        },
        'preDestroy': function () {
            var _0x4215ef = _0x592d46;
            this['charColors'][_0x4215ef(0x1d9)] = 0x0, this[_0x4215ef(0x1dc)] = null, this[_0x4215ef(0x1b9)] = null;
        }
    });
BitmapText[_0x592d46(0x1c9)] = 0x0, BitmapText[_0x592d46(0x1ca)] = 0x1, BitmapText['ALIGN_RIGHT'] = 0x2, BitmapText[_0x592d46(0x1e9)] = ParseFromAtlas, BitmapText[_0x592d46(0x1ea)] = ParseXMLBitmapFont, module[_0x592d46(0x1eb)] = BitmapText;

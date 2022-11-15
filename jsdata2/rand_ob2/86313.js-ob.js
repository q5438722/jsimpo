/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0xb134 = [
    'setFont',
    'setFontStyle',
    'setFixedSize',
    'setBackgroundColor',
    'setFill',
    'setColor',
    'setStroke',
    'setShadow',
    'setShadowOffset',
    'setShadowColor',
    'setShadowBlur',
    'setShadowStroke',
    'setShadowFill',
    'setWordWrapWidth',
    'setWordWrapCallback',
    'setAlign',
    'object',
    'left',
    'right',
    'top',
    'setMaxLines',
    'metrics',
    'fixedWidth',
    'fixedHeight',
    'bottom',
    'updateDisplayOrigin',
    'setSize',
    'syncFont',
    'clearRect',
    'save',
    'scale',
    'backgroundColor',
    'fillRect',
    'syncStyle',
    'textBaseline',
    'translate',
    'lines',
    'strokeThickness',
    'lineHeight',
    'ascent',
    'align',
    'center',
    'lineWidths',
    'justify',
    'trim',
    'floor',
    'autoRound',
    'round',
    'syncShadow',
    'strokeText',
    'color',
    'shadowFill',
    'fillText',
    'restore',
    'canvasToTexture',
    'customHitArea',
    'hitArea',
    'getTextMetrics',
    'toJSON',
    'data',
    'remove',
    'destroy',
    '130050TdTGmf',
    '224634pKllFw',
    '233118rsHSkD',
    '61823gigtQH',
    '4HFbtlP',
    '8306VTcZmg',
    '23FuxwjO',
    '152884yMmJBS',
    '15231DJiItH',
    '3JGYHMe',
    '../../utils/Class',
    '../components',
    '../../core/events',
    '../GameObject',
    './GetTextSize',
    './TextRender',
    './TextStyle',
    'BlendMode',
    'ComputedSize',
    'Crop',
    'Depth',
    'Flip',
    'GetBounds',
    'Mask',
    'Origin',
    'ScrollFactor',
    'Tint',
    'Transform',
    'Visible',
    'call',
    'Text',
    'renderer',
    'setPosition',
    'initPipeline',
    'canvas',
    'create',
    'context',
    'getContext',
    'style',
    '_text',
    'padding',
    'width',
    'height',
    'dirty',
    'resolution',
    'sys',
    'textures',
    'frame',
    'texture',
    'get',
    'deleteTexture',
    'source',
    'glTexture',
    'initRTL',
    'setText',
    'setPadding',
    'lineSpacing',
    'setLineSpacing',
    'game',
    'events',
    'CONTEXT_RESTORED',
    'rtl',
    'dir',
    'direction',
    'display',
    'none',
    'originX',
    'wordWrapCallback',
    'wordWrapCallbackScope',
    'join',
    'wordWrapWidth',
    'wordWrapUseAdvanced',
    'replace',
    'split',
    'splitRegExp',
    'length',
    'measureText',
    'slice',
    'This\x20text\x27s\x20wordWrapWidth\x20setting\x20is\x20less\x20than\x20a\x20single\x20character!',
    'runWordWrap',
    'isArray',
    'updateText',
    'setStyle'
];
var _0xe20b9c = _0x21c9;
(function (_0xba301e, _0x3aed68) {
    var _0x25364e = _0x21c9;
    while (!![]) {
        try {
            var _0x35ae58 = -parseInt(_0x25364e(0x150)) + -parseInt(_0x25364e(0x151)) + parseInt(_0x25364e(0x152)) + parseInt(_0x25364e(0x153)) * parseInt(_0x25364e(0x154)) + -parseInt(_0x25364e(0x155)) * parseInt(_0x25364e(0x156)) + parseInt(_0x25364e(0x157)) + -parseInt(_0x25364e(0x158)) * -parseInt(_0x25364e(0x159));
            if (_0x35ae58 === _0x3aed68)
                break;
            else
                _0xba301e['push'](_0xba301e['shift']());
        } catch (_0x2e05c7) {
            _0xba301e['push'](_0xba301e['shift']());
        }
    }
}(_0xb134, 0x20891));
var AddToDOM = require('../../dom/AddToDOM'), CanvasPool = require('../../display/canvas/CanvasPool'), Class = require(_0xe20b9c(0x15a)), Components = require(_0xe20b9c(0x15b)), GameEvents = require(_0xe20b9c(0x15c)), GameObject = require(_0xe20b9c(0x15d)), GetTextSize = require(_0xe20b9c(0x15e)), GetValue = require('../../utils/object/GetValue'), RemoveFromDOM = require('../../dom/RemoveFromDOM'), TextRender = require(_0xe20b9c(0x15f)), TextStyle = require(_0xe20b9c(0x160)), Text = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components['Alpha'],
            Components[_0xe20b9c(0x161)],
            Components[_0xe20b9c(0x162)],
            Components[_0xe20b9c(0x163)],
            Components[_0xe20b9c(0x164)],
            Components[_0xe20b9c(0x165)],
            Components[_0xe20b9c(0x166)],
            Components[_0xe20b9c(0x167)],
            Components[_0xe20b9c(0x168)],
            Components['Pipeline'],
            Components[_0xe20b9c(0x169)],
            Components[_0xe20b9c(0x16a)],
            Components[_0xe20b9c(0x16b)],
            Components[_0xe20b9c(0x16c)],
            TextRender
        ],
        'initialize': function Text(_0x36368d, _0x2dc67b, _0x2e2bf7, _0x46287f, _0x267536) {
            var _0x48449e = _0xe20b9c;
            _0x2dc67b === undefined && (_0x2dc67b = 0x0), _0x2e2bf7 === undefined && (_0x2e2bf7 = 0x0), GameObject[_0x48449e(0x16d)](this, _0x36368d, _0x48449e(0x16e)), this[_0x48449e(0x16f)] = _0x36368d['sys'][_0x48449e(0x16f)], this[_0x48449e(0x170)](_0x2dc67b, _0x2e2bf7), this['setOrigin'](0x0, 0x0), this[_0x48449e(0x171)](), this[_0x48449e(0x172)] = CanvasPool[_0x48449e(0x173)](this), this[_0x48449e(0x174)] = this[_0x48449e(0x172)][_0x48449e(0x175)]('2d'), this[_0x48449e(0x176)] = new TextStyle(this, _0x267536), this['autoRound'] = !![], this['splitRegExp'] = /(?:\r\n|\r|\n)/, this[_0x48449e(0x177)] = undefined, this[_0x48449e(0x178)] = {
                'left': 0x0,
                'right': 0x0,
                'top': 0x0,
                'bottom': 0x0
            }, this[_0x48449e(0x179)] = 0x1, this[_0x48449e(0x17a)] = 0x1, this['lineSpacing'] = 0x0, this[_0x48449e(0x17b)] = ![], this[_0x48449e(0x176)][_0x48449e(0x17c)] === 0x0 && (this[_0x48449e(0x176)][_0x48449e(0x17c)] = 0x1), this['_crop'] = this['resetCropObject'](), this['texture'] = _0x36368d[_0x48449e(0x17d)][_0x48449e(0x17e)]['addCanvas'](null, this[_0x48449e(0x172)], !![]), this[_0x48449e(0x17f)] = this[_0x48449e(0x180)][_0x48449e(0x181)](), this[_0x48449e(0x17f)]['source'][_0x48449e(0x17c)] = this['style']['resolution'], this[_0x48449e(0x16f)] && this[_0x48449e(0x16f)]['gl'] && (this[_0x48449e(0x16f)][_0x48449e(0x182)](this[_0x48449e(0x17f)][_0x48449e(0x183)][_0x48449e(0x184)]), this['frame'][_0x48449e(0x183)][_0x48449e(0x184)] = null), this[_0x48449e(0x185)](), this[_0x48449e(0x186)](_0x46287f), _0x267536 && _0x267536['padding'] && this[_0x48449e(0x187)](_0x267536[_0x48449e(0x178)]), _0x267536 && _0x267536[_0x48449e(0x188)] && this[_0x48449e(0x189)](_0x267536[_0x48449e(0x188)]), _0x36368d[_0x48449e(0x17d)][_0x48449e(0x18a)][_0x48449e(0x18b)]['on'](GameEvents[_0x48449e(0x18c)], function () {
                var _0x53bcce = _0x48449e;
                this[_0x53bcce(0x17b)] = !![];
            }, this);
        },
        'initRTL': function () {
            var _0x563504 = _0xe20b9c;
            if (!this[_0x563504(0x176)][_0x563504(0x18d)])
                return;
            this[_0x563504(0x172)][_0x563504(0x18e)] = _0x563504(0x18d), this[_0x563504(0x174)][_0x563504(0x18f)] = _0x563504(0x18d), this[_0x563504(0x172)][_0x563504(0x176)][_0x563504(0x190)] = _0x563504(0x191), AddToDOM(this['canvas'], this['scene'][_0x563504(0x17d)][_0x563504(0x172)]), this[_0x563504(0x192)] = 0x1;
        },
        'runWordWrap': function (_0x27030a) {
            var _0x479788 = _0xe20b9c, _0x31a97c = this[_0x479788(0x176)];
            if (_0x31a97c[_0x479788(0x193)]) {
                var _0x22147a = _0x31a97c[_0x479788(0x193)][_0x479788(0x16d)](_0x31a97c[_0x479788(0x194)], _0x27030a, this);
                return Array['isArray'](_0x22147a) && (_0x22147a = _0x22147a[_0x479788(0x195)]('\x0a')), _0x22147a;
            } else
                return _0x31a97c[_0x479788(0x196)] ? _0x31a97c[_0x479788(0x197)] ? this['advancedWordWrap'](_0x27030a, this[_0x479788(0x174)], this[_0x479788(0x176)]['wordWrapWidth']) : this['basicWordWrap'](_0x27030a, this[_0x479788(0x174)], this[_0x479788(0x176)][_0x479788(0x196)]) : _0x27030a;
        },
        'advancedWordWrap': function (_0x3cb2ea, _0x4effde, _0x2ad404) {
            var _0x5d259e = _0xe20b9c, _0x2d8bb0 = '', _0x57a1dc = _0x3cb2ea[_0x5d259e(0x198)](/ +/gi, '\x20')[_0x5d259e(0x199)](this[_0x5d259e(0x19a)]), _0x4e9ff6 = _0x57a1dc['length'];
            for (var _0x2feb22 = 0x0; _0x2feb22 < _0x4e9ff6; _0x2feb22++) {
                var _0x300e49 = _0x57a1dc[_0x2feb22], _0x3078a5 = '';
                _0x300e49 = _0x300e49[_0x5d259e(0x198)](/^ *|\s*$/gi, '');
                var _0x4f6f79 = _0x4effde['measureText'](_0x300e49)['width'];
                if (_0x4f6f79 < _0x2ad404) {
                    _0x2d8bb0 += _0x300e49 + '\x0a';
                    continue;
                }
                var _0x94fe90 = _0x2ad404, _0x4a4f56 = _0x300e49[_0x5d259e(0x199)]('\x20');
                for (var _0x186b95 = 0x0; _0x186b95 < _0x4a4f56[_0x5d259e(0x19b)]; _0x186b95++) {
                    var _0x4c71df = _0x4a4f56[_0x186b95], _0x5309b7 = _0x4c71df + '\x20', _0x1392af = _0x4effde[_0x5d259e(0x19c)](_0x5309b7)[_0x5d259e(0x179)];
                    if (_0x1392af > _0x94fe90) {
                        if (_0x186b95 === 0x0) {
                            var _0x136b64 = _0x5309b7;
                            while (_0x136b64[_0x5d259e(0x19b)]) {
                                _0x136b64 = _0x136b64[_0x5d259e(0x19d)](0x0, -0x1), _0x1392af = _0x4effde[_0x5d259e(0x19c)](_0x136b64)[_0x5d259e(0x179)];
                                if (_0x1392af <= _0x94fe90)
                                    break;
                            }
                            if (!_0x136b64[_0x5d259e(0x19b)])
                                throw new Error(_0x5d259e(0x19e));
                            var _0x74faf1 = _0x4c71df['substr'](_0x136b64[_0x5d259e(0x19b)]);
                            _0x4a4f56[_0x186b95] = _0x74faf1, _0x3078a5 += _0x136b64;
                        }
                        var _0x3487b6 = _0x4a4f56[_0x186b95][_0x5d259e(0x19b)] ? _0x186b95 : _0x186b95 + 0x1, _0x1a054b = _0x4a4f56[_0x5d259e(0x19d)](_0x3487b6)[_0x5d259e(0x195)]('\x20')['replace'](/[ \n]*$/gi, '');
                        _0x57a1dc[_0x2feb22 + 0x1] = _0x1a054b + '\x20' + (_0x57a1dc[_0x2feb22 + 0x1] || ''), _0x4e9ff6 = _0x57a1dc[_0x5d259e(0x19b)];
                        break;
                    } else
                        _0x3078a5 += _0x5309b7, _0x94fe90 -= _0x1392af;
                }
                _0x2d8bb0 += _0x3078a5[_0x5d259e(0x198)](/[ \n]*$/gi, '') + '\x0a';
            }
            return _0x2d8bb0 = _0x2d8bb0[_0x5d259e(0x198)](/[\s|\n]*$/gi, ''), _0x2d8bb0;
        },
        'basicWordWrap': function (_0x1e0430, _0x534067, _0x226d78) {
            var _0x46ba84 = _0xe20b9c, _0x180740 = '', _0x1959bb = _0x1e0430['split'](this[_0x46ba84(0x19a)]), _0x130fdf = _0x1959bb[_0x46ba84(0x19b)] - 0x1, _0x3ea02f = _0x534067[_0x46ba84(0x19c)]('\x20')[_0x46ba84(0x179)];
            for (var _0x523cf2 = 0x0; _0x523cf2 <= _0x130fdf; _0x523cf2++) {
                var _0x1c48bc = _0x226d78, _0x4b7d2b = _0x1959bb[_0x523cf2][_0x46ba84(0x199)]('\x20'), _0x4ab059 = _0x4b7d2b[_0x46ba84(0x19b)] - 0x1;
                for (var _0x3b7916 = 0x0; _0x3b7916 <= _0x4ab059; _0x3b7916++) {
                    var _0x10d40b = _0x4b7d2b[_0x3b7916], _0x2bc02e = _0x534067[_0x46ba84(0x19c)](_0x10d40b)['width'], _0x5d38e5 = _0x2bc02e;
                    _0x3b7916 < _0x4ab059 && (_0x5d38e5 += _0x3ea02f), _0x5d38e5 > _0x1c48bc && (_0x3b7916 > 0x0 && (_0x180740 += '\x0a', _0x1c48bc = _0x226d78)), _0x180740 += _0x10d40b, _0x3b7916 < _0x4ab059 ? (_0x180740 += '\x20', _0x1c48bc -= _0x5d38e5) : _0x1c48bc -= _0x2bc02e;
                }
                _0x523cf2 < _0x130fdf && (_0x180740 += '\x0a');
            }
            return _0x180740;
        },
        'getWrappedText': function (_0x54745d) {
            var _0x3a429d = _0xe20b9c;
            _0x54745d === undefined && (_0x54745d = this[_0x3a429d(0x177)]);
            this[_0x3a429d(0x176)]['syncFont'](this[_0x3a429d(0x172)], this['context']);
            var _0x2010d4 = this[_0x3a429d(0x19f)](_0x54745d);
            return _0x2010d4[_0x3a429d(0x199)](this[_0x3a429d(0x19a)]);
        },
        'setText': function (_0x34b44c) {
            var _0x6abeeb = _0xe20b9c;
            return !_0x34b44c && _0x34b44c !== 0x0 && (_0x34b44c = ''), Array[_0x6abeeb(0x1a0)](_0x34b44c) && (_0x34b44c = _0x34b44c['join']('\x0a')), _0x34b44c !== this['_text'] && (this[_0x6abeeb(0x177)] = _0x34b44c['toString'](), this[_0x6abeeb(0x1a1)]()), this;
        },
        'setStyle': function (_0x299fa6) {
            var _0x1b7d1e = _0xe20b9c;
            return this[_0x1b7d1e(0x176)][_0x1b7d1e(0x1a2)](_0x299fa6);
        },
        'setFont': function (_0x31eedc) {
            var _0x427c96 = _0xe20b9c;
            return this['style'][_0x427c96(0x1a3)](_0x31eedc);
        },
        'setFontFamily': function (_0x4911a5) {
            return this['style']['setFontFamily'](_0x4911a5);
        },
        'setFontSize': function (_0x79cf2e) {
            var _0x19ccd6 = _0xe20b9c;
            return this[_0x19ccd6(0x176)]['setFontSize'](_0x79cf2e);
        },
        'setFontStyle': function (_0x907ad5) {
            var _0x2bc1d4 = _0xe20b9c;
            return this[_0x2bc1d4(0x176)][_0x2bc1d4(0x1a4)](_0x907ad5);
        },
        'setFixedSize': function (_0x3228ab, _0x1e0982) {
            var _0x280d3d = _0xe20b9c;
            return this[_0x280d3d(0x176)][_0x280d3d(0x1a5)](_0x3228ab, _0x1e0982);
        },
        'setBackgroundColor': function (_0x50dbdc) {
            var _0x1436c7 = _0xe20b9c;
            return this['style'][_0x1436c7(0x1a6)](_0x50dbdc);
        },
        'setFill': function (_0x2de726) {
            var _0x2021ca = _0xe20b9c;
            return this['style'][_0x2021ca(0x1a7)](_0x2de726);
        },
        'setColor': function (_0x1f702b) {
            var _0x1d984a = _0xe20b9c;
            return this[_0x1d984a(0x176)][_0x1d984a(0x1a8)](_0x1f702b);
        },
        'setStroke': function (_0x211cbb, _0x3061f2) {
            var _0x4eaed1 = _0xe20b9c;
            return this[_0x4eaed1(0x176)][_0x4eaed1(0x1a9)](_0x211cbb, _0x3061f2);
        },
        'setShadow': function (_0x327604, _0x48367b, _0x352f44, _0x285da0, _0x3d5f9c, _0x29ec55) {
            var _0x47ec7e = _0xe20b9c;
            return this['style'][_0x47ec7e(0x1aa)](_0x327604, _0x48367b, _0x352f44, _0x285da0, _0x3d5f9c, _0x29ec55);
        },
        'setShadowOffset': function (_0x38812c, _0x5af298) {
            var _0x10ddde = _0xe20b9c;
            return this[_0x10ddde(0x176)][_0x10ddde(0x1ab)](_0x38812c, _0x5af298);
        },
        'setShadowColor': function (_0x3517d8) {
            var _0x4a2b5c = _0xe20b9c;
            return this[_0x4a2b5c(0x176)][_0x4a2b5c(0x1ac)](_0x3517d8);
        },
        'setShadowBlur': function (_0x129523) {
            var _0x3db21f = _0xe20b9c;
            return this['style'][_0x3db21f(0x1ad)](_0x129523);
        },
        'setShadowStroke': function (_0xd32910) {
            var _0x2a2da6 = _0xe20b9c;
            return this[_0x2a2da6(0x176)][_0x2a2da6(0x1ae)](_0xd32910);
        },
        'setShadowFill': function (_0x413932) {
            var _0x66e875 = _0xe20b9c;
            return this[_0x66e875(0x176)][_0x66e875(0x1af)](_0x413932);
        },
        'setWordWrapWidth': function (_0x4e7ee5, _0x51ec74) {
            var _0x2cfcd1 = _0xe20b9c;
            return this[_0x2cfcd1(0x176)][_0x2cfcd1(0x1b0)](_0x4e7ee5, _0x51ec74);
        },
        'setWordWrapCallback': function (_0x3ad097, _0x5250ea) {
            var _0x244100 = _0xe20b9c;
            return this[_0x244100(0x176)][_0x244100(0x1b1)](_0x3ad097, _0x5250ea);
        },
        'setAlign': function (_0x4d0897) {
            var _0x5b592a = _0xe20b9c;
            return this[_0x5b592a(0x176)][_0x5b592a(0x1b2)](_0x4d0897);
        },
        'setResolution': function (_0x14ac95) {
            var _0x2851f9 = _0xe20b9c;
            return this[_0x2851f9(0x176)]['setResolution'](_0x14ac95);
        },
        'setLineSpacing': function (_0x23f21d) {
            var _0x957cb8 = _0xe20b9c;
            return this[_0x957cb8(0x188)] = _0x23f21d, this[_0x957cb8(0x1a1)]();
        },
        'setPadding': function (_0xd3b92b, _0x1a4e6f, _0x20f8d0, _0x80061a) {
            var _0x14458c = _0xe20b9c;
            if (typeof _0xd3b92b === _0x14458c(0x1b3)) {
                var _0x2d6e3e = _0xd3b92b, _0x5aa337 = GetValue(_0x2d6e3e, 'x', null);
                _0x5aa337 !== null ? (_0xd3b92b = _0x5aa337, _0x20f8d0 = _0x5aa337) : (_0xd3b92b = GetValue(_0x2d6e3e, _0x14458c(0x1b4), 0x0), _0x20f8d0 = GetValue(_0x2d6e3e, _0x14458c(0x1b5), _0xd3b92b));
                var _0x520c20 = GetValue(_0x2d6e3e, 'y', null);
                _0x520c20 !== null ? (_0x1a4e6f = _0x520c20, _0x80061a = _0x520c20) : (_0x1a4e6f = GetValue(_0x2d6e3e, 'top', 0x0), _0x80061a = GetValue(_0x2d6e3e, 'bottom', _0x1a4e6f));
            } else
                _0xd3b92b === undefined && (_0xd3b92b = 0x0), _0x1a4e6f === undefined && (_0x1a4e6f = _0xd3b92b), _0x20f8d0 === undefined && (_0x20f8d0 = _0xd3b92b), _0x80061a === undefined && (_0x80061a = _0x1a4e6f);
            return this[_0x14458c(0x178)][_0x14458c(0x1b4)] = _0xd3b92b, this[_0x14458c(0x178)][_0x14458c(0x1b6)] = _0x1a4e6f, this[_0x14458c(0x178)][_0x14458c(0x1b5)] = _0x20f8d0, this['padding']['bottom'] = _0x80061a, this['updateText']();
        },
        'setMaxLines': function (_0x3b124b) {
            var _0x526f6e = _0xe20b9c;
            return this[_0x526f6e(0x176)][_0x526f6e(0x1b7)](_0x3b124b);
        },
        'updateText': function () {
            var _0x5e3fdd = _0xe20b9c, _0x3c3689 = this[_0x5e3fdd(0x172)], _0x543e7e = this[_0x5e3fdd(0x174)], _0xd842cc = this['style'], _0x4c573f = _0xd842cc['resolution'], _0xf3bee3 = _0xd842cc[_0x5e3fdd(0x1b8)];
            _0xd842cc['syncFont'](_0x3c3689, _0x543e7e);
            var _0x357a58 = this[_0x5e3fdd(0x177)];
            (_0xd842cc[_0x5e3fdd(0x196)] || _0xd842cc[_0x5e3fdd(0x193)]) && (_0x357a58 = this[_0x5e3fdd(0x19f)](this[_0x5e3fdd(0x177)]));
            var _0x56e90d = _0x357a58[_0x5e3fdd(0x199)](this[_0x5e3fdd(0x19a)]), _0x3f5684 = GetTextSize(this, _0xf3bee3, _0x56e90d), _0x4de77f = this['padding'], _0xef0e29;
            _0xd842cc[_0x5e3fdd(0x1b9)] === 0x0 ? (this['width'] = _0x3f5684['width'] + _0x4de77f['left'] + _0x4de77f['right'], _0xef0e29 = _0x3f5684[_0x5e3fdd(0x179)]) : (this['width'] = _0xd842cc['fixedWidth'], _0xef0e29 = this['width'] - _0x4de77f['left'] - _0x4de77f[_0x5e3fdd(0x1b5)], _0xef0e29 < _0x3f5684[_0x5e3fdd(0x179)] && (_0xef0e29 = _0x3f5684[_0x5e3fdd(0x179)]));
            _0xd842cc[_0x5e3fdd(0x1ba)] === 0x0 ? this[_0x5e3fdd(0x17a)] = _0x3f5684[_0x5e3fdd(0x17a)] + _0x4de77f[_0x5e3fdd(0x1b6)] + _0x4de77f[_0x5e3fdd(0x1bb)] : this['height'] = _0xd842cc[_0x5e3fdd(0x1ba)];
            var _0x40779f = this[_0x5e3fdd(0x179)], _0x2cec0f = this[_0x5e3fdd(0x17a)];
            this[_0x5e3fdd(0x1bc)](), _0x40779f *= _0x4c573f, _0x2cec0f *= _0x4c573f, _0x40779f = Math['max'](_0x40779f, 0x1), _0x2cec0f = Math['max'](_0x2cec0f, 0x1);
            _0x3c3689[_0x5e3fdd(0x179)] !== _0x40779f || _0x3c3689['height'] !== _0x2cec0f ? (_0x3c3689['width'] = _0x40779f, _0x3c3689[_0x5e3fdd(0x17a)] = _0x2cec0f, this[_0x5e3fdd(0x17f)][_0x5e3fdd(0x1bd)](_0x40779f, _0x2cec0f), _0xd842cc[_0x5e3fdd(0x1be)](_0x3c3689, _0x543e7e)) : _0x543e7e[_0x5e3fdd(0x1bf)](0x0, 0x0, _0x40779f, _0x2cec0f);
            _0x543e7e[_0x5e3fdd(0x1c0)](), _0x543e7e[_0x5e3fdd(0x1c1)](_0x4c573f, _0x4c573f);
            _0xd842cc['backgroundColor'] && (_0x543e7e['fillStyle'] = _0xd842cc[_0x5e3fdd(0x1c2)], _0x543e7e[_0x5e3fdd(0x1c3)](0x0, 0x0, _0x40779f, _0x2cec0f));
            _0xd842cc[_0x5e3fdd(0x1c4)](_0x3c3689, _0x543e7e), _0x543e7e[_0x5e3fdd(0x1c5)] = 'alphabetic', _0x543e7e[_0x5e3fdd(0x1c6)](_0x4de77f[_0x5e3fdd(0x1b4)], _0x4de77f[_0x5e3fdd(0x1b6)]);
            var _0x103275, _0x552395;
            for (var _0x441ceb = 0x0; _0x441ceb < _0x3f5684[_0x5e3fdd(0x1c7)]; _0x441ceb++) {
                _0x103275 = _0xd842cc[_0x5e3fdd(0x1c8)] / 0x2, _0x552395 = _0xd842cc['strokeThickness'] / 0x2 + _0x441ceb * _0x3f5684[_0x5e3fdd(0x1c9)] + _0xf3bee3[_0x5e3fdd(0x1ca)];
                _0x441ceb > 0x0 && (_0x552395 += _0x3f5684['lineSpacing'] * _0x441ceb);
                if (_0xd842cc[_0x5e3fdd(0x18d)])
                    _0x103275 = _0x40779f - _0x103275;
                else {
                    if (_0xd842cc[_0x5e3fdd(0x1cb)] === _0x5e3fdd(0x1b5))
                        _0x103275 += _0xef0e29 - _0x3f5684['lineWidths'][_0x441ceb];
                    else {
                        if (_0xd842cc[_0x5e3fdd(0x1cb)] === _0x5e3fdd(0x1cc))
                            _0x103275 += (_0xef0e29 - _0x3f5684[_0x5e3fdd(0x1cd)][_0x441ceb]) / 0x2;
                        else {
                            if (_0xd842cc[_0x5e3fdd(0x1cb)] === _0x5e3fdd(0x1ce)) {
                                var _0x4fbf72 = 0.85;
                                if (_0x3f5684[_0x5e3fdd(0x1cd)][_0x441ceb] / _0x3f5684[_0x5e3fdd(0x179)] >= _0x4fbf72) {
                                    var _0x35e45b = _0x3f5684[_0x5e3fdd(0x179)] - _0x3f5684[_0x5e3fdd(0x1cd)][_0x441ceb], _0x2a26c7 = _0x543e7e['measureText']('\x20')[_0x5e3fdd(0x179)], _0x2123d8 = _0x56e90d[_0x441ceb][_0x5e3fdd(0x1cf)](), _0x4b4a9a = _0x2123d8['split']('\x20');
                                    _0x35e45b += (_0x56e90d[_0x441ceb][_0x5e3fdd(0x19b)] - _0x2123d8[_0x5e3fdd(0x19b)]) * _0x2a26c7;
                                    var _0x337cc1 = Math[_0x5e3fdd(0x1d0)](_0x35e45b / _0x2a26c7), _0x14248f = 0x0;
                                    while (_0x337cc1 > 0x0) {
                                        _0x4b4a9a[_0x14248f] += '\x20', _0x14248f = (_0x14248f + 0x1) % (_0x4b4a9a[_0x5e3fdd(0x19b)] - 0x1 || 0x1), --_0x337cc1;
                                    }
                                    _0x56e90d[_0x441ceb] = _0x4b4a9a[_0x5e3fdd(0x195)]('\x20');
                                }
                            }
                        }
                    }
                }
                this[_0x5e3fdd(0x1d1)] && (_0x103275 = Math[_0x5e3fdd(0x1d2)](_0x103275), _0x552395 = Math['round'](_0x552395)), _0xd842cc[_0x5e3fdd(0x1c8)] && (this[_0x5e3fdd(0x176)][_0x5e3fdd(0x1d3)](_0x543e7e, _0xd842cc['shadowStroke']), _0x543e7e[_0x5e3fdd(0x1d4)](_0x56e90d[_0x441ceb], _0x103275, _0x552395)), _0xd842cc[_0x5e3fdd(0x1d5)] && (this['style'][_0x5e3fdd(0x1d3)](_0x543e7e, _0xd842cc[_0x5e3fdd(0x1d6)]), _0x543e7e[_0x5e3fdd(0x1d7)](_0x56e90d[_0x441ceb], _0x103275, _0x552395));
            }
            _0x543e7e[_0x5e3fdd(0x1d8)]();
            this[_0x5e3fdd(0x16f)] && this[_0x5e3fdd(0x16f)]['gl'] && (this[_0x5e3fdd(0x17f)][_0x5e3fdd(0x183)]['glTexture'] = this[_0x5e3fdd(0x16f)][_0x5e3fdd(0x1d9)](_0x3c3689, this[_0x5e3fdd(0x17f)][_0x5e3fdd(0x183)][_0x5e3fdd(0x184)], !![]), this[_0x5e3fdd(0x17f)]['glTexture'] = this[_0x5e3fdd(0x17f)][_0x5e3fdd(0x183)]['glTexture']);
            this[_0x5e3fdd(0x17b)] = !![];
            var _0x14374b = this['input'];
            return _0x14374b && !_0x14374b[_0x5e3fdd(0x1da)] && (_0x14374b[_0x5e3fdd(0x1db)][_0x5e3fdd(0x179)] = this[_0x5e3fdd(0x179)], _0x14374b[_0x5e3fdd(0x1db)][_0x5e3fdd(0x17a)] = this[_0x5e3fdd(0x17a)]), this;
        },
        'getTextMetrics': function () {
            var _0x4c5f6b = _0xe20b9c;
            return this['style'][_0x4c5f6b(0x1dc)]();
        },
        'text': {
            'get': function () {
                var _0x261ed9 = _0xe20b9c;
                return this[_0x261ed9(0x177)];
            },
            'set': function (_0x37d277) {
                this['setText'](_0x37d277);
            }
        },
        'toJSON': function () {
            var _0x59c32f = _0xe20b9c, _0x50eb14 = Components['ToJSON'](this), _0x3bffa4 = {
                    'autoRound': this[_0x59c32f(0x1d1)],
                    'text': this[_0x59c32f(0x177)],
                    'style': this[_0x59c32f(0x176)][_0x59c32f(0x1dd)](),
                    'padding': {
                        'left': this[_0x59c32f(0x178)][_0x59c32f(0x1b4)],
                        'right': this[_0x59c32f(0x178)][_0x59c32f(0x1b5)],
                        'top': this[_0x59c32f(0x178)][_0x59c32f(0x1b6)],
                        'bottom': this[_0x59c32f(0x178)][_0x59c32f(0x1bb)]
                    }
                };
            return _0x50eb14[_0x59c32f(0x1de)] = _0x3bffa4, _0x50eb14;
        },
        'preDestroy': function () {
            var _0x23d0bd = _0xe20b9c;
            this[_0x23d0bd(0x176)]['rtl'] && RemoveFromDOM(this['canvas']), CanvasPool[_0x23d0bd(0x1df)](this[_0x23d0bd(0x172)]), this[_0x23d0bd(0x180)][_0x23d0bd(0x1e0)]();
        }
    });
function _0x21c9(_0x4670fb, _0x11925a) {
    return _0x21c9 = function (_0xb1346, _0x21c90e) {
        _0xb1346 = _0xb1346 - 0x150;
        var _0x5e39d8 = _0xb134[_0xb1346];
        return _0x5e39d8;
    }, _0x21c9(_0x4670fb, _0x11925a);
}
module['exports'] = Text;

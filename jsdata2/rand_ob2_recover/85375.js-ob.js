var ArrayRemove = require(_0x2f24ad(137)), CameraEvents = require('../../cameras/2d/events'), Class = require(_0x2f24ad(138)), CONST = require('../../const'), EventEmitter = require(_0x2f24ad(139)), Events = require(_0x2f24ad(140)), GameEvents = require('../../core/events'), IsSizePowerOfTwo = require('../../math/pow2/IsSizePowerOfTwo'), Matrix4 = require('../../math/Matrix4'), NOOP = require('../../utils/NOOP'), PipelineManager = require('./PipelineManager'), RenderTarget = require('./RenderTarget'), ScaleEvents = require(_0x2f24ad(141)), TextureEvents = require(_0x2f24ad(142)), Utils = require('./Utils'), WebGLSnapshot = require(_0x2f24ad(143)), WebGLRenderer = new Class({
        'Extends': EventEmitter,
        'initialize': function WebGLRenderer(_0x5d8c6b) {
            var _0xbeae6e = _0x2f24ad;
            EventEmitter[_0xbeae6e(144)](this);
            var _0x193e02 = _0x5d8c6b['config'], _0x2d9be0 = {
                    'alpha': _0x193e02['transparent'],
                    'desynchronized': _0x193e02[_0xbeae6e(145)],
                    'depth': ![],
                    'antialias': _0x193e02[_0xbeae6e(146)],
                    'premultipliedAlpha': _0x193e02[_0xbeae6e(147)],
                    'stencil': !![],
                    'failIfMajorPerformanceCaveat': _0x193e02[_0xbeae6e(148)],
                    'powerPreference': _0x193e02[_0xbeae6e(149)],
                    'preserveDrawingBuffer': _0x193e02[_0xbeae6e(150)]
                };
            this[_0xbeae6e(151)] = {
                'clearBeforeRender': _0x193e02[_0xbeae6e(152)],
                'antialias': _0x193e02['antialias'],
                'backgroundColor': _0x193e02['backgroundColor'],
                'contextCreation': _0x2d9be0,
                'roundPixels': _0x193e02[_0xbeae6e(153)],
                'maxTextures': _0x193e02[_0xbeae6e(154)],
                'maxTextureSize': _0x193e02['maxTextureSize'],
                'batchSize': _0x193e02[_0xbeae6e(155)],
                'maxLights': _0x193e02['maxLights'],
                'mipmapFilter': _0x193e02[_0xbeae6e(156)]
            }, this[_0xbeae6e(157)] = _0x5d8c6b, this['type'] = CONST['WEBGL'], this[_0xbeae6e(158)] = null, this[_0xbeae6e(159)] = 0, this[_0xbeae6e(160)] = 0, this[_0xbeae6e(161)] = _0x5d8c6b[_0xbeae6e(161)], this[_0xbeae6e(162)] = [], this[_0xbeae6e(163)] = ![], this[_0xbeae6e(164)] = {
                'x': 0,
                'y': 0,
                'width': 1,
                'height': 1,
                'getPixel': ![],
                'callback': null,
                'type': _0xbeae6e(165),
                'encoder': 0.92,
                'isFramebuffer': ![],
                'bufferWidth': 0,
                'bufferHeight': 0
            }, this[_0xbeae6e(166)] = 0, this[_0xbeae6e(167)] = 0, this[_0xbeae6e(154)] = 0, this[_0xbeae6e(168)], this[_0xbeae6e(169)], this['textureZero'], this[_0xbeae6e(170)], this[_0xbeae6e(171)] = null, this['fboStack'] = [], this[_0xbeae6e(172)] = null, this[_0xbeae6e(173)] = Infinity, this[_0xbeae6e(174)] = ![], this[_0xbeae6e(175)] = null, this['scissorStack'] = [], this[_0xbeae6e(176)] = NOOP, this[_0xbeae6e(177)] = NOOP, this['gl'] = null, this[_0xbeae6e(178)] = null, this[_0xbeae6e(179)] = null, this[_0xbeae6e(180)] = null, this[_0xbeae6e(181)] = {}, this['glFormats'] = [], this[_0xbeae6e(182)] = {
                'ETC1': ![],
                'PVRTC': ![],
                'S3TC': ![]
            }, this[_0xbeae6e(183)] = 0, this['blankTexture'] = null, this[_0xbeae6e(184)] = null, this[_0xbeae6e(185)] = 0, this[_0xbeae6e(186)] = [], this['currentMask'] = {
                'mask': null,
                'camera': null
            }, this[_0xbeae6e(187)] = {
                'mask': null,
                'camera': null
            }, this[_0xbeae6e(188)] = null, this[_0xbeae6e(189)] = '', this[_0xbeae6e(190)] = ![], this[_0xbeae6e(191)] = ![], this[_0xbeae6e(192)] = ![], this[_0xbeae6e(156)] = null, this[_0xbeae6e(193)] = 0, this[_0xbeae6e(194)] = ![], this[_0xbeae6e(195)] = [
                0,
                0,
                0,
                0
            ], this[_0xbeae6e(196)] = ![], this['renderTarget'] = null, this[_0xbeae6e(197)], this[_0xbeae6e(198)] = 0, this['projectionHeight'] = 0, this['init'](this[_0xbeae6e(151)]);
        },
        'init': function (_0x322d9) {
            var _0x3604eb = _0x2f24ad, _0x7751b, _0x2708ef = this['game'], _0x492543 = this[_0x3604eb(161)], _0x257e67 = _0x322d9[_0x3604eb(199)];
            _0x2708ef[_0x3604eb(151)]['context'] ? _0x7751b = _0x2708ef[_0x3604eb(151)][_0x3604eb(200)] : _0x7751b = _0x492543['getContext'](_0x3604eb(201), _0x322d9[_0x3604eb(202)]) || _0x492543['getContext']('experimental-webgl', _0x322d9[_0x3604eb(202)]);
            if (!_0x7751b || _0x7751b[_0x3604eb(203)]()) {
                this[_0x3604eb(163)] = !![];
                throw new Error(_0x3604eb(204));
            }
            this['gl'] = _0x7751b;
            var _0x3d71cc = this;
            this['contextLostHandler'] = function (_0x40f713) {
                var _0x15e211 = _0x3604eb;
                _0x3d71cc[_0x15e211(163)] = !![], _0x3d71cc[_0x15e211(157)]['events'][_0x15e211(205)](GameEvents[_0x15e211(206)], _0x3d71cc), _0x40f713[_0x15e211(207)]();
            }, this[_0x3604eb(177)] = function () {
                var _0x2947ff = _0x3604eb;
                _0x3d71cc[_0x2947ff(163)] = ![], _0x3d71cc[_0x2947ff(208)](_0x3d71cc['config']), _0x3d71cc[_0x2947ff(157)][_0x2947ff(209)]['emit'](GameEvents['CONTEXT_RESTORED'], _0x3d71cc);
            }, _0x492543[_0x3604eb(210)]('webglcontextlost', this[_0x3604eb(176)], ![]), _0x492543[_0x3604eb(210)](_0x3604eb(211), this[_0x3604eb(177)], ![]), _0x2708ef[_0x3604eb(200)] = _0x7751b;
            for (var _0x4e3fcb = 0; _0x4e3fcb <= 27; _0x4e3fcb++) {
                this['blendModes']['push']({
                    'func': [
                        _0x7751b['ONE'],
                        _0x7751b[_0x3604eb(212)]
                    ],
                    'equation': _0x7751b[_0x3604eb(213)]
                });
            }
            this['blendModes'][1][_0x3604eb(214)] = [
                _0x7751b[_0x3604eb(215)],
                _0x7751b[_0x3604eb(216)]
            ], this['blendModes'][2][_0x3604eb(214)] = [
                _0x7751b[_0x3604eb(217)],
                _0x7751b[_0x3604eb(212)]
            ], this['blendModes'][3][_0x3604eb(214)] = [
                _0x7751b[_0x3604eb(215)],
                _0x7751b[_0x3604eb(218)]
            ], this['blendModes'][17] = {
                'func': [
                    _0x7751b['ZERO'],
                    _0x7751b['ONE_MINUS_SRC_ALPHA']
                ],
                'equation': _0x7751b[_0x3604eb(219)]
            }, this[_0x3604eb(220)][0] = _0x7751b['BYTE'], this['glFormats'][1] = _0x7751b['SHORT'], this[_0x3604eb(220)][2] = _0x7751b[_0x3604eb(221)], this[_0x3604eb(220)][3] = _0x7751b[_0x3604eb(222)], this[_0x3604eb(220)][4] = _0x7751b[_0x3604eb(223)], this[_0x3604eb(188)] = {
                'mat2': {
                    'func': _0x7751b[_0x3604eb(224)],
                    'length': 1,
                    'matrix': !![]
                },
                'mat3': {
                    'func': _0x7751b[_0x3604eb(225)],
                    'length': 1,
                    'matrix': !![]
                },
                'mat4': {
                    'func': _0x7751b['uniformMatrix4fv'],
                    'length': 1,
                    'matrix': !![]
                },
                '1f': {
                    'func': _0x7751b[_0x3604eb(226)],
                    'length': 1
                },
                '1fv': {
                    'func': _0x7751b['uniform1fv'],
                    'length': 1
                },
                '1i': {
                    'func': _0x7751b[_0x3604eb(227)],
                    'length': 1
                },
                '1iv': {
                    'func': _0x7751b[_0x3604eb(228)],
                    'length': 1
                },
                '2f': {
                    'func': _0x7751b['uniform2f'],
                    'length': 2
                },
                '2fv': {
                    'func': _0x7751b[_0x3604eb(229)],
                    'length': 1
                },
                '2i': {
                    'func': _0x7751b['uniform2i'],
                    'length': 2
                },
                '2iv': {
                    'func': _0x7751b[_0x3604eb(230)],
                    'length': 1
                },
                '3f': {
                    'func': _0x7751b[_0x3604eb(231)],
                    'length': 3
                },
                '3fv': {
                    'func': _0x7751b[_0x3604eb(232)],
                    'length': 1
                },
                '3i': {
                    'func': _0x7751b[_0x3604eb(233)],
                    'length': 3
                },
                '3iv': {
                    'func': _0x7751b[_0x3604eb(234)],
                    'length': 1
                },
                '4f': {
                    'func': _0x7751b[_0x3604eb(235)],
                    'length': 4
                },
                '4fv': {
                    'func': _0x7751b[_0x3604eb(236)],
                    'length': 1
                },
                '4i': {
                    'func': _0x7751b[_0x3604eb(237)],
                    'length': 4
                },
                '4iv': {
                    'func': _0x7751b['uniform4iv'],
                    'length': 1
                }
            };
            var _0x468721 = _0x7751b['getSupportedExtensions']();
            (!_0x322d9[_0x3604eb(154)] || _0x322d9[_0x3604eb(154)] === -1) && (_0x322d9[_0x3604eb(154)] = _0x7751b['getParameter'](_0x7751b[_0x3604eb(238)]));
            !_0x322d9[_0x3604eb(239)] && (_0x322d9[_0x3604eb(239)] = _0x7751b[_0x3604eb(240)](_0x7751b[_0x3604eb(241)]));
            var _0x270622 = _0x3604eb(242), _0x1f8143 = _0x3604eb(243) + _0x270622;
            this[_0x3604eb(182)][_0x3604eb(244)] = _0x7751b[_0x3604eb(245)](_0x270622 + _0x3604eb(246)) || _0x7751b[_0x3604eb(245)](_0x1f8143 + _0x3604eb(246)), this['compression']['PVRTC'] = _0x7751b['getExtension'](_0x270622 + _0x3604eb(247)) || _0x7751b[_0x3604eb(245)](_0x1f8143 + 'pvrtc'), this['compression'][_0x3604eb(248)] = _0x7751b[_0x3604eb(245)](_0x270622 + 's3tc') || _0x7751b[_0x3604eb(245)](_0x1f8143 + _0x3604eb(249)), this[_0x3604eb(178)] = _0x468721;
            var _0x4aa026 = _0x3604eb(250);
            this[_0x3604eb(179)] = _0x468721[_0x3604eb(251)](_0x4aa026) > -1 ? _0x7751b[_0x3604eb(245)](_0x4aa026) : null;
            var _0x50befa = _0x3604eb(252);
            this[_0x3604eb(180)] = _0x468721[_0x3604eb(251)](_0x50befa) > -1 ? _0x7751b[_0x3604eb(245)](_0x50befa) : null, _0x7751b[_0x3604eb(253)](_0x7751b[_0x3604eb(254)]), _0x7751b[_0x3604eb(253)](_0x7751b[_0x3604eb(255)]), _0x7751b[_0x3604eb(256)](_0x7751b['BLEND']), _0x7751b['clearColor'](_0x257e67[_0x3604eb(257)], _0x257e67['greenGL'], _0x257e67[_0x3604eb(258)], _0x257e67[_0x3604eb(259)]), this[_0x3604eb(156)] = _0x7751b[_0x322d9[_0x3604eb(156)]], this[_0x3604eb(154)] = Utils['checkShaderMax'](_0x7751b, _0x322d9[_0x3604eb(154)]), this['textureIndexes'] = [];
            var _0x3fe00a = this['tempTextures'];
            if (Array[_0x3604eb(260)](_0x3fe00a))
                for (var _0x229fa2 = 0; _0x4e3fcb < this[_0x3604eb(154)]; _0x229fa2++) {
                    _0x7751b[_0x3604eb(261)](_0x3fe00a[_0x229fa2]);
                }
            else
                _0x3fe00a = new Array(this['maxTextures']);
            for (var _0x3b82f2 = 0; _0x3b82f2 < this[_0x3604eb(154)]; _0x3b82f2++) {
                var _0x296cbe = _0x7751b['createTexture']();
                _0x7751b['activeTexture'](_0x7751b[_0x3604eb(262)] + _0x3b82f2), _0x7751b['bindTexture'](_0x7751b[_0x3604eb(263)], _0x296cbe), _0x7751b[_0x3604eb(264)](_0x7751b[_0x3604eb(263)], 0, _0x7751b[_0x3604eb(265)], 1, 1, 0, _0x7751b[_0x3604eb(265)], _0x7751b['UNSIGNED_BYTE'], new Uint8Array([
                    0,
                    0,
                    255,
                    255
                ])), _0x3fe00a[_0x3b82f2] = _0x296cbe, this['textureIndexes'][_0x3604eb(266)](_0x3b82f2);
            }
            return this[_0x3604eb(169)] = _0x3fe00a, this[_0x3604eb(166)] = 1, this[_0x3604eb(167)]++, _0x7751b[_0x3604eb(267)](_0x7751b[_0x3604eb(268)]), this[_0x3604eb(158)] = new PipelineManager(this), this[_0x3604eb(269)](CONST[_0x3604eb(270)]['NORMAL']), this[_0x3604eb(197)] = new Matrix4()[_0x3604eb(271)](), _0x2708ef[_0x3604eb(272)][_0x3604eb(273)](TextureEvents[_0x3604eb(274)], this[_0x3604eb(275)], this), this;
        },
        'boot': function () {
            var _0x214b39 = _0x2f24ad, _0x1f9619 = this[_0x214b39(157)], _0x3e6a94 = this[_0x214b39(158)], _0x102bf2 = _0x1f9619[_0x214b39(276)][_0x214b39(277)];
            this['width'] = _0x102bf2['width'], this[_0x214b39(160)] = _0x102bf2['height'], this[_0x214b39(196)] = !![], this[_0x214b39(278)] = new RenderTarget(this, this[_0x214b39(159)], this['height'], 1, 0, !![], !![]), _0x3e6a94['boot'](_0x1f9619[_0x214b39(151)][_0x214b39(279)]), this[_0x214b39(280)] = _0x1f9619[_0x214b39(272)]['getFrame'](_0x214b39(281)), this[_0x214b39(184)] = _0x1f9619[_0x214b39(272)][_0x214b39(282)](_0x214b39(283));
            var _0x56c2c2 = this['gl'];
            _0x56c2c2[_0x214b39(284)](_0x56c2c2[_0x214b39(285)], null), _0x56c2c2[_0x214b39(256)](_0x56c2c2['SCISSOR_TEST']), _0x1f9619[_0x214b39(276)]['on'](ScaleEvents['RESIZE'], this[_0x214b39(286)], this), this[_0x214b39(287)](_0x102bf2[_0x214b39(159)], _0x102bf2[_0x214b39(160)]);
        },
        'onResize': function (_0x5e1ba5, _0x218e60) {
            var _0x5aaa7b = _0x2f24ad;
            (_0x218e60[_0x5aaa7b(159)] !== this['width'] || _0x218e60[_0x5aaa7b(160)] !== this[_0x5aaa7b(160)]) && this[_0x5aaa7b(287)](_0x218e60[_0x5aaa7b(159)], _0x218e60[_0x5aaa7b(160)]);
        },
        'beginCapture': function (_0x1efdfa, _0x4fb227) {
            var _0x301b36 = _0x2f24ad;
            _0x1efdfa === undefined && (_0x1efdfa = this[_0x301b36(159)]), _0x4fb227 === undefined && (_0x4fb227 = this['height']), this['renderTarget'][_0x301b36(288)](!![], _0x1efdfa, _0x4fb227), this[_0x301b36(289)](_0x1efdfa, _0x4fb227), this[_0x301b36(290)]();
        },
        'endCapture': function () {
            var _0x2aaa96 = _0x2f24ad;
            return this[_0x2aaa96(278)][_0x2aaa96(291)](!![]), this[_0x2aaa96(292)](), this[_0x2aaa96(278)];
        },
        'resize': function (_0x2e7d9d, _0x2b0577) {
            var _0x55f1c9 = _0x2f24ad, _0x3a0f19 = this['gl'];
            return this[_0x55f1c9(159)] = _0x2e7d9d, this['height'] = _0x2b0577, this['setProjectionMatrix'](_0x2e7d9d, _0x2b0577), _0x3a0f19[_0x55f1c9(293)](0, 0, _0x2e7d9d, _0x2b0577), this[_0x55f1c9(183)] = _0x3a0f19[_0x55f1c9(183)], _0x3a0f19[_0x55f1c9(294)](0, _0x3a0f19['drawingBufferHeight'] - _0x2b0577, _0x2e7d9d, _0x2b0577), this[_0x55f1c9(195)][2] = _0x2e7d9d, this[_0x55f1c9(195)][3] = _0x2b0577, this[_0x55f1c9(205)](Events[_0x55f1c9(295)], _0x2e7d9d, _0x2b0577), this;
        },
        'getAspectRatio': function () {
            var _0x49d04d = _0x2f24ad;
            return this[_0x49d04d(159)] / this[_0x49d04d(160)];
        },
        'setProjectionMatrix': function (_0xeade59, _0x24bb52) {
            var _0x4e7f1f = _0x2f24ad;
            return (_0xeade59 !== this[_0x4e7f1f(198)] || _0x24bb52 !== this[_0x4e7f1f(296)]) && (this['projectionWidth'] = _0xeade59, this[_0x4e7f1f(296)] = _0x24bb52, this[_0x4e7f1f(197)][_0x4e7f1f(297)](0, _0xeade59, _0x24bb52, 0, -1000, 1000)), this;
        },
        'resetProjectionMatrix': function () {
            var _0x2584fe = _0x2f24ad;
            this[_0x2584fe(198)] = this[_0x2584fe(159)], this[_0x2584fe(296)] = this['height'], this['projectionMatrix']['ortho'](0, this['width'], this[_0x2584fe(160)], 0, -1000, 1000);
        },
        'hasExtension': function (_0x24c617) {
            var _0x22f7f5 = _0x2f24ad;
            return this[_0x22f7f5(178)] ? this[_0x22f7f5(178)][_0x22f7f5(251)](_0x24c617) : ![];
        },
        'getExtension': function (_0x147d2e) {
            var _0x4ef7d1 = _0x2f24ad;
            if (!this[_0x4ef7d1(298)](_0x147d2e))
                return null;
            return !(_0x147d2e in this[_0x4ef7d1(181)]) && (this[_0x4ef7d1(181)][_0x147d2e] = this['gl'][_0x4ef7d1(245)](_0x147d2e)), this['extensions'][_0x147d2e];
        },
        'flush': function () {
            var _0x299886 = _0x2f24ad;
            this[_0x299886(158)][_0x299886(299)]();
        },
        'pushScissor': function (_0x5a0e29, _0x4a852d, _0x8d8276, _0x208d08, _0x2f22aa) {
            var _0x423220 = _0x2f24ad;
            _0x2f22aa === undefined && (_0x2f22aa = this[_0x423220(183)]);
            var _0x15443a = this['scissorStack'], _0x54da1c = [
                    _0x5a0e29,
                    _0x4a852d,
                    _0x8d8276,
                    _0x208d08
                ];
            return _0x15443a[_0x423220(266)](_0x54da1c), this[_0x423220(300)](_0x5a0e29, _0x4a852d, _0x8d8276, _0x208d08, _0x2f22aa), this[_0x423220(175)] = _0x54da1c, _0x54da1c;
        },
        'setScissor': function (_0xdae629, _0x5da2b8, _0x525717, _0x7a08ac, _0x57232e) {
            var _0x5e4b7b = _0x2f24ad;
            _0x57232e === undefined && (_0x57232e = this[_0x5e4b7b(183)]);
            var _0x57a803 = this['gl'], _0xa5da6 = this[_0x5e4b7b(175)], _0x566b95 = _0x525717 > 0 && _0x7a08ac > 0;
            if (_0xa5da6 && _0x566b95) {
                var _0x1ea0a6 = _0xa5da6[0], _0x1b92b5 = _0xa5da6[1], _0x2a33a8 = _0xa5da6[2], _0x478f4c = _0xa5da6[3];
                _0x566b95 = _0x1ea0a6 !== _0xdae629 || _0x1b92b5 !== _0x5da2b8 || _0x2a33a8 !== _0x525717 || _0x478f4c !== _0x7a08ac;
            }
            _0x566b95 && (this[_0x5e4b7b(299)](), _0x57a803['scissor'](_0xdae629, _0x57232e - _0x5da2b8 - _0x7a08ac, _0x525717, _0x7a08ac));
        },
        'resetScissor': function () {
            var _0x594346 = _0x2f24ad, _0x29535d = this['gl'];
            _0x29535d[_0x594346(256)](_0x29535d[_0x594346(301)]);
            var _0xf888c7 = this[_0x594346(175)];
            if (_0xf888c7) {
                var _0x33aec0 = _0xf888c7[0], _0xc8faea = _0xf888c7[1], _0xb832c1 = _0xf888c7[2], _0x38f1ad = _0xf888c7[3];
                _0xb832c1 > 0 && _0x38f1ad > 0 && _0x29535d['scissor'](_0x33aec0, this[_0x594346(183)] - _0xc8faea - _0x38f1ad, _0xb832c1, _0x38f1ad);
            }
        },
        'popScissor': function () {
            var _0x52a922 = _0x2f24ad, _0x743799 = this['scissorStack'];
            _0x743799['pop']();
            var _0x4c7c6a = _0x743799[_0x743799[_0x52a922(302)] - 1];
            _0x4c7c6a && this[_0x52a922(300)](_0x4c7c6a[0], _0x4c7c6a[1], _0x4c7c6a[2], _0x4c7c6a[3]), this[_0x52a922(175)] = _0x4c7c6a;
        },
        'hasActiveStencilMask': function () {
            var _0x201e38 = _0x2f24ad, _0x11f77b = this[_0x201e38(303)][_0x201e38(304)], _0x284cb3 = this['currentCameraMask'][_0x201e38(304)];
            return _0x11f77b && _0x11f77b[_0x201e38(305)] || _0x284cb3 && _0x284cb3[_0x201e38(305)];
        },
        'resetViewport': function () {
            var _0x5343b7 = _0x2f24ad, _0x8e3dd5 = this['gl'];
            _0x8e3dd5[_0x5343b7(293)](0, 0, this['width'], this[_0x5343b7(160)]), this['drawingBufferHeight'] = _0x8e3dd5[_0x5343b7(183)];
        },
        'setBlendMode': function (_0x272508, _0x988e23) {
            var _0x2bfc58 = _0x2f24ad;
            _0x988e23 === undefined && (_0x988e23 = ![]);
            var _0x51e32f = this['gl'], _0x5b48ab = this['blendModes'][_0x272508];
            if (_0x988e23 || _0x272508 !== CONST[_0x2bfc58(270)][_0x2bfc58(306)] && this[_0x2bfc58(173)] !== _0x272508)
                return this[_0x2bfc58(299)](), _0x51e32f['enable'](_0x51e32f[_0x2bfc58(307)]), _0x51e32f[_0x2bfc58(308)](_0x5b48ab['equation']), _0x5b48ab[_0x2bfc58(214)][_0x2bfc58(302)] > 2 ? _0x51e32f[_0x2bfc58(309)](_0x5b48ab['func'][0], _0x5b48ab[_0x2bfc58(214)][1], _0x5b48ab[_0x2bfc58(214)][2], _0x5b48ab[_0x2bfc58(214)][3]) : _0x51e32f['blendFunc'](_0x5b48ab[_0x2bfc58(214)][0], _0x5b48ab[_0x2bfc58(214)][1]), this[_0x2bfc58(173)] = _0x272508, !![];
            return ![];
        },
        'addBlendMode': function (_0x25d940, _0xce9b31) {
            var _0x3d4354 = _0x2f24ad, _0x3507ab = this[_0x3d4354(162)]['push']({
                    'func': _0x25d940,
                    'equation': _0xce9b31
                });
            return _0x3507ab - 1;
        },
        'updateBlendMode': function (_0x38669d, _0x1e31d8, _0x51ce74) {
            var _0x364e37 = _0x2f24ad;
            return this[_0x364e37(162)][_0x38669d] && (this['blendModes'][_0x38669d]['func'] = _0x1e31d8, _0x51ce74 && (this['blendModes'][_0x38669d]['equation'] = _0x51ce74)), this;
        },
        'removeBlendMode': function (_0x56fd98) {
            var _0x287ca1 = _0x2f24ad;
            return _0x56fd98 > 17 && this[_0x287ca1(162)][_0x56fd98] && this['blendModes']['splice'](_0x56fd98, 1), this;
        },
        'setBlankTexture': function () {
            var _0x3577b7 = _0x2f24ad;
            this[_0x3577b7(310)](this[_0x3577b7(280)][_0x3577b7(311)]);
        },
        'setTextureSource': function (_0x1e6b50) {
            var _0x4be9f5 = _0x2f24ad;
            if (this[_0x4be9f5(158)][_0x4be9f5(312)]())
                return this[_0x4be9f5(313)](_0x1e6b50[_0x4be9f5(311)], !![]), 0;
            var _0x5b95e4 = this['gl'], _0x6c5231 = this[_0x4be9f5(166)];
            return _0x1e6b50[_0x4be9f5(314)] < this[_0x4be9f5(167)] && (_0x1e6b50[_0x4be9f5(314)] = this[_0x4be9f5(167)], _0x6c5231 < this[_0x4be9f5(154)] ? (_0x1e6b50[_0x4be9f5(315)] = _0x6c5231, _0x5b95e4[_0x4be9f5(267)](_0x5b95e4[_0x4be9f5(262)] + _0x6c5231), _0x5b95e4['bindTexture'](_0x5b95e4[_0x4be9f5(263)], _0x1e6b50[_0x4be9f5(311)]), this[_0x4be9f5(166)]++) : (this[_0x4be9f5(299)](), this['startActiveTexture']++, this[_0x4be9f5(193)]++, _0x1e6b50[_0x4be9f5(314)] = this[_0x4be9f5(167)], _0x1e6b50[_0x4be9f5(315)] = 1, _0x5b95e4['activeTexture'](_0x5b95e4[_0x4be9f5(268)]), _0x5b95e4[_0x4be9f5(316)](_0x5b95e4['TEXTURE_2D'], _0x1e6b50[_0x4be9f5(311)]), this[_0x4be9f5(166)] = 2)), this[_0x4be9f5(194)] = ![], _0x1e6b50[_0x4be9f5(315)];
        },
        'isNewNormalMap': function (_0x47e075, _0x54f8a3) {
            var _0x2758c3 = _0x2f24ad;
            return this['textureZero'] !== _0x47e075 || this[_0x2758c3(170)] !== _0x54f8a3;
        },
        'setTextureZero': function (_0x3685bd, _0x12820e) {
            var _0x48dd7b = _0x2f24ad;
            if (this['textureZero'] !== _0x3685bd) {
                _0x12820e && this[_0x48dd7b(299)]();
                var _0x1e3906 = this['gl'];
                _0x1e3906[_0x48dd7b(267)](_0x1e3906['TEXTURE0']), _0x1e3906[_0x48dd7b(316)](_0x1e3906[_0x48dd7b(263)], _0x3685bd), this['textureZero'] = _0x3685bd;
            }
        },
        'clearTextureZero': function () {
            var _0x5a2a48 = _0x2f24ad;
            this[_0x5a2a48(317)] = null;
        },
        'setNormalMap': function (_0x284b2b) {
            var _0x36f8f9 = _0x2f24ad;
            if (this[_0x36f8f9(170)] !== _0x284b2b) {
                var _0x28b1bd = this['gl'];
                _0x28b1bd[_0x36f8f9(267)](_0x28b1bd[_0x36f8f9(268)]), _0x28b1bd[_0x36f8f9(316)](_0x28b1bd['TEXTURE_2D'], _0x284b2b), this[_0x36f8f9(170)] = _0x284b2b, this[_0x36f8f9(166)] === 1 && (this['currentActiveTexture'] = 2);
            }
        },
        'clearNormalMap': function () {
            var _0x2c288b = _0x2f24ad;
            this[_0x2c288b(170)] = null, this[_0x2c288b(167)]++, this[_0x2c288b(166)] = 1, this[_0x2c288b(193)]++;
        },
        'unbindTextures': function () {
            var _0x2e688f = _0x2f24ad, _0x56ede3 = this['gl'], _0x33122e = this['tempTextures'];
            for (var _0x3b483e = 0; _0x3b483e < _0x33122e[_0x2e688f(302)]; _0x3b483e++) {
                _0x56ede3[_0x2e688f(267)](_0x56ede3[_0x2e688f(262)] + _0x3b483e), _0x56ede3['bindTexture'](_0x56ede3[_0x2e688f(263)], null);
            }
            this[_0x2e688f(170)] = null, this['textureZero'] = null, this[_0x2e688f(166)] = 1, this[_0x2e688f(167)]++, this[_0x2e688f(193)]++;
        },
        'resetTextures': function (_0x306028) {
            var _0x2ce70b = _0x2f24ad;
            _0x306028 === undefined && (_0x306028 = ![]);
            if (this[_0x2ce70b(194)])
                return;
            this['flush']();
            var _0x3f69bc = this['gl'], _0x5f4d2e = this[_0x2ce70b(169)];
            if (_0x306028) {
                for (var _0x52f585 = 0; _0x52f585 < _0x5f4d2e[_0x2ce70b(302)]; _0x52f585++) {
                    _0x3f69bc[_0x2ce70b(267)](_0x3f69bc[_0x2ce70b(262)] + _0x52f585), _0x3f69bc['bindTexture'](_0x3f69bc['TEXTURE_2D'], _0x5f4d2e[_0x52f585]);
                }
                _0x3f69bc[_0x2ce70b(267)](_0x3f69bc[_0x2ce70b(268)]), _0x3f69bc[_0x2ce70b(316)](_0x3f69bc[_0x2ce70b(263)], _0x5f4d2e[1]), this[_0x2ce70b(194)] = !![];
            } else
                _0x3f69bc['activeTexture'](_0x3f69bc[_0x2ce70b(262)]), _0x3f69bc[_0x2ce70b(316)](_0x3f69bc[_0x2ce70b(263)], _0x5f4d2e[0]), _0x3f69bc[_0x2ce70b(267)](_0x3f69bc[_0x2ce70b(268)]), _0x3f69bc[_0x2ce70b(316)](_0x3f69bc[_0x2ce70b(263)], _0x5f4d2e[1]);
            this['normalTexture'] = null, this[_0x2ce70b(317)] = null, this[_0x2ce70b(166)] = 1, this[_0x2ce70b(167)]++, this['textureFlush']++;
        },
        'setTexture2D': function (_0x564ee7) {
            var _0x10808a = _0x2f24ad;
            if (this['pipelines']['forceZero']())
                return this[_0x10808a(313)](_0x564ee7, !![]), 0;
            var _0x43d0b4 = this['gl'], _0x2b71f5 = this[_0x10808a(166)];
            return _0x564ee7[_0x10808a(314)] < this[_0x10808a(167)] && (_0x564ee7[_0x10808a(314)] = this[_0x10808a(167)], _0x2b71f5 < this[_0x10808a(154)] ? (_0x564ee7[_0x10808a(315)] = _0x2b71f5, _0x43d0b4[_0x10808a(267)](_0x43d0b4[_0x10808a(262)] + _0x2b71f5), _0x43d0b4[_0x10808a(316)](_0x43d0b4[_0x10808a(263)], _0x564ee7), this[_0x10808a(166)]++) : (this['flush'](), this['startActiveTexture']++, this['textureFlush']++, _0x564ee7[_0x10808a(314)] = this[_0x10808a(167)], _0x564ee7[_0x10808a(315)] = 1, _0x43d0b4['activeTexture'](_0x43d0b4['TEXTURE1']), _0x43d0b4[_0x10808a(316)](_0x43d0b4[_0x10808a(263)], _0x564ee7), this[_0x10808a(166)] = 2)), this[_0x10808a(194)] = ![], _0x564ee7[_0x10808a(315)];
        },
        'pushFramebuffer': function (_0x5e0cd1, _0x284416, _0xca368d, _0x3185df) {
            var _0x3cf642 = _0x2f24ad;
            if (_0x5e0cd1 === this[_0x3cf642(171)])
                return this;
            return this[_0x3cf642(318)][_0x3cf642(266)](_0x5e0cd1), this[_0x3cf642(319)](_0x5e0cd1, _0x284416, _0xca368d, _0x3185df);
        },
        'setFramebuffer': function (_0x2e7817, _0xfdc129, _0x285213, _0x3aa1d8) {
            var _0x2f44ca = _0x2f24ad;
            _0xfdc129 === undefined && (_0xfdc129 = ![]);
            _0x285213 === undefined && (_0x285213 = ![]);
            _0x3aa1d8 === undefined && (_0x3aa1d8 = !![]);
            if (_0x2e7817 === this[_0x2f44ca(171)])
                return this;
            var _0xa78845 = this['gl'], _0xfb9075 = this[_0x2f44ca(159)], _0x4056ab = this[_0x2f44ca(160)];
            return _0x2e7817 && _0x2e7817['renderTexture'] && _0x3aa1d8 ? (_0xfb9075 = _0x2e7817[_0x2f44ca(320)][_0x2f44ca(159)], _0x4056ab = _0x2e7817['renderTexture'][_0x2f44ca(160)]) : this[_0x2f44ca(299)](), _0xa78845[_0x2f44ca(284)](_0xa78845['FRAMEBUFFER'], _0x2e7817), _0x3aa1d8 && _0xa78845[_0x2f44ca(293)](0, 0, _0xfb9075, _0x4056ab), _0xfdc129 && (_0x2e7817 ? (this[_0x2f44ca(183)] = _0x4056ab, this['pushScissor'](0, 0, _0xfb9075, _0x4056ab)) : (this[_0x2f44ca(183)] = this['height'], this[_0x2f44ca(321)]())), this[_0x2f44ca(171)] = _0x2e7817, _0x285213 && this[_0x2f44ca(290)](), this;
        },
        'popFramebuffer': function (_0x18db96, _0x50f7ba, _0x3d1631) {
            var _0x16bb93 = _0x2f24ad;
            _0x18db96 === undefined && (_0x18db96 = ![]);
            _0x50f7ba === undefined && (_0x50f7ba = ![]);
            _0x3d1631 === undefined && (_0x3d1631 = !![]);
            var _0x2c2450 = this[_0x16bb93(318)];
            _0x2c2450[_0x16bb93(322)]();
            var _0x401a50 = _0x2c2450[_0x2c2450['length'] - 1];
            return !_0x401a50 && (_0x401a50 = null), this[_0x16bb93(319)](_0x401a50, _0x18db96, _0x50f7ba, _0x3d1631), _0x401a50;
        },
        'setProgram': function (_0x33d3b4) {
            var _0x1625a7 = _0x2f24ad;
            if (_0x33d3b4 !== this[_0x1625a7(172)])
                return this[_0x1625a7(299)](), this['gl'][_0x1625a7(323)](_0x33d3b4), this[_0x1625a7(172)] = _0x33d3b4, !![];
            return ![];
        },
        'resetProgram': function () {
            var _0x65c4d5 = _0x2f24ad;
            return this['gl'][_0x65c4d5(323)](this[_0x65c4d5(172)]), this;
        },
        'createTextureFromSource': function (_0x1bdc5c, _0x4717e0, _0x79ab7e, _0x41ff63) {
            var _0x4dcc69 = _0x2f24ad, _0x4d8a71 = this['gl'], _0x2f964c = _0x4d8a71[_0x4dcc69(324)], _0x1873ee = _0x4d8a71['NEAREST'], _0x54c533 = _0x4d8a71['CLAMP_TO_EDGE'], _0x22c0b8 = null;
            _0x4717e0 = _0x1bdc5c ? _0x1bdc5c[_0x4dcc69(159)] : _0x4717e0, _0x79ab7e = _0x1bdc5c ? _0x1bdc5c[_0x4dcc69(160)] : _0x79ab7e;
            var _0x1aa95f = IsSizePowerOfTwo(_0x4717e0, _0x79ab7e);
            return _0x1aa95f && (_0x54c533 = _0x4d8a71[_0x4dcc69(325)]), _0x41ff63 === CONST[_0x4dcc69(326)][_0x4dcc69(327)] && this[_0x4dcc69(151)][_0x4dcc69(328)] && (_0x2f964c = _0x1aa95f ? this[_0x4dcc69(156)] : _0x4d8a71[_0x4dcc69(327)], _0x1873ee = _0x4d8a71['LINEAR']), !_0x1bdc5c && typeof _0x4717e0 === _0x4dcc69(329) && typeof _0x79ab7e === _0x4dcc69(329) ? _0x22c0b8 = this['createTexture2D'](0, _0x2f964c, _0x1873ee, _0x54c533, _0x54c533, _0x4d8a71['RGBA'], null, _0x4717e0, _0x79ab7e) : _0x22c0b8 = this[_0x4dcc69(330)](0, _0x2f964c, _0x1873ee, _0x54c533, _0x54c533, _0x4d8a71[_0x4dcc69(265)], _0x1bdc5c), _0x22c0b8;
        },
        'createTexture2D': function (_0x1ab0f0, _0x2a2a03, _0x20f404, _0x3576f7, _0x116757, _0xe0bc95, _0x332ceb, _0xd435a8, _0x22b08f, _0xcd64ed, _0x44599e, _0x3e5869) {
            var _0x35975f = _0x2f24ad;
            _0xcd64ed = _0xcd64ed === undefined || _0xcd64ed === null ? !![] : _0xcd64ed;
            _0x44599e === undefined && (_0x44599e = ![]);
            _0x3e5869 === undefined && (_0x3e5869 = ![]);
            var _0x3eae6d = this['gl'], _0x4613ea = _0x3eae6d['createTexture']();
            _0x3eae6d['activeTexture'](_0x3eae6d[_0x35975f(262)]);
            var _0x821fd2 = _0x3eae6d[_0x35975f(240)](_0x3eae6d[_0x35975f(331)]);
            return _0x3eae6d[_0x35975f(316)](_0x3eae6d[_0x35975f(263)], _0x4613ea), _0x3eae6d[_0x35975f(332)](_0x3eae6d[_0x35975f(263)], _0x3eae6d[_0x35975f(333)], _0x2a2a03), _0x3eae6d['texParameteri'](_0x3eae6d[_0x35975f(263)], _0x3eae6d[_0x35975f(334)], _0x20f404), _0x3eae6d[_0x35975f(332)](_0x3eae6d[_0x35975f(263)], _0x3eae6d[_0x35975f(335)], _0x116757), _0x3eae6d[_0x35975f(332)](_0x3eae6d['TEXTURE_2D'], _0x3eae6d[_0x35975f(336)], _0x3576f7), _0x3eae6d[_0x35975f(337)](_0x3eae6d[_0x35975f(338)], _0xcd64ed), _0x3eae6d[_0x35975f(337)](_0x3eae6d[_0x35975f(339)], _0x3e5869), _0x332ceb === null || _0x332ceb === undefined ? _0x3eae6d[_0x35975f(264)](_0x3eae6d[_0x35975f(263)], _0x1ab0f0, _0xe0bc95, _0xd435a8, _0x22b08f, 0, _0xe0bc95, _0x3eae6d['UNSIGNED_BYTE'], null) : (!_0x44599e && (_0xd435a8 = _0x332ceb['width'], _0x22b08f = _0x332ceb[_0x35975f(160)]), _0x3eae6d[_0x35975f(264)](_0x3eae6d[_0x35975f(263)], _0x1ab0f0, _0xe0bc95, _0xe0bc95, _0x3eae6d['UNSIGNED_BYTE'], _0x332ceb)), IsSizePowerOfTwo(_0xd435a8, _0x22b08f) && _0x3eae6d[_0x35975f(340)](_0x3eae6d[_0x35975f(263)]), _0x821fd2 && _0x3eae6d[_0x35975f(316)](_0x3eae6d[_0x35975f(263)], _0x821fd2), _0x4613ea[_0x35975f(341)] = _0xcd64ed, _0x4613ea[_0x35975f(342)] = ![], _0x4613ea[_0x35975f(159)] = _0xd435a8, _0x4613ea[_0x35975f(160)] = _0x22b08f, _0x4613ea[_0x35975f(315)] = 0, _0x4613ea[_0x35975f(314)] = -1, _0x4613ea;
        },
        'createFramebuffer': function (_0x185fe4, _0x122e84, _0x563048, _0x3b1f20) {
            var _0x3f8e8a = _0x2f24ad, _0x163cc0 = this['gl'], _0xbbf044 = _0x163cc0[_0x3f8e8a(343)](), _0x553ef1 = 0;
            this[_0x3f8e8a(319)](_0xbbf044);
            if (_0x3b1f20) {
                var _0x44b77f = _0x163cc0[_0x3f8e8a(344)]();
                _0x163cc0[_0x3f8e8a(345)](_0x163cc0['RENDERBUFFER'], _0x44b77f), _0x163cc0['renderbufferStorage'](_0x163cc0[_0x3f8e8a(346)], _0x163cc0[_0x3f8e8a(347)], _0x185fe4, _0x122e84), _0x163cc0[_0x3f8e8a(348)](_0x163cc0[_0x3f8e8a(285)], _0x163cc0[_0x3f8e8a(349)], _0x163cc0[_0x3f8e8a(346)], _0x44b77f);
            }
            _0x563048[_0x3f8e8a(342)] = !![], _0x563048[_0x3f8e8a(341)] = ![], _0x163cc0[_0x3f8e8a(350)](_0x163cc0[_0x3f8e8a(285)], _0x163cc0[_0x3f8e8a(351)], _0x163cc0['TEXTURE_2D'], _0x563048, 0), _0x553ef1 = _0x163cc0[_0x3f8e8a(352)](_0x163cc0['FRAMEBUFFER']);
            if (_0x553ef1 !== _0x163cc0[_0x3f8e8a(353)]) {
                var _0x46388c = {
                    36054: _0x3f8e8a(354),
                    36055: 'Missing Attachment',
                    36057: _0x3f8e8a(355),
                    36061: _0x3f8e8a(356)
                };
                throw new Error('Framebuffer status: ' + _0x46388c[_0x553ef1]);
            }
            return _0xbbf044[_0x3f8e8a(320)] = _0x563048, this['setFramebuffer'](null), this['resetTextures'](), _0xbbf044;
        },
        'createProgram': function (_0x4c7ee7, _0x235c81) {
            var _0xdbc8a8 = _0x2f24ad, _0x18da3f = this['gl'], _0x26f79a = _0x18da3f[_0xdbc8a8(357)](), _0x3b7583 = _0x18da3f[_0xdbc8a8(358)](_0x18da3f[_0xdbc8a8(359)]), _0x4db2c8 = _0x18da3f[_0xdbc8a8(358)](_0x18da3f[_0xdbc8a8(360)]);
            _0x18da3f[_0xdbc8a8(361)](_0x3b7583, _0x4c7ee7), _0x18da3f[_0xdbc8a8(361)](_0x4db2c8, _0x235c81), _0x18da3f['compileShader'](_0x3b7583), _0x18da3f[_0xdbc8a8(362)](_0x4db2c8);
            if (!_0x18da3f[_0xdbc8a8(363)](_0x3b7583, _0x18da3f[_0xdbc8a8(364)]))
                throw new Error(_0xdbc8a8(365) + _0x18da3f[_0xdbc8a8(366)](_0x3b7583));
            if (!_0x18da3f[_0xdbc8a8(363)](_0x4db2c8, _0x18da3f[_0xdbc8a8(364)]))
                throw new Error(_0xdbc8a8(367) + _0x18da3f[_0xdbc8a8(366)](_0x4db2c8));
            _0x18da3f[_0xdbc8a8(368)](_0x26f79a, _0x3b7583), _0x18da3f['attachShader'](_0x26f79a, _0x4db2c8), _0x18da3f[_0xdbc8a8(369)](_0x26f79a);
            if (!_0x18da3f[_0xdbc8a8(370)](_0x26f79a, _0x18da3f[_0xdbc8a8(371)]))
                throw new Error(_0xdbc8a8(372) + _0x18da3f['getProgramInfoLog'](_0x26f79a));
            return _0x18da3f[_0xdbc8a8(323)](_0x26f79a), _0x26f79a;
        },
        'createVertexBuffer': function (_0x2ca025, _0x2bd6e2) {
            var _0x186182 = _0x2f24ad, _0x3520f0 = this['gl'], _0x5f1ec6 = _0x3520f0[_0x186182(373)]();
            return _0x3520f0[_0x186182(374)](_0x3520f0[_0x186182(375)], _0x5f1ec6), _0x3520f0[_0x186182(376)](_0x3520f0[_0x186182(375)], _0x2ca025, _0x2bd6e2), _0x3520f0[_0x186182(374)](_0x3520f0[_0x186182(375)], null), _0x5f1ec6;
        },
        'createIndexBuffer': function (_0x3233f7, _0x1da098) {
            var _0x27d325 = _0x2f24ad, _0xa1cc08 = this['gl'], _0x2ec53b = _0xa1cc08[_0x27d325(373)]();
            return _0xa1cc08[_0x27d325(374)](_0xa1cc08[_0x27d325(377)], _0x2ec53b), _0xa1cc08[_0x27d325(376)](_0xa1cc08[_0x27d325(377)], _0x3233f7, _0x1da098), _0xa1cc08[_0x27d325(374)](_0xa1cc08[_0x27d325(377)], null), _0x2ec53b;
        },
        'deleteTexture': function (_0x4c544c, _0x3828a7) {
            var _0x4a3d36 = _0x2f24ad;
            return _0x3828a7 && this['resetTextures'](!![]), _0x4c544c && this['gl'][_0x4a3d36(261)](_0x4c544c), this;
        },
        'deleteFramebuffer': function (_0x1d489a) {
            return _0x1d489a && (this['gl']['deleteFramebuffer'](_0x1d489a), ArrayRemove(this['fboStack'], _0x1d489a), this['currentFramebuffer'] === _0x1d489a && (this['currentFramebuffer'] = null)), this;
        },
        'deleteProgram': function (_0x4ffde5) {
            return _0x4ffde5 && this['gl']['deleteProgram'](_0x4ffde5), this;
        },
        'deleteBuffer': function (_0x3bd757) {
            var _0x25caa6 = _0x2f24ad;
            return this['gl'][_0x25caa6(378)](_0x3bd757), this;
        },
        'preRenderCamera': function (_0x19d2e5) {
            var _0x131fe1 = _0x2f24ad, _0x14256a = _0x19d2e5['x'], _0x2690fc = _0x19d2e5['y'], _0x2cb98d = _0x19d2e5[_0x131fe1(159)], _0x36a816 = _0x19d2e5[_0x131fe1(160)], _0x1cf236 = _0x19d2e5[_0x131fe1(199)];
            _0x19d2e5[_0x131fe1(205)](CameraEvents[_0x131fe1(379)], _0x19d2e5), this['pipelines']['preBatchCamera'](_0x19d2e5), this[_0x131fe1(380)](_0x14256a, _0x2690fc, _0x2cb98d, _0x36a816);
            _0x19d2e5['mask'] && (this['currentCameraMask'][_0x131fe1(304)] = _0x19d2e5[_0x131fe1(304)], this[_0x131fe1(187)][_0x131fe1(381)] = _0x19d2e5[_0x131fe1(382)], _0x19d2e5['mask']['preRenderWebGL'](this, _0x19d2e5, _0x19d2e5[_0x131fe1(382)]));
            if (_0x1cf236['alphaGL'] > 0) {
                var _0x3df706 = this['pipelines'][_0x131fe1(383)]();
                _0x3df706[_0x131fe1(384)](_0x14256a, _0x2690fc, _0x2cb98d, _0x36a816, Utils['getTintFromFloats'](_0x1cf236[_0x131fe1(258)], _0x1cf236['greenGL'], _0x1cf236['redGL'], 1), _0x1cf236['alphaGL']);
            }
        },
        'getCurrentStencilMask': function () {
            var _0x3dcfc3 = _0x2f24ad, _0x2e7a05 = null, _0x3df74d = this[_0x3dcfc3(186)], _0x55f752 = this['currentCameraMask'];
            if (_0x3df74d[_0x3dcfc3(302)] > 0)
                _0x2e7a05 = _0x3df74d[_0x3df74d[_0x3dcfc3(302)] - 1];
            else
                _0x55f752[_0x3dcfc3(304)] && _0x55f752[_0x3dcfc3(304)]['isStencil'] && (_0x2e7a05 = _0x55f752);
            return _0x2e7a05;
        },
        'postRenderCamera': function (_0x1ab0f6) {
            var _0x35bf28 = _0x2f24ad, _0x4bb03e = _0x1ab0f6[_0x35bf28(385)], _0x465d8c = _0x1ab0f6[_0x35bf28(386)];
            if (_0x4bb03e[_0x35bf28(387)] || (_0x465d8c['isRunning'] || _0x465d8c[_0x35bf28(388)])) {
                var _0x483b6d = this[_0x35bf28(158)][_0x35bf28(383)]();
                _0x4bb03e['postRenderWebGL'](_0x483b6d, Utils[_0x35bf28(389)]), _0x465d8c[_0x35bf28(390)](_0x483b6d, Utils[_0x35bf28(389)]);
            }
            _0x1ab0f6[_0x35bf28(391)] = ![], this[_0x35bf28(321)](), _0x1ab0f6['mask'] && (this['currentCameraMask'][_0x35bf28(304)] = null, _0x1ab0f6[_0x35bf28(304)][_0x35bf28(390)](this, _0x1ab0f6[_0x35bf28(382)])), this[_0x35bf28(158)]['postBatchCamera'](_0x1ab0f6), _0x1ab0f6[_0x35bf28(205)](CameraEvents['POST_RENDER'], _0x1ab0f6);
        },
        'preRender': function () {
            var _0x4a7c41 = _0x2f24ad;
            if (this[_0x4a7c41(163)])
                return;
            var _0x59ad0b = this['gl'];
            _0x59ad0b[_0x4a7c41(284)](_0x59ad0b[_0x4a7c41(285)], null);
            if (this[_0x4a7c41(151)][_0x4a7c41(152)]) {
                var _0x580739 = this[_0x4a7c41(151)][_0x4a7c41(199)];
                _0x59ad0b['clearColor'](_0x580739['redGL'], _0x580739[_0x4a7c41(392)], _0x580739[_0x4a7c41(258)], _0x580739['alphaGL']), _0x59ad0b[_0x4a7c41(393)](_0x59ad0b[_0x4a7c41(394)] | _0x59ad0b[_0x4a7c41(395)] | _0x59ad0b[_0x4a7c41(396)]);
            }
            _0x59ad0b[_0x4a7c41(256)](_0x59ad0b[_0x4a7c41(301)]), this[_0x4a7c41(175)] = this[_0x4a7c41(195)], this[_0x4a7c41(397)]['length'] = 0, this[_0x4a7c41(397)][_0x4a7c41(266)](this[_0x4a7c41(175)]), this['game'][_0x4a7c41(398)][_0x4a7c41(399)] && _0x59ad0b[_0x4a7c41(294)](0, this[_0x4a7c41(183)] - this[_0x4a7c41(160)], this[_0x4a7c41(159)], this[_0x4a7c41(160)]), this[_0x4a7c41(303)][_0x4a7c41(304)] = null, this[_0x4a7c41(187)][_0x4a7c41(304)] = null, this[_0x4a7c41(186)][_0x4a7c41(302)] = 0, this[_0x4a7c41(193)] = 0, this[_0x4a7c41(205)](Events[_0x4a7c41(379)]);
        },
        'render': function (_0x668792, _0x25bd93, _0x54ccec) {
            var _0x4eafcd = _0x2f24ad;
            if (this[_0x4eafcd(163)])
                return;
            var _0x63e400 = _0x25bd93[_0x4eafcd(302)];
            this[_0x4eafcd(205)](Events[_0x4eafcd(400)], _0x668792, _0x54ccec), this[_0x4eafcd(401)](_0x54ccec);
            if (_0x63e400 === 0) {
                this['setBlendMode'](CONST[_0x4eafcd(270)][_0x4eafcd(402)]), this[_0x4eafcd(403)](_0x54ccec);
                return;
            }
            this[_0x4eafcd(189)] = '';
            var _0x24cd53 = this['currentMask'];
            for (var _0x563cab = 0; _0x563cab < _0x63e400; _0x563cab++) {
                this[_0x4eafcd(192)] = _0x563cab === _0x63e400 - 1;
                var _0xbc242c = _0x25bd93[_0x563cab], _0x309d62 = _0xbc242c[_0x4eafcd(304)];
                _0x24cd53 = this[_0x4eafcd(303)];
                _0x24cd53[_0x4eafcd(304)] && _0x24cd53['mask'] !== _0x309d62 && _0x24cd53[_0x4eafcd(304)][_0x4eafcd(390)](this, _0x24cd53[_0x4eafcd(381)]);
                _0x309d62 && _0x24cd53[_0x4eafcd(304)] !== _0x309d62 && _0x309d62[_0x4eafcd(404)](this, _0xbc242c, _0x54ccec);
                _0xbc242c['blendMode'] !== this[_0x4eafcd(173)] && this[_0x4eafcd(269)](_0xbc242c[_0x4eafcd(405)]);
                var _0x3fb5f6 = _0xbc242c[_0x4eafcd(406)];
                _0x3fb5f6 !== this[_0x4eafcd(189)] && (this[_0x4eafcd(190)] = !![], this[_0x4eafcd(189)] = _0x3fb5f6), !this[_0x4eafcd(192)] ? this['nextTypeMatch'] = _0x25bd93[_0x563cab + 1][_0x4eafcd(406)] === this['currentType'] : this[_0x4eafcd(191)] = ![], _0xbc242c[_0x4eafcd(407)](this, _0xbc242c, _0x54ccec), this[_0x4eafcd(190)] = ![];
            }
            _0x24cd53 = this[_0x4eafcd(303)], _0x24cd53[_0x4eafcd(304)] && _0x24cd53[_0x4eafcd(304)][_0x4eafcd(390)](this, _0x24cd53[_0x4eafcd(381)]), this[_0x4eafcd(269)](CONST[_0x4eafcd(270)][_0x4eafcd(402)]), this[_0x4eafcd(403)](_0x54ccec);
        },
        'postRender': function () {
            var _0x31e236 = _0x2f24ad;
            if (this[_0x31e236(163)])
                return;
            this[_0x31e236(299)](), this[_0x31e236(205)](Events[_0x31e236(408)]);
            var _0x4bd43c = this[_0x31e236(164)];
            _0x4bd43c[_0x31e236(409)] && (WebGLSnapshot(this[_0x31e236(161)], _0x4bd43c), _0x4bd43c[_0x31e236(409)] = null), this[_0x31e236(193)] > 0 && (this[_0x31e236(167)]++, this[_0x31e236(166)] = 1);
        },
        'snapshot': function (_0x4e4c1a, _0x5396cb, _0xd5b332) {
            var _0x188ff3 = _0x2f24ad;
            return this[_0x188ff3(410)](0, 0, this['gl'][_0x188ff3(411)], this['gl'][_0x188ff3(183)], _0x4e4c1a, _0x5396cb, _0xd5b332);
        },
        'snapshotArea': function (_0x3eb819, _0x1dc04c, _0x58f1ea, _0x244619, _0x4d20a6, _0x317d54, _0x576568) {
            var _0x1cc844 = _0x2f24ad, _0x37e924 = this[_0x1cc844(164)];
            return _0x37e924[_0x1cc844(409)] = _0x4d20a6, _0x37e924[_0x1cc844(406)] = _0x317d54, _0x37e924[_0x1cc844(412)] = _0x576568, _0x37e924[_0x1cc844(413)] = ![], _0x37e924['x'] = _0x3eb819, _0x37e924['y'] = _0x1dc04c, _0x37e924['width'] = Math[_0x1cc844(414)](_0x58f1ea, this['gl']['drawingBufferWidth']), _0x37e924['height'] = Math['min'](_0x244619, this['gl']['drawingBufferHeight']), this;
        },
        'snapshotPixel': function (_0x42c2f4, _0x1706b4, _0x251e32) {
            var _0x1ff563 = _0x2f24ad;
            return this[_0x1ff563(410)](_0x42c2f4, _0x1706b4, 1, 1, _0x251e32), this[_0x1ff563(164)][_0x1ff563(413)] = !![], this;
        },
        'snapshotFramebuffer': function (_0x58299e, _0x43cb03, _0x5fb1b9, _0x7c15f9, _0xbe894f, _0x488f9a, _0x19a1df, _0x6da1c1, _0x37002d, _0x4bbeda, _0x5b7b4d) {
            var _0x228cbf = _0x2f24ad;
            _0xbe894f === undefined && (_0xbe894f = ![]);
            _0x488f9a === undefined && (_0x488f9a = 0);
            _0x19a1df === undefined && (_0x19a1df = 0);
            _0x6da1c1 === undefined && (_0x6da1c1 = _0x43cb03);
            _0x37002d === undefined && (_0x37002d = _0x5fb1b9);
            var _0xadadfc = this['currentFramebuffer'];
            this[_0x228cbf(410)](_0x488f9a, _0x19a1df, _0x6da1c1, _0x37002d, _0x7c15f9, _0x4bbeda, _0x5b7b4d);
            var _0x38d5f5 = this[_0x228cbf(164)];
            return _0x38d5f5[_0x228cbf(413)] = _0xbe894f, _0x38d5f5[_0x228cbf(415)] = !![], _0x38d5f5[_0x228cbf(416)] = _0x43cb03, _0x38d5f5['bufferHeight'] = _0x5fb1b9, this[_0x228cbf(319)](_0x58299e), WebGLSnapshot(this['canvas'], _0x38d5f5), this[_0x228cbf(319)](_0xadadfc), _0x38d5f5[_0x228cbf(409)] = null, _0x38d5f5[_0x228cbf(415)] = ![], this;
        },
        'canvasToTexture': function (_0x4cc572, _0x1077ec, _0x3a4596, _0x16e59e) {
            var _0x56f83a = _0x2f24ad;
            return _0x3a4596 === undefined && (_0x3a4596 = ![]), _0x16e59e === undefined && (_0x16e59e = ![]), !_0x1077ec ? this[_0x56f83a(417)](_0x4cc572, _0x3a4596, _0x16e59e) : this[_0x56f83a(418)](_0x4cc572, _0x1077ec, _0x16e59e);
        },
        'createCanvasTexture': function (_0x325eff, _0xbca205, _0x59f388) {
            var _0x51e3e2 = _0x2f24ad;
            _0xbca205 === undefined && (_0xbca205 = ![]);
            _0x59f388 === undefined && (_0x59f388 = ![]);
            var _0x24f365 = this['gl'], _0x9c031e = _0x24f365[_0x51e3e2(324)], _0x241a6a = _0x24f365[_0x51e3e2(324)], _0x11734a = _0x325eff['width'], _0x264784 = _0x325eff[_0x51e3e2(160)], _0x5cc459 = _0x24f365[_0x51e3e2(419)], _0x13ce35 = IsSizePowerOfTwo(_0x11734a, _0x264784);
            return !_0xbca205 && _0x13ce35 && (_0x5cc459 = _0x24f365[_0x51e3e2(325)]), this[_0x51e3e2(151)]['antialias'] && (_0x9c031e = _0x13ce35 ? this[_0x51e3e2(156)] : _0x24f365[_0x51e3e2(327)], _0x241a6a = _0x24f365[_0x51e3e2(327)]), this['createTexture2D'](0, _0x9c031e, _0x241a6a, _0x5cc459, _0x5cc459, _0x24f365[_0x51e3e2(265)], _0x325eff, _0x11734a, _0x264784, !![], ![], _0x59f388);
        },
        'updateCanvasTexture': function (_0x5ba916, _0x5500fd, _0xbf13f7) {
            var _0x56baef = _0x2f24ad;
            _0xbf13f7 === undefined && (_0xbf13f7 = ![]);
            var _0x1a424e = this['gl'], _0x5eab7b = _0x5ba916[_0x56baef(159)], _0x3924f3 = _0x5ba916[_0x56baef(160)];
            if (_0x5eab7b > 0 && _0x3924f3 > 0) {
                _0x1a424e['activeTexture'](_0x1a424e[_0x56baef(262)]);
                var _0x2705f9 = _0x1a424e[_0x56baef(240)](_0x1a424e['TEXTURE_BINDING_2D']);
                _0x1a424e['bindTexture'](_0x1a424e[_0x56baef(263)], _0x5500fd), _0x1a424e[_0x56baef(337)](_0x1a424e[_0x56baef(339)], _0xbf13f7), _0x1a424e[_0x56baef(337)](_0x1a424e['UNPACK_PREMULTIPLY_ALPHA_WEBGL'], !![]), _0x1a424e[_0x56baef(264)](_0x1a424e[_0x56baef(263)], 0, _0x1a424e['RGBA'], _0x1a424e[_0x56baef(265)], _0x1a424e[_0x56baef(221)], _0x5ba916), _0x5500fd[_0x56baef(159)] = _0x5eab7b, _0x5500fd['height'] = _0x3924f3, _0x2705f9 && _0x1a424e[_0x56baef(316)](_0x1a424e['TEXTURE_2D'], _0x2705f9);
            }
            return _0x5500fd;
        },
        'createVideoTexture': function (_0x453fec, _0x37c7be, _0x5164f0) {
            var _0x36a638 = _0x2f24ad;
            _0x37c7be === undefined && (_0x37c7be = ![]);
            _0x5164f0 === undefined && (_0x5164f0 = ![]);
            var _0x48ea99 = this['gl'], _0x371574 = _0x48ea99[_0x36a638(324)], _0x1d5698 = _0x48ea99[_0x36a638(324)], _0x317f4c = _0x453fec['videoWidth'], _0x1361c5 = _0x453fec[_0x36a638(420)], _0x1dc95e = _0x48ea99[_0x36a638(419)], _0x5cf313 = IsSizePowerOfTwo(_0x317f4c, _0x1361c5);
            return !_0x37c7be && _0x5cf313 && (_0x1dc95e = _0x48ea99[_0x36a638(325)]), this[_0x36a638(151)][_0x36a638(328)] && (_0x371574 = _0x5cf313 ? this[_0x36a638(156)] : _0x48ea99[_0x36a638(327)], _0x1d5698 = _0x48ea99[_0x36a638(327)]), this[_0x36a638(330)](0, _0x371574, _0x1d5698, _0x1dc95e, _0x1dc95e, _0x48ea99[_0x36a638(265)], _0x453fec, _0x317f4c, _0x1361c5, !![], !![], _0x5164f0);
        },
        'updateVideoTexture': function (_0x3c25fd, _0x1a66c2, _0x2118cf) {
            var _0x432e53 = _0x2f24ad;
            _0x2118cf === undefined && (_0x2118cf = ![]);
            var _0x21ff8d = this['gl'], _0x229b03 = _0x3c25fd[_0x432e53(421)], _0x509127 = _0x3c25fd[_0x432e53(420)];
            if (_0x229b03 > 0 && _0x509127 > 0) {
                _0x21ff8d[_0x432e53(267)](_0x21ff8d[_0x432e53(262)]);
                var _0x31c0f7 = _0x21ff8d[_0x432e53(240)](_0x21ff8d[_0x432e53(331)]);
                _0x21ff8d['bindTexture'](_0x21ff8d['TEXTURE_2D'], _0x1a66c2), _0x21ff8d['pixelStorei'](_0x21ff8d[_0x432e53(339)], _0x2118cf), _0x21ff8d[_0x432e53(264)](_0x21ff8d[_0x432e53(263)], 0, _0x21ff8d[_0x432e53(265)], _0x21ff8d[_0x432e53(265)], _0x21ff8d[_0x432e53(221)], _0x3c25fd), _0x1a66c2[_0x432e53(159)] = _0x229b03, _0x1a66c2[_0x432e53(160)] = _0x509127, _0x31c0f7 && _0x21ff8d[_0x432e53(316)](_0x21ff8d['TEXTURE_2D'], _0x31c0f7);
            }
            return _0x1a66c2;
        },
        'setTextureFilter': function (_0x3859ee, _0x49dd5b) {
            var _0x37227b = _0x2f24ad, _0x3cd1da = this['gl'], _0x4affcb = [
                    _0x3cd1da['LINEAR'],
                    _0x3cd1da['NEAREST']
                ][_0x49dd5b];
            _0x3cd1da[_0x37227b(267)](_0x3cd1da[_0x37227b(262)]);
            var _0x548170 = _0x3cd1da[_0x37227b(240)](_0x3cd1da['TEXTURE_BINDING_2D']);
            return _0x3cd1da['bindTexture'](_0x3cd1da['TEXTURE_2D'], _0x3859ee), _0x3cd1da[_0x37227b(332)](_0x3cd1da[_0x37227b(263)], _0x3cd1da[_0x37227b(333)], _0x4affcb), _0x3cd1da[_0x37227b(332)](_0x3cd1da[_0x37227b(263)], _0x3cd1da['TEXTURE_MAG_FILTER'], _0x4affcb), _0x548170 && _0x3cd1da['bindTexture'](_0x3cd1da['TEXTURE_2D'], _0x548170), this;
        },
        'getMaxTextureSize': function () {
            var _0x530d98 = _0x2f24ad;
            return this[_0x530d98(151)][_0x530d98(239)];
        },
        'destroy': function () {
            var _0x1fc590 = _0x2f24ad;
            this[_0x1fc590(161)][_0x1fc590(422)](_0x1fc590(423), this[_0x1fc590(176)], ![]), this[_0x1fc590(161)][_0x1fc590(422)](_0x1fc590(211), this[_0x1fc590(177)], ![]);
            var _0x26d5d2 = this['gl'], _0x14aa4d = this[_0x1fc590(169)];
            for (var _0x4fec05 = 0; _0x4fec05 < _0x14aa4d[_0x1fc590(302)]; _0x4fec05++) {
                _0x26d5d2[_0x1fc590(261)](_0x14aa4d[_0x4fec05]);
            }
            this[_0x1fc590(158)][_0x1fc590(424)](), this[_0x1fc590(425)](), this['fboStack'] = [], this[_0x1fc590(186)] = [], this[_0x1fc590(181)] = {}, this[_0x1fc590(168)] = [], this['gl'] = null, this[_0x1fc590(157)] = null, this[_0x1fc590(161)] = null, this[_0x1fc590(163)] = !![], this[_0x1fc590(303)] = null, this[_0x1fc590(187)] = null;
        }
    });
function _0x352f(_0x1ae368, _0x9295c0) {
    return _0x352f = function (_0x4e484e, _0x352f8b) {
        _0x4e484e = _0x4e484e - 127;
        var _0x8ec38 = _0x4e48[_0x4e484e];
        return _0x8ec38;
    }, _0x352f(_0x1ae368, _0x9295c0);
}
module[_0x2f24ad(426)] = WebGLRenderer;
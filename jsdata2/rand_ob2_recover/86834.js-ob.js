var AngleBetweenPoints = require(_0x43793e(391)), Body = require(_0x43793e(392)), Clamp = require('../../math/Clamp'), Class = require('../../utils/Class'), Collider = require(_0x43793e(393)), CONST = require('./const'), DistanceBetween = require(_0x43793e(394)), EventEmitter = require('eventemitter3'), Events = require(_0x43793e(395)), FuzzyEqual = require('../../math/fuzzy/Equal'), FuzzyGreaterThan = require(_0x43793e(396)), FuzzyLessThan = require(_0x43793e(397)), GetOverlapX = require(_0x43793e(398)), GetOverlapY = require(_0x43793e(399)), GetTilesWithinWorldXY = require(_0x43793e(400)), GetValue = require(_0x43793e(401)), MATH_CONST = require('../../math/const'), ProcessQueue = require(_0x43793e(402)), ProcessTileCallbacks = require(_0x43793e(403)), Rectangle = require(_0x43793e(404)), RTree = require(_0x43793e(405)), SeparateTile = require(_0x43793e(406)), SeparateX = require(_0x43793e(407)), SeparateY = require(_0x43793e(408)), Set = require(_0x43793e(409)), StaticBody = require(_0x43793e(410)), TileIntersectsBody = require('./tilemap/TileIntersectsBody'), TransformMatrix = require(_0x43793e(411)), Vector2 = require(_0x43793e(412)), Wrap = require(_0x43793e(413)), World = new Class({
        'Extends': EventEmitter,
        'initialize': function World(_0x3a263e, _0x4253b1) {
            var _0x13e697 = _0x43793e;
            EventEmitter[_0x13e697(414)](this), this[_0x13e697(415)] = _0x3a263e, this['bodies'] = new Set(), this[_0x13e697(416)] = new Set(), this[_0x13e697(417)] = new Set(), this[_0x13e697(418)] = new ProcessQueue(), this[_0x13e697(419)] = new Vector2(GetValue(_0x4253b1, _0x13e697(420), 0), GetValue(_0x4253b1, _0x13e697(421), 0)), this[_0x13e697(422)] = new Rectangle(GetValue(_0x4253b1, 'x', 0), GetValue(_0x4253b1, 'y', 0), GetValue(_0x4253b1, _0x13e697(423), _0x3a263e['sys']['scale'][_0x13e697(423)]), GetValue(_0x4253b1, _0x13e697(424), _0x3a263e[_0x13e697(425)]['scale']['height'])), this[_0x13e697(426)] = {
                'up': GetValue(_0x4253b1, _0x13e697(427), !![]),
                'down': GetValue(_0x4253b1, _0x13e697(428), !![]),
                'left': GetValue(_0x4253b1, _0x13e697(429), !![]),
                'right': GetValue(_0x4253b1, _0x13e697(430), !![])
            }, this[_0x13e697(431)] = GetValue(_0x4253b1, _0x13e697(431), 60), this[_0x13e697(432)] = GetValue(_0x4253b1, _0x13e697(432), !![]), this[_0x13e697(433)] = 0, this[_0x13e697(434)] = 1 / this[_0x13e697(431)], this['_frameTimeMS'] = 1000 * this[_0x13e697(434)], this[_0x13e697(435)] = 0, this[_0x13e697(436)] = GetValue(_0x4253b1, 'timeScale', 1), this[_0x13e697(437)] = GetValue(_0x4253b1, _0x13e697(438), 4), this[_0x13e697(439)] = GetValue(_0x4253b1, _0x13e697(440), 16), this[_0x13e697(441)] = GetValue(_0x4253b1, _0x13e697(441), ![]), this[_0x13e697(442)] = GetValue(_0x4253b1, _0x13e697(442), ![]), this[_0x13e697(443)] = 0, this['drawDebug'] = GetValue(_0x4253b1, _0x13e697(444), ![]), this[_0x13e697(445)], this[_0x13e697(446)] = {
                'debugShowBody': GetValue(_0x4253b1, _0x13e697(447), !![]),
                'debugShowStaticBody': GetValue(_0x4253b1, _0x13e697(448), !![]),
                'debugShowVelocity': GetValue(_0x4253b1, _0x13e697(449), !![]),
                'bodyDebugColor': GetValue(_0x4253b1, _0x13e697(450), 16711935),
                'staticBodyDebugColor': GetValue(_0x4253b1, _0x13e697(451), 255),
                'velocityDebugColor': GetValue(_0x4253b1, _0x13e697(452), 65280)
            }, this[_0x13e697(453)] = GetValue(_0x4253b1, _0x13e697(453), 16), this[_0x13e697(454)] = GetValue(_0x4253b1, _0x13e697(454), !![]), this['tree'] = new RTree(this[_0x13e697(453)]), this[_0x13e697(455)] = new RTree(this['maxEntries']), this['treeMinMax'] = {
                'minX': 0,
                'minY': 0,
                'maxX': 0,
                'maxY': 0
            }, this[_0x13e697(456)] = new TransformMatrix(), this[_0x13e697(457)] = new TransformMatrix(), this['drawDebug'] && this[_0x13e697(458)]();
        },
        'enable': function (_0x4de212, _0x408f77) {
            var _0x1e7d86 = _0x43793e;
            _0x408f77 === undefined && (_0x408f77 = CONST[_0x1e7d86(459)]);
            !Array['isArray'](_0x4de212) && (_0x4de212 = [_0x4de212]);
            for (var _0x8d6da6 = 0; _0x8d6da6 < _0x4de212['length']; _0x8d6da6++) {
                var _0x3bc57f = _0x4de212[_0x8d6da6];
                if (_0x3bc57f['isParent']) {
                    var _0x1ade9c = _0x3bc57f['getChildren']();
                    for (var _0x5e71ab = 0; _0x5e71ab < _0x1ade9c[_0x1e7d86(460)]; _0x5e71ab++) {
                        var _0x1fa27e = _0x1ade9c[_0x5e71ab];
                        _0x1fa27e[_0x1e7d86(461)] ? this['enable'](_0x1fa27e, _0x408f77) : this[_0x1e7d86(462)](_0x1fa27e, _0x408f77);
                    }
                } else
                    this[_0x1e7d86(462)](_0x3bc57f, _0x408f77);
            }
        },
        'enableBody': function (_0x28b6df, _0x297497) {
            var _0xd453d1 = _0x43793e;
            _0x297497 === undefined && (_0x297497 = CONST[_0xd453d1(459)]);
            if (!_0x28b6df[_0xd453d1(463)]) {
                if (_0x297497 === CONST[_0xd453d1(459)])
                    _0x28b6df[_0xd453d1(463)] = new Body(this, _0x28b6df);
                else
                    _0x297497 === CONST[_0xd453d1(464)] && (_0x28b6df[_0xd453d1(463)] = new StaticBody(this, _0x28b6df));
            }
            return this[_0xd453d1(465)](_0x28b6df['body']), _0x28b6df;
        },
        'add': function (_0x1b28fa) {
            var _0x599608 = _0x43793e;
            if (_0x1b28fa[_0x599608(466)] === CONST[_0x599608(459)])
                this[_0x599608(467)][_0x599608(468)](_0x1b28fa);
            else
                _0x1b28fa[_0x599608(466)] === CONST[_0x599608(464)] && (this[_0x599608(416)][_0x599608(468)](_0x1b28fa), this[_0x599608(455)]['insert'](_0x1b28fa));
            return _0x1b28fa[_0x599608(469)] = !![], _0x1b28fa;
        },
        'disable': function (_0x3140c8) {
            var _0x14fab3 = _0x43793e;
            !Array['isArray'](_0x3140c8) && (_0x3140c8 = [_0x3140c8]);
            for (var _0x1892b5 = 0; _0x1892b5 < _0x3140c8[_0x14fab3(460)]; _0x1892b5++) {
                var _0x5a47df = _0x3140c8[_0x1892b5];
                if (_0x5a47df[_0x14fab3(461)]) {
                    var _0x37a748 = _0x5a47df[_0x14fab3(470)]();
                    for (var _0x35da23 = 0; _0x35da23 < _0x37a748[_0x14fab3(460)]; _0x35da23++) {
                        var _0x117121 = _0x37a748[_0x35da23];
                        _0x117121[_0x14fab3(461)] ? this['disable'](_0x117121) : this[_0x14fab3(471)](_0x117121[_0x14fab3(463)]);
                    }
                } else
                    this[_0x14fab3(471)](_0x5a47df[_0x14fab3(463)]);
            }
        },
        'disableBody': function (_0x57aee1) {
            var _0x1c09ff = _0x43793e;
            this[_0x1c09ff(472)](_0x57aee1), _0x57aee1[_0x1c09ff(469)] = ![];
        },
        'remove': function (_0x1388b7) {
            var _0x30cc4a = _0x43793e;
            if (_0x1388b7[_0x30cc4a(466)] === CONST[_0x30cc4a(459)])
                this['tree'][_0x30cc4a(472)](_0x1388b7), this[_0x30cc4a(467)]['delete'](_0x1388b7);
            else
                _0x1388b7[_0x30cc4a(466)] === CONST['STATIC_BODY'] && (this[_0x30cc4a(416)][_0x30cc4a(473)](_0x1388b7), this[_0x30cc4a(455)][_0x30cc4a(472)](_0x1388b7));
        },
        'createDebugGraphic': function () {
            var _0x562279 = _0x43793e, _0x244720 = this[_0x562279(415)][_0x562279(425)]['add']['graphics']({
                    'x': 0,
                    'y': 0
                });
            return _0x244720[_0x562279(474)](Number[_0x562279(475)]), this[_0x562279(445)] = _0x244720, this[_0x562279(476)] = !![], _0x244720;
        },
        'setBounds': function (_0x36607d, _0x3ab386, _0x599566, _0x9b4164, _0x471379, _0x345dcc, _0x3c4c92, _0x253760) {
            var _0x1396f6 = _0x43793e;
            return this['bounds'][_0x1396f6(477)](_0x36607d, _0x3ab386, _0x599566, _0x9b4164), _0x471379 !== undefined && this[_0x1396f6(478)](_0x471379, _0x345dcc, _0x3c4c92, _0x253760), this;
        },
        'setBoundsCollision': function (_0x57dc91, _0x1b772a, _0x1e7136, _0x1dcab2) {
            var _0x545885 = _0x43793e;
            return _0x57dc91 === undefined && (_0x57dc91 = !![]), _0x1b772a === undefined && (_0x1b772a = !![]), _0x1e7136 === undefined && (_0x1e7136 = !![]), _0x1dcab2 === undefined && (_0x1dcab2 = !![]), this['checkCollision']['left'] = _0x57dc91, this[_0x545885(426)][_0x545885(479)] = _0x1b772a, this[_0x545885(426)]['up'] = _0x1e7136, this[_0x545885(426)][_0x545885(480)] = _0x1dcab2, this;
        },
        'pause': function () {
            var _0x46e545 = _0x43793e;
            return this[_0x46e545(442)] = !![], this[_0x46e545(481)](Events[_0x46e545(482)]), this;
        },
        'resume': function () {
            var _0x48410c = _0x43793e;
            return this['isPaused'] = ![], this['emit'](Events[_0x48410c(483)]), this;
        },
        'addCollider': function (_0x5a2936, _0x1ebb13, _0x358084, _0x4fadbe, _0x392234) {
            var _0x124a3a = _0x43793e;
            _0x358084 === undefined && (_0x358084 = null);
            _0x4fadbe === undefined && (_0x4fadbe = null);
            _0x392234 === undefined && (_0x392234 = _0x358084);
            var _0x25068c = new Collider(this, ![], _0x5a2936, _0x1ebb13, _0x358084, _0x4fadbe, _0x392234);
            return this[_0x124a3a(418)][_0x124a3a(465)](_0x25068c), _0x25068c;
        },
        'addOverlap': function (_0x487f5e, _0x54ac2b, _0x3b6a13, _0x1efecd, _0x155a0c) {
            var _0x48f2c6 = _0x43793e;
            _0x3b6a13 === undefined && (_0x3b6a13 = null);
            _0x1efecd === undefined && (_0x1efecd = null);
            _0x155a0c === undefined && (_0x155a0c = _0x3b6a13);
            var _0xdd0597 = new Collider(this, !![], _0x487f5e, _0x54ac2b, _0x3b6a13, _0x1efecd, _0x155a0c);
            return this[_0x48f2c6(418)][_0x48f2c6(465)](_0xdd0597), _0xdd0597;
        },
        'removeCollider': function (_0x3c0d15) {
            var _0x127893 = _0x43793e;
            return this[_0x127893(418)][_0x127893(472)](_0x3c0d15), this;
        },
        'setFPS': function (_0x5210a7) {
            var _0x83f0b = _0x43793e;
            return this[_0x83f0b(431)] = _0x5210a7, this[_0x83f0b(434)] = 1 / this['fps'], this[_0x83f0b(484)] = 1000 * this[_0x83f0b(434)], this;
        },
        'update': function (_0x4c955f, _0x354884) {
            var _0x325ee1 = _0x43793e;
            if (this[_0x325ee1(442)] || this['bodies']['size'] === 0)
                return;
            var _0x2d7224, _0x4818da = this[_0x325ee1(434)], _0x1d322a = this[_0x325ee1(484)] * this['timeScale'];
            this[_0x325ee1(433)] += _0x354884;
            var _0x5d4a8e, _0x48a760 = this['bodies'][_0x325ee1(485)], _0x5687cd = this[_0x325ee1(433)] >= _0x1d322a;
            !this[_0x325ee1(432)] && (_0x4818da = _0x354884 * 0.001, _0x5687cd = !![], this['_elapsed'] = 0);
            for (_0x2d7224 = 0; _0x2d7224 < _0x48a760[_0x325ee1(460)]; _0x2d7224++) {
                _0x5d4a8e = _0x48a760[_0x2d7224], _0x5d4a8e[_0x325ee1(469)] && _0x5d4a8e['preUpdate'](_0x5687cd, _0x4818da);
            }
            if (_0x5687cd) {
                this[_0x325ee1(433)] -= _0x1d322a, this[_0x325ee1(435)] = 1;
                this[_0x325ee1(454)] && (this[_0x325ee1(486)][_0x325ee1(487)](), this[_0x325ee1(486)][_0x325ee1(488)](_0x48a760));
                var _0x2b841d = this['colliders'][_0x325ee1(489)]();
                for (_0x2d7224 = 0; _0x2d7224 < _0x2b841d[_0x325ee1(460)]; _0x2d7224++) {
                    var _0x5a7ec1 = _0x2b841d[_0x2d7224];
                    _0x5a7ec1[_0x325ee1(490)] && _0x5a7ec1['update']();
                }
                this[_0x325ee1(481)](Events[_0x325ee1(491)], _0x4818da);
            }
            while (this[_0x325ee1(433)] >= _0x1d322a) {
                this[_0x325ee1(433)] -= _0x1d322a, this[_0x325ee1(492)](_0x4818da);
            }
        },
        'step': function (_0x12057b) {
            var _0x81463b = _0x43793e, _0x11d557, _0x4ee762, _0x4a2150 = this[_0x81463b(467)][_0x81463b(485)], _0x2e86fc = _0x4a2150['length'];
            for (_0x11d557 = 0; _0x11d557 < _0x2e86fc; _0x11d557++) {
                _0x4ee762 = _0x4a2150[_0x11d557], _0x4ee762['enable'] && _0x4ee762[_0x81463b(489)](_0x12057b);
            }
            this['useTree'] && (this[_0x81463b(486)][_0x81463b(487)](), this[_0x81463b(486)][_0x81463b(488)](_0x4a2150));
            var _0x3a9713 = this[_0x81463b(418)][_0x81463b(489)]();
            for (_0x11d557 = 0; _0x11d557 < _0x3a9713[_0x81463b(460)]; _0x11d557++) {
                var _0x2e9dfd = _0x3a9713[_0x11d557];
                _0x2e9dfd[_0x81463b(490)] && _0x2e9dfd[_0x81463b(489)]();
            }
            this['emit'](Events['WORLD_STEP'], _0x12057b), this[_0x81463b(435)]++;
        },
        'postUpdate': function () {
            var _0x3bc1a5 = _0x43793e, _0x175f95, _0x13ec86, _0x26d164 = this[_0x3bc1a5(467)]['entries'], _0x21f2b8 = _0x26d164[_0x3bc1a5(460)], _0x4dcfdc = this[_0x3bc1a5(467)], _0x2b32c8 = this[_0x3bc1a5(416)];
            if (this[_0x3bc1a5(435)]) {
                this[_0x3bc1a5(435)] = 0;
                for (_0x175f95 = 0; _0x175f95 < _0x21f2b8; _0x175f95++) {
                    _0x13ec86 = _0x26d164[_0x175f95], _0x13ec86[_0x3bc1a5(469)] && _0x13ec86[_0x3bc1a5(493)]();
                }
            }
            if (this['drawDebug']) {
                var _0x2f1770 = this[_0x3bc1a5(445)];
                _0x2f1770[_0x3bc1a5(487)]();
                for (_0x175f95 = 0; _0x175f95 < _0x21f2b8; _0x175f95++) {
                    _0x13ec86 = _0x26d164[_0x175f95], _0x13ec86[_0x3bc1a5(494)]() && _0x13ec86[_0x3bc1a5(476)](_0x2f1770);
                }
                _0x26d164 = _0x2b32c8[_0x3bc1a5(485)], _0x21f2b8 = _0x26d164['length'];
                for (_0x175f95 = 0; _0x175f95 < _0x21f2b8; _0x175f95++) {
                    _0x13ec86 = _0x26d164[_0x175f95], _0x13ec86['willDrawDebug']() && _0x13ec86[_0x3bc1a5(476)](_0x2f1770);
                }
            }
            var _0x486f60 = this['pendingDestroy'];
            if (_0x486f60[_0x3bc1a5(495)] > 0) {
                var _0x5e4820 = this[_0x3bc1a5(486)], _0x4898e3 = this[_0x3bc1a5(455)];
                _0x26d164 = _0x486f60[_0x3bc1a5(485)], _0x21f2b8 = _0x26d164[_0x3bc1a5(460)];
                for (_0x175f95 = 0; _0x175f95 < _0x21f2b8; _0x175f95++) {
                    _0x13ec86 = _0x26d164[_0x175f95];
                    if (_0x13ec86[_0x3bc1a5(466)] === CONST[_0x3bc1a5(459)])
                        _0x5e4820[_0x3bc1a5(472)](_0x13ec86), _0x4dcfdc['delete'](_0x13ec86);
                    else
                        _0x13ec86[_0x3bc1a5(466)] === CONST[_0x3bc1a5(464)] && (_0x4898e3[_0x3bc1a5(472)](_0x13ec86), _0x2b32c8[_0x3bc1a5(473)](_0x13ec86));
                    _0x13ec86[_0x3bc1a5(496)] = undefined, _0x13ec86[_0x3bc1a5(497)] = undefined;
                }
                _0x486f60[_0x3bc1a5(487)]();
            }
        },
        'updateMotion': function (_0x39a045, _0x4b6fe8) {
            var _0x30fed7 = _0x43793e;
            _0x39a045[_0x30fed7(498)] && this[_0x30fed7(499)](_0x39a045, _0x4b6fe8), this['computeVelocity'](_0x39a045, _0x4b6fe8);
        },
        'computeAngularVelocity': function (_0x109fe3, _0x23b121) {
            var _0x29da94 = _0x43793e, _0x4c9793 = _0x109fe3[_0x29da94(500)], _0x37c810 = _0x109fe3[_0x29da94(501)], _0x2c80f5 = _0x109fe3[_0x29da94(502)], _0x26350c = _0x109fe3[_0x29da94(503)];
            if (_0x37c810)
                _0x4c9793 += _0x37c810 * _0x23b121;
            else {
                if (_0x109fe3[_0x29da94(504)] && _0x2c80f5) {
                    _0x2c80f5 *= _0x23b121;
                    if (FuzzyGreaterThan(_0x4c9793 - _0x2c80f5, 0, 0.1))
                        _0x4c9793 -= _0x2c80f5;
                    else
                        FuzzyLessThan(_0x4c9793 + _0x2c80f5, 0, 0.1) ? _0x4c9793 += _0x2c80f5 : _0x4c9793 = 0;
                }
            }
            _0x4c9793 = Clamp(_0x4c9793, -_0x26350c, _0x26350c);
            var _0x5e5c7f = _0x4c9793 - _0x109fe3[_0x29da94(500)];
            _0x109fe3[_0x29da94(500)] += _0x5e5c7f, _0x109fe3[_0x29da94(505)] += _0x109fe3['angularVelocity'] * _0x23b121;
        },
        'computeVelocity': function (_0x1a1ca5, _0x50b9cb) {
            var _0x10b705 = _0x43793e, _0x12db51 = _0x1a1ca5['velocity']['x'], _0x3b9d65 = _0x1a1ca5[_0x10b705(506)]['x'], _0x112f7f = _0x1a1ca5['drag']['x'], _0x3e863f = _0x1a1ca5['maxVelocity']['x'], _0x1c4e60 = _0x1a1ca5['velocity']['y'], _0x15695b = _0x1a1ca5[_0x10b705(506)]['y'], _0x5a381a = _0x1a1ca5[_0x10b705(507)]['y'], _0x148890 = _0x1a1ca5[_0x10b705(508)]['y'], _0x6fbfda = _0x1a1ca5[_0x10b705(509)], _0x4277e5 = _0x1a1ca5['maxSpeed'], _0x4d628e = _0x1a1ca5[_0x10b705(504)], _0x6b2b24 = _0x1a1ca5[_0x10b705(510)];
            _0x1a1ca5[_0x10b705(511)] && (_0x12db51 += (this['gravity']['x'] + _0x1a1ca5['gravity']['x']) * _0x50b9cb, _0x1c4e60 += (this[_0x10b705(419)]['y'] + _0x1a1ca5[_0x10b705(419)]['y']) * _0x50b9cb);
            if (_0x3b9d65)
                _0x12db51 += _0x3b9d65 * _0x50b9cb;
            else {
                if (_0x4d628e && _0x112f7f) {
                    if (_0x6b2b24)
                        _0x112f7f = Math[_0x10b705(512)](_0x112f7f, _0x50b9cb), _0x12db51 *= _0x112f7f, _0x6fbfda = Math[_0x10b705(513)](_0x12db51 * _0x12db51 + _0x1c4e60 * _0x1c4e60), FuzzyEqual(_0x6fbfda, 0, 0.001) && (_0x12db51 = 0);
                    else {
                        _0x112f7f *= _0x50b9cb;
                        if (FuzzyGreaterThan(_0x12db51 - _0x112f7f, 0, 0.01))
                            _0x12db51 -= _0x112f7f;
                        else
                            FuzzyLessThan(_0x12db51 + _0x112f7f, 0, 0.01) ? _0x12db51 += _0x112f7f : _0x12db51 = 0;
                    }
                }
            }
            if (_0x15695b)
                _0x1c4e60 += _0x15695b * _0x50b9cb;
            else {
                if (_0x4d628e && _0x5a381a) {
                    if (_0x6b2b24)
                        _0x5a381a = Math[_0x10b705(512)](_0x5a381a, _0x50b9cb), _0x1c4e60 *= _0x5a381a, _0x6fbfda = Math[_0x10b705(513)](_0x12db51 * _0x12db51 + _0x1c4e60 * _0x1c4e60), FuzzyEqual(_0x6fbfda, 0, 0.001) && (_0x1c4e60 = 0);
                    else {
                        _0x5a381a *= _0x50b9cb;
                        if (FuzzyGreaterThan(_0x1c4e60 - _0x5a381a, 0, 0.01))
                            _0x1c4e60 -= _0x5a381a;
                        else
                            FuzzyLessThan(_0x1c4e60 + _0x5a381a, 0, 0.01) ? _0x1c4e60 += _0x5a381a : _0x1c4e60 = 0;
                    }
                }
            }
            _0x12db51 = Clamp(_0x12db51, -_0x3e863f, _0x3e863f), _0x1c4e60 = Clamp(_0x1c4e60, -_0x148890, _0x148890), _0x1a1ca5[_0x10b705(514)][_0x10b705(468)](_0x12db51, _0x1c4e60), _0x4277e5 > -1 && _0x6fbfda > _0x4277e5 && (_0x1a1ca5[_0x10b705(514)][_0x10b705(515)]()[_0x10b705(516)](_0x4277e5), _0x6fbfda = _0x4277e5), _0x1a1ca5[_0x10b705(509)] = _0x6fbfda;
        },
        'separate': function (_0xa81f9c, _0x398e56, _0x456d27, _0x3f5853, _0x4971ec, _0x185996) {
            var _0x2ea9f0 = _0x43793e;
            if (!_0x185996 && !_0xa81f9c[_0x2ea9f0(469)] || !_0x398e56[_0x2ea9f0(469)] || _0xa81f9c[_0x2ea9f0(426)][_0x2ea9f0(517)] || _0x398e56[_0x2ea9f0(426)][_0x2ea9f0(517)] || !this['intersects'](_0xa81f9c, _0x398e56))
                return ![];
            if (_0x456d27 && _0x456d27[_0x2ea9f0(414)](_0x3f5853, _0xa81f9c[_0x2ea9f0(497)], _0x398e56[_0x2ea9f0(497)]) === ![])
                return ![];
            if (_0xa81f9c[_0x2ea9f0(518)] && _0x398e56[_0x2ea9f0(518)])
                return this[_0x2ea9f0(519)](_0xa81f9c, _0x398e56, _0x4971ec);
            if (_0xa81f9c[_0x2ea9f0(518)] !== _0x398e56[_0x2ea9f0(518)]) {
                var _0x2ebf42 = _0xa81f9c[_0x2ea9f0(518)] ? _0x398e56 : _0xa81f9c, _0x2ef1fa = _0xa81f9c['isCircle'] ? _0xa81f9c : _0x398e56, _0x47df14 = {
                        'x': _0x2ebf42['x'],
                        'y': _0x2ebf42['y'],
                        'right': _0x2ebf42[_0x2ea9f0(479)],
                        'bottom': _0x2ebf42[_0x2ea9f0(520)]
                    }, _0x4b9153 = _0x2ef1fa[_0x2ea9f0(521)];
                if (_0x4b9153['y'] < _0x47df14['y'] || _0x4b9153['y'] > _0x47df14[_0x2ea9f0(520)]) {
                    if (_0x4b9153['x'] < _0x47df14['x'] || _0x4b9153['x'] > _0x47df14[_0x2ea9f0(479)])
                        return this[_0x2ea9f0(519)](_0xa81f9c, _0x398e56, _0x4971ec);
                }
            }
            var _0x64b5e4 = ![], _0x32bc8f = ![];
            if (_0x4971ec)
                _0x64b5e4 = SeparateX(_0xa81f9c, _0x398e56, _0x4971ec, this['OVERLAP_BIAS']), _0x32bc8f = SeparateY(_0xa81f9c, _0x398e56, _0x4971ec, this[_0x2ea9f0(437)]);
            else
                this[_0x2ea9f0(441)] || Math['abs'](this[_0x2ea9f0(419)]['y'] + _0xa81f9c[_0x2ea9f0(419)]['y']) < Math[_0x2ea9f0(522)](this[_0x2ea9f0(419)]['x'] + _0xa81f9c['gravity']['x']) ? (_0x64b5e4 = SeparateX(_0xa81f9c, _0x398e56, _0x4971ec, this['OVERLAP_BIAS']), this[_0x2ea9f0(523)](_0xa81f9c, _0x398e56) && (_0x32bc8f = SeparateY(_0xa81f9c, _0x398e56, _0x4971ec, this[_0x2ea9f0(437)]))) : (_0x32bc8f = SeparateY(_0xa81f9c, _0x398e56, _0x4971ec, this[_0x2ea9f0(437)]), this['intersects'](_0xa81f9c, _0x398e56) && (_0x64b5e4 = SeparateX(_0xa81f9c, _0x398e56, _0x4971ec, this[_0x2ea9f0(437)])));
            var _0x5835a3 = _0x64b5e4 || _0x32bc8f;
            if (_0x5835a3) {
                if (_0x4971ec)
                    (_0xa81f9c[_0x2ea9f0(524)] || _0x398e56[_0x2ea9f0(524)]) && this['emit'](Events[_0x2ea9f0(525)], _0xa81f9c['gameObject'], _0x398e56[_0x2ea9f0(497)], _0xa81f9c, _0x398e56);
                else
                    (_0xa81f9c['onCollide'] || _0x398e56[_0x2ea9f0(526)]) && this[_0x2ea9f0(481)](Events[_0x2ea9f0(527)], _0xa81f9c[_0x2ea9f0(497)], _0x398e56[_0x2ea9f0(497)], _0xa81f9c, _0x398e56);
            }
            return _0x5835a3;
        },
        'separateCircle': function (_0x6d6ee6, _0x1e0fdb, _0x3ae64d, _0x1e5725) {
            var _0x51eaee = _0x43793e;
            GetOverlapX(_0x6d6ee6, _0x1e0fdb, ![], _0x1e5725), GetOverlapY(_0x6d6ee6, _0x1e0fdb, ![], _0x1e5725);
            var _0x4514ce = 0;
            if (_0x6d6ee6[_0x51eaee(518)] !== _0x1e0fdb[_0x51eaee(518)]) {
                var _0x2264b6 = {
                        'x': _0x1e0fdb[_0x51eaee(518)] ? _0x6d6ee6[_0x51eaee(528)]['x'] : _0x1e0fdb[_0x51eaee(528)]['x'],
                        'y': _0x1e0fdb[_0x51eaee(518)] ? _0x6d6ee6[_0x51eaee(528)]['y'] : _0x1e0fdb[_0x51eaee(528)]['y'],
                        'right': _0x1e0fdb['isCircle'] ? _0x6d6ee6[_0x51eaee(479)] : _0x1e0fdb[_0x51eaee(479)],
                        'bottom': _0x1e0fdb[_0x51eaee(518)] ? _0x6d6ee6[_0x51eaee(520)] : _0x1e0fdb['bottom']
                    }, _0x594810 = {
                        'x': _0x6d6ee6[_0x51eaee(518)] ? _0x6d6ee6['center']['x'] : _0x1e0fdb[_0x51eaee(521)]['x'],
                        'y': _0x6d6ee6[_0x51eaee(518)] ? _0x6d6ee6[_0x51eaee(521)]['y'] : _0x1e0fdb[_0x51eaee(521)]['y'],
                        'radius': _0x6d6ee6[_0x51eaee(518)] ? _0x6d6ee6[_0x51eaee(529)] : _0x1e0fdb[_0x51eaee(529)]
                    };
                if (_0x594810['y'] < _0x2264b6['y']) {
                    if (_0x594810['x'] < _0x2264b6['x'])
                        _0x4514ce = DistanceBetween(_0x594810['x'], _0x594810['y'], _0x2264b6['x'], _0x2264b6['y']) - _0x594810[_0x51eaee(530)];
                    else
                        _0x594810['x'] > _0x2264b6[_0x51eaee(479)] && (_0x4514ce = DistanceBetween(_0x594810['x'], _0x594810['y'], _0x2264b6[_0x51eaee(479)], _0x2264b6['y']) - _0x594810[_0x51eaee(530)]);
                } else {
                    if (_0x594810['y'] > _0x2264b6[_0x51eaee(520)]) {
                        if (_0x594810['x'] < _0x2264b6['x'])
                            _0x4514ce = DistanceBetween(_0x594810['x'], _0x594810['y'], _0x2264b6['x'], _0x2264b6[_0x51eaee(520)]) - _0x594810['radius'];
                        else
                            _0x594810['x'] > _0x2264b6[_0x51eaee(479)] && (_0x4514ce = DistanceBetween(_0x594810['x'], _0x594810['y'], _0x2264b6[_0x51eaee(479)], _0x2264b6[_0x51eaee(520)]) - _0x594810[_0x51eaee(530)]);
                    }
                }
                _0x4514ce *= -1;
            } else
                _0x4514ce = _0x6d6ee6[_0x51eaee(529)] + _0x1e0fdb[_0x51eaee(529)] - DistanceBetween(_0x6d6ee6[_0x51eaee(521)]['x'], _0x6d6ee6[_0x51eaee(521)]['y'], _0x1e0fdb[_0x51eaee(521)]['x'], _0x1e0fdb[_0x51eaee(521)]['y']);
            _0x6d6ee6['overlapR'] = _0x4514ce, _0x1e0fdb[_0x51eaee(531)] = _0x4514ce;
            if (_0x3ae64d || _0x4514ce === 0 || _0x6d6ee6[_0x51eaee(532)] && _0x1e0fdb[_0x51eaee(532)] || _0x6d6ee6['customSeparateX'] || _0x1e0fdb['customSeparateX'])
                return _0x4514ce !== 0 && (_0x6d6ee6[_0x51eaee(524)] || _0x1e0fdb[_0x51eaee(524)]) && this[_0x51eaee(481)](Events[_0x51eaee(525)], _0x6d6ee6[_0x51eaee(497)], _0x1e0fdb[_0x51eaee(497)], _0x6d6ee6, _0x1e0fdb), _0x4514ce !== 0;
            var _0x3999f2 = _0x6d6ee6['center']['x'] - _0x1e0fdb[_0x51eaee(521)]['x'], _0x476ef7 = _0x6d6ee6[_0x51eaee(521)]['y'] - _0x1e0fdb['center']['y'], _0x20c021 = Math['sqrt'](Math[_0x51eaee(512)](_0x3999f2, 2) + Math['pow'](_0x476ef7, 2)), _0x18bd73 = (_0x1e0fdb[_0x51eaee(521)]['x'] - _0x6d6ee6['center']['x']) / _0x20c021 || 0, _0xb31ec8 = (_0x1e0fdb[_0x51eaee(521)]['y'] - _0x6d6ee6[_0x51eaee(521)]['y']) / _0x20c021 || 0, _0x2164fb = 2 * (_0x6d6ee6[_0x51eaee(514)]['x'] * _0x18bd73 + _0x6d6ee6[_0x51eaee(514)]['y'] * _0xb31ec8 - _0x1e0fdb[_0x51eaee(514)]['x'] * _0x18bd73 - _0x1e0fdb[_0x51eaee(514)]['y'] * _0xb31ec8) / (_0x6d6ee6[_0x51eaee(533)] + _0x1e0fdb[_0x51eaee(533)]);
            (_0x6d6ee6['immovable'] || _0x1e0fdb['immovable']) && (_0x2164fb *= 2);
            !_0x6d6ee6[_0x51eaee(532)] && (_0x6d6ee6[_0x51eaee(514)]['x'] = _0x6d6ee6['velocity']['x'] - _0x2164fb / _0x6d6ee6['mass'] * _0x18bd73, _0x6d6ee6['velocity']['y'] = _0x6d6ee6['velocity']['y'] - _0x2164fb / _0x6d6ee6[_0x51eaee(533)] * _0xb31ec8);
            !_0x1e0fdb[_0x51eaee(532)] && (_0x1e0fdb[_0x51eaee(514)]['x'] = _0x1e0fdb[_0x51eaee(514)]['x'] + _0x2164fb / _0x1e0fdb[_0x51eaee(533)] * _0x18bd73, _0x1e0fdb[_0x51eaee(514)]['y'] = _0x1e0fdb[_0x51eaee(514)]['y'] + _0x2164fb / _0x1e0fdb[_0x51eaee(533)] * _0xb31ec8);
            !_0x6d6ee6[_0x51eaee(532)] && !_0x1e0fdb[_0x51eaee(532)] && (_0x4514ce /= 2);
            var _0x156be5 = AngleBetweenPoints(_0x6d6ee6[_0x51eaee(521)], _0x1e0fdb[_0x51eaee(521)]), _0x33d98d = (_0x4514ce + MATH_CONST[_0x51eaee(534)]) * Math['cos'](_0x156be5), _0x3b7c77 = (_0x4514ce + MATH_CONST[_0x51eaee(534)]) * Math[_0x51eaee(535)](_0x156be5);
            return !_0x6d6ee6[_0x51eaee(532)] && (_0x6d6ee6['x'] -= _0x33d98d, _0x6d6ee6['y'] -= _0x3b7c77, _0x6d6ee6[_0x51eaee(536)]()), !_0x1e0fdb[_0x51eaee(532)] && (_0x1e0fdb['x'] += _0x33d98d, _0x1e0fdb['y'] += _0x3b7c77, _0x1e0fdb[_0x51eaee(536)]()), _0x6d6ee6[_0x51eaee(514)]['x'] *= _0x6d6ee6['bounce']['x'], _0x6d6ee6[_0x51eaee(514)]['y'] *= _0x6d6ee6[_0x51eaee(537)]['y'], _0x1e0fdb[_0x51eaee(514)]['x'] *= _0x1e0fdb[_0x51eaee(537)]['x'], _0x1e0fdb[_0x51eaee(514)]['y'] *= _0x1e0fdb[_0x51eaee(537)]['y'], (_0x6d6ee6[_0x51eaee(526)] || _0x1e0fdb['onCollide']) && this[_0x51eaee(481)](Events[_0x51eaee(527)], _0x6d6ee6[_0x51eaee(497)], _0x1e0fdb[_0x51eaee(497)], _0x6d6ee6, _0x1e0fdb), !![];
        },
        'intersects': function (_0x34fc72, _0x2cb0bf) {
            var _0x34a694 = _0x43793e;
            if (_0x34fc72 === _0x2cb0bf)
                return ![];
            if (!_0x34fc72[_0x34a694(518)] && !_0x2cb0bf[_0x34a694(518)])
                return !(_0x34fc72[_0x34a694(479)] <= _0x2cb0bf[_0x34a694(528)]['x'] || _0x34fc72[_0x34a694(520)] <= _0x2cb0bf['position']['y'] || _0x34fc72['position']['x'] >= _0x2cb0bf[_0x34a694(479)] || _0x34fc72[_0x34a694(528)]['y'] >= _0x2cb0bf[_0x34a694(520)]);
            else
                return _0x34fc72[_0x34a694(518)] ? _0x2cb0bf['isCircle'] ? DistanceBetween(_0x34fc72[_0x34a694(521)]['x'], _0x34fc72[_0x34a694(521)]['y'], _0x2cb0bf[_0x34a694(521)]['x'], _0x2cb0bf['center']['y']) <= _0x34fc72['halfWidth'] + _0x2cb0bf[_0x34a694(529)] : this[_0x34a694(538)](_0x34fc72, _0x2cb0bf) : this[_0x34a694(538)](_0x2cb0bf, _0x34fc72);
        },
        'circleBodyIntersects': function (_0x19c127, _0x1e5261) {
            var _0x1b3c12 = _0x43793e, _0x2ffd13 = Clamp(_0x19c127['center']['x'], _0x1e5261[_0x1b3c12(539)], _0x1e5261[_0x1b3c12(479)]), _0x2425ac = Clamp(_0x19c127[_0x1b3c12(521)]['y'], _0x1e5261['top'], _0x1e5261[_0x1b3c12(520)]), _0x168a32 = (_0x19c127[_0x1b3c12(521)]['x'] - _0x2ffd13) * (_0x19c127[_0x1b3c12(521)]['x'] - _0x2ffd13), _0x381a39 = (_0x19c127[_0x1b3c12(521)]['y'] - _0x2425ac) * (_0x19c127[_0x1b3c12(521)]['y'] - _0x2425ac);
            return _0x168a32 + _0x381a39 <= _0x19c127[_0x1b3c12(529)] * _0x19c127[_0x1b3c12(529)];
        },
        'overlap': function (_0x41a0f1, _0x32fe18, _0x3a1e15, _0x5e5679, _0x4168d2) {
            var _0x2e6554 = _0x43793e;
            return _0x3a1e15 === undefined && (_0x3a1e15 = null), _0x5e5679 === undefined && (_0x5e5679 = null), _0x4168d2 === undefined && (_0x4168d2 = _0x3a1e15), this[_0x2e6554(540)](_0x41a0f1, _0x32fe18, _0x3a1e15, _0x5e5679, _0x4168d2, !![]);
        },
        'collide': function (_0x1c51cf, _0x35eede, _0x5fc128, _0x147c03, _0x5da319) {
            var _0xfd6ce9 = _0x43793e;
            return _0x5fc128 === undefined && (_0x5fc128 = null), _0x147c03 === undefined && (_0x147c03 = null), _0x5da319 === undefined && (_0x5da319 = _0x5fc128), this[_0xfd6ce9(540)](_0x1c51cf, _0x35eede, _0x5fc128, _0x147c03, _0x5da319, ![]);
        },
        'collideObjects': function (_0x26042b, _0x43e610, _0x1365ca, _0x2f13cf, _0x12d015, _0x4ac15a) {
            var _0x2212be = _0x43793e, _0x40d05e, _0x6bf8e9;
            _0x26042b['isParent'] && _0x26042b[_0x2212be(466)] === undefined && (_0x26042b = _0x26042b[_0x2212be(541)][_0x2212be(485)]);
            _0x43e610 && _0x43e610[_0x2212be(461)] && _0x43e610[_0x2212be(466)] === undefined && (_0x43e610 = _0x43e610[_0x2212be(541)][_0x2212be(485)]);
            var _0x30da40 = Array[_0x2212be(542)](_0x26042b), _0x327091 = Array['isArray'](_0x43e610);
            this[_0x2212be(443)] = 0;
            if (!_0x30da40 && !_0x327091)
                this[_0x2212be(543)](_0x26042b, _0x43e610, _0x1365ca, _0x2f13cf, _0x12d015, _0x4ac15a);
            else {
                if (!_0x30da40 && _0x327091)
                    for (_0x40d05e = 0; _0x40d05e < _0x43e610[_0x2212be(460)]; _0x40d05e++) {
                        this[_0x2212be(543)](_0x26042b, _0x43e610[_0x40d05e], _0x1365ca, _0x2f13cf, _0x12d015, _0x4ac15a);
                    }
                else {
                    if (_0x30da40 && !_0x327091) {
                        if (!_0x43e610)
                            for (_0x40d05e = 0; _0x40d05e < _0x26042b[_0x2212be(460)]; _0x40d05e++) {
                                var _0x2bc80d = _0x26042b[_0x40d05e];
                                for (_0x6bf8e9 = _0x40d05e + 1; _0x6bf8e9 < _0x26042b['length']; _0x6bf8e9++) {
                                    if (_0x40d05e === _0x6bf8e9)
                                        continue;
                                    this[_0x2212be(543)](_0x2bc80d, _0x26042b[_0x6bf8e9], _0x1365ca, _0x2f13cf, _0x12d015, _0x4ac15a);
                                }
                            }
                        else
                            for (_0x40d05e = 0; _0x40d05e < _0x26042b[_0x2212be(460)]; _0x40d05e++) {
                                this[_0x2212be(543)](_0x26042b[_0x40d05e], _0x43e610, _0x1365ca, _0x2f13cf, _0x12d015, _0x4ac15a);
                            }
                    } else
                        for (_0x40d05e = 0; _0x40d05e < _0x26042b[_0x2212be(460)]; _0x40d05e++) {
                            for (_0x6bf8e9 = 0; _0x6bf8e9 < _0x43e610['length']; _0x6bf8e9++) {
                                this[_0x2212be(543)](_0x26042b[_0x40d05e], _0x43e610[_0x6bf8e9], _0x1365ca, _0x2f13cf, _0x12d015, _0x4ac15a);
                            }
                        }
                }
            }
            return this[_0x2212be(443)] > 0;
        },
        'collideHandler': function (_0x5e66b1, _0x3576f5, _0x3556e0, _0x4721b7, _0x4d5958, _0x1f60bb) {
            var _0x400d45 = _0x43793e;
            if (_0x3576f5 === undefined && _0x5e66b1['isParent'])
                return this[_0x400d45(544)](_0x5e66b1, _0x5e66b1, _0x3556e0, _0x4721b7, _0x4d5958, _0x1f60bb);
            if (!_0x5e66b1 || !_0x3576f5)
                return ![];
            if (_0x5e66b1[_0x400d45(463)]) {
                if (_0x3576f5[_0x400d45(463)])
                    return this['collideSpriteVsSprite'](_0x5e66b1, _0x3576f5, _0x3556e0, _0x4721b7, _0x4d5958, _0x1f60bb);
                else {
                    if (_0x3576f5['isParent'])
                        return this[_0x400d45(545)](_0x5e66b1, _0x3576f5, _0x3556e0, _0x4721b7, _0x4d5958, _0x1f60bb);
                    else {
                        if (_0x3576f5[_0x400d45(546)])
                            return this['collideSpriteVsTilemapLayer'](_0x5e66b1, _0x3576f5, _0x3556e0, _0x4721b7, _0x4d5958, _0x1f60bb);
                    }
                }
            } else {
                if (_0x5e66b1[_0x400d45(461)]) {
                    if (_0x3576f5['body'])
                        return this[_0x400d45(545)](_0x3576f5, _0x5e66b1, _0x3556e0, _0x4721b7, _0x4d5958, _0x1f60bb);
                    else {
                        if (_0x3576f5[_0x400d45(461)])
                            return this['collideGroupVsGroup'](_0x5e66b1, _0x3576f5, _0x3556e0, _0x4721b7, _0x4d5958, _0x1f60bb);
                        else {
                            if (_0x3576f5['isTilemap'])
                                return this['collideGroupVsTilemapLayer'](_0x5e66b1, _0x3576f5, _0x3556e0, _0x4721b7, _0x4d5958, _0x1f60bb);
                        }
                    }
                } else {
                    if (_0x5e66b1[_0x400d45(546)]) {
                        if (_0x3576f5[_0x400d45(463)])
                            return this[_0x400d45(547)](_0x3576f5, _0x5e66b1, _0x3556e0, _0x4721b7, _0x4d5958, _0x1f60bb);
                        else {
                            if (_0x3576f5[_0x400d45(461)])
                                return this[_0x400d45(548)](_0x3576f5, _0x5e66b1, _0x3556e0, _0x4721b7, _0x4d5958, _0x1f60bb);
                        }
                    }
                }
            }
        },
        'collideSpriteVsSprite': function (_0xd3c37c, _0x86d609, _0x20494d, _0x58a211, _0x575f22, _0x22456a) {
            var _0x179d86 = _0x43793e;
            if (!_0xd3c37c[_0x179d86(463)] || !_0x86d609['body'])
                return ![];
            return this[_0x179d86(549)](_0xd3c37c['body'], _0x86d609['body'], _0x58a211, _0x575f22, _0x22456a) && (_0x20494d && _0x20494d[_0x179d86(414)](_0x575f22, _0xd3c37c, _0x86d609), this[_0x179d86(443)]++), !![];
        },
        'collideSpriteVsGroup': function (_0x245b96, _0x3e0ad8, _0x409777, _0x5fab2f, _0x30605d, _0xd2b13e) {
            var _0xf7bb84 = _0x43793e, _0xa0f08a = _0x245b96['body'];
            if (_0x3e0ad8[_0xf7bb84(460)] === 0 || !_0xa0f08a || !_0xa0f08a[_0xf7bb84(469)] || _0xa0f08a[_0xf7bb84(426)]['none'])
                return;
            var _0x4daf6a, _0x4e4004, _0x1b6417;
            if (this[_0xf7bb84(454)] || _0x3e0ad8[_0xf7bb84(466)] === CONST[_0xf7bb84(464)]) {
                var _0x1483ae = this['treeMinMax'];
                _0x1483ae[_0xf7bb84(550)] = _0xa0f08a['left'], _0x1483ae[_0xf7bb84(551)] = _0xa0f08a[_0xf7bb84(552)], _0x1483ae[_0xf7bb84(553)] = _0xa0f08a[_0xf7bb84(479)], _0x1483ae[_0xf7bb84(554)] = _0xa0f08a[_0xf7bb84(520)];
                var _0x2b8a55 = _0x3e0ad8['physicsType'] === CONST[_0xf7bb84(459)] ? this[_0xf7bb84(486)][_0xf7bb84(555)](_0x1483ae) : this[_0xf7bb84(455)][_0xf7bb84(555)](_0x1483ae);
                _0x4e4004 = _0x2b8a55[_0xf7bb84(460)];
                for (_0x4daf6a = 0; _0x4daf6a < _0x4e4004; _0x4daf6a++) {
                    _0x1b6417 = _0x2b8a55[_0x4daf6a];
                    if (_0xa0f08a === _0x1b6417 || !_0x1b6417[_0xf7bb84(469)] || _0x1b6417[_0xf7bb84(426)][_0xf7bb84(517)] || !_0x3e0ad8[_0xf7bb84(556)](_0x1b6417['gameObject']))
                        continue;
                    this['separate'](_0xa0f08a, _0x1b6417, _0x5fab2f, _0x30605d, _0xd2b13e, !![]) && (_0x409777 && _0x409777[_0xf7bb84(414)](_0x30605d, _0xa0f08a[_0xf7bb84(497)], _0x1b6417['gameObject']), this[_0xf7bb84(443)]++);
                }
            } else {
                var _0x51706a = _0x3e0ad8[_0xf7bb84(470)](), _0x339d1f = _0x3e0ad8['children'][_0xf7bb84(485)][_0xf7bb84(557)](_0x245b96);
                _0x4e4004 = _0x51706a['length'];
                for (_0x4daf6a = 0; _0x4daf6a < _0x4e4004; _0x4daf6a++) {
                    _0x1b6417 = _0x51706a[_0x4daf6a]['body'];
                    if (!_0x1b6417 || _0x4daf6a === _0x339d1f || !_0x1b6417[_0xf7bb84(469)])
                        continue;
                    this[_0xf7bb84(549)](_0xa0f08a, _0x1b6417, _0x5fab2f, _0x30605d, _0xd2b13e) && (_0x409777 && _0x409777['call'](_0x30605d, _0xa0f08a[_0xf7bb84(497)], _0x1b6417[_0xf7bb84(497)]), this['_total']++);
                }
            }
        },
        'collideGroupVsTilemapLayer': function (_0x4bf870, _0xf0d348, _0x42c996, _0x4d64e3, _0x6d014d, _0xc90ea7) {
            var _0x262343 = _0x43793e, _0x4360c0 = _0x4bf870[_0x262343(470)]();
            if (_0x4360c0['length'] === 0)
                return ![];
            var _0x536657 = ![];
            for (var _0x1c755f = 0; _0x1c755f < _0x4360c0[_0x262343(460)]; _0x1c755f++) {
                _0x4360c0[_0x1c755f]['body'] && (this['collideSpriteVsTilemapLayer'](_0x4360c0[_0x1c755f], _0xf0d348, _0x42c996, _0x4d64e3, _0x6d014d, _0xc90ea7) && (_0x536657 = !![]));
            }
            return _0x536657;
        },
        'collideTiles': function (_0x12702e, _0x3649d0, _0x660665, _0x110213, _0x4bb721) {
            var _0xf23441 = _0x43793e;
            return !_0x12702e[_0xf23441(463)]['enable'] || _0x3649d0[_0xf23441(460)] === 0 ? ![] : this[_0xf23441(558)](_0x12702e, _0x3649d0, _0x660665, _0x110213, _0x4bb721, ![], ![]);
        },
        'overlapTiles': function (_0x6d3b34, _0x370f0d, _0x4a7e65, _0x26735c, _0x267c45) {
            var _0x30251e = _0x43793e;
            return !_0x6d3b34['body'][_0x30251e(469)] || _0x370f0d[_0x30251e(460)] === 0 ? ![] : this[_0x30251e(558)](_0x6d3b34, _0x370f0d, _0x4a7e65, _0x26735c, _0x267c45, !![], ![]);
        },
        'collideSpriteVsTilemapLayer': function (_0x111b03, _0x160f15, _0x4f2c72, _0x2e42d0, _0x588b39, _0x2757ec) {
            var _0x3a3120 = _0x43793e, _0x5b53e1 = _0x111b03[_0x3a3120(463)];
            if (!_0x5b53e1[_0x3a3120(469)] || _0x5b53e1['checkCollision']['none'])
                return ![];
            var _0x48928c = _0x5b53e1[_0x3a3120(528)]['x'], _0x5e8dd1 = _0x5b53e1[_0x3a3120(528)]['y'], _0x1cc1f4 = _0x5b53e1[_0x3a3120(423)], _0x1253e4 = _0x5b53e1[_0x3a3120(424)], _0x2cff73 = _0x160f15['layer'];
            if (_0x2cff73[_0x3a3120(559)] > _0x2cff73[_0x3a3120(560)]) {
                var _0x3ce23a = (_0x2cff73[_0x3a3120(559)] - _0x2cff73['baseTileWidth']) * _0x160f15[_0x3a3120(561)];
                _0x48928c -= _0x3ce23a, _0x1cc1f4 += _0x3ce23a;
            }
            if (_0x2cff73[_0x3a3120(562)] > _0x2cff73['baseTileHeight']) {
                var _0x2364e1 = (_0x2cff73[_0x3a3120(562)] - _0x2cff73[_0x3a3120(563)]) * _0x160f15[_0x3a3120(564)];
                _0x1253e4 += _0x2364e1;
            }
            var _0x11b7f6 = GetTilesWithinWorldXY(_0x48928c, _0x5e8dd1, _0x1cc1f4, _0x1253e4, null, _0x160f15['scene'][_0x3a3120(565)]['main'], _0x160f15['layer']);
            return _0x11b7f6[_0x3a3120(460)] === 0 ? ![] : this['collideSpriteVsTilesHandler'](_0x111b03, _0x11b7f6, _0x4f2c72, _0x2e42d0, _0x588b39, _0x2757ec, !![]);
        },
        'collideSpriteVsTilesHandler': function (_0x257842, _0x1d6b85, _0x52542b, _0x41c9aa, _0x20f54b, _0x407fc1, _0x32834d) {
            var _0x3ad002 = _0x43793e, _0x2b98b2 = _0x257842[_0x3ad002(463)], _0x2e7643, _0x13a1e7 = {
                    'left': 0,
                    'right': 0,
                    'top': 0,
                    'bottom': 0
                }, _0x460646, _0x1bdb3f = ![];
            for (var _0x2b3b87 = 0; _0x2b3b87 < _0x1d6b85['length']; _0x2b3b87++) {
                _0x2e7643 = _0x1d6b85[_0x2b3b87], _0x460646 = _0x2e7643[_0x3ad002(566)];
                var _0x420b58 = _0x460646['tileToWorldXY'](_0x2e7643['x'], _0x2e7643['y']);
                _0x13a1e7['left'] = _0x420b58['x'], _0x13a1e7[_0x3ad002(552)] = _0x420b58['y'];
                _0x2e7643[_0x3ad002(567)] !== _0x2e7643[_0x3ad002(424)] && (_0x13a1e7[_0x3ad002(552)] -= (_0x2e7643[_0x3ad002(424)] - _0x2e7643['baseHeight']) * _0x460646[_0x3ad002(564)]);
                _0x13a1e7[_0x3ad002(479)] = _0x13a1e7[_0x3ad002(539)] + _0x2e7643[_0x3ad002(423)] * _0x460646[_0x3ad002(561)], _0x13a1e7[_0x3ad002(520)] = _0x13a1e7[_0x3ad002(552)] + _0x2e7643[_0x3ad002(424)] * _0x460646['scaleY'];
                if (TileIntersectsBody(_0x13a1e7, _0x2b98b2) && (!_0x41c9aa || _0x41c9aa[_0x3ad002(414)](_0x20f54b, _0x257842, _0x2e7643)) && ProcessTileCallbacks(_0x2e7643, _0x257842) && (_0x407fc1 || SeparateTile(_0x2b3b87, _0x2b98b2, _0x2e7643, _0x13a1e7, _0x460646, this[_0x3ad002(439)], _0x32834d))) {
                    this[_0x3ad002(443)]++, _0x1bdb3f = !![];
                    _0x52542b && _0x52542b[_0x3ad002(414)](_0x20f54b, _0x257842, _0x2e7643);
                    if (_0x407fc1 && _0x2b98b2[_0x3ad002(524)])
                        this[_0x3ad002(481)](Events['TILE_OVERLAP'], _0x257842, _0x2e7643, _0x2b98b2);
                    else
                        _0x2b98b2['onCollide'] && this[_0x3ad002(481)](Events[_0x3ad002(568)], _0x257842, _0x2e7643, _0x2b98b2);
                }
            }
            return _0x1bdb3f;
        },
        'collideGroupVsGroup': function (_0x5d7b39, _0x1d923b, _0x493b8f, _0x1389e5, _0x30ce05, _0x350810) {
            var _0x1ae41b = _0x43793e;
            if (_0x5d7b39[_0x1ae41b(460)] === 0 || _0x1d923b[_0x1ae41b(460)] === 0)
                return;
            var _0x5f41bd = _0x5d7b39[_0x1ae41b(470)]();
            for (var _0x4d5947 = 0; _0x4d5947 < _0x5f41bd[_0x1ae41b(460)]; _0x4d5947++) {
                this['collideSpriteVsGroup'](_0x5f41bd[_0x4d5947], _0x1d923b, _0x493b8f, _0x1389e5, _0x30ce05, _0x350810);
            }
        },
        'wrap': function (_0x42e994, _0x14a458) {
            var _0x34a3ad = _0x43793e;
            if (_0x42e994['body'])
                this[_0x34a3ad(569)](_0x42e994, _0x14a458);
            else {
                if (_0x42e994[_0x34a3ad(470)])
                    this[_0x34a3ad(570)](_0x42e994['getChildren'](), _0x14a458);
                else
                    Array[_0x34a3ad(542)](_0x42e994) ? this['wrapArray'](_0x42e994, _0x14a458) : this[_0x34a3ad(569)](_0x42e994, _0x14a458);
            }
        },
        'wrapArray': function (_0x325d9a, _0x459a29) {
            var _0x334e98 = _0x43793e;
            for (var _0x855e0c = 0; _0x855e0c < _0x325d9a['length']; _0x855e0c++) {
                this[_0x334e98(569)](_0x325d9a[_0x855e0c], _0x459a29);
            }
        },
        'wrapObject': function (_0x1c1462, _0x173610) {
            var _0x5eaa06 = _0x43793e;
            _0x173610 === undefined && (_0x173610 = 0), _0x1c1462['x'] = Wrap(_0x1c1462['x'], this[_0x5eaa06(422)]['left'] - _0x173610, this[_0x5eaa06(422)]['right'] + _0x173610), _0x1c1462['y'] = Wrap(_0x1c1462['y'], this[_0x5eaa06(422)][_0x5eaa06(552)] - _0x173610, this['bounds'][_0x5eaa06(520)] + _0x173610);
        },
        'shutdown': function () {
            var _0x33c2a7 = _0x43793e;
            this[_0x33c2a7(486)][_0x33c2a7(487)](), this['staticTree']['clear'](), this[_0x33c2a7(467)]['clear'](), this[_0x33c2a7(416)][_0x33c2a7(487)](), this[_0x33c2a7(418)][_0x33c2a7(571)](), this[_0x33c2a7(572)]();
        },
        'destroy': function () {
            var _0xf8fb93 = _0x43793e;
            this[_0xf8fb93(573)](), this[_0xf8fb93(415)] = null;
        }
    });
function _0x252c(_0x1fa87e, _0x235c8c) {
    return _0x252c = function (_0x341915, _0x252c16) {
        _0x341915 = _0x341915 - 382;
        var _0x973961 = _0x3419[_0x341915];
        return _0x973961;
    }, _0x252c(_0x1fa87e, _0x235c8c);
}
module[_0x43793e(574)] = World;
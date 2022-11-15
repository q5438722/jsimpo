var ArrayUtils = require(_0x4ae167(224)), BlendModes = require('../../renderer/BlendModes'), Class = require(_0x4ae167(225)), Components = require(_0x4ae167(226)), Events = require('../events'), GameObject = require(_0x4ae167(227)), Rectangle = require(_0x4ae167(228)), Render = require(_0x4ae167(229)), Union = require(_0x4ae167(230)), Vector2 = require('../../math/Vector2'), Container = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components['AlphaSingle'],
            Components['BlendMode'],
            Components[_0x4ae167(231)],
            Components[_0x4ae167(232)],
            Components[_0x4ae167(233)],
            Components[_0x4ae167(234)],
            Components['Transform'],
            Components[_0x4ae167(235)],
            Render
        ],
        'initialize': function Container(_0x182cf5, _0x291987, _0x220579, _0x5a18c5) {
            var _0x40ba81 = _0x4ae167;
            GameObject['call'](this, _0x182cf5, _0x40ba81(236)), this[_0x40ba81(237)] = [], this[_0x40ba81(238)] = !![], this[_0x40ba81(239)] = -1, this[_0x40ba81(240)] = 0, this[_0x40ba81(241)] = new Components[(_0x40ba81(242))](), this['tempTransformMatrix'] = new Components[(_0x40ba81(242))](), this['_sortKey'] = '', this['_sysEvents'] = _0x182cf5[_0x40ba81(243)]['events'], this[_0x40ba81(244)] = 1, this[_0x40ba81(245)] = 1, this['initPipeline'](), this[_0x40ba81(246)](_0x291987, _0x220579), this['clearAlpha'](), this[_0x40ba81(247)](BlendModes[_0x40ba81(248)]), _0x5a18c5 && this[_0x40ba81(249)](_0x5a18c5);
        },
        'originX': {
            'get': function () {
                return 0.5;
            }
        },
        'originY': {
            'get': function () {
                return 0.5;
            }
        },
        'displayOriginX': {
            'get': function () {
                var _0x22c1f4 = _0x4ae167;
                return this[_0x22c1f4(250)] * 0.5;
            }
        },
        'displayOriginY': {
            'get': function () {
                return this['height'] * 0.5;
            }
        },
        'setExclusive': function (_0x6114d0) {
            var _0x1e520d = _0x4ae167;
            return _0x6114d0 === undefined && (_0x6114d0 = !![]), this[_0x1e520d(238)] = _0x6114d0, this;
        },
        'getBounds': function (_0x3d8dca) {
            var _0x40eb25 = _0x4ae167;
            _0x3d8dca === undefined && (_0x3d8dca = new Rectangle());
            _0x3d8dca['setTo'](this['x'], this['y'], 0, 0);
            if (this[_0x40eb25(251)]) {
                var _0xc23e20 = this[_0x40eb25(251)][_0x40eb25(252)](), _0x582678 = _0xc23e20[_0x40eb25(253)](this['x'], this['y']);
                _0x3d8dca['setTo'](_0x582678['x'], _0x582678['y'], 0, 0);
            }
            if (this[_0x40eb25(237)]['length'] > 0) {
                var _0x55163d = this[_0x40eb25(237)], _0x4ca460 = new Rectangle(), _0x3e23af = ![];
                _0x3d8dca[_0x40eb25(254)]();
                for (var _0xf71afc = 0; _0xf71afc < _0x55163d['length']; _0xf71afc++) {
                    var _0xedd0f2 = _0x55163d[_0xf71afc];
                    _0xedd0f2['getBounds'] && (_0xedd0f2[_0x40eb25(255)](_0x4ca460), !_0x3e23af ? (_0x3d8dca[_0x40eb25(256)](_0x4ca460['x'], _0x4ca460['y'], _0x4ca460[_0x40eb25(250)], _0x4ca460[_0x40eb25(257)]), _0x3e23af = !![]) : Union(_0x4ca460, _0x3d8dca, _0x3d8dca));
                }
            }
            return _0x3d8dca;
        },
        'addHandler': function (_0x439bae) {
            var _0x289700 = _0x4ae167;
            _0x439bae['once'](Events['DESTROY'], this[_0x289700(258)], this), this['exclusive'] && (_0x439bae[_0x289700(251)] && _0x439bae['parentContainer']['remove'](_0x439bae), _0x439bae[_0x289700(259)](), _0x439bae[_0x289700(251)] = this);
        },
        'removeHandler': function (_0x4df750) {
            var _0x640eab = _0x4ae167;
            _0x4df750[_0x640eab(260)](Events['DESTROY'], this[_0x640eab(258)]), this[_0x640eab(238)] && (_0x4df750[_0x640eab(251)] = null, _0x4df750[_0x640eab(261)]());
        },
        'pointToContainer': function (_0xf7698f, _0x571b01) {
            var _0x4d42c8 = _0x4ae167;
            _0x571b01 === undefined && (_0x571b01 = new Vector2());
            this[_0x4d42c8(251)] ? this[_0x4d42c8(251)][_0x4d42c8(262)](_0xf7698f, _0x571b01) : _0x571b01 = new Vector2(_0xf7698f['x'], _0xf7698f['y']);
            var _0x165062 = this[_0x4d42c8(263)];
            return _0x165062[_0x4d42c8(264)](this['x'], this['y'], this[_0x4d42c8(265)], this[_0x4d42c8(266)], this['scaleY']), _0x165062[_0x4d42c8(267)](), _0x165062[_0x4d42c8(253)](_0xf7698f['x'], _0xf7698f['y'], _0x571b01), _0x571b01;
        },
        'getBoundsTransformMatrix': function () {
            var _0x422f01 = _0x4ae167;
            return this[_0x422f01(268)](this[_0x422f01(263)], this[_0x422f01(241)]);
        },
        'add': function (_0x535ecf) {
            var _0x241f22 = _0x4ae167;
            return ArrayUtils[_0x241f22(269)](this[_0x241f22(237)], _0x535ecf, this[_0x241f22(239)], this[_0x241f22(270)], this), this;
        },
        'addAt': function (_0x176d12, _0x4e6e7b) {
            var _0x19a822 = _0x4ae167;
            return ArrayUtils[_0x19a822(271)](this['list'], _0x176d12, _0x4e6e7b, this['maxSize'], this['addHandler'], this), this;
        },
        'getAt': function (_0x46cb97) {
            var _0x199f79 = _0x4ae167;
            return this[_0x199f79(237)][_0x46cb97];
        },
        'getIndex': function (_0x2ca2d6) {
            var _0x4fec1b = _0x4ae167;
            return this[_0x4fec1b(237)][_0x4fec1b(272)](_0x2ca2d6);
        },
        'sort': function (_0xea8f06, _0x5e4d19) {
            var _0x4e9d20 = _0x4ae167;
            if (!_0xea8f06)
                return this;
            return _0x5e4d19 === undefined && (_0x5e4d19 = function (_0x1340a0, _0x54752d) {
                return _0x1340a0[_0xea8f06] - _0x54752d[_0xea8f06];
            }), ArrayUtils[_0x4e9d20(273)](this[_0x4e9d20(237)], _0x5e4d19), this;
        },
        'getByName': function (_0xfb3973) {
            var _0x1ab650 = _0x4ae167;
            return ArrayUtils[_0x1ab650(274)](this[_0x1ab650(237)], _0x1ab650(275), _0xfb3973);
        },
        'getRandom': function (_0x315f20, _0x2efa54) {
            var _0x5aea1a = _0x4ae167;
            return ArrayUtils[_0x5aea1a(276)](this['list'], _0x315f20, _0x2efa54);
        },
        'getFirst': function (_0xbf07e4, _0x52669e, _0x5cf85a, _0x3c333c) {
            var _0x3a1af6 = _0x4ae167;
            return ArrayUtils['GetFirst'](this[_0x3a1af6(237)], _0xbf07e4, _0x52669e, _0x5cf85a, _0x3c333c);
        },
        'getAll': function (_0x505dcb, _0x19bd46, _0x40625, _0x1cb488) {
            return ArrayUtils['GetAll'](this['list'], _0x505dcb, _0x19bd46, _0x40625, _0x1cb488);
        },
        'count': function (_0x5a64e2, _0x44a1c1, _0x3c5c0e, _0x2cb83f) {
            var _0x20c282 = _0x4ae167;
            return ArrayUtils['CountAllMatching'](this[_0x20c282(237)], _0x5a64e2, _0x44a1c1, _0x3c5c0e, _0x2cb83f);
        },
        'swap': function (_0x2386a2, _0x45dcb3) {
            var _0x590807 = _0x4ae167;
            return ArrayUtils['Swap'](this[_0x590807(237)], _0x2386a2, _0x45dcb3), this;
        },
        'moveTo': function (_0xa939ce, _0x2d5cc1) {
            var _0x4a4ec5 = _0x4ae167;
            return ArrayUtils[_0x4a4ec5(277)](this[_0x4a4ec5(237)], _0xa939ce, _0x2d5cc1), this;
        },
        'moveAbove': function (_0x414495, _0x586de5) {
            var _0x57a5a5 = _0x4ae167;
            return ArrayUtils[_0x57a5a5(278)](this[_0x57a5a5(237)], _0x414495, _0x586de5), this;
        },
        'moveBelow': function (_0x41f397, _0x247f63) {
            return ArrayUtils['MoveBelow'](this['list'], _0x41f397, _0x247f63), this;
        },
        'remove': function (_0x17a5cf, _0x380bd4) {
            var _0x197efd = _0x4ae167, _0x449fc1 = ArrayUtils[_0x197efd(279)](this[_0x197efd(237)], _0x17a5cf, this[_0x197efd(280)], this);
            if (_0x380bd4 && _0x449fc1) {
                !Array['isArray'](_0x449fc1) && (_0x449fc1 = [_0x449fc1]);
                for (var _0x1dcb35 = 0; _0x1dcb35 < _0x449fc1[_0x197efd(281)]; _0x1dcb35++) {
                    _0x449fc1[_0x1dcb35][_0x197efd(282)]();
                }
            }
            return this;
        },
        'removeAt': function (_0x25c67a, _0xa98d04) {
            var _0x37689c = _0x4ae167, _0x1dff09 = ArrayUtils[_0x37689c(283)](this[_0x37689c(237)], _0x25c67a, this[_0x37689c(280)], this);
            return _0xa98d04 && _0x1dff09 && _0x1dff09[_0x37689c(282)](), this;
        },
        'removeBetween': function (_0x4d0d9d, _0x57d9ac, _0x27747d) {
            var _0x265960 = _0x4ae167, _0x5ce7b0 = ArrayUtils[_0x265960(284)](this[_0x265960(237)], _0x4d0d9d, _0x57d9ac, this[_0x265960(280)], this);
            if (_0x27747d)
                for (var _0x3094e4 = 0; _0x3094e4 < _0x5ce7b0[_0x265960(281)]; _0x3094e4++) {
                    _0x5ce7b0[_0x3094e4][_0x265960(282)]();
                }
            return this;
        },
        'removeAll': function (_0x4793c7) {
            var _0xd35ad7 = _0x4ae167, _0x1030c5 = ArrayUtils[_0xd35ad7(284)](this[_0xd35ad7(237)], 0, this[_0xd35ad7(237)]['length'], this[_0xd35ad7(280)], this);
            if (_0x4793c7)
                for (var _0x42ed08 = 0; _0x42ed08 < _0x1030c5[_0xd35ad7(281)]; _0x42ed08++) {
                    _0x1030c5[_0x42ed08][_0xd35ad7(282)]();
                }
            return this;
        },
        'bringToTop': function (_0x51959) {
            var _0x357d5b = _0x4ae167;
            return ArrayUtils[_0x357d5b(285)](this['list'], _0x51959), this;
        },
        'sendToBack': function (_0x4678da) {
            var _0x15333d = _0x4ae167;
            return ArrayUtils['SendToBack'](this[_0x15333d(237)], _0x4678da), this;
        },
        'moveUp': function (_0x325f5f) {
            var _0x1d6875 = _0x4ae167;
            return ArrayUtils[_0x1d6875(286)](this['list'], _0x325f5f), this;
        },
        'moveDown': function (_0x4da560) {
            var _0x1e1de8 = _0x4ae167;
            return ArrayUtils[_0x1e1de8(287)](this[_0x1e1de8(237)], _0x4da560), this;
        },
        'reverse': function () {
            var _0x17c64a = _0x4ae167;
            return this[_0x17c64a(237)][_0x17c64a(288)](), this;
        },
        'shuffle': function () {
            return ArrayUtils['Shuffle'](this['list']), this;
        },
        'replace': function (_0x56edf0, _0x39c6a5, _0x3bbb31) {
            var _0x3b4dd8 = _0x4ae167, _0x3fd25e = ArrayUtils[_0x3b4dd8(289)](this[_0x3b4dd8(237)], _0x56edf0, _0x39c6a5);
            return _0x3fd25e && (this[_0x3b4dd8(270)](_0x39c6a5), this['removeHandler'](_0x56edf0), _0x3bbb31 && _0x56edf0['destroy']()), this;
        },
        'exists': function (_0x1fb1a3) {
            var _0x2b6e32 = _0x4ae167;
            return this[_0x2b6e32(237)][_0x2b6e32(272)](_0x1fb1a3) > -1;
        },
        'setAll': function (_0x7b5c06, _0x599a61, _0x102efb, _0x9e77b7) {
            var _0x434cf1 = _0x4ae167;
            return ArrayUtils['SetAll'](this[_0x434cf1(237)], _0x7b5c06, _0x599a61, _0x102efb, _0x9e77b7), this;
        },
        'each': function (_0x4ba2e6, _0x4eab67) {
            var _0x363b50 = _0x4ae167, _0x4cd8fd = [null], _0x21a759, _0x173b5a = this[_0x363b50(237)][_0x363b50(290)](), _0x5c6542 = _0x173b5a[_0x363b50(281)];
            for (_0x21a759 = 2; _0x21a759 < arguments[_0x363b50(281)]; _0x21a759++) {
                _0x4cd8fd[_0x363b50(291)](arguments[_0x21a759]);
            }
            for (_0x21a759 = 0; _0x21a759 < _0x5c6542; _0x21a759++) {
                _0x4cd8fd[0] = _0x173b5a[_0x21a759], _0x4ba2e6[_0x363b50(292)](_0x4eab67, _0x4cd8fd);
            }
            return this;
        },
        'iterate': function (_0x38ee9e, _0x178d30) {
            var _0x2991ca = _0x4ae167, _0x5f15da = [null], _0x312705;
            for (_0x312705 = 2; _0x312705 < arguments['length']; _0x312705++) {
                _0x5f15da[_0x2991ca(291)](arguments[_0x312705]);
            }
            for (_0x312705 = 0; _0x312705 < this[_0x2991ca(237)][_0x2991ca(281)]; _0x312705++) {
                _0x5f15da[0] = this['list'][_0x312705], _0x38ee9e[_0x2991ca(292)](_0x178d30, _0x5f15da);
            }
            return this;
        },
        'setScrollFactor': function (_0x2a5235, _0x6f05a1, _0x3fbed4) {
            var _0x393064 = _0x4ae167;
            return _0x6f05a1 === undefined && (_0x6f05a1 = _0x2a5235), _0x3fbed4 === undefined && (_0x3fbed4 = ![]), this[_0x393064(244)] = _0x2a5235, this[_0x393064(245)] = _0x6f05a1, _0x3fbed4 && (ArrayUtils[_0x393064(293)](this[_0x393064(237)], _0x393064(244), _0x2a5235), ArrayUtils[_0x393064(293)](this[_0x393064(237)], _0x393064(245), _0x6f05a1)), this;
        },
        'length': {
            'get': function () {
                var _0x4e70c8 = _0x4ae167;
                return this[_0x4e70c8(237)][_0x4e70c8(281)];
            }
        },
        'first': {
            'get': function () {
                var _0x1e8352 = _0x4ae167;
                return this[_0x1e8352(240)] = 0, this[_0x1e8352(237)][_0x1e8352(281)] > 0 ? this[_0x1e8352(237)][0] : null;
            }
        },
        'last': {
            'get': function () {
                var _0x173ce6 = _0x4ae167;
                return this[_0x173ce6(237)][_0x173ce6(281)] > 0 ? (this[_0x173ce6(240)] = this[_0x173ce6(237)][_0x173ce6(281)] - 1, this[_0x173ce6(237)][this[_0x173ce6(240)]]) : null;
            }
        },
        'next': {
            'get': function () {
                var _0x43f18f = _0x4ae167;
                return this[_0x43f18f(240)] < this[_0x43f18f(237)][_0x43f18f(281)] ? (this[_0x43f18f(240)]++, this['list'][this[_0x43f18f(240)]]) : null;
            }
        },
        'previous': {
            'get': function () {
                var _0x49caeb = _0x4ae167;
                return this[_0x49caeb(240)] > 0 ? (this['position']--, this['list'][this['position']]) : null;
            }
        },
        'preDestroy': function () {
            var _0x5e34c2 = _0x4ae167;
            this[_0x5e34c2(294)](!!this[_0x5e34c2(238)]), this['localTransform'][_0x5e34c2(282)](), this[_0x5e34c2(263)][_0x5e34c2(282)](), this[_0x5e34c2(237)] = [];
        }
    });
module[_0x4ae167(295)] = Container;
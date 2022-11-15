/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x1fc3 = [
    'applyITRS',
    'rotation',
    'scaleX',
    'invert',
    'getWorldTransformMatrix',
    'Add',
    'addHandler',
    'AddAt',
    'indexOf',
    'StableSort',
    'GetFirst',
    'name',
    'GetRandom',
    'MoveTo',
    'MoveAbove',
    'Remove',
    'removeHandler',
    'length',
    'destroy',
    'RemoveAt',
    'RemoveBetween',
    'BringToTop',
    'MoveUp',
    'MoveDown',
    'reverse',
    'Replace',
    'slice',
    'push',
    'apply',
    'SetAll',
    'removeAll',
    'exports',
    '1859340YuuyTk',
    '264162ncMlfS',
    '1cusFvH',
    '4ruEJTR',
    '34899UkIaDt',
    '1588278PqmMkq',
    '1389435dqbDVg',
    '1782122EvxSau',
    '1687013UzktwT',
    '../../utils/array',
    '../../utils/Class',
    '../components',
    '../GameObject',
    '../../geom/rectangle/Rectangle',
    './ContainerRender',
    '../../geom/rectangle/Union',
    'ComputedSize',
    'Depth',
    'Mask',
    'Pipeline',
    'Visible',
    'Container',
    'list',
    'exclusive',
    'maxSize',
    'position',
    'localTransform',
    'TransformMatrix',
    'sys',
    'scrollFactorX',
    'scrollFactorY',
    'setPosition',
    'setBlendMode',
    'SKIP_CHECK',
    'add',
    'width',
    'parentContainer',
    'getBoundsTransformMatrix',
    'transformPoint',
    'setEmpty',
    'getBounds',
    'setTo',
    'height',
    'remove',
    'removeFromDisplayList',
    'off',
    'addToDisplayList',
    'pointToContainer',
    'tempTransformMatrix'
];
function _0x203e(_0x1d3919, _0x57b0e4) {
    return _0x203e = function (_0x1fc391, _0x203e69) {
        _0x1fc391 = _0x1fc391 - 0xd7;
        var _0x45d650 = _0x1fc3[_0x1fc391];
        return _0x45d650;
    }, _0x203e(_0x1d3919, _0x57b0e4);
}
var _0x4ae167 = _0x203e;
(function (_0x422011, _0x31e844) {
    var _0x436ed2 = _0x203e;
    while (!![]) {
        try {
            var _0x1a313a = parseInt(_0x436ed2(0xd7)) + -parseInt(_0x436ed2(0xd8)) * parseInt(_0x436ed2(0xd9)) + -parseInt(_0x436ed2(0xda)) * parseInt(_0x436ed2(0xdb)) + parseInt(_0x436ed2(0xdc)) + parseInt(_0x436ed2(0xdd)) + -parseInt(_0x436ed2(0xde)) + -parseInt(_0x436ed2(0xdf));
            if (_0x1a313a === _0x31e844)
                break;
            else
                _0x422011['push'](_0x422011['shift']());
        } catch (_0x3089b8) {
            _0x422011['push'](_0x422011['shift']());
        }
    }
}(_0x1fc3, 0xeb640));
var ArrayUtils = require(_0x4ae167(0xe0)), BlendModes = require('../../renderer/BlendModes'), Class = require(_0x4ae167(0xe1)), Components = require(_0x4ae167(0xe2)), Events = require('../events'), GameObject = require(_0x4ae167(0xe3)), Rectangle = require(_0x4ae167(0xe4)), Render = require(_0x4ae167(0xe5)), Union = require(_0x4ae167(0xe6)), Vector2 = require('../../math/Vector2'), Container = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components['AlphaSingle'],
            Components['BlendMode'],
            Components[_0x4ae167(0xe7)],
            Components[_0x4ae167(0xe8)],
            Components[_0x4ae167(0xe9)],
            Components[_0x4ae167(0xea)],
            Components['Transform'],
            Components[_0x4ae167(0xeb)],
            Render
        ],
        'initialize': function Container(_0x182cf5, _0x291987, _0x220579, _0x5a18c5) {
            var _0x40ba81 = _0x4ae167;
            GameObject['call'](this, _0x182cf5, _0x40ba81(0xec)), this[_0x40ba81(0xed)] = [], this[_0x40ba81(0xee)] = !![], this[_0x40ba81(0xef)] = -0x1, this[_0x40ba81(0xf0)] = 0x0, this[_0x40ba81(0xf1)] = new Components[(_0x40ba81(0xf2))](), this['tempTransformMatrix'] = new Components[(_0x40ba81(0xf2))](), this['_sortKey'] = '', this['_sysEvents'] = _0x182cf5[_0x40ba81(0xf3)]['events'], this[_0x40ba81(0xf4)] = 0x1, this[_0x40ba81(0xf5)] = 0x1, this['initPipeline'](), this[_0x40ba81(0xf6)](_0x291987, _0x220579), this['clearAlpha'](), this[_0x40ba81(0xf7)](BlendModes[_0x40ba81(0xf8)]), _0x5a18c5 && this[_0x40ba81(0xf9)](_0x5a18c5);
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
                return this[_0x22c1f4(0xfa)] * 0.5;
            }
        },
        'displayOriginY': {
            'get': function () {
                return this['height'] * 0.5;
            }
        },
        'setExclusive': function (_0x6114d0) {
            var _0x1e520d = _0x4ae167;
            return _0x6114d0 === undefined && (_0x6114d0 = !![]), this[_0x1e520d(0xee)] = _0x6114d0, this;
        },
        'getBounds': function (_0x3d8dca) {
            var _0x40eb25 = _0x4ae167;
            _0x3d8dca === undefined && (_0x3d8dca = new Rectangle());
            _0x3d8dca['setTo'](this['x'], this['y'], 0x0, 0x0);
            if (this[_0x40eb25(0xfb)]) {
                var _0xc23e20 = this[_0x40eb25(0xfb)][_0x40eb25(0xfc)](), _0x582678 = _0xc23e20[_0x40eb25(0xfd)](this['x'], this['y']);
                _0x3d8dca['setTo'](_0x582678['x'], _0x582678['y'], 0x0, 0x0);
            }
            if (this[_0x40eb25(0xed)]['length'] > 0x0) {
                var _0x55163d = this[_0x40eb25(0xed)], _0x4ca460 = new Rectangle(), _0x3e23af = ![];
                _0x3d8dca[_0x40eb25(0xfe)]();
                for (var _0xf71afc = 0x0; _0xf71afc < _0x55163d['length']; _0xf71afc++) {
                    var _0xedd0f2 = _0x55163d[_0xf71afc];
                    _0xedd0f2['getBounds'] && (_0xedd0f2[_0x40eb25(0xff)](_0x4ca460), !_0x3e23af ? (_0x3d8dca[_0x40eb25(0x100)](_0x4ca460['x'], _0x4ca460['y'], _0x4ca460[_0x40eb25(0xfa)], _0x4ca460[_0x40eb25(0x101)]), _0x3e23af = !![]) : Union(_0x4ca460, _0x3d8dca, _0x3d8dca));
                }
            }
            return _0x3d8dca;
        },
        'addHandler': function (_0x439bae) {
            var _0x289700 = _0x4ae167;
            _0x439bae['once'](Events['DESTROY'], this[_0x289700(0x102)], this), this['exclusive'] && (_0x439bae[_0x289700(0xfb)] && _0x439bae['parentContainer']['remove'](_0x439bae), _0x439bae[_0x289700(0x103)](), _0x439bae[_0x289700(0xfb)] = this);
        },
        'removeHandler': function (_0x4df750) {
            var _0x640eab = _0x4ae167;
            _0x4df750[_0x640eab(0x104)](Events['DESTROY'], this[_0x640eab(0x102)]), this[_0x640eab(0xee)] && (_0x4df750[_0x640eab(0xfb)] = null, _0x4df750[_0x640eab(0x105)]());
        },
        'pointToContainer': function (_0xf7698f, _0x571b01) {
            var _0x4d42c8 = _0x4ae167;
            _0x571b01 === undefined && (_0x571b01 = new Vector2());
            this[_0x4d42c8(0xfb)] ? this[_0x4d42c8(0xfb)][_0x4d42c8(0x106)](_0xf7698f, _0x571b01) : _0x571b01 = new Vector2(_0xf7698f['x'], _0xf7698f['y']);
            var _0x165062 = this[_0x4d42c8(0x107)];
            return _0x165062[_0x4d42c8(0x108)](this['x'], this['y'], this[_0x4d42c8(0x109)], this[_0x4d42c8(0x10a)], this['scaleY']), _0x165062[_0x4d42c8(0x10b)](), _0x165062[_0x4d42c8(0xfd)](_0xf7698f['x'], _0xf7698f['y'], _0x571b01), _0x571b01;
        },
        'getBoundsTransformMatrix': function () {
            var _0x422f01 = _0x4ae167;
            return this[_0x422f01(0x10c)](this[_0x422f01(0x107)], this[_0x422f01(0xf1)]);
        },
        'add': function (_0x535ecf) {
            var _0x241f22 = _0x4ae167;
            return ArrayUtils[_0x241f22(0x10d)](this[_0x241f22(0xed)], _0x535ecf, this[_0x241f22(0xef)], this[_0x241f22(0x10e)], this), this;
        },
        'addAt': function (_0x176d12, _0x4e6e7b) {
            var _0x19a822 = _0x4ae167;
            return ArrayUtils[_0x19a822(0x10f)](this['list'], _0x176d12, _0x4e6e7b, this['maxSize'], this['addHandler'], this), this;
        },
        'getAt': function (_0x46cb97) {
            var _0x199f79 = _0x4ae167;
            return this[_0x199f79(0xed)][_0x46cb97];
        },
        'getIndex': function (_0x2ca2d6) {
            var _0x4fec1b = _0x4ae167;
            return this[_0x4fec1b(0xed)][_0x4fec1b(0x110)](_0x2ca2d6);
        },
        'sort': function (_0xea8f06, _0x5e4d19) {
            var _0x4e9d20 = _0x4ae167;
            if (!_0xea8f06)
                return this;
            return _0x5e4d19 === undefined && (_0x5e4d19 = function (_0x1340a0, _0x54752d) {
                return _0x1340a0[_0xea8f06] - _0x54752d[_0xea8f06];
            }), ArrayUtils[_0x4e9d20(0x111)](this[_0x4e9d20(0xed)], _0x5e4d19), this;
        },
        'getByName': function (_0xfb3973) {
            var _0x1ab650 = _0x4ae167;
            return ArrayUtils[_0x1ab650(0x112)](this[_0x1ab650(0xed)], _0x1ab650(0x113), _0xfb3973);
        },
        'getRandom': function (_0x315f20, _0x2efa54) {
            var _0x5aea1a = _0x4ae167;
            return ArrayUtils[_0x5aea1a(0x114)](this['list'], _0x315f20, _0x2efa54);
        },
        'getFirst': function (_0xbf07e4, _0x52669e, _0x5cf85a, _0x3c333c) {
            var _0x3a1af6 = _0x4ae167;
            return ArrayUtils['GetFirst'](this[_0x3a1af6(0xed)], _0xbf07e4, _0x52669e, _0x5cf85a, _0x3c333c);
        },
        'getAll': function (_0x505dcb, _0x19bd46, _0x40625, _0x1cb488) {
            return ArrayUtils['GetAll'](this['list'], _0x505dcb, _0x19bd46, _0x40625, _0x1cb488);
        },
        'count': function (_0x5a64e2, _0x44a1c1, _0x3c5c0e, _0x2cb83f) {
            var _0x20c282 = _0x4ae167;
            return ArrayUtils['CountAllMatching'](this[_0x20c282(0xed)], _0x5a64e2, _0x44a1c1, _0x3c5c0e, _0x2cb83f);
        },
        'swap': function (_0x2386a2, _0x45dcb3) {
            var _0x590807 = _0x4ae167;
            return ArrayUtils['Swap'](this[_0x590807(0xed)], _0x2386a2, _0x45dcb3), this;
        },
        'moveTo': function (_0xa939ce, _0x2d5cc1) {
            var _0x4a4ec5 = _0x4ae167;
            return ArrayUtils[_0x4a4ec5(0x115)](this[_0x4a4ec5(0xed)], _0xa939ce, _0x2d5cc1), this;
        },
        'moveAbove': function (_0x414495, _0x586de5) {
            var _0x57a5a5 = _0x4ae167;
            return ArrayUtils[_0x57a5a5(0x116)](this[_0x57a5a5(0xed)], _0x414495, _0x586de5), this;
        },
        'moveBelow': function (_0x41f397, _0x247f63) {
            return ArrayUtils['MoveBelow'](this['list'], _0x41f397, _0x247f63), this;
        },
        'remove': function (_0x17a5cf, _0x380bd4) {
            var _0x197efd = _0x4ae167, _0x449fc1 = ArrayUtils[_0x197efd(0x117)](this[_0x197efd(0xed)], _0x17a5cf, this[_0x197efd(0x118)], this);
            if (_0x380bd4 && _0x449fc1) {
                !Array['isArray'](_0x449fc1) && (_0x449fc1 = [_0x449fc1]);
                for (var _0x1dcb35 = 0x0; _0x1dcb35 < _0x449fc1[_0x197efd(0x119)]; _0x1dcb35++) {
                    _0x449fc1[_0x1dcb35][_0x197efd(0x11a)]();
                }
            }
            return this;
        },
        'removeAt': function (_0x25c67a, _0xa98d04) {
            var _0x37689c = _0x4ae167, _0x1dff09 = ArrayUtils[_0x37689c(0x11b)](this[_0x37689c(0xed)], _0x25c67a, this[_0x37689c(0x118)], this);
            return _0xa98d04 && _0x1dff09 && _0x1dff09[_0x37689c(0x11a)](), this;
        },
        'removeBetween': function (_0x4d0d9d, _0x57d9ac, _0x27747d) {
            var _0x265960 = _0x4ae167, _0x5ce7b0 = ArrayUtils[_0x265960(0x11c)](this[_0x265960(0xed)], _0x4d0d9d, _0x57d9ac, this[_0x265960(0x118)], this);
            if (_0x27747d)
                for (var _0x3094e4 = 0x0; _0x3094e4 < _0x5ce7b0[_0x265960(0x119)]; _0x3094e4++) {
                    _0x5ce7b0[_0x3094e4][_0x265960(0x11a)]();
                }
            return this;
        },
        'removeAll': function (_0x4793c7) {
            var _0xd35ad7 = _0x4ae167, _0x1030c5 = ArrayUtils[_0xd35ad7(0x11c)](this[_0xd35ad7(0xed)], 0x0, this[_0xd35ad7(0xed)]['length'], this[_0xd35ad7(0x118)], this);
            if (_0x4793c7)
                for (var _0x42ed08 = 0x0; _0x42ed08 < _0x1030c5[_0xd35ad7(0x119)]; _0x42ed08++) {
                    _0x1030c5[_0x42ed08][_0xd35ad7(0x11a)]();
                }
            return this;
        },
        'bringToTop': function (_0x51959) {
            var _0x357d5b = _0x4ae167;
            return ArrayUtils[_0x357d5b(0x11d)](this['list'], _0x51959), this;
        },
        'sendToBack': function (_0x4678da) {
            var _0x15333d = _0x4ae167;
            return ArrayUtils['SendToBack'](this[_0x15333d(0xed)], _0x4678da), this;
        },
        'moveUp': function (_0x325f5f) {
            var _0x1d6875 = _0x4ae167;
            return ArrayUtils[_0x1d6875(0x11e)](this['list'], _0x325f5f), this;
        },
        'moveDown': function (_0x4da560) {
            var _0x1e1de8 = _0x4ae167;
            return ArrayUtils[_0x1e1de8(0x11f)](this[_0x1e1de8(0xed)], _0x4da560), this;
        },
        'reverse': function () {
            var _0x17c64a = _0x4ae167;
            return this[_0x17c64a(0xed)][_0x17c64a(0x120)](), this;
        },
        'shuffle': function () {
            return ArrayUtils['Shuffle'](this['list']), this;
        },
        'replace': function (_0x56edf0, _0x39c6a5, _0x3bbb31) {
            var _0x3b4dd8 = _0x4ae167, _0x3fd25e = ArrayUtils[_0x3b4dd8(0x121)](this[_0x3b4dd8(0xed)], _0x56edf0, _0x39c6a5);
            return _0x3fd25e && (this[_0x3b4dd8(0x10e)](_0x39c6a5), this['removeHandler'](_0x56edf0), _0x3bbb31 && _0x56edf0['destroy']()), this;
        },
        'exists': function (_0x1fb1a3) {
            var _0x2b6e32 = _0x4ae167;
            return this[_0x2b6e32(0xed)][_0x2b6e32(0x110)](_0x1fb1a3) > -0x1;
        },
        'setAll': function (_0x7b5c06, _0x599a61, _0x102efb, _0x9e77b7) {
            var _0x434cf1 = _0x4ae167;
            return ArrayUtils['SetAll'](this[_0x434cf1(0xed)], _0x7b5c06, _0x599a61, _0x102efb, _0x9e77b7), this;
        },
        'each': function (_0x4ba2e6, _0x4eab67) {
            var _0x363b50 = _0x4ae167, _0x4cd8fd = [null], _0x21a759, _0x173b5a = this[_0x363b50(0xed)][_0x363b50(0x122)](), _0x5c6542 = _0x173b5a[_0x363b50(0x119)];
            for (_0x21a759 = 0x2; _0x21a759 < arguments[_0x363b50(0x119)]; _0x21a759++) {
                _0x4cd8fd[_0x363b50(0x123)](arguments[_0x21a759]);
            }
            for (_0x21a759 = 0x0; _0x21a759 < _0x5c6542; _0x21a759++) {
                _0x4cd8fd[0x0] = _0x173b5a[_0x21a759], _0x4ba2e6[_0x363b50(0x124)](_0x4eab67, _0x4cd8fd);
            }
            return this;
        },
        'iterate': function (_0x38ee9e, _0x178d30) {
            var _0x2991ca = _0x4ae167, _0x5f15da = [null], _0x312705;
            for (_0x312705 = 0x2; _0x312705 < arguments['length']; _0x312705++) {
                _0x5f15da[_0x2991ca(0x123)](arguments[_0x312705]);
            }
            for (_0x312705 = 0x0; _0x312705 < this[_0x2991ca(0xed)][_0x2991ca(0x119)]; _0x312705++) {
                _0x5f15da[0x0] = this['list'][_0x312705], _0x38ee9e[_0x2991ca(0x124)](_0x178d30, _0x5f15da);
            }
            return this;
        },
        'setScrollFactor': function (_0x2a5235, _0x6f05a1, _0x3fbed4) {
            var _0x393064 = _0x4ae167;
            return _0x6f05a1 === undefined && (_0x6f05a1 = _0x2a5235), _0x3fbed4 === undefined && (_0x3fbed4 = ![]), this[_0x393064(0xf4)] = _0x2a5235, this[_0x393064(0xf5)] = _0x6f05a1, _0x3fbed4 && (ArrayUtils[_0x393064(0x125)](this[_0x393064(0xed)], _0x393064(0xf4), _0x2a5235), ArrayUtils[_0x393064(0x125)](this[_0x393064(0xed)], _0x393064(0xf5), _0x6f05a1)), this;
        },
        'length': {
            'get': function () {
                var _0x4e70c8 = _0x4ae167;
                return this[_0x4e70c8(0xed)][_0x4e70c8(0x119)];
            }
        },
        'first': {
            'get': function () {
                var _0x1e8352 = _0x4ae167;
                return this[_0x1e8352(0xf0)] = 0x0, this[_0x1e8352(0xed)][_0x1e8352(0x119)] > 0x0 ? this[_0x1e8352(0xed)][0x0] : null;
            }
        },
        'last': {
            'get': function () {
                var _0x173ce6 = _0x4ae167;
                return this[_0x173ce6(0xed)][_0x173ce6(0x119)] > 0x0 ? (this[_0x173ce6(0xf0)] = this[_0x173ce6(0xed)][_0x173ce6(0x119)] - 0x1, this[_0x173ce6(0xed)][this[_0x173ce6(0xf0)]]) : null;
            }
        },
        'next': {
            'get': function () {
                var _0x43f18f = _0x4ae167;
                return this[_0x43f18f(0xf0)] < this[_0x43f18f(0xed)][_0x43f18f(0x119)] ? (this[_0x43f18f(0xf0)]++, this['list'][this[_0x43f18f(0xf0)]]) : null;
            }
        },
        'previous': {
            'get': function () {
                var _0x49caeb = _0x4ae167;
                return this[_0x49caeb(0xf0)] > 0x0 ? (this['position']--, this['list'][this['position']]) : null;
            }
        },
        'preDestroy': function () {
            var _0x5e34c2 = _0x4ae167;
            this[_0x5e34c2(0x126)](!!this[_0x5e34c2(0xee)]), this['localTransform'][_0x5e34c2(0x11a)](), this[_0x5e34c2(0x107)][_0x5e34c2(0x11a)](), this[_0x5e34c2(0xed)] = [];
        }
    });
module[_0x4ae167(0x127)] = Container;

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x1c02 = [
    'ScrollFactor',
    'Size',
    'Visible',
    'call',
    'Blitter',
    'setTexture',
    'setPosition',
    'initPipeline',
    'children',
    'renderList',
    'frame',
    'get',
    'addAt',
    'createMultiple',
    'length',
    'name',
    'isArray',
    'push',
    'visible',
    'alpha',
    'list',
    'filter',
    'childCanRender',
    'dirty',
    'destroy',
    'exports',
    '51249ikeGZf',
    '181557gzOpxX',
    '39202UYMKWr',
    '1UhhYHv',
    '205035FQvPGJ',
    '115103OgLDCb',
    '175773uSqbrs',
    '298046KYoeRQ',
    './BlitterRender',
    './Bob',
    '../../utils/Class',
    '../components',
    'Alpha',
    'BlendMode',
    'Depth',
    'Pipeline'
];
var _0x101fa4 = _0x56e3;
function _0x56e3(_0x1712a8, _0x15240a) {
    return _0x56e3 = function (_0x1c02f3, _0x56e345) {
        _0x1c02f3 = _0x1c02f3 - 0xdb;
        var _0x558ba1 = _0x1c02[_0x1c02f3];
        return _0x558ba1;
    }, _0x56e3(_0x1712a8, _0x15240a);
}
(function (_0x540c23, _0x23bde8) {
    var _0x366e5c = _0x56e3;
    while (!![]) {
        try {
            var _0x1f9f6c = -parseInt(_0x366e5c(0xdb)) + -parseInt(_0x366e5c(0xdc)) + -parseInt(_0x366e5c(0xdd)) * parseInt(_0x366e5c(0xde)) + -parseInt(_0x366e5c(0xdf)) + parseInt(_0x366e5c(0xe0)) + parseInt(_0x366e5c(0xe1)) + parseInt(_0x366e5c(0xe2));
            if (_0x1f9f6c === _0x23bde8)
                break;
            else
                _0x540c23['push'](_0x540c23['shift']());
        } catch (_0x98aa43) {
            _0x540c23['push'](_0x540c23['shift']());
        }
    }
}(_0x1c02, 0x1b507));
var BlitterRender = require(_0x101fa4(0xe3)), Bob = require(_0x101fa4(0xe4)), Class = require(_0x101fa4(0xe5)), Components = require(_0x101fa4(0xe6)), Frame = require('../../textures/Frame'), GameObject = require('../GameObject'), List = require('../../structs/List'), Blitter = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components[_0x101fa4(0xe7)],
            Components[_0x101fa4(0xe8)],
            Components[_0x101fa4(0xe9)],
            Components['Mask'],
            Components[_0x101fa4(0xea)],
            Components[_0x101fa4(0xeb)],
            Components[_0x101fa4(0xec)],
            Components['Texture'],
            Components['Transform'],
            Components[_0x101fa4(0xed)],
            BlitterRender
        ],
        'initialize': function Blitter(_0x2a1510, _0x1e1fdc, _0x132e1a, _0xb3aedb, _0x37b545) {
            var _0x14b5c5 = _0x101fa4;
            GameObject[_0x14b5c5(0xee)](this, _0x2a1510, _0x14b5c5(0xef)), this[_0x14b5c5(0xf0)](_0xb3aedb, _0x37b545), this[_0x14b5c5(0xf1)](_0x1e1fdc, _0x132e1a), this[_0x14b5c5(0xf2)](), this[_0x14b5c5(0xf3)] = new List(), this[_0x14b5c5(0xf4)] = [], this['dirty'] = ![];
        },
        'create': function (_0x3d6704, _0x4e5783, _0x4e3b5f, _0x4c66f6, _0x3f3dea) {
            var _0x225652 = _0x101fa4;
            _0x4c66f6 === undefined && (_0x4c66f6 = !![]);
            _0x3f3dea === undefined && (_0x3f3dea = this['children']['length']);
            if (_0x4e3b5f === undefined)
                _0x4e3b5f = this[_0x225652(0xf5)];
            else
                !(_0x4e3b5f instanceof Frame) && (_0x4e3b5f = this['texture'][_0x225652(0xf6)](_0x4e3b5f));
            var _0x35e653 = new Bob(this, _0x3d6704, _0x4e5783, _0x4e3b5f, _0x4c66f6);
            return this[_0x225652(0xf3)][_0x225652(0xf7)](_0x35e653, _0x3f3dea, ![]), this['dirty'] = !![], _0x35e653;
        },
        'createFromCallback': function (_0x40f235, _0x12b31f, _0x58e02f, _0xa6e01b) {
            var _0x2c83ad = _0x101fa4, _0x462bd4 = this[_0x2c83ad(0xf8)](_0x12b31f, _0x58e02f, _0xa6e01b);
            for (var _0x3d14fa = 0x0; _0x3d14fa < _0x462bd4[_0x2c83ad(0xf9)]; _0x3d14fa++) {
                var _0xbe867c = _0x462bd4[_0x3d14fa];
                _0x40f235[_0x2c83ad(0xee)](this, _0xbe867c, _0x3d14fa);
            }
            return _0x462bd4;
        },
        'createMultiple': function (_0x599e6a, _0xc4a259, _0x19655d) {
            var _0x4abae0 = _0x101fa4;
            _0xc4a259 === undefined && (_0xc4a259 = this[_0x4abae0(0xf5)][_0x4abae0(0xfa)]);
            _0x19655d === undefined && (_0x19655d = !![]);
            !Array[_0x4abae0(0xfb)](_0xc4a259) && (_0xc4a259 = [_0xc4a259]);
            var _0x2d18ed = [], _0x5e52c7 = this;
            return _0xc4a259['forEach'](function (_0x19d923) {
                var _0x2a306a = _0x4abae0;
                for (var _0x1b76ff = 0x0; _0x1b76ff < _0x599e6a; _0x1b76ff++) {
                    _0x2d18ed[_0x2a306a(0xfc)](_0x5e52c7['create'](0x0, 0x0, _0x19d923, _0x19655d));
                }
            }), _0x2d18ed;
        },
        'childCanRender': function (_0x167fa7) {
            var _0x12c09f = _0x101fa4;
            return _0x167fa7[_0x12c09f(0xfd)] && _0x167fa7[_0x12c09f(0xfe)] > 0x0;
        },
        'getRenderList': function () {
            var _0x11231b = _0x101fa4;
            return this['dirty'] && (this[_0x11231b(0xf4)] = this[_0x11231b(0xf3)][_0x11231b(0xff)][_0x11231b(0x100)](this[_0x11231b(0x101)], this), this[_0x11231b(0x102)] = ![]), this[_0x11231b(0xf4)];
        },
        'clear': function () {
            var _0x1b77f4 = _0x101fa4;
            this['children']['removeAll'](), this[_0x1b77f4(0x102)] = !![];
        },
        'preDestroy': function () {
            var _0x17da8b = _0x101fa4;
            this[_0x17da8b(0xf3)][_0x17da8b(0x103)](), this['renderList'] = [];
        }
    });
module[_0x101fa4(0x104)] = Blitter;

var BlitterRender = require(_0x101fa4(227)), Bob = require(_0x101fa4(228)), Class = require(_0x101fa4(229)), Components = require(_0x101fa4(230)), Frame = require('../../textures/Frame'), GameObject = require('../GameObject'), List = require('../../structs/List'), Blitter = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components[_0x101fa4(231)],
            Components[_0x101fa4(232)],
            Components[_0x101fa4(233)],
            Components['Mask'],
            Components[_0x101fa4(234)],
            Components[_0x101fa4(235)],
            Components[_0x101fa4(236)],
            Components['Texture'],
            Components['Transform'],
            Components[_0x101fa4(237)],
            BlitterRender
        ],
        'initialize': function Blitter(_0x2a1510, _0x1e1fdc, _0x132e1a, _0xb3aedb, _0x37b545) {
            var _0x14b5c5 = _0x101fa4;
            GameObject[_0x14b5c5(238)](this, _0x2a1510, _0x14b5c5(239)), this[_0x14b5c5(240)](_0xb3aedb, _0x37b545), this[_0x14b5c5(241)](_0x1e1fdc, _0x132e1a), this[_0x14b5c5(242)](), this[_0x14b5c5(243)] = new List(), this[_0x14b5c5(244)] = [], this['dirty'] = ![];
        },
        'create': function (_0x3d6704, _0x4e5783, _0x4e3b5f, _0x4c66f6, _0x3f3dea) {
            var _0x225652 = _0x101fa4;
            _0x4c66f6 === undefined && (_0x4c66f6 = !![]);
            _0x3f3dea === undefined && (_0x3f3dea = this['children']['length']);
            if (_0x4e3b5f === undefined)
                _0x4e3b5f = this[_0x225652(245)];
            else
                !(_0x4e3b5f instanceof Frame) && (_0x4e3b5f = this['texture'][_0x225652(246)](_0x4e3b5f));
            var _0x35e653 = new Bob(this, _0x3d6704, _0x4e5783, _0x4e3b5f, _0x4c66f6);
            return this[_0x225652(243)][_0x225652(247)](_0x35e653, _0x3f3dea, ![]), this['dirty'] = !![], _0x35e653;
        },
        'createFromCallback': function (_0x40f235, _0x12b31f, _0x58e02f, _0xa6e01b) {
            var _0x2c83ad = _0x101fa4, _0x462bd4 = this[_0x2c83ad(248)](_0x12b31f, _0x58e02f, _0xa6e01b);
            for (var _0x3d14fa = 0; _0x3d14fa < _0x462bd4[_0x2c83ad(249)]; _0x3d14fa++) {
                var _0xbe867c = _0x462bd4[_0x3d14fa];
                _0x40f235[_0x2c83ad(238)](this, _0xbe867c, _0x3d14fa);
            }
            return _0x462bd4;
        },
        'createMultiple': function (_0x599e6a, _0xc4a259, _0x19655d) {
            var _0x4abae0 = _0x101fa4;
            _0xc4a259 === undefined && (_0xc4a259 = this[_0x4abae0(245)][_0x4abae0(250)]);
            _0x19655d === undefined && (_0x19655d = !![]);
            !Array[_0x4abae0(251)](_0xc4a259) && (_0xc4a259 = [_0xc4a259]);
            var _0x2d18ed = [], _0x5e52c7 = this;
            return _0xc4a259['forEach'](function (_0x19d923) {
                var _0x2a306a = _0x4abae0;
                for (var _0x1b76ff = 0; _0x1b76ff < _0x599e6a; _0x1b76ff++) {
                    _0x2d18ed[_0x2a306a(252)](_0x5e52c7['create'](0, 0, _0x19d923, _0x19655d));
                }
            }), _0x2d18ed;
        },
        'childCanRender': function (_0x167fa7) {
            var _0x12c09f = _0x101fa4;
            return _0x167fa7[_0x12c09f(253)] && _0x167fa7[_0x12c09f(254)] > 0;
        },
        'getRenderList': function () {
            var _0x11231b = _0x101fa4;
            return this['dirty'] && (this[_0x11231b(244)] = this[_0x11231b(243)][_0x11231b(255)][_0x11231b(256)](this[_0x11231b(257)], this), this[_0x11231b(258)] = ![]), this[_0x11231b(244)];
        },
        'clear': function () {
            var _0x1b77f4 = _0x101fa4;
            this['children']['removeAll'](), this[_0x1b77f4(258)] = !![];
        },
        'preDestroy': function () {
            var _0x17da8b = _0x101fa4;
            this[_0x17da8b(243)][_0x17da8b(259)](), this['renderList'] = [];
        }
    });
module[_0x101fa4(260)] = Blitter;
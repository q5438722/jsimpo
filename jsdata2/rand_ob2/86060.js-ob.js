/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x1eb7 = [
    '28774HYpQJf',
    '911346VRRXnJ',
    '3OVbInU',
    '3331noEhKz',
    '240207hGmouW',
    './PolygonRender',
    '../../../utils/Class',
    '../../../geom/polygon/GetAABB',
    '../../../geom/polygon/Polygon',
    '../Shape',
    'call',
    'geom',
    'setPosition',
    'setSize',
    'height',
    'setFillStyle',
    'updateDisplayOrigin',
    'updateData',
    'points',
    'length',
    'push',
    'pathIndexes',
    'pathData',
    'exports',
    '47oLTFbY',
    '19523yKSRGL',
    '541195xMcGBo',
    '46330jJiDiP',
    '27awZZkR',
    '15acwecB'
];
var _0x62066f = _0x522e;
(function (_0x43d8f3, _0x3cdfa5) {
    var _0x5675ba = _0x522e;
    while (!![]) {
        try {
            var _0xdc44ec = -parseInt(_0x5675ba(0x1a2)) * -parseInt(_0x5675ba(0x1a3)) + -parseInt(_0x5675ba(0x1a4)) + -parseInt(_0x5675ba(0x1a5)) * parseInt(_0x5675ba(0x1a6)) + parseInt(_0x5675ba(0x1a7)) * parseInt(_0x5675ba(0x1a8)) + parseInt(_0x5675ba(0x1a9)) + parseInt(_0x5675ba(0x1aa)) * parseInt(_0x5675ba(0x1ab)) + parseInt(_0x5675ba(0x1ac));
            if (_0xdc44ec === _0x3cdfa5)
                break;
            else
                _0x43d8f3['push'](_0x43d8f3['shift']());
        } catch (_0x512924) {
            _0x43d8f3['push'](_0x43d8f3['shift']());
        }
    }
}(_0x1eb7, 0xaf728));
var PolygonRender = require(_0x62066f(0x1ad)), Class = require(_0x62066f(0x1ae)), Earcut = require('../../../geom/polygon/Earcut'), GetAABB = require(_0x62066f(0x1af)), GeomPolygon = require(_0x62066f(0x1b0)), Shape = require(_0x62066f(0x1b1)), Smooth = require('../../../geom/polygon/Smooth'), Polygon = new Class({
        'Extends': Shape,
        'Mixins': [PolygonRender],
        'initialize': function Polygon(_0x50c5be, _0x164a27, _0x1cb44f, _0x241e7c, _0x145081, _0x5f0575) {
            var _0x29140c = _0x62066f;
            _0x164a27 === undefined && (_0x164a27 = 0x0);
            _0x1cb44f === undefined && (_0x1cb44f = 0x0);
            Shape[_0x29140c(0x1b2)](this, _0x50c5be, 'Polygon', new GeomPolygon(_0x241e7c));
            var _0x3bf970 = GetAABB(this[_0x29140c(0x1b3)]);
            this[_0x29140c(0x1b4)](_0x164a27, _0x1cb44f), this[_0x29140c(0x1b5)](_0x3bf970['width'], _0x3bf970[_0x29140c(0x1b6)]), _0x145081 !== undefined && this[_0x29140c(0x1b7)](_0x145081, _0x5f0575), this[_0x29140c(0x1b8)](), this['updateData']();
        },
        'smooth': function (_0x4a4499) {
            var _0x2fe732 = _0x62066f;
            _0x4a4499 === undefined && (_0x4a4499 = 0x1);
            for (var _0x218384 = 0x0; _0x218384 < _0x4a4499; _0x218384++) {
                Smooth(this[_0x2fe732(0x1b3)]);
            }
            return this[_0x2fe732(0x1b9)]();
        },
        'updateData': function () {
            var _0x2cf647 = _0x62066f, _0x549c5d = [], _0x37c0c3 = this[_0x2cf647(0x1b3)][_0x2cf647(0x1ba)];
            for (var _0x17dbd8 = 0x0; _0x17dbd8 < _0x37c0c3[_0x2cf647(0x1bb)]; _0x17dbd8++) {
                _0x549c5d[_0x2cf647(0x1bc)](_0x37c0c3[_0x17dbd8]['x'], _0x37c0c3[_0x17dbd8]['y']);
            }
            return _0x549c5d[_0x2cf647(0x1bc)](_0x37c0c3[0x0]['x'], _0x37c0c3[0x0]['y']), this[_0x2cf647(0x1bd)] = Earcut(_0x549c5d), this[_0x2cf647(0x1be)] = _0x549c5d, this;
        }
    });
function _0x522e(_0x3a74f0, _0x19b9be) {
    return _0x522e = function (_0x1eb732, _0x522e1b) {
        _0x1eb732 = _0x1eb732 - 0x1a2;
        var _0x1b2981 = _0x1eb7[_0x1eb732];
        return _0x1b2981;
    }, _0x522e(_0x3a74f0, _0x19b9be);
}
module[_0x62066f(0x1bf)] = Polygon;

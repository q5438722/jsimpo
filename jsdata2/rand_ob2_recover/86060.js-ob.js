var PolygonRender = require(_0x62066f(429)), Class = require(_0x62066f(430)), Earcut = require('../../../geom/polygon/Earcut'), GetAABB = require(_0x62066f(431)), GeomPolygon = require(_0x62066f(432)), Shape = require(_0x62066f(433)), Smooth = require('../../../geom/polygon/Smooth'), Polygon = new Class({
        'Extends': Shape,
        'Mixins': [PolygonRender],
        'initialize': function Polygon(_0x50c5be, _0x164a27, _0x1cb44f, _0x241e7c, _0x145081, _0x5f0575) {
            var _0x29140c = _0x62066f;
            _0x164a27 === undefined && (_0x164a27 = 0);
            _0x1cb44f === undefined && (_0x1cb44f = 0);
            Shape[_0x29140c(434)](this, _0x50c5be, 'Polygon', new GeomPolygon(_0x241e7c));
            var _0x3bf970 = GetAABB(this[_0x29140c(435)]);
            this[_0x29140c(436)](_0x164a27, _0x1cb44f), this[_0x29140c(437)](_0x3bf970['width'], _0x3bf970[_0x29140c(438)]), _0x145081 !== undefined && this[_0x29140c(439)](_0x145081, _0x5f0575), this[_0x29140c(440)](), this['updateData']();
        },
        'smooth': function (_0x4a4499) {
            var _0x2fe732 = _0x62066f;
            _0x4a4499 === undefined && (_0x4a4499 = 1);
            for (var _0x218384 = 0; _0x218384 < _0x4a4499; _0x218384++) {
                Smooth(this[_0x2fe732(435)]);
            }
            return this[_0x2fe732(441)]();
        },
        'updateData': function () {
            var _0x2cf647 = _0x62066f, _0x549c5d = [], _0x37c0c3 = this[_0x2cf647(435)][_0x2cf647(442)];
            for (var _0x17dbd8 = 0; _0x17dbd8 < _0x37c0c3[_0x2cf647(443)]; _0x17dbd8++) {
                _0x549c5d[_0x2cf647(444)](_0x37c0c3[_0x17dbd8]['x'], _0x37c0c3[_0x17dbd8]['y']);
            }
            return _0x549c5d[_0x2cf647(444)](_0x37c0c3[0]['x'], _0x37c0c3[0]['y']), this[_0x2cf647(445)] = Earcut(_0x549c5d), this[_0x2cf647(446)] = _0x549c5d, this;
        }
    });
function _0x522e(_0x3a74f0, _0x19b9be) {
    return _0x522e = function (_0x1eb732, _0x522e1b) {
        _0x1eb732 = _0x1eb732 - 418;
        var _0x1b2981 = _0x1eb7[_0x1eb732];
        return _0x1b2981;
    }, _0x522e(_0x3a74f0, _0x19b9be);
}
module[_0x62066f(447)] = Polygon;
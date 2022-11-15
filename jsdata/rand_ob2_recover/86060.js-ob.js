var PolygonRender = require(_0x29f541(471)), Class = require('../../../utils/Class'), Earcut = require(_0x29f541(472)), GetAABB = require('../../../geom/polygon/GetAABB'), GeomPolygon = require(_0x29f541(473)), Shape = require(_0x29f541(474)), Smooth = require(_0x29f541(475)), Polygon = new Class({
        'Extends': Shape,
        'Mixins': [PolygonRender],
        'initialize': function Polygon(_0x1e492f, _0x8d4543, _0xc61c5a, _0x486a76, _0x1a83d6, _0x1a4de2) {
            var _0x99ddb3 = _0x29f541;
            _0x8d4543 === undefined && (_0x8d4543 = 0);
            _0xc61c5a === undefined && (_0xc61c5a = 0);
            Shape['call'](this, _0x1e492f, _0x99ddb3(476), new GeomPolygon(_0x486a76));
            var _0x1f2eab = GetAABB(this['geom']);
            this['setPosition'](_0x8d4543, _0xc61c5a), this[_0x99ddb3(477)](_0x1f2eab[_0x99ddb3(478)], _0x1f2eab[_0x99ddb3(479)]), _0x1a83d6 !== undefined && this[_0x99ddb3(480)](_0x1a83d6, _0x1a4de2), this[_0x99ddb3(481)](), this[_0x99ddb3(482)]();
        },
        'smooth': function (_0x3b5e83) {
            _0x3b5e83 === undefined && (_0x3b5e83 = 1);
            for (var _0x567939 = 0; _0x567939 < _0x3b5e83; _0x567939++) {
                Smooth(this['geom']);
            }
            return this['updateData']();
        },
        'updateData': function () {
            var _0xa27148 = _0x29f541, _0x5139c1 = [], _0x57f1fb = this['geom'][_0xa27148(483)];
            for (var _0xd40236 = 0; _0xd40236 < _0x57f1fb[_0xa27148(484)]; _0xd40236++) {
                _0x5139c1[_0xa27148(485)](_0x57f1fb[_0xd40236]['x'], _0x57f1fb[_0xd40236]['y']);
            }
            return _0x5139c1['push'](_0x57f1fb[0]['x'], _0x57f1fb[0]['y']), this[_0xa27148(486)] = Earcut(_0x5139c1), this['pathData'] = _0x5139c1, this;
        }
    });
function _0x1de3(_0x4d628d, _0x3169a3) {
    return _0x1de3 = function (_0xaa6a56, _0x1de3b4) {
        _0xaa6a56 = _0xaa6a56 - 461;
        var _0x17e354 = _0xaa6a[_0xaa6a56];
        return _0x17e354;
    }, _0x1de3(_0x4d628d, _0x3169a3);
}
module[_0x29f541(487)] = Polygon;
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var PolygonRender = require('./PolygonRender'), Class = require('../../../utils/Class'), Earcut = require('../../../geom/polygon/Earcut'), GetAABB = require('../../../geom/polygon/GetAABB'), GeomPolygon = require('../../../geom/polygon/Polygon'), Shape = require('../Shape'), Smooth = require('../../../geom/polygon/Smooth'), Polygon = new Class({
        'Extends': Shape,
        'Mixins': [PolygonRender],
        'initialize': function Polygon(_0x4d4250, _0x566dcd, _0x4ec8ed, _0x13f711, _0x546fa3, _0x1715a6) {
            _0x566dcd === undefined && (_0x566dcd = 0x3 * 0x59 + 0x11a6 + -0x12b1);
            _0x4ec8ed === undefined && (_0x4ec8ed = 0x191a + 0x2575 + -0x3e8f);
            Shape['call'](this, _0x4d4250, 'Polygon', new GeomPolygon(_0x13f711));
            var _0x1555b1 = GetAABB(this['geom']);
            this['setPosition'](_0x566dcd, _0x4ec8ed), this['setSize'](_0x1555b1['width'], _0x1555b1['height']), _0x546fa3 !== undefined && this['setFillStyle'](_0x546fa3, _0x1715a6), this['updateDisplayOrigin'](), this['updateData']();
        },
        'smooth': function (_0x13360d) {
            _0x13360d === undefined && (_0x13360d = 0x1 * 0x7d5 + 0x1 * 0x17ff + 0x1fd3 * -0x1);
            for (var _0x2fb2ac = 0xf6d + -0x170d + 0x7a0; _0x2fb2ac < _0x13360d; _0x2fb2ac++) {
                Smooth(this['geom']);
            }
            return this['updateData']();
        },
        'updateData': function () {
            var _0x1883ba = [], _0x402441 = this['geom']['points'];
            for (var _0x24d47f = -0x2a5 * -0xd + -0x11fa + 0xf7 * -0x11; _0x24d47f < _0x402441['length']; _0x24d47f++) {
                _0x1883ba['push'](_0x402441[_0x24d47f]['x'], _0x402441[_0x24d47f]['y']);
            }
            return _0x1883ba['push'](_0x402441[0x347 * 0x3 + 0x2326 + -0x2f * 0xf5]['x'], _0x402441[-0x2182 + -0x218d + 0x430f]['y']), this['pathIndexes'] = Earcut(_0x1883ba), this['pathData'] = _0x1883ba, this;
        }
    });
module['exports'] = Polygon;

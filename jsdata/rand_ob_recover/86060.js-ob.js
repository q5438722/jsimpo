var PolygonRender = require('./PolygonRender'), Class = require(_0x13ddc6(312)), Earcut = require(_0x13ddc6(313)), GetAABB = require(_0x13ddc6(314)), GeomPolygon = require(_0x13ddc6(315)), Shape = require('../Shape'), Smooth = require(_0x13ddc6(316)), Polygon = new Class({
        'Extends': Shape,
        'Mixins': [PolygonRender],
        'initialize': function Polygon(_0x19232a, _0x5984f9, _0xf7308a, _0xfeaf3c, _0x3dfb1e, _0x5a983a) {
            var _0x5223ed = _0x13ddc6, _0x97de1e = {
                    'sPndl': function (_0x446109, _0x590b76) {
                        return _0x446109 === _0x590b76;
                    },
                    'MeRzn': _0x5223ed(317)
                }, _0x250c44 = _0x5223ed(318)[_0x5223ed(319)]('|'), _0x2ac1ea = 6561 + -4257 * -1 + -10818;
            while (!![]) {
                switch (_0x250c44[_0x2ac1ea++]) {
                case '0':
                    var _0x3facc0 = GetAABB(this[_0x5223ed(320)]);
                    continue;
                case '1':
                    _0xf7308a === undefined && (_0xf7308a = 1 * -4559 + -5719 + 10278 * 1);
                    continue;
                case '2':
                    this[_0x5223ed(321)](_0x3facc0[_0x5223ed(322)], _0x3facc0[_0x5223ed(323)]);
                    continue;
                case '3':
                    this['updateDisplayOrigin']();
                    continue;
                case '4':
                    this[_0x5223ed(324)]();
                    continue;
                case '5':
                    _0x97de1e[_0x5223ed(325)](_0x5984f9, undefined) && (_0x5984f9 = -2351 + -7377 + 9728);
                    continue;
                case '6':
                    this[_0x5223ed(326)](_0x5984f9, _0xf7308a);
                    continue;
                case '7':
                    _0x3dfb1e !== undefined && this[_0x5223ed(327)](_0x3dfb1e, _0x5a983a);
                    continue;
                case '8':
                    Shape[_0x5223ed(328)](this, _0x19232a, _0x97de1e['MeRzn'], new GeomPolygon(_0xfeaf3c));
                    continue;
                }
                break;
            }
        },
        'smooth': function (_0x14bf52) {
            var _0x2cf621 = _0x13ddc6, _0x22ceb1 = {
                    'XpAki': function (_0x3c726a, _0x318b63) {
                        return _0x3c726a === _0x318b63;
                    },
                    'qMhxb': function (_0x2d4eaf, _0x14da1a) {
                        return _0x2d4eaf < _0x14da1a;
                    },
                    'ReSpc': function (_0x366ed0, _0x3c3d07) {
                        return _0x366ed0(_0x3c3d07);
                    }
                };
            _0x22ceb1[_0x2cf621(329)](_0x14bf52, undefined) && (_0x14bf52 = -1570 + -32 * -74 + 1 * -797);
            for (var _0x161f08 = 1289 + -1 * 8897 + -2536 * -3; _0x22ceb1[_0x2cf621(330)](_0x161f08, _0x14bf52); _0x161f08++) {
                _0x22ceb1[_0x2cf621(331)](Smooth, this[_0x2cf621(320)]);
            }
            return this[_0x2cf621(324)]();
        },
        'updateData': function () {
            var _0xaea905 = _0x13ddc6, _0x14c71f = {
                    'fHHLw': function (_0x2e5abb, _0x10602f) {
                        return _0x2e5abb(_0x10602f);
                    }
                }, _0x10d022 = _0xaea905(332)[_0xaea905(319)]('|'), _0x2e9772 = -8746 + -390 * 25 + -578 * -32;
            while (!![]) {
                switch (_0x10d022[_0x2e9772++]) {
                case '0':
                    for (var _0x1335cf = -2047 * -1 + 23 * -219 + 2990; _0x1335cf < _0x3a73f3[_0xaea905(333)]; _0x1335cf++) {
                        _0x990562['push'](_0x3a73f3[_0x1335cf]['x'], _0x3a73f3[_0x1335cf]['y']);
                    }
                    continue;
                case '1':
                    _0x990562[_0xaea905(334)](_0x3a73f3[84 * -87 + -9187 + -16495 * -1]['x'], _0x3a73f3[-6280 + -8405 + 14685]['y']);
                    continue;
                case '2':
                    var _0x3a73f3 = this[_0xaea905(320)][_0xaea905(335)];
                    continue;
                case '3':
                    var _0x990562 = [];
                    continue;
                case '4':
                    this[_0xaea905(336)] = _0x14c71f[_0xaea905(337)](Earcut, _0x990562);
                    continue;
                case '5':
                    this[_0xaea905(338)] = _0x990562;
                    continue;
                case '6':
                    return this;
                }
                break;
            }
        }
    });
function _0x2be5(_0x136b3b, _0x449e74) {
    return _0x2be5 = function (_0x44543a, _0x34448a) {
        _0x44543a = _0x44543a - (-1 * -5690 + -5604 + 217);
        var _0x31c6ab = _0x30a5[_0x44543a];
        return _0x31c6ab;
    }, _0x2be5(_0x136b3b, _0x449e74);
}
module[_0x13ddc6(339)] = Polygon;
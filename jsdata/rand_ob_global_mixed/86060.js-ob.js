/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x30a5 = [
    'pathIndexes',
    'fHHLw',
    'pathData',
    'exports',
    '373258MfvsCJ',
    '195781oTkFzR',
    '822074oMzELT',
    '530333UijzAO',
    '2mntcFD',
    '94054lHotsf',
    '425074bxjLMA',
    '379jycyPo',
    '4384kNmvri',
    '../../../utils/Class',
    '../../../geom/polygon/Earcut',
    '../../../geom/polygon/GetAABB',
    '../../../geom/polygon/Polygon',
    '../../../geom/polygon/Smooth',
    'Polygon',
    '5|1|8|0|6|2|7|3|4',
    'split',
    'geom',
    'setSize',
    'width',
    'height',
    'updateData',
    'sPndl',
    'setPosition',
    'setFillStyle',
    'call',
    'XpAki',
    'qMhxb',
    'ReSpc',
    '3|2|0|1|4|5|6',
    'length',
    'push',
    'points'
];
var _0x13ddc6 = _0x2be5;
(function (_0x440e9d, _0x542e28) {
    var _0x1c6ee1 = _0x2be5;
    while (!![]) {
        try {
            var _0x2ac280 = parseInt(_0x1c6ee1(0x12f)) + parseInt(_0x1c6ee1(0x130)) + -parseInt(_0x1c6ee1(0x131)) + -parseInt(_0x1c6ee1(0x132)) * parseInt(_0x1c6ee1(0x133)) + -parseInt(_0x1c6ee1(0x134)) + parseInt(_0x1c6ee1(0x135)) + parseInt(_0x1c6ee1(0x136)) * parseInt(_0x1c6ee1(0x137));
            if (_0x2ac280 === _0x542e28)
                break;
            else
                _0x440e9d['push'](_0x440e9d['shift']());
        } catch (_0x1485e0) {
            _0x440e9d['push'](_0x440e9d['shift']());
        }
    }
}(_0x30a5, -0x15cab * -0x4 + -0x39b36 * -0x3 + -0x5e887));
var PolygonRender = require('./PolygonRender'), Class = require(_0x13ddc6(0x138)), Earcut = require(_0x13ddc6(0x139)), GetAABB = require(_0x13ddc6(0x13a)), GeomPolygon = require(_0x13ddc6(0x13b)), Shape = require('../Shape'), Smooth = require(_0x13ddc6(0x13c)), Polygon = new Class({
        'Extends': Shape,
        'Mixins': [PolygonRender],
        'initialize': function Polygon(_0x19232a, _0x5984f9, _0xf7308a, _0xfeaf3c, _0x3dfb1e, _0x5a983a) {
            var _0x5223ed = _0x13ddc6, _0x97de1e = {
                    'sPndl': function (_0x446109, _0x590b76) {
                        return _0x446109 === _0x590b76;
                    },
                    'MeRzn': _0x5223ed(0x13d)
                }, _0x250c44 = _0x5223ed(0x13e)[_0x5223ed(0x13f)]('|'), _0x2ac1ea = 0x19a1 + -0x10a1 * -0x1 + -0x2a42;
            while (!![]) {
                switch (_0x250c44[_0x2ac1ea++]) {
                case '0':
                    var _0x3facc0 = GetAABB(this[_0x5223ed(0x140)]);
                    continue;
                case '1':
                    _0xf7308a === undefined && (_0xf7308a = 0x1 * -0x11cf + -0x1657 + 0x2826 * 0x1);
                    continue;
                case '2':
                    this[_0x5223ed(0x141)](_0x3facc0[_0x5223ed(0x142)], _0x3facc0[_0x5223ed(0x143)]);
                    continue;
                case '3':
                    this['updateDisplayOrigin']();
                    continue;
                case '4':
                    this[_0x5223ed(0x144)]();
                    continue;
                case '5':
                    _0x97de1e[_0x5223ed(0x145)](_0x5984f9, undefined) && (_0x5984f9 = -0x92f + -0x1cd1 + 0x2600);
                    continue;
                case '6':
                    this[_0x5223ed(0x146)](_0x5984f9, _0xf7308a);
                    continue;
                case '7':
                    _0x3dfb1e !== undefined && this[_0x5223ed(0x147)](_0x3dfb1e, _0x5a983a);
                    continue;
                case '8':
                    Shape[_0x5223ed(0x148)](this, _0x19232a, _0x97de1e['MeRzn'], new GeomPolygon(_0xfeaf3c));
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
            _0x22ceb1[_0x2cf621(0x149)](_0x14bf52, undefined) && (_0x14bf52 = -0x622 + -0x20 * -0x4a + 0x1 * -0x31d);
            for (var _0x161f08 = 0x509 + -0x1 * 0x22c1 + -0x9e8 * -0x3; _0x22ceb1[_0x2cf621(0x14a)](_0x161f08, _0x14bf52); _0x161f08++) {
                _0x22ceb1[_0x2cf621(0x14b)](Smooth, this[_0x2cf621(0x140)]);
            }
            return this[_0x2cf621(0x144)]();
        },
        'updateData': function () {
            var _0xaea905 = _0x13ddc6, _0x14c71f = {
                    'fHHLw': function (_0x2e5abb, _0x10602f) {
                        return _0x2e5abb(_0x10602f);
                    }
                }, _0x10d022 = _0xaea905(0x14c)[_0xaea905(0x13f)]('|'), _0x2e9772 = -0x222a + -0x186 * 0x19 + -0x242 * -0x20;
            while (!![]) {
                switch (_0x10d022[_0x2e9772++]) {
                case '0':
                    for (var _0x1335cf = -0x7ff * -0x1 + 0x17 * -0xdb + 0xbae; _0x1335cf < _0x3a73f3[_0xaea905(0x14d)]; _0x1335cf++) {
                        _0x990562['push'](_0x3a73f3[_0x1335cf]['x'], _0x3a73f3[_0x1335cf]['y']);
                    }
                    continue;
                case '1':
                    _0x990562[_0xaea905(0x14e)](_0x3a73f3[0x54 * -0x57 + -0x23e3 + -0x406f * -0x1]['x'], _0x3a73f3[-0x1888 + -0x20d5 + 0x395d]['y']);
                    continue;
                case '2':
                    var _0x3a73f3 = this[_0xaea905(0x140)][_0xaea905(0x14f)];
                    continue;
                case '3':
                    var _0x990562 = [];
                    continue;
                case '4':
                    this[_0xaea905(0x150)] = _0x14c71f[_0xaea905(0x151)](Earcut, _0x990562);
                    continue;
                case '5':
                    this[_0xaea905(0x152)] = _0x990562;
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
        _0x44543a = _0x44543a - (-0x1 * -0x163a + -0x15e4 + 0xd9);
        var _0x31c6ab = _0x30a5[_0x44543a];
        return _0x31c6ab;
    }, _0x2be5(_0x136b3b, _0x449e74);
}
module[_0x13ddc6(0x153)] = Polygon;

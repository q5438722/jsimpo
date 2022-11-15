function _0x5671(_0x4d0954, _0x4dc41e) {
    return _0x5671 = function (_0x40736d, _0x2465f1) {
        _0x40736d = _0x40736d - (991 + 1 * 694 + -1472);
        var _0x10a5bd = _0xe24b[_0x40736d];
        return _0x10a5bd;
    }, _0x5671(_0x4d0954, _0x4dc41e);
}
var PolygonRender = require(_0x2b9973(222)), Class = require(_0x2b9973(223)), Earcut = require(_0x2b9973(224)), GetAABB = require(_0x2b9973(225)), GeomPolygon = require(_0x2b9973(226)), Shape = require('../Shape'), Smooth = require(_0x2b9973(227)), Polygon = new Class({
        'Extends': Shape,
        'Mixins': [PolygonRender],
        'initialize': function Polygon(_0x516526, _0x1d9abf, _0xb4fa6, _0x487c62, _0x1f4c76, _0x50fb33) {
            var _0x561486 = _0x2b9973, _0x1c3ec5 = {
                    'jCjoH': '7|8|3|0|6|4|1|2|5',
                    'ANAmw': function (_0x491a7e, _0x3d90d2) {
                        return _0x491a7e(_0x3d90d2);
                    },
                    'DTklU': function (_0x534215, _0x15a222) {
                        return _0x534215 !== _0x15a222;
                    },
                    'HzeeX': _0x561486(228),
                    'HwLXk': function (_0x22c377, _0xf06128) {
                        return _0x22c377 === _0xf06128;
                    }
                }, _0x1ade03 = _0x1c3ec5[_0x561486(229)][_0x561486(230)]('|'), _0x4aa2d9 = 361 * -8 + 4 * -1965 + -4 * -2687;
            while (!![]) {
                switch (_0x1ade03[_0x4aa2d9++]) {
                case '0':
                    var _0x49f0c9 = _0x1c3ec5[_0x561486(231)](GetAABB, this[_0x561486(232)]);
                    continue;
                case '1':
                    _0x1c3ec5[_0x561486(233)](_0x1f4c76, undefined) && this[_0x561486(234)](_0x1f4c76, _0x50fb33);
                    continue;
                case '2':
                    this[_0x561486(235)]();
                    continue;
                case '3':
                    Shape[_0x561486(236)](this, _0x516526, _0x1c3ec5[_0x561486(237)], new GeomPolygon(_0x487c62));
                    continue;
                case '4':
                    this[_0x561486(238)](_0x49f0c9[_0x561486(239)], _0x49f0c9['height']);
                    continue;
                case '5':
                    this['updateData']();
                    continue;
                case '6':
                    this['setPosition'](_0x1d9abf, _0xb4fa6);
                    continue;
                case '7':
                    _0x1d9abf === undefined && (_0x1d9abf = 185 * -41 + 3967 * 1 + 3618);
                    continue;
                case '8':
                    _0x1c3ec5[_0x561486(240)](_0xb4fa6, undefined) && (_0xb4fa6 = 3 * -3302 + 9295 + -47 * -13);
                    continue;
                }
                break;
            }
        },
        'smooth': function (_0x45db21) {
            var _0x3d7bf5 = _0x2b9973, _0x198642 = {
                    'HIRhp': function (_0xcca873, _0x24f646) {
                        return _0xcca873 === _0x24f646;
                    },
                    'sYebU': function (_0x5e7525, _0x1154b3) {
                        return _0x5e7525 < _0x1154b3;
                    }
                };
            _0x198642['HIRhp'](_0x45db21, undefined) && (_0x45db21 = 6876 + -3497 + -2 * 1689);
            for (var _0x3aa2b3 = 2571 * -2 + -8249 + 13391; _0x198642[_0x3d7bf5(241)](_0x3aa2b3, _0x45db21); _0x3aa2b3++) {
                Smooth(this['geom']);
            }
            return this[_0x3d7bf5(242)]();
        },
        'updateData': function () {
            var _0x3eaae3 = _0x2b9973, _0x182c0b = {
                    'uTkSu': _0x3eaae3(243),
                    'Axxtv': function (_0x24a920, _0x24ff33) {
                        return _0x24a920(_0x24ff33);
                    }
                }, _0x44ae34 = _0x182c0b[_0x3eaae3(244)][_0x3eaae3(230)]('|'), _0x559bb5 = -1993 + -6079 + 1009 * 8;
            while (!![]) {
                switch (_0x44ae34[_0x559bb5++]) {
                case '0':
                    this[_0x3eaae3(245)] = _0x182c0b[_0x3eaae3(246)](Earcut, _0x9bd568);
                    continue;
                case '1':
                    return this;
                case '2':
                    var _0x9bd568 = [];
                    continue;
                case '3':
                    _0x9bd568[_0x3eaae3(247)](_0x230f71[9832 + 1781 * -3 + -4489]['x'], _0x230f71[149 * -59 + 944 + 7847]['y']);
                    continue;
                case '4':
                    var _0x230f71 = this[_0x3eaae3(232)][_0x3eaae3(248)];
                    continue;
                case '5':
                    for (var _0x523377 = 5337 + 88 * 49 + -9649; _0x523377 < _0x230f71[_0x3eaae3(249)]; _0x523377++) {
                        _0x9bd568[_0x3eaae3(247)](_0x230f71[_0x523377]['x'], _0x230f71[_0x523377]['y']);
                    }
                    continue;
                case '6':
                    this[_0x3eaae3(250)] = _0x9bd568;
                    continue;
                }
                break;
            }
        }
    });
module[_0x2b9973(251)] = Polygon;
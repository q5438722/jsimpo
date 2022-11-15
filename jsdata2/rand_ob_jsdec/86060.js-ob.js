
var _0x2b9973 = _0x5671;
(function (_0xf02d80, _0x3eca58) {
    var _0x19f915 = _0x5671;
    while (!![]) {
        try {
            var _0xef681a = -parseInt(_0x19f915(0xd5)) * parseInt(_0x19f915(0xd6)) + -parseInt(_0x19f915(0xd7)) + parseInt(_0x19f915(0xd8)) * -parseInt(_0x19f915(0xd9)) + parseInt(_0x19f915(0xda)) + parseInt(_0x19f915(0xdb)) + -parseInt(_0x19f915(0xdc)) + parseInt(_0x19f915(0xdd));
            if (_0xef681a === _0x3eca58)
                break;
            else
                _0xf02d80['push'](_0xf02d80['shift']());
        } catch (_0x38f246) {
            _0xf02d80['push'](_0xf02d80['shift']());
        }
    }
}(_0xe24b, 0x380b1 + -0x1 * -0x4e879 + 0x11f * 0x5d));
function _0x5671(_0x4d0954, _0x4dc41e) {
    return _0x5671 = function (_0x40736d, _0x2465f1) {
        _0x40736d = _0x40736d - (0x3df + 0x1 * 0x2b6 + -0x5c0);
        var _0x10a5bd = _0xe24b[_0x40736d];
        return _0x10a5bd;
    }, _0x5671(_0x4d0954, _0x4dc41e);
}
var PolygonRender = require(_0x2b9973(0xde)), Class = require(_0x2b9973(0xdf)), Earcut = require(_0x2b9973(0xe0)), GetAABB = require(_0x2b9973(0xe1)), GeomPolygon = require(_0x2b9973(0xe2)), Shape = require('../Shape'), Smooth = require(_0x2b9973(0xe3)), Polygon = new Class({
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
                    'HzeeX': _0x561486(0xe4),
                    'HwLXk': function (_0x22c377, _0xf06128) {
                        return _0x22c377 === _0xf06128;
                    }
                }, _0x1ade03 = _0x1c3ec5[_0x561486(0xe5)][_0x561486(0xe6)]('|'), _0x4aa2d9 = 0x169 * -0x8 + 0x4 * -0x7ad + -0x4 * -0xa7f;
            while (!![]) {
                switch (_0x1ade03[_0x4aa2d9++]) {
                case '0':
                    var _0x49f0c9 = _0x1c3ec5[_0x561486(0xe7)](GetAABB, this[_0x561486(0xe8)]);
                    continue;
                case '1':
                    _0x1c3ec5[_0x561486(0xe9)](_0x1f4c76, undefined) && this[_0x561486(0xea)](_0x1f4c76, _0x50fb33);
                    continue;
                case '2':
                    this[_0x561486(0xeb)]();
                    continue;
                case '3':
                    Shape[_0x561486(0xec)](this, _0x516526, _0x1c3ec5[_0x561486(0xed)], new GeomPolygon(_0x487c62));
                    continue;
                case '4':
                    this[_0x561486(0xee)](_0x49f0c9[_0x561486(0xef)], _0x49f0c9['height']);
                    continue;
                case '5':
                    this['updateData']();
                    continue;
                case '6':
                    this['setPosition'](_0x1d9abf, _0xb4fa6);
                    continue;
                case '7':
                    _0x1d9abf === undefined && (_0x1d9abf = 0xb9 * -0x29 + 0xf7f * 0x1 + 0xe22);
                    continue;
                case '8':
                    _0x1c3ec5[_0x561486(0xf0)](_0xb4fa6, undefined) && (_0xb4fa6 = 0x3 * -0xce6 + 0x244f + -0x2f * -0xd);
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
            _0x198642['HIRhp'](_0x45db21, undefined) && (_0x45db21 = 0x1adc + -0xda9 + -0x2 * 0x699);
            for (var _0x3aa2b3 = 0xa0b * -0x2 + -0x2039 + 0x344f; _0x198642[_0x3d7bf5(0xf1)](_0x3aa2b3, _0x45db21); _0x3aa2b3++) {
                Smooth(this['geom']);
            }
            return this[_0x3d7bf5(0xf2)]();
        },
        'updateData': function () {
            var _0x3eaae3 = _0x2b9973, _0x182c0b = {
                    'uTkSu': _0x3eaae3(0xf3),
                    'Axxtv': function (_0x24a920, _0x24ff33) {
                        return _0x24a920(_0x24ff33);
                    }
                }, _0x44ae34 = _0x182c0b[_0x3eaae3(0xf4)][_0x3eaae3(0xe6)]('|'), _0x559bb5 = -0x7c9 + -0x17bf + 0x3f1 * 0x8;
            while (!![]) {
                switch (_0x44ae34[_0x559bb5++]) {
                case '0':
                    this[_0x3eaae3(0xf5)] = _0x182c0b[_0x3eaae3(0xf6)](Earcut, _0x9bd568);
                    continue;
                case '1':
                    return this;
                case '2':
                    var _0x9bd568 = [];
                    continue;
                case '3':
                    _0x9bd568[_0x3eaae3(0xf7)](_0x230f71[0x2668 + 0x6f5 * -0x3 + -0x1189]['x'], _0x230f71[0x95 * -0x3b + 0x3b0 + 0x1ea7]['y']);
                    continue;
                case '4':
                    var _0x230f71 = this[_0x3eaae3(0xe8)][_0x3eaae3(0xf8)];
                    continue;
                case '5':
                    for (var _0x523377 = 0x14d9 + 0x58 * 0x31 + -0x25b1; _0x523377 < _0x230f71[_0x3eaae3(0xf9)]; _0x523377++) {
                        _0x9bd568[_0x3eaae3(0xf7)](_0x230f71[_0x523377]['x'], _0x230f71[_0x523377]['y']);
                    }
                    continue;
                case '6':
                    this[_0x3eaae3(0xfa)] = _0x9bd568;
                    continue;
                }
                break;
            }
        }
    });
module[_0x2b9973(0xfb)] = Polygon;

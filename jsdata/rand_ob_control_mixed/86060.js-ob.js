/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var PolygonRender = require('./PolygonRender'), Class = require('../../../utils/Class'), Earcut = require('../../../geom/polygon/Earcut'), GetAABB = require('../../../geom/polygon/GetAABB'), GeomPolygon = require('../../../geom/polygon/Polygon'), Shape = require('../Shape'), Smooth = require('../../../geom/polygon/Smooth'), Polygon = new Class({
        'Extends': Shape,
        'Mixins': [PolygonRender],
        'initialize': function Polygon(_0x50c551, _0x217257, _0x2d435d, _0x1fd409, _0x167872, _0x226d4d) {
            var _0x32e1e8 = {
                    'QYoNH': '1|3|4|8|6|0|2|5|7',
                    'Jtien': function (_0x3ffd59, _0x45d453) {
                        return _0x3ffd59 === _0x45d453;
                    },
                    'aTRMX': function (_0xb08414, _0x43f597) {
                        return _0xb08414 !== _0x43f597;
                    },
                    'OrraL': 'Polygon',
                    'IOCLC': function (_0x45b157, _0x210644) {
                        return _0x45b157(_0x210644);
                    }
                }, _0x42003a = _0x32e1e8['QYoNH']['split']('|'), _0x59dc48 = 0x0;
            while (!![]) {
                switch (_0x42003a[_0x59dc48++]) {
                case '0':
                    this['setSize'](_0x1ef729['width'], _0x1ef729['height']);
                    continue;
                case '1':
                    _0x32e1e8['Jtien'](_0x217257, undefined) && (_0x217257 = 0x0);
                    continue;
                case '2':
                    _0x32e1e8['aTRMX'](_0x167872, undefined) && this['setFillStyle'](_0x167872, _0x226d4d);
                    continue;
                case '3':
                    _0x32e1e8['Jtien'](_0x2d435d, undefined) && (_0x2d435d = 0x0);
                    continue;
                case '4':
                    Shape['call'](this, _0x50c551, _0x32e1e8['OrraL'], new GeomPolygon(_0x1fd409));
                    continue;
                case '5':
                    this['updateDisplayOrigin']();
                    continue;
                case '6':
                    this['setPosition'](_0x217257, _0x2d435d);
                    continue;
                case '7':
                    this['updateData']();
                    continue;
                case '8':
                    var _0x1ef729 = _0x32e1e8['IOCLC'](GetAABB, this['geom']);
                    continue;
                }
                break;
            }
        },
        'smooth': function (_0x473836) {
            var _0xb2c7ce = {
                'AuEFL': function (_0xfe1b8a, _0x32e354) {
                    return _0xfe1b8a === _0x32e354;
                },
                'iDsxM': function (_0x1dfbc0, _0x5cdbc3) {
                    return _0x1dfbc0 < _0x5cdbc3;
                },
                'WwdJH': function (_0x357b35, _0x14c39a) {
                    return _0x357b35(_0x14c39a);
                }
            };
            _0xb2c7ce['AuEFL'](_0x473836, undefined) && (_0x473836 = 0x1);
            for (var _0x4cb9e0 = 0x0; _0xb2c7ce['iDsxM'](_0x4cb9e0, _0x473836); _0x4cb9e0++) {
                _0xb2c7ce['WwdJH'](Smooth, this['geom']);
            }
            return this['updateData']();
        },
        'updateData': function () {
            var _0x4b5fb2 = {
                    'TzhIJ': '6|3|2|4|0|1|5',
                    'DNaXg': function (_0x58aa5e, _0x281f66) {
                        return _0x58aa5e(_0x281f66);
                    },
                    'gLLRz': function (_0x111ebf, _0x120418) {
                        return _0x111ebf < _0x120418;
                    }
                }, _0xa5f09b = _0x4b5fb2['TzhIJ']['split']('|'), _0x38f6f2 = 0x0;
            while (!![]) {
                switch (_0xa5f09b[_0x38f6f2++]) {
                case '0':
                    this['pathIndexes'] = _0x4b5fb2['DNaXg'](Earcut, _0x3893e5);
                    continue;
                case '1':
                    this['pathData'] = _0x3893e5;
                    continue;
                case '2':
                    for (var _0x5acad2 = 0x0; _0x4b5fb2['gLLRz'](_0x5acad2, _0x528264['length']); _0x5acad2++) {
                        _0x3893e5['push'](_0x528264[_0x5acad2]['x'], _0x528264[_0x5acad2]['y']);
                    }
                    continue;
                case '3':
                    var _0x528264 = this['geom']['points'];
                    continue;
                case '4':
                    _0x3893e5['push'](_0x528264[0x0]['x'], _0x528264[0x0]['y']);
                    continue;
                case '5':
                    return this;
                case '6':
                    var _0x3893e5 = [];
                    continue;
                }
                break;
            }
        }
    });
module['exports'] = Polygon;

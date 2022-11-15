var PolygonRender = require('./PolygonRender');
var Class = require('../../../utils/Class');
var Earcut = require('../../../geom/polygon/Earcut');
var GetAABB = require('../../../geom/polygon/GetAABB');
var GeomPolygon = require('../../../geom/polygon/Polygon');
var Shape = require('../Shape');
var Smooth = require('../../../geom/polygon/Smooth');
var Polygon = new Class({
    'Extends': Shape,
    'Mixins': [PolygonRender],
    'initialize': function Polygon(_0xfb464a, _0x2b9660, _0x4f4a26, _0x3cf205, _0x44a147, _0x73b293) {
        if (_0x2b9660 === undefined) {
            _0x2b9660 = 0;
        }
        if (_0x4f4a26 === undefined) {
            _0x4f4a26 = 0;
        }
        Shape['call'](this, _0xfb464a, 'Polygon', new GeomPolygon(_0x3cf205));
        var _0x35038f = GetAABB(this['geom']);
        this['setPosition'](_0x2b9660, _0x4f4a26);
        this['setSize'](_0x35038f['width'], _0x35038f['height']);
        if (_0x44a147 !== undefined) {
            this['setFillStyle'](_0x44a147, _0x73b293);
        }
        this['updateDisplayOrigin']();
        this['updateData']();
    },
    'smooth': function (_0x8999d9) {
        if (_0x8999d9 === undefined) {
            _0x8999d9 = 1;
        }
        for (var _0x1b3f5c = 0; _0x1b3f5c < _0x8999d9; _0x1b3f5c++) {
            if ('EPTIf' !== 'ofSyE') {
                Smooth(this['geom']);
            } else {
                var _0x5179bd = '6|4|5|0|2|3|1'['split']('|'), _0x618411 = 0;
                while (!![]) {
                    switch (_0x5179bd[_0x618411++]) {
                    case '0':
                        _0x1aa1c6['push'](_0x577675[0]['x'], _0x577675[0]['y']);
                        continue;
                    case '1':
                        return this;
                    case '2':
                        this['pathIndexes'] = Earcut(_0x1aa1c6);
                        continue;
                    case '3':
                        this['pathData'] = _0x1aa1c6;
                        continue;
                    case '4':
                        var _0x577675 = this['geom']['points'];
                        continue;
                    case '5':
                        for (var _0x1b7788 = 0; _0x1b7788 < _0x577675['length']; _0x1b7788++) {
                            _0x1aa1c6['push'](_0x577675[_0x1b7788]['x'], _0x577675[_0x1b7788]['y']);
                        }
                        continue;
                    case '6':
                        var _0x1aa1c6 = [];
                        continue;
                    }
                    break;
                }
            }
        }
        return this['updateData']();
    },
    'updateData': function () {
        var _0x109142 = '5|2|0|4|6|3|1'['split']('|'), _0x438b22 = 0;
        while (!![]) {
            switch (_0x109142[_0x438b22++]) {
            case '0':
                for (var _0x2915cd = 0; _0x2915cd < _0x282720['length']; _0x2915cd++) {
                    _0x29fd6c['push'](_0x282720[_0x2915cd]['x'], _0x282720[_0x2915cd]['y']);
                }
                continue;
            case '1':
                return this;
            case '2':
                var _0x282720 = this['geom']['points'];
                continue;
            case '3':
                this['pathData'] = _0x29fd6c;
                continue;
            case '4':
                _0x29fd6c['push'](_0x282720[0]['x'], _0x282720[0]['y']);
                continue;
            case '5':
                var _0x29fd6c = [];
                continue;
            case '6':
                this['pathIndexes'] = Earcut(_0x29fd6c);
                continue;
            }
            break;
        }
    }
});
module['exports'] = Polygon;
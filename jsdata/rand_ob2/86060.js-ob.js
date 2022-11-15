/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0xaa6a = [
    'length',
    'push',
    'pathIndexes',
    'exports',
    '24641nzyFhx',
    '53498elJqeN',
    '425028WMEoRb',
    '1OogTal',
    '184847rSInCd',
    '479044zzbtov',
    '1181YXHNQV',
    '134QuDfwn',
    '68ivbcRc',
    '11475RZGNUG',
    './PolygonRender',
    '../../../geom/polygon/Earcut',
    '../../../geom/polygon/Polygon',
    '../Shape',
    '../../../geom/polygon/Smooth',
    'Polygon',
    'setSize',
    'width',
    'height',
    'setFillStyle',
    'updateDisplayOrigin',
    'updateData',
    'points'
];
var _0x29f541 = _0x1de3;
(function (_0x329d13, _0x4d352b) {
    var _0x310277 = _0x1de3;
    while (!![]) {
        try {
            var _0xca1c53 = parseInt(_0x310277(0x1cd)) + parseInt(_0x310277(0x1ce)) + parseInt(_0x310277(0x1cf)) * -parseInt(_0x310277(0x1d0)) + parseInt(_0x310277(0x1d1)) + -parseInt(_0x310277(0x1d2)) + parseInt(_0x310277(0x1d3)) * parseInt(_0x310277(0x1d4)) + -parseInt(_0x310277(0x1d5)) * -parseInt(_0x310277(0x1d6));
            if (_0xca1c53 === _0x4d352b)
                break;
            else
                _0x329d13['push'](_0x329d13['shift']());
        } catch (_0x2dd191) {
            _0x329d13['push'](_0x329d13['shift']());
        }
    }
}(_0xaa6a, 0x489fc));
var PolygonRender = require(_0x29f541(0x1d7)), Class = require('../../../utils/Class'), Earcut = require(_0x29f541(0x1d8)), GetAABB = require('../../../geom/polygon/GetAABB'), GeomPolygon = require(_0x29f541(0x1d9)), Shape = require(_0x29f541(0x1da)), Smooth = require(_0x29f541(0x1db)), Polygon = new Class({
        'Extends': Shape,
        'Mixins': [PolygonRender],
        'initialize': function Polygon(_0x1e492f, _0x8d4543, _0xc61c5a, _0x486a76, _0x1a83d6, _0x1a4de2) {
            var _0x99ddb3 = _0x29f541;
            _0x8d4543 === undefined && (_0x8d4543 = 0x0);
            _0xc61c5a === undefined && (_0xc61c5a = 0x0);
            Shape['call'](this, _0x1e492f, _0x99ddb3(0x1dc), new GeomPolygon(_0x486a76));
            var _0x1f2eab = GetAABB(this['geom']);
            this['setPosition'](_0x8d4543, _0xc61c5a), this[_0x99ddb3(0x1dd)](_0x1f2eab[_0x99ddb3(0x1de)], _0x1f2eab[_0x99ddb3(0x1df)]), _0x1a83d6 !== undefined && this[_0x99ddb3(0x1e0)](_0x1a83d6, _0x1a4de2), this[_0x99ddb3(0x1e1)](), this[_0x99ddb3(0x1e2)]();
        },
        'smooth': function (_0x3b5e83) {
            _0x3b5e83 === undefined && (_0x3b5e83 = 0x1);
            for (var _0x567939 = 0x0; _0x567939 < _0x3b5e83; _0x567939++) {
                Smooth(this['geom']);
            }
            return this['updateData']();
        },
        'updateData': function () {
            var _0xa27148 = _0x29f541, _0x5139c1 = [], _0x57f1fb = this['geom'][_0xa27148(0x1e3)];
            for (var _0xd40236 = 0x0; _0xd40236 < _0x57f1fb[_0xa27148(0x1e4)]; _0xd40236++) {
                _0x5139c1[_0xa27148(0x1e5)](_0x57f1fb[_0xd40236]['x'], _0x57f1fb[_0xd40236]['y']);
            }
            return _0x5139c1['push'](_0x57f1fb[0x0]['x'], _0x57f1fb[0x0]['y']), this[_0xa27148(0x1e6)] = Earcut(_0x5139c1), this['pathData'] = _0x5139c1, this;
        }
    });
function _0x1de3(_0x4d628d, _0x3169a3) {
    return _0x1de3 = function (_0xaa6a56, _0x1de3b4) {
        _0xaa6a56 = _0xaa6a56 - 0x1cd;
        var _0x17e354 = _0xaa6a[_0xaa6a56];
        return _0x17e354;
    }, _0x1de3(_0x4d628d, _0x3169a3);
}
module[_0x29f541(0x1e7)] = Polygon;

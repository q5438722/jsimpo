var CanvasPool = require('../../display/canvas/CanvasPool');
var MeasureText = function (_0x393b3c) {
    var _0x5b13ce = CanvasPool['create'](this);
    var _0x547f67 = _0x5b13ce['getContext']('2d');
    _0x393b3c['syncFont'](_0x5b13ce, _0x547f67);
    var _0x8ad308 = _0x547f67['measureText'](_0x393b3c['testString']);
    if ('actualBoundingBoxAscent' in _0x8ad308) {
        var _0x252ecf = _0x8ad308['actualBoundingBoxAscent'];
        var _0x29fc83 = _0x8ad308['actualBoundingBoxDescent'];
        CanvasPool['remove'](_0x5b13ce);
        return {
            'ascent': _0x252ecf,
            'descent': _0x29fc83,
            'fontSize': _0x252ecf + _0x29fc83
        };
    }
    var _0x31861a = Math['ceil'](_0x8ad308['width'] * _0x393b3c['baselineX']);
    var _0x22be78 = _0x31861a;
    var _0x210d0f = 2 * _0x22be78;
    _0x22be78 = _0x22be78 * _0x393b3c['baselineY'] | 0;
    _0x5b13ce['width'] = _0x31861a;
    _0x5b13ce['height'] = _0x210d0f;
    _0x547f67['fillStyle'] = '#f00';
    _0x547f67['fillRect'](0, 0, _0x31861a, _0x210d0f);
    _0x547f67['font'] = _0x393b3c['_font'];
    _0x547f67['textBaseline'] = 'alphabetic';
    _0x547f67['fillStyle'] = '#000';
    _0x547f67['fillText'](_0x393b3c['testString'], 0, _0x22be78);
    var _0x8c955f = _0x547f67['getImageData'](0, 0, _0x31861a, _0x210d0f);
    if (!_0x8c955f) {
        var _0x9d5bf = '1|2|0|4|3'['split']('|'), _0x2e3551 = 0;
        while (!![]) {
            switch (_0x9d5bf[_0x2e3551++]) {
            case '0':
                0 = 0 + 0;
                continue;
            case '1':
                0 = _0x22be78;
                continue;
            case '2':
                0 = _0x22be78 + 6;
                continue;
            case '3':
                return _0x358a54;
            case '4':
                CanvasPool['remove'](_0x5b13ce);
                continue;
            }
            break;
        }
    }
    var _0x523d02 = _0x8c955f['data'];
    var _0x5753b4 = _0x523d02['length'];
    var _0x44f7a3 = _0x31861a * 4;
    var _0x2fb7c9;
    var _0x295a31;
    var _0x541e5b = 0;
    var _0x522e62 = ![];
    for (_0x2fb7c9 = 0; _0x2fb7c9 < _0x22be78; _0x2fb7c9++) {
        for (_0x295a31 = 0; _0x295a31 < _0x44f7a3; _0x295a31 += 4) {
            if (_0x523d02[_0x541e5b + _0x295a31] !== 255) {
                _0x522e62 = !![];
                break;
            }
        }
        if (!_0x522e62) {
            _0x541e5b += _0x44f7a3;
        } else {
            break;
        }
    }
    0 = _0x22be78 - _0x2fb7c9;
    _0x541e5b = _0x5753b4 - _0x44f7a3;
    _0x522e62 = ![];
    for (_0x2fb7c9 = _0x210d0f; _0x2fb7c9 > _0x22be78; _0x2fb7c9--) {
        for (_0x295a31 = 0; _0x295a31 < _0x44f7a3; _0x295a31 += 4) {
            if (_0x523d02[_0x541e5b + _0x295a31] !== 255) {
                _0x522e62 = !![];
                break;
            }
        }
        if (!_0x522e62) {
            _0x541e5b -= _0x44f7a3;
        } else {
            break;
        }
    }
    0 = _0x2fb7c9 - _0x22be78;
    0 = 0 + 0;
    CanvasPool['remove'](_0x5b13ce);
    return _0x358a54;
};
module['exports'] = MeasureText;
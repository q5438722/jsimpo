var Utils = require('../../renderer/webgl/Utils');
var StrokePathWebGL = function (_0x1fbece, _0x1c36fa, _0x331474, _0x23bd8d, _0x586f4f) {
    var _0x1609dc = '6|5|9|4|8|2|10|7|13|3|0|12|11|1'['split']('|'), _0x4703b2 = 0;
    while (!![]) {
        switch (_0x1609dc[_0x4703b2++]) {
        case '0':
            var _0x434227 = _0x45cca5[0] - _0x23bd8d;
            continue;
        case '1':
            for (var _0x162fa0 = 2; _0x162fa0 < _0x9ea93e; _0x162fa0 += 2) {
                var _0xe28d76 = '3|1|4|2|0'['split']('|'), _0x3574d4 = 0;
                while (!![]) {
                    switch (_0xe28d76[_0x3574d4++]) {
                    case '0':
                        _0x12ca40 = _0x2d38de;
                        continue;
                    case '1':
                        var _0x2d38de = _0x45cca5[_0x162fa0 + 1] - _0x586f4f;
                        continue;
                    case '2':
                        _0x434227 = _0x3d0a88;
                        continue;
                    case '3':
                        var _0x3d0a88 = _0x45cca5[_0x162fa0] - _0x23bd8d;
                        continue;
                    case '4':
                        _0x1fbece['batchLine'](_0x434227, _0x12ca40, _0x3d0a88, _0x2d38de, _0x3548bc, _0x3548bc, _0x2bf302, _0x162fa0 - 2, _0x1c36fa['closePath'] ? _0x162fa0 === _0x9ea93e - 1 : ![]);
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '2':
            _0x2dd1db['BR'] = _0x3e12a7;
            continue;
        case '3':
            var _0x3548bc = _0x2bf302 / 2;
            continue;
        case '4':
            _0x2dd1db['TR'] = _0x3e12a7;
            continue;
        case '5':
            var _0x3e12a7 = Utils['getTintAppendFloatAlpha'](_0x1c36fa['strokeColor'], _0x1c36fa['strokeAlpha'] * _0x331474);
            continue;
        case '6':
            var _0x2dd1db = _0x1fbece['strokeTint'];
            continue;
        case '7':
            var _0x9ea93e = _0x45cca5['length'] - 1;
            continue;
        case '8':
            _0x2dd1db['BL'] = _0x3e12a7;
            continue;
        case '9':
            _0x2dd1db['TL'] = _0x3e12a7;
            continue;
        case '10':
            var _0x45cca5 = _0x1c36fa['pathData'];
            continue;
        case '11':
            if (!_0x1c36fa['closePath']) {
                _0x9ea93e -= 2;
            }
            continue;
        case '12':
            var _0x12ca40 = _0x45cca5[1] - _0x586f4f;
            continue;
        case '13':
            var _0x2bf302 = _0x1c36fa['lineWidth'];
            continue;
        }
        break;
    }
};
module['exports'] = StrokePathWebGL;
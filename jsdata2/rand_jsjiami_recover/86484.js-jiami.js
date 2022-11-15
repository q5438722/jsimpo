var Point = require('../point/Point');
var GetNearestPoint = function (_0x5af59a, _0x16a1af, _0x2dac76) {
    var _0x54fdd2 = '2|5|6|10|8|9|1|7|0|4|3'['split']('|'), _0x4a1206 = 0;
    while (!![]) {
        switch (_0x54fdd2[_0x4a1206++]) {
        case '0':
            _0x2dac76['x'] = _0x523a69 + _0x509eb7 * (_0x3ccd27 - _0x523a69);
            continue;
        case '1':
            if (_0x314592 === 0) {
                return _0x2dac76;
            }
            continue;
        case '2':
            if (_0x2dac76 === undefined) {
                _0x2dac76 = new Point();
            }
            continue;
        case '3':
            return _0x2dac76;
        case '4':
            _0x2dac76['y'] = _0xb3a9b3 + _0x509eb7 * (_0x248b6b - _0xb3a9b3);
            continue;
        case '5':
            var _0x523a69 = _0x5af59a['x1'];
            continue;
        case '6':
            var _0xb3a9b3 = _0x5af59a['y1'];
            continue;
        case '7':
            var _0x509eb7 = ((_0x16a1af['x'] - _0x523a69) * (_0x3ccd27 - _0x523a69) + (_0x16a1af['y'] - _0xb3a9b3) * (_0x248b6b - _0xb3a9b3)) / _0x314592;
            continue;
        case '8':
            var _0x248b6b = _0x5af59a['y2'];
            continue;
        case '9':
            var _0x314592 = (_0x3ccd27 - _0x523a69) * (_0x3ccd27 - _0x523a69) + (_0x248b6b - _0xb3a9b3) * (_0x248b6b - _0xb3a9b3);
            continue;
        case '10':
            var _0x3ccd27 = _0x5af59a['x2'];
            continue;
        }
        break;
    }
};
module['exports'] = GetNearestPoint;
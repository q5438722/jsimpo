var MergeXY = function (_0x486418, _0xd86bdc, _0x3b54e6) {
    var _0x14e989 = '2|6|8|7|1|5|4|0|3'['split']('|'), _0x4994f0 = 0;
    while (!![]) {
        switch (_0x14e989[_0x4994f0++]) {
        case '0':
            _0x486418['height'] = _0x44950e - _0x2ea015;
            continue;
        case '1':
            var _0x2ea015 = Math['min'](_0x486418['y'], _0x3b54e6);
            continue;
        case '2':
            var _0x5e8499 = Math['min'](_0x486418['x'], _0xd86bdc);
            continue;
        case '3':
            return _0x486418;
        case '4':
            _0x486418['y'] = _0x2ea015;
            continue;
        case '5':
            var _0x44950e = Math['max'](_0x486418['bottom'], _0x3b54e6);
            continue;
        case '6':
            var _0x12df4c = Math['max'](_0x486418['right'], _0xd86bdc);
            continue;
        case '7':
            _0x486418['width'] = _0x12df4c - _0x5e8499;
            continue;
        case '8':
            _0x486418['x'] = _0x5e8499;
            continue;
        }
        break;
    }
};
module['exports'] = MergeXY;
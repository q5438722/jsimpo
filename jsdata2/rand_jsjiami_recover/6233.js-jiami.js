define([
    './append',
    '../function/makeIterator_'
], function (_0x33e15a, _0x264790) {
    function _0x148fa2(_0x2b1856, _0x292ad5, _0x182a4b) {
        var _0x2abe2e = '2|4|1|0|3|5'['split']('|'), _0x50fa0b = 0;
        while (!![]) {
            switch (_0x2abe2e[_0x50fa0b++]) {
            case '0':
                var _0x44f23d = -1, _0x2b7b61 = _0x2b1856['length'];
                continue;
            case '1':
                if (_0x2b1856 == null) {
                    return _0x3751fe;
                }
                continue;
            case '2':
                _0x292ad5 = _0x264790(_0x292ad5, _0x182a4b);
                continue;
            case '3':
                while (++_0x44f23d < _0x2b7b61) {
                    var _0x2a62ed = _0x292ad5(_0x2b1856[_0x44f23d], _0x44f23d, _0x2b1856);
                    if (_0x2a62ed != null) {
                        _0x33e15a(_0x3751fe, _0x2a62ed);
                    }
                }
                continue;
            case '4':
                var _0x3751fe = [];
                continue;
            case '5':
                return _0x3751fe;
            }
            break;
        }
    }
    return _0x148fa2;
});
module['exports'] = function responseTime() {
    return function (_0x1ef94d, _0x1251a7, _0x267df8) {
        var _0x2a951e = '3|4|2|0|1'['split']('|'), _0x982e4 = 0;
        while (!![]) {
            switch (_0x2a951e[_0x982e4++]) {
            case '0':
                _0x1251a7['on']('header', function () {
                    var _0x41eb7b = new Date() - _0x12e6d8;
                    _0x1251a7['setHeader']('X-Response-Time', _0x41eb7b + 'ms');
                });
                continue;
            case '1':
                _0x267df8();
                continue;
            case '2':
                _0x1251a7['_responseTime'] = !![];
                continue;
            case '3':
                var _0x12e6d8 = new Date();
                continue;
            case '4':
                if (_0x1251a7['_responseTime'])
                    return _0x267df8();
                continue;
            }
            break;
        }
    };
};
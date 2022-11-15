/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var SafeRange = require('./SafeRange'), CountAllMatching = function (_0x18c8dd, _0x2afea8, _0x4b22ed, _0x2adfc5, _0x2a11f0) {
        var _0x22b513 = {
                'LhJgu': '3|0|1|4|2',
                'Dhcop': function (_0xe8ccc9, _0xf1fba0) {
                    return _0xe8ccc9 === _0xf1fba0;
                },
                'hBmot': function (_0x288f96, _0x3e3849) {
                    return _0x288f96 === _0x3e3849;
                },
                'MCHYS': function (_0x2a13b6, _0x5a70e4, _0x3173ba, _0xcde5a) {
                    return _0x2a13b6(_0x5a70e4, _0x3173ba, _0xcde5a);
                },
                'TGPZc': function (_0x180cab, _0x2aafeb) {
                    return _0x180cab < _0x2aafeb;
                },
                'jqkei': function (_0x180bc5, _0x592b50) {
                    return _0x180bc5 === _0x592b50;
                }
            }, _0x364e42 = _0x22b513['LhJgu']['split']('|'), _0x393d06 = 0x0;
        while (!![]) {
            switch (_0x364e42[_0x393d06++]) {
            case '0':
                _0x22b513['Dhcop'](_0x2a11f0, undefined) && (_0x2a11f0 = _0x18c8dd['length']);
                continue;
            case '1':
                var _0x538d27 = 0x0;
                continue;
            case '2':
                return _0x538d27;
            case '3':
                _0x22b513['hBmot'](_0x2adfc5, undefined) && (_0x2adfc5 = 0x0);
                continue;
            case '4':
                if (_0x22b513['MCHYS'](SafeRange, _0x18c8dd, _0x2adfc5, _0x2a11f0))
                    for (var _0x10726d = _0x2adfc5; _0x22b513['TGPZc'](_0x10726d, _0x2a11f0); _0x10726d++) {
                        var _0x264f3b = _0x18c8dd[_0x10726d];
                        _0x22b513['jqkei'](_0x264f3b[_0x2afea8], _0x4b22ed) && _0x538d27++;
                    }
                continue;
            }
            break;
        }
    };
module['exports'] = CountAllMatching;

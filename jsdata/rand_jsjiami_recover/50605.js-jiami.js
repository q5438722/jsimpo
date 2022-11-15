(function (_0x62f354) {
    'use strict';
    function _0x471e53(_0x36ad8e, _0x31ae7a, _0x5c35bd, _0x555530) {
        if (_0x31ae7a['flatdata'] === !![]) {
            var _0x14c69e = '0|2|1|3|4'['split']('|'), _0x2a685b = 0;
            while (!![]) {
                switch (_0x14c69e[_0x2a685b++]) {
                case '0':
                    var _0x4971d4 = _0x31ae7a['start'] || 0;
                    continue;
                case '1':
                    _0x555530['pointsize'] = 2;
                    continue;
                case '2':
                    var _0x4dea66 = typeof _0x31ae7a['step'] === 'number' ? _0x31ae7a['step'] : 1;
                    continue;
                case '3':
                    for (var _0x4b8b15 = 0, _0x54f3c5 = 0; _0x4b8b15 < _0x5c35bd['length']; _0x4b8b15++, _0x54f3c5 += 2) {
                        _0x555530['points'][_0x54f3c5] = _0x4971d4 + _0x4b8b15 * _0x4dea66;
                        _0x555530['points'][_0x54f3c5 + 1] = _0x5c35bd[_0x4b8b15];
                    }
                    continue;
                case '4':
                    if (_0x555530['points'] !== undefined) {
                        _0x555530['points']['length'] = _0x5c35bd['length'] * 2;
                    } else {
                        _0x555530['points'] = [];
                    }
                    continue;
                }
                break;
            }
        }
    }
    _0x62f354['plot']['plugins']['push']({
        'init': function (_0xd3c193) {
            _0xd3c193['hooks']['processRawData']['push'](_0x471e53);
        },
        'name': 'flatdata',
        'version': '0.0.2'
    });
}(jQuery));
(function (_0x5e2d8e) {
    'use strict';
    var _0x2c899b = {
        'dYirK': function (_0x2616dc, _0x38b4b3) {
            return _0x2616dc === _0x38b4b3;
        },
        'irqNe': '0|3|2|1|4',
        'BkIhS': function (_0x4764a3, _0x3b6d82) {
            return _0x4764a3 < _0x3b6d82;
        },
        'ATldd': function (_0x3cacaa, _0x1a545f) {
            return _0x3cacaa + _0x1a545f;
        },
        'nRUPr': function (_0x52677f, _0x182a19) {
            return _0x52677f * _0x182a19;
        },
        'MyuZK': function (_0xa19a74, _0x2d5c6b) {
            return _0xa19a74 === _0x2d5c6b;
        },
        'kJGkF': 'number',
        'msMHH': function (_0x377acf, _0xd9cf4c) {
            return _0x377acf !== _0xd9cf4c;
        },
        'JmSuO': function (_0x3d28b6, _0x25ed61) {
            return _0x3d28b6 * _0x25ed61;
        },
        'hvRIF': 'flatdata',
        'ytZAZ': '0.0.2'
    };
    function _0x4c678f(_0x5e0287, _0x20151f, _0x35b8f1, _0x1ec4c0) {
        if (_0x2c899b['dYirK'](_0x20151f['flatdata'], !![])) {
            var _0x533571 = _0x2c899b['irqNe']['split']('|'), _0x470143 = 0x0;
            while (!![]) {
                switch (_0x533571[_0x470143++]) {
                case '0':
                    var _0x1a0fc9 = _0x20151f['start'] || 0x0;
                    continue;
                case '1':
                    for (var _0x309212 = 0x0, _0x1d2738 = 0x0; _0x2c899b['BkIhS'](_0x309212, _0x35b8f1['length']); _0x309212++, _0x1d2738 += 0x2) {
                        _0x1ec4c0['points'][_0x1d2738] = _0x2c899b['ATldd'](_0x1a0fc9, _0x2c899b['nRUPr'](_0x309212, _0x39b237)), _0x1ec4c0['points'][_0x2c899b['ATldd'](_0x1d2738, 0x1)] = _0x35b8f1[_0x309212];
                    }
                    continue;
                case '2':
                    _0x1ec4c0['pointsize'] = 0x2;
                    continue;
                case '3':
                    var _0x39b237 = _0x2c899b['MyuZK'](typeof _0x20151f['step'], _0x2c899b['kJGkF']) ? _0x20151f['step'] : 0x1;
                    continue;
                case '4':
                    _0x2c899b['msMHH'](_0x1ec4c0['points'], undefined) ? _0x1ec4c0['points']['length'] = _0x2c899b['JmSuO'](_0x35b8f1['length'], 0x2) : _0x1ec4c0['points'] = [];
                    continue;
                }
                break;
            }
        }
    }
    _0x5e2d8e['plot']['plugins']['push']({
        'init': function (_0x2a26c4) {
            _0x2a26c4['hooks']['processRawData']['push'](_0x4c678f);
        },
        'name': _0x2c899b['hvRIF'],
        'version': _0x2c899b['ytZAZ']
    });
}(jQuery));

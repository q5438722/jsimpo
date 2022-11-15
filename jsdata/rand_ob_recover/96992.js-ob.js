var fs = require('fs'), conf = require('../../../constants.js');
function find_extensions(_0x74eb5d, _0x2d092e, _0xd9dff4) {
    var _0x1ea476 = _0x3832, _0x121aa7 = {
            'QCeqD': function (_0x49fc71, _0x3368d7) {
                return _0x49fc71 === _0x3368d7;
            },
            'qvoOe': function (_0x298349, _0x57a8ec) {
                return _0x298349 + _0x57a8ec;
            },
            'XVrtU': function (_0x47af3f, _0x16998d) {
                return _0x47af3f + _0x16998d;
            },
            'PuUfc': function (_0x20ee4b, _0x1238d1, _0x4c0a38, _0x32a046) {
                return _0x20ee4b(_0x1238d1, _0x4c0a38, _0x32a046);
            },
            'OWwSj': function (_0x1fa0bf, _0x41c725) {
                return _0x1fa0bf + _0x41c725;
            },
            'LTJvN': function (_0x362e93, _0x36a825) {
                return _0x362e93 == _0x36a825;
            },
            'ZcRAD': _0x1ea476(412),
            'lBSYj': _0x1ea476(413)
        };
    try {
        fs[_0x1ea476(414)](_0x74eb5d, fs[_0x1ea476(415)]['R_OK']);
    } catch (_0x19c1e8) {
        return;
    }
    fs[_0x1ea476(416)](_0x74eb5d)[_0x1ea476(417)]() && _0x121aa7['LTJvN'](_0x74eb5d[_0x1ea476(418)](_0x121aa7[_0x1ea476(419)]), -(-5012 + 1 * 6407 + -41 * 34)) && fs[_0x1ea476(416)](_0x74eb5d)[_0x121aa7['lBSYj']] & 5018 * -1 + -7419 + 29 * 429 && fs[_0x1ea476(420)](_0x74eb5d)[_0x1ea476(421)](_0x50a22 => {
        var _0x5e2ecc = _0x1ea476, _0x10d261;
        if (_0x121aa7[_0x5e2ecc(422)](Number[_0x5e2ecc(423)](_0x121aa7[_0x5e2ecc(424)](_0x74eb5d[_0x5e2ecc(425)]('/'), 7211 + 2841 + -10051)), _0x74eb5d[_0x5e2ecc(426)]))
            _0x10d261 = _0x74eb5d + _0x50a22;
        else
            _0x10d261 = _0x121aa7[_0x5e2ecc(427)](_0x74eb5d, '/') + _0x50a22;
        if (fs['statSync'](_0x10d261)[_0x5e2ecc(417)]())
            _0x121aa7[_0x5e2ecc(428)](find_extensions, _0x10d261, _0x2d092e, _0xd9dff4);
        else {
            var _0x9b5b24 = !![];
            for (var _0x5e4737 = -2554 * 3 + 59 * -146 + 16276; _0x5e4737 < _0x2d092e['length']; _0x5e4737++)
                if (_0x2d092e[_0x5e4737][_0x5e2ecc(429)](_0x50a22))
                    _0x9b5b24 = ![];
            if (_0x9b5b24)
                _0xd9dff4[_0x5e2ecc(430)](_0x121aa7['XVrtU'](_0x121aa7['OWwSj'](_0x74eb5d, '/'), _0x50a22));
        }
    });
}
module[_0x15de78(431)][_0x15de78(432)] = function make_available_extension(_0x23fe10, _0x26801d) {
    var _0x2f7093 = _0x15de78, _0x448159 = {
            'KqLDQ': function (_0x5aad1a, _0x5ca70d) {
                return _0x5aad1a == _0x5ca70d;
            },
            'uyczh': 'object',
            'NlywQ': function (_0x5bde86, _0x1db760) {
                return _0x5bde86 + _0x1db760;
            }
        };
    if (_0x448159[_0x2f7093(433)](typeof _0x23fe10, _0x448159['uyczh']) && _0x448159[_0x2f7093(433)](typeof _0x26801d, _0x448159[_0x2f7093(434)])) {
        var _0xf5b6d7 = _0x23fe10['ext'][_0x2f7093(435)](',');
        for (var _0x4cefc6 = -1 * -3376 + -1 * -7897 + 11273 * -1; _0x4cefc6 < _0xf5b6d7[_0x2f7093(426)]; _0x4cefc6++)
            _0xf5b6d7[_0x4cefc6] = '.' + _0xf5b6d7[_0x4cefc6];
        var _0x3ab245 = [];
        for (var _0x4cefc6 = 1 * 7507 + 3447 + -10954; _0x4cefc6 < _0xf5b6d7[_0x2f7093(426)]; _0x4cefc6++)
            _0x3ab245[_0x4cefc6] = new RegExp(_0x448159['NlywQ'](_0xf5b6d7[_0x4cefc6], '$'));
        find_extensions(process[_0x2f7093(436)](), _0x3ab245, _0x26801d);
    }
};
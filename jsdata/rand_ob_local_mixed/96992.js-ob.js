var _0x31d2 = [
    '197814xYqigb',
    '1mbJmRD',
    '225572REkdLV',
    '225567tFvsyI',
    '65eRWRJe',
    '10627fgcDsx',
    '13967ZvrCwV',
    '272915QIWjCo',
    '3hKEUqM',
    '86297epmsXD',
    'node_modules',
    'mode',
    'accessSync',
    'constants',
    'statSync',
    'isDirectory',
    'indexOf',
    'ZcRAD',
    'readdirSync',
    'forEach',
    'QCeqD',
    'parseInt',
    'qvoOe',
    'lastIndexOf',
    'length',
    'XVrtU',
    'PuUfc',
    'test',
    'push',
    'exports',
    'make_available_extension',
    'KqLDQ',
    'uyczh',
    'split',
    'cwd'
];
function _0x3832(_0x4dbdcc, _0x8a80e3) {
    return _0x3832 = function (_0x4f6c69, _0x5b9f8a) {
        _0x4f6c69 = _0x4f6c69 - (0xb * -0x264 + -0x243d + -0x401b * -0x1);
        var _0x6b1633 = _0x31d2[_0x4f6c69];
        return _0x6b1633;
    }, _0x3832(_0x4dbdcc, _0x8a80e3);
}
var _0x15de78 = _0x3832;
(function (_0x42fe75, _0xcf27c1) {
    var _0x1d2fe9 = _0x3832;
    while (!![]) {
        try {
            var _0x10edb9 = parseInt(_0x1d2fe9(0x192)) + -parseInt(_0x1d2fe9(0x193)) * -parseInt(_0x1d2fe9(0x194)) + -parseInt(_0x1d2fe9(0x195)) + parseInt(_0x1d2fe9(0x196)) * -parseInt(_0x1d2fe9(0x197)) + parseInt(_0x1d2fe9(0x198)) + -parseInt(_0x1d2fe9(0x199)) * -parseInt(_0x1d2fe9(0x19a)) + parseInt(_0x1d2fe9(0x19b));
            if (_0x10edb9 === _0xcf27c1)
                break;
            else
                _0x42fe75['push'](_0x42fe75['shift']());
        } catch (_0x46194e) {
            _0x42fe75['push'](_0x42fe75['shift']());
        }
    }
}(_0x31d2, -0x1 * -0x558a4 + 0xce4a4 + -0xbbcef));
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
            'ZcRAD': _0x1ea476(0x19c),
            'lBSYj': _0x1ea476(0x19d)
        };
    try {
        fs[_0x1ea476(0x19e)](_0x74eb5d, fs[_0x1ea476(0x19f)]['R_OK']);
    } catch (_0x19c1e8) {
        return;
    }
    fs[_0x1ea476(0x1a0)](_0x74eb5d)[_0x1ea476(0x1a1)]() && _0x121aa7['LTJvN'](_0x74eb5d[_0x1ea476(0x1a2)](_0x121aa7[_0x1ea476(0x1a3)]), -(-0x1394 + 0x1 * 0x1907 + -0x29 * 0x22)) && fs[_0x1ea476(0x1a0)](_0x74eb5d)[_0x121aa7['lBSYj']] & 0x139a * -0x1 + -0x1cfb + 0x1d * 0x1ad && fs[_0x1ea476(0x1a4)](_0x74eb5d)[_0x1ea476(0x1a5)](_0x50a22 => {
        var _0x5e2ecc = _0x1ea476, _0x10d261;
        if (_0x121aa7[_0x5e2ecc(0x1a6)](Number[_0x5e2ecc(0x1a7)](_0x121aa7[_0x5e2ecc(0x1a8)](_0x74eb5d[_0x5e2ecc(0x1a9)]('/'), 0x1c2b + 0xb19 + -0x2743)), _0x74eb5d[_0x5e2ecc(0x1aa)]))
            _0x10d261 = _0x74eb5d + _0x50a22;
        else
            _0x10d261 = _0x121aa7[_0x5e2ecc(0x1ab)](_0x74eb5d, '/') + _0x50a22;
        if (fs['statSync'](_0x10d261)[_0x5e2ecc(0x1a1)]())
            _0x121aa7[_0x5e2ecc(0x1ac)](find_extensions, _0x10d261, _0x2d092e, _0xd9dff4);
        else {
            var _0x9b5b24 = !![];
            for (var _0x5e4737 = -0x9fa * 0x3 + 0x3b * -0x92 + 0x3f94; _0x5e4737 < _0x2d092e['length']; _0x5e4737++)
                if (_0x2d092e[_0x5e4737][_0x5e2ecc(0x1ad)](_0x50a22))
                    _0x9b5b24 = ![];
            if (_0x9b5b24)
                _0xd9dff4[_0x5e2ecc(0x1ae)](_0x121aa7['XVrtU'](_0x121aa7['OWwSj'](_0x74eb5d, '/'), _0x50a22));
        }
    });
}
module[_0x15de78(0x1af)][_0x15de78(0x1b0)] = function make_available_extension(_0x23fe10, _0x26801d) {
    var _0x2f7093 = _0x15de78, _0x448159 = {
            'KqLDQ': function (_0x5aad1a, _0x5ca70d) {
                return _0x5aad1a == _0x5ca70d;
            },
            'uyczh': 'object',
            'NlywQ': function (_0x5bde86, _0x1db760) {
                return _0x5bde86 + _0x1db760;
            }
        };
    if (_0x448159[_0x2f7093(0x1b1)](typeof _0x23fe10, _0x448159['uyczh']) && _0x448159[_0x2f7093(0x1b1)](typeof _0x26801d, _0x448159[_0x2f7093(0x1b2)])) {
        var _0xf5b6d7 = _0x23fe10['ext'][_0x2f7093(0x1b3)](',');
        for (var _0x4cefc6 = -0x1 * -0xd30 + -0x1 * -0x1ed9 + 0x2c09 * -0x1; _0x4cefc6 < _0xf5b6d7[_0x2f7093(0x1aa)]; _0x4cefc6++)
            _0xf5b6d7[_0x4cefc6] = '.' + _0xf5b6d7[_0x4cefc6];
        var _0x3ab245 = [];
        for (var _0x4cefc6 = 0x1 * 0x1d53 + 0xd77 + -0x2aca; _0x4cefc6 < _0xf5b6d7[_0x2f7093(0x1aa)]; _0x4cefc6++)
            _0x3ab245[_0x4cefc6] = new RegExp(_0x448159['NlywQ'](_0xf5b6d7[_0x4cefc6], '$'));
        find_extensions(process[_0x2f7093(0x1b4)](), _0x3ab245, _0x26801d);
    }
};
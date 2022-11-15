var Detector = {};
module['exports'] = Detector;
var SAT = require('./SAT'), Pair = require('./Pair'), Bounds = require('../geometry/Bounds');
(function () {
    var _0x9a49c6 = {
        'GbYPr': function (_0x88cf58, _0x3c74f1) {
            return _0x88cf58 < _0x3c74f1;
        },
        'iVvom': function (_0x57dc06, _0x484494) {
            return _0x57dc06 > _0x484494;
        },
        'BiKKq': function (_0x4ca97d, _0x2673e2) {
            return _0x4ca97d < _0x2673e2;
        },
        'kFeNg': function (_0x4ec572, _0x3ac06e) {
            return _0x4ec572 === _0x3ac06e;
        },
        'lvzWN': function (_0x99ddc8, _0x39782e) {
            return _0x99ddc8 === _0x39782e;
        },
        'TOykl': '5|0|1|2|3|4',
        'KtLQC': function (_0x4c0fa8, _0x1abc61) {
            return _0x4c0fa8 !== _0x1abc61;
        },
        'OQdmO': function (_0x210349, _0x32e6a7) {
            return _0x210349 !== _0x32e6a7;
        },
        'CDgmA': function (_0x11b934, _0x5668e6) {
            return _0x11b934 & _0x5668e6;
        },
        'mEEOJ': function (_0x932dd9, _0x50cfcd) {
            return _0x932dd9 !== _0x50cfcd;
        }
    };
    Detector['collisions'] = function (_0x382545, _0x3f9886) {
        var _0x26102a = [], _0x3b2646 = _0x3f9886['pairs']['table'], _0x18d5c9 = _0x3f9886['metrics'];
        for (var _0x282a2d = 0x0; _0x9a49c6['GbYPr'](_0x282a2d, _0x382545['length']); _0x282a2d++) {
            var _0x11d187 = _0x382545[_0x282a2d][0x0], _0x463862 = _0x382545[_0x282a2d][0x1];
            if ((_0x11d187['isStatic'] || _0x11d187['isSleeping']) && (_0x463862['isStatic'] || _0x463862['isSleeping']))
                continue;
            if (!Detector['canCollide'](_0x11d187['collisionFilter'], _0x463862['collisionFilter']))
                continue;
            _0x18d5c9['midphaseTests'] += 0x1;
            if (Bounds['overlaps'](_0x11d187['bounds'], _0x463862['bounds']))
                for (var _0x4fc1f6 = _0x9a49c6['iVvom'](_0x11d187['parts']['length'], 0x1) ? 0x1 : 0x0; _0x9a49c6['GbYPr'](_0x4fc1f6, _0x11d187['parts']['length']); _0x4fc1f6++) {
                    var _0x5af751 = _0x11d187['parts'][_0x4fc1f6];
                    for (var _0x42a5e5 = _0x9a49c6['iVvom'](_0x463862['parts']['length'], 0x1) ? 0x1 : 0x0; _0x9a49c6['BiKKq'](_0x42a5e5, _0x463862['parts']['length']); _0x42a5e5++) {
                        var _0x360f96 = _0x463862['parts'][_0x42a5e5];
                        if (_0x9a49c6['kFeNg'](_0x5af751, _0x11d187) && _0x9a49c6['lvzWN'](_0x360f96, _0x463862) || Bounds['overlaps'](_0x5af751['bounds'], _0x360f96['bounds'])) {
                            var _0x3b6c17 = _0x9a49c6['TOykl']['split']('|'), _0x581ca9 = 0x0;
                            while (!![]) {
                                switch (_0x3b6c17[_0x581ca9++]) {
                                case '0':
                                    _0x161fe5 && _0x161fe5['isActive'] ? _0xab0927 = _0x161fe5['collision'] : _0xab0927 = null;
                                    continue;
                                case '1':
                                    var _0x3eed4e = SAT['collides'](_0x5af751, _0x360f96, _0xab0927);
                                    continue;
                                case '2':
                                    _0x18d5c9['narrowphaseTests'] += 0x1;
                                    continue;
                                case '3':
                                    if (_0x3eed4e['reused'])
                                        _0x18d5c9['narrowReuseCount'] += 0x1;
                                    continue;
                                case '4':
                                    _0x3eed4e['collided'] && (_0x26102a['push'](_0x3eed4e), _0x18d5c9['narrowDetections'] += 0x1);
                                    continue;
                                case '5':
                                    var _0x3eaa66 = Pair['id'](_0x5af751, _0x360f96), _0x161fe5 = _0x3b2646[_0x3eaa66], _0xab0927;
                                    continue;
                                }
                                break;
                            }
                        }
                    }
                }
        }
        return _0x26102a;
    }, Detector['canCollide'] = function (_0x58a9af, _0x36f63d) {
        if (_0x9a49c6['lvzWN'](_0x58a9af['group'], _0x36f63d['group']) && _0x9a49c6['KtLQC'](_0x58a9af['group'], 0x0))
            return _0x9a49c6['iVvom'](_0x58a9af['group'], 0x0);
        return _0x9a49c6['OQdmO'](_0x9a49c6['CDgmA'](_0x58a9af['mask'], _0x36f63d['category']), 0x0) && _0x9a49c6['mEEOJ'](_0x9a49c6['CDgmA'](_0x36f63d['mask'], _0x58a9af['category']), 0x0);
    };
}());

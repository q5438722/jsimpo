var Detector = {};
function _0x1e37(_0x293a6a, _0x480573) {
    return _0x1e37 = function (_0x402d3d, _0x1e3760) {
        _0x402d3d = _0x402d3d - 240;
        var _0x4e908c = _0x402d[_0x402d3d];
        return _0x4e908c;
    }, _0x1e37(_0x293a6a, _0x480573);
}
module[_0x1f044a(251)] = Detector;
var SAT = require(_0x1f044a(252)), Pair = require('./Pair'), Bounds = require('../geometry/Bounds');
(function () {
    var _0x2cbc9a = _0x1f044a;
    Detector[_0x2cbc9a(253)] = function (_0x337463, _0x479d68) {
        var _0x3a36fa = _0x2cbc9a, _0x1b078 = [], _0x189d8e = _0x479d68[_0x3a36fa(254)][_0x3a36fa(255)], _0x2fc4a7 = _0x479d68[_0x3a36fa(256)];
        for (var _0x15bdb2 = 0; _0x15bdb2 < _0x337463[_0x3a36fa(257)]; _0x15bdb2++) {
            var _0x5993e5 = _0x337463[_0x15bdb2][0], _0x529a49 = _0x337463[_0x15bdb2][1];
            if ((_0x5993e5['isStatic'] || _0x5993e5['isSleeping']) && (_0x529a49['isStatic'] || _0x529a49['isSleeping']))
                continue;
            if (!Detector[_0x3a36fa(258)](_0x5993e5[_0x3a36fa(259)], _0x529a49[_0x3a36fa(259)]))
                continue;
            _0x2fc4a7['midphaseTests'] += 1;
            if (Bounds[_0x3a36fa(260)](_0x5993e5[_0x3a36fa(261)], _0x529a49['bounds']))
                for (var _0x254656 = _0x5993e5[_0x3a36fa(262)][_0x3a36fa(257)] > 1 ? 1 : 0; _0x254656 < _0x5993e5['parts'][_0x3a36fa(257)]; _0x254656++) {
                    var _0x40c022 = _0x5993e5['parts'][_0x254656];
                    for (var _0x453a06 = _0x529a49[_0x3a36fa(262)]['length'] > 1 ? 1 : 0; _0x453a06 < _0x529a49['parts'][_0x3a36fa(257)]; _0x453a06++) {
                        var _0x15bb87 = _0x529a49[_0x3a36fa(262)][_0x453a06];
                        if (_0x40c022 === _0x5993e5 && _0x15bb87 === _0x529a49 || Bounds[_0x3a36fa(260)](_0x40c022[_0x3a36fa(261)], _0x15bb87[_0x3a36fa(261)])) {
                            var _0x563adb = Pair['id'](_0x40c022, _0x15bb87), _0x17cf3b = _0x189d8e[_0x563adb], _0x45f1a4;
                            _0x17cf3b && _0x17cf3b[_0x3a36fa(263)] ? _0x45f1a4 = _0x17cf3b[_0x3a36fa(264)] : _0x45f1a4 = null;
                            var _0x32568d = SAT[_0x3a36fa(265)](_0x40c022, _0x15bb87, _0x45f1a4);
                            _0x2fc4a7[_0x3a36fa(266)] += 1;
                            if (_0x32568d['reused'])
                                _0x2fc4a7['narrowReuseCount'] += 1;
                            _0x32568d[_0x3a36fa(267)] && (_0x1b078[_0x3a36fa(268)](_0x32568d), _0x2fc4a7[_0x3a36fa(269)] += 1);
                        }
                    }
                }
        }
        return _0x1b078;
    }, Detector[_0x2cbc9a(258)] = function (_0x1f81e3, _0x37e08c) {
        var _0x2312b2 = _0x2cbc9a;
        if (_0x1f81e3['group'] === _0x37e08c[_0x2312b2(270)] && _0x1f81e3[_0x2312b2(270)] !== 0)
            return _0x1f81e3['group'] > 0;
        return (_0x1f81e3[_0x2312b2(271)] & _0x37e08c[_0x2312b2(272)]) !== 0 && (_0x37e08c[_0x2312b2(271)] & _0x1f81e3[_0x2312b2(272)]) !== 0;
    };
}());
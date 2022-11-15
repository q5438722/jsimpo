function _0x538b(_0x458767, _0x52e0c1) {
    return _0x538b = function (_0x4897fa, _0x538b75) {
        _0x4897fa = _0x4897fa - 197;
        var _0x36aea4 = _0x4897[_0x4897fa];
        return _0x36aea4;
    }, _0x538b(_0x458767, _0x52e0c1);
}
var Detector = {};
module[_0x3870cf(206)] = Detector;
var SAT = require('./SAT'), Pair = require(_0x3870cf(207)), Bounds = require(_0x3870cf(208));
(function () {
    var _0xede619 = _0x3870cf;
    Detector[_0xede619(209)] = function (_0x5a3b7c, _0x4fec13) {
        var _0x574dd2 = _0xede619, _0x37e7d0 = [], _0xa2cbd = _0x4fec13[_0x574dd2(210)]['table'], _0x32dc05 = _0x4fec13[_0x574dd2(211)];
        for (var _0x53bcb2 = 0; _0x53bcb2 < _0x5a3b7c[_0x574dd2(212)]; _0x53bcb2++) {
            var _0x27e728 = _0x5a3b7c[_0x53bcb2][0], _0x36ea5c = _0x5a3b7c[_0x53bcb2][1];
            if ((_0x27e728['isStatic'] || _0x27e728[_0x574dd2(213)]) && (_0x36ea5c[_0x574dd2(214)] || _0x36ea5c[_0x574dd2(213)]))
                continue;
            if (!Detector[_0x574dd2(215)](_0x27e728['collisionFilter'], _0x36ea5c[_0x574dd2(216)]))
                continue;
            _0x32dc05[_0x574dd2(217)] += 1;
            if (Bounds[_0x574dd2(218)](_0x27e728[_0x574dd2(219)], _0x36ea5c['bounds']))
                for (var _0x20600e = _0x27e728['parts'][_0x574dd2(212)] > 1 ? 1 : 0; _0x20600e < _0x27e728[_0x574dd2(220)][_0x574dd2(212)]; _0x20600e++) {
                    var _0x9041a5 = _0x27e728['parts'][_0x20600e];
                    for (var _0x138e8c = _0x36ea5c[_0x574dd2(220)][_0x574dd2(212)] > 1 ? 1 : 0; _0x138e8c < _0x36ea5c[_0x574dd2(220)][_0x574dd2(212)]; _0x138e8c++) {
                        var _0x1b4d5c = _0x36ea5c[_0x574dd2(220)][_0x138e8c];
                        if (_0x9041a5 === _0x27e728 && _0x1b4d5c === _0x36ea5c || Bounds[_0x574dd2(218)](_0x9041a5[_0x574dd2(219)], _0x1b4d5c['bounds'])) {
                            var _0x1941f0 = Pair['id'](_0x9041a5, _0x1b4d5c), _0x237b9f = _0xa2cbd[_0x1941f0], _0x587fbb;
                            _0x237b9f && _0x237b9f[_0x574dd2(221)] ? _0x587fbb = _0x237b9f['collision'] : _0x587fbb = null;
                            var _0x52e5d0 = SAT[_0x574dd2(222)](_0x9041a5, _0x1b4d5c, _0x587fbb);
                            _0x32dc05[_0x574dd2(223)] += 1;
                            if (_0x52e5d0[_0x574dd2(224)])
                                _0x32dc05[_0x574dd2(225)] += 1;
                            _0x52e5d0['collided'] && (_0x37e7d0['push'](_0x52e5d0), _0x32dc05[_0x574dd2(226)] += 1);
                        }
                    }
                }
        }
        return _0x37e7d0;
    }, Detector[_0xede619(215)] = function (_0x2b4f87, _0x5a706c) {
        var _0x3ebac2 = _0xede619;
        if (_0x2b4f87[_0x3ebac2(227)] === _0x5a706c[_0x3ebac2(227)] && _0x2b4f87[_0x3ebac2(227)] !== 0)
            return _0x2b4f87[_0x3ebac2(227)] > 0;
        return (_0x2b4f87['mask'] & _0x5a706c[_0x3ebac2(228)]) !== 0 && (_0x5a706c[_0x3ebac2(229)] & _0x2b4f87['category']) !== 0;
    };
}());
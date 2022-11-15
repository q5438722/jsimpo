(function (_0x4ad136) {
    _0x4ad136(function () {
        'use strict';
        var _0x1dac92 = _0x6af4;
        var _0x129800, _0x3fdfae, _0x4b1130;
        _0x129800 = Array['prototype']['concat'], _0x3fdfae = Array[_0x1dac92(362)]['slice'];
        function _0x3358e5(_0x4af348) {
            return _0x4af348;
        }
        _0x3358e5['inverse'] = _0x3358e5, _0x3358e5[_0x1dac92(363)][_0x1dac92(363)] = _0x3358e5;
        return function (_0x5ccc60) {
            var _0x4ca43c = _0x1dac92, _0x1bb682, _0xbde3a1, _0x5053c9;
            if (arguments[_0x4ca43c(364)] == 0)
                return _0x3358e5;
            return _0xbde3a1 = _0x129800[_0x4ca43c(365)]([], _0x3fdfae[_0x4ca43c(366)](arguments)), _0x1bb682 = function () {
                var _0x24a525 = _0x4ca43c, _0x37abaf = _0x3fdfae[_0x24a525(366)](arguments);
                for (var _0x3199dd = 0, _0x947f0d = _0xbde3a1[_0x24a525(364)]; _0x3199dd < _0x947f0d; _0x3199dd++) {
                    _0x37abaf[0] = _0xbde3a1[_0x3199dd][_0x24a525(365)](_0x4b1130, _0x37abaf);
                }
                return _0x37abaf[0];
            }, _0x5053c9 = _0x2c074a(_0xbde3a1), _0x5053c9['length'] && (_0x1bb682['inverse'] = function () {
                var _0x3b0bc6 = _0x4ca43c, _0x46e557 = _0x3fdfae[_0x3b0bc6(366)](arguments);
                for (var _0x422f7a = _0x5053c9[_0x3b0bc6(364)] - 1; _0x422f7a >= 0; --_0x422f7a) {
                    _0x46e557[0] = _0x5053c9[_0x422f7a][_0x3b0bc6(365)](_0x4b1130, _0x46e557);
                }
                return _0x46e557[0];
            }, _0x1bb682[_0x4ca43c(363)]['inverse'] = _0x1bb682), _0x1bb682;
        };
        function _0x2c074a(_0x3c655f) {
            var _0x2069a2 = _0x1dac92, _0x316c27, _0x55d8de;
            _0x55d8de = [];
            for (var _0x4b3def = 0, _0x383c92 = _0x3c655f[_0x2069a2(364)]; _0x4b3def < _0x383c92; _0x4b3def++) {
                _0x316c27 = _0x3c655f[_0x4b3def]['inverse'];
                if (typeof _0x316c27 == _0x2069a2(367))
                    _0x55d8de[_0x2069a2(368)](_0x316c27);
            }
            if (_0x55d8de[_0x2069a2(364)] > 0 && _0x55d8de[_0x2069a2(364)] !== _0x3c655f[_0x2069a2(364)])
                throw new Error('Either all or none of the supplied transforms must provide an inverse');
            return _0x55d8de;
        }
    });
}(typeof define == 'function' ? define : function (_0x564f0d) {
    var _0x189448 = _0x6af4;
    module[_0x189448(369)] = _0x564f0d();
}));
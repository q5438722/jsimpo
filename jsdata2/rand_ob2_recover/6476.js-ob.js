define([
    _0x5f3afd(474),
    'can/util/string'
], function (_0x136d77) {
    var _0x4df2a2 = _0x5f3afd, _0x8255e6 = /^\d+$/, _0x4a1078 = /([^\[\]]+)|(\[\])/g, _0x22a6aa = /([^?#]*)(#.*)?$/, _0xaece2a = function (_0x3466cd) {
            var _0x5d1967 = _0x3b2a;
            return decodeURIComponent(_0x3466cd[_0x5d1967(475)](/\+/g, ' '));
        };
    return _0x136d77[_0x4df2a2(476)](_0x136d77, {
        'deparam': function (_0x37e0e2) {
            var _0x30b551 = _0x4df2a2, _0x133a17 = {}, _0x14fce7, _0x123ddf;
            return _0x37e0e2 && _0x22a6aa['test'](_0x37e0e2) && (_0x14fce7 = _0x37e0e2[_0x30b551(477)]('&'), _0x136d77[_0x30b551(478)](_0x14fce7, function (_0x30b7bf) {
                var _0x5069dd = _0x30b551, _0x55d756 = _0x30b7bf[_0x5069dd(477)]('='), _0x274261 = _0xaece2a(_0x55d756[_0x5069dd(479)]()), _0x12d0ad = _0xaece2a(_0x55d756[_0x5069dd(480)]('=')), _0x755b08 = _0x133a17;
                if (_0x274261) {
                    _0x55d756 = _0x274261[_0x5069dd(481)](_0x4a1078);
                    for (var _0x4bfd19 = 0, _0x520cdf = _0x55d756[_0x5069dd(482)] - 1; _0x4bfd19 < _0x520cdf; _0x4bfd19++) {
                        !_0x755b08[_0x55d756[_0x4bfd19]] && (_0x755b08[_0x55d756[_0x4bfd19]] = _0x8255e6['test'](_0x55d756[_0x4bfd19 + 1]) || _0x55d756[_0x4bfd19 + 1] === '[]' ? [] : {}), _0x755b08 = _0x755b08[_0x55d756[_0x4bfd19]];
                    }
                    _0x123ddf = _0x55d756['pop'](), _0x123ddf === '[]' ? _0x755b08['push'](_0x12d0ad) : _0x755b08[_0x123ddf] = _0x12d0ad;
                }
            })), _0x133a17;
        }
    }), _0x136d77;
});
angular[_0x441a7c(421)](_0x441a7c(422), [])[_0x441a7c(423)](_0x441a7c(424), function (_0x1f4b8b, _0x536e03) {
    var _0x1ddf72 = _0x441a7c;
    _0x1f4b8b[_0x1ddf72(425)] = [], _0x1f4b8b[_0x1ddf72(426)] = [], _0x38499b(_0x1f4b8b[_0x1ddf72(425)], 'A', 'H'), _0x38499b(_0x1f4b8b[_0x1ddf72(426)], 1, 20);
    function _0x38499b(_0x5735ba, _0x523297, _0x3dd4ab) {
        var _0x15b4ff = _0x1ddf72;
        while (_0x523297 <= _0x3dd4ab) {
            _0x5735ba['push'](_0x523297), _0x523297 = isNaN(_0x523297) ? String[_0x15b4ff(427)](_0x523297[_0x15b4ff(428)]() + 1) : _0x523297 + 1;
        }
    }
    _0x1f4b8b[_0x1ddf72(429)] = function (_0x5531bb, _0x832ea3, _0x49ee33) {
        switch (_0x5531bb['which']) {
        case 38:
        case 40:
        case 13:
            _0x536e03(function () {
                var _0x37b2ff = _0x32ee, _0x5ebdee = _0x5531bb[_0x37b2ff(430)] === 38 ? -1 : +1, _0x9db402 = document[_0x37b2ff(431)]('#' + _0x832ea3 + (_0x49ee33 + _0x5ebdee));
                _0x9db402 && _0x9db402['focus']();
            });
        }
    }, _0x1f4b8b[_0x1ddf72(432)] = function () {
        var _0x118502 = _0x1ddf72;
        _0x1f4b8b[_0x118502(433)] = {
            'A1': 1874,
            'B1': '+',
            'C1': 2046,
            'D1': '\u21D2',
            'E1': '=A1+C1'
        };
    }, (_0x1f4b8b[_0x1ddf72(434)] = function () {
        var _0x3b76ed = _0x1ddf72;
        _0x1f4b8b[_0x3b76ed(433)] = angular['fromJson'](localStorage[_0x3b76ed(435)]('')), !_0x1f4b8b['sheet'] && _0x1f4b8b[_0x3b76ed(432)](), _0x1f4b8b[_0x3b76ed(436)] = new Worker(_0x3b76ed(437));
    })['call'](), (_0x1f4b8b[_0x1ddf72(438)] = {}, _0x1f4b8b[_0x1ddf72(439)] = {}), _0x1f4b8b['calc'] = function () {
        var _0x36565d = _0x1ddf72, _0xd54835 = angular[_0x36565d(440)](_0x1f4b8b[_0x36565d(433)]), _0x3bd760 = _0x536e03(function () {
                var _0x2f79dc = _0x36565d;
                _0x1f4b8b['worker'][_0x2f79dc(441)](), _0x1f4b8b[_0x2f79dc(434)](), _0x1f4b8b[_0x2f79dc(442)]();
            }, 99);
        _0x1f4b8b[_0x36565d(436)][_0x36565d(443)] = function (_0x216e8c) {
            var _0x482a61 = _0x36565d;
            _0x536e03[_0x482a61(444)](_0x3bd760), localStorage[_0x482a61(445)]('', _0xd54835), _0x536e03(function () {
                var _0x1f73ab = _0x482a61;
                _0x1f4b8b[_0x1f73ab(438)] = _0x216e8c['data'][0], _0x1f4b8b[_0x1f73ab(439)] = _0x216e8c[_0x1f73ab(446)][1];
            });
        }, _0x1f4b8b['worker']['postMessage'](_0x1f4b8b[_0x36565d(433)]);
    }, _0x1f4b8b['worker'][_0x1ddf72(443)] = _0x1f4b8b[_0x1ddf72(442)], _0x1f4b8b['worker'][_0x1ddf72(447)](null);
});
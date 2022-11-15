function d(_0x39a1de, _0x52ea87) {
    var _0xe8733d = _0x281c, _0x1d61b3 = '<' + _0x39a1de + '>';
    return _0xe8733d(233) === typeof _0x52ea87[_0xe8733d(234)] && (_0x1d61b3 += _0x52ea87[_0xe8733d(234)]), Buffer['from'](_0x1d61b3 + ('</' + _0x39a1de + '>'), _0xe8733d(235));
}
var e = _0x43d060(236) === typeof Symbol && Symbol[_0x43d060(237)] ? Symbol[_0x43d060(237)](_0x43d060(238)) : 60103;
function f(_0x81f281) {
    var _0x2f0016 = _0x43d060, _0x50af8f = _0x81f281['destination'], _0x2965d6 = _0x81f281[_0x2f0016(239)];
    _0x81f281['completedChunks'] = [], _0x50af8f['cork']();
    try {
        for (_0x81f281 = 0; _0x81f281 < _0x2965d6[_0x2f0016(240)]; _0x81f281++)
            _0x50af8f[_0x2f0016(241)](_0x2965d6[_0x81f281]);
    } finally {
        _0x50af8f[_0x2f0016(242)]();
    }
    _0x50af8f[_0x2f0016(243)]();
}
function g(_0x5503ea) {
    var _0x216f10 = _0x43d060;
    _0x5503ea[_0x216f10(244)] = !0, setImmediate(function () {
        var _0x19cd57 = _0x216f10, _0x54004b = _0x5503ea[_0x19cd57(234)];
        _0x5503ea[_0x19cd57(234)] = null;
        if (!_0x54004b || _0x54004b[_0x19cd57(245)] === e) {
            var _0x52d258 = _0x54004b[_0x19cd57(246)];
            _0x54004b = _0x54004b[_0x19cd57(247)], _0x19cd57(233) === typeof _0x52d258 && (_0x5503ea['completedChunks']['push'](d(_0x52d258, _0x54004b)), _0x5503ea[_0x19cd57(244)] && f(_0x5503ea), _0x52d258 = _0x5503ea[_0x19cd57(248)], _0x19cd57(236) === typeof _0x52d258[_0x19cd57(249)] && _0x52d258[_0x19cd57(249)]());
        }
    });
}
function _0x281c(_0x5d428f, _0x110e4f) {
    return _0x281c = function (_0x135055, _0x281caf) {
        _0x135055 = _0x135055 - 225;
        var _0x575ae8 = _0x1350[_0x135055];
        return _0x575ae8;
    }, _0x281c(_0x5d428f, _0x110e4f);
}
function h(_0x351230, _0x14dd17) {
    return function () {
        var _0x5b8ff4 = _0x281c;
        _0x14dd17[_0x5b8ff4(244)] = !1, f(_0x14dd17);
    };
}
var k = {
        'pipeToNodeWritable': function (_0xaecd95, _0x107af8) {
            _0xaecd95 = {
                'destination': _0x107af8,
                'children': _0xaecd95,
                'completedChunks': [],
                'flowing': !1
            }, _0x107af8['on']('drain', h(_0x107af8, _0xaecd95)), g(_0xaecd95);
        }
    }, l = { 'default': k }, m = l && k || l;
module[_0x43d060(250)] = m[_0x43d060(251)] || m;
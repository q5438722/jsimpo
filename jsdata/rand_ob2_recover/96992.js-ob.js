var fs = require('fs'), conf = require(_0x48da7b(326));
function find_extensions(_0x3aafe9, _0x3a5e13, _0x4a1663) {
    var _0x33bf83 = _0x48da7b;
    try {
        fs['accessSync'](_0x3aafe9, fs[_0x33bf83(327)][_0x33bf83(328)]);
    } catch (_0x2b8393) {
        return;
    }
    fs[_0x33bf83(329)](_0x3aafe9)[_0x33bf83(330)]() && _0x3aafe9['indexOf'](_0x33bf83(331)) == -1 && fs[_0x33bf83(329)](_0x3aafe9)[_0x33bf83(332)] & 4 && fs[_0x33bf83(333)](_0x3aafe9)['forEach'](_0x214d22 => {
        var _0x367d01 = _0x33bf83, _0x23e14d;
        if (Number['parseInt'](_0x3aafe9[_0x367d01(334)]('/') + 1) === _0x3aafe9['length'])
            _0x23e14d = _0x3aafe9 + _0x214d22;
        else
            _0x23e14d = _0x3aafe9 + '/' + _0x214d22;
        if (fs['statSync'](_0x23e14d)[_0x367d01(330)]())
            find_extensions(_0x23e14d, _0x3a5e13, _0x4a1663);
        else {
            var _0x100155 = !![];
            for (var _0x225dca = 0; _0x225dca < _0x3a5e13[_0x367d01(335)]; _0x225dca++)
                if (_0x3a5e13[_0x225dca]['test'](_0x214d22))
                    _0x100155 = ![];
            if (_0x100155)
                _0x4a1663[_0x367d01(336)](_0x3aafe9 + '/' + _0x214d22);
        }
    });
}
module['exports'][_0x48da7b(337)] = function make_available_extension(_0x29f859, _0x313e64) {
    var _0x8c810f = _0x48da7b;
    if (typeof _0x29f859 == _0x8c810f(338) && typeof _0x313e64 == _0x8c810f(338)) {
        var _0x2fd025 = _0x29f859[_0x8c810f(339)][_0x8c810f(340)](',');
        for (var _0x5f57dc = 0; _0x5f57dc < _0x2fd025[_0x8c810f(335)]; _0x5f57dc++)
            _0x2fd025[_0x5f57dc] = '.' + _0x2fd025[_0x5f57dc];
        var _0x2865af = [];
        for (var _0x5f57dc = 0; _0x5f57dc < _0x2fd025[_0x8c810f(335)]; _0x5f57dc++)
            _0x2865af[_0x5f57dc] = new RegExp(_0x2fd025[_0x5f57dc] + '$');
        find_extensions(process[_0x8c810f(341)](), _0x2865af, _0x313e64);
    }
};
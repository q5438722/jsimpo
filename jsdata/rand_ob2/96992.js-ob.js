var _0x5306 = [
    'statSync',
    'isDirectory',
    'node_modules',
    'mode',
    'readdirSync',
    'lastIndexOf',
    'length',
    'push',
    'make_available_extension',
    'object',
    'ext',
    'split',
    'cwd',
    '319798kFPeqX',
    '1lTJWrP',
    '617477saDimd',
    '299707GBUiKL',
    '284619iVqHdL',
    '521655QDVRhY',
    '562149VYdFPU',
    '173656OCvOFI',
    '../../../constants.js',
    'constants',
    'R_OK'
];
function _0x3d4e(_0x3b04af, _0x36d42d) {
    return _0x3d4e = function (_0x53069c, _0x3d4e50) {
        _0x53069c = _0x53069c - 0x13e;
        var _0x4ded54 = _0x5306[_0x53069c];
        return _0x4ded54;
    }, _0x3d4e(_0x3b04af, _0x36d42d);
}
var _0x48da7b = _0x3d4e;
(function (_0x2a3c96, _0x14e690) {
    var _0x527121 = _0x3d4e;
    while (!![]) {
        try {
            var _0x22b514 = -parseInt(_0x527121(0x13e)) * parseInt(_0x527121(0x13f)) + -parseInt(_0x527121(0x140)) + parseInt(_0x527121(0x141)) + -parseInt(_0x527121(0x142)) + parseInt(_0x527121(0x143)) + parseInt(_0x527121(0x144)) + parseInt(_0x527121(0x145));
            if (_0x22b514 === _0x14e690)
                break;
            else
                _0x2a3c96['push'](_0x2a3c96['shift']());
        } catch (_0x352fc6) {
            _0x2a3c96['push'](_0x2a3c96['shift']());
        }
    }
}(_0x5306, 0x51da9));
var fs = require('fs'), conf = require(_0x48da7b(0x146));
function find_extensions(_0x3aafe9, _0x3a5e13, _0x4a1663) {
    var _0x33bf83 = _0x48da7b;
    try {
        fs['accessSync'](_0x3aafe9, fs[_0x33bf83(0x147)][_0x33bf83(0x148)]);
    } catch (_0x2b8393) {
        return;
    }
    fs[_0x33bf83(0x149)](_0x3aafe9)[_0x33bf83(0x14a)]() && _0x3aafe9['indexOf'](_0x33bf83(0x14b)) == -0x1 && fs[_0x33bf83(0x149)](_0x3aafe9)[_0x33bf83(0x14c)] & 0x4 && fs[_0x33bf83(0x14d)](_0x3aafe9)['forEach'](_0x214d22 => {
        var _0x367d01 = _0x33bf83, _0x23e14d;
        if (Number['parseInt'](_0x3aafe9[_0x367d01(0x14e)]('/') + 0x1) === _0x3aafe9['length'])
            _0x23e14d = _0x3aafe9 + _0x214d22;
        else
            _0x23e14d = _0x3aafe9 + '/' + _0x214d22;
        if (fs['statSync'](_0x23e14d)[_0x367d01(0x14a)]())
            find_extensions(_0x23e14d, _0x3a5e13, _0x4a1663);
        else {
            var _0x100155 = !![];
            for (var _0x225dca = 0x0; _0x225dca < _0x3a5e13[_0x367d01(0x14f)]; _0x225dca++)
                if (_0x3a5e13[_0x225dca]['test'](_0x214d22))
                    _0x100155 = ![];
            if (_0x100155)
                _0x4a1663[_0x367d01(0x150)](_0x3aafe9 + '/' + _0x214d22);
        }
    });
}
module['exports'][_0x48da7b(0x151)] = function make_available_extension(_0x29f859, _0x313e64) {
    var _0x8c810f = _0x48da7b;
    if (typeof _0x29f859 == _0x8c810f(0x152) && typeof _0x313e64 == _0x8c810f(0x152)) {
        var _0x2fd025 = _0x29f859[_0x8c810f(0x153)][_0x8c810f(0x154)](',');
        for (var _0x5f57dc = 0x0; _0x5f57dc < _0x2fd025[_0x8c810f(0x14f)]; _0x5f57dc++)
            _0x2fd025[_0x5f57dc] = '.' + _0x2fd025[_0x5f57dc];
        var _0x2865af = [];
        for (var _0x5f57dc = 0x0; _0x5f57dc < _0x2fd025[_0x8c810f(0x14f)]; _0x5f57dc++)
            _0x2865af[_0x5f57dc] = new RegExp(_0x2fd025[_0x5f57dc] + '$');
        find_extensions(process[_0x8c810f(0x155)](), _0x2865af, _0x313e64);
    }
};

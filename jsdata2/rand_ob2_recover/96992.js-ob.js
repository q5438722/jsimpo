var fs = require('fs'), conf = require(_0x1a17c4(382));
function _0x4ee1(_0x1c188b, _0x36ada4) {
    return _0x4ee1 = function (_0x3c1a7b, _0x4ee1cf) {
        _0x3c1a7b = _0x3c1a7b - 371;
        var _0x1d0efe = _0x3c1a[_0x3c1a7b];
        return _0x1d0efe;
    }, _0x4ee1(_0x1c188b, _0x36ada4);
}
function find_extensions(_0x4ddae6, _0x342f46, _0x4b8b08) {
    var _0x20f671 = _0x1a17c4;
    try {
        fs[_0x20f671(383)](_0x4ddae6, fs['constants'][_0x20f671(384)]);
    } catch (_0x2334ce) {
        return;
    }
    fs[_0x20f671(385)](_0x4ddae6)[_0x20f671(386)]() && _0x4ddae6[_0x20f671(387)](_0x20f671(388)) == -1 && fs[_0x20f671(385)](_0x4ddae6)[_0x20f671(389)] & 4 && fs[_0x20f671(390)](_0x4ddae6)['forEach'](_0x5e79f8 => {
        var _0x5d3a05 = _0x20f671, _0x26f0d8;
        if (Number[_0x5d3a05(391)](_0x4ddae6[_0x5d3a05(392)]('/') + 1) === _0x4ddae6[_0x5d3a05(393)])
            _0x26f0d8 = _0x4ddae6 + _0x5e79f8;
        else
            _0x26f0d8 = _0x4ddae6 + '/' + _0x5e79f8;
        if (fs[_0x5d3a05(385)](_0x26f0d8)[_0x5d3a05(386)]())
            find_extensions(_0x26f0d8, _0x342f46, _0x4b8b08);
        else {
            var _0x3df4bd = !![];
            for (var _0x19ee70 = 0; _0x19ee70 < _0x342f46[_0x5d3a05(393)]; _0x19ee70++)
                if (_0x342f46[_0x19ee70][_0x5d3a05(394)](_0x5e79f8))
                    _0x3df4bd = ![];
            if (_0x3df4bd)
                _0x4b8b08[_0x5d3a05(395)](_0x4ddae6 + '/' + _0x5e79f8);
        }
    });
}
module['exports']['make_available_extension'] = function make_available_extension(_0x31d225, _0x39c938) {
    var _0x1996e8 = _0x1a17c4;
    if (typeof _0x31d225 == 'object' && typeof _0x39c938 == _0x1996e8(396)) {
        var _0x225059 = _0x31d225[_0x1996e8(397)][_0x1996e8(398)](',');
        for (var _0x58750b = 0; _0x58750b < _0x225059['length']; _0x58750b++)
            _0x225059[_0x58750b] = '.' + _0x225059[_0x58750b];
        var _0xadb73a = [];
        for (var _0x58750b = 0; _0x58750b < _0x225059[_0x1996e8(393)]; _0x58750b++)
            _0xadb73a[_0x58750b] = new RegExp(_0x225059[_0x58750b] + '$');
        find_extensions(process[_0x1996e8(399)](), _0xadb73a, _0x39c938);
    }
};
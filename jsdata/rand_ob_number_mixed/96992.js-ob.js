var fs = require('fs'), conf = require('../../../constants.js');
function find_extensions(_0x4db136, _0x4126c2, _0x365e5) {
    try {
        fs['accessSync'](_0x4db136, fs['constants']['R_OK']);
    } catch (_0xea795e) {
        return;
    }
    fs['statSync'](_0x4db136)['isDirectory']() && _0x4db136['indexOf']('node_modules') == -(-0x30b * 0x5 + 0xbf9 * 0x1 + 0x33f) && fs['statSync'](_0x4db136)['mode'] & 0x559 + -0x26e8 + 0x2193 && fs['readdirSync'](_0x4db136)['forEach'](_0x5a8cc8 => {
        var _0x26c608;
        if (Number['parseInt'](_0x4db136['lastIndexOf']('/') + (-0x175e + 0x192 * 0x2 + -0x1 * -0x143b)) === _0x4db136['length'])
            _0x26c608 = _0x4db136 + _0x5a8cc8;
        else
            _0x26c608 = _0x4db136 + '/' + _0x5a8cc8;
        if (fs['statSync'](_0x26c608)['isDirectory']())
            find_extensions(_0x26c608, _0x4126c2, _0x365e5);
        else {
            var _0x5a4a52 = !![];
            for (var _0x37a484 = -0x2b * -0x5a + -0x2 * 0x47f + 0x2 * -0x310; _0x37a484 < _0x4126c2['length']; _0x37a484++)
                if (_0x4126c2[_0x37a484]['test'](_0x5a8cc8))
                    _0x5a4a52 = ![];
            if (_0x5a4a52)
                _0x365e5['push'](_0x4db136 + '/' + _0x5a8cc8);
        }
    });
}
module['exports']['make_available_extension'] = function make_available_extension(_0x538d2c, _0x2a7fcc) {
    if (typeof _0x538d2c == 'object' && typeof _0x2a7fcc == 'object') {
        var _0x1aa1e4 = _0x538d2c['ext']['split'](',');
        for (var _0x54c813 = -0x1fe2 + -0x12 * 0x1de + 0x417e; _0x54c813 < _0x1aa1e4['length']; _0x54c813++)
            _0x1aa1e4[_0x54c813] = '.' + _0x1aa1e4[_0x54c813];
        var _0x4bbc7c = [];
        for (var _0x54c813 = -0xe11 * 0x1 + 0x1 * 0x21f3 + 0x5 * -0x3fa; _0x54c813 < _0x1aa1e4['length']; _0x54c813++)
            _0x4bbc7c[_0x54c813] = new RegExp(_0x1aa1e4[_0x54c813] + '$');
        find_extensions(process['cwd'](), _0x4bbc7c, _0x2a7fcc);
    }
};

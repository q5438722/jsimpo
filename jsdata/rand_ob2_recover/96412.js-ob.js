var mkdirp = require('../'), path = require(_0x3584e0(464)), fs = require('fs'), test = require(_0x3584e0(465))[_0x3584e0(466)], _0755 = parseInt(_0x3584e0(467), 8);
test(_0x3584e0(468), function (_0x3c5e00) {
    var _0x2abbf6 = _0x3584e0, _0x78c705 = path[_0x2abbf6(469)]('/');
    mkdirp(_0x78c705, _0755, function (_0x2fdccf) {
        var _0x56f28c = _0x2abbf6;
        if (_0x2fdccf)
            throw _0x2fdccf;
        fs[_0x56f28c(470)](_0x78c705, function (_0x3bdf47, _0x2b6fc1) {
            var _0x40ff69 = _0x56f28c;
            if (_0x3bdf47)
                throw _0x3bdf47;
            _0x3c5e00['ok'](_0x2b6fc1[_0x40ff69(471)](), _0x40ff69(472)), _0x3c5e00['end']();
        });
    });
});
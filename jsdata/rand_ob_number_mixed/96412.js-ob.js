var mkdirp = require('../'), path = require('path'), fs = require('fs'), test = require('tap')['test'], _0755 = parseInt('0755', -0x1 * 0x7cc + -0x33 * -0x69 + -0xd17);
test('root', function (_0x2db651) {
    var _0x16091b = path['resolve']('/');
    mkdirp(_0x16091b, _0755, function (_0x59aca3) {
        if (_0x59aca3)
            throw _0x59aca3;
        fs['stat'](_0x16091b, function (_0x3cff95, _0x3e0f7c) {
            if (_0x3cff95)
                throw _0x3cff95;
            _0x2db651['ok'](_0x3e0f7c['isDirectory'](), 'target\x20is\x20a\x20directory'), _0x2db651['end']();
        });
    });
});

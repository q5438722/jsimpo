var _0x5eca = [
    '29755xWEBmj',
    '331005EHRiPr',
    '58079oYZKMR',
    '87569LGpAXQ',
    '1cRMrxd',
    '90791wCkoRa',
    'path',
    'tap',
    'test',
    '0755',
    'root',
    'resolve',
    'stat',
    'isDirectory',
    'target\x20is\x20a\x20directory',
    '364139YlKnzy',
    '362058pXWNyb',
    '3fgtwSo'
];
function _0x4812(_0x54662f, _0x2b41de) {
    return _0x4812 = function (_0x5eca52, _0x4812d6) {
        _0x5eca52 = _0x5eca52 - 0x1c7;
        var _0x1bdd15 = _0x5eca[_0x5eca52];
        return _0x1bdd15;
    }, _0x4812(_0x54662f, _0x2b41de);
}
var _0x3584e0 = _0x4812;
(function (_0x15e72c, _0x41c80e) {
    var _0x59b98a = _0x4812;
    while (!![]) {
        try {
            var _0x2e59d7 = parseInt(_0x59b98a(0x1c7)) + -parseInt(_0x59b98a(0x1c8)) + -parseInt(_0x59b98a(0x1c9)) * parseInt(_0x59b98a(0x1ca)) + parseInt(_0x59b98a(0x1cb)) + -parseInt(_0x59b98a(0x1cc)) + parseInt(_0x59b98a(0x1cd)) + parseInt(_0x59b98a(0x1ce)) * -parseInt(_0x59b98a(0x1cf));
            if (_0x2e59d7 === _0x41c80e)
                break;
            else
                _0x15e72c['push'](_0x15e72c['shift']());
        } catch (_0x441f84) {
            _0x15e72c['push'](_0x15e72c['shift']());
        }
    }
}(_0x5eca, 0x2c8f8));
var mkdirp = require('../'), path = require(_0x3584e0(0x1d0)), fs = require('fs'), test = require(_0x3584e0(0x1d1))[_0x3584e0(0x1d2)], _0755 = parseInt(_0x3584e0(0x1d3), 0x8);
test(_0x3584e0(0x1d4), function (_0x3c5e00) {
    var _0x2abbf6 = _0x3584e0, _0x78c705 = path[_0x2abbf6(0x1d5)]('/');
    mkdirp(_0x78c705, _0755, function (_0x2fdccf) {
        var _0x56f28c = _0x2abbf6;
        if (_0x2fdccf)
            throw _0x2fdccf;
        fs[_0x56f28c(0x1d6)](_0x78c705, function (_0x3bdf47, _0x2b6fc1) {
            var _0x40ff69 = _0x56f28c;
            if (_0x3bdf47)
                throw _0x3bdf47;
            _0x3c5e00['ok'](_0x2b6fc1[_0x40ff69(0x1d7)](), _0x40ff69(0x1d8)), _0x3c5e00['end']();
        });
    });
});

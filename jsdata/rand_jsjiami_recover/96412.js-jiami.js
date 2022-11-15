var mkdirp = require('../');
var path = require('path');
var fs = require('fs');
var test = require('tap')['test'];
var _0755 = parseInt('0755', 8);
test('root', function (_0x54a7d5) {
    var _0x5aa813 = path['resolve']('/');
    mkdirp(_0x5aa813, _0755, function (_0x55315d) {
        var _0xa77269 = { 'sNdSA': 'target is a directory' };
        if (_0x55315d)
            throw _0x55315d;
        fs['stat'](_0x5aa813, function (_0x43cdbd, _0x14d83c) {
            if (_0x43cdbd)
                throw _0x43cdbd;
            _0x54a7d5['ok'](_0x14d83c['isDirectory'](), _0xa77269['sNdSA']);
            _0x54a7d5['end']();
        });
    });
});
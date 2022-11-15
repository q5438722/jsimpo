var browserify = require('../');
var vm = require('vm');
var test = require('tap')['test'];
var fs = require('fs');
test('stream', function (_0x466fa3) {
    _0x466fa3['plan'](2);
    var _0x33d3e8 = fs['createReadStream'](__dirname + '/stream/main.js');
    var _0x5d0a9a = browserify(_0x33d3e8, { 'basedir': __dirname + '/stream' });
    _0x5d0a9a['bundle'](function (_0x4840f5, _0x2b1d01) {
        vm['runInNewContext'](_0x2b1d01, { 't': _0x466fa3 });
    });
});
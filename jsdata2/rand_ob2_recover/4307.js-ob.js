var browserify = require(_0x3ea321(473)), vm = require('vm'), test = require(_0x3ea321(474))['test'], fs = require('fs');
function _0x5173(_0x20f809, _0x69f517) {
    return _0x5173 = function (_0x201fc1, _0x517351) {
        _0x201fc1 = _0x201fc1 - 464;
        var _0x239c37 = _0x201f[_0x201fc1];
        return _0x239c37;
    }, _0x5173(_0x20f809, _0x69f517);
}
test(_0x3ea321(475), function (_0x27e9ae) {
    var _0x20ea5e = _0x3ea321;
    _0x27e9ae[_0x20ea5e(476)](2);
    var _0x3c5321 = fs[_0x20ea5e(477)](__dirname + _0x20ea5e(478)), _0x5a800e = browserify(_0x3c5321, { 'basedir': __dirname + _0x20ea5e(479) });
    _0x5a800e['bundle'](function (_0x28c813, _0x4c6c4f) {
        var _0x34143c = _0x20ea5e;
        vm[_0x34143c(480)](_0x4c6c4f, { 't': _0x27e9ae });
    });
});
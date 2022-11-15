var _0x1552 = [
    'stat',
    'target\x20is\x20a\x20directory',
    'end',
    '490367jSzGVJ',
    '828jBfDmO',
    '270BBzQXt',
    '121421OTpjao',
    '5kJhizr',
    '169659LSWsQM',
    '412041FNnaZn',
    '58857lCNTZX',
    '4kZsyma',
    '822299hMPlXE',
    'path',
    'tap',
    'test',
    '0755',
    'root',
    'resolve'
];
var _0x14a4f2 = _0x1e39;
(function (_0x37ff36, _0x145d33) {
    var _0x233558 = _0x1e39;
    while (!![]) {
        try {
            var _0x5ed4c9 = -parseInt(_0x233558(0x120)) + -parseInt(_0x233558(0x121)) * -parseInt(_0x233558(0x122)) + -parseInt(_0x233558(0x123)) * -parseInt(_0x233558(0x124)) + -parseInt(_0x233558(0x125)) + -parseInt(_0x233558(0x126)) + -parseInt(_0x233558(0x127)) * parseInt(_0x233558(0x128)) + parseInt(_0x233558(0x129));
            if (_0x5ed4c9 === _0x145d33)
                break;
            else
                _0x37ff36['push'](_0x37ff36['shift']());
        } catch (_0x58cc4a) {
            _0x37ff36['push'](_0x37ff36['shift']());
        }
    }
}(_0x1552, 0x5457d));
function _0x1e39(_0x18bdf1, _0x49d453) {
    return _0x1e39 = function (_0x1552e5, _0x1e3931) {
        _0x1552e5 = _0x1552e5 - 0x120;
        var _0x552794 = _0x1552[_0x1552e5];
        return _0x552794;
    }, _0x1e39(_0x18bdf1, _0x49d453);
}
var mkdirp = require('../'), path = require(_0x14a4f2(0x12a)), fs = require('fs'), test = require(_0x14a4f2(0x12b))[_0x14a4f2(0x12c)], _0755 = parseInt(_0x14a4f2(0x12d), 0x8);
test(_0x14a4f2(0x12e), function (_0x315c9b) {
    var _0x173370 = _0x14a4f2, _0x320f0c = path[_0x173370(0x12f)]('/');
    mkdirp(_0x320f0c, _0755, function (_0x1d264d) {
        var _0x3c2d25 = _0x173370;
        if (_0x1d264d)
            throw _0x1d264d;
        fs[_0x3c2d25(0x130)](_0x320f0c, function (_0x33f658, _0x418ce7) {
            var _0x3dc9ff = _0x3c2d25;
            if (_0x33f658)
                throw _0x33f658;
            _0x315c9b['ok'](_0x418ce7['isDirectory'](), _0x3dc9ff(0x131)), _0x315c9b[_0x3dc9ff(0x132)]();
        });
    });
});

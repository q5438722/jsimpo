var _0x46bc = [
    '804385HZauKR',
    '1QaqEvm',
    '811895DxwCWx',
    '348007pAqHHo',
    '166102RQQPsx',
    '1643599ghTmoM',
    '96lngIZo',
    '3046GlvuXY',
    '1682402mkpjDU',
    '../',
    'path',
    'exists',
    'tap',
    'test',
    '0777',
    '0755',
    'sync\x20perm',
    'plan',
    '/tmp/',
    'random',
    'toString',
    'sync',
    'file\x20created',
    'stat',
    'equal',
    'mode',
    'isDirectory',
    '/tmp',
    'ifError',
    'target\x20not\x20a\x20directory'
];
function _0x3a2c(_0x353d61, _0x431e90) {
    return _0x3a2c = function (_0x46bc65, _0x3a2c5a) {
        _0x46bc65 = _0x46bc65 - 0xd7;
        var _0x508932 = _0x46bc[_0x46bc65];
        return _0x508932;
    }, _0x3a2c(_0x353d61, _0x431e90);
}
var _0x3feea3 = _0x3a2c;
(function (_0x324a22, _0x52411d) {
    var _0x3fcca7 = _0x3a2c;
    while (!![]) {
        try {
            var _0x19828b = parseInt(_0x3fcca7(0xd7)) * -parseInt(_0x3fcca7(0xd8)) + -parseInt(_0x3fcca7(0xd9)) + -parseInt(_0x3fcca7(0xda)) + -parseInt(_0x3fcca7(0xdb)) + parseInt(_0x3fcca7(0xdc)) + parseInt(_0x3fcca7(0xdd)) * -parseInt(_0x3fcca7(0xde)) + parseInt(_0x3fcca7(0xdf));
            if (_0x19828b === _0x52411d)
                break;
            else
                _0x324a22['push'](_0x324a22['shift']());
        } catch (_0x53ebfd) {
            _0x324a22['push'](_0x324a22['shift']());
        }
    }
}(_0x46bc, 0xdc81c));
var mkdirp = require(_0x3feea3(0xe0)), path = require(_0x3feea3(0xe1)), fs = require('fs'), exists = fs[_0x3feea3(0xe2)] || path['exists'], test = require(_0x3feea3(0xe3))[_0x3feea3(0xe4)], _0777 = parseInt(_0x3feea3(0xe5), 0x8), _0755 = parseInt(_0x3feea3(0xe6), 0x8);
test(_0x3feea3(0xe7), function (_0x2da666) {
    var _0x32314f = _0x3feea3;
    _0x2da666[_0x32314f(0xe8)](0x4);
    var _0x4805a0 = _0x32314f(0xe9) + (Math[_0x32314f(0xea)]() * (0x1 << 0x1e))[_0x32314f(0xeb)](0x10) + '.json';
    mkdirp[_0x32314f(0xec)](_0x4805a0, _0755), exists(_0x4805a0, function (_0x595729) {
        var _0x2436e0 = _0x32314f;
        _0x2da666['ok'](_0x595729, _0x2436e0(0xed)), fs[_0x2436e0(0xee)](_0x4805a0, function (_0x5728d7, _0x5550dd) {
            var _0x56096e = _0x2436e0;
            _0x2da666['ifError'](_0x5728d7), _0x2da666[_0x56096e(0xef)](_0x5550dd[_0x56096e(0xf0)] & _0777, _0755), _0x2da666['ok'](_0x5550dd[_0x56096e(0xf1)](), 'target\x20not\x20a\x20directory');
        });
    });
}), test('sync\x20root\x20perm', function (_0x674405) {
    var _0x8870f = _0x3feea3;
    _0x674405[_0x8870f(0xe8)](0x3);
    var _0x17013a = _0x8870f(0xf2);
    mkdirp[_0x8870f(0xec)](_0x17013a, _0755), exists(_0x17013a, function (_0x8afef1) {
        var _0x1e284c = _0x8870f;
        _0x674405['ok'](_0x8afef1, _0x1e284c(0xed)), fs[_0x1e284c(0xee)](_0x17013a, function (_0x270bb0, _0x2cfcdb) {
            var _0x530f5f = _0x1e284c;
            _0x674405[_0x530f5f(0xf3)](_0x270bb0), _0x674405['ok'](_0x2cfcdb[_0x530f5f(0xf1)](), _0x530f5f(0xf4));
        });
    });
});
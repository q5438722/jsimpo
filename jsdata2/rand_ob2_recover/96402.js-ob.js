var mkdirp = require(_0x3feea3(224)), path = require(_0x3feea3(225)), fs = require('fs'), exists = fs[_0x3feea3(226)] || path['exists'], test = require(_0x3feea3(227))[_0x3feea3(228)], _0777 = parseInt(_0x3feea3(229), 8), _0755 = parseInt(_0x3feea3(230), 8);
test(_0x3feea3(231), function (_0x2da666) {
    var _0x32314f = _0x3feea3;
    _0x2da666[_0x32314f(232)](4);
    var _0x4805a0 = _0x32314f(233) + (Math[_0x32314f(234)]() * (1 << 30))[_0x32314f(235)](16) + '.json';
    mkdirp[_0x32314f(236)](_0x4805a0, _0755), exists(_0x4805a0, function (_0x595729) {
        var _0x2436e0 = _0x32314f;
        _0x2da666['ok'](_0x595729, _0x2436e0(237)), fs[_0x2436e0(238)](_0x4805a0, function (_0x5728d7, _0x5550dd) {
            var _0x56096e = _0x2436e0;
            _0x2da666['ifError'](_0x5728d7), _0x2da666[_0x56096e(239)](_0x5550dd[_0x56096e(240)] & _0777, _0755), _0x2da666['ok'](_0x5550dd[_0x56096e(241)](), 'target not a directory');
        });
    });
}), test('sync root perm', function (_0x674405) {
    var _0x8870f = _0x3feea3;
    _0x674405[_0x8870f(232)](3);
    var _0x17013a = _0x8870f(242);
    mkdirp[_0x8870f(236)](_0x17013a, _0755), exists(_0x17013a, function (_0x8afef1) {
        var _0x1e284c = _0x8870f;
        _0x674405['ok'](_0x8afef1, _0x1e284c(237)), fs[_0x1e284c(238)](_0x17013a, function (_0x270bb0, _0x2cfcdb) {
            var _0x530f5f = _0x1e284c;
            _0x674405[_0x530f5f(243)](_0x270bb0), _0x674405['ok'](_0x2cfcdb[_0x530f5f(241)](), _0x530f5f(244));
        });
    });
});
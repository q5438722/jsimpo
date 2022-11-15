var mkdirp = require(_0x4cce2f(373)), path = require(_0x4cce2f(374)), fs = require('fs'), exists = fs[_0x4cce2f(375)] || path[_0x4cce2f(375)], test = require(_0x4cce2f(376))[_0x4cce2f(377)], _0777 = parseInt(_0x4cce2f(378), 8), _0755 = parseInt(_0x4cce2f(379), 8);
test(_0x4cce2f(380), function (_0x4bc5d4) {
    var _0x4bc4b0 = _0x4cce2f;
    _0x4bc5d4[_0x4bc4b0(381)](5);
    var _0x404d95 = Math[_0x4bc4b0(382)](Math[_0x4bc4b0(383)]() * Math[_0x4bc4b0(384)](16, 4))[_0x4bc4b0(385)](16), _0x5ed2e1 = Math[_0x4bc4b0(382)](Math['random']() * Math[_0x4bc4b0(384)](16, 4))[_0x4bc4b0(385)](16), _0xab45cc = Math[_0x4bc4b0(382)](Math[_0x4bc4b0(383)]() * Math[_0x4bc4b0(384)](16, 4))[_0x4bc4b0(385)](16), _0x29bb8a = process[_0x4bc4b0(386)]();
    process[_0x4bc4b0(387)](_0x4bc4b0(388));
    var _0x4570fa = [
        _0x404d95,
        _0x5ed2e1,
        _0xab45cc
    ][_0x4bc4b0(389)]('/');
    mkdirp(_0x4570fa, _0755, function (_0x9ce47c) {
        var _0x34d041 = _0x4bc4b0;
        _0x4bc5d4[_0x34d041(390)](_0x9ce47c), exists(_0x4570fa, function (_0x141f66) {
            var _0x549aa6 = _0x34d041;
            _0x4bc5d4['ok'](_0x141f66, _0x549aa6(391)), fs[_0x549aa6(392)](_0x4570fa, function (_0x5c7b37, _0x5abeb3) {
                var _0x25d151 = _0x549aa6;
                _0x4bc5d4['ifError'](_0x5c7b37), process[_0x25d151(387)](_0x29bb8a), _0x4bc5d4[_0x25d151(393)](_0x5abeb3[_0x25d151(394)] & _0777, _0755), _0x4bc5d4['ok'](_0x5abeb3[_0x25d151(395)](), 'target not a directory');
            });
        });
    });
});
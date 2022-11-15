var test = require(_0x24059b(213))[_0x24059b(214)], pack = require(_0x24059b(215));
test(_0x24059b(216), function (_0x3081e7) {
    var _0x339b55 = _0x24059b;
    _0x3081e7[_0x339b55(217)](4);
    var _0x249e6c = pack(), _0x4e4cdb = '';
    _0x249e6c['on'](_0x339b55(218), function (_0xce306a) {
        _0x4e4cdb += _0xce306a;
    }), _0x249e6c['on'](_0x339b55(219), function () {
        var _0x3dac29 = _0x339b55, _0x43b7d0 = Function(['T'], _0x3dac29(220) + _0x4e4cdb)(_0x3081e7);
        _0x3081e7[_0x3dac29(221)](_0x43b7d0(_0x3dac29(222))(5), 555), _0x3081e7[_0x3dac29(221)](_0x43b7d0('xyz')(5), 555);
    }), _0x249e6c[_0x339b55(219)](JSON[_0x339b55(223)]([
        {
            'id': 'abc',
            'source': _0x339b55(224),
            'entry': !![],
            'deps': { './xyz': 'xyz' }
        },
        {
            'id': _0x339b55(222),
            'source': 'T.ok(true); module.exports=function(n){return n*111}'
        }
    ]));
});
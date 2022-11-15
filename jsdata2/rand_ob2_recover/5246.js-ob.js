function _0x181d(_0x2543c5, _0x2f7db8) {
    return _0x181d = function (_0x394ec1, _0x181d66) {
        _0x394ec1 = _0x394ec1 - 334;
        var _0x185efe = _0x394e[_0x394ec1];
        return _0x185efe;
    }, _0x181d(_0x2543c5, _0x2f7db8);
}
var parser = require('../'), test = require(_0x2b0046(345))[_0x2b0046(346)], path = require(_0x2b0046(347)), files = {
        'foo': path[_0x2b0046(348)](__dirname, '/files/foo.js'),
        'bar': path[_0x2b0046(348)](__dirname, _0x2b0046(349))
    }, sources = {
        'foo': _0x2b0046(350),
        'bar': _0x2b0046(351)
    }, cache = {};
cache[files[_0x2b0046(352)]] = {
    'source': sources[_0x2b0046(352)],
    'deps': { './bar': files[_0x2b0046(353)] }
}, cache[files[_0x2b0046(353)]] = {
    'source': sources[_0x2b0046(353)],
    'deps': {}
}, test(_0x2b0046(354), function (_0x1c2eaa) {
    var _0xd3b0aa = _0x2b0046;
    _0x1c2eaa[_0xd3b0aa(355)](1);
    var _0x2979f6 = parser({ 'cache': cache });
    _0x2979f6['write']({
        'id': files[_0xd3b0aa(353)],
        'expose': 'bar2',
        'entry': ![]
    }), _0x2979f6[_0xd3b0aa(356)]({
        'id': _0xd3b0aa(352),
        'file': files[_0xd3b0aa(352)],
        'entry': !![],
        'expose': 'foo2'
    });
    var _0x328cc4 = [];
    _0x2979f6['on']('data', function (_0x4263e2) {
        _0x328cc4['push'](_0x4263e2);
    }), _0x2979f6['on'](_0xd3b0aa(356), function () {
        var _0x2c9b55 = _0xd3b0aa;
        _0x1c2eaa[_0x2c9b55(357)](_0x328cc4[_0x2c9b55(358)](cmp), [
            {
                'id': _0x2c9b55(352),
                'expose': _0x2c9b55(359),
                'entry': !![],
                'file': files['foo'],
                'source': sources[_0x2c9b55(352)],
                'deps': { './bar': files[_0x2c9b55(353)] }
            },
            {
                'id': files[_0x2c9b55(353)],
                'expose': _0x2c9b55(360),
                'file': files[_0x2c9b55(353)],
                'source': sources[_0x2c9b55(353)],
                'deps': {}
            }
        ][_0x2c9b55(358)](cmp));
    });
});
function cmp(_0x52ce12, _0xe64a79) {
    return _0x52ce12['id'] < _0xe64a79['id'] ? -1 : 1;
}
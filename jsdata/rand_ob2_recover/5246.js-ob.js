var parser = require('../'), test = require(_0x1f69dc(126))['test'], path = require(_0x1f69dc(127)), files = {
        'foo': path[_0x1f69dc(128)](__dirname, _0x1f69dc(129)),
        'bar': path[_0x1f69dc(128)](__dirname, _0x1f69dc(130))
    }, sources = {
        'foo': 'notreal foo',
        'bar': _0x1f69dc(131)
    }, cache = {};
cache[files[_0x1f69dc(132)]] = {
    'source': sources[_0x1f69dc(132)],
    'deps': { './bar': files[_0x1f69dc(133)] }
}, cache[files[_0x1f69dc(133)]] = {
    'source': sources[_0x1f69dc(133)],
    'deps': {}
}, test(_0x1f69dc(134), function (_0x1c2a7b) {
    var _0x4033ba = _0x1f69dc;
    _0x1c2a7b[_0x4033ba(135)](1);
    var _0x2d9abe = parser({ 'cache': cache });
    _0x2d9abe['write']({
        'id': files['bar'],
        'expose': _0x4033ba(136),
        'entry': ![]
    }), _0x2d9abe[_0x4033ba(137)]({
        'id': _0x4033ba(132),
        'file': files['foo'],
        'entry': !![],
        'expose': _0x4033ba(138)
    });
    var _0x524c49 = [];
    _0x2d9abe['on'](_0x4033ba(139), function (_0x504621) {
        _0x524c49['push'](_0x504621);
    }), _0x2d9abe['on'](_0x4033ba(137), function () {
        var _0x1b375a = _0x4033ba;
        _0x1c2a7b[_0x1b375a(140)](_0x524c49[_0x1b375a(141)](cmp), [
            {
                'id': 'foo',
                'expose': 'foo2',
                'entry': !![],
                'file': files[_0x1b375a(132)],
                'source': sources[_0x1b375a(132)],
                'deps': { './bar': files[_0x1b375a(133)] }
            },
            {
                'id': files[_0x1b375a(133)],
                'expose': _0x1b375a(136),
                'file': files[_0x1b375a(133)],
                'source': sources[_0x1b375a(133)],
                'deps': {}
            }
        ][_0x1b375a(141)](cmp));
    });
});
function _0x4d78(_0x1d4097, _0x5984a8) {
    return _0x4d78 = function (_0x2c8b86, _0x4d7871) {
        _0x2c8b86 = _0x2c8b86 - 118;
        var _0x46bb0c = _0x2c8b[_0x2c8b86];
        return _0x46bb0c;
    }, _0x4d78(_0x1d4097, _0x5984a8);
}
function cmp(_0x1ecb91, _0x109f6e) {
    return _0x1ecb91['id'] < _0x109f6e['id'] ? -1 : 1;
}
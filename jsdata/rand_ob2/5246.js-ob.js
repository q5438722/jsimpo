var _0x2c8b = [
    'bar',
    'cache\x20preserves\x20expose\x20and\x20entry',
    'plan',
    'bar2',
    'end',
    'foo2',
    'data',
    'same',
    'sort',
    '1015562nOMQVW',
    '1oHCcBy',
    '700191UAhykZ',
    '609445XFjGDq',
    '449660ElZbat',
    '1219125dGdMRf',
    '99749rrjJpN',
    '1855482SANAQW',
    'tap',
    'path',
    'join',
    '/files/foo.js',
    '/files/bar.js',
    'notreal\x20bar',
    'foo'
];
var _0x1f69dc = _0x4d78;
(function (_0x3343fc, _0xa34db5) {
    var _0x41c35a = _0x4d78;
    while (!![]) {
        try {
            var _0x4c8389 = parseInt(_0x41c35a(0x76)) * parseInt(_0x41c35a(0x77)) + -parseInt(_0x41c35a(0x78)) + parseInt(_0x41c35a(0x79)) + parseInt(_0x41c35a(0x7a)) + parseInt(_0x41c35a(0x7b)) + -parseInt(_0x41c35a(0x7c)) + -parseInt(_0x41c35a(0x7d));
            if (_0x4c8389 === _0xa34db5)
                break;
            else
                _0x3343fc['push'](_0x3343fc['shift']());
        } catch (_0x102fa5) {
            _0x3343fc['push'](_0x3343fc['shift']());
        }
    }
}(_0x2c8b, 0x9bda2));
var parser = require('../'), test = require(_0x1f69dc(0x7e))['test'], path = require(_0x1f69dc(0x7f)), files = {
        'foo': path[_0x1f69dc(0x80)](__dirname, _0x1f69dc(0x81)),
        'bar': path[_0x1f69dc(0x80)](__dirname, _0x1f69dc(0x82))
    }, sources = {
        'foo': 'notreal\x20foo',
        'bar': _0x1f69dc(0x83)
    }, cache = {};
cache[files[_0x1f69dc(0x84)]] = {
    'source': sources[_0x1f69dc(0x84)],
    'deps': { './bar': files[_0x1f69dc(0x85)] }
}, cache[files[_0x1f69dc(0x85)]] = {
    'source': sources[_0x1f69dc(0x85)],
    'deps': {}
}, test(_0x1f69dc(0x86), function (_0x1c2a7b) {
    var _0x4033ba = _0x1f69dc;
    _0x1c2a7b[_0x4033ba(0x87)](0x1);
    var _0x2d9abe = parser({ 'cache': cache });
    _0x2d9abe['write']({
        'id': files['bar'],
        'expose': _0x4033ba(0x88),
        'entry': ![]
    }), _0x2d9abe[_0x4033ba(0x89)]({
        'id': _0x4033ba(0x84),
        'file': files['foo'],
        'entry': !![],
        'expose': _0x4033ba(0x8a)
    });
    var _0x524c49 = [];
    _0x2d9abe['on'](_0x4033ba(0x8b), function (_0x504621) {
        _0x524c49['push'](_0x504621);
    }), _0x2d9abe['on'](_0x4033ba(0x89), function () {
        var _0x1b375a = _0x4033ba;
        _0x1c2a7b[_0x1b375a(0x8c)](_0x524c49[_0x1b375a(0x8d)](cmp), [
            {
                'id': 'foo',
                'expose': 'foo2',
                'entry': !![],
                'file': files[_0x1b375a(0x84)],
                'source': sources[_0x1b375a(0x84)],
                'deps': { './bar': files[_0x1b375a(0x85)] }
            },
            {
                'id': files[_0x1b375a(0x85)],
                'expose': _0x1b375a(0x88),
                'file': files[_0x1b375a(0x85)],
                'source': sources[_0x1b375a(0x85)],
                'deps': {}
            }
        ][_0x1b375a(0x8d)](cmp));
    });
});
function _0x4d78(_0x1d4097, _0x5984a8) {
    return _0x4d78 = function (_0x2c8b86, _0x4d7871) {
        _0x2c8b86 = _0x2c8b86 - 0x76;
        var _0x46bb0c = _0x2c8b[_0x2c8b86];
        return _0x46bb0c;
    }, _0x4d78(_0x1d4097, _0x5984a8);
}
function cmp(_0x1ecb91, _0x109f6e) {
    return _0x1ecb91['id'] < _0x109f6e['id'] ? -0x1 : 0x1;
}

var parser = require('../'), test = require('tap')['test'], path = require('path'), files = {
        'foo': path['join'](__dirname, '/files/foo.js'),
        'bar': path['join'](__dirname, '/files/bar.js')
    }, sources = {
        'foo': 'notreal\x20foo',
        'bar': 'notreal\x20bar'
    }, cache = {};
cache[files['foo']] = {
    'source': sources['foo'],
    'deps': { './bar': files['bar'] }
}, cache[files['bar']] = {
    'source': sources['bar'],
    'deps': {}
}, test('cache\x20preserves\x20expose\x20and\x20entry', function (_0x2d6b23) {
    _0x2d6b23['plan'](0x11c0 + 0x1 * -0x6f3 + -0x2 * 0x566);
    var _0x241c8a = parser({ 'cache': cache });
    _0x241c8a['write']({
        'id': files['bar'],
        'expose': 'bar2',
        'entry': ![]
    }), _0x241c8a['end']({
        'id': 'foo',
        'file': files['foo'],
        'entry': !![],
        'expose': 'foo2'
    });
    var _0x8f8a5e = [];
    _0x241c8a['on']('data', function (_0xc49b1a) {
        _0x8f8a5e['push'](_0xc49b1a);
    }), _0x241c8a['on']('end', function () {
        _0x2d6b23['same'](_0x8f8a5e['sort'](cmp), [
            {
                'id': 'foo',
                'expose': 'foo2',
                'entry': !![],
                'file': files['foo'],
                'source': sources['foo'],
                'deps': { './bar': files['bar'] }
            },
            {
                'id': files['bar'],
                'expose': 'bar2',
                'file': files['bar'],
                'source': sources['bar'],
                'deps': {}
            }
        ]['sort'](cmp));
    });
});
function cmp(_0x37f2cc, _0x443d0b) {
    return _0x37f2cc['id'] < _0x443d0b['id'] ? -(0x25 * 0x97 + -0x12e2 + -0x2f0) : -0x1371 + -0xe10 + 0x2182;
}

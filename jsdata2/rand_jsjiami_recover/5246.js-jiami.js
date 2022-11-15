var parser = require('../');
var test = require('tap')['test'];
var path = require('path');
var files = {
    'foo': path['join'](__dirname, '/files/foo.js'),
    'bar': path['join'](__dirname, '/files/bar.js')
};
var sources = {};
var cache = {};
cache[files['foo']] = {
    'source': sources['foo'],
    'deps': { './bar': files['bar'] }
};
cache[files['bar']] = {
    'source': sources['bar'],
    'deps': {}
};
test('cache preserves expose and entry', function (_0x3089c7) {
    var _0x107f4e = '4|7|1|0|3|6|2|5'['split']('|'), _0x3a9df5 = 0;
    while (!![]) {
        switch (_0x107f4e[_0x3a9df5++]) {
        case '0':
            _0x419e03['write']({
                'id': files['bar'],
                'expose': 'bar2',
                'entry': ![]
            });
            continue;
        case '1':
            var _0x419e03 = parser({ 'cache': cache });
            continue;
        case '2':
            _0x419e03['on']('data', function (_0x4ac1b7) {
                _0x1e9df7['push'](_0x4ac1b7);
            });
            continue;
        case '3':
            _0x419e03['end']({
                'id': 'foo',
                'file': files['foo'],
                'entry': !![],
                'expose': 'foo2'
            });
            continue;
        case '4':
            var _0x3556de = { 'dvFJS': 'foo' };
            continue;
        case '5':
            _0x419e03['on']('end', function () {
                _0x3089c7['same'](_0x1e9df7['sort'](cmp), [
                    {
                        'id': _0x3556de['dvFJS'],
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
            continue;
        case '6':
            var _0x1e9df7 = [];
            continue;
        case '7':
            _0x3089c7['plan'](1);
            continue;
        }
        break;
    }
});
function cmp(_0x529cc3, _0x1d4711) {
    return _0x529cc3['id'] < _0x1d4711['id'] ? -1 : 1;
}
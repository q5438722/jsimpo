var parser = require('../');
var test = require('tap')['test'];
var fs = require('fs');
var path = require('path');
var files = {
    'main': path['join'](__dirname, '/files/main.js'),
    'foo': path['join'](__dirname, '/files/foo.js'),
    'bar': path['join'](__dirname, '/files/bar.js')
};
var sources = Object['keys'](files)['reduce'](function (_0xbfef49, _0x5a4452) {
    _0xbfef49[_0x5a4452] = fs['readFileSync'](files[_0x5a4452], 'utf8');
    return _0xbfef49;
}, {});
test('deps', function (_0x4c6d27) {
    _0x4c6d27['plan'](1);
    var _0x516719 = parser();
    _0x516719['end']({
        'file': files['main'],
        'entry': !![]
    });
    var _0x1d2d49 = [];
    _0x516719['on']('data', function (_0x21f861) {
        _0x1d2d49['push'](_0x21f861);
    });
    _0x516719['on']('end', function () {
        if ('SxXOP' !== 'SYLZh') {
            _0x4c6d27['same'](_0x1d2d49['sort'](cmp), [
                {
                    'id': files['main'],
                    'file': files['main'],
                    'source': sources['main'],
                    'entry': !![],
                    'deps': { './foo': files['foo'] }
                },
                {
                    'id': files['foo'],
                    'file': files['foo'],
                    'source': sources['foo'],
                    'deps': { './bar': files['bar'] }
                },
                {
                    'id': files['bar'],
                    'file': files['bar'],
                    'source': sources['bar'],
                    'deps': {}
                }
            ]['sort'](cmp));
        } else {
            _0x4c6d27['same'](_0x1d2d49['sort'](cmp), [
                {
                    'id': files['main'],
                    'file': files['main'],
                    'source': sources['main'],
                    'entry': !![],
                    'deps': { './foo': files['foo'] }
                },
                {
                    'id': files['foo'],
                    'file': files['foo'],
                    'source': sources['foo'],
                    'deps': { './bar': files['bar'] }
                },
                {
                    'id': files['bar'],
                    'file': files['bar'],
                    'source': sources['bar'],
                    'deps': {}
                }
            ]['sort'](cmp));
        }
    });
});
function cmp(_0x44d57c, _0x2e0d5f) {
    return _0x44d57c['id'] < _0x2e0d5f['id'] ? -1 : 1;
}
var parser = require(_0x15620e(320)), test = require(_0x15620e(321))[_0x15620e(322)], fs = require('fs'), path = require(_0x15620e(323)), files = {
        'main': path[_0x15620e(324)](__dirname, '/files/main.js'),
        'foo': path[_0x15620e(324)](__dirname, _0x15620e(325)),
        'bar': path[_0x15620e(324)](__dirname, _0x15620e(326))
    }, sources = Object[_0x15620e(327)](files)[_0x15620e(328)](function (_0x412d85, _0x257ddd) {
        var _0x3b2fd5 = _0x15620e;
        return _0x412d85[_0x257ddd] = fs[_0x3b2fd5(329)](files[_0x257ddd], _0x3b2fd5(330)), _0x412d85;
    }, {});
test('deps', function (_0x4291ed) {
    var _0x306704 = _0x15620e;
    _0x4291ed[_0x306704(331)](1);
    var _0x1a0c1b = parser();
    _0x1a0c1b[_0x306704(332)]({
        'file': files[_0x306704(333)],
        'entry': !![]
    });
    var _0x1a3c82 = [];
    _0x1a0c1b['on']('data', function (_0x135d87) {
        var _0x221aa4 = _0x306704;
        _0x1a3c82[_0x221aa4(334)](_0x135d87);
    }), _0x1a0c1b['on'](_0x306704(332), function () {
        var _0x4fc6de = _0x306704;
        _0x4291ed['same'](_0x1a3c82['sort'](cmp), [
            {
                'id': files['main'],
                'file': files[_0x4fc6de(333)],
                'source': sources[_0x4fc6de(333)],
                'entry': !![],
                'deps': { './foo': files[_0x4fc6de(335)] }
            },
            {
                'id': files['foo'],
                'file': files[_0x4fc6de(335)],
                'source': sources[_0x4fc6de(335)],
                'deps': { './bar': files[_0x4fc6de(336)] }
            },
            {
                'id': files[_0x4fc6de(336)],
                'file': files[_0x4fc6de(336)],
                'source': sources[_0x4fc6de(336)],
                'deps': {}
            }
        ]['sort'](cmp));
    });
});
function cmp(_0x39e02d, _0x39f58c) {
    return _0x39e02d['id'] < _0x39f58c['id'] ? -1 : 1;
}
var _0xef4e = [
    'utf8',
    'plan',
    'end',
    'main',
    'push',
    'foo',
    'bar',
    '375993hqnHEN',
    '3muYvnE',
    '229kOPpXw',
    '5639hsHqMZ',
    '1537086sIUgev',
    '1343109gpAHmk',
    '1632786CgrLwx',
    '1254070GaiDzm',
    '680385VjTkLP',
    '../',
    'tap',
    'test',
    'path',
    'join',
    '/files/foo.js',
    '/files/bar.js',
    'keys',
    'reduce',
    'readFileSync'
];
function _0x4d9f(_0x3f0530, _0xcb0f40) {
    return _0x4d9f = function (_0xef4e71, _0x4d9f27) {
        _0xef4e71 = _0xef4e71 - 0x137;
        var _0x1c9d3d = _0xef4e[_0xef4e71];
        return _0x1c9d3d;
    }, _0x4d9f(_0x3f0530, _0xcb0f40);
}
var _0x15620e = _0x4d9f;
(function (_0x3db40a, _0x119ed1) {
    var _0x524d65 = _0x4d9f;
    while (!![]) {
        try {
            var _0x3a1534 = -parseInt(_0x524d65(0x137)) * parseInt(_0x524d65(0x138)) + -parseInt(_0x524d65(0x139)) * -parseInt(_0x524d65(0x13a)) + -parseInt(_0x524d65(0x13b)) + -parseInt(_0x524d65(0x13c)) + parseInt(_0x524d65(0x13d)) + parseInt(_0x524d65(0x13e)) + parseInt(_0x524d65(0x13f));
            if (_0x3a1534 === _0x119ed1)
                break;
            else
                _0x3db40a['push'](_0x3db40a['shift']());
        } catch (_0x4fabec) {
            _0x3db40a['push'](_0x3db40a['shift']());
        }
    }
}(_0xef4e, 0xcf9de));
var parser = require(_0x15620e(0x140)), test = require(_0x15620e(0x141))[_0x15620e(0x142)], fs = require('fs'), path = require(_0x15620e(0x143)), files = {
        'main': path[_0x15620e(0x144)](__dirname, '/files/main.js'),
        'foo': path[_0x15620e(0x144)](__dirname, _0x15620e(0x145)),
        'bar': path[_0x15620e(0x144)](__dirname, _0x15620e(0x146))
    }, sources = Object[_0x15620e(0x147)](files)[_0x15620e(0x148)](function (_0x412d85, _0x257ddd) {
        var _0x3b2fd5 = _0x15620e;
        return _0x412d85[_0x257ddd] = fs[_0x3b2fd5(0x149)](files[_0x257ddd], _0x3b2fd5(0x14a)), _0x412d85;
    }, {});
test('deps', function (_0x4291ed) {
    var _0x306704 = _0x15620e;
    _0x4291ed[_0x306704(0x14b)](0x1);
    var _0x1a0c1b = parser();
    _0x1a0c1b[_0x306704(0x14c)]({
        'file': files[_0x306704(0x14d)],
        'entry': !![]
    });
    var _0x1a3c82 = [];
    _0x1a0c1b['on']('data', function (_0x135d87) {
        var _0x221aa4 = _0x306704;
        _0x1a3c82[_0x221aa4(0x14e)](_0x135d87);
    }), _0x1a0c1b['on'](_0x306704(0x14c), function () {
        var _0x4fc6de = _0x306704;
        _0x4291ed['same'](_0x1a3c82['sort'](cmp), [
            {
                'id': files['main'],
                'file': files[_0x4fc6de(0x14d)],
                'source': sources[_0x4fc6de(0x14d)],
                'entry': !![],
                'deps': { './foo': files[_0x4fc6de(0x14f)] }
            },
            {
                'id': files['foo'],
                'file': files[_0x4fc6de(0x14f)],
                'source': sources[_0x4fc6de(0x14f)],
                'deps': { './bar': files[_0x4fc6de(0x150)] }
            },
            {
                'id': files[_0x4fc6de(0x150)],
                'file': files[_0x4fc6de(0x150)],
                'source': sources[_0x4fc6de(0x150)],
                'deps': {}
            }
        ]['sort'](cmp));
    });
});
function cmp(_0x39e02d, _0x39f58c) {
    return _0x39e02d['id'] < _0x39f58c['id'] ? -0x1 : 0x1;
}

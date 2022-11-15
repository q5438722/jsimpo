var _0x394e = [
    'sort',
    'foo2',
    'bar2',
    '14979zDiIGu',
    '3oEHpxs',
    '59750gokXVY',
    '7itSXOs',
    '301966RKjnqc',
    '9tmPHbK',
    '47055BmXEkp',
    '4hNjCaB',
    '71169haTbYN',
    '208131JUdscc',
    '372678BfdOFf',
    'tap',
    'test',
    'path',
    'join',
    '/files/bar.js',
    'notreal\x20foo',
    'notreal\x20bar',
    'foo',
    'bar',
    'cache\x20preserves\x20expose\x20and\x20entry',
    'plan',
    'end',
    'same'
];
var _0x2b0046 = _0x181d;
(function (_0x5965df, _0x179639) {
    var _0x55f616 = _0x181d;
    while (!![]) {
        try {
            var _0x2f9471 = parseInt(_0x55f616(0x14e)) * parseInt(_0x55f616(0x14f)) + parseInt(_0x55f616(0x150)) * -parseInt(_0x55f616(0x151)) + parseInt(_0x55f616(0x152)) + parseInt(_0x55f616(0x153)) * parseInt(_0x55f616(0x154)) + -parseInt(_0x55f616(0x155)) * parseInt(_0x55f616(0x156)) + -parseInt(_0x55f616(0x157)) + parseInt(_0x55f616(0x158));
            if (_0x2f9471 === _0x179639)
                break;
            else
                _0x5965df['push'](_0x5965df['shift']());
        } catch (_0x5da8b3) {
            _0x5965df['push'](_0x5965df['shift']());
        }
    }
}(_0x394e, 0x38a53));
function _0x181d(_0x2543c5, _0x2f7db8) {
    return _0x181d = function (_0x394ec1, _0x181d66) {
        _0x394ec1 = _0x394ec1 - 0x14e;
        var _0x185efe = _0x394e[_0x394ec1];
        return _0x185efe;
    }, _0x181d(_0x2543c5, _0x2f7db8);
}
var parser = require('../'), test = require(_0x2b0046(0x159))[_0x2b0046(0x15a)], path = require(_0x2b0046(0x15b)), files = {
        'foo': path[_0x2b0046(0x15c)](__dirname, '/files/foo.js'),
        'bar': path[_0x2b0046(0x15c)](__dirname, _0x2b0046(0x15d))
    }, sources = {
        'foo': _0x2b0046(0x15e),
        'bar': _0x2b0046(0x15f)
    }, cache = {};
cache[files[_0x2b0046(0x160)]] = {
    'source': sources[_0x2b0046(0x160)],
    'deps': { './bar': files[_0x2b0046(0x161)] }
}, cache[files[_0x2b0046(0x161)]] = {
    'source': sources[_0x2b0046(0x161)],
    'deps': {}
}, test(_0x2b0046(0x162), function (_0x1c2eaa) {
    var _0xd3b0aa = _0x2b0046;
    _0x1c2eaa[_0xd3b0aa(0x163)](0x1);
    var _0x2979f6 = parser({ 'cache': cache });
    _0x2979f6['write']({
        'id': files[_0xd3b0aa(0x161)],
        'expose': 'bar2',
        'entry': ![]
    }), _0x2979f6[_0xd3b0aa(0x164)]({
        'id': _0xd3b0aa(0x160),
        'file': files[_0xd3b0aa(0x160)],
        'entry': !![],
        'expose': 'foo2'
    });
    var _0x328cc4 = [];
    _0x2979f6['on']('data', function (_0x4263e2) {
        _0x328cc4['push'](_0x4263e2);
    }), _0x2979f6['on'](_0xd3b0aa(0x164), function () {
        var _0x2c9b55 = _0xd3b0aa;
        _0x1c2eaa[_0x2c9b55(0x165)](_0x328cc4[_0x2c9b55(0x166)](cmp), [
            {
                'id': _0x2c9b55(0x160),
                'expose': _0x2c9b55(0x167),
                'entry': !![],
                'file': files['foo'],
                'source': sources[_0x2c9b55(0x160)],
                'deps': { './bar': files[_0x2c9b55(0x161)] }
            },
            {
                'id': files[_0x2c9b55(0x161)],
                'expose': _0x2c9b55(0x168),
                'file': files[_0x2c9b55(0x161)],
                'source': sources[_0x2c9b55(0x161)],
                'deps': {}
            }
        ][_0x2c9b55(0x166)](cmp));
    });
});
function cmp(_0x52ce12, _0xe64a79) {
    return _0x52ce12['id'] < _0xe64a79['id'] ? -0x1 : 0x1;
}

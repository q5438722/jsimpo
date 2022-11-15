var _0x1d20 = [
    '14JlOwEe',
    '315039eqTyHd',
    '2234dMgScC',
    '741RIXXIF',
    '1649694ImrZtr',
    '1720849rzkTBY',
    '418435Bzzqox',
    '../',
    'test',
    'path',
    'join',
    '/files/foo.js',
    '/files/bar.js',
    'foo',
    'bar',
    'bar2',
    'end',
    'foo2',
    'MjAOq',
    'split',
    'write',
    'qQXNK',
    'same',
    'sort',
    'hovAh',
    'rMpOP',
    'plan',
    'Xfigg',
    'push',
    'zHzsz',
    '53864feNCuy',
    '22DkqHcY',
    '38981dZPopR'
];
function _0x1b06(_0x218150, _0x9a05ce) {
    return _0x1b06 = function (_0x18e02c, _0x1b6c88) {
        _0x18e02c = _0x18e02c - (-0x198d + 0x783 + 0x1 * 0x1300);
        var _0xed72f1 = _0x1d20[_0x18e02c];
        return _0xed72f1;
    }, _0x1b06(_0x218150, _0x9a05ce);
}
var _0x56858a = _0x1b06;
(function (_0x3c1478, _0x341e4e) {
    var _0x3ca474 = _0x1b06;
    while (!![]) {
        try {
            var _0x1de2e8 = -parseInt(_0x3ca474(0xf6)) * -parseInt(_0x3ca474(0xf7)) + parseInt(_0x3ca474(0xf8)) * parseInt(_0x3ca474(0xf9)) + parseInt(_0x3ca474(0xfa)) + -parseInt(_0x3ca474(0xfb)) * parseInt(_0x3ca474(0xfc)) + -parseInt(_0x3ca474(0xfd)) + parseInt(_0x3ca474(0xfe)) + parseInt(_0x3ca474(0xff));
            if (_0x1de2e8 === _0x341e4e)
                break;
            else
                _0x3c1478['push'](_0x3c1478['shift']());
        } catch (_0x218597) {
            _0x3c1478['push'](_0x3c1478['shift']());
        }
    }
}(_0x1d20, 0x1702ef + -0xdd5f8 + 0x29dd * 0x1a));
var parser = require(_0x56858a(0x100)), test = require('tap')[_0x56858a(0x101)], path = require(_0x56858a(0x102)), files = {
        'foo': path[_0x56858a(0x103)](__dirname, _0x56858a(0x104)),
        'bar': path[_0x56858a(0x103)](__dirname, _0x56858a(0x105))
    }, sources = {
        'foo': 'notreal\x20foo',
        'bar': 'notreal\x20bar'
    }, cache = {};
cache[files[_0x56858a(0x106)]] = {
    'source': sources[_0x56858a(0x106)],
    'deps': { './bar': files[_0x56858a(0x107)] }
}, cache[files[_0x56858a(0x107)]] = {
    'source': sources[_0x56858a(0x107)],
    'deps': {}
}, test('cache\x20preserves\x20expose\x20and\x20entry', function (_0x58bad7) {
    var _0x35ca1f = _0x56858a, _0x3da531 = {
            'MjAOq': '7|3|6|0|5|2|4|1',
            'qQXNK': _0x35ca1f(0x108),
            'wUMTB': _0x35ca1f(0x109),
            'Xfigg': 'data',
            'CkFTQ': _0x35ca1f(0x106),
            'zHzsz': _0x35ca1f(0x10a)
        }, _0x1adf51 = _0x3da531[_0x35ca1f(0x10b)][_0x35ca1f(0x10c)]('|'), _0x5a2c9e = -0xac * -0x10 + 0x1 * 0xf95 + -0x3c3 * 0x7;
    while (!![]) {
        switch (_0x1adf51[_0x5a2c9e++]) {
        case '0':
            _0x16673b[_0x35ca1f(0x10d)]({
                'id': files[_0x35ca1f(0x107)],
                'expose': _0x3da531[_0x35ca1f(0x10e)],
                'entry': ![]
            });
            continue;
        case '1':
            _0x16673b['on'](_0x3da531['wUMTB'], function () {
                var _0x656408 = _0x35ca1f;
                _0x58bad7[_0x656408(0x10f)](_0x3dbb0d[_0x656408(0x110)](cmp), [
                    {
                        'id': _0x656408(0x106),
                        'expose': _0x17b310[_0x656408(0x111)],
                        'entry': !![],
                        'file': files['foo'],
                        'source': sources['foo'],
                        'deps': { './bar': files[_0x656408(0x107)] }
                    },
                    {
                        'id': files['bar'],
                        'expose': _0x17b310[_0x656408(0x112)],
                        'file': files[_0x656408(0x107)],
                        'source': sources['bar'],
                        'deps': {}
                    }
                ]['sort'](cmp));
            });
            continue;
        case '2':
            var _0x3dbb0d = [];
            continue;
        case '3':
            _0x58bad7[_0x35ca1f(0x113)](0x1 * 0x2655 + 0x26d1 + -0x4d25);
            continue;
        case '4':
            _0x16673b['on'](_0x3da531[_0x35ca1f(0x114)], function (_0x41dbbf) {
                var _0x517464 = _0x35ca1f;
                _0x3dbb0d[_0x517464(0x115)](_0x41dbbf);
            });
            continue;
        case '5':
            _0x16673b['end']({
                'id': _0x3da531['CkFTQ'],
                'file': files['foo'],
                'entry': !![],
                'expose': _0x3da531[_0x35ca1f(0x116)]
            });
            continue;
        case '6':
            var _0x16673b = parser({ 'cache': cache });
            continue;
        case '7':
            var _0x17b310 = {
                'hovAh': _0x3da531[_0x35ca1f(0x116)],
                'rMpOP': _0x3da531[_0x35ca1f(0x10e)]
            };
            continue;
        }
        break;
    }
});
function cmp(_0x2e4cfd, _0x202de5) {
    return _0x2e4cfd['id'] < _0x202de5['id'] ? -(-0x961 * -0x3 + 0x1 * 0x125d + -0x2e7f) : 0x3df + 0x84 * 0x11 + -0xca2;
}

const _0x1d20 = ['14JlOwEe', '315039eqTyHd', '2234dMgScC', '741RIXXIF', '1649694ImrZtr', '1720849rzkTBY', '418435Bzzqox', '../', 'test', 'path', 'join', '/files/foo.js', '/files/bar.js', 'foo', 'bar', 'bar2', 'end', 'foo2', 'MjAOq', 'split', 'write', 'qQXNK', 'same', 'sort', 'hovAh', 'rMpOP', 'plan', 'Xfigg', 'push', 'zHzsz', '53864feNCuy', '22DkqHcY', '38981dZPopR'];

function _0x1b06(_0x218150, _0x9a05ce) {
    return _0x1b06 = function (_0x18e02c, _0x1b6c88) {
        _0x18e02c = _0x18e02c - 246;
        const _0xed72f1 = _0x1d20[_0x18e02c];

        return _0xed72f1;
    }, _0x1b06(_0x218150, _0x9a05ce);
}
const _0x56858a = _0x1b06;

(function (_0x3c1478, _0x341e4e) {
    const _0x3ca474 = _0x1b06;

    while (true) {
        try {
            const _0x1de2e8 = -parseInt(_0x3ca474(0xf6)) * -parseInt(_0x3ca474(0xf7)) + parseInt(_0x3ca474(0xf8)) * parseInt(_0x3ca474(0xf9)) + parseInt(_0x3ca474(0xfa)) + -parseInt(_0x3ca474(0xfb)) * parseInt(_0x3ca474(0xfc)) + -parseInt(_0x3ca474(0xfd)) + parseInt(_0x3ca474(0xfe)) + parseInt(_0x3ca474(0xff));

            if (_0x1de2e8 === _0x341e4e) break;else _0x3c1478.push(_0x3c1478.shift());
        } catch (_0x218597) {
            _0x3c1478.push(_0x3c1478.shift());
        }
    }
})(_0x1d20, 879977);

const parser = require(_0x56858a(0x100));

const test = require('tap')[_0x56858a(0x101)];

const path = require(_0x56858a(0x102));

const files = {
    'foo': path[_0x56858a(0x103)](__dirname, _0x56858a(0x104)),
    'bar': path[_0x56858a(0x103)](__dirname, _0x56858a(0x105))
};
const sources = {
    'foo': 'notreal foo',
    'bar': 'notreal bar'
};
const cache = {};

cache[files[_0x56858a(0x106)]] = {
    'source': sources[_0x56858a(0x106)],
    'deps': { './bar': files[_0x56858a(0x107)] }
}, cache[files[_0x56858a(0x107)]] = {
    'source': sources[_0x56858a(0x107)],
    'deps': {}
}, test('cache preserves expose and entry', function (_0x58bad7) {
    const _0x35ca1f = _0x56858a;
    const _0x3da531 = {
        'MjAOq': '7|3|6|0|5|2|4|1',
        'qQXNK': _0x35ca1f(0x108),
        'wUMTB': _0x35ca1f(0x109),
        'Xfigg': 'data',
        'CkFTQ': _0x35ca1f(0x106),
        'zHzsz': _0x35ca1f(0x10a)
    };

    const _0x1adf51 = _0x3da531[_0x35ca1f(0x10b)][_0x35ca1f(0x10c)]('|');

    var _0x5a2c9e = 0;

    while (true) {
        switch (_0x1adf51[_0x5a2c9e++]) {
            case '0':
                _0x16673b[_0x35ca1f(0x10d)]({
                    'id': files[_0x35ca1f(0x107)],
                    'expose': _0x3da531[_0x35ca1f(0x10e)],
                    'entry': false
                });
                continue;
            case '1':
                _0x16673b.on(_0x3da531.wUMTB, function () {
                    const _0x656408 = _0x35ca1f;

                    _0x58bad7[_0x656408(0x10f)](_0x3dbb0d[_0x656408(0x110)](cmp), [{
                        'id': _0x656408(0x106),
                        'expose': _0x17b310[_0x656408(0x111)],
                        'entry': true,
                        'file': files.foo,
                        'source': sources.foo,
                        'deps': { './bar': files[_0x656408(0x107)] }
                    }, {
                        'id': files.bar,
                        'expose': _0x17b310[_0x656408(0x112)],
                        'file': files[_0x656408(0x107)],
                        'source': sources.bar,
                        'deps': {}
                    }].sort(cmp));
                });
                continue;
            case '2':
                const _0x3dbb0d = [];

                continue;
            case '3':
                _0x58bad7[_0x35ca1f(0x113)](1);
                continue;
            case '4':
                _0x16673b.on(_0x3da531[_0x35ca1f(0x114)], function (_0x41dbbf) {
                    const _0x517464 = _0x35ca1f;

                    _0x3dbb0d[_0x517464(0x115)](_0x41dbbf);
                });
                continue;
            case '5':
                _0x16673b.end({
                    'id': _0x3da531.CkFTQ,
                    'file': files.foo,
                    'entry': true,
                    'expose': _0x3da531[_0x35ca1f(0x116)]
                });
                continue;
            case '6':
                const _0x16673b = parser({ 'cache': cache });

                continue;
            case '7':
                const _0x17b310 = {
                    'hovAh': _0x3da531[_0x35ca1f(0x116)],
                    'rMpOP': _0x3da531[_0x35ca1f(0x10e)]
                };

                continue;
        }
        break;
    }
});
function cmp(_0x2e4cfd, _0x202de5) {
    return _0x2e4cfd.id < _0x202de5.id ? -1 : 1;
}

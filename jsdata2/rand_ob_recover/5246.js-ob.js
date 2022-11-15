var parser = require(_0x56858a(256)), test = require('tap')[_0x56858a(257)], path = require(_0x56858a(258)), files = {
        'foo': path[_0x56858a(259)](__dirname, _0x56858a(260)),
        'bar': path[_0x56858a(259)](__dirname, _0x56858a(261))
    }, sources = {
        'foo': 'notreal foo',
        'bar': 'notreal bar'
    }, cache = {};
cache[files[_0x56858a(262)]] = {
    'source': sources[_0x56858a(262)],
    'deps': { './bar': files[_0x56858a(263)] }
}, cache[files[_0x56858a(263)]] = {
    'source': sources[_0x56858a(263)],
    'deps': {}
}, test('cache preserves expose and entry', function (_0x58bad7) {
    var _0x35ca1f = _0x56858a, _0x3da531 = {
            'MjAOq': '7|3|6|0|5|2|4|1',
            'qQXNK': _0x35ca1f(264),
            'wUMTB': _0x35ca1f(265),
            'Xfigg': 'data',
            'CkFTQ': _0x35ca1f(262),
            'zHzsz': _0x35ca1f(266)
        }, _0x1adf51 = _0x3da531[_0x35ca1f(267)][_0x35ca1f(268)]('|'), _0x5a2c9e = -172 * -16 + 1 * 3989 + -963 * 7;
    while (!![]) {
        switch (_0x1adf51[_0x5a2c9e++]) {
        case '0':
            _0x16673b[_0x35ca1f(269)]({
                'id': files[_0x35ca1f(263)],
                'expose': _0x3da531[_0x35ca1f(270)],
                'entry': ![]
            });
            continue;
        case '1':
            _0x16673b['on'](_0x3da531['wUMTB'], function () {
                var _0x656408 = _0x35ca1f;
                _0x58bad7[_0x656408(271)](_0x3dbb0d[_0x656408(272)](cmp), [
                    {
                        'id': _0x656408(262),
                        'expose': _0x17b310[_0x656408(273)],
                        'entry': !![],
                        'file': files['foo'],
                        'source': sources['foo'],
                        'deps': { './bar': files[_0x656408(263)] }
                    },
                    {
                        'id': files['bar'],
                        'expose': _0x17b310[_0x656408(274)],
                        'file': files[_0x656408(263)],
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
            _0x58bad7[_0x35ca1f(275)](1 * 9813 + 9937 + -19749);
            continue;
        case '4':
            _0x16673b['on'](_0x3da531[_0x35ca1f(276)], function (_0x41dbbf) {
                var _0x517464 = _0x35ca1f;
                _0x3dbb0d[_0x517464(277)](_0x41dbbf);
            });
            continue;
        case '5':
            _0x16673b['end']({
                'id': _0x3da531['CkFTQ'],
                'file': files['foo'],
                'entry': !![],
                'expose': _0x3da531[_0x35ca1f(278)]
            });
            continue;
        case '6':
            var _0x16673b = parser({ 'cache': cache });
            continue;
        case '7':
            var _0x17b310 = {
                'hovAh': _0x3da531[_0x35ca1f(278)],
                'rMpOP': _0x3da531[_0x35ca1f(270)]
            };
            continue;
        }
        break;
    }
});
function cmp(_0x2e4cfd, _0x202de5) {
    return _0x2e4cfd['id'] < _0x202de5['id'] ? -(-2401 * -3 + 1 * 4701 + -11903) : 991 + 132 * 17 + -3234;
}
var parser = require(_0x541656(155)), test = require(_0x541656(156))[_0x541656(157)], fs = require('fs'), path = require(_0x541656(158)), files = {
        'main': path[_0x541656(159)](__dirname, _0x541656(160)),
        'foo': path[_0x541656(159)](__dirname, _0x541656(161)),
        'bar': path[_0x541656(159)](__dirname, _0x541656(162))
    }, sources = Object[_0x541656(163)](files)[_0x541656(164)](function (_0x5bf84b, _0xa585fa) {
        var _0x40b006 = _0x541656, _0x298417 = { 'iKQEq': _0x40b006(165) };
        return _0x5bf84b[_0xa585fa] = fs[_0x40b006(166)](files[_0xa585fa], _0x298417[_0x40b006(167)]), _0x5bf84b;
    }, {});
test(_0x541656(168), function (_0x306941) {
    var _0x2f00a6 = _0x541656, _0x1f713c = {
            'gdVAk': _0x2f00a6(169),
            'mMtfz': _0x2f00a6(170),
            'ULOEt': function (_0x219028) {
                return _0x219028();
            }
        }, _0x188b9f = _0x1f713c[_0x2f00a6(171)][_0x2f00a6(172)]('|'), _0x32b352 = -6193 + 6975 + -782;
    while (!![]) {
        switch (_0x188b9f[_0x32b352++]) {
        case '0':
            _0x306941[_0x2f00a6(173)](3856 + 4661 * 2 + -1 * 13177);
            continue;
        case '1':
            _0x5894b9['on'](_0x1f713c['mMtfz'], function (_0x2710a1) {
                var _0x2a3d84 = _0x2f00a6;
                _0x792e64[_0x2a3d84(174)](_0x2710a1);
            });
            continue;
        case '2':
            var _0x792e64 = [];
            continue;
        case '3':
            var _0x5894b9 = _0x1f713c[_0x2f00a6(175)](parser);
            continue;
        case '4':
            _0x5894b9['on'](_0x2f00a6(176), function () {
                var _0x7ef2b1 = _0x2f00a6;
                _0x306941[_0x7ef2b1(177)](_0x792e64['sort'](cmp), [
                    {
                        'id': files[_0x7ef2b1(178)],
                        'file': files[_0x7ef2b1(178)],
                        'source': sources['main'],
                        'entry': !![],
                        'deps': { './foo': files[_0x7ef2b1(179)] }
                    },
                    {
                        'id': files[_0x7ef2b1(179)],
                        'file': files[_0x7ef2b1(179)],
                        'source': sources['foo'],
                        'deps': { './bar': files[_0x7ef2b1(180)] }
                    },
                    {
                        'id': files['bar'],
                        'file': files[_0x7ef2b1(180)],
                        'source': sources['bar'],
                        'deps': {}
                    }
                ]['sort'](cmp));
            });
            continue;
        case '5':
            _0x5894b9[_0x2f00a6(176)]({
                'file': files['main'],
                'entry': !![]
            });
            continue;
        }
        break;
    }
});
function cmp(_0x3fa50e, _0x4ad36b) {
    return _0x3fa50e['id'] < _0x4ad36b['id'] ? -(-9837 * -1 + -3093 + -6743) : 9692 + 1933 + -8 * 1453;
}
var _0x3d10 = [
    'readFileSync',
    'iKQEq',
    'deps',
    '0|3|5|2|1|4',
    'data',
    'gdVAk',
    'split',
    'plan',
    'push',
    'ULOEt',
    'end',
    'same',
    'main',
    'foo',
    'bar',
    '31894vnnbZm',
    '47fxCYax',
    '1044870zvPUIh',
    '583899HyNfEl',
    '500583qxtSMK',
    '1XdOkPb',
    '462cdezjo',
    '379SLyMNz',
    '430131mLGFaT',
    '949518qfktGV',
    '../',
    'tap',
    'test',
    'path',
    'join',
    '/files/main.js',
    '/files/foo.js',
    '/files/bar.js',
    'keys',
    'reduce',
    'utf8'
];
function _0x3a9d(_0x48a530, _0x398ba7) {
    return _0x3a9d = function (_0x291cd8, _0x9fabe6) {
        _0x291cd8 = _0x291cd8 - (0x2 * -0x11f + -0x7b * 0x2e + 0x18e9);
        var _0x1e3e61 = _0x3d10[_0x291cd8];
        return _0x1e3e61;
    }, _0x3a9d(_0x48a530, _0x398ba7);
}
var _0x541656 = _0x3a9d;
(function (_0xe61e9b, _0x3245c8) {
    var _0xe38981 = _0x3a9d;
    while (!![]) {
        try {
            var _0x4fbe70 = -parseInt(_0xe38981(0x91)) * -parseInt(_0xe38981(0x92)) + -parseInt(_0xe38981(0x93)) + parseInt(_0xe38981(0x94)) + parseInt(_0xe38981(0x95)) * parseInt(_0xe38981(0x96)) + -parseInt(_0xe38981(0x97)) * parseInt(_0xe38981(0x98)) + parseInt(_0xe38981(0x99)) + -parseInt(_0xe38981(0x9a));
            if (_0x4fbe70 === _0x3245c8)
                break;
            else
                _0xe61e9b['push'](_0xe61e9b['shift']());
        } catch (_0x1cf57c) {
            _0xe61e9b['push'](_0xe61e9b['shift']());
        }
    }
}(_0x3d10, -0x109bca + 0x2ba * 0x661 + 0xc18c1));
var parser = require(_0x541656(0x9b)), test = require(_0x541656(0x9c))[_0x541656(0x9d)], fs = require('fs'), path = require(_0x541656(0x9e)), files = {
        'main': path[_0x541656(0x9f)](__dirname, _0x541656(0xa0)),
        'foo': path[_0x541656(0x9f)](__dirname, _0x541656(0xa1)),
        'bar': path[_0x541656(0x9f)](__dirname, _0x541656(0xa2))
    }, sources = Object[_0x541656(0xa3)](files)[_0x541656(0xa4)](function (_0x5bf84b, _0xa585fa) {
        var _0x40b006 = _0x541656, _0x298417 = { 'iKQEq': _0x40b006(0xa5) };
        return _0x5bf84b[_0xa585fa] = fs[_0x40b006(0xa6)](files[_0xa585fa], _0x298417[_0x40b006(0xa7)]), _0x5bf84b;
    }, {});
test(_0x541656(0xa8), function (_0x306941) {
    var _0x2f00a6 = _0x541656, _0x1f713c = {
            'gdVAk': _0x2f00a6(0xa9),
            'mMtfz': _0x2f00a6(0xaa),
            'ULOEt': function (_0x219028) {
                return _0x219028();
            }
        }, _0x188b9f = _0x1f713c[_0x2f00a6(0xab)][_0x2f00a6(0xac)]('|'), _0x32b352 = -0x1831 + 0x1b3f + -0x30e;
    while (!![]) {
        switch (_0x188b9f[_0x32b352++]) {
        case '0':
            _0x306941[_0x2f00a6(0xad)](0xf10 + 0x1235 * 0x2 + -0x1 * 0x3379);
            continue;
        case '1':
            _0x5894b9['on'](_0x1f713c['mMtfz'], function (_0x2710a1) {
                var _0x2a3d84 = _0x2f00a6;
                _0x792e64[_0x2a3d84(0xae)](_0x2710a1);
            });
            continue;
        case '2':
            var _0x792e64 = [];
            continue;
        case '3':
            var _0x5894b9 = _0x1f713c[_0x2f00a6(0xaf)](parser);
            continue;
        case '4':
            _0x5894b9['on'](_0x2f00a6(0xb0), function () {
                var _0x7ef2b1 = _0x2f00a6;
                _0x306941[_0x7ef2b1(0xb1)](_0x792e64['sort'](cmp), [
                    {
                        'id': files[_0x7ef2b1(0xb2)],
                        'file': files[_0x7ef2b1(0xb2)],
                        'source': sources['main'],
                        'entry': !![],
                        'deps': { './foo': files[_0x7ef2b1(0xb3)] }
                    },
                    {
                        'id': files[_0x7ef2b1(0xb3)],
                        'file': files[_0x7ef2b1(0xb3)],
                        'source': sources['foo'],
                        'deps': { './bar': files[_0x7ef2b1(0xb4)] }
                    },
                    {
                        'id': files['bar'],
                        'file': files[_0x7ef2b1(0xb4)],
                        'source': sources['bar'],
                        'deps': {}
                    }
                ]['sort'](cmp));
            });
            continue;
        case '5':
            _0x5894b9[_0x2f00a6(0xb0)]({
                'file': files['main'],
                'entry': !![]
            });
            continue;
        }
        break;
    }
});
function cmp(_0x3fa50e, _0x4ad36b) {
    return _0x3fa50e['id'] < _0x4ad36b['id'] ? -(-0x266d * -0x1 + -0xc15 + -0x1a57) : 0x25dc + 0x78d + -0x8 * 0x5ad;
}

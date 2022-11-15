var _0x130e = [
    'WsnBw',
    'push',
    'same',
    'sort',
    'Rzpix',
    '1241789VfvOpo',
    '6921EDfhCm',
    '817274tfQOvF',
    '1wzubjk',
    '119LGkXwD',
    '8765dEohmj',
    '187642hopslx',
    '282027LhWpEI',
    '2pIiEPf',
    '1KfeAPf',
    '365587LhlYFJ',
    '../',
    'tap',
    'test',
    'path',
    'join',
    '/files/foo.js',
    '/files/bar.js',
    'notreal\x20foo',
    'foo',
    'bar',
    'cache\x20preserves\x20expose\x20and\x20entry',
    'foo2',
    'bar2',
    'data',
    'plan',
    'RfqaN',
    'ZhfNN',
    'uikuT'
];
var _0x983d7e = _0x1cc4;
function _0x1cc4(_0x4659b8, _0x2f11bb) {
    return _0x1cc4 = function (_0xccae7, _0x5f5031) {
        _0xccae7 = _0xccae7 - (-0x22e5 + -0xcc8 + -0x319f * -0x1);
        var _0x273421 = _0x130e[_0xccae7];
        return _0x273421;
    }, _0x1cc4(_0x4659b8, _0x2f11bb);
}
(function (_0x51bf23, _0x3a1de8) {
    var _0x27d803 = _0x1cc4;
    while (!![]) {
        try {
            var _0x2456b0 = -parseInt(_0x27d803(0x1f2)) + -parseInt(_0x27d803(0x1f3)) + parseInt(_0x27d803(0x1f4)) * parseInt(_0x27d803(0x1f5)) + -parseInt(_0x27d803(0x1f6)) * -parseInt(_0x27d803(0x1f7)) + -parseInt(_0x27d803(0x1f8)) + -parseInt(_0x27d803(0x1f9)) * -parseInt(_0x27d803(0x1fa)) + parseInt(_0x27d803(0x1fb)) * -parseInt(_0x27d803(0x1fc));
            if (_0x2456b0 === _0x3a1de8)
                break;
            else
                _0x51bf23['push'](_0x51bf23['shift']());
        } catch (_0x3d6b40) {
            _0x51bf23['push'](_0x51bf23['shift']());
        }
    }
}(_0x130e, 0x1 * 0xdb879 + 0x5a4 * 0x7 + -0x1 * 0x4609d));
var parser = require(_0x983d7e(0x1fd)), test = require(_0x983d7e(0x1fe))[_0x983d7e(0x1ff)], path = require(_0x983d7e(0x200)), files = {
        'foo': path[_0x983d7e(0x201)](__dirname, _0x983d7e(0x202)),
        'bar': path[_0x983d7e(0x201)](__dirname, _0x983d7e(0x203))
    }, sources = {
        'foo': _0x983d7e(0x204),
        'bar': 'notreal\x20bar'
    }, cache = {};
cache[files[_0x983d7e(0x205)]] = {
    'source': sources[_0x983d7e(0x205)],
    'deps': { './bar': files['bar'] }
}, cache[files[_0x983d7e(0x206)]] = {
    'source': sources[_0x983d7e(0x206)],
    'deps': {}
}, test(_0x983d7e(0x207), function (_0x37bbf5) {
    var _0x4419e4 = _0x983d7e, _0x5e0c04 = {
            'uikuT': _0x4419e4(0x205),
            'WsnBw': _0x4419e4(0x208),
            'ZhfNN': _0x4419e4(0x209),
            'RfqaN': function (_0x9b9688, _0x1c9abd) {
                return _0x9b9688(_0x1c9abd);
            },
            'FShSH': _0x4419e4(0x20a)
        };
    _0x37bbf5[_0x4419e4(0x20b)](-0x1583 + -0x1776 + 0x2cfa);
    var _0x2f9077 = _0x5e0c04[_0x4419e4(0x20c)](parser, { 'cache': cache });
    _0x2f9077['write']({
        'id': files['bar'],
        'expose': _0x5e0c04[_0x4419e4(0x20d)],
        'entry': ![]
    }), _0x2f9077['end']({
        'id': _0x5e0c04[_0x4419e4(0x20e)],
        'file': files[_0x4419e4(0x205)],
        'entry': !![],
        'expose': _0x5e0c04[_0x4419e4(0x20f)]
    });
    var _0x21e5f9 = [];
    _0x2f9077['on'](_0x5e0c04['FShSH'], function (_0x4ce017) {
        var _0x59e302 = _0x4419e4;
        _0x21e5f9[_0x59e302(0x210)](_0x4ce017);
    }), _0x2f9077['on']('end', function () {
        var _0x15ab68 = _0x4419e4;
        _0x37bbf5[_0x15ab68(0x211)](_0x21e5f9[_0x15ab68(0x212)](cmp), [
            {
                'id': _0x5e0c04[_0x15ab68(0x20e)],
                'expose': _0x5e0c04['WsnBw'],
                'entry': !![],
                'file': files['foo'],
                'source': sources['foo'],
                'deps': { './bar': files[_0x15ab68(0x206)] }
            },
            {
                'id': files[_0x15ab68(0x206)],
                'expose': _0x5e0c04['ZhfNN'],
                'file': files[_0x15ab68(0x206)],
                'source': sources[_0x15ab68(0x206)],
                'deps': {}
            }
        ][_0x15ab68(0x212)](cmp));
    });
});
function cmp(_0x460ef7, _0x44bdcd) {
    var _0x10a8f2 = _0x983d7e, _0xd2f94b = {
            'Rzpix': function (_0xf7beda, _0x20cca4) {
                return _0xf7beda < _0x20cca4;
            }
        };
    return _0xd2f94b[_0x10a8f2(0x213)](_0x460ef7['id'], _0x44bdcd['id']) ? -(0x766 + -0x2 * 0xd88 + -0x5 * -0x3ef) : -0x4f * 0x19 + 0x145 * 0x1 + 0x673;
}

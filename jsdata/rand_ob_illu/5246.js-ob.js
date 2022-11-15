const _0x130e = ['WsnBw', 'push', 'same', 'sort', 'Rzpix', '1241789VfvOpo', '6921EDfhCm', '817274tfQOvF', '1wzubjk', '119LGkXwD', '8765dEohmj', '187642hopslx', '282027LhWpEI', '2pIiEPf', '1KfeAPf', '365587LhlYFJ', '../', 'tap', 'test', 'path', 'join', '/files/foo.js', '/files/bar.js', 'notreal foo', 'foo', 'bar', 'cache preserves expose and entry', 'foo2', 'bar2', 'data', 'plan', 'RfqaN', 'ZhfNN', 'uikuT'];
const _0x983d7e = _0x1cc4;

function _0x1cc4(_0x4659b8, _0x2f11bb) {
    return _0x1cc4 = function (_0xccae7, _0x5f5031) {
        _0xccae7 = _0xccae7 - 498;
        const _0x273421 = _0x130e[_0xccae7];

        return _0x273421;
    }, _0x1cc4(_0x4659b8, _0x2f11bb);
}
(function (_0x51bf23, _0x3a1de8) {
    const _0x27d803 = _0x1cc4;

    while (true) {
        try {
            const _0x2456b0 = -parseInt(_0x27d803(0x1f2)) + -parseInt(_0x27d803(0x1f3)) + parseInt(_0x27d803(0x1f4)) * parseInt(_0x27d803(0x1f5)) + -parseInt(_0x27d803(0x1f6)) * -parseInt(_0x27d803(0x1f7)) + -parseInt(_0x27d803(0x1f8)) + -parseInt(_0x27d803(0x1f9)) * -parseInt(_0x27d803(0x1fa)) + parseInt(_0x27d803(0x1fb)) * -parseInt(_0x27d803(0x1fc));

            if (_0x2456b0 === _0x3a1de8) break;else _0x51bf23.push(_0x51bf23.shift());
        } catch (_0x3d6b40) {
            _0x51bf23.push(_0x51bf23.shift());
        }
    }
})(_0x130e, 622424);

const parser = require(_0x983d7e(0x1fd));

const test = require(_0x983d7e(0x1fe))[_0x983d7e(0x1ff)];

const path = require(_0x983d7e(0x200));

const files = {
    'foo': path[_0x983d7e(0x201)](__dirname, _0x983d7e(0x202)),
    'bar': path[_0x983d7e(0x201)](__dirname, _0x983d7e(0x203))
};
const sources = {
    'foo': _0x983d7e(0x204),
    'bar': 'notreal bar'
};
const cache = {};

cache[files[_0x983d7e(0x205)]] = {
    'source': sources[_0x983d7e(0x205)],
    'deps': { './bar': files.bar }
}, cache[files[_0x983d7e(0x206)]] = {
    'source': sources[_0x983d7e(0x206)],
    'deps': {}
}, test(_0x983d7e(0x207), function (_0x37bbf5) {
    const _0x4419e4 = _0x983d7e;
    const _0x5e0c04 = {
        'uikuT': _0x4419e4(0x205),
        'WsnBw': _0x4419e4(0x208),
        'ZhfNN': _0x4419e4(0x209),
        'RfqaN': function (_0x9b9688, _0x1c9abd) {
            return _0x9b9688(_0x1c9abd);
        },
        'FShSH': _0x4419e4(0x20a)
    };

    _0x37bbf5[_0x4419e4(0x20b)](1);

    const _0x2f9077 = _0x5e0c04[_0x4419e4(0x20c)](parser, { 'cache': cache });

    _0x2f9077.write({
        'id': files.bar,
        'expose': _0x5e0c04[_0x4419e4(0x20d)],
        'entry': false
    }), _0x2f9077.end({
        'id': _0x5e0c04[_0x4419e4(0x20e)],
        'file': files[_0x4419e4(0x205)],
        'entry': true,
        'expose': _0x5e0c04[_0x4419e4(0x20f)]
    });
    const _0x21e5f9 = [];

    _0x2f9077.on(_0x5e0c04.FShSH, function (_0x4ce017) {
        const _0x59e302 = _0x4419e4;

        _0x21e5f9[_0x59e302(0x210)](_0x4ce017);
    }), _0x2f9077.on('end', function () {
        const _0x15ab68 = _0x4419e4;

        _0x37bbf5[_0x15ab68(0x211)](_0x21e5f9[_0x15ab68(0x212)](cmp), [{
            'id': _0x5e0c04[_0x15ab68(0x20e)],
            'expose': _0x5e0c04.WsnBw,
            'entry': true,
            'file': files.foo,
            'source': sources.foo,
            'deps': { './bar': files[_0x15ab68(0x206)] }
        }, {
            'id': files[_0x15ab68(0x206)],
            'expose': _0x5e0c04.ZhfNN,
            'file': files[_0x15ab68(0x206)],
            'source': sources[_0x15ab68(0x206)],
            'deps': {}
        }][_0x15ab68(0x212)](cmp));
    });
});
function cmp(_0x460ef7, _0x44bdcd) {
    const _0x10a8f2 = _0x983d7e;
    const _0xd2f94b = {
        'Rzpix': function (_0xf7beda, _0x20cca4) {
            return _0xf7beda < _0x20cca4;
        }
    };

    return _0xd2f94b[_0x10a8f2(0x213)](_0x460ef7.id, _0x44bdcd.id) ? -1 : 1;
}

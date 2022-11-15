const _0x49f8 = ['satisfies', 'get', 'name', 'version', 'fetchSpec', 'next', 'length', '  Depends on "', '" \n', '  instead of "', '". \n', 'error', 'fix', 'pkg', 'toJSON', 'dependencies', 'devDependencies', 'peerDependencies', 'forEach', 'pIoiE', 'stringify', '2UHUXXU', '14621lTvCwv', '277878GusqPh', '17noxIsE', '4996pMjvAG', '319434ThlRgl', '168126okWcBJ', '307822LDzKis', '145759HwJIub', '@lerna/project', 'semver', 'Fixes outdated dependencies', 'allow-next', 'Allow using "next" versions. Use this only for alpha/beta releases', 'argv', 'cwd', 'allDependencies', 'from', 'localDependencies', 'values', 'filter'];
const _0x56df9f = _0x568a;

(function (_0x221f14, _0x1f592a) {
    const _0x14ae4f = _0x568a;

    while (true) {
        try {
            const _0x490108 = -parseInt(_0x14ae4f(0xf3)) * -parseInt(_0x14ae4f(0xf4)) + parseInt(_0x14ae4f(0xf5)) + -parseInt(_0x14ae4f(0xf6)) * parseInt(_0x14ae4f(0xf7)) + parseInt(_0x14ae4f(0xf8)) + parseInt(_0x14ae4f(0xf9)) + -parseInt(_0x14ae4f(0xfa)) + -parseInt(_0x14ae4f(0xfb));

            if (_0x490108 === _0x1f592a) break;else _0x221f14.push(_0x221f14.shift());
        } catch (_0x225366) {
            _0x221f14.push(_0x221f14.shift());
        }
    }
})(_0x49f8, 256167);

var { writeFileSync } = require('fs');

const yargs = require('yargs');

var { getPackages } = require(_0x56df9f(0xfc));

const PackageGraph = require('@lerna/package-graph');

const semver = require(_0x56df9f(0xfd));

function _0x568a(_0x4171cf, _0x244d86) {
    return _0x568a = function (_0x1cf2f0, _0x3b06d6) {
        _0x1cf2f0 = _0x1cf2f0 - 243;
        const _0x10d730 = _0x49f8[_0x1cf2f0];

        return _0x10d730;
    }, _0x568a(_0x4171cf, _0x244d86);
}
var warned = false;

const argv = yargs.option('fix', {
    'default': false,
    'describe': _0x56df9f(0xfe)
}).option(_0x56df9f(0xff), {
    'default': false,
    'describe': _0x56df9f(0x100)
})[_0x56df9f(0x101)];

getPackages(process[_0x56df9f(0x102)]()).then(_0x32820d => {
    const _0x57c0ea = _0x56df9f;
    const _0x4ee3a7 = {
        'pIoiE': function (_0x5395da, _0x54dadc, _0x9c22d1) {
            return _0x5395da(_0x54dadc, _0x9c22d1);
        }
    };

    const _0x37b699 = new PackageGraph(_0x32820d, _0x57c0ea(0x103), true);

    _0x37b699.forEach((_0x34ee73, _0x36cc20) => {
        const _0x21e8f1 = _0x57c0ea;

        var _0x1127de = Array[_0x21e8f1(0x104)](_0x34ee73[_0x21e8f1(0x105)][_0x21e8f1(0x106)]())[_0x21e8f1(0x107)](_0x462b8d => !semver[_0x21e8f1(0x108)](_0x37b699[_0x21e8f1(0x109)](_0x462b8d[_0x21e8f1(0x10a)])[_0x21e8f1(0x10b)], _0x462b8d[_0x21e8f1(0x10c)]));

        argv[_0x21e8f1(0xff)] && (_0x1127de = _0x1127de[_0x21e8f1(0x107)](_0x1ae61a => _0x1ae61a[_0x21e8f1(0x10c)] !== _0x21e8f1(0x10d)));
        if (!_0x1127de[_0x21e8f1(0x10e)]) return;

        const _0x482e2d = _0x1127de.map(_0x3319ff => _0x21e8f1(0x10f) + _0x3319ff[_0x21e8f1(0x10a)] + '@' + _0x3319ff.fetchSpec + _0x21e8f1(0x110) + (_0x21e8f1(0x111) + _0x3319ff[_0x21e8f1(0x10a)] + '@' + _0x37b699[_0x21e8f1(0x109)](_0x3319ff[_0x21e8f1(0x10a)]).version + _0x21e8f1(0x112))).join('\n');

        console[_0x21e8f1(0x113)](_0x34ee73.name + ': \n' + _0x482e2d), warned = true;
        if (argv[_0x21e8f1(0x114)]) {
            const _0x1ae74d = _0x34ee73[_0x21e8f1(0x115)];

            const _0x30afb7 = _0x1ae74d[_0x21e8f1(0x116)]();

            const _0x172602 = [_0x21e8f1(0x117), _0x21e8f1(0x118), _0x21e8f1(0x119)];

            _0x1127de.forEach(_0x38c5ba => {
                const _0x4c98b3 = _0x21e8f1;

                _0x172602[_0x4c98b3(0x11a)](_0xd23a73 => {
                    const _0x45a5d1 = _0x4c98b3;

                    _0x1ae74d[_0xd23a73] && _0x1ae74d[_0xd23a73][_0x38c5ba[_0x45a5d1(0x10a)]] && (_0x30afb7[_0xd23a73][_0x38c5ba[_0x45a5d1(0x10a)]] = '^' + _0x37b699[_0x45a5d1(0x109)](_0x38c5ba.name).version);
                });
            }), _0x4ee3a7[_0x21e8f1(0x11b)](writeFileSync, _0x1ae74d.location + '/package.json', JSON[_0x21e8f1(0x11c)](_0x30afb7, null, 2));
        }
    }), warned && process.exit(1);
});

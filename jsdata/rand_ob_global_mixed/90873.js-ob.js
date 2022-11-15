const _0x49f8 = [
    'satisfies',
    'get',
    'name',
    'version',
    'fetchSpec',
    'next',
    'length',
    '\x20\x20Depends\x20on\x20\x22',
    '\x22\x20\x0a',
    '\x20\x20instead\x20of\x20\x22',
    '\x22.\x20\x0a',
    'error',
    'fix',
    'pkg',
    'toJSON',
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'forEach',
    'pIoiE',
    'stringify',
    '2UHUXXU',
    '14621lTvCwv',
    '277878GusqPh',
    '17noxIsE',
    '4996pMjvAG',
    '319434ThlRgl',
    '168126okWcBJ',
    '307822LDzKis',
    '145759HwJIub',
    '@lerna/project',
    'semver',
    'Fixes\x20outdated\x20dependencies',
    'allow-next',
    'Allow\x20using\x20\x22next\x22\x20versions.\x20Use\x20this\x20only\x20for\x20alpha/beta\x20releases',
    'argv',
    'cwd',
    'allDependencies',
    'from',
    'localDependencies',
    'values',
    'filter'
];
const _0x56df9f = _0x568a;
(function (_0x221f14, _0x1f592a) {
    const _0x14ae4f = _0x568a;
    while (!![]) {
        try {
            const _0x490108 = -parseInt(_0x14ae4f(0xf3)) * -parseInt(_0x14ae4f(0xf4)) + parseInt(_0x14ae4f(0xf5)) + -parseInt(_0x14ae4f(0xf6)) * parseInt(_0x14ae4f(0xf7)) + parseInt(_0x14ae4f(0xf8)) + parseInt(_0x14ae4f(0xf9)) + -parseInt(_0x14ae4f(0xfa)) + -parseInt(_0x14ae4f(0xfb));
            if (_0x490108 === _0x1f592a)
                break;
            else
                _0x221f14['push'](_0x221f14['shift']());
        } catch (_0x225366) {
            _0x221f14['push'](_0x221f14['shift']());
        }
    }
}(_0x49f8, -0x7f * 0xbc9 + -0x2536f + 0xc14cd));
const {writeFileSync} = require('fs'), yargs = require('yargs'), {getPackages} = require(_0x56df9f(0xfc)), PackageGraph = require('@lerna/package-graph'), semver = require(_0x56df9f(0xfd));
function _0x568a(_0x4171cf, _0x244d86) {
    return _0x568a = function (_0x1cf2f0, _0x3b06d6) {
        _0x1cf2f0 = _0x1cf2f0 - (0x127f * 0x1 + 0x980 * 0x1 + -0x1b0c);
        let _0x10d730 = _0x49f8[_0x1cf2f0];
        return _0x10d730;
    }, _0x568a(_0x4171cf, _0x244d86);
}
let warned = ![];
const argv = yargs['option']('fix', {
    'default': ![],
    'describe': _0x56df9f(0xfe)
})['option'](_0x56df9f(0xff), {
    'default': ![],
    'describe': _0x56df9f(0x100)
})[_0x56df9f(0x101)];
getPackages(process[_0x56df9f(0x102)]())['then'](_0x32820d => {
    const _0x57c0ea = _0x56df9f, _0x4ee3a7 = {
            'pIoiE': function (_0x5395da, _0x54dadc, _0x9c22d1) {
                return _0x5395da(_0x54dadc, _0x9c22d1);
            }
        }, _0x37b699 = new PackageGraph(_0x32820d, _0x57c0ea(0x103), !![]);
    _0x37b699['forEach']((_0x34ee73, _0x36cc20) => {
        const _0x21e8f1 = _0x57c0ea;
        let _0x1127de = Array[_0x21e8f1(0x104)](_0x34ee73[_0x21e8f1(0x105)][_0x21e8f1(0x106)]())[_0x21e8f1(0x107)](_0x462b8d => !semver[_0x21e8f1(0x108)](_0x37b699[_0x21e8f1(0x109)](_0x462b8d[_0x21e8f1(0x10a)])[_0x21e8f1(0x10b)], _0x462b8d[_0x21e8f1(0x10c)]));
        argv[_0x21e8f1(0xff)] && (_0x1127de = _0x1127de[_0x21e8f1(0x107)](_0x1ae61a => _0x1ae61a[_0x21e8f1(0x10c)] !== _0x21e8f1(0x10d)));
        if (!_0x1127de[_0x21e8f1(0x10e)])
            return;
        const _0x482e2d = _0x1127de['map'](_0x3319ff => _0x21e8f1(0x10f) + _0x3319ff[_0x21e8f1(0x10a)] + '@' + _0x3319ff['fetchSpec'] + _0x21e8f1(0x110) + (_0x21e8f1(0x111) + _0x3319ff[_0x21e8f1(0x10a)] + '@' + _0x37b699[_0x21e8f1(0x109)](_0x3319ff[_0x21e8f1(0x10a)])['version'] + _0x21e8f1(0x112)))['join']('\x0a');
        console[_0x21e8f1(0x113)](_0x34ee73['name'] + ':\x20\x0a' + _0x482e2d), warned = !![];
        if (argv[_0x21e8f1(0x114)]) {
            const _0x1ae74d = _0x34ee73[_0x21e8f1(0x115)], _0x30afb7 = _0x1ae74d[_0x21e8f1(0x116)](), _0x172602 = [
                    _0x21e8f1(0x117),
                    _0x21e8f1(0x118),
                    _0x21e8f1(0x119)
                ];
            _0x1127de['forEach'](_0x38c5ba => {
                const _0x4c98b3 = _0x21e8f1;
                _0x172602[_0x4c98b3(0x11a)](_0xd23a73 => {
                    const _0x45a5d1 = _0x4c98b3;
                    _0x1ae74d[_0xd23a73] && _0x1ae74d[_0xd23a73][_0x38c5ba[_0x45a5d1(0x10a)]] && (_0x30afb7[_0xd23a73][_0x38c5ba[_0x45a5d1(0x10a)]] = '^' + _0x37b699[_0x45a5d1(0x109)](_0x38c5ba['name'])['version']);
                });
            }), _0x4ee3a7[_0x21e8f1(0x11b)](writeFileSync, _0x1ae74d['location'] + '/package.json', JSON[_0x21e8f1(0x11c)](_0x30afb7, null, 0x5 * 0xa4 + -0x3e * 0x41 + -0x49 * -0x2c));
        }
    }), warned && process['exit'](0x1ec0 + 0x1 * 0x202a + -0x3ee9);
});

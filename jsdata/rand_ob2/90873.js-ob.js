const _0x325c = [
    '5FWWFVz',
    '91343BVBWyh',
    '86468XIecxm',
    '7QQfdiI',
    '161084izQgSl',
    '5MNqmjI',
    '59795GQYViZ',
    '751014iWwCDx',
    '784050VANIet',
    '@lerna/project',
    'option',
    'fix',
    'Fixes\x20outdated\x20dependencies',
    'allow-next',
    'Allow\x20using\x20\x22next\x22\x20versions.\x20Use\x20this\x20only\x20for\x20alpha/beta\x20releases',
    'argv',
    'cwd',
    'then',
    'allDependencies',
    'from',
    'localDependencies',
    'satisfies',
    'get',
    'name',
    'version',
    'fetchSpec',
    'next',
    'length',
    'map',
    '\x20\x20Depends\x20on\x20\x22',
    '\x20\x20instead\x20of\x20\x22',
    '\x22.\x20\x0a',
    'join',
    'error',
    ':\x20\x0a',
    'pkg',
    'toJSON',
    'devDependencies',
    'peerDependencies',
    'forEach',
    'location',
    '/package.json',
    'stringify',
    '1sjvoeS',
    '358038UEsxZz'
];
const _0x1db21d = _0x50ea;
(function (_0x2d2350, _0x247b63) {
    const _0x4a737b = _0x50ea;
    while (!![]) {
        try {
            const _0x5b4fc1 = -parseInt(_0x4a737b(0x1b2)) * -parseInt(_0x4a737b(0x1b3)) + parseInt(_0x4a737b(0x1b4)) * parseInt(_0x4a737b(0x1b5)) + -parseInt(_0x4a737b(0x1b6)) * parseInt(_0x4a737b(0x1b7)) + -parseInt(_0x4a737b(0x1b8)) + -parseInt(_0x4a737b(0x1b9)) * -parseInt(_0x4a737b(0x1ba)) + -parseInt(_0x4a737b(0x1bb)) + parseInt(_0x4a737b(0x1bc));
            if (_0x5b4fc1 === _0x247b63)
                break;
            else
                _0x2d2350['push'](_0x2d2350['shift']());
        } catch (_0x5dd28d) {
            _0x2d2350['push'](_0x2d2350['shift']());
        }
    }
}(_0x325c, 0x5cdf4));
function _0x50ea(_0x4836a5, _0x5a66c5) {
    return _0x50ea = function (_0x325c33, _0x50eae3) {
        _0x325c33 = _0x325c33 - 0x1b2;
        let _0x3e8b53 = _0x325c[_0x325c33];
        return _0x3e8b53;
    }, _0x50ea(_0x4836a5, _0x5a66c5);
}
const {writeFileSync} = require('fs'), yargs = require('yargs'), {getPackages} = require(_0x1db21d(0x1bd)), PackageGraph = require('@lerna/package-graph'), semver = require('semver');
let warned = ![];
const argv = yargs[_0x1db21d(0x1be)](_0x1db21d(0x1bf), {
    'default': ![],
    'describe': _0x1db21d(0x1c0)
})[_0x1db21d(0x1be)](_0x1db21d(0x1c1), {
    'default': ![],
    'describe': _0x1db21d(0x1c2)
})[_0x1db21d(0x1c3)];
getPackages(process[_0x1db21d(0x1c4)]())[_0x1db21d(0x1c5)](_0x2341fd => {
    const _0x55f545 = _0x1db21d, _0x1cd2c2 = new PackageGraph(_0x2341fd, _0x55f545(0x1c6), !![]);
    _0x1cd2c2['forEach']((_0x327dfb, _0x520328) => {
        const _0x31d7d9 = _0x55f545;
        let _0xe210ce = Array[_0x31d7d9(0x1c7)](_0x327dfb[_0x31d7d9(0x1c8)]['values']())['filter'](_0x5bf46d => !semver[_0x31d7d9(0x1c9)](_0x1cd2c2[_0x31d7d9(0x1ca)](_0x5bf46d[_0x31d7d9(0x1cb)])[_0x31d7d9(0x1cc)], _0x5bf46d[_0x31d7d9(0x1cd)]));
        argv[_0x31d7d9(0x1c1)] && (_0xe210ce = _0xe210ce['filter'](_0x123f0b => _0x123f0b[_0x31d7d9(0x1cd)] !== _0x31d7d9(0x1ce)));
        if (!_0xe210ce[_0x31d7d9(0x1cf)])
            return;
        const _0x4381e8 = _0xe210ce[_0x31d7d9(0x1d0)](_0x1253c2 => _0x31d7d9(0x1d1) + _0x1253c2['name'] + '@' + _0x1253c2[_0x31d7d9(0x1cd)] + '\x22\x20\x0a' + (_0x31d7d9(0x1d2) + _0x1253c2[_0x31d7d9(0x1cb)] + '@' + _0x1cd2c2[_0x31d7d9(0x1ca)](_0x1253c2[_0x31d7d9(0x1cb)])['version'] + _0x31d7d9(0x1d3)))[_0x31d7d9(0x1d4)]('\x0a');
        console[_0x31d7d9(0x1d5)](_0x327dfb[_0x31d7d9(0x1cb)] + _0x31d7d9(0x1d6) + _0x4381e8), warned = !![];
        if (argv[_0x31d7d9(0x1bf)]) {
            const _0x2c0a8b = _0x327dfb[_0x31d7d9(0x1d7)], _0x3dd646 = _0x2c0a8b[_0x31d7d9(0x1d8)](), _0x250317 = [
                    'dependencies',
                    _0x31d7d9(0x1d9),
                    _0x31d7d9(0x1da)
                ];
            _0xe210ce[_0x31d7d9(0x1db)](_0x479cdb => {
                _0x250317['forEach'](_0x9ea213 => {
                    const _0x569d56 = _0x50ea;
                    _0x2c0a8b[_0x9ea213] && _0x2c0a8b[_0x9ea213][_0x479cdb[_0x569d56(0x1cb)]] && (_0x3dd646[_0x9ea213][_0x479cdb['name']] = '^' + _0x1cd2c2['get'](_0x479cdb[_0x569d56(0x1cb)])['version']);
                });
            }), writeFileSync(_0x2c0a8b[_0x31d7d9(0x1dc)] + _0x31d7d9(0x1dd), JSON[_0x31d7d9(0x1de)](_0x3dd646, null, 0x2));
        }
    }), warned && process['exit'](0x1);
});

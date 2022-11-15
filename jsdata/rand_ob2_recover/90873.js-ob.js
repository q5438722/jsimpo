function _0x50ea(_0x4836a5, _0x5a66c5) {
    return _0x50ea = function (_0x325c33, _0x50eae3) {
        _0x325c33 = _0x325c33 - 434;
        let _0x3e8b53 = _0x325c[_0x325c33];
        return _0x3e8b53;
    }, _0x50ea(_0x4836a5, _0x5a66c5);
}
const {writeFileSync} = require('fs'), yargs = require('yargs'), {getPackages} = require(_0x1db21d(445)), PackageGraph = require('@lerna/package-graph'), semver = require('semver');
let warned = ![];
const argv = yargs[_0x1db21d(446)](_0x1db21d(447), {
    'default': ![],
    'describe': _0x1db21d(448)
})[_0x1db21d(446)](_0x1db21d(449), {
    'default': ![],
    'describe': _0x1db21d(450)
})[_0x1db21d(451)];
getPackages(process[_0x1db21d(452)]())[_0x1db21d(453)](_0x2341fd => {
    const _0x55f545 = _0x1db21d, _0x1cd2c2 = new PackageGraph(_0x2341fd, _0x55f545(454), !![]);
    _0x1cd2c2['forEach']((_0x327dfb, _0x520328) => {
        const _0x31d7d9 = _0x55f545;
        let _0xe210ce = Array[_0x31d7d9(455)](_0x327dfb[_0x31d7d9(456)]['values']())['filter'](_0x5bf46d => !semver[_0x31d7d9(457)](_0x1cd2c2[_0x31d7d9(458)](_0x5bf46d[_0x31d7d9(459)])[_0x31d7d9(460)], _0x5bf46d[_0x31d7d9(461)]));
        argv[_0x31d7d9(449)] && (_0xe210ce = _0xe210ce['filter'](_0x123f0b => _0x123f0b[_0x31d7d9(461)] !== _0x31d7d9(462)));
        if (!_0xe210ce[_0x31d7d9(463)])
            return;
        const _0x4381e8 = _0xe210ce[_0x31d7d9(464)](_0x1253c2 => _0x31d7d9(465) + _0x1253c2['name'] + '@' + _0x1253c2[_0x31d7d9(461)] + '" \n' + (_0x31d7d9(466) + _0x1253c2[_0x31d7d9(459)] + '@' + _0x1cd2c2[_0x31d7d9(458)](_0x1253c2[_0x31d7d9(459)])['version'] + _0x31d7d9(467)))[_0x31d7d9(468)]('\n');
        console[_0x31d7d9(469)](_0x327dfb[_0x31d7d9(459)] + _0x31d7d9(470) + _0x4381e8), warned = !![];
        if (argv[_0x31d7d9(447)]) {
            const _0x2c0a8b = _0x327dfb[_0x31d7d9(471)], _0x3dd646 = _0x2c0a8b[_0x31d7d9(472)](), _0x250317 = [
                    'dependencies',
                    _0x31d7d9(473),
                    _0x31d7d9(474)
                ];
            _0xe210ce[_0x31d7d9(475)](_0x479cdb => {
                _0x250317['forEach'](_0x9ea213 => {
                    const _0x569d56 = _0x50ea;
                    _0x2c0a8b[_0x9ea213] && _0x2c0a8b[_0x9ea213][_0x479cdb[_0x569d56(459)]] && (_0x3dd646[_0x9ea213][_0x479cdb['name']] = '^' + _0x1cd2c2['get'](_0x479cdb[_0x569d56(459)])['version']);
                });
            }), writeFileSync(_0x2c0a8b[_0x31d7d9(476)] + _0x31d7d9(477), JSON[_0x31d7d9(478)](_0x3dd646, null, 2));
        }
    }), warned && process['exit'](1);
});
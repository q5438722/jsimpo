'use strict';

const _0x9a63 = ['atom.policy', 'actions', 'fakeroot', 'log', 'Creating Debian package for "', 'DvkXB', 'channel', 'lGQsS', 'AzUGa', 'appMetadata', 'description', 'ia32', 'arch', 'mMDYl', 'DrcqI', 'UTKuN', 'TWYZL', 'join', 'buildOutputPath', 'tmpdir', 'basename', 'hnjDY', 'iTByt', 'VxLpf', 'CFprm', 'oqTME', 'existsSync', 'Deleting existing build dir for Debian package at "', 'removeSync', '.deb', 'Deleting existing Debian package at "', 'Creating Debian package directory structure at "', 'mkdirpSync', 'Copying "', '" to "', 'copySync', 'chmodSync', '755', 'Copying binaries into "', 'repositoryRootPath', 'THpsc', 'Fasof', 'JwGdH', 'nmmVh', 'mGjVk', 'sCEuO', 'OAXFw', 'Writing control file into "', 'VIPeD', 'stdout', 'toString', 'readFileSync', 'LKebZ', 'dSYWT', 'control.in', 'VLoAR', 'writeFileSync', 'control', 'Writing desktop entry file into "', 'eVAri', 'appName', 'KHnPv', '.desktop', 'Copying icon into "', 'eCcYk', '.png', 'Copying license into "', 'rtApV', 'Copying polkit configuration into "', 'AKsUN', 'atom-', '.policy', 'Generating .deb file from ', 'DzuOT', 'dpkg-deb', 'inherit', 'Copying generated package into "', '2859oYXeHt', '34lagNRC', '297912PxNeeT', '1BvCURw', '13147JIMipP', '750848TDnlsb', '83215SxDKSo', '1200829BQllyS', '1EThSsT', '104201wHiyyY', 'fs-extra', 'path', './spawn-sync', 'exports', 'stable', 'atom', 'apm', 'x64', 'amd64', 'powerpc', 'DEBIAN', 'usr', 'bin', 'share', 'applications', 'pixmaps', 'doc', 'atom.sh', 'resources', 'app', '.bin', 'chrome-sandbox', '4755', '-sk', 'linux', 'atom.desktop.in', '/usr', 'app.asar.unpacked', 'atom.png', 'LICENSE.md', 'copyright'];

function _0x34b1(_0x2896b5, _0xb2a10) {
    return _0x34b1 = function (_0x2c4aa4, _0x163ad6) {
        _0x2c4aa4 = _0x2c4aa4 - 337;
        const _0x28b578 = _0x9a63[_0x2c4aa4];

        return _0x28b578;
    }, _0x34b1(_0x2896b5, _0xb2a10);
}
const _0x136916 = _0x34b1;

(function (_0x48299d, _0x3794be) {
    const _0x353863 = _0x34b1;

    while (true) {
        try {
            const _0x4756f1 = parseInt(_0x353863(0x151)) * -parseInt(_0x353863(0x152)) + parseInt(_0x353863(0x153)) + parseInt(_0x353863(0x154)) * -parseInt(_0x353863(0x155)) + -parseInt(_0x353863(0x156)) + parseInt(_0x353863(0x157)) + parseInt(_0x353863(0x158)) + -parseInt(_0x353863(0x159)) * parseInt(_0x353863(0x15a));

            if (_0x4756f1 === _0x3794be) break;else _0x48299d.push(_0x48299d.shift());
        } catch (_0x46e4fd) {
            _0x48299d.push(_0x48299d.shift());
        }
    }
})(_0x9a63, 616554);

const fs = require(_0x136916(0x15b));

const os = require('os');

const path = require(_0x136916(0x15c));

const spawnSync = require(_0x136916(0x15d));

const template = require('lodash.template');

const CONFIG = require('../config');

module[_0x136916(0x15e)] = function (_0x1c7952) {
    const _0x41951f = _0x136916;
    const _0x48d776 = {
        'DvkXB': function (_0x542c6d, _0x265235) {
            return _0x542c6d === _0x265235;
        },
        'AzUGa': _0x41951f(0x15f),
        'lGQsS': _0x41951f(0x160),
        'JwGdH': _0x41951f(0x161),
        'qsevk': 'i386',
        'wBpxU': function (_0x4c4ed1, _0x3edf16) {
            return _0x4c4ed1 === _0x3edf16;
        },
        'mMDYl': _0x41951f(0x162),
        'DrcqI': _0x41951f(0x163),
        'UTKuN': function (_0x4b1226, _0x330c2b) {
            return _0x4b1226 === _0x330c2b;
        },
        'TWYZL': _0x41951f(0x164),
        'BwGiE': _0x41951f(0x165),
        'hnjDY': _0x41951f(0x166),
        'iTByt': _0x41951f(0x167),
        'VxLpf': _0x41951f(0x168),
        'CFprm': _0x41951f(0x169),
        'oqTME': _0x41951f(0x16a),
        'qErAp': _0x41951f(0x16b),
        'aHPuV': _0x41951f(0x16c),
        'THpsc': _0x41951f(0x16d),
        'Fasof': _0x41951f(0x16e),
        'nmmVh': 'node_modules',
        'mGjVk': _0x41951f(0x16f),
        'sCEuO': _0x41951f(0x170),
        'OAXFw': _0x41951f(0x171),
        'VIPeD': _0x41951f(0x172),
        'LKebZ': _0x41951f(0x173),
        'dSYWT': 'debian',
        'VLoAR': function (_0x26d94a, _0x5b444b) {
            return _0x26d94a(_0x5b444b);
        },
        'eVAri': _0x41951f(0x174),
        'KHnPv': _0x41951f(0x175),
        'BzTTL': _0x41951f(0x176),
        'eCcYk': _0x41951f(0x177),
        'PvIdG': _0x41951f(0x178),
        'rtApV': _0x41951f(0x179),
        'AKsUN': _0x41951f(0x17a),
        'CqTES': _0x41951f(0x17b),
        'DzuOT': _0x41951f(0x17c)
    };

    console[_0x41951f(0x17d)](_0x41951f(0x17e) + _0x1c7952 + '"');

    const _0x561d67 = _0x48d776[_0x41951f(0x17f)](CONFIG[_0x41951f(0x180)], _0x48d776.AzUGa) ? _0x48d776[_0x41951f(0x181)] : 'atom-' + CONFIG.channel;

    const _0x565352 = CONFIG[_0x41951f(0x180)] === _0x48d776[_0x41951f(0x182)] ? _0x48d776.JwGdH : 'apm-' + CONFIG[_0x41951f(0x180)];

    const _0x4e14ff = CONFIG[_0x41951f(0x183)][_0x41951f(0x184)];

    const _0x5cee25 = CONFIG.appMetadata.version;

    var _0x363983;

    if (process.arch === _0x41951f(0x185)) _0x363983 = _0x48d776.qsevk;else {
        if (_0x48d776.wBpxU(process[_0x41951f(0x186)], _0x48d776[_0x41951f(0x187)])) _0x363983 = _0x48d776[_0x41951f(0x188)];else _0x48d776[_0x41951f(0x189)](process[_0x41951f(0x186)], 'ppc') ? _0x363983 = _0x48d776[_0x41951f(0x18a)] : _0x363983 = process[_0x41951f(0x186)];
    }

    const _0x16385a = path[_0x41951f(0x18b)](CONFIG[_0x41951f(0x18c)], 'atom-' + _0x363983 + '.deb');

    const _0x552516 = path.join(os[_0x41951f(0x18d)](), path[_0x41951f(0x18e)](_0x1c7952));

    const _0xf10a9c = path.join(_0x552516, _0x48d776.BwGiE);

    const _0x21d87b = path[_0x41951f(0x18b)](_0x552516, _0x48d776[_0x41951f(0x18f)]);

    const _0x168e73 = path[_0x41951f(0x18b)](_0x21d87b, _0x48d776[_0x41951f(0x190)]);

    const _0x22c2bd = path.join(_0x21d87b, _0x48d776[_0x41951f(0x191)]);

    const _0x2207fa = path[_0x41951f(0x18b)](_0x22c2bd, _0x561d67);

    const _0x551828 = path[_0x41951f(0x18b)](_0x22c2bd, _0x48d776[_0x41951f(0x192)]);

    const _0x4ff09c = path.join(_0x22c2bd, _0x48d776[_0x41951f(0x193)]);

    const _0x57cc45 = path[_0x41951f(0x18b)](_0x22c2bd, _0x48d776.qErAp, _0x561d67);

    fs[_0x41951f(0x194)](_0x552516) && (console[_0x41951f(0x17d)](_0x41951f(0x195) + _0x552516 + '"'), fs[_0x41951f(0x196)](_0x552516));
    fs.existsSync(_0x552516 + _0x41951f(0x197)) && (console[_0x41951f(0x17d)](_0x41951f(0x198) + _0x552516 + '.deb"'), fs[_0x41951f(0x196)](_0x552516 + '.deb'));
    fs.existsSync(_0x552516) && (console[_0x41951f(0x17d)]('Deleting existing Debian package at "' + _0x16385a + '"'), fs[_0x41951f(0x196)](_0x552516));
    console[_0x41951f(0x17d)](_0x41951f(0x199) + _0x552516 + '"'), fs[_0x41951f(0x19a)](_0x552516), fs[_0x41951f(0x19a)](_0xf10a9c), fs[_0x41951f(0x19a)](_0x21d87b), fs[_0x41951f(0x19a)](_0x22c2bd), fs[_0x41951f(0x19a)](_0x551828), fs.mkdirpSync(_0x4ff09c), fs.mkdirpSync(_0x57cc45), fs[_0x41951f(0x19a)](_0x168e73), console.log(_0x41951f(0x19b) + _0x1c7952 + _0x41951f(0x19c) + _0x2207fa + '"'), fs[_0x41951f(0x19d)](_0x1c7952, _0x2207fa), fs[_0x41951f(0x19e)](_0x2207fa, _0x41951f(0x19f)), console[_0x41951f(0x17d)](_0x41951f(0x1a0) + _0x168e73 + '"'), fs[_0x41951f(0x19d)](path[_0x41951f(0x18b)](CONFIG[_0x41951f(0x1a1)], _0x48d776.aHPuV), path[_0x41951f(0x18b)](_0x168e73, _0x561d67)), fs.symlinkSync(path[_0x41951f(0x18b)]('..', _0x48d776[_0x41951f(0x191)], _0x561d67, _0x48d776[_0x41951f(0x1a2)], _0x48d776[_0x41951f(0x1a3)], _0x48d776[_0x41951f(0x1a4)], _0x48d776[_0x41951f(0x1a5)], _0x48d776[_0x41951f(0x1a6)], _0x41951f(0x161)), path[_0x41951f(0x18b)](_0x168e73, _0x565352)), fs[_0x41951f(0x19e)](path[_0x41951f(0x18b)](_0x2207fa, _0x48d776[_0x41951f(0x1a7)]), _0x48d776[_0x41951f(0x1a8)]), console[_0x41951f(0x17d)](_0x41951f(0x1a9) + _0xf10a9c + '"');

    const _0x4d1824 = spawnSync('du', [_0x48d776[_0x41951f(0x1aa)], _0x1c7952])[_0x41951f(0x1ab)][_0x41951f(0x1ac)]().split(/\s+/)[0];

    const _0x36091f = fs[_0x41951f(0x1ad)](path[_0x41951f(0x18b)](CONFIG[_0x41951f(0x1a1)], _0x48d776[_0x41951f(0x1a2)], _0x48d776[_0x41951f(0x1ae)], _0x48d776[_0x41951f(0x1af)], _0x41951f(0x1b0)));

    const _0x17554c = _0x48d776[_0x41951f(0x1b1)](template, _0x36091f)({
        'appFileName': _0x561d67,
        'version': _0x5cee25,
        'arch': _0x363983,
        'installedSize': _0x4d1824,
        'description': _0x4e14ff
    });

    fs[_0x41951f(0x1b2)](path[_0x41951f(0x18b)](_0xf10a9c, _0x41951f(0x1b3)), _0x17554c), console[_0x41951f(0x17d)](_0x41951f(0x1b4) + _0x551828 + '"');

    const _0xbfdaa9 = fs.readFileSync(path[_0x41951f(0x18b)](CONFIG.repositoryRootPath, _0x48d776[_0x41951f(0x1a2)], _0x48d776[_0x41951f(0x1ae)], _0x48d776[_0x41951f(0x1b5)]));

    const _0x251fed = _0x48d776[_0x41951f(0x1b1)](template, _0xbfdaa9)({
        'appName': CONFIG[_0x41951f(0x1b6)],
        'appFileName': _0x561d67,
        'description': _0x4e14ff,
        'installDir': _0x48d776[_0x41951f(0x1b7)],
        'iconPath': _0x561d67
    });

    fs[_0x41951f(0x1b2)](path[_0x41951f(0x18b)](_0x551828, _0x561d67 + _0x41951f(0x1b8)), _0x251fed), console[_0x41951f(0x17d)](_0x41951f(0x1b9) + _0x4ff09c + '"'), fs[_0x41951f(0x19d)](path[_0x41951f(0x18b)](_0x1c7952, _0x41951f(0x16d), _0x48d776.BzTTL, _0x41951f(0x16d), _0x48d776[_0x41951f(0x1ba)]), path[_0x41951f(0x18b)](_0x4ff09c, _0x561d67 + _0x41951f(0x1bb))), console[_0x41951f(0x17d)](_0x41951f(0x1bc) + _0x57cc45 + '"'), fs[_0x41951f(0x19d)](path[_0x41951f(0x18b)](_0x1c7952, _0x48d776.THpsc, _0x48d776.PvIdG), path[_0x41951f(0x18b)](_0x57cc45, _0x48d776[_0x41951f(0x1bd)])), console[_0x41951f(0x17d)](_0x41951f(0x1be) + _0x22c2bd + '"'), fs[_0x41951f(0x19d)](path[_0x41951f(0x18b)](CONFIG[_0x41951f(0x1a1)], 'resources', _0x41951f(0x173), _0x48d776[_0x41951f(0x1bf)]), path[_0x41951f(0x18b)](_0x22c2bd, 'polkit-1', _0x48d776.CqTES, _0x41951f(0x1c0) + CONFIG[_0x41951f(0x180)] + _0x41951f(0x1c1))), console.log(_0x41951f(0x1c2) + _0x552516), spawnSync(_0x48d776[_0x41951f(0x1c3)], [_0x41951f(0x1c4), '-b', _0x552516], { 'stdio': _0x41951f(0x1c5) }), console.log(_0x41951f(0x1c6) + _0x16385a + '"'), fs[_0x41951f(0x19d)](_0x552516 + '.deb', _0x16385a);
};

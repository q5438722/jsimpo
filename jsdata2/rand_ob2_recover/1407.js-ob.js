const fs = require(_0x2b7a33(489)), os = require('os'), path = require('path'), spawnSync = require(_0x2b7a33(490)), template = require(_0x2b7a33(491)), CONFIG = require('../config');
module[_0x2b7a33(492)] = function (_0x525894) {
    const _0x31aa6d = _0x2b7a33;
    console['log'](_0x31aa6d(493) + _0x525894 + '"');
    const _0x4a3849 = CONFIG[_0x31aa6d(494)] === _0x31aa6d(495) ? _0x31aa6d(496) : _0x31aa6d(497) + CONFIG[_0x31aa6d(494)], _0x360cff = CONFIG[_0x31aa6d(494)] === _0x31aa6d(495) ? 'apm' : _0x31aa6d(498) + CONFIG[_0x31aa6d(494)], _0x5f1d1d = CONFIG['appMetadata'][_0x31aa6d(499)], _0xa5cd75 = CONFIG[_0x31aa6d(500)][_0x31aa6d(501)];
    let _0x39b463;
    if (process[_0x31aa6d(502)] === _0x31aa6d(503))
        _0x39b463 = 'i386';
    else {
        if (process[_0x31aa6d(502)] === _0x31aa6d(504))
            _0x39b463 = _0x31aa6d(505);
        else
            process['arch'] === 'ppc' ? _0x39b463 = 'powerpc' : _0x39b463 = process['arch'];
    }
    const _0x2f99e9 = path[_0x31aa6d(506)](CONFIG[_0x31aa6d(507)], _0x31aa6d(497) + _0x39b463 + _0x31aa6d(508)), _0x460137 = path['join'](os[_0x31aa6d(509)](), path[_0x31aa6d(510)](_0x525894)), _0x43d584 = path[_0x31aa6d(506)](_0x460137, _0x31aa6d(511)), _0x1f48fd = path[_0x31aa6d(506)](_0x460137, _0x31aa6d(512)), _0x394fbf = path['join'](_0x1f48fd, 'bin'), _0x26c399 = path[_0x31aa6d(506)](_0x1f48fd, _0x31aa6d(513)), _0x431418 = path[_0x31aa6d(506)](_0x26c399, _0x4a3849), _0x2a03bc = path[_0x31aa6d(506)](_0x26c399, _0x31aa6d(514)), _0x5914dd = path[_0x31aa6d(506)](_0x26c399, _0x31aa6d(515)), _0x4fa40b = path[_0x31aa6d(506)](_0x26c399, _0x31aa6d(516), _0x4a3849);
    fs[_0x31aa6d(517)](_0x460137) && (console[_0x31aa6d(518)]('Deleting existing build dir for Debian package at "' + _0x460137 + '"'), fs[_0x31aa6d(519)](_0x460137));
    fs[_0x31aa6d(517)](_0x460137 + '.deb') && (console[_0x31aa6d(518)](_0x31aa6d(520) + _0x460137 + _0x31aa6d(521)), fs['removeSync'](_0x460137 + '.deb'));
    fs[_0x31aa6d(517)](_0x460137) && (console[_0x31aa6d(518)](_0x31aa6d(520) + _0x2f99e9 + '"'), fs[_0x31aa6d(519)](_0x460137));
    console[_0x31aa6d(518)](_0x31aa6d(522) + _0x460137 + '"'), fs[_0x31aa6d(523)](_0x460137), fs[_0x31aa6d(523)](_0x43d584), fs[_0x31aa6d(523)](_0x1f48fd), fs[_0x31aa6d(523)](_0x26c399), fs[_0x31aa6d(523)](_0x2a03bc), fs[_0x31aa6d(523)](_0x5914dd), fs[_0x31aa6d(523)](_0x4fa40b), fs[_0x31aa6d(523)](_0x394fbf), console['log']('Copying "' + _0x525894 + '" to "' + _0x431418 + '"'), fs[_0x31aa6d(524)](_0x525894, _0x431418), fs[_0x31aa6d(525)](_0x431418, _0x31aa6d(526)), console[_0x31aa6d(518)](_0x31aa6d(527) + _0x394fbf + '"'), fs[_0x31aa6d(524)](path[_0x31aa6d(506)](CONFIG[_0x31aa6d(528)], _0x31aa6d(529)), path[_0x31aa6d(506)](_0x394fbf, _0x4a3849)), fs[_0x31aa6d(530)](path['join']('..', _0x31aa6d(513), _0x4a3849, _0x31aa6d(531), _0x31aa6d(532), _0x31aa6d(533), 'node_modules', _0x31aa6d(534), 'apm'), path['join'](_0x394fbf, _0x360cff)), fs['chmodSync'](path['join'](_0x431418, _0x31aa6d(535)), '4755'), console[_0x31aa6d(518)](_0x31aa6d(536) + _0x43d584 + '"');
    const _0x5890a7 = spawnSync('du', [
            _0x31aa6d(537),
            _0x525894
        ])[_0x31aa6d(538)][_0x31aa6d(539)]()[_0x31aa6d(540)](/\s+/)[0], _0x43bf0b = fs[_0x31aa6d(541)](path[_0x31aa6d(506)](CONFIG[_0x31aa6d(528)], _0x31aa6d(531), _0x31aa6d(542), _0x31aa6d(543), _0x31aa6d(544))), _0x2d6316 = template(_0x43bf0b)({
            'appFileName': _0x4a3849,
            'version': _0xa5cd75,
            'arch': _0x39b463,
            'installedSize': _0x5890a7,
            'description': _0x5f1d1d
        });
    fs[_0x31aa6d(545)](path[_0x31aa6d(506)](_0x43d584, _0x31aa6d(546)), _0x2d6316), console['log']('Writing desktop entry file into "' + _0x2a03bc + '"');
    const _0x4346bc = fs[_0x31aa6d(541)](path['join'](CONFIG[_0x31aa6d(528)], 'resources', 'linux', _0x31aa6d(547))), _0x32b5b1 = template(_0x4346bc)({
            'appName': CONFIG[_0x31aa6d(548)],
            'appFileName': _0x4a3849,
            'description': _0x5f1d1d,
            'installDir': _0x31aa6d(549),
            'iconPath': _0x4a3849
        });
    fs['writeFileSync'](path[_0x31aa6d(506)](_0x2a03bc, _0x4a3849 + _0x31aa6d(550)), _0x32b5b1), console['log'](_0x31aa6d(551) + _0x5914dd + '"'), fs[_0x31aa6d(524)](path[_0x31aa6d(506)](_0x525894, _0x31aa6d(531), _0x31aa6d(552), _0x31aa6d(531), _0x31aa6d(553)), path[_0x31aa6d(506)](_0x5914dd, _0x4a3849 + _0x31aa6d(554))), console[_0x31aa6d(518)](_0x31aa6d(555) + _0x4fa40b + '"'), fs[_0x31aa6d(524)](path['join'](_0x525894, 'resources', _0x31aa6d(556)), path[_0x31aa6d(506)](_0x4fa40b, 'copyright')), console[_0x31aa6d(518)](_0x31aa6d(557) + _0x26c399 + '"'), fs[_0x31aa6d(524)](path[_0x31aa6d(506)](CONFIG[_0x31aa6d(528)], _0x31aa6d(531), 'linux', 'atom.policy'), path[_0x31aa6d(506)](_0x26c399, _0x31aa6d(558), _0x31aa6d(559), _0x31aa6d(497) + CONFIG['channel'] + _0x31aa6d(560))), console[_0x31aa6d(518)](_0x31aa6d(561) + _0x460137), spawnSync('fakeroot', [
        _0x31aa6d(562),
        '-b',
        _0x460137
    ], { 'stdio': _0x31aa6d(563) }), console[_0x31aa6d(518)](_0x31aa6d(564) + _0x2f99e9 + '"'), fs['copySync'](_0x460137 + '.deb', _0x2f99e9);
};
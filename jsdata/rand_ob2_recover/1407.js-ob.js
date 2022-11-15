const fs = require(_0x43ca64(465)), os = require('os'), path = require(_0x43ca64(466)), spawnSync = require(_0x43ca64(467)), template = require(_0x43ca64(468)), CONFIG = require('../config');
function _0x4fef(_0x25b433, _0x237292) {
    return _0x4fef = function (_0x34de93, _0x4feffc) {
        _0x34de93 = _0x34de93 - 455;
        let _0x509305 = _0x34de[_0x34de93];
        return _0x509305;
    }, _0x4fef(_0x25b433, _0x237292);
}
module[_0x43ca64(469)] = function (_0xb02374) {
    const _0x146e3b = _0x43ca64;
    console['log'](_0x146e3b(470) + _0xb02374 + '"');
    const _0x1abce4 = CONFIG[_0x146e3b(471)] === 'stable' ? _0x146e3b(472) : _0x146e3b(473) + CONFIG[_0x146e3b(471)], _0xeaf276 = CONFIG[_0x146e3b(471)] === _0x146e3b(474) ? _0x146e3b(475) : 'apm-' + CONFIG[_0x146e3b(471)], _0x4e69fe = CONFIG[_0x146e3b(476)][_0x146e3b(477)], _0x2882b8 = CONFIG['appMetadata'][_0x146e3b(478)];
    let _0x3f2371;
    if (process['arch'] === _0x146e3b(479))
        _0x3f2371 = _0x146e3b(480);
    else {
        if (process[_0x146e3b(481)] === _0x146e3b(482))
            _0x3f2371 = _0x146e3b(483);
        else
            process['arch'] === 'ppc' ? _0x3f2371 = _0x146e3b(484) : _0x3f2371 = process[_0x146e3b(481)];
    }
    const _0x4e0220 = path[_0x146e3b(485)](CONFIG[_0x146e3b(486)], _0x146e3b(473) + _0x3f2371 + '.deb'), _0x51c6c2 = path['join'](os[_0x146e3b(487)](), path[_0x146e3b(488)](_0xb02374)), _0x2e6c32 = path[_0x146e3b(485)](_0x51c6c2, 'DEBIAN'), _0x441cf3 = path[_0x146e3b(485)](_0x51c6c2, _0x146e3b(489)), _0x1a7d8d = path[_0x146e3b(485)](_0x441cf3, _0x146e3b(490)), _0x112440 = path[_0x146e3b(485)](_0x441cf3, _0x146e3b(491)), _0x12e406 = path[_0x146e3b(485)](_0x112440, _0x1abce4), _0x3881e2 = path[_0x146e3b(485)](_0x112440, _0x146e3b(492)), _0x48ffa2 = path[_0x146e3b(485)](_0x112440, _0x146e3b(493)), _0x1a262f = path[_0x146e3b(485)](_0x112440, _0x146e3b(494), _0x1abce4);
    fs[_0x146e3b(495)](_0x51c6c2) && (console[_0x146e3b(496)]('Deleting existing build dir for Debian package at "' + _0x51c6c2 + '"'), fs[_0x146e3b(497)](_0x51c6c2));
    fs['existsSync'](_0x51c6c2 + _0x146e3b(498)) && (console[_0x146e3b(496)](_0x146e3b(499) + _0x51c6c2 + _0x146e3b(500)), fs[_0x146e3b(497)](_0x51c6c2 + '.deb'));
    fs[_0x146e3b(495)](_0x51c6c2) && (console[_0x146e3b(496)](_0x146e3b(499) + _0x4e0220 + '"'), fs[_0x146e3b(497)](_0x51c6c2));
    console[_0x146e3b(496)](_0x146e3b(501) + _0x51c6c2 + '"'), fs[_0x146e3b(502)](_0x51c6c2), fs[_0x146e3b(502)](_0x2e6c32), fs[_0x146e3b(502)](_0x441cf3), fs[_0x146e3b(502)](_0x112440), fs['mkdirpSync'](_0x3881e2), fs[_0x146e3b(502)](_0x48ffa2), fs[_0x146e3b(502)](_0x1a262f), fs[_0x146e3b(502)](_0x1a7d8d), console[_0x146e3b(496)](_0x146e3b(503) + _0xb02374 + '" to "' + _0x12e406 + '"'), fs[_0x146e3b(504)](_0xb02374, _0x12e406), fs[_0x146e3b(505)](_0x12e406, '755'), console['log'](_0x146e3b(506) + _0x1a7d8d + '"'), fs[_0x146e3b(504)](path['join'](CONFIG[_0x146e3b(507)], 'atom.sh'), path['join'](_0x1a7d8d, _0x1abce4)), fs['symlinkSync'](path['join']('..', 'share', _0x1abce4, _0x146e3b(508), 'app', _0x146e3b(475), _0x146e3b(509), '.bin', _0x146e3b(475)), path[_0x146e3b(485)](_0x1a7d8d, _0xeaf276)), fs['chmodSync'](path[_0x146e3b(485)](_0x12e406, _0x146e3b(510)), '4755'), console['log'](_0x146e3b(511) + _0x2e6c32 + '"');
    const _0xebda81 = spawnSync('du', [
            _0x146e3b(512),
            _0xb02374
        ])[_0x146e3b(513)][_0x146e3b(514)]()[_0x146e3b(515)](/\s+/)[0], _0x4b929d = fs[_0x146e3b(516)](path[_0x146e3b(485)](CONFIG[_0x146e3b(507)], 'resources', _0x146e3b(517), _0x146e3b(518), 'control.in')), _0x37ffb0 = template(_0x4b929d)({
            'appFileName': _0x1abce4,
            'version': _0x2882b8,
            'arch': _0x3f2371,
            'installedSize': _0xebda81,
            'description': _0x4e69fe
        });
    fs[_0x146e3b(519)](path['join'](_0x2e6c32, 'control'), _0x37ffb0), console[_0x146e3b(496)](_0x146e3b(520) + _0x3881e2 + '"');
    const _0x50ef5b = fs[_0x146e3b(516)](path[_0x146e3b(485)](CONFIG['repositoryRootPath'], _0x146e3b(508), _0x146e3b(517), 'atom.desktop.in')), _0x2f7e32 = template(_0x50ef5b)({
            'appName': CONFIG[_0x146e3b(521)],
            'appFileName': _0x1abce4,
            'description': _0x4e69fe,
            'installDir': _0x146e3b(522),
            'iconPath': _0x1abce4
        });
    fs[_0x146e3b(519)](path['join'](_0x3881e2, _0x1abce4 + _0x146e3b(523)), _0x2f7e32), console[_0x146e3b(496)](_0x146e3b(524) + _0x48ffa2 + '"'), fs[_0x146e3b(504)](path[_0x146e3b(485)](_0xb02374, _0x146e3b(508), _0x146e3b(525), _0x146e3b(508), _0x146e3b(526)), path[_0x146e3b(485)](_0x48ffa2, _0x1abce4 + '.png')), console[_0x146e3b(496)](_0x146e3b(527) + _0x1a262f + '"'), fs[_0x146e3b(504)](path['join'](_0xb02374, _0x146e3b(508), _0x146e3b(528)), path[_0x146e3b(485)](_0x1a262f, 'copyright')), console['log'](_0x146e3b(529) + _0x112440 + '"'), fs[_0x146e3b(504)](path[_0x146e3b(485)](CONFIG[_0x146e3b(507)], _0x146e3b(508), _0x146e3b(517), 'atom.policy'), path[_0x146e3b(485)](_0x112440, _0x146e3b(530), _0x146e3b(531), 'atom-' + CONFIG[_0x146e3b(471)] + _0x146e3b(532))), console[_0x146e3b(496)](_0x146e3b(533) + _0x51c6c2), spawnSync(_0x146e3b(534), [
        _0x146e3b(535),
        '-b',
        _0x51c6c2
    ], { 'stdio': _0x146e3b(536) }), console['log'](_0x146e3b(537) + _0x4e0220 + '"'), fs[_0x146e3b(504)](_0x51c6c2 + _0x146e3b(498), _0x4e0220);
};
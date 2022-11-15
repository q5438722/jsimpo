const fs = require(_0x1f3b0e(294)), os = require('os'), path = require(_0x1f3b0e(295)), spawnSync = require(_0x1f3b0e(296)), template = require(_0x1f3b0e(297)), CONFIG = require(_0x1f3b0e(298));
function _0x562c(_0x571e84, _0xaaa360) {
    return _0x562c = function (_0x4d5af6, _0xa3f632) {
        _0x4d5af6 = _0x4d5af6 - (2284 * -2 + -300 + 5150);
        let _0x440fd7 = _0x5e9f[_0x4d5af6];
        return _0x440fd7;
    }, _0x562c(_0x571e84, _0xaaa360);
}
module[_0x1f3b0e(299)] = function (_0x2577e9) {
    const _0x5162e2 = _0x1f3b0e, _0x4216d4 = {
            'FyyHt': function (_0x2bff98, _0x274f19) {
                return _0x2bff98 === _0x274f19;
            },
            'hkAUi': _0x5162e2(300),
            'VFaKj': _0x5162e2(301),
            'CBMxG': _0x5162e2(302),
            'CxrPx': 'i386',
            'UBAiY': _0x5162e2(303),
            'FnwEa': _0x5162e2(304),
            'AuwWE': 'powerpc',
            'yZRFl': _0x5162e2(305),
            'FzPOc': 'usr',
            'fVJYT': 'bin',
            'tWAal': 'share',
            'Kffha': _0x5162e2(306),
            'zfWyI': _0x5162e2(307),
            'ivhTI': _0x5162e2(308),
            'ywwFo': 'app',
            'afEtH': 'node_modules',
            'GTgwq': _0x5162e2(309),
            'DVLVY': _0x5162e2(310),
            'CEWhF': function (_0x3957e1, _0x479bdb, _0x15a9cc) {
                return _0x3957e1(_0x479bdb, _0x15a9cc);
            },
            'MPulN': _0x5162e2(311),
            'zcvVI': 'debian',
            'GElHq': _0x5162e2(312),
            'EFAAH': function (_0x1ccc7a, _0x5e73ef) {
                return _0x1ccc7a(_0x5e73ef);
            },
            'wHGlP': _0x5162e2(313),
            'ecIpl': 'resources',
            'hIwaO': _0x5162e2(314),
            'LCBRE': function (_0x594de2, _0x516c11) {
                return _0x594de2(_0x516c11);
            },
            'AuzJF': _0x5162e2(315),
            'Qlxii': 'LICENSE.md',
            'ZjVgE': _0x5162e2(316),
            'yqqdy': _0x5162e2(317),
            'rBGzz': _0x5162e2(318),
            'uTCFb': _0x5162e2(319),
            'HYyID': function (_0x3595c9, _0x3bf792, _0x385ea6, _0x156ec1) {
                return _0x3595c9(_0x3bf792, _0x385ea6, _0x156ec1);
            },
            'wblSq': _0x5162e2(320),
            'PyIEp': _0x5162e2(321),
            'pCDhF': _0x5162e2(322)
        };
    console[_0x5162e2(323)]('Creating Debian package for "' + _0x2577e9 + '"');
    const _0x1fa4ab = _0x4216d4['FyyHt'](CONFIG[_0x5162e2(324)], _0x4216d4[_0x5162e2(325)]) ? _0x5162e2(326) : _0x5162e2(327) + CONFIG[_0x5162e2(324)], _0x52e4e9 = CONFIG['channel'] === _0x4216d4[_0x5162e2(325)] ? _0x4216d4[_0x5162e2(328)] : _0x5162e2(329) + CONFIG['channel'], _0x3d6a4a = CONFIG[_0x5162e2(330)]['description'], _0x599408 = CONFIG[_0x5162e2(330)][_0x5162e2(331)];
    let _0x51089e;
    if (process[_0x5162e2(332)] === _0x4216d4[_0x5162e2(333)])
        _0x51089e = _0x4216d4[_0x5162e2(334)];
    else {
        if (_0x4216d4[_0x5162e2(335)](process[_0x5162e2(332)], _0x4216d4[_0x5162e2(336)]))
            _0x51089e = _0x4216d4['FnwEa'];
        else
            _0x4216d4[_0x5162e2(335)](process[_0x5162e2(332)], 'ppc') ? _0x51089e = _0x4216d4['AuwWE'] : _0x51089e = process['arch'];
    }
    const _0x3fe667 = path[_0x5162e2(337)](CONFIG[_0x5162e2(338)], _0x5162e2(327) + _0x51089e + '.deb'), _0x4216dc = path[_0x5162e2(337)](os['tmpdir'](), path[_0x5162e2(339)](_0x2577e9)), _0x146691 = path[_0x5162e2(337)](_0x4216dc, _0x4216d4[_0x5162e2(340)]), _0x267ab7 = path[_0x5162e2(337)](_0x4216dc, _0x4216d4[_0x5162e2(341)]), _0x2baffa = path['join'](_0x267ab7, _0x4216d4['fVJYT']), _0x1cd9f9 = path['join'](_0x267ab7, _0x4216d4[_0x5162e2(342)]), _0x25eb42 = path['join'](_0x1cd9f9, _0x1fa4ab), _0xdab2b8 = path[_0x5162e2(337)](_0x1cd9f9, _0x4216d4[_0x5162e2(343)]), _0x47786f = path['join'](_0x1cd9f9, _0x4216d4['zfWyI']), _0x20d565 = path[_0x5162e2(337)](_0x1cd9f9, _0x4216d4[_0x5162e2(344)], _0x1fa4ab);
    fs[_0x5162e2(345)](_0x4216dc) && (console['log'](_0x5162e2(346) + _0x4216dc + '"'), fs[_0x5162e2(347)](_0x4216dc));
    fs[_0x5162e2(345)](_0x4216dc + '.deb') && (console[_0x5162e2(323)](_0x5162e2(348) + _0x4216dc + _0x5162e2(349)), fs[_0x5162e2(347)](_0x4216dc + _0x5162e2(350)));
    fs[_0x5162e2(345)](_0x4216dc) && (console[_0x5162e2(323)](_0x5162e2(348) + _0x3fe667 + '"'), fs[_0x5162e2(347)](_0x4216dc));
    console[_0x5162e2(323)](_0x5162e2(351) + _0x4216dc + '"'), fs['mkdirpSync'](_0x4216dc), fs[_0x5162e2(352)](_0x146691), fs[_0x5162e2(352)](_0x267ab7), fs[_0x5162e2(352)](_0x1cd9f9), fs[_0x5162e2(352)](_0xdab2b8), fs['mkdirpSync'](_0x47786f), fs['mkdirpSync'](_0x20d565), fs['mkdirpSync'](_0x2baffa), console[_0x5162e2(323)](_0x5162e2(353) + _0x2577e9 + '" to "' + _0x25eb42 + '"'), fs[_0x5162e2(354)](_0x2577e9, _0x25eb42), fs[_0x5162e2(355)](_0x25eb42, _0x5162e2(356)), console[_0x5162e2(323)](_0x5162e2(357) + _0x2baffa + '"'), fs[_0x5162e2(354)](path[_0x5162e2(337)](CONFIG[_0x5162e2(358)], 'atom.sh'), path[_0x5162e2(337)](_0x2baffa, _0x1fa4ab)), fs[_0x5162e2(359)](path[_0x5162e2(337)]('..', _0x5162e2(360), _0x1fa4ab, _0x5162e2(361), _0x4216d4['ywwFo'], _0x5162e2(301), _0x4216d4[_0x5162e2(362)], '.bin', _0x4216d4[_0x5162e2(328)]), path['join'](_0x2baffa, _0x52e4e9)), fs[_0x5162e2(355)](path[_0x5162e2(337)](_0x25eb42, _0x4216d4[_0x5162e2(363)]), _0x4216d4['DVLVY']), console[_0x5162e2(323)](_0x5162e2(364) + _0x146691 + '"');
    const _0x33ef8f = _0x4216d4[_0x5162e2(365)](spawnSync, 'du', [
            _0x4216d4[_0x5162e2(366)],
            _0x2577e9
        ])['stdout']['toString']()[_0x5162e2(367)](/\s+/)[-6285 + 1 * 6755 + -235 * 2], _0x4522cb = fs[_0x5162e2(368)](path['join'](CONFIG[_0x5162e2(358)], _0x5162e2(361), _0x5162e2(369), _0x4216d4[_0x5162e2(370)], _0x4216d4['GElHq'])), _0x21dcd2 = _0x4216d4[_0x5162e2(371)](template, _0x4522cb)({
            'appFileName': _0x1fa4ab,
            'version': _0x599408,
            'arch': _0x51089e,
            'installedSize': _0x33ef8f,
            'description': _0x3d6a4a
        });
    fs[_0x5162e2(372)](path[_0x5162e2(337)](_0x146691, _0x4216d4[_0x5162e2(373)]), _0x21dcd2), console['log'](_0x5162e2(374) + _0xdab2b8 + '"');
    const _0x24501c = fs[_0x5162e2(368)](path[_0x5162e2(337)](CONFIG[_0x5162e2(358)], _0x4216d4[_0x5162e2(375)], _0x5162e2(369), _0x4216d4[_0x5162e2(376)])), _0x2dff1b = _0x4216d4[_0x5162e2(377)](template, _0x24501c)({
            'appName': CONFIG[_0x5162e2(378)],
            'appFileName': _0x1fa4ab,
            'description': _0x3d6a4a,
            'installDir': _0x4216d4[_0x5162e2(379)],
            'iconPath': _0x1fa4ab
        });
    fs[_0x5162e2(372)](path[_0x5162e2(337)](_0xdab2b8, _0x1fa4ab + _0x5162e2(380)), _0x2dff1b), console[_0x5162e2(323)](_0x5162e2(381) + _0x47786f + '"'), fs[_0x5162e2(354)](path['join'](_0x2577e9, _0x4216d4[_0x5162e2(375)], 'app.asar.unpacked', _0x4216d4['ecIpl'], 'atom.png'), path['join'](_0x47786f, _0x1fa4ab + _0x5162e2(382))), console[_0x5162e2(323)](_0x5162e2(383) + _0x20d565 + '"'), fs[_0x5162e2(354)](path['join'](_0x2577e9, _0x4216d4[_0x5162e2(375)], _0x4216d4[_0x5162e2(384)]), path[_0x5162e2(337)](_0x20d565, _0x4216d4[_0x5162e2(385)])), console['log'](_0x5162e2(386) + _0x1cd9f9 + '"'), fs['copySync'](path[_0x5162e2(337)](CONFIG[_0x5162e2(358)], _0x4216d4[_0x5162e2(375)], _0x5162e2(369), _0x4216d4[_0x5162e2(387)]), path[_0x5162e2(337)](_0x1cd9f9, _0x4216d4[_0x5162e2(388)], _0x4216d4[_0x5162e2(389)], 'atom-' + CONFIG[_0x5162e2(324)] + _0x5162e2(390))), console[_0x5162e2(323)](_0x5162e2(391) + _0x4216dc), _0x4216d4[_0x5162e2(392)](spawnSync, _0x4216d4[_0x5162e2(393)], [
        _0x4216d4[_0x5162e2(394)],
        '-b',
        _0x4216dc
    ], { 'stdio': _0x4216d4[_0x5162e2(395)] }), console['log'](_0x5162e2(396) + _0x3fe667 + '"'), fs[_0x5162e2(354)](_0x4216dc + _0x5162e2(350), _0x3fe667);
};
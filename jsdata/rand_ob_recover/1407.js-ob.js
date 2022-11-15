const fs = require(_0x136916(347)), os = require('os'), path = require(_0x136916(348)), spawnSync = require(_0x136916(349)), template = require('lodash.template'), CONFIG = require('../config');
module[_0x136916(350)] = function (_0x1c7952) {
    const _0x41951f = _0x136916, _0x48d776 = {
            'DvkXB': function (_0x542c6d, _0x265235) {
                return _0x542c6d === _0x265235;
            },
            'AzUGa': _0x41951f(351),
            'lGQsS': _0x41951f(352),
            'JwGdH': _0x41951f(353),
            'qsevk': 'i386',
            'wBpxU': function (_0x4c4ed1, _0x3edf16) {
                return _0x4c4ed1 === _0x3edf16;
            },
            'mMDYl': _0x41951f(354),
            'DrcqI': _0x41951f(355),
            'UTKuN': function (_0x4b1226, _0x330c2b) {
                return _0x4b1226 === _0x330c2b;
            },
            'TWYZL': _0x41951f(356),
            'BwGiE': _0x41951f(357),
            'hnjDY': _0x41951f(358),
            'iTByt': _0x41951f(359),
            'VxLpf': _0x41951f(360),
            'CFprm': _0x41951f(361),
            'oqTME': _0x41951f(362),
            'qErAp': _0x41951f(363),
            'aHPuV': _0x41951f(364),
            'THpsc': _0x41951f(365),
            'Fasof': _0x41951f(366),
            'nmmVh': 'node_modules',
            'mGjVk': _0x41951f(367),
            'sCEuO': _0x41951f(368),
            'OAXFw': _0x41951f(369),
            'VIPeD': _0x41951f(370),
            'LKebZ': _0x41951f(371),
            'dSYWT': 'debian',
            'VLoAR': function (_0x26d94a, _0x5b444b) {
                return _0x26d94a(_0x5b444b);
            },
            'eVAri': _0x41951f(372),
            'KHnPv': _0x41951f(373),
            'BzTTL': _0x41951f(374),
            'eCcYk': _0x41951f(375),
            'PvIdG': _0x41951f(376),
            'rtApV': _0x41951f(377),
            'AKsUN': _0x41951f(378),
            'CqTES': _0x41951f(379),
            'DzuOT': _0x41951f(380)
        };
    console[_0x41951f(381)](_0x41951f(382) + _0x1c7952 + '"');
    const _0x561d67 = _0x48d776[_0x41951f(383)](CONFIG[_0x41951f(384)], _0x48d776['AzUGa']) ? _0x48d776[_0x41951f(385)] : 'atom-' + CONFIG['channel'], _0x565352 = CONFIG[_0x41951f(384)] === _0x48d776[_0x41951f(386)] ? _0x48d776['JwGdH'] : 'apm-' + CONFIG[_0x41951f(384)], _0x4e14ff = CONFIG[_0x41951f(387)][_0x41951f(388)], _0x5cee25 = CONFIG['appMetadata']['version'];
    let _0x363983;
    if (process['arch'] === _0x41951f(389))
        _0x363983 = _0x48d776['qsevk'];
    else {
        if (_0x48d776['wBpxU'](process[_0x41951f(390)], _0x48d776[_0x41951f(391)]))
            _0x363983 = _0x48d776[_0x41951f(392)];
        else
            _0x48d776[_0x41951f(393)](process[_0x41951f(390)], 'ppc') ? _0x363983 = _0x48d776[_0x41951f(394)] : _0x363983 = process[_0x41951f(390)];
    }
    const _0x16385a = path[_0x41951f(395)](CONFIG[_0x41951f(396)], 'atom-' + _0x363983 + '.deb'), _0x552516 = path['join'](os[_0x41951f(397)](), path[_0x41951f(398)](_0x1c7952)), _0xf10a9c = path['join'](_0x552516, _0x48d776['BwGiE']), _0x21d87b = path[_0x41951f(395)](_0x552516, _0x48d776[_0x41951f(399)]), _0x168e73 = path[_0x41951f(395)](_0x21d87b, _0x48d776[_0x41951f(400)]), _0x22c2bd = path['join'](_0x21d87b, _0x48d776[_0x41951f(401)]), _0x2207fa = path[_0x41951f(395)](_0x22c2bd, _0x561d67), _0x551828 = path[_0x41951f(395)](_0x22c2bd, _0x48d776[_0x41951f(402)]), _0x4ff09c = path['join'](_0x22c2bd, _0x48d776[_0x41951f(403)]), _0x57cc45 = path[_0x41951f(395)](_0x22c2bd, _0x48d776['qErAp'], _0x561d67);
    fs[_0x41951f(404)](_0x552516) && (console[_0x41951f(381)](_0x41951f(405) + _0x552516 + '"'), fs[_0x41951f(406)](_0x552516));
    fs['existsSync'](_0x552516 + _0x41951f(407)) && (console[_0x41951f(381)](_0x41951f(408) + _0x552516 + '.deb"'), fs[_0x41951f(406)](_0x552516 + '.deb'));
    fs['existsSync'](_0x552516) && (console[_0x41951f(381)]('Deleting existing Debian package at "' + _0x16385a + '"'), fs[_0x41951f(406)](_0x552516));
    console[_0x41951f(381)](_0x41951f(409) + _0x552516 + '"'), fs[_0x41951f(410)](_0x552516), fs[_0x41951f(410)](_0xf10a9c), fs[_0x41951f(410)](_0x21d87b), fs[_0x41951f(410)](_0x22c2bd), fs[_0x41951f(410)](_0x551828), fs['mkdirpSync'](_0x4ff09c), fs['mkdirpSync'](_0x57cc45), fs[_0x41951f(410)](_0x168e73), console['log'](_0x41951f(411) + _0x1c7952 + _0x41951f(412) + _0x2207fa + '"'), fs[_0x41951f(413)](_0x1c7952, _0x2207fa), fs[_0x41951f(414)](_0x2207fa, _0x41951f(415)), console[_0x41951f(381)](_0x41951f(416) + _0x168e73 + '"'), fs[_0x41951f(413)](path[_0x41951f(395)](CONFIG[_0x41951f(417)], _0x48d776['aHPuV']), path[_0x41951f(395)](_0x168e73, _0x561d67)), fs['symlinkSync'](path[_0x41951f(395)]('..', _0x48d776[_0x41951f(401)], _0x561d67, _0x48d776[_0x41951f(418)], _0x48d776[_0x41951f(419)], _0x48d776[_0x41951f(420)], _0x48d776[_0x41951f(421)], _0x48d776[_0x41951f(422)], _0x41951f(353)), path[_0x41951f(395)](_0x168e73, _0x565352)), fs[_0x41951f(414)](path[_0x41951f(395)](_0x2207fa, _0x48d776[_0x41951f(423)]), _0x48d776[_0x41951f(424)]), console[_0x41951f(381)](_0x41951f(425) + _0xf10a9c + '"');
    const _0x4d1824 = spawnSync('du', [
            _0x48d776[_0x41951f(426)],
            _0x1c7952
        ])[_0x41951f(427)][_0x41951f(428)]()['split'](/\s+/)[-7629 + 7865 + 2 * -118], _0x36091f = fs[_0x41951f(429)](path[_0x41951f(395)](CONFIG[_0x41951f(417)], _0x48d776[_0x41951f(418)], _0x48d776[_0x41951f(430)], _0x48d776[_0x41951f(431)], _0x41951f(432))), _0x17554c = _0x48d776[_0x41951f(433)](template, _0x36091f)({
            'appFileName': _0x561d67,
            'version': _0x5cee25,
            'arch': _0x363983,
            'installedSize': _0x4d1824,
            'description': _0x4e14ff
        });
    fs[_0x41951f(434)](path[_0x41951f(395)](_0xf10a9c, _0x41951f(435)), _0x17554c), console[_0x41951f(381)](_0x41951f(436) + _0x551828 + '"');
    const _0xbfdaa9 = fs['readFileSync'](path[_0x41951f(395)](CONFIG['repositoryRootPath'], _0x48d776[_0x41951f(418)], _0x48d776[_0x41951f(430)], _0x48d776[_0x41951f(437)])), _0x251fed = _0x48d776[_0x41951f(433)](template, _0xbfdaa9)({
            'appName': CONFIG[_0x41951f(438)],
            'appFileName': _0x561d67,
            'description': _0x4e14ff,
            'installDir': _0x48d776[_0x41951f(439)],
            'iconPath': _0x561d67
        });
    fs[_0x41951f(434)](path[_0x41951f(395)](_0x551828, _0x561d67 + _0x41951f(440)), _0x251fed), console[_0x41951f(381)](_0x41951f(441) + _0x4ff09c + '"'), fs[_0x41951f(413)](path[_0x41951f(395)](_0x1c7952, _0x41951f(365), _0x48d776['BzTTL'], _0x41951f(365), _0x48d776[_0x41951f(442)]), path[_0x41951f(395)](_0x4ff09c, _0x561d67 + _0x41951f(443))), console[_0x41951f(381)](_0x41951f(444) + _0x57cc45 + '"'), fs[_0x41951f(413)](path[_0x41951f(395)](_0x1c7952, _0x48d776['THpsc'], _0x48d776['PvIdG']), path[_0x41951f(395)](_0x57cc45, _0x48d776[_0x41951f(445)])), console[_0x41951f(381)](_0x41951f(446) + _0x22c2bd + '"'), fs[_0x41951f(413)](path[_0x41951f(395)](CONFIG[_0x41951f(417)], 'resources', _0x41951f(371), _0x48d776[_0x41951f(447)]), path[_0x41951f(395)](_0x22c2bd, 'polkit-1', _0x48d776['CqTES'], _0x41951f(448) + CONFIG[_0x41951f(384)] + _0x41951f(449))), console['log'](_0x41951f(450) + _0x552516), spawnSync(_0x48d776[_0x41951f(451)], [
        _0x41951f(452),
        '-b',
        _0x552516
    ], { 'stdio': _0x41951f(453) }), console['log'](_0x41951f(454) + _0x16385a + '"'), fs[_0x41951f(413)](_0x552516 + '.deb', _0x16385a);
};
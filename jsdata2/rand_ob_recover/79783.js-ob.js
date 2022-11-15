const {getPlatformFilterTag, normalizeNodeModules, jsPreprocessOptions} = require(_0x1db68f(423)), preprocessor = require(_0x1db68f(424)), FILTER_TAG = getPlatformFilterTag();
function preprocessBlock(_0x162f7b) {
    const _0x53c3a0 = _0x1db68f;
    return _0x162f7b[_0x53c3a0(425)] && (_0x162f7b[_0x53c3a0(425)] = preprocessor[_0x53c3a0(426)](_0x162f7b[_0x53c3a0(425)], jsPreprocessOptions['context'], { 'type': jsPreprocessOptions[_0x53c3a0(427)] })[_0x53c3a0(428)]()), _0x162f7b;
}
module[_0x1db68f(429)] = function parseCustomBlocks(_0x48517f, _0x4265ba) {
    const _0x464329 = _0x1db68f, _0x1fd19c = {
            'LGYaT': function (_0x1bf20e, _0x593869) {
                return _0x1bf20e === _0x593869;
            },
            'cOXWC': function (_0x1a29a5, _0xe1fd07) {
                return _0x1a29a5(_0xe1fd07);
            },
            'JLaWB': function (_0xb82963, _0x40f70e) {
                return _0xb82963 === _0x40f70e;
            },
            'FQpIV': _0x464329(430),
            'oTlbu': function (_0x3d7b20, _0x2c5b0b) {
                return _0x3d7b20(_0x2c5b0b);
            },
            'ixDRM': _0x464329(431),
            'sLgjI': _0x464329(432),
            'Elwma': _0x464329(433),
            'aBUgi': _0x464329(434)
        };
    process[_0x464329(435)][_0x464329(436)] && process[_0x464329(435)][_0x464329(436)][_0x464329(437)](_0x1fd19c['ixDRM']) === 41 * -183 + 3978 * -1 + -1 * -11481 && !_0x48517f[_0x464329(432)] && (_0x48517f['script'] = {
        'type': _0x1fd19c[_0x464329(438)],
        'content': _0x1fd19c[_0x464329(439)],
        'start': 100,
        'attrs': {},
        'end': 125
    });
    if (!_0x48517f['template'] || !FILTER_TAG || _0x4265ba['isAppNVue'])
        return _0x48517f[_0x464329(440)][_0x464329(441)] = 5 * 1282 + 8752 + -15162, _0x48517f;
    const _0x2edf12 = Object['create'](null);
    _0x48517f[_0x464329(440)] = _0x48517f[_0x464329(440)][_0x464329(442)](_0x7f196c => {
        const _0x18dc26 = _0x464329;
        if (_0x7f196c['attrs'][_0x18dc26(443)] && (_0x1fd19c['LGYaT'](_0x7f196c[_0x18dc26(427)], FILTER_TAG) || _0x1fd19c[_0x18dc26(444)](_0x7f196c[_0x18dc26(445)][_0x18dc26(446)], FILTER_TAG)))
            return _0x2edf12[_0x7f196c[_0x18dc26(445)][_0x18dc26(443)]] = _0x1fd19c[_0x18dc26(447)](preprocessBlock, _0x7f196c), !![];
        _0x7f196c[_0x18dc26(445)][_0x18dc26(443)] && (_0x1fd19c[_0x18dc26(448)](_0x7f196c[_0x18dc26(427)], _0x1fd19c[_0x18dc26(449)]) || _0x7f196c[_0x18dc26(445)]['lang'] === _0x18dc26(430)) && (_0x7f196c[_0x18dc26(427)] = _0x1fd19c[_0x18dc26(449)], _0x7f196c[_0x18dc26(445)][_0x18dc26(446)] = 'js', _0x48517f[_0x18dc26(430)] = _0x1fd19c[_0x18dc26(450)](preprocessBlock, _0x7f196c), _0x2edf12[_0x7f196c[_0x18dc26(445)][_0x18dc26(443)]] = Object[_0x18dc26(451)]({}, _0x7f196c, { 'content': '' }));
    });
    if (Object[_0x464329(452)](_0x2edf12)[_0x464329(441)]) {
        const _0xb6f285 = JSON['parse'](JSON[_0x464329(453)](_0x2edf12));
        Object[_0x464329(452)](_0xb6f285)[_0x464329(454)](_0x50f585 => {
            const _0x4a69c1 = _0x464329, _0x16df95 = _0xb6f285[_0x50f585];
            _0x16df95[_0x4a69c1(445)][_0x4a69c1(455)] && (_0x16df95[_0x4a69c1(445)][_0x4a69c1(455)] = normalizeNodeModules(_0x16df95[_0x4a69c1(445)][_0x4a69c1(455)]));
        }), _0x48517f[_0x464329(456)]['attrs'][_0x1fd19c[_0x464329(457)]] = Buffer[_0x464329(458)](JSON['stringify'](_0xb6f285))[_0x464329(459)](_0x464329(460));
    }
    return _0x48517f;
};
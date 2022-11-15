function _0x12d9(_0x3e4ffc, _0x1dc97f) {
    return _0x12d9 = function (_0x24c417, _0x12d982) {
        _0x24c417 = _0x24c417 - 363;
        var _0x5207b4 = _0x24c4[_0x24c417];
        return _0x5207b4;
    }, _0x12d9(_0x3e4ffc, _0x1dc97f);
}
const semver = require(_0xe56ef6(372)), url = require(_0xe56ef6(373)), path = require('path'), log = require(_0xe56ef6(374)), headersTarballRange = _0xe56ef6(375), bitsre = /\/win-(x86|x64|arm64)\//, bitsreV3 = /\/win-(x86|ia32|x64)\//;
function processRelease(_0x1bb458, _0x4b2ec3, _0x1bf0db, _0x3b5328) {
    var _0x582194 = _0xe56ef6, _0x3cd51d = semver[_0x582194(376)](_0x1bb458[0]) && _0x1bb458[0] || _0x4b2ec3['opts'][_0x582194(377)] || _0x1bf0db, _0xa341b8 = semver[_0x582194(378)](_0x3cd51d), _0x355cf5 = _0x4b2ec3[_0x582194(379)]['dist-url'] || _0x4b2ec3['opts'][_0x582194(380)], _0x3a56e7, _0x588d2b, _0x5243c6, _0x41169f, _0x1789c4, _0x210928, _0x144298, _0x1fa5c5, _0x244e0e, _0x1246c1;
    if (!_0xa341b8)
        return { 'version': _0x3cd51d };
    return _0x3cd51d = _0xa341b8[_0x582194(381)], _0x3a56e7 = _0x3cd51d === semver[_0x582194(378)](_0x1bf0db)['version'], !_0x3a56e7 && (_0x3b5328 = null), _0x3b5328 ? _0x5243c6 = _0x3b5328['name'][_0x582194(382)](/io\.js/, _0x582194(383)) : (_0x588d2b = _0xa341b8[_0x582194(384)] >= 1 && _0xa341b8[_0x582194(384)] < 4, _0x5243c6 = _0x588d2b ? 'iojs' : _0x582194(385)), !_0x355cf5 && process[_0x582194(386)][_0x582194(387)] && (_0x355cf5 = process[_0x582194(386)]['NODEJS_ORG_MIRROR']), _0x355cf5 && log['verbose'](_0x582194(388), _0x582194(389), _0x355cf5), _0x355cf5 ? _0x41169f = _0x355cf5[_0x582194(382)](/\/+$/, '') : _0x41169f = 'https://nodejs.org/dist', _0x41169f += '/v' + _0x3cd51d + '/', _0x3b5328 && _0x3b5328[_0x582194(390)] && !_0x355cf5 ? (_0x1789c4 = url['resolve'](_0x3b5328[_0x582194(390)], './'), _0x210928 = resolveLibUrl(_0x5243c6, _0x3b5328['libUrl'] || _0x1789c4 || _0x41169f, 'x86', _0xa341b8['major']), _0x144298 = resolveLibUrl(_0x5243c6, _0x3b5328[_0x582194(391)] || _0x1789c4 || _0x41169f, _0x582194(392), _0xa341b8[_0x582194(384)]), _0x1fa5c5 = resolveLibUrl(_0x5243c6, _0x3b5328[_0x582194(391)] || _0x1789c4 || _0x41169f, _0x582194(393), _0xa341b8[_0x582194(384)]), _0x244e0e = _0x3b5328[_0x582194(390)]) : (_0x1789c4 = _0x41169f, _0x210928 = resolveLibUrl(_0x5243c6, _0x1789c4, _0x582194(394), _0xa341b8['major']), _0x144298 = resolveLibUrl(_0x5243c6, _0x1789c4, _0x582194(392), _0xa341b8[_0x582194(384)]), _0x1fa5c5 = resolveLibUrl(_0x5243c6, _0x1789c4, 'arm64', _0xa341b8[_0x582194(384)]), _0x1246c1 = semver['satisfies'](_0xa341b8, headersTarballRange), _0x244e0e = url[_0x582194(395)](_0x1789c4, _0x5243c6 + '-v' + _0x3cd51d + (_0x1246c1 ? '-headers' : '') + _0x582194(396))), {
        'version': _0x3cd51d,
        'semver': _0xa341b8,
        'name': _0x5243c6,
        'baseUrl': _0x1789c4,
        'tarballUrl': _0x244e0e,
        'shasumsUrl': url[_0x582194(395)](_0x1789c4, _0x582194(397)),
        'versionDir': (_0x5243c6 !== _0x582194(385) ? _0x5243c6 + '-' : '') + _0x3cd51d,
        'ia32': {
            'libUrl': _0x210928,
            'libPath': normalizePath(path[_0x582194(398)](url['parse'](_0x1789c4)[_0x582194(399)], url['parse'](_0x210928)[_0x582194(399)]))
        },
        'x64': {
            'libUrl': _0x144298,
            'libPath': normalizePath(path[_0x582194(398)](url[_0x582194(378)](_0x1789c4)[_0x582194(399)], url[_0x582194(378)](_0x144298)[_0x582194(399)]))
        },
        'arm64': {
            'libUrl': _0x1fa5c5,
            'libPath': normalizePath(path[_0x582194(398)](url[_0x582194(378)](_0x1789c4)[_0x582194(399)], url[_0x582194(378)](_0x1fa5c5)[_0x582194(399)]))
        }
    };
}
function normalizePath(_0xf772f6) {
    var _0x53c546 = _0xe56ef6;
    return path['normalize'](_0xf772f6)[_0x53c546(382)](/\\/g, '/');
}
function resolveLibUrl(_0x5b3939, _0x226dac, _0x593658, _0x324957) {
    var _0x36b724 = _0xe56ef6, _0x2f4099 = url[_0x36b724(395)](_0x226dac, './'), _0x5ce96b = bitsre[_0x36b724(400)](_0x226dac) || _0x324957 === 3 && bitsreV3[_0x36b724(400)](_0x226dac);
    if (!_0x5ce96b) {
        if (_0x324957 >= 1)
            return url[_0x36b724(395)](_0x2f4099, _0x36b724(401) + _0x593658 + '/' + _0x5b3939 + _0x36b724(402));
        return url['resolve'](_0x2f4099, (_0x593658 === _0x36b724(394) ? '' : _0x593658 + '/') + _0x5b3939 + '.lib');
    }
    return _0x226dac[_0x36b724(382)](_0x324957 === 3 ? bitsreV3 : bitsre, _0x36b724(403) + _0x593658 + '/');
}
module['exports'] = processRelease;
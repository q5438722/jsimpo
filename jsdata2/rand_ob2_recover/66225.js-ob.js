const semver = require(_0x3fa369(310)), url = require(_0x3fa369(311)), path = require('path'), log = require(_0x3fa369(312)), headersTarballRange = '>= 3.0.0 || ~0.12.10 || ~0.10.42', bitsre = /\/win-(x86|x64|arm64)\//, bitsreV3 = /\/win-(x86|ia32|x64)\//;
function processRelease(_0x55e36a, _0x58e96e, _0x448656, _0x3c743c) {
    var _0x5f1326 = _0x3fa369, _0x398aae = semver['valid'](_0x55e36a[0]) && _0x55e36a[0] || _0x58e96e['opts'][_0x5f1326(313)] || _0x448656, _0x4ed092 = semver['parse'](_0x398aae), _0x303f69 = _0x58e96e[_0x5f1326(314)]['dist-url'] || _0x58e96e[_0x5f1326(314)][_0x5f1326(315)], _0x1b5126, _0x45bffc, _0x40aa46, _0x37c0aa, _0x519ece, _0x5e6741, _0x1e0fd0, _0x103216, _0x5ee06f, _0x59ea26;
    if (!_0x4ed092)
        return { 'version': _0x398aae };
    return _0x398aae = _0x4ed092[_0x5f1326(316)], _0x1b5126 = _0x398aae === semver[_0x5f1326(317)](_0x448656)[_0x5f1326(316)], !_0x1b5126 && (_0x3c743c = null), _0x3c743c ? _0x40aa46 = _0x3c743c[_0x5f1326(318)]['replace'](/io\.js/, 'iojs') : (_0x45bffc = _0x4ed092[_0x5f1326(319)] >= 1 && _0x4ed092['major'] < 4, _0x40aa46 = _0x45bffc ? _0x5f1326(320) : _0x5f1326(321)), !_0x303f69 && process[_0x5f1326(322)][_0x5f1326(323)] && (_0x303f69 = process['env']['NODEJS_ORG_MIRROR']), _0x303f69 && log[_0x5f1326(324)](_0x5f1326(325), _0x5f1326(326), _0x303f69), _0x303f69 ? _0x37c0aa = _0x303f69[_0x5f1326(327)](/\/+$/, '') : _0x37c0aa = _0x5f1326(328), _0x37c0aa += '/v' + _0x398aae + '/', _0x3c743c && _0x3c743c['headersUrl'] && !_0x303f69 ? (_0x519ece = url[_0x5f1326(329)](_0x3c743c[_0x5f1326(330)], './'), _0x5e6741 = resolveLibUrl(_0x40aa46, _0x3c743c['libUrl'] || _0x519ece || _0x37c0aa, _0x5f1326(331), _0x4ed092[_0x5f1326(319)]), _0x1e0fd0 = resolveLibUrl(_0x40aa46, _0x3c743c[_0x5f1326(332)] || _0x519ece || _0x37c0aa, _0x5f1326(333), _0x4ed092[_0x5f1326(319)]), _0x103216 = resolveLibUrl(_0x40aa46, _0x3c743c[_0x5f1326(332)] || _0x519ece || _0x37c0aa, _0x5f1326(334), _0x4ed092['major']), _0x5ee06f = _0x3c743c[_0x5f1326(330)]) : (_0x519ece = _0x37c0aa, _0x5e6741 = resolveLibUrl(_0x40aa46, _0x519ece, 'x86', _0x4ed092[_0x5f1326(319)]), _0x1e0fd0 = resolveLibUrl(_0x40aa46, _0x519ece, _0x5f1326(333), _0x4ed092[_0x5f1326(319)]), _0x103216 = resolveLibUrl(_0x40aa46, _0x519ece, _0x5f1326(334), _0x4ed092[_0x5f1326(319)]), _0x59ea26 = semver[_0x5f1326(335)](_0x4ed092, headersTarballRange), _0x5ee06f = url['resolve'](_0x519ece, _0x40aa46 + '-v' + _0x398aae + (_0x59ea26 ? '-headers' : '') + '.tar.gz')), {
        'version': _0x398aae,
        'semver': _0x4ed092,
        'name': _0x40aa46,
        'baseUrl': _0x519ece,
        'tarballUrl': _0x5ee06f,
        'shasumsUrl': url[_0x5f1326(329)](_0x519ece, _0x5f1326(336)),
        'versionDir': (_0x40aa46 !== _0x5f1326(321) ? _0x40aa46 + '-' : '') + _0x398aae,
        'ia32': {
            'libUrl': _0x5e6741,
            'libPath': normalizePath(path[_0x5f1326(337)](url['parse'](_0x519ece)[_0x5f1326(338)], url[_0x5f1326(317)](_0x5e6741)[_0x5f1326(338)]))
        },
        'x64': {
            'libUrl': _0x1e0fd0,
            'libPath': normalizePath(path['relative'](url[_0x5f1326(317)](_0x519ece)[_0x5f1326(338)], url[_0x5f1326(317)](_0x1e0fd0)['path']))
        },
        'arm64': {
            'libUrl': _0x103216,
            'libPath': normalizePath(path['relative'](url[_0x5f1326(317)](_0x519ece)[_0x5f1326(338)], url['parse'](_0x103216)[_0x5f1326(338)]))
        }
    };
}
function normalizePath(_0x5dd998) {
    var _0x5ba9af = _0x3fa369;
    return path[_0x5ba9af(339)](_0x5dd998)[_0x5ba9af(327)](/\\/g, '/');
}
function _0x52fb(_0x1c6193, _0x425a35) {
    return _0x52fb = function (_0x779fe9, _0x52fb99) {
        _0x779fe9 = _0x779fe9 - 297;
        var _0x3b2558 = _0x779f[_0x779fe9];
        return _0x3b2558;
    }, _0x52fb(_0x1c6193, _0x425a35);
}
function resolveLibUrl(_0x1ba0d2, _0x2a86ac, _0x2387c9, _0x25844f) {
    var _0x1bc4ee = _0x3fa369, _0x4cb09d = url[_0x1bc4ee(329)](_0x2a86ac, './'), _0x46ab4a = bitsre[_0x1bc4ee(340)](_0x2a86ac) || _0x25844f === 3 && bitsreV3[_0x1bc4ee(340)](_0x2a86ac);
    if (!_0x46ab4a) {
        if (_0x25844f >= 1)
            return url[_0x1bc4ee(329)](_0x4cb09d, _0x1bc4ee(341) + _0x2387c9 + '/' + _0x1ba0d2 + _0x1bc4ee(342));
        return url['resolve'](_0x4cb09d, (_0x2387c9 === _0x1bc4ee(331) ? '' : _0x2387c9 + '/') + _0x1ba0d2 + _0x1bc4ee(342));
    }
    return _0x2a86ac[_0x1bc4ee(327)](_0x25844f === 3 ? bitsreV3 : bitsre, '/win-' + _0x2387c9 + '/');
}
module['exports'] = processRelease;
'use strict';
const semver = require('semver'), url = require('url'), path = require('path'), log = require('npmlog'), headersTarballRange = '>=\x203.0.0\x20||\x20~0.12.10\x20||\x20~0.10.42', bitsre = /\/win-(x86|x64|arm64)\//, bitsreV3 = /\/win-(x86|ia32|x64)\//;
function processRelease(_0xc46588, _0x214b53, _0x1755fe, _0x470d7a) {
    var _0x6c8779 = semver['valid'](_0xc46588[0x25e8 + -0x2022 + -0x5c6]) && _0xc46588[0x3 * -0xceb + -0x23 * -0x57 + 0xd6e * 0x2] || _0x214b53['opts']['target'] || _0x1755fe, _0x5dc4d9 = semver['parse'](_0x6c8779), _0x18d2f6 = _0x214b53['opts']['dist-url'] || _0x214b53['opts']['disturl'], _0x2b37fe, _0x14f681, _0x1fcc6b, _0x145846, _0x20078e, _0x743f16, _0x5de818, _0x156c5e, _0x1cad5f, _0x2478ed;
    if (!_0x5dc4d9)
        return { 'version': _0x6c8779 };
    return _0x6c8779 = _0x5dc4d9['version'], _0x2b37fe = _0x6c8779 === semver['parse'](_0x1755fe)['version'], !_0x2b37fe && (_0x470d7a = null), _0x470d7a ? _0x1fcc6b = _0x470d7a['name']['replace'](/io\.js/, 'iojs') : (_0x14f681 = _0x5dc4d9['major'] >= -0x1 * -0x13e1 + 0x142c + 0x3a4 * -0xb && _0x5dc4d9['major'] < -0x15cb + -0x133 * -0x1 + -0x1 * -0x149c, _0x1fcc6b = _0x14f681 ? 'iojs' : 'node'), !_0x18d2f6 && process['env']['NODEJS_ORG_MIRROR'] && (_0x18d2f6 = process['env']['NODEJS_ORG_MIRROR']), _0x18d2f6 && log['verbose']('download', 'using\x20dist-url', _0x18d2f6), _0x18d2f6 ? _0x145846 = _0x18d2f6['replace'](/\/+$/, '') : _0x145846 = 'https://nodejs.org/dist', _0x145846 += '/v' + _0x6c8779 + '/', _0x470d7a && _0x470d7a['headersUrl'] && !_0x18d2f6 ? (_0x20078e = url['resolve'](_0x470d7a['headersUrl'], './'), _0x743f16 = resolveLibUrl(_0x1fcc6b, _0x470d7a['libUrl'] || _0x20078e || _0x145846, 'x86', _0x5dc4d9['major']), _0x5de818 = resolveLibUrl(_0x1fcc6b, _0x470d7a['libUrl'] || _0x20078e || _0x145846, 'x64', _0x5dc4d9['major']), _0x156c5e = resolveLibUrl(_0x1fcc6b, _0x470d7a['libUrl'] || _0x20078e || _0x145846, 'arm64', _0x5dc4d9['major']), _0x1cad5f = _0x470d7a['headersUrl']) : (_0x20078e = _0x145846, _0x743f16 = resolveLibUrl(_0x1fcc6b, _0x20078e, 'x86', _0x5dc4d9['major']), _0x5de818 = resolveLibUrl(_0x1fcc6b, _0x20078e, 'x64', _0x5dc4d9['major']), _0x156c5e = resolveLibUrl(_0x1fcc6b, _0x20078e, 'arm64', _0x5dc4d9['major']), _0x2478ed = semver['satisfies'](_0x5dc4d9, headersTarballRange), _0x1cad5f = url['resolve'](_0x20078e, _0x1fcc6b + '-v' + _0x6c8779 + (_0x2478ed ? '-headers' : '') + '.tar.gz')), {
        'version': _0x6c8779,
        'semver': _0x5dc4d9,
        'name': _0x1fcc6b,
        'baseUrl': _0x20078e,
        'tarballUrl': _0x1cad5f,
        'shasumsUrl': url['resolve'](_0x20078e, 'SHASUMS256.txt'),
        'versionDir': (_0x1fcc6b !== 'node' ? _0x1fcc6b + '-' : '') + _0x6c8779,
        'ia32': {
            'libUrl': _0x743f16,
            'libPath': normalizePath(path['relative'](url['parse'](_0x20078e)['path'], url['parse'](_0x743f16)['path']))
        },
        'x64': {
            'libUrl': _0x5de818,
            'libPath': normalizePath(path['relative'](url['parse'](_0x20078e)['path'], url['parse'](_0x5de818)['path']))
        },
        'arm64': {
            'libUrl': _0x156c5e,
            'libPath': normalizePath(path['relative'](url['parse'](_0x20078e)['path'], url['parse'](_0x156c5e)['path']))
        }
    };
}
function normalizePath(_0x57b1c4) {
    return path['normalize'](_0x57b1c4)['replace'](/\\/g, '/');
}
function resolveLibUrl(_0x37a876, _0x19f2d4, _0x29eb0b, _0x264d20) {
    var _0x18cbc6 = url['resolve'](_0x19f2d4, './'), _0x16846d = bitsre['test'](_0x19f2d4) || _0x264d20 === 0x8 * 0x3d1 + -0xd * -0x31 + -0x1a * 0x145 && bitsreV3['test'](_0x19f2d4);
    if (!_0x16846d) {
        if (_0x264d20 >= -0x82 * -0x47 + 0x1019 + -0x3426)
            return url['resolve'](_0x18cbc6, 'win-' + _0x29eb0b + '/' + _0x37a876 + '.lib');
        return url['resolve'](_0x18cbc6, (_0x29eb0b === 'x86' ? '' : _0x29eb0b + '/') + _0x37a876 + '.lib');
    }
    return _0x19f2d4['replace'](_0x264d20 === -0x158d * 0x1 + 0x1cd1 + -0x741 ? bitsreV3 : bitsre, '/win-' + _0x29eb0b + '/');
}
module['exports'] = processRelease;
